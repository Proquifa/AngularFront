import { Empleado } from '../../class/Empleado.class';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { SessionUser } from './../session/session.service';
import 'rxjs/Rx';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {
//   private apiURL: String = SessionUser.getInstance().getIP() + "validaUsuario";
//   private token = SessionUser.getInstance().getToken();
//   //datos:any[] = [];
//   idVentana:String;
//   informacion:Object;
//   campoTexto:String;
//   text:String;
//   name:String;
//   height:Number;
//   idContacto:Number;
//   tipoSolicitud:String;
//   razones:String;
//   cliente:String;
//   solicitante:String;
//   constructor(private http: Http) {}
//
//    login(username: String, password: String) {
//     /* let sha1 = require('sha1') */
//   /*   let hashedPassword = sha1(password); */
//       console.log("entre al metodo login-service");
//       console.log(username);
//       console.log(password);
//
// /* ∫ */
//     let user = {
//       'usuario': username,
//       'password': password
//     }
//     let body = JSON.stringify(user);
//     let headers = new Headers();
//     headers.append("Content-Type", 'application/json');
//     let options = new RequestOptions({ headers: headers });
//     return this.http.post(this.apiURL+'', body, options)
//     .map(data => data.json())
//     //.map((products: Response) => products.json())
//     .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
//   }
//
//
//
//       validarEmpleadoLogin(){
//           let empleadoAValidar: Empleado = new Empleado();
//   				empleadoAValidar.setUsuario = this.panelLogin.txtUsuario.text;
//   				empleadoAValidar.setPassword = this.panelLogin.txtContrasena.text;
//
//   				inicio = 1;
//       }
//
//




}
