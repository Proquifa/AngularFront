import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {isLineBreak} from 'codelyzer/angular/sourceMappingVisitor';

@Component({
  selector: 'pq-packing-list-embalaje',
  templateUrl: './packing-list-embalaje.component.html',
  styleUrls: ['./packing-list-embalaje.component.scss']
})
export class PackingListEmbalajeComponent implements OnInit {
  bolsa: any[] = [];

  contenidoListaP: any ;
  pakingList: any;
  @Input () recibirDatos: any;
  @Output() activarBoton: EventEmitter <boolean> = new EventEmitter<boolean>();
  i = 0;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.recibirDatosList();
  }
  recibirDatosList() {
    let val = 0;
    let aux = true;
    this.contenidoListaP = this.recibirDatos;
    console.log('entre a paking', this.contenidoListaP);
    if (this.i > 0) {
      this.activarBoton.emit(aux);
    if (this.bolsa.length === 0) {
      this.bolsa.push(this.contenidoListaP);
    } else {
      for (var i = 0; i < this.bolsa.length; i++) {
        if (this.bolsa[i].folio === this.contenidoListaP.folio) {
          this.bolsa[i].piezas += this.contenidoListaP.piezas;
          val = 1;
          break;
        }
      }
      if (val === 0) {
        this.bolsa.push(this.contenidoListaP);
      }
    }
    }
    this.i = 1;
  }
}
