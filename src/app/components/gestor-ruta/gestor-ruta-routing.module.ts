import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {GestorRutaComponent} from './gestor-ruta.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: GestorRutaComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class GestorRutaRoutingModule { }
