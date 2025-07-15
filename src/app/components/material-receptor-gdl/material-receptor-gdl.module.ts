import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { PipeModule } from "../../pipes/accounting/accounting.module";
import { SharedModule } from '../shared/shared.module';
import {MaterialReceptorGdlComponent} from './material-receptor-gdl.component';
import {MaterialReceptorGdlRoutingModule} from './material-receptor-gdl-routing.module';
import {MenuSeccionModule} from '../shared/menu-seccion/menu-seccion.module';
import {DonutChartModule} from '../shared/donut-chart/donut-chart.module';
import { VistaEscanearGuiaComponent } from './vista-escanear-guia/vista-escanear-guia.component';
import {MenuSeccionRolesModule} from '../shared/menu-seccion-roles/menu-seccion-roles.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    MaterialReceptorGdlRoutingModule,
    PipeModule,
    SharedModule,
    MenuSeccionModule,
    DonutChartModule,
    MenuSeccionRolesModule
  ],
  declarations: [
    MaterialReceptorGdlComponent,
    VistaEscanearGuiaComponent
  ]
})
export class MaterialReceptorGdlModule { }
