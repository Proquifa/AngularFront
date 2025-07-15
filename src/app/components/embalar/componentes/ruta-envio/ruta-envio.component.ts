import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {SessionUser} from '../../../../services/session/session.service';
import {TrabajarRutasEnvioService} from '../../../trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio-informacion/trabajar-rutas-envio.services';
import {CoreContainerComponent} from '../../../core-container/core-container.component';
import {EmbalarService} from '../../../../services/embalar/embalar.service';
import {ComunService} from '../../../../services/comun/comun.service';

@Component({
  selector: 'pn-ruta-envio',
  templateUrl: './ruta-envio.component.html',
  styleUrls: ['./ruta-envio.component.scss']
})
export class RutaEnvioComponent implements OnInit {
  @Output() informacionDatos: EventEmitter<any> = new EventEmitter<any>();
  listaClientes: any[];
  idUsuario: any;
  listaColectarElementosAuxiliar: any[] = [];
  activarAlerta: boolean;
  mensaje: string;
  totalPacking: number;
  pahtDoc = 'http://proquifa.com.mx:51725/SAP/';
  // pahtDoc = "http://187.189.39.50:51725/SAP/";
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

  contacto: string = "";
  telefono: string = "";
  puesto: string = "";
  email: string = "";
  comentarios: string = "";
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
  activarBotonEnvio: boolean = false;
  validarPaquteria: boolean ;
   paqDistinta: boolean;
  etiquetaComentarios: boolean = true;
  validarcomentario: string;
  mostarPopUp: boolean[] = [];
  informacionEnvio = [
    {
      envio_numero_trackig: "",
      envio_archivo_generado: ""
    }
  ];
 usuario: any;
  reducirCadena: String;
  caracteres: any;
  numeroCaracteres: String;
  activar: boolean = false;
  archivo: any;
  informacionCompaniaArray = [
    {
      nombre_compania: "RYNDEM STUDIOS ejemplo realizar .....nnnnnn pruebas MAS PRUEBAS MAS NNNNNNN",
      contacto_compania: "Pedro Alejandro Hernández L.",
      cargo_compania: "Almacenista",
      ubicacion: "Toluca",
      zona: 'local'
    }
  ];
  codeEnvio: any;
  cityEnvio: any;
  peso: any;
  longitud: any;
  altura: any;
  ancho: any;
  numeroPosicion: any;
  validarnumerosEnvio = /^([0-9])*$/;
  folio_packing_list: string;
  focus: boolean = true;
  tipoEnviar: boolean = true;
  selectedEnvio: any;
  tiposEnvios: any = [
    /* { nombre: '--NINGUNO--', key: 0 }, */
    { nombre: 'DHL', key: 0 },
    { nombre: 'ESTAFETA', key: 1 },
    { nombre: 'FEDEX', key: 2 },
    { nombre: 'UPS', key: 3}
  ];
  cargarGuia: any;
  tipoEnvioCorrecto: boolean;
  guiaEnvio: any;
  datosContacto: any[] = [];
  datosInformacion: any[] = [];
  destino: any = [{
    pais: 'México', estado: 'JALISCO', delegacion: 'Guadalajara', CP: '44500', ruta: 'Guadalajara',
    calle: 'LA VILLA #1996,COLONIA CHAPALITA', num: '1996', colonia: 'Chapalita'
  }];
  activarSelect: boolean;
  cargarDocumento: any;
  activarPopFin: boolean ///Es la variable que activa el pop de finalizar
  @ViewChild("textarea") private textArea: ElementRef;
  constructor( private comunService: ComunService, private _trabajarRutasEnvioService: TrabajarRutasEnvioService, private coreComponent: CoreContainerComponent, private _embalar: EmbalarService) { }

  ngOnInit() {
    var obj: any;
    obj = new Object;
    obj.nombre = 'Seleccionar';
    this.selectedEnvio = obj;
    this.usuario = SessionUser.getInstance().getUser();
    this.obtenerDatosContacto();
  }

  realizarEnvioTipoMensajero(mensajeria, estado, indice) {
    console.log("entro a realizar el envio....");

    this.activarBtn = false;
    this.btnAceptar = true;

    // this.recibioMensajeria = mensajeria;
    this.recibioEstadoEnvio_Abreviacion = 'JA';
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
                                                let infoEstado = 'OA';

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

    if (this.recibioMensajeria == "UPS") {
      console.log("/****** UPS *****//");
      this.getRealizarEnvioUps();
      this.index = indice;
      this.validarPaquteria = false;
      this.paqDistinta = false;

    } else {
      if (this.recibioMensajeria == "FEDEX") {
        console.log("/****** FEDEX *****//");
        this.tipoGuardar = 'fedex';
        this.getRealizarEnvioFedex();
        this.index = indice;
        this.validarPaquteria = false;
        this.paqDistinta = false;
      } else if (this.recibioMensajeria == "DHL") {
        this.tipoGuardar = 'paqueteria';
        this.mostarPopUp[indice] = true;
        this.validarPaquteria = false;
        this.paqDistinta = true;
      } else {
        this.tipoGuardar = 'paqueteria';
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
        personName: this.datosContacto[0].contacto,
        companyName: 'Proquifa',
        phoneNumber: this.datosContacto[0].tel
      },
      address: {
        streetLines: [this.destino[0].calle],
        city: this.destino[0].delegacion,
        stateOrProvinceCode: this.recibioEstadoEnvio_Abreviacion,
        postalCode: this.destino[0].CP,
        countryCode: "MX"
      },
      peso: this.peso, /*peso: 2,*/  /*Se debe hacer aqui el envio con los datos recibidos*/
      length: this.longitud, /*length: 20,*/
      height: this.altura, /*height: 20,*/
      width: this.ancho, /*width: 20,*/
      customerReferenceClient: "",
      invoceNumber: "",
      poNumber: "",
      reintentos: 0,
      emisor: this.usuario["nombre"]
    }
    // console.log(info2);
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
          this.numeroTracking = data.current.TrackingNumber;
          if (this.numeroTracking && this.numeroTracking !== '' && this.numeroTracking !== undefined && this.numeroTracking !== null) {
            this.activarSelect = true;
          }
          let url = this.pahtDoc + 'DoctosCierre/RT/' + data.current.File;
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
          Description: "Description",
          Shipper: {
            Name: this.usuario["nombre"],
            AttentionName: "Shipper Attn Name",
            Phone: {
              Number: "5513151498",
              Extension: "1"
            },
            ShipperNumber: "6437V0",
            FaxNumber: "",
            Address: {
              AddressLine: "Jose Maria Morelos 164, Nino Jesus",
              City: "Mexico City",
              StateProvinceCode: "DF",
              PostalCode: "14080",
              CountryCode: "MX"
            }
          },
          ShipTo: {
//Para envío hacia adelante se aceptan 35 caracteres
// pero solo se imprimirán 30 caracteres en la etiqueta.
// Name:this.informacionCompaniaArray[0].nombre_compania,
            Name: this.datosContacto[0].contacto,
            AttentionName: "Proquifa GDL",
            Phone: {
              Number: this.datosContacto[0].tel != ""?this.datosContacto[0].tel:"N/D"
            },
            Address: {
              AddressLine: this.destino[0].calle.length > 35 ? this.destino[0].calle.substr(0,34):this.destino[0].calle,
              City: this.destino[0].delegacion,
              StateProvinceCode: this.recibioEstadoEnvio_Abreviacion,
              PostalCode: this.destino[0].CP,
              CountryCode: "MX"
            }
          },
          ShipFrom: {
            Name: this.usuario["nombre"],
            AttentionName: "Proquifa",
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
    this._trabajarRutasEnvioService.getRealizarEnvioUps(info_envio_ups).subscribe(
      data => {
        console.log(data);
        this.valor_tracking = data.ShipmentResponse.ShipmentResults.PackageResults.TrackingNumber;

        this.valor_base64 = data.ShipmentResponse.ShipmentResults.PackageResults.ShippingLabel.GraphicImage;
        this.guardarEtiquetaUPS();
        // this.obtenerArchivoUPS();
        this.numeroTracking = this.valor_tracking;
        if (this.numeroTracking && this.numeroTracking !== '' && this.numeroTracking !== undefined) {
          this.activarSelect = true;
        }
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
  /******ESTE METODO VA A RECUPERAR EL NOMBRE DEL ARCHIVO A VISUALIZAR -- guardarArchivo****/
  guardarEtiquetaUPS() {
    let dataVal = {
      nombre: this.valor_tracking,
      data1: this.valor_base64,
    };
    let cargarAux: any;
    this._trabajarRutasEnvioService.guardaEtiquetaUPS(dataVal).subscribe(
      data => {
        // this.informacionEnvio[0].envio_numero_trackig === this.numeroTracking;
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
  validarBotonEnvio() {
    let auxIndex = 1;
    let contador = 0;
    /*for (let item of this.codigosValidos[this.indexPacking]) {
      if (item) {
        contador++;
      }
    }*/
    if (this.validarPaquteria) {
      if ((this.recibioMensajeria !== 'Seleccionar') && (this.peso !== '') && (this.longitud !== '') && (this.altura !== '') && (this.ancho !== '') && (this.ingresoTracking !== '') && (this.peso !== undefined) && (this.longitud !== undefined) && (this.altura !== undefined) && (this.ancho !== undefined) && (this.ingresoTracking !== undefined)) {
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
      if ((this.recibioMensajeria !== 'Seleccionar') && (this.peso !== '') && (this.longitud !== '') && (this.altura !== '') && (this.ancho !== '') && (this.peso !== undefined) && (this.longitud !== undefined) && (this.altura !== undefined) && (this.ancho !== undefined)) {
        this.activarBotonEnvio = true;
      } else {
        this.activarBotonEnvio = false;
      }
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

      }
    }
    this.validarBotonEnvio();
  }

  cerrarAlert($event) {
    this.activarAlerta = false;
    this.textArea.nativeElement.focus();
  }
  recibeValosCombo(valor, tipo) {
    this.numGuia = '';
    this.ingresoTracking = '';
    this.activar = false;
    this.recibioMensajeria = valor.nombre;
    if (valor.nombre === 'FEDEX') {
      this.tipoGuardar = 'fedex';
    } else {
      this.tipoGuardar = 'paqueteria';
    }
    if (valor.nombre === 'UPS' || valor.nombre === 'FEDEX') {
      this.tipoEnvio = false;
      // this.tipoEnviar = false;
      this.validarPaquteria = false;
    } else  if (valor.nombre === 'DHL' || valor.nombre === 'ESTAFETA') {
      this.tipoEnvio = true;
      // this.tipoEnviar = false;
      this.validarPaquteria = true;
    } else {
      // this.tipoEnviar = true;
    }
    this.validarBotonEnvio();
  }
  /****RECIBE LOS DATOS DEL CONTACTO****/
  obtenerDatosContacto() {
    this._embalar.obtenerDatosContacto().subscribe(
      data => {
        this.datosContacto[0] = data.current;
        this.datosInformacion[0] = {ruta: 'Guadalajara', contacto : this.datosContacto[0].contacto, puesto: this.datosContacto[0].puesto, cliente: 'Proquifa Gdl'};
        this.informacionDatos.emit(this.datosInformacion);
      });
  }
  /****Recibe la documentación que se cargo****/

  recibeDocumentacion(archivo: any) {
    console.log(archivo);
    this.paqDistinta = true;
    this.cargarDocumento = archivo;
    this.archivo = archivo;
    this.validarBotonEnvio();
  }

  finalizar() {
    let numeroGuia = {noGuia: this.numGuia, mensajeria: this.recibioMensajeria};
    this.coreComponent.openModal(0);
    this._embalar.finalizarGDL(numeroGuia).subscribe(
      data => {
        if (this.validarPaquteria) {
          let numGuia = this.ingresoTracking;
          console.log('Soy numero de guia', numGuia);
          this._trabajarRutasEnvioService.uploadFile(numGuia, this.cargarDocumento, this.tipoGuardar).subscribe(
            dataFile => {
            });
        }
        if (data.current === true) {
          this.activarPopFinalizar();
        }
        this.coreComponent.closeModal(0);
      },
      error => {
        this.coreComponent.closeModal(0);
      });
  }
  activarPopFinalizar() {
    this.activarPopFin = true;
  }
  desactivarPop(desactivar) {
    this.activarPopFin = desactivar;
    this.comunService.finalizarEmb(true);
  }

}
