import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'
import { ClienteService } from '../../services/catalogo/clientes/clientes.service'

@Component({
  selector: 'pn-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: [ './catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  pathImg: String = "assets/Images/gestion/tarjetasMenu/";

  catalogos: any[] = [{ "nombre": "AGENTE ADUANAL", "img": "Recurso179.svg", "redirect": ""},
    { "nombre": "CLIENTES", "img": "Recurso178.svg", "redirect": "/protected/catalogo/clientes" },
    { "nombre": "NO DEFINIDO", "img": "Recurso174.svg", "redirect": "" },
    { "nombre": "INDICADORES", "img": "Recurso_151.svg", "redirect": "" },
    { "nombre": "PROVEEDORES", "img": "Recurso177.svg", "redirect": "" },
    { 'nombre': 'PATRÓN', 'img': 'Recurso177.svg', 'redirect': '/protected/catalogo/empresas' },
    { 'nombre': 'CUENTAS CONTABLES', 'img': 'icono_cuentas_contables.svg', 'redirect': '/protected/contabilidad/contables' },
    { 'nombre': 'POLIZAS', 'img': 'icono_cuentas_contables.svg', 'redirect': '/protected/contabilidad/polizas' }
  ];

  ngOnInit(){
    console.log('Llamando a servicio de obtener clientes');
  }
}
