import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductoReclamoComponent} from './producto-reclamo.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProductoReclamoComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ProductoReclamoRoutingModule {

}
