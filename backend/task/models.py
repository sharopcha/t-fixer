from turtle import title
from django.db import models
import uuid
from student.models import Student

class PersonalTask(models.Model):
    
    TYPE = (
        ('Reminder', 'Reminder'),
        ('Revision', 'Revision')
    )
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    title = models.CharField(max_length=250)
    detail = models.CharField(max_length=500)
    due_date = models.DateField(blank=True)
    type = models.CharField(choices=TYPE, default='Reminder', max_length=15)
    
    def __str__(self):
        return self.title
    
