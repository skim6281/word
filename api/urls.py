from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^$', views.WordList.as_view(), name='word-list'),
]
