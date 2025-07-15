import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { DragulaModule } from 'ng2-dragula';
import { PipeModule } from "../../../pipes/accounting/accounting.module";
import { CrearCarteraRoutingModule } from "./crear-cartera-routing.module";
import { CrearCarteraComponent } from "./crear-cartera.component";
import { SharedModule } from '../../shared/shared.module'
import { DropListModule } from "../../shared/drop-list/drop-list.module";
import { CatalogoService } from '../../../services/catalogo/catalogo.service'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    CrearCarteraRoutingModule,
    PipeModule,
    SharedModule,
    DragulaModule,
    DropListModule
  ],
  declarations: [
    CrearCarteraComponent,
  ],
  providers: [
    CatalogoService
  ],
  exports: [
    CrearCarteraComponent
  ]
})
export class CrearCarteraModule { }
