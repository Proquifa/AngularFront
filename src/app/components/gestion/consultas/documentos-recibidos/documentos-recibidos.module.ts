import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../../../pipes/accounting/accounting.module";
import { DocumentosRecibidosRoutingModule } from "./documentos-recibidos-routing.module";
import { DocumentosRecibidosComponent } from "./documentos-recibidos.component";
import { DatePickerModule } from "../../../shared/date-picker/date-picker.module";
import { DropListModule } from "../../../shared/drop-list/drop-list.module";
import { RadioButtonModule } from "../../../shared/radio-button/radio-button.module";
import { FilterModule } from "../../../shared/filter/filter.module";
import { SharedModule } from "../../../shared/shared.module";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    DocumentosRecibidosRoutingModule,
    PipeModule,
    DatePickerModule,
    DropListModule,
    RadioButtonModule,
    FilterModule,
    SharedModule
  ],
  declarations: [
    DocumentosRecibidosComponent
  ],
  exports:[
    DocumentosRecibidosComponent
  ]
})
export class DocumentosRecibidosModule { }
