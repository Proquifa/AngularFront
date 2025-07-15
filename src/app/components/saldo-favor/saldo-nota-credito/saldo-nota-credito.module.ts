import {NgModule} from '@angular/core';
import {SaldoNotaCreditoComponent} from './saldo-nota-credito.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SaldoNotaCreditoRoutingModule} from './saldo-nota-credito-routing.module';
import {PopUpSaldosModule} from '../pop-up-saldos/pop-up-saldos-module';
import {GenerarSaldoModule} from '../saldos/generar-saldo/generar-saldo.module';
import {ComboFlechaRellenaModule} from '../../shared/combo-flecha-rellena/combo-flecha-rellena.module';
import {BotoneraModule} from '../../shared/botonera/botonera.module';
import {MenuSeccionRolesModule} from '../../shared/menu-seccion-roles/menu-seccion-roles.module';
import {PipeModule} from '../../../pipes/accounting/accounting.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SaldoNotaCreditoRoutingModule,
    PopUpSaldosModule,
    GenerarSaldoModule,
    ComboFlechaRellenaModule,
    BotoneraModule,
    MenuSeccionRolesModule,
    PipeModule
  ],
  declarations: [
    SaldoNotaCreditoComponent
  ]
})

export class SaldoNotaCreditoModule {
}
