import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer, SimpleChanges } from '@angular/core';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';

@Component({
  selector: 'pq-combo-sin-border',
  templateUrl: './combo-sin-border.component.html',
  styleUrls: ['./combo-sin-border.component.scss']
})
export class ComboSinBorderComponent implements OnInit {

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

  @Input() heightLi: string = '25px';

  clickListener: Function;
  showDropList: boolean;
  dropListClass: string;
  @Input() title: string;
  placeholder: any = 'Search';
  searchTerm: string = null;
  arrayAux: any = [];
  search: any = [];
  resetSearch: boolean;

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
    //this.fillArrayAux();
  }

  ngOnChanges(changes: SimpleChanges){

    if(changes.currentValue){
      this.items=changes.currentValue;
    }
    if (changes.items != undefined){
      this.items=changes.items.currentValue;
      this.fillArrayAux();
    }
    if(changes.itemSelect !== undefined){
      if(changes.itemSelect.currentValue !== undefined && !changes.firstChange){
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
    this.title = item.nombre;
    this.closeDropList();
    this.resetSearch = !this.resetSearch;
    this.dropListClass = 'dropListSelect';
    this.valueDropList.emit(item);
    //this.fillArrayAux();
  }

  /* Busqueda de search bar */
  changeSearchTerm($event) {
    this.arrayAux = [];
    for (let item of this.items) {
      this.arrayAux.push(item);
    }
    if ($event !== '') {
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
      }else {
        this.arrayAux = [];
      }
    }else {
      this.arrayAux = [];
      for (let item of this.items) {
        this.arrayAux.push(item);
      }
    }
  }
  /* Llenar el arreglo auxiliar */
  fillArrayAux() {
    this.arrayAux = [];
    for (let item of this.items){
      this.arrayAux.push(item);
    }
  }

  ngOnDestroy() {
    this.clickListener();
  }
}
