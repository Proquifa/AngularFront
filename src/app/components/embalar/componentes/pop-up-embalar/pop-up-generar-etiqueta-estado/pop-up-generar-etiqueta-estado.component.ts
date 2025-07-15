import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { parametrosInspeccion } from '../../../../../class/despachos/parametrosInspeccion.class';
import { ElectronService } from 'ngx-electron';
import { ComunService } from '../../../../../services/comun/comun.service';
import { Parametros } from '../../../../../class/Parametros.class';

@Component({
  selector: 'pn-pop-up-generar-etiqueta-estado',
  templateUrl: './pop-up-generar-etiqueta-estado.component.html',
  styleUrls: ['./pop-up-generar-etiqueta-estado.component.scss']
})
export class PopUpGenerarEtiquetaEstadoComponent implements OnInit {
  // popUpGenerarEtiqueta = true;
  @Output() vistaPopEstado: EventEmitter <any> = new EventEmitter<any>(); /// Se agrego por que va este componente antes de de pop-ip-informativo
  /*@Output() vistaListaEmbalar: EventEmitter <any> = new EventEmitter<any>();*/
  @Output() folio: EventEmitter <any> = new EventEmitter<any>();
  @Output() terminarGenerar: EventEmitter <boolean> = new EventEmitter<boolean>();
  @Input () recibirManejo: any;
  @Input () activarSobre: boolean;
  @Input () activarBolsa: boolean;
  @Input () valorIndice: any;
  @Input () folioTemHie: any;
  @Input() datosCliente: any;
  folioEtiqueta = this.folioTemHie;
  valoresPaking: any;
  i: any = 1;
  vEmbalarProductos: boolean;
  popUpGenerarEtiqueta: boolean;
  openPopImprimir: boolean;
  _maximizer: Boolean = false;
  _fullScreen: Boolean = false;
  valor: number;
  folioEtiquetaIndex: string;
  // transform(new Date());
  constructor(private  _electronService: ElectronService, private _commonService: ComunService) { }

  ngOnInit() {
    this.maximizer();
    if (this.activarSobre) {
      this.popUpGenerarEtiqueta = true;
    } else {
      this.popUpGenerarEtiqueta = true;
    }
  }
  ngOnChanges() {
    this.valor =  this.valorIndice;
    this.folioEtiqueta = this.folioTemHie;
    console.log('folio Hielera x2:', this.folioEtiqueta);
    this.obtenerFolio();
  }
  obtenerFolio() {
    let tipo: string;
    if (this.recibirManejo === 'Refrigeracion' || this.recibirManejo === 'Refrigeración') {
      tipo = 'Hielera Refrigeracion';
    } else if (this.recibirManejo === 'Congelación' || this.recibirManejo === 'Congelacion') {
      tipo = 'Hielera Congelacion';
    } else if (this.recibirManejo === 'Ambiente') {
      tipo = 'Bolsa de transito';
    }
    if (this.activarBolsa) {
      this.folioEtiqueta = this.folioEtiqueta;
    } else if (this.activarSobre) {
      this.folioEtiqueta = this.folioEtiqueta;
      if (this.activarSobre) {
        setTimeout(() => {
          this.imprimirEtiquetaBolsa();
        }, 1500);
      }
    } else {
      if (this.valor !== 0) {
        if (this.activarSobre) {
          setTimeout(() => {
            this.imprimirEtiquetaBolsa();
          }, 1500);
        } else {
          setTimeout(() => {
            this.imprimirEtiquetaBolsa();
          }, 1500);
        }
        this.folioEtiqueta = this.folioEtiqueta + '-' + this.valorIndice;
        this.valoresPaking = {folio: this.folioEtiqueta, tipo: tipo};
        this.folio.emit(this.valoresPaking);
      }
    }
    console.log('Soy el folio a imprimir..', this.folioEtiqueta);
  }
  /*cambiarVistaEmbalar() {
    this.popUpGenerarEtiqueta = false;
    let val = true;
    this.vistaListaEmbalar.emit(val);
  }*/
  CambiarVista() {
    this.popUpGenerarEtiqueta = false;
    let val = true;
    this.vistaPopEstado.emit(val);
  }
  cambiarGenerar() {
    this.popUpGenerarEtiqueta = false;
    this.terminarGenerar.emit(true);
  }
  imprimirEtiqueta() {
    const BrowserWindow = electron.remote.BrowserWindow;
    // clipboard.writeText('Electron is ready!!');
    let newWin = new BrowserWindow({ width: 288, height: 216 });
    // var fecha:string= this.transform(new Date());
    var html = [
      '<html><head>',
      '<style>',
      '@media print { @page {size: 10cm 10cm;page-break-inside: avoid;page-break-before: avoid;page-break-after: avoid;}}',
      '.contenido {display: flex ;padding-top:127px; padding-left:130px;box-sizing:border-box;  page-break-inside: avoid; page-break-before: avoid;page-break-after: avoid;\'} .bcode{font-family:\'Code 128\'; font-size:12px;} img{page-break-inside: avoid; page-break-before: avoid;page-break-after: avoid;}',
      '</style></head>',
      '<body> <div class=\'contenido\' >',
      '<img style=\'width: 4cm; height:4cm;\' ',
      'src=\'https://qrcode.tec-it.com/API/QRCode?data=' + this.folioEtiqueta + '&backcolor=%23ffffff\'>',
      '</div>',

      '</div>',

      '</body></html>'
    ].join('');

    newWin.loadURL('data:text/html;charset=utf-8,' + encodeURI(html));
    newWin.hide();
    // newWin.webContents.openDevTools()
    newWin.webContents.on('did-finish-load', () => {
      console.log(newWin.webContents.getPrinters());
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
      this.CambiarVista();
  }

  async imprimirEtiquetaBolsa() {
    console.log('Soy datos cliente', this.datosCliente);
    const cliente = this.datosCliente[0].cliente;
    const BrowserWindow = electron.remote.BrowserWindow;
    // clipboard.writeText('Electron is ready!!');
    let newWin = new BrowserWindow({ width: 288, height: 240 });
    // var fecha:string= this.transform(new Date());
    const QRCode = await this.getQRCode(this.folioEtiqueta);
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
                    '<img style=\'width: 4cm; height:4cm;\' ',
                    'src=\'' + QRCode + '\'>',
      '</div>',
      '                <span style=\'font-weight: bold;margin-top: 10px;align-self: center;text-align: center; line-height: 1.2\'>'+ cliente +'</span>\n' +
      '                 <div style=\'font-weight: 300;display: inline-block; height: 20px;align-self: center;text-align: center;\'>'+ this.folioEtiqueta + '</div>\n' +
      '            </div>\n' +
      '        \n' +
      '        </body></html>'
    ].join('');

    newWin.loadURL('data:text/html;charset=utf-8,' + encodeURI(html));
    newWin.hide();
    // newWin.webContents.openDevTools()
    newWin.webContents.on('did-finish-load', () => {
      console.log(newWin.webContents.getPrinters());
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
    if (this.activarBolsa) {
      this.cambiarGenerar();
    } else {
      this.CambiarVista();
    }
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

  cambiarPop() {
    this.openPopImprimir = false;
    this.popUpGenerarEtiqueta = true;
  }

  exitFullScreen() {
    if (this._electronService.remote.getCurrentWindow().isFullScreen()) {
      this._electronService.remote.getCurrentWindow().setFullScreen(false);
      this._maximizer = false;
    }
  }

  getQRCode(code) {
    return new Promise(resolve => {
      const parameter = new Parametros();
      parameter.code = code;
      this._commonService.getQRCode(parameter)
        .subscribe(
          data => {
            resolve(data.current);
          },
          error => {
            resolve(`https://qrcode.tec-it.com/API/QRCode?data=${code}&backcolor=%23ffffff`);
          });
    });
  }
}
