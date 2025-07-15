import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ConsolaEnviosComponent} from './consola-envios.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ConsolaEnviosComponent
      }
      ])
  ],
  exports: [
    RouterModule
  ]
})

export class ConsolaEnviosRoutingModule {
}
