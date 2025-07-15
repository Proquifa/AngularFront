import { Component, OnInit } from '@angular/core';
import {ArriboDocumentoService} from '../../../services/arribo-documento/arribo-documento.service';
import {SessionUser} from '../../../services/session/session.service';
import {CoreContainerComponent} from '../../core-container/core-container.component';
import {SaldosFavorService} from '../../../services/saldos-notas/saldos-favor.service';
import {ComunService} from '../../../services/comun/comun.service';

@Component({
  selector: 'pn-saldos',
  templateUrl: './saldos.component.html',
  styleUrls: ['./saldos.component.scss']
})
export class SaldosComponent implements OnInit {
  activeMenu: boolean;
  itemsMenu: any[] = [];
  classAsideMenu: string;
  ocultarAcor: boolean;
  usuario: any;
  rolMaster: boolean;
  vistaP: boolean;
  listaEmpresas: any[] = [];
  activeBotonera: boolean;
  selectItem = 0;
  lista: any[];
  listas: any[];
  listaUniverso: any[];
  listaFiltrado: any[] = [];
  tipoOrden: string;
  searchTerm: string;
  proveedores: any[];
  activeCombos: boolean;
  tipoFiltrado: string;
  eliminar: boolean;
  mensaje: string;
  folio: string;
  title: string;
  itemSelect: any;
  listaFD: any = [];
  constructor(private _trabajarArribo: ArriboDocumentoService, private core: CoreContainerComponent, private _serviceSaldo: SaldosFavorService, private comun: ComunService) { }

  ngOnInit() {
    this.obtenerDatos();
  }
  obtenerDatos() {
    this.tipoOrden = 'Todos';
    this.activeCombos = false;
    this.activeMenu = false;
    this.vistaP = true;
    this.classAsideMenu = 'asideNormalMenu';
    this.usuario = SessionUser.getInstance().getUser().getUsuario();
    this.obtenerValoresMenu(this.usuario);
    this.obetenerEmpresas();
  }

  obtenerValoresMenu(idUsuario) {
    this.rolMaster = false;
    const roles = SessionUser.getInstance().getUser().getRoles();
    this.core.openModal(1);
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
            {rol: 'GESTOR DE COMPRAS', active: true, menu: [{nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', disable: true, tipo: 'valor', valor: data.current.ArriboDocumentos, select: false},
                {nombre: 'Producto a Reclamo', url: 'productoReclamo',  tipo: 'valor', valor: data.current.ProductoReclamo},
                {
                  nombre: 'Cargar Saldos a Favor',
                  tipo: '',
                  valor: 0,
                  url: 'poolVisitas',
                  disable: true,
                  subMenu: [
                    { nombre: 'Nota de Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: false},
                    { nombre: 'Saldo a Favor', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: true}
                  ],
                  select: false
                }
                ]},
            {rol: 'GESTOR DE OPERACIONES', active: false, menu : [
                {nombre: 'Consola de Prioridades', url: 'consolaPrioridades', tipo: 'flecha'},
                {nombre: 'Consola de Envíos', url: 'consolaEnvio', select: false},
                {nombre: 'Material en Stock', url: 'stock', select: false},
                {nombre: 'Material en Destrucción', url: 'consolaDest', select: false}
              ]}
          ];
        } else {
          this.itemsMenu = [
            {rol: 'GESTOR DE COMPRAS', active: true, menu: [
                {nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', tipo: 'valor', valor: data.current.ArriboDocumentos, select: false},
                {nombre: 'Producto a Reclamo', url: 'productoReclamo',  tipo: 'valor', valor: data.current.ProductoReclamo},
                {
                  nombre: 'Cargar Saldos a Favor',
                  tipo: '',
                  valor: 0,
                  url: 'poolVisitas',
                  disable: true,
                  subMenu: [
                    { nombre: 'Nota de Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: false},
                    { nombre: 'Saldo a Favor', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: true}
                  ],
                  select: false
                }]}
          ];
        }
        this.activeMenu = true;
        this.core.closeModal(1);
      },
      error => {

      });
  }
  obetenerEmpresas() {
    this.activeBotonera = false;
    const obj = {
      tipo: 'Saldo'
    };
    this.listaEmpresas = [];
    this.proveedores = [];
    this.core.openModal(1);
    this._serviceSaldo.obtenerLista(obj).subscribe(
      data => {
        let title: string;
        let listaProvee: any;
          const botonera = data.current['BARRAS'];
        if (data.current.TODAS !== null && data.current.TODAS !== undefined && data.current.TODAS.length > 0) {
          this.listaUniverso = data.current.TODAS;
          this.lista = data.current.TODAS;
          this.listas = data.current;
          listaProvee = data.current.PROVEEDORES;
          this.proveedores.push({nombre: 'TODOS', key: 0});
          for (let i = 0; i < listaProvee.length; i++) {
            this.proveedores.push({nombre: listaProvee[i].proveedor.nombre, key: i + 1});
          }
          this.activeCombos = true;
          this.ordenamientoFechaTramNue();
        }
          for (let i = 0; i < botonera.length; i++) {
            if (botonera[i].total > 1) {
              title = 'Saldos';
            } else {
              title = 'Saldo';
            }
            this.listaEmpresas.push({nombre: botonera[i].etiqueta, total: botonera[i].total, etiquetaTotal: title, pos: i});
          }
          this.activeBotonera = true;
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
  abrirNuevo() {
    this.vistaP = false;
  }
  regresarVistaP( valor) {
    this.vistaP = true;
    if (!valor) {
      this.obtenerDatos();
    }
  }
  seleccionarLista(tipo) {
    this.searchTerm = '';
    this.selectItem = tipo.pos;
    this.lista = this.listas[tipo.nombre];
    this.listaUniverso = this.listas[tipo.nombre];
    if (this.tipoFiltrado !== undefined && this.tipoFiltrado !== 'TODOS') {
      const obj = {
        nombre: this.tipoFiltrado
      };
      this.filtrarEmpresa(obj);
    } else {

      if (this.tipoOrden === 'Más Antiguas') {
        this.ordenamientoFechaTramAnt();
      } else if (this.tipoOrden === 'Más Nuevas') {
        this.ordenamientoFechaTramNue();
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
  buscar(search) {
    const searchArrayAux: any[] = [];
    this.searchTerm = search;
    if (this.tipoFiltrado !== undefined && this.tipoFiltrado !== null && this.tipoFiltrado !== 'Seleccionar') {
      if (search === '') {
        this.lista = [...this.listaFiltrado];
      } else {
        for (let i = 0; i < this.listaFiltrado.length; i++) {
          if (this.listaFiltrado[i].folio.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
            searchArrayAux.push(this.listaFiltrado[i]);
          }
        }
        this.lista = searchArrayAux;
      }
    } else {
      if (search === '') {
        this.lista = [...this.listaUniverso];
      } else {
        for (let i = 0; i < this.listaUniverso.length; i++) {
          if (this.listaUniverso[i].folio.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
            searchArrayAux.push(this.listaUniverso[i]);
          }
        }
        this.lista = searchArrayAux;
      }
    }

  }
  ordenamientoFechaTramNue() {
    this.tipoOrden = 'Más Nuevas';
    this.lista.sort(function (a, b) {
      if (a.ordenarFecha < b.ordenarFecha) {
        return 1;
      }
      if (a.ordenarFecha > b.ordenarFecha) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  ordenamientoFechaTramAnt() {
    this.tipoOrden = 'Más Antiguas';
    this.lista.sort(function (a, b) {
      if (a.ordenarFecha > b.ordenarFecha) {
        return 1;
      }
      if (a.ordenarFecha < b.ordenarFecha) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

  filtrarEmpresa(valores) {
    let lista: any[];
    if (valores.nombre !== 'TODOS') {
       lista = this.listaUniverso.filter(item => item.proveedor.nombre.toLowerCase() === valores.nombre.toLowerCase());
    } else {
      lista = [...this.listaUniverso];
    }
    this.lista = lista;
    this.listaFiltrado = lista;
    this.tipoFiltrado = valores.nombre;
    this.searchTerm = '';

    if (this.tipoOrden === 'Más Antiguas') {
      this.ordenamientoFechaTramAnt();
    } else if (this.tipoOrden === 'Más Nuevas') {
      this.ordenamientoFechaTramNue();
    }
  }

  eliminarSaldo(item) {
    this.mensaje = '¿ Seguro que desea eliminar el saldo a favor con';
    this.folio = 'Folio ' + item.folioDocto + '?';
    this.eliminar = true;
    this.itemSelect = item;
  }

  recibirValor(event) {
    this.eliminar = false;
    const datas = {
      idSaldo: this.itemSelect.idSaldo,
      habilitado: false
    };
    if (event) {
      this._serviceSaldo.eliminarSaldo(datas).subscribe(
        data => {
            if (data.current) {
              this.obtenerDatos();
            }
        });
    }
  }
  openBrowser(item) {
    console.log('Entre ');
    const shell  = electron.shell;
    this.comun.obtenerRuta(item.folioDocto, 'Saldo', '').then(
      data => {
        shell.openExternal(data);
      });

  }
}
