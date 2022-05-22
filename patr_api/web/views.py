from asyncio import events
from urllib import response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import *

#Для почты
import smtplib
from email.message import EmailMessage
from django.core.mail import send_mail
from django.core import mail


translateDict = {'fullName':'ФИО','phone':'Телефон',
                'dateEvent':'Дата мероприятия','timeEvent':'Время мероприятия',
                'duration':'Продолжительность','numberPlayers':'Количество участников','childrenWill':'Дети будит'}

#someevent, eventdetail,
def GetImgList(nameTable, postId):
    if nameTable == 'news':
        return(NewsImage.objects.filter(news_id = postId).values('id','path'))
    elif nameTable == 'events':
        return(EventsImage.objects.filter(events_id = postId).values('id','path'))

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
            news.update({'imgs' : GetImgList('news', news['id'])})
            response.append(news)

        return Response(response)
        

class EventsView(APIView):
    def get(self, request):

        numEvents = 15
        if 'numEvents' in request.GET:
            numEvents = int(request.GET['numEvents'])

        if 'id' in request.GET:
            events = Events.objects.filter(id = request.GET['id']).values()
        else:
            events = Events.objects.filter(isActive=True)[:int(numEvents)].values()

        response = []
        for event in events:
            event.update({'imgs' : GetImgList('events', event['id'])})
            response.append(event)

        return Response(response)



def ValidateParaments(listParams, reqData):
    for param in listParams:
        if param not in reqData:
            return Response({'id' : 0, 'msg' : 'Missing parameter "' + param + '"'})

#https://docs.djangoproject.com/en/4.0/topics/email/
class SendApplicationView(APIView):
    def post(self, request):
        ValidateParaments(('fullName','phone','dateEvent','timeEvent','duration','numberPlayers','childrenWill'), request.data)
        
        subject = 'Заявка на платное мероприятие'   
        fromEmail = None
        recipient = ['syomkin.seryozha@yandex.ru']

        msgText = ''
        for key, value in translateDict.items():
            msgText += f'{value} : {request.data[key]}\n'


        send_mail(
            subject,
            msgText,
            fromEmail,
            recipient,
            fail_silently=False,
        )
            
        return Response({'это': 'база (заглушка)'})


class StaffView(APIView):
    def get(self, request):
        return Response(list(Staff.objects.filter(isActive=True).values()))


class DocsView(APIView): 
    def get(self, request):
        resp = []
        for doc in Documents.objects.filter(isActive=True).values():
            category = DocType.objects.filter(id=doc['category_id']).values()[0]['title']
            resp.append({'id' : doc['id'], 'href_string': doc['href_string'], 'title' : doc['title'], 'category' : category})
            
        return Response(resp)


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


class NavBarView(APIView):
    def get(self, request):
        return Response(list(NavBar.objects.filter(isActive = True).values()))




def index(request):
    return render(request, 'index.html')
