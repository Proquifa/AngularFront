import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReportecobrosComponent } from './reportecobros.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ReportecobrosComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ReporteCobrosRoutingModule {
}