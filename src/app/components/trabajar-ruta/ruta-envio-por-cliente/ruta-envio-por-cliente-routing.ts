import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RutaEnvioPorClienteComponent} from './ruta-envio-por-cliente.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: RutaEnvioPorClienteComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class RutaEnvioPorClienteRouting {

}
