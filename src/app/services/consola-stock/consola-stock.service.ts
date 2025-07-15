import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {SessionUser} from '../session/session.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ConsolaStockService {

  private apiRULobtenerLista: string = SessionUser.getInstance().getIP() + 'prioridades/stock/obtenerPrioridades';
  private apiURLeliminarStock: string = SessionUser.getInstance().getIP() + 'prioridades/stock/updateStock';
  constructor(private http: Http) { }

  obtenerListado() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    return this.http.post(this.apiRULobtenerLista + '', options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json.error || 'Server error'))
  }
  eliminarStock(pieza) {
    const body = pieza;
    const headers = new Headers();
    const options = new RequestOptions({headers: headers});
    headers.append('Content-Type', 'application/json');
    return this.http.put(this.apiURLeliminarStock  + '', body , options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json.error || 'Server error'));
  }
}
