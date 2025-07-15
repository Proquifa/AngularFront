export class Contacto {
  numFila: Number;
  idContacto: Number;
  idEmpresa: Number;
  nombre: String;
  titulo: String;
  puesto: String;
  departamento: String;
  telefono: String;
  telefonoN: String;
  fax: String;
  EMail: String;
  tipo: String;
  empresa: String;
  habilitado: Boolean;
  nacionalidadEmpresa: String;
  ultimo: String = "";
  direccion: any;//Direccion;
  idEmpleadoEsac: Number;
  nombreEsac: String;
  totalContactos: Number;
  totalDirecciones: Number;
  totalZonas: Number;
  agregadoExpo: Boolean;
  habilitadoCliente: Boolean;
  idProveedor: Number;
  extension1: String;
  extension2: String;
  usuarioPConnect: Boolean;
  idFletera: Number;
  //Variables agregadas para los nuevos campos que vienen de PConnect
  apellidos: String;
  celular: String;
  antiguedadAnio: Number;
  antiguedadMes: Number;
  fechaNacimiento: Date;

  //se agregan para EV
  industria: String;
  rol: String;
  sector: String;
  nivelIngresos: String;

  origenRegistro: String;

  totalContactosPorEmpresa: Number; //esta variable permite un conteo para los items renderes
  totalClientes: Number; //esta variable permite un conteo para los items renderes

  //variables agregaada por el Osv para poder utilizarla en el componente  comboCatalogos
  valor: String;
  llave: Number;

  //Para cliente
  fechaUltimaActualizacion: Date;
  nivelDecision: String;
  nivelPuesto: String;
  estadoCliente: Boolean;
  vieneDE_PopUp: String;
  fk02_Cliente: String;
  idAgenteAduanal: Number;
  mantenimiento: String;
  dificultad: String;

  esac: String;
  ev: String;

  vinculado: Boolean;
  //VISTA
  nombreCompleto: String;
  deDondeViene: String;
  contactoNAFTA: Boolean;
  firma: any[];
  rutaFirma: String;

  foto: any[];
  rutaFoto: String;
}
