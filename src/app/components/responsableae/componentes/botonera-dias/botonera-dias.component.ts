import { Component, OnInit,Output,EventEmitter, Input, SimpleChanges } from '@angular/core';


@Component({
  selector: 'pn-botonera-dias',
  templateUrl: './botonera-dias.component.html',
  styleUrls: ['./botonera-dias.component.scss']
})
export class BotoneraDiasComponent implements OnInit {

  @Output() event: EventEmitter<any> = new EventEmitter<any>();
  @Input() tHoy: number;
  @Input() tTodo: number;
  @Input() tManana: number;
  @Input() tPasadoM: number;
  @Input() tFuturo: number;
  @Input() iniciarBotonera:boolean;

  botones: any = new Array<string>(5).fill('botonesDias');

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(change: SimpleChanges){

    console.log(change);

    if(this.iniciarBotonera)
    {
      this.metodoDeDias('hoy', 0)
    }
  }


  metodoDeDias(boton: string, index){
    console.log("boton", boton );
    this.botones.fill('botonesDias');
    this.botones[index]='botonesDiasActive';
    this.event.emit(boton);
  }

}
