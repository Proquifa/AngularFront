import {NgModule} from '@angular/core';
import {GestionCuarentenaModule} from './gestion-cuarentena.module';
import {RouterModule} from '@angular/router';
import {GestionCuarentenaComponent} from './gestion-cuarentena.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: GestionCuarentenaComponent
      }
      ])
  ],
  exports: [
    RouterModule
  ]
})

export class GestionCuarentenaRoutingModule {

}
