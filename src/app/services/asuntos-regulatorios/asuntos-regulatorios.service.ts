import { Injectable } from '@angular/core';
import { Http, Response, Headers,  RequestOptions } from '@angular/http';
import { SessionUser } from '../session/session.service';
import { Observable } from 'rxjs/Observable';
@Injectable()

export class AsuntosRegulatoriosService {
  private apiURLgetPendietesPAP: String = SessionUser.getInstance().getIP() + "pap/getPendietesPAP";
  private apiURLcerrarPendietesPAP: String = SessionUser.getInstance().getIP() + "pap/cerrarPendietesPAP";
  private apiURLuploadFile: String = SessionUser.getInstance().getIP() + "pap/uploadFile/";
  constructor(private http: Http) { }

  getPendietesPAP(idUsuario) {
    let body = {
      idUsuario: idUsuario
    };
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLgetPendietesPAP + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  cerrarPendietesPAP(obj) {
    let body = obj;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLcerrarPendietesPAP + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  uploadFile(obj, idProducto, tipo, fpor) {
    let dataFile = new FormData();
    dataFile.append('file', obj[0]);
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    // Se necesita un valor por que no recibe vacios, por ello se agrego el 1
    return this.http.post(this.apiURLuploadFile + '' + idProducto + '/' + tipo + '/' +  '1' , dataFile, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }


}
