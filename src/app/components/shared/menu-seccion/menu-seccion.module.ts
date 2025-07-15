import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuSeccionComponent } from './menu-seccion.component';
import { MenuSeccionRoutingModule } from "./menu-seccion-routing.module";

@NgModule({
    imports: [
        CommonModule,
        MenuSeccionRoutingModule
    ],
    declarations: [
         MenuSeccionComponent
    ],
    exports: [
       MenuSeccionComponent
    ],
})

export class MenuSeccionModule { }

