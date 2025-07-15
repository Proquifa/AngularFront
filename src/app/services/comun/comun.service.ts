import {Injectable} from '@angular/core';
import {Empleado} from '../../class/Empleado.class';
import {DatosGlobales} from '../../class/DatosGlobales.class';
import {ModeloParaCatalogoServices} from '../../class/ModeloParaCatalogoServices.class';
import {SessionUser} from './../session/session.service';
import {Observable} from 'rxjs/Observable';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Parametros} from '../../class/Parametros.class';

import {Subject} from 'rxjs/Subject';

import 'rxjs/Rx';
import 'rxjs/add/observable/throw';


@Injectable()
export class ComunService {

  private apiURL: String = SessionUser.getInstance().getIP() + 'validaUsuario';
  private token = SessionUser.getInstance().getToken();

  public valueVideo = new Subject<any>();
  public valueTipoInspeccion = new Subject<any>();
  public finalizar = new Subject<any>();
  public guardaVideo = new Subject<any>();
  public folioVideo = new Subject<any>();
  public finalizarEmbalado = new Subject<any>();
  public recargar = new Subject<any>();
  public videoEmbalar = new Subject<any>();

  idVentana: String;
  informacion: Object;
  campoTexto: String;
  text: String;
  name: String;
  height: Number;
  idContacto: Number;
  tipoSolicitud: String;
  razones: String;
  cliente: String;
  solicitante: String;

  usuario: string = '';
  loginForm: FormGroup;
  datosUsuario: Empleado;
  empleadoPorUsuario: Empleado;
  dir = 'http://proquifa.com.mx:51725/SAP/';

  private apiURLobtenerUltimaVersion: String = SessionUser.getInstance().getIP() + 'versionSistema';
  private apiURLobtenerFecha: String = SessionUser.getInstance().getIP() + 'comun/obtenerFecha';
  private URL_Generate_Code: String = SessionUser.getInstance().getIP() + 'generateCode/';

  constructor(private http: Http) {
  }

  obtenerUltimaVersion() {
    let body = 'ProquifaNet_Angular';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.apiURLobtenerUltimaVersion + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  login(username: String, password: String) {
    /* let sha1 = require('sha1') */
    /*   let hashedPassword = sha1(password); */
    console.log('entre al metodo login-service == ', username);
    console.log('entre al metodo login-service == ', password);


    /* ∫ */
    let user = {
      'usuario': username,
      'password': password
    };
    let body = JSON.stringify(user);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.apiURL + '', body, options)
      .map(data => data.json())
      // .map((products: Response) => products.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getYears(obj) {
    const body = obj;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.apiURLobtenerFecha + '', body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

   obtenerRuta(folio: string, tipo: string, fPor: string) {
    let ruta: string;
    let year: string;
    return new Promise((resolve, reject) => {
      switch (tipo) {
        case 'PackingList':
          year = this.getYearFolio(folio);
          ruta = this.dir + 'OrdenDespacho/PackingList/' + year + folio + '.pdf';
          resolve (ruta);
          break;
        case 'Imagen':
          year = this.getYearFolio(folio);
          ruta = this.dir + 'InspeccionOC/ImagenesRechazo/' + year + folio + '.png';
          resolve (ruta);
          break;
        case 'Pedidos':
          year = this.getYearFolio(folio);
          ruta = this.dir + 'Pedidos/' + year + folio + '.pdf';
          resolve (ruta);
          break;
        case 'Compra':
          year = this.getYearFolio(folio);
          ruta = this.dir + 'OrdenesDeCompra/' + year + folio + '-P.pdf';
          resolve (ruta);
          break;
        case 'Saldo':
          year = this.getYearFolio(folio);
          ruta = this.dir + 'SaldoAFavor/' + year + folio + '.pdf';
          resolve (ruta);
          break;
        case 'Entregas':
          year = this.getYearFolio(folio);
          ruta = this.dir + 'RegistroEntregaControlados/' + year + folio + '.pdf';
          resolve (ruta);
          break;
        default:
          const obj = {
            tipo: tipo,
            folio: folio,
            carpeta: fPor
          };
          this.getYears(obj).subscribe(
            data => {
              ruta = data.current;
              resolve(data.current);
            }
          );
          break;
      }
    });
  }

  getYearFolio(folio: string) {
    const pattern: RegExp = /\D/gi;
    let year: string = '';
    const dateActual: Date = new Date();
    if (folio) {
      folio = folio.replace(pattern, '');
      if (parseInt((folio as String).substring(4, 6)) < parseInt(dateActual.getFullYear().toString().substring(2, 4)) ) { // && parseInt((folio as String).substring(0,2)) >= 10
        year = '20';
        year += (folio as String).substring(4, 6) + '/';
      }
    }
    return year;
  }


  videoZindex(value: any) { //ocultar video de inspeccion partidas
    this.valueVideo.next(value);
  }

  tipoInspeccion(value: any) {
    this.valueTipoInspeccion.next(value);
  }

  finalizarI(value: any) { //envia cuando cierra alerta de operacion exitosa
    this.finalizar.next(value);
  }

  guardarVideo(value: any) {
    this.guardaVideo.next(value);
  }

  enviaFolio(value: any) {
    this.folioVideo.next(value);
  }

  finalizarEmb(valor: any) {
    this.finalizarEmbalado.next(valor);
  }

  recargarV(valor: string) {
    this.recargar.next(valor);
  }

  nombreVideoEmbalar(valor: string) {
    this.videoEmbalar.next(valor);
  }

  getQRCode(parameter: Parametros) {
    const body = JSON.stringify(parameter);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    return this.http.post(`${this.URL_Generate_Code}getQRCode`, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getBarcode(parameter: Parametros) {
    const body = JSON.stringify(parameter);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({headers: headers});
    return this.http.post(`${this.URL_Generate_Code}getBarcode`, body, options)
      .map(data => data.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}// fin class
