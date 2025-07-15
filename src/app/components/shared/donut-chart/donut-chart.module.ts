import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DonutChartComponent } from './donut-chart.component';
import { DonutChartRoutingModule } from './donut-chart-routing.module';

@NgModule({
    imports: [
        CommonModule,
        DonutChartRoutingModule
    ],
    declarations: [
        DonutChartComponent
    ],
    exports:[
        DonutChartComponent
    ] 
})

export class DonutChartModule { }