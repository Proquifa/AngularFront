import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ComboSinBorderComponentModule} from '../combo-sin-border/combo-sin-border.module';
import {FileUploadRoutingModule} from './file-upload-routing.module';
import {FileUploadComponent} from './file-upload.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComboSinBorderComponentModule,
    FileUploadRoutingModule
  ],
  declarations: [
    FileUploadComponent
  ],
  exports: [
    FileUploadComponent
  ]
})

export class FileUploadModule {
}
