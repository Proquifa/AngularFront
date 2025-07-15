import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pn-botones-tab',
  templateUrl: './botones-tab.component.html',
  styleUrls: ['./botones-tab.component.scss']
})
export class BotonesTabComponent implements OnInit {

  @Input() listItmes: any[];
  @Output() itemSelected = new EventEmitter();
  listSelected: any [];
  constructor() { }

  ngOnInit() {
    this.listSelected = new Array(this.listItmes.length).fill('noSelected');
    this.listSelected[0] = "itemSelected";
  }

  itemSelect(i){
    this.listSelected = new Array(this.listItmes.length).fill('noSelected');
    this.listSelected[i] = "itemSelected";

    this.itemSelected.emit(this.listItmes[i]);
  }

}
