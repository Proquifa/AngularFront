import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output
} from "@angular/core";

import { Router } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { TrabajarRutasEnvioService } from "./trabajar-rutas-envio-informacion/trabajar-rutas-envio.services";
import {SessionUser} from '../../../../services/session/session.service';
import {AccountingFormatMoney} from '../../../../pipes/accounting/accounting.pipe';
import {EmbalarService} from '../../../../services/embalar/embalar.service';
import {ComunService} from '../../../../services/comun/comun.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: "pn-trabajar-rutas-envio",
  templateUrl: "./trabajar-rutas-envio.component.html",
  styleUrls: ["./trabajar-rutas-envio.component.scss"]
})
export class TrabajarRutasEnvioComponent implements OnInit {
  //////variables de los donout
  arrayProductos: any;
  array2: any;
  tipoGrafica: string;
  arrayValoresPro: any;
  arrayLabelPro: any;
  tipoGraficaPro: string;
  tipoGraficaPrioridades: string;
  arrayValoresPrioridad: any;
  arrayLabelPrioridad: any;
  tipoGraficaP1: string;
  tipoGraficaP2: string;
  tipoGraficaP3: string;
  arrayValoresP1: any;
  arrayValoresP2: any;
  arrayValoresP3: any;
  arraylabelP1: any;
  arraylabelP2: any;
  arraylabelP3: any;
  valoresTabs: any[] = [0, 0, 0, 0, 0];
  tiposGraficas: any[] = ["Gris", "Gris", "Gris", "Gris", "Gris"];
  listaPrioridades = new Array<any>();
  datosGraficas: any = [];

  graficasValores: any[] = [];

  dataCLienteReload: boolean = true;
  dataCLiente: any = {
    titulo: "Clientes",
    labels: [""],
    valores: [1],
    labelsExtras: [["Piezas"], ["Monto"]],
    labelsExtrasHover: ["Piezas", "Monto"],
    valuesExtras: [0, "$0.00"],
    valuesExtrasHover: [[0, "$0.00"]]
  };

  dataPrioridadesReload: boolean = true;
  dataPrioridades: any = {
    titulo: "Prioridades",
    labels: [""],
    valores: [1],
    labelsExtras: [["Piezas"], ["Monto"]],
    labelsExtrasHover: ["Piezas", "Monto"],
    valuesExtras: [0, "$0.00"],
    valuesExtrasHover: [[0, "$0.00"]]
  };

  dataPrioridadUnoReload: boolean = true;
  dataPrioridadUno: any = {
    titulo: "Prioridad 1",
    labels: [""],
    valores: [1],
    labelsExtras: [["Piezas"], ["Monto"]],
    labelsExtrasHover: ["Piezas", "Monto"],
    valuesExtras: [0, "$0.00"],
    valuesExtrasHover: [[0, "$0.00"]]
  };

  dataPrioridadDosReload: boolean = true;
  dataPrioridadDos: any = {
    titulo: "Prioridad 2",
    labels: [""],
    valores: [1],
    labelsExtras: [["Piezas"], ["Monto"]],
    labelsExtrasHover: ["Piezas", "Monto"],
    valuesExtras: [0, "$0.00"],
    valuesExtrasHover: [[0, "$0.00"]]
  };

  dataPrioridadTresReload: boolean = true;
  dataPrioridadTres: any = {
    titulo: "Prioridad 3",
    labels: [""],
    valores: [1],
    labelsExtras: [["Piezas"], ["Monto"]],
    labelsExtrasHover: ["Piezas", "Monto"],
    valuesExtras: [0, "$0.00"],
    valuesExtrasHover: [[0, "$0.00"]]
  };
  ///////

  vistaInicialActiva: boolean = true;
  classAsideMenu: string = "asideNormalMenu";
  ocultarAcor: boolean;
  iniciarBotonera: boolean;
  totalPendientes: number = 0;
  ocultaScroll: boolean;

  /////variables  para el html
  objetivoDeinspeccion: number = 0;
  piezasInspeccionadas: number = 0;
  inspeccionDeceada: number = 0;
  inspeccionDeceadaHastaElMomento: number = 0;
  inspeccionDeceadaHastaElMomentoMen: number = 0;
  minimoDeInspeccion: number = 0;
  minimaInspeccionHastaElMomento: number = 0;

  colorIndiceInspeccionDeceada: string = "#D0021B";
  colorMinimoInspeccion: string = "#D0021B";
  valAux: number =1;
  itemsMenu: any[];
  /*+++++++++VARIABLES APRA LA GRAFICA ESTADISTICAS POR USUARIO++++++*/
  hechas = 3;
  inspeccionDeceadaVal: number = 1000;
  listaPrioridadEstadisticas: any;
  listaAnios: any[];
  listaPorAnio: any [] = [];
  listaPorQuincena: any [] = [];
  listaPorMes: any [] = [];
  arrayDatosYear: any = [];
  arrayLabelYear: any = [];
  listaQuincena: any = [] ;
  listaMes: any = [];
  listaYear: any = [];
  arrayLabelQuincena: any = [];
  arrayDatosQuincena: any = [];
  arrayDatosMes: any = [];
  arrayLabelMes: any = [];
  listaPrioridadUsuarioEstadisticas: any[];
  filtroPrioUsuario: any[] = [];
  listaPrioridadEstadisticasDatos: any;
  totales_estadisticas: any;
  activarGraficasPrioEsta: boolean;
  graficasEstadisticas: any;
  dataPrioridadEstadisticas: any;
  nuevaPrioridadEstadisticas: any = [];
  idUsuario: any;
  activarBtnIngresar: boolean;
  piezasH = 10;
  piezasMax= 10;
  totEmb = 0;
  totAlmacen =0;
  totEnvio = 0;
  totEnvioXCliente = 0;
  actualizarDatos: boolean = true;
  /*+++++++*/
  /*MENU*/
  ocultarAcorE: boolean;
  classAsideMenuE = 'asidePrincipalMenuEmbalaje';
  /**********/
  mensajeEmbDeseado: string;
  valorSigno: string;
  mensajePackingDeseadas: string;
  activeMenu: boolean;
  subs: Subscription;
  /**************/
  constructor(private comunService: ComunService, private router: Router, private _trabajarRutasEnvioService: TrabajarRutasEnvioService, private _embalarS: EmbalarService) {

  }

  ngOnInit() {
    this.subs = this.comunService.recargar.subscribe(
      (data) => {
        if (data === 'envio') {
          this.activeMenu = false;
          this.valAux = 1;
          this.obtenerMetodos();
        }
      });
    this.obtenerMetodos();
  }
  obtenerMetodos() {
    this.idUsuario = SessionUser.getInstance().getUser().getIdEmpleado();
    let id = parseInt(this.idUsuario);
    let obj = {
      idUsuarioLogueado: id
    };
    this.ObtenerEstadisticaUsuarioEnvioPL(obj);
    if (this.inspeccionDeceadaHastaElMomento < 0) {
      this.colorIndiceInspeccionDeceada = "#D0021B";
    } else if (this.inspeccionDeceada > this.inspeccionDeceadaHastaElMomento) {
      this.colorIndiceInspeccionDeceada = "#39B54A"; ///// verde
    }

    if (this.minimaInspeccionHastaElMomento < 0) {
      this.colorMinimoInspeccion = "#D0021B"; //rojo
    } else if (this.minimoDeInspeccion > this.minimaInspeccionHastaElMomento) {
      this.colorMinimoInspeccion = "#39B54A";
    }

    this._trabajarRutasEnvioService.obtenerObjetivos().subscribe(
      data => {
        if (data.current["Hoy"] != undefined) {
          this.piezasInspeccionadas = data.current["Hoy"];
        }
        if (data.current["Deseadas"] != undefined) {
          this.inspeccionDeceada = data.current["Deseadas"];
          this.inspeccionDeceadaHastaElMomento =
            this.piezasInspeccionadas - this.inspeccionDeceada;
          this.inspeccionDeceadaHastaElMomentoMen = -1 * this.inspeccionDeceadaHastaElMomento;
          if (this.inspeccionDeceadaHastaElMomentoMen === 0) {
            this.mensajePackingDeseadas = 'HAZ ALCANZADO LOS PAKING LIST DESEADOS';
          } else {
            this.mensajePackingDeseadas = 'ESTAS A' + ' ' + this.inspeccionDeceadaHastaElMomentoMen + ' ' + 'PACKING LIST DESEADAS';
          }
        }
        if (data.current["Minimo"] != undefined) {
          this.minimoDeInspeccion = data.current["Minimo"];
          /*this.minimaInspeccionHastaElMomento =
            this.minimoDeInspeccion - this.piezasInspeccionadas;*/
          if (this.piezasInspeccionadas > this.minimoDeInspeccion) {
            // this.cambiarColor = '#39B54A';
            this.minimaInspeccionHastaElMomento = this.piezasInspeccionadas - this.minimoDeInspeccion;
            this.valorSigno = '+';
            this.colorMinimoInspeccion = "#39B54A";
            this.mensajeEmbDeseado = 'HAZ SUPERADO EL MÍNIMO DE ENVÍOS';
          } else if (this.minimoDeInspeccion > this.piezasInspeccionadas) {
            // this.cambiarColor = '#D0021B';
            this.minimaInspeccionHastaElMomento = this.minimoDeInspeccion - this.piezasInspeccionadas;
            this.valorSigno = '-';
            this.colorMinimoInspeccion = "#D0021B"; //rojo
            if (this.minimaInspeccionHastaElMomento > 1 ) {
              this.mensajeEmbDeseado = 'ESTAS A' + ' ' + this.minimaInspeccionHastaElMomento + ' ' + 'PIEZAS DE SUPERAR EL MÌNIMO DE ENVÍO';
            } else {
              this.mensajeEmbDeseado = 'ESTAS A' + ' ' + this.minimaInspeccionHastaElMomento + ' ' + 'PIEZA DE SUPERAR EL MÌNIMO DE ENVÍO';
            }
          } else if (this.piezasInspeccionadas === this.minimoDeInspeccion) {
            // this.cambiarColor = '#FBB03B';
            this.minimaInspeccionHastaElMomento = this.piezasInspeccionadas - this.minimoDeInspeccion;
            this.valorSigno = ' ';
            this.mensajeEmbDeseado = 'HAZ ALCANZADO EL MÍNIMO DE ENVÍOS';
          }
        }
        if (data.current["Objetivo"] != undefined) {
          this.objetivoDeinspeccion = data.current["Objetivo"];
        }

        if (this.piezasInspeccionadas < this.inspeccionDeceada) {
          this.activarBtnIngresar = true;
        } else {
          this.activarBtnIngresar = false;
        }
      },
      error => {
        console.log(error);
      }
    );

    this._trabajarRutasEnvioService.obtenerMontosTab().subscribe(
      data => {
        console.log(data);
        this.valoresTabs = [
          data.current["Hoy"],
          data.current["Mañana"],
          data.current["Pasado"],
          data.current["Futuro"],
          data.current["Todo"]
        ];
      },
      error => {
        console.log(error);
      }
    );

    this._trabajarRutasEnvioService.obtenerInfoGrafica().subscribe(
      data => {
        this.datosGraficas = data.current;
        this.llenarGraficas("Hoy");
      },
      error => {
        console.log(error);
      }
    );

    this.seleccionarHoy();
    this.obtenerTot();
  }
  obtenerTot() {
    this._embalarS.totalesGeneral().subscribe(
      data => {
        this.totEmb = data.current.Embalar;
        this.totAlmacen = data.current.Almacen;
        this.totEnvio = data.current.Envio;
        this.totEnvioXCliente = data.current.EnvioXCliente;
        this.itemsMenu = [
          {rol: 'RESPONSABLE DE ALMACEN ', active: true, menu: [
              {nombre: 'Salidas Almacén', tipo: 'valor', valor: this.totEmb, url: 'embalar', select: false},
              {
                nombre: 'Trabajar rutas',
                tipo: '',
                valor: 0,
                url: 'poolVisitas',
                disable: true,
                subMenu: [
                  { nombre: 'Almacén', tipo: 'valor', valor: this.totAlmacen, url: 'almacen', select: false},
                  { nombre: 'Envío', tipo: 'valor', valor: this.totEnvio, url: 'envio', select: true},
                  { nombre: 'Envio Pagado por cliente', tipo: 'valor', valor : this.totEnvioXCliente , url: 'trabajarRutaCliente'}
                ],
                select: false
              }]}];
        this.activeMenu = true;
    }, error => {
        console.log(error);
      });
  }
  /**MENU***/
  mostarOcultarAcordeon() {
    this.ocultarAcorE = !this.ocultarAcorE;
    if (this.ocultarAcorE) {
      this.classAsideMenu = 'asideOcultarMenu';
    } else {
      this.classAsideMenu = 'asideMostrarMenu';
    }
  }
  ObtenerEstadisticaUsuarioEnvioPL(idUsuario) {
    this.activarGraficasPrioEsta = false;
    let totPza: number = 0 ;
    let totPartidas: number = 0;
    let totPzaPrio: number = 0;
    let totPzaPrio1: number = 0;
    let totPzaPrio2: number = 0;
    let totPzaPrio3: number = 0;
    this.listaQuincena = {listaLabel: [''], listaDatos: [0]};
    this.listaMes = {listaLabel: [''], listaDatos: [0]};
    this.listaYear = {listaLabel: [''], listaDatos: [0]};
    this.listaPrioridadUsuarioEstadisticas = [];
    this._trabajarRutasEnvioService.ObtenerEstadisticaUsuarioEnvioPL(idUsuario).subscribe(
      data => {
        console.log('Soy data prioridades -->', data.current);
        /////////////////////////////////////////////////////////////////////
        if (data.current.Prioridad !== undefined) {
          if (data.current.AllYears) {
            this.listaAnios = data.current.AllYears;
          }
          if (data.current.Prioridad) {
            this.listaPrioridadEstadisticas  = data.current.Prioridad;
          }
          if (data.current.Year) {
            this.listaPorAnio = data.current.Year;
            this.listaPorAnio.forEach ( inde => {
              this.arrayLabelYear.push(inde.tiempo);
              this.arrayDatosYear.push(inde.totalPiezas);
            });
          }
          if (data.current.Mes) {
            this.listaPorMes = data.current.Mes;
            this.listaPorMes.forEach ( inde => {
              this.arrayLabelMes.push(inde.tiempo);
              this.arrayDatosMes.push(inde.totalPiezas);
            });
          }
          if (data.current.Quincena) {
            this.listaPorQuincena = data.current.Quincena;
            this.listaPorQuincena.forEach ( inde => {
              this.arrayLabelQuincena.push(inde.tiempo);
              this.arrayDatosQuincena.push(inde.totalPiezas);
            });
          }
          this.listaPrioridadEstadisticasDatos = data.current.Prioridad;
          ///// Se asignan a las listas los datos para la grafica de puntos
          this.listaQuincena = {listaLabel: this.arrayLabelQuincena, listaDatos: this.arrayDatosQuincena};
          this.listaMes = {listaLabel: this.arrayLabelMes, listaDatos: this.arrayDatosMes};
          this.listaYear = {listaLabel: this.arrayLabelYear, listaDatos: this.arrayDatosYear};
          ////// Aqui termina
          for (var i = 0; i < this.listaAnios.length; i++) {
            totPza += this.listaAnios[i].totalPiezas;
            totPartidas += this.listaAnios[i].totalPl;
          }
          for (var i = 0; i < this.listaPrioridadEstadisticasDatos.length; i++) {
            if (this.listaPrioridadEstadisticasDatos[i].prioridad === 'P1') {
              totPzaPrio1 += this.listaPrioridadEstadisticasDatos[i].totalPiezas;
            } else if (this.listaPrioridadEstadisticasDatos[i].prioridad === 'P2') {
              totPzaPrio2 += this.listaPrioridadEstadisticasDatos[i].totalPiezas;
            } else if (this.listaPrioridadEstadisticasDatos[i].prioridad === 'P3') {
              totPzaPrio3 += this.listaPrioridadEstadisticasDatos[i].totalPiezas;
            }
          }
          //////////////////////////////////////// GRAFICAS DONUT CHARTS //////////////////7///////////////
          this.listaPrioridadUsuarioEstadisticas = [{'prioridad': 'Prioridad 1', 'pieza':  totPzaPrio1},
            {'prioridad': 'Prioridad 2', 'pieza':  totPzaPrio2},
            {'prioridad': 'Prioridad 3', 'pieza':  totPzaPrio3}];
          this.limpiarVariablesGraficaEstadisticas();
          this.calcularDatosGraficaEstadisticas();
          this.totales_estadisticas = {total_partidas: totPartidas, total_piezas: totPza, listaQuincena: this.listaQuincena, listaMes: this.listaMes, listaAnio: this.listaYear};
        } else {
          //////////////////////////////////////// GRAFICAS DONUT CHARTS /////////////////////////////////
          this.listaPrioridadUsuarioEstadisticas = [{'prioridad': 'Ninguna', 'pieza':  0}];
          this.totales_estadisticas = {total_partidas: totPartidas, total_piezas: totPza, listaQuincena: this.listaQuincena, listaMes: this.listaMes, listaAnio: this.listaYear};
          this.limpiarVariablesGraficaEstadisticas();
          this.calcularDatosGraficaEstadisticas();
        }
      });
  }
  // Metodo para las variables de la graficas estadisticas
  limpiarVariablesGraficaEstadisticas () {
    this.filtroPrioUsuario = [];
    for (let valor of this.listaPrioridadUsuarioEstadisticas) {
      this.filtroPrioUsuario.push(valor.prioridad);
    }
    let valoresC  = [] = [];
    let valoresPrioEst  = [] = [];
    for (let nombre of this.listaPrioridadUsuarioEstadisticas) {
      valoresPrioEst.push([0]);
      valoresC.push(0);
    }
    if (this.listaPrioridadUsuarioEstadisticas.length > 1) {
      this.dataPrioridadEstadisticas = {
        titulo: 'Totales',
        labels: this.filtroPrioUsuario,
        valores: valoresC,
        labelsExtras: ['Piezas'],
        labelsExtrasHover: ['Piezas'],
        valuesExtras: [0],
        valuesExtrasHover: valoresPrioEst
      };
      this.graficasEstadisticas = 'Prioridades';
    } else {
      this.dataPrioridadEstadisticas = {
        titulo: 'Totales',
        labels: [""],
        valores: [1],
        labelsExtras: ['Piezas'],
        labelsExtrasHover: ['Piezas'],
        valuesExtras: [0],
        valuesExtrasHover: [[0], [0]]

      };
      this.graficasEstadisticas = 'Gris';
    }
  }
  calcularDatosGraficaEstadisticas () {
    for (let usuario of this.listaPrioridadUsuarioEstadisticas) {
      this.llenarTotales(this.dataPrioridadEstadisticas, usuario, 'PRIORIDADESESTADISTICAS');
    }
  }
  llenarTotales(total, elemento, graficaElegida) {
    switch (graficaElegida) {
      case 'PRIORIDADESESTADISTICAS':
        let posicionP4 = this.filtroPrioUsuario.indexOf(elemento.prioridad);
        if (this.nuevaPrioridadEstadisticas.indexOf(elemento.prioridad) === -1) {
          this.nuevaPrioridadEstadisticas.push(elemento.prioridad);
        }
        total.valuesExtrasHover[posicionP4][0] += elemento.pieza;
        total.valuesExtras[0] += elemento.pieza; // Total de Partidas
        total.valores[posicionP4] += elemento.pieza; // +(elemento.monto.toFixed(2)); //Monto total
        this.activarGraficasPrioEsta = true; // ACTIVAR EL COMPONENTE PARA LA GRAFICA DE DONA PRIORIDADES USUARIO
        break;
      default:
        break;
    }
  }
  //////////////////////////////////////////////////////////
  cambiarPantalla() {
    this.vistaInicialActiva = false;
  }
  regresarVista() {
    this.vistaInicialActiva = true;
    this.seleccionarHoy();
  }
  seleccionarHoy() {
    setTimeout(function () {
      const idHoy = document.getElementById('dhoy');
      if (idHoy) {
        document.getElementById('dhoy').click();
      } else {
        this.seleccionarHoy();
      }

    },100);
  }
  selectWallet() {
    this.router.navigate(["almacen"]);
  }

  cambiarTab($event) {
    switch ($event) {
      case "hoy":
        this.llenarGraficas("Hoy");
        break;
      case "manana":
        this.llenarGraficas("Mañana");
        break;
      case "pasado":
        this.llenarGraficas("Pasado");
        break;
      case "futuro":
        this.llenarGraficas("futuro");
        break;
      case "todo":
        this.llenarGraficas("Todo");
        break;
    }
  }

  llenarGraficas(dia) {
    this.limpiarGraficas();
    if (this.datosGraficas[dia] != undefined) {
      let graficaHoy = this.datosGraficas[dia];
      console.log(graficaHoy);

      if (graficaHoy["Clientes"] != undefined) {
        let clientes: any = [];
        let monto: any = [];
        let piezasMonto: any = [];
        let sumPiezas: any = 0;
        let sumMonto: any = 0;
        let formatoMonto: any; /// Se agrego para darle formato al monto
        let formatoMontoTotal: any; /// Se agrego para darle formato al monto
        for (let item of graficaHoy["Clientes"]) {
          clientes.push(item.titulo);
          monto.push(item.monto);
          formatoMonto = new AccountingFormatMoney().transform(item.monto);
          piezasMonto.push([item.piezas, formatoMonto]);  /*piezasMonto.push([item.piezas, "$" + item.monto]);*/
          sumPiezas += item.piezas;
          sumMonto += item.monto;
        }
        /*For para ordenar los datos de acuerdo al monto*/
        let montoAuxL: any;
        let band = false;
        while (!band) {
          band = true;
          for (var i = 0; i < monto.length - 1; i++) {
            var aux= i + 1;
            if (monto[i] < monto[aux]) {
              montoAuxL = monto[i + 1];
              monto[i + 1] = monto[i];
              monto[i] = montoAuxL;
              // band = false;
              ///////////////////////
              montoAuxL = piezasMonto[i + 1][1];
              piezasMonto[i + 1][1] = piezasMonto[i][1];
              piezasMonto[i][1] = montoAuxL;
              /////////////////////
              montoAuxL = piezasMonto[i + 1][0];
              piezasMonto[i + 1][0] = piezasMonto[i][0];
              piezasMonto[i][0] = montoAuxL;
              /////////////////////////////
              montoAuxL = clientes[i + 1];
              clientes[i + 1] = clientes[i];
              clientes[i] = montoAuxL;
              band = false;
            }
          }
        }
        /**********************************************/
        formatoMontoTotal = new AccountingFormatMoney().transform(sumMonto); /// Se asigna el formato al total del monto
        this.dataCLiente = {
          titulo: "Clientes",
          labels: clientes,
          valores: monto,
          labelsExtras: [["Piezas"], ["Monto"]],
          labelsExtrasHover: ["Piezas", "Monto"],
          valuesExtras: [sumPiezas, formatoMontoTotal], /*valuesExtras: [sumPiezas, "$" + sumMonto],*/
          valuesExtrasHover: piezasMonto
        };
        this.tiposGraficas[0] = "General";
        this.dataCLienteReload = false;
        setTimeout(() => {
          this.dataCLienteReload = true;
        }, 5);
      } else {
        this.tiposGraficas[0] = "Gris";
        this.dataCLienteReload = false;
        setTimeout(() => {
          this.dataCLienteReload = true;
        }, 5);
      }

      if (graficaHoy["Prioridades"] != undefined) {
        this.listaPrioridades = [];
        let prioridades: any = [];
        let monto: any = [];
        let piezas: any = [];
        let piezasMonto: any = [];
        let sumPiezas: any = 0;
        let sumMonto: any = 0;
        var arrayValoresAux = new Array<any>();
        let formatoMonto: any; /// Se agrego para darle formato al monto
        let formatoMontoTotal: any; /// Se agrego para darle formato al monto
        let montoS: number;
        for (let item of graficaHoy["Prioridades"]) {
          prioridades.push(item.titulo);
          monto.push(item.monto);
          formatoMonto = new AccountingFormatMoney().transform(item.monto);
          piezas.push(item.piezas);
          piezasMonto.push([item.piezas, formatoMonto]);  /*piezasMonto.push([item.piezas, "$" + item.monto]);*/
          sumPiezas += item.piezas;
          sumMonto += item.monto;
        }
        /***/
        /*For para ordenar los datos de acuerdo al monto*/
        let montoAuxL: any;
        let band = false;
        while (!band) {
          band = true;
          for (var i = 0; i < monto.length - 1; i++) {
            var aux= i + 1;
            if (monto[i] < monto[aux]) {
              montoAuxL = monto[i + 1];
              monto[i + 1] = monto[i];
              monto[i] = montoAuxL;
              // band = false;
              /////////////PIEZAS/////////////
              montoAuxL = piezas[i + 1];
              piezas[i + 1] = piezas[i];
              piezas[i] = montoAuxL;
              ///////////////////////
              montoAuxL = piezasMonto[i + 1][1];
              piezasMonto[i + 1][1] = piezasMonto[i][1];
              piezasMonto[i][1] = montoAuxL;
              /////////////////////
              montoAuxL = piezasMonto[i + 1][0];
              piezasMonto[i + 1][0] = piezasMonto[i][0];
              piezasMonto[i][0] = montoAuxL;
              /////////////////////////////
              montoAuxL = prioridades[i + 1];
              prioridades[i + 1] = prioridades[i];
              prioridades[i] = montoAuxL;
              band = false;
            }
          }
        }
        /**********************************************/
        if ( prioridades.length > 0 && this.valAux === 1) {
          this.tipoGraficaPrioridades = 'prioridades';
          let arrayPrio = ['P1', 'P2', 'P3'];
          let arrayLabelAux = ['Prioridad 1', 'Prioridad 2', 'Prioridad 3'];
          for (var i = 0; i < prioridades.length; i++) {
            for (var j = 0; j < arrayPrio.length; j++) {
              if (prioridades[i] === arrayPrio[j]) {
                arrayValoresAux[j] = monto[i];
                formatoMonto = new AccountingFormatMoney().transform(monto[i]);
               /* prioridades[j] = arrayLabelAux[j];
                piezasMonto[j] = [[piezas[i]], [formatoMonto]];*/
                this.listaPrioridades[j] = ({prioridad: arrayLabelAux[j], piezas: piezas[i], monto: formatoMonto, montoS: monto[i]});
              } else if (arrayValoresAux[j] === undefined) {
                arrayValoresAux [j] = 0;
                /*piezasMonto[j] = [[0], [0]];
                prioridades[j] = arrayLabelAux[j];*/
                this.listaPrioridades[j] = ({prioridad: arrayLabelAux[j], piezas: 0, monto: 0, montoS: 0});
              }
            }
          }
          this.valAux = 2;
        }
        /***/
        for (var i = 0; i < this.listaPrioridades.length; i++) {
          piezasMonto[i] = [this.listaPrioridades[i].piezas, this.listaPrioridades[i].monto];
          prioridades[i] = this.listaPrioridades[i].prioridad;
          monto[i] = this.listaPrioridades[i].montoS;
        }
        /***/
        console.log('Soy lista de prioridades --->', this.listaPrioridades);
        formatoMontoTotal = new AccountingFormatMoney().transform(sumMonto); /// Se asigna el formato al total del monto
        this.dataPrioridades = {
          titulo: "Prioridades",
          labels: prioridades,
          valores: monto,
          labelsExtras: [["Piezas"], ["Monto"]],
          labelsExtrasHover: ["Piezas", "Monto"],
          valuesExtras: [sumPiezas, formatoMontoTotal],
          valuesExtrasHover: piezasMonto
        };
        this.tiposGraficas[1] = "Prioridades";
        this.dataPrioridadesReload = false;
        setTimeout(() => {
          this.dataPrioridadesReload = true;
        }, 5);
      } else {
        this.tiposGraficas[1] = "Gris";
        this.dataPrioridadesReload = false;
        setTimeout(() => {
          this.dataPrioridadesReload = true;
        }, 5);
      }

      if (graficaHoy["P1"] != undefined) {
        let clientes: any = [];
        let monto: any = [];
        let piezasMonto: any = [];
        let sumPiezas: any = 0;
        let sumMonto: any = 0;
        let formatoMonto: any; /// Se agrego para darle formato al monto
        let formatoMontoTotal: any; /// Se agrego para darle formato al monto
        for (let item of graficaHoy["P1"]) {
          clientes.push(item.titulo);
          monto.push(item.monto);
          formatoMonto = new AccountingFormatMoney().transform(item.monto);
          piezasMonto.push([item.piezas, formatoMonto]);  /*piezasMonto.push([item.piezas, "$" + item.monto]);*/
          sumPiezas += item.piezas;
          sumMonto += item.monto;
        }
        /*For para ordenar los datos de acuerdo al monto*/
        let montoAuxL: any;
        let band = false;
        while (!band) {
          band = true;
          for (var i = 0; i < monto.length - 1; i++) {
            var aux= i + 1;
            if (monto[i] < monto[aux]) {
              montoAuxL = monto[i + 1];
              monto[i + 1] = monto[i];
              monto[i] = montoAuxL;
              // band = false;
              ///////////////////////
              montoAuxL = piezasMonto[i + 1][1];
              piezasMonto[i + 1][1] = piezasMonto[i][1];
              piezasMonto[i][1] = montoAuxL;
              /////////////////////
              montoAuxL = piezasMonto[i + 1][0];
              piezasMonto[i + 1][0] = piezasMonto[i][0];
              piezasMonto[i][0] = montoAuxL;
              /////////////////////////////
              montoAuxL = clientes[i + 1];
              clientes[i + 1] = clientes[i];
              clientes[i] = montoAuxL;
              band = false;
            }
          }
        }
        /**********************************************/
        formatoMontoTotal = new AccountingFormatMoney().transform(sumMonto); /// Se asigna el formato al total del monto
        this.dataPrioridadUno = {
          titulo: "Prioridad 1",
          labels: clientes,
          valores: monto,
          labelsExtras: [["Piezas"], ["Monto"]],
          labelsExtrasHover: ["Piezas", "Monto"],
          valuesExtras: [sumPiezas, formatoMontoTotal],
          valuesExtrasHover: piezasMonto
        };
        this.tiposGraficas[2] = "PrioridadRoja";
        this.dataPrioridadUnoReload = false;
        setTimeout(() => {
          this.dataPrioridadUnoReload = true;
        }, 5);
      } else {
        this.tiposGraficas[2] = "Gris";
        this.dataPrioridadUnoReload = false;
        setTimeout(() => {
          this.dataPrioridadUnoReload = true;
        }, 5);
      }

      if (graficaHoy["P2"] != undefined) {
        let clientes: any = [];
        let monto: any = [];
        let piezasMonto: any = [];
        let sumPiezas: any = 0;
        let sumMonto: any = 0;
        let formatoMonto: any; /// Se agrego para darle formato al monto
        let formatoMontoTotal: any; /// Se agrego para darle formato al monto
        for (let item of graficaHoy["P2"]) {
          clientes.push(item.titulo);
          monto.push(item.monto);
          formatoMonto = new AccountingFormatMoney().transform(item.monto);
          piezasMonto.push([item.piezas, formatoMonto]);  /*piezasMonto.push([item.piezas, "$" + item.monto]);*/
          sumPiezas += item.piezas;
          sumMonto += item.monto;
        }
        /*For para ordenar los datos de acuerdo al monto*/
        let montoAuxL: any;
        let band = false;
        while (!band) {
          band = true;
          for (var i = 0; i < monto.length - 1; i++) {
            var aux= i + 1;
            if (monto[i] < monto[aux]) {
              montoAuxL = monto[i + 1];
              monto[i + 1] = monto[i];
              monto[i] = montoAuxL;
              // band = false;
              ///////////////////////
              montoAuxL = piezasMonto[i + 1][1];
              piezasMonto[i + 1][1] = piezasMonto[i][1];
              piezasMonto[i][1] = montoAuxL;
              /////////////////////
              montoAuxL = piezasMonto[i + 1][0];
              piezasMonto[i + 1][0] = piezasMonto[i][0];
              piezasMonto[i][0] = montoAuxL;
              /////////////////////////////
              montoAuxL = clientes[i + 1];
              clientes[i + 1] = clientes[i];
              clientes[i] = montoAuxL;
              band = false;
            }
          }
        }
        /**********************************************/
        formatoMontoTotal = new AccountingFormatMoney().transform(sumMonto); /// Se asigna el formato al total del monto
        this.dataPrioridadDos = {
          titulo: "Prioridad 2",
          labels: clientes,
          valores: monto,
          labelsExtras: [["Piezas"], ["Monto"]],
          labelsExtrasHover: ["Piezas", "Monto"],
          valuesExtras: [sumPiezas, formatoMontoTotal],
          valuesExtrasHover: piezasMonto
        };
        this.tiposGraficas[3] = "PrioridadNaranja";
        this.dataPrioridadDosReload = false;
        setTimeout(() => {
          this.dataPrioridadDosReload = true;
        }, 5);
      } else {
        this.tiposGraficas[3] = "Gris";
        this.dataPrioridadDosReload = false;
        setTimeout(() => {
          this.dataPrioridadDosReload = true;
        }, 5);
      }

      if (graficaHoy["P3"] != undefined) {
        let clientes: any = [];
        let monto: any = [];
        let piezasMonto: any = [];
        let sumPiezas: any = 0;
        let sumMonto: any = 0;
        let formatoMonto: any; /// Se agrego para darle formato al monto
        let formatoMontoTotal: any; /// Se agrego para darle formato al monto
        for (let item of graficaHoy["P3"]) {
          clientes.push(item.titulo);
          monto.push(item.monto);
          formatoMonto = new AccountingFormatMoney().transform(item.monto);
          piezasMonto.push([item.piezas, formatoMonto]);  /*piezasMonto.push([item.piezas, "$" + item.monto]);*/
          sumPiezas += item.piezas;
          sumMonto += item.monto;
        }
        /*For para ordenar los datos de acuerdo al monto*/
        let montoAuxL: any;
        let band = false;
        while (!band) {
          band = true;
          for (var i = 0; i < monto.length - 1; i++) {
            var aux= i + 1;
            if (monto[i] < monto[aux]) {
              montoAuxL = monto[i + 1];
              monto[i + 1] = monto[i];
              monto[i] = montoAuxL;
              // band = false;
              ///////////////////////
              montoAuxL = piezasMonto[i + 1][1];
              piezasMonto[i + 1][1] = piezasMonto[i][1];
              piezasMonto[i][1] = montoAuxL;
              /////////////////////
              montoAuxL = piezasMonto[i + 1][0];
              piezasMonto[i + 1][0] = piezasMonto[i][0];
              piezasMonto[i][0] = montoAuxL;
              /////////////////////////////
              montoAuxL = clientes[i + 1];
              clientes[i + 1] = clientes[i];
              clientes[i] = montoAuxL;
              band = false;
            }
          }
        }
        /**********************************************/
        formatoMontoTotal = new AccountingFormatMoney().transform(sumMonto); /// Se asigna el formato al total del monto
        this.dataPrioridadTres = {
          titulo: "Prioridad 3",
          labels: clientes,
          valores: monto,
          labelsExtras: [["Piezas"], ["Monto"]],
          labelsExtrasHover: ["Piezas", "Monto"],
          valuesExtras: [sumPiezas, formatoMontoTotal],
          valuesExtrasHover: piezasMonto
        };
        this.tiposGraficas[4] = "PrioridadVerde";
        this.dataPrioridadTresReload = false;
        setTimeout(() => {
          this.dataPrioridadTresReload = true;
        }, 5);
      } else {
        this.tiposGraficas[4] = "Gris";
        this.dataPrioridadTresReload = false;
        setTimeout(() => {
          this.dataPrioridadTresReload = true;
        }, 5);
      }
    }
  }

  limpiarGraficas()
    {
    this.dataCLiente = {
      titulo: "Clientes",
      labels: [""],
      valores: [1],
      labelsExtras: [["Piezas"], ["Monto"]],
      labelsExtrasHover: ["Piezas", "Monto"],
      valuesExtras: [0, "$0.00"],
      valuesExtrasHover: [[0, "$0.00"]]
    };

    this.dataPrioridades = {
      titulo: "Prioridades",
      labels: [""],
      valores: [1],
      labelsExtras: [["Piezas"], ["Monto"]],
      labelsExtrasHover: ["Piezas", "Monto"],
      valuesExtras: [0, "$0.00"],
      valuesExtrasHover: [[0, "$0.00"]]
    };

    this.dataPrioridadUno = {
      titulo: "Prioridad 1",
      labels: [""],
      valores: [1],
      labelsExtras: [["Piezas"], ["Monto"]],
      labelsExtrasHover: ["Piezas", "Monto"],
      valuesExtras: [0, "$0.00"],
      valuesExtrasHover: [[0, "$0.00"]]
    };

    this.dataPrioridadDos = {
      titulo: "Prioridad 2",
      labels: [""],
      valores: [1],
      labelsExtras: [["Piezas"], ["Monto"]],
      labelsExtrasHover: ["Piezas", "Monto"],
      valuesExtras: [0, "$0.00"],
      valuesExtrasHover: [[0, "$0.00"]]
    };

    this.dataPrioridadTres = {
      titulo: "Prioridad 3",
      labels: [""],
      valores: [1],
      labelsExtras: [["Piezas"], ["Monto"]],
      labelsExtrasHover: ["Piezas", "Monto"],
      valuesExtras: [0, "$0.00"],
      valuesExtrasHover: [[0, "$0.00"]]
    };

    this.tiposGraficas = ["Gris", "Gris", "Gris", "Gris", "Gris"];
    this.dataCLienteReload = false;
    this.dataPrioridadesReload = false;
    this.dataPrioridadUnoReload = false;
    this.dataPrioridadDosReload = false;
    this.dataPrioridadTresReload = false;
    setTimeout(() => {
      this.dataCLienteReload = true;
      this.dataPrioridadesReload = true;
      this.dataPrioridadUnoReload = true;
      this.dataPrioridadDosReload = true;
      this.dataPrioridadTresReload = true;
    }, 5);
  }
  recargarBotonera($event) {
    this.obtenerTotales();
    this.graficasP();
    this.idUsuario = SessionUser.getInstance().getUser().getIdEmpleado();
    let id = parseInt(this.idUsuario);
    let obj = {
      idUsuarioLogueado: id
    };
    this.ObtenerEstadisticaUsuarioEnvioPL(obj);
  }
  obtenerTotales(){
    this._trabajarRutasEnvioService.obtenerObjetivos().subscribe(
      data => {
        if (data.current["Hoy"] != undefined) {
          this.piezasInspeccionadas = data.current["Hoy"];
        }
        if (data.current["Deseadas"] != undefined) {
          this.inspeccionDeceada = data.current["Deseadas"];
          this.inspeccionDeceadaHastaElMomento =
            this.piezasInspeccionadas - this.inspeccionDeceada;
          this.inspeccionDeceadaHastaElMomentoMen = -1 * this.inspeccionDeceadaHastaElMomento;
          if (this.inspeccionDeceadaHastaElMomentoMen === 0) {
            this.mensajePackingDeseadas = 'HAZ ALCANZADO LOS PAKING LIST DESEADOS';
          } else {
            this.mensajePackingDeseadas = 'ESTAS A' + ' ' + this.inspeccionDeceadaHastaElMomentoMen + ' ' + 'PACKING LIST DESEADAS';
          }
        }
        if (data.current["Minimo"] != undefined) {
          this.minimoDeInspeccion = data.current["Minimo"];
          /*this.minimaInspeccionHastaElMomento =
            this.minimoDeInspeccion - this.piezasInspeccionadas;*/
          if (this.piezasInspeccionadas > this.minimoDeInspeccion) {
            // this.cambiarColor = '#39B54A';
            this.minimaInspeccionHastaElMomento = this.piezasInspeccionadas - this.minimoDeInspeccion;
            this.valorSigno = '+';
            this.colorMinimoInspeccion = "#39B54A";
            this.mensajeEmbDeseado = 'HAZ SUPERADO EL MÍNIMO DE ENVÍOS';
          } else if (this.minimoDeInspeccion > this.piezasInspeccionadas) {
            // this.cambiarColor = '#D0021B';
            this.minimaInspeccionHastaElMomento = this.minimoDeInspeccion - this.piezasInspeccionadas;
            this.valorSigno = '-';
            this.colorMinimoInspeccion = "#D0021B"; //rojo
            if (this.minimaInspeccionHastaElMomento > 1 ) {
              this.mensajeEmbDeseado = 'ESTAS A' + ' ' + this.minimaInspeccionHastaElMomento + ' ' + 'PIEZAS DE SUPERAR EL MÌNIMO DE ENVÍO';
            } else {
              this.mensajeEmbDeseado = 'ESTAS A' + ' ' + this.minimaInspeccionHastaElMomento + ' ' + 'PIEZA DE SUPERAR EL MÌNIMO DE ENVÍO';
            }
          } else if (this.piezasInspeccionadas === this.minimoDeInspeccion) {
            // this.cambiarColor = '#FBB03B';
            this.minimaInspeccionHastaElMomento = this.piezasInspeccionadas - this.minimoDeInspeccion;
            this.valorSigno = ' ';
            this.mensajeEmbDeseado = 'HAZ ALCANZADO EL MÍNIMO DE ENVÍOS';
          }
        }
        if (data.current["Objetivo"] != undefined) {
          this.objetivoDeinspeccion = data.current["Objetivo"];
        }

        if (this.piezasInspeccionadas < this.inspeccionDeceada) {
          this.activarBtnIngresar = true;
        } else {
          this.activarBtnIngresar = false;
        }
        setTimeout(() => {
          this.actualizarDatos = false;
        }, 5000);
        setTimeout(() => {
          this.actualizarDatos = true;
        }, 5000);
      },
      error => {
        console.log(error);
      }
    );
  }
  /*******Regresar a la vista cuando ya no hay packing list********/
  regresarVistaP() {
    this.valAux = 1;
    this.vistaInicialActiva = true;
    this.seleccionarHoy();
  }
  /*********Actualizar graficas***********/
  graficasP() {

    this._trabajarRutasEnvioService.obtenerMontosTab().subscribe(
      data => {
        console.log(data);
        this.valoresTabs = [
          data.current["Hoy"],
          data.current["Mañana"],
          data.current["Pasado"],
          data.current["Futuro"],
          data.current["Todo"]
        ];
      },
      error => {
        console.log(error);
      }
    );

    this._trabajarRutasEnvioService.obtenerInfoGrafica().subscribe(
      data => {
        this.datosGraficas = data.current;
        this.llenarGraficas("Hoy");
      },
      error => {
        console.log(error);
      }
    );
  }
}
