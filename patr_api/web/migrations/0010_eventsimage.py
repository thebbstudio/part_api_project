# Generated by Django 4.0.4 on 2022-05-19 17:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0009_newsimage_path_alter_news_img_path_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='EventsImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('path', models.FileField(blank=True, default=None, upload_to='img/events/heap/')),
                ('events', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='web.events')),
            ],
        ),
    ]