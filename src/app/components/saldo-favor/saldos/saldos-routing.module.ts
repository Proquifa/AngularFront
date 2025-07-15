import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SaldosComponent} from './saldos.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: SaldosComponent
      }
    ])
  ],
  exports: [
     RouterModule
   ]
})

export class SaldosRoutingModule {
}
