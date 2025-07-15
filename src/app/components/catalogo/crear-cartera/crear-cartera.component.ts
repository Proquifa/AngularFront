import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { switchMap } from 'rxjs/operators';
import { DragulaService } from 'ng2-dragula';
import { CoreContainerComponent } from '../../core-container/core-container.component'
import { FilterMenuComponent } from '../../shared/filter-menu/filterMenu.component'
import { CatalogoService } from '../../../services/catalogo/catalogo.service'
import { SessionUser } from '../../../services/session/session.service'
import { Cartera } from '../../../class/catalogo/cartera.class'
import { Cliente } from '../../../class/catalogo/cliente.class'

@Component({
  selector: 'pq-crear-cartera',
  templateUrl: './crear-cartera.component.html',
  styleUrls: ['./crear-cartera.component.scss']
})
export class CrearCarteraComponent implements OnInit {

  public linksCarteras: any[] = [
    {label: 'Clientes', path: '/protected/catalogo/clientes'},
    {label: 'Carteras', path: '/protected/catalogo/clientes/carteras'},
  ]
  public filtros = FilterMenuComponent.filtrosNuevaCartera;
  public labelButton = 'GUARDAR';
  public homePath:string = '/protected/catalogo'
  public filterSelected = {index: 0, value: 'TODOS', name: 'TODOS'};
  public filterInstance: any = {label: 'TODOS', value: 'TODOS'} ;
  public totalCarteras = 0
  public filterClientName: string = '';
  public clientesSinCartera = [];
  public clientesSinCarteraDisplay = [];
  public clientescartera = [];
  public cartera: any = {idCartera: 0,nombreCartera: '', clientes: [], publicada: false}
  public nuevosClientesEnCartera: Cliente[] = [];
  public options: any = {
    revertOnSpill: true
  }
  public coverListaClientes: boolean = false;
  public esacList = [{nombre: '--NINGUNO--', key: 0}];
  public esacSelected: any = {nombre: '--NINGUNO--', key: 0};
  public evtList = [{nombre: '--NINGUNO--', key: 0}];
  public evtSelected: any = {nombre: '--NINGUNO--', key: 0};
  public evList = [{nombre: '--NINGUNO--', key: 0}];
  public evSelected: any = {nombre: '--NINGUNO--', key: 0};
  public cobradorList = [{nombre: '--NINGUNO--', key: 0}];
  public cobradorSelected: any = {nombre: '--NINGUNO--', key: 0};
  public mensajeroList = [{nombre: '--NINGUNO--', key: 0}];
  public mensajeroSelected: any = {nombre: '--NINGUNO--', key: 0};
  public modalMoverCliente: any = false;
  public modalSuccess: boolean = false;
  public modalWalletSelected: number = -1;
  public listaCarteras: Cartera[] = [];
  public idCarteraAMover: number = 0;
  public idFuncion: number;
  public rolUsuario: string;
  public mensaje: string = '';

  constructor(private catalogoService: CatalogoService, private http: Http,private router: Router, private coreContainer: CoreContainerComponent, private route: ActivatedRoute,
  private dragulaService: DragulaService){
    // Se obtiene el id de la función para despues definir el área con la que se guardará la cartera.
    this.idFuncion = SessionUser.getInstance().getUser() ? SessionUser.getInstance().getUser().idFuncion : 22;
    this.rolUsuario = this.obtenerFuncionUsuario();
    this.setDragulaDropModelSubscriber();
  }

  setDragulaDropModelSubscriber(){
   /* this.dragulaService.dropModel.subscribe((value) => {
      // la condición pregunta si el cliente siendo arrastrade priviene de la lista de clientes sin cartera y se soltó en los clientes de la cartera. Si es así entonces agrega el nuevo cliente al arreglo de nuevosClientesEnCartera
      if(value[1].id && value[2].id === 'clientes-cartera' && value[3].id === 'clientes'){
        let cliente = this.cartera.clientes.find(cliente => {
          return cliente.getId() === Number(value[1].id)
        });
        this.nuevosClientesEnCartera = [...this.nuevosClientesEnCartera, cliente];
      } else if(value[1].id && value[2].id === 'clientes' && value[3].id === 'clientes-cartera') {
      // la condición pregunta si el cliente siendo arrastrado proviene de la lista de los clientes de la cartera y está siendo soltado en la lista de clientes sin cartera. de ser así obtiene al cliente desde su nueva posición en el
      // arreglo de clientesSinCarteraDisplay.
        let cliente = this.clientesSinCarteraDisplay.find((cliente:Cliente) => cliente.getId() === Number(value[1].id));
        //la condición pregunta si el cliente es encontrado, si es un cliente original(inició en la lista de clientes de la cartera) y si la cartera no ha sido publicada, de ser así niega el drop y muestra el modal de mover cliente.
        if(cliente && cliente.esOriginal  && this.cartera.publicada){
          setTimeout(() => {
            this.cartera = {
              ...this.cartera,
              clientes: [...this.cartera.clientes, cliente]
            }
            this.clientesSinCarteraDisplay = this.clientesSinCarteraDisplay.filter((cliente:Cliente) => cliente.getId() !== Number(value[1].id));
            this.modalMoverCliente = true;
            // Si la lista de carteras del modal mover cliente se encuentra vacía entonces llama a servicio para obtener el listado de carteras
            if(this.listaCarteras.length === 0){
              this.catalogoService.obtenerCarteras().subscribe(
                data => {
                  let carteras = []
                  data.current.map ( cartera => {
                    carteras.push(Cartera.builder(cartera))
                  })
                  this.listaCarteras = carteras
                  this.idCarteraAMover = Number(value[1].id)
                }
              );
            }
          }, 100)
        } else {
          this.nuevosClientesEnCartera = this.nuevosClientesEnCartera.filter((cliente:Cliente) => cliente.getId() !== Number(value[1].id));
        }
      }

      //Al moverse un cliente de listado hace que se tenga que recalcular los valores mostrados en la interfaz, por lo que aquí se vuelve a recalcular dichos valores.
      let datos = this.cartera.clientes.reduce( (acum,cliente) => ({
        objetivoDeseado: acum.objetivoDeseado + cliente.objetivoDeseado,
        objetivoFundamental: acum.objetivoFundamental + cliente.objetivoFundamental,
        facturaAnt: acum.facturaAnt + cliente.facturaAnt,
        facturaAct: acum.facturaAct + cliente.facturaAct,
        proyeccionVenta: acum.proyeccionVenta + cliente.proyeccionVenta
      }), {objetivoDeseado: 0, objetivoFundamental: 0, facturaAnt: 0, facturaAct: 0, proyeccionVenta: 0});

      let fechaHoy = new Date(Date.now());
      this.cartera.objetivoDeseado = datos.objetivoDeseado
      this.cartera.objetivoFundamental = datos.objetivoFundamental
      this.cartera.facturacionActual = datos.facturaAct
      this.cartera.facturacionAnterior = datos.facturaAnt
      this.cartera.proyeccionVenta = datos.facturaAct / (fechaHoy.getMonth()+1) * 12
    });*/
  }

  ngOnInit(){
    this.cartera.idCartera = Number(this.route.snapshot.paramMap.get('id'));
    this.coreContainer.openModal(0);
    this.obtenerClientesSinCartera();
    this.obtenerCombosDeCartera();

    if(this.cartera.idCartera !== 0){
      this.obtenerCartera();
    }
    if(this.cartera.idCartera === 0){
      this.linksCarteras.push({label: 'Nueva Cartera', path:''})
      let area = this.obtenerFuncionUsuario();
      this.cartera.area = area;
    }

  }

  obtenerFuncionUsuario(){
    return this.idFuncion === 39 ? 'Finanzas' : this.idFuncion === 3 ? 'Ventas' : this.idFuncion === 37 ? 'ESAC' : (this.idFuncion === 1 || this.idFuncion === 21 || this.idFuncion === 22) ? 'Direccion' : '';
  }

  obtenerClientesSinCartera(){
    this.catalogoService.obtenerClientesSinCartera().subscribe(
      data => {
        let arr = [];
        for(let clienteData of data.current){
          var cliente = new Cliente()
          cliente.setId(clienteData.idCliente)
          cliente.setNombre(clienteData.nombre)
          cliente.setNivelIngreso(clienteData.nivelIngreso)
          cliente.setFacturaAct(clienteData.cli_facturacionAct)
          cliente.setFacturaAnt(clienteData.cli_facturacionAnt)
          cliente.setObjetivoFundamental(clienteData.cli_monto_ObjetivoFundamental)
          cliente.setObjetivoDeseado(clienteData.cli_monto_ObjetivoDeseado)
          cliente.setPromedioFacturado(clienteData.cli_promedioFacturacion)
          cliente.setProyeccionVenta(clienteData.cli_proyeccionVenta)
          cliente.setImagen(clienteData.imagen)
          cliente.setCategoria(clienteData.cli_categoria)
          cliente.esOriginal = false;
          cliente.idIndustria = cliente.idIndustria
          arr = [...arr, cliente];
        }
        this.clientesSinCartera = arr;
        this.clientesSinCarteraDisplay = arr;
        this.totalCarteras = this.clientesSinCarteraDisplay.length;

        if(this.cartera.clientes.length > 0){
          this.clientesSinCartera = this.clientesSinCartera.filter( cliente => {
            return !this.cartera.clientes.find(clienteCartera => clienteCartera.id === cliente.id)
          })
          this.clientesSinCarteraDisplay = this.clientesSinCartera.slice(0);
          this.totalCarteras = this.clientesSinCarteraDisplay.length;
        }
        if(this.cartera.idCartera === 0){
          this.coreContainer.closeModal(0);
        }
      }
    )
  }

  obtenerCombosDeCartera(){
    this.catalogoService.obtenerCombosNuevaCartera().subscribe(
      data => {
        for(let valorCombo of data.current){
          this.setCombosData(valorCombo)
          this.esacSelected = {nombre: '--NINGUNO--', key: 0}
          this.evSelected = {nombre: '--NINGUNO--', key: 0}
          this.evtSelected = {nombre: '--NINGUNO--', key: 0}
          this.cobradorSelected = {nombre: '--NINGUNO--', key: 0}
          this.mensajeroSelected = {nombre: '--NINGUNO--', key: 0}
        }
      }
    )
  }

  obtenerCartera(){
    this.catalogoService.obtenerCarterasPorUsuario({idFuncion:0, idResponsable: 0, idCartera: Number(this.cartera.idCartera)})
    .subscribe( data => {
      data.current.map( (clienteData, index) => {
        let cartera;
        if(index === 0){
          cartera = new Cartera();
          cartera.setIdCartera(clienteData.idCartera)
          cartera.setNombreCartera(clienteData.cart_nombre)
          cartera.setRuta(clienteData.ruta)
          cartera.setIndustria(clienteData.industria)
          cartera.idIndustria = clienteData.idIndustria
          cartera.setEstrella(clienteData.importancia)
          cartera.setTriangulo(clienteData.dificultad)
          cartera.setFolio(clienteData.folio)
          cartera.idEsac = clienteData.cart_idEsac
          cartera.setEsac(clienteData.cart_nombreEsac)
          cartera.idEv = clienteData.cart_idEv
          cartera.setEv(clienteData.cart_nombreEv)
          cartera.idEvt = clienteData.cart_idEVT
          cartera.setEvt(clienteData.cart_nombreEVT)
          cartera.idCobrador = clienteData.cart_idCobrador
          cartera.setCobrador(clienteData.cart_nombreCobrador)
          cartera.idMensajero = clienteData.cart_idMensajero
          cartera.setMensajero(clienteData.cart_nombreMensajero)
          cartera.setElaboro(clienteData.cart_nombreElaboro)
          cartera.setNumeroClientes(1)
          cartera.setFacturacionGlobal(clienteData.cli_factGlobal)
          cartera.setFacturacionActual(clienteData.cart_facturacionAct)
          cartera.setFacturacionAnterior(clienteData.cart_facturacionAnt)
          cartera.setObjetivoFundamental(clienteData.cart_montoFundamental)
          cartera.setObjetivoDeseado(clienteData.cart_montoDeseado)
          cartera.setProyeccionVenta(clienteData.cart_proyeccionVenta)
          cartera.setPromedioFacturacion(clienteData.cart_promedioFacturacion)
          cartera.setDebemos(clienteData.cart_debemos)
          cartera.setDebe(clienteData.cart_deben)
          cartera.setPublicada(clienteData.cart_publicada)
          cartera.setNivelIngreso(clienteData.nivelIngreso)
          cartera.setCategoria(clienteData.cli_categoria)
          var cliente = new Cliente()
          cliente.setId(clienteData.idCliente)
          cliente.setNombre(clienteData.nombre)
          cliente.setNivelIngreso(clienteData.nivelIngreso)
          cliente.setFacturaAct(clienteData.cli_facturacionAct)
          cliente.setFacturaAnt(clienteData.cli_facturacionAnt)
          cliente.setObjetivoFundamental(clienteData.cli_monto_ObjetivoFundamental)
          cliente.setObjetivoDeseado(clienteData.cli_monto_ObjetivoDeseado)
          cliente.setPromedioFacturado(clienteData.cli_promedioFacturacion)
          cliente.setProyeccionVenta(clienteData.cli_proyeccionVenta)
          cliente.setImagen(clienteData.imagen)
          cliente.setCategoria(clienteData.cli_categoria)
          cliente.esOriginal = true;
          cartera.setClientes([cliente])
          this.cartera = cartera;
        }else {
          cartera = this.cartera
          cartera.setEstrella(cartera.getEstrella() || clienteData.importancia)
          cartera.setTriangulo(cartera.getTriangulo() || clienteData.dificultad)
          var cliente = new Cliente()
          cliente.setId(clienteData.idCliente)
          cliente.setNombre(clienteData.nombre)
          cliente.setNivelIngreso(clienteData.nivelIngreso)
          cliente.setFacturaAct(clienteData.cli_facturacionAct)
          cliente.setFacturaAnt(clienteData.cli_facturacionAnt)
          cliente.setObjetivoFundamental(clienteData.cli_monto_ObjetivoFundamental)
          cliente.setObjetivoDeseado(clienteData.cli_monto_ObjetivoDeseado)
          cliente.setPromedioFacturado(clienteData.cli_promedioFacturacion)
          cliente.setProyeccionVenta(clienteData.cli_proyeccionVenta)
          cliente.setImagen(clienteData.imagen)
          cliente.setCategoria(clienteData.cli_categoria)
          cliente.esOriginal = true;
          cartera.setClientes([...cartera.getClientes(), cliente])
          cartera.setNumeroClientes(cartera.getNumeroClientes() + 1)
          cartera.idIndustria = clienteData.idIndustria
        }
      })
      this.esacSelected = this.cartera.idEsac !== 0 ? { nombre: this.cartera.esac, key: this.cartera.idEsac} : {nombre: '--NINGUNO--', key: 0}
      this.evSelected = this.cartera.idEv !== 0 ? { nombre: this.cartera.ev, key: this.cartera.idEv} : {nombre: '--NINGUNO--', key: 0}
      this.evtSelected = this.cartera.idEvt !== 0 ? { nombre: this.cartera.evt, key: this.cartera.idEvt} : {nombre: '--NINGUNO--', key: 0}
      this.cobradorSelected = this.cartera.idCobrador !== 0 ? { nombre: this.cartera.cobrador, key: this.cartera.idCobrador} : {nombre: '--NINGUNO--', key: 0}
      this.mensajeroSelected = this.cartera.idMensajero !== 0 ? { nombre: this.cartera.mensajero, key: this.cartera.idMensajero} : {nombre: '--NINGUNO--', key: 0}
      this.linksCarteras.push({label:this.cartera.nombreCartera, path:'/protected/catalogo/clientes/carteras/' + this.cartera.idCartera})
      this.linksCarteras.push({label:'Editar', path:''})


      let datos = this.cartera.clientes.reduce( (acum,cliente) => ({
        objetivoDeseado: acum.objetivoDeseado + cliente.objetivoDeseado,
        objetivoFundamental: acum.objetivoFundamental + cliente.objetivoFundamental,
        facturaAnt: acum.facturaAnt + cliente.facturaAnt,
        facturaAct: acum.facturaAct + cliente.facturaAct,
        proyeccionVenta: acum.proyeccionVenta + cliente.proyeccionVenta
      }), {objetivoDeseado: 0, objetivoFundamental: 0, facturaAnt: 0, facturaAct: 0, proyeccionVenta: 0});
      let fechaHoy = new Date(Date.now());
      this.cartera.objetivoDeseado = datos.objetivoDeseado
      this.cartera.objetivoFundamental = datos.objetivoFundamental
      this.cartera.facturacionActual = datos.facturaAct
      this.cartera.facturacionAnterior = datos.facturaAnt


      setTimeout(()=> {
        this.cartera = {
          ...this.cartera,
          cart_updateESAC: false,
          cart_updateEV:  false,
          cart_updateCOBRADOR: false,
          cart_updateEVT: false
        }
        this.coreContainer.closeModal(0);
      }, 1500)

      this.clientesSinCartera = this.clientesSinCartera.filter( cliente => {
        return !this.cartera.clientes.find(clienteCartera => clienteCartera.id === cliente.id)
      })
      this.clientesSinCarteraDisplay = this.clientesSinCartera.slice(0);
      this.totalCarteras = this.clientesSinCarteraDisplay.length;
    })
  }


  getOptions($event){
    console.log($event)
    this.filterInstance = {label: $event.valor,value: $event.valor === 'AA+' ? 'AAplus' : $event.valor === 'DISTRIBUIDORES' ? 'DISTRIBUIDOR' : $event.valor === 'BAJOS' ? 'BAJO' : $event.valor };
    this.filterSelected = {
      ...$event,
      value: $event.valor
    }
    this.setFilter()
  }

  setCombosData(vc){
    switch(vc.tipo){
      case 'Esac':
        this.esacList = [...this.esacList, { nombre: vc.valor, key: vc.idValorCombo }];
        break;

      case 'evt':
        this.evtList = [...this.evtList, { nombre: vc.concepto, key: vc.valor}];
        break;

      case 'ev':
        this.evList = [...this.evList, { nombre: vc.concepto, key: vc.valor}];
        break;

      case 'cobrador':
        this.cobradorList = [...this.cobradorList, { nombre: vc.concepto, key: vc.valor}];
        break;

      case 'msj':
        this.mensajeroList = [...this.cobradorList, { nombre: vc.concepto, key: vc.valor}];
        break;
    }
  }

  changeClientsFilter($event){
    this.filterClientName = $event
    this.filterSelected = $event
    this.setFilter()
  }

  setFilter(){
    let newArr = this.clientesSinCartera.filter( cliente => {
      if(this.filterInstance.label !== 'TODOS'){
        if(this.filterClientName && this.filterClientName !== ''){
          return cliente.nivelIngreso === this.filterInstance.value && (cliente.nombre.toLowerCase().startsWith(this.filterClientName.toLowerCase()) || cliente.nombre.toLowerCase().endsWith(this.filterClientName.toLowerCase()) || cliente.nombre.toLowerCase() === this.filterClientName.toLowerCase())
        }
        return cliente.nivelIngreso === this.filterInstance.value
      }
      if(this.filterClientName && this.filterClientName !== ''){
        return (cliente.nombre.toLowerCase().startsWith(this.filterClientName.toLowerCase()) || cliente.nombre.toLowerCase().endsWith(this.filterClientName.toLowerCase()) || cliente.nombre.toLowerCase().nombre === this.filterClientName.toLowerCase())
      }
      return true;
    })
    this.clientesSinCarteraDisplay = newArr;
    this.totalCarteras = this.clientesSinCarteraDisplay.length;
  }

  changeName($event){
    this.cartera.nombreCartera = $event.target.value;
  }

  calcularCambioEnProcentaje(valorAntiguo, valorNuevo){
    return ((valorNuevo - valorAntiguo) / valorAntiguo * 100)
  }

  guardarCambios(publicar: boolean = false){
    this.coreContainer.openModal(0);
    this.cartera.clientes = this.cartera.clientes.map( cliente => ({...cliente, idCliente: cliente.id}));
    console.log(this.cartera)
    let dataBody = {
      idUsuario: 0,
      cartera: {
        ...this.cartera,
        area: this.obtenerFuncionUsuario(),
        idcartera: this.cartera.idCartera,
        nombre: this.cartera.nombreCartera,
        industria: !this.cartera.idIndustria ? 112 : this.cartera.idIndustria,
        usuario: 27,
        publicada: publicar || this.cartera.publicada ? true : false,
        cart_updatePublicada: this.cartera.publicada && publicar ? publicar : this.cartera.publicada,
        cart_updateESAC: this.cartera.cart_updateESAC ? this.cartera.cart_updateESAC : false,
        cart_updateEV: this.cartera.cart_updateEV ? this.cartera.cart_updateEV : false,
        cart_updateCOBRADOR: this.cartera.cart_updateCOBRADOR ? this.cartera.cart_updateCOBRADOR : false,
        cart_updateEVT: this.cartera.cart_updateEVT ? this.cartera.cart_updateEVT : false,
        cart_updateMENSAJERO: this.cartera.cart_updateMENSAJERO ? this.cartera.cart_updateMENSAJERO : false
      }
    }
    this.catalogoService.actualizarCartera(dataBody).subscribe(
      data => {
        if(Number(this.route.snapshot.paramMap.get('id')) === 0 && data.current !== -1){
          this.cartera.idCartera = data.current
          this.linksCarteras[this.linksCarteras.length-1] = {label:this.cartera.nombreCartera, path:'/protected/catalogo/clientes/carteras/' + this.cartera.idCartera}
          this.linksCarteras.push({label:'Editar', path:''})
          this.mensaje = 'La cartera ha sido creada exitosamente'
          this.modalSuccess = true;
          setTimeout(() => {
            this.modalSuccess = false;
          }, 2000);
        }else {
          this.linksCarteras[this.linksCarteras.length-2] = {label:this.cartera.nombreCartera, path:'/protected/catalogo/clientes/carteras/' + this.cartera.idCartera}
          this.mensaje = 'El cartera ha sido actualizada exitosamente'
          this.modalSuccess = true;
          if(publicar){
            alert('actualiza cartera a ser publicada')
            this.cartera.publicada = true;
          }
          setTimeout(() => {
            this.modalSuccess = false;
          }, 2000);
        }
        this.coreContainer.closeModal(0);
      }
    )
  }

  getComboValue($event, property){
    this.cartera[property] = Number($event.key)
    this.cartera['cart_update'+property.toUpperCase()] = true;
  }

  selectNewWalletForCliente(index){
    this.modalWalletSelected = index;
  }

  moverClienteACartera(){
    this.coreContainer.openModal(0);
    let dataBody = {
      idCliente: this.idCarteraAMover,
      idCartera: this.listaCarteras[this.modalWalletSelected].idCartera,
      idCarteraAnt: this.cartera.idCartera
    }
    this.catalogoService.moverClienteACartera(dataBody).subscribe(
      data => {
        if(data.current.moverCliente){
          this.cartera = {
            ...this.cartera,
            clientes: [...this.cartera.clientes.filter( cliente => cliente.id !== this.idCarteraAMover)]
          }
          this.mensaje = 'El cliente se cambió de cartera correctamente'
          this.modalSuccess = true;
          setTimeout(() => {
            this.modalSuccess = false;
            if(data.current.carteraBorrada){
              this.router.navigate(['/protected/catalogo/clientes/carteras']);
            }

          }, 3000);
        }
        this.modalMoverCliente = false;
        this.coreContainer.closeModal(0);
      }
    )
  }
}
