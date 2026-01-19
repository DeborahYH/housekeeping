from django.shortcuts import render

def user_view(request):
    return render(request, 'users/user.html')