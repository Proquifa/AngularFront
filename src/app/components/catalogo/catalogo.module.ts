import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../pipes/accounting/accounting.module";
import { CatalogoRoutingModule } from "./catalogo-routing.module";
import { CatalogoComponent } from "./catalogo.component";
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    CatalogoRoutingModule,
    PipeModule,
    SharedModule
  ],
  declarations: [
    CatalogoComponent,
  ]
})
export class CatalogoModule { }
