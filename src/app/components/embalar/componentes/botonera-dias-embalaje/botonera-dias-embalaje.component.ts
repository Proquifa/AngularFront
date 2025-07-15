import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import {EmbalarService} from '../../../../services/embalar/embalar.service';

@Component({
  selector: 'pq-botonera-dias-embalaje',
  templateUrl: './botonera-dias-embalaje.component.html',
  styleUrls: ['./botonera-dias-embalaje.component.scss']
})
export class BotoneraDiasEmbalajeComponent implements OnInit {

    @Output() event: EventEmitter<any> = new EventEmitter<any>();
    @Output() eventHoy: EventEmitter<any> = new EventEmitter<any>();
    @Input() tHoy: number;
    @Input() tTodo: number;
    @Input() tManana: number;
    @Input() tPasadoM: number;
    @Input() tFuturo: number;
    @Input()iniciarBotonera: boolean;
  totalHoy: number = 0;
  totalTodo: number = 0;
  totalManana: number = 0;
  totalPasadoM: number = 0;
  totalFuturo: number = 0;

    botones: any = new Array<string>(5).fill('botonesDias');
  listaManana: any;
  listaHoy: any;
  listaFuturo: any;
  listaPasado: any;

    constructor(private embalarServices: EmbalarService) { }

    ngOnInit() {
      this.obtenerTotalEmbalarIndices('123');
    }

    ngOnChanges(change: SimpleChanges) {
      console.log(change);
      this.iniciarBotonera = true;
      if (this.iniciarBotonera) {
        this.metodoDeDias('hoy', 0);
      }
    }


    metodoDeDias(boton: string, index) {
      console.log("boton", boton );
      this.botones.fill('botonesDias');
      this.botones[index]='botonesDiasActive';
      this.event.emit(boton);
    }
    obtenerTotalEmbalarIndices(val: any) {
      let i: number;
      this.embalarServices.ConsultaTotalEmbalar(val).subscribe(
        data => {
          this.listaHoy = data.current.Hoy;
          this.listaManana = data.current.Mañana;
          this.listaFuturo = data.current.Futuro;
          this.listaPasado = data.current.PasadoMañana;
          if (this.listaHoy) {
            for (i = 0; i < this.listaHoy.length; i++) {
              if (this.listaHoy[i].estado === 'Por Embalar') {
                this.totalHoy += this.listaHoy[i].partidasHoy;
              }
            }
          }
          if (this.listaFuturo) {
            for (i = 0; i < this.listaFuturo.length; i++) {
              if (this.listaFuturo[i].estado === 'Por Embalar') {
                this.totalFuturo += this.listaFuturo[i].partidasFuturo;
              }
            }
          }
          if (this.listaManana) {
            for (i = 0; i < this.listaManana.length; i++) {
              if (this.listaManana[i].estado === 'Por Embalar') {
                this.totalManana += this.listaManana[i].partidasMañana;
              }
              }
            }
          if ( this.listaPasado) {
            for (i = 0; i < this.listaPasado.length; i++) {
              if (this.listaPasado[i].estado === 'Por Embalar') {
                this.totalPasadoM += this.listaPasado[i].partidasPMañana;
              }
            }
          }
          this.totalTodo = this.totalHoy + this.totalManana + this.totalPasadoM + this.totalFuturo;
          /// console.log('Valores totales', this.totalHoy,  this.totalManana , this.totalPasadoM , this.totalFuturo);
          /// this.eventHoy.emit(this.totalHoy);
        }
      );
    }

}
