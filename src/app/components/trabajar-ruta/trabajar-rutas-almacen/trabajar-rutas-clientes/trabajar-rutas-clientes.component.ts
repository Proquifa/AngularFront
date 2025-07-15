import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule
} from "@angular/forms";
import { TrabajarRutasClienteService } from "./trabajar-rutas-cliente.services";
import {CoreContainerComponent} from '../../../core-container/core-container.component';

@Component({
  selector: "pn-trabajar-rutas-clientes",
  templateUrl: "./trabajar-rutas-clientes.component.html",
  styleUrls: ["./trabajar-rutas-clientes.component.scss"]
})
export class TrabajarRutasClientesComponent implements OnInit {
  ///Cambiar la pantallla
  vistaInicialActiva: boolean = true;
  ///Variables para el buscador
  arregloClientes: any[] = [];
  ///buscador
  public ClientesSearched: any[] = [];
  ////
  searchTerm: string;
  @Input() searchValue: string;
  @Output() searchTermChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() actualizarV: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() emitVistaPrincipal: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() clientesConsulta: any[] = [];
  ///
  auxDataCurrent: any[] = [];
  //////Variables para el Scroll
  ocultaScroll: boolean;
  enviaNombreCliente: string;
  enviarIdCliente:any;
  muestraArregloClientes: boolean = true;
  /////variables  para el html
  cambiaCliente: boolean = true;
  /////////Declaracion de vriables para el footer
  vistaInicialI: boolean = true; //=false;
  ////////////valiables del ts del search

  @Input()
  placeholder: string;

  constructor(private _trabajarRutasClienteService: TrabajarRutasClienteService, private coreComponent: CoreContainerComponent) {}

  ngOnInit() {
    this.infoClientes();
    this.ocultaScroll = false;
  }



  /////Metodo para volve a la vista anterior
  regresarVista() {
    this.vistaInicialActiva = true;
  }

  cliente: String = "Cliente";

  recibeBusqueda(valor: any) {
    this.arregloClientes = valor;
    console.log("Valor de valor" + valor.length);
    if (valor.length == 0) {
      this.arregloClientes = valor;
      this.muestraArregloClientes;
    } else this.arregloClientes = valor;
    this.muestraArregloClientes = false;
  }
  cambiarPantalla() {
    this.vistaInicialActiva = false;
  }

  buscar(search) {
    let searchArrayAux: any[] = [];
    this.searchTerm = search;
    if (search == "") {
      this.ClientesSearched = [...this.auxDataCurrent];
    } else {
      this.auxDataCurrent.forEach(cliente => {
        if (
          cliente.nombreCliente
            .toLowerCase()
            .indexOf(this.searchTerm.toLowerCase()) !== -1
        ) {
          searchArrayAux.push(cliente);
          this.enviarIdCliente=cliente.idCliente;
        }
      });
      this.ClientesSearched = searchArrayAux;
      this.muestraArregloClientes = false;

    }
  }
  cambiarVistaPorCliente(nombre: any, idCliente: any) {
    this.enviaNombreCliente = nombre;
    this.enviarIdCliente=idCliente;
    console.log(nombre);
    this.cambiaCliente = false;
    console.log("llego id"+ this.enviarIdCliente);

  }

  infoClientes() {
    this.coreComponent.openModal(0);
    this._trabajarRutasClienteService.infoClientes().subscribe(
      data => {
        if (data.current != '')
        {
          this.auxDataCurrent = data.current;
          console.log("/**** infoClientes ****/");
          console.log(this.auxDataCurrent);
          this.auxDataCurrent.forEach(element => {
            console.log("data");
            console.log(element);
          });
        } else {
          this.cambiaCliente = false;
          this.emitVistaPrincipal.emit(true);
        }
        this.coreComponent.closeModal(0);
      },
      error => {
        console.log(error);
        this.coreComponent.closeModal(0);
      }
    );
  }

  cerrarDetalle($event) {
    console.log("Evento cerrar");
    this.infoClientes();
    this.actualizarV.emit(true);
    if ($event === false) {
      this.cambiaCliente = true;
    }
  }

  regresarVistaClientes($result) {
    this.cambiaCliente = true;
  }

}
