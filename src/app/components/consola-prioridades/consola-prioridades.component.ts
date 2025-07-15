import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {ConsolaPrioridadesService} from '../../services/consola/consola-prioridades.service';
import {forEach} from '@angular/router/src/utils/collection';
import {CoreContainerComponent} from '../core-container/core-container.component';
import {ProductoReclamoService} from '../../services/gestor-producto-reclamo/producto-reclamo.service';
import {SessionUser} from '../../services/session/session.service';
import {Subscription} from 'rxjs/Subscription';
import {ComunService} from '../../services/comun/comun.service';

@Component({
  selector: 'pn-consola-prioridades',
  templateUrl: './consola-prioridades.component.html',
  styleUrls: ['./consola-prioridades.component.scss']
})
export class ConsolaPrioridadesComponent implements OnInit {
  classAsideMenu: string;
  itemsMenu: any[];
  activar: boolean;
  ocultarAcor: boolean;
  listaZonas: any[];
  activarBtn: boolean;
  searchTerm: string;
  tipoOrden: string;
  folio: string;
  lista: any[];
  listaFiltrado: any[];
  listas: any[];
  listaUniverso: any[];
  activeBotonera: boolean;
  partHabilidatas: boolean;
  estadoBotonera = '';
  rolMaster: boolean;
  usuario: string;
  tipoOrdenFiltrado: string;
  element: any;
  roles: any;
  subs: Subscription;
  deleteRestriction: boolean;
  activeRestriction: boolean;
  cliente: string;
  selectItem: number;
  recargar = 0;
  itemSelect: any;
  activePop: boolean;
  inforCliente: any;
  constructor(private _consolaService: ConsolaPrioridadesService, private coreComponent: CoreContainerComponent, private _serviceReclamo: ProductoReclamoService, private e: ElementRef, private comunService: ComunService) {
    this.element = e.nativeElement;
  }
  ngOnDestroy(): void {
    this.element.remove();
  }
  ngOnInit() {
    this.classAsideMenu = 'asideNormalMenu';
    this.roles = SessionUser.getInstance().getUser().getRoles();
    this.usuario = SessionUser.getInstance().getUser().getUsuario();
    for (let i = 0; i < this.roles.length; i ++ ) {
      if (this.roles[i] === 'Comprador_Master') {
        this.rolMaster = true;
      }
    }
    if (this.rolMaster) {
      this.obtenerValoresMenu(this.usuario);
    } else {
      this.itemsMenu = [{rol: 'GESTOR DE OPERACIONES', active: true,
        menu: [{nombre: 'Consola de Prioridades', url: 'consolaPrioridades', select: true},
              {nombre: 'Consola de Envíos', url: 'consolaEnvio', select: false},
              {nombre: 'Material en Stock', url: 'stock', select: false},
              {nombre: 'Material en Destrucción', url: 'consolaDest', select: false}
              ]}];

      this.activar = true;
    }
    this.subs = this.comunService.recargar.subscribe(
      (data) => {
        if (data === 'consolaPrioridades') {
          this.obtenerDatos();
        }
      });
    this.element.addEventListener('click', e => {
      if (e.target.id !== 'menuOrden' && e.target.id !== 'menuOrdenLabel' && e.target.id !== 'menuOrden1' && e.target.id !== 'menuOrden2' && e.target.id !== 'menuOrden3'
        && e.target.id !== 'menuFiltro' && e.target.id !== 'menuFiltro1' && e.target.id !== 'menuFiltro2' && e.target.id !== 'menuFiltro3' && e.target.id !== 'menuFiltrolabel') {
        if (document.getElementById('section') !== null) {
          document.getElementById('section').className = '';
        }
        if (document.getElementById('sectionFiltrado') !== null) {
          document.getElementById('sectionFiltrado').className = '';
        }
      }
    });
    this.obtenerDatos();
  }
  obtenerDatos() {
    this.tipoOrdenFiltrado = 'Filtrar';
    this.activarBtn = true;
    this.tipoOrden = 'Todos';
    this.folio = '';
    this.datosBotonera();
  }
  obtenerValoresMenu(idUsuario) {
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
              menu: [{nombre: 'Consola de Prioridades', url: 'consolaPrioridades', select: true, tipo: 'flecha'},
                     {nombre: 'Consola de Envíos', url: 'consolaEnvio', select: false},
                     {nombre: 'Material en Stock', url: 'stock', select: false},
                     {nombre: 'Material en Destrucción', url: 'consolaDest', select: false}]}
          ];
        this.activar = true;
      },
      error => {

      });
  }

  datosBotonera() {
    this.recargar = 0;
    this.coreComponent.openModal(1);
    this.activeBotonera = false;
    this._consolaService.datosBotonera().subscribe(
      data => {
        let i: number;
        this.listaZonas = [];
        if (data.current.barra !== undefined && data.current.barra !== null && data.current.barra.length > 0) {
          this.partHabilidatas = true;
          let title: string;
          const listaBarra = data.current.barra;
          this.listas = data.current;
          this.listaUniverso = data.current.TODAS;
          this.lista = data.current.TODAS;
          i = 0;
          listaBarra.forEach( zona => {
            if (zona.totalClientes === 1) {
              title = 'Cliente';
            } else {
              title = 'Clientes';
            }
            if (zona.totalClientes != null && zona.totalClientes > 0) {
              this.listaZonas.push({nombre: zona.zona, total: zona.totalClientes, etiquetaTotal: title, pos: i});
              i++;
            }
          });
          if (this.estadoBotonera === null || this.estadoBotonera ===  '') {
            this.selectItem = 0;
          }
          this.activeBotonera = true;
        if (this.estadoBotonera !== '') {
          this.recargar = 1;
        }
        } else {
          this.partHabilidatas = false;
        }
        this.coreComponent.closeModal(1);
      },
      error => {
        this.coreComponent.closeModal(1);
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
  /*****/
  abreCombo() {
    if (document.getElementById('section').className === 'visible') {
      document.getElementById('section').className = '';
    } else {
      document.getElementById('section').className = 'visible';
    }
  }
  abreComboFiltrado() {
    if (document.getElementById('sectionFiltrado').className === 'visible') {
      document.getElementById('sectionFiltrado').className = '';
    } else {
      document.getElementById('sectionFiltrado').className = 'visible';
    }
  }
  buscar(search) {
    let part = [];
    const searchArrayAux: any[] = [];
    this.searchTerm = search;
    if (this.tipoOrdenFiltrado !== 'Todos' && this.tipoOrdenFiltrado !== 'Filtrar') {
      if (search === '') {
        this.lista = [...this.listaFiltrado];
      } else {
        for (let i = 0; i < this.listaFiltrado.length; i++) {
          part = this.listaFiltrado[i].partidas;
          if (this.listaFiltrado[i].contacto.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || this.listaFiltrado[i].cliente.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
            searchArrayAux.push(this.listaFiltrado[i]);
          } else {
            for (let j = 0; j < part.length; j++) {
              if (part[j].codigo === null) {
                part[j].codigo = '';
              }
              if (part[j].descripcion == null) {
                part[j].descripcion = '';
              }
              if (part[j].cpedido.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || part[j].codigo.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || part[j].descripcion.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                searchArrayAux.push(this.listaUniverso[i]);
                break;
              }
            }
          }
        }
        this.lista = searchArrayAux;
      }
    } else {
      if (search === '') {
        this.lista = [...this.listaUniverso];
      } else {
        for (let i = 0; i < this.listaUniverso.length; i++) {
          part = this.listaUniverso[i].partidas;
          if (this.listaUniverso[i].contacto.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || this.listaUniverso[i].cliente.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
            searchArrayAux.push(this.listaUniverso[i]);
          } else {
            for (let j = 0; j < part.length; j++) {
              if (part[j].codigo === null) {
                part[j].codigo = '';
              }
              if (part[j].descripcion == null) {
                part[j].descripcion = '';
              }
              if (part[j].cpedido.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || part[j].codigo.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || part[j].descripcion.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                searchArrayAux.push(this.listaUniverso[i]);
                break;
              }
            }
          }
        }
        this.lista = searchArrayAux;
      }
    }

    if (this.tipoOrden !== 'Todos') {
      this.ordenamiento(this.tipoOrden);
    }
  }
  ordenamiento(tipo) {
    const searchArrayAux: any[] = [];
    let valor: number;
    if (tipo === 'Urgencia') {
      this.tipoOrden = 'Urgencia';
      valor = 1;
    } else if (tipo === 'Por Sistema') {
      valor = 0;
      this.tipoOrden = 'Por Sistema';
    }

    this.lista.forEach(folio => {
      if (folio.urgencia === valor) {
        searchArrayAux.unshift(folio);
      } else {
        searchArrayAux.push(folio);
      }
    });
    this.lista = searchArrayAux;
  }
  filtrado(tipoFiltrado) {
    this.tipoOrdenFiltrado = tipoFiltrado;
    let part = [];
    const searchArrayAux: any[] = [];
    if (tipoFiltrado === '' || this.tipoOrdenFiltrado === 'Todos') {
      this.lista = [...this.listaUniverso];
    } else {
        for (let i = 0; i < this.listaUniverso.length; i++) {
          part = this.listaUniverso[i].partidas;
          for (let j = 0; j < part.length; j++) {
            if (part[j].tipo.toLowerCase().indexOf(tipoFiltrado.toLowerCase()) !== -1) {
              searchArrayAux.push(this.listaUniverso[i]);
              break;
            }
          }
        }
      this.lista = searchArrayAux;
      this.listaFiltrado = [...this.lista];
    }
    if (this.tipoOrden !== 'Todos') {
      this.ordenamiento(this.tipoOrden);
    }
  }
  seleccionarItem(i, item) {
    this.folio = item.idPPedido;
  }

  cambiarStatus(item, urgencia) {
    const  datos = {
      idPPedidos: item.idPPedidos,
      urgencia: urgencia
    };
    this.coreComponent.openModal(1);
    this._consolaService.actualizarUgencia(datos).subscribe(
      data => {
          if (data.current) {
            this.datosBotonera();
          }
          this.coreComponent.closeModal(1);
      },
      error => {
        this.coreComponent.closeModal(1);
        console.log(error);

      });
  }
  pausar(item, pausado) {
    const  datos = {
      idPPedidos: item.idPPedidos,
      pausado: pausado
    };
    this.coreComponent.openModal(1);
    this._consolaService.actualizarPausado(datos).subscribe(
      data => {
        if (data.current) {
          this.datosBotonera();
        }
        this.coreComponent.closeModal(1);
      },
      error => {
        this.coreComponent.closeModal(1);
      });
  }
  seleccionarLista(tipo, valor) {
    this.tipoOrdenFiltrado = 'Filtrar';
    this.selectItem = tipo.pos;
    this.estadoBotonera = tipo.nombre;
    this.lista = this.listas[tipo.nombre];
    this.listaUniverso = this.listas[tipo.nombre];
    if (valor === 0) {
      this.searchTerm = '';
      this.tipoOrden = 'Todos';
    } else {
      if (this.searchTerm !== '') {
        this.buscar(this.searchTerm);
      } else if (this.tipoOrden !== 'Todos') {
        this.ordenamiento(this.tipoOrden);
      }
    }
  }
  quitarRestriccion(condicion, item) {
    this.cliente = item.cliente;
    this.itemSelect = item;
    if (condicion) {
      this.deleteRestriction = true;
    } else if (!condicion) {
      this.activeRestriction = true;
    }
  }

  validarFactura(datos) {
    let remision: number;
    this.deleteRestriction = false;
    if (datos.valor && this.itemSelect !== null && this.itemSelect !== null) {
      if ( datos.tipo === 'factura') {
        remision = 0;
      } else if ( datos.tipo === 'remision') {
        remision = 1;
      }
      const obj = {
        idPPedidos: this.itemSelect.idPPedidos,
        facturaRemision: 1,
        remisionar: remision,
      };
      this.coreComponent.openModal(1);
      this._consolaService.habilitarEntrega(obj).subscribe(
        data => {
          if (data.current === true) {
            this.datosBotonera();
          }
          this.coreComponent.closeModal(1);
      }, error => {
          this.coreComponent.closeModal(1);
        console.log('error');
      }
      );
    }
  }
  activarResctriccion(valor) {
    this.activeRestriction = false;
    if (valor) {
      const obj = {
        idPPedidos: this.itemSelect.idPPedidos,
        facturaRemision: 0,
        remisionar: this.itemSelect.remision,
      };
      this.coreComponent.openModal(1);
      this._consolaService.habilitarEntrega(obj).subscribe(
        data => {
          if (data.current === true) {
            this.datosBotonera();
          }
          this.coreComponent.closeModal(1);
        }, error => {
          this.coreComponent.closeModal(1);
          console.log('error');
        }
      );
    }
  }
  popInformativo(item) {
    if (item.metodo === 1) {
      this.inforCliente = item;
      this.activePop = true;
    }
  }
  cerrarPopDatos(valor) {
    if (valor) {
      this.activePop = false;
    }
  }
}


