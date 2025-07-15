import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BarraPasosComponent } from "./barra-pasos.component";
import { BarraPasosRoutingModule } from "./barra-pasos-routing.module";

@NgModule({
    imports: [
        CommonModule,
        BarraPasosRoutingModule
    ],
    declarations: [
        BarraPasosComponent
    ],
    exports:[
        BarraPasosComponent
    ] 
})

export class BarraPasosModule { }