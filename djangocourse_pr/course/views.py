from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import *
import pandas
from django.urls import reverse

# Create your views here.
def main_view(request):
    return render(request, 'course/main.html')

def course_view(request):    
    if request.method == 'POST':
        if 'add_task' in request.POST:
            task_name = request.POST.get('taskname')
            task_file = request.FILES.get('taskfile')
            
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
                            column2=column2_value
                        )
                        
                task_url = reverse('task_detail', args=[task.id])
                print(task_url)
                
                return JsonResponse({
                    'addName': True,
                    'error': '',
                    'task': {
                        'id': task.id,
                        'name': task.name,
                        'url': task_url,
                    }
                })
            else:
                return JsonResponse({'error': 'Заповніть поле з назвою завдання'})
        
        if 'delete_task' in request.POST:
            task_id = request.POST.get('task_id')
            print(task_id)
            try:
                task = Task.objects.get(id=task_id)
                task.delete()
                return JsonResponse({'deleteTask': True})
            except Task.DoesNotExist:
                return JsonResponse({'success': False, 'error': 'Завдання не знайдено'})
    
    return render(request, 'course/course.html', {'all_tasks': Task.objects.all()})

def task_detail_view(request, task_id):
    task = get_object_or_404(Task, id=task_id)
    return render(request, 'course/task_detail.html', {'task': task})
