import { Component, OnInit } from '@angular/core';
import {ProductosBoService} from '../../services/productos-bo/productos-bo.service';
import {CoreContainerComponent} from '../core-container/core-container.component';
import {AccountingFormatMoney} from '../../pipes/accounting/accounting.pipe';
import {Subscription} from 'rxjs/Subscription';
import {ComunService} from '../../services/comun/comun.service';
import {SessionUser} from '../../services/session/session.service';

@Component({
  selector: 'pn-productos-bo',
  templateUrl: './productos-bo.component.html',
  styleUrls: ['./productos-bo.component.scss']
})
export class ProductosBoComponent implements OnInit {

  dataBarra: any; /*= {
    labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
    values: [10, 4, 3, 2, 11, 12, 23, 12],
    barBackground: ['red', 'pink', 'orange', 'blue', 'yellow']
  };*/
  ocultarAcor: boolean;
  classAsideMenu = 'asideNormalMenu';
  itemsMenu: any[];
  /**********DATOS DE EJEMPLO GRAFICAS****/
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
    titulo: 'Clientes',
    labels: ['Totales'],
    valores: [6, 3],
    labelsExtras: [['clientes'], ['Ordenes de compra'], ['Piezas'], ['Monto']],
    labelsExtrasHover: ['clientes', 'Ordenes de compra', 'Piezas', 'Monto'],
    valuesExtras: [6, 324, 157, 5000],
    valuesExtrasHover: [[6, 3, 1, 2], [324, 157, 50, 100]]
  };
  tipoGrafica: string = 'General';
  vistaP: boolean;
  searchTerm: string;
  activarGrProv: boolean;
  /*****PRUEBA DE LISTA*****/
  lista: any[] = [/*{ nombreProv:"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 5, pagado: true},
    {  nombreProv:"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12, pagado: true},
    {  nombreProv:"PHS", "nombre": 'PQF', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 3, pagado: true},
    {  nombreProv:"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12, pagado: true},
    { nombreProv:"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 2, pagado: true},
    { nombreProv:"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12, pagado: true},
    {  nombreProv:"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11, pagado: true},
    {  nombreProv:"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 21, pagado: true},
    {  nombreProv:"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11, pagado: true},
    {  nombreProv:"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 4, pagado: true},
    {  nombreProv:"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 6, pagado: true}*/];
  listaUniverso: any[] = [/*{ nombreProv:"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 5, pagado: true},
    {  nombreProv:"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12, pagado: true},
    {  nombreProv:"PHS", "nombre": 'PQF', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 3, pagado: true},
    {  nombreProv:"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12, pagado: true},
    { nombreProv:"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 2, pagado: true},
    { nombreProv:"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12, pagado: true},
    {  nombreProv:"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11, pagado: true},
    {  nombreProv:"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 21, pagado: true},
    {  nombreProv:"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11, pagado: true},
    {  nombreProv:"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 4, pagado: true},
    {  nombreProv:"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 6, pagado: true}*/];
  totalProductos: number;
  listaBarra: any[] = [];
  activarGraficaBarra: boolean;
  listaProveedores: any;
  dataProveedores: any;
  filtroProveedores: any[] = [];
  tipoGraficaProveedores: string;
  listaLineas: any[] = [];
  activarGrLinea: boolean;
  filtroLinea: any[] = [];
  dataLineas: any;
  tipoGraficaLineas: string;
  item: any;
  cliente: string;
  activeMenu: boolean;
  subs: Subscription;
  /**************************/
  constructor(private comunService: ComunService, private _productosBO: ProductosBoService, private coreContainer: CoreContainerComponent) { }

  ngOnInit() {
    this.subs = this.comunService.recargar.subscribe(
      (data) => {
        if (data === 'productosBO') {
          this.obtenerDatos();
        }
      });
    this.vistaP = true;
    this.obtenerDatos();
  }

  regresarVistaP() {
    this.vistaP = true;
  }
  mostarOcultarAcordeon() {
    this.ocultarAcor = !this.ocultarAcor;
    if (this.ocultarAcor) {
      this.classAsideMenu = 'asideOcultarMenu';
    } else {
      this.classAsideMenu = 'asideMostrarMenu';
    }
  }

  obtenerDatos() {
    this.activarGrProv = false;
    this.activarGraficaBarra = false;
    this.totalProductos = 0;
    this.coreContainer.openModal(0);
    this._productosBO.obtenerGraficaProveedor().subscribe(
      data => {
        this.listaBarra = data.current.barra;
        this.lista = data.current.lista;
        this.listaUniverso = data.current.lista;
        for (let i = 0; i < this.listaUniverso.length; i++) {
            this.totalProductos += this.listaUniverso[i].totalProductos;
        }
        this.listaProveedores = data.current.grafica;
        const listaLineas = data.current.porFamilia;
        for (let i = 0; i < listaLineas.length; i++) {
          if (listaLineas[i].etiqueta === 'Estandares Químico' || listaLineas[i].etiqueta === 'Estandares Biológico' || listaLineas[i].etiqueta === 'Reactivos Biológico'
            || listaLineas[i].etiqueta === 'Reactivos Químico' || listaLineas[i].etiqueta === 'Labware' || listaLineas[i].etiqueta === 'Publicaciones') {
            this.listaLineas.push(listaLineas[i]);
          }
        }
        this.limpiarVariablesGrafica();
        this.calcularDatosParaGraficas();

        this.graficaBarra();
        this.coreContainer.closeModal(0);
        this.iniciarMenu(data.current['totales'].totalProductos);
    },
      error => {
        this.coreContainer.closeModal(0);
        console.log(error);
      });
  }
  iniciarMenu(totProd) {
    if (totProd === null) {
      totProd = 0;
    }
    this.itemsMenu = [
      {nombre: 'Gestionar Producto BO', url: 'productosBO', tipo: 'valor', valor: totProd},
    ];
    this.activeMenu = true;
  }
  /// Funcion de buscar en facturacion
  buscar(search) {

    const searchArrayAux: any[] = [];
    this.searchTerm = search;
    if (search == "") {
      this.lista = [...this.listaUniverso];
    } else {
      this.listaUniverso.forEach(folio => {
        if (folio.proveedor.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
          searchArrayAux.push(folio);
        }
      });
      this.lista = searchArrayAux;
    }
  }
  graficaBarra() {
    const nombres: string[] = [];
    const colores: string[] = [];
    const datos: any[] = [];
    this.listaBarra.forEach(folio => {
      nombres.push(folio.control);
      datos.push(folio.totalControlados);
      if (folio.control === 'Controlados') {
        colores.push('#DE0209');
      } else if (folio.control === 'No Controlados') {
        colores.push('#4BA92B');
      }
    });
    if (this.listaBarra.length === 1) {
      datos.push(0);
      if (this.listaBarra[0].control === 'Controlados') {
        colores.push('#4BA92B');
        nombres.push('No Controlados');
      } else if (this.listaBarra[0].control === 'No Controlados') {
        colores.push('#DE0209');
        nombres.push('Controlados');
      }
    }
    if (this.listaBarra.length > 0) {
      this.dataBarra = {
        labels: nombres,
        values: datos,
        barBackground: colores
      };
    } else {
      this.dataBarra = {
        labels: ['Controlados', 'No Controlados'],
        values: [0, 0],
        barBackground: []
      };
    }
    this.activarGraficaBarra = true;
  }
  limpiarVariablesGrafica() {
    //////// Emìeza grafica proveedores //////
    const valoresP = [] = [];
    const valoresProv = [] = [];
    for (let nombre of this.listaProveedores) {
      this.filtroProveedores.push(nombre.proveedor);
      valoresProv.push([0, 0]);
      valoresP.push(0);
    }
    if (valoresP.length > 0) {
      this.dataProveedores = {
        titulo: 'Totales',
        labels: this.filtroProveedores,
        valores: valoresP,
        labelsExtras: ['Proveedores', 'Producto'],
        labelsExtrasHover: ['Proveedores', 'Productos'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresProv,
      };
      this.tipoGraficaProveedores = 'General';
    } else {
      this.dataProveedores = {
        titulo: 'Totales',
        labels: ['Sin datos'],
        valores: [1],
        labelsExtras: ['Proveedores', 'Producto'],
        labelsExtrasHover: ['Proveedores', 'Producto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: [[0, 0]],
      };
      this.tipoGraficaProveedores = 'Gris';
      setTimeout(() => {
        this.activarGrProv = true;
      }, 5);
    }
    //////// Emìeza grafica lineas //////
    const valoresL = [] = [];
    const valoresLineas = [] = [];
    for (let nombre of this.listaLineas) {
      this.filtroLinea.push(nombre.etiqueta);
      valoresProv.push([0]);
      valoresL.push(0);
    }
    if (valoresL.length > 0) {
      this.dataLineas = {
        titulo: 'Totales',
        labels: this.filtroLinea,
        valores: valoresL,
        labelsExtras: ['Estándares Biologico', 'Estándares Químicos', 'Reactivos Biológicos', 'Reactivos Químico', 'Labware', 'Publicaciones'],
        labelsExtrasHover: ['Productos'],
        valuesExtras: [0, 0, 0, 0, 0, 0],
        valuesExtrasHover: valoresProv,
      };
      this.tipoGraficaLineas = 'General';
    } else {
      this.dataLineas = {
        titulo: 'Totales',
        labels: ['Sin datos'],
        valores: [1],
        labelsExtras: ['Estándares Biologico', 'Estándares Químicos', 'Reactivos Biológicos', 'Reactivos Químico', 'Labware', 'Publicaciones'],
        labelsExtrasHover: ['Producto'],
        valuesExtras: [0, 0, 0, 0, 0, 0],
        valuesExtrasHover: [[0]],
      };
      this.tipoGraficaLineas = 'Gris';
      setTimeout(() => {
        this.activarGrLinea = true;
      }, 5);
    }
  }
  calcularDatosParaGraficas() {
    if (this.listaProveedores.length > 0) {
      for (let proveedor of this.listaProveedores) {
        this.llenarTotalesGraficas(this.dataProveedores, proveedor, 'PROVEEDORES');
      }
    }
    if (this.listaLineas.length > 0) {
      for (let linea of this.listaLineas) {
        this.llenarTotalesGraficas(this.dataLineas, linea, 'LINEAS');
      }
    }
  }
  llenarTotalesGraficas(total, elemento, graficaElegida) {
    switch (graficaElegida) {
      case 'PROVEEDORES':

        let posicion2 = this.filtroProveedores.indexOf(elemento.proveedor);
        total.valores[posicion2] += elemento.totalProductos;

        total.valuesExtras[0] += 1;
        total.valuesExtras[1] += elemento.totalProductos;

        total.valuesExtrasHover[posicion2][0] += 1;
        total.valuesExtrasHover[posicion2][1] = elemento.totalProductos;
        /*---------Termina------*/
        setTimeout(() => {
          this.activarGrProv = true;
        }, 5);
        break;
      case 'LINEAS':

        const posicion1 = this.filtroLinea.indexOf(elemento.etiqueta);

        total.valores[posicion1] += elemento.totalProductos;
        if (elemento.etiqueta === 'Estandares Químico') {
          total.valuesExtras[1] += elemento.totalProductos;
        } else if (elemento.etiqueta === 'Estandares Biológico') {
          total.valuesExtras[0] += elemento.totalProductos;
        } else if (elemento.etiqueta === 'Reactivos Biológico') {
          total.valuesExtras[2] += elemento.totalProductos;
        } else if (elemento.etiqueta === 'Reactivos Químico') {
          total.valuesExtras[3] += elemento.totalProductos;
        } else if (elemento.etiqueta === 'Labware') {
          total.valuesExtras[4] += elemento.totalProductos;
        } else if (elemento.etiqueta === 'Publicaciones') {
          total.valuesExtras[5] += elemento.totalProductos;
        }
        total.valuesExtrasHover[posicion1][0] = elemento.totalProductos;
        /*---------Termina------*/
        setTimeout(() => {
          this.activarGrLinea = true;
        }, 5);
        break;
    }
  }
  seleccionarItem(i, item) {
    console.log(item);
    this.item = item;
    this.cliente = item.proveedor;
    this.vistaP = false;
  }
  vistaPrincipal(valor) {
    if (valor === false) {
      this.regresarVistaP();
    } else if (valor === true) {
      this.obtenerDatos();
    }
  }
  cargarVistaP() {
    this.regresarVistaP();
    this.obtenerDatos();
  }
}
