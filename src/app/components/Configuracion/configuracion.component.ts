import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pq-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss']
})
export class ConfiguracionComponent implements OnInit {

  /*catalogos: any[] = [{ "nombre": "EMPRESAS"},
  { "nombre": "PROCESOS"},
  { "nombre": "RUTAS"}];*/

  pathImg: String = "assets/Images/Configuracion/TarjetasConfiguracionMenu/";

  configuracion: any[] = [{ "nombre": "EMPRESAS", "img":"empresaGris.png"},
  { "nombre": "PROCESOS", "img": "empresaGris.png" },
  { "nombre": "RUTAS", "img": "empresaGris.png" }];

  constructor() { }

  ngOnInit() {
  }

}
