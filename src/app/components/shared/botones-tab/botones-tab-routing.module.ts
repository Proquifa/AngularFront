import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BotonesTabComponent } from './botones-tab.component';


@NgModule({
    imports: [
      RouterModule.forChild([
        {
          path: '',
          component: BotonesTabComponent
        }
      ])
    ],
    exports: [
      RouterModule
    ]
  })

export class BotonesTabRoutingModule {
}