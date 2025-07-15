import { Component, OnInit, DoCheck } from '@angular/core';
import { Poliza } from '../../../../class/catalogo/poliza.class';
import { Router } from '@angular/router';
import { OptionClass } from '../../../../class/option.class';
import { CoreContainerComponent } from '../../../core-container/core-container.component';
import { CatalogoService } from '../../../../services/catalogo/catalogo.service';
import { PPoliza } from '../../../../class/catalogo/ppoliza.class';
import * as accounting from 'accounting';

@Component({
    selector: 'pn-agregar-poliza',
    templateUrl: './agregar-poliza.component.html',
    styleUrls: ['./agregar-poliza.component.scss']
})

export class AgregarPolizaComponent implements OnInit, DoCheck {
    /*

    Ingreso =   Emite: Grupo Proquifa, Recibe: Clientes;
    Egreso  =   Emite: Proveedores, Recibo Grupo Proquifa
    Diario  =   Emite: Grupo Proquifa, Recibe, Cliente/Proveedor/Ninguno

    */
    public poliza: Poliza = new Poliza();
    public polizaAux: Poliza = null;
    public isPolizaValid = new Array(6).fill(false);
    public lstCuentaCont = [];
    public classBtnAcept = 'containerFooterBtnDisabled';
    public classBtnAdd = 'containerBodyFormColorColBtnDisabled';
    public itemDescripcion = '';
    public itemMonto = '';
    public cantSelects = 8;
    public lstItems: Array<Array<OptionClass>> = new Array<Array<OptionClass>>(this.cantSelects).fill(null);
    public defaultItem: Array<OptionClass> = new Array<OptionClass>(this.cantSelects).fill({ id: 0, texto: 'Seleccionar' });
    public lstEmpresas: Array<OptionClass> = new Array<OptionClass>();
    public lstProveedores: Array<OptionClass> = new Array<OptionClass>();
    public lstClientes: Array<OptionClass> = new Array<OptionClass>();
    public ppoliza: PPoliza = new PPoliza();
    public isPPolizaValid = new Array(6).fill(false);
    public lstTipo: Array<OptionClass> = [
        { id: 1, texto: 'Ingreso' },
        { id: 2, texto: 'Engreso' },
        { id: 3, texto: 'Diario' }
    ];
    public lstTipoPP: Array<OptionClass> = [
        { id: 0, texto: 'Cargo' },
        { id: 1, texto: 'Abono' }
    ];
    public lstIVA: Array<OptionClass> = [
        { id: 0, texto: '0%' },
        { id: 1, texto: '16%' }
    ];
    public lstNCliProv: Array<OptionClass> = [
        { id: 1, texto: 'Ninguno' },
        { id: 2, texto: 'Clientes' },
        { id: 3, texto: 'Proveedores' }
    ];
    public labelSelect2 = null;
    public isDiff = true;
    public modalPromt = 'modalPromt';
    public modalSuccess = 'modalPromt';
    public tipoObjeto: OptionClass;
    /*

    Prefijo
    Tipo
    Año
    XXXXX

    */
    public folio = new Array<string>(4).fill('');

    constructor(
        private router: Router,
        private serviceCatalogo: CatalogoService,
        private coreContainer: CoreContainerComponent
    ) { }

    ngOnInit() {
        this.coreContainer.openModal(2);
        this.folio[2] = this.poliza.fechaDate.getFullYear().toString();
        this.lstItems[0] = this.lstTipo;
        this.lstItems[4] = this.lstIVA;
        this.lstItems[5] = this.lstTipoPP;
        this.lstItems[7] = this.lstNCliProv;
        this.fnGetInfo(0);
        this.polizaAux = Object.assign(new Poliza(), this.poliza);
    }
    fnGetFolio(lstFolios: Array<any>) {
        console.log('fnGetFolio', lstFolios);
        if (lstFolios !== undefined && lstFolios !== null && lstFolios.length > 0) {
            for (let item of lstFolios) {
                if (item.nombre === this.folio[1]) {
                    let nFolio = Object.assign(item.valor3 + 1);
                    if (nFolio < 10) {
                        this.folio[3] = '0000' + nFolio;
                    }
                    if (nFolio > 9 && nFolio < 100) {
                        this.folio[3] = '000' + nFolio;
                    }
                    if (nFolio > 99 && nFolio < 1000) {
                        this.folio[3] = '00' + nFolio;
                    }
                    if (nFolio > 9999 && nFolio < 10000) {
                        this.folio[3] = '0' + nFolio;
                    }
                    if (nFolio > 99999) {
                        this.folio[3] = nFolio;
                    }
                }
                break;
            }
            this.poliza.folio = this.folio[0] + '-' + this.folio[1] + '-' + this.folio[2] + '-' + this.folio[3];
        } else {
            this.poliza.folio = 'N/D';
        }
    }
    fnCancel() {
        if (this.isDiff) {
            this.fnOpenPrompt();
        } else {
            this.fnViewReturn();
        }
    }
    fnOpenPrompt() {
        this.modalPromt = 'modalPromt openModal';
    }
    fnClosePrompt() {
        this.modalPromt = 'modalPromt';
    }
    ngDoCheck() {
        if (JSON.stringify(this.poliza) !== JSON.stringify(this.polizaAux)) {
            this.isDiff = true;
        } else {
            this.isDiff = false;
        }
    }
    fnUpdateAmounts() {
        this.poliza.monto = 0;
        this.poliza.iva = 0;
        this.poliza.total = 0;
        for (let item of this.poliza.lstPPoliza) {
            if (item.tipo) {
                this.poliza.monto += item.monto;
                this.poliza.iva += item.montoIVA;
            } else {
                this.poliza.monto -= item.monto;
                this.poliza.iva -= item.montoIVA;
            }
        }
        this.poliza.total = this.poliza.monto + this.poliza.iva;
        this.fnValidPoliza();
    }
    fnDeleteItem(i: number) {
        this.poliza.lstPPoliza.splice(i, 1);
        this.fnUpdateAmounts();
    }
    fnValidPoliza() {
        console.log('fnValidPoliza');
        if (this.poliza.referencia !== '' && this.poliza.descripcion !== '' && this.poliza.fecha !== null) {
            this.isPolizaValid[1] = true;
            this.isPolizaValid[2] = true;
            this.isPolizaValid[3] = true;
        } else {
            this.isPolizaValid[1] = false;
            this.isPolizaValid[2] = false;
            this.isPolizaValid[3] = false;
        }
        let x = 0;
        for (let item of this.isPolizaValid) {
            if (item) {
                x++;
            } else {
                break;
            }
        }
        console.log('x ==>', x);
        if (x === 6) {
            this.poliza.folio = this.folio[0] + '-' + this.folio[1] + '-' + this.folio[2] + '-' + this.folio[3];
            console.log('lstPPoliza ==>', this.poliza.lstPPoliza);
            console.log('total ==>', this.poliza.total);
            this.classBtnAcept = (this.poliza.lstPPoliza !== undefined && this.poliza.lstPPoliza !== null && this.poliza.lstPPoliza.length > 0 && this.poliza.total === 0) ? 'containerFooterBtnAcepted' : 'containerFooterBtnDisabled';
        } else {
            this.classBtnAcept = 'containerFooterBtnDisabled';
        }
    }
    fnValidPPoliza() {
        this.isPPolizaValid[0] = (this.itemDescripcion !== '') ? true : false;
        this.isPPolizaValid[1] = (accounting.unformat(this.itemMonto) > 0) ? true : false;
        let x = 0;
        for (let item of this.isPPolizaValid) {
            if (item) {
                x++;
            } else {
                break;
            }
        }
        this.classBtnAdd = (x === 6) ? 'containerBodyFormColorColBtnEnabled' : 'containerBodyFormColorColBtnDisabled';
        this.fnValidPoliza();
    }
    fnBlurMonto() {
        this.itemMonto = accounting.formatMoney(this.itemMonto);
    }
    fnFocusMonto() {
        if (this.itemMonto !== '') {
            this.itemMonto = accounting.unformat(this.itemMonto);
        }
    }
    fnAddPPoliza() {
        if (this.poliza.lstPPoliza !== undefined && this.poliza.lstPPoliza !== null) {
            this.ppoliza.monto = accounting.unformat(this.itemMonto);
            this.ppoliza.montoIVA = (this.ppoliza.tipoIVA) ? this.ppoliza.monto * 0.16 : 0;
            this.ppoliza.descripcion = this.itemDescripcion;
            this.poliza.lstPPoliza.push(Object.assign(new PPoliza(), this.ppoliza));
            this.ppoliza = new PPoliza();
            this.itemDescripcion = '';
            this.itemMonto = '';
            this.isPPolizaValid.fill(false);
            let lstAux = Object.assign([], [this.lstItems[3], this.lstItems[4], this.lstItems[5], this.lstItems[6]]);
            this.lstItems[3] = null;
            this.lstItems[4] = null;
            this.lstItems[5] = null;
            this.lstItems[6] = null;

            this.lstItems[3] = Object.assign([], lstAux[0]);
            this.lstItems[4] = Object.assign([], lstAux[1]);
            this.lstItems[5] = Object.assign([], lstAux[2]);
            this.lstItems[6] = Object.assign([], lstAux[3]);

            this.classBtnAdd = 'containerBodyFormColorColBtnDisabled';
        } else {
            this.poliza.lstPPoliza = [];
            this.fnAddPPoliza();
        }
        this.fnUpdateAmounts();
    }
    fnGetInfo(opc: number) {
        switch (opc) {
            case 0:
                this.serviceCatalogo.obtenerEmpresasContabilidad().subscribe(resp => {
                    console.log('obtenerEmpresasContabilidad', resp);
                    this.lstEmpresas = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (let item of resp.current) {
                            if (item.activo) {
                                let opt: OptionClass = {
                                    id: item.llave,
                                    texto: item.valor,
                                    texto1: item.valor,
                                    aux: item
                                };
                                this.lstEmpresas.push(Object.assign(new OptionClass(), opt));
                            }
                        }
                    }
                    this.lstItems[1] = Object.assign([], this.lstEmpresas);
                    this.fnGetInfo(1);
                }, error => {
                    this.fnGetInfo(1);
                    console.log('Error obtenerEmpresas', error);
                });
                break;
            case 1:
                this.serviceCatalogo.obtenerProveedoresCuentasContables('').subscribe(resp => {
                    console.log('obtenerProveedoresCuentasContables', resp);
                    this.lstProveedores = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (let item of resp.current) {
                            let opt: OptionClass = {
                                id: item.llave,
                                texto: item.nombre
                            };
                            this.lstProveedores.push(Object.assign(new OptionClass(), opt));
                        }
                    }
                    this.fnGetInfo(2);
                }, error => {
                    this.fnGetInfo(2);
                    console.log('Error obtenerProveedoresCuentasContables', error);
                });
                break;
            case 2:
                this.serviceCatalogo.obtenerClientesCuentasContables('').subscribe(resp => {
                    console.log('obtenerClientesCuentasContables', resp);
                    this.lstClientes = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (let item of resp.current) {
                            let opt: OptionClass = {
                                id: item.llave,
                                texto: item.nombre
                            };
                            this.lstClientes.push(Object.assign(new OptionClass(), opt));
                        }
                    }
                    this.fnGetInfo(4);
                }, error => {
                    this.fnGetInfo(4);
                    console.log('Error obtenerClientesCuentasContables', error);
                });
                break;
            case 3:
                this.serviceCatalogo.obtenerCuentasContablesEmpresa(this.poliza.empresa.idEmpresa).subscribe(resp => {
                    console.log('obtenerCuentasContables', resp);
                    this.lstItems[3] = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        let lstAux1 = [];
                        for (let item of resp.current) {
                            let nivel = null;
                            let nivel2 = null;
                            let nivel3 = null;
                            switch (item.nivel) {
                                case 1:
                                    nivel = item.nivel1 + '';
                                    break;
                                case 2:
                                    nivel2 = null;
                                    if (item.nivel2 < 10) {
                                        nivel2 = '00' + item.nivel2;
                                    } else if (item.nivel2 > 9 && item.nivel2 < 100) {
                                        nivel2 = '0' + item.nivel2;
                                    } else {
                                        nivel2 = item.nivel2;
                                    }
                                    nivel = item.nivel1 + '.' + nivel2;
                                    break;
                                case 3:
                                    nivel2 = null;
                                    if (item.nivel2 < 10) {
                                        nivel2 = '00' + item.nivel2;
                                    } else if (item.nivel2 > 9 && item.nivel2 < 100) {
                                        nivel2 = '0' + item.nivel2;
                                    } else {
                                        nivel2 = item.nivel2;
                                    }
                                    nivel3 = null;
                                    if (item.nivel3 < 10) {
                                        nivel3 = '00' + item.nivel3;
                                    } else if (item.nivel3 > 9 && item.nivel3 < 100) {
                                        nivel3 = '0' + item.nivel3;
                                    } else {
                                        nivel3 = item.nivel3;
                                    }
                                    nivel = item.nivel1 + '.' + nivel2 + '.' + nivel3;
                                    break;
                            }
                            let opt: OptionClass = {
                                id: item.idCuentaContable,
                                texto: nivel,
                                texto1: item.descripcion,
                                separador: '\u00B7',
                                aux: (item.nivel === 1) ? true : false
                            };
                            lstAux1.push(Object.assign(new OptionClass(), opt));
                        }
                        this.lstItems[3] = Object.assign(new Array<OptionClass>(), lstAux1);
                    }
                }, error => {
                    console.log('Error obtenerCuentasContables', error);
                });
                break;
            case 4:
                this.serviceCatalogo.obtenerLstCentroCostos().subscribe(resp => {
                    console.log('obtenerLstCentroCostos', resp);
                    this.lstItems[6] = [];
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (let item of resp.current) {
                            let opt: OptionClass = {
                                id: item.idCentroCosto,
                                texto: item.descripcion
                            };
                            this.lstItems[6].push(Object.assign(new OptionClass(), opt));
                        }
                    }
                    setTimeout(() => {
                        this.coreContainer.closeModal(2);
                    }, 1500);
                }, error => {
                    setTimeout(() => {
                        this.coreContainer.closeModal(2);
                    }, 1500);
                    console.log('Error obtenerLstCentroCostos', error);
                });
                break;
        }
    }
    fnGetFechaImpl($event: string) {
        this.fnValidPoliza();
    }
    fnOutPutItem($event: OptionClass, opc: number) {
        console.log('fnOutPutItem', $event, opc);
        switch (opc) {
            case 0:
                this.poliza.proveedor = null;
                this.poliza.cliente = null;
                this.poliza.empresa = null;
                this.poliza.folio = 'N/D';
                this.poliza.tipo = $event.id;
                this.defaultItem[1] = { id: 0, texto: 'Seleccionar' };
                this.defaultItem[2] = { id: 0, texto: 'Seleccionar' };
                this.lstItems[2] = null;
                this.defaultItem[7] = { id: 0, texto: 'Seleccionar' };
                this.folio[1] = ($event.id === 1) ? 'I' : ($event.id === 2) ? 'E' : 'D';
                this.isPolizaValid[0] = true;
                this.isPolizaValid[4] = false;
                this.isPolizaValid[5] = false;
                this.fnValidPoliza();
                break;
            case 1:
                this.isPolizaValid[4] = ($event.texto !== 'Seleccionar') ? true : false;
                if ($event.id > 0) {
                    this.poliza.empresa = {
                        idEmpresa: $event.id
                    };
                    this.folio[0] = $event.aux.nombre;
                    this.fnGetFolio($event.aux.lstFoliosPoliza);
                    this.fnGetInfo(3);
                }
                this.fnValidPoliza();
                break;
            case 2:
                this.isPolizaValid[5] = ($event.texto !== 'Seleccionar') ? true : false;
                if ($event.id > 0) {
                    switch (this.tipoObjeto.id) {
                        case 1:
                            this.poliza.proveedor = null;
                            this.poliza.cliente = null;
                            break;
                        case 2:
                            this.poliza.cliente = {
                                idCliente: $event.id
                            };
                            break;
                        case 3:
                            this.poliza.proveedor = {
                                idProveedor: $event.id
                            };
                            break;
                    }
                    this.fnValidPoliza();
                }
                break;
            case 3:
                this.ppoliza.cuentaContable.idCuentaContable = $event.id;
                this.ppoliza.cuentaContable.descripcionAux = $event.texto;
                this.ppoliza.cuentaContable.descripcion = $event.texto1;
                this.ppoliza.cuentaContable.descripcionAuxSep = $event.separador;
                this.isPPolizaValid[2] = ($event.texto !== 'Seleccionar') ? true : false;
                this.fnValidPPoliza();
                break;
            case 4:
                this.ppoliza.tipoIVA = ($event.id === 0) ? false : true;
                this.isPPolizaValid[3] = ($event.texto !== 'Seleccionar') ? true : false;
                this.fnValidPPoliza();
                break;
            case 5:
                this.ppoliza.tipo = ($event.id === 0) ? false : true;
                this.isPPolizaValid[4] = ($event.texto !== 'Seleccionar') ? true : false;
                this.fnValidPPoliza();
                break;
            case 6:
                this.ppoliza.centroCosto.idCentroCosto = $event.id;
                this.ppoliza.centroCosto.descripcion = $event.texto;
                this.isPPolizaValid[5] = ($event.texto !== 'Seleccionar') ? true : false;
                this.fnValidPPoliza();
                break;
            case 7:
                if ($event.id > 0) {
                    this.tipoObjeto = $event;
                    switch ($event.id) {
                        case 1:
                            this.labelSelect2 = null;
                            this.lstItems[2] = null;
                            break;
                        case 2:
                            this.labelSelect2 = 'Clientes';
                            this.lstItems[2] = Object.assign([], this.lstClientes);
                            break;
                        case 3:
                            this.labelSelect2 = 'Proveedores';
                            this.lstItems[2] = Object.assign([], this.lstProveedores);
                            break;
                    }
                }
                break;
        }
    }
    fnViewReturn() {
        this.router.navigate(['/protected/contabilidad/polizas']);
    }
    fnSave() {
        console.log('Poliza:', JSON.stringify(this.poliza));
        this.coreContainer.openModal(2);
        this.serviceCatalogo.agregarPoliza(this.poliza).subscribe(resp => {
            console.log('agregarPoliza', resp.current);
            if (resp.current.idPoliza > 0) {
                setTimeout(() => {
                    this.coreContainer.closeModal(2);
                    this.modalSuccess = 'modalPromt openModal';
                }, 500);
                setTimeout(() => {
                    this.modalSuccess = 'modalPromt';
                    this.fnViewReturn();
                }, 3500);
            }
        }, error => {
            console.log('Error agregarPoliza', error);
            setTimeout(() => {
                this.coreContainer.closeModal(2);
            }, 1500);
        });
    }
}
