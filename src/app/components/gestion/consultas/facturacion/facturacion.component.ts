import { Component, OnInit, Pipe } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionService } from '../../../../services/gestion/gestion.service';
import { FacturacionService } from '../../../../services/gestion/consulta/facturacion/facturacion.service';
import { Parametros } from '../../../../class/Parametros.class';
import { ElementFilter } from '../../../shared/filter/element.model';
import { CoreContainerComponent } from '../../../core-container/core-container.component';
import { UtilFechas } from '../../../../class/UtilFechas';
import { AccountingFormatMoney, dateFormatSlash } from '../../../../pipes/accounting/accounting.pipe';
import { UtilService } from '../../../../services/util/util.service';


@Component({
  selector: 'pn-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']
})

export class FacturacionComponent implements OnInit {
  GENERAL_RUTA:String = 'http://201.161.12.60:51725/SAP/';
  FACTURAS_RUTA:String = "Facturas/";
  _utilFechas: UtilFechas = new UtilFechas();
  facturaS: String;
  fpor: String;
  classPanel: string = "panelNormal";
  hiddenClose: boolean = true;
  lstItems: string [] = ['De sistema', 'Fuera sistema'];
  lstRadiosRapida: string [] = ['Factura', 'Pedido', 'UUID'];
  avanzada: Boolean = true;
  detalle: Boolean = false; z
  sistema: Boolean = true;
  fueraSistema: Boolean = false;
  date: Date;
  date2: Date;
  filtroConsultaRapida: String = "Factura"
  lstClientes: any[];
  filtroForm: FormGroup;
  Clear = true;
  totalDetalle: Number = 0;
  facturaDetalle: any;
  //isThereData indica se inicia en false para mostrar el loader
  isThereData: boolean = false;
  lstCobradores: any[];
  lstFacturas: any[] = [];
  defaultSelected: any = { nombre: '--TODOS--' };
  dropClientes: any[] = [{ nombre: '--TODOS--', key: 0 }];
  dropCobrador: any[] = [{ nombre: '--TODOS--', key: 0 }];

  lstFacturasDetalle: any[] = [];
  lstFacturasDetalleActive: any[] = [];
  lstLineaTiempo: any[] = [];
  lstLineaTiempoActive: any[] = [];

  estadoItemLineaTiempo: String = "";
  itemLineaTiempo: any = undefined;
  lineaIiempoSelect: any;
  //Elements es un arreglo el cual contiene todos los valores
  //que se mostraran en dropboz. se enviara al componente
  //gestion-filter
  Elements: ElementFilter[];
  //Esta funcion se llama una vez que se rrealzia un servicio
  Llenar = () => {
    this.Elements = [new ElementFilter("string", "Clientes", this.dropClientes, true
    ),

    new ElementFilter("string", "Cobrador", this.dropCobrador, false),

    new ElementFilter("string", "Facturó", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Proveedora', key: 1 },
      { nombre: 'Proquifa', key: 2 },
      { nombre: 'Pharma', key: 3 },
      { nombre: 'Golocaer', key: 4 },
      { nombre: 'Mungen', key: 5 },
      { nombre: 'Ryndem', key: 6 }
    ], false),


    new ElementFilter("string", "Condiciones de pago", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: '15 Dias', key: 1 },
      { nombre: '21 Dias', key: 2 },
      { nombre: '30 Dias', key: 3 },
      { nombre: '45 Dias', key: 4 },
      { nombre: '60 Dias', key: 5 },
      { nombre: 'Anticipo 50%', key: 6 },
      { nombre: 'Pago Contra Entrega', key: 7 },
      { nombre: 'Prepago 100%', key: 8 }
    ], false),
    new ElementFilter("string", "Tipo", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Por Adelantado', key: 1 },
      { nombre: 'Normal', key: 2 }
    ], false),
    new ElementFilter("string", "Estado", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Cobrada', key: 1 },
      { nombre: 'Cancelada', key: 2 },
      { nombre: 'Por Cobrar', key: 3 },
      { nombre: 'Por Cancelar', key: 4 },
      { nombre: 'A Refacturación', key: 5 }
    ], false),
    new ElementFilter("string", "Refacturado", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Si', key: 1 },
      { nombre: 'No', key: 2 }
    ], false),
    ];
    //isThereData indica que ya no es necesario mostrar el loader
    this.isThereData = true;
    this.Clear = false;


  }

  Llenar2 = () => {
    this.Elements = [new ElementFilter("string", "Clientes", this.dropClientes, true
    ),
    new ElementFilter("string", "Cobrador", this.dropCobrador, false),
    new ElementFilter("string", "Facturó", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Proveedora', key: 1 },
      { nombre: 'Proquifa', key: 2 },
      { nombre: 'Pharma', key: 3 },
      { nombre: 'Golocaer', key: 4 },
      { nombre: 'Mungen', key: 5 },
      { nombre: 'Ryndem', key: 6 }
    ], false),
    new ElementFilter("string", "Estado", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Cobrada', key: 1 },
      { nombre: 'Cancelada', key: 2 },
      { nombre: 'Por Cobrar', key: 3 },
      { nombre: 'Por Cancelar', key: 4 },
      { nombre: 'A Refacturación', key: 5 }
    ], false),
    ];
    this.isThereData = true;
    this.Clear = true;
  }

  IsDate: boolean = true;
  IsImage: boolean = true;


  facturaForm: FormGroup;

  constructor(private router: Router, private _fb: FormBuilder, private _gestionService: GestionService,
    private _facturaService: FacturacionService, private coreComponent: CoreContainerComponent, private utilService: UtilService) { }

  ngOnInit() {

    this.filtroForm = new FormGroup({
      filtroDato: new FormControl()
    });

    this.date = new Date();
    this.date2 = new Date();

    let parametros: Parametros = new Parametros();
    parametros.finicio = new Date();
    parametros.ffin = new Date();
    parametros.cliente = "--TODOS--";
    parametros.estado = "--TODOS--";
    parametros.refacturada = "--TODOS--";
    parametros.facturo = "--TODOS--";
    parametros.tipo = "--TODOS--";
    parametros.medio = "--TODOS--";
    parametros.cPago = "--TODOS--";
    parametros.idUsuarioLogueado = 91;
    parametros.cobrador = 0;


    this.consultaAvanzadaFacturacion(parametros);

    this._gestionService.dropClientes().subscribe(
      data => {
        this.lstClientes = data.current;

        let lstAux: any[] = [];
        for (var item of this.lstClientes) {
          lstAux.push({ nombre: item.valor, key: item.llave })
        }
        this.dropClientes = this.dropClientes.concat(lstAux);
        this.Llenar();
      },
      error => {
        console.log("error login");
        console.log(error);
      }
    );

    this._gestionService.dropCobrador().subscribe(
      data => {
        this.lstCobradores = data.current;

        let lstAux: any[] = [];
        for (var item of this.lstCobradores) {
          lstAux.push({ nombre: item.usuario, key: item.idEmpleado })
        }
        this.dropCobrador = this.dropCobrador.concat(lstAux);
        this.Llenar();
      },
      error => {
        console.log("error login");
        console.log(error);
      }
    );

  }

  compressed_files() {
    this.coreComponent.openModal(0);
    let parametros: Parametros = new Parametros();
    let fechaFactura = new Date();
    console.log(this.utilService)
    let nombreArchivo = 'Factura '+(this.utilService.getTextMonth(fechaFactura.getMonth()))+'-' + fechaFactura.getDate() + ' ' + fechaFactura.getHours() + '_' + fechaFactura.getMinutes() + '_' + fechaFactura.getSeconds()
    parametros.archivos = [];
    parametros.nombres = [];
    parametros.archivosClientes = []
    for (let data of this.lstFacturas) {
      if(data.uuid){
        parametros.archivosClientes.push({
          nombreCliente: data.fpor,
          rutasArchivos:[
            this.GENERAL_RUTA + '' + this.FACTURAS_RUTA + data.fpor+'/'+data.factura+'.pdf',
            this.GENERAL_RUTA + '' + this.FACTURAS_RUTA + data.fpor+'/'+data.factura+'.xml'
          ],
          nombresArchivos:[
            data.factura+".pdf",
            data.factura+".xml"
          ]
        })
      }
    }
    parametros.nombreArchivo = nombreArchivo;
    console.log(parametros);
    this._facturaService.generarZip(parametros).subscribe(
      data => {
        console.log(data);
        var blob = window.URL.createObjectURL(new Blob([data._body], {type: 'application/octet-stream'}));
        let element = document.createElement('a');
        element.setAttribute('href', blob);
        element.setAttribute('download', nombreArchivo +".zip");
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        this.coreComponent.closeModal(0);
        parametros = new Parametros();
        parametros.nombreArchivo = nombreArchivo;
        this._facturaService.eliminarZip(parametros).subscribe(
          data => {
            if(data.status_code === 200){
              console.log(data.message);
            }
          }
        )
      },
      error => {
        console.log("error");
        console.log(error);
        this.coreComponent.closeModal(0);
      }
    );

  }

  str2bytes (str) {
    var bytes = new Uint8Array(str.length);
    for (var i=0; i<str.length; i++) {
        bytes[i] = str.charCodeAt(i);
    }
    return bytes;
}


  download() {

    if (this.sistema) {
      let lstFacturas2: any[] = [];
      console.log(this.lstFacturas);
      this.lstFacturas.forEach((factura, index) => {
        let facturaAux = {
          '#': index + 1,
          'Cliente': "\"" + factura.nombre_cliente + "\"",
          'Razón Social': "\"" + factura.rsocial + "\"",
          'RFC': factura.rfc,
          'Factura': factura.factura,
          'UUID': factura.uuid,
          'Vendió': factura.fpor,
          'Sub Total M.N.': "\"" + new AccountingFormatMoney().transform(factura.importeMN) + "\"",
          'IVA M.N.': "\"" + new AccountingFormatMoney().transform(factura.totalivaMN) + "\"",
          'Total M.N.': "\"" + new AccountingFormatMoney().transform(factura.totalMN) + "\"",
          'Sub Total USD': "\"" + new AccountingFormatMoney().transform(factura.importe) + "\"",
          'IVA USD': "\"" + new AccountingFormatMoney().transform(factura.totaliva) + "\"",
          'Total USD': "\"" + new AccountingFormatMoney().transform(factura.total) + "\"",
          'Moneda': factura.moneda,
          'T.Cambio': "\"" + new AccountingFormatMoney().transform(factura.pdolar) + "\"",
          'C.Pago': factura.cpago,
          'F. Facturación': new dateFormatSlash().transform(factura.fecha),
          'Tipo': factura.tipo,
          'Refacturada': factura.refacturada,
          'Estado': factura.estado,
          'Fecha Cancelación': new dateFormatSlash().transform(factura.fechaCancelacion) == "Pendiente" ? "NA" : new dateFormatSlash().transform(factura.fechaCancelacion),
          'No. Cuenta': factura.cuentaBanco,

        };
        lstFacturas2.push(facturaAux);
      });
      var csvData = this.ConvertToCSV(lstFacturas2);
      var a = document.createElement("a");
      a.setAttribute('style', 'display:none;');
      document.body.appendChild(a);
      var blob = new Blob([csvData], { type: 'text/csv' });
      var url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = 'ConsultaFacturacion-' + this._utilFechas.fechaDescarga(new Date()) + '.csv';
      a.click();
    } else {
      let lstFacturas2: any[] = [];
      console.log(this.lstFacturas);
      this.lstFacturas.forEach((factura, index) => {
        let facturaAux = {
          '#': index + 1,
          'Folio': "\"" + factura.numeroFactura + "\"",
          'UUID': "\"" + factura.uuid + "\"",
          'RFC': factura.rfc_Cliente,
          'Cliente': factura.nombre_Cliente,
          'Vendió': factura.facturadoPor,
          'Fecha': new dateFormatSlash().transform(factura.fecha),
          'Sub Total M.N.': "\"" + new AccountingFormatMoney().transform(factura.importe) + "\"",
          'IVA M.N.': "\"" + new AccountingFormatMoney().transform(factura.iva) + "\"",
          'Total M.N.': "\"" + new AccountingFormatMoney().transform(((factura.importe + factura.iva))) + "\"",
          'Sub Total USD': "\"" + new AccountingFormatMoney().transform(factura.montoFacturaDLS) + "\"",
          'IVA USD': "\"" + new AccountingFormatMoney().transform(factura.ivaDLS) + "\"",
          'Total USD': "\"" + new AccountingFormatMoney().transform((factura.montoFacturaDLS + factura.ivaDLS)) + "\"",
          'Moneda': factura.moneda,
          'T.Cambio': "\"" + new AccountingFormatMoney().transform(factura.tipoCambio) + "\"",
          'Estado': factura.estado,
          'No. Cuenta': factura.cuentaBanco,

        };
        lstFacturas2.push(facturaAux);
      });
      var csvData = this.ConvertToCSV(lstFacturas2);
      var a = document.createElement("a");
      a.setAttribute('style', 'display:none;');
      document.body.appendChild(a);
      var blob = new Blob([csvData], { type: 'text/csv' });
      var url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = 'ConsultaFacturacion-' + this._utilFechas.fechaDescarga(new Date()) + '.csv';
      a.click();
    }

  }

  //Función para convertir JSON en formato CSV
  ConvertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';
    var row = "";
    for (var index in objArray[0]) {
      row += index + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (var i = 0; i < array.length; i++) {
      var line = '';
      for (var index in array[i]) {
        if (line != '') line += ','

        line += array[i][index];
      }
      str += line + '\r\n';
    }
    return str;
  }



  backMenu() {
    this.router.navigate(["protected/gestion/"]);
  }

  closePanel() {
    this.classPanel = "panelOcultar";
    this.hiddenClose = false;
  }

  openPanel() {
    if (!this.hiddenClose) {
      this.classPanel = "panelMostrar";
      this.hiddenClose = true;
    }
  }

  radioSistema($event) {
    if ($event == 0 && !this.sistema) {
      this.sistema = true;
      this.IsDate = false;
      this.IsDate = true;
      this.Llenar();
      this.lstRadiosRapida = ['Factura', 'Pedido', 'UUID'];
      this.fueraSistema = false;
      if (this.avanzada) {
        let parametros: Parametros = new Parametros();
        parametros.finicio = new Date();
        parametros.ffin = new Date();
        parametros.cliente = "--TODOS--";
        parametros.estado = "--TODOS--";
        parametros.refacturada = "--TODOS--";
        parametros.facturo = "--TODOS--";
        parametros.tipo = "--TODOS--";
        parametros.medio = "--TODOS--";
        parametros.cPago = "--TODOS--";
        parametros.idUsuarioLogueado = 91;
        parametros.cobrador = 0;

        this.consultaAvanzadaFacturacion(parametros);

      } else {
        this.filtroForm = new FormGroup({
          filtroDato: new FormControl()
        });
      }


    } else if ($event == 1 && this.sistema) {
      this.sistema = false;
      this.IsDate = false;
      this.IsDate = true;
      this.Llenar2();
      this.lstRadiosRapida = ['Factura', 'UUID'];
      this.filtroConsultaRapida = "Factura";
      if (!this.sistema && !this.avanzada) {
        this.fueraSistema = true;
      }
      if (this.avanzada) {
        let parametros: Parametros = new Parametros();
        parametros.finicio = new Date();
        parametros.ffin = new Date();
        parametros.dentroSistema = false;
        parametros.idCliente = 0;
        parametros.factura = 0;
        parametros.uuid = "";
        parametros.fpor = "";
        parametros.estado = "";
        parametros.idUsuarioLogueado = 91;
        parametros.cobrador = 0;
        this.listarFacturasEmitidas(parametros);

      } else {
        this.filtroForm = new FormGroup({
          filtroDato: new FormControl()
        });

        let parametros: Parametros = new Parametros();
        parametros.finicio = new Date();
        parametros.ffin = new Date();
        parametros.dentroSistema = false;
        parametros.idCliente = 0;
        parametros.factura = 0;
        parametros.uuid = "";
        parametros.fpor = "";
        parametros.estado = "";
        parametros.idUsuarioLogueado = 91;
        parametros.cobrador = 0;

        this.listarFacturasEmitidas(parametros);
      }
    }
  }

  radioRapida($event) {
    if ($event == 0) {
      this.filtroConsultaRapida = "Factura";
    } else if ($event == 1 && this.sistema) {
      this.filtroConsultaRapida = "Pedido";
    } else if ($event == 1 && !this.sistema) {
      this.filtroConsultaRapida = "UUID";
    } else if ($event == 2) {
      this.filtroConsultaRapida = "UUID";
    }
  }

  filtroAvanzada() {
    if (!this.avanzada) {
      this.avanzada = true;
      this.fueraSistema = false;
      this.filtroConsultaRapida = "Factura";
      this.filtroForm = new FormGroup({
        filtroDato: new FormControl()
      });
      if (this.sistema) {
        let parametros: Parametros = new Parametros();
        parametros.finicio = new Date();
        parametros.ffin = new Date();
        parametros.cliente = "--TODOS--";
        parametros.estado = "--TODOS--";
        parametros.refacturada = "--TODOS--";
        parametros.facturo = "--TODOS--";
        parametros.tipo = "--TODOS--";
        parametros.medio = "--TODOS--";
        parametros.cPago = "--TODOS--";
        parametros.idUsuarioLogueado = 91;
        parametros.cobrador = 0;

        parametros.idUsuarioLogueado = 91;


        this.consultaAvanzadaFacturacion(parametros);
      } else {
        let parametros: Parametros = new Parametros();
        parametros.finicio = new Date();
        parametros.ffin = new Date();
        parametros.dentroSistema = false;
        parametros.idCliente = 0;
        parametros.factura = 0;
        parametros.uuid = "";
        parametros.fpor = "";
        parametros.estado = "";
        parametros.idUsuarioLogueado = 91;
        parametros.cobrador = 0;
        this.listarFacturasEmitidas(parametros);
      }
    }
  }

  filtroRapida() {
    if (this.avanzada) {
      this.avanzada = false;
      if (!this.sistema) {
        this.fueraSistema = true;
        let parametros: Parametros = new Parametros();
        parametros.finicio = new Date();
        parametros.ffin = new Date();
        parametros.dentroSistema = false;
        parametros.idCliente = 0;
        parametros.factura = 0;
        parametros.uuid = "";
        parametros.fpor = "";
        parametros.estado = "";
        parametros.idUsuarioLogueado = 91;
        parametros.cobrador = 0;

        this.listarFacturasEmitidas(parametros);
      } else {
        let parametros: Parametros = new Parametros();
        parametros.facturaS = (this.filtroConsultaRapida == "Factura") ? this.filtroForm.get('filtroDato').value : "";
        parametros.cPedido = (this.filtroConsultaRapida == "Pedido") ? this.filtroForm.get('filtroDato').value : "";
        parametros.uuid = (this.filtroConsultaRapida == "UUID") ? this.filtroForm.get('filtroDato').value : "";
        parametros.fpor = "";
        parametros.idUsuarioLogueado = 91;
        this.consultaRapidaFacturacion(parametros);
      }
    }
  }

  filtroRapido() {
    console.log(this.filtroForm.get('filtroDato').value);
    if (this.sistema) {
      let parametros: Parametros = new Parametros();
      parametros.facturaS = (this.filtroConsultaRapida == "Factura") ? this.filtroForm.get('filtroDato').value : "";
      parametros.cPedido = (this.filtroConsultaRapida == "Pedido") ? this.filtroForm.get('filtroDato').value : "";
      parametros.uuid = (this.filtroConsultaRapida == "UUID") ? this.filtroForm.get('filtroDato').value : "";
      parametros.fpor = "--TODOS--";
      parametros.idUsuarioLogueado = 91;
      this.consultaRapidaFacturacion(parametros);
    } else {
      let parametros: Parametros = new Parametros();
      parametros.finicio = null;
      parametros.ffin = null;
      parametros.dentroSistema = false;
      parametros.idCliente = 0;
      parametros.factura = (this.filtroConsultaRapida == "Factura") ? this.filtroForm.get('filtroDato').value : 0;
      parametros.uuid = (this.filtroConsultaRapida == "UUID") ? this.filtroForm.get('filtroDato').value : "";
      parametros.fpor = "";
      parametros.estado = "";
      parametros.idUsuarioLogueado = 91;
      parametros.cobrador = 0;

      this.listarFacturasEmitidas(parametros);
    }
  }

  getFechaImpl($event) {
    //console.log($event);
  }

  dropList(index, $event) {

  }
  mostrarDatos($event) {
    if (this.sistema) {
      let parametros: Parametros = new Parametros();
      parametros.finicio = $event.Fechas.fechaInicial;
      parametros.ffin = $event.Fechas.fechaFinal;
      parametros.cliente = ($event.Datos[0].key != 0) ? $event.Datos[0].key : $event.Datos[0].nombre;
      parametros.cobrador = $event.Datos[1].key;
      parametros.facturo = $event.Datos[2].nombre;
      parametros.cPago = $event.Datos[3].nombre;
      parametros.tipo = $event.Datos[4].nombre;
      parametros.estado = $event.Datos[5].nombre;
      parametros.refacturada = $event.Datos[6].nombre;
      parametros.medio = "--TODOS--";

      parametros.idUsuarioLogueado = 91;


      this.consultaAvanzadaFacturacion(parametros);
    } else {
      let parametros: Parametros = new Parametros();
      parametros.finicio = $event.Fechas.fechaInicial;
      parametros.ffin = $event.Fechas.fechaFinal;
      parametros.dentroSistema = false;
      parametros.idCliente = $event.Datos[0].key;
      parametros.factura = 0;
      parametros.uuid = "";
      parametros.fpor = $event.Datos[2].nombre != "--TODOS--" ? $event.Datos[2].nombre : "";
      parametros.estado = $event.Datos[3].nombre != "--TODOS--" ? $event.Datos[3].nombre : "";
      parametros.idUsuarioLogueado = 91;
      parametros.cobrador = $event.Datos[1].key;

      this.listarFacturasEmitidas(parametros);
    }
  }

  consultaAvanzadaFacturacion(parametros: Parametros) {
    this.coreComponent.openModal(0);
    this._facturaService.consultaAvanzadaFacturacion(parametros).subscribe(
      data => {
        this.lstFacturas = data.current;
        this.coreComponent.closeModal(0);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }

  consultaRapidaFacturacion(parametros: Parametros) {
    this.coreComponent.openModal(0);
    this._facturaService.consultaRapidaFacturacion(parametros).subscribe(
      data => {
        this.lstFacturas = data.current;
        this.coreComponent.closeModal(0);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }

  listarFacturasEmitidas(parametros: Parametros) {
    this.coreComponent.openModal(0);
    this._facturaService.listarFacturasEmitidas(parametros).subscribe(
      data => {
        console.log(data.current);
        this.lstFacturas = data.current;
        this.coreComponent.closeModal(0);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }

  regresarConsulta() {
    this.detalle = false;
  }

  verDetalle(item: any) {
    console.log(item);
    this.facturaDetalle = item;
    this.detalle = true;
    let lstAux: any[] = [];
    lstAux.push(item);
    if (item.estado == "Cobrada") {
      if (item.cPago.indexOf("DIAS") < 0 || this._utilFechas.regresaDiferenciaEntreFechasEnDias(new Date(item.fechaPago + " 00:00:00"), new Date(item.fep + " 00:00:00")) >= 0) {
        lstAux[0]["moroso"] = "No";
      } else {
        lstAux[0]["moroso"] = "Si";
      }
    }
    if (item.cPago.indexOf("DIAS") < 0 && item.cPago.indexOf("ENTREGA") < 0) {
      console.log("obtenerLineaTiempoPrepago");
      this.obtenerLineaTiempoPrepago(item.factura, item.fpor);
    } else if (item.cPago.indexOf("DIAS") >= 0 || item.cPago.indexOf("ENTREGA") >= 0) {
      console.log("obtenerResumen");
      this.obtenerResumen(item.factura, item.fpor);
    } else {
      this.lstLineaTiempo = undefined;
      this.itemLineaTiempo = undefined;
      this.estadoItemLineaTiempo = "";
    }

    if (this.lstLineaTiempo != undefined) {
      this.lstLineaTiempoActive = new Array(this.lstLineaTiempo.length).fill("")
      this.lstLineaTiempoActive[0] = "divActive";
    }

    this.totalDetalle = 0;
    this.totalDetalle += item.importe;
    for (let factura of this.lstFacturas) {
      if (factura.factura != item.factura && factura.nombre_cliente == item.nombre_cliente && factura.estado != "Cobrada") {
        lstAux.push(factura);
        this.totalDetalle += factura.importe;
      }
    }

    this.lstFacturasDetalle = [];
    this.lstFacturasDetalle = this.lstFacturasDetalle.concat(lstAux);
    this.lstFacturasDetalleActive = new Array(this.lstFacturasDetalle.length).fill("")
    this.lstFacturasDetalleActive[0] = "divActual";
    console.log(this.lstFacturasDetalle);
  }

  resumenFactura(i: number) {
    this.lstFacturasDetalleActive = new Array(this.lstFacturasDetalle.length).fill("")
    this.lstFacturasDetalleActive[i] = "divActive";

    if (this.lstFacturasDetalle[i].cPago.indexOf("DIAS") < 0 && this.lstFacturasDetalle[i].cPago.indexOf("ENTREGA") < 0) {
      this.obtenerLineaTiempoPrepago(this.lstFacturasDetalle[i].factura, this.lstFacturasDetalle[i].fpor);
    } else if (this.lstFacturasDetalle[i].cPago.indexOf("DIAS") >= 0 || this.lstFacturasDetalle[i].cPago.indexOf("ENTREGA") >= 0) {
      this.obtenerResumen(this.lstFacturasDetalle[i].factura, this.lstFacturasDetalle[i].fpor);
    }

  }

  obtenerResumen(facturaS, fpor) {
    this.facturaS = facturaS;
    this.fpor = fpor;
    let parametros: Parametros = new Parametros();
    parametros.facturaS = facturaS;
    parametros.fpor = fpor;
    this.coreComponent.openModal(0);
    this._facturaService.obtenerResumen(parametros).subscribe(
      data => {
        this.lstLineaTiempo = [];
        if (data.current != undefined && data.current.length > 0) {
          this.lstLineaTiempo = data.current;
          console.log(this.lstLineaTiempo);
          let _temp: any[] = [];
          let _facc: any[] = [];

          for (let i: number = 0; i < data.current.length; i++) {
            if (data.current[i].etapa == 'FACTURACION' || data.current[i].etapa == 'ENTREGA' ||
              data.current[i].etapa == 'REVISION' || data.current[i].etapa == 'COBRO' ||
              data.current[i].etapa == 'FACTURA REMISION' || data.current[i].etapa == 'REFACTURACION' ||
              data.current[i].etapa == 'CANCELACION' || data.current[i].etapa == 'FACTURA') {

              _temp.push(data.current[i]);
            }
          }

          _facc = _temp;

          let _arrTemp: any[] = [];
          let currenItem: any;
          for (let j: number = 0; j < _facc.length; j++) {
            currenItem = _facc[j];
            if (currenItem.etapa == 'COBRO' && currenItem.etapaPadre == '1') { // 1 es sin credito
              _arrTemp.push(currenItem);
            } else if (currenItem.etapa == 'ENTREGA') {
              if (currenItem.fechaFin == null) {
                if (currenItem.conforme == "NO DISPONIBLE")
                  currenItem.conforme = "Pendiente";
              } else {
                if (currenItem.conforme == "NO DISPONIBLE")
                  currenItem.conforme = "ND";
              }
            }
          }
          for (var k: number = 0; k < _facc.length; k++) {
            if (_facc[k].etapaPadre != '1') {
              _arrTemp.push(_facc[k]);
            }
          }

          if (_arrTemp.length > 0)
            _arrTemp[_arrTemp.length - 1].finLista = true;

          this.lstLineaTiempo = _arrTemp;
          console.log("obtenerResumen");
          console.log(this.lstLineaTiempo);
          this.lstLineaTiempoActive = new Array(this.lstLineaTiempo.length).fill("")
          this.lstLineaTiempoActive[0] = "divActive";
          this.estadoItemLineaTiempo = this.lstLineaTiempo[0].etapa;
          this.itemLineaTiempo = this.lstLineaTiempo[0];
        }
        this.coreComponent.closeModal(0);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }

  obtenerLineaTiempoPrepago(facturaS, fpor) {
    let parametros: Parametros = new Parametros();
    parametros.facturaS = facturaS;
    parametros.fpor = fpor;
    this.facturaS = facturaS;
    this.fpor = fpor;
    this.coreComponent.openModal(0);
    this._facturaService.obtenerLineaTiempoPrepago(parametros).subscribe(
      data => {
        console.log(data.current)
        this.lstLineaTiempo = data.current;
        this.lstLineaTiempoActive = new Array(this.lstLineaTiempo.length).fill("")
        this.lstLineaTiempoActive[0] = "divActive";
        console.log("obtenerLineaTiempoPrepago");
        if (this.lstLineaTiempo[0].etapa == "Facturación por Adelantado") {
          this.obtenerResumenFacturacionXAdelantado(parametros.facturaS, parametros.fpor);
        } else {
          this.obtenerResumenMonitoreoCobro(parametros.facturaS, parametros.fpor);
        }
        this.estadoItemLineaTiempo = this.lstLineaTiempo[0].etapa;
        this.coreComponent.closeModal(0);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }

  obtenerResumenMonitoreoCobro(facturaS, fpor) {
    let parametros: Parametros = new Parametros();
    parametros.facturaS = facturaS;
    parametros.fpor = fpor;
    this.itemLineaTiempo = undefined;
    this.coreComponent.openModal(0);
    this._facturaService.obtenerResumenMonitoreoCobro(parametros).subscribe(
      data => {
        console.log(data.current);
        this.itemLineaTiempo = data.current[0];
        this.coreComponent.closeModal(0);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }

  obtenerResumenFacturaPrepago(facturaS, fpor) {
    let parametros: Parametros = new Parametros();
    parametros.facturaS = facturaS;
    parametros.fpor = fpor;
    this.itemLineaTiempo = undefined;
    this.coreComponent.openModal(0);
    this._facturaService.obtenerResumenFacturaPrepago(parametros).subscribe(
      data => {
        console.log(data.current);
        this.itemLineaTiempo = data.current[0];
        this.coreComponent.closeModal(0);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }

  obtenerResumenEntrega(facturaS, fpor) {
    let parametros: Parametros = new Parametros();
    parametros.facturaS = facturaS;
    parametros.fpor = fpor;
    this.itemLineaTiempo = undefined;
    this.estadoItemLineaTiempo = "ENTREGA";
    this.coreComponent.openModal(0);
    this._facturaService.obtenerResumenEntrega(parametros).subscribe(
      data => {
        this.itemLineaTiempo = new Array(undefined, undefined, undefined, undefined, undefined);
        for (let i = 0; i < data.current.length; i++) {
          let currentItem: any = data.current[i];
          if (currentItem.etapa == 'TRAMITAR RUTA') {
            this.itemLineaTiempo[0] = currentItem;
          } else if (currentItem.etapa == 'SURTIR RUTA') {
            this.itemLineaTiempo[1] = currentItem;
            if (this.itemLineaTiempo[1].fechaFin != null) {
              this.itemLineaTiempo[1].referencia = this.itemLineaTiempo[1].referencia.split(",");
            }
          } else if (currentItem.etapa == 'ASIGNAR MENSAJERO') {
            this.itemLineaTiempo[2] = currentItem;
          } else if (currentItem.etapa == 'EJECUTAR RUTA') {
            this.itemLineaTiempo[3] = currentItem;
          } else if (currentItem.etapa == 'CERRAR RUTA') {
            this.itemLineaTiempo[4] = currentItem;
          }

        }
        console.log(this.itemLineaTiempo);
        this.coreComponent.closeModal(0);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }

  obtenerResumenRevision(facturaS, fpor) {
    let parametros: Parametros = new Parametros();
    parametros.facturaS = facturaS;
    parametros.fpor = fpor;
    this.coreComponent.openModal(0);
    this.itemLineaTiempo = undefined;
    this._facturaService.obtenerResumenRevision(parametros).subscribe(
      data => {
        this.itemLineaTiempo = data.current;
        this.coreComponent.closeModal(0);
        console.log(this.itemLineaTiempo);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }

  obtenerResumenCobro(facturaS, fpor, sc) {
    let parametros: Parametros = new Parametros();
    parametros.facturaS = facturaS;
    parametros.fpor = fpor;
    parametros.sc = sc;
    this.coreComponent.openModal(0);
    this.itemLineaTiempo = undefined;
    this._facturaService.obtenerResumenCobro(parametros).subscribe(
      data => {
        this.itemLineaTiempo = data.current;
        this.coreComponent.closeModal(0);
        console.log(this.itemLineaTiempo);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }

  obtenerResumenFactura(facturaS, fpor) {
    let parametros: Parametros = new Parametros();
    parametros.facturaS = facturaS;
    parametros.fpor = fpor;
    this.coreComponent.openModal(0);
    this.itemLineaTiempo = undefined;
    this._facturaService.obtenerResumenFactura(parametros).subscribe(
      data => {
        this.itemLineaTiempo = data.current;
        this.coreComponent.closeModal(0);
        console.log(this.itemLineaTiempo);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }

  obtenerResumenFacturacionXAdelantado(facturaS, fpor) {
    let parametros: Parametros = new Parametros();
    parametros.facturaS = facturaS;
    parametros.fpor = fpor;
    this.coreComponent.openModal(0);
    this.itemLineaTiempo = undefined;
    this._facturaService.obtenerResumenFacturacionXAdelantado(parametros).subscribe(
      data => {
        this.itemLineaTiempo = data.current[0];
        this.coreComponent.closeModal(0);
        console.log(this.itemLineaTiempo);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }

  lineaTiempo(i: number) {
    this.lstLineaTiempoActive = new Array(this.lstLineaTiempo.length).fill("")
    this.lstLineaTiempoActive[i] = "divActive";
    this.estadoItemLineaTiempo = this.lstLineaTiempo[i].etapa;
    this.lineaIiempoSelect = this.lstLineaTiempo[i];
    //this.itemLineaTiempo = this.lstLineaTiempo[i];
    this.itemLineaTiempo = undefined;
    switch (this.estadoItemLineaTiempo) {
      case "Monitoreo de Cobro SC":
        console.log("Credito Monitoreo Cobro SC");
        this.obtenerResumenMonitoreoCobro(this.facturaS, this.fpor);
        break;
      case "Factura":
        console.log("Credito Factura Prepago");
        this.obtenerResumenFacturaPrepago(this.facturaS, this.fpor);
        break;
      case "FACTURACION":
        console.log("Facturacion");
        this.itemLineaTiempo = this.lstLineaTiempo[0];
        break;
      case "ENTREGA":
        console.log("Credito Entrega");
        this.obtenerResumenEntrega(this.facturaS, this.fpor);
        break;
      case "REVISION":
        console.log("Credito Revision");
        this.obtenerResumenRevision(this.facturaS, this.fpor);
        break;
      case "COBRO":
        console.log("Credito Cobro");
        this.obtenerResumenCobro(this.facturaS, this.fpor, 0);
        break;
      case "FACTURA":
        console.log("Credito Factura");
        this.obtenerResumenFactura(this.facturaS, this.fpor);
        break;
      case "Facturación por Adelantado":
        console.log("Facturación por Adelantado");
        this.obtenerResumenFacturacionXAdelantado(this.facturaS, this.fpor);
        break;
    }
  }

  descargarPDF(archivo: string) {
    console.log(archivo);
    const BrowserWindow = electron.remote.BrowserWindow;
    let newWin = new BrowserWindow({ width: 800, height: 600 })
    PDFWindow.addSupport(newWin)
    newWin.loadURL(archivo);
  }

}
