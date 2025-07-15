import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { SearchBarModule } from "../search-bar/search-bar.module";
import { ComboFlechaVerdeComponent } from "./combo-flecha-verde.component";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ComboFlechaVerdeComponent
  ],
  exports:[
    ComboFlechaVerdeComponent
  ]
})
export class ComboFlechaVerdeModule { }