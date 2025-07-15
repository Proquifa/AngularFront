import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SaldosFavorService} from '../../../../services/saldos-notas/saldos-favor.service';
import {CoreContainerComponent} from '../../../core-container/core-container.component';

@Component({
  selector: 'pn-generar-saldo',
  templateUrl: './generar-saldo.component.html',
  styleUrls: ['./generar-saldo.component.scss']
})
export class GenerarSaldoComponent implements OnInit {
  @Output() regresarVista: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() tipoSaldo: boolean;
  proveedor: boolean;
  cargarGuia: any;
  primerCarga: boolean;
  htmlToAdd: any = '';
  hojaS: boolean;
  date = new Date();
  cargarDocumento: any;
  val: number;
  fileSaldo: FileList;
  validar: number;
  fechaPermiso: any;
  fechaAux: any;
  empresa: any[] = [];
  proveedores: any[] = [];
  activeCombos: boolean;
  activeDatos: boolean;
  nombreEmpresa: string;
  nombreProvee: string;
  datosEmpresa: any;
  datosProvee: any;
  activeBtn: boolean;
  folio: string;
  serie: string;
  archivoXml: any;
  uuid: string;
  monto: string;
  coment: string;
  validarInputs: boolean;
  recargarDoc: boolean;
  generar: boolean;
  mensaje: string;
  folioMensaje: string;
  constructor(private _serviceSaldo: SaldosFavorService, private core: CoreContainerComponent) { }

  ngOnInit() {
    this.recargarDoc = true;
    this.validarInputs = true;
    console.log('Soy ==> ', this.tipoSaldo);
    this.val = 1;
    this.primerCarga = true;
    this.obtenerEmpresas();
  }

  obtenerEmpresas() {
  this.empresa = [];
  this.proveedores = [];
  let rfc: string;
  let razon: string;
  this.core.openModal(1);
    const obj = {
      habilitado: 1,
      compra: 1
    };
    this._serviceSaldo.obtenerEmpresas(obj).subscribe(
      data => {
        const empresas = data.current['empresas'];
        const proveedores = data.current['proveedores'];
        for (let i = 0; i < empresas.length; i++) {
          if (empresas[i].razonSocial !== null) {
            razon = empresas[i].razonSocial;
          } else {
            razon = '';
          }
          this.empresa.push({nombre: empresas[i].alias, key: i, rsozial: razon, rfc: empresas[i].rfcEmpresa, id: empresas[i].idEmpresa});
        }
        for (let i = 0; i < proveedores.length; i++) {
          if (proveedores[i].razonSocial !== null) {
            razon = proveedores[i].razonSocial;
          } else {
            razon = '';
          }
          if (proveedores[i].rfc !== null) {
             rfc = proveedores[i].rfc;
          } else {
            rfc = '';
          }
          this.proveedores.push({nombre: proveedores[i].nombre, key: i, rsozial: razon, rfc: rfc, id: proveedores[i].clave, pais: proveedores[i].pais, moneda: proveedores[i].moneda});
        }
        this.activeCombos = true;
        this.core.closeModal(1);
      },
      error1 => {
        this.core.closeModal(1);
      });
  }
  fileChange2($event) {
    if (this.val === 1) {
      this.primerCarga = false;
      this.val = 2;
    }
    console.log($event);
    this.fileSaldo = $event.target.files;
    // this.valitarBtn();
    this.mostrarDocumento(this.fileSaldo);
  }
  mostrarDocumento(fileInput) {
    const doc = document.querySelector('#preview');

    const $img: any = document.querySelector('#preview');

    const reader = new FileReader();
    /*Validación para eliminar si ya existe un elemento*/
    if (document.querySelector('#preview')) {
      document.querySelector('#preview').children[0].remove();
    }
    /******************/
    reader.onload = function (e: any) {
      document.querySelector('#preview').insertAdjacentHTML('afterbegin', '<iframe id="pdf" src="' + e.target.result + '" width="100%" height="100%" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">');
    };
    reader.readAsDataURL(fileInput[0]);
    this.validarBtn();
  }
  getFechaImpl(fecha) {
    this.fechaPermiso = fecha;
  }
  recibirEmpresa(datos, tipo) {
    if (tipo === 'empresa') {
      this.nombreEmpresa = datos.nombre;
      this.datosEmpresa = datos;
    }
    if (tipo === 'proveedor') {
      this.datosProvee = datos;
      this.nombreProvee = datos.nombre;
      if (!this.tipoSaldo) {
        setTimeout(() => {
          this.recargarDoc = false;
        }, 5);
        this.uuid = '';
        this.folio = '';
        this.uuid = '';
        this.monto = '';
        this.archivoXml = null;
        this.fileSaldo = null;
        this.primerCarga = true;
        setTimeout(() => {
          this.recargarDoc = true;
        }, 5);
        this.val = 1;
        if (this.datosProvee.pais === 'MEXICO') {
          this.validarInputs = false;
          this.validarBtn();
        } else {
          this.validarInputs = true;
        }
      }
    }
    if (this.nombreEmpresa !== undefined && this.nombreEmpresa !== null && this.nombreEmpresa !== 'Seleccionar' &&
      this.nombreProvee !== undefined && this.nombreProvee !== null && this.nombreProvee !== 'Seleccionar') {
      this.activeDatos = true;
    } else {
      this.activeDatos = false;
    }
  }
  recibeDocumentacion(archivo) {
    console.log(archivo);
    if (archivo !== undefined && archivo != null) {
      this.archivoXml = archivo;
      this.validarBtn();
    }
  }
  recibirDatos(datos, tipo) {
    if (tipo === 'folio') {
      this.folio = datos;
    } else if (tipo === 'serie') {
      this.serie = datos;
    } else if (tipo === 'uuid') {
      this.uuid = datos;
    } else if (tipo === 'monto') {
      this.monto = datos;
    } else if (tipo === 'coment') {
      this.coment = datos;
    }
    this.validarBtn();
  }
  validarBtn() {
   if (this.tipoSaldo || (!this.tipoSaldo && this.validarInputs)) {
     if (this.folio !== undefined && this.folio !== '' && this.fileSaldo !== undefined && this.fileSaldo !== null &&
       this.monto !== undefined && this.monto !== null && this.monto !== '' && this.coment !== undefined && this.coment !== null && this.coment !== '') {
       this.activeBtn = true;
     } else {
       this.activeBtn = false;
     }
   } else {
     if (this.folio !== undefined && this.folio !== '' && this.serie !== undefined && this.serie !== '' && this.archivoXml !== undefined && this.archivoXml !== null && this.fileSaldo !== undefined && this.fileSaldo !== null &&
       this.monto !== undefined && this.monto !== null && this.monto !== '' && this.coment !== undefined && this.coment !== null && this.coment !== '') {
       this.activeBtn = true;
     } else {
       this.activeBtn = false;
     }
   }
  }
  generarSaldo() {
    let tipo: string;
    if (this.tipoSaldo) {
      this.uuid = null;
      this.serie = null;
      this.archivoXml = null;
      tipo = 'Saldo';
    } else if (!this.tipoSaldo) {
      if (this.validarInputs) {
        this.uuid = null;
        this.serie = null;
        this.archivoXml = null;
      }
      tipo = 'Nota';
    }
    const datas = {
      proveedor: {
        idProveedor: this.datosProvee.id
      },
      empresa: {
        idEmpresa: this.datosEmpresa.id
      },
      folio: this.folio,
      serie: this.serie,
      uuid: this.uuid,
      ffechaDocto: this.fechaPermiso,
      monto: this.monto,
      comentarios: this.coment,
      habilitado: true,
      tipo: tipo
    };

    console.log('Soy datos ==>', datas);
     this.core.openModal(1);
    this._serviceSaldo.generarSaldo(datas).subscribe(
      data => {
        if (data.current !== '') {
          let nameFile = data.current + '.pdf';
          this._serviceSaldo.uploadFile(this.fileSaldo, nameFile , 'saldoafavor' , '1').subscribe(
            dataFile => {

            });
          if ( this.archivoXml !== undefined && this.archivoXml !== null) {
             nameFile = data.current + '.xml';
            this._serviceSaldo.uploadFile(this.archivoXml, nameFile , 'saldoafavor' , '1').subscribe(
              dataFile => {

              });
          }
          this.mensaje = 'Se ha generado exitosamente el saldo a favor con ';
          this.folioMensaje = data.current;
          this.generar = true;
        }
         this.core.closeModal(1);
      });
  }
  regresar() {
    this.regresarVista.emit(true);
  }
  finalizarSaldo() {
    this.generar = false;
    this.regresarVista.emit(false);
  }
}
