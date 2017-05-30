from rest_framework import serializers

from .models import Word

class WordSerializer(serializers.ModelSerialzer):
    class Meta:
        model = Word
        fields = ('text')
