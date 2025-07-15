import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { SessionUser } from './../../../session/session.service';
import { Parametros } from '../../../../class/Parametros.class';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class LlamadasService {
  private apiURLObtenerLlamadas: String = SessionUser.getInstance().getIP() + "obtenerLlamadas";

  constructor(private http: Http) { }

  obtenerLlamadas(parametros: Parametros) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLObtenerLlamadas + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
}
