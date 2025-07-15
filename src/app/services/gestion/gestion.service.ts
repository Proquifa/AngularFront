import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { SessionUser } from './../session/session.service';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class GestionService {
  private apiURLDropCliente: String = SessionUser.getInstance().getIP() + "obtenerClientesPorIdUsuarioRol";
  private apiURLDropCobrador: String = SessionUser.getInstance().getIP() + "obtenerEmpleadosPorTipo";
  private apiURLdropFabricantes: String = SessionUser.getInstance().getIP() + "obtenerFabricantes";
  constructor(private http: Http) { }

  dropClientes(){
    let user = {
      "idUsuario": 91
    }
    let body = JSON.stringify(user);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLDropCliente + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  dropCobrador() {
    let user = {
      "tipo": "contabilidad"
    }
    let body = JSON.stringify(user);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLDropCobrador + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  dropFabricantes() {
    let valor = {
      "valorAdicional": ""
    }
    let body = JSON.stringify(valor);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLdropFabricantes + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

}
