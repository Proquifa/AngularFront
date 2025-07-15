import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BotoneraDiasComponent } from './botonera-dias.component';




@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: BotoneraDiasComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class BotoneraDiasRoutingModule {
}
