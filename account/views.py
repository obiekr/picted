from django.shortcuts import render
from django.contrib.auth.views import LoginView
# Create your views here.


class CustomLoginview(LoginView):
    template_name = ""
    fields = "__all__"
    redirect_authenticated_user = True
