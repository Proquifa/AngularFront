import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PolizasComponent } from './polizas.component';
import { AgregarPolizaComponent } from './agregar-poliza/agregar-poliza.component';
import { EditarPolizaComponent } from './editar-poliza/editar-poliza.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: PolizasComponent },
      { path: 'agregar', component: AgregarPolizaComponent },
      { path: 'editar/:id', component: EditarPolizaComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PolizasRoutingModule { }
