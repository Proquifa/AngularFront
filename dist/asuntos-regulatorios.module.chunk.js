webpackJsonp(["asuntos-regulatorios.module"],{

/***/ "./src/app/components/asuntos-regulatorios/asuntos-regulatorios-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsuntosRegulatoriosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__asuntos_regulatorios_component__ = __webpack_require__("./src/app/components/asuntos-regulatorios/asuntos-regulatorios.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AsuntosRegulatoriosRoutingModule = /** @class */ (function () {
    function AsuntosRegulatoriosRoutingModule() {
    }
    AsuntosRegulatoriosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__asuntos_regulatorios_component__["a" /* AsuntosRegulatoriosComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AsuntosRegulatoriosRoutingModule);
    return AsuntosRegulatoriosRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/asuntos-regulatorios/asuntos-regulatorios.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\n  <!--Seccion de menu-->\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\n    <aside [ngClass]=\"classAsideMenu\">\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\n        <pn-menu-seccion-roles [items]=\"itemsMenu\"  style=\"width: 100%;\" *ngIf=\"activeMenu\"></pn-menu-seccion-roles>\n      </div>\n    </aside>\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n    </div>\n  </div>\n  <!--Termina seccion de menu-->\n  <!--Empieza el area de trabajo-->\n  <div class=\"area\"> <!--[style.width]=\"quitarWith? 'calc(100% - 321px)':'100%'\"-->\n    <!--Empieza la cabezera-->\n    <div class=\"cabezera\">\n      <div style=\"cursor: pointer;\" *ngIf=\"!vistaPrincipal\" (click)=\"regresarVistaP()\">\n        <img class=\"img\" src='./assets/Images/regresar.svg'/>\n      </div>\n      <label class=\"etiqueta\" style=\"width: 45%\">GESTIONAR CARGA PAP</label>\n      <span class=\"cabeceraCliente\">{{cabeceraClient}}</span>\n    </div>\n    <!--Termina la cabezera-->\n    <!--Empiezan los componentes-->\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 120px)'}\">\n      <div style=\"width: 100%; height: 100%\" *ngIf=\"vistaPrincipal\">\n        <div style=\"height: 100%; width: 100%; display: -webkit-box\" >\n          <div class=\"listaProd\">\n            <div class=\"titulosLista\">\n              <div  class=\"tituloCliente\">\n                <label class=\"tituloLista\">CLIENTES</label>\n              </div>\n              <div class=\"organizarLista\">\n                <div style=\"width: 10%; height: 100%;    display: flex;align-items: center;\">\n                  <div class=\"menu\" (click)=\"abreCombo()\">\n                    <div>\n                    </div>\n                    <div>\n                    </div>\n                    <div>\n                    </div>\n                    <section id=\"section\">\n                      <ul class=\"listaHamburguesa\">\n                        <li (click)=\"ordenamientoCliente()\">Alfabético (A-Z)</li>\n                        <li (click)=\"ordenamientoFechaTramNue()\">Trámites Más Nuevos</li>\n                        <li (click)=\"ordenamientoFechaTramAnt()\">Trámites Más Antiguos</li>\n                      </ul>\n                    </section>\n                  </div>\n                </div>\n               <div style=\"width: 38%; height: 100%;    display: flex;align-items: center;\">\n                 <h3 class=\"subtitulo\">{{tipoOrden}}</h3>\n               </div>\n                <div class=\"barraBusqueda\" style=\"height: 100%\">\n                  <div class=\"buscar\" style=\"padding-left: 236px;\">\n                    <div>\n                      <div class=\"lupa\">\n                        <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\n                      </div>\n                      <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Cliente, Producto\" />\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--Lista total-->\n            <div class=\"segundaSeccionList\">\n              <div style=\"width: 97%;\">\n                <div class= \"lista\" style=\"display: unset;flex-direction: column\">\n                  <div  *ngFor=\"let item of lista; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\n                    <div class=\"dfSelect\"></div>\n                    <div class=\"datosLst\" style=\"padding-top: 5px;padding-left: 15px;display: flex; width: 100%;box-sizing: border-box;padding-bottom: 10px;\" (click)=\"seleccionarItem(i, item)\">\n                      <div class=\"numeroIndex\">\n                        <label class=\"index\" style=\"font-family: Roboto-Regular\">#{{i +1}}</label>\n                      </div>\n                      <div class=\"informacionList\">\n                        <label>{{item.cliente}}</label>\n                        <span class=\"span\">{{item.sustancia}}</span>\n                        <h3> <span class=\"spanPeq\" style=\"color: #008894\">{{item.cpedido}} · <span class=\"spanPeq\">{{item.piezas}} piezas · Presentación: {{item.presentacion}}· {{item.monto}}</span></span></h3>\n                        <h3>FT: {{item.ft}}· FEE: {{item.fee}}</h3>\n                      </div>\n                      <div style=\"position: absolute; position: absolute; padding-top: 43px;right:0; width: 5%\">\n                        <img src=\"./assets/Images/FlechaDerVerde.svg\" class=\"imgFlecha\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"totales\">\n              <label># {{total}}</label>\n              <label>{{totPiezas}} Pzas.</label>\n              <label>Monto: {{montoTot}} </label>\n            </div>\n          </div>\n          <div class=\"contenidoGrafica\">\n             <div class=\"grafica\" *ngIf=\"grafica\" style=\"padding-right: 10px;\">\n               <label class=\"tituloGrafica\">CLIENTES</label>\n               <pn-donut-chart *ngIf=\"clienteData\" [data]=\"dataCliente\" [tipoGrafica]=\"tipoGraficaCliente\" [height]=\"'auto'\"></pn-donut-chart>\n             </div>\n            <div  id=\"donaProducto\" class=\"grafica\" style=\"    padding-left: 10px;\">\n              <label class=\"tituloGrafica\">PRODUCTOS</label>\n              <pn-donut-chart *ngIf=\"ProductoData\" [idGrafica]=\"'producto'\" [data]=\"dataProducto\" [tipoGrafica]=\"tipoGraficaProducto\" [height]=\"'auto'\"> </pn-donut-chart>\n            </div>\n          </div>\n        </div>\n      </div>\n    <!--Terminan los componentes-->\n      <pn-vista-carga-documento *ngIf=\"vistaDocumento\" [datos]= \"datosProducto\" (vistaP)=\"regresarVistaP()\" (ActualizarvistaP)=\"recargarVista($event)\"></pn-vista-carga-documento>\n  </div>\n  <!--Termina area de trabajo-->\n    <div style=\"width: 100%;height: 50px\">\n      <footer class=\"footer\">\n        <div class=\"abreviaciones\">\n          <div class=\"Prioridad1\">\n            <label class=\"p1\">FEE: <span class=\"texto\"> Fecha Estimada de Entrega</span></label>\n          </div>\n          <div class=\"Prioridad2\">\n            <label class=\"p2\">P.U: <span class=\"texto\">Precio Unitario</span></label>\n          </div>\n\n        </div>\n      </footer>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/asuntos-regulatorios/asuntos-regulatorios.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n.padre {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n.aux .asideNormalMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  min-width: 181px;\n  width: 321px;\n  height: 100%;\n  overflow-y: scroll; }\n.aux .asideNormalMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n.aux > .asideOcultarMenu {\n  -webkit-animation-name: ocultarMenu;\n          animation-name: ocultarMenu;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-transition: 1s ease-in-out;\n  transition: 1s ease-in-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 0px;\n  width: 0px; }\n.aux > .asideOcultarMenu > .articulo {\n    width: 0px; }\n.aux > .asideMostrarMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  -webkit-animation-name: mostrarMenu;\n          animation-name: mostrarMenu;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-y: scroll; }\n.aux > .asideMostrarMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n@-webkit-keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@-webkit-keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n@keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n.area {\n  height: 100%;\n  width: 100%;\n  overflow: auto; }\n/********Secion de la cabecera****/\n.cabezera {\n  width: 100%;\n  height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 13px;\n  border-bottom: 2px solid black; }\n.etiqueta {\n  color: #5B5B5B;\n  font-size: 25px;\n  font-family: Novecento; }\n.img {\n  cursor: pointer; }\n/*******************************/\n.tituloGrafica {\n  font-size: calc((1vh + 1vw) / 2);\n  font-weight: bold;\n  font-family: Novecento; }\n.grafica {\n  height: 80%;\n  width: 70%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.grafica label {\n    text-align: center; }\n.contenidoGrafica {\n  width: 70%;\n  background: #ECEEF0;\n  height: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 20px;\n  padding-right: 20px; }\n.lista {\n  /* border-bottom: solid 1px #ECEEF0;\n  border-bottom:solid 1px #ECEEF0;*/\n  width: 100%;\n  min-height: 80px;\n  font-size: 20px;\n  padding: 15px 19px 14px 13px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  line-height: 1.3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto; }\n.lista > .index {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    height: 52px; }\n.lista > .datosLst {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto; }\n.lista > .datosLst > p {\n      font-weight: normal; }\n.lista div:hover {\n    background-color: #ECEEF0; }\n.lista > .divActual {\n    background-color: #ECEEF0;\n    -webkit-box-shadow: 0 2px 4px -3px #008895;\n            box-shadow: 0 2px 4px -3px #008895; }\n.lista > .divActive {\n    background-color: #ECEEF0; }\n.lista > .divActive .dfSelect {\n      background: #008895 !important;\n      width: 5px !important;\n      color: #008895; }\n.lista > .divActive .datosLst label {\n      color: #008895;\n      padding-left: -2px;\n      font-family: \"Roboto-Bold\";\n      font-size: 28px; }\n.lista > .divActive .datosLst p {\n      font-family: \"Roboto-Bold\";\n      font-size: 24px;\n      color: #000000;\n      line-height: 26px; }\n.lista > .divActive .datosLst h3 {\n      font-family: \"Roboto-regular\";\n      font-size: 21px; }\n.textoPiezas {\n  font-family: \"Roboto-regular\";\n  font-size: 21px; }\n.titulo {\n  padding-left: 30px;\n  font-family: Novecentowide;\n  font-weight: Bold;\n  font-size: 24px; }\n.buscar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  width: 100%;\n  border-style: solid; }\n.buscar div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 249px;\n    border-radius: 102px 102px 102px 102px;\n    -moz-border-radius: 102px 102px 102px 102px;\n    -webkit-border-radius: 102px 102px 102px 102px;\n    border: 0.5px solid #BFC0C7;\n    height: 26px; }\n.buscar div div {\n      border: none;\n      border-radius: 0px 0px 0px 0px;\n      -moz-border-radius: 0px 0px 0px 0px;\n      -webkit-border-radius: 0px 0px 0px 0px;\n      border: 0px solid #000000;\n      width: 40px;\n      background: transparent;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n.buscar div .buscar-input {\n      cursor: pointer;\n      background: transparent;\n      border-radius: 100px;\n      -moz-border-radius: 102px 102px 102px 102px;\n      border: 0px solid #000000;\n      width: 100%;\n      font-family: Helvetica;\n      font-size: 18px;\n      color: #AAA9AF;\n      outline: none;\n      padding-left: 5px; }\n.barraBusqueda {\n  width: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n.footer {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  /* flex-direction: row; */\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* border-top: 1px solid; */ }\n.linea {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  text-align: center; }\n.datosFooter {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 14px;\n  min-width: 759px; }\n.Prioridad1, .Prioridad2 {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 0.7%;\n  margin-right: 0.7%;\n  font-family: Roboto;\n  font-weight: 300; }\n.p1 {\n  color: #424242;\n  font-weight: bold; }\n.p2 {\n  color: #424242;\n  font-weight: bold; }\n.p3 {\n  color: #424242;\n  font-weight: bold; }\n.datosC {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-width: 1608px;\n  margin-left: 20px;\n  margin-right: 20px;\n  width: 98%; }\n.organizarLista {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 10px;\n  position: relative;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 50%; }\n.subtitulo {\n  font-size: 18px;\n  font-family: Roboto;\n  font-weight: 300; }\n.tituloLista {\n  font-size: 24px;\n  font-family: Novecento;\n  font-weight: bold; }\n.numeroIndex {\n  font-size: 28px;\n  font-family: Roboto-Regular;\n  text-align: left;\n  width: 10%;\n  padding-right: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 4px; }\n.informacionList {\n  font-family: Roboto;\n  width: 85%;\n  padding-top: 4px; }\n.informacionList label {\n    color: #008894;\n    font-weight: bold;\n    font-size: 24px;\n    font-family: Roboto;\n    line-height: 1; }\n.informacionList h3 {\n    font-size: 17px;\n    font-family: Roboto;\n    color: #424242;\n    line-height: 1.5;\n    margin-top: 4px; }\n.imgFlecha {\n  width: 17.9px;\n  height: 27.4px; }\n.listaProd {\n  width: 30%;\n  background: #FFFFFF;\n  height: 100%;\n  min-width: 396px;\n  padding-left: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.infoLista {\n  height: 10%;\n  padding-top: 15px;\n  width: 95%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.totales {\n  height: 5%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  width: 95%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 5px; }\n.titulosLista {\n  height: 10%;\n  padding-top: 15px;\n  width: 95%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-bottom: 15px;\n  min-height: 90px; }\n.abreviaciones {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border-top: 2px solid #424242; }\n/******/\n.menu {\n  position: relative; }\n.menu:HOVER {\n  cursor: pointer; }\n.menu > div {\n  width: 20px;\n  height: 2px;\n  background: #000000;\n  margin: 5px; }\nsection {\n  position: absolute;\n  visibility: hidden;\n  height: 0; }\nsection.visible {\n  visibility: visible;\n  height: 120px;\n  overflow: auto;\n  width: 219px;\n  background: #FFFFFF;\n  z-index: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid #ECEEF0;\n  border-top: 1px solid #ECEEF0;\n  border-left: 1px solid #ECEEF0;\n  border-right: 1px solid #ECEEF0; }\n.listaHamburguesa {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 15px;\n  padding-right: 15px; }\n.listaHamburguesa > li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border-bottom: 0.5px solid #ECEEF0;\n    padding-bottom: 5px;\n    padding-top: 5px; }\n.listaHamburguesa > li:hover {\n    background-color: #ECEEF0; }\n.segundaSeccionList {\n  height: 85%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 1px solid;\n  width: 95%;\n  border-top: 1px solid;\n  overflow: auto; }\n.tituloCliente {\n  width: 50%;\n  height: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.cabeceraCliente {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 55%;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  color: #008894;\n  font-family: Roboto;\n  font-weight: bold;\n  font-size: 28px;\n  padding-right: 19.2px; }\n.span {\n  min-height: 23px;\n  max-height: 46px;\n  font-weight: bold;\n  font-size: 20px;\n  color: #424242;\n  font-family: Roboto;\n  overflow: hidden; }\n@supports (-webkit-line-clamp: 2) {\n    .span {\n      display: block;\n      display: -webkit-box !important;\n      line-height: 1.1;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: vertical;\n      text-overflow: ellipsis; } }\n@supports not (-webkit-line-clamp: 2) {\n    .span {\n      position: relative;\n      line-height: 1.1;\n      overflow: hidden;\n      width: 100%; }\n      .span:before {\n        content: \"\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\";\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        background: transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;\n        background: transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%; } }\n.spanPeq {\n  font-size: 17px;\n  font-family: Roboto;\n  color: #424242; }\n@media all and (min-width: 1300px) and (max-width: 1509px) {\n  .informacionList > label {\n    font-size: 18px; }\n  .informacionList > .span {\n    font-size: 16px;\n    min-height: 17px;\n    max-height: 34px; }\n  .informacionList > h3 {\n    font-size: 15px; }\n  .numeroIndex {\n    font-size: 22px; }\n  .cabeceraCliente {\n    font-size: 25px; }\n  .spanPeq > {\n    font-size: 15px; } }\n.select {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width: 100%;\n  position: relative;\n  border-bottom: 1px solid #ECEEF0;\n  border-top: 1px solid #ECEEF0; }\n.texto {\n  font-family: Roboto;\n  font-weight: 300; }\n.agrupacion {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/asuntos-regulatorios/asuntos-regulatorios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsuntosRegulatoriosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_asuntos_regulatorios_asuntos_regulatorios_service__ = __webpack_require__("./src/app/services/asuntos-regulatorios/asuntos-regulatorios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
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






var AsuntosRegulatoriosComponent = /** @class */ (function () {
    function AsuntosRegulatoriosComponent(comunServe, _serviceAsuntos, coreComponent) {
        this.comunServe = comunServe;
        this._serviceAsuntos = _serviceAsuntos;
        this.coreComponent = coreComponent;
        this.classAsideMenu = 'asideNormalMenu';
        this.dataFacturacion = {
            titulo: 'Clientes',
            labels: ['Totales'],
            valores: [6, 3],
            labelsExtras: [['clientes'], ['Ordenes de compra'], ['Piezas'], ['Monto']],
            labelsExtrasHover: ['clientes', 'Ordenes de compra', 'Piezas', 'Monto'],
            valuesExtras: [6, 324, 157, 5000],
            valuesExtrasHover: [[6, 3, 1, 2], [324, 157, 50, 100]]
        };
        this.dataFacturacion2 = {
            titulo: 'Productos',
            labels: ['Totales'],
            valores: [6],
            labelsExtras: [['clientes'], ['Ordenes de compra']],
            labelsExtrasHover: ['clientes', 'Ordenes de compra'],
            valuesExtras: [6, 324],
            valuesExtrasHover: [[6, 3], [324, 157]]
        };
        this.lista = []; /*[] = [{ 'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 5},
          {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
          {  'referencia':"PHS", "nombre": 'PQF', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 3},
          {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
          { 'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 2},
          { 'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
          {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11},
          {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 21},
          {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11},
          {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 4},
          {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 6}];*/
        this.grafica = true;
        this.grafica1 = true;
        this.clientes = [];
        this.listaUniverso = [];
        this.validarLista = true;
        this.Vistafacturacion = true; /// VARIABLE PARA VISUALIZAR LA PRIMER VISTA DE FACTURACION
        this.precio = '$15,000.000';
        this.fecha = '12/Dic/2018';
        this.fecha2 = '12/Jun/2019';
        this.filtroProducto = [];
        this.filtroCliente = [];
        this.vistaPrincipal = true;
        this.quitarWith = true;
        this.datosProducto = [];
    }
    AsuntosRegulatoriosComponent.prototype.ngOnInit = function () {
        var _this = this;
        var idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        this.subs = this.comunServe.recargar.subscribe(function (data) {
            if (data === 'asuntosRegulatorios') {
                _this.searchTerm = '';
                _this.activeMenu = false;
                _this.getPendietesPAP(idUsuario);
            }
        });
        this.getPendietesPAP(idUsuario);
        /*for (let i: number = 0; i < this.lista.length; i++) {
          this.clientes.push(this.lista[i]);
        }*/
    };
    AsuntosRegulatoriosComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
            this.quitarWith = false;
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
            this.quitarWith = true;
        }
    };
    AsuntosRegulatoriosComponent.prototype.regresarVistaP = function () {
        this.cabeceraClient = '';
        this.vistaPrincipal = true;
        this.vistaDocumento = false;
    };
    AsuntosRegulatoriosComponent.prototype.seleccionarItem = function ($index, item) {
        // this.datosProducto = this.lista[$index];
        // this.cabeceraClient = this.lista[$index].cliente;
        this.datosProducto = item;
        this.cabeceraClient = item.cliente;
        this.vistaPrincipal = false;
        this.vistaDocumento = true;
        console.log('Soy clic -->', $index);
    };
    /// Funcion de buscar en facturacion
    AsuntosRegulatoriosComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search == "") {
            // this.ClientesSearched= this.clientesConsulta;
            this.lista = this.listaUniverso.slice();
        }
        else {
            this.listaUniverso.forEach(function (folio) {
                if (folio.cliente.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1 || folio.sustancia.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.lista = searchArrayAux;
        }
        if (this.tipoOrden === 'Alfabético (A-Z)') {
            this.ordenamientoCliente();
        }
        else if (this.tipoOrden === 'Trámites Más Nuevos') {
            this.ordenamientoFechaTramNue();
        }
        else if (this.tipoOrden === 'Trámites Más Antiguos') {
            this.ordenamientoFechaTramAnt();
        }
    };
    AsuntosRegulatoriosComponent.prototype.getPendietesPAP = function (idUsuario) {
        var _this = this;
        this.lista = [];
        this.listaUniverso = [];
        this.totPiezas = 0;
        this.montoTot = 0;
        var montoTot = 0;
        this.coreComponent.openModal(0);
        this._serviceAsuntos.getPendietesPAP(idUsuario).subscribe(function (data) {
            var listaAux = data.current.lista;
            if (data.current.graficas.Productos !== undefined) {
                _this.graficas = data.current.graficas;
            }
            else {
                _this.graficas = [];
            }
            var presentacion;
            var monto = 0;
            var FT;
            var FEE;
            var FTAux;
            var FEEAux;
            var FtFormat;
            var precioUnit;
            for (var i = 0; i < listaAux.length; i++) {
                FTAux = listaAux[i].ftramite.split('-');
                FT = FTAux[0] + '/' + FTAux[1] + '/' + FTAux[2].split('T')[0];
                FtFormat = FTAux[0] + '-' + FTAux[1] + '-' + FTAux[2].split('T')[0];
                FTAux = _this.transform(FT);
                FEEAux = listaAux[i].fee.split('-');
                FEE = FEEAux[0] + '/' + FEEAux[1] + '/' + FEEAux[2].split('T')[0];
                FEEAux = _this.transform(FEE);
                presentacion = listaAux[i].cantidad + listaAux[i].unidad;
                // monto = new AccountingFormatMoney().transform(listaAux[i].monto);
                precioUnit = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(listaAux[i].precio);
                _this.lista.push({ cliente: listaAux[i].cliente, sustancia: listaAux[i].concepto, piezas: listaAux[i].piezas, presentacion: presentacion,
                    monto: listaAux[i].monto, ft: FTAux, fee: FEEAux, precioUnit: precioUnit, fechaOriginal: listaAux[i].ftramite,
                    idPPedido: listaAux[i].idPPedido, ftFormat: FtFormat, idPedido: listaAux[i].idPedido, cpedido: listaAux[i].cpedido });
                _this.listaUniverso.push({ cliente: listaAux[i].cliente, sustancia: listaAux[i].concepto, piezas: listaAux[i].piezas, presentacion: presentacion,
                    monto: listaAux[i].monto, ft: FTAux, fee: FEEAux, precioUnit: precioUnit, fechaOriginal: listaAux[i].ftramite,
                    idPPedido: listaAux[i].idPPedido, ftFormat: FtFormat, idPedido: listaAux[i].idPedido, cpedido: listaAux[i].cpedido });
                _this.totPiezas += listaAux[i].piezas;
                montoTot += listaAux[i].monto;
            }
            /* this.lista = [{cliente: 'Ber', cant: 2, ftFormat: '2001-02-12'},
               {cliente: 'arroz', cant: 4, ftFormat: '1998-12-01'}, {cliente: 'clt', cant: 4, ftFormat: '1998-12-15'}];
             console.log('Soy lista -->', this.lista);
             this.ordenamientoCliente();*/
            console.log('Soy lista -->', _this.lista);
            /****************************/
            for (var i = 0; i < _this.lista.length; i++) {
                _this.clientes.push(_this.lista[i]);
            }
            /**********************************/
            _this.montoTot = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(montoTot);
            _this.total = _this.lista.length;
            _this.iniciarMenu(_this.total);
            _this.llenarGraficas(_this.graficas);
            _this.coreComponent.closeModal(0);
        });
    };
    AsuntosRegulatoriosComponent.prototype.iniciarMenu = function (totProd) {
        this.itemsMenu = [
            { rol: 'ASISTENTE REGULATORIO', active: true, menu: [
                    { nombre: 'Gestionar Carga PAP', url: 'asuntosRegulatorios', tipo: 'valor', valor: totProd, select: true }
                ] }
        ];
        this.activeMenu = true;
    };
    AsuntosRegulatoriosComponent.prototype.ordenamientoCliente = function () {
        this.tipoOrden = 'Alfabético (A-Z)';
        this.lista.sort(function (a, b) {
            if (a.cliente.toLowerCase() > b.cliente.toLowerCase()) {
                return 1;
            }
            if (a.cliente.toLowerCase() < b.cliente.toLowerCase()) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    };
    AsuntosRegulatoriosComponent.prototype.ordenamientoFechaTramNue = function () {
        this.tipoOrden = 'Trámites Más Nuevos';
        this.lista.sort(function (a, b) {
            if (a.ftFormat < b.ftFormat) {
                return 1;
            }
            if (a.ftFormat > b.ftFormat) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
        var fecha1 = new Date();
        var fecha2 = new Date();
    };
    AsuntosRegulatoriosComponent.prototype.ordenamientoFechaTramAnt = function () {
        this.tipoOrden = 'Trámites Más Antiguos';
        this.lista.sort(function (a, b) {
            if (a.ftFormat > b.ftFormat) {
                return 1;
            }
            if (a.ftFormat < b.ftFormat) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    };
    AsuntosRegulatoriosComponent.prototype.llenarGraficas = function (lista) {
        var _this = this;
        this.limpiarVariables();
        if (lista.Productos !== undefined) {
            setTimeout(function () {
                _this.ProductoData = false;
                _this.clienteData = false;
            }, 5);
            this.listaProductos = lista['Productos'];
            this.listaClientes = lista['Clientes'];
            this.limpiarVariablesGrafica();
            this.calcularDatosParaGraficas();
        }
        else {
            this.listaProductos = [];
            this.listaClientes = [];
            this.limpiarVariablesGrafica();
        }
    };
    AsuntosRegulatoriosComponent.prototype.limpiarVariables = function () {
        this.filtroProducto = [];
        this.filtroCliente = [];
        this.ProductoData = false;
        this.clienteData = false;
    };
    AsuntosRegulatoriosComponent.prototype.limpiarVariablesGrafica = function () {
        var _this = this;
        //////// Emìeza grafica productos //////
        var valoresP = [];
        var valoresProductos = [];
        if (this.listaProductos.length > 0) {
            for (var _i = 0, _a = this.listaProductos; _i < _a.length; _i++) {
                var nombre = _a[_i];
                this.filtroProducto.push(nombre.nombre);
                valoresProductos.push([0, 0]);
                valoresP.push(0);
            }
        }
        if (valoresP.length > 0) {
            this.dataProducto = {
                titulo: 'Totales',
                labels: this.filtroProducto,
                valores: valoresP,
                labelsExtras: ['Productos', 'Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0, 0],
                valuesExtrasHover: valoresProductos,
            };
            this.dataProductoAux = {
                titulo: 'Totales',
                labels: this.filtroProducto,
                valores: valoresP,
                labelsExtras: ['Productos', 'Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0, 0],
                valuesExtrasHover: valoresProductos,
            };
            this.tipoGraficaProducto = 'General';
        }
        else {
            this.dataProducto = {
                titulo: 'Totales',
                labels: this.filtroProducto,
                valores: [1],
                labelsExtras: ['Productos', 'Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0, 0],
                valuesExtrasHover: [[0, 0]],
            };
            this.tipoGraficaProducto = 'Gris';
            setTimeout(function () {
                _this.ProductoData = true;
            }, 5);
        }
        //////// Emìeza grafica Cliente //////
        var valoresC = [];
        var valoresClientes = [];
        if (this.listaClientes.length > 0) {
            for (var _b = 0, _c = this.listaClientes; _b < _c.length; _b++) {
                var nombre = _c[_b];
                this.filtroCliente.push(nombre.nombre);
                valoresClientes.push([0, 0, 0]);
                valoresC.push(0);
            }
        }
        if (valoresC.length > 0) {
            this.dataCliente = {
                titulo: 'Totales',
                labels: this.filtroCliente,
                valores: valoresC,
                labelsExtras: ['Productos', 'Piezas', 'Monto'],
                labelsExtrasHover: ['Productos', 'Piezas', 'Monto'],
                valuesExtras: [0, 0, 0],
                valuesExtrasHover: valoresClientes,
            };
            this.dataClienteAux = {
                titulo: 'Totales',
                labels: this.filtroProducto,
                valores: valoresC,
                labelsExtras: ['Productos', 'Piezas', 'Monto'],
                labelsExtrasHover: ['Productos', 'Piezas', 'Monto'],
                valuesExtras: [0, 0, 0],
                valuesExtrasHover: valoresClientes,
            };
            this.tipoGraficaCliente = 'General';
        }
        else {
            this.dataCliente = {
                titulo: 'Totales',
                labels: this.filtroCliente,
                valores: [1],
                labelsExtras: ['Productos', 'Piezas', 'Monto'],
                labelsExtrasHover: ['Productos', 'Piezas', 'Monto'],
                valuesExtras: [0, 0, 0],
                valuesExtrasHover: [[0, 0, 0]],
            };
            setTimeout(function () {
                _this.tipoGraficaCliente = 'Gris';
                _this.clienteData = true;
            }, 5);
        }
    };
    AsuntosRegulatoriosComponent.prototype.calcularDatosParaGraficas = function () {
        for (var _i = 0, _a = this.listaProductos; _i < _a.length; _i++) {
            var productos = _a[_i];
            this.llenarTotalesGraficas(this.dataProducto, productos, 'PRODUCTOS', this.dataProductoAux);
        }
        for (var _b = 0, _c = this.listaClientes; _b < _c.length; _b++) {
            var productos = _c[_b];
            this.llenarTotalesGraficas(this.dataCliente, productos, 'CLIENTES', this.dataClienteAux);
        }
    };
    AsuntosRegulatoriosComponent.prototype.llenarTotalesGraficas = function (total, elemento, graficaElegida, totalAux) {
        var _this = this;
        switch (graficaElegida) {
            case 'PRODUCTOS':
                var valuesExtraAux = total.valuesExtras;
                var valuesExtrasHover = total.valuesExtrasHover;
                var posicion1 = this.filtroProducto.indexOf(elemento.nombre);
                total.valuesExtrasHover[posicion1][0] += elemento.totalPiezas;
                // total.valuesExtrasHover[posicion1][0] += elemento.totalProductos;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                totalAux.valuesExtras[2] += elemento.monto;
                total.valuesExtras[2] = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[2]);
                total.valuesExtras[1] += elemento.totalPiezas; // Total de Partidas
                total.valuesExtras[0] += elemento.totalProductos; // Total de Productos
                total.valores[posicion1] += elemento.monto; // +(elemento.monto.toFixed(2)); //Monto total
                valuesExtrasHover[posicion1][1] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicion1][1] = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicion1][1]);
                setTimeout(function () {
                    _this.ProductoData = true;
                }, 5);
                break;
            case 'CLIENTES':
                valuesExtraAux = total.valuesExtras;
                valuesExtrasHover = total.valuesExtrasHover;
                var posicion2 = this.filtroCliente.indexOf(elemento.nombre);
                total.valuesExtrasHover[posicion2][1] += elemento.totalPiezas;
                total.valuesExtrasHover[posicion2][0] += elemento.totalProductos;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                totalAux.valuesExtras[2] += elemento.monto;
                total.valuesExtras[2] = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[2]);
                total.valuesExtras[1] += elemento.totalPiezas; // Total de Partidas
                total.valuesExtras[0] += elemento.totalProductos; // Total de Productos
                total.valores[posicion2] += elemento.monto; // +(elemento.monto.toFixed(2)); //Monto total
                valuesExtrasHover[posicion2][2] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicion2][2] = new __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicion2][2]);
                /*---------Termina------*/
                setTimeout(function () {
                    _this.clienteData = true;
                }, 5);
                break;
            default:
                break;
        }
    };
    AsuntosRegulatoriosComponent.prototype.transform = function (dateToFormat) {
        if (dateToFormat == undefined || dateToFormat == null) {
            return "Pendiente";
        }
        var now = new Date();
        if (dateToFormat.length == 10) {
            now = new Date(dateToFormat);
        }
        else {
            now = new Date(dateToFormat);
        }
        var date;
        var mes = now.getMonth();
        var hora = now.getHours().toString().length == 1 ? "0" + now.getHours().toString() : now.getHours().toString();
        var minutos = now.getMinutes().toString().length == 1 ? "0" + now.getMinutes().toString() : now.getMinutes().toString();
        var hour = hora + ":" + minutos;
        switch (mes) {
            case 0:
                date = now.getDate() + '/Ene/' + now.getFullYear();
                break;
            case 1:
                date = now.getDate() + '/Feb/' + now.getFullYear();
                break;
            case 2:
                date = now.getDate() + '/Mar/' + now.getFullYear();
                break;
            case 3:
                date = now.getDate() + '/Abr/' + now.getFullYear();
                break;
            case 4:
                date = now.getDate() + '/May/' + now.getFullYear();
                break;
            case 5:
                date = now.getDate() + '/Jun/' + now.getFullYear();
                break;
            case 6:
                date = now.getDate() + '/Jul/' + now.getFullYear();
                break;
            case 7:
                date = now.getDate() + '/Ago/' + now.getFullYear();
                break;
            case 8:
                date = now.getDate() + '/Sep/' + now.getFullYear();
                break;
            case 9:
                date = now.getDate() + '/Oct/' + now.getFullYear();
                break;
            case 10:
                date = now.getDate() + '/Nov/' + now.getFullYear();
                break;
            case 11:
                date = now.getDate() + '/Dic/' + now.getFullYear();
                break;
            default:
                break;
        }
        return date;
    };
    /*****/
    AsuntosRegulatoriosComponent.prototype.abreCombo = function () {
        if (document.getElementById("section").className == "visible") {
            document.getElementById("section").className = "";
        }
        else {
            document.getElementById("section").className = "visible";
        }
    };
    AsuntosRegulatoriosComponent.prototype.recargarVista = function (val) {
        if (val) {
            this.cabeceraClient = '';
            var idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
            this.getPendietesPAP(idUsuario);
            this.vistaPrincipal = true;
            this.vistaDocumento = false;
        }
    };
    AsuntosRegulatoriosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-asuntos-regulatorios',
            template: __webpack_require__("./src/app/components/asuntos-regulatorios/asuntos-regulatorios.component.html"),
            styles: [__webpack_require__("./src/app/components/asuntos-regulatorios/asuntos-regulatorios.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_1__services_asuntos_regulatorios_asuntos_regulatorios_service__["a" /* AsuntosRegulatoriosService */], __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], AsuntosRegulatoriosComponent);
    return AsuntosRegulatoriosComponent;
}());



/***/ }),

/***/ "./src/app/components/asuntos-regulatorios/asuntos-regulatorios.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsuntosRegulatoriosModule", function() { return AsuntosRegulatoriosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfacturacion_componentes_oredenes_de_compra_oredenes_de_compra_component__ = __webpack_require__("./src/app/components/interfacturacion/componentes/oredenes-de-compra/oredenes-de-compra.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__asuntos_regulatorios_component__ = __webpack_require__("./src/app/components/asuntos-regulatorios/asuntos-regulatorios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__asuntos_regulatorios_routing_module__ = __webpack_require__("./src/app/components/asuntos-regulatorios/asuntos-regulatorios-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vista_carga_documento_vista_carga_documento_component__ = __webpack_require__("./src/app/components/asuntos-regulatorios/vista-carga-documento/vista-carga-documento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_visor_pdf_visor_pdf_module__ = __webpack_require__("./src/app/components/shared/visor-pdf/visor-pdf.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_combo_flecha_verde_combo_flecha_verde_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-verde/combo-flecha-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AsuntosRegulatoriosModule = /** @class */ (function () {
    function AsuntosRegulatoriosModule() {
    }
    AsuntosRegulatoriosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__asuntos_regulatorios_routing_module__["a" /* AsuntosRegulatoriosRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_visor_pdf_visor_pdf_module__["a" /* VisorPdfModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_combo_flecha_verde_combo_flecha_verde_module__["a" /* ComboFlechaVerdeModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_12__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__asuntos_regulatorios_component__["a" /* AsuntosRegulatoriosComponent */],
                // MenuSeccionComponent,
                // DonutChartComponent,
                __WEBPACK_IMPORTED_MODULE_3__interfacturacion_componentes_oredenes_de_compra_oredenes_de_compra_component__["a" /* OredenesDeCompraComponent */],
                __WEBPACK_IMPORTED_MODULE_8__vista_carga_documento_vista_carga_documento_component__["a" /* VistaCargaDocumentoComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__asuntos_regulatorios_component__["a" /* AsuntosRegulatoriosComponent */]
            ]
        })
    ], AsuntosRegulatoriosModule);
    return AsuntosRegulatoriosModule;
}());



/***/ }),

/***/ "./src/app/components/asuntos-regulatorios/vista-carga-documento/vista-carga-documento.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"areaPrincipal\">\n  <div class=\"titulo\">\n    <label> PRODUCTO </label>\n  </div>\n  <div class=\"datos\">\n   <div class=\"infoProd\">\n     <div class=\"nombre\">\n       <label>{{nombreFabricante}} · <span>{{nombreProd}}</span></label>\n     </div>\n     <div class=\"nombre\">\n       <span style=\"font-size: 18px; font-weight: 400\"><label class=\"labelPeq\">{{cpedido}} · </label> {{piezas}} {{conceptoPiezas}}  · <label class=\"labelPeq\">Presentación {{presentacion}}</label> · Fecha Trámite {{fechaTramite}} </span>\n     </div>\n   </div>\n    <div class=\"fechas\">\n      <div style=\"width: 12%\">\n        <label>FEE</label>\n        <h1>{{fechaEntrega}}</h1>\n      </div>\n      <div style=\"width: 22%\">\n        <label>Tipo de Permiso:</label>\n        <div>\n          <pn-combo-flecha-verde [title]=\"'Seleccionar'\" [items]=\"tiposPermiso\" (valueDropList)=\"recibirTipo($event)\"></pn-combo-flecha-verde>\n        </div>\n      </div>\n      <div style=\"width: 19%\">\n        <label> No. Permiso de Adquisición</label>\n      <input #textAdquisicion (blur)=\"cambioAquisicion(textAdquisicion.value)\" value=\"{{permAdq}}\"  id=\"textAdquision\" type=\"text\"\n             style=\"width: 100%;height: 24px;max-width: 206px;\">\n      </div>\n      <div style=\"width: 16%\">\n        <label> Fecha de Permiso</label>\n        <pq-date-picker style=\"height: 21px\" dateFormat=\"YYYYMMDD\" (fecha)=\"getFechaImpl($event)\" [(date)]=\"date\" [color]=\"false\"></pq-date-picker>\n      </div>\n      <div style=\"width: 15%\">\n        <label> Fecha Vencimiento</label>\n        <h1>{{fechaVencimiento}}</h1>\n      </div>\n      <div style=\"width: 18%\">\n        <label> # de Acta de Liberación</label>\n        <h1>NA</h1>\n      </div>\n    </div>\n  </div>\n  <div  class=\"documento\">\n    <div style=\"width: 100%; height: 5%;min-height: 30px;\">\n      <label class=\"titulo2\">PERMISO DE ADQUISICIÓN</label>\n    </div>\n    <div class=\"cargaDoc\">\n      <input type=\"file\" class=\"carga\"  (change)=\"fileChange2($event)\" id=\"cargarDocumento\">\n      <label for=\"cargarDocumento\" style=\"display: flex\" *ngIf=\"primerCarga\" class=\"cargarDocumento\"><img src=\"./assets/Images/cargar_permiso.svg\" class=\"imgeArchivo\">\n        <p class=\"textoImagen\">CARGAR PERMISO DE ADQUISICIÓN EN PLAZA</p></label>\n      <div *ngIf=\"!primerCarga\" class=\"vistDoc\">\n      <div style=\"width: 100%;height: 95%; justify-content: center;display: flex\">\n        <div class=\"contentRefuse\" id=\"preview\" [innerHtml] = \"htmlToAdd\" [style.height]=\"'100%'\"\n             [style.overflow]=\"'auto'\">\n        </div>\n      </div>\n      <div *ngIf=\"!primerCarga\" class=\"recargar\">\n        <label for=\"cargarDocumento\" style=\"display: flex\"><img src=\"./assets/Images/editar-pieza/cargar.svg\"></label>\n      </div>\n      </div>\n   </div>\n  </div>\n  <div class=\"btnDireccionPL\">\n    <div>\n      <a class=\"btnImprimir\" (click)=\"cambiarVista()\">CANCELAR</a>\n    </div>\n    <div>\n      <a class=\"btnImprimir\" (click)=\"finalizar()\" [style.pointer-events]=\"colorBoton?'auto':'none'\" [style.background]=\"colorBoton?'#4BA92B':'#D8D9DD'\">ACEPTAR</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/asuntos-regulatorios/vista-carga-documento/vista-carga-documento.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n.areaPrincipal {\n  height: 100%;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 22px;\n  padding-right: 22px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 1431px;\n  min-height: 988px; }\n.cargaDoc {\n  width: 100%;\n  height: 95%;\n  background-color: #ECEEF0;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative; }\n.carga {\n  display: none; }\n.carga::-webkit-file-upload-button {\n    opacity: 0; }\n.titulo {\n  width: 100%;\n  height: 5%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid #424242;\n  padding: 5px;\n  min-height: 40px; }\n.titulo label {\n    font-family: novecento;\n    font-weight: bold;\n    font-size: 24px;\n    justify-items: center; }\n.infoProd {\n  height: 100%;\n  width: 35%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  line-height: 1.3;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-right: 25px; }\n.infoProd .nombre {\n    width: 100%;\n    min-height: 28px;\n    max-height: 56px;\n    line-height: 1.3;\n    overflow: hidden; }\n@supports (-webkit-line-clamp: 2) {\n      .infoProd .nombre {\n        display: block;\n        display: -webkit-box !important;\n        line-height: 1.1;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        text-overflow: ellipsis; } }\n@supports not (-webkit-line-clamp: 2) {\n      .infoProd .nombre {\n        position: relative;\n        line-height: 1.1;\n        overflow: hidden;\n        width: 100%; }\n        .infoProd .nombre:before {\n          content: \"\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\";\n          position: absolute;\n          bottom: 0;\n          right: 0;\n          background: transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;\n          background: transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%; } }\n.infoProd .nombre label {\n      color: #008894;\n      font-family: Roboto;\n      font-weight: bold;\n      font-size: 24px; }\n.infoProd .nombre span {\n      color: #424242; }\n.infoProd .cantidadProd {\n    line-height: 1.3;\n    width: 100%;\n    height: 53%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n.infoProd .cantidadProd span {\n      color: #424242;\n      font-size: 18px;\n      font-family: Roboto-Regular;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin-top: 6px; }\n.infoProd .cantidadProd h1 {\n      color: #008894;\n      font-size: 18px;\n      font-family: Roboto-Regular; }\n.fechas {\n  height: 100%;\n  width: 65%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.fechas div {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-right: 20px; }\n.fechas div label {\n      font-family: Roboto-Regular;\n      font-size: 17px;\n      color: #424242;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding-bottom: 6px; }\n.datos {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  width: 100%;\n  min-height: 10%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 90px; }\n.btnDireccionPL {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  height: 5%;\n  padding-top: 15px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  justify-items: center; }\n.btnImprimir {\n  width: 170px;\n  height: 30px;\n  background-color: #008894;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 21px;\n  cursor: pointer;\n  border: none;\n  color: #FFFFFF;\n  font-weight: bold;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto; }\n.titulo2 {\n  font-family: novecento;\n  font-weight: bold;\n  font-size: 24px;\n  justify-items: center; }\n.recargar {\n  width: 100%;\n  height: 5%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n.contentRefuse {\n  height: 100%;\n  overflow: auto;\n  width: 69%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative;\n  /*display: flex;\n  box-sizing: border-box;\n  padding-top: 20px;\n  padding-left: 30px;\n  padding-right: 30px;*/ }\n.vistDoc {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 20px;\n  padding-bottom: 10px;\n  padding-right: 30px;\n  padding-left: 30px; }\n.textoImagen {\n  color: #D8D9DD;\n  font-size: 36px;\n  text-align: center;\n  position: relative;\n  font-family: Novecento;\n  font-weight: bold; }\n.imgeArchivo {\n  height: 265px;\n  width: 204px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  text-align: center; }\n.cargarDocumento {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  height: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  cursor: pointer; }\n.documento {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-bottom: 10px;\n  width: 100%;\n  height: 80%; }\n.labelPeq {\n  font-size: 18px !important;\n  font-weight: 400 !important; }\n/deep/ .dropListSelect {\n  min-width: 186px; }\n/deep/ .dropListSelect .container-drop .Title > p {\n    font-size: 15px !important; }\n/deep/ .dropList {\n  min-width: 186px; }\n@media all and (min-width: 1300px) and (max-width: 1509px) {\n  .infoProd > .nombre > label {\n    font-size: 22px; }\n  .infoProd > .nombre {\n    min-height: 24px;\n    max-height: 48px; }\n  .infoProd > .cantidadProd {\n    font-size: 16px; }\n  .btnDireccionPL {\n    padding-bottom: 6px;\n    padding-top: 6px; } }\n"

/***/ }),

/***/ "./src/app/components/asuntos-regulatorios/vista-carga-documento/vista-carga-documento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistaCargaDocumentoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_asuntos_regulatorios_asuntos_regulatorios_service__ = __webpack_require__("./src/app/services/asuntos-regulatorios/asuntos-regulatorios.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VistaCargaDocumentoComponent = /** @class */ (function () {
    function VistaCargaDocumentoComponent(_servicesAsuntos) {
        this._servicesAsuntos = _servicesAsuntos;
        this.vistaP = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ActualizarvistaP = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pdf = '';
        this.htmlToAdd = '';
        this.primerCarga = true;
        this.val = 1;
        this.date = new Date();
        this.fechaVenc = new Date();
        this.diasSum = 179;
        this.validar = 1;
        this.tiposPermiso = [
            { nombre: 'ESTUPEFACIENTE', key: 0 },
            { nombre: 'PRECURSOR QUÍMICO', KEY: 1 },
            { nombre: 'PSICOTRÓPICO', key: 2 }
        ];
    }
    VistaCargaDocumentoComponent.prototype.ngOnInit = function () {
    };
    VistaCargaDocumentoComponent.prototype.ngOnChanges = function () {
        // fechaEntregaAux = "01/01/2017";
        if (this.datos) {
            this.informacionProd = this.datos;
            this.nombreFabricante = this.informacionProd.cliente;
            this.nombreProd = this.informacionProd.sustancia;
            this.piezas = this.informacionProd.piezas;
            this.presentacion = this.informacionProd.presentacion;
            this.fechaTramite = this.informacionProd.ft;
            // fechaEntregaAux = this.informacionProd.ft;
            this.fechaEntrega = this.informacionProd.fee;
            this.precioUnit = this.informacionProd.precioUnit;
            this.total = this.informacionProd.monto;
            this.idPPedido = this.informacionProd.idPPedido;
            this.idPedido = this.informacionProd.idPedido;
            this.cpedido = this.informacionProd.cpedido;
            // const fechaVenc = new Date(this.informacionProd.ft);
            /*this.fechaVenc.setDate(fechaVenc.getDate() + (this.diasSum));
            this.fechaAux = this.fechaVenc.toDateString().split(' ');
            const fechaConv = this.fechaAux[2] + '/' +  this.fechaAux[1] + '/' +  this.fechaAux[3];
            this.fechaVencimiento = this.transform(fechaConv);*/
            console.log('Fecha vencimiento -->', this.fechaVenc);
            // fechaFinal.setDate(fechaInicial.getDate()+parseInt(intervalo));
            if (this.piezas === 1) {
                this.conceptoPiezas = 'Pieza';
            }
            else {
                this.conceptoPiezas = 'Piezas';
            }
            this.iniciarVista(this.informacionProd);
        }
    };
    VistaCargaDocumentoComponent.prototype.iniciarVista = function (informacion) {
    };
    VistaCargaDocumentoComponent.prototype.fileChange2 = function ($event) {
        if (this.val === 1) {
            this.primerCarga = false;
            this.val = 2;
        }
        console.log($event);
        this.file = $event.target.files;
        this.validarBtnAcep();
        this.mostrarDocumento(this.file);
    };
    VistaCargaDocumentoComponent.prototype.mostrarDocumento = function (fileInput) {
        /*const blob = new Blob([fileInput], {type: 'application/pdf'});
        const fileURL = URL.createObjectURL(blob).split(':');
        this.url = fileURL[1] + ':' + fileURL[2] + ':' + fileURL[3];*/
        var doc = document.querySelector('#preview');
        var $img = document.querySelector('#preview');
        var reader = new FileReader();
        /*Validación para eliminar si ya existe un elemento*/
        if (document.querySelector('#preview')) {
            document.querySelector('#preview').children[0].remove();
        }
        /******************/
        reader.onload = function (e) {
            document.querySelector('#preview').insertAdjacentHTML('afterbegin', '<iframe id="pdf" src="' + e.target.result + '" width="100%" height="100%" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">');
        };
        reader.readAsDataURL(fileInput[0]);
    };
    VistaCargaDocumentoComponent.prototype.cambioAquisicion = function (texto) {
        this.permisoAdquisicion = texto;
        this.validarBtnAcep();
    };
    VistaCargaDocumentoComponent.prototype.recibeValosCombo = function () {
    };
    VistaCargaDocumentoComponent.prototype.getFechaImpl = function (fecha) {
        var anio = fecha.substr(0, 4);
        var mes = fecha.substr(4, 2);
        var dia = fecha.substr(6, 2);
        var fechaVenc = new Date();
        var fechaCam = mes + '/' + dia + '/' + anio;
        var fechaEvaluar = dia + '/' + mes + '/' + anio;
        var fechaVal = new Date(fechaCam);
        fechaVenc = new Date(fechaCam);
        console.log('Fecha a sumar --> ', fechaVal);
        this.fechaPermiso = fechaCam;
        fechaVenc.setDate(fechaVenc.getDate() + (this.diasSum)); // Debe colocarse la misma fecha
        console.log('Fecha nueva -->', fechaVenc);
        this.fechaAux = fechaVenc.toDateString().split(' ');
        var fechaConv = this.fechaAux[2] + '/' + this.fechaAux[1] + '/' + this.fechaAux[3];
        console.log('Fecha vencimiento -->', fechaConv);
        if (this.validar > 2) {
            this.fechaEnviar = this.transformNumber(fechaConv);
            this.fechaVencimiento = this.transform(fechaConv);
        }
        this.validar++;
        this.validarBtnAcep();
    };
    VistaCargaDocumentoComponent.prototype.transform = function (dateToFormat) {
        if (dateToFormat == undefined || dateToFormat == null) {
            return "Pendiente";
        }
        var now = new Date();
        if (dateToFormat.length == 10) {
            now = new Date(dateToFormat);
        }
        else {
            now = new Date(dateToFormat);
        }
        var date;
        var mes = now.getMonth();
        var hora = now.getHours().toString().length == 1 ? "0" + now.getHours().toString() : now.getHours().toString();
        var minutos = now.getMinutes().toString().length == 1 ? "0" + now.getMinutes().toString() : now.getMinutes().toString();
        var hour = hora + ":" + minutos;
        switch (mes) {
            case 0:
                date = now.getDate() + '/Ene/' + now.getFullYear();
                break;
            case 1:
                date = now.getDate() + '/Feb/' + now.getFullYear();
                break;
            case 2:
                date = now.getDate() + '/Mar/' + now.getFullYear();
                break;
            case 3:
                date = now.getDate() + '/Abr/' + now.getFullYear();
                break;
            case 4:
                date = now.getDate() + '/May/' + now.getFullYear();
                break;
            case 5:
                date = now.getDate() + '/Jun/' + now.getFullYear();
                break;
            case 6:
                date = now.getDate() + '/Jul/' + now.getFullYear();
                break;
            case 7:
                date = now.getDate() + '/Ago/' + now.getFullYear();
                break;
            case 8:
                date = now.getDate() + '/Sep/' + now.getFullYear();
                break;
            case 9:
                date = now.getDate() + '/Oct/' + now.getFullYear();
                break;
            case 10:
                date = now.getDate() + '/Nov/' + now.getFullYear();
                break;
            case 11:
                date = now.getDate() + '/Dic/' + now.getFullYear();
                break;
            default:
                break;
        }
        return date;
    };
    VistaCargaDocumentoComponent.prototype.cambiarVista = function () {
        this.vistaP.emit(true);
    };
    VistaCargaDocumentoComponent.prototype.recibirTipo = function ($event) {
        this.tipoP = $event.nombre;
    };
    VistaCargaDocumentoComponent.prototype.validarBtnAcep = function () {
        if (this.fechaEntrega && this.permisoAdquisicion && this.file && this.permisoAdquisicion !== ' ' && this.tipoP !== null && this.tipoP !== undefined && this.tipoP !== 'Seleccionar') {
            this.colorBoton = true;
        }
        else {
            this.colorBoton = false;
        }
    };
    VistaCargaDocumentoComponent.prototype.finalizar = function () {
        var _this = this;
        var idProducto;
        var fechaP = this.fechaPermiso.split('/');
        var fechaPermiso = fechaP[2] + '-' + fechaP[0] + '-' + fechaP[1];
        var datos = {
            idPPedido: this.idPPedido,
            idPedido: this.idPedido,
            noPermisoAdquisicion: this.permisoAdquisicion,
            fechaPermiso: fechaPermiso,
            fechaVencimiento: this.fechaEnviar,
            actaLiberacion: 'NA',
            tipoPermiso: this.tipoP
        };
        this._servicesAsuntos.cerrarPendietesPAP(datos).subscribe(function (data) {
            if (data.current !== 0) {
                idProducto = data.current;
                _this.guardarArchivo(idProducto);
            }
        });
    };
    VistaCargaDocumentoComponent.prototype.guardarArchivo = function (idProducto) {
        var _this = this;
        this._servicesAsuntos.uploadFile(this.file, idProducto, 'ProductoPAP', '').subscribe(function (data) {
            _this.ActualizarvistaP.emit(true);
        });
    };
    VistaCargaDocumentoComponent.prototype.transformNumber = function (dateToFormat) {
        if (dateToFormat == undefined || dateToFormat == null) {
            return "Pendiente";
        }
        var now = new Date();
        if (dateToFormat.length == 10) {
            now = new Date(dateToFormat);
        }
        else {
            now = new Date(dateToFormat);
        }
        var dia = now.getDate().toString();
        console.log('Dia-->', dia);
        if (dia.length > 1) {
        }
        else {
            dia = 0 + dia;
        }
        var date;
        var mes = now.getMonth();
        var hora = now.getHours().toString().length == 1 ? "0" + now.getHours().toString() : now.getHours().toString();
        var minutos = now.getMinutes().toString().length == 1 ? "0" + now.getMinutes().toString() : now.getMinutes().toString();
        var hour = hora + ":" + minutos;
        switch (mes) {
            case 0:
                date = now.getFullYear() + '-01-' + dia;
                break;
            case 1:
                date = now.getFullYear() + '-02-' + dia;
                break;
            case 2:
                date = now.getFullYear() + '-03-' + dia;
                break;
            case 3:
                date = now.getFullYear() + '-04-' + dia;
                break;
            case 4:
                date = now.getFullYear() + '-05-' + dia;
                break;
            case 5:
                date = now.getFullYear() + '-06-' + dia;
                break;
            case 6:
                date = now.getFullYear() + '-07-' + dia;
                break;
            case 7:
                date = now.getFullYear() + '-08-' + dia;
                break;
            case 8:
                date = now.getFullYear() + '-09-' + dia;
                break;
            case 9:
                date = now.getFullYear() + '-10-' + dia;
                break;
            case 10:
                date = now.getFullYear() + '-11-' + dia;
                break;
            case 11:
                date = now.getFullYear() + '-12-' + dia;
                break;
            default:
                break;
        }
        return date;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VistaCargaDocumentoComponent.prototype, "datos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaCargaDocumentoComponent.prototype, "vistaP", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaCargaDocumentoComponent.prototype, "ActualizarvistaP", void 0);
    VistaCargaDocumentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-vista-carga-documento',
            template: __webpack_require__("./src/app/components/asuntos-regulatorios/vista-carga-documento/vista-carga-documento.component.html"),
            styles: [__webpack_require__("./src/app/components/asuntos-regulatorios/vista-carga-documento/vista-carga-documento.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_asuntos_regulatorios_asuntos_regulatorios_service__["a" /* AsuntosRegulatoriosService */]])
    ], VistaCargaDocumentoComponent);
    return VistaCargaDocumentoComponent;
}());



/***/ })

});
//# sourceMappingURL=asuntos-regulatorios.module.chunk.js.map