import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer, SimpleChanges} from '@angular/core';

@Component({
  selector: 'pn-drop-list-search',
  templateUrl: './drop-list-search.component.html',
  styleUrls: ['./drop-list-search.component.scss']
})
export class DropListSearchComponent implements OnInit {

  @Output() valueDropList: EventEmitter<any> = new EventEmitter();
  @Input() items: any;
  @Input() isSearch: boolean = true;
  @Input() isCategory: boolean = false;
  @Input() size: String = '';
  @Input() align: String = '';
  @Input() itemSelect: any;
  @Input() widthContent: any = '100%';
  @Input() marginLeftContent: any = '0px';
  @Input() tooltip: boolean = false;
  @Input() valImg: string = 'flechaVerde';
  @Input() heightLi: string = '25px';
  @Input() colorPrincipal: string = '#008894';
  @Input() colorSecundario: string = '#424242';
  clickListener: Function;
  showDropList: boolean;
  dropListClass: string;
  @Input()title: string;
  @Input()subtitle: string;
  @Input()subtitleActive: boolean = true;
  placeholder: any = 'Search';
  searchTerm: string = null;
  arrayAux: any = [];
  search: string;
  resetSearch: boolean;
  srcImagen: string;
  constructor(private renderer: Renderer, private elementRef: ElementRef) {
    this.clickListener = renderer.listenGlobal(
      'document',
      'click',
      (event: MouseEvent) => this.handleGlobalClick(event)
    );
  }

  ngOnInit() {
    this.showDropList = false;
    this.dropListClass = 'dropList';
    this.obtenerImagen(this.valImg);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.currentValue) {
      this.items = changes.currentValue;
    }
    if (changes.items !== undefined) {
      this.items = changes.items.currentValue;
      this.fillArrayAux();
    }
    if (changes.itemSelect !== undefined) {
      if (changes.itemSelect.currentValue !== undefined && !changes.firstChange){
        this.selectItem(this.itemSelect);
      }
    }
  }
  /*Se coloca la imagen*/
  obtenerImagen(valor) {
    switch (valor) {
      case 'flechaVerde' :
        this.srcImagen = './assets/Images/drop_list_flechaVerde.svg';
        break;
      case 'flechaRellena':
        this.srcImagen = './assets/Images/drop_list.svg';
        break;
      default:
        this.srcImagen = './assets/Images/drop_list_flechaVerde.svg';
        break;
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
    if (this.search === '') {
      this.title = 'Seleccionar';
    }
    if (this.title !== null && this.title !== undefined && this.title !== 'Seleccionar') {
      this.search = this.title;
    }
    this.showDropList = false;
  }

  /* Abre el drop list */
  openDropList($event): void {
    this.showDropList = true;
    $event.stopPropagation();
  }

  /* Selecciona opcion del drop list */
  selectItem(item: any): void {
    this.title = item.nombre;
    this.search = item.nombre;
    if (this.subtitleActive) {
      this.title +=  ' ·';
    }
    this.subtitle = item.puesto;
    this.closeDropList();
    this.resetSearch = !this.resetSearch;
    this.dropListClass = 'dropListSelect';
    this.valueDropList.emit(item);
    this.changeSearchTerm(item.nombre);
  }

  /* Busqueda de search bar */
  changeSearchTerm($event) {
    this.arrayAux = [];
    if ($event !== '') {
      for (let item of this.items) {
        if (item.nombre.toLowerCase().indexOf($event.toLowerCase()) !== -1) {
          this.arrayAux.push(item);
        }
      }
    } else {
      this.arrayAux = [...this.items];
    }
  }
  /* Llenar el arreglo auxiliar */
  fillArrayAux() {
    this.arrayAux = [];
    for (let item of this.items) {
      this.arrayAux.push(item);
    }
  }

  ngOnDestroy() {
    this.clickListener();
  }
}
