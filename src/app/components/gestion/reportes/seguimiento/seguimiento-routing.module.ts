import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeguimientoComponent } from './seguimiento.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SeguimientoComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class SeguimientoRoutingModule {
}