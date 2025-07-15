import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormularioReportarVisitaComponent } from './formulario-reportar-visita.component';

@NgModule({
    imports: [
      RouterModule.forChild([
        {
          path: '',
          component: FormularioReportarVisitaComponent
        }
      ])
    ],
    exports: [
      RouterModule
    ]
  })

export class FormularioReportarVisitaRoutingModule {
}