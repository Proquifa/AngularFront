import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementFilter } from '../../../shared/filter/element.model';
import { Parametros } from '../../../../class/Parametros.class';
import { FormControl, FormGroup } from '@angular/forms';
import { GestionService } from '../../../../services/gestion/gestion.service';
import { DocumentosRecibidosService } from '../../../../services/gestion/consulta/documentos-recibidos/documentos-recibidos.service';
import { CoreContainerComponent } from '../../../core-container/core-container.component';

@Component({
  selector: 'pn-documentos-recibidos',
  templateUrl: './documentos-recibidos.component.html',
  styleUrls: ['./documentos-recibidos.component.scss']
})
export class DocumentosRecibidosComponent implements OnInit {
  filtroConsultaRapida: String = "Folio"
  lstRadiosRapida: string [] = ['Folio', 'Referencia'];
  IsDate: boolean = true;
  lstDocumentos: any;
  lstClientes: any;
  Clear: boolean ;
  isThereData: boolean;
  dropClientes: any[] = [{ nombre: '--TODOS--', key: 0 }];
  classPanel: string = "panelNormal";
  hiddenClose: boolean = true;
  filtroForm: FormGroup;
  avanzada: Boolean = true;
  date: Date;
  date2: Date;
  itemsDropList: any[] = [{ nombre: '- - Todos - -' }, { nombre: 'nombre1' }, { nombre: 'nombre2' }];
  defaultSelected: any = { nombre: '- - Todos - -' };
  Elements: ElementFilter[];
  txtFactura: String ;
  istextbox : boolean=true;
  Llenar = () => {
    this.Elements = [new ElementFilter("string", "Clientes", this.dropClientes, true),

    new ElementFilter("string", "Destinatario", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'AHernandezM', key: 1 },
      { nombre: 'AMaza', key: 2 },
      { nombre: 'BArias', key: 3 },
      { nombre: 'BEMeza', key: 4 },
      { nombre: 'BGuevara', key: 5 },
      { nombre: 'BLozada', key: 6 },
      { nombre: 'CEJuarez', key: 7 },
      { nombre: 'CLGalicia', key: 8 },
      { nombre: 'CLozada', key: 9 },
      { nombre: 'CMRamirez', key: 10 },
      { nombre: 'CobranzaPQF', key: 11 },
      { nombre: 'ComPHS-USA', key: 12 },
      { nombre: 'CTirado', key: 13 },
      { nombre: 'DCastaneda', key: 14 },
      { nombre: 'DesPHS-USA', key: 15 },
      { nombre: 'DPeralta', key: 16 },
      { nombre: 'ernestogl', key: 17 },
      { nombre: 'ERobledo', key: 18 },
      { nombre: 'FCatalan', key: 19 },
      { nombre: 'FCTovar', key: 20 },
      { nombre: 'GAngel', key: 21 },
      { nombre: 'GETorres', key: 22 },
      { nombre: 'GGamaliel', key: 23 },
      { nombre: 'GSCruz', key: 24 },
      { nombre: 'InsPHS-USA', key: 25 },
      { nombre: 'IPerez', key: 26 },
      { nombre: 'JCHernandez', key: 27 },
      { nombre: 'JHernandez', key: 28 },
      { nombre: 'JIOlvera', key: 29 },
      { nombre: 'JLOlivares', key: 30 },
      { nombre: 'KBanderas', key: 31 },
      { nombre: 'LHernandez', key: 32 },
      { nombre: 'LMorales', key: 33 },
      { nombre: 'LRosas', key: 34 },
      { nombre: 'LVera', key: 35 },
      { nombre: 'MAFlores', key: 36 },
      { nombre: 'MensajeroE1', key: 37 },
      { nombre: 'MensajeroE2', key: 38 },
      { nombre: 'MensajeroGDL', key: 39 },
      { nombre: 'MNava', key: 40 },
      { nombre: 'MPavon', key: 41 },
      { nombre: 'MRMoreno', key: 42 },
      { nombre: 'msi', key: 43 },
      { nombre: 'MTorres', key: 44 },
      { nombre: 'NCortes', key: 45 },
      { nombre: 'NVGomez', key: 46 },
      { nombre: 'OCardona', key: 47 },
      { nombre: 'ONRamirez', key: 48 },
      { nombre: 'PLozada', key: 49 },
      { nombre: 'PMendez', key: 50 },
      { nombre: 'RH', key: 51 },
      { nombre: 'RRosas', key: 52 },
      { nombre: 'RThome', key: 53 },
      { nombre: 'SIAvalos', key: 54 },
      { nombre: 'SLeyva', key: 55 },
      { nombre: 'SVergara', key: 56 },
      { nombre: 'VGonzalez', key: 57 },
      { nombre: 'XMaya', key: 58 },
      { nombre: 'YCervantes', key: 59 },
      { nombre: 'YMunoz', key: 60 },
    ], true),
    new ElementFilter("string", "Tipo", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Otros', key: 1 },
      { nombre: 'Pago', key: 2 },
      { nombre: 'Pedido', key: 3 },
      { nombre: 'Requisición', key: 4 },
    ], true),
    new ElementFilter("string", "Estado", [
      { nombre: '--TODOS--', key: 0 },
      { nombre: 'Abierto', key: 1 },
      { nombre: 'Cerrado', key: 2 },
    ], true),
    ]

    //isThereData indica que ya no es necesario mostrar el loader
    this.isThereData = true;
    this.Clear = false;

  }
  IsImage: boolean = true;
  facturaForm: FormGroup;
  constructor(private router: Router, private _gestionService: GestionService, private _documentosRecibidosService: DocumentosRecibidosService, private coreComponent: CoreContainerComponent) { }

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
      finicio: new Date(),
      ffin: new Date(),
      empresa: "--TODOS--",
      referencia: "",
      destinatario: "--TODOS--",
      tipo: "--TODOS--",
      abiertoCerrado: "--TODOS--",
      cPago: ""
    }
    this.buscarDocumentosXBA(cuerpo);


  }
  buscarDocumentosXBA(parametros: any) {
    this.coreComponent.openModal(0);
    this._documentosRecibidosService.buscarDocumentosXBA(parametros).subscribe(
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
  buscarDocumentoRecibidoPorFolio(parametros: any){
    this.coreComponent.openModal(0);
    this._documentosRecibidosService.buscarDocumentoRecibidoPorFolio(parametros).subscribe(
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
  mostrarDatos($event) {
    if ($event.Datos[0].key === 0) {
      $event.Datos[0].key = "--TODOS--";
    }
    /* if ($event.Datos[0].nombre === "--TODOS--") {
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
       }*/

    let cuerpo = {


      finicio: $event.Fechas.fechaInicial,
      ffin: $event.Fechas.fechaFinal,
      empresa: $event.Datos[0].key,
      referencia: $event.textbox,
      destinatario: $event.Datos[1].nombre,
      tipo: $event.Datos[2].nombre,
      abiertoCerrado: $event.Datos[3].nombre,
      cPago: ""
    }
    this.buscarDocumentosXBA(cuerpo);
  }
  radioRapida($event) {
    console.log("Método radioRapida ");
    if ($event == 0) {
      this.filtroConsultaRapida = "Folio";
    } else if ($event == 1) {
      this.filtroConsultaRapida = "Referencia";
    }
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
    let cuerpo = {
      finicio: new Date(),
      ffin: new Date(),
      empresa: "--TODOS--",
      referencia: "",
      destinatario: "--TODOS--",
      tipo: "--TODOS--",
      abiertoCerrado: "--TODOS--",
      cPago: ""
    }
    this.buscarDocumentosXBA(cuerpo);
  }
  filtroRapido() {
    console.log("Filtro rápido");
     console.log("Filtro rápido");
    if(this.filtroConsultaRapida == "Folio"){
      let cuerpo={
        folio:(this.filtroConsultaRapida == "Folio") ? this.filtroForm.get('filtroDato').value : "",
        porFolio:true
      }
      this.buscarDocumentoRecibidoPorFolio(cuerpo);
    }else{
      let cuerpo = {
        finicio: new Date(),
        ffin: new Date(),
        empresa: "--TODOS--",
        referencia: (this.filtroConsultaRapida == "Referencia") ? this.filtroForm.get('filtroDato').value : "",
        destinatario: "--TODOS--",
        tipo: "--TODOS--",
        abiertoCerrado: "--TODOS--",
        cPago: ""
      }
      this.buscarDocumentosXBA(cuerpo);
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
  descargarPDF(archivo: string) {
    console.log(archivo);
    const BrowserWindow = electron.remote.BrowserWindow;
    let newWin = new BrowserWindow({ width: 800, height: 600 })
    PDFWindow.addSupport(newWin)
    newWin.loadURL(archivo);
  }
}
