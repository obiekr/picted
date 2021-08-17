from django.contrib import admin
from django.urls import path, include
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    path("api/", include("articles.api.urls")),
    path("account/", include("account.urls")),
    path("", index)
]
