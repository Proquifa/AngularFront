export class ContableCaracteristica {
    idContableCaracteristica: number;
    descripcion: string;
    tipo: string;
    activo: boolean;
    constructor() {
        this.idContableCaracteristica = 0;
        this.descripcion = '';
        this.tipo = '';
        this.activo = true;
    }
}
