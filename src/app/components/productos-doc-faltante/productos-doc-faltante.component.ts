import { Component, OnInit } from '@angular/core';
import {ArriboDocumentoService} from '../../services/arribo-documento/arribo-documento.service';
import {SessionUser} from '../../services/session/session.service';
import {AccountingFormatMoney, DateFormatDot2, dateFormatSlash} from '../../pipes/accounting/accounting.pipe';
import {CoreContainerComponent} from '../core-container/core-container.component';
import {Subscription} from 'rxjs/Subscription';
import {ComunService} from '../../services/comun/comun.service';

@Component({
  selector: 'pn-productos-doc-faltante',
  templateUrl: './productos-doc-faltante.component.html',
  styleUrls: ['./productos-doc-faltante.component.scss']
})
export class ProductosDocFaltanteComponent implements OnInit {
  itemsMenu: any[];
  classAsideMenu: string = 'asideNormalMenu';
  ocultarAcor: boolean;
  lista: any[] = [/*{ 'nombreProv':"Abastecedora Científica", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 5},
    {  'nombreProv':"Proquifa", fechaInspeccion: new Date('11/Apr/2017'), totalOc: 4, fecha: '11/Abr/2017', 'piezas': 21, totProd: 12},
    {  'nombreProv':"Lab Pisa", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 3},
    {  'nombreProv':"Lab Pisa Mexico", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 12},
    { 'nombreProv':"Proveedora", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 2},
    { 'nombreProv':"Proquifa Gdl", fechaInspeccion: new Date('12/Sep/2018'), totalOc: 4, fecha: '12/Sep/2018', 'piezas': 21, totProd: 12},
    {  'nombreProv':"Laboratorio", fechaInspeccion: new Date('12/Nov/2018'), totalOc: 4, fecha: '12/Nov/2018', 'piezas': 21, totProd: 11},
    {  'nombreProv':"Ryndem", fechaInspeccion: new Date('11/Nov/2017'), totalOc: 4, fecha: '11/Nov/2017', 'piezas': 21, totProd: 21},
    {  'nombreProv':"Proveedora Gn", fechaInspeccion: new Date('12/Aug/2018'), totalOc: 4, fecha: '12/Ago/2018', 'piezas': 21, totProd: 11},
    {  'nombreProv':"Prov", fechaInspeccion: new Date('12/Jan/2018'), totalOc: 4, fecha: '12/Ene/2018', 'piezas': 21, totProd: 4},
    {  'nombreProv':"Sanofi", fechaInspeccion: new Date('12/Mar/2018'), totalOc: 4, fecha: '12/Mar/2018', 'piezas': 21, totProd: 6}*/];
  listaUniveso: any[] = [/*{ 'nombreProv':"Abastecedora Científica", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 5},
    {  'nombreProv':"Proquifa", fechaInspeccion: new Date('11/Apr/2017'), totalOc: 4, fecha: '11/Abr/2017', 'piezas': 21, totProd: 12},
    {  'nombreProv':"Lab Pisa", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 3},
    {  'nombreProv':"Lab Pisa Mexico", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 12},
    { 'nombreProv':"Proveedora", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 2},
    { 'nombreProv':"Proquifa Gdl", fechaInspeccion: new Date('12/Sep/2018'), totalOc: 4, fecha: '12/Sep/2018', 'piezas': 21, totProd: 12},
    {  'nombreProv':"Laboratorio", fechaInspeccion: new Date('12/Nov/2018'), totalOc: 4, fecha: '12/Nov/2018', 'piezas': 21, totProd: 11},
    {  'nombreProv':"Ryndem", fechaInspeccion: new Date('11/Nov/2017'), totalOc: 4, fecha: '11/Nov/2017', 'piezas': 21, totProd: 21},
    {  'nombreProv':"Proveedora Gn", fechaInspeccion: new Date('12/Aug/2018'), totalOc: 4, fecha: '12/Ago/2018', 'piezas': 21, totProd: 11},
    {  'nombreProv':"Prov", fechaInspeccion: new Date('12/Jan/2018'), totalOc: 4, fecha: '12/Ene/2018', 'piezas': 21, totProd: 4},
    {  'nombreProv':"Sanofi", fechaInspeccion: new Date('12/Mar/2018'), totalOc: 4, fecha: '12/Mar/2018', 'piezas': 21, totProd: 6}*/];
  searchTerm: string; /// Almacena la letra o letras que se van a buscar en la lista cuando se usa la barra de busqueda
  dataFacturacion: any = {
    titulo: 'Totales',
    labels: ['Totales'],
    valores: [6, 3],
    labelsExtras: [['Proveedores'], ['Productos'], ['OC']],
    labelsExtrasHover: ['Proveedores', 'Productos', 'OC'],
    valuesExtras: [6, 324, 15],
    valuesExtrasHover: [[6, 3, 1, 2], [324, 157, 50], [324, 157, 50]]
  };
  vistaP: boolean;
  tipoOrden: string;
  usuario: string;
  listaProveedores: any;
  filtroProveedores: any[] = [];
  dataProveedores: any;
  totalesGrafica: any;
  tipoGrafica: string;
  activarGrafica: boolean;
  itemProveedor: any;
  cliente: string;
  subs: Subscription;
  activeMenu: boolean;
  rolMaster: boolean;
  constructor(private comunService: ComunService, private _trabajarArribo: ArriboDocumentoService, private coreContainer: CoreContainerComponent) { }
  ngOnInit() {
    this.subs = this.comunService.recargar.subscribe(
      (data) => {
        if (data === 'docFaltante') {
          this.activeMenu = false;
          this.usuario = SessionUser.getInstance().getUser().getUsuario();
          this.obtenerDatos(this.usuario);
	  this.obtenerValoresMenu(this.usuario);
        }
      });
    this.tipoOrden = 'Todos';
    this.vistaP = true;
    this.usuario = SessionUser.getInstance().getUser().getUsuario();
    this.obtenerDatos(this.usuario);
    this.obtenerValoresMenu(this.usuario);
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
  /*****/
  abreCombo() {
    if (document.getElementById("section").className == "visible") {
      document.getElementById("section").className = "";
    } else {
      document.getElementById("section").className = "visible";
    }
  }

  regresarVistaP() {
    this.vistaP = true;
  }
  obtenerValoresMenu(idUsuario) {
    this.rolMaster = false;
    const roles = SessionUser.getInstance().getUser().getRoles();
    this._trabajarArribo.obtenerTotales(idUsuario).subscribe(
      data => {
        for (let i = 0; i < roles.length; i ++ ) {
          if (roles[i] === 'Comprador_Master') {
            this.rolMaster = true;
          }
        }
        console.log(data);
        if (this.usuario === 'LRosas') {
          this.itemsMenu = [
            {rol: 'GESTOR DE COMPRAS', active: true, menu: [{nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', disable: true, tipo: 'valor', valor: data.current.ArriboDocumentos, select: true},
                {nombre: 'Producto a Reclamo', url: 'productoReclamo',  tipo: 'valor', valor: data.current.ProductoReclamo, select: false},
                {
                  nombre: 'Cargar Saldo a Favor',
                  tipo: '',
                  valor: 0,
                  url: 'poolVisitas',
                  disable: true,
                  subMenu: [
                    { nombre: 'Nota Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: false},
                    { nombre: 'Saldo', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: false}
                  ],
                  select: false
                }]},
            {rol: 'GESTOR DE OPERACIONES', active: false, menu : [
              {nombre: 'Consola de Prioridades', url: 'consolaPrioridades', tipo: 'flecha'},
                {nombre: 'Consola de Envíos', url: 'consolaEnvio', select: false},
                {nombre: 'Material en Stock', url: 'stock', select: false},
                {nombre: 'Material en Destrucción', url: 'consolaDest', select: false}]}
          ];
        } else {
          this.itemsMenu = [
            {rol: 'GESTOR DE COMPRAS', active: true, menu: [
              {nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', disable: true, tipo: 'valor', valor: data.current.ArriboDocumentos, select: true},
                {nombre: 'Producto a Reclamo', url: 'productoReclamo',  tipo: 'valor', valor: data.current.ProductoReclamo, select: false},
                {
                  nombre: 'Cargar Saldo a Favor',
                  tipo: '',
                  valor: 0,
                  url: 'poolVisitas',
                  disable: true,
                  subMenu: [
                    { nombre: 'Nota Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: false},
                    { nombre: 'Saldo', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: false}
                  ],
                  select: false
                }]}
          ];
      }
        this.activeMenu = true;
    },
      error => {

      });
  }
  obtenerDatos(usuario) {
    this.lista = [];
    this.listaUniveso = [];
    this.coreContainer.openModal(0);
    this._trabajarArribo.documentacionFaltante(usuario).subscribe(
      data => {
        let listaGnr = data.current.lista;
        if (data.current.grafica  && data.current.grafica !== undefined && data.current.grafica !== null) {
          this.listaProveedores = data.current.grafica;
          this.totalesGrafica = data.current.totales;
          this.llenarValoresData();
          this.calcularDatosParaGraficas();
        } else {
          this.listaProveedores = [];
          this.llenarValoresData();
        }
        let fechaFormat: any;
        let fecha: any;
        /*LLenado de lista*/
        for (let i = 0; i < listaGnr.length; i++) {
          fecha = new dateFormatSlash().transform(listaGnr[i].fechaInspeccion);
          this.lista.push({nombreProv: listaGnr[i].proveedor, fecha: fecha,
                           fechaInspeccion: listaGnr[i].fechaInspeccion,
                           totalOc: listaGnr[i].totalOC, totalProd: listaGnr[i].totalProducto,
                           idProveedor: listaGnr[i].idProveedor});

          this.listaUniveso.push({nombreProv: listaGnr[i].proveedor, fecha: fecha,
            fechaInspeccion: listaGnr[i].fechaInspeccion,
            totalOc: listaGnr[i].totalOC, totalProd: listaGnr[i].totalProducto,
            idProveedor: listaGnr[i].idProveedor});
        }
        this.coreContainer.closeModal(0);
      },
      error => {
        this.coreContainer.closeModal(0);
      });
  }
  buscar(search) {
    const searchArrayAux: any[] = [];
    this.searchTerm = search;
    if (search === '') {
      this.lista = [...this.listaUniveso];
    } else {
      this.listaUniveso.forEach(folio => {
        if (folio.nombreProv.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 ) {
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

  ordenamientoFechaTramNue() {
    this.tipoOrden = 'Más Recientes';
    this.lista.sort(function (a, b) {
      if (a.fechaInspeccion < b.fechaInspeccion) {
        return 1;
      }
      if (a.fechaInspeccion > b.fechaInspeccion) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  ordenamientoFechaTramAnt() {
    this.tipoOrden = 'Más Antiguos';
    this.lista.sort(function (a, b) {
      if (a.fechaInspeccion > b.fechaInspeccion) {
        return 1;
      }
      if (a.fechaInspeccion < b.fechaInspeccion) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

  llenarValoresData() {
    this.filtroProveedores = [];
    for (let valor of this.listaProveedores) {
      this.filtroProveedores.push(valor.proveedor);
    }
    let valoresP  = [] = [];
    let valoresProv  = [] = [];
    for (let nombre of this.listaProveedores) {
      valoresProv.push([0, 0, 0]);
      valoresP.push(0);
    }
    if (this.listaProveedores.length > 0) {
      this.dataProveedores = {
        titulo: 'Totales',
        labels: this.filtroProveedores,
        valores: valoresP,
        labelsExtras: ['Proveedores', 'Productos', 'OC'],
        labelsExtrasHover: ['Proveedores', 'Productos', 'OC'],
        valuesExtras: [this.totalesGrafica.totalProveedores, this.totalesGrafica.totalProducto, this.totalesGrafica.totalOC],
        valuesExtrasHover: valoresProv
      };
      this.tipoGrafica = 'General';
    } else {
      this.dataProveedores = {
        titulo: 'Totales',
        labels: [""],
        valores: [1],
        labelsExtras: ['Proveedores', 'Productos', 'OC'],
        labelsExtrasHover: ['Proveedores', 'Productos', 'OC'],
        valuesExtras: [0, 0, 0],
        valuesExtrasHover: [[0, 0, 0]]
      };
      this.tipoGrafica = 'Gris';
      setTimeout(() => {
        this.activarGrafica = true;
      }, 5);
    }
  }

  calcularDatosParaGraficas() {
    for (let productos of this.listaProveedores) {
      this.llenarTotalesGraficas(this.dataProveedores, productos, 'PROVEEDORES');
    }
  }
  llenarTotalesGraficas(total, elemento, graficaElegida) {
    switch (graficaElegida) {
      case 'PROVEEDORES':
        let valuesExtraAux = total.valuesExtras;
        let posicion1 = this.filtroProveedores.indexOf(elemento.proveedor);

        total.valuesExtrasHover[posicion1][0] += elemento.totalProveedores;
        total.valuesExtrasHover[posicion1][1] += +(elemento.totalProducto);
        total.valuesExtrasHover[posicion1][2] += elemento.totalOC;
        /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
        /*total.valuesExtras[1] = elemento.totalProducto;
        total.valuesExtras[0] += elemento.totalProveedores; // Total de Partidas
        total.valuesExtras[2] += elemento.totalOC;*/
        total.valores[posicion1] += elemento.totalProducto; // +(elemento.monto.toFixed(2)); //Monto total
        setTimeout(() => {
          this.activarGrafica = true;
        }, 5);
        break;
      default:
        break;
    }
  }
  seleccionarItem(i, item) {
    this.cliente = item.nombreProv;
    this.itemProveedor = item;
    this.vistaP = false;
  }
  cargarVista(valor) {
    this.obtenerDatos(this.usuario);
    this.obtenerValoresMenu(this.usuario);
    if (valor === true) {
      this.regresarVistaP();
    }
    setTimeout(() => {
      this.activarGrafica = false;
    }, 5);
  }
}
