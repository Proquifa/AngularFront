import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pn-atender-cobro-deposito',
  templateUrl: './atender-cobro-deposito.component.html',
  styleUrls: ['./atender-cobro-deposito.component.scss']
})
export class AtenderCobroDepositoComponent implements OnInit {
  selectedTipoCuenta: any;
  listaTipoCuenta: any = [
    /* { nombre: '--NINGUNO--', key: 0 }, */
    { nombre: 'Congelación', key: 0 },
    { nombre: 'Ambiente', key: 1 },
    { nombre: 'Refrigeración', key: 2 }
  ];
  /*****PRUEBA DE LISTA*****/
  listaAux: any[] = [] = [{ 'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 5, depositado: '$12,765', itemSelect: false},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12, depositado: '$12,765', itemSelect: false},
    {  'cliente':"PHS", "nombre": 'PQF', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 3, depositado: '$12,765', itemSelect: false},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12, depositado: '$12,765', itemSelect: false},
    { 'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 2, depositado: '$12,765', itemSelect: false},
    { 'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12, depositado: '$12,765', itemSelect: false},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11, depositado: '$12,765', itemSelect: false},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 21, depositado: '$12,765', itemSelect: false},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11, depositado: '$12,765', itemSelect: false},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 4, depositado: '$12,765', itemSelect: false},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 6, depositado: '$12,765', itemSelect: false}];
  /**************************/
  clientes: any[] = [];
  lista: any[] = [];
  listaFD: any = [];
  rb: string;
  banco: string;
  activarBotonera: boolean;
  listaEmpresas = [{nombre: 'Proquifa', total: 12},
    {nombre: 'Proveedora', total: 15}];

    constructor() { }

  ngOnInit() {
    var obj: any;
    obj = new Object;
    obj.nombre = 'Todas las Cuentas Bancarias';
    this.selectedTipoCuenta = obj;
    this.clientes = this.listaAux;
    this.lista = this.listaAux;
    this.activarBotonera = true;
  }

  recibeValosCombo(index: any, tipo: string) {
    var obj: any;
    obj = new Object;
    obj.tipo = tipo;
    obj.item = index;
  }
  abreCombo() {
    if (document.getElementById("section").className == "visible") {
      document.getElementById("section").className = "";
    } else {
      document.getElementById("section").className = "visible";
    }
  }
  seleccionarItem(item, i) {
    this.listaFD = [];
    this.listaFD = new Array(this.lista.length).fill('');
    this.listaFD[i] = 'divActive';
    this.rb = '#' + (i + 1) + ' · ' + ' ' + item.cliente;
    this.banco = item.nombre;
  }

  seleccionarItemFac(item, i) {

  }
}
