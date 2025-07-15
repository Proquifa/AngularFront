import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import {SessionUser} from '../session/session.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ConsolaPrioridadesService {

  private apiURLobtenerPrioridades: String = SessionUser.getInstance().getIP() + 'prioridades/obtenerPrioridades';
  private apiURLactualizarUrgencia: String = SessionUser.getInstance().getIP() + 'prioridades/actualizarUrgencia';
  private apiURLactualizarPausa: String = SessionUser.getInstance().getIP() + '/prioridades/actualizarPausado';
  private apiURLenableDelivery: string  = SessionUser.getInstance().getIP() + 'prioridades/habilitarEntrega';
  constructor(private http: Http) { }

  datosBotonera() {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    return this.http.post(this.apiURLobtenerPrioridades + '',  options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  actualizarUgencia(partidas) {
    const body = partidas;
    const headers = new Headers();
    const options = new RequestOptions({headers: headers});
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.apiURLactualizarUrgencia + '', body , options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json.error || 'Server error'));
  }

  actualizarPausado(datos) {
    const body = datos;
    const headers = new Headers();
    const options = new RequestOptions({headers: headers});
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.apiURLactualizarPausa + '', body , options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json.error || 'Server error'));
  }

  habilitarEntrega(pedido) {
    const body = pedido;
    const headers = new Headers();
    const options = new RequestOptions({headers: headers});
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.apiURLenableDelivery  + '', body , options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json.error || 'Server error'));
  }
}
