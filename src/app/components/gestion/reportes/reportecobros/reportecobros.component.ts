import { Component, OnInit } from '@angular/core';
import { ElementFilter } from '../../../shared/filter/element.model';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreContainerComponent } from '../../../core-container/core-container.component';
import { GestionService } from '../../../../services/gestion/gestion.service';
import { UtilService } from '../../../../services/util/util.service';
import { ReporteCobrosService } from '../../../../services/gestion/reportes/reportecobros/reportecobros.service';
import { element } from 'protractor';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'pn-reportecobros',
  templateUrl: './reportecobros.component.html',
  styleUrls: ['./reportecobros.component.scss']
})
export class ReportecobrosComponent implements OnInit {
  activasPasado: number = 1;
  activasAnte: number = 1;
  activasAntier: number = 1;
  activasAyer: number = 1;
  activasFuturo: number = 1;
  activasPosPasado: number = 1;
  activasPasadoManana: number = 1;
  activasManana: number = 1;
  activasHoy: number = 1;
  activasTodo: number = 1;
  numeroDia: any;
  today: any;
  etiquetasDias: any[] = [];
  label: string;
  nuevoDias: any[] = [];
  filtroDias: any[] = [];
  nuevoCondiciones: any[] = [];
  nuevoMedio: any[] = [];
  nuevoVendio: any[] = [];
  filtroCondiciones: any[] = [];
  filtroMedioPago: any[] = [];
  filtroVendio: any[] = [];
  nuevoClientes: any[] = [];
  filtroClientes: any[] = [];
  filtroNivelIngreso: any[] = [];
  nuevoNivelIngreso: any[] = [];
  topGraphics: any = "-110%"; nivel: any;
  showGraphic: boolean = false;
  activas: number = 1;
  graficas: any[] = [];
  condicionesPago: any = [];
  medioPago: any = [];
  marcas: any;
  vendio: any = [];
  ejecutivoVentas: any;
  diasRestantesCredito: any = [];
  nivelIngreso: any = [];
  GClientes: any = [];
  graficasValores: any[] = [];
  graficasCargadas: boolean = false;
  auxMostrar: any[] = [];
  totalPiezasTercerPanel: number = 0;
  montoTotalTercerPanel: number = 0;
  totalPiezasSegundoPanel: number = 0;
  folio: any;
  totalSegundoPanel: number = 0;
  respaldo: any[] = [];
  istextboxCobros: boolean = true;
  aux: any[] = [];
  lstDetalle: any;
  refrescar: boolean = true;
  pedidos: any[] = [];
  cpedido: any[] = [];
  lsttercerPanel: any[] = [];
  nombreCli: any;
  lstcobroActivo: any[] = [];
  detalleCobro: any[] = [];
  montoTotal: number = 0;
  lstclienteActivo: any[];
  totalPiezas: number = 0;
  nombres: any[] = [];
  filtro: any[] = [];
  filtroCobros: any[] = [];
  lstCobros: any[] = [];
  fechaGeneral: any;
  titulo: string;
  Elements: ElementFilter[];
  dropClientes: any[] = [{ nombre: '--TODOS--', key: 0 }];
  dropFabricantes: any[] = [{ nombre: '--TODOS--', key: 0 }];
  Clear = true;
  isThereData: boolean = true;
  filtroForm: FormGroup;
  lstCobradores: any;
  lstClientes: any;
  lstFabricantes: any;
  classPanel: string = "panelNormal";
  hiddenClose: boolean = true;
  IsImage: boolean = true;
  avanzada: Boolean = true;
  isSeguimiento: boolean = true;
  rango: number = 1;
  dropCobrador: any[] = [{ nombre: '--TODOS--', key: 0 }];
  activaGraficaHoy: number = 0; activaGraficaManana: number = 0; activaGraficaPasadoMa: number = 0; activaGraficaPosPasado: number = 0; activaPasado: number = 0;
  activaGraficaFuturo: number = 0; activaGraficaAyer: number = 0; activaGraficaAntier: number = 0; activaGraficaAnteAntier: number = 0; activaGraficaTodo: number = 0
  objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", cobrador: "", numCobros: 0, numPartidas: 0, totalPiezas: 0, numPiezas: 0, montoTotal: 0, cpedido: [], vendio: "", cpago: "", medioPago: "", factura: [], nivelIngreso: "", diasRestante: "" }
  constructor(private router: Router, private _fb: FormBuilder, private _gestionService: GestionService, private coreComponent: CoreContainerComponent, private utilService: UtilService, private _reportecobrosService: ReporteCobrosService) { }
  Llenar = () => {
    this.Elements = [new ElementFilter("string", "Clientes", this.dropClientes, true),
    new ElementFilter("string", "Cobrador", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'SIAvalos', key: 1 },
      { nombre: 'PMendez', key: 2 },
      { nombre: 'CobranzaPQF', key: 3 },
    ], true),
    new ElementFilter("string", "ESAC", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'LVera', key: 1 },
      { nombre: 'BArias', key: 2 },
      { nombre: 'JIOlvera', key: 3 },
      { nombre: 'Barias', key: 4 },
    ], true),
    new ElementFilter("string", "Vendió", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Proveedora', key: 1 },
      { nombre: 'Proquifa', key: 2 },
      { nombre: 'Golocaer', key: 3 },
      { nombre: 'Mungen', key: 4 },
    ], true),
    new ElementFilter("string", "Condiciones de pago", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: '90 DIAS', key: 1 },
      { nombre: '60 DIAS', key: 2 },
      { nombre: '30 DIAS', key: 3 },
      { nombre: '15 DIAS', key: 4 },
      { nombre: '45 DIAS', key: 5 },
      { nombre: '23 DIAS', key: 5 }
    ], true),
    new ElementFilter("string", "Medio de pago", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Transferencia', key: 1 },
    ], true),
    ];
    //isThereData indica que ya no es necesario mostrar el loader
    this.isThereData = true;
    this.Clear = false;
  }
  reportesCobrosForm: FormGroup;
  ngOnInit() {
    let date: Date = new Date();
    this.filtroForm = new FormGroup({
      filtroDato: new FormControl()
    });

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

    this._gestionService.dropFabricantes().subscribe(
      data => {
        this.lstFabricantes = data.current;
        let lstAux: any[] = [];
        for (var item of this.lstFabricantes) {
          lstAux.push({ nombre: item.valor, key: item.llave })
        }
        this.dropFabricantes = this.dropFabricantes.concat(lstAux);
        this.Llenar();
      },
      error => {
        console.log("error login");
        console.log(error);
      }
    );
    this.reportesCobrosForm = new FormGroup({
      firstName: new FormControl()
    });
    let cuerpo = {
      facturaS: "",
      cPedido: "",
      idUsuarioLogueado: 91
    }
    this.reporteCobros(cuerpo);
  }
  reporteCobros(parametros: any) {
    this.coreComponent.openModal(0);
    this._reportecobrosService.reporteCobros(parametros).subscribe(
      data => {
        this.lstCobros = data.current;
        console.log(data);
        this.filtroCuadros(4);
        this.coreComponent.closeModal(0);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
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
  filtroCuadros(numDia) {

    this.refrescar = false;
    this.clienteActivo(0);
    switch (numDia) {
      case 0:
        this.activasPasado = 1; this.activasAnte = 1; this.activasAntier = 1; this.activasAyer = 1; this.activasFuturo = 1;
        this.activasManana = 1; this.activasHoy = 1; this.activasTodo = 1; this.activasPosPasado = 1;
        this.titulo = "Pasado";
        let fechaPasado: Date = new Date();
        this.fechaGeneral = new Date();
        this.fechaGeneral.setDate(fechaPasado.getDate() - 4);
        this.activarGraficasPasado();
        break;
      case 1:
        this.activasPasado = 1; this.activasAntier = 1; this.activasAyer = 1; this.activasFuturo = 1;
        this.activasPasadoManana = 1; this.activasManana = 1; this.activasHoy = 1; this.activasTodo = 1; this.activasPosPasado = 1;
        this.titulo = "Ante Antier"
        let fechaAnte: Date = new Date();
        this.fechaGeneral = new Date();
        this.fechaGeneral.setDate(fechaAnte.getDate() - 3);
        this.activarGraficasAnteAntier();
        break;
      case 2:
        this.activasPasado = 1; this.activasAnte = 1; this.activasAyer = 1; this.activasFuturo = 1;
        this.activasPasadoManana = 1; this.activasManana = 1; this.activasHoy = 1; this.activasTodo = 1; this.activasPosPasado = 1;
        this.titulo = "Antier";
        let fechaAntier: Date = new Date();
        this.fechaGeneral = new Date();
        this.fechaGeneral.setDate(fechaAntier.getDate() - 2);
        this.activarGraficasAntier();
        break;
      case 3:
        this.activasPasado = 1; this.activasAnte = 1; this.activasAntier = 1; this.activasFuturo = 1;
        this.activasPasadoManana = 1; this.activasManana = 1; this.activasHoy = 1; this.activasTodo = 1; this.activasPosPasado = 1; "Ayer";
        let fechaAyer: Date = new Date();
        this.fechaGeneral = new Date();
        this.fechaGeneral.setDate(fechaAyer.getDate() - 1);
        this.activarGraficasAyer();
        break;
      case 4:
        this.activasPasado = 1; this.activasAnte = 1; this.activasAntier = 1; this.activasAyer = 1; this.activasFuturo = 1;
        this.activasPasadoManana = 1; this.activasManana = 1; this.activasTodo = 1; this.activasPosPasado = 1;
        this.titulo = "Hoy";
        let fecha: Date = new Date();
        this.fechaGeneral = new Date();
        this.activarGraficasHoy();

        break;
      case 5:
        this.activasPasado = 1; this.activasAnte = 1; this.activasAntier = 1; this.activasAyer = 1; this.activasFuturo = 1;
        this.activasPasadoManana = 1; this.activasManana = 1; this.activasHoy = 1; this.activasPosPasado = 1;
        let fechaTodo: Date = new Date();
        this.fechaGeneral = "TODO"
        this.activarGraficasTodo();
        break;
      case 6:
        this.activasPasado = 1; this.activasAnte = 1; this.activasAntier = 1; this.activasAyer = 1; this.activasFuturo = 1;
        this.activasPasadoManana = 1; this.activasHoy = 1; this.activasTodo = 1; this.activasPosPasado = 1;
        this.titulo = "Mañana";
        let fechaMa: Date = new Date();
        this.fechaGeneral = new Date()
        this.fechaGeneral.setDate(fechaMa.getDate() + 1);
        this.activarGraficasManana();
        break;
      case 7:
      this.activasPasado = 1; this.activasAnte = 1; this.activasAntier = 1; this.activasAyer = 1; this.activasFuturo = 1;
      this.activasManana = 1; this.activasHoy = 1; this.activasTodo = 1; this.activasPosPasado = 1;
        this.titulo = "Pasado Mañana";
        let fechaPasadoMa: Date = new Date();
        this.fechaGeneral = new Date()
        this.fechaGeneral.setDate(fechaPasadoMa.getDate() + 2);
        this.activarGraficasPasadoManana();
        break;
      case 8:
      this.activasPasado = 1; this.activasAnte = 1; this.activasAntier = 1; this.activasAyer = 1; this.activasFuturo = 1;
      this.activasPasadoManana = 1; this.activasManana = 1; this.activasHoy = 1; this.activasTodo = 1; 
        this.titulo = "Pospasado";
        let fechaPos: Date = new Date();
        this.fechaGeneral = new Date();
        this.fechaGeneral.setDate(fechaPos.getDate() + 3);
        this.activarGraficasPosPasado();
        break;
      case 9:
      this.activasPasado = 1; this.activasAnte = 1; this.activasAntier = 1; this.activasAyer = 1; this.activasPosPasado = 1;
      this.activasPasadoManana = 1; this.activasManana = 1; this.activasHoy = 1; this.activasTodo = 1; 
        this.titulo = "Futuro";
        let fechaFuturo: Date = new Date();
        this.fechaGeneral = new Date();
        this.fechaGeneral.setDate(fechaFuturo.getDate() + 4);
        this.activarGraficasFuturo();
        break;
      default:
        break;
    }
    if (this.fechaGeneral != "TODO") {
      this.nombres = [];
      this.filtro = [];
      this.filtroCobros = [];
      let options = {
        weekday: 'long',
      };
      this.today = this.fechaGeneral.toLocaleDateString('es-MX', options).charAt(0).toUpperCase() + this.fechaGeneral.toLocaleDateString('es-MX', options).slice(1);
      this.numeroDia = this.fechaGeneral.getDate()
      this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", cobrador: "", numCobros: 0, numPartidas: 0, totalPiezas: 0, numPiezas: 0, montoTotal: 0, cpedido: [], vendio: "", cpago: "", medioPago: "", factura: [], nivelIngreso: "", diasRestante: "" }
      this.lstCobros.forEach(element => {
        let fechaCompara = new Date(element.fechaEsperadaPago);
        if ((this.fechaGeneral.getDate()) === fechaCompara.getDate() && this.fechaGeneral.getMonth() === fechaCompara.getMonth() && this.fechaGeneral.getFullYear() === fechaCompara.getFullYear() && element.estado === "Por Cobrar") {
          this.filtro.push(element);
        }
      });
      this.filtro.forEach(element => {
        if (this.nombres.indexOf(element.nombreCliente) === -1) {
          this.nombres.push(element.nombreCliente);
        }
      });
      this.nombres.forEach(element => {
        this.filtro.forEach(e => {
          if (element === e.nombreCliente) {
            this.objetoInfo.nombreCliente = e.nombreCliente
            this.objetoInfo.monto = this.objetoInfo.monto + e.montoDolares;
            this.objetoInfo.nombreEV = e.ev;
            this.objetoInfo.nombreEsac = e.esac;
            this.objetoInfo.numCobros = this.objetoInfo.numCobros + 1;
            this.objetoInfo.numPartidas = this.objetoInfo.numPartidas + e.partidas;
            this.objetoInfo.numPiezas = this.objetoInfo.numPiezas + e.piezas;
            this.objetoInfo.cobrador = e.cobrador;
            this.objetoInfo.montoTotal = this.objetoInfo.montoTotal + e.montoDolares;
            this.objetoInfo.totalPiezas = this.objetoInfo.totalPiezas + e.piezas;
            this.objetoInfo.vendio = e.fpor;
            this.objetoInfo.cpago = e.cpago;
            this.objetoInfo.medioPago = e.medioPago;
            this.objetoInfo.diasRestante = e.diasRestantesCobro;
            if (this.objetoInfo.factura.indexOf(e.factura) === -1) {
              this.objetoInfo.factura.push(e.factura);
            }
            if (this.objetoInfo.cpedido.indexOf(e.cpedido) === -1) {
              this.objetoInfo.cpedido.push(e.cpedido);
            }

            this.objetoInfo.nivelIngreso = e.nivelIngreso;

          }
        });
        this.filtroCobros.push(this.objetoInfo);
        this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", cobrador: "", numCobros: 0, numPartidas: 0, totalPiezas: 0, numPiezas: 0, montoTotal: 0, cpedido: [], vendio: "", cpago: "", medioPago: "", factura: [], nivelIngreso: "", diasRestante: "" }
      });
      this.filtroCobros.forEach(element => {
        this.montoTotal = this.montoTotal + element.monto;
        this.totalPiezas = this.totalPiezas + element.totalPiezas;
      });
      this.respaldo = this.filtroCobros;
      //console.log(this.filtroCobros);

      this.graficasCargadas = false;
      this.graficasValores = [
        this.GClientes,
        this.nivelIngreso,
        this.diasRestantesCredito,
        this.vendio,
        this.medioPago,
        this.condicionesPago
      ];
      this.graficas = [];
      // Titulos de Gráficas
      this.graficas = [
        'Clientes',
        'Nivel de Ingreso Clientes',
        'Dias Restantes de Credito',
        'Vendió',
        'Medio de Pago',
        'Condiciones de Pago'
      ];
      if (this.rango === 1) {
        if (this.filtroCobros.length === 0) {
          this.detalleCobro = [];
          this.lsttercerPanel = [];
          this.montoTotal = 0;
          this.totalPiezas = 0;
        } else {
          let nombre = this.filtroCobros[0].nombreCliente
          this.nombreCli = this.filtroCobros[0].nombreCliente;

          this.segundoPanel(nombre);
          this.cobroActivo(0);

        }
        this.limpiarVariablesGrafica();
        this.calcularDatosParaGraficas();
        this.graficasValores = [];
        this.refrescar = false;
        setTimeout(() => {

          this.refrescar = true;
        }, 10);
        this.graficasValores = [
          this.GClientes,
          this.nivelIngreso,
          this.diasRestantesCredito,
          this.vendio,
          this.medioPago,
          this.condicionesPago
        ];

        this.refrescar = false;
        setTimeout(() => {

          this.refrescar = true;
        }, 10);
      } else if (this.rango === 2) {
        this.cero();
      } else if (this.rango === 3) {
        this.dosmil();
      } else if (this.rango === 4) {
        this.diezmil();
      }

    } else {
      this.filtro = [];
      this.filtroCobros = [];
      this.nombres = [];
      this.today = "TODO";
      this.numeroDia = "";
      console.log("********ENTRANDO*******");

      this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", cobrador: "", numCobros: 0, numPartidas: 0, totalPiezas: 0, numPiezas: 0, montoTotal: 0, cpedido: [], vendio: "", cpago: "", medioPago: "", factura: [], nivelIngreso: "", diasRestante: "" }
      this.lstCobros.forEach(element => {
        let fechaCompara = new Date(element.fechaEsperadaPago);
        //if (){
        this.filtro.push(element);
        //  }
      });
      this.filtro.forEach(element => {
        if (this.nombres.indexOf(element.nombreCliente) === -1) {
          this.nombres.push(element.nombreCliente);
        }
      });
      console.log(this.nombres);

      this.nombres.forEach(element => {
        this.filtro.forEach(e => {
          if (element === e.nombreCliente) {
            this.objetoInfo.nombreCliente = e.nombreCliente
            this.objetoInfo.monto = this.objetoInfo.monto + e.montoDolares;
            this.objetoInfo.nombreEV = e.ev;
            this.objetoInfo.nombreEsac = e.esac;
            this.objetoInfo.numCobros = this.objetoInfo.numCobros + 1;
            this.objetoInfo.numPartidas = this.objetoInfo.numPartidas + e.partidas;
            this.objetoInfo.numPiezas = this.objetoInfo.numPiezas + e.piezas;
            this.objetoInfo.cobrador = e.cobrador;
            this.objetoInfo.montoTotal = this.objetoInfo.montoTotal + e.montoDolares;
            this.objetoInfo.totalPiezas = this.objetoInfo.totalPiezas + e.piezas;
            this.objetoInfo.vendio = e.fpor;
            this.objetoInfo.cpago = e.cpago;
            this.objetoInfo.medioPago = e.medioPago;
            this.objetoInfo.diasRestante = e.diasRestantesCobro;
            if (this.objetoInfo.factura.indexOf(e.factura) === -1) {
              this.objetoInfo.factura.push(e.factura);
            }
            if (this.objetoInfo.cpedido.indexOf(e.cpedido) === -1) {
              this.objetoInfo.cpedido.push(e.cpedido);
            }

            this.objetoInfo.nivelIngreso = e.nivelIngreso;

          }
        });
        this.filtroCobros.push(this.objetoInfo);
        this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", cobrador: "", numCobros: 0, numPartidas: 0, totalPiezas: 0, numPiezas: 0, montoTotal: 0, cpedido: [], vendio: "", cpago: "", medioPago: "", factura: [], nivelIngreso: "", diasRestante: "" }
      });
      console.log(this.filtro);

      this.filtroCobros.forEach(element => {
        this.montoTotal = this.montoTotal + element.monto;
        this.totalPiezas = this.totalPiezas + element.totalPiezas;
      });
      this.respaldo = this.filtroCobros;
      //console.log(this.filtroCobros);

      this.graficasCargadas = false;
      this.graficasValores = [
        this.GClientes,
        this.nivelIngreso,
        this.diasRestantesCredito,
        this.vendio,
        this.medioPago,
        this.condicionesPago
      ];
      this.graficas = [];
      // Titulos de Gráficas
      this.graficas = [
        'Clientes',
        'Nivel de Ingreso Clientes',
        'Dias Restantes de Credito',
        'Vendió',
        'Medio de Pago',
        'Condiciones de Pago'
      ];
      if (this.rango === 1) {
        if (this.filtroCobros.length === 0) {
          this.detalleCobro = [];
          this.lsttercerPanel = [];
          this.montoTotal = 0;
          this.totalPiezas = 0;
        } else {
          let nombre = this.filtroCobros[0].nombreCliente
          this.nombreCli = this.filtroCobros[0].nombreCliente;

          this.segundoPanel(nombre);
          this.cobroActivo(0);

        }
        this.limpiarVariablesGrafica();
        this.calcularDatosParaGraficas();
        this.graficasValores = [];
        this.refrescar = false;
        setTimeout(() => {

          this.refrescar = true;
        }, 10);
        this.graficasValores = [
          this.GClientes,
          this.nivelIngreso,
          this.diasRestantesCredito,
          this.vendio,
          this.medioPago,
          this.condicionesPago
        ];

        this.refrescar = false;
        setTimeout(() => {

          this.refrescar = true;
        }, 10);
      } else if (this.rango === 2) {
        this.cero();
      } else if (this.rango === 3) {
        this.dosmil();
      } else if (this.rango === 4) {
        this.diezmil();
      }
    }
  }
  segundoPanel(nombreCliente) {
    this.detalleCobro = [];
    this.totalSegundoPanel;
    this.nombreCli = nombreCliente;
    this.filtro.forEach(element => {
      if (element.nombreCliente === nombreCliente) {
        this.detalleCobro.push(element);
        this.totalSegundoPanel += element.montoDolares;
        this.totalPiezasSegundoPanel += element.piezas;
      }
    });
    let cpedido = this.detalleCobro[0].cpedido;
    this.tercerPanel(cpedido);
  }
  tercerPanel(cpedido) {
    this.lsttercerPanel = [];
    this.detalleCobro.forEach(e => {
      if (e.cpedido === cpedido) {
        this.lsttercerPanel.push(e);
        this.montoTotalTercerPanel += e.montoDolares;
        this.totalPiezasTercerPanel += e.piezas;
      }

    });
    this.cpedido = this.lsttercerPanel[0].cpedido;
  }

  clienteActivo(i) {
    this.lstclienteActivo = [];
    this.lstclienteActivo = new Array(this.filtroCobros.length).fill('');
    this.lstclienteActivo[i] = 'divActive';
    this.cobroActivo(0);
  }
  cobroActivo(i) {
    this.lstcobroActivo = [];
    this.lstcobroActivo = new Array(this.detalleCobro.length).fill('');
    this.lstcobroActivo[i] = 'divActive';
    this.detalleActivo(0);
  }
  detalleActivo(i) {
    this.lstDetalle = [];
    this.lstDetalle = new Array(this.tercerPanel.length).fill('');
    this.lstDetalle[i] = 'divActive';
  }
  todo() {
    this.montoTotal = 0;
    this.totalPiezas = 0;
    this.rango = 1;
    this.filtroCobros = [];
    this.filtroCobros = this.respaldo;

    this.filtroCobros.forEach(element => {
      this.montoTotal = this.montoTotal + element.monto;
      this.totalPiezas = this.totalPiezas + element.totalPiezas;
    });
    if (this.filtroCobros.length === 0) {
      this.detalleCobro = [];
      this.lsttercerPanel = [];
      this.montoTotal = 0;
      this.totalPiezas = 0;
    } else {
      let nombre = this.filtroCobros[0].nombreCliente
      this.segundoPanel(nombre);
      this.cobroActivo(0);
      this.limpiarVariablesGrafica();
      this.calcularDatosParaGraficas();
      this.graficasValores = [];
      this.refrescar = false;
      setTimeout(() => {

        this.refrescar = true;
      }, 10);
      this.graficasValores = [
        this.GClientes,
        this.nivelIngreso,
        this.diasRestantesCredito,
        this.vendio,
        this.medioPago,
        this.condicionesPago
      ];

      this.refrescar = false;
      setTimeout(() => {

        this.refrescar = true;
      }, 10);
    }


  }
  diezmil() {
    this.montoTotal = 0;
    this.totalPiezas = 0;
    this.rango = 4;
    this.aux = [];
    this.respaldo.forEach(element => {
      if (element.monto > 10000) {
        this.aux.push(element);
      }
      this.montoTotal = this.montoTotal + element.monto;
      this.totalPiezas = this.totalPiezas + element.totalPiezas;
    });
    this.filtroCobros = [];
    this.filtroCobros = this.aux;

    if (this.filtroCobros.length === 0) {
      this.detalleCobro = [];
      this.lsttercerPanel = [];
      this.montoTotal = 0;
      this.totalPiezas = 0;
      this.limpiarVariablesGrafica();
      this.calcularDatosParaGraficas();
    } else {
      let nombre = this.filtroCobros[0].nombreCliente
      this.segundoPanel(nombre);
      this.cobroActivo(0);
      this.limpiarVariablesGrafica();
      this.calcularDatosParaGraficas();
      this.graficasValores = [];
      this.refrescar = false;
      setTimeout(() => {

        this.refrescar = true;
      }, 10);
      this.graficasValores = [
        this.GClientes,
        this.nivelIngreso,
        this.diasRestantesCredito,
        this.vendio,
        this.medioPago,
        this.condicionesPago
      ];

      this.refrescar = false;
      setTimeout(() => {

        this.refrescar = true;
      }, 10);
    }
  }
  dosmil() {
    this.montoTotal = 0;
    this.totalPiezas = 0;
    this.aux = [];
    this.rango = 3;
    this.respaldo.forEach(element => {
      if (element.monto > 2000 && element.monto <= 10000) {
        this.aux.push(element);
      }
      this.montoTotal = this.montoTotal + element.monto;
      this.totalPiezas = this.totalPiezas + element.totalPiezas;
    });
    this.filtroCobros = [];
    this.filtroCobros = this.aux;

    if (this.filtroCobros.length === 0) {
      this.detalleCobro = [];
      this.lsttercerPanel = [];
      this.montoTotal = 0;
      this.totalPiezas = 0;
      this.limpiarVariablesGrafica();
      this.calcularDatosParaGraficas();
    } else {
      let nombre = this.filtroCobros[0].nombreCliente
      this.segundoPanel(nombre);
      this.cobroActivo(0);
      this.limpiarVariablesGrafica();
      this.calcularDatosParaGraficas();
      this.graficasValores = [];
      this.refrescar = false;
      setTimeout(() => {

        this.refrescar = true;
      }, 10);
      this.graficasValores = [
        this.GClientes,
        this.nivelIngreso,
        this.diasRestantesCredito,
        this.vendio,
        this.medioPago,
        this.condicionesPago
      ];

      this.refrescar = false;
      setTimeout(() => {

        this.refrescar = true;
      }, 10);
    }
  }
  cero() {
    this.montoTotal = 0;
    this.totalPiezas = 0;
    this.rango = 2;
    this.aux = [];
    this.respaldo.forEach(element => {
      if (element.monto > 0 && element.monto <= 2000) {
        this.aux.push(element);
      }
      this.montoTotal = this.montoTotal + element.monto;
      this.totalPiezas = this.totalPiezas + element.totalPiezas;
    });
    this.filtroCobros = [];
    this.filtroCobros = this.aux;

    if (this.filtroCobros.length === 0) {
      this.detalleCobro = [];
      this.lsttercerPanel = [];
      this.montoTotal = 0;
      this.totalPiezas = 0;
      this.limpiarVariablesGrafica();
      this.calcularDatosParaGraficas();
    } else {
      console.log("ENTRO A ELSE");

      let nombre = this.filtroCobros[0].nombreCliente
      this.segundoPanel(nombre);
      this.cobroActivo(0);
      this.limpiarVariablesGrafica();
      this.calcularDatosParaGraficas();
      this.graficasValores = [];
      this.refrescar = false;
      setTimeout(() => {

        this.refrescar = true;
      }, 10);
      this.graficasValores = [
        this.GClientes,
        this.nivelIngreso,
        this.diasRestantesCredito,
        this.vendio,
        this.medioPago,
        this.condicionesPago
      ];

      this.refrescar = false;
      setTimeout(() => {

        this.refrescar = true;
      }, 10);
    }
  }
  activarGraficasTodo() {
    this.activasTodo++;
    this.activasTodo % 2 === 0 ? this.showTablePanel() : this.showGraphicPanel();
  }
  activarGraficasHoy() {
    this.activasHoy++;
    this.activasHoy % 2 === 0 ? this.showTablePanel() : this.showGraphicPanel();
  }
  activarGraficasManana() {
    this.activasManana++;
    this.activasManana % 2 === 0 ? this.showTablePanel() : this.showGraphicPanel();
  }
  activarGraficasPasadoManana() {
    this.activasPasadoManana++;
    this.activasPasadoManana % 2 === 0 ? this.showTablePanel() : this.showGraphicPanel();
  }
  activarGraficasPosPasado() {
    this.activasPosPasado++;
    this.activasPosPasado % 2 === 0 ? this.showTablePanel() : this.showGraphicPanel();
  }
  activarGraficasFuturo() {
    this.activasFuturo++;
    this.activasFuturo % 2 === 0 ? this.showTablePanel() : this.showGraphicPanel();
  }
  activarGraficasAyer() {
    this.activasAyer++;
    this.activasAyer % 2 === 0 ? this.showTablePanel() : this.showGraphicPanel();
  }
  activarGraficasAntier() {
    this.activasAntier++;
    this.activasAntier % 2 === 0 ? this.showTablePanel() : this.showGraphicPanel();
  }
  activarGraficasAnteAntier() {
    this.activasAnte++;
    this.activasAnte % 2 === 0 ? this.showTablePanel() : this.showGraphicPanel();
  }
  activarGraficasPasado() {
    this.activasPasado++;
    this.activasPasado % 2 === 0 ? this.showTablePanel() : this.showGraphicPanel();
  }
  showGraphicPanel() {
    // console.log("MUESTRA GRAFICAS");

    this.showGraphic = true;
    setTimeout(() => { this.topGraphics = "0"; }, 100);
  }
  showTablePanel() {
    //console.log("MUESTRA TABLA");
    this.topGraphics = "-110%";
    setTimeout(() => { this.showGraphic = false; }, 300);
  }
  mostrarDatos($event) {
    // console.log($event);

    if ($event.textbox != "") {
      this, this.mostrarDatosRapida($event);
    } else {
      this.auxMostrar = [];
      if ($event.Datos[0].nombre === "--TODOS--") {
        $event.Datos[0].nombre = "";
      }
      if ($event.Datos[1].nombre === "--TODOS--") {
        $event.Datos[1].nombre = "";
      }
      if ($event.Datos[2].nombre === "--TODOS--") {
        $event.Datos[2].nombre = "";
      }
      if ($event.Datos[3].nombre === "--TODOS--") {
        $event.Datos[3].nombre = "";
      }
      if ($event.Datos[4].nombre === "--TODOS--") {
        $event.Datos[4].nombre = "";
      }
      if ($event.Datos[5].nombre === "--TODOS--") {
        $event.Datos[5].nombre = "";
      }
      if ($event.Datos[0].nombre === "" && $event.Datos[1].nombre === "" && $event.Datos[2].nombre === "" && $event.Datos[3].nombre === "" && $event.Datos[4].nombre === "" && $event.Datos[5].nombre === "") {
        let cuerpo = {
          facturaS: "",
          cPedido: "",
          idUsuarioLogueado: 91
        }
        this.reporteCobros(cuerpo);
      } else {
        this.respaldo.forEach(element => {
          if ($event.Datos[0].nombre === element.nombreCliente || $event.Datos[1].nombre === element.cobrador
            || $event.Datos[2].nombre === element.nombreEsac || $event.Datos[3].nombre === element.fpor || $event.Datos[4].nombre === element.cpago || $event.Datos[5].nombre === element.medioPago) {
            this.auxMostrar.push(element);
          }
        });
        this.filtroCobros = [];
        this.filtroCobros = this.auxMostrar;
        this.respaldo = [];
        this.respaldo = this.filtroCobros;
      }
      if ($event.Datos[0].nombre === "") {
        $event.Datos[0].nombre = "--TODOS--";
      }
      if ($event.Datos[1].nombre === "") {
        $event.Datos[1].nombre = "--TODOS--";
      }
      if ($event.Datos[2].nombre === "") {
        $event.Datos[2].nombre = "--TODOS--";
      }
      if ($event.Datos[3].nombre === "") {
        $event.Datos[3].nombre = "--TODOS--";
      }
      if ($event.Datos[4].nombre === "") {
        $event.Datos[4].nombre = "--TODOS--";
      }
      if ($event.Datos[5].nombre === "") {
        $event.Datos[5].nombre = "--TODOS--";
      }
    }
  }
  mostrarDatosRapida($event) {
    //console.log("****Recibe***");

    // console.log($event);
    this.auxMostrar = [];

    this.respaldo.forEach(element => {
      if ($event.textbox === element.factura.toString()) {
        this.auxMostrar.push(element);
      }
    });
    //console.log(this.auxMostrar);

    this.filtroCobros = [];
    this.filtroCobros = this.auxMostrar;
    // this.respaldo=[];
    //this.respaldo=this.filtroCobros;
  }
  todos() {
    console.log("Entro a todos");

    this.filtroCuadros(0);
  }
  filtroAvanzada() {
    this.avanzada = true;
    this.isSeguimiento = true;
    this.Llenar();
    this.filtroCobros = [];
    this.filtroCobros = this.respaldo;
  }
  filtroRapida() {
    this.avanzada = false;
    this.Elements = [];
    this.isSeguimiento = false;
    //this.todos();
    this.filtroCobros = [];
    this.filtroCobros = this.respaldo;
  }

  /**************GRAFICAS****************/
  limpiarVariablesGrafica() {
    this.filtroMedioPago = [];
    this.filtroVendio = [];
    this.filtroNivelIngreso = [];
    this.filtroCondiciones = [];
    this.filtroClientes = [];
    this.etiquetasDias = [];
    for (let cobro of this.filtroCobros) {
      this.filtroClientes.push(cobro.nombreCliente);
      if (this.filtroNivelIngreso.indexOf(cobro.nivelIngreso) === -1) {
        this.filtroNivelIngreso.push(cobro.nivelIngreso);
      }
      if (this.filtroVendio.indexOf(cobro.vendio) === -1) {
        this.filtroVendio.push(cobro.vendio);
      }
      if (cobro.medioPago != undefined) {
        if (this.filtroMedioPago.indexOf(cobro.medioPago) === -1) {
          this.filtroMedioPago.push(cobro.medioPago);
        }
      }
      if (this.filtroCondiciones.indexOf(cobro.cpago) === -1) {
        this.filtroCondiciones.push(cobro.cpago);
      }
      if (this.filtroDias.indexOf(cobro.diasRestante) === -1) {

        this.filtroDias.push(cobro.diasRestante);
      }
    }


    let valoresDias = [] = [];
    let valoresD = [] = [];
    this.filtroDias.forEach((element) => {
      //console.log(element);

      if (element === 0) {
        this.label = "Vencimiento"
      } else {
        this.label = "A " + element + " días del pago";
      }
      this.etiquetasDias.push(this.label);
      valoresDias.push([0, 0, 0, 0, 0]);
      valoresD.push(0);

    });

    let valoresNiveles = [] = [];
    let valoresN = [] = [];
    this.filtroNivelIngreso.forEach(() => {
      valoresNiveles.push([0, 0, 0, 0, 0]);
      valoresN.push(0);
    });

    let valoresClientes = [];
    let valoresC = [];
    this.filtroClientes.forEach(() => {
      valoresClientes.push([0, 0, 0, 0, 0]);
      valoresC.push(0);
    });
    let valoresVendio = [] = [];
    let valoresV = [] = [];
    this.filtroVendio.forEach(() => {
      valoresVendio.push([0, 0, 0, 0, 0]);
      valoresV.push(0);
    });
    let valoresMedio = [] = [];
    let valoresM = [] = [];
    this.filtroMedioPago.forEach(() => {
      valoresMedio.push([0, 0, 0, 0, 0]);
      valoresM.push(0);
    });

    let valoresCondiciones = [] = [];
    let valoresCon = [] = [];
    this.filtroCondiciones.forEach(() => {
      valoresCondiciones.push([0, 0, 0, 0, 0]);
      valoresCon.push(0);
    });

    // Gráfica Clientes //
    this.GClientes = {
      titulo: "Totales",
      labels: this.filtroClientes,
      valores: valoresC,
      labelsExtras: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
      labelsExtrasHover: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
      valuesExtras: [0, 0, 0, 0, 0],
      valuesExtrasHover: valoresClientes
    }

    // Gráfica Nivel de Ingreso //
    this.nivelIngreso = {
      titulo: "Totales",
      labels: ["MM", "AAplus", "AB", "AM", "MB", "AA", "MA", "Bajo"],
      valores: [0, 0, 0, 0, 0, 0, 0, 0],
      labelsExtras: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
      labelsExtrasHover: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
      valuesExtras: [0, 0, 0, 0, 0],
      valuesExtrasHover: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
    }
    // Gráfica Días restantes de crédito //
    this.diasRestantesCredito = {
      titulo: "Totales",
      labels: this.etiquetasDias,
      valores: valoresD,
      labelsExtras: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
      labelsExtrasHover: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
      valuesExtras: [0, 0, 0, 0, 0],
      valuesExtrasHover: valoresDias
    }
    // Gráfica Días restantes de crédito //
    this.vendio = {
      titulo: "Totales",
      labels: this.filtroVendio,
      valores: valoresV,
      labelsExtras: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
      labelsExtrasHover: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
      valuesExtras: [0, 0, 0, 0, 0],
      valuesExtrasHover: valoresVendio
    }
    //Grafica Medio pago//
    this.medioPago = {
      titulo: "Totales",
      labels: this.filtroMedioPago,
      valores: valoresM,
      labelsExtras: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
      labelsExtrasHover: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
      valuesExtras: [0, 0, 0, 0, 0],
      valuesExtrasHover: valoresMedio
    }
    //Gráfica condiciones de pago//
    this.condicionesPago = {
      titulo: "Totales",
      labels: this.filtroCondiciones,
      valores: valoresCon,
      labelsExtras: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
      labelsExtrasHover: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
      valuesExtras: [0, 0, 0, 0, 0],
      valuesExtrasHover: valoresCondiciones
    }

  }
  calcularDatosParaGraficas() {
    for (let cobro of this.filtroCobros) {
      this.llenarTotales(this.nivelIngreso, cobro, "NIVEL_INGRESO");
      this.llenarTotales(this.GClientes, cobro, "CLIENTES");
      this.llenarTotales(this.diasRestantesCredito, cobro, "DIAS_CREDITO");
      this.llenarTotales(this.vendio, cobro, "VENDIO");
      this.llenarTotales(this.medioPago, cobro, "MEDIO_PAGO");
      this.llenarTotales(this.condicionesPago, cobro, "CONDICIONES_PAGO");
    }
    this.graficasCargadas = true;
    this.nivelIngreso.valuesExtras[0] = this.nivelIngreso.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    this.nivelIngreso.valuesExtrasHover.forEach(function (temp) {
      temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    });
    this.GClientes.valuesExtras[0] = this.GClientes.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    this.GClientes.valuesExtrasHover.forEach(function (temp) {
      temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    });
    this.vendio.valuesExtras[0] = this.vendio.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    this.vendio.valuesExtrasHover.forEach(function (temp) {
      temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    });
    this.medioPago.valuesExtras[0] = this.medioPago.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    this.medioPago.valuesExtrasHover.forEach(function (temp) {
      temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    });
    this.condicionesPago.valuesExtras[0] = this.condicionesPago.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    this.condicionesPago.valuesExtrasHover.forEach(function (temp) {
      temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    });
    this.diasRestantesCredito.valuesExtras[0] = this.diasRestantesCredito.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    this.diasRestantesCredito.valuesExtrasHover.forEach(function (temp) {
      temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    });
    console.log(this.nivelIngreso);


  }
  llenarTotales(total, elemento, graficaElegida) {
    switch (graficaElegida) {
      case "NIVEL_INGRESO":
        let posicion = this.filtroNivelIngreso.indexOf(elemento.nivelIngreso);
        if (this.nuevoNivelIngreso.indexOf(elemento.nombreCliente) === -1) {
          this.nuevoNivelIngreso.push(elemento.nombreCliente);
        }
        total.valuesExtrasHover[posicion][1]++;
        total.valuesExtras[1]++; //Aumento en clientes
        elemento.factura.forEach(element => {
          total.valuesExtras[2]++;
          total.valuesExtrasHover[posicion][2]++; //Suma Facturas
        });
        total.valuesExtras[3] += elemento.numPartidas // Total de Partidas
        total.valuesExtras[4] += elemento.numPiezas// Total de piezas
        total.valores[posicion] += elemento.numPiezas //+ (elemento.monto.toFixed(2)); //Monto total
        total.valuesExtras[0] += + (elemento.monto.toFixed(2));
        total.valuesExtrasHover[posicion][0] += + (elemento.monto.toFixed(2));

        total.valuesExtrasHover[posicion][3] += elemento.numPartidas // Total de Partidas
        total.valuesExtrasHover[posicion][4] += elemento.numPiezas
        break;
      case "CLIENTES":
        let posicion2 = this.filtroClientes.indexOf(elemento.nombreCliente);
        if (this.nuevoClientes.indexOf(elemento.nombreCliente) === -1) {
          this.nuevoClientes.push(elemento.nombreCliente);
        }
        total.valuesExtrasHover[posicion2][1]++;
        total.valuesExtras[1]++; //Aumento en clientes
        elemento.factura.forEach(element => {
          total.valuesExtras[2]++;
          total.valuesExtrasHover[posicion2][2]++; //Suma Facturas
        });
        total.valuesExtras[3] += elemento.numPartidas // Total de Partidas
        total.valuesExtras[4] += elemento.numPiezas// Total de piezas
        total.valores[posicion2] += elemento.numPiezas //+ (elemento.monto.toFixed(2)); //Monto total
        total.valuesExtras[0] += + (elemento.monto.toFixed(2));
        total.valuesExtrasHover[posicion2][0] += + (elemento.monto.toFixed(2));

        total.valuesExtrasHover[posicion2][3] += elemento.numPartidas // Total de Partidas
        total.valuesExtrasHover[posicion2][4] += elemento.numPiezas
        break;
      case "DIAS_CREDITO":
        let posicionD = this.filtroDias.indexOf(elemento.diasRestante);
        if (this.nuevoDias.indexOf(elemento.nombreCliente) === -1) {
          this.nuevoDias.push(elemento.nombreCliente);
          total.valuesExtrasHover[posicionD][1]++;
        }
        total.valuesExtras[1]++; //Aumento en clientes
        total.valuesExtrasHover[posicionD][1]++; //Aumento en clientes
        elemento.factura.forEach(element => {
          total.valuesExtras[2]++;
          total.valuesExtrasHover[posicionD][2]++; //Suma Facturas
        });
        total.valuesExtras[3] += elemento.numPartidas // Total de Partidas
        total.valuesExtras[4] += elemento.numPiezas// Total de piezas
        total.valores[posicionD] += elemento.numPiezas //+ (elemento.monto.toFixed(2)); //Monto total
        total.valuesExtras[0] += + (elemento.monto.toFixed(2));
        total.valuesExtrasHover[posicionD][0] += + (elemento.monto.toFixed(2));

        total.valuesExtrasHover[posicionD][3] += elemento.numPartidas // Total de Partidas
        total.valuesExtrasHover[posicionD][4] += elemento.numPiezas
        break;
      case "VENDIO":
        let posicionVendio = this.filtroVendio.indexOf(elemento.vendio);
        if (this.nuevoVendio.indexOf(elemento.nombreCliente) === -1) {
          this.nuevoVendio.push(elemento.nombreCliente);
          elemento.factura.forEach(element => {
            total.valuesExtrasHover[posicionVendio][2]++;
          });

        }
        total.valuesExtrasHover[posicionVendio][0] += + (elemento.montoTotal.toFixed(2));
        total.valuesExtrasHover[posicionVendio][1]++;
        total.valuesExtras[1]++; //Aumento en clientes
        elemento.factura.forEach(element => {
          total.valuesExtras[2]++;
        });

        total.valuesExtras[3] += elemento.numPartidas// Total de Partidas
        total.valuesExtras[4] += elemento.totalPiezas// Total de piezas
        total.valores[posicionVendio] += elemento.numPiezas //+ (elemento.montoTotal.toFixed(2)); //Monto total
        total.valuesExtras[0] += + (elemento.montoTotal.toFixed(2));

        total.valuesExtrasHover[posicionVendio][2]++; //Suma facturas
        total.valuesExtrasHover[posicionVendio][3] += elemento.numPartidas // Total de Partidas
        total.valuesExtrasHover[posicionVendio][4] += elemento.numPiezas
        break;
      case "MEDIO_PAGO":
        let posicionM = this.filtroMedioPago.indexOf(elemento.medioPago);
        if (this.nuevoMedio.indexOf(elemento.nombreCliente) === -1) {
          this.nuevoMedio.push(elemento.nombreCliente);
          // elemento.factura.forEach(element => {
          //   total.valuesExtrasHover[posicionM][2]++;
          // });
        }
        total.valuesExtrasHover[posicionM][0] += + (elemento.montoTotal.toFixed(2));
        total.valuesExtrasHover[posicionM][1]++;
        total.valuesExtras[1]++; //Aumento en clientes
        elemento.factura.forEach(element => {
          total.valuesExtras[2]++;
          total.valuesExtrasHover[posicionM][2]++; //Suma facturas
        });

        total.valuesExtras[3] += elemento.numPartidas// Total de Partidas
        total.valuesExtras[4] += elemento.numPiezas// Total de piezas
        total.valores[posicionM] += elemento.numPiezas //+ (elemento.montoTotal.toFixed(2)); //Monto total
        total.valuesExtras[0] += + (elemento.montoTotal.toFixed(2));
        total.valuesExtrasHover[posicionM][3] += elemento.numPartidas // Total de Partidas
        total.valuesExtrasHover[posicionM][4] += elemento.numPiezas
        break;
      case "CONDICIONES_PAGO":
        let posicionCP = this.filtroCondiciones.indexOf(elemento.cpago);

        if (this.nuevoCondiciones.indexOf(elemento.nombreCliente) === -1) {
          this.nuevoCondiciones.push(elemento.nombreCliente);

        }
        total.valuesExtrasHover[posicionCP][0] += + (elemento.montoTotal.toFixed(2));
        total.valuesExtrasHover[posicionCP][1]++;

        total.valuesExtrasHover[posicionCP][3] += elemento.numPartidas // Total de Partidas
        total.valuesExtrasHover[posicionCP][4] += elemento.numPiezas
        total.valores[posicionCP] += elemento.numPiezas //+ (elemento.montoTotal.toFixed(2)); //Monto total
        total.valuesExtras[0] += + (elemento.montoTotal.toFixed(2));
        total.valuesExtras[1]++; //Aumento en clientes
        elemento.factura.forEach(element => {
          total.valuesExtras[2]++;
          total.valuesExtrasHover[posicionCP][2]++;
        });
        total.valuesExtras[3] += elemento.numPartidas// Total de Partidas
        total.valuesExtras[4] += elemento.totalPiezas// Total de piezas


        break;
      default:
        break;
    }
  }
}
