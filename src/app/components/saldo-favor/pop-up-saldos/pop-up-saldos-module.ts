import {NgModule} from '@angular/core';
import {PopUpSaldosComponent} from './pop-up-saldos.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PopUpSaldosComponent
  ],
  exports: [
    PopUpSaldosComponent
  ]
})

export class PopUpSaldosModule {

}
