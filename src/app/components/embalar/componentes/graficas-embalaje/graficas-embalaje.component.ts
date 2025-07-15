import { Component, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { PartidaInspeccion } from '../../../../class/despachos/PartidaInspeccion.class';
import { Query } from '../../../../class/compras/utils/query.class';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { CoreContainerComponent } from './../../../core-container/core-container.component';



@Component({
  selector: 'pq-graficas-embalaje',
  templateUrl: './graficas-embalaje.component.html',
  styleUrls: ['./graficas-embalaje.component.scss']
})
export class GraficasEmbalajeComponent implements OnInit {
  coreComponent: any;
  _insp: any;

  data: any = {
    // Titulo del centro de la dona
    titulo: "TOTAL EMBALAJE",
    /// titulos de los las particiones de la dona
    labels: ["POR EMBALAR", "EMBALADAS"],
    // cantidad de los datos a graficar  (total)
    valores: [10, 22],
    // bubtitulo del centro de la dona
    labelsExtras: [["Piezas"], ["Monto"]],
    /// titulo del subtutulo de particion de la dona
    labelsExtrasHover: ["Piezas","Monto"],
    /// valores del label (TRABAJO (total))
    valuesExtras: [364.50, '$7500.00'],
    // valores de los subtitulos de la particion de la dona
    valuesExtrasHover: [[243,'$5000.000'],[121.50,'$2500.00']]
  };

  dataCLiente: any = {
    // Titulo del centro de la dona
    titulo: "Dona Clientes",
    /// titulos de los las particiones de la dona
    labels: ["Centro de Estudios Científicos y Clínicos Pharma", "TRABAJADO"],// "Dato1","Dato2","Dato3","Dato4"
    // cantidad de los datos a graficar  (total)
    valores: [10, 22,5,9,14,70],
    // bubtitulo del centro de la dona
    labelsExtras: [["Piezas"], ["Monto"]],//,["Prueba1"],["Prueba2"],["Prueba3"],["Prueba4"]
    /// titulo del subtutulo de particion de la dona
    labelsExtrasHover: ["Piezas","Monto"],//,"Valor1","Valor2","Valor3","Valor4"
    /// valores del label (TRABAJO (total))
    valuesExtras: [364.50, '$7500.00'],
    ///valores de los subtitulos de la particion de la dona
    valuesExtrasHover: [[316,'$4700.000'],[121.50,'$2500.00'],[20,10],[15,5],[8,3],[10,8]]
  };



  dataPrioridades: any = {
    // Titulo del centro de la dona
    titulo: "Dona Prioridades",
    /// titulos de los las particiones de la dona
    labels: ["PRIORIDAD 2", "TRABAJADO","PRUEBA"],
    // cantidad de los datos a graficar  (total)
    valores: [10,5, 22],
    // bubtitulo del centro de la dona
    labelsExtras: [["Piezas"], ["Monto"]],//,['Prueba']
    /// titulo del subtutulo de particion de la dona
    labelsExtrasHover: ["Piezas","Monto"],//,"Dato"
    /// valores del label (TRABAJO (total))
    valuesExtras: [364.50, '$7500.00'],
    /// valores de los subtitulos de la particion de la dona
    valuesExtrasHover: [[35,'$4700.000'],[121.50,'$2500.00'],[10,52]]
  };




  dataPrioridadUno: any = {
    // Titulo del centro de la dona
    titulo: "Dona Prioridad 1",
    /// titulos de los las particiones de la dona
    labels: ["Cliente", "TRABAJADO","DAto1","Dato2","Dato3"],
    // cantidad de los datos a graficar  (total)
    valores: [10, 22,30,20,10],
    // bubtitulo del centro de la dona
    labelsExtras: [["Piezas"], ["Monto"]],
    /// titulo del subtutulo de particion de la dona
    labelsExtrasHover: ["Piezas","Monto"],
    /// valores del label (TRABAJO (total))
    valuesExtras: [364.50, '$7500.00'],
    /// valores de los subtitulos de la particion de la dona
    valuesExtrasHover: [[316,'$4700.000'],[121.50,'$2500.00'],[4,6],[12,56],[34,24]]
  };

  event: EventEmitter<any> = new EventEmitter<any>();
  tHoy: number = 0;
  tTodo: number= 0;
  tManana: number= 0;
  tPasadoM: number= 0;
  tFuturo: number = 0;
  iniciarBotonera:boolean;
  mostrarVistaInicial: boolean=false;
  // vistaInicial: boolean = false;
  // graficasE: boolean = true;
  @Output() vistaInicial: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  // @Output() graficas: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  //prueba de variables
  squery: Query = new Query();
  punterosProvee = new Array<any>();
  universoPartidas = new Array<any>();
  universoDias = new Array<any>();
  universoActual = new Array<any>();
  //Se crea esta copia del universo para mostrar la información de las partidas en la vista.
  copiaUniversoPartidas = new Array<any>();
  // classAsideMenu: string = "asideNormalMenu";


  arrayProductos: any ;
  array2: any ;
  tipoGrafica: string;
  tipoGraficaPro: string;
  tipoGraficaPrioridades: string;
  tipoGraficaP1: string;
  tipoGraficaP2: string;
  tipoGraficaP3: string;
  array3: any;
  array4: any;
  arrayValoresPro:any=10;
  arrayLabelPro:any = 10;
  arrayValoresPrioridad:any= 10;
  arrayLabelPrioridad:any;
  arrayValoresP1:any= 10;
  arrayValoresP2:any=10;
  arrayValoresP3:any=10;
  arraylabelP1:any;
  arraylabelP2:any;
  arraylabelP3:any;

  objetivoDeinspeccion:number = 0;
  piezasInspeccionadas:number = 0;
  inspeccionDeceada:number = 0;
  inspeccionDeceadaHastaElMomento:number = 0;
  minimoDeInspeccion:number = 0;
  minimaInspeccionHastaElMomento: number = 0;
  colorIndiceInspeccionDeceada:string= "#D0021B";
  colorMinimoInspeccion:string="#D0021B";
  ocultarAcorE:boolean;
  mostrarMenuRoles:boolean = true;

  inspector: string;


  partidaPrioridad:PartidaInspeccion;
  partidaPoriginal:PartidaInspeccion;
  subs: Subscription;
  ocultaScroll: boolean;
  banderaPrueba:boolean;

  botones: any = new Array<string>(5).fill('botonesDias');

  botonRegresar: boolean = true;

  @Input() copiaPartidaEmbalaje: PartidaInspeccion = new PartidaInspeccion();


  constructor() { }

  ngOnInit() {
   // this.recibePartidas();
    this.iniciarBotonera = true;
    this.filtrarDias('hoy');
  }

  ngOnChanges(change: SimpleChanges){
    console.log(change);
    this.filtrarDias('hoy');
    this.iniciarBotonera = true;
    if (this.iniciarBotonera)
    {
      this.filtrarDias('hoy');
    }
  }


  //test
  recibePartidas() {
    //this.coreComponent.openModal(0);
    this.copiaPartidaEmbalaje;
    console.log(this.copiaPartidaEmbalaje);
    this._insp.recibePartidasInspeccion().subscribe(
      data => {
        var arrayLabel = new Array<string>();
        var arrayValores = new Array<number>();
        var arrPart = new Array<PartidaInspeccion>();



        // console.log(data);

        if(data != null)
        {
          this.partidaPrioridad = new PartidaInspeccion();
          this.partidaPrioridad = Object.assign(new PartidaInspeccion, data.current[0]);
          this.partidaPoriginal = Object.assign(new PartidaInspeccion, data.current[0]);
        }



        arrPart = data.current;
        this.squery.Query(arrPart, ['idProducto'], true);
        this.punterosProvee = this.squery.getPunteros(['idProducto'], "idProducto");
        this.tTodo = data.current.length;
          this.punterosProvee.forEach(element => {
            var totalCantidad: number = 0;


            var punterosTemp = new Array<any>();
            punterosTemp = this.squery.getPunteros([element]);
          /*   console.log("valor de los punteros:" + element); */

            for (var i: number = 0; i < punterosTemp.length; i++) {
              var partTemp: PartidaInspeccion;
              partTemp = Object.assign(new PartidaInspeccion, this.squery.universo[punterosTemp[i]]);
              if (i == 0 ) {
                  partTemp.setDiasFiltro("hoy");
                  this.tHoy = this.tHoy +1;
                  if(this.tHoy >= this.tTodo ){this.tHoy = this.tTodo - this.tHoy;}
              //  this.tHoy=0;
                } else if (i == 1) {
                this.tManana = 0;
                partTemp.setDiasFiltro("manana");
                this.tManana = this.tManana +1 ;
              }
              else {
                this.tPasadoM = 0;
                partTemp.setDiasFiltro("pasado");
                this.tPasadoM = this.tPasadoM +1;
              }
              if(this.tHoy !=0 && this.tManana !=0){
                  this.universoPartidas.push(partTemp);
              }
              //else if(this.tManana >1) {this.universoPartidas.push(partTemp);}

            }
          });
          this.tTodo = this.tHoy + this.tManana;
          console.log("Valores botonera: "+this.tTodo, this.tHoy, this.tManana);
          this.iniciarBotonera = true;
        this.arraylabelP3 = new Array<string>();
        this.arrayValoresP3 = new Array<number>();

        this.arraylabelP3 = [""];
        this.arrayValoresP3 = [1];
        let test = new Array<any>();
        // console.log(this.universoPartidas);
        test = Object.assign([], this.universoPartidas);
        //Array.prototype.push.apply(this.copiaUniversoPartidas, this.universoPartidas);
        // this.copiaUniversoPartidas = Object.assign([], this.universoPartidas);

       this.coreComponent.closeModal(0);
      },
      error => {
        console.log("error inspeccion");
        console.log(error);
        //terminar loading false
        this.coreComponent.closeModal(0);
      }
    );
  }


  filtrarDias(dia: string) {
    // console.log("llego:" + dia);
    var sq: Query = new Query();
    var punterosDias = new Array<number>();
    var arrayLabel = new Array<string>();
    var arrayValores = new Array<number>();
    this.universoActual = new Array<PartidaInspeccion>();

    if(dia != "todo")
    {
      sq.Query(this.universoPartidas, ['diasFiltro'], true);
      punterosDias = sq.getPunteros([dia]);
      if(punterosDias.length>0){

        punterosDias.forEach(element => {
          // /* for (var i: number = 0; i < posicion.length; i++) {  */
            var partTemp: PartidaInspeccion;
            partTemp = Object.assign(new PartidaInspeccion, sq.universo[element]);
            this.universoActual.push(partTemp);
          /* } */
        });

        this.tipoGrafica = 'verdeVSazul';
        this.tipoGraficaP1 = 'prioridadRoja';
        this.tipoGraficaP2 = 'prioridadNaranja';
        this.tipoGraficaP3 = 'prioridadVerde';
        this.filtradoDeProductos();
        this.filtradoProveedores();
        this.filtrarPrioridades();
        this.operacionesPrioridades();
      }
      else {
        console.log("entra gris");
        this.tipoGrafica = 'gris';
        this.tipoGraficaPro = 'gris';
        this.tipoGraficaPrioridades = 'gris';
        this.tipoGraficaP1 = 'gris';
        this.tipoGraficaP2 = 'gris';
        this.tipoGraficaP3 = 'gris';
        this.arrayProductos = new Array<number>();
        this.array2 = new Array<number>();
        this.arrayLabelPro = new Array<string>();
        this.arrayValoresPro = new Array<number>();
        this.arrayLabelPrioridad = new Array<string>();
        this.arrayValoresPrioridad = new Array<number>();

        this.arrayValoresP2 = new Array<string>();
        this.arraylabelP2 = new Array<number>();
        this.arrayValoresP3 = new Array<string>();
        this.arraylabelP3 = new Array<number>();

        arrayLabel.push("hola");
        arrayValores.push(5);
        Array.prototype.push.apply(this.arrayProductos, arrayLabel);
        Array.prototype.push.apply(this.array2, arrayValores);
        Array.prototype.push.apply(this.arrayLabelPro, arrayLabel);
        Array.prototype.push.apply(this.arrayValoresPro, arrayValores);
        Array.prototype.push.apply(this.arrayLabelPrioridad, arrayLabel);
        Array.prototype.push.apply(this.arrayValoresPrioridad, arrayValores);

       Array.prototype.push.apply(this.arrayValoresP2, arrayValores);
       Array.prototype.push.apply(this.arraylabelP2, arrayLabel);
       Array.prototype.push.apply(this.arrayValoresP3, arrayValores);
       Array.prototype.push.apply(this.arraylabelP3, arrayLabel);


      }
    }else{
      this.tipoGraficaP1 = 'prioridadRoja';
      this.tipoGraficaP2 = 'prioridadNaranja';
      this.tipoGraficaP3 = 'prioridadVerde';
      this.universoActual = new Array<any>()
      this.universoActual = Object.assign([],this.universoPartidas);
        this.filtradoDeProductos();
        this.filtradoProveedores();
        this.filtrarPrioridades();
        this.operacionesPrioridades();
    }

    this.iniciarBotonera = false;

  }

  filtradoDeProductos() {
    var sq: Query = new Query();
    var puntem = new Array<any>();
    var punterosProd = new Array<any>();
    var arrayLabel = new Array<string>();
    var arrayValores = new Array<number>();
    var contArribados: number = 0;
    var contNoArribados:number = 0;

    if(this.universoActual.length > 0)
    {
      this.tipoGrafica = "verdeVSazul";
      sq.Query(this.universoActual, ['estado'], true);
      punterosProd = sq.getPunteros(['estado'], "estado");
      this.arrayProductos = new Array<string>();
      this.array2 = new Array<number>();
      punterosProd.forEach(element => {
        var cantidad = 0;
        puntem = sq.getPunteros([element]);
        for (var i: number = 0; i < puntem.length; i++) {
          var partTemp: PartidaInspeccion;
          partTemp = Object.assign(new PartidaInspeccion, sq.universo[puntem[i]]);

          if(partTemp.getEstado() == 'En inspección')
          contArribados = contArribados +1;

          else
          contNoArribados = contNoArribados + 1;
        }

        arrayValores.push(contArribados);
        arrayValores.push(contNoArribados);
        arrayLabel.push("Arribados");
        arrayLabel.push("No Arribados");
      });

      Array.prototype.push.apply(this.arrayProductos, arrayLabel);
      Array.prototype.push.apply(this.array2, arrayValores);
    }
    else{
      this.arrayLabelPro = new Array<string>();
      this.arrayValoresPro = new Array<number>();
        this.tipoGrafica = "gris";
        this.tipoGraficaPro = 'gris';
        arrayValores.push(1);
        arrayLabel.push("");
        Array.prototype.push.apply(this.arrayProductos, arrayLabel);
        Array.prototype.push.apply(this.array2, arrayValores);
        Array.prototype.push.apply(this.arrayLabelPro, arrayLabel);
        Array.prototype.push.apply(this.arrayValoresPro, arrayValores);
    }


  }

  filtradoProveedores(){

    var sq: Query = new Query();
    var puntem = new Array<any>();
    var punterosProd = new Array<any>();
    var arrayLabel = new Array<string>();
    var arrayValores = new Array<number>();


    this.arrayLabelPro = new Array<string>();
    this.arrayValoresPro = new Array<number>();
    if(this.universoActual.length > 0)
    {
      this.tipoGraficaPro = "general";
      sq.Query(this.universoActual, ['idProveedor'], true);
      punterosProd = sq.getPunteros(['idProveedor'], "idProvedor");
     /*  this.arrayLabelPro = new Array<string>();
      this.arrayValoresPro = new Array<number>(); */
      punterosProd.forEach(element => {
        var cantidad = 0;
        puntem = sq.getPunteros([element]);
        for (var i: number = 0; i < puntem.length; i++) {
          cantidad = cantidad + 1;
        }

        arrayValores.push(cantidad);
        arrayLabel.push(element);

      });
      Array.prototype.push.apply(this.arrayLabelPro, arrayLabel);
      Array.prototype.push.apply(this.arrayValoresPro, arrayValores);
    }
    else{
      this.tipoGraficaPro = "gris";
      arrayValores.push(1);
      arrayLabel.push("");
      Array.prototype.push.apply(this.arrayLabelPro, arrayLabel);
      Array.prototype.push.apply(this.arrayValoresPro, arrayValores);
    }




  }


  filtrarPrioridades() {

    var sq: Query = new Query();
    var puntem = new Array<any>();
    var punterosPrio = new Array<any>();
    var arrayLabel = new Array<string>();

    var arrayValores = new Array<number>();


    if (this.universoActual.length > 0) {
      this.tipoGraficaPrioridades = "prioridades";
      sq.Query(this.universoActual, ['prioridad'], true);
      punterosPrio = sq.getPunteros(['prioridad'], "prioridad");
      this.arrayLabelPrioridad = new Array<string>();
      this.arrayValoresPrioridad = new Array<number>();
      punterosPrio.forEach(element => {
        var cantidad = 0;
        puntem = sq.getPunteros([element]);
        for (var i: number = 0; i < puntem.length; i++) {
          cantidad = cantidad + 1;
        }

        arrayValores.push(cantidad);
        arrayLabel.push(element);
      });

      Array.prototype.push.apply(this.arrayLabelPrioridad, arrayLabel);
      Array.prototype.push.apply(this.arrayValoresPrioridad, arrayValores);
    }
    else{
      this.tipoGraficaPrioridades = "gris";
      arrayValores.push(1);
      arrayLabel.push("");
      Array.prototype.push.apply(this.arrayLabelPrioridad, arrayLabel);
      Array.prototype.push.apply(this.arrayValoresPrioridad, arrayValores);
    }


  }

  operacionesPrioridades(){
    console.log("obterner graficas de diferente prioridad");
    var sq: Query = new Query();
    var puntem = new Array<any>();
    var punterosPrio = new Array<any>();
    var punteroP1 = new Array<any>();
    var punteroP2 = new Array<any>();
    var punteroP3 = new Array<any>();
    var arrayLabel = new Array<string>();
    var arrayValores = new Array<number>();
    var listaAux = new Array<any>();
    var punterosAux = new Array<any>();
    var sqAux: Query = new Query();
    this.arraylabelP1 = new Array<string>();
    this.arrayValoresP1 = new Array<number>();
    this.arraylabelP2 = new Array<string>();
    this.arrayValoresP2 = new Array<number>();
    this.arraylabelP3 = new Array<string>();
    this.arrayValoresP3 = new Array<number>();
    if (this.universoActual.length > 0) {
      sq.Query(this.universoActual, ['prioridad'], true);
      punterosPrio = sq.getPunteros(['prioridad'], "prioridad");

      punteroP1 = sq.getPunteros(['p1']);
      if(punteroP1.length > 0)
      {
        for (var i: number = 0; i < punteroP1.length; i++) {
          var partTemp: PartidaInspeccion;
          partTemp = Object.assign(new PartidaInspeccion, sq.universo[punteroP1[i]]);
          listaAux.push(partTemp);
        }

        sqAux.Query(listaAux, ['idProducto'], true);
        punterosAux = sqAux.getPunteros(['idProducto'], "idProducto");

        if(punterosAux.length > 0)
        {
          for (var i: number = 0; i < punterosAux.length; i++) {
            punterosAux.forEach(element => {
              puntem = sqAux.getPunteros([element]);
              var cantidad = 0;
              for (var i: number = 0; i < puntem.length; i++) {
                cantidad = cantidad + 1;
              }
              arrayValores.push(cantidad);
               arrayLabel.push(element);
            });

          }
          Array.prototype.push.apply(this.arraylabelP1, arrayLabel);
          Array.prototype.push.apply(this.arrayValoresP1, arrayValores);
        }

      }
      else{
        this.tipoGraficaP1 = "gris";
      }
      punteroP2 = sq.getPunteros(['P2']);
      if(punteroP2.length > 0)
      {
        for (var i: number = 0; i < punteroP2.length; i++) {
          var partTemp: PartidaInspeccion;
          partTemp = Object.assign(new PartidaInspeccion, sq.universo[punteroP2[i]]);
        }

        sqAux.Query(listaAux, ['idProducto'], true);
        punterosAux = sqAux.getPunteros(['idProducto'], "idProducto");

        if(punterosAux.length > 0)
        {
          for (var i: number = 0; i < punterosAux.length; i++) {
            punterosAux.forEach(element => {
              puntem = sqAux.getPunteros([element]);
              var cantidad = 0;
              for (var i: number = 0; i < puntem.length; i++) {
                cantidad = cantidad + 1;
              }
              arrayValores.push(cantidad);
               arrayLabel.push(element);
            });

          }
          Array.prototype.push.apply(this.arraylabelP2, arrayLabel);
          Array.prototype.push.apply(this.arrayValoresP2, arrayValores);
        }

      }
      else{
        var arrayLabel = new Array<string>();
        var arrayValores = new Array<number>();
        arrayLabel.push("");
        arrayValores.push(1);
        Array.prototype.push.apply(this.arraylabelP2, arrayLabel);
        Array.prototype.push.apply(this.arrayValoresP2, arrayValores);
        this.tipoGraficaP2 = "gris";
      }
      punteroP3 = sq.getPunteros(['P3']);
      if(punteroP3.length > 0)
      {
        for (var i: number = 0; i < punteroP3.length; i++) {
          var partTemp: PartidaInspeccion;
          partTemp = Object.assign(new PartidaInspeccion, sq.universo[punteroP3[i]]);
        }


        sqAux.Query(listaAux, ['idProducto'], true);
        punterosAux = sqAux.getPunteros(['idProducto'], "idProducto");

        if(punterosAux.length > 0)
        {
          for (var i: number = 0; i < punterosAux.length; i++) {
            punterosAux.forEach(element => {
              puntem = sqAux.getPunteros([element]);
              var cantidad = 0;
              for (var i: number = 0; i < puntem.length; i++) {
                cantidad = cantidad + 1;
              }
              arrayValores.push(cantidad);
               arrayLabel.push(element);
            });

          }
          Array.prototype.push.apply(this.arraylabelP3, arrayLabel);
          Array.prototype.push.apply(this.arrayValoresP3, arrayValores);
        }



      }
      else{
        var arrayLabel = new Array<string>();
        var arrayValores = new Array<number>();
        arrayLabel.push("");
        arrayValores.push(1);
        Array.prototype.push.apply(this.arraylabelP3, arrayLabel);
        Array.prototype.push.apply(this.arrayValoresP3, arrayValores);
        this.tipoGraficaP3 = "gris";
      }


    }
    else{
      this.tipoGraficaP1 = "gris";
      this.tipoGraficaP2 = "gris";
      this.tipoGraficaP3 = "gris";
      arrayValores.push(1);
      arrayLabel.push("");
      Array.prototype.push.apply(this.arrayValoresP1, arrayLabel);
      Array.prototype.push.apply(this.arrayValoresP1, arrayValores);
      Array.prototype.push.apply(this.arrayValoresP2, arrayLabel);
      Array.prototype.push.apply(this.arrayValoresP2, arrayValores);
      Array.prototype.push.apply(this.arrayValoresP3, arrayLabel);
      Array.prototype.push.apply(this.arrayValoresP3, arrayValores);
    }

  }
  //fin Test
  regresarVistaI(){
  console.log("entro Metodo Graficas ");
    // let ocultarGraficas = false;
    // this.filtrarDias('hoy');
    this.mostrarVistaInicial=!this.mostrarVistaInicial;
    this.vistaInicial.emit(this.mostrarVistaInicial);
    // this.graficas.emit(ocultarGraficas);
  }



}
