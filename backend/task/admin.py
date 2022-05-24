from django.contrib import admin
from .models import PersonalTask

class PersonalTaskAdmin(admin.ModelAdmin):
    pass

admin.site.register(PersonalTask, PersonalTaskAdmin)
