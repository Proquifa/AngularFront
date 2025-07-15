import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
 @Component({
  selector: 'pq-popup-grabacionVideo',
  templateUrl: './pop-up-grabacion-video.component.html',
  styleUrls: ['./pop-up-grabacion-video.component.scss']
})
export class PopUpGrabacionVideoComponent{
usuario:string = "Cesar Fernandez"
fechaHora: string = "Oct 12-2017, 9:06am";
folio: number = 19098805;
tipo: string = "inspección";
tipoUsr: string ="Inspector";

constructor(){}

}
