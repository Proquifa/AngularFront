import {OnInit, ElementRef, ViewChild, EventEmitter, Output, Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {TrabajarRutasEnvioService} from "./trabajar-rutas-envio.services";
import {Router} from "@angular/router";
import {CoreContainerComponent} from "../../../../core-container/core-container.component";
import {SessionUser} from '../../../../../services/session/session.service';
import {Parametros} from '../../../../../class/Parametros.class';
import {ComunService} from '../../../../../services/comun/comun.service';

@Component({
  selector: "pn-trabajar-rutas-envio-informacion",
  templateUrl: "./trabajar-rutas-envio-informacion.component.html",
  styleUrls: ["./trabajar-rutas-envio-informacion.component.scss"]
})
export class TrabajarRutasEnvioInformacionComponent implements OnInit {
  @Input() recibePiezasTot: number;
  @Input() totalesPacking: number;
  activar: boolean = false;
  numeroPosicion: any;
  pintarCodigo: boolean = false;
  @Output() validarPaquteria: boolean = false;
  @Output() regresarVistaP: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() paqDistinta: boolean;
  activarBotonEnvio: boolean = false;
  reducirCadena: String;
  caracteres: any;
  numeroCaracteres: String;
  file: String;
  index: any;
  popUp: boolean = false;
  numeroTracking: String = "";
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

//////variables div colectar elementos
  folio_packing_list: string;
  focus: boolean = true;
  @ViewChild("textarea") private textArea: ElementRef;
  @ViewChild("dato")
  private elementRef: ElementRef;
  @Output() event: EventEmitter<any> = new EventEmitter<any>();
  @Output() finalizarEnvio: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() actualizarInformacion: EventEmitter<any> = new EventEmitter<any>();
  etiquetaComentarios: boolean = false;
  validarcomentario: string;
  mostarPopUp: boolean[] = [];

  contacto: string = "";
  telefono: string = "";
  puesto: string = "";
  email: string = "";
  comentarios: string;
  btnAceptar: boolean = false;
  contador: number = 0;
  activarInputs: boolean = false;
  texto = "";

  packing_list: any[] = [];
  listaAuxiliar: any[] = [];
  infoCliente: any;
  datoRemove: any;

  codigoValido: any[];
  imgRealizaEnvio: any[];

  ingresoTracking: String;
  ingresoTrackingAux: String;
///// metodo ups
  recibioMensajeria: String;
  recibioEstadoEnvio_Abreviacion: String;

  public posts;
  activarBtn: boolean = false;
  pruebaIndex: any;


  auxDataClientCurrent: any[] = [];
  sumaDePackingList: any;
  datoPL: any;
  indexPacking: number = 0;
  colectarElemtos: any[] = [];
  colectarElemtosAux: any[] = [];
  codigosValidos: any [] = [];
  datosFormulario: any [] = [];
  btnsFinalizar: any [] = [];
  encabezadosPasckinList: any[] = [];
  codigosBarra: any [] = [];
  imgTipoValidacionArr: any[] = [];
  labelComentarios: boolean = true;
  cantidadPL: number = 0;
  tipoDeProducto: any[] = [];
  valoresData: any[] = [];
  valorInicial: string;
  lstDesactivadas: any [] = [];
  nombreEnvio: any;
  companyEnvio: any;
  telefonoEnvio: any;
  direccionEnvio: any;
  delegacionEnvio: any;
  provinciaEnvio: any;
  codigoEnvio: any;
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

  listaClientes: any[];
  idUsuario: any;
  listaColectarElementosAuxiliar: any[] = [];
  activarAlerta: boolean;
  mensaje: string;
  totalPacking: number;
  dir = new Parametros();
  pahtDoc = this.dir.rutaGeneral;
  objecFinalizar: any;
  numGuia: string;
  tipoEnvio: boolean;
  activarBarraProgreso: boolean = true;
  activarBarraPrioridades: boolean = true;
  activarAlertExit: boolean;
  val: number = 0;
  tipoGuardar: string;
  mensajeError: boolean;
  contactoInfo: string;
  idPendiente: any;
  mensajeria: string = 'Seleccionar';
  indiceLts: number;
  lstPendientes: any[] = [];
  lstPacking: any[] = [];
  estadoEnvio: string;
  usuario = SessionUser.getInstance().getUser();

  constructor(
    private router: Router,
    private _trabajarRutasEnvioService: TrabajarRutasEnvioService,
    private coreComponent: CoreContainerComponent,
    private comunService: ComunService
  ) {
  }


  ngOnInit() {
    this.estadoEnvio = '';
    this.obtenerPackingListClient();
    this.validarPaquteria = false;
    this.focus = true;
    this.vistaInicialActiva = true;

    console.log(this.packing_list);
    this.textArea.nativeElement.focus();
  }

  obtenerPackingListClient() {
    this.coreComponent.openModal(0);
    this._trabajarRutasEnvioService.obtenerPackingListClient().subscribe(
      data => {
        if (data.current && data.current !== null && data.current !== '') {
          console.log("valor de la lista :) " + data.current);
          this.comentarios = data.current['Comentarios'];
          this.colectarElemtosAux = [];
          this.encabezadosPasckinList = [];
          this.colectarElemtos = [];
          this.codigosValidos = [];
          this.lstPendientes = [];
          this.lstPacking = [];
          this.lstDesactivadas = [];
          this.auxDataClientCurrent = data.current.PackingList;
          this.infoCliente = data.current.Cliente;
          console.log("info 1 " + this.auxDataClientCurrent);
          console.log("info 2" + this.infoCliente);
          console.log("info 3" + data);
          console.log(data.current);
          console.log(this.infoCliente);
          let array = Object.getOwnPropertyNames(this.auxDataClientCurrent);
          this.totalPacking = array.length;
          this.sumaDePackingList = array.length;
          /***********************************************************/
          /*this.informacionCompaniaArray[0].nombre_compania = this.infoCliente.cliente;
          this.informacionCompaniaArray[0].contacto_compania = this.infoCliente.contacto;
          this.informacionCompaniaArray[0].cargo_compania = this.infoCliente.puesto;
          this.informacionCompaniaArray[0].zona = this.infoCliente.ruta;
          this.informacionCompaniaArray[0].ubicacion = this.infoCliente.zonaMensajeria;*/
          /***********************************************************/
          for (let datos of array) {
            let objetoAux: any = {};
            objetoAux["folio"] = datos;
            objetoAux["piezas"] = 0;
            objetoAux["p1"] = 0;
            objetoAux["p2"] = 0;
            objetoAux["p3"] = 0;
            this.colectarElemtos.push(this.auxDataClientCurrent[datos]);
            this.codigosValidos.push(new Array(this.auxDataClientCurrent[datos].length).fill(false));
            this.codigosValidos[this.codigosValidos.length - 1].splice(0, 0, false);
            console.log(this.codigosValidos);
            this.codigosBarra.push(new Array(this.auxDataClientCurrent[datos].length).fill(""));
            this.datosFormulario.push({contacto: "", telefono: "", puesto: "", email: ""});
            this.btnsFinalizar.push(false);
            for (let datos2 of this.auxDataClientCurrent[datos]) {
              objetoAux["piezas"] += datos2.cant;
              objetoAux["p1"] += datos2.p1;
              objetoAux["p2"] += datos2.p2;
              objetoAux["p3"] += datos2.p3;
            }

            this.encabezadosPasckinList.push(objetoAux);
          }

          this.colectarElemtos[0].forEach(element => {
            if (element.tipo === "Hielera Congelacion" || element.tipo === "Hielera Congelación") {
              element.tipo = "CONGELACIÓN";
              this.tipoDeProducto.push("Hielera");
              this.contador = element.cant;
              this.cantidadPL += this.contador;
              this.imgTipoValidacionArr.push(
                "./assets/Images/hielera_refri.svg"
              );
            } else if (element.tipo === "Hielera Refrigeracion" || element.tipo === "Hielera Refrigeración") {
              element.tipo = "CONGELACIÓN";
              this.tipoDeProducto.push("Hielera");
              this.contador = element.cant;
              this.cantidadPL += this.contador;
              this.imgTipoValidacionArr.push(
                "./assets/Images/hielera_refri.svg"
              );
            } else if (element.tipo === "Bolsa de transito") {
              element.tipo = "TRANSITO";
              this.tipoDeProducto.push("Bolsa");
              this.contador = element.cant;
              this.cantidadPL += this.contador;
              this.imgTipoValidacionArr.push(
                "./assets/Images/bolsa_ambiente.svg"
              );
            }

            let comentario = element.comentario;
            if (comentario.length > 0) {
              this.labelComentarios = false;
            } else {
              this.labelComentarios = true;
            }
          });

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

  informacionCompaniaArray = [
    {
      nombre_compania: "",
      contacto_compania: "",
      cargo_compania: "",
      ubicacion: "",
      zona: ''
    }
  ];
  informacionEnvio = [
    {
      envio_numero_trackig: "",
      envio_archivo_generado: ""
    }
  ];

  contactoArray = [
    {
      pais: "",
      estado: "",
      direccion: "",
      delegacion_municipio: "",
      codigo_postal: "",
      ruta: "",
      mensajeria: "",
      formacion: ".",
      nombre: "",
      puesto: "",
      depTo: "",
      telefono: "",
      email: "",
      comentario_envio: ""
    }
  ];

  cambiarPantalla() {
    this.vistaInicialActiva = false;
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
      var obj: any;
      obj = new Object;
      obj.nombre = this.colectarElemtosAux[0].mensajeria;
      this.selectedEnvio = obj;
      this.mensajeria = this.colectarElemtosAux[0].mensajeria;
    }
    /////
    this.idPendiente = "Guia-" + this.colectarElemtosAux[0].idPendiente;
    console.log(this.idPendiente);
    if (this.colectarElemtosAux[0].puesto === '' || this.colectarElemtosAux[0].puesto === undefined || this.colectarElemtosAux[0].puesto === null) {
      let separador = this.colectarElemtosAux[0].contacto.split('-');
      if (separador.lenght > 0) {
        this.contactoInfo = separador[2];
      } else {
        this.contactoInfo = separador[0];
      }

    } else {
      this.contactoInfo = this.colectarElemtosAux[0].contacto + '/' + this.colectarElemtosAux[0].puesto;
    }
    /****************************************************/
    this.datoPL = this.colectarElemtosAux[0].packingList;
    this.indexPacking = i;
    this.lstResultadoCotizaciones = [];
    this.listaAuxiliar = [];
    this.ingresoTracking = '';
    this.numeroTracking = '';
    this.valor_tracking = '';
    this.fileName = '';
    this.activarBtn = true;
    this.btnAceptar = false;
    this.datoRemove = 0;
    this.paqDistinta = false;
    /***************************/
    this.activar = false;
    this.peso = '';
    this.ancho = '';
    this.altura = '';
    this.longitud = '';
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

    this.recibioMensajeria = "";
    this.recibioEstadoEnvio_Abreviacion = null;

    this.folio_packing_list = this.folio_packing_list;
    this.activarBotonEnvio = false;

    this.contador = 0;
    if (this.lstResultadoCotizaciones[i] !== 'divFinalizar') {
      this.lstResultadoCotizaciones = [];
      this.lstResultadoCotizaciones = new Array(this.packing_list.length).fill("");
      for (let j = 0; j < this.lstDesactivadas.length; j++) {
          this.lstResultadoCotizaciones[this.lstDesactivadas[j]] = 'divFinalizar';
      }
      if(this.lstResultadoCotizaciones[i] !== 'divFinalizar') {
        this.lstResultadoCotizaciones[i] = 'divActive';
      }
    }

    this.listaAuxiliar = [];
    this.codigoValido = [];
    this.imgRealizaEnvio = [];
/////Activar la funcion de envio
    if (this.contadorM === 0) {
      if (this.colectarElemtosAux[0].mensajeria == "UPS") {
        this.validarPaquteria = false;
        this.tipoEnvio = false;
      } else {
        if (this.colectarElemtosAux[0].mensajeria == "FEDEX") {
          this.tipoGuardar = 'fedex';
          this.validarPaquteria = false;
          this.tipoEnvio = false;
        } else if (this.colectarElemtosAux[0].mensajeria == "DHL") {
          this.validarPaquteria = true;
          this.paqDistinta = true;
          this.tipoEnvio = true;
          this.tipoGuardar = 'paqueteria';
        } else {
          this.validarPaquteria = true;
          this.paqDistinta = true;
          this.tipoEnvio = true;
          this.tipoGuardar = 'paqueteria';
        }
      }
    }
    this.contadorM ++;
///Disminuir el tamaño de la cadena
    this.numeroCaracteres = this.informacionCompaniaArray[0].nombre_compania;
    this.reducirCadena = this.numeroCaracteres.substring(0, 34);

    console.log("valor  del input" + this.ingresoTracking);
  }

  /////////// este metodo se encarga de mostrar los datos de acuerdo a la lista que se selecciona
  mostrarListaImagenes(index) {
    this.colectarElemtos[index].forEach(element => {
      if (element.tipo === "Hielera Congelacion" || element.tipo === "Hielera Congelación" || element.tipo === "CONGELACIÓN") {
        element.tipo = "CONGELACIÓN";
        this.tipoDeProducto.push("Hielera");
        this.contador = element.cant;
        this.cantidadPL += this.contador;
        this.imgTipoValidacionArr.push(
          "./assets/Images/hielera_refri.svg"
        );
      } else if (element.tipo === "Hielera Refrigeracion" || element.tipo === "Hielera Refrigeración" || element.tipo === "REFRIGERACIÓN") {
        element.tipo = "REFRIGERACIÓN";
        this.tipoDeProducto.push("Hielera");
        this.contador = element.cant;
        this.cantidadPL += this.contador;
        this.imgTipoValidacionArr.push(
          "./assets/Images/hielera_refri.svg"
        );
      } else if (element.tipo === "Bolsa de transito" || element.tipo === "TRANSITO") {
        element.tipo = "TRANSITO";
        this.tipoDeProducto.push("Bolsa");
        this.contador = element.cant;
        this.cantidadPL += this.contador;
        this.imgTipoValidacionArr.push(
          "./assets/Images/bolsa_ambiente.svg"
        );
      }

      let comentario = element.comentario;
      if (comentario.length > 0) {
        this.labelComentarios = false;
      } else {
        this.labelComentarios = true;
      }
    });
  }

  /***********ESTE ES EL QUE TENIAN PARA FINALIZAR*********/
  public onSubmitFinalizar(formValue: FormGroup) {
    if (this.numeroTracking.length > 0) {
      this.btnAceptar = true;
    }
    if (this.btnAceptar == true) {
      this.onRemove();
//checar estoooo
      this.folio_packing_list = this.packing_list[0].folio;
      this.itemSelect(0);
      this.folio_packing_list = this.packing_list[0].folio;
      this.btnAceptar = false;
    } else {

    }
  }

  onRemove() {
    let indexRemove = this.packing_list.indexOf(this.numeroPosicion);
    console.log("Valor de indexRomove" + indexRemove);

    console.log("Se eliminara posicion " + this.datoRemove);
    alert(this.numeroPosicion); // I get correct index here
    this.packing_list.splice(this.numeroPosicion, 1);
    for (let eliminarDato = 0; eliminarDato < this.arreglo_numeros_tracking.length; eliminarDato++) {
      const element = this.arreglo_numeros_tracking[eliminarDato];
      console.log("elemet" + element.indexObjeto);
      console.log("dato1");
      console.log(eliminarDato);


      if (element.indexObjeto === this.numeroPosicion) {
        this.arreglo_numeros_tracking.splice(eliminarDato, 1);
        console.log("Eliminar DAto" + eliminarDato);
        console.log("Eliminar DAto" + element);

      } else {

      }

    }

    setTimeout(() => {

    }, 2000);

    this.numeroTracking = '';

    this.itemSelect(0);
    console.log("indexRemove" + this.numeroPosicion);
    this.activarBotonEnvio = false;
    for (let recorrido = 0; recorrido < this.packing_list.length; recorrido++) {
      const element = this.packing_list[recorrido];
      console.log(element.numeracion + "elemet");

    }
  }

  /****************************************************************/
  /*****************************NUEVO FINALIZAR************************/
  finalizar() {
    this.idUsuario = SessionUser.getInstance().getUser().getIdEmpleado();
    let id = parseInt(this.idUsuario);
    let obj = {
      idPendiente: this.colectarElemtosAux[0].idPendiente,
      idUsuario: id,
      numGuia: this.numGuia,
      packingList: this.colectarElemtosAux[0].packingList,
      mensajeria: this.mensajeria,
      lstPackingList: this.lstPacking,
      pendientes: this.lstPendientes
    };
    console.log('Soy lo qeu se va a enviar a finalizar-->', obj);
    this._trabajarRutasEnvioService.RegistrarTrEnvio(obj).subscribe(
      data => {
        if (this.validarPaquteria) {
          let numGuia = this.idPendiente;
          console.log('Soy numero de guia', numGuia);
          for (let i = 0; i < this.lstPendientes.length; i++) {
            numGuia = 'Guia-' + this.lstPendientes[i];
            this._trabajarRutasEnvioService.uploadFile(numGuia, this.cargarDocumento, this.tipoGuardar).subscribe(
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

  /****************************************************************/
  ngAfterViewInit(): void {
    // this.elementRef.nativeElement.focus();
  }

  enterAux() {
    let contador = 0;
    const aux = this.codigosBarraElemento.trim();
    this.codigosBarraElemento = aux;
    console.log(this.codigosBarraElemento, this.colectarElemtosAux);
    let validarDup = this.validarCodigoDuplicado(this.codigosBarraElemento);
    if (validarDup) {
      if (this.datoPL == this.codigosBarraElemento) {
        this.codigosValidos[this.indexPacking][0] = true;
        this.listaColectarElementosAuxiliar[this.listaColectarElementosAuxiliar.length] = this.codigosBarraElemento;
      } else {
        for (var i = 0; i < this.colectarElemtosAux.length; i++) {
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

  enter(i: any) {
    if (this.colectarElemtosAux[i].folio == this.codigosBarra[this.indexPacking][i].split("\n").join("").trim()) {
      this.codigosValidos[this.indexPacking][i] = true;
    } else {
      this.codigosValidos[this.indexPacking][i] = false;
      this.codigosBarra[this.indexPacking][i] = "";
    }
    this.validarFormulario();
    this.validarBotonEnvio();
  }

  validarFormulario() {
    this.contador = 0;
    for (let item of this.codigosValidos[this.indexPacking]) {
      if (item) {
        this.contador++;
      }
    }

    if (this.contador == this.codigosValidos[this.indexPacking].length) {
      /// this.activarBotonEnvio = true; /*Se comento por que el boton se debe activar cuando ya se llenaron los input*/
    } else {
      this.activarBotonEnvio = false;
    }
  }


  validarBotonFinalizar(mensajeria, estado, indice) {
    if (this.codigosValidos[this.indexPacking].length == this.contador) {
      console.log("Puede hacer Envio....");

      this.realizarEnvioTipoMensajero(mensajeria, estado, indice);
    }
  }

  realizarEnvioTipoMensajero(mensajeria, estado, indice) {
    console.log("entro a realizar el envio....");

    this.activarBtn = false;
    this.btnAceptar = true;

    //this.recibioMensajeria = mensajeria;
    this.recibioMensajeria = this.colectarElemtosAux[0].packingList;
    console.log("el numero de folio pl es " + this.recibioMensajeria);
    estado = this.colectarElemtosAux[0].estado;
    console.log(this.colectarElemtosAux[0]);
    console.log("nunero  de folio " + this.colectarElemtosAux[0].folio);
    this.recibioEstadoEnvio_Abreviacion = estado;
    this.estadoEnvio = estado;
    if (estado == 'AGUASCALIENTES') {
      let infoEstado = 'AG';
      this.recibioEstadoEnvio_Abreviacion = infoEstado;

    } else {
      if (estado == 'BAJA CALIFORNIA NORTE') {
        let infoEstado = 'BN';

        this.recibioEstadoEnvio_Abreviacion = infoEstado;
      } else {
        if (estado == 'BAJA CALIFORNIA SUR') {
          let infoEstado = 'BS';

          this.recibioEstadoEnvio_Abreviacion = infoEstado;
        } else {
          if (estado == 'COAHUILA') {
            let infoEstado = 'CH';

            this.recibioEstadoEnvio_Abreviacion = infoEstado;
          } else {
            if (estado == 'CHIHUAHUA') {
              let infoEstado = 'CI';

              this.recibioEstadoEnvio_Abreviacion = infoEstado;
            } else {
              if (estado == 'COLIMA') {
                let infoEstado = 'CL';

                this.recibioEstadoEnvio_Abreviacion = infoEstado;
              } else {
                if (estado == 'CAMPECHE') {
                  let infoEstado = 'CP';

                  this.recibioEstadoEnvio_Abreviacion = infoEstado;
                } else {
                  if (estado == 'CHIAPAS') {
                    let infoEstado = 'CS';

                    this.recibioEstadoEnvio_Abreviacion = infoEstado;
                  } else {
                    if (estado == 'DISTRITO FEDERAL') {
                      let infoEstado = 'DF';

                      this.recibioEstadoEnvio_Abreviacion = infoEstado;
                    } else {
                      if (estado == 'DURANGO') {
                        let infoEstado = 'DG';
                        this.recibioEstadoEnvio_Abreviacion = infoEstado;
                      } else {
                        if (estado == 'GUERRERO') {
                          let infoEstado = 'GE';

                          this.recibioEstadoEnvio_Abreviacion = infoEstado;
                        } else {
                          if (estado == 'GUANAJUATO') {
                            let infoEstado = 'GJ';

                            this.recibioEstadoEnvio_Abreviacion = infoEstado;
                          } else {
                            if (estado == 'HIDALGO') {
                              let infoEstado = 'HD';

                              this.recibioEstadoEnvio_Abreviacion = infoEstado;

                            } else {
                              if (estado == 'JALISCO') {
                                let infoEstado = 'JA';

                                this.recibioEstadoEnvio_Abreviacion = infoEstado;
                              } else {
                                if (estado == 'MICHOACAN') {
                                  let infoEstado = 'MC';

                                  this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                } else {
                                  if (estado == 'MORELOS') {
                                    let infoEstado = 'MR';

                                    this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                  } else {
                                    if (estado == 'MEXICO') {
                                      let infoEstado = 'MX';

                                      this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                    } else {
                                      if (estado == 'NAYARIT') {
                                        let infoEstado = 'NA';

                                        this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                      } else {
                                        if (estado == 'NUEVO LEON') {
                                          let infoEstado = 'NL';

                                          this.recibioEstadoEnvio_Abreviacion = infoEstado;

                                        } else {
                                          if (estado == 'OAXACA') {
                                            let infoEstado = 'OA';

                                            this.recibioEstadoEnvio_Abreviacion = infoEstado;

                                          } else {
                                            if (estado == 'PUEBLA') {
                                              let infoEstado = 'QE';

                                              this.recibioEstadoEnvio_Abreviacion = infoEstado;
                                            } else {
                                              if (estado == 'QUERETARO') {
                                                let infoEstado = 'QT';

                                                this.recibioEstadoEnvio_Abreviacion = infoEstado;

                                              } else {
                                                if (estado == 'QUINTANA ROO') {
                                                  let infoEstado = 'QI';

                                                  this.recibioEstadoEnvio_Abreviacion = infoEstado;

                                                } else {
                                                  if (estado == 'SINALOA') {
                                                    let infoEstado = 'SI';

                                                    this.recibioEstadoEnvio_Abreviacion = infoEstado;

                                                  }
                                                  else {
                                                    if (estado == 'SAN LUIS POTOSI') {
                                                      let infoEstado = 'SL';

                                                      this.recibioEstadoEnvio_Abreviacion = infoEstado;

                                                    } else {
                                                      if (estado == 'SONORA') {
                                                        let infoEstado = 'SO';

                                                        this.recibioEstadoEnvio_Abreviacion = infoEstado;

                                                      } else {
                                                        if (estado == 'TAMAULIPAS') {
                                                          let infoEstado = 'TA';

                                                          this.recibioEstadoEnvio_Abreviacion = infoEstado;

                                                        } else {

                                                          if (estado == 'TABASCO') {
                                                            let infoEstado = 'TB';

                                                            this.recibioEstadoEnvio_Abreviacion = infoEstado;

                                                          } else {
                                                            if (estado == 'TLAXCALA') {
                                                              let infoEstado = 'TL';

                                                              this.recibioEstadoEnvio_Abreviacion = infoEstado;

                                                            } else {
                                                              if (estado == 'VERACRUZ') {
                                                                let infoEstado = 'VC';

                                                                this.recibioEstadoEnvio_Abreviacion = infoEstado;

                                                              } else {
                                                                if (estado == 'YUCATAN') {
                                                                  let infoEstado = 'YU';

                                                                  this.recibioEstadoEnvio_Abreviacion = infoEstado;

                                                                } else {
                                                                  if (estado == 'ZACATECAS') {
                                                                    let infoEstado = 'ZA';

                                                                    this.recibioEstadoEnvio_Abreviacion = infoEstado;

                                                                  }
                                                                }

                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

    }
  let tipoM: string;
   if (this.mensajeria !== 'Seleccionar') {
     tipoM = this.mensajeria ;
   } else {
     tipoM = this.colectarElemtosAux[0].mensajeria;
   }
      if (tipoM == "UPS") {
        console.log("/****** UPS *****//");
        this.getRealizarEnvioUps();
        this.index = indice;
        this.validarPaquteria = false;
        this.paqDistinta = false;

      } else {
        if (tipoM == "FEDEX") {
          console.log("/****** FEDEX *****//");
          this.getRealizarEnvioFedex();
          this.index = indice;
          this.validarPaquteria = false;
          this.paqDistinta = false;
        } else if (tipoM == "DHL") {
          this.mostarPopUp[indice] = true;
          this.validarPaquteria = false;
          this.paqDistinta = true;
        } else {
          this.paqDistinta = true;
          console.log("valor paqueteria" + this.paqDistinta);

          // .incluirTrackingArreglo();
          console.log(this.arreglo_numeros_tracking);

          this.validarPaquteria = true;
          this.mostarPopUp[indice] = true;
        }
        this.mostarPopUp[indice] = false;
      }

    setTimeout(() => {
      console.log("POSICIÓN", this.numeroPosicion);

      let objeto = {
        numeroTracking: this.numeroTracking,
        indexObjeto: this.numeroPosicion,
        valor: false
      }
      console.log("OBJETO******");
      console.log(objeto);

      this.arreglo_numeros_tracking.push(objeto);
      this.arreglo_numeros_trackingCopia.push(objeto);
// console.log(this.numeroTracking);
      console.log("ARREGLO******");
      console.log(this.arreglo_numeros_tracking);
    }, 5000);

    this.mostarPopUp.push(false);
  }

  /******************Este metodo se ocupa para hacer la llamada a FEDEX***************/
  getRealizarEnvioFedex() {
    // this.activarBotonEnvio = true;
    this.mostarPopUp.push(true);
    this.popUp = true;

    let info2 = {
      contact: {
        personName: this.colectarElemtosAux[0].contacto,
        companyName: this.colectarElemtosAux[0].cliente,
        phoneNumber: this.colectarElemtosAux[0].tel == "ND" ? "" : this.colectarElemtosAux[0].tel == null ? "" : this.colectarElemtosAux[0].tel
      },
      address: {
        streetLines: [this.colectarElemtosAux[0].calle],
        city: this.colectarElemtosAux[0].delegacion,
        stateOrProvinceCode: this.estadoEnvio,
        postalCode: this.colectarElemtosAux[0].cp,
        countryCode: this.colectarElemtosAux[0].codPais
      },
      peso: this.peso, /*peso: 2,*/  /*Se debe hacer aqui el envio con los datos recibidos*/
      length: this.longitud, /*length: 20,*/
      height: this.altura, /*height: 20,*/
      width: this.ancho, /*width: 20,*/
      customerReferenceClient: "",
      invoceNumber: "",
      poNumber: "",
      reintentos: 0,
      emisor: this.usuario["nombre"],
      idPendiente: this.idPendiente,
      pendientes: this.lstPendientes
    }

    for(let item of this.colectarElemtosAux){
      if(info2.customerReferenceClient != ""){
        info2.customerReferenceClient += ","+item.factura;
      }else{
        info2.customerReferenceClient += item.factura;
      }
    }

    console.log(info2);
    this.coreComponent.openModal(0);
    this._trabajarRutasEnvioService.getRealizarEnvioFedex(info2).subscribe(
      data => {
        // console.log(data);
        if (data.current === false) {
          this.coreComponent.closeModal(0);
          this.mensaje = 'El servicio de Fedex no esta disponible en este momento, favor de hacer la carga manual';
          this.activarAlerta = true;
          this.validarPaquteria = true;
          this.paqDistinta = true;
          this.tipoEnvio = true;
        } else {
          console.log('Soy el numero de guia --->', this.numGuia);
          this.numGuia = data.current.TrackingNumber;
          // this.numeroTracking = data.current.TrackingNumber;
          this.numeroTracking = this.idPendiente;
           let url = this.pahtDoc + 'DoctosCierre/RT/' + data.current.File;
          // let url = this.comunService.obtenerRuta();
          this.cargarGuia = [{path: url, name: data.current.File}];
          this.activar = true;
          this.activarBotonEnvio = false; /// Se desabilita el vboton de enviar
          this.activarInputs = true; // Se desabilitan los inputs
          // this.getEnviarTrackingNumber();
          this.coreComponent.closeModal(0);
        }
      },
      error => {
        this.coreComponent.closeModal(0);
        // console.log(error);
      }
    );
  }

  getEnviarTrackingNumber() {



// this.numeroTracking = "";

    this._trabajarRutasEnvioService.obtenerTrackingNumber().subscribe(
      data => {

        this.numeroTracking = data.current;
        this.numGuia = data.current;
        console.log("FEDEX********");
        console.log(data);

        this.informacionEnvio[0].envio_numero_trackig == this.numeroTracking;
        this.valor_tracking = this.numeroTracking + '.pdf';
        // console.log(this.contador + "valor de contador");
        this.caracteres = this.valor_tracking.length;
        // console.log("valor del tracking" + this.caracteres);
        // console.log(this.valor_tracking);
        if (this.codigosBarra.length == this.contador && this.caracteres != 0) {
          // console.log("valor tracking" + this.valor_tracking);

          // console.log("Entro a la validacion (Estoy en FEDEX.....) ");
          // console.log(this.numeroTracking);
          this.btnAceptar = true;
        }
        this.enviarFileGuideShip();
      },
      error => {
        // console.log(error);
      }
    );
  }


  enviarFileGuideShip() {
    this._trabajarRutasEnvioService.enviarFileGuideShip().subscribe(
      data => {
        console.log(data);
        /* this.cargarGuia = [this.dataURLtoFile(data.current, 'GuiaEnvio.pdf')];
         // this.cargarGuia[0].path = "GuiaEnvio.pdf";
         console.log( this.cargarGuia);*/
        /// Se activa para mostrar la guia
        this.activar = true;
        this.activarBotonEnvio = false; /// Se desabilita el vboton de enviar
        this.activarInputs = true; // Se desabilitan los inputs
      },
      error => {
        console.log(error);
      }
    );
  }

  dataURLtoFile(dataurl, filename) {
    let bstr = atob(dataurl);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    let file: File = new File([u8arr], filename, {type: "application/pdf"});
    return file;
  }

  incluirTrackingArreglo(tracking) {
    this.ingresoTracking = tracking;
    this.ingresoTrackingAux = this.ingresoTracking.trim();
    let guiaStrin = this.ingresoTrackingAux.toString();
    this.numGuia = guiaStrin;
    console.log("input");
    console.log("filename" + this.ingresoTracking);
    let objetoInput = {
      numeroTracking: this.ingresoTracking,
      indexObjeto: this.numeroPosicion,
      valor: false
    }
    console.log("tt" + this.ingresoTracking);

    if (this.ingresoTracking.length == 10) {
      this.fileName = this.ingresoTracking;
      console.log("formo objeto" + objetoInput);
      this.arreglo_numeros_tracking.push(objetoInput);
      console.log(this.arreglo_numeros_tracking);

    }
    console.log("valor paqueteria" + this.paqDistinta);
    this.validarBotonEnvio();
  }

  obtenerArchivoUPS() {
    this._trabajarRutasEnvioService.obtenerArchivoUPS().subscribe(
      data => {
        this.guiaEnvio = data;
        this.cargarGuia = [this.guiaEnvio.current];
        this.cargarGuia = [this.dataURLtoFile(data.current, 'GuiaEnvio.pdf')];
      },
      error => {
        console.log(error);
      }
    );
  }

  getRealizarEnvioUps() {


    if (this.colectarElemtosAux[0].tel == null) {
      this.colectarElemtosAux[0].tel = "";

    }
    // this.activarBotonEnvio = true;
    console.log(this.usuario);
    this.nombre_envio = this.usuario["nombre"];
    this.mostarPopUp.push(true);
    this.popUp = true;
    let info_envio_ups = {
      UPSSecurity: {
        UsernameToken: {
          Username: "ryndem.ups",
          Password: "Mexico2018"
        },
        ServiceAccessToken: {
          AccessLicenseNumber: "ED52772FFECE6EAC"
        }
      },
      ShipmentRequest: {
        Request: {
          RequestOption: "validate",
          TransactionReference: {
            CustomerContext: "Your Customer Context"
          }
        },
        Shipment: {
//La Descripción de Bienes para el envío. Se aplica a envíos internacionales y nacionales.
//Proporcione una descripción detallada de los artículos que se envían para documentos y no documentos.
//Ejemplos: "informes anuales" y "tornillos de acero de 9 mm".
          Description: " ",
          Shipper: {
            Name: this.usuario["nombre"],
            AttentionName: "PROQUIFA",
            Phone: {
              Number: "5513151498",
              Extension: "111"
            },
            ShipperNumber: "6437V0",
            FaxNumber: "",
            Address: {
              AddressLine: "Jose Maria Morelos 164, Nino Jesus",
              City: "CDMX",
              StateProvinceCode: "CDMX",
              PostalCode: "14080",
              CountryCode: "MX"
            }
          },
          ShipTo: {
//Para envío hacia adelante se aceptan 35 caracteres
// pero solo se imprimirán 30 caracteres en la etiqueta.
// Name:this.informacionCompaniaArray[0].nombre_compania,
            Name: this.colectarElemtosAux[0].contacto,
            AttentionName: this.colectarElemtosAux[0].cliente,
            Phone: {
              Number: this.colectarElemtosAux[0].tel != "" ? this.colectarElemtosAux[0].tel.split(' ').join('+').substr(0, 15) : "N/D"
            },
            Address: {
              AddressLine: this.colectarElemtosAux[0].calle.length > 35 ? this.colectarElemtosAux[0].calle.substr(0, 34) : this.colectarElemtosAux[0].calle,
              City: this.colectarElemtosAux[0].delegacion,
              StateProvinceCode: this.recibioEstadoEnvio_Abreviacion,
              PostalCode: this.colectarElemtosAux[0].cp,
              CountryCode: "MX"
            }
          },
          ShipFrom: {
            Name: this.usuario["nombre"],
            AttentionName: "PROQUIFA",
            Phone: {
              Number: "5513151498"
            },
            FaxNumber: "",
            Address: {
              AddressLine: "Jose Maria Morelos 164, Nino Jesus",
              City: "Mexico City",
              StateProvinceCode: "DF",
//Length: 2...5
              PostalCode: "42855",
              CountryCode: "MX"
            }
          },
          PaymentInformation: {
            ShipmentCharge: {
              Type: "01",
              BillShipper: {
                AccountNumber: "6437V0"
              }
            }
          },
          Service: {
            Code: "65",
            Description: "Express"
          },
          Package: {
            Description: "Description",
            Packaging: {
              Code: "02",
              Description: "Description"
            },
            Dimensions: {
              UnitOfMeasurement: {
                Code: "CM",
                Description: "centimeters"
              },
              Length: "7",
              Width: "5",
              Height: "2"
            },
            PackageWeight: {
              UnitOfMeasurement: {
                Code: "KGS",
                Description: "Kilograms"
              },
              Weight: "10"
            }
          }
        },
        LabelSpecification: {
          LabelImageFormat: {
            Code: "GIF",
            Description: "GIF"
          },
          HTTPUserAgent: ""
        }
      }
    }
    console.log(info_envio_ups);
    console.log(info_envio_ups.ShipmentRequest.Shipment.ShipTo.Phone.Number);
    this._trabajarRutasEnvioService.getRealizarEnvioUps(info_envio_ups).subscribe(
      data => {
        console.log(data);
        this.valor_tracking = data.ShipmentResponse.ShipmentResults.PackageResults.TrackingNumber;

        this.valor_base64 = data.ShipmentResponse.ShipmentResults.PackageResults.ShippingLabel.GraphicImage;
        this.guardarEtiquetaUPS();
        // this.obtenerArchivoUPS();
        this.numeroTracking = this.valor_tracking;
        this.valor_tracking = this.numeroTracking + '.pdf';
        console.log(this.contador + "valor de contador");
        this.caracteres = this.valor_tracking.length;
        console.log("valor del tracking" + this.caracteres);
        console.log(this.valor_tracking);


      },
      error => {
        console.log(error);
      }
    );
    setTimeout(() => {
    }, 4000);
    if (this.codigosBarra.length == this.contador && this.caracteres != 0) {
      console.log("valor tracking" + this.valor_tracking);
      console.log("Entro a la validacion (Estoy en ups.....) ");
      console.log(this.numeroTracking);
      this.btnAceptar = true;
    }
  }

  recibeContacto(texto: any, tipoInput: string) {
    var obj: any;
    obj = new Object();
    obj.tipo = tipoInput;

    if (tipoInput == "peso") {
      if (this.validarnumerosEnvio.test(this.texto)) {
        this.peso = texto.trim();
        // console.log("valido");
      }

      // this.validarSiNumero(this.peso);
    } else if (tipoInput == "longitud") {
      if (this.validarnumerosEnvio.test(this.texto)) {
        this.longitud = texto.trim();
        // console.log("valido");
      }
    } else if (tipoInput == "altura") {
      if (this.validarnumerosEnvio.test(this.texto)) {
        this.altura = texto.trim();
        // console.log("valido");
      }
    } else if (tipoInput == "ancho") {
      if (this.validarnumerosEnvio.test(this.texto)) {
        this.ancho = texto.trim();
        /* // console.log("valido");

         this.email = this.valoresDataEnvio[this.indexPacking].mail;
         // console.log(this.email);

         this.contacto = this.listaClientes[this.indexPacking].nombre;
         // console.log(this.contacto);
         this.nombreEnvio = this.valoresDataEnvio[this.indexPacking].contacto;
         // console.log(this.nombreEnvio);
         this.cityEnvio = this.listaClientes[this.indexPacking].pais;
         // console.log(this.cityEnvio);
         this.telefonoEnvio = this.valoresDataEnvio[this.indexPacking].tel;
         // console.log(this.telefonoEnvio);
         this.direccionEnvio = this.valoresDataEnvio[this.indexPacking].calle;
         // console.log(this.direccionEnvio);
         this.delegacionEnvio = this.valoresDataEnvio[
           this.indexPacking
           ].delegacion;
         // console.log(this.delegacionEnvio);
         this.provinciaEnvio = this.valoresDataEnvio[this.indexPacking].estado;
         // console.log(this.provinciaEnvio);
         this.codigoEnvio = this.valoresDataEnvio[this.indexPacking].cp;
         // console.log(this.codigoEnvio);
         this.codeEnvio = "MX";
         // console.log(this.codeEnvio);*/
      }
    }
    this.validarBotonEnvio();
  }
  validarEscaneo() {
    let contador = 0;
    for (let item of this.codigosValidos[this.indexPacking]) {
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
  validarBotonEnvio() {
    let auxIndex = 1;
    let contador = 0;
    for (let item of this.codigosValidos[this.indexPacking]) {
      if (item) {
        contador++;
      }
    }
    if (this.validarPaquteria) {
      if ((this.lstPacking.length === this.colectarElemtos.length) && (this.peso !== '') && (this.longitud !== '') && (this.altura !== '') && (this.ancho !== '') && (this.ingresoTracking !== '') && (this.peso !== undefined) && (this.longitud !== undefined) && (this.altura !== undefined) && (this.ancho !== undefined) && (this.ingresoTracking !== undefined)) {
        this.activar = true;
      } else {
        this.activar = false;
        this.archivo = undefined;
      }
      if (this.activar && this.archivo.length > 0) {
         this.btnAceptar = true;
      } else {
        this.btnAceptar = false;
      }
    } else {
      if ((this.lstPacking.length === this.colectarElemtos.length) && (this.peso !== '') && (this.longitud !== '') && (this.altura !== '') && (this.ancho !== '') && (this.peso !== undefined) && (this.longitud !== undefined) && (this.altura !== undefined) && (this.ancho !== undefined)) {
        this.activarBotonEnvio = true;
      } else {
        this.activarBotonEnvio = false;
      }
    }
  }

  recibeDocumentacion(archivo: any) {
    console.log(archivo);
    this.paqDistinta = true;
    this.cargarDocumento = archivo;
    this.archivo = archivo;
    this.validarBotonEnvio();
  }

  /******ESTE METODO VA A RECUPERAR EL NOMBRE DEL ARCHIVO A VISUALIZAR -- guardarArchivo****/
  guardarEtiquetaUPS() {
    let dataVal = {
      nombre: this.idPendiente,
      data1: this.valor_base64,
      pendientes: this.lstPendientes
    };
    console.log(this.idPendiente);
    let cargarAux: any;
    this._trabajarRutasEnvioService.guardaEtiquetaUPS(dataVal).subscribe(
      data => {
        this.informacionEnvio[0].envio_numero_trackig === this.numeroTracking;
        console.log("este es el numero de folio " + data.current.folio)
        //this.auxDataClientCurrent = data.current.PackingList;
        // this.infoCliente = data.current.Cliente;
        /*********SE RECUPERA EL NOMBRE DEL ARCHIVO*******/
        let url;
        this.guiaEnvio = data.current;
        let guiaAux = this.guiaEnvio;
        let arr = guiaAux.split('.');
        this.numGuia = arr[0];
        console.log('Soy el numero de guia --->', this.numGuia);
        url = this.pahtDoc + 'DoctosCierre/RT/' + this.guiaEnvio;
        this.cargarGuia = [{path: url, name: 'Guia.pdf'}];
        this.activarBotonEnvio = false; /// Se desabilita el vboton de enviar
        this.activarInputs = true; // Se desabilitan los inputs
        this.activar = true;
      }, error => {
        console.log(error);
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
  /*Recibir tipo de envio*/
  recibeValosCombo(datos, tipo) {
    this.mensajeria = datos.nombre;
      ///// Activar la funcion de envio
      if (datos.nombre === 'UPS') {
        this.validarPaquteria = false;
        this.tipoEnvio = false;
      } else if (datos.nombre === 'FEDEX') {
          this.tipoGuardar = 'fedex';
          this.validarPaquteria = false;
          this.tipoEnvio = false;
      } else if (datos.nombre === 'DHL' || datos.nombre === 'ESTAFETA') {
          this.validarPaquteria = true;
          this.paqDistinta = true;
          this.tipoEnvio = true;
          this.tipoGuardar = 'paqueteria';
      }
      this.validarBotonEnvio();
  }
}
