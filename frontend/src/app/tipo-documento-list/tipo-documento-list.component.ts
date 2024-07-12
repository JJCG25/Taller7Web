import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { TipoDocumentoService } from '../tipo-documento.service';
import { TipoDocumento } from 'src/app/modelo/tipoDoc.model';

@Component({
  selector: 'app-tipo-documento-list',
  templateUrl: './tipo-documento-list.component.html',
  styleUrls: ['./tipo-documento-list.component.css']
})
export class TipoDocumentoListComponent implements OnInit {

  tipoDocumentos: TipoDocumento[] = [];

  constructor(private tipoDocumentoService: TipoDocumentoService, private router:Router) { }

  ngOnInit(): void {
    this.tipoDocumentoService.getTipoDocumentos().subscribe(data => {
      this.tipoDocumentos = data;
    });
  }
}

