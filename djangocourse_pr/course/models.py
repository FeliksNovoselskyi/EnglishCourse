from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# главная модель - урок
class Lesson(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)

# модель задания (наследуется от модели урока)
class Task(Lesson):
    name = models.CharField(max_length=10)
    excel_file = models.FileField(upload_to='excel_files/', blank=True, null=True)
    additional_words_file = models.FileField(upload_to='additional_words_files/', blank=True, null=True)

# две модели, наследуемые от модели задания
# содержат в себе предложения для задания со словами
# а также дополнительные слова
class TaskData(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name='task_data')
    column1 = models.CharField(max_length=255)
    column2 = models.CharField(max_length=255)

class AdditionalWords(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE, related_name='additional_words')
    word = models.CharField(max_length=255)
    
class UserProgress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    current_index = models.PositiveIntegerField(default=0)
    completed_sentences = models.ManyToManyField(TaskData, related_name='completed_by_users', blank=True)
    progress_data = models.JSONField(default=list)
