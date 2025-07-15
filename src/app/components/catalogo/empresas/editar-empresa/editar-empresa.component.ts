import { Component, OnInit, DoCheck } from '@angular/core';
import { Empresa } from '../../../../class/catalogo/empresa.class';
import { Router, ActivatedRoute } from '@angular/router';
import { CatalogoService } from '../../../../services/catalogo/catalogo.service';
import { CoreContainerComponent } from '../../../core-container/core-container.component';
import { Trabajador } from '../../../../class/catalogo/trabajador.class';


@Component({
    selector: 'app-pn-editar-empresa',
    templateUrl: './editar-empresa.component.html',
    styleUrls: ['./editar-empresa.component.scss']
})
export class EditarEmpresaComponent implements OnInit, DoCheck {

    public empresa: Empresa = new Empresa();
    public homePath = '/protected/catalogo/';
    public idEmpresa = 0;
    public opcion: any = [
        {
            label: 'Patrones',
            path: '/protected/catalogo/empresas/',
        }
    ];
    public classBtnAccept = 'containerBtnsBtnDisabled';
    public classBtnAcceptTrab = 'lstTrabajadoresVaciaBtnDisabled';
    public lstTrabajadores: Trabajador[] = [];

    /* Inicio de variables para los SELECTS
    0.- Factor Riesgo
    1.- Sector Empresarial
    2.- Regimen Fiscal
    3.- Periodicidad de Pago
    */
    public cantSelects = 4; // Siempre más uno
    public itemsParent = new Array(this.cantSelects).fill(null);
    public isSearchParent = new Array(this.cantSelects).fill(false);
    public isCategoryParent = new Array(this.cantSelects).fill(false);
    public sizeParent = new Array(this.cantSelects).fill('');
    public alignParent = new Array(this.cantSelects).fill('left');
    public itemSelectParent = new Array(this.cantSelects).fill({ nombre: 'Escribe Aquí', id: -1 });
    public widthContentParent = new Array(this.cantSelects).fill('100%');
    public marginLeftContentParent = new Array(this.cantSelects).fill('0px');
    public tooltipParent = new Array(this.cantSelects).fill(false);
    public tipoDropParent = new Array(this.cantSelects).fill('');
    public campoLabelParent = new Array(this.cantSelects).fill('');
    public heightDropParent = new Array(this.cantSelects).fill('35px'); // sumar 5px no sé por qué jajaxD
    public colorBorderDropParent = new Array(this.cantSelects).fill('#D8D9DD');
    public selectsLabels = ['Factor Riesgo', 'Sector Empresarial', 'Regimen Fiscal', 'Periodicidad de Pago'];
    public lstSectores = [
        { nombre: 'Comerciales', id: 0 },
        { nombre: 'Industriales', id: 0 },
        { nombre: 'Autotransporte', id: 0 },
        { nombre: 'Agrícolas', id: 0 },
        { nombre: 'Ganaderas', id: 0 },
        { nombre: 'Pesca', id: 0 },
        { nombre: 'Silvícolas', id: 0 }
    ];

    public fileEmp: FileList[] = new Array(4).fill(null);
    public fileEmpName = ['.png/.jpg', '.pdf', '.cer', '.key'];
    public fileEmpIsUp = new Array(4).fill(true);
    public fileEmpIsUpUpdate = new Array(4).fill(false);
    public validSections = new Array(4).fill(false);

    public checkBtnCant = 1;
    public checkBtn = new Array(this.checkBtnCant).fill('containerFormsInputsChecksUncheck checked');
    public checkBtnLabel = new Array(this.checkBtnCant).fill('Deshabilitar Patrón');


    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private catalogoService: CatalogoService,
        private coreComponent: CoreContainerComponent,
    ) {
        this.route.params.subscribe(params => {
            this.idEmpresa = params['id'];
        });
    }
    ngDoCheck(): void {
        if (
            this.empresa.nomenclaturaEmpresa !== undefined && this.empresa.nomenclaturaEmpresa !== null && this.empresa.nomenclaturaEmpresa !== '' &&
            this.empresa.alias !== undefined && this.empresa.alias !== null && this.empresa.alias !== '' &&
            this.empresa.registroPatronal !== undefined && this.empresa.registroPatronal !== null && this.empresa.registroPatronal !== '' &&
            this.empresa.sitioWeb !== undefined && this.empresa.sitioWeb !== null && this.empresa.sitioWeb !== '' &&
            this.empresa.calle !== undefined && this.empresa.calle !== null && this.empresa.calle !== '' &&
            this.empresa.numero !== undefined && this.empresa.numero !== null && this.empresa.numero !== '' &&
            this.empresa.colonia !== undefined && this.empresa.colonia !== null && this.empresa.colonia !== '' &&
            this.empresa.cp !== undefined && this.empresa.cp !== null && this.empresa.cp !== '' &&
            this.empresa.estado !== undefined && this.empresa.estado !== null && this.empresa.estado !== '' &&
            this.empresa.delegacion !== undefined && this.empresa.delegacion !== null && this.empresa.delegacion !== '' &&
            this.empresa.factorRiesgo.idNominaCatalogo > 0 &&
            this.empresa.sectorEmpresarial !== undefined && this.empresa.sectorEmpresarial !== null && this.empresa.sectorEmpresarial !== ''
        ) {
            this.validSections[0] = true;
        } else {
            this.validSections[0] = false;
        }
        if (
            this.empresa.razonSocial !== undefined && this.empresa.razonSocial !== null && this.empresa.razonSocial !== '' &&
            this.empresa.regimenFiscal !== undefined && this.empresa.regimenFiscal !== null && this.empresa.regimenFiscal !== '' &&
            this.empresa.rfcEmpresa !== undefined && this.empresa.rfcEmpresa !== null && this.empresa.rfcEmpresa !== '' &&
            this.empresa.contraseniaSAT !== undefined && this.empresa.contraseniaSAT !== null && this.empresa.contraseniaSAT !== '' &&
            this.empresa.serie !== undefined && this.empresa.serie !== null && this.empresa.serie !== '' &&
            this.empresa.calle2 !== undefined && this.empresa.calle2 !== null && this.empresa.calle2 !== '' &&
            this.empresa.numero2 !== undefined && this.empresa.numero2 !== null && this.empresa.numero2 !== '' &&
            this.empresa.colonia2 !== undefined && this.empresa.colonia2 !== null && this.empresa.colonia2 !== '' &&
            this.empresa.cp2 !== undefined && this.empresa.cp2 !== null && this.empresa.cp2 !== '' &&
            this.empresa.estado2 !== undefined && this.empresa.estado2 !== null && this.empresa.estado2 !== '' &&
            this.empresa.delegacion2 !== undefined && this.empresa.delegacion2 !== null && this.empresa.delegacion2 !== '' &&
            this.empresa.periodicidadPago.idNominaCatalogo > 0
        ) {
            this.validSections[1] = true;
        } else {
            this.validSections[1] = false;
        }
        if (
            this.empresa.nombre !== undefined && this.empresa.nombre !== null && this.empresa.nombre !== '' &&
            this.empresa.apellidoPaterno !== undefined && this.empresa.apellidoPaterno !== null && this.empresa.apellidoPaterno !== '' &&
            this.empresa.apellidoMaterno !== undefined && this.empresa.apellidoMaterno !== null && this.empresa.apellidoMaterno !== '' &&
            this.empresa.correoElectronico !== undefined && this.empresa.correoElectronico !== null && this.empresa.correoElectronico !== '' &&
            this.empresa.lada1 !== undefined && this.empresa.lada1 !== null && this.empresa.lada1 !== '' &&
            this.empresa.telefono1 !== undefined && this.empresa.telefono1 !== null && this.empresa.telefono1 !== '' &&
            this.empresa.lada2 !== undefined && this.empresa.lada2 !== null && this.empresa.lada2 !== '' &&
            this.empresa.telefono2 !== undefined && this.empresa.telefono2 !== null && this.empresa.telefono2 !== ''
        ) {
            this.validSections[2] = true;
            this.empresa.telefono = this.empresa.lada1 + this.empresa.telefono1;
        } else {
            this.validSections[2] = false;
        }
        if (this.fileEmpIsUp[0] && this.fileEmpIsUp[1] && this.fileEmpIsUp[2] && this.fileEmpIsUp[3]) {
            this.validSections[3] = true;
        } else {
            this.validSections[3] = false;
        }
        if (this.validSections[0] && this.validSections[1] && this.validSections[2] && this.validSections[3]) {
            this.classBtnAccept = 'containerBtnsBtnActive';
        } else {
            this.classBtnAccept = 'containerBtnsBtnDisabled';
        }
    }

    fnCheck(opc: number) {
        this.checkBtn[opc] = (this.checkBtn[opc].match('checked')) ? 'containerFormsInputsChecksUncheck' : 'containerFormsInputsChecksUncheck checked';
    }

    ngOnInit() {
        this.fnFillSelects();
        this.fnObtenerEmpresaID();
    }

    fnSaveCompany() {
        this.coreComponent.openModal(0);

        this.catalogoService.guardarEmpresa(this.empresa).subscribe(emp => {
            setTimeout(() => {
                console.log(emp);
                if (emp.current.idEmpresa > 0) {
                    this.catalogoService.subirArchivosEmpresa('logo', this.fileEmp[0], emp.current.idEmpresa).subscribe(resLogo => {
                        console.log('Respuesta Logo', resLogo);
                    });
                    this.empresa.idEmpresa = emp.current.idEmpresa;
                    this.classBtnAcceptTrab = 'lstTrabajadoresVaciaBtn';
                } else {
                    this.classBtnAcceptTrab = 'lstTrabajadoresVaciaBtnDisabled';
                }
                this.coreComponent.closeModal(0);
            }, 1500);
        }, error => {
            setTimeout(() => {
                console.log(error);
                this.coreComponent.closeModal(0);
            }, 1500);
        });
    }

    fnGetValueDropList(value: any, index: number) {
        console.log(value, index);
        switch (index) {
            case 0: this.empresa.factorRiesgo.idNominaCatalogo = value.id; break;
            case 1: this.empresa.sectorEmpresarial = value.nombre; break;
            case 2: this.empresa.regimenFiscal = value.nombre; break;
        }
    }

    fnFillSelects() {
        this.itemsParent[1] = [];
        for (const it of this.lstSectores) {
            this.itemsParent[1].push(Object.assign({}, it));
        }
        this.catalogoService.obtenerNominaCatalogo('RiesgoPuesto').subscribe(lstRiesgo => {
            console.log('obtenerNominaCatalogo - RiesgoPuesto: ', lstRiesgo);
            this.itemsParent[0] = [];
            if (lstRiesgo.current !== undefined && lstRiesgo.current !== null && lstRiesgo.current.length > 0) {
                for (const it of lstRiesgo.current) {
                    const item = {
                        nombre: it.codigoSAT + ' - ' + it.descripcion,
                        id: it.idNominaCatalogo
                    };
                    this.itemsParent[0].push(Object.assign({}, item));
                }
                this.catalogoService.obtenerNominaCatalogo('RegimenFiscal').subscribe(lstRegFis => {
                    console.log('obtenerNominaCatalogo - RegimenFiscal: ', lstRegFis);
                    this.itemsParent[2] = [];
                    if (lstRegFis.current !== undefined && lstRegFis.current !== null && lstRegFis.current.length > 0) {
                        for (const it of lstRegFis.current) {
                            const item = {
                                nombre: it.codigoSAT + ' - ' + it.descripcion,
                                id: it.idNominaCatalogo
                            };
                            this.itemsParent[2].push(Object.assign({}, item));
                        }
                    }
                });
            }
        }, error => { });
    }

    fnClickFile(opc: number) {
        document.getElementById('fileEmp' + opc).click();
    }

    fnGetFile($event, opc: number) {
        console.log($event, opc);
        if ($event.target.files !== undefined && $event.target.files !== null && $event.target.files.length > 0) {
            this.fileEmp[opc] = $event.target.files;
            this.fileEmpIsUp[opc] = true;
            this.fileEmpIsUpUpdate[opc] = true;
            this.fileEmpName[opc] = $event.target.files[0].name;
        } else {
            this.fileEmp[opc] = null;
            this.fileEmpIsUp[opc] = false;
            this.fileEmpIsUpUpdate[opc] = false;
            this.fileEmpName[opc] = (opc < 2) ? '.pdf' : (opc === 2) ? '.cer' : '.key';
        }
    }

    fnReturnView() {
        this.router.navigate(['/protected/catalogo/empresas']);
    }

    fnVerTrabajadores() {
        this.router.navigate(['/protected/catalogo/trabajadores', this.idEmpresa]);
    }

    fnVerTrabajador(id: number) {
        this.router.navigate(['/protected/catalogo/trabajadores/editar', id]);
    }

    fnObtenerEmpresaID() {
        this.lstTrabajadores = [];
        this.catalogoService.obtenerEmpresaID(this.idEmpresa).subscribe(emp => {
            console.log(emp.current);
            if (emp.current !== undefined && emp.current !== null) {
                this.empresa = Object.assign(Empresa, emp.current);
                if (this.empresa.activo) {
                    const item = {
                        label: 'Ver Patrón Habilitado',
                        path: '/protected/catalogo/empresas/editar',
                        id: this.idEmpresa
                    };
                    this.checkBtnLabel[0] = 'Deshabilitar Patrón';
                    this.checkBtn[0] = 'containerFormsInputsChecksUncheck';
                    this.opcion.push(item);
                } else {
                    const item = {
                        label: 'Ver Patrón Deshabilitado',
                        path: '/protected/catalogo/empresas/editar',
                        id: this.idEmpresa
                    };
                    this.checkBtnLabel[0] = 'Habilitar Patrón';
                    this.checkBtn[0] = 'containerFormsInputsChecksUncheck';
                    this.opcion.push(item);
                }
                // this.empresa.periodicidadPago
                this.catalogoService.obtenerTrabajadoresNominaEmpresaID(this.idEmpresa).subscribe(res => {
                    console.log('Trabajadores: ', res.current);
                    if (res.current !== undefined && res.current !== null && res.current.length > 0) {
                        this.lstTrabajadores = res.current;
                    } else {
                        this.lstTrabajadores = [];
                    }
                    setTimeout(() => {
                        this.coreComponent.closeModal(0);
                        console.log(res.current);
                    }, 1500);
                }, error => {
                    setTimeout(() => {
                        this.coreComponent.closeModal(0);
                        console.log(error);
                    }, 1500);
                });
            } else {
                this.empresa = new Empresa();
            }
        },
            error => {
                console.log(error);
            });
    }

}
