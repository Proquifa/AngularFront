import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TrabajarRutasEnvioInformacionComponent } from "./trabajar-rutas-envio-informacion.component";
import { TrabajarRutasEnvioModule } from "../trabajar-rutas-envio.module";
import { TrabajarRutasEnvioInformacionRouting } from "./trabajar-rutas-envio-informacion-routing.module";
import { BarraProgresoTrabajarRutaEnvioComponent } from "../../componentes/barra-progreso-trabajar-ruta-envio/barra-progreso-trabajar-ruta-envio.component";
import { BarraPrioridadesTrabajarRutaEnvioComponent } from "../../componentes/barra-prioridades-trabajar-ruta-envio/barra-prioridades-trabajar-ruta-envio.component";
import { FormsModule } from "@angular/forms";
import { FileUploadComponent } from "../../../../shared/file-upload/file-upload.component";
import { BarraPrioridadesTrabajarRutaEnvioModule } from "../../componentes/barra-prioridades-trabajar-ruta-envio/barra-prioridades-trabajar-ruta-envio.module";
import { BarraProgresoTrabajarRutaEnvioModule } from "../../componentes/barra-progreso-trabajar-ruta-envio/barra-progreso-trabajar-ruta-envio.module";

import { PopUpLocalizarNumeroRastreoComponent } from "../../../pop-up-localizar-numero-rastreo/pop-up-localizar-numero-rastreo.component";
import { FileUploadEnvioComponent } from "../../../file-upload-envio/file-upload-envio.component";
import {AlertaModule} from '../../../../shared/alerta/alerta.module';
import {OperacionExitosaComponent} from '../../componentes/pop-ups/operacion-exitosa/operacion-exitosa.component';
import {OperacionExitosaModule} from '../../componentes/pop-ups/operacion-exitosa/operacion-exitosa.module';
import {ComboFlechaVerdeModule} from '../../../../shared/combo-flecha-verde/combo-flecha-verde.module';

@NgModule({
  imports: [
    CommonModule,
    TrabajarRutasEnvioInformacionRouting,
    FormsModule,
    TrabajarRutasEnvioModule,
    BarraPrioridadesTrabajarRutaEnvioModule,
    BarraProgresoTrabajarRutaEnvioModule,
    AlertaModule,
    OperacionExitosaModule,
    ComboFlechaVerdeModule
  ],
  declarations: [
    TrabajarRutasEnvioInformacionComponent,
    PopUpLocalizarNumeroRastreoComponent,
    // BarraProgresoTrabajarRutaEnvioComponent,
    //BarraPrioridadesTrabajarRutaEnvioComponent,
    //FileUploadComponent,
    FileUploadEnvioComponent,
    FileUploadComponent
  ],
  exports: [TrabajarRutasEnvioInformacionComponent]
})
export class TrabajarRutasEnvioInformacionModule {}
