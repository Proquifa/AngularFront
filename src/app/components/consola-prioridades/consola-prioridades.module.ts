import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MenuSeccionModule} from '../shared/menu-seccion/menu-seccion.module';
import {ConsolaPrioridadesComponent} from './consola-prioridades.component';
import {ConsolaPrioridadesRoutingModule} from './consola-prioridades-routing.module';
import {BotoneraModule} from '../shared/botonera/botonera.module';
import {MenuSeccionRolesModule} from '../shared/menu-seccion-roles/menu-seccion-roles.module';
import { PopUpRestriccionComponent } from './pop-up-restriccion/pop-up-restriccion.component';
import { PopUpRestriccionEntregaComponent } from './pop-up-restriccion-entrega/pop-up-restriccion-entrega.component';
import { PopUpTipoPagoComponent } from './pop-up-tipo-pago/pop-up-tipo-pago.component';

@NgModule({
  imports: [
    ConsolaPrioridadesRoutingModule,
    CommonModule,
    FormsModule,
    MenuSeccionModule,
    BotoneraModule,
    MenuSeccionRolesModule
  ],
  declarations: [
    ConsolaPrioridadesComponent,
    PopUpRestriccionComponent,
    PopUpRestriccionEntregaComponent,
    PopUpTipoPagoComponent
  ],
  exports: [
    ConsolaPrioridadesComponent
  ]
})

export class ConsolaPrioridadesModule {

}
