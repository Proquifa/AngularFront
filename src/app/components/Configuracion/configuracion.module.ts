import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../pipes/accounting/accounting.module";
import { ConfiguracionRoutingModule } from "./configuracion-routing.module";
import { ConfiguracionComponent } from './configuracion.component';
import { TarjetaMenuComponent } from "../shared/tarjeta-menu/tarjeta-menu.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    ConfiguracionRoutingModule,
    PipeModule
  ],
  declarations: [
    ConfiguracionComponent,
    TarjetaMenuComponent
  ]
})
export class ConfiguracionModule { }
