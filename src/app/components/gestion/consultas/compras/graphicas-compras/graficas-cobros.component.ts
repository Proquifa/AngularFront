import { Chart } from 'chart.js';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as accounting from 'accounting';
import { Router } from '@angular/router';
import { Query } from '../../../../../class/compras/utils/query.class';


@Component({
  selector: 'pq-graficas-dona',
  templateUrl: './graficas-cobros.component.html',
  styleUrls: ['./graficas-cobros.component.scss']
})
export class GraficasComponent implements OnInit {


  TotalesVacios = {
    partidas: 0,
    totalpiezas: 0,
    totalmonto: (0.0000).toFixed(2),
    compras: 0,
  }
  etiquetasVacias = [0];


  @Input() opcion: number = 0;

  @Input() Titulo1: String = "TOP 10 PROVEEDORES";
  @Input() Titulo2: String = "AVISOS DE CAMBIO";
  @Input() Titulo3: String = "COMPRADORES";
  @Input() Titulo4: String = "ABIERTO VS CERRADO";
  @Input() Titulo5: String = "TOP 10 PRODUCTOS";
  @Input() Titulo6: String = "TIPO";
  @Input() Titulo7: String = "MARCA";
  @Input() Titulo8: String = "ESTADO";
  @Input() Titulo9: String = "ET vs FT";
  @Input() id: String;

  @Input() grafica1 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
  @Input() grafica2 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
  @Input() grafica3 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
  @Input() grafica4 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
  @Input() grafica5 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
  @Input() grafica6 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
  @Input() grafica7 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
  @Input() grafica8 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
  @Input() grafica9 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };

  @Input() Refresh: boolean;



  public pieChart;
  @Input() Elements: any[] = [{ titulo: 'g1' }, { titulo: 'g2' }, { titulo: 'g3' }]
  squery: Query = new Query();
  punterosProvee = new Array<any>();

  /* constructor(private router: Router, 
    private _insp: InspeccionService) { } */




  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

    console.log(changes);

  }


  ngOnInit() {

    if(this.opcion==0){

      this.donita();
      // this.dona2();
      /*  this.recibePartidas(); */
  
  
      let pieChart = this.pieChart;
      let total = this.grafica1.totales;
      document.getElementById("g1").onclick = function (evt, ) {
  
  
        var activePoints = pieChart.getElementsAtEvent(evt);
        var firstPoint = activePoints[0];
        var label = pieChart.data.labels[firstPoint._index];
        var value = pieChart.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];
  
  
      };
    }else{

      if(this.opcion==1){

        this.donita2();
      }      
    }

  }


  donita2() {


    let colores = ["#94BA13 ", "#0098DA "];
    let etiquetas = ["Total"];
    let valores = [];

    let coloresP = ["#439DC1", "#C5792E ", "#2C9484 ", "#E34B43 ", "#CC3185", "#A9CA4E", "#524B96", "#EFCD50", "#a33532", "5d90dc"];
    etiquetas = ["Sin contenido",];
    valores = [1];
    let colorVacio = ["#a0a0a0"];

    this.createDoughnut("g21", etiquetas, valores, colorVacio);


  }


  donita() {


    let colores = ["#94BA13 ", "#0098DA "];
    let etiquetas = ["Total"];
    let valores = [];

    let coloresP = ["#439DC1", "#C5792E ", "#2C9484 ", "#E34B43 ", "#CC3185", "#A9CA4E", "#524B96", "#EFCD50", "#a33532", "5d90dc"];
    etiquetas = ["Sin contenido",];
    valores = [1];
    let colorVacio = ["#a0a0a0"];


    let cadena = "" + this.id;

    console.log(this.grafica1);
    this.createDoughnut("g1", this.grafica1.etiquetas, this.grafica1.valores, coloresP);
    this.createDoughnut("g2", etiquetas, valores, colorVacio);
    this.createDoughnut("g3", etiquetas, valores, colorVacio);
    this.createDoughnut("g4", etiquetas, valores, colorVacio);
    this.createDoughnut("g5", etiquetas, valores, colorVacio);
    this.createDoughnut("g6", etiquetas, valores, colorVacio);
    this.createDoughnut("g7", etiquetas, valores, colorVacio);
    this.createDoughnut("g8", etiquetas, valores, colorVacio);
    this.createDoughnut("g9", etiquetas, valores, colorVacio);


  }

  createDoughnut(element: any, etiquetas: any[], valores: any[], colores: any[]) {



    let oilCanvas = document.getElementById(element);


    Chart.defaults.global.defaultFontFamily = "Roboto";
    Chart.defaults.global.defaultFontSize = 12;
    Chart.defaults.global.animation.duration = 3000;
    Chart.defaults.global.animation.easing = 'easeOutBounce';

    let oilData = {
      labels: etiquetas,
      datasets: [
        {
          data: valores,
          backgroundColor: colores,
          borderColor: "black",
          borderWidth: 0
        }]
    };

    let chartOptions = {
      maintainAspectRatio: false,
      cutoutPercentage: 60,
      circumference: 2 * Math.PI,
      legend: {
        display: false,
        position: 'right',
        fontFamily: 'Roboto',
        fontSize: '12px',
        padding: 20
      },
      tooltips: {
        display: true,
        backgroundColor: '#000',

      }
    };



    this.pieChart = new Chart(oilCanvas, {
      type: 'doughnut',
      data: oilData,
      options: chartOptions,


    }

    );
  }


}
