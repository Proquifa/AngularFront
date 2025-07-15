import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'gn-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnChanges {

  searchForm: FormGroup;
  searchTerm: string;
  imgClase: string;

  @Output() searchTermChanged: EventEmitter<string> = new EventEmitter<string>();
  @Input() placeholder: string;
  @Input() searchValue: string;
  @Input() imageSerch: boolean;
  @Input() reset: boolean;

  //private imagen: string = './assets/Images/lupa.svg';

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this._fb.group({
      searchTerm: ['']
    });
    this.searchTerm = this.searchValue;
    this.searchForm.valueChanges.subscribe( () => {
      this.searchTerm = this.searchForm.get('searchTerm').value;
      this.returnSearchTerm();
    });
    if (!this.imageSerch) {
      //this.imagen = './assets/Images/lupa.svg';
      this.imgClase = '';
    }else {
     // this.imagen = './assets/Images/lupa.svg';
      this.imgClase = 'imagen2';
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.reset !== undefined && this.searchForm !== undefined) {
      console.log(changes);
      this.searchForm.patchValue({
        searchTerm: ''
      });
    }
  }

  changeSearchTerm() {
    this.searchTerm = this.searchForm.controls['searchTerm'].value;

  }

  returnSearchTerm() {
    this.searchTermChanged.emit(this.searchTerm);
  }
}
