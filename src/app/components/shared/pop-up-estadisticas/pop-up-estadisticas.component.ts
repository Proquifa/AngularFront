import {Chart} from 'chart.js';
import { Component, OnInit, Output, Input,   SimpleChanges} from '@angular/core';
import * as accounting from 'accounting';
import { PartidaCompra } from '../../../class/compras/PartidaCompra.class';
import { InspeccionService } from '../../../services/inspeccion/inspeccion.service';
import { Router } from '@angular/router';
import { Query } from '../../../class/compras/utils/query.class';
import { totalesInspeccionProducto } from '../../../class/despachos/totalesInspeccionProducto.class';
import { DonaComponent } from "./../../shared/graficas/dona/dona.component";
import { SessionUser } from './../../../services/session/session.service';
import { ContadorPiezasXPrioridad } from './../../../class/despachos/ContadorPiezasXPrioridad.class';
import { ComunService } from '../../../services/comun/comun.service';
import { Empleado } from '../../../class/Empleado.class';

@Component({
  selector: 'pq-pop-up-estadisticas',
  templateUrl: './pop-up-estadisticas.component.html',
  styleUrls: ['./pop-up-estadisticas.component.scss']
})

export class PopUpEstadisticasComponent implements OnInit {
  @Input() tipoGrafica: string;
  @Input() donaChart: any; /* Input para el componente donut-chart  */
  @Input() donita: any; /* Input para el componente dona */
  @Input() tipo: string='Inspección';
  @Input() muestraHallazgos: boolean =true;
  @Input() tipoTotales: string = "Inspeccionadas";
  @Input() totalesPorInspector: any;
  @Input() activarGraficas: boolean = true;
  ContadorPiezasXPrioridad1: ContadorPiezasXPrioridad;
  pzasP1 :number = 0;
  pzasP2 :number = 0;
  pzasP3 :number= 0;

  arraysQuincena:any = [];
  arraysMes:any = [];
  arraysAnio:any = [];

  modal:boolean;
  donaData:boolean;

/*  totalesPorInspectorEjemplo: any = {
    total_partidas: 100,
    total_piezas: 150,
    total_hallazgos: 40,
    lista_desempeño: [39, 26],

  }; */
  /*  donitaEjemplo: any = {
      arrayLabel: arrayLabelPrioridad,
      arrayValores: arrayValoresPrioridad,
      tipoGrafica: tipoGraficaPrioridades,

    }; */
  constructor() {
  }

  ngOnChanges(change: SimpleChanges){
     console.log(change);
  }

  ngOnInit() {
    console.log("--------"+ this.totalesPorInspector);
    this.arraysQuincena = this.totalesPorInspector.listaQuincena;
    this.arraysMes = this.totalesPorInspector.listaMes;
    this.arraysAnio = this.totalesPorInspector.litaAnio;

    if(this.donaChart !== undefined)
      this.donaData = true;
    else
      this.donaData = false;
  }

  public chartClicked(e:any):void {
    // console.log(e);
  }

  public chartHovered(e:any):void {
    // console.log(e);
  }

  mostrarModal(){
    this.modal = true;
  }

  cerrarModal (){
    this.modal = false;
  }


}
