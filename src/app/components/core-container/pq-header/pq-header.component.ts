import {Component, OnInit} from '@angular/core';
import {SessionUser} from '../../../services/session/session.service';
import {Empleado} from '../../../class/Empleado.class';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'pq-header',
  templateUrl: './pq-header.component.html',
  styleUrls: ['./pq-header.component.scss']
})
export class PqHeaderComponent implements OnInit {

  nombreFuncion: string;
  sistemaActualizado: boolean = SessionUser.getInstance().getSistemaActualizado();

  constructor(private router: Router) {
  }

  url_configuracionPlantilla: String = './assets/Images/Configuracion.svg';

  ngOnInit() {
    this.nombreFuncion = SessionUser.getInstance().getUser() && SessionUser.getInstance().getUser().getNombreFuncion() || 'Admin';

  }
  cerrarSesion() {
    this.router.navigate(['/']);
  }


}
