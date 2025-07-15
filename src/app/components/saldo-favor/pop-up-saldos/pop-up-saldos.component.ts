import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pn-pop-up-saldos',
  templateUrl: './pop-up-saldos.component.html',
  styleUrls: ['./pop-up-saldos.component.scss']
})
export class PopUpSaldosComponent implements OnInit {
  @Output() emit: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() activarBoton: boolean;
  @Input() alertaTxt: string;
  @Input() folio: string;
  @Input() imagen: string;
  tipoImg: string;
  constructor() { }

  ngOnInit() {
    this.seleccionarImg();
  }
  seleccionarImg() {
    switch (this.imagen) {
      case 'exit':
        this.tipoImg = 'assets/Images/flecha_blanca_encirculoverde.svg';
        break;
      case 'delete':
        this.tipoImg = 'assets/Images/alerta.svg';
        break;
      default:
        this.tipoImg = 'assets/Images/alerta.svg';
        break;
    }
  }
  ngOnChanges() {
    if (!this.activarBoton) {
      setTimeout(() => {
        this.cerrar(true);
      }, 1500);
    }
  }
  cerrar(valor) {
    this.emit.emit(valor);
  }
}
