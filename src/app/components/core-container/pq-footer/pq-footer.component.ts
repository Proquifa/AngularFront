import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'pq-footer',
  templateUrl: './pq-footer.component.html',
  styleUrls: ['./pq-footer.component.scss']
})
export class PqFooterComponent implements OnInit {

@Output() ocultarMenu: EventEmitter<Boolean> = new EventEmitter<Boolean>();
oculto: Boolean = false;


url_flechaDerFooter: String = "./assets/Images/Flecha_hover.png";
url_flechaIzqFooter: String = "./assets/Images/FlechaIzqBlanca.svg";
url_logoRyndem: String = "./assets/Images/ryndem.svg";

  constructor() { }

  ngOnInit() {
  }

  eventOcultar() {
    this.oculto = !this.oculto;
    this.ocultarMenu.emit(this.oculto);
  }


}
