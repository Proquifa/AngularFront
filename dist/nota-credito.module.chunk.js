webpackJsonp(["nota-credito.module"],{

/***/ "./src/app/components/gestion/consultas/nota-credito/nota-credito-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotaCreditoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nota_credito_component__ = __webpack_require__("./src/app/components/gestion/consultas/nota-credito/nota-credito.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotaCreditoRoutingModule = /** @class */ (function () {
    function NotaCreditoRoutingModule() {
    }
    NotaCreditoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__nota_credito_component__["a" /* NotaCreditoComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], NotaCreditoRoutingModule);
    return NotaCreditoRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/nota-credito/nota-credito.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div (click)=\"backMenu()\">\n    <img height=\"22px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_190.svg\" alt=\"\">\n  </div>\n  |\n  <div>NOTA DE CREDITO</div>\n</div>\n<div>\n  <div [ngClass]=\"classPanel\">\n    <div class=\"filtroHeader\">\n      <div class=\"abrir\" (click)=\"openPanel()\">\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_193.svg\" alt=\"\">\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_188.svg\" alt=\"\">\n      </div>\n      <div *ngIf=\"hiddenClose\">\n        CERRAR\n        <div class=\"cerrar\" (click)=\"closePanel()\">\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"filtros\">\n<div></div>\n      <div>\n        <div (click)=\"filtroAvanzada()\" [style.background]=\"avanzada?'#008895':'#C2C3C9'\">AVANZADA</div>\n        <div (click)=\"filtroRapida()\" [style.background]=\"!avanzada?'#008895':'#C2C3C9'\">RÁPIDA</div>\n      </div>\n\n      <div *ngIf=\"avanzada\" class=\"divAvanzada\">\n        <!--  Si  ya hay datos dentro del compenente se manda el < Gestion-filter/> con los datos\n            Y la propiedad IsLoader como verdadera\n          -->\n        <div *ngIf=\"isThereData;else loader\">\n          <gestion-filter [ElementsDropList]=\"Elements\" (valueFilter)=\"mostrarDatos($event)\" [IsImage]=\"IsImage\" [IsDate]=\"IsDate\"\n            [IsLoader]=\"isThereData\" [Clear]=\"Clear\" style=\"width: 100%\"></gestion-filter>\n        </div>\n\n        <!--  Si  no hay datos dentro del compenente se manda el < Gestion-filter/> con solo\n            una propiedad\n            IsLoader como Falsa-->\n        <ng-template #loader>\n          <gestion-filter [IsLoader]=\"isThereData\" [Clear]=\"Clear\"></gestion-filter>\n        </ng-template>\n      </div>\n\n      <div *ngIf=\"!avanzada\" class=\"divRapida\">\n        <div>\n          <pq-radio-button [widthTotal]=\"'120px'\" [lstItems]=\"lstRadiosRapida\" [disble]=\"true\" [direction]=\"'row'\" [imgSize]=\"'12px'\"\n            (emitItem)=\"radioRapida($event)\" [width]=\"'15px'\"></pq-radio-button>\n        </div>\n\n        <div [formGroup]=\"filtroForm\">\n          <span>{{filtroConsultaRapida}}</span>\n          <input type=\"text\" formControlName=\"filtroDato\" name=\"filtroDato\">\n        </div>\n\n        <div (click)=\"filtroRapido()\">\n          <img height=\"20px\" src=\"assets/Images/visualizar.svg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div [ngClass]=\"'resultados' + (!showGraphic ? ' visible' : '')\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\"\n    *ngIf=\"!showGraphic\">\n    <div>\n      <div>\n        RESULTADOS\n      </div>\n      <div>\n        <img [style.margin-right]=\"'15px'\" height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/cobros/graficaminigris.svg\"\n          alt=\"\" (click)=\"showGraphicPanel()\">\n        <img height=\"20px\" width=\"20px\" src=\"assets/Images/exportar.svg\" alt=\"\" (click)=\"download()\">\n      </div>\n    </div>\n    <div>\n      <div>\n        <div [style.min-width]=\"'30px'\">#</div>\n        <div [style.min-width]=\"'80px'\">Fecha</div>\n        <div [style.min-width]=\"'150px'\">Cliente</div>\n        <div [style.min-width]=\"'80px'\">Cobrador</div>\n        <div [style.min-width]=\"'80px'\">Nota de crédito</div>\n        <div [style.min-width]=\"'40px'\">XML</div>\n        <div [style.min-width]=\"'80px'\">Facturó</div>\n        <div [style.min-width]=\"'80px'\">Monto</div>\n        <div [style.min-width]=\"'80px'\">Factura</div>\n        <div [style.min-width]=\"'80px'\">Pedido interno</div>\n        <div [style.min-width]=\"'80px'\">Estado</div>\n        <div [style.min-width]=\"'80px'\">Factura destino</div>\n        <div [style.min-width]=\"'10px'\"></div>\n      </div>\n      <div>\n        <div *ngFor=\"let item of lstNotasCredito; let i = index\">\n          <div [style.min-width]=\"'30px'\">{{i + 1}}</div>\n          <div [style.min-width]=\"'80px'\">{{item.fecha | dateFormatSlash}}</div>\n          <div [style.min-width]=\"'150px'\">{{item.nombreCliente}}</div>\n          <div [style.min-width]=\"'80px'\">\n            <!-- <span *ngIf=\"item.hora != null\">{{item.hora}}</span>\n            <span *ngIf=\"item.hora == null\">NA</span> -->\n            {{item.cobrador}}\n          </div>\n          <div [style.min-width]=\"'80px'\" class=\"normalVerde\" style=\" color: #008895;\">\n            <!-- <span *ngIf=\"item.tipoChecada != null\">{{item.tipoChecada}}</span>\n            <span *ngIf=\"item.tipoChecada == null\">NA</span> -->\n            <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/NotaCredito/'+item.fpor+'/'+item.akFolio+'.pdf')\">{{item.akFolio}}</span>\n          </div>\n          <div [style.min-width]=\"'40px'\" class=\"normalVerde\" style=\" color: #008895;\">\n            <span><a style=\" color: #008895;\" href=\"http://201.161.12.60:51725/SAP/Facturas/{{item.fpor}}/{{item.akFolio}}.xml\"\n                download>VER</a></span>\n            <!-- <span *ngIf=\"item.localidad == 'DISTRITO FEDERAL'\">PROQUIFA</span>\n            <span *ngIf=\"item.localidad == 'CUERNAVACA'\">RYNDEM</span>\n            <span *ngIf=\"item.localidad == 'GUADALAJARA'\">GUADALAJARA</span> -->\n          </div>\n          <div [style.min-width]=\"'80px'\">\n            {{item.fpor}}\n            <!-- {{item.area}} -->\n            <!-- <div>\n              <img *ngIf=\"item.area == 'OPERACIONES'\" height=\"30px\" src=\"assets/Images/gestion/consultas/asistencias/asis_flechas.svg\"\n                matTooltip=\"{{item.area}}\" />\n              <img *ngIf=\"item.area == 'SERVICIOS'\" height=\"30px\" src=\"assets/Images/gestion/consultas/asistencias/asis_mas.svg\" matTooltip=\"{{item.area}}\"\n              />\n              <img *ngIf=\"item.area == 'COMERCIALIZACION'\" height=\"30px\" src=\"assets/Images/gestion/consultas/asistencias/asis_box.svg\"\n                matTooltip=\"{{item.area}}\" />\n              <img *ngIf=\"item.area == 'FINANZAS'\" height=\"30px\" src=\"assets/Images/gestion/consultas/asistencias/asis_cal.svg\" matTooltip=\"{{item.area}}\"\n              />\n            </div> -->\n          </div>\n          <div [style.min-width]=\"'80px'\">{{item.importe | acFormatMoney}}</div>\n          <div [style.min-width]=\"'80px'\" class=\"normalVerde\" style=\" color: #008895;\">\n            <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/'+item.fpor+'/'+item.factura+'.pdf')\" *ngIf=\"item.factura !== 0\">{{item.factura}}</span>\n            <span *ngIf=\"item.factura === 0\" style=\"color: black;\">NA</span>\n          </div>\n          <div [style.min-width]=\"'80px'\" class=\"normalVerde\" style=\" color: #008895;\">\n            <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pedidos/'+item.cpedido+'.pdf')\" *ngIf=\"item.cpedido !== null\">{{item.cpedido}}</span>\n            <span *ngIf=\"item.cpedido === null\" style=\"color: black;\">NA</span>\n            <!-- <div>\n              <div [ngClass]=\"item.incidencia == 'NINGUNA'?'circleGreen':item.incidencia == 'RETARDO' || item.incidencia == 'FUERA DE TIEMPO'?'circleYellow':'circleRed'\"></div>\n              <span *ngIf=\"item.incidencia != 'NINGUNA' && item.incidencia != 'FALTA'\">{{item.incidencia}}</span>\n              <span *ngIf=\"item.incidencia == 'FALTA'\">FALTÓ</span>\n              <span *ngIf=\"item.incidencia == 'NINGUNA'\">ASISTIÓ</span>\n            </div> -->\n          </div>\n          <div [style.min-width]=\"'80px'\">{{ item.estado }}</div>\n          <div [style.min-width]=\"'80px'\" class=\"normalVerde\" style=\" color: #008895;\">\n            <span *ngIf=\"item.facturaDestino === 0\" style=\" color: black;\">NA</span>\n            <span *ngIf=\"item.facturaDestino !== 0\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/'+item.fpor+'/'+item.facturaDestino+'.pdf')\" >{{ item.facturaDestino }}</span>\n          </div>\n          <div [style.min-width]=\"'10px'\"></div>\n        </div>\n      </div>\n    </div>\n    <!-- <div class=\"total\">\n      <p>Total:\n        <span>{{lstAsistencias.length}}</span>\n        <span>Registros</span>\n      </p>\n    </div> -->\n    <div class=\"total\">\n      <p>Total:\n        <span>{{lstNotasCredito.length}}</span>\n        <span>Nota<span *ngIf=\"lstNotasCredito.length != 1\">s</span>\n          de crédito</span>\n      </p>\n    </div>\n  </div>\n  <div style=\"position: relative;\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\" *ngIf=\"showGraphic\">\n    <div [ngClass]=\"'graphics-panel-container' + (showGraphic ? ' visible' : '')\" [style.top]=\"topGraphics\">\n      <div class=\"graphics-panel-option\">\n        <img src=\"assets/Images/gestion/images/tablaminigris.svg\" (click)=\"showTablePanel()\">\n      </div>\n      <div class=\"graphics-container\" *ngIf=\"refrescar\">\n        <div class=\"donut-container\" *ngFor=\"let item of graficas; let i = index\">\n          <p clasfgh jºº=b s=\"donut-title\">{{item}}</p>\n          <div id=\"asistencia-canvas\" class=\"canvas-container\">\n            <pn-donut-chart [idGrafica]=\"i+'asis'\" [data]=\"graficasValores[i]\" [tipoGrafica]=\"'General'\"></pn-donut-chart>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/gestion/consultas/nota-credito/nota-credito.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: rgba(0, 137, 149, 0.02); }\n:host > div:nth-of-type(1) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    background: #008895;\n    height: 41px;\n    color: #FFFFFF;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 12px;\n    padding: 0px 20px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n:host > div:nth-of-type(1) > div:nth-of-type(1) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-right: 20px;\n      cursor: pointer; }\n:host > div:nth-of-type(1) > div:nth-of-type(2) {\n      margin-left: 20px; }\n:host > div:nth-of-type(2) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    position: relative;\n    height: calc(100vh - 170px);\n    width: 100%;\n    overflow-x: hidden; }\n:host > div:nth-of-type(2) > .panelNormal {\n      background: #FFFFFF;\n      height: 100%;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      width: 321px;\n      min-width: 321px;\n      overflow-y: scroll; }\n:host > div:nth-of-type(2) > .panelOcultar {\n      background: #FFFFFF;\n      -webkit-animation-name: ocultarPanel;\n              animation-name: ocultarPanel;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 15px 15px; }\n:host > div:nth-of-type(2) > .panelOcultar .filtros {\n        display: none; }\n:host > div:nth-of-type(2) > .panelMostrar {\n      background: #FFFFFF;\n      -webkit-animation-name: mostar;\n              animation-name: mostar;\n      -webkit-animation-duration: 0.5s;\n              animation-duration: 0.5s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      overflow-y: scroll; }\n:host > div:nth-of-type(2) .filtroHeader {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #424242;\n      font-size: 10px;\n      margin-bottom: 20px; }\n:host > div:nth-of-type(2) .filtroHeader > .abrir {\n        cursor: pointer; }\n:host > div:nth-of-type(2) .filtroHeader > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n:host > div:nth-of-type(2) .filtroHeader > div:nth-of-type(2) > .cerrar {\n          margin-left: 9px;\n          cursor: pointer; }\n:host > div:nth-of-type(2) .filtros {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      border-top: 1px solid #424242; }\n:host > div:nth-of-type(2) .filtros > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        height: 60px;\n        border-bottom: 1px solid #ECEEF0;\n        color: #FFFFFF;\n        font-size: 14px; }\n:host > div:nth-of-type(2) .filtros > div:nth-of-type(2) > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          cursor: pointer;\n          width: 140px;\n          height: 25px;\n          margin-right: 1px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        margin-top: 15px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            width: 130px;\n            font-size: 16px;\n            color: #424242; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) > div > div {\n              margin-top: 6px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(2) {\n          border-bottom: 1px solid #424242;\n          padding-bottom: 18px;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n            margin-top: 15px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(3) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          margin-top: 18px;\n          background: #424242;\n          width: 100%;\n          height: 35px;\n          cursor: pointer; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        margin-top: 15px;\n        padding-bottom: 18px;\n        border-bottom: 1px solid #424242; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(2) > input {\n          height: 25px;\n          border: 1px solid #ECEEF0;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          margin-top: 5px; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(3) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin-top: 18px;\n        background: #424242;\n        width: 100%;\n        height: 35px;\n        cursor: pointer; }\n:host > div:nth-of-type(2) > div:nth-of-type(2) {\n      height: 100%;\n      width: 100%;\n      background: rgba(0, 137, 149, 0.02); }\n:host > div:nth-of-type(2) > .resultados {\n      z-index: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding: 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) {\n        border-bottom: 3px solid #424242;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        padding-bottom: 10px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(1) {\n          font-size: 22px; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(2) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          flex-direction: row;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(2) > img {\n            cursor: pointer;\n            height: 30px;\n            width: 30px; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        min-width: 782px;\n        width: 100%;\n        height: 100%;\n        overflow-x: scroll; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(2) > div:nth-of-type(1) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          border-bottom: 1px solid #424242;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          min-width: 1030px;\n          min-height: 57px; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(2) > div:nth-of-type(1) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            min-height: 57px;\n            max-width: 160px;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            -webkit-box-sizing: border-box;\n                    box-sizing: border-box;\n            text-align: center;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(2) > div:nth-of-type(2) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          overflow: scroll;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          min-width: 1030px; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(2) > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n            min-height: 70px;\n            border-bottom: 1px solid #C2C3C9; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(2) > div:nth-of-type(2) > div > div {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row;\n              max-width: 160px;\n              -webkit-box-align: center;\n                  -ms-flex-align: center;\n                      align-items: center;\n              font-size: 12px;\n              -webkit-box-pack: center;\n                  -ms-flex-pack: center;\n                      justify-content: center;\n              text-align: center; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-orient: vertical;\n                -webkit-box-direction: normal;\n                    -ms-flex-direction: column;\n                        flex-direction: column;\n                -webkit-box-align: center;\n                    -ms-flex-align: center;\n                        align-items: center; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div > span {\n                  margin-top: 10px; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div > .circleGreen {\n                  height: 18px;\n                  width: 18px;\n                  background-color: #91BE5F;\n                  border-radius: 50%; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div > .circleYellow {\n                  height: 18px;\n                  width: 18px;\n                  background-color: #DC931C;\n                  border-radius: 50%; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(2) > div:nth-of-type(2) > div > div > div > .circleRed {\n                  height: 18px;\n                  width: 18px;\n                  background-color: #952936;\n                  border-radius: 50%; }\n:host > div:nth-of-type(2) > .resultados > .total {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -ms-flex-line-pack: center;\n            align-content: center;\n        min-height: 30px;\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end; }\n:host > div:nth-of-type(2) .graphics-panel-container {\n      overflow: scroll;\n      position: absolute;\n      width: 100%;\n      -webkit-transition: top 600ms;\n      transition: top 600ms;\n      height: 100%;\n      opacity: 1;\n      z-index: 30;\n      background-color: #f4fcfd;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding: 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box; }\n:host > div:nth-of-type(2) .graphics-panel-container .graphics-panel-option {\n        width: 100%;\n        text-align: right; }\n:host > div:nth-of-type(2) .graphics-panel-container .graphics-panel-option img {\n          min-width: 30px;\n          min-height: 30px; }\n:host > div:nth-of-type(2) .graphics-panel-container .graphics-panel-option img:hover {\n            cursor: pointer; }\n:host > div:nth-of-type(2) .graphics-panel-container .graphics-container {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 100%;\n        height: 97%;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n:host > div:nth-of-type(2) .graphics-panel-container .graphics-container .donut-container {\n          min-width: 235px;\n          min-height: 263px;\n          width: 30%;\n          height: 50%;\n          margin: 0 10px;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-box-pack: start;\n              -ms-flex-pack: start;\n                  justify-content: flex-start;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n:host > div:nth-of-type(2) .graphics-panel-container .graphics-container .donut-container .donut-title {\n            text-align: center; }\n:host > div:nth-of-type(2) .graphics-panel-container .graphics-container .donut-container .canvas-container {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            -ms-flex-line-pack: center;\n                align-content: center;\n            width: 100%;\n            min-height: 80%;\n            max-height: 400px;\n            position: relative;\n            padding: 20px;\n            height: 100%; }\n:host .normalVerde > span {\n    cursor: pointer; }\n@-webkit-keyframes ocultarPanel {\n  from {\n    min-width: 321px; }\n  to {\n    min-width: 50px; } }\n@keyframes ocultarPanel {\n  from {\n    min-width: 321px; }\n  to {\n    min-width: 50px; } }\n@-webkit-keyframes mostar {\n  from {\n    width: 50px; }\n  to {\n    width: 321px; } }\n@keyframes mostar {\n  from {\n    width: 50px; }\n  to {\n    width: 321px; } }\n:host #chart {\n    width: 100%;\n    height: 100%; }\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/nota-credito/nota-credito.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotaCreditoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_filter_element_model__ = __webpack_require__("./src/app/components/shared/filter/element.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_UtilFechas__ = __webpack_require__("./src/app/class/UtilFechas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_gestion_consulta_nota_credito_nota_credito_service__ = __webpack_require__("./src/app/services/gestion/consulta/nota-credito/nota-credito.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_gestion_gestion_service__ = __webpack_require__("./src/app/services/gestion/gestion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var NotaCreditoComponent = /** @class */ (function () {
    function NotaCreditoComponent(router, coreComponent, _gestionService, _notaCreditoService) {
        var _this = this;
        this.router = router;
        this.coreComponent = coreComponent;
        this._gestionService = _gestionService;
        this._notaCreditoService = _notaCreditoService;
        this.lstNotasCredito = [];
        // Filtro
        this.isThereData = false;
        this.IsImage = true;
        this.IsDate = true;
        this.Clear = true;
        this.avanzada = true;
        // Filtro busqueda Rapida
        this.filtroConsultaRapida = 'Nota';
        this.lstRadiosRapida = ['Nota de Crédito', 'Pedido Interno'];
        this.defaultSelected = { nombre: '- - Todos - -' };
        this.dropClientes = [{ nombre: '--TODOS--', key: 0 }];
        this.dropCobrador = [{ nombre: '--TODOS--', key: 0 }];
        this.dropFacturo = [
            { nombre: '--TODOS--', key: 0 },
            { nombre: 'Proveedora', key: 1 },
            { nombre: 'Proquifa', key: 2 },
            { nombre: 'Pharma', key: 3 },
            { nombre: 'Golocaer', key: 4 },
            { nombre: 'Mungen', key: 5 }
        ];
        this.dropEstado = [
            { nombre: '--TODOS--', key: 0 },
            { nombre: 'APLICADA', key: 1 },
            { nombre: 'POR APLICAR', key: 2 }
        ];
        this.hiddenClose = true;
        this.classPanel = 'panelNormal';
        this.topGraphics = '-110%';
        this.refrescar = true;
        // Consulta
        this.parametros = new __WEBPACK_IMPORTED_MODULE_6__class_Parametros_class__["a" /* Parametros */]();
        // Gráficas dona
        this.clientes = [];
        this.facturo = [];
        this.estado = [];
        this.lstGraficaClientes = [];
        this.lstGraficaFacturo = [];
        this.lstGraficaFacturoClientes = [];
        this.lstGraficaEstado = [];
        this.showGraphic = false;
        this.graficasCargadas = false;
        this.graficasValores = [];
        this.graficas = [];
        this.lstEmpresasConsultaActual = [];
        this.lstFacturoConsultaActual = [];
        // CSV
        this._utilFechas = new __WEBPACK_IMPORTED_MODULE_4__class_UtilFechas__["a" /* UtilFechas */]();
        this.Llenar = function () {
            _this.Elements = [
                new __WEBPACK_IMPORTED_MODULE_1__shared_filter_element_model__["a" /* ElementFilter */]('string', 'Cliente', _this.dropClientes, true),
                new __WEBPACK_IMPORTED_MODULE_1__shared_filter_element_model__["a" /* ElementFilter */]('string', 'Cobrador', _this.dropCobrador, true),
                new __WEBPACK_IMPORTED_MODULE_1__shared_filter_element_model__["a" /* ElementFilter */]('string', 'Facturó', _this.dropFacturo, true),
                new __WEBPACK_IMPORTED_MODULE_1__shared_filter_element_model__["a" /* ElementFilter */]('string', 'Estado', _this.dropEstado, true),
            ];
            _this.isThereData = true;
            _this.Clear = false;
        };
    }
    NotaCreditoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filtroForm = new __WEBPACK_IMPORTED_MODULE_9__angular_forms__["d" /* FormGroup */]({
            filtroDato: new __WEBPACK_IMPORTED_MODULE_9__angular_forms__["c" /* FormControl */]()
        });
        this.parametros.fechaInicio = new Date();
        this.parametros.fechaFin = new Date();
        this.parametros.idCliente = 0;
        this.parametros.cobrador = 0;
        this.parametros.fpor = '';
        this.parametros.estado = '';
        this.parametros.idUsuarioLogueado = 91;
        this.coreComponent.openModal(0);
        this._gestionService.dropClientes().subscribe(function (data) {
            var lstAux = [];
            for (var _i = 0, _a = data.current; _i < _a.length; _i++) {
                var item = _a[_i];
                lstAux.push({ nombre: item.valor, key: item.llave });
            }
            _this.dropClientes = _this.dropClientes.concat(lstAux);
            _this._gestionService.dropCobrador().subscribe(function (data) {
                var lstAux = [];
                for (var _i = 0, _a = data.current; _i < _a.length; _i++) {
                    var item = _a[_i];
                    lstAux.push({ nombre: item.usuario, key: item.idEmpleado });
                }
                _this.dropCobrador = _this.dropCobrador.concat(lstAux);
                _this.Llenar();
                _this._notaCreditoService.getNotaCreditoAvanzada(_this.parametros).subscribe(function (data) {
                    // console.log('ahora', data.current);
                    if (data.current !== undefined) {
                        _this.lstNotasCredito = data.current;
                        console.log('Datos: ', data.current);
                        // this.lstLlamadas = data.current;
                        // this.getEmpresasConsultaActual(data.current);
                        // console.log('lstLlamadas: ', this.lstLlamadas);
                        _this.getNotaCreditoUnion();
                        _this.coreComponent.closeModal(0);
                    }
                }, function (error) {
                    _this.coreComponent.closeModal(0);
                });
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log('error login');
            console.log(error);
        });
    };
    // Animación de filtro
    NotaCreditoComponent.prototype.backMenu = function () {
        this.router.navigate(['protected/gestion/']);
    };
    NotaCreditoComponent.prototype.closePanel = function () {
        this.classPanel = 'panelOcultar';
        this.hiddenClose = false;
    };
    NotaCreditoComponent.prototype.openPanel = function () {
        if (!this.hiddenClose) {
            this.classPanel = 'panelMostrar';
            this.hiddenClose = true;
        }
    };
    NotaCreditoComponent.prototype.radioRapida = function ($event) {
        if ($event === 0) {
            this.filtroConsultaRapida = 'Nota';
        }
        else if ($event === 1) {
            this.filtroConsultaRapida = 'Pedido';
        }
    };
    NotaCreditoComponent.prototype.filtroAvanzada = function () {
        if (!this.avanzada) {
            this.avanzada = true;
            this.filtroConsultaRapida = 'Nota';
            this.filtroForm = new __WEBPACK_IMPORTED_MODULE_9__angular_forms__["d" /* FormGroup */]({
                filtroDato: new __WEBPACK_IMPORTED_MODULE_9__angular_forms__["c" /* FormControl */]()
            });
        }
    };
    NotaCreditoComponent.prototype.filtroRapida = function () {
        if (this.avanzada) {
            this.avanzada = false;
        }
    };
    NotaCreditoComponent.prototype.filtroRapido = function () {
        if (this.filtroForm.get('filtroDato').value !== null) {
            // console.log(this.filtroForm.get('filtroDato').value);
            // console.log("tiene valor");
            if (this.filtroConsultaRapida === 'Nota') {
                console.log('Es nota');
                this.parametros.folioNota = this.filtroForm.get('filtroDato').value;
                this.listarNotasCreditoRapida();
            }
            else {
                console.log('es Pedido');
                this.parametros.folioNota = 0;
                this.parametros.cPedido = this.filtroForm.get('filtroDato').value;
                this.listarNotasCreditoRapida();
            }
        }
        else {
            // console.log('Valor nulo');
            // console.log(this.filtroForm.get('filtroDato').value);
        }
    };
    NotaCreditoComponent.prototype.mostrarDatos = function ($event) {
        console.log($event);
        console.log('mostrarDatos');
        this.parametros.fechaInicio = $event.Fechas.fechaInicial;
        this.parametros.fechaFin = $event.Fechas.fechaFinal;
        this.parametros.idCliente = $event.Datos[0].key;
        this.parametros.cobrador = $event.Datos[1].key;
        if ($event.Datos[2].nombre === '--TODOS--') {
            this.parametros.fpor = '';
        }
        else {
            this.parametros.fpor = $event.Datos[2].nombre;
        }
        if ($event.Datos[3].nombre === '--TODOS--') {
            this.parametros.estado = '';
        }
        else {
            this.parametros.estado = $event.Datos[3].nombre;
        }
        this.parametros.idUsuarioLogueado = 91;
        this.listarNotasCredito();
        // this.getNotaCreditoUnion(this.parametros);
    };
    NotaCreditoComponent.prototype.listarNotasCreditoRapida = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        this._notaCreditoService.getNotaCreditoRapida(this.parametros).subscribe(function (data) {
            if (data.current !== undefined) {
                _this.lstNotasCredito = data.current;
                console.log('Datos: ', data.current);
                _this.getEmpresasConsultaActual(data.current);
                // this.lstLlamadas = data.current;
                // this.getEmpresasConsultaActual(data.current);
                // console.log('lstLlamadas: ', this.lstLlamadas);
                _this.coreComponent.closeModal(0);
                _this.getNotaCreditoUnionRapida();
            }
        });
    };
    NotaCreditoComponent.prototype.listarNotasCredito = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        this._notaCreditoService.getNotaCreditoAvanzada(this.parametros).subscribe(function (data) {
            // console.log('ahora', data.current);
            if (data.current !== undefined) {
                _this.lstNotasCredito = data.current;
                console.log('Datos: ', data.current);
                _this.getEmpresasConsultaActual(data.current);
                // this.lstLlamadas = data.current;
                // this.getEmpresasConsultaActual(data.current);
                // console.log('lstLlamadas: ', this.lstLlamadas);
                _this.coreComponent.closeModal(0);
                _this.getNotaCreditoUnion();
            }
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    NotaCreditoComponent.prototype.descargarPDF = function (archivo) {
        console.log(archivo);
        // const { remote } = require('electron');
        // const { BrowserWindow } = remote;
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 800, height: 600 });
        PDFWindow.addSupport(newWin);
        newWin.loadURL(archivo);
    };
    NotaCreditoComponent.prototype.getNotaCreditoUnionRapida = function () {
        var _this = this;
        this.refrescar = false;
        this._notaCreditoService.getNotaCreditoRapida(this.parametros).subscribe(function (data) {
            _this.graficasCargadas = false;
            _this.limpiarVariablesGrafica();
            _this.calcularDatosParaGraficas();
            _this.graficasValores = [
                _this.clientes,
                _this.facturo,
                _this.estado
            ];
            _this.graficas = [];
            // Titulos de Gráficas
            _this.graficas = [
                'Clientes',
                'Facturó',
                'Estado'
                // "Categoría"
            ];
            _this.refrescar = true;
        }, function (error) {
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
    };
    NotaCreditoComponent.prototype.getNotaCreditoUnion = function () {
        var _this = this;
        this.refrescar = false;
        this._notaCreditoService.getNotaCreditoAvanzada(this.parametros).subscribe(function (data) {
            _this.graficasCargadas = false;
            _this.limpiarVariablesGrafica();
            // setTimeout(() => { this.calcularDatosParaGraficas() }, 4000);
            _this.calcularDatosParaGraficas();
            console.log('siguio');
            _this.graficasValores = [
                _this.clientes,
                _this.facturo,
                _this.estado
            ];
            _this.graficas = [];
            // Titulos de Gráficas
            _this.graficas = [
                'Clientes',
                'Facturó',
                'Estado'
                // "Categoría"
            ];
            _this.refrescar = true;
        }, function (error) {
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
    };
    NotaCreditoComponent.prototype.limpiarVariablesGrafica = function () {
        this.lstGraficaClientes = [];
        this.lstGraficaFacturo = [];
        this.lstGraficaFacturoClientes = [];
        this.lstGraficaEstado = [];
        this.clientes = [];
        this.facturo = [];
        this.estado = [];
        // Clientes
        var lstValoresClientes = [];
        this.lstEmpresasConsultaActual.forEach(function (temp) {
            lstValoresClientes.push(0);
        });
        var lstValuesExtrasHoverClientes = [];
        this.lstEmpresasConsultaActual.forEach(function (temp) {
            lstValuesExtrasHoverClientes.push([0, 0, 0, 0]);
        });
        // Facturo
        var lstValoresFacturo = [];
        this.lstFacturoConsultaActual.forEach(function (temp) {
            lstValoresFacturo.push(0);
        });
        var lstValuesExtrasHoverFacturo = [];
        this.lstFacturoConsultaActual.forEach(function (temp) {
            lstValuesExtrasHoverFacturo.push([0, 0, 0, 0]);
        });
        this.clientes = {
            titulo: 'Totales',
            labels: this.lstEmpresasConsultaActual,
            valores: lstValoresClientes,
            labelsExtras: ['Notas de Crédito', 'Monto', 'Clientes', 'Facturas'],
            labelsExtrasHover: ['Notas de Crédito', 'Monto', 'Clientes', 'Facturas'],
            valuesExtras: [0, 0, 0, 0],
            valuesExtrasHover: lstValuesExtrasHoverClientes
        };
        this.facturo = {
            titulo: 'Totales',
            labels: this.lstFacturoConsultaActual,
            valores: lstValoresFacturo,
            labelsExtras: ['Notas de Crédito', 'Monto', 'Clientes', 'Facturas'],
            labelsExtrasHover: ['Notas de Crédito', 'Monto', 'Clientes', 'Facturas'],
            valuesExtras: [0, 0, 0, 0],
            valuesExtrasHover: lstValuesExtrasHoverFacturo
        };
        this.estado = {
            titulo: 'Totales',
            labels: ['APLICADA', 'POR APLICAR'],
            valores: [0, 0],
            labelsExtras: ['Notas de Crédito', 'Monto', 'Clientes', 'Facturas'],
            labelsExtrasHover: ['Notas de Crédito', 'Monto', 'Clientes', 'Facturas'],
            valuesExtras: [0, 0, 0, 0],
            valuesExtrasHover: [[0, 0, 0, 0], [0, 0, 0, 0]]
        };
    };
    NotaCreditoComponent.prototype.calcularDatosParaGraficas = function () {
        for (var _i = 0, _a = this.lstNotasCredito; _i < _a.length; _i++) {
            var factura = _a[_i];
            this.llenarTotales(this.clientes, factura, 'CLIENTES');
            this.llenarTotales(this.facturo, factura, 'FACTURO');
            this.llenarTotales(this.estado, factura, 'ESTADO');
        }
        this.clientes.valuesExtras[1] = this.clientes.valuesExtras[1].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.facturo.valuesExtras[1] = this.facturo.valuesExtras[1].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.estado.valuesExtras[1] = this.estado.valuesExtras[1].toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        this.graficasCargadas = true;
    };
    NotaCreditoComponent.prototype.llenarTotales = function (total, elemento, graficaElegida) {
        switch (graficaElegida) {
            case 'CLIENTES':
                var posicion2 = this.lstEmpresasConsultaActual.indexOf(elemento.nombreCliente);
                if (this.lstGraficaClientes.indexOf(elemento.nombreCliente) === -1) {
                    this.lstGraficaClientes.push(elemento.nombreCliente);
                    total.valores[posicion2]++;
                    total.valuesExtras[2]++; // Aumento en clientes
                    total.valuesExtrasHover[posicion2][2]++; // Aumento clientes de sección
                }
                total.valuesExtras[1] += +(elemento.importe).toFixed(2); // Aumento del monto
                total.valuesExtras[0]++; // Aumento en notas de crédito
                total.valuesExtrasHover[posicion2][1] += +(elemento.importe).toFixed(2); // Aumento de monto sección
                // console.log('Importe: ', +(elemento.importe).toFixed(2));
                total.valuesExtrasHover[posicion2][0]++; // Aumento de notas de credito sección
                if (elemento.factura !== 0) {
                    total.valuesExtras[3]++; // Aumento en facturas
                    total.valuesExtrasHover[posicion2][3]++; // Aumento en facturas sección
                }
                break;
            case 'FACTURO':
                var posicion = this.lstFacturoConsultaActual.indexOf(elemento.fpor);
                if (this.lstGraficaFacturo.indexOf(elemento.fpor) === -1) {
                    this.lstGraficaFacturo.push(elemento.fpor);
                    total.valores[posicion]++;
                }
                if (this.lstGraficaFacturoClientes.indexOf(elemento.nombreCliente) === -1) {
                    this.lstGraficaFacturoClientes.push(elemento.nombreCliente);
                    total.valuesExtras[2]++; // Aumento en clientes
                    total.valuesExtrasHover[posicion][2]++; // Aumento clientes de sección
                }
                total.valuesExtras[1] += +(elemento.importe).toFixed(2); // Aumento del monto
                total.valuesExtras[0]++; // Aumento en notas de crédito
                total.valuesExtrasHover[posicion][1] += +(elemento.importe).toFixed(2); // Aumento de monto sección
                total.valuesExtrasHover[posicion][0]++; // Aumento de notas de credito sección
                if (elemento.factura !== 0) {
                    total.valuesExtras[3]++; // Aumento en facturas
                    total.valuesExtrasHover[posicion][3]++; // Aumento en facturas sección
                }
                break;
            case 'ESTADO':
                if (this.lstGraficaEstado.indexOf(elemento.nombreCliente) === -1) {
                    this.lstGraficaEstado.push(elemento.nombreCliente);
                    total.valuesExtras[2]++; // Aumento de clientes
                    if (elemento.estado === 'APLICADA') {
                        total.valuesExtrasHover[0][2]++; // Aumento de clientes sección
                    }
                    else {
                        total.valuesExtrasHover[1][2]++; // Aumento de clientes sección
                    }
                }
                total.valuesExtras[0]++; // Aumento en notas de credito
                total.valuesExtras[1] += +(elemento.importe).toFixed(2); // Aumento en monto
                if (elemento.estado === 'APLICADA') {
                    total.valores[0]++;
                    total.valuesExtrasHover[0][0]++; // Aumento en notas de crédito de sección
                    total.valuesExtrasHover[0][1] += +(elemento.importe).toFixed(2); // Aumento de monto de sección
                    if (elemento.factura !== 0) {
                        total.valuesExtras[3]++; // Aumento de facturas
                        total.valuesExtrasHover[0][3]++; // Aumento de facturas de sección
                    }
                }
                else {
                    total.valores[1]++;
                    total.valuesExtrasHover[1][0]++; // Aumento en notas de crédito de sección
                    total.valuesExtrasHover[1][1] += +(elemento.importe).toFixed(2); // Aumento de monto de sección
                    if (elemento.factura !== 0) {
                        total.valuesExtras[3]++; // Aumento de facturas
                        total.valuesExtrasHover[1][3]++; // Aumento de facturas de sección
                    }
                }
                break;
        }
    };
    NotaCreditoComponent.prototype.getEmpresasConsultaActual = function (lstTemporalEmpresas) {
        this.lstEmpresasConsultaActual = [];
        var temporalEmpresas = [];
        var tempoAux2 = [];
        if (lstTemporalEmpresas.length > 0) {
            temporalEmpresas.push(lstTemporalEmpresas[0]);
        }
        this.lstNotasCredito.forEach(function (empresaTemp) {
            var repetido = false;
            var contador = 0;
            temporalEmpresas.forEach(function (temp) {
                if (temp.nombreCliente === empresaTemp.nombreCliente) {
                    contador += 1;
                    if (contador > 0) {
                        // La empresa ya se encuentra en el arreglo
                        repetido = true;
                        // console.log('Se repitio');
                    }
                }
            });
            if (!repetido) {
                // console.log('Se agrego');
                // Inserta la empresa en el arreglo
                temporalEmpresas.push(empresaTemp);
            }
        });
        // console.log('Arreglo de empresas: ', lstEmpresasConsultaActual);
        temporalEmpresas.forEach(function (temp) {
            tempoAux2.push(temp.nombreCliente);
        });
        // Limpieza de arreglo
        this.lstEmpresasConsultaActual = [];
        this.lstEmpresasConsultaActual = tempoAux2;
        // Empresas que facturaron
        temporalEmpresas = [];
        tempoAux2 = [];
        if (lstTemporalEmpresas.length > 0) {
            temporalEmpresas.push(lstTemporalEmpresas[0]);
        }
        this.lstNotasCredito.forEach(function (empresaTemp) {
            var repetido = false;
            var contador = 0;
            temporalEmpresas.forEach(function (temp) {
                if (temp.fpor === empresaTemp.fpor) {
                    contador += 1;
                    if (contador > 0) {
                        // La empresa ya se encuentra en el arreglo
                        repetido = true;
                        // console.log('Se repitio');
                    }
                }
            });
            if (!repetido) {
                // console.log('Se agrego');
                // Inserta la empresa en el arreglo
                temporalEmpresas.push(empresaTemp);
            }
        });
        // console.log('Arreglo de empresas: ', lstEmpresasConsultaActual);
        temporalEmpresas.forEach(function (temp) {
            tempoAux2.push(temp.fpor);
        });
        this.lstFacturoConsultaActual = [];
        this.lstFacturoConsultaActual = tempoAux2;
        // console.log('Facturo Actual: ', this.lstFacturoConsultaActual);
    };
    NotaCreditoComponent.prototype.showGraphicPanel = function () {
        var _this = this;
        this.showGraphic = true;
        setTimeout(function () { _this.topGraphics = '0'; }, 100);
        // console.log('Entro', this.showGraphic);
    };
    NotaCreditoComponent.prototype.showTablePanel = function () {
        var _this = this;
        this.topGraphics = '-110%';
        setTimeout(function () { _this.showGraphic = false; }, 300);
        // console.log(this.showGraphic);
    };
    // Función para descargar archivo
    NotaCreditoComponent.prototype.download = function () {
        var lstNotasCredito2 = [];
        // console.log(this.lstLlamadas);
        this.lstNotasCredito.forEach(function (Nota, index) {
            var temporal;
            if (Nota.cpedido !== null) {
                temporal = Nota.cpedido;
            }
            else {
                temporal = 'Pendiente';
            }
            var NotaAux = {
                '#': index + 1,
                'Fecha': "\"" + new __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(Nota.fecha) + "\"",
                'Cliente': "\"" + Nota.nombreCliente + "\"",
                'Cobrador': "\"" + Nota.cobrador + "\"",
                'Nota de crédito': "\"" + Nota.akFolio + "\"",
                'Facturó': "\"" + Nota.fpor + "\"",
                'Monto': "\"" + "$" + Nota.importe.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "\"",
                'Factura': "\"" + Nota.factura + "\"",
                'Pedido Interno': "\"" + temporal + "\"",
                'Estado': "\"" + Nota.estado + "\""
                // 'Cliente': "\"" + factura.nombre_cliente + "\"",
                // 'Razón Social': "\"" + factura.rsocial + "\"",
                // 'RFC': factura.rfc,
                // 'Factura': factura.factura,
                // 'UUID': factura.uuid,
                // 'Vendió': factura.fpor,
                // 'Sub Total M.N.': "\"" + new AccountingFormatMoney().transform(factura.importeMN) + "\"",
                // 'IVA M.N.': "\"" + new AccountingFormatMoney().transform(factura.totalivaMN) + "\"",
                // 'Total M.N.': "\"" + new AccountingFormatMoney().transform(factura.totalMN) + "\"",
                // 'Sub Total USD': "\"" + new AccountingFormatMoney().transform(factura.importe) + "\"",
                // 'IVA USD': "\"" + new AccountingFormatMoney().transform(factura.totaliva) + "\"",
                // 'Total USD': "\"" + new AccountingFormatMoney().transform(factura.total) + "\"",
                // 'Moneda': factura.moneda,
                // 'T.Cambio': "\"" + new AccountingFormatMoney().transform(factura.pdolar) + "\"",
                // 'C.Pago': factura.cpago,
                // 'F. Facturación': new dateFormatSlash().transform(factura.fecha),
                // 'Tipo': factura.tipo,
                // 'Refacturada': factura.refacturada,
                // 'Estado': factura.estado,
                // 'Fecha Cancelación': new dateFormatSlash().transform(factura.fechaCancelacion) == "Pendiente" ? "NA" : new dateFormatSlash().transform(factura.fechaCancelacion),
                // 'No. Cuenta': factura.cuentaBanco,
            };
            lstNotasCredito2.push(NotaAux);
        });
        var csvData = this.ConvertToCSV(lstNotasCredito2);
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'ConsultaNotasCredito-' + this._utilFechas.fechaDescarga(new Date()) + '.csv';
        a.click();
    };
    // Función para convertir JSON en formato CSV
    NotaCreditoComponent.prototype.ConvertToCSV = function (objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = "";
        for (var index in objArray[0]) {
            row += index + ',';
        }
        row = row.slice(0, -1);
        str += row + '\r\n';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '')
                    line += ',';
                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    };
    NotaCreditoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-nota-credito',
            template: __webpack_require__("./src/app/components/gestion/consultas/nota-credito/nota-credito.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/consultas/nota-credito/nota-credito.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_8__services_gestion_gestion_service__["a" /* GestionService */],
            __WEBPACK_IMPORTED_MODULE_7__services_gestion_consulta_nota_credito_nota_credito_service__["a" /* NotaCreditoService */]])
    ], NotaCreditoComponent);
    return NotaCreditoComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/nota-credito/nota-credito.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotaCreditoModule", function() { return NotaCreditoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_radio_button_radio_button_module__ = __webpack_require__("./src/app/components/shared/radio-button/radio-button.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_filter_filter_module__ = __webpack_require__("./src/app/components/shared/filter/filter.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nota_credito_routing_module__ = __webpack_require__("./src/app/components/gestion/consultas/nota-credito/nota-credito-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nota_credito_component__ = __webpack_require__("./src/app/components/gestion/consultas/nota-credito/nota-credito.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var NotaCreditoModule = /** @class */ (function () {
    function NotaCreditoModule() {
    }
    NotaCreditoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__nota_credito_routing_module__["a" /* NotaCreditoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_radio_button_radio_button_module__["a" /* RadioButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_filter_filter_module__["a" /* FilterModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__nota_credito_component__["a" /* NotaCreditoComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_12__nota_credito_component__["a" /* NotaCreditoComponent */]
            ]
        })
    ], NotaCreditoModule);
    return NotaCreditoModule;
}());



/***/ })

});
//# sourceMappingURL=nota-credito.module.chunk.js.map