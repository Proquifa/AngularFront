import { Component, OnInit, Output, Input, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'pq-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit, OnChanges {
  @Input() lstItems: string [] = [];
  @Input() disble: Boolean = true;
  @Input() direction: String;
  @Input() imgSize: String = '26.5px';
  @Input() borderBottom: Boolean = false;
  @Input() widthTotal: String = '120px';
  @Input() colorText: String = '#424242';
  @Input() colorTextSelected: String = '#424242';
  @Input() colorTextHover: String = '#424242';
  @Input() fontWeight: String = 'normal';
  @Input() hover: String = '';
  @Input() subFijo: String = '';
  @Input() fontSize: String = '12px';
  @Input() width: String = '';

  @Output() emitItem: EventEmitter<any> = new EventEmitter<any>();

  lstEstados: boolean[];
  colorTextAux: String = '';
  colorTextSelectedAux: String = '';
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(simple: SimpleChanges) {
    if (this.lstItems !== undefined && this.lstItems.length > 0) {
      this.lstEstados = new Array(this.lstItems.length);
      this.lstEstados.fill(false);
      this.lstEstados[0] = true;
    }
  }

  activeItem(opc) {
    if (this.disble) {
      this.lstEstados.fill(false);
      this.lstEstados[opc] = true;
      this.emitItem.emit(opc);
    }
  }

}
