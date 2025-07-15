import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AsuntosRegulatoriosService} from '../../../services/asuntos-regulatorios/asuntos-regulatorios.service';

@Component({
  selector: 'pn-vista-carga-documento',
  templateUrl: './vista-carga-documento.component.html',
  styleUrls: ['./vista-carga-documento.component.scss']
})
export class VistaCargaDocumentoComponent implements OnInit {
  @Input() datos: any;
  @Output() vistaP: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() ActualizarvistaP: EventEmitter<boolean> = new EventEmitter<boolean>();
  informacionProd: any;
  file: FileList;
  pdf: any = '';
  htmlToAdd: any = '';
  url: any;
  primerCarga: boolean = true;
  val = 1;
  nombreFabricante: string;
  nombreProd: string;
  piezas: number;
  conceptoPiezas: string;
  presentacion: string;
  fechaTramite: any;
  fechaEntrega: any;
  precioUnit: any;
  total: any;
  permAdq: string;
  permisoAdquisicion: string;
  selectedMes: any;
  date = new Date();
  fechaVenc: Date = new Date();
  diasSum = 179;
  fechaAux: any;
  fechaVencimiento: any;
  colorBoton: boolean;
  fechaPermiso: any;
  idPPedido: number;
  validar = 1;
  idPedido: number;
  fechaEnviar: any;
  tipoP:string;
  cpedido: string;
  tiposPermiso = [
    {nombre: 'ESTUPEFACIENTE', key: 0},
    {nombre: 'PRECURSOR QUÍMICO', KEY: 1},
    {nombre: 'PSICOTRÓPICO', key: 2}
  ];
  constructor(private _servicesAsuntos: AsuntosRegulatoriosService) { }

  ngOnInit() {
  }
  ngOnChanges() {

    // fechaEntregaAux = "01/01/2017";
    if (this.datos) {
      this.informacionProd = this.datos;
      this.nombreFabricante = this.informacionProd.cliente;
      this.nombreProd = this.informacionProd.sustancia;
      this.piezas = this.informacionProd.piezas;
      this.presentacion = this.informacionProd.presentacion;
      this.fechaTramite = this.informacionProd.ft;
     // fechaEntregaAux = this.informacionProd.ft;
      this.fechaEntrega = this.informacionProd.fee;
      this.precioUnit = this.informacionProd.precioUnit;
      this.total = this.informacionProd.monto;
      this.idPPedido = this.informacionProd.idPPedido;
      this.idPedido = this.informacionProd.idPedido;
      this.cpedido = this.informacionProd.cpedido;
      // const fechaVenc = new Date(this.informacionProd.ft);
      /*this.fechaVenc.setDate(fechaVenc.getDate() + (this.diasSum));
      this.fechaAux = this.fechaVenc.toDateString().split(' ');
      const fechaConv = this.fechaAux[2] + '/' +  this.fechaAux[1] + '/' +  this.fechaAux[3];
      this.fechaVencimiento = this.transform(fechaConv);*/
      console.log('Fecha vencimiento -->', this.fechaVenc);
      // fechaFinal.setDate(fechaInicial.getDate()+parseInt(intervalo));
      if (this.piezas === 1) {
        this.conceptoPiezas = 'Pieza';
      } else {
        this.conceptoPiezas = 'Piezas';
      }
      this.iniciarVista(this.informacionProd);
    }
  }
  iniciarVista(informacion) {

  }
  fileChange2($event) {
    if (this.val === 1) {
      this.primerCarga = false;
      this.val = 2;
    }
    console.log($event);
    this.file = $event.target.files;
    this.validarBtnAcep();
    this.mostrarDocumento(this.file);
  }
  mostrarDocumento(fileInput) {
    /*const blob = new Blob([fileInput], {type: 'application/pdf'});
    const fileURL = URL.createObjectURL(blob).split(':');
    this.url = fileURL[1] + ':' + fileURL[2] + ':' + fileURL[3];*/
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
  cambioAquisicion(texto: string) {
  this.permisoAdquisicion = texto;
   this.validarBtnAcep();
  }
  recibeValosCombo() {

  }
  getFechaImpl(fecha) {
    const anio = fecha.substr(0, 4);
    const mes = fecha.substr(4, 2);
    const dia = fecha.substr(6, 2);
    let fechaVenc: Date = new Date();
    let fechaCam = mes + '/' + dia + '/' + anio ;
    let fechaEvaluar = dia + '/' + mes + '/' + anio ;

    const fechaVal = new Date(fechaCam);
    fechaVenc = new Date(fechaCam);
      console.log('Fecha a sumar --> ', fechaVal);
    this.fechaPermiso = fechaCam;
    fechaVenc.setDate(fechaVenc.getDate() + (this.diasSum)); // Debe colocarse la misma fecha
    console.log('Fecha nueva -->', fechaVenc);
    this.fechaAux = fechaVenc.toDateString().split(' ');
    const fechaConv = this.fechaAux[2] + '/' +  this.fechaAux[1] + '/' +  this.fechaAux[3];
    console.log('Fecha vencimiento -->', fechaConv);
    if (this.validar > 2) {
      this.fechaEnviar = this.transformNumber(fechaConv);
      this.fechaVencimiento = this.transform(fechaConv);
    }
    this.validar ++;
    this.validarBtnAcep();
  }
  transform(dateToFormat: any): any {
    if (dateToFormat == undefined || dateToFormat == null) { return "Pendiente" }
    let now: Date = new Date();
    if (dateToFormat.length == 10) {
      now = new Date(dateToFormat);
    } else {
      now = new Date(dateToFormat);
    }
    let date: String;
    let mes: number = now.getMonth();
    let hora: String = now.getHours().toString().length == 1 ? "0" + now.getHours().toString() : now.getHours().toString();
    let minutos: String = now.getMinutes().toString().length == 1 ? "0" + now.getMinutes().toString() : now.getMinutes().toString();
    let hour: String = hora + ":" + minutos;
    switch (mes) {
      case 0:
        date = now.getDate() + '/Ene/' + now.getFullYear();
        break;
      case 1:
        date = now.getDate() + '/Feb/' + now.getFullYear();
        break;
      case 2:
        date = now.getDate() + '/Mar/' + now.getFullYear();
        break;
      case 3:
        date = now.getDate() + '/Abr/' + now.getFullYear();
        break;
      case 4:
        date = now.getDate() + '/May/' + now.getFullYear();
        break;
      case 5:
        date = now.getDate() + '/Jun/' + now.getFullYear();
        break;
      case 6:
        date = now.getDate() + '/Jul/' + now.getFullYear();
        break;
      case 7:
        date = now.getDate() + '/Ago/' + now.getFullYear();
        break;
      case 8:
        date = now.getDate() + '/Sep/' + now.getFullYear();
        break;
      case 9:
        date = now.getDate() + '/Oct/' + now.getFullYear();
        break;
      case 10:
        date = now.getDate() + '/Nov/' + now.getFullYear();
        break;
      case 11:
        date = now.getDate() + '/Dic/' + now.getFullYear();
        break;
      default:
        break;
    }
    return date;
  }
  cambiarVista() {
    this.vistaP.emit(true);
  }
  recibirTipo($event) {
    this.tipoP = $event.nombre;
  }
  validarBtnAcep() {
    if (this.fechaEntrega && this.permisoAdquisicion && this.file && this.permisoAdquisicion !== ' ' && this.tipoP !== null && this.tipoP !== undefined && this.tipoP !== 'Seleccionar') {
      this.colorBoton = true;
    } else {
      this.colorBoton = false;
    }
  }
  finalizar() {
    let idProducto: number;
    const fechaP = this.fechaPermiso.split('/');
    const  fechaPermiso = fechaP[2] + '-' + fechaP[0] + '-' + fechaP[1];
  const datos = {
    idPPedido : this.idPPedido,
    idPedido : this.idPedido,
    noPermisoAdquisicion: this.permisoAdquisicion ,
    fechaPermiso : fechaPermiso,
    fechaVencimiento : this.fechaEnviar,
    actaLiberacion : 'NA',
    tipoPermiso: this.tipoP
  };
  this._servicesAsuntos.cerrarPendietesPAP(datos).subscribe(
    data => {
    if (data.current !== 0) {
      idProducto = data.current;
      this.guardarArchivo(idProducto);
    }
  });
  }
  guardarArchivo(idProducto) {
    this._servicesAsuntos.uploadFile(this.file , idProducto, 'ProductoPAP', '').subscribe(
      data => {
        this.ActualizarvistaP.emit(true);
      });
  }
  transformNumber(dateToFormat: any): any {
    if (dateToFormat == undefined || dateToFormat == null) { return "Pendiente" }
    let now: Date = new Date();
    if (dateToFormat.length == 10) {
      now = new Date(dateToFormat);
    } else {
      now = new Date(dateToFormat);
    }
    let dia = now.getDate().toString();
    console.log('Dia-->', dia);
    if (dia.length > 1 ) {
    } else {
      dia = 0 + dia;
    }
    let date: String;
    let mes: number = now.getMonth();
    let hora: String = now.getHours().toString().length == 1 ? "0" + now.getHours().toString() : now.getHours().toString();
    let minutos: String = now.getMinutes().toString().length == 1 ? "0" + now.getMinutes().toString() : now.getMinutes().toString();
    let hour: String = hora + ":" + minutos;
    switch (mes) {
      case 0:
        date = now.getFullYear() + '-01-' + dia;
        break;
      case 1:
        date = now.getFullYear() + '-02-' + dia;
        break;
      case 2:
        date = now.getFullYear() + '-03-' + dia;
        break;
      case 3:
        date = now.getFullYear() + '-04-' + dia;
        break;
      case 4:
        date = now.getFullYear() + '-05-' + dia;
        break;
      case 5:
        date = now.getFullYear() + '-06-' + dia;
        break;
      case 6:
        date = now.getFullYear() + '-07-' + dia;
        break;
      case 7:
        date = now.getFullYear() + '-08-' + dia;
        break;
      case 8:
        date = now.getFullYear() + '-09-' + dia;
        break;
      case 9:
        date = now.getFullYear() + '-10-' + dia;
        break;
      case 10:
        date = now.getFullYear() + '-11-' + dia;
        break;
      case 11:
        date = now.getFullYear() + '-12-' + dia;
        break;
      default:
        break;
    }
    return date;
  }


}
