import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'pq-escanear-codigo-packing-list',
  templateUrl: './escanear-codigo-packing-list.component.html',
  styleUrls: ['./escanear-codigo-packing-list.component.scss']
})
export class EscanearCodigoPackingListComponent implements OnInit {
  escaneoNormal: boolean;
  escaneoCorrecto:boolean;
  escaneoIncorrecto: boolean;

  @ViewChild('textarea') private elementRef: ElementRef;

  @Output() event: EventEmitter<any> = new EventEmitter<any>();
  textoPedimento:string; //="";
  cambioVistaEscaneo:boolean;
  focus:boolean = true;

  constructor() {
  this.textoPedimento = "";
  this.escaneoNormal = true;
  }

  ngOnInit() {
    this.focus = true;

  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }

enter() {
  console.log("llega enter" + this.textoPedimento);
  // alert("txtEnviado: " + this.textoPedimento);
  if (this.textoPedimento.length > 1) {
    this.escaneoNormal = false;
    this.escaneoCorrecto = true;
    this.cambioVistaEscaneo = true;
    setTimeout(() => {
      this.event.emit(this.cambioVistaEscaneo);
   }, 1000);
 } else {
   // console.log("Error al escanear codigo.");
   this.escaneoNormal = false;
   this.escaneoIncorrecto = true;
   setTimeout(() => {
     this.escaneoNormal = true;
     this.escaneoIncorrecto = false;
  }, 1000);
 }
}


}
