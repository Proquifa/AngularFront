import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "pn-barra-pasos",
  templateUrl: "./barra-pasos.component.html",
  styleUrls: ["./barra-pasos.component.scss"]
})
export class BarraPasosComponent implements OnInit {
  @Input()
  lstItems: any;
  @Input()
  blockLeft: boolean = false;
  @Input()
  blockRight: boolean = false;
  @Input()
  blockItems: boolean = false;
  @Input()
  siguiente: boolean = false;
  @Input()
  anterior: boolean = false;
  @Input()
  pasoApaso: boolean = false;
  @Input() activarPasos: boolean = false;
  @Output()
  eventCambio: EventEmitter<any> = new EventEmitter<any>();

  classflechaizq: string = "./assets/Images/flechaIzquierdaCatProNormal.svg";
  classflechader: string = "./assets/Images/FlechaDerVerde.svg";
  classHr: any;
  classText: any;
  indexselected: number = 0;

  constructor() {}

  ngOnInit() {
    if (this.activarPasos !== true) {
      this.classText = new Array<string>(this.lstItems.length).fill("text");
      this.classHr = new Array<string>(this.lstItems.length).fill("hr");
      this.classHr[0] = "hrFocus";
      this.classText[0] = "textFocus";
    }
    if (this.blockLeft) {
      this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
    } else {
      if (this.indexselected == 0) {
        this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
      } else {
        this.classflechaizq = "./assets/Images/FlechaIzqVerde.svg";
      }
    }

    if (this.blockRight) {
      this.classflechader = "./assets/Images/flechaDerechaCatProNormal.svg";
    } else {
      if (this.indexselected + 1 == this.lstItems.length) {
        this.classflechader = "./assets/Images/flechaDerechaCatProNormal.svg";
      } else {
        this.classflechader = "./assets/Images/FlechaDerVerde.svg";
      }
    }
  }

  ngOnChanges(change: SimpleChanges) {
    if (this.activarPasos === true) {
      this.classText = new Array<string>(this.lstItems.length).fill("text");
      this.classHr = new Array<string>(this.lstItems.length).fill("hr");
      this.classHr[0] = "hrFocus";
      this.classText[0] = "textFocus";
    }
    if (this.blockLeft) {
      this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
    } else {
      if (this.indexselected == 0) {
        this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
      } else {
        this.classflechaizq = "./assets/Images/FlechaIzqVerde.svg";
      }
    }

    if (this.blockRight) {
      this.classflechader = "./assets/Images/flechaDerechaCatProNormal.svg";
    } else {
      if (this.indexselected + 1 == this.lstItems.length) {
        this.classflechader = "./assets/Images/flechaDerechaCatProNormal.svg";
      } else {
        this.classflechader = "./assets/Images/FlechaDerVerde.svg";
      }
    }

    if (this.siguiente) {
      this.desplazamientoDer();
    }

    if (this.anterior) {
      this.desplazamientoIzq();
    }
  }

  desplazamientoIzq() {
    if (this.indexselected > 0 && !this.blockLeft) {
      this.indexselected -= 1;
      this.classHr.fill("hr");
      this.classText.fill("text");
      this.classHr[this.indexselected] = "hrFocus";
      this.classText[this.indexselected] = "textFocus";
      if (!this.blockRight) {
        this.classflechader = "./assets/Images/FlechaDerVerde.svg";
      }
      this.eventCambio.emit(this.lstItems[this.indexselected]);
      if (this.indexselected == 0) {
        this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
      }
    }
  }

  desplazamientoDer() {
    if (this.indexselected + 1 < this.lstItems.length && !this.blockRight) {
      this.indexselected += 1;
      this.classHr.fill("hr");
      this.classText.fill("text");
      this.classHr[this.indexselected] = "hrFocus";
      this.classText[this.indexselected] = "textFocus";
      if (!this.blockLeft) {
        this.classflechaizq = "./assets/Images/FlechaIzqVerde.svg";
      }
      this.eventCambio.emit(this.lstItems[this.indexselected]);
      if (this.indexselected + 1 == this.lstItems.length) {
        this.classflechader = "./assets/Images/flechaDerechaCatProNormal.svg";
      }
    }
  }

  select($i) {
    if (
      !this.blockItems &&
      (!this.blockLeft || (this.blockLeft && $i > this.indexselected)) &&
      (!this.blockRight || (this.blockRight && $i < this.indexselected)) &&
      (!this.pasoApaso ||
        (this.pasoApaso &&
          ($i == this.indexselected+1 || $i == this.indexselected-1)))
    ) {
      this.indexselected = $i;
      this.classHr.fill("hr");
      this.classText.fill("text");
      this.classHr[this.indexselected] = "hrFocus";
      this.classText[this.indexselected] = "textFocus";
      this.eventCambio.emit(this.lstItems[this.indexselected]);
      if (this.indexselected == 0) {
        this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
      } else {
        if (!this.blockLeft) {
          this.classflechaizq = "./assets/Images/FlechaIzqVerde.svg";
        }
      }

      if (this.indexselected + 1 == this.lstItems.length) {
        this.classflechader = "./assets/Images/flechaDerechaCatProNormal.svg";
      } else {
        if (!this.blockRight) {
          this.classflechader = "./assets/Images/FlechaDerVerde.svg";
        }
      }
    }
  }


  /**
   * Notas:
   * Metodos para activar el boton siguiente y anterior
    siguiente() {
      this.btnSiguinte = true;
      setTimeout(() => {
        this.btnSiguinte = false;
      }, 100);
    }
    anterior() {
      this.btnAnterior = true;
      setTimeout(() => {
        this.btnAnterior = false;
      }, 100);
    }
   */
}
