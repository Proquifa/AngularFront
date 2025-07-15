import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../../../pipes/accounting/accounting.module";
import { TrabajarRutasClientesRouting } from "./trabajar-rutas-clientes.routing";
import { TrabajarRutasClientesComponent } from "./trabajar-rutas-clientes.component";
import { TrabajarRutasClientesDetalleComponent } from "./trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.component";
import { BarraProgresoTrabajarRutaEnvioComponent } from "../componentes/barra-progreso-trabajar-ruta-envio/barra-progreso-trabajar-ruta-envio.component";
import { TrabajarRutasClientesDetalleModule } from "./trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.module";


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    TrabajarRutasClientesRouting,
    PipeModule,
    TrabajarRutasClientesDetalleModule,
  ],
  declarations: [
    TrabajarRutasClientesComponent,
   // TrabajarRutasClientesDetalleComponent,

   // BarraProgresoTrabajarRutaEnvioComponent

  ],
  exports:[
    TrabajarRutasClientesComponent,

  ]
})
export class TrabajarRutasClientesModule { }
