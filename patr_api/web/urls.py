from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import *


urlpatterns = [
    path('news', NewsView.as_view()),
    path('staff', StaffView.as_view()),
    path('events', EventsView.as_view()),
    path('documents', DocsView.as_view()),
    path('partners', PartnersView.as_view()),
    path('videos', VideosView.as_view()),
    path('park', ParkView.as_view()),
    path('paidservises', PaidServiseView.as_view()),
    path('parkcategories', ParkCategoriesView.as_view()),
    path('sendapplication',SendApplicationView.as_view())
]
