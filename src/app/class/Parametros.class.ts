export class Parametros {
  rutaGeneral: string = 'http://proquifa.com.mx:51725/SAP/';
  /*Emppleado*/
  tipo: String;

  /*Factura*/
  finicio: Date;
  ffin: Date;
  idCliente: Number;
  fpor: String;
  estado: String;
  dentroSistema: Boolean;
  factura: Number;
  idUsuarioLogueado: Number;
  cobrador: Number;
  uuid: String;

  archivos: any[];
  nombres: any[];
  archivosClientes: any[];
  nombreArchivo: string;
  salida: String;

  /*Facturación*/
  cliente: String;
  refacturada: String;
  facturo: String;
  medio: String;
  cPago: String;
  cPedido: String;
  facturaS: String;
  sc: number;

  /*Cobros*/
  fechaInicio: Date;
  fechaFin: Date;
  medioPago: String;
  cpago: String;
  drc: number;
  cuenta: String;
  banco: String;
  fechaCobro: Date;
  busquedaCR: boolean;
  fechaUEntrega: Date;
  individual: boolean;
  cpedido: String;

  /*Compras*/
  proveedor: number;
  estadoInt: number;
  ordenCompra: String;
  usuario: number;
  empresaCompra: String;
  valorAdicional: String;
  coloco: number;
  idUsuario: number;
  idPCompra: number;

  /* Asistencias */
  idTrabajador: number;
  tipoChecada: String;
  area: String;
  depto: String;
  categoria: String;
  incidencia: String;
  localidad: String;
  nombreTrabajador: String;


  /* Cotizaciones*/
  folio: string;
  idEmpleado: number;
  cotizacion: any;
  requsicion: number;
  idpcotiza: number;

  /* Llamadas */
  empresa: String;
  contacto: String;
  asunto: String;
  comentarios: String;
  destino: String;
  atendio: String;
  estadoLlamada: String;

  /* Nota de crédito */
  folioNota: Number;

  /* Reportar Visita */
  nivelCliente: String;

  code: String;
}
