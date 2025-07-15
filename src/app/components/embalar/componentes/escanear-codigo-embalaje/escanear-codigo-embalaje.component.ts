import {Component, OnInit, SimpleChanges, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'pq-escanear-codigo-embalaje',
  templateUrl: './escanear-codigo-embalaje.component.html',
  styleUrls: ['./escanear-codigo-embalaje.component.scss']
})
export class EscanearCodigoEmbalajeComponent implements OnInit {
  @Output() event: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitEvent: EventEmitter <any> = new EventEmitter<any>();
  @Input()valorRecibidoEmbalaje: any;
  etiquetaPorRefrigeracion: any[] = [{ "fd":"FD-030916-4272-4", "piezas": 14},
                      { "fd":"FD-256398-7896-7", "piezas": 15},
                      { "fd":"FD-256398-7892-5", "piezas": 24},
                      { "fd":"FD-256398-7897-1", "piezas": 18},
                      { "fd":"FD-256398-7896-7", "piezas": 15},
                      { "fd":"FD-256398-7892-5", "piezas": 24},
                      { "fd":"FD-256398-7897-1", "piezas": 18},
                      { "fd":"FD-256398-7896-7", "piezas": 15},
                      { "fd":"FD-256398-7892-5", "piezas": 24},
                      { "fd":"FD-256398-7897-1", "piezas": 18},
                      { "fd":"FD-256398-7235-9", "piezas": 88}];
  etiquetaPorQr: any[] = [{ "qr":"QR-030916-4272-4", "piezas": 14},
                                { "qr":"QR-256398-7896-7", "piezas": 15},
                                { "qr":"QR-256398-7892-5", "piezas": 24},
                                { "qr":"QR-256398-7897-1", "piezas": 18},
                                { "qr":"QR-256398-7896-7", "piezas": 15},
                                { "qr":"QR-256398-7892-5", "piezas": 24},
                                { "qr":"QR-256398-7897-1", "piezas": 18},
                                { "qr":"QR-256398-7896-7", "piezas": 15},
                                { "qr":"QR-256398-7892-5", "piezas": 24},
                                { "qr":"QR-256398-7897-1", "piezas": 18},
                                { "qr":"QR-256398-7235-9", "piezas": 88}];
  etiquetaPorCongelacion: any[] = [{ "fd":"FD-030916-4272-4", "piezas": 14},
    { "fd":"FD-256398-7896-7", "piezas": 15},
    { "fd":"FD-256398-7892-5", "piezas": 24},
    { "fd":"FD-256398-7897-1", "piezas": 18},
    { "fd":"FD-256398-7896-7", "piezas": 15},
    { "fd":"FD-256398-7892-5", "piezas": 24},
    { "fd":"FD-256398-7897-1", "piezas": 18},
    { "fd":"FD-256398-7896-7", "piezas": 15},
    { "fd":"FD-256398-7892-5", "piezas": 24},
    { "fd":"FD-256398-7897-1", "piezas": 18},
    { "fd":"FD-256398-7235-9", "piezas": 88}];

listaFD: any = [];
codigoAmbiente: any = this.etiquetaPorRefrigeracion[0];
val: any = 0;
cambioDeEtiqueta: boolean = false;
valorTituloLista: string;
cambioColorLetra:boolean = false;
  constructor() { }

  ngOnInit() {
    this.seleccionarPrimero();
    this.seleccionarTitulo();
  }
  seleccionarTitulo() {
    if (this.cambioDeEtiqueta === true) {
      this.valorTituloLista = "FD’S ";
    } else if (this.cambioDeEtiqueta === false) {
      this.valorTituloLista = "QR’S ";
    }
  }
  seleccionarPrimero() {
    this.listaFD = [];
    this.listaFD = new Array(this.etiquetaPorRefrigeracion.length).fill('');
    this.listaFD[this.val] = 'divActive';
    this.codigoAmbiente = this.etiquetaPorRefrigeracion[this.val].fd;
    //console.log(this.codigoAmbiente);
    this.emitEvent.emit(this.codigoAmbiente);
  }
  seleccionarItemFD(i) {
    this.listaFD = [];
    this.listaFD = new Array(this.etiquetaPorRefrigeracion.length).fill('');
    this.listaFD[i] = 'divActive';
    //this.listaFD[i]= 'divCambioColor';
    this.codigoAmbiente = this.etiquetaPorRefrigeracion[i].fd;
    //console.log(this.codigoAmbiente);
    this.emitEvent.emit(this.codigoAmbiente);
    //return this.codigoAmbiente;
  }

}
