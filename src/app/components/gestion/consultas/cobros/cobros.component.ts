import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ElementFilter } from '../../../shared/filter/element.model';
import { GestionService } from '../../../../services/gestion/gestion.service';
import { Parametros } from '../../../../class/Parametros.class';
import { CobrosService } from '../../../../services/gestion/consulta/cobros/cobros.service';
import { CoreContainerComponent } from '../../../core-container/core-container.component';
import { FacturacionService } from '../../../../services/gestion/consulta/facturacion/facturacion.service';
import 'rxjs/Rx';
import { dateFormatSlash } from '../../../../pipes/accounting/accounting.pipe';
import { UtilFechas } from '../../../../class/UtilFechas';
import { months } from 'moment';

@Component({
  selector: 'pn-cobros',
  templateUrl: './cobros.component.html',
  styleUrls: ['./cobros.component.scss']
})
export class CobrosComponent implements OnInit {
  @Output() valueFilter: EventEmitter<any> = new EventEmitter();
  ListaSC: any[] = [];
  Datos: any;
  DatosCobros: any[] = [];
  showRefresh: boolean;
  marginImage: string;
  ruta: string;
  tiempo: any[] = [];
  programado: any[] = [];
  nivel: any[] = [];
  conFecha: any = [] = [];
  sinFecha: any = [] = [];
  cpago: any[] = [];
  estado: any[] = [];
  medio: any[] = [];
  dias: any[] = [];
  arreglo: any[] = [];
  fep1: any;
  ff: any;
  f1: number;
  f: number;
  fecha: any;
  client: any;
  cliente: any;
  banco: string;
  fee: any;
  resultado: any;
  fue: any;
  cuenta: any;
  frc: any;
  drc: any;
  fep: any;
  DatosTotales: any;
  valores1: any[];
  etiquetas1: any[];
  cpedido: any;
  sc: any;
  facturaS: String;
  fpor: String;
  fechaE: String;
  classPanel: string = "panelNormal";
  hiddenClose: boolean = true;
  lstItems: string [] = ['Fecha Facturación ', 'Fecha cobro'];
  lstRadiosRapida: string [] = ['Factura', 'UUID'];
  filtroConsultaRapida: String = "Factura"
  avanzada: Boolean = true;
  detalle: Boolean = false;
  fechaFacturacion: boolean = true;
  fechaCobros: boolean = false;
  isTableShow: boolean = true;
  Clear = true;
  totalDetalle: Number = 0;
  itemsDropList: any[] = [{ nombre: '--TODOS--', key: 0 }, { nombre: 'nombre1', key: 1 }, { nombre: 'nombre2', key: 2 }];
  lstFacturas: any[] = [];
  txtFactura: String;
  lstClientes: any[];
  lstCobradores: any[];
  lstCobros: any[];
  cobroDetalle: any;
  ltsClientesPorId: any[];
  ltsBancosCliente: any[];
  ltsEmpleadosPorTipo: any[];
  ltsCuentasBanco: any[];
  filtroForm: FormGroup;
  IsDate: boolean = true;
  Elements: ElementFilter[];
  lstCobrosDetalle: any[] = [];
  lstCobrosDetalleActive: any[] = [];
  defaultSelected: any = { nombre: '--TODOS--' };
  dropClientes: any[] = [{ nombre: '--TODOS--', key: 0 }];
  dropCobrador: any[] = [{ nombre: '--TODOS--', key: 0 }];
  lstLineaTiempo: any[] = [];
  lstEtapas: any[];
  lstLineaTiempoActive: any[] = [];
  estadoItemLineaTiempo: String = "";
  estapaItemLineaTiempo: String[];
  itemLineaTiempo: any[] = [];
  lstCobros2: any[] = [];
  totalMontoDolares: number = 0;
  totalMontoDolares1: number = 0;
  totalMontoDolares2: number = 0;
  totalCobros: number = 0;
  totalCobros1: number = 0;
  totalCobros2: number = 0;
  totalPiezas: number = 0;
  totalPiezas1: number = 0;
  totalPiezas2: number = 0;
  public Fechas = {

    fechaInicial: new Date(),
    fechaFinal: new Date(),
    fechaInicial1: new Date(),
    fechaFinal1: new Date(),
  }

  date2: Date;
  public date = new Date();
  date1 = new Date(this.date.getTime() - 24 * 60 * 60 * 1000);
  date22 = new Date(this.date.getTime() - (24 * 60 * 60 * 1000) * 2);
  date3 = new Date(this.date.getTime() - 24 * 60 * 60 * 1000);
  date4 = new Date(this.date.getTime() - (24 * 60 * 60 * 1000) * 2);
  fechaValidaInicial: Date;
  fechaValidaFinal: Date;
  fechaValidaInicial1: Date;
  fechaValidaFinal1: Date;
  _utilFechas: UtilFechas = new UtilFechas();
  totalGraficas = {
    niPorCobrar: { totalMonto: 0, totalClientes: 0, totalCobros: 0, totalPartidas: 0, totalPiezas: 0 },
    cpagoPorcobrar: { totalMonto: 0, totalClientes: 0, totalCobros: 0, totalPartidas: 0, totalPiezas: 0 },
    abiertoCerrado: { totalMonto: 0, totalClientes: 0, totalCobros: 0, totalPartidas: 0, totalPiezas: 0 },
    programadoPorProgramar: { totalMonto: 0, totalClientes: 0, totalCobros: 0, totalPartidas: 0, totalPiezas: 0 },
    nicobrado: { totalMonto: 0, totalClientes: 0, totalCobros: 0, totalPartidas: 0, totalPiezas: 0 },
    cPagocobrado: { totalMonto: 0, totalClientes: 0, totalCobros: 0, totalPartidas: 0, totalPiezas: 0 },
    diasRestanCredito: { totalMonto: 0, totalClientes: 0, totalCobros: 0, totalPartidas: 0, totalPiezas: 0 },
    medioPagoProgramado: { totalMonto: 0, totalClientes: 0, totalCobros: 0, totalPartidas: 0, totalPiezas: 0 },
    ETFT: { totalMonto: 0, totalClientes: 0, totalCobros: 0, totalPartidas: 0, totalPiezas: 0 }
  }
  datosGraficas = {
    niPorCobrar: {
      AAplus: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      AA: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      AM: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      MB: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      AB: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      MM: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      MA: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 }
    },
    cPagoPorcobrar: {
      contraEntrega: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      dias30: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      dias45: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      dias60: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      dias90: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      dias15: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      prepago: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
    },
    abiertoCerrado: {
      abierto: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      cerrado: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 }
    },
    programadoPorProgramar: {
      programado: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      porProgramar: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 }
    },
    nicobrado: {
      AAplus: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      AA: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      AM: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      MB: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
    },
    cPagocobrado: {
      contraEntrega: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      dias30: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      dias45: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      dias60: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 }
    },
    diasRestanCredito: {
      pendiente: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      cobrado: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 }
    },
    medioPagoProgramado: {
      otros: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      transferencia: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      cheques: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 }
    },
    ETFT: {
      entiempo: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
      fueradeTiempo: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 }
    }
  }
  Llenar = () => {
    this.Elements = [new ElementFilter("string", "Clientes", this.dropClientes, true),
    new ElementFilter("string", "Cobrador", this.dropCobrador, false),
    new ElementFilter("string", "Vendió", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Proveedora', key: 1 },
      { nombre: 'Proquifa', key: 2 },
      { nombre: 'Pharma', key: 3 },
      { nombre: 'Golocaer', key: 4 },
      { nombre: 'Mungen', key: 5 }
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
    new ElementFilter("string", "Días restantes de crédito", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'En Tiempo', key: 1 },
      { nombre: 'A tres días de vencimiento', key: 2 },
      { nombre: 'Vencimiento', key: 3 },
      { nombre: 'Tres días después de vencimiento', key: 4 },
      { nombre: 'Vencido', key: 5 }
    ], false),
    new ElementFilter("string", "Estado", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Cerrado', key: 1 },
      { nombre: 'Abierto', key: 2 }
    ], false),
    ]
    //isThereData indica que ya no es necesario mostrar el loader
    this.isThereData = true;
    this.Clear = false;
  }
  Llenar2 = () => {
    this.Elements = [new ElementFilter("string", "Clientes", this.dropClientes, true
    ),
    new ElementFilter("string", "Cobrador", this.dropCobrador, false),
    new ElementFilter("string", "Vendió", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Proveedora', key: 1 },
      { nombre: 'Proquifa', key: 2 },
      { nombre: 'Pharma', key: 3 },
      { nombre: 'Golocaer', key: 4 },
      { nombre: 'Mungen', key: 5 },
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
    new ElementFilter("string", "Días restantes de crédito", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'En Tiempo', key: 1 },
      { nombre: 'A tres días de vencimiento', key: 2 },
      { nombre: 'Vencimiento', key: 3 },
      { nombre: 'Tres días después de vencimiento', key: 4 },
      { nombre: 'Vencido', key: 5 },
    ], false),
    new ElementFilter("string", "Estado", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Cerrado', key: 1 },
      { nombre: 'Abierto', key: 2 },
    ], false),
    new ElementFilter("string", "Banco", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Banamex', key: 1 },
      { nombre: 'BBVA BANCOMER', key: 2 },
      { nombre: 'I.B.C.', key: 3 },
      { nombre: 'Ixe', key: 4 },
    ], false),
    new ElementFilter("string", "Cuenta", [
      { nombre: '--TODOS--', key: 0 },
    ], false),
    ];
    //isThereData indica que ya no es necesario mostrar el loader
    this.isThereData = true;
    this.Clear = true;
  }
  isThereData: boolean = false;
  IsImage: boolean = true;
  facturaForm: FormGroup;
 
  constructor(private router: Router, private _gestionService: GestionService, private coreComponent: CoreContainerComponent,
    private _cobrosService: CobrosService) { }
  getFechaImpl($event) {

    this.Fechas.fechaInicial = this.date1;
    this.Fechas.fechaFinal = this.date3;
    if (this.Fechas.fechaInicial.getDay() === 6) {
      this.fechaValidaInicial = new Date(this.Fechas.fechaInicial.getTime() - (24 * 60 * 60 * 1000));
      this.fechaValidaFinal = new Date(this.Fechas.fechaInicial.getTime() - (24 * 60 * 60 * 1000));
    } else {
      if (this.Fechas.fechaInicial.getDay() === 0) {
        this.fechaValidaInicial = new Date(this.Fechas.fechaInicial.getTime() - (24 * 60 * 60 * 1000) * 2);
        this.fechaValidaFinal = new Date(this.Fechas.fechaFinal.getTime() - (24 * 60 * 60 * 1000) * 2);
      } else {
        this.fechaValidaInicial = this.Fechas.fechaInicial;
        this.fechaValidaFinal = this.Fechas.fechaFinal;
      }
    }
    this.date1 = this.fechaValidaInicial;
    this.date3 = this.fechaValidaFinal;
  }
  getFechaImpl2($event) {
    this.Fechas.fechaInicial1 = this.date22;
    this.Fechas.fechaFinal1 = this.date4;
    if (this.Fechas.fechaInicial1.getDay() === 6) {
      this.fechaValidaInicial1 = new Date(this.Fechas.fechaInicial1.getTime() - (24 * 60 * 60 * 1000) * 2);
      this.fechaValidaFinal1 = new Date(this.Fechas.fechaFinal1.getTime() - (24 * 60 * 60 * 1000) * 2);
    } else {
      if (this.Fechas.fechaInicial1.getDay() === 0) {
        this.fechaValidaInicial1 = new Date(this.Fechas.fechaInicial1.getTime() - (24 * 60 * 60 * 1000) * 4);
        this.fechaValidaFinal1 = new Date(this.Fechas.fechaFinal1.getTime() - (24 * 60 * 60 * 1000) * 4);
      } else {
        this.fechaValidaInicial1 = this.Fechas.fechaInicial1;
        this.fechaValidaFinal1 = this.Fechas.fechaFinal1;
      }
    }
    this.date22 = this.fechaValidaInicial1;
    this.date4 = this.fechaValidaFinal1;
  }
  ngOnInit() {
    this.filtroForm = new FormGroup({
      filtroDato: new FormControl()
    });
    //this.date = new Date();
    //this.date2 = new Date();
    let parametros: Parametros = new Parametros();
    let cuerpo = {
      fechaInicio: new Date(),
      fechaFin: new Date(),
      idCliente: 0,
      medioPago: "",
      fpor: "",
      estado: "",
      cpago: "",
      busquedaCR: false,
      factura: '',
      uuid: "",
      drc: 5,
      idUsuarioLogueado: 91,
      cobrador: 0,
      cuenta: "",
      banco: "",
    }
    this.obtenerCobros(cuerpo);
    this.facturaForm = new FormGroup({
      firstName: new FormControl()
    });
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

    /*this.filtroTotalAzul();
    this.filtroTotalMorado();
    this.filtroTotalBlanco();*/





  }
  filtroTotalAzul() {
    //Obtener monto en color Azul
    this.totalCobros = 0;
    this.totalMontoDolares = 0;
    this.totalPiezas = 0;
    let cuerpo = {
      fechaInicio: this.fechaValidaInicial,
      fechaFin: this.fechaValidaFinal,
      idCliente: 0,
      medioPago: "",
      fpor: "",
      estado: "",
      cpago: "",
      busquedaCR: false,
      factura: '',
      uuid: "",
      drc: 5,
      idUsuarioLogueado: 91,
      cobrador: 0,
      cuenta: "",
      banco: "",
    }
    this._cobrosService.obtenerCobros(cuerpo).subscribe(
      data => {
        data.current.forEach((cobro, index) => {
          this.totalMontoDolares = this.totalMontoDolares + cobro.montoDolares;
          this.totalCobros = this.totalCobros + 1;
          this.totalPiezas = this.totalPiezas + cobro.piezas;
        });
        this.coreComponent.closeModal(0);
        console.log("****Monto Dolares Azul" + this.totalMontoDolares);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }
  filtroTotalMorado() {
    this.totalCobros2 = 0;
    this.totalMontoDolares2 = 0;
    this.totalPiezas2 = 0;
    //Obtener monto en color morado
    let cuerpo2 = {
      fechaInicio: this.fechaValidaInicial1,
      fechaFin: this.fechaValidaInicial1,
      idCliente: 0,
      medioPago: "",
      fpor: "",
      estado: "",
      cpago: "",
      busquedaCR: false,
      factura: '',
      uuid: "",
      drc: 5,
      idUsuarioLogueado: 91,
      cobrador: 0,
      cuenta: "",
      banco: "",
    }
    this._cobrosService.obtenerCobros(cuerpo2).subscribe(
      data => {
        data.current.forEach((cobro, index) => {
          this.totalMontoDolares2 = this.totalMontoDolares2 + cobro.montoDolares;
          this.totalCobros2 = this.totalCobros2 + 1;
          this.totalPiezas2 = this.totalPiezas2 + cobro.piezas;
        });
        this.coreComponent.closeModal(0);
        console.log("****Monto Dolares Morado" + this.totalMontoDolares2);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }

  filtroTotalBlanco() {
    this.totalMontoDolares1 = 0;
    this.totalCobros1 = 0;
    this.totalPiezas1 = 0;
    this.coreComponent.openModal(0);
    //Obtener monto en colo Blanco
    let cuerpo1 = {
      fechaInicio: new Date(),
      fechaFin: new Date(),
      idCliente: 0,
      medioPago: "",
      fpor: "",
      estado: "",
      cpago: "",
      busquedaCR: false,
      factura: '',
      uuid: "",
      drc: 5,
      idUsuarioLogueado: 91,
      cobrador: 0,
      cuenta: "",
      banco: "",
    }
    this._cobrosService.obtenerCobros(cuerpo1).subscribe(
      data => {
        data.current.forEach((cobro, index) => {
          this.totalMontoDolares1 = this.totalMontoDolares1 + cobro.montoDolares;
          this.totalCobros1 = this.totalCobros1 + 1;
          this.totalPiezas1 = this.totalPiezas1 + cobro.piezas;
        });
        this.coreComponent.closeModal(0);
        console.log("****Monto Dolares Blanco" + this.totalMontoDolares1);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }

  eliminarObjetosDuplicados(arr, prop) {
    var nuevoArray = [];
    var lookup = {};

    for (var i in arr) {
      lookup[arr[i][prop]] = arr[i];
    }

    for (i in lookup) {
      nuevoArray.push(lookup[i]);
    }



    //console.log(nuevoArray);
    //this.Estadisticos.totalcompras= nuevoArray.length;
    return nuevoArray;
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
  radioFechaFacturacion($event) {

    if ($event == 0 && !this.fechaFacturacion) {
      this.fechaFacturacion = true;
      this.IsDate = false;
      this.IsDate = true;
      this.Llenar();
      this.lstRadiosRapida = ['Factura', 'UUID'];
      this.fechaCobros = false;
      if (this.avanzada) {
        let cuerpo = {
          fechaInicio: new Date(),
          fechaFin: new Date(),
          idCliente: 0,
          medioPago: "",
          fpor: "",
          estado: "",
          cpago: "",
          busquedaCR: false,
          factura: '',
          uuid: "",
          drc: 5,
          idUsuarioLogueado: 91,
          cobrador: 0,
          cuenta: "",
          banco: "",
        }
        console.log("Método radioFechaFacturacion");
        this.obtenerCobros(cuerpo);
      } else {
        this.filtroForm = new FormGroup({
          filtroDato: new FormControl()
        })
      }
    } else if ($event == 1 && this.fechaFacturacion) {
      this.fechaFacturacion = false;
      this.IsDate = false;
      this.IsDate = true;
      this.Llenar2();
      this.lstRadiosRapida = ['Factura', 'UUID'];
      this.filtroConsultaRapida = "Factura";
      if (!this.fechaFacturacion && !this.avanzada) {
        this.fechaCobros = true;
      }
      if (this.avanzada) {
        let parametros: Parametros = new Parametros();
        let cuerpo = {
          fechaInicio: new Date(),
          fechaFin: new Date(),
          idCliente: 0,
          medioPago: "",
          fpor: "",
          estado: "",
          cpago: "",
          busquedaCR: true,
          factura: '',
          uuid: "",
          drc: 5,
          idUsuarioLogueado: 91,
          cobrador: 0,
          cuenta: "",
          banco: "",
        }
        this.obtenerCobros(cuerpo);
      } else {
        this.filtroForm = new FormGroup({
          filtroDato: new FormControl()
        });
        let parametros: Parametros = new Parametros();
        let cuerpo = {
          fechaInicio: new Date(),
          fechaFin: new Date(),
          idCliente: 0,
          medioPago: "",
          fpor: "",
          estado: "",
          cpago: "",
          busquedaCR: false,
          factura: '',
          uuid: "",
          drc: 5,
          idUsuarioLogueado: 91,
          cobrador: 0,
          cuenta: "",
          banco: "",
        }
        this.obtenerCobros(cuerpo);
      }
    }
  }
  radioRapida($event) {
    console.log("Método radioRapida ");
    if ($event == 0) {
      this.filtroConsultaRapida = "Factura";
    } else if ($event == 1) {
      this.filtroConsultaRapida = "UUID";
    }
  }
  filtroAvanzada() {
    if (!this.avanzada) {
      this.avanzada = true;
      this.fechaCobros = false;
      this.filtroConsultaRapida = "Factura";
      this.filtroForm = new FormGroup({
        filtroDato: new FormControl()
      });
      if (this.fechaFacturacion) {
        let cuerpo = {
          fechaInicio: new Date(),
          fechaFin: new Date(),
          idCliente: 0,
          medioPago: "",
          fpor: "",
          estado: "",
          cpago: "",
          busquedaCR: false,
          factura: '',
          uuid: "",
          drc: 5,
          idUsuarioLogueado: 91,
          cobrador: 0,
          cuenta: "",
          banco: "",
        }
        this.obtenerCobros(cuerpo);

      } else {
        let cuerpo = {
          fechaInicio: new Date(),
          fechaFin: new Date(),
          idCliente: 0,
          medioPago: "",
          fpor: "",
          estado: "",
          cpago: "",
          busquedaCR: true,
          factura: '',
          uuid: "",
          drc: 5,
          idUsuarioLogueado: 91,
          cobrador: 0,
          cuenta: "",
          banco: "",
        }
        this.obtenerCobros(cuerpo);
      }
    }
  }
  filtroRapida() {
    if (this.avanzada) {
      this.avanzada = false;

      if (!this.fechaFacturacion) {
        this.fechaCobros = true;

        let cuerpo = {
          fechaInicio: new Date(),
          fechaFin: new Date(),
          idCliente: 0,
          medioPago: "",
          fpor: "",
          estado: "",
          cpago: "",
          busquedaCR: false,
          factura: '',
          uuid: "",
          drc: 5,
          idUsuarioLogueado: 91,
          cobrador: 0,
          cuenta: "",
          banco: "",
        }
        this.obtenerCobros(cuerpo);
        console.log("IF Método filtroRapida ");
      } else {
        let cuerpo = {
          fechaInicio: new Date(),
          fechaFin: new Date(),
          idCliente: 0,
          medioPago: "",
          fpor: "",
          estado: "",
          cpago: "",
          busquedaCR: true,
          factura: (this.filtroConsultaRapida == "Factura") ? this.filtroForm.get('filtroDato').value : "",
          uuid: (this.filtroConsultaRapida == "UUID") ? this.filtroForm.get('filtroDato').value : "",
          drc: 5,
          idUsuarioLogueado: 91,
          cobrador: 0,
          cuenta: "",
          banco: "",
        }
        this.obtenerCobros(cuerpo);
        console.log("ELSE Método filtroRapida ");
      }
    }
  }
  filtroRapido() {
    console.log(this.filtroForm.get('filtroDato').value);
    if (this.fechaFacturacion) {
      console.log(("If filtroRapido"));
      if (this.filtroConsultaRapida == "Factura") {
        let cuerpo = {
          fechaInicio: new Date(),
          fechaFin: new Date(),
          idCliente: 0,
          medioPago: "",
          fpor: "",
          estado: "",
          cpago: "",
          busquedaCR: false,
          factura: (this.filtroConsultaRapida == "Factura") ? this.filtroForm.get('filtroDato').value : "",
          uuid: (this.filtroConsultaRapida == "UUID") ? this.filtroForm.get('filtroDato').value : "",
          drc: 5,
          idUsuarioLogueado: 91,
          cobrador: 0,
          cuenta: "",
          banco: "",
        }
        this.obtenerCobros(cuerpo);
      } else {
        let cuerpo = {
          fechaInicio: new Date(),
          fechaFin: new Date(),
          idCliente: 0,
          medioPago: "",
          fpor: "",
          estado: "",
          cpago: "",
          busquedaCR: true,
          factura: (this.filtroConsultaRapida == "Factura") ? this.filtroForm.get('filtroDato').value : "",
          uuid: (this.filtroConsultaRapida == "UUID") ? this.filtroForm.get('filtroDato').value : "",
          drc: 5,
          idUsuarioLogueado: 91,
          cobrador: 0,
          cuenta: "",
          banco: "",
        }
        this.obtenerCobros(cuerpo);
      }
    } else {
      if (this.filtroConsultaRapida == "Factura") {
        let cuerpo = {
          fechaInicio: new Date(),
          fechaFin: new Date(),
          idCliente: 0,
          medioPago: "",
          fpor: "",
          estado: "",
          cpago: "",
          busquedaCR: false,
          factura: (this.filtroConsultaRapida == "Factura") ? this.filtroForm.get('filtroDato').value : "",
          uuid: (this.filtroConsultaRapida == "UUID") ? this.filtroForm.get('filtroDato').value : "",
          drc: 5,
          idUsuarioLogueado: 91,
          cobrador: 0,
          cuenta: "",
          banco: "",
        }
        console.log(("Else filtroRapido"));
        this.obtenerCobros(cuerpo);
      } else {
        let cuerpo = {
          fechaInicio: new Date(),
          fechaFin: new Date(),
          idCliente: 0,
          medioPago: "",
          fpor: "",
          estado: "",
          cpago: "",
          busquedaCR: true,
          factura: (this.filtroConsultaRapida == "Factura") ? this.filtroForm.get('filtroDato').value : "",
          uuid: (this.filtroConsultaRapida == "UUID") ? this.filtroForm.get('filtroDato').value : "",
          drc: 5,
          idUsuarioLogueado: 91,
          cobrador: 0,
          cuenta: "",
          banco: "",
        }
        console.log(("Else filtroRapido"));
        this.obtenerCobros(cuerpo);
      }
    }
  }
  emitItem($event) {
    console.log($event);
  }
  dropList(index, $event) {
  }
  mostrarDatos($event) {

    this.nivel = [];
    this.cpago = [];
    this.estado = [];
    this.medio = [];
    if (this.fechaFacturacion) {
      console.log("Entro con fecha facturación " + this.fechaFacturacion)
      let parametros: Parametros = new Parametros();

      if ($event.Datos[0].nombre === "--TODOS--") {
        $event.Datos[0].key = 0;
      }
      if ($event.Datos[2].nombre === "--TODOS--") {
        $event.Datos[2].nombre = "";
      }
      if ($event.Datos[4].nombre === "--TODOS--") {
        $event.Datos[4].nombre = "";
      }
      if ($event.Datos[3].nombre === "--TODOS--") {
        $event.Datos[3].nombre = "";
      }
      if ($event.Datos[1].nombre === "--TODOS--") {
        $event.Datos[1].key = 0;
      }
      let cuerpo = {
        fechaInicio: $event.Fechas.fechaInicial,
        fechaFin: $event.Fechas.fechaFinal,
        idCliente: $event.Datos[0].key,
        medioPago: "",
        cobrador: $event.Datos[1].key,
        fpor: $event.Datos[2].nombre,
        cpago: $event.Datos[3].nombre,
        estado: $event.Datos[4].nombre,
        busquedaCR: false,
        factura: '',
        uuid: "",
        drc: 5,
        idUsuarioLogueado: 91,
      }
      parametros.drc = $event.Datos[4].nombre;

      this.obtenerCobros(cuerpo);
      if ($event.Datos[0].key === 0) {
        $event.Datos[0].nombre = "--TODOS--";
      }
      if ($event.Datos[2].nombre === "--TODOS--") {
        $event.Datos[2].nombre = "";
      }
      if ($event.Datos[5].nombre === "") {
        $event.Datos[5].nombre = "--TODOS--";
      }
      if ($event.Datos[3].nombre === "") {
        $event.Datos[3].nombre = "--TODOS--";
      }
      if ($event.Datos[1].key === 0) {
        $event.Datos[1].nombre = "--TODOS--";
      }
      console.log("Método mostrarDatos");
    } else {
      console.log("NO Entro con fecha facturación" + this.fechaFacturacion)
      if ($event.Datos[0].nombre === "--TODOS--") {
        $event.Datos[0].key = 0;
      }
      if ($event.Datos[2].nombre === "--TODOS--") {
        $event.Datos[2].nombre = "";
      }
      if ($event.Datos[5].nombre === "--TODOS--") {
        $event.Datos[5].nombre = "";
      }
      if ($event.Datos[3].nombre === "--TODOS--") {
        $event.Datos[3].nombre = "";
      }
      if ($event.Datos[1].nombre === "--TODOS--") {
        $event.Datos[1].key = 0;
      }
      let parametros: Parametros = new Parametros();
      let cuerpo = {
        fechaInicio: $event.Fechas.fechaInicial,
        fechaFin: $event.Fechas.fechaFinal,
        idCliente: $event.Datos[0].key,
        medioPago: "",
        cobrador: $event.Datos[1].key,
        fpor: $event.Datos[2].nombre,
        cpago: $event.Datos[3].nombre,
        estado: $event.Datos[5].nombre,
        busquedaCR: true,
        factura: '',
        uuid: "",
        drc: 5,
        idUsuarioLogueado: 91,
      }
      console.log(cuerpo);

      this.obtenerCobros(cuerpo);

      if ($event.Datos[0].key === 0) {
        $event.Datos[0].nombre = "--TODOS--";
      }
      if ($event.Datos[2].nombre === "--TODOS--") {
        $event.Datos[2].nombre = "";
      }
      if ($event.Datos[5].nombre === "") {
        $event.Datos[5].nombre = "--TODOS--";
      }
      if ($event.Datos[3].nombre === "") {
        $event.Datos[3].nombre = "--TODOS--";
      }
      if ($event.Datos[1].key === 0) {
        $event.Datos[1].nombre = "--TODOS--";
      }
      console.log("Método mostrarDatos");
    }
    console.log($event);
  }
  obtenerCobros(parametros: any) {
    this.coreComponent.openModal(0);
    this._cobrosService.obtenerCobros(parametros).subscribe(
      data => {

        this.lstCobros = data.current;
        let listaClientes = this.eliminarObjetosDuplicados(this.lstCobros, 'nombreCliente', );
        let listaNiveles = this.eliminarObjetosDuplicados(this.lstCobros, 'nivelIngreso');
        this.niPorCobrar(listaNiveles, listaClientes);
        let listaCpago = this.eliminarObjetosDuplicados(this.lstCobros, 'cpago');
        this.cpagoPorcobrar(listaCpago, listaClientes);
        let listaAbierto = this.eliminarObjetosDuplicados(this.lstCobros, 'estado');
        this.abiertoVScerrado(listaAbierto, listaClientes);
        let listamedio = this.eliminarObjetosDuplicados(this.lstCobros, 'medioPago');
        this.medioPagoprogramado(listamedio, listaClientes);
        let listaprogramar = this.eliminarObjetosDuplicados(this.lstCobros, 'fechaEsperadaPago');
        this.programadoVSporprogramar(listaprogramar, listaClientes);
        let listaDias = this.eliminarObjetosDuplicados(this.lstCobros, 'diasRestantesCobro');
        this.diasRestantesCredito(listaDias, listaClientes);
        let listatiempo = this.eliminarObjetosDuplicados(this.lstCobros, 'fechaEsperadaPago');
        this.enTiempo(listamedio);
        console.log(this.lstCobros);
        this.coreComponent.closeModal(0);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }
  //Función para la grafica "NI POR COBRAR"
  niPorCobrar(listaNiveles, listaClientes) {
    this.datosGraficas.niPorCobrar.AAplus.clientes = listaClientes.filter(nivel => nivel.nivelIngreso === 'AAplus').length;
    this.datosGraficas.niPorCobrar.AM.clientes = listaClientes.filter(nivel => nivel.nivelIngreso === 'AM').length;
    this.datosGraficas.niPorCobrar.AA.clientes = listaClientes.filter(nivel => nivel.nivelIngreso === 'AA').length;
    this.datosGraficas.niPorCobrar.AB.clientes = listaClientes.filter(nivel => nivel.nivelIngreso === 'AB').length;
    this.datosGraficas.niPorCobrar.MA.clientes = listaClientes.filter(nivel => nivel.nivelIngreso === 'MA').length;
    this.datosGraficas.niPorCobrar.MM.clientes = listaClientes.filter(nivel => nivel.nivelIngreso === 'MM').length;
    this.datosGraficas.niPorCobrar.MB.clientes = listaClientes.filter(nivel => nivel.nivelIngreso === 'MB').length;
    let porcentaje = 0;
    listaNiveles.forEach((nivel, index1) => {
      let aux = 0;
      let total = 0;
      this.lstCobros.forEach((cobro, index) => {

        if (nivel.nivelIngreso === cobro.nivelIngreso) {
          aux = aux + cobro.montoDolares;
          if (nivel.nivelIngreso === 'AAplus') {
            this.datosGraficas.niPorCobrar.AAplus.monto = this.datosGraficas.niPorCobrar.AAplus.monto + cobro.montoDolares;
            this.datosGraficas.niPorCobrar.AAplus.cobros++;
            this.datosGraficas.niPorCobrar.AAplus.partidas = this.datosGraficas.niPorCobrar.AAplus.partidas + cobro.partidas;
            this.datosGraficas.niPorCobrar.AAplus.piezas = this.datosGraficas.niPorCobrar.AAplus.piezas + cobro.piezas;
          }
          if (nivel.nivelIngreso === 'AM') {
            this.datosGraficas.niPorCobrar.AM.monto = this.datosGraficas.niPorCobrar.AM.monto + cobro.montoDolares;
            this.datosGraficas.niPorCobrar.AM.cobros++;
            this.datosGraficas.niPorCobrar.AM.partidas = this.datosGraficas.niPorCobrar.AM.partidas + cobro.partidas;
            this.datosGraficas.niPorCobrar.AM.piezas = this.datosGraficas.niPorCobrar.AM.piezas + cobro.piezas;
          }
          if (nivel.nivelIngreso === 'AA') {
            this.datosGraficas.niPorCobrar.AA.monto = this.datosGraficas.niPorCobrar.AA.monto + cobro.montoDolares;
            this.datosGraficas.niPorCobrar.AA.cobros++;
            this.datosGraficas.niPorCobrar.AA.partidas = this.datosGraficas.niPorCobrar.AA.partidas + cobro.partidas;
            this.datosGraficas.niPorCobrar.AA.piezas = this.datosGraficas.niPorCobrar.AA.piezas + cobro.piezas;
          }
          if (nivel.nivelIngreso === 'AB') {
            this.datosGraficas.niPorCobrar.AB.monto = this.datosGraficas.niPorCobrar.AB.monto + cobro.montoDolares;
            this.datosGraficas.niPorCobrar.AB.cobros++;
            this.datosGraficas.niPorCobrar.AB.partidas = this.datosGraficas.niPorCobrar.AB.partidas + cobro.partidas;
            this.datosGraficas.niPorCobrar.AB.piezas = this.datosGraficas.niPorCobrar.AB.piezas + cobro.piezas;
          }
          if (nivel.nivelIngreso === 'MA') {
            this.datosGraficas.niPorCobrar.MA.monto = this.datosGraficas.niPorCobrar.MA.monto + cobro.montoDolares;
            this.datosGraficas.niPorCobrar.MA.cobros++;
            this.datosGraficas.niPorCobrar.MA.partidas = this.datosGraficas.niPorCobrar.MA.partidas + cobro.partidas;
            this.datosGraficas.niPorCobrar.MA.piezas = this.datosGraficas.niPorCobrar.MA.piezas + cobro.piezas;
          }
          if (nivel.nivelIngreso === 'MM') {
            this.datosGraficas.niPorCobrar.MM.monto = this.datosGraficas.niPorCobrar.MM.monto + cobro.montoDolares;
            this.datosGraficas.niPorCobrar.MM.cobros++;
            this.datosGraficas.niPorCobrar.MM.partidas = this.datosGraficas.niPorCobrar.MM.partidas + cobro.partidas;
            this.datosGraficas.niPorCobrar.MM.piezas = this.datosGraficas.niPorCobrar.MM.piezas + cobro.piezas;
          }
          if (nivel.nivelIngreso === 'MB') {
            this.datosGraficas.niPorCobrar.MB.monto = this.datosGraficas.niPorCobrar.MB.monto + cobro.montoDolares;
            this.datosGraficas.niPorCobrar.MB.cobros++;
            this.datosGraficas.niPorCobrar.MB.partidas = this.datosGraficas.niPorCobrar.MB.partidas + cobro.partidas;
            this.datosGraficas.niPorCobrar.MB.piezas = this.datosGraficas.niPorCobrar.MB.piezas + cobro.piezas;
          }
        }
        total = total + cobro.montoDolares;
      });
      porcentaje = (aux / total) * 100;
      let obj = {
        label: nivel.nivelIngreso.toUpperCase(),
        value: porcentaje.toFixed(2),
      }
      //console.log(total);
      this.nivel.push(obj);
    });
    /* console.log(this.datosGraficas.niPorCobrar.AAplus);
     console.log(this.datosGraficas.niPorCobrar.AM);
     console.log(this.datosGraficas.niPorCobrar.AA);
     console.log(this.datosGraficas.niPorCobrar.AB);
     console.log(this.datosGraficas.niPorCobrar.MA);
     console.log(this.datosGraficas.niPorCobrar.MM);
     console.log(this.datosGraficas.niPorCobrar.MB);*/
  }
  //Función para la gráfica "C. PAGO POR COBRAR"
  cpagoPorcobrar(listaCpago, listaClientes) {
    this.datosGraficas.cPagoPorcobrar.dias60.clientes = listaClientes.filter(pago => pago.cpago === '60 DIAS').length;
    this.datosGraficas.cPagoPorcobrar.contraEntrega.clientes = listaClientes.filter(pago => pago.cpago === 'CONTRA ENTREGA').length;
    this.datosGraficas.cPagoPorcobrar.dias30.clientes = listaClientes.filter(pago => pago.cpago === '30 DIAS').length;
    this.datosGraficas.cPagoPorcobrar.dias45.clientes = listaClientes.filter(pago => pago.cpago === '45 DIAS').length;
    this.datosGraficas.cPagoPorcobrar.dias45.clientes = listaClientes.filter(pago => pago.cpago === '90 DIAS').length;
    this.datosGraficas.cPagoPorcobrar.dias15.clientes = listaClientes.filter(pago => pago.cpago === '15 DIAS').length;
    this.datosGraficas.cPagoPorcobrar.prepago.clientes = listaClientes.filter(pago => pago.cpago === 'PREPAGO 100%').length;
    let porcentaje = 0;
    listaCpago.forEach((pago, index) => {
      let aux = 0;
      let total = 0;
      this.lstCobros.forEach((cobro, index) => {

        if (pago.cpago === cobro.cpago) {
          aux = aux + 1;
          if (pago.cpago === '60 DIAS') {
            this.datosGraficas.cPagoPorcobrar.dias60.monto = this.datosGraficas.cPagoPorcobrar.dias60.monto + cobro.montoDolares;
            this.datosGraficas.cPagoPorcobrar.dias60.cobros++;
            this.datosGraficas.cPagoPorcobrar.dias60.partidas = this.datosGraficas.cPagoPorcobrar.dias60.partidas + cobro.partidas;
            this.datosGraficas.cPagoPorcobrar.dias60.piezas = this.datosGraficas.cPagoPorcobrar.dias60.piezas + cobro.partidas;
          }
          if (pago.cpago === 'CONTRA ENTREGA') {
            this.datosGraficas.cPagoPorcobrar.contraEntrega.monto = this.datosGraficas.cPagoPorcobrar.contraEntrega.monto + cobro.montoDolares;
            this.datosGraficas.cPagoPorcobrar.contraEntrega.cobros++;
            this.datosGraficas.cPagoPorcobrar.contraEntrega.partidas = this.datosGraficas.cPagoPorcobrar.contraEntrega.partidas + cobro.partidas;
            this.datosGraficas.cPagoPorcobrar.contraEntrega.piezas = this.datosGraficas.cPagoPorcobrar.contraEntrega.piezas + cobro.partidas;
          }
          if (pago.cpago === '30 DIAS') {
            this.datosGraficas.cPagoPorcobrar.dias30.monto = this.datosGraficas.cPagoPorcobrar.dias30.monto + cobro.montoDolares;
            this.datosGraficas.cPagoPorcobrar.dias30.cobros++;
            this.datosGraficas.cPagoPorcobrar.dias30.partidas = this.datosGraficas.cPagoPorcobrar.dias30.partidas + cobro.partidas;
            this.datosGraficas.cPagoPorcobrar.dias30.piezas = this.datosGraficas.cPagoPorcobrar.dias30.piezas + cobro.partidas;
          }
          if (pago.cpago === '45 DIAS') {
            this.datosGraficas.cPagoPorcobrar.dias45.monto = this.datosGraficas.cPagoPorcobrar.dias45.monto + cobro.montoDolares;
            this.datosGraficas.cPagoPorcobrar.dias45.cobros++;
            this.datosGraficas.cPagoPorcobrar.dias45.partidas = this.datosGraficas.cPagoPorcobrar.dias45.partidas + cobro.partidas;
            this.datosGraficas.cPagoPorcobrar.dias45.piezas = this.datosGraficas.cPagoPorcobrar.dias45.piezas + cobro.partidas;
          }
          if (pago.cpago === '90 DIAS') {
            this.datosGraficas.cPagoPorcobrar.dias90.monto = this.datosGraficas.cPagoPorcobrar.dias90.monto + cobro.montoDolares;
            this.datosGraficas.cPagoPorcobrar.dias90.cobros++;
            this.datosGraficas.cPagoPorcobrar.dias90.partidas = this.datosGraficas.cPagoPorcobrar.dias90.partidas + cobro.partidas;
            this.datosGraficas.cPagoPorcobrar.dias90.piezas = this.datosGraficas.cPagoPorcobrar.dias90.piezas + cobro.partidas;
          }
          if (pago.cpago === '15 DIAS') {
            this.datosGraficas.cPagoPorcobrar.dias15.monto = this.datosGraficas.cPagoPorcobrar.dias15.monto + cobro.montoDolares;
            this.datosGraficas.cPagoPorcobrar.dias15.cobros++;
            this.datosGraficas.cPagoPorcobrar.dias15.partidas = this.datosGraficas.cPagoPorcobrar.dias15.partidas + cobro.partidas;
            this.datosGraficas.cPagoPorcobrar.dias15.piezas = this.datosGraficas.cPagoPorcobrar.dias15.piezas + cobro.partidas;
          }
          if (pago.cpago === 'PREPAGO 100%') {
            this.datosGraficas.cPagoPorcobrar.prepago.monto = this.datosGraficas.cPagoPorcobrar.prepago.monto + cobro.montoDolares;
            this.datosGraficas.cPagoPorcobrar.prepago.cobros++;
            this.datosGraficas.cPagoPorcobrar.prepago.partidas = this.datosGraficas.cPagoPorcobrar.prepago.partidas + cobro.partidas;
            this.datosGraficas.cPagoPorcobrar.prepago.piezas = this.datosGraficas.cPagoPorcobrar.prepago.piezas + cobro.partidas;
          }
        }
        total = total + 1;
      });
      porcentaje = (aux / total) * 100;
      let obj = {
        label: pago.cpago,
        value: porcentaje.toFixed(2),
      }
      this.cpago.push(obj);

    });
    /* console.log(this.datosGraficas.cPagoPorcobrar.contraEntrega);
     console.log(this.datosGraficas.cPagoPorcobrar.dias30);
     console.log(this.datosGraficas.cPagoPorcobrar.dias45);
     console.log(this.datosGraficas.cPagoPorcobrar.dias15);
     console.log(this.datosGraficas.cPagoPorcobrar.dias60);
     console.log(this.datosGraficas.cPagoPorcobrar.dias90);
     console.log(this.datosGraficas.cPagoPorcobrar.prepago);*/
  }
  //Función para la gráfica "Abierto vs Cerrado"
  abiertoVScerrado(listaAbierto, listaClientes) {
    this.datosGraficas.abiertoCerrado.abierto.clientes = listaClientes.filter(estado => estado.estado === 'Por Cobrar').length;
    this.datosGraficas.abiertoCerrado.cerrado.clientes = listaClientes.filter(estado => estado.estado === 'Cobrada').length;
    let auxEstado;
    let porcentaje = 0;

    listaAbierto.forEach((estado, index) => {
      let aux = 0;
      let total = 0;
      this.lstCobros.forEach((cobro, index) => {

        if (estado.estado === cobro.estado) {
          aux = aux + 1;
          if (estado.estado === 'Por Cobrar') {
            this.datosGraficas.abiertoCerrado.abierto.monto = this.datosGraficas.abiertoCerrado.abierto.monto + cobro.montoDolares;
            this.datosGraficas.abiertoCerrado.abierto.cobros++;
            this.datosGraficas.abiertoCerrado.abierto.partidas = this.datosGraficas.abiertoCerrado.abierto.partidas + cobro.partidas;
            this.datosGraficas.abiertoCerrado.abierto.piezas = this.datosGraficas.abiertoCerrado.abierto.piezas + cobro.piezas;
          } else {
            this.datosGraficas.abiertoCerrado.cerrado.monto = this.datosGraficas.abiertoCerrado.cerrado.monto + cobro.montoDolares;
            this.datosGraficas.abiertoCerrado.cerrado.cobros++;
            this.datosGraficas.abiertoCerrado.cerrado.partidas = this.datosGraficas.abiertoCerrado.cerrado.partidas + cobro.partidas;
            this.datosGraficas.abiertoCerrado.cerrado.piezas = this.datosGraficas.abiertoCerrado.cerrado.piezas + cobro.piezas;
          }
        }

        total = total + 1;

      });
      if (estado.estado === "Cobrada") {
        auxEstado = "CERRADO";
      } else {
        auxEstado = "ABIERTO";
      }
      porcentaje = (aux / total) * 100;

      let obj = {
        label: auxEstado,
        value: porcentaje.toFixed(2),
      }
      this.estado.push(obj)
    });
    /* console.log(this.datosGraficas.abiertoCerrado.abierto);
     console.log(this.datosGraficas.abiertoCerrado.cerrado);*/


  }
  //Función para gráfica "PROGRAMADO VS POR PROGRAMAR"
  programadoVSporprogramar(listaprogramar, listaClientes) {
    this.datosGraficas.programadoPorProgramar.programado.clientes = listaClientes.filter(programado => programado.fechaEsperadaPago != null).length;
    this.datosGraficas.programadoPorProgramar.porProgramar.clientes = listaClientes.filter(programado => programado.fechaEsperadaPago === null).length;
    let auxEtiqueta;
    let porcentaje = 0;
    let porcentajeTotal = 0;
    let total = 0;
    let aux = 0;
    /* this.lstCobros.forEach((cobro, index) => {
       if (cobro.fechaEsperadaPago != null) {
         this.conFecha.push(this.lstCobros[index]);
         this.datosGraficas.programadoPorProgramar.programado.monto = this.datosGraficas.programadoPorProgramar.programado.monto + cobro.montoDolares;
         this.datosGraficas.programadoPorProgramar.programado.cobros++;
         this.datosGraficas.programadoPorProgramar.programado.partidas = this.datosGraficas.programadoPorProgramar.programado.partidas + cobro.partidas;
         this.datosGraficas.programadoPorProgramar.programado.piezas = this.datosGraficas.programadoPorProgramar.programado.piezas + cobro.piezas;
       } else {
         this.sinFecha.push(this.lstCobros[index]);
         this.datosGraficas.programadoPorProgramar.porProgramar.monto = this.datosGraficas.programadoPorProgramar.porProgramar.monto + cobro.montoDolares;
         this.datosGraficas.programadoPorProgramar.porProgramar.cobros++;
         this.datosGraficas.programadoPorProgramar.porProgramar.partidas = this.datosGraficas.programadoPorProgramar.porProgramar.partidas + cobro.partidas;
         this.datosGraficas.programadoPorProgramar.porProgramar.piezas = this.datosGraficas.programadoPorProgramar.porProgramar.piezas + cobro.piezas;
       }
       total = total + 1;
     });*/

    this.sinFecha.forEach(() => {
      aux = aux + 1;

    });
    porcentaje = (aux / total) * 100;
    let obj1 = {
      label: 'POR PROGRAMAR',
      value: porcentaje.toFixed(2),
    }
    this.programado.push(obj1);
    aux = 0; porcentaje = 0;
    this.conFecha.forEach(() => {
      aux = aux + 1;
    });
    porcentaje = (aux / total) * 100;
    let obj = {
      label: 'PROGRAMADO',
      value: porcentaje.toFixed(2),
    }
    this.programado.push(obj);
    /*console.log(this.datosGraficas.programadoPorProgramar.porProgramar);
    console.log(this.datosGraficas.programadoPorProgramar.programado);*/
  }
  //Función para gráfica "MEDIO DE PAGO PROGRAMADO"
  medioPagoprogramado(listamedio, listaClientes) {
    this.datosGraficas.medioPagoProgramado.otros.clientes = listaClientes.filter(medio => medio.fechaEsperadaPago === 'Otros').length;
    this.datosGraficas.medioPagoProgramado.transferencia.clientes = listaClientes.filter(medio => medio.fechaEsperadaPago === 'Transferencia').length;
    this.datosGraficas.medioPagoProgramado.cheques.clientes = listaClientes.filter(medio => medio.fechaEsperadaPago === 'Cheque').length;
    let porcentaje = 0;
    listamedio.forEach((medio, index1) => {
      let aux = 0;
      let total = 0;
      this.lstCobros.forEach((cobro, index) => {

        if (medio.medioPago === cobro.medioPago) {
          aux = aux + 1;
          if (medio.medioPago === 'Otros') {
            this.datosGraficas.medioPagoProgramado.otros.monto = this.datosGraficas.medioPagoProgramado.otros.monto + cobro.montoDolares;
            this.datosGraficas.medioPagoProgramado.otros.cobros++;
            this.datosGraficas.medioPagoProgramado.otros.partidas = this.datosGraficas.medioPagoProgramado.otros.partidas + cobro.partidas;
            this.datosGraficas.medioPagoProgramado.otros.piezas = this.datosGraficas.medioPagoProgramado.otros.piezas + cobro.piezas;
          }
          if (medio.medioPago === 'Transferencia') {
            this.datosGraficas.medioPagoProgramado.transferencia.monto = this.datosGraficas.medioPagoProgramado.transferencia.monto + cobro.montoDolares;
            this.datosGraficas.medioPagoProgramado.transferencia.cobros++;
            this.datosGraficas.medioPagoProgramado.transferencia.partidas = this.datosGraficas.medioPagoProgramado.transferencia.partidas + cobro.partidas;
            this.datosGraficas.medioPagoProgramado.transferencia.piezas = this.datosGraficas.medioPagoProgramado.transferencia.piezas + cobro.piezas;
          }
          if (medio.medioPago === 'Cheque') {
            this.datosGraficas.medioPagoProgramado.cheques.monto = this.datosGraficas.medioPagoProgramado.cheques.monto + cobro.montoDolares;
            this.datosGraficas.medioPagoProgramado.cheques.cobros++;
            this.datosGraficas.medioPagoProgramado.cheques.partidas = this.datosGraficas.medioPagoProgramado.cheques.partidas + cobro.partidas;
            this.datosGraficas.medioPagoProgramado.cheques.piezas = this.datosGraficas.medioPagoProgramado.cheques.piezas + cobro.piezas;
          }
        }
        total = total + 1;
      });
      porcentaje = (aux / total) * 100;
      let obj = {
        label: medio.medioPago.toUpperCase(),
        value: porcentaje.toFixed(2),

      }

      this.medio.push(obj)
    });
    /* console.log(this.datosGraficas.medioPagoProgramado.cheques);
     console.log(this.datosGraficas.medioPagoProgramado.otros);
     console.log(this.datosGraficas.medioPagoProgramado.transferencia);*/



  }
  //Función para gráfica "DÍAS RESTANTES DE CRÉDITO"
  diasRestantesCredito(listaDias, listaClientes) {
    this.datosGraficas.diasRestanCredito.cobrado.clientes = listaClientes.filter(medio => medio.diasRestantesCobro === 0).length;
    this.datosGraficas.diasRestanCredito.cobrado.clientes = listaClientes.filter(medio => medio.diasRestantesCobro != 0).length;
    let auxEtiqueta;
    let porcentaje = 0;
    let aux = 0;
    let total = 0;
    //listaDias.forEach((dias, index) => {

    /* this.lstCobros.forEach((cobro, index) => {
       if (cobro.diasRestantesCobro === 0) {
         aux = aux + 1;
         this.datosGraficas.diasRestanCredito.cobrado.monto = this.datosGraficas.diasRestanCredito.cobrado.monto + cobro.montoDolares;
         this.datosGraficas.diasRestanCredito.cobrado.cobros++;
         this.datosGraficas.diasRestanCredito.cobrado.partidas = this.datosGraficas.diasRestanCredito.cobrado.partidas + cobro.partidas;
         this.datosGraficas.diasRestanCredito.cobrado.piezas = this.datosGraficas.diasRestanCredito.cobrado.piezas + cobro.piezas;
       }
       total = total + 1;
 
     });*/
    porcentaje = (aux / total) * 100;
    let obj1 = {
      label: 'COBRADO',
      value: porcentaje.toFixed(2),

    }
    this.dias.push(obj1)
    aux = 0; porcentaje = 0; total = 0;
    /*  this.lstCobros.forEach((cobro, index) => {
        if (cobro.diasRestantesCobro != 0) {
          aux = aux + 1;
          this.datosGraficas.diasRestanCredito.pendiente.monto = this.datosGraficas.diasRestanCredito.pendiente.monto + cobro.montoDolares;
          this.datosGraficas.diasRestanCredito.pendiente.cobros++;
          this.datosGraficas.diasRestanCredito.pendiente.partidas = this.datosGraficas.diasRestanCredito.pendiente.partidas + cobro.partidas;
          this.datosGraficas.diasRestanCredito.pendiente.piezas = this.datosGraficas.diasRestanCredito.pendiente.piezas + cobro.piezas;
        }
        total = total + 1;
  
      });*/
    porcentaje = (aux / total) * 100;
    let obj = {
      label: 'PENDIENTE',
      value: porcentaje.toFixed(2),

    }

    this.dias.push(obj)

    //});
    console.log(this.datosGraficas.diasRestanCredito.cobrado);
    console.log(this.datosGraficas.diasRestanCredito.pendiente);


  }
  //Función para gráfica "ET"
  enTiempo(listatiempo) {
    let auxEtiqueta;
    let porcentaje = 0;
    listatiempo.forEach((tiempo, index) => {
      let aux = 0;
      let total = 0;
      this.lstCobros.forEach((cobro, index) => {
        if (tiempo.fechaEsperadaPago === null) {
          aux = aux + 1;
          auxEtiqueta = "ET";
        }
        total = total + 1;
      });
      porcentaje = (aux / total) * 100;
      let obj = {
        label: auxEtiqueta,
        value: porcentaje.toFixed(2),
      }
      this.tiempo.push(obj);

    });
  }
  obtenerClientesPorIdUsuarioRol(parametros: Parametros) {
    this.coreComponent.openModal(0);
    this._cobrosService.obtenerClientesPorIdUsuarioRol(parametros).subscribe(
      data => {
        this.ltsClientesPorId = data.current;
        this.coreComponent.closeModal(0);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }
  obtenerEmpleadosPorTipo(parametros: Parametros) {
    this.coreComponent.openModal(0);
    this._cobrosService.obtenerEmpleadosPorTipo(parametros).subscribe(
      data => {
        this.ltsEmpleadosPorTipo = data.current;
        this.coreComponent.closeModal(0);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }
  obtenerBancosClientes(parametros: Parametros) {
    this.coreComponent.openModal(0);
    this._cobrosService.obtenerBancosClientes(parametros).subscribe(
      data => {

        this.ltsBancosCliente = data.current;
        this.coreComponent.openModal(0);
      },
      error => {
        this.coreComponent.openModal(0);
      }

    );
  }
  obtenerCuentasBancoClientes(parametros: Parametros) {
    this.coreComponent.openModal(0);
    this._cobrosService.obtenerCuentasBancoClientes(parametros).subscribe(
      data => {
        this.ltsCuentasBanco = data.current;
        this.coreComponent.openModal(0);
      },
      error => {
        this.coreComponent.openModal(0);
      }
    );
  }
  regresarConsulta() {
    this.detalle = false;
  }
  verDetalle(item: any) {
    console.log(item);
    this.cobroDetalle = item;
    this.detalle = true;
    let lstAux: any[] = [];
    lstAux.push(item);
    if (item.estado == "Cobrada") {
      if (item.cpago.indexOf("DIAS") < 0 || this._utilFechas.regresaDiferenciaEntreFechasEnDias(new Date(item.fechaPago + " 00:00:00"), new Date(item.fep + " 00:00:00")) >= 0) {
        lstAux[0]["moroso"] = "No";
      } else {
        lstAux[0]["moroso"] = "Si";
      }
    }
    console.log("obtenerLineaTiempoResumen");
    this.obtenerLineaTiempoResumen(item.factura, item.fpor, item.sc);
    this.lstLineaTiempoActive = new Array(this.lstLineaTiempo.length).fill("")
    this.lstLineaTiempoActive[0] = "divActive";

    this.totalDetalle = 0;
    this.totalDetalle += item.montoEsperadoCobro;
    for (let cobro of this.lstCobros) {
      if (cobro.factura != item.factura && cobro.nombreCliente == item.nombreCliente) {
        lstAux.push(cobro);
        this.totalDetalle += cobro.montoEsperadoCobro;
      }
    }
    this.lstCobrosDetalle = [];
    this.lstCobrosDetalle = this.lstCobrosDetalle.concat(lstAux);
    this.lstCobrosDetalleActive = new Array(this.lstCobrosDetalle.length).fill("")
    this.lstCobrosDetalleActive[0] = "divActual";
  }
  resumenCobro(i: number) {
    this.lstCobrosDetalleActive = new Array(this.lstCobrosDetalle.length).fill("")
    this.lstCobrosDetalleActive[i] = "divActive";
    this.obtenerLineaTiempoResumen(this.lstCobrosDetalle[i].factura, this.lstCobrosDetalle[i].fpor, this.lstCobrosDetalle[i].sc);
  }
  obtenerLineaTiempoResumen(facturaS, fpor, sc) {
    this.facturaS = facturaS;
    this.fpor = fpor;
    this.sc = 0;
    console.log("Recibe" + facturaS, fpor);
    let parametros: Parametros = new Parametros();
    let cuerpo = {
      factura: facturaS,
      cpedido: fpor
    }
    parametros.facturaS = facturaS;
    parametros.cpedido = fpor;
    console.log("Parametros enviados: ");
    console.log(parametros);
    this.coreComponent.openModal(0);
    this._cobrosService.obtenerLineaTiempoResumen(cuerpo).subscribe(
      data => {
        console.log("DATA");
        console.log(data);

        this.lstLineaTiempo = [];
        if (data.current != undefined && data.current.length > 0) {

          let temp: any[] = [];
          let _facc: any[] = [];
          for (let i: number = 0; i < data.current.length; i++) {
            temp.push(data.current[i]);
          }
          this.lstLineaTiempo = temp;
          console.log("obtenerResumen");
          console.log(temp);
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
  obtenerInspectorEntrega(facturaS, cpedido) {
    console.log("Método obtenerInspectorEntrega ");

    let cuerpo = {
      factura: facturaS,
      cpedido: cpedido
    }
    this.coreComponent.openModal(0);
    this._cobrosService.obtenerInspectorEntrega(cuerpo).subscribe(
      data => {
        if (data.current != undefined && data.current.length > 0) {
          let temp: any[] = [];
          let lista: any[] = [];
          let lista2: any[] = [];
          for (let i: number = 0; i < data.current.length; i++) {
            if (data.current[i] != undefined) {
              temp.push(data.current[i]);
              lista.push(data.current[i].etapa);
              if (data.current[i].referencia != null && data.current[i].referencia.indexOf(",") != 0 && data.current[i].etapa==='SURTIR RUTA' && data.current[i].referencia != '') {
                //    lista2.push(data.current[i].referencia.replace(",",""));
                temp[i].referencia = data.current[i].referencia.replace(",", "");
              }
            }
          }
          this.lstEtapas = temp;
          this.estapaItemLineaTiempo = lista;
          this.ListaSC = lista2;
          console.log("Etapas");
          console.log(this.lstEtapas);
          console.log("Lista Etapas");
          console.log(this.estapaItemLineaTiempo);
          console.log("Sin comas");
          console.log(this.ListaSC);

        }
        this.coreComponent.closeModal(0);

      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }
  obtenerInspectorCobro(facturaS, cpedido, sc) {
    console.log("SIN CRÉDITO------" + sc);

    let cuerpo = {
      factura: facturaS,
      cpedido: cpedido,
      sc: sc
    }
    this.lstEtapas = null;
    this.estapaItemLineaTiempo = null;
    this.coreComponent.openModal(0);
    this._cobrosService.obtenerInspectorCobro(cuerpo).subscribe(
      data => {
        if (data.current != undefined && data.current.length > 0) {

          let temp: any[] = [];
          let lista: any[] = [];
          for (let i: number = 0; i < data.current.length; i++) {
            temp.push(data.current[i]);
            lista.push(data.current[i].etapa);
          }
          this.lstEtapas = temp;
          this.estapaItemLineaTiempo = lista;
          console.log("Etapas");
          console.log(this.lstEtapas);
          console.log("Lista Etapas");
          console.log(this.estapaItemLineaTiempo);
        }

        this.coreComponent.closeModal(0);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }
  obtenerInspectorRevision(facturaS, cpedido) {
    console.log("Método obtenerInspectorRevision ");
    let cuerpo = {
      factura: facturaS,
      cpedido: cpedido
    }
    console.log("Parametros enviados: ");
    console.log(cuerpo);
    this.itemLineaTiempo = undefined;
    this._cobrosService.obtenerInspectorRevision(cuerpo).subscribe(
      data => {

        this.itemLineaTiempo = data.current;
        this.coreComponent.closeModal(0);
        console.log("****---Lista de tiempo");
        console.log(this.itemLineaTiempo);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }
  lineaTiempo(i: number) {
    console.log("Método lineaTiempo ");
    this.lstLineaTiempoActive = new Array(this.lstLineaTiempo.length).fill("")
    this.lstLineaTiempoActive[i] = "divActive";
    this.estadoItemLineaTiempo = this.lstLineaTiempo[i].etapa;
    this.itemLineaTiempo = this.lstLineaTiempo[i];
    console.log("ESTADO: " + this.estadoItemLineaTiempo);

    switch (this.estadoItemLineaTiempo) {
      case "COBRO":
        this.obtenerInspectorCobro(this.facturaS, this.fpor, this.lstLineaTiempo[i].etapaPadre);
        console.log("/**************Cobro");
        break;
      case "Factura":

        this.obtenerInspectorRevision(this.facturaS, this.fpor);
        console.log("/**************Factura");
        break;
      case "ENTREGA":
        console.log("/**************ENTREGA");
        this.obtenerInspectorEntrega(this.facturaS, this.fpor);
        break;
      case "COBRADO":
        this.obtenerInspectorCobro(this.facturaS, this.fpor, this.lstLineaTiempo[i].etapaPadre);
        console.log("/**************COBRADO");
        break;
      case "COOBRADA":
        this.obtenerInspectorCobro(this.facturaS, this.fpor, this.lstLineaTiempo[i].etapaPadre);
        console.log("/**************COOBRADA");
        break;
      case "ENVIO":
        this.obtenerInspectorEntrega(this.facturaS, this.fpor);
        console.log("/**************ENVIO");
        break;
    }

  }
  // Función de descarga de archivo CSV 
  download() {
    let lstCobros2: any[] = [];
    this.lstCobros.forEach((cobro, index) => {
      this.fecha = cobro.fechaFacturacion;
      this.client = cobro.nombreCliente;
      if (cobro.diasRestantesCobro === 0) { this.drc = "Pendiente"; } else { if (cobro.diasRestantesCobro < 0) { this.drc = "Cobrado"; } else { this.drc = cobro.diasRestantesCobro; } }
      if (cobro.noCuenta === undefined) { this.cuenta = "ND"; } else { this.cuenta = cobro.noCuenta; }
      if (cobro.banco === undefined) { this.banco = "ND"; } else { this.banco = cobro.banco; }
      if (cobro.fechaUEntrega === null) { this.fue = "Pendiente"; } else { this.fue = new dateFormatSlash().transform(cobro.fechaUEntrega); }
      if (cobro.resultadoEntrega === null) { this.resultado = "Pendiente"; } else { this.resultado = cobro.resultadoEntrega; }
      if (cobro.fechaPEntrega === null) { this.fee = "Pendiente"; } else { this.fee = new dateFormatSlash().transform(cobro.fechaPEntrega); }
      if (cobro.fechaEsperadaPago != null || cobro.fechaEsperadaPago != undefined) { this.fep = new dateFormatSlash().transform(cobro.fechaEsperadaPago); } else { this.fep = "Pendiente" }
      if (cobro.fechaFacturacion != null || cobro.fechaFacturacion != undefined) { this.ff = new dateFormatSlash().transform(cobro.fechaFacturacion); } else { this.ff = "Pendiente" }
      if (cobro.fechaPago != null || cobro.fechaPago != undefined) { this.frc = new dateFormatSlash().transform(cobro.fechaPago); } else { this.frc = "Pendiente" }
      let Cobro2 = {
        '#': index + 1,
        'Cliente': "\"" + cobro.nombreCliente + "\"",
        'P. Interno': cobro.cpedido,
        'Referencia': cobro.referencia,
        'Factura': cobro.factura,
        'UUID': cobro.uuid,
        'Vendió': cobro.fpor,
        'MEC': '$' + cobro.montoDolares,
        'Moneda': 'USD',
        'TC': cobro.tipoCambio,
        'C.Pago': cobro.cpago,
        'F. Facturación': this.ff,
        'FEP': this.fep,
        'DRC': this.drc,
        'FRC': this.frc,
        'Estado': cobro.estado,
        'Sub Total USD': cobro.subTotalDlls,
        'IVA USD': cobro.ivaDlls,
        'Total USD': cobro.totalDlls,
        'Sub Total M.N.': cobro.subtotalPesos,
        'IVA M.N.': cobro.ivaPesos,
        'Total M.N.': cobro.totalPesos,
        'Cuenta bancaria': this.cuenta,
        'Banco': this.banco,
        'FUE': this.fue,
        'ResultadoEntrega': this.resultado,
        'FEE': this.fee
      }
      lstCobros2.push(Cobro2);
    });
    var csvData = this.ConvertToCSV(lstCobros2);
    var a = document.createElement("a");
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    var blob = new Blob([csvData], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'ConsultaCobros-' + new dateFormatSlash() + '.csv';
    a.click();
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
  //Función para mostrar la tabla de datos de cobros
  showTable() {
    this.isTableShow = true;
  }
  //Función para mostrar la sección de gráficas
  showGraphic() {
    this.isTableShow = false;
  }
  descargarPDF(archivo: string) {
    console.log(archivo);
    const BrowserWindow = electron.remote.BrowserWindow;
    let newWin = new BrowserWindow({ width: 800, height: 600 })
    PDFWindow.addSupport(newWin)
    newWin.loadURL(archivo);
  }
}