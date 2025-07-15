import { Component, OnInit } from "@angular/core";
import { VisitaClienteService } from "../../services/ventas/visitas/visita-cliente.service";
import { Parametros } from "../../class/Parametros.class";
import { SessionUser } from "../../services/session/session.service";

@Component({
  selector: "pn-vendedor",
  templateUrl: "./vendedor.component.html",
  styleUrls: ["./vendedor.component.scss"]
})
export class VendedorComponent implements OnInit {
  vistaInicialActiva: boolean = true;
  classAsideMenu: string = "asideNormalMenu";
  ocultarAcor: boolean;
  iniciarBotonera: boolean;
  totalPendientes: number = 0;
  ocultaScroll: boolean;
  parametros: Parametros = new Parametros();
  itemsMenu: any[] = [
    { nombre: "Requisición Móvil", tipo: "flecha", valor: 0, url: "" },
    { nombre: "Pool de Visitas", tipo: "valor", valor: 0, url: "poolVisitas" },
    { nombre: "Planificar Sprint", tipo: "valor", valor: 0, url: "planificarSprint" },
    { nombre: "Agendar Visita", tipo: "valor", valor: 0, url: "agendarVisita" },
    { nombre: "Reportar Visita", tipo: "valor", valor: 0, url: "reportarVisita" },
    { nombre: "Controlar Pendientes", tipo: "valor", valor: 0, url: "controlarPendientes" },
    { nombre: "Controlar Acciones", tipo: "valor", valor: 0, url: "controlarAcciones" }
  ];


  constructor(private _visitaClienteService: VisitaClienteService) {}

  ngOnInit() {
    
    //console.log(SessionUser.getInstance().getUser().idEmpleado);

    this.parametros.idUsuario = 206;

    this._visitaClienteService.pendientesVisitaCliente(this.parametros).subscribe(
      data => {
        console.log("Menu lateral");
        console.log(data.current);
        this.itemsMenu[1].valor = data.current[0].split("/")[1]
        this.itemsMenu[2].valor = data.current[1].split("/")[1]
        this.itemsMenu[3].valor = data.current[3].split("/")[1]
        this.itemsMenu[4].valor = data.current[5].split("/")[1]
        this.itemsMenu[5].valor = data.current[7].split("/")[1]
        this.itemsMenu[6].valor = data.current[8].split("/")[1]
      },
      error => {
        console.log(error);
      }
    );
  }

  regresarVista() {
    this.vistaInicialActiva = true;

    //this.filtrarDias('hoy');
    this.iniciarBotonera = true;
  }

  mostarOcultarAcordeon() {
    this.ocultarAcor = !this.ocultarAcor;
    if (this.ocultarAcor) {
      this.classAsideMenu = "asideOcultarMenu";
    } else {
      this.classAsideMenu = "asideMostrarMenu";
    }
  }
}
