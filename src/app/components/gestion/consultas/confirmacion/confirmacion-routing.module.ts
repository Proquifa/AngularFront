import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConfirmacionComponent } from './confirmacion.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ConfirmacionComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ConfirmacionRoutingModule {
}