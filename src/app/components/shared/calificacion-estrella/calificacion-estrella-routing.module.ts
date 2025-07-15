import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CalificacionEstrellaComponent } from './calificacion-estrella.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: CalificacionEstrellaComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class CalificacionEstrellaRoutingModule {}
