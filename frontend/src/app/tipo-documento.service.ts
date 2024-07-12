import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  private apiUrl = 'http://localhost:8000/api/tipodocumento/';

  constructor(private http: HttpClient) { }

  getTipoDocumentos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}

