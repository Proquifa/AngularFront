import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pq-tarjeta-menu',
  templateUrl: './tarjeta-menu.component.html',
  styleUrls: ['./tarjeta-menu.component.scss']
})
export class TarjetaMenuComponent implements OnInit {
  @Input() nombre: String;
  @Input() imagen: String;
  @Input() redirect: String;
  divImg: String = "imgNormal";

  constructor( private router: Router) { }

  ngOnInit() {

  }

  hover(){
    this.divImg = "imgHover";
  }

  leave() {
    this.divImg = "imgLeave";
  }

  redirectTo(){
   //this.router.navigate(["protected/gestion/consulta/" + this.redirect]);
   this.router.navigate([this.redirect]);
 }


}
