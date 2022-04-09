from rest_framework.serializers import ModelSerializer

from patr_api_app.models import News, Events, Staff, Documents, Partners, Videos, Park


class AllNewsSerializer(ModelSerializer):
    class Meta:
        model = News
        fields = ['id', 'title', 'description', 'img_path', 'date_publication']


class AllEventsSerializer(ModelSerializer):
    class Meta:
        model = Events
        fields = ['id', 'title', 'description', 'img_path', 'date_publication']


class AllStaffSerializer(ModelSerializer):
    class Meta:
        model = Staff
        fields = ['id', 'full_name', 'img_path', 'position']


class AllDocsSerializer(ModelSerializer):
    class Meta:
        model = Documents
        fields = ['id', 'title', 'href_string', 'category']


class AllPartnersSerializer(ModelSerializer):
    class Meta:
        model = Partners
        fields = ['id', 'img_path', 'title', 'href_string']


class AllVideosSerializer(ModelSerializer):
    class Meta:
        model = Videos
        fields = ['id', 'img_path', 'href_string', 'date_publication']


class AllParkSerializer(ModelSerializer):
    class Meta:
        model = Park
        fields = ['id', 'title', 'img_path', 'park_info', 'importance', 'category_id', 'is_slider'] #'img_paths'