import { Component, Input, Output, OnInit, ViewChild, ElementRef, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'pn-pop-finalizar',
  templateUrl: './pop-finalizar.component.html',
  styleUrls: ['./pop-finalizar.component.scss']
})
export class PopFinalizarComponent implements OnInit {
  @ViewChild("pop") pop: ElementRef;
  @Output() finalizar: EventEmitter<any> = new EventEmitter<any>();
  @Output() imprimir: EventEmitter<any> = new EventEmitter<any>();
  @Input() pzasE: number;
  @Input() pzasI: number;
  @Input() mensajeEtiqueta: string = 'Etiquetas despachables';
  @Input() tipoColor: boolean = true;
  despachable:number;

  conf: boolean;
  constructor() { }

  ngOnInit() {
    this.despachable = this.pzasE;
  }

  btnFinalizar() {
    this.pop.nativeElement.style.display = 'none';
    this.finalizar.emit();
  }


  btnImprimir() {
   /*  this.pop.nativeElement.style.display = 'none'; */
    this.imprimir.emit();
  }



  abrir() {
    this.pop.nativeElement.style.display = 'block';
    console.log("abrir");

  }

  /* cambioIndex() {
    this.conf = true;
    this.finalizar.emit(this.conf);
    console.log("llegue a confirmacion pop- inf", this.conf);
    this.pop.nativeElement.style.display = 'none';
  } */

}
