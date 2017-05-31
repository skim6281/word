from django.conf.urls import url, include
from api import views
from api.views import WordViewSet
from rest_framework import renderers
from rest_framework.routers import DefaultRouter
from rest_framework.schemas import get_schema_view

schema_view = get_schema_view(title='Word API')

router = DefaultRouter()
router.register(r'words', views.WordViewSet)

urlpatterns = [
    url(r'', include(router.urls)),
    url(r'^schema/$', schema_view),
]
# urlpatterns = [
# 	url(r'^$', views.WordList.as_view(), name='word-list'),
# ]
