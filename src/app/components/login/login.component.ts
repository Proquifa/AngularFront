import {Empleado} from '../../class/Empleado.class';
import {DatosGlobales} from '../../class/DatosGlobales.class';
import {Component, OnInit, Input} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ComunService} from '../../services/comun/comun.service';
import {SessionUser} from '../../services/session/session.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {ElectronService} from 'ngx-electron';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'pq-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  appVersion = require('../../../../package.json').version;
  usuario: String = '';
  password: Empleado;
  inicio: Number = 0;
  loginForm: FormGroup;
  datosUsuario: Empleado;
  alertaTxt: string;
  alertaTxt2: string = '';
  _maximizer: Boolean = false;
  _fullScreen: Boolean = false;
  nombreFuncion: string;

  observable: Observable<Notification>;

  constructor(private router: Router, private _login: ComunService, private  _electronService: ElectronService) {
    document.addEventListener('keydown', event => {
      switch (event.key) {
        case 'Escape':
          this.exitFullScreen();
          break;
      }
    });
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'usuario': new FormControl(this.usuario, [Validators.required, Validators.minLength(1)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(1)])
    });

    this._login.obtenerUltimaVersion().subscribe(
      data => {
        let sistema = data.current;
        if( sistema.version != this.appVersion){
          this.alertaTxt = 'Existe una nueva versión del sistema';
          this.alertaTxt2 = 'Favor de consultar a soporte';
          document.getElementById('id01').style.display = 'flex';
          SessionUser.getInstance().setSistemaActualizado(false);
        } else {
          SessionUser.getInstance().setSistemaActualizado(true);
        }
      },
      error => {
        console.log('Error:', error);
      }
    );

    this.fullScreen();

  }

  login(_login: Empleado) {

    let verificarUsuario = this.loginForm.get('usuario').value;
    let verificarContraseña = this.loginForm.get('password').value;

    if (verificarUsuario != '' && verificarContraseña != '') {
      this._login.login(verificarUsuario, verificarContraseña).subscribe(
        data => {
          document.getElementById('fondoBlanco').style.background = 'url(\'../../assets/Images/fondogris.png\')';
          SessionUser.getInstance().setUser(data.current);
          console.log();
          console.log('uno ', data);
          let usuarioCorrecto: Boolean = false;

          if (data.current.usuario == 'Administrador') {
            usuarioCorrecto = true;
          } else {

            if (data.current.fase > 0) {
              switch (data.current.nivel) {
                case 1:
                  usuarioCorrecto = true;
                   this.router.navigate(['/protected/consolaPrioridades']);
                  // this.router.navigate(['protected/consolaEnvio']);
                  break;
                case 3:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 4:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 5:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 6:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/embalar/']);
                  break;
                case 8:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 9:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 10:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 12:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/docFaltante']);
                  break;
                case 13:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 14:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 15:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 16:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 18:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 19:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 20:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 21:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 22:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 23:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 24:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 31:
                  usuarioCorrecto = true;
                  // this.router.navigate(['/protected/']);
                  this.router.navigate(['/protected/inspeccion/']);
                  break;
                case 33:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 34:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 36:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 37:
                  console.log('**** usuario *****', data.current.usuario);
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 38:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/gestorCuarentena']);
                  break;
                case 39:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 40:
                case 46:
                  if (data.current.idFuncion == 36) {
                    usuarioCorrecto = true;
                    this.router.navigate(['/protected/gestorRuta/']);
                  } else {
                    usuarioCorrecto = true;
                    this.router.navigate(['/protected/receptorMaterial/']);
                  }
                  break;
                case 42:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 45:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/interfacturacion/']);
                  break;
                case 47:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/']);
                  break;
                case 49:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/asuntosRegulatorios']);
                  break;
                case 53:
                  usuarioCorrecto = true;
                  this.router.navigate(['/protected/productosBO']);
                  break;
              }
            } else {

              usuarioCorrecto = false;
              console.log('No hay datos', data);
            }
          }

        },
        error => {
          document.getElementById('id01').style.display = 'flex';
          this.alertaTxt = 'Usuario o contraseña inválida';
          console.log(error);
        }
      );
    }
    else {
      document.getElementById('id01').style.display = 'flex';
      this.alertaTxt = 'Llenar todos los campos';
    }
  }

  fullScreen() {
    this._electronService.remote.getCurrentWindow().setFullScreen(true);
    this._maximizer = true;
  }

  minimize() {
    if (this._electronService.remote.getCurrentWindow().isFullScreen()) {
      this.exitFullScreen();
      this._electronService.remote.getCurrentWindow().setSize(1368, 770);
    }
    setTimeout(() => {
      this._electronService.remote.getCurrentWindow().minimize();
    }, 500);
    ;
  }

  maximizer() {
    this.exitFullScreen();
    this._maximizer = !this._maximizer;
    if (this._maximizer) {
      this._electronService.remote.getCurrentWindow().maximize();
    } else {
      this._electronService.remote.getCurrentWindow().setSize(1368, 770);
    }
  }

  close() {
    this._electronService.remote.app.quit();
    this._electronService.remote.getCurrentWindow().close();
  }

  exitFullScreen() {
    if (this._electronService.remote.getCurrentWindow().isFullScreen()) {
      this._electronService.remote.getCurrentWindow().setFullScreen(false);
      this._maximizer = false;
    }

  }

} // fin class
