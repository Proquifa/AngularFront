import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../../../pipes/accounting/accounting.module";
import { TrabajarRutasEnvioComponent } from "./trabajar-rutas-envio.component";
import { TrabajarRutasEnvioRoutingModule } from "./trabajar-rutas-envio.routing";
import { BarraProgresoTrabajarRutaEnvioComponent } from "../componentes/barra-progreso-trabajar-ruta-envio/barra-progreso-trabajar-ruta-envio.component";
import { BarraPrioridadesTrabajarRutaEnvioComponent } from "../componentes/barra-prioridades-trabajar-ruta-envio/barra-prioridades-trabajar-ruta-envio.component";
import { TrabajarRutasEnvioInformacionComponent } from "./trabajar-rutas-envio-informacion/trabajar-rutas-envio-informacion.component";
import { DonutChartModule } from "../../../shared/donut-chart/donut-chart.module";
import { PopUpEstadisticasModule } from "../../../shared/pop-up-estadisticas/pop-up-estadisticas.module";
import { GraficaPuntosModule } from "../../../shared/grafica-puntos/grafica-puntos.module";
import { BotoneraDiasModule } from "../../../responsableae/componentes/botonera-dias/botonera-dias.module";
import { FileUploadComponent } from "../../../shared/file-upload/file-upload.component";
import { PopUpLocalizarNumeroRastreoComponent } from "../../pop-up-localizar-numero-rastreo/pop-up-localizar-numero-rastreo.component";
import { FileUploadEnvioComponent } from "../../file-upload-envio/file-upload-envio.component";
import { SharedModule } from '../../../shared/shared.module';
import {FileUploadModule} from '../../../shared/file-upload/file-upload.module';
import {MenuSeccionModule} from '../../../shared/menu-seccion/menu-seccion.module';
import {AlertaModule} from '../../../shared/alerta/alerta.module';
import {OperacionExitosaModule} from '../componentes/pop-ups/operacion-exitosa/operacion-exitosa.module';
import {ComboFlechaVerdeModule} from '../../../shared/combo-flecha-verde/combo-flecha-verde.module';
import {MenuSeccionRolesModule} from '../../../shared/menu-seccion-roles/menu-seccion-roles.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    TrabajarRutasEnvioRoutingModule,
    PipeModule,
    FormsModule,
    DonutChartModule,
    PopUpEstadisticasModule,
    GraficaPuntosModule,
    BotoneraDiasModule,
    SharedModule,
    FileUploadModule,
    MenuSeccionModule,
    AlertaModule,
    OperacionExitosaModule,
    ComboFlechaVerdeModule,
    MenuSeccionRolesModule
  ],
  declarations: [
    TrabajarRutasEnvioComponent,
    TrabajarRutasEnvioInformacionComponent,
    BarraProgresoTrabajarRutaEnvioComponent,
    BarraPrioridadesTrabajarRutaEnvioComponent,
    FileUploadEnvioComponent,
    // FileUploadComponent,
    PopUpLocalizarNumeroRastreoComponent

  ],

  exports: [TrabajarRutasEnvioComponent]
})
export class TrabajarRutasEnvioModule {}
