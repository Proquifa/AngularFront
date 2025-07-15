import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BarraPasosComponent } from "./barra-pasos.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: BarraPasosComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class BarraPasosRoutingModule {}
