from django.shortcuts import render, get_object_or_404
from django.template.loader import render_to_string
from django.http import JsonResponse
from django.urls import reverse
from .models import *
from auth_reg.models import *
import pandas

# Create your views here.
def main_view(request):
    context = {}
    # если пользователь авторизован
    if request.user.is_authenticated:
        context['username'] = request.user.username
        context['signed_in'] = True
        
    return render(request, 'course/main.html', context)

# для страницы курса со всеми заданиями
def course_view(request):
    context = {}
    
    try:
        user_status = UserProfile.objects.get(user=request.user)
        
        if user_status.role == 'teacher':
            context['user_status'] = 'teacher'
        elif user_status.role == 'student':
            context['user_status'] = 'student'
    except UserProfile.DoesNotExist: pass
        
    # если пользователь авторизован
    if request.user.is_authenticated:
        context['username'] = request.user.username
        context['signed_in'] = True
        
    if request.method == 'POST':
        # если добавляем задание
        if 'add_task' in request.POST:
            task_name = request.POST.get('taskname')
            task_file = request.FILES.get('taskfile')
            additional_words_file = request.FILES.get('additional_words_file')
            
            if task_name:
                task = Task.objects.create(name=task_name)
                
                # если указан файл с заданием, парсим его и добавляем в бд
                # то есть, в модель TaskData
                if task_file:
                    df = pandas.read_excel(task_file)

                    for row in df.itertuples(index=False):
                        column1_value = row[0]  # английское предложение
                        column2_value = row[1]  # украинское предложение

                        TaskData.objects.create(
                            task=task,
                            column1=column1_value,
                            column2=column2_value,
                        )
                # если указан файл с дополнительными словами, добавляем их в бд
                # опять же в свою модель - AdditionalWords
                if additional_words_file:
                    # print(11111)
                    df = pandas.read_excel(additional_words_file)

                    # условие, перебирающее таблицу после парсинга
                    for row in df.itertuples(index=False):
                        word_value = row[0] # задаем слова из первого столбца
                        # добавить слова из других столбцов, и объеденить
                        
                        # print(word_value)
 
                        AdditionalWords.objects.create(
                            task=task,
                            word=word_value,
                        )
                
                        
                # получаем ссылку, по которой находится страница с заданием, берем по id
                task_url = reverse('task_detail', args=[task.id])
                
                # рендерим из шаблона в строку блок с заданием
                # чтобы можно было через ajax добавить без проблемчтобы можно было через ajax добавить без проблем
                # иначе будут проблемы с удалением, и переходом на страницу сразу после добавления задания
                task_html = render_to_string('course/task_block.html', {
                    'task': task,
                    'task_url': task_url,
                }, request=request)
                
                # отправляем ajax-у что все круто и можно добавлять, передаем шаблон который нужно добавить на страницу
                return JsonResponse({
                    'addName': True,
                    'error': '',
                    'task_html': task_html,
                })
            else:
                # пишем, что не заполнено поле, отправляя это ajax-у
                return JsonResponse({'error': 'Заповніть поле з назвою завдання'})
        
        # если удаляем задание
        if 'delete_task' in request.POST:
            # узначем, какое задание надо удалять
            task_id = request.POST.get('task_id')
            try:
                # получаем его из бд и удаляем на стороне сервера
                task = Task.objects.get(id=task_id)
                task.delete()
                # отправляем ajax-у, что можно удалять задание на стороне клиента
                return JsonResponse({'deleteTask': True})
            # на крайняк, если задания каким-то образом не будет
            except Task.DoesNotExist:
                return JsonResponse({'success': False, 'error': 'Завдання не знайдено'})
    
    context['all_tasks'] = Task.objects.all()
    
    return render(request, 'course/course.html', context)

# для страницы каждого задания
def task_detail_view(request, task_id):
    context = {}
    # если пользователь авторизован
    if request.user.is_authenticated:
        context['username'] = request.user.username
        context['signed_in'] = True
        
    task = get_object_or_404(Task, id=task_id)
    # получаем список задач по id 
    task_data_list = list(task.task_data.all().order_by('id'))
    # получаем из модели дополнительных слов дополнительные слова
    random_words = list(AdditionalWords.objects.values_list('word', flat=True))
    
    if request.method == 'POST':
        # получаем задание на котором находимся
        current_index = int(request.POST.get('current_index', 0))
        
        # Проверка правильности предложения
        is_correct = int(request.POST.get('is_correct', 0))
        print(is_correct)

        # Обновление или создание записи прогресса пользователя
        user_progress, created = UserProgress.objects.get_or_create(
            user=request.user,
            task=task,
            defaults={'progress_data': {}}
        )

        # Сохраняем прогресс
        progress_data = user_progress.progress_data
        progress_data[current_index] = is_correct
        user_progress.progress_data = progress_data
        user_progress.save()

        # Проверка, есть ли следующее предложение
        if current_index < len(task_data_list) - 1:
            next_data = task_data_list[current_index + 1]
            
            # передаем ajax-у предложения на укр. и англ., и индекс следующего, а также дополнительные слова
            response_data = {
                'column1': next_data.column1,
                'column2': next_data.column2,
                'next_index': current_index + 1,
                'random_words': random_words,
            }
        else:
            response_data = {'error': True}

        return JsonResponse(response_data)

    # получаем первое предложение
    first_data = task.task_data.first()
    context['task'] = task # передаем конкретное задание, на котором находимся через контекст
    context['first_data'] = first_data # передаем первое предложение через контекст
    context['sentences_len'] = range(1, len(task_data_list) + 1) # передаем количество предложений через контекст
    context['randomwords_first'] = random_words # передаем дополнительные слова через контекст
    
    return render(request, 'course/task_detail.html', context)
