import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { SessionUser } from "../../session/session.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CerrarRutaService {
  private apiURLdatosGrafica: String = SessionUser.getInstance().getIP() + "cerrarRuta/datosGrafica";
  private apiURLCompararRuta: String = SessionUser.getInstance().getIP() + "cerrarRuta/compararRuta";
  private apiURLcalificarRuta: String = SessionUser.getInstance().getIP() + "/cerrarRuta/calificarRuta";
  key: string = "AIzaSyD_xQ31kAkk6Sjh3qmpx93q4ce9xJ80TSg";
  private calcularTiempor: String = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=";

  constructor(private http: Http) { }
  datosGrafica() {
    let body = SessionUser.getInstance().getUser().idEmpleado;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(this.apiURLdatosGrafica + "", body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }
  compararRuta(idMensajero) {
    let body = idMensajero;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(this.apiURLCompararRuta + "", body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }
  
  calculoDistancia(o, d) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.calcularTiempor + o + "&destinations=" + d + "&key=" + this.key, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }
  calificarRuta(evaluacion) {
    let body = evaluacion;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    return this.http
      .put(this.apiURLcalificarRuta + "", body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }
}
