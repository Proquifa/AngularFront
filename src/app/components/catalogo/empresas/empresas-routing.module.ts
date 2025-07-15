import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmpresasComponent } from './empresas.component';
import { CrearEmpresaComponent } from './crear-empresa/crear-empresa.component';
import { EditarEmpresaComponent } from './editar-empresa/editar-empresa.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: EmpresasComponent,
      },
      {
        path: 'crear',
        component: CrearEmpresaComponent,
      },
      {
        path: 'editar/:id',
        component: EditarEmpresaComponent,
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class EmpresasRoutingModule {
}
