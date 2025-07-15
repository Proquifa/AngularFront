import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReportarVisitaComponent } from './reportar-visita.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ReportarVisitaComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class ReportarVisitaRoutingModule{}