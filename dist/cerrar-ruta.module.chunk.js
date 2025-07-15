webpackJsonp(["cerrar-ruta.module"],{

/***/ "./src/app/components/gestor-ruta/cerrar-ruta/cerrar-ruta-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CerrarRutaRoutingMoudle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cerrar_ruta_component__ = __webpack_require__("./src/app/components/gestor-ruta/cerrar-ruta/cerrar-ruta.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CerrarRutaRoutingMoudle = /** @class */ (function () {
    function CerrarRutaRoutingMoudle() {
    }
    CerrarRutaRoutingMoudle = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    { path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__cerrar_ruta_component__["a" /* CerrarRutaComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], CerrarRutaRoutingMoudle);
    return CerrarRutaRoutingMoudle;
}());



/***/ }),

/***/ "./src/app/components/gestor-ruta/cerrar-ruta/cerrar-ruta.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\n    <aside [ngClass]=\"classAsideMenu\">\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\n        <pn-menu-seccion  [items]=\"itemsMenu\"  style=\"width: 100%\" *ngIf=\"activeMenu\"></pn-menu-seccion>\n      </div>\n    </aside>\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n    </div>\n\n  </div>\n  <div class=\"area\" style=\"width:100%; height:100%;overflow: scroll;\">\n  <div class=\"todo\" *ngIf=\"show_mapa\">\n    <div class=\"linea\">\n      <img height=\"20px\" width=\"20px\" style=\"margin-top: 2px; \" src=\"./assets/Images/FlechaIzqVerdee.svg\"\n        (click)=\"regresar()\" />\n      <div><label>Cerrar Ruta </label></div>\n    </div>\n    <div class=\"detalleMensajero\">\n      <div class=\"nombre\">{{nombreMensajero}}</div>\n      <mat-divider></mat-divider>\n      <div class=\"zona\">\n        Total de Zonas <br />\n        <span> {{lstZonas.length}} </span>\n      </div>\n      <mat-divider></mat-divider>\n      <div class=\"clientes\">\n        Total de Clientes <br />\n        <span> {{lstClientes.length}}</span> <img src=\"./assets/login/usuario.svg\" />\n      </div>\n      <mat-divider></mat-divider>\n      <div class=\"estrellas\">\n        Clasificacion {{totEstrellas}}/5 <br />\n        <pn-calificacion-estrella style=\"justify-content: center;\" (eventCambio)=\"recibirTotEstrellas($event)\"></pn-calificacion-estrella>\n      </div>\n      <mat-divider></mat-divider>\n      <div class=\"eficacia\">\n        Eficacia <br />\n        <span> 80%</span>\n      </div>\n      <mat-divider></mat-divider>\n      <div class=\"clientesNO\">\n        Clientes No alcanzados <br />\n        <span> {{noEntregados.length}} </span> <img src=\"./assets/login/usuario.svg\" />\n      </div>\n      <mat-divider></mat-divider>\n      <div class=\"tiempoRuta\">\n        Tiempo Total de Ruta <br /><span> {{horaFin}}:{{minFin}} hrs</span>\n      </div>\n    </div>\n    <div class=\"contenedorMapa\">\n      <div class=\"rutaDefinida\">\n        <div class=\"contenedor\">\n          <div class=\"ruta\">\n            <div class=\"bolitaColor\" style=\"background: #F8E71C;margin-top: 10px;\"></div>\n            <div class=\"texto\">\n              Ruta Proyectada <br /><span> Tiempo Total Real:6 hrs 45 min</span>\n            </div>\n          </div>\n          <mat-divider style=\"background: rgb(22, 22, 23)\"></mat-divider>\n\n          <div class=\"detalle\">\n            <span> Origen:</span> José María Morelos 164, Niño Jesús, 14080\n            <br />Ciudad de México, CDMX <br />\n            <img src=\"./assets/Images/Images/reloj.svg\" height=\"14px\" />\n            <span>TET: </span> 25min\n          </div>\n\n          <mat-divider></mat-divider>\n          <div class=\"contenedorDetalle\">\n            <div class=\"detalles\" *ngFor=\"let item of r1; let i = index\">\n              <div class=\"uno\"># {{ i + 1 }} ·</div>\n              <div class=\"dos\">\n                <div class=\"nombreCliente\">{{ item.cliente }}</div>\n                <div class=\"zona\">\n                  <img src=\"./assets/Images/Images/pines/pin_proquifa.png\" height=\"14px\" />\n                  Zona: {{ item.zona }}\n                </div>\n                <div class=\"direccion\">{{ item.calle }}</div>\n                <div class=\"tiempo\">\n                  <img src=\"./assets/Images/Images/reloj.svg\" height=\"14px\" />\n                  TEE: 20 min · TET: {{ item.TET }} min <br />\n                </div>\n                <div class=\"eventos\">\n                  {{ item.evento }} Eventos:\n                  <span style=\" color: #C1272D; font: 12px; \">P1</span>: {{item.p1}}\n                  <span style=\" color: #FBB03B; font: 12px; \">P2</span>: {{item.p2}}\n                  <span style=\" color: #39B54A; font: 12px; \">P3</span>: {{item.p3}}\n                </div>\n                <div class=\"monto\">\n                  <div>Monto: ${{ item.monto }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <mat-divider></mat-divider>\n\n        <div class=\"totales\">\n          <span> Totales: {{ totales1 }}</span>\n        </div>\n      </div>\n      <mat-divider [vertical]=\"true\" style=\" height: 93%;\"></mat-divider>\n\n      <div class=\"rutaTomada\">\n        <div class=\"contenedor\" style=\"position: relative\">\n          <div class=\"ruta\">\n            <div class=\"bolitaColor\" style=\"background: #0098DA ;margin-top: 10px;\"></div>\n\n            <div class=\"texto\">\n              Ruta Realizada <br /><span> Tiempo Total Real:{{horaFin}} hrs {{minFin}} min</span>\n            </div>\n\n            <div class=\"imagens\" (click)=\"justificacion()\" style=\"position: absolute; right: 15px\">\n              <img [src]=\"\n                  showJustify\n                    ? './assets/Images/Images/comentarios_gris.svg'\n                    : './assets/Images/Images/comentarios_verde.svg'\n                \"\n                height=\"20px\" />\n            </div>\n          </div>\n          <mat-divider style=\"background: rgb(22, 22, 23)\"></mat-divider>\n          <div class=\"detalle\">\n            <span> Origen:</span> José María Morelos 164, Niño Jesús, 14080\n            <br />Ciudad de México, CDMX <br />\n            <img src=\"./assets/Images/Images/reloj.svg\" height=\"14px\" />\n            <span>TTT: </span> {{minTTTString}}\n          </div>\n\n          <mat-divider></mat-divider>\n          <div class=\"contenedorDetalle\">\n            <div class=\"detalles\" *ngFor=\"let item of r2; let i = index\">\n              <div class=\"uno\">#{{ i + 1 }}·</div>\n              <div class=\"dos\">\n                <div class=\"nombreCliente\">{{ item.cliente }}</div>\n                <div class=\"zona\">\n                  <img src=\"./assets/Images/Images/pines/pin_proquifa.png\" height=\"14px\" />\n                  Zona: {{ item.zona }}\n                </div>\n                <div class=\"direccion\">{{ item.calle }}</div>\n                <div class=\"tiempo\">\n                  <img src=\"./assets/Images/Images/reloj.svg\" height=\"14px\" />\n                  TTE: {{ arrayTiempos[i].TTE }} min · TTT: {{ arrayTiempos[i].TTT }} min <br />\n                </div>\n                <div class=\"eventos\">\n                  {{ item.eventos }} Eventos:\n                  <span style=\" color: #C1272D; font: 12px; \">P1</span>: {{item.p1}}\n                  <span style=\" color: #FBB03B; font: 12px; \">P2</span>: {{item.p2}}\n                  <span style=\" color: #39B54A; font: 12px; \">P3</span>: {{item.p3}}\n                </div>\n                <div class=\"monto\">\n                  <div>Monto: ${{ item.monto }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <mat-divider></mat-divider>\n\n        <div class=\"totales\">\n          <span> Totales: {{ totales2 }} </span>\n        </div>\n      </div>\n      <div class=\"justificacion\" *ngIf=\"showJustify\">\n        <div class=\"titulo\">Justificación de resultados en tiempo de Ruta</div>\n        <div class=\"texto\">\n          <textarea style=\"height: 100%; width: 100%;\" [(ngModel)]=\"justificacionV\"></textarea>\n        </div>\n        <div class=\"btn\"><button mat-flat-button>OK</button></div>\n      </div>\n\n      <!--<div class=\"botonHamburgesa\">\n        <img [src]=\"\n            checksRutas\n              ? './assets/Images/hamburguesa.svg'\n              : './assets/Images/hamburguesa_verde.svg'\n          \"\n          height=\"20px\" (click)=\"checkRutas()\" />\n      </div>-->\n\n      <div class=\"checkRutas\" *ngIf=\"checksRutas\">\n        <div class=\" texto\">\n          <div>\n            <div class=\"info\">\n              <div class=\"bolitaColor\" style=\"background: #C1272D ;\"></div>\n              <label>Ruta no apropiada</label>\n            </div>\n            <div class=\"cheks\">\n              <mat-checkbox value=\"no_apropiada\"> </mat-checkbox>\n            </div>\n          </div>\n          <mat-divider></mat-divider>\n          <div>\n            <div class=\"info\">\n              <div class=\"bolitaColor\" style=\"background: #39B54A ;\"></div>\n              <label> Ruta apropiada</label>\n            </div>\n            <div class=\"cheks\">\n              <mat-checkbox value=\"apropiada\"> </mat-checkbox>\n            </div>\n          </div>\n          <mat-divider></mat-divider>\n          <div>\n            <div class=\"info\">\n              <div class=\"bolitaColor\" style=\"background: #F8E71C ;\"></div>\n              <label> Ruta Proyectada</label>\n            </div>\n            <div class=\"cheks\">\n              <mat-checkbox value=\"proyectada\"> </mat-checkbox>\n            </div>\n          </div>\n          <mat-divider></mat-divider>\n          <div>\n            <div class=\"info\">\n              <div class=\"bolitaColor\" style=\"background: #0098DA ;\"></div>\n              <label>Ruta Realizada</label>\n            </div>\n            <div class=\"cheks\">\n              <mat-checkbox value=\"realizada\"> </mat-checkbox>\n            </div>\n          </div>\n          <mat-divider></mat-divider>\n        </div>\n      </div>\n\n      <div class=\"mapa\" *ngIf=\"refresh_mapa\">\n        <ngui-map zoom=\"10\" center=\"19.2856554, -99.1595433\" [streetViewControl]=\"false\" [fullscreenControl]=\"false\" [mapTypeControl]=\"false\" *ngIf=\"refresh_mapa\">\n          <!-- Maker Proquifa -->\n\n          <marker [position]=\"_proquifa\" [icon]=\"{ url:_pin[0],  size: [40,50], scaledSize: [40,50] }\"\n                  (click)=\"info1($event)\">\n            <info-window id=\"iw2\">\n              <div class=\"cuadro\">\n                <div class=\"imagen\"><img src=\"assets/login/logo.svg\" width=\"66px\">\n                </div>\n                <div class=\"texto\">\n                  <span> PROQUIFA </span>\n                  <br>\n                  {{r1[0].mensajero}}\n                  <br>\n                  {{ lstClientes.length }} Clientes\n                 <!-- <br>\n                  Tiempo de recorrido:-->\n                </div>\n              </div>\n            </info-window>\n          </marker>\n\n          <!-- RUTA 1 -->\n          <marker *ngFor=\"let marker of positions let i = index;\" (click)=\"info($event,marker[1],1)\"\n                  [position]=\"marker[0]\"\n                  [label]=\"{ color: '#ffff', fontWeight: 'bold',fontSize:'22px',text: (marker[1]+1).toString() }\"\n                  [icon]=\"{ url: _pin2[1],  size: [40,50], scaledSize: [40,50] }\">\n            <info-window id=\"iw\" (closeclick)=\"infoWindows($event,i)\">\n              <div class=\"cuadro\">\n                <div class=\"imagen\">\n                  <img *ngIf=\"idCliente != 0\" src=\"assets/Images/clientes/{{idCliente}}_grande.png\"\n                       onError=\"this.src = 'assets/login/logo.svg'\" width=\"66px\">\n                  <img *ngIf=\"idCliente == 0\" src=\"assets/login/logo.svg\" width=\"66px\">\n                </div>\n                <div class=\"texto\">\n                  <span>{{ nombreC }} </span>\n                  <br>\n                  Zona {{ zonaC }} : {{ direccionC }}\n                  <br>\n                  <!--{{ totaEventosC }} - Eventos: {{ eventosC }}-->\n                  <br>\n                  Monto: ${{ montoC }}\n                </div>\n              </div>\n            </info-window>\n          </marker>\n          <polyline [path]=\"path\" [geodesic]=\"true\" [strokeColor]=\"'yellow'\" [strokeWeight]=\"8\"></polyline>\n\n          <!-- RUTA 2 -->\n          <marker *ngFor=\"let marker of positions2 let i = index;\" (click)=\"info($event,marker[1],2)\"\n                  [position]=\"marker[0]\"\n                  [label]=\"{ color: '#ffff', fontWeight: 'bold',fontSize:'22px',text: (marker[1]+1).toString() }\"\n                  [icon]=\"{ url: _pin[1],  size: [40,50], scaledSize: [40,50] }\">\n            <info-window id=\"iw\" (closeclick)=\"infoWindows($event,i)\">\n              <div class=\"cuadro\">\n                <div class=\"imagen\">\n                  <img *ngIf=\"idCliente != 0\" src=\"assets/Images/clientes/{{idCliente}}_grande.png\"\n                       onError=\"this.src = 'assets/login/logo.svg'\" width=\"66px\">\n                  <img *ngIf=\"idCliente == 0\" src=\"assets/login/logo.svg\" width=\"66px\">\n                </div>\n                <div class=\"texto\">\n                  <span>{{ nombreC }} </span>\n                  <br>\n                  Zona {{ zonaC }} : {{ direccionC }}\n                  <br>\n                  <!--{{ totaEventosC }} - Eventos: {{ eventosC }}-->\n                  <br>\n                  Monto: ${{ montoC }}\n                </div>\n              </div>\n            </info-window>\n          </marker>\n          <polyline [path]=\"path2\" [geodesic]=\"true\" [strokeColor]=\"'#0098DA'\" [strokeWeight]=\"8\"></polyline>\n\n          <map-polygon [paths]=\"CUERNAVACA\" [strokeColor]=\"'#4F47A0'\" [fillColor]=\"'#7368EF'\"></map-polygon>\n          <map-polygon [paths]=\"TOLUCA\" [strokeColor]=\"'#0838DD'\" [fillColor]=\"'#0838DD'\"></map-polygon>\n          <map-polygon [paths]=\"CDMX\" [strokeColor]=\"'#900280'\" [fillColor]=\"'#900280'\"></map-polygon>\n          <map-polygon [paths]=\"PUEBLA\" [strokeColor]=\"'#FC187B'\" [fillColor]=\"'#FC187B'\"></map-polygon>\n        </ngui-map>\n\n        <div class=\"boton1\" [style.pointerEvents]=\"activarBtnFin?'auto':'none'\" (click)=\"finalizarRuta()\">\n          <div style=\"width: 63%;\"></div>\n          <button mat-flat-button [style.background]=\"activarBtnFin?'#008895' : '#ECEEF0'\" style=\"height: 30px;width: 170px;font-size: 22px\">Aceptar</button>\n        </div>\n      </div>\n    </div>\n\n    <mat-divider style=\"background: rgb(22, 22, 23)\"></mat-divider>\n\n    <div class=\"notaciones\">\n      <div class=\"alineacion\">\n        <span style=\"font-weight: bold; color: #C1272D; font: 12px; \">P1</span><label>:Prioridad 1</label>\n        <div></div>\n\n        <span style=\"font-weight: bold; color: #FBB03B; font: 12px; \">P2</span><label>:Prioridad 2</label>\n        <div></div>\n\n        <span style=\"font-weight: bold; color: #39B54A; font: 12px ;  \">P3</span>\n        <label>:Prioridad 3</label>\n        <div></div>\n\n        <img src=\"./assets/Images/Images/ubicación.svg\" width=\"10px\" height=\"10px\" />\n        <label>:Ubicación</label>\n        <div></div>\n\n        <span style=\"font-weight: bold; font: 12px;\">TEE</span><label>: Tiempo Estimado de Evento</label>\n        <div></div>\n\n        <span style=\"font-weight: bold; font: 12px;  \">TET</span><label>:Tiempo Estimado de Traslado</label>\n        <div></div>\n        <span style=\"font-weight: bold; font: 12px; \">TRE</span><label>:Tiempo Real Estancia</label>\n        <div></div>\n        <span style=\"font-weight: bold; font: 12px; \">TRT</span><label>:Tiempo Real Traslado</label>\n        <div></div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Primera vista -->\n  <div class=\"grafica\" *ngIf=\"show_grafica\">\n    <div class=\"linea\"><label>Cerrar Ruta </label></div>\n\n    <div class=\"contenidoInicio\">\n      <div class=\"seccionMensajeros\">\n        <div>MENSAJEROS</div>\n        <div class=\"buscar\">\n          <div>\n            <div class=\"lupa\">\n              <img src=\"./assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\" />\n            </div>\n            <!-- <input type=\"text\" [ngModel]=\"searchMensajero\" class=\"buscar-input\" placeholder=\"Nombre\" /> -->\n          </div>\n        </div>\n        <div class=\"listaMensajeros\">\n          <div class=\"itemMensajero\" *ngFor=\"let item of rutaMensajeros; let i = index\"  (click)=\"mostrarGraficas(i)\">\n            <div># {{ i + 1}}</div>\n            <div>\n              <div>{{item.mensajero}}</div> <!-- <div>Nombre Mensajero</div>-->\n              <div><b>{{item.totalZonas}}</b> - <b *ngIf=\"item.totalZonas > 1\"> Zonas</b> <b *ngIf=\"item.totalZonas == 1\"> Zona</b> · <b>{{item.totalClientes}}</b> <b *ngIf=\"item.totalClientes > 1\"> Clientes</b> <b *ngIf=\"item.totalClientes == 1\"> Cliente</b> </div> <!--<div>CDMX - Norte · 4 Clientes</div>-->\n              <div><div *ngIf=\"Eficacion\">Eficacia 80% ·</div> <span>Clientes no alcanzados {{item.totalNoEntregado}}</span></div>\n            </div>\n            <div>\n              <img height=\"20px\" src=\"./assets/Images/FlechaDerVerdee.svg\" (click)=\"regresar()\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"graficasInicio\">\n        <div  class=\"graficas\">\n          <div class=\"padreCliente_Prioridades\">\n            <div class=\"graficasGrande\">\n              <div class=\"tituloGrafica\">\n                MENSAJEROS\n              </div>\n              <div id=\"donaCliente\" style=\"width: 100%; height: 100%; display: flex;\">\n                <pn-donut-chart  *ngIf=\"activarMensajero\" [data]=\"dataMensajero\" [tipoGrafica]=\"tipoGraficaMensajeros\"[height]=\"'auto'\"></pn-donut-chart>\n              </div>\n            </div>\n            <div class=\"GrafiPeque\">\n              <div class=\"graficaPequeña\">\n                <div class=\"tituloGrafica\">\n                  PRIORIDADES\n                </div>\n                <div id=\"donaPrioridades\" style=\"width: 100%; height: 100%; display: flex;\">\n                  <pn-donut-chart  *ngIf=\"activarPrioridades\" [data]=\"dataPrioridades\" [tipoGrafica]=\"tipoGraficaPrioridades\"[height]=\"'auto'\"></pn-donut-chart>\n                </div>\n              </div>\n              <div class=\"graficaPequeña\">\n                <div class=\"tituloGrafica\">\n                  PRIORIDAD 1\n                </div>\n                <div id=\"donaPrioridades\" style=\"width: 100%; height: 100%; display: flex;\">\n                  <pn-donut-chart  *ngIf=\"activarPrioridad1\" [data]=\"dataPrioridad1\" [tipoGrafica]=\"tipoGraficaPrioridad1\"[height]=\"'auto'\"></pn-donut-chart>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- fin grafica clientes y productos -->\n          <div class=\"padreCliente_Prioridades\">\n            <div class=\"graficasGrande\">\n              <div class=\"tituloGrafica\">\n                CLIENTES\n              </div>\n              <div id=\"donaCliente\" style=\"width: 100%; height: 100%; display: flex;\">\n                <pn-donut-chart  *ngIf=\"activarClientes\" [data]=\"dataClientes\" [tipoGrafica]=\"tipoGraficaClientes\"[height]=\"'auto'\"></pn-donut-chart>\n              </div>\n            </div>\n            <div class=\"GrafiPeque\">\n              <div class=\"graficaPequeña\">\n                <div class=\"tituloGrafica\">\n                  PRIORIDAD 2\n                </div>\n                <div id=\"donaPrioridades\" style=\"width: 100%; height: 100%; display: flex;\">\n                  <pn-donut-chart  *ngIf=\"activarPrioridad2\" [data]=\"dataPrioridad2\" [tipoGrafica]=\"tipoGraficaPrioridad2\"[height]=\"'auto'\"></pn-donut-chart>\n                </div>\n              </div>\n              <div class=\"graficaPequeña\">\n                <div class=\"tituloGrafica\">\n                  PRIORIDAD 3\n                </div>\n                <div id=\"donaPrioridades\" style=\"width: 100%; height: 100%; display: flex;\">\n                  <pn-donut-chart  *ngIf=\"activarPrioridad3\" [data]=\"dataPrioridad3\" [tipoGrafica]=\"tipoGraficaPrioridad3\"[height]=\"'auto'\"></pn-donut-chart>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- fin div graficas -->\n        </div>\n      </div>\n    </div>\n\n    <!--\n      <div class=\"boton\">\n        <div style=\" width: 80%; height: 100%;\"></div>\n        <div><button mat-flat-button (click)=\"mostrarGraficas()\">INGRESAR</button></div>\n      </div>\n    -->\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/gestor-ruta/cerrar-ruta/cerrar-ruta.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n/*\n * Typography\n * ========================================================================== */\n/*\n * Media queries breakpoints\n * ========================================================================== */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/*\n  * Components\n  * ========================================================================== */\n/* - Barra de navegación - */\n/* Variable base global para el tamaño de fuente: 9pt*/\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\nngui-map {\n  display: block;\n  height: 93%; }\n.padre {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n.todo {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  width: 100%; }\n.linea {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 47px;\n  border-bottom: #424242 2px solid;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 8px 20px 10px 20px; }\n.linea label {\n    font: 22px Novecento;\n    color: #5B5B5B; }\n.detalleMensajero {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  font: 14px Roboto-Bold;\n  height: 15%;\n  background: #e5e6e8;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center; }\n.detalleMensajero .mat-divider {\n    width: 1px;\n    background: #D4D5D6;\n    height: 90%; }\n.detalleMensajero .nombre {\n    width: 15%;\n    color: #008894;\n    font-weight: bold;\n    margin-left: 20px;\n    font-size: 16px; }\n.detalleMensajero .zona {\n    width: 15%;\n    text-align: center;\n    font-size: 12px; }\n.detalleMensajero .zona span {\n      font-size: 25px;\n      font-weight: bold; }\n.detalleMensajero .clientes {\n    width: 15%;\n    text-align: center;\n    font-size: 12px; }\n.detalleMensajero .clientes img {\n      height: 18px;\n      width: 20px; }\n.detalleMensajero .clientes span {\n      color: #FBB03B;\n      font-size: 25px;\n      font-weight: bold; }\n.detalleMensajero .estrellas {\n    width: 20%;\n    font-size: 12px;\n    text-align: center; }\n.detalleMensajero .eficacia {\n    width: 10%;\n    text-align: center;\n    font-size: 12px; }\n.detalleMensajero .eficacia span {\n      color: #FBB03B;\n      font-size: 25px;\n      font-weight: bold; }\n.detalleMensajero .clientesNO {\n    width: 15%;\n    text-align: center;\n    font-size: 12px; }\n.detalleMensajero .clientesNO img {\n      margin-left: 10px;\n      height: 18px;\n      width: 20px; }\n.detalleMensajero .clientesNO span {\n      color: #FBB03B;\n      font-size: 25px;\n      font-weight: bold; }\n.detalleMensajero .tiempoRuta {\n    width: 15%;\n    font-size: 12px;\n    text-align: center;\n    margin-right: 5px; }\n.detalleMensajero .tiempoRuta span {\n      color: #FBB03B;\n      font-size: 25px;\n      font-weight: bold; }\n.contenedorMapa {\n  width: 100%;\n  height: 90%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  font: 10px Roboto-Bold; }\n.contenedorMapa .rutaDefinida {\n    line-height: 18px;\n    width: 25%;\n    margin-left: 25px;\n    margin-right: 25px;\n    margin-top: 15px; }\n.contenedorMapa .rutaDefinida .contenedor {\n      width: 100%;\n      height: 95%; }\n.contenedorMapa .rutaDefinida .contenedor .ruta {\n        color: #008894;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        margin-bottom: 5px; }\n.contenedorMapa .rutaDefinida .contenedor .ruta .texto {\n          margin-top: 10px;\n          margin-left: 5px;\n          font: 14px Roboto-Bold; }\n.contenedorMapa .rutaDefinida .contenedor .ruta .texto span {\n            font: 10px Roboto-Light; }\n.contenedorMapa .rutaDefinida .contenedor .ruta .bolitaColor {\n          height: 12px;\n          width: 12px;\n          border-radius: 50px; }\n.contenedorMapa .rutaDefinida .contenedor .detalle {\n        margin-top: 6px;\n        margin-bottom: 5px;\n        font: 10px Roboto-Light;\n        margin-left: 5px;\n        line-height: 12px; }\n.contenedorMapa .rutaDefinida .contenedor .detalle span {\n          font: 10px Roboto-Bold; }\n.contenedorMapa .rutaDefinida .contenedor .contenedorDetalle {\n        height: 75%;\n        overflow: auto; }\n.contenedorMapa .rutaDefinida .contenedor .contenedorDetalle .detalles {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          border-bottom: rgba(0, 0, 0, 0.12) 1px solid; }\n.contenedorMapa .rutaDefinida .contenedor .contenedorDetalle .detalles .uno {\n            font: 12px Roboto-Bold;\n            width: 16%;\n            width: 20%;\n            margin-top: 15px;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center; }\n.contenedorMapa .rutaDefinida .contenedor .contenedorDetalle .detalles .dos {\n            width: 100%;\n            margin-bottom: 15px;\n            margin-top: 15px; }\n.contenedorMapa .rutaDefinida .contenedor .contenedorDetalle .detalles .dos .nombreCliente {\n              font: 12px Roboto-Bold; }\n.contenedorMapa .rutaDefinida .contenedor .contenedorDetalle .detalles .dos .tiempo {\n              font: 10px Roboto-Regular; }\n.contenedorMapa .rutaDefinida .contenedor .contenedorDetalle .detalles .dos .tiempo span {\n                color: #008894; }\n.contenedorMapa .rutaDefinida .contenedor .contenedorDetalle .detalles .dos .eventos {\n              font: 10px Roboto-Light; }\n.contenedorMapa .rutaDefinida .contenedor .contenedorDetalle .detalles .dos .monto {\n              font: 10px Roboto-Light;\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row;\n              width: 100%; }\n.contenedorMapa .rutaDefinida .contenedor .contenedorDetalle .detalles .dos .monto div {\n                font: 10px Roboto-Light;\n                width: 85%; }\n.contenedorMapa .rutaDefinida .contenedor .detalles:hover {\n        background: #d3d2d2; }\n.contenedorMapa .rutaDefinida .totales {\n      text-align: center;\n      margin-top: 5px;\n      width: 100%;\n      height: 5%;\n      margin-top: 5px; }\n.contenedorMapa .rutaTomada {\n    line-height: 18px;\n    width: 25%;\n    margin-left: 25px;\n    margin-right: 25px;\n    margin-top: 15px; }\n.contenedorMapa .rutaTomada .contenedor {\n      width: 100%;\n      height: 95%; }\n.contenedorMapa .rutaTomada .contenedor .ruta {\n        color: #008894;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        margin-bottom: 5px; }\n.contenedorMapa .rutaTomada .contenedor .ruta .texto {\n          margin-top: 10px;\n          margin-left: 5px;\n          font: 14px Roboto-Bold; }\n.contenedorMapa .rutaTomada .contenedor .ruta .texto span {\n            font: 10px Roboto-Light; }\n.contenedorMapa .rutaTomada .contenedor .ruta .bolitaColor {\n          height: 12px;\n          width: 12px;\n          border-radius: 50px; }\n.contenedorMapa .rutaTomada .contenedor .ruta .imagens {\n          margin-right: -12px; }\n.contenedorMapa .rutaTomada .contenedor .detalle {\n        margin-top: 6px;\n        margin-bottom: 5px;\n        font: 10px Roboto-Light;\n        margin-left: 5px;\n        line-height: 12px; }\n.contenedorMapa .rutaTomada .contenedor .detalle span {\n          font: 10px Roboto-Bold; }\n.contenedorMapa .rutaTomada .contenedor .contenedorDetalle {\n        height: 75%;\n        overflow: auto; }\n.contenedorMapa .rutaTomada .contenedor .contenedorDetalle .detalles {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          border-bottom: rgba(0, 0, 0, 0.12) 1px solid; }\n.contenedorMapa .rutaTomada .contenedor .contenedorDetalle .detalles .uno {\n            font: 12px Roboto-Bold;\n            width: 16%;\n            width: 20%;\n            margin-top: 15px;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center; }\n.contenedorMapa .rutaTomada .contenedor .contenedorDetalle .detalles .dos {\n            width: 100%;\n            margin-bottom: 15px;\n            margin-top: 15px; }\n.contenedorMapa .rutaTomada .contenedor .contenedorDetalle .detalles .dos .nombreCliente {\n              font: 12px Roboto-Bold; }\n.contenedorMapa .rutaTomada .contenedor .contenedorDetalle .detalles .dos .tiempo {\n              font: 10px Roboto-Regular; }\n.contenedorMapa .rutaTomada .contenedor .contenedorDetalle .detalles .dos .tiempo span {\n                color: #008894; }\n.contenedorMapa .rutaTomada .contenedor .contenedorDetalle .detalles .dos .eventos {\n              font: 10px Roboto-Light; }\n.contenedorMapa .rutaTomada .contenedor .contenedorDetalle .detalles .dos .monto {\n              font: 10px Roboto-Light;\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row;\n              width: 100%; }\n.contenedorMapa .rutaTomada .contenedor .contenedorDetalle .detalles .dos .monto div {\n                font: 10px Roboto-Light;\n                width: 85%; }\n.contenedorMapa .rutaTomada .contenedor .detalles:hover {\n        background: #d3d2d2; }\n.contenedorMapa .rutaTomada .totales {\n      text-align: center;\n      margin-top: 5px;\n      width: 100%;\n      height: 5%; }\n.contenedorMapa .botonHamburgesa {\n    width: 50px;\n    height: 40px;\n    position: absolute;\n    right: 20px;\n    background: white;\n    z-index: 3;\n    margin-top: 10px; }\n.contenedorMapa .botonHamburgesa img {\n      width: 35px;\n      height: 48px;\n      margin-left: 10px;\n      margin-top: -4px; }\n.contenedorMapa .checkRutas {\n    width: 138px;\n    height: 110px;\n    margin-top: 10px;\n    position: absolute;\n    right: 66px;\n    background: #FFFF;\n    z-index: 3;\n    font-size: 10px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n.contenedorMapa .checkRutas .texto {\n      width: 100%;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n.contenedorMapa .checkRutas .texto div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        height: 35px; }\n.contenedorMapa .checkRutas .texto div .info {\n          width: 90%;\n          margin-top: 10px; }\n.contenedorMapa .checkRutas .texto div .cheks {\n          width: 10%;\n          margin-top: 3px;\n          margin-right: 10px; }\n.contenedorMapa .checkRutas .texto .bolitaColor {\n        height: 12px;\n        width: 12px;\n        border-radius: 50px;\n        margin-left: 10px;\n        margin-right: 5px; }\n.contenedorMapa .justificacion {\n    width: 200px;\n    height: 180px;\n    position: absolute;\n    left: 69%;\n    background: white;\n    z-index: 3; }\n.contenedorMapa .justificacion .titulo {\n      margin-top: 10px;\n      margin-left: 15px;\n      margin-right: 15px;\n      font-family: Roboto-Bold;\n      font-size: 10px;\n      color: #008894;\n      text-align: left; }\n.contenedorMapa .justificacion .texto {\n      width: 85%;\n      margin-left: 15px;\n      margin-right: 15px;\n      margin-top: 15px;\n      height: 50%; }\n.contenedorMapa .justificacion .btn {\n      margin-top: 10px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n.contenedorMapa .justificacion .btn .mat-flat-button {\n        background: #008894;\n        color: white;\n        line-height: 20px;\n        min-width: 124px;\n        margin-top: 4px; }\n.contenedorMapa .mapa {\n    height: 100%;\n    width: 60%; }\n.contenedorMapa .mapa .boton1 {\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n.contenedorMapa .mapa .boton1 .mat-flat-button {\n        background: #008894;\n        color: white;\n        line-height: 20px;\n        min-width: 100px;\n        margin-top: 7px; }\n.notaciones {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n.notaciones .alineacion {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    margin-top: 5px;\n    height: 20px; }\n.notaciones .alineacion span {\n      font-size: 10px; }\n.notaciones .alineacion label {\n      font-size: 7px; }\n.notaciones .alineacion div {\n      width: 5px;\n      height: 1px; }\n.cuadro {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 80px;\n  width: 100%; }\n.cuadro .imagen {\n    float: left;\n    width: 40% !important;\n    background: white; }\n.cuadro .texto {\n    float: left;\n    margin-left: 5px;\n    width: 55% !important;\n    background: white; }\n.cuadro .texto span {\n      font-weight: bold; }\n@media screen and (width: 2560px) and (height: 1440px) {\n  .linea {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: 60px;\n    margin-top: 8px; }\n    .linea img {\n      width: 24px;\n      height: 35px;\n      margin-left: 20px; }\n    .linea label {\n      font: 30px Novecento; }\n  .detalleMensajero {\n    font: 30px Roboto-Bold;\n    height: 10%; }\n    .detalleMensajero .nombre {\n      margin-left: 25px;\n      font-size: 30px; }\n    .detalleMensajero .zona {\n      font-size: 20px; }\n      .detalleMensajero .zona span {\n        font-size: 30px;\n        font-weight: bold; }\n    .detalleMensajero .clientes {\n      font-size: 20px; }\n      .detalleMensajero .clientes img {\n        height: 22px;\n        width: 24px; }\n      .detalleMensajero .clientes span {\n        font-size: 40px; }\n    .detalleMensajero .estrellas {\n      font-size: 20px; }\n    .detalleMensajero .eficacia {\n      font-size: 20px; }\n      .detalleMensajero .eficacia span {\n        font-size: 35px; }\n    .detalleMensajero .clientesNO {\n      font-size: 20px; }\n      .detalleMensajero .clientesNO img {\n        height: 22px;\n        width: 24px; }\n      .detalleMensajero .clientesNO span {\n        font-size: 35px; }\n    .detalleMensajero .tiempoRuta {\n      font-size: 20px; }\n      .detalleMensajero .tiempoRuta span {\n        font-size: 35px; }\n  .contenedorMapa {\n    width: 100%;\n    height: 90%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    font: 22px Roboto-Bold; }\n    .contenedorMapa .rutaDefinida {\n      line-height: 28px; }\n      .contenedorMapa .rutaDefinida .contenedor .ruta {\n        font-size: 22px; }\n        .contenedorMapa .rutaDefinida .contenedor .ruta .texto {\n          font-size: 22px; }\n          .contenedorMapa .rutaDefinida .contenedor .ruta .texto span {\n            font-size: 18px;\n            font-weight: normal; }\n        .contenedorMapa .rutaDefinida .contenedor .ruta .bolitaColor {\n          height: 22px;\n          width: 22px; }\n      .contenedorMapa .rutaDefinida .contenedor .detalle {\n        font: 18px Roboto-Light; }\n        .contenedorMapa .rutaDefinida .contenedor .detalle span {\n          font: 20px Roboto-Bold; }\n        .contenedorMapa .rutaDefinida .contenedor .detalle img {\n          height: 23px;\n          width: 23px; }\n      .contenedorMapa .rutaDefinida .contenedor .contenedorDetalle {\n        height: 80%; }\n        .contenedorMapa .rutaDefinida .contenedor .contenedorDetalle .detalles .uno {\n          font-size: 20px;\n          width: 12%; }\n        .contenedorMapa .rutaDefinida .contenedor .contenedorDetalle .detalles .dos .nombreCliente {\n          font: 20px Roboto-Bold; }\n        .contenedorMapa .rutaDefinida .contenedor .contenedorDetalle .detalles .dos .zona img {\n          height: 23px;\n          width: 18px; }\n        .contenedorMapa .rutaDefinida .contenedor .contenedorDetalle .detalles .dos .tiempo {\n          font: 20px Roboto-Regular; }\n          .contenedorMapa .rutaDefinida .contenedor .contenedorDetalle .detalles .dos .tiempo img {\n            height: 23px;\n            width: 23px; }\n          .contenedorMapa .rutaDefinida .contenedor .contenedorDetalle .detalles .dos .tiempo span {\n            color: #008894; }\n        .contenedorMapa .rutaDefinida .contenedor .contenedorDetalle .detalles .dos .eventos {\n          font: 20px Roboto-Light; }\n        .contenedorMapa .rutaDefinida .contenedor .contenedorDetalle .detalles .dos .monto {\n          font: 200px Roboto-Light;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          width: 100%; }\n          .contenedorMapa .rutaDefinida .contenedor .contenedorDetalle .detalles .dos .monto div {\n            font: 20px Roboto-Light;\n            width: 85%; }\n      .contenedorMapa .rutaDefinida .totales {\n        text-align: center;\n        margin-top: 10px;\n        width: 100%;\n        height: 5%; }\n    .contenedorMapa .rutaTomada {\n      line-height: 28px; }\n      .contenedorMapa .rutaTomada .contenedor .ruta {\n        font-size: 22px; }\n        .contenedorMapa .rutaTomada .contenedor .ruta .texto {\n          font-size: 22px;\n          width: 85%; }\n          .contenedorMapa .rutaTomada .contenedor .ruta .texto span {\n            font-size: 18px;\n            font-weight: normal; }\n        .contenedorMapa .rutaTomada .contenedor .ruta .bolitaColor {\n          height: 22px;\n          width: 22px; }\n        .contenedorMapa .rutaTomada .contenedor .ruta .imagens img {\n          height: 45px;\n          width: 40px; }\n      .contenedorMapa .rutaTomada .contenedor .detalle {\n        font: 18px Roboto-Light; }\n        .contenedorMapa .rutaTomada .contenedor .detalle img {\n          height: 23px;\n          width: 23px; }\n        .contenedorMapa .rutaTomada .contenedor .detalle span {\n          font: 20px Roboto-Bold; }\n      .contenedorMapa .rutaTomada .contenedor .contenedorDetalle {\n        height: 80%; }\n        .contenedorMapa .rutaTomada .contenedor .contenedorDetalle .detalles .uno {\n          font-size: 20px;\n          width: 12%; }\n        .contenedorMapa .rutaTomada .contenedor .contenedorDetalle .detalles .dos .zona img {\n          height: 23px;\n          width: 18px; }\n        .contenedorMapa .rutaTomada .contenedor .contenedorDetalle .detalles .dos .nombreCliente {\n          font: 20px Roboto-Bold; }\n        .contenedorMapa .rutaTomada .contenedor .contenedorDetalle .detalles .dos .tiempo {\n          font: 20px Roboto-Regular; }\n          .contenedorMapa .rutaTomada .contenedor .contenedorDetalle .detalles .dos .tiempo img {\n            height: 23px;\n            width: 23px; }\n          .contenedorMapa .rutaTomada .contenedor .contenedorDetalle .detalles .dos .tiempo span {\n            color: #008894; }\n        .contenedorMapa .rutaTomada .contenedor .contenedorDetalle .detalles .dos .eventos {\n          font: 20px Roboto-Light; }\n        .contenedorMapa .rutaTomada .contenedor .contenedorDetalle .detalles .dos .monto {\n          font: 200px Roboto-Light;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          width: 100%; }\n          .contenedorMapa .rutaTomada .contenedor .contenedorDetalle .detalles .dos .monto div {\n            font: 20px Roboto-Light;\n            width: 85%; }\n      .contenedorMapa .rutaTomada .totales {\n        text-align: center;\n        margin-top: 10px;\n        width: 100%;\n        height: 5%; }\n    .contenedorMapa .botonHamburgesa {\n      width: 75px;\n      height: 40px;\n      position: absolute;\n      right: 20px;\n      background: white;\n      z-index: 3;\n      margin-top: 10px; }\n      .contenedorMapa .botonHamburgesa img {\n        width: 50px;\n        height: 50px;\n        margin-left: 15px;\n        margin-top: -5px; }\n    .contenedorMapa .checkRutas {\n      width: 240px;\n      height: 150px;\n      margin-top: 10px;\n      position: absolute;\n      right: 90px;\n      background: #FFFF;\n      z-index: 3;\n      font-size: 18px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .contenedorMapa .checkRutas .texto {\n        width: 100%;\n        height: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; }\n        .contenedorMapa .checkRutas .texto div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          height: 35px; }\n          .contenedorMapa .checkRutas .texto div .info {\n            width: 90%;\n            margin-top: 10px; }\n          .contenedorMapa .checkRutas .texto div .cheks {\n            margin-top: 7px;\n            margin-right: 8px; }\n        .contenedorMapa .checkRutas .texto .bolitaColor {\n          margin-top: 5px; }\n    .contenedorMapa .justificacion {\n      width: 381px;\n      height: 260px;\n      position: absolute;\n      left: 58%;\n      background: white;\n      z-index: 9; }\n      .contenedorMapa .justificacion .titulo {\n        margin-top: 14px;\n        margin-left: 24px;\n        margin-right: 23px;\n        font-size: 16px; }\n      .contenedorMapa .justificacion .texto {\n        width: 85%;\n        margin-left: 30px;\n        margin-top: 15px;\n        height: 60%; }\n      .contenedorMapa .justificacion .btn {\n        margin-top: 10px; }\n        .contenedorMapa .justificacion .btn .mat-flat-button {\n          background: #008894;\n          color: white;\n          line-height: 27px;\n          min-width: 100px;\n          margin-top: 7px;\n          margin-left: 26px; }\n    .contenedorMapa .mapa {\n      height: 100%;\n      width: 60%; }\n      .contenedorMapa .mapa .boton1 {\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -ms-flex-line-pack: center;\n            align-content: center;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row; }\n        .contenedorMapa .mapa .boton1 div {\n          width: 65%; }\n        .contenedorMapa .mapa .boton1 .mat-flat-button {\n          line-height: 30px;\n          min-width: 180px;\n          margin-top: 22px;\n          font-size: 20px; }\n  .notaciones {\n    height: 40px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .notaciones .alineacion {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      margin-top: 5px; }\n      .notaciones .alineacion span {\n        font-size: 20px; }\n      .notaciones .alineacion label {\n        font-size: 18px; }\n      .notaciones .alineacion div {\n        width: 5px;\n        height: 1px; }\n      .notaciones .alineacion img {\n        margin-right: 5px;\n        width: 22px;\n        height: 24px; }\n  .cuadro {\n    font-size: 18px; } }\ntextarea {\n  border-color: #ECEEF0;\n  resize: none; }\n.grafica {\n  height: 100%;\n  width: 100%; }\n.grafica .contenidoInicio {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: calc(100% - 47px); }\n.grafica .contenidoInicio .seccionMensajeros {\n      width: 472px;\n      padding: 20px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box; }\n.grafica .contenidoInicio .seccionMensajeros > div:nth-of-type(1) {\n        font-family: Novecento;\n        font-weight: bold;\n        font-size: 21px;\n        color: #424242;\n        letter-spacing: -0.14px;\n        text-align: left;\n        margin-bottom: 20px; }\n.grafica .contenidoInicio .seccionMensajeros > .buscar {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        height: 60px;\n        width: 100%;\n        border-style: solid;\n        padding-bottom: 25px;\n        border-bottom: 1px solid #424242;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n.grafica .contenidoInicio .seccionMensajeros > .buscar div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          width: 403.1px;\n          border-radius: 102px 102px 102px 102px;\n          -moz-border-radius: 102px 102px 102px 102px;\n          -webkit-border-radius: 102px 102px 102px 102px;\n          border: 0.5px solid #bfc0c7;\n          height: 30px; }\n.grafica .contenidoInicio .seccionMensajeros > .buscar div div {\n            border: none;\n            border-radius: 0px 0px 0px 0px;\n            -moz-border-radius: 0px 0px 0px 0px;\n            -webkit-border-radius: 0px 0px 0px 0px;\n            border: 0px solid #000000;\n            width: 40px;\n            background: transparent;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            -ms-flex-line-pack: center;\n                align-content: center; }\n.grafica .contenidoInicio .seccionMensajeros > .buscar div .buscar-input {\n            background: transparent;\n            border-radius: 102px 102px 102px 102px;\n            -moz-border-radius: 102px 102px 102px 102px;\n            -webkit-border-radius: 102px 102px 102px 102px;\n            border: 0px solid #000000;\n            width: 380px;\n            padding-left: 5px; }\n.grafica .contenidoInicio .seccionMensajeros .listaMensajeros {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        height: calc(100vh - 350px);\n        overflow: scroll; }\n.grafica .contenidoInicio .seccionMensajeros .listaMensajeros .itemMensajero {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          min-height: 120px;\n          border-bottom: 1px solid #ECEEF0;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          padding: 10px;\n          cursor: pointer; }\n.grafica .contenidoInicio .seccionMensajeros .listaMensajeros .itemMensajero > div:nth-of-type(1) {\n            width: 50px;\n            font-family: Roboto-Bold;\n            font-size: 22px;\n            color: #424242;\n            letter-spacing: -0.14px;\n            text-align: left;\n            margin-top: 8px; }\n.grafica .contenidoInicio .seccionMensajeros .listaMensajeros .itemMensajero > div:nth-of-type(2) {\n            width: 100%; }\n.grafica .contenidoInicio .seccionMensajeros .listaMensajeros .itemMensajero > div:nth-of-type(2) > div:nth-of-type(1) {\n              font-family: Roboto-Bold;\n              font-size: 22px;\n              color: #008894;\n              letter-spacing: -0.16px;\n              text-align: left;\n              margin-top: 8px; }\n.grafica .contenidoInicio .seccionMensajeros .listaMensajeros .itemMensajero > div:nth-of-type(2) > div:nth-of-type(2) {\n              font-size: 19px;\n              color: #404040;\n              margin-top: 8px; }\n.grafica .contenidoInicio .seccionMensajeros .listaMensajeros .itemMensajero > div:nth-of-type(2) > div:nth-of-type(3) {\n              font-size: 18px;\n              color: #404040;\n              margin-top: 8px; }\n.grafica .contenidoInicio .seccionMensajeros .listaMensajeros .itemMensajero > div:nth-of-type(2) > div:nth-of-type(3) span {\n                color: #C1272D; }\n.grafica .contenidoInicio .seccionMensajeros .listaMensajeros .itemMensajero > div:nth-of-type(3) {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            -ms-flex-line-pack: center;\n                align-content: center;\n            width: 25px; }\n.grafica .contenidoInicio .graficasInicio {\n      width: 100%;\n      background: #ECEEF0; }\n.aux .asideNormalMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  min-width: 181px;\n  width: 321px;\n  height: 100%;\n  overflow-y: scroll; }\n.aux .asideNormalMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n.aux > .asideOcultarMenu {\n  -webkit-animation-name: ocultarMenu;\n          animation-name: ocultarMenu;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-transition: 1s ease-in-out;\n  transition: 1s ease-in-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 0px;\n  width: 0px; }\n.aux > .asideOcultarMenu > .articulo {\n    width: 0px; }\n.aux > .asideMostrarMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  -webkit-animation-name: mostrarMenu;\n          animation-name: mostrarMenu;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-y: scroll; }\n.aux > .asideMostrarMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n@-webkit-keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@-webkit-keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n@keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n/*Estilos nuevos Graficas*/\n.graficas {\n  width: 100%;\n  height: calc(100vh - 350px);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n.graficas .padreCliente_Prioridades {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    width: 50%;\n    margin: 30px 0px; }\n.graficas .padreCliente_Prioridades > .graficasGrande {\n      min-width: 45%;\n      height: 65%; }\n.graficas .padreCliente_Prioridades > .graficasGrande > div {\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -ms-flex-line-pack: center;\n            align-content: center; }\n.graficas .padreCliente_Prioridades > .GrafiPeque {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      height: 35%; }\n.graficas .padreCliente_Prioridades > .GrafiPeque .graficaPequeña {\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n        width: 100%;\n        max-height: 90%;\n        margin: 6% 0px; }\n.graficas .padreCliente_Prioridades > .GrafiPeque .graficaPequeña > div {\n          width: 100%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -ms-flex-line-pack: center;\n              align-content: center; }\n.graficas .padrePrioridades {\n    width: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin: 30px 0px; }\n.graficas .padrePrioridades > div {\n      width: 100%;\n      max-height: 25%;\n      margin: 6% 0px; }\n.graficas .padrePrioridades > div > div {\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -ms-flex-line-pack: center;\n            align-content: center; }\nb {\n  font-family: Roboto;\n  font-size: 22px; }\n"

/***/ }),

/***/ "./src/app/components/gestor-ruta/cerrar-ruta/cerrar-ruta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CerrarRutaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_despachos_gestorRuta_cerrar_ruta_service__ = __webpack_require__("./src/app/services/despachos/gestorRuta/cerrar-ruta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_despachos_gestorRuta_asignar_mensajero_service__ = __webpack_require__("./src/app/services/despachos/gestorRuta/asignar-mensajero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CerrarRutaComponent = /** @class */ (function () {
    function CerrarRutaComponent(comunService, _service, coreComponent, _asignarMensajeroService) {
        this.comunService = comunService;
        this._service = _service;
        this.coreComponent = coreComponent;
        this._asignarMensajeroService = _asignarMensajeroService;
        this.showJustify = false;
        this.nume = 0;
        this.rutaMensajeros = [];
        this.ruta2 = [];
        this.linea1 = []; //Se va pintar la linea
        this.marcadores1 = []; //Se va a pintar el marcador
        this.marcadoresMenos = [];
        this.valorLAT = 0.000100000;
        this.valorLNG = 0.000050000;
        this.opcion1 = false;
        this.opcion2 = false;
        this.opcion3 = false;
        this.opcion4 = false;
        this.nombreC = "";
        this.zonaC = "";
        this.direccionC = "";
        this.TEE_C = "";
        this.TET_C = "";
        this.horario_C = "";
        this.eventos_C = "";
        this.monto_C = "";
        this.nombreC2 = "";
        this.zonaC2 = "";
        this.direccionC2 = "";
        this.TEE_C2 = "";
        this.TET_C2 = "";
        this.horario_C2 = "";
        this.eventos_C2 = "";
        this.monto_C2 = "";
        this.totales1 = 0;
        this.totales2 = 0;
        this.checksRutas = false;
        this.show_grafica = true;
        this.show_mapa = false;
        this.r1 = [];
        this.r2 = [];
        this.r1Prioridades = [];
        this.r2Prioridades = [];
        this.rutas = [];
        this.classAsideMenu = "asideNormalMenu";
        this.datosMensajero = [];
        /***Variables graficas***/
        this.filtroMensajero = [];
        this.nuevoMensajero = [];
        this.datosPrioridades = [];
        this.filtroPrioridades = [];
        this.nuevoPrioridades = [];
        this.datosPrioridd1 = [];
        this.filtroPrioridad1 = [];
        this.nuevoPrioridad1 = [];
        this.datosClientes = [];
        this.filtroClientes = [];
        this.nuevoClientes = [];
        this.datosPrioridad2 = [];
        this.filtroPrioridad2 = [];
        this.nuevoPrioridad2 = [];
        this.datosPrioridad3 = [];
        this.filtroPrioridad3 = [];
        this.nuevoPrioridad3 = [];
        this.Eficacion = false;
        /*****Datos de la segunda vista*****/
        this._proquifa = [19.2856554, -99.1595433];
        this.totEstrellas = 0;
        this.lstZonas = [];
        this.lstClientes = [];
        this.rutaAux = [];
        this.rutaAux2 = [];
        this.linea = [];
        this.linea2 = [];
        this.marcadores = [];
        this.marcadores2 = [];
        this.positions = [];
        this.positions2 = [];
        this.path = [];
        this.path2 = [];
        this.mostrarRutas = false;
        this.show = false;
        this.montoC = "";
        this.idCliente = 0;
        this.refresh_mapa = false;
        this.noEntregados = [];
        this.arrayTiempos = [];
        this.horaFin = "00";
        this.minFin = "00";
        this.minTTT = 0;
        this.minTTTString = "";
        this._color = [
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
        this._pin = [
            "assets/Images/Images/pines/pin_proquifa.png",
            "assets/Images/Images/pines2/pin_azul.png",
        ];
        this._pin2 = [
            "assets/Images/Images/pines/pin_proquifa.png",
            "assets/Images/Images/pines/pin_amarillo.png",
        ];
        this.totCerrar = 0;
        this.totAsignar = 0;
    }
    CerrarRutaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'cerrar-ruta') {
                _this.activeMenu = false;
                _this.inicarMenu();
                _this.obtenerDatos();
            }
        });
        this.inicarMenu();
        //Pintan las zona!
        this.CUERNAVACA = [{ lng: -99.3106228345, lat: 19.0272235546 }, { lng: -99.2913043106, lat: 19.0291659473 }, { lng: -99.26056643539999, lat: 19.0051356852 }, { lng: -99.24867436280002, lat: 19.0044678533 }, { lng: -99.2495067486, lat: 19.0080888198 }, { lng: -99.21841038140001, lat: 19.0070788999 }, { lng: -99.22926113270002, lat: 18.9842738788 }, { lng: -99.2181210025, lat: 18.9790104299 }, { lng: -99.2118445129, lat: 18.982822821 }, { lng: -99.19980578649999, lat: 19.000218513 }, { lng: -99.19061658990002, lat: 19.0043388575 }, { lng: -99.1868642946, lat: 19.0001335186 }, { lng: -99.18015917410001, lat: 18.9764534121 }, { lng: -99.1836908289, lat: 18.9383780007 }, { lng: -99.1818396308, lat: 18.9162843414 }, { lng: -99.1935931762, lat: 18.9252259592 }, { lng: -99.19549103050001, lat: 18.91337538300001 }, { lng: -99.18700318179999, lat: 18.9048840822 }, { lng: -99.19062139179999, lat: 18.9010783329 }, { lng: -99.198734784, lat: 18.9069240406 }, { lng: -99.20174419000001, lat: 18.9049616204 }, { lng: -99.20465824439999, lat: 18.9090941062 }, { lng: -99.20682733970001, lat: 18.9063279784 }, { lng: -99.213001112, lat: 18.9093017778 }, { lng: -99.2085030253, lat: 18.9016073491 }, { lng: -99.2148781933, lat: 18.8922714305 }, { lng: -99.21486049910003, lat: 18.8846820926 }, { lng: -99.22223354090001, lat: 18.8847763713 }, { lng: -99.22377866980001, lat: 18.8775259505 }, { lng: -99.2289749574, lat: 18.8784316118 }, { lng: -99.23665313639999, lat: 18.8998030571 }, { lng: -99.25658416429999, lat: 18.8949147847 }, { lng: -99.26011458480002, lat: 18.9035323551 }, { lng: -99.2732500227, lat: 18.9048943188 }, { lng: -99.28180704010002, lat: 18.9164121824 }, { lng: -99.2894473658, lat: 18.9213839879 }, { lng: -99.28598093960001, lat: 18.9050634639 }, { lng: -99.2979477401, lat: 18.9053719505 }, { lng: -99.2935537362, lat: 18.894572581 }, { lng: -99.2853628347, lat: 18.9006950965 }, { lng: -99.28302118800002, lat: 18.887703689 }, { lng: -99.2896561764, lat: 18.8846924716 }, { lng: -99.27215733670001, lat: 18.8567959071 }, { lng: -99.27165242149999, lat: 18.8477103846 }, { lng: -99.29303169930002, lat: 18.8466097754 }, { lng: -99.3039111228, lat: 18.8511762326 }, { lng: -99.3267068591, lat: 18.8716934268 }, { lng: -99.3360790668, lat: 18.8908698329 }, { lng: -99.340424867, lat: 18.9319035943 }, { lng: -99.3409175841, lat: 18.9359616628 }, { lng: -99.3272553243, lat: 18.9394860015 }, { lng: -99.3206841889, lat: 18.9464591319 }, { lng: -99.31698375330002, lat: 18.9438685426 }, { lng: -99.31080370479999, lat: 18.9570969294 }, { lng: -99.31085543960002, lat: 18.9953612819 }, { lng: -99.3086234978, lat: 18.9974825487 }, { lng: -99.31947062099999, lat: 19.0150943189 }, { lng: -99.31741292530001, lat: 19.0238984152 }, { lng: -99.3106228345, lat: 19.0272235546 }];
        this.TOLUCA = [{ lng: -99.70611087419999, lat: 19.4209802321 }, { lng: -99.6935192265, lat: 19.4284354777 }, { lng: -99.69311898800001, lat: 19.4414406768 }, { lng: -99.6811235566, lat: 19.4400395073 }, { lng: -99.67922255430001, lat: 19.4462352785 }, { lng: -99.6717818695, lat: 19.4489157792 }, { lng: -99.6751198394, lat: 19.4537888381 }, { lng: -99.6714763887, lat: 19.4635315791 }, { lng: -99.6662460175, lat: 19.4648542673 }, { lng: -99.6584047332, lat: 19.4752508386 }, { lng: -99.65608531220003, lat: 19.4711724999 }, { lng: -99.64786959200002, lat: 19.4760313165 }, { lng: -99.6426290743, lat: 19.4606702276 }, { lng: -99.65338775070002, lat: 19.4545774463 }, { lng: -99.6552880603, lat: 19.4484974798 }, { lng: -99.6391719969, lat: 19.4366852079 }, { lng: -99.6345044678, lat: 19.4225863932 }, { lng: -99.6391613679, lat: 19.4134361901 }, { lng: -99.64314880110001, lat: 19.4143068653 }, { lng: -99.64343917920002, lat: 19.4224257342 }, { lng: -99.6496098219, lat: 19.4207830551 }, { lng: -99.6490506066, lat: 19.4116086751 }, { lng: -99.65861501489999, lat: 19.410328421 }, { lng: -99.65672774610003, lat: 19.4067373709 }, { lng: -99.635019719, lat: 19.405445723 }, { lng: -99.6398184549, lat: 19.4007843721 }, { lng: -99.6386377714, lat: 19.3983506176 }, { lng: -99.62411343050002, lat: 19.3954170393 }, { lng: -99.61752118370001, lat: 19.3982846905 }, { lng: -99.59241478289999, lat: 19.389904933 }, { lng: -99.5939521574, lat: 19.386108928 }, { lng: -99.590330936, lat: 19.3851136117 }, { lng: -99.58827710510001, lat: 19.3878590904 }, { lng: -99.58413622550002, lat: 19.3854596086 }, { lng: -99.5868011088, lat: 19.3810969722 }, { lng: -99.5676844254, lat: 19.3696403215 }, { lng: -99.55322797210003, lat: 19.3802849642 }, { lng: -99.54735307490002, lat: 19.3750333435 }, { lng: -99.54558173780001, lat: 19.3715561588 }, { lng: -99.53974262680002, lat: 19.3728667953 }, { lng: -99.51957548110001, lat: 19.322073281 }, { lng: -99.544581416, lat: 19.3201969581 }, { lng: -99.54950825250002, lat: 19.321200747 }, { lng: -99.55018378090001, lat: 19.316512484 }, { lng: -99.5663258333, lat: 19.3089500886 }, { lng: -99.5635485552, lat: 19.2895726081 }, { lng: -99.6036567486, lat: 19.2914394561 }, { lng: -99.60368140530001, lat: 19.280732436 }, { lng: -99.62915527840001, lat: 19.2794252791 }, { lng: -99.63490717080001, lat: 19.2756926662 }, { lng: -99.6353501111, lat: 19.2693672049 }, { lng: -99.6431020826, lat: 19.2702645237 }, { lng: -99.6418386557, lat: 19.2643771 }, { lng: -99.6320020174, lat: 19.2571241047 }, { lng: -99.62863309220001, lat: 19.2455694845 }, { lng: -99.63524669650001, lat: 19.240468479 }, { lng: -99.6316547121, lat: 19.2374312111 }, { lng: -99.64125930180001, lat: 19.2347824722 }, { lng: -99.6317713931, lat: 19.228452594 }, { lng: -99.6394034197, lat: 19.2189882198 }, { lng: -99.65259980730001, lat: 19.2204089046 }, { lng: -99.65845317740001, lat: 19.2172549507 }, { lng: -99.6569508716, lat: 19.2119420138 }, { lng: -99.65936526359999, lat: 19.2124299926 }, { lng: -99.66579696300001, lat: 19.2027172328 }, { lng: -99.6669961528, lat: 19.1944442554 }, { lng: -99.6743546921, lat: 19.196371486 }, { lng: -99.6836896934, lat: 19.1772514658 }, { lng: -99.71733489740002, lat: 19.1420635678 }, { lng: -99.73068564550003, lat: 19.1204561431 }, { lng: -99.731742614, lat: 19.1043507513 }, { lng: -99.73566632230001, lat: 19.1004792166 }, { lng: -99.7437493313, lat: 19.0928571869 }, { lng: -99.74529553630001, lat: 19.0851606691 }, { lng: -99.7339455214, lat: 19.0736348573 }, { lng: -99.7637316962, lat: 19.0730498079 }, { lng: -99.76519303569999, lat: 19.0921772095 }, { lng: -99.7780588456, lat: 19.0998043684 }, { lng: -99.7800765969, lat: 19.1129512329 }, { lng: -99.76525462810001, lat: 19.1264882808 }, { lng: -99.76919351540002, lat: 19.141038912 }, { lng: -99.7621435783, lat: 19.1530476166 }, { lng: -99.76396502119999, lat: 19.1623937318 }, { lng: -99.73968856690001, lat: 19.214045272 }, { lng: -99.7272224411, lat: 19.2128673387 }, { lng: -99.7242852312, lat: 19.2157118607 }, { lng: -99.7222233055, lat: 19.2250123707 }, { lng: -99.7119482276, lat: 19.2422797666 }, { lng: -99.7129088505, lat: 19.2521944983 }, { lng: -99.70686573720001, lat: 19.260413566 }, { lng: -99.71615148560001, lat: 19.2643185181 }, { lng: -99.71216685749999, lat: 19.272677529 }, { lng: -99.70038711060003, lat: 19.27009399190001 }, { lng: -99.6973325739, lat: 19.2855172933 }, { lng: -99.70350762830002, lat: 19.2866255624 }, { lng: -99.70224176590001, lat: 19.2909836406 }, { lng: -99.69302435189999, lat: 19.2908782316 }, { lng: -99.69193443170002, lat: 19.300076068 }, { lng: -99.6982188277, lat: 19.3015305968 }, { lng: -99.69773028690001, lat: 19.3113108846 }, { lng: -99.70683270350001, lat: 19.3109543264 }, { lng: -99.70977125269999, lat: 19.3184707766 }, { lng: -99.71525782670001, lat: 19.3185985125 }, { lng: -99.71093086400001, lat: 19.3313596999 }, { lng: -99.7197878616, lat: 19.3337854915 }, { lng: -99.7240582681, lat: 19.3393573719 }, { lng: -99.7171959901, lat: 19.3524368417 }, { lng: -99.7261394416, lat: 19.3572245367 }, { lng: -99.7256029867, lat: 19.3613629204 }, { lng: -99.73090539510001, lat: 19.3640703299 }, { lng: -99.72515624899999, lat: 19.3681513899 }, { lng: -99.73048787470002, lat: 19.3777677647 }, { lng: -99.728910941, lat: 19.3876505368 }, { lng: -99.73229813259999, lat: 19.4080667365 }, { lng: -99.71988118300001, lat: 19.4109177351 }, { lng: -99.71873844050001, lat: 19.4250672425 }, { lng: -99.70611087419999, lat: 19.4209802321 }];
        this.CDMX = [{ lng: -99.21310300240002, lat: 19.5043531549 }, { lng: -99.21106002170001, lat: 19.5121997572 }, { lng: -99.206021037, lat: 19.5159939395 }, { lng: -99.1792625457, lat: 19.5071568627 }, { lng: -99.17488913749999, lat: 19.5092377666 }, { lng: -99.158260035, lat: 19.5039384159 }, { lng: -99.16401954680001, lat: 19.5189413674 }, { lng: -99.1762142155, lat: 19.5247177796 }, { lng: -99.17222159729998, lat: 19.5282379634 }, { lng: -99.1814707967, lat: 19.5336329672 }, { lng: -99.1601638283, lat: 19.5278392366 }, { lng: -99.15674843780001, lat: 19.533466061 }, { lng: -99.15910904250001, lat: 19.535821652 }, { lng: -99.15211478480001, lat: 19.5457034338 }, { lng: -99.16148910550001, lat: 19.5501570391 }, { lng: -99.15941121180001, lat: 19.5590497656 }, { lng: -99.1504816831, lat: 19.563064418 }, { lng: -99.1473549608, lat: 19.5680870141 }, { lng: -99.13800863909999, lat: 19.5828424753 }, { lng: -99.1236056613, lat: 19.5932278843 }, { lng: -99.118444825, lat: 19.5907371194 }, { lng: -99.1197389993, lat: 19.5860565753 }, { lng: -99.1102998535, lat: 19.5651362924 }, { lng: -99.11029058050001, lat: 19.5651225186 }, { lng: -99.1310643579, lat: 19.5376713066 }, { lng: -99.12936376739999, lat: 19.5271148388 }, { lng: -99.1205188556, lat: 19.5148848664 }, { lng: -99.11483198610002, lat: 19.5120941063 }, { lng: -99.10733430059999, lat: 19.5108619099 }, { lng: -99.099842947, lat: 19.5143023831 }, { lng: -99.09188593899998, lat: 19.5108397957 }, { lng: -99.0650663091, lat: 19.4994274036 }, { lng: -99.0686609807, lat: 19.4900285202 }, { lng: -99.05162902019998, lat: 19.4500041903 }, { lng: -99.04830367629999, lat: 19.4424617618 }, { lng: -99.0557176234, lat: 19.4256077243 }, { lng: -99.05903322250001, lat: 19.4015549011 }, { lng: -99.0197404876, lat: 19.3837192738 }, { lng: -98.9913022281, lat: 19.3669496024 }, { lng: -98.99401027579999, lat: 19.3575589013 }, { lng: -98.9695724206, lat: 19.3329793475 }, { lng: -98.96429821940001, lat: 19.3284105918 }, { lng: -98.9581602903, lat: 19.3236295503 }, { lng: -98.96324688439999, lat: 19.3168227372 }, { lng: -98.9651118938, lat: 19.3067478203 }, { lng: -98.96785405919999, lat: 19.3057715643 }, { lng: -98.9761018497, lat: 19.2529526812 }, { lng: -98.9669417998, lat: 19.2507765873 }, { lng: -98.9695502097, lat: 19.2329122797 }, { lng: -98.94566588329998, lat: 19.2249400758 }, { lng: -98.9414716413, lat: 19.223500993 }, { lng: -98.94390996289998, lat: 19.2163976831 }, { lng: -98.95195866730001, lat: 19.2186684075 }, { lng: -98.9685472577, lat: 19.2118091662 }, { lng: -98.96777134440001, lat: 19.1985745181 }, { lng: -98.96616020179999, lat: 19.1860256888 }, { lng: -98.9569156805, lat: 19.177114495 }, { lng: -98.95349278019998, lat: 19.1693435252 }, { lng: -98.96801879089999, lat: 19.1653613283 }, { lng: -98.9627711079, lat: 19.1594571961 }, { lng: -98.95482840230001, lat: 19.1504090001 }, { lng: -98.9691953224, lat: 19.1457666808 }, { lng: -98.95884629649999, lat: 19.1218421485 }, { lng: -98.9623134531, lat: 19.0969846402 }, { lng: -98.9688346432, lat: 19.0843844092 }, { lng: -98.97333935790002, lat: 19.0815022765 }, { lng: -98.979988345, lat: 19.075577502 }, { lng: -98.9860309207, lat: 19.0803229277 }, { lng: -99.0295639476, lat: 19.0865145377 }, { lng: -99.04453829929999, lat: 19.0766835183 }, { lng: -99.0610576226, lat: 19.0497728775 }, { lng: -99.13440162950001, lat: 19.0877483025 }, { lng: -99.22690899610001, lat: 19.0969212633 }, { lng: -99.28050066600001, lat: 19.1320869049 }, { lng: -99.3038067886, lat: 19.1909599309 }, { lng: -99.30819375420001, lat: 19.2143076935 }, { lng: -99.31638151729999, lat: 19.2219418775 }, { lng: -99.31691535669999, lat: 19.2263507764 }, { lng: -99.317612537, lat: 19.2302143355 }, { lng: -99.3242005127, lat: 19.233366085 }, { lng: -99.3406104828, lat: 19.2412069406 }, { lng: -99.3430869475, lat: 19.2419140008 }, { lng: -99.3431676142, lat: 19.2515414665 }, { lng: -99.33898715820001, lat: 19.2648847921 }, { lng: -99.3405100781, lat: 19.2685294875 }, { lng: -99.349803569, lat: 19.275008012 }, { lng: -99.3654731569, lat: 19.2789979349 }, { lng: -99.35563230199999, lat: 19.2944212315 }, { lng: -99.3513988942, lat: 19.2951836101 }, { lng: -99.35754956060002, lat: 19.3078556805 }, { lng: -99.33345889650001, lat: 19.3327792758 }, { lng: -99.327898527, lat: 19.3462035917 }, { lng: -99.32970312850001, lat: 19.3535558944 }, { lng: -99.32441236450001, lat: 19.3589778619 }, { lng: -99.3197408052, lat: 19.3590837386 }, { lng: -99.32063376030001, lat: 19.3656724912 }, { lng: -99.304355007, lat: 19.3786196972 }, { lng: -99.30184374949999, lat: 19.3776235647 }, { lng: -99.29995472669998, lat: 19.3683138335 }, { lng: -99.28644713160001, lat: 19.376729077 }, { lng: -99.2838612739, lat: 19.3819147746 }, { lng: -99.27776428639999, lat: 19.3753663797 }, { lng: -99.27377670510002, lat: 19.390507911 }, { lng: -99.27045469419998, lat: 19.3908947672 }, { lng: -99.26643088570002, lat: 19.3991700681 }, { lng: -99.26158196260001, lat: 19.4004311428 }, { lng: -99.25858991410001, lat: 19.4053192267 }, { lng: -99.25758610690001, lat: 19.401063919 }, { lng: -99.2513899068, lat: 19.4085293807 }, { lng: -99.23943744729999, lat: 19.4129039212 }, { lng: -99.2238741181, lat: 19.4280725034 }, { lng: -99.2289555107, lat: 19.4390032365 }, { lng: -99.2192213795, lat: 19.4450165411 }, { lng: -99.2206945012, lat: 19.4538854469 }, { lng: -99.2156666952, lat: 19.4577183997 }, { lng: -99.21295757740001, lat: 19.468285328 }, { lng: -99.2079767948, lat: 19.472118959 }, { lng: -99.22204802330001, lat: 19.4757300108 }, { lng: -99.21310300240002, lat: 19.5043531549 }];
        this.PUEBLA = [{ lng: -98.09905261750002, lat: 19.1685265426 }, { lng: -98.06539002860002, lat: 19.18900874 }, { lng: -98.03471116830001, lat: 19.2214449313 }, { lng: -98.03466537049999, lat: 19.2306302171 }, { lng: -98.0187388471, lat: 19.213228221 }, { lng: -98.0292063059, lat: 19.2003137507 }, { lng: -98.0292908335, lat: 19.1964003776 }, { lng: -98.0344660378, lat: 19.1978858752 }, { lng: -98.0362804171, lat: 19.1495653852 }, { lng: -98.03450371150001, lat: 19.1476860135 }, { lng: -98.03021136970001, lat: 19.1553141397 }, { lng: -98.0266972669, lat: 19.1554738861 }, { lng: -98.02681559369999, lat: 19.1500638759 }, { lng: -98.0424044821, lat: 19.1253380874 }, { lng: -98.0520744599, lat: 19.120292112 }, { lng: -98.0496072966, lat: 19.1112625122 }, { lng: -98.0522516497, lat: 19.1068246755 }, { lng: -98.0677043331, lat: 19.0928561026 }, { lng: -98.07409164960001, lat: 19.072143297 }, { lng: -98.0735470125, lat: 19.0648521123 }, { lng: -98.0801862087, lat: 19.0549461695 }, { lng: -98.08488913940001, lat: 19.0541067792 }, { lng: -98.09696015550001, lat: 19.0602487801 }, { lng: -98.115615371, lat: 19.0577043872 }, { lng: -98.1284333716, lat: 19.045842821 }, { lng: -98.1296534036, lat: 19.0397388878 }, { lng: -98.12192753630001, lat: 19.0386652009 }, { lng: -98.118626062, lat: 19.0290432023 }, { lng: -98.12557569970001, lat: 19.0214658402 }, { lng: -98.13087072600001, lat: 19.0012277578 }, { lng: -98.1348657265, lat: 18.9994015784 }, { lng: -98.13644351400001, lat: 18.9944397326 }, { lng: -98.12973749480001, lat: 18.9792180087 }, { lng: -98.13550716060001, lat: 18.9660719729 }, { lng: -98.13448862680001, lat: 18.9518246088 }, { lng: -98.11836881350003, lat: 18.9399604276 }, { lng: -98.1088431156, lat: 18.9394335455 }, { lng: -98.11041390290001, lat: 18.9273208496 }, { lng: -98.0928249735, lat: 18.9167416827 }, { lng: -98.11386348409999, lat: 18.9144047044 }, { lng: -98.1245368207, lat: 18.9045454145 }, { lng: -98.1265480111, lat: 18.9162849228 }, { lng: -98.1572648173, lat: 18.9106276756 }, { lng: -98.15571206520001, lat: 18.9052154775 }, { lng: -98.1425708761, lat: 18.8972397283 }, { lng: -98.1344633662, lat: 18.9002069954 }, { lng: -98.12661510510002, lat: 18.8986864479 }, { lng: -98.1337783881, lat: 18.8873214945 }, { lng: -98.1461131961, lat: 18.8856349893 }, { lng: -98.1548477157, lat: 18.8738131107 }, { lng: -98.1578921615, lat: 18.8666896489 }, { lng: -98.1565709322, lat: 18.8625452063 }, { lng: -98.1477714853, lat: 18.8569994309 }, { lng: -98.14706245550001, lat: 18.853774208 }, { lng: -98.1518006359, lat: 18.8459669686 }, { lng: -98.15492657439999, lat: 18.8488524711 }, { lng: -98.15904413160001, lat: 18.8458740861 }, { lng: -98.16350566910002, lat: 18.847957421 }, { lng: -98.1687178257, lat: 18.842222816 }, { lng: -98.1777780323, lat: 18.8435134677 }, { lng: -98.1806833947, lat: 18.8413352383 }, { lng: -98.18887728839999, lat: 18.847454943 }, { lng: -98.20144249060002, lat: 18.8489838793 }, { lng: -98.20845451040002, lat: 18.8458976461 }, { lng: -98.2318854393, lat: 18.8491785801 }, { lng: -98.24370403730001, lat: 18.8554214776 }, { lng: -98.2570042856, lat: 18.8513106811 }, { lng: -98.2645988475, lat: 18.8558147103 }, { lng: -98.28103448850001, lat: 18.8564288456 }, { lng: -98.2887933918, lat: 18.8619345362 }, { lng: -98.28518401700002, lat: 18.8757894459 }, { lng: -98.2786084885, lat: 18.879286405 }, { lng: -98.27904846049999, lat: 18.8904682711 }, { lng: -98.26926169800001, lat: 18.8940673932 }, { lng: -98.2680928746, lat: 18.9027704905 }, { lng: -98.26942428800001, lat: 18.9091341107 }, { lng: -98.2773593687, lat: 18.9054079645 }, { lng: -98.28340935600001, lat: 18.9066139374 }, { lng: -98.28286311430001, lat: 18.9159100978 }, { lng: -98.2859342518, lat: 18.9195731654 }, { lng: -98.27819812129999, lat: 18.9261293319 }, { lng: -98.27069711060001, lat: 18.927145864 }, { lng: -98.27075352590002, lat: 18.9521072125 }, { lng: -98.26204833609999, lat: 18.9535808405 }, { lng: -98.2620433617, lat: 18.9569173888 }, { lng: -98.2730357614, lat: 18.9588977143 }, { lng: -98.27674701239999, lat: 18.9727115665 }, { lng: -98.2834995314, lat: 18.981509851 }, { lng: -98.27522995450002, lat: 18.9998919596 }, { lng: -98.2667707966, lat: 18.9939485463 }, { lng: -98.26452355479999, lat: 18.9883138398 }, { lng: -98.261304569, lat: 18.9886514842 }, { lng: -98.258549211, lat: 19.0010044632 }, { lng: -98.25218415930002, lat: 19.0080673035 }, { lng: -98.25767225830001, lat: 19.04477768570001 }, { lng: -98.2632650476, lat: 19.0500533697 }, { lng: -98.27577453060003, lat: 19.0518850517 }, { lng: -98.2732485307, lat: 19.0603504357 }, { lng: -98.2660456263, lat: 19.0620495101 }, { lng: -98.26050327570003, lat: 19.0699603903 }, { lng: -98.2605801198, lat: 19.0730909826 }, { lng: -98.2647993949, lat: 19.0745948134 }, { lng: -98.26175701550001, lat: 19.0823814947 }, { lng: -98.25516407290002, lat: 19.0875320013 }, { lng: -98.24083339400002, lat: 19.0894484531 }, { lng: -98.2405275771, lat: 19.0985372795 }, { lng: -98.2364117179, lat: 19.0984603752 }, { lng: -98.2338039517, lat: 19.1125718734 }, { lng: -98.22843435890002, lat: 19.1202983725 }, { lng: -98.23103941060001, lat: 19.1233423288 }, { lng: -98.22791136070001, lat: 19.1278890388 }, { lng: -98.22920218480002, lat: 19.1353978761 }, { lng: -98.2234848823, lat: 19.1415094047 }, { lng: -98.207978321, lat: 19.1367484265 }, { lng: -98.1899134981, lat: 19.1438214411 }, { lng: -98.1879426582, lat: 19.1392450918 }, { lng: -98.1968076238, lat: 19.1310793225 }, { lng: -98.1912572208, lat: 19.1256205212 }, { lng: -98.204629592, lat: 19.1188700495 }, { lng: -98.1853759677, lat: 19.1197318227 }, { lng: -98.165803158, lat: 19.1087879559 }, { lng: -98.1458115609, lat: 19.1268204953 }, { lng: -98.1422103399, lat: 19.11925004500001 }, { lng: -98.12075293310001, lat: 19.1339842721 }, { lng: -98.1035389444, lat: 19.1552821708 }, { lng: -98.09905261750002, lat: 19.1685265426 }];
        this._proquifa = [19.2856554, -99.1595433]; //
        setTimeout(function () {
            _this.rutaPanificada();
            _this.rutaTomada();
        }, 2000);
        this.obtenerDatos();
    };
    CerrarRutaComponent.prototype.inicarMenu = function () {
        var _this = this;
        this._asignarMensajeroService.obtenerTotales().subscribe(function (data) {
            _this.totCerrar = data.current.CerrarRuta;
            _this.totAsignar = data.current.AsignarRuta;
            _this.itemsMenu = [
                { rol: 'Gestor Entrega', active: true, menu: [
                        { nombre: 'Asignar Ruta', tipo: 'valor', valor: _this.totAsignar, url: 'gestorRuta', select: false },
                        { nombre: 'Cerrar Ruta', tipo: 'valor', valor: _this.totCerrar, url: 'cerrar-ruta', select: true }
                    ] }
            ];
            _this.activeMenu = true;
        }, function (error) {
        });
    };
    /***************OBTENER DATOS DE LA SEGUNDA VISTA**********/
    CerrarRutaComponent.prototype.compararRuta = function (idMensajero) {
        var _this = this;
        this.r2 = [];
        this.r1 = [];
        this.lstClientes = [];
        this.lstZonas = [];
        this.noEntregados = [];
        this.arrayTiempos = [];
        this.coreComponent.openModal(0);
        this._service.compararRuta(idMensajero).subscribe(function (data) {
            if (data != null && data.current.length > 0) {
                var lista = data.current;
                console.log('Lista de mensajero --->>', lista);
                _this.nombreMensajero = lista[0].mensajero;
                for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
                    var separador = lista_1[_i];
                    // if (separador.latitud != null) {
                    if (_this.lstZonas.indexOf(separador.zona) === -1) {
                        _this.lstZonas.push(separador.zona);
                    }
                    if (_this.lstClientes.indexOf(separador.cliente) === -1) {
                        _this.lstClientes.push(separador.cliente);
                        if (separador.entrega != 'Realizada') {
                            _this.noEntregados.push(separador.cliente);
                        }
                    }
                    _this.r1.push(separador);
                    _this.r2.push(separador);
                    // }
                }
                console.log("arrayTiempos", _this.arrayTiempos);
                _this.r1.sort(function (a, b) { return (a.orden > b.orden) ? 1 : ((b.orden > a.orden) ? -1 : 0); });
                _this.r2.sort(function (a, b) { return (a.fInicio > b.fInicio) ? 1 : ((b.fInicio > a.fInicio) ? -1 : 0); });
                console.log("Ru 1", _this.r1);
                console.log("Ru 2", _this.r2);
                for (var i = 0; i < _this.r2.length; i++) {
                    var dateAux_1 = void 0;
                    var dateAux2_1 = void 0;
                    var horasAux = { TTE: "", TTT: "" };
                    if (_this.r2[i].fInicio != null && _this.r2[i].fFin) {
                        dateAux_1 = new Date(_this.r2[i].fInicio);
                        dateAux2_1 = new Date(_this.r2[i].fFin);
                        horasAux.TTT = (((Object.assign(dateAux2_1) - Object.assign(dateAux_1)) / 1000) / 60).toFixed(0);
                        _this.minTTT = Object.assign(horasAux.TTT) + 0;
                        dateAux_1 = new Date(_this.r2[i].fFin);
                        dateAux2_1 = new Date(_this.r2[i].fCierre);
                        horasAux.TTE = (((Object.assign(dateAux2_1) - Object.assign(dateAux_1)) / 1000) / 60).toFixed(0);
                    }
                    _this.arrayTiempos.push(Object.assign(horasAux));
                }
                var auxHora = (_this.minTTT / 60).toFixed(0);
                var auxMin = _this.minTTT - (+auxHora * 60);
                _this.minTTTString = auxHora + " hrs " + auxMin + " min";
                var dateAux = new Date(_this.r2[0].fInicio);
                var dateAux2 = new Date(_this.r2[_this.r2.length - 1].fCierre);
                var horaAux = ((((Object.assign(dateAux2) - Object.assign(dateAux)) / 1000) / 60) / 60).toFixed(0);
                var minAux = (((((Object.assign(dateAux2) - Object.assign(dateAux)) / 1000)) / 60) - (+horaAux * 60)).toFixed(0);
                if (+horaAux < 10) {
                    _this.horaFin = "0" + horaAux;
                }
                else {
                    _this.horaFin = horaAux;
                }
                if (+minAux < 10) {
                    _this.minFin = "0" + minAux;
                }
                else {
                    _this.minFin = minAux;
                }
                _this.r1 = _this.separador(_this.r1);
                _this.r2 = _this.separador(_this.r2);
                console.log('Ruta 1 --', _this.r1);
                console.log('Ruta 2 --', _this.r2);
                _this.totales1 = _this.r1.length;
                _this.totales2 = _this.r2.length;
                _this.coreComponent.closeModal(0);
                _this.rutaProgramada = [];
                _this.rutaProgramada2 = [];
                _this.linea = [];
                _this.linea2 = [];
                _this.marcadores = [];
                _this.marcadores2 = [];
                _this.path = [];
                _this.path2 = [];
                _this.positions = [];
                _this.positions2 = [];
                _this.refresh_mapa = false;
                setTimeout(function () {
                    _this.refresh_mapa = true;
                }, 10);
                _this.rutaMensajero();
                _this.refresh_mapa = false;
                setTimeout(function () {
                    _this.refresh_mapa = true;
                }, 10);
            }
            else {
                _this.coreComponent.closeModal(0);
                _this.regresar();
            }
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    CerrarRutaComponent.prototype.separador = function (lista) {
        var pendientes = [];
        var listaOrdenada = [];
        if (lista != undefined && lista.length > 0) {
            for (var _i = 0, lista_2 = lista; _i < lista_2.length; _i++) {
                var item = lista_2[_i];
                var repetido = false;
                var items = {
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
                    p1: 0,
                    p2: 0,
                    p3: 0 // Se agrego
                };
                if (pendientes != undefined && pendientes.length > 0) {
                    for (var _a = 0, pendientes_1 = pendientes; _a < pendientes_1.length; _a++) {
                        var itemPA = pendientes_1[_a];
                        if (itemPA.cliente == item.cliente) {
                            repetido = true;
                            itemPA.monto = item.monto + itemPA.monto;
                            itemPA.folios.push(item.folio);
                            if (item.prioridad === 'P1') {
                                itemPA.p1++;
                            }
                            else if (item.prioridad === 'P2') {
                                itemPA.p2++;
                            }
                            else if (item.prioridad === 'P3') {
                                itemPA.p3++;
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
                            items.p1++;
                        }
                        else if (item.prioridad === 'P2') {
                            items.p2++;
                        }
                        else if (item.prioridad === 'P3') {
                            items.p3++;
                        }
                        items.folios.push(item['folio']);
                        pendientes.push(items);
                    }
                }
                else {
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
                        items.p1++;
                    }
                    else if (item.prioridad === 'P2') {
                        items.p2++;
                    }
                    else if (item.prioridad === 'P3') {
                        items.p3++;
                    }
                    items.folios.push(item['folio']);
                    pendientes.push(items);
                }
            }
        }
        listaOrdenada = listaOrdenada.concat(pendientes);
        return listaOrdenada;
    };
    CerrarRutaComponent.prototype.rutaPanificada = function () {
        this.linea1.push({ lat: this._proquifa[0], lng: this._proquifa[1] }); // Mete a proquifa en la posición 0
        for (var j = 0; j < this.r1.length; j++) {
            this.marcadores1.push([this.r1[j].latitud, this.r1[j].longitud]);
            this.linea1.push({ lat: this.marcadores1[j][0], lng: this.marcadores1[j][1] });
        }
        this.linea1.push({ lat: this._proquifa[0], lng: this._proquifa[1] }); // Mete a proquifa en la ultima posicioón
        // this.totales1 = this.r1.length;
    };
    CerrarRutaComponent.prototype.rutaTomada = function () {
        this.linea2.push({ lat: this._proquifa[0], lng: this._proquifa[1] }); // Mete a proquifa en la posición 0
        for (var j = 0; j < this.r2.length; j++) {
            this.marcadores2.push([this.r2[j].latitud, this.r2[j].longitud]);
            this.marcadoresMenos.push([(this.marcadores2[j][0] - this.valorLAT), (this.marcadores2[j][1]) - this.valorLNG]);
            this.linea2.push({ lat: (this.marcadores2[j][0] - this.valorLAT), lng: (this.marcadores2[j][1] - this.valorLNG) });
        }
        this.linea2.push({ lat: this._proquifa[0], lng: this._proquifa[1] }); // Mete a proquifa en la ultima posicioón
        // this.totales2 = this.r2.length;
    };
    CerrarRutaComponent.prototype.justificacion = function () {
        this.showJustify = true;
        this.nume = this.nume + 1;
        if (this.nume > 1) {
            this.showJustify = false;
            this.nume = 0;
        }
    };
    CerrarRutaComponent.prototype.info1 = function (_a, num) {
        var marker = _a.target;
        marker.nguiMapComponent.openInfoWindow('iw2', marker);
        for (var j = 0; j < this.r1.length; j++) {
            this.nombreC = "" + this.r1[num].cliente;
            this.zonaC = "" + this.r1[num].zona;
            this.direccionC = "" + this.r1[num].calle;
            this.TEE_C = "" + this.r1[num].TEEC;
            this.TET_C = "" + this.r1[num].TET;
            this.horario_C = this.r1[num].horarioDe + "" + this.r1[num].horarioA;
            this.eventos_C = "" + this.r1[num].evento;
            this.monto_C = "" + this.r1[num].monto;
        }
    };
    CerrarRutaComponent.prototype.info2 = function (_a, num) {
        var marker = _a.target;
        marker.nguiMapComponent.openInfoWindow('iw3', marker);
        for (var j = 0; j < this.r1.length; j++) {
            this.nombreC2 = "" + this.r1[num].cliente;
            this.zonaC2 = "" + this.r1[num].zona;
            this.direccionC2 = "" + this.r1[num].calle;
            this.TEE_C2 = "" + this.r1[num].TEEC;
            this.TET_C2 = "" + this.r1[num].TET;
            this.horario_C2 = this.r1[num].horarioDe + "" + this.r1[num].horarioA;
            this.eventos_C2 = "" + this.r1[num].evento;
            this.monto_C2 = "" + this.r1[num].monto;
        }
    };
    CerrarRutaComponent.prototype.checkRutas = function () {
        this.checksRutas = true;
        this.nume = this.nume + 1;
        if (this.nume > 1) {
            this.checksRutas = false;
            this.nume = 0;
        }
    };
    /***************METODO PARA SABER A QUE MENSAJERO QUIEREN CONSULTAR O BIEN DAN CLIC*************/
    CerrarRutaComponent.prototype.mostrarGraficas = function (index) {
        console.log('Soy index-- >', index);
        var idMensajero = this.rutaMensajeros[index].idMensajero;
        this.idResponsable = idMensajero;
        console.log('Soy id mensajero-- >', idMensajero);
        this.totalClientes = this.rutaMensajeros[index].totalClientes;
        this.totalNoAlcanzados = this.rutaMensajeros[index].totalNoEntregado;
        this.totZonas = this.rutaMensajeros[index].totalZonas;
        this.compararRuta(idMensajero);
        this.show_mapa = true;
        this.show_grafica = false;
    };
    CerrarRutaComponent.prototype.regresar = function () {
        this.show_mapa = false;
        this.show_grafica = true;
        // this.obtenerDatos();
        this.limpiarVaribles();
    };
    CerrarRutaComponent.prototype.eficacia = function (TE, TRE) {
        var eficacia = 100 - ((1 * 100 / TE) * (TRE - TE)); // La chidaa
        return eficacia;
    };
    CerrarRutaComponent.prototype.dist_time = function (coord1, coord2) {
        var dist_time;
        if (coord2[0] > 0 && coord1[0] > 0) {
            this._service.calculoDistancia(coord1, coord2).subscribe(function (data) {
                console.log(data.rows[0].elements[0]);
                dist_time = data.rows[0].elements[0].duration['text'];
            });
            setTimeout(function () {
                var km = dist_time.split(" ");
                console.log(dist_time);
            }, 2000);
        }
    };
    CerrarRutaComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = "asideOcultarMenu";
        }
        else {
            this.classAsideMenu = "asideMostrarMenu";
        }
    };
    /*********OBTENER LOS DATOS DE LAS GRÁFICAS Y LAS LISTA******/
    CerrarRutaComponent.prototype.obtenerDatos = function () {
        var _this = this;
        this.rutaMensajeros = [];
        this.datosMensajero = [];
        this.datosPrioridades = [];
        this.datosPrioridd1 = [];
        this.datosClientes = [];
        this.datosPrioridad2 = [];
        this.datosPrioridad3 = [];
        setTimeout(function () {
            _this.activarMensajero = false;
            _this.activarPrioridades = false;
            _this.activarPrioridad1 = false;
            _this.activarClientes = false;
            _this.activarPrioridad2 = false;
            _this.activarPrioridad3 = false;
        }, 5);
        this.coreComponent.openModal(0);
        this._service.datosGrafica().subscribe(function (data) {
            if (data.current.grafica['Mensajero']) {
                _this.rutaMensajeros = data.current.lista;
                _this.datosMensajero = data.current.grafica['Mensajero'];
                _this.datosPrioridades = data.current.grafica['Prioridad'];
                if (data.current.grafica['P1']) {
                    _this.datosPrioridd1 = data.current.grafica['P1'];
                }
                if (data.current.grafica['Clientes']) {
                    _this.datosClientes = data.current.grafica['Clientes'];
                }
                if (data.current.grafica['P2']) {
                    _this.datosPrioridad2 = data.current.grafica['P2'];
                }
                if (data.current.grafica['P3']) {
                    _this.datosPrioridad3 = data.current.grafica['P3'];
                }
                /*********SE LLAMA  A LOS METODOS QUE PINTARAN LAS GRÁFICAS*********/
                _this.limpiarVariablesGrafica();
                _this.calcularDatosParaGraficas();
                /******Cierra el modal de cargando*****/
                _this.coreComponent.closeModal(0);
            }
            else {
                _this.limpiarVariablesGrafica();
                /******Cierra el modal de cargando*****/
                _this.coreComponent.closeModal(0);
            }
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    CerrarRutaComponent.prototype.limpiarVaribles = function () {
        var _this = this;
        setTimeout(function () {
            _this.activarMensajero = false;
            _this.activarPrioridades = false;
            _this.activarPrioridad1 = false;
            _this.activarClientes = false;
            _this.activarPrioridad2 = false;
            _this.activarPrioridad3 = false;
        }, 5);
        this.filtroPrioridad2 = [];
        this.filtroPrioridad1 = [];
        this.filtroPrioridad3 = [];
        this.filtroClientes = [];
        this.filtroPrioridades = [];
        this.filtroMensajero = [];
        this.limpiarVariablesGrafica();
        this.calcularDatosParaGraficas();
    };
    CerrarRutaComponent.prototype.limpiarVariablesGrafica = function () {
        var _this = this;
        //////// Emìeza grafica MENSAJEROS //////
        if (this.datosMensajero.length > 0) {
            for (var _i = 0, _a = this.datosMensajero; _i < _a.length; _i++) {
                var valor = _a[_i];
                // this.arrayProducto.push(valor.piezas);
                this.filtroMensajero.push(valor.mensajero);
                this.tipoGraficaMensajeros = 'General';
            }
        }
        else {
            this.tipoGraficaMensajeros = 'Gris';
            // this.arrayProducto.push(1);
            this.filtroMensajero.push("");
        }
        var valoresM = [];
        var valoresMensajero = [];
        for (var _b = 0, _c = this.datosMensajero; _b < _c.length; _b++) {
            var nombre = _c[_b];
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
        }
        else {
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
            setTimeout(function () {
                _this.activarMensajero = true;
            }, 5);
        }
        //////// Emìeza grafica PRIORIDADES //////
        if (this.datosPrioridades.length > 0) {
            for (var _d = 0, _e = this.datosPrioridades; _d < _e.length; _d++) {
                var valor = _e[_d];
                // this.arrayProducto.push(valor.piezas);
                this.filtroPrioridades.push(valor.prioridad);
                this.tipoGraficaPrioridades = 'Prioridades';
            }
        }
        else {
            this.tipoGraficaPrioridades = 'Gris';
            // this.arrayProducto.push(1);
            this.filtroPrioridades.push("");
        }
        var valoresPrio = [];
        var valoresPrioridades = [];
        for (var _f = 0, _g = this.datosPrioridades; _f < _g.length; _f++) {
            var nombre = _g[_f];
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
        }
        else {
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
            setTimeout(function () {
                _this.activarPrioridades = true;
            }, 5);
        }
        //////// Emìeza grafica PRIORIDAD 1 //////
        if (this.datosPrioridd1.length > 0) {
            for (var _h = 0, _j = this.datosPrioridd1; _h < _j.length; _h++) {
                var valor = _j[_h];
                // this.arrayProducto.push(valor.piezas);
                this.filtroPrioridad1.push(valor.cliente);
                this.tipoGraficaPrioridad1 = 'PrioridadRoja';
            }
        }
        else {
            this.tipoGraficaPrioridad1 = 'Gris';
            // this.arrayProducto.push(1);
            this.filtroPrioridades.push("");
        }
        var valoresPrio1 = [];
        var valoresPrioridades1 = [];
        for (var _k = 0, _l = this.datosPrioridd1; _k < _l.length; _k++) {
            var nombre = _l[_k];
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
        }
        else {
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
            setTimeout(function () {
                _this.activarPrioridad1 = true;
            }, 5);
        }
        //////// Emìeza grafica CLIENTES //////
        if (this.datosClientes.length > 0) {
            for (var _m = 0, _o = this.datosClientes; _m < _o.length; _m++) {
                var valor = _o[_m];
                // this.arrayProducto.push(valor.piezas);
                this.filtroClientes.push(valor.cliente);
                this.tipoGraficaClientes = 'General';
            }
        }
        else {
            this.tipoGraficaPrioridad1 = 'Gris';
            // this.arrayProducto.push(1);
            this.filtroClientes.push("");
        }
        var valoresCli = [];
        var valoresClientes = [];
        for (var _p = 0, _q = this.datosClientes; _p < _q.length; _p++) {
            var nombre = _q[_p];
            valoresClientes.push([0, 0]);
            valoresCli.push(0);
        }
        if (valoresCli.length > 0 && this.datosClientes[0].totalMonto !== 0) {
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
        }
        else {
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
            setTimeout(function () {
                _this.activarClientes = true;
            }, 5);
        }
        //////// Emìeza grafica PRIORIDAD 2 //////
        if (this.datosPrioridad2.length > 0) {
            for (var _r = 0, _s = this.datosPrioridad2; _r < _s.length; _r++) {
                var valor = _s[_r];
                this.filtroPrioridad2.push(valor.cliente);
                this.tipoGraficaPrioridad2 = 'PrioridadNaranja';
            }
        }
        else {
            this.tipoGraficaPrioridad2 = 'Gris';
            this.filtroPrioridad2.push("");
        }
        var valoresPrio2 = [];
        var valoresPrioridades2 = [];
        for (var _t = 0, _u = this.datosPrioridad2; _t < _u.length; _t++) {
            var nombre = _u[_t];
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
        }
        else {
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
            setTimeout(function () {
                _this.activarPrioridad2 = true;
            }, 5);
        }
        //////// Emìeza grafica PRIORIDAD 3 //////
        if (this.datosPrioridad3.length > 0) {
            for (var _v = 0, _w = this.datosPrioridad3; _v < _w.length; _v++) {
                var valor = _w[_v];
                this.filtroPrioridad3.push(valor.cliente);
                this.tipoGraficaPrioridad3 = 'PrioridadVerde';
            }
        }
        else {
            this.tipoGraficaPrioridad3 = 'Gris';
            this.filtroPrioridad3.push("");
        }
        var valoresPrio3 = [];
        var valoresPrioridades3 = [];
        for (var _x = 0, _y = this.datosPrioridad3; _x < _y.length; _x++) {
            var nombre = _y[_x];
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
        }
        else {
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
            setTimeout(function () {
                _this.activarPrioridad3 = true;
            }, 5);
        }
    };
    CerrarRutaComponent.prototype.calcularDatosParaGraficas = function () {
        if (this.datosMensajero.length > 0 && this.datosMensajero[0].totalMonto !== 0) {
            for (var _i = 0, _a = this.datosMensajero; _i < _a.length; _i++) {
                var productos = _a[_i];
                this.llenarTotalesGraficas(this.dataMensajero, productos, 'MENSAJEROS', this.dataMensajeroAux);
            }
        }
        if (this.datosPrioridades.length > 0 && this.datosPrioridades[0].totalMonto !== 0) {
            for (var _b = 0, _c = this.datosPrioridades; _b < _c.length; _b++) {
                var prioridad = _c[_b];
                this.llenarTotalesGraficas(this.dataPrioridades, prioridad, 'PRIORIDADES', this.dataPrioridadesAux);
            }
        }
        if (this.datosPrioridd1.length > 0 && this.datosPrioridd1[0].totalMonto !== 0) {
            for (var _d = 0, _e = this.datosPrioridd1; _d < _e.length; _d++) {
                var prioridad1 = _e[_d];
                this.llenarTotalesGraficas(this.dataPrioridad1, prioridad1, 'PRIORIDAD1', this.dataPrioridad1Aux);
            }
        }
        if (this.datosClientes.length > 0 && this.datosClientes[0].totalMonto !== 0) {
            for (var _f = 0, _g = this.datosClientes; _f < _g.length; _f++) {
                var clientes = _g[_f];
                this.llenarTotalesGraficas(this.dataClientes, clientes, 'CLIENTES', this.dataClientesAux);
            }
        }
        if (this.datosPrioridad2.length > 0 && this.datosPrioridad2[0].totalMonto !== 0) {
            for (var _h = 0, _j = this.datosPrioridad2; _h < _j.length; _h++) {
                var prioridad2 = _j[_h];
                this.llenarTotalesGraficas(this.dataPrioridad2, prioridad2, 'PRIORIDAD2', this.dataPrioridad2Aux);
            }
        }
        if (this.datosPrioridad3.length > 0 && this.datosPrioridad3[0].totalMonto !== 0) {
            for (var _k = 0, _l = this.datosPrioridad3; _k < _l.length; _k++) {
                var prioridad3 = _l[_k];
                this.llenarTotalesGraficas(this.dataPrioridad3, prioridad3, 'PRIORIDAD3', this.dataPrioridad3Aux);
            }
        }
    };
    CerrarRutaComponent.prototype.llenarTotalesGraficas = function (total, elemento, graficaElegida, totalAux) {
        var _this = this;
        switch (graficaElegida) {
            case 'MENSAJEROS':
                var valuesExtrasHover = total.valuesExtrasHover;
                var valuesExtraAux = total.valuesExtras;
                var posicion1 = this.filtroMensajero.indexOf(elemento.mensajero);
                if (this.nuevoMensajero.indexOf(elemento.mensajero) === -1) {
                    this.nuevoMensajero.push(elemento.mensajero);
                }
                total.valuesExtrasHover[posicion1][0] += elemento.totalPiezas;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                /*Se agrego esto para convertir el valor en divisa*/
                totalAux.valuesExtras[1] += elemento.totalMonto;
                total.valuesExtras[1] = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[1]);
                /*Termino..*/
                total.valuesExtras[0] += elemento.totalPiezas; // Total de Partidas
                total.valores[posicion1] += elemento.totalMonto; // +(elemento.monto.toFixed(2)); //Monto total
                /*total.valuesExtrasHover[posicion2][1] += +(elemento.monto.toFixed(2));*/
                /**Se agrego esto para ponerle al monto tipo divisa*/
                valuesExtrasHover[posicion1][1] += +(elemento.totalMonto.toFixed(2));
                total.valuesExtrasHover[posicion1][1] = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicion1][1]);
                /*---------Termina------*/
                setTimeout(function () {
                    _this.activarMensajero = true;
                }, 5);
                break;
            case 'PRIORIDADES':
                valuesExtrasHover = total.valuesExtrasHover;
                valuesExtraAux = total.valuesExtras;
                var posicion2 = this.filtroPrioridades.indexOf(elemento.prioridad);
                if (this.nuevoPrioridades.indexOf(elemento.prioridad) === -1) {
                    this.nuevoPrioridades.push(elemento.prioridad);
                }
                total.valuesExtrasHover[posicion2][0] += elemento.totalPiezas;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                /*Se agrego esto para convertir el valor en divisa*/
                totalAux.valuesExtras[1] += elemento.totalMonto;
                total.valuesExtras[1] = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[1]);
                /*Termino..*/
                total.valuesExtras[0] += elemento.totalPiezas; // Total de Partidas
                total.valores[posicion2] += elemento.totalMonto; // +(elemento.monto.toFixed(2)); //Monto total
                /*total.valuesExtrasHover[posicion2][1] += +(elemento.monto.toFixed(2));*/
                /**Se agrego esto para ponerle al monto tipo divisa*/
                valuesExtrasHover[posicion2][1] += +(elemento.totalMonto.toFixed(2));
                total.valuesExtrasHover[posicion2][1] = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicion2][1]);
                /*---------Termina------*/
                setTimeout(function () {
                    _this.activarPrioridades = true;
                }, 5);
                break;
            case 'PRIORIDAD1':
                valuesExtrasHover = total.valuesExtrasHover;
                valuesExtraAux = total.valuesExtras;
                var posicion3 = this.filtroPrioridad1.indexOf(elemento.cliente);
                if (this.nuevoPrioridad1.indexOf(elemento.cliente) === -1) {
                    this.nuevoPrioridad1.push(elemento.cliente);
                }
                total.valuesExtrasHover[posicion3][0] += elemento.totalPiezas;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                /*Se agrego esto para convertir el valor en divisa*/
                totalAux.valuesExtras[1] += elemento.totalMonto;
                total.valuesExtras[1] = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[1]);
                /*Termino..*/
                total.valuesExtras[0] += elemento.totalPiezas; // Total de Partidas
                total.valores[posicion3] += elemento.totalMonto; // +(elemento.monto.toFixed(2)); //Monto total
                /*total.valuesExtrasHover[posicion2][1] += +(elemento.monto.toFixed(2));*/
                /**Se agrego esto para ponerle al monto tipo divisa*/
                valuesExtrasHover[posicion3][1] += +(elemento.totalMonto.toFixed(2));
                total.valuesExtrasHover[posicion3][1] = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicion3][1]);
                /*---------Termina------*/
                setTimeout(function () {
                    _this.activarPrioridad1 = true;
                }, 5);
                break;
            case 'CLIENTES':
                valuesExtrasHover = total.valuesExtrasHover;
                valuesExtraAux = total.valuesExtras;
                var posicion4 = this.filtroClientes.indexOf(elemento.cliente);
                if (this.nuevoClientes.indexOf(elemento.cliente) === -1) {
                    this.nuevoClientes.push(elemento.cliente);
                }
                total.valuesExtrasHover[posicion4][0] += elemento.totalPiezas;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                /*Se agrego esto para convertir el valor en divisa*/
                totalAux.valuesExtras[1] += elemento.totalMonto;
                total.valuesExtras[1] = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[1]);
                /*Termino..*/
                total.valuesExtras[0] += elemento.totalPiezas; // Total de Partidas
                total.valores[posicion4] += elemento.totalMonto; // +(elemento.monto.toFixed(2)); //Monto total
                /*total.valuesExtrasHover[posicion2][1] += +(elemento.monto.toFixed(2));*/
                /**Se agrego esto para ponerle al monto tipo divisa*/
                valuesExtrasHover[posicion4][1] += +(elemento.totalMonto.toFixed(2));
                total.valuesExtrasHover[posicion4][1] = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicion4][1]);
                /*---------Termina------*/
                setTimeout(function () {
                    _this.activarClientes = true;
                }, 5);
                break;
            case 'PRIORIDAD2':
                valuesExtrasHover = total.valuesExtrasHover;
                valuesExtraAux = total.valuesExtras;
                var posicion5 = this.filtroPrioridad2.indexOf(elemento.cliente);
                if (this.nuevoPrioridad2.indexOf(elemento.cliente) === -1) {
                    this.nuevoPrioridad2.push(elemento.cliente);
                }
                total.valuesExtrasHover[posicion5][0] += elemento.totalPiezas;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                /*Se agrego esto para convertir el valor en divisa*/
                totalAux.valuesExtras[1] += elemento.totalMonto;
                total.valuesExtras[1] = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[1]);
                /*Termino..*/
                total.valuesExtras[0] += elemento.totalPiezas; // Total de Partidas
                total.valores[posicion5] += elemento.totalMonto; // +(elemento.monto.toFixed(2)); //Monto total
                /*total.valuesExtrasHover[posicion2][1] += +(elemento.monto.toFixed(2));*/
                /**Se agrego esto para ponerle al monto tipo divisa*/
                valuesExtrasHover[posicion5][1] += +(elemento.totalMonto.toFixed(2));
                total.valuesExtrasHover[posicion5][1] = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicion5][1]);
                /*---------Termina------*/
                setTimeout(function () {
                    _this.activarPrioridad2 = true;
                }, 5);
                break;
            case 'PRIORIDAD3':
                valuesExtrasHover = total.valuesExtrasHover;
                valuesExtraAux = total.valuesExtras;
                var posicion6 = this.filtroPrioridad3.indexOf(elemento.cliente);
                if (this.nuevoPrioridad3.indexOf(elemento.cliente) === -1) {
                    this.nuevoPrioridad3.push(elemento.cliente);
                }
                total.valuesExtrasHover[posicion6][0] += elemento.totalPiezas;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                /*Se agrego esto para convertir el valor en divisa*/
                totalAux.valuesExtras[1] += elemento.totalMonto;
                total.valuesExtras[1] = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[1]);
                /*Termino..*/
                total.valuesExtras[0] += elemento.totalPiezas; // Total de Partidas
                total.valores[posicion6] += elemento.totalMonto; // +(elemento.monto.toFixed(2)); //Monto total
                /**Se agrego esto para ponerle al monto tipo divisa*/
                valuesExtrasHover[posicion6][1] += +(elemento.totalMonto.toFixed(2));
                total.valuesExtrasHover[posicion6][1] = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicion6][1]);
                /*---------Termina------*/
                setTimeout(function () {
                    _this.activarPrioridad3 = true;
                }, 5);
                break;
            default:
                break;
        }
    };
    CerrarRutaComponent.prototype.recibirTotEstrellas = function (tot) {
        this.totEstrellas = tot;
        if (this.totEstrellas > 0) {
            this.activarBtnFin = true;
        }
    };
    CerrarRutaComponent.prototype.finalizarRuta = function () {
        var _this = this;
        console.log('Soy textAre-->', this.justificacionV);
        var obj;
        obj = {
            folio: this.r1[0].folio,
            justificacion: this.justificacionV,
            calificacion: this.totEstrellas,
            idResponsable: this.idResponsable
        };
        console.log('Soy textAre-->', obj);
        this._service.calificarRuta(obj).subscribe(function (data) {
            if (data.current) {
                _this.show_grafica = true;
                _this.show_mapa = false;
                _this.obtenerDatos();
            }
        }, function (error) {
        });
    };
    CerrarRutaComponent.prototype.rutaMensajero = function () {
        var _this = this;
        for (var _i = 0, _a = this.r1; _i < _a.length; _i++) {
            var ruta = _a[_i];
            this.rutaProgramada.push([ruta.latitud, ruta.longitud]);
        }
        for (var _b = 0, _c = this.r2; _b < _c.length; _b++) {
            var ruta = _c[_b];
            if (ruta.latitud != null && ruta.latitud != 0 && ruta.longitud != null && ruta.longitud != 0) {
                this.rutaProgramada2.push([ruta.latitud + 0.001, ruta.longitud]);
            }
            else {
                this.rutaProgramada2.push([ruta.latitud, ruta.longitud]);
            }
        }
        this.rutaAux = this.rutaProgramada.slice(); //Copy
        this.rutaAux2 = this.rutaProgramada2.slice(); //Copy
        console.log("rutaAux", this.rutaAux);
        this.linea.push({ lat: this._proquifa[0], lng: this._proquifa[1] }); // Mete a proquifa en la posición 0
        this.linea2.push({ lat: this._proquifa[0], lng: this._proquifa[1] }); // Mete a proquifa en la posición 0
        for (var j = 0; j < this.rutaProgramada.length; j++) {
            this.marcadores.push(this.rutaProgramada[j]);
            this.linea.push({ lat: this.marcadores[j][0], lng: this.marcadores[j][1] });
        }
        for (var j = 0; j < this.rutaProgramada2.length; j++) {
            this.marcadores2.push(this.rutaProgramada2[j]);
            this.linea2.push({ lat: this.marcadores2[j][0], lng: this.marcadores2[j][1] });
        }
        this.linea.push({ lat: this._proquifa[0], lng: this._proquifa[1] }); // Mete a proquifa en la posición 0
        this.linea2.push({ lat: this._proquifa[0], lng: this._proquifa[1] }); // Mete a proquifa en la posición 0
        this.marcadores.forEach(function (ma, index) {
            if (ma[0] > 0) {
                _this.positions.push([ma, index]);
            }
        });
        this.marcadores2.forEach(function (ma, index) {
            if (ma[0] > 0) {
                _this.positions2.push([ma, index]);
            }
        });
        for (var _d = 0, _e = this.linea; _d < _e.length; _d++) {
            var li = _e[_d];
            if (li['lat'] > 0) {
                this.path.push(li);
            }
        }
        for (var _f = 0, _g = this.linea2; _f < _g.length; _f++) {
            var li = _g[_f];
            if (li['lat'] > 0) {
                this.path2.push(li);
            }
        }
    };
    CerrarRutaComponent.prototype.info = function (_a, num, marcador) {
        var marker = _a.target;
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
            }
            else {
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
    };
    CerrarRutaComponent.prototype.infoWindows = function (target, num) {
        this.show = false;
    };
    CerrarRutaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-cerrar-ruta',
            template: __webpack_require__("./src/app/components/gestor-ruta/cerrar-ruta/cerrar-ruta.component.html"),
            styles: [__webpack_require__("./src/app/components/gestor-ruta/cerrar-ruta/cerrar-ruta.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_1__services_despachos_gestorRuta_cerrar_ruta_service__["a" /* CerrarRutaService */], __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_2__services_despachos_gestorRuta_asignar_mensajero_service__["a" /* AsignarMensajeroService */]])
    ], CerrarRutaComponent);
    return CerrarRutaComponent;
}());



/***/ }),

/***/ "./src/app/components/gestor-ruta/cerrar-ruta/cerrar-ruta.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CerrarRutaModule", function() { return CerrarRutaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cerrar_ruta_component__ = __webpack_require__("./src/app/components/gestor-ruta/cerrar-ruta/cerrar-ruta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cerrar_ruta_routing_module__ = __webpack_require__("./src/app/components/gestor-ruta/cerrar-ruta/cerrar-ruta-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_calificacion_estrella_calificacion_estrella_module__ = __webpack_require__("./src/app/components/shared/calificacion-estrella/calificacion-estrella.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngui_map__ = __webpack_require__("./node_modules/@ngui/map/esm5/ngui-map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//La chida para el mapa
var CerrarRutaModule = /** @class */ (function () {
    function CerrarRutaModule() {
    }
    CerrarRutaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__cerrar_ruta_routing_module__["a" /* CerrarRutaRoutingMoudle */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_5__shared_calificacion_estrella_calificacion_estrella_module__["a" /* CalificacionEstrellaModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngui_map__["a" /* NguiMapModule */].forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyD_xQ31kAkk6Sjh3qmpx93q4ce9xJ80TSg' }) //Aqui y en el index.html
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cerrar_ruta_component__["a" /* CerrarRutaComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__cerrar_ruta_component__["a" /* CerrarRutaComponent */]
            ],
            providers: []
        })
    ], CerrarRutaModule);
    return CerrarRutaModule;
}());



/***/ }),

/***/ "./src/app/components/shared/calificacion-estrella/calificacion-estrella-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalificacionEstrellaRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calificacion_estrella_component__ = __webpack_require__("./src/app/components/shared/calificacion-estrella/calificacion-estrella.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CalificacionEstrellaRoutingModule = /** @class */ (function () {
    function CalificacionEstrellaRoutingModule() {
    }
    CalificacionEstrellaRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: "",
                        component: __WEBPACK_IMPORTED_MODULE_2__calificacion_estrella_component__["a" /* CalificacionEstrellaComponent */]
                    }
                ])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], CalificacionEstrellaRoutingModule);
    return CalificacionEstrellaRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/shared/calificacion-estrella/calificacion-estrella.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of lstEstrella;let i = index\">\n  <img src=\"./assets/Images/{{item}}.svg\" style=\"cursor: pointer;\" (click)=\"calificar(i)\"/>\n</div>"

/***/ }),

/***/ "./src/app/components/shared/calificacion-estrella/calificacion-estrella.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n:host > div {\n    margin: 5px 2px; }\n"

/***/ }),

/***/ "./src/app/components/shared/calificacion-estrella/calificacion-estrella.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalificacionEstrellaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalificacionEstrellaComponent = /** @class */ (function () {
    function CalificacionEstrellaComponent() {
        this.numEstrellas = 5;
        this.eventCambio = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.lstEstrella = new Array(this.numEstrellas).fill("estrella_gris");
    }
    CalificacionEstrellaComponent.prototype.ngOnInit = function () {
    };
    CalificacionEstrellaComponent.prototype.calificar = function ($i) {
        this.lstEstrella = new Array(this.numEstrellas).fill("estrella_gris");
        for (var i = 0; i < $i + 1; i++) {
            this.lstEstrella[i] = "estrella_amarilla";
        }
        this.eventCambio.emit($i + 1);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], CalificacionEstrellaComponent.prototype, "numEstrellas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CalificacionEstrellaComponent.prototype, "eventCambio", void 0);
    CalificacionEstrellaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "pn-calificacion-estrella",
            template: __webpack_require__("./src/app/components/shared/calificacion-estrella/calificacion-estrella.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/calificacion-estrella/calificacion-estrella.component.scss")]
        })
    ], CalificacionEstrellaComponent);
    return CalificacionEstrellaComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/calificacion-estrella/calificacion-estrella.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalificacionEstrellaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calificacion_estrella_routing_module__ = __webpack_require__("./src/app/components/shared/calificacion-estrella/calificacion-estrella-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calificacion_estrella_component__ = __webpack_require__("./src/app/components/shared/calificacion-estrella/calificacion-estrella.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CalificacionEstrellaModule = /** @class */ (function () {
    function CalificacionEstrellaModule() {
    }
    CalificacionEstrellaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__calificacion_estrella_routing_module__["a" /* CalificacionEstrellaRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__calificacion_estrella_component__["a" /* CalificacionEstrellaComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__calificacion_estrella_component__["a" /* CalificacionEstrellaComponent */]
            ]
        })
    ], CalificacionEstrellaModule);
    return CalificacionEstrellaModule;
}());



/***/ })

});
//# sourceMappingURL=cerrar-ruta.module.chunk.js.map