from rest_framework import generics
from .models import TipoDocumento
from .serializers import TipoDocumentoSerializer

class TipoDocumentoListCreate(generics.ListCreateAPIView):
    queryset = TipoDocumento.objects.all()
    serializer_class = TipoDocumentoSerializer