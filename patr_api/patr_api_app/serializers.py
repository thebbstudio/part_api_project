from rest_framework.serializers import ModelSerializer

from patr_api_app.models import News, Events, Staff, Documents, Partners, Videos, Park


class AllNewsSerializer(ModelSerializer):
    class Meta:
        model = News
        fields = ['title', 'description', 'img_path', 'date_publication']


class AllEventsSerializer(ModelSerializer):
    class Meta:
        model = Events
        fields = ['title', 'description', 'img_path', 'date_publication']


class AllStaffSerializer(ModelSerializer):
    class Meta:
        model = Staff
        fields = ['full_name', 'img_path', 'position']


class AllDocsSerializer(ModelSerializer):
    class Meta:
        model = Documents
        fields = ['title', 'href_string', 'category']


class AllPartnersSerializer(ModelSerializer):
    class Meta:
        model = Partners
        fields = ['img_path', 'title', 'href_string']


class AllVideosSerializer(ModelSerializer):
    class Meta:
        model = Videos
        fields = ['img_path', 'href_string', 'date_publication']


class AllParkSerializer(ModelSerializer):
    class Meta:
        model = Park
        fields = ['title', 'img_path', 'park_info', 'importance', 'category_id', 'is_slider'] #'img_paths'
