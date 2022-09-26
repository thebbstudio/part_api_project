from distutils.command.upload import upload
from email import charset
from django.db import models
from datetime import date
from patr_api.settings import MEDIA_ROOT
from gettext import gettext as _


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


class ListVote(models.Model):
    ip = models.CharField(_("IP"), max_length=15) 
    votingOption = models.ForeignKey("web.VotingOption", verbose_name=_("За кого голос"), on_delete=models.CASCADE)
    def __str__(self):
        return self.ip


class VotingOption(models.Model):
    title = models.CharField(_("Заголовок"), max_length=50)
    description = models.CharField(_("Описание"), max_length=100)
    isActive = models.BooleanField(_("Активно"), default=True)
    url = models.FileField(_("Загрузка видео"), upload_to='voteVideo',blank=True,null=True)
    def __str__(self):
        return self.title

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
    importance = models.IntegerField(default=10)
	
    class Meta:
        ordering = ['importance']


class PaidServise(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    cost = models.IntegerField()
    imgPath = models.ImageField(upload_to='img/paidservise/')
    dimensionMeasurement = models.CharField(max_length=50)
    isActive = models.BooleanField(default=True)

class DocType(models.Model):
    title = models.CharField(max_length=50)
    importance = models.IntegerField(default=None)

class Documents(models.Model):
    title = models.CharField(max_length=150)
    href_string = models.FileField(upload_to='docs/')
    category = models.ForeignKey(DocType, on_delete=models.CASCADE)
    isActive = models.BooleanField(default=True)

    class Meta:
        ordering = ['category','title']


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




