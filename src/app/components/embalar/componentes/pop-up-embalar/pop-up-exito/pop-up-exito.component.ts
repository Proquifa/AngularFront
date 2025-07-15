import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'pn-pop-up-exito',
  templateUrl: './pop-up-exito.component.html',
  styleUrls: ['./pop-up-exito.component.scss']
})
export class PopUpExitoComponent implements OnInit {
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
