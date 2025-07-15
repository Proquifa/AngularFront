import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Parametros } from '../../../../class/Parametros.class';
import { EmbalarService } from '../../../../services/embalar/embalar.service';
import { SessionUser } from '../../../../services/session/session.service';
import { ElectronService } from 'ngx-electron';
import {ComunService} from '../../../../services/comun/comun.service';
import {CoreContainerComponent} from '../../../core-container/core-container.component';
import {depDef} from "@angular/compiler/src/view_compiler/provider_compiler";




@Component({
  selector: 'pq-bolsa-contenedora-packing-list',
  templateUrl: './bolsa-contenedora-packing-list.component.html',
  styleUrls: ['./bolsa-contenedora-packing-list.component.scss']
})
export class BolsaContenedoraPackingListComponent implements OnInit {
 @Input() valoresCLiente: any;
 @Output() cambiarVista: EventEmitter<any> = new EventEmitter<any>();
 @Output() cambiarVistaEnvio: EventEmitter<any> = new EventEmitter<any>();
  arrayidPedido = new Array<any>();
  activarPopVerificar: boolean; // Activa el pop de pregunta si la impresión es correcta
  bolsaContenedora: boolean;
  detalles: boolean;
  valor: string;
  titulo: string = "";
  mostrarFooter: boolean = true;
  footerCBorde: boolean;
  footerSBorde: boolean;
  colorBoton: boolean = true;
  validacionDeImpresion: boolean = true;
  btnFinalizar: boolean;
  btnGdl: boolean;
  btnImprimir: boolean = true;
  param: Parametros = new Parametros();
  estado: string;
  destino: any;
  arrayPPedidos: any[] = [];
  arrayPedidos = new Array<any>();
  arrayCertificados = new Array<any>();
  arrayHoja = new Array<any>();
  arrayFacturas = new Array<any>();
  arrayPakingList = new Array<any>();
  arrayRemisiones = new Array<any>();
  arrayEvidenciaCFDI = new Array<any>();
  arrayEntregas = new Array<any>();
  arrayTodo = new Array<any>();
  arrayPathPedidosAux = new Array<any>();
  arrayPathPedidos = new Array<any>();
  arrayPathFacturas = new Array<any>();
  arrayPathCertificados = new Array<any>();
  arrayPathHojas = new Array<any>();
  arrayPathPakingList = new Array<any>();
  arrayPathEntregas = new Array<any>();
  arrayPathRemisiones = new Array<any>();
  arrayPathEvidencia = new Array<any>();
  arrayFolioPedidos = new Array<any>();
  arrayFolioFacturas = new Array<any>();
  arrayFolioCertificados = new Array<any>();
  arrayFolioHojas = new Array<any>();
  arrayFolioPacking = new Array<any>();
  arrayFolioEntregas = new Array<any>();
  arrayFolioRemisiones = new Array<any>();
  arrayFolioEvidencia = new Array<any>();
  arrayPathTodos = new Array<any>();
  arrayFolios = new Array<any>();
  arrayRutas = new Array<any>();
  activarRemision: boolean;
  activarEvidencia: boolean;
  ruta: string = 'http://proquifa.com.mx:51725/SAP/';
  rutaGlass: string = 'http://proquifa.com.mx:51725/SAP/';
  path: any;
   rutaV: any;
  paquete: any;
  usuarioId: any;
  activarPopFin: boolean; /// Es la variable que activa el pop de finalizar
  printPedido:boolean = true;
  noPrintPedido:boolean;
  printCertificado:boolean = true;
  noPrintCertidficado:boolean;
  printHoja:boolean = true;
  noPrintHoja:boolean;
  printFacturas:boolean = true;
  noPrintFacturas:boolean;
  printPacking:boolean = true;
  noPrintPacking:boolean;
  _maximizer: Boolean = false;
  _fullScreen: Boolean = false;
  totCopiadPedido = 0;
  totCopiasFac =  0;
  textoNumCopPed: string;
  textoNumCopFac: string;
  totCopias: string;
  activarEnvio: boolean;
  activarPopFinGdl: boolean;
  Cfdi: boolean;
  datosCfdi: any;
  tipoFinalizar: boolean;
  activarHojaSeg: boolean;
  activarCertificado: boolean;
  activeMedidas: boolean;
  dateMeter: any;
  validarEnvio: number;
  idPedido: any;
  constructor(private coreComponent: CoreContainerComponent, private _embalar: EmbalarService, private  _electronService: ElectronService, private  _insertarPendienteService: EmbalarService, private comunService: ComunService) {
    this.bolsaContenedora = true;
  }

  ngOnInit() {
   this.usuarioId = SessionUser.getInstance().getUser().getIdEmpleado();
      this.maximizer();
    const idUsuarioLogueado = SessionUser.getInstance().getUser().getIdEmpleado();
    this.estado = 'Generar';
    this.param.idUsuarioLogueado = idUsuarioLogueado;
    this.param.estado = this.estado;
    this.generarDocumentos(this.param);
    this.obtenerFolioPorUsuario(idUsuarioLogueado);

  }
  ngOnChanges() {
    this.llenarPaquete();
 }

  // mostrarDetalles(){
  //   this.bolsaContenedora = false;
  //   this.detalles = true;
  // }

  mostrarDetalles(valor: string) {
    this.totCopias = '';
    this.titulo = valor;
    this.arrayRutas = [];
    this.arrayFolios = [];

    if (valor === 'Pedido') {
      if (this.arrayPathPedidosAux[0] !== undefined) {
        this.totCopias = this.textoNumCopPed;
        this.detalles = true;
        this.bolsaContenedora = false;
        this.mostrarFooter = false;
        Array.prototype.push.apply(this.arrayRutas, this.arrayPathPedidosAux);
        Array.prototype.push.apply(this.arrayFolios, this.arrayFolioPedidos);
      }
    } else if (valor === 'Facturas') {
      if (this.arrayPathFacturas[0] !== undefined) {
        this.totCopias = this.textoNumCopFac;
        this.detalles = true;
        this.bolsaContenedora = false;
        this.mostrarFooter = false;
        Array.prototype.push.apply(this.arrayRutas, this.arrayPathFacturas);
        Array.prototype.push.apply(this.arrayFolios, this.arrayFolioFacturas);
      }
    } else if (valor === 'Evidencia') {
      this.detalles = true;
      this.bolsaContenedora = false;
      this.mostrarFooter = false;
      Array.prototype.push.apply(this.arrayRutas, this.arrayPathEvidencia);
      Array.prototype.push.apply(this.arrayFolios, this.arrayFolioEvidencia);
    } else if (valor === 'Remisiones') {
      this.detalles = true;
      this.bolsaContenedora = false;
      this.mostrarFooter = false;
      Array.prototype.push.apply(this.arrayRutas, this.arrayPathRemisiones);
      Array.prototype.push.apply(this.arrayFolios, this.arrayFolioRemisiones);
    } else if (valor === 'Certificados') {
      if (this.arrayPathCertificados[0] !== undefined) {
        this.detalles = true;
        this.bolsaContenedora = false;
        this.mostrarFooter = false;
        Array.prototype.push.apply(this.arrayRutas, this.arrayPathCertificados);
        Array.prototype.push.apply(this.arrayFolios, this.arrayFolioCertificados);
      }
    } else if (valor === 'Hoja de Seguridad') {
      if (this.arrayPathHojas[0] !== undefined) {
        this.detalles = true;
        this.bolsaContenedora = false;
        this.mostrarFooter = false;
        Array.prototype.push.apply(this.arrayRutas, this.arrayPathHojas);
        Array.prototype.push.apply(this.arrayFolios, this.arrayFolioHojas);
      }
    } else if (valor === 'Packing List') {
      if (this.arrayPathPakingList[0] !== undefined) {
        this.detalles = true;
        this.bolsaContenedora = false;
        this.mostrarFooter = false;
        Array.prototype.push.apply(this.arrayRutas, this.arrayPathPakingList);
        Array.prototype.push.apply(this.arrayFolios, this.arrayFolioPacking);
      }
    } else if (valor === 'Entregas') {
      if (this.arrayPathEntregas[0] !== undefined) {
        this.detalles = true;
        this.bolsaContenedora = false;
        this.mostrarFooter = false;
        Array.prototype.push.apply(this.arrayRutas, this.arrayPathEntregas);
        Array.prototype.push.apply(this.arrayFolios, this.arrayFolioEntregas);
      }
    }

  }
  validarImpresion() {
    let archivo: any;
    // this.colorBoton= false;
    if (this.validacionDeImpresion === true) {
   /* if (this.arrayPathPedidosAux[0] !== undefined) {
      for (let j: number = 0; j < this.totCopiadPedido; j++) {
        for (let i: number = 0; i < this.arrayPathPedidosAux.length; i++) {
          // setTimeout(() => {
          this.imprimirHorizontal(this.arrayPathPedidosAux[i]);
          // }, 5000);
        }
      }
     }
     if (this.arrayPathFacturas[0] !== undefined) {
       for (let j: number = 0; j < this.totCopiasFac; j++) {
         for (let i: number = 0; i < this.arrayPathFacturas.length; i++) {
           // setTimeout(() => {
           this.imprimirHorizontal(this.arrayPathFacturas[i]);
           // }, 5000);
         }
       }
     }
     if (this.arrayPathCertificados[0] !== undefined) {
       for (let i: number = 0; i < this.arrayPathCertificados.length; i++) {
         this.imprimirVertical(this.arrayPathCertificados[i]);
       }
     }
     if (this.arrayPathHojas[0] !== undefined) {
       for (let i: number = 0; i < this.arrayPathHojas.length; i++) {
         this.imprimirVertical(this.arrayPathHojas[i]);
       }
     }
     if (this.arrayPathPakingList[0] !== undefined) {
       for (let i: number = 0; i < this.arrayPathPakingList.length; i++) {
         // setTimeout(() => {
           this.imprimirVertical(this.arrayPathPakingList[i]);
         // }, 5000);
       }

      }*/
      if (this.rutaV.toLowerCase() === 'guadalajara') {
        this.btnGdl = true;
      } else {
        this.btnFinalizar = true;
      }
      this.btnImprimir = false;
    } else if (this.validacionDeImpresion === false) {
      this.btnFinalizar = false;
      this.colorBoton = false;
    }
  }

  generarDocumentos(parametros: Parametros) {
    let pzaPedido: string;
    let pzaFactura: string;
      this.coreComponent.openModal(1);
    const pedidos = new Array<string>();
    this._embalar.generarDocumentos(parametros).subscribe(
      data => {
        debugger;
        if (data.current.documentos) {
          console.log(data.current);
          this.arrayTodo = data.current.documentos;
          this.totCopiadPedido = data.current.restricciones.numCopiasPedido;
          this.totCopiasFac = data.current.restricciones.numCopiasFactura;
          if (this.totCopiadPedido === 1) {
            pzaPedido = 'Copia';
          } else {
            pzaPedido = 'Copias';
          }
          if (this.totCopiasFac === 1) {
            pzaFactura = 'Copia';
          } else {
            pzaFactura = 'Copias';
          }
          this.textoNumCopPed = this.totCopiadPedido + ' ' + pzaPedido;
          this.textoNumCopFac = this.totCopiasFac + ' ' + pzaFactura;
          this.filtraDocumentos(this.arrayTodo);
          // this.coreComponent.closeModal(0);
        } else {
          this.textoNumCopPed = this.totCopiadPedido + ' ' + 'copias';
          this.textoNumCopFac = this.totCopiasFac + ' ' + 'copias';
        }
        /******VALIDACIONES PARA LOS POPS DEL CFDI*****/
        if (data.current.CFDI && data.current.CFDI.length > 0) {

          this.datosCfdi = data.current.CFDI;
          this.Cfdi = true;
        }
          this.coreComponent.closeModal(1);
      }, error => {
        console.log(error);
        this.coreComponent.closeModal(1);
      }
    );

  }

  filtraDocumentos(lista: any) {
    let years: string;
    console.log(lista);
  //  this.arrayPedidos = lista["Pedido"];
    this.arrayPakingList = lista['PackingList'];
    this.arrayCertificados = lista['Certificado'];
    this.arrayHoja = lista['Hoja'];
    this.arrayFacturas = lista['Factura'];
    this.arrayRemisiones = lista['Remision'];
    this.arrayEvidenciaCFDI = lista['Evidencia'];
    this.arrayEntregas = lista['RegistroEntregaControlado'];
    //
    // if (this.arrayPedidos != undefined) {
    //   for (let pedido of this.arrayPedidos) {
    //     //this.arrayPPedidos[this.arrayPPedidos.length] = pedido.idPPedido;
    //     if (pedido.cPedido !== null && pedido.cpedido !== "") {
    //       this.path = this.ruta + "Pedidos/" + pedido.cpedido + ".pdf";
    //   //    this.arrayPathPedidos.push(this.path);
    //       this.arrayFolioPedidos.push(pedido.cpedido);
    //     //  this.arrayPathTodos.push(this.path);
    //     }
    //   }
    // }
    if (this.arrayEvidenciaCFDI !== undefined) {
      this.activarEvidencia = true;
      for (let i: number = 0; i < this.arrayEvidenciaCFDI.length; i++) {
        const numeroFactura = this.arrayEvidenciaCFDI[i].numeroFactura;
        const facturadoPor = this.arrayEvidenciaCFDI[i].facturadoPor;

        if (numeroFactura !== null && facturadoPor !== null && numeroFactura !== undefined) {
          this.path = this.rutaGlass + 'OrdenDespacho/Evidencia/' + facturadoPor + '/' + numeroFactura  + '.pdf';
          this.arrayPathEvidencia.push(this.path);
          this.arrayFolioEvidencia.push(numeroFactura);
          this.arrayPathTodos.push(this.path);
        }
      }
    } else {
      this.activarEvidencia = false;
    }
    if (this.arrayRemisiones !== undefined) {
      this.activarRemision = true;
      for (let i: number = 0; i < this.arrayRemisiones.length; i++) {
        const numeroFactura = this.arrayRemisiones[i].numeroFactura;
        const facturadoPor = this.arrayRemisiones[i].facturadoPor;

        if (numeroFactura != null && facturadoPor != null && numeroFactura !== undefined) {
          this.comunService.obtenerRuta(numeroFactura, 'Remisiones', facturadoPor).then(data => {
            this.path = data;
            this.arrayPathRemisiones.push(this.path);
            this.arrayFolioRemisiones.push(numeroFactura);
            this.arrayPathTodos.push(this.path);
          });
        }
      }
    } else {
      this.activarRemision = false;
    }
    if (this.arrayHoja !== undefined) {
      this.activarHojaSeg = true;
      for (let i: number = 0; i < this.arrayHoja.length; i++) {
        const fabricante = this.arrayHoja[i].idFabricante;
        const codigo = this.arrayHoja[i].codigo;
        this.path = this.ruta + 'HojasSeguridad/' + fabricante + '/' + codigo + '.pdf';
        this.arrayPathHojas.push(this.path);
        this.arrayFolioHojas.push(codigo);
        this.arrayPathTodos.push(this.path);
      }
    } else {
      this.activarHojaSeg = false;
    }
    if (this.arrayCertificados !== undefined) {
      this.activarCertificado = true;
      for (let i: number = 0; i < this.arrayCertificados.length; i++) {
        const fabricante = this.arrayCertificados[i].idFabricante;
        const codigo = this.arrayCertificados[i].codigo;
        const lote = this.arrayCertificados[i].lote;
        const folio = codigo + '-' + lote;
        if (codigo !== null && codigo !== '') {
          if (lote !== null && lote !== '') {
            this.path = this.ruta + 'Certificados/' + fabricante + '/' + folio + '.pdf';
            this.arrayPathCertificados.push(this.path);
            this.arrayFolioCertificados.push(folio);
            this.arrayPathTodos.push(this.path);
          }
        }
      }
    } else {
      this.activarCertificado = false;
    }

    if (this.arrayFacturas !== undefined) {
      for (let i: number = 0; i < this.arrayFacturas.length; i++) {
        const numeroFactura = this.arrayFacturas[i].numeroFactura;
        const facturadoPor = this.arrayFacturas[i].facturadoPor;

        if (numeroFactura != null && facturadoPor != null && numeroFactura !== undefined) {
        this.comunService.obtenerRuta(numeroFactura, 'facturas', facturadoPor).then(data => {
            this.path = data;
            this.arrayPathFacturas.push(this.path);
            this.arrayFolioFacturas.push(numeroFactura);
            this.arrayPathTodos.push(this.path);
          });

        }
      }
    }

    if (this.arrayPakingList !== undefined) {
      for (let i: number = 0; i < this.arrayPakingList.length; i++) {
        const folio = this.arrayPakingList[i].folio;
        if (folio !== null && folio !== '') {
          this.comunService.obtenerRuta(folio, 'PackingList', '') .then(data => {
            this.path = data;
            this.arrayPathPakingList.push(this.path);
            this.arrayFolioPacking.push(folio);
            this.arrayPathTodos.push(this.path);
            });
        }
      }
    }
    if (this.arrayEntregas !== undefined) {
      for (let i: number = 0; i < this.arrayEntregas.length; i++) {
        const folio = this.arrayEntregas[i].folio;
        if (folio !== null && folio !== '') {
          this.comunService.obtenerRuta(folio, 'Entregas', '').then(data => {
            this.path = data;
            this.arrayPathEntregas.push(this.path);
            this.arrayFolioEntregas.push(folio);
            this.arrayPathTodos.push(this.path);
          });

        }
      }
    }
  }


  imprimirHorizontal(archivo: any) {
    console.log('Imprimir path::', archivo);
    const BrowserWindow = electron.remote.BrowserWindow;
    let newWin = new BrowserWindow({  width: 1200, height: 900})
  //    let newWin = new BrowserWindow({  width: 40, height: 40})
  const html = [
    "<html>",
    "<html><head>",
    "<style>",
    "@media print { @page @page {size: landscape}}",
    "</style></head>",
    "<body> <div class='contenido'>",
    //"<pq-visor-pdf  class='pdfViewer' [urlPdf]="+this.arrayPathPedidosAux[0]+"  ></pq-visor-pdf>",
    "<iframe id='pdf' width='100%' src='"+ archivo +"'height='100%' alt='pdf' type='application/pdf'/>",

    // "<object id='pdf' data=" +this.arrayPathPedidosAux[0]+ "width='100%' height='500px'  type='application/pdf'>",

    // "<embed id='pdf' width='100%' src="+ "http://187.189.39.50:51725/SAP/HojasSeguridad/2/1012553.pdf" +"height='100%' alt='pdf' pluginspage='http:// www.adobe.com/products/acrobat/readstep2.html' type='application/pdf'/>",
    // "<div class='contentRefuse' id='preview' [innerHtml]='htmlToAdd | safeHtml' [style.height]='400px' [style.overflow]='hidden'>",
    "</div></body></html>"

  ].join("");

  PDFWindow.addSupport(newWin)
  newWin.loadURL(archivo);
  newWin.hide()

    setTimeout(() => {
      console.log(newWin.webContents.getPrinters());
      let prints = newWin.webContents.getPrinters();
      let impresora: String = "";
      let landscape: string = "landscape";

      for (let print of prints) {
        if (print.description.indexOf("Zebra") === -1) {
          impresora = print.name;
        }
        console.log('Nombre de impresora:', impresora);
       }
       newWin.webContents.print({ silent: true, printBackground: false, deviceName: impresora}, (success) => {
         newWin.close();
       });

    }, 4000);
    }
  imprimirVertical(archivo:any) {
    console.log('Imprimir path::', archivo);
    const BrowserWindow = electron.remote.BrowserWindow;

    let newWin = new BrowserWindow({ width: 1000, height: 1000 })
    var html = [
      "<html>",
      "<html><head>",
      "<style>",
      "@media print { @page @page {size: landscape}}",
      "</style></head>",
      "<body> <div class='contenido'>",
      "<object id='pdf' data=" +this.arrayPathPedidosAux[0]+ "width='100%' height='500px'  type='application/pdf'>",
      "</body></html>"

    ].join("");

    PDFWindow.addSupport(newWin)
      //newWin.loadURL("data:text/html;charset=utf-8," + encodeURI(html));
    newWin.loadURL(archivo);
    newWin.hide()

    setTimeout(() => {
      console.log(newWin.webContents.getPrinters());
      let prints = newWin.webContents.getPrinters();
      let impresora: String = "";
      let landscape: string = "landscape";

      for (let print of prints) {
        if (print.description.indexOf("Zebra") === -1) {

          impresora = print.name;
        }
      }
      console.log('Nombre de impresora:', impresora);
        newWin.webContents.print({ silent: true, printBackground: false, deviceName: impresora }, (success) => {
        newWin.close();
       });

    }, 5000);

    }

  cancelaDetalle() {
    this.mostrarFooter = true;
    this.bolsaContenedora = true;
    this.detalles = false;

  }
  maximizer() {
    this.exitFullScreen();
    this._maximizer = !this._maximizer;
    if (this._maximizer) {
      this._electronService.remote.getCurrentWindow().maximize();
    } else {
      this._electronService.remote.getCurrentWindow().setSize(1368, 770);
    }
  }



  exitFullScreen() {
    if (this._electronService.remote.getCurrentWindow().isFullScreen()) {
      this._electronService.remote.getCurrentWindow().setFullScreen(false);
      this._maximizer = false;
    }
  }
  llenarPaquete() {
     this.rutaV = this.valoresCLiente[0].ruta;
     this.destino = this.valoresCLiente[0].destino;
    // console.log('Soy ruta en vista Packing', this.rutaV);
    // console.log('Soy los id P Pedidos', this.arrayPakingList[0].folio);
  }
  activarPopFinalizar() {
    this.activarPopFin = true;
  }
  desactivarPop(desactivar) {
    ///////////////////////  ESTE MÉTODO DE ENCARGA DE MANDAR EL ID PARA GUARDAR EL REGISTRO ////////
      const idEmpleado = SessionUser.getInstance().getUser().getIdEmpleado();
      const parametro = {
        idUsuarioLogueado: idEmpleado,
        idHorario: this.valoresCLiente[0].idHorario
      };
      let avanzar: any;
      this._embalar.registrarEmbalarPedido(parametro).subscribe(
        data => {
          avanzar = data.current;
          this.activarPopFin = desactivar;
          this.comunService.finalizarEmb(true);
        });
    //
  }
  enviarPaquete($activador) {
    let meter: any;
    let idPedido: any;
    if (this.dateMeter !== undefined && this.dateMeter !== null) {
      meter = this.dateMeter;
    } else {
      meter = null;
    }
    if (this.validarEnvio !== 2) {
      this.idPedido = null;
    }
    this.paquete = {lista: this.arrayPPedidos,
                    estado: 'Embalado',
                    idUsuarioLogueado: this.usuarioId,
                    folio: this.arrayPakingList[0].folio,
                    ruta: this.rutaV,
                    destinoAlmacen: this.destino,
                    generGuia: this.tipoFinalizar,
                    idCliente: this.valoresCLiente[0].idCliente,
                    envio: meter,
                    idPedido: this.idPedido
    };
    console.log('Soy el paquete a enviar', this.paquete );

    if (this.rutaV.toLowerCase() === 'guadalajara') {
      this.pedidosGDL(this.paquete);
    } else {
      this.actualizarEstadoInsertarPendiente(this.paquete);
    }
  }
  actualizarEstadoInsertarPendiente(paquete) {
    this._insertarPendienteService.actualizarEstadoInsertarPendiente(paquete).subscribe(
      data => {
        console.log('finalice el proceso', data.current);
        if ((data.current > 0) && (data.current !== null)) {
          this.activarPopFinalizar();
          /*this.comunService.finalizarEmb(true);*/
        } else {
         //  alert('No se agrego');
        }
      });
  }

  obtenerArchivosPedido(objeto: any) {
    debugger;
    this.coreComponent.openModal(1);
    this._embalar.archivoPedido(objeto).subscribe(
      data => {
        let rutaAuxP: string;
        let arrayF: any[];
        let nombre: any[];
        console.log(data);
        let pedido: any[];
        if (data.current !== undefined) {
          if (data.current.MailBot) {
            for (let i: number = 0; i < data.current.MailBot.length; i++) {
//          this.arrayPathPedidosAux.push("data:application/pdf;base64,"+ data.current[i]);
              const pathAux: any [] = data.current.MailBot[i].split('SAP/');
              // let rutaAux = this.ruta +pathAux[1] ;
              /* let rutaAux = this.rutaGlass +pathAux[1] ;*/
              const rutaAux = this.ruta + pathAux[1] ;
              this.arrayPathPedidosAux.push(rutaAux);
              this.arrayPathTodos.push(rutaAux);
              arrayF = pathAux[1].split('/');
              nombre = arrayF[arrayF.length - 1].split('.');
              this.arrayFolioPedidos.push(nombre[0]);
            }
          }
          if (data.current.Pedido) {
            for (var i = 0; i < data.current.Pedido.length; i++) {
              rutaAuxP = data.current.Pedido[i];
              this.arrayPathPedidosAux.push(rutaAuxP);
              this.arrayPathTodos.push(rutaAuxP);
              const dataP = data.current.Pedido[i].split('.pdf');
              pedido = dataP[0].split('/');
              this.arrayFolioPedidos.push(pedido[pedido.length - 1]);
            }
          }

        }
        this.coreComponent.closeModal(1);
      }, error => {
        this.coreComponent.closeModal(1);
        console.log(error);
      }
    );
  }

  obtenerFolioPorUsuario(idUsuario: any) {
    this.coreComponent.openModal(1);
    this._embalar.obtenerFolioPorUsuario(idUsuario).subscribe(
      data => {
        let objeto: any;
        let lista = new Array<any> ();
        lista = data.current;
        this.validarEnvio = data.current[0].guiaCliente;
        if (data.current && data.current !== null && data.current[0].guiaCliente === 1) {
          this.activeMedidas = true;
        } else {
          this.activeMedidas = false;
        }
        this.idPedido = data.current[0].pedido;
        for (let folios of lista) {
        this.arrayidPedido.push(folios.idPedido);
         // this.obtenerArchivosPedido("48851");
      }
        objeto = {
          'idUsuario' : idUsuario,
          'estado' : 'Generar'
        };
        this.obtenerArchivosPedido(objeto);
      this.arrayPPedidos = this.arrayidPedido;
      console.log(this.arrayidPedido);
        this.coreComponent.closeModal(1);
      }, error =>{
        this.coreComponent.closeModal(1);
        console.log(error);
      }
    );
}
 popImpresion(tipoEnvio) {

    this.tipoFinalizar = tipoEnvio;
    this.activarPopVerificar = true;
    //TODO: Agregar validacion para imprimir etiqueta de Stock
 }

  popImpresionDes($desactivar) {
    this.activarPopVerificar = $desactivar;
  }
  finalizar() {
    /*if (this.rutaV.toLowerCase() === 'guadalajara') {
      this.pedidosGDL();
    } else {
      this.enviarPaquete(true);
    }*/
  }
  /******METODO PARA CONSULTAR SI HAY MAS DE GUADALAJARA******/
  pedidosGDL(paquete) {
    const idUsuarioLogueado = SessionUser.getInstance().getUser().getIdEmpleado();
    this._embalar.pedidosGDL(paquete).subscribe(
      data => {
        console.log('Soy data', data);
        if (data.current === true) {
          this.activarPopFinGdl = true;
        } else {
          this.cambiarVistaEnvio.emit(true);
        }
      });
  }
  desactivarPopGdl($event) {
    this.activarPopFinGdl = false;
    this.cambiarVista.emit(true);
  }
  cerrarPop() {
    this.Cfdi = false;
    this.generarDocumentos(this.param);
  }

  actualizarPop(data) {
    this.activeMedidas = false;

    if (data.valor) {
      this.dateMeter = data.meter;
    }
  }
}
