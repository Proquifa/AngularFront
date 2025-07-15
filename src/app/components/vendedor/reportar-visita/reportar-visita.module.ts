import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";
import { ReportarVisitaComponent } from './reportar-visita.component';
import { ReportarVisitaRoutingModule } from './reportar-visita-routing.module';
import { BotonesTabModule } from "../../shared/botones-tab/botones-tab.module";

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        ReportarVisitaRoutingModule,
        BotonesTabModule
    ],
    declarations: [
        ReportarVisitaComponent
    ],
    exports:[
        ReportarVisitaComponent
    ]
})

export class ReportarVisitaModule{}