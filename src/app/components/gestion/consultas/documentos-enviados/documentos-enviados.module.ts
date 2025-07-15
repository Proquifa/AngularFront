import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../../../pipes/accounting/accounting.module";
import { DocumentosEnviadosRoutingModule } from "./documentos-enviados-routing.module";
import { DocumentosEnviadosComponent } from "./documentos-enviados.component";
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
    DocumentosEnviadosRoutingModule,
    PipeModule,
    DatePickerModule,
    DropListModule,
    FilterModule,
    SharedModule
  ],
  declarations: [
    DocumentosEnviadosComponent
  ],
  exports:[
    DocumentosEnviadosComponent
  ]
})
export class DocumentosEnviadosModule { }
