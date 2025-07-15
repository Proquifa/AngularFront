import { Component, OnInit } from '@angular/core';
import { LatLngLiteral } from '@agm/core/services/google-maps-types';
import { CerrarRutaService } from '../../../services/despachos/gestorRuta/cerrar-ruta.service';
import { AsignarMensajeroService } from '../../../services/despachos/gestorRuta/asignar-mensajero.service';
import {CoreContainerComponent} from '../../core-container/core-container.component';
import {AccountingFormatMoney} from '../../../pipes/accounting/accounting.pipe';
import {Subscription} from 'rxjs/Subscription';
import {ComunService} from '../../../services/comun/comun.service';

@Component({
  selector: 'pn-cerrar-ruta',
  templateUrl: './cerrar-ruta.component.html',
  styleUrls: ['./cerrar-ruta.component.scss']
})
export class CerrarRutaComponent implements OnInit {
  subs: Subscription;
  showJustify: boolean = false;
  nume: number = 0;

  CUERNAVACA: Array<LatLngLiteral>;
  CDMX: Array<LatLngLiteral>;
  TOLUCA: Array<LatLngLiteral>;
  PUEBLA: Array<LatLngLiteral>;

  rutaMensajeros: any[] = [];
  ruta2: any[] = [];

  linea1: any[] = []; //Se va pintar la linea
  marcadores1: any[] = []; //Se va a pintar el marcador

  marcadoresMenos: any[] = [];

  valorLAT: number = 0.000100000;
  valorLNG: number = 0.000050000;

  opcion1 = false;
  opcion2 = false;
  opcion3 = false;
  opcion4 = false;


  nombreC = "";
  zonaC = "";
  direccionC = "";
  TEE_C = "";
  TET_C = "";
  horario_C = "";
  eventos_C = "";
  monto_C = "";
  nombreC2 = "";
  zonaC2 = "";
  direccionC2 = "";
  TEE_C2 = "";
  TET_C2 = "";
  horario_C2 = "";
  eventos_C2 = "";
  monto_C2 = "";

  totales1: number = 0;
  totales2: number = 0;
  checksRutas: boolean = false;

  show_grafica: boolean = true;
  show_mapa: boolean = false;

  r1: any[] = [];
  r2: any[] = [];
  r1Prioridades: any[] = [];
  r2Prioridades: any[] = [];
  rutas: any[] = [];
  classAsideMenu: string = "asideNormalMenu";
  ocultarAcor: boolean;
  datosMensajero: any[] = [];
  itemsMenu: any[];
  /***Variables graficas***/
  filtroMensajero: any[] = [];
  dataMensajero: any;
  dataMensajeroAux: any;
  tipoGraficaMensajeros: string;
  activarMensajero: boolean;
  nuevoMensajero: any[] = [];
  datosPrioridades: any[] = [];
  filtroPrioridades: any[] = [];
  dataPrioridades: any;
  dataPrioridadesAux: any;
  nuevoPrioridades: any[] = [];
  activarPrioridades: boolean;
  tipoGraficaPrioridades: string;
  datosPrioridd1: any[] = [];
  filtroPrioridad1: any[] = [];
  dataPrioridad1: any;
  dataPrioridad1Aux: any;
  nuevoPrioridad1: any[] = [];
  activarPrioridad1: boolean;
  tipoGraficaPrioridad1: string;
  datosClientes: any[] = [];
  filtroClientes: any[] = [];
  dataClientes: any;
  dataClientesAux: any;
  nuevoClientes: any[] = [];
  activarClientes: boolean;
  tipoGraficaClientes: string;
  datosPrioridad2: any[] = [];
  filtroPrioridad2: any[] = [];
  dataPrioridad2: any;
  dataPrioridad2Aux: any;
  nuevoPrioridad2: any[] = [];
  activarPrioridad2: boolean;
  tipoGraficaPrioridad2: string;
  datosPrioridad3: any[] = [];
  filtroPrioridad3: any[] = [];
  dataPrioridad3: any;
  dataPrioridad3Aux: any;
  nuevoPrioridad3: any[] = [];
  activarPrioridad3: boolean;
  tipoGraficaPrioridad3: string;
  Eficacion: boolean = false;
  totalNoAlcanzados: number;
  totalClientes: number;
  /*****Datos de la segunda vista*****/
  _proquifa: any[] = [19.2856554, -99.1595433];
  nombreMensajero: string;
  totEstrellas: number = 0;
  justificacionV: any;
  activarBtnFin: boolean;
  totZonas; number;
  idResponsable: number;
  lstZonas: String [] = [];
  lstClientes: any [] = [];
  zoom: number;
  rutaProgramada: any[];
  rutaProgramada2: any[];
  rutaAux: any[] = [];
  rutaAux2: any[] = [];
  linea: any[] = [];
  linea2: any[] = [];
  marcadores: any[] = [];
  marcadores2: any[] = [];
  positions: any[] = [];
  positions2: any[] = [];
  path: any[] = [];
  path2: any[] = [];
  mostrarRutas: boolean = false;
  show: boolean = false;
  montoC: string = "";
  idCliente: number = 0;
  refresh_mapa: boolean = false;
  noEntregados: any [] = [];
  arrayTiempos: any[] = [];
  horaFin: string = "00";
  minFin: string = "00";
  minTTT:number = 0;
  minTTTString:string = "";

  _color: any[] = [
    "#FFFFFF",
    "#C1272D",
    "#0098DA",
    "#0838DD",
    "#EF63A0",
    "#900280",
    "#417505",
    "#91CA52",
    "#FF7404",
    "#FC187B",

  ];

  _pin: any[] = [
    "assets/Images/Images/pines/pin_proquifa.png",
    "assets/Images/Images/pines2/pin_azul.png",

  ];
  _pin2: any[] = [
    "assets/Images/Images/pines/pin_proquifa.png",
    "assets/Images/Images/pines/pin_amarillo.png",
  ];
  totCerrar = 0;
  totAsignar = 0;
  activeMenu: boolean;
  constructor(private comunService: ComunService, private _service: CerrarRutaService, private coreComponent: CoreContainerComponent, private _asignarMensajeroService: AsignarMensajeroService) { }
  ngOnInit() {
    this.subs = this.comunService.recargar.subscribe(
      (data) => {
        if (data === 'cerrar-ruta') {
          this.activeMenu = false;
          this.inicarMenu();
          this.obtenerDatos();
        }
      });
    this.inicarMenu();
    //Pintan las zona!
    this.CUERNAVACA = [{ lng: -99.3106228345, lat: 19.0272235546 }, { lng: -99.2913043106, lat: 19.0291659473 }, { lng: -99.26056643539999, lat: 19.0051356852 }, { lng: -99.24867436280002, lat: 19.0044678533 }, { lng: -99.2495067486, lat: 19.0080888198 }, { lng: -99.21841038140001, lat: 19.0070788999 }, { lng: -99.22926113270002, lat: 18.9842738788 }, { lng: -99.2181210025, lat: 18.9790104299 }, { lng: -99.2118445129, lat: 18.982822821 }, { lng: -99.19980578649999, lat: 19.000218513 }, { lng: -99.19061658990002, lat: 19.0043388575 }, { lng: -99.1868642946, lat: 19.0001335186 }, { lng: -99.18015917410001, lat: 18.9764534121 }, { lng: -99.1836908289, lat: 18.9383780007 }, { lng: -99.1818396308, lat: 18.9162843414 }, { lng: -99.1935931762, lat: 18.9252259592 }, { lng: -99.19549103050001, lat: 18.91337538300001 }, { lng: -99.18700318179999, lat: 18.9048840822 }, { lng: -99.19062139179999, lat: 18.9010783329 }, { lng: -99.198734784, lat: 18.9069240406 }, { lng: -99.20174419000001, lat: 18.9049616204 }, { lng: -99.20465824439999, lat: 18.9090941062 }, { lng: -99.20682733970001, lat: 18.9063279784 }, { lng: -99.213001112, lat: 18.9093017778 }, { lng: -99.2085030253, lat: 18.9016073491 }, { lng: -99.2148781933, lat: 18.8922714305 }, { lng: -99.21486049910003, lat: 18.8846820926 }, { lng: -99.22223354090001, lat: 18.8847763713 }, { lng: -99.22377866980001, lat: 18.8775259505 }, { lng: -99.2289749574, lat: 18.8784316118 }, { lng: -99.23665313639999, lat: 18.8998030571 }, { lng: -99.25658416429999, lat: 18.8949147847 }, { lng: -99.26011458480002, lat: 18.9035323551 }, { lng: -99.2732500227, lat: 18.9048943188 }, { lng: -99.28180704010002, lat: 18.9164121824 }, { lng: -99.2894473658, lat: 18.9213839879 }, { lng: -99.28598093960001, lat: 18.9050634639 }, { lng: -99.2979477401, lat: 18.9053719505 }, { lng: -99.2935537362, lat: 18.894572581 }, { lng: -99.2853628347, lat: 18.9006950965 }, { lng: -99.28302118800002, lat: 18.887703689 }, { lng: -99.2896561764, lat: 18.8846924716 }, { lng: -99.27215733670001, lat: 18.8567959071 }, { lng: -99.27165242149999, lat: 18.8477103846 }, { lng: -99.29303169930002, lat: 18.8466097754 }, { lng: -99.3039111228, lat: 18.8511762326 }, { lng: -99.3267068591, lat: 18.8716934268 }, { lng: -99.3360790668, lat: 18.8908698329 }, { lng: -99.340424867, lat: 18.9319035943 }, { lng: -99.3409175841, lat: 18.9359616628 }, { lng: -99.3272553243, lat: 18.9394860015 }, { lng: -99.3206841889, lat: 18.9464591319 }, { lng: -99.31698375330002, lat: 18.9438685426 }, { lng: -99.31080370479999, lat: 18.9570969294 }, { lng: -99.31085543960002, lat: 18.9953612819 }, { lng: -99.3086234978, lat: 18.9974825487 }, { lng: -99.31947062099999, lat: 19.0150943189 }, { lng: -99.31741292530001, lat: 19.0238984152 }, { lng: -99.3106228345, lat: 19.0272235546 }]
    this.TOLUCA = [{ lng: -99.70611087419999, lat: 19.4209802321 }, { lng: -99.6935192265, lat: 19.4284354777 }, { lng: -99.69311898800001, lat: 19.4414406768 }, { lng: -99.6811235566, lat: 19.4400395073 }, { lng: -99.67922255430001, lat: 19.4462352785 }, { lng: -99.6717818695, lat: 19.4489157792 }, { lng: -99.6751198394, lat: 19.4537888381 }, { lng: -99.6714763887, lat: 19.4635315791 }, { lng: -99.6662460175, lat: 19.4648542673 }, { lng: -99.6584047332, lat: 19.4752508386 }, { lng: -99.65608531220003, lat: 19.4711724999 }, { lng: -99.64786959200002, lat: 19.4760313165 }, { lng: -99.6426290743, lat: 19.4606702276 }, { lng: -99.65338775070002, lat: 19.4545774463 }, { lng: -99.6552880603, lat: 19.4484974798 }, { lng: -99.6391719969, lat: 19.4366852079 }, { lng: -99.6345044678, lat: 19.4225863932 }, { lng: -99.6391613679, lat: 19.4134361901 }, { lng: -99.64314880110001, lat: 19.4143068653 }, { lng: -99.64343917920002, lat: 19.4224257342 }, { lng: -99.6496098219, lat: 19.4207830551 }, { lng: -99.6490506066, lat: 19.4116086751 }, { lng: -99.65861501489999, lat: 19.410328421 }, { lng: -99.65672774610003, lat: 19.4067373709 }, { lng: -99.635019719, lat: 19.405445723 }, { lng: -99.6398184549, lat: 19.4007843721 }, { lng: -99.6386377714, lat: 19.3983506176 }, { lng: -99.62411343050002, lat: 19.3954170393 }, { lng: -99.61752118370001, lat: 19.3982846905 }, { lng: -99.59241478289999, lat: 19.389904933 }, { lng: -99.5939521574, lat: 19.386108928 }, { lng: -99.590330936, lat: 19.3851136117 }, { lng: -99.58827710510001, lat: 19.3878590904 }, { lng: -99.58413622550002, lat: 19.3854596086 }, { lng: -99.5868011088, lat: 19.3810969722 }, { lng: -99.5676844254, lat: 19.3696403215 }, { lng: -99.55322797210003, lat: 19.3802849642 }, { lng: -99.54735307490002, lat: 19.3750333435 }, { lng: -99.54558173780001, lat: 19.3715561588 }, { lng: -99.53974262680002, lat: 19.3728667953 }, { lng: -99.51957548110001, lat: 19.322073281 }, { lng: -99.544581416, lat: 19.3201969581 }, { lng: -99.54950825250002, lat: 19.321200747 }, { lng: -99.55018378090001, lat: 19.316512484 }, { lng: -99.5663258333, lat: 19.3089500886 }, { lng: -99.5635485552, lat: 19.2895726081 }, { lng: -99.6036567486, lat: 19.2914394561 }, { lng: -99.60368140530001, lat: 19.280732436 }, { lng: -99.62915527840001, lat: 19.2794252791 }, { lng: -99.63490717080001, lat: 19.2756926662 }, { lng: -99.6353501111, lat: 19.2693672049 }, { lng: -99.6431020826, lat: 19.2702645237 }, { lng: -99.6418386557, lat: 19.2643771 }, { lng: -99.6320020174, lat: 19.2571241047 }, { lng: -99.62863309220001, lat: 19.2455694845 }, { lng: -99.63524669650001, lat: 19.240468479 }, { lng: -99.6316547121, lat: 19.2374312111 }, { lng: -99.64125930180001, lat: 19.2347824722 }, { lng: -99.6317713931, lat: 19.228452594 }, { lng: -99.6394034197, lat: 19.2189882198 }, { lng: -99.65259980730001, lat: 19.2204089046 }, { lng: -99.65845317740001, lat: 19.2172549507 }, { lng: -99.6569508716, lat: 19.2119420138 }, { lng: -99.65936526359999, lat: 19.2124299926 }, { lng: -99.66579696300001, lat: 19.2027172328 }, { lng: -99.6669961528, lat: 19.1944442554 }, { lng: -99.6743546921, lat: 19.196371486 }, { lng: -99.6836896934, lat: 19.1772514658 }, { lng: -99.71733489740002, lat: 19.1420635678 }, { lng: -99.73068564550003, lat: 19.1204561431 }, { lng: -99.731742614, lat: 19.1043507513 }, { lng: -99.73566632230001, lat: 19.1004792166 }, { lng: -99.7437493313, lat: 19.0928571869 }, { lng: -99.74529553630001, lat: 19.0851606691 }, { lng: -99.7339455214, lat: 19.0736348573 }, { lng: -99.7637316962, lat: 19.0730498079 }, { lng: -99.76519303569999, lat: 19.0921772095 }, { lng: -99.7780588456, lat: 19.0998043684 }, { lng: -99.7800765969, lat: 19.1129512329 }, { lng: -99.76525462810001, lat: 19.1264882808 }, { lng: -99.76919351540002, lat: 19.141038912 }, { lng: -99.7621435783, lat: 19.1530476166 }, { lng: -99.76396502119999, lat: 19.1623937318 }, { lng: -99.73968856690001, lat: 19.214045272 }, { lng: -99.7272224411, lat: 19.2128673387 }, { lng: -99.7242852312, lat: 19.2157118607 }, { lng: -99.7222233055, lat: 19.2250123707 }, { lng: -99.7119482276, lat: 19.2422797666 }, { lng: -99.7129088505, lat: 19.2521944983 }, { lng: -99.70686573720001, lat: 19.260413566 }, { lng: -99.71615148560001, lat: 19.2643185181 }, { lng: -99.71216685749999, lat: 19.272677529 }, { lng: -99.70038711060003, lat: 19.27009399190001 }, { lng: -99.6973325739, lat: 19.2855172933 }, { lng: -99.70350762830002, lat: 19.2866255624 }, { lng: -99.70224176590001, lat: 19.2909836406 }, { lng: -99.69302435189999, lat: 19.2908782316 }, { lng: -99.69193443170002, lat: 19.300076068 }, { lng: -99.6982188277, lat: 19.3015305968 }, { lng: -99.69773028690001, lat: 19.3113108846 }, { lng: -99.70683270350001, lat: 19.3109543264 }, { lng: -99.70977125269999, lat: 19.3184707766 }, { lng: -99.71525782670001, lat: 19.3185985125 }, { lng: -99.71093086400001, lat: 19.3313596999 }, { lng: -99.7197878616, lat: 19.3337854915 }, { lng: -99.7240582681, lat: 19.3393573719 }, { lng: -99.7171959901, lat: 19.3524368417 }, { lng: -99.7261394416, lat: 19.3572245367 }, { lng: -99.7256029867, lat: 19.3613629204 }, { lng: -99.73090539510001, lat: 19.3640703299 }, { lng: -99.72515624899999, lat: 19.3681513899 }, { lng: -99.73048787470002, lat: 19.3777677647 }, { lng: -99.728910941, lat: 19.3876505368 }, { lng: -99.73229813259999, lat: 19.4080667365 }, { lng: -99.71988118300001, lat: 19.4109177351 }, { lng: -99.71873844050001, lat: 19.4250672425 }, { lng: -99.70611087419999, lat: 19.4209802321 }]
    this.CDMX = [{ lng: -99.21310300240002, lat: 19.5043531549 }, { lng: -99.21106002170001, lat: 19.5121997572 }, { lng: -99.206021037, lat: 19.5159939395 }, { lng: -99.1792625457, lat: 19.5071568627 }, { lng: -99.17488913749999, lat: 19.5092377666 }, { lng: -99.158260035, lat: 19.5039384159 }, { lng: -99.16401954680001, lat: 19.5189413674 }, { lng: -99.1762142155, lat: 19.5247177796 }, { lng: -99.17222159729998, lat: 19.5282379634 }, { lng: -99.1814707967, lat: 19.5336329672 }, { lng: -99.1601638283, lat: 19.5278392366 }, { lng: -99.15674843780001, lat: 19.533466061 }, { lng: -99.15910904250001, lat: 19.535821652 }, { lng: -99.15211478480001, lat: 19.5457034338 }, { lng: -99.16148910550001, lat: 19.5501570391 }, { lng: -99.15941121180001, lat: 19.5590497656 }, { lng: -99.1504816831, lat: 19.563064418 }, { lng: -99.1473549608, lat: 19.5680870141 }, { lng: -99.13800863909999, lat: 19.5828424753 }, { lng: -99.1236056613, lat: 19.5932278843 }, { lng: -99.118444825, lat: 19.5907371194 }, { lng: -99.1197389993, lat: 19.5860565753 }, { lng: -99.1102998535, lat: 19.5651362924 }, { lng: -99.11029058050001, lat: 19.5651225186 }, { lng: -99.1310643579, lat: 19.5376713066 }, { lng: -99.12936376739999, lat: 19.5271148388 }, { lng: -99.1205188556, lat: 19.5148848664 }, { lng: -99.11483198610002, lat: 19.5120941063 }, { lng: -99.10733430059999, lat: 19.5108619099 }, { lng: -99.099842947, lat: 19.5143023831 }, { lng: -99.09188593899998, lat: 19.5108397957 }, { lng: -99.0650663091, lat: 19.4994274036 }, { lng: -99.0686609807, lat: 19.4900285202 }, { lng: -99.05162902019998, lat: 19.4500041903 }, { lng: -99.04830367629999, lat: 19.4424617618 }, { lng: -99.0557176234, lat: 19.4256077243 }, { lng: -99.05903322250001, lat: 19.4015549011 }, { lng: -99.0197404876, lat: 19.3837192738 }, { lng: -98.9913022281, lat: 19.3669496024 }, { lng: -98.99401027579999, lat: 19.3575589013 }, { lng: -98.9695724206, lat: 19.3329793475 }, { lng: -98.96429821940001, lat: 19.3284105918 }, { lng: -98.9581602903, lat: 19.3236295503 }, { lng: -98.96324688439999, lat: 19.3168227372 }, { lng: -98.9651118938, lat: 19.3067478203 }, { lng: -98.96785405919999, lat: 19.3057715643 }, { lng: -98.9761018497, lat: 19.2529526812 }, { lng: -98.9669417998, lat: 19.2507765873 }, { lng: -98.9695502097, lat: 19.2329122797 }, { lng: -98.94566588329998, lat: 19.2249400758 }, { lng: -98.9414716413, lat: 19.223500993 }, { lng: -98.94390996289998, lat: 19.2163976831 }, { lng: -98.95195866730001, lat: 19.2186684075 }, { lng: -98.9685472577, lat: 19.2118091662 }, { lng: -98.96777134440001, lat: 19.1985745181 }, { lng: -98.96616020179999, lat: 19.1860256888 }, { lng: -98.9569156805, lat: 19.177114495 }, { lng: -98.95349278019998, lat: 19.1693435252 }, { lng: -98.96801879089999, lat: 19.1653613283 }, { lng: -98.9627711079, lat: 19.1594571961 }, { lng: -98.95482840230001, lat: 19.1504090001 }, { lng: -98.9691953224, lat: 19.1457666808 }, { lng: -98.95884629649999, lat: 19.1218421485 }, { lng: -98.9623134531, lat: 19.0969846402 }, { lng: -98.9688346432, lat: 19.0843844092 }, { lng: -98.97333935790002, lat: 19.0815022765 }, { lng: -98.979988345, lat: 19.075577502 }, { lng: -98.9860309207, lat: 19.0803229277 }, { lng: -99.0295639476, lat: 19.0865145377 }, { lng: -99.04453829929999, lat: 19.0766835183 }, { lng: -99.0610576226, lat: 19.0497728775 }, { lng: -99.13440162950001, lat: 19.0877483025 }, { lng: -99.22690899610001, lat: 19.0969212633 }, { lng: -99.28050066600001, lat: 19.1320869049 }, { lng: -99.3038067886, lat: 19.1909599309 }, { lng: -99.30819375420001, lat: 19.2143076935 }, { lng: -99.31638151729999, lat: 19.2219418775 }, { lng: -99.31691535669999, lat: 19.2263507764 }, { lng: -99.317612537, lat: 19.2302143355 }, { lng: -99.3242005127, lat: 19.233366085 }, { lng: -99.3406104828, lat: 19.2412069406 }, { lng: -99.3430869475, lat: 19.2419140008 }, { lng: -99.3431676142, lat: 19.2515414665 }, { lng: -99.33898715820001, lat: 19.2648847921 }, { lng: -99.3405100781, lat: 19.2685294875 }, { lng: -99.349803569, lat: 19.275008012 }, { lng: -99.3654731569, lat: 19.2789979349 }, { lng: -99.35563230199999, lat: 19.2944212315 }, { lng: -99.3513988942, lat: 19.2951836101 }, { lng: -99.35754956060002, lat: 19.3078556805 }, { lng: -99.33345889650001, lat: 19.3327792758 }, { lng: -99.327898527, lat: 19.3462035917 }, { lng: -99.32970312850001, lat: 19.3535558944 }, { lng: -99.32441236450001, lat: 19.3589778619 }, { lng: -99.3197408052, lat: 19.3590837386 }, { lng: -99.32063376030001, lat: 19.3656724912 }, { lng: -99.304355007, lat: 19.3786196972 }, { lng: -99.30184374949999, lat: 19.3776235647 }, { lng: -99.29995472669998, lat: 19.3683138335 }, { lng: -99.28644713160001, lat: 19.376729077 }, { lng: -99.2838612739, lat: 19.3819147746 }, { lng: -99.27776428639999, lat: 19.3753663797 }, { lng: -99.27377670510002, lat: 19.390507911 }, { lng: -99.27045469419998, lat: 19.3908947672 }, { lng: -99.26643088570002, lat: 19.3991700681 }, { lng: -99.26158196260001, lat: 19.4004311428 }, { lng: -99.25858991410001, lat: 19.4053192267 }, { lng: -99.25758610690001, lat: 19.401063919 }, { lng: -99.2513899068, lat: 19.4085293807 }, { lng: -99.23943744729999, lat: 19.4129039212 }, { lng: -99.2238741181, lat: 19.4280725034 }, { lng: -99.2289555107, lat: 19.4390032365 }, { lng: -99.2192213795, lat: 19.4450165411 }, { lng: -99.2206945012, lat: 19.4538854469 }, { lng: -99.2156666952, lat: 19.4577183997 }, { lng: -99.21295757740001, lat: 19.468285328 }, { lng: -99.2079767948, lat: 19.472118959 }, { lng: -99.22204802330001, lat: 19.4757300108 }, { lng: -99.21310300240002, lat: 19.5043531549 }];
    this.PUEBLA = [{ lng: -98.09905261750002, lat: 19.1685265426 }, { lng: -98.06539002860002, lat: 19.18900874 }, { lng: -98.03471116830001, lat: 19.2214449313 }, { lng: -98.03466537049999, lat: 19.2306302171 }, { lng: -98.0187388471, lat: 19.213228221 }, { lng: -98.0292063059, lat: 19.2003137507 }, { lng: -98.0292908335, lat: 19.1964003776 }, { lng: -98.0344660378, lat: 19.1978858752 }, { lng: -98.0362804171, lat: 19.1495653852 }, { lng: -98.03450371150001, lat: 19.1476860135 }, { lng: -98.03021136970001, lat: 19.1553141397 }, { lng: -98.0266972669, lat: 19.1554738861 }, { lng: -98.02681559369999, lat: 19.1500638759 }, { lng: -98.0424044821, lat: 19.1253380874 }, { lng: -98.0520744599, lat: 19.120292112 }, { lng: -98.0496072966, lat: 19.1112625122 }, { lng: -98.0522516497, lat: 19.1068246755 }, { lng: -98.0677043331, lat: 19.0928561026 }, { lng: -98.07409164960001, lat: 19.072143297 }, { lng: -98.0735470125, lat: 19.0648521123 }, { lng: -98.0801862087, lat: 19.0549461695 }, { lng: -98.08488913940001, lat: 19.0541067792 }, { lng: -98.09696015550001, lat: 19.0602487801 }, { lng: -98.115615371, lat: 19.0577043872 }, { lng: -98.1284333716, lat: 19.045842821 }, { lng: -98.1296534036, lat: 19.0397388878 }, { lng: -98.12192753630001, lat: 19.0386652009 }, { lng: -98.118626062, lat: 19.0290432023 }, { lng: -98.12557569970001, lat: 19.0214658402 }, { lng: -98.13087072600001, lat: 19.0012277578 }, { lng: -98.1348657265, lat: 18.9994015784 }, { lng: -98.13644351400001, lat: 18.9944397326 }, { lng: -98.12973749480001, lat: 18.9792180087 }, { lng: -98.13550716060001, lat: 18.9660719729 }, { lng: -98.13448862680001, lat: 18.9518246088 }, { lng: -98.11836881350003, lat: 18.9399604276 }, { lng: -98.1088431156, lat: 18.9394335455 }, { lng: -98.11041390290001, lat: 18.9273208496 }, { lng: -98.0928249735, lat: 18.9167416827 }, { lng: -98.11386348409999, lat: 18.9144047044 }, { lng: -98.1245368207, lat: 18.9045454145 }, { lng: -98.1265480111, lat: 18.9162849228 }, { lng: -98.1572648173, lat: 18.9106276756 }, { lng: -98.15571206520001, lat: 18.9052154775 }, { lng: -98.1425708761, lat: 18.8972397283 }, { lng: -98.1344633662, lat: 18.9002069954 }, { lng: -98.12661510510002, lat: 18.8986864479 }, { lng: -98.1337783881, lat: 18.8873214945 }, { lng: -98.1461131961, lat: 18.8856349893 }, { lng: -98.1548477157, lat: 18.8738131107 }, { lng: -98.1578921615, lat: 18.8666896489 }, { lng: -98.1565709322, lat: 18.8625452063 }, { lng: -98.1477714853, lat: 18.8569994309 }, { lng: -98.14706245550001, lat: 18.853774208 }, { lng: -98.1518006359, lat: 18.8459669686 }, { lng: -98.15492657439999, lat: 18.8488524711 }, { lng: -98.15904413160001, lat: 18.8458740861 }, { lng: -98.16350566910002, lat: 18.847957421 }, { lng: -98.1687178257, lat: 18.842222816 }, { lng: -98.1777780323, lat: 18.8435134677 }, { lng: -98.1806833947, lat: 18.8413352383 }, { lng: -98.18887728839999, lat: 18.847454943 }, { lng: -98.20144249060002, lat: 18.8489838793 }, { lng: -98.20845451040002, lat: 18.8458976461 }, { lng: -98.2318854393, lat: 18.8491785801 }, { lng: -98.24370403730001, lat: 18.8554214776 }, { lng: -98.2570042856, lat: 18.8513106811 }, { lng: -98.2645988475, lat: 18.8558147103 }, { lng: -98.28103448850001, lat: 18.8564288456 }, { lng: -98.2887933918, lat: 18.8619345362 }, { lng: -98.28518401700002, lat: 18.8757894459 }, { lng: -98.2786084885, lat: 18.879286405 }, { lng: -98.27904846049999, lat: 18.8904682711 }, { lng: -98.26926169800001, lat: 18.8940673932 }, { lng: -98.2680928746, lat: 18.9027704905 }, { lng: -98.26942428800001, lat: 18.9091341107 }, { lng: -98.2773593687, lat: 18.9054079645 }, { lng: -98.28340935600001, lat: 18.9066139374 }, { lng: -98.28286311430001, lat: 18.9159100978 }, { lng: -98.2859342518, lat: 18.9195731654 }, { lng: -98.27819812129999, lat: 18.9261293319 }, { lng: -98.27069711060001, lat: 18.927145864 }, { lng: -98.27075352590002, lat: 18.9521072125 }, { lng: -98.26204833609999, lat: 18.9535808405 }, { lng: -98.2620433617, lat: 18.9569173888 }, { lng: -98.2730357614, lat: 18.9588977143 }, { lng: -98.27674701239999, lat: 18.9727115665 }, { lng: -98.2834995314, lat: 18.981509851 }, { lng: -98.27522995450002, lat: 18.9998919596 }, { lng: -98.2667707966, lat: 18.9939485463 }, { lng: -98.26452355479999, lat: 18.9883138398 }, { lng: -98.261304569, lat: 18.9886514842 }, { lng: -98.258549211, lat: 19.0010044632 }, { lng: -98.25218415930002, lat: 19.0080673035 }, { lng: -98.25767225830001, lat: 19.04477768570001 }, { lng: -98.2632650476, lat: 19.0500533697 }, { lng: -98.27577453060003, lat: 19.0518850517 }, { lng: -98.2732485307, lat: 19.0603504357 }, { lng: -98.2660456263, lat: 19.0620495101 }, { lng: -98.26050327570003, lat: 19.0699603903 }, { lng: -98.2605801198, lat: 19.0730909826 }, { lng: -98.2647993949, lat: 19.0745948134 }, { lng: -98.26175701550001, lat: 19.0823814947 }, { lng: -98.25516407290002, lat: 19.0875320013 }, { lng: -98.24083339400002, lat: 19.0894484531 }, { lng: -98.2405275771, lat: 19.0985372795 }, { lng: -98.2364117179, lat: 19.0984603752 }, { lng: -98.2338039517, lat: 19.1125718734 }, { lng: -98.22843435890002, lat: 19.1202983725 }, { lng: -98.23103941060001, lat: 19.1233423288 }, { lng: -98.22791136070001, lat: 19.1278890388 }, { lng: -98.22920218480002, lat: 19.1353978761 }, { lng: -98.2234848823, lat: 19.1415094047 }, { lng: -98.207978321, lat: 19.1367484265 }, { lng: -98.1899134981, lat: 19.1438214411 }, { lng: -98.1879426582, lat: 19.1392450918 }, { lng: -98.1968076238, lat: 19.1310793225 }, { lng: -98.1912572208, lat: 19.1256205212 }, { lng: -98.204629592, lat: 19.1188700495 }, { lng: -98.1853759677, lat: 19.1197318227 }, { lng: -98.165803158, lat: 19.1087879559 }, { lng: -98.1458115609, lat: 19.1268204953 }, { lng: -98.1422103399, lat: 19.11925004500001 }, { lng: -98.12075293310001, lat: 19.1339842721 }, { lng: -98.1035389444, lat: 19.1552821708 }, { lng: -98.09905261750002, lat: 19.1685265426 }]
    this._proquifa = [19.2856554, -99.1595433]; //

    setTimeout(() => {
      this.rutaPanificada();
      this.rutaTomada();
    }, 2000);
    this.obtenerDatos();

  }
  inicarMenu() {
    this._asignarMensajeroService.obtenerTotales().subscribe(
      data => {
        this.totCerrar = data.current.CerrarRuta;
        this.totAsignar = data.current.AsignarRuta;
        this.itemsMenu = [
          {rol: 'Gestor Entrega', active: true, menu: [
              {nombre: 'Asignar Ruta', tipo: 'valor', valor: this.totAsignar , url: 'gestorRuta', select: false},
              {nombre: 'Cerrar Ruta', tipo: 'valor', valor: this.totCerrar, url: 'cerrar-ruta', select: true}
            ]}];
        this.activeMenu = true;
      },
      error => {

      });
  }
/***************OBTENER DATOS DE LA SEGUNDA VISTA**********/
  compararRuta(idMensajero) {
    this.r2 = [];
    this.r1 = [];
    this.lstClientes = [];
    this.lstZonas = [];
    this.noEntregados = [];
    this.arrayTiempos = [];
    this.coreComponent.openModal(0);
    this._service.compararRuta(idMensajero).subscribe(data => {
        if (data != null && data.current.length > 0) {
          let lista = data.current;
          console.log('Lista de mensajero --->>', lista);
          this.nombreMensajero = lista[0].mensajero;
          for (let separador of lista) {
            // if (separador.latitud != null) {
            if (this.lstZonas.indexOf(separador.zona) === -1) {
              this.lstZonas.push(separador.zona);
            }

            if (this.lstClientes.indexOf(separador.cliente) === -1) {
              this.lstClientes.push(separador.cliente);
              if (separador.entrega != 'Realizada') {
                this.noEntregados.push(separador.cliente);
              }
            }

            this.r1.push(separador);
            this.r2.push(separador);

            // }
          }
          console.log("arrayTiempos",this.arrayTiempos)
          this.r1.sort((a, b) => (a.orden > b.orden) ? 1 : ((b.orden > a.orden) ? -1 : 0));
          this.r2.sort((a, b) => (a.fInicio > b.fInicio) ? 1 : ((b.fInicio > a.fInicio) ? -1 : 0));
          console.log("Ru 1", this.r1);
          console.log("Ru 2", this.r2)
          for (let i = 0; i <this.r2.length;i++) {
            let dateAux;
            let dateAux2;
            let horasAux: any = {TTE:"",TTT:""};

            if(this.r2[i].fInicio != null && this.r2[i].fFin) {
              dateAux = new Date(this.r2[i].fInicio);
              dateAux2 = new Date(this.r2[i].fFin);

              horasAux.TTT = (((Object.assign(dateAux2) - Object.assign(dateAux))/1000)/60).toFixed(0);

              this.minTTT = Object.assign(horasAux.TTT) + 0 ;

              dateAux = new Date(this.r2[i].fFin);
              dateAux2 = new Date(this.r2[i].fCierre);
              horasAux.TTE = (((Object.assign(dateAux2) - Object.assign(dateAux)) / 1000) / 60).toFixed(0);

            }

            this.arrayTiempos.push(Object.assign(horasAux));
          }

          let auxHora = (this.minTTT / 60).toFixed(0)
          let auxMin = this.minTTT - (+auxHora*60)
          this.minTTTString =  auxHora + " hrs " + auxMin+ " min";


          let dateAux = new Date(this.r2[0].fInicio);
          let dateAux2 = new Date(this.r2[this.r2.length - 1].fCierre);
          let horaAux = ((((Object.assign(dateAux2) - Object.assign(dateAux)) / 1000) / 60) / 60).toFixed(0);
          let minAux = (((((Object.assign(dateAux2) - Object.assign(dateAux)) / 1000))/ 60) - (+horaAux * 60)).toFixed(0);

          if(+horaAux < 10){
            this.horaFin = "0"+horaAux;
          }else{
            this.horaFin = horaAux;
          }

          if(+minAux < 10){
            this.minFin = "0"+minAux;
          }else{
            this.minFin = minAux;
          }

          this.r1 = this.separador(this.r1);
          this.r2 = this.separador(this.r2);
          console.log('Ruta 1 --', this.r1);
          console.log('Ruta 2 --', this.r2);
          this.totales1 = this.r1.length;
          this.totales2 = this.r2.length;
          this.coreComponent.closeModal(0);

          this.rutaProgramada = [];
          this.rutaProgramada2 = [];
          this.linea = [];
          this.linea2 = [];
          this.marcadores = [];
          this.marcadores2 = [];
          this.path = [];
          this.path2 = [];
          this.positions = [];
          this.positions2 = [];

          this.refresh_mapa = false;
          setTimeout(() => {
            this.refresh_mapa = true;
          }, 10);
          this.rutaMensajero();
          this.refresh_mapa = false;
          setTimeout(() => {
            this.refresh_mapa = true;
          }, 10);

        } else {
          this.coreComponent.closeModal(0);
          this.regresar();
        }
      },
      error => {
        this.coreComponent.closeModal(0);
      });
  }
  separador(lista) {
    let pendientes: any[] = [];
    let listaOrdenada: any[] = []
    if (lista != undefined && lista.length > 0) {
      for (let item of lista) {
        let repetido: Boolean = false;
        let items = {
          altitud: 0,
          calle: "",
          cliente: "",
          dia: 0,
          estado: "",
          etiqueta: "",
          evento: "",
          folio: "",
          folios: [],
          horarioA: "",
          horarioDe: "",
          idAsignarMensajero: "",
          idCliente: 0,
          idMensajero: 0,
          latitud: 0,
          longitud: 0,
          mensajero: "",
          monto: 0,
          orden: 0,
          pais: "",
          prioridad: "",
          ruta: 0,
          totalCerrados: 0,
          totalClientes: 0,
          usuario: "",
          zona: "",
          p1: 0, // Se agrego
          p2: 0, // Se agrego
          p3: 0 // Se agrego
        };
        if (pendientes != undefined && pendientes.length > 0) {
          for (let itemPA of pendientes) {
            if (itemPA.cliente == item.cliente) {
              repetido = true;
              itemPA.monto = item.monto + itemPA.monto;
              itemPA.folios.push(item.folio);
              if (item.prioridad === 'P1') {
                itemPA.p1 ++;
              } else if (item.prioridad === 'P2') {
                itemPA.p2 ++;
              } else if (item.prioridad === 'P3') {
                itemPA.p3 ++;
              }
            }
          }
          if (!repetido) {
            items.orden = item.orden; //
            items.estado = item.estado;
            items.calle = item.calle;
            items.dia = item.dia;
            items.cliente = item.cliente;
            items.etiqueta = item.etiqueta;
            items.evento = item.evento;
            items.longitud = item.longitud;
            items.latitud = item.latitud;
            items.idMensajero = item.idMensajero;
            items.idCliente = item.idCliente;
            items.idAsignarMensajero = item.idAsignarMensajero;
            items.horarioDe = item.horarioA;
            items.altitud = item.altitud;
            items.usuario = item.usuario;
            items.totalClientes = item.totalClientes;
            items.totalCerrados = item.totalCerrados;
            items.ruta = item.ruta;
            items.prioridad = item.prioridad;
            items.pais = item.pais;
            items.monto = item.monto + items.monto;
            items.mensajero = item.mensajero;
            items.zona = item.zona;
            items.folio = item.folio;
            if (item.prioridad === 'P1') {
              items.p1 ++;
            } else if (item.prioridad === 'P2') {
              items.p2 ++;
            } else if (item.prioridad === 'P3') {
              items.p3 ++;
            }
            items.folios.push(item['folio']);
            pendientes.push(items);
          }
        } else {
          items.orden = item.orden; //
          items.estado = item.estado;
          items.calle = item.calle;
          items.dia = item.dia;
          items.cliente = item.cliente;
          items.etiqueta = item.etiqueta;
          items.evento = item.evento;
          items.longitud = item.longitud;
          items.latitud = item.latitud;
          items.idMensajero = item.idMensajero;
          items.idCliente = item.idCliente;
          items.idAsignarMensajero = item.idAsignarMensajero;
          items.horarioDe = item.horarioA;
          items.altitud = item.altitud;
          items.usuario = item.usuario;
          items.totalClientes = item.totalClientes;
          items.totalCerrados = item.totalCerrados;
          items.ruta = item.ruta;
          items.prioridad = item.prioridad;
          items.pais = item.pais;
          items.monto = item.monto + items.monto;
          items.mensajero = item.mensajero;
          items.zona = item.zona;
          items.folio = item.folio;
          if (item.prioridad === 'P1') {
            items.p1 ++;
          } else if (item.prioridad === 'P2') {
            items.p2 ++;
          } else if (item.prioridad === 'P3') {
            items.p3 ++;
          }
          items.folios.push(item['folio']);
          pendientes.push(items);
        }
      }
    }
    listaOrdenada = listaOrdenada.concat(pendientes);

    return listaOrdenada;
  }

  rutaPanificada() {
    this.linea1.push({ lat: this._proquifa[0], lng: this._proquifa[1] }); // Mete a proquifa en la posición 0
    for (let j = 0; j < this.r1.length; j++) {
      this.marcadores1.push([this.r1[j].latitud, this.r1[j].longitud]);
      this.linea1.push({ lat: this.marcadores1[j][0], lng: this.marcadores1[j][1] })
    }
    this.linea1.push({ lat: this._proquifa[0], lng: this._proquifa[1] }); // Mete a proquifa en la ultima posicioón
    // this.totales1 = this.r1.length;
  }

  rutaTomada() {
    this.linea2.push({ lat: this._proquifa[0], lng: this._proquifa[1] }); // Mete a proquifa en la posición 0
    for (let j = 0; j < this.r2.length; j++) {
      this.marcadores2.push([this.r2[j].latitud, this.r2[j].longitud]);
      this.marcadoresMenos.push([(this.marcadores2[j][0] - this.valorLAT), (this.marcadores2[j][1]) - this.valorLNG]);
      this.linea2.push({ lat: (this.marcadores2[j][0] - this.valorLAT), lng: (this.marcadores2[j][1] - this.valorLNG) })
    }
    this.linea2.push({ lat: this._proquifa[0], lng: this._proquifa[1] }); // Mete a proquifa en la ultima posicioón
    // this.totales2 = this.r2.length;
  }

  justificacion() {
    this.showJustify = true;
    this.nume = this.nume + 1;
    if (this.nume > 1) {
      this.showJustify = false;
      this.nume = 0;
    }
  }
  info1({ target: marker }, num: number) { //Info de los marker
    marker.nguiMapComponent.openInfoWindow('iw2', marker);
    for (let j = 0; j < this.r1.length; j++) {
      this.nombreC = "" + this.r1[num].cliente;
      this.zonaC = "" + this.r1[num].zona;
      this.direccionC = "" + this.r1[num].calle;
      this.TEE_C = "" + this.r1[num].TEEC;
      this.TET_C = "" + this.r1[num].TET;
      this.horario_C = this.r1[num].horarioDe + "" + this.r1[num].horarioA;
      this.eventos_C = "" + this.r1[num].evento;
      this.monto_C = "" + this.r1[num].monto;
    }
  }
  info2({ target: marker }, num: number) { //Info de los marker
    marker.nguiMapComponent.openInfoWindow('iw3', marker);
    for (let j = 0; j < this.r1.length; j++) {
      this.nombreC2 = "" + this.r1[num].cliente;
      this.zonaC2 = "" + this.r1[num].zona;
      this.direccionC2 = "" + this.r1[num].calle;
      this.TEE_C2 = "" + this.r1[num].TEEC;
      this.TET_C2 = "" + this.r1[num].TET;
      this.horario_C2 = this.r1[num].horarioDe + "" + this.r1[num].horarioA;
      this.eventos_C2 = "" + this.r1[num].evento;
      this.monto_C2 = "" + this.r1[num].monto;
    }
  }
  checkRutas() {
    this.checksRutas = true
    this.nume = this.nume + 1;
    if (this.nume > 1) {
      this.checksRutas = false;
      this.nume = 0;
    }
  }
  /***************METODO PARA SABER A QUE MENSAJERO QUIEREN CONSULTAR O BIEN DAN CLIC*************/
  mostrarGraficas(index) {
    console.log('Soy index-- >', index);
    let idMensajero = this.rutaMensajeros[index].idMensajero;
    this.idResponsable = idMensajero;
    console.log('Soy id mensajero-- >', idMensajero);
    this.totalClientes =  this.rutaMensajeros[index].totalClientes;
    this.totalNoAlcanzados = this.rutaMensajeros[index].totalNoEntregado;
    this.totZonas = this.rutaMensajeros[index].totalZonas;
    this.compararRuta(idMensajero);
    this.show_mapa = true;
    this.show_grafica = false;
  }
  regresar() {
    this.show_mapa = false;
    this.show_grafica = true;
    // this.obtenerDatos();
    this.limpiarVaribles();
  }
  eficacia(TE, TRE) {
    let eficacia = 100 - ((1 * 100 / TE) * (TRE - TE));  // La chidaa
    return eficacia
  }

  dist_time(coord1, coord2) { //Esta es la chida para calcular la distancia
    let dist_time: any;
    if (coord2[0] > 0 && coord1[0] > 0) {
      this._service.calculoDistancia(coord1, coord2).subscribe(data => {
        console.log(data.rows[0].elements[0]);
        dist_time = data.rows[0].elements[0].duration['text']
      });
      setTimeout(() => {
        let km = dist_time.split(" ");
        console.log(dist_time);
      }, 2000);
    }
  }
  mostarOcultarAcordeon() {
    this.ocultarAcor = !this.ocultarAcor;
    if (this.ocultarAcor) {
      this.classAsideMenu = "asideOcultarMenu";
    } else {
      this.classAsideMenu = "asideMostrarMenu";
    }
  }
  /*********OBTENER LOS DATOS DE LAS GRÁFICAS Y LAS LISTA******/
  obtenerDatos() {
    this.rutaMensajeros = [];
    this.datosMensajero = [];
    this.datosPrioridades = [];
    this.datosPrioridd1 = [];
    this.datosClientes = [];
    this.datosPrioridad2 = [];
    this.datosPrioridad3 = [];
    setTimeout(() => {
      this.activarMensajero = false;
      this.activarPrioridades = false;
      this.activarPrioridad1 = false;
      this.activarClientes = false;
      this.activarPrioridad2 = false;
      this.activarPrioridad3 = false;
    }, 5);
    this.coreComponent.openModal(0);
    this._service.datosGrafica().subscribe(
      data => {
        if (data.current.grafica['Mensajero']) {
          this.rutaMensajeros = data.current.lista;
          this.datosMensajero = data.current.grafica['Mensajero'];
          this.datosPrioridades = data.current.grafica['Prioridad'];
          if (data.current.grafica['P1']) {
            this.datosPrioridd1 = data.current.grafica['P1'];
          }
          if (data.current.grafica['Clientes']) {
            this.datosClientes = data.current.grafica['Clientes'];
          }
          if (data.current.grafica['P2']) {
            this.datosPrioridad2 = data.current.grafica['P2'];
          }
          if (data.current.grafica['P3']) {
            this.datosPrioridad3 = data.current.grafica['P3'];
          }
          /*********SE LLAMA  A LOS METODOS QUE PINTARAN LAS GRÁFICAS*********/
          this.limpiarVariablesGrafica();
          this.calcularDatosParaGraficas();
          /******Cierra el modal de cargando*****/
          this.coreComponent.closeModal(0);
        } else {
          this.limpiarVariablesGrafica();
          /******Cierra el modal de cargando*****/
          this.coreComponent.closeModal(0);
        }
      },
      error => {
        this.coreComponent.closeModal(0);
      });
  }
  limpiarVaribles() {
    setTimeout(() => {
      this.activarMensajero = false;
      this.activarPrioridades = false;
      this.activarPrioridad1 = false;
      this.activarClientes = false;
      this.activarPrioridad2 = false;
      this.activarPrioridad3 = false;
    }, 5);
    this.filtroPrioridad2 = [];
    this.filtroPrioridad1 = [];
    this.filtroPrioridad3 = [];
    this.filtroClientes = [];
    this.filtroPrioridades = [];
    this.filtroMensajero = [];
    this.limpiarVariablesGrafica();
    this.calcularDatosParaGraficas();
  }
  limpiarVariablesGrafica() {
    //////// Emìeza grafica MENSAJEROS //////
    if (this.datosMensajero.length > 0) {
      for (let valor of this.datosMensajero) {
        // this.arrayProducto.push(valor.piezas);
        this.filtroMensajero.push(valor.mensajero);
        this.tipoGraficaMensajeros = 'General';
      }
    } else {
      this.tipoGraficaMensajeros = 'Gris';
      // this.arrayProducto.push(1);
      this.filtroMensajero.push("");
    }
    const valoresM = [] = [];
    const valoresMensajero = [] = [];
    for (let nombre of this.datosMensajero) {
      valoresMensajero.push([0, 0]);
      valoresM.push(0);
    }
    if (valoresM.length > 0 && this.datosMensajero[0].totalMonto !== 0) {
      this.dataMensajero = {
        titulo: 'Nombre de mensajero',
        labels: this.filtroMensajero,
        valores: valoresM,
        labelsExtras: ['Piezas', 'Monto'],
        labelsExtrasHover: ['Piezas', 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresMensajero,
      };
      this.dataMensajeroAux = {
        titulo: 'Totales',
        labels: this.filtroMensajero,
        valores: valoresM,
        labelsExtras: ['Piezas', 'Monto'],
        labelsExtrasHover: ['Piezas', 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresMensajero,
      };
      this.tipoGraficaMensajeros = 'General';
    } else {
      this.dataMensajero = {
        titulo: 'Totales',
        labels: ['Sin datos'],
        valores: [1],
        labelsExtras: ['Piezas', 'Monto'],
        labelsExtrasHover: ['Piezas', 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: [[0, 0]],
      };
      this.tipoGraficaMensajeros = 'Gris';
      setTimeout(() => {
        this.activarMensajero = true;
      }, 5);
    }
    //////// Emìeza grafica PRIORIDADES //////
    if (this.datosPrioridades.length > 0) {
      for (let valor of this.datosPrioridades) {
        // this.arrayProducto.push(valor.piezas);
        this.filtroPrioridades.push(valor.prioridad);
        this.tipoGraficaPrioridades = 'Prioridades';
      }
    } else {
      this.tipoGraficaPrioridades = 'Gris';
      // this.arrayProducto.push(1);
      this.filtroPrioridades.push("");
    }
    const valoresPrio = [] = [];
    const valoresPrioridades = [] = [];
    for (let nombre of this.datosPrioridades) {
      valoresPrioridades.push([0, 0]);
      valoresPrio.push(0);
    }
    if (valoresPrio.length > 0 && this.datosPrioridades[0].totalMonto !== 0) {
      this.dataPrioridades = {
        titulo: 'Totales',
        labels: this.filtroPrioridades,
        valores: valoresPrio,
        labelsExtras: ['Piezas', 'Monto'],
        labelsExtrasHover: ['Piezas', 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresPrioridades,
      };
      this.dataPrioridadesAux = {
        titulo: 'Totales',
        labels: this.filtroPrioridades,
        valores: valoresPrio,
        labelsExtras: ['Piezas', 'Monto'],
        labelsExtrasHover: ['Piezas', 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresPrioridades,
      };
      this.tipoGraficaPrioridades = 'Prioridades';
    } else {
      this.dataPrioridades = {
        titulo: 'Totales',
        labels: ['Sin datos'],
        valores: [1],
        labelsExtras: ['Piezas', 'Monto'],
        labelsExtrasHover: ['Piezas', 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: [[0, 0]],
      };
      this.tipoGraficaPrioridades = 'Gris';
      setTimeout(() => {
        this.activarPrioridades = true;
      }, 5);
    }
    //////// Emìeza grafica PRIORIDAD 1 //////
    if (this.datosPrioridd1.length > 0) {
      for (let valor of this.datosPrioridd1) {
        // this.arrayProducto.push(valor.piezas);
        this.filtroPrioridad1.push(valor.cliente);
        this.tipoGraficaPrioridad1 = 'PrioridadRoja';
      }
    } else {
      this.tipoGraficaPrioridad1 = 'Gris';
      // this.arrayProducto.push(1);
      this.filtroPrioridades.push("");
    }
    const valoresPrio1 = [] = [];
    const valoresPrioridades1 = [] = [];
    for (let nombre of this.datosPrioridd1) {
      valoresPrioridades1.push([0, 0]);
      valoresPrio1.push(0);
    }
    if (valoresPrio1.length > 0 && this.datosPrioridd1[0].totalMonto !== 0) {
      this.dataPrioridad1 = {
        titulo: 'Totales',
        labels: this.filtroPrioridad1,
        valores: valoresPrio1,
        labelsExtras: ['Piezas', 'Monto'],
        labelsExtrasHover: ['Piezas', 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresPrioridades1,
      };
      this.dataPrioridad1Aux = {
        titulo: 'Totales',
        labels: this.filtroPrioridad1,
        valores: valoresPrio1,
        labelsExtras: ['Piezas', 'Monto'],
        labelsExtrasHover: ['Piezas', 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresPrioridades1,
      };
      this.tipoGraficaPrioridad1 = 'PrioridadRoja';
    } else {
      this.dataPrioridad1 = {
        titulo: 'Totales',
        labels: ['Sin datos'],
        valores: [1],
        labelsExtras: ['Piezas', 'Monto'],
        labelsExtrasHover: ['Piezas', 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: [[0, 0]],
      };
      this.tipoGraficaPrioridad1 = 'Gris';
      setTimeout(() => {
        this.activarPrioridad1 = true;
      }, 5);
    }
    //////// Emìeza grafica CLIENTES //////
    if (this.datosClientes.length > 0) {
      for (let valor of this.datosClientes) {
        // this.arrayProducto.push(valor.piezas);
        this.filtroClientes.push(valor.cliente);
        this.tipoGraficaClientes = 'General';
      }
    } else {
      this.tipoGraficaPrioridad1 = 'Gris';
      // this.arrayProducto.push(1);
      this.filtroClientes.push("");
    }
    const valoresCli = [] = [];
    const valoresClientes = [] = [];
    for (let nombre of this.datosClientes) {
      valoresClientes.push([0, 0]);
      valoresCli.push(0);
    }
    if (valoresCli.length > 0  && this.datosClientes[0].totalMonto !== 0) {
      this.dataClientes = {
        titulo: 'Totales',
        labels: this.filtroClientes,
        valores: valoresCli,
        labelsExtras: ['Piezas', 'Monto'],
        labelsExtrasHover: ['Piezas', 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresClientes,
      };
      this.dataClientesAux = {
        titulo: 'Totales',
        labels: this.filtroClientes,
        valores: valoresCli,
        labelsExtras: ['Piezas', 'Monto'],
        labelsExtrasHover: ['Piezas', 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresClientes,
      };
      this.tipoGraficaClientes = 'General';
    } else {
      this.dataClientes = {
        titulo: 'Totales',
        labels: ['Sin datos'],
        valores: [1],
        labelsExtras: ['Piezas', 'Monto'],
        labelsExtrasHover: ['Piezas', 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: [[0, 0]],
      };
      this.tipoGraficaClientes = 'Gris';
      setTimeout(() => {
        this.activarClientes = true;
      }, 5);
    }
    //////// Emìeza grafica PRIORIDAD 2 //////
    if (this.datosPrioridad2.length > 0) {
      for (let valor of this.datosPrioridad2) {
        this.filtroPrioridad2.push(valor.cliente);
        this.tipoGraficaPrioridad2 = 'PrioridadNaranja';
      }
    } else {
      this.tipoGraficaPrioridad2 = 'Gris';
      this.filtroPrioridad2.push("");
    }
    const valoresPrio2 = [] = [];
    const valoresPrioridades2 = [] = [];
    for (let nombre of this.datosPrioridad2) {
      valoresPrioridades2.push([0, 0]);
      valoresPrio2.push(0);
    }
    if (valoresPrio2.length > 0 && this.datosPrioridad2[0].totalMonto !== 0) {
      this.dataPrioridad2 = {
        titulo: 'Totales',
        labels: this.filtroPrioridad2,
        valores: valoresPrio2,
        labelsExtras: ['Piezas', 'Monto'],
        labelsExtrasHover: ['Piezas', 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresPrioridades2,
      };
      this.dataPrioridad2Aux = {
        titulo: 'Totales',
        labels: this.filtroPrioridad2,
        valores: valoresPrio2,
        labelsExtras: ['Piezas', 'Monto'],
        labelsExtrasHover: ['Piezas', 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresPrioridades2,
      };
      this.tipoGraficaPrioridad2 = 'PrioridadNaranja';
    } else {
      this.dataPrioridad2 = {
        titulo: 'Totales',
        labels: ['Sin datos'],
        valores: [1],
        labelsExtras: ['Piezas', 'Monto'],
        labelsExtrasHover: ['Piezas', 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: [[0, 0]],
      };
      this.tipoGraficaPrioridad2 = 'Gris';
      setTimeout(() => {
        this.activarPrioridad2 = true;
      }, 5);
    }
    //////// Emìeza grafica PRIORIDAD 3 //////
    if (this.datosPrioridad3.length > 0) {
      for (let valor of this.datosPrioridad3) {
        this.filtroPrioridad3.push(valor.cliente);
        this.tipoGraficaPrioridad3 = 'PrioridadVerde';
      }
    } else {
      this.tipoGraficaPrioridad3 = 'Gris';
      this.filtroPrioridad3.push("");
    }
    const valoresPrio3 = [] = [];
    const valoresPrioridades3 = [] = [];
    for (let nombre of this.datosPrioridad3) {
      valoresPrioridades3.push([0, 0]);
      valoresPrio3.push(0);
    }
    if (valoresPrio3.length > 0 && this.datosPrioridad3[0].totalMonto !== 0) {
      this.dataPrioridad3 = {
        titulo: 'Totales',
        labels: this.filtroPrioridad3,
        valores: valoresPrio3,
        labelsExtras: ['Piezas', 'Monto'],
        labelsExtrasHover: ['Piezas', 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresPrioridades3,
      };
      this.dataPrioridad3Aux = {
        titulo: 'Totales',
        labels: this.filtroPrioridad3,
        valores: valoresPrio3,
        labelsExtras: ['Piezas', 'Monto'],
        labelsExtrasHover: ['Piezas', 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: valoresPrioridades3,
      };
      this.tipoGraficaPrioridad3 = 'PrioridadVerde';
    } else {
      this.dataPrioridad3 = {
        titulo: 'Totales',
        labels: ['Sin datos'],
        valores: [1],
        labelsExtras: ['Piezas', 'Monto'],
        labelsExtrasHover: ['Piezas', 'Monto'],
        valuesExtras: [0, 0],
        valuesExtrasHover: [[0, 0]],
      };
      this.tipoGraficaPrioridad3 = 'Gris';
      setTimeout(() => {
        this.activarPrioridad3 = true;
      }, 5);
    }
  }
  calcularDatosParaGraficas() {
    if (this.datosMensajero.length > 0 && this.datosMensajero[0].totalMonto !== 0) {
      for (let productos of this.datosMensajero) {
        this.llenarTotalesGraficas(this.dataMensajero, productos, 'MENSAJEROS', this.dataMensajeroAux);
      }
    }
    if (this.datosPrioridades.length > 0 && this.datosPrioridades[0].totalMonto !== 0) {
      for (let prioridad of this.datosPrioridades) {
        this.llenarTotalesGraficas(this.dataPrioridades, prioridad, 'PRIORIDADES', this.dataPrioridadesAux);
      }
    }
    if (this.datosPrioridd1.length > 0 && this.datosPrioridd1[0].totalMonto !== 0) {
      for (let prioridad1 of this.datosPrioridd1) {
        this.llenarTotalesGraficas(this.dataPrioridad1, prioridad1, 'PRIORIDAD1', this.dataPrioridad1Aux);
      }
    }
    if (this.datosClientes.length > 0 && this.datosClientes[0].totalMonto !== 0) {
      for (let clientes of this.datosClientes) {
        this.llenarTotalesGraficas(this.dataClientes, clientes, 'CLIENTES', this.dataClientesAux);
      }
    }
    if (this.datosPrioridad2.length > 0 && this.datosPrioridad2[0].totalMonto !== 0) {
      for (let prioridad2 of this.datosPrioridad2) {
        this.llenarTotalesGraficas(this.dataPrioridad2, prioridad2, 'PRIORIDAD2', this.dataPrioridad2Aux);
      }
    }
    if (this.datosPrioridad3.length > 0 && this.datosPrioridad3[0].totalMonto !== 0 ) {
      for (let prioridad3 of this.datosPrioridad3) {
        this.llenarTotalesGraficas(this.dataPrioridad3, prioridad3, 'PRIORIDAD3', this.dataPrioridad3Aux);
      }
    }
  }
  llenarTotalesGraficas(total, elemento, graficaElegida, totalAux) {
    switch (graficaElegida) {
      case 'MENSAJEROS':
        let valuesExtrasHover = total.valuesExtrasHover;
        let valuesExtraAux = total.valuesExtras;
        const posicion1 = this.filtroMensajero.indexOf(elemento.mensajero);
        if (this.nuevoMensajero.indexOf(elemento.mensajero) === -1) {
          this.nuevoMensajero.push(elemento.mensajero);
        }
        total.valuesExtrasHover[posicion1][0] += elemento.totalPiezas;
        /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
        /*Se agrego esto para convertir el valor en divisa*/
        totalAux.valuesExtras[1] += elemento.totalMonto;
        total.valuesExtras[1] = new AccountingFormatMoney().transform( totalAux.valuesExtras[1]);
        /*Termino..*/
        total.valuesExtras[0] += elemento.totalPiezas; // Total de Partidas
        total.valores[posicion1] += elemento.totalMonto; // +(elemento.monto.toFixed(2)); //Monto total
        /*total.valuesExtrasHover[posicion2][1] += +(elemento.monto.toFixed(2));*/
        /**Se agrego esto para ponerle al monto tipo divisa*/
        valuesExtrasHover[posicion1][1] += +(elemento.totalMonto.toFixed(2));
        total.valuesExtrasHover[posicion1][1] = new AccountingFormatMoney().transform(valuesExtrasHover[posicion1][1]);
        /*---------Termina------*/
        setTimeout(() => {
          this.activarMensajero = true;
        }, 5);
        break;
      case 'PRIORIDADES':
        valuesExtrasHover = total.valuesExtrasHover;
        valuesExtraAux = total.valuesExtras;
        const posicion2 = this.filtroPrioridades.indexOf(elemento.prioridad);
        if (this.nuevoPrioridades.indexOf(elemento.prioridad) === -1) {
          this.nuevoPrioridades.push(elemento.prioridad);
        }
        total.valuesExtrasHover[posicion2][0] += elemento.totalPiezas;
        /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
        /*Se agrego esto para convertir el valor en divisa*/
        totalAux.valuesExtras[1] += elemento.totalMonto;
        total.valuesExtras[1] = new AccountingFormatMoney().transform( totalAux.valuesExtras[1]);
        /*Termino..*/
        total.valuesExtras[0] += elemento.totalPiezas; // Total de Partidas
        total.valores[posicion2] += elemento.totalMonto; // +(elemento.monto.toFixed(2)); //Monto total
        /*total.valuesExtrasHover[posicion2][1] += +(elemento.monto.toFixed(2));*/
        /**Se agrego esto para ponerle al monto tipo divisa*/
        valuesExtrasHover[posicion2][1] += +(elemento.totalMonto.toFixed(2));
        total.valuesExtrasHover[posicion2][1] = new AccountingFormatMoney().transform(valuesExtrasHover[posicion2][1]);
        /*---------Termina------*/
        setTimeout(() => {
          this.activarPrioridades = true;
        }, 5);
        break;
      case 'PRIORIDAD1':
        valuesExtrasHover = total.valuesExtrasHover;
        valuesExtraAux = total.valuesExtras;
        const posicion3 = this.filtroPrioridad1.indexOf(elemento.cliente);
        if (this.nuevoPrioridad1.indexOf(elemento.cliente) === -1) {
          this.nuevoPrioridad1.push(elemento.cliente);
        }
        total.valuesExtrasHover[posicion3][0] += elemento.totalPiezas;
        /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
        /*Se agrego esto para convertir el valor en divisa*/
        totalAux.valuesExtras[1] += elemento.totalMonto;
        total.valuesExtras[1] = new AccountingFormatMoney().transform( totalAux.valuesExtras[1]);
        /*Termino..*/
        total.valuesExtras[0] += elemento.totalPiezas; // Total de Partidas
        total.valores[posicion3] += elemento.totalMonto; // +(elemento.monto.toFixed(2)); //Monto total
        /*total.valuesExtrasHover[posicion2][1] += +(elemento.monto.toFixed(2));*/
        /**Se agrego esto para ponerle al monto tipo divisa*/
        valuesExtrasHover[posicion3][1] += +(elemento.totalMonto.toFixed(2));
        total.valuesExtrasHover[posicion3][1] = new AccountingFormatMoney().transform(valuesExtrasHover[posicion3][1]);
        /*---------Termina------*/
        setTimeout(() => {
          this.activarPrioridad1 = true;
        }, 5);
        break;
      case 'CLIENTES':
        valuesExtrasHover = total.valuesExtrasHover;
        valuesExtraAux = total.valuesExtras;
        const posicion4 = this.filtroClientes.indexOf(elemento.cliente);
        if (this.nuevoClientes.indexOf(elemento.cliente) === -1) {
          this.nuevoClientes.push(elemento.cliente);
        }
        total.valuesExtrasHover[posicion4][0] += elemento.totalPiezas;
        /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
        /*Se agrego esto para convertir el valor en divisa*/
        totalAux.valuesExtras[1] += elemento.totalMonto;
        total.valuesExtras[1] = new AccountingFormatMoney().transform( totalAux.valuesExtras[1]);
        /*Termino..*/
        total.valuesExtras[0] += elemento.totalPiezas; // Total de Partidas
        total.valores[posicion4] += elemento.totalMonto; // +(elemento.monto.toFixed(2)); //Monto total
        /*total.valuesExtrasHover[posicion2][1] += +(elemento.monto.toFixed(2));*/
        /**Se agrego esto para ponerle al monto tipo divisa*/
        valuesExtrasHover[posicion4][1] += +(elemento.totalMonto.toFixed(2));
        total.valuesExtrasHover[posicion4][1] = new AccountingFormatMoney().transform(valuesExtrasHover[posicion4][1]);
        /*---------Termina------*/
        setTimeout(() => {
          this.activarClientes = true;
        }, 5);
        break;
      case 'PRIORIDAD2':
        valuesExtrasHover = total.valuesExtrasHover;
        valuesExtraAux = total.valuesExtras;
        const posicion5 = this.filtroPrioridad2.indexOf(elemento.cliente);
        if (this.nuevoPrioridad2.indexOf(elemento.cliente) === -1) {
          this.nuevoPrioridad2.push(elemento.cliente);
        }
        total.valuesExtrasHover[posicion5][0] += elemento.totalPiezas;
        /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
        /*Se agrego esto para convertir el valor en divisa*/
        totalAux.valuesExtras[1] += elemento.totalMonto;
        total.valuesExtras[1] = new AccountingFormatMoney().transform( totalAux.valuesExtras[1]);
        /*Termino..*/
        total.valuesExtras[0] += elemento.totalPiezas; // Total de Partidas
        total.valores[posicion5] += elemento.totalMonto; // +(elemento.monto.toFixed(2)); //Monto total
        /*total.valuesExtrasHover[posicion2][1] += +(elemento.monto.toFixed(2));*/
        /**Se agrego esto para ponerle al monto tipo divisa*/
        valuesExtrasHover[posicion5][1] += +(elemento.totalMonto.toFixed(2));
        total.valuesExtrasHover[posicion5][1] = new AccountingFormatMoney().transform(valuesExtrasHover[posicion5][1]);
        /*---------Termina------*/
        setTimeout(() => {
          this.activarPrioridad2 = true;
        }, 5);
        break;
      case 'PRIORIDAD3':
        valuesExtrasHover = total.valuesExtrasHover;
        valuesExtraAux = total.valuesExtras;
        const posicion6 = this.filtroPrioridad3.indexOf(elemento.cliente);
        if (this.nuevoPrioridad3.indexOf(elemento.cliente) === -1) {
          this.nuevoPrioridad3.push(elemento.cliente);
        }
        total.valuesExtrasHover[posicion6][0] += elemento.totalPiezas;
        /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
        /*Se agrego esto para convertir el valor en divisa*/
        totalAux.valuesExtras[1] += elemento.totalMonto;
        total.valuesExtras[1] = new AccountingFormatMoney().transform( totalAux.valuesExtras[1]);
        /*Termino..*/
        total.valuesExtras[0] += elemento.totalPiezas; // Total de Partidas
        total.valores[posicion6] += elemento.totalMonto; // +(elemento.monto.toFixed(2)); //Monto total
        /**Se agrego esto para ponerle al monto tipo divisa*/
        valuesExtrasHover[posicion6][1] += +(elemento.totalMonto.toFixed(2));
        total.valuesExtrasHover[posicion6][1] = new AccountingFormatMoney().transform(valuesExtrasHover[posicion6][1]);
        /*---------Termina------*/
        setTimeout(() => {
          this.activarPrioridad3 = true;
        }, 5);
        break;
      default:
        break;
    }
  }
  recibirTotEstrellas(tot) {
    this.totEstrellas = tot;
    if (this.totEstrellas > 0) {
      this.activarBtnFin = true;
    }
  }
  finalizarRuta() {
    console.log('Soy textAre-->', this.justificacionV);
    let obj: any;
    obj = {
       folio: this.r1[0].folio,
       justificacion: this.justificacionV,
       calificacion: this.totEstrellas,
      idResponsable: this.idResponsable
    };
    console.log('Soy textAre-->', obj);
    this._service.calificarRuta(obj).subscribe(
      data => {
          if (data.current) {
            this.show_grafica = true;
            this.show_mapa = false;
            this.obtenerDatos();
          }
      },
      error => {

      }
    );
  }

  rutaMensajero(){

    for (let ruta of this.r1) {
      this.rutaProgramada.push([ruta.latitud, ruta.longitud]);
    }

    for (let ruta of this.r2) {
      if(ruta.latitud != null && ruta.latitud != 0 && ruta.longitud != null && ruta.longitud != 0) {
        this.rutaProgramada2.push([ruta.latitud + 0.001, ruta.longitud]);
      }else{
        this.rutaProgramada2.push([ruta.latitud , ruta.longitud]);
      }
    }

    this.rutaAux = this.rutaProgramada.slice(); //Copy
    this.rutaAux2 = this.rutaProgramada2.slice(); //Copy
    console.log("rutaAux", this.rutaAux);

    this.linea.push({lat: this._proquifa[0], lng: this._proquifa[1]}); // Mete a proquifa en la posición 0
    this.linea2.push({lat: this._proquifa[0], lng: this._proquifa[1]}); // Mete a proquifa en la posición 0
    for (let j = 0; j < this.rutaProgramada.length; j++) {
      this.marcadores.push(this.rutaProgramada[j]);
      this.linea.push({lat: this.marcadores[j][0], lng: this.marcadores[j][1]});
    }
    for (let j = 0; j < this.rutaProgramada2.length; j++) {
      this.marcadores2.push(this.rutaProgramada2[j]);
      this.linea2.push({lat: this.marcadores2[j][0], lng: this.marcadores2[j][1]});
    }
    this.linea.push({lat: this._proquifa[0], lng: this._proquifa[1]}); // Mete a proquifa en la posición 0
    this.linea2.push({lat: this._proquifa[0], lng: this._proquifa[1]}); // Mete a proquifa en la posición 0

    this.marcadores.forEach((ma, index) => {
      if (ma[0] > 0) {
        this.positions.push([ma, index]);
      }
    });
    this.marcadores2.forEach((ma, index) => {
      if (ma[0] > 0) {
        this.positions2.push([ma, index]);
      }
    });
    for (let li of this.linea) {
      if (li['lat'] > 0) {
        this.path.push(li);
      }
    }
    for (let li of this.linea2) {
      if (li['lat'] > 0) {
        this.path2.push(li);
      }
    }

  }


  info({target: marker}, num: number, marcador:number) { //Info de los market por Mensajero
    if (marker.map != undefined) {
      if (marcador == 1) {
        this.show = false;
        marker.nguiMapComponent.openInfoWindow('iw', marker);
        this.nombreC = this.r1[num].cliente;
        this.zonaC = this.r1[num].zona;
        this.direccionC = this.r1[num].calle;
        /*this.totaEventosC = this.itemsAux3[num].eventosJuntos.length;
        this.eventosC = this.itemsAux3[num].eventosJuntos;*/
        this.montoC = this.r1[num].monto;
        this.idCliente = this.r1[num].idCliente;
        /*his.numAyuda = num;
        this.clickPosItem = num;*/
        // console.log(this.numAyuda);
      } else {
        this.show = false;
        marker.nguiMapComponent.openInfoWindow('iw', marker);
        this.nombreC = this.r2[num].cliente;
        this.zonaC = this.r2[num].zona;
        this.direccionC = this.r2[num].calle;
        /*this.totaEventosC = this.itemsAux3[num].eventosJuntos.length;
        this.eventosC = this.itemsAux3[num].eventosJuntos;*/
        this.montoC = this.r2[num].monto;
        this.idCliente = this.r2[num].idCliente;
        /*his.numAyuda = num;
        this.clickPosItem = num;*/
        // console.log(this.numAyuda);
      }
    }
  }

  infoWindows(target: any, num: number) {
    this.show = false;
  }

}
