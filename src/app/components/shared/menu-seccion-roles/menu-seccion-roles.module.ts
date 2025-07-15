import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuSeccionRolesComponent} from './menu-seccion-roles.component';
import {MenuSeccionModule} from '../menu-seccion/menu-seccion.module';

@NgModule({
  imports: [
    CommonModule,
    MenuSeccionModule
  ],
  declarations: [
    MenuSeccionRolesComponent
  ],
  exports: [
    MenuSeccionRolesComponent
  ]
})
export class MenuSeccionRolesModule {

}
