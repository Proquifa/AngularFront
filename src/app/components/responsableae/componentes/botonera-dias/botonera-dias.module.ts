import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BotoneraDiasComponent } from "./botonera-dias.component";
import { BotoneraDiasRoutingModule } from "./botonera-dias-routing.module";


@NgModule({
    imports: [
        CommonModule,
        BotoneraDiasRoutingModule,
    ],
    declarations: [
        BotoneraDiasComponent
    ],
    exports: [
        BotoneraDiasComponent
    ]
})

export class BotoneraDiasModule { }
