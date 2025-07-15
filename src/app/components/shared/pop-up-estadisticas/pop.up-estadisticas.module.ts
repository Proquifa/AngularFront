import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PopUpEstadisticasRoutingModule } from "./pop-up-estadisticas-routing.module";
import { PopUpEstadisticasComponent } from "./pop-up-estadisticas.component";
import { GraficaPuntosModule } from "../grafica-puntos/grafica-puntos.module";
import { PipeModule } from "../../../pipes/accounting/accounting.module";

@NgModule({
    imports: [
        CommonModule,
        PopUpEstadisticasRoutingModule,
        GraficaPuntosModule,
        PipeModule
    ],
    declarations: [
       PopUpEstadisticasComponent
    ],
    exports:[
        PopUpEstadisticasComponent
    ] 
})

export class PopUpEstadisticasModule { }