import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BotonesTabRoutingModule } from './botones-tab-routing.module';
import { BotonesTabComponent } from "./botones-tab.component";


@NgModule({
    imports: [
        CommonModule,
        BotonesTabRoutingModule
    ],
    declarations: [
        BotonesTabComponent
    ],
    exports:[
        BotonesTabComponent
    ] 
})

export class BotonesTabModule { }