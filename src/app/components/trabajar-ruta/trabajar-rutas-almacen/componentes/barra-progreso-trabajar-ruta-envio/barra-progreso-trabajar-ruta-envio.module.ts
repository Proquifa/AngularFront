import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";


import { PipeModule } from "../../../../../pipes/accounting/accounting.module";
import { BarraProgresoTrabajarRutaEnvioComponent } from "./barra-progreso-trabajar-ruta-envio.component";





@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
  
    PipeModule
  ],
  declarations: [
 
    BarraProgresoTrabajarRutaEnvioComponent,
  

  
  ],
  exports:[
    BarraProgresoTrabajarRutaEnvioComponent,

  ]
})
export class BarraProgresoTrabajarRutaEnvioModule { }