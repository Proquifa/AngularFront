import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SessionUser} from '../../../../services/session/session.service';
import {EnvioPorClienteService} from '../../../../services/trabajar-ruta/envio-por-cliente.service';
import {CoreContainerComponent} from '../../../core-container/core-container.component';

@Component({
  selector: 'pn-finalizar-envio-cliente',
  templateUrl: './finalizar-envio-cliente.component.html',
  styleUrls: ['./finalizar-envio-cliente.component.scss']
})
export class FinalizarEnvioClienteComponent implements OnInit {
  @Output() validarPaquteria: boolean = false;
  @Output() finalizarEnvio: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() regresarVistaP: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() paqDistinta: boolean;
  @Input() idCliente: number;
  @Input() totalesBarra: any;
  @ViewChild('textarea') private textArea: ElementRef;
  folio_packing_list: string;
  focus: boolean = true;
  recibePiezasTot: number;
  totalesPacking: number;
  activar: boolean = false;
  numeroPosicion: any;
  pintarCodigo: boolean = false;
  activarBotonEnvio: boolean = false;
  reducirCadena: String;
  caracteres: any;
  numeroCaracteres: String;
  file: String;
  index: any;
  popUp: boolean = false;
  numeroTracking: String = '';
  valor_tracking: String;
  fileName: String;
  arreglo_numeros_tracking: any[] = [];
  arreglo_numeros_trackingCopia: any[] = [];
  valor_base64: any;
  nombre_envio: String;
  guiaEnvio: any;
  indexAux: number;
  cargarGuia: any;
  cargarDocumento: any;
  archivo: any;
  lstResultadoCotizaciones: any[] = [];
  vistaInicialActiva: boolean = true;
  selectedEnvio: any;
  contadorM = 0;
  tiposEnvios: any = [
    /* { nombre: '--NINGUNO--', key: 0 }, */
    { nombre: 'DHL', key: 0 },
    { nombre: 'ESTAFETA', key: 1 },
    { nombre: 'FEDEX', key: 2 },
    { nombre: 'UPS', key: 3}
  ];
  comentarios: string;
  codigoValido: any[];
  imgRealizaEnvio: any[];
  activarBarraPrioridades: boolean;
  activarBarraProgreso: boolean;
  indexPacking = 0;
  colectarElemtos: any[] = [];
  colectarElemtosAux: any[] = [];
  codigosValidos: any [] = [];
  datosFormulario: any [] = [];
  btnsFinalizar: any [] = [];
  encabezadosPasckinList: any[] = [];
  codigosBarra: any [] = [];
  imgTipoValidacionArr: any[] = [];
  labelComentarios: boolean = true;
  cantidadPL = 0;
  tipoDeProducto: any[] = [];
  valoresData: any[] = [];
  valorInicial: string;
  lstDesactivadas: any [] = [];
  nombreEnvio: any;
  telefonoEnvio: any;
  direccionEnvio: any;
  delegacionEnvio: any;
  provinciaEnvio: any;
  codigoEnvio: any;
  datosCliente: any[] = [];
  codeEnvio: any;
  cityEnvio: any;
  peso: any;
  longitud: any;
  altura: any;
  ancho: any;
  valoresDataEnvio: any[] = [];
  validarnumerosEnvio = /^([0-9])*$/;
  codigosBarraElemento: string; // Se uso para recuperar lo del texArea
  popUpLocalizar: boolean = false;
  pruebaIndex: any;
  listaClientes: any[];
  idUsuario: any;
  listaColectarElementosAuxiliar: any[] = [];
  activarAlerta: boolean;
  mensaje: string;
  totalPacking: number;
  objecFinalizar: any;
  numGuia: string;
  tipoEnvio: boolean = false;
  activarAlertExit: boolean;
  val = 0;
  tipoGuardar: string;
  mensajeError: boolean;
  contactoInfo: string;
  idPendiente: any;
  mensajeria: string = 'Seleccionar';
  indiceLts: number;
  lstPendientes: any[] = [];
  lstPacking: any[] = [];
  btnAceptar: boolean;
  ingresoTracking: string;
  ingresoTrackingAux: string;
  auxDataClientCurrent: any[] = [];
  sumaDePackingList: any;
  datoPL: any;
  packing_list: any[] = [];
  listaAuxiliar: any[] = [];
  infoCliente: any;
  datoRemove: any;
  contador = 0;
  activarBtn: boolean;
  activarInputs: boolean;
  activeCuenta: boolean;
  dataMeter: any;
  rutaPath ='http://proquifa.com.mx:51725/SAP/';
  //rutaPath = 'http://187.189.39.50:51725/SAP/';
  usuario = SessionUser.getInstance().getUser();
  guiaDoc: any[] = [];
  constructor(private _serviceEnvio: EnvioPorClienteService, private coreComponent: CoreContainerComponent) { }

  ngOnInit() {
    this.activarInputs = true;
    this.activeCuenta = true;
    this.activarBarraPrioridades = true;
    this.obtenerPackingListClient();
  }
  ngOnChanges() {
    if (this.totalesBarra !== undefined && this.totalesBarra !== null && this.totalesBarra.length > 0) {
      if (this.recibePiezasTot !== this.totalesBarra[0].hechas || this.totalesPacking !== this.totalesBarra[0].totales) {
        this.recibePiezasTot = this.totalesBarra[0].hechas;
        this.totalesPacking = this.totalesBarra[0].totales;
        this.activarBarraProgreso = true;
      }
    }
  }
  obtenerPackingListClient() {
    this.coreComponent.openModal(0);
    this._serviceEnvio.obtenerPackingList(this.idCliente).subscribe(
      data => {
        // const arrayAux = Object.getOwnPropertyNames(data.current['PackingList']);
        if (data.current && data.current !== null && data.current !== '') {
          this.comentarios = data.current['Comentarios'];
          console.log('valor de la lista :) ' + data.current);
          this.colectarElemtosAux = [];
          this.encabezadosPasckinList = [];
          this.colectarElemtos = [];
          this.codigosValidos = [];
          this.lstPendientes = [];
          this.lstPacking = [];
          this.lstDesactivadas = [];
          this.auxDataClientCurrent = data.current.PackingList;
          this.infoCliente = data.current.Cliente;
          console.log('info 1' + this.auxDataClientCurrent);
          console.log('info 2' + this.infoCliente);
          console.log('info 3' + data);
          console.log(data.current);
          console.log(this.infoCliente);
          const array = Object.getOwnPropertyNames(this.auxDataClientCurrent);
          this.datosCliente = this.auxDataClientCurrent[array[0]];
          //// Validar campos vacios
          this.dataMeter = this.datosCliente[0].envio;
          const path = this.rutaPath + 'Guias/' + this.datosCliente[0].guia + '.pdf';
          console.log('Guia: ', path )
          if (this.datosCliente[0].envio.tipo === 'Guia') {
            this.activeCuenta = false;
            this.tipoEnvio = false;
            this.activar = true;
            this.numGuia = this.datosCliente[0].numero;
            this.guiaDoc = [{path: path, name: this.datosCliente[0].guia + '.pdf'}];
          } else {
            this.activeCuenta = true;
            this.tipoEnvio = true;
            this.guiaDoc = null;
          }
          if (this.datosCliente[0].tel === undefined || this.datosCliente[0].tel === null || this.datosCliente[0].tel === '') {
            this.datosCliente[0].tel = 'ND';
          }
          if (this.datosCliente[0].puesto === undefined || this.datosCliente[0].puesto === null || this.datosCliente[0].puesto === '') {
            this.datosCliente[0].puesto = 'ND';
            const separador = this.datosCliente[0].contacto.split('-');
            if (separador.lenght > 0) {
              this.contactoInfo = separador[2];
            } else {
              this.contactoInfo = separador[0];
            }
          } else {
            this.contactoInfo = this.datosCliente[0].contacto + '/' + this.datosCliente[0].puesto;
          }

          if (this.datosCliente[0].departamento === undefined || this.datosCliente[0].departamento === null || this.datosCliente[0].departamento === '') {
            this.datosCliente[0].departamento = 'ND';
          }
          /////
          this.totalPacking = array.length;
          this.sumaDePackingList = array.length;
          for (let datos of array) {
            const objetoAux: any = {};
            objetoAux['folio'] = datos;
            objetoAux['piezas'] = 0;
            objetoAux['p1'] = 0;
            objetoAux['p2'] = 0;
            objetoAux['p3'] = 0;
            this.colectarElemtos.push(this.auxDataClientCurrent[datos]);
            this.codigosValidos.push(new Array(this.auxDataClientCurrent[datos].length).fill(false));
            this.codigosValidos[this.codigosValidos.length - 1].splice(0, 0, false);
            console.log(this.codigosValidos);
            this.codigosBarra.push(new Array(this.auxDataClientCurrent[datos].length).fill(''));
            this.datosFormulario.push({contacto: '', telefono: '', puesto: '', email: ''});
            this.btnsFinalizar.push(false);
            for (let datos2 of this.auxDataClientCurrent[datos]) {
              objetoAux['piezas'] += datos2.cant;
              objetoAux['p1'] += datos2.p1;
              objetoAux['p2'] += datos2.p2;
              objetoAux['p3'] += datos2.p3;
            }

            this.encabezadosPasckinList.push(objetoAux);
          }
          this.mostrarListaImagenes(0);
          this.itemSelect(0);

          this.valoresData.forEach(element => {
            this.listaAuxiliar.push(element.folio);
          });
          this.coreComponent.closeModal(0);
        } else {
          this.coreComponent.closeModal(0);
          this.regresarVistaP.emit(true);
        }
      },
      error => {
        console.log(error);
        // terminar loading false
        this.coreComponent.closeModal(0);
      }
    );
  }
  ////////////// Este metodo es para cambiar de packingList
  itemSelect(i) {
    this.indiceLts = i;
    this.indexAux = i;
    this.textArea.nativeElement.focus();
    this.mostrarListaImagenes(i); //// Se llama al metodo que muestra lo que trae la lista
    this.colectarElemtosAux = this.colectarElemtos[i];
    /// Agregar campo de inicio para la lista de mensajerias
    if (this.contadorM === 0) {
      let obj: any;
      obj = new Object;
      obj.nombre = this.colectarElemtosAux[0].mensajeria;
      this.selectedEnvio = obj;
      this.mensajeria = this.colectarElemtosAux[0].mensajeria;
    }
    /////
    this.idPendiente = 'Guia-' + this.colectarElemtosAux[0].idPendiente;
    console.log(this.idPendiente);
    /****************************************************/
    this.datoPL = this.colectarElemtosAux[0].packingList;
    this.indexPacking = i;
    this.lstResultadoCotizaciones = [];
    this.listaAuxiliar = [];
    this.numeroTracking = '';
    this.valor_tracking = '';
    this.fileName = '';
    this.activarBtn = true;
    this.btnAceptar = false;
    this.datoRemove = 0;
    /***************************/
    this.activar = false;
    this.valorInicial = '';
    /***************************/
    this.arreglo_numeros_tracking.forEach(element => {

      if (i === element.indexObjeto) {
        this.pruebaIndex = i;
        this.datoRemove = element.indexObjeto;
        this.btnAceptar = true;
        this.numeroTracking = element.numeroTracking;
        this.valor_tracking = this.numeroTracking + '.pdf';
        this.activar = false;
        this.activarBtn = element.valor;
        this.pintarCodigo = true;
      }

    });
    this.folio_packing_list = this.folio_packing_list;
    this.activarBotonEnvio = false;

    this.contador = 0;
    if (this.lstResultadoCotizaciones[i] !== 'divFinalizar') {
      this.lstResultadoCotizaciones = [];
      this.lstResultadoCotizaciones = new Array(this.packing_list.length).fill('');
      for (let j = 0; j < this.lstDesactivadas.length; j++) {
        this.lstResultadoCotizaciones[this.lstDesactivadas[j]] = 'divFinalizar';
      }
      if (this.lstResultadoCotizaciones[i] !== 'divFinalizar') {
        this.lstResultadoCotizaciones[i] = 'divActive';
      }
    }

    this.listaAuxiliar = [];
    this.codigoValido = [];
    this.imgRealizaEnvio = [];
    this.contadorM ++;
  }
  /////////// este metodo se encarga de mostrar los datos de acuerdo a la lista que se selecciona
  mostrarListaImagenes(index) {
    this.colectarElemtos[index].forEach(element => {
      if (element.tipo === 'Hielera Congelacion' || element.tipo === 'Hielera Congelación' || element.tipo === 'CONGELACIÓN') {
        element.tipo = 'CONGELACIÓN';
        this.tipoDeProducto.push('Hielera');
        this.contador = element.cant;
        this.cantidadPL += this.contador;
        this.imgTipoValidacionArr.push(
          './assets/Images/hielera_refri.svg'
        );
      } else if (element.tipo === 'Hielera Refrigeracion' || element.tipo === 'Hielera Refrigeración' || element.tipo === 'REFRIGERACIÓN') {
        element.tipo = 'REFRIGERACIÓN';
        this.tipoDeProducto.push('Hielera');
        this.contador = element.cant;
        this.cantidadPL += this.contador;
        this.imgTipoValidacionArr.push('./assets/Images/hielera_refri.svg');
      } else if (element.tipo === 'Bolsa de transito' || element.tipo === 'TRANSITO') {
        element.tipo = 'TRANSITO';
        this.tipoDeProducto.push('Bolsa');
        this.contador = element.cant;
        this.cantidadPL += this.contador;
        this.imgTipoValidacionArr.push('./assets/Images/bolsa_ambiente.svg');
      }

      const comentario = element.comentario;
      if (comentario.length > 0) {
        this.labelComentarios = false;
      } else {
        this.labelComentarios = true;
      }
    });
  }
  incluirTrackingArreglo(tracking) {
    this.ingresoTracking = tracking.trim();
    this.ingresoTrackingAux = this.ingresoTracking.trim();
    const guiaStrin = this.ingresoTrackingAux.toString();
    this.numGuia = guiaStrin;
    console.log('input');
    console.log('filename' + this.ingresoTracking);
    const objetoInput = {
      numeroTracking: this.ingresoTracking,
      indexObjeto: this.numeroPosicion,
      valor: false
    }
    console.log('tt' + this.ingresoTracking);

    if (this.ingresoTracking.length === 10) {
      this.fileName = this.ingresoTracking;
    }
    this.validarBotonEnvio();
  }
  /*Recibir tipo de envio*/
  recibeValosCombo(datos, tipo) {
    this.mensajeria = datos.nombre;
    ///// Activar la funcion de envio
    this.validarBotonEnvio();
  }
  validarBotonEnvio() {
    if ((this.lstPacking.length === this.colectarElemtos.length)) {
      this.activar = true;
    } else {
      this.activar = false;
      // this.archivo = undefined;
    }

   if (this.activar && ( this.guiaDoc !== null ||  (this.archivo !== undefined && this.archivo.length > 0 && this.peso !== undefined && this.peso !== null && this.longitud !== null))) {
      this.btnAceptar = true;
    } else {
      this.btnAceptar = false;
    }
  }
  recibeDocumentacion(archivo: any) {
    console.log(archivo);
    // this.paqDistinta = true;
    this.cargarDocumento = archivo;
    this.archivo = archivo;
    this.validarBotonEnvio();
  }
  recibeContacto(texto: any, tipoInput: string) {
    let obj: any;
    obj = new Object();
    obj.tipo = tipoInput;

    if (tipoInput === 'peso') {
        this.peso = texto.trim();
    } else if (tipoInput === 'longitud') {
        this.longitud = texto.trim();
    } else if (tipoInput === 'altura') {
        this.altura = texto.trim();
    } else if (tipoInput === 'ancho') {
        this.ancho = texto.trim();
    }
    this.validarBotonEnvio();
  }
  enterAux() {
    let contador = 0;
    const aux = this.codigosBarraElemento.trim();
    this.codigosBarraElemento = aux;
    console.log(this.codigosBarraElemento, this.colectarElemtosAux);
    const validarDup = this.validarCodigoDuplicado(this.codigosBarraElemento);
    if (validarDup) {
      if (this.datoPL === this.codigosBarraElemento) {
        this.codigosValidos[this.indexPacking][0] = true;
        this.listaColectarElementosAuxiliar[this.listaColectarElementosAuxiliar.length] = this.codigosBarraElemento;
      } else {
        for (let i = 0; i < this.colectarElemtosAux.length; i++) {
          if (this.colectarElemtosAux[i].folio === this.codigosBarraElemento) {
            this.codigosValidos[this.indexPacking][i + 1] = true;
            this.listaColectarElementosAuxiliar[this.listaColectarElementosAuxiliar.length] = this.codigosBarraElemento; // Agregar a la lista auxiliar
          } else {
            contador++;
          }
        }
      }

      if (contador === this.colectarElemtosAux.length) {
        this.mensaje = 'Folio incorrecto';
        this.activarAlerta = true;
      }
    } else {
      // alert('Elemento duplicado');
      this.mensaje = 'Folio duplicado';
      this.activarAlerta = true;
    }
    this.codigosBarraElemento = '';
    this.validarBotonEnvio();
    this.validarEscaneo();
  }

  validarCodigoDuplicado(elemento) {
    let i: number;
    if (this.listaColectarElementosAuxiliar.length === 0) {
      return true;
    } else {
      for (i = 0; i < this.listaColectarElementosAuxiliar.length; i++) {
        console.log(this.listaColectarElementosAuxiliar[i], elemento);
        if (this.listaColectarElementosAuxiliar[i] === elemento) {
          return false;
        }
      }
      return true;
    }
  }
  validarEscaneo() {
    let contador = 0;
    for (const item of this.codigosValidos[this.indexPacking]) {
      if (item) {
        contador++;
      }
    }
    if (contador === this.codigosValidos[this.indexPacking].length) {
      if (this.lstResultadoCotizaciones[this.indiceLts] !== 'divFinalizar') {
        this.lstPendientes.push(this.colectarElemtosAux[0].idPendiente);
        this.lstDesactivadas.push(this.indiceLts);
        this.lstPacking.push(this.colectarElemtosAux[0].packingList);
      }
      this.lstResultadoCotizaciones[this.indiceLts] = 'divFinalizar';
    }
    this.validarBotonEnvio();
  }
  finalizar() {
    this.idUsuario = SessionUser.getInstance().getUser().getIdEmpleado();
    const obj = {
      idPendiente: this.colectarElemtosAux[0].idPendiente,
      idUsuario: this.idUsuario ,
      numGuia: this.numGuia,
      packingList: this.colectarElemtosAux[0].packingList,
      mensajeria: this.mensajeria,
      lstPackingList: this.lstPacking,
      pendientes: this.lstPendientes
    };
    console.log('Soy lo que se va a enviar a finalizar-->', obj);
    this._serviceEnvio.RegistrarTrEnvioPagoCliente(obj).subscribe(
        data => {
          this.tipoGuardar = 'Paqueteria';
          let numGuia = this.idPendiente;
          console.log('Soy numero de guia', numGuia);
          for (let i = 0; i < this.lstPendientes.length; i++) {
            numGuia = 'Guia-' + this.lstPendientes[i];
            if (this.datosCliente[0].envio.tipo !== 'Guia' && this.cargarDocumento !== null) {
              this._serviceEnvio.uploadFile(numGuia, this.cargarDocumento, this.tipoGuardar).subscribe(
                dataFile => {
                });
            }
          }
        if (data.current === true) {
          /**ACTIVAR ALERTA DE OPERACION EXITOSA**/
          this.activarAlertExit = true;
        }
      });
  }
  cerrarAlert($event) {
    this.activarAlerta = false;
    this.textArea.nativeElement.focus();
  }
  cerrarPop($event) {
    this.val = 2;
    this.activarInputs = false;
    // this.limpiarVariables();
    this.finalizarEnvio.emit(true);
    setTimeout(() => {
      this.activarBarraPrioridades = false;
      this.activarBarraProgreso = false;
    }, 100);
    setTimeout(() => {
      this.activarBarraPrioridades = true;
      this.activarBarraProgreso = true;
    }, 100);
    this.obtenerPackingListClient();
    this.activarAlertExit = false;
  }
}
