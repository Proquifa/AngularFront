import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'pn-envio-correo',
  templateUrl: './envio-correo.component.html',
  styleUrls: ['./envio-correo.component.scss']
})
export class EnvioCorreoComponent implements OnInit {
  @Output() cerrarPop: EventEmitter<any> = new EventEmitter<any>();
  @Input () correoContacto: any;
  correo: boolean;
  copia: string;
  comentario: string = '';
  destinatarioCopia: string = '';
  destinatariosC: any;
  cc: string = '';
  constructor() { }

  ngOnInit() {
    this.correo = true;
    console.log('sOY NUEVO CORREO -->');
  }
  cambioCopia(texto: string, tipo) {
    if (tipo === 'CCO') {
      this.destinatarioCopia = texto;
    } else if (tipo = 'CC') {
      this.cc = texto;
    }
  }
  finalizar() {
    const obj = {
      correo: this.correoContacto,
      ccorreo: this.cc,
      cocorreo: this.destinatarioCopia,
      cuerpoCorreo: this.comentario,
    };
    console.log(this.destinatarioCopia);
    console.log(this.cc);
    this.cerrarPop.emit(obj);
  }
}
