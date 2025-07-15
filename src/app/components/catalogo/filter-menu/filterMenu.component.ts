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
  openned = "";
  selected: any;

  public static INGRESO = {
    label: 'NIVEL DE INGRESO', imgUrl: 'assets/Images/catalogo/nivelIngreso.png', isSelected: false, hasOptions: true, options: [
      { name: "AA+", action: "none" }, { name: "AA", action: "none" },
      { name: "AM", action: "none" }, { name: "AB", action: "none" },
      { name: "MA", action: "none" }, { name: "MM", action: "none" },
      { name: "MB", action: "BAJO" }, { name: "BAJO", action: "none" },
      { name: "DIST", action: "none" }]
  };
  public static CORPORATIVO = { label: 'CORPORATIVO', imgUrl: 'assets/Images/catalogo/btnCorporativo.png', isSelected: false, hasOptions: false };
  public static RUTA = {
    label: 'RUTA', imgUrl: 'assets/Images/catalogo/ruta.png', isSelected: false, hasOptions: true, options: [{ name: "LOCAL", action: "none" }, { name: "FORÁNEO", action: "none" },
    { name: "GUADALAJÁRA", action: "none" }, { name: "CENTRO AMÉRICA", action: "none" },
    { name: "SUDAMÉRICA", action: "none" }, { name: "RESTO DEL MUNDO", action: "none" }]
  };
  public static TODOS = { label: 'TODOS', imgUrl: 'assets/Images/catalogo/btnClientes.png', isSelected: true };
  public static CUENTA_CLAVE = { label: 'CUENTA CLAVE', imgUrl: 'assets/Images/catalogo/cuentaClave.png', isSelected: false, hasOptions: false, };
  public static ESAC = { label: 'ESAC', imgUrl: 'assets/Images/catalogo/esacNegro.png', isSelected: false, hasOptions: false, };
  public static EV = { label: 'EV', imgUrl: 'assets/Images/catalogo/evNegro.png', isSelected: false, hasOptions: false, };
  public static filtrosClientes = [
    FilterMenuComponent.INGRESO,
    FilterMenuComponent.CORPORATIVO,
    FilterMenuComponent.RUTA,
    FilterMenuComponent.TODOS,
    FilterMenuComponent.CUENTA_CLAVE,
    FilterMenuComponent.ESAC,
    FilterMenuComponent.EV
  ]
  @Output() sendValue = new EventEmitter();
  @Input()
  set filtros(filtros: Array<any>) {
    this.listaFiltros = filtros;
  }

  listaFiltros: Array<any> = [];
  constructor() {
  }

  onSelect(filtro) {

  }
  ngOnInit() { }

  ShowDrop(event, evento, filtro) {
    let fil = filtro;

    console.log(event);

    evento.stopPropagation();
    if (filtro.hasOptions) {
      this.onClick(evento);
      document.getElementById("myDropdown" + event).classList.toggle("show");
      this.openned = "img" + event;

    }
    this.selected = filtro;
  }

  sendEvent(valor, opc, filtro) {
    let fil = filtro;


    let resp;
    switch (opc) {

      case 1:
        document.getElementById("id" + filtro).style.background = "#E7F4F5";
        resp = { opcion: this.selected.label, valor: valor }
        break;
      case 2:
        document.getElementById("id" + filtro).style.background = "#E7F4F5";
        resp = { opcion: valor, valor: valor }
        break;

      default: break;

    }


    this.sendValue.emit(resp);
  }

  // Close the dropdown if the user clicks outside of it
  onClick(event) {

    if (!(event.path[0].id == this.openned)) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}
