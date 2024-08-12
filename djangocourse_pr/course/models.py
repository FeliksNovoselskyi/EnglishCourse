from django.db import models

# Create your models here.
class Task(models.Model):
    name = models.CharField(max_length=10)
    excel_file = models.FileField(upload_to='excel_files/', blank=True, null=True)

    def __str__(self):
        return self.name
    
class TaskData(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    column1 = models.CharField(max_length=255)
    column2 = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.column1} - {self.column2}'