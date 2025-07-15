import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TrabajadoresComponent } from './trabajadores.component';
import { CrearTrabajadorComponent } from './crear-trabajador/crear-trabajador.component';
import { EditarTrabajadorComponent } from './editar-trabajador/editar-trabajador.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: ':id',
        component: TrabajadoresComponent,
      },
      {
        path: 'crear/nuevo',
        component: CrearTrabajadorComponent
      },
      {
        path: 'editar/:idTrabajador',
        component: EditarTrabajadorComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TrabajadoresRoutingModule {
}
