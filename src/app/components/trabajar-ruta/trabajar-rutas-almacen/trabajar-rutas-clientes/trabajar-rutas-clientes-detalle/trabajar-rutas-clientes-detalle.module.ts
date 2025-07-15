import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { TrabajarRutasClientesDetalleComponent } from "./trabajar-rutas-clientes-detalle.component";
import { PipeModule } from "../../../../../pipes/accounting/accounting.module";
import {AlertaModule} from '../../../../shared/alerta/alerta.module';
import {OperacionExitosaModule} from '../../componentes/pop-ups/operacion-exitosa/operacion-exitosa.module';
import {FileUploadModule} from "../../../../shared/file-upload/file-upload.module";




@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    FileUploadModule,
    PipeModule,
    AlertaModule,
    OperacionExitosaModule
  ],
  declarations: [
   TrabajarRutasClientesDetalleComponent,
  ],
  exports:[
    TrabajarRutasClientesDetalleComponent,
  ]
})
export class TrabajarRutasClientesDetalleModule { }
