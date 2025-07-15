import { Component, OnInit } from '@angular/core';
import {SessionUser} from '../../services/session/session.service';
import {ConsolaPrioridadesService} from '../../services/consola/consola-prioridades.service';
import {ProductoReclamoService} from '../../services/gestor-producto-reclamo/producto-reclamo.service';
import {ConsolaEnvioService} from '../../services/consola-envio/consola-envio.service';
import {CoreContainerComponent} from '../core-container/core-container.component';
import {ComunService} from '../../services/comun/comun.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'pn-consola-envios',
  templateUrl: './consola-envios.component.html',
  styleUrls: ['./consola-envios.component.scss']
})
export class ConsolaEnviosComponent implements OnInit {
  classAsideMenu: string;
  ocultarAcor: boolean;
  partHabilidatas: boolean = true;
  activeMenu: boolean;
  tipoOrden: string;
  itemsMenu: any[];
  listaUniverso: any[];
  rolMaster: boolean;
  usuario: any;
  lista: any[];
  searchTerm: string;
  folio: string;
  subs: Subscription;
  constructor(private _serviceReclamo: ProductoReclamoService, private _servicesEnvio: ConsolaEnvioService, private coreComponent: CoreContainerComponent, private ComunServices: ComunService) { }

  ngOnInit() {
    this.iniciarVista();
    this.ComunServices.recargar.subscribe(
      data => {
          if (data === 'consolaEnvio') {
              this.activeMenu = false;
              this.iniciarVista();
          }
      });
  }

  iniciarVista() {
    this.classAsideMenu = 'asideNormalMenu';
    this.searchTerm = '';
    this.tipoOrden = 'Todos';
    this.listaUniverso = [];
    // this.lista = [];
    this.folio = '';
    this.usuario = SessionUser.getInstance().getUser().getUsuario();
    const roles = SessionUser.getInstance().getUser().getRoles();
    for (let i = 0; i < roles.length; i ++ ) {
      if (roles[i] === 'Comprador_Master') {
        this.rolMaster = true;
      }
    }
    this.obtenerDatos();
  }

  obtenerDatos() {
    if (this.rolMaster) {
      this.obtenerValoresMenu(this.usuario);
    } else {
      setTimeout(() => {
        this.itemsMenu = [{rol: 'GESTOR DE OPERACIONES', active: true,
          menu: [{nombre: 'Consola de Prioridades', url: 'consolaPrioridades', select: false},
            {nombre: 'Consola de Envíos', url: 'consolaEnvio', select: true, disable: false},
            {nombre: 'Material en Stock', url: 'stock', select: false},
            {nombre: 'Material en Destrucción', url: 'consolaDest', select: false}
            ]}];
        this.activeMenu = true;
      }, 100);
    }
     this.datosEnvios();
  }
  datosEnvios() {
    this.coreComponent.openModal(1);
    this._servicesEnvio.obtenerEnvios().subscribe(
      data => {
        if (data.current.TODAS !== undefined && data.current.TODAS !== null && data.current.TODAS.length > 0) {
          this.lista = data.current.TODAS;
          this.listaUniverso = data.current.TODAS;
          this.partHabilidatas = true;
        } else {
          this.partHabilidatas = false;
        }
        this.coreComponent.closeModal(1);
      },
      error => {
        this.coreComponent.closeModal(1);
      });
  }
  obtenerValoresMenu(idUsuario) {
    this.coreComponent.openModal(1);
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
                   {nombre: 'Consola de Envíos', url: 'consolaEnvio', select: true, tipo: 'flecha'},
                   {nombre: 'Material en Destrucción', url: 'consolaDest', select: false}]}
        ];
        this.activeMenu = true;
        this.coreComponent.closeModal(1);
      },
      error => {
        this.coreComponent.closeModal(1);
      });
  }
  /*****/
  mostarOcultarAcordeon() {
    this.ocultarAcor = !this.ocultarAcor;
    if (this.ocultarAcor) {
      this.classAsideMenu = 'asideOcultarMenu';
    } else {
      this.classAsideMenu = 'asideMostrarMenu';
    }
  }
  abreCombo() {
    if (document.getElementById('section').className === 'visible') {
      document.getElementById('section').className = '';
    } else {
      document.getElementById('section').className = 'visible';
    }
  }
  ordenamiento(tipo) {
    const searchArrayAux: any[] = [];
    let valor: number;
    if (tipo === 'En Pausa') {
      this.tipoOrden = 'En Pausa';
      valor = 1;
    } else if (tipo === 'Por Sistema') {
      valor = 0;
      this.tipoOrden = 'Por Envíar';
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
  buscar(search) {
    let part = [];
    const searchArrayAux: any[] = [];
    this.searchTerm = search;
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
              if (part[j].codigo.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                searchArrayAux.push(this.listaUniverso[i]);
                break;
              }
            }
          }
        }
        this.lista = searchArrayAux;
      }

    if (this.tipoOrden !== 'Todos') {
      this.ordenamiento(this.tipoOrden);
    }
  }
  cambiarStatus(item, urgencia) {
    const  datos = {
      idPPedidos: item.idPPedidos,
      urgencia: urgencia
    };
    this.coreComponent.openModal(1);
    this._servicesEnvio.actualizarUgencia(datos).subscribe(
      data => {
        if (data.current) {
          this.datosEnvios();
        }
        this.coreComponent.closeModal(1);
      },
      error => {
        this.coreComponent.closeModal(1);
        console.log(error);

      });
  }

}
