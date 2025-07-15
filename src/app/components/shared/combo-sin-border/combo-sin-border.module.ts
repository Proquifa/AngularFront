import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { SearchBarModule } from "../search-bar/search-bar.module";
import { ComboSinBorderComponent } from "./combo-sin-border.component";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ComboSinBorderComponent
  ],
  exports:[
ComboSinBorderComponent  ]
})
export class ComboSinBorderComponentModule { }
