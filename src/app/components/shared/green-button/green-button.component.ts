import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'pn-green-button',
  templateUrl: './green-button.component.html',
  styleUrls: ['./green-button.component.scss']
})
export class GreenButtonComponent {
  @Input() text: string;
  @Input() btnClasses: string;
  @Output() emitAction: EventEmitter<any> = new EventEmitter<any>();

  constructor(){}

  clicked(){
    this.emitAction.emit();
  }
}
