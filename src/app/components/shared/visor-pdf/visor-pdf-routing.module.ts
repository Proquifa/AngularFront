import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {VisorPdfComponent} from './visor-pdf.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: VisorPdfComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class VisorPdfRoutingModule {
}
