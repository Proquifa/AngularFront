import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MenuSeccionComponent } from './menu-seccion.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: MenuSeccionComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class MenuSeccionRoutingModule {}
