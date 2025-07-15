import { Injectable } from '@angular/core';
import {SessionUser} from '../session/session.service';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductosBoService {
private apiURLobtenerGraficaProveedor: String = SessionUser.getInstance().getIP() + 'gestionarBO/obtenerGraficaProveedor';
private apiURLobtenerProductosProveedor: String = SessionUser.getInstance().getIP() + 'gestionarBO/obtenerProductosProveedor';
private URLfinalizarProductoBO: String = SessionUser.getInstance().getIP() + 'gestionarBO/finalizarProductoBO';
  constructor(private http: Http) { }

  obtenerGraficaProveedor() {
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLobtenerGraficaProveedor + '', options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  obtenerProductosProveedor(idProveedor) {
    const body = idProveedor;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLobtenerProductosProveedor + '', body ,  options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  finalizarProductoBO(datos) {
    const body = datos;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.URLfinalizarProductoBO + '', body ,  options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
