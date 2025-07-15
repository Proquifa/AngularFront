import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ElementFilter } from '../../../shared/filter/element.model';
import { Parametros } from '../../../../class/Parametros.class';
import { EntregasService } from '../../../../services/gestion/consulta/entregas/entregas.service';
import { GestionService } from '../../../../services/gestion/gestion.service';
import { CoreContainerComponent } from '../../../core-container/core-container.component';
import { dateFormatSlash } from '../../../../pipes/accounting/accounting.pipe';
import { UtilFechas } from '../../../../class/UtilFechas';
import { localeData } from 'moment';

@Component({
  selector: 'pn-entregas',
  templateUrl: './entregas.component.html',
  styleUrls: ['./entregas.component.scss']
})
export class EntregasComponent implements OnInit {
  documentos: any[];
  idPD: any;
  lstTiempo: any;
  itemLineaTiempo: any[] = [];
  lstEntregasDetalleActive: any[] = [];
  lstEntregasDetalle: any[] = [];
  estadoItemLineaTiempo: String = "";
  estapaItemLineaTiempo: String[];
  lstLineaTiempoActive: any[] = [];
  lstLineaTiempo: any[] = [];
  idDP: any;
  lstEntregaDetalleActive: any[];
  lstEntregaDetalle: any;
  detalle: Boolean = false;
  entregaDetalle: any;
  _utilFechas: UtilFechas = new UtilFechas();
  IsDate: boolean = true;
  lstEntregas: any;
  lstClientes: any;
  filtroConsultaRapida: String = "Folio de Factura"
  lstRadiosRapida: string [] = ['Folio de Factura', 'Pedido Interno'];
  classPanel: string = "panelNormal";
  hiddenClose: boolean = true;
  avanzada: Boolean = true;
  fechaFacturacion: boolean = true;
  fechaCobros: boolean = false;
  isTableShow: boolean = true;
  totalDetalle: Number = 0;
  date: Date;
  date2: Date;
  isThereData: boolean;
  Clear = true;
  dropClientes: any[] = [{ nombre: '--TODOS--', key: 0 }];
  itemsDropList: any[] = [{ nombre: '- - Todos - -' }, { nombre: 'nombre1' }, { nombre: 'nombre2' }];
  defaultSelected: any = { nombre: '- - Todos - -' };
  txtFactura: String;
  Elements: ElementFilter[];
  filtroForm: FormGroup;
  Llenar = () => {
    this.Elements = [new ElementFilter("string", "Clientes", this.dropClientes, true),
    new ElementFilter("string", "Estado", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Cerrado', key: 1 },
      { nombre: 'Abierto', key: 2 },

    ], true),
    new ElementFilter("string", "Mensajero", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'ABriseno', key: 1 },
      { nombre: 'ARojas', key: 2 },
      { nombre: 'AS', key: 3 },
      { nombre: 'ERobledo', key: 4 },
      { nombre: 'IPerez', key: 5 },
      { nombre: 'JLOlivares', key: 6 },
      { nombre: 'LMorales', key: 7 },
      { nombre: 'MAFlores', key: 8 },
      { nombre: 'MensajeroE1', key: 9 },
      { nombre: 'MensajeroE2', key: 10 },
      { nombre: 'VGonzalez', key: 11 }
    ], true),
    new ElementFilter("string", "Ruta", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Centroamérica', key: 1 },
      { nombre: 'Foraneo', key: 2 },
      { nombre: 'Guadalajara', key: 3 },
      { nombre: 'Local', key: 4 },
      { nombre: 'Resto del mundo', key: 5 },
      { nombre: 'Sudamérica', key: 6 },
    ], true),
    new ElementFilter("string", "Conforme", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Pendiente', key: 1 },
      { nombre: 'No aplica', key: 2 },
      { nombre: 'SI', key: 3 },
      { nombre: 'NO', key: 4 },
    ], true),
    ]
    //isThereData indica que ya no es necesario mostrar el loader
    this.isThereData = true;
    this.Clear = false;

  }
  IsImage: boolean = true;
  facturaForm: FormGroup;
  constructor(private router: Router, private coreComponent: CoreContainerComponent, private _gestionService: GestionService, private _entregasService: EntregasService) { }

  ngOnInit() {
    let parametros: Parametros = new Parametros();
    this.filtroForm = new FormGroup({
      filtroDato: new FormControl()
    });
    this.date = new Date();
    this.date2 = new Date();
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
    this.facturaForm = new FormGroup({
      firstName: new FormControl()
    });
    this.avanzada = true;
    let cuerpo = {
      idCliente: 0,
      estado: "--TODOS--",
      mensajero: "--TODOS--",
      ruta: "--TODOS--",
      conforme: "--TODOS--",
      fechaInicio: new Date(),
      fechaFin: new Date(),
      facturaS: null,
      cPedido: null
    }
    this.obtenerEntregas(cuerpo);
  }
  obtenerEntregas(parametros: any) {
    this.coreComponent.openModal(0);
    this._entregasService.obtenerEntregas(parametros).subscribe(
      data => {

        this.lstEntregas = data.current;

        console.log(this.lstEntregas);
        this.coreComponent.closeModal(0);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }
  obtenerEntregasSinAviso(parametros: any) {
    this.coreComponent.openModal(0);
    this._entregasService.obtenerEntregas(parametros).subscribe(
      data => {
        this.lstEntregas = data.current;
        console.log(this.lstEntregas);
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

  emitItem($event) {
    console.log($event);
  }
  mostrarDatos($event) {
    let cuerpo = {
      idCliente: $event.Datos[0].key,
      estado: $event.Datos[1].nombre,
      mensajero: $event.Datos[2].nombre,
      ruta: $event.Datos[3].nombre,
      conforme: $event.Datos[4].nombre,
      fechaInicio: $event.Fechas.fechaInicial,
      fechaFin: $event.Fechas.fechaFinal,
      facturaS: null,
      cPedido: null
    }
    this.obtenerEntregas(cuerpo);
  }
  filtroAvanzada() {
    this.avanzada = true;
    let cuerpo = {
      idCliente: 0,
      estado: "--TODOS--",
      mensajero: "--TODOS--",
      ruta: "--TODOS--",
      conforme: "--TODOS--",
      fechaInicio: new Date(),
      fechaFin: new Date(),
      facturaS: null,
      cPedido: null
    }
    this.obtenerEntregas(cuerpo);
  }
  radioRapida($event) {
    console.log("Método radioRapida ");
    if ($event == 0) {
      this.filtroConsultaRapida = "Folio de Factura";
    } else if ($event == 1) {
      this.filtroConsultaRapida = "Pedido Interno";
    }
  }
  filtroRapido() {
    this.avanzada = false;
    if (this.filtroConsultaRapida == "Folio de Factura") {
      let cuerpo = {
        idCliente: 0,
        estado: "--TODOS--",
        mensajero: "--TODOS--",
        ruta: "--TODOS--",
        conforme: "--TODOS--",
        fechaInicio: new Date(),
        fechaFin: new Date(),
        facturaS: (this.filtroConsultaRapida == "Folio de Factura") ? this.filtroForm.get('filtroDato').value : "",
        cPedido: null
      }
      this.obtenerEntregas(cuerpo);
    } else {
      let cuerpo = {
        idCliente: 0,
        estado: "--TODOS--",
        mensajero: "--TODOS--",
        ruta: "--TODOS--",
        conforme: "--TODOS--",
        fechaInicio: new Date(),
        fechaFin: new Date(),
        facturaS: null,
        cPedido: (this.filtroConsultaRapida == "Pedido Interno") ? this.filtroForm.get('filtroDato').value : ""
      }
      this.obtenerEntregas(cuerpo);
    }

  }

  filtroRapida() {
    this.avanzada = false;
  }

  getFechaImpl($event) {
    //console.log($event);
  }

  dropList(index, $event) {

  }

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
  download() {
    let entregas: any[] = [];
    this.lstEntregas.forEach((entrega, index) => {

      let cuerpo = {
        '#': index + 1,
        'Cliente': "\"" + entrega.nombre_Cliente + "\"",
        'Ruta': entrega.rutaRelacionada.rutaMensajeria,
        'Zona': entrega.rutaRelacionada.zonaMensajeria,
        'Factura': entrega.numeroFactura,
        'Pedido': entrega.cpedido,
        'Mensajero': entrega.rutaRelacionada.responsable,
        'FER': new dateFormatSlash().transform(entrega.rutaRelacionada.fer),
        'FR': new dateFormatSlash().transform(entrega.rutaRelacionada.fr),
        'Estado': entrega.rutaRelacionada.estadoRuta,
        'Conforme': entrega.rutaRelacionada.conforme,
      }
      entregas.push(cuerpo);
    });
    var csvData = this.ConvertToCSV(entregas);
    var a = document.createElement("a");
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    var blob = new Blob([csvData], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = 'ConsultaEntregas-' + this._utilFechas.fechaDescarga(new Date()) + '.csv';
    a.click();
  }

  verDetalle(item: any) {
    this.entregaDetalle = item;
    this.detalle = true;
    let lstAux: any[] = [];
    this.obtenerLineaTiempoResumen(item.rutaRelacionada.idEvento);
    this.lstLineaTiempoActive = new Array(this.lstLineaTiempo.length).fill("")
    this.lstLineaTiempoActive[0] = "divActive";
    this.totalDetalle = 0;
    this.totalDetalle += item.montoTotalPedido;
    for (let entrega of this.lstEntregas) {
      if (entrega.nombre_Cliente === item.nombre_Cliente) {
        lstAux.push(entrega);
        this.totalDetalle += entrega.montoTotalPedido;
        console.log(entrega);
      }
    }
    this.lstEntregasDetalle = [];
    this.lstEntregasDetalle = this.lstEntregasDetalle.concat(lstAux);
    this.lstEntregasDetalleActive = new Array(this.lstEntregasDetalle.length).fill("")
    this.lstEntregasDetalleActive[0] = "divActual";
  }
  obtenerLineaTiempoResumen(idPD) {
    let cuerpo = {
      idPD: idPD
    }
    let etiquetas: any[] = [];
    this.coreComponent.openModal(0);
    this._entregasService.obtenerTiempoDeProceso(cuerpo).subscribe(
      data => {
        this.lstLineaTiempo = [];
        if (data.current != undefined && data.current.length > 0) {

          let temp: any[] = [];

          for (let i: number = 0; i < data.current.length; i++) {

            temp.push(data.current[i]);
          }
          this.lstLineaTiempo = temp;

          this.lstLineaTiempo.forEach((etiqueta, index) => {
            if (this.lstLineaTiempo[index].documento != null) {
              if (this.lstLineaTiempo[index].documento.split(",")) {

                this.lstLineaTiempo[index].documento = this.lstLineaTiempo[index].documento.split(",");
                if (this.lstLineaTiempo[index].documento.indexOf("AR") != 0) {
                  this.lstLineaTiempo[index].documento = this.lstLineaTiempo[index].documento
                }
              }
            }
          })
          this.documentos = etiquetas;
          this.lstLineaTiempoActive = new Array(this.lstLineaTiempo.length).fill("")
          this.lstLineaTiempoActive[0] = "divActive";
          this.estadoItemLineaTiempo = this.lstLineaTiempo[0].proceso;
          this.itemLineaTiempo = this.lstLineaTiempo[0];

        }
        this.coreComponent.closeModal(0);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }


  resumenEntrega(i: number) {
    this.lstEntregasDetalleActive = new Array(this.lstEntregasDetalle.length).fill("")
    this.lstEntregasDetalleActive[i] = "divActive";
    this.obtenerLineaTiempoResumen(this.lstEntregasDetalle[i].rutaRelacionada.idEvento);
  }
  lineaTiempo(i: number) {
    this.lstLineaTiempoActive = new Array(this.lstLineaTiempo.length).fill("")
    console.log(this.lstLineaTiempo[i]);
    this.lstLineaTiempoActive[i] = "divActive";
    this.estadoItemLineaTiempo = this.lstLineaTiempo[i].proceso;
    this.itemLineaTiempo = this.lstLineaTiempo[i];
    console.log("ESTADO: " + this.estadoItemLineaTiempo);
    switch (this.estadoItemLineaTiempo) {
      case "Tramitación":

        break;
    }
  }
  regresarConsulta() {
    this.detalle = false;
  }

  descargarPDF(archivo: string) {
    console.log(archivo);
    const BrowserWindow = electron.remote.BrowserWindow;
    let newWin = new BrowserWindow({ width: 800, height: 600 })
    PDFWindow.addSupport(newWin)
    newWin.loadURL(archivo);
  }
}
