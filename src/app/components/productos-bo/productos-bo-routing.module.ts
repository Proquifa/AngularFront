import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductosBoComponent} from './productos-bo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProductosBoComponent
      }
      ])
  ],
  exports: [
    RouterModule
  ]
})
export class ProductosBoRoutingModule {
}
