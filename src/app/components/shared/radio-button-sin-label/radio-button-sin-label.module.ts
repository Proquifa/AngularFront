import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RadioButtonSinLabelComponent } from "./radio-button-sin-label.component";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations:[
    RadioButtonSinLabelComponent
  ],
  exports:[
    RadioButtonSinLabelComponent
  ]
})
export class RadioButtonSinLabelModule { }
