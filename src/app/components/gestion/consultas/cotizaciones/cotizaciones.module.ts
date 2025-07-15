import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../../../pipes/accounting/accounting.module";
import { CotizacionesRoutingModule } from "./cotizaciones-routing.module";
import { CotizacionesComponent } from "./cotizaciones.component";
import { DatePickerModule } from "../../../shared/date-picker/date-picker.module";
import { DropListModule } from "../../../shared/drop-list/drop-list.module";
import { RadioButtonModule } from "../../../shared/radio-button/radio-button.module";
import { FilterComponent } from "../../../shared/filter/filter.component";
import { FilterModule } from "../../../shared/filter/filter.module";
import { SharedModule } from "../../../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    CotizacionesRoutingModule,
    PipeModule,
    DatePickerModule,
    DropListModule,
    FilterModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [
    CotizacionesComponent
  ],
  exports:[
    CotizacionesComponent
  ]
})
export class CotizacionesModule { }
