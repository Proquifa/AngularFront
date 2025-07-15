import { Component, OnInit, Output,Input, EventEmitter, SimpleChanges } from '@angular/core';
import { runInThisContext } from 'vm';
import { Router } from '@angular/router';
import { InspeccionService } from '../../../../services/inspeccion/inspeccion.service';
import { PartidaInspeccion } from '../../../../class/despachos/PartidaInspeccion.class';
import { ComunService } from '../../../../services/comun/comun.service';
//Pruebas
import {Chart} from 'chart.js';
import * as accounting from 'accounting';
import { Options } from 'selenium-webdriver/chrome';
import { Subscription } from 'rxjs';
import {SessionUser} from '../../../../services/session/session.service';

@Component({
  selector: 'pq-vista-operacion-inspeccion',
  templateUrl: './vista-operacion-inspeccion.component.html',
  styleUrls: ['./vista-operacion-inspeccion.component.scss']
})
export class VistaOperacionInspeccionComponent implements OnInit {

  vistaActivaPedimento:boolean ;
  vistaIniciaInspeccion:boolean ;
  vistaInicio:boolean = true;
  @Input() partidaPrioridad:PartidaInspeccion = new PartidaInspeccion();
  @Output() iRVista: EventEmitter<any> = new EventEmitter<any>();
  @Output() actualizarDatos: EventEmitter<any> = new EventEmitter<any>();
  @Output() reiniciarVistaPrincipal: EventEmitter<any> = new EventEmitter<any>();
  @Input() objetivoDeinspeccion:number;
  @Input() piezasInspeccionadas:number;
  @Input() inspeccionDeceada:number;
  @Input() inspeccionDeceadaHastaElMomento:number;
  @Input() minimoDeInspeccion:number;
  @Input() minimaInspeccionHastaElMomento:number;
  @Input() inspector: string;
  @Input() totales_estadisticas: any;
  @Input() donaPEstadisticas:any;
  @Input() tipoGraficaEstadisticas:string;
  colorIndiceInspeccionDeceada:string= "#D0021B";
  colorMinimoInspeccion:string="#D0021B";
  subs: Subscription;
  ocultaScroll: boolean;
  vistasInspeccionFin:boolean;
  pedimentoVistaEscanear: any;
//  totales_estadisticas:any ;

  graficas :any [] = [];

  //donaPEstadisticas:any;
  lstPrioridadesEstadisticas: any[];
  filtroPE: any[] = [];
  nuevoPE: any = [];
  objetivoDeinspeccionAux:any;

  constructor(private router: Router,private comunService: ComunService,
    private _insp: InspeccionService) {
  }

  ngOnInit() {
    this.vistaIniciaInspeccion = true;
   //  Array.prototype.push.apply(this.copiaUniversoPartidasInspeccion, this.copiaUniversoPartidas);
   // console.log("la partida de inspección es: " + this.copiaUniversoPartidas);
   this.recibeTotalesInspeccion();
   this.obtenerContadorPendientes();
   this.subs = this.comunService.valueVideo
   .subscribe(
     (data) =>{
        this.ocultaScroll = data;
      });
    this.subs = this.comunService.valueTipoInspeccion
      .subscribe(
        (data) => {
         if (data) {
         this.vistaIniciaInspeccion = true;
         }
        });
    // this.subs = this.comunService.finalizar.subscribe(
    //   (data) =>{
    //      this.vistasInspeccionFin = data;
    //     if(this.vistasInspeccionFin == true && this.objetivoDeinspeccion ==0){
    //       this.recibeTotalesInspeccion();
    //     }
    //
    //  });

  }
  ngOnDestroy(){
    this.subs.unsubscribe();
  }
  ngOnChanges() {
    console.log('Soy la partida que llega --- >', this.partidaPrioridad );
  }
  // ngOnChanges(change: SimpleChanges){
  //    // Array.prototype.push.apply(this.copiaUniversoPartidas, this.copiaUniversoPartidasInspeccion);
  // }

cambioDeVista(valor:boolean){
this.vistaActivaPedimento = valor;
if(this.vistaActivaPedimento == true)
 {this.vistaIniciaInspeccion = true;
  this.vistaInicio = false;
} else {
  /*this.vistaIniciaInspeccion = false;*/
  this.vistaIniciaInspeccion = true;
   this.vistaInicio = false;
  }
}

iniciaInspeccion(valor:boolean){
if(  this.vistaActivaPedimento == true)
 {this.vistaIniciaInspeccion = true;
  this.vistaInicio = false;}
}
//
// recibePartidasApiladas(){
//   this._insp.recibePartidasApiladas().subscribe(
//     data => {
//       console.log(data);
//     },
//     error => {
//       console.log("error al recibir las partidas");
//       console.log(error);
//     }
//   );
// }


reinicioDeVista() {
  this.iRVista.emit('hola');
  this.recibeTotalesInspeccion();
  this.obtenerContadorPendientes();
  console.log("enviar reinicio");
}

recibeTotalesInspeccion() {
  this._insp.recibeTotalesInspecion(this.inspector).subscribe(
    data => {
      this.objetivoDeinspeccionAux = data.current.pzaAInspeccion;
      this.piezasInspeccionadas = data.current.total_piezasInspeccionadas;
      this.inspeccionDeceada = data.current.maxPiezasInsp;
      this.minimoDeInspeccion = data.current.piezasProm;
      if(this.piezasInspeccionadas == 0){
        this.inspeccionDeceadaHastaElMomento = -1 * this.objetivoDeinspeccionAux;
        this.minimaInspeccionHastaElMomento = -1 * this.minimoDeInspeccion
        this.colorIndiceInspeccionDeceada = "#D0021B";
        this.colorMinimoInspeccion = "#D0021B";
      }
      else{
        var  aux:number = 0;
        var  aux2:number = 0;
        aux = -1 * this.objetivoDeinspeccionAux;
        aux2 = -1 * this.minimoDeInspeccion;
        this.inspeccionDeceadaHastaElMomento = aux + this.piezasInspeccionadas;
        this.minimaInspeccionHastaElMomento = aux2 + this.piezasInspeccionadas;

        if(this.inspeccionDeceadaHastaElMomento == 0 )
        {
          this.colorIndiceInspeccionDeceada = "#FBB03B";
        }
        else if(this.objetivoDeinspeccionAux < this.inspeccionDeceadaHastaElMomento )
        {
          this.colorIndiceInspeccionDeceada = "#39B54A";
        }
        else{
          this.colorIndiceInspeccionDeceada = "#D0021B";
        }



        if(this.minimaInspeccionHastaElMomento == 0 )
        {
          this.colorMinimoInspeccion = "#FBB03B";
        }
        else if(this.objetivoDeinspeccion == 0)
        {
          this.colorMinimoInspeccion  = "#39B54A";
        }
        else{
          this.colorMinimoInspeccion = "#D0021B";
        }

      }



     /*  minimaInspeccionHastaElMomento: number = 0; */

      console.log(data);
    });

  }
  obtenerContadorPendientes(){
  this._insp.recibeNumPendientes().subscribe(
      data => {
        this.objetivoDeinspeccion = data.current;
        // if(this.objetivoDeinspeccion ==0 && this.objetivoDeinspeccion !==undefined)
        // {
        // this.reinicioDeVista();
        //  }
        console.log(this.objetivoDeinspeccion);
      },
      error => {

      }
    );
  }
  // reiniciarVistaInpecc(val){
  //   this.reiniciarVistaPrincipal.emit(val);
  // }
  // Metodo que recibe y envia el pedimento
  recibirPedimento(pedimento) {
    this.pedimentoVistaEscanear = pedimento;
  }
  /*****Actualizar los datos cuando se queda en la vista grabar******/
  actualizarD($event) {
    this.actualizarDatos.emit('val');
  }
}
