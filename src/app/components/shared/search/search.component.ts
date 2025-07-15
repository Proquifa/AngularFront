import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pn-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() searchPlaceholder = 'Buscar...';
  @Output() searchEmitter: EventEmitter<string>  = new EventEmitter();

  public searchText = '';

  constructor() { }

  ngOnInit() {
  }

  fnEmitSearch() {
    this.searchEmitter.emit(this.searchText);
  }

}
