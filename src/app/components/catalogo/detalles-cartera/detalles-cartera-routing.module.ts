import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetallesCarteraComponent } from './detalles-cartera.component'

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: DetallesCarteraComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DetallesCarteraRoutingModule {
}
