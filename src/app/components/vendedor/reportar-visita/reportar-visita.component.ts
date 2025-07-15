import { Component, OnInit } from "@angular/core";
import { VisitaClienteService } from "../../../services/ventas/visitas/visita-cliente.service";
import { Parametros } from "../../../class/Parametros.class";
import { Query } from "../../../class/compras/utils/query.class";
import { VisitaCliente } from "../../../class/ventas/visita/VisitaCliente.class";
import { Router } from "@angular/router";
import { SessionUser } from "../../../services/session/session.service";

@Component({
  selector: "pn-reportar-visita",
  templateUrl: "./reportar-visita.component.html",
  styleUrls: ["./reportar-visita.component.scss"]
})
export class ReportarVisitaComponent implements OnInit {
  parametros: Parametros = new Parametros();
  query: Query = new Query();
  lstVistaCliente: any[];
  visitaCliente: VisitaCliente;
  universo: any[];
  botonFiltro: String = "TODOS";
  listBotonesFiltro: any[] = [
    { index: 0, label: "TODOS", subIndice:"" },
    { index: 1, label: "FINALIZADAS", subIndice:"" },
    { index: 2, label: "NO REALIZADAS", subIndice:"" },
    { index: 3, label: "PENDIENTES", subIndice:"" },
    { index: 4, label: "REPORTADAS", subIndice:"" }
  ];

  constructor(private _visitaClienteService: VisitaClienteService, private router: Router) {}

  ngOnInit() {
    //console.log(SessionUser.getInstance().getUser().idEmpleado);

    this.parametros.idUsuario = 206;
    this._visitaClienteService
      .obtenerTodasVisitasPorSprint(this.parametros)
      .subscribe(
        data => {
          this.query.Query(data.current, ["idVisitaCliente"]);
          let punteros: any[] = this.query.getPunteros(["idVisitaCliente"]);
          let arrayVisitas: any[] = [];

          for (let i: number = 0; i < punteros.length; i++) {
            var punterosVisitas: any[] = this.query.getPunteros([punteros[i]]);
            var visita: VisitaCliente = this.query.universo[
              punterosVisitas[0]
            ] as VisitaCliente;

            visita.totalDocsCargados = 0;
            for (var j: number = 0; j < punterosVisitas.length; j++) {
              (this.query.universo[punterosVisitas[j]] as VisitaCliente)
                .solicitud.documento != null
                ? visita.totalDocsCargados++
                : 0;
            }
            arrayVisitas.push(visita);
          }

          this.lstVistaCliente = arrayVisitas;
          this.universo = arrayVisitas.slice() as any[];
          if (this.lstVistaCliente.length > 0)
            this.visitaCliente = this.lstVistaCliente[0] as VisitaCliente;

          this.query = new Query();
          this.query.Query(arrayVisitas, ["estado"]);
          this.filtrarBotonera();
        },
        error => {
          console.log(error);
        }
      );
  }

  filtrarBotonera():void {
    this.lstVistaCliente = new Array();
    var filtro:String = this.botonFiltro;
    var arrayTemp:any [] = this.universo.slice() as any[];
    if (filtro == "TODOS" )
      this.lstVistaCliente = arrayTemp;
    else {
      var punteros: any[] = this.query.getPunteros([filtro]);     
      this.lstVistaCliente = this.query.armarLista(punteros);
      
    }
  }

  itemSelected($e){
    this.botonFiltro = $e.label;
    this.filtrarBotonera();
  }

  reportarVisita($estado, i){
    if($estado == "FINALIZADAS"){  
      SessionUser.getInstance().setDataPost({data:this.lstVistaCliente[i], index:i})
      this.router.navigate(["/protected/reportarVisita/formulario"]);
    }
  }
}
