import { Component, OnInit, Input } from "@angular/core";
import { Chart } from "chart.js";
import { AccountingFormatNumber2Decimal } from "../../../pipes/accounting/accounting.pipe";

@Component({
  selector: "pn-donut-chart",
  templateUrl: "./donut-chart.component.html",
  styleUrls: ["./donut-chart.component.scss"]
})
export class DonutChartComponent implements OnInit {
  @Input()
  idGrafica: string = "";
  @Input()
  tipoGrafica: String;
  @Input()
  data: any;
  @Input()
  height:String = 'calc((9vh + 9vw) / 2)';
 @Input() recargarGraficas: boolean;
  data1: any = {
    titulo: "Totales",
    labels: ["ASISTENCIA", "INASISTENCIA"],
    valores: [39, 26],
    labelsExtras: ["Asistieron", "Faltaron"],
    labelsExtrasHover: ["Colaboradores"],
    valuesExtras: [39, 26],
    valuesExtrasHover: [[39], [26]]
  };
  data2: any = {
    titulo: "Totales",
    labels: [
      "OPERACIONES",
      "DIRECCION",
      "GENERAL",
      "FINANZAS",
      "COMERCIALIZACION",
      "SERVICIOS"
    ],
    valores: [54, 2, 2, 9, 15, 18],
    labelsExtras: ["Colaboradores", "Checada"],
    labelsExtrasHover: ["Colaboradores", "Checada"],
    valuesExtras: [65, 69],
    valuesExtrasHover: [[35, 39], [1, 1], [1, 1], [6, 6], [10, 10], [12, 12]]
  };
  labelsAux: any[];
  tituloAux: String;
  textosGrafica: any[] = [];
  valores: any[] = [];
  canvas: any;
  ctx: any;
  x: any = 50;
  y: any = 0;
  linea: Boolean = false;
  total: any = 0;
  coloresGrafica: any;
  coloresHover: any;

  gamaGeneral = [
    {
      start: "#5DBEDD",
      end: "#14679C"
    },
    {
      start: "#DCA450",
      end: "#C16D15"
    },
    {
      start: "#77BFB2",
      end: "#008470"
    },
    {
      start: "#F27663",
      end: "#DE3228"
    },
    {
      start: "#E87BB7",
      end: "#C1046C"
    },
    {
      start: "#C7E271",
      end: "#90BA1E"
    },
    {
      start: "#7971B2",
      end: "#312783"
    },
    {
      start: "#F7DD8D",
      end: "#EBC000"
    },
    {
      start: "#6AD6DD",
      end: "#00A4AE"
    },
    {
      start: "#DD73A5",
      end: "#A11C55"
    },
    {
      start: "#C4AED6",
      end: "#82549E"
    },
    {
      start: "#77CE4E",
      end: "#37960B"
    },
    {
      start: "#78CCEF",
      end: "#0070A0"
    },
    {
      start: "#ED8EA0",
      end: "#CA4967"
    },
    {
      start: "#A7C699",
      end: "#6E915E"
    },
    {
      start: "#B76565",
      end: "#9F1F33"
    }
  ];

  gradients = [];

  gamaGeneralHover = [
    "#5DBEDD",
    "#DCA450",
    "#77BFB2",
    "#F27663",
    "#E87BB7",
    "#C7E271",
    "#7971B2",
    "#F7DD8D",
    "#6AD6DD",
    "#DD73A5",
    "#C4AED6",
    "#77CE4E",
    "#78CCEF",
    "#ED8EA0",
    "#A7C699",
    "#B76565"
  ];

  gamaVerdevsAzul = [
    {
      start: "#94BA13",
      end: "#94BA13"
    },
    {
      start: "#0098DA",
      end: "#0098DA"
    }
  ];
  gamaVerdevsAzulHover = ["#94BA13", "#0098DA"];

  gamaPrioridadRoja = [
    {
      start: "#c2333f",
      end: "#c2333f"
    },
    {
      start: "#c43e4f",
      end: "#c43e4f"
    },
    {
      start: "#c74a60",
      end: "#c74a60"
    },
    {
      start: "#ca556c",
      end: "#ca556c"
    },
    {
      start: "#cf627d",
      end: "#cf627d"
    },
    {
      start: "#d16d89",
      end: "#d16d89"
    },
    {
      start: "#d47995",
      end: "#d47995"
    },
    {
      start: "#d685a3",
      end: "#d685a3"
    },
    {
      start: "#dc93b1",
      end: "#dc93b1"
    },
    {
      start: "#e1a2bf",
      end: "#e1a2bf"
    },
    {
      start: "#e7b2cd",
      end: "#e7b2cd"
    },
    {
      start: "#e9bfd6",
      end: "#e9bfd6"
    }
  ];
  gamaPrioridadRojaHover = [
    {
      start: "#c2333f",
      end: "#c2333f"
    },
    {
      start: "#c43e4f",
      end: "#c43e4f"
    },
    {
      start: "#c74a60",
      end: "#c74a60"
    },
    {
      start: "#ca556c",
      end: "#ca556c"
    },
    {
      start: "#cf627d",
      end: "#cf627d"
    },
    {
      start: "#d16d89",
      end: "#d16d89"
    },
    {
      start: "#d47995",
      end: "#d47995"
    },
    {
      start: "#d685a3",
      end: "#d685a3"
    },
    {
      start: "#dc93b1",
      end: "#dc93b1"
    },
    {
      start: "#e1a2bf",
      end: "#e1a2bf"
    },
    {
      start: "#e7b2cd",
      end: "#e7b2cd"
    },
    {
      start: "#e9bfd6",
      end: "#e9bfd6"
    }
  ];

  gamaPrioridadNaranja = [
    {
      start: "#f5ab54",
      end: "#f5ab54"
    },
    {
      start: "#f5aa60",
      end: "#f5aa60"
    },
    {
      start: "#f5ae6f",
      end: "#f5ae6f"
    },
    {
      start: "#f6b17c",
      end: "#f6b17c"
    },
    {
      start: "#f7b88b",
      end: "#f7b88b"
    },
    {
      start: "#f3ba95",
      end: "#f3ba95"
    },
    {
      start: "#f8c4a2",
      end: "#f8c4a2"
    },
    {
      start: "#f8cdb1",
      end: "#f8cdb1"
    },
    {
      start: "#f8d4bd",
      end: "#f8d4bd"
    },
    {
      start: "#f6dbca",
      end: "#f6dbca"
    },
    {
      start: "#f7e3d8",
      end: "#f7e3d8"
    },
    {
      start: "#f4e8e1",
      end: "#f4e8e1"
    }
  ];
  gamaPrioridadNaranjaHover = [
    "#f5ab54",
    "#f5aa60",
    "#f5ae6f",
    "#f6b17c",
    "#f7b88b",
    "#f3ba95",
    "#f8c4a2",
    "#f8cdb1",
    "#f8d4bd",
    "#f6dbca",
    "#f7e3d8",
    "#f4e8e1"
  ];

  gamaPrioridadVerde = [
    {
      start: "#37b02f",
      end: "#37b02f"
    },
    {
      start: "#44b537",
      end: "#44b537"
    },
    {
      start: "#51b841",
      end: "#51b841"
    },
    {
      start: "#5cba4b",
      end: "#5cba4b"
    },
    {
      start: "#6bbf58",
      end: "#6bbf58"
    },
    {
      start: "#76c361",
      end: "#76c361"
    },
    {
      start: "#82c76c",
      end: "#82c76c"
    },
    {
      start: "#8ccb75",
      end: "#8ccb75"
    },
    {
      start: "#97CE95",
      end: "#97CE95"
    },
    {
      start: "#a4d78e",
      end: "#a4d78e"
    },
    {
      start: "#b1dc9c",
      end: "#b1dc9c"
    },
    {
      start: "#c0e4ac",
      end: "#c0e4ac"
    }
  ];
  gamaPrioridadVerdeHover = [
    "#37b02f",
    "#44b537",
    "#51b841",
    "#5cba4b",
    "#6bbf58",
    "#76c361",
    "#82c76c",
    "#8ccb75",
    "#99d28",
    "#a4d78e",
    "#b1dc9c",
    "#c0e4ac"
  ];

  gamaPrioridades = [
    {
      start: "#bf2932",
      end: "#bf2932"
    },
    {
      start: "#f9af48",
      end: "#f9af48"
    },
    {
      start: "#2eac28",
      end: "#2eac28"
    }
  ];
  gamaPrioridadesHover = ["#bf2932", "#f9af48", "#2eac28"];

  gamaVersus = [
    {
      start: "#A7C16C",
      end: "#6F9133"
    },
    {
      start: "#C06163",
      end: "#831C1F"
    }
  ];
  gamaVersusHover = ["#A7C16C ", "#C06163"];

  gamaGris = [
    {
      start: "#bcbcbc",
      end: "#5b5b5b"
    }
  ];
  gamaGrisHover = ["#BCBCBC"];

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    for (let i = 0; i < this.data.valores.length; i++) {
      this.total += this.data.valores[i];
    }

    switch (this.tipoGrafica) {
      case "General":
        for(let i:any = 0; i < 4; i++) {
          this.gamaGeneral = this.gamaGeneral.concat(this.gamaGeneral);
          this.gamaGeneralHover = this.gamaGeneralHover.concat(
            this.gamaGeneralHover
          );
        }
        this.coloresGrafica = this.gamaGeneral;
        this.coloresHover = this.gamaGeneralHover;
        break;
      case "VerdevsAzul":
        this.coloresGrafica = this.gamaVerdevsAzul;
        this.coloresHover = this.gamaVerdevsAzulHover;
        break;
      case "PrioridadRoja":
        for (let i:any = 0; i < 4; i++) {
          this.gamaPrioridadRoja = this.gamaPrioridadRoja.concat(this.gamaPrioridadRoja);
          this.gamaPrioridadRojaHover = this.gamaPrioridadRojaHover.concat(this.gamaPrioridadRojaHover);
        }
        this.coloresGrafica = this.gamaPrioridadRoja;
        this.coloresHover = this.gamaPrioridadRojaHover;
        break;
      case "PrioridadNaranja":
        for (let i:any = 0; i < 4; i++) {
          this.gamaPrioridadNaranja = this.gamaPrioridadNaranja.concat(this.gamaPrioridadNaranja);
          this.gamaPrioridadNaranjaHover = this.gamaPrioridadNaranjaHover.concat(this.gamaPrioridadNaranjaHover);
        }
        this.coloresGrafica = this.gamaPrioridadNaranja;
        this.coloresHover = this.gamaPrioridadNaranjaHover;
        break;
      case "PrioridadVerde":
        for (let i:any = 0; i < 4; i++) {
          this.gamaPrioridadVerde = this.gamaPrioridadVerde.concat(this.gamaPrioridadVerde);
          this.gamaPrioridadVerdeHover = this.gamaPrioridadVerdeHover.concat(this.gamaPrioridadVerdeHover);
        }
        this.coloresGrafica = this.gamaPrioridadVerde;
        this.coloresHover = this.gamaPrioridadVerdeHover;
        break;
      case "Prioridades":
        this.coloresGrafica = this.gamaPrioridades;
        this.coloresHover = this.gamaPrioridadesHover;
        break;
      case "Versus":
        this.coloresGrafica = this.gamaVersus;
        this.coloresHover = this.gamaVersusHover;
        break;
      case "Gris":
        this.coloresGrafica = this.gamaGris;
        this.coloresHover = this.gamaGrisHover;
        break;
    }

    this.tituloAux = this.data.titulo;
    this.valores = this.data.valuesExtras;
    this.idGrafica += "Chart";
    console.log(this.idGrafica);
    this.canvas = document.getElementById(this.idGrafica);
    this.ctx = this.canvas.getContext("2d");
    this.textosGrafica = this.data.labelsExtras;

    Chart.defaults.global.defaultFontFamily = "Roboto";
    Chart.defaults.global.defaultFontSize = 12;
    Chart.defaults.global.animation.duration = 2100;
    Chart.defaults.global.animation.easing = "easeOutBounce";

    this.coloresGrafica.forEach( function( item ){
      var gradient = this.ctx.createLinearGradient(0, 0, 150 , 150);
      gradient.addColorStop(0, item.start);
      gradient.addColorStop(1, item.end);
      this.gradients.push(gradient);
  }.bind(this));

    let myChart = new Chart(this.ctx, {
      type: "doughnut",
      data: {
        labels: this.data.labels,
        datasets: [
          {
            label: "# of Votes",
            data: this.data.valores,
            backgroundColor: this.gradients,
            hoverBackgroundColor: this.coloresHover,
            borderWidth: 1
          }
        ]
      },
      options: {
        cutoutPercentage: 70,
        maintainAspectRatio: false,
        responsive: true,
        display: true,
        tooltips: {
          enabled: false
        },
        legend: {
          display: false
        },
        onHover: function(event, array: any[]) {
          if (array.length > 0) {
            let acumulado: any = 0;
            let pAcumulado: any = 0;
            let porcentaje: any = 0;

            porcentaje =
              (this.data.valores[array[0]._index] * 100) / this.total;
            this.data.titulo = this.tipoGrafica != "Gris" ?
              this.data.labels[array[0]._index] +
              " " +
              new AccountingFormatNumber2Decimal().transform(porcentaje) +
              "%": this.tituloAux;
            this.textosGrafica = this.data.labelsExtrasHover;
            this.valores = this.data.valuesExtrasHover[array[0]._index];
            this.linea = true;
          } else {
            this.data.titulo = this.tituloAux;
            this.textosGrafica = this.data.labelsExtras;
            this.valores = this.data.valuesExtras;
            this.linea = false;
            this.y = 0;
            this.x = 50;
          }
        }.bind(this)
      }
    });
    this.ctx.onclick;
  }
}
