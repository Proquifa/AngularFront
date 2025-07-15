import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'pn-pop-up-medidas',
  templateUrl: './pop-up-medidas.component.html',
  styleUrls: ['./pop-up-medidas.component.scss']
})
export class PopUpMedidasComponent implements OnInit {
  @Output() updateMeter: EventEmitter<any> = new EventEmitter<any>();
  @Input() client: any;
  activeBtn: boolean;
  contacto: string;
  dataMeter: any;
  longitud: string;
  ancho: string;
  peso: string;
  altura: string;
  constructor() { }

  ngOnInit() {
    this.activeBtn = false;
    console.log(this.client);
    if (this.client[0].puesto !== undefined && this.client[0].puesto !== null && this.client[0].puesto.trim() !== '') {
    } else {
      this.contacto = this.client[0].contacto;
    }
  }
  btn(valor) {
    this.dataMeter = {
      valor: valor,
      meter: {
        peso: this.peso,
        length: this.longitud,
        height: this.altura,
        width: this.ancho
      }

    };
      this.updateMeter.emit(this.dataMeter);
  }

  saveMeter(data, tipo) {
    if (tipo === 'peso') {
      this.peso = data;
    } else if (tipo === 'alt') {
      this.altura = data;
    } else if (tipo === 'ancho') {
     this.ancho = data;
    } else if (tipo === 'long') {
      this.longitud = data;
    }

    this.validarBtn();
  }

  validarBtn() {
    if (this.peso !== null && this.peso !== undefined && this.peso !== '' && this.altura !== null && this.altura !== undefined
      && this.altura !== '' && this.longitud !== '' && this.longitud !== null && this.longitud !== undefined && this.ancho !== null && this.ancho !== undefined
      && this.ancho !== '') {
      this.activeBtn = true;
    } else {
      this.activeBtn = false;
    }
  }

}
