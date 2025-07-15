import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TrabajarRutasEnvioComponent } from './trabajar-rutas-envio.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TrabajarRutasEnvioComponent
      }

    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TrabajarRutasEnvioRoutingModule {
}
