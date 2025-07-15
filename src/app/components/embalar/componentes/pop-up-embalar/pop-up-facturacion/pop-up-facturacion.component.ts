import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {AccountingFormatMoney} from '../../../../../pipes/accounting/accounting.pipe';
import {EmbalarService} from '../../../../../services/embalar/embalar.service';

@Component({
  selector: 'pn-pop-up-facturacion',
  templateUrl: './pop-up-facturacion.component.html',
  styleUrls: ['./pop-up-facturacion.component.scss']
})
export class PopUpFacturacionComponent implements OnInit {
  @Output() cerrarPop: EventEmitter <boolean> = new EventEmitter<boolean>();
  @Input() recibirLista: any;
  @Input() datosCliente: any;
tipoFactura: string;
cliente: string;
encargado: string;
index: string;
searchTerm: string; /// Almacena la letra o letras que se van a buscar en la lista cuando se usa la barra de busqueda
facturas: any[] = [];
listaFD: any = [];
datos: boolean;
colorBoton: boolean;
primerCarga: boolean;
file: FileList;
pdf: any = '';
htmlToAdd: any = '';
url: any;
val = 1;
clientesSearched: any[];
validarLista: boolean = true;
folio: string;
punto: string;
correo: boolean;
sat: boolean;
portal: boolean;
path: string;
openView: boolean;
totales: number;
listaAux: any;
correos: any[] = [];
rutaXML: string;
clienteFac: string;
pathUrl: string;
rutaLocal = 'http://localhost:8080/SAP/' ;
rutaProd = 'http://187.189.39.50:51725/SAP/Facturas/';
rutaSat = 'https://verificacfdi.facturaelectronica.sat.gob.mx/default.aspx?&id=';
link = 'https://verificacfdi.facturaelectronica.sat.gob.mx'; // Es el lin k que se mustra para sat. Solo la vista
pathVistaExterna: string;
folioF: string;
RfcE: string;
RfcR: string;
usuario: string;
password: string;
fPor: string;
idFactura: string;
envioCorreo: boolean;
datosEnviar: any;
fe: string;
total: string;
popImpresion: boolean;
i: number; // Va a guardar el index
lista: any[] = [/*{ 'folioFactura':"PHS", "nombre": 'GOL', 'cantidad': 4, 'importe': '$12,765', 'piezas': 21, 'productos': 5},
    {  'folioFactura':"PHS", "nombre": 'GOL', 'cantidad': 4, 'importe': '$12,765', 'piezas': 21, 'productos': 12},
    {  'folioFactura':"PHS", "nombre": 'PQF', 'cantidad': 4, 'importe': '$12,765', 'piezas': 21, 'productos': 3},
    {  'folioFactura':"PHS", "nombre": 'GOL', 'cantidad': 4, 'importe': '$12,765', 'piezas': 21, 'productos': 12},
    { 'folioFactura':"F0-93984733", "nombre": 'GOL', 'cantidad': 4, 'importe': '$12,765', 'piezas': 21, 'productos': 2},
    { 'folioFactura':"PHS", "nombre": 'GOL', 'cantidad': 4, 'importe': '$12,765', 'piezas': 21, 'productos': 12},
    {  'folioFactura':"PHS", "nombre": 'GOL', 'cantidad': 4, 'importe': '$12,765', 'piezas': 21, 'productos': 11},
    {  'folioFactura':"PHS", "nombre": 'GOL', 'cantidad': 4, 'importe': '$12,765', 'piezas': 21, 'productos': 21},
    {  'folioFactura':"PHS", "nombre": 'GOL', 'cantidad': 4, 'importe': '$12,765', 'piezas': 21, 'productos': 11},
    {  'folioFactura':"PHS", "nombre": 'GOL', 'cantidad': 4, 'importe': '$12,765', 'piezas': 21, 'productos': 4},
    {  'folioFactura':"F0-93984734", "nombre": 'GOL', 'cantidad': 4, 'importe': '$12,765', 'piezas': 21, 'productos': 6}*/];
  constructor( private _embalar: EmbalarService) { }

  ngOnInit() {
    this.datos = true;
    this.cliente = 'CENTRO DE ESTUDIOS CIENTÍFICOS PHARMA';
    this.encargado = 'Pedro Alejandro Hernández L. / Almacenista';
    // this.index = 2;
    this.colorBoton = false;
    this.primerCarga = true;
    console.log('Datos cliente -->', this.datosCliente);
  }
  ngOnChanges() {
    if (this.recibirLista  && this.recibirLista !== null) {
      this.recuperarDatos();
    }
  }
  recuperarDatos() {
    console.log('Sor la lista facturas--', this.recibirLista);
    let monto: string;
    this.tipoFactura = this.recibirLista[0].tipo;
    this.openView = true;
    for (let i: number = 0; i < this.recibirLista.length; i++) {
      monto = new AccountingFormatMoney().transform(this.recibirLista[i].importe);
      this.facturas.push({tipo: this.recibirLista[i].tipo,
        usuario: this.recibirLista[i].usuario,
        password: this.recibirLista[i].password,
        correos: this.recibirLista[i].correos,
        url: this.recibirLista[i].url,
        importe: monto,
        factura: this.recibirLista[i].factura,
        fpor: this.recibirLista[i].fpor,
        folioF: this.recibirLista[i].folioF,
        rfcReceptor: this.recibirLista[i].rfcReceptor,
        rfcEmisor: this.recibirLista[i].rfcEmisor,
        moneda: this.recibirLista[i].moneda,
        idFactura: this.recibirLista[i].idFactura,
        sello: this.recibirLista[i].sello,
        total: this.recibirLista[i].total});
    }
    this.lista = this.facturas; /// Va a sufrir los cambios
    this.listaAux = this.facturas; // Nunca se modifica (EL Universo)
    this.totales = this.listaAux.length;
  }
/// Funcion de buscar en facturacion
  buscar(search) {
    this.listaFD[this.i] = '';
    this.fPor = '';
    this.folio = '';
    this.datos = true;
    /////////////////////////
    let searchArrayAux: any[] = [];
    this.searchTerm = search;
    if (search == "") {
      // this.ClientesSearched= this.clientesConsulta;
      this.lista = [...this.listaAux];

    } else {

      this.listaAux.forEach(folio => {
        if (folio.factura.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
          searchArrayAux.push(folio);
        }
      });
      this.lista = searchArrayAux;
      // this.validarLista = false;
      //  this.regresaConsulta.emit(searchArrayAux);
    }
  }
  seleccionarItem(item, $index) {

    this.i = $index;
    this.fPor = item.fpor;
    this.colorBoton = false;
    this.primerCarga = true; // Cada que de clic se cambiara a la vista prinicpal.
    this.val = 1;
    this.idFactura = item.idFactura;
    ///// Proceso de obtener los datos
    this.folio = item.factura;
    this.clienteFac = item.fpor;
    this.rutaXML = this.rutaProd +  this.clienteFac + '/' + this.folio + '.xml';
    if (item.tipo === 'Correos') {
     this.correo = true;
     this.sat = false;
     this.portal = false;
     this.correos = item.correos.split(';');
     if (this.correos[this.correos.length - 1] === '') {
       this.correos.splice(this.correos.length - 1, 1);
     }
     this.datosEnviar = {fpor: item.fpor,
                         factura: item.factura,
                         total: item.total,
                         fe: item.sello};
    } else if (item.tipo === 'SAT') {
      this.RfcR = item.rfcReceptor;
      this.RfcE = item.rfcEmisor;
      this.folioF = item.folioF;
      this.total = item.total;
      this.fe = item.sello;
      this.correo = false;
      this.sat = true;
      this.portal = false;
      this.pathVistaExterna = this.rutaSat + this.folioF + '&re=' + this.RfcE + '&rr=' + this.RfcR + '&tt=' + this.total + '&fe=' + this.fe;
    } else if (item.tipo === 'Portal') {
      this.url = item.url;
      this.usuario = item.usuario;
      this.password = item.password;
      this.correo = false;
      this.sat = false;
      this.portal = true;
      this.pathVistaExterna = item.url;
    }
    this.datos = false;
    this.listaFD = [];
    this.listaFD = new Array(this.lista.length).fill('');
    this.listaFD[$index] = 'divActive';
    this.index = '#' + ($index + 1) + ' · ';
    this.punto = '·';
  }
  fileChange2($event) {
    this.file = undefined;
    if (this.val === 1) {
      this.primerCarga = false;
      this.val = 2;
    }
    console.log($event);
    this.file = $event.target.files;
    if (this.file !== null && this.file !== undefined) {
      this.colorBoton = true;
    }
    this.mostrarDocumento(this.file);
  }
  mostrarDocumento(fileInput) {
    /*const blob = new Blob([fileInput], {type: 'application/pdf'});
    const fileURL = URL.createObjectURL(blob).split(':');
    this.url = fileURL[1] + ':' + fileURL[2] + ':' + fileURL[3];*/
    let doc = document.querySelector('#preview');

    let $img: any = document.querySelector('#preview');

    var reader = new FileReader();
    /*Validación para eliminar si ya existe un elemento*/
    if (document.querySelector('#preview')) {
      document.querySelector('#preview').children[0].remove();
    }
    /******************/
    reader.onload = function (e: any) {
      document.querySelector('#preview').insertAdjacentHTML('afterbegin', '<iframe id="pdf" src="' + e.target.result + '" width="100%" height="100%" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">');
    }
    reader.readAsDataURL(fileInput[0]);
  }
  visualizar(index) {
    this.path = this.rutaProd +  this.clienteFac + '/' + this.folio + '.pdf';
    console.log('Soy index', index);
    const BrowserWindow = electron.remote.BrowserWindow;
    let newWin = new BrowserWindow({ width: 800, height: 600 });
    PDFWindow.addSupport(newWin);
    newWin.loadURL(this.path);

  }
  abrirNueva() {
    // window.open("https://www.argar.cat", "Diseño Web", "width=300, height=200");
    console.log('Entre ');
    const shell  = electron.shell;

    shell.openExternal(this.pathVistaExterna);
    // shell.openExternal('https://www.argar.cat/es/ventana-nueva-con-javascript/');
  }
  cerrar() {
    this.openView = false;
    this.cerrarPop.emit(true);
  }
  finalizar() {
    if (this.tipoFactura === 'Correos') {
      this._embalar.uploadFile(this.file, this.folio, this.fPor).subscribe(
        data => {
          this.envioCorreo = true;
        });
    } else {
      this._embalar.uploadFile(this.file, this.folio, this.fPor).subscribe(
        data => {
          const ruta = this.rutaLocal + 'OrdenDespacho/Evidencia/' + this.fPor + '/' +  this.folio + '.pdf';
            if (this.tipoFactura === 'SAT') {
               // this.imprimirEvidencia(ruta);
              this.activarPop();
            }
            this.cerrarPendiente();
        });
    }
  }

  cerrarPendiente() {
    this._embalar.finalizarEvidenciaFac(this.idFactura).subscribe(
      data => {
        let indice: number;
          if (data.current === true) {
              for (let i = 0; i < this.listaAux.length; i++) {
                if (this.folio === this.listaAux[i].factura) {
                  indice = i;
                }
              }

              this.listaAux.splice(indice, 1);
              this.lista.splice(this.i, 1);
              if (this.listaAux.length > 0) {
                this.totales = this.listaAux.length;
                if (this.lista.length > 0) {
                  this.seleccionarItem(this.lista[0], 0);
                } else {
                  this.datos = true;
                }
              } else {
                this.cerrar();
              }
          }
      });
  }
  /*imprimirEvidencia(archivo) {
    console.log('Imprimir path::', archivo);
    const BrowserWindow = electron.remote.BrowserWindow;
    let newWin = new BrowserWindow({  width: 1200, height: 900})
    //    let newWin = new BrowserWindow({  width: 40, height: 40})
    var html = [
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
      newWin.webContents.print({ silent: false, printBackground: false, deviceName: impresora}, (success) => {
        newWin.close();
      });
    }, 4000);
  }*/
  cerrarCorreo(evento) {
    if (evento) {
      this.envioCorreo = false;
      this.cerrarPendiente();
    }
  }
  activarPop() {
    this.envioCorreo = true;
    this.popImpresion = true;
    setTimeout(() => {
      this.popImpresion = false;
      this.envioCorreo = false;
    }, 3000);
  }
}

