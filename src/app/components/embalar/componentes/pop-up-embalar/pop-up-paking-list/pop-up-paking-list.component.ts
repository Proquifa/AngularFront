import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pn-pop-up-paking-list',
  templateUrl: './pop-up-paking-list.component.html',
  styleUrls: ['./pop-up-paking-list.component.scss']
})
export class PopUpPakingListComponent implements OnInit {
  @Output () cambiarVistaPaking: EventEmitter <boolean> = new EventEmitter<boolean>();
  popUpComprobante: boolean = true;
  val: boolean;
  constructor() { }

  ngOnInit() {
  }
  cerrar() {
    this.popUpComprobante = false;
    this.cambiarVistaPaking.emit(true);
  }
}
