import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pn-barra-progreso-por-cliente',
  templateUrl: './barra-progreso-por-cliente.component.html',
  styleUrls: ['./barra-progreso-por-cliente.component.scss']
})
export class BarraProgresoPorClienteComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
    this.PzasInspeccionadas = this.totPiezas;
    this.pzasTotales = this.packingTotales;
    this.obtenerPiezasInspeccion(this.inspector);
    this.idHora = setInterval(() => {
      this.hora = this.obtenerHoraActual();
    }, 1000);
  }
  obtenerPiezasInspeccion(inspector: string) : any {
    //  this.obtenerRestante(this.pzasTotales);
    this.restante = this.obtenerRestante(this.pzasTotales) + '%';
    this.pzasRestantes = (this.pzasTotales - this.PzasInspeccionadas);
    this.formatoPzasRestantes = (this.pzasRestantes === 1) ?  this.pzasRestantes + ' Packing List (restante)' : this.pzasRestantes + ' Packing List (restantes)' ;
    this.promedio = this.obtenerPorcentaje(this.pzasTotales, this.PzasInspeccionadas) + '%';
    this.formatoPzasInspeccionadas = (this.PzasInspeccionadas === 1) ?  this.PzasInspeccionadas + ' Packing List enviado' : this.PzasInspeccionadas + ' Packing List enviados';
  }
  // Funcion para obtener porcentaje restante
  obtenerRestante(pzasTotales: number) {
    const restante = 100 - this.obtenerPorcentaje(this.pzasTotales, this.PzasInspeccionadas);
    return restante;
  }
  obtenerHoraActual() {
    const fecha = new Date();
    const formatoMinutos = fecha.getMinutes();
    const minutes = (formatoMinutos < 10) ? '0' + formatoMinutos : formatoMinutos;
    const formatoHoras = fecha.getHours();
    const hours = (formatoHoras < 10) ? '0' + formatoHoras : formatoHoras;
    return hours + ':' + minutes + ' Hrs.';
  }
  // Funcion para obtener el porcentaje de progreso además de mostrar y ocultar los tooltip y textos
  obtenerPorcentaje(totales: number, inspeccionadas: number) {
    let porcentaje: number;
    if (totales < inspeccionadas) {
      alert('El numero de piezas inspeccionadas es mayor que las piezas totales');
    } else if (totales === inspeccionadas) {
      porcentaje = Math.round((inspeccionadas * 100) / totales);
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

}
