import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GraficaPuntosComponent } from './grafica-puntos.component';


@NgModule({
    imports: [
      RouterModule.forChild([
        {
          path: '',
          component: GraficaPuntosComponent
        }
      ])
    ],
    exports: [
      RouterModule
    ]
  })

export class GraficaPuntosRoutingModule {
}