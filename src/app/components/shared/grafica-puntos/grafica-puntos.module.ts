import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GraficaPuntosRoutingModule} from './grafica-puntos-routing.module';
import {GraficaPuntosComponent} from './grafica-puntos.component';
import {FormsModule} from '@angular/forms';
import {ComboSinBorderComponentModule} from '../combo-sin-border/combo-sin-border.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GraficaPuntosRoutingModule,
    ComboSinBorderComponentModule,
  ],
  declarations: [
    GraficaPuntosComponent
  ],
  exports: [
    GraficaPuntosComponent
  ]
})

export class GraficaPuntosModule {
}
