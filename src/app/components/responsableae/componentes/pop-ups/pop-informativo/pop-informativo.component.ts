import { Component,Output, OnInit,ViewChild, ElementRef, EventEmitter  } from '@angular/core';

@Component({
  selector: 'pq-pop-informativo',
  templateUrl: './pop-informativo.component.html',
  styleUrls: ['./pop-informativo.component.scss']
})
export class PopInformativoComponent implements OnInit {
  @Output() cambioIndex:EventEmitter<any> = new EventEmitter<any>();

  @ViewChild("pop") pop: ElementRef;

    cambio:boolean;
  constructor() { }

  ngOnInit() {
  }


  cerrar(){

    let data : any = {
      cambio:true,
    };
    this.pop.nativeElement.style.display = 'none';
      this.cambioIndex.emit(data);

    }

}
