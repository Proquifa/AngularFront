import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ProductosDocFaltanteComponent} from './productos-doc-faltante.component';
import {ProductosDocFaltanteRoutingModule} from './productos-doc-faltante-routing.module';
import {DonutChartModule} from '../shared/donut-chart/donut-chart.module';
import {MenuSeccionModule} from '../shared/menu-seccion/menu-seccion.module';
import { CargarDocumentoComponent } from './cargar-documento/cargar-documento.component';
import {FileUploadModule} from '../shared/file-upload/file-upload.module';
import {AccountingPipe} from '../../pipes/accounting/accounting.pipe';
import {ComboFlechaVerdeModule} from '../shared/combo-flecha-verde/combo-flecha-verde.module';
import {ComboSinBorderComponentModule} from '../shared/combo-sin-border/combo-sin-border.module';
import {MenuSeccionRolesModule} from '../shared/menu-seccion-roles/menu-seccion-roles.module';

@NgModule({
  imports : [
    CommonModule,
    FormsModule,
    SharedModule,
    ProductosDocFaltanteRoutingModule,
    DonutChartModule,
    MenuSeccionModule,
    FileUploadModule,
    ComboFlechaVerdeModule,
    ComboSinBorderComponentModule,
    MenuSeccionRolesModule
  ],
  declarations : [
    ProductosDocFaltanteComponent,
    CargarDocumentoComponent
  ]
})

export class ProductosDocFaltanteModule {}
