import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BotoneraComponent} from './botonera.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: BotoneraComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class BotoneraRoutingModule {}
