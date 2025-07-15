import { Component, OnInit, Output , EventEmitter , Input } from '@angular/core';

@Component({
  selector: 'pq-check-gris-palomita-verde',
  templateUrl: './check-gris-palomita-verde.component.html',
  styleUrls: ['./check-gris-palomita-verde.component.scss']
})
export class CheckGrisPalomitaVerdeComponent implements OnInit {

  @Output() event: EventEmitter<any> = new EventEmitter<any>();
  @Input() check: boolean;
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit() {
  console.log(this.check);
  }

  selected(check: boolean) {
    if (this.check == false) {
        this.check = true;
        this.event.emit(this.check);
        console.log("check", this.check);
  } else {
      this.check = false;
      this.event.emit(this.check);
      console.log("check ", this.check);
  }

}

}
