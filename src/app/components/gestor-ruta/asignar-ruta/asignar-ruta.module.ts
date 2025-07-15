import {NgModule} from "@angular/core";
import {AsignarRutaComponent} from "./asignar-ruta.component";
import {CommonModule} from "@angular/common";
import {AsignarRutaRoutingModule} from "./asignar-ruta-routing.module";
import {DragulaModule, DragulaService} from "ng2-dragula"


import {NguiMapModule} from '@ngui/map';//La chida para el mapa
import {MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule, MatDividerModule} from '@angular/material';
import {DonutChartModule} from '../../shared/donut-chart/donut-chart.module';
import {PipeModule} from "../../../pipes/accounting/accounting.module";
import {AlertaModule} from '../../shared/alerta/alerta.module';
import {MenuSeccionModule} from '../../shared/menu-seccion/menu-seccion.module';
import {MenuSeccionRolesModule} from '../../shared/menu-seccion-roles/menu-seccion-roles.module';


@NgModule({
  imports: [
    AsignarRutaRoutingModule,
    CommonModule,
    DragulaModule,
    PipeModule,
    DonutChartModule,
    MatDividerModule, MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyD_xQ31kAkk6Sjh3qmpx93q4ce9xJ80TSg'}), //Aqui y en el index.html,
    AlertaModule,
    MenuSeccionModule,
    MenuSeccionRolesModule
  ],
  declarations: [
    AsignarRutaComponent
  ],
  exports: [
    AsignarRutaComponent,

  ],
  providers: [
    DragulaService
  ]
})
export class AsignarRutaModule {
}
