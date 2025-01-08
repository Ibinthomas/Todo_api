from rest_framework import serializers
from .models import *

class Tudo_serializer(serializers.ModelSerializer):
    class Meta:
        model=Todo
        fields='__all__' 