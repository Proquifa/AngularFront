import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pn-pop-up-editar-monto',
  templateUrl: './po-up-editar-monto.component.html',
  styleUrls: ['./po-up-editar-monto.component.scss']
})
export class PoUpEditarMontoComponent implements OnInit {
  tiposMontos: any = [
    /*  { nombre: '--NINGUNO--', key: 0 }, */
    { nombre: 'Monto', key: 0 },
    { nombre: 'Porcentaje', key: 1 }
  ];
  usd: boolean;
  tipoMonto: any;
  porcentaje: boolean = true;
  constructor() { }

  ngOnInit() {
    var obj: any;
    obj = new Object;
    obj.nombre ='Seleccionar';
    this.tipoMonto = obj;
  }
  recibeValosCombo($event, tipos) {

  }
}
