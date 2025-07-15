import { Component, Input, SimpleChanges } from '@angular/core';
import { AccountingFormatNumber2Decimal } from "../../../../pipes/accounting/accounting.pipe";


@Component({
  selector: 'pn-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.scss']
})
export class DonaComponent {

  @Input() tipoGrafica: string;
  public gamaColor: any[];
  @Input() doughnutChartLabels: any[]; /* label */
  @Input() doughnutChartData: any[]; /* valores */
  public doughnutChartType: string = 'doughnut'; /* tipo de grafica */
  public gamaGeneral = [{ backgroundColor: ["#5DBEDD", "#DCA450", "#77BFB2", "#F27663", "#E87BB7", "#C7E271", "#7971B2", "#F7DD8D", "#6AD6DD", "#DD73A5", "#C4AED6", "#77CE4E", "#78CCEF", "#ED8EA0", "#A7C699", "#B76565"] }];
  public gamaVerdevsAzul = [{ backgroundColor: ["#94BA13","#0098DA"] }];
  public gamaPrioridadRoja = [{ backgroundColor: ["#c2333f", "#c43e4f", "#c74a60", "#ca556c", "#cf627d", "#d16d89", "#d47995", "#d685a3", "#dc93b1", "#e1a2bf", "#e7b2cd", "#e9bfd6",
                                                  "#c2333f", "#c43e4f", "#c74a60", "#ca556c", "#cf627d", "#d16d89", "#d47995", "#d685a3", "#dc93b1", "#e1a2bf", "#e7b2cd", "#e9bfd6"] }];
  public gamaPrioridadNaranja = [{ backgroundColor: ["#f5ab54", "#f5aa60", "#f5ae6f", "#f6b17c", "#f7b88b", "#f3ba95", "#f8c4a2", "#f8cdb1", "#f8d4bd", "#f6dbca", "#f7e3d8", "#f4e8e1",
                                                    "#f5ab54", "#f5aa60", "#f5ae6f", "#f6b17c", "#f7b88b", "#f3ba95", "#f8c4a2", "#f8cdb1", "#f8d4bd", "#f6dbca", "#f7e3d8", "#f4e8e1"] }];
  public gamaPrioridadVerde = [{ backgroundColor: ["#37b02f", "#44b537", "#51b841", "#5cba4b", "#6bbf58", "#76c361", "#82c76c", "#8ccb75", "#97CE95", "#a4d78e", "#b1dc9c", "#c0e4ac",
                                                  "#37b02f", "#44b537", "#51b841", "#5cba4b", "#6bbf58", "#76c361", "#82c76c", "#8ccb75", "#97CE95", "#a4d78e", "#b1dc9c", "#c0e4ac"] }];
  public gamaPrioridades = [{ backgroundColor: ["#bf2932", "#f9af48", "#2eac28"] }];
  public gamaVersus = [{ backgroundColor: ["#A7C16C ", "#C06163"] }];
  public gamagris = [{ backgroundColor: ["#BCBCBC"] }];
  public listaColores = [{ backgroundColor: [] }];
  public listaColoresAux = [{ backgroundColor: [] }];

  options:any = {
   cutoutPercentage: 60,
   responsive: true,
   display: true
}

  ngOnInit() {
    /*  console.log('va entrar al metodo');
     this.cambiarDAtos(); */
//    console.log(this.doughnutChartLabels);
   }

  cambiarDAtos() {



    if (this.tipoGrafica == 'verdeVSazul') {
      this.gamaColor = this.gamaVerdevsAzul;
    }
    else if (this.tipoGrafica == 'prioridades') {
      this.gamaColor = this.gamaPrioridades;
    }
    else if (this.tipoGrafica == 'prioridadRoja') {
      this.gamaColor = this.gamaPrioridadRoja;
    }
    else if (this.tipoGrafica == 'prioridadNaranja') {
      this.gamaColor = this.gamaPrioridadNaranja;
    }
    else if (this.tipoGrafica == 'prioridadVerde') {
      this.gamaColor = this.gamaPrioridadVerde;
    }
    else if (this.tipoGrafica == 'versus') {
      this.gamaColor = this.gamaVersus;
    } else if (this.tipoGrafica == 'gris') {
      this.gamaColor = this.gamagris;
    } else {
      this.gamaColor = this.gamaGeneral;

     /*  console.log("else"); */
    }

    /* console.log(this.gamaColor); */

  }

  generarListaColores() {
    var cont: number = 0;
    //this.listaColores[0].backgroundColor = []
    this.listaColores = new Array<any>();
    this.listaColores.push(Object.assign({}, { backgroundColor: [] }));
    this.listaColoresAux = new Array<any>();
    this.listaColoresAux.push(Object.assign({}, { backgroundColor: [] }));

    if (this.tipoGrafica == "gris") {
      cont = 0;
      setTimeout(() => {
        this.clickGrav()
      }, 100)
      return;
    }
    else {
      cont = 2;
      setTimeout(()=> {
        this.clickGrav()
      },100)
    }
    if (this.doughnutChartData != undefined) {


      for (var i: number = 0; i < this.doughnutChartData.length; i++) {

        this.listaColoresAux[0].backgroundColor.push(this.gamaColor[0].backgroundColor[cont]);

        if (cont == this.gamaColor[0].backgroundColor.length - 1) {
          cont = 1;
        }
        else {
          cont = cont + 1;
        }


      }

    }

  }



  ngOnChanges(change: SimpleChanges) {
    // console.log(change);
      this.cambiarDAtos();
      this.generarListaColores();
     /*  console.log(this.listaColores); */
  }

  // events
  public chartClicked(e: any): void { /* evento al click */
    console.log(e);
  }

  public chartHovered(e: any): void { /* evento del over */
    console.log(e);
  }

  clickGrav(){
    this.listaColores = new Array<any>()
    this.listaColores = Object.assign([],this.gamaColor);
//    console.log("imprime lista" +this.listaColores);
  }



}
