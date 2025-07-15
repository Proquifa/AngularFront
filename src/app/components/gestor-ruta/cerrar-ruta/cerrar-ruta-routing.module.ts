import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CerrarRutaComponent } from "./cerrar-ruta.component";


@NgModule({
    imports:[
        RouterModule.forChild([
            {path:'',
        component:CerrarRutaComponent
    }
        ])
    ],
    
    exports:[
        RouterModule
    ]
})
export class CerrarRutaRoutingMoudle{}