import { Component, OnInit, Input,ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import {ElectronService} from 'ngx-electron';
// import { VisorPdfComponent } from './../../../../components/shared/visor-pdf/visor-pdf.component';

@Component({
  selector: 'pq-detalle-paquete',
  templateUrl: './detalle-paquete.component.html',
  styleUrls: ['./detalle-paquete.component.scss']
})

export class DetallePaqueteComponent implements OnInit {
  @Input() titulo: string;
  @Input() array: any;
  @Input() foliosAux: any;
  @Input() totales: string;
  @Output() cancelar:EventEmitter<any> =  new EventEmitter<any>();
  @ViewChild("visor") visor: ElementRef;
  @ViewChild("iframe") _printIframe: ElementRef; /// Prueba
  mostrarDatosPL: boolean;
  datosPaquete: boolean;
  validarLista: boolean = true;
  listaFolios: any = [];
  mostrarCheck: boolean = true;
  mostrarTodosChecks: boolean = false;

 valorTitulo: string;
 FolioPackingList: string = "PL-010418-0046";
  FoliosSearched: any[];
  searchTerm: string;
  path: string;
  visorPdf: boolean;
  visorPdf2: boolean;
  mostrarFooter: boolean = true;
  colorBoton: boolean;
  checked: boolean = true ;
  folios: any[] = [];
  _maximizer: Boolean = false;
  _fullScreen: Boolean = false;
  constructor( private  _electronService: ElectronService) {
  this.mostrarDatosPL = false;
  // this.datosPaquete= true;
}

  ngOnInit() {
    this.maximizer();
//      console.log(this.array);
    for (let i: number = 0; i < this.foliosAux.length; i++) {
      this.folios.push({ 'folio': this.foliosAux[i], 'check': false });
    }
    this.cargarvalores();
    this.seleccionarItemLista(0);
  }

  cargarvalores() {
    this.valorTitulo = this.titulo;
    if (this.valorTitulo == "Packing List") {
      console.log("seleccionaste PL")
      this.mostrarDatosPL = true;
      this.datosPaquete = false;
    } else {
      this.datosPaquete = true;
    }
  }
  buscar(search) {

    let searchArrayAux: any[] = [];
    this.searchTerm = search;
    if (search == "") {
      // this.ClientesSearched= this.clientesConsulta;
      this.FoliosSearched= [...this.folios];

    } else {

      this.folios.forEach(folio => {
        if (
          folio.folio
            .toLowerCase()
            .indexOf(this.searchTerm.toLowerCase()) !== -1
        ) {
          searchArrayAux.push(folio);
        }
      });
      this.FoliosSearched = searchArrayAux;
      this.validarLista = false;

      //  this.regresaConsulta.emit(searchArrayAux);
    }
  }
  ///metodo para cuando da clic en el checkbox
  seleccionarItemLista(i: any) {
    let auxCheck = this.folios[i].check;

    for (let j: number = 0; j < this.folios.length; j++) {
      if (this.folios[j].check === true) {
        this.folios[j].check = false;
      }
    }

      if (auxCheck === false && this.checked == true) {
        this.folios[i].check = true;
        this.colorBoton = true;
        this.path = this.array[i];
        if (this.visorPdf == false || this.visorPdf == undefined) {
          this.visorPdf2 = false;
          this.visorPdf = true;
        }
        else {
          this.visorPdf = false;
          this.visorPdf2 = true;
          this.colorBoton = true;
        }
      } else {
        this.colorBoton = false;
        this.path = "";
        this.visorPdf2 = false;
        this.visorPdf = false;
      }

  }

  ///METODO PARA CUANDO LE DA CLIC EN
  //
  //
  //
  //
  //
  //
  // SELECCIONAR TODOS
  seleccionarTodaLaLista() {
    let i: any;
    if (this.mostrarTodosChecks === false) {
      for (i = 0 ; i < this.folios.length; i++) {
        this.folios[i].check = true;

        console.log(this.folios[i].check);
      }
      this.colorBoton = true;
      this.mostrarTodosChecks = true;
    } else if (this.mostrarTodosChecks === true) {
      for (i = 0 ; i < this.folios.length; i++) {
        this.folios[i].check = false;

        console.log(this.folios[i].check);
      }
      this.mostrarTodosChecks = false;
    }

  }
  cambiarVista() {
    this.mostrarFooter = false;
    this.cancelar.emit();
  }
  validarImpresion() {
    /*this.imprimir();*/
    if (this.titulo === 'Pedido' || this.titulo === 'Facturas' || this.titulo === 'Remisiones') {
      // this.imprimirHorizontal(this.path);
      this.printWindow(this.path);
    } else if (this.titulo === 'Certificados' || this.titulo === 'Hoja de Seguridad' || this.titulo === 'Packing List' || this.titulo === 'Entregas') {
      // this.imprimirVertical(this.path);
      this.printWindow(this.path);
    }
  }
  /**/
  /*imprimirBien(url) {
    var iframe = this._printIframe;
    if (!this._printIframe) {
      iframe = this._printIframe = document.createElement('iframe');
      document.body.appendChild(iframe); iframe.style.display = 'none';
      iframe.onload = function() { setTimeout(function() { iframe.focus(); iframe.contentWindow.print(); }, 1); };
    } iframe.src = url; }*/

  /**/
  printWindow(doc) {
    console.log('Entre ');
    const shell  = electron.shell;
    shell.openExternal(doc);
  }
  imprimirHorizontal(archivo:any) {
    const BrowserWindow = electron.remote.BrowserWindow;
    let newWin = new BrowserWindow({  width: 1200, height: 900})
    //let newWin = new BrowserWindow({  width: 40, height: 40})
    var html = [
      "<html>",
      "<html><head>",
      "<style>",
      "@media print { @page @page {size: landscape}}",
      "</style></head>",
      "</html>"

    ].join("");

    PDFWindow.addSupport(newWin)
    newWin.loadURL(archivo);
    newWin.hide();
     newWin.hide();
    setTimeout(() => {
      console.log(newWin.webContents.getPrinters());
      let prints = newWin.webContents.getPrinters();
      let impresora: String = "";
      let landscape: string = "landscape";

      for (let print of prints) {
        if (print.description == "ZebraTicket") {
          impresora = print.name;
        }
       }
       newWin.webContents.print({ silent: false, printBackground: false, deviceName: impresora }, (success) => {
         newWin.close();
       });

    }, 4000);
    }

  imprimirVertical(archivo:any) {
    const BrowserWindow = electron.remote.BrowserWindow;

    let newWin = new BrowserWindow({ width: 1000, height: 1000 })
    var html = [
      "<html>",
      "<html><head>",
      "<style>",
      "@media print { @page @page {size: landscape}}",
      "</style></head>",
      "</html>"

    ].join("");

    PDFWindow.addSupport(newWin)

    newWin.loadURL(archivo);
    newWin.hide();
    newWin.hide();

    setTimeout(() => {
      console.log(newWin.webContents.getPrinters());
      let prints = newWin.webContents.getPrinters();
      let impresora: String = "";
      let landscape: string = "landscape";

      for (let print of prints) {
        if (print.description == "ZebraTicket") {
          impresora = print.name;
        }
      }
       newWin.webContents.print({ silent: false, printBackground: false, deviceName: impresora }, (success) => {
         newWin.close();
       });

    }, 5000);

    }

    recibeCheck(valor:boolean){
      this.checked = valor;
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



  exitFullScreen(){
    if (this._electronService.remote.getCurrentWindow().isFullScreen()) {
      this._electronService.remote.getCurrentWindow().setFullScreen(false);
      this._maximizer = false;
    }
  }

}
