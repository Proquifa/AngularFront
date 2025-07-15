import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LlamadasComponent } from './llamadas.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
            path: '',
            component: LlamadasComponent
            }
        ])
        ],
        exports: [
        RouterModule
        ]
})
export class LlamadasRoutingModule {}
