import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pn-pop-up-restriccion-entrega',
  templateUrl: './pop-up-restriccion-entrega.component.html',
  styleUrls: ['./pop-up-restriccion-entrega.component.scss']
})
export class PopUpRestriccionEntregaComponent implements OnInit {
@Input() cliente: string;
@Output() cerrarPop: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  cerrar(valor) {
    this.cerrarPop.emit(valor);
  }
}
