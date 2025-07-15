import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pn-pop-up-destruccioon',
  templateUrl: './pop-up-destruccioon.component.html',
  styleUrls: ['./pop-up-destruccioon.component.scss']
})
export class PopUpDestruccioonComponent implements OnInit {
@Output() emitDatas: EventEmitter<any> = new EventEmitter<any>();
@Input() lista: any;
  activarBoton: boolean;
  archivo: any;
  activeBtn: boolean;

  constructor() { }

  ngOnInit() {
    this.activarBoton = true;
  }
  cerrar(val) {
    const obj = {
      valor: val,
      archivo: this.archivo
    };
    this.emitDatas.emit(obj);
  }
  recibirDoc(archivo) {
    if (archivo !== undefined && archivo != null) {
      this.archivo = archivo;
      this.activeBtn = true;
    }
  }
}
