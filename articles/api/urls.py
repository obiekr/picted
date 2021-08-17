from django.urls import path

from .views import ArticleDetailView, ArticleListView

urlpatterns = [
    path("article/", ArticleListView.as_view()),
    # primary key = <pk> (eg: 1,2,3,4,5,etc)
    path("article/<pk>", ArticleDetailView.as_view())
]
