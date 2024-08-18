from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.db.utils import IntegrityError

# Create your views here.
def auth_view(request):
    context = {}
    
    if request.user.is_authenticated:
        context['username'] = request.user.username
        context['signed_in'] = True
    
    if 'submit_btn' in request.POST:
        if request.user.is_authenticated:
            context['error'] = 'Вы уже вошли в аккаунт'
        else:
            username = request.POST.get('username_inp')
            password = request.POST.get('password_inp')
            
            if username and password:
                user = authenticate(username=username, password=password)
                
                if user:
                    login(request, user)
                    return redirect('auth')
                else:
                    context["error"] = 'Неверный логин или пароль'
            else:
                context['error_message'] = 'Заповніть усі поля'
    if 'leave_btn' in request.POST:
        logout(request)
        return redirect('auth')
    return render(request, 'auth_reg/auth.html', context)

def reg_view(request):
    context = {}
    
    if request.user.is_authenticated:
        context['username'] = request.user.username
        context['signed_in'] = True
        
    if request.method == 'POST':
        username = request.POST.get('username_inp')
        password = request.POST.get('password_inp')
        confirm_password = request.POST.get('conf_password_inp')
    
        if username and password and confirm_password:
            if password == confirm_password:
                try:
                    User.objects.create_user(
                        username=username,
                        password=password,
                    )
                    return redirect('auth')
                except IntegrityError:
                    context["error"] = 'Такий користувач вже існує'
            else:
                context['error_message'] = 'Паролі не співпадають'    
        else:
            context['error_message'] = 'Заповніть усі поля'
    return render(request, 'auth_reg/reg.html', context)