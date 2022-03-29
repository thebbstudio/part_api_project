from django.db import models
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
    img_path = models.ImageField()
    date_publication = models.DateTimeField()
    education_departament = models.BooleanField(default=False)
    is_slider = models.BooleanField(default=False)
    imgs_path = models.CharField(max_length=255)


class Events(models.Model):
    title = models.CharField(max_length=100)
    img_path = models.ImageField()
    description = models.TextField()
    date_publication = models.DateTimeField()
    short_text = models.CharField(max_length=500)
    is_slider = models.BooleanField(default=False)
    imgs_path = models.CharField(max_length=255)


class Documents(models.Model):
    title = models.CharField(max_length=150)
    href_string = models.CharField(max_length=255)
    category = models.CharField(max_length=50)


class DocType(models.Model):
    title = models.CharField(max_length=50)
    importance = models.IntegerField(default=None)


class Staff (models.Model):
    full_name = models.CharField(max_length=150)
    img_path = models.ImageField()
    href_string = models.CharField(max_length=255)
    position = models.CharField(max_length=150)
    importance = models.IntegerField()


class Partners (models.Model):
    img_path = models.ImageField()
    title = models.CharField(max_length=100)
    href_string = models.CharField(max_length=100)


class Videos(models.Model):
    img_path = models.ImageField()
    href_string = models.FileField(max_length=200)
    date_publication = models.DateTimeField()


class Park(models.Model):
    title = models.CharField(max_length=100)
    img_path = models.ImageField()
    park_info = models.CharField(max_length=100)
    importance = models.IntegerField()
    category_id = models.IntegerField()
    is_slider = models.BooleanField(default=False)
    img_paths = models.ImageField()


class ParkCategories(models.Model):
    title = models.CharField(max_length=100)
    img_path = models.ImageField()




