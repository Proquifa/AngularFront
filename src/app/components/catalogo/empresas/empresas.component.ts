import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { CoreContainerComponent } from '../../../components/core-container/core-container.component';
import { CatalogoService } from '../../../services/catalogo/catalogo.service';


@Component({
    selector: 'app-pn-empresas',
    templateUrl: './empresas.component.html',
    styleUrls: ['./empresas.component.scss']
})
export class EmpresasComponent implements OnInit {

    public carterasPorFila: number;
    public habilitadosSelected = true;
    public empresaSearched = [];
    public empresaDisplay = [];
    public empresaDisplayAux = [];
    public empresaDisplayI = [];
    public searchPlaceholder = 'Patrones, RFC';
    public homePath = '/protected/catalogo/';
    public opcion: any = [
        {
            label: 'Patrones',
            path: '/protected/catalogo/empresas',
        }
    ];


    constructor(
        private router: Router,
        private coreComponent: CoreContainerComponent,
        private catalogoService: CatalogoService
    ) { }

    fnGetEmitSearch($event: string) {
        const searchArrayAux = [];
        const searchTerm = $event;
        if (searchTerm === '') {
            this.empresaSearched = (this.habilitadosSelected) ? this.empresaDisplayAux : this.empresaDisplayI;
        } else {
            this.empresaSearched.forEach(empresa => {
                if (empresa.valor.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || empresa.valor1.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(empresa);
                }
            });
            this.empresaSearched = searchArrayAux;
        }
    }

    ngOnInit() {
        this.coreComponent.openModal(0);
        this.obtenerEmpresas();
    }
    Habilitar(opc) {
        switch (opc) {
            case 1:
                this.habilitadosSelected = true;
                this.empresaSearched = this.empresaDisplayAux;
                this.empresaDisplay = this.empresaDisplayAux;
                break;
            case 0:
                this.habilitadosSelected = false;
                this.empresaSearched = this.empresaDisplayI;
                this.empresaDisplay = this.empresaDisplayI;
                break;
        }
    }

    fnToogleHeaderChecks() {
        if (this.habilitadosSelected) {
            this.empresaSearched = this.empresaDisplayI;
            this.empresaDisplay = this.empresaDisplayI;
        } else {
            this.empresaSearched = this.empresaDisplayAux;
            this.empresaDisplay = this.empresaDisplayAux;
        }
        this.habilitadosSelected = !this.habilitadosSelected;
    }

    obtenerEmpresas() {
        this.catalogoService.obtenerEmpresas().subscribe(empresas => {
            console.log(empresas.current);
            const lstH = [];
            const lstI = [];
            for (const emp of empresas.current) {
                emp.parentLogo = (emp.logo !== undefined && emp.logo !== null && emp.logo !== '') ? emp.logo : './assets/Images/logo_hover_proquifa.svg';
                emp.parentFrontValue = emp.valor;
                emp.parentBackTitle = emp.valor;
                emp.parentBackSubtitle = emp.valor1;
                emp.parentLstItemsBackBody = emp.lstValores;
                emp.parentPath = '/protected/catalogo/empresas/editar';
                emp.id = emp.llave;
                if (emp.activo) {
                    lstH.push(Object.assign({}, emp));
                } else {
                    lstI.push(Object.assign({}, emp));
                }
            }
            this.empresaSearched = [];
            this.empresaSearched = Object.assign([], lstH);
            this.empresaDisplayI = [];
            this.empresaDisplayI = Object.assign([], lstI);
            this.empresaDisplayAux = [];
            this.empresaDisplayAux = Object.assign([], lstH);
            setTimeout(() => {
                this.coreComponent.closeModal(0);
            }, 1500);
        },
            error => {
                setTimeout(() => {
                    this.coreComponent.closeModal(0);
                }, 1500);
            });
    }
    fnCreateCompany() {
        this.router.navigate(['/protected/catalogo/empresas/crear']);
    }
}
