import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ClientCardComponent } from "./client-card.component";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ClientCardComponent
  ],
  exports: [
    ClientCardComponent
  ]
})
export class ClientCardModule { }
