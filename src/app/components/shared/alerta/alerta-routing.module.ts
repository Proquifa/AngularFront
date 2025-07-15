import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {AlertaComponent} from './alerta.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: AlertaComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class AlertaRoutingModule { }
