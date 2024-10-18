from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='pershdev-home'),
    path('projects/page-1', views.projects_pg1, name='pershdev-projects-pg1'),
    path('projects/page-2', views.projects_pg2, name='pershdev-projects-pg2'),
    path('about-us', views.cs50d, name='pershdev-cs50d'),
    path('achievements', views.achieve, name="achieve")
]