import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TrabajarRutasEnvioInformacionComponent } from './trabajar-rutas-envio-informacion.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TrabajarRutasEnvioInformacionComponent
  
      }

    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TrabajarRutasEnvioInformacionRouting {
}












