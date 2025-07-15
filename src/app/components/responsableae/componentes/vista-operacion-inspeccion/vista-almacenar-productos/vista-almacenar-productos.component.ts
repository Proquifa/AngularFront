import { Component, OnInit, Output, Input, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { PartidaInspeccion } from '../../../../../class/despachos/PartidaInspeccion.class';
import { Client } from '_debugger';
import { ComunService } from '../../../../../services/comun/comun.service';
import { DocumentoAdjunto } from '../../../../../class/comun/DocumentoAdjunto.class';
import { InspeccionService } from '../../../../../services/inspeccion/inspeccion.service';


@Component({
  selector: 'pn-vista-almacenar-productos',
  templateUrl: './vista-almacenar-productos.component.html',
  styleUrls: ['./vista-almacenar-productos.component.scss']
})
export class VistaAlmacenarProductosComponent implements OnInit {

  @Input() selectedTarima: boolean = false;
  @Input() selectedAnaquel: boolean = false;
  @Input() ubicacionNoDes: any;
  @Input() obtenerDatos: boolean;
  @Input() partidaPrioridad: PartidaInspeccion = new PartidaInspeccion();
  @Output() finalizarPartida: EventEmitter<any> = new EventEmitter<any>();
  @Output() ubicacionImprimir: EventEmitter<any> = new EventEmitter<any>();
  //  @Output() guardarDocumentacion:EventEmitter<any> = new EventEmitter<any>();
  seleccionaAnaquel: boolean = false;
  seleccionaTarima: boolean = true;
  colorETanaquel: string = '#008895';
  colorETtarima: string = '#008895';
  imagenTipoManejo: string = "./assets/Images/ambiente.svg";
  comboLetra: boolean = true;
  comboNumero: boolean = true;
  tipoManejo: string;
  mostrarPopFinalizar: boolean = false;
  mostrarSeccionDespachable: boolean = false;
  mostrarSeccionNoDespachable: boolean = false;
  diferenteDeAmbiente: boolean = false;
  cantidadDespachable: string = "";
  cantidadNoDespachable: string = "";
  letraAnaquel: string = "";
  numeroAnaquel: number = 0;
  ubicacion: string = "";
  textoUbicacion: string = "";
  textoManejo: string = "";
  ruta: String = 'http://localhost:8081/SAP/Etiqueta/FD-022416-3916-2.pdf';
  cPedido: any;
  pPedido: any;
  etiqueta: string;
  ubicacionAux: string;
  ubicacionIncidencia: string;
  ubicacionTarima: string;
  tarima: Boolean;
  idUbicacion: string;
  idUbicacionTarima: string;



  numeros: any = [
    { nombre: '1', key: 0 },
    { nombre: '2', key: 1 },
    { nombre: '3', key: 2 },
    { nombre: '4', key: 3 },
    { nombre: '5', key: 4 },
    { nombre: '6', key: 5 },
    { nombre: '7', key: 6 }
  ];


  letras1: any = [{ nombre: "A", key: 0 }, { nombre: "B", key: 1 }, { nombre: "C", key: 2 }, { nombre: "D", key: 3 }, { nombre: "E", key: 4 }, { nombre: "F", key: 5 },
  { nombre: "G", key: 6 }, { nombre: "H", key: 7 }, { nombre: "I", key: 8 }, { nombre: "J", key: 9 }, { nombre: "K", key: 10 }, { nombre: "L", key: 11 }, { nombre: "M", key: 12 }, { nombre: "N", key: 13 },
  { nombre: "O", key: 14 }, { nombre: "P", key: 15 }, { nombre: "Q", key: 16 }, { nombre: "R", key: 17 }, { nombre: "S", key: 18 }, { nombre: "U", key: 19 }, { nombre: "V", key: 20 }, { nombre: "W", key: 21 }, { nombre: "X", key: 22 },
  { nombre: "Y", key: 23 }, { nombre: "Z", key: 24 }];


  letras2: any = [
    { nombre: 'A', key: 0 },
    { nombre: 'B', key: 1 },
    { nombre: 'C', key: 2 },
    { nombre: 'D', key: 3 }
  ];


  letras3: any = [
    { nombre: 'A', key: 0 },
    { nombre: 'B', key: 1 }
  ];

  letras: any = [{ nombre: '--', key: 0 },];
  constructor(private comunService: ComunService, private _insp: InspeccionService) {
  }

  ngOnInit() {
    //  this.guardarDocumentacion.emit(true);
    this.comunService.guardarVideo(true);
    this.iniciarVista();
  }

  iniciarVista() {
    this.letras = new Array<any>();
    this.cPedido = this.partidaPrioridad.cpedido;
    this.pPedido = this.partidaPrioridad.partidaPedido;
    if (this.partidaPrioridad.pasosImprimirEtiqueta == true) {
      this.etiqueta = "FD-" + this.cPedido + "-" + this.pPedido;
      if (this.partidaPrioridad.contDespachable > 0){ // Se comento para no obtener la ubicacion dos veces
        this.obtenerUbicacion(false);
      }

    } else {

      if (this.partidaPrioridad.contIncidencia == this.partidaPrioridad.cantidadCompra)
        this.etiqueta = "QR - " + this.partidaPrioridad.qrBolsaIncidencia;
      else {
        this.etiqueta = "QR - " + this.partidaPrioridad.codigoQrBolsa;
        this.obtenerUbicacion(false);
      }
    }
    this.recibeTipo();
    /*this.seleccionUbicacionAmbiente('anaquel');*/
    /*  this.volverAimprimir(); */
    if (this.partidaPrioridad.contDespachable > 0) {
      this.mostrarSeccionDespachable = true;
      if (this.partidaPrioridad.contDespachable == 1) { this.cantidadDespachable = this.partidaPrioridad.contDespachable + " " + "Pieza"; }
      else { this.cantidadDespachable = this.partidaPrioridad.contDespachable + " " + "Piezas"; }

      if (this.partidaPrioridad.manejo == "Congelación" || this.partidaPrioridad.manejo == "Congelacion") {
        this.letras = new Array<any>();
        Array.prototype.push.apply(this.letras, this.letras3);
        this.textoUbicacion = "Ubicación";
        this.textoManejo = "Congelación";
        this.diferenteDeAmbiente = true;
      }
      else if (this.partidaPrioridad.manejo == "Refrigeración" || this.partidaPrioridad.manejo == "Refrigeracion") {
        this.letras = new Array<any>();
        Array.prototype.push.apply(this.letras, this.letras2);
        this.textoUbicacion = "Ubicación";
        this.textoManejo = "Refrigeración";
        this.diferenteDeAmbiente = true;
      }
      else {
        if (this.partidaPrioridad.contDespachable < 1) {
          this.diferenteDeAmbiente = true;
        }
        else {
          this.letras = new Array<any>();
          Array.prototype.push.apply(this.letras, this.letras1);
          this.textoUbicacion = "Ubicación ";
          this.textoManejo = "Ambiente";
          this.diferenteDeAmbiente = false;
        }
      }

      var obj: any;
      obj = new Object;
      obj.nombre = 'Seleccionar';
    } else { this.diferenteDeAmbiente = true; }
    if (this.partidaPrioridad.contIncidencia > 0) {
      this.mostrarSeccionNoDespachable = true;
      if (this.partidaPrioridad.contIncidencia == 1)
        this.cantidadNoDespachable = this.partidaPrioridad.contIncidencia + " " + "Pieza";
      else { this.cantidadNoDespachable = this.partidaPrioridad.contIncidencia + " " + "Piezas"; }
      if (this.partidaPrioridad.manejo == 'Ambiente') {
        this.ubicacionIncidencia = 'Anaquel  8A';
      } else if (this.partidaPrioridad.manejo == "Refrigeración" || this.partidaPrioridad.manejo == "Refrigeracion") {
        this.ubicacionIncidencia = 'Refrigerador G ';
      } else if (this.partidaPrioridad.manejo == "Congelación" || this.partidaPrioridad.manejo == "Congelacion") {
        this.ubicacionIncidencia = 'Congelador C';
      }
    }
  }



  seleccionUbicacionAmbiente(vieneDe: String) {
    this.letras = new Array<string>();
    if (vieneDe == 'anaquel') {
      this.tarima = false;
      this.obtenerUbicacion(true);
      // this.seleccionaAnaquel = true;
      if (this.seleccionaTarima) {
        // this.seleccionaTarima = false;
      }
    }

    if (vieneDe == 'tarima') {
      this.tarima = true;
      if (this.seleccionaAnaquel) {
        // this.seleccionaAnaquel = false;
      }
      // this.seleccionaTarima = true;
      if (this.ubicacionTarima == undefined) {
        this.obtenerUbicacion(true);
      }
    }

  }
  /// Metodo a utilizar
  seleccionUbicacionAmbienteAux(vieneDe: String) {
    this.letras = new Array<string>();
    if (vieneDe == 'anaquel') {
      this.tarima = false;
      this.obtenerUbicacion(true);
       this.seleccionaAnaquel = false;
      if (!this.seleccionaTarima) {
         this.seleccionaTarima = true;
      }
    }

    if (vieneDe == 'tarima') {
      this.tarima = true;
      this.seleccionaTarima = false;
      if (!this.seleccionaAnaquel) {
         this.seleccionaAnaquel = true;
      }
      if (this.ubicacionTarima == undefined) {
        this.obtenerUbicacion(true);
      }
    }

  }
  ngOnChanges(change: SimpleChanges) {

    if (this.obtenerDatos) {
      this.mandarInformacionDevista();
    }
    else if (!this.obtenerDatos) {
      console.log("false");
    }

  }

  recibeValosCombo(index: any, tipo: string) {

    if (tipo == "letra") {
      this.letraAnaquel = index.nombre;
    }
    else if (tipo == "numero") {
      this.numeroAnaquel = index.nombre;
    }

  }


  mandarInformacionDevista() {
    if (this.tarima)
      this.ubicacion = this.idUbicacionTarima;
    else
      this.ubicacion = this.idUbicacion;

    let cantidadCompra = this.partidaPrioridad.cantidadCompra;
    let despachables = this.partidaPrioridad.contDespachable;
    let incidencia = this.partidaPrioridad.contIncidencia;
    var obj: any;
    obj = new Object;
    if (cantidadCompra > incidencia && cantidadCompra > despachables) {
      if (incidencia > 0) {
        if (this.partidaPrioridad.manejo == 'Ambiente')
          obj.ubicacionIncidencia = 'Anaquel_8A'
        else if (this.partidaPrioridad.manejo == "Refrigeración" || this.partidaPrioridad.manejo == "Refrigeracion")
          obj.ubicacionIncidencia = 'Refrigerador_1G';
        else if (this.partidaPrioridad.manejo == "Congelación" || this.partidaPrioridad.manejo == "Congelacion")
          obj.ubicacionIncidencia = 'Congelador_C';
      }
      if (despachables > 0) {
        obj.ubicacion = this.ubicacion;
        obj.estado = "Despachable";

      }
    } else if (despachables == cantidadCompra) {

      obj.letraAnaquel = this.letraAnaquel;
      // obj.numAnaquel =  this.numeroAnaquel;
      obj.ubicacion = this.ubicacion;
      obj.estado = "Despachable";
      // this.finalizarPartida.emit(obj2);
    } else if (incidencia == cantidadCompra) {
      if (this.partidaPrioridad.manejo == 'Ambiente') {
        obj.ubicacionIncidencia = 'Anaquel_8A';
        this.ubicacionImprimir.emit('Anaquel 8A');
      } else if (this.partidaPrioridad.manejo == "Refrigeración" || this.partidaPrioridad.manejo == "Refrigeracion") {
        obj.ubicacionIncidencia = 'Refrigerador_1G';
        this.obtenerUbicacion(false);
      } else if (this.partidaPrioridad.manejo == "Congelación" || this.partidaPrioridad.manejo == "Congelacion") {
        obj.ubicacionIncidencia = 'Congelador_C';
        this.obtenerUbicacion(false);
      }
      obj.estado = "No Despachable";
      // this.finalizarPartida.emit(obj3);
    }
    this.finalizarPartida.emit(obj);

  }


  recibeTipo() {

    if (this.partidaPrioridad.manejo == 'Congelacion' || this.partidaPrioridad.manejo == 'Congelación') {
      this.imagenTipoManejo = "./assets/Images/congelacion.svg";
      this.tipoManejo = "Congelación";
    }
    else if (this.partidaPrioridad.manejo == 'Refrigeracion' || this.partidaPrioridad.manejo == 'Refrigeración') {
      this.imagenTipoManejo = "./assets/Images/refrigeracion.svg";
      this.tipoManejo = "Refrigeración";
    }
    else {
      this.imagenTipoManejo = "./assets/Images/ambiente.svg";
      this.tipoManejo = "Ambiente";
    }
  }


  finalizar() {

  }


  obtenerUbicacion(tipo: boolean) {
    var data: any;
    let ubic: string;
    data = new Object;
    data = {
      tarima: tipo,
      manejo: this.partidaPrioridad.manejo,
      idPPedido: this.partidaPrioridad.idPPedido,
      tipoProducto: this.partidaPrioridad.tipo,
      piezas: this.partidaPrioridad.contDespachable,
      idProducto: this.partidaPrioridad.idProducto,
      proveedor: this.partidaPrioridad.fabrica
    };
    this._insp.obtenerUbicacionInspeccion(data).subscribe(
      data => {
        console.log("Ubicacion ", data.current);
        let string = data.current;
        let parts: any[] = string.split("_");
        let respuesta = parts[0];
        let letra = parts[1];

        if (respuesta !== 'Tarima') {
          this.ubicacionAux = respuesta + " " + letra;
          this.idUbicacion = data.current;
        } else {
          this.ubicacionTarima = respuesta + " " + letra;
          this.idUbicacionTarima = data.current;
        }
       /* if (respuesta === 'Anaquel') {
          ubic = 'A_' + letra;
        } else if (respuesta === 'Congelador') {
          ubic = 'CN_' + letra;
        } else if (respuesta === 'Tarima') {
          ubic = 'T_' + letra;
        }*/
        if (respuesta === 'Anaquel') {
          ubic = 'A' + letra;
        } else if (respuesta === 'Congelador') {
          ubic = 'EC' + letra;
        } else if (respuesta === 'Refrigerador') {
          ubic = 'ER' + letra;
        } else if (respuesta === 'Tarima') {
          ubic = 'T' + letra;
        }
        this.ubicacionImprimir.emit(ubic);
      }, error => {

      }
    );
  }



}
