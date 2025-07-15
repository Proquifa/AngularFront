import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  host: {
    '(document:click)': 'onClick($event)',
  },
  selector: 'filter-menu',
  templateUrl: './filterMenu.component.html',
  styleUrls: ['./filterMenu.component.scss']
})

export class FilterMenuComponent implements OnInit {
  openned="";
  selected:any;

  public static INGRESO = {label: 'NIVEL DE INGRESO', imgUrl: 'assets/Images/catalogo/nivelingreso.svg', isSelected: false, hasOptions:true, options:[
    {name:"AA+", action:"none"},{name:"AA", action:"none"},
    {name:"AM", action:"none"},{name:"AB", action:"none"},
    {name:"MA", action:"none"},{name:"MM", action:"none"},
    {name:"MB", action:"BAJO"},{name:"BAJO", action:"none"},
    {name:"DIST", action:"none"}]};
    public static CORPORATIVO = {label: 'CORPORATIVO', imgUrl: 'assets/Images/catalogo/corporativo.svg', isSelected: false, hasOptions:false};
    public static RUTA = {label: 'RUTA', imgUrl: 'assets/Images/catalogo/ruta.svg', isSelected: false, hasOptions:true, options:[{name:"LOCAL", action:"none"},{name:"FORÁNEO", action:"none"},
    {name:"GUADALAJÁRA", action:"none"},{name:"CENTRO AMÉRICA", action:"none"},
    {name:"SUDAMÉRICA", action:"none"},{name:"RESTO DEL MUNDO", action:"none"}]};
    public static TODOS = {label: 'TODOS', imgUrl: 'assets/Images/catalogo/todos.svg', isSelected: true};
    public static TODOS_CON_AZUL = {label: 'TODOS', imgUrl: 'assets/Images/catalogo/analisis_todos.png', imgUrlSelected: 'assets/Images/catalogo/analisis_todosAzul.png', isSelected: true};
    public static CUENTA_CLAVE = {label: 'CUENTA CLAVE', imgUrl: 'assets/Images/catalogo/cuentaclave.svg', isSelected: false,hasOptions:false,};
    public static ESAC = {label: 'ESAC', imgUrl: 'assets/Images/catalogo/esac.svg', isSelected: false,hasOptions:false,};
    public static EVT = {label: 'EVT', imgUrl: 'assets/Images/catalogo/esac.svg', isSelected: false,hasOptions:false,};
    public static EV = {label: 'EV', imgUrl: 'assets/Images/catalogo/EV.svg', isSelected: false,hasOptions:false,};
    public static INDUSTRIA = {label: 'INDUSTRIA', imgUrl: 'assets/Images/catalogo/industria.svg', isSelected: false,hasOptions:false,};
    public static COBRADOR = {label: 'COBRADOR', imgUrl: 'assets/Images/catalogo/cobrador.svg', isSelected: false,hasOptions:false,};
    public static MENSAJERO = {label: 'MENSAJERO', imgUrl: 'assets/Images/catalogo/msjero.svg', isSelected: false,hasOptions:false,};
    public static ALTOS = {label: 'ALTOS', imgUrl: 'assets/Images/catalogo/analisis_altos.png', imgUrlSelected: 'assets/Images/catalogo/analisis_altosAzul.png', isSelected: false,hasOptions:true, options:[{name:"AA+", action:"none"},{name:"AA", action:"none"},
    {name:"AM", action:"none"},{name:"AB", action:"none"}]};
    public static MEDIOS = {label: 'MEDIOS', imgUrl: 'assets/Images/catalogo/analisis_medios.png', imgUrlSelected: 'assets/Images/catalogo/analisis_mediosAzul.png', isSelected: false,hasOptions:true, options: [{name:"MA", action:"none"},{name:"MM", action:"none"},
    {name:"MB", action:"none"}]};
    public static BAJOS = {label: 'BAJOS', imgUrl: 'assets/Images/catalogo/analisis_bajos.png', imgUrlSelected: 'assets/Images/catalogo/analisis_bajosAzul.png', isSelected: false,hasOptions:false,};
    public static DISTRIBUIDORES = {label: 'DISTRIBUIDORES', imgUrl: 'assets/Images/catalogo/analisis_distribuidores.png', imgUrlSelected: 'assets/Images/catalogo/analisis_distribuidoresAzul.png', isSelected: false,hasOptions:false,};
  public static filtrosClientes = [
    FilterMenuComponent.INGRESO,
    FilterMenuComponent.CORPORATIVO,
    FilterMenuComponent.RUTA,
    FilterMenuComponent.TODOS,
    FilterMenuComponent.CUENTA_CLAVE,
    FilterMenuComponent.ESAC,
    FilterMenuComponent.EV
  ]
  public static filtrosCartera = [
    FilterMenuComponent.TODOS,
    FilterMenuComponent.ESAC,
    FilterMenuComponent.EVT,
    FilterMenuComponent.EV,
    FilterMenuComponent.COBRADOR,
    FilterMenuComponent.INGRESO,
    FilterMenuComponent.RUTA,
    FilterMenuComponent.INDUSTRIA,
  ]

  public static filtrosNuevaCartera = [
    FilterMenuComponent.TODOS_CON_AZUL,
    FilterMenuComponent.ALTOS,
    FilterMenuComponent.MEDIOS,
    FilterMenuComponent.BAJOS,
    FilterMenuComponent.DISTRIBUIDORES
  ]
  @Input() filterSelected: any = {index: 0, value:'TODOS'}
  @Input() totalObjetos: number
  @Input() totalObjetosLabel: string
  @Output() sendValue= new EventEmitter();
  @Input()
  set filtros (filtros: Array<any>){
    this.listaFiltros = filtros;
  }

  listaFiltros: Array<any> = [];
  constructor(){}

  onSelect(filtro){}
  ngOnInit(){}

  ShowDrop(event,evento, filtro, onImg = false) {
    if(!onImg){
      if(filtro.hasOptions){
          this.onClick(evento);
          document.getElementById("myDropdown"+event).classList.toggle("show");
         this.openned="img"+event;

      }
      this.selected=filtro;
    } else {
      evento.preventDefault()
    }

  }

  sendEvent(valor,opc, index, onImg = false){
    let resp;
    switch(opc){
      case 1:
       resp={opcion: this.selected.label, valor: valor, index }
      break;
      case  2:
      resp={opcion: valor, valor:valor, index }
      break;
      default: break;
    }
    this.sendValue.emit(resp);
  }

  // Close the dropdown if the user clicks outside of it
  onClick(event) {
  console.log(event.path[0].id,this.openned)
    if (!(event.path[0].id == this.openned)) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}
