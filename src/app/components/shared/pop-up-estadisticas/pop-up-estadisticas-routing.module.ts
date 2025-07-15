import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PopUpEstadisticasComponent } from "./pop-up-estadisticas.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: PopUpEstadisticasComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class PopUpEstadisticasRoutingModule {}
