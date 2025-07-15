import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { SessionUser } from "../../../../../app/services/session/session.service";
import "rxjs/Rx";
import "rxjs/add/observable/throw";
///Agregue
import "rxjs/add/operator/map";



@Injectable()
export class TrabajarRutasClienteService {
    
  private apiURLgetinfoClientes: String = SessionUser.getInstance().getIP() + "trAlmacen/infoClientes";

 
 
  constructor(private http: Http ) {
  }


  infoClientes() {
    console.log("+++++++Guia++++");
    let body;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(this.apiURLgetinfoClientes + "", body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }





 

}
