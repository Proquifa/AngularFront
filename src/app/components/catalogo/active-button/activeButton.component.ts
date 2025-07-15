import { Component, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'active-button',
  templateUrl: './activeButton.component.html',
  styleUrls: ['./activeButton.component.scss']
})

export class ActiveButtonComponent implements OnInit {

  @Output() emitAction: EventEmitter<any> = new EventEmitter<any>();

  constructor(){}

  ngOnInit(){

  }

  onClick(active: number){
    console.log(`Diste click para ${active ? 'habilitar': 'deshabilitar'}`)
    this.emitAction.emit(active)
  }
}
