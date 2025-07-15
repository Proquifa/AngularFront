import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { DropListComponent } from "./drop-list.component";
import { SearchBarModule } from "../search-bar/search-bar.module";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchBarModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  declarations: [
    DropListComponent
  ],
  exports:[
    DropListComponent
  ]
})
export class DropListModule { }