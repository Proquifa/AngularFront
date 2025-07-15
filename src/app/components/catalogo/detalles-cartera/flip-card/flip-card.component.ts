import { Component, OnInit, Input, ContentChild, HostBinding } from '@angular/core'
import { Cliente } from '../../../../class/catalogo/cliente.class'

@Component({
  selector: 'flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {

  flipOnEvent: boolean = false;
  @Input() cliente: Cliente;

  constructor(){}

  ngOnInit(){

  }

  flipCard(value: boolean){
    this.flipOnEvent = value
  }

  calcularCambioEnProcentaje(valorAntiguo, valorNuevo){
    return ((valorNuevo - valorAntiguo) / valorAntiguo * 100)
  }
}
