import { Component, OnInit } from '@angular/core';
import {AsuntosRegulatoriosService} from '../../services/asuntos-regulatorios/asuntos-regulatorios.service';
import {SessionUser} from '../../services/session/session.service';
import {CoreContainerComponent} from '../core-container/core-container.component';
import {Query} from '../../class/compras/utils/query.class';
import {AccountingFormatMoney} from '../../pipes/accounting/accounting.pipe';
import {Subscription} from 'rxjs/Subscription';
import {ComunService} from '../../services/comun/comun.service';

@Component({
  selector: 'pn-asuntos-regulatorios',
  templateUrl: './asuntos-regulatorios.component.html',
  styleUrls: ['./asuntos-regulatorios.component.scss']
})
export class AsuntosRegulatoriosComponent implements OnInit {
  ocultarAcor: boolean;
  classAsideMenu = 'asideNormalMenu';
  itemsMenu: any[];
  dataFacturacion: any = {
    titulo: 'Clientes',
    labels: ['Totales'],
    valores: [6, 3],
    labelsExtras: [['clientes'], ['Ordenes de compra'], ['Piezas'], ['Monto']],
    labelsExtrasHover: ['clientes', 'Ordenes de compra', 'Piezas', 'Monto'],
    valuesExtras: [6, 324, 157, 5000],
    valuesExtrasHover: [[6, 3, 1, 2], [324, 157, 50, 100]]
  };
  dataFacturacion2: any = {
    titulo: 'Productos',
    labels: ['Totales'],
    valores: [6],
    labelsExtras: [['clientes'], ['Ordenes de compra']],
    labelsExtrasHover: ['clientes', 'Ordenes de compra'],
    valuesExtras: [6, 324],
    valuesExtrasHover: [[6, 3], [324, 157]]
  };
  lista: any[] = []; /*[] = [{ 'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 5},
    {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
    {  'referencia':"PHS", "nombre": 'PQF', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 3},
    {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
    { 'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 2},
    { 'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
    {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11},
    {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 21},
    {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11},
    {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 4},
    {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 6}];*/
  grafica = true;
  grafica1 = true;
  searchTerm: string; /// Almacena la letra o letras que se van a buscar en la lista cuando se usa la barra de busqueda
  clientesSearched: any[];
  clientes: any[] = [];
  listaUniverso: any[] = [];
  validarLista: boolean = true;
  Vistafacturacion: boolean = true; /// VARIABLE PARA VISUALIZAR LA PRIMER VISTA DE FACTURACION
  activarVistaOrdenesComp: boolean;
  precio = '$15,000.000';
  fecha = '12/Dic/2018';
  fecha2 = '12/Jun/2019';
  total: number;
  totPiezas: number;
  montoTot: number;
  graficas: any;
  listaProductos: any;
  listaClientes: any;
  dataProducto: any;
  dataProductoAux: any;
  filtroProducto: any[] = [];
  tipoGraficaProducto: string;
  ProductoData: boolean;
  dataClienteAux: any;
  dataCliente: any;
  tipoGraficaCliente: string;
  clienteData: boolean;
  filtroCliente: any[] = [];
  vistaPrincipal: boolean = true;
  vistaDocumento: boolean;
  quitarWith: boolean = true;
  datosProducto: any[] = [];
  tipoOrden: string;
  cabeceraClient: string;
  activeMenu: boolean;
  subs: Subscription;
  constructor(private comunServe: ComunService , private _serviceAsuntos: AsuntosRegulatoriosService,  private coreComponent: CoreContainerComponent) { }

  ngOnInit() {
    const idUsuario = SessionUser.getInstance().getUser().getIdEmpleado();
    this.subs = this.comunServe.recargar.subscribe(
      data => {
        if (data === 'asuntosRegulatorios') {
          this.searchTerm = '';
          this.activeMenu = false;
          this.getPendietesPAP(idUsuario);
        }
      });
    this.getPendietesPAP(idUsuario);
    /*for (let i: number = 0; i < this.lista.length; i++) {
      this.clientes.push(this.lista[i]);
    }*/
  }
  mostarOcultarAcordeon() {
    this.ocultarAcor = !this.ocultarAcor;
    if (this.ocultarAcor) {
      this.classAsideMenu = 'asideOcultarMenu';
      this.quitarWith = false;
    } else {
      this.classAsideMenu = 'asideMostrarMenu';
      this.quitarWith = true;
    }
  }
  regresarVistaP() {
    this.cabeceraClient = '';
    this.vistaPrincipal = true;
    this.vistaDocumento = false;
  }
  seleccionarItem($index, item) {
    // this.datosProducto = this.lista[$index];
    // this.cabeceraClient = this.lista[$index].cliente;
    this.datosProducto = item;
    this.cabeceraClient = item.cliente;
    this.vistaPrincipal = false;
    this.vistaDocumento = true;
    console.log('Soy clic -->', $index);
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
        if (folio.cliente.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || folio.sustancia.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
          searchArrayAux.push(folio);
        }
      });
      this.lista = searchArrayAux;
    }

    if (this.tipoOrden === 'Alfabético (A-Z)') {
      this.ordenamientoCliente();
    } else if (this.tipoOrden === 'Trámites Más Nuevos') {
      this.ordenamientoFechaTramNue();
    } else if (this.tipoOrden === 'Trámites Más Antiguos') {
      this.ordenamientoFechaTramAnt();
    }
  }
  getPendietesPAP(idUsuario) {
    this.lista = [];
    this.listaUniverso = [];
    this.totPiezas = 0;
    this.montoTot = 0;
    let montoTot = 0;
    this.coreComponent.openModal(0);
    this._serviceAsuntos.getPendietesPAP(idUsuario).subscribe(
      data => {
          let listaAux = data.current.lista;
          if (data.current.graficas.Productos !== undefined) {
            this.graficas = data.current.graficas;
          } else {
            this.graficas = [];
          }
          let presentacion: string;
          let monto = 0;
          let FT: string;
          let FEE: string;
            let FTAux: string;
            let FEEAux: string;
            let FtFormat: string;
            let precioUnit: any;
          for (let i = 0; i < listaAux.length; i++) {
            FTAux = listaAux[i].ftramite.split('-');
            FT = FTAux[0] + '/' + FTAux[1] + '/' + FTAux[2].split('T')[0];
            FtFormat =  FTAux[0] + '-' + FTAux[1] + '-' + FTAux[2].split('T')[0];
            FTAux = this.transform(FT);
            FEEAux = listaAux[i].fee.split('-');
            FEE = FEEAux[0] + '/' + FEEAux[1] + '/' + FEEAux[2].split('T')[0];
            FEEAux = this.transform(FEE);
              presentacion = listaAux[i].cantidad + listaAux[i].unidad;
              // monto = new AccountingFormatMoney().transform(listaAux[i].monto);
              precioUnit = new AccountingFormatMoney().transform(listaAux[i].precio);
            this.lista.push({cliente: listaAux[i].cliente, sustancia: listaAux[i].concepto, piezas: listaAux[i].piezas, presentacion: presentacion,
                            monto: listaAux[i].monto, ft: FTAux, fee: FEEAux, precioUnit: precioUnit, fechaOriginal: listaAux[i].ftramite,
                            idPPedido: listaAux[i].idPPedido, ftFormat: FtFormat, idPedido: listaAux[i].idPedido, cpedido: listaAux[i].cpedido});
            this.listaUniverso.push({cliente: listaAux[i].cliente, sustancia: listaAux[i].concepto, piezas: listaAux[i].piezas, presentacion: presentacion,
              monto: listaAux[i].monto, ft: FTAux, fee: FEEAux, precioUnit: precioUnit, fechaOriginal: listaAux[i].ftramite,
              idPPedido: listaAux[i].idPPedido, ftFormat: FtFormat, idPedido: listaAux[i].idPedido, cpedido: listaAux[i].cpedido});
            this.totPiezas += listaAux[i].piezas;
            montoTot += listaAux[i].monto;
          }
         /* this.lista = [{cliente: 'Ber', cant: 2, ftFormat: '2001-02-12'},
            {cliente: 'arroz', cant: 4, ftFormat: '1998-12-01'}, {cliente: 'clt', cant: 4, ftFormat: '1998-12-15'}];
          console.log('Soy lista -->', this.lista);
          this.ordenamientoCliente();*/
            console.log('Soy lista -->', this.lista);
            /****************************/
            for (let i: number = 0; i < this.lista.length; i++) {
              this.clientes.push(this.lista[i]);
            }
            /**********************************/
          this.montoTot = new AccountingFormatMoney().transform(montoTot);
          this.total = this.lista.length;
          this.iniciarMenu(this.total);
          this.llenarGraficas(this.graficas);
      this.coreComponent.closeModal(0);
    });
  }
  iniciarMenu(totProd) {
    this.itemsMenu = [
      {rol: 'ASISTENTE REGULATORIO', active: true, menu: [
          {nombre: 'Gestionar Carga PAP', url: 'asuntosRegulatorios', tipo: 'valor', valor: totProd, select: true}
        ]}];
    this.activeMenu = true;
  }
  ordenamientoCliente() {
    this.tipoOrden = 'Alfabético (A-Z)';
    this.lista.sort(function (a, b) {
      if (a.cliente.toLowerCase() > b.cliente.toLowerCase()) {
        return 1;
      }
      if (a.cliente.toLowerCase() < b.cliente.toLowerCase()) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  ordenamientoFechaTramNue() {
    this.tipoOrden = 'Trámites Más Nuevos';
    this.lista.sort(function (a, b) {
      if (a.ftFormat < b.ftFormat) {
        return 1;
      }
      if (a.ftFormat > b.ftFormat) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    let fecha1 = new Date();
    let fecha2 =  new Date();
  }
  ordenamientoFechaTramAnt() {
    this.tipoOrden = 'Trámites Más Antiguos';
    this.lista.sort(function (a, b) {
      if (a.ftFormat > b.ftFormat) {
        return 1;
      }
      if (a.ftFormat < b.ftFormat) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
  llenarGraficas(lista) {
    this.limpiarVariables();
    if (lista.Productos !== undefined) {
      setTimeout(() => {
        this.ProductoData = false;
        this.clienteData = false;
      }, 5);
      this.listaProductos = lista['Productos'];
      this.listaClientes = lista['Clientes'];
      this.limpiarVariablesGrafica();
      this.calcularDatosParaGraficas();
    } else {
      this.listaProductos = [];
      this.listaClientes = [];
      this.limpiarVariablesGrafica();
    }
  }
  limpiarVariables() {
    this.filtroProducto = [];
    this.filtroCliente = [];
    this.ProductoData = false;
    this.clienteData = false;
  }
  limpiarVariablesGrafica() {
    //////// Emìeza grafica productos //////
    let valoresP  = [] = [];
    let valoresProductos = [] = [];
    if (this.listaProductos.length > 0) {
      for (let nombre of this.listaProductos) {
        this.filtroProducto.push(nombre.nombre);
        valoresProductos.push([0, 0]);
        valoresP.push(0);
      }
    }
    if (valoresP.length > 0) {
      this.dataProducto = {
        titulo: 'Totales',
        labels: this.filtroProducto,
        valores: valoresP,
        labelsExtras: ['Productos', 'Piezas' , 'Monto'],
        labelsExtrasHover: ['Piezas' , 'Monto'],
        valuesExtras: [0, 0, 0],
        valuesExtrasHover: valoresProductos,
      };
      this.dataProductoAux = {
        titulo: 'Totales',
        labels: this.filtroProducto,
        valores: valoresP,
        labelsExtras: ['Productos', 'Piezas' , 'Monto'],
        labelsExtrasHover: [ 'Piezas' , 'Monto'],
        valuesExtras: [0, 0, 0],
        valuesExtrasHover: valoresProductos,
      };
      this.tipoGraficaProducto = 'General';
    } else {
      this.dataProducto = {
        titulo: 'Totales',
        labels: this.filtroProducto,
        valores: [1],
        labelsExtras: ['Productos', 'Piezas' , 'Monto'],
        labelsExtrasHover: [ 'Piezas' , 'Monto'],
        valuesExtras: [0, 0, 0],
        valuesExtrasHover: [[0, 0]],
      };
      this.tipoGraficaProducto = 'Gris';
      setTimeout(() => {
        this.ProductoData = true;
      }, 5);
    }
    //////// Emìeza grafica Cliente //////
    let valoresC  = [] = [];
    let valoresClientes = [] = [];
    if(this.listaClientes.length > 0) {
      for (let nombre of this.listaClientes) {
        this.filtroCliente.push(nombre.nombre);
        valoresClientes.push([0, 0, 0]);
        valoresC.push(0);
      }
    }
    if (valoresC.length > 0) {
      this.dataCliente = {
        titulo: 'Totales',
        labels: this.filtroCliente,
        valores: valoresC,
        labelsExtras: ['Productos', 'Piezas' , 'Monto'],
        labelsExtrasHover: ['Productos', 'Piezas' , 'Monto'],
        valuesExtras: [0, 0, 0],
        valuesExtrasHover: valoresClientes,
      };
      this.dataClienteAux = {
        titulo: 'Totales',
        labels: this.filtroProducto,
        valores: valoresC,
        labelsExtras: ['Productos', 'Piezas' , 'Monto'],
        labelsExtrasHover: ['Productos', 'Piezas' , 'Monto'],
        valuesExtras: [0, 0, 0],
        valuesExtrasHover: valoresClientes,
      };
      this.tipoGraficaCliente = 'General';
    } else {
      this.dataCliente = {
        titulo: 'Totales',
        labels: this.filtroCliente,
        valores: [1],
        labelsExtras: ['Productos', 'Piezas' , 'Monto'],
        labelsExtrasHover: ['Productos', 'Piezas' , 'Monto'],
        valuesExtras: [0, 0, 0],
        valuesExtrasHover: [[0, 0, 0]],
      };
      setTimeout(() => {
        this.tipoGraficaCliente = 'Gris';
        this.clienteData = true;
      }, 5);

    }
  }
  calcularDatosParaGraficas() {
    for (let productos of this.listaProductos) {
      this.llenarTotalesGraficas(this.dataProducto, productos, 'PRODUCTOS', this.dataProductoAux);
    }
    for (let productos of this.listaClientes) {
      this.llenarTotalesGraficas(this.dataCliente, productos, 'CLIENTES', this.dataClienteAux);
    }
  }
  llenarTotalesGraficas(total, elemento, graficaElegida, totalAux) {
    switch (graficaElegida) {
      case 'PRODUCTOS':
        let valuesExtraAux = total.valuesExtras;
        let valuesExtrasHover = total.valuesExtrasHover;
        let posicion1 = this.filtroProducto.indexOf(elemento.nombre);
        total.valuesExtrasHover[posicion1][0] += elemento.totalPiezas;
        // total.valuesExtrasHover[posicion1][0] += elemento.totalProductos;
        /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/

        totalAux.valuesExtras[2] += elemento.monto;
        total.valuesExtras[2] = new AccountingFormatMoney().transform( totalAux.valuesExtras[2]);
        total.valuesExtras[1] += elemento.totalPiezas; // Total de Partidas
        total.valuesExtras[0] += elemento.totalProductos; // Total de Productos
        total.valores[posicion1] += elemento.monto; // +(elemento.monto.toFixed(2)); //Monto total
        valuesExtrasHover[posicion1][1] += +(elemento.monto.toFixed(2));
        total.valuesExtrasHover[posicion1][1] = new AccountingFormatMoney().transform(valuesExtrasHover[posicion1][1]);
        setTimeout(() => {
          this.ProductoData = true;
        }, 5);
        break;
      case 'CLIENTES':
        valuesExtraAux = total.valuesExtras;
        valuesExtrasHover = total.valuesExtrasHover;
        let posicion2 = this.filtroCliente.indexOf(elemento.nombre);

        total.valuesExtrasHover[posicion2][1] += elemento.totalPiezas;
        total.valuesExtrasHover[posicion2][0] += elemento.totalProductos;
        /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/

        totalAux.valuesExtras[2] += elemento.monto;
        total.valuesExtras[2] = new AccountingFormatMoney().transform( totalAux.valuesExtras[2]);
        total.valuesExtras[1] += elemento.totalPiezas; // Total de Partidas
        total.valuesExtras[0] += elemento.totalProductos; // Total de Productos
        total.valores[posicion2] += elemento.monto; // +(elemento.monto.toFixed(2)); //Monto total
        valuesExtrasHover[posicion2][2] += +(elemento.monto.toFixed(2));
        total.valuesExtrasHover[posicion2][2] = new AccountingFormatMoney().transform(valuesExtrasHover[posicion2][2]);
        /*---------Termina------*/
        setTimeout(() => {
          this.clienteData = true;
        }, 5);
        break;
      default:
        break;
    }
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
  /*****/
   abreCombo() {
    if (document.getElementById("section").className == "visible") {
      document.getElementById("section").className = "";
    } else {
      document.getElementById("section").className = "visible";
    }
  }
  recargarVista(val) {
     if (val) {
       this.cabeceraClient = '';
       const idUsuario = SessionUser.getInstance().getUser().getIdEmpleado();
       this.getPendietesPAP(idUsuario);
       this.vistaPrincipal = true;
       this.vistaDocumento = false;
     }
  }
}
