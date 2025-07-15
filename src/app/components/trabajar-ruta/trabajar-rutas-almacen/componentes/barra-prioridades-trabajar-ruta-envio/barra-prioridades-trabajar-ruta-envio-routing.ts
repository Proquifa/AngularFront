import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BarraPrioridadesTrabajarRutaEnvioComponent } from './barra-prioridades-trabajar-ruta-envio.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: BarraPrioridadesTrabajarRutaEnvioComponent
  
      }

    ])
  ],
  exports: [
    RouterModule
  ]
})
export class BarraPrioridadesTrabajarRutaEnvioRouting {
}












