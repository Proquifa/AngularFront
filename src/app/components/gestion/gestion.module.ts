import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../pipes/accounting/accounting.module";
import { GestionRoutingModule } from "./gestion-routing.module";
import { GestionComponent } from "./gestion.component";
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    GestionRoutingModule,
    PipeModule,
    SharedModule
  ],
  declarations: [
    GestionComponent
  ]
})
export class GestionModule { }
