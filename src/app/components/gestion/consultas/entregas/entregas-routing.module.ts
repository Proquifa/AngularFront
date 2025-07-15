import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EntregasComponent } from './entregas.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: EntregasComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class EntregasRoutingModule {
}