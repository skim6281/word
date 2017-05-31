from django.shortcuts import render
from rest_framework import renderers, viewsets
from rest_framework.decorators import list_route, api_view, detail_route
from rest_framework.response import Response
from rest_framework.reverse import reverse
from .models import Word
from .serializers import WordSerializer
from django.db.models.aggregates import Count
from random import randint
import pronouncing

class WordViewSet(viewsets.ModelViewSet):
    queryset = Word.objects.all()
    serializer_class = WordSerializer

    @list_route()
    def random_word(self, request):
        count = Word.objects.count()
        random_index = randint(0, count - 1)
        word = Word.objects.all()[random_index]
        return Response(word.text)

    @detail_route(methods=['POST'])
    def rhyming_words(self, request, pk=None):
        words = pronouncing.rhymes(request.data.text);
        return Response(words)

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'words': reverse('word-list', request=request, format=format)
    })
