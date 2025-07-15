import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionService } from '../../../../services/gestion/gestion.service';
import { ElementFilter } from '../../../shared/filter/element.model';
import { CoreContainerComponent } from '../../../core-container/core-container.component';
import { UtilService } from '../../../../services/util/util.service';
import { SeguimientoService } from '../../../../services/gestion/reportes/seguimiento/seguimiento.service';
import { Query } from '../../../../class/compras/utils/query.class';
import { SeguimientoCotizacionAgrupada } from './../../../../class/gestion/ventas/SeguimientoCotizacionAgrupada.class';
import { SeguimientoCotizacion } from './../../../../class/gestion/ventas/SeguimientoCotizacion.class';
import { PartidaCotizacionEnSeguimiento } from './../../../../class/gestion/ventas/PartidaCotizacionEnSeguimiento.class';
import { log } from 'util';
import { LoginService } from '../../../../services/login/login.service';

@Component({
  selector: 'pn-facturacion',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.scss']
})
export class SeguimientoComponent implements OnInit {

  mostrar: boolean = true;
  respaldoDatos: any[];
  objeto = { nombreCliente: "", monto: 0, folioCotizacion: "", folio: "", piezas: 0, diasAtraso: 0, enTiempo: "", estadoSeguimiento: "" };
  tipo: string;
  auxiliar: any[] = [];
  nombres: any[] = [];
  FiltroSeguimiento: any[] = [];
  FiltroConfirmacion: any[] = [];
  FiltroCancelable: any[] = [];
  sumita: any = 0;
  CotizacionesGlobal: any = 0;
  nuevoFiltro2: any[] = [];
  filtroNombreClientes1: any[] = [];
  nuevoFiltro: any[] = [];
  arreglo: any[];
  busqueda: any[];
  respaldo: any[];
  nuevaLista: any[];
  radarActivo: boolean = false;
  situacion: any[] = [];
  numero: any;
  titulo: string;
  fechaGeneral: any;
  lstElementos: any[] = [];
  partidasSuma: any = 0;
  piezasSuma: any = 0;
  montoTotal: any = 0;
  filtradoCotizaciones: any[] = [];
  lstResultadoPartidas: any[] = [];
  lstResultadoCotizaciones: any[] = [];
  filtroNuevo2: any[] = [];
  nuevoFiltroMarcas: any[] = [];
  nuevoEServicio: any[] = [];
  nuevoMarcas: any[] = [];
  nuevoVendedor: any[] = [];
  nuevo: any[] = [];
  nuevoClientes: any[] = [];;
  nuevoConfirmacion: any[] = [];;
  filtroNombreClientes: any[] = [];;
  activaGraficaHoy: number = 0; activaGraficaManana: number = 0; activaGraficaPasadoMa: number = 0; activaGraficaPosPasado: number = 0; activaPasado: number = 0;
  activaGraficaFuturo: number = 0; activaGraficaAyer: number = 0; activaGraficaAntier: number = 0; activaGraficaAnteAntier: number = 0; activaGraficaTodo: number = 0
  numeroDias: any; tempCotizaciones: any[] = []; TODO: String;
  tazaRealizacion: string; origen: String;
  diamanana: string;
  diaayer: string; historial: any; ultimo: string;
  lstEstado: any[] = []; nombreEmpresas: any[] = [];
  topGraphics: any = "-110%"; nivel: any;
  lstGraficaClientes: any[] = [];
  lista: any[] = []; filtroMarcas: any[] = [];
  filtroEjecutivoVentas: any[] = []; filtroEjecutivoServicio: any[] = [];
  GClientes: any = []; showGraphic: boolean = false;
  lstLineaTiempoActive: any[] = []; filtroNombre: any[] = [];
  numeroDia: number;
  today: String; ejecutivoServicio: any = [];
  estadoConfirmacion: any = []; marcas: any = [];
  tipoProducto: any = []; ejecutivoVentas: any;
  estadoSeguimiento: any = [];
  nivelIngreso: any = [];
  rango: number = 1; istextbox: boolean = true;
  istextboxSeguimiento: boolean = true; filtroConsultaRapida: String = "Busqueda por Folio"
  tipoCotizacion: number = 1; cuartoSelect: number = 0;
  sumaPiezas: any;
  sumaPartidas: number = 0; tercerSuma: any = 0;
  suma: number = 0; lstInfoCuarto: any[] = [];
  folio: any; lstInfo: any;
  nombreCliente: any; lstFiltro: any;
  lstFabricantes: any; lstClientes: any;
  lstCotizaciones: any; lstCobradores: any;
  isSeguimiento: boolean = true;
  Clear = true;
  isThereData: boolean = true;
  lstAux: any[] = [];
  lstAux1: any[] = [];
  lstMarcas: any[] = [];
  IsImage: boolean = true;
  //  IsDate: boolean = true;
  classPanel: string = "panelNormal";
  hiddenClose: boolean = true;
  dropClientes: any[] = [{ nombre: '--TODOS--', key: 0 }];
  dropCobrador: any[] = [{ nombre: '--TODOS--', key: 0 }];
  dropFabricantes: any[] = [{ nombre: '--TODOS--', key: 0 }];
  Elements: ElementFilter[];
  filtroForm: FormGroup;
  avanzada: Boolean = true;
  /**Variables Gráficas */
  graficasValores: any[] = [];
  graficas: any[] = [];
  refrescar: boolean = true;
  graficasCargadas: boolean = false;
  /*Nueva implementación */
  _sql: Query = new Query();
  _origen: String = "";
  _cliente: String = "";
  _folio: String = "";
  _tipo: String = "";
  _marca: String = "";
  _control: String = "";
  _esacMaster: String = "";
  _diaSeleccionado: String = "DIA0";
  _vistaGraficasBool: String = "tabla";
  _objLabels: Object = new Object();
  _totalSoloUnaVez: Boolean = true;
  _arrEtiquetaDia: Array<any> = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  _cotizacionesPorCliente: Array<any>;
  diahoy: String;
  _partidasSeguimiento: Array<any> = new Array<any>();
  clientes: any = [];
  facturo: any = [];
  estado: any = [];
  informacion: any = [];
  objetoInfo = {
    nombreCliente: "",
    monto: 0,
    nombreEsac: "",
    nombreEV: "",
    nombreEVT: "",
    numCotizaciones: 0,
    numPartidas: 0,
    numPiezas: 0,
    tipoSeguimiento: "",
    folioCotizacion: [],
  }
  //Esta funcion se llama una vez que se realzia un servicio
  Llenar = () => {
    this.Elements = [new ElementFilter("string", "Clientes", this.dropClientes, true),
    new ElementFilter("string", "Responsable", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'DPeralta', key: 1 },
      { nombre: 'GETorres', key: 2 },
      { nombre: 'GSCruz', key: 3 },
      { nombre: 'KBanderas', key: 4 },
      { nombre: 'MRMoreno', key: 5 },
    ], true),
    new ElementFilter("string", "Tipo", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Estandares', key: 1 },
      { nombre: 'Biológicos', key: 2 },
      { nombre: 'Reactivos', key: 3 },
      { nombre: 'Publicaciones', key: 4 },
      { nombre: 'Labware', key: 5 },
    ], true),
    new ElementFilter("string", "Marca", this.dropFabricantes, true),
    new ElementFilter("string", "Control", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Nacionales', key: 1 },
      { nombre: 'Mundiales', key: 2 },
      { nombre: 'Normal', key: 3 }
    ], true),
    ];
    //isThereData indica que ya no es necesario mostrar el loader
    this.isThereData = true;
    this.Clear = false;
  }

  facturaForm: FormGroup;
  constructor(private router: Router, private _fb: FormBuilder, private _gestionService: GestionService, private coreComponent: CoreContainerComponent, private utilService: UtilService, private _seguimientoService: SeguimientoService) { }
  ngOnInit() {
    let date: Date = new Date();
    this.filtroForm = new FormGroup({
      filtroDato: new FormControl()
    });

    this._gestionService.dropCobrador().subscribe(
      data => {
        this.lstCobradores = data.current;

        let lstAux: any[] = [];
        for (var item of this.lstCobradores) {
          lstAux.push({ nombre: item.usuario, key: item.idEmpleado })
        }
        this.dropCobrador = this.dropCobrador.concat(lstAux);
        this.Llenar();
      },
      error => {
        console.log("error login");
        console.log(error);
      }
    );

    this._gestionService.dropClientes().subscribe(
      data => {
        this.lstClientes = data.current;
        let lstAux: any[] = [];
        for (var item of this.lstClientes) {
          lstAux.push({ nombre: item.valor, key: item.llave })
        }
        this.dropClientes = this.dropClientes.concat(lstAux);
        this.Llenar();
      },
      error => {
        console.log("error login");
        console.log(error);
      }
    );

    this._gestionService.dropFabricantes().subscribe(
      data => {
        this.lstFabricantes = data.current;
        let lstAux: any[] = [];
        for (var item of this.lstFabricantes) {
          lstAux.push({ nombre: item.valor, key: item.llave })
        }
        this.dropFabricantes = this.dropFabricantes.concat(lstAux);
        this.Llenar();
      },
      error => {
        console.log("error login");
        console.log(error);
      }
    );
    this.facturaForm = new FormGroup({
      firstName: new FormControl()
    });
    this.seguimiento();

  }
  /*Obtine todas las cotizaciones de todos los clientes, "Universo" */
  obtenerCotizacionesEnSeguimientoEnPartidas(parametros: any, tipo: any, $evt = null) {
    this.refrescar = false;
    this.lstCotizaciones = [];
    this.lstAux = [] = [];
    this.lstAux1 = [] = [];
    this.lstMarcas = [] = [];
    this.sumaPartidas = 0;
    this.coreComponent.openModal(0);
    this._seguimientoService.obtenerCotizacionesEnSeguimientoEnPartidas(parametros).subscribe(
      data => {
        this.lstCotizaciones = data.current;
         console.log(this.lstCotizaciones);
        this._sql.Query(this.lstCotizaciones, ["tipoSeguimiento", "nombreCliente", "folioCotizacion", "marca", "control", "tipoProduct", "nivelIngreso", "diasFiltro", "enTiempo", "nombreEV", "nombreVendedor", "estadoSeguimiento", "master"]);
        if (this._sql.indexObject.enTiempo != null) {
          let totalFT: number = this._sql.indexObject.enTiempo.FT == null ? 0 : (this._sql.indexObject.enTiempo.FT as Array<any>).length;
          let totalET: number = this._sql.indexObject.enTiempo.ET == null ? 0 : (this._sql.indexObject.enTiempo.ET as Array<any>).length;
          totalET = totalET + (this._sql.indexObject.enTiempo.Pendiente == null ? 0 : (this._sql.indexObject.enTiempo.Pendiente as Array<any>).length);
          let tasaRealizacion: Number = (totalET * 100) / (totalET + totalFT);
          this.tazaRealizacion = 'TR ' + tasaRealizacion.toFixed(2) + ' %';
          //   console.log("TAZA DE REALIZACIÓN", this.tazaRealizacion);
        }
        if (this._totalSoloUnaVez) {
          var total: String = this._sql.universo.length.toString();
          this.TODO = total;
          this._totalSoloUnaVez = false;
        }
        // this._origen = "Seguimiento";
        this.filtrarConsultaVista(this._cliente, this._tipo, this._marca, this._control, this._diaSeleccionado, this._folio, this._origen, this._vistaGraficasBool, this._esacMaster);
        this.coreComponent.closeModal(0);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }

  filtrarConsultaVista($cliente: String, $tipo: String, $marca: String, $control: String, $diaSeleccionado: String, $folio: String, $origen: String, $vistaCurrent: String, $esacMaster: String) {
    this.lstAux = [];
    this._cliente = $cliente == "" ? null : $cliente;
    this._tipo = $tipo == "" ? null : $tipo;
    this._folio = $folio == "" ? null : $folio;
    this._marca = $marca == "" ? null : $marca;
    this._control = $control == "" ? null : $control;
    this._origen = $origen == "" ? null : $origen;
    this._esacMaster = $esacMaster == "" ? null : $esacMaster;
    this._diaSeleccionado = $diaSeleccionado == "" || $diaSeleccionado == "TODO" ? null : $diaSeleccionado;
    this._vistaGraficasBool = $vistaCurrent != null && $vistaCurrent != "" ? $vistaCurrent : this._vistaGraficasBool;
    if (this._vistaGraficasBool == "grafica") {
    } else {
      let ultimoMontoTotal: Number = 0;
      let nombresCliente = this._sql.getPunteros([null, "nombreCliente"]);
      let idxNombreCliente: any = this._cliente == "" || this._cliente == null ? nombresCliente : [this._cliente];//"nombreCliente"
      let numFFila = 0;
      for (var f = 0; f < idxNombreCliente.length; f++) {

        let punterosCadaCliente: any = this._sql.getPunteros([this._origen, idxNombreCliente[f], this._folio, this._marca, this._control, this._tipo, null, null, null, null, null, null, this._esacMaster]);
        if (punterosCadaCliente.length > 0) {
          numFFila++;
          let cotizacionNew: SeguimientoCotizacionAgrupada = new SeguimientoCotizacionAgrupada();
          cotizacionNew.setNumFila(numFFila);
          cotizacionNew.setNombreCliente(idxNombreCliente[f]);
          let estatus: any = this._sql.getValoresCampo("estadoSeguimiento", punterosCadaCliente);

          if (estatus.indexOf('Por Realizar') != -1 || estatus.indexOf('En Realización(email)') != -1 || estatus.indexOf('En Realización') != -1) {
            cotizacionNew.setEstatusMasCritico("No Trabajada");

          } if (estatus.indexOf('Cotización Reenviada') != -1) {
            cotizacionNew.setEstatusMasCritico("Cotización no recibida");

          } if (estatus.indexOf('Contacto NO Localizado') != -1) {
            cotizacionNew.setEstatusMasCritico("Contacto No Localizado");

          }
          cotizacionNew.setMonto(this._sql.getSumarCampo("montoCotizacion", punterosCadaCliente));
          cotizacionNew.setPiezas(this._sql.getSumarCampo("piezas", punterosCadaCliente));
          cotizacionNew.setTotalCotizaciones(this._sql.getValoresCampo("folioCotizacion", punterosCadaCliente).length);
          cotizacionNew.setTipoSeguimiento(this._sql.getValoresCampo("tipoSeguimiento", punterosCadaCliente));
          cotizacionNew.setPartidas(this._sql.getValoresCampo("partidas", punterosCadaCliente));
          cotizacionNew.setTipoProducto(this._sql.getValoresCampo("tipoProduct", punterosCadaCliente));
          let sqlArrayEV: any = this._sql.getValoresCampo("nombreEV", punterosCadaCliente);
          cotizacionNew.setNombreVendedor(sqlArrayEV[0]);
          let sqlArrayESAC: any = this._sql.getValoresCampo("nombreVendedor", punterosCadaCliente);
          cotizacionNew.setNombreESAC(sqlArrayESAC[0]);
          cotizacionNew.setFechaSiguienteContacto(this._sql.getValoresCampo("fechaSiguienteContacto", punterosCadaCliente));
          cotizacionNew.setNivelIngreso(this._sql.getValoresCampo("nivelIngreso", punterosCadaCliente));
          cotizacionNew.setMarca(this._sql.getValoresCampo("marca", punterosCadaCliente));
          cotizacionNew.setNombreESAC(this._sql.getValoresCampo("master", punterosCadaCliente));
          cotizacionNew.setFolioCotizacion(this._sql.getValoresCampo("folioCotizacion", punterosCadaCliente));
          cotizacionNew.setMontoCotizacion(this._sql.getValoresCampo("montoCotizacion", punterosCadaCliente));
          ultimoMontoTotal = +cotizacionNew.getMonto();
          this.lstAux.push(cotizacionNew);
        }
      }
      let lastItem: SeguimientoCotizacionAgrupada = new SeguimientoCotizacionAgrupada();
      lastItem.setUltimo(this.lstAux.length.toString());
      lastItem.setMonto(ultimoMontoTotal);
      this.lstAux.push(lastItem);
      //    console.log(this.lstAux);

      this.filtroCuadros(4, 1);
    }
    let diasFiltro: Array<any> = ["PASADO", "DIA-3", "DIA-2", "DIA-1", "DIA0", "DIA1", "DIA2", "DIA3", "FUTURO"];
    for (let t = 0; t < diasFiltro.length; t++) {
      let punterosDia: Array<any> = this._sql.getPunteros([this._origen, this._cliente, this._folio, this._marca, this._control, this._tipo, null, diasFiltro[t], null, null, null, null, this._esacMaster]);
      let total: String = punterosDia.length == 0 ? '' : punterosDia.length.toString(); //_sql.getValoresCampo( "folioCotizacion", punterosDia ).length;
      this._objLabels[diasFiltro[t]] = total;
    }
    let fechaHoy: Date = new Date();
    let fechaAyer: Date = new Date();
    fechaAyer.setDate(fechaHoy.getDate() - 1);
    let fechaManana: Date = new Date();
    fechaManana.setDate(fechaHoy.getDate() + 1);
    this.diahoy = this._arrEtiquetaDia[fechaHoy.getDay()] + ' ' + fechaHoy.getDate();
    this.diaayer = this._arrEtiquetaDia[fechaAyer.getDay()] + ' ' + fechaAyer.getDate();
    this.diamanana = this._arrEtiquetaDia[fechaManana.getDay()] + ' ' + fechaManana.getDate();
    this.origen = this._origen;
  }
  lineaTiempo(i) {
    this.lstLineaTiempoActive = [];
    this.lstLineaTiempoActive = new Array(this.lstAux1.length).fill('');
    this.lstLineaTiempoActive[i] = 'divActive';
    this.cotizaciones(0);
  }
  cotizaciones(i) {
    this.lstResultadoCotizaciones = [];
    this.lstResultadoCotizaciones = new Array(this.tempCotizaciones.length).fill('');
    this.lstResultadoCotizaciones[i] = 'divActive';

  }
  partidas(i) {
    this.lstResultadoPartidas = [];
    this.lstResultadoPartidas = new Array(this.lstInfo.length).fill('');
    this.lstResultadoPartidas[i] = 'divActive';

  }
  radar(n) {
    if (n === false) {
      this.radarActivo = true;
      this.partidas(0);
    } else {
      this.radarActivo = false;
      this.partidas(0);
    }

  }
  filtroCuadros(numDia, rango) {
    this.lineaTiempo(0);
    this.cotizaciones(0);
    this.numeroDias = numDia;

    this.nuevoFiltro = [];
    this.nuevoFiltro2 = [];
    this.FiltroCancelable = [];
    this.FiltroConfirmacion = [];
    this.FiltroSeguimiento = [];
    switch (numDia) {
      case 0:
        this.titulo = "Pasado";
        this.mostrar!=true? this.activeGraphicPasado():'';
       
        let fechaPasado: Date = new Date();
        this.fechaGeneral = new Date();
        this.fechaGeneral.setDate(fechaPasado.getDate() - 5);
        break;
      case 1:
        this.titulo = "Ante Antier"
        this.mostrar!=true? this.activeGraphicAnte():'';
        let fechaAnte: Date = new Date();
        this.fechaGeneral = new Date()
        this.fechaGeneral.setDate(fechaAnte.getDate() - 4);
        break;
      case 2:
        this.titulo = "Antier";
        this.mostrar!=true? this.activeGraphicAntier():'';
        let fechaAntier: Date = new Date();
        this.fechaGeneral = new Date();
        this.fechaGeneral.setDate(fechaAntier.getDate() - 3);
        break;
      case 3:
        this.titulo = "Ayer";
        this.mostrar!=true?this.activeGraphicAyer():'';
        
        let fechaAyer: Date = new Date();
        this.fechaGeneral = new Date();
        this.fechaGeneral.setDate(fechaAyer.getDate() - 2);
        break;
      case 4:
        this.titulo = "Hoy";
        this.mostrar!=true?this.activeGraphicHoy():'';
        let fecha: Date = new Date();
        this.fechaGeneral = new Date()
        this.fechaGeneral.setDate(fecha.getDate() - 1);
        break;
      case 5:
      this.mostrar!=true?this.activeGraphicTodo():'';
        
        let fechaTodo: Date = new Date();
        this.fechaGeneral = "TODO"
        this.todos();
        break;
      case 6:
        this.titulo = "Mañana";
        this.mostrar!=true? this.activeGraphicManana():'';
       
        let fechaMa: Date = new Date();
        this.fechaGeneral = new Date()
        this.fechaGeneral.setDate(fechaMa.getDate());
        break;
      case 7:
        this.titulo = "Pasado Mañana";
        this.mostrar!=true?this.activeGraphicPasadoMa():'';
        let fechaPasadoMa: Date = new Date();
        this.fechaGeneral = new Date()
        this.fechaGeneral.setDate(fechaPasadoMa.getDate() + 1);
        break;
      case 8:
        this.titulo = "Pospasado";
        this.mostrar!=true?this.activeGraphicPosPasado():'';
        
        let fechaPos: Date = new Date();
        this.fechaGeneral = new Date();
        this.fechaGeneral.setDate(fechaPos.getDate() + 2);
        break;
      case 9:
        this.titulo = "Futuro";
        this.mostrar!=true? this.activeGraphicFuturo():'';
        this.activeGraphicFuturo();
        let fechaFuturo: Date = new Date();
        this.fechaGeneral = new Date();
        this.fechaGeneral.setDate(fechaFuturo.getDate() + 3);
        break;
      default:
        break;
    }
    this.mostrar=false;
    if (this.fechaGeneral != "TODO") {
      this.lstCotizaciones.forEach(element => {
        let fechaCompara = new Date(element.fechaSiguienteContacto);
        if (element.tipoSeguimiento === "Cancelable") {
          if ((this.fechaGeneral.getDate()) === fechaCompara.getDate() && this.fechaGeneral.getMonth() === fechaCompara.getMonth() && this.fechaGeneral.getFullYear() === fechaCompara.getFullYear() && element.partidas != 0 || element.fechaSiguienteContacto === null) {
            this.FiltroCancelable.push(element);
          }
        } else if (element.tipoSeguimiento === "Seguimiento") {

          if ((this.fechaGeneral.getDate()) === fechaCompara.getDate() && this.fechaGeneral.getMonth() === fechaCompara.getMonth() && this.fechaGeneral.getFullYear() === fechaCompara.getFullYear() && element.partidas != 0) {
            this.FiltroSeguimiento.push(element);
          }
        } else if (element.tipoSeguimiento === "Confirmación") {
          //(this.fechaGeneral.getDate()) === fechaCompara.getDate() && this.fechaGeneral.getMonth() === fechaCompara.getMonth() && this.fechaGeneral.getFullYear() === fechaCompara.getFullYear() && element.partidas != 0
          // if (element.enTiempo!=null ) {
          this.FiltroConfirmacion.push(element);
          // }
        }
      });
      console.log( this.FiltroSeguimiento);
      
      if (this.tipoCotizacion === 1) {
        this.obtenerSeguimiento();
      } else if (this.tipoCotizacion === 2) {
        this.obtenerConfirmacion();
      } else if (this.tipoCotizacion === 3) {
        this.obtenerCancelable();
      }
      let options = {
        weekday: 'long',
      };
      this.respaldo = this.lstAux1;
      let fechaAux;
      this.graficasCargadas = false;

      this.graficasValores = [
        this.nivelIngreso,
        this.GClientes,
        this.estadoSeguimiento,
        this.ejecutivoVentas,
        this.tipoProducto,
        this.marcas,
        this.estadoConfirmacion,
        this.ejecutivoServicio
      ];
      this.graficas = [];
      // Titulos de Gráficas
      this.graficas = [
        'Nivel de Ingreso Clientes',
        'Clientes',
        'Estado Seguimiento',
        'Ejecutivo de Ventas',
        'Tipo Producto',
        'Marcas',
        'Estado Confirmación',
        'Ejecutivo de servicios a Cliente'
        // "Categoría"
      ];
      //  this.refrescar = true;
      //  this.calcularDatosParaGraficas();
    }
  }
  //	PANEL 2
  filtrarClientePanelDos($cliente: String): void {
    this.nombreCliente = $cliente;
    this._cotizacionesPorCliente = new Array<any>();
    this._diaSeleccionado = null;
    this.tempCotizaciones = [] = [];
    this.filtradoCotizaciones = [];
    if (this.fechaGeneral != "TODO") {
      if (this.tipoCotizacion != 2 && this.avanzada) {
        this.lstCotizaciones.forEach(element => {
          let fecha = new Date(element.fechaSiguienteContacto);
          if (element.nombreCliente === $cliente && this.fechaGeneral.getDate() === fecha.getDate() && this.fechaGeneral.getMonth() === fecha.getMonth() && this.fechaGeneral.getFullYear() === fecha.getFullYear()) {
            this.tempCotizaciones.push(element);
          }
        });
      } else if (this.tipoCotizacion === 2 || !this.avanzada) {
        this.lstCotizaciones.forEach(element => {
          let fecha = new Date(element.fechaSiguienteContacto);
          if (element.nombreCliente === $cliente && element.enTiempo === null) {
            this.tempCotizaciones.push(element);
          }
        });
      } else if (this.tipoCotizacion != 2 && !this.avanzada) {
        this.lstCotizaciones.forEach(element => {
          let fecha = new Date(element.fechaSiguienteContacto);
          if (element.nombreCliente === $cliente && this.fechaGeneral.getDate() === fecha.getDate() && this.fechaGeneral.getMonth() === fecha.getMonth() && this.fechaGeneral.getFullYear() === fecha.getFullYear()) {
            this.tempCotizaciones.push(element);
          }
        });
      }

      this.objeto = {
        nombreCliente: "", monto: 0, folioCotizacion: "", folio: "", piezas: 0, diasAtraso: 0, enTiempo: "", estadoSeguimiento: ""
      }
      let nuevoAux = [];
      this.tempCotizaciones.forEach(element => {
        if (this.filtradoCotizaciones.lastIndexOf(element.folioCotizacion) === -1) {
          this.filtradoCotizaciones.push(element.folioCotizacion);
        }
      });
      this.filtradoCotizaciones.forEach(element => {
        this.tempCotizaciones.forEach(e => {

          if (element === e.folioCotizacion) {
            this.objeto.nombreCliente = e.nombreCliente
            this.objeto.monto = this.objeto.monto + e.montoCotizacion;
            this.objeto.folioCotizacion = e.folioCotizacion;
            this.objeto.folio = e.folio;
            this.objeto.diasAtraso = e.diasAtraso;
            this.objeto.enTiempo = e.enTiempo;
            this.objeto.piezas = this.objeto.piezas + e.piezas;
            this.objeto.estadoSeguimiento = e.estadoSeguimiento;
          }
        });
        nuevoAux.push(this.objeto);
        this.objeto = {
          nombreCliente: "", monto: 0, folioCotizacion: "", folio: "", piezas: 0, diasAtraso: 0, enTiempo: "", estadoSeguimiento: ""
        }
      });
      this.tempCotizaciones = [];
      this.tercerSuma = 0;
      this.tempCotizaciones = nuevoAux;
      this.tempCotizaciones.forEach(element => {
        this.tercerSuma += element.monto;
      });
      let options = {
        weekday: 'long',
      };
      this.fechaGeneral.setDate(this.fechaGeneral.getDate() + 1)
      this.today = this.fechaGeneral.toLocaleDateString('es-MX', options).charAt(0).toUpperCase() + this.fechaGeneral.toLocaleDateString('es-MX', options).slice(1);
      this.numeroDia = this.fechaGeneral.getDate()
      this.fechaGeneral.setDate(this.fechaGeneral.getDate() - 1)
      let indicesCotizacion: Array<any> = this._sql.getPunteros(["Seguimiento", $cliente, null, this._marca, this._control, this._tipo, null, this._diaSeleccionado, null, null, null, null, this._esacMaster]);
      let numFFila = 0;
      for (let f = 0; f < this.tempCotizaciones.length; f++) {
        let currentFila: SeguimientoCotizacion = this.tempCotizaciones[f] as SeguimientoCotizacion;
        let folioCot: String = this.tempCotizaciones[f].folioCotizacion;//currentFila._folioCotizacion;
        let indicesCurrent: Array<any> = this._sql.getPunteros([this._origen, $cliente, folioCot, this._marca, this._control, this._tipo, null, this._diaSeleccionado, null, null, null, null, this._esacMaster]); //_sql.getPunteros( [ null, null, folioCot ] );
        currentFila._montoCotizacion = 0;
        let montoSuma: Number = this._sql.getSumarCampo("montoCotizacion", indicesCurrent);
        currentFila._montoCotizacion = montoSuma > -1 ? montoSuma : -9999;
        currentFila._piezas = 0;
        let piezasSuma: Number = this._sql.getSumarCampo("piezas", indicesCurrent);
        currentFila._piezas = piezasSuma > -1 ? piezasSuma : -666;
        this._cotizacionesPorCliente.push(currentFila);
      }
      let lastItem: SeguimientoCotizacionAgrupada = new SeguimientoCotizacionAgrupada();
      lastItem.setUltimo(this.tempCotizaciones.length.toString());
      lastItem.setMonto(this._sql.getSumarCampo("montoCotizacion", indicesCotizacion)); //, "folioCotizacion" );
      lastItem.setPiezas(this._sql.getSumarCampo("piezas", indicesCotizacion)); //, "folioCotizacion" );
      this._cotizacionesPorCliente.push(lastItem);
      this.obtenerPartidasPorCotizacionEnSeguimiento(0);
      this.piezasSuma = 0;
      this.partidasSuma = 0;
      this.tempCotizaciones.forEach(element => {
        this.piezasSuma = this.piezasSuma + element._piezas;
      });
    } else {
      this.lstCotizaciones.forEach(element => {
        let fecha = new Date(element.fechaSiguienteContacto);
        if (element.nombreCliente === $cliente) {
          this.tempCotizaciones.push(element);
        }
      });
      this.objeto = {
        nombreCliente: "", monto: 0, folioCotizacion: "", folio: "", piezas: 0, diasAtraso: 0, enTiempo: "", estadoSeguimiento: ""
      }
      let nuevoAux = [];
      this.tempCotizaciones.forEach(element => {
        if (this.filtradoCotizaciones.lastIndexOf(element.folioCotizacion) === -1) {
          this.filtradoCotizaciones.push(element.folioCotizacion);
        }
      });
      this.filtradoCotizaciones.forEach(element => {
        this.tempCotizaciones.forEach(e => {

          if (element === e.folioCotizacion) {
            this.objeto.nombreCliente = e.nombreCliente
            this.objeto.monto = this.objeto.monto + e.montoCotizacion;
            this.objeto.folioCotizacion = e.folioCotizacion;
            this.objeto.folio = e.folio;
            this.objeto.diasAtraso = e.diasAtraso;
            this.objeto.enTiempo = e.enTiempo;
            this.objeto.piezas = this.objeto.piezas + e.piezas;
            this.objeto.estadoSeguimiento = e.estadoSeguimiento;
          }
        });
        nuevoAux.push(this.objeto);
        this.objeto = {
          nombreCliente: "", monto: 0, folioCotizacion: "", folio: "", piezas: 0, diasAtraso: 0, enTiempo: "", estadoSeguimiento: ""
        }
      });
      this.tempCotizaciones = [];
      this.tercerSuma = 0;
      this.tempCotizaciones = nuevoAux;
      this.tempCotizaciones.forEach(element => {
        this.tercerSuma += element.monto;
      });
    }
  }
  obtenerPartidasPorCotizacionEnSeguimiento(i: any) {
    this.sumaPartidas = 0;
    this.sumaPiezas = 0;
    this.suma = 0;
    this.lstInfo = [];
    if (this.tempCotizaciones[i] != undefined) {
      this.folio = this.tempCotizaciones[i].folioCotizacion;
      let parametros = {
        folio: this.tempCotizaciones[i].folioCotizacion
      }
      this._seguimientoService.obtenerPartidasPorCotizacionEnSeguimiento(parametros).subscribe(
        data => {
          this.lstInfo = data.current;
          this.lstInfo.forEach(element => {
            this.suma = this.suma + element.monto
            this.sumaPiezas = this.sumaPiezas + element.cantidad;

          });
          this.cuartoSegmento(0);
          this.partidas(0);
          this.resultObtenerPartidasSeguimiento(this.lstInfo);
          this.sumaPartidas = this.lstInfo.length;
        },
        error => {
          this.coreComponent.closeModal(0);
        }
      );
    }

  }
  resultObtenerPartidasSeguimiento($partidas: Array<any>): void {
    this._partidasSeguimiento = new Array<any>();
    if ($partidas != null && $partidas.length > 0) {
      this._partidasSeguimiento = $partidas;
      let folioPartida: String = (this._partidasSeguimiento[0] as PartidaCotizacionEnSeguimiento)._folioCotizacion;
      let primerCotizacion: SeguimientoCotizacion = this._sql.ensamblarLista([null, null, folioPartida]).length > 0 ? this._sql.ensamblarLista([null, null, folioPartida]).getItemAt(0) as SeguimientoCotizacion : null;

      if (primerCotizacion == null) return;
      let fechaCotizacion: Date = primerCotizacion.getFechaSiguienteContacto();
      for (let m: number = 0; m < this._partidasSeguimiento.length; m++) {
        this._partidasSeguimiento[m].numFila = m + 1;
        let necesariosEnfoque: number = 1;
        let cuentaEnfoque: number = 0;
        if (this._tipo != null && this._tipo.length > 0)
          necesariosEnfoque++;
        if (this._control != null && this._control.length > 0)
          necesariosEnfoque++;
        if (this._marca != null && this._marca.length > 0)
          necesariosEnfoque++;
        let currentFila: PartidaCotizacionEnSeguimiento = this._partidasSeguimiento[m] as PartidaCotizacionEnSeguimiento;
        if (currentFila.getFechaSiguiente != null && fechaCotizacion != null) {
          if (currentFila.getFechaSiguiente().getDate() == fechaCotizacion.getDate()
            && currentFila.getFechaSiguiente().getMonth() == fechaCotizacion.getMonth()
            && currentFila.getFechaSiguiente().getFullYear() == fechaCotizacion.getFullYear())
            cuentaEnfoque++;
        }
        if (currentFila.getTipo() == this._tipo)
          cuentaEnfoque++;
        if (currentFila.getControl() == this._control)
          cuentaEnfoque++;
        if (currentFila.getMarca() == this._marca)
          cuentaEnfoque++;
        if (cuentaEnfoque == necesariosEnfoque
          && currentFila.getEstado() != "Recotizada"
          && currentFila.getEstado() != "Pedido"
          && currentFila.getEstado() != "Cancelada")
          currentFila.setEnfocado(true);
      }
    }
    let numericDataSort
    //numericDataSort.fields = [new SortField("ultimo"), new SortField("enfocado", true)];
    $partidas.sort = numericDataSort;
    //  $partidas.refresh();
    this._partidasSeguimiento = $partidas;
    //  this.actualizaUltimo(this._partidasSeguimiento);
  }
  tercerSegmento(i: number) {
    // this.folio = this.lstFolios[i].folioCotizacion;
    let cuerpo = {
      // folio: this.lstFolios[i].folioCotizacion,
    }
    this.obtenerPartidasPorCotizacionEnSeguimiento(cuerpo);
  }
  cuartoSegmento(i: number) {
    this.cuartoSelect = i;
    this.lstInfoCuarto = [] = []
    this.lstElementos = [] = [];
    this.situacion = [] = [];
    this.lstInfo.forEach((h, index) => {
      this.lstInfoCuarto.push(h.historial);
      this.situacion.push(h.situacion);
    });
    this.lstInfoCuarto[i].forEach((element, index) => {
      this.lstElementos.push(element);
    });

  }
  activeGraphicHoy() {
    this.activaGraficaAyer = 0; this.activaGraficaAnteAntier = 0; this.activaGraficaAntier = 0; this.activaGraficaFuturo = 0; this.activaGraficaTodo = 0;
    this.activaGraficaManana = 0; this.activaGraficaPasadoMa = 0; this.activaGraficaPosPasado = 0; this.activaPasado = 0;
    this.activaGraficaHoy++
    this.activaGraficaHoy === 1 ? this.showTablePanel() : this.activaGraficaHoy === 2 ? this.showGraphicPanel() : this.activaGraficaHoy == 3 ? this.showTablePanel() : '';
    this.activaGraficaHoy == 3 ? this.activaGraficaHoy = 0 : ''
  }
  activeGraphicManana() {
    this.activaGraficaAyer = 0; this.activaGraficaAnteAntier = 0; this.activaGraficaAntier = 0; this.activaGraficaFuturo = 0; this.activaGraficaTodo = 0;
    this.activaGraficaHoy = 0; this.activaGraficaPasadoMa = 0; this.activaGraficaPosPasado = 0; this.activaPasado = 0; this.activaGraficaManana++
    this.activaGraficaManana === 1 ? this.showTablePanel() : this.activaGraficaManana === 2 ? this.showGraphicPanel() : this.activaGraficaManana == 3 ? this.showTablePanel() : '';
    this.activaGraficaManana == 3 ? this.activaGraficaManana = 0 : ''
  }
  activeGraphicPasadoMa() {
    this.activaGraficaAyer = 0; this.activaGraficaAnteAntier = 0; this.activaGraficaAntier = 0; this.activaGraficaFuturo = 0; this.activaGraficaTodo = 0;
    this.activaGraficaHoy = 0; this.activaGraficaManana = 0; this.activaGraficaPosPasado = 0; this.activaPasado = 0; this.activaGraficaPasadoMa++
    this.activaGraficaPasadoMa === 1 ? this.showTablePanel() : this.activaGraficaPasadoMa === 2 ? this.showGraphicPanel() : this.activaGraficaPasadoMa == 3 ? this.showTablePanel() : '';
    this.activaGraficaPasadoMa == 3 ? this.activaGraficaPasadoMa = 0 : ''
  }
  activeGraphicPosPasado() {
    this.activaGraficaAyer = 0; this.activaGraficaAnteAntier = 0; this.activaGraficaAntier = 0; this.activaGraficaFuturo = 0; this.activaGraficaTodo = 0;
    this.activaGraficaHoy = 0; this.activaGraficaManana = 0; this.activaGraficaPasadoMa = 0; this.activaPasado = 0; this.activaGraficaPosPasado++
    this.activaGraficaPosPasado === 1 ? this.showTablePanel() : this.activaGraficaPosPasado === 2 ? this.showGraphicPanel() : this.activaGraficaPosPasado == 3 ? this.showTablePanel() : '';
    this.activaGraficaPosPasado == 3 ? this.activaGraficaPosPasado = 0 : '';
  }
  activeGraphicFuturo() {
    this.activaGraficaAyer = 0; this.activaGraficaAnteAntier = 0; this.activaGraficaAntier = 0; this.activaGraficaPosPasado = 0; this.activaGraficaTodo = 0;
    this.activaGraficaHoy = 0; this.activaGraficaManana = 0; this.activaGraficaPasadoMa = 0; this.activaPasado = 0; this.activaGraficaFuturo++
    this.activaGraficaFuturo === 1 ? this.showTablePanel() : this.activaGraficaFuturo === 2 ? this.showGraphicPanel() : this.activaGraficaFuturo == 3 ? this.showTablePanel() : '';
    this.activaGraficaFuturo == 3 ? this.activaGraficaFuturo = 0 : '';
  }
  activeGraphicAyer() {
    this.activaGraficaFuturo = 0; this.activaGraficaAnteAntier = 0; this.activaGraficaAntier = 0; this.activaGraficaPosPasado = 0; this.activaGraficaTodo = 0;
    this.activaGraficaHoy = 0; this.activaGraficaManana = 0; this.activaGraficaPasadoMa = 0; this.activaPasado = 0; this.activaGraficaAyer++
    this.activaGraficaAyer === 1 ? this.showTablePanel() : this.activaGraficaAyer === 2 ? this.showGraphicPanel() : this.activaGraficaAyer == 3 ? this.showTablePanel() : '';
    this.activaGraficaAyer == 3 ? this.activaGraficaAyer = 0 : ''
  }
  activeGraphicAntier() {
    this.activaGraficaFuturo = 0; this.activaGraficaAnteAntier = 0; this.activaGraficaAyer = 0; this.activaGraficaPosPasado = 0; this.activaGraficaTodo = 0;
    this.activaGraficaHoy = 0; this.activaGraficaManana = 0; this.activaGraficaPasadoMa = 0; this.activaPasado = 0; this.activaGraficaAntier++
    this.activaGraficaAntier === 1 ? this.showTablePanel() : this.activaGraficaAntier === 2 ? this.showGraphicPanel() : this.activaGraficaAntier == 3 ? this.showTablePanel() : '';
    this.activaGraficaAntier == 3 ? this.activaGraficaAntier = 0 : '';
  }
  activeGraphicAnte() {
    this.activaGraficaFuturo = 0; this.activaGraficaAntier = 0; this.activaGraficaAyer = 0; this.activaGraficaPosPasado = 0; this.activaGraficaTodo = 0;
    this.activaGraficaHoy = 0; this.activaGraficaManana = 0; this.activaGraficaPasadoMa = 0; this.activaPasado = 0; this.activaGraficaAnteAntier++
    this.activaGraficaAnteAntier === 1 ? this.showTablePanel() : this.activaGraficaAnteAntier === 2 ? this.showGraphicPanel() : this.activaGraficaAnteAntier == 3 ? this.showTablePanel() : '';
    this.activaGraficaAnteAntier == 3 ? this.activaGraficaAnteAntier = 0 : '';
  }
  activeGraphicPasado() {
    this.activaGraficaFuturo = 0; this.activaGraficaAntier = 0; this.activaGraficaAyer = 0; this.activaGraficaPosPasado = 0; this.activaGraficaTodo = 0;
    this.activaGraficaHoy = 0; this.activaGraficaManana = 0; this.activaGraficaPasadoMa = 0; this.activaGraficaAnteAntier = 0; this.activaPasado++
    this.activaPasado === 1 ? this.showTablePanel() : this.activaPasado === 2 ? this.showGraphicPanel() : this.activaPasado == 3 ? this.activaPasado = 0 : '';
  }
  activeGraphicTodo() {
    this.activaGraficaFuturo = 0; this.activaGraficaAntier = 0; this.activaGraficaAyer = 0; this.activaGraficaPosPasado = 0; this.activaPasado = 0;
    this.activaGraficaHoy = 0; this.activaGraficaManana = 0; this.activaGraficaPasadoMa = 0; this.activaGraficaAnteAntier = 0; this.activaGraficaTodo++
    this.activaGraficaTodo === 1 ? this.showTablePanel() : this.activaGraficaTodo === 2 ? this.showGraphicPanel() : this.activaGraficaTodo == 3 ? this.showTablePanel() : '';
    this.activaGraficaTodo == 3 ? this.activaGraficaTodo = 0 : '';
  }
  backMenu() {
    this.router.navigate(["protected/gestion/"]);
  }
  closePanel() {
    this.classPanel = "panelOcultar";
    this.hiddenClose = false;
  }
  openPanel() {
    if (!this.hiddenClose) {
      this.classPanel = "panelMostrar";
      this.hiddenClose = true;
    }
  }
  filtroRapido() {
  }
  filtroRapida() {
    this.lstMarcas = [] = [];
    this.avanzada = false;
    this.Elements = [];
    this.Elements = [new ElementFilter("string", "Clientes", this.dropClientes, true)];
    this.isSeguimiento = false;
    this.lstAux1 = [];
    this.lstAux1 = this.lstAux;
    this.lstMarcas = [] = [];
    this.todos();

    this.showGraphic = false;
  }
  filtroAvanzada() {
    this.avanzada = true;
    this.isSeguimiento = true;
    this.Llenar();
    this.filtroCuadros(4, 1);
    // this.seguimiento();
    this.showGraphic = false;
  }
  seguimiento() {
    this.tipoCotizacion = 1;
    this.avanzada = true;
    let cuerpo = {
      confirmacion: 2,
      cliente: "",
      empleadoString: "",
      tipo: "",
      marca: "",
      control: "",
      master: 0
    }
    let tipo = "Seguimiento";
    this.obtenerCotizacionesEnSeguimientoEnPartidas(cuerpo, tipo);
  }
  obtenerSeguimiento() {
    this.tipoCotizacion = 1;
    this.limpiarVariablesGrafica();
    this.calcularDatosParaGraficas();
    this.refrescar = false;
    setTimeout(() => {
      this.refrescar = true;
    }, 10);
    this.respaldoDatos = [];
    this.auxiliar = []; this.montoTotal = 0;
    this.rango = 1;
    this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", nombreEVT: "", numCotizaciones: 0, numPartidas: 0, numPiezas: 0, tipoSeguimiento: "", folioCotizacion: [] };
    this.informacion = [];

    this.lstAux1 = [];
    this.nombres = [];
    this.nuevaLista = [];
    if (this.fechaGeneral != "TODO") {
      this.lstCotizaciones.forEach(element => {
        let fechaNueva = new Date(element.fechaSiguienteContacto);
        if (element.tipoSeguimiento === "Seguimiento" && (this.fechaGeneral.getDate() === fechaNueva.getDate() && this.fechaGeneral.getMonth() === fechaNueva.getMonth() && this.fechaGeneral.getFullYear() === fechaNueva.getFullYear())) {
          this.lstAux1.push(element);
        }
      });
      this.lstAux1.forEach(element => {
        if (this.nombres.lastIndexOf(element.nombreCliente) === -1) {
          this.nombres.push(element.nombreCliente);
        }
      });
      this.nombres.forEach(element => {
        this.lstAux1.forEach(e => {
          if (element === e.nombreCliente) {
            this.objetoInfo.nombreCliente = e.nombreCliente
            this.objetoInfo.monto = this.objetoInfo.monto + e.montoCotizacion;
            this.objetoInfo.nombreEV = e.nombreEV;
            this.objetoInfo.nombreEsac = e.nombreVendedor;
            this.objetoInfo.numCotizaciones = this.objetoInfo.numCotizaciones + 1;
            this.objetoInfo.numPartidas = this.objetoInfo.numPartidas + e.partidas;
            this.objetoInfo.numPiezas = this.objetoInfo.numPiezas + e.piezas;
            this.objetoInfo.tipoSeguimiento = e.tipoSeguimiento;
            this.objetoInfo.nombreEVT = e.nombreEVT;
            if (this.objetoInfo.folioCotizacion.indexOf(e.folioCotizacion) === -1) {
              this.objetoInfo.folioCotizacion.push(e.folioCotizacion);
            }

          }
        });
        this.informacion.push(this.objetoInfo);
        this.respaldoDatos.push(this.objetoInfo);
        this.objetoInfo = {
          nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", nombreEVT: "", numCotizaciones: 0, numPartidas: 0, numPiezas: 0, tipoSeguimiento: "", folioCotizacion: []
        }
      });
      if (this.informacion.length === 0) {
        this.tempCotizaciones = [];
        this.lstInfo = [];
        this.lstElementos = [];
        this.nombreCliente = "";
        this.folio = "";
      } else {
        let nombre = this.informacion[0].nombreCliente;
        this.filtrarClientePanelDos(nombre);
        this.auxiliar = this.informacion;
        this.informacion.forEach(element => {
          this.montoTotal += element.monto;
        });

      }

    }
  }
  obtenerConfirmacion() {
    this.tipoCotizacion = 2;
    this.limpiarVariablesGrafica();
    this.calcularDatosParaGraficas();
    this.refrescar = false;
    setTimeout(() => {
      this.refrescar = true;
    }, 10);
    this.respaldoDatos = [];
    this.auxiliar = []; this.montoTotal = 0;
    this.rango = 1;
    this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", nombreEVT: "", numCotizaciones: 0, numPartidas: 0, numPiezas: 0, tipoSeguimiento: "", folioCotizacion: [] }

    this.lstAux1 = [];
    this.nombres = [];
    this.informacion = [];
    this.nuevaLista = [];
    this.lstCotizaciones.forEach(element => {
      let Nueva = new Date(element.fechaSiguienteContacto);
      if (element.tipoSeguimiento === "Confirmación") {
        this.lstAux1.push(element);
      }
    });
    this.lstAux1.forEach(element => {
      if (this.nombres.lastIndexOf(element.nombreCliente) === -1) {
        this.nombres.push(element.nombreCliente);
      }
    });
    this.nombres.forEach(element => {
      this.lstAux1.forEach(e => {
        if (element === e.nombreCliente) {
          this.objetoInfo.nombreCliente = e.nombreCliente
          this.objetoInfo.monto = this.objetoInfo.monto + e.montoCotizacion;
          this.objetoInfo.nombreEV = e.nombreEV;
          this.objetoInfo.nombreEsac = e.nombreVendedor;
          this.objetoInfo.numCotizaciones = this.objetoInfo.numCotizaciones + 1;
          this.objetoInfo.numPartidas = this.objetoInfo.numPartidas + e.partidas;
          this.objetoInfo.numPiezas = this.objetoInfo.numPiezas + e.piezas;
          this.objetoInfo.tipoSeguimiento = e.tipoSeguimiento;
          this.objetoInfo.nombreEVT = e.nombreEVT;
          if (this.objetoInfo.folioCotizacion.indexOf(e.folioCotizacion) === -1) {
            this.objetoInfo.folioCotizacion.push(e.folioCotizacion);
          }
        }
      });
      this.informacion.push(this.objetoInfo);
      this.respaldoDatos.push(this.objetoInfo);
      this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", nombreEVT: "", numCotizaciones: 0, numPartidas: 0, numPiezas: 0, tipoSeguimiento: "", folioCotizacion: [] }
    });

    if (this.informacion.length === 0) {
      this.tempCotizaciones = [];
      this.lstInfo = [];
      this.lstElementos = [];
      this.nombreCliente = "";
      this.folio = "";
    } else {
      let nombre = this.informacion[0].nombreCliente;

      this.filtrarClientePanelDos(nombre);
      this.auxiliar = this.informacion;
      this.informacion.forEach(element => {
        this.montoTotal += element.monto;
      });

    }
  }
  obtenerCancelable() {
    this.tipoCotizacion = 3;
    this.limpiarVariablesGrafica();
    this.calcularDatosParaGraficas();
    this.refrescar = false;
    this.respaldoDatos = [];
    this.auxiliar = []; this.montoTotal = 0;
    this.rango = 1;
    this.lstAux1 = []; this.tipoCotizacion = 3; this.nuevaLista = []; this.nombres = []; this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", nombreEVT: "", numCotizaciones: 0, numPartidas: 0, numPiezas: 0, tipoSeguimiento: "", folioCotizacion: [] }; this.informacion = [];
    this.lstCotizaciones.forEach(element => {
      let fechaNueva = new Date(element.fechaSiguienteContacto);
      if (element.tipoSeguimiento === "Cancelable" && (this.fechaGeneral.getDate() === fechaNueva.getDate() && this.fechaGeneral.getMonth() === fechaNueva.getMonth() && this.fechaGeneral.getFullYear() === fechaNueva.getFullYear())) {
        this.lstAux1.push(element);
      }
    });
    this.lstAux1.forEach(element => {
      if (this.nombres.lastIndexOf(element.nombreCliente) === -1) {
        this.nombres.push(element.nombreCliente);
      }
    });
    this.nombres.forEach(element => {
      this.lstAux1.forEach(e => {
        if (element === e.nombreCliente) {
          this.objetoInfo.nombreCliente = e.nombreCliente;
          this.objetoInfo.monto = this.objetoInfo.monto + e.montoCotizacion;
          this.objetoInfo.nombreEV = e.nombreEV;
          this.objetoInfo.nombreEsac = e.nombreVendedor;
          this.objetoInfo.numCotizaciones = this.objetoInfo.numCotizaciones + 1;
          this.objetoInfo.numPartidas = this.objetoInfo.numPartidas + e.partidas;
          this.objetoInfo.numPiezas = this.objetoInfo.numPiezas + e.piezas;
          this.objetoInfo.tipoSeguimiento = e.tipoSeguimiento;
          this.objetoInfo.nombreEVT = e.nombreEVT;
          if (this.objetoInfo.folioCotizacion.indexOf(e.folioCotizacion) === -1) {
            this.objetoInfo.folioCotizacion.push(e.folioCotizacion);
          }
        }
      });
      this.informacion.push(this.objetoInfo);
      this.respaldoDatos.push(this.objetoInfo);
      this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", nombreEVT: "", numCotizaciones: 0, numPartidas: 0, numPiezas: 0, tipoSeguimiento: "", folioCotizacion: [] }
    });
    if (this.informacion.length === 0) {
      this.tempCotizaciones = [];
      this.lstInfo = [];
      this.lstElementos = [];
      this.nombreCliente = "";
      this.folio = "";
    } else {
      let nombre = this.informacion[0].nombreCliente;
      this.filtrarClientePanelDos(nombre);
      this.auxiliar = this.informacion;
      this.informacion.forEach(element => {
        this.montoTotal += element.monto;
      });

    }

    setTimeout(() => {

      this.refrescar = true;
    }, 10);

  }
  todos() {
    this.informacion = [];
    this.respaldoDatos = [];
    let temporal = [];
    let fechaC = new Date();
    let nuevaFecha = new Date();
    if (this.tipoCotizacion === 1) {
      this.tipo = "Seguimiento";
    } else if (this.tipoCotizacion === 2) {
      this.tipo = "Confirmación";
    } else if (this.tipoCotizacion === 3) {
      this.tipo = "Cancelable";
    }


    let fechaHoy = new Date();
    let fechaManana = new Date();
    fechaManana.setDate(fechaManana.getDate() + 1);
    let fechaPasadoMa = new Date();
    fechaPasadoMa.setDate(fechaPasadoMa.getDate() + 2);
    let fechaPosPasado = new Date();
    fechaPosPasado.setDate(fechaPosPasado.getDate() + 3);
    let fechaFuturo = new Date();
    fechaFuturo.setDate(fechaFuturo.getDate() + 4);
    let fechaAyer = new Date();
    fechaAyer.setDate(fechaAyer.getDate() - 1);
    let fechaAntier = new Date();
    fechaAntier.setDate(fechaAntier.getDate() - 2);
    let fechaAnteAtier = new Date();
    fechaAnteAtier.setDate(fechaAnteAtier.getDate() - 3);
    let fechaPasado = new Date();
    fechaPasado.setDate(fechaPasado.getDate() - 4);
    this.lstAux1 = []; this.nuevaLista = []; this.nombres = []; this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", nombreEVT: "", numCotizaciones: 0, numPartidas: 0, numPiezas: 0, tipoSeguimiento: "", folioCotizacion: [] }; this.informacion = [];
    this.lstCotizaciones.forEach(element => {
      let fechaI = new Date(element.fechaSiguienteContacto);
      if ((element.tipoSeguimiento === this.tipo) && ((fechaI.getDate() === fechaHoy.getDate() && fechaI.getMonth() === fechaHoy.getMonth() && fechaI.getFullYear() === fechaHoy.getFullYear())
        || (fechaI.getDate() === fechaManana.getDate() && fechaI.getMonth() === fechaManana.getMonth() && fechaI.getFullYear() === fechaManana.getFullYear()) || (fechaI.getDate() === fechaPasadoMa.getDate() && fechaI.getMonth() === fechaPasadoMa.getMonth() && fechaI.getFullYear() === fechaPasadoMa.getFullYear()) || (fechaI.getDate() === fechaPosPasado.getDate() && fechaI.getMonth() === fechaPosPasado.getMonth() && fechaI.getFullYear() === fechaPosPasado.getFullYear())
        || (fechaI.getDate() === fechaFuturo.getDate() && fechaI.getMonth() === fechaFuturo.getMonth() && fechaI.getFullYear() === fechaFuturo.getFullYear()) || (fechaI.getDate() === fechaAyer.getDate() && fechaI.getMonth() === fechaAyer.getMonth() && fechaI.getFullYear() === fechaAyer.getFullYear())
        || (fechaI.getDate() === fechaAntier.getDate() && fechaI.getMonth() === fechaAntier.getMonth() && fechaI.getFullYear() === fechaAntier.getFullYear()) || (fechaI.getDate() === fechaAnteAtier.getDate() && fechaI.getMonth() === fechaAnteAtier.getMonth() && fechaI.getFullYear() === fechaAnteAtier.getFullYear()) || (fechaI.getDate() === fechaPasado.getDate() && fechaI.getMonth() === fechaPasado.getMonth() && fechaI.getFullYear() === fechaPasado.getFullYear()))) {
        this.lstAux1.push(element);
      }

    });
    this.lstAux1.forEach(element => {
      if (this.nombres.lastIndexOf(element.nombreCliente) === -1) {
        this.nombres.push(element.nombreCliente);
      }
    });
    this.nombres.forEach(element => {
      this.lstAux1.forEach(e => {
        if (element === e.nombreCliente) {
          this.objetoInfo.nombreCliente = e.nombreCliente;
          this.objetoInfo.monto = this.objetoInfo.monto + e.montoCotizacion;
          this.objetoInfo.nombreEV = e.nombreEV;
          this.objetoInfo.nombreEsac = e.nombreVendedor;
          this.objetoInfo.numCotizaciones = this.objetoInfo.numCotizaciones + 1;
          this.objetoInfo.numPartidas = this.objetoInfo.numPartidas + e.partidas;
          this.objetoInfo.numPiezas = this.objetoInfo.numPiezas + e.piezas;
          this.objetoInfo.nombreEVT = e.nombreEVT;
          if (this.objetoInfo.folioCotizacion.indexOf(e.folioCotizacion) === -1) {
            this.objetoInfo.folioCotizacion.push(e.folioCotizacion);
          }
        }
      });
      this.informacion.push(this.objetoInfo);
      this.respaldoDatos.push(this.objetoInfo);
      this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", nombreEVT: "", numCotizaciones: 0, numPartidas: 0, numPiezas: 0, tipoSeguimiento: "", folioCotizacion: [] }
    });
    let nombre = this.informacion[0].nombreCliente;
    this.filtrarClientePanelDos(nombre);
    this.auxiliar = this.informacion;
    this.informacion.forEach(element => {
      this.montoTotal += element.monto;
    });
    this.limpiarVariablesGrafica();
    this.calcularDatosParaGraficas();
  }
  mostrarDatos($event) {
    this.mostrar = true;
    if (!this.avanzada) {
      this.mostrarDatosRapida($event);
    } else {
      if ($event.Datos[0].nombre === "--TODOS--") {
        $event.Datos[0].nombre = "";
      }
      if ($event.Datos[1].nombre === "--TODOS--") {
        $event.Datos[1].nombre = "";
      }
      if ($event.Datos[2].nombre === "--TODOS--") {
        $event.Datos[2].nombre = "";
      }
      if ($event.Datos[3].nombre === "--TODOS--") {
        $event.Datos[3].nombre = "";
      }
      if ($event.Datos[4].nombre === "--TODOS--") {
        $event.Datos[4].nombre = "";
      }
     
      let cuerpo = {
        confirmacion: 2,
        cliente: $event.Datos[0].nombre,
        empleadoString: $event.Datos[1].nombre,
        tipo: $event.Datos[2].nombre,
        marca: $event.Datos[3].nombre,
        control: $event.Datos[4].nombre,
        master: 0
      }
      let tipo;
      this.tipoCotizacion === 1 ? tipo = "Seguimiento" : this.tipoCotizacion === 2 ? tipo = "Confirmacion" : this.tipoCotizacion === 3 ? tipo = "Cancelable" : '';
      this.obtenerCotizacionesEnSeguimientoEnPartidas(cuerpo, tipo, null);
      if ($event.Datos[0].nombre === "") {
        $event.Datos[0].nombre = "--TODOS--";
      }
      if ($event.Datos[1].nombre === "") {
        $event.Datos[1].nombre = "--TODOS--";
      }
      if ($event.Datos[2].nombre === "") {
        $event.Datos[2].nombre = "--TODOS--";
      }
      if ($event.Datos[3].nombre === "") {
        $event.Datos[3].nombre = "--TODOS--";
      }
      if ($event.Datos[4].nombre === "") {
        $event.Datos[4].nombre = "--TODOS--";
      }
    }
  }
  mostrarDatosRapida($event) {
    this.informacion = [];
    this.filtroNombre = [];
    this.avanzada = false;
    this.lstCotizaciones = [];
    if ($event.Datos[0].nombre === "--TODOS--" && $event.textbox === "") {
      let parametros = {
        confirmacion: 2,
        cliente: "",
        empleadoString: "",
        tipo: "",
        marca: "",
        control: "",
        master: 0
      }
      this.coreComponent.openModal(0);
      this._seguimientoService.obtenerCotizacionesEnSeguimientoEnPartidas(parametros).subscribe(
        data => {
          this.lstCotizaciones = data.current;

          this.coreComponent.closeModal(0);
          this.todos();
        },
        error => {
        }
      );

    } else {
      if ($event.Datos[0].nombre === "--TODOS--" && $event.textbox != "") {
        this.respaldoDatos.forEach((cotizacion, index) => {
          cotizacion.folioCotizacion.forEach(folio => {
            if (folio === $event.textbox) {
              this.informacion.push(cotizacion);
            }
          });
        });
        let nombre = this.informacion[0].nombreCliente;
        this.filtrarClientePanelDos(nombre);
      } else if ($event.Datos[0].nombre != "--TODOS--" && $event.textbox === "") {
        this.respaldoDatos.forEach((cotizacion, index) => {

          if ($event.Datos[0].nombre === cotizacion.nombreCliente) {
            this.informacion.push(cotizacion);
          }

        });
        let nombre = this.informacion[0].nombreCliente;
        this.filtrarClientePanelDos(nombre);
      } else if ($event.Datos[0].nombre != "--TODOS--" && $event.textbox != "") {
        this.respaldoDatos.forEach((cotizacion, index) => {
          cotizacion.folioCotizacion.forEach(folio => {
            if (folio === $event.textbox) {
              this.informacion.push(cotizacion);
            }
          });
        });
        let nombre = this.informacion[0].nombreCliente;
        this.filtrarClientePanelDos(nombre);
      }
    }
  }
  todo() {
    this.montoTotal = 0;
    this.informacion = [];
    this.informacion = this.auxiliar;
    this.rango = 1;
    this.informacion.forEach(element => {
      this.montoTotal += element.monto;
    });
    let nombre = this.informacion[0].nombreCliente;
    this.filtrarClientePanelDos(nombre);
  }
  diezmil() {

    this.rango = 2;
    let nueva = [];
    this.auxiliar.forEach(element => {
      if (element.monto > 10000) {
        nueva.push(element);
        this.montoTotal += element.monto;
      }
    });
    this.informacion = [];
    this.informacion = nueva;
    let nombre = this.informacion[0].nombreCliente;
    this.filtrarClientePanelDos(nombre);
  }
  dosmil() {
    this.rango = 3;
    let nueva = [];
    this.auxiliar.forEach(element => {
      if (element.monto > 2000 && element.monto <= 10000) {
        nueva.push(element);
        this.montoTotal += element.monto;
      }
    });
    this.informacion = [];
    this.informacion = nueva;
    let nombre = this.informacion[0].nombreCliente;
    this.filtrarClientePanelDos(nombre);
  }
  cero() {
    this.montoTotal = 0;
    this.rango = 4;
    let nueva = [];
    this.auxiliar.forEach(element => {
      if (element.monto <= 2000 && element.monto >= 0) {
        nueva.push(element);
        this.montoTotal += element.monto;
      }
    });
    this.informacion = [];
    this.informacion = nueva;
    let nombre = this.informacion[0].nombreCliente;
    this.filtrarClientePanelDos(nombre);
  }
  /**************GRAFICAS****************/
  limpiarVariablesGrafica() {
    this.nuevoConfirmacion = [];
    this.filtroEjecutivoVentas = [];
    this.filtroNombreClientes = [];
    this.filtroMarcas = [];
    this.filtroEjecutivoServicio = [];
    this.GClientes = [];
    this.ejecutivoServicio = [];
    this.ejecutivoVentas = [];
    this.nuevo = [];
    this.filtroNombreClientes1 = [];
    this.nuevoEServicio = [];
    this.nuevoMarcas = [];
    this.nuevoVendedor = [];
    this.nuevoClientes = [];
    this.filtroNuevo2 = [];
    this.nuevoFiltroMarcas = [];
    if (this.tipoCotizacion === 1) {
      for (let cotizacion of this.FiltroSeguimiento) {
        this.filtroNombreClientes.push(cotizacion.nombreCliente);
        if (this.filtroEjecutivoVentas.indexOf(cotizacion.nombreEV) === -1) {
          this.filtroEjecutivoVentas.push(cotizacion.nombreEV);
        }
        this.filtroMarcas.push(cotizacion.marca);
        if (cotizacion.nombreVendedor === null) {
          cotizacion.nombreVendedor = "LVera";
        }
        if (this.filtroEjecutivoServicio.indexOf(cotizacion.nombreVendedor) === -1) {
          this.filtroEjecutivoServicio.push(cotizacion.nombreVendedor);
        }
      }
    } else if (this.tipoCotizacion === 2) {
      for (let cotizacion of this.FiltroConfirmacion) {
        this.filtroNombreClientes.push(cotizacion.nombreCliente);
        if (this.filtroEjecutivoVentas.indexOf(cotizacion.nombreEV) === -1) {
          this.filtroEjecutivoVentas.push(cotizacion.nombreEV);
        }
        this.filtroMarcas.push(cotizacion.marca);
        if (cotizacion.nombreVendedor === null) {
          cotizacion.nombreVendedor = "LVera";
        }
        if (this.filtroEjecutivoServicio.indexOf(cotizacion.nombreVendedor) === -1) {
          this.filtroEjecutivoServicio.push(cotizacion.nombreVendedor);
        }
      }
    } else if (this.tipoCotizacion === 3) {
      for (let cotizacion of this.FiltroCancelable) {
        this.filtroNombreClientes.push(cotizacion.nombreCliente);
        if (this.filtroEjecutivoVentas.indexOf(cotizacion.nombreEV) === -1) {
          this.filtroEjecutivoVentas.push(cotizacion.nombreEV);
        }
        this.filtroMarcas.push(cotizacion.marca);
        if (cotizacion.nombreVendedor === null) {
          cotizacion.nombreVendedor = "LVera";
        }
        if (this.filtroEjecutivoServicio.indexOf(cotizacion.nombreVendedor) === -1) {
          this.filtroEjecutivoServicio.push(cotizacion.nombreVendedor);
        }
      }
    }
    let j; let i;
    let tam = this.filtroMarcas.length, objVentas = {};
    for (i = 0; i < tam; i++) {
      objVentas[this.filtroMarcas[i]] = 0;
    }
    for (j in objVentas) {
      this.filtroNuevo2.push(j);
    }
    this.lstGraficaClientes = [];
    this.nombreEmpresas = [];
    this.lstEstado = [];
    let valoresCliente = [];
    let valoresC = [];
    this.filtroNombreClientes.forEach(() => {
      valoresCliente.push([0, 0, 0, 0, 0]);
      valoresC.push(0);
    })
    let valoresMarca = [];
    let valoresM = [];
    this.filtroNuevo2.forEach(() => {
      valoresMarca.push([0, 0, 0, 0, 0]);
      valoresM.push(0);
    })
    let valoresVendedor = [];
    let valoresV = [];
    this.filtroEjecutivoVentas.forEach(() => {
      valoresVendedor.push([0, 0, 0, 0, 0]);
      valoresV.push(0);
    })
    let valoresEjecutivoSer = [];
    let valoresE = [];
    this.filtroEjecutivoServicio.forEach(() => {
      valoresEjecutivoSer.push([0, 0, 0, 0, 0]);
      valoresE.push(0);
    });
    this.nivelIngreso = {
      titulo: "Totales",
      labels: ["MM", "AAplus", "AB", "AM", "MB", "AA", "MA", "Bajo"],
      valores: [0, 0, 0, 0, 0, 0, 0, 0],
      labelsExtras: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
      labelsExtrasHover: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
      valuesExtras: [0, 0, 0, 0, 0],
      valuesExtrasHover: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
    }
    this.GClientes = {
      titulo: "Totales",
      labels: this.filtroNombreClientes,
      valores: valoresC,
      labelsExtras: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
      labelsExtrasHover: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
      valuesExtras: [0, 0, 0, 0, 0],
      valuesExtrasHover: valoresCliente
    }
    this.estadoSeguimiento = {
      titulo: "Totales",
      labels: ["Seguimiento", "Cancelable", "Confirmación"],
      valores: [0, 0, 0],
      labelsExtras: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
      labelsExtrasHover: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
      valuesExtras: [0, 0, 0, 0, 0],
      valuesExtrasHover: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
    }
    this.ejecutivoVentas = {
      titulo: "Totales",
      labels: this.filtroEjecutivoVentas,
      valores: valoresV,
      labelsExtras: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
      labelsExtrasHover: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
      valuesExtras: [0, 0, 0, 0, 0],
      valuesExtrasHover: valoresVendedor
    }
    this.tipoProducto = {
      titulo: "Totales",
      labels: ["Estandares", "Publicaciones", "Reactivos", "Labware", "Fletes"],
      valores: [0, 0, 0, 0, 0],
      labelsExtras: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
      labelsExtrasHover: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
      valuesExtras: [0, 0, 0, 0, 0],
      valuesExtrasHover: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
    }
    this.marcas = {
      titulo: "Totales",
      labels: this.filtroNuevo2,
      valores: valoresM,
      labelsExtras: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
      labelsExtrasHover: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
      valuesExtras: [0, 0, 0, 0, 0],
      valuesExtrasHover: valoresMarca
    }
    this.estadoConfirmacion = {
      titulo: "Totales",
      labels: ["No Trabajada", "Cotización no recibida", "Contacto No Localizado"],
      valores: [0, 0, 0],
      labelsExtras: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
      labelsExtrasHover: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
      valuesExtras: [0, 0, 0, 0, 0],
      valuesExtrasHover: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
    }
    this.ejecutivoServicio = {
      titulo: "Totales",
      labels: this.filtroEjecutivoServicio,
      valores: valoresE,
      labelsExtras: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
      labelsExtrasHover: ["Monto", "Clientes", "Cotizaciones", "Partidas", "Piezas"],
      valuesExtras: [0, 0, 0, 0, 0],
      valuesExtrasHover: valoresEjecutivoSer
    }
    this.sumita = 0;



  }
  calcularDatosParaGraficas() {
    if (this.tipoCotizacion === 1) {
      for (let cotizacion of this.FiltroSeguimiento) {
        this.llenarTotales(this.nivelIngreso, cotizacion, "NIVEL_INGRESO");
        this.llenarTotales(this.GClientes, cotizacion, "CLIENTES");
        this.llenarTotales(this.estadoSeguimiento, cotizacion, "ESTADO_SEGUIMIENTO");
        this.llenarTotales(this.ejecutivoVentas, cotizacion, "EJECUTIVO_VENTAS");
        this.llenarTotales(this.tipoProducto, cotizacion, "TIPO_PRODUCTO");
        this.llenarTotales(this.marcas, cotizacion, "MARCAS");
        this.llenarTotales(this.ejecutivoServicio, cotizacion, "EJECUTIVO_SERVICIO");
      }
    } else if (this.tipoCotizacion === 2) {
      for (let cotizacion of this.FiltroConfirmacion) {
        this.llenarTotales(this.nivelIngreso, cotizacion, "NIVEL_INGRESO");
        this.llenarTotales(this.GClientes, cotizacion, "CLIENTES");
        this.llenarTotales(this.estadoSeguimiento, cotizacion, "ESTADO_SEGUIMIENTO");
        this.llenarTotales(this.ejecutivoVentas, cotizacion, "EJECUTIVO_VENTAS");
        this.llenarTotales(this.tipoProducto, cotizacion, "TIPO_PRODUCTO");
        this.llenarTotales(this.marcas, cotizacion, "MARCAS");
        this.llenarTotales(this.ejecutivoServicio, cotizacion, "EJECUTIVO_SERVICIO");
      }
    } else if (this.tipoCotizacion === 3) {
      for (let cotizacion of this.FiltroCancelable) {
        this.llenarTotales(this.nivelIngreso, cotizacion, "NIVEL_INGRESO");
        this.llenarTotales(this.GClientes, cotizacion, "CLIENTES");
        this.llenarTotales(this.estadoSeguimiento, cotizacion, "ESTADO_SEGUIMIENTO");
        this.llenarTotales(this.ejecutivoVentas, cotizacion, "EJECUTIVO_VENTAS");
        this.llenarTotales(this.tipoProducto, cotizacion, "TIPO_PRODUCTO");
        this.llenarTotales(this.marcas, cotizacion, "MARCAS");
        this.llenarTotales(this.ejecutivoServicio, cotizacion, "EJECUTIVO_SERVICIO");
      }
    }
    for (let cotizacion of this.lstAux) {
      this.llenarTotales(this.estadoConfirmacion, cotizacion, "ESTADO_CONFIRMACION");
    }
    this.graficasCargadas = true;

    this.nivelIngreso.valuesExtras[0] = this.nivelIngreso.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    this.nivelIngreso.valuesExtrasHover.forEach(function (temp) {
      temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    });
    this.GClientes.valuesExtras[0] = this.GClientes.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    this.GClientes.valuesExtrasHover.forEach(function (temp) {
      temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    });
    this.estadoSeguimiento.valuesExtras[0] = this.estadoSeguimiento.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    this.estadoSeguimiento.valuesExtrasHover.forEach(function (temp) {
      temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    });
    this.ejecutivoVentas.valuesExtras[0] = this.ejecutivoVentas.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    this.ejecutivoVentas.valuesExtrasHover.forEach(function (temp) {
      temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    });
    this.tipoProducto.valuesExtras[0] = this.tipoProducto.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    this.tipoProducto.valuesExtrasHover.forEach(function (temp) {
      temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    });
    this.marcas.valuesExtras[0] = this.marcas.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    this.marcas.valuesExtrasHover.forEach(function (temp) {
      temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    });

    this.estadoConfirmacion.valuesExtras[0] = this.estadoConfirmacion.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    this.estadoConfirmacion.valuesExtrasHover.forEach(function (temp) {
      temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    });
    this.ejecutivoServicio.valuesExtras[0] = this.ejecutivoServicio.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    this.ejecutivoServicio.valuesExtrasHover.forEach(function (temp) {
      temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    });
    this.CotizacionesGlobal = 0;
    this.informacion.forEach(element => {
      this.CotizacionesGlobal += element.folioCotizacion.length;
    });

    this.nivelIngreso.valuesExtras[2] = this.CotizacionesGlobal;
    this.GClientes.valuesExtras[2] = this.CotizacionesGlobal;
    this.estadoSeguimiento.valuesExtras[2] = this.CotizacionesGlobal;
    this.ejecutivoVentas.valuesExtras[2] = this.CotizacionesGlobal;
    this.tipoProducto.valuesExtras[2] = this.CotizacionesGlobal;
    this.marcas.valuesExtras[2] = this.CotizacionesGlobal;
    this.estadoConfirmacion[2] = this.CotizacionesGlobal;
    this.ejecutivoServicio.valuesExtras[2] = this.CotizacionesGlobal;

    this.graficasValores = [];
    this.refrescar = false;
    setTimeout(() => {

      this.refrescar = true;
    }, 10);
    this.graficasValores = [
      this.nivelIngreso,
      this.GClientes,
      this.estadoSeguimiento,
      this.ejecutivoVentas,
      this.tipoProducto,
      this.marcas,
      this.estadoConfirmacion,
      this.ejecutivoServicio
    ];

    this.refrescar = false;
    setTimeout(() => {

      this.refrescar = true;
    }, 10);

  }
  llenarTotales(total, elemento, graficaElegida) {
    switch (graficaElegida) {
      case "NIVEL_INGRESO":
        if (this.filtroNombreClientes1.indexOf(elemento.nombreCliente) === -1) {
          this.filtroNombreClientes1.push(elemento.nombreCliente);
          total.valuesExtras[1]++;
          if (elemento.nivelIngreso === 'MM') {
            total.valuesExtrasHover[0][1]++;
            total.valuesExtrasHover[0][2]++;
          } else if (elemento.nivelIngreso === "AAplus") {
            total.valuesExtrasHover[1][1]++;
            total.valuesExtrasHover[1][2]++;
          } else if (elemento.nivelIngreso === "AB") {
            total.valuesExtrasHover[2][1]++;
            total.valuesExtrasHover[2][2]++;
          } else if (elemento.nivelIngreso === "AM") {
            total.valuesExtrasHover[3][1]++;
            total.valuesExtrasHover[3][2]++;
          } else if (elemento.nivelIngreso === "MB") {
            total.valuesExtrasHover[4][1]++;
            total.valuesExtrasHover[4][2]++;
          } else if (elemento.nivelIngreso === "AA") {
            total.valuesExtrasHover[5][1]++;
            total.valuesExtrasHover[5][2]++;
          } else if (elemento.nivelIngreso === "MA") {
            total.valuesExtrasHover[6][1]++;
            total.valuesExtrasHover[6][2]++;
          } else if (elemento.nivelIngreso === "Bajo") {
            total.valuesExtrasHover[7][1]++;
            total.valuesExtrasHover[7][2]++;
          }
        }
        total.valuesExtras[0] += + (elemento.montoCotizacion.toFixed(2));
        total.valuesExtras[3]++;
        total.valuesExtras[4] += elemento.piezas;
        if (elemento.nivelIngreso === 'MM') {
          total.valores[0]++;
          total.valuesExtrasHover[0][3]++;
          total.valuesExtrasHover[0][0] += + (elemento.montoCotizacion.toFixed(2));
          total.valuesExtrasHover[0][3]++;
          total.valuesExtrasHover[0][4] += elemento.piezas;
        } else if (elemento.nivelIngreso === "AAplus") {
          total.valores[1]++;
          total.valuesExtrasHover[0][3]++;
          total.valuesExtrasHover[1][0] += + (elemento.montoCotizacion.toFixed(2));
          total.valuesExtrasHover[1][3]++;
          total.valuesExtrasHover[1][4] += elemento.piezas;
        } else if (elemento.nivelIngreso === "AB") {
          total.valores[2]++;
          total.valuesExtrasHover[0][3]++;
          total.valuesExtrasHover[2][0] += + (elemento.montoCotizacion.toFixed(2));
          total.valuesExtrasHover[2][3]++;
          total.valuesExtrasHover[2][4] += elemento.piezas;
        } else if (elemento.nivelIngreso === "AM") {
          total.valores[3]++;
          total.valuesExtrasHover[0][3]++;
          total.valuesExtrasHover[3][0] += + (elemento.montoCotizacion.toFixed(2));
          total.valuesExtrasHover[3][3]++;
          total.valuesExtrasHover[3][4] += elemento.piezas;
        } else if (elemento.nivelIngreso === "MB") {
          total.valores[4]++;
          total.valuesExtrasHover[0][3]++;
          total.valuesExtrasHover[4][0] += + (elemento.montoCotizacion.toFixed(2));
          total.valuesExtrasHover[4][3]++;
          total.valuesExtrasHover[4][4] += elemento.piezas;
        } else if (elemento.nivelIngreso === "AA") {
          total.valores[5]++;
          total.valuesExtrasHover[0][3]++;
          total.valuesExtrasHover[5][0] += + (elemento.montoCotizacion.toFixed(2));
          total.valuesExtrasHover[5][3]++;
          total.valuesExtrasHover[5][4] += elemento.piezas;
        } else if (elemento.nivelIngreso === "MA") {
          total.valores[6]++;
          total.valuesExtrasHover[0][3]++;
          total.valuesExtrasHover[6][0] += + (elemento.montoCotizacion.toFixed(2));
          total.valuesExtrasHover[6][3]++;
          total.valuesExtrasHover[6][4] += elemento.piezas;
        } else if (elemento.nivelIngreso === "Bajo") {
          total.valores[7]++;
          total.valuesExtrasHover[0][3]++;
          total.valuesExtrasHover[7][0] += + (elemento.montoCotizacion.toFixed(2));
          total.valuesExtrasHover[7][3]++;
          total.valuesExtrasHover[7][4] += elemento.piezas;
        }
        break;
      case "CLIENTES":
        let posicion2 = this.filtroNombreClientes.indexOf(elemento.nombreCliente);
        if (this.nuevo.indexOf(elemento.nombreCliente) === -1) {
          this.nuevo.push(elemento.nombreCliente);
          total.valuesExtras[1]++; //Aumento en clientes
          total.valuesExtrasHover[posicion2][1]++;
        }
        total.valuesExtras[3]++ // Total de Partidas
        total.valuesExtras[4] += elemento.piezas// Total de piezas
        total.valores[posicion2] += + (elemento.montoCotizacion.toFixed(2)); //Monto total
        total.valuesExtras[0] += + (elemento.montoCotizacion.toFixed(2));
        total.valuesExtrasHover[posicion2][0] += + (elemento.montoCotizacion.toFixed(2));
        total.valuesExtrasHover[posicion2][2]++; //Suma cotizaciones
        total.valuesExtrasHover[posicion2][3] += elemento.partidas // Total de Partidas
        total.valuesExtrasHover[posicion2][4] += elemento.piezas
        break;
      case "ESTADO_SEGUIMIENTO":
        if (this.lstEstado.indexOf(elemento.nombreCliente) === -1) {
          this.lstEstado.push(elemento.nombreCliente);
          total.valuesExtras[1]++;
          if (elemento.tipoSeguimiento === 'Seguimiento') {
            total.valuesExtrasHover[0][1]++;
          } else if (elemento.tipoSeguimiento === "Cancelable") {
            total.valuesExtrasHover[1][1]++;
          } else if (elemento.tipoSeguimiento === "Confirmación") {
            total.valuesExtrasHover[2][1]++;
          }
        }
        total.valuesExtras[3]++;
        total.valuesExtras[0] += + (elemento.montoCotizacion.toFixed(2));
        total.valuesExtras[4] += elemento.piezas;
        if (elemento.tipoSeguimiento === 'Seguimiento') {
          total.valores[0]++;
          total.valuesExtrasHover[0][0] += + (elemento.montoCotizacion.toFixed(2));
          total.valuesExtrasHover[0][2]++;
          total.valuesExtrasHover[0][3]++;
          total.valuesExtrasHover[0][4] += elemento.piezas;
        } else if (elemento.tipoSeguimiento === "Cancelable") {
          total.valores[1]++;
          total.valuesExtrasHover[1][0] += + (elemento.montoCotizacion.toFixed(2));
          total.valuesExtrasHover[1][2]++;
          total.valuesExtrasHover[1][3]++;
          total.valuesExtrasHover[1][4] += elemento.piezas;
        } else if (elemento.tipoSeguimiento === "Confirmación") {
          total.valores[2]++;
          total.valuesExtrasHover[2][0] += + (elemento.montoCotizacion.toFixed(2));
          total.valuesExtrasHover[2][2]++;
          total.valuesExtrasHover[2][3]++;
          total.valuesExtrasHover[2][4] += elemento.piezas;
        }
        break;
      case "EJECUTIVO_VENTAS":
        let posicion = this.filtroEjecutivoVentas.indexOf(elemento.nombreEV);
        if (this.nuevoVendedor.indexOf(elemento.nombreCliente) === -1) {
          this.nuevoVendedor.push(elemento.nombreCliente);
          total.valores[posicion] += + (elemento.montoCotizacion.toFixed(2)); //Monto total
          total.valuesExtras[1]++; //Aumento en clientes
          total.valuesExtrasHover[posicion][1]++;
        }
        total.valuesExtras[3]++ // Total de Partidas
        total.valuesExtras[4] += elemento.piezas// Total de piezas
        total.valuesExtras[0] += + (elemento.montoCotizacion.toFixed(2));
        total.valuesExtrasHover[posicion][0] += + (elemento.montoCotizacion.toFixed(2));
        total.valuesExtrasHover[posicion][2]++;
        total.valuesExtrasHover[posicion][3]++; // Total de Partidas
        total.valuesExtrasHover[posicion][4] += elemento.piezas
        break;
      case "TIPO_PRODUCTO":
        if (this.nuevoClientes.indexOf(elemento.nombreCliente) === -1) {
          this.nuevoClientes.push(elemento.nombreCliente);
          total.valuesExtras[1]++;
          if (elemento.tipoProduct === 'Estandares') {
            total.valuesExtrasHover[0][1]++;
          } else if (elemento.tipoProduct === "Publicaciones") {
            total.valuesExtrasHover[1][1]++;
          } else if (elemento.tipoProduct === "Reactivos") {
            total.valuesExtrasHover[2][1]++;
          } else if (elemento.tipoProduct === "Labware") {
            total.valuesExtrasHover[3][1]++;
          } else if (elemento.tipoProduct === "Fletes") {
            total.valuesExtrasHover[4][1]++;
          }
        }
        total.valuesExtras[0] += + (elemento.montoCotizacion.toFixed(2));;
        total.valuesExtras[3]++;
        total.valuesExtras[4] += elemento.piezas;
        if (elemento.tipoProduct === 'Estandares') {
          total.valores[0]++;
          total.valuesExtrasHover[0][0] += + (elemento.montoCotizacion.toFixed(2));;
          total.valuesExtrasHover[0][2]++;
          total.valuesExtrasHover[0][3] += elemento.partidas;
          total.valuesExtrasHover[0][4] += elemento.piezas;
        } else if (elemento.tipoProduct === "Publicaciones") {
          total.valores[1]++;
          total.valuesExtrasHover[1][0] += + (elemento.montoCotizacion.toFixed(2));;
          total.valuesExtrasHover[1][2]++;
          total.valuesExtrasHover[1][3] += elemento.partidas;
          total.valuesExtrasHover[1][4] += elemento.piezas;
        } else if (elemento.tipoProduct === "Reactivos") {
          total.valores[2]++;
          total.valuesExtrasHover[2][0] += + (elemento.montoCotizacion.toFixed(2));
          total.valuesExtrasHover[2][2]++;
          total.valuesExtrasHover[2][3] += elemento.partidas;
          total.valuesExtrasHover[2][4] += + elemento.piezas;
        } else if (elemento.tipoProduct === "Labware") {
          total.valores[3]++;
          total.valuesExtrasHover[3][0] += + (elemento.montoCotizacion.toFixed(2));
          total.valuesExtrasHover[3][2]++;
          total.valuesExtrasHover[3][3] += elemento.partidas;
          total.valuesExtrasHover[3][4] += elemento.piezas;
        } else if (elemento.tipoProduct === "Fletes") {
          total.valores[4]++;
          total.valuesExtrasHover[4][0] += + (elemento.montoCotizacion.toFixed(2));
          total.valuesExtrasHover[4][2]++;
          total.valuesExtrasHover[4][3] += elemento.partidas;
          total.valuesExtrasHover[4][4] += elemento.piezas;
        }
        break;
      case "MARCAS":
        let posicionM = this.filtroNuevo2.indexOf(elemento.marca);
        if (this.nuevoMarcas.indexOf(elemento.nombreCliente) === -1) {
          this.nuevoMarcas.push(elemento.nombreCliente);
          total.valores[posicionM] += + (elemento.montoCotizacion.toFixed(2));; //Monto total
          total.valuesExtras[1]++; //Aumento en clientes
          total.valuesExtrasHover[posicionM][1]++;
        }
        total.valuesExtras[3]++; // Total de Partidas
        total.valuesExtras[4] += elemento.piezas// Total de piezas
        total.valuesExtras[0] += + (elemento.montoCotizacion.toFixed(2));
        total.valuesExtrasHover[posicionM][0] += + (elemento.montoCotizacion.toFixed(2));
        total.valuesExtrasHover[posicionM][1]++
        total.valuesExtrasHover[posicionM][2]++;
        total.valuesExtrasHover[posicionM][3] += elemento.partidas // Total de Partidas
        total.valuesExtrasHover[posicionM][4]++
        break;
      case "ESTADO_CONFIRMACION":
        if (this.nuevoConfirmacion.indexOf(elemento._nombreCliente) === -1) {
          this.nuevoConfirmacion.push(elemento._nombreCliente);
          total.valuesExtras[1]++;
          if (elemento._piezas != undefined) {
            total.valuesExtras[4] = total.valuesExtras[4] + elemento._piezas;
          }
        }
        total.valuesExtras[0] += + (elemento._monto.toFixed(2));
        total.valuesExtras[3]++;

        if (elemento._estatusMasCritico === 'No Trabajada') {
          total.valores[0]++;
          total.valuesExtrasHover[0][0] += + (elemento._monto.toFixed(2));
          total.valuesExtrasHover[0][1]++;
          total.valuesExtrasHover[0][2]++;
          elemento._partidas.forEach(par => {
            total.valuesExtrasHover[0][3] = total.valuesExtrasHover[0][3] + par;
          });
          if (elemento._piezas != undefined) {
            total.valuesExtrasHover[0][4] = total.valuesExtrasHover[0][4] + elemento._piezas;
          }
        } else if (elemento._estatusMasCritico === "Cotización no recibida") {
          total.valores[1]++;
          total.valuesExtrasHover[1][0] += + (elemento._monto.toFixed(2));
          total.valuesExtrasHover[1][2]++;
          elemento._partidas.forEach(par => {
            total.valuesExtrasHover[1][3] = total.valuesExtrasHover[1][3] + par;
          });
          if (elemento._piezas != undefined) {
            total.valuesExtrasHover[1][4] = total.valuesExtrasHover[1][4] + elemento._piezas;
          }
        } else if (elemento._estatusMasCritico === "Contacto No Localizado") {
          total.valores[2]++;
          total.valuesExtrasHover[2][0] += + (elemento._monto.toFixed(2));
          total.valuesExtrasHover[2][2]++;
          elemento._partidas.forEach(par => {
            total.valuesExtrasHover[2][3] = total.valuesExtrasHover[2][3] + par;
          });
          if (elemento._piezas != undefined) {
            total.valuesExtrasHover[2][4] = total.valuesExtrasHover[2][4] + elemento._piezas;
          }
        }
        break;
      case "EJECUTIVO_SERVICIO":
        if (elemento.nombreVendedor != null) {
          let posicionV = this.filtroEjecutivoServicio.indexOf(elemento.nombreVendedor);
          if (this.nuevoEServicio.indexOf(elemento.nombreCliente) === -1) {
            this.nuevoEServicio.push(elemento.nombreCliente);
            total.valuesExtrasHover[posicionV][1]++;
            total.valuesExtras[1]++; //Aumento en clientes
          }
          total.valores[posicionV] += + (elemento.montoCotizacion.toFixed(2)); //Monto total
          total.valuesExtras[4] += elemento.piezas;// Total de piezas
          total.valuesExtras[0] += + (elemento.montoCotizacion.toFixed(2));
          total.valuesExtras[3]++; // Total de Partidas
          total.valuesExtras[2]++;
          total.valuesExtrasHover[posicionV][0] += + (elemento.montoCotizacion.toFixed(2));
          // total.valuesExtrasHover[posicionV][1]++
          total.valuesExtrasHover[posicionV][2]++;
          total.valuesExtrasHover[posicionV][3]++; // Total de Partidas
          total.valuesExtrasHover[posicionV][4] += elemento.piezas
        }
        break;
    }
  }
  showGraphicPanel() {
    this.showGraphic = true;
    setTimeout(() => { this.topGraphics = "0"; }, 100);
  }
  showTablePanel() {
    this.topGraphics = "-110%";
    setTimeout(() => { this.showGraphic = false; }, 300);
  }
}
