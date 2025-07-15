import { PPoliza } from './ppoliza.class';

export class Poliza {
    idPoliza: number;
    tipo: number;
    folio: string;
    referencia: string;
    descripcion: string;
    fecha: Date;
    empresa: any;
    cliente: any;
    proveedor: any;
    monto: number;
    iva: number;
    total: number;
    aplicada: boolean;
    activa: boolean;
    lstPPoliza: Array<PPoliza>;

    /*Auxiliares Vista*/
    fechaDate: Date;
    constructor() {
        this.idPoliza = 0;
        this.tipo = 0;
        this.folio = 'N/D';
        this.referencia = '';
        this.descripcion = '';
        this.fecha = null;
        this.empresa = null;
        this.cliente = null;
        this.proveedor = null;
        this.monto = 0;
        this.iva = 0;
        this.total = 0;
        this.aplicada = false;
        this.activa = true;
        this.lstPPoliza = new Array<PPoliza>();
        this.fechaDate = new Date();
    }
}

// Ingreso = 1, Egreso = 2, Diario = 3
