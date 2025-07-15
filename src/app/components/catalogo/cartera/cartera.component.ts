import { Component, OnInit, OnDestroy } from '@angular/core'
import { Http } from '@angular/http'
import { Router } from '@angular/router'
import { CatalogoService } from '../../../services/catalogo/catalogo.service'
import { FilterMenuComponent } from '../../shared/filter-menu/filterMenu.component'
import { Cartera } from '../../../class/catalogo/cartera.class'
import { Cliente } from '../../../class/catalogo/cliente.class'
import { CoreContainerComponent } from '../../core-container/core-container.component'

@Component({
  selector: 'pn-cartera',
  templateUrl: './cartera.component.html',
  styleUrls: ['./cartera.component.scss']
})
export class CarteraComponent implements OnInit, OnDestroy {

  private POSICION_PUBLICADAS: number = 0
  private POSICION_BORRADORES: number = 1
  private PUBLICADAS: boolean = true
  private BORRADORES: boolean = false
  public filtros:Array<any>
  public clientes: any[] = [];
  public niveles: any[] = []
  public rutas: any[] = []
  public industrias: any[] = []
  public esacs: any[] = []
  public evs: any[] = []
  public evts: any[] = []
  public cobradores: any[] = []
  public carteras: any[] = []
  public mensajeros: any[] = []
  public carterasDisplay: any[] = []
  public totalCarteras: number;
  public linksCarteras: any[] = [
    {label: 'Clientes', path: '/protected/catalogo/clientes'},
    {label: 'Carteras', path: '/protected/catalogo/clientes/carteras'},
  ]
  public homePath:string = '/protected/catalogo'
  public lstItems:string[] = ['Aplicadas', 'Borradores']
  public searchValue: string = ''
  public esPublicada: boolean = true;
  public filterSelected = {index: 0, value: 'TODOS', name: 'TODOS'};
  public idCarteraSelected = 0;
  public carterasPorFila: number;
  public residuoParaDefinirFila = 0;
  public idBusquedaTimeout;

  constructor(private catalogoService: CatalogoService, private http: Http, private router: Router, private coreContainer: CoreContainerComponent){
  }

  selectWallet(idCartera){
    this.router.navigate(['/protected/catalogo/clientes/carteras', idCartera])
  }

  goToNewWallet(){
    this.router.navigate(['/protected/catalogo/clientes/carteras/edit/', 0]);
  }

  ngOnDestroy(){
    window.removeEventListener('resize', this.onResizeReference)
  }

  onResize(){
    this.cambiarNumeroCarteras()
  }

  onResizeReference = this.onResize.bind(this)
  ngOnInit(){

    this.coreContainer.openModal(0);
    this.cambiarNumeroCarteras()
    window.addEventListener('resize', this.onResizeReference)

    this.catalogoService.obtenerCarterasPorUsuario()
    .subscribe( data => {
      this.clientes = data.current;
      this.clientes.map( clienteData => {
        this.getFilters(clienteData)
        //Está pendiente el filtro de ejecutivoVentaTelefonica (EVT)
        this.defineCartera(clienteData)
      })
      let newArr = this.filterCarteras(this.searchValue, this.esPublicada, this.filterSelected);
      this.carterasDisplay = newArr
      this.totalCarteras = this.carterasDisplay.length;
      this.coreContainer.closeModal(0);
    })
  }

  onClicked(){
    console.log('botón nueva Cartera clicked!!!')
  }

  onRadioChange(value){
    this.esPublicada = value === this.POSICION_PUBLICADAS ? this.PUBLICADAS : this.BORRADORES
    let newArr = this.filterCarteras(this.searchValue, this.esPublicada, this.filterSelected);
    this.carterasDisplay = newArr
    this.totalCarteras = this.carterasDisplay.length;
  }

  changeText(value: string){
    this.searchValue = value.toLowerCase()
    if(this.idBusquedaTimeout){
      clearTimeout(this.idBusquedaTimeout)
    }
    this.idBusquedaTimeout = setTimeout(() => {
      let newArr = this.filterCarteras(this.searchValue, this.esPublicada, this.filterSelected);
      this.carterasDisplay = newArr
      this.totalCarteras = this.carterasDisplay.length;
    }, 700)
  }

  filterCarteras(searchValue:string, aplicadas:boolean, filterMenu: any = {name: 'TODOS'}){
    return this.carteras.filter( cartera => {
      let clientesFilter = cartera.clientes.filter( cliente => {
        if (filterMenu.name === 'nivelIngreso'){
          return (
            (cliente.nombre.toLowerCase().startsWith(this.searchValue) || cliente.nombre.toLowerCase().endsWith(this.searchValue) || cliente.nombre.toLowerCase() === this.searchValue) && cliente[filterMenu.name] === filterMenu.value
          )
        }
        return (
          cliente.nombre.toLowerCase().startsWith(this.searchValue) || cliente.nombre.toLowerCase().endsWith(this.searchValue) || cliente.nombre.toLowerCase() === this.searchValue
        )
      })
      if (filterMenu.name !== 'nivelIngreso' && filterMenu.name !== FilterMenuComponent.TODOS.label){
        return clientesFilter.length !== 0 && cartera.esPublicada() === aplicadas && cartera[filterMenu.name] === filterMenu.value
      }
      return clientesFilter.length !== 0 && cartera.esPublicada() === aplicadas
    })
  }

  cambiarNumeroCarteras(){
    if(document.body.clientWidth < 1500){
      this.carterasPorFila = 3
      this.residuoParaDefinirFila = 1
    } else if (document.body.clientWidth > 2175){
      this.carterasPorFila = 5
      this.residuoParaDefinirFila = 2
    } else {
      this.carterasPorFila = 4
      this.residuoParaDefinirFila = 2
    }
  }

  getOptions(event){
    this.filterSelected = this.selectFilterMenu(event)
    let newArr = this.filterCarteras(this.searchValue, this.esPublicada, this.filterSelected);
    this.carterasDisplay = newArr
    this.totalCarteras = this.carterasDisplay.length;
  }

  selectFilterMenu(event){
    let attributeForFilter = {
      name: 'TODOS',
      value : event.valor,
      index: event.index
    };
    switch(event.opcion){
      case FilterMenuComponent.TODOS.label:
        break;
      case FilterMenuComponent.ESAC.label:
        attributeForFilter.name = 'esac'
        break;
      case FilterMenuComponent.EVT.label:
        attributeForFilter.name = 'evt'
        break;
      case FilterMenuComponent.EV.label:
        attributeForFilter.name = 'ev'
        break;
      case FilterMenuComponent.COBRADOR.label:
        attributeForFilter.name = 'cobrador'
        break;
      case FilterMenuComponent.COBRADOR.label:
        attributeForFilter.name = 'mensajero'
        break;
      case FilterMenuComponent.INGRESO.label:
        attributeForFilter.name = 'nivelIngreso'
        break;
      case FilterMenuComponent.RUTA.label:
        attributeForFilter.name = 'ruta'
        break;
      case FilterMenuComponent.INDUSTRIA.label:
        attributeForFilter.name = 'industria'
        break;
      case FilterMenuComponent.MENSAJERO.label:
        attributeForFilter.name = "mensajero"
        break;
    }
    return attributeForFilter
  }


  onSelectedCartera($event){
    this.idCarteraSelected = $event
    if($event.idCartera !== 0 && $event.idCartera !== this.idCarteraSelected){
      if(this.linksCarteras.length === 2){
        this.linksCarteras.push({label: ($event.nombre ? $event.nombre : 'ND')+' · '+($event.folio ? $event.folio: ''), path: '/protected/catalogo/clientes/carteras'})
      } else {
        this.linksCarteras = [...this.linksCarteras.slice(0,2),{label: ($event.nombre ? $event.nombre : 'ND')+' · '+($event.folio ? $event.folio: ''), path: '/protected/catalogo/clientes/carteras'}]
      }
      this.idCarteraSelected = $event.idCartera
    } else {
      this.idCarteraSelected = 0;
      this.linksCarteras = [...this.linksCarteras.slice(0,2)]
    }
  }

  getFilters(clienteData: any){
    if(!this.niveles.find(ingreso =>  ingreso.name === clienteData.nivelIngreso)){
      this.niveles.push({name:clienteData.nivelIngreso, action:"none"})
    }
    if( clienteData.ruta && !this.rutas.find(ruta =>  ruta.name === clienteData.ruta) && clienteData.ruta !== '--NINGUNA--'){
      this.rutas.push({name:clienteData.ruta, action:"none"})
    }
    if(clienteData.industria && !this.industrias.find(industria =>  industria.name === clienteData.industria) && clienteData.industria !== '--NINGUNO--'){
      this.industrias.push({name:clienteData.industria, action:"none"})
    }
    if(clienteData.cart_nombreEsac && !this.esacs.find(esac =>  esac.name === clienteData.cart_nombreEsac) && clienteData.cart_nombreEsac !== '--NINGUNO--'){
      this.esacs.push({name:clienteData.cart_nombreEsac, action:"none"})
    }
    if(clienteData.cart_nombreCobrador && !this.cobradores.find(cobrador =>  cobrador.name === clienteData.cart_nombreCobrador) && clienteData.cart_nombreCobrador !== '--NINGUNO--'){
      this.cobradores.push({name:clienteData.cart_nombreCobrador, action:"none"})
    }
    if(clienteData.cart_nombreEv && !this.evs.find(ev =>  ev.name === clienteData.cart_nombreEv) && clienteData.cart_nombreEv !== '--NINGUNO--'){
      this.evs.push({name:clienteData.cart_nombreEv, action:"none"})
    }
    if(clienteData.cart_nombreEVT && !this.evts.find(evt =>  evt.name === clienteData.cart_nombreEVT) && clienteData.cart_nombreEVT !== '--NINGUNO--'){
      this.evts.push({name:clienteData.cart_nombreEVT, action:"none"})
    }
    if(clienteData.cart_nombreMensajero && !this.mensajeros.find(mensajero =>  mensajero.name === clienteData.cart_nombreMensajero) && clienteData.cart_nombreMensajero !== '--NINGUNO--'){
      this.mensajeros.push({name:clienteData.cart_nombreMensajero, action:"none"})
    }
    this.filtros = [
      {
        ...FilterMenuComponent.TODOS
      },
      {
        ...FilterMenuComponent.ESAC,
        hasOptions: this.esacs.length > 0,
        options: this.esacs
      },
      {
        ...FilterMenuComponent.EVT,
        hasOptions: this.evts.length > 0,
        options: this.evts
      },
      {
        ...FilterMenuComponent.EV,
        hasOptions: this.evs.length > 0,
        options: this.evs
      },
      {
        ...FilterMenuComponent.COBRADOR,
        hasOptions: this.cobradores.length > 0,
        options: this.cobradores
      },
      {
        ...FilterMenuComponent.MENSAJERO,
        hasOptions: this.mensajeros.length > 0,
        options: this.mensajeros
      },
      {
        ...FilterMenuComponent.INGRESO,
        hasOptions: this.niveles.length > 0,
        options: this.niveles
      },
      {
        ...FilterMenuComponent.RUTA,
        hasOptions: this.rutas.length > 0,
        options: this.rutas
      },
      {
        ...FilterMenuComponent.INDUSTRIA,
        hasOptions: this.industrias.length > 0,
        options: this.industrias
      }
    ]
  }

  defineCartera(clienteData:any){
    let cartera;
    let index = this.carteras.findIndex( cartera => (cartera.getIdCartera() === clienteData.idCartera));
    if(index === -1){
      cartera = new Cartera();
      cartera.setIdCartera(clienteData.idCartera)
      cartera.setNombreCartera(clienteData.cart_nombre)
      cartera.setArea(clienteData.area)
      cartera.setRuta(clienteData.ruta)
      cartera.setIndustria(clienteData.industria)
      cartera.setEstrella(cartera.getEstrella() || clienteData.importancia)
      cartera.setTriangulo(cartera.getTriangulo() || clienteData.dificultad)
      cartera.setFolio(clienteData.folio)
      cartera.setEsac(clienteData.cart_nombreEsac)
      cartera.setEv(clienteData.cart_nombreEv)
      cartera.setEvt(clienteData.cart_nombreEVT)
      cartera.setCobrador(clienteData.cart_nombreCobrador)
      cartera.setMensajero(clienteData.cart_nombreMensajero)
      cartera.setElaboro(clienteData.cart_nombreElaboro)
      cartera.setNumeroClientes(1)
      cartera.setFacturacionActual(clienteData.cli_facturacionAct)
      cartera.setFacturacionAnterior(clienteData.cli_facturacionAnt)
      cartera.setObjetivoFundamental(clienteData.cli_monto_ObjetivoFundamental)
      cartera.setObjetivoDeseado(clienteData.cli_monto_ObjetivoDeseado)
      cartera.setProyeccionVenta(clienteData.cli_proyeccionVenta)
      cartera.setPromedioFacturacion(clienteData.cli_promedioFacturacion)
      cartera.setDebemos(clienteData.cli_debemos)
      cartera.setDebe(clienteData.cli_deben)
      cartera.setPublicada(clienteData.cart_publicada)
      var cliente = new Cliente()
      cliente.setId(clienteData.idCliente)
      cliente.setNombre(clienteData.nombre)
      cliente.setNivelIngreso(clienteData.nivelIngreso)
      cliente.setFacturaAct(clienteData.cli_facturacionAct)
      cliente.setImagen(clienteData.imagen)
      cartera.setClientes([cliente])
      this.carteras.push(cartera);
    }else {
      cartera = this.carteras[index]
      cartera.setEstrella(cartera.getEstrella() || clienteData.importancia)
      cartera.setTriangulo(cartera.getTriangulo() || clienteData.dificultad)
      cartera.setFacturacionActual(cartera.getFacturacionActual() + clienteData.cli_facturacionAct)
      cartera.setFacturacionAnterior(cartera.getFacturacionAnterior() + clienteData.cli_facturacionAnt)
      cartera.setObjetivoFundamental(cartera.getObjetivoFundamental() + clienteData.cli_monto_ObjetivoFundamental)
      cartera.setObjetivoDeseado(cartera.getObjetivoDeseado() + clienteData.cli_monto_ObjetivoDeseado)
      cartera.setProyeccionVenta(cartera.getProyeccionVenta() + clienteData.cli_proyeccionVenta)
      cartera.setPromedioFacturacion(cartera.getPromedioFacturacion() +clienteData.cli_promedioFacturacion)
      cartera.setDebemos(cartera.getDebemos() + clienteData.cli_debemos)
      cartera.setDebe(cartera.getDebe() + clienteData.cli_deben)
      var cliente = new Cliente()
      cliente.setId(clienteData.idCliente)
      cliente.setNombre(clienteData.nombre)
      cliente.setNivelIngreso(clienteData.nivelIngreso)
      cliente.setFacturaAct(clienteData.cli_facturacionAct)
      cliente.setImagen(clienteData.imagen)
      cartera.setClientes([...cartera.getClientes(), cliente])
      cartera.setNumeroClientes(cartera.getNumeroClientes() + 1)
    }
  }
}
