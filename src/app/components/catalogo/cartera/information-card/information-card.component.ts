import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Cartera } from '../../../../class/catalogo/cartera.class'


@Component({
  selector: 'pn-information-card',
  templateUrl: './information-card.component.html',
  styleUrls: ['./information-card.component.scss']
})

export class InformationCardComponent implements OnInit {

  @Output() flipEvent = new EventEmitter();
  @Output() showMoreEvent = new EventEmitter();
  @Input() cartera: Cartera;
  @Input() width:number;
  @Input() heigth: number;
  @Input() Data:any[];
  @Input() folio: string="JIESACMASTER 2811171";
  @Input() nombreCartera:string="Novertis";
  @Input() factura: number=0;
  @Input() ofFact: number =0;
  @Input() pf: number =0;
  @Input() debe: number=0;
  @Input() fant: number=0;
  @Input() ofFant:number=0;
  @Input() pv:number=0;
  @Input() debemos:number=0;
  @Input() numClientes:any=0;
  @Input() dificultad: number=0;
  @Input() industria: string="farmacéutica";
  @Input() importancia:number=0;
  @Input() ruta: string="local";
  @Input() ev: string="";
  @Input() cobrador: string ="";
  @Input() esac1: string ="";
  @Input() esac2: string="";
  @Input() creador:string="";
  @Input() todos:string=""
  @Input() carteraSelected: number;
  doFlip: boolean = false


  @Input() clientes:any[]=[{
   nombre:"1",
      monto:"12500",nivel:"2000"
  },{nombre:"2",
  monto:"12500",nivel:"2000"},
  {nombre:"3",
  monto:"12500",nivel:"2000"},{nombre:"4",
  monto:"12500",nivel:"2000"},{nombre:"5",
  monto:"12500",nivel:"2000"},
  {nombre:"6",
  monto:"12500",nivel:"2000"},
  {nombre:"7",
  monto:"12500",nivel:"2000"},{nombre:"8",
  monto:"12500",nivel:"2000"},{nombre:"9",
  monto:"12500",nivel:"2000"},
  {nombre:"10",
  monto:"12500",nivel:"2000"},
  {nombre:"11",
  monto:"12500",nivel:"2000"},{nombre:"12",
  monto:"12500",nivel:"2000"},{nombre:"13",
  monto:"12500",nivel:"2000"},
  {nombre:"14",
  monto:"12500",nivel:"2000"},
  {nombre:"15",
  monto:"12500",nivel:"2000"},{nombre:"16",
  monto:"12500",nivel:"2000"},{nombre:"17",
  monto:"12500",nivel:"2000"},
  {nombre:"18",
  monto:"12500",nivel:"2000"},{nombre:"19",
  monto:"12500",nivel:"2000"},{nombre:"20",
  monto:"12500",nivel:"2000"},
  {nombre:"21",
  monto:"12500",nivel:"2000"},{nombre:"22",
  monto:"12500",nivel:"2000"},{nombre:"23",
  monto:"12500",nivel:"2000"},
  {nombre:"24",
  monto:"12500",nivel:"2000"},{nombre:"25",
  monto:"12500",nivel:"2000"},{nombre:"26",
  monto:"12500",nivel:"2000"},
  {nombre:"27",
  monto:"12500",nivel:"2000"},{nombre:"28",
  monto:"12500",nivel:"2000"},{nombre:"29",
  monto:"12500",nivel:"2000"},
  {nombre:"30",
  monto:"12500",nivel:"2000"},{nombre:"31",
  monto:"12500",nivel:"2000"},{nombre:"32",
  monto:"12500",nivel:"2000"},
  ]

   hover:Boolean = false;
   constructor() { }
   ngOnInit() {
     this.numClientes=27;
   }
   voltearTarjeta(){
     this.hover = !this.hover;
   }

  flip(nombre, folio, idCartera){
    this.flipEvent.emit({nombre, folio, idCartera});
  }

  redirect(idCartera: number){
    this.showMoreEvent.emit(idCartera)
  }
}
