import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {SessionUser} from '../session/session.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EnvioPorClienteService {
private apiURLclientes: string = SessionUser.getInstance().getIP() + 'trEnvioXCliente/clientes';
private apiURLobtenerPackingPorCliente: String = SessionUser.getInstance().getIP() + 'trEnvioXCliente/obtenerPackingPorCliente';
private apiURLobtenerTotObjetivos: String = SessionUser.getInstance().getIP() + 'trEnvioXCliente/obtenerTotObjetivos';
private apiURLTiempo: String = SessionUser.getInstance().getIP() + 'trEnvioXCliente/tiempoPagoXCliente';
private apiURLPrioridades: String = SessionUser.getInstance().getIP() + 'trEnvioXCliente/ObtenerEstadisticaUsuarioEnvioPL';
private apiURLRegistrarTrEnvioPagoCliente: String = SessionUser.getInstance().getIP() + 'RegistrarTrEnvio';
private apiURLuploadFile: String = SessionUser.getInstance().getIP() + '/trEnvio/uploadFile/';

  constructor(private http: Http) { }

  obtenerCliente() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLclientes + '', options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  obtenerPackingList(idCliente) {
    const body = idCliente;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLobtenerPackingPorCliente + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  obtenerTotObjetivos() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLobtenerTotObjetivos + '', options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  obtenerTiempo() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLTiempo + '', options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  obtenerPrioridades(idUsuario) {
    const body = idUsuario;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLPrioridades + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  RegistrarTrEnvioPagoCliente(obj) {
    const body = obj;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLRegistrarTrEnvioPagoCliente + '' , body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  uploadFile(numGuia, obj, tipo) {
    const data = new FormData();
    data.append('file', obj[0]);
    // let body = obj;
    const headers = new Headers();
    // headers.append("Content-Type", 'application/x-www-form-urlencoded');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLuploadFile + '' + numGuia + '/' + tipo , data, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
