import { NgModule } from "@angular/core";
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {OredenesDeCompraComponent} from '../interfacturacion/componentes/oredenes-de-compra/oredenes-de-compra.component';
import {AsuntosRegulatoriosComponent} from './asuntos-regulatorios.component';
import {MenuSeccionModule} from '../shared/menu-seccion/menu-seccion.module';
import {DonutChartModule} from '../shared/donut-chart/donut-chart.module';
import {AsuntosRegulatoriosRoutingModule} from './asuntos-regulatorios-routing.module';
import { VistaCargaDocumentoComponent } from './vista-carga-documento/vista-carga-documento.component';
import {VisorPdfComponent} from '../shared/visor-pdf/visor-pdf.component';
import {VisorPdfModule} from '../shared/visor-pdf/visor-pdf.module';
import {ComboFlechaVerdeModule} from '../shared/combo-flecha-verde/combo-flecha-verde.module';
import {DatePickerModule} from '../shared/date-picker/date-picker.module';
import {MenuSeccionRolesModule} from '../shared/menu-seccion-roles/menu-seccion-roles.module';

@NgModule ({
  imports: [
    CommonModule,
    AsuntosRegulatoriosRoutingModule,
    FormsModule,
    MenuSeccionModule,
    DonutChartModule,
    VisorPdfModule,
    ComboFlechaVerdeModule,
    DatePickerModule,
    MenuSeccionRolesModule
  ],
  declarations: [
    AsuntosRegulatoriosComponent,
    // MenuSeccionComponent,
    // DonutChartComponent,
    OredenesDeCompraComponent,
    VistaCargaDocumentoComponent
  ],
  exports: [
    AsuntosRegulatoriosComponent
  ]
})
export class AsuntosRegulatoriosModule {

}
