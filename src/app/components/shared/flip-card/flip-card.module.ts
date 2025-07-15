import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlipCardComponent } from './flip-card.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        FlipCardComponent
    ],
    exports: [
        FlipCardComponent
    ]
})
export class DropListModule { }
