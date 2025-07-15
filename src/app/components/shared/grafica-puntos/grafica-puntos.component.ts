import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
import * as accounting from 'accounting';
import { Options } from 'selenium-webdriver/chrome';
import { SessionUser } from './../../../services/session/session.service';
import { ComunService } from '../../../services/comun/comun.service';
import { Empleado } from '../../../class/Empleado.class';

@Component({
  selector: 'pq-grafica-puntos',
  templateUrl: './grafica-puntos.component.html',
  styleUrls: ['./grafica-puntos.component.scss']
})

export class GraficaPuntosComponent {
  @Input() listaQuincena: any;
  @Input() listaMes: any ;
  @Input() listaAnio: any;

listaAnioEjemplo: any = {
  listaLabel: [1, 3, 9],
  listaDatos: [10, 15, 5]
};
  etiquetasGrafica: any[];
  datosAño: any[];
  datosMes: any[];
  datosQuincena: any[];
  promedio1: any[];
  element = 'lineChart1';
  opcionSeleccionado:string;
  evento: string = "Pzas. inspeccionadas";
  rangos: any = [
    { nombre: 'Por Año', key: 1 },
    { nombre: 'Por Mes', key: 2 },
    { nombre: 'Por Quincena', key: 3 },

  ];
  // rangos: any[] = ["Por Año","Por Mes","Por Quincena"];
  defaultSelected: any = { nombre: 'Por Año' };

  verSeleccion: string = '';
  inspector: string;
  anio: any[];
  listaDatosAux: any = [];

  constructor() { }

  ngOnInit() {
    console.log(this.listaMes);
    this.getGraficaLinea("Por Año");
    this.obtenerDatosInspector();
  }
  ngOnChanges() {
    this.getGraficaLinea("Por Año");
    this.obtenerDatosInspector();
  }
  infoCombo(index: any) {
    this.opcionSeleccionado = index.nombre;
    this.getGraficaLinea(index.nombre);

  }



  getGraficaLinea(opcion: any) {

    let fecha = new Date();
    let mes = fecha.getMonth() + 1;
    let año = fecha.getFullYear() ;
    let tipoAño = "/"+ año;
    let tipoMes = "/"+ mes;
    // let mes = 2; //Test

    if (opcion == "Por Año") {
      try {

        this.anio = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', "Ago", "Sep", "Oct", "Nov", "Dic"];
        this.etiquetasGrafica = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        if (this.datosAño === undefined) {
          this.datosAño = this.filtraOpciones(this.listaAnio, this.etiquetasGrafica);
        }
        let canvasDiv = document.querySelector('#lineChart1Div');
        canvasDiv.removeChild(document.querySelector('#lineChart1'));
        document.querySelector('#lineChart1Div').insertAdjacentHTML('afterbegin', '<canvas id="lineChart1" style="display: block; height: 180px; width: 525px;"></canvas>');
      } catch (error) {
        console.log('No hay elementos hijos, error: ' + error);
      }
      this.promedio1 = this.promedio(this.datosAño);
      this.createLineBar(this.element, this.anio , this.datosAño, this.promedio1);
      //Fin caso por año.

    } else if (opcion == "Por Mes") {
      var anio = fecha.getFullYear();
      var bisiesto = this.obtenerAnnioBisiesto(anio);
      let promedio:any = [];
      //this.filtraOpciones(this.listasMes, this.etiquetasGrafica);
      try {
        if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
          this.etiquetasGrafica = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
          //  this.datos= [80, 100, 1, 9, 100, 27, 38,40, 10, 12, 60, 60, 2, 18, 48, 77, 9, 100, 27, 40, 10, 12, 60, 60, 2, 34, 45, 46, 10, 92, 30 ];
          if (this.datosMes === undefined) {
            this.datosMes = this.filtraOpciones(this.listaMes, this.etiquetasGrafica);
          }
          // console.log("Mes con 31 dias");
        } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
          this.etiquetasGrafica = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
          this.datosMes = this.filtraOpciones(this.listaMes, this.etiquetasGrafica);
          // console.log("Mes con 30 dias");
        } else if (mes == 2) {
          if (bisiesto == true) {
            this.etiquetasGrafica = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'];
            if (this.datosMes === undefined) {
              this.datosMes = this.filtraOpciones(this.listaMes, this.etiquetasGrafica);
            }
          } else if (bisiesto == false) {
            this.etiquetasGrafica = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'];
            if (this.datosMes === undefined) {
              this.datosMes = this.filtraOpciones(this.listaMes, this.etiquetasGrafica);
            }
          }

        }
        let canvasDiv = document.querySelector('#lineChart1Div');
        canvasDiv.removeChild(document.querySelector('#lineChart1'));
        document.querySelector('#lineChart1Div').insertAdjacentHTML('afterbegin', '<canvas id="lineChart1" style="display: block; height: 180px; width: 525px;"></canvas>');
      } catch (error) {
        console.log('No hay elementos hijos, error: ' + error);
      }
      promedio = this.promedio(this.datosMes);
      this.createLineBar(this.element, this.etiquetasGrafica, this.datosMes, promedio);

      //Fin caso por mes.

    } else if (opcion == "Por Quincena") {
      let dia = fecha.getDate();
      // let dia = 15;
      let promedio:any = [];

      try {
        if (dia <= 15) {
          this.etiquetasGrafica = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
          if (this.datosQuincena === undefined) {
            this.datosQuincena = this.filtraOpciones(this.listaQuincena, this.etiquetasGrafica);
          }
        } else if (dia > 15) {
          if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
            this.etiquetasGrafica = ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
            if (this.datosQuincena === undefined) {
              this.datosQuincena = this.filtraOpciones(this.listaQuincena, this.etiquetasGrafica);
            }
          } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
            this.etiquetasGrafica = ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
            if (this.datosQuincena === undefined) {
              this.datosQuincena = this.filtraOpciones(this.listaQuincena, this.etiquetasGrafica);
            }
          } else if (mes == 2) {
            // var anio = 1992;
            var anio = fecha.getFullYear();
            var bisiesto = this.obtenerAnnioBisiesto(anio);
            if (bisiesto == true) {
              this.etiquetasGrafica = ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'];
              if (this.datosQuincena === undefined) {
                this.datosQuincena = this.filtraOpciones(this.listaQuincena, this.etiquetasGrafica);
              }

            } else if (bisiesto == false) {
              this.etiquetasGrafica = ['16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'];
              if (this.datosQuincena === undefined) {
                this.datosQuincena = this.filtraOpciones(this.listaQuincena, this.etiquetasGrafica);
              }
            }

          }
        }

        let canvasDiv = document.querySelector('#lineChart1Div');
        canvasDiv.removeChild(document.querySelector('#lineChart1'));
        document.querySelector('#lineChart1Div').insertAdjacentHTML('afterbegin', '<canvas id="lineChart1" style="display: block; height: 180px; width: 525px;"></canvas>');

      } catch (error) {
        console.log('No hay elementos hijos, error: ' + error);
      }
      promedio = this.promedio(this.datosQuincena);
      this.createLineBar(this.element, this.etiquetasGrafica, this.datosQuincena, promedio);

    } else {
      console.log("Ha seleccionado una opción fuera de parametros.");
    }
  }

  // Funcion promedio y  compia del arreglo con promedio
  public promedio(datos:any):any {
    let totalSuma = datos.reduce((total, numero) => {
      return total + numero;
    }, 0);
    let promedio = Math.round((totalSuma) / ((datos).length)); // operacion
    let nuevosDatos = datos.map((numero) => {
      return promedio;
    })
    return nuevosDatos;
  }

  //Funcion para crear la grafica de lineas con promedio

  createLineBar(element: any, etiquetas: any[], valores: any[], promedio: any[]) {
    Chart.defaults.global.animation.duration = 2000;
    Chart.defaults.global.animation.easing = 'easeOutBounce';
    Chart.defaults.global.defaultFontFamily = "Roboto";
    Chart.defaults.global.defaultFontSize = 10;

    let ctx = this.element;
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: etiquetas  ,
        datasets: [{
          label: 'Total de pzas',
          data: valores,
          backgroundColor: 'transparent',
          borderColor: '#29ABE2',
          fill: false,
          borderWidth: 2,
          lineTension: 0.1,
          pointBorderColor: 'transparent',
          pointBorderWidth: 0,
          responsive: true
        },
        {
          label: 'Promedio ',
          data: promedio,
          backgroundColor: 'transparent',
          borderColor: '#008A98',
          fill: false,
          borderDash: [5, 5],
          borderWidth: 2,
          lineTension: 0,
          pointBorderColor: 'transparent',
          pointBorderWidth: 0,
          responsive: true
        }],
      },

      options: {
       maintainAspectRatio: true,
        tooltips: {
          mode: 'point',
          callbacks: {
           label: function(tooltipItem, data) {
             return data.datasets[tooltipItem.datasetIndex].label + ": " + tooltipItem.yLabel;
           }
          }
        },
        legend: {
          position: "none"
        },
        scales: {
          yAxes: [{
            zeroLineColor: "#999999",
            color: '#3B8EDE',
            fontColor: "transparent",
            lineWidth: 1,
            padding: 0,
            fontStyle: "bold",
            scaleLabel: {
              display: true,
              fontStyle: "bold",
              fontSize: 11,
              labelString: 'Piezas'
            },
            gridLines: {
              zeroLineColor: "#999999",
              color: "white",
              lineWidth: 1,
              drawBorder: true,
              // zeroLineWidth: 1
            }, ticks: {
              padding: 2,
              fontColor: "#999999",
              fontSize: 10,
              fontStyle: "bold",
              //display:false
            }
          }],
          xAxes: [{
            fontColor: "transparent",
            display: true,
            padding: 0,
            scaleLabel: {
              display: true,
              fontSize: 11,
              fontStyle: "bold",
              labelString: 'Periodo de tiempo'
            },
            gridLines: {
              zeroLineColor: "#999999",
              color: "#999999",
              lineWidth: 2,
              drawTicks: false,
              display: false,
              padding: 0,
              drawBorder: true,
              pointBorderWidth: 2,
            },
            ticks: {
              padding: 9,
              fontColor: "#999999",
              fontSize: 10,
              fontStyle: "bold",
              //display:false
            }
          }]
        }
      }
    });
  }

  obtenerDatosInspector() {
    this.inspector = SessionUser.getInstance().getUser().getUsuario();
    //  this.inspector = SessionUser.getInstance().getUser().getUsuario();
  }

  obtenerAnnioBisiesto(anio: number): Boolean {
    if ((anio % 4 == 0) && ((anio % 100 != 0) || (anio % 400 == 0))) {
      return true;
    } else
      return false;
  }



  filtraOpciones(listasRecibidas: any, listaLabel: any): any {
    this.listaDatosAux = [];
    for (let j: number = 0; j < listasRecibidas.listaLabel.length; j++) {
      let i: number;
      for (i = 0; i < listaLabel.length; i++) {
        if (listasRecibidas.listaLabel[j] == listaLabel[i]) {
          this.listaDatosAux[i] = listasRecibidas.listaDatos[j];
        } else {
          if (this.listaDatosAux[i] == undefined) {
            this.listaDatosAux[i] = 0;
          }
        }
      }

    }

    return this.listaDatosAux;
  }





}
