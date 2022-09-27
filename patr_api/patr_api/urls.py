from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import SimpleRouter
from django.conf.urls.static import static
from django.conf import settings
from web.models import News
from web.views import *


urlpatterns = [
    path('', index),
    path('news', index),
    path('events', index),
    path('park', index),
    path('staff', index),
    path('paidservices', index),
    path('documentation', index),
    path('post', index),
    path('contest', index),
    
    path('admin/', admin.site.urls),
    path('api/', include('web.urls'))
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)