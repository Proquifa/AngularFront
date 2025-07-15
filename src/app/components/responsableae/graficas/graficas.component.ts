import {Chart} from 'chart.js';
import { Component, OnInit } from '@angular/core';
import * as accounting from 'accounting';
import { PartidaCompra } from '../../../class/compras/PartidaCompra.class';
import { InspeccionService } from '../../../services/inspeccion/inspeccion.service';
import { Router } from '@angular/router';
import { Query } from '../../../class/compras/utils/query.class';
@Component({
  selector: 'pn-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss']
})
export class GraficasComponent implements OnInit {

  squery:Query = new Query();
  punterosProvee = new Array<any>();

  /* constructor(private router: Router,
    private _insp: InspeccionService) { } */

  ngOnInit() {
    this.donita();
    this.dona2();
   /*  this.recibePartidas(); */
  }

  donita(){
    let colores = ["#94BA13 ", "#0098DA "];
    let etiquetas = [];
    let valores = [];

      etiquetas = ["A", "B"];
      valores = [2, 2];

      try{
        let canvasDiv = document.querySelector('#doughnut1Div');
      canvasDiv.removeChild(document.querySelector('#doughnut1'));
      document.querySelector('#doughnut1Div').insertAdjacentHTML('afterbegin', '<canvas id="doughnut1"></canvas>');

      }catch (error) {
          console.log('No hay elementos hijos, error: '+error);
        }

        this.createDoughnut('doughnut1', etiquetas, valores, colores);


  }

  dona2(){
    let colores = ["#DD4444", "#FEC42D", "#5792F3"];
    let coloresP = ["#0098DA", "#94BA13", "#900280", "#279E96","#D93079" , "#F3B23F"];
    let etiquetas = [];
    let valores = [];
    let valores2 = [];
    /* if (data.length !== 0) { */
      etiquetas = ["x", "y", "z"];
      valores = [1, 2, 3];
      valores2 = [1, 2, 3, 4, 5, 6];
    /* } else {
      etiquetas = [];
      valores = [0, 0, 0];
    } */
    try {
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

    } catch (error) {
      console.log('No hay elementos hijos, error: '+error);
    }

    this.createDoughnut('doughnut2', etiquetas, valores2, coloresP);
    this.createDoughnut('doughnut3', etiquetas, valores, colores);
    this.createDoughnut('doughnut4', etiquetas, valores, colores);
    this.createDoughnut('doughnut5', etiquetas, valores, colores);
    this.createDoughnut('doughnut6', etiquetas, valores, colores);


  }

  createDoughnut(element: any, etiquetas: any[], valores: any[], colores: any[]) {
    let oilCanvas = document.getElementById(element);


    Chart.defaults.global.defaultFontFamily = "Roboto";
    Chart.defaults.global.defaultFontSize = 12;
    Chart.defaults.global.animation.duration = 2000;
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
      cutoutPercentage: 75,
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
      options: chartOptions
    });
  }


  /* recibePartidas(){

    var arrPart = new Array<PartidaInspeccion>();
    console.log("verificar data");
        this._insp.recibePartidasInspeccion().subscribe(
          data => {
            console.log(data);

            arrPart = data.current;

            console.log("punteros proveedor");
            this.squery.Query(arrPart,['idProveedor'],true);
            this.punterosProvee= this.squery.getPunteros(['idProveedor'],"idProveedor");

            this.punterosProvee.forEach(element =>  {

              var punterosTemp = new Array<any>();
              punterosTemp = this.squery.getPunteros([element]);
              console.log("valor de los punteros:" + element);

              for ( var i:number = 0; i < punterosTemp.length; i++) {
                var partTemp:PartidaInspeccion;
                partTemp = Object.assign(new PartidaInspeccion,this.squery.universo[punterosTemp[i]]);
              }
            });



        },
        error => {
          console.log("error inspeccion");

          console.log(error);
        }
        );
  } */

}
