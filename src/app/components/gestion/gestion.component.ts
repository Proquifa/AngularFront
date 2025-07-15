import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pn-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  pathImg: String = "assets/Images/gestion/tarjetasMenu/";

  tableros: any[] = [{ "nombre": "CLIENTES", "img":"Recurso_153.svg"},
  { "nombre": "OPERATIVOS", "img": "Recurso_151.svg" },
  { "nombre": "PRODUCTOS", "img": "Recurso_150.svg" },
  { "nombre": "PROVEEDORES", "img": "Recurso_149.svg" }];

  consultas: any[] = [{ "nombre": "ASISTENCIA", "img": "Recurso172.svg", "redirect": "protected/gestion/consulta/asistencia"},
    { "nombre": "COBROS", "img": "Recurso175.svg", "redirect": "protected/gestion/consulta/cobros" },
    { "nombre": "COMPRAS", "img": "Recurso174.svg", "redirect": "protected/gestion/consulta/compras" },
    { "nombre": "CONFIRMACIÓN", "img": "Recurso_152.svg", "redirect": "protected/gestion/consulta/confirmacion" },
    { "nombre": "COTIZACIONES", "img": "Recurso173.svg", "redirect": "protected/gestion/consulta/cotizaciones" },
    { "nombre": "DOCUMENTOS ENVIADOS", "img": "Recurso_162.svg", "redirect": "protected/gestion/consulta/documentosEnviados" },
    { "nombre": "DOCUMENTOS RECIBIDOS", "img": "Recurso_165.svg", "redirect": "protected/gestion/consulta/documentosRecibidos" },
    { "nombre": "ENTREGAS", "img": "Recurso171.svg", "redirect": "protected/gestion/consulta/entregas" },
  { "nombre": "FACTURACIÓN", "img": "Recurso170.svg" , "redirect":"protected/gestion/consulta/facturacion"},
  { "nombre": "LLAMADAS", "img": "Recurso169.svg", "redirect":"protected/gestion/consulta/llamadas"},
  { "nombre": "NOTA DE CRÉDITO", "img": "Recurso_162.svg", "redirect":"protected/gestion/consulta/nota-credito" },
  { "nombre": "PAGOS", "img": "Recurso_161.svg" },
  { "nombre": "PEDIDOS", "img": "Recurso_168.svg" },
  { "nombre": "PERMISOS DE IMPORTACIÓN", "img": "Recurso_167.svg"}];

  reportes: any[] = [{ "nombre": "COBROS", "img": "Recurso_159.svg", "redirect":"protected/gestion/reportes/reportecobros" },
  { "nombre": "COMPRAS", "img": "Recurso_158.svg" },
  { "nombre": "CONFIRMACIÓN DE DATOS ", "img": "Recurso_157.svg" },
  { "nombre": "NOTIFICADOS", "img": "Recurso_156.svg" },
  { "nombre": "PERMISOS DE IMPORTACIÓN", "img": "Recurso_155.svg" },
  { "nombre": "PRODUCTO ALMACÉN", "img": "Recurso_160.svg" },
  { "nombre": "SEGUIMIENTO", "img": "Recurso_154.svg", "redirect":"protected/gestion/reportes/seguimiento"}];

  constructor() { }

  ngOnInit() {
  }

}
