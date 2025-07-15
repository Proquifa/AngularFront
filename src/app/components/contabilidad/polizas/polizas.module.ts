import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PipeModule } from '../../../pipes/accounting/accounting.module';
import { SharedModule } from '../../shared/shared.module';
import { PolizasComponent } from './polizas.component';
import { PolizasRoutingModule } from './polizas-routing.module';
import { CatalogoService } from '../../../services/catalogo/catalogo.service';
import { DatePickerModule } from '../../shared/date-picker/date-picker.module';
import { AgregarPolizaComponent } from './agregar-poliza/agregar-poliza.component';
import { EditarPolizaComponent } from './editar-poliza/editar-poliza.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    PipeModule,
    SharedModule,
    PolizasRoutingModule,
    DatePickerModule,
    PipeModule
  ],
  declarations: [
    PolizasComponent,
    AgregarPolizaComponent,
    EditarPolizaComponent
  ],
  providers: [
    CatalogoService
  ],
  exports: [
    PolizasComponent
  ]
})
export class PolizasModule { }
