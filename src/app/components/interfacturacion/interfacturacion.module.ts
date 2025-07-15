import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InterfacturacionComponent} from './interfacturacion.component';
import {InterfacturacionRoutingModule} from './interfacturacion-routing.module';
import {MenuSeccionComponent} from '../shared/menu-seccion/menu-seccion.component';
import { FacturacionComponent } from './componentes/facturacion/facturacion.component';
import {DonutChartComponent} from '../shared/donut-chart/donut-chart.component';
import {FormsModule} from '@angular/forms';
import { OredenesDeCompraComponent } from './componentes/oredenes-de-compra/oredenes-de-compra.component';


@NgModule({
  imports: [
    CommonModule,
    InterfacturacionRoutingModule,
    FormsModule,
  ],
  declarations: [
    InterfacturacionComponent,
    MenuSeccionComponent,
    FacturacionComponent,
    DonutChartComponent,
    OredenesDeCompraComponent
  ],
  exports: [
    InterfacturacionComponent
  ]
})
export class InterfacturacionModule { }
