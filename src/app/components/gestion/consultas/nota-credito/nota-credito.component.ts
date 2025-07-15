import { Component, OnInit } from '@angular/core';
import { ElementFilter } from '../../../shared/filter/element.model';
import { CoreContainerComponent } from '../../../core-container/core-container.component';
import { dateFormatSlash, AccountingFormatNumber2Decimal } from '../../../../pipes/accounting/accounting.pipe';
import { UtilFechas } from '../../../../class/UtilFechas';
import { Router } from '@angular/router';
import { Parametros } from '../../../../class/Parametros.class';
import { NotaCreditoService } from '../../../../services/gestion/consulta/nota-credito/nota-credito.service';
import { GestionService } from '../../../../services/gestion/gestion.service';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';
import { NgIf } from '@angular/common';

@Component({
  selector: 'pn-nota-credito',
  templateUrl: './nota-credito.component.html',
  styleUrls: ['./nota-credito.component.scss']
})
export class NotaCreditoComponent implements OnInit {
  lstNotasCredito: any [] = [];

  // Filtro
  isThereData: Boolean = false;
  IsImage: Boolean = true;
  IsDate: Boolean = true;
  Clear = true;
  avanzada: Boolean = true;
  Elements: ElementFilter[];

  // Filtro busqueda Rapida
  filtroConsultaRapida: String = 'Nota';
  filtroForm: FormGroup;
  lstRadiosRapida: string [] = ['Nota de Crédito', 'Pedido Interno'];

  defaultSelected: any = { nombre: '- - Todos - -' };
  dropClientes: any[] = [{ nombre: '--TODOS--', key: 0 }];
  dropCobrador: any[] = [{ nombre: '--TODOS--', key: 0 }];
  dropFacturo: any[] = [
    { nombre: '--TODOS--', key: 0 },
    { nombre: 'Proveedora', key: 1 },
    { nombre: 'Proquifa', key: 2 },
    { nombre: 'Pharma', key: 3 },
    { nombre: 'Golocaer', key: 4 },
    { nombre: 'Mungen', key: 5 }
  ];
  dropEstado: any[] = [
    { nombre: '--TODOS--', key: 0 },
    { nombre: 'APLICADA', key: 1 },
    { nombre: 'POR APLICAR', key: 2}
  ];

  hiddenClose: Boolean = true;
  classPanel: String = 'panelNormal';
  topGraphics: any = '-110%';

  refrescar: Boolean = true;

  // Consulta
  parametros: Parametros = new Parametros();

  // Gráficas dona
  clientes: any = [];
  facturo: any = [];
  estado: any = [];

  lstGraficaClientes: any [] = [];
  lstGraficaFacturo: any [] = [];
  lstGraficaFacturoClientes: any [] = [];
  lstGraficaEstado: any [] = [];

  showGraphic: Boolean = false;
  graficasCargadas: Boolean = false;
  graficasValores: any[] = [];
  graficas: any[] = [];

  lstEmpresasConsultaActual: any [] = [];
  lstFacturoConsultaActual: any [] = [];

  // CSV
  _utilFechas: UtilFechas = new UtilFechas();

  constructor(
    private router: Router,
    private coreComponent: CoreContainerComponent,
    private _gestionService: GestionService,
    private _notaCreditoService: NotaCreditoService
  ) { }

  ngOnInit() {

    this.filtroForm = new FormGroup({
      filtroDato: new FormControl()
    });

    this.parametros.fechaInicio = new Date();
    this.parametros.fechaFin = new Date();
    this.parametros.idCliente = 0;
    this.parametros.cobrador = 0;
    this.parametros.fpor = '';
    this.parametros.estado = '';
    this.parametros.idUsuarioLogueado = 91;

    this.coreComponent.openModal(0);
    this._gestionService.dropClientes().subscribe(
      data => {
        let lstAux: any[] = [];
        for (var item of data.current) {
          lstAux.push({ nombre: item.valor, key: item.llave });
        }
        this.dropClientes = this.dropClientes.concat(lstAux);

        this._gestionService.dropCobrador().subscribe(
          data => {
            let lstAux: any[] = [];
            for (var item of data.current) {
              lstAux.push({ nombre: item.usuario, key: item.idEmpleado });
            }
            this.dropCobrador = this.dropCobrador.concat(lstAux);
            this.Llenar();
            this._notaCreditoService.getNotaCreditoAvanzada(this.parametros).subscribe(
              data => {
                  // console.log('ahora', data.current);
                  if (data.current !== undefined) {
                    this.lstNotasCredito = data.current;
                    console.log('Datos: ', data.current);
                    // this.lstLlamadas = data.current;
                    // this.getEmpresasConsultaActual(data.current);
                    // console.log('lstLlamadas: ', this.lstLlamadas);
                    this.getNotaCreditoUnion();
                    this.coreComponent.closeModal(0);
                  }
              },
              error => {
                this.coreComponent.closeModal(0);
              }
            );
              },
          error => {
            console.log(error);
          }
        );
      },
      error => {
        console.log('error login');
        console.log(error);
      }
    );
  }

  // Animación de filtro
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

  Llenar = () => {
    this.Elements = [
      new ElementFilter('string', 'Cliente', this.dropClientes, true),
      new ElementFilter('string', 'Cobrador', this.dropCobrador, true),
      new ElementFilter('string', 'Facturó', this.dropFacturo, true ),
      new ElementFilter('string', 'Estado', this.dropEstado, true ),
    ];
    this.isThereData = true;
    this.Clear = false;
  };

  radioRapida($event) {
    if ($event === 0) {
      this.filtroConsultaRapida = 'Nota';
    } else if ($event === 1) {
      this.filtroConsultaRapida = 'Pedido';
    }
  }

  filtroAvanzada() {
    if (!this.avanzada) {
      this.avanzada = true;
      this.filtroConsultaRapida = 'Nota';
      this.filtroForm = new FormGroup({
        filtroDato: new FormControl()
      });
    }
  }

  filtroRapida() {
    if (this.avanzada) {
      this.avanzada = false;
    }
  }

  filtroRapido() {
    if (this.filtroForm.get('filtroDato').value !== null) {
      // console.log(this.filtroForm.get('filtroDato').value);
      // console.log("tiene valor");
      if (this.filtroConsultaRapida === 'Nota' ) {
        console.log('Es nota');
        this.parametros.folioNota = this.filtroForm.get('filtroDato').value;
        this.listarNotasCreditoRapida();
      } else {
        console.log('es Pedido');
        this.parametros.folioNota = 0;
        this.parametros.cPedido = this.filtroForm.get('filtroDato').value;
        this.listarNotasCreditoRapida();
      }
    } else {
      // console.log('Valor nulo');
      // console.log(this.filtroForm.get('filtroDato').value);
    }
  }

  mostrarDatos($event) {
    console.log($event);
    console.log('mostrarDatos');
    this.parametros.fechaInicio = $event.Fechas.fechaInicial;
    this.parametros.fechaFin = $event.Fechas.fechaFinal;
    this.parametros.idCliente = $event.Datos[0].key;
    this.parametros.cobrador = $event.Datos[1].key;
    if ($event.Datos[2].nombre === '--TODOS--') {
      this.parametros.fpor = '';
    } else {
      this.parametros.fpor = $event.Datos[2].nombre;
    }
    if ($event.Datos[3].nombre === '--TODOS--') {
      this.parametros.estado = '';
    } else {
      this.parametros.estado = $event.Datos[3].nombre;
    }
    this.parametros.idUsuarioLogueado = 91;
    this.listarNotasCredito();
    // this.getNotaCreditoUnion(this.parametros);
 }

  listarNotasCreditoRapida() {
    this.coreComponent.openModal(0);
    this._notaCreditoService.getNotaCreditoRapida(this.parametros).subscribe(
      data => {
        if (data.current !== undefined) {
          this.lstNotasCredito = data.current;
          console.log('Datos: ', data.current);
          this.getEmpresasConsultaActual(data.current);
          // this.lstLlamadas = data.current;
          // this.getEmpresasConsultaActual(data.current);
          // console.log('lstLlamadas: ', this.lstLlamadas);
          this.coreComponent.closeModal(0);
          this.getNotaCreditoUnionRapida();
        }
      }
    );
  }

 listarNotasCredito() {
  this.coreComponent.openModal(0);
  this._notaCreditoService.getNotaCreditoAvanzada(this.parametros).subscribe(
    data => {
        // console.log('ahora', data.current);
        if (data.current !== undefined) {
          this.lstNotasCredito = data.current;
          console.log('Datos: ', data.current);
          this.getEmpresasConsultaActual(data.current);
          // this.lstLlamadas = data.current;
          // this.getEmpresasConsultaActual(data.current);
          // console.log('lstLlamadas: ', this.lstLlamadas);
          this.coreComponent.closeModal(0);
          this.getNotaCreditoUnion();
        }
    },
    error => {
      this.coreComponent.closeModal(0);
    }
  );
 }

 descargarPDF(archivo: string) {
  console.log(archivo);
  // const { remote } = require('electron');
  // const { BrowserWindow } = remote;
  const BrowserWindow = electron.remote.BrowserWindow;
  let newWin = new BrowserWindow({ width: 800, height: 600 });
  PDFWindow.addSupport(newWin);
  newWin.loadURL(archivo);
  }

  getNotaCreditoUnionRapida() {
    this.refrescar = false;
    this._notaCreditoService.getNotaCreditoRapida(this.parametros).subscribe(
      data => {
        this.graficasCargadas = false;
        this.limpiarVariablesGrafica();
        this.calcularDatosParaGraficas();
        this.graficasValores = [
          this.clientes,
          this.facturo,
          this.estado
        ];
        this.graficas = [];
        // Titulos de Gráficas
        this.graficas = [
          'Clientes',
          'Facturó',
          'Estado'
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

  getNotaCreditoUnion() {
    this.refrescar = false;
    this._notaCreditoService.getNotaCreditoAvanzada(this.parametros).subscribe(
      data => {
        this.graficasCargadas = false;
        this.limpiarVariablesGrafica();
        // setTimeout(() => { this.calcularDatosParaGraficas() }, 4000);
        this.calcularDatosParaGraficas();
        console.log('siguio');
        this.graficasValores = [
          this.clientes,
          this.facturo,
          this.estado
        ];
        this.graficas = [];
        // Titulos de Gráficas
        this.graficas = [
          'Clientes',
          'Facturó',
          'Estado'
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

  limpiarVariablesGrafica() {
    this.lstGraficaClientes = [];
    this.lstGraficaFacturo = [];
    this.lstGraficaFacturoClientes = [];
    this.lstGraficaEstado = [];

    this.clientes = [];
    this.facturo = [];
    this.estado = [];

    // Clientes
    let lstValoresClientes: any [] = [];
    this.lstEmpresasConsultaActual.forEach(function (temp) {
      lstValoresClientes.push(0);
    });
    let lstValuesExtrasHoverClientes: any = [];
    this.lstEmpresasConsultaActual.forEach(function (temp) {
      lstValuesExtrasHoverClientes.push([0, 0, 0, 0]);
    });
    // Facturo
    let lstValoresFacturo: any [] = [];
    this.lstFacturoConsultaActual.forEach(function (temp) {
      lstValoresFacturo.push(0);
    });
    let lstValuesExtrasHoverFacturo: any = [];
    this.lstFacturoConsultaActual.forEach(function (temp) {
      lstValuesExtrasHoverFacturo.push([0, 0, 0, 0]);
    });

    this.clientes = {
      titulo: 'Totales',
      labels: this.lstEmpresasConsultaActual,
      valores: lstValoresClientes,
      labelsExtras: ['Notas de Crédito', 'Monto', 'Clientes', 'Facturas'],
      labelsExtrasHover: ['Notas de Crédito', 'Monto', 'Clientes', 'Facturas'],
      valuesExtras: [0, 0, 0, 0],
      valuesExtrasHover: lstValuesExtrasHoverClientes
    };
    this.facturo = {
      titulo: 'Totales',
      labels: this.lstFacturoConsultaActual,
      valores: lstValoresFacturo,
      labelsExtras: ['Notas de Crédito', 'Monto', 'Clientes', 'Facturas'],
      labelsExtrasHover: ['Notas de Crédito', 'Monto', 'Clientes', 'Facturas'],
      valuesExtras: [0, 0, 0, 0],
      valuesExtrasHover: lstValuesExtrasHoverFacturo
    };

    this.estado = {
      titulo: 'Totales',
      labels: ['APLICADA', 'POR APLICAR'],
      valores: [0, 0],
      labelsExtras: ['Notas de Crédito', 'Monto', 'Clientes', 'Facturas'],
      labelsExtrasHover: ['Notas de Crédito', 'Monto', 'Clientes', 'Facturas'],
      valuesExtras: [0, 0, 0, 0],
      valuesExtrasHover: [[0, 0, 0, 0], [0, 0, 0, 0]]
    };
  }

  calcularDatosParaGraficas() {
    for (let factura of this.lstNotasCredito) {
      this.llenarTotales(this.clientes, factura, 'CLIENTES');
      this.llenarTotales(this.facturo, factura, 'FACTURO');
      this.llenarTotales(this.estado, factura, 'ESTADO');
    }
    this.clientes.valuesExtras[1] = this.clientes.valuesExtras[1].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    this.facturo.valuesExtras[1] = this.facturo.valuesExtras[1].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    this.estado.valuesExtras[1] = this.estado.valuesExtras[1].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    this.graficasCargadas = true;
  }

  llenarTotales(total, elemento, graficaElegida) {
    switch (graficaElegida) {
      case 'CLIENTES':
      let posicion2 = this.lstEmpresasConsultaActual.indexOf(elemento.nombreCliente);
      if (this.lstGraficaClientes.indexOf(elemento.nombreCliente) === -1) {
        this.lstGraficaClientes.push(elemento.nombreCliente);
        total.valores[posicion2]++;
        total.valuesExtras[2]++; // Aumento en clientes
        total.valuesExtrasHover[posicion2][2]++; // Aumento clientes de sección
      }
      total.valuesExtras[1] += +(elemento.importe).toFixed(2); // Aumento del monto
      total.valuesExtras[0]++; // Aumento en notas de crédito
      total.valuesExtrasHover[posicion2][1] +=  +(elemento.importe).toFixed(2); // Aumento de monto sección
      // console.log('Importe: ', +(elemento.importe).toFixed(2));
      total.valuesExtrasHover[posicion2][0]++; // Aumento de notas de credito sección
      if (elemento.factura !== 0) {
        total.valuesExtras[3]++; // Aumento en facturas
        total.valuesExtrasHover[posicion2][3]++; // Aumento en facturas sección
      }
      break;
      case 'FACTURO':
      let posicion = this.lstFacturoConsultaActual.indexOf(elemento.fpor);
      if (this.lstGraficaFacturo.indexOf(elemento.fpor) === -1) {
          this.lstGraficaFacturo.push(elemento.fpor);
          total.valores[posicion]++;
      }
      if (this.lstGraficaFacturoClientes.indexOf(elemento.nombreCliente) === -1) {
        this.lstGraficaFacturoClientes.push(elemento.nombreCliente);
        total.valuesExtras[2]++; // Aumento en clientes
        total.valuesExtrasHover[posicion][2]++; // Aumento clientes de sección
      }
      total.valuesExtras[1] += +(elemento.importe).toFixed(2); // Aumento del monto
      total.valuesExtras[0]++; // Aumento en notas de crédito
      total.valuesExtrasHover[posicion][1] += +(elemento.importe).toFixed(2); // Aumento de monto sección
      total.valuesExtrasHover[posicion][0]++; // Aumento de notas de credito sección
      if (elemento.factura !== 0) {
        total.valuesExtras[3]++; // Aumento en facturas
        total.valuesExtrasHover[posicion][3]++; // Aumento en facturas sección
      }
      break;
      case 'ESTADO':
        if (this.lstGraficaEstado.indexOf(elemento.nombreCliente) === -1 ) {
          this.lstGraficaEstado.push(elemento.nombreCliente);
          total.valuesExtras[2]++; // Aumento de clientes
          if (elemento.estado === 'APLICADA') {
            total.valuesExtrasHover[0][2]++; // Aumento de clientes sección
          } else {
            total.valuesExtrasHover[1][2]++; // Aumento de clientes sección
          }
        }
        total.valuesExtras[0]++; // Aumento en notas de credito
        total.valuesExtras[1] += +(elemento.importe).toFixed(2); // Aumento en monto
        if (elemento.estado === 'APLICADA') {
          total.valores[0]++;
          total.valuesExtrasHover[0][0]++; // Aumento en notas de crédito de sección
          total.valuesExtrasHover[0][1] += +(elemento.importe).toFixed(2); // Aumento de monto de sección
          if (elemento.factura !== 0) {
            total.valuesExtras[3]++; // Aumento de facturas
            total.valuesExtrasHover[0][3]++; // Aumento de facturas de sección
          }
        } else {
          total.valores[1]++;
          total.valuesExtrasHover[1][0]++; // Aumento en notas de crédito de sección
          total.valuesExtrasHover[1][1] += +(elemento.importe).toFixed(2); // Aumento de monto de sección
          if (elemento.factura !== 0) {
            total.valuesExtras[3]++; // Aumento de facturas
            total.valuesExtrasHover[1][3]++; // Aumento de facturas de sección
          }
        }
      break;
    }
  }

  getEmpresasConsultaActual(lstTemporalEmpresas: any []) {
    this.lstEmpresasConsultaActual = [];
    let temporalEmpresas: any [] = [];
    let tempoAux2: any [] = [];

    if (lstTemporalEmpresas.length > 0) {
      temporalEmpresas.push(lstTemporalEmpresas[0]);
    }
    this.lstNotasCredito.forEach(function(empresaTemp) {
      let repetido: Boolean = false;
      let contador = 0;
      temporalEmpresas.forEach(function (temp) {
          if (temp.nombreCliente === empresaTemp.nombreCliente) {
            contador += 1;
            if (contador > 0 ) {
              // La empresa ya se encuentra en el arreglo
              repetido = true;
              // console.log('Se repitio');
            }
          }
      });
      if (!repetido) {
        // console.log('Se agrego');
        // Inserta la empresa en el arreglo
        temporalEmpresas.push(empresaTemp);
      }
    });
    // console.log('Arreglo de empresas: ', lstEmpresasConsultaActual);
    temporalEmpresas.forEach(function (temp) {
      tempoAux2.push(temp.nombreCliente);
    });
    // Limpieza de arreglo
    this.lstEmpresasConsultaActual = [];
    this.lstEmpresasConsultaActual = tempoAux2;

    // Empresas que facturaron
    temporalEmpresas = [];
    tempoAux2 = [];
    if (lstTemporalEmpresas.length > 0) {
      temporalEmpresas.push(lstTemporalEmpresas[0]);
    }
    this.lstNotasCredito.forEach(function(empresaTemp) {
      let repetido: Boolean = false;
      let contador = 0;
      temporalEmpresas.forEach(function (temp) {
          if (temp.fpor === empresaTemp.fpor) {
            contador += 1;
            if (contador > 0 ) {
              // La empresa ya se encuentra en el arreglo
              repetido = true;
              // console.log('Se repitio');
            }
          }
      });
      if (!repetido) {
        // console.log('Se agrego');
        // Inserta la empresa en el arreglo
        temporalEmpresas.push(empresaTemp);
      }
    });
    // console.log('Arreglo de empresas: ', lstEmpresasConsultaActual);
    temporalEmpresas.forEach(function (temp) {
      tempoAux2.push(temp.fpor);
    });
    this.lstFacturoConsultaActual = [];
    this.lstFacturoConsultaActual =  tempoAux2;
    // console.log('Facturo Actual: ', this.lstFacturoConsultaActual);
  }
  showGraphicPanel() {
    this.showGraphic = true;
    setTimeout( () => { this.topGraphics = '0'; }, 100 );
    // console.log('Entro', this.showGraphic);
  }

  showTablePanel() {
    this.topGraphics = '-110%';
    setTimeout( () => { this.showGraphic = false; }, 300 );
    // console.log(this.showGraphic);
  }

  // Función para descargar archivo
  download() {
    let lstNotasCredito2: any[] = [];
      // console.log(this.lstLlamadas);
      this.lstNotasCredito.forEach((Nota, index) => {
        let temporal: any;
        if (Nota.cpedido !== null) {
          temporal = Nota.cpedido;
        } else {
          temporal = 'Pendiente';
        }
        let NotaAux = {
          '#': index + 1,
          'Fecha': "\"" + new dateFormatSlash().transform(Nota.fecha) + "\"",
          'Cliente': "\"" + Nota.nombreCliente + "\"",
          'Cobrador': "\"" + Nota.cobrador + "\"",
          'Nota de crédito': "\"" + Nota.akFolio + "\"",
          'Facturó': "\"" + Nota.fpor + "\"",
          'Monto': "\"" + "$" + Nota.importe.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "\"",
          'Factura': "\"" + Nota.factura + "\"",
          'Pedido Interno': "\"" + temporal + "\"",
          'Estado': "\"" + Nota.estado + "\""

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
        lstNotasCredito2.push(NotaAux);
      });
      var csvData = this.ConvertToCSV(lstNotasCredito2);
      var a = document.createElement("a");
      a.setAttribute('style', 'display:none;');
      document.body.appendChild(a);
      var blob = new Blob([csvData], { type: 'text/csv' });
      var url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = 'ConsultaNotasCredito-' + this._utilFechas.fechaDescarga(new Date()) + '.csv';
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
}
