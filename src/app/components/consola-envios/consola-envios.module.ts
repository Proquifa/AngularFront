import {NgModule} from '@angular/core';
import {ConsolaEnviosComponent} from './consola-envios.component';
import {ConsolaEnviosRoutingModule} from './consola-envios-routing.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MenuSeccionRolesModule} from '../shared/menu-seccion-roles/menu-seccion-roles.module';

@NgModule({
  imports: [
    ConsolaEnviosRoutingModule,
    CommonModule,
    FormsModule,
    MenuSeccionRolesModule
  ],
  declarations: [
    ConsolaEnviosComponent
  ],
  exports: [
    ConsolaEnviosComponent
  ]
})

export class ConsolaEnviosModule {

}
