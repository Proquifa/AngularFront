import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RadioButtonComponent } from "./radio-button.component";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class RadioButtonModule { }
