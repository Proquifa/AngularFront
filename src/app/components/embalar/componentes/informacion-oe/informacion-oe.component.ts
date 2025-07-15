import {Component, Input, OnInit} from '@angular/core';
import {CoreContainerComponent} from '../../../core-container/core-container.component';

@Component({
  selector: 'pq-informacion-oe',
  templateUrl: './informacion-oe.component.html',
  styleUrls: ['./informacion-oe.component.scss']
})
export class InformacionOeComponent implements OnInit {
  cliente:string;
  usuario: string;
  ruta: string;
  zonaMensajeria: string;
  puesto: string;
  esac: string;
  datosPuesto: string;
  datosRuta: string;
  indiceValor = 0;
  @Input() informacionOe: any;
  constructor(private CoreComponent: CoreContainerComponent) { }

  ngOnInit() {
    //this.mostrarInformacionOe ();
  }
  mostrarInformacionOe () {
    if (this.indiceValor === 0) {
      this.CoreComponent.openModal(1);
      this.indiceValor ++;
    }
    console.log('Entre:)', this.informacionOe);
    this.ruta = this.informacionOe[0].ruta;
    this.esac = this.informacionOe[0].prioridad;
    this.zonaMensajeria = this.informacionOe[0].zonaMensajeria;
    this.usuario = this.informacionOe[0].contacto;
    this.puesto = this.informacionOe[0].puesto;
    if (this.puesto && this.puesto !== '' && this.puesto !== null && this.puesto !== undefined && this.puesto !== '-') {
      this.datosPuesto = this.usuario + './' + this.puesto;
    } else {
      this.datosPuesto = this.usuario;
    }
    if (this.zonaMensajeria && this.zonaMensajeria !== '' && this.zonaMensajeria !== null && this.zonaMensajeria !== undefined){
      this.datosRuta = this.ruta + '.-' + this.zonaMensajeria;
    } else {
      this.datosRuta = this.ruta;
    }
    this.cliente = this.informacionOe[0].cliente;
     if (this.indiceValor === 1) {
       setTimeout(() => {
         this.CoreComponent.closeModal(1);
         this.indiceValor ++;
       }, 1500);
     }
  }

  ngOnChanges() {
    if (this.informacionOe !== undefined) {
      this.mostrarInformacionOe();
    }
  }
}
