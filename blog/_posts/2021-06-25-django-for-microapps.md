---
layout: post
title: "Django for microapps?"
description: "How to use Django for a tiny micro app? Running django from a single file."
author: awin
date: 2021-06-25 01:32:00 +0530
categories: [ engineering, shorts ]
image: "/assets/img/posts/microapps.jpg"
tags: [featured]
---

Django is a batteries included framework, packed with a lot of features. Can we use it to create a small app - say for example just to host a form or a list?


<!-- more -->

And it comes with a lot of sane defaults. As a fully loaded framework, it has a configurable auth module, and admin framework included.

In the security department - it has XSS, CSRF, clickjacking and SQL injection protection built in. Read more about django security [here](https://docs.djangoproject.com/en/3.2/topics/security/).

Together with the simplicity of the Python language, Django is one of the easiest frameworks to get started with. In fact, one of the design principles of the framework is to make development as quick as possible. You can get a simple app built and deployed in a matter of hours.

So, is it possible to use the fully loaded framework for achiveving something simple like hosting a form, without all the clutter of its folder structure?

Yes, definitely!

### Making a django app in a single file

This article will detail out how to build a django app in a single file.

Django by default has a unique folder structure. It has a project folder, and separate folders for each "app". And each of these folders have files for url routes, settings etc.

To create a minimal one file app we need to define the following:

##### 1. Settings/configuration for Django in the file
We need the configuration to tell django where to look for the url patterns - as a bare minimum.

```python
from django.conf import settings

settings.configure(
    ROOT_URLCONF=__name__,
)
```

##### 2. Request handler
We need a function to handle the request, and return a response.

```python
from django.http import HttpResponse

def hello_world(request):
    return HttpResponse("Hello, Django!")

```

##### 3. URL patterns

Lets point the root url `/` to the request handler defined above.

```python
urlpatterns = [
    path('', hello_world)
]

```

##### 4. WSGI init
```python
from django.core.handlers.wsgi import WSGIHandler

application = WSGIHandler()

```

Putting it all together, there is your django app in a single file.

```python

from django.conf import settings
from django.core.wsgi import get_wsgi_application
from django.http import HttpResponse
from django.urls import path

settings.configure(
    ROOT_URLCONF=__name__,
)

def hello_world(request):
    return HttpResponse("Hello, Django!")

urlpatterns = [
    path('', hello_world)
]

application = get_wsgi_application()

```

You can run it with `gunicorn` with the following command.
```shell
$ gunicorn hello_django:application

```

#### A separate folder for templates

You can make it a bit more functional, by creating a separate folder for templates, along with the settings to configure the template directory. This will keep your html files separate, and not clutter the Python code.

```python
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve()

settings.configure(
    ROOT_URLCONF=__name__,
    TEMPLATES=[
        {
            "BACKEND": "django.template.backends.django.DjangoTemplates",
            "DIRS": [os.path.join(BASE_DIR, "templates")],
        }
    ],
)

```

#### More `settings` additions

Add middlewares, and secret key for session.

```python
settings.configure(
    ROOT_URLCONF=__name__,
    SECRET_KEY = 'your-randomly-generated-secret-key',

    INSTALLED_APPS=[
        "django.contrib.admin",
        "django.contrib.auth",
        "django.contrib.contenttypes",
        "django.contrib.sessions",
        "django.contrib.messages",
        "django.contrib.staticfiles"
    ],

    TEMPLATES=[
        {
            "BACKEND": "django.template.backends.django.DjangoTemplates",
            "DIRS": [os.path.join(BASE_DIR, "templates")],
        }
    ],
    MIDDLEWARE = [
        "django.middleware.security.SecurityMiddleware",
        "django.contrib.sessions.middleware.SessionMiddleware",
        "django.middleware.csrf.CsrfViewMiddleware",
        "django.contrib.auth.middleware.AuthenticationMiddleware",
        "django.contrib.messages.middleware.MessageMiddleware",
        "django.middleware.clickjacking.XFrameOptionsMiddleware",
    ],

)

```

You can view the final python file and the template here - [https://gist.github.com/awinabi/31c8ca60cc7fd807990c63dd54641e19](https://gist.github.com/awinabi/31c8ca60cc7fd807990c63dd54641e19)


#### Notes

- I tried adding `django.middleware.common.CommonMiddleware` to the list of middlewares, but for some reason it returns Bad Request (400).

- Adding middlewares without adding `INSTALLED_APPS` throws an error

- Use `get_wsgi_application` instead of `django.core.handlers.wsgi.WSGIHandler`, which fixes `AppRegistryNotReady` error.

- When it becomes a little involved, it is better to stick to the django project folder; rather than restricting it to a single file.

<div class='divider'>...</div>

You can use the power of Django and customize it to any folder structure that is best suited for you. And tremendously decrease your cognitive load, by scaling it down to a single file.


#### References

- Carlton Gibson talk at DjangoCon US 2019 - [video](https://www.youtube.com/watch?v=w9cYEovduWI) and related [github repository](https://github.com/wsvincent/django-microframework).

- Create a single file landing page with Django - [video by Arun Ravindran](https://www.youtube.com/watch?v=7XNChGGoBf0).
