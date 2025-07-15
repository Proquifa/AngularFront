import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArriboDocumentoService} from '../../../services/arribo-documento/arribo-documento.service';
import {ProductoReclamoService} from '../../../services/gestor-producto-reclamo/producto-reclamo.service';
import {CoreContainerComponent} from '../../core-container/core-container.component';
import {ComunService} from '../../../services/comun/comun.service';

@Component({
  selector: 'pn-gestion-producto-reclamo',
  templateUrl: './gestion-producto-reclamo.component.html',
  styleUrls: ['./gestion-producto-reclamo.component.scss']
})
export class GestionProductoReclamoComponent implements OnInit {
  @Input() datosProveedor: any;
  @Output() regreVista: EventEmitter<boolean> = new EventEmitter<boolean>();
  contacto: string = 'Seleccionar';
  tipoOrden: string;
  searchTerm: string;
  itemContactoS: any;
  activarCombo: boolean;
  selected: any;
  validar = 1;
  imgAbajo: string;
  imgFrentr: string;
  indiceOc: number;
  folio: string = '';
  totalProductos: number;
  val = 1;
  itemContacto: any[] = []; /*= [
    {nombre: 'Uno', key: 0}
    ];*/
  instruccion: string;
  pathImg: any;
  itemOc: any;
  fotoF: boolean;
  fotoAb: boolean;
  accion: string;
  activarBtn: boolean;
  activarOc: boolean;
  fotoAr: boolean;
  entregarSelect: boolean;
  reclamarSelect: boolean;
  imgArriba: string;
  activarPop: boolean;
  rutaProd = 'http://proquifa.com.mx:51725/SAP/InspeccionOC/ImagenesRechazo/';
  rutaLocal = 'http://localhost:8080/SAP/InspeccionOC/ImagenesRechazo/';
  lista: any[] = [];
  listaUniveso: any[] = [];

  constructor(private _serviceContac: ArriboDocumentoService, private _serviveReclamo: ProductoReclamoService, private coreContainer: CoreContainerComponent, private comunService: ComunService) { }

  ngOnInit() {
    let obj: any;
    obj = new Object();
    obj.nombre = 'Seleccionar';
    this.selected = obj;
    this.obtenerLista();
  }
  ngOnChanges() {
    if (this.datosProveedor !== null && this.val === 1) {
      this.recibirContactos();
      this.val++;
    }
  }

  obtenerLista() {
    this.lista = [];
    this.listaUniveso = [];
    this.totalProductos = 0;
    this._serviveReclamo.piezasReclamoPorProveedor(this.datosProveedor.idProveedor).subscribe(
      data => {
        if (data.current && data.current !== undefined && data.current.length > 0) {
          const listaAux = data.current;
          for (let i = 0; i < listaAux.length; i++) {
            this.lista.push(listaAux[i]);
            this.listaUniveso.push(listaAux[i]);
            this.totalProductos ++;
          }
          this.seleccionarItem(0, this.lista[0]);
        } else {
          this.regreVista.emit(true);
        }
      },
      error => {
        console.log(error);

      });
  }
  /*****/
  abreCombo() {
    if (document.getElementById('section').className == 'visible') {
      document.getElementById('section').className = "";
    } else {
      document.getElementById('section').className = 'visible';
    }
  }
  buscar(search) {
    const searchArrayAux: any[] = [];
    this.searchTerm = search;
    if (search === '') {
      this.lista = [...this.listaUniveso];
    } else {
      this.listaUniveso.forEach(folio => {
        if (folio.oc.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 ) {
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
  recibirContactos() {
    this._serviceContac.contactoProveedor(this.datosProveedor.idProveedor).subscribe(
      data => {
        const listaContacto = data.current;
        for (let i = 0; i < listaContacto.length; i++) {
          this.itemContacto.push({nombre: listaContacto[i].nombre, key: i, departament: listaContacto[i].departamento,
            puesto: listaContacto[i].puesto, email: listaContacto[i].email, titulo: listaContacto[i].titulo, tel: listaContacto[i].telefono});
        }
        this.activarCombo = true;
      },
      error => {
        console.log('Error -->', error);
      });
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

  recibirItem(itemContacto) {

    if (itemContacto.nombre === 'Seleccionar' && this.validar === 2) {
      this.selected = this.contacto;
    }
    if (itemContacto.nombre !== 'Seleccionar' && itemContacto.nombre !== undefined) {
      this.validar ++;
      this.contacto = itemContacto.nombre;
      this.itemContactoS = itemContacto;
    }
    this.validarBtn();
  }
  seleccionarItem(i, item) {
    this.imgFrentr = '';
    this.imgArriba = '';
    this.imgAbajo = '';
    this.instruccion = '';
    this.reclamarSelect = false;
    this.entregarSelect = false;
    this.activarOc = true;
    this.folio = item.identificador;
    this.itemOc = item;
    this.indiceOc = i + 1;
    if (item.imagenRechazo !== null && item.imagenRechazo !== '') {
      const imagenes = this.itemOc.imagenRechazo.split('|');
      this.imgFrentr = imagenes[0];
      this.imgArriba = imagenes[1];
      this.imgAbajo = imagenes[2];
    }
    this.visualizarImg('frente');
    this.validarBtn();
  }
  visualizarImg(tipo) {
    let img: string;
    this.fotoAb = false;
    this.fotoAr = false;
    this.fotoF = false;

    if (tipo === 'abajo') {
      img = this.imgAbajo;
      this.fotoAb = true;
    } else if (tipo === 'frente') {
      img = this.imgFrentr;
      this.fotoF = true;
    } else if (tipo === 'arriba') {
      this.fotoAr = true;
      img = this.imgArriba;
    }

    this.comunService.obtenerRuta(img, 'Imagen', '').then(data => {
      this.pathImg = data;
    });
  }

  activarSelect(tipo) {
    if (tipo === 'tel') {
      if (!this.entregarSelect) {
        this.accion = 'Telefono';
        this.entregarSelect = true;
        if (this.reclamarSelect) {
          this.reclamarSelect = false;
        }
      }
    } else if (tipo === 'mail') {
      if (!this.reclamarSelect) {
        this.accion = 'Mail/Fax';
        this.reclamarSelect = true;
        if (this.entregarSelect) {
          this.entregarSelect = false;
        }
      }
    }
    this.validarBtn();
  }
  recibirInstruccion(valor) {
    this.instruccion = valor;
    this.validarBtn();
  }
  validarBtn() {

    if (this.instruccion !== undefined && this.instruccion !== null && this.instruccion !== ''
      && ((this.entregarSelect !== false) || (this.reclamarSelect !== false)) && this.contacto !== null &&
    this.contacto !== null && this.contacto !== 'Seleccionar') {
      this.activarBtn = true;
    } else {
      this.activarBtn = false;
    }
  }

  finalizar() {
   if (this.accion === 'Mail/Fax') {
      this.activarPop = true;
   } else if (this.accion === 'Telefono') {
     const datosFinalizar = {
       idPieza: this.itemOc.identificador,
       MEnvio: this.accion,
       Notas: this.instruccion,
       Contacto: this.contacto,
       idPCompra: this.itemOc.idPCompra,
       idProveedor: this.datosProveedor.idProveedor
     };
     this.cerrarFinalizar(datosFinalizar);
   }
  }

  cerrarFinalizar(datosFinalizar) {
    this.coreContainer.openModal(0);
    this._serviveReclamo.finalizarCuarentena(datosFinalizar).subscribe(
      data => {
        console.log(data);
        if (data.current === true) {
          this.obtenerLista();
        }
        this.coreContainer.closeModal(0);
      },
      error => {
        console.log('Error =>', error);
        this.coreContainer.closeModal(0);
      });
  }

  finalizarEnvio(datosCorreo) {
    this.activarPop = false;
    const datosFinalizar = {
      idPieza: this.itemOc.identificador,
      MEnvio: this.accion,
      Notas: this.instruccion,
      Contacto: this.contacto,
      idPCompra: this.itemOc.idPCompra,
      idProveedor: this.datosProveedor.idProveedor,
      datosCorreo: datosCorreo
    };
    this.cerrarFinalizar(datosFinalizar);
  }
}
