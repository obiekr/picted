# Generated by Django 3.2.5 on 2021-08-08 11:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='author',
            field=models.CharField(default='', max_length=120),
        ),
        migrations.AddField(
            model_name='article',
            name='thumbnail',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='article',
            name='content',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='article',
            name='title',
            field=models.CharField(default='', max_length=120),
        ),
    ]
