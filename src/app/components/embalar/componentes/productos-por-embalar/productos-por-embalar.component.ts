import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SessionUser} from '../../../../services/session/session.service';
import {EmbalarService} from '../../../../services/embalar/embalar.service';
import {CoreContainerComponent} from '../../../core-container/core-container.component';
import {ComunService} from '../../../../services/comun/comun.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'pq-productos-por-embalar',
  templateUrl: './productos-por-embalar.component.html',
  styleUrls: ['./productos-por-embalar.component.scss']
})
export class ProductosPorEmbalarComponent implements OnInit {
  @Output() activarPopImprimir: EventEmitter <any> = new EventEmitter<any>(); //// Se emitira cuando se haya generado la factura correcta.
  @Output() emitEventColectar: EventEmitter <any> = new EventEmitter<any>();
  @Output() videoIns: EventEmitter <any> = new EventEmitter<any>();
  @Output() activarBtnMas: EventEmitter <boolean> = new EventEmitter<boolean>();
  @Output() emitEventValidarBotonGenerar: EventEmitter <boolean> = new EventEmitter<any>();
  @Output() emitEventPiezas: EventEmitter <any> = new EventEmitter<any>();
  @Output() emitEventScanear: EventEmitter <any> = new EventEmitter<any>();
  @Output() emitActivarPopExi: EventEmitter <boolean> = new EventEmitter<boolean>();
  @Input() datosPorEstado: any; //// RECIBE EL VALOR DE LOS TOTALES POR ESTA EN CONCEPTO DE PIEZAS.
  @Input() folioPakingList: any; //// RECIBE EL FOLIO EN EL QUE SE VAN A ESTAR ALMACENANDO LOS PRODUCTOS
  @Input() datosClienteP: any;
  @Input() enviarInfo: boolean;
  @Input() estadoVista: any;
  @Input() desactivarBtn: any;
  @Input() validarPakingList: any; //// Variable que se activa para mandar a llamar al servicio del paking list ///
  @Input() activarFocus;
  @Input() nombreV: any;
  @Output() piezasFaltantes: EventEmitter <boolean> = new EventEmitter<boolean>();
  /// @ViewChild('textarea') private elementRef: ElementRef;
  activarPopTimbre: boolean; // Variable para activar el pop de timbrado incorrecto //
  mensajeGraficas = "QR’s";
  pzasTotalesambiente: any;
  pzasAlMomentoAmbiente: any = 0;
  pzasTotalesRefri: any;
  pzasAlMomentoRefri: any = 0;
  pzasTotalesConge: any;
  pzasAlMomentoConge: any = 0;
  tipoProductoEmbalar: any;
  estadoAmbiente: string;
  estadoRefri: string;
  estadoConge: string;
  activarConge = 1;
  activarRefri = 1;
  activarAmb = 1;
  //////// variables para el textArea
  escaneoNormal: boolean;
  escaneoCorrecto: boolean;
  escaneoIncorrecto: boolean;
  textoPedimento: string; //="";
  cambioVistaEscaneo:boolean;
  focus:boolean = true;
  @ViewChild('elemento') private hoja: ElementRef;
  /////////////////////////////////////////////////////////
  tipoAmbiente: string;// ="normal";
  tipoRefri: string;// ="normal";
  tipoConge: string;// ="opaco";

  //variables para mostrar y ocultar secciones en html
  mostrarAmbientePorColectar: boolean;
  mostrarRefriPorColectar: boolean;
  mostrarCongelarPorColectar: boolean;

  txtColor1: string = '#338A9C';
  txtColor2: string = '#000000';
  txtColor3: string = '#9B9B9B';

  ambienteNormal: boolean;
  ambienteOpaco: boolean;
  refriOpaco: boolean;
  refriNormal: boolean;
  congeNormal: boolean;
  congeOpaco: boolean;
  imgAmbiente1: boolean;
  imgAmbiente2: boolean;
  imgRefri1: boolean;
  imgRefri2: boolean;
  imgConge1: boolean;
  imgConge2: boolean;
  validarClicCongelacion: boolean;
  validarClicRefrigeracion: boolean;
  validarClicAmbiente: boolean;
  valorBoton: boolean;
  lista: any;
  listaIdPaquete: any [] = []; /// Almacenara los id que se enviaran al servicio....
  listaEmbalar: any;
  copiaListaPedimentos: any[] = []; /*******Se utiliza para tener la lista de los que se van a enviar*******/
///////////////////////////////////////// VARIABLES PARA LA LISTA /////////////////////
  @Output() event: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitEvent: EventEmitter <any> = new EventEmitter<any>();
  @Input()valorRecibidoEmbalaje: any;
  @Input()mostrarVistaLista: any;
  arrayAuxConge: any[] = [];
  arrayAuxRefri: any[] = [];
  arrayAuxAmbiente: any[] = [];
  etiquetaPorRefrigeracion: any[] = [{ "fd":"FD-030916-4272-4", "piezas": 14},
    { "fd":"FD-256398-7896-7", "piezas": 15},
    { "fd":"FD-256398-7892-5", "piezas": 24},
    { "fd":"FD-256398-7897-1", "piezas": 18},
    { "fd":"FD-256398-7896-7", "piezas": 15},
    { "fd":"FD-256398-7892-5", "piezas": 24},
    { "fd":"FD-256398-7897-1", "piezas": 18},
    { "fd":"FD-256398-7896-7", "piezas": 15},
    { "fd":"FD-256398-7892-5", "piezas": 24},
    { "fd":"FD-256398-7897-1", "piezas": 18},
    { "fd":"FD-256398-7235-9", "piezas": 88}];
  etiquetaPorQr: any[] = [{ "qr":"QR-030916-4272-4", "piezas": 14},
    { "qr":"QR-256398-7896-7", "piezas": 15},
    { "qr":"QR-256398-7892-5", "piezas": 24},
    { "qr":"QR-256398-7897-1", "piezas": 18},
    { "qr":"QR-256398-7896-7", "piezas": 15},
    { "qr":"QR-256398-7892-5", "piezas": 24},
    { "qr":"QR-256398-7897-1", "piezas": 18},
    { "qr":"QR-256398-7896-7", "piezas": 15},
    { "qr":"QR-256398-7892-5", "piezas": 24},
    { "qr":"QR-256398-7897-1", "piezas": 18},
    { "qr":"QR-256398-7235-9", "piezas": 88}];
  etiquetaPorCongelacion: any[] = [{ "fd":"FD-030916-4272-4", "piezas": 14},
    { "fd":"FD-256398-7896-7", "piezas": 15},
    { "fd":"FD-256398-7892-5", "piezas": 24},
    { "fd":"FD-256398-7897-1", "piezas": 18},
    { "fd":"FD-256398-7896-7", "piezas": 15},
    { "fd":"FD-256398-7892-5", "piezas": 24},
    { "fd":"FD-256398-7897-1", "piezas": 18},
    { "fd":"FD-256398-7896-7", "piezas": 15},
    { "fd":"FD-256398-7892-5", "piezas": 24},
    { "fd":"FD-256398-7897-1", "piezas": 18},
    { "fd":"FD-256398-7235-9", "piezas": 88}];

  listaFD: any = [];
  codigoAmbiente: any = this.etiquetaPorRefrigeracion[0];
  val: any = 0;
  cambioDeEtiqueta: boolean = false;
  valorTituloLista: string;
  cambioColorLetra:boolean = false;
  arraryCongelacion: any [] = [];
  arrarRefrigeracion: any [] = [];
  arrayAmbiente: any [] = [];
  listaAux: any [] = [];
  vistaListaConge: boolean;
  vistaListaRefri: boolean;
  vistaListaAmbiente: boolean;
  listaPakingList: any;
  listaTotal: any[] = [];
  activarPopUp: boolean;
  mensaje: string;
  folio = '12345';
  valoresPacking: any;
  objPakcingList: any;
  usuarioId: any;
  activarPopExitoso: boolean;
  indexAux = 0;
  arrayFoliosAux: any[] = [];
  popError: boolean;
  popAvanzarExitosamente: boolean;
  selecionarPrimera: boolean = true;
  nombreVideo: string;
  valorIndice = 0;
  subsVideo: Subscription;
  faltantes: boolean;
  constructor(private embalarServices: EmbalarService, private coreComponent: CoreContainerComponent, private ComunServices: ComunService) {
    //////////////// VARIABLES PERTENECIENTES AL TEXTAREA //////////////
    this.textoPedimento = undefined;
    this.escaneoNormal = true;
  }

  ngOnInit() {
    // this.mostrarVistaLista = true;
    /*this.MostrarListaInicial();*/
    this.validarBoton();
    ///////////// LLAMADA A LOS METODOS DE LA LISTA  /////////////
    /*this.seleccionarPrimero();*/
    this.seleccionarTitulo();
    /////////////////////////////// variables pertenecientes al textArea ////////////////
    this.focus = true;
    this.subsVideo = this.ComunServices.videoEmbalar.subscribe(
      data => {
        this.nombreVideo = data;
      }
    );
  }

  ngOnChanges() {
    this.usuarioId = SessionUser.getInstance().getUser().getIdEmpleado();
    // console.log('usuario', this.usuarioId);
    //this.usuarioId = 54;
    /*this.recibirVistaEscanear();*/
    if (this.datosPorEstado !== undefined) {
      this.recibirDatosPorEstado();
    }
    this.validarPorEmbalar();
    if (this.datosPorEstado && this.selecionarPrimera) {
      this.seleccionarListaMostrar();
      this.selecionarPrimera = false;
    }
    this.obtenerFolioPaquete();
    // this.valorBotonAgregar();
    /* if (this.enviarInfo) {
       this.recuperarDatosCliente();
     }*/
    if (this.validarPakingList && this.nombreV !== undefined) {
      this.recuperarDatosCliente();
    }
    this.llamarDesactivarBtn(this.desactivarBtn);
    if (this.activarFocus || !this.activarFocus) {
      this.hoja.nativeElement.focus(); /**********SE AGREGO PARA ACTIVAR EL FOCUS ***********/

    }
  }
  llamarDesactivarBtn(desactivar) {
    this.valorBotonAgregar(desactivar);
  }
  /////////////// Este metodo se va a encargar de saber cuando va a entrar a la lista de lo que se debe escanear. //////////////
  /*recibirVistaEscanear() {
    if (this.mostrarVistaLista) {
      this.hoja.nativeElement.focus();
    }
  }*/
  /***************************************ESTE METODO RECUPERA LOS VALORES DEL CLIENTE QUE SE ENVIARAN CUANDO DE GENERAR******************************************/
  recuperarDatosCliente() {
    let totBolsas: number;
    let objetoBolsa: any;
    for(var i = 0; i < this.listaTotal.length; i++) {
      if (this.listaTotal[i].tipo === 'Bolsa de transito') {
        for(var j = 0; j < this.arrayFoliosAux.length; j++) {
          if (this.listaTotal[i].folio === this.arrayFoliosAux[i]) {
            break;
          }
        }
        if (j === this.arrayFoliosAux.length) {
          this.arrayFoliosAux[this.arrayFoliosAux.length] = this.listaTotal[i].tipo;
        }
      }
    }
    if (this.arrayFoliosAux.length > 0) {
      totBolsas = this.arrayFoliosAux.length;
    } else {
      totBolsas = 0;
    }
    console.log('Soy total de bolsas', totBolsas);
    objetoBolsa = {
      cantidad: totBolsas,
      tipoBolsa: 'BolsaTransito'};
    this.guardarConsumible(objetoBolsa);
  }
  guardarConsumible(objeto) {
    this.embalarServices.guardarConsumible(objeto).subscribe(
      data => {
        if (data.current === true) {
          this.objPakcingList = {zona: this.datosClienteP[0].zonaMensajeria, ruta: this.datosClienteP[0].ruta, folio: this.listaAux[0].folioTemporal, partidaPackingList: this.listaTotal, video: this.nombreV};
          console.log('Soy lista que va a generar <<<<------>>', this.objPakcingList );
          this.generarPackingList(this.objPakcingList);
          /*this.popAvanzarExitosamente = true;*/
          /*this.emitActivarPopExi.emit(true);*/
        } else {
          this.mensaje = 'Bolsas insuficientes';
          this.popError = true;
        }
      });
  }
  /////// ESTE METODO RECUPERA EL TOTAL DE LAS BOLSAS
  totalBolsas() {

    return this.arrayFoliosAux.length;
  }
  ///// EN ESTE METODO SE MANDARA AL SEVICIO LOS DATOS DEL PACKING LIST /////////////////
  generarPackingList(lista: any) {
    this.coreComponent.openModal(0);
    this.embalarServices.generarPackingList(lista).subscribe(
      data => {
        // let datos = data.current;
        this.coreComponent.closeModal(0);
        if (data.current < 0) {
          this.activarPopTimbre = true;
        } else {
          this.emitActivarPopExi.emit(true);
          this.activarPopImprimir.emit(true);
        }
      });
  }
  ////////////////////////////// ESTE METODO PERMITE REINTERTAR LA LLAMDA AL SERVICIO DEL PAKING LIST POR MOTIVO DEL TIMBRADO/////////////////////////////
  reinterntatTimbrado(tipo) {
    if (tipo === 0) {
      this.activarPopTimbre = false;
    } else if (tipo === 1) {
      this.activarPopTimbre = false;
      this.recuperarDatosCliente();
    }
  }
  //////////////////// EN ESTE METODO SE OBTENDRA EL FOLIO QUE DEBE IR EN LA LISTA DE PAKING LIST ///////////////
  obtenerFolioPaquete() {
    this.valoresPacking = this.folioPakingList;
  }
  /////////////////// EN ESTE METODO SE OBTEDRA EL INPUT QUE GUARDA LA INFORMACION QUE MANDA VISTA-EMBALAR-PRODUCTOS
  recibirDatosPorEstado() {
    // console.log('Soy productos por embalar', this.datosPorEstado);
    this.coreComponent.openModal(1);
    this.pzasTotalesConge = this.datosPorEstado.arrayConge.length;
    this.pzasTotalesRefri = this.datosPorEstado.arrayRefri.length;
    this.pzasTotalesambiente = this.datosPorEstado.arrayAmbiente.length;
    this.arraryCongelacion = this.datosPorEstado.arrayConge;
    this.arrarRefrigeracion = this.datosPorEstado.arrayRefri;
    this.arrayAmbiente = this.datosPorEstado.arrayAmbiente;
    this.coreComponent.closeModal(1);
    /// console.log('lista congelacion --->>>', this.datosPorEstado.arrayConge);
  }
  MostrarListaInicial() {
    if (this.pzasAlMomentoConge < this.pzasTotalesConge && this.pzasAlMomentoConge > 0) {
      this.tipoProductoEmbalar = "CONGELACIÓN";
      this.emitEventColectar.emit(this.tipoProductoEmbalar);
    } else if (this.pzasAlMomentoRefri < this.pzasTotalesRefri && this.pzasAlMomentoRefri > 0) {
      this.tipoProductoEmbalar = "REFRIGERACIÓN";
      this.emitEventColectar.emit(this.tipoProductoEmbalar);
    } else if (this.pzasAlMomentoAmbiente < this.pzasTotalesambiente && this.pzasAlMomentoAmbiente > 0) {
      this.tipoProductoEmbalar = "AMBIENTE";
      this.emitEventColectar.emit(this.tipoProductoEmbalar);
    }
  }
  MostrarlistaporRefrigeracion() {
    /// console.log("Entro a refrigeraciòn");
    this.tipoProductoEmbalar = "REFRIGERACIÓN";
    this.emitEventColectar.emit(this.tipoProductoEmbalar);
  }
  MostrarlistaPorCongelacion() {
    // console.log("Entro a congelaciòn");
    this.tipoProductoEmbalar = "CONGELACIÓN";
    this.emitEventColectar.emit(this.tipoProductoEmbalar);
  }
  MostrarlistaPorAmbiente() {
    /// console.log("Entro a congelaciòn");
    this.tipoProductoEmbalar = "AMBIENTE";
    this.emitEventColectar.emit(this.tipoProductoEmbalar);
  }
  validarPorEmbalar() {
    if (this.valorIndice === 0 && this.pzasTotalesambiente !== undefined) {
      this.coreComponent.openModal(1);
      this.valorIndice ++;
    }
    this.mostrarAmbientePorColectar = this.visualizarElemento(this.pzasTotalesambiente);
    this.mostrarRefriPorColectar = this.visualizarElemento(this.pzasTotalesRefri);
    this.mostrarCongelarPorColectar = this.visualizarElemento(this.pzasTotalesConge);
    let faltanteRefri = this.pzasTotalesRefri - this.pzasAlMomentoRefri;
    this.tipoAmbiente = this.validarMensajeAmbiente(this.pzasTotalesambiente, this.pzasAlMomentoAmbiente, faltanteRefri);
    // console.log(this.tipoAmbiente);
    if (this.tipoAmbiente =="normal") {
      this.ambienteNormal = true;
      this.imgAmbiente1 = true;
      this.validarClicAmbiente = true;
      this.ambienteOpaco = false;
      this.imgAmbiente2 = false;
    } else {
      this.ambienteOpaco = true;
      this.imgAmbiente2 = true;
      this.ambienteNormal = false;
      this.imgAmbiente1 = false;
      this.validarClicAmbiente = false;
    }
    let faltanteConge = this.pzasTotalesConge - this.pzasAlMomentoConge;
    this.tipoRefri = this.validarMensajeRefrigeracion(this.pzasTotalesRefri, this.pzasAlMomentoRefri , faltanteConge);
    // console.log(this.tipoRefri);
    if (this.tipoRefri =="normal") {
      this.imgRefri1 = true;
      this.refriNormal = true;
      this.imgRefri2 = false;
      this.refriOpaco = false;
      this.validarClicRefrigeracion = true;
    } else {
      this.imgRefri2 = true;
      this.refriOpaco = true;
      this.imgRefri1 = false;
      this.refriNormal = false;
      this.validarClicRefrigeracion = false;
    }
    this.tipoConge = this.validarMensajeCongelacion(this.pzasTotalesConge, this.pzasAlMomentoConge);
    // console.log(this.tipoConge);
    if (this.tipoConge =="normal") {
      this.imgConge1 = true;
      this.congeNormal = true;
      this.imgConge2 = false;
      this.congeOpaco = false;
      this.validarClicCongelacion = true;
    } else {
      this.imgConge2 = true;
      this.congeOpaco = true;
      this.imgConge1 = false;
      this.congeNormal = false;
      this.validarClicCongelacion = false;
    }
    if (this.valorIndice === 1 && this.pzasTotalesConge !== undefined) {
      setTimeout(() => {
        this.coreComponent.closeModal(1);
        this.valorIndice ++;
      }, 1500);

    }
  }

  visualizarElemento(dato: number) {
    if (dato < 1 ) {
      return false;
    } else
      return true;
  }

  validarRestante(total: number, pzasAlmomento: number) {
    if (pzasAlmomento > total) {
      /// console.log("las piezas son mas que el total.");
      return false;
    } else if (pzasAlmomento == total) {
      /// console.log("Las piezas son igual al total");
      return true;
    } else if (pzasAlmomento < total) {
      // console.log("aun faltan piezas por inspeccionas o lo que sea... XD");
      return false;
    } else {
      /// console.log("caso no preevisto verifique con el admin");
    }
  }

  validarMensajeAmbiente(pzaTotales: any, pzaAlMomento: any, faltantesRefri) {
    if (pzaAlMomento >= 0 && pzaAlMomento < pzaTotales && faltantesRefri === 0) {
      this.estadoAmbiente = 'Colectando';
      this.tipoProductoEmbalar = 'AMBIENTE';
      this.emitEventColectar.emit(this.tipoProductoEmbalar);
      this.vistaListaConge = false;
      this.vistaListaRefri = false;
      this.vistaListaAmbiente = true;
      return "normal";
    } else if (pzaAlMomento === pzaTotales) {
      this.estadoAmbiente = "Colectado";
      return "opaco";
    } else if (pzaAlMomento === 0) {
      this.estadoAmbiente = 'Por colectar';
      return "opaco";
    }
  }
  validarMensajeRefrigeracion(pzaTotales: any, pzaAlMomento: any, faltantesConge) {
    if (pzaAlMomento >= 0 && pzaAlMomento <  pzaTotales && faltantesConge === 0) {
      this.estadoRefri = "Colectando";
      this.tipoProductoEmbalar = 'REFRIGERACIÓN';
      this.emitEventColectar.emit(this.tipoProductoEmbalar);
      this.vistaListaConge = false;
      this.vistaListaRefri = true;
      this.vistaListaAmbiente = false;
      return "normal";
    } else if (pzaAlMomento === pzaTotales) {
      this.estadoRefri = 'Colectado';
      return "opaco";
    } else if (pzaAlMomento === 0) {
      this.estadoRefri = 'Por colectar';
      return "opaco";
    }
  }

  validarMensajeCongelacion(pzaTotales: any, pzaAlMomento: any) {
    if (pzaAlMomento >= 0 && pzaAlMomento < pzaTotales && pzaTotales > 0) {
      this.estadoConge = "Colectando";
      this.tipoProductoEmbalar = 'CONGELACIÓN';
      this.emitEventColectar.emit(this.tipoProductoEmbalar);
      this.vistaListaConge = true;
      this.vistaListaRefri = false;
      this.vistaListaAmbiente = false;
      return "normal";
    } else if (pzaAlMomento === pzaTotales) {
      this.estadoConge = "Colectado";
      return "opaco";
    } else if (pzaAlMomento === 0) {
      this.estadoConge = "Por colectar";
      return "normal";
    }
  }
  validarBoton() {
    if (this.pzasAlMomentoAmbiente === this.pzasTotalesambiente && this.pzasAlMomentoRefri === this.pzasTotalesRefri && this.pzasAlMomentoConge === this.pzasTotalesConge) {
      this.valorBoton = true;
    } else {
      this.valorBoton = false;
    }
    this.emitEventValidarBotonGenerar.emit(this.valorBoton);
  }

/////////////////////////////// METODOS CORRESPONDIENTES A LA LISTA //////////////////
  seleccionarTitulo() {
    if (this.cambioDeEtiqueta === true) {
      this.valorTituloLista = "FD’S ";
    } else if (this.cambioDeEtiqueta === false) {
      this.valorTituloLista = "QR’S ";
    }
  }
  seleccionarPrimero() {
    let piezas: number;
    this.listaFD = [];
    this.listaFD = new Array(this.listaAux.length).fill('');
    this.listaFD[0] = 'divActive';
    this.codigoAmbiente = this.listaAux[this.val].folioEmpaque;
    piezas = this.listaAux[this.val].piezas;
    this.lista = {folio: this.codigoAmbiente, piezas: piezas};
    // console.log(this.codigoAmbiente);
    this.emitEvent.emit(this.lista );
  }
  seleccionarListaMostrar () {
    this.activarTextArea();
    if (this.vistaListaConge === true) {
      this.indexAux = 0;
      this.listaAux = this.arraryCongelacion;
      this.listaFD = new Array(this.listaAux.length).fill(''); /****Se agregó para que todos se queden seleccionados **********/
    } else if (this.vistaListaRefri === true) {
      this.listaAux = this.arrarRefrigeracion;
      this.indexAux = 0;
      this.listaFD = new Array(this.listaAux.length).fill(''); /****Se agregó para que todos se queden seleccionados **********/
    } else if (this.vistaListaAmbiente === true) {
      this.listaAux = this.arrayAmbiente;
      this.indexAux = 0;
      this.listaFD = new Array(this.listaAux.length).fill(''); /****Se agregó para que todos se queden seleccionados **********/

    }
    /*this.seleccionarPrimero();*/
  }
  activarTextArea() {
    if (this.mostrarVistaLista) {
      this.hoja.nativeElement.focus();
      // this.seleccionarNombreVideo(0);
    }
  }
  seleccionarNombreVideo(i) {
    if (this.vistaListaAmbiente) {
      if (this.arrayAmbiente[i].videoPartida != null) {
        this.videoIns.emit(this.arrayAmbiente[i].videoPartida);
      } else {
        this.videoIns.emit('error');
      }
    } else if (this.vistaListaRefri) {
      if (this.arrarRefrigeracion[i].videoPartida != null) {
        this.videoIns.emit(this.arrarRefrigeracion[i].videoPartida);
      } else {
        this.videoIns.emit('error');
      }
    } else if (this.vistaListaConge) {
      if (this.arraryCongelacion[i].videoPartida != null) {
        this.videoIns.emit(this.arraryCongelacion[i].videoPartida);
      } else {
        this.videoIns.emit('error');
      }
    }
  }
  seleccionarItemFD(i) {
    // this.seleccionarNombreVideo(i);
    // this.listaFD = [];
    // this.listaFD = new Array(this.listaAux.length).fill('');
    this.listaFD[i] = 'divActive';
    // this.listaFD[i]= 'divCambioColor';
    this.codigoAmbiente = this.listaAux[i].folioEmpaque;
    // console.log(this.codigoAmbiente);
    let piezas = this.listaAux[i].piezas;
    this.lista = {folio: this.codigoAmbiente, piezas: piezas};
    this.emitEvent.emit( this.lista);
    // return this.codigoAmbiente;
  }
//////////////// Recuperar textArea ///////////
  recuperarTextAux() {
    /* if (this.indexAux !== 0) {
       this.enter(this.indexAux);
     } else {
       this.enter(-1);
     }*/

    this.validarPedimentoEnter();
  }
  /****************************************************/
  validarPedimentoEnter() {
    let aux = this.textoPedimento.trim();
    let indexAux: number;
    this.textoPedimento = aux;
    let cont = 0;
    let duplicado = this.buscarCodigoDuplicado(this.textoPedimento);
    if (duplicado) {
      for ( var i = 0; i < this.listaAux.length; i++) {
        if ( this.listaAux[i].folioEmpaque === this.textoPedimento) {
          this.copiaListaPedimentos[this.copiaListaPedimentos.length] = this.textoPedimento;
          indexAux = i;
        } else {
          cont ++;
        }
      }
      if (cont === this.listaAux.length) {
        this.mensaje = 'Folio incorrecto';
        this.activarPopUp = true;
      } else {
        this.enter(indexAux); /* Se manda allamar por que aquí se hacen todos los procesos */
      }
    } else {
      this.mensaje = 'Codigo duplicado';
      this.activarPopUp = true;
    }
    this.textoPedimento = undefined;
  }
  buscarCodigoDuplicado (elemento) {
    let i: number;
    if (this.copiaListaPedimentos.length === 0) {
      return true;
    } else {
      for (i = 0; i < this.copiaListaPedimentos.length; i++) {
        if (this.copiaListaPedimentos[i] === elemento) {
          return false;
        }
      }
      return true;
    }
  }
  /***************************************/
  txt(texto:string) {
    var obj: any;
    obj = new Object;
    obj.nombre = texto;
    this.textoPedimento = obj.nombre;
    console.log('<------->', this.textoPedimento);
  }
  enter(index: any) {
    this.seleccionarItemFD(index);
    let i = index;
    let BolsaTransito: any;
    let aux: string;
    let arrayAux: any;
    let listaAuxEmb: any;
    let pzas: any;
    /*console.log('Soy congelacion --->>>>', this.arraryCongelacion);
    this.indexAux = index;
    this.activarPopExitoso = false;
    this.activarPopUp = false;
    let i: number;
    aux = this.textoPedimento.trim();
    this.textoPedimento = aux;
                        /!*console.log('Soy aux  ---------', aux);*!/
                        // console.log('llega enter' + this.textoPedimento, '--->');
    let validarDuplicado: boolean;
    let tipoEstado: string;
    if (this.textoPedimento.length > 1) {
      this.escaneoNormal = false;
      this.escaneoCorrecto = true;
      this.cambioVistaEscaneo = true;
    } else {
      // console.log("Error al escanear codigo.");
      this.escaneoNormal = false;
      this.escaneoIncorrecto = true;
      setTimeout(() => {
        this.escaneoNormal = true;
        this.escaneoIncorrecto = false;
      }, 1000);
    }
    if (index === -1) {
      i = 0;
    } else {
      i = index;
    }*/
    // if (this.listaAux[i].folioEmpaque === this.textoPedimento) {
    // alert('codigo correcto');
    /*this.activarPopExitoso = true;*/
    //////////// condiciones si es codigo corresponde al que esta en el item
    if (this.vistaListaConge === true) {
      this.faltantes = true;
     /* if (this.pzasAlMomentoConge === 0) {
        BolsaTransito = 'Congelacion';
        this.emitEventScanear.emit(BolsaTransito);
      }*/
      // validarDuplicado = this.validarTextoPedimento(this.textoPedimento, this.listaAux);
      // if (validarDuplicado === false) {
      this.pzasAlMomentoConge = this.pzasAlMomentoConge + 1;
      pzas = this.listaAux[i].piezas;
      this.listaPakingList = {folio: this.valoresPacking.folio, piezas: pzas, tipo: this.valoresPacking.tipo};
      listaAuxEmb = {remisionar: this.listaAux[i].remisionar , idPedido: this.listaAux[i].idPedido, idEmbalarPedido: this.listaAux[i].idEmbalarPedido, folioTemporal: this.listaAux[i].folioTemporal, usuario: this.usuarioId, estado: 'Generar'};
      arrayAux = {embalar: listaAuxEmb, tipo: this.valoresPacking.tipo, folio: this.valoresPacking.folio};
      this.listaTotal.push(arrayAux);
      this.valorBotonAgregar(BolsaTransito);
      this.emitEventPiezas.emit(this.listaPakingList);
      if (this.pzasAlMomentoConge === this.pzasTotalesConge) {
        this.validarPorEmbalar();
        this.validarBoton();
        if (this.pzasTotalesRefri > 0) {
          this.seleccionarListaMostrar();
          BolsaTransito = 'Refrigeracion';
          this.emitEventScanear.emit(BolsaTransito);
        } else if (this.pzasTotalesambiente > 0) {
          this.seleccionarListaMostrar();
          BolsaTransito = 'Ambiente';
          this.emitEventScanear.emit(BolsaTransito);
        } else {
          this.faltantes = false;
          // this.activarPopExitoso = true;
        }
      } else {
        // this.activarPopExitoso = true;
      }
      this.piezasFaltantes.emit(this.faltantes);
      /* } else {
         this.mensaje = 'Codigo duplicado';
         this.activarPopUp = true;
       }*/
    } else if (this.vistaListaRefri) {
      this.faltantes = true;
      BolsaTransito = 'Refrigeracion';
      // validarDuplicado = this.validarTextoPedimento(this.textoPedimento, this.listaAux);
      //if (validarDuplicado === false) {
      this.pzasAlMomentoRefri = this.pzasAlMomentoRefri + 1;
      pzas = this.listaAux[i].piezas;
      this.listaPakingList = {folio: this.valoresPacking.folio, piezas: pzas, tipo: this.valoresPacking.tipo};
      listaAuxEmb = {remisionar: this.listaAux[i].remisionar , idPedido: this.listaAux[i].idPedido, idEmbalarPedido: this.listaAux[i].idEmbalarPedido, folioTemporal: this.listaAux[i].folioTemporal, usuario: this.usuarioId, estado: 'Generar'};
      arrayAux = {embalar: listaAuxEmb, tipo: this.valoresPacking.tipo, folio: this.valoresPacking.folio};
      this.listaTotal.push(arrayAux);
      this.emitEventPiezas.emit(this.listaPakingList);
      if (this.pzasAlMomentoRefri === this.pzasTotalesRefri) {
        this.validarPorEmbalar();
        this.validarBoton();
        if (this.pzasTotalesambiente > 0) {
          this.seleccionarListaMostrar();
          BolsaTransito = 'Ambiente';
          this.emitEventScanear.emit(BolsaTransito);
        } else {
          this.faltantes = false;
          // this.activarPopExitoso = true;
        }
      } else {
        // this.activarPopExitoso = true;
      }
      this.piezasFaltantes.emit(this.faltantes);
      this.valorBotonAgregar(BolsaTransito);
      /*} else {
        this.mensaje = 'Codigo duplicado';
        this.activarPopUp = true;
      }*/
    } else if (this.vistaListaAmbiente) {
      this.faltantes = true;
      BolsaTransito = 'Ambiente';
      // this.emitEventScanear.emit(BolsaTransito);
      // validarDuplicado = this.validarTextoPedimento(this.textoPedimento, this.listaAux);
      // if (validarDuplicado === false) {
      // this.activarPopExitoso = true;
      this.pzasAlMomentoAmbiente = this.pzasAlMomentoAmbiente + 1;
      pzas = this.listaAux[i].piezas;
      this.listaPakingList = {folio: this.valoresPacking.folio, piezas: pzas, tipo: this.valoresPacking.tipo};
      listaAuxEmb = {remisionar: this.listaAux[i].remisionar , idPedido: this.listaAux[i].idPedido, idEmbalarPedido: this.listaAux[i].idEmbalarPedido, folioTemporal: this.listaAux[i].folioTemporal, usuario: this.usuarioId, estado: 'Generar'};
      arrayAux = {embalar: listaAuxEmb, tipo: this.valoresPacking.tipo, folio: this.valoresPacking.folio};
      this.listaTotal.push(arrayAux);
      this.valorBotonAgregar(BolsaTransito);
      this.emitEventPiezas.emit(this.listaPakingList);
      if (this.pzasAlMomentoAmbiente === this.pzasTotalesambiente) {
        this.faltantes = false;
        this.validarPorEmbalar();
        // this.seleccionarListaMostrar();
        this.validarBoton();
      }
      this.piezasFaltantes.emit(this.faltantes);
    }
    ///////////// terminan
    /*} else {
      this.activarPopUp = true;
      this.mensaje = 'Codigo incorrecto';
    }*/
    this.textoPedimento = undefined;
    // console.log('Soy la lista que tienen todo el aux', this.listaAux[i]);
  }
  /***********************ESTE METODO VERIFICA SI YA SE ESCANEO ESE CODIGO ANTERIORMENTE****************/
  validarTextoPedimento (texto: string, listaEmb: any) {
    console.log('Soiy lista AUX----->>>', listaEmb );
    if (this.vistaListaConge === true) {
      if (this.arrayAuxConge.length > 0 ) {
        for (var i = 0; i < this.arrayAuxConge.length; i++) {
          if (this.arrayAuxConge[i] === texto) {
            // console.log('Soy elemento-->', this.arrayAuxConge[i]);
            return true; // RETORNA TRUE SI LO ENCONTRO, QUIERE DECIR QUE ESTA DUPLICADO
          }
        }
        this.arrayAuxConge[this.arrayAuxConge.length] = texto;
        if (this.listaIdPaquete.length > 0) {
          this.listaIdPaquete[this.listaIdPaquete.length] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
          this.listaEmbalar = {};
        } else {
          this.listaIdPaquete[0] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
        }
        return false; /// RETORNA FALSE SI NO LO ENCUENTRA Y ENTONCES SI SE PUEDE GUARDAR
      } else {
        this.arrayAuxConge[0] = texto;
        if (this.listaIdPaquete.length > 0) {
          this.listaIdPaquete[this.listaIdPaquete.length] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
        } else {
          this.listaIdPaquete[0] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
        }
        return false; /// RETORNA FALSE SI NO LO ENCUENTRA Y ENTONCES SI SE PUEDE GUARDAR
      }
    } else if (this.vistaListaRefri === true) {
      if (this.arrayAuxRefri.length > 0 ) {
        for (var i = 0; i < this.arrayAuxRefri.length; i++) {
          if (this.arrayAuxRefri[i] === texto) {
            // console.log('Soy elemento-->', this.arrayAuxRefri[i]);
            return true; // RETORNA TRUE SI LO ENCONTRO, QUIERE DECIR QUE ESTA DUPLICADO
          }
        }
        this.arrayAuxAmbiente[this.arrayAuxConge.length] = texto;
        if (this.listaIdPaquete.length > 0) {
          this.listaIdPaquete[this.listaIdPaquete.length] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
        } else {
          this.listaIdPaquete[0] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
        }
        return false; /// RETORNA FALSE SI NO LO ENCUENTRA Y ENTONCES SI SE PUEDE GUARDAR
      } else {
        this.arrayAuxRefri[0] = texto;
        if (this.listaIdPaquete.length > 0) {
          this.listaIdPaquete[this.listaIdPaquete.length] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
        } else {
          this.listaIdPaquete[0] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
        }
        return false; /// RETORNA FALSE SI NO LO ENCUENTRA Y ENTONCES SI SE PUEDE GUARDAR
      }
    } else if (this.vistaListaAmbiente === true) {
      if (this.arrayAuxAmbiente.length > 0 ) {
        for (var i = 0; i < this.arrayAuxAmbiente.length; i++) {
          if (this.arrayAuxAmbiente[i] === texto) {
            // console.log('Soy elemento-->', this.arrayAuxAmbiente[i]);
            return true; // RETORNA TRUE SI LO ENCONTRO, QUIERE DECIR QUE ESTA DUPLICADO
          }
        }
        this.arrayAuxConge[this.arrayAuxAmbiente.length] = texto;
        if (this.listaIdPaquete.length > 0) {
          this.listaIdPaquete[this.listaIdPaquete.length] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
        } else {
          this.listaIdPaquete[0] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
        }
        return false; /// RETORNA FALSE SI NO LO ENCUENTRA Y ENTONCES SI SE PUEDE GUARDAR
      } else {
        this.arrayAuxAmbiente[0] = texto;
        if (this.listaIdPaquete.length > 0) {
          this.listaIdPaquete[this.listaIdPaquete.length] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
        } else {
          this.listaIdPaquete[0] = listaEmb; /// Ira almacenando los id de los paquetes que ya se almacenaron
        }
        return false; /// RETORNA FALSE SI NO LO ENCUENTRA Y ENTONCES SI SE PUEDE GUARDAR
      }
    }
  }
  /****************Este metodo se encarga de revisar si se puede agregar otra hielera o bolsa*******************/
  valorBotonAgregar( tipo) {
    let piezasEmba = 0;
    let piezasPorEmb = 0;
    if (tipo === 'Ambiente') {
      if ((this.pzasAlMomentoRefri > 0) && (this.pzasAlMomentoRefri === this.pzasTotalesRefri) && (this.activarRefri === 1)) {
        piezasEmba = this.pzasAlMomentoRefri;
        piezasPorEmb = this.pzasTotalesRefri;
        this.activarRefri = 2;
      } else if ((this.pzasAlMomentoConge > 0) && (this.pzasAlMomentoConge === this.pzasTotalesConge) && (this.activarConge === 1)) {
        piezasEmba = this.pzasAlMomentoConge;
        piezasPorEmb = this.pzasTotalesConge;
        this.activarConge = 2;
      } else {
        piezasEmba = this.pzasAlMomentoAmbiente;
        piezasPorEmb = this.pzasTotalesambiente;
      }
    } else if (tipo === 'Refrigeracion' || tipo === 'Refrigeración') {
      if ((this.pzasAlMomentoConge > 0) && (this.pzasAlMomentoConge === this.pzasTotalesConge) && (this.activarConge === 1)) {
        piezasEmba = this.pzasAlMomentoConge;
        piezasPorEmb = this.pzasTotalesConge;
        this.activarConge = 2;
      } else {
        piezasEmba = this.pzasAlMomentoRefri;
        piezasPorEmb = this.pzasTotalesRefri;
      }
    } else if ((tipo === 'Congelacion') || (tipo === 'Congelación')) {
      piezasEmba = this.pzasAlMomentoConge;
      piezasPorEmb = this.pzasTotalesConge;
    }
    var i: number;
    for ( i = 0; i < this.listaTotal.length; i++) {
      if ((this.listaTotal[i].folio === this.valoresPacking.folio) && (piezasEmba < piezasPorEmb) && (tipo !== 'desactivar')) {
        this.activarBtnMas.emit(true);
        break;
      }
    }
    if (i === this.listaTotal.length) {
      this.activarBtnMas.emit(false);
    }
  }
  cerrarAlerta() {
    this.activarPopUp = false;
    this.hoja.nativeElement.focus();
    this.activarTextArea();
  }
  cerrarAlert() {
    this.popError = false;
  }
  cerrarPop($desactivar) {
    this.activarPopExitoso = $desactivar;
    this.activarTextArea();
  }
}
