import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CrearCarteraComponent } from './crear-cartera.component'

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CrearCarteraComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CrearCarteraRoutingModule {
}
