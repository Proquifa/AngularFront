import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CerrarRutaComponent } from "./cerrar-ruta.component";
import { MatButtonModule,MatCheckboxModule, MatCardModule, MatToolbarModule, MatIconModule, MatDividerModule } from '@angular/material';

import { CerrarRutaRoutingMoudle } from "./cerrar-ruta-routing.module";
import { CalificacionEstrellaModule } from "../../shared/calificacion-estrella/calificacion-estrella.module";

import { NguiMapModule} from '@ngui/map';
import {MenuSeccionModule} from '../../shared/menu-seccion/menu-seccion.module';
import {DonutChartModule} from '../../shared/donut-chart/donut-chart.module';
import {FormsModule} from '@angular/forms';

//La chida para el mapa

@NgModule({
    imports: [
        CerrarRutaRoutingMoudle,
        CommonModule,
        MatDividerModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,CalificacionEstrellaModule,
        MenuSeccionModule,
        DonutChartModule,
        FormsModule,
        NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyD_xQ31kAkk6Sjh3qmpx93q4ce9xJ80TSg'}) //Aqui y en el index.html
    ],
    declarations: [
        CerrarRutaComponent
    ],
    exports: [
        CerrarRutaComponent
    ],
    providers: []
})

export class CerrarRutaModule { }
