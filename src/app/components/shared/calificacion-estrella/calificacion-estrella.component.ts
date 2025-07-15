import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "pn-calificacion-estrella",
  templateUrl: "./calificacion-estrella.component.html",
  styleUrls: ["./calificacion-estrella.component.scss"]
})
export class CalificacionEstrellaComponent implements OnInit {
  @Input()
  numEstrellas: number = 5;
  @Output()
  eventCambio: EventEmitter<number> = new EventEmitter<number>();

  lstEstrella: any[] = new Array<string>(this.numEstrellas).fill("estrella_gris");

  ngOnInit() {
  }

  calificar($i) {
    this.lstEstrella = new Array<string>(this.numEstrellas).fill("estrella_gris");
    for(let i:number = 0; i < $i + 1; i++){
      this.lstEstrella[i] = "estrella_amarilla";
    }
    this.eventCambio.emit($i + 1);
  }

}
