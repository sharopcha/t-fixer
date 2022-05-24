from django.db import models
import uuid

class Course(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=250)
    label_color = models.CharField(max_length=50)
