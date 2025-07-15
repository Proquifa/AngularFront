import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GraficasComponent } from './graficas-cobros.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: GraficasComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class GraficasCobrosRoutingModule {
} 