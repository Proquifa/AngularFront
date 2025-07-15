import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { SessionUser } from "../../session/session.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AsignarMensajeroService {

  key: string = "AIzaSyCjtEyMAWq3wRg6sN2z4bdb7YDBfIvyaLc";
  private apiURLdatosGrafica: String = SessionUser.getInstance().getIP() + "asignarMensajero/datosGrafica";
  private apiURLobtenerDetalle: String = SessionUser.getInstance().getIP() + "asignarMensajero/detalle";
  private apiURLactualizarRuta: String = SessionUser.getInstance().getIP() + "asignarMensajero/guardar";
  private apiURLpublicarRuta: String = SessionUser.getInstance().getIP() + "asignarMensajero/publicar";
  private apiURLobtenerFacturasFolio: String = SessionUser.getInstance().getIP() + "asignarMensajero/obtenerFacturasFolio";
  private apiURLobtenerTotales: String = SessionUser.getInstance().getIP() + 'mensajero/obtenerTotales';

  // private calcularTiempor: String = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=";
  // private calcularCoor: String = "https://maps.googleapis.com/maps/api/geocode/json?address=";

  private calcularTiempor: String = "/maps/api/distancematrix/json?origins=";
  private calcularCoor: String = "/maps/api/geocode/json?address=";

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

  obtenerDetalle() {
    let body = SessionUser.getInstance().getUser().idEmpleado;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(this.apiURLobtenerDetalle + "", body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }

  actualizarRuta(lista: any) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.apiURLactualizarRuta + "", lista, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }

  publicarRutas(lista: any) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    console.log("Publicando");
    return this.http.put(this.apiURLpublicarRuta + "", lista, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }

  //Servicios externos :)
  calculoDistancia(o, d) {
    let headers = new Headers();
    headers.append("Access-Control-Allow-Origin", "http://localhost:4200");
    headers.append("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    headers.append("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.calcularTiempor + o + "&destinations=" + d + "&key=" + this.key, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }

  obtenerCoord(calle) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.calcularCoor + calle + "&key=" + this.key, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }


  obtenerFacturasFolio(folios){
    let body = folios;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(this.apiURLobtenerFacturasFolio + "", body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }


  obtenerTotales() {
    const body = SessionUser.getInstance().getUser().idEmpleado;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http
      .post(this.apiURLobtenerTotales + '', body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || 'Server error')
      );
  }


}
