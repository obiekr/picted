from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# user email has to be unique
User._meta.get_field('email')._unique = True
# User Serializer


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email")

# Register Serialzizer


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email",
                  "password")
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data["username"], validated_data["email"], validated_data["password"])
        print(user)
        return user
# Login serializer


# no modelSerializer bcz we dont make anythin, just validating
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        print(data)
        if user and user.is_active:
            return user

        raise serializers.ValidationError("Incorrect Credentials")
