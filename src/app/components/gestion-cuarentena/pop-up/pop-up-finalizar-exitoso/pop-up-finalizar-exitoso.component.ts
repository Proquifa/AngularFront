import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pn-pop-up-finalizar-exitoso',
  templateUrl: './pop-up-finalizar-exitoso.component.html',
  styleUrls: ['./pop-up-finalizar-exitoso.component.scss']
})
export class PopUpFinalizarExitosoComponent implements OnInit {
  popUpCerrar: boolean;
  @Input() label: string;
  @Input() imagen: boolean;
  @Output() desactivarPop: EventEmitter <boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    this.popUpCerrar = true;
    setTimeout(() => {
      this.cerrar();
    }, 3000);
  }
  cerrar() {
    this.popUpCerrar = false;
    this.desactivarPop.emit(false);
  }
}
