import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ElementFilter } from '../../../shared/filter/element.model';
import { GestionService } from '../../../../services/gestion/gestion.service';
import { Parametros } from '../../../../class/Parametros.class';
import { CoreContainerComponent } from '../../../core-container/core-container.component';
import { DocumentosEnviadosService } from '../../../../services/gestion/consulta/documentos-enviados/documentos-enviados.service';
@Component({
  selector: 'pn-documentos-enviados',
  templateUrl: './documentos-enviados.component.html',
  styleUrls: ['./documentos-enviados.component.scss']
})
export class DocumentosEnviadosComponent implements OnInit {
  filtroConsultaRapida: String = "Folio Documento"
  lstDocumentos: any;
  IsDate: boolean = true;
  //istextbox: boolean = true;
  dropCobrador: any;
  lstCobradores: any;
  lstClientes: any;
  fechaFacturacion: string;
  Clear: boolean;
  isThereData: boolean;
  dropClientes: any[] = [{ nombre: '--TODOS--', key: 0 }];
  classPanel: string = "panelNormal";
  hiddenClose: boolean = true;
  avanzada: Boolean = true;
  date: Date;
  date2: Date;
  itemsDropList: any[] = [{ nombre: '- - Todos - -' }, { nombre: 'nombre1' }, { nombre: 'nombre2' }];
  defaultSelected: any = { nombre: '- - Todos - -' };
  txtFactura: String;
  Elements: ElementFilter[];
  filtroForm: FormGroup;
  Llenar = () => {
    this.Elements = [new ElementFilter("string", "Clientes", this.dropClientes, true),
    new ElementFilter("string", "Origen", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'BGuevara', key: 1 },
      { nombre: 'BLozada', key: 2 },
      { nombre: 'CEJuarez', key: 3 },
      { nombre: 'DPeralta', key: 4 },
      { nombre: 'FCTovar', key: 5 },
      { nombre: 'GETorres', key: 6 },
      { nombre: 'LHernandez', key: 7 },
      { nombre: 'LVera', key: 8 },
      { nombre: 'MRMoreno', key: 9 },
      { nombre: 'MNava', key: 10 },
      { nombre: 'MTorres', key: 11 },
      { nombre: 'NVGomez', key: 12 },
      { nombre: 'RThome', key: 13 },
      { nombre: 'SVergara', key: 14 },
      { nombre: 'YCervantes', key: 15 },
    ], false),
    new ElementFilter("string", "Tipo", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Pedidos por enviar', key: 1 },
      { nombre: 'Cotizaciones por enviar', key: 2 },
      { nombre: 'Proforma por enviar', key: 3 },
      { nombre: 'Facturas por enviar', key: 4 },
      { nombre: 'Factura-Proforma por enviar', key: 5 },
      { nombre: 'Notificaciones por enviar', key: 6 }
    ], false),
    ]

    //isThereData indica que ya no es necesario mostrar el loader
    this.isThereData = true;
    this.Clear = false;

  }


  IsImage: boolean = true;
  facturaForm: FormGroup;

  constructor(private router: Router, private _gestionService: GestionService, private coreComponent: CoreContainerComponent, private _documentosEnviadosService: DocumentosEnviadosService) { }

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
      fInicio: new Date(),
      ffin: new Date(),
      destino: 0,
      origen: "",
      tipo: "",
      folioDocumento: ""
    }
    this.obtenerEnvioCorreoDocumentos(cuerpo);
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
    if ($event.Datos[0].nombre === "--TODOS--") {
      $event.Datos[0].key = 0;
    }
    if ($event.Datos[0].key === 0) {
      $event.Datos[0].nombre = "--TODOS--";
    }
    if ($event.Datos[1].nombre === "--TODOS--") {
      $event.Datos[1].nombre = "";
    }
    if ($event.Datos[2].nombre === "--TODOS--") {
      $event.Datos[2].nombre = "";
    }

    let cuerpo = {
      finicio: $event.Fechas.fechaInicial,
      ffin: $event.Fechas.fechaFinal,
      destino: $event.Datos[0].key,
      origen: $event.Datos[1].nombre,
      tipo: $event.Datos[2].nombre,
      folioDocumento: this.txtFactura
    }
    this.obtenerEnvioCorreoDocumentos(cuerpo);
  }
  filtroAvanzada() {
    this.avanzada = true;
    let cuerpo = {
      fInicio: new Date(),
      ffin: new Date(),
      destino: 0,
      origen: "",
      tipo: "",
      folioDocumento: ""
    }
    this.obtenerEnvioCorreoDocumentos(cuerpo);
  }
  obtenerEnvioCorreoDocumentos(parametros: any) {
    this.coreComponent.openModal(0);
    this._documentosEnviadosService.obtenerEnvioCorreoDocumentos(parametros).subscribe(
      data => {

        this.lstDocumentos = data.current;

        console.log(this.lstDocumentos);
        this.coreComponent.closeModal(0);
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }

  filtroRapida() {
    this.avanzada = false;
    let cuerpo = {
      fInicio: new Date(),
      ffin: new Date(),
      destino: 0,
      origen: "",
      tipo: "",
      folioDocumento: ""
    }
    this.obtenerEnvioCorreoDocumentos(cuerpo);   
  }
  filtroRapido(){
    console.log("Filtro Rápido");
    this.avanzada = false;
    if(this.filtroForm.get('filtroDato').value!=""){
     
      let cuerpo = {
        fInicio:"",
        ffin: "",
        destino: 0,
        origen: "",
        tipo: "",
        folioDocumento: this.filtroForm.get('filtroDato').value,
      }
      this.obtenerEnvioCorreoDocumentos(cuerpo);
    }else{
      let cuerpo = {
        fInicio:new Date(),
        ffin: new Date(),
        destino: 0,
        origen: "",
        tipo: "",
        folioDocumento: this.filtroForm.get('filtroDato').value,
      }
      this.obtenerEnvioCorreoDocumentos(cuerpo);
    }
  
  }
  getFechaImpl($event) {    
    //console.log($event);
  }

  dropList(index, $event) {

  }

  descargarPDF(archivo: string) {
    console.log(archivo);
    const BrowserWindow = electron.remote.BrowserWindow;
    let newWin = new BrowserWindow({ width: 800, height: 600 })
    PDFWindow.addSupport(newWin)
    newWin.loadURL(archivo);
  }

}
