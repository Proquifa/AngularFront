import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Parametros} from '../../../../../class/Parametros.class';
import {SessionUser} from '../../../../../services/session/session.service';

@Component({
  selector: 'pn-pop-up-informativo',
  templateUrl: './pop-up-informativo.component.html',
  styleUrls: ['./pop-up-informativo.component.scss']
})
export class PopUpInformativoComponent implements OnInit {
 // @Input () label: string;
  popUpGenerarEtiqueta = true;
 /* @Output() vistaPopEstado: EventEmitter <any> = new EventEmitter<any>();*/
  @Output() vistaListaEmbalar: EventEmitter <any> = new EventEmitter<any>(); /// Se agrego por el cambio que se hizo
  @Output() cambiarVistaGenerar: EventEmitter <any> = new EventEmitter<any>();
  @Input() activarGenerar: boolean;
  @Input() activarBolsa: boolean;
  @Input() tipoMensaje: string = 'Hielera';
 vEmbalarProductos: boolean;
  openPopcolocar = true;
  openPopImprimir: boolean;
  mensaje: string;
  activarSobre: boolean;
  activarHielera: boolean;
  activarBolsaInfo: boolean;
  constructor() { }

  ngOnInit() {
    if (this.activarBolsa) {
      this.activarBolsaInfo = true;
      this.activarHielera = false;
      this.activarSobre = false;
    } else if (this.activarGenerar) {
      this.activarHielera = false;
      this.activarSobre = true;
    } else {
      this.activarHielera = true;
      this.activarSobre = false;
    }
  }
  closePopUp() {
    this.vEmbalarProductos = true;
  }
  cambiarPop() {
    this.openPopcolocar = false;
    this.openPopImprimir = true;
  }
 /* CambiarVista() {
    this.openPopcolocar = false;
    this.openPopImprimir = false;
    let val = true;
    this.vistaPopEstado.emit(val);
  }*/
  cambiarVistaEmbalar() {
    if (this.activarSobre) {
      this.popUpGenerarEtiqueta = false;
      let val = true;
      this.cambiarVistaGenerar.emit(val);
    } else {
      this.popUpGenerarEtiqueta = false;
      let val = true;
      this.vistaListaEmbalar.emit(val);
    }
  }
}
