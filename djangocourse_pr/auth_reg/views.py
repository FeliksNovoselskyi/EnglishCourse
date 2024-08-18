from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.db.utils import IntegrityError

# Create your views here.
# функция обработки авторизации
def auth_view(request):
    context = {}
    
    # если пользователь авторизован
    if request.user.is_authenticated:
        context['username'] = request.user.username
        context['signed_in'] = True
    
    # если пользователь нажал кнопку входа
    if 'submit_btn' in request.POST:
        # проверка, если пользователь уже вошел в аккаунт при попытке входа
        if request.user.is_authenticated:
            context['error'] = 'Вы уже вошли в аккаунт'
        else:
            username = request.POST.get('username_inp')
            password = request.POST.get('password_inp')
            
            # проверка заполнения полей
            if username and password:
                user = authenticate(username=username, password=password)
                
                if user:
                    login(request, user)
                    return redirect('auth')
                else:
                    context["error"] = 'Неверный логин или пароль'
            else:
                context['error_message'] = 'Заповніть усі поля'
    # если пользователь нажал кнопку выхода
    if 'leave_btn' in request.POST:
        logout(request)
        return redirect('auth')
    return render(request, 'auth_reg/auth.html', context)

# функция обработки регистрации
def reg_view(request):
    context = {}
    
    # если пользователь авторизован
    if request.user.is_authenticated:
        context['username'] = request.user.username
        context['signed_in'] = True
        
    # если пользователь нажал кнопку регистрации
    if request.method == 'POST':
        username = request.POST.get('username_inp')
        password = request.POST.get('password_inp')
        confirm_password = request.POST.get('conf_password_inp')
    
    
        # проверка заполнения полей
        if username and password and confirm_password:
            if password == confirm_password:
                # проверка наличия такого пользователя
                try:
                    # создание пользователя
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