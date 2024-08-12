from django import forms
from .models import Task

class TaskForm(forms.ModelForm):
    excel_file = forms.FileField(required=False, label='Upload Excel file')

    class Meta:
        model = Task
        fields = ['name', 'excel_file']
