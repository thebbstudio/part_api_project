from distutils.command.upload import upload
from django.db import models
from datetime import date
# news
# events
# documents
# staff
# partners
# videos
# park
# park_categories


class News(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    img_path = models.ImageField(upload_to=('img/news/' + str(date.today())))
    date_publication = models.DateTimeField()
    education_departament = models.BooleanField(default=False)
    is_slider = models.BooleanField(default=False)
    imgs_path = models.CharField(max_length=255)
    video = models.TextField(default='')

    class Meta:
        ordering = ['-date_publication', 'title']

class PaidServise(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    cost = models.IntegerField()
    imgPath = models.ImageField(upload_to='img/paidservise/')
    dimensionMeasurement = models.CharField(max_length=50)

class Events(models.Model):
    title = models.CharField(max_length=100)
    img_path = models.ImageField(upload_to=('img/event/' + str(date.today())))
    description = models.TextField()
    date_publication = models.DateTimeField()
    short_text = models.CharField(max_length=500)
    is_slider = models.BooleanField(default=False)
    imgs_path = models.CharField(max_length=255)
    video = models.TextField(default='')

class Documents(models.Model):
    title = models.CharField(max_length=150)
    href_string = models.FileField(upload_to='docs/')
    category = models.IntegerField()


class DocType(models.Model):
    title = models.CharField(max_length=50)
    importance = models.IntegerField(default=None)


class Staff (models.Model):
    full_name = models.CharField(max_length=150)
    img_path = models.ImageField(upload_to='img/staff/')
    href_string = models.CharField(max_length=255)
    position = models.CharField(max_length=150)
    importance = models.IntegerField()


class Partners (models.Model):
    img_path = models.ImageField()
    title = models.CharField(max_length=100)
    href_string = models.ImageField(upload_to='img/partners/')


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


class ParkCategories(models.Model):
    title = models.CharField(max_length=100)
    url = models.CharField(max_length=250, default='')
    img_path = models.ImageField('img/park/categories/')




