import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PipeModule } from '../../../pipes/accounting/accounting.module';
import { CuentasComponent } from './cuentas.component';
import { CuentasRoutingModule } from './cuentas-routing.module';
import { CatalogoService } from '../../../services/catalogo/catalogo.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        CuentasRoutingModule,
        PipeModule,
        SharedModule
    ],
    declarations: [
        CuentasComponent
    ],
    providers: [
        CatalogoService
    ],
    exports: [
        CuentasComponent
    ]
})
export class CuentasModule { }
