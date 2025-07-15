import { Chart } from 'chart.js';
import { Component, OnInit, Input } from '@angular/core';
import * as accounting from 'accounting';
import { Router } from '@angular/router';
import { Query } from '../../../../../class/compras/utils/query.class';
import { CobrosComponent } from '../cobros.component';
@Component({
  selector: 'pq-graficas-cobros',
  templateUrl: './graficas-cobros.component.html',
  styleUrls: ['./graficas-cobros.component.scss']
})
export class GraficasCobrosComponent implements OnInit {


  @Input() valores1: any[] = [{ label: ["Nivel"], value: [1] }];
  @Input() valores2: any[] = [{ label: ["C.Pago"], value: [1] }];
  @Input() valores3: any[] = [{ label: ["Estado"], value: [1] }];
  @Input() valores4: any[] = [{ label: ["Programado"], value: [1]}];
  @Input() valores5: any[];
  @Input() valores6: any[];
  @Input() valores7: any[] = [{ label: ["Dias"], value: [1]}];
  @Input() valores8: any[];
  @Input() valores9: any[] = [{ label: ["Tiempo"], value: [1]}];
  squery: Query = new Query();
  punterosProvee = new Array<any>();

  /* constructor(private router: Router, 
    private _insp: InspeccionService) { } */

  ngOnInit() {
    //this.donita();
    this.dona2();
    this.recibeCobros();
  }
  recibeCobros() {

  }
  dona2() {
    let valoresdona1 = [];
    let etiquetadona1 = [];
    let valoresdona2 = [];
    let etiquetadona2 = [];
    let valoresdona3 = [];
    let etiquetadona3 = [];
    let valoresdona4 = [];
    let etiquetadona4 = [];
    let valoresdona7 = [];
    let etiquetadona7 = [];
    let valoresdona8 = [];
    let etiquetadona8 = [];
    let valoresdona9 = [];
    let etiquetadona9 = [];
    let colores = ["#DD4444", "#FEC42D", "#5792F3"];
    let colores1 = ["#439DC1", "#DC931C", "#91BE5F", "#279E96", "#D93079", "#F3B23F", "#2ECCFA", "#DF74010","#088A68","#FF0040","#FFFF00"];
    let coloresP = ["#952936", "#91BE5F", "#439DC1", "#279E96", "#D93079", "#F3B23F", "#2ECCFA", "#DF74010","#088A68","#FF0040","#FFFF00"];
    let colores4 = ["#91BE5F", "#952936"];
    let coloresDias=["#0098DA", "#94BA13"];
    let etiquetas = [];
    let valores = [];
    let valores2 = [];
    let valores3 = [];
    let valores4 = [];
    let valores7 = [];
    let valores8 = [];
    let valores9 = [];
    etiquetas = ["x", "y", "z"];
    // valores = [1, 2, 3];
    this.valores1.forEach(element => {
      valoresdona1.push(element.value);
      etiquetadona1.push(element.label);


    });
    this.valores2.forEach(element => {
      valoresdona2.push(element.value);
      etiquetadona2.push(element.label);


    });
    this.valores3.forEach(element => {
      valoresdona3.push(element.value);
      etiquetadona3.push(element.label);


    });
    this.valores4.forEach(element => {
      valoresdona4.push(element.value);
      etiquetadona4.push(element.label);


    });
    this.valores7.forEach(element => {
      valoresdona7.push(element.value);
      etiquetadona7.push(element.label);


    });
    this.valores8.forEach(element => {
      valoresdona8.push(element.value);
      etiquetadona8.push(element.label);


    });

    this.valores9.forEach(element => {
      valoresdona9.push(element.value);
      etiquetadona9.push(element.label);
    });
    try {
      let canvasDiv1 = document.querySelector('#doughnut1Div1');
      canvasDiv1.removeChild(document.querySelector('#doughnut1'));
      document.querySelector('#doughnut1Div1').insertAdjacentHTML('afterbegin', '<canvas id="doughnut1"></canvas>');

      let canvasDiv2 = document.querySelector('#doughnut1Div2');
      canvasDiv2.removeChild(document.querySelector('#doughnut2'));
      document.querySelector('#doughnut1Div2').insertAdjacentHTML('afterbegin', '<canvas id="doughnut2"></canvas>');

      let canvasDiv3 = document.querySelector('#doughnut1Div3');
      canvasDiv3.removeChild(document.querySelector('#doughnut3'));
      document.querySelector('#doughnut1Div3').insertAdjacentHTML('afterbegin', '<canvas id="doughnut3"></canvas>');

      let canvasDiv4 = document.querySelector('#doughnut1Div4');
      canvasDiv2.removeChild(document.querySelector('#doughnut4'));
      document.querySelector('#doughnut1Div4').insertAdjacentHTML('afterbegin', '<canvas id="doughnut4"></canvas>');

      let canvasDiv5 = document.querySelector('#doughnut1Div5');
      canvasDiv5.removeChild(document.querySelector('#doughnut5'));
      document.querySelector('#doughnut1Div2').insertAdjacentHTML('afterbegin', '<canvas id="doughnut5"></canvas>');

      let canvasDiv6 = document.querySelector('#doughnut1Div6');
      canvasDiv6.removeChild(document.querySelector('#doughnut6'));
      document.querySelector('#doughnut1Div6').insertAdjacentHTML('afterbegin', '<canvas id="doughnut6"></canvas>');

      let canvasDiv7 = document.querySelector('#doughnut1Div7');
      canvasDiv6.removeChild(document.querySelector('#doughnut7'));
      document.querySelector('#doughnut1Div7').insertAdjacentHTML('afterbegin', '<canvas id="doughnut7"></canvas>');

      let canvasDiv8 = document.querySelector('#doughnut1Div8');
      canvasDiv6.removeChild(document.querySelector('#doughnut8'));
      document.querySelector('#doughnut1Div8').insertAdjacentHTML('afterbegin', '<canvas id="doughnut7"></canvas>');

      let canvasDiv9 = document.querySelector('#doughnut1Div9');
      canvasDiv6.removeChild(document.querySelector('#doughnut9'));
      document.querySelector('#doughnut1Div9').insertAdjacentHTML('afterbegin', '<canvas id="doughnut9"></canvas>');

    } catch (error) {
      console.log('No hay elementos hijos, error: ' + error);
    }
    this.createDoughnut('doughnut1', etiquetadona1, valoresdona1, colores1);
    this.createDoughnut('doughnut2', etiquetadona2, valoresdona2, colores1);
    this.createDoughnut('doughnut3', etiquetadona3, valoresdona3, coloresP);
    this.createDoughnut('doughnut4', etiquetadona4, valoresdona4, coloresP);
    this.createDoughnut('doughnut5', etiquetadona1, valoresdona1, colores1);
    this.createDoughnut('doughnut6', etiquetadona2, valoresdona2, colores1);
    this.createDoughnut('doughnut7', etiquetadona7, valoresdona7, colores1);
    this.createDoughnut('doughnut8', etiquetadona8, valoresdona8, colores1);
    this.createDoughnut('doughnut9', etiquetadona9, valoresdona9, colores4);

  }

  createDoughnut(element: any, etiquetas: any[], valores: any[], colores: any[]) {
    let oilCanvas = document.getElementById(element);


    Chart.defaults.global.defaultFontFamily = "Roboto";
    Chart.defaults.global.defaultFontSize = 12;
    Chart.defaults.global.animation.duration = 2100;
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
      cutoutPercentage: 55,
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

    let pieChart = new Chart(oilCanvas, {
      type: 'doughnut',
      data: oilData,
      options: chartOptions,

      plugins: [{
        id: 'my-plugin',
        afterDraw: function (chart, option) {
          chart.ctx.fillStyle = 'black'
          chart.ctx.textBaseline = 'middle'
          chart.ctx.font = '10px Roboto'
          //   chart.ctx.fillText('Totales', chart.width / 2 - 20, chart.width / 3.5, 200);
          // chart.ctx.fillText('Monto:', chart.width / 2 - 20, chart.width / 2.9, 200);
          //chart.ctx.fillText('Clientes:', chart.width / 2 - 20, chart.width / 2.5, 200);
          //chart.ctx.fillText('Cobros:', chart.width / 2 - 20, chart.width /2.2, 200);
          //chart.ctx.fillText('Partidas:', chart.width / 2 - 20, chart.width / 1.9, 200);
          //chart.ctx.fillText('Piezas:', chart.width / 2 - 20, chart.width / 1.7, 200);
        }

      }]

    })
  }


}
