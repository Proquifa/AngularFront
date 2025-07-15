import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ArriboDocumentoService} from '../../../services/arribo-documento/arribo-documento.service';
import {GestionarCuarentenaService} from '../../../services/gestionar-cuarentena/gestionar-cuarentena.service';
import {ComunService} from '../../../services/comun/comun.service';

@Component({
  selector: 'pn-vista-trabajar-productos',
  templateUrl: './vista-trabajar-productos.component.html',
  styleUrls: ['./vista-trabajar-productos.component.scss']
})
export class VistaTrabajarProductosComponent implements OnInit {
  @Input() datosProveedor: any;
  @Output() regreVista: EventEmitter<boolean> = new EventEmitter<boolean>();
  activarBtn: boolean;
  itemContacto: any[] = [
    /*{nombre: 'Uno', key: 0}
    */];
  selected: any;
  contacto: string = 'Seleccionar';
  itemContactoS: any;
  activarCombo: boolean;
  tipoOrden: string;
  listaOc: any[] = [];
  listaOcUniverso: any[] = [];
  folio: string = '';
  searchTerm: string = '';
  totalProductos: number;
  selectedOc: boolean;
  indice: string;
  searchTermOc: string = '';
  itemOc: any;
  activarOc: boolean;
  instruccion: string;
  indiceOc: number;
  folioOc: string;
  pathImg: any;
  imgAbajo: string;
  imgFrentr: string;
  val = 1;
  imgArriba: string;
  reclamarSelect: boolean;
  activarPop: boolean;
  entregarSelect: boolean;
  validar = 1;
  fotoF: boolean;
  fotoAb: boolean;
  fotoAr: boolean;
  accion: string;
  rutaProd = 'http://proquifa.com.mx:51725/SAP/InspeccionOC/ImagenesRechazo/';
  rutaLocal = 'http://localhost:8080/SAP/InspeccionOC/ImagenesRechazo/';
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
  constructor(private _serviceContac: ArriboDocumentoService, private _seriveCuarentena: GestionarCuarentenaService, private comunService: ComunService) { }

  ngOnInit() {
    let obj: any;
     obj = new Object();
    obj.nombre = 'Seleccionar';
    this.selected = obj;
    this.tipoOrden = 'Todos';
    // this.recibirContactos();
    // this.obtenerListas();
  }
  ngOnChanges() {
    if (this.datosProveedor !== null && this.val === 1) {
      this.recibirContactos();
      this.obtenerListas();
      this.val++;
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
  obtenerListas() {
    this.totalProductos = 0;
    this.lista = [];
    this.listaUniveso = [];
    this._seriveCuarentena.piezasRechazadasPorProveedor(this.datosProveedor.idProveedor).subscribe(
      data => {
        if (data.current && data.current !== undefined && data.current.length > 0) {
          let listaAux = data.current;
          for (let i = 0; i < listaAux.length; i++) {
            this.lista.push({
              proveedor: listaAux[i].proveedor,
              piezas: listaAux[i].lstRechazos.length,
              fechaInspeccion: listaAux[i].fechaInspeccionFormato,
              listaRechazos: listaAux[i].lstRechazos,
              oc: listaAux[i].compra,
              inspector: listaAux[i].inspector,
              fecha: listaAux[i].fechaInspeccion
            });
            this.listaUniveso.push({
              proveedor: listaAux[i].proveedor,
              piezas: listaAux[i].lstRechazos.length,
              fechaInspeccion: listaAux[i].fechaInspeccionFormato,
              listaRechazos: listaAux[i].lstRechazos,
              oc: listaAux[i].compra,
              inspector: listaAux[i].inspector,
              fecha: listaAux[i].fechaInspeccion
            });
            this.totalProductos ++;
          }
          this.seleccionarItem(0, this.lista[0]);
        } else {
          this.regreVista.emit(true);
        }
      },
      error => {

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
  buscarOc(search) {
    const searchArrayAux: any[] = [];
    this.searchTermOc = search;
    if (search === '') {
      this.listaOc = [...this.listaOcUniverso];
    } else {
      this.listaOcUniverso.forEach(folio => {
        if (folio.codigo.toLowerCase().indexOf(this.searchTermOc.toLowerCase()) !== -1  ||
          folio.concepto.toLowerCase().indexOf(this.searchTermOc.toLowerCase()) !== -1 ||
          folio.tipo.toLowerCase().indexOf(this.searchTermOc.toLowerCase()) !== -1) {
          searchArrayAux.push(folio);
        }
      });
      this.listaOc = searchArrayAux;
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

  recibirItem(itemContacto) {

    if (itemContacto.nombre === 'Seleccionar' && this.validar === 2) {
     this.selected = this.contacto;
    }
    if (itemContacto.nombre !== 'Seleccionar' && itemContacto.nombre !== undefined) {
      this.validar ++;
      this.contacto = itemContacto.nombre;
      this.itemContactoS = itemContacto;
    }
    this.buscar(this.searchTerm);
  }
  seleccionarItem(i, item) {
    this.searchTermOc = '';
    this.selectedOc = true;
    this.indice = i + 1;
    this.folio = item.oc;
    this.listaOc = item.listaRechazos;
    this.listaOcUniverso = item.listaRechazos;
    this.seleccionarItemPieza(0, this.listaOc[0]);
    this.validarBtn();
    this.buscarOc(this.searchTermOc);
  }
  seleccionarItemPieza(i, item) {
    this.imgFrentr = '';
    this.imgArriba = '';
    this.imgAbajo = '';
    this.instruccion = '';
    this.reclamarSelect = false;
    this.entregarSelect = false;
    this.activarOc = true;
    this.folioOc = item.identificador;
    this.itemOc = item;
    this.indiceOc = i + 1;
    if (this.itemOc.imagenRechazo !== null) {
      let imagenes = this.itemOc.imagenRechazo.split('|');
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
    let nombreImg: string;
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
    if (tipo === 'entregar') {
      if (!this.entregarSelect) {
        this.accion = 'Entregar';
        this.entregarSelect = true;
        if (this.reclamarSelect) {
          this.reclamarSelect = false;
        }
      }
    } else if (tipo === 'reclamar') {
      if (!this.reclamarSelect) {
        this.accion = 'Reclamar';
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
      && ((this.entregarSelect !== false) || (this.reclamarSelect !== false))) {
      this.activarBtn = true;
    } else {
      this.activarBtn = false;
    }
  }
  finalizar() {
    const objEnviar = {
      idPieza: this.itemOc.identificador,
      instrucciones: this.instruccion,
      idPCompra: this.itemOc.idPCompra,
      accion: this.accion,
      idProveedor: this.datosProveedor.idProveedor,
      idPPedido: this.itemOc.idPPedido
    };
    this._seriveCuarentena.finalizarCuarentena(objEnviar).subscribe(
      data => {
         if (data.current === true) {
           this.obtenerListas();
           this.regreVista.emit(false);
           this.activarPop = true;
         }
      });
  }

  cerrarPop() {
    this.activarPop = false;
  }
}
