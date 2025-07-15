import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pn-pop-up-notificado-desvincular',
  templateUrl: './pop-up-notificado-desvincular.component.html',
  styleUrls: ['./pop-up-notificado-desvincular.component.scss']
})
export class PopUpNotificadoDesvincularComponent implements OnInit {
  @Input() itemStock: any;
  @Output() event: EventEmitter<any> = new EventEmitter<any>();
  activarBoton: boolean;
  active: boolean;
  reason: string;
  justificacion: any[] = [{nombre: 'Actualización por inventario físico', key: 0},
    {nombre: 'Caducidad', key: 1},
    {nombre: 'Merma', key: 2},
    {nombre: 'Rechazo', key: 3}];
  constructor() { }

  ngOnInit() {
    this.activarBoton = true;
  }
  cerrar($event) {
    const obj = {
      valor: $event,
      item: this.itemStock,
      reason: this.reason
    };
    this.event.emit(obj);
  }
  receiveJust(event) {
    if (event !== null && event !== 'Seleccionar') {
      this.reason = event.nombre;
      this.active = true;
    } else {
      this.active = false;
    }
  }
}
