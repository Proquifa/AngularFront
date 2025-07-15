import { Component, OnInit, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'pn-pop-up-localizar-numero-rastreo',
  templateUrl: './pop-up-localizar-numero-rastreo.component.html',
  styleUrls: ['./pop-up-localizar-numero-rastreo.component.scss']
})
export class PopUpLocalizarNumeroRastreoComponent implements OnInit {

  @Output() cambioIndex:EventEmitter<any> = new EventEmitter<any>();

  @ViewChild("pop") pop: ElementRef;

    cambio:boolean;
  constructor() { }

  ngOnInit() {
  }


  cerrar(){
    this.pop.nativeElement.style.display = 'none';
    this.cambio = true;
    this.cambioIndex.emit(this.cambio);

    console.log("llegue a cerrar pop- inf", this.cambio)

   }
}
