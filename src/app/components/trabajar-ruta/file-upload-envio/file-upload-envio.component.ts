
import { Component, OnInit, Input, ElementRef, ViewChild, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { log } from 'util';


@Component({
  selector: 'pn-file-upload-envio',
  templateUrl: './file-upload-envio.component.html',
  styleUrls: ['./file-upload-envio.component.scss']
})
export class FileUploadEnvioComponent implements OnInit {
  @Input() formato: string = ".pdf"; //tipo de formato a recibir .pdf, .png
  @Input() doc: string = '';
  @Output() enviarDocumento: EventEmitter<any> = new EventEmitter<any>();
  @Input() disabled: boolean = true;
  @Input() fileName: any;
  @Input() nombreArchivo: any;

  @Input() paqDistinta:any;


  @Input() mensajeria: boolean;

  
  @ViewChild("cursorPointer") cursorPointer: ElementRef;
  file: File = null;
  @Input() docR: any;
  @Input() ruta:any
  modalAdd: boolean = false;
  constructor() { }
  ngOnInit() {
  }
  fileChange2($event) {
    console.log($event);
    this.file = $event.target.files;
    this.fileName = $event.target.files[0].name;
    this.enviarDocumento.emit(this.file);
  }
  ngOnChanges(change: SimpleChanges) {
    if (change.docR !== undefined) {
      this.recibeDoc();
    }
    console.log("paquetria"+ this.paqDistinta);
    
  }
  recibeDoc() {
    console.log(this.docR);
    if (this.docR.archivo !== undefined) {
      this.file = this.docR.archivo[0];
      this.fileName = this.docR.archivo[0].name;
      console.log("---------File----------");
      console.log(this.fileName);
    }

  }

//   mostrarArchivoDistinto(fileInput: any) {
//     fileInput = this.file;
//     if(fileInput[0]== undefined){

//     var reader = new FileReader();
//     reader.onload = function(e: any) {
//       const BrowserWindow = electron.remote.BrowserWindow;
//       let newWin = new BrowserWindow({ width: 800, height: 600 })
//       PDFWindow.addSupport(newWin)
//       newWin.loadURL(fileInput.path);
//       console.log("path");
      
//       console.log(fileInput.path);
//       reader.readAsDataURL(fileInput);
//     }
   
//   } else
// {
//      console.log("ARCHIVO LLEGANDO");
  
//   console.log(fileInput);
//   const BrowserWindow = electron.remote.BrowserWindow;
//   let newWin = new BrowserWindow({ width: 800, height: 600 })
//   PDFWindow.addSupport(newWin)
//   newWin.loadURL(fileInput);

//   }
//   reader.readAsDataURL(fileInput);
//   console.log("paque2"+  this.paqDistinta);
  
// }




mostrarArchivoDistinto(fileInput: any) {
  fileInput = this.file;
  if(fileInput[0]== undefined){

  var reader = new FileReader();
  reader.onload = function(e: any) {
    const BrowserWindow = electron.remote.BrowserWindow;
    let newWin = new BrowserWindow({ width: 800, height: 600 })
    PDFWindow.addSupport(newWin)
    newWin.loadURL(fileInput.path);
  }
  reader.readAsDataURL(fileInput);
  console.log("pathi"+fileInput.path);
  
} else
{
var reader = new FileReader();
reader.onload = function(e: any) {
  const BrowserWindow = electron.remote.BrowserWindow;
  let newWin = new BrowserWindow({ width: 800, height: 600 })
  PDFWindow.addSupport(newWin)
  newWin.loadURL(fileInput[0].path);    
}
reader.readAsDataURL(fileInput[0]);
console.log("path"+fileInput[0].path);

}
}




mostrarArchivo(archivo: String) {

  console.log("ARCHIVO LLEGANDO");
  
  console.log(archivo);
  const BrowserWindow = electron.remote.BrowserWindow;
  let newWin = new BrowserWindow({ width: 800, height: 600 })
  PDFWindow.addSupport(newWin)
  newWin.loadURL(archivo);
  console.log("paque"+  this.paqDistinta);
  

}


metodoMostrarSeleccion(fileInput: any, paqDistinta :any){
  console.log("llego"+paqDistinta);
  
  console.log(paqDistinta);
  
  console.log("distinc paq");
  console.log(this.paqDistinta);
  console.log(this.paqDistinta);

  if(this.paqDistinta===true){
  
    console.log("distinto");
   
    this.mostrarArchivoDistinto(fileInput);
    this.paqDistinta=false;

  } else
  if(this.paqDistinta===false){
    console.log(this.paqDistinta);

    if(this.paqDistinta===false){
      console.log("normal");
      this.mostrarArchivo(fileInput);
    }

  }
  
    this.paqDistinta=false;

  }


}
