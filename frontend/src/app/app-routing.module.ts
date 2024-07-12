import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoDocumentoListComponent } from './tipo-documento-list/tipo-documento-list.component';

const routes: Routes = [
  { path: 'tipodocumento', component: TipoDocumentoListComponent },
  { path: '', redirectTo: '/tipodocumento', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

