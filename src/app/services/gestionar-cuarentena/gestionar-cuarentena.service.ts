import { Injectable } from '@angular/core';
import {SessionUser} from '../session/session.service';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GestionarCuarentenaService {
  private apiRULpiezasRechazadas: String = SessionUser.getInstance().getIP() + 'gestorQuarentena/piezasRechazadas';
  private apiURLpiezasRechazadasPorProveedor: String = SessionUser.getInstance().getIP() + 'gestorQuarentena/piezasRechazadasPorProveedor';
  private apiURLfinalizarCuarentena: String = SessionUser.getInstance().getIP() + 'gestorQuarentena/finalizarCuarentena';

  constructor(private http: Http) { }

  piezasRechazadas() {
    const body = {concepto: 'cuarentena',
                  inspector: SessionUser.getInstance().getUser().getUsuario()};
    const headers = new Headers();
    headers.append("Content-Type", 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiRULpiezasRechazadas + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  piezasRechazadasPorProveedor(idProveedor) {
    const body = {idProveedor: idProveedor, concepto : 'cuarentena'};
    const headers = new Headers();
    headers.append("Content-Type", 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLpiezasRechazadasPorProveedor + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  finalizarCuarentena(datos) {
    const body = datos;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    return this.http.put(this.apiURLfinalizarCuarentena + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
