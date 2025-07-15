import {TrabajarRutasComponent} from './trabajar-rutas.component';
import {HttpModule} from '@angular/http';
import {NgModule, Directive, Component} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RadioButtonSinLabelModule} from '../../shared/radio-button-sin-label/radio-button-sin-label.module';
import {ComboFlechaVerdeModule} from '../../shared/combo-flecha-verde/combo-flecha-verde.module';
import {DropListModule} from '../../shared/drop-list/drop-list.module';
import {ChartsModule} from 'ng2-charts';
import {SharedModule} from '../../shared/shared.module';
import {RadioButtonModule} from '../../shared/radio-button/radio-button.module';
import {PipeModule} from '../../../pipes/accounting/accounting.module';
import {TrabajarRutasRouting} from './trabajar-rutas-routing';
import {SearchBarModule} from '../../shared/search-bar/search-bar.module';
import {BuscadorOvaladoComponent} from '../../shared/buscador-ovalado/buscador-ovalado.component';
import {DonutChartModule} from '../../shared/donut-chart/donut-chart.module';
import {TrabajarRutasClientesModule} from './trabajar-rutas-clientes/trabajar-rutas-clientes.module';
import {PopUpEstadisticasModule} from '../../shared/pop-up-estadisticas/pop-up-estadisticas.module';
import {GraficaPuntosModule} from '../../shared/grafica-puntos/grafica-puntos.module';
import {BotoneraDiasModule} from '../../responsableae/componentes/botonera-dias/botonera-dias.module';
import {TrabajarRutasClientesDetalleModule} from './trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.module';
import {MenuSeccionComponent} from '../../shared/menu-seccion/menu-seccion.component';
import {MenuSeccionModule} from '../../shared/menu-seccion/menu-seccion.module';
import {AlertaModule} from '../../shared/alerta/alerta.module';
import { OperacionExitosaComponent } from './componentes/pop-ups/operacion-exitosa/operacion-exitosa.component';
import {MenuSeccionRolesModule} from '../../shared/menu-seccion-roles/menu-seccion-roles.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    PipeModule,
    TrabajarRutasRouting,
    DropListModule,
    RadioButtonModule,
    SharedModule,
    FormsModule,
    ChartsModule,
    DropListModule,
    ComboFlechaVerdeModule,
    RadioButtonSinLabelModule,
    SearchBarModule,
    DonutChartModule,
    PopUpEstadisticasModule,
    GraficaPuntosModule,
    BotoneraDiasModule,
    TrabajarRutasClientesModule,
    TrabajarRutasClientesDetalleModule,
    MenuSeccionModule,
    AlertaModule,
    MenuSeccionRolesModule

  ],
  declarations: [
    TrabajarRutasComponent,
    BuscadorOvaladoComponent
  ],
  exports: [TrabajarRutasComponent]
})
export class TrabajarRutasModule {
}
