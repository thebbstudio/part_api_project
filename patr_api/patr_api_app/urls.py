from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import *

router = SimpleRouter(trailing_slash=False)


router.register('news', NewsView)
router.register('events', EventsView)
router.register('allstaff', AllStaffView)
router.register('alldocuments', AllDocsView)
router.register('allpartners', AllPartnersView)
router.register('allvideos', AllVideosView)
router.register('allpark', AllParkView)

urlpatterns = [
    #expath('news/nextnews', nextnews)
]

urlpatterns += router.urls