# Generated by Django 4.0.4 on 2022-05-18 18:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0003_alter_staff_options_documents_isactive_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='events',
            options={'ordering': ['-date_publication', 'title']},
        ),
        migrations.AlterField(
            model_name='events',
            name='imgs_path',
            field=models.CharField(default=None, max_length=255),
        ),
    ]