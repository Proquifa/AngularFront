webpackJsonp(["saldo-nota-credito.module"],{

/***/ "./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaldoNotaCreditoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__saldo_nota_credito_component__ = __webpack_require__("./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SaldoNotaCreditoRoutingModule = /** @class */ (function () {
    function SaldoNotaCreditoRoutingModule() {
    }
    SaldoNotaCreditoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__saldo_nota_credito_component__["a" /* SaldoNotaCreditoComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], SaldoNotaCreditoRoutingModule);
    return SaldoNotaCreditoRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\n  <!--Seccion de menu-->\n  <div class=\"aux\">\n    <aside [ngClass]=\"classAsideMenu\">\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\n        <pn-menu-seccion-roles [items]=\"itemsMenu\" [titulo]=\"'Direccion Operaciones'\"  style=\"width: 100%;\" *ngIf=\"activeMenu\"></pn-menu-seccion-roles>\n      </div>\n    </aside>\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n    </div>\n  </div>\n  <!--Empieza el area de trabajo-->\n  <div class=\"area\">\n    <!--Empieza la cabezera-->\n    <div class=\"cabezera\">\n      <div>\n        <div style=\"cursor: pointer;\" *ngIf=\"!vistaP\" (click)=\"regresarVistaP(true)\">\n          <img class=\"img\" src='./assets/Images/regresar.svg'/>\n        </div>\n        <label class=\"etiqueta\">NOTAS DE CRÉDITO</label>\n      </div>\n    </div>\n    <!--Empiezan los componentes-->\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 122px)'}\" *ngIf=\"vistaP\">\n      <div class=\"areaPrincipal\" *ngIf=\"vistaP\">\n        <div class=\"vistaGeneral\">\n          <div class=\"areaInformativa\">\n            <label>EMPRESAS</label>\n          </div>\n          <div class=\"botonera\">\n            <pn-botonera [lista]=\"listaEmpresas\" *ngIf=\"activeBotonera\" style=\"width: 100%;height: 100%\" (event)=\"seleccionarLista($event)\" [selectedPos]=\"selectItem\"></pn-botonera>\n          </div>\n        </div>\n        <div class=\"informacionLista\">\n          <div class=\"filtros\">\n            <div>\n              <div class=\"menu\" id=\"menuOrden\" (click)=\"abreCombo()\">\n                <div id=\"menuOrden1\">\n                </div>\n                <div id=\"menuOrden2\">\n                </div>\n                <div id=\"menuOrden3\">\n                </div>\n                <section id=\"section\">\n                  <ul class=\"listaHamburguesa\">\n                    <li (click)=\"ordenamientoFechaTramNue()\">Más Nuevas</li>\n                    <li (click)=\"ordenamientoFechaTramAnt()\">Más Antiguas</li>\n                  </ul>\n                </section>\n              </div>\n              <label id=\"menuOrdenLabel\">{{tipoOrden}}</label>\n            </div>\n            <div class=\"select\">\n              <label>Proveedor</label>\n              <pn-combo-flecha-rellena [title]=\"'Seleccionar'\"  valImg=\"flechaRellena\" style=\"display: flex;align-items: center;max-width: 233px;\" [items]=\"proveedores\" *ngIf=\"activeCombos\" [subtitleActive]=\"false\" (valueDropList)=\"filtrarEmpresa($event)\" [colorPrincipal]=\"'#424242'\"></pn-combo-flecha-rellena>\n            </div>\n            <div class=\"barraBusqueda\">\n              <div class=\"buscar\">\n                <div>\n                  <div class=\"lupa\">\n                    <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\n                  </div>\n                  <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Folio, serie\" />\n                  <div class=\"lupa\" (click)=\"buscar('')\" style=\"cursor: pointer;\">\n                    <img src=\"assets/Images/cerrar.svg\"  height=\"12px\" alt=\"buscar\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"vistaLista\">\n            <header>\n              <div  class=\"imagenesDiv\" style=\"max-width: 27px\">\n                <label>#</label>\n              </div>\n              <div>\n                <label>Empresa</label>\n              </div>\n              <div style=\"width: 20%\">\n                <label>Proveedor</label>\n              </div>\n              <div>\n                <label>Fecha</label>\n              </div>\n              <div>\n                <label>Folio Documento</label>\n              </div>\n              <div>\n                <label>Serie CFDI</label>\n              </div>\n              <div style=\"width: 13%\">\n                <label>Monto</label>\n              </div>\n              <div class=\"imagenesDiv\"></div>\n            </header>\n            <div style=\"height: 95%;width: 100%;overflow: auto;\">\n              <div class= \"lista\" style=\"display: unset;flex-direction: column\">\n                <div  *ngFor=\"let item of lista; let i = index\" style=\"display: flex;flex-direction:column;width: 100%;position: relative;\">\n                  <div [ngClass]=\"item.activePart? 'divActive': 'div'\">\n                    <div class=\"dfSelect\"></div>\n                    <div class=\"datosLst\">\n                      <div class=\"imagenesDiv\" style=\"max-width: 27px\">\n                        <label>{{i + 1}}</label>\n                      </div>\n                      <div>\n                        <span>{{item.empresa.alias}}</span>\n                      </div>\n                      <div style=\"width: 20%\">\n                        <label>{{item.proveedor.nombre}}</label>\n                      </div>\n                      <div>\n                        <span style=\"text-transform: capitalize\">{{item.ffechaDocto}}</span>\n                      </div>\n                      <div>\n                        <label (click)=\"openBrowser(item)\" class=\"linkPdf\">{{item.folio}}</label>\n                      </div>\n                      <div>\n                        <span *ngIf=\"item.serie !== null && item.serie !== ''\">{{item.serie}}</span>\n                        <span *ngIf=\"item.serie === null || item.serie === ''\">No Aplica</span>\n                      </div>\n                      <div>\n                        <label *ngIf=\"item.moneda === 'Dolares'\">{{item.monto | currency: 'USD'}} USD</label>\n                        <label *ngIf=\"item.moneda === 'Pesos'\">{{item.monto | acFormatMoney}} MXN</label>\n                        <label *ngIf=\"item.moneda === 'Libras'\">{{item.monto | acFormatMoney}} lbs</label>\n                        <label *ngIf=\"item.moneda === 'Euros'\">{{item.monto | currency: '€'}} </label>\n                        <label *ngIf=\"item.moneda === 'DlCan'\">{{item.monto | acFormatMoney}} CAD</label>\n                      </div>\n                      <div class=\"imagenesDiv\" (click)=\"eliminarSaldo(item)\">\n                        <div class=\"tooltip\">\n                          <img src=\"./assets/Images/eliminar.svg\">\n                          <span class=\"tooltiptext\">Eliminar</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <!--Empieza Lista partidas-->\n                  <!--Termina Lista partidas-->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 65px)'}\" *ngIf=\"!vistaP\">\n      <pn-generar-saldo *ngIf=\"!vistaP\" class=\"generar\" [tipoSaldo]=\"false\" (regresarVista)=\"regresarVistaP($event)\"></pn-generar-saldo>\n    </div>\n    <!--Terminan los componentes-->\n    <footer class=\"footer\" *ngIf=\"vistaP\">\n      <div class=\"datosFooter\">\n        <div class=\"dvBoton\" (click)=\"abrirNuevo()\">\n          <label>Agregar</label>\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n<pn-pop-up-saldos *ngIf=\"eliminar\" [alertaTxt]=\"mensaje\" [folio]=\"folio\" [activarBoton]=\"true\" (emit)=\"recibirValor($event)\"></pn-pop-up-saldos>\n"

/***/ }),

/***/ "./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n.padre {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n.aux {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background: #E6E6E6; }\n.aux .asideNormalMenu {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    -ms-flex-item-align: stretch;\n        -ms-grid-row-align: stretch;\n        align-self: stretch;\n    min-width: 181px;\n    width: 321px;\n    height: 100%;\n    overflow-y: scroll; }\n.aux .asideNormalMenu > .articulo {\n      width: 321px;\n      background-color: #E6E6E6;\n      float: left;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 auto;\n              flex: 1 0 auto;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 100%; }\n.aux > .asideOcultarMenu {\n    -webkit-animation-name: ocultarMenu;\n            animation-name: ocultarMenu;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-transition: 1s ease-in-out;\n    transition: 1s ease-in-out;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    min-width: 0px;\n    width: 0px; }\n.aux > .asideOcultarMenu > .articulo {\n      width: 0px; }\n.aux > .asideMostrarMenu {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    -ms-flex-item-align: stretch;\n        -ms-grid-row-align: stretch;\n        align-self: stretch;\n    -webkit-animation-name: mostrarMenu;\n            animation-name: mostrarMenu;\n    -webkit-animation-duration: 0.7s;\n            animation-duration: 0.7s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    overflow-y: scroll; }\n.aux > .asideMostrarMenu > .articulo {\n      width: 321px;\n      background-color: #E6E6E6;\n      float: left;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 auto;\n              flex: 1 0 auto;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 100%; }\n@-webkit-keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@-webkit-keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n@keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n.area {\n  width: 100%;\n  height: 100%;\n  overflow: auto; }\n.vistaLista {\n  height: 90%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 10px; }\n.cabezera {\n  width: 100%;\n  height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 13px;\n  padding-right: 13px;\n  border-bottom: 2px solid black;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n.cabezera > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.cabezera > div > .etiqueta {\n      color: #5B5B5B;\n      font-size: 25px;\n      font-family: Novecento;\n      margin-bottom: 5px;\n      font-weight: normal; }\n.areaPrincipal {\n  min-width: 1175px;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 20px 20px 20px 20px; }\n.footer {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 57px;\n  max-height: 57px;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: inherit;\n      -ms-flex-align: inherit;\n          align-items: inherit;\n  border-top: 2px solid black;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  font-size: 14px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.footer > .datosFooter {\n    padding-right: 20px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -ms-flex-item-align: auto;\n        align-self: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -ms-flex-line-pack: distribute;\n        align-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 14px; }\n.footer > .datosFooter > .dvBoton {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      width: 170px;\n      height: 31px;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      background: #008A98;\n      cursor: pointer; }\n.footer > .datosFooter > .dvBoton > label {\n        font-family: Novecento;\n        font-weight: bold;\n        font-size: 20px;\n        color: #FFFFFF;\n        text-align: left;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin-bottom: 4px;\n        cursor: pointer; }\n.generar {\n  width: 100%;\n  height: 100%; }\n.vistaGeneral {\n  width: 100%;\n  height: 115px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n.vistaGeneral > .areaInformativa {\n    height: 60px;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: start;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n.vistaGeneral > .areaInformativa > label {\n      font-family: Novecento;\n      font-weight: bold;\n      font-size: 24px;\n      color: #424242; }\n.vistaGeneral > .botonera {\n    height: 55px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n.lista {\n  width: 100%;\n  font-size: 20px;\n  padding: 15px 19px 14px 13px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  line-height: 1.3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto; }\n.lista div > .div {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    border-bottom: 1px solid #ECEEF0; }\n.lista div > .div .datosLst:hover {\n      background-color: #ECEEF0; }\n.lista div > .div .datosLst {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n      -ms-flex-item-align: auto;\n          align-self: auto;\n      padding: 5px 10px 5px 10px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n.lista div > .div .datosLst > div {\n        width: 15%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        padding-right: 5px;\n        padding-left: 5px; }\n.lista div > .div .datosLst > div > label {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 16px;\n          color: #424242;\n          text-align: center; }\n.lista div > .div .datosLst > div > span {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 16px;\n          color: #008894;\n          text-align: center; }\n.lista div > .divActual {\n    background-color: #ECEEF0;\n    -webkit-box-shadow: 0 2px 4px -3px #008895;\n            box-shadow: 0 2px 4px -3px #008895; }\n.lista div > .divActive {\n    border-bottom: 1px solid #ECEEF0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background-color: #ECEEF0;\n    width: 100%; }\n.lista div > .divActive .dfSelect {\n      background: #008895 !important;\n      width: 5px !important;\n      color: #008895; }\n.lista div > .divActive > .datosLst {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n      -ms-flex-item-align: auto;\n          align-self: auto;\n      padding: 5px 10px 5px 5px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n.lista div > .divActive > .datosLst > div {\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        padding-right: 5px;\n        padding-left: 5px;\n        width: 15%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n.lista div > .divActive > .datosLst > div > label {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 16px;\n          color: #424242;\n          text-align: center; }\n.lista div > .divActive > .datosLst > div > span {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 16px;\n          color: #008894;\n          text-align: center; }\n.imagenesDiv {\n  min-width: 25px;\n  max-width: 25px;\n  width: initial !important;\n  cursor: pointer; }\n.filtros {\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.listaPart {\n  width: 100%;\n  font-size: 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  border-bottom: 1px solid #d4d4d5;\n  border-top: 1px solid #d4d4d5; }\n.listaPart > .listaPartidas {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 100%;\n    position: relative;\n    border-bottom: 1px solid #ECEEF0;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-left: 40px;\n    padding-right: 40px; }\n.listaPart > .listaPartidas > .datosLst {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n      -ms-flex-item-align: auto;\n          align-self: auto;\n      padding: 10px 0px 10px 0px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n.listaPart > .listaPartidas > .datosLst > div {\n        width: 15%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n.listaPart > .listaPartidas > .datosLst > div > label {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 16px;\n          color: #424242;\n          text-align: left;\n          padding-left: 5px; }\n.listaPart > .listaPartidas > .datosLst > div > span {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 16px;\n          line-height: 1.5; }\n.textLimite {\n  font-size: 14px !important; }\n.partidas {\n  height: 100%;\n  background-color: #F8F8F9;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 20px 40px 20px 40px; }\n.imgEstado {\n  padding-left: 5px;\n  height: 17.5px;\n  vertical-align: text-top; }\n.labelData {\n  font-family: Roboto;\n  font-weight: 400;\n  font-size: 16px;\n  color: #424242;\n  text-align: left; }\n.spanData {\n  font-family: Roboto;\n  font-weight: 400;\n  font-size: 16px;\n  color: #008894;\n  padding-left: 5px; }\n.sinDatos {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.sinDatos > label {\n    color: #D8D9DD;\n    font-family: Novecento;\n    font-weight: bold;\n    font-size: 50px;\n    text-align: center;\n    width: 100%; }\n.informacionLista {\n  width: 100%;\n  height: calc(100% - 115px); }\n.informacionLista > .filtros {\n    height: 10%;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n.informacionLista > .filtros > div {\n      width: 20%;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n.select {\n  width: 60% !important; }\n.select > label {\n    font-family: Roboto;\n    font-weight: 400;\n    font-size: 16px;\n    color: #424242;\n    text-align: left;\n    padding-right: 10px; }\n.buscar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  height: 50px;\n  width: 100%;\n  border-style: solid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.buscar div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 90%;\n    border-radius: 102px 102px 102px 102px;\n    -moz-border-radius: 102px 102px 102px 102px;\n    -webkit-border-radius: 102px 102px 102px 102px;\n    border: 0.5px solid #BFC0C7;\n    height: 26px; }\n.buscar div div {\n      border: none;\n      border-radius: 0px 0px 0px 0px;\n      -moz-border-radius: 0px 0px 0px 0px;\n      -webkit-border-radius: 0px 0px 0px 0px;\n      border: 0px solid #000000;\n      width: 40px;\n      background: transparent;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n.buscar div .buscar-input {\n      background: transparent;\n      border-radius: 100px;\n      -moz-border-radius: 102px 102px 102px 102px;\n      border: 0px solid #000000;\n      width: 100%;\n      font-family: Helvetica;\n      font-size: 18px;\n      color: #AAA9AF;\n      outline: none;\n      padding-left: 5px; }\n.barraBusqueda {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 20% !important; }\n/******/\n.menu {\n  position: relative;\n  z-index: 4; }\n.menu:HOVER {\n  cursor: pointer; }\n.menu > div {\n  width: 20px;\n  height: 2px;\n  background: #000000;\n  margin: 5px; }\n.filtrosOrden {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\nsection {\n  position: absolute;\n  visibility: hidden;\n  height: 0; }\nsection.visible {\n  visibility: visible;\n  height: 74px;\n  overflow: auto;\n  width: 137px;\n  background: #FFFFFF;\n  z-index: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid #ECEEF0;\n  border-top: 1px solid #ECEEF0;\n  border-left: 1px solid #ECEEF0;\n  border-right: 1px solid #ECEEF0; }\n.listaHamburguesa {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 15px;\n  padding-right: 15px; }\n.listaHamburguesa > li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border-bottom: 0.5px solid #ECEEF0;\n    padding-bottom: 5px;\n    padding-top: 5px; }\n.listaHamburguesa > li:hover {\n    background-color: #ECEEF0; }\nheader {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 5%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid #242424;\n  padding-right: 10px;\n  padding-left: 10px; }\nheader > div {\n    width: 15%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-right: 5px;\n    padding-left: 5px; }\nheader > div > label {\n      font-family: Roboto;\n      font-weight: bold;\n      font-size: 15px;\n      color: #424242;\n      text-align: left; }\n.headerPart {\n  border-bottom: initial !important;\n  padding-left: 40px !important;\n  padding-right: 40px !important; }\n.headerPart > div {\n    -webkit-box-pack: initial !important;\n        -ms-flex-pack: initial !important;\n            justify-content: initial !important; }\n.headerPart > div > label {\n      color: #848387 !important;\n      font-weight: normal !important; }\n/deep/ .list {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.tooltip {\n  position: relative;\n  cursor: pointer; }\n.tooltip > .tooltiptext:before {\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-top: 6px solid #424242;\n    bottom: -6px;\n    content: \"\";\n    height: 0;\n    left: 50%;\n    margin-left: -6px;\n    position: absolute;\n    width: 0; }\n.tooltip > .tooltiptext {\n    width: 103px;\n    background-color: #424242;\n    color: #FFFFFF;\n    display: none;\n    position: absolute;\n    top: -31px;\n    right: -49px;\n    font-size: 12px;\n    font-family: Roboto;\n    padding: 5px;\n    z-index: 1;\n    text-align: center; }\n.tooltip:hover > .tooltiptext {\n    display: block;\n    opacity: 1; }\n.linkPdf:hover {\n  text-decoration: underline;\n  color: #008894 !important;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaldoNotaCreditoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_arribo_documento_arribo_documento_service__ = __webpack_require__("./src/app/services/arribo-documento/arribo-documento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_saldos_notas_saldos_favor_service__ = __webpack_require__("./src/app/services/saldos-notas/saldos-favor.service.ts");
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






var SaldoNotaCreditoComponent = /** @class */ (function () {
    function SaldoNotaCreditoComponent(core, _trabajarArribo, _serviceSaldo, comun) {
        this.core = core;
        this._trabajarArribo = _trabajarArribo;
        this._serviceSaldo = _serviceSaldo;
        this.comun = comun;
        this.listaEmpresas = [];
        this.selectItem = 0;
        this.listaFiltrado = [];
    }
    SaldoNotaCreditoComponent.prototype.ngOnInit = function () {
        this.obtenerDatos();
    };
    SaldoNotaCreditoComponent.prototype.obtenerDatos = function () {
        this.tipoOrden = 'Todos';
        this.activeCombos = false;
        this.activeMenu = false;
        this.vistaP = true;
        this.classAsideMenu = 'asideNormalMenu';
        this.usuario = __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
        this.obtenerValoresMenu(this.usuario);
        this.obetenerEmpresas();
    };
    SaldoNotaCreditoComponent.prototype.obtenerValoresMenu = function (idUsuario) {
        var _this = this;
        this.rolMaster = false;
        var roles = __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getRoles();
        this.core.openModal(1);
        this._trabajarArribo.obtenerTotales(idUsuario).subscribe(function (data) {
            for (var i = 0; i < roles.length; i++) {
                if (roles[i] === 'Comprador_Master') {
                    _this.rolMaster = true;
                }
            }
            console.log(data);
            if (_this.usuario === 'LRosas') {
                _this.itemsMenu = [
                    { rol: 'GESTOR DE COMPRAS', active: true, menu: [{ nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', disable: true, tipo: 'valor', valor: data.current.ArriboDocumentos, select: false },
                            { nombre: 'Producto a Reclamo', url: 'productoReclamo', tipo: 'valor', valor: data.current.ProductoReclamo },
                            {
                                nombre: 'Cargar Saldo a Favor',
                                tipo: '',
                                valor: 0,
                                url: 'poolVisitas',
                                disable: true,
                                subMenu: [
                                    { nombre: 'Nota de Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: true },
                                    { nombre: 'Saldo a Favor', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: false }
                                ],
                                select: false
                            }] },
                    { rol: 'GESTOR DE OPERACIONES', active: false, menu: [
                            { nombre: 'Consola de Prioridades', url: 'consolaPrioridades', tipo: 'flecha' },
                            { nombre: 'Consola de Envíos', url: 'consolaEnvio', select: false },
                            { nombre: 'Material en Stock', url: 'stock', select: false },
                            { nombre: 'Material en Destrucción', url: 'consolaDest', select: false }
                        ] }
                ];
            }
            else {
                _this.itemsMenu = [
                    { rol: 'GESTOR DE COMPRAS', active: true, menu: [
                            { nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', tipo: 'valor', valor: data.current.ArriboDocumentos, select: false },
                            { nombre: 'Producto a Reclamo', url: 'productoReclamo', tipo: 'valor', valor: data.current.ProductoReclamo },
                            {
                                nombre: 'Cargar Saldo a Favor',
                                tipo: '',
                                valor: 0,
                                url: 'poolVisitas',
                                disable: true,
                                subMenu: [
                                    { nombre: 'Nota de Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: true },
                                    { nombre: 'Saldo a Favor', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: false }
                                ],
                                select: false
                            }
                        ] }
                ];
            }
            _this.activeMenu = true;
            _this.core.closeModal(1);
        }, function (error) {
        });
    };
    SaldoNotaCreditoComponent.prototype.obetenerEmpresas = function () {
        var _this = this;
        this.activeBotonera = false;
        var obj = {
            tipo: 'Nota'
        };
        this.listaEmpresas = [];
        this.proveedores = [];
        this.core.openModal(1);
        this._serviceSaldo.obtenerLista(obj).subscribe(function (data) {
            var title;
            var listaProvee;
            var botonera = data.current['BARRAS'];
            if (data.current.TODAS !== null && data.current.TODAS !== undefined && data.current.TODAS.length > 0) {
                _this.listaUniverso = data.current.TODAS;
                _this.lista = data.current.TODAS;
                _this.listas = data.current;
                listaProvee = data.current.PROVEEDORES;
                _this.proveedores.push({ nombre: 'TODOS', key: 0 });
                for (var i = 0; i < listaProvee.length; i++) {
                    _this.proveedores.push({ nombre: listaProvee[i].proveedor.nombre, key: i + 1 });
                }
                _this.activeCombos = true;
                _this.ordenamientoFechaTramNue();
            }
            for (var i = 0; i < botonera.length; i++) {
                if (botonera[i].total > 1) {
                    title = 'Notas';
                }
                else {
                    title = 'Nota';
                }
                _this.listaEmpresas.push({ nombre: botonera[i].etiqueta, total: botonera[i].total, etiquetaTotal: title, pos: i });
            }
            _this.activeBotonera = true;
            _this.core.closeModal(1);
        }, function (error) {
            _this.core.closeModal(1);
        });
    };
    SaldoNotaCreditoComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    SaldoNotaCreditoComponent.prototype.abrirNuevo = function () {
        this.vistaP = false;
    };
    SaldoNotaCreditoComponent.prototype.regresarVistaP = function (valor) {
        this.vistaP = true;
        if (!valor) {
            this.obtenerDatos();
        }
        // this.seleccionarLista(0);
    };
    SaldoNotaCreditoComponent.prototype.seleccionarLista = function (tipo) {
        this.searchTerm = '';
        this.selectItem = tipo.pos;
        this.lista = this.listas[tipo.nombre];
        this.listaUniverso = this.listas[tipo.nombre];
        if (this.tipoFiltrado !== undefined && this.tipoFiltrado !== 'TODOS') {
            var obj = {
                nombre: this.tipoFiltrado
            };
            this.filtrarEmpresa(obj);
        }
        else {
            if (this.tipoOrden === 'Más Antiguas') {
                this.ordenamientoFechaTramAnt();
            }
            else if (this.tipoOrden === 'Más Nuevas') {
                this.ordenamientoFechaTramNue();
            }
        }
    };
    /*****/
    SaldoNotaCreditoComponent.prototype.abreCombo = function () {
        if (document.getElementById('section').className === 'visible') {
            document.getElementById('section').className = '';
        }
        else {
            document.getElementById('section').className = 'visible';
        }
    };
    SaldoNotaCreditoComponent.prototype.buscar = function (search) {
        var searchArrayAux = [];
        this.searchTerm = search;
        if (this.tipoFiltrado !== undefined && this.tipoFiltrado !== null && this.tipoFiltrado !== 'Seleccionar') {
            if (search === '') {
                this.lista = this.listaFiltrado.slice();
            }
            else {
                for (var i = 0; i < this.listaFiltrado.length; i++) {
                    if (this.listaFiltrado[i].serie !== null) {
                        if (this.listaFiltrado[i].folio.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || this.listaFiltrado[i].serie.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                            searchArrayAux.push(this.listaFiltrado[i]);
                        }
                    }
                    else {
                        if (this.listaFiltrado[i].folio.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                            searchArrayAux.push(this.listaFiltrado[i]);
                        }
                    }
                }
                this.lista = searchArrayAux;
            }
        }
        else {
            if (search === '') {
                this.lista = this.listaUniverso.slice();
            }
            else {
                for (var i = 0; i < this.listaUniverso.length; i++) {
                    if (this.listaUniverso[i].serie !== null) {
                        if (this.listaUniverso[i].folio.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || this.listaUniverso[i].serie.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                            searchArrayAux.push(this.listaUniverso[i]);
                        }
                    }
                    else {
                        if (this.listaUniverso[i].folio.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                            searchArrayAux.push(this.listaUniverso[i]);
                        }
                    }
                }
                this.lista = searchArrayAux;
            }
        }
    };
    SaldoNotaCreditoComponent.prototype.ordenamientoFechaTramNue = function () {
        this.tipoOrden = 'Más Nuevas';
        this.lista.sort(function (a, b) {
            if (a.ordenarFecha < b.ordenarFecha) {
                return 1;
            }
            if (a.ordenarFecha > b.ordenarFecha) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    };
    SaldoNotaCreditoComponent.prototype.ordenamientoFechaTramAnt = function () {
        this.tipoOrden = 'Más Antiguas';
        this.lista.sort(function (a, b) {
            if (a.ordenarFecha > b.ordenarFecha) {
                return 1;
            }
            if (a.ordenarFecha < b.ordenarFecha) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    };
    SaldoNotaCreditoComponent.prototype.filtrarEmpresa = function (valores) {
        var lista;
        if (valores.nombre !== 'TODOS') {
            lista = this.listaUniverso.filter(function (item) { return item.proveedor.nombre.toLowerCase() === valores.nombre.toLowerCase(); });
        }
        else {
            lista = this.listaUniverso.slice();
        }
        this.lista = lista;
        this.listaFiltrado = lista;
        this.tipoFiltrado = valores.nombre;
        this.searchTerm = '';
        if (this.tipoOrden === 'Más Antiguas') {
            this.ordenamientoFechaTramAnt();
        }
        else if (this.tipoOrden === 'Más Nuevas') {
            this.ordenamientoFechaTramNue();
        }
    };
    SaldoNotaCreditoComponent.prototype.eliminarSaldo = function (item) {
        this.mensaje = '¿ Seguro que desea eliminar la nota de crédito con';
        this.folio = 'Folio ' + item.folioDocto + '?';
        this.eliminar = true;
        this.itemSelect = item;
    };
    SaldoNotaCreditoComponent.prototype.recibirValor = function (event) {
        var _this = this;
        this.eliminar = false;
        var datas = {
            idSaldo: this.itemSelect.idSaldo,
            habilitado: false
        };
        if (event) {
            this._serviceSaldo.eliminarSaldo(datas).subscribe(function (data) {
                if (data.current) {
                    _this.obtenerDatos();
                }
            });
        }
    };
    SaldoNotaCreditoComponent.prototype.openBrowser = function (item) {
        console.log('Entre ');
        var shell = electron.shell;
        this.comun.obtenerRuta(item.folioDocto, 'Saldo', '').then(function (data) {
            shell.openExternal(data);
        });
    };
    SaldoNotaCreditoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-saldo-nota-credito',
            template: __webpack_require__("./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito.component.html"),
            styles: [__webpack_require__("./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__services_arribo_documento_arribo_documento_service__["a" /* ArriboDocumentoService */], __WEBPACK_IMPORTED_MODULE_4__services_saldos_notas_saldos_favor_service__["a" /* SaldosFavorService */], __WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__["a" /* ComunService */]])
    ], SaldoNotaCreditoComponent);
    return SaldoNotaCreditoComponent;
}());



/***/ }),

/***/ "./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaldoNotaCreditoModule", function() { return SaldoNotaCreditoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__saldo_nota_credito_component__ = __webpack_require__("./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__saldo_nota_credito_routing_module__ = __webpack_require__("./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pop_up_saldos_pop_up_saldos_module__ = __webpack_require__("./src/app/components/saldo-favor/pop-up-saldos/pop-up-saldos-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__saldos_generar_saldo_generar_saldo_module__ = __webpack_require__("./src/app/components/saldo-favor/saldos/generar-saldo/generar-saldo.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_combo_flecha_rellena_combo_flecha_rellena_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-rellena/combo-flecha-rellena.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_botonera_botonera_module__ = __webpack_require__("./src/app/components/shared/botonera/botonera.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SaldoNotaCreditoModule = /** @class */ (function () {
    function SaldoNotaCreditoModule() {
    }
    SaldoNotaCreditoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__saldo_nota_credito_routing_module__["a" /* SaldoNotaCreditoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__pop_up_saldos_pop_up_saldos_module__["a" /* PopUpSaldosModule */],
                __WEBPACK_IMPORTED_MODULE_6__saldos_generar_saldo_generar_saldo_module__["a" /* GenerarSaldoModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_combo_flecha_rellena_combo_flecha_rellena_module__["a" /* ComboFlechaRellenaModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_botonera_botonera_module__["a" /* BotoneraModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_accounting_accounting_module__["a" /* PipeModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__saldo_nota_credito_component__["a" /* SaldoNotaCreditoComponent */]
            ]
        })
    ], SaldoNotaCreditoModule);
    return SaldoNotaCreditoModule;
}());



/***/ })

});
//# sourceMappingURL=saldo-nota-credito.module.chunk.js.map