export class NominaCatalogo {
    idNominaCatalogo: number;
    codigoSAT: string;
    descripcion: string;
    activo: boolean;
    tipo: string;
    constructor() {
        this.idNominaCatalogo = 0;
        this.codigoSAT = null;
        this.descripcion = null;
        this.activo = true;
        this.tipo = null;
    }
}
