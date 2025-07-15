import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {GenerarSaldoComponent} from './generar-saldo.component';
import {FileUploadModule} from '../../../shared/file-upload/file-upload.module';
import {DatePickerModule} from '../../../shared/date-picker/date-picker.module';
import {ComboFlechaRellenaModule} from '../../../shared/combo-flecha-rellena/combo-flecha-rellena.module';
import {PopUpSaldosModule} from '../../pop-up-saldos/pop-up-saldos-module';
import {DropListSearchModule} from '../../../shared/drop-list-search/drop-list-search.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    DatePickerModule,
    ComboFlechaRellenaModule,
    PopUpSaldosModule,
    DropListSearchModule
  ],
  declarations: [
    GenerarSaldoComponent
  ],
  exports: [
    GenerarSaldoComponent
  ]
})
export class GenerarSaldoModule {
}
