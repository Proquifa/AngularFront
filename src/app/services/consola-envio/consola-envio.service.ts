import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {SessionUser} from '../session/session.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ConsolaEnvioService {

  private apiURLobtenerPrioridadesEnvio: string = SessionUser.getInstance().getIP() + 'prioridades/envio/obtenerPrioridades';
  private apiURLactualizarPausa: string = SessionUser.getInstance().getIP() + 'prioridades/reanudarEnvio';

  constructor(private http: Http) { }

  obtenerEnvios() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLobtenerPrioridadesEnvio + '', options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  actualizarUgencia(partidas) {
    const body = partidas;
    const headers = new Headers();
    const options = new RequestOptions({headers: headers});
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.apiURLactualizarPausa + '', body , options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json.error || 'Server error'));
  }
}
