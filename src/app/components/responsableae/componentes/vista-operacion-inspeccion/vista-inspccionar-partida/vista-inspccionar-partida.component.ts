import { Component, OnInit,Input,EventEmitter,Output,SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { PartidaInspeccion } from '../../../../../class/despachos/PartidaInspeccion.class';
import { DocumentoAdjunto } from '../../../../../class/comun/DocumentoAdjunto.class';
import { ComunService } from '../../../../../services/comun/comun.service';
import {InspeccionService} from '../../../../../services/inspeccion/inspeccion.service';
import {falseIfMissing} from 'protractor/built/util';
import {Parametros} from '../../../../../class/Parametros.class';

@Component({
  selector: 'pn-vista-inspccionar-partida',
  templateUrl: './vista-inspccionar-partida.component.html',
  styleUrls: ['./vista-inspccionar-partida.component.scss']
})
export class VistaInspccionarPartidaComponent implements OnInit {


  @Output() actualizarPartida: EventEmitter<any> = new EventEmitter<any>();
  @Output() enviarDocumento:EventEmitter<any> = new EventEmitter<any>();
  @Output() enviarConDocumentacion: EventEmitter<any> = new EventEmitter<any>();
  @Output() iniciaVideo: EventEmitter<any> = new EventEmitter<any>();
  @Input() partidaPrioridad:PartidaInspeccion = new PartidaInspeccion();
  @Input() archCertificado: DocumentoAdjunto = new DocumentoAdjunto();
  @Input() archSeguridad: DocumentoAdjunto = new DocumentoAdjunto();
  @Input() conDocumentacion: boolean;
  @ViewChild ("grDocumento") grDocumento:ElementRef;

  esUsp:boolean = false;
  esPublicacion:boolean = false;
  sinDocumentacion:boolean ;
  grabar:boolean;
  documentacion: boolean;
  pathHojaSeg: any[] = [];
  pathCertificado: any[] = [];
  activarCargaDoc: boolean;
  activarCargadaCerti: boolean;
  rutaGeneral = new Parametros();
  path = this.rutaGeneral.rutaGeneral;

  idioma: any = [
    /*  { nombre: '--NINGUNO--', key: 0 }, */
    { nombre: 'Español', key: 0 },
    { nombre: 'Ingles', key: 1 }
  ];
  presentacion: any = [
   /*  { nombre: '--NINGUNO--', key: 0 }, */
    { nombre: 'Bolsa de aluminio', key: 0 },
    { nombre: 'Vial', key: 1 },
    { nombre: 'Blister', key: 2 },
    { nombre: 'Frasco', key: 3 },
    { nombre: 'Ampolleta', key: 4 },
    { nombre: 'Caja', key: 5 }
  ];

  almacenaje: any = [
    /* { nombre: '--NINGUNO--', key: 0 }, */
    { nombre: 'Congelación', key: 0 },
    { nombre: 'Ambiente', key: 1 },
    { nombre: 'Refrigeración', key: 2 }
  ];

  meses: any = [
   /*  { nombre: '--NINGUNO--', key: 0 }, */
    { nombre: '--ND--', key: 0 },
    { nombre: 'Enero', key: 1 },
    { nombre: 'Febrero', key: 2 },
    { nombre: 'Marzo', key: 3 },
    { nombre: 'Abril', key: 4 },
    { nombre: 'Mayo', key: 5 },
    { nombre: 'Junio', key: 6 },
    { nombre: 'Julio', key: 7 },
    { nombre: 'Agosto', key: 8 },
    { nombre: 'Septiembre', key: 9 },
    { nombre: 'Octubre', key: 10 },
    { nombre: 'Noviembre', key: 11 },
    { nombre: 'Diciembre', key: 12 }
  ];
  listaUnidad: any[]; // Se obtendran los datos del combo de unidad.
  anios = new Array<any>();
  anios2 = new Array<any>();

 /*  variablesValoresCombo */

 selectedPresentacion: any;
 selectedAlmacen: any;
 selectedIdioma: any;
 selectedTransporte: any;
 selectedAnio: any;
 selectedMes: any;
 selectedLote: any;
 loteTex: string;
 cantidadText: any;
 unidadText: any;
 EdicionText: any;
  listaUnidadAux: any[] = [];
  selectedUnidad: any;
  activarCombo: boolean;
 archivoAdjunto: DocumentoAdjunto = new DocumentoAdjunto();



   constructor(private comunService: ComunService , private _inspService: InspeccionService) { }

   ngOnInit() {
     this.obtenerComboUnidad();
     this.grabar = true;
//   this.comunService.guardarVideo(false);
    this.iniciaVideo.emit(this.grabar);
    //console.log("")
    this.creacionListaCmbAno();
    this.iniciarVista();
    this.cambioDocumentacion(this.conDocumentacion);
    console.log(this.conDocumentacion);
   }

  obtenerComboUnidad() {
     const tipo = 'Unidad';
   this._inspService.obtenerComboUnidad(tipo).subscribe(
     data => {
       this.listaUnidad = data.current;
       for (let i = 0; i < this.listaUnidad.length; i++) {
         this.listaUnidadAux.push({nombre: this.listaUnidad[i].valor, key: i});
       }
       this.activarCombo = true;
      console.log('Soy unidad -->', this.listaUnidadAux);
     });
  }

 iniciarVista() {
    if (this.partidaPrioridad.tipo === 'Publicaciones') {
      this.esPublicacion = true;
      var obj: any;
      obj = new Object;
      obj.nombre = 'Seleccionar';
      this.selectedIdioma = obj;
    } else {
      this.esPublicacion = false;
    }
    var fechaHoy: Date = new Date();
    var obj: any;
    obj = new Object;
    if (this.partidaPrioridad.tipoPresentacion !== null) {
      obj.nombre = this.partidaPrioridad.tipoPresentacion;
    }
    else {
      obj.nombre = 'Seleccionar';
    }
    this.selectedPresentacion = obj;

    var obj: any;
    obj = new Object;
    if (this.partidaPrioridad.manejo !== null) {
      if (this.partidaPrioridad.manejo === 'Congelacion')
        obj.nombre = 'Congelación';
      else
        obj.nombre = this.partidaPrioridad.manejo;
    }
    else {
      obj.nombre = 'Seleccionar';
    }
    this.selectedAlmacen = obj;

    var obj: any;
    obj = new Object;
    if (this.partidaPrioridad.manejoTransporte !== null) {
      if (this.partidaPrioridad.manejoTransporte === 'Congelacion')
        obj.nombre = 'Congelación';
      else
        obj.nombre = this.partidaPrioridad.manejoTransporte;
    }
    else {
      obj.nombre = 'Seleccionar';
    }
    this.selectedTransporte = obj;


    if (this.partidaPrioridad.caducidad == null) {
      var obj: any;
      obj = new Object;
      obj.nombre = "Seleccionar";
      this.selectedAnio = obj;
    }
    else {
      var obj: any;
      obj = new Object;
      obj.nombre = this.partidaPrioridad.mesCaduca;
      this.selectedMes = obj;


      var obj: any;
      obj = new Object;
      obj.nombre = this.partidaPrioridad.anoCaduca;
      this.selectedAnio = obj;
    }

    if (this.partidaPrioridad.unidad !== null) {
      var obj: any;
      obj = new Object;
      obj.nombre = this.partidaPrioridad.unidad;
      this.selectedUnidad = obj;
    } else {
      var obj: any;
      obj = new Object;
      obj.nombre = "Seleccionar";
      this.selectedUnidad = obj;
    }

    if (this.partidaPrioridad.idProveedor !== 44)
    {
      this.loteTex = this.partidaPrioridad.lote;
    } else {
      this.loteTex = this.partidaPrioridad.lote;
    }
    if (this.partidaPrioridad.fabrica === 'USP') {

    }
   /********SE agrego unidad y cantidad****/
   this.cantidadText = this.partidaPrioridad.cantidad;
   this.unidadText = this.partidaPrioridad.unidad;
   /**************************************/
      let fabricante = this.partidaPrioridad.idFabricante;
      let nombreCertificado = this.partidaPrioridad.documentacion;
      let nombreHoja =  this.partidaPrioridad.sds;
      if (nombreCertificado ) {
        this.conDocumentacion = true;
        let nombreCertificado = this.partidaPrioridad.documentacion + '.pdf';
        this.activarCargadaCerti = false;
        let pathCertificado = this.path + 'Certificados/' + fabricante + '/' + this.partidaPrioridad.documentacion + '.pdf';
        this.pathCertificado = [{path: pathCertificado, name: nombreCertificado}];
        this.archivoAdjunto.nombre = "Certificado.pdf";
        // this.archivoAdjunto.cargadoPorSistema = true;
        var obj: any;
        obj = new Object;
        obj.doc = this.archivoAdjunto;
        obj.tipo = 'Certificado';
        this.enviarDocumento.emit(obj); // Se agrego por que si no, no deja pasar
        this.cambioDocumentacion(true); /****Cambi*******/
      } else {
        this.activarCargadaCerti = true;
        this.pathCertificado = [{path: ' ', name: ''}];
      }
      if (nombreHoja) {
        let nombreHoja =  this.partidaPrioridad.sds + '.pdf';
        this.activarCargaDoc = false;
        let pathHoja = this.path + 'HojasSeguridad/' + fabricante + '/' + this.partidaPrioridad.sds + '.pdf';
        this.pathHojaSeg = [{path: pathHoja, name: nombreHoja}];
        this.archivoAdjunto.nombre = "HojaSeguridad.pdf";
        // this.archivoAdjunto.cargadoPorSistema = true;
        var obj: any;
        obj = new Object;
        obj.doc = this.archivoAdjunto;
        obj.tipo = 'HojaSeguridad';
        this.enviarDocumento.emit(obj); // Se agrego por que si no, no deja pasar
      } else {
        this.activarCargaDoc = true;
      }
      this.documentacion = true;
      // this.enviarConDocumentacion.emit(false);
      // let url = this.pahtDoc + 'GestorEnvio/Fedex/' + data.current.File;
  }


  creacionListaCmbAno()
  {
    var list = new Array<any>();
    var obj:any;
    var fecha:Date = new Date();
    var anoAct:any;
    var limiteAnos:number = 0;
    var contLlave:number = 0;

    anoAct = fecha.getFullYear();
    limiteAnos = anoAct + 10;

    console.log("año" + anoAct)

    obj = new Object;
    obj.nombre = "--ND--";
    obj.key = 0;

    list.push(obj);

    contLlave = 1;

    for (var i:number = anoAct; i < limiteAnos; i++)
    {
      obj = new Object;
      obj.nombre = i+"";
      obj.key = contLlave;

      list.push(obj);

      contLlave = contLlave + 1;

    }
    this.anios = list;

  }

  recibeValosCombo(index: any, tipo: string) {
    var obj: any;
    obj = new Object;
    obj.tipo = tipo;
    obj.item = index;
   this.actualizarPartida.emit(obj);

  }

  cambioLote(texto:string){
    var obj: any;
    obj = new Object;
    obj.tipo = 'lote';
    obj.nombre = texto.trim();
    obj.item = obj;
    if (this.partidaPrioridad.lote === null || this.partidaPrioridad.lote === undefined) {
      this.partidaPrioridad.lote = '';
    }

    if (this.partidaPrioridad.lote.trim() !== texto.trim()) {
      this.archivoAdjunto.nombre = '';
      this.pathCertificado = [{path: null, name: ''}];
      this.partidaPrioridad.documentacion = null;
      this.cambioDocumentacion(true);
      this.actualizarPartida.emit(obj);
    }
  }
  cambioCantidad(texto: string) {
    var obj: any;
    obj = new Object;
    obj.tipo = 'cantidad';
    obj.nombre = texto.trim();
    obj.item = obj;
    this.actualizarPartida.emit(obj);
  }
  cambioUnidad(texto: string) {
    var obj: any;
    obj = new Object;
    obj.tipo = 'unidad';
    obj.nombre = texto;
    obj.item = obj;
    this.actualizarPartida.emit(obj);
  }
  cambioEdicion(texto: string) {
  var obj: any;
  obj = new Object;
  obj.tipo = 'edicion';
  obj.nombre = texto.trim();
  obj.item = obj;
  this.actualizarPartida.emit(obj);
  }
  enviarDocumentacion(archivo:any,tipo:string){

    this.archivoAdjunto = new DocumentoAdjunto();
    this.archivoAdjunto.archivo = archivo;
    if (tipo === 'Certificado') {
      this.archivoAdjunto.nombre = "Certificado.pdf";
    } else {
      this.archivoAdjunto.nombre = "HojaSeguridad.pdf";
    }

    var obj: any;
    obj = new Object;
    obj.doc = this.archivoAdjunto;
    obj.tipo = tipo;
    this.enviarDocumento.emit(obj);
  }

  cambioDocumentacion(checkSelect:boolean){
    this.conDocumentacion = checkSelect;
    console.log(checkSelect);
    if (this.grDocumento === undefined) {
      setTimeout(() => {
        this.cambioDocumentacion(this.conDocumentacion);
      }, 500);
    }
    this.enviarConDocumentacion.emit(checkSelect);
    if (this.grDocumento !== undefined) {
      if (checkSelect) {
        this.grDocumento.nativeElement.style.opacity = 1;
      }
      else {
        this.grDocumento.nativeElement.style.opacity = 0.5;
      }
    }

  }

  ngOnChanges(change: SimpleChanges) {
    console.log(change);
  }



}
