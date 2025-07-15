import { Component, OnInit } from '@angular/core';
import {CoreContainerComponent} from '../core-container/core-container.component';
import {ProductoReclamoService} from '../../services/gestor-producto-reclamo/producto-reclamo.service';
import {dateFormatSlash} from '../../pipes/accounting/accounting.pipe';
import {SessionUser} from '../../services/session/session.service';

@Component({
  selector: 'pn-producto-reclamo',
  templateUrl: './producto-reclamo.component.html',
  styleUrls: ['./producto-reclamo.component.scss']
})
export class ProductoReclamoComponent implements OnInit {
  ocultarAcor: boolean;
  itemsMenu: any;
  classAsideMenu: string = 'asideNormalMenu';
  vistaP: boolean;
  cliente: string;
  tipoGraficaProveedores: string;
  activarProveedores: boolean;
  activarBarra: boolean;
  dataBarra: any;
  tipoOrden: string;
  searchTerm: string;
  lista: any[] = [];
  listaUniverso: any[] = [];
  totalProductos: number = 0;
  totalOc: number = 0;
  listaGrafica: any[] = [];
  datosProveedor: any;
  listaUniveso: any[] = [];
  listaBarra: any[] = [];
  totalesGrafica: any;
  dataProveedores: any;
  filtroProveedores: any[] = [];
  activeMenuReclamo: boolean;
  usuario: string;
  rolMaster: boolean;
  colores = ['#D2B422', '#DE0209', '#F09600', '#4BA92B'];
  constructor(private coreContainer: CoreContainerComponent, private _serviceReclamo: ProductoReclamoService) { }

  ngOnInit() {
    this.vistaP = true;
    this.tipoOrden = 'Todos';
    this.usuario = SessionUser.getInstance().getUser().getUsuario();
    this.obtenerDatos();
    this.obtenerValoresMenu(this.usuario);
  }
  obtenerValoresMenu(idUsuario) {
    this.activeMenuReclamo = false;
    this.rolMaster = false;
    this.coreContainer.openModal(1);
    const roles = SessionUser.getInstance().getUser().getRoles();
    this._serviceReclamo.obtenerTotales(idUsuario).subscribe(
      data => {
        for (let i = 0; i < roles.length; i ++ ) {
          if (roles[i] === 'Comprador_Master') {
            this.rolMaster = true;
          }
        }
        console.log(data);
        if (this.rolMaster) {
          this.itemsMenu = [{rol: 'GESTOR DE COMPRAS', active: true, menu: [
              {nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', select: false, tipo: 'valor', valor: data.current.ArriboDocumentos},
              {nombre: 'Producto a Reclamo', url: 'productoReclamo', tipo: 'valor', valor: data.current.ProductoReclamo, select: true},
              {
                nombre: 'Cargar Saldo a Favor',
                tipo: '',
                valor: 0,
                url: 'poolVisitas',
                disable: true,
                subMenu: [
                  { nombre: 'Nota Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: false},
                  { nombre: 'Saldo a Favor', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: false}
                ],
                select: false
              }
            ]},
            {rol: 'GESTOR DE OPERACIONES', active: false, menu: [
                {nombre: 'Consola de Prioridades', url: 'consolaPrioridades', tipo: 'flecha'},
                {nombre: 'Consola de Envíos', url: 'consolaEnvio', select: false},
                {nombre: 'Material en Stock', url: 'stock', select: false},
                {nombre: 'Material en Destrucción', url: 'consolaDest', select: false}
            ]}];
        } else {
          this.itemsMenu = [
            {rol: 'GESTOR DE COMPRAS', active: true, menu: [
                {nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', select: false, tipo: 'valor', valor: data.current.ArriboDocumentos},
                {nombre: 'Producto a Reclamo', url: 'productoReclamo', tipo: 'valor', valor: data.current.ProductoReclamo, select: true},
                {
                  nombre: 'Cargar Saldo a Favor',
                  tipo: '',
                  valor: 0,
                  url: 'poolVisitas',
                  disable: true,
                  subMenu: [
                    { nombre: 'Nota Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: false},
                    { nombre: 'Saldo a Favor', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: false}
                  ],
                  select: false
                }
              ]}
          ];
        }
        this.activeMenuReclamo = true;
        this.coreContainer.closeModal(1);
      },
      error => {
        this.coreContainer.closeModal(1);
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
    this._serviceReclamo.piezasRechazadas().subscribe(
      data => {
        this.listaBarra = data.current.barra;
        if (data.current.grafica && data.current.grafica !== undefined) {
          this.listaGrafica = data.current.grafica;
          this.totalesGrafica = data.current.totales;
        }
        if (data.current.lista && data.current.lista !== undefined) {

          const listaAux = data.current.lista;
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
        this.llenarGraficaBarra();
        this.limpiarDataG();
      },
      error => {
        console.log(error);
      });
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
    const valoresP  = [] = [];
    const valoresProvee = [] = [];
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
  buscar(search) {
    const searchArrayAux: any[] = [];
    this.searchTerm = search;
    if (this.listaUniverso.length > 0) {
      if (search === '') {
        this.lista = [...this.listaUniverso];
      } else {
        this.listaUniverso.forEach(folio => {
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
  }
  /*****/
  abreCombo() {
    if (document.getElementById('section').className === 'visible') {
      document.getElementById('section').className = '';
    } else {
      document.getElementById('section').className = 'visible';
    }
  }
  mostarOcultarAcordeon() {
    this.ocultarAcor = !this.ocultarAcor;
    if (this.ocultarAcor) {
      this.classAsideMenu = 'asideOcultarMenu';
    } else {
      this.classAsideMenu = 'asideMostrarMenu';
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
  regresarVistaP() {
    this.vistaP = true;
  }
  seleccionarItem(i, item) {
    this.datosProveedor = item;
    this.vistaP = false;
  }
  vistaInicial() {
    this.vistaP = true;
    this.tipoOrden = 'Todos';
    this.obtenerValoresMenu(this.usuario);
    this.obtenerDatos();
  }
}
