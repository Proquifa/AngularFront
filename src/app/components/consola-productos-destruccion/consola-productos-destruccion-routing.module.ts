import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ConsolaProductosDestruccionComponent} from './consola-productos-destruccion.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ConsolaProductosDestruccionComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ConsolaProductosDestruccionRoutingModule {

}
