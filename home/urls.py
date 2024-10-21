from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='pershdev-home'),
    path('about-us', views.cs50d, name='pershdev-cs50d'),
    path('achievements', views.achieve, name="achieve")
]