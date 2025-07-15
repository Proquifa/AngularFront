import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FormularioReportarVisitaComponent } from "./formulario-reportar-visita.component";
import { FormularioReportarVisitaRoutingModule } from "./formulario-reportar-visita-routing.module";
import { BarraPasosModule } from "../../../shared/barra-pasos/barra-pasos.module";
import { CalificacionEstrellaModule } from "../../../shared/calificacion-estrella/calificacion-estrella.module";
import { FileUploadComponent } from "../../../shared/file-upload/file-upload.component";
import { DropListModule } from "../../../shared/drop-list/drop-list.module";
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule } from "@angular/material";
import { PipeModule } from "../../../../pipes/accounting/accounting.module";
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormularioReportarVisitaRoutingModule,
    BarraPasosModule,
    CalificacionEstrellaModule,
    DropListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    PipeModule,
    MatTooltipModule
  ],
  declarations: [FormularioReportarVisitaComponent, FileUploadComponent],
  exports: [FormularioReportarVisitaComponent]
})
export class FormularioReportarVisitaModule {}
