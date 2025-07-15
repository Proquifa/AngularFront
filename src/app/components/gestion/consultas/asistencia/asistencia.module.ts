import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../../../pipes/accounting/accounting.module";
import { AsistenciaRoutingModule } from "./asistencia-routing.module";
import { AsistenciaComponent } from "./asistencia.component";
import { DatePickerModule } from "../../../shared/date-picker/date-picker.module";
import { DropListModule } from "../../../shared/drop-list/drop-list.module";
import { RadioButtonModule } from "../../../shared/radio-button/radio-button.module";
import { SharedModule } from "../../../shared/shared.module";
import { FilterModule } from "../../../shared/filter/filter.module";
import { MatTooltipModule} from '@angular/material';
import { DonutChartModule } from '../../../shared/donut-chart/donut-chart.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    AsistenciaRoutingModule,
    PipeModule,
    DatePickerModule,
    DropListModule,
    RadioButtonModule,
    FilterModule,
    SharedModule,
    MatTooltipModule,
    DonutChartModule
  ],
  declarations: [
    AsistenciaComponent
  ],
  exports:[
    AsistenciaComponent,
    MatTooltipModule
  ]
})
export class AsistenciaModule { }
