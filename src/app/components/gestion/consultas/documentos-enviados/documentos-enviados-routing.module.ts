import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DocumentosEnviadosComponent } from './documentos-enviados.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DocumentosEnviadosComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DocumentosEnviadosRoutingModule {
}