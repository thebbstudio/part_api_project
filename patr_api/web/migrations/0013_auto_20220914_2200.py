# Generated by Django 3.2.15 on 2022-09-14 17:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0012_alter_documents_options_alter_navbar_options_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='VotingOption',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(max_length=255, verbose_name='Ссылка на видео')),
                ('title', models.CharField(max_length=50, verbose_name='Заголовок')),
                ('description', models.CharField(max_length=100, verbose_name='Описание')),
                ('isActive', models.BooleanField(default=True, verbose_name='Активно')),
            ],
        ),
        migrations.AlterModelOptions(
            name='documents',
            options={'ordering': ['category', 'title']},
        ),
        migrations.AlterField(
            model_name='events',
            name='img_path',
            field=models.ImageField(upload_to='img/event/2022-09-14'),
        ),
        migrations.AlterField(
            model_name='news',
            name='img_path',
            field=models.ImageField(blank=True, upload_to='img/news/2022-09-14'),
        ),
        migrations.CreateModel(
            name='ListVote',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ip', models.CharField(max_length=15, verbose_name='IP')),
                ('votingOption', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='web.votingoption', verbose_name='За кого голос')),
            ],
        ),
    ]
