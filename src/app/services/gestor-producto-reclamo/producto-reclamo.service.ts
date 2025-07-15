import { Injectable } from '@angular/core';
import {SessionUser} from '../session/session.service';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductoReclamoService {
  private apiRULpiezasRechazadas: String = SessionUser.getInstance().getIP() + 'gestorQuarentena/piezasRechazadas';
  private apiURLpiezasReclamoPorProveedor: String = SessionUser.getInstance().getIP() + 'gestorQuarentena/piezasRechazadasPorProveedor';
  private apiURLfinalizar: String = SessionUser.getInstance().getIP() + 'reclamoProducto/finalizarReclamo';
  private apiURLobtenerTotales: String = SessionUser.getInstance().getIP() + 'gestorCompras/obtenerTotales';

  constructor(private http: Http) { }
  piezasRechazadas() {
    const body =  {concepto: 'reclamo',
      inspector: SessionUser.getInstance().getUser().getUsuario()};
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiRULpiezasRechazadas + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  piezasReclamoPorProveedor(idProveedor) {
    const body = {idProveedor: idProveedor, concepto : 'reclamo'};
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLpiezasReclamoPorProveedor + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  finalizarCuarentena(datos) {
    const body = datos;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    return this.http.put(this.apiURLfinalizar + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  obtenerTotales(idUsuario) {
    const body = idUsuario;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLobtenerTotales + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
