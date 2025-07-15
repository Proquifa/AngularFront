import {NgModule} from '@angular/core';
import {ConsolaProductosDestruccionComponent} from './consola-productos-destruccion.component';
import {PipeModule} from '../../pipes/accounting/accounting.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ConsolaProductosDestruccionRoutingModule} from './consola-productos-destruccion-routing.module';
import {MenuSeccionRolesModule} from '../shared/menu-seccion-roles/menu-seccion-roles.module';
import {DropListSearchModule} from '../shared/drop-list-search/drop-list-search.module';
import {ComboFlechaRellenaModule} from '../shared/combo-flecha-rellena/combo-flecha-rellena.module';
import {CheckGrisPalomitaVerdeModule} from '../shared/check-gris-palomita-verde/check-gris-palomita-verde.module';
import { PopUpDestruccioonComponent } from './pop-up-destruccioon/pop-up-destruccioon.component';
import {FileUploadModule} from '../shared/file-upload/file-upload.module';

@NgModule({
  imports: [
    ConsolaProductosDestruccionRoutingModule,
    CommonModule,
    FormsModule,
    PipeModule,
    MenuSeccionRolesModule,
    DropListSearchModule,
    ComboFlechaRellenaModule,
    CheckGrisPalomitaVerdeModule,
    FileUploadModule
  ],
  exports: [
    ConsolaProductosDestruccionComponent
  ],
  declarations: [
    ConsolaProductosDestruccionComponent,
    PopUpDestruccioonComponent
  ]
})
export class ConsolaProductosDestruccionModule {

}
