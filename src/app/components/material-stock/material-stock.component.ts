import { Component, OnInit } from '@angular/core';
import {ConsolaStockService} from '../../services/consola-stock/consola-stock.service';
import {CoreContainerComponent} from '../core-container/core-container.component';
import {ComunService} from "../../services/comun/comun.service";
import {Subscribable} from "rxjs/Observable";
import {Subscription} from "rxjs";
import {ProductoReclamoService} from "../../services/gestor-producto-reclamo/producto-reclamo.service";
import {SessionUser} from "../../services/session/session.service";

@Component({
  selector: 'pn-material-stock',
  templateUrl: './material-stock.component.html',
  styleUrls: ['./material-stock.component.scss']
})
export class MaterialStockComponent implements OnInit {
  itemsMenu: any[];
  activar: boolean;
  classAsideMenu: string;
  ocultarAcor: boolean;
  partHabilidatas: boolean;
  listaTipos: any = [];
  activeBotonera: boolean;
  selectItem = 0;
  lista: any = [];
  listas: any = [];
  listaUniverso: any = [];
  searchTerm: string;
  notificado: boolean;
  itemStock: any;
  estadoBotonera: string;
  marcas: any[] = [];
  control = [{nombre: 'Todos', key: 0},
             {nombre: 'Normal', key: 1},
             {nombre: 'Origen', key: 2},
             {nombre: 'Mundiales', key: 3},
             {nombre: 'Nacionales', key: 4}];
  tipoManejo = [{nombre: 'Todos', key: 0},
                {nombre: 'Ambiente', key: 1},
                {nombre: 'Refrigeración', key: 2},
                {nombre: 'Congelación', key: 3}];
  filtroMarca: string;
  filtroControl: string;
  filtroManejo: string;
  activeMarca: boolean;
  listaFiltros: any[] = [];
  subs: Subscription;
  roles: any;
  rolMaster: boolean;
  usuario: string;
  constructor(private serviceStock: ConsolaStockService, private core: CoreContainerComponent, private comunService: ComunService, private _serviceReclamo: ProductoReclamoService) { }

  ngOnInit() {
    this.roles = SessionUser.getInstance().getUser().getRoles();
    this.usuario = SessionUser.getInstance().getUser().getUsuario();
    this.subs = this.comunService.recargar.subscribe(
      (data) => {
        if (data === 'stock') {
          this.llenarDatos();
        }
      });
    this.llenarDatos();
  }

  llenarDatos() {
    this.filtroMarca = '';
    this.filtroControl = '';
    this.filtroManejo = '';
    this.marcas = [];
    this.listaTipos = [];
    this.activeMarca = false;
    this.notificado = false;
    this.classAsideMenu = 'asideNormalMenu';
    this.partHabilidatas = true;
    this.obtenerListado();
  }
  mostarOcultarAcordeon() {
    this.ocultarAcor = !this.ocultarAcor;
    if (this.ocultarAcor) {
      this.classAsideMenu = 'asideOcultarMenu';
    } else {
      this.classAsideMenu = 'asideMostrarMenu';
    }
  }
  obtenerListado() {
    this.activar = false;
    this.obtenerTotales();
    this.activeBotonera = false;
    this.core.openModal(1);
    this.serviceStock.obtenerListado().subscribe(
      data => {
        this.listas = data.current;
        this.listaUniverso = data.current.TODAS;
        this.lista = data.current.TODAS;
        const array = Object.getOwnPropertyNames(data.current);
        let title;
        this.listaTipos.push({nombre: 'TODAS', total: data.current.TODAS.length, etiquetaTotal: 'PIEZAS', pos: 0});
        for (let i = 0; i < array.length; i ++) {
          if (this.listas[array[i]].length > 1) {
            title = 'PIEZAS';
          } else {
            title = 'PIEZA';
          }
          if (array[i] !== 'TODAS' && array[i] !== 'MARCAS') {
            this.listaTipos.push({nombre: array[i], total: this.listas[array[i]].length, etiquetaTotal: title, pos: i + 1});
          }

        }
        this.activeBotonera = true;
        const marca = data.current.MARCAS;
        this.marcas.push({nombre: 'Todos', key: 0});
        for (let i = 0; i < marca.length; i++) {
          this.marcas.push({nombre: marca[i].fabrica, key: i + 1});
        }
        this.activeMarca = true;
        this.core.closeModal(1);
      },
      error => {
        this.core.closeModal(1);
      });
  }
  obtenerTotales() {
    for (let i = 0; i < this.roles.length; i ++ ) {
      if (this.roles[i] === 'Comprador_Master') {
        this.rolMaster = true;
      }
    }
    if (this.rolMaster) {
      this.obtenerValoresMenu(this.usuario);
    } else {
      this.itemsMenu = [{rol: 'GESTOR DE OPERACIONES', active: true,
        menu: [{nombre: 'Consola de Prioridades', url: 'consolaPrioridades', select: false},
          {nombre: 'Consola de Envíos', url: 'consolaEnvio', select: false},
          {nombre: 'Material en Stock', url: 'stock', select: true},
          {nombre: 'Material en Destrucción', url: 'consolaDest', select: false}
        ]}];

      this.activar = true;
    }
  }
  obtenerValoresMenu(idUsuario) {
    this.core.openModal(1);
    this._serviceReclamo.obtenerTotales(idUsuario).subscribe(
      data => {
        console.log(data);
        this.itemsMenu = [
          {rol: 'GESTOR DE COMPRAS', active: false, menu: [
              {nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', select: false, tipo: 'valor', valor: data.current.ArriboDocumentos},
              {nombre: 'Producto a Reclamo', url: 'productoReclamo', tipo: 'valor', valor: data.current.ProductoReclamo, select: false},
              {
                nombre: 'Cargar Saldo a Favor',
                tipo: '',
                valor: 0,
                url: 'poolVisitas',
                disable: true,
                subMenu: [
                  { nombre: 'Nota de Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: false},
                  { nombre: 'Saldo a Favor', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: false}
                ],
                select: false
              }
            ]},
          {rol: 'GESTOR DE OPERACIONES', active: true,
            menu: [{nombre: 'Consola de Prioridades', url: 'consolaPrioridades', select: false, tipo: 'flecha'},
              {nombre: 'Consola de Envíos', url: 'consolaEnvio', select: false},
              {nombre: 'Material en Stock', url: 'stock', select: true},
              {nombre: 'Material en Destrucción', url: 'consolaDest', select: false}]}
        ];
        this.activar = true;
        this.core.closeModal(1);
      },
      error => {
        this.core.closeModal(1);
      });
  }
  seleccionarLista(tipo) {
    this.selectItem = tipo.pos;
    this.estadoBotonera = tipo.nombre;
    this.lista = this.listas[tipo.nombre];
    this.listaUniverso = this.listas[tipo.nombre];

    let obj: Object;
    if (this.filtroControl !== '') {
      obj = {nombre: this.filtroControl};
      this.filtrar(obj, 'Control');
    } else if (this.filtroMarca !== '') {
      obj = {nombre: this.filtroMarca};
      this.filtrar(obj, 'Marca');
    } else if (this.filtroManejo !== '') {
      obj = {nombre: this.filtroManejo};
      this.filtrar(obj, 'Manejo');
    }
    this.searchTerm = '';
  }
  buscar(search) {
    const searchArrayAux: any[] = [];
    this.searchTerm = search;
    if (search === '') {
      if ( this.filtroManejo !== '' || this.filtroMarca !== '' || this.filtroControl !== '') {
       this.lista = [...this.listaFiltros];
      } else {
        this.lista = [...this.listaUniverso];
      }
    } else {
      if ( this.filtroManejo !== '' || this.filtroMarca !== '' || this.filtroControl !== '') {
        if (this.listaFiltros.length > 0) {
          for (let i = 0; i < this.listaFiltros.length; i++) {
            if (this.listaFiltros[i].codigo.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || this.listaFiltros[i].descripcion.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
              searchArrayAux.push(this.listaFiltros[i]);
            }
          }
        }
      } else {
        for (let i = 0; i < this.listaUniverso.length; i++) {
          if (this.listaUniverso[i].codigo.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || this.listaUniverso[i].descripcion.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
            searchArrayAux.push(this.listaUniverso[i]);
          }
        }
      }
      this.lista = searchArrayAux;
    }
  }
  filtrar(valores, tipo) {
    let lista: any[];
    let listaAux: any[];
    if (valores.nombre !== 'Todos') {
      if (tipo === 'Marca') {
        lista = this.listaUniverso.filter(item => item.fabrica.toLowerCase() === valores.nombre.toLowerCase());
        if (this.filtroControl !== '' && lista.length > 0) {
            listaAux = [...lista];
            lista = listaAux.filter(item => item.control.toLowerCase() === this.filtroControl.toLowerCase());
        }
        if (this.filtroManejo !== '' && lista.length > 0) {
           listaAux = [...lista];
          lista = listaAux.filter(item => item.manejoTransporte.toLowerCase() === this.filtroManejo.toLowerCase());
        }

        this.filtroMarca = valores.nombre;
      } else if (tipo === 'Control') {
        lista = this.listaUniverso.filter(item => item.control.toLowerCase() === valores.nombre.toLowerCase());

        if (this.filtroMarca !== '' && lista.length > 0) {
          listaAux = [...lista];
          lista = listaAux.filter(item => item.fabrica.toLowerCase() === this.filtroMarca.toLowerCase());
        }
        if (this.filtroManejo !== '' && lista.length > 0) {
          listaAux = [...lista];
          console.log(listaAux.filter(item => item.manejoTransporte.toLowerCase() === this.filtroManejo.toLowerCase()));
          lista = listaAux.filter(item => item.manejoTransporte.toLowerCase() === this.filtroManejo.toLowerCase());
        }
        this.filtroControl = valores.nombre;
      } else if (tipo === 'Manejo') {
        lista = this.listaUniverso.filter(item => item.manejoTransporte.toLowerCase() === valores.nombre.toLowerCase());
        this.filtroManejo = valores.nombre;
        if (this.filtroMarca !== '' && lista.length > 0) {
          listaAux = [...lista];
          lista = listaAux.filter(item => item.fabrica.toLowerCase() === this.filtroMarca.toLowerCase());
        }
        if (this.filtroControl !== '' && lista.length > 0) {
          listaAux = [...lista];
          lista = listaAux.filter(item => item.control.toLowerCase() === this.filtroControl.toLowerCase());
        }
      }
    } else {
      if (tipo === 'Marca') {
        this.filtroMarca = '';
      } else if (tipo === 'Manejo') {
        this.filtroManejo = '';
      } else if (tipo === 'Control') {
        this.filtroControl = '';
      }
      lista = [...this.listaUniverso];
      if (this.filtroControl !== '') {
        listaAux = [...lista];
        lista = listaAux.filter(item => item.control.toLowerCase() === this.filtroControl.toLowerCase());
      }
      if (this.filtroManejo !== '' && lista.length > 0) {
        listaAux = [...lista];
        lista = listaAux.filter(item => item.manejoTransporte.toLowerCase() === this.filtroManejo.toLowerCase());
      }
      if (this.filtroMarca !== '' && lista.length > 0) {
        listaAux = [...lista];
        lista = listaAux.filter(item => item.fabrica.toLowerCase() === this.filtroMarca.toLowerCase());
      }
    }
    this.lista = lista;
    this.searchTerm = '';
    this.listaFiltros = [...lista];
  }
  eliminarStock(item) {
    this.itemStock = item;
    this.notificado = true;
  }
  cerrarPop(datas) {
    if (datas.valor) {
      const obj = {
        descripcion: datas.reason,
        idProducto: datas.item.idProducto,
        piezas: datas.item.piezas,
        idPCompra: datas.item.idPCompra
      };
      this.core.openModal(1);
      this.serviceStock.eliminarStock(obj).subscribe(
        data => {
          if (data.current) {
            this.searchTerm = '';
            this.llenarDatos();
          }
          this.core.closeModal(1);
        },
        error => {
          this.core.closeModal(1);
        });
    }
    this.notificado = false;
  }
}
