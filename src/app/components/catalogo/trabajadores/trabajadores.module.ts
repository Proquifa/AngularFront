import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PipeModule } from '../../../pipes/accounting/accounting.module';
import { SharedModule } from '../../shared/shared.module';
import { TrabajadoresRoutingModule } from './trabajadores-routing.module';
import { TrabajadoresComponent } from './trabajadores.component';
import { CatalogoService } from '../../../services/catalogo/catalogo.service';
import { CrearTrabajadorComponent } from './crear-trabajador/crear-trabajador.component';
import { EditarTrabajadorComponent } from './editar-trabajador/editar-trabajador.component';
import { DropListModule } from '../../shared/drop-list/drop-list.module';
import { DatePickerModule } from '../../shared/date-picker/date-picker.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TrabajadoresRoutingModule,
    PipeModule,
    SharedModule,
    DropListModule,
    DatePickerModule
  ],
  declarations: [
    TrabajadoresComponent,
    CrearTrabajadorComponent,
    EditarTrabajadorComponent
  ],
  providers: [
    CatalogoService
  ],
  exports: [
      TrabajadoresComponent
  ]
})
export class TrabajadoresModule { }
