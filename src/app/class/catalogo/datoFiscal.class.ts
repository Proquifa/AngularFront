import { NominaCatalogo } from './nominaCatalogo.class';

export class DatoFiscal {
    idDatoFiscal: number;
    razonSocial: string;
    rfc: string;
    regimenFiscal: NominaCatalogo;
    curp: string;
    activo: boolean;
    constructor() {
        this.idDatoFiscal = 0;
        this.razonSocial = null;
        this.rfc = null;
        this.regimenFiscal = new NominaCatalogo();
        this.curp = null;
        this.activo = true;
    }
}
