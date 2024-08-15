from django.shortcuts import render, get_object_or_404
from django.template.loader import render_to_string
from django.http import JsonResponse
from django.urls import reverse
from .models import *
import pandas
import random

# Create your views here.
def main_view(request):
    return render(request, 'course/main.html')

def course_view(request):    
    if request.method == 'POST':
        if 'add_task' in request.POST:
            task_name = request.POST.get('taskname')
            task_file = request.FILES.get('taskfile')
            additional_words_file = request.FILES.get('additional_words_file')
            
            if task_name:
                task = Task.objects.create(name=task_name)
                
                if task_file:
                    df = pandas.read_excel(task_file)

                    for row in df.itertuples(index=False):
                        column1_value = row[0]  #английский
                        column2_value = row[1]  #украинский

                        TaskData.objects.create(
                            task=task,
                            column1=column1_value,
                            column2=column2_value,
                        )
                if additional_words_file:
                    # print(11111)
                    df = pandas.read_excel(additional_words_file)

                    for row in df.itertuples(index=False):
                        word_value = row[0]
                        # print(word_value)
 
                        AdditionalWords.objects.create(
                            task=task,
                            word=word_value,
                        )
                
                        
                task_url = reverse('task_detail', args=[task.id])
                
                task_html = render_to_string('course/task_block.html', {
                    'task': task,
                    'task_url': task_url,
                }, request=request)
                
                return JsonResponse({
                    'addName': True,
                    'error': '',
                    'task_html': task_html,
                })
            else:
                return JsonResponse({'error': 'Заповніть поле з назвою завдання'})
        
        if 'delete_task' in request.POST:
            task_id = request.POST.get('task_id')
            try:
                task = Task.objects.get(id=task_id)
                task.delete()
                return JsonResponse({'deleteTask': True})
            except Task.DoesNotExist:
                return JsonResponse({'success': False, 'error': 'Завдання не знайдено'})
    
    return render(request, 'course/course.html', {'all_tasks': Task.objects.all()})

def task_detail_view(request, task_id):
    context = {}
    task = get_object_or_404(Task, id=task_id)
    task_data_list = list(task.task_data.all().order_by('id'))
    random_words = list(AdditionalWords.objects.values_list('word', flat=True))
    
    if request.method == 'POST':
        current_index = int(request.POST.get('current_index', 0))
        
        if current_index < len(task_data_list) - 1:
            next_data = task_data_list[current_index + 1]
            
            response_data = {
                'column1': next_data.column1,
                'column2': next_data.column2,
                'next_index': current_index + 1,
                'random_words': random_words,
            }
        else:
            response_data = {'error': True}

        return JsonResponse(response_data)

    first_data = task.task_data.first()
    context['task'] = task
    context['first_data'] = first_data
    context['sentences_len'] = range(1, len(task_data_list) + 1)
    context['randomwords_first'] = random_words
    
    return render(request, 'course/task_detail.html', context)
