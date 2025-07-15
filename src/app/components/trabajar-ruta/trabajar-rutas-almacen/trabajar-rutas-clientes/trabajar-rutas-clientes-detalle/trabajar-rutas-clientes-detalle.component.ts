import {Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {TrabajarRutasClienteDetalleService} from "./trabajar-rutas-clientes-detalle.service";
import {SessionUser} from '../../../../../services/session/session.service';

@Component({
  selector: "pn-trabajar-rutas-clientes-detalle",
  templateUrl: "./trabajar-rutas-clientes-detalle.component.html",
  styleUrls: ["./trabajar-rutas-clientes-detalle.component.scss"]
})

export class TrabajarRutasClientesDetalleComponent implements OnInit {
  auxDataClientCurrent: any[] = [];
  valoresData: any[] = [];
  sumaDePackingList: any;

  encabezadosPasckinList: any[] = [];
  elementosPackingList: any[] = [];
  tipoDeProducto: any[] = [];
  imgTipoValidacionArr: any[] = [];
  indexPacking: number = 0;
  datoPL: any;
  @ViewChild("text")
  private elementRef: ElementRef;
  public active = true;
  @Output() RegresarVistaClie: EventEmitter<any> = new EventEmitter<any>();
  @Output() event: EventEmitter<any> = new EventEmitter<any>();
  @Output() searchClienthanged: EventEmitter<string> = new EventEmitter<string>();
  @Input() Cliente: string;
  @Input() idCliente: string;
  idUsuario: any;
  lstResultadoCotizaciones: any[] = [];

  llenarArregloContacto: any[] = [];
  packing_list: any[] = [];
  listaAuxiliar: any[] = [];

  contacto: string = "";
  telefono: string = "";
  puesto: string = "";
  email: string = "";

  labelComentarios: any = true;
  focus: boolean = true;
  vistaInicialActiva: boolean = true;
  contador: number = 0;
  cantidadPL: number = 0;
  texto = "";
  colectarElemtos: any[] = [];
  colectarElemtosAux: any[] = [];
  elementos: any[] = [];

  codigosBarra: any [] = [];
  codigosValidos: any [] = [];
  datosFormulario: any [] = [];
  btnsFinalizar: any [] = [];
  codigosBarraElemento: string;
  listaColectarElementosAuxiliar: any[] = [];
  mensaje: string;
  popError: boolean;
  activarAlertExit: boolean;

  cargarDocumento: any;
  archivo: any;

  refrescar: boolean = true;
  @ViewChild("textarea") private textArea: ElementRef; /// SE USA PARA ACTIVAR EL TEXT-AREA
  constructor(
    private _trabajarRutasClienteDetalleService: TrabajarRutasClienteDetalleService
  ) {
  }

  ngOnInit() {
    this.obtenerPackingListClient();
    console.log(this.elementosPackingList);
    console.log("Creo el objeto");
    this.llenarArregloContacto = [
      {idPendiente: "", contacto: "", tel: "", puesto: "", email: ""}
    ];
    this.textArea.nativeElement.focus();
    console.log(this.elementosPackingList);
  }

  itemSelect(i) {
    this.recibeDocumentacion(null);
    this.colectarElemtosAux = this.colectarElemtos[i];
    this.datoPL = this.colectarElemtosAux[0].packingList;
    this.indexPacking = i;
    this.lstResultadoCotizaciones = [];
    this.listaAuxiliar = [];

    this.lstResultadoCotizaciones = new Array(this.packing_list.length).fill(
      ""
    );

    this.lstResultadoCotizaciones[i] = "divActive";
    console.log("________Valores Data....");
    console.log(this.valoresData[i]);
    console.log("________Valores Data....");
    console.log(this.colectarElemtos);

    console.log("________Valores Data");

    for (const iterator of this.valoresData) {
      this.colectarElemtos.push(iterator);
    }
    this.obtenerImagenes(i);
  }

  obtenerImagenes(index: number) {
    this.imgTipoValidacionArr = [];
    this.colectarElemtos[index].forEach(element => {
      if (element.tipo === "Hielera Congelacion" || element.tipo === "CONGELACIÓN") {
        element.tipo = "CONGELACIÓN";
        console.log("tipo hielera congelacion");
        this.tipoDeProducto.push("Hielera");
        this.contador = element.cant;
        this.cantidadPL += this.contador;
        this.imgTipoValidacionArr.push(
          "./assets/Images/hielera_refri.svg"
        );
      } else if (element.tipo === "Bolsa de transito" || element.tipo === "TRANSITO") {
        element.tipo = "TRANSITO";
        console.log("Bolsa de transito");
        this.tipoDeProducto.push("Bolsa");
        this.contador = element.cant;
        this.cantidadPL += this.contador;
        this.imgTipoValidacionArr.push(
          "./assets/Images/bolsa_ambiente.svg"
        );
      }
      if (element.tipo === "Hielera Refrigeracion" || element.tipo === "REFRIGERACIÓN") {
        element.tipo = "REFRIGERACIÓN";
        this.tipoDeProducto.push("Hielera");
        this.contador = element.cant;
        this.cantidadPL += this.contador;
        this.imgTipoValidacionArr.push(
          "./assets/Images/hielera_refri.svg"
        );
      }
      let comentario = element.comentario;
      if (comentario.length > 0) {
        this.labelComentarios = false;
      } else {
        this.labelComentarios = true;
      }
    });
  }

  public onSubmitFinalizar() {
    console.log("cod barra");
    console.log(this.codigosBarra.length);
    console.log(this.contacto);
    if (this.btnsFinalizar[this.indexPacking] == true) {
      console.log("llamada al servicio");
      this.finalizarEjecutarRutaAlmacen();
      // this.onRemove();
      console.log(this.llenarArregloContacto);
    } else {
      console.log("No se eliminara");
    }
  }

  functionDelete() {
    let index = this.colectarElemtos.indexOf(this.indexPacking);
    console.log("index" + index);

    console.log("Se eliminara posicion " + this.indexPacking);
    var txt;
    if (confirm("Se eliminara posicion " + this.indexPacking)) {
      txt = "FINALIZAR";
      this.elementosPackingList.splice(this.indexPacking, 1);
      setTimeout(() => {
      }, 2000);
      this.itemSelect(0);
    } else {
      txt = "FINALIZAR";
    }
    document.getElementById("botonF").innerHTML = txt;
  }

  onRemove() {

    this.encabezadosPasckinList.splice(this.indexPacking, 1);
    this.colectarElemtos.splice(this.indexPacking, 1);
    this.codigosValidos.splice(this.indexPacking, 1);
    this.codigosBarra.splice(this.indexPacking, 1);
    this.datosFormulario.splice(this.indexPacking, 1);
    this.btnsFinalizar.splice(this.indexPacking, 1);
    this.colectarElemtosAux = this.colectarElemtos[0];
    if (this.encabezadosPasckinList.length == 0) {
      console.log("Entro cambiar vista");
      this.event.emit(false);
    }
    this.event.emit(true);
    this.indexPacking = 0;

  }

  validarFormulario() {

    let error = 0;
    if (this.datosFormulario[this.indexPacking].contacto == "") {
      error++;
    }
    if (this.datosFormulario[this.indexPacking].telefono == "") {
      error++;
    }
    if (this.datosFormulario[this.indexPacking].puesto == "") {
      error++;
    }
    if (this.datosFormulario[this.indexPacking].email == "") {
      error++;
    }
    if (this.archivo == undefined || this.archivo == null) {
      error++;
    }

    for (let item of this.codigosValidos[this.indexPacking]) {
      if (!item) {
        error++;
      }
    }


    if (error == 0) {
      this.btnsFinalizar[this.indexPacking] = true;
    } else {
      this.btnsFinalizar[this.indexPacking] = false
    }
  }

  ngAfterViewInit(): void {
    //this.elementRef.nativeElement.focus();
  }

  /***************************************************************/
  enterAux() {
    let contador = 0;
    const aux = this.codigosBarraElemento.trim();
    this.codigosBarraElemento = aux;
    console.log(this.codigosBarraElemento);
    let validarDup = this.validarCodigoDuplicado(this.codigosBarraElemento);
    if (validarDup) {
      if (this.datoPL == this.codigosBarraElemento) {
        this.codigosValidos[this.indexPacking][0] = true;
        this.listaColectarElementosAuxiliar[this.listaColectarElementosAuxiliar.length] = this.codigosBarraElemento;
      } else {
        for (var i = 0; i < this.colectarElemtosAux.length; i++) {
          if (this.colectarElemtosAux[i].folio === this.codigosBarraElemento) {
            this.codigosValidos[this.indexPacking][i + 1] = true;
            this.listaColectarElementosAuxiliar[this.listaColectarElementosAuxiliar.length] = this.codigosBarraElemento; // Agregar a la lista auxiliar
          } else {
            contador++;
          }
        }
      }

      if (contador === this.colectarElemtosAux.length) {
        this.mensaje = 'Folio incorrecto';
        this.popError = true;
      }
    } else {
      // alert('Elemento duplicado');
      this.mensaje = 'Folio duplicado';
      this.popError = true;
    }
    this.codigosBarraElemento = '';
    this.validarFormulario();
  }

  validarCodigoDuplicado(elemento) {
    let i: number;
    if (this.listaColectarElementosAuxiliar.length === 0) {
      return true;
    } else {
      for (i = 0; i < this.listaColectarElementosAuxiliar.length; i++) {
        if (this.listaColectarElementosAuxiliar[i] === elemento) {
          return false;
        }
      }
      return true;
    }
  }

  /***************************************************************/
  enter(i: any) {
    if (this.colectarElemtosAux[i].folio == this.codigosBarra[this.indexPacking][i].split("\n").join("").trim()) {
      this.codigosValidos[this.indexPacking][i] = true;
    } else {
      this.codigosValidos[this.indexPacking][i] = false;
      this.codigosBarra[this.indexPacking][i] = "";
    }
    this.validarFormulario();
  }

  obtenerPackingListClient() {
    this._trabajarRutasClienteDetalleService
      .obtenerPackingListClient(this.idCliente)
      .subscribe(
        data => {
          this.auxDataClientCurrent = data.current;
          let array = Object.getOwnPropertyNames(this.auxDataClientCurrent);
          this.sumaDePackingList = array.length;

          for (let datos of array) {
            let objetoAux: any = {};
            objetoAux["folio"] = datos;
            objetoAux["piezas"] = 0;
            objetoAux["p1"] = 0;
            objetoAux["p2"] = 0;
            objetoAux["p3"] = 0;
            this.colectarElemtos.push(this.auxDataClientCurrent[datos]);
            this.codigosValidos.push(new Array(this.auxDataClientCurrent[datos].length).fill(false));
            this.codigosValidos[this.codigosValidos.length - 1].splice(0, 0, false);
            this.codigosBarra.push(new Array(this.auxDataClientCurrent[datos].length).fill(""));
            this.datosFormulario.push({contacto: "", telefono: "", puesto: "", email: ""});
            this.btnsFinalizar.push(false);
            for (let datos2 of this.auxDataClientCurrent[datos]) {
              objetoAux["piezas"] += datos2.cant;
              objetoAux["p1"] += datos2.p1;
              objetoAux["p2"] += datos2.p2;
              objetoAux["p3"] += datos2.p3;
            }

            this.encabezadosPasckinList.push(objetoAux);
          }

          this.colectarElemtos[0].forEach(element => {
            let elemento = element.tipo.ignoreCase;
            if (element.tipo === "Hielera Congelacion") {
              element.tipo = "CONGELACIÓN";
              console.log("tipo hielera congelacion");
              this.tipoDeProducto.push("Hielera");
              this.contador = element.cant;
              this.cantidadPL += this.contador;
              this.imgTipoValidacionArr.push(
                "./assets/Images/hielera_refri.svg"
              );
            } else if (element.tipo === "Bolsa de transito") {
              element.tipo = "TRANSITO";
              console.log("Bolsa de transito");
              this.tipoDeProducto.push("Bolsa");
              this.contador = element.cant;
              this.cantidadPL += this.contador;
              this.imgTipoValidacionArr.push(
                "./assets/Images/bolsa_ambiente.svg"
              );
            }
            if (element.tipo === "Hielera Refrigeracion" || elemento === 'Refrigeración' || elemento === 'refrigeracion') {
              element.tipo = "REFRIGERACIÓN";
              this.tipoDeProducto.push("Hielera");
              this.contador = element.cant;
              this.cantidadPL += this.contador;
              this.imgTipoValidacionArr.push(
                "./assets/Images/hielera_refri.svg"
              );
            }
            let comentario = element.comentario;
            if (comentario.length > 0) {
              this.labelComentarios = false;
            } else {
              this.labelComentarios = true;
            }
          });

          this.itemSelect(0);

          this.valoresData.forEach(element => {
            this.listaAuxiliar.push(element.folio);
          });
          console.log(this.listaAuxiliar);
        },
        error => {
          console.log(error);
        }
      );
  }

  finalizarEjecutarRutaAlmacen() {
    this.idUsuario = SessionUser.getInstance().getUser().getIdEmpleado();
    let id = parseInt(this.idUsuario);
    let info = {
      idUsuario: id,
      idPendiente: this.colectarElemtosAux[0].idPendiente,
      contacto: this.datosFormulario[this.indexPacking].contacto,
      tel: this.datosFormulario[this.indexPacking].telefono,
      puesto: this.datosFormulario[this.indexPacking].puesto,
      email: this.datosFormulario[this.indexPacking].email,
      packingList: this.colectarElemtosAux[0].packingList
    };
    this._trabajarRutasClienteDetalleService.finalizarEjecutarRutaAlmacen(info).subscribe(
      data => {
        console.log("REspuesta del seervicio");

        this._trabajarRutasClienteDetalleService.uploadFile(this.colectarElemtosAux[0].packingList, this.archivo).subscribe(
          data => {
            this.recibeDocumentacion(null);
          });

        console.log(data);
        if (data.current === true) {
          this.activarAlertExit = true;
        }
      },
      error => {
        console.log(error);
      }
    );

  }

  cerrarAlert(datos) {
    this.popError = false;
    this.textArea.nativeElement.focus();
  }

  cerrarPopExit() {
    this.activarAlertExit = false;
    this.onRemove();
  }

  regresarVistaCli() {
    console.log('Entro al clic');
    this.RegresarVistaClie.emit(true);
  }

  recibeDocumentacion(archivo: any) {
    console.log(archivo);
    if(archivo != undefined && archivo != null){
      this.archivo = archivo;
      this.validarFormulario();
    }else{
      this.refrescar = false;
      setTimeout(() => {
        this.refrescar = true;
      }, 50);
    }
  }
}
