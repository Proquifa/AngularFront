import { Component, OnInit, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import * as accounting from 'accounting';
import { Empleado } from '../../class/Empleado.class';
import { PartidaInspeccion } from '../../class/despachos/PartidaInspeccion.class';
import { Query } from '../../class/compras/utils/query.class';
import { Router } from '@angular/router';
import { InspeccionService } from '../../services/inspeccion/inspeccion.service';
import { SessionUser } from '../../services/session/session.service';
import { CoreContainerComponent } from '../core-container/core-container.component';
import { Subscription } from 'rxjs';
import { ComunService } from '../../services/comun/comun.service';
import { totalesInspeccionProducto } from '../../class/despachos/totalesInspeccionProducto.class';
import {AccountingFormatMoney, DateFormatSlashHour} from '../../pipes/accounting/accounting.pipe';
import {parametrosInspeccion} from '../../class/despachos/parametrosInspeccion.class';


@Component({
  selector: 'pn-responsableae',
  templateUrl: './responsableae.component.html',
  styleUrls: ['./responsableae.component.scss']
})
export class ResponsableaeComponent implements OnInit {


  vistaInicialActiva: boolean = true;
  squery: Query = new Query();
  punterosProvee = new Array<any>();
  universoPartidas = new Array<any>();
  universoDias = new Array<any>();
  universoActual = new Array<any>();
  // Se crea esta copia del universo para mostrar la información de las partidas en la vista.
  copiaUniversoPartidas = new Array<any>();
  iniciarBotonera: boolean;
  classAsideMenu: string = "asideNormalMenu";


  arrayProductos: any;
  array2: any;
  tipoGrafica: string;
  tipoGraficaPro: string;
  tipoGraficaPrioridades: string;
  tipoGraficaP1: string;
  tipoGraficaP2: string;
  tipoGraficaP3: string;
  array3: any;
  array4: any;
  arrayValoresPro: any;
  arrayLabelPro: any;
  arrayValoresPrioridad: any;
  arrayLabelPrioridad: any;
  arrayValoresP1: any;
  arrayValoresP2: any;
  arrayValoresP3: any;
  arraylabelP1: any;
  arraylabelP2: any;
  arraylabelP3: any;

  tHoy: number = 0;
  tTodo: number = 0;
  tManana: number = 0;
  tPasadoM: number = 0;
  tFuturo: number = 0;
  totalPendientes: number = 0;


  objetivoDeinspeccion: number = 0;
  piezasInspeccionadas: number = 0;
  inspeccionDeceada: number = 0;
  inspeccionDeceadaHastaElMomento: number = 0;
  minimoDeInspeccion: number = 0;
  minimaInspeccionHastaElMomento: number = 0;
  colorIndiceInspeccionDeceada: string = "#D0021B";
  colorMinimoInspeccion: string = "#D0021B";
  ocultarAcor: boolean;
  mostrarMenuRoles: boolean = true;

  inspector: string;


  partidaPrioridad: PartidaInspeccion;
  partidaPoriginal: PartidaInspeccion;
  subs: Subscription;
  ocultaScroll: boolean;
  banderaPrueba: boolean;
  vistasInspeccionFin: boolean;

  productos: any;
  activarAlert: boolean;

  data: any = {
    titulo: "Totales",
    labels: ["ASISTENCIA", "INASISTENCIA"],
    valores: [39, 26],
    labelsExtras: ["Asistieron", "Faltaron"],
    labelsExtrasHover: ["Colaboradores"],
    valuesExtras: [39, 26],
    valuesExtrasHover: [[39], [26]]
  };

  totales_estadisticas: any;
  popEstadisticas: boolean;
  activarLlamadaGraficas: boolean;
  /*******GRAFICAS*******/

  filtroProductos: any[] = [];
  nuevoProductos: any = [];
  listaClientes: any = [];
  graficasValores: any[] = [];
  graficasCargadas: boolean;
  graficas: any[];
  nuevoClientes: any[] = [];
  nuevaPrioridad: any[] = [];
  listaPrioridades: any; /// Se utiliza para guardar todos los datos de la lista de acuerdo a prioridades..
  listaPrioridad1: any; /// Se utiliza para guardar todos los datos de la lista que contenga solo los que pertenecen a la prioridad 1..
  listaProductos: any[];

/***********************************/

  donaPEstadisticas:any;
  lstPrioridadesEstadisticas: any[];
  filtroPE: any[] = [];
  nuevoPE: any = [];
  objetivoDeinspeccionAux : any;
  tipoGraficaEstadisticas:string;
  cargarEstadisticas:boolean  = false;
  /***********************************************************/
  listaProveedores: any[];
  filtroProveedor: any[] = [];
  tipoGraficaProveedores: string;
  activarGrProveedor: boolean;
  dataProveedores: any;
  listaPrioridadesG: any[];
  filtroPrioridadesGra: any [];
  tipoGraficaPrioridadesGra: string;
  activarGrPrioridades: boolean;
  dataPrioridades: any;
  listaPrioridad1G: any[];
  listaPrioridad2G: any[];
  listaPrioridad3G: any[];
  filtroPrioridades1Gra: any [];
  activarGrPrioridades1: boolean;
  dataPrioridades1: any;
  tipoGraficaPrioridadesGra1: string;
  nuevaPrioridad1: any [];
  filtroPrioridades2Gra: any [];
  activarGrPrioridades2: boolean;
  dataPrioridades2: any;
  tipoGraficaPrioridadesGra2: string;
  nuevaPrioridad2: any [];
  filtroPrioridades3Gra: any [];
  activarGrPrioridades3: boolean;
  dataPrioridades3: any;
  tipoGraficaPrioridadesGra3: string;
  nuevaPrioridad3: any [];
  listaProductosG: any[];
  filtroProducto: any [];
  dataProducto: any;
  tipoGraficaProd: string;
  activarProd: boolean;
  nuevoProducto: any = [];
  /**/
  dataProductosAux: any;
  dataProveedoresAux: any;
  dataPrioridadesAux: any;
  dataPrioridades1Aux: any;
  dataPrioridades2Aux: any;
  dataPrioridades3Aux: any;
  itemsMenu: any[] = [];
  activarMenu: boolean;
  activarAlerta: boolean;
  mensajePrio = 'Se han terminado las partidas de Prioridad 1, ' +
                'deberia proceder a Embalar';
  cantidadImprimir: number = 0;
  impresionActiva: boolean = false;
  /**/
  constructor(private router: Router, private _insp: InspeccionService, private coreComponent: CoreContainerComponent, private comunService: ComunService) { }

  ngOnInit() {

    this.recibePartidas();
    this.obtenerDatosInspector();
    this.obtenerContadorPendientes();
    this.recibeTotalesInspeccion();
    setTimeout(() => {
    //  this.obtenerPartidaInspeccion(this.inspector);
      this.obtenerTotalesPorInspector(this.inspector);
    }, 1000);

    this.subs = this.comunService.valueVideo
      .subscribe(
        (data) => {
          this.ocultaScroll = data;
        });
    this.subs = this.comunService.finalizar.subscribe(
      (data) => {

        this.vistasInspeccionFin = data;
        console.log(this.vistasInspeccionFin, this.objetivoDeinspeccion);
        if (this.vistasInspeccionFin == true) {
          this.tHoy = 0;
          this.tManana = 0;
          this.tPasadoM = 0;
          this.tFuturo = 0;
          this.tTodo = 0;
        }

      });

    //  this.filtrarDias("hoy");
    this.subs = this.comunService.recargar.subscribe(
      (data) => {
        if (data === 'inspeccion') {
          this.recargarVista();
        }
      });
  }

  // reiniciarVistaP(valor){
  //   if (valor === true){
  //     this.vistaInicialActiva = true;
  //   }
  // }
  recibePartidas() {
    this.activarAlerta = false;
    this.coreComponent.openModal(0);
    this._insp.recibePartidasInspeccion().subscribe(
      data => {
        var partidasAux = new Array<string>();
        var arrayValores = new Array<number>();
        var arrPart = new Array<PartidaInspeccion>();
        var partTemp: PartidaInspeccion;
        arrayValores = data.current.listPart;
        for( let z:number = 0; z < arrayValores.length; z++){
          if (data.current.listPart[z].estado == 'En inspección'){
            partidasAux.push(data.current.listPart[z]);
          }
        }
        if (data != null) {
          this.partidaPrioridad = new PartidaInspeccion();
          this.partidaPrioridad = Object.assign(new PartidaInspeccion, partidasAux[0]);
          this.partidaPoriginal = Object.assign(new PartidaInspeccion,  partidasAux[0]);
        }


        if (data.current.listPart.length !== 0) {
          arrPart = data.current.listPart;
          this.squery.Query(arrPart, ['idProducto'], true);
          this.punterosProvee = this.squery.getPunteros(['idProducto'], "idProducto");
          this.tTodo = data.current.listPart.length;
          this.punterosProvee.forEach(element => {
            var totalCantidad: number = 0;


            var punterosTemp = new Array<any>();
            punterosTemp = this.squery.getPunteros([element]);
            /*   console.log("valor de los punteros:" + element); */

            for (var i: number = 0; i < punterosTemp.length; i++) {

              partTemp = Object.assign(new PartidaInspeccion, this.squery.universo[punterosTemp[i]]);
              if (i == 0) {
                partTemp.setDiasFiltro("hoy");
                this.tHoy = this.tHoy + 1;
                //    if(this.tHoy > this.tTodo ){this.tHoy = this.tTodo - this.tHoy;}
                //  this.tHoy=0;
              } else if (i == 1) {
                //  this.tManana = 0;
                partTemp.setDiasFiltro("manana");
                this.tManana = this.tManana + 1;
                //  if(this.tManana > this.tTodo ){this.tManana = this.tTodo - this.tManana;}

              }
              else {
                //  this.tPasadoM = 0;
                partTemp.setDiasFiltro("pasado");
                this.tPasadoM = this.tPasadoM + 1;
                //  if(this.tPasadoM > this.tTodo ){this.tPasadoM = this.tTodo - this.tPasadoM;}
              }

              this.universoPartidas.push(partTemp);
            }
          });


          this.iniciarBotonera = true;

          this.arraylabelP3 = new Array<string>();
          this.arrayValoresP3 = new Array<number>();

          this.arraylabelP3 = [""];
          this.arrayValoresP3 = [1];
          let test = new Array<any>();
          // console.log(this.universoPartidas);
          test = Object.assign([], this.universoPartidas);
          //Array.prototype.push.apply(this.copiaUniversoPartidas, this.universoPartidas);
          // this.copiaUniversoPartidas = Object.assign([], this.universoPartidas);
          if (this.activarLlamadaGraficas) {
            this.filtrarDias('hoy');
          }
        }


        this.coreComponent.closeModal(0);
        if (data.current.totP1 === 0) {
          this.activarAlerta = true;
        }
      },
      error => {
        console.log("error inspeccion");
        console.log(error);
        //terminar loading false
        this.coreComponent.closeModal(0);
      }
    );
  }


  filtrarDias(dia:string) {
    this.limpiarVarGraficas();
    setTimeout(() => {
      this.activarGrProveedor = false;
      this.activarGrPrioridades = false;
      this.activarGrPrioridades1 = false;
      this.activarGrPrioridades2 = false;
      this.activarGrPrioridades3 = false;
      this.activarProd = false;
    }, 5);
    // console.log("llego:" + dia);
    var sq: Query = new Query();
    var punterosDias = new Array<number>();
    var arrayLabel = new Array<string>();
    var arrayValores = new Array<number>();
    this.universoActual = new Array<PartidaInspeccion>();

    if (dia != "todo") {
      // for(let aux of this.universoPartidas[0]){
      //   var partTemp = new Array<PartidaInspeccion>();
      //   partTemp aux;
      sq.Query(this.universoPartidas, ['diasFiltro'], true);
      //  sq.Query(this.universoActual[0], ['diasFiltro'], true);
      punterosDias = sq.getPunteros([dia]);
      if (punterosDias.length > 0 && dia != "todo") {/*punterosDias.length > 0 && this.objetivoDeinspeccion !== 0 && dia != "todo"*/

        punterosDias.forEach(element => {
          // /* for (var i: number = 0; i < posicion.length; i++) {  */
          var partTemp: PartidaInspeccion;
          partTemp = Object.assign(new PartidaInspeccion, sq.universo[element]);
          this.universoActual.push(partTemp);
          /* } */
        });

        this.tipoGrafica = 'verdeVSazul';
        this.tipoGraficaP1 = 'prioridadRoja';
        this.tipoGraficaP2 = 'prioridadNaranja';
        this.tipoGraficaP3 = 'prioridadVerde';
        this.filtradoDeProductos();
        this.filtradoProveedores();
        this.filtrarPrioridades();
        this.operacionesPrioridades();
      }
      else {
        this.tipoGraficaPrioridades = "gris";
        this.tipoGrafica = "gris";
        this.tipoGraficaP1 = 'gris';
        this.tipoGraficaP2 = "gris";
        this.tipoGraficaP3 = 'gris';
        this.filtradoDeProductos();
        this.filtradoProveedores();
        this.filtrarPrioridades();
        this.operacionesPrioridades();

      }

     }
    else {
      if (this.objetivoDeinspeccion >= 0) {
        this.tipoGrafica = 'verdeVSazul';
        this.tipoGraficaP1 = 'prioridadRoja';
        this.tipoGraficaP2 = 'prioridadNaranja';
        this.tipoGraficaP3 = 'prioridadVerde';
        this.tipoGraficaPro = "general";
        this.universoActual = new Array<any>()
        this.universoActual = Object.assign([], this.universoPartidas);
        this.filtradoDeProductos();
        this.filtradoProveedores();
        this.filtrarPrioridades();
        this.operacionesPrioridades();
      }
      else {
        this.tipoGrafica = 'gris';

      }

     }
    this.iniciarBotonera = false;
    this.limpiarVariablesGraficasD();
    this.calcularDatosParaGraficasD();
    this.activarLlamadaGraficas = false;
  }

  filtradoDeProductos() {
    var sq: Query = new Query();
    var puntem = new Array<any>();
    var punterosProd = new Array<any>();
    var arrayLabel = new Array<string>();
    var arrayValores = new Array<number>();
    var arrayNoArribados = new Array<number>();
    var contArribados: number = 0;
    var contNoArribados: number = 0;
    let acumMontoTotal: number = 0;
    let acumCantidadCompra: number = 0;
    let acumMontoTotalNA: number = 0;
    let acumCantidadCompraNA: number = 0;
    let arrayMontos = new Array<number>();
    let arrayCant = new Array<number>();
    this.arrayProductos = new Array<string>();
    this.array2 = new Array<number>();
    if (this.universoActual.length > 0) {
        this.resetColores();
        sq.Query(this.universoActual, ['estado'], true);
      punterosProd = sq.getPunteros(['estado'], "estado");
      this.arrayProductos = new Array<string>();
      this.array2 = new Array<number>();
      punterosProd.forEach(element => {
        var cantidad = 0;
        puntem = sq.getPunteros([element]);
        for (var i: number = 0; i < puntem.length; i++) {
          var partTemp: PartidaInspeccion;
          partTemp = Object.assign(new PartidaInspeccion, sq.universo[puntem[i]]);

          if (partTemp.getEstado() == 'En inspección' && partTemp.getidProducto() !== null && partTemp.getidProducto() != 0) {
            contArribados = contArribados + 1;
            acumMontoTotal += partTemp.getmontoTotal();
            acumCantidadCompra += partTemp.getCantidadCompra();
          } else {
            contNoArribados = contNoArribados + 1;
            acumMontoTotalNA += partTemp.getmontoTotal();
            acumCantidadCompraNA += partTemp.getCantidadCompra();
          }

        }

      });
      this.tipoGrafica = "verdeVSazul";
      console.log(this.tipoGrafica);
      // arrayValores.push(contArribados);
      // arrayValores.push(contNoArribados);
      arrayValores.push(acumCantidadCompra);
      arrayValores.push(acumCantidadCompraNA);
      this.listaProductosG.push({estado:'Arribados', piezas:acumCantidadCompra, monto:acumMontoTotal});
      this.listaProductosG.push({estado:'No Arribados', piezas:acumCantidadCompraNA, monto:acumMontoTotalNA});
              arrayLabel.push("Arribados");
              arrayLabel.push("No Arribados");
      /*For para ordenar los datos de acuerdo al monto*/
      let montoAuxL: any;
      for(var i = 1; i < this.listaProductosG.length; i++) {
        for(var j = 0; j < (this.listaProductosG.length - i); j++) {
          if (this.listaProductosG[j].monto < this.listaProductosG[i].monto) {
            montoAuxL = this.listaProductosG[j + 1];
            this.listaProductosG[j + 1] = this.listaProductosG[j];
            this.listaProductosG[j] = montoAuxL;
          }
        }
      }
      /**********************************************/

            Array.prototype.push.apply(this.arrayProductos, arrayLabel);
            Array.prototype.push.apply(this.array2, arrayValores);
       } else {

       this.tipoGrafica = "gris";
       arrayValores.push(1);
       arrayLabel.push("");
      Array.prototype.push.apply(this.arrayProductos, arrayLabel);
      Array.prototype.push.apply(this.array2, arrayValores);

    }


  }

  filtradoProveedores() {

        var sq: Query = new Query();
        var puntem = new Array<any>();
        var punterosProd = new Array<any>();
        var arrayLabel = new Array<string>();
        var arrayValores = new Array<number>();
        var listaaUX = new Array<any>();

        this.arrayLabelPro = new Array<string>();
        this.arrayValoresPro = new Array<number>();
        if (this.universoActual.length > 0)
        {
          this.tipoGraficaPro = "general";
          sq.Query(this.universoActual, ['fabrica'], true);
          punterosProd = sq.getPunteros(['fabrica'], "fabrica");
         /*  this.arrayLabelPro = new Array<string>();
          this.arrayValoresPro = new Array<number>(); */
          punterosProd.forEach(element => {
            var cantidad = 0;
            var monto = 0;
            puntem = sq.getPunteros([element]);

            for (var i: number = 0; i < puntem.length; i++) {
               var partTemp: PartidaInspeccion;
               partTemp = Object.assign(new PartidaInspeccion, sq.universo[puntem[i]]);

              //cantidad = cantidad + 1;
              cantidad += partTemp.getCantidadCompra();
              monto += partTemp.getmontoTotal();
            }

            arrayValores.push(cantidad);
            arrayLabel.push(element);
            /* PROVEEDORES */
            this.listaProveedores.push({nombreProveedor: element, piezas: cantidad, monto: monto});
            listaaUX.push({nombreProveedor: element, piezas: cantidad, monto: monto});
          });
          // console.log('Soy lista proveedores-->', listaaUX);
          /*For para ordenar los datos de acuerdo al monto*/
          let montoAuxL: any;
          let band = false;
         while (!band) {
           band= true;
           for (var i= 0; i < this.listaProveedores.length -1; i++){
             var aux= i+1;
             if (this.listaProveedores[i].monto < this.listaProveedores[aux].monto) {
               montoAuxL = this.listaProveedores[i+1];
               this.listaProveedores[i + 1] = this.listaProveedores[i];
               this.listaProveedores[i] = montoAuxL;
               band = false;
             }
           }
         }
          // console.log('Soy lista proveedores ordenada -->', this.listaProveedores);
          /**********************************************/

          Array.prototype.push.apply(this.arrayLabelPro, arrayLabel);
          Array.prototype.push.apply(this.arrayValoresPro, arrayValores);
        }
        else{
          this.tipoGraficaPro = "gris";
          arrayValores.push(1);
          arrayLabel.push("");
          Array.prototype.push.apply(this.arrayLabelPro, arrayLabel);
          Array.prototype.push.apply(this.arrayValoresPro, arrayValores);
        }



  }


  filtrarPrioridades() {

    var sq: Query = new Query();
    var puntem = new Array<any>();
    var punterosPrio = new Array<any>();
    var arrayLabel = new Array<string>();
    var arrayMonto = new Array<number>();
    var arrayValores = new Array<number>();
    var arrayValoresAux = new Array<any>();
    var prioridadNom: any;
    this.arrayLabelPrioridad = new Array<string>();
    this.arrayValoresPrioridad = new Array<number>();
    if (this.universoActual.length > 0) {
      this.tipoGraficaPrioridades = "prioridades";
      sq.Query(this.universoActual, ['prioridad'], true);
      punterosPrio = sq.getPunteros(['prioridad'], "prioridad");

      punterosPrio.forEach(element => {
        var cantidad = 0;
        var monto = 0;
        puntem = sq.getPunteros([element]);
        for (var i: number = 0; i < puntem.length; i++) {
          // cantidad = cantidad + 1;
          var partTemp: PartidaInspeccion;
          partTemp = Object.assign(new PartidaInspeccion, sq.universo[puntem[i]]);

         cantidad += partTemp.getCantidadCompra();
         monto += partTemp.getmontoTotal();
        }
        if ((element !== 'null') && (cantidad > 0)) {
          arrayValores.push(cantidad);
          arrayLabel.push(element);
          arrayMonto.push(monto);
          // if (element === 'p1') {
          //   prioridadNom = 'Prioridad 1';
          // } else if (element === 'p2') {
          //   prioridadNom = 'Prioridad 2';
          // } else if (element === 'p3') {
          //   prioridadNom = 'Prioridad 3';
          // }
        }
        // this.listaPrioridadesG.push({nombrePrio:prioridadNom, piezas:cantidad, monto:monto});
      });

      if ( arrayLabel.length > 0) {
        this.tipoGraficaPrioridades = 'prioridades';
        let arrayPrio = ['p1', 'p2', 'p3'];
        let arrayLabelAux = ['Prioridad 1', 'Prioridad 2', 'Prioridad 3'];
        for (var i = 0; i < arrayLabel.length; i++) {
          for (var j = 0; j < arrayPrio.length; j++) {
            if (arrayLabel[i] === arrayPrio[j]) {
              arrayValoresAux[j] = arrayValores[i];
              this.listaPrioridadesG[j]=({nombrePrio:arrayLabelAux[j], piezas:arrayValores[i], monto:arrayMonto[i]});
            } else if (arrayValoresAux[j] === undefined) {
              arrayValoresAux [j] = 0;
              this.listaPrioridadesG[j]=({nombrePrio:arrayLabelAux[j], piezas:0, monto:0});
            }
          }
        }
        /*For para ordenar los datos de acuerdo al monto*/
        let montoAuxL: any;
        let band = false;
        while (!band) {
          band= true;
          for (var i= 0; i < this.listaPrioridadesG.length -1; i++){
            var aux= i+1;
            if (this.listaPrioridadesG[i].monto < this.listaPrioridadesG[aux].monto) {
              montoAuxL = this.listaPrioridadesG[i+1];
              this.listaPrioridadesG[i + 1] = this.listaPrioridadesG[i];
              this.listaPrioridadesG[i] = montoAuxL;
              band = false;
            }
          }
        }
        // console.log('Soy lista proveedores ordenada -->', this.listaProveedores);
        /**********************************************/
        Array.prototype.push.apply(this.arrayLabelPrioridad, arrayLabelAux);
        Array.prototype.push.apply(this.arrayValoresPrioridad, arrayValoresAux);
      } else {
        this.tipoGraficaPrioridades = "gris";
        arrayValores.push(1);
        arrayLabel.push("");
        Array.prototype.push.apply(this.arrayLabelPrioridad, arrayLabel);
        Array.prototype.push.apply(this.arrayValoresPrioridad, arrayValores);
      }


      // Array.prototype.push.apply(this.arrayLabelPrioridad, arrayLabel);
      // Array.prototype.push.apply(this.arrayValoresPrioridad, arrayValores);
    }
    else {
      this.tipoGraficaPrioridades = "gris";
      arrayValores.push(1);
      arrayLabel.push("");
      Array.prototype.push.apply(this.arrayLabelPrioridad, arrayLabel);
      Array.prototype.push.apply(this.arrayValoresPrioridad, arrayValores);
    }
    // this.donaPEstadisticas = {
    //   arrayLabel: this.arrayLabelPrioridad,
    //   arrayValores : this.arrayValoresPrioridad,
    //   tipoGrafica : this.tipoGraficaPrioridades
    // }

  }

  operacionesPrioridades() {
    console.log("obterner graficas de diferente prioridad");
    var sq: Query = new Query();
    var puntem = new Array<any>();
    var punterosPrio = new Array<any>();
    var punteroP1 = new Array<any>();
    var punteroP2 = new Array<any>();
    var punteroP3 = new Array<any>();
    var arrayLabel = new Array<string>();
    var arrayValores = new Array<number>();
    var listaAux = new Array<any>();
    var listaAux2 = new Array<any>();
    var listaAux3 = new Array<any>();
    var punterosAux = new Array<any>();
    var sqAux: Query = new Query();
    var sqAux2: Query = new Query();
    var sqAux3: Query = new Query();
    this.arraylabelP1 = new Array<string>();
    this.arrayValoresP1 = new Array<number>();
    this.arraylabelP2 = new Array<string>();
    this.arrayValoresP2 = new Array<number>();
    this.arraylabelP3 = new Array<string>();
    this.arrayValoresP3 = new Array<number>();
    if (this.universoActual.length > 0) {
      sq.Query(this.universoActual, ['prioridad'], true);
      punterosPrio = sq.getPunteros(['prioridad'], "prioridad");

      punteroP1 = sq.getPunteros(['p1']);
      if (punteroP1.length > 0) {
        for (var i: number = 0; i < punteroP1.length; i++) {
          var partTemp: PartidaInspeccion;
          partTemp = Object.assign(new PartidaInspeccion, sq.universo[punteroP1[i]]);
          listaAux.push(partTemp);
        }

        sqAux.Query(listaAux, ['fabrica'], true);
        punterosAux = sqAux.getPunteros(['fabrica'], "fabrica");

        if (punterosAux.length > 0) {
        //  for (var i: number = 0; i < punterosAux.length; i++) {
            punterosAux.forEach(element => {
              puntem = sqAux.getPunteros([element]);
              var cantidad = 0;
              var monto = 0;
              for (var i: number = 0; i < puntem.length; i++) {
                var partTemp: PartidaInspeccion;
                partTemp = Object.assign(new PartidaInspeccion, sqAux.universo[puntem[i]]);

               cantidad += partTemp.getCantidadCompra();
               monto += partTemp.getmontoTotal();
              }
              arrayValores.push(cantidad);
              arrayLabel.push(element);
              this.listaPrioridad1G.push({nombrePrio1:element, piezas: cantidad, monto: monto});
            });

        //  }
          /*For para ordenar los datos de acuerdo al monto*/
          let montoAuxL: any;
          let band = false;
          while (!band) {
            band= true;
            for (var i= 0; i < this.listaPrioridad1G.length -1; i++){
              var aux= i+1;
              if (this.listaPrioridad1G[i].monto < this.listaPrioridad1G[aux].monto) {
                montoAuxL = this.listaPrioridad1G[i+1];
                this.listaPrioridad1G[i + 1] = this.listaPrioridad1G[i];
                this.listaPrioridad1G[i] = montoAuxL;
                band = false;
              }
            }
          }
          // console.log('Soy lista proveedores ordenada -->', this.listaProveedores);
          /**********************************************/
          Array.prototype.push.apply(this.arraylabelP1, arrayLabel);
          Array.prototype.push.apply(this.arrayValoresP1, arrayValores);
        }

      }
      else {
        this.tipoGraficaP1 = "gris";
      }
      punteroP2 = sq.getPunteros(['p2']);
      if (punteroP2.length > 0) {
        for (var i: number = 0; i < punteroP2.length; i++) {
          var partTemp: PartidaInspeccion;
          partTemp = Object.assign(new PartidaInspeccion, sq.universo[punteroP2[i]]);
          listaAux2.push(partTemp);
        }

        sqAux2.Query(listaAux2, ['fabrica'], true);
        punterosAux = sqAux2.getPunteros(['fabrica'], "fabrica");

       if (punterosAux.length > 0) {
        //  for (var i: number = 0; i < punterosAux.length; i++) {
            punterosAux.forEach(element => {
              puntem = sqAux2.getPunteros([element]);
              var cantidad = 0;
              var monto = 0;
              for (var i: number = 0; i < puntem.length; i++) {
                //cantidad = cantidad + 1;
                var partTemp: PartidaInspeccion;
                partTemp = Object.assign(new PartidaInspeccion, sqAux2.universo[puntem[i]]);

               cantidad += partTemp.getCantidadCompra();
               monto += partTemp.getmontoTotal();
              }
              arrayValores.push(cantidad);
              arrayLabel.push(element);
              this.listaPrioridad2G.push({nombrePrio2:element, piezas: cantidad, monto: monto});
            });

        //  }
         /*For para ordenar los datos de acuerdo al monto*/
         let montoAuxL: any;
         let band = false;
         while (!band) {
           band= true;
           for (var i= 0; i < this.listaPrioridad2G.length -1; i++){
             var aux= i+1;
             if (this.listaPrioridad2G[i].monto < this.listaPrioridad2G[aux].monto) {
               montoAuxL = this.listaPrioridad2G[i+1];
               this.listaPrioridad2G[i + 1] = this.listaPrioridad2G[i];
               this.listaPrioridad2G[i] = montoAuxL;
               band = false;
             }
           }
         }
         // console.log('Soy lista proveedores ordenada -->', this.listaProveedores);
         /**********************************************/
          Array.prototype.push.apply(this.arraylabelP2, arrayLabel);
          Array.prototype.push.apply(this.arrayValoresP2, arrayValores);
        }

      }
      else {
        var arrayLabel = new Array<string>();
        var arrayValores = new Array<number>();
        arrayLabel.push("");
        arrayValores.push(1);
        Array.prototype.push.apply(this.arraylabelP2, arrayLabel);
        Array.prototype.push.apply(this.arrayValoresP2, arrayValores);
        this.tipoGraficaP2 = "gris";
      }
      punteroP3 = sq.getPunteros(['p3']);
      if (punteroP3.length > 0) {
        for (var i: number = 0; i < punteroP3.length; i++) {
          var partTemp: PartidaInspeccion;
          partTemp = Object.assign(new PartidaInspeccion, sq.universo[punteroP3[i]]);
          listaAux3.push(partTemp);
        }


        sqAux3.Query(listaAux3, ['fabrica'], true);
        punterosAux = sqAux3.getPunteros(['fabrica'], "fabrica");

      //  if (punterosAux.length > 0) {
          //for (var i: number = 0; i < punterosAux.length; i++) {
            punterosAux.forEach(element => {
              puntem = sqAux3.getPunteros([element]);
              var cantidad = 0;
              var monto = 0;
              for (var i: number = 0; i < puntem.length; i++) {
                //cantidad = cantidad + 1;
                var partTemp: PartidaInspeccion;
                partTemp = Object.assign(new PartidaInspeccion, sqAux3.universo[puntem[i]]);

               cantidad += partTemp.getCantidadCompra();
               monto += partTemp.getmontoTotal();
              }
              arrayValores.push(cantidad);
              arrayLabel.push(element);
              this.listaPrioridad3G.push({nombrePrio3:element, piezas: cantidad, monto: monto});
            });

          //}
        /*For para ordenar los datos de acuerdo al monto*/
        let montoAuxL: any;
        let band = false;
        while (!band) {
          band= true;
          for (var i= 0; i < this.listaPrioridad3G.length -1; i++){
            var aux= i+1;
            if (this.listaPrioridad3G[i].monto < this.listaPrioridad3G[aux].monto) {
              montoAuxL = this.listaPrioridad3G[i+1];
              this.listaPrioridad3G[i + 1] = this.listaPrioridad3G[i];
              this.listaPrioridad3G[i] = montoAuxL;
              band = false;
            }
          }
        }
        // console.log('Soy lista proveedores ordenada -->', this.listaProveedores);
        /**********************************************/
          Array.prototype.push.apply(this.arraylabelP3, arrayLabel);
          Array.prototype.push.apply(this.arrayValoresP3, arrayValores);
      //  }



      }
      else {
        var arrayLabel = new Array<string>();
        var arrayValores = new Array<number>();
        arrayLabel.push("");
        arrayValores.push(1);
        Array.prototype.push.apply(this.arraylabelP3, arrayLabel);
        Array.prototype.push.apply(this.arrayValoresP3, arrayValores);
        this.tipoGraficaP3 = 'gris';
      }


    }
    else {
      this.tipoGraficaP1 = "gris";
      this.tipoGraficaP2 = "gris";
      this.tipoGraficaP3 = 'gris';
      arrayValores.push(1);
      arrayLabel.push("");
      Array.prototype.push.apply(this.arraylabelP1, arrayLabel);
      Array.prototype.push.apply(this.arrayValoresP1, arrayValores);
      Array.prototype.push.apply(this.arraylabelP2, arrayLabel);
      Array.prototype.push.apply(this.arrayValoresP2, arrayValores);
      Array.prototype.push.apply(this.arraylabelP3, arrayLabel);
      Array.prototype.push.apply(this.arrayValoresP3, arrayValores);
    }

  }
  limpiarVarGraficas(){
    this.listaProveedores  = new Array<any>();
    this.nuevoClientes = [];
    this.filtroProveedor = [];
    this.listaPrioridadesG = new Array<any>();
    this.filtroPrioridadesGra = [];
    this.nuevaPrioridad = [];
    this.nuevaPrioridad1 = [];
    this.listaPrioridad1G = new Array<any>();
    this.filtroPrioridades1Gra =[];
    this.nuevaPrioridad2 = [];
    this.listaPrioridad2G = new Array<any>();
    this.filtroPrioridades2Gra =[];
    this.nuevaPrioridad3 = [];
    this.listaPrioridad3G = new Array<any>();
    this.filtroPrioridades3Gra =[];
    this.listaProductosG = new Array<any>();
    this.filtroProducto =[];
  }
  limpiarVariablesGraficasD(){
    /////////////// Empieza PRODUCTOS ////////
    if (this.listaProductosG.length > 0) {
      for (let valor of this.listaProductosG) {
        this.filtroProducto.push(valor.estado);
        this.tipoGraficaProd = 'VerdevsAzul';
      }
    } else {
      this.tipoGraficaProd = 'Gris';
      this.filtroProducto.push("");
    }
    let valoresProd  = [] = [];
    let valoresProdcuto = [] = [];
    for (let nombre of this.listaProductosG) {
      valoresProdcuto.push([0, 0]);
      valoresProd.push(0);
  }
    if (valoresProd.length > 0) {
      this.dataProducto = {
        titulo: 'Totales',
        labels: this.filtroProducto,
        valores: valoresProd,
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresProdcuto,
      };
      this.dataProductosAux = {
        titulo: 'Totales',
        labels: this.filtroProducto,
        valores: valoresProd,
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresProdcuto,
      }; // Variable auxiliar para poner la divisa
      this.tipoGraficaProd = 'VerdevsAzul';
    } else {
      this.dataProducto = {
        titulo: 'Totales',
        labels: ['Sin datos'],
        valores: [1],
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: [[0, 0]],
      };
      this.tipoGraficaProd = 'Gris';
      setTimeout(() => {
        this.activarProd = true;
      }, 5);
    }
    //////// Empìeza grafica proveedores //////
    if (this.listaProveedores.length > 0) {
      for (let valor of this.listaProveedores) {
        this.filtroProveedor.push(valor.nombreProveedor);
        this.tipoGraficaProveedores = 'General';
      }
    } else {
      this.tipoGraficaProveedores = 'Gris';
      this.filtroProveedor.push("");
    }
    let valoresP  = [] = [];
    let valoresProveedor = [] = [];
    for (let nombre of this.listaProveedores) {
      valoresProveedor.push([0, 0]);
      valoresP.push(0);
    }
    if (valoresP.length > 0) {
      this.dataProveedores = {
        titulo: 'Totales',
        labels: this.filtroProveedor,
        valores: valoresP,
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresProveedor,
      };
      this.dataProveedoresAux = {
        titulo: 'Totales',
        labels: this.filtroProveedor,
        valores: valoresP,
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresProveedor,
      };
      this.tipoGraficaProveedores = 'General';
    } else {
      this.dataProveedores = {
        titulo: 'Totales',
        labels: ['Sin datos'],
        valores: [1],
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: [[0, 0]],
      };
      this.tipoGraficaProveedores = 'Gris';
      setTimeout(() => {
        this.activarGrProveedor = true;
      }, 5);
    }
    //////// Empìeza grafica prioridades //////
      if (this.listaPrioridadesG.length > 0) {
        for (let valor of this.listaPrioridadesG) {
          this.filtroPrioridadesGra.push(valor.nombrePrio);
        }
        this.tipoGraficaPrioridadesGra = 'Prioridades';
      } else {
        this.tipoGraficaPrioridadesGra = 'Gris';
        this.filtroPrioridadesGra.push("");
      }
      let valoresPrio  = [] = [];
      let valoresPrioridades = [] = [];
      for (let nombre of this.listaPrioridadesG) {
        valoresPrioridades.push([0, 0]);
        valoresPrio.push(0);
      }
      if (valoresPrio.length > 0) {
        this.dataPrioridades = {
          titulo: 'Totales',
          labels: this.filtroPrioridadesGra,
          valores: valoresPrio,
          labelsExtras: ['Piezas' , 'Monto'],
          labelsExtrasHover: ['Piezas' , 'Monto'],
          valuesExtras: [0, 0],
          valuesExtrasHover: valoresPrioridades,
        };
        this.dataPrioridadesAux = {
          titulo: 'Totales',
          labels: this.filtroPrioridadesGra,
          valores: valoresPrio,
          labelsExtras: ['Piezas' , 'Monto'],
          labelsExtrasHover: ['Piezas' , 'Monto'],
          valuesExtras: [0, 0],
          valuesExtrasHover: valoresPrioridades,
        };
        this.tipoGraficaPrioridadesGra = 'Prioridades';
      } else {
        this.dataPrioridades = {
          titulo: 'Totales',
          labels: ['Sin datos'],
          valores: [1],
          labelsExtras: ['Piezas' , 'Monto'],
          labelsExtrasHover: ['Piezas' , 'Monto'],
          valuesExtras: [0, 0],
          valuesExtrasHover: [[0, 0]],
        };
        this.tipoGraficaPrioridadesGra = 'Gris';
        setTimeout(() => {
          this.activarGrPrioridades = true;
        }, 5);
      }
       //////// Empìeza grafica prioridad 1 //////
       if (this.listaPrioridad1G.length > 0) {
        for (let valor of this.listaPrioridad1G) {
          this.filtroPrioridades1Gra.push(valor.nombrePrio1);
        }
        this.tipoGraficaPrioridadesGra1 = 'PrioridadRoja';
      } else {
        this.tipoGraficaPrioridadesGra1 = 'Gris';
        this.filtroPrioridades1Gra.push("");
      }
      let valoresPrio1  = [] = [];
      let valoresPrioridades1 = [] = [];
      for (let nombre of this.listaPrioridad1G) {
        valoresPrioridades1.push([0, 0]);
        valoresPrio1.push(0);
      }
      if (valoresPrio1.length > 0) {
        this.dataPrioridades1 = {
          titulo: 'Totales',
          labels: this.filtroPrioridades1Gra,
          valores: valoresPrio1,
          labelsExtras: ['Piezas' , 'Monto'],
          labelsExtrasHover: ['Piezas' , 'Monto'],
          valuesExtras: [0, 0],
          valuesExtrasHover: valoresPrioridades1,
        };
        this.dataPrioridades1Aux = {
          titulo: 'Totales',
          labels: this.filtroPrioridades1Gra,
          valores: valoresPrio1,
          labelsExtras: ['Piezas' , 'Monto'],
          labelsExtrasHover: ['Piezas' , 'Monto'],
          valuesExtras: [0, 0],
          valuesExtrasHover: valoresPrioridades1,
        };
        this.tipoGraficaPrioridadesGra1 = 'PrioridadRoja';
      } else {
        this.dataPrioridades1 = {
          titulo: 'Totales',
          labels: ['Sin datos'],
          valores: [1],
          labelsExtras: ['Piezas' , 'Monto'],
          labelsExtrasHover: ['Piezas' , 'Monto'],
          valuesExtras: [0, 0],
          valuesExtrasHover: [[0, 0]],
        };
        this.tipoGraficaPrioridadesGra1 = 'Gris';
        setTimeout(() => {
          this.activarGrPrioridades1 = true;
        }, 5);
      }
       //////// Empìeza grafica prioridad 2 //////
       if (this.listaPrioridad2G.length > 0) {
        for (let valor of this.listaPrioridad2G) {
          this.filtroPrioridades2Gra.push(valor.nombrePrio2);
        }
        this.tipoGraficaPrioridadesGra2 = 'PrioridadNaranja';
      } else {
        this.tipoGraficaPrioridadesGra2 = 'Gris';
        this.filtroPrioridades2Gra.push("");
      }
      let valoresPrio2  = [] = [];
      let valoresPrioridades2 = [] = [];
      for (let nombre of this.listaPrioridad2G) {
        valoresPrioridades2.push([0, 0]);
        valoresPrio2.push(0);
      }
      if (valoresPrio2.length > 0) {
        this.dataPrioridades2 = {
          titulo: 'Totales',
          labels: this.filtroPrioridades2Gra,
          valores: valoresPrio2,
          labelsExtras: ['Piezas' , 'Monto'],
          labelsExtrasHover: ['Piezas' , 'Monto'],
          valuesExtras: [0, 0],
          valuesExtrasHover: valoresPrioridades2,
        };
        this.dataPrioridades2Aux = {
          titulo: 'Totales',
          labels: this.filtroPrioridades2Gra,
          valores: valoresPrio2,
          labelsExtras: ['Piezas' , 'Monto'],
          labelsExtrasHover: ['Piezas' , 'Monto'],
          valuesExtras: [0, 0],
          valuesExtrasHover: valoresPrioridades2,
        };
        this.tipoGraficaPrioridadesGra2 = 'PrioridadNaranja';
      } else {
        this.dataPrioridades2 = {
          titulo: 'Totales',
          labels: ['Sin datos'],
          valores: [1],
          labelsExtras: ['Piezas' , 'Monto'],
          labelsExtrasHover: ['Piezas' , 'Monto'],
          valuesExtras: [0, 0],
          valuesExtrasHover: [[0, 0]],
        };
        this.tipoGraficaPrioridadesGra2 = 'Gris';
        setTimeout(() => {
          this.activarGrPrioridades2 = true;
        }, 5);
      }
       //////// Empìeza grafica prioridad 3 //////
      if (this.listaPrioridad3G.length > 0) {
        for (let valor of this.listaPrioridad3G) {
          this.filtroPrioridades3Gra.push(valor.nombrePrio3);
        }
        this.tipoGraficaPrioridadesGra3 = 'PrioridadVerde';
      } else {
        this.tipoGraficaPrioridadesGra3 = 'Gris';
        this.filtroPrioridades3Gra.push("");
      }
      let valoresPrio3  = [] = [];
      let valoresPrioridades3 = [] = [];
      for (let nombre of this.listaPrioridad3G) {
        valoresPrioridades3.push([0, 0]);
        valoresPrio3.push(0);
      }
      if (valoresPrio3.length > 0) {
        this.dataPrioridades3 = {
          titulo: 'Totales',
          labels: this.filtroPrioridades3Gra,
          valores: valoresPrio3,
          labelsExtras: ['Piezas' , 'Monto'],
          labelsExtrasHover: ['Piezas' , 'Monto'],
          valuesExtras: [0, 0],
          valuesExtrasHover: valoresPrioridades3,
        };
        this.dataPrioridades3Aux = {
          titulo: 'Totales',
          labels: this.filtroPrioridades3Gra,
          valores: valoresPrio3,
          labelsExtras: ['Piezas' , 'Monto'],
          labelsExtrasHover: ['Piezas' , 'Monto'],
          valuesExtras: [0, 0],
          valuesExtrasHover: valoresPrioridades3,
        };
        this.tipoGraficaPrioridadesGra3 = 'PrioridadVerde';
      } else {
        this.dataPrioridades3 = {
          titulo: 'Totales',
          labels: ['Sin datos'],
          valores: [1],
          labelsExtras: ['Piezas' , 'Monto'],
          labelsExtrasHover: ['Piezas' , 'Monto'],
          valuesExtras: [0, 0],
          valuesExtrasHover: [[0, 0]],
        };
        this.tipoGraficaPrioridadesGra3 = 'Gris';
        setTimeout(() => {
          this.activarGrPrioridades3 = true;
        }, 5);
      }
  }
/* CALCULAR DATOS PARA GRAFICAS , ES EL FOR QUE MANDA A LLMAR AL METODO QUE ASIGNADO LOS VALORES DEL CENTRO*/
calcularDatosParaGraficasD(){
  for (let productos of this.listaProductosG) {
    this.llenarTotalesGraficasD(this.dataProducto, productos, 'PRODUCTOS', this.dataProductosAux);
  }
  for (let productos of this.listaProveedores) {
    this.llenarTotalesGraficasD(this.dataProveedores, productos, 'CLIENTES', this.dataProveedoresAux);
  }
  for (let prrioridades of this.listaPrioridadesG) {
    this.llenarTotalesGraficasD(this.dataPrioridades, prrioridades, 'PRIORIDADES', this.dataPrioridadesAux);
  }
  for (let prrioridades1 of this.listaPrioridad1G) {
    this.llenarTotalesGraficasD(this.dataPrioridades1, prrioridades1, 'PRIORIDAD1', this.dataPrioridades1Aux);
  }
  for (let prioridades2 of this.listaPrioridad2G) {
    this.llenarTotalesGraficasD(this.dataPrioridades2, prioridades2, 'PRIORIDAD2', this.dataPrioridades2Aux);
  }
  for (let prioridades3 of this.listaPrioridad3G) {
    this.llenarTotalesGraficasD(this.dataPrioridades3, prioridades3, 'PRIORIDAD3', this.dataPrioridades3Aux);
  }
}
llenarTotalesGraficasD(total, elemento, graficaElegida, totalAux) {
  switch (graficaElegida) {
    case 'PRODUCTOS':
      let montoAux: any;
      // let valuesExtraAux = totalAux.valuesExtras;
      let valuesExtrasHover = total.valuesExtrasHover;
      let posicion1 = this.filtroProducto.indexOf(elemento.estado);
      if (this.nuevoProducto.indexOf(elemento.estado) === -1) {
        this.nuevoProducto.push(elemento.estado);
      }
      total.valuesExtrasHover[posicion1][0] += elemento.piezas;
      // total.valuesExtras[1] += elemento.monto; // Aumento en clientes
      /*Se agrego esto para convertir el valor en divisa*/
      totalAux.valuesExtras[1] += elemento.monto;
      montoAux = totalAux.valuesExtras[1];
      total.valuesExtras[1] = new AccountingFormatMoney().transform(montoAux);
      /*Termino..*/
      total.valuesExtras[0] += elemento.piezas; // Total de Partidas
      total.valores[posicion1] += elemento.piezas; // +(elemento.monto.toFixed(2)); //Monto total
      /*total.valuesExtrasHover[posicion1][1] += +(elemento.monto.toFixed(2));*/
      /**Se agrego esto para ponerle al monto tipo divisa*/
      valuesExtrasHover[posicion1][1] += +(elemento.monto.toFixed(2));
      total.valuesExtrasHover[posicion1][1] = new AccountingFormatMoney().transform(valuesExtrasHover[posicion1][1]);
      /*---------Termina------*/
      setTimeout(() => {
        this.activarProd = true;
      }, 5);
      break;
    case 'CLIENTES':
      // let valuesExtraAux = total.valuesExtras;
       valuesExtrasHover = total.valuesExtrasHover;
      let posicion2 = this.filtroProveedor.indexOf(elemento.nombreProveedor);
      if (this.nuevoClientes.indexOf(elemento.nombreProveedor) === -1) {
        this.nuevoClientes.push(elemento.nombreProveedor);
      }
      total.valuesExtrasHover[posicion2][0] += elemento.piezas;
      /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
      /*Se agrego esto para convertir el valor en divisa, el total*/
      totalAux.valuesExtras[1] += elemento.monto;
      total.valuesExtras[1] = new AccountingFormatMoney().transform( totalAux.valuesExtras[1]);
      /*Termino..*/
      total.valuesExtras[0] += elemento.piezas; // Total de Partidas
      total.valores[posicion2] += elemento.piezas; // +(elemento.monto.toFixed(2)); //Monto total
      // total.valuesExtrasHover[posicion2][1] += +(elemento.monto.toFixed(2));
      /**Se agrego esto para ponerle al monto tipo divisa*/
      valuesExtrasHover[posicion2][1] += +(elemento.monto.toFixed(2));
      total.valuesExtrasHover[posicion2][1] = new AccountingFormatMoney().transform(valuesExtrasHover[posicion2][1]);
      /*---------Termina------*/
      setTimeout(() => {
        this.activarGrProveedor = true;
      }, 5);
      break;
    case 'PRIORIDADES':
      // let valuesExtraAux = total.valuesExtras;
       valuesExtrasHover = total.valuesExtrasHover;
      let posicionP = this.filtroPrioridadesGra.indexOf(elemento.nombrePrio);
      if (this.nuevaPrioridad.indexOf(elemento.nombrePrio) === -1) {
        this.nuevaPrioridad.push(elemento.nombrePrio);
      }
      total.valuesExtrasHover[posicionP][0] += elemento.piezas;
      /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
      /*Se agrego esto para convertir el valor en divisa*/
      totalAux.valuesExtras[1] += elemento.monto;
      total.valuesExtras[1] = new AccountingFormatMoney().transform( totalAux.valuesExtras[1]);
      /*Termino..*/
      total.valuesExtras[0] += elemento.piezas; // Total de Partidas
      total.valores[posicionP] += elemento.piezas; // +(elemento.monto.toFixed(2)); //Monto total
      // total.valuesExtrasHover[posicionP][1] += +(elemento.monto.toFixed(2));
      /**Se agrego esto para ponerle al monto tipo divisa*/
      valuesExtrasHover[posicionP][1] += +(elemento.monto.toFixed(2));
      total.valuesExtrasHover[posicionP][1] = new AccountingFormatMoney().transform(valuesExtrasHover[posicionP][1]);
      /*---------Termina------*/
      setTimeout(() => {
        this.activarGrPrioridades = true;
      }, 5);
      break;
    case 'PRIORIDAD1':
      // let valuesExtraAux = total.valuesExtras;
      valuesExtrasHover = total.valuesExtrasHover;
      let posicionP1 = this.filtroPrioridades1Gra.indexOf(elemento.nombrePrio1);
      if (this.nuevaPrioridad1.indexOf(elemento.nombrePrio1) === -1) {
        this.nuevaPrioridad1.push(elemento.nombrePrio1);
      }
      total.valuesExtrasHover[posicionP1][0] += elemento.piezas;
      /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
      /*Se agrego esto para convertir el valor en divisa*/
      totalAux.valuesExtras[1] += elemento.monto;
      total.valuesExtras[1] = new AccountingFormatMoney().transform( totalAux.valuesExtras[1]);
      /*Termino..*/
      total.valuesExtras[0] += elemento.piezas; // Total de Partidas
      total.valores[posicionP1] += elemento.piezas; // +(elemento.monto.toFixed(2)); //Monto total
      // total.valuesExtrasHover[posicionP1][1] += +(elemento.monto.toFixed(2));
      /*Se agrego esto para ponerle al monto tipo divisa*/
      valuesExtrasHover[posicionP1][1] += +(elemento.monto.toFixed(2));
      total.valuesExtrasHover[posicionP1][1] = new AccountingFormatMoney().transform(valuesExtrasHover[posicionP1][1]);
      /*---------Termina------*/
      setTimeout(() => {
        this.activarGrPrioridades1 = true;
      }, 5);
      break;
    case 'PRIORIDAD2':
      // let valuesExtraAux = total.valuesExtras;
       valuesExtrasHover = total.valuesExtrasHover;
      let posicionP2 = this.filtroPrioridades2Gra.indexOf(elemento.nombrePrio2);
      if (this.nuevaPrioridad2.indexOf(elemento.nombrePrio2) === -1) {
        this.nuevaPrioridad2.push(elemento.nombrePrio2);
      }
      total.valuesExtrasHover[posicionP2][0] += elemento.piezas;
      /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
      /*Se agrego esto para convertir el valor en divisa*/
      totalAux.valuesExtras[1] += elemento.monto;
      total.valuesExtras[1] = new AccountingFormatMoney().transform( totalAux.valuesExtras[1]);
      /*Termino..*/
      total.valuesExtras[0] += elemento.piezas; // Total de Partidas
      total.valores[posicionP2] += elemento.piezas; // +(elemento.monto.toFixed(2)); //Monto total
      /*total.valuesExtrasHover[posicionP2][1] += +(elemento.monto.toFixed(2));*/
      /**Se agrego esto para ponerle al monto tipo divisa*/
      valuesExtrasHover[posicionP2][1] += +(elemento.monto.toFixed(2));
      total.valuesExtrasHover[posicionP2][1] = new AccountingFormatMoney().transform(valuesExtrasHover[posicionP2][1]);
      /*---------Termina------*/
      setTimeout(() => {
        this.activarGrPrioridades2 = true;
      }, 5);
      break;
    case 'PRIORIDAD3':
      // let valuesExtraAux = total.valuesExtras;
      valuesExtrasHover = total.valuesExtrasHover;
      let posicionP3 = this.filtroPrioridades3Gra.indexOf(elemento.nombrePrio3);
      if (this.nuevaPrioridad3.indexOf(elemento.nombrePrio3) === -1) {
        this.nuevaPrioridad3.push(elemento.nombrePrio3);
      }
      total.valuesExtrasHover[posicionP3][0] += elemento.piezas;
     /* total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
      /*Se agrego esto para convertir el valor en divisa*/
      totalAux.valuesExtras[1] += elemento.monto;
      total.valuesExtras[1] = new AccountingFormatMoney().transform( totalAux.valuesExtras[1]);
      /*Termino..*/
      total.valuesExtras[0] += elemento.piezas; // Total de Partidas
      total.valores[posicionP3] += elemento.piezas; // +(elemento.monto.toFixed(2)); //Monto total
      /*total.valuesExtrasHover[posicionP3][1] += +(elemento.monto.toFixed(2));*/
      /**Se agrego esto para ponerle al monto tipo divisa*/
      valuesExtrasHover[posicionP3][1] += +(elemento.monto.toFixed(2));
      total.valuesExtrasHover[posicionP3][1] = new AccountingFormatMoney().transform(valuesExtrasHover[posicionP3][1]);
      /*---------Termina------*/
      setTimeout(() => {
        this.activarGrPrioridades3 = true;
      }, 5);
      break;
    default:
      break;
  }
}
  cambioDeVista() {
  let idUsuario = SessionUser.getInstance().getUser().getIdEmpleado();
  this.apartarInspeccion(idUsuario);
    // this.partidaPrioridad = Object.assign(new PartidaInspeccion, this.partidaPoriginal);
    console.log("cambio de vista " + this.vistaInicialActiva);
    Array.prototype.push.apply(this.copiaUniversoPartidas, this.universoPartidas);
  }
  apartarInspeccion(idUsuario) {
  this.coreComponent.openModal(1);
    this._insp.apartarInspeccion(idUsuario).subscribe(
      data => {
        if (data.current) {
          this.partidaPrioridad = Object.assign(new PartidaInspeccion, data.current);
          console.log('Soy la partida asignada -- >', this.partidaPrioridad);
          this.vistaInicialActiva = false; // Se cambio
          this.coreComponent.closeModal(1);
          this.partidaPrioridad.esPublicacion = true;
        } else {
          this.activarAlert = true;
        }
        this.coreComponent.closeModal(1);
      });
  }

  regresarVista() {
    this.vistaInicialActiva = true;
    if (this.objetivoDeinspeccion == 0) {
      this.iniciarBotonera = false;
      this.filtrarDias('');
      this.recibeTotalesInspeccion();
    } else {
      this.iniciarBotonera = true;
      //  this.filtrarDias('hoy');
    }
  }

  recibeTotalesInspeccion() {
    // let objetivoDeinspeccionAux;
    this._insp.recibeTotalesInspecion(this.inspector).subscribe(
      data => {

        if(data.current == null){
          this.objetivoDeinspeccionAux = 0;
          this.piezasInspeccionadas = 0;
          this.inspeccionDeceada = 0;
          this.minimoDeInspeccion = 0;
        }else {
        this.objetivoDeinspeccionAux = data.current.pzaAInspeccion;
        this.piezasInspeccionadas = data.current.total_piezasInspeccionadas;
        this.inspeccionDeceada = data.current.maxPiezasInsp;

        if (data.current.piezasProm > this.objetivoDeinspeccionAux ) {
          this.minimoDeInspeccion = this.objetivoDeinspeccionAux;
        } else {
          this.minimoDeInspeccion = data.current.piezasProm;
        }
        }
        if (this.piezasInspeccionadas == 0) {
          this.inspeccionDeceadaHastaElMomento = -1 * this.objetivoDeinspeccionAux;
          this.minimaInspeccionHastaElMomento = -1 * this.minimoDeInspeccion
          this.colorIndiceInspeccionDeceada = "#D0021B";
          this.colorMinimoInspeccion = "#D0021B";
        }
        else {
          var aux: number = 0;
          var aux2: number = 0;
          aux = -1 * this.objetivoDeinspeccionAux;
          aux2 = -1 * this.minimoDeInspeccion;
          this.inspeccionDeceadaHastaElMomento = aux + this.piezasInspeccionadas;
          this.minimaInspeccionHastaElMomento =aux2 + this.piezasInspeccionadas;

          if (this.inspeccionDeceadaHastaElMomento == 0) {
            this.colorIndiceInspeccionDeceada = "#FBB03B";
          }
          else if (this.objetivoDeinspeccionAux < this.inspeccionDeceadaHastaElMomento) {
            this.colorIndiceInspeccionDeceada = "#39B54A";
          }
          else {
            this.colorIndiceInspeccionDeceada = "#D0021B";
          }



          if (this.minimaInspeccionHastaElMomento == 0) {
            this.colorMinimoInspeccion = "#FBB03B";
          }
          else if (this.objetivoDeinspeccionAux == 0) {
            this.colorMinimoInspeccion = "#39B54A";
          }
          else {
            this.colorMinimoInspeccion = "#D0021B";
          }

        }




        /*  minimaInspeccionHastaElMomento: number = 0; */

        // console.log(data);
      },

      error => {
        // let banderaPrueba:boolean;
        // banderaPrueba= false;
      }


    );
  }


  reiniciarVistaA($event) {
  this.activarLlamadaGraficas = true;
    console.log($event);
    console.log('-->', this.vistaInicialActiva);
    this.iniciarBotonera = true;
    this.recibeTotalesInspeccion();
    this.obtenerContadorPendientes();
    this.recibePartidas();
    /*this.filtrarDias('hoy');*/
    this.partidaPrioridad = Object.assign(new PartidaInspeccion, this.partidaPoriginal);
    this.vistaInicialActiva = true;
    console.log("reinicia vista despues de guardar-->", this.vistaInicialActiva);
  }


  obtenerContadorPendientes():any {
  this.activarMenu = false;
    this._insp.recibeNumPendientes().subscribe(
      data => {
        this.totalPendientes = data.current;
        this.objetivoDeinspeccion = data.current;
        if (this.objetivoDeinspeccion == 0 && this.objetivoDeinspeccion !== undefined) {
          this.regresarVista();

        }
        //else {  this.vistaInicialActiva = false;
        // }

        //  this.totalPendientes = 0;
        console.log(this.totalPendientes);
        if (this.totalPendientes == 0) {
          this.banderaPrueba = false;
        } else this.banderaPrueba = true;

        this.itemsMenu = [
          {rol: 'INSPECTOR', active: true, menu: [
              {nombre: 'Inspeccionar Productos', tipo: 'valor', valor: this.totalPendientes, url: 'inspeccion', disable: false, select: true}
            ]}];
        this.activarMenu = true;
      },
      error => {
        console.log("error obtener contador pendientes");
        console.log(error);
        this.banderaPrueba = false;
      }
    );
    return this.objetivoDeinspeccion;
  }

  // obtenerPartidaInspeccion(inspector: any) {
  //
  //   this._insp.ordenarPartidasInspeccion(inspector).subscribe(
  //     data => {
  //       console.log(data); //Pruebas
  //       this.partidaPrioridad = data.current;
  //     }, error => {
  //     }
  //   );
  // }


  mostarOcultarAcordeon() {
    this.ocultarAcor = !this.ocultarAcor;
    if (this.ocultarAcor) {
      this.classAsideMenu = "asideOcultarMenu";
    } else {
      this.classAsideMenu = "asideMostrarMenu";
    }
  }

  obtenerDatosInspector() {
    this.inspector = SessionUser.getInstance().getUser().getUsuario();
  }


  /*************** metodos de para pintar las graficas *************/
  limpiarVariablesGrafica() {
    this.filtroProductos = [];
    this.filtroPE = [];
    this.productos = {};
//    this.listaProductos = [];
  //  this.graficasValores = [];
    /// Empieza lo de grafica por productos
    for (let valor of this.listaProductos) {
      this.filtroProductos.push(valor.tipo);
    }
    let valSecciones = [] = [];
    let valoresOver = [] = [];
    for (let producto of this.listaProductos) {
      valoresOver.push([0, 0]);
      valSecciones.push(0);

    }

    /// Asignacion a los datos de la grafica
    if (this.listaProductos.length > 1) {
      this.productos = {
        titulo: 'Totales',
        labels: this.filtroProductos,
        valores: valSecciones,
        labelsExtras: ['Piezas', 'Monto'],
        labelsExtrasHover: ['Piezas', 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresOver
      };

    } else {
      this.productos = {
        titulo: 'Totales',
        labels: [""],
        valores: [1],
        labelsExtras: ['Piezas', 'Monto'],
        labelsExtrasHover: ['Piezas', 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: [[0], [0]]

      };

    }

  }

   limpiDonaEstadisticas(){
      /* grafica PrioridadesEstadisticas */
     for (let valor of this.lstPrioridadesEstadisticas) {
       this.filtroPE.push(valor.tipo);
     }
     let valSeccionesPE = [] = [];
     let valoresOverPE = [] = [];
     for (let prioridad of this.lstPrioridadesEstadisticas) {
       valoresOverPE.push([0]);
       valSeccionesPE.push(0);

     }
     if (this.lstPrioridadesEstadisticas.length > 1) {
       this.donaPEstadisticas = {
         titulo: 'Totales',
         labels: this.filtroPE,
         valores: valSeccionesPE,
         labelsExtras: ['Piezas'],
         labelsExtrasHover: ['Piezas'],
         valuesExtras: [0],
         valuesExtrasHover: valoresOverPE
       };
       this.tipoGraficaEstadisticas = 'Prioridades';
     } else {
       this.donaPEstadisticas = {
         titulo: 'Totales',
         labels: [""],
         valores: [1],
         labelsExtras: ['Piezas'],
         labelsExtrasHover: ['Piezas'],
         valuesExtras: [0],
         valuesExtrasHover: [[0], [0]]

       };
       this.tipoGraficaEstadisticas = 'Gris';
     }
   }
  calcularDatosParaGraficas() {
    for (let prioridad of this.lstPrioridadesEstadisticas) {
      this.llenarTotales(this.donaPEstadisticas, prioridad, 'PrioridadesEstadisticas');
    }

  }
  llenarTotales(total, elemento, graficaElegida) {
    switch (graficaElegida) {
      // case 'PRIORIDADES':
      //  let posicionP = this.filtroPrioridades.indexOf(elemento.nombrePrioridad);
      //  if (this.nuevaPrioridad.indexOf(elemento.nombrePrioridad) === -1) {
      //   this.nuevaPrioridad.push(elemento.nombrePrioridad);
      //  }
      //  total.valuesExtrasHover[posicionP][0] += elemento.pieza;
      //  total.valuesExtras[1] += elemento.monto; // Aumento en clientes
      //  total.valuesExtras[0] += elemento.pieza; // Total de Partidas
      //  total.valores[posicionP] += elemento.pieza; // +(elemento.monto.toFixed(2)); //Monto total
      //  total.valuesExtrasHover[posicionP][1] += +(elemento.monto.toFixed(2));
      //  break;
      case 'PrioridadesEstadisticas':
       let posicionP = this.filtroPE.indexOf(elemento.tipo);
       if (this.nuevoPE.indexOf(elemento.tipo) === -1) {
        this.nuevoPE.push(elemento.tipo);
       }
       total.valuesExtrasHover[posicionP][0] += elemento.piezas;
       total.valuesExtras[0] += elemento.piezas; // Total de Partidas
       total.valores[posicionP] += elemento.piezas;
      // total.valuesExtrasHover[posicionP][1] = '';
       break;
      default:
        break;
    }
  }

  resetColores() {
    this.filtroProductos = [];
    this.nuevoProductos = [];
    this.listaClientes = [];
    this.graficasValores = [];
    this.graficasCargadas = false;
    this.graficas = [];
    this.nuevoClientes = [];
    this.nuevaPrioridad = [];
    this.listaPrioridades = []; /// Se utiliza para guardar todos los datos de la lista de acuerdo a prioridades..
    this.listaPrioridad1 = []; /// Se utiliza para guardar todos los datos de la lista que contenga solo los que pertenecen a la prioridad 1..
    this.listaProductos = [];
    this.productos = {
      titulo: 'Totales',
      labels: [0],
      valores: [0],
      labelsExtras: [],
      labelsExtrasHover: [],
      valuesExtras: [0, 0],
      valuesExtrasHover: [0]
    }
  //  this.comunService.reiniciarGrafica(true);

  }


  obtenerTotalesPorInspector(inspector: string) {
    var arregloTotalInspector: any = new Array<totalesInspeccionProducto>();
    let datosEstadisticas: any;
    let lista_totales_inspeccion: any;
    let arrayMesesPorAño: any = [];
    let arrayDatosPorAño: any = [];
    let arrayDiaMes: any = [];
    let arrayDatosDiasMes: any = [];
    let arrayDiasQuincena: any = [];
    let arrayDatosQuincena: any = [];
    let listaQuincena: any;
    let listaMes: any;
    let listaAnio: any;
    let cantPiezas: number = 0;
    let cantPiezasP1:number = 0;
    let cantPiezasP2:number = 0;
    let cantPiezasP3:number = 0;
    let arrayCant: any = [];
      this.coreComponent.openModal(0);
    // this.totales_estadisticas = {total_partidas: totPartidas, total_piezas: totPza, listaQuincena: this.listaQuincena, listaMes: this.listaMes, listaAnio: this.listaYear};
    this._insp.consultaDeTotalesPorInspector(inspector).subscribe(
      data => {

        datosEstadisticas = data.current;
        lista_totales_inspeccion = datosEstadisticas.list_Inspeccion;


        for (let i: number = 0; i < lista_totales_inspeccion.length; i++) {
          // let arrayAux = lista_totales_inspeccion[i].fechaFinInspeccion;
          // let parts: any[] = arrayAux.split("-");
          // let mes = Number(parts[1]);
          // let dia = Number(parts[2]);

          if (lista_totales_inspeccion[i].tipo === "ano") {
            arrayMesesPorAño.push(lista_totales_inspeccion[i].fechaEstadisticas);
            arrayDatosPorAño.push(lista_totales_inspeccion[i].totalPiezas);
            cantPiezas += lista_totales_inspeccion[i].totalPiezas;

          } else if (lista_totales_inspeccion[i].tipo === "mes") {
            arrayDiaMes.push(lista_totales_inspeccion[i].fechaEstadisticas);
            arrayDatosDiasMes.push(lista_totales_inspeccion[i].totalPiezas);
            cantPiezas += lista_totales_inspeccion[i].totalPiezas;
          } else if (lista_totales_inspeccion[i].tipo == "quincena") {
            arrayDiasQuincena.push(lista_totales_inspeccion[i].fechaEstadisticas);
            arrayDatosQuincena.push(lista_totales_inspeccion[i].totalPiezas);
            cantPiezas += lista_totales_inspeccion[i].totalPiezas;
          } else if (lista_totales_inspeccion[i].tipo === "prioridades") {
            if (lista_totales_inspeccion[i].prioridad_p == 1) {
              cantPiezasP1 += lista_totales_inspeccion[i].totalPiezas;
            } else if (lista_totales_inspeccion[i].prioridad_p == 2) {
              cantPiezasP2 += lista_totales_inspeccion[i].totalPiezas;
            } else if (lista_totales_inspeccion[i].prioridad_p == 3) {
              cantPiezasP3 += lista_totales_inspeccion[i].totalPiezas;
            }

          }
        }
        listaQuincena = { listaLabel: arrayDiasQuincena, listaDatos: arrayDatosQuincena };
        listaMes = { listaLabel: arrayDiaMes, listaDatos: arrayDatosDiasMes };
        listaAnio = { listaLabel: arrayMesesPorAño, listaDatos: arrayDatosPorAño };

        this.totales_estadisticas = {
          total_partidas: datosEstadisticas.t_partidas,
          total_piezas: datosEstadisticas.total_A,
          total_hallazgos: datosEstadisticas.num_hallazgos,
          listaQuincena: listaQuincena,
          listaMes: listaMes,
          listaAnio: listaAnio
        };

        arrayCant.push(cantPiezasP1);
        arrayCant.push(cantPiezasP2);
        arrayCant.push(cantPiezasP3);
        if ((cantPiezasP1 == 0 || cantPiezasP1 == null ) && (cantPiezasP2 == 0 || cantPiezasP2 == null ) && (cantPiezasP3 == 0 || cantPiezasP3 == null )){
          this.lstPrioridadesEstadisticas = [];
        }else {
        this.lstPrioridadesEstadisticas = [
          { "tipo": 'Prioridad 1', "piezas": cantPiezasP1, "montos": 0 },
          { "tipo": 'Prioridad 2', "piezas": cantPiezasP2, "montos": 0 },
          { "tipo": 'Prioridad 3', "piezas": cantPiezasP3, "montos": 0 }
        ];
      }
        this.graficas = [];
        // Titulos de Gráficas
        this.graficasValores[
          this.donaPEstadisticas
        ]
        this.graficas = [
          'PRODUCTOS',
          'PrioridadesEstadisticas'
        ];
       this.limpiDonaEstadisticas();
       this.calcularDatosParaGraficas();
       this.cargarEstadisticas = true;
  this.coreComponent.closeModal(0);
      }, error => {
      }
    );
  }
  /************ RECARGAR DATOS CUANDO SE QUEDA EN LA VISTA GRABAR*****/
  recargarDatos($event) {
    const idUsuario = SessionUser.getInstance().getUser().getIdEmpleado();
    this.apartarInspeccion(idUsuario);
  }
  cerrarAler(cerrar) {
    this.activarAlert = false;
  }
  recargarVista() {
    this.recibePartidas();
    this.obtenerDatosInspector();
    this.obtenerContadorPendientes();
    this.recibeTotalesInspeccion();
    setTimeout(() => {
      //  this.obtenerPartidaInspeccion(this.inspector);
      this.obtenerTotalesPorInspector(this.inspector);
    }, 1000);
  }
  cerrarAlertaPrio(valor) {
    this.activarAlerta = false;
  }
  recibirDatos(valor) {
    this.cantidadImprimir = valor;
  }
  imprimir() {

 /*   if (respuesta === 'Anaquel') {
      ubic = 'A' + letra;
    } else if (respuesta === 'Congelador') {
      ubic = 'EC' + letra;
    } else if (respuesta === 'Refrigerador') {
      ubic = 'ER' + letra;
    } else if (respuesta === 'Tarima') {
      ubic = 'T' + letra;
    }*/
    let dato: parametrosInspeccion = new parametrosInspeccion();
    dato.estado = 'Despachable';
    dato.nombreImagenesRechazo = 'OFENBACH MEXICANA S.A. DE C.V.'; // Nombre cliente
    dato.tipoPresentacion = ''; // tipo Partida
    dato.tipo = 'Estandares'; // tipo
    dato.usuario = 'Inspector2'; // Usuario
    dato.manejo = 'ECA'; // Ubicacion;
    dato.presentacionProd = 'Normal'; // control
    dato.fechaInspeccion = '2020-02-11'; // fecha estimada de entrega
    dato.idProducto = 1; // aceptaParciales
    dato.unidadCambio = 'FD-011020-0291-1';
    this.imprimirEtiqueta(dato);
    const cant = this.cantidadImprimir;
   /* for (let i = 0; i < cant; i ++) {
      dato.unidadCambio = 'FD-121619-9908';
      dato.unidadCambio += '-' + (i + 1);
      this.imprimirEtiqueta(dato);
    }*/
  }

  imprimirEtiqueta(datos: parametrosInspeccion) {
    let fee: string;
    let tipoPartida: string = '';
    if (datos.fechaInspeccion !== null && datos.fechaInspeccion !== undefined) {
      const fechaSec = datos.fechaInspeccion.toString().split('-');
      fee = fechaSec[1] + fechaSec[2] + fechaSec[0].substring(2, 4);
    } else {
      fee = '';
    }
    if (datos.idProducto  === 1) {
      tipoPartida = '(Pa';
    } else if (datos.idProducto  === 2) {
      tipoPartida = '(NA';
    } else {
      tipoPartida = '(NPa';
    }
    if (datos.tipoPresentacion === 'Programado') {
      tipoPartida += '/Pr)';
    } else {
      tipoPartida += ')';
    }
    const BrowserWindow = electron.remote.BrowserWindow;
    let newWin = new BrowserWindow({ width: 288, height: 216 });
    var fecha: string = new DateFormatSlashHour().transform(new Date());
    var html = [
      "<html><head>",
      "<style>",
      "@media print { @page {size: 10cm 9cm;padding:0;page-break-inside: avoid;page-break-before: avoid;page-break-after: avoid;}}",
      ".contenido {position: absolute;max-width: 9.5cm; page-break-inside: avoid; page-break-before: avoid;page-break-after: avoid;} .bcode{font-family:'Novecentowide'; font-size:12px;} img{page-break-inside: avoid; page-break-before: avoid;page-break-after: avoid;}",
      "</style></head>",
      "<body> <div class='contenido'>",
      "<img style='width: 8cm; height:2cm; margin-top:-20px;' ",
      "src='https://barcode.tec-it.com/barcode.ashx?data=" + datos.unidadCambio + "&code=Code128&multiplebarcodes=false&translate-esc=false&unit=Fit&dpi=96&imagetype=Gif&rotation=0&color=%23000000&bgcolor=%23ffffff&qunit=Mm&quiet=0'>",
      "</div>",
      "<div style='padding-top: 65px; ' >",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; min-height:23px; width:160px;width:160px; text-align:right; padding-right: 5px '> Cliente:</div>",
      "<div  style='font-size: 14px; min-height:23px;'> " + datos.nombreImagenesRechazo + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px;width: 432px;  font-weight: bold; text-align: center;'> " + tipoPartida + ' ' +  fee + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Estatus:</div>",
      "<div  style='font-size: 14px; height:23px;  font-weight: bold; '> " + datos.estado + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Inspecciono: </div>",
      "<div  style='font-size: 14px; height:23px; '> " + datos.usuario + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Tipo:</div>",
      "<div  style='font-size: 14px; height:23px; '> " + datos.tipo + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Control: </div>",
      "<div  style='font-size: 14px; height:23px; '>" + datos.presentacionProd + "</div>",
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Ubicación:</div>",
      "<div  style='font-size: 14px; min-height:23px;'> " + datos.manejo + "</div>",  /*datos.ubicacion*/
      "</div>",
      "<div style='flex-direction: row; display: flex;' >",
      "<div  style='font-size: 14px; width:140px; text-align:right; padding-right: 5px'> Inspeccionado:</div>",
      "<div  style='font-size: 14px; '> " + fecha + "</div>",
      "</div>",
      "</div>",

      "</body></html>"
    ].join("");

    newWin.loadURL("data:text/html;charset=utf-8," + encodeURI(html));
    newWin.hide();
    // newWin.webContents.openDevTools()
    newWin.webContents.on('did-finish-load', () => {
      console.log(newWin.webContents.getPrinters());
      let prints = newWin.webContents.getPrinters();
      let impresora: String = "";

      for (let print of prints) {
        if (print.description == "ZebraTicket") {
          impresora = print.name;
        }
      }

      newWin.webContents.print({ silent: false, printBackground: false, deviceName: impresora }, (success) => {
        newWin.close();
      });
    })
  }
}
