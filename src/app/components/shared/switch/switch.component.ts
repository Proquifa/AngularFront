import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'pn-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  @Input() leftOptionText: string = 'rojo'
  @Input() rightOptionText: string = 'azul'
  @Output() optionSelected: EventEmitter<any> = new EventEmitter<any>();
  @Input() leftOptionSelected: boolean = true;

  constructor(){

  }

  toggleSwitch(value:any){
    this.leftOptionSelected = !value;
    console.log(this.leftOptionSelected)
    this.optionSelected.emit(this.leftOptionSelected);
  }
}
