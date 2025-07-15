import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pq-tarjeta-rutas',
  templateUrl: './tarjeta-rutas.component.html',
  styleUrls: ['./tarjeta-rutas.component.scss']
})
export class TarjetaRutasComponent implements OnInit {

btnEliminar: String = "./assets/Images/Configuracion/Rutas/Eliminar.svg";
btnAgregar: String= "./assets/Images/Configuracion/Rutas/seleccionar.svg";
btnEntrega: String = "./assets/Images/Configuracion/Rutas/entregaVerde.svg";
btnCobro: String = "./assets/Images/Configuracion/Rutas/cobroVerde.svg";
btnRevision: String = "./assets/Images/Configuracion/Rutas/revisionVerde.svg";
btnEspecial: String = "./assets/Images/Configuracion/Rutas/eEspecialVerde.svg";
btnRmaterial: String = "./assets/Images/Configuracion/Rutas/rMaterialVerde.svg";
btnEntregaGris:String = "./assets/Images/Configuracion/Rutas/entregaGris.svg";
btnCobroGris:String = "./assets/Images/Configuracion/Rutas/cobroGris.svg";
btnRevisionGris:String = "./assets/Images/Configuracion/Rutas/revisionGris.svg";
btnEspecialGris:String = "./assets/Images/Configuracion/Rutas/especialGris.svg";
btnRMaterialGris:String = "./assets/Images/Configuracion/Rutas/r.materialGris.svg";

  constructor() { }

  ngOnInit() {
  }

}
