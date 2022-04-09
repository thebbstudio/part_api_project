from django.shortcuts import render
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from patr_api_app.serializers import AllNewsSerializer, AllStaffSerializer, AllEventsSerializer, AllDocsSerializer, \
    AllPartnersSerializer, AllVideosSerializer, AllParkSerializer

from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer

from .models import News, Events, Staff, Partners, Documents, Videos, Park


#someevent, eventdetail,


class NewsView(ModelViewSet):
    queryset = News.objects.filter(pk__gte=News.objects.count() - int(30)+1).order_by('-date_publication')
    serializer_class = AllNewsSerializer

    @action(methods=['get'], detail=True)
    def newsdetail(self, request, pk):
        news = News.objects.get(pk=pk)
        return Response({'title': news.title, 'desc': news.description})


    @action(methods=['get'], detail=True)
    def somenews(self, request, pk):
        news = News.objects.filter(pk__gte=News.objects.count() - int(pk)+1).order_by('-date_publication')
        d = {}
        for _ in news:
            d.update({_.pk: {'title': _.title, 'desc': _.description, 'img_path': _.img_path, 'date_publication': _.date_publication}})
        return Response(d)


    @action(methods=['get'], detail=False)
    def nextnews(self, request):
        news = News.objects.filter(pk__gte=int(request.GET['start']) - int(request.GET['num'])+1).order_by('-date_publication')
        d = {}
        for _ in news:
            d.update({_.pk: {'title': _.title, 'desc': _.description, 'img_path': _.img_path, 'date_publication': _.date_publication}})
        return Response(d)



class EventsView(ModelViewSet):
    queryset = Events.objects.filter(pk__gte=Events.objects.count() - int(30)+1).order_by('-date_publication')
    serializer_class = AllEventsSerializer


    @action(methods=['get'], detail=True)
    def eventdetail(self, request, pk):
        events = Events.objects.get(pk=pk)
        return Response({'title': events.title, 'desc': events.description, 'img_path': events.img_path})

    @action(methods=['get'], detail=True)
    def someevents(self, request, pk):
        events = Events.objects.filter(pk__gte=Events.objects.count() - int(pk)+1).order_by('-date_publication')
        d = {}
        for _ in events:
            d.update({_.pk: {'title': _.title, 'short_text': _.short_text,'desc': _.description, 'img_path': _.img_path, 'date_publication': _.date_publication}})
        return Response(d)



class AllStaffView(ModelViewSet):
    queryset = Staff.objects.all()
    serializer_class = AllStaffSerializer


class AllDocsView(ModelViewSet): #documents или docsType в models
    queryset = Documents.objects.all()
    serializer_class = AllDocsSerializer


class AllPartnersView(ModelViewSet):
    queryset = Partners.objects.all()
    serializer_class = AllPartnersSerializer


class AllVideosView(ModelViewSet):
    queryset = Videos.objects.all()
    serializer_class = AllVideosSerializer


class AllParkView(ModelViewSet):
    queryset = Park.objects.all()
    serializer_class = AllParkSerializer


def index(request):
    return render(request, 'index.html')
