import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pq-barra-progreso-decremental',
  templateUrl: './barra-progreso-decremental.component.html',
  styleUrls: ['./barra-progreso-decremental.component.scss']
})
export class BarraProgresoDecrementalComponent implements OnInit {
    @Input() pzasTotales : any ;
    @Input() pzasAlMomento: any;
    @Input() mensajePzas: string ;
    @Input() tipo: string;

    progreso: string;
    restante: string;

    //Booleanos
    normal: boolean;
    opaco: boolean;

  constructor() { }

  ngOnInit() {
    /*this.dibujarBarra();*/
  }
  ngOnChanges() {
    this.dibujarBarra();
  }
  dibujarBarra(){
    if (this.tipo =="opaco") {
      this.opaco = true;
      this.normal = false;
    } else if (this.tipo =="normal") {
      this.normal = true;
      this.opaco = false;
    } else {
      console.log("Error al ejecutar un tipo de barra de decremento... ");
    }

    this.progreso = this.obtenerRestante(this.pzasTotales) + "%";
    this.restante = this.obtenerPorcentaje(this.pzasTotales, this.pzasAlMomento) + "%";
  }


  //Funcion para obtener el porcentaje de progreso además de mostrar y ocultar los tooltip y textos
  obtenerPorcentaje(pzasTotales: number, pzasAlMomento: number) {
    let porcentaje: number;
    if (pzasTotales < pzasAlMomento) {
      console.log("El numero de piezas al momento es mayor que las piezas totales");
    } else if (pzasTotales == pzasAlMomento) {
      porcentaje = Math.round((pzasAlMomento * 100) / pzasTotales);
    } else{
      porcentaje = Math.round((pzasAlMomento * 100) / pzasTotales);
  }
    return porcentaje;
  }



  //Funcion para obtener porcentaje restante
  obtenerRestante(pzasTotales: number) {
    let restante = 100 - this.obtenerPorcentaje(this.pzasTotales, this.pzasAlMomento);
    return restante;
  }
}
