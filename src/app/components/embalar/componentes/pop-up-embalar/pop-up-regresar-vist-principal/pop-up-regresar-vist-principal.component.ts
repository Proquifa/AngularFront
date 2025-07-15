import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pn-pop-up-regresar-vist-principal',
  templateUrl: './pop-up-regresar-vist-principal.component.html',
  styleUrls: ['./pop-up-regresar-vist-principal.component.scss']
})
export class PopUpRegresarVistPrincipalComponent implements OnInit {
  @Output () cambiarVistaPrincipal: EventEmitter <boolean> = new EventEmitter<boolean>();
  popUpComprobante: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  cerrar() {
    this.popUpComprobante = false;
    this.cambiarVistaPrincipal.emit(true);
  }
}
