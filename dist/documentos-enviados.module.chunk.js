webpackJsonp(["documentos-enviados.module"],{

/***/ "./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentosEnviadosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__documentos_enviados_component__ = __webpack_require__("./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DocumentosEnviadosRoutingModule = /** @class */ (function () {
    function DocumentosEnviadosRoutingModule() {
    }
    DocumentosEnviadosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__documentos_enviados_component__["a" /* DocumentosEnviadosComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], DocumentosEnviadosRoutingModule);
    return DocumentosEnviadosRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div (click)=\"backMenu()\">\n    <img height=\"22px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_190.svg\" alt=\"\">\n  </div>\n  |\n  <div>CONSULTA DE DOCUMENTOS</div>\n</div>\n<div>\n  <div [ngClass]=\"classPanel\">\n    <div class=\"filtroHeader\">\n      <div class=\"abrir\" (click)=\"openPanel()\">\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_193.svg\" alt=\"\">\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_188.svg\" alt=\"\">\n      </div>\n      <div *ngIf=\"hiddenClose\">\n        CERRAR\n        <div class=\"cerrar\" (click)=\"closePanel()\">\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"filtros\">\n      <div>\n\n      </div>\n      <div>\n        <div (click)=\"filtroAvanzada()\" [style.background]=\"avanzada?'#008895':'#C2C3C9'\">AVANZADA</div>\n        <div (click)=\"filtroRapida()\" [style.background]=\"!avanzada?'#008895':'#C2C3C9'\">RÁPIDA</div>\n      </div>\n\n      <div *ngIf=\"avanzada\" class=\"divAvanzada\">\n        <!--  Si  ya hay datos dentro del compenente se manda el < Gestion-filter/> con los datos\n              Y la propiedad IsLoader como verdadera\n            -->\n\n        <div *ngIf=\"isThereData;else loader\">\n          <gestion-filter [ElementsDropList]=\"Elements\" (valueFilter)=\"mostrarDatos($event)\" [IsImage]=\"IsImage\" [IsDate]=\"IsDate\"\n            [IsLoader]=\"isThereData\" [Clear]=\"Clear\" [istextbox]=\"istextbox\" style=\"width: 100%\"></gestion-filter>\n\n        </div>\n\n        <!--  Si  no hay datos dentro del compenente se manda el < Gestion-filter/> con solo\n              una propiedad\n              IsLoader como Falsa-->\n        <ng-template #loader>\n          <gestion-filter [IsLoader]=\"isThereData\" [Clear]=\"Clear\"></gestion-filter>\n        </ng-template>\n\n      </div>\n\n      <div *ngIf=\"!avanzada\" class=\"divRapida\">\n        <div>\n        </div>\n        <div [formGroup]=\"filtroForm\">\n          <span>Folio Documento</span>\n          <input type=\"text\" formControlName=\"filtroDato\" name=\"filtroDato\">\n        </div>\n        <div (click)=\"filtroRapido()\">\n          <img height=\"20px\" src=\"assets/Images/visualizar.svg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"resultados\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\">\n    <div>\n      <div>\n        RESULTADOS\n      </div>\n    </div>\n    <div class=\"fechafactura\">\n      <div>\n        <div [style.min-width]=\"'50px'\">#</div>\n        <div [style.min-width]=\"'150px'\">Folio</div>\n        <div [style.min-width]=\"'160px'\">Adjuntos</div>\n        <div [style.min-width]=\"'180px'\">Empresa</div>\n        <div [style.min-width]=\"'160px'\">Remitente</div>\n        <div [style.min-width]=\"'160px'\">Contacto</div>\n        <div [style.min-width]=\"'160px'\">Tipo</div>\n        <div [style.min-width]=\"'130px'\">Fecha Inicio</div>\n        <div [style.min-width]=\"'130px'\">Fecha Fin</div>\n      </div>\n      <div>\n      <div *ngFor=\"let item of lstDocumentos; let i = index\">\n          <div [style.min-width]=\"'50px'\">{{i + 1}}</div>\n          <div [style.min-width]=\"'160px'\" class=\"normalVerde\" style=\" color: #008895;\"  *ngIf=\"item.tipo=='Cotizaciones por enviar'\"> \n            <span  (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Cotizaciones/'+item.folioDocumento+'.pdf')\">{{item.folioDocumento}}</span>\n          </div>\n          <div  [style.min-width]=\"'160px'\" class=\"normalVerde\" style=\" color: #008895;\"  *ngIf=\"item.tipo=='Notificaciones por enviar'\"> \n            <span  (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos/'+item.folioDocumento+'.pdf')\">{{item.folioDocumento}}</span>\n          </div>\n          <div  [style.min-width]=\"'160px'\" class=\"normalVerde\" style=\" color: #008895;\"  *ngIf=\"item.tipo=='Factura-Proforma por enviar'\"> \n            <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos/'+item.folioDocumento+'.pdf')\">{{item.folioDocumento}}</span>\n          </div>\n          <div  [style.min-width]=\"'160px'\" class=\"normalVerde\" style=\" color: #008895;\"  *ngIf=\"item.tipo=='Pedidos por enviar'\"> \n            <span  (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos/'+item.folioDocumento+'.pdf')\">{{item.folioDocumento}}</span>\n          </div>\n          <div  [style.min-width]=\"'160px'\" class=\"normalVerde\" style=\" color: #008895;\"  *ngIf=\"item.proformaFpor=='Proquifa'\"> \n            <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Proforma/Proquifa/'+item.folioDocumento+'.pdf')\">{{item.folioDocumento}}</span>\n          </div>       \n          <div  [style.min-width]=\"'160px'\" class=\"normalVerde\" style=\" color: #008895;\"  *ngIf=\"item.proformaFpor=='Golocaer'\"> \n            <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Proforma/Golocaer/'+item.folioDocumento+'.pdf')\">{{item.folioDocumento}}</span>\n          </div>         \n          <div [style.min-width]=\"'150px'\" *ngIf=\"item.adjuntosDocumento!=''\">{{item.adjuntosDocumento}}</div>\n          <div [style.min-width]=\"'150px'\" *ngIf=\"item.adjuntosDocumento==''\">ND</div>\n          <div [style.min-width]=\"'180px'\">{{item.estado}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.origen}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.contacto}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.tipo}}</div>\n          <div [style.min-width]=\"'130px'\">{{item.finicio | dateFormatSlash}}</div>\n          <div [style.min-width]=\"'130px'\">{{item.ffin | dateFormatSlash}}</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"total\" *ngIf=\"lstDocumentos!= null\">\n      <p>Total:\n        <span>{{lstDocumentos.length}}</span>\n         <span>Documento<span *ngIf=\"lstDocumentos.length != 1\">s</span>\n          <span>Enviado<span *ngIf=\"lstDocumentos.length != 1\">s</span>\n          </span>\n        </span>\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: rgba(0, 137, 149, 0.02); }\n:host > div:nth-of-type(1) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    background: #008895;\n    height: 41px;\n    color: #FFFFFF;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 12px;\n    padding: 0px 20px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n:host > div:nth-of-type(1) > div:nth-of-type(1) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-right: 20px;\n      cursor: pointer; }\n:host > div:nth-of-type(1) > div:nth-of-type(2) {\n      margin-left: 20px; }\n:host > div:nth-of-type(2) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    height: calc(100vh - 170px);\n    width: 100%; }\n:host > div:nth-of-type(2) > .panelNormal {\n      background: #FFFFFF;\n      height: 100%;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      width: 321px;\n      min-width: 321px;\n      overflow-y: scroll; }\n:host > div:nth-of-type(2) > .panelOcultar {\n      background: #FFFFFF;\n      -webkit-animation-name: ocultarPanel;\n              animation-name: ocultarPanel;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 15px 15px; }\n:host > div:nth-of-type(2) > .panelOcultar .filtros {\n        display: none; }\n:host > div:nth-of-type(2) > .panelMostrar {\n      background: #FFFFFF;\n      -webkit-animation-name: mostar;\n              animation-name: mostar;\n      -webkit-animation-duration: 0.5s;\n              animation-duration: 0.5s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      overflow-y: scroll; }\n:host > div:nth-of-type(2) .filtroHeader {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #424242;\n      font-size: 10px;\n      margin-bottom: 20px; }\n:host > div:nth-of-type(2) .filtroHeader > .abrir {\n        cursor: pointer; }\n:host > div:nth-of-type(2) .filtroHeader > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n:host > div:nth-of-type(2) .filtroHeader > div:nth-of-type(2) > .cerrar {\n          margin-left: 9px;\n          cursor: pointer; }\n:host > div:nth-of-type(2) .filtros {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      border-top: 1px solid #424242; }\n:host > div:nth-of-type(2) .filtros > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        height: 60px;\n        border-bottom: 1px solid #ECEEF0;\n        color: #FFFFFF;\n        font-size: 14px; }\n:host > div:nth-of-type(2) .filtros > div:nth-of-type(2) > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          cursor: pointer;\n          width: 140px;\n          height: 25px;\n          margin-right: 1px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        margin-top: 15px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            width: 130px;\n            font-size: 16px;\n            color: #424242; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) > div > div {\n              margin-top: 6px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(2) {\n          border-bottom: 1px solid #424242;\n          padding-bottom: 18px;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n            margin-top: 15px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(3) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          margin-top: 18px;\n          background: #424242;\n          width: 100%;\n          height: 35px;\n          cursor: pointer; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        margin-top: 15px;\n        padding-bottom: 18px;\n        border-bottom: 1px solid #424242; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(2) > input {\n          height: 25px;\n          border: 1px solid #ECEEF0;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          margin-top: 5px; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(3) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin-top: 18px;\n        background: #424242;\n        width: 100%;\n        height: 35px;\n        cursor: pointer; }\n:host > div:nth-of-type(2) > div:nth-of-type(2) {\n      height: 100%;\n      width: 100%;\n      background: rgba(0, 137, 149, 0.02); }\n:host > div:nth-of-type(2) > .resultados {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding: 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) {\n        border-bottom: 3px solid #424242;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        padding-bottom: 10px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(1) {\n          font-size: 22px; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(2) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          flex-direction: row-reverse;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(2) > img {\n            cursor: pointer;\n            height: 30px;\n            width: 30px; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        min-width: 655px;\n        width: 100%;\n        height: 100%;\n        overflow-x: scroll; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(2) > div:nth-of-type(1) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          border-bottom: 1px solid #424242;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          min-width: 1320px; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(2) > div:nth-of-type(1) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            height: 57px;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            -webkit-box-sizing: border-box;\n                    box-sizing: border-box; }\n:host .fechafactura {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow-x: scroll; }\n:host .fechafactura > div:nth-of-type(1) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      border-bottom: 1px solid #424242;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 1320px;\n      min-height: 57px; }\n:host .fechafactura > div:nth-of-type(1) > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        min-height: 57px;\n        max-width: 160px;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        text-align: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n:host .fechafactura > div:nth-of-type(2) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      overflow: scroll;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 1320px; }\n:host .fechafactura > div:nth-of-type(2) > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        min-height: 70px;\n        border-bottom: 1px solid #C2C3C9; }\n:host .fechafactura > div:nth-of-type(2) > div > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          max-width: 160px;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          font-size: 12px;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          text-align: center; }\n:host .normalVerde {\n    font-size: 16px;\n    font-weight: 200;\n    margin-bottom: 25px;\n    color: #008895;\n    text-align: center;\n    height: 72px; }\n:host .normalVerde > span {\n      cursor: pointer; }\n:host .total {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    min-height: 30px;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n@-webkit-keyframes ocultarPanel {\n  from {\n    min-width: 321px; }\n  to {\n    min-width: 50px; } }\n@keyframes ocultarPanel {\n  from {\n    min-width: 321px; }\n  to {\n    min-width: 50px; } }\n@-webkit-keyframes mostar {\n  from {\n    width: 50px; }\n  to {\n    width: 321px; } }\n@keyframes mostar {\n  from {\n    width: 50px; }\n  to {\n    width: 321px; } }\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentosEnviadosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__ = __webpack_require__("./src/app/components/shared/filter/element.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_gestion_gestion_service__ = __webpack_require__("./src/app/services/gestion/gestion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_gestion_consulta_documentos_enviados_documentos_enviados_service__ = __webpack_require__("./src/app/services/gestion/consulta/documentos-enviados/documentos-enviados.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DocumentosEnviadosComponent = /** @class */ (function () {
    function DocumentosEnviadosComponent(router, _gestionService, coreComponent, _documentosEnviadosService) {
        var _this = this;
        this.router = router;
        this._gestionService = _gestionService;
        this.coreComponent = coreComponent;
        this._documentosEnviadosService = _documentosEnviadosService;
        this.filtroConsultaRapida = "Folio Documento";
        this.IsDate = true;
        this.dropClientes = [{ nombre: '--TODOS--', key: 0 }];
        this.classPanel = "panelNormal";
        this.hiddenClose = true;
        this.avanzada = true;
        this.itemsDropList = [{ nombre: '- - Todos - -' }, { nombre: 'nombre1' }, { nombre: 'nombre2' }];
        this.defaultSelected = { nombre: '- - Todos - -' };
        this.Llenar = function () {
            _this.Elements = [new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Clientes", _this.dropClientes, true),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Origen", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'BGuevara', key: 1 },
                    { nombre: 'BLozada', key: 2 },
                    { nombre: 'CEJuarez', key: 3 },
                    { nombre: 'DPeralta', key: 4 },
                    { nombre: 'FCTovar', key: 5 },
                    { nombre: 'GETorres', key: 6 },
                    { nombre: 'LHernandez', key: 7 },
                    { nombre: 'LVera', key: 8 },
                    { nombre: 'MRMoreno', key: 9 },
                    { nombre: 'MNava', key: 10 },
                    { nombre: 'MTorres', key: 11 },
                    { nombre: 'NVGomez', key: 12 },
                    { nombre: 'RThome', key: 13 },
                    { nombre: 'SVergara', key: 14 },
                    { nombre: 'YCervantes', key: 15 },
                ], false),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Tipo", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Pedidos por enviar', key: 1 },
                    { nombre: 'Cotizaciones por enviar', key: 2 },
                    { nombre: 'Proforma por enviar', key: 3 },
                    { nombre: 'Facturas por enviar', key: 4 },
                    { nombre: 'Factura-Proforma por enviar', key: 5 },
                    { nombre: 'Notificaciones por enviar', key: 6 }
                ], false),
            ];
            //isThereData indica que ya no es necesario mostrar el loader
            _this.isThereData = true;
            _this.Clear = false;
        };
        this.IsImage = true;
    }
    DocumentosEnviadosComponent.prototype.ngOnInit = function () {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        this.filtroForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            filtroDato: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
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
        this.facturaForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
        });
        this.avanzada = true;
        var cuerpo = {
            fInicio: new Date(),
            ffin: new Date(),
            destino: 0,
            origen: "",
            tipo: "",
            folioDocumento: ""
        };
        this.obtenerEnvioCorreoDocumentos(cuerpo);
    };
    DocumentosEnviadosComponent.prototype.backMenu = function () {
        this.router.navigate(["protected/gestion/"]);
    };
    DocumentosEnviadosComponent.prototype.closePanel = function () {
        this.classPanel = "panelOcultar";
        this.hiddenClose = false;
    };
    DocumentosEnviadosComponent.prototype.openPanel = function () {
        if (!this.hiddenClose) {
            this.classPanel = "panelMostrar";
            this.hiddenClose = true;
        }
    };
    DocumentosEnviadosComponent.prototype.emitItem = function ($event) {
        console.log($event);
    };
    DocumentosEnviadosComponent.prototype.mostrarDatos = function ($event) {
        if ($event.Datos[0].nombre === "--TODOS--") {
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
        }
        var cuerpo = {
            finicio: $event.Fechas.fechaInicial,
            ffin: $event.Fechas.fechaFinal,
            destino: $event.Datos[0].key,
            origen: $event.Datos[1].nombre,
            tipo: $event.Datos[2].nombre,
            folioDocumento: this.txtFactura
        };
        this.obtenerEnvioCorreoDocumentos(cuerpo);
    };
    DocumentosEnviadosComponent.prototype.filtroAvanzada = function () {
        this.avanzada = true;
        var cuerpo = {
            fInicio: new Date(),
            ffin: new Date(),
            destino: 0,
            origen: "",
            tipo: "",
            folioDocumento: ""
        };
        this.obtenerEnvioCorreoDocumentos(cuerpo);
    };
    DocumentosEnviadosComponent.prototype.obtenerEnvioCorreoDocumentos = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._documentosEnviadosService.obtenerEnvioCorreoDocumentos(parametros).subscribe(function (data) {
            _this.lstDocumentos = data.current;
            console.log(_this.lstDocumentos);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    DocumentosEnviadosComponent.prototype.filtroRapida = function () {
        this.avanzada = false;
        var cuerpo = {
            fInicio: new Date(),
            ffin: new Date(),
            destino: 0,
            origen: "",
            tipo: "",
            folioDocumento: ""
        };
        this.obtenerEnvioCorreoDocumentos(cuerpo);
    };
    DocumentosEnviadosComponent.prototype.filtroRapido = function () {
        console.log("Filtro Rápido");
        this.avanzada = false;
        if (this.filtroForm.get('filtroDato').value != "") {
            var cuerpo = {
                fInicio: "",
                ffin: "",
                destino: 0,
                origen: "",
                tipo: "",
                folioDocumento: this.filtroForm.get('filtroDato').value,
            };
            this.obtenerEnvioCorreoDocumentos(cuerpo);
        }
        else {
            var cuerpo = {
                fInicio: new Date(),
                ffin: new Date(),
                destino: 0,
                origen: "",
                tipo: "",
                folioDocumento: this.filtroForm.get('filtroDato').value,
            };
            this.obtenerEnvioCorreoDocumentos(cuerpo);
        }
    };
    DocumentosEnviadosComponent.prototype.getFechaImpl = function ($event) {
        //console.log($event);
    };
    DocumentosEnviadosComponent.prototype.dropList = function (index, $event) {
    };
    DocumentosEnviadosComponent.prototype.descargarPDF = function (archivo) {
        console.log(archivo);
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 800, height: 600 });
        PDFWindow.addSupport(newWin);
        newWin.loadURL(archivo);
    };
    DocumentosEnviadosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-documentos-enviados',
            template: __webpack_require__("./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_gestion_gestion_service__["a" /* GestionService */], __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_7__services_gestion_consulta_documentos_enviados_documentos_enviados_service__["a" /* DocumentosEnviadosService */]])
    ], DocumentosEnviadosComponent);
    return DocumentosEnviadosComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentosEnviadosModule", function() { return DocumentosEnviadosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__documentos_enviados_routing_module__ = __webpack_require__("./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__documentos_enviados_component__ = __webpack_require__("./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_filter_filter_module__ = __webpack_require__("./src/app/components/shared/filter/filter.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DocumentosEnviadosModule = /** @class */ (function () {
    function DocumentosEnviadosModule() {
    }
    DocumentosEnviadosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__documentos_enviados_routing_module__["a" /* DocumentosEnviadosRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_filter_filter_module__["a" /* FilterModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__documentos_enviados_component__["a" /* DocumentosEnviadosComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__documentos_enviados_component__["a" /* DocumentosEnviadosComponent */]
            ]
        })
    ], DocumentosEnviadosModule);
    return DocumentosEnviadosModule;
}());



/***/ })

});
//# sourceMappingURL=documentos-enviados.module.chunk.js.map