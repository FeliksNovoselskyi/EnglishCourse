# Generated by Django 4.2.7 on 2024-08-15 15:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0004_task_excel_file_taskdata'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='taskdata',
            name='task',
        ),
        migrations.DeleteModel(
            name='Task',
        ),
        migrations.DeleteModel(
            name='TaskData',
        ),
    ]
