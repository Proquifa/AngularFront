import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { SessionUser } from './../../../session/session.service';
import { Parametros } from '../../../../class/Parametros.class';

import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
@Injectable()
export class DocumentosRecibidosService {
    private apiURLbuscarDocumentosXBA: String = SessionUser.getInstance().getIP() + "buscarDocumentosXBA";
    private apiURLbuscarDocumentoRecibidoPorFolio: String = SessionUser.getInstance().getIP() + "buscarDocumentoRecibidoPorFolio";  
  constructor(private http: Http) { }

  buscarDocumentosXBA(parametros: any) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLbuscarDocumentosXBA + '', body, options)
    .map(data => data.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  buscarDocumentoRecibidoPorFolio(parametros: any) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLbuscarDocumentoRecibidoPorFolio + '', body, options)
    .map(data => data.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
}