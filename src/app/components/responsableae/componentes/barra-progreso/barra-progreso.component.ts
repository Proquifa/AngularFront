import {Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Query } from '../../../../class/compras/utils/query.class';
import { SessionUser } from './../../../../services/session/session.service';
import { InspeccionService } from './../../../../services/inspeccion/inspeccion.service';
import { ComunService } from '../../../../services/comun/comun.service';
import { Subscription } from 'rxjs/Subscription';
import { CoreContainerComponent } from '../../../core-container/core-container.component';
import { PartidaInspeccion } from './../../../../class/despachos/PartidaInspeccion.class';
import { ContadorPiezasXPrioridad } from './../../../../class/despachos/ContadorPiezasXPrioridad.class';
import { totalesInspeccionProducto } from '../../../../class/despachos/totalesInspeccionProducto.class';

@Component({
  selector: 'pq-barra-progreso',
  templateUrl: './barra-progreso.component.html',
  styleUrls: ['./barra-progreso.component.scss']
})
export class BarraProgresoComponent implements OnInit, OnDestroy {
  subs: Subscription;
  reinicio:boolean;
@Input() partidaPrioridad: PartidaInspeccion = new PartidaInspeccion();
@Output() pedimentoVistaEscanear: EventEmitter<any> = new EventEmitter<any>();
  inspector:string ;
  evento: string = "inspección";
  mensajeBarra:string;
  colorBarra:string;
  mensajeVerde: string = "Con el ritmo de Inspección actual, lograrás cumplir el objetivo";
  verde:string = "#94BA13";
  mensajeAzul:string = "Acelera el ritmo de Inspección, para que logres el objetivo.";
  azul:string = "#0098DA";
  mensajeNaranja:string = "Con el ritmo de Inspección actual, no lograrás cumplir el objetivo.";
  naranja:string = "#FF6700 ";
  PzasInspeccionadas: any= 0;
  pzasTotales : any = 7;

  //Variables para darle formato al texto
  formatoPzasInspeccionadas:any;
  pzasRestantes: number;
  formatoPzasRestantes:any;

  //Variables para la hora
  hora:any;
  idHora:any;

  //Variables para la barra de progreso
  promedio: string;
  restante: string;

  //Variables para mostrar el tooltip y el texto;
  toolTipRigth: boolean ;
  textRigth: boolean;
  tooltiptextLeft: boolean ;
  textLeft: boolean ;

/* VARIABLES TIPO INSPECCION */
ContadorPiezasXPrioridad1: ContadorPiezasXPrioridad;
totalesInspeccionProducto1 :totalesInspeccionProducto;

  pedimento:any;
  ordenDeCompra: any;

  tipoInspeccion:string;
  mostrarPrioridad: boolean;
  mostrarPedimento: boolean;
  mostrarOrdenDeCompra: boolean;
// @Input() copiaUniversoPartidasInspeccion = new Array<PartidaInspeccion>();
//Piezas por prioridad
  pzasP1 :number = 0;
  pzasP2 :number = 0;
  pzasP3 :number= 0;

//Devuelve las piezas tomando en cuenta singular y plural
  formatoPzaP1:any;
  formatoPzaP2:any;
  formatoPzaP3:any;

//Tiempo Estimado de Inspeccion por prioridad
  TEIPrioridad1: string;
  TEIPrioridad2: string;
  TEIPrioridad3: string;

//variables para mostrar u ocultar los recuadros por prioridad
  mostrarP1: boolean;
  mostrarP2: boolean;
  mostrarP3: boolean;

//varibales para jugar con el porcentaje de visualizacion  segun el caso
  porcentajeP1: string ;
  porcentajeP2: string ;
  porcentajeP3: string ;

//Variables para el manejo de los mensajes mostrados
  descripcionLargaP2: boolean ;
  descripcionCortaP2: boolean ;
  descripcionLargaP3: boolean ;
  descripcionCortaP3: boolean ;
  tiempo :any;

  constructor(private router: Router,private _totalpzasInsp: InspeccionService, private coreComponent: CoreContainerComponent, private comunService: ComunService) {}

  ngOnInit() {
    this.obtenerDatosInspector();
    this.obtenerTotalesPorInspector(this.inspector);
    this.mostrarPartidasInspeccion();
    this.obtenerModoInspeccion();
  //  this.obtenerPiezasInspeccionadasHoy(this.inspector);
    this.obtenerPiezasInspeccion(this.inspector);
    this.idHora = setInterval(() => {
      this.hora = this.obtenerHoraActual();
        this.cambiarColorBarra(this.TEIPrioridad1, this.hora, this.pzasTotales );

    }, 1000);
    this.subs = this.comunService.finalizar.subscribe(
      (data) =>{
          this.reinicio = data;
          //console.log(data, this.ocultaVideo);
          if(this.reinicio == true)
          {
            this.obtenerDatosInspector(); //Descomentar la linea para conectar con el usuario de la sesion.
          //  this.obtenerPiezasInspeccionadasHoy(this.inspector);
            this.obtenerPiezasInspeccion(this.inspector);
            this.idHora = setInterval(() => {
              this.hora = this.obtenerHoraActual();
              this.cambiarColorBarra(this.TEIPrioridad1, this.hora, this.pzasTotales );
            }, 1000);
          }
      });
  }

  ngOnDestroy() {
    clearInterval(this.idHora);
  }

  obtenerPiezasInspeccion(inspector: string) : any{
     this._totalpzasInsp.recibeTotalesInspecion(this.inspector).subscribe(
      data => {
         this.pzasTotales  = data.current.pzaAInspeccion;
         this.PzasInspeccionadas =  data.current.total_piezasInspeccionadas;
          this.obtenerRestante(this.pzasTotales);
        this.pzasRestantes = (this.pzasTotales - this.PzasInspeccionadas);
        this.formatoPzasRestantes = (this.pzasRestantes == 1) ?  this.pzasRestantes + ' pieza (restante)' : this.pzasRestantes + ' piezas (restantes)' ;
        this.promedio= this.obtenerPorcentaje(this.pzasTotales, this.PzasInspeccionadas) + "%";
        this.restante= this.obtenerRestante(this.pzasTotales) + "%";
        this.formatoPzasInspeccionadas = (this.PzasInspeccionadas == 1) ?  this.PzasInspeccionadas + ' pieza inspeccionada' : this.PzasInspeccionadas + ' piezas inspeccionadas';
        },error => {
        // console.log("error al obtener las piezas en inspeccion..." + error);
          }
        );
      }


    obtenerHoraActual() {
      let fecha = new Date();
      let formatoMinutos = fecha.getMinutes();
      let minutes = (formatoMinutos < 10) ? '0' + formatoMinutos : formatoMinutos;
      let formatoHoras = fecha.getHours();
      let hours = (formatoHoras < 10) ? '0' + formatoHoras : formatoHoras;
      // let FormatoSegundos = fecha.getSeconds();
      // let seconds = (FormatoSegundos < 10) ? '0' + FormatoSegundos : FormatoSegundos;
      return hours + ":" + minutes + " Hrs.";
    }

  //Funcion para obtener el porcentaje de progreso además de mostrar y ocultar los tooltip y textos
  obtenerPorcentaje(totales: number, inspeccionadas: number) {
    let porcentaje: number;
    if (totales < inspeccionadas) {
    } else if (totales == inspeccionadas) {
      porcentaje = Math.round((inspeccionadas * 100) / totales);
    } else {
      porcentaje = Math.round((inspeccionadas * 100) / totales);
      if (porcentaje <= 25) {
        this.toolTipRigth = false;
        this.textRigth = true;
        this.tooltiptextLeft = true;
        this.textLeft = false;
      } else if (porcentaje >= 90 && porcentaje <= 100) {
        this.toolTipRigth = true;
        this.textRigth = false;
        this.tooltiptextLeft = false;
        this.textLeft = true;
      } else {
        this.toolTipRigth = false;
        this.textRigth = true;
        this.tooltiptextLeft = false;
        this.textLeft = true;
      }
    }
    return porcentaje;
  }

  //Funcion para obtener porcentaje restante
  obtenerRestante(pzasTotales: number) {
    let restante = 100 - this.obtenerPorcentaje(this.pzasTotales, this.PzasInspeccionadas);
    return restante;
  }

  obtenerDatosInspector(){
      this.inspector=SessionUser.getInstance().getUser().getUsuario();
      // console.log(this.inspector);
  }



/* METODOS TIPO INSPECCION */

//Método para obtener el promedio por pieza de cada inspector.
obtenerTotalesPorInspector(inspector:string){
  this.inspector=SessionUser.getInstance().getUser().getUsuario();
  // var arregloTotalInspector : any = new Array<totalesInspeccionProducto>();
   this._totalpzasInsp.consultaDeTotalesPorInspector(this.inspector).subscribe(
    data => {
      // console.log(data); //Pruebas
        this.totalesInspeccionProducto1 = data.current;
        // let tiempoT = 1;
        this.tiempo = this.totalesInspeccionProducto1.promXpieza;
        this.TEIPrioridad1 =this.obtenerTiempoEstimado(this.pzasP1, this.tiempo);
        this.TEIPrioridad2 =this.obtenerTiempoEstimado(this.pzasP2, this.tiempo);
        this.TEIPrioridad3 =this.obtenerTiempoEstimado(this.pzasP3, this.tiempo);
      },error => {
        }
      );
    }

//Mostrar listado de partidas para inspeccion.
mostrarPartidasInspeccion(){
this.coreComponent.openModal(0);

//Método para obtener el promedio por pieza de cada inspector.
 this._totalpzasInsp.obtenerPiezasPorPrioridad().subscribe(
    data => {

      // console.log(data); //Pruebas
        this.ContadorPiezasXPrioridad1 = data.current;
        // console.log("piezasPrioridad: " + this.ContadorPiezasXPrioridad1);
        this.pzasP1 = this.ContadorPiezasXPrioridad1.p1;
        this.pzasP2 = this.ContadorPiezasXPrioridad1.p2;
        this.pzasP3 = this.ContadorPiezasXPrioridad1.p3;
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
  //Anteponiendo un 0 a los minutos si son menos de 10
  minutes = minutes < 10 ? '0' + minutes : minutes;

  //Validacion de pruebas para cuando el tiempo es menor o igual a 1 min.
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



obtenerModoInspeccion() {
  this._totalpzasInsp.obtenerModoInspeccion().subscribe(
    data => {
      this.tipoInspeccion = data.current;
    //  this.tipoInspeccion = "Por prioridad";
      console.log("tipo inspeccion: " + this.tipoInspeccion);
      this.mostrarTipoInspeccion(this.tipoInspeccion);
    },
    error => {
      console.log(error);
    }
  );

}

mostrarTipoInspeccion(tipo : any) {
  tipo = this.tipoInspeccion;
  // this.pedimento = null;
  // this.ordenDeCompra = '1234567'
  this.pedimento= this.partidaPrioridad.pedimento;
  this.pedimentoVistaEscanear.emit(this.pedimento); /// Output que se utiliza para enviar el pedimento a vista escanear.
  this.ordenDeCompra= this.partidaPrioridad.compra;

  if (tipo == "Por prioridad") {
    this.mostrarPrioridad = true;
    if (this.pedimento != null) {
      this.comunService.tipoInspeccion(false);
    } else if (this.ordenDeCompra != null) {
      this.comunService.tipoInspeccion(true);
    }
  } else if (tipo == "Por pedimento") {
    if (this.pedimento != null) {
      this.mostrarPedimento = true;
      this.comunService.tipoInspeccion(false);
    } else if (this.ordenDeCompra != null) {
      this.mostrarOrdenDeCompra=true;
      this.comunService.tipoInspeccion(true);
    }
  }
  if (this.partidaPrioridad.paisProveedor.toLowerCase() === 'Mexico'.toLowerCase() || this.partidaPrioridad.paisProveedor.toLowerCase() === 'México'.toLowerCase()) {
    this.comunService.tipoInspeccion(true);
  }
}


cambiarColorBarra(tiempoE:string, horaActual : string, piezasXInspeccionar: number){
  //let tiempoEstimado:any = tiempoE;
  let tiempoRestante:any;
  let hrSalida = '18:00 Hrs.'
  //let hrSalida = '10:00 Hrs.'

  let partsSalida: any[] = hrSalida.split(":");
  let hrActualSalida = Number(partsSalida[0]);
  let auxSalida = partsSalida[1];
  let minSalida: any[] = auxSalida.split(" ");
  let minActualSalida = Number(minSalida[0]);
  let horaSalidaAComparar = Number(hrActualSalida+ "." + minActualSalida);

  //17:49 Hrs.

  let arrayTE: any[] = tiempoE.split(" ");
  let auxTiempoE = Number(arrayTE[0]);
  let time = (piezasXInspeccionar * auxTiempoE) * 60;  // 150 * 60 = 9000
  let hr = Math.floor( time / 3600 );   //2
  let min = Math.floor( (time % 3600) / 60 ); //30


  let parts: any[] = horaActual.split(":");
  let hrActual = Number(parts[0]);
  let aux = parts[1];
  let partsmin: any[] = aux.split(" ");
  let minActual = Number(partsmin[0]);

  let sumaHoras = hrActual + hr;
  let sumaMin = minActual + min;

  if(sumaMin >= 60){
    let hrAux = (Math.floor((sumaMin * 60) / 3600)) + sumaHoras;
    let minAux = Math.floor( ((sumaMin * 60 ) % 3600) / 60 );
     tiempoRestante = Number (hrAux + '.' + minAux);
  } else {
  tiempoRestante = Number (sumaHoras +'.'+ sumaMin ) ; // 18:30 Hrs
  }
    if ( tiempoRestante > horaSalidaAComparar){
      this.mensajeBarra = this.mensajeNaranja;
      this.colorBarra = this.naranja;
    } else if(tiempoRestante >= 17.0 && tiempoRestante <= horaSalidaAComparar){
      this.mensajeBarra = this.mensajeAzul;
      this.colorBarra = this.azul;
    } else if(tiempoRestante < horaSalidaAComparar){
      this.mensajeBarra = this.mensajeVerde;
      this.colorBarra = this.verde;
    }
    }

}
