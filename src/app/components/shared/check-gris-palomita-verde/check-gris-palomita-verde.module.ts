import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CheckGrisPalomitaVerdeComponent} from './check-gris-palomita-verde.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CheckGrisPalomitaVerdeComponent
  ],
  exports: [
    CheckGrisPalomitaVerdeComponent
  ]
})
export class CheckGrisPalomitaVerdeModule {
  
}
