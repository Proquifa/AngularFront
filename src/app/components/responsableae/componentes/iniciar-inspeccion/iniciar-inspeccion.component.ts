import { Component, OnInit,Output,EventEmitter, Input, SimpleChanges  } from '@angular/core';
import { PartidaInspeccion } from '../../../../class/despachos/PartidaInspeccion.class';
import { ComunService } from '../../../../services/comun/comun.service';

@Component({
  selector: 'pq-iniciar-inspeccion',
  templateUrl: './iniciar-inspeccion.component.html',
  styleUrls: ['./iniciar-inspeccion.component.scss']
})
export class IniciarInspeccionComponent implements OnInit {
  @Output() event: EventEmitter<any> = new EventEmitter<any>();
  @Input() partidaPrioridad:PartidaInspeccion = new PartidaInspeccion();
  @Output() reiniciarVista: EventEmitter<any> = new EventEmitter<any>();
  @Output() reiniciarInicialGra: EventEmitter<any> = new EventEmitter<any>();
  @Output() actualizarValores: EventEmitter<any> = new EventEmitter<any>();
  vistaInicialActiva:boolean = true;
  constructor(private comunService: ComunService) { }

  ngOnInit() {
  }



  iniciaInspeccion()
  { this.vistaInicialActiva = false;
    this.event.emit(true);
  }

  reinicioDeVista($event) {
    if ($event) {
      this.actualizarValores.emit(true);
      this.vistaInicialActiva = true;
    } else if (!$event) {
      this.reiniciarVista.emit('inc');
    }
    // this.vistaInicialActiva = true;
    // this.reiniciarInicialGra.emit(true);
    console.log("enviar reinicio iniciarInspeccion");
  }
}
