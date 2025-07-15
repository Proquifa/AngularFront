import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CalificacionEstrellaRoutingModule } from './calificacion-estrella-routing.module';
import { CalificacionEstrellaComponent } from './calificacion-estrella.component';

@NgModule({
    imports: [
        CommonModule,
        CalificacionEstrellaRoutingModule
    ],
    declarations: [
        CalificacionEstrellaComponent
    ],
    exports:[
        CalificacionEstrellaComponent
    ] 
})

export class CalificacionEstrellaModule { }