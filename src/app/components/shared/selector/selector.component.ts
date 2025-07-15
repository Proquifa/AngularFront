import { Component, OnInit, Input, EventEmitter, Output, Renderer, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { OptionClass } from '../../../class/option.class';


@Component({
  selector: 'app-pf-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit, OnChanges {

  @Input() isSimpleValue = true;
  @Input() placeholder = 'Buscar';
  @Input() lstItems: Array<OptionClass> = new Array<OptionClass>();
  @Input() defaultItem: OptionClass = new OptionClass();
  @Input() viewSearch = false;
  @Input() maxHeight = '200px';
  @Input() colorSelectedSimple = '#424242';
  @Input() isDisabled = false;
  @Input() isOpaque = false;
  @Input() inputHeight = '40px';
  @Output() outPutItem: EventEmitter<OptionClass> = new EventEmitter<OptionClass>();

  public classDropList = 'selectContainerDrop'; // to open = 'selectContainerDrop open'
  public lstItemsAux: Array<OptionClass> = new Array<OptionClass>();
  public randomValue = 'inputValue' + Math.random().toString(36).substring(7);
  public valueSelected: OptionClass = new OptionClass();

  constructor(
    private renderer: Renderer,
    private elementRef: ElementRef
  ) {
    this.renderer.listenGlobal(
      'document',
      'click',
      (event: MouseEvent) => this.handleGlobalClick(event)
    );
  }
  ngOnInit() { }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
    if (this.lstItems !== undefined && this.lstItems !== null) {
      this.lstItemsAux = Object.assign(new Array<OptionClass>(), this.lstItems);
    } else {
      this.lstItems = [];
      this.lstItemsAux = [];
      let noOptions: OptionClass = {
        id: -1,
        texto: 'Sin Elementos'
      };
      this.lstItems.push( Object.assign(new OptionClass(), noOptions));
    }
    if (this.defaultItem != null) {
      this.fnSelectItem(this.defaultItem);
    }
  }
  fnSelectItem(item: OptionClass) {
    if (item.id !== -1) {
      this.valueSelected = Object.assign(new OptionClass(), item);
      this.outPutItem.emit(this.valueSelected);
    }
    this.fnCloseList();
  }
  fnOpenList() {
    document.getElementById(this.randomValue).blur();
    this.classDropList = 'selectContainerDrop open';
  }
  fnCloseList() {
    this.classDropList = 'selectContainerDrop';
  }
  handleGlobalClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.fnCloseList();
    }
  }

  fnGetSearchValue($event: string) {
    console.log('fnGetSearchValue', $event);
    let search = $event.toLocaleLowerCase();
    this.lstItems = Object.assign(new Array<OptionClass>(), this.lstItemsAux);
    let lstAux = new Array<OptionClass>();
    if (search !== '') {
      for (let item of this.lstItems) {
        if (
          item.texto.toLocaleLowerCase().lastIndexOf(search) !== -1 ||
          (item.texto1 !== undefined &&
            item.texto1 !== null &&
            item.texto1 !== ''
            && item.texto1.toLocaleLowerCase().lastIndexOf(search) !== -1)
        ) {
          lstAux.push(Object.assign(new OptionClass(), item));
        }
      }
      this.lstItems = Object.assign(new Array<OptionClass>(), lstAux);
    }
  }

}


/*

<pf-selector
  [isSimpleValue]="isSimpleValue"
  [placeholder]="placeholder"
  [lstItems]="lstItems"
  [defaultItem]="defaultItem"
  [viewSearch]="viewSearch"
  [maxHeight]="maxHeight"
  (outPutItem)="fnoOutPutItem($event, i)"
  ></pf-selector>

*/
