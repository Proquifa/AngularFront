webpackJsonp(["productos-bo.module"],{

/***/ "./src/app/components/productos-bo/productos-bo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosBoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productos_bo_component__ = __webpack_require__("./src/app/components/productos-bo/productos-bo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductosBoRoutingModule = /** @class */ (function () {
    function ProductosBoRoutingModule() {
    }
    ProductosBoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__productos_bo_component__["a" /* ProductosBoComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ProductosBoRoutingModule);
    return ProductosBoRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/productos-bo/productos-bo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\n  <!--Seccion de menu-->\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\n    <aside [ngClass]=\"classAsideMenu\">\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\n        <pn-menu-seccion [items]=\"itemsMenu\" [titulo]=\"'GESTOR DE CONTENIDO'\"  style=\"width: 100%;\" *ngIf=\"activeMenu\"></pn-menu-seccion>\n      </div>\n    </aside>\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n    </div>\n  </div>\n  <!--Termina seccion de menu-->\n  <!--Empieza el area de trabajo-->\n  <div class=\"area\">\n    <!--Empieza la cabezera-->\n    <div class=\"cabezera\">\n      <div>\n        <div style=\"cursor: pointer;\" *ngIf=\"!vistaP\" (click)=\"regresarVistaP()\">\n          <img class=\"img\" src='./assets/Images/regresar.svg'/>\n        </div>\n        <label class=\"etiqueta\">GESTIONAR PRODUCTO BO</label>\n      </div>\n      <div *ngIf=\"!vistaP\">\n        <label class=\"title\">{{cliente}}</label>\n      </div>\n    </div>\n    <!--Termina la cabezera-->\n    <!--Empiezan los componentes-->\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 122px)'}\">\n      <div style=\"height: 100%; width: 100%;display: flex\" *ngIf=\"vistaP\">\n        <div class=\"primeraSec\">\n          <div class=\"titulosLista\">\n            <div  class=\"tituloCliente\">\n              <label class=\"tituloLista\">PROVEEDORES</label>\n            </div>\n            <div class=\"organizarLista\">\n              <div class=\"barraBusqueda\" style=\"height: 100%\">\n                <div class=\"buscar\">\n                  <div>\n                    <div class=\"lupa\">\n                      <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\n                    </div>\n                    <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Proveedor\" />\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--Lista total-->\n          <div class=\"listaSeccionUno\">\n            <div>\n              <div class= \"lista\" style=\"display: unset;flex-direction: column\" >\n                <div  *ngFor=\"let item of lista; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\n                  <div class=\"imagenFlecha\">\n                    <img src=\"./assets/Images/regresarAzul.svg\" class=\"flechaInicio\" (click)=\"seleccionarItem(i, item)\">\n                  </div>\n                  <div class=\"dfSelect\"></div>\n                  <div class=\"datosLst\" style=\"padding-top: 10px;padding-left: 15px; display: flex\">\n                    <div class=\"numeroIndex\">\n                      <label class=\"index\" style=\"font-family: Roboto-Regular\">#{{i +1}}</label>\n                    </div>\n                    <div class=\"informacionList\">\n                      <label style=\"color: #008894\">{{item.proveedor}} </label>\n                      <p>{{item.totalProductos}} Productos en BO</p>\n                      <h3>{{item.totalControlados}} Controlados · <span style=\"color: #4BA92B\">{{item.totalNoControlados}} No controlados</span></h3>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"totales\">\n              <label># {{listaUniverso.length}}</label>\n              <label>{{totalProductos}} Productos</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"contenidoGrafica\">\n          <div class=\"grafica\">\n            <div style=\"padding-right: 10px\">\n              <label>PROVEEDORES</label>\n              <div>\n                <pn-donut-chart *ngIf=\"activarGrProv\" [data]=\"dataProveedores\" [tipoGrafica]=\"tipoGraficaProveedores\" [height]=\"'auto'\" [idGrafica]=\"'proveedores'\"></pn-donut-chart>\n              </div>\n            </div>\n            <div style=\"padding-left: 10px\">\n              <label>LÍNEAS</label>\n              <div>\n                <pn-donut-chart *ngIf=\"activarGrLinea\" [data]=\"dataLineas\" [tipoGrafica]=\"tipoGraficaLineas\" [height]=\"'auto'\"  [idGrafica]=\"'lineas'\"></pn-donut-chart>\n              </div>\n            </div>\n          </div>\n          <div class=\"grafica\" style=\"align-items: center;flex-direction: column;\">\n            <label>PRODUCTOS CONTROLADOS</label>\n            <div>\n              <pn-grafica-barras *ngIf=\"activarGraficaBarra\" [data]=\"dataBarra\" [idGrafica]=\"'barra'\" style=\"    width: 100%;height: 100%;display: flex;\"></pn-grafica-barras>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--vista siguiente-->\n      <pn-vista-gestion-producto *ngIf=\"!vistaP\" [datosProveedor]=\"item\" (vistaP)=\"vistaPrincipal($event)\" (finalizarLista)=\"cargarVistaP($event)\"></pn-vista-gestion-producto>\n    </div>\n    <!--Terminan los componentes-->\n    <div style=\"width: 100%;height: 55px\">\n      <footer class=\"footer\">\n        <div class=\"datosFooter\">\n          <div class=\"Prioridad1\">\n            <label class=\"p1\">BO: </label> Back Order\n          </div>\n        </div>\n      </footer>\n    </div>\n  </div>\n  <!--Termina area de trabajo-->\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/productos-bo/productos-bo.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.padre {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n.aux .asideNormalMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  min-width: 181px;\n  width: 321px;\n  height: 100%;\n  overflow-y: scroll; }\n.aux .asideNormalMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n.aux > .asideOcultarMenu {\n  -webkit-animation-name: ocultarMenu;\n          animation-name: ocultarMenu;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-transition: 1s ease-in-out;\n  transition: 1s ease-in-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 0px;\n  width: 0px; }\n.aux > .asideOcultarMenu > .articulo {\n    width: 0px; }\n.aux > .asideMostrarMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  -webkit-animation-name: mostrarMenu;\n          animation-name: mostrarMenu;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-y: scroll; }\n.aux > .asideMostrarMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n@-webkit-keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@-webkit-keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n@keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n.area {\n  width: 100%;\n  height: 100%;\n  overflow: auto; }\n.cabezera {\n  width: 100%;\n  height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 13px;\n  padding-right: 13px;\n  border-bottom: 2px solid black;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n.cabezera > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.cabezera > div > .title {\n      font-family: Novecento;\n      font-weight: bold;\n      font-size: 24px;\n      color: #008894;\n      text-align: right; }\n.etiqueta {\n  color: #5B5B5B;\n  font-size: 25px;\n  font-family: Novecento;\n  margin-bottom: 5px; }\n.img {\n  cursor: pointer; }\n.lista {\n  border-bottom: solid 1px #ECEEF0;\n  border-bottom: solid 1px #ECEEF0;\n  width: 100%;\n  min-height: 80px;\n  font-size: 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  line-height: 1.3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto; }\n.lista > .index {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    height: 52px; }\n.lista > .datosLst {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto; }\n.lista > .datosLst > p {\n      font-weight: normal; }\n.lista div:hover {\n    background-color: #ECEEF0; }\n.lista > .divActual {\n    background-color: #ECEEF0;\n    -webkit-box-shadow: 0 2px 4px -3px #008895;\n            box-shadow: 0 2px 4px -3px #008895; }\n.lista > .divActive {\n    background-color: #ECEEF0; }\n.lista > .divActive .dfSelect {\n      background: #008895 !important;\n      width: 5px !important;\n      color: #008895; }\n.lista > .divActive .datosLst label {\n      color: #008895;\n      padding-left: -2px;\n      font-family: \"Roboto-Bold\";\n      font-size: 28px; }\n.lista > .divActive .datosLst p {\n      font-family: \"Roboto-Bold\";\n      font-size: 24px;\n      color: #000000;\n      line-height: 26px; }\n.lista > .divActive .datosLst h3 {\n      font-family: \"Roboto-regular\";\n      font-size: 21px; }\n.textoPiezas {\n  font-family: \"Roboto-regular\";\n  font-size: 21px; }\n.titulo {\n  padding-left: 30px;\n  font-family: Novecentowide;\n  font-weight: Bold;\n  font-size: 24px; }\n.buscar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  height: 50px;\n  width: 100%;\n  border-style: solid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.buscar div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 100%;\n    border-radius: 102px 102px 102px 102px;\n    -moz-border-radius: 102px 102px 102px 102px;\n    -webkit-border-radius: 102px 102px 102px 102px;\n    border: 0.5px solid #BFC0C7;\n    height: 26px; }\n.buscar div div {\n      border: none;\n      border-radius: 0px 0px 0px 0px;\n      -moz-border-radius: 0px 0px 0px 0px;\n      -webkit-border-radius: 0px 0px 0px 0px;\n      border: 0px solid #000000;\n      width: 40px;\n      background: transparent;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n.buscar div .buscar-input {\n      background: transparent;\n      border-radius: 100px;\n      -moz-border-radius: 102px 102px 102px 102px;\n      border: 0px solid #000000;\n      width: 100%;\n      font-family: Helvetica;\n      font-size: 18px;\n      color: #AAA9AF;\n      outline: none;\n      padding-left: 5px; }\n.barraBusqueda {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.footer {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n  align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 57px;\n  max-height: 57px;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: row;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -ms-flex-pack: start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n  align-content: stretch;\n  -ms-flex-align: stretch;\n  -webkit-box-align: inherit;\n          align-items: inherit;\n  border-top: 2px solid black;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  font-size: 14px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.linea {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  text-align: center; }\n.datosFooter {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 14px; }\n.Prioridad1, .Prioridad2, .Prioridad3, .Ambiente, .Congelación, .Refrigeración, .Pedimento {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 0.7%;\n  margin-right: 0.7%; }\n.p1 {\n  color: #424242;\n  font-weight: bold; }\n.p2 {\n  color: #424242;\n  font-weight: bold; }\n.p3 {\n  color: #424242;\n  font-weight: bold; }\n.datosC {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-width: 1608px;\n  margin-left: 20px;\n  margin-right: 20px;\n  width: 98%; }\n.tituloGrafica {\n  font-size: calc((1vh + 1vw) / 2);\n  font-weight: bold;\n  font-family: Novecento; }\n.grafica {\n  height: 50%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-bottom: 20px;\n  padding-top: 20px; }\n.grafica > label {\n    font-family: Novecento;\n    font-weight: bold;\n    font-size: calc((1vh + 1vw) / 2);\n    color: #424242;\n    height: 10%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-align: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n.grafica > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 50%;\n    height: 100%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.grafica > div > label {\n      font-family: Novecento;\n      font-weight: bold;\n      font-size: calc((1vh + 1vw) / 2);\n      color: #424242;\n      height: 10%;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      text-align: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n.grafica > div > div {\n      height: 85%;\n      width: 100%; }\n.contenidoGrafica {\n  width: 70%;\n  background: #ECEEF0;\n  height: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 20px;\n  padding-right: 20px; }\n/******/\n.menu {\n  position: relative; }\n.menu:HOVER {\n  cursor: pointer; }\n.tituloCliente {\n  width: 100%;\n  height: 50%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.titulosLista {\n  height: 10%;\n  padding-top: 15px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-bottom: 15px;\n  min-height: 90px; }\n.tituloLista {\n  font-size: 24px;\n  font-family: Novecento;\n  font-weight: bold; }\n.organizarLista {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 10px;\n  position: relative;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 50%; }\n.primeraSec {\n  width: 30%;\n  background: #FFFFFF;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-left: 20px;\n  margin-right: 20px;\n  min-width: 350px; }\n.primeraSec > .listaSeccionUno {\n    height: 90%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n.primeraSec > .listaSeccionUno > div {\n      height: calc(100% - 30px);\n      border-bottom: 1px solid;\n      width: 100%;\n      border-top: 1px solid;\n      overflow: scroll; }\n.primeraSec > .listaSeccionUno > .totales {\n      height: 30px;\n      width: 100%;\n      border-bottom: 0;\n      border-top: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n.informacionList {\n  font-family: Roboto;\n  width: 85%;\n  padding-top: 8px; }\n.informacionList > label {\n    color: #008894;\n    font-weight: bold;\n    font-size: 28px;\n    font-family: Roboto;\n    line-height: 1; }\n.informacionList > h3 {\n    font-family: Roboto;\n    font-size: 18px;\n    color: #DE0209;\n    text-align: left;\n    font-weight: 400; }\n.informacionList > p {\n    font-family: Roboto;\n    font-weight: bold;\n    font-size: 22px;\n    color: #424242; }\n.numeroIndex {\n  font-size: 28px;\n  font-family: Roboto-Regular;\n  text-align: left;\n  padding-right: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 4px; }\n.subtitulo {\n  font-family: Roboto;\n  font-weight: 400;\n  font-size: 18px;\n  color: #424242;\n  text-align: left; }\n.imagenFlecha {\n  position: absolute;\n  right: 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  height: 100%;\n  padding-right: 5px; }\n.flechaInicio {\n  cursor: pointer;\n  width: 100%;\n  -webkit-transform: rotate(-180deg);\n  transform: rotate(-180deg); }\n.index {\n  font-family: Roboto;\n  font-weight: 400;\n  font-size: 28px;\n  color: #424242;\n  text-align: left; }\n"

/***/ }),

/***/ "./src/app/components/productos-bo/productos-bo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosBoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_productos_bo_productos_bo_service__ = __webpack_require__("./src/app/services/productos-bo/productos-bo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductosBoComponent = /** @class */ (function () {
    /**************************/
    function ProductosBoComponent(comunService, _productosBO, coreContainer) {
        this.comunService = comunService;
        this._productosBO = _productosBO;
        this.coreContainer = coreContainer;
        this.classAsideMenu = 'asideNormalMenu';
        /**********DATOS DE EJEMPLO GRAFICAS****/
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
            titulo: 'Clientes',
            labels: ['Totales'],
            valores: [6, 3],
            labelsExtras: [['clientes'], ['Ordenes de compra'], ['Piezas'], ['Monto']],
            labelsExtrasHover: ['clientes', 'Ordenes de compra', 'Piezas', 'Monto'],
            valuesExtras: [6, 324, 157, 5000],
            valuesExtrasHover: [[6, 3, 1, 2], [324, 157, 50, 100]]
        };
        this.tipoGrafica = 'General';
        /*****PRUEBA DE LISTA*****/
        this.lista = [];
        this.listaUniverso = [];
        this.listaBarra = [];
        this.filtroProveedores = [];
        this.listaLineas = [];
        this.filtroLinea = [];
    }
    ProductosBoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'productosBO') {
                _this.obtenerDatos();
            }
        });
        this.vistaP = true;
        this.obtenerDatos();
    };
    ProductosBoComponent.prototype.regresarVistaP = function () {
        this.vistaP = true;
    };
    ProductosBoComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    ProductosBoComponent.prototype.obtenerDatos = function () {
        var _this = this;
        this.activarGrProv = false;
        this.activarGraficaBarra = false;
        this.totalProductos = 0;
        this.coreContainer.openModal(0);
        this._productosBO.obtenerGraficaProveedor().subscribe(function (data) {
            _this.listaBarra = data.current.barra;
            _this.lista = data.current.lista;
            _this.listaUniverso = data.current.lista;
            for (var i = 0; i < _this.listaUniverso.length; i++) {
                _this.totalProductos += _this.listaUniverso[i].totalProductos;
            }
            _this.listaProveedores = data.current.grafica;
            var listaLineas = data.current.porFamilia;
            for (var i = 0; i < listaLineas.length; i++) {
                if (listaLineas[i].etiqueta === 'Estandares Químico' || listaLineas[i].etiqueta === 'Estandares Biológico' || listaLineas[i].etiqueta === 'Reactivos Biológico'
                    || listaLineas[i].etiqueta === 'Reactivos Químico' || listaLineas[i].etiqueta === 'Labware' || listaLineas[i].etiqueta === 'Publicaciones') {
                    _this.listaLineas.push(listaLineas[i]);
                }
            }
            _this.limpiarVariablesGrafica();
            _this.calcularDatosParaGraficas();
            _this.graficaBarra();
            _this.coreContainer.closeModal(0);
            _this.iniciarMenu(data.current['totales'].totalProductos);
        }, function (error) {
            _this.coreContainer.closeModal(0);
            console.log(error);
        });
    };
    ProductosBoComponent.prototype.iniciarMenu = function (totProd) {
        if (totProd === null) {
            totProd = 0;
        }
        this.itemsMenu = [
            { nombre: 'Gestionar Producto BO', url: 'productosBO', tipo: 'valor', valor: totProd },
        ];
        this.activeMenu = true;
    };
    /// Funcion de buscar en facturacion
    ProductosBoComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search == "") {
            this.lista = this.listaUniverso.slice();
        }
        else {
            this.listaUniverso.forEach(function (folio) {
                if (folio.proveedor.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.lista = searchArrayAux;
        }
    };
    ProductosBoComponent.prototype.graficaBarra = function () {
        var nombres = [];
        var colores = [];
        var datos = [];
        this.listaBarra.forEach(function (folio) {
            nombres.push(folio.control);
            datos.push(folio.totalControlados);
            if (folio.control === 'Controlados') {
                colores.push('#DE0209');
            }
            else if (folio.control === 'No Controlados') {
                colores.push('#4BA92B');
            }
        });
        if (this.listaBarra.length === 1) {
            datos.push(0);
            if (this.listaBarra[0].control === 'Controlados') {
                colores.push('#4BA92B');
                nombres.push('No Controlados');
            }
            else if (this.listaBarra[0].control === 'No Controlados') {
                colores.push('#DE0209');
                nombres.push('Controlados');
            }
        }
        if (this.listaBarra.length > 0) {
            this.dataBarra = {
                labels: nombres,
                values: datos,
                barBackground: colores
            };
        }
        else {
            this.dataBarra = {
                labels: ['Controlados', 'No Controlados'],
                values: [0, 0],
                barBackground: []
            };
        }
        this.activarGraficaBarra = true;
    };
    ProductosBoComponent.prototype.limpiarVariablesGrafica = function () {
        var _this = this;
        //////// Emìeza grafica proveedores //////
        var valoresP = [];
        var valoresProv = [];
        for (var _i = 0, _a = this.listaProveedores; _i < _a.length; _i++) {
            var nombre = _a[_i];
            this.filtroProveedores.push(nombre.proveedor);
            valoresProv.push([0, 0]);
            valoresP.push(0);
        }
        if (valoresP.length > 0) {
            this.dataProveedores = {
                titulo: 'Totales',
                labels: this.filtroProveedores,
                valores: valoresP,
                labelsExtras: ['Proveedores', 'Producto'],
                labelsExtrasHover: ['Proveedores', 'Productos'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresProv,
            };
            this.tipoGraficaProveedores = 'General';
        }
        else {
            this.dataProveedores = {
                titulo: 'Totales',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Proveedores', 'Producto'],
                labelsExtrasHover: ['Proveedores', 'Producto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: [[0, 0]],
            };
            this.tipoGraficaProveedores = 'Gris';
            setTimeout(function () {
                _this.activarGrProv = true;
            }, 5);
        }
        //////// Emìeza grafica lineas //////
        var valoresL = [];
        var valoresLineas = [];
        for (var _b = 0, _c = this.listaLineas; _b < _c.length; _b++) {
            var nombre = _c[_b];
            this.filtroLinea.push(nombre.etiqueta);
            valoresProv.push([0]);
            valoresL.push(0);
        }
        if (valoresL.length > 0) {
            this.dataLineas = {
                titulo: 'Totales',
                labels: this.filtroLinea,
                valores: valoresL,
                labelsExtras: ['Estándares Biologico', 'Estándares Químicos', 'Reactivos Biológicos', 'Reactivos Químico', 'Labware', 'Publicaciones'],
                labelsExtrasHover: ['Productos'],
                valuesExtras: [0, 0, 0, 0, 0, 0],
                valuesExtrasHover: valoresProv,
            };
            this.tipoGraficaLineas = 'General';
        }
        else {
            this.dataLineas = {
                titulo: 'Totales',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Estándares Biologico', 'Estándares Químicos', 'Reactivos Biológicos', 'Reactivos Químico', 'Labware', 'Publicaciones'],
                labelsExtrasHover: ['Producto'],
                valuesExtras: [0, 0, 0, 0, 0, 0],
                valuesExtrasHover: [[0]],
            };
            this.tipoGraficaLineas = 'Gris';
            setTimeout(function () {
                _this.activarGrLinea = true;
            }, 5);
        }
    };
    ProductosBoComponent.prototype.calcularDatosParaGraficas = function () {
        if (this.listaProveedores.length > 0) {
            for (var _i = 0, _a = this.listaProveedores; _i < _a.length; _i++) {
                var proveedor = _a[_i];
                this.llenarTotalesGraficas(this.dataProveedores, proveedor, 'PROVEEDORES');
            }
        }
        if (this.listaLineas.length > 0) {
            for (var _b = 0, _c = this.listaLineas; _b < _c.length; _b++) {
                var linea = _c[_b];
                this.llenarTotalesGraficas(this.dataLineas, linea, 'LINEAS');
            }
        }
    };
    ProductosBoComponent.prototype.llenarTotalesGraficas = function (total, elemento, graficaElegida) {
        var _this = this;
        switch (graficaElegida) {
            case 'PROVEEDORES':
                var posicion2 = this.filtroProveedores.indexOf(elemento.proveedor);
                total.valores[posicion2] += elemento.totalProductos;
                total.valuesExtras[0] += 1;
                total.valuesExtras[1] += elemento.totalProductos;
                total.valuesExtrasHover[posicion2][0] += 1;
                total.valuesExtrasHover[posicion2][1] = elemento.totalProductos;
                /*---------Termina------*/
                setTimeout(function () {
                    _this.activarGrProv = true;
                }, 5);
                break;
            case 'LINEAS':
                var posicion1 = this.filtroLinea.indexOf(elemento.etiqueta);
                total.valores[posicion1] += elemento.totalProductos;
                if (elemento.etiqueta === 'Estandares Químico') {
                    total.valuesExtras[1] += elemento.totalProductos;
                }
                else if (elemento.etiqueta === 'Estandares Biológico') {
                    total.valuesExtras[0] += elemento.totalProductos;
                }
                else if (elemento.etiqueta === 'Reactivos Biológico') {
                    total.valuesExtras[2] += elemento.totalProductos;
                }
                else if (elemento.etiqueta === 'Reactivos Químico') {
                    total.valuesExtras[3] += elemento.totalProductos;
                }
                else if (elemento.etiqueta === 'Labware') {
                    total.valuesExtras[4] += elemento.totalProductos;
                }
                else if (elemento.etiqueta === 'Publicaciones') {
                    total.valuesExtras[5] += elemento.totalProductos;
                }
                total.valuesExtrasHover[posicion1][0] = elemento.totalProductos;
                /*---------Termina------*/
                setTimeout(function () {
                    _this.activarGrLinea = true;
                }, 5);
                break;
        }
    };
    ProductosBoComponent.prototype.seleccionarItem = function (i, item) {
        console.log(item);
        this.item = item;
        this.cliente = item.proveedor;
        this.vistaP = false;
    };
    ProductosBoComponent.prototype.vistaPrincipal = function (valor) {
        if (valor === false) {
            this.regresarVistaP();
        }
        else if (valor === true) {
            this.obtenerDatos();
        }
    };
    ProductosBoComponent.prototype.cargarVistaP = function () {
        this.regresarVistaP();
        this.obtenerDatos();
    };
    ProductosBoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-productos-bo',
            template: __webpack_require__("./src/app/components/productos-bo/productos-bo.component.html"),
            styles: [__webpack_require__("./src/app/components/productos-bo/productos-bo.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_1__services_productos_bo_productos_bo_service__["a" /* ProductosBoService */], __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], ProductosBoComponent);
    return ProductosBoComponent;
}());



/***/ }),

/***/ "./src/app/components/productos-bo/productos-bo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosBoModule", function() { return ProductosBoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__productos_bo_routing_module__ = __webpack_require__("./src/app/components/productos-bo/productos-bo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productos_bo_component__ = __webpack_require__("./src/app/components/productos-bo/productos-bo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_grafica_barras_grafica_barras_module__ = __webpack_require__("./src/app/components/shared/grafica-barras/grafica-barras.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vista_gestion_producto_vista_gestion_producto_component__ = __webpack_require__("./src/app/components/productos-bo/vista-gestion-producto/vista-gestion-producto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_combo_flecha_verde_combo_flecha_verde_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-verde/combo-flecha-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_alerta_alerta_module__ = __webpack_require__("./src/app/components/shared/alerta/alerta.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ProductosBoModule = /** @class */ (function () {
    function ProductosBoModule() {
    }
    ProductosBoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__productos_bo_routing_module__["a" /* ProductosBoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_grafica_barras_grafica_barras_module__["a" /* GraficaBarrasModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_combo_flecha_verde_combo_flecha_verde_module__["a" /* ComboFlechaVerdeModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_alerta_alerta_module__["a" /* AlertaModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__productos_bo_component__["a" /* ProductosBoComponent */],
                __WEBPACK_IMPORTED_MODULE_8__vista_gestion_producto_vista_gestion_producto_component__["a" /* VistaGestionProductoComponent */]
            ]
        })
    ], ProductosBoModule);
    return ProductosBoModule;
}());



/***/ }),

/***/ "./src/app/components/productos-bo/vista-gestion-producto/vista-gestion-producto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"areaSeccion\">\n  <div>\n    <div>\n      <div style=\"width: 40%;flex-direction: column;padding-right: 20px\">\n        <div class=\"titulosLista\">\n          <div  class=\"tituloCliente\">\n            <label class=\"tituloLista\">PRODUCTOS</label>\n          </div>\n          <div class=\"filtro\">\n            <div style=\"padding-right: 10px\">\n              <pn-combo-flecha-verde [items]=\"listaLineas\" [itemSelect]=\"selectedLinea\" [heightLi]=\"'35px'\" (valueDropList)=\"recibirFiltro($event, 'linea')\"></pn-combo-flecha-verde>\n            </div>\n            <div style=\"padding-left: 10px\">\n              <pn-combo-flecha-verde [items]=\"listaTipos\" [itemSelect]=\"selectedTipo\" [heightLi]=\"'35px'\" (valueDropList)=\"recibirFiltro($event, 'tipo')\"></pn-combo-flecha-verde>\n            </div>\n          </div>\n          <div class=\"organizarLista\">\n            <div style=\"width: 10%; height: 100%;    display: flex;align-items: center;\">\n              <div class=\"menu\" (click)=\"abreCombo()\">\n                <div>\n                </div>\n                <div>\n                </div>\n                <div>\n                </div>\n                <section id=\"section\">\n                  <ul class=\"listaHamburguesa\">\n                    <li (click)=\"ordenamientoFechaTramNue()\">Más Recientes</li>\n                    <li (click)=\"ordenamientoFechaTramAnt()\">Más Antiguos</li>\n                  </ul>\n                </section>\n              </div>\n            </div>\n            <div style=\"width: 38%; height: 100%;    display: flex;align-items: center;\">\n              <h3 class=\"subtitulo\">{{tipoOrden}}</h3>\n            </div>\n            <div class=\"barraBusqueda\" style=\"height: 100%\">\n              <div class=\"buscar\">\n                <div>\n                  <div class=\"lupa\">\n                    <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\n                  </div>\n                  <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"tipoBuscar($event)\" class=\"buscar-input\" placeholder=\"Cliente\" />\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--Lista total-->\n        <div class=\"segundaSeccionList\">\n          <div style=\"width: 99%;display: flex;overflow: auto;position: relative;height: 100%;\">\n            <div class= \"lista\" style=\"display: unset;flex-direction: column\">\n              <div [ngClass]=\"item.codigo === codigo? 'divActive': ''\" *ngFor=\"let item of lista; let i = index;\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\n                <div class=\"dfSelect\"></div>\n                <div class=\"datosLst\" style=\"padding-top: 5px;padding-left: 15px;display: flex; width: 100%;box-sizing: border-box;padding-bottom: 10px;\" (click)=\"seleccionarItem(item, i)\">\n                  <div class=\"informacionList\">\n                    <label> #{{i +1}} · <span>{{item.proveedor}}</span> · {{item.codigo}}  <span [style.color]=\"item.control === 'Controlados' ? '#DE0209': '#4BA92B'\">· {{item.control}}</span></label>\n                    <label style=\"font-size: 19px; font-weight: 400\">{{item.descripcion}}</label>\n                    <h1>{{item.referencia}} · {{item.presentacion}}</h1>\n                    <h3> Fecha de Inicio: {{item.fechaInicio}}</h3>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"totales\">\n          <label>{{listaUniverso.length}} Productos</label>\n        </div>\n      </div>\n      <!--linea degradada-->\n      <div class=\"borderLine\"></div>\n      <!---->\n      <div style=\"padding-left: 20px;flex-direction: column\" class=\"razon\">\n        <div *ngIf=\"seleccionado\" style=\"height: calc(100% - 50px); width: 100%\">\n          <div class=\"tituloProducto\">\n            <label class=\"tituloLista\">PRODUCTO NO DISPONIBLE</label>\n          </div>\n          <div class=\"infoProducto\">\n            <div class=\"imgProveedor\">\n              <img [src]=\"pathImg\" class=\"producto\" [style.padding-right]=\"tipoImagen? '10px' : 'initial'\">\n            </div>\n            <div *ngIf=\"seleccionado\" class=\"selectedData\">\n              <div>\n                <label> #{{indice}} · {{itemSelect.codigo}} · {{itemSelect.presentacion}}</label>\n                <h3 style=\"font-weight: lighter; font-size: 25px\">{{itemSelect.descripcion}}</h3>\n                <span>{{itemSelect.referencia}} · <span [style.color]=\"itemSelect.control === 'Controlados' ? '#DE0209': '#4BA92B'\">{{itemSelect.control}}</span></span>\n                <h1>Marca: <span class=\"marca\">{{itemSelect.proveedor}}</span></h1>\n              </div>\n              <div style=\"width: 30%;align-items: center\">\n                <span>{{itemSelect.fechaInicio}}</span>\n                <h1>Fecha de Inicio BO</h1>\n              </div>\n            </div>\n          </div>\n          <div class=\"infoPrincipal\">\n            <div>\n              <label>Razón del Producto en BackOrder</label>\n              <pn-combo-flecha-verde [items]=\"listaRazones\" [itemSelect]=\"selectedRazon\" [heightLi]=\"'35px'\"  style=\"max-width: 737px\" (valueDropList)=\"recibirRazon($event)\"></pn-combo-flecha-verde>\n            </div>\n            <div *ngIf=\"activarFecha\">\n              <label>Fecha Estimada de Disponibilidad</label>\n              <pq-date-picker style=\"max-width: 250px;display: flex;align-items: center;\" dateFormat=\"YYYYMMDD\" (fecha)=\"getFechaImpl($event)\" [(date)]=\"date\" [color]=\"false\"></pq-date-picker>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"!seleccionado\" class=\"bloqueoCarga\">\n          <label>SELECCIONA UN PRODUCTO PARA VISUALIZAR ESTA SECCIÓN</label>\n        </div>\n        <div class=\"btn\">\n            <div (click)=\"cancelar()\" style=\"background: #008894\">\n              <label>CANCELAR</label>\n            </div>\n            <div [style.background-color]=\"activarBtn? '#008894': '#C2C3C9'\" [style.pointer-events]=\"activarBtn? 'auto':'none'\" (click)=\"finalizar()\">\n              <label>ACEPTAR</label>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<pq-alerta [activarBoton]=\"false\" [alertaTxt]=\"'Operación Exitosa'\" (confirmacion)=\"cerrarPop($event)\" *ngIf=\"activarAlert\"></pq-alerta>\n"

/***/ }),

/***/ "./src/app/components/productos-bo/vista-gestion-producto/vista-gestion-producto.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n.areaSeccion {\n  min-width: 1295px;\n  min-height: 515px;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 20px 20px 20px 20px; }\n.areaSeccion > div {\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n.areaSeccion > div > div {\n      width: 100%;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n.areaSeccion > div > div > div {\n        width: 60%;\n        height: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n.areaSeccion > div > div > .razon {\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n.areaSeccion > div > div > .razon > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column; }\n.areaSeccion > div > div > .razon > div > label {\n            font-family: Novecento;\n            font-weight: bold;\n            font-size: 40px;\n            color: #D8D9DD;\n            text-align: center;\n            line-height: 55px;\n            max-width: 677px; }\n.areaSeccion > div > div > .razon > .btn {\n          height: 50px;\n          width: 100%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          -webkit-box-align: end;\n              -ms-flex-align: end;\n                  align-items: flex-end; }\n.areaSeccion > div > div > .razon > .btn > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            width: 170px;\n            height: 31px;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center;\n            -ms-flex-line-pack: center;\n                align-content: center;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            background: #C2C3C9;\n            cursor: pointer; }\n.areaSeccion > div > div > .razon > .btn > div > label {\n              font-family: Novecento;\n              font-weight: bold;\n              font-size: 20px;\n              color: #FFFFFF;\n              text-align: left;\n              -webkit-box-align: center;\n                  -ms-flex-align: center;\n                      align-items: center;\n              margin-bottom: 4px;\n              cursor: pointer; }\n.areaSeccion > div > div > .borderLine {\n        width: 1.1px;\n        height: 100%;\n        background: -webkit-gradient(linear, left bottom, left top, color-stop(2%, #FFFFFF), color-stop(70%, #BCBCBC), color-stop(93%, #FFFFFF)) 100%;\n        background: linear-gradient(to top, #FFFFFF 2%, #BCBCBC 70%, #FFFFFF 93%) 100%; }\n.titleData {\n  font-family: Roboto;\n  font-weight: bold;\n  font-size: 24px;\n  color: #008895;\n  text-align: left; }\n.icono {\n  width: 16px;\n  margin-right: 5px; }\n.tituloLista {\n  font-size: 24px;\n  font-family: Novecento;\n  font-weight: bold; }\n.numeroIndex {\n  font-size: 28px;\n  font-family: Roboto-Regular;\n  text-align: left;\n  width: 10%;\n  padding-right: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 4px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.numeroIndex label {\n    font-family: Roboto;\n    font-weight: 400;\n    font-size: 18px;\n    color: #424242;\n    text-align: left; }\n.informacionList {\n  font-family: Roboto;\n  width: 95%;\n  padding-top: 8px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n.informacionList > label {\n    color: #424242;\n    font-weight: bold;\n    font-size: 20px;\n    font-family: Roboto;\n    line-height: 1;\n    overflow: hidden; }\n@supports (-webkit-line-clamp: 3) {\n      .informacionList > label {\n        display: block;\n        display: -webkit-box !important;\n        line-height: 1.1;\n        -webkit-line-clamp: 3;\n        -webkit-box-orient: vertical;\n        text-overflow: ellipsis; } }\n@supports not (-webkit-line-clamp: 3) {\n      .informacionList > label {\n        position: relative;\n        line-height: 1.1;\n        overflow: hidden;\n        width: 100%; }\n        .informacionList > label:before {\n          content: \"\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\";\n          position: absolute;\n          bottom: 0;\n          right: 0;\n          background: transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;\n          background: transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%; } }\n.informacionList h3 {\n    line-height: 1.5;\n    margin-top: 4px;\n    font-weight: 400;\n    font-family: Roboto-Regular;\n    font-size: 17px;\n    color: #848387;\n    text-align: left; }\n.informacionList span {\n    font-family: Roboto;\n    font-weight: bold;\n    font-size: 20px;\n    color: #008894;\n    text-align: left; }\n.informacionList h1 {\n    font-family: Roboto;\n    font-weight: 400;\n    font-size: 18px;\n    color: #008894;\n    text-align: left; }\n.informacionList .tooltip {\n    font-family: Roboto;\n    font-weight: 400;\n    font-size: 18px;\n    position: relative;\n    display: inline-block;\n    cursor: pointer; }\n.informacionList .tooltip > .tooltiptext::after {\n      content: \" \";\n      position: absolute;\n      bottom: 100%;\n      /* At the top of the tooltip */\n      left: 50%;\n      margin-left: -5px;\n      border-width: 5px;\n      border-style: solid;\n      border-color: transparent transparent #4C4C4C transparent; }\n.informacionList .tooltip:hover > .tooltiptext {\n      visibility: visible;\n      opacity: 1;\n      text-align: center;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n.informacionList .tooltip > .tooltiptext {\n      visibility: hidden;\n      width: initial;\n      background-color: #424242;\n      color: #FFFFFF;\n      font-family: 'Roboto';\n      text-align: left;\n      padding: 5px 10px 0px 0px;\n      font-size: 9px;\n      padding: 5px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      left: 50%;\n      margin-top: 0px;\n      -webkit-box-pack: center;\n      -ms-flex-pack: center;\n      justify-content: center;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center;\n      /* Position the tooltip */\n      position: absolute;\n      z-index: 1; }\n.informacionList .tooltip > label {\n      color: #FFFFFF; }\n.tituloProducto {\n  height: 65px;\n  width: 100%; }\n.segundaSeccionList {\n  height: 85%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 1px solid;\n  width: 100%;\n  border-top: 1px solid;\n  overflow: auto; }\n.tituloCliente {\n  width: 100%;\n  height: 33%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-bottom: 5px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.lista {\n  width: 100%;\n  min-height: 80px;\n  font-size: 20px;\n  padding: 15px 19px 14px 13px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  line-height: 1.3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto; }\n.lista > .index {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    height: 52px; }\n.lista > .datosLst {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto; }\n.lista > .datosLst > p {\n      font-weight: normal; }\n.lista div:hover {\n    background-color: #ECEEF0; }\n.lista > .divActual {\n    background-color: #ECEEF0;\n    -webkit-box-shadow: 0 2px 4px -3px #008895;\n            box-shadow: 0 2px 4px -3px #008895; }\n.lista > .divActive {\n    background-color: #ECEEF0; }\n.lista > .divActive .dfSelect {\n      background: #008895 !important;\n      width: 5px !important;\n      color: #008895; }\n.lista > .divActive .datosLst {\n      -webkit-box-ordinal-group: 1;\n          -ms-flex-order: 0;\n              order: 0;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n      -ms-flex-item-align: auto;\n          -ms-grid-row-align: auto;\n          align-self: auto; }\n.titulosLista {\n  height: 15%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-bottom: 15px;\n  min-height: 90px; }\n.filtro {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 33%;\n  width: 100%; }\n.filtro > div {\n    height: 100%;\n    width: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.filtro > div > pn-combo-flecha-verde {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n.organizarLista {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 10px;\n  position: relative;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 33%; }\n.titulo {\n  padding-left: 30px;\n  font-family: Novecentowide;\n  font-weight: Bold;\n  font-size: 24px; }\n.buscar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  width: 100%;\n  border-style: solid; }\n.buscar div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 100%;\n    border-radius: 102px 102px 102px 102px;\n    -moz-border-radius: 102px 102px 102px 102px;\n    -webkit-border-radius: 102px 102px 102px 102px;\n    border: 0.5px solid #BFC0C7;\n    height: 26px; }\n.buscar div div {\n      border: none;\n      border-radius: 0px 0px 0px 0px;\n      -moz-border-radius: 0px 0px 0px 0px;\n      -webkit-border-radius: 0px 0px 0px 0px;\n      border: 0px solid #000000;\n      width: 40px;\n      background: transparent;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n.buscar div .buscar-input {\n      background: transparent;\n      border-radius: 100px;\n      -moz-border-radius: 102px 102px 102px 102px;\n      border: 0px solid #000000;\n      width: 100%;\n      font-family: Helvetica;\n      font-size: 18px;\n      color: #AAA9AF;\n      outline: none;\n      padding-left: 5px; }\n.barraBusqueda {\n  width: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n.barraBusqueda {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.cargaDoc {\n  width: 100%;\n  height: 100%;\n  background-color: #ECEEF0;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative; }\n.carga {\n  display: none; }\n.carga::-webkit-file-upload-button {\n    opacity: 0; }\n.recargar {\n  width: 100%;\n  height: 5%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n.contentRefuse {\n  height: 100%;\n  overflow: auto;\n  width: 69%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative; }\n.vistDoc {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 20px;\n  padding-bottom: 10px;\n  padding-right: 30px;\n  padding-left: 30px; }\n.textoImagen {\n  color: #424242;\n  font-size: 32px;\n  text-align: center;\n  position: relative;\n  font-family: Roboto;\n  font-weight: bold;\n  opacity: 0.5;\n  margin-top: 5px; }\n.imgeArchivo {\n  height: 265px;\n  width: 204px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  text-align: center; }\n.cargarDocumento {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  height: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%; }\n.documento {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-bottom: 10px;\n  width: 100%;\n  height: 80%; }\n.seccionDocument {\n  height: calc(100% - 99px);\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-bottom: 20px; }\n.hojaSeguridad {\n  height: 98px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  text-align: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-right: 67px;\n  background: #ECEEF0; }\n.hojaSeguridad > div {\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-line-pack: center;\n        align-content: center; }\n.hojaSeguridad > div > label {\n      font-family: Roboto;\n      font-weight: bold;\n      font-size: 18px;\n      color: #424242;\n      padding-right: 5px; }\n.extension {\n  opacity: 0.3;\n  font-family: Roboto;\n  font-weight: bold;\n  font-size: 24px;\n  color: #424242; }\n.totales {\n  height: 33px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.totales > label {\n    font-family: Roboto;\n    font-weight: 400;\n    font-size: 14px;\n    color: #424242;\n    text-align: left;\n    padding-right: 60px; }\n.selectedData {\n  width: calc(100% - 130px);\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.selectedData > div {\n    width: 70%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    line-height: 1.2; }\n.selectedData > div > label {\n      font-family: Roboto;\n      font-weight: bold;\n      font-size: 21px;\n      color: #424242; }\n.selectedData > div > h3 {\n      font-family: Roboto;\n      font-weight: bold;\n      font-size: 17px;\n      color: #008894;\n      text-align: left;\n      overflow: hidden; }\n@supports (-webkit-line-clamp: 2) {\n        .selectedData > div > h3 {\n          display: block;\n          display: -webkit-box !important;\n          line-height: 1.2;\n          -webkit-line-clamp: 2;\n          -webkit-box-orient: vertical;\n          text-overflow: ellipsis; } }\n@supports not (-webkit-line-clamp: 2) {\n        .selectedData > div > h3 {\n          position: relative;\n          line-height: 1.2;\n          overflow: hidden;\n          width: 100%; }\n          .selectedData > div > h3:before {\n            content: \"\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\";\n            position: absolute;\n            bottom: 0;\n            right: 0;\n            background: transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;\n            background: transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%; } }\n.selectedData > div > span {\n      font-family: Roboto;\n      font-weight: bold;\n      font-size: 18px;\n      color: #008894; }\n.selectedData > div > h1 {\n      font-family: Roboto;\n      font-weight: 400;\n      font-size: 17px;\n      color: #969696;\n      text-align: left; }\n.bloqueoCarga {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n/deep/ .dropListSelect .container-drop .Title > p {\n  font-weight: bold !important;\n  color: #008894; }\n/deep/ .dropList .container-drop .Title > p {\n  font-weight: 400 !important; }\n.infoProducto {\n  height: 203px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 20px 20px 20px 20px;\n  background: #f8fbfc; }\n.descarga {\n  font-family: Roboto;\n  font-weight: bold;\n  font-size: 20px;\n  color: #008894 !important;\n  text-align: left; }\nlabel.descarga:hover {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  border-bottom: 1px solid;\n  border-bottom: 1px solid; }\n.descargaToltip {\n  font-size: 12px; }\nlabel.descargaToltip:hover {\n  border-bottom: 1px solid; }\n/******/\n.menu {\n  position: relative; }\n.menu:HOVER {\n  cursor: pointer; }\n.menu > div {\n  width: 20px;\n  height: 2px;\n  background: #000000;\n  margin: 5px; }\nsection {\n  position: absolute;\n  visibility: hidden;\n  height: 0; }\nsection.visible {\n  visibility: visible;\n  height: 85px;\n  overflow: auto;\n  width: 219px;\n  background: #FFFFFF;\n  z-index: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid #ECEEF0;\n  border-top: 1px solid #ECEEF0;\n  border-left: 1px solid #ECEEF0;\n  border-right: 1px solid #ECEEF0; }\n.listaHamburguesa {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 15px;\n  padding-right: 15px; }\n.listaHamburguesa > li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border-bottom: 0.5px solid #ECEEF0;\n    padding-bottom: 5px;\n    padding-top: 5px; }\n.listaHamburguesa > li:hover {\n    background-color: #ECEEF0; }\n.imgProveedor {\n  width: 130px;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.marca {\n  font-family: Roboto;\n  font-weight: bold;\n  font-size: 17px;\n  color: #008894; }\n.infoPrincipal {\n  height: calc(100% - 268px);\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 53px; }\n.infoPrincipal > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    line-height: 1.5;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-bottom: 40px; }\n.infoPrincipal > div > label {\n      font-family: Roboto;\n      font-weight: 400;\n      font-size: 16px;\n      color: #424242;\n      text-align: left; }\n.producto {\n  height: 129px; }\n@media all and (min-height: 770px) and (max-height: 1090px) {\n  .textoImagen {\n    font-size: 28px; }\n  .extension {\n    font-size: 20px; }\n  .imgeArchivo {\n    height: 247px;\n    width: 114px;\n    -webkit-transition: width 0.8s;\n    transition: width 0.8s; }\n  .infoProducto {\n    height: 114px;\n    padding: 10px 20px 10px 20px; }\n  .selectedData > div > label {\n    font-size: 19px; }\n  .selectedData > div > h3 {\n    font-size: 21px !important; }\n    @supports (-webkit-line-clamp: 1) {\n      .selectedData > div > h3 {\n        display: block;\n        display: -webkit-box !important;\n        line-height: 1.2;\n        -webkit-line-clamp: 1;\n        -webkit-box-orient: vertical;\n        text-overflow: ellipsis; } }\n    @supports not (-webkit-line-clamp: 1) {\n      .selectedData > div > h3 {\n        position: relative;\n        line-height: 1.2;\n        overflow: hidden;\n        width: 100%; }\n        .selectedData > div > h3:before {\n          content: \"\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\";\n          position: absolute;\n          bottom: 0;\n          right: 0;\n          background: transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;\n          background: transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%; } }\n  .selectedData > div > span {\n    font-size: 16px; }\n  .producto {\n    height: 85px; }\n  .infoPrincipal {\n    height: calc(100% - 126px); }\n  .titulosLista {\n    min-height: 99px; }\n  .tituloLista {\n    font-size: 20px;\n    -webkit-transition: font-size 0.2ms;\n    transition: font-size 0.2ms; } }\n"

/***/ }),

/***/ "./src/app/components/productos-bo/vista-gestion-producto/vista-gestion-producto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistaGestionProductoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_productos_bo_productos_bo_service__ = __webpack_require__("./src/app/services/productos-bo/productos-bo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("./node_modules/moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VistaGestionProductoComponent = /** @class */ (function () {
    function VistaGestionProductoComponent(_servicios, coreContainer) {
        this._servicios = _servicios;
        this.coreContainer = coreContainer;
        this.DEFAULT_FORMAT = 'YYYYMMDD HH:mm:ss';
        this.vistaP = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.finalizarLista = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.listaLineas = [
            { nombre: 'Todas las Líneas', key: 0 },
            { nombre: 'Estándares · Biológico', key: 1 },
            { nombre: 'Estándares · Químico', key: 2 },
            { nombre: 'Reactivos · Biológico', key: 3 },
            { nombre: 'Reactivos · Químicos', key: 4 },
            { nombre: 'Labware', key: 5 },
            { nombre: 'Publicaciones', key: 6 }
        ];
        this.listaTipos = [
            { nombre: 'Todos los tipos', key: 0 },
            { nombre: 'No Controlados', key: 1 },
            { nombre: 'Controlados', key: 2 }
        ];
        this.listaRazones = [
            { nombre: 'No disponible', key: 0 },
            { nombre: 'En Producción', key: 1 },
            { nombre: 'Descontinuado', key: 2 }
        ];
        this.lista = [];
        this.listaUniverso = [];
        this.searchTerm = '';
        this.tipoFiltroL = 'Todas las Líneas';
        this.tipoFiltroT = 'Todos los tipos';
        this.date = undefined;
        this.activarFecha = false;
    }
    VistaGestionProductoComponent.prototype.ngOnInit = function () {
        var obj;
        obj = new Object;
        obj.nombre = 'Todas las Líneas';
        this.selectedLinea = obj;
        var obj1;
        obj1 = new Object;
        obj1.nombre = 'Todos los tipos';
        this.selectedTipo = obj1;
        var obj2;
        obj2 = new Object;
        obj2.nombre = 'Seleccionar';
        this.selectedRazon = obj2;
        this.obtenerProductos();
    };
    VistaGestionProductoComponent.prototype.obtenerProductos = function () {
        var _this = this;
        this.lista = [];
        this.listaUniverso = [];
        this.coreContainer.openModal(0);
        this._servicios.obtenerProductosProveedor(this.datosProveedor.idProveedor).subscribe(function (data) {
            var fechaI;
            var refQ;
            var presentacion;
            var tipo;
            var filtroLinea;
            var listaGeneral = data.current;
            for (var i = 0; i < listaGeneral.length; i++) {
                fechaI = new __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(listaGeneral[i].fechaInicio);
                if (listaGeneral[i].tipo === 'Labware' || listaGeneral[i].tipo === 'Publicaciones') {
                    refQ = listaGeneral[i].tipo;
                }
                else {
                    if (listaGeneral[i].tipo === 'Estandares' || listaGeneral[i].tipo === 'Estándares') {
                        tipo = 'Estándares';
                    }
                    else {
                        tipo = listaGeneral[i].tipo;
                    }
                    refQ = tipo + ' - ' + listaGeneral[i].subTipo;
                    filtroLinea = tipo + ' · ' + listaGeneral[i].subTipo;
                }
                if (listaGeneral[i].presentacion !== 'ND') {
                    presentacion = listaGeneral[i].presentacion + ' ' + listaGeneral[i].cantidad + listaGeneral[i].unidad;
                }
                else {
                    presentacion = listaGeneral[i].cantidad + listaGeneral[i].unidad;
                }
                _this.lista.push({ codigo: listaGeneral[i].codigo, descripcion: listaGeneral[i].descripcion, control: listaGeneral[i].control,
                    fechaInicio: fechaI, presentacion: presentacion, referencia: refQ, proveedor: listaGeneral[i].proveedor, filtroTipo: filtroLinea, fecha: listaGeneral[i].fechaInicio,
                    tipo: listaGeneral[i].presentacion, idProducto: listaGeneral[i].idProducto, idProductoBO: listaGeneral[i].idProductoBO });
                _this.listaUniverso.push({ codigo: listaGeneral[i].codigo, descripcion: listaGeneral[i].descripcion, control: listaGeneral[i].control,
                    fechaInicio: fechaI, presentacion: presentacion, referencia: refQ, proveedor: listaGeneral[i].proveedor, filtroTipo: filtroLinea, fecha: listaGeneral[i].fechaInicio,
                    tipo: listaGeneral[i].presentacion, idProducto: listaGeneral[i].idProducto, idProductoBO: listaGeneral[i].idProductoBO });
            }
            _this.seleccionarItem(_this.lista[0], 0);
            _this.coreContainer.closeModal(0);
        }, function (error) {
            _this.coreContainer.closeModal(0);
        });
    };
    /*****/
    VistaGestionProductoComponent.prototype.abreCombo = function () {
        if (document.getElementById("section").className == "visible") {
            document.getElementById("section").className = "";
        }
        else {
            document.getElementById("section").className = "visible";
        }
    };
    VistaGestionProductoComponent.prototype.tipoBuscar = function (search) {
        if (this.tipoFiltroL === 'Todas las Líneas' && this.tipoFiltroT === 'Todos los tipos') {
            this.buscar(search);
        }
        else {
            this.searchTerm = search;
            this.recibirFiltro('', '');
        }
    };
    /// Funcion de buscar en facturacion
    VistaGestionProductoComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search == "") {
            // this.ClientesSearched= this.clientesConsulta;
            this.lista = this.listaUniverso.slice();
        }
        else {
            this.listaUniverso.forEach(function (folio) {
                if (folio.descripcion.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1 || folio.codigo.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.lista = searchArrayAux;
        }
        this.validarOrden();
    };
    VistaGestionProductoComponent.prototype.validarOrden = function () {
        if (this.tipoOrden === 'Más Antiguos') {
            this.ordenamientoFechaTramAnt();
        }
        else if (this.tipoOrden === 'Más Recientes') {
            this.ordenamientoFechaTramNue();
        }
    };
    VistaGestionProductoComponent.prototype.ordenamientoFechaTramNue = function () {
        this.tipoOrden = 'Más Recientes';
        this.lista.sort(function (a, b) {
            if (a.fecha < b.fecha) {
                return 1;
            }
            if (a.fecha > b.fecha) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
        this.buscarIndice();
    };
    VistaGestionProductoComponent.prototype.ordenamientoFechaTramAnt = function () {
        this.tipoOrden = 'Más Antiguos';
        this.lista.sort(function (a, b) {
            if (a.fecha > b.fecha) {
                return 1;
            }
            if (a.fecha < b.fecha) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
        this.buscarIndice();
    };
    VistaGestionProductoComponent.prototype.recibirFiltro = function (datos, tipo) {
        var _this = this;
        if (tipo !== '') {
            if (tipo === 'linea') {
                this.tipoFiltroL = datos.nombre;
            }
            else if (tipo === 'tipo') {
                this.tipoFiltroT = datos.nombre;
            }
        }
        var listaAux = this.listaUniverso.slice();
        if (this.tipoFiltroL === 'Todas las Líneas' && this.tipoFiltroT === 'Todos los tipos') {
            this.lista = this.listaUniverso.slice();
        }
        else {
            if (this.tipoFiltroL !== 'Todas las Líneas') {
                this.lista = listaAux.filter(function (item) { return item.filtroTipo.toLowerCase() === _this.tipoFiltroL.toLowerCase(); });
                if (this.tipoFiltroT !== 'Todos los tipos') {
                    listaAux = this.lista.slice();
                    this.lista = listaAux.filter(function (item) { return item.control.toLowerCase() === _this.tipoFiltroT.toLowerCase(); });
                }
            }
            else if (this.tipoFiltroT !== 'Todos los tipos') {
                this.lista = listaAux.filter(function (item) { return item.control.toLowerCase() === _this.tipoFiltroT.toLowerCase(); });
                if (this.tipoFiltroL !== 'Todas las Líneas') {
                    listaAux = this.lista.slice();
                    this.lista = listaAux.filter(function (item) { return item.filtroTipo.toLowerCase() === _this.tipoFiltroL.toLowerCase(); });
                }
            }
        }
        if (this.searchTerm !== '') {
            this.buscarFiltro(this.searchTerm, this.lista);
        }
        this.validarOrden();
    };
    /// Funcion de buscar en facturacion
    VistaGestionProductoComponent.prototype.buscarFiltro = function (search, lista) {
        var _this = this;
        var listaAux = lista;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search !== "") {
            listaAux.forEach(function (folio) {
                if (folio.descripcion.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1 || folio.codigo.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.lista = searchArrayAux;
        }
        else {
            this.lista = lista;
        }
    };
    VistaGestionProductoComponent.prototype.seleccionarItem = function (item, i) {
        this.tipoImagen = false;
        this.activarFecha = true;
        this.date = undefined;
        var obj2;
        obj2 = new Object;
        obj2.nombre = 'Seleccionar';
        this.selectedRazon = obj2;
        this.motivo = undefined;
        this.fechaDisponible = null;
        this.itemSelect = item;
        this.indice = i + 1;
        if (item.proveedor === 'USP') {
            if (item.tipo === 'Bolsa de aluminio') {
                this.tipoImagen = true;
            }
            if (item.tipo !== null && item.tipo !== 'ND') {
                this.pathImg = './assets/Images/productos/44/' + item.tipo + '.png';
            }
            else {
                this.pathImg = './assets/Images/productos/vial.png';
            }
        }
        else {
            this.pathImg = './assets/Images/productos/vial.png';
        }
        this.seleccionado = true;
        this.codigo = item.codigo;
    };
    VistaGestionProductoComponent.prototype.buscarIndice = function () {
        for (var i = 0; i < this.lista.length; i++) {
            if (this.codigo === this.lista[i].codigo) {
                this.indice = i + 1;
            }
        }
        return false;
    };
    VistaGestionProductoComponent.prototype.getFechaImpl = function (fecha) {
        this.fechaDisponible = fecha;
        this.validarBtn();
    };
    VistaGestionProductoComponent.prototype.recibirRazon = function (dato) {
        this.motivo = dato.nombre;
        if (dato.nombre === 'Descontinuado') {
            this.activarFecha = false;
            this.fechaDisponible = null;
        }
        else {
            this.activarFecha = true;
        }
        this.validarBtn();
    };
    VistaGestionProductoComponent.prototype.validarBtn = function () {
        var fecha = __WEBPACK_IMPORTED_MODULE_4_moment__(new Date()).format('YYYYMMDD');
        if (this.activarFecha) {
            if (this.fechaDisponible !== undefined && this.fechaDisponible !== null && this.motivo !== undefined && this.motivo !== 'Seleccionar' && this.fechaDisponible > fecha) {
                this.activarBtn = true;
            }
            else {
                this.activarBtn = false;
            }
        }
        else if (!this.activarFecha) {
            if (this.motivo !== undefined && this.motivo !== 'Seleccionar') {
                this.activarBtn = true;
            }
            else {
                this.activarBtn = false;
            }
        }
    };
    VistaGestionProductoComponent.prototype.cancelar = function () {
        this.vistaP.emit(false);
    };
    VistaGestionProductoComponent.prototype.finalizar = function () {
        var _this = this;
        var fecha = __WEBPACK_IMPORTED_MODULE_4_moment__(new Date()).format(this.DEFAULT_FORMAT);
        var obj = {
            idProductoBO: this.itemSelect.idProductoBO,
            idProducto: this.itemSelect.idProducto,
            fua: fecha,
            disponibilidad: this.fechaDisponible,
            razon: this.motivo
        };
        this.activarAlert = true;
        console.log('Soy datos a enviar', obj);
        this._servicios.finalizarProductoBO(obj).subscribe(function (data) {
            if (data.current) {
                if (_this.listaUniverso.length > 1) {
                    _this.obtenerProductos();
                    _this.vistaP.emit(true);
                }
                else {
                    _this.finalizarLista.emit(true);
                }
            }
        });
    };
    VistaGestionProductoComponent.prototype.cerrarPop = function (valor) {
        this.activarAlert = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaGestionProductoComponent.prototype, "vistaP", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaGestionProductoComponent.prototype, "finalizarLista", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VistaGestionProductoComponent.prototype, "datosProveedor", void 0);
    VistaGestionProductoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-vista-gestion-producto',
            template: __webpack_require__("./src/app/components/productos-bo/vista-gestion-producto/vista-gestion-producto.component.html"),
            styles: [__webpack_require__("./src/app/components/productos-bo/vista-gestion-producto/vista-gestion-producto.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_productos_bo_productos_bo_service__["a" /* ProductosBoService */], __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], VistaGestionProductoComponent);
    return VistaGestionProductoComponent;
}());



/***/ })

});
//# sourceMappingURL=productos-bo.module.chunk.js.map