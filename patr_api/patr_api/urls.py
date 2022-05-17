from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import SimpleRouter
from django.conf.urls.static import static
from django.conf import settings
from web.models import News
from web.views import *

router = SimpleRouter(trailing_slash=False)

urlpatterns = [
    path('', index),
    path('news', index),
    path('events', index),
    path('park', index),
    path('staff', index),
    path('documentation', index),
    path('post', index),
    
    path('admin/', admin.site.urls),
    path('api/', include('web.urls'))
]
urlpatterns += router.urls
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)