import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../../../pipes/accounting/accounting.module";
import { ReporteCobrosRoutingModule } from "./reportecobros-module";
import { ReportecobrosComponent } from "./reportecobros.component";
import { DatePickerModule } from "../../../shared/date-picker/date-picker.module";
import { DropListModule } from "../../../shared/drop-list/drop-list.module";
import { RadioButtonModule } from "../../../shared/radio-button/radio-button.module";
import { FilterComponent } from "../../../shared/filter/filter.component";
import { FilterModule } from "../../../shared/filter/filter.module";
import { ElementFilter } from "../../../shared/filter/element.model";
import { SharedModule } from "../../../shared/shared.module";
import { DonutChartModule } from "../../../shared/donut-chart/donut-chart.module";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    ReporteCobrosRoutingModule,
    PipeModule,
    DatePickerModule,
    DropListModule,
    RadioButtonModule,
    FilterModule,
    SharedModule,
    DonutChartModule
  ],
  declarations: [
    ReportecobrosComponent
  ],
  exports:[
    ReportecobrosComponent
  ]
})
export class ReporteCobrosModule { }
