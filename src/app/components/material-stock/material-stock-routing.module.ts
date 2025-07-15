import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MaterialStockComponent} from './material-stock.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MaterialStockComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class MaterialStockRoutingModule {
}
