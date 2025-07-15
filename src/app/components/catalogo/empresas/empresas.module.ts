import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PipeModule } from '../../../pipes/accounting/accounting.module';
import { SharedModule } from '../../shared/shared.module';
import { EmpresasRoutingModule } from './empresas-routing.module';
import { EmpresasComponent } from './empresas.component';
import { CatalogoService } from '../../../services/catalogo/catalogo.service';
import { CrearEmpresaComponent } from './crear-empresa/crear-empresa.component';
import { EditarEmpresaComponent } from './editar-empresa/editar-empresa.component';
import { DropListModule } from '../../shared/drop-list/drop-list.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    EmpresasRoutingModule,
    PipeModule,
    SharedModule,
    DropListModule
  ],
  declarations: [
    EmpresasComponent,
    CrearEmpresaComponent,
    EditarEmpresaComponent
  ],
  providers: [
    CatalogoService
  ],
  exports: [
      EmpresasComponent
  ]
})
export class EmpresasModule { }
