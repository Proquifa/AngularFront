import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { EmbalarService } from '../../../../services/embalar/embalar.service';
import { Router } from '@angular/router';
import { CoreContainerComponent } from '../../../core-container/core-container.component';
import { ComunService } from '../../../../services/comun/comun.service';
import { PartidaInspeccion } from '../../../../class/despachos/PartidaInspeccion.class';
import { Subscription } from 'rxjs';
import {Parametros} from '../../../../class/Parametros.class';

/**WEB Socket**/
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {SessionUser} from '../../../../services/session/session.service';

import {Empleado} from '../../../../class/Empleado.class';

@Component({
  selector: 'pq-vista-operacion-embalaje',
  templateUrl: './vista-operacion-embalaje.component.html',
  styleUrls: ['./vista-operacion-embalaje.component.scss']
})
export class VistaOperacionEmbalajeComponent implements OnInit {

  actividades: any[] = ["COLECTAR ELEMENTOS", "EMBALAR PRODUCTOS", "GENERAR PACKING LIST"];
  // actividades: any [] = ["INSPECCIONAR PARTIDA", "INSPECCIONAR PIEZAS", "ALMACENAR PRODUCTOS"];
  @Output() EventEmiterCambioFooter: EventEmitter<any> = new EventEmitter<any>();
  @Output() vistaPrincipal: EventEmitter<any> = new EventEmitter<any>();
  @Output() actualizarTotales: EventEmitter<any> = new EventEmitter<any>();
  @Input() vistaInicial: boolean;
  @Input() datosBarraProgreso: any;
  @Input() datosPrioridad: any;
  @Input() estadoVista: any;
  pedimentoVistaEscanear: any;
  activarGenerarPaking: boolean; // Activar el del paking list, para validar la factura
  vistaInicialI = true;
  cambioFooter = false;
  vColectarElementos: boolean;
  vEmbalarProductos: boolean;
  vPackingList: boolean;
  btnVistaColectar: boolean;
  btnVistaEmbalar: boolean;
  btnVistaPackingList: boolean;
  popUpColectarElementos: boolean;
  mostrarBoton: boolean;
  visualizarBotones: boolean;
  habilitarBoton: boolean;
  cambioDeFooter: boolean = false;
  clickArrows2: boolean;
  clickArrows1: boolean;
  maxItemList : number;
  indexBarraActividades: number;
  usuarioE: any;
  usuario: number;
  objetoColecta: any;
  activarPopUpPaking: boolean;
  estadoV: string; /// Almacenara que vista se debe mostrar de primera instancia
  enviarInfo: boolean; // Va enviar la señal de que ya se tiene que mandar la información del packing-list
  activarPopRegresar: boolean;
  regresarView: boolean;
  nombreVid: string;
  pasos: any[] = [
    "1.COLECTAR ELEMENTOS",
    "2.EMBALAR PRODUCTOS",
    "3.GENERAR PL"
  ];
  vistaSeleccionada: string = "1.COLECTAR ELEMENTOS";

  bloqueoIzquier:boolean = true;
  bloqueoDerecho:boolean = true;
  avanzar: boolean;
  regresar: boolean;
  activarImpresionSobre: boolean;
  @Input() partidaEmbalaje: PartidaInspeccion = new PartidaInspeccion();
  listaCliente: string | any;

  private serverUrl = 'http://187.189.39.53:10080/WebSocket/ws';
  private stompClient;
  listaPartidas: any;
  tiempoPrioridad: any;
  arrayidPedidos = new Array<any>();
  vEnviar: boolean;
  activarPasos: boolean;
  sobrante: boolean;
  activarAdv: boolean;
constructor(private embalarServices: EmbalarService, private coreComponent: CoreContainerComponent, private embalarServicesAgregar: EmbalarService, private embalarServicesEstado: EmbalarService) {
    this.vColectarElementos = true;
    this.btnVistaColectar = true;
    this.visualizarBotones = true;
    this.popUpColectarElementos = false;
    this.initializeWebSocketConnection();
   }
  initializeWebSocketConnection() {
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe("/topic/public", (message) => {
        if(message.body) {
          console.log("MENSAJE DE WEBSOCKET");
          console.log(message.body);
          if (message.body) {
            let data = JSON.parse(message.body);
            if (data.type === 'APP')
            {
              if (data.data.idUsuario === SessionUser.getInstance().getUser().getIdEmpleado()) {
                that.cambiarAColectar();
              }
            }
          }
        }
      });
    });
  }

  sendMessage(message){
    this.stompClient.send("/app/chat.sendMessage" , {}, JSON.stringify(message));
  }

  ngOnInit() {
    this.usuario =  SessionUser.getInstance().getUser().getIdEmpleado();
    // this.usuario = 54;
      this.consultarEstado();
    this.obtenerPartidaEmbalaje();

    console.log('Soy usuario=>', this.usuario);
    /// this.usuarioE = 159; /// Se adquiere el id del usuario
    // console.log('usuario::', this.usuarioE);
  }
 /* consultarEstadoP (idEmpleado: any) {
    this.embalarServicesEstado.consultarEstado(idEmpleado).subscribe(
      data  => {
        console.log('Soy data estado-->', data.current);
        this.estadoVista = data.current;
      });
  }*/
  consultarEstado() {
    this.activarPasos = false;
   /* this.consultarEstadoP (this.usuario);*/
    this.estadoV = this.estadoVista;
    console.log('Entre  VISTA OPERACION-->', this.estadoV);
    if (this.estadoV === 'Registro') {
       this.registrarEmbalarPedido( this.usuario);
    } else if (this.estadoV === 'Por Colectar') {
      this.objetoColecta = {idUsuarioLogueado: this.usuario  , estado: this.estadoV};
      this.colectarPartidas(this.objetoColecta);
      this.popUpColectarElementos = true;
      this.vColectarElementos = false;
      this.vEmbalarProductos = true;
      this.vColectarElementos = false;
      this.btnVistaColectar = false;
      this.btnVistaEmbalar = false;
      this.bloqueoIzquier = true;
      this.bloqueoDerecho = false;
      this.avanzar = true;
      this.avanzar = false;
      this.regresar = false;
      /*setTimeout(() => {
        this.avanzarS();
      }, 500);*/
      // this.avanzarS();
    } else if (this.estadoV === 'Generar' || this.estadoV === "generar") {
       this.avanzar = false;
      setTimeout(() => {
        this.avanzarS();
       this.avanzar = false;
      }, 500);
      //  this.avanzar = false;
      this.objetoColecta = {idUsuarioLogueado: this.usuario  , estado: 'Por Colectar'};
      this.colectarPartidas(this.objetoColecta);
      this.vEmbalarProductos = false;
      this.vPackingList = true;
      this.btnVistaEmbalar = false;
      this.visualizarBotones = false;
      this.vColectarElementos = false;
      // Se asignan los valores para que pueda avanzar la barra azul
      this.bloqueoIzquier = true;
      this.bloqueoDerecho = false;
      this.avanzar = true;
      this.regresar = true;
      // Cambiar la variable para cambiar el footer
      this.cambioDeFooter = true;
      this.activarPopUpPaking = false;
      this.EventEmiterCambioFooter.emit(this.cambioDeFooter);
    } else if (this.estadoV === 'Por Embalar' || this.estadoV === 'Por embalar') {
      this.objetoColecta = {idUsuarioLogueado: this.usuario  , estado: 'Por Colectar'};
      this.colectarPartidas(this.objetoColecta);
      this.visualizarBotones = true;
      this.btnVistaColectar = true;
      this.vColectarElementos = true;
      this.vEmbalarProductos = false;
      this.vPackingList = false;
      if (this.regresarView === true) {
        this.regresar = true;
        this.bloqueoIzquier = false;
        setTimeout(() => {
          this.avanzar = false;
          this.regresar = false;
          this.regresarA();
          this.regresar = true;
          this.bloqueoIzquier = false;
        }, 500);
      } else {
        this.avanzar = false;
        this.regresar = false;
      }
    } else if (this.estadoV === 'A Embalar' || this.estadoV === ' A embalar') {
      this.objetoColecta = {idUsuarioLogueado: this.usuario  , estado: this.estadoV};
      this.colectarPartidas(this.objetoColecta);
      this.popUpColectarElementos = false;
      this.vColectarElementos = false;
      this.vEmbalarProductos = true;
      this.btnVistaColectar = false;
      this.btnVistaEmbalar = false;
      this.bloqueoIzquier = true;
      this.bloqueoDerecho = false;
      this.avanzar = true;
      this.avanzar = false;
      this.regresar = false;
    } else if (this.estadoV === 'GDLEnvio') {
      this.objetoColecta = {idUsuarioLogueado: this.usuario  , estado: 'A Embalar'};
      this.colectarPartidas(this.objetoColecta);
      this.activarPasos = true;
      this.bloqueoIzquier = true;
      this.bloqueoDerecho = false;
      this.avanzar = true;
      setTimeout(() => {
        this.activarPasos = false;
        this.avanzar = false;
        this.bloqueoIzquier = false;
      }, 500);
      setTimeout(() => {
        this.activarPasos = true;
        this.bloqueoIzquier = true;
        this.bloqueoDerecho = false;
        this.avanzar = true;
      }, 500);
      this.popUpColectarElementos = false;
      this.vColectarElementos = false;
      this.vEmbalarProductos = false;
      this.btnVistaColectar = false;
      this.btnVistaEmbalar = false;
      this.vEnviar = true;
    }
  }
  ///////////////////////  ESTE MÉTODO DE ENCARGA DE MANDAR EL ID PARA GUARDAR EL REGISTRO ////////
  registrarEmbalarPedido(idEmpleado) {
          this.objetoColecta = {idUsuarioLogueado: this.usuario  , estado: 'Por colectar'};
          this.colectarPartidas(this.objetoColecta);
          this.vColectarElementos = true;
          this.vEmbalarProductos = false;
          this.vPackingList = false;
          this.avanzar = true;
          this.regresar = false;
  }
  regresarA() {
    setTimeout(() => {
      this.regresar = true;
      this.bloqueoIzquier = false;
    }, 500);
  }
  avanzarS() {
  this.avanzar = true;
  }
  colectarPartidas(objetoColectar) {
    this.coreComponent.openModal(1);
    this.embalarServices.colectarPartidas(objetoColectar).subscribe(
      data => {
        debugger;
        this.avanzar = true;
        // console.log('Soy data colectar Partidas', data.current);
        this.listaCliente = data.current.Cliente;
        this.listaPartidas = data.current.Cantidades ;
        this.tiempoPrioridad = data.current.TiempoPrioridad;
        this.coreComponent.closeModal(1);
      },
      error => {
        console.log("error embalar");
        console.log(error);
        // terminar loading false
        this.coreComponent.closeModal(1);
      }
      );
   }

  cambiarAColectar() {
    this.popUpColectarElementos = false;
    this.vColectarElementos = false;
    this.vEmbalarProductos = true;
    this.btnVistaColectar = false;
    this.btnVistaEmbalar = false;
    console.log('avanzar');
    // this.clickArrows2 = !this.clickArrows2;
    // Se asignan los valores para que pueda avanzar la barra azul
    this.bloqueoIzquier = true;
    this.bloqueoDerecho = false;
    this.avanzar = true;
    this.regresar = false;
    console.log(this.avanzar, this.bloqueoIzquier);
  }

  mostrarPopUp() {
    this.popUpColectarElementos = true;
    this.vColectarElementos = true;
    this.vEmbalarProductos = false;
    this.btnVistaColectar = true;
    this.btnVistaEmbalar = false;
    this.bloqueoIzquier = true;
    this.bloqueoDerecho = false;
    this.avanzar = false;
    this.regresar = false;
    this.actualizarEstado();
  }

  actualizarEstado () {
    let parametros:Parametros = new Parametros();
    parametros.estado = 'Por Colectar';
    parametros.idUsuarioLogueado = SessionUser.getInstance().getUser().getIdEmpleado();
    this.embalarServices.actualizarEstado(parametros).subscribe(
      data => {
        if (data && data.current) {
          var chatMessage = {
            type: 'DESKTOP',
            data: {
              idUsuario: SessionUser.getInstance().getUser().getIdEmpleado(),
              mensaje: "Por Colectar"
            }
          };

          this.sendMessage(chatMessage);
        }
      }
    );
  }
  actualizarEstadoV () {
    let parametros:Parametros = new Parametros();
    parametros.estado = 'A Embalar';
    parametros.idUsuarioLogueado = SessionUser.getInstance().getUser().getIdEmpleado();
    this.embalarServices.actualizarEstado(parametros).subscribe(
      data => {
        if (data && data.current) {
          var chatMessage = {
            type: 'DESKTOP',
            data: {
              idUsuario: SessionUser.getInstance().getUser().getIdEmpleado(),
              mensaje: "A Embalar"
            }
          };

          this.sendMessage(chatMessage);
        }
      }
    );
  }
  closePopUp() {
    this.popUpColectarElementos = false;
    this.vColectarElementos = true;
    this.vEmbalarProductos = false;
    this.btnVistaColectar = true;
    this.btnVistaEmbalar = false;
    this.bloqueoIzquier = true;
    this.bloqueoDerecho = true;
    this.avanzar = false;
    this.regresar = false;
  }

  webSocket () {
    SessionUser.getInstance().getUser().getIdEmpleado();
    var chatMessage = {
      type: 'APP',
      data: {
        idUsuario: SessionUser.getInstance().getUser().getIdEmpleado(),
        mensaje: "A Embalar"
      }
    };

    this.sendMessage(chatMessage);
    this.actualizarEstadoV();
  }

  mostrarBotones(valor: boolean) {
    this.mostrarBoton = valor;
    console.log("valor: " + this.mostrarBoton);
    if (this.mostrarBoton = false) {
        console.log("valor: false");
    } else {
      this.btnVistaEmbalar = true;
    }
  }
  cerrarPopPaking(val: boolean) {
    this.activarPopUpPaking = false;
  }
  cambiarAPackingList(val: boolean) {
    this.vEmbalarProductos = false;
    this.vPackingList = true;
    this.vistaInicialI = false;
    this.btnVistaEmbalar = false;
    this.visualizarBotones = false;
    // Se asignan los valores para que pueda avanzar la barra azul
    this.bloqueoIzquier = true;
    this.bloqueoDerecho = false;
    this.avanzar = true;
    this.regresar = true;
    // Cambiar la variable para cambiar el footer
    this.cambioDeFooter = true;
    this.EventEmiterCambioFooter.emit(this.cambioDeFooter);
  }
  activarPopPaking($val) {
    this.activarPopUpPaking = $val;
  }
  validarBotonGenerar($valor) {
     this.enviarInfo = true;
  }
  activarImpresionSobreG( val) {
    this.activarImpresionSobre = true;
  }
  // DOCS: SE MANDA A LLAMAR CUANDO LE DA AL BOTON GENERAR,
  // ANTES SE MANDABA A LLAMAR AL METODO "verificarGenFactura"
  verificarStock(){
    const idUser = SessionUser.getInstance().getUser().getIdEmpleado();
    this.embalarServices.validateStock(idUser).subscribe(
      data => {
            if(data && data.current){
              this.generarEtiquetaStock();
            }
            this.verificarGenFactura();
          },
      error =>{
          console.log("Error al verificar Stock");
        }
    );
  }
  //DOCS: SE MANDA A LLAMAR UNA VEZ QUE SE VALIDA SI HAY ETIQUETA PARA EL STOCK
  verificarGenFactura() {
    if (this.sobrante) {
      this.activarAdv = true;
    } else if (!this.sobrante) {
      this.activarGenerarPaking = true;
    }

  }
    verificarAvance(valor: number) {
      this.clickArrows2 = !this.clickArrows2;
      this.maxItemList = valor;
    }

    recibeIndex(indexActual: number) {
      this.indexBarraActividades = indexActual;
      console.log("this.index: " + this.indexBarraActividades )
      if (indexActual == 1) {
        this.maxItemList = 1;
        this.cambiarAColectar();
      } else
      if (this.indexBarraActividades == 2) {
        this.maxItemList = 2;
        // this.cambiarAPackingList();
    }
    //   } else {
    //       if((this.contDespachable == undefined || this.contDespachable == 0) && (this.contIncidencia == undefined || this.contIncidencia == 0)){
    //       this.regresar();
    //       }
    //         else{
    //         if (this.indexBarraActividades == 2 && this.confirmacion == false ) {
    //       if (this.recibePzas > this.recibeTotalPzas) {
    //         this.avanzarSimple();
    //         this.confirmacion = true;
    //       } else {
    //          // this.abrirPop();
    //          // this.regresar();
    //       }
    //     }
    //   }
    // }
    }

    obtenerPartidaEmbalaje() {
      /// console.log("Entro a vista operacion");
      // this.partidaEmbalaje;
      /// console.log(this.partidaEmbalaje);
    }


  vistaSelected(event) {
    this.vistaSeleccionada = event;
    // if (event == "COTIZAR" && this.lstProductos.length == 0) {
      // let param: Parametros = new Parametros();
      // param.idCliente = 28;
      // param.nivelCliente = "AA";
      // this.coreComponent.openModal(0);

    // }
  }

  HabilitarBotonGenerar(valor: boolean) {
  this.habilitarBoton = valor;
  console.log(this.habilitarBoton);
  }
  recibirActivacionB(activar: boolean) {
    this.habilitarBoton = activar;
  }
  regresarVistaP(activar: any) {
   this.vistaPrincipal.emit(activar);
  }
  actualizarVista($estado) {
    this.activarGenerarPaking = false;
    this.activarPopUpPaking = false;
    this.activarImpresionSobre = false;
    this.visualizarBotones = true;
    this.btnVistaColectar = true;
    this.vPackingList = false;
    this.regresarView = $estado;
    // this.vColectarElementos = true;
    this.estadoVista = 'Por embalar';
    this.actualizarTotales.emit(true);
    this.consultarEstado();
  }
  cambiaraEnviar($event) {
    this.actualizarTotales.emit(true);
    this.vEmbalarProductos = false;
    this.vPackingList = false;
    this.vEnviar = true;
  }
  recibirDatos(datos) {
    this.listaCliente = datos;
  }

  nombreVideo(nombre) {
    this.nombreVid = nombre;
  }
  validarSobrantes(estado) {
    this.sobrante = estado;
  }
  cerrarAdvertencia($event) {
    this.activarAdv = false;
    if ($event) {
      this.activarGenerarPaking = true;
    } else {
      document.getElementById('elementoText').focus();
    }
  }
  // TODO: METODO PARA GENERAR LA ETIQUETA IMPRESA CUANDO EL PEDIDO TENGA PARTIDAS SON DE STOCK
  generarEtiquetaStock() {
    console.log(SessionUser.getInstance().getUser().getIdEmpleado());
    const BrowserWindow = electron.remote.BrowserWindow;
    let newWin = new BrowserWindow({ width: 288, height: 216 });
    const base64 = 'data:image/png;base64,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';
    const html = [
      '\n' +
      '     <html><head>\n' +
      '        <style>\n' +
      '            "@media print { @page {size: 10cm 9cm;page-break-inside: avoid;page-break-before: avoid;page-break-after: avoid;}}\n' +
      '            html, body {\n' +
      '                width: 100%;\n' +
      '            }\n' +
      '            \n' +
      '            body {\n' +
      '                background: #cafe00;\n' +
      '            }\n' +
      '\n' +
      '            .contenido {\n' +
      '                display: flex;\n' +
      '                justify-content: center;\n' +
      '                align-items: center; font-size: 14px;font-family: Novecento;flex-direction: column;\n' +
      '            }\n' +
      '\n' +
      '        </style></head>\n' +
      '        <body> \n' +
      '            <div class=\'contenido\' >\n' +
      '<div>',
      '<img style=\'width: 9cm; height:6cm;\' ',
      'src=\'' + base64 + '\'>',
      '</div>',
      '            </div>\n' +
      '        \n' +
      '        </body></html>'
    ].join('');
    newWin.loadURL('data:text/html;charset=utf-8,' + encodeURI(html));
    newWin.hide();
    newWin.webContents.on('did-finish-load', () => {
      let prints = newWin.webContents.getPrinters();
      let impresora: String = '';

      for (let print of prints) {
        if (print.description == 'ZebraTicket') {
          impresora = print.name;
        }
      }

      newWin.webContents.print({ silent: false, printBackground: false, deviceName: impresora }, (success) => {
        newWin.close();
      });
    });
  }
}
