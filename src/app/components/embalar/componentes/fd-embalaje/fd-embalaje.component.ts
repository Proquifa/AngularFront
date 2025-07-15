import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {createInput} from '@angular/compiler/src/core';

@Component({
  selector: 'pq-fd-embalaje',
  templateUrl: './fd-embalaje.component.html',
  styleUrls: ['./fd-embalaje.component.scss']
})
export class FdEmbalajeComponent implements OnInit {
@Input() valorRecibidoFD: any;
@Input() valorRecibidoEmbalajeFD: any;
@Input() folioPaquete: any;
@Input() activarBotonM: boolean;
@Output() tipoManejo: EventEmitter <string> = new EventEmitter<any>();
@Output() desactivarBoton: EventEmitter <string> = new EventEmitter<any>();
@Input() comentarios: string;
  tipoImgenBolsa: boolean;
  tipoImgenHielera: boolean;
  textoTipo: string;
  FD: any;
  piezas: number;
  botonA: boolean;
  folio: any;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.validarImagenEmbalaje();
    this.obtenerDatosFD();
    this.activarBoton();
  }
  activarBoton() {
    this.botonA = this.activarBotonM;
  }
  obtenerDatosFD() {
    console.log('Llegue-->', this.valorRecibidoEmbalajeFD)
    this.FD = this.valorRecibidoFD.folio;
    this.piezas = this.valorRecibidoFD.piezas;
    this.folio = this.folioPaquete.folio;
  }
  validarImagenEmbalaje() {
    if (this.valorRecibidoEmbalajeFD === "CONGELACIÓN" || this.valorRecibidoEmbalajeFD === "REFRIGERACIÓN") {
      this.tipoImgenHielera = true;
      this.tipoImgenBolsa = false;
      this.textoTipo = 'Hielera';
    } else {
      this.tipoImgenHielera = false;
      this.tipoImgenBolsa = true;
      this.textoTipo = 'Bolsa de transito';
    }
    // console.log("bola", this.tipoImgenBolsa);
    // console.log("hielera", this.tipoImgenHielera);
    console.log('Soy ------>>>', this.valorRecibidoEmbalajeFD);
  }
  agregarPaquete() {
    // this.botonA = false;
    this.desactivarBoton.emit('desactivar');
    let tipo: string;
  console.log('Funciono el clic');
  if (this.valorRecibidoEmbalajeFD === "CONGELACIÓN") {
    tipo = 'Congelacion';
    this.tipoManejo.emit(tipo);
  } else if (this.valorRecibidoEmbalajeFD === "REFRIGERACIÓN") {
    tipo = 'Refrigeracion';
    this.tipoManejo.emit(tipo);
  } else if (this.valorRecibidoEmbalajeFD === "AMBIENTE") {
    tipo = 'Ambiente';
    this.tipoManejo.emit(tipo);
  }
  }
}
