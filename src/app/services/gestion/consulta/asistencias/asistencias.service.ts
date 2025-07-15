import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { SessionUser } from './../../../session/session.service';
import { Parametros } from '../../../../class/Parametros.class';

import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
@Injectable()
export class AsistenciasService {
  private apiURLgetTrabajadorUnion: String = SessionUser.getInstance().getIP() + "getTrabajadorUnion";
  private apiURLgetTipoIncidencia: String = SessionUser.getInstance().getIP() + "getTipoIncidencia";
  private apiURLgetConsultaArea: String = SessionUser.getInstance().getIP() + "getConsultaArea";
  private apiURLgetConsultaDepartamento: String = SessionUser.getInstance().getIP() + "getConsultaDepartamento";
  private apiURLgetConsultaCategoria: String = SessionUser.getInstance().getIP() + "getConsultaCategoria";
  private apiURLgetAsistenciaUnion: String = SessionUser.getInstance().getIP() + "getAsistenciaUnion";

  constructor(private http: Http) { }

  getTrabajadorUnion() {
    let body;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.apiURLgetTrabajadorUnion + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  getTipoIncidencia() {
    let body;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.apiURLgetTipoIncidencia + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  getConsultaArea() {
    let body;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.apiURLgetConsultaArea + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  getConsultaDepartamento() {
    let body;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.apiURLgetConsultaDepartamento + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  getConsultaCategoria() {
    let body;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.apiURLgetConsultaCategoria + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  getAsistenciaUnion(parametros: any) {
    let body = JSON.stringify(parametros);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.apiURLgetAsistenciaUnion + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

}
