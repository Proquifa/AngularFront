import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../../pipes/accounting/accounting.module";
import { DetallesCarteraRoutingModule } from "./detalles-cartera-routing.module";
import { DetallesCarteraComponent } from "./detalles-cartera.component";
import { FlipCardComponent } from './flip-card/flip-card.component'
import { SharedModule } from '../../shared/shared.module'
import { CatalogoService } from '../../../services/catalogo/catalogo.service'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    DetallesCarteraRoutingModule,
    PipeModule,
    SharedModule
  ],
  declarations: [
    DetallesCarteraComponent,
    FlipCardComponent
  ],
  providers: [
    CatalogoService
  ],
  exports: [
    DetallesCarteraComponent
  ]
})
export class DetallesCarteraModule { }
