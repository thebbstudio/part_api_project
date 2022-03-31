from django.shortcuts import render


def index(request, exception):
    return render(request, 'index.html')