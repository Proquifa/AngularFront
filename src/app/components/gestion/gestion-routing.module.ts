import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GestionComponent } from './gestion.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: GestionComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class GestionRoutingModule {
}