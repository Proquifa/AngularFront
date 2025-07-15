import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import {OperacionExitosaComponent} from './operacion-exitosa.component';
import {OperacionExitosaRouting} from './operacion-exitosa.routing';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    OperacionExitosaRouting
  ],
  declarations: [
    OperacionExitosaComponent


  ],
  exports: [
    OperacionExitosaComponent,

  ]
})
export class OperacionExitosaModule { }
