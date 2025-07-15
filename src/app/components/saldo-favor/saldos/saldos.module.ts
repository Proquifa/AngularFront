import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SaldosRoutingModule} from './saldos-routing.module';
import {SaldosComponent} from './saldos.component';
import {MenuSeccionRolesModule} from '../../shared/menu-seccion-roles/menu-seccion-roles.module';
import {ComboFlechaRellenaModule} from '../../shared/combo-flecha-rellena/combo-flecha-rellena.module';
import {FileUploadModule} from '../../shared/file-upload/file-upload.module';
import {DatePickerModule} from '../../shared/date-picker/date-picker.module';
import {BotoneraModule} from '../../shared/botonera/botonera.module';
import {GenerarSaldoModule} from './generar-saldo/generar-saldo.module';
import {PopUpSaldosModule} from '../pop-up-saldos/pop-up-saldos-module';
import {PipeModule} from '../../../pipes/accounting/accounting.module';

@NgModule({
  imports: [
   CommonModule,
   FormsModule,
   SaldosRoutingModule,
    MenuSeccionRolesModule,
    ComboFlechaRellenaModule,
    FileUploadModule,
    DatePickerModule,
    BotoneraModule,
    GenerarSaldoModule,
    PopUpSaldosModule,
    PipeModule
  ],
  declarations: [
    SaldosComponent
  ]
})

export class SaldosModule {
}
