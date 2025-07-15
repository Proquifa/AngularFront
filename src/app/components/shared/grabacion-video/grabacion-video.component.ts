// import { Component, OnInit } from '@angular/core';
import { dialog } from 'electron';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
let RecordRTC = require('recordrtc/RecordRTC.min');
import { InspeccionService } from '../../../services/inspeccion/inspeccion.service';
import { Router } from '@angular/router';


@Component({
  selector: 'pq-grabacion-video',
  templateUrl: './grabacion-video.component.html',
  styleUrls: ['./grabacion-video.component.scss']
})
export class GrabacionVideoComponent implements OnInit {

  nombreArchivo:string  = "GLI-072018-0772";//Quitar el valor para conectar con el servicio.

mediaConstraints;

  ngOnInit() { //Activar esta funcion para que al entrar a la pagina empiece a grabar el video.
    this.startRecording();
    // this.obtenerFolioConsecutivo();
  }

  // concepto : string="Grabacion Lote Inspeccion";

  private stream: MediaStream;
  private recordRTC: any;

  @ViewChild('video') video;

  constructor(private router: Router,private _insp: InspeccionService) { }

  ngAfterViewInit() {
    // set the initial state of the video
    let video:HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = false;
    video.autoplay = true;
  }

  toggleControls() {
    let video: HTMLVideoElement = this.video.nativeElement;
    video.muted = !video.muted;
    video.controls = !video.controls;
    video.autoplay = !video.autoplay;
  }




  successCallback(stream: MediaStream) {

    var options = {
      mimeType:
      //'video/webm', // 'video/webm\;default', // 'video/webm\;codecs=h264',
      'video/webm\;codecs=vp9',
      audioBitsPerSecond: 0,
      videoBitsPerSecond: 512000,
      // bitsPerSecond: 128000 // if this line is provided, skip above two
    };
    this.stream = stream;
    this.recordRTC = RecordRTC(stream, options);
    this.recordRTC.startRecording();
    let video: HTMLVideoElement = this.video.nativeElement;
    video.src = window.URL.createObjectURL(stream);
    // this.toggleControls(); //esta linea oculta los controles del video mientras se esta ejecutando.
  }

  errorCallback() {
    console.log("Se ha producido un error inesperado !! ");
  }

  processVideo(audioVideoWebMURL) {
    let video: HTMLVideoElement = this.video.nativeElement;
    let recordRTC = this.recordRTC;
    video.src = audioVideoWebMURL;
    // this.toggleControls(); //esta linea oculta los controles del video una vez pausado.
    var recordedBlob = recordRTC.getBlob();
    recordRTC.getDataURL(function (dataURL) { });
    // recordRTC.getDataURL("/Users/carlos.serrano/Videos");
    }

  startRecording() {
     this.mediaConstraints = {
      // video: true,
      video:  { mandatory: { minWidth: 1480, minHeight: 1024}
    },
      audio: false
      //Para google chrome estos valores solo se pueden configurar verdadero y falso.
      // { mandatory: { minWidth: 1280, minHeight: 720}
      // }
    };
    navigator.mediaDevices
      .getUserMedia(this.mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  stopRecording() {
    let recordRTC = this.recordRTC;
    recordRTC.stopRecording(this.processVideo.bind(this));
    let stream = this.stream;
    stream.getAudioTracks().forEach(track => track.stop());
    stream.getVideoTracks().forEach(track => track.stop());
  }

download() {
   this.stopRecording();
   setTimeout(() => {
       this.recordRTC.save(this.nombreArchivo+'.webm'); //Aqui definimos el nombre del archivo que se descarga
   }, 1000);

 }

//Test
  obtenerFolioConsecutivo(){
    this._insp.obtenerConsecutivoDeLoteInspeccion('Grabacion Lote Inspeccion').subscribe(
      data => {
          console.log("dato: " + data.current);
          this.nombreArchivo = data.current;
        },error => {
          }
        );
      }

  }
