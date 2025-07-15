import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CobrosComponent } from './cobros.component';
import { GraficasCobrosComponent } from './graficas-cobros/graficas-cobros.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CobrosComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CobrosRoutingModule {
}