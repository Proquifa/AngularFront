import { Component,Input, Output, OnInit,ViewChild, ElementRef, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'pq-pop-confirmacion',
  templateUrl: './pop-confirmacion.component.html',
  styleUrls: ['./pop-confirmacion.component.scss']
})
export class PopConfirmacionComponent implements OnInit {
@ViewChild("pop") pop: ElementRef;
@Output() confirmacion:EventEmitter<any> = new EventEmitter<any>();
@Input() pzasE:number;
@Input() pzasI: number;

  conf:boolean;
  constructor() { }

  ngOnInit() {
  }

  cerrar(){
    this.pop.nativeElement.style.display = 'none';
    this.conf = false;
    this.confirmacion.emit(this.conf);
    console.log("cerrar");
    }

  abrir(){
      this.pop.nativeElement.style.display = 'block';
      console.log("abrir");

      }

  cambioIndex(){
    this.conf = true;
    this.confirmacion.emit(this.conf);
    console.log("llegue a confirmacion pop- inf", this.conf);
    this.pop.nativeElement.style.display = 'none';
  }

}
