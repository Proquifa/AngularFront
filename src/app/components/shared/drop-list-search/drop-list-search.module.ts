import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropListComponent} from '../drop-list/drop-list.component';
import {FormsModule} from '@angular/forms';
import {DropListSearchComponent} from './drop-list-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DropListSearchComponent
  ],
  exports: [
    DropListSearchComponent
  ]
})

export class DropListSearchModule {

}
