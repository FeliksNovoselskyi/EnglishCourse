from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Lesson(models.Model):
    lesson_name = models.CharField(max_length=255, blank=True, null=True)
    can_delete = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    
class UserProgress(models.Model):
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    task_name = models.CharField(max_length=10)
    excel_file = models.FileField(upload_to='excel_files/', blank=True, null=True)
    additional_words_file = models.FileField(upload_to='additional_words_files/', blank=True, null=True)
    
    english_sentences = models.JSONField(default=list)
    ukrainian_sentences = models.JSONField(default=list)
    additional_words = models.JSONField(default=list)
    current_index = models.PositiveIntegerField(default=0)
    # progress_data = models.JSONField(default=list)