import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'pn-pop-up-timbrado',
  templateUrl: './pop-up-timbrado.component.html',
  styleUrls: ['./pop-up-timbrado.component.scss']
})
export class PopUpTimbradoComponent implements OnInit {
  @Output() cerrarPopTimbrado: EventEmitter<number> = new EventEmitter<number>();
  popUpTimbrado: boolean;
  constructor() { }

  ngOnInit() {
    this.popUpTimbrado = true;
  }
  closePopUp() {
    this.popUpTimbrado = false;
    this.cerrarPopTimbrado.emit(0);
  }
  aceptar() {
    this.popUpTimbrado = false;
    this.cerrarPopTimbrado.emit(1);
  }
}
