import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {SessionUser} from '../session/session.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ArriboDocumentoService {

  private apiURLdocumentacionFaltante: String = SessionUser.getInstance().getIP() + 'gestorCompras/documentacionFaltante';
  private apiURLcontactoProveedor: String = SessionUser.getInstance().getIP() + 'gestorCompras/contactoProveedor';
  private apiURLobtenerProductosFaltantesPorProveedor: String = SessionUser.getInstance().getIP() + 'gestorCompras/obtenerProductosFaltantesPorProveedor';
  private apiURLuploadFile: String = SessionUser.getInstance().getIP() + 'comun/uploadFile/';
  private apiURLfinalizarDocumentacionFaltante: String = SessionUser.getInstance().getIP() + 'gestorCompras/finalizarDocumentacionFaltante';
  private apiURLobtenerTotales: String = SessionUser.getInstance().getIP() + 'gestorCompras/obtenerTotales';
  constructor(private http: Http) { }

  documentacionFaltante(usuario) {
    const body = {
      responsable: usuario
    };
    const headers = new Headers();
    headers.append("Content-Type", 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLdocumentacionFaltante + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  contactoProveedor(idProveedor) {
    const body = idProveedor;
    const headers = new Headers();
    headers.append("Content-Type", 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLcontactoProveedor + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  obtenerProductosFaltantesPorProveedor(datos) {
    const body = datos;
    const headers = new Headers();
    headers.append("Content-Type", 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLobtenerProductosFaltantesPorProveedor + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
  uploadFile(obj, nameFile, tipo, fPor) {
    let dataFile = new FormData();
    dataFile.append('file', obj[0]);
    let headers = new Headers();
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLuploadFile + '' + nameFile + '/' + tipo + '/' + fPor + '/' + '' , dataFile, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  finalizarDocumentacionFaltante(datos) {
    const body = datos;
    const headers = new Headers();
    headers.append("Content-Type", 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.put(this.apiURLfinalizarDocumentacionFaltante + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

  obtenerTotales(idUsuario) {
    const body = idUsuario;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiURLobtenerTotales + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
