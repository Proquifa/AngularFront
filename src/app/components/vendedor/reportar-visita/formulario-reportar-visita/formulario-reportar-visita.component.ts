import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { SessionUser } from "../../../../services/session/session.service";
import { VisitaClienteService } from "../../../../services/ventas/visitas/visita-cliente.service";
import { DocumentoAdjunto } from "../../../../class/comun/DocumentoAdjunto.class";
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
} from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material/core";
import { Parametros } from "../../../../class/Parametros.class";
import { CoreContainerComponent } from "../../../core-container/core-container.component";
import { Query } from "../../../../class/compras/utils/query.class";

export const MY_FORMATS = {
  parse: {
    dateInput: "DD/MM/YYYY"
  },
  display: {
    dateInput: "DD/MM/YYYY",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};

@Component({
  selector: "pn-formulario-reportar-visita",
  templateUrl: "./formulario-reportar-visita.component.html",
  styleUrls: ["./formulario-reportar-visita.component.scss"],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "es-MX" },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class FormularioReportarVisitaComponent implements OnInit {
  order: string;
  indexVisita: number;
  currentCliente: any;
  data: any;
  pasos: any[] = [
    "REQUERIMIENTOS",
    "PENDIENTES",
    "HALLAZGOS",
    "REQUISITAR",
    "COTIZAR",
    "REPORTE FINAL"
  ];
  vistaSeleccionada: string = "REQUERIMIENTOS";
  lstActive: any[];
  indexSelected: number = 0;

  conDocumentacion: boolean;

  searchTerm: string = "";

  esacList = [{ nombre: "--NINGUNO--", key: 0 }];
  esacSelected: any = { nombre: "--NINGUNO--", key: 0 };

  modalConfirm: boolean = false;
  modalConfirmTxt: string = "";

  query: Query = new Query();

  lstCmbMarcas: any[];
  lstCmbCampanas: any[];
  lstCmbFamilias: any[];
  lstCmbPrecios: any[];

  /* Requerimientos */
  reqForm: FormGroup;
  reqFormRespuesta: string;
  reqDocumento: any;
  reqArchivo: DocumentoAdjunto = new DocumentoAdjunto();

  /* Pendientes */
  btnPenAgregar: string = "";
  penLst: any[];
  penAgregar: boolean = false;
  penEdit: boolean = false;
  penForm: FormGroup;
  penFormRespuesta: string;
  penAgregando: number = 0;
  penDate: any = new Date();
  dateForm: any = new FormControl(new Date());
  lstItemSelected: any[];
  itemSelected: number = -1;

  /* Hallazgos */
  btnHallAgregar: string = "";
  hallLst: any[];
  hallAgregar: boolean = false;
  hallEdit: boolean = false;
  hallForm: FormGroup;
  hallFormRespuesta: string;
  hallAgregando: number = 0;
  lstItemHallSelected: any[];
  itemHallSelected: number = -1;
  hallArchivo: DocumentoAdjunto = new DocumentoAdjunto();
  cmbTipoHallDefault: any = { nombre: "Regulatorio", key: "Regulatorio" };
  cmbTipoHall: any[] = [
    { nombre: "Competencia", key: "Competencia" },
    { nombre: "Marca", key: "Marca" },
    { nombre: "Regulatorio", key: "Regulatorio" }
  ];
  cmbTipoHallSelected: string = "";
  isNombreEmpresa: boolean = false;
  isMarca: boolean = false;
  proveedores: any[];
  validHallForm: boolean = false;
  hallEmpresa: string = "";
  lstMarcas: any[] = [];

  /* Requisitar */
  btnRqrAgregar: string = "";
  rqrLst: any[];
  rqrAgregar: boolean = false;
  rqrEdit: boolean = false;
  itemRqrSelected: number = -1;
  rqrForm: FormGroup;
  rqrFormDescripcion: string;
  rqrAgregando: number = 0;
  rqrNumPiezas: string = "";
  lstItemRqrSelected: any[];

  /* Cotizar */
  lstProductos: any[] = [];
  lstProductosSearched: any[] = [];

  /* Reporte Final */

  constructor(
    private _visitaClienteService: VisitaClienteService,
    private _fb: FormBuilder,
    private coreComponent: CoreContainerComponent
  ) {}

  ngOnInit() {
    this.reqForm = this._fb.group({
      reqFormRespuesta: [""]
    });
    this.reqFormRespuesta = "";
    this.reqForm.valueChanges.subscribe(() => {
      this.reqFormRespuesta = this.reqForm.get("reqFormRespuesta").value;
    });

    this.penForm = this._fb.group({
      penFormRespuesta: [""]
    });
    this.penFormRespuesta = "";
    this.penForm.valueChanges.subscribe(() => {
      this.penFormRespuesta = this.penForm.get("penFormRespuesta").value;
    });

    this.hallForm = this._fb.group({
      hallFormRespuesta: [""]
    });
    this.hallFormRespuesta = "";
    this.hallForm.valueChanges.subscribe(() => {
      this.hallFormRespuesta = this.hallForm.get("hallFormRespuesta").value;
    });

    this.rqrForm = this._fb.group({
      rqrFormDescripcion: [""]
    });
    this.rqrFormDescripcion = "";
    this.rqrForm.valueChanges.subscribe(() => {
      this.rqrFormDescripcion = this.rqrForm.get("rqrFormDescripcion").value;
    });

    this.currentCliente = SessionUser.getInstance().getDataPost().data;
    this.indexVisita = SessionUser.getInstance().getDataPost().index;
    console.log(this.currentCliente);
    this._visitaClienteService
      .obtenerReportarVisita({
        idVisita: this.currentCliente.idVisitaCliente,
        generada: 0
      })
      .subscribe(
        data => {
          this.data = data.current;
          this.lstActive = new Array<string>(this.data.requerimientos).fill("");
          this.lstActive[0] = "divItemSelected";
          console.log(this.data);

          if (this.data.pendientes != null) {
            this.lstItemSelected = [];
            this.itemSelected = 0;
            this.lstItemSelected.fill("", this.data.pendientes.length);
            this.lstItemSelected[0] = "selected";
          }

          if (this.data.hallazgos != null) {
            this.lstItemHallSelected = [];
            this.itemHallSelected = 0;
            this.lstItemHallSelected.fill("", this.data.hallazgos.length);
            this.lstItemHallSelected[0] = "selected";

            for (let i: number = 0; i < this.data.hallazgos.length; i++) {
              this.data.hallazgos[i]["txtMarcas"] = "";
              console.log(i);
              for (
                let i2: number = 0;
                i < this.data.hallazgos[i].marcas.length;
                i++
              ) {
                console.log(i2);
                this.data.hallazgos[i].txtMarcas +=
                  this.data.hallazgos[i].marcas[i2].valor + ",";
              }
            }

            console.log(this.data.hallazgos);
          }
        },
        error => {
          console.log(error);
        }
      );

    let param: Parametros = new Parametros();
    param.valorAdicional = "";
    this._visitaClienteService.consultarProveedores(param).subscribe(
      data => {
        this.proveedores = data.current;
      },
      error => {
        console.log(error);
      }
    );
  }

  vistaSelected(event) {
    this.vistaSeleccionada = event;
    if (event == "COTIZAR" && this.lstProductos.length == 0) {
      let param: Parametros = new Parametros();
      param.idCliente = 28;
      param.nivelCliente = "AA";
      this.coreComponent.openModal(0);
      this._visitaClienteService.obtenerProductosConCampana(param).subscribe(
        data => {
          this.lstProductos = data.current;
          this.lstProductosSearched = data.current;
          this.obtenerlistasCombos(this.lstProductosSearched);
          this.coreComponent.closeModal(0);
          console.log(this.lstProductos);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  selectItem($i) {
    this.lstActive = new Array<string>(this.data.requerimientos).fill("");
    this.lstActive[$i] = "divItemSelected";
  }

  enviarDocumentacion(archivo: any, tipo: string) {
    if (tipo === "Requerimientos") {
      this.reqArchivo = new DocumentoAdjunto();
      this.reqArchivo.archivo = archivo;
    } else if (tipo === "Hallazgo") {
      this.hallArchivo = new DocumentoAdjunto();
      this.hallArchivo.archivo = archivo;
    }
  }

  buscar(search) {}

  buscarProducto(search) {
    let searchArrayAux: any[] = [];
    this.searchTerm = search;
    if (search == "") {
      this.lstProductosSearched = this.lstProductos;
    } else {
      this.lstProductos.forEach(producto => {
        if (
          producto.concepto
            .toLowerCase()
            .indexOf(this.searchTerm.toLowerCase()) !== -1 ||
          producto.familiaString
            .toLowerCase()
            .indexOf(this.searchTerm.toLowerCase()) !== -1
        ) {
          searchArrayAux.push(producto);
        }
      });
      this.lstProductosSearched = searchArrayAux;
      this.obtenerlistasCombos(this.lstProductosSearched);
    }
  }

  obtenerlistasCombos(lista) {
    this.query.Query(lista, [
      "fabrica",
      "costo",
      "familiaString",
      "tipo",
      "subtipo",
      "control"
    ]);
    let punteros: any[] = this.query.getPunteros(["fabrica"]);
    let punterosCosto: any[] = this.query.getPunteros([null, "costo"]);
    let punterosFamilia: any[] = this.query.getPunteros([
      null,
      null,
      "familiaString"
    ]);
    this.lstCmbMarcas = [];
    this.lstCmbPrecios = [];
    this.lstCmbFamilias = [];
    let listaCamp: any[] = [];

    if (punteros != null && punteros.length > 0) {
      for (var n = 0; n < punteros.length; n++) {
        var marca: Object = new Object();
        if (n == 0) {
          marca["nombre"] = "Todas las Marcas";
          marca["key"] = n;
          this.lstCmbMarcas.push(marca);

          marca = new Object();
          marca["nombre"] = punteros[n];
          marca["key"] = n + 1;
          this.lstCmbMarcas.push(marca);
        } else {
          marca["nombre"] = punteros[n];
          marca["key"] = n + 1;
          this.lstCmbMarcas.push(marca);
        }
      }
    }

    if (punterosCosto != null && punterosCosto.length > 0) {
      for (let p = 0; p < punterosCosto.length; p++) {
        let costo: Object = new Object();
        if (p == 0) {
          costo["nombre"] = "Todos los Precios";
          costo["key"] = p;
          this.lstCmbPrecios.push(costo);

          costo = new Object();
          costo["nombre"] = punterosCosto[p];
          costo["key"] = p + 1;
          this.lstCmbPrecios.push(costo);
        } else {
          costo["nombre"] = punterosCosto[p];
          costo["key"] = p + 1;
          this.lstCmbPrecios.push(costo);
        }
      }
      this.lstCmbPrecios = this.lstCmbPrecios.sort(function(obj1, obj2) {
        // Ascending: first age less than the previous
        return +obj1.nombre - +obj2.nombre;
      });
    }

    if (punterosFamilia != null && punterosFamilia.length > 0) {
      for (var p = 0; p < punterosFamilia.length; p++) {
        var familia: Object = new Object();
        if (p == 0) {
          familia["nombre"] = "Todas las Familias";
          familia["key"] = p;
          this.lstCmbFamilias.push(familia);

          familia = new Object();
          familia["nombre"] = punterosFamilia[p];
          familia["key"] = p + 1;
          this.lstCmbFamilias.push(familia);
        } else {
          familia["nombre"] = punterosFamilia[p];
          familia["key"] = p + 1;
          this.lstCmbFamilias.push(familia);
        }
      }
    }

  }

  getComboValue($event, property) {}

  /*Pendientes*/
  agregarPendiente() {
    this.cancelarPendiente();
    if (!this.penAgregar) {
      this.penAgregando = 1;
      this.btnPenAgregar = "disable";
      this.penAgregar = true;
      this.dateForm.setValue(new Date());
    }
  }

  cancelarPendiente() {
    this.penAgregando = 0;
    this.btnPenAgregar = "";
    this.penAgregar = false;
    this.penEdit = false;
    this.penFormRespuesta = "";
    if (this.itemSelected == -1) {
      this.dateForm.setValue(new Date());
    } else {
      this.dateForm.setValue(this.data.pendientes[this.itemSelected].fecha);
    }
  }

  guardarPendiente() {
    if (this.penFormRespuesta != "") {
      if (this.data.pendientes == null) {
        this.data.pendientes = new Array();
      }
      if (this.itemSelected == -1) {
        this.itemSelected = 0;
        this.lstItemSelected = ["selected"];
      }
      if (!this.penEdit) {
        this.data.pendientes.push({
          descripcion: this.penFormRespuesta,
          ferealizacion: this.dateForm.value
        });
      } else {
        this.data.pendientes[
          this.itemSelected
        ].descripcion = this.penFormRespuesta;
        this.data.pendientes[
          this.itemSelected
        ].ferealizacion = this.dateForm.value;
        this.penEdit = false;
      }

      this.dateForm.setValue(
        this.data.pendientes[this.itemSelected].ferealizacion
      );
      this.lstItemSelected = new Array<string>(
        this.data.pendientes.lenght
      ).fill("");
      this.lstItemSelected[this.itemSelected] = "selected";
      this.penAgregando = 0;
      this.btnPenAgregar = "";
      this.penAgregar = false;
      this.penFormRespuesta = "";
    }
  }

  editarPendiente() {
    if (!this.penAgregar) {
      this.penAgregando = 1;
      this.btnPenAgregar = "disable";
      this.penAgregar = true;
      this.penEdit = true;
      this.penFormRespuesta = this.data.pendientes[
        this.itemSelected
      ].descripcion;
      this.dateForm.setValue(
        this.data.pendientes[this.itemSelected].ferealizacion
      );
    }
  }

  selectPenItem($i) {
    this.itemSelected = $i;
    this.cancelarPendiente();
    this.dateForm.setValue(this.data.pendientes[this.itemSelected].fecha);
    this.lstItemSelected.fill("");
    this.lstItemSelected[this.itemSelected] = "selected";
  }

  /*Hallazgo*/
  agregarHallazgo() {
    if (!this.hallAgregar) {
      this.hallAgregando = 1;
      this.btnHallAgregar = "disable";
      this.hallAgregar = true;
    }
  }

  cancelarHallazgo() {
    this.hallAgregando = 0;
    this.btnHallAgregar = "";
    this.hallAgregar = false;
    this.hallFormRespuesta = "";
  }

  dropListHall($evt) {
    this.cmbTipoHallSelected = $evt.nombre;
    if ($evt.nombre == "Competencia") {
      console.log($evt.nombre);
      this.isNombreEmpresa = true;
      this.isMarca = false;
    } else if ($evt.nombre == "Marca") {
      console.log($evt.nombre);
      this.isMarca = true;
      this.isNombreEmpresa = false;
    } else {
      console.log($evt.nombre);
      this.isNombreEmpresa = false;
      this.isMarca = false;
    }
  }

  dropSelecHall($event) {
    console.log($event);
    this.lstMarcas = $event;
  }

  guardarHallazgo() {
    if (this.hallFormRespuesta != "") {
      if (this.data.hallazgos == null) {
        this.data.hallazgos = new Array();
      }
      if (this.itemHallSelected == -1) {
        this.itemHallSelected = 0;
        this.lstItemHallSelected = ["selected"];
      }
      if (!this.hallEdit) {
        let stringMarcas = "";
        this.lstMarcas.forEach((item, index) => {
          stringMarcas += item.valor;
          if (this.lstMarcas.length > 1 && index != this.lstMarcas.length - 1) {
            stringMarcas += ", ";
          }
        });
        this.data.hallazgos.push({
          tipoHallazgo: this.cmbTipoHallSelected,
          descripcion: this.hallFormRespuesta,
          marcas: this.lstMarcas,
          txtMarcas: stringMarcas,
          competencia: this.hallEmpresa,
          documento: this.hallArchivo
        });
        console.log(this.hallArchivo);
      } else {
        let stringMarcas = "";
        this.lstMarcas.forEach((item, index) => {
          stringMarcas += item.valor;
          if (this.lstMarcas.length > 1 && index != this.lstMarcas.length - 1) {
            stringMarcas += ", ";
          }
        });

        this.data.hallazgos[
          this.itemHallSelected
        ].tipoHallazgo = this.cmbTipoHallSelected;
        this.data.hallazgos[
          this.itemHallSelected
        ].descripcion = this.hallFormRespuesta;
        this.data.hallazgos[this.itemHallSelected].marcas = this.lstMarcas;
        this.data.hallazgos[this.itemHallSelected].txtMarcas = stringMarcas;
        this.data.hallazgos[
          this.itemHallSelected
        ].competencia = this.hallEmpresa;
        this.data.hallazgos[this.itemHallSelected].documento = this.hallArchivo;
        this.hallEdit = false;
      }
      this.lstItemHallSelected[this.itemHallSelected] = "selected";
      this.hallAgregando = 0;
      this.btnHallAgregar = "";
      this.hallAgregar = false;
      this.hallFormRespuesta = "";
      this.lstMarcas = [];
      this.hallEmpresa = "";
      this.isMarca = false;
      this.isNombreEmpresa = false;
      this.hallArchivo = new DocumentoAdjunto();
    }
  }

  editarHallazgo() {
    if (!this.hallAgregar) {
      this.hallAgregando = 1;
      this.btnHallAgregar = "disable";
      this.hallAgregar = true;
      this.hallEdit = true;
      this.hallFormRespuesta = this.data.hallazgos[
        this.itemHallSelected
      ].descripcion;
      switch (this.data.hallazgos[this.itemHallSelected].tipoHallazgo) {
        case "Competencia":
          this.cmbTipoHallDefault = {
            nombre: "Competencia",
            key: "Competencia"
          };
          break;
        case "Marca":
          this.cmbTipoHallDefault = { nombre: "Marca", key: "Marca" };
          break;
        case "Regulatorio":
          this.cmbTipoHallDefault = {
            nombre: "Regulatorio",
            key: "Regulatorio"
          };
          break;
      }
      this.hallEmpresa = this.data.hallazgos[this.itemHallSelected].competencia;
      this.lstMarcas = this.data.hallazgos[this.itemHallSelected].marcas;
      this.hallArchivo = this.data.hallazgos[this.itemHallSelected].documento;
      //this.dateForm.setValue(this.data.pendientes[this.itemSelected].fecha);
    }
  }

  tipoHallazgo() {}

  selectHallItem($i) {
    this.itemHallSelected = $i;
    this.cancelarHallazgo();
    this.lstItemHallSelected.fill("");
    this.lstItemHallSelected[this.itemHallSelected] = "selected";
  }

  /*Requisitar*/

  agregarRequisitar() {
    if (!this.rqrAgregar) {
      this.rqrAgregando = 1;
      this.btnRqrAgregar = "disable";
      this.rqrAgregar = true;
    }
  }

  cancelarRequisitar() {
    this.rqrAgregando = 0;
    this.btnRqrAgregar = "";
    this.rqrAgregar = false;
    this.rqrFormDescripcion = "";
  }

  guardarRequisitar() {
    if (this.rqrFormDescripcion != "" && this.rqrNumPiezas != "") {
      if (this.data.requisicion == null) {
        this.data.requisicion = new Array();
      }
      if (this.itemRqrSelected == -1) {
        this.itemRqrSelected = 0;
        this.lstItemRqrSelected = ["selected"];
      }
      if (!this.rqrEdit) {
        this.data.requisicion.push({
          numPiezas: this.rqrNumPiezas,
          descripcion: this.rqrFormDescripcion
        });
      } else {
        this.data.requisicion[
          this.itemRqrSelected
        ].numPiezas = this.rqrNumPiezas;
        this.data.requisicion[
          this.itemRqrSelected
        ].descripcion = this.rqrFormDescripcion;
        this.rqrEdit = false;
      }

      this.rqrFormDescripcion = "";
      this.rqrNumPiezas = "";
      this.lstItemRqrSelected = new Array<string>(
        this.data.requisicion.lenght
      ).fill("");
      this.lstItemRqrSelected[this.itemRqrSelected] = "selected";
      this.rqrAgregando = 0;
      this.btnRqrAgregar = "";
      this.rqrAgregar = false;
    }
  }

  editarRequisitar() {
    if (!this.rqrAgregar) {
      this.rqrAgregando = 1;
      this.btnRqrAgregar = "disable";
      this.rqrAgregar = true;
      this.rqrEdit = true;
      this.rqrNumPiezas = this.data.requisicion[this.itemRqrSelected].numPiezas;
      this.rqrFormDescripcion = this.data.requisicion[
        this.itemRqrSelected
      ].descripcion;
    }
  }

  selectRqrItem($i) {
    this.itemRqrSelected = $i;
    this.cancelarRequisitar();
    this.lstItemRqrSelected.fill("");
    this.lstItemRqrSelected[this.itemRqrSelected] = "selected";
  }

  /* Cotizar */

  obtenerProductos() {}

  validNumber($event) {
    if (isNaN(+$event.key)) {
      setTimeout(() => {
        this.rqrNumPiezas = this.rqrNumPiezas.replace($event.key, "");
      }, 10);
    } else {
      console.log("no entro");
    }
  }

  aceptModalConfirm($opc) {
    switch ($opc) {
      case "PENDIENTES":
        this.data.pendientes.splice(this.itemSelected, 1);
        if (this.data.pendientes.length == 0) {
          this.itemSelected = -1;
        }
        break;
      case "HALLAZGOS":
        this.data.hallazgos.splice(this.itemHallSelected, 1);
        if (this.data.hallazgos.length == 0) {
          this.itemHallSelected = -1;
        }
        break;
      case "REQUISITAR":
        this.data.requisicion.splice(this.itemRqrSelected, 1);
        if (this.data.requisicion.length == 0) {
          this.itemRqrSelected = -1;
        }
        break;
    }
    this.modalConfirm = false;
  }

  openModalConfirm($txt: string) {
    this.modalConfirmTxt = $txt;
    this.modalConfirm = true;
  }

  closeModalConfirm() {
    this.modalConfirm = false;
  }
}
