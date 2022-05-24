from django.contrib.auth.base_user import BaseUserManager
from django.forms import PasswordInput

# class StudentManager(BaseUserManager):
    
#     def create_user(self, first_name, last_name, mid_name, cnp, email, password, **extra_fileds):
        
#         if not email:
#             raise ValueError("Email must be set")
#         if not cnp:
#             raise ValueError("CNP should be provided")
#         if not password:
#             raise ValueError("Password should be provided")
        
#         email = self.normalize_email(email)
        
#         user = self.model(first_name=first_name, last_name=last_name, mid_name=mid_name, cnp=cnp, email=email, password=password, **extra_fileds)
#         user.set_password(password)
#         user.save()

#         return user
    
#     def create_superuser(self, first_name, last_name, cnp, email, password, **extra_fileds):
        
#         # extra_fileds.setdefault('is_staff', True)
#         # extra_fileds.setdefault('is_superuser', True)
#         # extra_fileds.setdefault('is_active', True)
        
#         # if extra_fileds.get('is_staff') is not True:
#         #     raise ValueError('Superuser must have is_staff True')
#         # if extra_fileds.get('is_superuser') is not True:
#         #     raise ValueError('Superuser must have is_superuser True')


#         return self.create_user(self, first_name, last_name, cnp, email, password, **extra_fileds)
               
        