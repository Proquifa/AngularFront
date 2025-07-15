import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductosDocFaltanteComponent} from './productos-doc-faltante.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProductosDocFaltanteComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class ProductosDocFaltanteRoutingModule {

}
