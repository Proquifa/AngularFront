import {NgModule} from '@angular/core';
import {MaterialStockComponent} from './material-stock.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MaterialStockRoutingModule} from './material-stock-routing.module';
import {MenuSeccionRolesModule} from '../shared/menu-seccion-roles/menu-seccion-roles.module';
import {BotoneraModule} from '../shared/botonera/botonera.module';
import {DropListSearchModule} from '../shared/drop-list-search/drop-list-search.module';
import {ComboFlechaRellenaModule} from '../shared/combo-flecha-rellena/combo-flecha-rellena.module';
import { PopUpNotificadoDesvincularComponent } from './pop-up-notificado-desvincular/pop-up-notificado-desvincular.component';
import {PipeModule} from '../../pipes/accounting/accounting.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialStockRoutingModule,
    MenuSeccionRolesModule,
    BotoneraModule,
    DropListSearchModule,
    ComboFlechaRellenaModule,
    PipeModule
  ],
  exports: [
    MaterialStockComponent
  ],
  declarations: [
    MaterialStockComponent,
    PopUpNotificadoDesvincularComponent
  ]
})
export class MaterialStockModule {
}
