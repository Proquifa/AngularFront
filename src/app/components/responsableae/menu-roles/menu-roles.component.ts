import { Component, OnInit , Output, EventEmitter, Input, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pn-menu-roles',
  templateUrl: './menu-roles.component.html',
  styleUrls: ['./menu-roles.component.scss']
})
export class MenuRolesComponent implements OnInit {

  @Output() ocualtarAcordeon: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Output() recargaVistaInicial:EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @Input() pendiente:number;
  @Input() vistaInicialActiva:boolean = true;
  
  oculto: Boolean = false;


  constructor(private router: Router) { }

  ngOnInit() {
  }


  efectoAcordeon()
  {
    this.oculto = !this.oculto;
    this.ocualtarAcordeon.emit(this.oculto);
  }



  ngOnChanges(change: SimpleChanges) {
    // console.log(change);
    // console.log("Menu roles:" + this.vistaInicialActiva);
    }


  recargaGraficas() {
    console.log('Entre a recargar vista :)');
    this.recargaVistaInicial.emit(true);
  }
}
