import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../../../../class/catalogo/trabajador.class';
import { CatalogoService } from '../../../../services/catalogo/catalogo.service';
import { CoreContainerComponent } from '../../../core-container/core-container.component';
import { Router } from '@angular/router';


@Component({
    selector: 'app-pn-crear-trabajador',
    templateUrl: './crear-trabajador.component.html',
    styleUrls: ['./crear-trabajador.component.scss']
})
export class CrearTrabajadorComponent implements OnInit {

    /* Inicio de variables para los SELECTS
    0.- Situación Familiar
    1.- Sexo
    2.- Departamento
    3.- Puesto
    4.- Nombre del Banco
    5.- Tipo de Contrato
    6.- Horario Inicial
    7.- Horario Final
    8.- Turno
    9.- Riesgo Puesto
    10.- Periodicidad de Pago
    11.- Patrón Salarios
    12.- Patrón Asimilados
    */
    public cantSelects = 13; // Siempre más uno
    public itemsParent = new Array(this.cantSelects).fill(null);
    public isSearchParent = new Array(this.cantSelects).fill(false);
    public isCategoryParent = new Array(this.cantSelects).fill(false);
    public sizeParent = new Array(this.cantSelects).fill('');
    public alignParent = new Array(this.cantSelects).fill('left');
    public itemSelectParent = new Array(this.cantSelects).fill({ nombre: 'Seleccionar', id: -1 });
    public widthContentParent = new Array(this.cantSelects).fill('100%');
    public marginLeftContentParent = new Array(this.cantSelects).fill('0px');
    public tooltipParent = new Array(this.cantSelects).fill(true);
    public tipoDropParent = new Array(this.cantSelects).fill('');
    public campoLabelParent = new Array(this.cantSelects).fill('');
    public heightDropParent = new Array(this.cantSelects).fill('35px'); // sumar 5px no sé por qué jajaxD
    public colorBorderDropParent = new Array(this.cantSelects).fill('#D8D9DD');
    public selectsAux = new Array(this.cantSelects).fill(false);
    public selectsLabels = [
        'Situación Familiar',
        'Sexo',
        'Departamento',
        'Puesto',
        'Nombre del Banco',
        'Tipo de Contrato',
        'Horario Inicial',
        'Horario Final',
        'Turno',
        'Riesgo Puesto',
        'Periodicidad de Pago',
        'Patrón Salarios',
        'Patrón Asimilados'
    ];
    public lstHoras = [
        { nombre: '00:00', id: 0 },
        { nombre: '01:00', id: 1 },
        { nombre: '02:00', id: 2 },
        { nombre: '03:00', id: 3 },
        { nombre: '04:00', id: 4 },
        { nombre: '05:00', id: 5 },
        { nombre: '06:00', id: 6 },
        { nombre: '07:00', id: 7 },
        { nombre: '08:00', id: 8 },
        { nombre: '09:00', id: 9 },
        { nombre: '10:00', id: 10 },
        { nombre: '11:00', id: 11 },
        { nombre: '12:00', id: 12 },
        { nombre: '13:00', id: 13 },
        { nombre: '14:00', id: 14 },
        { nombre: '15:00', id: 15 },
        { nombre: '16:00', id: 16 },
        { nombre: '17:00', id: 17 },
        { nombre: '18:00', id: 18 },
        { nombre: '19:00', id: 19 },
        { nombre: '20:00', id: 20 },
        { nombre: '21:00', id: 21 },
        { nombre: '22:00', id: 22 },
        { nombre: '23:00', id: 23 },
    ];
    public lstTipoCuenta = [
        { nombre: 'Celular', id: 1 },
        { nombre: 'CLABE', id: 2 },
        { nombre: 'Tarjeta Débito', id: 3 },
        { nombre: 'Número de Cuenta', id: 4 },
        { nombre: 'Monedero Electrónico', id: 5 }
    ];
    /* Fin de variables para los SELECTS */

    public trabajador: Trabajador;

    public codigoPostal: number = null;
    public pais: number = null;

    public fileEmpCant = 10;
    public fileEmpLabel = [
        'Cargar Comprobante de domicilio',
        'Cargar Identificación oficial',
        'Cargar Contrato Firmado',
        'Cargar Alta IMSS',
        'Cargar Infonavit',
        'Cargar Carta Patronal',
        'Cargar Carta de Renuncia y Finiquito Firmado',
        'Cargar Autorización Permanente',
        'Cargar Contrato Bancario',
        'Cargar Registro del Empleo'
    ];
    public fileEmp: FileList[] = new Array(this.fileEmpCant).fill(null);
    public fileEmpName = new Array(this.fileEmpCant).fill('.pdf');
    public fileEmpIsUp = new Array(this.fileEmpCant).fill(false);

    public trabajadorValor = new Array(4).fill(0);

    public dateCant = 5;
    public date: Date[] = new Array(this.dateCant).fill(null);

    public classBtnAccept = 'containerBtnsBtnActive'; // containerBtnsBtnDisabled

    public checkBtnCant = 3;
    public checkBtn = new Array(this.checkBtnCant).fill('containerFormsInputsChecksUncheck');
    public formsInputs = new Array(this.checkBtnCant).fill('containerFormsInputs inputsDisabled');

    constructor(
        private catalogoService: CatalogoService,
        private coreContainerComponent: CoreContainerComponent,
        private router: Router
    ) { }

    ngOnInit() {
        this.coreContainerComponent.openModal(0);
        this.trabajador = new Trabajador();
        this.itemsParent[9] = [];
        for (const it of this.lstTipoCuenta) {
            const item = {
                nombre: it.nombre,
                id: it.id
            };
            this.itemsParent[9].push(Object.assign({}, item));
        }
        for (let x = 0; x < this.cantSelects; x++) {
            this.fnFillSelects(x);
        }
    }

    fnCheck(opc: number) {
        this.checkBtn[opc] = (this.checkBtn[opc].match('checked')) ? 'containerFormsInputsChecksUncheck' : 'containerFormsInputsChecksUncheck checked' ;
        this.formsInputs[opc] = (this.formsInputs[opc].match('inputsDisabled')) ? 'containerFormsInputs' : 'containerFormsInputs inputsDisabled' ;
    }

    getFechaImpl($event, opc: number) {
        console.log('getFechaImpl: ', $event, opc);
    }

    fnClickFile(opc: number) {
        document.getElementById('fileEmp' + opc).click();
    }

    fnGetFile($event, opc: number) {
        console.log(typeof $event, opc);
        if ($event.target.files !== undefined && $event.target.files !== null && $event.target.files.length > 0) {
            this.fileEmp[opc] = $event.target.files;
            this.fileEmpIsUp[opc] = true;
            this.fileEmpName[opc] = $event.target.files[0].name;
        } else {
            this.fileEmp[opc] = null;
            this.fileEmpIsUp[opc] = false;
            this.fileEmpName[opc] = (opc < 2) ? '.pdf' : (opc === 2) ? '.cer' : '.key';
        }
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

    fnSelectsAux() {
        let x = 0;
        for (const sAux of this.selectsAux) {
            if (sAux) {
                x++;
            } else {
                break;
            }
        }
        if (this.selectsAux.length === x) {
            this.coreContainerComponent.closeModal(0);
        }
    }

    fnFillSelects(opc: number) {
        switch (opc) {
            case 0:
                this.catalogoService.obtenerNominaCatalogo('EstadoCivil').subscribe(lstNomCat => {
                    console.log('obtenerNominaCatalogo - EstadoCivil: ', lstNomCat);
                    this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (const it of lstNomCat.current) {
                            const item = {
                                nombre: it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                }, error => {
                    console.log('Error obtenerNominaCatalogo - EstadoCivil: ', error);
                });
                break;
            case 1:
                this.catalogoService.obtenerNominaCatalogo('Sexo').subscribe(lstNomCat => {
                    console.log('obtenerNominaCatalogo - Sexo: ', lstNomCat);
                    this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (const it of lstNomCat.current) {
                            const item = {
                                nombre: it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                }, error => {
                    console.log('Error obtenerNominaCatalogo - Sexo: ', error);
                });
                break;
            case 2:
                this.catalogoService.obtenerNominaCatalogo('Departamento').subscribe(lstNomCat => {
                    console.log('obtenerNominaCatalogo - Departamento: ', lstNomCat);
                    this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (const it of lstNomCat.current) {
                            const item = {
                                nombre: it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                }, error => {
                    console.log('Error obtenerNominaCatalogo - Departamento: ', error);
                });
                break;
            case 3:
                this.catalogoService.obtenerNominaCatalogo('Puesto').subscribe(lstNomCat => {
                    console.log('obtenerNominaCatalogo - Puesto: ', lstNomCat);
                    this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (const it of lstNomCat.current) {
                            const item = {
                                nombre: it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                }, error => {
                    console.log('Error obtenerNominaCatalogo - Puesto: ', error);
                });
                break;
            case 4:
                this.catalogoService.obtenerBancosTrabajadorNomina().subscribe(lstBan => {
                    console.log('obtenerBancosTrabajadorNomina: ', lstBan.current);
                    this.itemsParent[opc] = [];
                    if (lstBan.current !== undefined && lstBan.current !== null && lstBan.current.length > 0) {
                        for (const it of lstBan.current) {
                            const item = {
                                nombre: it.valor,
                                id: it.llave
                            };
                            this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                }, error => {
                    console.log('Error obtenerBancosTrabajadorNomina: ', error);
                });
                break;
            case 5:
                this.catalogoService.obtenerNominaCatalogo('RegimenContratacion').subscribe(lstNomCat => {
                    console.log('obtenerNominaCatalogo - RegimenContratacion: ', lstNomCat);
                    this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (const it of lstNomCat.current) {
                            const item = {
                                nombre: it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                }, error => {
                    console.log('Error obtenerNominaCatalogo - RegimenContratacion: ', error);
                });
                break;
            case 6:
                this.itemsParent[opc] = [];
                this.itemsParent[opc] = Object.assign([], this.lstHoras);
                this.itemsParent[opc + 1] = [];
                this.itemsParent[opc + 1] = Object.assign([], this.lstHoras);
                break;
            case 8:
                this.catalogoService.obtenerNominaCatalogo('JornadaLaboral').subscribe(lstNomCat => {
                    console.log('obtenerNominaCatalogo - JornadaLaboral: ', lstNomCat);
                    this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (const it of lstNomCat.current) {
                            const item = {
                                nombre: it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                }, error => {
                    console.log('Error obtenerNominaCatalogo - JornadaLaboral: ', error);
                });
                break;
            case 9:
                this.catalogoService.obtenerNominaCatalogo('RiesgoPuesto').subscribe(lstNomCat => {
                    console.log('obtenerNominaCatalogo - RiesgoPuesto: ', lstNomCat);
                    this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (const it of lstNomCat.current) {
                            const item = {
                                nombre: it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                }, error => {
                    console.log('Error obtenerNominaCatalogo - RiesgoPuesto: ', error);
                });
                break;
            case 10:
                this.catalogoService.obtenerNominaCatalogo('PeriodicidadPago').subscribe(lstNomCat => {
                    console.log('obtenerNominaCatalogo - PeriodicidadPago: ', lstNomCat);
                    this.itemsParent[opc] = [];
                    if (lstNomCat.current !== undefined && lstNomCat.current !== null && lstNomCat.current.length > 0) {
                        for (const it of lstNomCat.current) {
                            const item = {
                                nombre: it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            this.itemsParent[opc].push(Object.assign({}, item));
                        }
                    }
                }, error => {
                    console.log('Error obtenerNominaCatalogo - PeriodicidadPago: ', error);
                });
                break;
            case 11:
                this.catalogoService.obtenerEmpresas().subscribe(lstEmp => {
                    console.log('obtenerEmpresas: ', lstEmp.current);
                    this.itemsParent[opc] = [];
                    this.itemsParent[opc + 1] = [];
                    if (lstEmp.current !== undefined && lstEmp.current !== null && lstEmp.current.length > 0) {
                        for (const it of lstEmp.current) {
                            const item = {
                                nombre: it.valor,
                                id: it.llave
                            };
                            this.itemsParent[opc].push(Object.assign({}, item));
                            this.itemsParent[opc + 1].push(Object.assign({}, item));
                        }
                    }
                }, error => {
                    console.log('Error obtenerEmpresas: ', error);
                });
                break;
        }
        this.selectsAux[opc] = true;
        this.fnSelectsAux();
    }

}
