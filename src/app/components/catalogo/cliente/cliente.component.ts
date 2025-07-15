import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http'
import { Router } from '@angular/router'
import { FilterMenuComponent } from '../filter-menu/filterMenu.component'
import { ClienteService } from '../../../services/catalogo/clientes/clientes.service'
import { CoreContainerComponent } from '../../../components/core-container/core-container.component';


@Component({
  selector: 'pn-catalogo',
  templateUrl: './cliente.component.html',
  styleUrls: [ './cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  public filtros:Array<any>
  public clientes: any[] = [];
  public clientesDisplay: any[] = [];
  public clientesConsulta: any[]=[];
  public totalClientes: number = 0;
  public isByCorporativo:boolean=false;
  public ClientesFiltrados:any[]=[];
  public clientesAgrupados:any[]=[];
  public ClientesSearched:any[]=[];
  public HabilidatosSelected:boolean=true;
  public searchTerm:string="";
  public carterasPorFila: number;
  public filterSelected = {index: 3, value: 'TODOS', name: 'TODOS'};
  public opcion:any=[
    {
      label: 'Clientes',
      path: '/protected/catalogo/clientes',
  
    }
  ]

  public linksCarteras: any[] = [
    {label: 'Cliente', path: '/protected/catalogo/clientes', urlImg:'assets/Images/catalogo/nivelingresoblanco20x20px.png'},
    {label: 'Carteras', path: '/protected/catalogo/clientes/carteras', urlImg: 'assets/Images/catalogo/corporativoblanco20x20px.png'},
  ]
  public homePath:string = '/protected/catalogo'
  constructor(private clienteService: ClienteService, private http: Http, private router: Router, private coreComponent: CoreContainerComponent,){
    this.filtros = FilterMenuComponent.filtrosClientes;
  }


ObtenerClientesPorUsuario(isHabilitado){
  this.coreComponent.openModal(0);
  this.clienteService.obtenerClientesPorUsuario(isHabilitado)
  .subscribe( data => {
    console.log(data);
    this.clientes = data.current;
    this.clientesDisplay = this.clientes.map(cliente => cliente);
    this.clientesConsulta= this.clientes.map(cliente=>cliente);
    this.ClientesFiltrados= this.clientes.map(cliente=>cliente);

    this.totalClientes = data.current.length;
    this.coreComponent.closeModal(0);
    this.getOptions({opcion: "TODOS"});
    this.filterSelected = {index: 3, value: 'TODOS', name: 'TODOS'};
  }, error=>{  this.coreComponent.closeModal(0);})
}


ngOnDestroy(){
  window.removeEventListener('resize', this.onResizeReference);
}

  ngOnInit(){
    window.addEventListener('resize', this.onResizeReference);
    console.log('Llamando a servicio de obtener clientes');
 this.ObtenerClientesPorUsuario(1);

  }


  onResize(){
    this.cambiarNumeroCarteras()
}
onResizeReference = this.onResize.bind(this);

cambiarNumeroCarteras(){
  if(document.body.clientWidth < 1480){

    this.carterasPorFila = 3
  } else if (document.body.clientWidth > 2175){
  
    this.carterasPorFila = 7
  } else {
 
    this.carterasPorFila = 4
  }
}

  agregarFiltro($event){
    console.log(`Llegó un valor desde active button, el valor es: ${$event}`)
  }

  redirectTo(url: string){
    this.router.navigate([url]);
  }

  getOptions(event){
    this.filterSelected = this.selectFilterMenu(event)
switch(event.opcion){

  
  case "NIVEL DE INGRESO":
 let stringToSearch= event.valor;
 if(stringToSearch==="DIST"){
   stringToSearch="Distribuidor"
 }
 if(stringToSearch==="AA+"){
  stringToSearch="aaplus"
}
  let arreauxiliar=[];
  this.ClientesFiltrados.forEach(cliente => { 

    if(cliente.nivelIngreso.toUpperCase()===stringToSearch.toUpperCase()){
      arreauxiliar.push(cliente);
    }
  }  
);
this.isByCorporativo= false;;
this.clientesConsulta=arreauxiliar;
this.ClientesSearched= this.clientesConsulta;
  break;

  case "RUTA":
  let stringToSearch2= event.valor;
  let arreauxiliar2=[];
  if(stringToSearch2=="GUADALAJÁRA"){stringToSearch2="GUADALAJARA"}
  if(stringToSearch2=="FORÁNEO"){stringToSearch2="FORANEO"}
  if(stringToSearch2=="CENTRO AMÉRICA"){stringToSearch2="CENTROAMERICA"}
  if(stringToSearch2=="SUDAMÉRICA"){stringToSearch2="SUDAMERICA"}
  this.ClientesFiltrados.forEach(cliente => { 
  
    if(cliente.ruta!=null){
      if(cliente.ruta.toUpperCase()===stringToSearch2.toUpperCase()){
     
      arreauxiliar2.push(cliente);
    }    }
  })
  this.isByCorporativo= false;
  this.clientesConsulta=arreauxiliar2;
  this.ClientesSearched= this.clientesConsulta;
  break;

  case "CORPORATIVO":


let Grupos:any []= [];
let isFirstTime=true;
this.clientesAgrupados=[this.ClientesFiltrados.length];

this.ClientesFiltrados.forEach((cliente,index) => { 
  

 
    let i=0;
 
let isExist=false; 

    while(i<Grupos.length){ 
      
      if(cliente.nombreCorporativo!=null ){
        if(Grupos[i]!=null){

     
        if(Grupos[i].toUpperCase()==cliente.nombreCorporativo.toUpperCase()){
       
            isExist=true; 
         }
        }
      } else{
        isExist=true; 
      }
     i=i+1;
    }
     
    if(isExist==false){
      Grupos.push(cliente.nombreCorporativo);     
    }
          

})

let ClientesAgrupados:any[]=[];

Grupos.forEach((Grupo,index) => { 
  let clienteAgrupado:any[]=[];
  let nombreGrupo:'';
 
  this.ClientesFiltrados.forEach((cliente,index) => {
       if((Grupo==cliente.nombreCorporativo)&&Grupo!=null){
    clienteAgrupado.push(cliente);
      }

   });
   let objAuxiliar={nombreGrupo: Grupo, clientes: clienteAgrupado};
this.clientesAgrupados.push(objAuxiliar);
});
if(this.clientesAgrupados.length>2){
this.clientesAgrupados.splice(0,1);
}


  this.isByCorporativo= true;
  break;

  case "EV":

  this.isByCorporativo= false;;
  break;

  case "ESSAC":

  this.isByCorporativo= false;;
  break;

  case "CUENTA CLAVE":
  let stringToSearch6= event.valor;
  let arreauxiliar6=[];

  this.ClientesFiltrados.forEach(cliente => { 
  

    if(cliente.tieneCartera !=null){
      if(cliente.tieneCartera!=false){
     
      arreauxiliar6.push(cliente);
    }    }
  })
  this.clientesConsulta=arreauxiliar6;
  this.ClientesSearched= this.clientesConsulta;
  this.isByCorporativo= false;;
  break;

  case "TODOS":
 
  this.isByCorporativo= false;;
  this.clientesConsulta=this.ClientesFiltrados;
  this.ClientesSearched= this.clientesConsulta;
  break;
}


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
      case FilterMenuComponent.CORPORATIVO.label:
        attributeForFilter.name = 'CORPORATIVO'
        break;
      case FilterMenuComponent.RUTA.label:
        attributeForFilter.name = 'RUTA'
        break;
      case FilterMenuComponent.CUENTA_CLAVE.label:
        attributeForFilter.name = 'CUENTA CLAVE'
        break;
      case FilterMenuComponent.ESAC.label:
        attributeForFilter.name = 'ESAC'
        break;
      case FilterMenuComponent.EV.label:
        attributeForFilter.name = 'EV'
        break;
      case FilterMenuComponent.INGRESO.label:
        attributeForFilter.name = 'NIVEL DE INGRESO'
        break;
    }
    return attributeForFilter
  }



  Entrar(event){
    event.stopPropagation(); 
  
console.log("Entrar")
   
  }
  clickToExport(){
console.log("Se exporta el catálogo")

  }

  Habilitar(opc){
this.ClientesFiltrados=[];
    switch(opc){
      case 1:
this.ObtenerClientesPorUsuario(1);
    
this.HabilidatosSelected=true;

      break;

      case 0: 
  this.ObtenerClientesPorUsuario(0);
              
      this.HabilidatosSelected=false;

      break;

    }

  }

  buscar(search){

    let searchArrayAux: any[]=[];
    this.searchTerm=search;
if(search==""){
  this.ClientesSearched=this.clientesConsulta;
}else{
  this.clientesConsulta.forEach(cliente => { 
    if (cliente.nombre.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
        searchArrayAux.push(cliente);
    }
  })
    this.ClientesSearched=searchArrayAux;
}
  }
}
