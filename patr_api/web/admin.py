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


class EventsImageAdmin(admin.StackedInline):
    model = EventsImage
    extra = 1

@admin.register(Events)
class EventsAdmin(admin.ModelAdmin):
    inlines = [EventsImageAdmin]
    list_display = ('id', 'title', 'date_publication', 'isActive')
    list_display_links = ('title',)


@admin.register(EventsImage)
class EventsImageAdmin(admin.ModelAdmin):
    pass


@admin.register(Park)
class ParkAdmin(admin.ModelAdmin):
    list_display = ('title', 'park_info')
 

@admin.register(Staff)
class StaffAdmin(admin.ModelAdmin):
    list_display = ('full_name','importance','isActive')
    list_display_links = ('full_name',)


@admin.register(Partners)
class PartnersAdmin(admin.ModelAdmin):
    list_display = ('title', 'isActive')
    list_display_links = ('title',)


@admin.register(PaidServise)
class PaidServiseAdmin(admin.ModelAdmin):
    list_display = ('title','cost','isActive')
    list_display_links = ('title',)


@admin.register(NavBar)
class NavbarAdmin(admin.ModelAdmin):
    list_display = ('title','importance','isActive')
    list_display_links = ('title',)
