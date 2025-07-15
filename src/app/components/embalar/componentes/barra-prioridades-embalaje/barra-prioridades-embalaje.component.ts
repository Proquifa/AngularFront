import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';
import { CoreContainerComponent } from '../../../core-container/core-container.component';
import { InspeccionService } from '../../../../services/inspeccion/inspeccion.service';
import { ContadorPiezasXPrioridad } from '../../../../class/despachos/ContadorPiezasXPrioridad.class';
import { totalesInspeccionProducto } from '../../../../class/despachos/totalesInspeccionProducto.class';


@Component({
  selector: 'pq-barra-prioridades-embalaje',
  templateUrl: './barra-prioridades-embalaje.component.html',
  styleUrls: ['./barra-prioridades-embalaje.component.scss']
})
export class BarraPrioridadesEmbalajeComponent implements OnInit {
    inspector:string = "aHernandezM";
    ContadorPiezasXPrioridad1: ContadorPiezasXPrioridad;
    totalesInspeccionProducto1 :totalesInspeccionProducto;
    pedimento:any;
    ordenDeCompra: any;

    constructor(private router: Router,private  _pzasAInspeccionar : InspeccionService, private coreComponent: CoreContainerComponent ) {}
    @Input() datosPrioridades: any;
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
  // Piezas por prioridad
  pzasP1: any;
  pzasP2: any;
  pzasP3: any;
  tiempo: any;
      ngOnInit() {
        this.obtenerTotalesPorInspector(this.inspector);
        // this.obtenerDatosInspector(); //Descomentar la linea para conectar con el usuario de la sesion.
        this.mostrarPartidasInspeccion();
        this.obTenerTotalesEmbalar();
      }

      // obtenerDatosInspector(){
      //     this.inspector=SessionUser.getInstance().getUser().getUsuario();
      //     console.log(this.inspector);
      // }

      ngOnChanges(change: SimpleChanges) {
      }

      obTenerTotalesEmbalar() {
        this.pzasP1 = this.datosPrioridades.prioridad1;
        this.pzasP2 = this.datosPrioridades.prioridad2;
        this.pzasP3 = this.datosPrioridades.prioridad3
        console.log('Soy p1:::', this.pzasP1);
      }
      // Método para obtener el promedio por pieza de cada inspector.
      obtenerTotalesPorInspector(inspector: any) {
        // var arregloTotalInspector : any = new Array<totalesInspeccionProducto>();
         this._pzasAInspeccionar.consultaDeTotalesPorInspector(inspector).subscribe(
          data => {
            // console.log(data); //Pruebas
              this.totalesInspeccionProducto1 = data.current;
              // let tiempoT = 1;
              let tiempoT: number = 0;
              tiempoT = this.totalesInspeccionProducto1.promXpieza;
              this.tiempo = tiempoT;
              this.TEIPrioridad1 = this.obtenerTiempoEstimado(this.pzasP1, this.tiempo);
              this.TEIPrioridad2 = this.obtenerTiempoEstimado(this.pzasP2, this.tiempo);
              this.TEIPrioridad3 = this.obtenerTiempoEstimado(this.pzasP3, this.tiempo);
            },error => {
              }
            );
          }

      // Mostrar listado de partidas para inspeccion.
      mostrarPartidasInspeccion(){
      // this.coreComponent.openModal(0);

      // Método para obtener el promedio por pieza de cada inspector.
       this._pzasAInspeccionar.obtenerPiezasPorPrioridad().subscribe(
          data => {

            // console.log(data); //Pruebas
              this.ContadorPiezasXPrioridad1 = data.current;
              // console.log("piezasPrioridad: " + this.ContadorPiezasXPrioridad1);
              this.pzasP1;// = 10;
              this.pzasP2;// = 10;
              this.pzasP3;// = 0;
              //Test
              this.mostrarP1 = this.visualizarP1(this.pzasP1);
              this.mostrarP2 = this.visualizarP2(this.pzasP2);
              this.mostrarP3 = this.visualizarP2(this.pzasP3);

              this.formatoPzaP1 = (this.pzasP1 == 1) ?  this.pzasP1 + ' pieza' : this.pzasP1 + ' piezas' ;
              this.formatoPzaP2 = (this.pzasP2 == 1) ?  this.pzasP2 + ' pieza' : this.pzasP2 + ' piezas' ;
              this.formatoPzaP3 = (this.pzasP3 == 1) ?  this.pzasP3 + ' pieza' : this.pzasP3 + ' piezas' ;

              this.porcentajeP1 = this.obtenerPorcentajeP1(this.mostrarP1, this.mostrarP2, this.mostrarP3) + "%";
              this.porcentajeP2 = this.obtenerPorcentajeP2(this.mostrarP1, this.mostrarP2, this.mostrarP3) + "%";
              this.porcentajeP3 = this.obtenerPorcentajeP3(this.mostrarP1, this.mostrarP2, this.mostrarP3) + "%";

                console.log("filtra prioridad");
              // console.log("P1: " + this.pzasP1 + " P2: " + this.pzasP2 + " P3: " + this.pzasP3);
              /* this.partidaPrioridad = new PartidaInspeccion(); */
              this.coreComponent.closeModal(0);
            },error => {
              this.coreComponent.closeModal(0);
              }
            );
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
      } else if (value1 === true && value2 === true && value3 === true) {
        this.descripcionLargaP2 = false;
        this.descripcionCortaP2 = true;
        this.descripcionLargaP3 = false;
        this.descripcionCortaP3 = true;
        porcentaje = 25;
      } else if (value1 === true && value2 === true && value3 === false){
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

    // Funciones para visualizar los recuadros por prioridad
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
