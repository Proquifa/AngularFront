import { Injectable } from '@angular/core';
import { SessionUser } from '../../session/session.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EstadisticasUsuarioService {
  private apiURL: String = SessionUser.getInstance().getIP() + "contadorSeccionArribados";

  constructor(private http: Http) {
    console.log("regreso del total de pizas para inspeccion...");
  }

  contadorSeccionArribados(){
    let body = JSON.stringify("");
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURL+'', body, options)
    .map(data => data.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

}
