import { Poliza } from './poliza.class';
import { CuentaContable } from './cuentaContable.class';
import { CentroCosto } from './centroCosto.class';

export class PPoliza {
    idPPoliza: number;
    poliza: Poliza;
    cuentaContable: CuentaContable;
    centroCosto: CentroCosto;
    descripcion: String;
    monto: number;
    montoIVA: number;
    tipoIVA: boolean;
    tipo: boolean;
    constructor() {
        this.idPPoliza = 0;
        this.poliza = null;
        this.cuentaContable = new CuentaContable();
        this.centroCosto = new CentroCosto();
        this.descripcion = null;
        this.monto = 0;
        this.montoIVA = 0;
        this.tipoIVA = false;
        this.tipo = false;
    }
}
// 0% = false, 16% = true;
// Cargo = false, Abono = true;
