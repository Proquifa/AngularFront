import {NgModule} from '@angular/core';
import {ComboFlechaRellenaComponent} from './combo-flecha-rellena.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  declarations: [
    ComboFlechaRellenaComponent
  ],
  exports: [
    ComboFlechaRellenaComponent
  ]
})

export class ComboFlechaRellenaModule {
}
