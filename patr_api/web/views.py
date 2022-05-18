from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import *


#someevent, eventdetail,

class NewsView(APIView):
    def get(self, request):

        if 'id' in request.GET:
            return Response(News.objects.filter(id = request.GET['id']).values())
        
        numNews = 15
        if 'numNews' in request.GET:
            numNews = int(request.GET['numNews'])
        
        if 'isSlider' in request.GET:
            return Response(list(News.objects.all()[:int(numNews)].values('id','title', 'description','img_path','date_publication')))

        return Response(list(News.objects.all()[:int(numNews)].values()))



class EventsView(APIView):
    def get(self, request):

        if 'id' in request.GET:
            return Response(News.objects.filter(id = request.GET['id']).values())
        
        numEvents = 15
        if 'numEvents' in request.GET:
            numEvents = int(request.GET['numEvents'])
        
        if 'isSlider' in request.GET:
            return Response(list(News.objects.all()[:int(numEvents)].values('id','title', 'description','img_path','date_publication')))

        return Response(list(News.objects.all()[:int(numEvents)].values()))



class StaffView(APIView):
    def get(self, request):
        return Response(list(Staff.objects.all().values()))


class DocsView(APIView): 
    def get(self, request):
        return Response(list(Documents.objects.all().values()))


class PartnersView(APIView): 
    def get(self, request):
        return Response(list(Partners.objects.all().values()))


class VideosView(APIView): 
    def get(self, request):
        return Response(list(Videos.objects.all().values()))


class ParkView(APIView):
    def get(self, request): # ?format=json&id=1
        return Response(list(Park.objects.filter(category_id=request.GET['id']).values('id', 'title', 'img_path')))


class ParkCategoriesView(APIView): 
    def get(self, request):
        return Response(list(ParkCategories.objects.all().values()))


def index(request):
    return render(request, 'index.html')
