import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pn-pop-up-tipo-pago',
  templateUrl: './pop-up-tipo-pago.component.html',
  styleUrls: ['./pop-up-tipo-pago.component.scss']
})
export class PopUpTipoPagoComponent implements OnInit {
@Input() datos: any;
@Output() cerrarPop: EventEmitter<boolean> = new EventEmitter<boolean>();
  contact: string;
  pedidos: string;
  esac: any;
  debtCollector: any;
  numberOrders: string;
  constructor() { }

  ngOnChanges() {
    if (this.datos !== undefined && this.datos !== null) {
      this.getInformation();
    }
  }
  ngOnInit() {
  }

  getInformation() {
    const arrayContac = this.datos.contacto.split(' ');
    this.pedidos = this.datos.cpedidos.toString().replace(',', ', ');
    if (arrayContac.length >= 2) {
      this.contact = arrayContac[0] + ' ' + arrayContac[1] + ' · ' + this.datos.puesto;
    } else {
      this.contact = arrayContac[0];
    }
    if (this.datos.cpedidos.length > 1 ) {
      this.numberOrders = this.datos.cpedidos.length + ' Pedidos';
    } else {
      this.numberOrders = this.datos.cpedidos.length + ' Pedido';
    }
    this.esac = this.validateDatas(this.datos.nombreEsac, this.datos.emailEsac, this.datos.extEsac);
    this.debtCollector = this.validateDatas(this.datos.nombreCobrador, this.datos.emailCobrador, this.datos.extCobrador);
  }

  validateDatas(nombre: string, email: string, ext: string) {
    let datas: Object = new Object;
    if (nombre === null) {
      nombre = 'ND';
    }

    if (email === null) {
      email = 'ND';
    }
    if (ext === null) {
      ext = 'ND';
    }

    datas = {
      name: nombre,
      email: email,
      ext: ext
    };
    return datas;
  }
  cerrar() {
    this.cerrarPop.emit(true);
  }
}
