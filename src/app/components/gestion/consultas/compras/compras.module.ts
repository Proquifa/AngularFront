import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../../../pipes/accounting/accounting.module";
import { ComprasRoutingModule } from "./compras-routing.module";
import { ComprasComponent } from "./compras.component";
import { DatePickerModule } from "../../../shared/date-picker/date-picker.module";
import { DropListModule } from "../../../shared/drop-list/drop-list.module";
import { RadioButtonModule } from "../../../shared/radio-button/radio-button.module";
import { FilterModule } from "../../../shared/filter/filter.module";
import { SharedModule } from "../../../shared/shared.module";
import { GraficasComponent } from "./graphicas-compras/graficas-cobros.component";
import { GraficasCobrosModule } from "./graphicas-compras/graficas.module";



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    ComprasRoutingModule,
    PipeModule,
    DatePickerModule,
    DropListModule,
    FilterModule,
    SharedModule,
    FormsModule,
 GraficasCobrosModule,

  ],
  declarations: [
    ComprasComponent
  ],
  exports:[
    ComprasComponent
  ]
})
export class ComprasModule { }
