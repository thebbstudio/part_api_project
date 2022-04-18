from django.shortcuts import render
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from patr_api_app.serializers import *

from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer

from .models import *


#someevent, eventdetail,


class NewsView(ModelViewSet):
    queryset = News.objects.filter(pk__gte=News.objects.count() - int(30)+1).order_by('-date_publication')
    serializer_class = NewsSerializer

    @action(methods=['get'], detail=True)
    def newsdetail(self, request, pk):
        news = News.objects.get(pk=pk)
        return Response({'title': news.title, 'desc': news.description})


    @action(methods=['get'], detail=True)
    def somenews(self, request, pk):
        news = News.objects.filter(pk__gte=News.objects.count() - int(pk)+1).order_by('-date_publication')
        d = {}
        for _ in news:
            d.update({_.pk: {'title': _.title, 'desc': _.description, 'img_path': _.img_path.url, 'date_publication': _.date_publication}})
        return Response(d)


    @action(methods=['get'], detail=False)
    def nextnews(self, request):
        news = News.objects.filter(pk__gte=int(request.GET['start']) - int(request.GET['num'])+1).order_by('-date_publication')
        d = {}
        for _ in news:
            d.update({_.pk: {'title': _.title, 'desc': _.description, 'img_path': _.img_path.url, 'date_publication': _.date_publication}})
        return Response(d)



class EventsView(ModelViewSet):
    queryset = Events.objects.filter(pk__gte=Events.objects.count() - int(30)+1).order_by('-date_publication')
    serializer_class = EventsSerializer


    @action(methods=['get'], detail=True)
    def eventdetail(self, request, pk):
        events = Events.objects.get(pk=pk)
        return Response({'title': events.title, 'desc': events.description, 'img_path': events.img_path.url})

    @action(methods=['get'], detail=True)
    def someevents(self, request, pk):
        events = Events.objects.filter(pk__gte=Events.objects.count() - int(pk)).order_by('-date_publication')
        d = {}
        for _ in events:
            d.update({_.pk: {'title': _.title, 'short_text': _.short_text,'desc': _.description, 'img_path': _.img_path.url, 'date_publication': _.date_publication}})
        print(d)
        return Response(d)



class StaffView(ModelViewSet):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer


class DocsView(ModelViewSet): #documents или docsType в models
    queryset = Documents.objects.all()
    serializer_class = DocsSerializer


class PartnersView(ModelViewSet):
    queryset = Partners.objects.all()
    serializer_class = PartnersSerializer


class VideosView(ModelViewSet):
    queryset = Videos.objects.all()
    serializer_class = VideosSerializer


class ParkView(ModelViewSet):
    queryset = Park.objects.all()
    serializer_class = ParkSerializer

    @action(methods=['get'], detail=True)
    def getsomecategory(self, request, pk):
        parkobjs = Park.objects.filter(category_id=pk)
        d = []
        for _ in parkobjs:
            d.append( {'id': _.pk, 'title': _.title, 'img_path': _.img_path.url} )
        print(d)
        return Response(d)


class ParkCategoriesView(ModelViewSet):
    queryset = ParkCategories.objects.all()
    serializer_class = ParkCategoriesSerializer


def index(request):
    return render(request, 'index.html')
