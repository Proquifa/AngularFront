import { Component, OnInit, Input } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'pn-header-bc',
  templateUrl: './header-bc.component.html',
  styleUrls: ['./header-bc.component.scss']
})
export class HeaderComponent {

  /*  homePath se usa para indicar la ruta que se va redirigir al dar click
      en el ícono de la casa
  */
  @Input() homePath: string;
  /*  opciones es la lista de rutas que se representarán como breadcrumbs,
      cada objeto de la lista debe cumplir con la siguiente estructura como
      objeto:
        {
          label: 'Cliente',
          path: '/protected/catalogo/clientes',
          urlImg:'assets/Images/catalogo/nivelingresoblanco20x20px.png'
        }

      Siendo 'label' el texto que se mostrará como breadcrumb,
      'path' la ruta para redireccionamiento,
      'urlImg' si en ves de texto se va utilizar una imágen (atributo opcional)
  */
  @Input() opciones: any[];

  constructor(private router: Router){}

  backMenu(){
    this.router.navigate([this.homePath]);
  }

  goTo(path: string){
    this.router.navigate([path]);
  }
}
