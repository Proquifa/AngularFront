import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer,
  SimpleChanges
} from "@angular/core";
import { SimpleChange } from "@angular/core/src/change_detection/change_detection_util";

@Component({
  selector: "pq-drop-list",
  templateUrl: "./drop-list.component.html",
  styleUrls: ["./drop-list.component.scss"]
})
export class DropListComponent implements OnInit {
  @Output()
  valueDropList: EventEmitter<any> = new EventEmitter();
  @Input()
  items: any;
  @Input()
  isSearch: boolean = true;
  @Input()
  isCategory: boolean = false;
  @Input()
  size: String = "";
  @Input()
  align: String = "";
  @Input()
  itemSelect: any;
  @Input()
  widthContent: any = "100%";
  @Input()
  marginLeftContent: any = "0px";
  @Input()
  tooltip: boolean = false;
  @Input()
  tipoDrop: string = "";
  @Input()
  campoLabel: string = "";

  clickListener: Function;
  showDropList: boolean;
  dropListClass: string;
  title: string = "";
  placeholder: any = "Search";
  searchTerm: string = null;
  arrayAux: any = [];
  search: any = [];
  resetSearch: boolean;
  listCheck: any[] = [];

  constructor(private renderer: Renderer, private elementRef: ElementRef) {
    this.clickListener = renderer.listenGlobal(
      "document",
      "click",
      (event: MouseEvent) => this.handleGlobalClick(event)
    );
  }

  ngOnInit() {
    this.showDropList = false;
    this.dropListClass = "dropList";
    //this.fillArrayAux();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.currentValue) {
      this.items = changes.currentValue;
    }
    if (changes.items != undefined) {
      this.items = changes.items.currentValue;
      this.fillArrayAux();
    }
    if (changes.itemSelect !== undefined) {
      if (
        changes.itemSelect.currentValue !== undefined &&
        !changes.firstChange
      ) {
        this.selectItem(this.itemSelect);
      } 
    }
  }

  /* Escucha el evento click globalmente */
  handleGlobalClick(event: MouseEvent): void {
    const withinElement = this.elementRef.nativeElement.contains(event.target);
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeDropList();
    }
  }
  /* Cierra el drop list */
  closeDropList(): void {
    this.showDropList = false;
  }

  /* Abre el drop list */
  openDropList(): void {
    this.showDropList = !this.showDropList;
  }

  /* Selecciona opcion del drop list */
  selectItem(item: any): void {
    if (item != null && item.nombre != undefined) {
      this.title = item.nombre;
      this.closeDropList();
      this.resetSearch = !this.resetSearch;
      this.dropListClass = "dropListSelect";
      this.valueDropList.emit(item);
      this.placeholder = item.nombre;
      //this.fillArrayAux();
    } else if (item.length > 0){
      for (let $item of item) {
        if (this.title.indexOf($item[this.campoLabel]) == -1) {
          if (this.title.length > 0) {
            this.title += ", ";
          }
          this.title = this.title.replace(", ,", ",");
          this.title = this.title.replace(",,", ",");
          this.title += $item[this.campoLabel];
        }
      }
    }
  }

  /* Selecciona opcion del drop list */
  changeCheck($event, item: any) {
    if (this.itemSelect != null) {
      this.listCheck = this.itemSelect.slice();
    }
    let index = this.listCheck.indexOf(item, 0);
    if (index == -1 && $event.checked) {
      this.listCheck.push(item);
      if (this.title.indexOf(item[this.campoLabel]) == -1) {
        if (this.title.length > 0) {
          this.title += ", ";
        }
        this.title = this.title.replace(", ,", ",");
        this.title = this.title.replace(",,", ",");
        this.title += item[this.campoLabel];
      }
    } else {
      this.title = this.title.replace(item[this.campoLabel], "");
      this.title = this.title.replace(", ,", ",");
      this.title = this.title.replace(",,", ",");
      if (this.title.indexOf(",") == 0) {
        if (this.title.length > 2) {
          this.title = this.title.substring(1, this.title.length);
        } else {
          this.title = "";
        }
      }
      this.listCheck.splice(index, 1);
      if (this.listCheck.length == 1) {
        let re = /\,/gi;
        this.title = this.title.replace(re, "");
      } else if (this.listCheck.length == 0) {
        this.title = "";
      }
    }

    this.resetSearch = !this.resetSearch;
    this.dropListClass = "dropListSelect";
    this.valueDropList.emit(this.listCheck);
    this.placeholder = item.nombre;
  }

  /* Busqueda de search bar */
  changeSearchTerm($event) {
    this.arrayAux = [];
    for (let item of this.items) {
      this.arrayAux.push(item);
    }
    if ($event !== "") {
      if (this.campoLabel == "") {
        this.search = [];
        for (let item of this.arrayAux) {
          if (item.nombre.toLowerCase().indexOf($event.toLowerCase()) !== -1) {
            this.search.push(item);
          }
        }
        if (this.search.length > 0) {
          this.arrayAux = [];
          for (let item of this.search) {
            this.arrayAux.push(item);
          }
        } else {
          this.arrayAux = [];
        }
      } else {
        this.search = [];
        for (let item of this.arrayAux) {
          if (
            item[this.campoLabel]
              .toLowerCase()
              .indexOf($event.toLowerCase()) !== -1
          ) {
            this.search.push(item);
          }
        }
        if (this.search.length > 0) {
          this.arrayAux = [];
          for (let item of this.search) {
            this.arrayAux.push(item);
          }
        } else {
          this.arrayAux = [];
        }
      }
    } else {
      this.arrayAux = [];
      for (let item of this.items) {
        this.arrayAux.push(item);
      }
    }
  }

  /* Llenar el arreglo auxiliar */
  fillArrayAux() {
    this.arrayAux = [];
    if(this.items != null && this.items.length > 0){
      for (let item of this.items) {
        this.arrayAux.push(item);
      }
    }
  }

  checkItem($item) {
    if (this.itemSelect != null) {
      for (let item of this.itemSelect) {
        if (item == $item) {
          return true;
        }
      }
    }
  }

  ngOnDestroy() {
    this.clickListener();
  }
}
