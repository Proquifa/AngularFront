import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../../../pipes/accounting/accounting.module";
import { EditarRoutingModule } from "./editar-routing.module";
import { EditarComponent } from "./editar.component";
import { SharedModule } from '../../../shared/shared.module'
import { CatalogoService } from '../../../../services/catalogo/catalogo.service'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    EditarRoutingModule,
    PipeModule,
    SharedModule
  ],
  declarations: [
    EditarComponent,
  ],
  providers: [
    CatalogoService
  ],
  exports: [
    EditarComponent
  ]
})
export class EditarModule { }
