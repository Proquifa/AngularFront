import { Component, OnInit , Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComunService } from '../../../services/comun/comun.service';
import { SessionUser } from '../../../services/session/session.service';
import { Empleado } from '../../../class/Empleado.class';

@Component({
  selector: 'pq-botonera',
  templateUrl: './pq-botonera.component.html',
  styleUrls: ['./pq-botonera.component.scss']
})
export class PqBotoneraComponent implements OnInit {
  username:string;
  constructor(private router: Router) { }

  url_ImagenFlechaCatGris: String = "./assets/Images/FlechaDerGris.svg";
  url_ImagenFlechaCatBlanca: String = "./assets/Images/Flecha_hover.png";
  url_usrPlantilla: String = "./assets/Images/Usr.svg";
  url_pendientesPlantilla: String = "./assets/Images/Pendientes.svg";
  url_mejorasPlantilla: String = "./assets/Images/Mejoras.svg";
  url_incidentePlantilla: String = "./assets/Images/Incidente.svg";
  url_solicitudPlantilla: String = "./assets/Images/Solicitud.svg";
  url_gestionPlantilla:String ="./assets/Images/Gestion.svg";
  url_catalogosPlantilla: String ="./assets/Images/Catalogos.svg";
  url_configuracionPlantilla: String = "./assets/Images/Configuracion.svg";

//Variables
  @Output() ocultarBotonera: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  oculto: Boolean = false;
  listaMenus: any = new Array<string>(7).fill('listaMenus');
  @Output() event: EventEmitter<any> = new EventEmitter<any>();
  @Input()iniciarBotonera:boolean;
  @Input() pendientes: number;
  @Input() mejoras: number;
  @Input() solicitud: number;
  @Input() gestion: number;
  @Input() catalogos: number;
  @Input() configuracion: number;
  @Input() incidente: number;


  ngOnInit() {
    this.username=SessionUser.getInstance().getUser().getUsuario();
    this.metodoDeDias('pendientes', 0);
    }

  pruebaPendientes(){
    console.log("entre a pendientes");
    this.router.navigate(['/protected/Pendientes']);
  }

  redirect(seccion:String){
    switch (seccion) {
      case "gestion":
      this.router.navigate(['/protected/gestion']);
      break;
      case "pendientes":
        let nivel: any;
        nivel = SessionUser.getInstance().getUser().getNivel();
        console.log('Soy fase de container,', nivel);
        switch (nivel) {
          case 1:
            this.router.navigate(['/protected/consolaPrioridades']);
            break;
          case 6:
            this.router.navigate(['/protected/embalar/']);
            break;
          case 12:
            this.router.navigate(['/protected/docFaltante']);
            break;
          case 31:
            this.router.navigate(['/protected/inspeccion']);
           break;
	  case 38:
            this.router.navigate(['/protected/gestorCuarentena']);
            break;
          case 40:
            this.router.navigate(['/protected/gestorRuta']);
            break;
          default:
            break;
          case 45:
            this.router.navigate(['/protected/interfacturacion/']);
            break;
          case 46:
            this.router.navigate(['/protected/receptorMaterial']);
            break;
          case 49:
            this.router.navigate(['/protected/asuntosRegulatorios']);
            break;
          case 53:
            this.router.navigate(['/protected/productosBO']);
            break;
        }
        break;
      case "catalogo":
        this.router.navigate(['/protected/catalogo']);
        break;
      default:
        this.router.navigate(['/protected/']);
      break;
    }

  }

  efectoAcordeon()
  {
    this.oculto = !this.oculto;
    this.ocultarBotonera.emit(this.oculto);
  }

  ngOnChanges(change: SimpleChanges){
      console.log(change);

      if(this.iniciarBotonera)
      {
        this.metodoDeDias('pendientes', 0)
      }
    }

  metodoDeDias(boton: string, index){
    /*console.log("boton", boton );
    this.listaMenus.fill('listaMenus');
    this.listaMenus[index]='listaMenusSeleccionado';
    this.event.emit(boton);*/
  }




}
