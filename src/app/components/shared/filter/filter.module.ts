import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { SearchBarModule } from "../search-bar/search-bar.module";
import { FilterComponent } from "./filter.component";
import { RadioButtonModule } from "../radio-button/radio-button.module";
import { DropListModule } from "../drop-list/drop-list.module";
import { DatePickerModule } from "../date-picker/date-picker.module";


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchBarModule,


    
    DatePickerModule,
    DropListModule,
    FormsModule,
    RadioButtonModule,
  ],
  declarations: [
    FilterComponent
  ],
  exports:[
    FilterComponent
  ]
})
export class FilterModule { }
