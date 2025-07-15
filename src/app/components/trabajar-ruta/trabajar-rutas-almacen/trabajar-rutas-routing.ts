import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TrabajarRutasComponent } from './trabajar-rutas.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: TrabajarRutasComponent
      },


    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TrabajarRutasRouting {
}
