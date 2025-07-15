import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BotoneraComponent} from './botonera.component';
import {BotoneraRoutingModule} from './botonera-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BotoneraRoutingModule
  ],
  declarations: [
    BotoneraComponent
  ],
  exports: [
    BotoneraComponent
  ]
})

export class BotoneraModule {}
