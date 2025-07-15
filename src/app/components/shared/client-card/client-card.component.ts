import { Component, Input } from '@angular/core'

@Component({
  selector: 'client-card',
  template: `<div [ngClass]="'container' + (conFiltro ? '' : ' sinFiltro ' + containerClass)" (click)="flipCard(true)">
              <div class="img-container">
                <img class="" [src]="tieneImagen !== null ? 'assets/Images/clientes/' + idCliente+'.png' : 'assets/Images/clientes/default.png'" />
              </div>
              <p *ngIf="nombre && nombre !== ''">{{nombre}}</p>
            </div>`,
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent {
  @Input() idCliente: number;
  @Input() tieneImagen: string;
  @Input() nombre: string;
  @Input() conFiltro: boolean = true;
  @Input() containerClass: string = "";
  constructor(){}
}
