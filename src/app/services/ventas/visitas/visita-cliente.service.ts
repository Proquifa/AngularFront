import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, RequestOptions } from '@angular/http';
import { SessionUser } from '../../session/session.service';

@Injectable()
export class VisitaClienteService {

  private apiURLpendientesVisitaCliente: String = SessionUser.getInstance().getIP() + "pendientesVisitaCliente";
  private apiURLobtenerTodasVisitasPorSprint: String = SessionUser.getInstance().getIP() + "obtenerTodasVisitasPorSprint";
  private apiURLobtenerReportarVisita: String = SessionUser.getInstance().getIP() + "obtenerReportarVisita";
  private apiURLConsultarProveedores: String = SessionUser.getInstance().getIP() + "obtenerProveedores";
  private apiURLObtenerProductosConCampana: String = SessionUser.getInstance().getIP() + "obtenerProductosConCampana";

  constructor(private http: Http) { }

  pendientesVisitaCliente(parametros: any) {
    let body = JSON.stringify(parametros);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.apiURLpendientesVisitaCliente + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  obtenerTodasVisitasPorSprint(parametros: any) {
    let body = JSON.stringify(parametros);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.apiURLobtenerTodasVisitasPorSprint + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  obtenerReportarVisita(parametros: any) {
    let body = JSON.stringify(parametros);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.apiURLobtenerReportarVisita + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  consultarProveedores(parametros:any){
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLConsultarProveedores + '', body, options)
    .map(data => data.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))

  }

  obtenerProductosConCampana(parametros:any){
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLObtenerProductosConCampana + '', body, options)
    .map(data => data.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))

  }

}
