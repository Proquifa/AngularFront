import { Component, OnInit } from '@angular/core';
import {TrabajarRutasClienteService} from '../trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-cliente.services';
import {EnvioPorClienteService} from '../../../services/trabajar-ruta/envio-por-cliente.service';
import {SessionUser} from '../../../services/session/session.service';
import {EmbalarService} from '../../../services/embalar/embalar.service';
import {ComunService} from '../../../services/comun/comun.service';
import {Subscription} from 'rxjs/Subscription';
import {CoreContainerComponent} from '../../core-container/core-container.component';

@Component({
  selector: 'pn-ruta-envio-por-cliente',
  templateUrl: './ruta-envio-por-cliente.component.html',
  styleUrls: ['./ruta-envio-por-cliente.component.scss']
})
export class RutaEnvioPorClienteComponent implements OnInit {
  classAsideMenu: string = 'asideNormalMenu';
  itemsMenu: any[];
  vistaPrin: boolean
  ocultarAcor: boolean;
  objetivoDePackingList: number = 0;
  packing_trabajadas_hoy: number = 0;
  packingListDeceada: number = 0;
  inspeccionDeceadaHastaElMomento: number = 0;
  mensajePackingDeseadas: string;
  minimoPackingDeInspeccion: number = 0;
  colorMinimoInspeccion: string;
  minimaInspeccionHastaElMomento: number = 0;
  valorSigno: string;
  mensajeEmbDeseado: string;
  activarGraficasPrioEsta: boolean;
  dataPrioridadEstadisticas: any;
  graficasEstadisticas: string;
  totales_estadisticas: any;
  resolucion: string;
  totalesBarra: any[] = [];
  vistaPrincipal: boolean;
  inspeccionDeceadaHastaElMomentoMen = 0;
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
  totEmb = 0;
  totAlmacen = 0;
  totEnvio = 0;
  totEnvioXClient = 0;
  listaPrioridadUsuarioEstadisticas: any[];
  filtroPrioUsuario: any[] = [];
  listaPrioridadEstadisticasDatos: any;
  nuevaPrioridadEstadisticas: any = [];
  activeMenu: boolean;
  colorIndiceInspeccionDeceada: string = "#D0021B";
  idUsuario = SessionUser.getInstance().getUser().getIdEmpleado();
  subs: Subscription;
  constructor(private comunService: ComunService, private _serviceTrabajarRuta: EnvioPorClienteService, private _embalarService: EmbalarService, private core: CoreContainerComponent) { }

  ngOnInit() {
    this.subs = this.comunService.recargar.subscribe(
      (data) => {
        if (data === 'trabajarRutaCliente') {
          this.activeMenu = false;
          this.obtenerMenu();
          this.obtenerObjetivos();
          this.ObtenerEstadisticaUsuarioEnvioPL(this.idUsuario);
        }
      });
    console.log('Soy usuario --> ', this.idUsuario);
    this.vistaPrincipal = true;
    this.vistaPrin = true;
    if (this.vistaPrin === true) {
      this.resolucion = '900px';
    }
    this.obtenerMenu();
    this.obtenerObjetivos();
    this.ObtenerEstadisticaUsuarioEnvioPL(this.idUsuario);
  }
  obtenerMenu() {
    this.core.openModal(1);
    this.activeMenu = false;
    this._embalarService.totalesGeneral().subscribe(
      data => {
        this.totEmb = data.current.Embalar;
        this.totAlmacen = data.current.Almacen;
        this.totEnvio = data.current.Envio;
        this.totEnvioXClient = data.current.EnvioXCliente;
        this.itemsMenu = [
          {rol: 'RESPONSABLE DE ALMACEN ', active: true, menu: [
              {nombre: 'Salidas Almacén', tipo: 'valor', valor: this.totEmb, url: 'embalar', disable: false},
              {
                nombre: 'Trabajar rutas',
                tipo: '',
                valor: 0,
                url: 'poolVisitas',
                disable: true,
                subMenu: [
                  { nombre: 'Almacén', tipo: 'valor', valor: this.totAlmacen, url: 'almacen', select: false},
                  { nombre: 'Envío', tipo: 'valor', valor: this.totEnvio, url: 'envio', select: false},
                  { nombre: 'Envio Pagado por cliente', tipo: 'valor', valor : this.totEnvioXClient , url: 'trabajarRutaCliente', select: true}
                ],
                select: false
              }]}
        ];
        this.activeMenu = true;
        this.core.closeModal(1);
      });
  }
  obtenerObjetivos() {
    this.totalesBarra = [];
    this.core.openModal(1);
    this._serviceTrabajarRuta.obtenerTotObjetivos().subscribe(
      data => {
        if (data.current['Hoy'] !== undefined) {
          this.packing_trabajadas_hoy = data.current['Hoy'];
        }
        if (data.current['Deseadas'] !== undefined) {
          this.packingListDeceada = data.current['Deseadas'];
          this.inspeccionDeceadaHastaElMomento =
            this.packing_trabajadas_hoy - this.packingListDeceada;
          this.inspeccionDeceadaHastaElMomentoMen = -1 * this.inspeccionDeceadaHastaElMomento;
          if (this.inspeccionDeceadaHastaElMomentoMen === 0) {
            this.mensajePackingDeseadas = 'HAZ ALCANZADO LOS PAKING LIST DESEADOS';
          } else {
            this.mensajePackingDeseadas = 'ESTAS A' + ' ' + this.inspeccionDeceadaHastaElMomentoMen + ' ' + 'PACKING LIST DESEADAS';
          }
        }
        if (data.current['Minimo'] !== undefined) {
          this.minimoPackingDeInspeccion = data.current['Minimo'];
          /* this.minimaInspeccionHastaElMomento =
             this.minimoPackingDeInspeccion - this.packing_trabajadas_hoy;*/
          if (this.packing_trabajadas_hoy  > this.minimoPackingDeInspeccion) {
            // this.cambiarColor = '#39B54A';
            this.minimaInspeccionHastaElMomento = this.packing_trabajadas_hoy  - this.minimoPackingDeInspeccion;
            this.valorSigno = '+';
            this.colorMinimoInspeccion = '#39B54A';
            this.mensajeEmbDeseado = 'HAZ SUPERADO EL MÍNIMO DE ETREGAS';
          } else if (this.minimoPackingDeInspeccion > this.packing_trabajadas_hoy ) {
            // this.cambiarColor = '#D0021B';
            this.minimaInspeccionHastaElMomento = this.minimoPackingDeInspeccion - this.packing_trabajadas_hoy;
            this.valorSigno = '-';
            this.colorMinimoInspeccion = '#D0021B'; //rojo
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
        if (data.current['Objetivo'] !== undefined) {
          this.objetivoDePackingList = data.current['Objetivo'];
        }
        this.totalesBarra.push({totales: this.packingListDeceada, hechas: this.packing_trabajadas_hoy});
        this.core.closeModal(1);
      },
      error => {
        this.core.closeModal(1);
        console.log(error);
      });
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
    this.core.openModal(1);
    this._serviceTrabajarRuta.obtenerPrioridades(idUsuario).subscribe(
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
        this.core.closeModal(1);
      });
  }
  // Metodo para las variables de la graficas estadisticas
  limpiarVariablesGraficaEstadisticas () {
    this.core.openModal(1);
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
    this.core.closeModal(1);
  }
  calcularDatosGraficaEstadisticas () {
    for (let usuario of this.listaPrioridadUsuarioEstadisticas) {
      this.llenarTotales(this.dataPrioridadEstadisticas, usuario, 'PRIORIDADESESTADISTICAS');
    }
  }
  llenarTotales(total, elemento, graficaElegida) {
    this.core.openModal(1);
    switch (graficaElegida) {
      case 'PRIORIDADESESTADISTICAS':
        const posicionP4 = this.filtroPrioUsuario.indexOf(elemento.prioridad);
        if (this.nuevaPrioridadEstadisticas.indexOf(elemento.prioridad) === -1) {
          this.nuevaPrioridadEstadisticas.push(elemento.prioridad);
        }
        total.valuesExtrasHover[posicionP4][0] += elemento.pieza;
        total.valuesExtras[0] += elemento.pieza; // Total de Partidas
        total.valores[posicionP4] += elemento.pieza; // +(elemento.monto.toFixed(2)); //Monto total
        this.activarGraficasPrioEsta = true; // ACTIVAR EL COMPONENTE PARA LA GRAFICA DE DONA PRIORIDADES USUARIO
        this.core.closeModal(1);
        break;
      default:
        this.core.closeModal(1);
        break;
    }
  }
  mostarOcultarAcordeon() {
    this.ocultarAcor = !this.ocultarAcor;
    if (this.ocultarAcor) {
      this.classAsideMenu = 'asideOcultarMenu';
    } else {
      this.classAsideMenu = 'asideMostrarMenu';
    }
  }
  regresarVista() {
    this.vistaPrincipal = true;
    this.obtenerMenu();
  }
  cambiarResolucione(valor) {
    this.vistaPrincipal = false;
    this.vistaPrin = false;
    if (this.vistaPrin === false) {
      this.resolucion = '1700px';
    }
  }
  actualizarDatos(valor) {
    if (valor === false) {
      this.activeMenu = false;
      this.vistaPrincipal = true;
      this.obtenerMenu();
    }
      this.obtenerObjetivos();
      this.ObtenerEstadisticaUsuarioEnvioPL(this.idUsuario);
  }
}
