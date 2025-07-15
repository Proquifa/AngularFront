export class CodigoPostal {
    idCodigoPostal: number;
    codigoEstado: number;
    estado: string;
    codigoMunicipio: number;
    municipio: string;
    ciudad: string;
    zona: string;
    codigoPostal: number;
    colonia: string;
    tipo: string;
    codigoPais: number;
    pais: string;
    claveEntFed: string;
    constructor() {
        this.idCodigoPostal = 0;
        this.codigoEstado = 0;
        this.estado = null;
        this.codigoMunicipio = 0;
        this.municipio = null;
        this.ciudad = null;
        this.zona = null;
        this.codigoPostal = 0;
        this.colonia = null;
        this.tipo = null;
        this.codigoPais = 0;
        this.pais = null;
        this.claveEntFed = null;
    }
}
