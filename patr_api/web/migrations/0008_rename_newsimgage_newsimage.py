# Generated by Django 4.0.4 on 2022-05-18 19:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0007_remove_news_imgs_path_remove_news_is_slider_and_more'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='NewsImgage',
            new_name='NewsImage',
        ),
    ]