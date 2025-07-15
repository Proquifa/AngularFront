import { Component, OnInit, Output, Input, EventEmitter,  SimpleChanges} from '@angular/core';
import * as accounting from 'accounting';
import { PartidaInspeccion } from './../../../../class/despachos/PartidaInspeccion.class';

@Component({
  selector: 'pq-informacion-partida',
  templateUrl: './informacion-partida.component.html',
  styleUrls: ['./informacion-partida.component.scss']
})
export class InformacionPartidaComponent implements OnInit {

  @Input() partidaPrioridad: PartidaInspeccion = new PartidaInspeccion();

  classPrioridad: string = "P1";
  PartidaAInspeccionar;
  prioridad: any;
  puntaje: any;
  formatoPzas: any;
  oc: any;
  pedimento: any;
  idPartida: any ;
  descripcion: string;
  manejo: string;
  iconoAmbiente: boolean;
  iconoRefrigeracion: boolean;
  iconoCongelacion: boolean;
  piezasPartida: any;

  fechaFEE: any;
  diasRestantes: any;
  pFEE: any;
  pManejo: any;
  pRuta: any;
  pParciales: any;
  pArribo: any;
  pControl: any;
  marca: string;
  // booleanos para mostrar o ocultar los elementos deL TOOLTIP.
  mostrarFEE: boolean;
  mostrarManejo: boolean;
  mostrarRuta: boolean;
  mostrarParciales: boolean;
  mostrarArribo: boolean ;
  mostrarControl: boolean;
  partidaPrioridadAux: any;
  banderaTxt: boolean;
  presentacion: string;
  constructor() {
  }

  ngOnInit() {
  this.MostrarDatosInspeccion();
  }

  ngOnChanges(change: SimpleChanges){
    // console.log(change);
    this.partidaPrioridadAux = this.partidaPrioridad;
    this.MostrarDatosInspeccion();
  }

  MostrarDatosInspeccion() {
    const piezas = this.partidaPrioridad.cantidadCompra;
    this.formatoPzas = (piezas == 1) ?  piezas + ' pieza.' : piezas + ' piezas.' ;
    this.puntaje = "+ " + this.partidaPrioridad.puntos;
    this.descripcion = this.partidaPrioridad.concepto;
    this.marca = this.partidaPrioridad.nombreProveedor;
    this.idPartida = this.partidaPrioridad.codigo;
    this.prioridad = this.partidaPrioridad.prioridad;
    this.oc = this.partidaPrioridad.compra;
    this.pedimento = this.partidaPrioridad.pedimento;
    if (this.marca.toLowerCase() !== 'usp' && (this.partidaPrioridad.cantidad !== undefined  && this.partidaPrioridad.cantidad !== null) && (this.partidaPrioridad.unidad !== undefined && this.partidaPrioridad.unidad !== null)) {
      this.presentacion = '(' + this.partidaPrioridad.cantidad + ' ' + this.partidaPrioridad.unidad + ')';
    } else {
      this.presentacion = '';
    }
    this.tipoManejo(this.partidaPrioridad.manejo);
    this.mostrarPrioridad(this.partidaPrioridad.prioridad);
    this.mostrarFolio(this.pedimento, this.oc);
    // Datos del tooltip
    this.fechaFEE = this.partidaPrioridad.fechaEstimadaEntrega;
    this.diasRestantes = this.partidaPrioridad.diasRestantes;
    this.pFEE = this.partidaPrioridad.puntosFEE;
    this.pManejo = this.partidaPrioridad.puntosManejo;
    this.pRuta = this.partidaPrioridad.puntosRuta;
    this.pParciales = this.partidaPrioridad.puntosRParciales;
    this.pArribo = this.partidaPrioridad.puntosUDArribo;
    this.pControl = this.partidaPrioridad.puntosControl;
    // Datos de pruebas
    // this.pParciales= 0;

    // Booleanos para mostrar datos.
    this.mostrarFEE = this.ocultarDatos(this.pFEE);
    this.mostrarManejo = this.ocultarDatos(this.pManejo);
    this.mostrarRuta = this.ocultarDatos(this.pRuta);
    this.mostrarParciales = this.ocultarDatos(this.pParciales);
    this.mostrarArribo = this.ocultarDatos(this.pArribo);
    this.mostrarControl = this.ocultarDatos(this.pControl);

    if (this.pedimento != null || this.pedimento !== undefined) {
      this.banderaTxt = true;
    } else {this.banderaTxt = false; }
  }

  tipoManejo(manejo: string) {
    this.iconoCongelacion = false;
    this.iconoRefrigeracion = false;
    this.iconoAmbiente = false;
    if (this.partidaPrioridad.tipo.toLowerCase() !== 'publicaciones') {
      if (manejo === 'Congelacion' || manejo === 'Congelación') {
        this.iconoCongelacion = true;
      } else if (manejo === 'Refrigeracion' || manejo === 'Refrigeración') {
        this.iconoRefrigeracion = true;
      } else if (manejo === 'Ambiente') {
        this.iconoAmbiente = true;
      } else {
        console.log('No se ha encontrado un tipo de manejo para esta partida.');
      }
    } else {
      this.iconoAmbiente = true;
    }
  }

  mostrarPrioridad(prioridad: any) {
    if (prioridad == "P1") {
    this.classPrioridad="P1";
    } else if (prioridad == "P2") {
    this.classPrioridad="P2";
    } else if (prioridad == "P3") {
    this.classPrioridad="P3";
    } else {
    console.log("Algo ha salido mal...");
    }
  }

  mostrarFolio(pedimento: string, oc: string) {
    if (pedimento === null && oc !== null) {
      this.oc = 'OC-' + oc;
    } else if (pedimento !== null && oc == null) {
      this.pedimento = "PD-" + pedimento;
    } else {
      console.log("no hay orden de compra ni pedimento, FAVOR DE VERIFICAR!");
    }
  }

  ocultarDatos(dato: any) {
    if (dato > 0) {
      return true;
    } else {
      return false;
    }
  }

}
