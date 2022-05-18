from django.contrib import admin
from .models import *


class NewsImageAdmin(admin.StackedInline):
    model = NewsImage
    extra = 1

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    inlines = [NewsImageAdmin]
    list_display = ('id', 'title', 'date_publication', 'isActive')
    list_display_links = ('title',)


@admin.register(NewsImage)
class NewsImageAdmin(admin.ModelAdmin):
    pass



@admin.register(Park)
class ParkAdmin(admin.ModelAdmin):
    list_display = ('title', 'park_info')
 
 

admin.site.register(Events)
admin.site.register(Staff)
admin.site.register(Partners)