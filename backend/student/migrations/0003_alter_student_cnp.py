# Generated by Django 3.2.13 on 2022-04-22 19:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0002_auto_20220422_1924'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='cnp',
            field=models.CharField(max_length=13, unique=True),
        ),
    ]
