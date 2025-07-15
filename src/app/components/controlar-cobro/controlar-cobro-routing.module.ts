import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ControlarCobroComponent} from './controlar-cobro.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ControlarCobroComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class ControlarCobroRoutingModule {

}
