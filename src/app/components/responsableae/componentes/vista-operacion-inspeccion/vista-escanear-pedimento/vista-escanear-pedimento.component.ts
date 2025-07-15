import { Component, OnInit,Input,EventEmitter,Output, ViewChild, ElementRef } from '@angular/core';
import {posix} from 'path';

@Component({
  selector: 'pn-vista-escanear-pedimento',
  templateUrl: './vista-escanear-pedimento.component.html',
  styleUrls: ['./vista-escanear-pedimento.component.scss']
})
export class VistaEscanearPedimentoComponent implements OnInit {

  @ViewChild('textarea') private elementRef: ElementRef;

  @Output() event: EventEmitter<any> = new EventEmitter<any>();
  @Input() pedimento: any;
  textoPedimento:string;
  vistaInicioInspeccionActiva:boolean ;
  activarPopError: boolean;
  focus:boolean = true;
  mensaje: string;
  pedimentoValidar: string;
  constructor() { }

  ngOnInit() {
    this.focus = true;
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }
  txt(texto:string){
    var obj: any;
    obj = new Object;
    obj.nombre = texto;
    this.textoPedimento = "[" + obj.nombre + "]";

    console.log(this.textoPedimento);
  }

/*  enter() {
    console.log("llega enter" + this.textoPedimento);
    if (this.textoPedimento.length > 1) {
       this.vistaInicioInspeccionActiva = true;
     }
    this.event.emit(this.vistaInicioInspeccionActiva);
  }*/
/*NUEVA OPCIÓN DE ENTER */
  enter() {
    this.pedimentoValidar = this.pedimento;
    // let pedimentoAux: [];
    // let pedimentoVer: string;
    // pedimentoAux = this.textoPedimento.trim();

    let pedimentoVer = this.textoPedimento.split(/\D/);
    if (pedimentoVer[0].length > 11) {
      this.textoPedimento = pedimentoVer[0].trim().substring(0, 11);
    } else {
      this.textoPedimento = pedimentoVer[0].trim();
    }
    // this.textoPedimento = pedimentoAux;
    // console.log("llega enter" + this.textoPedimento);
    let pedimentoAux = this.pedimentoValidar.split(' ');
    this.pedimentoValidar = pedimentoAux[0] + pedimentoAux[1];
    console.log("llega enter" + this.textoPedimento);
    if (this.textoPedimento.length > 1) {
      if (this.textoPedimento === this.pedimentoValidar) {
        this.vistaInicioInspeccionActiva = true;
      } else {
        this.mensaje = 'Pedimento incorrecto';
        this.activarPopError = true;
      }
    }
    this.textoPedimento = "";
    this.event.emit(this.vistaInicioInspeccionActiva);
  }
  cerrarAlert($event) {
    this.activarPopError = false;
    this.elementRef.nativeElement.focus();
  }
}
