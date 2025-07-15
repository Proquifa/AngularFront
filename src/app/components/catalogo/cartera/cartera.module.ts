import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../../pipes/accounting/accounting.module";
import { CarteraRoutingModule } from "./cartera-routing.module";
import { CarteraComponent } from "./cartera.component";
import { PaginationComponent } from './information-card/pagination/pagination.component';
import { InformationCardComponent } from './information-card/information-card.component';
import { SharedModule } from '../../shared/shared.module'
import { CatalogoService } from '../../../services/catalogo/catalogo.service'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    CarteraRoutingModule,
    PipeModule,
    SharedModule
  ],
  declarations: [
    CarteraComponent,
    PaginationComponent,
    InformationCardComponent,
  ],
  providers: [
    CatalogoService
  ],
  exports: [
    CarteraComponent
  ]
})
export class CarteraModule { }
