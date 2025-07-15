import {NgModule} from '@angular/core';
import {GestionCuarentenaComponent} from './gestion-cuarentena.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {GraficaBarrasModule} from '../shared/grafica-barras/grafica-barras.module';
import {GestionCuarentenaRoutingModule} from './gestion-cuarentena-routing.module';
import {DonutChartModule} from '../shared/donut-chart/donut-chart.module';
import {MenuSeccionModule} from '../shared/menu-seccion/menu-seccion.module';
import { VistaTrabajarProductosComponent } from './vista-trabajar-productos/vista-trabajar-productos.component';
import {ComboFlechaVerdeModule} from '../shared/combo-flecha-verde/combo-flecha-verde.module';
import { PopUpFinalizarExitosoComponent } from './pop-up/pop-up-finalizar-exitoso/pop-up-finalizar-exitoso.component';
import {MenuSeccionRolesModule} from '../shared/menu-seccion-roles/menu-seccion-roles.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GraficaBarrasModule,
    GestionCuarentenaRoutingModule,
    DonutChartModule,
    MenuSeccionModule,
    ComboFlechaVerdeModule,
    MenuSeccionRolesModule
  ],
  declarations: [
    GestionCuarentenaComponent,
    VistaTrabajarProductosComponent,
    PopUpFinalizarExitosoComponent,
  ],
  exports: [
    GestionCuarentenaComponent
  ]
})

export class GestionCuarentenaModule {

}
