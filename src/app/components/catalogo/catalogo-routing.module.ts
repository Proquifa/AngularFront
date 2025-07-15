import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo.component'

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CatalogoComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CatalogoRoutingModule {
}
