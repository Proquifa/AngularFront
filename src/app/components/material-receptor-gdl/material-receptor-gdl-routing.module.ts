import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MaterialReceptorGdlComponent} from './material-receptor-gdl.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MaterialReceptorGdlComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class MaterialReceptorGdlRoutingModule {

}
