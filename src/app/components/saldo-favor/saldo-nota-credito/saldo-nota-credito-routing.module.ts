import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SaldoNotaCreditoComponent} from './saldo-nota-credito.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SaldoNotaCreditoComponent
      }
    ])
  ],
  exports: [
   RouterModule
  ]
})

export class SaldoNotaCreditoRoutingModule {
}
