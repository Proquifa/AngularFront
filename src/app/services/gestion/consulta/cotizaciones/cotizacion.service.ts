import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, ResponseContentType } from '@angular/http';
import { SessionUser } from './../../../session/session.service';
import { Parametros } from '../../../../class/Parametros.class';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class CotizacionService {
  private apiURLCotizacionesAvanzada: String = SessionUser.getInstance().getIP() + "buscarCotizacionesParaReporte";
  
  private apiURLCotizacionesRapida: String = SessionUser.getInstance().getIP() + "buscarCotizacionPorFolio";
  private apiURLObtenerPartidasXFolioCotizacion: String = SessionUser.getInstance().getIP() + "obtenerPartidasPorCotizacionEnSeguimiento";
  private apiURLObtenerHistorialXPartidaXidPCotiza: String = SessionUser.getInstance().getIP() + "obtenerHistorialSeguimientoXPartida";
  private apiURLObtenerTiempoProceso: String = SessionUser.getInstance().getIP() + "tiempoProcesoPCotiza";

  constructor(private http: Http) { }

  listaCotizacionesAvanzada(parametros: Parametros) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLCotizacionesAvanzada + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  listaCotizacionesRapida(parametros: Parametros) {
    let body = JSON.stringify(parametros);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLCotizacionesRapida + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
listaPartidasXFolioCotizacion(parametros: Parametros) {
  let body = JSON.stringify(parametros);
  console.log(body);
  let headers = new Headers();
  headers.append("Content-Type", 'application/json');
  let options = new RequestOptions({ headers: headers });
  return this.http.post(this.apiURLObtenerPartidasXFolioCotizacion + '', body, options)
    .map(data => data.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
}
listaHistorialXPartidaXidPcotiza(parametros: Parametros){

  let body = JSON.stringify(parametros);
  console.log(body);
  let headers = new Headers();
  headers.append("Content-Type", 'application/json');
  let options = new RequestOptions({ headers: headers });
  return this.http.post(this.apiURLObtenerHistorialXPartidaXidPCotiza + '', body, options)
    .map(data => data.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
}
listaTiempoProcesoPartidas(parametros:Parametros){

  let body = JSON.stringify(parametros);
  console.log(body);
  let headers = new Headers();
  headers.append("Content-Type", 'application/json');
  let options = new RequestOptions({ headers: headers });
  return this.http.post(this.apiURLObtenerTiempoProceso + '', body, options)
    .map(data => data.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))

}


}
