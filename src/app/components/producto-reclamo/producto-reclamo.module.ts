import {NgModule} from '@angular/core';
import {ProductoReclamoRoutingModule} from './producto-reclamo-routing.module';
import {ProductoReclamoComponent} from './producto-reclamo.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MenuSeccionModule} from '../shared/menu-seccion/menu-seccion.module';
import {DonutChartModule} from '../shared/donut-chart/donut-chart.module';
import {GraficaBarrasModule} from '../shared/grafica-barras/grafica-barras.module';
import { GestionProductoReclamoComponent } from './gestion-producto-reclamo/gestion-producto-reclamo.component';
import {ComboFlechaVerdeModule} from '../shared/combo-flecha-verde/combo-flecha-verde.module';
import { EnvioCorreoComponent } from './envio-correo/envio-correo.component';
import {MenuSeccionRolesModule} from '../shared/menu-seccion-roles/menu-seccion-roles.module';

@NgModule({
  imports: [
    ProductoReclamoRoutingModule,
    CommonModule,
    FormsModule,
    MenuSeccionModule,
    DonutChartModule,
    GraficaBarrasModule,
    ComboFlechaVerdeModule,
    MenuSeccionRolesModule
  ],
  declarations: [
    ProductoReclamoComponent,
    GestionProductoReclamoComponent,
    EnvioCorreoComponent
  ]
})
export class ProductoReclamoModule {

}
