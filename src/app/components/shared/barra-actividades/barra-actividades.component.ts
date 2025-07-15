import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'Pq-barra-actividades',
  templateUrl: './barra-actividades.component.html',
  styleUrls: ['./barra-actividades.component.scss']
})
export class BarraActividadesComponent implements OnInit {
  //@Input() actividad: String;
  @Output() eventCambio: EventEmitter<any> = new EventEmitter<any>();
  @Output() verificarSiAvanza: EventEmitter<any> = new EventEmitter<any>();
  @Input() maxItemList: number;
  @Input() clickArrows: boolean;
  @Input() clickArrows2: boolean;
  @Input() pieza:boolean;
  @Input() reiniciaBarra:boolean;
  @Input() actividades:any ;



  //Minimo debe tener dos elementos el arreglo.
  // actividadesInspeccion: any[] = ["INSPECCIONAR PARTIDA", "INSPECCIONAR PIEZAS", "ALMACENAR PRODUCTOS"];
  // actividades: any[] = ["COLECTAR ELEMENTOS", "EMBALAR PRODUCTOS", "GENERAR PACKING LIST"];
  classflechaizq: string = "./assets/Images/flechaIzquierdaCatProNormal.svg";
  classflechader: string = "./assets/Images/FlechaDerVerde.svg";
  focus: boolean = true;
  classHr: any;
  classText: any;
  actividad: String;
  indexselected: number = 0;


  ngOnChanges(change: SimpleChanges) {
    console.log(change);
    if (change.clickArrows !== undefined && !change.clickArrows.firstChange) {
      this.desplazamientoIzq();
    } else if (change.clickArrows2 !== undefined && !change.clickArrows2.firstChange) {
      this.desplazamientoDer();
    }


    if(this.reiniciaBarra)
    {
      this.reinicioDeBarra();
    }


  }


  inicio(i: number) {
    if (this.maxItemList == undefined) {
      if (i == 0 && this.pieza  == true) {
        this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
        this.classflechader = "./assets/Images/FlechaDerVerde.svg";
        this.indexselected = i;
        this.classHr.fill('hr');
        this.classText.fill('text');
        this.classHr[i] = 'hrFocus';
        this.classText[i] = 'textFocus';

      } else if (i == (this.actividades.length - 1)) {
        this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
        this.classflechader = "./assets/Images/flechaDerechaCatProNormal.svg";
        this.indexselected = i;

        this.classHr.fill('hr');
        this.classText.fill('text');
        this.classHr[i] = 'hrFocus';
        this.classText[i] = 'textFocus';
      }
       else {
        if (this.pieza == true  && i!=0) {
      //  this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
        this.classflechader = "./assets/Images/FlechaDerVerde.svg";
        this.indexselected = i;

        this.classHr.fill('hr');
        this.classText.fill('text');
        this.classHr[i] = 'hrFocus';
        this.classText[i] = 'textFocus';
      }
      }

      this.eventCambio.emit(this.indexselected);
    }

    else if (i == this.maxItemList) {
      this.verificarSiAvanza.emit();
    }


  }

  selccionarPrimero() {
    this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
    this.classflechader = "./assets/Images/FlechaDerVerde.svg";
    this.indexselected = 0;
  }

  reinicioDeBarra(){
    this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
    this.classflechader = "./assets/Images/FlechaDerVerde.svg";
    this.indexselected = 0;
    this.classHr.fill('hr');
    this.classText.fill('text');
    this.classHr[0] = 'hrFocus';
    this.classText[0] = 'textFocus';
    this.indexselected = 0;
    this.eventCambio.emit(this.indexselected);

  }



  desplazamientoIzq() {
  if (this.indexselected > 0  && this.pieza == true ) {
      this.indexselected = this.indexselected - 1;
      this.classHr.fill('hr');
      this.classText.fill('text');
      this.classHr[this.indexselected] = 'hrFocus';
      this.classText[this.indexselected] = 'textFocus';
      console.log("regresa")
      this.eventCambio.emit(this.indexselected);
      this.classflechader = "./assets/Images/FlechaDerVerde.svg";

    }
   if (this.indexselected == 2 && this.pieza !== undefined) {
     //&& this.pieza == undefined
    // if(this.pieza == false ){
        this.indexselected = this.indexselected -1;
        this.classHr.fill('hr');
        this.classText.fill('text');
        this.classHr[this.indexselected] = 'hrFocus';
        this.classText[this.indexselected] = 'textFocus';
        console.log("regresa")
        this.eventCambio.emit(this.indexselected);
        this.classflechader = "./assets/Images/FlechaDerVerde.svg";

      }

  }

  desplazamientoDer() {
    if (this.maxItemList == undefined) {
      if (this.indexselected < this.actividades.length - 1) {
        this.indexselected = this.indexselected + 1;
        this.classHr.fill('hr');
        this.classText.fill('text');
        this.classHr[this.indexselected] = 'hrFocus';
        this.classText[this.indexselected] = 'textFocus';
        console.log("avanza")
        this.eventCambio.emit(this.indexselected);
        if (this.indexselected == this.actividades.length - 1) {
          this.classflechader = "./assets/Images/flechaDerechaCatProNormal.svg";
        } else {
          this.classflechader = "./assets/Images/FlechaDerVerde.svg";
        }

      }

    }
    else if (this.indexselected + 1 == this.maxItemList) {
      this.verificarSiAvanza.emit();
    }
  }


  constructor() { }

  ngOnInit() {
    this.selccionarPrimero();

    this.classText = new Array<string>(this.actividades.length).fill('text');
    this.classHr = new Array<string>(this.actividades.length).fill('hr');


    this.classHr[0] = 'hrFocus';
    this.classText[0] = 'textFocus';
  }


}
