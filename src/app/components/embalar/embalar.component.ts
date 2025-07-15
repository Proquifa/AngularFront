
import {Component, OnInit, Output, EventEmitter, Input, SimpleChanges} from '@angular/core';
import { CoreContainerComponent } from '../core-container/core-container.component';
import { ComunService } from '../../services/comun/comun.service';
import { PartidaInspeccion } from '../../class/despachos/PartidaInspeccion.class';
// import { EmbalarService } from '../../services/embalar/embalar.service';
import { Router } from '@angular/router';
import {EmbalarService} from '../../services/embalar/embalar.service';
import {SessionUser} from '../../services/session/session.service';
import {Query} from '../../class/compras/utils/query.class';
import { Chart } from 'chart.js';
import {Empleado} from '../../class/Empleado.class';
import {parametrosInspeccion} from '../../class/despachos/parametrosInspeccion.class';
import { Subscription } from 'rxjs/Subscription';
import {AccountingFormatMoney} from '../../pipes/accounting/accounting.pipe';


@Component({
  selector: 'pq-embalar',
  templateUrl: './embalar.component.html',
  styleUrls: ['./embalar.component.scss']
})
export class EmbalarComponent implements OnInit {
  // @Output() vistaInicial: EventEmitter<any> = new EventEmitter<any>();
  subs: Subscription;
  medidas: boolean;
  iniciarGraficas = 0;
  objetivosDeEmbalaje: any;
  piezasEmbaladas: any;
  embalajeDeseado: any;
  embalajeDeceadoAlMomento: number;
  mensajeDeseadoMomento: string;
  embalajeMinimo: any;
  embalajeMinimoAlMomento: number;
  activarIm: boolean;
  colorIndiceInspeccionDeceada = '#D0021B';
  colorMinimoInspeccion = '#D0021B';
  colorEmbDeseMom: string;
  ocultarAcorE: boolean;
  classAsideMenuE = 'asideNormalMenu';
  graficasI: boolean; // = true;
  vistaInicialI: boolean; // =false;
  mostrarvistaInicial: boolean; // = true;
  vistaInicial: boolean;
  estadoVista: String; /// Almacenara el estado para saber que vista debe mostrar.
  vistaInicialActiva = true;
  boton = true;
  copiaPartidaEmbalaje = new Array<PartidaInspeccion>();
  partidaEmbalaje = new Array<PartidaInspeccion>();
  estadoPedido: any = 'Por embalar';
  cambiarColor: string;
  cambiarColorDeceado: boolean = true;
  cambioFooter: boolean;
  valorSigno: any;
  totaleEmbaladasG: any = 0; /// ESTA VARIABLE SIRVE PARA OBTENER EL TOTAL QUE SE EMBALO
  totaleAEmbaladasG: any = 0; /// ESTA VARIABLE SIRVE PARA OBTENER EL TOTAL QUE SE DEBEN EMBALAR
  obtenerDia: string = 'hoy';
  itemsMenu: any[] = [];
  /// VARIABLES DE GRAFICAS
  data: any;
  dataCLiente: any;
  dataPrioridades: any;
  dataPrioridadUno: any;
  dataPrioridadDos: any;
  dataPrioridadTres: any;
  filtroClientes: any[] = [];
  filtroPrioridades: any[] = [];
  montoTotEmbaladas: number = 0;
  montoTotPorEm: number = 0;
  dataPrioridadEstadisticas: any;
  listaPrioridadEstadisticas: any;
  listaPorAnio: any [] = [];
  listaPorQuincena: any [] = [];
  listaPorMes: any [] = [];
  listaBarraProgreso: any;
  _insp: any;
  coreComponentGraficas: any;
  graficasEstadisticas: any;

  event: EventEmitter<any> = new EventEmitter<any>();
  iniciarBotonera: boolean;
  mostrarVistaInicial: boolean = false;



  // classAsideMenu: string = "asideNormalMenu";
  tHoy: number;
  tTodo: number;
  tManana: number;
  tPasadoM: number;
  tFuturo: number;

  arrayProductos = new Array<any>();
  /// array2: any[] = ["ana", "laura"];
  tipoGrafica = 'verdeVSazul';
  tipoGraficaPrioridades: string;
  nombreClientes = new Array<any>(); /// Este array se utilizara para giuardar los nombres de los clientes
  pzaCliente = new Array<any>(); /// ESTE ARRAY CONTENDRA LAS PIEZAS QUE TIENE CADA CLIENTE
  montoCliente = new Array<any>(); /// ESTE ARRAY VA A ALMACENAR EL MONTO POR CADA CLIENTE
  listaPrioridad1: any = [];  /// Se utiliza para guardar todos los datos de la lista que contenga solo los que pertenecen a la prioridad 1..
  listaGraficaProductos = new Array<any>(); // La lista que tendra los datos de grafica productos
  totalPzas: number;
  totalMonto: number;
  totPzaPrioridad1 = 0;
  totMontoPrioridad1 = 0;
  totPzaPrioridad2 = 0;
  totMontoPrioridad2 = 0;
  totPzaPrioridad3 = 0;
  totMontoPrioridad3 = 0;
  tipoGraficaCliente: string;
  tipoGraficaPrioridad1: string;
  tipoGraficaPrioridad2: string;
  tipoGraficaPrioridad3: string;
  inspector: string;
  mensajeEmbDeseado: string;

  partidaPrioridad: PartidaInspeccion;

  botones: any = new Array<string>(5).fill('botonesDias');
  listaPrioridadesPiezasTotales: any;
  listaClientes: any = [];
  graficasValores: any[];
  graficasCargadas: boolean;
  graficas: any[];
  nuevoClientes: any[] = [];
  nuevaPrioridad: any[] = [];
  listaPrioridades  = new Array<any>();
  listaNueva: any [] = [];
  filtroPrioridad1: any = [];
  nuevaPrioridad1: any = [];
  listaPrioridad2: any = [];
  filtroPrioridad2: any = [];
  nuevaPrioridad2: any = [];
  listaPrioridad3: any = [];
  filtroPrioridad3: any = [];
  nuevaPrioridad3: any = [];
  nuevaPrioridadEstadisticas: any = [];
  listaDataTotales: any [] = []; /// SE USA PARA GUARDAR TODO LO QUE TRAE EL SERVICIO
  listaDataHoy: any [] = [];
  listaDataManana: any [] = [];
  listaDataPasado: any [] = [];
  listaDataFuturo: any [] = [];
  totales_estadisticas: any;
  totHoy: any;
  recargarGraficas: boolean;
  listaAnios: any[];
  data1: any = {
    titulo: "Totales",
    labels: ["ASISTENCIA", "INASISTENCIA"],
    valores: [39, 26],
    labelsExtras: ["Asistieron", "Faltaron"],
    labelsExtrasHover: ["Colaboradores"],
    valuesExtras: [39, 26],
    valuesExtrasHover: [[39], [26]]
  };
  activarPop: boolean;
  listaPrioridadUsuarioEstadisticas: any[];
  filtroPrioUsuario: any[] = [];
  arrayLabelQuincena: any = [];
  arrayDatosQuincena: any = [];
  arrayDatosMes: any = [];
  arrayLabelMes: any = [];
  arrayDatosYear: any = [];
  arrayLabelYear: any = [];
  listaQuincena: any = [] ;
  listaMes: any = [];
  listaYear: any = [];
  listaPrioridadEstadisticasDatos: any;
  usuarioE: Empleado = new Empleado();
  parametros: parametrosInspeccion = new parametrosInspeccion();
  arrayClientes: any[] = [];
  arrayPrioridades: any[] = [];
  arrayPrioridad1: any[] = [];
  arrayPrioridad2: any[] = [];
  arrayPrioridad3: any[] = [];
  filtroProducctos: any[] = [];
  arrayProductosG: any[] = [];
  arrayLabelPro: any[] = [];
  arrayValoresPro: any[] = [];
  listaDataPrioridad1: any[] = [];
  listaDataPrioridad2:  any[] = [];
  listaDataPrioridad3:  any[] = [];
  arraylabelP1: string[];
  arrayValoresP1: any;
  arraylabelP2: any;
  arrayValoresP2: any;
  arraylabelP3: any;
  arrayValoresP3: any;
  listaTodo: any[] = [];
  usuarioId: any;
  valorComun: any;
  activarPopRegresar: boolean;
  arrayLabelPrioridadesEstadisticas: any[] = [];
  arrayDatosPrioridadesEstadisticas: any[] = [];
  listaDatosPrioEstadisticas: any;
  valorSignoDesaparece: string;
  ////////////  Variables para las graficas de donut chart /////////
  arrayProducto: any[] = [];
  filtroProducto: any[] = [];
  tipoGraficaProductos: string;
  dataProductos: any;
  nuevoProducto: any[] = [];
  filtroPrioridadesGra: any[] = [];
  arrayPrioridadesGra: any[] = [];
  tipoGraficaGraPrio: string;
  filtroPrioridad1Gra: any[] = [];
  arrayPrioridad1Gra: any[] = [];
  tipoGraficaPrioridades1: string;
  tipoGraficaPrioridades2: string;
  filtroPrioridad2Gra: any[] = [];
  arrayPrioridad2Gra: any[] = [];
  tipoGraficaPrioridades3: string;
  filtroPrioridad3Gra: any[] = [];
  arrayPrioridad3Gra: any[] = [];
  tipoGraficaClienteGra: string
  arrayClientesGra: any[] = [];
  filtroClientesGra: any[] = [];
  ////// VARIABLES AUXILIARES PARA ACTIVAR LOS COMPONENTES DE DONAS //
  activarGrProd: boolean;
  activarGrPrio: boolean;
  activarGraficasPrioEsta: boolean;
  activarGrPrio1: boolean;
  activarGrPrio2: boolean;
  activarGrPrio3: boolean;
  clienteData: boolean;
  /*+++++*/
  dataProductosAux: any;
  dataClientesAux: any;
  dataPrioridadesAux: any;
  dataPrioridades1Aux: any;
  dataPrioridades2Aux: any;
  dataPrioridades3Aux: any;
  activarMenu: boolean;
  desactivarBtnIngresar: boolean;
  facturacion: boolean;
  correo: boolean;
  envio: boolean;
  totAlmacen: number;
  totEnvioXCliente = 0;
  totEnvio = 0;
  /*+++++*/
  /// Se utiliza para guardar todos los datos de la lista de acuerdo a prioridades..
  // @Input() copiaPartidaEmbalaje: PartidaInspeccion = new PartidaInspeccion();
  constructor(private router: Router, private coreComponent: CoreContainerComponent, private comunService: ComunService, private embalarServices: EmbalarService, private embalarServicesEstadisticas: EmbalarService, private embalarServicesEstado: EmbalarService) {
  }

  ngOnInit() {
    this.subs = this.comunService.finalizarEmbalado
      .subscribe(
        (data) => {
          this.valorComun = data;
          this.obtenerMetodos(1);
          this.usuarioE.idEmpleado = SessionUser.getInstance().getUser().getIdEmpleado(); /// Se adquiere el id del usuario*/
          // this.usuarioE.idEmpleado = 54;
          this.consultaEstadisticaUsuarioEmbalar(this.usuarioE);
          this.iniciarBotonera = true;
          this.usuarioId = SessionUser.getInstance().getUser().getIdEmpleado();
          // this.usuarioId = 54;
          // this.consultarEstado(this.usuarioId); /// Es la llamada al servicio que traera el estado..
          this.mostrarGraficaI();
        });
    this.subs = this.comunService.recargar.subscribe(
      (data) => {
          if (data === 'embalar') {
            this.desactivarBtnIngresar = false;
            console.log('Soy Embalar y recargare :) ');
            this.obtenerMetodos(0);
          }
      });
    this.obtenerMetodos(1);
    /// this.recibePartidasEmbalaje(this.estadoPedido);
    this.usuarioE.idEmpleado = SessionUser.getInstance().getUser().getIdEmpleado(); /// Se adquiere el id del usuario*/
    // this.usuarioE.idEmpleado = 54;
    this.consultaEstadisticaUsuarioEmbalar(this.usuarioE);
    this.iniciarBotonera = true;
    this.usuarioId = SessionUser.getInstance().getUser().getIdEmpleado();
    // this.usuarioId = 54;
    // this.consultarEstado(this.usuarioId); /// Es la llamada al servicio que traera el estado..

  }
  obtenerMetodos(tipo) {
    if (tipo === 1) {
      this.graficasI = true;
    }
    this.obtenerTotalEmbalar("123"); /// Se manda a llamar al metodo que adquiere los valores del servicio
    this.cambiarColorEmbalajeMinimoAlMomento();
    this.cambiarColorembalajeDeceadoAlMomento();
  }
  ///////// Metodo usado para graficas
  recibirTotHoy(valTotHoy: any) {
    this.totHoy = valTotHoy;
    this.coreComponent.openModal(1);
   this.embalarServices.totalesGeneral().subscribe(
     data => {
       this.totHoy = data.current.Embalar;
       this.totAlmacen = data.current.Almacen;
       this.totEnvio = data.current.Envio;
       this.totEnvioXCliente = data.current.EnvioXCliente;
       this.itemsMenu = [{rol: 'RESPONSABLE DE SURTIDO', active: true, menu: [
         {nombre: 'Salidas Almacén', tipo: 'valor', valor: this.totHoy, url: 'embalar', disable: false, select: true},
         {
           nombre: 'Trabajar rutas',
           tipo: '',
           valor: 0,
           url: 'poolVisitas',
           disable: true,
           subMenu: [
             { nombre: 'Almacén', tipo: 'valor', valor: this.totAlmacen, url: 'almacen', select: false},
             { nombre: 'Envío', tipo: 'valor', valor: this.totEnvio, url: 'envio'},
             { nombre: 'Envio Pagado por cliente', tipo: 'valor', valor : this.totEnvioXCliente , url: 'trabajarRutaCliente'}
           ],
           select: false
         }]}];
       this.activarMenu = true;
       this.coreComponent.closeModal(1);
     }
   );
  }
  ///////////////// Muestra la vista principal ///////////////////
  regresarVistaI() {
    // console.log('entro:Embalar');
    this.vistaInicial = !this.vistaInicial;
    this.mostrarvistaInicial = this.vistaInicial;
    // console.log('this.vistaInicial: ' + this.vistaInicialI);
   /* if (this.mostrarvistaInicial) {
      this.vistaInicialI = true;
      this.graficasI = false;
      this.boton = false;
    } else {
      // this.vistaInicialI= false;
      // this.graficasI= true;
    }*/
    this.vistaInicialI = true;
    this.graficasI = false;
    this.boton = false;
  }
  vistaIngresar() {
    /*******SE COMENTO PARA ESTAR PROBANDO EL POP DE FACTURACIÓN******/
   this.desactivarBtnIngresar = true;
    console.log('Entre otra vez :))) ');
    this.consultarEstado(this.usuarioId);
 // this.medidas = true;
  }
  actualizarTot($event) {
    this.obtenerTotalEmbalar("123");
  }
  ///////// Consulta el estado para pasar a la siguiente vista //////////////
  consultarEstado (idEmpleado: any) {
    let estado: any;
    this.coreComponent.openModal(1);
    this.embalarServicesEstado.consultarEstado(idEmpleado).subscribe(
      data  => {
        // console.log('Soy data estado- EMBALAR->', data.current);
        estado = data.current;
        if (estado === 'Nuevo') {
          this.registrarEmbalarPedido(idEmpleado);
        } else {
          this.estadoVista = estado;
          this.vistaInicial = !this.vistaInicial;
          this.mostrarvistaInicial = this.vistaInicial;
          // console.log('this.vistaInicial: ' + this.vistaInicialI);
          /*if (this.mostrarvistaInicial) {
            this.vistaInicialI = true;
            this.graficasI = false;
            this.boton = false;
          }*/
          this.vistaInicialI = true;
          this.graficasI = false;
          this.boton = false;
        }
      });
    this.coreComponent.closeModal(1);
  }
  ///////////////////////  ESTE MÉTODO DE ENCARGA DE MANDAR EL ID PARA GUARDAR EL REGISTRO ////////
  registrarEmbalarPedido(idEmpleado) {
    this.activarPopRegresar = false;
    const parametro = {
      idUsuarioLogueado: idEmpleado
    };
    let avanzar: any;
    this.embalarServicesEstado.registrarEmbalarPedido(parametro).subscribe(
      data => {
        avanzar = data.current;
        if (avanzar === false) {
          this.activarPopRegresar = true;
        } else {
          this.estadoVista = 'Registro';
          // this.vistaInicial = !this.vistaInicial;
          // console.log('this.vistaInicial: ' + this.vistaInicialI);
            this.vistaInicialI = true;
            this.graficasI = false;
            this.boton = false;
        }
      });
  }
  cambiarColorEmbalajeMinimoAlMomento() {
    /*if (this.embalajeMinimoAlMomento >= 0) {
      this.cambiarColor = true;
    } else {
      this.cambiarColor = false;
    }*/
  }

  cambiarColorembalajeDeceadoAlMomento() {
    /*if (this.embalajeDeceadoAlMomento >= 0) {
      this.cambiarColorDeceado = true;
    } else {
      this.cambiarColorDeceado = false;
    }*/
  }

  mostrarGraficaI() {
    this.vistaInicialI = false;
    this.graficasI = true;
    this.boton = true;
    this.desactivarBtnIngresar = false;
    this.quitarOpcionesFooter(false);
  }
  vistaPrincipal(evento: any) {
    if (evento === true) {
      this.vistaInicialI = false;
      this.graficasI = true;
      this.boton = true;
      this.desactivarBtnIngresar = false;
      this.quitarOpcionesFooter(false);
    }
  }
  mostarOcultarAcordeon() {
    this.ocultarAcorE = !this.ocultarAcorE;
    if (this.ocultarAcorE) {
      this.classAsideMenuE = 'asideOcultarMenu';
    } else {
      this.classAsideMenuE = 'asideMostrarMenu';
    }
  }


  quitarOpcionesFooter(val: any) {
    this.cambioFooter = val;
  }
  //////////////////////////// FIN //////////
  consultaEstadisticaUsuarioEmbalar( usuario: any) {
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
    this.embalarServicesEstadisticas.ConsultaEstadisticaUsuarioEmbalar(usuario).subscribe(
      data => {
        if (data.current.Prioridad !== undefined){
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
            totPartidas += this.listaAnios[i].totalPartidas;
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
         /* this.arrayLabelPrioridadesEstadisticas = ['Prioridad 1', 'Prioridad 2', 'Prioridad 3'];
          this.arrayDatosPrioridadesEstadisticas = [totPzaPrio1, totPzaPrio2, totPzaPrio3];
          this.graficasEstadisticas = 'prioridades';
          this.listaDatosPrioEstadisticas = {arrayLabel: this.arrayLabelPrioridadesEstadisticas,
            arrayValores: this.arrayDatosPrioridadesEstadisticas,
            tipoGrafica: this.graficasEstadisticas};*/
          //////////////////////////////////////// GRAFICAS DONUT CHARTS //////////////////7///////////////
          this.listaPrioridadUsuarioEstadisticas = [{'prioridad': 'Prioridad 1', 'pieza':  totPzaPrio1},
            {'prioridad': 'Prioridad 2', 'pieza':  totPzaPrio2},
            {'prioridad': 'Prioridad 3', 'pieza':  totPzaPrio3}];
          this.limpiarVariablesGraficaEstadisticas();
          this.calcularDatosGraficaEstadisticas();
          this.totales_estadisticas = {total_partidas: totPartidas, total_piezas: totPza, listaQuincena: this.listaQuincena, listaMes: this.listaMes, listaAnio: this.listaYear};
        } else {
         /* this.graficasEstadisticas = 'gris';
          this.arrayLabelPrioridadesEstadisticas = ['Ninguna'];
          this.arrayDatosPrioridadesEstadisticas = [1];
          this.listaDatosPrioEstadisticas = {arrayLabel: this.arrayLabelPrioridadesEstadisticas,
            arrayValores: this.arrayDatosPrioridadesEstadisticas,
            tipoGrafica: this.graficasEstadisticas};*/
          //////////////////////////////////////// GRAFICAS DONUT CHARTS /////////////////////////////////
          this.listaPrioridadUsuarioEstadisticas = [{'prioridad': 'Ninguna', 'pieza':  0}];
          this.limpiarVariablesGraficaEstadisticas();
          this.calcularDatosGraficaEstadisticas();
        }

      });
  }
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
        valuesExtrasHover: [[0]]

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
  ////////////// TERMINA EL PINTADO DE GRAFICAS /////////////////////
  obtenerTotalEmbalar(val: any) {
    this.activarMenu = false;
    let tot = 0;
    this.coreComponent.openModal(1);
    this.embalarServices.ConsultaTotalEmbalar(val).subscribe(
      data => {
        // .log('Soy el servicio--->', data.current);
        if (data.current.Totales) {
          this.listaDataTotales  = data.current.Totales;
        }
        if (data.current.Hoy) {
          this.listaDataHoy  = data.current.Hoy;
          for (var i = 0; i < this.listaDataHoy.length; i++) {
            if (this.listaDataHoy[i].estado === 'Por Embalar') {
              tot += this.listaDataHoy[i].piezas;
            }
          }
          // this.embalajeDeseado = tot;
        }
        if (data.current.Mañana) {
          this.listaDataManana  = data.current.Mañana;
        }
        if (data.current.Futuro) {
          this.listaDataFuturo = data.current.Futuro;
        }
        if (data.current.PasadoMañana) {
          this.listaDataPasado = data.current.PasadoMañana;
        }
        this.iniciarGraficas = 1;
        this.filtrarDatosDias(this.listaDataTotales, tot);
        this.recibirDia('hoy');
        this.recuperarDatosBarraProgreso(this.listaDataHoy);
        this.coreComponent.closeModal(1);
      },
      error => {
        console.log("error embalar");
        console.log(error);
        // terminar loading false
        this.coreComponent.closeModal(1);
      }
    );
  }
  recuperarDatosBarraProgreso(listaHoy: any) {
    let totP1 = 0;
    let totP2 = 0;
    let totP3 = 0;
    for (var i = 0 ; i < listaHoy.length; i++) {
      if (listaHoy[i].prioridad === 'P1') {
        totP1 += listaHoy[i].piezas;
      } else if (listaHoy[i].prioridad === 'P2') {
        totP2 += listaHoy[i].piezas;
      } else if (listaHoy[i].prioridad === 'P3') {
        totP3 += listaHoy[i].piezas;
      }
    }
     this.listaBarraProgreso = {totalPiezas: this.embalajeDeseado, piezasEmbaladas: this.piezasEmbaladas, prioridad1: totP1, prioridad2: totP2, prioridad3: totP3};
  }
  filtrarDatosDias(listaDataTotales: any, totEmbalajeDesea: any) {
    let totPzasP1: any = 0;
    let totPzasP2: any = 0;
    let totPzasP3: any = 0;
    let totalPiezasPorPrioridades = totEmbalajeDesea;
    this.objetivosDeEmbalaje = listaDataTotales[0].maximoVendido;
    this.piezasEmbaladas = listaDataTotales[0].totalEmbalada;
    this.embalajeMinimo = listaDataTotales[0].minimoEmbalar;
    this.embalajeDeseado = this.piezasEmbaladas + listaDataTotales[0].totalAEmbalar;
    // this.embalajeDeseado = 128;
    this.embalajeDeceadoAlMomento = this.embalajeDeseado  - this.piezasEmbaladas ;
    if (this.embalajeDeceadoAlMomento === 0) {
      this.valorSignoDesaparece = ' ';
      this.colorEmbDeseMom = '#FBB03B';
      this.mensajeDeseadoMomento = 'HAZ SUPERADO EL EMBALAJE DESEADO';
    } else {
      this.colorEmbDeseMom = '#D0021B';
      this.valorSignoDesaparece = '-';
      if (this.embalajeDeceadoAlMomento ===  1) {
        this.mensajeDeseadoMomento = 'ESTAS A' + ' ' + this.embalajeDeceadoAlMomento + ' ' + 'PIEZA EMBALADAS DESEADAS';
      } else {
        this.mensajeDeseadoMomento = 'ESTAS A' + ' ' + this.embalajeDeceadoAlMomento + ' ' + 'PIEZAS EMBALADAS DESEADAS';
      }
    }
    /// Se asigna los valores a los indices
    /// Calcular el signo y color del indice
    if (this.piezasEmbaladas > this.embalajeMinimo) {
      this.cambiarColor = '#39B54A';
      this.embalajeMinimoAlMomento = this.piezasEmbaladas - this.embalajeMinimo;
      this.valorSigno = '+';
      this.mensajeEmbDeseado = 'HAZ SUPERADO EL MÍNIMO DE EMBALAJE';
    } else if (this.embalajeMinimo > this.piezasEmbaladas) {
      this.cambiarColor = '#D0021B';
      this.embalajeMinimoAlMomento = this.embalajeMinimo - this.piezasEmbaladas;
      this.valorSigno = '-';
      if (this.embalajeMinimoAlMomento === 1) {
        this.mensajeEmbDeseado = 'ESTAS A' + ' ' + this.embalajeMinimoAlMomento + ' ' + 'PIEZA DE SUPERAR EL MÍNIMO DE EMBALAJE';
      } else {
        this.mensajeEmbDeseado = 'ESTAS A' + ' ' + this.embalajeMinimoAlMomento + ' ' + 'PIEZAS DE SUPERAR EL MÍNIMO DE EMBALAJE';

      }
    } else if (this.piezasEmbaladas === this.embalajeMinimo) {
      this.cambiarColor = '#FBB03B';
      this.embalajeMinimoAlMomento = this.piezasEmbaladas - this.embalajeMinimo;
      this.valorSigno = ' ';
      this.mensajeEmbDeseado = 'HAZ SUPERADO EL MÍNIMO DE EMBALAJE';
    }
    this.recibirTotHoy(totalPiezasPorPrioridades);
    // this.limpiarVariablesGrafica(); /// LIMPIA LAS VARIABLES PARA AGREGAR LO DE FILTRO QUE LLEVA EL ARRAY
    // this.calcularDatosParaGraficas(); /// MANDA A LLAMAR AL METODO QUE HACE EL LLENADO DE LOS LABEL Y A SU VEZ MANDA A LLAMAR A UNO QUE LLENA LAS PIEZAS Y EL MONTO
  }

  /////////////// METODOS PARA LAS GRAFICAS

  recibirDia(val: any) {
    setTimeout(() => {
      this.activarGrProd = false;
      this.activarGrPrio = false;
      this.activarGrPrio1 = false;
      this.clienteData = false;
      this.activarGrPrio2 = false;
      this.activarGrPrio3 = false;
      }, 5);
    this.obtenerDia = val;
    this.listaTodo = [];
    let listaAux: any = [];
    // this.filtrarDatosDias(this.listaDataTotales, this.listaDataHoy, this.listaDataManana, this.listaDataPasado, this.listaDataFuturo);
    /// console.log('Soy prioridad 1 ------>>>', this.listaDataPrioridad1);
    if (this.iniciarGraficas > 0) {
      this.limpiarVar();
      if (val === 'hoy') {
        this.obtenerGraficaProductos(this.listaDataHoy);
        this.ObtenerDatosGraficaClientes(this.listaDataHoy);
        this.ObtenerDatosGraficaPrioridades(this.listaDataHoy);
        this.obtenerDatosGraficaPrioridad1(this.listaDataHoy);
      } else if (val === 'manana') {
        this.ObtenerDatosGraficaClientes(this.listaDataManana );
        this.ObtenerDatosGraficaPrioridades(this.listaDataManana );
        this.obtenerGraficaProductos(this.listaDataManana);
        this.obtenerDatosGraficaPrioridad1(this.listaDataManana);
      } else if (val === 'pasado') {
        this.ObtenerDatosGraficaClientes(this.listaDataPasado );
        this.ObtenerDatosGraficaPrioridades(this.listaDataPasado );
        this.obtenerGraficaProductos(this.listaDataPasado);
        this.obtenerDatosGraficaPrioridad1(this.listaDataPasado);
      } else if (val === 'futuro') {
        this.obtenerGraficaProductos(this.listaDataFuturo);
        this.ObtenerDatosGraficaClientes(this.listaDataFuturo );
        this.ObtenerDatosGraficaPrioridades(this.listaDataFuturo );
        this.obtenerDatosGraficaPrioridad1(this.listaDataFuturo);
      } else if (val === 'todo') {
        this.listaDataHoy.forEach(element => {
          this.listaTodo.push(element);
        });
        this.listaDataManana.forEach(element => {
          this.listaTodo.push(element);
        });
        this.listaDataPasado.forEach(element => {
          this.listaTodo.push(element);
        });
        this.listaDataFuturo.forEach(element => {
          this.listaTodo.push(element);
        });
        // console.log('Lista todo------>>>', this.listaTodo);
        this.obtenerGraficaProductos(this.listaTodo);
        this.ObtenerDatosGraficaClientes(this.listaTodo );
        this.ObtenerDatosGraficaPrioridades(this.listaTodo );
        this.obtenerDatosGraficaPrioridad1(this.listaTodo);
      }
      this.limpiarVariablesGrafica();
      this.calcularDatosParaGraficas();
    }
  }
  limpiarVar() {
    this.listaGraficaProductos = new Array<any>();
    this.filtroProducto = [];
    this.nuevoProducto = [];
    this.filtroPrioridadesGra = [];
    this.nuevaPrioridad = [];
    this.listaPrioridades = new Array<any>();
    this.listaPrioridad1 = new Array<any>();
    this.nuevaPrioridad1 = [];
    this.filtroPrioridad1Gra = [];
    this.listaPrioridad2 = new Array<any>();
    this.nuevaPrioridad2 = [];
    this.filtroPrioridad2Gra = [];
    this.filtroClientesGra = [];
    this.nuevoClientes = [];
    this.listaClientes = new Array<any>();
  }
  obtenerGraficaProductos (lista: any) {
    // console.log('Soy lista -->', lista);
    this.filtroProducctos = [];
    this.arrayProductosG = [];
    var sq: Query = new Query();
    var puntem = new Array<any>();
    var punterosProd = new Array<any>();
    var arrayLabel = new Array<string>();
    var arrayValores = new Array<any>();
    var arrayMonto = new Array<any>();
    var cantidadEmbalada: number;
    var cantidadPorEmbalada: number;


    let val = 0;


    this.arrayLabelPro = new Array<string>();
    this.arrayValoresPro = new Array<number>();
    if (lista.length > 0) {
      this.tipoGrafica = 'verdeVSazul';
      sq.Query(lista, ['estado'], true);
      punterosProd = sq.getPunteros(['estado'], 'estado');
      // console.log('Query:::', punterosProd);
      punterosProd.forEach(element => {
        var cantidad = 0;
        var monto = 0;
        // var montoDiv = 0;
        puntem = sq.getPunteros([element]);
        for (var i: number = 0; i < puntem.length; i++) {
          var listaDatos: any ;
          listaDatos = sq.universo[puntem[i]];
          if (element === 'por embalar') {
            cantidad += listaDatos.totalAEmbalar;
            monto += listaDatos.monto;
            // console.log('Soy embalar', cantidad);
          } else if (element === 'embalado') {
            cantidad += listaDatos.totalEmbalada;
            monto += listaDatos.monto;
            // console.log('Soy Por embalar', cantidad);
          }
        }
        // console.log('Soy cantidad ', cantidad);
        arrayValores.push(cantidad);
        arrayLabel.push(element);

        arrayMonto.push(monto);
       // console.log('Soy divisa -->', montoDiv);
        /*new AccountingFormatMoney().transform(monto)*/
      });
      for (var i = 0; i < arrayLabel.length; i++) {
        if (arrayLabel[i] === 'por embalar') {
          this.listaGraficaProductos.push({estado: arrayLabel[i], piezas: arrayValores[i], monto: arrayMonto[i]});
        } else if (arrayLabel[i] === 'embalado') {
          this.listaGraficaProductos.push({estado: arrayLabel[i], piezas: arrayValores[i], monto: arrayMonto[i]});
        }
      }
      // console.log('lista Graficas-->', this.listaGraficaProductos)
      /*For para ordenar los datos de acuerdo al monto*/
      let montoAuxL: any;
      let band = false;
      while (!band) {
        band= true;
        for (var i= 0; i < this.listaGraficaProductos.length -1; i++){
          var aux= i+1;
          if (this.listaGraficaProductos[i].monto < this.listaGraficaProductos[aux].monto) {
            montoAuxL = this.listaGraficaProductos[i+1];
            this.listaGraficaProductos[i + 1] = this.listaGraficaProductos[i];
            this.listaGraficaProductos[i] = montoAuxL;
            band = false;
          }
        }
      }
      // console.log('Soy lista proveedores ordenada -->', this.listaProveedores);
      /**********************************************/
      // console.log('label-->', arrayLabel);
      /////////////////////////////////////////////////////////
      for (var i = 0; i < arrayValores.length ; i++) {
        if ( arrayValores[i] > 0) {
          Array.prototype.push.apply(this.filtroProducctos, arrayLabel);
          Array.prototype.push.apply(this.arrayProductosG, arrayValores);
          break;
        } else {
          val = val + 1;
        }
      }
      if (val === arrayValores.length) {
        arrayValores = new Array<any>();
        arrayLabel = new Array<any>();
        this.tipoGrafica = "gris";
        arrayValores.push(1);
        arrayLabel.push("");
        Array.prototype.push.apply(this.filtroProducctos, arrayLabel);
        Array.prototype.push.apply(this.arrayProductosG, arrayValores);
      }
    } else {
      this.tipoGrafica = "gris";
      arrayValores.push(1);
      arrayLabel.push("");
      Array.prototype.push.apply(this.filtroProducctos, arrayLabel);
      Array.prototype.push.apply(this.arrayProductosG, arrayValores);
    }
  }
  ObtenerDatosGraficaClientes(lista: any) {
    /// console.log('Soy lista -->', lista);
    this.filtroClientes = [];
    this.arrayClientes = [];
    var sq: Query = new Query();
    var sqAux: Query = new Query();

    var puntem = new Array<any>();
    var punterosProd = new Array<any>();
    var arrayLabel = new Array<any>();
    var arrayValores = new Array<any>();
    let val = 0;


    this.arrayLabelPro = new Array<string>();
    this.arrayValoresPro = new Array<number>();
    if (lista.length > 0) {
       sq.Query(lista, ['nombreCliente'], true);
       punterosProd = sq.getPunteros(['nombreCliente'], 'nombreCliente');


      // console.log('Query:::', punterosProd);
      punterosProd.forEach(element => {
        var cantidad = 0;
        var monto = 0;
        puntem = sq.getPunteros([element]);

        for (var i: number = 0; i < puntem.length; i++) {
          var listaDatos: any ;
          listaDatos = sq.universo[puntem[i]];

          // cantidad = cantidad + 1;
          cantidad += listaDatos.piezas;
          monto += listaDatos.monto;
        }
          // console.log('Soy cantidad ', cantidad);
        if (cantidad > 0) {
          arrayValores.push(cantidad);
          arrayLabel.push(element);
          this.listaClientes.push( {'nombreCliente': element, 'piezas': cantidad, 'monto':  monto});
        }
      });
      /*For para ordenar los datos de acuerdo al monto*/
      let montoAuxL: any;
      let band = false;
      while (!band) {
        band= true;
        for (var i= 0; i < this.listaClientes.length -1; i++){
          var aux= i+1;
          if (this.listaClientes[i].monto < this.listaClientes[aux].monto) {
            montoAuxL = this.listaClientes[i+1];
            this.listaClientes[i + 1] = this.listaClientes[i];
            this.listaClientes[i] = montoAuxL;
            band = false;
          }
        }
      }
      // console.log('Soy lista proveedores ordenada -->', this.listaProveedores);
      /**********************************************/
      // console.log('valores-->', arrayValores);
      // console.log('label-->', arrayLabel);
     /////////////////////////////////////////////////////////
      if (arrayValores.length > 0) {
        this.tipoGraficaCliente = 'general';
        Array.prototype.push.apply(this.filtroClientes, arrayLabel);
        Array.prototype.push.apply(this.arrayClientes, arrayValores);
      } else {
        arrayValores = new Array<any>();
        arrayLabel = new Array<any>();
        this.tipoGraficaCliente = "gris";
        arrayValores.push(1);
        arrayLabel.push("");
        Array.prototype.push.apply(this.filtroClientes, arrayLabel);
        Array.prototype.push.apply(this.arrayClientes, arrayValores);
      }
      // console.log('Soy filtro clientes:::', this.filtroClientes);
    } else {
      this.tipoGraficaCliente = "gris";
      arrayValores.push(1);
      arrayLabel.push("");
      Array.prototype.push.apply(this.filtroClientes, arrayLabel);
      Array.prototype.push.apply(this.arrayClientes, arrayValores);
    }
  }
  ObtenerDatosGraficaPrioridades(lista: any) {
    // console.log('tamaño', lista.length);
    this.filtroPrioridades = [];
    this.arrayPrioridades = [];
    var arrayMonto = new Array<any>();
    var sq: Query = new Query();
    var puntem = new Array<any>();
    var punterosProd = new Array<any>();
    var punterosPrio = new Array<any>();
    var punteroP1 = new Array<any>();
    var punteroP2 = new Array<any>();
    var punteroP3 = new Array<any>();
    var arrayLabel = new Array<any>();
    var arrayValores = new Array<any>();
    var arrayValores = new Array<any>();
    var arrayValoresAux = new Array<any>();
    var prioridadNom: string;

    if (lista.length > 0)
    {
      sq.Query(lista, ['prioridad'], true);
      punterosProd = sq.getPunteros(['prioridad'], 'prioridad');
      // console.log('Query:::', punterosProd);

        punterosProd.forEach(element => {
          var cantidad = 0;
          var monto = 0;
          prioridadNom = '';
          puntem = sq.getPunteros([element]);

          for (var i: number = 0; i < puntem.length; i++) {
            var listaDatos: any ;
            listaDatos = sq.universo[puntem[i]];

            // cantidad = cantidad + 1;
            cantidad += listaDatos.piezas;
            monto += listaDatos.monto;
          }
          // console.log('Soy cantidad ', cantidad);
          if ((element !== 'null') && (cantidad > 0)) {
            arrayValores.push(cantidad);
            arrayLabel.push(element);
            arrayMonto.push(monto);
            if (element === 'p1') {
              prioridadNom = 'Prioridad 1';
            } else if (element === 'p2') {
              prioridadNom = 'Prioridad 2';
            } else if (element === 'p3') {
              prioridadNom = 'Prioridad 3';
            }
          }
          // this.listaPrioridades.push({prioridad: prioridadNom, piezas: cantidad, monto: monto});
        });
      console.log('----->>>>>>>>', this.listaPrioridades);
        if ( arrayLabel.length > 0) {
            this.tipoGraficaPrioridades = 'prioridades';
            let arrayPrio = ['p1', 'p2', 'p3'];
            let arrayLabelAux = ['Prioridad 1', 'Prioridad 2', 'Prioridad 3'];
            for (var i = 0; i < arrayLabel.length; i++) {
              for (var j = 0; j < arrayPrio.length; j++) {
                if (arrayLabel[i] === arrayPrio[j]) {
                  arrayValoresAux[j] = arrayValores[i];
                  this.listaPrioridades[j] = ({prioridad: arrayLabelAux[j], piezas: arrayValores[i], monto: arrayMonto[i]});
                } else if (arrayValoresAux[j] === undefined) {
                  arrayValoresAux [j] = 0;
                  this.listaPrioridades[j] = ({prioridad: arrayLabelAux[j], piezas: 0, monto: 0});
                }
              }
            }
          /*For para ordenar los datos de acuerdo al monto*/
         /* let montoAuxL: any;
          let band = false;
          while (!band) {
            band= true;
            for (var i= 0; i < this.listaPrioridades.length -1; i++){
              var aux= i+1;
              if (this.listaPrioridades[i].monto < this.listaPrioridades[aux].monto) {
                montoAuxL = this.listaPrioridades[i+1];
                this.listaPrioridades[i + 1] = this.listaPrioridades[i];
                this.listaPrioridades[i] = montoAuxL;
                band = false;
              }
            }
          }*/
          /**********************************************/
          /*console.log('Valores Auxiliares-->', arrayValoresAux);
          console.log('Valores label---->', arrayPrio);*/
          Array.prototype.push.apply(this.filtroPrioridades, arrayLabelAux);
          Array.prototype.push.apply(this.arrayPrioridades, arrayValoresAux);
        } else {
          this.tipoGraficaPrioridades = "gris";
          arrayValores.push(1);
          arrayLabel.push("");
          Array.prototype.push.apply(this.filtroPrioridades, arrayLabel);
          Array.prototype.push.apply(this.arrayPrioridades, arrayValores);
        }
    } else {
      this.tipoGraficaPrioridades = "gris";
      arrayValores.push(1);
      arrayLabel.push("");
      Array.prototype.push.apply(this.filtroPrioridades, arrayLabel);
      Array.prototype.push.apply(this.arrayPrioridades, arrayValores);
    }
  }
  obtenerDatosGraficaPrioridad1(lista: any) {
    /// console.log('Soy lista -->', lista);
    this.filtroPrioridad1 = [];
    this.arrayPrioridad1 = [];
    this.filtroPrioridad2 = [];
    this.arrayPrioridad2 = [];
    this.filtroPrioridad3 = [];
    this.arrayPrioridad3= [];
    var sq: Query = new Query();
    var puntem = new Array<any>();
    var punteroP1 = new Array<any>();
    var punteroP2 = new Array<any>();
    var punteroP3 = new Array<any>();
    var punterosProd = new Array<any>();
    var punterosPrio = new Array<any>();
    var arrayLabel = new Array<any>();
    var arrayValores = new Array<any>();
    let val = 0;
    var listaAux = new Array<any>();
    var listaAuxP2 = new Array<any>();
    var listaAuxP3 = new Array<any>();
    var punterosAux = new Array<any>();
    var sqAux: Query = new Query();
    this.arraylabelP1 = new Array<string>();
    this.arrayValoresP1 = new Array<any>();
    this.arraylabelP2 = new Array<string>();
    this.arrayValoresP2 = new Array<number>();
    this.arraylabelP3 = new Array<string>();
    this.arrayValoresP3 = new Array<number>();

    this.arrayLabelPro = new Array<string>();
    this.arrayValoresPro = new Array<number>();
    if (lista.length > 0) {
      sq.Query(lista, ['prioridad'], true);
      punterosPrio = sq.getPunteros(['prioridad'], "prioridad");

      punteroP1 = sq.getPunteros(['p1']);
      if (punteroP1.length > 0) {
        this.tipoGraficaPrioridad1 = 'prioridadRoja';
        for (var i: number = 0; i < punteroP1.length; i++) {
          var listaDatos: any ;
          listaDatos = sq.universo[punteroP1[i]];
          listaAux.push(listaDatos);
        }

        sqAux.Query(listaAux, ['nombreCliente'], true);
        punterosAux = sqAux.getPunteros(['nombreCliente'], 'nombreCliente');

        if (punterosAux.length > 0) {
          //  for (var i: number = 0; i < punterosAux.length; i++) {
          punterosAux.forEach(element => {
            puntem = sqAux.getPunteros([element]);
            var cantidad = 0;
            var monto = 0;
            for (var i: number = 0; i < puntem.length; i++) {
              var listaDatosAux: any ;
              listaDatosAux = sqAux.universo[puntem[i]];
              cantidad += listaDatosAux.piezas;
              monto += listaDatosAux.monto;
            }
            if (cantidad > 0) {
              arrayValores.push(cantidad);
              arrayLabel.push(element);
              /* PRIORIDAD 1 */
              this.listaPrioridad1.push({nombrePrio1: element, piezas: cantidad, monto: monto});
            }
          });
          /*For para ordenar los datos de acuerdo al monto*/
          let montoAuxL: any;
          let band = false;
          while (!band) {
            band= true;
            for (var i= 0; i < this.listaPrioridad1.length -1; i++){
              var aux= i+1;
              if (this.listaPrioridad1[i].monto < this.listaPrioridad1[aux].monto) {
                montoAuxL = this.listaPrioridad1[i+1];
                this.listaPrioridad1[i + 1] = this.listaPrioridad1[i];
                this.listaPrioridad1[i] = montoAuxL;
                band = false;
              }
            }
          }
          /**********************************************/
          //  }
          /////////////////////////////////////////////////////////
          if (arrayValores.length > 0) {
            Array.prototype.push.apply(this.filtroPrioridad1, arrayLabel);
            Array.prototype.push.apply(this.arrayPrioridad1, arrayValores);
          } else {
            arrayValores = new Array<any>();
            arrayLabel = new Array<any>();
            this.tipoGraficaPrioridad1 = "gris";
            arrayValores.push(1);
            arrayLabel.push("");
            Array.prototype.push.apply(this.filtroPrioridad1, arrayLabel);
            Array.prototype.push.apply(this.arrayPrioridad1, arrayValores);
          }
        }
      } else {
        arrayValores = new Array<any>();
        arrayLabel = new Array<any>();
        this.tipoGraficaPrioridad1 = "gris";
        arrayValores.push(1);
        arrayLabel.push("");
        Array.prototype.push.apply(this.filtroPrioridad1, arrayLabel);
        Array.prototype.push.apply(this.arrayPrioridad1, arrayValores);
      }
      punteroP2 = sq.getPunteros(['p2']);
      if (punteroP2.length > 0) {
        arrayValores = new Array<any>();
        arrayLabel = new Array<any>();
        for (var i: number = 0; i < punteroP2.length; i++) {
          var listaDatos: any ;
          listaDatos = sq.universo[punteroP2[i]];
          listaAuxP2.push(listaDatos);
        }

        sqAux.Query(listaAuxP2, ['nombreCliente'], true);
        punterosAux = sqAux.getPunteros(['nombreCliente'], 'nombreCliente');
        if (punterosAux.length > 0) {
          //  for (var i: number = 0; i < punterosAux.length; i++) {
          punterosAux.forEach(element => {
            puntem = sqAux.getPunteros([element]);
            var cantidad = 0;
            var monto = 0;
            for (var i: number = 0; i < puntem.length; i++) {
              //cantidad = cantidad + 1;
              var listaDatosAux: any ;
              listaDatosAux = sqAux.universo[puntem[i]];
              // console.log('Soy datos--> segunda fase', listaDatosAux);
              cantidad += listaDatosAux.piezas;
              monto += listaDatosAux.monto;
            }
            if (cantidad > 0 ) {
              arrayValores.push(cantidad);
              arrayLabel.push(element);
              /* PRIORIDAD 2*/
              this.listaPrioridad2.push({nombrePrio2: element, piezas: cantidad, monto: monto});
            }
          });
          /*For para ordenar los datos de acuerdo al monto*/
          let montoAuxL: any;
          let band = false;
          while (!band) {
            band= true;
            for (var i= 0; i < this.listaPrioridad2.length -1; i++){
              var aux= i + 1;
              if (this.listaPrioridad2[i].monto < this.listaPrioridad2[aux].monto) {
                montoAuxL = this.listaPrioridad2[i + 1];
                this.listaPrioridad2[i + 1] = this.listaPrioridad2[i];
                this.listaPrioridad2[i] = montoAuxL;
                band = false;
              }
            }
          }
          /**********************************************/
          if (arrayValores.length > 0) {
            this.tipoGraficaPrioridad2 = 'prioridadNaranja';
            Array.prototype.push.apply(this.filtroPrioridad2, arrayLabel);
            Array.prototype.push.apply(this.arrayPrioridad2, arrayValores);
          } else {
            var arrayLabel = new Array<any>();
            var arrayValores = new Array<any>();
            arrayLabel.push("");
            arrayValores.push(1);
            Array.prototype.push.apply(this.filtroPrioridad2, arrayLabel);
            Array.prototype.push.apply(this.arrayPrioridad2, arrayValores);
            this.tipoGraficaPrioridad2 = "gris";
          }
        }

      } else {
        var arrayLabel = new Array<any>();
        var arrayValores = new Array<any>();
        arrayLabel.push("");
        arrayValores.push(1);
        Array.prototype.push.apply(this.filtroPrioridad2, arrayLabel);
        Array.prototype.push.apply(this.arrayPrioridad2, arrayValores);
        this.tipoGraficaPrioridad2 = "gris";
      }
      punteroP3 = sq.getPunteros(['p3']);
      if (punteroP3.length > 0) {
        arrayValores = new Array<any>();
        arrayLabel = new Array<any>();
        for (var i: number = 0; i < punteroP3.length; i++) {
          var listaDatos: any ;
          listaDatos = sq.universo[punteroP3[i]];
          listaAuxP3.push(listaDatos);
        }

        sqAux.Query(listaAuxP3, ['nombreCliente'], true);
        punterosAux = sqAux.getPunteros(['nombreCliente'], 'nombreCliente');
        if (punterosAux.length > 0) {
          //  for (var i: number = 0; i < punterosAux.length; i++) {
          punterosAux.forEach(element => {
            puntem = sqAux.getPunteros([element]);
            var cantidad = 0;
            var monto = 0;
            for (var i: number = 0; i < puntem.length; i++) {
              //cantidad = cantidad + 1;
              var listaDatosAux: any ;
              listaDatosAux = sqAux.universo[puntem[i]];
              // console.log('Soy datos--> segunda fase', listaDatosAux);
              cantidad += listaDatosAux.piezas;
              monto += listaDatosAux.monto;
            }
            if (cantidad > 0 ) {
              arrayValores.push(cantidad);
              arrayLabel.push(element);
              /* PRIORIDAD 3*/
              this.listaPrioridad3.push({nombrePrio3: element, piezas: cantidad, monto: monto});
            }
          });
          /*For para ordenar los datos de acuerdo al monto*/
          let montoAuxL: any;
          let band = false;
          while (!band) {
            band= true;
            for (var i= 0; i < this.listaPrioridad3.length -1; i++){
              var aux= i + 1;
              if (this.listaPrioridad3[i].monto < this.listaPrioridad3[aux].monto) {
                montoAuxL = this.listaPrioridad3[i + 1];
                this.listaPrioridad3[i + 1] = this.listaPrioridad3[i];
                this.listaPrioridad3[i] = montoAuxL;
                band = false;
              }
            }
          }
          /**********************************************/
          if (arrayValores.length > 0) {
            this.tipoGraficaPrioridad3 = 'prioridadVerde';
            Array.prototype.push.apply(this.filtroPrioridad3, arrayLabel);
            Array.prototype.push.apply(this.arrayPrioridad3, arrayValores);
          } else {
            var arrayLabel = new Array<any>();
            var arrayValores = new Array<any>();
            arrayLabel.push("");
            arrayValores.push(1);
            Array.prototype.push.apply(this.filtroPrioridad3, arrayLabel);
            Array.prototype.push.apply(this.arrayPrioridad3, arrayValores);
            this.tipoGraficaPrioridad3 = "gris";
          }
        }

      } else {
        var arrayLabel = new Array<any>();
        var arrayValores = new Array<any>();
        arrayLabel.push("");
        arrayValores.push(1);
        Array.prototype.push.apply(this.filtroPrioridad3, arrayLabel);
        Array.prototype.push.apply(this.arrayPrioridad3, arrayValores);
        this.tipoGraficaPrioridad3 = "gris";
      }
    } else {
      var arrayLabel = new Array<any>();
      var arrayValores = new Array<any>();
      this.tipoGraficaPrioridad1 = "gris";
      this.tipoGraficaPrioridad2 = "gris";
      this.tipoGraficaPrioridad3 = 'gris';
      arrayValores.push(1);
      arrayLabel.push("");
      Array.prototype.push.apply(this.filtroPrioridad1, arrayLabel);
      Array.prototype.push.apply(this.arrayPrioridad1, arrayValores);
      Array.prototype.push.apply(this.filtroPrioridad2, arrayLabel);
      Array.prototype.push.apply(this.arrayPrioridad2, arrayValores);
      Array.prototype.push.apply(this.filtroPrioridad3, arrayLabel);
      Array.prototype.push.apply(this.arrayPrioridad3, arrayValores);
    }
  }
  limpiarVariablesGrafica() {
    //////// Emìeza grafica productos //////
    if (this.listaGraficaProductos.length > 0) {
      for (let valor of this.listaGraficaProductos) {
        this.arrayProducto.push(valor.piezas);
        this.filtroProducto.push(valor.estado);
        this.tipoGraficaProductos = 'General';
      }
    } else {
      this.tipoGraficaProductos = 'Gris';
      this.arrayProducto.push(1);
      this.filtroProducto.push("");
    }
    let valoresP  = [] = [];
    let valoresProductos = [] = [];
    for (let nombre of this.listaGraficaProductos) {
      valoresProductos.push([0, 0]);
      valoresP.push(0);
    }
    if (valoresP.length > 0) {
      this.dataProductos = {
        titulo: 'Totales',
        labels: this.filtroProducto,
        valores: valoresP,
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresProductos,
      };
      this.dataProductosAux = {
        titulo: 'Totales',
          labels: this.filtroProducto,
          valores: valoresP,
          labelsExtras: ['Piezas' , 'Monto'],
          labelsExtrasHover: ['Piezas' , 'Monto'],
          valuesExtras: [0, 0],
          valuesExtrasHover: valoresProductos,
      };
      this.tipoGraficaProductos = 'VerdevsAzul';
    } else {
      this.dataProductos = {
        titulo: 'Totales',
        labels: ['Sin datos'],
        valores: [1],
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: [[0, 0]],
      };
      this.tipoGraficaProductos = 'Gris';
      setTimeout(() => {
        this.activarGrProd = true;
      }, 5);
    }
    /// Empieza lo de grafica por clientes
    if (this.listaClientes.length > 0) {
      for (let valor of this.listaClientes) {
        this.arrayClientesGra.push(valor.piezas);
        this.filtroClientesGra.push(valor.nombreCliente);
        this.tipoGraficaClienteGra = 'General';
      }
    } else {
      this.tipoGraficaClienteGra = 'gris';
      this.arrayClientesGra.push(1);
      this.filtroClientesGra.push("");
    }

    let valoresC  = [] = [];
    let valoresCliente  = [] = [];
    for (let nombre of this.listaClientes) {
      valoresCliente.push([0, 0]);
      valoresC.push(0);
    }
    if (valoresC.length > 0) {
      this.dataCLiente = {
        titulo: 'Totales',
        labels: this.filtroClientesGra,
        valores: valoresC,
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresCliente,
      };
      this.dataClientesAux = {
        titulo: 'Totales',
        labels: this.filtroClientesGra,
        valores: valoresC,
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresCliente,
      };
      this.tipoGraficaClienteGra = 'General';
    } else {
      this.dataCLiente = {
        titulo: 'Totales',
        labels: this.filtroClientesGra,
        valores: [1],
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: [[0, 0]],
      };
      this.tipoGraficaClienteGra = 'Gris';
      setTimeout(() => {
        this.clienteData = true;
      }, 5);

    }
    //////// Empìeza grafica Prioridades //////

    if (this.listaPrioridades.length > 0) {
      for (let prioridad of this.listaPrioridades) {
        this.filtroPrioridadesGra.push(prioridad.prioridad);
        this.arrayPrioridadesGra.push(prioridad.piezas);
      }
      this.tipoGraficaGraPrio = 'Prioridades';
    } else {
      this.tipoGraficaGraPrio = 'Gris';
      this.filtroPrioridadesGra.push("");
      this.arrayPrioridadesGra.push(1);
    }
    let valoresPrio  = [] = [];
    let valoresPrioridades  = [] = [];
    for (let nombre of this.listaPrioridades) {
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
      this.tipoGraficaPrioridades = 'Prioridades';
    } else {
      this.dataPrioridades = {
        titulo: 'Totales',
        labels: ['Sin datos'],
        valores: [1],
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: [[0 , '0']],
      };

      this.tipoGraficaGraPrio = 'Gris';
      setTimeout(() => {
        this.activarGrPrio = true;
      }, 5);
    }
    //////// Empìeza grafica Prioridad 1 //////
    if (this.listaPrioridad1.length > 0) {
      for (let prioridad of this.listaPrioridad1) {
        this.filtroPrioridad1Gra.push(prioridad.nombrePrio1);
        this.arrayPrioridad1Gra.push(prioridad.piezas);
      }
      this.tipoGraficaPrioridades1 = 'PrioridadRoja';
    } else {
      this.tipoGraficaPrioridades1 = 'Gris';
      this.filtroPrioridad1Gra.push("");
      this.arrayPrioridad1Gra.push(1);
    }
    let valoresPrio1  = [] = [];
    let valoresPrioridades1  = [] = [];
    for (let nombre of this.listaPrioridad1) {
      valoresPrioridades1.push([0, 0]);
      valoresPrio1.push(0);
    }
    if (valoresPrio1.length > 0) {
      this.dataPrioridadUno = {
        titulo: 'Totales',
        labels: this.filtroPrioridad1Gra,
        valores: valoresPrio1,
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresPrioridades1,
      };
      this.dataPrioridades1Aux = {
        titulo: 'Totales',
        labels: this.filtroPrioridad1Gra,
        valores: valoresPrio1,
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresPrioridades1,
      };
      this.tipoGraficaPrioridades1 = 'PrioridadRoja';
    } else {
      this.dataPrioridadUno = {
        titulo: 'Totales',
        labels: ['Sin datos'],
        valores: [1],
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: [[0 , '0']],
      };

      this.tipoGraficaPrioridades1 = 'Gris';
      setTimeout(() => {
        this.activarGrPrio1 = true;
      }, 5);
    }
    //////// Empìeza grafica Prioridad 2 //////
    if (this.listaPrioridad2.length > 0) {
      for (let prioridad of this.listaPrioridad2) {
        this.filtroPrioridad2Gra.push(prioridad.nombrePrio2);
        this.arrayPrioridad2Gra.push(prioridad.piezas);
      }
      this.tipoGraficaPrioridades2 = 'PrioridadNaranja';
    } else {
      this.tipoGraficaPrioridades2 = 'Gris';
      this.filtroPrioridad2Gra.push("");
      this.arrayPrioridad2Gra.push(1);
    }
    let valoresPrio2  = [] = [];
    let valoresPrioridades2  = [] = [];
    for (let nombre of this.listaPrioridad2) {
      valoresPrioridades2.push([0, 0]);
      valoresPrio2.push(0);
    }
    if (valoresPrio2.length > 0) {
      this.dataPrioridadDos = {
        titulo: 'Totales',
        labels: this.filtroPrioridad2Gra,
        valores: valoresPrio2,
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresPrioridades2,
      };
      this.dataPrioridades2Aux = {
        titulo: 'Totales',
        labels: this.filtroPrioridad2Gra,
        valores: valoresPrio2,
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresPrioridades2,
      };
      this.tipoGraficaPrioridades2 = 'PrioridadNaranja';
    } else {
      this.dataPrioridadDos = {
        titulo: 'Totales',
        labels: ['Sin datos'],
        valores: [1],
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: [[0 , '0']],
      };

      this.tipoGraficaPrioridades2 = 'Gris';
      setTimeout(() => {
        this.activarGrPrio2 = true;
      }, 5);
    }
    //////// Empìeza grafica Prioridad 3 //////
    if (this.listaPrioridad3.length > 0) {
      for (let prioridad of this.listaPrioridad3) {
        this.filtroPrioridad3Gra.push(prioridad.nombrePrio3);
        this.arrayPrioridad3Gra.push(prioridad.piezas);
      }
      this.tipoGraficaPrioridades3 = 'PrioridadVerde';
    } else {
      this.tipoGraficaPrioridades3 = 'Gris';
      this.filtroPrioridad3Gra.push("");
      this.arrayPrioridad3Gra.push(1);
    }
    let valoresPrio3  = [] = [];
    let valoresPrioridades3  = [] = [];
    for (let nombre of this.listaPrioridad3) {
      valoresPrioridades3.push([0, 0]);
      valoresPrio3.push(0);
    }
    if (valoresPrio3.length > 0) {
      this.dataPrioridadTres = {
        titulo: 'Totales',
        labels: this.filtroPrioridad3Gra,
        valores: valoresPrio3,
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresPrioridades3,
      };
      this.dataPrioridades3Aux = {
        titulo: 'Totales',
        labels: this.filtroPrioridad3Gra,
        valores: valoresPrio3,
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresPrioridades3,
      };
      this.tipoGraficaPrioridades3 = 'PrioridadVerde';
    } else {
      this.dataPrioridadTres = {
        titulo: 'Totales',
        labels: ['Sin datos'],
        valores: [1],
        labelsExtras: ['Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: [[0 , '0']],
      };

      this.tipoGraficaPrioridades3 = 'Gris';
      setTimeout(() => {
        this.activarGrPrio3 = true;
      }, 5);
    }
  }
  calcularDatosParaGraficas() {
    for (let productos of this.listaGraficaProductos) {
      this.llenarTotalesGraficas(this.dataProductos, productos, 'PRODUCTOS', this.dataProductosAux);
    }
    for (let i = 0; i < this.dataProductos.valuesExtrasHover.length; i++){
      this.dataProductos.valuesExtrasHover[i][1] = new AccountingFormatMoney().transform(this.dataProductos.valuesExtrasHover[i][1]);
    }
    /// Empieza clientes
    for (let cliente of this.listaClientes) {
       this.llenarTotalesGraficas(this.dataCLiente, cliente, 'CLIENTES', this.dataClientesAux);
     }
    for (let prioridades of this.listaPrioridades) {
      this.llenarTotalesGraficas(this.dataPrioridades, prioridades, 'PRIORIDADES', this.dataPrioridadesAux);
    }
    for (let prioridad1 of this.listaPrioridad1) {
      this.llenarTotalesGraficas(this.dataPrioridadUno, prioridad1, 'PRIORIDAD1', this.dataPrioridades1Aux);
    }
    for (let prioridad2 of this.listaPrioridad2) {
      this.llenarTotalesGraficas(this.dataPrioridadDos, prioridad2, 'PRIORIDAD2', this.dataPrioridades2Aux);
    }
    for (let prioridad3 of this.listaPrioridad3) {
      this.llenarTotalesGraficas(this.dataPrioridadTres, prioridad3, 'PRIORIDAD3', this.dataPrioridades3Aux);
    }
  }
  llenarTotalesGraficas(total, elemento, graficaElegida, totalAux) {
    switch (graficaElegida) {
      case 'PRODUCTOS':
        let valuesExtraAux = total.valuesExtras;
        let posicion1 = this.filtroProducto.indexOf(elemento.estado);
        if (this.nuevoProducto.indexOf(elemento.estado) === -1) {
          this.nuevoProducto.push(elemento.estado);
        }
        total.valuesExtrasHover[posicion1][0] += elemento.piezas;
        /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
        totalAux.valuesExtras[1] += elemento.monto;
        total.valuesExtras[1] = new AccountingFormatMoney().transform( totalAux.valuesExtras[1]);
        total.valuesExtras[0] += elemento.piezas; // Total de Partidas
        if (elemento.monto > 0) {
          total.valores[posicion1] += elemento.monto; // +(elemento.monto.toFixed(2)); //Monto total
        } else {
          total.valores[posicion1] += 1;
        }
        total.valuesExtrasHover[posicion1][1] += +(elemento.monto.toFixed(2));
        setTimeout(() => {
          this.activarGrProd = true;
        }, 5);
        break;
      case 'CLIENTES':
        valuesExtraAux = total.valuesExtras;
        let valuesExtrasHover = total.valuesExtrasHover;
        let posicion2 = this.filtroClientesGra.indexOf(elemento.nombreCliente);
        if (this.nuevoClientes.indexOf(elemento.nombreCliente) === -1) {
          this.nuevoClientes.push(elemento.nombreCliente);
        }
        total.valuesExtrasHover[posicion2][0] += elemento.piezas;
        /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
        /*Se agrego esto para convertir el valor en divisa*/
        totalAux.valuesExtras[1] += elemento.monto;
        total.valuesExtras[1] = new AccountingFormatMoney().transform( totalAux.valuesExtras[1]);
        /*Termino..*/
        total.valuesExtras[0] += elemento.piezas; // Total de Partidas
        if (elemento.monto > 0) {
          total.valores[posicion2] += elemento.monto; // +(elemento.monto.toFixed(2)); //Monto total
        } else {
          total.valores[posicion2] += 1;
        }
        /*total.valuesExtrasHover[posicion2][1] += +(elemento.monto.toFixed(2));*/
        /**Se agrego esto para ponerle al monto tipo divisa*/
        valuesExtrasHover[posicion2][1] += +(elemento.monto.toFixed(2));
        total.valuesExtrasHover[posicion2][1] = new AccountingFormatMoney().transform(valuesExtrasHover[posicion2][1]);
        /*---------Termina------*/
        setTimeout(() => {
          this.clienteData = true;
        }, 5);
        break;
      case 'PRIORIDADES':
        valuesExtraAux = total.valuesExtras;
        valuesExtrasHover = total.valuesExtrasHover;
        let posicionP = this.filtroPrioridadesGra.indexOf(elemento.prioridad);
        if (this.nuevaPrioridad.indexOf(elemento.prioridad) === -1) {
          this.nuevaPrioridad.push(elemento.prioridad);
        }
        total.valuesExtrasHover[posicionP][0] += elemento.piezas;
        /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
        /*Se agrego esto para convertir el valor en divisa*/
        totalAux.valuesExtras[1] += elemento.monto;
        total.valuesExtras[1] = new AccountingFormatMoney().transform( totalAux.valuesExtras[1]);
        /*Termino..*/
        total.valuesExtras[0] += elemento.piezas; // Total de Partidas
        if (elemento.monto > 0) {
          total.valores[posicionP] += elemento.monto; // +(elemento.monto.toFixed(2)); //Monto total
        } else {
          if (elemento.piezas > 0) {
            total.valores[posicionP] += 1;
          }
        }
        /*total.valuesExtrasHover[posicionP][1] += +(elemento.monto.toFixed(2));*/
        /**Se agrego esto para ponerle al monto tipo divisa*/
        valuesExtrasHover[posicionP][1] += +(elemento.monto.toFixed(2));
        total.valuesExtrasHover[posicionP][1] = new AccountingFormatMoney().transform(valuesExtrasHover[posicionP][1]);
        /*---------Termina------*/
        setTimeout(() => {
          this.activarGrPrio = true;
        }, 5);
        break;
      case 'PRIORIDAD1':
         valuesExtraAux = total.valuesExtras;
        valuesExtrasHover = total.valuesExtrasHover;
        let posicionP1 = this.filtroPrioridad1Gra.indexOf(elemento.nombrePrio1);
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
        if (elemento.monto > 0) {
          total.valores[posicionP1] += elemento.monto; // +(elemento.monto.toFixed(2)); //Monto total
        } else {
          total.valores[posicionP1] += 1;
        }
        /*total.valuesExtrasHover[posicionP1][1] += +(elemento.monto.toFixed(2));*/
        /**Se agrego esto para ponerle al monto tipo divisa*/
        valuesExtrasHover[posicionP1][1] += +(elemento.monto.toFixed(2));
        total.valuesExtrasHover[posicionP1][1] = new AccountingFormatMoney().transform(valuesExtrasHover[posicionP1][1]);
        /*---------Termina------*/
        setTimeout(() => {
          this.activarGrPrio1 = true;
        }, 5);
        break;
      case 'PRIORIDAD2':
         valuesExtraAux = total.valuesExtras;
         valuesExtrasHover = total.valuesExtrasHover;
        let posicionP2 = this.filtroPrioridad2Gra.indexOf(elemento.nombrePrio2);
        if (this.nuevaPrioridad2.indexOf(elemento.nombrePrio2) === -1) {
          this.nuevaPrioridad2.push(elemento.nomCliente);
        }
        total.valuesExtrasHover[posicionP2][0] += elemento.piezas;
        /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
        /*Se agrego esto para convertir el valor en divisa*/
        totalAux.valuesExtras[1] += elemento.monto;
        total.valuesExtras[1] = new AccountingFormatMoney().transform( totalAux.valuesExtras[1]);
        /*Termino..*/
        total.valuesExtras[0] += elemento.piezas; // Total de Partidas
        if (elemento.monto > 0) {
          total.valores[posicionP2] += elemento.monto; // +(elemento.monto.toFixed(2)); //Monto total
        } else {
          total.valores[posicionP2] += 1;
        }
        /*total.valuesExtrasHover[posicionP2][1] += +(elemento.monto.toFixed(2));*/
        /**Se agrego esto para ponerle al monto tipo divisa*/
        valuesExtrasHover[posicionP2][1] += +(elemento.monto.toFixed(2));
        total.valuesExtrasHover[posicionP2][1] = new AccountingFormatMoney().transform(valuesExtrasHover[posicionP2][1]);
        /*---------Termina------*/
        setTimeout(() => {
          this.activarGrPrio2 = true;
        }, 5);
        break;
      case 'PRIORIDAD3':
        valuesExtraAux = total.valuesExtras;
         valuesExtrasHover = total.valuesExtrasHover;
        let posicionP3 = this.filtroPrioridad3Gra.indexOf(elemento.nombrePrio3);
        if (this.nuevaPrioridad3.indexOf(elemento.nombrePrio3) === -1) {
          this.nuevaPrioridad3.push(elemento.nombrePrio3);
        }
        total.valuesExtrasHover[posicionP3][0] += elemento.piezas;
        /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
        /*Se agrego esto para convertir el valor en divisa*/
        totalAux.valuesExtras[1] += elemento.monto;
        total.valuesExtras[1] = new AccountingFormatMoney().transform( totalAux.valuesExtras[1]);
        /*Termino..*/
        total.valuesExtras[0] += elemento.piezas; // Total de Partidas
        if (elemento.monto > 0) {
          total.valores[posicionP3] += elemento.monto; // +(elemento.monto.toFixed(2)); //Monto total
        } else {
          total.valores[posicionP3] += 1;
        }
        /*total.valuesExtrasHover[posicionP3][1] += +(elemento.monto.toFixed(2));*/
        /**Se agrego esto para ponerle al monto tipo divisa*/
        valuesExtrasHover[posicionP3][1] += +(elemento.monto.toFixed(2));
        total.valuesExtrasHover[posicionP3][1] = new AccountingFormatMoney().transform(valuesExtrasHover[posicionP3][1]);
        /*---------Termina------*/
        setTimeout(() => {
          this.activarGrPrio3 = true;
        }, 5);
        break;
      default:
        break;
    }
  }
  generarEtiquetaStock() {
    console.log(SessionUser.getInstance().getUser().getIdEmpleado());
    const BrowserWindow = electron.remote.BrowserWindow;
    let newWin = new BrowserWindow({ width: 288, height: 216 });
    const base64 = 'data:image/png;base64,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';
    const html = [
      '\n' +
      '     <html><head>\n' +
      '        <style>\n' +
      '            "@media print { @page {size: 10cm 9cm;page-break-inside: avoid;page-break-before: avoid;page-break-after: avoid;}}\n' +
      '            html, body {\n' +
      '                width: 100%;\n' +
      '            }\n' +
      '            \n' +
      '            body {\n' +
      '                background: #cafe00;\n' +
      '            }\n' +
      '\n' +
      '            .contenido {\n' +
      '                display: flex;\n' +
      '                justify-content: center;\n' +
      '                align-items: center; font-size: 14px;font-family: Novecento;flex-direction: column;\n' +
      '            }\n' +
      '\n' +
      '        </style></head>\n' +
      '        <body> \n' +
      '            <div class=\'contenido\' >\n' +
      '<div>',
      '<img style=\'width: 9cm; height:6cm;\' ',
      'src=\'' + base64 + '\'>',
      '</div>',
      '            </div>\n' +
      '        \n' +
      '        </body></html>'
    ].join('');
    /*const html = [
      '\n' +
      '     <html><head>\n' +
      '        <style>\n' +
      '            "@media print { @page {size: 10cm 9cm;page-break-inside: avoid;page-break-before: avoid;page-break-after: avoid;}}\n' +
      '            html, body {\n' +
      '                width: 100%;\n' +
      '            }\n' +
      '            \n' +
      '            body {\n' +
      '                background: #cafe00;border: 1px solid #424242\n' +
      '            }\n' +
      '\n' +
      '            .contenido {\n' +
      '                display: flex;\n' +
      '                justify-content: center;\n' +
      '                align-items: center; font-size: 14px;font-family: Novecento;flex-direction: column;\n' +
      '            }\n' +
      '\n' +
      '        </style></head>\n' +
      '        <body> \n' +
      '            <div class=\'contenido\' >\n' +
      '<div>',
      '</div>',
      '                <span style=\'font-weight: bold;margin-top: 18px;margin-left: 18px;align-self: start;text-align: center; line-height: 1.2\'>PRODUCTO DE</span>\n' +
      '                 <div style=\'font-weight: 600;display: inline-block;margin-left: 18px; height: 20px;align-self: start;text-align: center;font-size: 70px;\'>STOCK</div>\n' +
      '            </div>\n' +
      '        \n' +
      '        </body></html>'
    ].join('');*/

    newWin.loadURL('data:text/html;charset=utf-8,' + encodeURI(html));
    newWin.hide();
    newWin.webContents.on('did-finish-load', () => {
      let prints = newWin.webContents.getPrinters();
      let impresora: String = '';

      for (let print of prints) {
        if (print.description == 'ZebraTicket') {
          impresora = print.name;
        }
      }

      newWin.webContents.print({ silent: false, printBackground: false, deviceName: impresora }, (success) => {
        newWin.close();
      });
    });
  }
}
