import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PopUpEstadisticasRoutingModule} from './pop-up-estadisticas-routing.module';
import {PopUpEstadisticasComponent} from './pop-up-estadisticas.component';
import {PipeModule} from '../../../pipes/accounting/accounting.module';
import {GraficaPuntosModule} from '../grafica-puntos/grafica-puntos.module';
import {DonutChartModule} from '../donut-chart/donut-chart.module';

@NgModule({
  imports: [
    CommonModule,
    PopUpEstadisticasRoutingModule,
    PipeModule,
    GraficaPuntosModule,
    DonutChartModule
  ],
  declarations: [
    PopUpEstadisticasComponent
  ],
  exports: [
    PopUpEstadisticasComponent
  ]
})

export class PopUpEstadisticasModule {
}
