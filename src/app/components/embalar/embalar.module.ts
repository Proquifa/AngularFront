import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../pipes/accounting/accounting.module";
import { NgModule } from "@angular/core";
import { EmbalarComponent } from "./embalar.component";
import { EmbalarRoutingModule } from "./embalar-routing.module";
import { ChartsModule } from "ng2-charts";
import { DropListModule } from "../shared/drop-list/drop-list.module";
import { ComboFlechaVerdeModule } from "../shared/combo-flecha-verde/combo-flecha-verde.module";
import { RadioButtonSinLabelModule } from "../shared/radio-button-sin-label/radio-button-sin-label.module";
import { GraficasEmbalajeComponent } from './componentes/graficas-embalaje/graficas-embalaje.component';
import { VistaOperacionEmbalajeComponent } from './componentes/vista-operacion-embalaje/vista-operacion-embalaje.component';
import { InformacionOeComponent } from './componentes/informacion-oe/informacion-oe.component';
import { BarraProgresoEmbalajeComponent } from './componentes/barra-progreso-embalaje/barra-progreso-embalaje.component';
import { BarraPrioridadesEmbalajeComponent } from './componentes/barra-prioridades-embalaje/barra-prioridades-embalaje.component';
import { VistaColectarElementosComponent } from './componentes/vista-colectar-elementos/vista-colectar-elementos.component';
import { VistaEmbalarProductosComponent } from './componentes/vista-embalar-productos/vista-embalar-productos.component';
import { VistaGenerarPackingListComponent } from './componentes/vista-generar-packing-list/vista-generar-packing-list.component';
import { BotoneraDiasEmbalajeComponent } from './componentes/botonera-dias-embalaje/botonera-dias-embalaje.component';
import { ProductosPorEmbalarComponent } from './componentes/productos-por-embalar/productos-por-embalar.component';
import { EscanearCodigoEmbalajeComponent } from './componentes/escanear-codigo-embalaje/escanear-codigo-embalaje.component';
import { PackingListEmbalajeComponent } from './componentes/packing-list-embalaje/packing-list-embalaje.component';
import { FdEmbalajeComponent } from './componentes/fd-embalaje/fd-embalaje.component';
import { BarraProgresoDecrementalComponent } from './../../components/shared/barra-progreso-decremental/barra-progreso-decremental.component';
import { EscanearCodigoPackingListComponent } from './componentes/escanear-codigo-packing-list/escanear-codigo-packing-list.component';
import { BolsaContenedoraPackingListComponent } from './componentes/bolsa-contenedora-packing-list/bolsa-contenedora-packing-list.component';
import { DetallePaqueteComponent } from './componentes/detalle-paquete/detalle-paquete.component';
import { CheckGrisPalomitaVerdeComponent } from '../shared/check-gris-palomita-verde/check-gris-palomita-verde.component';
import { VisorPdfComponent } from './../../components/shared/visor-pdf/visor-pdf.component';
import { MenuSeccionComponent} from '../shared/menu-seccion/menu-seccion.component';
import { BarraPasosComponent} from '../shared/barra-pasos/barra-pasos.component';
import {DonutChartComponent} from '../shared/donut-chart/donut-chart.component';
import {DonutChartModule} from '../shared/donut-chart/donut-chart.module';
import { ComboSinBorderComponentModule } from '../shared/combo-sin-border/combo-sin-border.module';
import { PopUpInformativoComponent } from './componentes/pop-up-embalar/pop-up-informativo/pop-up-informativo.component';
import { PopUpGenerarEtiquetaEstadoComponent } from './componentes/pop-up-embalar/pop-up-generar-etiqueta-estado/pop-up-generar-etiqueta-estado.component';
import { PopUpScanearComponent } from './componentes/pop-up-embalar/pop-up-scanear/pop-up-scanear.component';
import { PopUpPakingListComponent } from './componentes/pop-up-embalar/pop-up-paking-list/pop-up-paking-list.component';
import { PopUpRegresarVistPrincipalComponent } from './componentes/pop-up-embalar/pop-up-regresar-vist-principal/pop-up-regresar-vist-principal.component';
import { PopUpExitoComponent } from './componentes/pop-up-embalar/pop-up-exito/pop-up-exito.component';
import { ImpresionConfirmadaComponent } from './componentes/pop-up-embalar/impresion-confirmada/impresion-confirmada.component';
import { PopUpTimbradoComponent } from './componentes/pop-up-embalar/pop-up-timbrado/pop-up-timbrado.component';
import {GraficaPuntosModule} from '../shared/grafica-puntos/grafica-puntos.module';
import {PopUpEstadisticasModule} from '../shared/pop-up-estadisticas/pop-up-estadisticas.module';
import {MenuSeccionModule} from '../shared/menu-seccion/menu-seccion.module';
import {FileUploadModule} from '../shared/file-upload/file-upload.module';
import {AlertaModule} from '../shared/alerta/alerta.module';
import { PopUpFacturacionComponent } from './componentes/pop-up-embalar/pop-up-facturacion/pop-up-facturacion.component';
import { PopUpCorreoComponent } from './componentes/pop-up-embalar/pop-up-correo/pop-up-correo.component';
import { RutaEnvioComponent } from './componentes/ruta-envio/ruta-envio.component';
import {MenuSeccionRolesModule} from '../shared/menu-seccion-roles/menu-seccion-roles.module';
import {CheckGrisPalomitaVerdeModule} from '../shared/check-gris-palomita-verde/check-gris-palomita-verde.module';
import { PopUpMedidasComponent } from './componentes/pop-up-embalar/pop-up-medidas/pop-up-medidas.component';
// import { MenuSeccionComponent } from "../shared/menu-seccion/menu-seccion.component";



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    PipeModule,
    SharedModule,
    EmbalarRoutingModule,
    FormsModule,
    ChartsModule,
    DropListModule,
    ComboFlechaVerdeModule,
    RadioButtonSinLabelModule,
    ComboSinBorderComponentModule,
    DonutChartModule,
    PopUpEstadisticasModule,
    MenuSeccionModule,
    FileUploadModule,
    AlertaModule,
    MenuSeccionRolesModule,
    CheckGrisPalomitaVerdeModule
  ],
  declarations: [
    EmbalarComponent,
    // FileUploadComponent,
    // AlertaComponent,
    GraficasEmbalajeComponent,
    VistaOperacionEmbalajeComponent,
    InformacionOeComponent,
    BarraProgresoEmbalajeComponent,
    BarraPrioridadesEmbalajeComponent,
    // BarraActividadesComponent,
    VistaColectarElementosComponent,
    VistaEmbalarProductosComponent,
    VistaGenerarPackingListComponent,
    BotoneraDiasEmbalajeComponent,
    ProductosPorEmbalarComponent,
    EscanearCodigoEmbalajeComponent,
    PackingListEmbalajeComponent,
    FdEmbalajeComponent,
    BarraProgresoDecrementalComponent,
    EscanearCodigoPackingListComponent,
    BolsaContenedoraPackingListComponent,
    DetallePaqueteComponent,
    // CheckGrisPalomitaVerdeComponent,
    VisorPdfComponent,
    // MenuSeccionComponent,
    BarraPasosComponent,
    PopUpInformativoComponent,
    PopUpGenerarEtiquetaEstadoComponent,
    PopUpScanearComponent,
    PopUpPakingListComponent,
    PopUpRegresarVistPrincipalComponent,
    PopUpExitoComponent,
    ImpresionConfirmadaComponent,
    PopUpTimbradoComponent,
    PopUpFacturacionComponent,
    PopUpCorreoComponent,
    RutaEnvioComponent,
    PopUpMedidasComponent,
  ],
  exports: [
    EmbalarComponent
  ]
})

export class EmbalarModule { }
