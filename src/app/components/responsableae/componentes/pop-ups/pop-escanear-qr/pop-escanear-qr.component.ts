import { Component, Output, OnInit, ViewChild, ElementRef, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'pq-pop-escanear-qr',
  templateUrl: './pop-escanear-qr.component.html',
  styleUrls: ['./pop-escanear-qr.component.scss']
})
export class PopEscanearQrComponent implements OnInit {

  @Output() cambioIndex:EventEmitter<any> = new EventEmitter<any>();
  @Output() event: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild("pop") pop: ElementRef;
  @ViewChild('textarea') private elementRef: ElementRef;
  @Input() bolsa:string;


  cambio:boolean;
  codigoQr: string;
  infoCodigoQr:boolean;
  tipoBolsa:string = 'Inspección';

  constructor() { }

  ngOnInit() {
    this.elementRef.nativeElement.focus();
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }
  txt(texto:string){
    var obj: any;
    obj = new Object;
    obj.nombre = texto;
    this.codigoQr = obj.nombre;
    console.log(this.codigoQr);
  }

enter(){
  console.log("llega enter" + this.codigoQr);
  if (this.codigoQr.length > 1) {
     this.infoCodigoQr = true;
   }
   if(this.bolsa != "")
     this.tipoBolsa = "No despachable"
}
  cerrar(){
    let data : any = {
      cambio:true,
      codigo:this.codigoQr
    };
    this.pop.nativeElement.style.display = 'none';
    this.cambio = true;
    this.cambioIndex.emit(data);

    }


}
