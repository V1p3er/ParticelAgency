from django.db import models

class projects(models.Model):
    title= models.CharField(max_length=100)
    content= models.TextField()
    date_posted= models.DateTimeField(auto_now_add=True)