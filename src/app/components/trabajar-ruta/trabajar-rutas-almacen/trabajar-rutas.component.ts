import { Component, OnInit, Input } from "@angular/core";
import { PartidaInspeccion } from "../../../class/despachos/PartidaInspeccion.class";
import { TrabajarRutaService } from "./trabajar-rutas-service";
import {SessionUser} from '../../../services/session/session.service';
import {AccountingFormatMoney} from '../../../pipes/accounting/accounting.pipe';
import {EmbalarService} from '../../../services/embalar/embalar.service';
import {ComunService} from '../../../services/comun/comun.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: "pn-trabajar-rutas",
  templateUrl: "./trabajar-rutas.component.html",
  styleUrls: ["./trabajar-rutas.component.scss"]
})
export class TrabajarRutasComponent implements OnInit {
  //@Input() partidaPrioridad:PartidaInspeccion = new PartidaInspeccion();
  //////variables de los donout

  tituloDonaCliente: String = "";
  //tituloLabelCliente:String='';
  piezasGraficaCliente: any;
  montoGraficaCliente: any;

  graficasValores_p: any[] = [];
  graficaTipos_p: any[] = [];
  graficas_p: any[] = [];

  graficaTipos_prioridad: any[] = [];
  graficas_prioridad: any[] = [];

  lstConsultaActual: any[] = []; //las que tengas donaclientes
  clientesG: any; //las que tengas
  lstclientesG: any[] = []; //las que tengas

  lstGraficaPrioridades: any[] = []; ///dona prioridades
  prioridadesG: any; //las que tengas
  lstPrioridadesG: any[] = []; //las que tengas

  lstGraficaUnoP1: any[] = []; ///dona p1
  prioridadUnoG: any; //las que tengas
  lstPrioridadUnoG: any[] = []; //las que tengas

  lstGraficaDosP2: any[] = []; ///dona p2
  prioridadDosG: any; //las que tengas
  lstPrioridadDosG: any[] = []; //las que tengas

  lstGraficaTresP2: any[] = []; ///dona p3
  prioridadTresG: any; //las que tengas
  lstPrioridadTresG: any[] = []; //las que tengas

  auxDataCurrent: any;

  valoresTabs: any[] = [0, 0, 0, 0, 0];
  tiposGraficas: any[] = ["Gris", "Gris", "Gris", "Gris", "Gris"];

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

  lstAux: any[] = [];
  lstAuxPrioridades: any[] = [];

  vistaInicialActiva: boolean = true;
  classAsideMenu: string = "asideNormalMenu";
  ocultarAcor: boolean;
  iniciarBotonera: boolean;
  totalPendientes: number = 0;
  ocultaScroll: boolean;

  /////variables  para el html
  inspeccionDeceadaHastaElMomento: number = 0;
  inspeccionDeceadaHastaElMomentoMen: number = 0;
  minimaInspeccionHastaElMomento: number = 0;
  objetivoDePackingList: number = 0;
  packingListDeceada: number = 0;
  packing_trabajadas_hoy: any = 0;
  minimoPackingDeInspeccion: number = 0;
  colorIndiceInspeccionDeceada: string = "#D0021B";
  colorMinimoInspeccion: string = "#D0021B";
  totEmb: number;
  itemsMenu: any[];
  activeMenu: boolean;
  idUsuario: any;
  mensajePackingDeseadas: string;
/*+++++++++VARIABLES APRA LA GRAFICA ESTADISTICAS POR USUARIO++++++*/
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
  /*+++++++*/
  valorSigno: string;
  totEmbalar = 0;
  totAlmacen = 0;
  totEnvio = 0;
  totEnvioXCliente = 0;
  mensajeEmbDeseado: string;
  activarBtnIngresar: boolean;
  subs: Subscription;
  /******************/
  constructor(private comunService: ComunService, private _trabajarRutaService: TrabajarRutaService, private _embalarService: EmbalarService) {}

  ngOnInit() {
    this.subs = this.comunService.recargar.subscribe(
      (data) => {
        if (data === 'almacen') {
          this.activeMenu = false;
          this.obtenerMetodos();
        }
      });
    this.obtenerMetodos();
  }
  obtenerMetodos() {
    this.obtenerTotMenu();
    this.obtenerObjetivos();
    this.obtenerInfoGraficas();
    this.idUsuario = SessionUser.getInstance().getUser().getIdEmpleado();
    let id = parseInt(this.idUsuario);
    let obj = {
      idUsuarioLogueado: id
    };
    this.ObtenerEstadisticaUsuarioPL(obj);
    // inspeccionDeceadaHastaElMomento
    // minimaInspeccionHastaElMomento
    if (this.inspeccionDeceadaHastaElMomento < 0) {
      this.colorIndiceInspeccionDeceada = "#D0021B";
    } else if (this.packingListDeceada > this.inspeccionDeceadaHastaElMomento) {
      this.colorIndiceInspeccionDeceada = "#39B54A"; /////verde
    }
    if (this.minimaInspeccionHastaElMomento < 0) {
      this.colorMinimoInspeccion = "#D0021B"; //rojo
    } else if (
      this.minimoPackingDeInspeccion > this.minimaInspeccionHastaElMomento
    ) {
      this.colorMinimoInspeccion = "#39B54A";
    }
  }
  mostarOcultarAcordeon() {
    this.ocultarAcor = !this.ocultarAcor;
    if (this.ocultarAcor) {
      this.classAsideMenu = "asideOcultarMenu";
    } else {
      this.classAsideMenu = "asideMostrarMenu";
    }
  }
  /*Metodo para llamar al servicio de la graficas prioridades */
  ObtenerEstadisticaUsuarioPL(datosUser) {
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
    this.totales_estadisticas = {total_partidas: totPartidas, total_piezas: totPza, listaQuincena: this.listaQuincena, listaMes: this.listaMes, listaAnio: this.listaYear};
    this._trabajarRutaService.ObtenerEstadisticaUsuarioPL(datosUser).subscribe(
      data => {
        console.log('Soy data prioridades -->', datosUser.idUsuarioLogueado);
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
            totPartidas += this.listaAnios[i].totalPL;
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

  obtenerObjetivos() {
    this._trabajarRutaService.obtenerObjetivos().subscribe(
      data => {
        if (data.current["Hoy"] != undefined) {
          this.packing_trabajadas_hoy = data.current["Hoy"];
        }
        if (data.current["Deseadas"] != undefined) {
          this.packingListDeceada = data.current["Deseadas"];
          this.inspeccionDeceadaHastaElMomento =
            this.packing_trabajadas_hoy - this.packingListDeceada;
          this.inspeccionDeceadaHastaElMomentoMen = -1 * this.inspeccionDeceadaHastaElMomento;
          if (this.inspeccionDeceadaHastaElMomentoMen === 0) {
            this.mensajePackingDeseadas = 'HAZ ALCANZADO LOS PAKING LIST DESEADOS';
          } else {
            this.mensajePackingDeseadas = 'ESTAS A' + ' ' + this.inspeccionDeceadaHastaElMomentoMen + ' ' + 'PACKING LIST DESEADAS';
          }
        }
        if (data.current["Minimo"] != undefined) {
          this.minimoPackingDeInspeccion = data.current["Minimo"];
         /* this.minimaInspeccionHastaElMomento =
            this.minimoPackingDeInspeccion - this.packing_trabajadas_hoy;*/
          if (this.packing_trabajadas_hoy  > this.minimoPackingDeInspeccion) {
            // this.cambiarColor = '#39B54A';
            this.minimaInspeccionHastaElMomento = this.packing_trabajadas_hoy  - this.minimoPackingDeInspeccion;
            this.valorSigno = '+';
            this.colorMinimoInspeccion = "#39B54A";
            this.mensajeEmbDeseado = 'HAZ SUPERADO EL MÍNIMO DE ETREGAS';
          } else if (this.minimoPackingDeInspeccion > this.packing_trabajadas_hoy ) {
            // this.cambiarColor = '#D0021B';
            this.minimaInspeccionHastaElMomento = this.minimoPackingDeInspeccion - this.packing_trabajadas_hoy;
            this.valorSigno = '-';
            this.colorMinimoInspeccion = "#D0021B"; //rojo
            if (this.minimaInspeccionHastaElMomento > 1 ) {
              this.mensajeEmbDeseado = 'ESTAS A' + ' ' + this.minimaInspeccionHastaElMomento + ' ' + 'PIEZAS DE SUPERAR EL MÍNIMO DE ENTREGAS';
            } else {
              this.mensajeEmbDeseado = 'ESTAS A' + ' ' + this.minimaInspeccionHastaElMomento + ' ' + 'PIEZA DE SUPERAR EL MÍNIMO DE ENTREGA';
            }
          } else if (this.packing_trabajadas_hoy  === this.minimoPackingDeInspeccion) {
            // this.cambiarColor = '#FBB03B';
            this.minimaInspeccionHastaElMomento = this.packing_trabajadas_hoy  - this.minimoPackingDeInspeccion;
            this.valorSigno = ' ';
            this.mensajeEmbDeseado = 'HAZ ALCANZADO EL MÍNIMO DE ENTREGAS';
          }
        }
        if (data.current["Objetivo"] != undefined) {
          this.objetivoDePackingList = data.current["Objetivo"];
        }
        if (this.packing_trabajadas_hoy < this.packingListDeceada) {
          this.activarBtnIngresar = true;
        } else {
          this.activarBtnIngresar = false;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  obtenerTotMenu() {
   this._embalarService.totalesGeneral().subscribe(
     data => {
       this.totEmb = data.current.Embalar;
       this.totAlmacen = data.current.Almacen;
       this.totEnvio = data.current.Envio;
       this.totEnvioXCliente = data.current.EnvioXCliente;
       this.itemsMenu = [{rol: 'RESPONSABLE DE SURTIDO', active: true, menu: [
           {nombre: 'Salidas Almacén', tipo: 'valor', valor: this.totEmb, url: 'embalar', disable: false},
           {
             nombre: 'Trabajar rutas',
             tipo: '',
             valor: 0,
             url: 'poolVisitas',
             disable: true,
             subMenu: [
               { nombre: 'Almacén', tipo: 'valor', valor: this.totAlmacen, url: 'almacen', select: true},
               { nombre: 'Envío', tipo: 'valor', valor: this.totEnvio, url: 'envio'},
               { nombre: 'Envio Pagado por cliente', tipo: 'valor', valor : this.totEnvioXCliente , url: 'trabajarRutaCliente'}
             ],
             select: false
           }]}];
       this.activeMenu = true;
     }
   );
  }
  obtenerInfoGraficas() {
    this._trabajarRutaService.obtenerMontosTab().subscribe(
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

    this._trabajarRutaService.obtenerInfoGraficas().subscribe(
      data => {
        this.datosGraficas = data.current;
        this.cambiarTab("hoy");
        const idHoy = document.getElementById('dhoy');
        if (idHoy) {
          setTimeout(() => {
            document.getElementById('dhoy').click();
          },100);
        }
      },
      error => {
        console.log(error);
      }
    );
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
          piezasMonto.push([item.piezas, formatoMonto]);
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
          valuesExtras: [sumPiezas, formatoMontoTotal],  /*piezasMonto.push([sumPiezas, "$" + sumMonto]);*/
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
    /***************************************** graficas de prioridadades ***********************************/
      /*if (graficaHoy["Prioridades"] != undefined) {
        let prioridades: any = [];
        let monto: any = [];
        let piezasMonto: any = [];
        let sumPiezas: any = 0;
        let sumMonto: any = 0;
        for (let item of graficaHoy["Prioridades"]) {
          prioridades.push(item.titulo);
          monto.push(item.monto);
          piezasMonto.push([item.piezas, "$" + item.monto]);
          sumPiezas += item.piezas;
          sumMonto += item.monto;
        }

        this.dataPrioridades = {
          titulo: "Prioridades",
          labels: prioridades,
          valores: monto,
          labelsExtras: [["Piezas"], ["Monto"]],
          labelsExtrasHover: ["Piezas", "Monto"],
          valuesExtras: [sumPiezas, "$" + sumMonto],
          valuesExtrasHover: piezasMonto
        };
        this.tiposGraficas[1] = "General";
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
      }*/

      /*if (graficaHoy["P1"] != undefined) {
        let clientes: any = [];
        let monto: any = [];
        let piezasMonto: any = [];
        let sumPiezas: any = 0;
        let sumMonto: any = 0;
        for (let item of graficaHoy["P1"]) {
          clientes.push(item.titulo);
          monto.push(item.monto);
          piezasMonto.push([item.piezas, "$" + item.monto]);
          sumPiezas += item.piezas;
          sumMonto += item.monto;
        }
        this.dataPrioridadUno = {
          titulo: "Prioridad 1",
          labels: clientes,
          valores: monto,
          labelsExtras: [["Piezas"], ["Monto"]],
          labelsExtrasHover: ["Piezas", "Monto"],
          valuesExtras: [sumPiezas, "$" + sumMonto],
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
      }*/

      /*if (graficaHoy["P2"] != undefined) {
        let clientes: any = [];
        let monto: any = [];
        let piezasMonto: any = [];
        let sumPiezas: any = 0;
        let sumMonto: any = 0;
        for (let item of graficaHoy["P2"]) {
          clientes.push(item.titulo);
          monto.push(item.monto);
          piezasMonto.push([item.piezas, "$" + item.monto]);
          sumPiezas += item.piezas;
          sumMonto += item.monto;
        }
        this.dataPrioridadDos = {
          titulo: "Prioridad 2",
          labels: clientes,
          valores: monto,
          labelsExtras: [["Piezas"], ["Monto"]],
          labelsExtrasHover: ["Piezas", "Monto"],
          valuesExtras: [sumPiezas, "$" + sumMonto],
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
      }*/

      /*if (graficaHoy["P3"] != undefined) {
        let clientes: any = [];
        let monto: any = [];
        let piezasMonto: any = [];
        let sumPiezas: any = 0;
        let sumMonto: any = 0;
        for (let item of graficaHoy["P3"]) {
          clientes.push(item.titulo);
          monto.push(item.monto);
          piezasMonto.push([item.piezas, "$" + item.monto]);
          sumPiezas += item.piezas;
          sumMonto += item.monto;
        }
        this.dataPrioridadTres = {
          titulo: "Prioridad 3",
          labels: clientes,
          valores: monto,
          labelsExtras: [["Piezas"], ["Monto"]],
          labelsExtrasHover: ["Piezas", "Monto"],
          valuesExtras: [sumPiezas, "$" + sumMonto],
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
      }*/
    }
  }

  limpiarGraficas() {
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

  actualizarVista($event) {
    this.obtenerObjetivos(); // Vista superior
    this.obtenerInfoGraficas(); // Grafica de la vista principal
    this.idUsuario = SessionUser.getInstance().getUser().getIdEmpleado();
    let id = parseInt(this.idUsuario);
    let obj = {
      idUsuarioLogueado: id
    };
    this.ObtenerEstadisticaUsuarioPL(obj);
  }
  vistaPrincipal($event) {
    this.vistaInicialActiva = true;
    this.seleccionarHoy();
  }
}
