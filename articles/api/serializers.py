"""
This file will convert model to json.
This is where the data transformation to frontend
"""

from rest_framework import serializers

from articles.models import Article


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'content', 'thumbnail', 'author', 'created_on')
