import { Component, OnInit, ViewChild, ElementRef, Input, EventEmitter, Output, OnDestroy, SimpleChange } from '@angular/core';
import { PartidaInspeccion } from '../../../../class/despachos/PartidaInspeccion.class';
import { DocumentoAdjunto } from '../../../../class/comun/DocumentoAdjunto.class';
import { ComunService } from '../../../../services/comun/comun.service';

@Component({
  selector: 'pq-inspeccion-nivel-pieza',
  templateUrl: './inspeccion-nivel-pieza.component.html',
  styleUrls: ['./inspeccion-nivel-pieza.component.scss']
})
export class InspeccionNivelPiezaComponent implements OnInit {
  @Output() enviarUbiNoDes: EventEmitter<any> = new EventEmitter<any>();
  @Output() enviaPiezas: EventEmitter<any> = new EventEmitter<any>();
  @Output() contador: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventCambioIndex: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventlistaPiezas: EventEmitter<any> = new EventEmitter<any>();
  @Output() enviarConDocumentacion: EventEmitter<any> = new EventEmitter<any>();
  @Input() partidaPrioridad: PartidaInspeccion = new PartidaInspeccion();
  @Input() archCertificado: DocumentoAdjunto = new DocumentoAdjunto();
  @Input() archSeguridad: DocumentoAdjunto = new DocumentoAdjunto();
  @Input() conDocumentacion: boolean;
  @ViewChild('input') private elementRef: ElementRef;
  @ViewChild('popInf') private pop: ElementRef;
  @ViewChild('qr') private textArea: ElementRef;
  @ViewChild("codigo") private codigo: ElementRef;

  presentacion: string;
  nolote: string;
  caducidad: string;
  almacenaje: string;
  transportacion: string;
  count: number = 0;
  totalPiezas: number = 5;
  mostrar: boolean;
  cambioIndex: number = 1;
  acumPiezas: number = 1;
  contIncidencia: number;
  contDespachable: number;
  cambioI: boolean;
  cambioAlmacenar: boolean;
  cambio2: boolean;
  seconds;
  tipo: string;
  pza: PartidaInspeccion = new PartidaInspeccion();
  list: any = new Array<any>();
  pzaAux: PartidaInspeccion = new PartidaInspeccion();
  //partidaPrioridad: PartidaInspeccion;
  esPublicacion: boolean = false;
  edicion: string = '2017';
  idioma: string = 'Español'
  vistaPieza: boolean = false;

  mostrarHoja: boolean;
  copiaPartidaPrioridad: PartidaInspeccion;
  codigoQr: string;
  tipoBolsa: string;
  constructor(private comunService: ComunService) { }

  ngOnInit() {
    //  this.copiaPartidaPrioridad = Object.assign(new PartidaInspeccion, this.copiaPartidaPrioridad);

    // this.partidaPrioridad = Object.assign(new PartidaInspeccion, this.partidaPrioridad2);
    console.log(this. archCertificado);
    console.log(this.archSeguridad);
    if (this.archSeguridad.nombre == undefined) {
      this.mostrarHoja = false;

    } else {
      this.mostrarHoja = true;
    }

    //
    // if(this.archCertificado.nombre == undefined || this.archCertificado.nombre == ""){
    //     this.pza.documento = "";
    //     this.pzaAux.documento = "";
    // } else{
    //    this.pza.documento = this.partidaPrioridad.codigo + "-" + this.partidaPrioridad.lote;
    //    this.pzaAux.documento = this.partidaPrioridad.codigo + "-" + this.partidaPrioridad.lote
    // }
    this.count = 0;
    this.seconds = setTimeout(() => {
      this.elementRef.nativeElement.focus();
    }, 500);
    this.enviaInfo();
    this.iniciarVista();
    this.listaPiezas();
    this.setPzaAux();
    this.enviarConDocumentacion.emit(this.conDocumentacion);
    console.log(this.conDocumentacion);
    //  this.cambioI = true;

  }

  ngDoCheck() {

    //console.log(this.pzaAux);
  }


  iniciarVista() {
    this.presentacion = this.partidaPrioridad.tipoPresentacion;
    this.almacenaje = this.partidaPrioridad.manejo;
    this.transportacion = this.partidaPrioridad.manejoTransporte;
    this.caducidad = this.partidaPrioridad.caducidad;
    this.nolote = this.partidaPrioridad.lote;
    if (this.partidaPrioridad.acumPiezas === undefined || this.partidaPrioridad.acumPiezas === NaN) {
      this.acumPiezas = this.partidaPrioridad.acumPiezas = 1;
    } else { this.acumPiezas = this.partidaPrioridad.acumPiezas; }
    this.contIncidencia = this.partidaPrioridad.contIncidencia = 0;
    this.contDespachable = this.partidaPrioridad.contDespachable = 0;
    this.totalPiezas = this.partidaPrioridad.cantidadCompra;
    if (this.partidaPrioridad.tipo === 'Publicaciones') {
      this.idioma = this.partidaPrioridad.idioma;
      this.edicion = this.partidaPrioridad.edicion;
    }
    if (this.totalPiezas == 1) { this.vistaPieza = true; }
  }

  uniKeyCode($event, ) {
    if ($event.keyCode == 32) {
      this.count = this.count + 1;
      this.seconds = setTimeout(() => {
        if (this.count == 1) {
          this.count = 0;
          this.partidaPrioridad.acumPiezas = this.partidaPrioridad.acumPiezas + 1;
          this.partidaPrioridad.contDespachable = this.partidaPrioridad.contDespachable + 1;
          //  console.log("TOTAL DESPACHABLE:",   this.partidaPrioridad.contDespachable);
          this.enviaInfo();
          if (this.partidaPrioridad.acumPiezas > this.totalPiezas) {
            this.partidaPrioridad.acumPiezas = this.partidaPrioridad.acumPiezas - 1;
            this.tipoBolsa = "";
            this.cambioI = true;
            this.comunService.videoZindex(true);
            this.count = 0;
            this.elementRef.nativeElement.style.display = 'none';
            this.enviaInfo();
          }
        }
      }, 500);
      this.seconds = setTimeout(() => {
        if (this.count == 2) {
          this.comunService.videoZindex(true);
          this.partidaPrioridad.acumPiezas = this.partidaPrioridad.acumPiezas;
          this.mostrar = true;
          this.count = 0;
          this.elementRef.nativeElement.style.display = 'none';
          this.enviaInfo();
        }
      }, 500);
    }
  }//cierre metodo

  cerrarPopInf(dato: any) {
    console.log(dato);
    this.partidaPrioridad.codigoQrBolsa = dato.codigo;
    this.pop.nativeElement.style.display = 'none';
    this.comunService.videoZindex(false);
    if (dato.cambio == true)
      this.eventCambioIndex.emit(this.cambioIndex);

  }


  recibeInformacion(info: any) {
    console.log(info);
    this.presentacion = info.presentacion;
    this.almacenaje = info.almacen;
    this.caducidad = info.caducidad;
    this.transportacion = info.transportacion;
    this.nolote = info.lote;
    this.acumPiezas = info.acumPiezas;
  }

  cierraEditarlote(cancelar: boolean) {
    var obj: any;
    obj = new Object;
    this.mostrar = cancelar;
    this.comunService.videoZindex(false);
    this.count = 0;
    if (this.mostrar == false) {
      this.partidaPrioridad.acumPiezas = this.partidaPrioridad.acumPiezas;
      if (this.partidaPrioridad.acumPiezas > this.totalPiezas) {
        this.partidaPrioridad.acumPiezas = this.partidaPrioridad.acumPiezas - 1;
        this.tipoBolsa = "";
        this.cambioI = true;

        this.comunService.videoZindex(true);
        this.count = 0;
        this.elementRef.nativeElement.style.display = 'none';
      } else {
        this.elementRef.nativeElement.style.display = 'block';
        this.elementRef.nativeElement.focus();
      }
    }
    else {
      this.elementRef.nativeElement.style.display = 'block';
      this.elementRef.nativeElement.focus();
      this.mostrar = false;
      this.partidaPrioridad.acumPiezas = this.partidaPrioridad.acumPiezas + 1;
      if (this.list[this.partidaPrioridad.acumPiezas - 2].estadoFisico == 'No Despachable') {
        this.partidaPrioridad.contIncidencia = this.partidaPrioridad.contIncidencia + 1
      } else {
        this.partidaPrioridad.contDespachable = this.partidaPrioridad.contDespachable + 1
      }
      if (this.partidaPrioridad.acumPiezas > this.totalPiezas) {
        this.partidaPrioridad.acumPiezas = this.partidaPrioridad.acumPiezas - 1;
        if (this.partidaPrioridad.pasosImprimirEtiqueta == true) {
          this.cambioI = true;
        } else {
          if (this.partidaPrioridad.contIncidencia == this.partidaPrioridad.cantidadCompra) {
            this.cambioAlmacenar = true
          } else {
            this.tipoBolsa = "";
            this.cambioI = true;
          }
        }
        this.comunService.videoZindex(true);
        this.count = 0;
        this.elementRef.nativeElement.style.display = 'none';
      } else {
        this.elementRef.nativeElement.style.display = 'block';
        this.elementRef.nativeElement.focus();
      }
    }
    this.enviaInfo();
  }

  enviaInfo() {
    var obj: any;
    obj = new Object;
    obj.tipo = 'datosNivelPieza';
    if (this.partidaPrioridad.acumPiezas === undefined || this.partidaPrioridad.acumPiezas === NaN) {
      this.partidaPrioridad.acumPiezas = this.partidaPrioridad.acumPiezas = 1;
      obj.acumPiezas = this.partidaPrioridad.acumPiezas;
    } else { this.partidaPrioridad.acumPiezas = this.partidaPrioridad.acumPiezas; }

    // if(this.partidaPrioridad.contDespachable == 0){
    //   this.partidaPrioridad.contDespachable = this.partidaPrioridad.contDespachable = 1;
    obj.contDespachable = this.partidaPrioridad.contDespachable;
    // } else {   this.partidaPrioridad.contDespachable = this.partidaPrioridad.contDespachable; }
    obj.contIncidencia = this.partidaPrioridad.contIncidencia;
    obj.contDespachable = this.partidaPrioridad.contDespachable;
    obj.acumPiezas = this.partidaPrioridad.acumPiezas;
    this.totalPiezas = this.partidaPrioridad.cantidadCompra;
    obj.totalPiezas = this.partidaPrioridad.cantidadCompra;
    this.enviaPiezas.emit(obj);
    console.log("objeto enviaInfo", obj);
  }

  listaPiezas() {
    for (let i: number = 0; i < this.totalPiezas; i++) {
      this.pza.codigo = this.partidaPrioridad.codigo;
      this.pza.tipoPresentacion = this.partidaPrioridad.tipoPresentacion;
      this.pza.lote = this.partidaPrioridad.lote;
      this.pza.loteOriginal = this.partidaPrioridad.lote; // lote ???
      this.pza.caducidad = this.partidaPrioridad.caducidad;

      if (this.partidaPrioridad.tipo !== 'Publicaciones') {
        var arreglo: any = new Array<any>()
        arreglo = (this.partidaPrioridad.caducidad).split(' ');
        this.pza.mesCaduca = arreglo[0];
        this.pza.anoCaduca = arreglo[1];
      }
      this.pza.concepto = this.partidaPrioridad.concepto;
      this.pza.fisicamenCon = 'Si'
      this.pza.estadoFisico = 'Despachable';
      this.pza.idioma = this.partidaPrioridad.idioma;  // idiomaV
      this.pza.edicion = this.partidaPrioridad.edicion; //edicionV
      this.pza.conDocumentacion = true;
      this.pza.fisicamenteCorrecto = true;
      this.pza.loteCorrecto = true;
      this.pza.descripcionCorrecta = true;
      this.pza.loteDistinto = false;
      this.pza.catCorrecto = true;
      this.pza.caducidadCorrecta = true;
      this.pza.presentacionCorrecta = true;
      this.pza.documentacionCorrecta = true;
      this.pza.despachable = true;
      this.pza.edicionCorrecta = true;
      this.pza.idiomaCorecto = true;
      this.pza.tipo = this.partidaPrioridad.tipo;
      this.pza.fabrica = this.partidaPrioridad.fabrica;
      this.pza.manejoTransporte = this.partidaPrioridad.manejoTransporte;
      this.pza.compra = this.partidaPrioridad.compra;
      this.pza.mesNum = this.partidaPrioridad.mesNum;
      this.pza.idCompra = this.partidaPrioridad.idPartidaCompra; //
      this.pza.idPPedido = this.partidaPrioridad.idPPedido;
      this.pza.fFrente = "";
      this.pza.fArriba = "";
      this.pza.fAbajo = "";
      this.pza.certificado = this.archCertificado.archivo;
      this.pza.hojaSeguridad = this.archSeguridad.archivo;


      // this.pza.control = this.partidaPrioridad.control; //
      // this.pza.cliente = this.partidaPrioridad.idCliente; //cliente  Publicaciones
      if (this.partidaPrioridad.tipo === 'Publicaciones') {
        this.pza.esPublicacion = true;
        this.esPublicacion = true;
      } else {
        this.pza.esPublicacion = false;
        this.esPublicacion = false;
      }
      /********************/
    /*  if (this.partidaPrioridad.tipo == 'Publicación') {
        this.pza.esPublicacion = true;
      }
      else {
        this.pza.esPublicacion = false;
      }*/

      if (this.archCertificado.nombre == undefined || this.archCertificado.nombre == "") {
        this.pza.documento = "";
      } else {
        this.pza.documento = this.partidaPrioridad.codigo + "-" + this.partidaPrioridad.lote;
      }

      this.list.push(Object.assign(new PartidaInspeccion, this.pza));
    }
    //console.log(this.list);
    this.eventlistaPiezas.emit(this.list);
  }

  actualizarPieza(pza: any) {
    //console.log(pza);
    this.list[this.partidaPrioridad.acumPiezas - 1] = Object.assign(new PartidaInspeccion, pza);
    console.log(this.list);
    this.eventlistaPiezas.emit(this.list);
    this.setPzaAux();
  }

  setPzaAux() {
    if (this.partidaPrioridad !== undefined) {
      this.pzaAux.codigo = this.partidaPrioridad.codigo;
      this.pzaAux.tipoPresentacion = this.partidaPrioridad.tipoPresentacion;
      this.pzaAux.lote = this.partidaPrioridad.lote;
      this.pzaAux.loteOriginal = this.partidaPrioridad.lote; // lote ???
      this.pzaAux.caducidad = this.partidaPrioridad.caducidad;
      if (this.partidaPrioridad.tipo !== 'Publicaciones') {
        var arreglo: any = new Array<any>()
        arreglo = (this.partidaPrioridad.caducidad).split(' ');
        this.pzaAux.mesCaduca = arreglo[0];
        this.pzaAux.anoCaduca = arreglo[1];
      }
      this.pzaAux.concepto = this.partidaPrioridad.concepto;
      this.pzaAux.fisicamenCon = 'Si'
      this.pzaAux.estadoFisico = "Despachable";
      this.pzaAux.idioma = this.partidaPrioridad.idioma;  // idiomaV
      this.pzaAux.edicion = this.partidaPrioridad.edicion; //edicionV
      this.pzaAux.conDocumentacion = true;
      this.pzaAux.fisicamenteCorrecto = true;
      this.pzaAux.loteCorrecto = true;
      this.pzaAux.descripcionCorrecta = true;
      this.pzaAux.loteDistinto = false;
      this.pzaAux.catCorrecto = true;
      this.pzaAux.caducidadCorrecta = true;
      this.pzaAux.presentacionCorrecta = true;
      this.pzaAux.documentacionCorrecta = true;
      this.pzaAux.despachable = true;
      this.pzaAux.edicionCorrecta = true;
      this.pzaAux.idiomaCorecto = true;
      this.pzaAux.tipo = this.partidaPrioridad.tipo;
      this.pzaAux.fabrica = this.partidaPrioridad.fabrica;
      this.pzaAux.manejoTransporte = this.partidaPrioridad.manejoTransporte;
      this.pzaAux.compra = this.partidaPrioridad.compra;
      this.pzaAux.mesNum = this.partidaPrioridad.mesNum;
      this.pzaAux.idCompra = this.partidaPrioridad.idPartidaCompra; //
      this.pzaAux.idPPedido = this.partidaPrioridad.idPPedido;
      this.pzaAux.fFrente = "";
      this.pzaAux.fArriba = "";
      this.pzaAux.fAbajo = "";
      this.pzaAux.certificado = this.archCertificado;
      this.pzaAux.hojaSeguridad = this.archSeguridad;
      this.pzaAux.reporte = "";
      this.pzaAux.rechazoXInsp = null;
      this.pzaAux.rechazoXDoc = null;

      //this.pza.control = this.partidaPrioridad.control; //
      //this.pza.cliente = this.partidaPrioridad.idCliente; //cliente
      if (this.partidaPrioridad.tipo === 'Publicaciones') {
        this.pza.esPublicacion = true;
      }
      else {
        this.pza.esPublicacion = false;
      }

      if (this.archCertificado.nombre == undefined || this.archCertificado.nombre == "") {
        this.pzaAux.documento = "";
      } else {
        this.pzaAux.documento = this.partidaPrioridad.codigo + "-" + this.partidaPrioridad.lote
      }
    }
  }
  recibirUbicacionNoDesp($ubicacion){
    console.log($ubicacion);
    this.enviarUbiNoDes.emit($ubicacion);
  }

}
