from django.contrib import admin
from .models import Faculty, Branch

class FacultyAdmin(admin.ModelAdmin):
    pass

class BranchAdmin(admin.ModelAdmin):
    pass

admin.site.register(Faculty, FacultyAdmin)
admin.site.register(Branch, BranchAdmin)
