import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CartaPorteService} from "../../services/carta-porte/carta-porte.service";
import {Parametros} from "../../class/Parametros.class";
import {CoreContainerComponent} from "../core-container/core-container.component";

@Component({
  selector: 'pn-carta-porte',
  templateUrl: './carta-porte.component.html',
  styleUrls: ['./carta-porte.component.scss']
})
export class CartaPorteComponent implements OnInit {
  classAsideMenu: string = 'asideNormalMenu';
  ocultarAcor: boolean;
  activeMenu: boolean;
  itemsMenu: any[];
  listPendientes = [];
  mensajeros: any[] = [];
  vehicle: any[] = [];
  clients: any[] = [];
  activeMensajero = false;
  activeVehicle = false;
  activeClients = false;
  selected = -1;
  selectedMensajero = null;
  selectedVehicle = null;
  selectedClient = null;
  listClient = [];
  visorPdf: boolean = false;
  visorPdfAux: boolean = false;
  distance = 0;
  alert = false;
  msgAlert = '';
  rutaGeneral = new Parametros();
  pathGeneral = this.rutaGeneral.rutaGeneral;
  path = null;
  constructor(private router: Router, private cartaPorteServices: CartaPorteService, private coreComponent: CoreContainerComponent) { }

  ngOnInit() {
    this.itemsMenu = [{rol: 'GESTOR DE OPERACIONES', active: true,
      menu: [{nombre: 'Asignar Ruta', tipo: 'valor', valor: 0, url: 'gestorRuta', select: false},
        {nombre: 'Carta Porte', tipo: '', valor: 0, url: 'cartaPorte', select: true}]}];
    this.activeMenu = true;
    this.obtenerPendientes();
    this.obtenerCatMensajero();
    this.obtenerCatVehiculos();
  }
  mostarOcultarAcordeon() {
    this.ocultarAcor = !this.ocultarAcor;
    if (this.ocultarAcor) {
      this.classAsideMenu = 'asideOcultarMenu';
    } else {
      this.classAsideMenu = 'asideMostrarMenu';
    }
  }
  obtenerPendientes(){
    this.coreComponent.openModal(1);
    this.cartaPorteServices.obtenerPendientes().subscribe(
      data =>{
        if(data.current !== null){
          console.log(data.current);
          this.listPendientes = data.current;
          this.slopSelect(this.listPendientes[0], 0);
        }
        this.coreComponent.closeModal(1);
      },
      error => {
        this.coreComponent.closeModal(1);
        console.log("Error al recuperar los pendientes");
      }
    );
  }
  obtenerCatMensajero(){
    this.coreComponent.openModal(1);
    this.cartaPorteServices.obtenerCatMensajeros().subscribe(
      data  => {
        console.log(data.current);
        if(data.current !== null){
          const list = data.current;
          for (let i = 0; i < list.length; i++) {
            this.mensajeros.push({nombre: list[i].mensajero, key: list[i].idMensajero});
          }
          this.activeMensajero = true;
        }
        this.coreComponent.closeModal(1);
      },
      error => {
        this.coreComponent.closeModal(1);
        console.log("Error al recuperar los mensajeros");
      }
    )
  }
  obtenerCatVehiculos(){
    this.coreComponent.openModal(1);
    this.cartaPorteServices.obtenerCatVehiculos().subscribe(
      data => {
        console.log(data.current);
        if(data.current !== null){
          const list = data.current;
          for (let i = 0; i < list.length; i++) {
            this.vehicle.push({nombre: list[i].placaVM, key: list[i].idVehiculo});
          }
          this.activeVehicle = true;
        }
        this.coreComponent.closeModal(1);
      },
      error => {
        this.coreComponent.closeModal(1);
        console.log("Error al recuperar los vehiculos");
      }
    )
  }
  slopSelect(slop, index){
    this.activeClients = false;
    this.selected = index;
    if(slop.folioTimbrado){
      this.path = this.pathGeneral + 'CartaPorte/'+slop.folioTimbrado+'.pdf';
      if(!this.visorPdf){
        this.visorPdfAux = false;
        this.visorPdf = true;
      } else {
        this.visorPdf = false;
        this.visorPdfAux = true;
      }
    } else {
      this.visorPdf = false;
      this.visorPdfAux = false;
    }
    this.getCatCLients(slop.responsable);
  }
  getCatCLients(mensajero){
    this.coreComponent.openModal(1);
    this.cartaPorteServices.getCatClient(mensajero).subscribe(
      data => {
      console.log(data.current);
      if(data.current !== null){
      const list = data.current;
      this.listClient = data.current;
      for (let i = 0; i < list.length; i++) {
      this.clients.push({nombre: list[i].nombre, key: i + 1});
      }
      this.activeClients = true;
      }
        this.coreComponent.closeModal(1);
    },
error => {
      this.coreComponent.closeModal(1);
      console.log("Error al recuperar los clientes");
    }
    )
  }
  selectedOption(value, item){
    debugger;
    if(item === "mensajero"){
    this.selectedMensajero = value;
    } else if (item === "vehicle"){
      this.selectedVehicle = value;
    }  else if (item === "client"){
      this.selectedClient = value.nombre;
    }
  }
  generateCartaPorte(){
    this.coreComponent.openModal(0);
    console.log("ENtre al boton");
    let cliente = this.listClient.filter(cliente => cliente.nombre ===  this.selectedClient)[0];
    console.log(cliente);
    const data = {
      "version": "4.0",
      "tipoComprobante": "T",
      "lugaqrExpedicion": "14080",
      "cliente":cliente,
      "distRecorrida":this.distance.toString(),
      "responsable":this.listPendientes[this.selected].responsable,
      "idMensajero":this.selectedMensajero.key,
      "idVehiculo":this.selectedVehicle.key
    };
    console.log(data);
    debugger;
    this.cartaPorteServices.generateCartaPorte(data).subscribe(
      data => {
        console.log(data);
        this.alert = true;
        if(data.current > 0 ){
          this.msgAlert = 'Se Genero Correctamente';
        } else {
          this.msgAlert = 'Error al Generar';
        }
        this.coreComponent.closeModal(0);
      }, error => {
        this.coreComponent.closeModal(0);
        console.log("Erro al generar carta porte: "+error);
        this.msgAlert = 'Error al Generar';
      }
    );
  }
  closeAlert(){
    this.alert = false;
  }
}
