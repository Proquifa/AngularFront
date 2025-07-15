import { Component, OnInit } from '@angular/core';
import {MaterialDestruccionService} from '../../services/consola-destruccion/material-destruccion.service';
import {CoreContainerComponent} from '../core-container/core-container.component';
import {InspeccionService} from '../../services/inspeccion/inspeccion.service';
import {ComunService} from "../../services/comun/comun.service";
import {Subscription} from "rxjs";
import {SessionUser} from "../../services/session/session.service";
import {ProductoReclamoService} from "../../services/gestor-producto-reclamo/producto-reclamo.service";

@Component({
  selector: 'pn-consola-productos-destruccion',
  templateUrl: './consola-productos-destruccion.component.html',
  styleUrls: ['./consola-productos-destruccion.component.scss']
})
export class ConsolaProductosDestruccionComponent implements OnInit {
  itemsMenu: any[];
  activar: boolean;
  classAsideMenu: string;
  ocultarAcor: boolean;
  dispobliesParts: boolean;
  lista: any[];
  listaUniverso: any[];
  activeMarca: boolean;
  searchTerm: string;
  marcas: any[];
  filtroMarca: string;
  filtroManejo: string;
  filtroControl: string;
  listaFiltros: any[];
  listaEnviar: any[] = [];
  activePop: boolean;
  activeCheck: boolean;
  control: any[] = [{nombre: 'Todos', key: 0},
                    {nombre: 'Normal', key: 1},
                    {nombre: 'Origen', key: 2},
                    {nombre: 'Mundiales', key: 3},
                    {nombre: 'Nacionales', key: 4}];
  tipoManejo: any[] = [{nombre: 'Todos', key: 0},
                       {nombre: 'Ambiente', key: 1},
                       {nombre: 'Refrigeración', key: 2},
                       {nombre: 'Congelación', key: 3}];
  subs: Subscription;
  usuario: string;
  roles: any;
  rolMaster: boolean;
  constructor(private _serviceConsole: MaterialDestruccionService, private core: CoreContainerComponent, private _insp: InspeccionService, private comunService: ComunService, private _serviceReclamo: ProductoReclamoService) { }

  ngOnInit() {
    this.classAsideMenu = 'asideNormalMenu';
    this.roles = SessionUser.getInstance().getUser().getRoles();
    this.usuario = SessionUser.getInstance().getUser().getUsuario();
    this.subs = this.comunService.recargar.subscribe(
      (data) => {
        if (data === 'consolaDest') {
          this.obtenerDatos();
        }
      });
    this.obtenerDatos();
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
              {nombre: 'Material en Stock', url: 'stock', select: false},
              {nombre: 'Material en Destrucción', url: 'consolaDest', select: true}]}
        ];
        this.activar = true;
        this.core.closeModal(1);
      },
      error => {
        this.core.closeModal(1);
      });
  }
  mostarOcultarAcordeon() {
    this.ocultarAcor = !this.ocultarAcor;
    if (this.ocultarAcor) {
      this.classAsideMenu = 'asideOcultarMenu';
    } else {
      this.classAsideMenu = 'asideMostrarMenu';
    }
  }

  obtenerDatos() {
    this.activeCheck = false;
    this.marcas = [];
    this.filtroMarca = '';
    this.filtroManejo = '';
    this.filtroControl = '';
    this.activeMarca = false;
    this.activar = false;
    this.obtenerTotales();
    this.core.openModal(1);
    this._serviceConsole.obtenerListado().subscribe(
      data => {
          if (data.current.Todas !== null && data.current.Todas.length > 0) {
            this.lista = data.current.Todas;
            this.listaUniverso = data.current.Todas;
            this.dispobliesParts = true;
            const marcas = data.current.Marcas;
            this.marcas.push({nombre: 'Todos', key: 0});
            for (let i = 0; i < marcas.length; i++) {
              this.marcas.push({nombre: marcas[i].fabrica, key: i + 1});
            }
            this.activeMarca = true;
          } else {
            this.dispobliesParts = false;
          }
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
          {nombre: 'Material en Stock', url: 'stock', select: false},
          {nombre: 'Material en Destrucción', url: 'consolaDest', select: true}
        ]}];

      this.activar = true;
    }
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
  enviarDestruccion() {
      this.activePop = true;
  }
  cerrarPop(datas) {
    this.activePop = false;
    if (datas.valor) {
      this.cerrarPendiente(datas.archivo);
    }
  }
  selectedItem(event, items) {
    items.active = event;
    this.validateCheck();
  }
  validateCheck() {
    let lista = [];
    lista = this.lista.filter(item => item.active === true);
    this.listaEnviar = [...lista];
  }
  cerrarPendiente(archivo) {
    this.core.openModal(1);
    this._serviceConsole.enviarDestruccion(this.listaEnviar).subscribe(
      data => {
        if (data.current !== null) {
          this.enviarArchivo(archivo, data.current + '.pdf');
        }
        this.core.closeModal(1);
      },
      error => {
        this.core.closeModal(1);
      });
  }

  enviarArchivo(archivo, nameFile) {
    this.core.openModal(1);
    this._serviceConsole.uploadFile(archivo, nameFile, 'Productos_Destruccion', '1').subscribe(
    data => {
        this.core.closeModal(1);
        this.obtenerDatos();
    },
      error => {
        this.core.closeModal(1);
    });
  }

  completeSelected(valor) {
    for (let i = 0; i < this.lista.length; i++) {
      this.lista[i].active = valor;
    }
    this.activeCheck = valor;
    this.validateCheck();
  }
}
