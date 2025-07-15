import { Component, OnInit } from "@angular/core";
import { Parametros } from "../../class/Parametros.class";

@Component({
    selector:"pn-gestor-ruta",
    templateUrl:"./gestor-ruta.component.html",
    styleUrls:["./gestor-ruta.component.scss"]
})
export class GestorRutaComponent implements OnInit{

    vistaInicialActiva: boolean = true;
    classAsideMenu: string = "asideNormalMenu";
    ocultarAcor: boolean;
    iniciarBotonera: boolean;
    totalPendientes: number = 0;
    ocultaScroll: boolean ;
    parametros: Parametros = new Parametros();
    itemsMenu: any[] = [
      { nombre: "Asignar Ruta", tipo: "valor", valor: 0, url: "asignar-ruta" }
    ];

    //      { nombre: "Cerrar Ruta", tipo: "valor", valor: 0, url: "cerrar-ruta" },

    constructor (){}
    ngOnInit(){
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
