import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { SessionUser } from './../../../session/session.service';
import { Parametros } from '../../../../class/Parametros.class';

import 'rxjs/Rx';
import 'rxjs/add/observable/throw';
@Injectable()
export class CobrosService{
    private apiURLconsultaObtenerCobros: String = SessionUser.getInstance().getIP() + "consultaObtenerCobros";
    private apiURLobtenerClientesPorIdUsuarioRol: String = SessionUser.getInstance().getIP() + "obtenerClientesPorIdUsuarioRol";
    private apiURLobtenerEmpleadosPorTipo: String = SessionUser.getInstance().getIP() + "obtenerEmpleadosPorTipo";
    private apiURLobtenerBancosClientes: String = SessionUser.getInstance().getIP() + "obtenerBancosClientes";
    private apiURLobtenerCuentasBancoClientes: String = SessionUser.getInstance().getIP() + "obtenerCuentasBancoClientes";
    private apiURLobtenerLineaTiempoResumen: String = SessionUser.getInstance().getIP() + "obtenerLineaTiempoResumen";
    private apiURLobtenerInspectorEntrega: String = SessionUser.getInstance().getIP() + "obtenerInspectorEntrega";
    private apiURLobtenerInspectorRevision: String = SessionUser.getInstance().getIP() + "obtenerInspectorRevision";
    private apiURLobtenerInspectorCobro: String = SessionUser.getInstance().getIP() + "obtenerInspectorCobro";



    constructor(private http: Http) { }
    obtenerCobros(parametros: any) {
        let body = JSON.stringify(parametros);
        
        let headers = new Headers();
        headers.append("Content-Type", 'application/json');
        let options = new RequestOptions({ headers: headers });
      
        return this.http.post(this.apiURLconsultaObtenerCobros + '', body, options)
        .map(data => data.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
      }
      obtenerClientesPorIdUsuarioRol(parametros: Parametros) {
        let body = JSON.stringify(parametros);
        console.log(body);
        let headers = new Headers();
        headers.append("Content-Type", 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiURLobtenerClientesPorIdUsuarioRol + '', body, options)
        .map(data => data.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
      }
      obtenerEmpleadosPorTipo(parametros: Parametros) {
        let body = JSON.stringify(parametros);
        console.log(body);
        let headers = new Headers();
        headers.append("Content-Type", 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiURLobtenerEmpleadosPorTipo + '', body, options)
        .map(data => data.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
      }

      obtenerBancosClientes(parametros: Parametros) {
        let body = JSON.stringify(parametros);
        console.log(body);
        let headers = new Headers();
        headers.append("Content-Type", 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiURLobtenerBancosClientes + '', body, options)
        .map(data => data.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
      }

      obtenerCuentasBancoClientes(parametros: Parametros) {
        let body = JSON.stringify(parametros);

        let headers = new Headers();
        headers.append("Content-Type", 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiURLobtenerCuentasBancoClientes + '', body, options)
        .map(data => data.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
      }
      obtenerLineaTiempoResumen(parametros: any){
        let body = JSON.stringify(parametros);
        console.log(body);
        let headers = new Headers();
        headers.append("Content-Type", 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiURLobtenerLineaTiempoResumen + '', body, options)
        .map(data => data.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
      }



      obtenerInspectorEntrega(parametros: any){
        let body = JSON.stringify(parametros);
        console.log(body);
        let headers = new Headers();
        headers.append("Content-Type", 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiURLobtenerInspectorEntrega + '', body, options)
        .map(data => data.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
      }

      obtenerInspectorRevision(parametros: any){
        let body = JSON.stringify(parametros);
        console.log(body);
        let headers = new Headers();
        headers.append("Content-Type", 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiURLobtenerInspectorRevision + '', body, options)
        .map(data => data.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
      }
      obtenerInspectorCobro(parametros: any){
        let body = JSON.stringify(parametros);
        console.log(body);
        let headers = new Headers();
        headers.append("Content-Type", 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.apiURLobtenerInspectorCobro + '', body, options)
        .map(data => data.json())
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
      }
}