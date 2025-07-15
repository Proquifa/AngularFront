import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {ComunService} from '../../../services/comun/comun.service';

@Component({
  selector: 'pn-menu-seccion-roles',
  templateUrl: './menu-seccion-roles.component.html',
  styleUrls: ['./menu-seccion-roles.component.scss']
})
export class MenuSeccionRolesComponent implements OnInit {
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
  itemSel: any[] = [];
  dispareEvento: boolean = false;
  acordion = 'accordion';
  navigationSubscription: any;

  constructor(private router: Router, private comunService: ComunService) {
  }

  ngOnInit() {
    let itemValor;
    if (this.items != undefined && this.items.length > 0) {
      let pos: number = -1;
      let posP: number = -1;
      let entro: boolean = false;
      // this.itemSelected = new Array(this.items.length).fill("");
      if (this.titulo != null) {
        for (let i = 0; i < this.items.length; i++) {
          this.itemSelected = new Array(this.items[i].menu.length).fill("");
          this.itemSel.push({menu: this.itemSelected});
          for (let j = 0; j < this.items[i].menu.length; j++) {
            if (this.items[i].menu[j].select) {
              pos = j;
              posP = i;
            }
          }
        }
        if (pos > -1 && posP > -1) {
          this.itemSel[posP].menu[pos] = "itemSelected";
        }
      } else {
        for (let i = 0; i < this.items.length; i++) {
          this.itemSelected = new Array(this.items[i].menu.length).fill("");
          this.itemSel.push({menu: this.itemSelected});
          for (let j = 0; j < this.items[i].menu.length; j++) {
            if (this.items[i].menu[j].select) {
              pos = j;
              posP = i;
              entro = true;
            }
          }
        }
        if (entro) {
          this.dispareEvento = true;
          this.resetSelected = true;
          setTimeout(() => {
            this.resetSelected = false;
          }, 10);
          this.clickItem.emit(true);
          this.itemSel[posP].menu[pos] = "itemSelected";
        }
      }
    }
  }
  ngAfterViewInit() {
    for ( let i = 0; i < this.items.length; i++) {
      if (this.items[i].active !== undefined && this.items[i].active === true) {
        this.openAccordion(document.getElementsByClassName('accordion')[i], 1);
        console.log(i);
        break;
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
  openAccordion(event, valor) {
    let valores, roles;
    const array = document.getElementsByClassName('accordionActive');
    const arrayA = document.getElementsByClassName('accordion');
    let tamRol = ((array.length + arrayA.length) - 1) * 40;
    for (let i = 0; i < array.length; i++) {
      valores = array[i].nextElementSibling;
      roles = array[i].parentElement;
      valores.style.maxHeight = null;
      valores.style.opacity = 0;
      roles.style.minHeight = '40px';
      array[i].className = 'accordion';
    }
    let panel, rol: any;
    if (valor === 0) {
      panel = event.target.nextElementSibling;
      rol = event.target.parentElement;
      event.target.className = 'accordionActive';
    } else {
      panel = event.nextElementSibling;
      rol = event.parentElement;
      event.className = 'accordionActive';
    }
    panel.className = 'panel';
    if (panel.style.maxHeight) {
      rol.style.minHeight = '40px';
      panel.style.maxHeight = null;
    } else {
      panel.style.opacity = 'initial';
      rol.style.minHeight = 'calc(100% - ' + tamRol + 'px)';
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  }
}
