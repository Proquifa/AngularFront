import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RutasComponent } from './rutas.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: RutasComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RutasRoutingModule {
}
