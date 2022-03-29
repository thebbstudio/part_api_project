"""patr_api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rest_framework.routers import SimpleRouter

from patr_api_app.models import News
from patr_api_app.views import NewsView, EventsView, AllStaffView, AllDocsView, AllPartnersView, AllVideosView, \
    AllParkView, index

router = SimpleRouter(trailing_slash=False)

router.register('patr_api/news', NewsView)
router.register('patr_api/events/', EventsView)
router.register('patr_api/allstaff', AllStaffView)
router.register('patr_api/alldocuments', AllDocsView)
router.register('patr_api/allpartners', AllPartnersView)
router.register('patr_api/allvideos', AllVideosView)
router.register('patr_api/allpark', AllParkView)
urlpatterns = [
    path('', index),
    path('admin/', admin.site.urls),
]
urlpatterns += router.urls
