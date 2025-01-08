from django.shortcuts import render
from . models import *
from .serislizer import *
from rest_framework import viewsets

# Create your views here.

class main(viewsets.ModelViewSet):
    serializer_class=Tudo_serializer
    queryset=Todo.objects.all()