from django.urls import path, include
from .views import CustomLoginview
from .api import RegisterAPI, LoginAPI, UserAPI
from knox import views as knox_views

urlpatterns = [
    path("api/auth", include("knox.urls")),
    path("api/auth/register", RegisterAPI.as_view()),
    path("api/auth/signin", LoginAPI.as_view()),
    path("api/auth/user", UserAPI.as_view()),
    path("api/auth/logout", knox_views.LogoutView.as_view(),
         name="knox_logout")  # invalidate the token
]
