import { Component, OnInit } from '@angular/core';
import {MaterialReceptorService} from '../../services/material-receptor/material-receptor.service';
import {SessionUser} from '../../services/session/session.service';
import {AccountingFormatMoney} from '../../pipes/accounting/accounting.pipe';
import {CoreContainerComponent} from '../core-container/core-container.component';
import {Subscription} from 'rxjs/Subscription';
import {ComunService} from '../../services/comun/comun.service';

@Component({
  selector: 'pn-material-receptor-gdl',
  templateUrl: './material-receptor-gdl.component.html',
  styleUrls: ['./material-receptor-gdl.component.scss']
})
export class MaterialReceptorGdlComponent implements OnInit {
  ocultarAcor: boolean;
  vistaPrincipal: boolean = true;
  classAsideMenu = 'asideNormalMenu';
  itemsMenu: any[];
  SegundaVista: boolean;
  dataCliente: any = {
    titulo: 'Clientes',
    labels: ['Totales'],
    valores: [6, 3],
    labelsExtras: [['clientes'], ['Ordenes de compra'], ['Piezas'], ['Monto']],
    labelsExtrasHover: ['clientes', 'Ordenes de compra', 'Piezas', 'Monto'],
    valuesExtras: [6, 324, 157, 5000],
    valuesExtrasHover: [[6, 3, 1, 2], [324, 157, 50, 100]]
  };
  dataMensajero: any = {
    titulo: 'Productos',
    labels: ['Totales'],
    valores: [6],
    labelsExtras: [['clientes'], ['Ordenes de compra']],
    labelsExtrasHover: ['clientes', 'Ordenes de compra'],
    valuesExtras: [6, 324],
    valuesExtrasHover: [[6, 3], [324, 157]]
  };
  mensajeroData: boolean;
  clienteData: boolean;
  banderaPrueba: boolean = true;
  cliente: any;
  mensajeria: any;
  totales: any;
  /***VARIABLES GRAFICAS**/
  filtroCliente: any[] = [];
  filtroMensajero: any[] = [];
  dataMensajeroAux: any;
  dataClienteAux: any;
  tipoGraficaCliente: string;
  tipoGraficaMensajero: string;
  valuesExtras: any;
  valuesExtrasClientes: any;
  activarBtn: boolean;
  activeMenu: boolean;
  subs: Subscription;
  constructor(private _datosGrafica: MaterialReceptorService, private coreContainer: CoreContainerComponent, private comunService: ComunService) { }

  ngOnInit() {
    let idUsuario: number;
    this.subs = this.comunService.recargar.subscribe(
      (data) => {
         if (data === 'receptorMaterial') {
           this.activeMenu = false;
           idUsuario = SessionUser.getInstance().getUser().getIdEmpleado();
           this.datosGrafica(idUsuario);
         }
      });
     idUsuario = SessionUser.getInstance().getUser().getIdEmpleado();
    this.datosGrafica(idUsuario);
  }
  mostarOcultarAcordeon() {
    this.ocultarAcor = !this.ocultarAcor;
    if (this.ocultarAcor) {
      this.classAsideMenu = 'asideOcultarMenu';
    } else {
      this.classAsideMenu = 'asideMostrarMenu';
    }
  }
  regresarVistaP() {
    this.vistaPrincipal = true;
  }
  cambioDeVista() {
    this.vistaPrincipal = false;
  }
  datosGrafica(idUsuario) {
    this.coreContainer.openModal(0);
    this._datosGrafica.datosGrafica(idUsuario).subscribe(
      data => {
        // console.log(data.current);
        this.llenarGraficas(data.current);
        this.coreContainer.closeModal(0);
    });
  }
  llenarGraficas(lista) {
    this.activeMenu = false;
    this.limpiarVariables();
    if (lista && lista !== null && lista !== undefined && lista.Cliente) {
      this.activarBtn = true;
      setTimeout(() => {
        this.mensajeroData = false;
        this.clienteData = false;
      }, 5);
      this.cliente = lista.Cliente;
      this.mensajeria = lista.Mensajeria;
      this.totales = lista.Totales;
      this.valuesExtras = [this.totales[0].totalMensajeria, this.totales[0].totalGuias, this.totales[0].totalClientes, this.totales[0].totalFacturas];
      this.valuesExtrasClientes = [this.totales[0].totalClientes, this.totales[0].totalGuias, this.totales[0].totalMensajeria, this.totales[0].totalFacturas];
      this.limpiarVariablesGrafica();
      this.calcularDatosParaGraficas();
      this.iniciarMenu(this.totales[0].totalGuias);
    } else {
      this.iniciarMenu(0);
      this.activarBtn = false;
      this.cliente = [];
      this.mensajeria = [];
      this.totales = [];
      this.limpiarVariablesGrafica();
    }
  }
  iniciarMenu(totGuia) {
    this.itemsMenu = [
      {rol: 'RECEPTOR DE MATERIAL', active: true, menu: [
          {nombre: 'Declarar Arribo Guía', url: 'receptorMaterial', tipo: 'valor', valor: totGuia, select: true},
        ]}
    ];
    this.activeMenu = true;
  }
  limpiarVariables() {
    this.filtroMensajero = [];
    this.filtroCliente = [];
    this.mensajeroData = false;
    this.clienteData = false;
  }
  limpiarVariablesGrafica() {
    //////// Emìeza grafica productos //////
    let valoresM  = [] = [];
    let valoresMen = [] = [];
    if (this.mensajeria && this.mensajeria.length > 0) {
      for (let nombre of this.mensajeria) {
        this.filtroMensajero.push(nombre.concepto);
        valoresMen.push([0, 0, 0, 0]);
        valoresM.push(0);
      }
    }
    if (valoresM.length > 0) {
      this.dataMensajero = {
        titulo: 'Totales',
        labels: this.filtroMensajero,
        valores: valoresM,
        labelsExtras: ['Mensajeria', 'Guías' , 'Clientes', 'Facturas'],
        labelsExtrasHover: ['Mensajeria' , 'Guías', 'Clientes', 'Facturas'],
        valuesExtras: this.valuesExtras,
        valuesExtrasHover: valoresMen,
      };
      this.tipoGraficaMensajero = 'General';
    } else {
      this.dataMensajero = {
        titulo: 'Totales',
        labels: this.filtroMensajero,
        valores: [1],
        labelsExtras: ['Mensajeria', 'Guías' , 'Clientes', 'Facturas'],
        labelsExtrasHover: ['Mensajeria' , 'Guías', 'Clientes', 'Facturas'],
        valuesExtras: [0, 0, 0, 0],
        valuesExtrasHover: [[0, 0 , 0 , 0]],
      };
      this.tipoGraficaMensajero = 'Gris';
      setTimeout(() => {
        this.mensajeroData = true;
      }, 5);
    }
    //////// Emìeza grafica Cliente //////
    let valoresC  = [] = [];
    let valoresClientes = [] = [];
    if (this.cliente && this.cliente.length > 0) {
      for (let nombre of this.cliente) {
        this.filtroCliente.push(nombre.concepto);
        valoresClientes.push([0, 0, 0, 0]);
        valoresC.push(0);
      }
    }
    if (valoresC.length > 0) {
      this.dataCliente = {
        titulo: 'Totales',
        labels: this.filtroCliente,
        valores: valoresC,
        labelsExtras: ['Clientes', 'Guías' , 'Mensajeria', 'Facturas'],
        labelsExtrasHover: ['Clientes', 'Guías' , 'Mensajeria', 'Facturas'],
        valuesExtras: this.valuesExtrasClientes,
        valuesExtrasHover: valoresClientes,
      };
      this.tipoGraficaCliente = 'General';
    } else {
      this.dataCliente = {
        titulo: 'Totales',
        labels: this.filtroCliente,
        valores: [1],
        labelsExtras: ['Clientes', 'Guías' , 'Mensajeria', 'Facturas'],
        labelsExtrasHover: ['Clientes', 'Guías' , 'Mensajeria', 'Facturas'],
        valuesExtras: [0, 0, 0, 0],
        valuesExtrasHover: [[0, 0 , 0 , 0]],
      };
      setTimeout(() => {
        this.tipoGraficaCliente = 'Gris';
        this.clienteData = true;
      }, 5);

    }
  }
  calcularDatosParaGraficas() {
    for (let mensajero of this.mensajeria) {
      this.llenarTotalesGraficas(this.dataMensajero, mensajero, 'MENSAJERIA');
    }
    for (let cliente of this.cliente) {
      this.llenarTotalesGraficas(this.dataCliente, cliente, 'CLIENTES');
    }
  }
  llenarTotalesGraficas(total, elemento, graficaElegida) {
    switch (graficaElegida) {
      case 'MENSAJERIA':
        let valuesExtraAux = total.valuesExtras;
        let valuesExtrasHover = total.valuesExtrasHover;
        let posicion1 = this.filtroMensajero.indexOf(elemento.concepto);
        total.valuesExtrasHover[posicion1][0] += elemento.totalMensajeria;
        // total.valuesExtrasHover[posicion1][0] += elemento.totalProductos;
        /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/

        // totalAux.valuesExtras[2] += elemento.monto;
        // total.valuesExtras[2] = new AccountingFormatMoney().transform( totalAux.valuesExtras[2]);
        // total.valuesExtras[1] += elemento.totalPiezas; // Total de Partidas
        // total.valuesExtras[0] += elemento.totalProductos; // Total de Productos
         total.valores[posicion1] += elemento.totalGuias; // +(elemento.monto.toFixed(2)); //Monto total
        // valuesExtrasHover[posicion1][1] += +(elemento.monto.toFixed(2));
        total.valuesExtrasHover[posicion1][1] += elemento.totalGuias;
        total.valuesExtrasHover[posicion1][2] += elemento.totalClientes;
        total.valuesExtrasHover[posicion1][3] += elemento.totalFacturas;
        setTimeout(() => {
          this.mensajeroData = true;
        }, 5);
        break;
      case 'CLIENTES':
        valuesExtraAux = total.valuesExtras;
        valuesExtrasHover = total.valuesExtrasHover;
        let posicion2 = this.filtroCliente.indexOf(elemento.concepto);
        total.valores[posicion2] += elemento.totalGuias;
        total.valuesExtrasHover[posicion2][0] += elemento.totalClientes;
        total.valuesExtrasHover[posicion2][1] += elemento.totalGuias;
        total.valuesExtrasHover[posicion2][2] += elemento.totalMensajeria;
        total.valuesExtrasHover[posicion2][3] += elemento.totalFacturas;
        /*---------Termina------*/
        setTimeout(() => {
          this.clienteData = true;
        }, 5);
        break;
      default:
        break;
    }
  }
  recargarVista(event) {
    this.vistaPrincipal = true;
    const idUsuario = SessionUser.getInstance().getUser().getIdEmpleado();
    this.datosGrafica(idUsuario);
  }
}
