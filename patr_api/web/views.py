from urllib import response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import *


#someevent, eventdetail,
def GetImgList(nameTable, postId):
    if nameTable == 'news':
        return(NewsImage.objects.filter(news_id = postId).values('id','path'))

class NewsView(APIView):
    def get(self, request):

        numNews = 15
        if 'numNews' in request.GET:
            numNews = int(request.GET['numNews'])

        if 'id' in request.GET:
            newsies = News.objects.filter(id = request.GET['id']).values()
        else:
            newsies = News.objects.filter(isActive=True)[:int(numNews)].values()

        response = []
        for news in newsies:
            response.append({'news' : news, 'imgs' : GetImgList('news', news['id'])})

        return Response(response)
        




class EventsView(APIView):
    def get(self, request):

        if 'id' in request.GET:
            return Response(Events.objects.filter(id = request.GET['id']).values())
        
        numEvents = 15
        if 'numEvents' in request.GET:
            numEvents = int(request.GET['numEvents'])
        
        if 'isSlider' in request.GET:
            return Response(list(Events.objects.filter(isActive=True)[:int(numEvents)].values('id','title', 'description','img_path','date_publication')))

        return Response(list(Events.objects.all()[:int(numEvents)].values()))


def ValidateParaments(listParams, reqData):
    for param in listParams:
        if param not in reqData:
            return Response({'id' : 0, 'msg' : 'Missing parameter "' + param + '"'})

class SendApplicationView(APIView):
    def post(self, request):
        ValidateParaments(('fullName','phone','dateEvent','timeEvent','duration','numberPlayers','childrenWill'), request.data)
        return Response({'это': 'база (заглушка)'})


class StaffView(APIView):
    def get(self, request):
        return Response(list(Staff.objects.filter(isActive=True).values()))


class DocsView(APIView): 
    def get(self, request):
        return Response(list(Documents.objects.filter(isActive=True).values()))


class PartnersView(APIView): 
    def get(self, request):
        return Response(list(Partners.objects.filter(isActive=True).values()))


class VideosView(APIView): 
    def get(self, request):
        return Response(list(Videos.objects.all().values()))


class ParkView(APIView):
    def get(self, request): # ?format=json&id=1
        return Response(list(Park.objects.filter(category_id=request.GET['id']).values('id', 'title', 'img_path')))


class ParkCategoriesView(APIView): 
    def get(self, request):
        return Response(list(ParkCategories.objects.all().values()))


class PaidServiseView(APIView): 
    def get(self, request):
        return Response(list(PaidServise.objects.filter(isActive = True).values()))


def index(request):
    return render(request, 'index.html')
