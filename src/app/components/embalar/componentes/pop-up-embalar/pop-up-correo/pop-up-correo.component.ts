import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {EmbalarService} from '../../../../../services/embalar/embalar.service';

@Component({
  selector: 'pn-pop-up-correo',
  templateUrl: './pop-up-correo.component.html',
  styleUrls: ['./pop-up-correo.component.scss']
})
export class PopUpCorreoComponent implements OnInit {
  @Input() correos: any;
  @Output() cerrarPop: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input () datos: any;
correo: boolean;
correoContacto: any[] = [];
copia: string;
comentario: string = '';
destinatarioCopia: string;
destinatariosC: any;
correosEnviar: string = '';
cc: string;
  constructor(private _embalar: EmbalarService) { }

  ngOnInit() {
    this.recuperarCorreos();
    this.correo = true;
    console.log('Datos -->', this.datos);
  }
  recuperarCorreos() {
    let correo: string;
    for (let i = 0; i < this.correos.length; i++) {
      if (i < this.correos.length - 1) {
        correo = this.correos[i] + ';';
        this.correosEnviar += correo;
      } else {
        correo = this.correos[i];
        this.correosEnviar += correo;
      }
      this.correoContacto.push(correo);
    }
  }
  cambioCopia(texto: string, tipo) {
    if (tipo === 'CCO') {
      this.destinatarioCopia = texto;
    } else if (tipo = 'CC') {
      this.cc = texto;
    }
  }
  finalizar() {
    this.correosEnviar.trim();
    const asunto = 'Factura' + ' ' + this.datos.factura;
    let obj = {
      correo: this.correosEnviar,
      ccorreo: this.cc,
      cocorreo: this.destinatarioCopia,
      asunto: asunto,
      cuerpoCorreo: this.comentario,
      facturadaPor: this.datos.fpor,
      archivoAdjunto: this.datos.factura
    };
  this._embalar.enviarCorreo(obj).subscribe(
    data => {
      console.log(data.current);
    });
    console.log(this.destinatarioCopia);
    console.log(this.cc);
    console.log(this.correosEnviar);
    this.cerrarPop.emit(true);
  }
}
