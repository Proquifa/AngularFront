import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ComboSinBorderComponentModule} from '../combo-sin-border/combo-sin-border.module';
import {VisorPdfComponent} from './visor-pdf.component';
import {VisorPdfRoutingModule} from './visor-pdf-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComboSinBorderComponentModule,
    VisorPdfRoutingModule
  ],
  declarations: [
    VisorPdfComponent
  ],
  exports: [
    VisorPdfComponent
  ]
})

export class VisorPdfModule {
}
