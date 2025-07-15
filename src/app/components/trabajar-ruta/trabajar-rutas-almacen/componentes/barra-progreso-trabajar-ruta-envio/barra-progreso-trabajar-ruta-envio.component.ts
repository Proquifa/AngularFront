import {OnInit, Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { InspeccionService } from '../../../../../services/inspeccion/inspeccion.service';
import {TrabajarRutasEnvioService} from '../../trabajar-rutas-envio/trabajar-rutas-envio-informacion/trabajar-rutas-envio.services';
@Component({
  selector: 'pn-barra-progreso-trabajar-ruta-envio',
  templateUrl: './barra-progreso-trabajar-ruta-envio.component.html',
  styleUrls: ['./barra-progreso-trabajar-ruta-envio.component.scss']
})
export class BarraProgresoTrabajarRutaEnvioComponent implements OnInit {
  
  constructor(private router: Router,private _totalpzasInsp: InspeccionService, private  _datosPrio: TrabajarRutasEnvioService) {}
        @Input() totPiezas: number;
        @Input() packingTotales: number;
        inspector:string ; //Descomentar la linea para conectar con el usuario de la sesion.
        // inspector:string = "aHernandezM";
        evento: string = "trabajo de ruta";
        mensaje: string = "Con el ritmo de inspección actual, lograrás cumplir el objetivo";
        //Estos son los valores centrales del componente, simplemente al modificar estos datos el comportamiento del componente cambia-
        PzasInspeccionadas: any = 10;
        pzasTotales : any = 150;
        //Variables para darle formato al texto
        formatoPzasInspeccionadas;
        pzasRestantes: number;
        formatoPzasRestantes;
        //Variables para la hora
        hora;
        idHora;
        //Variables para la barra de progreso
        promedio: string;
        restante: string;
        //Variables para mostrar el tooltip y el texto;
        toolTipRigth: boolean;
        textRigth: boolean;
        tooltiptextLeft: boolean;
        textLeft: boolean;
        valorTooltip:any;
        obtenerVal: boolean;
        pzasP3: number;
        pzasP2: number;
        pzasP1: number;
        tiempo: any;
        TEIPrioridad1: any;
        TEIPrioridad2: any;
        TEIPrioridad3: any;
  PackingList: any [] = [];
  ///////////// variables de mensaje para barra de progreso y el color////////////////////////////////
  mensajeNaranja = 'Con el ritmo de Trabajo actual, no lograrás cumplir el objetivo.';
  mensajeAzul = 'Acelera el ritmo de Tabajo, para que logres el objetivo.';
  mensajeVerde = 'Con el ritmo de Trabajo actual, lograrás cumplir el objetivo.';
  colorBarra: any;
  naranja = '#FF6700';
  azul = '#0098DA';
  verde = '#94BA13 ';
    ngOnInit() {
          //this.pzasRestantes = (this.pzasTotales - this.PzasInspeccionadas);
        //   this.formatoPzasRestantes = (this.pzasRestantes == 1) ?  this.pzasRestantes + ' pieza (restante)' : this.pzasRestantes + ' piezas (restantes)' ;
          // this.obtenerDatosInspector(); //Descomentar la linea para conectar con el usuario de la sesion.
         // this.obtenerPiezasInspeccionadasHoy(this.inspector);
          console.log('Soy total de piezas barra---->', this.totPiezas);
          this.PzasInspeccionadas = this.totPiezas;
          this.pzasTotales = this.packingTotales;
          this.obtenerPiezasInspeccion(this.inspector);
          this.idHora = setInterval(() => {
            this.hora = this.obtenerHoraActual();
          }, 1000);
          this.obtenerTiempoTrabajoEnvio();
        }
        ngOnDestroy() {
          clearInterval(this.idHora);
        }
        obtenerPiezasInspeccion(inspector: string) : any{
          //  this.obtenerRestante(this.pzasTotales);
             this.restante= this.obtenerRestante(this.pzasTotales) + "%";
            this.pzasRestantes = (this.pzasTotales - this.PzasInspeccionadas);
            this.formatoPzasRestantes = (this.pzasRestantes == 1) ?  this.pzasRestantes + ' pieza (restante)' : this.pzasRestantes + ' Packing List (restantes)' ;
            this.promedio= this.obtenerPorcentaje(this.pzasTotales, this.PzasInspeccionadas) + "%";
          this.formatoPzasInspeccionadas = (this.PzasInspeccionadas == 1) ?  this.PzasInspeccionadas + ' pieza inspeccionada' : this.PzasInspeccionadas + ' Packing List enviados';
            }
          obtenerPiezasInspeccionadasHoy(inspector: string) : any{
              this.formatoPzasInspeccionadas = (this.PzasInspeccionadas == 1) ?  this.PzasInspeccionadas + ' pieza inspeccionada' : this.PzasInspeccionadas + ' Packin List Trabajadas'
              this.valorTooltip= this.PzasInspeccionadas + ' Packin List Trabajadas'
                   console.log("Las piezas que ya han sido inspeccionadas hoy son : " + this.PzasInspeccionadas);
                  return this.PzasInspeccionadas;
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
        // Funcion para obtener el porcentaje de progreso además de mostrar y ocultar los tooltip y textos
        obtenerPorcentaje(totales: number, inspeccionadas: number) {
          let porcentaje: number;
          if (totales < inspeccionadas) {
            alert("El numero de piezas inspeccionadas es mayor que las piezas totales");
          } else if (totales == inspeccionadas) {
            porcentaje = Math.round((inspeccionadas * 100) / totales);
            // alert("El porcentaje es: " + porcentaje + "%" + "\nFelicidades has inspeccionado todas las piezas");
          } else {
            porcentaje = Math.round((inspeccionadas * 100) / totales);
            if (porcentaje <= 25) {
              this.toolTipRigth = false;
              this.textRigth = true;
              this.tooltiptextLeft = true;
              this.textLeft = false;
            } else if (porcentaje >= 85 && porcentaje <= 100) {
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
        // Funcion para obtener porcentaje restante
        obtenerRestante(pzasTotales: number) {
          let restante = 100 - this.obtenerPorcentaje(this.pzasTotales, this.PzasInspeccionadas);
          return restante;
        }
        // obtenerDatosInspector(){
        //     this.inspector=SessionUser.getInstance().getUser().getUsuario();
        //     // console.log(this.inspector);
        // }


  /*******************************************************************************************************/
  // Método para obtener el promedio por pieza de cada packing list.
  obtenerTiempoTrabajoEnvio() {
    this._datosPrio.obtenerTiempoTrabajoEnvio().subscribe(
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
        this.obtenerTotalTiemporEstimado(this.TEIPrioridad1, this.TEIPrioridad2,  this.TEIPrioridad3);
      });
  }
  /////////////////////////////////////  METODO PARA OBTENER EL TIEMPO TOTAL ESTIMADO DE LAS TRES PRIORIDADES ///////////////
  obtenerTotalTiemporEstimado(tiempoP1, tiempoP2, tiempoP3) {
    let tiempoEstimadoP1: any = tiempoP1;
    let tiempoEstimadoP2: any = tiempoP2;
    let tiempoEstimadoP3: any = tiempoP3;
    let tiempoTot: any[] = [];
    let hrP1 = 0;
    let hrP2 = 0;
    let hrP3 = 0;
    let minP1 = 0;
    let minP2 = 0;
    let minP3 = 0;
    // console.log('p1::', tiempoEstimadoP1);
    // console.log('p2::', tiempoEstimadoP2);
    // console.log('p3::', tiempoEstimadoP3);
    ////// calcular prioridad uno
    if (this.pzasP1 > 0 ) {
      let arrayTE1: any[] = tiempoEstimadoP1.split(' ');
      if (arrayTE1.length > 3 ) {
        hrP1 = Number(arrayTE1[0]); // 1
        minP1 = Number(arrayTE1[2]); // 15
      } else if (arrayTE1.length === 2) {
        hrP1 = 0; // 1
        let minP1 = Number(arrayTE1[0]); //
      } else {
        hrP1 = 0; // 1
        minP1 = 0; //
      }
    } else {
      hrP1 = 0; // 1
      minP1 = 0; //
    }
    /////// calcular la prioridad 2
    if (this.pzasP2 > 0) {
      let arrayTE2: any[] = tiempoEstimadoP2.split(' ');
      if (arrayTE2.length > 3) {
        hrP2 = Number(arrayTE2[0]); // 1
        minP2 = Number(arrayTE2[2]); // 15
      } else if (arrayTE2.length === 2) {
        hrP2 = 0; // 0
        let minP2 = Number(arrayTE2[0]); //
      } else {
        hrP2 = 0; // 0
        minP2 = 0;
      }
    } else {
      hrP2 = 0; // 0
      minP2 = 0;
    }
    if (this.pzasP3 > 0) {
      /////// calcular la prioridad 3
      let arrayTE3: any[] = tiempoEstimadoP3.split(' ');
      if (arrayTE3.length > 3) {
        hrP3 = Number(arrayTE3[0]); //
        minP3 = Number(arrayTE3[2]); //
      } else if (arrayTE3.length === 2) {
        hrP3 = 0; // 1
        minP3 = Number(arrayTE3[0]); //
      } else {
        hrP3 = 0; // 1
        minP3 = 0; //
      }
    } else {
      hrP3 = 0; // 1
      minP3 = 0; //
    }
    let sumHrs = hrP1 + hrP2 + hrP3;
    let sumMin = minP1 +minP2 +minP3;
    if (sumMin >= 60) {
      let hrAux = (Math.floor((sumMin * 60) / 3600)) + sumHrs;
      let minAux = Math.floor( ((sumMin * 60 ) % 3600) / 60 );
      tiempoTot.push(hrAux);
      tiempoTot.push(minAux);
    } else {
      tiempoTot.push(sumHrs);
      tiempoTot.push(sumMin);
    }
    console.log( ' Total tiempo::', tiempoTot);
    // return tiempoTot;
    let horaActural = this.obtenerHoraActual();
    this.cambiarColorBarra(tiempoTot, horaActural);
  }
  ///////////////////// METODO PARA COLOCAR EL MENSAJE DE L BARRA DE PROGRESO SEGUN EL TIEMPO ESTIMADO Y LA HORA DE SALIDA////
  cambiarColorBarra(tiempoE: any, horaActual: string) {
    console.log('Entre a cambiar color');
    console.log('Soy tiempo estimado', tiempoE);
    console.log('Soy tiempo eactual', horaActual);
    let hr = tiempoE [0];
    let min = tiempoE [1];
    //let tiempoEstimado:any = tiempoE;
    let tiempoRestante:any;
    // let hrSalida = '18:00 Hrs.'
    let hrSalida = '18:00 Hrs.';
    let hrRango = '17:00 Hrs.';
////////////////// SE CONVIERTE LA HORA DE SALIDA A NUMERICO //////////////////////////////////
    let partsSalida: any[] = hrSalida.split(':');
    let hrActualSalida = Number(partsSalida[0]);
    let auxSalida = partsSalida[1];
    let minSalida: any[] = auxSalida.split(' ');
    let minActualSalida = Number(minSalida[0]);
    let horaSalidaAComparar = Number(hrActualSalida + '.' + minActualSalida);

    let partsSalidaR: any[] = hrRango.split(':');
    let hrActualSalidaR = Number(partsSalidaR[0]);
    let auxSalidaR = partsSalidaR[1];
    let minSalidaR: any[] = auxSalidaR.split(' ');
    let minActualSalidaR = Number(minSalidaR[0]);
    let horaSalidaACompararR = Number(hrActualSalidaR + '.' + minActualSalidaR);

/////////////// SE CONVIERTE LA HORA ACTUAL A NUMERICO ////////////////////////////////////
    const parts: any[] = horaActual.split(':');
    const hrActual = Number(parts[0]);
    const aux = parts[1];
    const partsmin: any[] = aux.split(' ');
    const minActual = Number(partsmin[0]);
    const sumaHoras = hrActual + hr;
    const sumaMin = minActual + min;
    // console.log('sum de hora + lo que fal-->', sumaHoras, ':', sumaMin);
    if (sumaMin >= 60) {
      const hrAux = (Math.floor((sumaMin * 60) / 3600)) + sumaHoras;
      const minAux = Math.floor( ((sumaMin * 60 ) % 3600) / 60 );
      tiempoRestante = Number (hrAux + '.' + minAux);
    } else {
      tiempoRestante = Number (sumaHoras +'.'+ sumaMin ) ; // 18:30 Hrs
    }
    if ( (tiempoRestante > horaSalidaACompararR) && (tiempoRestante < horaSalidaAComparar)) {
      this.mensaje = this.mensajeAzul;
      this.colorBarra = this.azul;
    } else if ( tiempoRestante > horaSalidaAComparar) {
      this.mensaje = this.mensajeNaranja;
      this.colorBarra = this.naranja;
    } else if (tiempoRestante < horaSalidaAComparar) {
      this.mensaje = this.mensajeVerde;
      this.colorBarra = this.verde;
    }
  }

  /*CALCULAR TIEMPO ESTIMADO*/
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
}
