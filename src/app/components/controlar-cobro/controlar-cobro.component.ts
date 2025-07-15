import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pn-controlar-cobro',
  templateUrl: './controlar-cobro.component.html',
  styleUrls: ['./controlar-cobro.component.scss']
})
export class ControlarCobroComponent implements OnInit {
  ocultarAcor: boolean;
  classAsideMenu = 'asideNormalMenu';
  itemsMenu = [
    {nombre: 'Atender Cobro', url: '', disable: true},
  ];
  vistaPrincipal: boolean = true;
  ProductoData: boolean;
  clienteData: boolean;
/**********DATOS DE EJEMPLO GRAFICAS****/
  dataFacturacion: any = {
    titulo: 'Clientes',
    labels: ['Totales'],
    valores: [6, 3],
    labelsExtras: [['clientes'], ['Ordenes de compra'], ['Piezas'], ['Monto']],
    labelsExtrasHover: ['clientes', 'Ordenes de compra', 'Piezas', 'Monto'],
    valuesExtras: [6, 324, 157, 5000],
    valuesExtrasHover: [[6, 3, 1, 2], [324, 157, 50, 100]]
  };
  dataFacturacion2: any = {
    titulo: 'Productos',
    labels: ['Totales'],
    valores: [6],
    labelsExtras: [['clientes'], ['Ordenes de compra']],
    labelsExtrasHover: ['clientes', 'Ordenes de compra'],
    valuesExtras: [6, 324],
    valuesExtrasHover: [[6, 3], [324, 157]]
  };
  /*************************/
  /*****PRUEBA DE LISTA*****/
  listaAux: any[] = [] = [{ 'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 5, pagado: true},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12, pagado: true},
    {  'cliente':"PHS", "nombre": 'PQF', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 3, pagado: true},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12, pagado: true},
    { 'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 2, pagado: true},
    { 'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12, pagado: true},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11, pagado: true},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 21, pagado: true},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11, pagado: true},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 4, pagado: true},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 6, pagado: true}];
  /**************************/
  tipoGraficaProducto = 'General';
  tipoGraficaCliente = 'General';
  clientes: any[] = [];
  lista: any[] = [];
  searchTerm: string; /// Almacena la letra o letras que se van a buscar en la lista cuando se usa la barra de busqueda
  tipoOrden: string; // Almacena el tipo de ordenamiento
  montoTot: any;
  totPiezas: any;
  total: any;
  cabeceraClient: string;
  deposito: boolean;
  pop: boolean;
  constructor() { }

  ngOnInit() {
    this.ProductoData = true;
    this.clienteData = true;
    this.clientes = this.listaAux;
    this.lista = this.listaAux;
  }
  mostarOcultarAcordeon() {
    this.ocultarAcor = !this.ocultarAcor;
    if (this.ocultarAcor) {
      this.classAsideMenu = 'asideOcultarMenu';
    } else {
      this.classAsideMenu = 'asideMostrarMenu';
    }
  }
  regresarVistaP() {
    this.deposito = false;
    this.vistaPrincipal = true;
  }
  /// Funcion de buscar en facturacion
  buscar(search) {

    let searchArrayAux: any[] = [];
    this.searchTerm = search;
    if (search == "") {
      this.lista = [...this.clientes];
    } else {
      this.clientes.forEach(folio => {
        if (folio.cliente.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 ) {
          searchArrayAux.push(folio);
        }
      });
      this.lista = searchArrayAux;
    }
  }
  /*****/
  abreCombo() {
    if (document.getElementById("section").className == "visible") {
      document.getElementById("section").className = "";
    } else {
      document.getElementById("section").className = "visible";
    }
  }
  seleccionarItem(item) {
    this.deposito = true;
    this.vistaPrincipal = false;
    this.cabeceraClient = item.cliente;
    this.pop = true;
  }
}
