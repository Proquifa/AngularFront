import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DocumentosRecibidosComponent } from './documentos-recibidos.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DocumentosRecibidosComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DocumentosRecibidosRoutingModule {
}