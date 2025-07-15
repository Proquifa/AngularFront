import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductosBoService} from '../../../services/productos-bo/productos-bo.service';
import {CoreContainerComponent} from '../../core-container/core-container.component';
import {DateFormatDot, dateFormatSlash} from '../../../pipes/accounting/accounting.pipe';
import * as moment from 'moment';
@Component({
  selector: 'pn-vista-gestion-producto',
  templateUrl: './vista-gestion-producto.component.html',
  styleUrls: ['./vista-gestion-producto.component.scss']
})
export class VistaGestionProductoComponent implements OnInit {

  private readonly DEFAULT_FORMAT = 'YYYYMMDD HH:mm:ss';
  @Output() vistaP: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() finalizarLista: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() datosProveedor: any;
  activarCombo: boolean;
  listaLineas: any[] = [
     { nombre: 'Todas las Líneas', key: 0},
    { nombre: 'Estándares · Biológico', key: 1},
    { nombre: 'Estándares · Químico', key: 2},
    { nombre: 'Reactivos · Biológico', key: 3},
    { nombre: 'Reactivos · Químicos', key: 4},
    { nombre: 'Labware', key: 5},
    { nombre: 'Publicaciones', key: 6}
  ];
  listaTipos: any[] = [
    { nombre: 'Todos los tipos', key: 0},
    { nombre: 'No Controlados', key: 1},
    { nombre: 'Controlados', key: 2}
  ];
  listaRazones: any[] = [
    { nombre: 'No disponible', key: 0},
    { nombre: 'En Producción', key: 1},
    { nombre: 'Descontinuado', key: 2}
  ];
  lista: any[] = [];
  listaUniverso: any[] = [];
  selectedLinea: any;
  selectedTipo: any;
  codigo: string;
  tipoOrden: string;
  searchTerm: string = '';
  tipoFiltroL = 'Todas las Líneas';
  tipoFiltroT = 'Todos los tipos';
  seleccionado: boolean;
  indice: number;
  pathImg: string;
  itemSelect: any;
  date = undefined;
  activarBtn: boolean;
  fechaDisponible: string;
  selectedRazon: any;
  motivo: string;
  activarAlert: boolean;
  activarFecha = false;
  tipoImagen: boolean;
  constructor(private _servicios: ProductosBoService, private coreContainer: CoreContainerComponent) { }

  ngOnInit() {
    let obj: any;
    obj = new Object;
    obj.nombre = 'Todas las Líneas';
    this.selectedLinea = obj;
    let obj1: any;
    obj1 = new Object;
    obj1.nombre = 'Todos los tipos';
    this.selectedTipo = obj1;
    let obj2: any;
    obj2 = new Object;
    obj2.nombre = 'Seleccionar';
    this.selectedRazon = obj2;
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.lista = [];
    this.listaUniverso = [];
    this.coreContainer.openModal(0);
    this._servicios.obtenerProductosProveedor(this.datosProveedor.idProveedor).subscribe(
      data => {
        let fechaI: any;
        let refQ: string;
        let presentacion: string;
        let tipo: string;
        let filtroLinea: string;
        const listaGeneral = data.current;
        for (let i = 0; i < listaGeneral.length; i++) {
          fechaI = new dateFormatSlash().transform(listaGeneral[i].fechaInicio);
          if (listaGeneral[i].tipo === 'Labware' || listaGeneral[i].tipo === 'Publicaciones') {
            refQ = listaGeneral[i].tipo;
          } else {
            if (listaGeneral[i].tipo === 'Estandares' || listaGeneral[i].tipo === 'Estándares') {
              tipo = 'Estándares';
            } else {
              tipo = listaGeneral[i].tipo;
            }
            refQ = tipo + ' - ' + listaGeneral[i].subTipo;
            filtroLinea = tipo + ' · ' + listaGeneral[i].subTipo;
          }
          if (listaGeneral[i].presentacion !== 'ND') {
            presentacion = listaGeneral[i].presentacion + ' ' + listaGeneral[i].cantidad + listaGeneral[i].unidad;
          } else {
            presentacion = listaGeneral[i].cantidad + listaGeneral[i].unidad;
          }
          this.lista.push({codigo: listaGeneral[i].codigo, descripcion: listaGeneral[i].descripcion, control: listaGeneral[i].control,
            fechaInicio: fechaI, presentacion: presentacion, referencia: refQ, proveedor: listaGeneral[i].proveedor, filtroTipo: filtroLinea,  fecha: listaGeneral[i].fechaInicio,
            tipo : listaGeneral[i].presentacion, idProducto: listaGeneral[i].idProducto, idProductoBO: listaGeneral[i].idProductoBO});
          this.listaUniverso.push({codigo: listaGeneral[i].codigo, descripcion: listaGeneral[i].descripcion, control: listaGeneral[i].control,
            fechaInicio: fechaI, presentacion: presentacion, referencia: refQ, proveedor: listaGeneral[i].proveedor, filtroTipo: filtroLinea, fecha: listaGeneral[i].fechaInicio,
            tipo : listaGeneral[i].presentacion, idProducto: listaGeneral[i].idProducto, idProductoBO: listaGeneral[i].idProductoBO});
        }
        this.seleccionarItem(this.lista[0], 0);
        this.coreContainer.closeModal(0);
      },
      error => {
        this.coreContainer.closeModal(0);
      });
  }
  /*****/
  abreCombo() {
    if (document.getElementById("section").className == "visible") {
      document.getElementById("section").className = "";
    } else {
      document.getElementById("section").className = "visible";
    }
  }
  tipoBuscar(search) {
    if (this.tipoFiltroL === 'Todas las Líneas' && this.tipoFiltroT === 'Todos los tipos') {
      this.buscar(search);
    } else {
      this.searchTerm = search;
      this.recibirFiltro('', '');
    }
  }
  /// Funcion de buscar en facturacion
  buscar(search) {
    let searchArrayAux: any[] = [];
    this.searchTerm = search;
    if (search == "") {
      // this.ClientesSearched= this.clientesConsulta;
      this.lista = [...this.listaUniverso];

    } else {

      this.listaUniverso.forEach(folio => {
        if (folio.descripcion.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || folio.codigo.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
          searchArrayAux.push(folio);
        }
      });
      this.lista = searchArrayAux;
    }
   this.validarOrden();
  }
  validarOrden() {
    if (this.tipoOrden === 'Más Antiguos') {
      this.ordenamientoFechaTramAnt();
    } else if (this.tipoOrden === 'Más Recientes') {
      this.ordenamientoFechaTramNue();
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

    this.buscarIndice();
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
    this.buscarIndice();
  }
  recibirFiltro(datos, tipo) {
    if (tipo !== '') {
      if (tipo === 'linea') {
        this.tipoFiltroL = datos.nombre;
      } else if (tipo === 'tipo') {
        this.tipoFiltroT = datos.nombre;
      }
    }
    let listaAux = [... this.listaUniverso];
    if (this.tipoFiltroL === 'Todas las Líneas' && this.tipoFiltroT === 'Todos los tipos') {
      this.lista = [... this.listaUniverso];
    } else {
      if (this.tipoFiltroL !== 'Todas las Líneas') {
        this.lista = listaAux.filter(item => item.filtroTipo.toLowerCase() === this.tipoFiltroL.toLowerCase());
        if (this.tipoFiltroT !== 'Todos los tipos') {
          listaAux = [...this.lista];
          this.lista = listaAux.filter(item => item.control.toLowerCase() === this.tipoFiltroT.toLowerCase());
        }
      } else if (this.tipoFiltroT !== 'Todos los tipos') {
        this.lista = listaAux.filter(item => item.control.toLowerCase() === this.tipoFiltroT.toLowerCase());
        if (this.tipoFiltroL !== 'Todas las Líneas') {
          listaAux = [...this.lista];
          this.lista = listaAux.filter(item => item.filtroTipo.toLowerCase() === this.tipoFiltroL.toLowerCase());
        }
      }
    }
      if (this.searchTerm !== '') {
        this.buscarFiltro(this.searchTerm, this.lista);
      }
      this.validarOrden();
  }

  /// Funcion de buscar en facturacion
  buscarFiltro(search, lista) {
    let listaAux = lista;
    let searchArrayAux: any[] = [];
    this.searchTerm = search;
    if (search !== "") {
      listaAux.forEach(folio => {
        if (folio.descripcion.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || folio.codigo.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
          searchArrayAux.push(folio);
        }
      });
      this.lista = searchArrayAux;
    } else {
      this.lista = lista;
    }
  }
  seleccionarItem(item, i) {
    this.tipoImagen = false;
    this.activarFecha = true;
    this.date = undefined;
    let obj2: any;
    obj2 = new Object;
    obj2.nombre = 'Seleccionar';
    this.selectedRazon = obj2;
    this.motivo = undefined;
    this.fechaDisponible = null;
    this.itemSelect = item;
    this.indice = i + 1;
    if (item.proveedor === 'USP') {
      if (item.tipo === 'Bolsa de aluminio') {
        this.tipoImagen = true;
      }
      if (item.tipo !== null && item.tipo !== 'ND') {
        this.pathImg = './assets/Images/productos/44/' + item.tipo + '.png';
      } else {
        this.pathImg = './assets/Images/productos/vial.png';
      }
    } else {
      this.pathImg = './assets/Images/productos/vial.png';
    }
    this.seleccionado = true;
    this.codigo = item.codigo;
  }
  buscarIndice() {
    for (let i = 0; i < this.lista.length; i++) {
      if (this.codigo === this.lista[i].codigo) {
        this.indice = i + 1;
      }
    }
    return false;
  }
  getFechaImpl(fecha) {
    this.fechaDisponible = fecha;
    this.validarBtn();
  }
  recibirRazon(dato) {
    this.motivo = dato.nombre;
    if (dato.nombre === 'Descontinuado') {
      this.activarFecha = false;
      this.fechaDisponible = null;
    } else {
      this.activarFecha = true;
    }
    this.validarBtn();
  }
  validarBtn() {
    let fecha = moment( new Date()).format('YYYYMMDD');
    if (this.activarFecha) {
      if (this.fechaDisponible !== undefined && this.fechaDisponible !== null && this.motivo !== undefined && this.motivo !== 'Seleccionar' && this.fechaDisponible > fecha) {
        this.activarBtn = true;
      } else {
        this.activarBtn = false;
      }
    } else if (!this.activarFecha) {
      if (this.motivo !== undefined && this.motivo !== 'Seleccionar') {
        this.activarBtn = true;
      } else {
        this.activarBtn = false;
      }
    }
  }
  cancelar() {
    this.vistaP.emit(false);
  }
  finalizar() {
    let fecha = moment( new Date()).format(this.DEFAULT_FORMAT);
    let obj = {
      idProductoBO: this.itemSelect.idProductoBO,
      idProducto: this.itemSelect.idProducto,
      fua: fecha,
      disponibilidad: this.fechaDisponible,
      razon: this.motivo
    };
    this.activarAlert = true;
    console.log('Soy datos a enviar', obj);
    this._servicios.finalizarProductoBO(obj).subscribe(
      data => {
        if (data.current) {
          if (this.listaUniverso.length > 1) {
            this.obtenerProductos();
            this.vistaP.emit(true);
          } else {
            this.finalizarLista.emit(true);
          }
        }
      });
  }
  cerrarPop(valor) {
    this.activarAlert = false;
  }
}
