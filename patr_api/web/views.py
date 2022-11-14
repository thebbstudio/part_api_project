from asyncio import events
from urllib import response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import *

#Для почты

#Для почты
# # Import smtplib for the actual sending function
import smtplib

# Import the email modules we'll need
from email.mime.text import MIMEText
from web.TelegramSender import TelegramSender
from django.views.decorators.csrf import csrf_exempt


import requests
import json
from rest_framework import status
from django.db.models import Count


translateDict = {'fullName':'ФИО','phone':'Телефон',
                'dateEvent':'Дата мероприятия','timeEvent':'Время мероприятия',
                'duration':'Продолжительность','numberPlayers':'Количество участников','childrenWill':'Дети будит'}


def GetClientIp(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip


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
            # raise Response({'id' : 0, 'msg' : 'Missing parameter "' + param + '"'})
            print('request data', reqData)
            print('Missing parameter "', param, '"')
            raise PermissionDenied('Missing parameter "' + param + '"')
#https://docs.djangoproject.com/en/4.0/topics/email/
class SendApplicationView(APIView):
    @csrf_exempt
    def post(self, request):
        ValidateParaments(('fullName','phone','dateEvent','timeEvent','duration','numberPlayers','childrenWill'), request.data['params'])
        reqData = request.data['params']

        # subject = 'Заявка на платное мероприятие'   
        # fromEmail = None
        # recipient = ['syomkin.seryozha@yandex.ru']
        msgText = ''
        for key, value in translateDict.items():
            msgText += f'{value} : {reqData[key]}\n'
        
        # tg = TelegramSender()
        # tg.send(msgText, 'Patriot Lesnoy')

        msg = MIMEText(msgText)
        
        msg['Subject'] = 'Заявка на платное мероприятие'
        msg['From'] = 'no-reply@patriotlesnoy.ru'
        msg['To'] = ", ".join(['syomkin.seryozha@yandex.ru', 'cpvdm@edu-lesnoy.ru'])

        
        s = smtplib.SMTP('smtp.timeweb.ru')

        
        s.login('no-reply@patriotlesnoy.ru', 'SRQs5m9w9ML9gCS1')

        
        try:
            s.sendmail(msg['From'], msg['To'], msg.as_string())
        finally:
            s.quit()
        
        # send_mail(
        #     subject,
        #     msgText,
        #     fromEmail,
        #     recipient,
        #     fail_silently=False,
        # )
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


class VoteView(APIView):
    def get(self, request):
        ip = GetClientIp(request)


        request_url = 'https://geolocation-db.com/jsonp/' + ip
        response = requests.get(request_url)
        result = response.content.decode().split("(")[1].strip(")")
        result  = json.loads(result)
        # Если чел не из рашки пошёл нахуй
        if result['country_name'] not in ['Russia'] and ip not in ['127.0.0.1']:
            return Response(status=status.HTTP_403_FORBIDDEN, data={
                'msg' : 'Access denied for your region'
            })

        data = []
        vote = ListVote.objects.filter(ip=ip).first()

        if not vote: # Нет такого голоса, выкидываем все возможные варианты
            respData = VotingOption.objects.filter(isActive=True).values('id', 'url', 'title', 'description')
        else: # Если есть IP то бахаем результаты голосования
            respData = VotingOption.objects.filter(isActive=True).values('id', 'url', 'title', 'description')
            for elem in respData:
                count = ListVote.objects.filter(votingOption=elem['id']).values('votingOption').annotate(count=Count('votingOption'))
                if not count:
                    elem['count'] = 0
                else:
                    elem['count'] = count[0]['count']
        return Response(data={
            'data' : respData
        })

    def post(self, request):
        id = request.data['data']['id']
        ip = GetClientIp(request)
        vote = ListVote.objects.filter(ip=ip).first()
        if vote:
            return Response(status=status.HTTP_400_BAD_REQUEST, data = {
                'msg' : 'stop voting'
            })
        try:
            ListVote(ip=ip, votingOption=VotingOption.objects.get(id=id)).save()
            return Response(data={
                'msg' : 'good'
            })
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={
                'data' : 'This option does not exist'
            })

        return Response()

def index(request):
    return render(request, 'index.html')
