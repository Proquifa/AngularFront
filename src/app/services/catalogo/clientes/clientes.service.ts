import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { SessionUser } from '../../session/session.service';
import 'rxjs/Rx'
import 'rxjs/add/observable/throw'

@Injectable()
export class ClienteService {
  private apiURL: string = SessionUser.getInstance().getIP() + 'obtenerClientesXUsuario'
  datos: any[] = []
  constructor(private http: Http){

  }

  obtenerClientesPorUsuario(isHabilitado){
    let bodyData = {
      empleado: {
        idFuncion: 72,
        usuario: 'OCardona'
      },
      habilitado:isHabilitado
    }

    let body = JSON.stringify(bodyData);
    let headers = new Headers();
    headers.append("Content-type", "application/json");
    let options = new RequestOptions({ headers: headers});
    return this.http.post(this.apiURL, body, options)
    .map( data => data.json())
    .catch( (error: any) => Observable.throw(error.json().error || 'Server Error'))
  }
}
