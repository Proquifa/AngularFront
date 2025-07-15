import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../../../pipes/accounting/accounting.module";
import { RutasRoutingModule } from "./rutas-routing.module";
import { RutasComponent } from "./rutas.component";
import { SharedModule } from "../../../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    RutasRoutingModule,
    PipeModule,
    SharedModule
  ],
  declarations: [
    RutasComponent
  ],
  exports:[
    RutasComponent
  ]
})
export class RutasModule { }
