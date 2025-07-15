import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoreContainerComponent } from '../../../components/core-container/core-container.component';
import { CatalogoService } from '../../../services/catalogo/catalogo.service';
import { Trabajador } from '../../../class/catalogo/trabajador.class';

@Component({
    selector: 'app-pn-trabajadores',
    templateUrl: './trabajadores.component.html',
    styleUrls: ['./trabajadores.component.scss']
})
export class TrabajadoresComponent implements OnInit {

    public searchPlaceholder = 'Trabajador, Puesto, RFC';
    public homePath = '/protected/catalogo/';
    public idEmpresa = 0;
    public opcion = [
        {
            label: 'Patrones',
            path: '/protected/catalogo/empresas/',
        }
    ];

    /* Inicio de variables para los SELECTS
    0.- Todos Los Estados, Activos, Finiquitados
    */
    public cantSelects = 1; // Siempre más uno
    public itemsParent = new Array(this.cantSelects).fill(null);
    public isSearchParent = new Array(this.cantSelects).fill(false);
    public isCategoryParent = new Array(this.cantSelects).fill(false);
    public sizeParent = new Array(this.cantSelects).fill('');
    public alignParent = new Array(this.cantSelects).fill('left');
    public itemSelectParent = new Array(this.cantSelects).fill({ nombre: 'Todos los Estados', id: 0 });
    public widthContentParent = new Array(this.cantSelects).fill('100%');
    public marginLeftContentParent = new Array(this.cantSelects).fill('0px');
    public tooltipParent = new Array(this.cantSelects).fill(false);
    public tipoDropParent = new Array(this.cantSelects).fill('');
    public campoLabelParent = new Array(this.cantSelects).fill('');
    public heightDropParent = new Array(this.cantSelects).fill('35px'); // sumar 5px no sé por qué jajaxD
    public colorBorderDropParent = new Array(this.cantSelects).fill('#D8D9DD');

    public lstTrabajadores: Trabajador[] = [];
    public lstTrabajadoresAux: Trabajador[] = [];
    public lstTrabajadoresActives: Trabajador[] = [];
    public lstTrabajadoresFinalized: Trabajador[] = [];


    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private coreComponent: CoreContainerComponent,
        private catalogoService: CatalogoService
    ) {
        this.route.params.subscribe(params => {
            this.idEmpresa = params['id'];
            let item = {
                label: 'Ver Patrón',
                path: '/protected/catalogo/empresas/editar',
                id: this.idEmpresa
            };
            this.opcion.push(item);
            item = {
                label: 'Trabajadores',
                path: '/protected/catalogo/trabajadores',
                id: this.idEmpresa
            };
            this.opcion.push(item);
        });
    }

    fnGetValueDropList(value: any) {
        console.log(value);
        switch (value.id) {
            case 0: this.lstTrabajadores = Object.assign([], this.lstTrabajadoresAux); break;
            case 1: this.lstTrabajadores = Object.assign([], this.lstTrabajadoresActives); break;
            case 2: this.lstTrabajadores = Object.assign([], this.lstTrabajadoresFinalized); break;
        }
    }

    fnVerTrabajador(id: number) {
        this.router.navigate(['/protected/catalogo/trabajadores/editar', id]);
    }

    fnGetEmitSearch($event: string) {
        console.log($event);
        const searchArrayAux = [];
        const searchTerm = $event;
        if (searchTerm === '') {
            this.lstTrabajadores = Object.assign([], this.lstTrabajadoresAux);
        } else {
            this.lstTrabajadores.forEach(trab => {
                if (
                    trab.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
                    trab.puesto.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 ||
                    trab.datoFiscal.rfc.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
                ) {
                    searchArrayAux.push(trab);
                }
            });
            this.lstTrabajadores = Object.assign([], searchArrayAux);
        }
    }

    ngOnInit() {
        this.coreComponent.openModal(0);
        this.obtenertrabajadors();
    }

    obtenertrabajadors() {
        this.coreComponent.openModal(0);
        this.itemsParent[0] = [];
        this.itemsParent[0] = [{ nombre: 'Todos los Estados', id: 0 }, { nombre: 'Activos', id: 1 }, { nombre: 'Finiquitados', id: 2 }];
        this.catalogoService.obtenerTrabajadoresNominaEmpresaID(this.idEmpresa).subscribe(res => {
            setTimeout(() => {
                this.coreComponent.closeModal(0);
                console.log(res.current);
                if (res.current !== undefined && res.current !== null && res.current.length > 0) {
                    this.lstTrabajadores = Object.assign([], res.current);
                    this.lstTrabajadoresAux = Object.assign([], res.current);
                    this.lstTrabajadoresActives = [];
                    this.lstTrabajadoresFinalized = [];
                    for (const trab of res.current) {
                        if (trab.activo) {
                            this.lstTrabajadoresActives.push(Object.assign(new Trabajador(), trab));
                        } else {
                            this.lstTrabajadoresFinalized.push(Object.assign(new Trabajador(), trab));
                        }
                    }
                }
            }, 1500);
        }, error => {
            setTimeout(() => {
                this.coreComponent.closeModal(0);
                console.log(error);
            }, 1500);
        });
    }

    fnCrearTrabajador() {
        this.router.navigate(['protected/catalogo/trabajadores/crear/nuevo']);
    }
}
