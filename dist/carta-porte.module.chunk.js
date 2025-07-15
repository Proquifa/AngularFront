webpackJsonp(["carta-porte.module"],{

/***/ "./src/app/components/carta-porte/carta-porte-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartaPorteRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carta_porte_component__ = __webpack_require__("./src/app/components/carta-porte/carta-porte.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartaPorteRoutingModule = /** @class */ (function () {
    function CartaPorteRoutingModule() {
    }
    CartaPorteRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__carta_porte_component__["a" /* CartaPorteComponent */]
                    }
                ])],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], CartaPorteRoutingModule);
    return CartaPorteRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/carta-porte/carta-porte.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"principal\">\n  <div  class=\"aux\">\n    <aside [ngClass]=\"classAsideMenu\">\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\n        <pn-menu-seccion-roles [items]=\"itemsMenu\"  style=\"width: 100%\" *ngIf=\"activeMenu\"></pn-menu-seccion-roles>\n      </div>\n    </aside>\n    <div class=\"menuAcordeon\">\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\"/>\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\"/>\n    </div>\n  </div>\n  <div class=\"area\">\n    <div class=\"contain\">\n      <div class=\"title\">\n        <label>Envíos Programados</label>\n      </div>\n      <div class=\"list\" *ngIf=\"listPendientes.length > 0\">\n       <div class=\"list-contain\">\n         <div class=\"list-senders\">\n          <div class=\"container-list\">\n            <div class=\"item\"  *ngFor=\"let pendiente of listPendientes; let i=index\">\n              <div [ngClass]=\"selected == i?'item-container-selected':'item-container'\" (click)=\"slopSelect(pendiente, i)\">\n                <div class=\"sender\">\n                  <div>\n                    <label class=\"text-bold\">{{pendiente.responsable}}</label>\n                   <!-- <label>Licencia: CD123456</label>-->\n                  </div>\n                  <div>\n                    <label class=\"text-bold\">{{pendiente.eventos}} Clientes</label>\n                    <!--<label>5 Eventos</label>-->\n                  </div>\n                </div>\n                <div class=\"destiny\">\n                  <div class=\"img\">\n                    <img src=\"./assets/Images/Indicador.svg\">\n                  </div>\n                  <div class=\"data-destiny\">\n                    <div>\n                      <label class=\"text-bold\">Origen</label>\n                      <label>PROQUIFA</label>\n                    </div>\n                    <div>\n                      <label class=\"text-bold\">Destino</label>\n                      <label>PROQUIFA</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n         </div>\n         <div *ngIf = \"!visorPdf && !visorPdfAux\" class=\"detail\">\n           <div>\n            <div class=\"transport\">\n             <div class=\"data\">\n               <label>TRANSPORTE</label>\n               <div class=\"drop\">\n                 <pn-combo-flecha-rellena class=\"combo\" [title]=\"'Seleccionar'\"  [items]=\"vehicle\"[subtitleActive]=\"false\" *ngIf=\"activeVehicle\" (valueDropList)=\"selectedOption($event, 'vehicle')\"></pn-combo-flecha-rellena>\n               </div>\n             </div>\n           </div>\n            <div class=\"transport\">\n             <div class=\"data\">\n               <label>MENSAJERO</label>\n               <div class=\"drop\">\n                 <pn-combo-flecha-rellena class=\"combo\" [title]=\"'Seleccionar'\" [items]=\"mensajeros\" [subtitleActive]=\"false\" *ngIf=\"activeMensajero\" (valueDropList)=\"selectedOption($event, 'mensajero')\"></pn-combo-flecha-rellena>\n               </div>\n             </div>\n           </div>\n            <div class=\"transport\">\n             <div class=\"data\">\n               <label>CLIENTE</label>\n               <div class=\"drop\">\n                 <pn-combo-flecha-rellena  class=\"combo\" [title]=\"'Seleccionar'\" [items]=\"clients\" [subtitleActive]=\"false\" *ngIf=\"activeClients\" (valueDropList)=\"selectedOption($event, 'client')\"></pn-combo-flecha-rellena>\n               </div>\n             </div>\n           </div>\n             <div class=\"transport\">\n               <div class=\"data\">\n                 <label>KILOMETROS RECORRIDOS</label>\n                 <div class=\"km\">\n                   <input [(ngModel)]=\"distance\" class=\"input-text\" type=\"number\" in=\"0\" oninput=\"this.value =\n                  !!this.value && Math.abs(this.value) >= 0 ? Math.abs(this.value) : null\">\n                   <label>KM</label>\n                 </div>\n               </div>\n             </div>\n           </div>\n           <div>\n             <button (click)=\"generateCartaPorte()\" [disabled]=\"!selectedClient || !selectedVehicle  || !selectedMensajero\" [ngClass]=\"selectedClient && selectedVehicle && selectedMensajero?'botonIngresar':'botonIngresar botonDisabled'\">GENERAR CARTA PORTE</button>\n           </div>\n         </div>\n         <div class=\"pdf\" *ngIf = \"visorPdf || visorPdfAux\">\n           <pq-visor-pdf *ngIf = \"visorPdf\" class=\"pdfViewer\" [urlPdf]=\"path\" ></pq-visor-pdf>\n           <pq-visor-pdf *ngIf = \"visorPdfAux\" class=\"pdfViewer\" [urlPdf]=\"path\" ></pq-visor-pdf>\n         </div>\n       </div>\n      </div>\n      <div class=\"without-data\" *ngIf=\"listPendientes.length === 0\">\n        <div>\n          <label>SIN DATOS</label>\n        </div>\n      </div>\n      </div>\n    </div>\n</div>\n<pq-alerta *ngIf=\"alert\" [alertaTxt]=\"msgAlert\" (confirmacion)=\"closeAlert()\"></pq-alerta>\n"

/***/ }),

/***/ "./src/app/components/carta-porte/carta-porte.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n.principal {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  font: 12px Roboto-Regular; }\n.aux {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background: #E6E6E6; }\n.aux .asideNormalMenu {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    -ms-flex-item-align: stretch;\n        -ms-grid-row-align: stretch;\n        align-self: stretch;\n    min-width: 181px;\n    width: 321px;\n    height: 100%;\n    overflow-y: scroll; }\n.aux .asideNormalMenu > .articulo {\n      width: 321px;\n      background-color: #E6E6E6;\n      float: left;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 auto;\n              flex: 1 0 auto;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n.aux > .asideOcultarMenu {\n    -webkit-animation-name: ocultarMenu;\n            animation-name: ocultarMenu;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-transition: 1s ease-in-out;\n    transition: 1s ease-in-out;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    min-width: 0px;\n    width: 0px; }\n.aux > .asideOcultarMenu > .articulo {\n      width: 0px; }\n.aux > .asideMostrarMenu {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    -ms-flex-item-align: stretch;\n        -ms-grid-row-align: stretch;\n        align-self: stretch;\n    -webkit-animation-name: mostrarMenu;\n            animation-name: mostrarMenu;\n    -webkit-animation-duration: 0.7s;\n            animation-duration: 0.7s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    overflow-y: scroll; }\n.aux > .asideMostrarMenu > .articulo {\n      width: 321px;\n      background-color: #E6E6E6;\n      float: left;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 auto;\n              flex: 1 0 auto;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n@-webkit-keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@-webkit-keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n@keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n.menuAcordeon {\n  position: absolute;\n  padding-top: 352px;\n  right: 0; }\n.combo {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  max-width: 250px;\n  background: #FFFFFF; }\n.area {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  overflow: auto; }\n.area > .contain {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 100%;\n    height: 100%;\n    padding: 20px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    min-width: 500px; }\n.area > .contain > .title {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 50px;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n.area > .contain > .title > label {\n        font-family: Roboto;\n        font-size: 24px; }\n.area > .contain > .list {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      height: 100%; }\n.area > .contain > .list > .list-contain {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 100%;\n        height: 100%;\n        border-top: 1px solid #A0A0A0; }\n.area > .contain > .list > .list-contain > .list-senders {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          width: 230px;\n          min-width: 230px;\n          border-right: 1px solid #A0A0A0; }\n.area > .contain > .list > .list-contain > .list-senders > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            overflow: auto;\n            -webkit-box-sizing: border-box;\n                    box-sizing: border-box;\n            width: 100%; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item {\n              width: 100%;\n              height: 135px;\n              padding: 12px;\n              -webkit-box-sizing: border-box;\n                      box-sizing: border-box; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-orient: vertical;\n                -webkit-box-direction: normal;\n                    -ms-flex-direction: column;\n                        flex-direction: column;\n                height: 100%;\n                width: 100%;\n                -webkit-box-sizing: border-box;\n                        box-sizing: border-box;\n                padding: 8px;\n                border-bottom: 1px solid #ECEEF0;\n                cursor: pointer; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container > .sender {\n                  display: -webkit-box;\n                  display: -ms-flexbox;\n                  display: flex;\n                  -webkit-box-pack: justify;\n                      -ms-flex-pack: justify;\n                          justify-content: space-between; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container > .sender > div {\n                    display: -webkit-box;\n                    display: -ms-flexbox;\n                    display: flex;\n                    -webkit-box-orient: vertical;\n                    -webkit-box-direction: normal;\n                        -ms-flex-direction: column;\n                            flex-direction: column; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container > .sender > div > label {\n                      font-size: 14px;\n                      padding-top: 3px; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container > .sender > div > .text-bold {\n                      font-family: Roboto-Bold; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container > .sender > div > .text {\n                      font-family: Roboto;\n                      color: #A0A0A0; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container > .destiny {\n                  display: -webkit-box;\n                  display: -ms-flexbox;\n                  display: flex;\n                  -webkit-box-orient: horizontal;\n                  -webkit-box-direction: normal;\n                      -ms-flex-direction: row;\n                          flex-direction: row;\n                  max-height: 90px;\n                  padding-top: 10px; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container > .destiny > .img > img {\n                    height: 100%;\n                    padding-right: 5px; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container > .destiny > .data-destiny {\n                    display: -webkit-box;\n                    display: -ms-flexbox;\n                    display: flex;\n                    -webkit-box-orient: vertical;\n                    -webkit-box-direction: normal;\n                        -ms-flex-direction: column;\n                            flex-direction: column;\n                    -webkit-box-pack: justify;\n                        -ms-flex-pack: justify;\n                            justify-content: space-between; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container > .destiny > .data-destiny > div {\n                      display: -webkit-box;\n                      display: -ms-flexbox;\n                      display: flex;\n                      -webkit-box-orient: vertical;\n                      -webkit-box-direction: normal;\n                          -ms-flex-direction: column;\n                              flex-direction: column; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container > .destiny > .data-destiny > div > .text-bold {\n                        font-size: 14px;\n                        font-family: Roboto-Bold; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container > .destiny > .data-destiny > div > .text {\n                        font-size: 14px;\n                        font-family: Roboto;\n                        color: #A0A0A0; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container-selected {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-orient: vertical;\n                -webkit-box-direction: normal;\n                    -ms-flex-direction: column;\n                        flex-direction: column;\n                border-radius: 12px;\n                height: 100%;\n                width: 100%;\n                -webkit-box-sizing: border-box;\n                        box-sizing: border-box;\n                padding: 8px;\n                -webkit-box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);\n                        box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1); }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container-selected > .sender {\n                  display: -webkit-box;\n                  display: -ms-flexbox;\n                  display: flex;\n                  -webkit-box-pack: justify;\n                      -ms-flex-pack: justify;\n                          justify-content: space-between; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container-selected > .sender > div {\n                    display: -webkit-box;\n                    display: -ms-flexbox;\n                    display: flex;\n                    -webkit-box-orient: vertical;\n                    -webkit-box-direction: normal;\n                        -ms-flex-direction: column;\n                            flex-direction: column; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container-selected > .sender > div > label {\n                      font-size: 14px;\n                      padding-top: 3px; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container-selected > .sender > div > .text-bold {\n                      font-family: Roboto-Bold; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container-selected > .sender > div > .text {\n                      font-family: Roboto;\n                      color: #A0A0A0; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container-selected > .destiny {\n                  display: -webkit-box;\n                  display: -ms-flexbox;\n                  display: flex;\n                  -webkit-box-orient: horizontal;\n                  -webkit-box-direction: normal;\n                      -ms-flex-direction: row;\n                          flex-direction: row;\n                  max-height: 90px;\n                  padding-top: 10px; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container-selected > .destiny > .img > img {\n                    height: 100%;\n                    padding-right: 5px; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container-selected > .destiny > .data-destiny {\n                    display: -webkit-box;\n                    display: -ms-flexbox;\n                    display: flex;\n                    -webkit-box-orient: vertical;\n                    -webkit-box-direction: normal;\n                        -ms-flex-direction: column;\n                            flex-direction: column;\n                    -webkit-box-pack: justify;\n                        -ms-flex-pack: justify;\n                            justify-content: space-between; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container-selected > .destiny > .data-destiny > div {\n                      display: -webkit-box;\n                      display: -ms-flexbox;\n                      display: flex;\n                      -webkit-box-orient: vertical;\n                      -webkit-box-direction: normal;\n                          -ms-flex-direction: column;\n                              flex-direction: column; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container-selected > .destiny > .data-destiny > div > .text-bold {\n                        font-size: 14px;\n                        font-family: Roboto-Bold; }\n.area > .contain > .list > .list-contain > .list-senders > div > .item > .item-container-selected > .destiny > .data-destiny > div > .text {\n                        font-size: 14px;\n                        font-family: Roboto;\n                        color: #A0A0A0; }\n.area > .contain > .list > .list-contain > .detail {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          -webkit-box-flex: 1;\n              -ms-flex: 1;\n                  flex: 1;\n          width: 100%;\n          height: 100%;\n          padding: 15px; }\n.area > .contain > .list > .list-contain > .detail > div > .transport {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            width: 100%;\n            padding: 5px; }\n.area > .contain > .list > .list-contain > .detail > div > .transport > .data {\n              width: 100%;\n              background: #E8E8E8;\n              padding: 15px;\n              max-height: 60px; }\n.area > .contain > .list > .list-contain > .detail > div .botonIngresar {\n            width: 250px;\n            height: 30px;\n            background: #008894;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            font-size: 21px;\n            cursor: pointer;\n            border: none;\n            color: #FFFFFF;\n            font-weight: bold;\n            -webkit-box-ordinal-group: 1;\n                -ms-flex-order: 0;\n                    order: 0;\n            -webkit-box-flex: 0;\n                -ms-flex: 0 1 auto;\n                    flex: 0 1 auto;\n            -ms-flex-item-align: auto;\n                align-self: auto;\n            float: right;\n            padding-left: auto; }\n.area > .contain > .list > .list-contain > .detail > div .botonDisabled {\n            background: #D5DEE2 !important; }\n.area > .contain > .without-data {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      width: 100%;\n      height: 100%;\n      padding: 15px;\n      padding-top: 1px #292929; }\n.area > .contain > .without-data > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n.area > .contain > .without-data > div > label {\n          font-size: 28px;\n          font-family: Roboto-Bold;\n          color: #B7C3CE; }\n.drop {\n  width: 307px;\n  margin-right: 20px;\n  margin-top: 5px;\n  height: 35px; }\n.number {\n  min: 0; }\n.km {\n  height: 30px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 5px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.km > label {\n    padding-left: 5px; }\n.input-text {\n  background-size: 30px;\n  height: 30px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  outline: none;\n  cursor: pointer;\n  width: 100%;\n  margin: -29px 0px;\n  min-width: 255px; }\n.pdf {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 100%;\n  height: 100%;\n  padding: 15px; }\n.pdf > .pdfViewer {\n    min-width: 450px;\n    max-width: 450px;\n    border: 20px solid #ECEEF0;\n    height: 100%;\n    width: 100%;\n    display: inline-table; }\n"

/***/ }),

/***/ "./src/app/components/carta-porte/carta-porte.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartaPorteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_carta_porte_carta_porte_service__ = __webpack_require__("./src/app/services/carta-porte/carta-porte.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartaPorteComponent = /** @class */ (function () {
    function CartaPorteComponent(router, cartaPorteServices, coreComponent) {
        this.router = router;
        this.cartaPorteServices = cartaPorteServices;
        this.coreComponent = coreComponent;
        this.classAsideMenu = 'asideNormalMenu';
        this.listPendientes = [];
        this.mensajeros = [];
        this.vehicle = [];
        this.clients = [];
        this.activeMensajero = false;
        this.activeVehicle = false;
        this.activeClients = false;
        this.selected = -1;
        this.selectedMensajero = null;
        this.selectedVehicle = null;
        this.selectedClient = null;
        this.listClient = [];
        this.visorPdf = false;
        this.visorPdfAux = false;
        this.distance = 0;
        this.alert = false;
        this.msgAlert = '';
        this.rutaGeneral = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        this.pathGeneral = this.rutaGeneral.rutaGeneral;
        this.path = null;
    }
    CartaPorteComponent.prototype.ngOnInit = function () {
        this.itemsMenu = [{ rol: 'GESTOR DE OPERACIONES', active: true,
                menu: [{ nombre: 'Asignar Ruta', tipo: 'valor', valor: 0, url: 'gestorRuta', select: false },
                    { nombre: 'Carta Porte', tipo: '', valor: 0, url: 'cartaPorte', select: true }] }];
        this.activeMenu = true;
        this.obtenerPendientes();
        this.obtenerCatMensajero();
        this.obtenerCatVehiculos();
    };
    CartaPorteComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    CartaPorteComponent.prototype.obtenerPendientes = function () {
        var _this = this;
        this.coreComponent.openModal(1);
        this.cartaPorteServices.obtenerPendientes().subscribe(function (data) {
            if (data.current !== null) {
                console.log(data.current);
                _this.listPendientes = data.current;
                _this.slopSelect(_this.listPendientes[0], 0);
            }
            _this.coreComponent.closeModal(1);
        }, function (error) {
            _this.coreComponent.closeModal(1);
            console.log("Error al recuperar los pendientes");
        });
    };
    CartaPorteComponent.prototype.obtenerCatMensajero = function () {
        var _this = this;
        this.coreComponent.openModal(1);
        this.cartaPorteServices.obtenerCatMensajeros().subscribe(function (data) {
            console.log(data.current);
            if (data.current !== null) {
                var list = data.current;
                for (var i = 0; i < list.length; i++) {
                    _this.mensajeros.push({ nombre: list[i].mensajero, key: list[i].idMensajero });
                }
                _this.activeMensajero = true;
            }
            _this.coreComponent.closeModal(1);
        }, function (error) {
            _this.coreComponent.closeModal(1);
            console.log("Error al recuperar los mensajeros");
        });
    };
    CartaPorteComponent.prototype.obtenerCatVehiculos = function () {
        var _this = this;
        this.coreComponent.openModal(1);
        this.cartaPorteServices.obtenerCatVehiculos().subscribe(function (data) {
            console.log(data.current);
            if (data.current !== null) {
                var list = data.current;
                for (var i = 0; i < list.length; i++) {
                    _this.vehicle.push({ nombre: list[i].placaVM, key: list[i].idVehiculo });
                }
                _this.activeVehicle = true;
            }
            _this.coreComponent.closeModal(1);
        }, function (error) {
            _this.coreComponent.closeModal(1);
            console.log("Error al recuperar los vehiculos");
        });
    };
    CartaPorteComponent.prototype.slopSelect = function (slop, index) {
        this.activeClients = false;
        this.selected = index;
        if (slop.folioTimbrado) {
            this.path = this.pathGeneral + 'CartaPorte/' + slop.folioTimbrado + '.pdf';
            if (!this.visorPdf) {
                this.visorPdfAux = false;
                this.visorPdf = true;
            }
            else {
                this.visorPdf = false;
                this.visorPdfAux = true;
            }
        }
        else {
            this.visorPdf = false;
            this.visorPdfAux = false;
        }
        this.getCatCLients(slop.responsable);
    };
    CartaPorteComponent.prototype.getCatCLients = function (mensajero) {
        var _this = this;
        this.coreComponent.openModal(1);
        this.cartaPorteServices.getCatClient(mensajero).subscribe(function (data) {
            console.log(data.current);
            if (data.current !== null) {
                var list = data.current;
                _this.listClient = data.current;
                for (var i = 0; i < list.length; i++) {
                    _this.clients.push({ nombre: list[i].nombre, key: i + 1 });
                }
                _this.activeClients = true;
            }
            _this.coreComponent.closeModal(1);
        }, function (error) {
            _this.coreComponent.closeModal(1);
            console.log("Error al recuperar los clientes");
        });
    };
    CartaPorteComponent.prototype.selectedOption = function (value, item) {
        debugger;
        if (item === "mensajero") {
            this.selectedMensajero = value;
        }
        else if (item === "vehicle") {
            this.selectedVehicle = value;
        }
        else if (item === "client") {
            this.selectedClient = value.nombre;
        }
    };
    CartaPorteComponent.prototype.generateCartaPorte = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        console.log("ENtre al boton");
        var cliente = this.listClient.filter(function (cliente) { return cliente.nombre === _this.selectedClient; })[0];
        console.log(cliente);
        var data = {
            "version": "4.0",
            "tipoComprobante": "T",
            "lugaqrExpedicion": "14080",
            "cliente": cliente,
            "distRecorrida": this.distance.toString(),
            "responsable": this.listPendientes[this.selected].responsable,
            "idMensajero": this.selectedMensajero.key,
            "idVehiculo": this.selectedVehicle.key
        };
        console.log(data);
        debugger;
        this.cartaPorteServices.generateCartaPorte(data).subscribe(function (data) {
            console.log(data);
            _this.alert = true;
            if (data.current > 0) {
                _this.msgAlert = 'Se Genero Correctamente';
            }
            else {
                _this.msgAlert = 'Error al Generar';
            }
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
            console.log("Erro al generar carta porte: " + error);
            _this.msgAlert = 'Error al Generar';
        });
    };
    CartaPorteComponent.prototype.closeAlert = function () {
        this.alert = false;
    };
    CartaPorteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-carta-porte',
            template: __webpack_require__("./src/app/components/carta-porte/carta-porte.component.html"),
            styles: [__webpack_require__("./src/app/components/carta-porte/carta-porte.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_carta_porte_carta_porte_service__["a" /* CartaPorteService */], __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], CartaPorteComponent);
    return CartaPorteComponent;
}());



/***/ }),

/***/ "./src/app/components/carta-porte/carta-porte.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartaPorteModule", function() { return CartaPorteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carta_porte_component__ = __webpack_require__("./src/app/components/carta-porte/carta-porte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carta_porte_routing_module__ = __webpack_require__("./src/app/components/carta-porte/carta-porte-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_combo_flecha_rellena_combo_flecha_rellena_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-rellena/combo-flecha-rellena.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_visor_pdf_visor_pdf_module__ = __webpack_require__("./src/app/components/shared/visor-pdf/visor-pdf.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_alerta_alerta_module__ = __webpack_require__("./src/app/components/shared/alerta/alerta.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CartaPorteModule = /** @class */ (function () {
    function CartaPorteModule() {
    }
    CartaPorteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__carta_porte_routing_module__["a" /* CartaPorteRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_combo_flecha_rellena_combo_flecha_rellena_module__["a" /* ComboFlechaRellenaModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_visor_pdf_visor_pdf_module__["a" /* VisorPdfModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_alerta_alerta_module__["a" /* AlertaModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__carta_porte_component__["a" /* CartaPorteComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__carta_porte_component__["a" /* CartaPorteComponent */]]
        })
    ], CartaPorteModule);
    return CartaPorteModule;
}());



/***/ })

});
//# sourceMappingURL=carta-porte.module.chunk.js.map