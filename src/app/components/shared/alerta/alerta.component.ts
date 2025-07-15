import { Component, OnInit,ViewChild,Output, ElementRef, Input,EventEmitter } from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'pq-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {
  @ViewChild("pop") pop: ElementRef;
  @Output() confirmacion:EventEmitter<any> = new EventEmitter<any>();
  @Input() alertaTxt: string="Error";
  @Input() activarBoton: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (!this.activarBoton) {
      setTimeout(() => {
        this.cerrar();
      }, 1500);
    }
  }
  cerrar(){
    this.pop.nativeElement.style.display = 'none';
    this.confirmacion.emit();
  }

}
