import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementFilter } from '../../../shared/filter/element.model';
import { Parametros } from '../../../../class/Parametros.class';
import { GestionService } from '../../../../services/gestion/gestion.service';
import { CotizacionService } from '../../../../services/gestion/consulta/cotizaciones/cotizacion.service';
import { CoreContainerComponent } from '../../../core-container/core-container.component';
@Component({
  selector: 'pn-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.scss']
})
export class CotizacionesComponent implements OnInit {
  classPanel: string = "panelNormal";
  hiddenClose: boolean = true;
  avanzada: Boolean = true;
  date: Date;
  date2: Date;
  itemsDropList: any[] = [{ nombre: '- - Todos - -' }, { nombre: 'nombre1' }, { nombre: 'nombre2' }];
  defaultSelected: any = { nombre: '- - Todos - -' };
  Elements: ElementFilter[];
  IsImage: boolean = true;
  Clear: boolean = true;
  IsDate: boolean = true;
  isThereData: boolean = false;
  txtFactura: String;
  Cotizacion_Detalle: any;
  lstPartidas:any[]=[];
  lstHistorial:any[]=[];
  lstTiempoProceso:any[]=[]
  PartidaSeleccionada=0;
  ProcesoSeleccionado:any;
  lineaSeleccionada=0;
  EvaluarPropuesta:any;
  IngresoCatalogo:any;
  DatosFill1 = {
    Fechas: {
      fechaInicial: new Date(),
      fechaFinal: new Date(),
    }
  };
  detalle: boolean = false;
  txtCotizacion: string = "";
  lstClientes: any[];
  lstCotizaciones: any[] = [];
  Clientes: any[] = [{ nombre: '--TODOS--', key: 0 }];
  constructor(private router: Router, private _gestionService: GestionService, private _cotizacionService: CotizacionService, private coreComponent: CoreContainerComponent) { }
  //METODOS QUE SE CARGAN AL ENTRAR EL COMPONENTE
  ngOnInit() {
    this.coreComponent.openModal(0);
    this.date = new Date();
    this.date2 = new Date();
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

    this._gestionService.dropClientes().subscribe(

      data => {

        this.lstClientes = data.current;


        let lstAux: any[] = [];
        for (var item of this.lstClientes) {
          lstAux.push({ nombre: item.valor, key: item.llave })
        }

        this.Clientes = this.Clientes.concat(lstAux);

        let parametros: Parametros = new Parametros();

        parametros.finicio = new Date();
        parametros.ffin = new Date();
        let cotizacion = {
          folioCotizacion: null,
          estado: "--TODOS--",
          nombreCliente: "--TODOS--",
          msalida: "--TODOS--",
          cotizo: "--TODOS--"
        }
        parametros.cotizacion = cotizacion;
        parametros.idEmpleado = 27;
        console.log(this.txtCotizacion);
        this._cotizacionService.listaCotizacionesAvanzada(parametros).subscribe(
          data => {

            this.coreComponent.closeModal(0);
            this.lstCotizaciones = data.current;
            console.log(this.lstCotizaciones);


          }, error => {
            console.log("error al obtener cotización por folio")
            this.coreComponent.closeModal(0);
          }

        )



        this.Llenar();
      },
      error => {
        console.log("error login");
        console.log(error);
        this.coreComponent.closeModal(0);
      }
    );
  }

  //LLENADO DE COMPONENTE PARA FILTROS
  Llenar = () => {
    let newListProveedor: any[] = [];



    this.Elements = [new ElementFilter("string", "Cliente", this.Clientes, true),
    new ElementFilter("string", "Cotizó", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'BArias', key: 1 },
      { nombre: 'BGuevara', key: 2 },
      { nombre: 'BLozada', key: 3 },
      { nombre: 'CEJuarez', key: 4 },
      { nombre: 'DPeralta', key: 5 },
      { nombre: 'FCTovar', key: 6 },
      { nombre: 'GETorres', key: 7 },
      { nombre: 'JIOlvera', key: 8 },
      { nombre: 'LHernandez', key: 9 },
      { nombre: 'LVera', key: 10 },
      { nombre: 'MNava', key: 11 },
      { nombre: 'MRMoreno', key: 12 },
      { nombre: 'MTorres', key: 13 },
      { nombre: 'NVGomez', key: 14 },
      { nombre: 'RThome', key: 15 },
      { nombre: 'SVergara', key: 16 },
      { nombre: 'YCervantes', key: 17 }
    ], false),
    new ElementFilter("string", "Medio de Envío", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Correo', key: 1 },
      { nombre: 'Fax', key: 2 },
      { nombre: 'Pendiente', key: 3 },
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


  regresarConsulta() {
    this.detalle = false;
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
  mostrarDatos($event) {
    console.log($event);
    this.Avanzada($event);
  }


  Rapida() {
    this.coreComponent.openModal(0);
    let parametros: Parametros = new Parametros();

    parametros.finicio = new Date();
    parametros.ffin = new Date();
    parametros.idEmpleado = 0;

    let cotizacion = {
      folioCotizacion: this.txtCotizacion,
      estado: "--TODOS--",
      nombreCliente: "--TODOS--",
      msalida: "--TODOS--",
      cotizo: "--TODOS--"
    }
    parametros.cotizacion = cotizacion;
    parametros.idEmpleado = 27;



    console.log(this.txtCotizacion);
    this._cotizacionService.listaCotizacionesAvanzada(parametros).subscribe(
      data => {
        this.lstCotizaciones = data.current;
        console.log(this.lstCotizaciones);

        this.coreComponent.closeModal(0);
      }, error => {
        console.log("error al obtener cotización por folio")

        this.coreComponent.closeModal(0);
      }

    )

  }

  Avanzada(Datos) {

    this.coreComponent.openModal(0);
    let parametros: Parametros = new Parametros();
    parametros.finicio = Datos.Fechas.fechaInicial;
    parametros.ffin = Datos.Fechas.fechaFinal;
    parametros.idEmpleado = 0;

    let cotizacion = {
      folioCotizacion: "",
      estado: Datos.Datos[3].nombre,
      nombreCliente: Datos.Datos[0].nombre,
      msalida: Datos.Datos[2].nombre,
      cotizo: Datos.Datos[1].nombre
    }
    parametros.cotizacion = cotizacion;
    parametros.idEmpleado = 27;
    this._cotizacionService.listaCotizacionesAvanzada(parametros).subscribe(
      data => {

        this.lstCotizaciones = data.current;
        console.log(this.lstCotizaciones);

        this.coreComponent.closeModal(0);
      },
      error => {
        console.log("error login");
        console.log(error);
        this.coreComponent.closeModal(0);
      });
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

  buscarcomas(cadena: string) {

    let cadenaSinComas;
    let coma = ",";
    let espacio = "";
    cadenaSinComas = cadena.replace(coma, espacio);


    return cadenaSinComas
  }

  // Función de descarga de archivo CSV 
  download() {

    if (this.lstCotizaciones.length > 0) {
      let lstCompras2: any[] = [];

      this.lstCotizaciones.forEach((cotizacion, index) => {
        let ObjAux = {
          '#': (index + 1),
          'Fecha': cotizacion.fecha,
          'Cliente': this.buscarcomas(cotizacion.nombreCliente),
          'Contacto': cotizacion.contacto,
          'Medio de Envío': cotizacion.msalida,
          'Cotizó': cotizacion.cotizo,
          'Cotización': cotizacion.folioCotizacion,
          'Requisición': cotizacion.requisicion,
          'Estado': cotizacion.estado,
          'Enviado': (cotizacion.enTiempoFueraDeTiempo == true ? 'ET' : 'FT'),


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
      a.download = 'ConzultaCotizacion-' + this.fechaDescarga(new Date()) + '.csv';
      a.click();

    } else {
      console.log("No existen Cotizaciones");

    }
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



  //*************Seccion para trabajar con Detalle Cotizacion***************+


  verDetalle(item) {
    console.log("Cotización seleccionada")
    console.log(item);
    this.Cotizacion_Detalle = item;

this.ObtenerPartidas(item);
    this.detalle = true;
  }


  ObtenerPartidas(item){
this.coreComponent.openModal(0);
    let parametros: Parametros = new Parametros();
    parametros.folio= item.folioCotizacion;
    this._cotizacionService.listaPartidasXFolioCotizacion(parametros).subscribe(
      data => {

        this.lstPartidas = data.current;
        console.log(this.lstPartidas);



this.obtenerTiempoProceso(data.current[0], 0,1);

   


      },
      error => {
        console.error("Error al obtener Partidas", error);
     
        this.coreComponent.closeModal(0);
      });

  }
obtenerTiempoProceso(Partida, index,firstTime){
if (firstTime!=1){this.coreComponent.openModal(0);}
  this.PartidaSeleccionada=0;
  this.PartidaSeleccionada=index;
  console.log("Tiempo Proceso", Partida);
  let idPcotiza= Partida.idPCotiza;
  let parametros: Parametros = new Parametros();
  console.log("idpCotiza"+ idPcotiza);
  parametros.idpcotiza=idPcotiza;
  let ArreAUX=[];
  this._cotizacionService.listaTiempoProcesoPartidas(parametros).subscribe(
 
    data=>{

      data.current.forEach(TiempoProceso => {
        if(TiempoProceso.proceso!="Evaluar respuesta"&&TiempoProceso.proceso!="Ingresó en catálogo"){
          
          TiempoProceso.responsable= TiempoProceso.responsable.toUpperCase();
          ArreAUX.push(TiempoProceso);
        }else{
if(TiempoProceso.proceso=="Evaluar respuesta"){ this.EvaluarPropuesta= TiempoProceso}else{
  if(TiempoProceso.proceso=="Ingresó en catálogo"){ this.IngresoCatalogo= TiempoProceso}

}


        }


      });
      console.log("EvaluarProp", this.EvaluarPropuesta);
      console.log("EvaluarProp", this.IngresoCatalogo);
      this.lstTiempoProceso= ArreAUX;
      console.log(this.lstTiempoProceso);
      console.log("Partidas",this.lstPartidas[this.PartidaSeleccionada].idPCotiza);
      this.ProcesoSeleccionado= this.lstTiempoProceso[0];
      this.ObtenerHistorial(this.lstPartidas[this.PartidaSeleccionada].idPCotiza);
    this.coreComponent.closeModal(0);
    },
    (error)=>{
      console.error("Error en la consulta del tiempo proceso", error);
        
    this.coreComponent.closeModal(0);
    }
  );

}

  ObtenerHistorial (index){

let idPcotiza= index
let parametros: Parametros = new Parametros();
parametros.idpcotiza=idPcotiza;
this._cotizacionService.listaHistorialXPartidaXidPcotiza(parametros).subscribe(

  data=>{
    this.lstHistorial= data.current;
    console.log(this.lstHistorial);
    this.coreComponent.closeModal(0);
  
  }, 
  (error)=>{
    console.error("Error en la carga del historial ", error);
    this.coreComponent.closeModal(0);
  }
);

  }
  //Abrir PDF 
  descargarPDF(archivo: string) {
    console.log(archivo);
    const BrowserWindow = electron.remote.BrowserWindow;
    let newWin = new BrowserWindow({ width: 800, height: 600 })
    PDFWindow.addSupport(newWin)
    newWin.loadURL(archivo);
  }
  SeleccionarProceso(Proceso, index){
    
this.ProcesoSeleccionado= Proceso;
this.lineaSeleccionada= index;

console.log("Proceso Seleccionado", this.ProcesoSeleccionado);
  }
}
