from django.urls import path
from .views import TipoDocumentoListCreate

urlpatterns = [
    path('tipodocumento/', TipoDocumentoListCreate.as_view(), name='tipodocumento-list-create'),
]
