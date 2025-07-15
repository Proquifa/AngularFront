import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import {SessionUser} from "../session/session.service";
import {Observable} from "rxjs/Rx";

@Injectable()
export class CartaPorteService {
  private apiURLObtenerPendientes = SessionUser.getInstance().getIP() + 'obtenerPendientesMensajero';
  private apiURLObtenerCatMensajeros = SessionUser.getInstance().getIP() + 'obtenerInfoMensajero';
  private apiURLObtenerCatVehiculos = SessionUser.getInstance().getIP() + 'obtenerVehiculos';
  private apiURLGetCatClient = SessionUser.getInstance().getIP() + 'obtenerClientesPorMensajero';
  private apiURLGenerateCartaPorte = SessionUser.getInstance().getIP() + 'timbrarCartaPorte';
  constructor(private  http: Http) { }

  obtenerPendientes() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLObtenerPendientes + '', options)
      .map(data => data.json())
      .catch((error: any)=> Observable.throw(error.json().error || 'Server error'))
  }
  obtenerCatMensajeros() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLObtenerCatMensajeros + '', options)
      .map(data => data.json())
      .catch((error: any)=> Observable.throw(error.json().error || 'Server error'));
  }
  obtenerCatVehiculos() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLObtenerCatVehiculos + '', options)
      .map(data => data.json())
      .catch((error: any)=> Observable.throw(error.json().error || 'Server error'));
  }
  getCatClient(mensajero) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLGetCatClient + '',mensajero, options)
      .map(data => data.json())
      .catch((error: any)=> Observable.throw(error.json().error || 'Server error'));
  }
  generateCartaPorte(data){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLGenerateCartaPorte + '',data, options)
      .map(data => data.json())
      .catch((error: any)=> Observable.throw(error.json().error || 'Server error'));

  }
}
