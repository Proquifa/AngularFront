import {Component, Input, OnInit} from '@angular/core';
import {CoreContainerComponent} from '../../../core-container/core-container.component';

@Component({
  selector: 'pq-vista-colectar-elementos',
  templateUrl: './vista-colectar-elementos.component.html',
  styleUrls: ['./vista-colectar-elementos.component.scss']
})
export class VistaColectarElementosComponent implements OnInit {
  @Input() partidasPorColectar: any;
  partidasAmbiente: any;
  partdasRefrigeracion: any;
  partidasCongelacion: any;

  formatoAmbiente: string;
  formatoRefri: string ;
  formatoConge: string ;

  mostrarAmbiente: boolean;
  mostrarRefri: boolean;
  mostrarCongelador: boolean;
  mostrarFlecha1: boolean;
  mostrarFlecha2: boolean;


  constructor(private CoreComponent: CoreContainerComponent) { }

  ngOnInit() {
    // this.mostrarDatos();
  }
  ngOnChanges() {
    this.mostrarPartidas();
    console.log('', this.partidasPorColectar);
  }
  mostrarPartidas () {
    this.partidasAmbiente = this.partidasPorColectar[0].numPartidasAmbiente;
    this.partdasRefrigeracion = this.partidasPorColectar[0].numPartidasRefrigeracion;
    this.partidasCongelacion = this.partidasPorColectar[0].numPartidasCongelacion;
    this.mostrarAmbiente = this.visualizarElemento(this.partidasAmbiente);
    this.mostrarRefri = this.visualizarElemento(this.partdasRefrigeracion);
    this.mostrarCongelador = this.visualizarElemento(this.partidasCongelacion);
    this.mostrarFlechas(this.mostrarAmbiente, this.mostrarRefri, this.mostrarCongelador);

    this.formatoAmbiente   = (this.partidasAmbiente == 1) ?  this.partidasAmbiente + ' Partida' : this.partidasAmbiente + ' Partidas' ;
    this.formatoRefri  = (this.partdasRefrigeracion == 1) ?  this.partdasRefrigeracion + ' Partida' : this.partdasRefrigeracion + ' Partidas' ;
    this.formatoConge =  (this.partidasCongelacion == 1) ?  this.partidasCongelacion + ' Partida' : this.partidasCongelacion + ' Partidas' ;
  }
  mostrarDatos(){

  this.mostrarAmbiente = this.visualizarElemento(this.partidasAmbiente);
  this.mostrarRefri = this.visualizarElemento(this.partdasRefrigeracion);
  this.mostrarCongelador = this.visualizarElemento(this.partidasCongelacion);
  this.mostrarFlechas(this.mostrarAmbiente, this.mostrarRefri, this.mostrarCongelador);

  this.formatoAmbiente   = (this.partidasAmbiente == 1) ?  this.partidasAmbiente + ' Partida' : this.partidasAmbiente + ' Partidas' ;
  this.formatoRefri  = (this.partdasRefrigeracion == 1) ?  this.partdasRefrigeracion + ' Partida' : this.partdasRefrigeracion + ' Partidas' ;
  this.formatoConge =  (this.partidasCongelacion == 1) ?  this.partidasCongelacion + ' Partida' : this.partidasCongelacion + ' Partidas' ;

  }


  visualizarElemento(dato: number){
    if (dato < 1 ) {
      return false;
    } else
      return true;
  }

  mostrarFlechas(dato1: boolean, dato2: boolean, dato3: boolean){
    if (dato1 == true && dato2 ==true && dato3 == true) {
      this.mostrarFlecha1 = true;
      this.mostrarFlecha2 = true;
    } else if (dato1 == false && dato2==true && dato3==true) {
      this.mostrarFlecha1 = true;
      this.mostrarFlecha2 = false;
    } else if (dato1 == true && dato2==false && dato3==true) {
      this.mostrarFlecha1 = true;
      this.mostrarFlecha2 = false;
    } else if (dato1 == true && dato2==true && dato3==false) {
      this.mostrarFlecha1 = false;
      this.mostrarFlecha2 = true;
    } else if (dato1 == true && dato2==false && dato3==false) {
        this.mostrarFlecha1 = false;
        this.mostrarFlecha2 = false;
    } else if (dato1 == false && dato2==true && dato3==false) {
        this.mostrarFlecha1 = false;
        this.mostrarFlecha2 = false;
    } else if (dato1 == false && dato2==false && dato3==true) {
        this.mostrarFlecha1 = false;
        this.mostrarFlecha2 = false;
    }

  }


}
