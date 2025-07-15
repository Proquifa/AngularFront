import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DonutChartComponent } from './donut-chart.component';

@NgModule({
    imports: [
      RouterModule.forChild([
        {
          path: '',
          component: DonutChartComponent
        }
      ])
    ],
    exports: [
      RouterModule
    ]
  })

export class DonutChartRoutingModule {
}