import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionUser } from '../../services/session/session.service';
import { CoreContainerComponent } from '../core-container/core-container.component';
import { ComunService } from '../../services/comun/comun.service';

@Component({
  selector: 'pn-interfacturacion',
  templateUrl: './interfacturacion.component.html',
  styleUrls: ['./interfacturacion.component.scss']
})
export class InterfacturacionComponent implements OnInit {
  /* VARIABLES PARA EL MENU DE SECCIONES*/
  ocultarAcor: boolean;
  totInterfac: number = 3;
  vistaInicialActiva: boolean = true;
  classAsideMenu: string = 'asideNormalMenu';
  itemsMenu = [
    {nombre: 'Interfacturación', tipo: 'valor', valor: this.totInterfac, url: '', disable: true},
  ];
  /* AQUI TERMINA*/
  vistaFacturacion: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  /*Metodos para el menu de secciones*/
  mostarOcultarAcordeon() {
    this.ocultarAcor = !this.ocultarAcor;
    if (this.ocultarAcor) {
      this.classAsideMenu = "asideOcultarMenu";
    } else {
      this.classAsideMenu = "asideMostrarMenu";
    }
  }
  regresarVistaP() {
    setTimeout(() => {
      this.vistaFacturacion = false;
    }, 5);
    this.vistaInicialActiva = true;
    setTimeout(() => {
      this.vistaFacturacion = true;
    }, 5);
  }
  cambiarDireccionamiento($event) {
    // this.vistaFacturacion = false;
    this.vistaInicialActiva = $event;
  }
}
