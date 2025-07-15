import { Component, OnInit, Pipe } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionService } from '../../../../services/gestion/gestion.service';
import { Parametros } from '../../../../class/Parametros.class';
import { ElementFilter } from '../../../shared/filter/element.model';
import { CoreContainerComponent } from '../../../core-container/core-container.component';
import { UtilFechas } from '../../../../class/UtilFechas';
import { AccountingFormatMoney, dateFormatSlash } from '../../../../pipes/accounting/accounting.pipe';
import { UtilService } from '../../../../services/util/util.service';
import { LlamadasService } from '../../../../services/gestion/consulta/llamadas/llamadas.service';
import { forEach } from '../../../../../../node_modules/@angular/router/src/utils/collection';
import { isNgTemplate } from '../../../../../../node_modules/@angular/compiler';

@Component({
  selector: 'pn-llamadas',
  templateUrl: './llamadas.component.html',
  styleUrls: ['./llamadas.component.scss']
})
export class LlamadasComponent implements OnInit {
  detalle: Boolean = false;
  classPanel: String = 'panelNormal';
  hiddenClose: Boolean = true;
  filtroForm: FormGroup;
  topGraphics: any = '-110%';

  IsDate: Boolean = true;
  IsImage: Boolean = true;
  sistema: Boolean = true;

  dropEmpresas: any[] = [{ nombre: '--TODOS--', key: 0 }];
  dropDestino: any[] = [{nombre: '--TODOS--', key: 0}];
  dropAtendio: any[] = [{ nombre: '--TODOS--', key: 0}];

  lstLlamadas: any[] = [];
  lstEmpresas: any[] = [];

  isThereData: Boolean = false;
  parametros: Parametros = new Parametros();
  _utilFechas: UtilFechas = new UtilFechas();

  showGraphic: Boolean = false;
  graficasCargadas: Boolean = false;
  graficasValores: any[] = [];

  graficas: any[] = [];
  refrescar: Boolean = true;
  // Gráficas de dona
  clientes: any;

  abierta_cerrada: any;

  et_ft: any;

  destino: any;

  tipo: any;

  // Variables para datos dinamicos de la gráfica
  lstEmpresasConsultaActual: any [] = [];
  lstAuxEmpre: any [] = [];
  lstValores: any [] = [];
  lstAuxDesti: any [] = [];
  lstValoresDesti: any [] = [];

  lstDestinoGrafica: any [] = [];
  lstClienteGrafica: any [] = []; // Asistente para tipo
  lstClienteGraficaAbiCerra: any [] = []; // Asistente para abierta vs cerrada
  lstClienteGraficaAbiCerraAux: any [] = [];
  lstClienteGraficaEtFt: any [] = []; // Asistemte para ET FT
  lstClienteGraficaDestino: any [] = []; // Asistente para destino
  lstClienteGraficaCliente: any [] = []; // Asistente para clientes

  // Elements es un arreglo el cual contiene todos los valores
  // que se mostraran en dropboz. se enviara al componente
  // gestion-filter
  Elements: ElementFilter[];

  constructor(private router: Router, private _fb: FormBuilder, private _gestionService: GestionService,
    private coreComponent: CoreContainerComponent, private utilService: UtilService, private _llamadaService: LlamadasService) { }

  ngOnInit() {
    // console.log('Inicia carga de cosas');
    this.filtroForm = new FormGroup({
      filtroDato: new FormControl()
    });

    // let parametros: Parametros = new Parametros();
    this.parametros.fechaInicio = new Date();
    this.parametros.fechaFin = new Date();
    this.parametros.empresa = '--TODOS--';
    this.parametros.comentarios = '--TODOS--';
    this.parametros.destino = '--TODOS--';
    this.parametros.atendio = '--TODOS--';
    this.parametros.estado = '--TODOS--';
    this.parametros.idUsuarioLogueado = 91;

    // Carga de datos desde base de datos
    this._gestionService.dropClientes().subscribe(
      data => {
        this.lstEmpresas = data.current;

        let lstAux: any[] = [];
        for (var item of this.lstEmpresas) {
          lstAux.push({ nombre: item.valor, key: item.llave })
        }
        this.dropEmpresas = this.dropEmpresas.concat(lstAux);
        this.llenar();
        this.listarLlamadas(this.parametros);
        this.getLlamadasUnion(this.parametros);
        // this.getEmpresasConsultaActual();
      },
      error => {
        console.log("error login");
        console.log(error);
      }
    );
    // Carga de datos
    // this.llenar();
    // console.log(this.dropEmpresas);
    // console.log('Fin de carga de cosas');
    // console.log('Fin listado llamadas');
    // Cargar las gráficas
  }

  llenar = () => {
    this.Elements = [
      new ElementFilter('string', 'Empresa', this.dropEmpresas, true),
      new ElementFilter('string', 'Destino', [
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
      { nombre: 'YMunoz', key: 60 }
      ] , true),
      new ElementFilter('string', 'Atendió', [
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
      { nombre: 'YMunoz', key: 60 }
      ], true),
      new ElementFilter('string', 'Estado', [
        { nombre: '--TODOS--', key: 0 },
        { nombre: 'CERRADA', key: 1 },
        { nombre: 'ABIERTA', key: 2 }
      ], false)
    ];
    this.isThereData = true;
  }

  regresarConsulta() {
    this.detalle = false;
  }

  backMenu() {
    this.router.navigate(['protected/gestion/']);
  }

  closePanel() {
    this.classPanel = 'panelOcultar';
    this.hiddenClose = false;
  }

  openPanel() {
    if (!this.hiddenClose) {
      this.classPanel = 'panelMostrar';
      this.hiddenClose = true;
    }
  }

  // Método cuando presionas el boton de consular //
  mostrarDatos($event) {
    // let parametros: Parametros = new Parametros();
      // console.log('evento recibido: ', $event);
      this.parametros.fechaInicio = $event.Fechas.fechaInicial;
      this.parametros.fechaFin = $event.Fechas.fechaFinal;

      this.parametros.empresa = $event.Datos[0].nombre;
      this.parametros.destino = $event.Datos[1].nombre;
      this.parametros.atendio = $event.Datos[2].nombre;
      this.parametros.estado = $event.Datos[3].nombre;
      this.parametros.idUsuarioLogueado = 91;
      this.coreComponent.openModal(0);
      this.listarLlamadas(this.parametros);
      this.getLlamadasUnion(this.parametros);
  }

  listarLlamadas(parametros: Parametros) {
    this.coreComponent.openModal(0);
    this._llamadaService.obtenerLlamadas(parametros).subscribe(
      data => {
          // console.log('ahora', data.current);
          if (data.current !== undefined) {
            this.lstLlamadas = data.current;
            this.getEmpresasConsultaActual(data.current);
            // console.log('lstLlamadas: ', this.lstLlamadas);
            this.coreComponent.closeModal(0);
          }
      },
      error => {
        this.coreComponent.closeModal(0);
      }
    );
  }

  // Función para descargar archivo
  download() {
    let lstLlamadas2: any[] = [];
      // console.log(this.lstLlamadas);
      this.lstLlamadas.forEach((llamada, index) => {
        let llamadaAux = {
          '#': index + 1,
          'Fecha': "\"" + new dateFormatSlash().transform(llamada.fecha) + "\"",
          'Empresa': "\"" + llamada.empresa + "\"",
          'Contacto': "\"" + llamada.contacto + "\"",
          'Asunto': "\"" + llamada.asunto + "\"",
          'Comentarios': "\"" + llamada.comentarios + "\"",
          'Destino': "\"" + llamada.destino + "\"",
          'Atendió': "\"" + llamada.atendio + "\"",
          'Estado': "\"" + llamada.estado + "\""

          // 'Cliente': "\"" + factura.nombre_cliente + "\"",
          // 'Razón Social': "\"" + factura.rsocial + "\"",
          // 'RFC': factura.rfc,
          // 'Factura': factura.factura,
          // 'UUID': factura.uuid,
          // 'Vendió': factura.fpor,
          // 'Sub Total M.N.': "\"" + new AccountingFormatMoney().transform(factura.importeMN) + "\"",
          // 'IVA M.N.': "\"" + new AccountingFormatMoney().transform(factura.totalivaMN) + "\"",
          // 'Total M.N.': "\"" + new AccountingFormatMoney().transform(factura.totalMN) + "\"",
          // 'Sub Total USD': "\"" + new AccountingFormatMoney().transform(factura.importe) + "\"",
          // 'IVA USD': "\"" + new AccountingFormatMoney().transform(factura.totaliva) + "\"",
          // 'Total USD': "\"" + new AccountingFormatMoney().transform(factura.total) + "\"",
          // 'Moneda': factura.moneda,
          // 'T.Cambio': "\"" + new AccountingFormatMoney().transform(factura.pdolar) + "\"",
          // 'C.Pago': factura.cpago,
          // 'F. Facturación': new dateFormatSlash().transform(factura.fecha),
          // 'Tipo': factura.tipo,
          // 'Refacturada': factura.refacturada,
          // 'Estado': factura.estado,
          // 'Fecha Cancelación': new dateFormatSlash().transform(factura.fechaCancelacion) == "Pendiente" ? "NA" : new dateFormatSlash().transform(factura.fechaCancelacion),
          // 'No. Cuenta': factura.cuentaBanco,

        };
        lstLlamadas2.push(llamadaAux);
      });
      var csvData = this.ConvertToCSV(lstLlamadas2);
      var a = document.createElement("a");
      a.setAttribute('style', 'display:none;');
      document.body.appendChild(a);
      var blob = new Blob([csvData], { type: 'text/csv' });
      var url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = 'ConsultaLlamadas-' + this._utilFechas.fechaDescarga(new Date()) + '.csv';
      a.click();
  }

  // Función para convertir JSON en formato CSV
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

  // consultaLlamadas(parametros: Parametros) {
  //   this.coreComponent.openModal(0);
  //   this._llamadaService.obtenerLlamadas(parametros).subscribe(
  //     data => {
  //       this.lstLlamadas = data.current;
  //       this.coreComponent.closeModal(0);
  //     },
  //     error => {
  //       this.coreComponent.closeModal(0);
  //     }
  //   );
  // }

  // radioSistema($event) {
  //   console.log('RadioSistema');
  // }

  // Gráficas
  showGraphicPanel() {
    this.showGraphic = true;
    setTimeout( () => { this.topGraphics = "0"; }, 100 );
    // console.log('Entro', this.showGraphic);
  }

  showTablePanel() {
    this.topGraphics = "-110%";
    setTimeout( () => { this.showGraphic = false; }, 300 );
    // console.log(this.showGraphic);
  }

  getLlamadasUnion(parametros) {
    this.refrescar = false;
    this._llamadaService.obtenerLlamadas(parametros).subscribe(
      data => {
        console.log(data.current);
        this.lstLlamadas = data.current;
        // this.totalChecadas = this.lstAsistencias.length;
        this.graficasCargadas = false;
        this.coreComponent.closeModal(0);

        this.limpiarVariablesGrafica();
        this.calcularDatosParaGraficas();
        this.graficasValores = [
          this.clientes,
          this.abierta_cerrada,
          this.et_ft,
          this.destino,
          this.tipo
          // this.categorias
        ];
        this.graficas = [];
        // Titulos de Gráficas
        this.graficas = [
          'Clientes',
          'Abierta vs Cerrada',
          'ET vs FT',
          'Destino',
          'Tipo'
          // "Categoría"
        ];
        this.refrescar = true;
      },
      error => {
        console.log(error);
        this.coreComponent.closeModal(0);
      }
    );
  }

  getEmpresasConsultaActual(lstTemporalEmpresas: any []) {
    // for (let i = 0; i < this.lstLlamadas.length; i++) {
    //   let nombreEmpresa = this.lstLlamadas
    // }
    let temporaldestino: any [] = [];
    let tempoAux2: any [] = [];
    let temporalEmpresas: any [] = [];
    this.lstEmpresasConsultaActual = [];
    // console.log('Nueva lista recibida: ', lstTemporalEmpresas);
    // console.log('consulta: ', this.lstLlamadas);
    if (lstTemporalEmpresas.length > 0) {
      // this.lstEmpresasConsultaActual.push(lstTemporalEmpresas[0]);
      temporalEmpresas.push(lstTemporalEmpresas[0]);
      // console.log('antes de unico: ', lstTemporalEmpresas[0]);
      // console.log('unico: ', this.lstEmpresasConsultaActual);
    }
    // console.log('tamaño lstLlamadas:', this.lstLlamadas.length);
    // console.log('tamaño lstEmpresasConsultaActual: ', lstEmpresasConsultaActual.length);
    this.lstLlamadas.forEach(function(empresaTemp) {
      let repetido: Boolean = false;
      let contador = 0;
      temporalEmpresas.forEach(function (temp) {
         // console.log('empresaTemp: ', empresaTemp.empresa);
         // console.log('temp: ', temp.empresa);
          if (temp.empresa === empresaTemp.empresa) {
            contador += 1;
            if (contador > 0 ) {
              // La empresa ya se encuentra en el arreglo
              repetido = true;
              // console.log('Se repitio');
            }
          }
          // console.log('contador: ', contador);
      });
      // console.log('repetido: ', repetido);
      if (!repetido) {
        // console.log('Se agrego');
        // Inserta la empresa en el arreglo
        temporalEmpresas.push(empresaTemp);
      }
    });
    // console.log('Arreglo de empresas: ', lstEmpresasConsultaActual);
    temporalEmpresas.forEach(function (temp) {
      tempoAux2.push(temp.empresa);
    });
    // Limpieza de arreglo
    this.lstEmpresasConsultaActual = [];
    // lstAuxEmpre.forEach(function (temp) {
    //   this.lstEmpresasConsultaActual.push(temp);
    // });
    this.lstEmpresasConsultaActual = tempoAux2;
    // console.log('Nombre de empresas: ', lstAuxEmpre);
    // console.log('Nombre  de empresas final: ', this.lstEmpresasConsultaActual);

    // Proceso con destinos
    if (this.lstLlamadas.length > 0) {
      this.lstAuxDesti.push(this.lstLlamadas[0]);
    }
    this.lstLlamadas.forEach(function (tempLlamadas) {
      let repetido: Boolean = false;
      let contador = 0;
      temporaldestino.forEach(function (tempAuxDest) {
        if (tempLlamadas.destino === tempAuxDest.destino) {
          contador += 1;
          if (contador > 0) {
            repetido = true;
          }
        }
      });
      if (!repetido) {
        temporaldestino.push(tempLlamadas);
      }
    });
    let temporal: any [] = [];
    temporaldestino.forEach(function (temp) {
      temporal.push(temp.destino);
    });
    this.lstAuxDesti = [];
    this.lstAuxDesti = temporal;
    // console.log('Destinos finales: ', this.lstAuxDesti);
  }
  limpiarVariablesGrafica() {
    // Limpieza de arrelgos para la fiunción de calcularDatosGracias
    this.lstDestinoGrafica = [];
    this.lstClienteGrafica = [];
    this.lstClienteGraficaAbiCerra = [];
    this.lstClienteGraficaEtFt = [];
    this.lstClienteGraficaDestino = [];
    this.lstClienteGraficaCliente = [];

    this.lstClienteGraficaAbiCerraAux = [];
    // Arreglo de valores para empresa y destino.
    this.lstValores = [];
    this.lstValoresDesti = [];
    let lstValTemp = [];
    this.lstEmpresasConsultaActual.forEach(function (temp) {
      lstValTemp.push(0);
    });
    this.lstValores = lstValTemp;
    let lstValuesExtraHoverClientes: any = [];
    this.lstEmpresasConsultaActual.forEach(function (temp) {
      lstValuesExtraHoverClientes.push([0, 0]);
    });
    let lstValTempo2 = [];
    // console.log('Ni idea: ', lstAuxDesti);
    this.lstAuxDesti.forEach(function (tempo) {
      lstValTempo2.push(0);
    });
    this.lstValoresDesti = lstValTempo2;
    let lstValuesExtraHoverDestino: any = [];
    this.lstAuxDesti.forEach(function (temp) {
      lstValuesExtraHoverDestino.push([0, 0]);
    });
    // console.log('etiquetas: ', this.lstEmpresasConsultaActual);
    this.clientes = {
      titulo: 'Totales',
      labels: this.lstEmpresasConsultaActual,
      valores: this.lstValores,
      labelsExtras: ['Clientes', 'Llamadas'],
      labelsExtrasHover: ['Clientes', 'Llamadas'],
      valuesExtras: [0, 0],
      valuesExtrasHover: lstValuesExtraHoverClientes
    };
    console.log('clientes: ', this.clientes);

    this.abierta_cerrada = {
      titulo: 'Totales',
      labels: [
        'CERRADA',
        'ABIERTA'
      ],
      valores: [0, 0],
      labelsExtras: ['Clientes', 'Llamadas'],
      labelsExtrasHover: ['Clientes', 'Llamadas'],
      valuesExtras: [0, 0],
      valuesExtrasHover: [[0, 0], [0, 0]]
    };

    this.et_ft = {
      titulo: 'Totales',
      labels: ['ET', 'FT'],
      valores: [0, 0],
      labelsExtras: ['Clientes', 'Llamadas'],
      labelsExtrasHover: ['Clientes', 'Llamadas'],
      valuesExtras: [0, 0],
      valuesExtrasHover: [[0, 0], [0, 0]]
    };

    this.destino = {
      titulo: 'Totales',
      labels: this.lstAuxDesti,
      valores: this.lstValoresDesti,
      labelsExtras: ['Clientes', 'Llamdas'],
      labelsExtrasHover: ['Clientes', 'Llamadas'],
      valuesExtras: [0, 0],
      valuesExtrasHover: lstValuesExtraHoverDestino
    };

    this.tipo = {
      titulo: 'Totales',
      labels: [
        'Con requisición',
        'Sin requisición'
      ],
      valores: [0, 0],
      labelsExtras: ['Clientes', 'Llamadas'],
      labelsExtrasHover: ['Clientes', 'Llamadas'],
      valuesExtras: [0, 0],
      valuesExtrasHover: [
        [0, 0],
        [0, 0]
      ]
    };
  }

  calcularDatosParaGraficas() {
    // console.log('tam: ', this.lstAuxDesti.length);
    for (let llamada of this.lstLlamadas) {
      this.llenarTotales(this.clientes, llamada, 'CLIENTES');
      this.llenarTotales(this.abierta_cerrada, llamada, 'ABIERTA_CERRADA');
      this.llenarTotales(this.et_ft, llamada, 'ET_FT');
      this.llenarTotales(this.destino, llamada, 'DESTINO');
      this.llenarTotales(this.tipo, llamada, 'TIPO');
      // this.llenarTotales(this.categorias, llamada, "CATEGORIAS");
    }
    this.graficasCargadas = true;
    // console.log(this.clientes);
    console.log(this.lstClienteGraficaAbiCerra);
    console.log('Empresas consulta: ', this.lstEmpresasConsultaActual);
    console.log(this.lstClienteGraficaAbiCerra[0]);
    console.log(this.lstClienteGraficaAbiCerra[1]);
    this.abierta_cerrada.valuesExtrasHover[1][0] = this.lstClienteGraficaAbiCerra[1].length;
  }

  llenarTotales(total, elemento, graficaElegida) {
    switch (graficaElegida) {
      case 'CLIENTES':
      // console.log('esquema: ', this.clientes);
        // console.log('Empre: ', this.lstEmpresasConsultaActual);
          let posicion2 = this.lstEmpresasConsultaActual.indexOf(elemento.empresa);
          if (this.lstClienteGraficaCliente.indexOf(elemento.empresa) === -1) {
            this.lstClienteGraficaCliente.push(elemento.empresa);
            total.valores[posicion2]++;
            total.valuesExtras[0]++;
            if (total.valuesExtrasHover != null ) {
              // console.log(':D ', total.valuesExtrasHover[posicion2]);
              total.valuesExtrasHover[posicion2][0]++;
            }
          }
          total.valuesExtras[1]++;
          total.valuesExtrasHover[posicion2][1]++;
      break;
      case 'ABIERTA_CERRADA':
        if (this.lstClienteGraficaAbiCerra[0] === undefined) {
          this.lstClienteGraficaAbiCerra[0] = [];
          this.lstClienteGraficaAbiCerra[1] = [];
        }
        if (elemento.estado === 'CERRADA') {
          if (this.lstClienteGraficaAbiCerra[0].indexOf(elemento.empresa) === -1) {
            this.lstClienteGraficaAbiCerra[0].push(elemento.empresa);
            if (this.lstClienteGraficaAbiCerra[1].indexOf(elemento.empresa) === -1) {
              total.valuesExtras[0]++; // Total clientes
              total.valuesExtrasHover[0][0]++; // clientes sección cerrada
            }
            total.valores[0]++;
          }
          total.valuesExtras[1]++; // Total llamadas
          total.valuesExtrasHover[0][1]++; // Llamadas sección cerrada
        } else if (elemento.estado === 'ABIERTA' || elemento.estado === 'EN ESPERA') {
          if (this.lstClienteGraficaAbiCerra[1].indexOf(elemento.empresa) === -1) {
            this.lstClienteGraficaAbiCerra[1].push(elemento.empresa);
            if (this.lstClienteGraficaAbiCerra[0].indexOf(elemento.empresa) === -1) {
              total.valuesExtras[0]++; // Total clientes
              total.valuesExtrasHover[1][0]++; // Clientes sección abierta
              total.valuesExtrasHover[1][0] = this.lstClienteGraficaAbiCerra[1].length;
            } else {
              total.valuesExtrasHover[0][0]--;
            }
            total.valores[1]++;
          }
          total.valuesExtras[1]++; // Total Llamadas
          total.valuesExtrasHover[1][1]++; // Llamadas sección abierta
        }
      break;
      case 'ET_FT':
          if (this.lstClienteGraficaEtFt[0] === undefined) {
            this.lstClienteGraficaEtFt[0] = [];
            this.lstClienteGraficaEtFt[1] = [];
          }

        if (elemento.enTiempo === 'NA' || elemento.enTiempo === 'ET') {
          if (this.lstClienteGraficaEtFt[0].indexOf(elemento.empresa) === -1) {
            this.lstClienteGraficaEtFt[0].push(elemento.empresa);
            if (this.lstClienteGraficaEtFt[1].indexOf(elemento.empresa) === -1) {
              total.valuesExtras[0]++; // Total Clientes
              total.valuesExtrasHover[0][0]++; // clientes sección
            } else {
              // total.valuesExtrasHover[1][0]--;
            }
            total.valores[0]++; // Aunmento de En Tiempo
          }
          total.valuesExtras[1]++; // Total llamadas
          total.valuesExtrasHover[0][1]++; // Llamadas sección
        } else {
          if (this.lstClienteGraficaEtFt[1].indexOf(elemento.empresa) === -1) {
            this.lstClienteGraficaEtFt[1].push(elemento.empresa);
            if (this.lstClienteGraficaEtFt[0].indexOf(elemento.empresa) === -1) {
              total.valuesExtras[0]++; // Total Clientes
              total.valuesExtrasHover[1][0]++; // clientes sección
              total.valuesExtrasHover[1][0] = this.lstClienteGraficaEtFt[1].length;
            } else {
              total.valuesExtrasHover[0][0]--;
            }
            total.valores[1]++; // Aumento de Fuera de tiempo
          }
          total.valuesExtras[1]++; // Total llamadas
          total.valuesExtrasHover[1][1]++; // Llamadas sección
        }
      break;
      case 'DESTINO':
        // console.log('wow: ', this.lstAuxDesti);
        // console.log('posicion: ', this.lstAuxDesti.indexOf(elemento.destino));
          let posicion = this.lstAuxDesti.indexOf(elemento.destino);
          if (this.lstClienteGraficaDestino[posicion] === undefined) {
            this.lstClienteGraficaDestino[posicion] = [];
          }
          if (this.lstClienteGraficaDestino[posicion].indexOf(elemento.empresa) === -1) {
              this.lstClienteGraficaDestino[posicion].push(elemento.empresa);
              total.valores[posicion]++;
              total.valuesExtras[0]++;
              total.valuesExtrasHover[posicion][0]++;
          }
          total.valuesExtras[1]++;
          total.valuesExtrasHover[posicion][1]++;
          // let posicion = this.lstAuxDesti.indexOf(elemento.destino);
          // if (this.lstClienteGraficaDestino.indexOf(elemento.empresa) === -1) {
          //   this.lstClienteGraficaDestino.push(elemento.empresa);
          //   total.valores[posicion]++;
          //   total.valuesExtras[0]++;
          //   total.valuesExtrasHover[posicion][0]++;
          // }
          // total.valuesExtras[1]++;
          // total.valuesExtrasHover[posicion][1]++;
      break;
      case 'TIPO':
        // console.log('to: ', elemento.requsicionCotiza);
        // console.log('empresas ', this.lstLlamadas);
        // console.log('emp2: ', this.lstEmpresasConsultaActual);
        // onsole.log('ele.empresa: ', elemento.empresa);
        // console.log('arre: ', this.lstClienteGrafica);
        if (this.lstClienteGrafica[0] === undefined) {
          this.lstClienteGrafica[0] = [];
          this.lstClienteGrafica[1] = [];
        }
        if (elemento.requsicionCotiza) {
          if (this.lstClienteGrafica[0].indexOf(elemento.empresa) === -1) {
            // console.log(this.lstClienteGrafica.indexOf(elemento.empresa));
            this.lstClienteGrafica[0].push(elemento.empresa);
            total.valuesExtras[0]++; // Total clientes
            total.valuesExtrasHover[0][0]++; // Clientes sección
            total.valores[0]++;
          }
            total.valuesExtras[1]++; // Total llamadas
            total.valuesExtrasHover[0][1]++; // Llamadas sección
        } else {
          if (this.lstClienteGrafica[1].indexOf(elemento.empresa) === -1) {
            this.lstClienteGrafica[1].push(elemento.empresa);
            total.valuesExtras[0]++; // clientes sección
            total.valuesExtrasHover[1][0]++; // Clientes
            total.valores[1]++;
          }
            total.valuesExtras[1]++; // Total llamadas
            total.valuesExtrasHover[1][1]++; // Llamadas
        }
      break;
    }
  }
}
