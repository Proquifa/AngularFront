import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { SessionUser } from './../../../session/session.service';
import { Parametros } from '../../../../class/Parametros.class';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class NotaCreditoService {
  private apiURLGetNotaCreditoAvanzada: String = SessionUser.getInstance().getIP() + 'getNotaCreditoAvanzada';
  private apiURLGetNotaCreditoRapida: String = SessionUser.getInstance().getIP() + 'getNotaCreditoRapida';

  constructor(private http: Http) { }

  getNotaCreditoAvanzada(parametros: Parametros) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLGetNotaCreditoAvanzada + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  getNotaCreditoRapida(parametros: Parametros) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLGetNotaCreditoRapida + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
}
