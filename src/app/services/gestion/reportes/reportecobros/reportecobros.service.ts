import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { SessionUser } from './../../../session/session.service';
import { Parametros } from '../../../../class/Parametros.class';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class ReporteCobrosService {
    private apiURLreporteCobros: String = SessionUser.getInstance().getIP() + "reporteCobros";
    private apiURLlistarHistorialXFactura: String = SessionUser.getInstance().getIP() + "listarHistorialXFactura";
    constructor(private http: Http) { }
    
    reporteCobros(parametros: any){
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLreporteCobros + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }
    listarHistorialXFactura(parametros: any){
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLlistarHistorialXFactura + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
    }


}