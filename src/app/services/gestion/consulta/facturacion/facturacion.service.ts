import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { SessionUser } from './../../../session/session.service';
import { Parametros } from '../../../../class/Parametros.class';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class FacturacionService {
  private apiURLListaFacturasEmitidas: String = SessionUser.getInstance().getIP() + "listarFacturasEmitidas";
  private apiURLConsultaAvanzadaFacturacion: String = SessionUser.getInstance().getIP() + "consultaAvanzadaFacturacion";
  private apiURLConsultaRapidaFacturacion: String = SessionUser.getInstance().getIP() + "consultaRapidaFacturacion";
  private apiURLObtenerResumen: String = SessionUser.getInstance().getIP() + "obtenerResumen";
  private apiURLObtenerLineaTiempoPrepago: String = SessionUser.getInstance().getIP() + "obtenerLineaTiempoPrepago";
  private apiURLObtenerResumenMonitoreoCobro: String = SessionUser.getInstance().getIP() + "obtenerResumenMonitoreoCobro";
  private apiURLObtenerResumenFacturaPrepago: String = SessionUser.getInstance().getIP() + "obtenerResumenFacturaPrepago";
  private apiURLObtenerResumenEntrega: String = SessionUser.getInstance().getIP() + "obtenerResumenEntrega";
  private apiURLObtenerResumenRevision: String = SessionUser.getInstance().getIP() + "obtenerResumenRevision";
  private apiURLObtenerResumenCobro: String = SessionUser.getInstance().getIP() + "obtenerResumenCobro";
  private apiURLObtenerResumenFactura: String = SessionUser.getInstance().getIP() + "obtenerResumenFactura";
  private apiURLObtenerResumenFacturacionXAdelantado: String = SessionUser.getInstance().getIP() + "obtenerResumenFacturacionXAdelantado";
  private apiURLEliminarZip: String = SessionUser.getInstance().getIP() + "eliminarZip";

  private urlgenerarZip: String = SessionUser.getInstance().getIP() + "generarZip";

  constructor(private http: Http) { }

  listarFacturasEmitidas(parametros: Parametros) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLListaFacturasEmitidas + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  consultaAvanzadaFacturacion(parametros: Parametros) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLConsultaAvanzadaFacturacion + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  consultaRapidaFacturacion(parametros: Parametros) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLConsultaRapidaFacturacion + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  obtenerResumen(parametros: Parametros) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLObtenerResumen + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  obtenerLineaTiempoPrepago(parametros: Parametros) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLObtenerLineaTiempoPrepago + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  obtenerResumenMonitoreoCobro(parametros: Parametros) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLObtenerResumenMonitoreoCobro + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  obtenerResumenFacturaPrepago(parametros: Parametros) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLObtenerResumenFacturaPrepago + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  obtenerResumenEntrega(parametros: Parametros) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLObtenerResumenEntrega + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  obtenerResumenRevision(parametros: Parametros) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLObtenerResumenRevision + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  obtenerResumenCobro(parametros: Parametros) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLObtenerResumenCobro + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  obtenerResumenFactura(parametros: Parametros) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLObtenerResumenFactura + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  obtenerResumenFacturacionXAdelantado(parametros: Parametros) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLObtenerResumenFacturacionXAdelantado + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  generarZip(parametros: Parametros) {
    let body = JSON.stringify(parametros);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('Accept', 'application/octet-stream');
    let options = new RequestOptions({ headers: headers, responseType: ResponseContentType.Blob });
    return this.http.post(this.urlgenerarZip + '', body, options)
      .map((products: Response) => products)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  eliminarZip(parametros: Parametros){
    let body = JSON.stringify(parametros);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers});
    return this.http.post(this.apiURLEliminarZip + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
