import {NgModule} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {ConsolaPrioridadesComponent} from './consola-prioridades.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ConsolaPrioridadesComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class ConsolaPrioridadesRoutingModule {

}
