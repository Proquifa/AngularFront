import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ControlarCobroComponent} from './controlar-cobro.component';
import {ControlarCobroRoutingModule} from './controlar-cobro-routing.module';
import {MenuSeccionModule} from '../shared/menu-seccion/menu-seccion.module';
import {DonutChartModule} from '../shared/donut-chart/donut-chart.module';
import { AtenderCobroDepositoComponent } from './atender-cobro-deposito/atender-cobro-deposito.component';
import {ComboFlechaVerdeModule} from '../shared/combo-flecha-verde/combo-flecha-verde.module';
import {BotoneraModule} from '../shared/botonera/botonera.module';
import { PoUpEditarMontoComponent } from './pop-up/po-up-editar-monto/po-up-editar-monto.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ControlarCobroRoutingModule,
    MenuSeccionModule,
    DonutChartModule,
    ComboFlechaVerdeModule,
    BotoneraModule
  ],
  declarations: [
    ControlarCobroComponent,
    AtenderCobroDepositoComponent,
    PoUpEditarMontoComponent
  ]
})

export class ControlarCobroModule {

}
