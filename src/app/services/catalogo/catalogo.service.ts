import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { SessionUser } from '../session/session.service';
import { Empresa } from '../../class/catalogo/empresa.class';
import { Trabajador } from '../../class/catalogo/trabajador.class';
import { Poliza } from '../../class/catalogo/poliza.class';
import 'rxjs/Rx'
import 'rxjs/add/observable/throw'

@Injectable()
export class CatalogoService {
  private apiURL: string = SessionUser.getInstance().getIP()
  datos: any[] = []
  constructor(private http: Http){

  }

  obtenerClientesPorUsuario(){
    let urlRequest = this.apiURL  + 'obtenerClientesXUsuario'
    let bodyData = {
      empleado: {
        idFuncion: 72,
        usuario: 'OCardona'
      },
      habilitado: 1
    }

    let body = JSON.stringify(bodyData);
    let headers = new Headers();
    headers.append("Content-type", "application/json");
    let options = new RequestOptions({ headers: headers});

    return this.http.post(urlRequest, body, options)
    .map( data => data.json())
    .catch( (error: any) => Observable.throw(error.json().error || 'Server Error'))
  }

  obtenerCarterasPorUsuario(bodyData = { idFuncion: 0, idResponsable: 0, idCartera: 0 }){
    let urlRequest = this.apiURL  + 'obtenerCarterasPorColaborador'
    let body = JSON.stringify(bodyData);
    let headers = new Headers();
    headers.append("Content-type", "application/json");
    let options = new RequestOptions({ headers: headers});

    return this.http.post(urlRequest, body, options)
    .map( data => data.json())
    .catch( (error: any) => Observable.throw(error.json().error || 'Server Error'))
  }


  eliminarCartera(bodyData = { idUsuario:0, idCartera: 0}){
    let urlRequest = this.apiURL  + 'eliminarCartera'
    let body = JSON.stringify(bodyData);
    let headers = new Headers();
    headers.append("Content-type", "application/json");
    let options = new RequestOptions({ headers: headers});

    return this.http.post(urlRequest, body, options)
    .map( data => data.json())
    .catch( (error: any) => Observable.throw(error.json().error || 'Server Error'))
  }

  actualizarCartera(bodyData = {idUsuario: 0, cartera: {}}){
    console.log(bodyData)
    let urlRequest = this.apiURL  + 'actualizarCartera'
    let body = JSON.stringify(bodyData);
    let headers = new Headers();
    headers.append("Content-type", "application/json");
    let options = new RequestOptions({ headers: headers});

    return this.http.post(urlRequest, body, options)
    .map( data => data.json())
    .catch( (error: any) => Observable.throw(error.json().error || 'Server Error'))
  }

  obtenerClientesSinCartera(bodyData = { sinCartera: false, area: ""}){
    let urlRequest = this.apiURL  + 'obtenerClientesSinCartera'
    let body = JSON.stringify(bodyData);
    let headers = new Headers();
    headers.append("Content-type", "application/json");
    let options = new RequestOptions({ headers: headers});

    return this.http.post(urlRequest, body, options)
    .map( data => data.json())
    .catch( (error: any) => Observable.throw(error.json().error || 'Server Error'))
  }


  obtenerCombosNuevaCartera(bodyData = {}){
    let urlRequest = this.apiURL  + 'obtenerCombosNuevaCartera'
    let body = JSON.stringify(bodyData);
    let headers = new Headers();
    headers.append("Content-type", "application/json");
    let options = new RequestOptions({ headers: headers});

    return this.http.post(urlRequest, body, options)
    .map( data => data.json())
    .catch( (error: any) => Observable.throw(error.json().error || 'Server Error'))
  }

  obtenerCarteras(bodyData = { idFuncion: 0, idResponsable: 0, idCartera: 0 }){
    let urlRequest = this.apiURL  + 'obtenerCarteras'
    let body = JSON.stringify(bodyData);
    let headers = new Headers();
    headers.append("Content-type", "application/json");
    let options = new RequestOptions({ headers: headers});

    return this.http.post(urlRequest, body, options)
    .map( data => data.json())
    .catch( (error: any) => Observable.throw(error.json().error || 'Server Error'))
  }

  moverClienteACartera(bodyData = { idCliente: 0, idCartera: 0, idCarteraAnt: 0 }){
    let urlRequest = this.apiURL  + 'moverClienteDeCartera'
    let body = JSON.stringify(bodyData);
    let headers = new Headers();
    headers.append("Content-type", "application/json");
    let options = new RequestOptions({ headers: headers});

    return this.http.post(urlRequest, body, options)
    .map( data => data.json())
    .catch( (error: any) => Observable.throw(error.json().error || 'Server Error'))
  }

  obtenerEmpresas() {
    const urlRequest = this.apiURL + 'obtenerEmpresas';
    const body = JSON.stringify({});
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  obtenerEmpresasContabilidad() {
    const urlRequest = this.apiURL + 'obtenerEmpresasContabilidad';
    const body = JSON.stringify({});
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  obtenerBancosTrabajadorNomina() {
    const urlRequest = this.apiURL + 'obtenerBancosTrabajadorNomina';
    const body = JSON.stringify({});
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  obtenerPaisesCodPost() {
    const urlRequest = this.apiURL + 'obtenerPaisesCodPost';
    const body = JSON.stringify({});
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  obtenerNominaCatalogo(tipo: string) {
    const urlRequest = this.apiURL + 'obtenerNominaCatalogo';
    const body = JSON.stringify({ tipo: tipo });
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  obtenerColoniasPaisCodPost(idPais: number, codigoPostal: number) {
    const urlRequest = this.apiURL + 'obtenerColoniasPaisCodPost';
    const body = JSON.stringify({ idPais: idPais, codigoPostal: codigoPostal });
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  guardarEmpresa(empresa: Empresa) {
    const urlRequest = this.apiURL + 'guardarEmpresa';
    const body = JSON.stringify(empresa);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  guardarTrabajadorNomina(trabajador: Trabajador) {
    const urlRequest = this.apiURL + 'guardarTrabajadorNomina';
    const body = JSON.stringify(trabajador);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  obtenerEmpresaID(idEmpresa: number) {
    const urlRequest = this.apiURL + 'obtenerEmpresaID';
    const body = JSON.stringify({ idEmpresa: idEmpresa });
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  obtenerTrabajadoresNominaEmpresaID(idEmpresa: number) {
    const urlRequest = this.apiURL + 'obtenerTrabajadoresNominaEmpresaID';
    const body = JSON.stringify({ idEmpresa: idEmpresa });
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  obtenerTrabajadorNominaID(idTrabajadorNomina: number) {
    const urlRequest = this.apiURL + 'obtenerTrabajadorNominaID';
    const body = JSON.stringify({ idTrabajadorNomina: idTrabajadorNomina });
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }
  subirArchivosEmpresa(tipo: string, files: FileList, idEmpresa: number) {
    if (files.length > 0) {
      let file: File = files[0];
      let formData: FormData = new FormData();
      let body = {
        file: formData.append('', file),
        tipo: tipo,
        idEmpresa: idEmpresa
      };
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      let options = new RequestOptions({ headers: headers });
      return this.http.post(this.apiURL + 'subirArchivosEmpresa', body, options)
        .map(data => data)
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

    }
  }
  obtenerCuentasContables() {
    const urlRequest = this.apiURL + 'obtenerCuentasContables';
    const body = JSON.stringify({});
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  obtenerCuentasContablesEmpresa(idEmpresa: number) {
    const urlRequest = this.apiURL + 'obtenerCuentasContablesEmpresa';
    const body = JSON.stringify({ idEmpresa: idEmpresa });
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }
  obtenerContablesCaracteristicas() {
    const urlRequest = this.apiURL + 'obtenerContablesCaracteristicas';
    const body = JSON.stringify({});
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  obtenerClientesCuentasContables(tipoCliente: string) {
    const urlRequest = this.apiURL + 'obtenerClientesCuentasContables';
    const body = JSON.stringify({valorAdicional: tipoCliente});
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  obtenerProveedoresCuentasContables(tipoCliente: string) {
    const urlRequest = this.apiURL + 'obtenerProveedoresCuentasContables';
    const body = JSON.stringify({valorAdicional: tipoCliente});
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  desactivarCuentaContable(idCuenta: number) {
    const urlRequest = this.apiURL + 'desactivarCuentaContable';
    const body = JSON.stringify({ idCuenta: idCuenta });
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  agregarCuentaContable(cuenta) {
    const urlRequest = this.apiURL + 'agregarCuentaContable';
    const body = JSON.stringify(cuenta);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  obtenerPoliza(idPoliza: number) {
    const urlRequest = this.apiURL + 'obtenerPoliza';
    const body = JSON.stringify({ idPoliza: idPoliza });
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  obtenerLstPolizas() {
    const urlRequest = this.apiURL + 'obtenerLstPolizas';
    const body = JSON.stringify({});
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  obtenerLstPolizasEmpresa(idEmpresa: number) {
    const urlRequest = this.apiURL + 'obtenerLstPolizasEmpresa';
    const body = JSON.stringify({ idEmpresa: idEmpresa });
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

  obtenerLstCentroCostos() {
    const urlRequest = this.apiURL + 'obtenerLstCentroCostos';
    const body = JSON.stringify({});
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }
  agregarPoliza(poliza: Poliza) {
    const urlRequest = this.apiURL + 'agregarPoliza';
    const body = JSON.stringify(poliza);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(urlRequest, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

}
