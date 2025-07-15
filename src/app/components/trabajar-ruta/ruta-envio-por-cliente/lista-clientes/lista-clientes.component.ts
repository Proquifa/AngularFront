import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {NgOnChangesFeature} from '@angular/core/src/render3';
import {EnvioPorClienteService} from '../../../../services/trabajar-ruta/envio-por-cliente.service';
import {CoreContainerComponent} from '../../../core-container/core-container.component';

@Component({
  selector: 'pn-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss']
})
export class ListaClientesComponent implements OnInit {
  @Input() cambioVista: boolean;
  @Input() totalesBarra: any;
  @Output() updateDates: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() cambiarResolucion: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() cambioVarPrincipal: EventEmitter<boolean> = new EventEmitter<boolean>();
  listaClientes: boolean;
  listaCli: any[] = [];
  listaUniverso: any[] = [];
  auxDataCurrent: any[] = [];
  idCliente: number;
  searchTerm: string;
  constructor(private _serviceEnvio: EnvioPorClienteService, private coreContainer: CoreContainerComponent) { }

  ngOnInit() {
    this.listaClientes = true;
    this.auxDataCurrent.push({idCliente: 21, nombreCliente: 'Proquifa', numPL: 2, cant: 5},
      {idCliente: 21, nombreCliente: 'Proquifa', numPL: 2, cant: 5},
      {idCliente: 21, nombreCliente: 'Proquifa', numPL: 2, cant: 5},
      {idCliente: 21, nombreCliente: 'Proquifa', numPL: 2, cant: 5},
      {idCliente: 21, nombreCliente: 'Proquifa', numPL: 2, cant: 5});
  }
  ngOnChanges() {
    this.obtenerCliente();
    if (this.cambioVista === true) {
      this.listaClientes = true;
    }
  }
  obtenerCliente() {
    this.listaCli = [];
    this.listaUniverso = [];
    this.coreContainer.openModal(0);
    this._serviceEnvio.obtenerCliente().subscribe(
      data => {
        if (data.current !== null && data.current && data.current.length > 0) {
          this.listaCli = data.current;
          this.listaUniverso = data.current;
        }
        this.coreContainer.closeModal(0);
      },
      error => {
        console.log(error);
        this.coreContainer.closeModal(0);
      }
    );
  }
  cambiarVistaPorCliente(datos) {
    this.buscar('');
    this.cambiarResolucion.emit(true);
    this.listaClientes = false;
    this.idCliente = datos.idCliente;
  }
  buscar(search) {
    const searchArrayAux: any[] = [];
    this.searchTerm = search;
    if (search === '') {
      this.listaCli = [...this.listaUniverso];
    } else {
      this.listaUniverso.forEach(folio => {
        if (folio.nombreCliente.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 ) {
          searchArrayAux.push(folio);
        }
      });
      this.listaCli = searchArrayAux;
    }
  }
  regresarVista(valor) {
    this.updateDates.emit(false);
    this.listaClientes = true;
    this.buscar('');
    this.obtenerCliente();
    this.cambioVarPrincipal.emit(true);
  }
  actualizarDatos() {
    this.buscar('');
    this.obtenerCliente();
    this.updateDates.emit(true);
  }
}
