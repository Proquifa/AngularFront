import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CuentasComponent } from './cuentas.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: CuentasComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class CuentasRoutingModule { }
