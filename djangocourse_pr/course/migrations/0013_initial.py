# Generated by Django 4.2.7 on 2024-08-21 19:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('course', '0012_delete_userprogress'),
    ]

    operations = [
        migrations.CreateModel(
            name='Lesson',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lesson_name', models.CharField(blank=True, max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='UserProgress',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('task_name', models.CharField(max_length=10)),
                ('excel_file', models.FileField(blank=True, null=True, upload_to='excel_files/')),
                ('additional_words_file', models.FileField(blank=True, null=True, upload_to='additional_words_files/')),
                ('english_sentences', models.JSONField(default=list)),
                ('ukrainian_sentences', models.JSONField(default=list)),
                ('additional_words', models.JSONField(default=list)),
                ('current_index', models.PositiveIntegerField(default=0)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]