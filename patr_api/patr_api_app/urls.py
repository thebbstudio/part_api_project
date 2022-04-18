from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import *

router = SimpleRouter(trailing_slash=False)


router.register('news', NewsView)
router.register('events', EventsView)
router.register('staff', StaffView)
router.register('documents', DocsView)
router.register('partners', PartnersView)
router.register('videos', VideosView)
router.register('park', ParkView)
router.register('parkcategories', ParkCategoriesView)

urlpatterns = [
    #expath('news/nextnews', nextnews)
]

urlpatterns += router.urls