import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RutaEnvioPorClienteRouting} from './ruta-envio-por-cliente-routing';
import {RutaEnvioPorClienteComponent} from './ruta-envio-por-cliente.component';
import {MenuSeccionModule} from '../../shared/menu-seccion/menu-seccion.module';
import {PopUpEstadisticasModule} from '../../shared/pop-up-estadisticas/pop-up-estadisticas.module';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { FinalizarEnvioClienteComponent } from './finalizar-envio-cliente/finalizar-envio-cliente.component';
import { BarraPrioridadesPorClienteComponent } from './barra-prioridades-por-cliente/barra-prioridades-por-cliente.component';
import {PipeModule} from '../../../pipes/accounting/accounting.module';
import { BarraProgresoPorClienteComponent } from './barra-progreso-por-cliente/barra-progreso-por-cliente.component';
import {FileUploadModule} from '../../shared/file-upload/file-upload.module';
import {ComboFlechaVerdeModule} from '../../shared/combo-flecha-verde/combo-flecha-verde.module';
import {AlertaModule} from '../../shared/alerta/alerta.module';
import { PopUpFinalizarComponent } from './pop-up-finalizar/pop-up-finalizar.component';
import {MenuSeccionRolesModule} from '../../shared/menu-seccion-roles/menu-seccion-roles.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RutaEnvioPorClienteRouting,
    MenuSeccionModule,
    PopUpEstadisticasModule,
    PipeModule,
    ReactiveFormsModule,
    FileUploadModule,
    ComboFlechaVerdeModule,
    AlertaModule,
    MenuSeccionRolesModule

  ],
  declarations: [
    RutaEnvioPorClienteComponent,
    ListaClientesComponent,
    FinalizarEnvioClienteComponent,
    BarraPrioridadesPorClienteComponent,
    BarraProgresoPorClienteComponent,
    PopUpFinalizarComponent
  ]
})
export class RutaEnvioPorClienteModule {
}
