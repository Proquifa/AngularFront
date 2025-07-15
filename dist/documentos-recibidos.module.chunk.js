webpackJsonp(["documentos-recibidos.module"],{

/***/ "./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentosRecibidosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__documentos_recibidos_component__ = __webpack_require__("./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DocumentosRecibidosRoutingModule = /** @class */ (function () {
    function DocumentosRecibidosRoutingModule() {
    }
    DocumentosRecibidosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__documentos_recibidos_component__["a" /* DocumentosRecibidosComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], DocumentosRecibidosRoutingModule);
    return DocumentosRecibidosRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div (click)=\"backMenu()\">\n    <img height=\"22px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_190.svg\" alt=\"\">\n  </div>\n  |\n  <div>CONSULTA DE DOCUMENTOS</div>\n</div>\n<div>\n  <div [ngClass]=\"classPanel\">\n    <div class=\"filtroHeader\">\n      <div class=\"abrir\" (click)=\"openPanel()\">\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_193.svg\" alt=\"\">\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_188.svg\" alt=\"\">\n      </div>\n      <div *ngIf=\"hiddenClose\">\n        CERRAR\n        <div class=\"cerrar\" (click)=\"closePanel()\">\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"filtros\">\n      <div>\n\n      </div>\n      <div>\n        <div (click)=\"filtroAvanzada()\" [style.background]=\"avanzada?'#008895':'#C2C3C9'\">AVANZADA</div>\n        <div (click)=\"filtroRapida()\" [style.background]=\"!avanzada?'#008895':'#C2C3C9'\">RÁPIDA</div>\n      </div>\n\n      <div *ngIf=\"avanzada\" class=\"divAvanzada\">\n        <!--  Si  ya hay datos dentro del compenente se manda el < Gestion-filter/> con los datos\n              Y la propiedad IsLoader como verdadera\n            -->\n\n        <div *ngIf=\"isThereData;else loader\">\n          <gestion-filter [ElementsDropList]=\"Elements\" (valueFilter)=\"mostrarDatos($event)\" [IsImage]=\"IsImage\" [IsDate]=\"IsDate\"\n            [IsLoader]=\"isThereData\" [Clear]=\"Clear\" [istextbox]=\"istextbox\" style=\"width: 100%\"></gestion-filter>\n\n        </div>\n\n        <!--  Si  no hay datos dentro del compenente se manda el < Gestion-filter/> con solo\n              una propiedad\n              IsLoader como Falsa-->\n        <ng-template #loader>\n          <gestion-filter [IsLoader]=\"isThereData\" [Clear]=\"Clear\"></gestion-filter>\n        </ng-template>\n\n      </div>\n\n      <div *ngIf=\"!avanzada\" class=\"divRapida\">\n        <div>\n          <pq-radio-button [widthTotal]=\"'90px'\" [lstItems]=\"lstRadiosRapida\" [disble]=\"true\" [direction]=\"'row'\" [imgSize]=\"'12px'\"\n            (emitItem)=\"radioRapida($event)\" [width]=\"'15px'\"></pq-radio-button>\n        </div>\n        <div [formGroup]=\"filtroForm\">\n          <span>{{filtroConsultaRapida}}</span>\n          <input type=\"text\" formControlName=\"filtroDato\" name=\"filtroDato\">\n        </div>\n        <div (click)=\"filtroRapido()\">\n          <img height=\"20px\" src=\"assets/Images/visualizar.svg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"resultados\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\">\n    <div>\n      <div>\n        RESULTADOS\n      </div>\n    </div>\n    <div class=\"fechafactura\">\n      <div>\n        <div [style.min-width]=\"'40px'\">#</div>\n        <div [style.min-width]=\"'130px'\">Folio</div>\n        <div [style.min-width]=\"'110px'\">FO</div>\n        <div [style.min-width]=\"'110px'\">Tipo</div>\n        <div [style.min-width]=\"'180px'\">Empresa</div>\n        <div [style.min-width]=\"'130px'\">Destinatario</div>\n        <div [style.min-width]=\"'150px'\">Referencia</div>\n        <div [style.min-width]=\"'110px'\">Ingresó</div>\n        <div [style.min-width]=\"'130px'\">Inicio</div>\n        <div [style.min-width]=\"'130px'\"> Fin</div>\n        <div [style.min-width]=\"'130px'\"> C. Pago</div>\n        <div [style.min-width]=\"'130px'\"> Estado</div>\n      </div>\n      <div>\n      <div *ngFor=\"let item of lstDocumentos; let i = index\">\n        <div [style.min-width]=\"'40px'\">{{i +1}}</div>\n        <div [style.min-width]=\"'130px'\" class=\"normalVerde\"> \n          <span  (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos/'+item.folio+'.pdf')\">{{item.folio}}</span>\n        </div>\n        <div [style.min-width]=\"'110px'\"  *ngIf=\"item.forigen!=0\">{{item.forigen}}</div>\n        <div [style.min-width]=\"'110px'\"  *ngIf=\"item.forigen==0\">ND</div>\n        <div [style.min-width]=\"'110px'\">{{item.tipo}}</div>\n        <div [style.min-width]=\"'180px'\">{{item.nombreEmpresa}}</div>\n        <div [style.min-width]=\"'130px'\">{{item.rpor}}</div>\n        <div [style.min-width]=\"'150px'\">{{item.documentoCierre}}</div>\n        <div [style.min-width]=\"'110px'\">{{item.ingreso}}</div>\n        <div [style.min-width]=\"'130px'\">{{item.fecha | dateFormatSlash}}</div>\n        <div [style.min-width]=\"'130px'\">{{item.fechaProceso | dateFormatSlash}}</div>\n        <div [style.min-width]=\"'130px'\">{{item.cPago}}</div>\n        <div [style.min-width]=\"'130px'\"  class=\"normalVerde\"  *ngIf=\"item.cerradoAbierto=='Cerrado (C/D)'\" >\n          <span  (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Cotizaciones/'+item.documentoCierre+'.pdf')\">{{item.cerradoAbierto}}</span>\n        </div>\n        <div [style.min-width]=\"'130px'\" *ngIf=\"item.cerradoAbierto!='Cerrado (C/D)'\">{{item.cerradoAbierto}}</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"total\" *ngIf=\"lstDocumentos!= null\">\n      <p>Total:\n        <span>{{lstDocumentos.length}}</span>\n         <span>Documento<span *ngIf=\"lstDocumentos.length != 1\">s</span>\n          <span>Enviado<span *ngIf=\"lstDocumentos.length != 1\">s</span>\n          </span>\n        </span>\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: rgba(0, 137, 149, 0.02); }\n:host > div:nth-of-type(1) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    background: #008895;\n    height: 41px;\n    color: #FFFFFF;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 12px;\n    padding: 0px 20px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n:host > div:nth-of-type(1) > div:nth-of-type(1) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-right: 20px;\n      cursor: pointer; }\n:host > div:nth-of-type(1) > div:nth-of-type(2) {\n      margin-left: 20px; }\n:host > div:nth-of-type(2) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    height: calc(100vh - 170px);\n    width: 100%; }\n:host > div:nth-of-type(2) > .panelNormal {\n      background: #FFFFFF;\n      height: 100%;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      width: 321px;\n      min-width: 321px;\n      overflow-y: scroll; }\n:host > div:nth-of-type(2) > .panelOcultar {\n      background: #FFFFFF;\n      -webkit-animation-name: ocultarPanel;\n              animation-name: ocultarPanel;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 15px 15px; }\n:host > div:nth-of-type(2) > .panelOcultar .filtros {\n        display: none; }\n:host > div:nth-of-type(2) > .panelMostrar {\n      background: #FFFFFF;\n      -webkit-animation-name: mostar;\n              animation-name: mostar;\n      -webkit-animation-duration: 0.5s;\n              animation-duration: 0.5s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      overflow-y: scroll; }\n:host > div:nth-of-type(2) .filtroHeader {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #424242;\n      font-size: 10px;\n      margin-bottom: 20px; }\n:host > div:nth-of-type(2) .filtroHeader > .abrir {\n        cursor: pointer; }\n:host > div:nth-of-type(2) .filtroHeader > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n:host > div:nth-of-type(2) .filtroHeader > div:nth-of-type(2) > .cerrar {\n          margin-left: 9px;\n          cursor: pointer; }\n:host > div:nth-of-type(2) .filtros {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      border-top: 1px solid #424242; }\n:host > div:nth-of-type(2) .filtros > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        height: 60px;\n        border-bottom: 1px solid #ECEEF0;\n        color: #FFFFFF;\n        font-size: 14px; }\n:host > div:nth-of-type(2) .filtros > div:nth-of-type(2) > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          cursor: pointer;\n          width: 140px;\n          height: 25px;\n          margin-right: 1px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        margin-top: 15px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            width: 130px;\n            font-size: 16px;\n            color: #424242; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) > div > div {\n              margin-top: 6px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(2) {\n          border-bottom: 1px solid #424242;\n          padding-bottom: 18px;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n            margin-top: 15px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(3) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          margin-top: 18px;\n          background: #424242;\n          width: 100%;\n          height: 35px;\n          cursor: pointer; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        margin-top: 15px;\n        padding-bottom: 18px;\n        border-bottom: 1px solid #424242; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(2) > input {\n          height: 25px;\n          border: 1px solid #ECEEF0;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          margin-top: 5px; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(3) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin-top: 18px;\n        background: #424242;\n        width: 100%;\n        height: 35px;\n        cursor: pointer; }\n:host > div:nth-of-type(2) > div:nth-of-type(2) {\n      height: 100%;\n      width: 100%;\n      background: rgba(0, 137, 149, 0.02); }\n:host > div:nth-of-type(2) > .resultados {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding: 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) {\n        border-bottom: 3px solid #424242;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        padding-bottom: 10px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(1) {\n          font-size: 22px; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(2) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          flex-direction: row-reverse;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(2) > img {\n            cursor: pointer;\n            height: 30px;\n            width: 30px; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        min-width: 655px;\n        width: 100%;\n        height: 100%;\n        overflow-x: scroll; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(2) > div:nth-of-type(1) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          border-bottom: 1px solid #424242;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          min-width: 1713px; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(2) > div:nth-of-type(1) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            height: 57px;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            -webkit-box-sizing: border-box;\n                    box-sizing: border-box; }\n:host .fechafactura {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow-x: scroll; }\n:host .fechafactura > div:nth-of-type(1) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      border-bottom: 1px solid #424242;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 1713px;\n      min-height: 57px; }\n:host .fechafactura > div:nth-of-type(1) > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        min-height: 57px;\n        max-width: 160px;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        text-align: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n:host .fechafactura > div:nth-of-type(2) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      overflow: scroll;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 1713px; }\n:host .fechafactura > div:nth-of-type(2) > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        min-height: 70px;\n        border-bottom: 1px solid #C2C3C9; }\n:host .fechafactura > div:nth-of-type(2) > div > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          max-width: 160px;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          font-size: 12px;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          text-align: center; }\n:host .normalVerde {\n    font-size: 16px;\n    font-weight: 200;\n    margin-bottom: 25px;\n    color: #008895;\n    text-align: center;\n    height: 72px; }\n:host .normalVerde > span {\n      cursor: pointer; }\n:host .total {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    min-height: 30px;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n@-webkit-keyframes ocultarPanel {\n  from {\n    min-width: 321px; }\n  to {\n    min-width: 50px; } }\n@keyframes ocultarPanel {\n  from {\n    min-width: 321px; }\n  to {\n    min-width: 50px; } }\n@-webkit-keyframes mostar {\n  from {\n    width: 50px; }\n  to {\n    width: 321px; } }\n@keyframes mostar {\n  from {\n    width: 50px; }\n  to {\n    width: 321px; } }\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentosRecibidosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__ = __webpack_require__("./src/app/components/shared/filter/element.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_gestion_gestion_service__ = __webpack_require__("./src/app/services/gestion/gestion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_gestion_consulta_documentos_recibidos_documentos_recibidos_service__ = __webpack_require__("./src/app/services/gestion/consulta/documentos-recibidos/documentos-recibidos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DocumentosRecibidosComponent = /** @class */ (function () {
    function DocumentosRecibidosComponent(router, _gestionService, _documentosRecibidosService, coreComponent) {
        var _this = this;
        this.router = router;
        this._gestionService = _gestionService;
        this._documentosRecibidosService = _documentosRecibidosService;
        this.coreComponent = coreComponent;
        this.filtroConsultaRapida = "Folio";
        this.lstRadiosRapida = ['Folio', 'Referencia'];
        this.IsDate = true;
        this.dropClientes = [{ nombre: '--TODOS--', key: 0 }];
        this.classPanel = "panelNormal";
        this.hiddenClose = true;
        this.avanzada = true;
        this.itemsDropList = [{ nombre: '- - Todos - -' }, { nombre: 'nombre1' }, { nombre: 'nombre2' }];
        this.defaultSelected = { nombre: '- - Todos - -' };
        this.istextbox = true;
        this.Llenar = function () {
            _this.Elements = [new __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__["a" /* ElementFilter */]("string", "Clientes", _this.dropClientes, true),
                new __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__["a" /* ElementFilter */]("string", "Destinatario", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'AHernandezM', key: 1 },
                    { nombre: 'AMaza', key: 2 },
                    { nombre: 'BArias', key: 3 },
                    { nombre: 'BEMeza', key: 4 },
                    { nombre: 'BGuevara', key: 5 },
                    { nombre: 'BLozada', key: 6 },
                    { nombre: 'CEJuarez', key: 7 },
                    { nombre: 'CLGalicia', key: 8 },
                    { nombre: 'CLozada', key: 9 },
                    { nombre: 'CMRamirez', key: 10 },
                    { nombre: 'CobranzaPQF', key: 11 },
                    { nombre: 'ComPHS-USA', key: 12 },
                    { nombre: 'CTirado', key: 13 },
                    { nombre: 'DCastaneda', key: 14 },
                    { nombre: 'DesPHS-USA', key: 15 },
                    { nombre: 'DPeralta', key: 16 },
                    { nombre: 'ernestogl', key: 17 },
                    { nombre: 'ERobledo', key: 18 },
                    { nombre: 'FCatalan', key: 19 },
                    { nombre: 'FCTovar', key: 20 },
                    { nombre: 'GAngel', key: 21 },
                    { nombre: 'GETorres', key: 22 },
                    { nombre: 'GGamaliel', key: 23 },
                    { nombre: 'GSCruz', key: 24 },
                    { nombre: 'InsPHS-USA', key: 25 },
                    { nombre: 'IPerez', key: 26 },
                    { nombre: 'JCHernandez', key: 27 },
                    { nombre: 'JHernandez', key: 28 },
                    { nombre: 'JIOlvera', key: 29 },
                    { nombre: 'JLOlivares', key: 30 },
                    { nombre: 'KBanderas', key: 31 },
                    { nombre: 'LHernandez', key: 32 },
                    { nombre: 'LMorales', key: 33 },
                    { nombre: 'LRosas', key: 34 },
                    { nombre: 'LVera', key: 35 },
                    { nombre: 'MAFlores', key: 36 },
                    { nombre: 'MensajeroE1', key: 37 },
                    { nombre: 'MensajeroE2', key: 38 },
                    { nombre: 'MensajeroGDL', key: 39 },
                    { nombre: 'MNava', key: 40 },
                    { nombre: 'MPavon', key: 41 },
                    { nombre: 'MRMoreno', key: 42 },
                    { nombre: 'msi', key: 43 },
                    { nombre: 'MTorres', key: 44 },
                    { nombre: 'NCortes', key: 45 },
                    { nombre: 'NVGomez', key: 46 },
                    { nombre: 'OCardona', key: 47 },
                    { nombre: 'ONRamirez', key: 48 },
                    { nombre: 'PLozada', key: 49 },
                    { nombre: 'PMendez', key: 50 },
                    { nombre: 'RH', key: 51 },
                    { nombre: 'RRosas', key: 52 },
                    { nombre: 'RThome', key: 53 },
                    { nombre: 'SIAvalos', key: 54 },
                    { nombre: 'SLeyva', key: 55 },
                    { nombre: 'SVergara', key: 56 },
                    { nombre: 'VGonzalez', key: 57 },
                    { nombre: 'XMaya', key: 58 },
                    { nombre: 'YCervantes', key: 59 },
                    { nombre: 'YMunoz', key: 60 },
                ], true),
                new __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__["a" /* ElementFilter */]("string", "Tipo", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Otros', key: 1 },
                    { nombre: 'Pago', key: 2 },
                    { nombre: 'Pedido', key: 3 },
                    { nombre: 'Requisición', key: 4 },
                ], true),
                new __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__["a" /* ElementFilter */]("string", "Estado", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Abierto', key: 1 },
                    { nombre: 'Cerrado', key: 2 },
                ], true),
            ];
            //isThereData indica que ya no es necesario mostrar el loader
            _this.isThereData = true;
            _this.Clear = false;
        };
        this.IsImage = true;
    }
    DocumentosRecibidosComponent.prototype.ngOnInit = function () {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        this.filtroForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormGroup */]({
            filtroDato: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]()
        });
        this.date = new Date();
        this.date2 = new Date();
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
        this.facturaForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]()
        });
        this.avanzada = true;
        var cuerpo = {
            finicio: new Date(),
            ffin: new Date(),
            empresa: "--TODOS--",
            referencia: "",
            destinatario: "--TODOS--",
            tipo: "--TODOS--",
            abiertoCerrado: "--TODOS--",
            cPago: ""
        };
        this.buscarDocumentosXBA(cuerpo);
    };
    DocumentosRecibidosComponent.prototype.buscarDocumentosXBA = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._documentosRecibidosService.buscarDocumentosXBA(parametros).subscribe(function (data) {
            _this.lstDocumentos = data.current;
            console.log(_this.lstDocumentos);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    DocumentosRecibidosComponent.prototype.buscarDocumentoRecibidoPorFolio = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._documentosRecibidosService.buscarDocumentoRecibidoPorFolio(parametros).subscribe(function (data) {
            _this.lstDocumentos = data.current;
            console.log(_this.lstDocumentos);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    DocumentosRecibidosComponent.prototype.mostrarDatos = function ($event) {
        if ($event.Datos[0].key === 0) {
            $event.Datos[0].key = "--TODOS--";
        }
        /* if ($event.Datos[0].nombre === "--TODOS--") {
             $event.Datos[0].key = 0;
           }
            
            if ($event.Datos[0].key === 0) {
             $event.Datos[0].nombre = "--TODOS--";
           }
           if ($event.Datos[1].nombre === "--TODOS--") {
             $event.Datos[1].nombre = "";
           }
           if ($event.Datos[2].nombre === "--TODOS--") {
             $event.Datos[2].nombre = "";
           }*/
        var cuerpo = {
            finicio: $event.Fechas.fechaInicial,
            ffin: $event.Fechas.fechaFinal,
            empresa: $event.Datos[0].key,
            referencia: $event.textbox,
            destinatario: $event.Datos[1].nombre,
            tipo: $event.Datos[2].nombre,
            abiertoCerrado: $event.Datos[3].nombre,
            cPago: ""
        };
        this.buscarDocumentosXBA(cuerpo);
    };
    DocumentosRecibidosComponent.prototype.radioRapida = function ($event) {
        console.log("Método radioRapida ");
        if ($event == 0) {
            this.filtroConsultaRapida = "Folio";
        }
        else if ($event == 1) {
            this.filtroConsultaRapida = "Referencia";
        }
    };
    DocumentosRecibidosComponent.prototype.backMenu = function () {
        this.router.navigate(["protected/gestion/"]);
    };
    DocumentosRecibidosComponent.prototype.closePanel = function () {
        this.classPanel = "panelOcultar";
        this.hiddenClose = false;
    };
    DocumentosRecibidosComponent.prototype.openPanel = function () {
        if (!this.hiddenClose) {
            this.classPanel = "panelMostrar";
            this.hiddenClose = true;
        }
    };
    DocumentosRecibidosComponent.prototype.emitItem = function ($event) {
        console.log($event);
    };
    DocumentosRecibidosComponent.prototype.filtroAvanzada = function () {
        this.avanzada = true;
        var cuerpo = {
            finicio: new Date(),
            ffin: new Date(),
            empresa: "--TODOS--",
            referencia: "",
            destinatario: "--TODOS--",
            tipo: "--TODOS--",
            abiertoCerrado: "--TODOS--",
            cPago: ""
        };
        this.buscarDocumentosXBA(cuerpo);
    };
    DocumentosRecibidosComponent.prototype.filtroRapido = function () {
        console.log("Filtro rápido");
        console.log("Filtro rápido");
        if (this.filtroConsultaRapida == "Folio") {
            var cuerpo = {
                folio: (this.filtroConsultaRapida == "Folio") ? this.filtroForm.get('filtroDato').value : "",
                porFolio: true
            };
            this.buscarDocumentoRecibidoPorFolio(cuerpo);
        }
        else {
            var cuerpo = {
                finicio: new Date(),
                ffin: new Date(),
                empresa: "--TODOS--",
                referencia: (this.filtroConsultaRapida == "Referencia") ? this.filtroForm.get('filtroDato').value : "",
                destinatario: "--TODOS--",
                tipo: "--TODOS--",
                abiertoCerrado: "--TODOS--",
                cPago: ""
            };
            this.buscarDocumentosXBA(cuerpo);
        }
    };
    DocumentosRecibidosComponent.prototype.filtroRapida = function () {
        this.avanzada = false;
    };
    DocumentosRecibidosComponent.prototype.getFechaImpl = function ($event) {
        //console.log($event);
    };
    DocumentosRecibidosComponent.prototype.dropList = function (index, $event) {
    };
    DocumentosRecibidosComponent.prototype.descargarPDF = function (archivo) {
        console.log(archivo);
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 800, height: 600 });
        PDFWindow.addSupport(newWin);
        newWin.loadURL(archivo);
    };
    DocumentosRecibidosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-documentos-recibidos',
            template: __webpack_require__("./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__services_gestion_gestion_service__["a" /* GestionService */], __WEBPACK_IMPORTED_MODULE_6__services_gestion_consulta_documentos_recibidos_documentos_recibidos_service__["a" /* DocumentosRecibidosService */], __WEBPACK_IMPORTED_MODULE_7__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], DocumentosRecibidosComponent);
    return DocumentosRecibidosComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosRecibidosModule", function() { return DocumentosRecibidosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__documentos_recibidos_routing_module__ = __webpack_require__("./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__documentos_recibidos_component__ = __webpack_require__("./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__ = __webpack_require__("./src/app/components/shared/radio-button/radio-button.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_filter_filter_module__ = __webpack_require__("./src/app/components/shared/filter/filter.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DocumentosRecibidosModule = /** @class */ (function () {
    function DocumentosRecibidosModule() {
    }
    DocumentosRecibidosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__documentos_recibidos_routing_module__["a" /* DocumentosRecibidosRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__["a" /* RadioButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_filter_filter_module__["a" /* FilterModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__documentos_recibidos_component__["a" /* DocumentosRecibidosComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__documentos_recibidos_component__["a" /* DocumentosRecibidosComponent */]
            ]
        })
    ], DocumentosRecibidosModule);
    return DocumentosRecibidosModule;
}());



/***/ })

});
//# sourceMappingURL=documentos-recibidos.module.chunk.js.map