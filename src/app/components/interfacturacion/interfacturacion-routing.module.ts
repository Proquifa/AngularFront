import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InterfacturacionComponent } from './interfacturacion.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: InterfacturacionComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class InterfacturacionRoutingModule {
}
