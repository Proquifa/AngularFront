import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {SessionUser} from '../session/session.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MaterialReceptorService {
private apiURLdatosGrafica: String = SessionUser.getInstance().getIP() + 'receptorMaterial/datosGrafica';
private apiURLgetGuias: String = SessionUser.getInstance().getIP() + 'receptorMaterial/getGuias';
private apiURLfinalizar: String = SessionUser.getInstance().getIP() + 'receptorMaterial/finalizar';
  constructor(private http: Http) { }

  datosGrafica(idUsuario) {
    let body = idUsuario;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLdatosGrafica+'', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  getGuias(idUsuario) {
    let body = idUsuario;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLgetGuias+'', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  finalizar(obj) {
    let body = obj;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLfinalizar+'', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
}
