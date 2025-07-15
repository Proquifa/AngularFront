import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {SessionUser} from '../session/session.service';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class SaldosFavorService {
private apiURLconsultaEmpresas: String = SessionUser.getInstance().getIP() + 'saldoFavor/obtenerEmpresaProveedor';
private apiURLconsultaLista: String = SessionUser.getInstance().getIP() + 'saldoFavor/obtenerListado';
private apiURLgenerarSaldo: String = SessionUser.getInstance().getIP() + 'generarSaldo';
private apiURLhabilitarSaldo: String = SessionUser.getInstance().getIP() + 'saldoFavor/habilitarSaldo';
private apiURLuploadFile: String = SessionUser.getInstance().getIP() + 'comun/subirArchivo/';
  constructor(private http: Http) { }

  obtenerEmpresas(datos) {
    const body = datos;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLconsultaEmpresas + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  obtenerLista(tipo) {
    const body = tipo;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLconsultaLista + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  generarSaldo(datas) {
    const body = datas;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLgenerarSaldo + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  eliminarSaldo(datas) {
    const body = datas;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLhabilitarSaldo + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
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

}
