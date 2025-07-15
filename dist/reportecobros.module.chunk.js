webpackJsonp(["reportecobros.module"],{

/***/ "./src/app/components/gestion/reportes/reportecobros/reportecobros-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteCobrosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reportecobros_component__ = __webpack_require__("./src/app/components/gestion/reportes/reportecobros/reportecobros.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReporteCobrosRoutingModule = /** @class */ (function () {
    function ReporteCobrosRoutingModule() {
    }
    ReporteCobrosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__reportecobros_component__["a" /* ReportecobrosComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ReporteCobrosRoutingModule);
    return ReporteCobrosRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/reportes/reportecobros/reportecobros.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div (click)=\"backMenu()\">\n    <img height=\"22px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_190.svg\" alt=\"\">\n  </div>\n  REPORTE |\n  <div>COBROS</div>\n</div>\n<div class=\"consultaResultados\" [ngClass]=\"'resultados' + (!showGraphic ? ' visible' : '')\">\n  <div [ngClass]=\"classPanel\">\n    <div class=\"filtroHeader\">\n      <div class=\"abrir\" (click)=\"openPanel()\">\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa.svg\" alt=\"\">\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa_verde.svg\" alt=\"\">\n      </div>\n      <div *ngIf=\"hiddenClose\">\n        CERRAR\n        <div class=\"cerrar\" (click)=\"closePanel()\">\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n    <div class=\"filtros\">\n      <div></div>\n      <div>\n        <div (click)=\"filtroAvanzada()\" [style.background]=\"avanzada?'#008895':'#C2C3C9'\">AVANZADA</div>\n        <div (click)=\"filtroRapida()\" [style.background]=\"!avanzada?'#008895':'#C2C3C9'\">RÁPIDA</div>\n      </div>\n      <div *ngIf=\"avanzada\" class=\"divAvanzada\">\n        <!--  Si  ya hay datos dentro del compenente se manda el < Gestion-filter/> con los datos\n            Y la propiedad IsLoader como verdadera\n        -->\n        <div *ngIf=\"isThereData;else loader\">\n          <gestion-filter [ElementsDropList]=\"Elements\" (valueFilter)=\"mostrarDatos($event)\" (diahoy)=\"filtroCuadros(4,1)\"\n            (todas)=\"filtroCuadros(5,1)\" (diaManana)=\"filtroCuadros(6,1)\" (diaPasado)=\"filtroCuadros(7)\" (diaPospasado)=\"filtroCuadros(8,1)\"\n            (diaFuturo)=\"filtroCuadros(9,1)\" (diaAyer)=\"filtroCuadros(3,1)\" (diaAntier)=\"filtroCuadros(2,1)\"\n            (diaAnteAntier)=\"filtroCuadros(1,1)\" (diaPa)=\"filtroCuadros(0,1)\" [IsImage]=\"IsImage\" [IsDate]=\"IsDate\"\n            (grafica)=\"showGraphicPanel()\" [IsLoader]=\"isThereData\" [Clear]=\"Clear\" style=\"width: 100%\" [isSeguimiento]=\"isSeguimiento\"\n            [activarHoy]=\"activaGraficaHoy\" [activarTodo]=\"activaGraficaTodo\" [activarManana]=\"activaGraficaManana\"\n            [activarPasadoMa]=\"activaGraficaPasadoMa\" [activarPosPasado]=\"activaGraficaPosPasado\" [activarFuturo]=\"activaGraficaFuturo\"\n            [activarAyer]=\"activaGraficaAyer\" [activarAntier]=\"activaGraficaAntier\" [activarAnteAntier]=\"activaGraficaAnteAntier\"\n            [activarPasado]=\"activarPasado\" [tasa]=\"tazaRealizacion\"></gestion-filter>\n\n        </div>\n        <!--  Si  no hay datos dentro del compenente se manda el < Gestion-filter/> con solo\n            una propiedad\n            IsLoader como Falsa-->\n\n        <ng-template #loader>\n          <gestion-filter [IsLoader]=\"isThereData\" [Clear]=\"Clear\"></gestion-filter>\n        </ng-template>\n\n      </div>\n      <div *ngIf=\"!avanzada\" class=\"divRapida\">\n        <gestion-filter [ElementsDropList]=\"Elements\" (valueFilter)=\"mostrarDatos($event)\" [IsImage]=\"IsImage\"\n          [IsLoader]=\"isThereData\" [Clear]=\"Clear\" [istextboxCobros]=\"istextboxCobros\" style=\"width: 100%\"\n          [isSeguimiento]=\"isSeguimiento\"></gestion-filter>\n      </div>\n    </div>\n\n  </div>\n  <!-- Fin Filtros -->\n  <!-- Seccion detalle -->\n  <div class=\"consultaDetalles\" *ngIf=\"!showGraphic\">\n    <div *ngIf=\"!detalle\" class=\"contenidoFactura\">\n      <div class=\"detalleFactura\">\n        <div style=\" display:flex\">\n          <div class=\"rangoVerde\" [style.background]=\"rango==1?'#008895':''\" [style.color]=\"rango==1?'#ffff':''\"\n            (click)=\"todo()\">Todo</div>\n          <div class=\"rangoBlanco\" [style.background]=\"rango==2?'#008895':''\" [style.color]=\"rango==2?'#ffff':''\"\n            (click)=\"cero()\">$0,000-2,000</div>\n          <div class=\"rangoBlanco\" [style.background]=\"rango==3?'#008895':''\" [style.color]=\"rango==3?'#ffff':''\"\n            (click)=\"dosmil()\">$2,001-$10,000</div>\n          <div class=\"rangoBlanco\" [style.background]=\"rango==4?'#008895':''\" [style.color]=\"rango==4?'#ffff':''\"\n            (click)=\"diezmil()\">>$10,000</div>\n        </div>\n        <div *ngIf=\"numeroDia!=''\" style=\"height: 60px; display: flex;align-items: center;\">\n          {{titulo}}/ {{today}}  {{numeroDia}} &nbsp;\n        </div>\n        <div *ngIf=\"numeroDia===''\" style=\"height: 60px; display: flex;align-items: center;\">\n         {{today}} &nbsp;\n        </div>\n        <div>\n          <div style=\"min-height: 115px;\" [ngClass]=\"lstclienteActivo[i]\" *ngFor=\"let item of filtroCobros; let i = index\"\n            (click)=\"clienteActivo(i)\" (click)=\"segundoPanel(item.nombreCliente)\">\n            <div class=\"dfSelect\"></div>\n            <div>\n              <div>\n                <div style=\"display: flex;font-family: 'Roboto-Bold'\"># {{i+1}} ·\n\n                  <div *ngIf=\"item.numCobros > 1\"> {{item.numCobros}} Facturas </div>\n                  <div *ngIf=\"item.numCobros<=1\">{{item.numCobros}} Factura </div>\n                  <div *ngIf=\"item.numPiezas > 1\"> {{item.numPiezas}} pzas </div>\n                  <div *ngIf=\"item.numPiezas<=1\">{{item.numPiezas}} pza </div>\n                </div>\n              </div>\n              <div>\n                <div>\n                  <div> {{item.nombreCliente}} </div>\n                </div>\n              </div>\n              <div>\n                <div style=\"font-family: 'Roboto-Bold'\">Monto: {{item.monto | acFormatMoney}} USD</div>\n              </div>\n              <div>\n                <div style=\"display: flex\">ESAC:&nbsp;\n                  <div style=\" color: #008895;\"> {{item.nombreEsac}} </div>\n                </div>\n                <div style=\"display: flex\">EV:&nbsp;\n                  <div style=\" color: #008895;\">{{item.nombreEV}}</div>\n                </div>\n                <div style=\"display: flex\">Cobrador:&nbsp;\n                  <div style=\" color: #008895;\"> {{item.cobrador}} </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div>\n          <div style=\"display: flex; justify-content: center; height: 50px; align-items: center\">\n            {{filtroCobros.length}}&nbsp;Cliente<span>s</span>:\n            <span></span>\n            <span> &nbsp;TOTAL: {{montoTotal | acFormatMoney}} USD</span>\n\n          </div>\n          <div style=\"display: flex; justify-content: center; height: 50px; align-items: center\">\n            <span> {{totalPiezas}} Piezas</span>\n          </div>\n          <div style=\"display: flex; justify-content: center; height: 30px; align-items: center\">\n            TOTAL\n          </div>\n        </div>\n      </div>\n      <div class=\"lineaTiempo\">\n        <div>\n          <div style=\"height: 62px;border-bottom: 1px solid #979797; align-items: center;display: flex;\">{{nombreCli}}</div>\n        </div>\n        <div>\n          <div [ngClass]=\"lstcobroActivo[i]\" *ngFor=\"let item of detalleCobro; let i = index\" (click)=\"cobroActivo(i)\"\n            (click)=\"tercerPanel(item.cpedido)\">\n            <div class=\"ltSelect\" style=\"height: 137px;\"></div>\n            <div style=\"display: flex;justify-content: center;\">\n              <div>\n                <div style=\"display: flex;font-family: 'Roboto-Bold';height: 23%;\"># {{i+1}} ·\n                  <div>{{item.montoDolares | acFormatMoney}} </div> &nbsp;\n                  <div style=\"display: flex;width: 11%;\" *ngIf=\"item.piezas > 1\"> {{item.piezas}} pzas </div>\n                  <div style=\"display: flex;width: 11%;\" *ngIf=\"item.piezas<=1\">{{item.piezas}} pza </div>\n                  <div style=\"margin-left: 210px;\">FEP: &nbsp; {{item.fechaEsperadaPago | date :'dd/MMM/yy'}} </div>\n                </div>\n                <div>\n                  <span class=\"link\" style=\" color: #008895;    margin-right: 80px;\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pedidos/'+'PI-'+item.cpedido+'.pdf')\">PI-{{item.cpedido}}</span>\n                </div>\n                <div style=\"display: flex;justify-content: space-between;\">\n                  <div>Vendió: {{item.fpor}}</div>\n                  <div> Cond. pago: {{item.cpago}} </div>\n                </div>\n                <div> Medio de pago: {{item.medioPago}} </div>\n              </div>\n              <div></div>\n            </div>\n          </div>\n        </div>\n        <div style=\"text-align: center;\">\n          <div>\n            <span *ngIf=\"detalleCobro.length===1\">{{detalleCobro.length}}</span> Pedido <span *ngIf=\"detalleCobro.length>1\">s</span>\n            {{totalSegundoPanel | acFormatMoney }} &nbsp;USD\n            <div>{{totalPiezasSegundoPanel}} piezas</div>\n            <div>TOTAL</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"detalleFactura\" style=\"height:17% !important\">\n        <div></div>\n        <div style=\"display: flex\">\n          <div style=\"margin-top: 20px;\">{{cpedido}}</div>\n          <div *ngIf=\"radarActivo==false\" (click)=\"radar(false)\" style=\"margin-top: 20px;margin-left: 335px;\"><img\n              height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/reportes/seguimiento/localizacion_1.svg\" alt=\"\"></div>\n          <div style=\"margin-top: 20px;margin-left: 335px;\"><img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/reportes/seguimiento/localizacion_2.svg\"\n              alt=\"\"></div>\n        </div>\n        <div>\n          <div [ngClass]=\"lstDetalle[i]\" style=\"min-height: 150px;\" *ngFor=\"let item of lsttercerPanel; let i = index\"\n            (click)=\"detalleActivo(i)\">\n            <div class=\"dfSelect\"></div>\n            <div style=\"display: flex; justify-content: center;\">\n              <div style=\"display: flex;font-family: 'Roboto-Bold'\"># {{i+1}} · &nbsp;\n                <div>{{item.montoDolares | acFormatMoney}} </div> &nbsp;\n                <div *ngIf=\"item.piezas > 1\"> {{item.piezas}} pzas </div>\n                <div *ngIf=\"item.piezas<=1\">{{item.piezas}} pza </div>\n                <div style=\"margin-left: 230px;\">PEP: &nbsp; {{item.fechaEsperadaPago | date :'dd/MMM/yy'}} </div>\n              </div>\n              <div>\n                <span class=\"link\" style=\" color: #008895;\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/Proveedora/'+'F-'+item.cpedido+'.pdf')\">F-{{item.factura}}</span>\n                <div style=\"margin-left: 230px;\">Fecha facturación: &nbsp; {{item.fechaFacturacion | date\n                  :'dd/MMM/yy'}} </div>\n              </div>\n              <div style=\"display: flex;justify-content: space-between;\">\n                <div>Vendió: {{item.fpor}}</div>\n                <div> Cond. pago: {{item.cpago}} </div>\n              </div>\n              <div> Medio de pago: {{item.medioPago}} </div>\n            </div>\n          </div>\n        </div>\n            <div style=\"text-align: center;\">\n              <div>\n                <span *ngIf=\"lsttercerPanel.length===1\">{{lsttercerPanel.length}}</span> Factura <span *ngIf=\"lsttercerPanel.length>1\">{{lsttercerPanel.length}} Facturas</span> {{montoTotalTercerPanel}} &nbsp; USD\n                <div>{{totalPiezasTercerPanel}} piezas</div>\n                <div>TOTAL</div>\n              </div>\n            </div>\n      </div>\n      \n      <div class=\"historial\">\n        <div>\n          <div style=\"height:62px;align-items:center;display: flex;border-bottom: 1px solid #979797; \">Informe</div>\n        </div>\n        <div>\n          <div style=\"border-bottom: 1px solid black;\" *ngFor=\"let item of lsttercerPanel; let i = index\">\n            <div>\n              <div class=\"ltSelect\"></div>\n              <div>\n                <div>\n                  <div>\n                    <div>Fecha facturación:</div>\n                    <div>{{item.fechaFacturacion | date :'dd/MMM/yy'}}</div>\n                    <div>FEP:</div>\n                    <div>{{item.fechaEsperadaPago | date :'dd/MMM/yy'}}</div>\n                    <div>Fecha revisión:</div>\n                    <div>{{item.fechaEsperadaPago | date :'dd/MMM/yy'}}</div>\n                    <div>Fecha programación:</div>\n                    <div>{{item.fechaProgramacion | date :'dd/MMM/yy'}}</div>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n          <div *ngIf=\"lsttercerPanel.length===0\">\n            Sin información\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n    <!-- Fin detalle -->\n    <!-- Seccion Graficas -->\n    <div style=\"position: relative;\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\" *ngIf=\"showGraphic\">\n      <div [ngClass]=\"'graphics-panel-container' + (showGraphic ? ' visible' : '')\" [style.top]=\"topGraphics\" style=\"    height: calc(100vh - 171px);\">\n        <div class=\"graphics-panel-option\">\n          <img src=\"assets/Images/gestion/images/tablaminigris.svg\" (click)=\"showTablePanel()\">\n        </div>\n        <div class=\"graphics-container\" *ngIf=\"refrescar\">\n          <div class=\"donut-container\" *ngFor=\"let item of graficas; let i = index\">\n            <p class=\"donut-title\">{{item}}</p>\n            <div id=\"asistencia-canvas\" class=\"canvas-container\">\n              <pn-donut-chart [idGrafica]=\"i+'asis'\" [data]=\"graficasValores[i]\" [tipoGrafica]=\"'General'\"></pn-donut-chart>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n \n"

/***/ }),

/***/ "./src/app/components/gestion/reportes/reportecobros/reportecobros.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: rgba(0, 137, 149, 0.02); }\n:host > div:nth-of-type(1) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    background: #008895;\n    height: 41px;\n    color: #FFFFFF;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 12px;\n    padding: 0px 20px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n:host > div:nth-of-type(1) > div:nth-of-type(1) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-right: 20px;\n      cursor: pointer; }\n:host > div:nth-of-type(1) > div:nth-of-type(2) {\n      margin-left: 20px; }\n:host > div:nth-of-type(1) > div:nth-of-type(3) {\n      margin-left: 20px; }\n:host > div:nth-of-type(1) > div:nth-of-type(4) {\n      margin-left: 20px; }\n:host > div:nth-of-type(1) > .regresar {\n      cursor: pointer;\n      font-weight: 200; }\n:host > .consultaResultados {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    /***********************/\n    /*   & > div:nth-of-type(2){\n      height: 100%;\n      width: 100%;\n     // background: $pqPanelContenido;\n      background-color: #F3B23F;\n    }*/ }\n:host > .consultaResultados > .panelNormal {\n      background: #FFFFFF;\n      height: 99%;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      width: 321px;\n      min-width: 321px;\n      overflow-y: scroll;\n      max-height: calc(100vh - 171px); }\n:host > .consultaResultados > .panelOcultar {\n      background: #FFFFFF;\n      -webkit-animation-name: ocultarPanel;\n              animation-name: ocultarPanel;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 15px 15px; }\n:host > .consultaResultados > .panelOcultar .filtros {\n        display: none; }\n:host > .consultaResultados > .panelMostrar {\n      background: #FFFFFF;\n      -webkit-animation-name: mostar;\n              animation-name: mostar;\n      -webkit-animation-duration: 0.5s;\n              animation-duration: 0.5s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      overflow-y: scroll;\n      max-height: calc(100vh - 171px); }\n:host > .consultaResultados .filtroHeader {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #424242;\n      font-size: 10px;\n      margin-bottom: 20px; }\n:host > .consultaResultados .filtroHeader > .abrir {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        cursor: pointer;\n        min-height: 22px; }\n:host > .consultaResultados .filtroHeader > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n:host > .consultaResultados .filtroHeader > div:nth-of-type(2) > .cerrar {\n          margin-left: 9px;\n          cursor: pointer; }\n:host > .consultaResultados .filtros {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      border-top: 1px solid #424242; }\n:host > .consultaResultados .filtros > div:nth-of-type(1) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        height: 50px;\n        border-bottom: 1px solid #ECEEF0;\n        padding-top: 15px;\n        padding-bottom: 20px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n:host > .consultaResultados .filtros > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        height: 60px;\n        border-bottom: 1px solid #ECEEF0;\n        color: #FFFFFF;\n        font-size: 14px; }\n:host > .consultaResultados .filtros > div:nth-of-type(2) > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          cursor: pointer;\n          width: 140px;\n          height: 25px;\n          margin-right: 1px; }\n:host > .consultaResultados .filtros > .divAvanzada {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        margin-top: 15px;\n        padding-bottom: 50px; }\n:host > .consultaResultados .filtros > .divAvanzada > div:nth-of-type(1) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between; }\n:host > .consultaResultados .filtros > .divAvanzada > div:nth-of-type(1) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            width: 130px;\n            font-size: 16px;\n            color: #424242; }\n:host > .consultaResultados .filtros > .divAvanzada > div:nth-of-type(1) > div > div {\n              margin-top: 6px; }\n:host > .consultaResultados .filtros > .divAvanzada > div:nth-of-type(2) {\n          padding-bottom: 18px;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box; }\n:host > .consultaResultados .filtros > .divAvanzada > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n            margin-top: 15px; }\n:host > .consultaResultados .filtros > .divAvanzada > div:nth-of-type(3) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          margin-top: 18px;\n          margin-bottom: 50px;\n          background: #424242;\n          width: 100%;\n          height: 35px;\n          cursor: pointer; }\n:host > .consultaResultados .filtros > .divRapida > div:nth-of-type(1) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        height: 53px;\n        padding-top: 10px;\n        border-bottom: 1px solid #ECEEF0; }\n:host > .consultaResultados .filtros > .divRapida > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        margin-top: 15px;\n        padding-bottom: 18px;\n        border-bottom: 1px solid #424242; }\n:host > .consultaResultados .filtros > .divRapida > div:nth-of-type(2) > input {\n          height: 25px;\n          border: 1px solid #ECEEF0;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          margin-top: 5px; }\n:host > .consultaResultados .filtros > .divRapida > div:nth-of-type(3) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin-top: 18px;\n        background: #424242;\n        width: 100%;\n        height: 35px;\n        cursor: pointer; }\n:host > .consultaResultados > .consultaDetalles {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      height: calc(100vh - 170px);\n      width: 72%; }\n:host > .consultaResultados > .consultaDetalles > .panelNormal {\n        background: #FFFFFF;\n        height: 99%;\n        padding: 15px 20px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        width: 321px;\n        min-width: 321px;\n        overflow-y: scroll; }\n:host > .consultaResultados > .consultaDetalles > .panelOcultar {\n        background: #FFFFFF;\n        -webkit-animation-name: ocultarPanel;\n                animation-name: ocultarPanel;\n        -webkit-animation-duration: 1s;\n                animation-duration: 1s;\n        -webkit-transition: 1s ease-in-out;\n        transition: 1s ease-in-out;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        padding: 15px 15px; }\n:host > .consultaResultados > .consultaDetalles > .panelOcultar .filtros {\n          display: none; }\n:host > .consultaResultados > .consultaDetalles > .panelMostrar {\n        background: #FFFFFF;\n        -webkit-animation-name: mostar;\n                animation-name: mostar;\n        -webkit-animation-duration: 0.5s;\n                animation-duration: 0.5s;\n        -webkit-animation-fill-mode: forwards;\n                animation-fill-mode: forwards;\n        padding: 15px 20px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        overflow-y: scroll;\n        max-height: calc(100vh - 171px); }\n:host > .consultaResultados > .consultaDetalles .filtroHeader {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        color: #424242;\n        font-size: 10px;\n        margin-bottom: 20px; }\n:host > .consultaResultados > .consultaDetalles .filtroHeader > .abrir {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          cursor: pointer;\n          min-height: 22px; }\n:host > .consultaResultados > .consultaDetalles .filtroHeader > div:nth-of-type(2) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n:host > .consultaResultados > .consultaDetalles .filtroHeader > div:nth-of-type(2) > .cerrar {\n            margin-left: 9px;\n            cursor: pointer; }\n:host > .consultaResultados > .consultaDetalles .filtros {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        border-top: 1px solid #424242;\n        border-bottom: 1px solid #424242;\n        padding-bottom: 25px; }\n:host > .consultaResultados > .consultaDetalles .filtros > .detalleCliente {\n          font-size: 16px;\n          color: #424242;\n          font-weight: bold;\n          margin-top: 15px; }\n:host > .consultaResultados > .consultaDetalles .filtros > .detalleTitulo {\n          font-size: 16px;\n          color: #424242;\n          font-weight: 400;\n          margin-top: 20px; }\n:host > .consultaResultados > .consultaDetalles .filtros > .detalleTexto {\n          font-size: 16px;\n          color: #424242;\n          font-weight: 200; }\n:host > .consultaResultados > .consultaDetalles .filtros > .detalleTextoVerde {\n          font-size: 16px;\n          color: #008895 !important;\n          font-weight: 300;\n          cursor: pointer; }\n:host > .consultaResultados > .consultaDetalles .filtros > .detalleTextoVerde:hover {\n          text-decoration: underline; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        height: calc(100vh - 171px);\n        width: 93%;\n        overflow-x: scroll; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleFactura {\n          min-width: 505px;\n          padding: 15px 20px;\n          margin-top: 10px; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(1) {\n            font-size: 12px; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(1) .rangoVerde {\n              border: 1px solid #C2C3C9;\n              width: 119px;\n              height: 35px;\n              margin-bottom: 10px;\n              margin-right: 5px;\n              -webkit-box-align: center;\n                  -ms-flex-align: center;\n                      align-items: center;\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-pack: center;\n                  -ms-flex-pack: center;\n                      justify-content: center;\n              cursor: pointer; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(1) .rangoBlanco {\n              border: 1px solid #C2C3C9;\n              background: transparent;\n              width: 119px;\n              height: 35px;\n              margin-bottom: 10px;\n              margin-right: 5px;\n              -webkit-box-align: center;\n                  -ms-flex-align: center;\n                      align-items: center;\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-pack: center;\n                  -ms-flex-pack: center;\n                      justify-content: center;\n              cursor: pointer; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) {\n            font-size: 22px;\n            font-weight: bold;\n            border-top: 1px solid #424242;\n            margin-bottom: 20px; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(3) {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            flex-direction: column !important;\n            margin-top: 20px;\n            border-top: 1px solid #424242;\n            width: 100%;\n            font-family: \"Roboto-Bold\";\n            font-size: 14px;\n            color: #424242; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(3) > div {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row;\n              width: 100%;\n              border-bottom: 1px solid #FFFFFF;\n              height: 13%; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(3) > div > div:nth-of-type(1) {\n                min-width: 8px;\n                background: transparent; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(3) > div > div:nth-of-type(2) {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-orient: vertical;\n                -webkit-box-direction: normal;\n                    -ms-flex-direction: column;\n                        flex-direction: column;\n                padding: 5px 10px;\n                width: 95%;\n                background: transparent;\n                margin-top: 10px;\n                cursor: pointer;\n                border: 1px solid #ECEEF0; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(3) > div > div:nth-of-type(2) > div {\n                  display: -webkit-box;\n                  display: -ms-flexbox;\n                  display: flex;\n                  -webkit-box-orient: horizontal;\n                  -webkit-box-direction: normal;\n                      -ms-flex-direction: row;\n                          flex-direction: row;\n                  -webkit-box-pack: justify;\n                      -ms-flex-pack: justify;\n                          justify-content: space-between;\n                  margin: 5px 0px; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(3) > div > div:nth-of-type(2) > div > div:nth-of-type(2) {\n                    -webkit-box-pack: end;\n                        -ms-flex-pack: end;\n                            justify-content: flex-end; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(3) > div:hover {\n              background-color: #FFFFFF; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(3) > .divActual {\n              background-color: #FFFFFF;\n              -webkit-box-shadow: 0 2px 4px -3px #008895;\n                      box-shadow: 0 2px 4px -3px #008895; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(3) > .divActual > div:nth-of-type(1) {\n                min-width: 8px;\n                background: #008895; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(3) > .divActive {\n              height: 13% !important;\n              background-color: #FFFFFF; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(3) > .divActive .dfSelect {\n                background: #008895;\n                margin-top: 10px; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(3) {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            width: 100%;\n            margin-top: -10px;\n            font-size: 14px;\n            color: #424242;\n            font-weight: 300;\n            height: 90%;\n            overflow: scroll; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .lineaTiempo {\n          min-width: 505px;\n          background: #FFFFFF;\n          padding: 15px 20px;\n          line-height: 30px; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(1) {\n            font-size: 22px;\n            font-weight: bold;\n            color: #008895;\n            border-top: 1px solid #424242;\n            margin-top: 10px; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) {\n            margin-top: 20px;\n            overflow: scroll;\n            max-height: calc(100vh - 248px); }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row;\n              cursor: pointer;\n              margin-bottom: 10px; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(1) {\n                min-width: 8px;\n                background: transparent; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-orient: horizontal;\n                -webkit-box-direction: normal;\n                    -ms-flex-direction: row;\n                        flex-direction: row;\n                width: 900px; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) {\n                  display: -webkit-box;\n                  display: -ms-flexbox;\n                  display: flex;\n                  -webkit-box-orient: vertical;\n                  -webkit-box-direction: normal;\n                      -ms-flex-direction: column;\n                          flex-direction: column;\n                  padding: 10px 10px;\n                  width: 100%;\n                  border: 1px solid #D3D3D3;\n                  font-family: \"Roboto-Bold\";\n                  height: 115px; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) {\n                    font-size: 14px;\n                    color: #424242; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) {\n                    font-size: 14px;\n                    color: #424242;\n                    margin-bottom: 2px; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) {\n                    font-size: 14px;\n                    color: #424242;\n                    margin-bottom: 2px; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) {\n                    font-size: 14px;\n                    color: #424242;\n                    margin-bottom: 2px; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(5) {\n                    font-size: 14px;\n                    color: #424242;\n                    margin-bottom: 2px; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div:hover {\n              width: 100%;\n              background-color: rgba(0, 137, 149, 0.05); }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > .divActive {\n              background-color: rgba(0, 137, 149, 0.05);\n              width: 100%; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > .divActive > div:nth-of-type(1) {\n                min-width: 8px;\n                background: #008895;\n                height: 116px; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleTiempo {\n          min-width: 505px;\n          padding-top: 15px; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(1) {\n            font-size: 22px;\n            font-weight: bold;\n            padding: 0px 20px; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) {\n            border-top: 1px solid #424242;\n            margin: 20px 20px;\n            overflow: scroll;\n            max-height: calc(100vh - 248px); }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div {\n              border-bottom: 1px solid #D8D8D8; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .titulo {\n                font-size: 18px;\n                color: #008895;\n                margin-top: 20px;\n                margin-bottom: 10px; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .subTitulo {\n                font-size: 16px;\n                font-weight: 400;\n                color: #424242;\n                margin-bottom: 3px; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normal {\n                font-size: 16px;\n                font-weight: 200;\n                color: #424242;\n                margin-bottom: 25px;\n                cursor: default !important; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde {\n                font-size: 16px;\n                font-weight: 200;\n                margin-bottom: 25px;\n                color: #008895; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde > span {\n                  cursor: pointer; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde:hover > span {\n                text-decoration: underline; }\n:host > .consultaResultados > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde:hover > .normal {\n                text-decoration: none; }\n:host > .consultaResultados > .resultados {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding: 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out; }\n:host > .consultaResultados > .resultados > div:nth-of-type(1) {\n        border-bottom: 3px solid #424242;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        padding-bottom: 10px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n:host > .consultaResultados > .resultados > div:nth-of-type(1) > div:nth-of-type(1) {\n          font-size: 22px; }\n:host > .consultaResultados > .resultados > div:nth-of-type(1) > div:nth-of-type(2) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          flex-direction: row-reverse;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n:host > .consultaResultados > .resultados > div:nth-of-type(1) > div:nth-of-type(2) > img {\n            cursor: pointer;\n            height: 30px;\n            width: 30px; }\n:host a {\n    color: #008895;\n    text-decoration: none; }\n:host a:visited {\n    color: #008895;\n    text-decoration: none; }\n:host a:hover {\n    text-decoration: underline; }\n@-webkit-keyframes ocultarPanel {\n  from {\n    min-width: 321px; }\n  to {\n    min-width: 50px; } }\n@keyframes ocultarPanel {\n  from {\n    min-width: 321px; }\n  to {\n    min-width: 50px; } }\n@-webkit-keyframes mostar {\n  from {\n    width: 50px; }\n  to {\n    width: 321px; } }\n@keyframes mostar {\n  from {\n    width: 50px; }\n  to {\n    width: 321px; } }\n:host .detalle {\n    cursor: pointer; }\n:host .divSeguimiento {\n    width: 93px;\n    height: 35px;\n    background: transparent;\n    margin-right: 3px;\n    font-family: \"Roboto-Regular\";\n    font-size: 10px !important;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center;\n    cursor: pointer;\n    border: 0.5px solid #C2C3C9; }\n:host .divConfirmacion {\n    width: 93px;\n    height: 35px;\n    background: transparent;\n    margin-right: 3px;\n    font-family: \"Roboto-Regular\";\n    font-size: 10px !important;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center;\n    cursor: pointer;\n    border: 0.5px solid #C2C3C9; }\n:host .divCancelar {\n    width: 93px;\n    height: 35px;\n    background: transparent;\n    margin-right: 3px;\n    font-family: \"Roboto-Regular\";\n    font-size: 10px !important;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center;\n    cursor: pointer;\n    border: 0.5px solid #C2C3C9; }\n.historial {\n  min-width: 505px;\n  background: #FFFFFF;\n  padding: 15px 20px;\n  line-height: 30px;\n  font-family: \"Roboto-Bold\";\n  font-size: 14px;\n  color: #424242; }\n.historial > div:nth-of-type(1) {\n    font-size: 22px;\n    font-weight: bold;\n    color: #008895;\n    border-top: 1px solid #424242;\n    margin-top: 10px; }\n.historial > div:nth-of-type(2) {\n    margin-top: 20px;\n    overflow: scroll;\n    max-height: calc(100vh - 248px);\n    font-family: \"Roboto-Bold\";\n    font-size: 14px;\n    color: #424242; }\n.historial > div:nth-of-type(2) > div {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      cursor: pointer; }\n.historial > div:nth-of-type(2) > div > div:nth-of-type(1) {\n        min-width: 8px;\n        background: transparent; }\n.historial > div:nth-of-type(2) > div > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row; }\n.historial > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          padding: 10px 10px;\n          width: 100%;\n          margin-bottom: 10px; }\n.historial > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) {\n            font-size: 18px;\n            color: #424242;\n            margin-bottom: 15px;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex; }\n.historial > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) {\n            font-size: 16px;\n            color: #424242;\n            margin-bottom: 2px; }\n.historial > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) {\n            font-size: 16px;\n            color: #424242;\n            margin-bottom: 2px; }\n.historial > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) {\n            font-size: 16px;\n            color: #424242;\n            margin-bottom: 2px; }\n.historial > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(5) {\n            font-size: 16px;\n            color: #424242;\n            margin-bottom: 2px; }\n.historial > div:nth-of-type(2) > div:hover {\n      width: 495px;\n      background-color: rgba(0, 137, 149, 0.05); }\n.historial > div:nth-of-type(2) > .divActive {\n      width: 495px;\n      background-color: rgba(0, 137, 149, 0.05); }\n.historial > div:nth-of-type(2) > .divActive > div:nth-of-type(1) {\n        min-width: 8px;\n        background: #008895; }\n.graphics-panel-container {\n  overflow: scroll;\n  position: absolute;\n  top: -110%;\n  -webkit-transition: top 600ms;\n  transition: top 600ms;\n  height: 100%;\n  opacity: 1;\n  z-index: 30;\n  background-color: #f4fcfd;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.graphics-panel-container.visible {\n    top: 0; }\n.graphics-panel-container .graphics-panel-option {\n    width: 100%;\n    text-align: right; }\n.graphics-panel-container .graphics-panel-option img {\n      min-width: 30px;\n      min-height: 30px; }\n.graphics-panel-container .graphics-panel-option img:hover {\n        cursor: pointer; }\n.graphics-panel-container .graphics-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    height: 97%;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n.graphics-panel-container .graphics-container .donut-container {\n      min-width: 235px;\n      min-height: 263px;\n      width: 30%;\n      height: 50%;\n      margin: 0 10px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n.graphics-panel-container .graphics-container .donut-container .donut-title {\n        text-align: center; }\n.graphics-panel-container .graphics-container .donut-container .canvas-container {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -ms-flex-line-pack: center;\n            align-content: center;\n        width: 100%;\n        min-height: 80%;\n        max-height: 400px;\n        position: relative;\n        padding: 20px; }\n.circleGreen {\n  height: 15px;\n  width: 15px;\n  background-color: #91BE5F;\n  border-radius: 50%;\n  margin-top: 8px;\n  margin-left: 466px; }\n.circleRed {\n  height: 15px;\n  width: 15px;\n  background-color: #952936;\n  border-radius: 50%;\n  margin-top: 8px;\n  margin-left: 466px; }\n"

/***/ }),

/***/ "./src/app/components/gestion/reportes/reportecobros/reportecobros.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportecobrosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_filter_element_model__ = __webpack_require__("./src/app/components/shared/filter/element.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_gestion_gestion_service__ = __webpack_require__("./src/app/services/gestion/gestion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_util_util_service__ = __webpack_require__("./src/app/services/util/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_gestion_reportes_reportecobros_reportecobros_service__ = __webpack_require__("./src/app/services/gestion/reportes/reportecobros/reportecobros.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReportecobrosComponent = /** @class */ (function () {
    function ReportecobrosComponent(router, _fb, _gestionService, coreComponent, utilService, _reportecobrosService) {
        var _this = this;
        this.router = router;
        this._fb = _fb;
        this._gestionService = _gestionService;
        this.coreComponent = coreComponent;
        this.utilService = utilService;
        this._reportecobrosService = _reportecobrosService;
        this.activasPasado = 1;
        this.activasAnte = 1;
        this.activasAntier = 1;
        this.activasAyer = 1;
        this.activasFuturo = 1;
        this.activasPosPasado = 1;
        this.activasPasadoManana = 1;
        this.activasManana = 1;
        this.activasHoy = 1;
        this.activasTodo = 1;
        this.etiquetasDias = [];
        this.nuevoDias = [];
        this.filtroDias = [];
        this.nuevoCondiciones = [];
        this.nuevoMedio = [];
        this.nuevoVendio = [];
        this.filtroCondiciones = [];
        this.filtroMedioPago = [];
        this.filtroVendio = [];
        this.nuevoClientes = [];
        this.filtroClientes = [];
        this.filtroNivelIngreso = [];
        this.nuevoNivelIngreso = [];
        this.topGraphics = "-110%";
        this.showGraphic = false;
        this.activas = 1;
        this.graficas = [];
        this.condicionesPago = [];
        this.medioPago = [];
        this.vendio = [];
        this.diasRestantesCredito = [];
        this.nivelIngreso = [];
        this.GClientes = [];
        this.graficasValores = [];
        this.graficasCargadas = false;
        this.auxMostrar = [];
        this.totalPiezasTercerPanel = 0;
        this.montoTotalTercerPanel = 0;
        this.totalPiezasSegundoPanel = 0;
        this.totalSegundoPanel = 0;
        this.respaldo = [];
        this.istextboxCobros = true;
        this.aux = [];
        this.refrescar = true;
        this.pedidos = [];
        this.cpedido = [];
        this.lsttercerPanel = [];
        this.lstcobroActivo = [];
        this.detalleCobro = [];
        this.montoTotal = 0;
        this.totalPiezas = 0;
        this.nombres = [];
        this.filtro = [];
        this.filtroCobros = [];
        this.lstCobros = [];
        this.dropClientes = [{ nombre: '--TODOS--', key: 0 }];
        this.dropFabricantes = [{ nombre: '--TODOS--', key: 0 }];
        this.Clear = true;
        this.isThereData = true;
        this.classPanel = "panelNormal";
        this.hiddenClose = true;
        this.IsImage = true;
        this.avanzada = true;
        this.isSeguimiento = true;
        this.rango = 1;
        this.dropCobrador = [{ nombre: '--TODOS--', key: 0 }];
        this.activaGraficaHoy = 0;
        this.activaGraficaManana = 0;
        this.activaGraficaPasadoMa = 0;
        this.activaGraficaPosPasado = 0;
        this.activaPasado = 0;
        this.activaGraficaFuturo = 0;
        this.activaGraficaAyer = 0;
        this.activaGraficaAntier = 0;
        this.activaGraficaAnteAntier = 0;
        this.activaGraficaTodo = 0;
        this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", cobrador: "", numCobros: 0, numPartidas: 0, totalPiezas: 0, numPiezas: 0, montoTotal: 0, cpedido: [], vendio: "", cpago: "", medioPago: "", factura: [], nivelIngreso: "", diasRestante: "" };
        this.Llenar = function () {
            _this.Elements = [new __WEBPACK_IMPORTED_MODULE_1__shared_filter_element_model__["a" /* ElementFilter */]("string", "Clientes", _this.dropClientes, true),
                new __WEBPACK_IMPORTED_MODULE_1__shared_filter_element_model__["a" /* ElementFilter */]("string", "Cobrador", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'SIAvalos', key: 1 },
                    { nombre: 'PMendez', key: 2 },
                    { nombre: 'CobranzaPQF', key: 3 },
                ], true),
                new __WEBPACK_IMPORTED_MODULE_1__shared_filter_element_model__["a" /* ElementFilter */]("string", "ESAC", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'LVera', key: 1 },
                    { nombre: 'BArias', key: 2 },
                    { nombre: 'JIOlvera', key: 3 },
                    { nombre: 'Barias', key: 4 },
                ], true),
                new __WEBPACK_IMPORTED_MODULE_1__shared_filter_element_model__["a" /* ElementFilter */]("string", "Vendió", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Proveedora', key: 1 },
                    { nombre: 'Proquifa', key: 2 },
                    { nombre: 'Golocaer', key: 3 },
                    { nombre: 'Mungen', key: 4 },
                ], true),
                new __WEBPACK_IMPORTED_MODULE_1__shared_filter_element_model__["a" /* ElementFilter */]("string", "Condiciones de pago", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: '90 DIAS', key: 1 },
                    { nombre: '60 DIAS', key: 2 },
                    { nombre: '30 DIAS', key: 3 },
                    { nombre: '15 DIAS', key: 4 },
                    { nombre: '45 DIAS', key: 5 },
                    { nombre: '23 DIAS', key: 5 }
                ], true),
                new __WEBPACK_IMPORTED_MODULE_1__shared_filter_element_model__["a" /* ElementFilter */]("string", "Medio de pago", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Transferencia', key: 1 },
                ], true),
            ];
            //isThereData indica que ya no es necesario mostrar el loader
            _this.isThereData = true;
            _this.Clear = false;
        };
    }
    ReportecobrosComponent.prototype.ngOnInit = function () {
        var _this = this;
        var date = new Date();
        this.filtroForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            filtroDato: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]()
        });
        this._gestionService.dropCobrador().subscribe(function (data) {
            _this.lstCobradores = data.current;
            var lstAux = [];
            for (var _i = 0, _a = _this.lstCobradores; _i < _a.length; _i++) {
                var item = _a[_i];
                lstAux.push({ nombre: item.usuario, key: item.idEmpleado });
            }
            _this.dropCobrador = _this.dropCobrador.concat(lstAux);
            _this.Llenar();
        }, function (error) {
            console.log("error login");
            console.log(error);
        });
        this._gestionService.dropClientes().subscribe(function (data) {
            _this.lstClientes = data.current;
            var lstAux = [];
            for (var _i = 0, _a = _this.lstClientes; _i < _a.length; _i++) {
                var item = _a[_i];
                lstAux.push({ nombre: item.valor, key: item.llave });
            }
            _this.dropClientes = _this.dropClientes.concat(lstAux);
            _this.Llenar();
        }, function (error) {
            console.log("error login");
            console.log(error);
        });
        this._gestionService.dropFabricantes().subscribe(function (data) {
            _this.lstFabricantes = data.current;
            var lstAux = [];
            for (var _i = 0, _a = _this.lstFabricantes; _i < _a.length; _i++) {
                var item = _a[_i];
                lstAux.push({ nombre: item.valor, key: item.llave });
            }
            _this.dropFabricantes = _this.dropFabricantes.concat(lstAux);
            _this.Llenar();
        }, function (error) {
            console.log("error login");
            console.log(error);
        });
        this.reportesCobrosForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]()
        });
        var cuerpo = {
            facturaS: "",
            cPedido: "",
            idUsuarioLogueado: 91
        };
        this.reporteCobros(cuerpo);
    };
    ReportecobrosComponent.prototype.reporteCobros = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._reportecobrosService.reporteCobros(parametros).subscribe(function (data) {
            _this.lstCobros = data.current;
            console.log(data);
            _this.filtroCuadros(4);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    ReportecobrosComponent.prototype.backMenu = function () {
        this.router.navigate(["protected/gestion/"]);
    };
    ReportecobrosComponent.prototype.closePanel = function () {
        this.classPanel = "panelOcultar";
        this.hiddenClose = false;
    };
    ReportecobrosComponent.prototype.openPanel = function () {
        if (!this.hiddenClose) {
            this.classPanel = "panelMostrar";
            this.hiddenClose = true;
        }
    };
    ReportecobrosComponent.prototype.filtroCuadros = function (numDia) {
        var _this = this;
        this.refrescar = false;
        this.clienteActivo(0);
        switch (numDia) {
            case 0:
                this.activasPasado = 1;
                this.activasAnte = 1;
                this.activasAntier = 1;
                this.activasAyer = 1;
                this.activasFuturo = 1;
                this.activasManana = 1;
                this.activasHoy = 1;
                this.activasTodo = 1;
                this.activasPosPasado = 1;
                this.titulo = "Pasado";
                var fechaPasado = new Date();
                this.fechaGeneral = new Date();
                this.fechaGeneral.setDate(fechaPasado.getDate() - 4);
                this.activarGraficasPasado();
                break;
            case 1:
                this.activasPasado = 1;
                this.activasAntier = 1;
                this.activasAyer = 1;
                this.activasFuturo = 1;
                this.activasPasadoManana = 1;
                this.activasManana = 1;
                this.activasHoy = 1;
                this.activasTodo = 1;
                this.activasPosPasado = 1;
                this.titulo = "Ante Antier";
                var fechaAnte = new Date();
                this.fechaGeneral = new Date();
                this.fechaGeneral.setDate(fechaAnte.getDate() - 3);
                this.activarGraficasAnteAntier();
                break;
            case 2:
                this.activasPasado = 1;
                this.activasAnte = 1;
                this.activasAyer = 1;
                this.activasFuturo = 1;
                this.activasPasadoManana = 1;
                this.activasManana = 1;
                this.activasHoy = 1;
                this.activasTodo = 1;
                this.activasPosPasado = 1;
                this.titulo = "Antier";
                var fechaAntier = new Date();
                this.fechaGeneral = new Date();
                this.fechaGeneral.setDate(fechaAntier.getDate() - 2);
                this.activarGraficasAntier();
                break;
            case 3:
                this.activasPasado = 1;
                this.activasAnte = 1;
                this.activasAntier = 1;
                this.activasFuturo = 1;
                this.activasPasadoManana = 1;
                this.activasManana = 1;
                this.activasHoy = 1;
                this.activasTodo = 1;
                this.activasPosPasado = 1;
                "Ayer";
                var fechaAyer = new Date();
                this.fechaGeneral = new Date();
                this.fechaGeneral.setDate(fechaAyer.getDate() - 1);
                this.activarGraficasAyer();
                break;
            case 4:
                this.activasPasado = 1;
                this.activasAnte = 1;
                this.activasAntier = 1;
                this.activasAyer = 1;
                this.activasFuturo = 1;
                this.activasPasadoManana = 1;
                this.activasManana = 1;
                this.activasTodo = 1;
                this.activasPosPasado = 1;
                this.titulo = "Hoy";
                var fecha = new Date();
                this.fechaGeneral = new Date();
                this.activarGraficasHoy();
                break;
            case 5:
                this.activasPasado = 1;
                this.activasAnte = 1;
                this.activasAntier = 1;
                this.activasAyer = 1;
                this.activasFuturo = 1;
                this.activasPasadoManana = 1;
                this.activasManana = 1;
                this.activasHoy = 1;
                this.activasPosPasado = 1;
                var fechaTodo = new Date();
                this.fechaGeneral = "TODO";
                this.activarGraficasTodo();
                break;
            case 6:
                this.activasPasado = 1;
                this.activasAnte = 1;
                this.activasAntier = 1;
                this.activasAyer = 1;
                this.activasFuturo = 1;
                this.activasPasadoManana = 1;
                this.activasHoy = 1;
                this.activasTodo = 1;
                this.activasPosPasado = 1;
                this.titulo = "Mañana";
                var fechaMa = new Date();
                this.fechaGeneral = new Date();
                this.fechaGeneral.setDate(fechaMa.getDate() + 1);
                this.activarGraficasManana();
                break;
            case 7:
                this.activasPasado = 1;
                this.activasAnte = 1;
                this.activasAntier = 1;
                this.activasAyer = 1;
                this.activasFuturo = 1;
                this.activasManana = 1;
                this.activasHoy = 1;
                this.activasTodo = 1;
                this.activasPosPasado = 1;
                this.titulo = "Pasado Mañana";
                var fechaPasadoMa = new Date();
                this.fechaGeneral = new Date();
                this.fechaGeneral.setDate(fechaPasadoMa.getDate() + 2);
                this.activarGraficasPasadoManana();
                break;
            case 8:
                this.activasPasado = 1;
                this.activasAnte = 1;
                this.activasAntier = 1;
                this.activasAyer = 1;
                this.activasFuturo = 1;
                this.activasPasadoManana = 1;
                this.activasManana = 1;
                this.activasHoy = 1;
                this.activasTodo = 1;
                this.titulo = "Pospasado";
                var fechaPos = new Date();
                this.fechaGeneral = new Date();
                this.fechaGeneral.setDate(fechaPos.getDate() + 3);
                this.activarGraficasPosPasado();
                break;
            case 9:
                this.activasPasado = 1;
                this.activasAnte = 1;
                this.activasAntier = 1;
                this.activasAyer = 1;
                this.activasPosPasado = 1;
                this.activasPasadoManana = 1;
                this.activasManana = 1;
                this.activasHoy = 1;
                this.activasTodo = 1;
                this.titulo = "Futuro";
                var fechaFuturo = new Date();
                this.fechaGeneral = new Date();
                this.fechaGeneral.setDate(fechaFuturo.getDate() + 4);
                this.activarGraficasFuturo();
                break;
            default:
                break;
        }
        if (this.fechaGeneral != "TODO") {
            this.nombres = [];
            this.filtro = [];
            this.filtroCobros = [];
            var options = {
                weekday: 'long',
            };
            this.today = this.fechaGeneral.toLocaleDateString('es-MX', options).charAt(0).toUpperCase() + this.fechaGeneral.toLocaleDateString('es-MX', options).slice(1);
            this.numeroDia = this.fechaGeneral.getDate();
            this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", cobrador: "", numCobros: 0, numPartidas: 0, totalPiezas: 0, numPiezas: 0, montoTotal: 0, cpedido: [], vendio: "", cpago: "", medioPago: "", factura: [], nivelIngreso: "", diasRestante: "" };
            this.lstCobros.forEach(function (element) {
                var fechaCompara = new Date(element.fechaEsperadaPago);
                if ((_this.fechaGeneral.getDate()) === fechaCompara.getDate() && _this.fechaGeneral.getMonth() === fechaCompara.getMonth() && _this.fechaGeneral.getFullYear() === fechaCompara.getFullYear() && element.estado === "Por Cobrar") {
                    _this.filtro.push(element);
                }
            });
            this.filtro.forEach(function (element) {
                if (_this.nombres.indexOf(element.nombreCliente) === -1) {
                    _this.nombres.push(element.nombreCliente);
                }
            });
            this.nombres.forEach(function (element) {
                _this.filtro.forEach(function (e) {
                    if (element === e.nombreCliente) {
                        _this.objetoInfo.nombreCliente = e.nombreCliente;
                        _this.objetoInfo.monto = _this.objetoInfo.monto + e.montoDolares;
                        _this.objetoInfo.nombreEV = e.ev;
                        _this.objetoInfo.nombreEsac = e.esac;
                        _this.objetoInfo.numCobros = _this.objetoInfo.numCobros + 1;
                        _this.objetoInfo.numPartidas = _this.objetoInfo.numPartidas + e.partidas;
                        _this.objetoInfo.numPiezas = _this.objetoInfo.numPiezas + e.piezas;
                        _this.objetoInfo.cobrador = e.cobrador;
                        _this.objetoInfo.montoTotal = _this.objetoInfo.montoTotal + e.montoDolares;
                        _this.objetoInfo.totalPiezas = _this.objetoInfo.totalPiezas + e.piezas;
                        _this.objetoInfo.vendio = e.fpor;
                        _this.objetoInfo.cpago = e.cpago;
                        _this.objetoInfo.medioPago = e.medioPago;
                        _this.objetoInfo.diasRestante = e.diasRestantesCobro;
                        if (_this.objetoInfo.factura.indexOf(e.factura) === -1) {
                            _this.objetoInfo.factura.push(e.factura);
                        }
                        if (_this.objetoInfo.cpedido.indexOf(e.cpedido) === -1) {
                            _this.objetoInfo.cpedido.push(e.cpedido);
                        }
                        _this.objetoInfo.nivelIngreso = e.nivelIngreso;
                    }
                });
                _this.filtroCobros.push(_this.objetoInfo);
                _this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", cobrador: "", numCobros: 0, numPartidas: 0, totalPiezas: 0, numPiezas: 0, montoTotal: 0, cpedido: [], vendio: "", cpago: "", medioPago: "", factura: [], nivelIngreso: "", diasRestante: "" };
            });
            this.filtroCobros.forEach(function (element) {
                _this.montoTotal = _this.montoTotal + element.monto;
                _this.totalPiezas = _this.totalPiezas + element.totalPiezas;
            });
            this.respaldo = this.filtroCobros;
            //console.log(this.filtroCobros);
            this.graficasCargadas = false;
            this.graficasValores = [
                this.GClientes,
                this.nivelIngreso,
                this.diasRestantesCredito,
                this.vendio,
                this.medioPago,
                this.condicionesPago
            ];
            this.graficas = [];
            // Titulos de Gráficas
            this.graficas = [
                'Clientes',
                'Nivel de Ingreso Clientes',
                'Dias Restantes de Credito',
                'Vendió',
                'Medio de Pago',
                'Condiciones de Pago'
            ];
            if (this.rango === 1) {
                if (this.filtroCobros.length === 0) {
                    this.detalleCobro = [];
                    this.lsttercerPanel = [];
                    this.montoTotal = 0;
                    this.totalPiezas = 0;
                }
                else {
                    var nombre = this.filtroCobros[0].nombreCliente;
                    this.nombreCli = this.filtroCobros[0].nombreCliente;
                    this.segundoPanel(nombre);
                    this.cobroActivo(0);
                }
                this.limpiarVariablesGrafica();
                this.calcularDatosParaGraficas();
                this.graficasValores = [];
                this.refrescar = false;
                setTimeout(function () {
                    _this.refrescar = true;
                }, 10);
                this.graficasValores = [
                    this.GClientes,
                    this.nivelIngreso,
                    this.diasRestantesCredito,
                    this.vendio,
                    this.medioPago,
                    this.condicionesPago
                ];
                this.refrescar = false;
                setTimeout(function () {
                    _this.refrescar = true;
                }, 10);
            }
            else if (this.rango === 2) {
                this.cero();
            }
            else if (this.rango === 3) {
                this.dosmil();
            }
            else if (this.rango === 4) {
                this.diezmil();
            }
        }
        else {
            this.filtro = [];
            this.filtroCobros = [];
            this.nombres = [];
            this.today = "TODO";
            this.numeroDia = "";
            console.log("********ENTRANDO*******");
            this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", cobrador: "", numCobros: 0, numPartidas: 0, totalPiezas: 0, numPiezas: 0, montoTotal: 0, cpedido: [], vendio: "", cpago: "", medioPago: "", factura: [], nivelIngreso: "", diasRestante: "" };
            this.lstCobros.forEach(function (element) {
                var fechaCompara = new Date(element.fechaEsperadaPago);
                //if (){
                _this.filtro.push(element);
                //  }
            });
            this.filtro.forEach(function (element) {
                if (_this.nombres.indexOf(element.nombreCliente) === -1) {
                    _this.nombres.push(element.nombreCliente);
                }
            });
            console.log(this.nombres);
            this.nombres.forEach(function (element) {
                _this.filtro.forEach(function (e) {
                    if (element === e.nombreCliente) {
                        _this.objetoInfo.nombreCliente = e.nombreCliente;
                        _this.objetoInfo.monto = _this.objetoInfo.monto + e.montoDolares;
                        _this.objetoInfo.nombreEV = e.ev;
                        _this.objetoInfo.nombreEsac = e.esac;
                        _this.objetoInfo.numCobros = _this.objetoInfo.numCobros + 1;
                        _this.objetoInfo.numPartidas = _this.objetoInfo.numPartidas + e.partidas;
                        _this.objetoInfo.numPiezas = _this.objetoInfo.numPiezas + e.piezas;
                        _this.objetoInfo.cobrador = e.cobrador;
                        _this.objetoInfo.montoTotal = _this.objetoInfo.montoTotal + e.montoDolares;
                        _this.objetoInfo.totalPiezas = _this.objetoInfo.totalPiezas + e.piezas;
                        _this.objetoInfo.vendio = e.fpor;
                        _this.objetoInfo.cpago = e.cpago;
                        _this.objetoInfo.medioPago = e.medioPago;
                        _this.objetoInfo.diasRestante = e.diasRestantesCobro;
                        if (_this.objetoInfo.factura.indexOf(e.factura) === -1) {
                            _this.objetoInfo.factura.push(e.factura);
                        }
                        if (_this.objetoInfo.cpedido.indexOf(e.cpedido) === -1) {
                            _this.objetoInfo.cpedido.push(e.cpedido);
                        }
                        _this.objetoInfo.nivelIngreso = e.nivelIngreso;
                    }
                });
                _this.filtroCobros.push(_this.objetoInfo);
                _this.objetoInfo = { nombreCliente: "", monto: 0, nombreEsac: "", nombreEV: "", cobrador: "", numCobros: 0, numPartidas: 0, totalPiezas: 0, numPiezas: 0, montoTotal: 0, cpedido: [], vendio: "", cpago: "", medioPago: "", factura: [], nivelIngreso: "", diasRestante: "" };
            });
            console.log(this.filtro);
            this.filtroCobros.forEach(function (element) {
                _this.montoTotal = _this.montoTotal + element.monto;
                _this.totalPiezas = _this.totalPiezas + element.totalPiezas;
            });
            this.respaldo = this.filtroCobros;
            //console.log(this.filtroCobros);
            this.graficasCargadas = false;
            this.graficasValores = [
                this.GClientes,
                this.nivelIngreso,
                this.diasRestantesCredito,
                this.vendio,
                this.medioPago,
                this.condicionesPago
            ];
            this.graficas = [];
            // Titulos de Gráficas
            this.graficas = [
                'Clientes',
                'Nivel de Ingreso Clientes',
                'Dias Restantes de Credito',
                'Vendió',
                'Medio de Pago',
                'Condiciones de Pago'
            ];
            if (this.rango === 1) {
                if (this.filtroCobros.length === 0) {
                    this.detalleCobro = [];
                    this.lsttercerPanel = [];
                    this.montoTotal = 0;
                    this.totalPiezas = 0;
                }
                else {
                    var nombre = this.filtroCobros[0].nombreCliente;
                    this.nombreCli = this.filtroCobros[0].nombreCliente;
                    this.segundoPanel(nombre);
                    this.cobroActivo(0);
                }
                this.limpiarVariablesGrafica();
                this.calcularDatosParaGraficas();
                this.graficasValores = [];
                this.refrescar = false;
                setTimeout(function () {
                    _this.refrescar = true;
                }, 10);
                this.graficasValores = [
                    this.GClientes,
                    this.nivelIngreso,
                    this.diasRestantesCredito,
                    this.vendio,
                    this.medioPago,
                    this.condicionesPago
                ];
                this.refrescar = false;
                setTimeout(function () {
                    _this.refrescar = true;
                }, 10);
            }
            else if (this.rango === 2) {
                this.cero();
            }
            else if (this.rango === 3) {
                this.dosmil();
            }
            else if (this.rango === 4) {
                this.diezmil();
            }
        }
    };
    ReportecobrosComponent.prototype.segundoPanel = function (nombreCliente) {
        var _this = this;
        this.detalleCobro = [];
        this.totalSegundoPanel;
        this.nombreCli = nombreCliente;
        this.filtro.forEach(function (element) {
            if (element.nombreCliente === nombreCliente) {
                _this.detalleCobro.push(element);
                _this.totalSegundoPanel += element.montoDolares;
                _this.totalPiezasSegundoPanel += element.piezas;
            }
        });
        var cpedido = this.detalleCobro[0].cpedido;
        this.tercerPanel(cpedido);
    };
    ReportecobrosComponent.prototype.tercerPanel = function (cpedido) {
        var _this = this;
        this.lsttercerPanel = [];
        this.detalleCobro.forEach(function (e) {
            if (e.cpedido === cpedido) {
                _this.lsttercerPanel.push(e);
                _this.montoTotalTercerPanel += e.montoDolares;
                _this.totalPiezasTercerPanel += e.piezas;
            }
        });
        this.cpedido = this.lsttercerPanel[0].cpedido;
    };
    ReportecobrosComponent.prototype.clienteActivo = function (i) {
        this.lstclienteActivo = [];
        this.lstclienteActivo = new Array(this.filtroCobros.length).fill('');
        this.lstclienteActivo[i] = 'divActive';
        this.cobroActivo(0);
    };
    ReportecobrosComponent.prototype.cobroActivo = function (i) {
        this.lstcobroActivo = [];
        this.lstcobroActivo = new Array(this.detalleCobro.length).fill('');
        this.lstcobroActivo[i] = 'divActive';
        this.detalleActivo(0);
    };
    ReportecobrosComponent.prototype.detalleActivo = function (i) {
        this.lstDetalle = [];
        this.lstDetalle = new Array(this.tercerPanel.length).fill('');
        this.lstDetalle[i] = 'divActive';
    };
    ReportecobrosComponent.prototype.todo = function () {
        var _this = this;
        this.montoTotal = 0;
        this.totalPiezas = 0;
        this.rango = 1;
        this.filtroCobros = [];
        this.filtroCobros = this.respaldo;
        this.filtroCobros.forEach(function (element) {
            _this.montoTotal = _this.montoTotal + element.monto;
            _this.totalPiezas = _this.totalPiezas + element.totalPiezas;
        });
        if (this.filtroCobros.length === 0) {
            this.detalleCobro = [];
            this.lsttercerPanel = [];
            this.montoTotal = 0;
            this.totalPiezas = 0;
        }
        else {
            var nombre = this.filtroCobros[0].nombreCliente;
            this.segundoPanel(nombre);
            this.cobroActivo(0);
            this.limpiarVariablesGrafica();
            this.calcularDatosParaGraficas();
            this.graficasValores = [];
            this.refrescar = false;
            setTimeout(function () {
                _this.refrescar = true;
            }, 10);
            this.graficasValores = [
                this.GClientes,
                this.nivelIngreso,
                this.diasRestantesCredito,
                this.vendio,
                this.medioPago,
                this.condicionesPago
            ];
            this.refrescar = false;
            setTimeout(function () {
                _this.refrescar = true;
            }, 10);
        }
    };
    ReportecobrosComponent.prototype.diezmil = function () {
        var _this = this;
        this.montoTotal = 0;
        this.totalPiezas = 0;
        this.rango = 4;
        this.aux = [];
        this.respaldo.forEach(function (element) {
            if (element.monto > 10000) {
                _this.aux.push(element);
            }
            _this.montoTotal = _this.montoTotal + element.monto;
            _this.totalPiezas = _this.totalPiezas + element.totalPiezas;
        });
        this.filtroCobros = [];
        this.filtroCobros = this.aux;
        if (this.filtroCobros.length === 0) {
            this.detalleCobro = [];
            this.lsttercerPanel = [];
            this.montoTotal = 0;
            this.totalPiezas = 0;
            this.limpiarVariablesGrafica();
            this.calcularDatosParaGraficas();
        }
        else {
            var nombre = this.filtroCobros[0].nombreCliente;
            this.segundoPanel(nombre);
            this.cobroActivo(0);
            this.limpiarVariablesGrafica();
            this.calcularDatosParaGraficas();
            this.graficasValores = [];
            this.refrescar = false;
            setTimeout(function () {
                _this.refrescar = true;
            }, 10);
            this.graficasValores = [
                this.GClientes,
                this.nivelIngreso,
                this.diasRestantesCredito,
                this.vendio,
                this.medioPago,
                this.condicionesPago
            ];
            this.refrescar = false;
            setTimeout(function () {
                _this.refrescar = true;
            }, 10);
        }
    };
    ReportecobrosComponent.prototype.dosmil = function () {
        var _this = this;
        this.montoTotal = 0;
        this.totalPiezas = 0;
        this.aux = [];
        this.rango = 3;
        this.respaldo.forEach(function (element) {
            if (element.monto > 2000 && element.monto <= 10000) {
                _this.aux.push(element);
            }
            _this.montoTotal = _this.montoTotal + element.monto;
            _this.totalPiezas = _this.totalPiezas + element.totalPiezas;
        });
        this.filtroCobros = [];
        this.filtroCobros = this.aux;
        if (this.filtroCobros.length === 0) {
            this.detalleCobro = [];
            this.lsttercerPanel = [];
            this.montoTotal = 0;
            this.totalPiezas = 0;
            this.limpiarVariablesGrafica();
            this.calcularDatosParaGraficas();
        }
        else {
            var nombre = this.filtroCobros[0].nombreCliente;
            this.segundoPanel(nombre);
            this.cobroActivo(0);
            this.limpiarVariablesGrafica();
            this.calcularDatosParaGraficas();
            this.graficasValores = [];
            this.refrescar = false;
            setTimeout(function () {
                _this.refrescar = true;
            }, 10);
            this.graficasValores = [
                this.GClientes,
                this.nivelIngreso,
                this.diasRestantesCredito,
                this.vendio,
                this.medioPago,
                this.condicionesPago
            ];
            this.refrescar = false;
            setTimeout(function () {
                _this.refrescar = true;
            }, 10);
        }
    };
    ReportecobrosComponent.prototype.cero = function () {
        var _this = this;
        this.montoTotal = 0;
        this.totalPiezas = 0;
        this.rango = 2;
        this.aux = [];
        this.respaldo.forEach(function (element) {
            if (element.monto > 0 && element.monto <= 2000) {
                _this.aux.push(element);
            }
            _this.montoTotal = _this.montoTotal + element.monto;
            _this.totalPiezas = _this.totalPiezas + element.totalPiezas;
        });
        this.filtroCobros = [];
        this.filtroCobros = this.aux;
        if (this.filtroCobros.length === 0) {
            this.detalleCobro = [];
            this.lsttercerPanel = [];
            this.montoTotal = 0;
            this.totalPiezas = 0;
            this.limpiarVariablesGrafica();
            this.calcularDatosParaGraficas();
        }
        else {
            console.log("ENTRO A ELSE");
            var nombre = this.filtroCobros[0].nombreCliente;
            this.segundoPanel(nombre);
            this.cobroActivo(0);
            this.limpiarVariablesGrafica();
            this.calcularDatosParaGraficas();
            this.graficasValores = [];
            this.refrescar = false;
            setTimeout(function () {
                _this.refrescar = true;
            }, 10);
            this.graficasValores = [
                this.GClientes,
                this.nivelIngreso,
                this.diasRestantesCredito,
                this.vendio,
                this.medioPago,
                this.condicionesPago
            ];
            this.refrescar = false;
            setTimeout(function () {
                _this.refrescar = true;
            }, 10);
        }
    };
    ReportecobrosComponent.prototype.activarGraficasTodo = function () {
        this.activasTodo++;
        this.activasTodo % 2 === 0 ? this.showTablePanel() : this.showGraphicPanel();
    };
    ReportecobrosComponent.prototype.activarGraficasHoy = function () {
        this.activasHoy++;
        this.activasHoy % 2 === 0 ? this.showTablePanel() : this.showGraphicPanel();
    };
    ReportecobrosComponent.prototype.activarGraficasManana = function () {
        this.activasManana++;
        this.activasManana % 2 === 0 ? this.showTablePanel() : this.showGraphicPanel();
    };
    ReportecobrosComponent.prototype.activarGraficasPasadoManana = function () {
        this.activasPasadoManana++;
        this.activasPasadoManana % 2 === 0 ? this.showTablePanel() : this.showGraphicPanel();
    };
    ReportecobrosComponent.prototype.activarGraficasPosPasado = function () {
        this.activasPosPasado++;
        this.activasPosPasado % 2 === 0 ? this.showTablePanel() : this.showGraphicPanel();
    };
    ReportecobrosComponent.prototype.activarGraficasFuturo = function () {
        this.activasFuturo++;
        this.activasFuturo % 2 === 0 ? this.showTablePanel() : this.showGraphicPanel();
    };
    ReportecobrosComponent.prototype.activarGraficasAyer = function () {
        this.activasAyer++;
        this.activasAyer % 2 === 0 ? this.showTablePanel() : this.showGraphicPanel();
    };
    ReportecobrosComponent.prototype.activarGraficasAntier = function () {
        this.activasAntier++;
        this.activasAntier % 2 === 0 ? this.showTablePanel() : this.showGraphicPanel();
    };
    ReportecobrosComponent.prototype.activarGraficasAnteAntier = function () {
        this.activasAnte++;
        this.activasAnte % 2 === 0 ? this.showTablePanel() : this.showGraphicPanel();
    };
    ReportecobrosComponent.prototype.activarGraficasPasado = function () {
        this.activasPasado++;
        this.activasPasado % 2 === 0 ? this.showTablePanel() : this.showGraphicPanel();
    };
    ReportecobrosComponent.prototype.showGraphicPanel = function () {
        // console.log("MUESTRA GRAFICAS");
        var _this = this;
        this.showGraphic = true;
        setTimeout(function () { _this.topGraphics = "0"; }, 100);
    };
    ReportecobrosComponent.prototype.showTablePanel = function () {
        var _this = this;
        //console.log("MUESTRA TABLA");
        this.topGraphics = "-110%";
        setTimeout(function () { _this.showGraphic = false; }, 300);
    };
    ReportecobrosComponent.prototype.mostrarDatos = function ($event) {
        // console.log($event);
        var _this = this;
        if ($event.textbox != "") {
            this, this.mostrarDatosRapida($event);
        }
        else {
            this.auxMostrar = [];
            if ($event.Datos[0].nombre === "--TODOS--") {
                $event.Datos[0].nombre = "";
            }
            if ($event.Datos[1].nombre === "--TODOS--") {
                $event.Datos[1].nombre = "";
            }
            if ($event.Datos[2].nombre === "--TODOS--") {
                $event.Datos[2].nombre = "";
            }
            if ($event.Datos[3].nombre === "--TODOS--") {
                $event.Datos[3].nombre = "";
            }
            if ($event.Datos[4].nombre === "--TODOS--") {
                $event.Datos[4].nombre = "";
            }
            if ($event.Datos[5].nombre === "--TODOS--") {
                $event.Datos[5].nombre = "";
            }
            if ($event.Datos[0].nombre === "" && $event.Datos[1].nombre === "" && $event.Datos[2].nombre === "" && $event.Datos[3].nombre === "" && $event.Datos[4].nombre === "" && $event.Datos[5].nombre === "") {
                var cuerpo = {
                    facturaS: "",
                    cPedido: "",
                    idUsuarioLogueado: 91
                };
                this.reporteCobros(cuerpo);
            }
            else {
                this.respaldo.forEach(function (element) {
                    if ($event.Datos[0].nombre === element.nombreCliente || $event.Datos[1].nombre === element.cobrador
                        || $event.Datos[2].nombre === element.nombreEsac || $event.Datos[3].nombre === element.fpor || $event.Datos[4].nombre === element.cpago || $event.Datos[5].nombre === element.medioPago) {
                        _this.auxMostrar.push(element);
                    }
                });
                this.filtroCobros = [];
                this.filtroCobros = this.auxMostrar;
                this.respaldo = [];
                this.respaldo = this.filtroCobros;
            }
            if ($event.Datos[0].nombre === "") {
                $event.Datos[0].nombre = "--TODOS--";
            }
            if ($event.Datos[1].nombre === "") {
                $event.Datos[1].nombre = "--TODOS--";
            }
            if ($event.Datos[2].nombre === "") {
                $event.Datos[2].nombre = "--TODOS--";
            }
            if ($event.Datos[3].nombre === "") {
                $event.Datos[3].nombre = "--TODOS--";
            }
            if ($event.Datos[4].nombre === "") {
                $event.Datos[4].nombre = "--TODOS--";
            }
            if ($event.Datos[5].nombre === "") {
                $event.Datos[5].nombre = "--TODOS--";
            }
        }
    };
    ReportecobrosComponent.prototype.mostrarDatosRapida = function ($event) {
        //console.log("****Recibe***");
        var _this = this;
        // console.log($event);
        this.auxMostrar = [];
        this.respaldo.forEach(function (element) {
            if ($event.textbox === element.factura.toString()) {
                _this.auxMostrar.push(element);
            }
        });
        //console.log(this.auxMostrar);
        this.filtroCobros = [];
        this.filtroCobros = this.auxMostrar;
        // this.respaldo=[];
        //this.respaldo=this.filtroCobros;
    };
    ReportecobrosComponent.prototype.todos = function () {
        console.log("Entro a todos");
        this.filtroCuadros(0);
    };
    ReportecobrosComponent.prototype.filtroAvanzada = function () {
        this.avanzada = true;
        this.isSeguimiento = true;
        this.Llenar();
        this.filtroCobros = [];
        this.filtroCobros = this.respaldo;
    };
    ReportecobrosComponent.prototype.filtroRapida = function () {
        this.avanzada = false;
        this.Elements = [];
        this.isSeguimiento = false;
        //this.todos();
        this.filtroCobros = [];
        this.filtroCobros = this.respaldo;
    };
    /**************GRAFICAS****************/
    ReportecobrosComponent.prototype.limpiarVariablesGrafica = function () {
        var _this = this;
        this.filtroMedioPago = [];
        this.filtroVendio = [];
        this.filtroNivelIngreso = [];
        this.filtroCondiciones = [];
        this.filtroClientes = [];
        this.etiquetasDias = [];
        for (var _i = 0, _a = this.filtroCobros; _i < _a.length; _i++) {
            var cobro = _a[_i];
            this.filtroClientes.push(cobro.nombreCliente);
            if (this.filtroNivelIngreso.indexOf(cobro.nivelIngreso) === -1) {
                this.filtroNivelIngreso.push(cobro.nivelIngreso);
            }
            if (this.filtroVendio.indexOf(cobro.vendio) === -1) {
                this.filtroVendio.push(cobro.vendio);
            }
            if (cobro.medioPago != undefined) {
                if (this.filtroMedioPago.indexOf(cobro.medioPago) === -1) {
                    this.filtroMedioPago.push(cobro.medioPago);
                }
            }
            if (this.filtroCondiciones.indexOf(cobro.cpago) === -1) {
                this.filtroCondiciones.push(cobro.cpago);
            }
            if (this.filtroDias.indexOf(cobro.diasRestante) === -1) {
                this.filtroDias.push(cobro.diasRestante);
            }
        }
        var valoresDias = [];
        var valoresD = [];
        this.filtroDias.forEach(function (element) {
            //console.log(element);
            if (element === 0) {
                _this.label = "Vencimiento";
            }
            else {
                _this.label = "A " + element + " días del pago";
            }
            _this.etiquetasDias.push(_this.label);
            valoresDias.push([0, 0, 0, 0, 0]);
            valoresD.push(0);
        });
        var valoresNiveles = [];
        var valoresN = [];
        this.filtroNivelIngreso.forEach(function () {
            valoresNiveles.push([0, 0, 0, 0, 0]);
            valoresN.push(0);
        });
        var valoresClientes = [];
        var valoresC = [];
        this.filtroClientes.forEach(function () {
            valoresClientes.push([0, 0, 0, 0, 0]);
            valoresC.push(0);
        });
        var valoresVendio = [];
        var valoresV = [];
        this.filtroVendio.forEach(function () {
            valoresVendio.push([0, 0, 0, 0, 0]);
            valoresV.push(0);
        });
        var valoresMedio = [];
        var valoresM = [];
        this.filtroMedioPago.forEach(function () {
            valoresMedio.push([0, 0, 0, 0, 0]);
            valoresM.push(0);
        });
        var valoresCondiciones = [];
        var valoresCon = [];
        this.filtroCondiciones.forEach(function () {
            valoresCondiciones.push([0, 0, 0, 0, 0]);
            valoresCon.push(0);
        });
        // Gráfica Clientes //
        this.GClientes = {
            titulo: "Totales",
            labels: this.filtroClientes,
            valores: valoresC,
            labelsExtras: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
            labelsExtrasHover: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
            valuesExtras: [0, 0, 0, 0, 0],
            valuesExtrasHover: valoresClientes
        };
        // Gráfica Nivel de Ingreso //
        this.nivelIngreso = {
            titulo: "Totales",
            labels: ["MM", "AAplus", "AB", "AM", "MB", "AA", "MA", "Bajo"],
            valores: [0, 0, 0, 0, 0, 0, 0, 0],
            labelsExtras: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
            labelsExtrasHover: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
            valuesExtras: [0, 0, 0, 0, 0],
            valuesExtrasHover: [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
        };
        // Gráfica Días restantes de crédito //
        this.diasRestantesCredito = {
            titulo: "Totales",
            labels: this.etiquetasDias,
            valores: valoresD,
            labelsExtras: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
            labelsExtrasHover: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
            valuesExtras: [0, 0, 0, 0, 0],
            valuesExtrasHover: valoresDias
        };
        // Gráfica Días restantes de crédito //
        this.vendio = {
            titulo: "Totales",
            labels: this.filtroVendio,
            valores: valoresV,
            labelsExtras: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
            labelsExtrasHover: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
            valuesExtras: [0, 0, 0, 0, 0],
            valuesExtrasHover: valoresVendio
        };
        //Grafica Medio pago//
        this.medioPago = {
            titulo: "Totales",
            labels: this.filtroMedioPago,
            valores: valoresM,
            labelsExtras: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
            labelsExtrasHover: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
            valuesExtras: [0, 0, 0, 0, 0],
            valuesExtrasHover: valoresMedio
        };
        //Gráfica condiciones de pago//
        this.condicionesPago = {
            titulo: "Totales",
            labels: this.filtroCondiciones,
            valores: valoresCon,
            labelsExtras: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
            labelsExtrasHover: ["Monto", "Clientes", "Facturas", "Partidas", "Piezas"],
            valuesExtras: [0, 0, 0, 0, 0],
            valuesExtrasHover: valoresCondiciones
        };
    };
    ReportecobrosComponent.prototype.calcularDatosParaGraficas = function () {
        for (var _i = 0, _a = this.filtroCobros; _i < _a.length; _i++) {
            var cobro = _a[_i];
            this.llenarTotales(this.nivelIngreso, cobro, "NIVEL_INGRESO");
            this.llenarTotales(this.GClientes, cobro, "CLIENTES");
            this.llenarTotales(this.diasRestantesCredito, cobro, "DIAS_CREDITO");
            this.llenarTotales(this.vendio, cobro, "VENDIO");
            this.llenarTotales(this.medioPago, cobro, "MEDIO_PAGO");
            this.llenarTotales(this.condicionesPago, cobro, "CONDICIONES_PAGO");
        }
        this.graficasCargadas = true;
        this.nivelIngreso.valuesExtras[0] = this.nivelIngreso.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.nivelIngreso.valuesExtrasHover.forEach(function (temp) {
            temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        });
        this.GClientes.valuesExtras[0] = this.GClientes.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.GClientes.valuesExtrasHover.forEach(function (temp) {
            temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        });
        this.vendio.valuesExtras[0] = this.vendio.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.vendio.valuesExtrasHover.forEach(function (temp) {
            temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        });
        this.medioPago.valuesExtras[0] = this.medioPago.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.medioPago.valuesExtrasHover.forEach(function (temp) {
            temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        });
        this.condicionesPago.valuesExtras[0] = this.condicionesPago.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.condicionesPago.valuesExtrasHover.forEach(function (temp) {
            temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        });
        this.diasRestantesCredito.valuesExtras[0] = this.diasRestantesCredito.valuesExtras[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.diasRestantesCredito.valuesExtrasHover.forEach(function (temp) {
            temp[0] = temp[0].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        });
        console.log(this.nivelIngreso);
    };
    ReportecobrosComponent.prototype.llenarTotales = function (total, elemento, graficaElegida) {
        switch (graficaElegida) {
            case "NIVEL_INGRESO":
                var posicion_1 = this.filtroNivelIngreso.indexOf(elemento.nivelIngreso);
                if (this.nuevoNivelIngreso.indexOf(elemento.nombreCliente) === -1) {
                    this.nuevoNivelIngreso.push(elemento.nombreCliente);
                }
                total.valuesExtrasHover[posicion_1][1]++;
                total.valuesExtras[1]++; //Aumento en clientes
                elemento.factura.forEach(function (element) {
                    total.valuesExtras[2]++;
                    total.valuesExtrasHover[posicion_1][2]++; //Suma Facturas
                });
                total.valuesExtras[3] += elemento.numPartidas; // Total de Partidas
                total.valuesExtras[4] += elemento.numPiezas; // Total de piezas
                total.valores[posicion_1] += elemento.numPiezas; //+ (elemento.monto.toFixed(2)); //Monto total
                total.valuesExtras[0] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicion_1][0] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicion_1][3] += elemento.numPartidas; // Total de Partidas
                total.valuesExtrasHover[posicion_1][4] += elemento.numPiezas;
                break;
            case "CLIENTES":
                var posicion2_1 = this.filtroClientes.indexOf(elemento.nombreCliente);
                if (this.nuevoClientes.indexOf(elemento.nombreCliente) === -1) {
                    this.nuevoClientes.push(elemento.nombreCliente);
                }
                total.valuesExtrasHover[posicion2_1][1]++;
                total.valuesExtras[1]++; //Aumento en clientes
                elemento.factura.forEach(function (element) {
                    total.valuesExtras[2]++;
                    total.valuesExtrasHover[posicion2_1][2]++; //Suma Facturas
                });
                total.valuesExtras[3] += elemento.numPartidas; // Total de Partidas
                total.valuesExtras[4] += elemento.numPiezas; // Total de piezas
                total.valores[posicion2_1] += elemento.numPiezas; //+ (elemento.monto.toFixed(2)); //Monto total
                total.valuesExtras[0] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicion2_1][0] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicion2_1][3] += elemento.numPartidas; // Total de Partidas
                total.valuesExtrasHover[posicion2_1][4] += elemento.numPiezas;
                break;
            case "DIAS_CREDITO":
                var posicionD_1 = this.filtroDias.indexOf(elemento.diasRestante);
                if (this.nuevoDias.indexOf(elemento.nombreCliente) === -1) {
                    this.nuevoDias.push(elemento.nombreCliente);
                    total.valuesExtrasHover[posicionD_1][1]++;
                }
                total.valuesExtras[1]++; //Aumento en clientes
                total.valuesExtrasHover[posicionD_1][1]++; //Aumento en clientes
                elemento.factura.forEach(function (element) {
                    total.valuesExtras[2]++;
                    total.valuesExtrasHover[posicionD_1][2]++; //Suma Facturas
                });
                total.valuesExtras[3] += elemento.numPartidas; // Total de Partidas
                total.valuesExtras[4] += elemento.numPiezas; // Total de piezas
                total.valores[posicionD_1] += elemento.numPiezas; //+ (elemento.monto.toFixed(2)); //Monto total
                total.valuesExtras[0] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicionD_1][0] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicionD_1][3] += elemento.numPartidas; // Total de Partidas
                total.valuesExtrasHover[posicionD_1][4] += elemento.numPiezas;
                break;
            case "VENDIO":
                var posicionVendio_1 = this.filtroVendio.indexOf(elemento.vendio);
                if (this.nuevoVendio.indexOf(elemento.nombreCliente) === -1) {
                    this.nuevoVendio.push(elemento.nombreCliente);
                    elemento.factura.forEach(function (element) {
                        total.valuesExtrasHover[posicionVendio_1][2]++;
                    });
                }
                total.valuesExtrasHover[posicionVendio_1][0] += +(elemento.montoTotal.toFixed(2));
                total.valuesExtrasHover[posicionVendio_1][1]++;
                total.valuesExtras[1]++; //Aumento en clientes
                elemento.factura.forEach(function (element) {
                    total.valuesExtras[2]++;
                });
                total.valuesExtras[3] += elemento.numPartidas; // Total de Partidas
                total.valuesExtras[4] += elemento.totalPiezas; // Total de piezas
                total.valores[posicionVendio_1] += elemento.numPiezas; //+ (elemento.montoTotal.toFixed(2)); //Monto total
                total.valuesExtras[0] += +(elemento.montoTotal.toFixed(2));
                total.valuesExtrasHover[posicionVendio_1][2]++; //Suma facturas
                total.valuesExtrasHover[posicionVendio_1][3] += elemento.numPartidas; // Total de Partidas
                total.valuesExtrasHover[posicionVendio_1][4] += elemento.numPiezas;
                break;
            case "MEDIO_PAGO":
                var posicionM_1 = this.filtroMedioPago.indexOf(elemento.medioPago);
                if (this.nuevoMedio.indexOf(elemento.nombreCliente) === -1) {
                    this.nuevoMedio.push(elemento.nombreCliente);
                    // elemento.factura.forEach(element => {
                    //   total.valuesExtrasHover[posicionM][2]++;
                    // });
                }
                total.valuesExtrasHover[posicionM_1][0] += +(elemento.montoTotal.toFixed(2));
                total.valuesExtrasHover[posicionM_1][1]++;
                total.valuesExtras[1]++; //Aumento en clientes
                elemento.factura.forEach(function (element) {
                    total.valuesExtras[2]++;
                    total.valuesExtrasHover[posicionM_1][2]++; //Suma facturas
                });
                total.valuesExtras[3] += elemento.numPartidas; // Total de Partidas
                total.valuesExtras[4] += elemento.numPiezas; // Total de piezas
                total.valores[posicionM_1] += elemento.numPiezas; //+ (elemento.montoTotal.toFixed(2)); //Monto total
                total.valuesExtras[0] += +(elemento.montoTotal.toFixed(2));
                total.valuesExtrasHover[posicionM_1][3] += elemento.numPartidas; // Total de Partidas
                total.valuesExtrasHover[posicionM_1][4] += elemento.numPiezas;
                break;
            case "CONDICIONES_PAGO":
                var posicionCP_1 = this.filtroCondiciones.indexOf(elemento.cpago);
                if (this.nuevoCondiciones.indexOf(elemento.nombreCliente) === -1) {
                    this.nuevoCondiciones.push(elemento.nombreCliente);
                }
                total.valuesExtrasHover[posicionCP_1][0] += +(elemento.montoTotal.toFixed(2));
                total.valuesExtrasHover[posicionCP_1][1]++;
                total.valuesExtrasHover[posicionCP_1][3] += elemento.numPartidas; // Total de Partidas
                total.valuesExtrasHover[posicionCP_1][4] += elemento.numPiezas;
                total.valores[posicionCP_1] += elemento.numPiezas; //+ (elemento.montoTotal.toFixed(2)); //Monto total
                total.valuesExtras[0] += +(elemento.montoTotal.toFixed(2));
                total.valuesExtras[1]++; //Aumento en clientes
                elemento.factura.forEach(function (element) {
                    total.valuesExtras[2]++;
                    total.valuesExtrasHover[posicionCP_1][2]++;
                });
                total.valuesExtras[3] += elemento.numPartidas; // Total de Partidas
                total.valuesExtras[4] += elemento.totalPiezas; // Total de piezas
                break;
            default:
                break;
        }
    };
    ReportecobrosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-reportecobros',
            template: __webpack_require__("./src/app/components/gestion/reportes/reportecobros/reportecobros.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/reportes/reportecobros/reportecobros.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_5__services_gestion_gestion_service__["a" /* GestionService */], __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_6__services_util_util_service__["a" /* UtilService */], __WEBPACK_IMPORTED_MODULE_7__services_gestion_reportes_reportecobros_reportecobros_service__["a" /* ReporteCobrosService */]])
    ], ReportecobrosComponent);
    return ReportecobrosComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/reportes/reportecobros/reportecobros.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteCobrosModule", function() { return ReporteCobrosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reportecobros_module__ = __webpack_require__("./src/app/components/gestion/reportes/reportecobros/reportecobros-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reportecobros_component__ = __webpack_require__("./src/app/components/gestion/reportes/reportecobros/reportecobros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__ = __webpack_require__("./src/app/components/shared/radio-button/radio-button.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_filter_filter_module__ = __webpack_require__("./src/app/components/shared/filter/filter.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ReporteCobrosModule = /** @class */ (function () {
    function ReporteCobrosModule() {
    }
    ReporteCobrosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__reportecobros_module__["a" /* ReporteCobrosRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__["a" /* RadioButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_filter_filter_module__["a" /* FilterModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_12__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__reportecobros_component__["a" /* ReportecobrosComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__reportecobros_component__["a" /* ReportecobrosComponent */]
            ]
        })
    ], ReporteCobrosModule);
    return ReporteCobrosModule;
}());



/***/ })

});
//# sourceMappingURL=reportecobros.module.chunk.js.map