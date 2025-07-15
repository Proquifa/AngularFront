import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pn-pop-up-restriccion',
  templateUrl: './pop-up-restriccion.component.html',
  styleUrls: ['./pop-up-restriccion.component.scss']
})
export class PopUpRestriccionComponent implements OnInit {
  @Input() empresa: string;
  @Output() cerrarPop: EventEmitter<any> = new EventEmitter<any>();
  remisionSelect: boolean;
  facturaSelect: boolean;
  tipoF: string;
  constructor() { }

  ngOnInit() {
    this.tipoF = '';
  }
  cerrar(valor) {
    let obj: any;
    obj = {
      tipo: this.tipoF,
      valor: valor
    };
    this.cerrarPop.emit(obj);
  }
  select(tipo) {
    if (tipo === 'factura') {
      this.tipoF = tipo;
      if (!this.facturaSelect) {
        this.facturaSelect = true;
        if (this.remisionSelect) {
          this.remisionSelect = false;
        }
      }
    } else if (tipo === 'remision') {
      this.tipoF = tipo;
      if (!this.remisionSelect) {
        this.remisionSelect = true;
        if (this.facturaSelect) {
          this.facturaSelect = false;
        }
      }
    }
  }
}
