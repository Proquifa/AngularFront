import { Component, OnInit, Input } from '@angular/core';
import {AccountingFormatNumber2Decimal} from '../../../pipes/accounting/accounting.pipe';
import {Chart} from 'chart.js';
@Component({
  selector: 'pn-grafica-barras',
  templateUrl: './grafica-barras.component.html',
  styleUrls: ['./grafica-barras.component.scss']
})
export class GraficaBarrasComponent implements OnInit {
  @Input() idGrafica: string = "";
  @Input() data: any;
  /*Ejemplo ::
  * data = {
    barBackground : [],
    labels : [],
    values  []
   }
  --
   data: {
        labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
        datasets: [{
          data: densityData.data,
          backgroundColor: ['red', 'pink', 'orange', 'blue', 'yellow']
        }]
      }
  */
  canvas: any;
  ctx: any;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {

    this.idGrafica = this.idGrafica + "chartBar";
    console.log(this.idGrafica);
    this.canvas = document.getElementById(this.idGrafica);
    this.ctx = this.canvas.getContext('2d');

    Chart.defaults.global.defaultFontFamily = "Roboto";
    Chart.defaults.global.defaultFontSize = 12;
    Chart.defaults.global.animation.duration = 2100;
    Chart.defaults.global.animation.easing = "easeOutBounce";

    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: this.data.labels,
        datasets: [{
          data: this.data.values,
          backgroundColor: this.data.barBackground
        }]
      },
      options: {
        cutoutPercentage: 70,
        maintainAspectRatio: false,
        responsive: true,
        display: true,
        tooltips: {
          enabled: false
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            },
            maxBarThickness: 80,
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
          }]
        }
      }
    });
  }
}
