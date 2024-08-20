from django.shortcuts import render, get_object_or_404
from django.template.loader import render_to_string
from django.http import JsonResponse
from django.urls import reverse
from .models import *
from auth_reg.models import *
import pandas
import json

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
    sentences_dict_list = []
    
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
            
            if task_name and task_file and additional_words_file:
                # если указан файл с заданием, парсим его и добавляем в бд
                sentences = pandas.read_excel(task_file)
                additional_words = pandas.read_excel(additional_words_file)
                
                english_sentences = []
                ukrainian_sentences = []
                additional_words_list = []

                for row in sentences.itertuples(index=False):
                    # column1_value = row[0].split()  # английское предложение
                    column1_value = row[0] # английское предложение
                    column2_value = row[1] # украинское предложение
                    
                    cleaned_value_column1 = column1_value.strip()
                    lines_column1 = cleaned_value_column1.split('\n')
                    cleaned_value_column2 = column2_value.strip()
                    lines_column2 = cleaned_value_column2.split('\n')

                    lines_eng = []
                    lines_ukr = []

                    for line in lines_column1:
                        stripped_line = line.strip()
                        if stripped_line:
                            lines_eng.append(stripped_line)
                            
                    for line in lines_column2:
                        stripped_line = line.strip()
                        if stripped_line:
                            lines_ukr.append(stripped_line)

                    if lines_eng and lines_ukr:
                        english_sentences.extend(lines_eng)
                        ukrainian_sentences.extend(lines_ukr)

                for row in additional_words.itertuples(index=False):
                    word_value = row[0]
                    lines_word = [line.strip() for line in word_value.strip().split('\n') if line.strip()]
                    
                    if lines_word:
                        additional_words_list.extend(lines_word)

                # print(english_sentences)
                # print(ukrainian_sentences)
                # print(additional_words_list)
                
                UserProgress.objects.create(
                    user = request.user,
                    task_name = task_name,
                    english_sentences = english_sentences,
                    ukrainian_sentences = ukrainian_sentences,
                    additional_words = additional_words_list,
                )
                
                user_progress = UserProgress.objects.get(user=request.user, task_name=task_name)
                print(user_progress.ukrainian_sentences)
                        
                        # print(word_value)
 
                        # AdditionalWords.objects.create(
                        #     task=task,
                        #     word=word_value,
                        # )
                
                        
                # получаем ссылку, по которой находится страница с заданием, берем по id
                # task_url = reverse('task_detail', args=[task.id])
                
                # рендерим из шаблона в строку блок с заданием
                # чтобы можно было через ajax добавить без проблемчтобы можно было через ajax добавить без проблем
                # иначе будут проблемы с удалением, и переходом на страницу сразу после добавления задания
                # task_html = render_to_string('course/task_block.html', {
                #     'task': task,
                #     'task_url': task_url,
                # }, request=request)
                
                # отправляем ajax-у что все круто и можно добавлять, передаем шаблон который нужно добавить на страницу
                # return JsonResponse({
                #     'addName': True,
                #     'error': '',
                #     # 'task_html': task_html,
                # })
            else:
                # пишем, что не заполнено поле, отправляя это ajax-у
                return JsonResponse({'error': 'Заповніть усі поля'})
        
        # если удаляем задание
        if 'delete_task' in request.POST:
            # узначем, какое задание надо удалять
            task_id = request.POST.get('task_id')
            # try:
            #     # получаем его из бд и удаляем на стороне сервера
            #     # task = Task.objects.get(id=task_id)
            #     task.delete()
            #     # отправляем ajax-у, что можно удалять задание на стороне клиента
            #     return JsonResponse({'deleteTask': True})
            # # на крайняк, если задания каким-то образом не будет
            # except Task.DoesNotExist:
            #     return JsonResponse({'success': False, 'error': 'Завдання не знайдено'})
    
    # context['all_tasks'] = Task.objects.all()
    return render(request, 'course/course.html', context)

# для страницы каждого задания
def task_detail_view(request, task_id):
    context = {}
    # если пользователь авторизован
    if request.user.is_authenticated:
        context['username'] = request.user.username
        context['signed_in'] = True
        
    # task = get_object_or_404(Task, id=task_id)
    # получаем список задач по id 
    # task_data_list = list(task.task_data.all().order_by('id'))
    # получаем из модели дополнительных слов дополнительные слова
    # random_words = list(AdditionalWords.objects.values_list('word', flat=True))

    # Обновление или создание записи прогресса пользователя
    # user_progress, created = UserProgress.objects.get_or_create(
    #     user=request.user,
    #     # task=task,
    #     defaults={'progress_data': {}}
    # )
    
    if request.method == 'POST':
        # получаем задание на котором находимся
        current_index = int(request.POST.get('current_index', 0))
        
        # Проверка правильности предложения
        is_correct = int(request.POST.get('is_correct', 0))

        # Сохраняем прогресс
        # progress_data = user_progress.progress_data
        # progress_data[current_index] = is_correct
        # user_progress.progress_data = progress_data
        # user_progress.current_index = current_index
        # user_progress.save()
        
        # print(user_progress.current_index)

        # Проверка, есть ли следующее предложение
        # if current_index < len(task_data_list) - 1:
        #     next_data = task_data_list[current_index + 1]
            
        #     # передаем ajax-у предложения на укр. и англ., и индекс следующего, а также дополнительные слова
        #     response_data = {
        #         'column1': next_data.column1,
        #         'column2': next_data.column2,
        #         'next_index': user_progress.current_index + 1,
        #         # 'random_words': random_words,
        #     }
        # else:
        #     response_data = {'error': True}

        # return JsonResponse(response_data)

    # получаем первое предложение
    # first_data = task.task_data.first()
    # context['task'] = task # передаем конкретное задание, на котором находимся через контекст
    # context['first_data'] = first_data # передаем первое предложение через контекст
    # context['sentences_len'] = range(1, len(task_data_list) + 1) # передаем количество предложений через контекст
    # context['randomwords_first'] = random_words # передаем дополнительные слова через контекст
    
    # context['task_after_restart'] = user_progress.current_index
    # print(TaskData.objects.get(id=571))
    # print(len(task_data_list))
    
    return render(request, 'course/task_detail.html', context)
