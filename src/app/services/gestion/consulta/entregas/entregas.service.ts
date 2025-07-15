import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { SessionUser } from './../../../session/session.service';
import { Parametros } from '../../../../class/Parametros.class';

import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
@Injectable()
export class EntregasService {
    private apiURLobtenerEntregas: String = SessionUser.getInstance().getIP() + "obtenerEntregas";
    private apiURLobtenerEntregasSinAviso: String = SessionUser.getInstance().getIP() + "obtenerEntregasSinAviso";
    private apiURLobtenerTiempoDeProceso: String = SessionUser.getInstance().getIP() + "obtenerTiempoDeProceso";
   
  constructor(private http: Http) { }
  obtenerEntregas(parametros: any) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLobtenerEntregas + '', body, options)
    .map(data => data.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  obtenerEntregasSinAviso(parametros: any) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLobtenerEntregasSinAviso + '', body, options)
    .map(data => data.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }


  obtenerTiempoDeProceso(parametros: any) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLobtenerTiempoDeProceso + '', body, options)
    .map(data => data.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
}