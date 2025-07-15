import { Component, OnInit } from '@angular/core';
import { CoreContainerComponent } from '../../core-container/core-container.component';
import { CatalogoService } from '../../../services/catalogo/catalogo.service';
import { OptionClass } from '../../../class/option.class';

@Component({
    selector: 'app-pn-cuentas',
    templateUrl: './cuentas.component.html',
    styleUrls: ['./cuentas.component.scss']
})

export class CuentasComponent implements OnInit {

    public cantSelects = 7;
    /*Siempre más uno
    0 = Tipos de Cuenta
    1 = Cuentas Contables (Agregar)
    2 = lstClientes
    3 = lstProveedores
    4 = Empresas
    5 = lstBancos
    6 = tipos
    */
    public lstItems: Array<Array<OptionClass>> = new Array<Array<OptionClass>>(this.cantSelects);
    public defaultItem: Array<OptionClass> = new Array<OptionClass>(this.cantSelects).fill({ id: 0, texto: 'Seleccionar' });
    public colorSelectedSimple = '#008894';
    public modal = 'modal closed';
    public modalBtn = 'modalContentFooterBtnDisabled';
    public modalPrompt = 'modalPrompt closed';
    public modalEdit = 'modal closed';
    public isClient = false;
    public isProvider = false;
    public isOther = false;
    public isBank = false;
    public isClientValid = false;
    public isProviderValid = false;
    public isBankValid = false;
    public cuenta = null;
    public cliente = null;
    public proveedor = null;
    public banco = null;
    public lstClienteAux = [];
    public lstProveedorAux = [];
    public lstBankAux = [];
    public descripcion = null;
    public folio = 'Ninguno';
    public tipoCuenta = 'Ninguno';
    public infoDelete = null;
    public accoutToDelete = null;
    public idCuentaEdit = 0;
    public lstCuentasContablesAux = [];
    public searchPlaceholder = 'Cuenta, Tipo';
    public lstCuentas = [];
    public lstCuentasAux = [];
    public lstCuentasAux2 = [];
    public lstCuentasResponse = [];
    public homePath = '/protected/catalogo/';
    public opcion = [{ label: 'Cuentas Contables', path: '/protected/cuentas/contables' }];
    public idEmpresa = 0;
    public classLstEmpresa = new Array<string>(6).fill('cuentasListEmpresasItem');
    public tipos: Array<OptionClass> = [{ id: 1, texto: 'No Aplica' }, { id: 2, texto: 'Cliente' }, { id: 3, texto: 'Proveedor' }, { id: 4, texto: 'Banco' }];
    public descripcionCuentaContable = null;
    private isEmpty = true;

    private nivel3Aux: string = 'XXXX';

    private textSearch: string ;

    constructor(
        private coreContainerComponent: CoreContainerComponent,
        private catalogoService: CatalogoService
    ) { }

    ngOnInit() {
        this.coreContainerComponent.openModal(0);
        this.fnGetEmpresasContabilidad();
        this.lstItems[6] = Object.assign(new Array<OptionClass>(), this.tipos);
    }

    fnGetEmpresasContabilidad() {
        this.catalogoService.obtenerEmpresasContabilidad().subscribe(resp => {
            console.log('obtenerEmpresasContabilidad', resp);
            if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
              this.lstItems[4] = new Array<OptionClass>();
              this.defaultItem[4] = {
                id: null,
                texto: 'Global',
                aux: null
              };
              let opt = new OptionClass();
              for (let item of resp.current) {
                  opt = new OptionClass();
                  opt.id = item.llave;
                  opt.texto = item.valor;
                  this.lstItems[4].push(Object.assign(new OptionClass(), opt));
              }
              opt = new OptionClass();
              opt.id = null;
              opt.texto = "Global";
              this.lstItems[4].splice(0, 0, opt);
            }
            this.fnOutPutItem(this.lstItems[4][3], 4);
            this.classLstEmpresa[0] = 'cuentasListEmpresasItemActive';
            this.fnGetContablesCaracteristicas();
        }, error => {
            console.log('ERROR obtenerEmpresasContabilidad', error);
        });
    }

    fnDeleteAccount() {
        this.coreContainerComponent.openModal(0);
        this.catalogoService.desactivarCuentaContable(this.accoutToDelete.id).subscribe(res => {
            console.log('desactivarCuentaContable', res.current);
            if (res.current) {
                let x = 0;
                for (let item of this.lstCuentas) {
                    if (item.id === this.accoutToDelete.id) {
                        this.lstCuentas.splice(x, 1);
                        break;
                    }
                    x++;
                }
                for (let item of this.lstCuentasAux) {
                    if (item.id === this.accoutToDelete.id) {
                        this.lstCuentasAux.splice(x, 1);
                        break;
                    }
                    x++;
                }
            }
            this.fnCloseModal(1);
            setTimeout(() => {
                this.coreContainerComponent.closeModal(0);
            }, 1500);
        }, error => {
            console.log('Error desactivarCuentaContable', error);
            this.fnCloseModal(1);
            setTimeout(() => {
                this.coreContainerComponent.closeModal(0);
            }, 1500);
        });
    }

    fnOpenModalDelete(item: any) {
        this.modalPrompt = 'modalPrompt';
        console.log(item);
        this.infoDelete = item.noCuenta + ' \u00B7 ' + item.cuenta;
        this.accoutToDelete = item;
    }

    fnOpenModal(opc: number) {
        console.log('fnOpenModal', opc);
        this.descripcion = null;
        this.modal = 'modal';
    }
    fnCloseModal(opc: number) {
        if (opc === 0) {
            this.modal = 'modal closed';
            this.tipoCuenta = null;
            this.folio = 'Ninguno';
            this.tipoCuenta = 'Ninguno';
            this.cliente = null;
            this.cuenta = null;
            this.proveedor = null;
            this.banco = null;
            this.isBank = false;
            this.isClient = false;
            this.isProvider = false;
            this.isOther = false;
            this.isBankValid = false;
            this.isClientValid = false;
            this.isProviderValid = false;
            this.isOther = false;
            this.modalBtn = 'modalContentFooterBtnDisabled';
            this.descripcionCuentaContable = null;
            this.defaultItem[1] = {
                id: 0,
                texto: 'Seleccionar',
                aux: null
            };
            this.defaultItem[2] = {
                id: 0,
                texto: 'Seleccionar Cliente',
                aux: null
            };
            this.defaultItem[3] = {
                id: 0,
                texto: 'Seleccionar Proveedor',
                aux: null
            };
            this.defaultItem[4] = {
                id: null,
                texto: 'Global',
                aux: null
            };
            this.defaultItem[5] = {
                id: 0,
                texto: 'Seleccionar Banco',
                aux: null
            };
            this.defaultItem[6] = {
                id: 0,
                texto: 'Seleccionar',
                aux: null
            };
        } else if (opc === 1) {
            this.modalPrompt = 'modalPrompt closed';
            this.accoutToDelete = null;
            this.infoDelete = null;
        } else if (opc === 2) {
            this.modalEdit = 'modal closed';
            this.folio = null;
            this.tipoCuenta = null;
            this.descripcion = null;
            this.idCuentaEdit = 0;
        }
    }

    fnGetEmitSearch($event: string) {
        let searchArrayAux = [];
        this.textSearch = $event;
        console.log('this.textSearch', this.textSearch);
        let searchTerm = $event;
        if (searchTerm !== '') {
            for (let item of this.lstCuentas) {
                if (
                    item.cuenta.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
                    item.tipo.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
                    item.noCuenta.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
                ) {
                    searchArrayAux.push(item);
                }
            }
            this.lstCuentas = Object.assign([], searchArrayAux);
        } else {
            this.lstCuentas = Object.assign([], this.lstCuentasAux2);
        }
    }

    fnOutPutItem($event: OptionClass, opc: number) {
        console.log('fnGetValueDropList', $event, opc);
        switch (opc) {
            case 0:
              console.log($event);
                this.coreContainerComponent.openModal(0);
                if ($event.id > 0) {
                    this.lstCuentas = [];
                    for (let item of this.lstCuentasAux) {
                        if (item.tipo === $event.texto) {
                            this.lstCuentas.push(Object.assign({}, item));
                        }
                    }
                   this.lstCuentasAux2 = Object.assign([], this.lstCuentas);
                   if(this.textSearch != undefined && this.textSearch != null) {
                     this.fnGetEmitSearch(this.textSearch);
                   }
                } else {
                    this.lstCuentas = Object.assign([], this.lstCuentasAux);
                    this.lstCuentasAux2 = Object.assign([], this.lstCuentasAux);
                }
                setTimeout(() => {
                    this.coreContainerComponent.closeModal(0);
                }, 1500);
                break;
            case 1:
                if ($event.id > 0) {
                    let lstAux = [];
                    let lstAux_2 = [];
                    let lstAux2 = [];
                    this.nivel3Aux = 'XXXX' ;
                    for (let it of this.lstItems[1]) {
                        if (it.texto.match($event.texto)) {
                            lstAux.push(Object.assign({}, it));
                        }
                    }
                    for (let it2 of lstAux) {
                        let aux3 = $event.texto.split('.');
                        if (aux3.length === 3) {
                            lstAux2.push(Number(aux3[2]));
                        } else if (aux3.length === 2) {
                            lstAux_2.push(Number(aux3[1]));
                        }
                    }
                    if (lstAux2.length > 0) {
                        lstAux2 = lstAux2.sort();
                        let nivel3Aux2 = lstAux2[lstAux2.length - 1] + 1;
                        if (nivel3Aux2 > 0 && nivel3Aux2 < 10) {
                            this.nivel3Aux = '00' + nivel3Aux2;
                        } else if (nivel3Aux2 > 9 && nivel3Aux2 < 100) {
                            this.nivel3Aux = '0' + nivel3Aux2;
                        } else {
                            this.nivel3Aux = '00' + nivel3Aux2;
                        }
                    }
                    this.folio = $event.texto + '.' + this.nivel3Aux;
                    this.tipoCuenta = $event.texto1;
                    for (let item of this.lstCuentasContablesAux) {
                        if (item.idCuentaContable === $event.id) {
                            this.cuenta = item;
                            console.log('Encontró un valor id:', item.idCuentaContable);
                            break;
                        } else {
                            this.cuenta = null;
                        }
                    }

                    //this.cliente = null;
                    //this.cuenta = null;
                    //this.proveedor = null;
                    //this.banco = null;
                    this.isBank = false;
                    this.isClient = false;
                    this.isProvider = false;
                    this.isOther = false;
                    this.isBankValid = false;
                    this.isClientValid = false;
                    this.isProviderValid = false;
                    this.isOther = false;
                    this.descripcionCuentaContable = null;
                    this.modalBtn = 'modalContentFooterBtnDisabled';

                    this.defaultItem[6] = {
                      id: 0,
                      texto: 'Seleccionar',
                      aux: null
                    };
                    this.defaultItem[2] = {
                      id: 0,
                      texto: 'Seleccionar Cliente',
                      aux: null
                    };
                    this.defaultItem[3] = {
                      id: 0,
                      texto: 'Seleccionar Proveedor',
                      aux: null
                    };
                    this.defaultItem[5] = {
                      id: 0,
                      texto: 'Seleccionar Banco',
                      aux: null
                    };
                }
                break;
            case 2:
                if ($event.id > 0) {
                    this.cliente = $event;
                    this.isClientValid = true;
                    this.folio =  this.folio.replace(this.nivel3Aux,$event.texto1);
                    this.nivel3Aux = $event.texto1 ;
                    this.cuenta.nivel3 = $event.texto1;
                    this.fnValidAddAccount();
                    console.log("idCliente", $event.texto1);
                } else {
                    this.cliente = null;
                    this.isClientValid = false;
                }
                break;
            case 3:
                if ($event.id > 0) {
                    this.proveedor = $event;
                    this.isProviderValid = true;
                    this.folio =  this.folio.replace(this.nivel3Aux,$event.texto1);
                    this.nivel3Aux = $event.texto1 ;
                    this.cuenta.nivel3 = $event.texto1;
                    this.fnValidAddAccount();
                } else {
                    this.proveedor = null;
                    this.isProviderValid = false;
                }
                break;
            case 4:
                console.log('listaItem', this.lstItems[4]);
                this.lstCuentas = [];
                this.lstCuentasAux = [];
                this.lstCuentasResponse = [];
                this.idEmpresa = $event.id;
                this.defaultItem[4] = Object.assign(new OptionClass(), $event);
                this.catalogoService.obtenerCuentasContablesEmpresa(this.idEmpresa).subscribe(resp => {
                    console.log('obtenerCuentasContablesEmpresa', resp);
                    if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                        for (let item of resp.current) {
                            let nivel = null;
                            let nivel2 = null;
                            let nivel3 = null;
                            let colorRow = false;
                            switch (item.nivel) {
                                case 1:
                                    nivel = item.nivel1 + '';
                                    colorRow = true;
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
                                    colorRow = false;
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
                                    colorRow = false;
                                    break;
                            }
                            let cuenta = {
                                id: item.idCuentaContable,
                                noCuenta: nivel,
                                cuenta: item.descripcion,
                                tipo: (item.origen != null ? item.origen : '') + ' ' + (item.naturaleza != null ? item.naturaleza : ''), //item.tipo.descripcion,
                                isRemovable: item.eliminable,
                                cantPolizas: item.cantPolizas,
                                isEditable: item.editable,
                                colorRow: colorRow
                            };
                            this.lstCuentas.push(Object.assign({}, cuenta));
                            this.lstCuentasAux.push(Object.assign({}, cuenta));
                            this.lstCuentasAux2.push(Object.assign({}, cuenta));
                            this.lstCuentasResponse.push(Object.assign({}, item));
                        }
                    }
                }, error => {
                    console.log('ERROR obtenerCuentasContablesEmpresa', error);
                });
                break;
            case 5:
                this.idEmpresa = $event.id;
                this.lstItems[1] = new Array<OptionClass>();
                this.lstCuentasContablesAux = [];
                this.catalogoService.obtenerCuentasContablesEmpresa(this.idEmpresa).subscribe(cc => {
                    console.log('obtenerCuentasContablesEmpresa: ', cc.current);
                    if (cc.current !== undefined && cc.current !== null && cc.current.length > 0) {
                        let lstAux1 = [];
                        let lstAux2 = [];
                        for (let item of cc.current) {
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
                            lstAux2.push(Object.assign({}, item));
                        }
                        this.lstItems[1] = Object.assign(new Array<OptionClass>(), lstAux1);
                        this.lstCuentasContablesAux = Object.assign([], lstAux2);
                    }
                    setTimeout(() => {
                        this.coreContainerComponent.closeModal(0);
                    }, 1500);
                });
                break;
            case 6:
                if ($event.id > 0) {
                    console.log("$event", $event);
                    this.banco = $event;
                    this.isBankValid = true;
                    this.folio =  this.folio.replace(this.nivel3Aux,$event.texto1);
                    this.nivel3Aux = $event.texto1 ;
                    this.cuenta.nivel3 = $event.texto1;
                    this.fnValidAddAccount();
                } else {
                    this.banco = null;
                    this.isBankValid = false;
                }
                break;
            case 7:
                if ($event.id > 0) {
                    this.isEmpty = false;
                    switch ($event.id) {
                        case 1:
                            this.isClient = false;
                            this.isProvider = false;
                            this.isBank = false;
                            this.isOther = true;
                            this.descripcionCuentaContable = 'Descripción';
                            break;
                        case 2:
                            this.isClient = true;
                            this.isProvider = false;
                            this.isOther = false;
                            this.isBank = false;
                            this.descripcionCuentaContable = 'Cliente';
                            this.fnGetClients((this.cuenta.nivel2 === 0 || this.cuenta.nivel === 5) ? 0 : (this.cuenta.nivel2 === 1 || this.cuenta.nivel === 3) ? 1 : 2);
                            break;
                        case 3:
                            this.isClient = false;
                            this.isProvider = true;
                            this.isOther = false;
                            this.isBank = false;
                            this.descripcionCuentaContable = 'Proveedor';
                            this.fnGetProviders((this.cuenta.nivel2 === 0) ? 0 : (this.cuenta.nivel2 === 1 || this.cuenta.nivel === 3) ? 1 : 2);
                            break;
                        case 4:
                            this.isClient = false;
                            this.isProvider = false;
                            this.isOther = false;
                            this.isBank = true;
                            this.descripcionCuentaContable = 'Banco';
                            this.fnGetBanks(this.cuenta.nivel2);
                            break;
                    }
                } else {
                    this.isEmpty = true;
                }
                break;
        }
    }

    fnValidAddAccount() {
        if (this.isClientValid || this.isProviderValid || this.isBankValid || this.isOther || (this.descripcion !== undefined && this.descripcion !== null && this.descripcion !== '' && this.descripcion.length > 6)) {
            //if (this.modalBtn === 'modalContentFooterBtnActive' ) {
                //this.modalBtn = 'modalContentFooterBtnDisabled';
            //}
            this.modalBtn = 'modalContentFooterBtnActive';

        }else{
          this.modalBtn = 'modalContentFooterBtnDisabled';
        }
    }

    fnValidEditAccount() {
        this.modalBtn = (this.descripcion !== undefined && this.descripcion !== null && this.descripcion !== '') ? 'modalContentFooterBtnActive' : 'modalContentFooterBtnDisabled';
    }

    fnEditCA() {
        this.coreContainerComponent.openModal(0);
        for (let item of this.lstCuentasResponse) {
            if (item.idCuentaContable === this.idCuentaEdit) {
                item.descripcion = this.descripcion;
                this.catalogoService.agregarCuentaContable(item).subscribe(res => {
                    console.log(res.current);
                    setTimeout(() => {
                        this.fnCloseModal(2);
                        this.ngOnInit();
                        this.coreContainerComponent.closeModal(0);
                    }, 1500);
                });
                break;
            }
        }
    }
    fnEditAccount(item: any) {
        console.log('fnEditAccount', item);
        for (let it of this.lstItems[4]) {
            if (it.id = this.idEmpresa) {
                this.defaultItem[4] = it;
                break;
            }
        }
        for (let it of this.lstItems[1]) {
            if (it.id = item.id) {
                this.defaultItem[1] = it;
                break;
            }
        }
        this.defaultItem[6] = { id: 1, texto: 'No Aplica' };
        this.modalEdit = 'modal';
        this.descripcion = item.cuenta;
        this.folio = item.noCuenta;
        this.tipoCuenta = item.tipo;
        this.idCuentaEdit = item.id;
    }

    fnSaveCA() {
        this.coreContainerComponent.openModal(0);
        let descripcion = null;
        let idCliente = 0;
        let idBanco = 0;
        let idProveedor = 0;
        if (this.cliente !== null) {
            descripcion = this.cliente.texto;
            idCliente = this.cliente.id;
        } else if (this.proveedor !== null) {
            descripcion = this.proveedor.texto;
            idProveedor = this.proveedor.id;
        } else if (this.banco !== null) {
            descripcion = this.banco.texto;
            idBanco = this.banco.id;
        } else {
            descripcion = this.descripcion;
        }
        let account = {
            idCuentaContable: 0,
            nivel: this.cuenta.nivel,
            nivel1: this.cuenta.nivel1,
            nivel2: this.cuenta.nivel2,
            nivel3: this.cuenta.nivel3,
            descripcion: descripcion,
            tipo: {
                idContableCaracteristica: this.cuenta.tipo.idContableCaracteristica,
                descripcion: this.cuenta.tipo.descripcion
            },
            detalle: {
                idContableCaracteristica: this.cuenta.detalle.idContableCaracteristica,
                descripcion: this.cuenta.tipo.descripcion
            },
            activo: true,
            editable: true,
            eliminable: true,
            idCliente: idCliente,
            idBanco: idBanco,
            idProveedor: idProveedor,
            cantPolizas: 0,
            empresa: { idEmpresa: this.idEmpresa }
        };
        console.log('account', account)
        this.catalogoService.agregarCuentaContable(account).subscribe(res => {
            console.log('agregarCuentaContable', res.current);
            if (res.current !== undefined && res.current !== null && res.current.idCuentaContable !== undefined && res.current.idCuentaContable !== null && res.current.idCuentaContable > 0) {
                setTimeout(() => {
                    this.coreContainerComponent.closeModal(0);
                    this.fnCloseModal(0);
                    this.ngOnInit();
                }, 1500);
            }
        }, error => {
            console.log(error);
            setTimeout(() => {
                this.coreContainerComponent.closeModal(0);
            }, 1500);
        });
    }

    fnGetClients(opc: number) {
      console.log('opc: ', opc);
        this.coreContainerComponent.openModal(0);
        //if (this.lstClienteAux === undefined || this.lstClienteAux === null || this.lstClienteAux.length === 0) {
          console.log('opc1: ', opc);
            this.lstItems[2] = [];
            this.lstClienteAux = [];
            console.log('Folio: ', this.folio);
            let tipoCliente: string = '';
            if(this.folio == '105.001.XXXX'){
              tipoCliente = 'Nacional';
            } else if(this.folio == '105.002.XXXX'){
              tipoCliente = 'Extranjero';
            } else {
              tipoCliente = '';
            }
            this.catalogoService.obtenerClientesCuentasContables(tipoCliente).subscribe(res => {
                console.log('fnGetClients: ', res.current);
                if (res.current !== undefined && res.current !== null && res.current.length > 0) {
                    let lstAux = [];
                    let lstAux2 = [];
                    for (let item of res.current) {
                        let opt: OptionClass = {
                            id: item.llave,
                            texto: item.nombre,
                            texto1: item.valor,
                            aux: item.activo
                        };
                        lstAux2.push(Object.assign({}, opt));
                        if (opc === 0) {
                            lstAux.push(Object.assign({}, opt));
                        } else if (opc === 1) {
                            if (item.activo) {
                                console.log('Cliente if (item.activo) {');
                                lstAux.push(Object.assign({}, opt));
                            }
                        } else if (opc === 2) {
                            if (!item.activo) {
                                console.log('Cliente if (!item.activo) {');
                                lstAux.push(Object.assign({}, opt));
                            }
                        }
                    }
                    this.lstClienteAux = Object.assign([], lstAux2);
                    this.lstItems[2] = Object.assign([], lstAux);
                    setTimeout(() => {
                        this.coreContainerComponent.closeModal(0);
                    }, 1500);
                } else {
                    setTimeout(() => {
                        this.coreContainerComponent.closeModal(0);
                    }, 1500);
                }
            }, error => {
                console.log('fnGetClients Error: ', error);
                this.coreContainerComponent.closeModal(0);
            });
       /*} else {
          console.log('opc2: ', opc);
            this.lstItems[2] = [];
            let lstAux = [];
            for (let item of this.lstClienteAux) {
                let opt: OptionClass = {
                    id: item.id,
                    texto: item.nombre,
                    texto1: item.valor,
                    aux: item.activo
                };
                if (opc === 0) {
                    lstAux.push(Object.assign({}, opt));
                } else if (opc === 1) {
                  console.log('entro Activo: ', item.activo);
                    if (item.aux) {
                        console.log('Cliente if (item.activo) {');
                        lstAux.push(Object.assign({}, item));
                    }
                } else if (opc === 2) {
                    if (!item.activo) {
                        console.log('Cliente if (!item.activo) {');
                        lstAux.push(Object.assign({}, opt));
                    }
                }
            }
            this.lstItems[2] = Object.assign([], lstAux);
            setTimeout(() => {
                this.coreContainerComponent.closeModal(0);
            }, 1500);
        }*/
        console.log('this.lstClienteAux', this.lstClienteAux);
        console.log('this.lstItems[2]', this.lstItems[2]);
    }
    fnGetProviders(opc: number) {
        this.coreContainerComponent.openModal(0);
        //if (this.lstProveedorAux === undefined || this.lstProveedorAux === null || this.lstProveedorAux.length === 0) {
            this.lstItems[3] = [];
            this.lstProveedorAux = [];
            let tipoCliente: string = '';
            if(this.folio == '201.001.XXXX'){
              tipoCliente = 'Nacional';
            } else if(this.folio == '201.002.XXXX'){
              tipoCliente = 'Extranjero';
            } else {
              tipoCliente = '';
            }
            this.catalogoService.obtenerProveedoresCuentasContables(tipoCliente).subscribe(res => {
                console.log('fnGetProviders: ', res.current);
                if (res.current !== undefined && res.current !== null && res.current.length > 0) {
                    let lstAux = [];
                    let lstAux2 = [];
                    for (let item of res.current) {
                        let opt: OptionClass = {
                            id: item.llave,
                            texto: item.nombre,
                            texto1: item.valor,
                            aux: item.activo
                        };
                        lstAux2.push(Object.assign({}, opt));
                        if (opc === 0) {
                            lstAux.push(Object.assign({}, opt));
                        } else if (opc === 1) {
                            if (item.activo) {
                                lstAux.push(Object.assign({}, opt));
                            }
                        } else if (opc === 2) {
                            if (!item.activo) {
                                lstAux.push(Object.assign({}, opt));
                            }
                        }
                    }
                    this.lstProveedorAux = Object.assign([], lstAux2);
                    this.lstItems[3] = Object.assign([], lstAux);
                    setTimeout(() => {
                        this.coreContainerComponent.closeModal(0);
                    }, 1500);
                } else {
                    setTimeout(() => {
                        this.coreContainerComponent.closeModal(0);
                    }, 1500);
                }
            }, error => {
                console.log('fnGetProviders Error: ', error);
                this.coreContainerComponent.closeModal(0);
            });
       /* } else {
            this.lstItems[3] = [];
            let lstAux = [];
            for (let item of this.lstProveedorAux) {
                let opt: OptionClass = {
                    id: item.id,
                    texto: item.nombre,
                    aux: item.activo
                };
                if (opc === 0) {
                    lstAux.push(Object.assign({}, opt));
                } else if (opc === 1) {
                    if (item.activo) {
                        lstAux.push(Object.assign({}, opt));
                    }
                } else if (opc === 2) {
                    if (!item.activo) {
                        lstAux.push(Object.assign({}, opt));
                    }
                }
            }
            this.lstItems[3] = Object.assign([], lstAux);
            setTimeout(() => {
                this.coreContainerComponent.closeModal(0);
            }, 1500);
        }*/
        console.log('this.lstProveedorAux', this.lstProveedorAux);
        console.log('this.lstItems[3]', this.lstItems[3]);
    }
    fnGetBanks(opc: number) {
        this.coreContainerComponent.openModal(0);
        if (this.lstBankAux === undefined || this.lstBankAux === null || this.lstBankAux.length === 0) {
            this.lstItems[5] = [];
            this.lstBankAux = [];
            this.catalogoService.obtenerNominaCatalogo('Banco').subscribe(resp => {
                console.log('obtenerNominaCatalogo Bancos', resp);
                if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
                    for (let item of resp.current) {
                        let opt = new OptionClass();
                        opt.id = item.idNominaCatalogo;
                        opt.texto = item.descripcion.split(' - ')[0];
                        opt.texto1 = '0' + item.codigoSAT;
                        this.lstItems[5].push(Object.assign(new OptionClass(), opt));
                        this.lstBankAux.push(Object.assign(new OptionClass(), opt));
                    }
                }
                setTimeout(() => {
                    this.coreContainerComponent.closeModal(0);
                }, 1500);
            }, error => {
                console.log('ERROR obtenerNominaCatalogo Bancos', error);
                setTimeout(() => {
                    this.coreContainerComponent.closeModal(0);
                }, 1500);
            });
        }
    }

    fnGetContablesCaracteristicas() {
        this.catalogoService.obtenerContablesCaracteristicas().subscribe(cc => {
            console.log('obtenerContablesCaracteristicas: ', cc.current);
            this.lstItems[0] = [];
            this.lstItems[0].push(Object.assign(new OptionClass(), {
                id: 0,
                texto: 'Todos los Tipos'
            }));
            if (cc.current !== undefined && cc.current !== null && cc.current.length > 0) {
                for (let item of cc.current) {
                    if (item.tipo === 'Tipo') {
                        let opt: OptionClass = {
                            id: item.idContableCaracteristica,
                            texto: item.descripcion,
                            aux: null
                        };
                        this.lstItems[0].push(Object.assign(new OptionClass(), opt));
                    }
                }
            }
        }, error => {
            setTimeout(() => {
                console.log('Error obtenerContablesCaracteristicas: ', error);
                this.coreContainerComponent.closeModal(0);
            }, 1500);
        });
    }
}
