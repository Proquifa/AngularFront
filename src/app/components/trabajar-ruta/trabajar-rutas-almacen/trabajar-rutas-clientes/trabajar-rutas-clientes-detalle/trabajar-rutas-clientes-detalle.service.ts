import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { SessionUser } from "../../../../../../app/services/session/session.service";
import "rxjs/Rx";
import "rxjs/add/observable/throw";
///Agregue
import "rxjs/add/operator/map";



@Injectable()
export class TrabajarRutasClienteDetalleService {

  private apiURLgetObtenerPackingListClient: String = SessionUser.getInstance().getIP() + "trAlmacen/obtenerPackingListClient";
  private apiURLgetFinalizarEjecutarRutaAlmacen: String = SessionUser.getInstance().getIP() + "trAlmacen/finalizarEjecutarRutaAlmacen";
  private apiURLuploadFile: String = SessionUser.getInstance().getIP() + "trAlmacen/uploadFile/";

  constructor(private http: Http ) {
  }


  obtenerPackingListClient(idcliente:any) {
    console.log("+++++++Guia++++");
    let body=idcliente;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(this.apiURLgetObtenerPackingListClient + "", body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }

  finalizarEjecutarRutaAlmacen(infoContac: any) {
    let body = JSON.stringify(infoContac);
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(this.apiURLgetFinalizarEjecutarRutaAlmacen + "", body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error ")
      );
  }

  uploadFile(numPL, obj) {
    let data = new FormData();
    data.append('file', obj[0]);
    // let body = obj;
    let headers = new Headers();
    // headers.append("Content-Type", 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLuploadFile + '' + numPL , data, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }


}
