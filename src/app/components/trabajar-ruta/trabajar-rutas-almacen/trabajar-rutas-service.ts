import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { SessionUser } from "../../../../app/services/session/session.service";
import "rxjs/Rx";
import "rxjs/add/observable/throw";
///Agregue
import "rxjs/add/operator/map";

@Injectable()
export class TrabajarRutaService {
  private apiURLobtenerObjetivos: String =
    SessionUser.getInstance().getIP() + "trAlmacen/obtenerObjetivos";
  private apiURLobtenerInfoGraficas: String =
    SessionUser.getInstance().getIP() + "trAlmacen/obtenerInfoGraficas";
  private apiURLobtenerMontosTab: String =
    SessionUser.getInstance().getIP() + "trAlmacen/obtenerMontosTab";
  private apiURLObtenerEstadisticaUsuarioPL: String = SessionUser.getInstance().getIP() + "ObtenerEstadisticaUsuarioPL"; /*Servicio para consultar las estadisticas de usuario*/
  constructor(private http: Http) {}

  ObtenerEstadisticaUsuarioPL(usuario){
    let body = usuario;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLObtenerEstadisticaUsuarioPL+'', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  obtenerObjetivos() {
    console.log("+++++++Guia++++");
    let body;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(this.apiURLobtenerObjetivos + "", body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }

  obtenerMontosTab() {
    console.log("++++ObtenerObjetivos+++++++");
    let body;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(this.apiURLobtenerMontosTab + "", body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }

  obtenerInfoGraficas() {
    console.log("+++++++Guia++++");
    let body;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(this.apiURLobtenerInfoGraficas + "", body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }
}
