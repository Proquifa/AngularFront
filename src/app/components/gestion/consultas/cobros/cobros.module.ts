import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../../../pipes/accounting/accounting.module";
import { CobrosRoutingModule } from "./cobros-routing.module";
import { CobrosComponent } from "./cobros.component";
import { DatePickerModule } from "../../../shared/date-picker/date-picker.module";
import { DropListModule } from "../../../shared/drop-list/drop-list.module";
import { RadioButtonModule } from "../../../shared/radio-button/radio-button.module";
import { FilterModule } from "../../../shared/filter/filter.module";
import { SharedModule } from "../../../shared/shared.module";
import { GraficasCobrosComponent } from "./graficas-cobros/graficas-cobros.component";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    CobrosRoutingModule,
    PipeModule,
    DatePickerModule,
    DropListModule,
    RadioButtonModule,
    FilterModule,
    SharedModule
  ],
  declarations: [
    CobrosComponent,
    GraficasCobrosComponent
  ],
  exports:[
    CobrosComponent
  ]
})
export class CobrosModule { }
