import { Component, OnInit } from '@angular/core';
import {ContadorPiezasXPrioridad} from '../../../../class/despachos/ContadorPiezasXPrioridad.class';
import {totalesInspeccionProducto} from '../../../../class/despachos/TotalesInspeccionProducto.class';
import {Router} from '@angular/router';
import {CoreContainerComponent} from '../../../core-container/core-container.component';
import {TrabajarRutasEnvioService} from '../../trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio-informacion/trabajar-rutas-envio.services';
import {EnvioPorClienteService} from '../../../../services/trabajar-ruta/envio-por-cliente.service';

@Component({
  selector: 'pn-barra-prioridades-por-cliente',
  templateUrl: './barra-prioridades-por-cliente.component.html',
  styleUrls: ['./barra-prioridades-por-cliente.component.scss']
})
export class BarraPrioridadesPorClienteComponent implements OnInit {
  inspector:string = "aHernandezM";
  ContadorPiezasXPrioridad1: ContadorPiezasXPrioridad;
  totalesInspeccionProducto1 :totalesInspeccionProducto;

  pedimento:any;
  ordenDeCompra: any;
  tiempoPrioridades; any;
  PackingList: any [] = [];
  // Piezas por prioridad
  pzasP1: number = 0;
  pzasP2: number = 0;
  pzasP3: number = 0;
  tiempo: any;

  // Devuelve las piezas tomando en cuenta singular y plural
  formatoPzaP1;
  formatoPzaP2;
  formatoPzaP3;

  // Tiempo Estimado de Inspeccion por prioridad
  TEIPrioridad1: string;
  TEIPrioridad2: string;
  TEIPrioridad3: string;

  // variables para mostrar u ocultar los recuadros por prioridad
  mostrarP1: boolean;
  mostrarP2: boolean;
  mostrarP3: boolean;

  // varibales para jugar con el porcentaje de visualizacion  segun el caso
  porcentajeP1: string ;
  porcentajeP2: string ;
  porcentajeP3: string ;

  // Variables para el manejo de los mensajes mostrados
  descripcionLargaP2: boolean ;
  descripcionCortaP2: boolean ;
  descripcionLargaP3: boolean ;
  descripcionCortaP3: boolean ;

  constructor(private router: Router, private coreComponent: CoreContainerComponent, private _datosPrio: EnvioPorClienteService ) { }

  ngOnInit() {
    this.obtenerTiempoTrabajoEnvio();
  }
  // Método para obtener el promedio por pieza de cada packing list.
  obtenerTiempoTrabajoEnvio() {
    this._datosPrio.obtenerTiempo().subscribe(
      data => {
        /*Calcular tiempo POR pieza*/
        let tiempoT;
        tiempoT = data.current.Tiempo[0].tiempo;
        /****************************/
        this.PackingList = data.current.Piezas;
        this.PackingList.forEach(element => {
          if (element.prioridad === 'P1') {
            this.pzasP1 = element.totalPiezas;
          } else if (element.prioridad === 'P2') {
            this.pzasP2 = element.totalPiezas;
          } else if (element.prioridad === 'P3') {
            this.pzasP3 = element.totalPiezas;
          }
        });
        this.tiempo = tiempoT;
        this.TEIPrioridad1 = this.obtenerTiempoEstimado(this.pzasP1, this.tiempo);
        this.TEIPrioridad2 = this.obtenerTiempoEstimado(this.pzasP2, this.tiempo);
        this.TEIPrioridad3 = this.obtenerTiempoEstimado(this.pzasP3, this.tiempo);
        /******/
        this.mostrarP1 = this.visualizarP1(this.pzasP1);
        this.mostrarP2 = this.visualizarP2(this.pzasP2);
        this.mostrarP3 = this.visualizarP3(this.pzasP3);
        /******/
        this.formatoPzaP1 = (this.pzasP1 == 1) ?  this.pzasP1 + ' pieza' : this.pzasP1 + ' piezas' ;
        this.formatoPzaP2 = (this.pzasP2 == 1) ?  this.pzasP2 + ' pieza' : this.pzasP2 + ' piezas' ;
        this.formatoPzaP3 = (this.pzasP3 == 1) ?  this.pzasP3 + ' pieza' : this.pzasP3 + ' piezas' ;
        /******/
        this.porcentajeP1 = this.obtenerPorcentajeP1(this.mostrarP1, this.mostrarP2, this.mostrarP3) + "%";
        this.porcentajeP2 = this.obtenerPorcentajeP2(this.mostrarP1, this.mostrarP2, this.mostrarP3) + "%";
        this.porcentajeP3 = this.obtenerPorcentajeP3(this.mostrarP1, this.mostrarP2, this.mostrarP3) + "%";

      });
  }
  // Funciones para porcentajes
  obtenerPorcentajeP1(value1: boolean , value2: boolean, value3: boolean){
    let porcentaje : number;
    if (value1 == true && value2 ==true && value3 ==false) {
      porcentaje = 70;
    } else if(value1 == true && value2 ==true && value3 ==true){
      porcentaje = 50;
    } else if(value1 == true && value2 ==false && value3 ==true){
      porcentaje = 70;
    }
    return porcentaje;
  }

  obtenerPorcentajeP2(value1: boolean , value2: boolean, value3: boolean){
    let porcentaje : number;
    if (value1 == false && value2 ==true && value3 ==true) {
      this.descripcionLargaP2 = true;
      this.descripcionCortaP2 = false;
      this.descripcionLargaP3 = false;
      this.descripcionCortaP3 = true;
      porcentaje = 70;
    } else if(value1 == true && value2 ==true && value3 ==true){
      this.descripcionLargaP2 = false;
      this.descripcionCortaP2 = true;
      this.descripcionLargaP3 = false;
      this.descripcionCortaP3 = true;
      porcentaje = 25;
    }else if(value1 == true && value2 ==true && value3 ==false){
      this.descripcionCortaP2 = true;
      this.descripcionLargaP2 = false;
      porcentaje = 30;
    }
    return porcentaje;
  }

  obtenerPorcentajeP3(value1: boolean , value2: boolean, value3: boolean){
    let porcentaje : number;
    if (value1 == true && value2 ==false && value3 ==true) {
      this.descripcionLargaP3 = false;
      this.descripcionCortaP3 = true;
      porcentaje = 30;
    }else if(value1 == true && value2 ==true && value3 ==true){
      porcentaje = 25;
    } else if(value1 ==  false && value2 ==true && value3 ==true){
      porcentaje = 30;
    }
    return porcentaje;
  }

  //Funciones para visualizar los recuadros por prioridad
  visualizarP1(piezasPI: number){
    if (piezasPI < 1 ) {
      return false;
    } else
      return true;
  }

  visualizarP2(piezasPI: number){
    if (piezasPI < 1 ) {
      return false;
    } else
      this.descripcionLargaP2 = true;
    return true;
  }

  visualizarP3(piezasPI: number){
    if (piezasPI < 1 ) {
      return false;
    } else
      this.descripcionLargaP3 = true;
    return true;
  }

  obtenerTiempoEstimado(piezas: number, tPromedio: number){
    let tiempo = piezas * tPromedio;
    let hours: any;let minutes:any;
    let seconds: any;
    hours = Math.floor( tiempo / 3600 );
    minutes = Math.floor( (tiempo % 3600) / 60 );
    seconds = tiempo % 60;
    // Anteponiendo un 0 a los minutos si son menos de 10
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Validacion de pruebas para cuando el tiempo es menor o igual a 1 min.
    if ((hours == 0 || hours == NaN) && minutes == 0){
      let result =  "1 min";
      return result;
      // console.log("1 minuto restante o menos  ");
    }else if(hours <=0){
      let result = minutes + " min";
      return result;
    } else {
      let result = hours + " hr " + minutes + " min";
      return result;
    }
  }
}
