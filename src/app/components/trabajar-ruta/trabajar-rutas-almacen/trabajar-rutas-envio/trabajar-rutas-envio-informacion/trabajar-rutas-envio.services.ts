import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {SessionUser} from "../../../../../../app/services/session/session.service";
import "rxjs/Rx";
import "rxjs/add/observable/throw";
///Agregue
import "rxjs/add/operator/map";

@Injectable()
export class TrabajarRutasEnvioService {
  private apiURLgetRealizarEnvio: String = SessionUser.getInstance().getIP() + "crearEnvio";
  private apiURLgetEnviarTrackingNumber: String = SessionUser.getInstance().getIP() + "enviarTrackingNumber";
  private apiURLgetEnviarFileGuideShip: String = SessionUser.getInstance().getIP() + "obtenerrArchivo";
  private apiURLgetRealizarEnvioUps = "https://onlinetools.ups.com/rest/Ship";
  // private apiURLgetRealizarEnvioUps = "https://wwwcie.ups.com/rest/Ship";
  private apiURLguardarArchivo: String = SessionUser.getInstance().getIP() + "guardarArchivo";
  private apiURLgetObtenerArchivoUPS: String = SessionUser.getInstance().getIP() + "obtenerRutaArchivo";
  private apiURLobtenerObjetivos: String = SessionUser.getInstance().getIP() + "trEnvio/obtenerObjetivos";
  private apiURLobtenerMontosTab: String = SessionUser.getInstance().getIP() + "trEnvio/obtenerMontosTab";
  private apiURLobtenerInfoGraficas: String = SessionUser.getInstance().getIP() + "trEnvio/obtenerInfoGraficas";
  private apiURLobtenerPackingListClient: String = SessionUser.getInstance().getIP() + "trEnvio/obtenerPackingListClient";
  private apiURLObtenerEstadisticaUsuarioEnvioPL: String = SessionUser.getInstance().getIP() + "ObtenerEstadisticaUsuarioEnvioPL"; /*Servicio para consultar las estadisticas de usuario*/
  private apiURLobtenerTiempoTrabajoEnvio: String = SessionUser.getInstance().getIP() + "obtenerTiempoTrabajoEnvio"; /*Servicio para consultar los datos de la barra de prioridades*/
  private apiURLRegistrarTrEnvio: String = SessionUser.getInstance().getIP() + "RegistrarTrEnvio";
  private apiURLuploadFile: String = SessionUser.getInstance().getIP() + "/trEnvio/uploadFile/";

  constructor(private http: Http) {
  }
  uploadFile(numGuia, obj, tipo) {
    let data = new FormData();
    data.append('file', obj[0]);
    // let body = obj;
    let headers = new Headers();
    // headers.append("Content-Type", 'application/x-www-form-urlencoded');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLuploadFile + '' + numGuia + '/' + tipo , data, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  RegistrarTrEnvio(obj) {
    let body = obj;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLRegistrarTrEnvio + '' , body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  obtenerTiempoTrabajoEnvio() {
    //let body = datosUsuario;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLobtenerTiempoTrabajoEnvio + '' , options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  ObtenerEstadisticaUsuarioEnvioPL(datosUsuario) {
    let body = datosUsuario;
    let headers = new Headers();
    headers.append("Content-Type", 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLObtenerEstadisticaUsuarioEnvioPL+'', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  getRealizarEnvioUps(info_envio_ups: any) {
    let body = info_envio_ups;
    let headers = new Headers();
    let options = new RequestOptions({headers: headers});
    return this.http
      .post(this.apiURLgetRealizarEnvioUps, body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error ")
      );
  }

  getRealizarEnvioFedex(contac: any) {
    let body = JSON.stringify(contac);
    console.log("+++++++getRealizarEnvioFedex++++");
    console.log(body);
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({headers: headers});
    return this.http
      .post(this.apiURLgetRealizarEnvio + "", body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error ")
      );
  }

  obtenerTrackingNumber() {
    console.log("+++++++++++");
    let body;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({headers: headers});
    return this.http
      .post(this.apiURLgetEnviarTrackingNumber + "", body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }

  enviarFileGuideShip() {
    console.log("+++++++Guia++++");
    let body;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({headers: headers});
    return this.http
      .post(this.apiURLgetEnviarFileGuideShip + "", body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }

  guardaEtiquetaUPS(archivo: any) {
    console.log("***************ARCHIVO**********");
    console.log(archivo);
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({headers: headers});

    return this.http
      .post(this.apiURLguardarArchivo + "", archivo, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }

  obtenerArchivoUPS() {
    console.log("++++Ruta guia ups+++++++");
    let body;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({headers: headers});
    return this.http
      .post(this.apiURLgetObtenerArchivoUPS + "", body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }

  obtenerObjetivos() {
    console.log("++++obtenerObjetivos+++++++");
    let body;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({headers: headers});
    return this.http
      .post(this.apiURLobtenerObjetivos + "", body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }

  obtenerMontosTab() {
    console.log("++++obtenerMontosTab+++++++");
    let body;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({headers: headers});
    return this.http
      .post(this.apiURLobtenerMontosTab + "", body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }

  obtenerInfoGrafica() {
    console.log("++++obtenerInfoGrafica+++++++");
    let body;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({headers: headers});
    return this.http
      .post(this.apiURLobtenerInfoGraficas + "", body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }

  obtenerPackingListClient(){
    console.log("++++obtenerPackingListClient+++++++");
    let body;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    let options = new RequestOptions({headers: headers});
    return this.http
      .post(this.apiURLobtenerPackingListClient + "", body, options)
      .map(data => data.json())
      .catch((error: any) =>
        Observable.throw(error.json().error || "Server error")
      );
  }

}
