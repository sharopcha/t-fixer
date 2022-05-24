import email
from xml.parsers.expat import model
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin


import uuid

class Student(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    mid_name = models.CharField(max_length=50, blank=True, default='', null=True)
    cnp = models.CharField(max_length=13, unique=True)
    email = models.EmailField(max_length=250, unique=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS  = ['first_name', 'last_name', 'cnp']
    

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

class Teacher(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    mid_name = models.CharField(max_length=50, blank=True, default='')
    email = models.EmailField(max_length=250, unique=True)
    
    def __str__(self):
        return f'{self.first_name} {self.last_name}'
    