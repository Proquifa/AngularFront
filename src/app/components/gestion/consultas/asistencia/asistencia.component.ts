import { Component, OnInit } from "@angular/core";
import * as accounting from "accounting";
import { Router } from "@angular/router";
import { Parametros } from "../../../../class/Parametros.class";
import { AsistenciasService } from "../../../../services/gestion/consulta/asistencias/asistencias.service";
import { ElementFilter } from "../../../shared/filter/element.model";
import { CoreContainerComponent } from "../../../core-container/core-container.component";
import { dateFormatSlash } from "../../../../pipes/accounting/accounting.pipe";
import { UtilFechas } from "../../../../class/UtilFechas";

@Component({
  selector: "pn-asistencia",
  templateUrl: "./asistencia.component.html",
  styleUrls: ["./asistencia.component.scss"]
})
export class AsistenciaComponent implements OnInit {
  _utilFechas: UtilFechas = new UtilFechas();
  classPanel: string = "panelNormal";
  hiddenClose: boolean = true;
  avanzada: Boolean = true;
  date: Date;
  date2: Date;
  itemsDropList: any[] = [
    { nombre: "- - Todos - -" },
    { nombre: "nombre1" },
    { nombre: "nombre2" }
  ];
  defaultSelected: any = { nombre: "- - Todos - -" };
  Elements: ElementFilter[];
  IsImage: boolean = true;
  IsDate: boolean = true;
  isThereData: boolean = false;
  Clear = true;
  dropColaborador: any[] = [{ nombre: "--TODOS--", key: 0 }];
  dropTipoChecada: any[] = [
    { nombre: "--TODOS--", key: "" },
    { nombre: "ENTRADA DE TURNO", key: 1 },
    { nombre: "SALIDA A COMER", key: 2 },
    { nombre: "ENTRADA DE COMER", key: 3 },
    { nombre: "SALIDA DE TURNO", key: 4 },
    { nombre: "ENTRADA IMPREVISTA", key: 5 },
    { nombre: "SALIDA IMPREVISTA", key: 6 }
  ];
  dropTipoIncidencia: any[] = [{ nombre: "--TODOS--", key: "" }];
  dropEmpresa: any[] = [
    { nombre: "--TODOS--", key: "" },
    { nombre: "PROQUIFA", key: "DISTRITO FEDERAL" },
    { nombre: "RYNDEM", key: "CUERNAVACA" },
    { nombre: "GUADALAJARA", key: "GUADALAJARA" }
  ];
  dropArea: any[] = [{ nombre: "--TODOS--", key: "" }];
  dropDepartamento: any[] = [{ nombre: "--TODOS--", key: "" }];
  dropCategoria: any[] = [{ nombre: "--TODOS--", key: "" }];
  lstAsistencias: any[] = [];
  totalChecadas: number = 0;
  listaDatosAsistencias: any[] = [];
  listaDatosTipoChecadas: any[] = [];
  listaDatosIncidencias: any[] = [];
  listaDatosCategoria: any[] = [];
  listaDatosDepartamentos: any[] = [];
  listaDatosArea: any[] = [];
  graficasCargadas: boolean = false;
  txtFactura: String;
  parametros: Parametros = new Parametros();
  showGraphic: boolean = false;
  refrescar: boolean = true;
  topGraphics: any = "-110%";

  graficas: any[] = [];

  asistencias: any;
  asistenciasColaboradores: any[] = [];

  tipoChecadas: any;
  tipoChecadasColaboradores: any[];

  incidencias: any;
  incidenciasColaboradores: any[];

  areas: any;
  areassColaboradores: any[];

  departamentos: any;
  departamentosColaboradores: any[];

  categorias: any;
  categoriasColaboradores: any[];

  graficasValores: any[] = [];

  constructor(
    private router: Router,
    private _asistensiaService: AsistenciasService,
    private coreComponent: CoreContainerComponent
  ) {}

  ngOnInit() {
    this.date = new Date();
    this.date2 = new Date();

    this.parametros.fechaInicio = new Date();
    this.parametros.fechaFin = new Date();
    this.parametros.idTrabajador = 0;
    this.parametros.tipoChecada = "";
    this.parametros.area = "";
    this.parametros.depto = "";
    this.parametros.categoria = "";
    this.parametros.incidencia = "";
    this.parametros.localidad = "";
    this.parametros.nombreTrabajador = "";

    this.coreComponent.openModal(0);
    this._asistensiaService.getTrabajadorUnion().subscribe(
      data => {
        let lstAux: any[] = [];
        for (var item of data.current) {
          lstAux.push({ nombre: item.nombreCorto, key: item.idTrabajador });
        }
        this.dropColaborador = this.dropColaborador.concat(lstAux);

        this._asistensiaService.getTipoIncidencia().subscribe(
          data => {
            let lstAux: any[] = [];
            for (var item of data.current) {
              lstAux.push({
                nombre: item.nomIncidencia,
                key: item.cveIncidencia
              });
            }
            this.dropTipoIncidencia = this.dropTipoIncidencia.concat(lstAux);

            this._asistensiaService.getConsultaArea().subscribe(
              data => {
                let lstAux: any[] = [];
                for (var item of data.current) {
                  lstAux.push({ nombre: item.nombreArea, key: item.claveArea });
                }
                this.dropArea = this.dropArea.concat(lstAux);

                this._asistensiaService.getConsultaDepartamento().subscribe(
                  data => {
                    let lstAux: any[] = [];
                    for (var item of data.current) {
                      lstAux.push({
                        nombre: item.nombreDepartamento,
                        key: item.claveDepartamento
                      });
                    }
                    this.dropDepartamento = this.dropDepartamento.concat(
                      lstAux
                    );

                    this._asistensiaService.getConsultaCategoria().subscribe(
                      data => {
                        let lstAux: any[] = [];
                        for (var item of data.current) {
                          lstAux.push({
                            nombre: item.nombreCategoria,
                            key: item.claveCategoria
                          });
                        }
                        this.dropCategoria = this.dropCategoria.concat(lstAux);
                        this.Llenar();
                        this.getAsistenciaUnion(this.parametros);
                      },
                      error => {
                        console.log(error);
                      }
                    );
                  },
                  error => {
                    console.log(error);
                  }
                );
              },
              error => {
                console.log(error);
              }
            );
          },
          error => {
            console.log(error);
          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }

  Llenar = () => {
    this.Elements = [
      new ElementFilter("string", "Colaborador", this.dropColaborador, true),
      new ElementFilter("string", "Tipo checada", this.dropTipoChecada, true),
      new ElementFilter(
        "string",
        "Tipo incidencia",
        this.dropTipoIncidencia,
        true
      ),
      new ElementFilter("string", "Empresa", this.dropEmpresa, true),
      new ElementFilter("string", "Área", this.dropArea, true),
      new ElementFilter("string", "Departamento", this.dropDepartamento, true),
      new ElementFilter("string", "Categoría", this.dropCategoria, true)
    ];
    this.isThereData = true;
    this.Clear = false;
  };

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

  download() {
    let lstAsistencias2: any[] = [];
    console.log(this.lstAsistencias);
    this.lstAsistencias.forEach((asistencia, index) => {
      let facturaAux = {
        "#": index + 1,
        Colaborador: '"' + asistencia.nombreCorto + '"',
        Fecha: new dateFormatSlash().transform(asistencia.fecha),
        Hora: asistencia.hora,
        "Tipo Checada": asistencia.tipoChecada,
        Área: asistencia.area,
        Departamento: asistencia.depto,
        Categoría: asistencia.categoria,
        Incidencia: asistencia.incidencia
      };
      lstAsistencias2.push(facturaAux);
    });
    var csvData = this.ConvertToCSV(lstAsistencias2);
    var a = document.createElement("a");
    a.setAttribute("style", "display:none;");
    document.body.appendChild(a);
    var blob = new Blob([csvData], { type: "text/csv" });
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download =
      "ConsultaAsistencia-" +
      this._utilFechas.fechaDescarga(new Date()) +
      ".csv";
    a.click();
  }

  //Función para convertir JSON en formato CSV
  ConvertToCSV(objArray) {
    var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    var str = "";
    var row = "";
    for (var index in objArray[0]) {
      row += index + ",";
    }
    row = row.slice(0, -1);
    str += row + "\r\n";
    for (var i = 0; i < array.length; i++) {
      var line = "";
      for (var index in array[i]) {
        if (line != "") line += ",";

        line += array[i][index];
      }
      str += line + "\r\n";
    }
    return str;
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

  dropList(index, $event) {}

  mostrarDatos($event) {
    console.log($event);
    console.log("mostrarDatos");
    this.parametros.fechaInicio = $event.Fechas.fechaInicial;
    this.parametros.fechaFin = $event.Fechas.fechaFinal;
    this.parametros.nombreTrabajador =
      $event.Datos[0].key == 0 ? "" : $event.Datos[0].nombre;
    this.parametros.tipoChecada =
      $event.Datos[1].key == 0 ? "" : $event.Datos[1].key;
    this.parametros.incidencia =
      $event.Datos[2].key == 0 ? "" : $event.Datos[2].key;
    this.parametros.localidad =
      $event.Datos[3].key == 0 ? "" : $event.Datos[3].key;
    this.parametros.area = $event.Datos[4].key == 0 ? "" : $event.Datos[4].key;
    this.parametros.depto = $event.Datos[5].key == 0 ? "" : $event.Datos[5].key;
    this.parametros.categoria =
      $event.Datos[6].key == 0 ? "" : $event.Datos[6].key;

    this.coreComponent.openModal(0);
    this.getAsistenciaUnion(this.parametros);
  }

  getAsistenciaUnion(parametros) {
    this.refrescar = false;
    this._asistensiaService.getAsistenciaUnion(parametros).subscribe(
      data => {
        console.log(data.current);
        this.lstAsistencias = data.current;
        this.totalChecadas = this.lstAsistencias.length;
        this.graficasCargadas = false;
        this.coreComponent.closeModal(0);

        this.limpiarVariablesGrafica();
        this.calcularDatosParaGraficas();
        this.graficasValores = [
          this.asistencias,
          this.tipoChecadas,
          this.incidencias,
          this.areas,
          this.departamentos,
          this.categorias
        ];
        this.graficas = [];
        this.graficas = [
          "Asistencia/Inasistencia",
          "Tipo Checada",
          "Incidencias",
          "Area",
          "Departamento",
          "Categoría"
        ];
        this.refrescar = true;
      },
      error => {
        console.log(error);
        this.coreComponent.closeModal(0);
      }
    );
  }

  showGraphicPanel() {
    this.showGraphic = true;
    setTimeout( () => { this.topGraphics = "0"; }, 100 );
  }

  showTablePanel() {
    this.topGraphics = "-110%";
    setTimeout( () => { this.showGraphic = false; }, 300 );
  }

  toolip(tooltipItem, data) {
    var label =
      data.labels[tooltipItem.index] +
      " : " +
      data.datasets[0].data[tooltipItem.index];
    console.log(tooltipItem);
    console.log(data);
    return label;
  }

  calcularDatosParaGraficas() {
    for (let checada of this.lstAsistencias) {
      this.llenarTotales(this.asistencias, checada, "ASISTENCIAS");
      this.llenarTotales(this.tipoChecadas, checada, "TIPO_CHECADA");
      this.llenarTotales(this.incidencias, checada, "INCIDENCIAS");
      this.llenarTotales(this.areas, checada, "AREAS");
      this.llenarTotales(this.departamentos, checada, "DEPARTAMENTOS");
      this.llenarTotales(this.categorias, checada, "CATEGORIAS");
    }
    this.graficasCargadas = true;
    console.log(this.asistencias);
  }

  llenarTotales(total, elemento, graficaElegida) {
    switch (graficaElegida) {
      case "ASISTENCIAS":
        if (elemento.tipoChecada === "ENTRADA DE TURNO") {
          if (
            !this.asistenciasColaboradores.find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valores[0]++;
            total.valuesExtras[0]++;
            total.valuesExtrasHover[0][0]++;
            this.asistenciasColaboradores.push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (!elemento.tipoChecada) {
          if (
            !this.asistenciasColaboradores.find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valores[1]++;
            total.valuesExtras[1]++;
            total.valuesExtrasHover[1][0]++;
            this.asistenciasColaboradores.push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        }
        break;

      case "TIPO_CHECADA":
        if (elemento.tipoChecada === "ENTRADA DE TURNO") {
          total.valores[0]++;
          total.valuesExtrasHover[0][1]++;
          if (
            !this.tipoChecadasColaboradores[1].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[0][0]++;
            this.tipoChecadasColaboradores[1].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.tipoChecada === "SALIDA IMPREVISTA") {
          total.valores[5]++;
          total.valuesExtrasHover[5][1]++;
          if (
            !this.tipoChecadasColaboradores[2].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[5][0]++;
            this.tipoChecadasColaboradores[2].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.tipoChecada === "ENTRADA IMPREVISTA") {
          total.valores[4]++;
          total.valuesExtrasHover[4][1]++;
          if (
            !this.tipoChecadasColaboradores[3].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[4][0]++;
            this.tipoChecadasColaboradores[3].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.tipoChecada === "ENTRADA DE COMER") {
          total.valores[2]++;
          total.valuesExtrasHover[2][1]++;
          if (
            !this.tipoChecadasColaboradores[4].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[2][0]++;
            this.tipoChecadasColaboradores[4].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.tipoChecada === "SALIDA A COMER") {
          total.valores[1]++;
          total.valuesExtrasHover[1][1]++;
          if (
            !this.tipoChecadasColaboradores[5].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[1][0]++;
            this.tipoChecadasColaboradores[5].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.tipoChecada === "SALIDA DE TURNO") {
          total.valores[3]++;
          total.valuesExtrasHover[3][1]++;
          if (
            !this.tipoChecadasColaboradores[6].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[3][0]++;
            this.tipoChecadasColaboradores[6].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.tipoChecada === "E") {
          total.valores[6]++;
          total.valuesExtrasHover[6][1]++;
          if (
            !this.tipoChecadasColaboradores[7].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[6][0]++;
            this.tipoChecadasColaboradores[7].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else {
          total.valores[7]++;
          total.valuesExtrasHover[7][1]++;
          if (
            !this.tipoChecadasColaboradores[8].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[7][0]++;
            this.tipoChecadasColaboradores[8].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        }
        if (
          !this.tipoChecadasColaboradores[0].find(
            trabajador =>
              trabajador.id === elemento.idTrabajador &&
              trabajador.nombre === elemento.nombreCorto
          )
        ) {
          total.valuesExtras[0]++;
          this.tipoChecadasColaboradores[0].push({
            id: elemento.idTrabajador,
            nombre: elemento.nombreCorto
          });
        }
        total.valuesExtras[1]++;
        break;

      case "INCIDENCIAS":
        if (elemento.incidencia === "NINGUNA") {
          total.valores[0]++;
          total.valuesExtrasHover[0][1]++;
          if (
            !this.incidenciasColaboradores[1].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[0][0]++;
            this.incidenciasColaboradores[1].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.incidencia === "RETARDO") {
          total.valores[1]++;
          total.valuesExtrasHover[1][1]++;
          if (
            !this.incidenciasColaboradores[2].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[1][0]++;
            this.incidenciasColaboradores[2].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.incidencia === "FALTA") {
          total.valores[2]++;
          total.valuesExtrasHover[2][1]++;
          if (
            !this.incidenciasColaboradores[3].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[2][0]++;
            this.incidenciasColaboradores[3].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.incidencia === "FUERA DE TIEMPO") {
          total.valores[3]++;
          total.valuesExtrasHover[3][1]++;
          if (
            !this.incidenciasColaboradores[4].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[3][0]++;
            this.incidenciasColaboradores[4].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        }
        if (
          !this.incidenciasColaboradores[0].find(
            trabajador =>
              trabajador.id === elemento.idTrabajador &&
              trabajador.nombre === elemento.nombreCorto
          )
        ) {
          total.valuesExtras[0]++;
          this.incidenciasColaboradores[0].push({
            id: elemento.idTrabajador,
            nombre: elemento.nombreCorto
          });
        }
        total.valuesExtras[1]++;
        break;

      case "AREAS":
        if (elemento.area === "OPERACIONES") {
          total.valores[0]++;
          total.valuesExtrasHover[0][1]++;
          if (
            !this.areassColaboradores[1].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[0][0]++;
            this.areassColaboradores[1].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.area === "SERVICIOS") {
          total.valores[5]++;
          total.valuesExtrasHover[5][1]++;
          if (
            !this.areassColaboradores[6].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[5][0]++;
            this.areassColaboradores[6].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.area === "COMERCIALIZACION") {
          total.valores[4]++;
          total.valuesExtrasHover[4][1]++;
          if (
            !this.areassColaboradores[5].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[4][0]++;
            this.areassColaboradores[5].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.area === "FINANZAS") {
          total.valores[3]++;
          total.valuesExtrasHover[3][1]++;
          if (
            !this.areassColaboradores[4].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[3][0]++;
            this.areassColaboradores[4].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.area === "DIRECCION") {
          total.valores[1]++;
          total.valuesExtrasHover[1][1]++;
          if (
            !this.areassColaboradores[2].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[1][0]++;
            this.areassColaboradores[2].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.area === "GENERAL") {
          total.valores[2]++;
          total.valuesExtrasHover[2][1]++;
          if (
            !this.areassColaboradores[3].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[2][0]++;
            this.areassColaboradores[3].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        }
        if (
          !this.areassColaboradores[0].find(
            trabajador =>
              trabajador.id === elemento.idTrabajador &&
              trabajador.nombre === elemento.nombreCorto
          )
        ) {
          total.valuesExtras[0]++;
          this.areassColaboradores[0].push({
            id: elemento.idTrabajador,
            nombre: elemento.nombreCorto
          });
        }
        total.valuesExtras[1]++;
        break;

      case "DEPARTAMENTOS":
        if (elemento.depto === "COMPRAS") {
          total.valores[0]++;
          total.valuesExtrasHover[0][1]++;
          if (
            !this.departamentosColaboradores[1].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[0][0]++;
            this.departamentosColaboradores[1].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.depto === "MANTENIMIENTO") {
          total.valores[1]++;
          total.valuesExtrasHover[1][1]++;
          if (
            !this.departamentosColaboradores[2].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[1][0]++;
            this.departamentosColaboradores[2].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.depto === "SERVICIO A CLIENTES") {
          total.valores[2]++;
          total.valuesExtrasHover[2][1]++;
          if (
            !this.departamentosColaboradores[3].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[2][0]++;
            this.departamentosColaboradores[3].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.depto === "DESPACHOS") {
          total.valores[3]++;
          total.valuesExtrasHover[3][1]++;
          if (
            !this.departamentosColaboradores[4].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[3][0]++;
            this.departamentosColaboradores[4].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.depto === "DISEÑO") {
          total.valores[4]++;
          total.valuesExtrasHover[4][1]++;
          if (
            !this.departamentosColaboradores[5].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[4][0]++;
            this.departamentosColaboradores[5].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.depto === "SISTEMAS") {
          total.valores[5]++;
          total.valuesExtrasHover[5][1]++;
          if (
            !this.departamentosColaboradores[6].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[5][0]++;
            this.departamentosColaboradores[6].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.depto === "COBROS Y PAGOS") {
          total.valores[6]++;
          total.valuesExtrasHover[6][1]++;
          if (
            !this.departamentosColaboradores[7].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[6][0]++;
            this.departamentosColaboradores[7].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.depto === "VENTAS") {
          total.valores[7]++;
          total.valuesExtrasHover[7][1]++;
          if (
            !this.departamentosColaboradores[8].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[7][0]++;
            this.departamentosColaboradores[8].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.depto === "CALIDAD") {
          total.valores[8]++;
          total.valuesExtrasHover[8][1]++;
          if (
            !this.departamentosColaboradores[9].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[8][0]++;
            this.departamentosColaboradores[9].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.depto === "ADMINISTRACION") {
          total.valores[9]++;
          total.valuesExtrasHover[9][1]++;
          if (
            !this.departamentosColaboradores[10].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[9][0]++;
            this.departamentosColaboradores[10].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.depto === "GENERAL") {
          total.valores[10]++;
          total.valuesExtrasHover[10][1]++;
          if (
            !this.departamentosColaboradores[11].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[10][0]++;
            this.departamentosColaboradores[11].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        }
        if (
          !this.departamentosColaboradores[0].find(
            trabajador =>
              trabajador.id === elemento.idTrabajador &&
              trabajador.nombre === elemento.nombreCorto
          )
        ) {
          total.valuesExtras[0]++;
          this.departamentosColaboradores[0].push({
            id: elemento.idTrabajador,
            nombre: elemento.nombreCorto
          });
        }
        total.valuesExtras[1]++;
        break;

      case "CATEGORIAS":
        if (elemento.categoria === "OPERATIVOS") {
          total.valores[0]++;
          total.valuesExtrasHover[0][1]++;
          if (
            !this.categoriasColaboradores[1].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[0][0]++;
            this.categoriasColaboradores[1].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.categoria === "COORDINADORES") {
          total.valores[1]++;
          total.valuesExtrasHover[1][1]++;
          if (
            !this.categoriasColaboradores[2].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[1][0]++;
            this.categoriasColaboradores[2].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        } else if (elemento.categoria === "GENERAL") {
          total.valores[2]++;
          total.valuesExtrasHover[2][1]++;
          if (
            !this.categoriasColaboradores[3].find(
              trabajador =>
                trabajador.id === elemento.idTrabajador &&
                trabajador.nombre === elemento.nombreCorto
            )
          ) {
            total.valuesExtrasHover[2][0]++;
            this.categoriasColaboradores[3].push({
              id: elemento.idTrabajador,
              nombre: elemento.nombreCorto
            });
          }
        }
        if (
          !this.categoriasColaboradores[0].find(
            trabajador =>
              trabajador.id === elemento.idTrabajador &&
              trabajador.nombre === elemento.nombreCorto
          )
        ) {
          total.valuesExtras[0]++;
          this.categoriasColaboradores[0].push({
            id: elemento.idTrabajador,
            nombre: elemento.nombreCorto
          });
        }
        total.valuesExtras[1]++;
        break;
    }
  }

  limpiarVariablesGrafica(){
    this.asistencias = {
      titulo: "Totales",
      labels: ["ASISTENCIA", "INASISTENCIA"],
      valores: [0, 0],
      labelsExtras: ["Asistieron", "Faltaron"],
      labelsExtrasHover: ["Colaboradores"],
      valuesExtras: [0, 0],
      valuesExtrasHover: [[0], [0]]
    };
    this.asistenciasColaboradores = [];
  
    this.tipoChecadas = {
      titulo: "Totales",
      labels: [
        "ENTRADA DE TURNO",
        "SALIDA A COMER",
        "ENTRADA DE COMER",
        "SALIDA DE TURNO",
        "ENTRADA IMPREVISTA",
        "SALIDA IMPREVISTA",
        "E",
        "N/A"
      ],
      valores: [0, 0, 0, 0, 0, 0, 0, 0],
      labelsExtras: ["Colaboradores", "Checada"],
      labelsExtrasHover: ["Colaboradores", "Checada"],
      valuesExtras: [0, 0],
      valuesExtrasHover: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    };
    this.tipoChecadasColaboradores = [[], [], [], [], [], [], [], [], []];
  
    this.incidencias = {
      titulo: "Totales",
      labels: ["NINGUNA", "RETARDO", "FALTA", "FUERA DE TIEMPO"],
      valores: [0, 0, 0, 0],
      labelsExtras: ["Colaboradores", "Checada"],
      labelsExtrasHover: ["Colaboradores", "Checada"],
      valuesExtras: [0, 0],
      valuesExtrasHover: [[0, 0], [0, 0], [0, 0], [0, 0]]
    };
    this.incidenciasColaboradores = [[], [], [], [], []];
  
    this.areas = {
      titulo: "Totales",
      labels: [
        "OPERACIONES",
        "DIRECCION",
        "GENERAL",
        "FINANZAS",
        "COMERCIALIZACION",
        "SERVICIOS"
      ],
      valores: [0, 0, 0, 0, 0, 0],
      labelsExtras: ["Colaboradores", "Checada"],
      labelsExtrasHover: ["Colaboradores", "Checada"],
      valuesExtras: [0, 0],
      valuesExtrasHover: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]
    };
    this.areassColaboradores = [[], [], [], [], [], [], []];
  
    this.departamentos = {
      titulo: "Totales",
      labels: [
        "COMPRAS",
        "MANTENIMIENTO",
        "SERVICIO A CLIENTES",
        "DESPACHOS",
        "DISEÑO",
        "SISTEMAS",
        "COBROS Y PAGOS",
        "VENTAS",
        "CALIDAD",
        "ADMINISTRACION",
        "GENERAL"
      ],
      valores: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      labelsExtras: ["Colaboradores", "Checada"],
      labelsExtrasHover: ["Colaboradores", "Checada"],
      valuesExtras: [0, 0],
      valuesExtrasHover: [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
      ]
    };
    this.departamentosColaboradores = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ];
  
    this.categorias = {
      titulo: "Totales",
      labels: ["OPERATIVOS", "COORDINADORES", "GENERAL"],
      valores: [0, 0, 0],
      labelsExtras: ["Colaboradores", "Checada"],
      labelsExtrasHover: ["Colaboradores", "Checada"],
      valuesExtras: [0, 0],
      valuesExtrasHover: [[0, 0],[0, 0],[0, 0]]
    };
    this.categoriasColaboradores = [[],[],[],[]];
  }
}
