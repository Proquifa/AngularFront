import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { SessionUser } from '../../session/session.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TotalesPorInspectorService {
  private apiURL: String = SessionUser.getInstance().getIP() + "consultaDeTotalesPorInspector";

  constructor(private http: Http) {
    console.log("Obtener consulta de totales por inspector");
  }

  consultaDeTotalesPorInspector(inspector : string){
    let body = JSON.stringify(inspector);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURL+ '', body, options)
    .map(data => data.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

}
