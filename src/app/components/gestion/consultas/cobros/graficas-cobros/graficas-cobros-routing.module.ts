import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GraficasCobrosComponent } from './graficas-cobros.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: GraficasCobrosComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class GraficasCobrosRoutingModule {
} 