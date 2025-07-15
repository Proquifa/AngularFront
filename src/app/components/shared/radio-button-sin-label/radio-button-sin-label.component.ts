import { Component, OnInit, Output, Input, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'pn-radio-button-sin-label',
  templateUrl: './radio-button-sin-label.component.html',
  styleUrls: ['./radio-button-sin-label.component.scss']
  })
export class RadioButtonSinLabelComponent implements OnInit, OnChanges {
  @Input() lstItems: string [] = [];
  @Input() disble: Boolean = true;
  @Input() select: Boolean = false;
  @Input() direction: String;
  @Input() imgSize: String = '26.5px';
  @Input() borderBottom: Boolean = false;
  @Input() widthTotal: String = '120px';
  @Input() hover: String = '';
  @Input() subFijo: String = '';
  @Input() width: String = '';

  @Output() emitItem: EventEmitter<any> = new EventEmitter<any>();

  lstEstados: boolean[];
  colorTextAux: String = '';
  colorTextSelectedAux: String = '';
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(simple: SimpleChanges) {
   /*  if (this.lstItems !== undefined && this.lstItems.length > 0) { */
     /*  this.lstEstados = new Array(this.lstItems.length);
      this.lstEstados.fill(false);
      this.lstEstados[0] = true; */
   /*  } */
  }

  activeItem(opc) {
    if (this.disble) {
      if(this.select)
      this.select = false;
      else
      this.select = true;
    /*   this.lstEstados.fill(false);
      this.lstEstados[opc] = true;
      this.emitItem.emit(opc); */
    }
  }

}
