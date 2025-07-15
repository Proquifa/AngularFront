import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PipeModule } from '../../../../pipes/accounting/accounting.module';
import { DatePickerModule } from '../../../shared/date-picker/date-picker.module';
import { DropListModule } from '../../../shared/drop-list/drop-list.module';
import { RadioButtonModule } from '../../../shared/radio-button/radio-button.module';
import { FilterComponent } from '../../../shared/filter/filter.component';
import { FilterModule } from '../../../shared/filter/filter.module';
import { ElementFilter } from '../../../shared/filter/element.model';
import { SharedModule } from '../../../shared/shared.module';
import { DonutChartModule } from '../../../shared/donut-chart/donut-chart.module';
import { NotaCreditoRoutingModule } from './nota-credito-routing.module';
import { NotaCreditoComponent } from './nota-credito.component';

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      HttpModule,
      NotaCreditoRoutingModule,
      PipeModule,
      DatePickerModule,
      DropListModule,
      RadioButtonModule,
      FilterModule,
      SharedModule,
      DonutChartModule
    ],
    declarations: [
      NotaCreditoComponent,
    ],
    exports: [
      NotaCreditoComponent
    ]
  })
export class NotaCreditoModule { }
