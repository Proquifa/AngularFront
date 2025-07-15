import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'pn-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.scss']
})
export class BotoneraComponent implements OnInit {

  @Output() event: EventEmitter<any> = new EventEmitter<any>();
  @Input() lista: any;
  @Input() conIndice: boolean = false;
  @Input() textoCantidad: string;
  @Input() selectedPos = 0;
  botones: any;
  with: string;
  constructor() { }

  ngOnInit() {
    if (this.lista.length > 0) {
      this.botones = new Array<string>(this.lista.length).fill('botonesDias');
      const tamanio = 100 / this.lista.length;
      this.with = tamanio + '%';

      if (this.selectedPos > (this.lista.length - 1)) {
        this.metodoDeFactura(this.lista[this.lista.length - 1], this.lista.length - 1);
      } else {
        this.metodoDeFactura(this.lista[this.selectedPos], this.selectedPos);
      }
    }
  }

  metodoDeFactura(boton , index) {
    console.log("boton", boton );
    this.botones.fill('botonesDias');
    this.botones[index]='botonesDiasActive';
    this.event.emit(boton);
  }
}


/*********************************Valores*******************************/
///  Nota : la lista debe contener los siguientes valores
/* [{nombre: 'Proquifa', totFactura: 12, etiquetaTotal: 'Factura'},
{nombre: 'Proveedora', totFactura: 15, etiquetaTotal: 'Factura' }]*/
