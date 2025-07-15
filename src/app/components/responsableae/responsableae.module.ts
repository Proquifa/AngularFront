import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../pipes/accounting/accounting.module";
import { DropListModule } from "../shared/drop-list/drop-list.module";
import { RadioButtonModule } from "../shared/radio-button/radio-button.module";
import { NgModule } from "@angular/core";
import { ResponsableaeComponent } from "./responsableae.component";
import { ResponsableaeRoutingModule } from "./responsableae-routing.module";
import { MenuRolesComponent } from "./menu-roles/menu-roles.component";
import { BarraActividadesComponent } from "../shared/barra-actividades/barra-actividades.component";
import { PopUpGrabacionVideoComponent } from "../shared/pop-up-grabacion-video/pop-up-grabacion-video.component";
import { PopUpEstadisticasComponent } from "../shared/pop-up-estadisticas/pop-up-estadisticas.component";
import { GraficaPuntosComponent } from "../shared/grafica-puntos/grafica-puntos.component";
import { BotoneraDiasComponent } from "./componentes/botonera-dias/botonera-dias.component";
import { BarraProgresoComponent } from "./componentes/barra-progreso/barra-progreso.component";
import { InspeccionPorPrioridadComponent } from "./componentes/inspeccion-por-prioridad/inspeccion-por-prioridad.component";
import { VistaOperacionInspeccionComponent } from "./componentes/vista-operacion-inspeccion/vista-operacion-inspeccion.component";
import { InformacionPartidaComponent } from "./componentes/informacion-partida/informacion-partida.component";
import { DonaComponent } from "../shared/graficas/dona/dona.component";
import { IniciarInspeccionComponent } from "./componentes/iniciar-inspeccion/iniciar-inspeccion.component";
import { VistaEscanearPedimentoComponent } from "./componentes/vista-operacion-inspeccion/vista-escanear-pedimento/vista-escanear-pedimento.component";
import { VistaSeccionesInspeccionComponent } from "./componentes/vista-operacion-inspeccion/vista-secciones-inspeccion/vista-secciones-inspeccion.component";
import { VistaInspccionarPartidaComponent } from "./componentes/vista-operacion-inspeccion/vista-inspccionar-partida/vista-inspccionar-partida.component";
import { InspeccionNivelPiezaComponent } from "./componentes/inspeccion-nivel-pieza/inspeccion-nivel-pieza.component";
import { PopUpEditarLoteComponent } from "../shared/pop-up-editar-lote/pop-up-editar-lote.component";
import { FileUploadComponent } from "../shared/file-upload/file-upload.component";
import { ChartsModule } from "ng2-charts";
import { ComboFlechaVerdeModule } from "../shared/combo-flecha-verde/combo-flecha-verde.module";
import { VistaAlmacenarProductosComponent } from './componentes/vista-operacion-inspeccion/vista-almacenar-productos/vista-almacenar-productos.component';
import { CheckGrisPalomitaVerdeComponent } from '../shared/check-gris-palomita-verde/check-gris-palomita-verde.component';
import { RadioButtonSinLabelModule } from "../shared/radio-button-sin-label/radio-button-sin-label.module";
import { PopConfirmacionComponent } from './componentes/pop-ups/pop-confirmacion/pop-confirmacion.component';
import { PopInformativoComponent } from './componentes/pop-ups/pop-informativo/pop-informativo.component';
import { AlertaComponent } from "../shared/alerta/alerta.component";
import { PopFinalizarComponent } from './componentes/pop-ups/pop-finalizar/pop-finalizar.component';
import { DonutChartComponent } from "../shared/donut-chart/donut-chart.component";
import { ComboSinBorderComponentModule } from "../shared/combo-sin-border/combo-sin-border.module";
import { PopEscanearQrComponent } from './componentes/pop-ups/pop-escanear-qr/pop-escanear-qr.component';
import {DonutChartModule} from '../shared/donut-chart/donut-chart.module';
import {MenuSeccionRolesModule} from '../shared/menu-seccion-roles/menu-seccion-roles.module';
import {GraficaPuntosModule} from '../shared/grafica-puntos/grafica-puntos.module';
import {PopUpEstadisticasModule} from '../shared/pop-up-estadisticas/pop-up-estadisticas.module';
import {FileUploadModule} from '../shared/file-upload/file-upload.module';
import {AlertaModule} from '../shared/alerta/alerta.module';
import {CheckGrisPalomitaVerdeModule} from '../shared/check-gris-palomita-verde/check-gris-palomita-verde.module';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    ResponsableaeRoutingModule,
    PipeModule,
    DropListModule,
    RadioButtonModule,
    SharedModule,
    FormsModule,
    ChartsModule,
    DropListModule,
    ComboFlechaVerdeModule,
    RadioButtonSinLabelModule,
    ComboSinBorderComponentModule,
    DonutChartModule,
    MenuSeccionRolesModule,
    GraficaPuntosModule,
    PopUpEstadisticasModule,
    FileUploadModule,
    AlertaModule,
    CheckGrisPalomitaVerdeModule,
  ],
  declarations: [
    ResponsableaeComponent,
    MenuRolesComponent,
    BarraActividadesComponent,
    PopUpGrabacionVideoComponent,
    // PopUpEstadisticasComponent,
    // GraficaPuntosComponent,
    BotoneraDiasComponent,
    BarraProgresoComponent,
    InspeccionPorPrioridadComponent,
    VistaOperacionInspeccionComponent,
    InformacionPartidaComponent,
    // DonaComponent,
    IniciarInspeccionComponent,
    VistaEscanearPedimentoComponent,
    VistaSeccionesInspeccionComponent,
    VistaInspccionarPartidaComponent,
    InspeccionNivelPiezaComponent,
    PopUpEditarLoteComponent,
    // FileUploadComponent,
    VistaAlmacenarProductosComponent,
    // CheckGrisPalomitaVerdeComponent,
    PopConfirmacionComponent,
    PopInformativoComponent,
    // AlertaComponent,
    PopFinalizarComponent,
    // DonutChartComponent,
    PopEscanearQrComponent



  ],
  exports:[
    ResponsableaeComponent
  ]
})
export class ResponsableaeModule { }
