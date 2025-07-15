import {Component, OnInit, Output, Input, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import {SessionUser} from '../../../../services/session/session.service';
import {EmbalarService} from '../../../../services/embalar/embalar.service';
import {ComunService} from '../../../../services/comun/comun.service';
declare const MediaRecorder: any;
declare const MediaStream: any;
@Component({
  selector: 'pq-vista-embalar-productos',
  templateUrl: './vista-embalar-productos.component.html',
  styleUrls: ['./vista-embalar-productos.component.scss']
})
export class VistaEmbalarProductosComponent implements OnInit {
  vistaVideo: boolean;
  vistaEmbalar: boolean;
  @Output() event: EventEmitter<any> = new EventEmitter<any>();
  @Output() cambiarVistaGenerar: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() EventEmitterEnviar: EventEmitter<any> = new EventEmitter<any>();
  @Output() eventActivarPopVistaP: EventEmitter<any> = new EventEmitter<any>();
  @Output() activarBoton: EventEmitter<boolean> = new EventEmitter<any>();
  @Output() activarImprimirGenerar: EventEmitter<boolean> = new EventEmitter<any>(); // Se emite cuado ya se va a imprimir en el clic generar
  @Input() datosCliente: any;
  @Input() activarEnviarInfo: boolean;
  @Input() estadoVistaUsuario: any;
  @Input() activarImpresionSobreProd: boolean;
  @Input() activarPaking: boolean; // Se recibe la activacion de mandar el paking list y se envia a productos por embalar
  @Output() sobrante: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild('video') video: ElementRef;
  vistaEtiquetaPoPGene: boolean;
  vistaEtiquetaPoPBolsa: boolean;
  botonGenerar: boolean;
  comentariosEntrega: string;
  path: string;
  mensajeVideo: boolean;
  videoValido: boolean = true;
  folioHielera: any; /// Almacenara el folio temporal de la hielera
  mostrarBotones: boolean; true;
  recibirValorFD: any;
  recibirValorEmbajale: any;
  idEmpleado: string;
  lista: any [] = [];
  listaCongelacion: any [] = [];
  listaRegrigeracion: any [] = [];
  listaAmbiente: any [] = [];
  totPzaCongelacion = 0;
  totPzaRefrigeracion = 0;
  totPzaAmbiente = 0;
  listaTotales: any;
  vistaEtiquetaPoP = false;
  openModal: boolean;
  openBtnMas: boolean;
  /*ruta: string = "http://192.168.2.156:8081:8080/SAP/InspeccionOC/videoPartida/"; */
  ruta: string = "http://proquifa.com.mx:51725/SAP/InspeccionOC/videoPartida/";
  /*rutaProd: string = "http://192.168.2.156:8080/SAP/InspeccionOC/videoPartida/";*/
  rutaProd: string = "http://proquifa.com.mx:51725/SAP/InspeccionOC/videoPartida/";
  /*"http://localhost:4848/glassfish4/glassfish/domains/domain1/docroot/SAP/InspeccionOC/videoPartida/"*/
  i: any = 0;
  desactivarBtn: string;
  folio: any; ////// ALMACENA LO QUE TRAE EL OUTPUT DEL POP-UP DE ESCANEAR y GENERAR-ETIQUETA (TRAE FOLIO Y TIPO)
  listaPaking: any[] = []; //// Esta variable recupera el valor que manda productos con respecto a lo que se debe mostrar en paking list
  manejoAScanear: string;
  popScaner: boolean;
  listaVideoConge: any[] = [];
  listaVideoAmbiente: any[] = [];
  listaVideo: any[] = [];
  cambiarImpresion: boolean;
  tipo: string;
  enviarTipo: string;
  activarFocus: boolean = false;
  /******VIDEO***/
  theStream;
  theRecorder;
  recordedChunks = [];
  mediaConstraints;
  datosClient: any;
  etiquetaBolsa: boolean;
  tipoEtiqueta: string;
  nombreVideo: string;
  private mediaRecorder: any;
  constructor(private embalarServices: EmbalarService, private ComunServices: ComunService) {
  this.vistaVideo = true;
  }

  ngOnInit() {
    let usuario = SessionUser.getInstance().getUser().getIdEmpleado();
    this.idEmpleado = usuario.toString();
    // this.idEmpleado = '54'
    console.log('Soy empleado  convertido<--->', this.idEmpleado);
    this.obtenerFolioPorUsuario(this.idEmpleado);
  }
  ngOnChanges() {
    this.datosClient = this.datosCliente;
    if (this.activarImpresionSobreProd) {
      this.cambiarImpresion = true;
      this.openModal = false;
      console.log('Entre de nuevo --->');
    }
    /*Se manda a llamar al que deitne la camara*/
    if (this.activarPaking) {
      this.save();
    }
  }
  /************************************************************************/
  ngAfterViewInit() {
    // set the initial state of the video
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = false;
    video.autoplay = true;
    this.startFunction();
  }
  startFunction() {
    let video = document.getElementsByTagName('video')[0];

    if (video) {
      this.mediaConstraints = {

        video: {mandatory: {minWidth: 1480, minHeight: 1024}}, audio: false

      };
      var that = this;
      navigator.getUserMedia(
        { video: true, audio: false },
        function (stream) {
          that.theStream = stream;
          var video = document.getElementsByTagName('video')[0];
          video.src = window.URL.createObjectURL(stream);
          video.muted = true;

          try {

            that.mediaRecorder = new MediaRecorder(stream, {mimeType : "video/webm"});
          } catch (e) {
            console.error('Exception while creating MediaRecorder: ' + e);
            return;
          }

          that.theRecorder = that.mediaRecorder;
          console.log(that.recordedChunks);
          that.mediaRecorder.ondataavailable =
            function (event) { that.recordedChunks.push(event.data); };
          that.mediaRecorder.start(100);

        },  function(error) {
          console.log(error);} )
    }
  }
  save() {
    this.theRecorder.stop();
    this.theStream.getTracks().forEach(track => { track.stop(); });

    let blob = new Blob(this.recordedChunks, {type: "video/webm"});
    let url =  URL.createObjectURL(blob);


    this.base64(blob).then((data: string) => {
      let base = data.split(",");
      //  console.log(base);
      let b64 = base[1];
      //  console.log(b64);
      this.guardarVideo(b64);
    });

    setTimeout(function() { URL.revokeObjectURL(url); }, 100);
  }
  base64(blob) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = function() {
        resolve(reader.result);
      }
    });
  }
  guardarVideo(obj: any) {
    const datos = {
      video: obj,
      concepto: 'Grabacion Embalar'
    };
    this.embalarServices.guardarVideo(datos).subscribe(
      data => {
        this.nombreVideo = data.current;
        console.log('Video ===> ', this.nombreVideo);
      },
      error => {
        console.log(error);
      });

  }
  /**********************************************/
  activarPopImp(valor) {
    this.activarImprimirGenerar.emit(valor);
  }
  quitarVistaVideo() {
   /* this.listaAmbiente = [{folio:1234}];
    this.listaCongelacion = [];*/
    this.vistaVideo = false;
    // this.vistaEmbalar = true;
    this.i = 1;
    this.event.emit(this.mostrarBotones);
    if (this.listaCongelacion.length > 0) {
      this.tipo = 'Hielera';
      this.manejoAScanear = 'Congelacion';
      this.openModal = true;
      this.popScaner = false;
    } else if (this.listaRegrigeracion.length > 0) {
      this.tipo = 'Hielera';
      this.manejoAScanear = 'Refrigeracion';
      this.openModal = true;
      this.popScaner = false;
    } else if (this.listaAmbiente.length > 0 ) {
      /*this.openModal = false;
      this.popScaner = true;*/
      this.tipo = 'Bolsa de tránsito';
      this.manejoAScanear = 'Ambiente';
      this.openModal = true;
    }
  }
  activarVistaPack($valor) {
    this.eventActivarPopVistaP.emit($valor);
  }
  recibirFD(valor: any) {
    this.recibirValorFD = valor;
    console.log('Soy valor', valor);
  }
  recibirTipoEmbajale(tipoEmbalaje: any) {
    this.recibirValorEmbajale = tipoEmbalaje;
    // console.log(tipoEmbalaje);
  }
  recibirValorB(val: boolean) {
    // console.log(val);
    this.EventEmitterEnviar.emit(val);
  }
  recibirDatosPakingList(valor: any) {
    // console.log('Entre al papá :)');
    this.listaPaking = valor;
  }
  recibirManejoScanear(manejo: string) {
    this.i += 1;
   if (manejo === 'Refrigeracion' || manejo === 'Refrigeración') {
     this.tipo = 'Hielera';
      this.manejoAScanear = manejo;
      this.openModal = true;
    } else if (manejo === 'Ambiente') {
      /*this.manejoAScanear = manejo;
      this.popScaner = true;*/
     this.tipo = 'Bolsa de tránsito';
     this.manejoAScanear = manejo;
     this.openModal = true;
    }
  }
  recibirFolio(folioPaking) {
    this.folio = folioPaking;
  }
  obtenerFolioPorUsuario(idEmpleado) {
    this.embalarServices.obtenerFolioPorUsuario(idEmpleado).subscribe(
      data => {
        // console.log('Soy data productos por embalar', data.current);
        this.lista = data.current;
        this.folioHielera = data.current[0].folioTemporal;
        // console.log('Folio hielera:', this.folioHielera);
        this.comentariosEntrega = data.current[0].comentariosEntrega;
        this.lista.forEach(element => {
          if (element.manejo === 'Congelacion' || element.manejo === 'Congelación') {
            this.listaCongelacion.push(element);
            this.totPzaCongelacion += element.piezas;
          } else if (element.manejo === 'Refrigeración' || element.manejo === 'Refrigeracion') {
            this.listaRegrigeracion.push(element);
            this.totPzaRefrigeracion += element.piezas;
          } else if (element.manejo === 'Ambiente') {
            this.listaAmbiente.push(element);
            this.totPzaAmbiente += element.piezas;
          }
        });
        // console.log('congelacion:', this.listaCongelacion, 'Ambiente :', this.listaAmbiente , ' refrigeracion', this.listaRegrigeracion);
        this.listaTotales = {congelacion: this.totPzaCongelacion, refrigeracion: this.totPzaRefrigeracion, ambiente: this.totPzaAmbiente,
                             arrayConge:  this.listaCongelacion, arrayRefri: this.listaRegrigeracion, arrayAmbiente: this.listaAmbiente};
      });
  }
  reproducirVideo(nombreVideo) {
   /* this.path = this.ruta + nombreVideo + ".webm";*/
    this.path = this.rutaProd + nombreVideo + ".webm";
    this.video.nativeElement.src = this.path;
    if ( nombreVideo !== 'error' ) {
      this.mensajeVideo = false;
      this. videoValido = true;
    } else {
      this.mensajeVideo = true;
      this. videoValido = false;
    }
  }
  mostrarModalEtiqueta (val: any) {
    // console.log('hola, llegue', val);
    this.enviarTipo = this.manejoAScanear;
    // this.i += 1;
    this.vistaEtiquetaPoP = val;
  }
  mostrarListaEmbalar(val: any) {
    this.vistaEmbalar = val;
    this.vistaEtiquetaPoP = false;
    this.openModal = false;
    this.popScaner = false;
    this.activarFocus = !this.activarFocus;
  }
  agregarPaquete(manejo: string) {
    this.i += 1;
    // console.log('Soy popS-->', this.popScaner);
    if (manejo === 'Congelacion' || manejo === 'Refrigeracion') {
      this.tipo = 'Hielera';
      this.openModal = true;
      this.popScaner = false;
      // this.i += 1;
    } else if (manejo === 'Ambiente') {
      this.tipo = 'Bolsa de tránsito';
      // this.manejoAScanear = 'Ambiente';
      /*this.popScaner = true;
      this.openModal = false;*/
      this.openModal = true;
    }
  }
  activacionBoton(activado: boolean) {
    this.activarBoton.emit(activado);
  }
  activarBtnMas(respuesta: boolean) {
    this.openBtnMas = respuesta;
  }
  enviarBtnDesactivo($tipo) {
    this.desactivarBtn = $tipo;
  }
  mostrarModalEtiquetaCamGenerar (val: any) {
    // console.log('hola, llegue', val);
    this.vistaEtiquetaPoPGene = val;
    this.botonGenerar = true;
  }
  mostrarEtiquetaBolsa() {
    this.etiquetaBolsa = false;
    this.vistaEtiquetaPoPBolsa = true;
  }
  enviarDatosVisOper($valor) {
    // this.cambiarVistaGenerar.emit($valor);
    this.cambiarVistaGenerar.emit($valor);
  }
  activarDatosBolsa($valor) {
    this.vistaEtiquetaPoPGene = false;
    this.botonGenerar = false;
    this.etiquetaBolsa = true;
  }
  sobrantes( estado) {
    this.sobrante.emit(estado);
  }
}
