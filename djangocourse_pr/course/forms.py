from django import forms
from .models import *

class TaskForm(forms.ModelForm):
    excel_file = forms.FileField(required=False, label='Upload Excel file')
    additional_words_file = forms.FileField(required=False, label='Upload Excel file for AdditionalWords')

    class Meta:
        model = UserProgress
        fields = ['name', 'excel_file', 'additional_words_file']
