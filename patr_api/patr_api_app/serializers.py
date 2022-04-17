from rest_framework.serializers import ModelSerializer

from patr_api_app.models import *


class NewsSerializer(ModelSerializer):
    class Meta:
        model = News
        fields = ['id', 'title', 'description', 'img_path', 'date_publication']


class EventsSerializer(ModelSerializer):
    class Meta:
        model = Events
        fields = ['id', 'title', 'description', 'img_path', 'date_publication']


class StaffSerializer(ModelSerializer):
    class Meta:
        model = Staff
        fields = ['id', 'full_name', 'img_path', 'position']


class DocsSerializer(ModelSerializer):
    class Meta:
        model = Documents
        fields = ['id', 'title', 'href_string', 'category']


class PartnersSerializer(ModelSerializer):
    class Meta:
        model = Partners
        fields = ['id', 'img_path', 'title', 'href_string']


class VideosSerializer(ModelSerializer):
    class Meta:
        model = Videos
        fields = ['id', 'img_path', 'href_string', 'date_publication']

ParkCategories
class ParkSerializer(ModelSerializer):
    class Meta:
        model = Park
        fields = ['id', 'title', 'img_path', 'park_info', 'importance', 'category_id', 'is_slider'] #'img_paths'


class ParkCategoriesSerializer(ModelSerializer):
    class Meta:
        model = ParkCategories
        fields = ['id', 'title', 'url', 'img_path'] #'img_paths'

