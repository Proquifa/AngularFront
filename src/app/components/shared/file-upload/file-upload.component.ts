import { Component, OnInit, Input, ElementRef, ViewChild, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { PartidaInspeccion } from '../../../class/despachos/PartidaInspeccion.class';
import { InspeccionService } from '../../../services/inspeccion/inspeccion.service';
import nativeImage = Electron.nativeImage;



@Component({
  selector: 'pq-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Input() formato: string = 'application/pdf'; // tipo de formato a recibir .pdf, .png
  @Input() doc: string = '';
  @Output() enviarDocumento: EventEmitter<any> = new EventEmitter<any>();
  @Input() disabled: boolean = true;
  @Input() fileName: string = '';
  @Input() partidaPrioridad: PartidaInspeccion = new PartidaInspeccion();
  @Input() activarOjito: boolean = true;
  @ViewChild('cursorPointer') cursorPointer: ElementRef;
  file: any;
  @Input() docR: any;
  @Input() activeVis: boolean = true;
  @Input() bloqueo: boolean;
  modalAdd: boolean = false;
  popUpColectarElementos: boolean;
  image: any;
  imgSrc: string;
  htmlToAdd: any = '';
  @ViewChild('visor') visor: ElementRef;
  constructor(private _insp: InspeccionService) { }

  ngOnInit() {
  }
  fileChange2($event) {
    console.log($event);
    this.file = $event.target.files;
    this.fileName = $event.target.files[0].name;
    this.enviarDocumento.emit(this.file);
  }

  //
  ngOnChanges(change: SimpleChanges) {
    if (change.docR !== undefined) {
      // this.recibeDoc();
      // this.activarOjito = false;
      this.recibeDocTrabajar();
    }
    console.log('Soy activador-->', this.activarOjito);
  }


  recibeDoc() {
    // console.log(this.docR);
    if (this.docR.archivo !== undefined) {
      this.file = this.docR.archivo[0];
      this.fileName = this.docR.archivo[0].name;
    } else {
    if (this.docR[0] !== undefined) {
      this.file = this.docR[0];
      this.fileName = this.docR[0].name;
    }
  }
  }

  /**********/
  recibeDocTrabajar() {
    // console.log(this.docR);
    if (this.docR !== undefined && this.docR !== null) {
      if (this.docR.archivo !== undefined && this.docR.archivo !== null) {
        this.file = this.docR.archivo[0];
        this.fileName = this.docR.archivo[0].name;
      } else {
        if (this.docR[0] !== undefined && this.docR[0] !== null) {
          this.file = this.docR[0].path;
          this.fileName = this.docR[0].name;
        }
      }
    }
  }
  /***********/

  /**********************/
  escogerVisualizaDor() {
    if (this.file[0] !== 'h') {
      const tipoArchivo = this.file[0].type.split('/');
      if (tipoArchivo && tipoArchivo[0] === 'image') {
        this.mostrarArchivoImg('file');
      } else if (tipoArchivo && tipoArchivo[0] === 'application') {
        this.mostrarArchivo('file');
      }
    } else {
      this.mostrarArchivoTrabajar();
    }
    /*if (this.file[0] !== 'h') {
      this.mostrarArchivo('file');
    } else {
      this.mostrarArchivoTrabajar();
    }*/
  }
  mostrarArchivoTrabajar() {
        const BrowserWindow = electron.remote.BrowserWindow;
        const newWin = new BrowserWindow({ width: 800, height: 600 });
        PDFWindow.addSupport(newWin);
        newWin.loadURL(this.docR[0].path);
  }
  /***************************/
  mostrarArchivo(fileInput: any) {
    // this.popUpColectarElementos = true;
    fileInput = this.file;
    if (fileInput[0] === undefined) {

      const reader = new FileReader();
      reader.onload = function(e: any) {
        const BrowserWindow = electron.remote.BrowserWindow;
        const newWin = new BrowserWindow({ width: 800, height: 600 });
        // PDFWindow.addSupport(newWin);
        newWin.loadURL(fileInput.path);
      };

      reader.readAsDataURL(fileInput);
    } else {
    const reader = new FileReader();
    reader.onload = function(e: any) {
      const BrowserWindow = electron.remote.BrowserWindow;
      const newWin = new BrowserWindow({ width: 800, height: 600 });
      PDFWindow.addSupport(newWin);
      newWin.loadURL(fileInput[0].path);
    };
    reader.readAsDataURL(fileInput[0]);
    }
   /* var image = document.getElementById('imagen');
    console.log(fileInput[0]);
    if (fileInput[0]) {
      var reader = new FileReader();
      reader.onload = function (e: any) {
        console.log(e);
        document.querySelector('#preview').
        insertAdjacentHTML('afterbegin',
          '<img id="pdf" src="' + e.target.result +
          '" width="100%" height="100%" alt=" ">');
      }
       reader.readAsDataURL(fileInput[0]);
    }*/
  }
  mostrarArchivoImg(fileInput: any) {
    this.popUpColectarElementos = true;
    fileInput = this.file;
    const image = document.getElementById('imagen');
    console.log(fileInput[0]);
    if (fileInput[0]) {
      const reader = new FileReader();
      reader.onload = function (e: any) {
        console.log(e);
        document.querySelector('#preview').
        insertAdjacentHTML('afterbegin',
          '<img id="pdf" src="' + e.target.result +
          '" width="100%" height="100%" alt=" ">');
      };
      reader.readAsDataURL(fileInput[0]);
    }
  }
  closePopUp() {
    this.popUpColectarElementos = false;
  }
}
