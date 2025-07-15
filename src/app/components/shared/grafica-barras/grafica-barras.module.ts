import {NgModule} from '@angular/core';
import {GraficaBarrasComponent} from './grafica-barras.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GraficaBarrasComponent
  ],
  exports: [
    GraficaBarrasComponent
  ]
})
export class GraficaBarrasModule { }
