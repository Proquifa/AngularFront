import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../../../pipes/accounting/accounting.module";
import { EntregasRoutingModule } from "./entregas-routing.module";
import { EntregasComponent } from "./entregas.component";
import { DatePickerModule } from "../../../shared/date-picker/date-picker.module";
import { DropListModule } from "../../../shared/drop-list/drop-list.module";
import { RadioButtonModule } from "../../../shared/radio-button/radio-button.module";
import { SharedModule } from "../../../shared/shared.module";
import { FilterModule } from "../../../shared/filter/filter.module";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    EntregasRoutingModule,
    PipeModule,
    DatePickerModule,
    DropListModule,
    RadioButtonModule,
    FilterModule,
    SharedModule
  ],
  declarations: [
    EntregasComponent
  ],
  exports:[
    EntregasComponent
  ]
})
export class EntregasModule { }