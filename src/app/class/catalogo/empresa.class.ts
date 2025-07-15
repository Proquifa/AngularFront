import { NominaCatalogo } from './nominaCatalogo.class';

export class Empresa {
    idEmpresa: number;
    nomenclaturaEmpresa: string;
    alias: string;
    rfcEmpresa: string;
    razonSocial: string;
    calle: string;
    colonia: string;
    delegacion: string;
    estado: string;
    ciudad: string;
    pais: string;
    cp: string;
    vendedor: boolean;
    facturaElectronica: boolean;
    facturaMatriz: boolean;
    comprador: boolean;
    importador: boolean;
    exportador: boolean;
    padronImportador: boolean;
    telefono: string;
    regimenFiscal: string;

    contraseniaSAT: string;
    factorRiesgo: NominaCatalogo;
    periodicidadPago: NominaCatalogo;
    registroPatronal: string;
    sitioWeb: string;
    sectorEmpresarial: string;
    serie: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    correoElectronico: string;
    lada1: string;
    telefono1: string;
    lada2: string;
    telefono2: string;

    numero: string;
    calle2: string;
    colonia2: string;
    delegacion2: string;
    estado2: string;
    ciudad2: string;
    pais2: string;
    cp2: string;
    numero2: string;

    activo: boolean;

    /*

    Nombre - Alias
    Factor Riesgo
    Registro Patronal
    Sitio Web
    Sector Empresarial
    Calle - YA
    Número - YA
    Colonia - YA
    Codigo Postal - YA
    Estado - YA
    Municipio/Delegación - YA
    Razon Social - YA
    Regimen Fiscal - YA
    RFC - YA
    Contraseña SAT
    Serie
    /////
    Calle
    Número
    Colonia
    Codigo Postal
    Estado
    Municipio/Delegación
    /////
    Se podría poner un check para llenarlo con la información de arriba
    Nombre
    Apellido P
    Apellido M
    Correo Electronico
    Lada
    Telefono 1
    Lada
    Telefono 2

    Logo
    Registro Patronal
    CER
    KEY

    Folio ???

    */

    constructor() {
        this.idEmpresa = 0;
        this.nomenclaturaEmpresa = null;
        this.alias = null;
        this.rfcEmpresa = null;
        this.razonSocial = null;
        this.calle = null;
        this.colonia = null;
        this.delegacion = null;
        this.estado = null;
        this.ciudad = null;
        this.pais = 'México';
        this.cp = null;
        this.telefono = null;
        this.regimenFiscal = null;
        this.vendedor = false;
        this.facturaElectronica = false;
        this.comprador = false;
        this.importador = false;
        this.exportador = false;
        this.padronImportador = false;

        this.contraseniaSAT = null;
        this.factorRiesgo = new NominaCatalogo();
        this.periodicidadPago = new NominaCatalogo();
        this.registroPatronal = null;
        this.sitioWeb = null;
        this.sectorEmpresarial = null;
        this.serie = null;
        this.nombre = null;
        this.apellidoPaterno = null;
        this.apellidoMaterno = null;
        this.correoElectronico = null;
        this.lada1 = null;
        this.telefono1 = null;
        this.lada2 = null;
        this.telefono2 = null;
        this.numero = null;
        this.calle2 = null;
        this.colonia2 = null;
        this.delegacion2 = null;
        this.estado2 = null;
        this.ciudad2 = null;
        this.pais2 = null;
        this.cp2 = null;
        this.numero2 = null;
        this.activo = true;
    }
}
