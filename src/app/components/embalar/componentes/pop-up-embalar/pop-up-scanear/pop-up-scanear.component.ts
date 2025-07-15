import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'pn-pop-up-scanear',
  templateUrl: './pop-up-scanear.component.html',
  styleUrls: ['./pop-up-scanear.component.scss']
})
export class PopUpScanearComponent implements OnInit {
 @ Input() mensaje: string;
 @ Input() valScaner: boolean;
 @ Input() recibirManejo: boolean;
 @ Output() envioFolio: EventEmitter<any> = new EventEmitter<any>();
 @Output() vistaListaEmbalar: EventEmitter <any> = new EventEmitter<any>();
 @ViewChild('textarea') private elementRef: ElementRef;
  popUpScanear: boolean = true;
  popUpComprobante: boolean = false;
  ///////////////////////////// variables para el textArea ////////////////////
  escaneoNormal: boolean;
  escaneoCorrecto: boolean;
  escaneoIncorrecto: boolean;
  textoPedimento: string; //="";
  cambioVistaEscaneo: boolean;
  focus: boolean = true;
  valoresPaking: any;
  textoP: string;
  @ViewChild('textarea') private textArea: ElementRef;
 constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.textArea.nativeElement.focus();
  }
  txt(texto:string){
    var obj: any;
    obj = new Object;
    obj.nombre = texto;
    this.textoPedimento = obj.nombre;
    // console.log(this.textoPedimento);
  }
  enter() {
    console.log('llega enter' + this.textoPedimento);
    let pzas: any;
    let folio: any;
    let BolsaTransito: any
    let auxP: string;
    auxP = this.textoPedimento.trim();
    this.textoPedimento =  auxP;
    // alert("txtEnviado: " + this.textoPedimento);
    if (this.textoPedimento.length > 1) {
      this.escaneoNormal = false;
      this.escaneoCorrecto = true;
      this.popUpComprobante = true;
      this.valoresPaking = {folio: this.textoPedimento , tipo: 'Bolsa de transito'};
      this.envioFolio.emit(this.valoresPaking);
      this.popUpScanear = false;
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

  cerrar() {
    this.popUpComprobante = false;
    let val = true;
    this.vistaListaEmbalar.emit(val);
  }

}
