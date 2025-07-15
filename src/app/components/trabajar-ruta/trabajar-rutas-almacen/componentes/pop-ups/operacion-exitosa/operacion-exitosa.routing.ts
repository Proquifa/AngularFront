import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {OperacionExitosaComponent} from './operacion-exitosa.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: OperacionExitosaComponent
      }

    ])
  ],
  exports: [
    RouterModule
  ]
})
export class OperacionExitosaRouting {
}
