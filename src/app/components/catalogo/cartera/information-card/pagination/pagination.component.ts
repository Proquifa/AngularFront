import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {OnChanges} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() clientes: any[];
  class= "clienteContent  w3-animate-right ";
  dataSplited: any[];
  pages: any[]=[];
  heigth="93%"
  current: number;
  constructor() { }

  ngOnInit() {
    this.split();
  }
  split(){
    if(this.clientes.length > 5){
      let pages=Math.ceil(this.clientes.length/5);
      let i=0;
      while(i<pages){
        let page={page: i }
        this.pages.push(page);
        i=i+1;
      }
      this.current=0;
      this.dataSplited= this.clientes.slice(0,5);
    }else{
      this.dataSplited= this.clientes.slice();
    }
  }
  newSplit(index){
    index= index*5;
    if((index+5)<=this.clientes.length){
      this.dataSplited= this.clientes.slice(index,index+5);
    }else{
      this.dataSplited= this.clientes.slice(index);
    }
  }
  change_page(page, event){
    if(page<this.current){
      this.class="clienteContent  w3-animate-left ";
    }else{
      this.class="clienteContent  w3-animate-right   ";
    }
    this.current=page;
    this.newSplit(page);
    event.stopPropagation();
  }
}
