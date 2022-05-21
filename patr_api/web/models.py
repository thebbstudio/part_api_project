from distutils.command.upload import upload
from django.db import models
from datetime import date
from patr_api.settings import MEDIA_ROOT


class News(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    img_path = models.ImageField(upload_to=('img/news/' + str(date.today())), blank=True)
    date_publication = models.DateTimeField()
    education_departament = models.BooleanField(default=False)
    video = models.TextField(default='')
    isActive = models.BooleanField(default=True)
    @property
    def get_absolute_image_url(self):
        return "{0}{1}".format(MEDIA_ROOT, self.img_path.url)
    class Meta:
        ordering = ['-date_publication', 'title']


class NewsImage(models.Model):
    news = models.ForeignKey(News, on_delete=models.CASCADE, default=None)
    path = models.ImageField(upload_to='img/news/heap/', default=None, blank=True)


class Events(models.Model):
    title = models.CharField(max_length=100)
    img_path = models.ImageField(upload_to=('img/event/' + str(date.today())))
    description = models.TextField()
    date_publication = models.DateTimeField()
    short_text = models.CharField(max_length=500)
    is_slider = models.BooleanField(default=False)
    imgs_path = models.CharField(max_length=255, default=None)
    video = models.TextField(default='')
    isActive = models.BooleanField(default=True)

    class Meta:
        ordering = ['-date_publication', 'title']

class EventsImage(models.Model):
    events = models.ForeignKey(Events, on_delete=models.CASCADE, default=None)
    path = models.ImageField(upload_to='img/events/heap/', default=None, blank=True)


class NavBar(models.Model):
    title = models.CharField(max_length=20, default=None)
    path = models.CharField(max_length=255, default=None)
    isActive = models.BooleanField(default=True)
    importance = models.IntegerField()
	


class PaidServise(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    cost = models.IntegerField()
    imgPath = models.ImageField(upload_to='img/paidservise/')
    dimensionMeasurement = models.CharField(max_length=50)
    isActive = models.BooleanField(default=True)

class Documents(models.Model):
    title = models.CharField(max_length=150)
    href_string = models.FileField(upload_to='docs/')
    category = models.IntegerField()
    isActive = models.BooleanField(default=True)


class DocType(models.Model):
    title = models.CharField(max_length=50)
    importance = models.IntegerField(default=None)


class Staff(models.Model):
    full_name = models.CharField(max_length=150)
    img_path = models.ImageField(upload_to='img/staff/')
    href_string = models.CharField(max_length=255)
    position = models.CharField(max_length=150)
    importance = models.IntegerField()
    isActive = models.BooleanField(default=True)

    class Meta:
        ordering = ['importance', 'full_name']

class Partners(models.Model):
    img_path = models.ImageField()
    title = models.CharField(max_length=100)
    href_string = models.ImageField(upload_to='img/partners/')
    isActive = models.BooleanField(default=True)


class Videos(models.Model):
    title = models.CharField(max_length=100, default='')
    href_string = models.FileField(upload_to='video/')
    date_publication = models.DateTimeField()


class Park(models.Model):
    title = models.CharField(max_length=100)
    img_path = models.ImageField(upload_to='img/park/')
    park_info = models.CharField(max_length=100)
    importance = models.IntegerField()
    category_id = models.IntegerField()
    is_slider = models.BooleanField(default=False)
    img_paths = models.ImageField(upload_to='img/park/', default='default.jpg')
    isActive = models.BooleanField(default=True)


class ParkCategories(models.Model):
    title = models.CharField(max_length=100)
    url = models.CharField(max_length=250, default='')
    img_path = models.ImageField('img/park/categories/')
    isActive = models.BooleanField(default=True)




