import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";
import {NavigationEnd, Router} from '@angular/router';
import {ComunService} from '../../../services/comun/comun.service';

@Component({
  selector: "pn-menu-seccion",
  templateUrl: "./menu-seccion.component.html",
  styleUrls: ["./menu-seccion.component.scss"]
})
export class MenuSeccionComponent implements OnInit {
  @Input()
  titulo: String;
  @Input()
  items: any[];
  @Input()
  pendiente: number;
  @Input()
  vistaInicialActiva: boolean;
  @Input()
  hijo: number = 0;
  @Output()
  clickItem = new EventEmitter();
  @Input()
  resetSelected: boolean = false;

  itemSelected: any[];
  dispareEvento: boolean = false;
  navigationSubscription: any;
  constructor(private router: Router, private comunService: ComunService) {
  }

  ngOnChanges(change: SimpleChanges) {
    if (!this.dispareEvento) {
      if (this.resetSelected) {
        this.itemSelected = new Array(this.items.length).fill("");
      }
    } else {
      this.dispareEvento = false;
    }
  }

  ngOnInit() {
    if (this.items != undefined && this.items.length > 0) {
      let pos: number = 0;
      let entro: boolean = false;
      this.itemSelected = new Array(this.items.length).fill("");
      if (this.titulo != null) {
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].select) {
            pos = i;
          }
        }
        this.itemSelected[pos] = "itemSelected";
      } else {
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].select) {
            pos = i;
            entro = true;
          }
        }
        if (entro) {
          this.dispareEvento = true;
          this.resetSelected = true;
          setTimeout(() => {
            this.resetSelected = false;
          }, 10);
          this.clickItem.emit(true);
          this.itemSelected[pos] = "itemSelected";
        }
      }
    }
  }

  redirect(i: number, url: String, disable: boolean) {
     if (!disable) {
      this.itemSelected = new Array(this.items.length).fill("");
      this.itemSelected[i] = "itemSelected";
      this.router.navigate(["/protected/" + url]);
      this.comunService.recargarV(url.toString());
      this.dispareEvento = true;
      this.resetSelected = true;
      setTimeout(() => {
        this.resetSelected = false;
      }, 10);
      if (this.hijo != 0) {
        this.clickItem.emit(true);
      }
    }
  }
  clickItemSon($event) {
    this.itemSelected = new Array(this.items.length).fill("");
    this.resetSelected = true;
    setTimeout(() => {
      this.resetSelected = false;
    }, 10);
    if (this.hijo != 0) {
      this.clickItem.emit(true);
    }
  }


  /**
   * Documentacion
   *
   * @input titulo
   *  Es el texto que se muestra dentro de un rectangulo verde
   *
   * @input items
   *  nombre => Texto que se va a mostrar en el menu
   *  tipo => valores que acepta :
   *         'flecha' para pintar una flecha (>),
   *         'valor' para dibujar rectangulo blanco con un numero dentro.
   *         '' no dibuja nada
   *  valor => Si en el campo tipo es igual a valor toma este numero
   *  url => Pagina a redireccionar
   *  subMenu => Recibe una lista de items
   *  disbale => Su valor determinado es false, solo debe colocarse con true si desea que el
   *             item no se pueda seleccionar, a si solo funcionara como un label y no un link
   *  select => Su valor determinado es false, solo debe colocarse con true si desea que el
   *            item se muestre seleccionado
   *
   * Ejemplo menu normal
   * itemsMenu: any[] = [
   { nombre: "Requisición Móvil", tipo: "flecha", valor: 0, url: "" },
   { nombre: "Pool de Visitas", tipo: "valor", valor: 0, url: "poolVisitas" },
   { nombre: "Planificar Sprint", tipo: "valor", valor: 0, url: "planificarSprint" },
   { nombre: "Agendar Visita", tipo: "valor", valor: 0, url: "agendarVisita" },
   { nombre: "Reportar Visita", tipo: "valor", valor: 0, url: "reportarVisita" },
   { nombre: "Controlar Pendientes", tipo: "valor", valor: 0, url: "controlarPendientes" },
   { nombre: "Controlar Acciones", tipo: "valor", valor: 0, url: "controlarAcciones" }
   ];
   *
   * Ejemplo menu con submenus
   * itemsMenu: any[] = [
   { nombre: "Requisición Móvil", tipo: "flecha", valor: 0, url: "" },
   { nombre: "Pool de Visitas", tipo: "", valor: 0, url: "poolVisitas", disable:true,
     subMenu : [{ nombre: "Requisición Móvil", tipo: "flecha", valor: 0, url: "" },{ nombre: "Reportar Visita", tipo: "valor", valor: 0, url: "reportarVisita" }]},
   { nombre: "Planificar Sprint", tipo: "", valor: 0, url: "planificarSprint",disable:true,
     subMenu : [{ nombre: "Requisición Móvil", tipo: "flecha", valor: 0, url: "" },{ nombre: "Reportar Visita", tipo: "valor", valor: 0, url: "reportarVisita" },{ nombre: "Reportar Visita", tipo: "valor", valor: 0, url: "reportarVisita" }]},
   { nombre: "Agendar Visita", tipo: "", valor: 0, url: "agendarVisita",disable:true,
     subMenu : [{ nombre: "Requisición Móvil", tipo: "flecha", valor: 0, url: "", subMenu : [{ nombre: "Requisición Móvil", tipo: "flecha", valor: 0, url: "",  subMenu : [{ nombre: "Requisición Móvil", tipo: "flecha", valor: 0, url: "" },{ nombre: "Reportar Visita", tipo: "valor", valor: 0, url: "reportarVisita", subMenu : [{ nombre: "Requisición Móvil", tipo: "flecha", valor: 0, url: "" },{ nombre: "Reportar Visita", tipo: "valor", valor: 0, url: "reportarVisita" }] },{ nombre: "Reportar Visita", tipo: "valor", valor: 0, url: "reportarVisita" }] },{ nombre: "Reportar Visita", tipo: "valor", valor: 0, url: "reportarVisita" },{ nombre: "Reportar Visita", tipo: "valor", valor: 0, url: "reportarVisita" }] },{ nombre: "Reportar Visita", tipo: "valor", valor: 0, url: "reportarVisita" },{ nombre: "Reportar Visita", tipo: "valor", valor: 0, url: "reportarVisita" }]},
   { nombre: "Reportar Visita", tipo: "valor", valor: 0, url: "reportarVisita" },
   { nombre: "Controlar Pendientes", tipo: "valor", valor: 0, url: "controlarPendientes" },
   { nombre: "Controlar Acciones", tipo: "valor", valor: 0, url: "controlarAcciones" }
   ]
   *
   *
   *
   */
}
