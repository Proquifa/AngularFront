import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BarraProgresoTrabajarRutaEnvioComponent } from './barra-progreso-trabajar-ruta-envio.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: BarraProgresoTrabajarRutaEnvioComponent
  
      }

    ])
  ],
  exports: [
    RouterModule
  ]
})
export class BarraProgresoTrabajarRutaEnvioRouting {
}












