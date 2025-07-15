import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { SessionUser } from './../../../session/session.service';
import { Parametros } from '../../../../class/Parametros.class';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class ComprasService {
  private apiURLConsultarCompras: String = SessionUser.getInstance().getIP() + "obtenerCompras";
  private apiURLConsultarProveedores: String = SessionUser.getInstance().getIP() + "obtenerProveedores";
  private apiURLConsultaPartidaPorComprasEspecifica: String = SessionUser.getInstance().getIP() + "obtenerPatidasCompraParaCEspecifica";
  private apiURLConsultaAvanzadaFacturacion: String = SessionUser.getInstance().getIP() + "consultaAvanzadaFacturacion";
  private apiURLobtenerGraficaXCompra: String = SessionUser.getInstance().getIP() + "obtenerGraficaXCompra";
  private apiURLobtenerTiempoProcesoPorPartida: String = SessionUser.getInstance().getIP() + "obtenerTiempoProcesoPorPartida";

  
  constructor(private http: Http) { }

  consultarCompras(parametros: Parametros) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLConsultarCompras + '', body, options)
    .map(data => data.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  consultarProveedores(parametros:Parametros){
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLConsultarProveedores + '', body, options)
    .map(data => data.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))

  }

  consultaPartidasPorCompraEspecifica(parametros:Parametros){
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLConsultaPartidaPorComprasEspecifica + '', body, options)
    .map(data => data.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))

  }

  consultarGraficaXCompra(parametros:Parametros){

    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLobtenerGraficaXCompra + '', body, options)
    .map(data => data.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))


  }

  obtenerTiempoProcesoPorPartida(parametros:Parametros){


    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLobtenerTiempoProcesoPorPartida + '', body, options)
    .map(data => data.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))

  }
}
