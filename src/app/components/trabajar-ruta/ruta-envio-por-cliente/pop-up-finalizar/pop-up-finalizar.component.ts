import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pn-pop-up-finalizar',
  templateUrl: './pop-up-finalizar.component.html',
  styleUrls: ['./pop-up-finalizar.component.scss']
})
export class PopUpFinalizarComponent implements OnInit {
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
