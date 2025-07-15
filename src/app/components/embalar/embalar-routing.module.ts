import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmbalarComponent } from "./embalar.component";



@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: EmbalarComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class EmbalarRoutingModule {
}
