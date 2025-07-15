import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {SessionUser} from '../session/session.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MaterialDestruccionService {

  private apiURLobtenerListado: string = SessionUser.getInstance().getIP() + 'prioridades/destruccion/obtenerListado';
  private apiURLuploadFile: String = SessionUser.getInstance().getIP() + 'comun/subirArchivo/';
  private apiURLenviarDestruccion: String = SessionUser.getInstance().getIP() + 'prioridades/destruccion/cerrarPendientes';
  constructor(private http: Http) { }

  obtenerListado() {
    const hearder = new Headers;
    hearder.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: hearder});
    return this.http.post(this.apiURLobtenerListado + '', options)
      .map(data => data.json())
      .catch((error: any ) => Observable.throw(error.json().error || 'Server error'));
  }

  uploadFile(obj, nameFile, tipo, fPor) {
    const dataFile = new FormData();
    dataFile.append('file', obj[0]);
    const headers = new Headers();
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLuploadFile + '' + tipo + '/' + fPor + '/' + nameFile  , dataFile, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  enviarDestruccion(lst) {
    const body = lst;
    const hearder = new Headers;
    hearder.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: hearder});
    return this.http.post(this.apiURLenviarDestruccion + '', body, options)
      .map(data => data.json())
      .catch((error: any ) => Observable.throw(error.json().error || 'Server error'));
  }
}
