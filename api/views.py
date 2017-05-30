from django.shortcuts import render
from rest_framework import generics
from .models import Word
from .serializers import WordSerializer
# Create your views here.

class WordList(generics.ListCreateAPIView):
    queryset = Word.objects.all()
    serializer_class = WordSerializer
