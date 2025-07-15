import { Component, OnInit } from '@angular/core';
import {GestionarCuarentenaService} from '../../services/gestionar-cuarentena/gestionar-cuarentena.service';
import {dateFormatSlash} from '../../pipes/accounting/accounting.pipe';
import {Subscription} from 'rxjs/Subscription';
import {ComunService} from '../../services/comun/comun.service';

@Component({
  selector: 'pn-gestion-cuarentena',
  templateUrl: './gestion-cuarentena.component.html',
  styleUrls: ['./gestion-cuarentena.component.scss']
})
export class GestionCuarentenaComponent implements OnInit {
  activarBarra: boolean;
  dataProveedores: any;
  filtroProveedores: any[] = [];
  activarProveedores: boolean;
  tipoGraficaProveedores: string;
  dataBarra: any;
  itemsMenu: any;
  classAsideMenu: string = 'asideNormalMenu';
  ocultarAcor: boolean;
  vistaP: boolean;
  tipoOrden: string;
  totalesGrafica: any;
  tipoGrafica: string = 'General';
  lista: any[] = [{ 'nombreProv':"Abastecedora Científica", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 5},
    {  'nombreProv':"Proquifa", fechaInspeccion: new Date('11/Apr/2017'), totalOc: 4, fecha: '11/Abr/2017', 'piezas': 21, totProd: 12},
    {  'nombreProv':"Lab Pisa", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 3},
    {  'nombreProv':"Lab Pisa Mexico", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 12},
    { 'nombreProv':"Proveedora", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 2},
    { 'nombreProv':"Proquifa Gdl", fechaInspeccion: new Date('12/Sep/2018'), totalOc: 4, fecha: '12/Sep/2018', 'piezas': 21, totProd: 12},
    {  'nombreProv':"Laboratorio", fechaInspeccion: new Date('12/Nov/2018'), totalOc: 4, fecha: '12/Nov/2018', 'piezas': 21, totProd: 11},
    {  'nombreProv':"Ryndem", fechaInspeccion: new Date('11/Nov/2017'), totalOc: 4, fecha: '11/Nov/2017', 'piezas': 21, totProd: 21},
    {  'nombreProv':"Proveedora Gn", fechaInspeccion: new Date('12/Aug/2018'), totalOc: 4, fecha: '12/Ago/2018', 'piezas': 21, totProd: 11},
    {  'nombreProv':"Prov", fechaInspeccion: new Date('12/Jan/2018'), totalOc: 4, fecha: '12/Ene/2018', 'piezas': 21, totProd: 4},
    {  'nombreProv':"Sanofi", fechaInspeccion: new Date('12/Mar/2018'), totalOc: 4, fecha: '12/Mar/2018', 'piezas': 21, totProd: 6}];
  listaUniveso: any[] = [{ 'nombreProv':"Abastecedora Científica", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 5},
    {  'nombreProv':"Proquifa", fechaInspeccion: new Date('11/Apr/2017'), totalOc: 4, fecha: '11/Abr/2017', 'piezas': 21, totProd: 12},
    {  'nombreProv':"Lab Pisa", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 3},
    {  'nombreProv':"Lab Pisa Mexico", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 12},
    { 'nombreProv':"Proveedora", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 2},
    { 'nombreProv':"Proquifa Gdl", fechaInspeccion: new Date('12/Sep/2018'), totalOc: 4, fecha: '12/Sep/2018', 'piezas': 21, totProd: 12},
    {  'nombreProv':"Laboratorio", fechaInspeccion: new Date('12/Nov/2018'), totalOc: 4, fecha: '12/Nov/2018', 'piezas': 21, totProd: 11},
    {  'nombreProv':"Ryndem", fechaInspeccion: new Date('11/Nov/2017'), totalOc: 4, fecha: '11/Nov/2017', 'piezas': 21, totProd: 21},
    {  'nombreProv':"Proveedora Gn", fechaInspeccion: new Date('12/Aug/2018'), totalOc: 4, fecha: '12/Ago/2018', 'piezas': 21, totProd: 11},
    {  'nombreProv':"Prov", fechaInspeccion: new Date('12/Jan/2018'), totalOc: 4, fecha: '12/Ene/2018', 'piezas': 21, totProd: 4},
    {  'nombreProv':"Sanofi", fechaInspeccion: new Date('12/Mar/2018'), totalOc: 4, fecha: '12/Mar/2018', 'piezas': 21, totProd: 6}];
  dataFacturacion: any = {
    titulo: 'Totales',
    labels: ['Totales'],
    valores: [6, 3],
    labelsExtras: [['Proveedores'], ['Productos'], ['OC']],
    labelsExtrasHover: ['Proveedores', 'Productos', 'OC'],
    valuesExtras: [6, 324, 15],
    valuesExtrasHover: [[6, 3, 1, 2], [324, 157, 50], [324, 157, 50]]
  };
  searchTerm: string;
  listaGrafica: any[] = [];
  totalOc: number;
  totalProductos: any;
  colores = ['#D2B422', '#DE0209', '#F09600', '#4BA92B'];
  listaBarra: any[] = [];
  cliente: string;
  itemSelect: any;
  activeMenu: boolean;
  subs: Subscription;
  constructor(private _gestorCuarentena: GestionarCuarentenaService, private comunService: ComunService) { }

  ngOnInit() {
    this.subs = this.comunService.recargar.subscribe(
      (data) => {
        if (data === 'gestorCuarentena') {
          this.activeMenu = false;
          this.obtenerDatos();
        }
      });
    this.tipoOrden = 'Todos';
    this.vistaP = true;
    this.obtenerDatos();
  }
  regresarVistaP() {
    this.vistaP = true;
  }
  /*Metodos para el menu de secciones*/
  mostarOcultarAcordeon() {
    this.ocultarAcor = !this.ocultarAcor;
    if (this.ocultarAcor) {
      this.classAsideMenu = 'asideOcultarMenu';
    } else {
      this.classAsideMenu = 'asideMostrarMenu';
    }
  }
  buscar(search) {
    const searchArrayAux: any[] = [];
    this.searchTerm = search;
    if (search === '') {
      this.lista = [...this.listaUniveso];
    } else {
      this.listaUniveso.forEach(folio => {
        if (folio.proveedor.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 ) {
          searchArrayAux.push(folio);
        }
      });
      this.lista = searchArrayAux;
    }
    if (this.lista.length > 0) {
      if (this.tipoOrden === 'Más Recientes') {
        this.ordenamientoFechaTramNue();
      } else if (this.tipoOrden === 'Más Antiguos') {
        this.ordenamientoFechaTramAnt();
      }
    }
  }
  /*****/
  abreCombo() {
    if (document.getElementById('section').className == 'visible') {
      document.getElementById('section').className = "";
    } else {
      document.getElementById('section').className = 'visible';
    }
  }
  ordenamientoFechaTramNue() {
    this.tipoOrden = 'Más Recientes';
    this.lista.sort(function (a, b) {
      if (a.fecha < b.fecha) {
        return 1;
      }
      if (a.fecha > b.fecha) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  ordenamientoFechaTramAnt() {
    this.tipoOrden = 'Más Antiguos';
    this.lista.sort(function (a, b) {
      if (a.fecha > b.fecha) {
        return 1;
      }
      if (a.fecha < b.fecha) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  obtenerDatos() {
    this.activarProveedores = false;
    this.listaGrafica = [];
    this.activarBarra = false;
    this.totalOc = 0;
    this.totalProductos = 0;
    this.lista = [];
    this.listaUniveso = [];
    this._gestorCuarentena.piezasRechazadas().subscribe(
      data => {
        this.listaBarra = data.current.barra;
        if (data.current.grafica && data.current.grafica !== undefined) {
          this.listaGrafica = data.current.grafica;
          this.totalesGrafica = data.current.totales;
        }
        if (data.current.lista && data.current.lista !== undefined) {

          let listaAux = data.current.lista;
          let fechaAux: any;
          for (let i = 0; i < listaAux.length; i++) {
            fechaAux = new dateFormatSlash().transform(listaAux[i].fechaInspeccion);
            this.listaUniveso.push({idProveedor: listaAux[i].idProveedor, proveedor: listaAux[i].proveedor, totalOC: listaAux[i].totalOC,
            fecha: listaAux[i].fechaInspeccionFormato, fechaFormato: fechaAux, totalProducto: listaAux[i].totalProducto});
            this.lista.push({idProveedor: listaAux[i].idProveedor, proveedor: listaAux[i].proveedor, totalOC: listaAux[i].totalOC,
              fecha: listaAux[i].fechaInspeccionFormato, fechaFormato: fechaAux, totalProducto: listaAux[i].totalProducto});

            this.totalOc += listaAux[i].totalOC;
            this.totalProductos += listaAux[i].totalProducto;
          }
        }
        this.iniciarMenu(this.totalesGrafica.totalProducto);
        this.llenarGraficaBarra();
        this.limpiarDataG();
      });
  }
  iniciarMenu(totProd) {
    if (totProd === null) {
      totProd = 0;
    }
    this.itemsMenu = [
      {rol: 'GESTOR DE RECURSOS', active: true, menu: [
          {nombre: 'Gestor Cuarentena', url: 'gestorCuarentena', tipo: 'valor', valor: totProd, select: true},
        ]}];
    this.activeMenu = true;
  }
  llenarGraficaBarra() {
    const etiqueta: any[] = [];
    const datos: any [] = [];
    this.listaBarra.forEach(folio => {
      etiqueta.push(folio.tipo);
      datos.push(folio.totalProducto);
    });
    this.dataBarra = {
      labels: etiqueta,
      barBackground: this.colores,
      values: datos
    };
    this.activarBarra = true;
  }
  limpiarDataG() {
    //////// Emìeza grafica productos //////
    let valoresP  = [] = [];
    let valoresProvee = [] = [];
    for (let nombre of this.listaGrafica) {
      valoresProvee.push([0, 0, 0]);
      valoresP.push(0);
      this.filtroProveedores.push(nombre.proveedor);
    }
    if (valoresP.length > 0) {
      this.dataProveedores = {
        titulo: 'Totales',
        labels: this.filtroProveedores,
        valores: valoresP,
        labelsExtras: ['Proveedores', 'Productos', 'OC'],
        labelsExtrasHover: ['Proveedores', 'Productos', 'OC'],
        valuesExtras: [this.totalesGrafica.totalProveedores, this.totalesGrafica.totalProducto, this.totalesGrafica.totalOC],
        valuesExtrasHover: valoresProvee,
      };
      this.tipoGraficaProveedores = 'General';
      this.calcularDatosParaGraficas();
    } else {
      this.dataProveedores = {
        titulo: 'Totales',
        labels: ['Sin datos'],
        valores: [1],
        labelsExtras: ['Proveedores', 'Productos', 'OC'],
        labelsExtrasHover: ['Proveedores', 'Productos', 'OC'],
        valuesExtras: [0, 0, 0],
        valuesExtrasHover: [[0, 0, 0]],
      };
      this.tipoGraficaProveedores = 'Gris';
      setTimeout(() => {
        this.activarProveedores = true;
      }, 5);
    }
  }
  calcularDatosParaGraficas() {
    if (this.listaGrafica.length > 0) {
      for (let productos of this.listaGrafica) {
        this.llenarTotalesGraficas(this.dataProveedores, productos, 'PROVEEDORES');
      }
    }
  }
  llenarTotalesGraficas(total, elemento, graficaElegida) {
    switch (graficaElegida) {
      case 'PROVEEDORES':
        const posicion1 = this.filtroProveedores.indexOf(elemento.proveedor);

        total.valuesExtrasHover[posicion1][0] += elemento.totalProveedores;
        total.valuesExtrasHover[posicion1][1] += +(elemento.totalProducto);
        total.valuesExtrasHover[posicion1][2] += elemento.totalOC;

        total.valores[posicion1] += elemento.totalProducto;
        setTimeout(() => {
          this.activarProveedores = true;
        }, 5);
        break;
      default:
        break;
    }
  }
  seleccionarItem(i, item) {
    this.cliente = item.proveedor;
    this.vistaP = false;
    this.itemSelect = item;
  }

  refrescarVista(valor) {
    this.obtenerDatos();
    if (valor === true) {
      this.regresarVistaP();
    }
  }
}
