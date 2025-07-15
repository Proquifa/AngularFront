import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'pq-vista-generar-packing-list',
  templateUrl: './vista-generar-packing-list.component.html',
  styleUrls: ['./vista-generar-packing-list.component.scss']
})
export class VistaGenerarPackingListComponent implements OnInit {
  //@Input() valorRecibidoImpresion: any;
  @Input() valorCliente: any;
  @Output() vistaColectar: EventEmitter<any> = new EventEmitter<any>();
  @Output() vistaEnvioVista: EventEmitter<boolean> = new EventEmitter<boolean>();
  escanearCodigo: boolean;
  bolsaContenedora: boolean = true;
  mostrarFooter: boolean;
  footerCBorde: boolean;
  footerSBorde: boolean;
  colorBoton: boolean = true;
  validacionDeImpresion: boolean = true;
  btnFinalizar: boolean;
  btnImprimir: boolean = true;
  valorImpresion: boolean;
  datosCliente: any;
  constructor() {
    this.escanearCodigo = true;
    this.mostrarFooter = true;
    // this.footerSBorde = false;
   }

  ngOnInit() {
  }
  cambioDeVista(valor: boolean) {
    this.bolsaContenedora = valor;
    console.log(this.bolsaContenedora);
    if (this.bolsaContenedora == false) {
      this.bolsaContenedora = false;
      this.escanearCodigo = true;
    } else {
      this.bolsaContenedora = true;
      this.escanearCodigo = false;
      this.mostrarFooter = false;
      // this.footerCBorde = true;
      // this.footerCBorde= false;
    }
  }
  validarImpresion() {
    if (this.validacionDeImpresion === true) {
      this.btnFinalizar = true;
      this.btnImprimir = false;
    } else if (this.validacionDeImpresion === false) {
      this.btnFinalizar = false;
      this.colorBoton = false;
    }
  }
  vistaColectarPartidas($event) {
    this.vistaColectar.emit(true);
  }
  vistaEnvio($event) {
    this.vistaEnvioVista.emit(true);
  }
}
