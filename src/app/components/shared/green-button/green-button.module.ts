import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { GreenButtonComponent } from "./green-button.component";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    GreenButtonComponent
  ],
  exports: [
    GreenButtonComponent
  ]
})
export class GreenButtonModule { }
