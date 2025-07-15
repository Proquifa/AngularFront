import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementFilter } from '../../../shared/filter/element.model';
import { Parametros } from '../../../../class/Parametros.class';
import { FormGroup, FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { GestionService } from '../../../../services/gestion/gestion.service';
import { CoreContainerComponent } from '../../../core-container/core-container.component';
import { ComprasService } from '../../../../services/gestion/consulta/compras/compras.service';
import { AccountingFormatMoney, dateFormatSlash } from '../../../../pipes/accounting/accounting.pipe';
import { Chart } from 'chart.js';
import { element } from 'protractor';
@Component({
  selector: 'pn-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {
  montototalGraficaDetalle=0;

  CompraDetalle: any = {
    nombreProveedor: "",
    clave: "123",

  };

  nPartidas=0;
  detalle: boolean = false;
  classPanel: string = "panelNormal";
  hiddenClose: boolean = true;
  TotalPiezasPartidasDetalle:number=0;
  hiddenClose2: boolean = true;
  lstRadiosRapida: string [] = ['Factura', 'Pedido', 'UUID'];
  Proveedores: any[];
  avanzada: Boolean = true;
  lineaSeleccionada = 0;
  PartidaSeleccionada = 0;
  date: Date;
  date2: Date;
  isTableShow = true;
  itemsDropList: any[] = [{ nombre: '- - Todos - -' }, { nombre: 'nombre1' }, { nombre: 'nombre2' }];
  defaultSelected: any = { nombre: '- - Todos - -' };
  filtroForm: FormGroup;
  txtFactura: String;
  isThereData: boolean = false;
  public ruta = "assets/Images/gestion/images/reload2.svg";
  lstCompras: any[] = [];
  Clear: boolean = true;;
  IsDate: boolean = true;
  Elements: ElementFilter[];
  lstClientes: any[] = [];
  lstComprasXGrafica: any[] = [];
  lstCobradores: any[];
  lstPartidas: any[] = [];
  lstCompraEsp: any[] = [];
  date3 = new Date();
  date4 = new Date();
  lstTiempoProceso: any[] = [];
  DatosFill1 = {
    Fechas: {

      fechaInicial: new Date(),
      fechaFinal: new Date(),
    }
  };

  graficoCargado=false;
  refresh: boolean = false;;
  valoresG1; EtiquetasG1;
  TotalesG1;
  Grafico1; EtiquetasG2;
  valoresG3; EtiquetasG3;
  valoresG4; EtiquetasG4;
  valoresG5; EtiquetasG5;
  id1 = "g1";
  id2 = "g1234";
  IsImage: boolean = true;
  dropClientes: any[] = [{ nombre: '--TODOS--', key: 0 }];
  dropCobrador: any[] = [{ nombre: '--TODOS--', key: 0 }];
  public Estadisticos = { totalpartidas: 0, totalpiezas: 0, totalcompras: 0 };

  public Estad;
  public lstSinSeparar: any[];
  Llenar = () => {
    let newListProveedor: any[] = [];
    for (var item of this.Proveedores) {

      if (item.nombre != null) { newListProveedor.push(item) }

    }
    this.Proveedores = newListProveedor;

    this.Elements = [new ElementFilter("string", "Proveedor", this.Proveedores, true),
    new ElementFilter("string", "Compró", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Golocaer', key: 1 },
      { nombre: 'Mungen', key: 2 },
      { nombre: 'Pharma', key: 3 },
      { nombre: 'Proquifa', key: 4 },
      { nombre: 'Proveedora', key: 5 },
      { nombre: 'RM trading', key: 6 }
    ], false),
    new ElementFilter("string", "Estado", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Cerrado', key: 1 },
      { nombre: 'Abierto', key: 2 },


    ], false),
    ]
    //isThereData indica que ya no es necesario mostrar el loader
    this.isThereData = true;
    this.Clear = false;
  }
  constructor(private router: Router, private _gestionService: GestionService, private coreComponent: CoreContainerComponent,
    private _comprasService: ComprasService) { }



  Avanzada(Datos) {
    console.log(Datos);



    this.coreComponent.openModal(0);
    let parametros: Parametros = new Parametros();

    parametros.finicio = Datos.Fechas.fechaInicial;
    parametros.ffin = Datos.Fechas.fechaFinal;
    parametros.idUsuario = 0;
    parametros.coloco = 0;
    if (Datos.Datos[0].nombre == "--TODOS--") {
      parametros.proveedor = 0;
    } else {
      parametros.proveedor = Datos.Datos[0].key;
    }


    if (Datos.Datos[1].nombre == "--TODOS--") {
      parametros.empresaCompra = "";
    } else {
      parametros.empresaCompra = Datos.Datos[1].nombre;
    }

    if (Datos.Datos[2].nombre == "--TODOS--") {
      parametros.estadoInt = 0;
    } else {
      parametros.estadoInt = Datos.Datos[2].key;
    }

    parametros.ordenCompra = "";
    parametros.usuario = 91;




    this._comprasService.consultarCompras(parametros).subscribe(


      data => {

        this.lstCompras = data.current;

        console.log(data.current)
        this.lstCompras = this.eliminarObjetosDuplicados(data.current, 'clave');
        this.lstSinSeparar = data.current;
        console.log(this.lstCompras);


        this.coreComponent.closeModal(0);
      }, error => {
        console.log("error compras");
        console.log(error);
        this.coreComponent.closeModal(0);
      }

    )






    this._comprasService.consultarGraficaXCompra(parametros).subscribe(
      data => {
        let ComprasXGrafica = data.current;
        console.log(ComprasXGrafica)


        this.SepararProveedores(ComprasXGrafica);



        this.coreComponent.closeModal(0);
      }, error => {
        console.log("error compras");
        console.log(error);
        this.coreComponent.closeModal(0);
      }

    )

    this.refresh = true;

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



    this.Estadisticos.totalcompras = nuevoArray.length;
    return nuevoArray;
  }



  obtenerTotales() {

    let total_partidas = 0;
    let total_compras = 0;
    this.lstSinSeparar.forEach(element => {
      total_partidas = total_partidas + element.totalPartidas;


    });
    this.Estadisticos.totalpartidas = total_partidas;


    console.log(this.Estadisticos);

  }

  ngOnInit() {
    this.coreComponent.openModal(0);
    this.filtroForm = new FormGroup({
      filtroDato: new FormControl()
    });

    this.date = new Date();
    this.date2 = new Date();
    this.coreComponent.openModal(0);
    let parametros: Parametros = new Parametros();
    parametros.finicio = new Date();
    parametros.ffin = new Date();
    parametros.proveedor = 0;
    parametros.estadoInt = 0;
    parametros.ordenCompra = "";
    parametros.usuario = 0;
    parametros.empresaCompra = "";
    parametros.coloco = 0;
    parametros.idUsuarioLogueado = 91;
    parametros.cobrador = 0;
    parametros.idUsuario = 0;

    let param: Parametros = new Parametros; param.valorAdicional = "";
    // this.consultaAvanzadaFacturacion(parametros);
    this.coreComponent.openModal(0);
    this._comprasService.consultarProveedores(param).subscribe(
      data => {
        this.Proveedores = data.current;

        let lstAux: any[] = [];

        lstAux.push({ nombre: '--TODOS--', key: 0 })
        for (var item of data.current) {
          lstAux.push({ nombre: item.valor, key: item.llave })
        }
        this.Proveedores = this.Proveedores.concat(lstAux);
        this.Llenar();
      },
      error => {
        console.log("error login");
        console.log(error);
      }
    );


    this._comprasService.consultarCompras(parametros).subscribe(
      data => {

        this.lstCompras = this.eliminarObjetosDuplicados(data.current, 'clave');
        this.lstSinSeparar = data.current;

        this.obtenerTotales();

        console.log(data.current)
        console.log(this.Estadisticos)

      }, error => {
        console.log("error compras");
        console.log(error);
        this.coreComponent.closeModal(0);
      }

    )



    this._comprasService.consultarGraficaXCompra(parametros).subscribe(
      data => {
        let ComprasXGrafica = data.current;
        console.log(ComprasXGrafica)


        this.SepararProveedores(ComprasXGrafica);



        this.coreComponent.closeModal(0);
      }, error => {
        console.log("error compras");
        console.log(error);
        this.coreComponent.closeModal(0);
      }

    )



  }
  ContarRepetidos(ComprasXGrafica, proveedor) {
    let compras = 0;
    ComprasXGrafica.forEach(element => {
      if (proveedor.nombreProveedor == element.nombreProveedor) {

        compras = compras + 1;
      }

    });
    return compras;
  }

  SepararProveedores(ComprasXGrafica) {

    console.log("ComprasXGrafica");
    console.log(ComprasXGrafica);
    let PorProveedor = this.eliminarObjetosDuplicados(ComprasXGrafica, 'nombreProveedor');
    let Estad = [];
    let PorClave = this.eliminarObjetosDuplicados(ComprasXGrafica, 'clave');
    let Arre = [PorProveedor.length]

    console.log("Proveedor" + " ========================================loremp");
    console.log(PorProveedor);

    PorProveedor.sort(function (a, b) {
      return (b.montoTotalDolares - a.montoTotalDolares)
    })
    if (PorProveedor.length > 11) {
      console.log("Entro");
      let ArreAuxiliar = PorProveedor.slice(0, 10);
      PorProveedor = ArreAuxiliar;
    }

    console.log("Proveedor Mochados" + " ========================================loremp");
    console.log(PorProveedor);
    PorProveedor.forEach(Proveedor => {
      let datos = {
        partidas: 0,
        Proveedor: '',
        NCompras: 0,
        totalpiezas: 0,
        montoTotalDolares: 0,
      }
      ComprasXGrafica.forEach(element => {
        if (Proveedor.nombreProveedor == element.nombreProveedor) {

          datos.partidas = datos.partidas + element.totalPartidas;
          datos.Proveedor = element.nombreProveedor;
          datos.NCompras = this.ContarRepetidos(ComprasXGrafica, element);
        }
      });

      let totalpiezas = 0;
      let totalDolares = 0;
      PorClave.forEach(element => {

        if (Proveedor.nombreProveedor == element.nombreProveedor) {

          totalpiezas = totalpiezas + element.totalPiezas;
          totalDolares = totalDolares + element.montoTotalDolares;
        }

      })
      datos.totalpiezas = totalpiezas;
      datos.montoTotalDolares = totalDolares;
      Estad.push(datos);


    });
    console.log(PorProveedor);

    console.log(Estad);

    console.log(Estad.length);

    this.Estad = Estad;


    Estad.sort(function (a, b) {
      return (b.montoTotalDolares - a.montoTotalDolares)
    })
    if (Estad.length > 10) {
      console.log("Entro");
      let ArreAuxiliar = Estad.slice(0, 10);
      Estad = ArreAuxiliar;
    }
    console.log(Estad);

    let Valores = [];
    let Etiquetas = [];
    let partidas = 0;
    let totalpiezas = 0;
    let totalmonto = 0;
    let compras = 0;

    Estad.forEach(element => {
      Valores.push(element.montoTotalDolares);

      Etiquetas.push("" + element.Proveedor);

      partidas = partidas + element.partidas;
      totalpiezas = totalpiezas + element.totalpiezas;
      totalmonto = totalmonto + element.montoTotalDolares;


    });



    let TotalesG1 = {
      partidas: partidas,
      totalpiezas: totalpiezas,
      totalmonto: totalmonto.toFixed(2),
      compras: compras = PorClave.length,

    }
    this.Grafico1 = {
      valores: Valores, etiquetas: Etiquetas, totales: TotalesG1
    };
    console.log(this.Grafico1);

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

      if(this.graficoCargado){
        console.log(this.graficoCargado);
      setTimeout((datos={valores:[]})=>{this.donita2(datos);},1000)
      }
    }
  }

  emitItem($event) {
    console.log($event);
  }

  filtroAvanzada() {
    this.avanzada = true;
  }

  filtroRapida() {
    this.avanzada = false;
  }

  getFechaImpl($event) {
    //console.log($event);
  }

  dropList(index, $event) {

  }
  ConsultaEspecifica(txtFactura) {
    let parametros: Parametros = new Parametros();

    parametros.finicio = null;
    parametros.ffin = null;
    parametros.proveedor = 0;
    parametros.estadoInt = 0;
    parametros.ordenCompra = txtFactura;
    parametros.usuario = 0;
    parametros.empresaCompra = "";

    parametros.idUsuarioLogueado = 91;
    parametros.cobrador = 0;

    this.coreComponent.openModal(0);
    this._comprasService.consultarCompras(parametros).subscribe(


      data => {

        this.lstCompras = this.eliminarObjetosDuplicados(data.current, 'clave');
        this.lstSinSeparar = data.current;
        console.log(data.current)
        this.coreComponent.closeModal(0);
      }, error => {
        console.log("error compras");
        console.log(error);
        this.coreComponent.closeModal(0);
      }

    )
    console.log(txtFactura);
  }

  mostrarDatos($event) {
    this.DatosFill1 = $event;
    this.Avanzada($event);
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



  // Función de descarga de archivo CSV 
  download() {
    let lstCompras2: any[] = [];

    this.lstCompras.forEach((compra, index) => {
      let ObjAux = {
        '#': (index + 1),
        OC: compra.clave,
        Proveedor: compra.empresa,
        Colocó: compra.colocarDesde,
        Comprador: compra.comprador,
        Estado: compra.estado


      }

      lstCompras2.push(ObjAux);

    });

    var csvData = this.ConvertToCSV(lstCompras2);
    var a = document.createElement("a");
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    var blob = new Blob([csvData], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'ConsultaCompras-' + this.fechaDescarga(new Date()) + '.csv';
    a.click();
  }

  fechaDescarga(fechaE) {
    let now = new Date(fechaE);
    let date: String;
    let mes: number = now.getMonth();
    switch (mes) {
      case 0:
        date = now.getDate() + 'Ene' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
        break;
      case 1:
        date = now.getDate() + 'Feb' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
        break;
      case 2:
        date = now.getDate() + 'Mar' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
        break;
      case 3:
        date = now.getDate() + 'Abr' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
        break;
      case 4:
        date = now.getDate() + 'May' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
        break;
      case 5:
        date = now.getDate() + 'Jun' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
        break;
      case 6:
        date = now.getDate() + 'Jul' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
        break;
      case 7:
        date = now.getDate() + 'Ago' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
        break;
      case 8:
        date = now.getDate() + 'Sep·' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
        break;
      case 9:
        date = now.getDate() + 'Oct' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
        break;
      case 10:
        date = now.getDate() + 'Nov' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
        break;
      case 11:
        date = now.getDate() + 'Dic' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
        break;
      default:
        break;
    }

    return date;
  }



  regresarConsulta() {
    this.detalle = false;
  }

  //=========/Apartado para graficos===============/////
  showGraphic() {
    this.isTableShow = false;


  }
  showTable() {
    this.isTableShow = true;
  }

  verDetalle(item) {

    this.CompraDetalle = item;
    this.detalle = true;


    this.obtenerPartidasEsp(this.CompraDetalle.clave);

    //this.obtenerComprasPClave(this.CompraDetalle.clave);

    console.log("COmpra detale ->>>>>")
    console.log(this.CompraDetalle);


  }


  obtenerComprasPClave(clave) {

    console.log(clave);



    this.coreComponent.openModal(0);
    let parametros: Parametros = new Parametros();

    parametros.finicio = this.DatosFill1.Fechas.fechaInicial;
    parametros.ffin = this.DatosFill1.Fechas.fechaFinal;
    parametros.idUsuario = 0;
    parametros.coloco = 0;
    parametros.proveedor = 0;
    parametros.empresaCompra = "";
    parametros.estadoInt = 0;
    parametros.ordenCompra = clave;
    parametros.usuario = 91;

    this._comprasService.consultarCompras(parametros).subscribe(


      data => {

        this.lstCompraEsp = data.current;

        console.log(data.current)

        this.coreComponent.closeModal(0);
      }, error => {
        console.log("error comprasEsp");
        console.log(error);
        this.coreComponent.closeModal(0);
      }

    )



    this.refresh = true;


  }
x

  obtenerPartidasEsp(clave) {
    let parametros: Parametros = new Parametros();
    this.coreComponent.openModal(0);
    parametros.ordenCompra = clave;

    this._comprasService.consultaPartidasPorCompraEspecifica(parametros).subscribe(
      data => {

        this.lstPartidas = data.current
        this.obtenerTiempoProceso(this.lstPartidas[0].compra, this.lstPartidas[0].idPartidaCompra);
        this.obtenerTotales();

        console.log(data.current)

      setTimeout(()=>{this.ObtenerDatosGraficaDetalle()},1000);

      }, error => {
        console.log("error compras");
        console.log(error);
        this.coreComponent.closeModal(0);
      }

    )




  }

  ObtenerDatosGraficaDetalle(){

let datos={
  valores:[]

}
let pzas=0;
let et=0;
let ft=0;
let total=0;
    this.lstPartidas.forEach(element => {
      console.log(element.estado)
     if(element.estado=="Recibido"){

      et=et+element.montoTotal;
     
     }else{

      if(element.estado=="BackOrder"){

        ft=ft+element.montoTotal;
     
      }
     }
     pzas= pzas+ element.totalPiezas;
     total=total+element.montoTotal;
    });
    console.log("se muestran los datos ET VS FT");
    console.log(datos);

   this.montototalGraficaDetalle=total;
this.TotalPiezasPartidasDetalle= pzas;
   this.nPartidas= this.lstPartidas.length;
   if(et==0&&ft==0){et=total}
datos.valores.push(et);
datos.valores.push(ft);
    this.donita2(datos);
  }

  resumenFactura(pos) {

    this.PartidaSeleccionada = pos;
    this.obtenerTiempoProceso(this.lstPartidas[pos].compra, this.lstPartidas[pos].idPartidaCompra);



  }

  obtenerTiempoProceso(ordenCompra, idPCompra) {
    let parametros: Parametros = new Parametros();
    parametros.ordenCompra = ordenCompra;
    parametros.idPCompra = idPCompra;

    this.coreComponent.openModal(0);


    this._comprasService.obtenerTiempoProcesoPorPartida(parametros).subscribe(
      data => {
        let arrayaux = [];
        data.current.forEach(element => {
          if (element.nivel == 1) {
            arrayaux.push(element)

          }
        });
        this.lstTiempoProceso = arrayaux;
        console.log(data.current)

        console.log(this.lstTiempoProceso);
        this.coreComponent.closeModal(0);

      }, error => {
        console.log("error compras");
        console.log(error);
        this.coreComponent.closeModal(0);
      }

    )



  }

  SeleccionarLinea(i) {

    this.lineaSeleccionada = i;
    console.log(this.lstTiempoProceso[i])
  }

  descargarPDF(archivo: string) {
    console.log(archivo);
    const BrowserWindow = electron.remote.BrowserWindow;
    let newWin = new BrowserWindow({ width: 800, height: 600 })
    PDFWindow.addSupport(newWin)
    newWin.loadURL(archivo);
  }



  donita2(datos: any) {

this.graficoCargado=true;
    console.log("Dentro de Donita")
    let colores = ["#94BA13 ", "#0098DA "];
    let etiquetas = ["Total"];


    let coloresP = ["#439DC1", "#C5792E ", "#2C9484 ", "#E34B43 ", "#CC3185", "#A9CA4E", "#524B96", "#EFCD50", "#a33532", "5d90dc"];
    etiquetas = ["ET","FT"];
    let valores = datos.valores;
    let colorVerdeGrafica = ["#008895","#D0021B" ];

    this.createDoughnut("graficoIndividual", etiquetas, valores, colorVerdeGrafica);


  }


  createDoughnut(element: any, etiquetas: any[], valores: any[], colores: any[]) {


console.log("Dentro del createDona")
    let oilCanvas = document.getElementById(element);


    Chart.defaults.global.defaultFontFamily = "Roboto";
    Chart.defaults.global.defaultFontSize = 12;
    Chart.defaults.global.animation.duration = 1200;
    Chart.defaults.global.animation.easing = 'easeInCirc';

    let oilData = {
      labels: etiquetas,
      datasets: [
        {
          data: valores,
          backgroundColor: colores,
          borderColor: "black",
          borderWidth: 0
        }]
    };

    let chartOptions = {
      maintainAspectRatio: false,
      cutoutPercentage:65,
      circumference: 2 * Math.PI,
      legend: {
        display: false,
        position: 'right',
        fontFamily: 'Roboto',
        fontSize: '12px',
        padding: 20
      },
      tooltips: {
        display: true,
        backgroundColor: '#000',

      }
    };




    let pieChart = new Chart(oilCanvas, {
      type: 'doughnut',
      data: oilData,
      options: chartOptions,

      plugins: [{
        id: 'my-plugin',
        afterDraw: function (chart, option) {
          chart.ctx.fillStyle = 'black'
          chart.ctx.textBaseline = 'middle'
          chart.ctx.font = '10px Roboto'
          //   chart.ctx.fillText('Totales', chart.width / 2 - 20, chart.width / 3.5, 200);
          // chart.ctx.fillText('Monto:', chart.width / 2 - 20, chart.width / 2.9, 200);
          //chart.ctx.fillText('Clientes:', chart.width / 2 - 20, chart.width / 2.5, 200);
          //chart.ctx.fillText('Cobros:', chart.width / 2 - 20, chart.width /2.2, 200);
          //chart.ctx.fillText('Partidas:', chart.width / 2 - 20, chart.width / 1.9, 200);
          //chart.ctx.fillText('Piezas:', chart.width / 2 - 20, chart.width / 1.7, 200);
        }

      }]

    })  


  }
}

