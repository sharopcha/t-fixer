from django.db import models

class Faculty(models.Model):
    name = models.CharField(max_length=250)
    
    class Meta:
        verbose_name_plural = "Faculties"
    
    def __str__(self):
        return self.name

class Branch(models.Model):
    name = models.CharField(max_length=250)
    faculty = models.ForeignKey(Faculty, on_delete=models.DO_NOTHING)
    
    class Meta:
        verbose_name_plural = "Branches"
    
    def __str__(self):
        return self.name

    
    
    

