import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pn-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.scss']
})
export class ConfirmacionComponent implements OnInit {
  classPanel: string = "panelNormal";
  hiddenClose: boolean = true;
  lstRadiosRapida: string [] = ['Factura', 'Pedido', 'UUID'];
  avanzada: Boolean = true;
  date: Date;
  date2: Date;
  itemsDropList: any[] = [{ nombre: '- - Todos - -' },{ nombre: 'nombre1' }, { nombre: 'nombre2' }];
  defaultSelected: any = { nombre: '- - Todos - -' };

  txtFactura: String;

  constructor(private router: Router) { }

  ngOnInit() {
 
    this.date = new Date();
    this.date2 = new Date();
  }

  backMenu(){
    this.router.navigate([""]);
  }

  closePanel(){
    this.classPanel = "panelOcultar";
    this.hiddenClose = false;
  }

  openPanel() {
    if (!this.hiddenClose ){
      this.classPanel = "panelMostrar";
      this.hiddenClose = true;
    }
  }

  emitItem($event) {
    console.log($event);
  }

  filtroAvanzada(){
    this.avanzada = true;
  }

  filtroRapida() {
    this.avanzada = false;
  }

  getFechaImpl($event) {
    //console.log($event);
  }

  dropList(index, $event) {

  }
}
