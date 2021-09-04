from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Article(models.Model):
    title = models.CharField(max_length=120, default="")
    content = models.TextField(default="")
    thumbnail = models.ImageField(
        max_length=255, upload_to="images", null=True, blank=True, default="")
    author = models.ForeignKey(
        User, related_name="article", on_delete=models.CASCADE, null=True, to_field="username")
    created_on = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.title
