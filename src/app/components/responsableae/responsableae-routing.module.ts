import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResponsableaeComponent } from './responsableae.component';



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ResponsableaeComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ResponsableaeRoutingModule {
}