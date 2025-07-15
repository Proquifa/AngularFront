import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotaCreditoComponent } from './nota-credito.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
            path: '',
            component: NotaCreditoComponent
            }
        ])
        ],
        exports: [
        RouterModule
        ]
})
export class NotaCreditoRoutingModule {}
