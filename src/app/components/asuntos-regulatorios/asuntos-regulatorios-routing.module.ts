import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {AsuntosRegulatoriosComponent} from './asuntos-regulatorios.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AsuntosRegulatoriosComponent
      }
      ])
  ],
  exports: [
    RouterModule
  ]
})
export class AsuntosRegulatoriosRoutingModule {

}
