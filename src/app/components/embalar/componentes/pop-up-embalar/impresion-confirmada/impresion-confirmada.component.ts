import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'pn-impresion-confirmada',
  templateUrl: './impresion-confirmada.component.html',
  styleUrls: ['./impresion-confirmada.component.scss']
})
export class ImpresionConfirmadaComponent implements OnInit {
  @Output() cerrarPop: EventEmitter <boolean> = new EventEmitter<boolean>();
  @Output() activarFinalizar: EventEmitter <boolean> = new EventEmitter<boolean>();
  openPopImpresion: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  closePopUp() {
    this.openPopImpresion = false;
    this.cerrarPop.emit(false);
  }
  cambiarPopFinalizar() {
    this.openPopImpresion = false;
    this.activarFinalizar.emit(true);
  }
}
