import { Component } from "@angular/core";
import { ElementRef, EventEmitter, Input, OnInit, Output, Renderer, SimpleChanges } from '@angular/core';
import { ElementFilter } from "./element.model";


;
@Component({
    selector: "gestion-filter",
    templateUrl: "./filter.component.html",
    styleUrls: ["./filter.component.scss"]
})
export class FilterComponent {

    @Output() valueFilter: EventEmitter<any> = new EventEmitter();
    @Output() diahoy: EventEmitter<any> = new EventEmitter();
    @Output() todas: EventEmitter<any> = new EventEmitter();
    @Output() diaManana: EventEmitter<any> = new EventEmitter();
    @Output() diaPasado: EventEmitter<any> = new EventEmitter();
    @Output() diaPospasado: EventEmitter<any> = new EventEmitter();
    @Output() diaFuturo: EventEmitter<any> = new EventEmitter();
    @Output() diaAyer: EventEmitter<any> = new EventEmitter();
    @Output() diaAntier: EventEmitter<any> = new EventEmitter();
    @Output() diaAnteAntier: EventEmitter<any> = new EventEmitter();
    @Output() diaPa: EventEmitter<any> = new EventEmitter();
    @Output() grafica: EventEmitter<any> = new EventEmitter();
    @Input() ElementsDropList: ElementFilter[];
    @Input() IsImage: boolean;
    @Input() tasa: number;
    activeHoy: boolean = false;
    activeManana: boolean = false;
    activePasadoManana: boolean = false;
    activePosPasado: boolean = false;
    activeFuturo: boolean = false;
    activeAyer: boolean = false;
    activeAntier: boolean = false;
    activeAnte: boolean = false;
    activePasado: boolean = false;
    activeTodo: boolean = false;
    @Input() IsDate: boolean;
    @Input() IsLoader: boolean;
    @Input() Clear: boolean = false;
    @Input() istextbox: boolean = false;
    @Input() istextboxSeguimiento: boolean = false;
    @Input() istextboxCobros: boolean = false;
    @Input() isSeguimiento: boolean = false;
    @Input() isCobros: boolean = false;
    txtFactura: string = "";
    defaultSelected: any = { nombre: '--TODOS--', key: 0 };
    public ruta = "assets/Images/reload.svg";
    public ruta2 = "assets/Images/visualizar.svg";
    public marginImage = "45";
    public showRefresh = true;
    public cont = true;
    public Datos: any[] = [];
    public Fechas = {
        fechaInicial: new Date(),
        fechaFinal: new Date(),
    }
    @Input() activarHoy: number = 0;
    @Input() activarManana: number = 0;
    @Input() activarPasadoMa: number = 0;
    @Input() activarPosPasado: number = 0;
    @Input() activarFuturo: number = 0;
    @Input() activarAyer: number = 0;
    @Input() activarAntier: number = 0;
    @Input() activarAnteAntier: number = 0;
    @Input() activarPasado: number = 0;
    @Input() activarTodo: number = 0;



    @Input() activasHoy: number = 0;
    @Input() activasManana: number = 0;
    @Input() activasPasadoManana: number = 0;
    @Input() activasPosPasado: number = 0;
    @Input() activasFuturo: number = 0;
    @Input() activasAyer: number = 0;
    @Input() activasAntier: number = 0;
    @Input() activasAnte: number = 0;
    @Input() activasPasado: number = 0;
    @Input() activasTodo: number = 0;
    public date: Date = new Date();
    public date2: Date = new Date();
    dAyer: any;
    dAntier: any;
    dAnte: any;
    dPasado: any;
    dhoy: any;
    dTodo: any;
    dManana: any;
    dPasadoMa: any;
    dPos: any;
    dFuturo: any;
    activo: number = 1;
    constructor() {

    }
    public aux = true;




    ngOnChanges(changes: SimpleChanges): void {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.


        if (changes.Clear != undefined) {

            this.date = new Date();
            this.date2 = new Date();
            this.Fechas = {
                fechaInicial: this.date,
                fechaFinal: this.date2,
            }
            if (changes.ElementsDropList != undefined) {
                this.ElementsDropList = changes.ElementsDropList.currentValue;
            }
        }
    }
    ngOnInit() {
        let date = new Date();
        let aux;
        let options = {
            weekday: 'long',
        };
        this.dhoy = date.toLocaleDateString('es-MX', options).toUpperCase();
        date.setDate(date.getDate() - 1);
        this.dAyer = date.toLocaleDateString('es-MX', options).toUpperCase();
        date.setDate(date.getDate() + 2);
        this.dManana = date.toLocaleDateString('es-MX', options).toUpperCase();



        //this.fillArrayAux();
    }
    dropList(index, $event) {



        if (this.IsLoader && this.cont == true) {


            this.ElementsDropList.forEach(element => {
                this.Datos.push($event);
            });
            this.cont = false;

        } else {

            if (this.Datos[index] && this.Datos[index].key != $event.key) {
                this.ruta = this.ruta2;
                this.marginImage = "45";
                this.showRefresh = false;
                this.Datos[index] = $event;
            }


        }

    }

    getFechaImpl($event) {
        this.Fechas.fechaInicial = this.date;

    }
    getFechaImpl2($event) {
        this.Fechas.fechaFinal = this.date2;

    }

    getValues() {
        let Busqueda = {
            Fechas: this.Fechas,
            Datos: this.Datos,
            textbox: this.txtFactura,
        }
        console.log(Busqueda.textbox);
        this.ruta = "assets/Images/reload.svg";
        this.marginImage = "45";
        this.showRefresh = true;
        this.valueFilter.emit(Busqueda);



    }
    /**HOY---TODO */
    hoy() {
        this.activo = 1;
        this.activarHoy++
        this.activarHoy == 2 ? this.activarHoy = 0 : '';
        if (this.activeHoy === false) {
            this.activeHoy = true;
            this.activeTodo=true;
        } else {
            this.activeHoy = false;
            this.activeTodo=false;
        }
        
        this.diahoy.emit();
    }
    todo() {
        this.activo = 2;
        this.todas.emit();
        this.activarTodo++;
        this.activarTodo == 2 ? this.activarTodo = 0 : '';
        if (this.activeTodo === false) {
            this.activeTodo = true;
            this.activeHoy=true;
        } else {
            this.activeTodo = false;
            this.activeHoy=false;
        }
        
    }

    /**DÍAS FUTUROS**/
    manana() {
        this.activo = 3;
        this.diaManana.emit();
        this.activarManana++;
        this.activarManana == 2 ? this.activarManana = 0 : '';
    }
    pasadoManana() {
        this.activo = 4;
        this.diaPasado.emit();
        this.activarPasadoMa++;
        this.activarPasadoMa == 2 ? this.activarPasadoMa = 0 : '';
    }
    posPasado() {
        this.activo = 5;
        this.diaPospasado.emit();
        this.activarPasado++;
        this.activarPasado == 2 ? this.activarPasado = 0 : '';
    }
    futuro() {
        this.activo = 6;
        this.diaFuturo.emit();
        this.activarFuturo++;
        this.activarFuturo == 2 ? this.activarFuturo = 0 : '';
    }

    /**DÍAS ANTERIORES ***/
    ayer() {
        this.activo = 7;
        this.diaAyer.emit();
        this.activarAyer++;
        this.activarAyer == 2 ? this.activarAyer = 0 : '';
    }
    antier() {
        this.activo = 8;
        this.diaAntier.emit();
        this.activarAntier++;
        this.activarAntier == 2 ? this.activarAntier = 0 : '';
    }
    anteAntier() {
        this.activo = 9;
        this.diaAnteAntier.emit();
        this.activarAnteAntier++;
        this.activarAnteAntier == 2 ? this.activarAnteAntier = 0 : '';
    }
    pasado() {
        this.activo = 10;
        this.diaPa.emit();
        this.activarPasado++;
        this.activarPasado == 2 ? this.activarPasado = 0 : '';

    }

    mostrarGrafica() {
        this.grafica.emit();
    }

}