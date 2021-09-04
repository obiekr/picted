from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api-auth/", include("rest_framework.urls")),
    path("api/", include("articles.api.urls")),
    path("account/", include("account.urls")),
    path("", index)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
