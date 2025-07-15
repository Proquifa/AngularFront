import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditarComponent } from './editar.component'

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: EditarComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class EditarRoutingModule {
}
