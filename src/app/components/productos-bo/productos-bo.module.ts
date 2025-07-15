import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProductosBoRoutingModule} from './productos-bo-routing.module';
import {ProductosBoComponent} from './productos-bo.component';
import {MenuSeccionModule} from '../shared/menu-seccion/menu-seccion.module';
import {DonutChartModule} from '../shared/donut-chart/donut-chart.module';
import {GraficaBarrasModule} from '../shared/grafica-barras/grafica-barras.module';
import { VistaGestionProductoComponent } from './vista-gestion-producto/vista-gestion-producto.component';
import {ComboFlechaVerdeModule} from '../shared/combo-flecha-verde/combo-flecha-verde.module';
import {DatePickerModule} from '../shared/date-picker/date-picker.module';
import {AlertaModule} from '../shared/alerta/alerta.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductosBoRoutingModule,
    MenuSeccionModule,
    DonutChartModule,
    GraficaBarrasModule,
    ComboFlechaVerdeModule,
    DatePickerModule,
    AlertaModule
  ],
  declarations: [
    ProductosBoComponent,
    VistaGestionProductoComponent
  ]
})
export class ProductosBoModule {
}
