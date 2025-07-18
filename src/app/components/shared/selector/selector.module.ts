import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SelectorComponent } from './selector.component';
import { SearchComponent } from '../search/search.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    SelectorComponent,
    SearchComponent
  ],
  exports: [
    SelectorComponent,
    SearchComponent
  ]
})
export class SelectorModule { }
