import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { switchMap } from 'rxjs/operators';
import { CatalogoService } from '../../../services/catalogo/catalogo.service'
import { Cartera } from '../../../class/catalogo/cartera.class'
import { Cliente } from '../../../class/catalogo/cliente.class'
import { CoreContainerComponent } from '../../core-container/core-container.component'
@Component({
  selector:'detalles-cartera',
  templateUrl: './detalles-cartera.component.html',
  styleUrls: ['./detalles-cartera.component.scss']
})
export class DetallesCarteraComponent implements OnInit {

  public linksCarteras: any[] = [
    {label: 'Clientes', path: '/protected/catalogo/clientes'},
    {label: 'Carteras', path: '/protected/catalogo/clientes/carteras'},
  ]
  public homePath:string = '/protected/catalogo'
  public idCartera = 0;
  public cartera: Cartera = new Cartera();
  modal: boolean = false;
  modalDelete: boolean = false;

  constructor(private catalogoService: CatalogoService, private http: Http, private router: Router, private coreContainer: CoreContainerComponent, private route: ActivatedRoute){

  }

  ngOnInit(){
    this.coreContainer.openModal(0);
    let idCartera = this.route.snapshot.paramMap.get('id');


    this.catalogoService.obtenerCarterasPorUsuario({idFuncion:0, idResponsable: 0, idCartera: Number(idCartera)})
    .subscribe( data => {
      data.current.map( (clienteData, index) => {
        let cartera;
        if(index === 0){
          cartera = new Cartera();
          cartera.setIdCartera(clienteData.idCartera)
          cartera.setNombreCartera(clienteData.cart_nombre)
          cartera.setArea(clienteData.area)
          cartera.setRuta(clienteData.ruta)
          cartera.setIndustria(clienteData.industria)
          cartera.setEstrella(clienteData.importancia)
          cartera.setTriangulo(clienteData.dificultad)
          cartera.setFolio(clienteData.folio)
          cartera.setEsac(clienteData.cart_nombreEsac)
          cartera.setEv(clienteData.cart_nombreEv)
          cartera.setEvt(clienteData.cart_nombreEVT)
          cartera.setCobrador(clienteData.cart_nombreCobrador)
          cartera.setElaboro(clienteData.cart_nombreElaboro)
          cartera.setMensajero(clienteData.cart_nombreMensajero)
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
          cartera.setClientes([...cartera.getClientes(), cliente])
          cartera.setNumeroClientes(cartera.getNumeroClientes() + 1)
        }
      })

      this.linksCarteras.push({label:this.cartera.nombreCartera, path:''})
      this.coreContainer.closeModal(0);
    })
  }

  calcularFlujoFacturaciones(){

    if(this.cartera.facturacionActual >= this.cartera.facturacionAnterior){
      return '+' + ((this.cartera.facturacionActual / this.cartera.facturacionAnterior * 100) - 100);
    }
    return '-' + (100 - (this.cartera.facturacionActual / this.cartera.facturacionAnterior * 100));
  }

  calcularPorcentaje(primerValor, segundoValor){
    if(primerValor >= segundoValor){
      return '+' + ((primerValor / segundoValor * 100) - 100);
    }
    return '-' + (100 - (primerValor / segundoValor * 100));
  }

  porcentajeComparacionfacturaGlobal(primerValor){
    if(primerValor >= this.cartera.facturacionGlobal){
      return (primerValor / this.cartera.facturacionGlobal * 100);
    }
    return (primerValor / this.cartera.facturacionGlobal * 100);
  }

  calcularCambioEnProcentaje(valorAntiguo, valorNuevo){
    return ((valorNuevo - valorAntiguo) / valorAntiguo * 100)
  }

  deleteWallet(){
    this.modal = false;
    this.coreContainer.openModal(0);
    this.catalogoService.eliminarCartera({idUsuario:0, idCartera: this.cartera.idCartera}).subscribe(
      data => {
        console.log('Cartera eliminada correctamente')
        this.coreContainer.closeModal(0);
        this.modal = false;
        this.modalDelete = true;
        setTimeout(() => {
          this.modalDelete = false;
          this.router.navigate(['/protected/catalogo/clientes/carteras']);
        },3000)
      }
    )
  }

  redirectEdit(){
    this.router.navigate(['/protected/catalogo/clientes/carteras/edit/', this.cartera.idCartera]);
  }
}
