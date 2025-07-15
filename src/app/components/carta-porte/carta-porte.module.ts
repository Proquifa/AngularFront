import {NgModule} from "@angular/core";
import {CartaPorteComponent} from "./carta-porte.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {CartaPorteRoutingModule} from "./carta-porte-routing.module";
import {MenuSeccionRolesModule} from "../shared/menu-seccion-roles/menu-seccion-roles.module";
import {DropListModule} from "../shared/drop-list/drop-list.module";
import {HttpModule} from "@angular/http";
import {ComboFlechaRellenaModule} from "../shared/combo-flecha-rellena/combo-flecha-rellena.module";
import {VisorPdfModule} from "../shared/visor-pdf/visor-pdf.module";
import {AlertaModule} from "../shared/alerta/alerta.module";

@NgModule({
  imports: [
    CartaPorteRoutingModule,
    CommonModule,
    FormsModule,
    HttpModule,
    MenuSeccionRolesModule,
    DropListModule,
    ComboFlechaRellenaModule,
    VisorPdfModule,
    AlertaModule
  ],
  exports:[CartaPorteComponent],
  declarations: [CartaPorteComponent]
})
export class CartaPorteModule {

}
