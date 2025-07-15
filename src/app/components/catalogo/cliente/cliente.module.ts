import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../../pipes/accounting/accounting.module";
import { ClienteRoutingModule } from "./cliente-routing.module";
import { ClienteComponent } from "./cliente.component";
import { ActiveButtonComponent } from '../active-button/activeButton.component';
import { ClienteService } from '../../../services/catalogo/clientes/clientes.service';
import { SharedModule } from '../../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpModule,
    ClienteRoutingModule,
    PipeModule,
    SharedModule
  ],
  declarations: [
    ClienteComponent,
    ActiveButtonComponent
  ],
  providers: [
    ClienteService
  ],
  exports: [
    ClienteComponent
  ]
})
export class ClienteModule { }
