import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TarjetaMenuComponent } from "./tarjeta-menu/tarjeta-menu.component";
import { GreenButtonComponent } from "./green-button/green-button.component";
import { SwitchComponent } from "./switch/switch.component";
import { HeaderComponent } from './header-breadcrumb/header-bc.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { FilterMenuComponent } from './filter-menu/filterMenu.component';
import { GrabacionVideoComponent } from './grabacion-video/grabacion-video.component';
import { TwoFaceCardComponente } from './two-face-card/two-face-card.component';
import { FlipDirective } from '../../directives/flip.directive';
import { ClientCardComponent } from './client-card/client-card.component';
import {DonaComponent} from './graficas/dona/dona.component';
import { BotoneraComponent } from './botonera/botonera.component';
import { SearchComponent } from './search/search.component';
import { SelectorComponent } from './selector/selector.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
 imports:      [ CommonModule, FormsModule ],
 declarations: [
   TarjetaMenuComponent,
   GreenButtonComponent,
   SwitchComponent,
   HeaderComponent,
   RadioButtonComponent,
   FilterMenuComponent,
   GrabacionVideoComponent,
   TwoFaceCardComponente,
   FlipDirective,
   ClientCardComponent,
   SearchComponent,
   SelectorComponent,
   FlipCardComponent
 ],
  exports: [ TarjetaMenuComponent,
    CommonModule,
    GreenButtonComponent,
    SwitchComponent,
    HeaderComponent,
    RadioButtonComponent,
    FilterMenuComponent,
    GrabacionVideoComponent,
    TwoFaceCardComponente,
    FlipDirective,
    ClientCardComponent,
    SearchComponent,
    SelectorComponent,
    FlipCardComponent,

  ]
})
export class SharedModule { }
