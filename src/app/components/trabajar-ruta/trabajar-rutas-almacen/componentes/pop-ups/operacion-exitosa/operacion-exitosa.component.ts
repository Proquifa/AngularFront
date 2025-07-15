import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'pn-operacion-exitosa',
  templateUrl: './operacion-exitosa.component.html',
  styleUrls: ['./operacion-exitosa.component.scss']
})
export class OperacionExitosaComponent implements OnInit {
  popUpCerrar: boolean;
  @Input() label: string;
  @Input() imagen: boolean;
  @Output() desactivarPop: EventEmitter <boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    this.popUpCerrar = true;
  }
  cerrar() {
    this.popUpCerrar = false;
    this.desactivarPop.emit(false);
  }
}

