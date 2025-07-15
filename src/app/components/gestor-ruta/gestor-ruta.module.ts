import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {GestorRutaRoutingModule} from './gestor-ruta-routing.module';
import {GestorRutaComponent} from './gestor-ruta.component';
import {MenuSeccionModule} from '../shared/menu-seccion/menu-seccion.module';

@NgModule({
  imports: [
    CommonModule,
    GestorRutaRoutingModule,
    MenuSeccionModule,
  ],
  declarations: [
    GestorRutaComponent
  ],
  exports: [
    GestorRutaComponent
  ]
})

export class GestorRutaModule { }
