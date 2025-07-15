import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MaterialReceptorService} from '../../../services/material-receptor/material-receptor.service';
import {SessionUser} from '../../../services/session/session.service';
import {CoreContainerComponent} from '../../core-container/core-container.component';

@Component({
  selector: 'pn-vista-escanear-guia',
  templateUrl: './vista-escanear-guia.component.html',
  styleUrls: ['./vista-escanear-guia.component.scss']
})
export class VistaEscanearGuiaComponent implements OnInit {
  @Output() vistaP: EventEmitter<boolean> = new EventEmitter<boolean>();
  lista: any[] = []; /* [{ 'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 5},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
    {  'cliente':"PHS", "nombre": 'PQF', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 3},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
    { 'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 2},
    { 'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 21},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 4},
    {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 6}];*/
  searchTerm: string; /// Almacena la letra o letras que se van a buscar en la lista cuando se usa la barra de busqueda
  clientesSearched: any[];
  clientes: any[] = [];
  validarLista: boolean = true;
  datosProducto: any[] = [];
  listaFD: any = [];
  tipoOrden: string;
  /*Variables para mostrar imagenes de escaneo*/
  inicio: boolean;
  escaneoCorrecto: boolean;
  escaneoIncorrecto: boolean;
  fechas: any[] = [];
  /*Variables apra totales**/
  total: number = 0;
  totDir: number = 0;
  totFac: number = 0;
  totCli: number = 0;
  textoPedimento:string;
  focus: boolean;
  tipoPedimento: string;
  index: number;
  numGuiaEscanear: string;
  tipoHora: string;
  activarGuia: boolean;
  idPendiente: any;
  @ViewChild('textarea') private elementRef: ElementRef;
  constructor(private _materialReceptor: MaterialReceptorService, private coreContainer: CoreContainerComponent) { }

  ngOnInit() {
    this.obtenerLista();
    this.focus = true;
    this.inicio = true;
    /*for (let i: number = 0; i < this.lista.length; i++) {
      this.clientes.push(this.lista[i]);
    }*/
    this.tipoOrden = 'Todos';
  }
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }
  obtenerLista() {
    const idUsuario = SessionUser.getInstance().getUser().getIdEmpleado();
    this._materialReceptor.getGuias(idUsuario).subscribe(
      data => {
        console.log(data.current);
        let listaAux = data.current;
        let fecha: string;
        let fechaAux: string;
        let separador: any;
        let hora: string;
        let horaAux: string;
        for (let i = 0; i < listaAux.length; i++) {
          fechaAux = listaAux[i].fechaEnvio;
          separador = fechaAux.split('-');
          fecha = this.transform(separador[1] + '-' + separador[2] + '-' + separador[0]);
          horaAux = listaAux[i].hora;
          separador = horaAux.split(':');
          if (separador[0] >= 1 && separador[0] < 12) {
            this.tipoHora = 'AM';
          } else if (separador[0] >= 12 && separador[0] < 24) {
            this.tipoHora = 'PM';
          }
          hora = separador[0] + ':' + separador[1];
          this.fechas.push({fechaEnvio: listaAux[i].fechaEnvio , fecha : fecha, hora: hora, tipo: this.tipoHora});
        }
        this.lista = data.current;
        this.clientes = data.current;
        this.total = this.lista.length;
        if (this.lista.length === 0) {
          this.vistaP.emit(true);
        }
        // this.copiaLista(this.lista);
        this.calcularTotales(this.lista);
        this.seleccionarItem(0, this.lista[0]);
      });
  }
  copiaLista(lista) {
    this.clientes = [];
    for (let i: number = 0; i < lista.length; i++) {
      this.clientes.push(lista[i]);
    }
  }
  transform(dateToFormat: any): any {
    if (dateToFormat == undefined || dateToFormat == null) { return "Pendiente" }
    let now: Date = new Date();
    if (dateToFormat.length == 10) {
      now = new Date(dateToFormat);
    } else {
      now = new Date(dateToFormat);
    }
    let date: String;
    let mes: number = now.getMonth();
    let hora: String = now.getHours().toString().length == 1 ? "0" + now.getHours().toString() : now.getHours().toString();
    let minutos: String = now.getMinutes().toString().length == 1 ? "0" + now.getMinutes().toString() : now.getMinutes().toString();
    let hour: String = hora + ":" + minutos;
    switch (mes) {
      case 0:
        date = now.getDate() + '/Ene/' + now.getFullYear();
        break;
      case 1:
        date = now.getDate() + '/Feb/' + now.getFullYear();
        break;
      case 2:
        date = now.getDate() + '/Mar/' + now.getFullYear();
        break;
      case 3:
        date = now.getDate() + '/Abr/' + now.getFullYear();
        break;
      case 4:
        date = now.getDate() + '/May/' + now.getFullYear();
        break;
      case 5:
        date = now.getDate() + '/Jun/' + now.getFullYear();
        break;
      case 6:
        date = now.getDate() + '/Jul/' + now.getFullYear();
        break;
      case 7:
        date = now.getDate() + '/Ago/' + now.getFullYear();
        break;
      case 8:
        date = now.getDate() + '/Sep/' + now.getFullYear();
        break;
      case 9:
        date = now.getDate() + '/Oct/' + now.getFullYear();
        break;
      case 10:
        date = now.getDate() + '/Nov/' + now.getFullYear();
        break;
      case 11:
        date = now.getDate() + '/Dic/' + now.getFullYear();
        break;
      default:
        break;
    }
    return date;
  }
  calcularTotales(lista) {
    let facturas = 0;
    let clientes = 0;
    for (let i = 0; i < lista.length; i++) {
      facturas += lista[i].totalFacturas;
      clientes += lista[i].totalClientes;
    }
    this.totCli = clientes;
    this.totFac = facturas;
  }
  /// Funcion de buscar en facturacion
  buscar(search) {
    this.activarGuia = false;
    this.listaFD[this.index] = '';
    this.numGuiaEscanear = '';
    const searchArrayAux: any[] = [];
    this.searchTerm = search;
    if (search === '') {
      // this.ClientesSearched= this.clientesConsulta;
      this.lista = [...this.clientes];
      if (this.tipoOrden === 'Más Nuevos') {
        this.ordenamientoFechaTramNue(1);
      } else if (this.tipoOrden === 'Más Antiguos') {
        this.ordenamientoFechaTramAnt(1);
      }
    } else {

      this.clientes.forEach(folio => {
        if (folio.guia.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 ) {
          searchArrayAux.push(folio);
        }
      });
      if (searchArrayAux.length > 0 || this.searchTerm ) {
        this.lista = searchArrayAux;
      }
      if (this.lista.length > 0) {
        if (this.tipoOrden === 'Más Nuevos') {
          this.ordenamientoFechaTramNue(1);
        } else if (this.tipoOrden === 'Más Antiguos') {
          this.ordenamientoFechaTramAnt(1);
        }
      }
      this.validarLista = true;
      //  this.regresaConsulta.emit(searchArrayAux);
    }
  }
  /****Seleccionar lista*/
  seleccionarItem(i, item) {
    /****Activar Escaneo*/
    this.activarGuia = true;
    this.escaneoCorrecto = false;
    this.inicio = true;
    this.escaneoIncorrecto = false;
    this.elementRef.nativeElement.focus();
    /********/
    this.index = i;
    this.numGuiaEscanear = item.guia;
    this.idPendiente = item.idPendiente;
    this.tipoPedimento = item.guia;
    this.listaFD = [];
    this.listaFD = new Array(this.lista.length).fill('');
    this.listaFD[i] = 'divActive';
    this.datosProducto = this.lista[i];
    console.log('Soy clic -->', i);
  }
  ordenamientoFechaTramNue(val) {
    this.tipoOrden = 'Más Nuevos';
    if (this.lista.length > 0) {
      this.lista.sort(function (a, b) {
        if (a.fechaEnvio < b.fechaEnvio) {
          return 1;
        }
        if (a.fechaEnvio > b.fechaEnvio) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      this.configurarFecha(this.lista);
      // this.copiaLista(this.lista);
      if (val !== 1) {
        this.seleccionarItem(0, this.lista[0]);
      }
    }
  }
  ordenamientoFechaTramAnt(val) {
    this.tipoOrden = 'Más Antiguos';
    if (this.lista.length > 0) {
      this.lista.sort(function (a, b) {
        if (a.fechaEnvio > b.fechaEnvio) {
          return 1;
        }
        if (a.fechaEnvio < b.fechaEnvio) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      this.configurarFecha(this.lista);
      // this.copiaLista(this.lista);
      if (val !== 1) {
        this.seleccionarItem(0, this.lista[0]);
      }
    }
  }
  configurarFecha(lista) {
    this.fechas = [];
    let listaAux = lista;
    let fecha: string;
    let fechaAux: string;
    let separador: any;
    let hora: string;
    let horaAux: string;
    for (let i = 0; i < listaAux.length; i++) {
      fechaAux = listaAux[i].fechaEnvio;
      separador = fechaAux.split('-');
      fecha = this.transform(separador[1] + '-' + separador[2] + '-' + separador[0]);
      horaAux = listaAux[i].hora;
      separador = horaAux.split(':');
      if (separador[0] >= 1 && separador[0] < 12) {
        this.tipoHora = 'AM';
      } else if (separador[0] >= 12 && separador[0] < 24) {
        this.tipoHora = 'PM';
      }
      hora = separador[0] + ':' + separador[1];
      this.fechas.push({fechaEnvio: listaAux[i].fechaEnvio , fecha : fecha, hora: hora, tipo: this.tipoHora});
    }
  }
  /*****/
  abreCombo() {
    if (document.getElementById("section").className == "visible") {
      document.getElementById("section").className = "";
    } else {
      document.getElementById("section").className = "visible";
    }
  }
  txt(texto:string) {
    var obj: any;
    obj = new Object;
    obj.nombre = texto;
    this.textoPedimento = obj.nombre;

    console.log(this.textoPedimento);
  }

  enter() {
    let pedimento = this.textoPedimento;
    this.textoPedimento = pedimento.trim();
    if (this.textoPedimento.toLowerCase().indexOf(this.tipoPedimento.toLowerCase()) !== -1) {
      this.escaneoCorrecto = true;
      this.inicio = false;
      this.escaneoIncorrecto = false;
      this.finalizar();
    } else {
      this.escaneoCorrecto = false;
      this.inicio = false;
      this.escaneoIncorrecto = true;
      setTimeout(() => {
        this.elementRef.nativeElement.focus();
      }, 5);
    }
    this.textoPedimento = '';
  }

  finalizar() {
    const idUsuario = SessionUser.getInstance().getUser().getIdEmpleado();
    const objEnviar = {guia: this.numGuiaEscanear, idUsuario: idUsuario, idPendiente: this.idPendiente};
    this.coreContainer.openModal(0);
    this._materialReceptor.finalizar(objEnviar).subscribe(
      data => {
        if (data.current === true) {
         /* this.clientes.splice(this.index, 1);
          this.lista = [...this.clientes];
          this.fechas.splice(this.index, 1);*/
          this.obtenerLista();
          // this.copiaLista(this.lista);
        }
        this.coreContainer.closeModal(0);
      });
    this.seleccionarItem(0, this.lista[0]);
  }
}
