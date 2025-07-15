import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ArriboDocumentoService} from '../../../services/arribo-documento/arribo-documento.service';
import {SessionUser} from '../../../services/session/session.service';
import {dateFormatSlash} from '../../../pipes/accounting/accounting.pipe';
import {CoreContainerComponent} from '../../core-container/core-container.component';
import {ComunService} from '../../../services/comun/comun.service';

@Component({
  selector: 'pn-cargar-documento',
  templateUrl: './cargar-documento.component.html',
  styleUrls: ['./cargar-documento.component.scss']
})
export class CargarDocumentoComponent implements OnInit {
  @Input() datosProveedor: any;
  @Output() regreVista: EventEmitter<boolean> = new EventEmitter<boolean>();
  activarBtn: boolean;
  val = 1;
  activbarCargdaDoc: boolean;
  listaFD: any[] = [];
  /*****PRUEBA DE LISTA*****/
  lista: any[] = [] = [/*{ indice: 1, folio: '9721-02', producto: ' Ammonium Hydroxide, 28.0-30%,baker analyzed a.c.s. Reagent (9721-02/9721-15) (1L) \n' +
      'JT baker 3 renglones en caso de ser extensa la info.', oc: 'OC-013119-3566', pedidoI: '111234-8764', DRE: 21, FEE: '14/Feb/2019', tipo: 'Reactivo', lote: '0000198235',
      fechaI: '30/Ene/2018', inspector: 'AhernandezH'},
    {indice: 2, folio : '9902-12', producto: 'GOL', oc: 'OC-13222-31345', pedidoI: '12-45632', DRE: 21, FEE: '21/Mar/2018', tipo: 'Reactivo', lote: '34ee435', fechaI: '30/Mar/2018', inspector: 'AhernandezH'},
    {indice: 3,  folio : '5673-032', producto: 'PQF', oc: 'OC-01222-3445', pedidoI: '11678-452', DRE: 21, FEE: '09/Nov/2017', tipo: 'Reactivo', lote: '7654334567', fechaI: '30/Ene/2013', inspector: 'AhernandezH'}*/];
  listaUniveso: any[] = [/*{indice: 1, folio: '9721-02', producto: ' Ammonium Hydroxide, 28.0-30%,baker analyzed a.c.s. Reagent (9721-02/9721-15) (1L) \n' +
      'JT baker 3 renglones en caso de ser extensa la info.', oc: 'OC-013119-3566', pedidoI: '111234-8764', DRE: 21, FEE: '14/Feb/2019', tipo: 'Reactivo', lote: '0000198235',
    fechaI: '30/Ene/2018', inspector: 'AhernandezH'},
    {indice: 2,  folio : '9902-12', producto: 'GOL', oc: 'OC-13222-31345', pedidoI: '12-45632', DRE: 21, FEE: '21/Mar/2018', tipo: 'Reactivo', lote: '34ee435', fechaI: '30/Mar/2018', inspector: 'AhernandezH'},
    {indice: 3,  folio : '5673-032', producto: 'PQF', oc: 'OC-01222-3445', pedidoI: '11678-452', DRE: 21, FEE: '09/Nov/2017', tipo: 'Reactivo', lote: '7654334567', fechaI: '30/Ene/2013', inspector: 'AhernandezH'}*/];
  /**************************/
  primerCarga: boolean;
  fileCertificado: FileList;
  fileHojaS: FileList;
  pdf: any = '';
  htmlToAdd: any = '';
  cargarGuia: any;
  itemSelect: any;
  indice: number;
  activarCombo: boolean;
  selectedTipoContac: any;
  itemContacto: any;
  seleccionado: boolean;
  searchTerm: string;
  folio: string = '';
  hojaS: boolean;
  usuario: string;
  deshabilitar = '';
  datosEnviar: any;
  hoja: string;
  pathProd = 'http://proquifa.com.mx:51725/SAP/';
  listaContacto: any[] = [
    /* { nombre: '--NINGUNO--', key: 0 },
    { nombre: 'Congelación', key: 0 },
    { nombre: 'Ambiente', key: 1 },
    { nombre: 'Refrigeración', key: 2 }*/
  ];
  nombreContacto: string;
  pathVisualizar: any;
  constructor(private _trabjarArribo: ArriboDocumentoService, private coreContainer: CoreContainerComponent, private comunService: ComunService) { }

  ngOnInit() {
    var obj: any;
    obj = new Object;
    obj.nombre = 'Seleccionar';
    this.selectedTipoContac = obj;
    this.activbarCargdaDoc = true;
    this.primerCarga = true;
    this.usuario = SessionUser.getInstance().getUser().getUsuario();
    this.obtenerDatosContacto();
    const datos  = {responsable: this.usuario, idProveedor: this.datosProveedor.idProveedor};
    this.obtenerProdutos(datos);
    // console.log('=====', this.datosProveedor);
  }
  obtenerDatosContacto() {
    this._trabjarArribo.contactoProveedor(this.datosProveedor.idProveedor).subscribe(
      data => {
        const listaContacto = data.current;
        for (let i = 0; i < listaContacto.length; i++) {
          this.listaContacto.push({nombre: listaContacto[i].nombre, key: i, departament: listaContacto[i].departamento,
                                puesto: listaContacto[i].puesto, email: listaContacto[i].email, titulo: listaContacto[i].titulo, tel: listaContacto[i].telefono});
        }
        this.activarCombo = true;
      },
      error => {
       console.log('Error -->', error);
      });
  }
  obtenerProdutos(datos) {
    this.lista = [];
    this.listaUniveso = [];
    this.coreContainer.openModal(0);
    this._trabjarArribo.obtenerProductosFaltantesPorProveedor(datos).subscribe(
      data => {
        // console.log('Soy datos:::', data.current);
        let listaProd = data.current;
        let fechaInsp: any;
        let feeAux: any;
        for (let i = 0; i < listaProd.length; i++)  {
          feeAux = new dateFormatSlash().transform(listaProd[i].fee);
          if (listaProd[i].fechaInspeccion !== null) {
            fechaInsp = new dateFormatSlash().transform(listaProd[i].fechaInspeccion);
          } else {
            fechaInsp = 'ND';
          }
          this.lista.push({folio: listaProd[i].codigo, inspector: listaProd[i].inspector, pedidoI: listaProd[i].cpedido,
                            tipo: listaProd[i].tipo, lote: listaProd[i].lote, oc: listaProd[i].compra,
                            producto: listaProd[i].concepto, DRE: listaProd[i].dre, fechaI: fechaInsp, FEE: feeAux,
                            listaRechazos: listaProd[i].lstRechazos, idFabrica: listaProd[i].idFabrica, identificador: listaProd[i].identificador});
          this.listaUniveso.push({folio: listaProd[i].codigo, inspector: listaProd[i].inspector, pedidoI: listaProd[i].cpedido,
            tipo: listaProd[i].tipo, lote: listaProd[i].lote, oc: listaProd[i].compra,
            producto: listaProd[i].concepto, DRE: listaProd[i].dre, fechaI: fechaInsp, FEE: feeAux,
            listaRechazos: listaProd[i].lstRechazos, idFabrica: listaProd[i].idFabrica, identificador: listaProd[i].identificador});
        }
        this.seleccionarItem(this.lista[0], 0);
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
        if (folio.oc.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || folio.producto.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 ||
          folio.inspector.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || folio.tipo.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 ||
          folio.lote.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
          searchArrayAux.push(folio);
        }
      });
      this.lista = searchArrayAux;
    }
    this.buscarIndice();
  }
  buscarIndice() {
    for (let i = 0; i < this.lista.length; i++) {
      if (this.folio === this.lista[i].folio) {
        this.indice = i + 1;
      }
    }
    return false;
  }
  fileChange2($event) {
    if (this.val === 1) {
      this.primerCarga = false;
      this.val = 2;
    }
    console.log($event);
    this.fileCertificado = $event.target.files;
    this.valitarBtn();
    this.mostrarDocumento(this.fileCertificado);
  }
  mostrarDocumento(fileInput) {
    let doc = document.querySelector('#preview');

    let $img: any = document.querySelector('#preview');

    var reader = new FileReader();
    /*Validación para eliminar si ya existe un elemento*/
    if (document.querySelector('#preview')) {
      document.querySelector('#preview').children[0].remove();
    }
    /******************/
    reader.onload = function (e: any) {
      document.querySelector('#preview').insertAdjacentHTML('afterbegin', '<iframe id="pdf" src="' + e.target.result + '" width="100%" height="100%" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">');
    }
    reader.readAsDataURL(fileInput[0]);
  }

  recibeDocumentacion(archivo) {
    console.log('archivo:::', archivo);
    this.fileHojaS = archivo;
    this.valitarBtn();
  }
  recibirItem(item) {
    // console.log('Soy item contacto', item);
    if (item.nombre !== 'Seleccionar') {
      this.itemContacto = item;
      this.nombreContacto = item.nombre;
    } else {
      this.nombreContacto = 'Seleccionar';
      this.itemContacto = {email: ''};
    }
    this.valitarBtn();
  }
  seleccionarItem(item, i) {
    setTimeout(() => {
      this.hojaS = false;
    }, 200);
    this.deshabilitar = '';
    setTimeout(() => {
      this.hojaS = true;
    }, 200);
    this.primerCarga = true;
    this.val = 1;
    this.seleccionado = true;
    this.listaFD = [];
    this.fileCertificado = null;
    /*this.listaFD = new Array(this.lista.length).fill('');
    this.listaFD[i] = 'divActive';*/
    this.itemSelect = item;
    this.folio = item.identificador;
    this.indice = i + 1;
    this.valitarBtn();
  }
  valitarBtn() {
    if (this.fileCertificado !== undefined && this.fileCertificado !== null && this.seleccionado === true ) {
      this.activarBtn = true;
    } else {
      this.activarBtn = false;
    }
  }
finalizar() {
    let conHoja: string;
    if (this.fileHojaS !== undefined && this.fileHojaS !== null) {
      conHoja = 'S';
    } else {
      conHoja = 'N';
    }
    let nameFile: string;
    const datos = {responsable: this.usuario, idProveedor: this.datosProveedor.idProveedor};
    this.datosEnviar = { codigo : this.itemSelect.folio,
                         lote : this.itemSelect.lote,
                         hoja: conHoja};
    console.log('Soy datos a enviar ::', this.datosEnviar);
    this._trabjarArribo.finalizarDocumentacionFaltante(this.datosEnviar).subscribe(
      data => {
        if (data.current === true ) {
          nameFile = this.itemSelect.folio + '-' + this.itemSelect.lote + '.pdf';
          this.guardarDocumentos(this.fileCertificado, nameFile, 'certificados');
          if (this.fileHojaS !== undefined && this.fileHojaS !== null) {
            nameFile = this.itemSelect.folio + '.pdf';
            this.guardarDocumentos(this.fileHojaS, nameFile, 'hojasseguridad');
          }
          if (this.listaUniveso.length > 1) {
            this.regreVista.emit(false);
            this.obtenerProdutos(datos);
          } else {
            this.regreVista.emit(true);
          }
        }
      },
      error => {
        console.log(error);
      });
  }

  guardarDocumentos(archivo, nombre, tipo) {
    this._trabjarArribo.uploadFile(archivo, nombre, tipo, this.itemSelect.idFabrica ).subscribe(
      data => {
        console.log('Entre a data archivo :::', data.current);
      },
      error => {

      });
  }
  visualizarDoc(tipo, dato) {
    let tipoArchivo: string;
    if (tipo === 'PEDIDO') {
      tipoArchivo = 'Pedidos';
    } else if (tipo === 'OC') {
      // his.pathVisualizar = this.pathProd + 'Ordenes de compra/' + dato + '-P.pdf';
      tipoArchivo = 'Compra';
    }
    this.comunService.obtenerRuta(dato, tipoArchivo, '').then(
      data => {
        this.pathVisualizar = data;
        this.openNewBrowser(this.pathVisualizar);
      }
    );
  }
  openNewBrowser(path) {
    console.log('Entre ');
    const shell  = electron.shell;

    shell.openExternal(path);
  }
}
