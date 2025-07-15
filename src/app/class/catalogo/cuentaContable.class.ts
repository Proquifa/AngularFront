import { ContableCaracteristica } from './contableCaracteristica.class';

export class CuentaContable {
    idCuentaContable: number;
    nivel: number;
    nivel1: number;
    nivel2: number;
    nivel3: number;
    descripcion: string;
    tipo: ContableCaracteristica;
    detalle: ContableCaracteristica;
    tipoInt: number;
    detalleInt: number;
    activo: boolean;
    descripcionAux: string;
    descripcionAuxSep: string;
}
