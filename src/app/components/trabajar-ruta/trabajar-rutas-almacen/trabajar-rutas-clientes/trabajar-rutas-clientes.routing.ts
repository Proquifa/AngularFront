import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TrabajarRutasClientesComponent } from './trabajar-rutas-clientes.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TrabajarRutasClientesComponent
      }

    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TrabajarRutasClientesRouting {
}
