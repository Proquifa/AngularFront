import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AsignarRutaComponent } from "./asignar-ruta.component";


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AsignarRutaComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]

})

export class AsignarRutaRoutingModule { }