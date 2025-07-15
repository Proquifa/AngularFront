import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../../../../class/catalogo/trabajador.class';
import { CatalogoService } from '../../../../services/catalogo/catalogo.service';
import { CoreContainerComponent } from '../../../core-container/core-container.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-pn-editar-trabajador',
    templateUrl: './editar-trabajador.component.html',
    styleUrls: ['./editar-trabajador.component.scss']
})
export class EditarTrabajadorComponent implements OnInit {

    /* Inicio de variables para los SELECTS
    0.- Empresas
    1.- Bancos
    2.- PeriodicidadPago
    3.- RiesgoPuesto
    4.- Regimen
    5.- Jornada
    6.- Contrato
    7.- Pais
    8.- CodigoPostal
    9.- TipoCuenta
    */
    public cantSelects = 10;
    public itemsParent = new Array(this.cantSelects).fill(null);
    public isSearchParent = new Array(this.cantSelects).fill(true);
    public isCategoryParent = new Array(this.cantSelects).fill(false);
    public sizeParent = new Array(this.cantSelects).fill('');
    public alignParent = new Array(this.cantSelects).fill('');
    public itemSelectParent = new Array(this.cantSelects).fill(null);
    public widthContentParent = new Array(this.cantSelects).fill('100%');
    public marginLeftContentParent = new Array(this.cantSelects).fill('0px');
    public tooltipParent = new Array(this.cantSelects).fill(true);
    public tipoDropParent = new Array(this.cantSelects).fill('');
    public campoLabelParent = new Array(this.cantSelects).fill('');
    public selectsLabels = ['Empresas', 'Bancos', 'Periodicidad Pago', 'Riesgo Puesto', 'Regimen Fiscal', 'Jornada', 'Contrato', 'País', 'Codigo Postal', 'Tipo Cuenta Bancaria'];
    public lstTipoCuenta = [
        { valor: 'Celular', llave: 1 },
        { valor: 'CLABE', llave: 2 },
        { valor: 'Tarjeta Débito', llave: 3 },
        { valor: 'Número de Cuenta', llave: 4 },
        { valor: 'Monedero Electrónico', llave: 5 }
    ];
    /* Fin de variables para los SELECTS */

    public trabajador: Trabajador;

    public codigoPostal: number = null;
    public pais: number = null;

    public idTrabajador = 0;

    constructor(
        private catalogoService: CatalogoService,
        private coreContainerComponent: CoreContainerComponent,
        private router: Router,
        private route: ActivatedRoute,
    ) {
        this.route.params.subscribe(params => {
            console.log('this.route.params.subscribe', params);
            this.idTrabajador = Number(params['idTrabajador']);
        });
    }

    ngOnInit() {
        this.coreContainerComponent.openModal(0);
        this.trabajador = new Trabajador();
        this.itemsParent[9] = [];
        for (const it of this.lstTipoCuenta) {
            const item = {
                nombre: it.valor,
                id: it.llave
            };
            this.itemsParent[9].push(Object.assign({}, item));
        }
        this.fnFillSelects();
    }

    fnGetValueDropList(value: any, index: number) {
        console.log(value, index);
        switch (index) {
            case 0: this.trabajador.empresaSalarios.idEmpresa = value.id; break;
            case 1: this.trabajador.banco.idBanco = value.id; break;
            case 2: this.trabajador.periodicidadPago.idNominaCatalogo = value.id; break;
            case 3: this.trabajador.riesgoPuesto.idNominaCatalogo = value.id; break;
            case 4: this.trabajador.datoFiscal.regimenFiscal.idNominaCatalogo = value.id; break;
            case 5: this.trabajador.jornada.idNominaCatalogo = value.id; break;
            case 6: this.trabajador.contrato.idNominaCatalogo = value.id; break;
            case 7: this.pais = value.id; this.fnGetColonies(); break;
            case 8: this.trabajador.codigoPostal.idCodigoPostal = value.id; break;
            case 9: this.trabajador.tipoCuentaBancaria = value.nombre; break;
        }
    }

    fnGetColonies() {
        if (this.codigoPostal !== undefined && this.codigoPostal !== null && this.codigoPostal !== 0) {
            if (this.pais !== undefined && this.pais !== null && this.pais !== 0) {
                this.catalogoService.obtenerColoniasPaisCodPost(this.pais, this.codigoPostal).subscribe(lstCol => {
                    console.log('obtenerColoniasPaisCodPost: ', lstCol.current);
                    this.itemsParent[8] = [];
                    if (lstCol.current !== undefined && lstCol.current !== null && lstCol.current.length > 0) {
                        for (const it of lstCol.current) {
                            const item = {
                                nombre: it.claveEntFed + ' - ' + it.colonia,
                                id: it.idCodigoPostal
                            };
                            this.itemsParent[8].push(Object.assign({}, item));
                        }
                        this.coreContainerComponent.closeModal(0);
                    } else {
                        this.coreContainerComponent.closeModal(0);
                    }
                }, error => {
                    console.log(error);
                });
            }
        }
    }

    fnSaveTrabajador() {
        this.coreContainerComponent.openModal(0);
        this.catalogoService.guardarTrabajadorNomina(this.trabajador).subscribe(trab => {
            console.log(trab.current);
            setTimeout(() => {
                this.coreContainerComponent.closeModal(0);
                this.fnReturnView();
            }, 1500);
        });
    }

    fnReturnView() {
        this.router.navigate(['protected/catalogo/empresas/']);
    }

    fnFillSelects() {
        this.catalogoService.obtenerEmpresas().subscribe(lstEmp => {
            console.log('obtenerEmpresas: ', lstEmp.current);
            this.itemsParent[0] = [];
            if (lstEmp.current !== undefined && lstEmp.current !== null && lstEmp.current.length > 0) {
                for (const it of lstEmp.current) {
                    const item = {
                        nombre: it.valor,
                        id: it.llave
                    };
                    this.itemsParent[0].push(Object.assign({}, item));
                }
                this.catalogoService.obtenerBancosTrabajadorNomina().subscribe(lstBan => {
                    console.log('obtenerBancosTrabajadorNomina: ', lstBan.current);
                    this.itemsParent[1] = [];
                    if (lstBan.current !== undefined && lstBan.current !== null && lstBan.current.length > 0) {
                        for (const it of lstBan.current) {
                            const item = {
                                nombre: it.valor,
                                id: it.llave
                            };
                            this.itemsParent[1].push(Object.assign({}, item));
                        }
                        this.catalogoService.obtenerNominaCatalogo('PeriodicidadPago').subscribe(lstPerPag => {
                            console.log('obtenerNominaCatalogo - PeriodicidadPago: ', lstPerPag);
                            this.itemsParent[2] = [];
                            if (lstPerPag.current !== undefined && lstPerPag.current !== null && lstPerPag.current.length > 0) {
                                for (const it of lstPerPag.current) {
                                    const item = {
                                        nombre: it.codigoSAT + ' - ' + it.descripcion,
                                        id: it.idNominaCatalogo
                                    };
                                    this.itemsParent[2].push(Object.assign({}, item));
                                }
                                this.catalogoService.obtenerNominaCatalogo('RiesgoPuesto').subscribe(lstRiesgo => {
                                    console.log('obtenerNominaCatalogo - RiesgoPuesto: ', lstRiesgo);
                                    this.itemsParent[3] = [];
                                    if (lstRiesgo.current !== undefined && lstRiesgo.current !== null && lstRiesgo.current.length > 0) {
                                        for (const it of lstRiesgo.current) {
                                            const item = {
                                                nombre: it.codigoSAT + ' - ' + it.descripcion,
                                                id: it.idNominaCatalogo
                                            };
                                            this.itemsParent[3].push(Object.assign({}, item));
                                        }
                                        this.catalogoService.obtenerNominaCatalogo('RegimenFiscal').subscribe(lstRegFis => {
                                            console.log('obtenerNominaCatalogo - RegimenFiscal: ', lstRegFis);
                                            this.itemsParent[4] = [];
                                            if (lstRegFis.current !== undefined && lstRegFis.current !== null && lstRegFis.current.length > 0) {
                                                for (const it of lstRegFis.current) {
                                                    const item = {
                                                        nombre: it.codigoSAT + ' - ' + it.descripcion,
                                                        id: it.idNominaCatalogo
                                                    };
                                                    this.itemsParent[4].push(Object.assign({}, item));
                                                }
                                                this.catalogoService.obtenerNominaCatalogo('JornadaLaboral').subscribe(lstJornada => {
                                                    console.log('obtenerNominaCatalogo - JornadaLaboral: ', lstJornada);
                                                    this.itemsParent[5] = [];
                                                    if (lstJornada.current !== undefined && lstJornada.current !== null && lstJornada.current.length > 0) {
                                                        for (const it of lstJornada.current) {
                                                            const item = {
                                                                nombre: it.codigoSAT + ' - ' + it.descripcion,
                                                                id: it.idNominaCatalogo
                                                            };
                                                            this.itemsParent[5].push(Object.assign({}, item));
                                                        }
                                                        this.catalogoService.obtenerNominaCatalogo('RegimenContratacion').subscribe(lstRegContra => {
                                                            console.log('obtenerNominaCatalogo - RegimenContratacion: ', lstRegContra);
                                                            this.itemsParent[6] = [];
                                                            if (lstRegContra.current !== undefined && lstRegContra.current !== null && lstRegContra.current.length > 0) {
                                                                for (const it of lstRegContra.current) {
                                                                    const item = {
                                                                        nombre: it.codigoSAT + ' - ' + it.descripcion,
                                                                        id: it.idNominaCatalogo
                                                                    };
                                                                    this.itemsParent[6].push(Object.assign({}, item));
                                                                }
                                                                this.catalogoService.obtenerPaisesCodPost().subscribe(lstPaises => {
                                                                    console.log('obtenerPaisesCodPost: ', lstPaises);
                                                                    this.itemsParent[7] = [];
                                                                    if (lstPaises.current !== undefined && lstPaises.current !== null && lstPaises.current.length > 0) {
                                                                        for (const it of lstPaises.current) {
                                                                            const item = {
                                                                                nombre: it.valor,
                                                                                id: it.llave
                                                                            };
                                                                            this.itemsParent[7].push(Object.assign({}, item));
                                                                        }
                                                                        this.catalogoService.obtenerTrabajadorNominaID(this.idTrabajador).subscribe(trab => {
                                                                            console.log('obtenerTrabajadorNominaID: ' + this.idTrabajador, trab);
                                                                            if (trab.current !== undefined && trab.current !== null && trab.current.idTrabajador > 0) {
                                                                                setTimeout(() => {
                                                                                    this.coreContainerComponent.closeModal(0);
                                                                                    this.trabajador = trab.current;
                                                                                }, 1500);
                                                                            } else {
                                                                                setTimeout(() => {
                                                                                    this.coreContainerComponent.closeModal(0);
                                                                                    this.trabajador = trab.current;
                                                                                }, 1500);
                                                                            }
                                                                        }, error => {
                                                                            this.coreContainerComponent.closeModal(0);
                                                                            console.log(error);
                                                                        });
                                                                    } else {
                                                                        this.coreContainerComponent.closeModal(0);
                                                                    }
                                                                }, error => {
                                                                    this.coreContainerComponent.closeModal(0);
                                                                    console.log(error);
                                                                });
                                                            } else {
                                                                this.coreContainerComponent.closeModal(0);
                                                            }
                                                        }, error => {
                                                            this.coreContainerComponent.closeModal(0);
                                                            console.log(error);
                                                        });
                                                    } else {
                                                        this.coreContainerComponent.closeModal(0);
                                                    }
                                                }, error => {
                                                    this.coreContainerComponent.closeModal(0);
                                                    console.log(error);
                                                });
                                            } else {
                                                this.coreContainerComponent.closeModal(0);
                                            }
                                        }, error => {
                                            this.coreContainerComponent.closeModal(0);
                                            console.log(error);
                                        });
                                    } else {
                                        this.coreContainerComponent.closeModal(0);
                                    }
                                }, error => {
                                    this.coreContainerComponent.closeModal(0);
                                    console.log(error);
                                });
                            } else {
                                this.coreContainerComponent.closeModal(0);
                            }
                        }, error => {
                            this.coreContainerComponent.closeModal(0);
                            console.log(error);
                        });
                    } else {
                        this.coreContainerComponent.closeModal(0);
                    }
                }, error => {
                    this.coreContainerComponent.closeModal(0);
                    console.log(error);
                });
            } else {
                this.coreContainerComponent.closeModal(0);
            }
        }, error => {
            this.coreContainerComponent.closeModal(0);
            console.log(error);
        });
    }

}
