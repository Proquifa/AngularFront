webpackJsonp(["gestion-cuarentena.module"],{

/***/ "./src/app/components/gestion-cuarentena/gestion-cuarentena-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestionCuarentenaRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gestion_cuarentena_component__ = __webpack_require__("./src/app/components/gestion-cuarentena/gestion-cuarentena.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GestionCuarentenaRoutingModule = /** @class */ (function () {
    function GestionCuarentenaRoutingModule() {
    }
    GestionCuarentenaRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__gestion_cuarentena_component__["a" /* GestionCuarentenaComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], GestionCuarentenaRoutingModule);
    return GestionCuarentenaRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion-cuarentena/gestion-cuarentena.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\n  <!--Seccion de menu-->\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\n    <aside [ngClass]=\"classAsideMenu\">\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\n        <pn-menu-seccion-roles [items]=\"itemsMenu\"   style=\"width: 100%;\" *ngIf=\"activeMenu\"></pn-menu-seccion-roles>\n      </div>\n    </aside>\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n    </div>\n  </div>\n  <!--Termina seccion de menu-->\n  <!--Empieza el area de trabajo-->\n  <div class=\"area\">\n    <!--Empieza la cabezera-->\n    <div class=\"cabezera\">\n      <div>\n        <div style=\"cursor: pointer;\" *ngIf=\"!vistaP\" (click)=\"regresarVistaP()\">\n          <img class=\"img\" src='./assets/Images/regresar.svg'/>\n        </div>\n        <label class=\"etiqueta\">GESTIONAR CUARENTENA</label>\n      </div>\n      <div *ngIf=\"!vistaP\">\n        <label class=\"title\">{{cliente}}</label>\n      </div>\n    </div>\n    <!--Termina la cabezera-->\n    <!--Empiezan los componentes-->\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 122px)'}\">\n      <div style=\"height: 100%; width: 100%;display: flex\" *ngIf=\"vistaP\">\n        <div class=\"primeraSec\">\n          <div class=\"titulosLista\">\n            <div  class=\"tituloCliente\">\n              <label class=\"tituloLista\">PROVEEDORES</label>\n            </div>\n            <div class=\"organizarLista\">\n              <div style=\"height: 100%;    display: flex;align-items: center;\">\n                <div class=\"menu\" (click)=\"abreCombo()\">\n                  <div>\n                  </div>\n                  <div>\n                  </div>\n                  <div>\n                  </div>\n                  <section id=\"section\">\n                    <ul class=\"listaHamburguesa\">\n                      <li (click)=\"ordenamientoFechaTramNue()\">Más Recientes</li>\n                      <li (click)=\"ordenamientoFechaTramAnt()\">Más Antiguos</li>\n                    </ul>\n                  </section>\n                </div>\n              </div>\n              <div style=\"height: 100%; display: flex;align-items: center;\">\n                <h3 class=\"subtitulo\">{{tipoOrden}}</h3>\n              </div>\n              <div class=\"barraBusqueda\" style=\"height: 100%\">\n                <div class=\"buscar\">\n                  <div>\n                    <div class=\"lupa\">\n                      <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\n                    </div>\n                    <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Proveedor\" />\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--Lista total-->\n          <div class=\"listaSeccionUno\">\n            <div>\n              <div class= \"lista\" style=\"display: unset;flex-direction: column\" >\n                <div  *ngFor=\"let item of lista; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\n                  <div class=\"imagenFlecha\">\n                    <img src=\"./assets/Images/regresarAzul.svg\" class=\"flechaInicio\" (click)=\"seleccionarItem(i, item)\">\n                  </div>\n                  <div class=\"dfSelect\"></div>\n                  <div class=\"datosLst\">\n                    <div class=\"numeroIndex\">\n                      <label class=\"index\" style=\"font-family: Roboto-Regular\">#{{i +1}}</label>\n                    </div>\n                    <div class=\"informacionList\">\n                      <label style=\"color: #008894\">{{item.proveedor}} </label>\n                      <p>{{item.cantidad}} {{item.totalOC}} OC · {{item.totalProducto}} Productos</p>\n                      <h3 class=\"textoPiezas\">Fecha de Inspección: {{item.fechaFormato}} </h3>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"totales\">\n              <label>#{{lista.length}}</label>\n              <label>{{lista.length}} Proveedores</label>\n              <label>{{totalOc}} OC</label>\n              <label>{{totalProductos}} Productos</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"contenidoGrafica\">\n          <div class=\"grafica\">\n            <label style=\"padding-bottom: 10px\">PROVEEDORES</label>\n              <pn-donut-chart  [idGrafica]=\"'proveedores'\" [data]=\"dataProveedores\" [tipoGrafica]=\"tipoGraficaProveedores\" [height]=\"'auto'\" style=\"height: 90%;\" *ngIf=\"activarProveedores\"></pn-donut-chart>\n          </div>\n          <div class=\"grafica\">\n            <label>TIPOS DE PRODUCTOS</label>\n            <pn-grafica-barras  [data]=\"dataBarra\" [idGrafica]=\"'barra'\" style=\"width:50%;height: 90%;\" *ngIf=\"activarBarra\"></pn-grafica-barras>\n          </div>\n        </div>\n      </div>\n      <pn-vista-trabajar-productos *ngIf=\"!vistaP\" [datosProveedor]=\"itemSelect\" (regreVista)=\"refrescarVista($event)\"></pn-vista-trabajar-productos>\n      <!--vista siguiente-->\n    </div>\n    <!--Terminan los componentes-->\n    <div style=\"width: 100%;height: 55px\">\n      <footer class=\"footer\">\n        <div class=\"datosFooter\">\n          <div class=\"Prioridad1\" *ngIf=\"vistaP\">\n            <label class=\"p1\">OC: </label> Orden de Compra\n          </div>\n          <div class=\"Prioridad1\" *ngIf=\"!vistaP\">\n            <label class=\"p1\">FEE: </label> Fecha Estimada de Entrega\n          </div>\n          <div class=\"Prioridad1\" *ngIf=\"!vistaP\">\n            <label class=\"p1\">DRE: </label> Días Restantes de Entrega\n          </div>\n          <div class=\"Prioridad1\" *ngIf=\"!vistaP\">\n            <label class=\"p1\">UEP: </label> Pendiente\n          </div>\n        </div>\n      </footer>\n    </div>\n  </div>\n  <!--Termina area de trabajo-->\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/gestion-cuarentena/gestion-cuarentena.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.padre {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n.aux .asideNormalMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  min-width: 181px;\n  width: 321px;\n  height: 100%;\n  overflow-y: scroll; }\n.aux .asideNormalMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n.aux > .asideOcultarMenu {\n  -webkit-animation-name: ocultarMenu;\n          animation-name: ocultarMenu;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-transition: 1s ease-in-out;\n  transition: 1s ease-in-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 0px;\n  width: 0px; }\n.aux > .asideOcultarMenu > .articulo {\n    width: 0px; }\n.aux > .asideMostrarMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  -webkit-animation-name: mostrarMenu;\n          animation-name: mostrarMenu;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-y: scroll; }\n.aux > .asideMostrarMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n@-webkit-keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@-webkit-keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n@keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n.area {\n  width: 100%;\n  height: 100%;\n  overflow: auto; }\n.cabezera {\n  width: 100%;\n  height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 13px;\n  padding-right: 13px;\n  border-bottom: 2px solid black;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n.cabezera > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.cabezera > div > .title {\n      font-family: Novecento;\n      font-weight: bold;\n      font-size: 24px;\n      color: #008894;\n      text-align: right; }\n.etiqueta {\n  color: #5B5B5B;\n  font-size: 25px;\n  font-family: Novecento;\n  margin-bottom: 5px; }\n.img {\n  cursor: pointer; }\n.lista {\n  border-bottom: solid 1px #ECEEF0;\n  border-bottom: solid 1px #ECEEF0;\n  width: 100%;\n  min-height: 80px;\n  font-size: 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  line-height: 1.3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto; }\n.lista > .index {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    height: 52px; }\n.lista > div > .datosLst {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -ms-flex-item-align: auto;\n        align-self: auto;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-left: 15px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.lista div:hover {\n    background-color: #ECEEF0; }\n.lista > .divActual {\n    background-color: #ECEEF0;\n    -webkit-box-shadow: 0 2px 4px -3px #008895;\n            box-shadow: 0 2px 4px -3px #008895; }\n.lista > .divActive {\n    background-color: #ECEEF0; }\n.lista > .divActive .dfSelect {\n      background: #008895 !important;\n      width: 5px !important;\n      color: #008895; }\n.lista > .divActive .datosLst label {\n      color: #008895;\n      padding-left: -2px;\n      font-family: \"Roboto-Bold\";\n      font-size: 28px; }\n.lista > .divActive .datosLst p {\n      font-family: \"Roboto-Bold\";\n      font-size: 24px;\n      color: #000000;\n      line-height: 26px; }\n.lista > .divActive .datosLst h3 {\n      font-family: \"Roboto-regular\";\n      font-size: 21px; }\n.textoPiezas {\n  font-family: \"Roboto-regular\";\n  font-size: 21px; }\n.titulo {\n  padding-left: 30px;\n  font-family: Novecentowide;\n  font-weight: Bold;\n  font-size: 24px; }\n.buscar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  height: 50px;\n  width: 100%;\n  border-style: solid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.buscar div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 90%;\n    border-radius: 102px 102px 102px 102px;\n    -moz-border-radius: 102px 102px 102px 102px;\n    -webkit-border-radius: 102px 102px 102px 102px;\n    border: 0.5px solid #BFC0C7;\n    height: 26px; }\n.buscar div div {\n      border: none;\n      border-radius: 0px 0px 0px 0px;\n      -moz-border-radius: 0px 0px 0px 0px;\n      -webkit-border-radius: 0px 0px 0px 0px;\n      border: 0px solid #000000;\n      width: 40px;\n      background: transparent;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n.buscar div .buscar-input {\n      cursor: pointer;\n      background: transparent;\n      border-radius: 100px;\n      -moz-border-radius: 102px 102px 102px 102px;\n      border: 0px solid #000000;\n      width: 100%;\n      font-family: Helvetica;\n      font-size: 18px;\n      color: #AAA9AF;\n      outline: none;\n      padding-left: 5px; }\n.barraBusqueda {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.footer {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n  align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 57px;\n  max-height: 57px;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: row;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -ms-flex-pack: start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n  align-content: stretch;\n  -ms-flex-align: stretch;\n  -webkit-box-align: inherit;\n          align-items: inherit;\n  border-top: 2px solid black;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  font-size: 14px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.linea {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  text-align: center; }\n.datosFooter {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 14px; }\n.Prioridad1, .Prioridad2, .Prioridad3, .Ambiente, .Congelación, .Refrigeración, .Pedimento {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 0.7%;\n  margin-right: 0.7%; }\n.p1 {\n  color: #424242;\n  font-weight: bold; }\n.p2 {\n  color: #424242;\n  font-weight: bold; }\n.p3 {\n  color: #424242;\n  font-weight: bold; }\n.p1, .p2, .p3 {\n  margin-right: 6px; }\n.datosC {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-width: 1608px;\n  margin-left: 20px;\n  margin-right: 20px;\n  width: 98%; }\n.grafica {\n  height: 50%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 20px 20px 20px 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n.grafica > label {\n    height: 10%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-align: center;\n    font-size: calc((1vh + 1vw) / 2);\n    font-weight: bold;\n    font-family: Novecento; }\n.graficaBarra {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 50%;\n  width: 100%;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-bottom: 20px;\n  padding-top: 20px; }\n.contenidoGrafica {\n  width: 70%;\n  background: #ECEEF0;\n  height: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n/******/\n.menu {\n  position: relative; }\n.menu:HOVER {\n  cursor: pointer; }\n.menu > div {\n  width: 20px;\n  height: 2px;\n  background: #000000;\n  margin: 5px; }\nsection {\n  position: absolute;\n  visibility: hidden;\n  height: 0; }\nsection.visible {\n  visibility: visible;\n  height: 74px;\n  overflow: auto;\n  width: 219px;\n  background: #FFFFFF;\n  z-index: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid #ECEEF0;\n  border-top: 1px solid #ECEEF0;\n  border-left: 1px solid #ECEEF0;\n  border-right: 1px solid #ECEEF0; }\n.listaHamburguesa {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 15px;\n  padding-right: 15px; }\n.listaHamburguesa > li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border-bottom: 0.5px solid #ECEEF0;\n    padding-bottom: 5px;\n    padding-top: 5px; }\n.listaHamburguesa > li:hover {\n    background-color: #ECEEF0; }\n.tituloCliente {\n  width: 50%;\n  height: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.titulosLista {\n  height: 10%;\n  padding-top: 15px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-bottom: 15px;\n  min-height: 90px; }\n.tituloLista {\n  font-size: 24px;\n  font-family: Novecento;\n  font-weight: bold; }\n.organizarLista {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 10px;\n  position: relative;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 50%; }\n.primeraSec {\n  width: 30%;\n  background: #FFFFFF;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-left: 20px;\n  margin-right: 20px;\n  min-width: 350px; }\n.primeraSec > .listaSeccionUno {\n    height: 90%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n.primeraSec > .listaSeccionUno > div {\n      height: calc(100% - 30px);\n      border-bottom: 1px solid;\n      width: 100%;\n      border-top: 1px solid;\n      overflow: scroll; }\n.primeraSec > .listaSeccionUno > .totales {\n      height: 30px;\n      width: 100%;\n      border-bottom: 0;\n      border-top: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n.informacionList {\n  font-family: Roboto;\n  padding-top: 4px; }\n.informacionList label {\n    color: #008894;\n    font-weight: bold;\n    font-size: 24px;\n    font-family: Roboto;\n    line-height: 1; }\n.informacionList span {\n    min-height: 23px;\n    max-height: 46px;\n    font-weight: bold;\n    font-size: 20px;\n    color: #424242;\n    font-family: Roboto; }\n.informacionList h3 {\n    font-size: 17px;\n    font-family: Roboto;\n    color: #424242;\n    line-height: 1.5;\n    margin-top: 4px;\n    font-weight: 400; }\n.numeroIndex {\n  font-size: 28px;\n  font-family: Roboto;\n  font-weight: 400;\n  text-align: left;\n  padding-right: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.subtitulo {\n  font-family: Roboto;\n  font-weight: 400;\n  font-size: 18px;\n  color: #424242;\n  text-align: left; }\n.imagenFlecha {\n  position: absolute;\n  right: 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  height: 100%;\n  padding-right: 5px; }\n.flechaInicio {\n  width: 100%;\n  -webkit-transform: rotate(-180deg);\n  transform: rotate(-180deg); }\n@media all and (min-width: 1300px) and (max-width: 1500px) {\n  .numeroIndex {\n    font-size: 25px; } }\n"

/***/ }),

/***/ "./src/app/components/gestion-cuarentena/gestion-cuarentena.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestionCuarentenaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gestionar_cuarentena_gestionar_cuarentena_service__ = __webpack_require__("./src/app/services/gestionar-cuarentena/gestionar-cuarentena.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
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




var GestionCuarentenaComponent = /** @class */ (function () {
    function GestionCuarentenaComponent(_gestorCuarentena, comunService) {
        this._gestorCuarentena = _gestorCuarentena;
        this.comunService = comunService;
        this.filtroProveedores = [];
        this.classAsideMenu = 'asideNormalMenu';
        this.tipoGrafica = 'General';
        this.lista = [{ 'nombreProv': "Abastecedora Científica", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 5 },
            { 'nombreProv': "Proquifa", fechaInspeccion: new Date('11/Apr/2017'), totalOc: 4, fecha: '11/Abr/2017', 'piezas': 21, totProd: 12 },
            { 'nombreProv': "Lab Pisa", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 3 },
            { 'nombreProv': "Lab Pisa Mexico", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 12 },
            { 'nombreProv': "Proveedora", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 2 },
            { 'nombreProv': "Proquifa Gdl", fechaInspeccion: new Date('12/Sep/2018'), totalOc: 4, fecha: '12/Sep/2018', 'piezas': 21, totProd: 12 },
            { 'nombreProv': "Laboratorio", fechaInspeccion: new Date('12/Nov/2018'), totalOc: 4, fecha: '12/Nov/2018', 'piezas': 21, totProd: 11 },
            { 'nombreProv': "Ryndem", fechaInspeccion: new Date('11/Nov/2017'), totalOc: 4, fecha: '11/Nov/2017', 'piezas': 21, totProd: 21 },
            { 'nombreProv': "Proveedora Gn", fechaInspeccion: new Date('12/Aug/2018'), totalOc: 4, fecha: '12/Ago/2018', 'piezas': 21, totProd: 11 },
            { 'nombreProv': "Prov", fechaInspeccion: new Date('12/Jan/2018'), totalOc: 4, fecha: '12/Ene/2018', 'piezas': 21, totProd: 4 },
            { 'nombreProv': "Sanofi", fechaInspeccion: new Date('12/Mar/2018'), totalOc: 4, fecha: '12/Mar/2018', 'piezas': 21, totProd: 6 }];
        this.listaUniveso = [{ 'nombreProv': "Abastecedora Científica", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 5 },
            { 'nombreProv': "Proquifa", fechaInspeccion: new Date('11/Apr/2017'), totalOc: 4, fecha: '11/Abr/2017', 'piezas': 21, totProd: 12 },
            { 'nombreProv': "Lab Pisa", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 3 },
            { 'nombreProv': "Lab Pisa Mexico", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 12 },
            { 'nombreProv': "Proveedora", fechaInspeccion: new Date('12/Apr/2018'), totalOc: 4, fecha: '12/Abr/2018', 'piezas': 21, totProd: 2 },
            { 'nombreProv': "Proquifa Gdl", fechaInspeccion: new Date('12/Sep/2018'), totalOc: 4, fecha: '12/Sep/2018', 'piezas': 21, totProd: 12 },
            { 'nombreProv': "Laboratorio", fechaInspeccion: new Date('12/Nov/2018'), totalOc: 4, fecha: '12/Nov/2018', 'piezas': 21, totProd: 11 },
            { 'nombreProv': "Ryndem", fechaInspeccion: new Date('11/Nov/2017'), totalOc: 4, fecha: '11/Nov/2017', 'piezas': 21, totProd: 21 },
            { 'nombreProv': "Proveedora Gn", fechaInspeccion: new Date('12/Aug/2018'), totalOc: 4, fecha: '12/Ago/2018', 'piezas': 21, totProd: 11 },
            { 'nombreProv': "Prov", fechaInspeccion: new Date('12/Jan/2018'), totalOc: 4, fecha: '12/Ene/2018', 'piezas': 21, totProd: 4 },
            { 'nombreProv': "Sanofi", fechaInspeccion: new Date('12/Mar/2018'), totalOc: 4, fecha: '12/Mar/2018', 'piezas': 21, totProd: 6 }];
        this.dataFacturacion = {
            titulo: 'Totales',
            labels: ['Totales'],
            valores: [6, 3],
            labelsExtras: [['Proveedores'], ['Productos'], ['OC']],
            labelsExtrasHover: ['Proveedores', 'Productos', 'OC'],
            valuesExtras: [6, 324, 15],
            valuesExtrasHover: [[6, 3, 1, 2], [324, 157, 50], [324, 157, 50]]
        };
        this.listaGrafica = [];
        this.colores = ['#D2B422', '#DE0209', '#F09600', '#4BA92B'];
        this.listaBarra = [];
    }
    GestionCuarentenaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'gestorCuarentena') {
                _this.activeMenu = false;
                _this.obtenerDatos();
            }
        });
        this.tipoOrden = 'Todos';
        this.vistaP = true;
        this.obtenerDatos();
    };
    GestionCuarentenaComponent.prototype.regresarVistaP = function () {
        this.vistaP = true;
    };
    /*Metodos para el menu de secciones*/
    GestionCuarentenaComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    GestionCuarentenaComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search === '') {
            this.lista = this.listaUniveso.slice();
        }
        else {
            this.listaUniveso.forEach(function (folio) {
                if (folio.proveedor.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.lista = searchArrayAux;
        }
        if (this.lista.length > 0) {
            if (this.tipoOrden === 'Más Recientes') {
                this.ordenamientoFechaTramNue();
            }
            else if (this.tipoOrden === 'Más Antiguos') {
                this.ordenamientoFechaTramAnt();
            }
        }
    };
    /*****/
    GestionCuarentenaComponent.prototype.abreCombo = function () {
        if (document.getElementById('section').className == 'visible') {
            document.getElementById('section').className = "";
        }
        else {
            document.getElementById('section').className = 'visible';
        }
    };
    GestionCuarentenaComponent.prototype.ordenamientoFechaTramNue = function () {
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
    };
    GestionCuarentenaComponent.prototype.ordenamientoFechaTramAnt = function () {
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
    };
    GestionCuarentenaComponent.prototype.obtenerDatos = function () {
        var _this = this;
        this.activarProveedores = false;
        this.listaGrafica = [];
        this.activarBarra = false;
        this.totalOc = 0;
        this.totalProductos = 0;
        this.lista = [];
        this.listaUniveso = [];
        this._gestorCuarentena.piezasRechazadas().subscribe(function (data) {
            _this.listaBarra = data.current.barra;
            if (data.current.grafica && data.current.grafica !== undefined) {
                _this.listaGrafica = data.current.grafica;
                _this.totalesGrafica = data.current.totales;
            }
            if (data.current.lista && data.current.lista !== undefined) {
                var listaAux = data.current.lista;
                var fechaAux = void 0;
                for (var i = 0; i < listaAux.length; i++) {
                    fechaAux = new __WEBPACK_IMPORTED_MODULE_2__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(listaAux[i].fechaInspeccion);
                    _this.listaUniveso.push({ idProveedor: listaAux[i].idProveedor, proveedor: listaAux[i].proveedor, totalOC: listaAux[i].totalOC,
                        fecha: listaAux[i].fechaInspeccionFormato, fechaFormato: fechaAux, totalProducto: listaAux[i].totalProducto });
                    _this.lista.push({ idProveedor: listaAux[i].idProveedor, proveedor: listaAux[i].proveedor, totalOC: listaAux[i].totalOC,
                        fecha: listaAux[i].fechaInspeccionFormato, fechaFormato: fechaAux, totalProducto: listaAux[i].totalProducto });
                    _this.totalOc += listaAux[i].totalOC;
                    _this.totalProductos += listaAux[i].totalProducto;
                }
            }
            _this.iniciarMenu(_this.totalesGrafica.totalProducto);
            _this.llenarGraficaBarra();
            _this.limpiarDataG();
        });
    };
    GestionCuarentenaComponent.prototype.iniciarMenu = function (totProd) {
        if (totProd === null) {
            totProd = 0;
        }
        this.itemsMenu = [
            { rol: 'GESTOR DE RECURSOS', active: true, menu: [
                    { nombre: 'Gestor Cuarentena', url: 'gestorCuarentena', tipo: 'valor', valor: totProd, select: true },
                ] }
        ];
        this.activeMenu = true;
    };
    GestionCuarentenaComponent.prototype.llenarGraficaBarra = function () {
        var etiqueta = [];
        var datos = [];
        this.listaBarra.forEach(function (folio) {
            etiqueta.push(folio.tipo);
            datos.push(folio.totalProducto);
        });
        this.dataBarra = {
            labels: etiqueta,
            barBackground: this.colores,
            values: datos
        };
        this.activarBarra = true;
    };
    GestionCuarentenaComponent.prototype.limpiarDataG = function () {
        var _this = this;
        //////// Emìeza grafica productos //////
        var valoresP = [];
        var valoresProvee = [];
        for (var _i = 0, _a = this.listaGrafica; _i < _a.length; _i++) {
            var nombre = _a[_i];
            valoresProvee.push([0, 0, 0]);
            valoresP.push(0);
            this.filtroProveedores.push(nombre.proveedor);
        }
        if (valoresP.length > 0) {
            this.dataProveedores = {
                titulo: 'Totales',
                labels: this.filtroProveedores,
                valores: valoresP,
                labelsExtras: ['Proveedores', 'Productos', 'OC'],
                labelsExtrasHover: ['Proveedores', 'Productos', 'OC'],
                valuesExtras: [this.totalesGrafica.totalProveedores, this.totalesGrafica.totalProducto, this.totalesGrafica.totalOC],
                valuesExtrasHover: valoresProvee,
            };
            this.tipoGraficaProveedores = 'General';
            this.calcularDatosParaGraficas();
        }
        else {
            this.dataProveedores = {
                titulo: 'Totales',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Proveedores', 'Productos', 'OC'],
                labelsExtrasHover: ['Proveedores', 'Productos', 'OC'],
                valuesExtras: [0, 0, 0],
                valuesExtrasHover: [[0, 0, 0]],
            };
            this.tipoGraficaProveedores = 'Gris';
            setTimeout(function () {
                _this.activarProveedores = true;
            }, 5);
        }
    };
    GestionCuarentenaComponent.prototype.calcularDatosParaGraficas = function () {
        if (this.listaGrafica.length > 0) {
            for (var _i = 0, _a = this.listaGrafica; _i < _a.length; _i++) {
                var productos = _a[_i];
                this.llenarTotalesGraficas(this.dataProveedores, productos, 'PROVEEDORES');
            }
        }
    };
    GestionCuarentenaComponent.prototype.llenarTotalesGraficas = function (total, elemento, graficaElegida) {
        var _this = this;
        switch (graficaElegida) {
            case 'PROVEEDORES':
                var posicion1 = this.filtroProveedores.indexOf(elemento.proveedor);
                total.valuesExtrasHover[posicion1][0] += elemento.totalProveedores;
                total.valuesExtrasHover[posicion1][1] += +(elemento.totalProducto);
                total.valuesExtrasHover[posicion1][2] += elemento.totalOC;
                total.valores[posicion1] += elemento.totalProducto;
                setTimeout(function () {
                    _this.activarProveedores = true;
                }, 5);
                break;
            default:
                break;
        }
    };
    GestionCuarentenaComponent.prototype.seleccionarItem = function (i, item) {
        this.cliente = item.proveedor;
        this.vistaP = false;
        this.itemSelect = item;
    };
    GestionCuarentenaComponent.prototype.refrescarVista = function (valor) {
        this.obtenerDatos();
        if (valor === true) {
            this.regresarVistaP();
        }
    };
    GestionCuarentenaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-gestion-cuarentena',
            template: __webpack_require__("./src/app/components/gestion-cuarentena/gestion-cuarentena.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion-cuarentena/gestion-cuarentena.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_gestionar_cuarentena_gestionar_cuarentena_service__["a" /* GestionarCuarentenaService */], __WEBPACK_IMPORTED_MODULE_3__services_comun_comun_service__["a" /* ComunService */]])
    ], GestionCuarentenaComponent);
    return GestionCuarentenaComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion-cuarentena/gestion-cuarentena.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionCuarentenaModule", function() { return GestionCuarentenaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gestion_cuarentena_component__ = __webpack_require__("./src/app/components/gestion-cuarentena/gestion-cuarentena.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_grafica_barras_grafica_barras_module__ = __webpack_require__("./src/app/components/shared/grafica-barras/grafica-barras.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gestion_cuarentena_routing_module__ = __webpack_require__("./src/app/components/gestion-cuarentena/gestion-cuarentena-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vista_trabajar_productos_vista_trabajar_productos_component__ = __webpack_require__("./src/app/components/gestion-cuarentena/vista-trabajar-productos/vista-trabajar-productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_combo_flecha_verde_combo_flecha_verde_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-verde/combo-flecha-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pop_up_pop_up_finalizar_exitoso_pop_up_finalizar_exitoso_component__ = __webpack_require__("./src/app/components/gestion-cuarentena/pop-up/pop-up-finalizar-exitoso/pop-up-finalizar-exitoso.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var GestionCuarentenaModule = /** @class */ (function () {
    function GestionCuarentenaModule() {
    }
    GestionCuarentenaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_grafica_barras_grafica_barras_module__["a" /* GraficaBarrasModule */],
                __WEBPACK_IMPORTED_MODULE_5__gestion_cuarentena_routing_module__["a" /* GestionCuarentenaRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_combo_flecha_verde_combo_flecha_verde_module__["a" /* ComboFlechaVerdeModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__gestion_cuarentena_component__["a" /* GestionCuarentenaComponent */],
                __WEBPACK_IMPORTED_MODULE_8__vista_trabajar_productos_vista_trabajar_productos_component__["a" /* VistaTrabajarProductosComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pop_up_pop_up_finalizar_exitoso_pop_up_finalizar_exitoso_component__["a" /* PopUpFinalizarExitosoComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__gestion_cuarentena_component__["a" /* GestionCuarentenaComponent */]
            ]
        })
    ], GestionCuarentenaModule);
    return GestionCuarentenaModule;
}());



/***/ }),

/***/ "./src/app/components/gestion-cuarentena/pop-up/pop-up-finalizar-exitoso/pop-up-finalizar-exitoso.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"popUp\" class=\"popUp\" *ngIf=\"popUpCerrar\">\n  <div class=\"fondo\"></div>\n  <div class=\"popContenido\">\n    <div class=\"popHeader\">\n      <span>PROQUIFA NET</span>\n    </div>\n    <div class=\"popContenido\">\n      <div class=\"alerta\" *ngIf=\"imagen\">\n        <img src=\"assets/Images/flecha_blanca_encirculoverde.svg\" alt=\"\" class=\"alert\" />\n      </div>\n      <div [style.padding-top]=\"imagen?'15px':'80px'\">\n        <label>\n          Has enviado exitosamente a cuarentena\n        </label>\n        <span>\n        {{label}}\n      </span>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/gestion-cuarentena/pop-up/pop-up-finalizar-exitoso/pop-up-finalizar-exitoso.component.scss":
/***/ (function(module, exports) {

module.exports = "#popUp {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  #popUp > div.fondo {\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    left: 0;\n    top: 0;\n    overflow-y: hidden;\n    background: rgba(204, 209, 209, 0.6);\n    z-index: 3; }\n  #popUp > div.popContenido {\n    max-width: 630px;\n    width: 630px;\n    height: 385px;\n    max-height: 385px;\n    position: relative;\n    z-index: 9;\n    background: #FFFFFF;\n    border-radius: 20px;\n    border: 1px solid #008894; }\n  #popUp > div.popContenido > .popHeader {\n      background-color: #008894;\n      border: 1px solid #008894;\n      border-radius: 19px 19px 0 0;\n      color: white;\n      font-family: Roboto;\n      font-size: 25px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 0 15px;\n      height: 55px; }\n  #popUp > div.popContenido > .popContenido {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      margin-top: 10px;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      font-size: 30px;\n      padding-top: 30px; }\n  #popUp > div.popContenido > .popContenido > i {\n        padding: 35px;\n        font-size: 60px;\n        color: #008A98; }\n  #popUp > div.popContenido > .popContenido > div {\n        line-height: 1.2;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: end;\n            -ms-flex-pack: end;\n                justify-content: flex-end;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        padding-right: 20px;\n        padding-left: 20px; }\n  #popUp > div.popContenido > .popContenido > div > span {\n          font-family: Roboto;\n          font-weight: bold;\n          font-size: 29px;\n          color: #008894;\n          text-align: center; }\n  #popUp > div.popContenido > .popContenido > div > label {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 29px;\n          color: #424242;\n          text-align: center; }\n  #popUp > div.popContenido > .dvBotones {\n      position: absolute;\n      bottom: 25px;\n      left: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      width: 100%; }\n  #popUp > div.popContenido > .dvBotones > .dvBoton {\n        width: 170px;\n        height: 30px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        background: #008894;\n        color: #FFFFFF;\n        font-weight: bold; }\n  #popUp > div.popContenido > .dvBotones > .dvBoton > label {\n          font-family: 'Novecento';\n          font-size: 21px;\n          font-weight: bold;\n          color: white;\n          cursor: pointer;\n          margin-top: -2px; }\n  #popUp > div.popContenido > .dvBotones > .dvBoton:HOVER {\n          opacity: 0.9;\n          cursor: pointer; }\n  #popUp > div.popContenido > .dvBotones > .dvBoton:ACTIVE {\n          background: #005f67; }\n  .alerta {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  padding-top: 20px; }\n  .alerta img.alert {\n    width: 100%;\n    height: 100%; }\n"

/***/ }),

/***/ "./src/app/components/gestion-cuarentena/pop-up/pop-up-finalizar-exitoso/pop-up-finalizar-exitoso.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpFinalizarExitosoComponent; });
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

var PopUpFinalizarExitosoComponent = /** @class */ (function () {
    function PopUpFinalizarExitosoComponent() {
        this.desactivarPop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PopUpFinalizarExitosoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.popUpCerrar = true;
        setTimeout(function () {
            _this.cerrar();
        }, 3000);
    };
    PopUpFinalizarExitosoComponent.prototype.cerrar = function () {
        this.popUpCerrar = false;
        this.desactivarPop.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PopUpFinalizarExitosoComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopUpFinalizarExitosoComponent.prototype, "imagen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpFinalizarExitosoComponent.prototype, "desactivarPop", void 0);
    PopUpFinalizarExitosoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-finalizar-exitoso',
            template: __webpack_require__("./src/app/components/gestion-cuarentena/pop-up/pop-up-finalizar-exitoso/pop-up-finalizar-exitoso.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion-cuarentena/pop-up/pop-up-finalizar-exitoso/pop-up-finalizar-exitoso.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpFinalizarExitosoComponent);
    return PopUpFinalizarExitosoComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion-cuarentena/vista-trabajar-productos/vista-trabajar-productos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"areaSeccion\">\n  <div>\n    <div class=\"datosPersonales\" *ngIf=\"contacto !== 'Seleccionar'\">\n      <div>\n        <div>\n          <img src=\"./assets/Images/contacto.svg\" class=\"icono\">\n          <pn-combo-flecha-verde [validar]=\"true\"  [items]=\"itemContacto\" [itemSelect]=\"selected\" [heightLi]=\"'35px'\" [widthBorder] = 'false' (valueDropList)=\"recibirItem($event)\" style=\"width: 250px;\" *ngIf=\"activarCombo\"></pn-combo-flecha-verde>\n        </div>\n        <div>\n          <img src=\"./assets/Images/mail.svg\" class=\"icono\">\n          <label>{{itemContactoS.email}}</label>\n        </div>\n        <div>\n          <img src=\"./assets/Images/telefono.svg\" class=\"icono\">\n          <label>{{itemContactoS.tel}}</label>\n        </div>\n      </div>\n      <div>\n        <label>{{itemContactoS.titulo}}</label>\n        <span>Título de Contacto</span>\n      </div>\n      <div>\n        <label>{{itemContactoS.puesto}}</label>\n        <span>Puesto</span>\n      </div>\n      <div>\n        <label>{{itemContactoS.departament}}</label>\n        <span>Departamento</span>\n      </div>\n    </div>\n    <div class=\"datosPersonales\" *ngIf=\"contacto == 'Seleccionar'\">\n      <div style=\"width: 100%\">\n        <div class=\"noSeleccionado\">\n          <img src=\"./assets/Images/contacto.svg\" class=\"icono\">\n          <pn-combo-flecha-verde  [items]=\"itemContacto\" [itemSelect]=\"selected\" [heightLi]=\"'35px'\" [widthBorder] = 'false' (valueDropList)=\"recibirItem($event)\" style=\"width: 250px;display: flex;align-items: center\" *ngIf=\"activarCombo\"></pn-combo-flecha-verde>\n        </div>\n        <div style=\"height: 50%;width: 100%\">\n          <h1>SELECCIONA UN CONTACTO PARA VISUALIZAR ESTA SECCIÓN</h1>\n        </div>\n      </div>\n    </div>\n    <div>\n      <div style=\"padding-right: 20px;\" class=\"seccionListas\">\n        <div class=\"titulos\" style=\"border-bottom: initial\">\n          <label>ORDENES DE COMPRA</label>\n        </div>\n        <div>\n            <div class=\"titulosLista\">\n              <div class=\"organizarLista\" style=\"padding-bottom: 10px; padding-top: initial\">\n                <div style=\"height: 100%;    display: flex;align-items: center;\">\n                  <div class=\"menu\" (click)=\"abreCombo()\">\n                    <div>\n                    </div>\n                    <div>\n                    </div>\n                    <div>\n                    </div>\n                    <section id=\"section\">\n                      <ul class=\"listaHamburguesa\">\n                        <li (click)=\"ordenamientoFechaTramNue()\">Más Recientes</li>\n                        <li (click)=\"ordenamientoFechaTramAnt()\">Más Antiguos</li>\n                      </ul>\n                    </section>\n                  </div>\n                </div>\n                <div style=\"height: 100%;    display: flex;align-items: center;\">\n                  <h3 class=\"subtitulo\">{{tipoOrden}}</h3>\n                </div>\n                <div class=\"barraBusqueda\" style=\"height: 100%\">\n                  <div class=\"buscar\">\n                    <div>\n                      <div class=\"lupa\">\n                        <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\n                      </div>\n                      <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"OC\" />\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--Lista total-->\n            <div class=\"listaSeccionUno\">\n              <div>\n                <div class= \"lista\" style=\"display: unset;flex-direction: column\" >\n                  <div [ngClass]=\"item.oc === folio? 'divActive': ''\"  *ngFor=\"let item of lista; let i = index\"\n                       style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\" (click)=\"seleccionarItem(i, item)\">\n                    <div class=\"dfSelect\"></div>\n                    <div class=\"datosLst\">\n                      <div class=\"informacionList\">\n                        <label>#{{i +1}} · {{item.oc}} </label>\n                        <p>{{item.piezas}} Piezas · Inspector {{item.inspector}}</p>\n                        <h3 class=\"textoPiezas\">Fecha de Inspección: <span style=\"text-transform: capitalize;\">{{item.fechaInspeccion}}</span></h3>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"totales\">\n                <label>#{{lista.length}}</label>\n                <label>{{totalProductos}} Piezas</label>\n              </div>\n            </div>\n        </div>\n      </div>\n      <!--linea degradada-->\n      <div class=\"borderLine\"></div>\n      <!---->\n      <div style=\"width: 32%;padding-right: 20px;padding-left: 20px\" class=\"seccionListas\">\n        <div class=\"titulos\">\n          <label *ngIf=\"selectedOc\">#{{indice}} · OC<span>-{{this.folio}}</span></label>\n        </div>\n        <div>\n          <div class=\"titulosLista\">\n            <div class=\"organizarLista\">\n              <div class=\"barraBusqueda\" style=\"height: 100%\">\n                <div class=\"buscar\">\n                  <div style=\"width: 100%\">\n                    <div class=\"lupa\">\n                      <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\n                    </div>\n                    <input type=\"text\" [ngModel]=\"searchTermOc\" (ngModelChange)=\"buscarOc($event)\" class=\"buscar-input\" placeholder=\"codigo, tipo, descripción\" />\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--Lista total-->\n          <div class=\"listaSeccionUno\" style=\"padding-top: 15px;\">\n            <div style=\"border-top: initial\">\n              <div class= \"lista\" style=\"display: unset;flex-direction: column;padding: initial\" >\n                <div [ngClass]=\"item.identificador === folioOc? 'divActive': ''\"  *ngFor=\"let item of listaOc; let i = index\"\n                     style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\" (click)=\"seleccionarItemPieza(i, item)\">\n                  <div class=\"dfSelect\"></div>\n                  <div class=\"datosLst\">\n                    <div class=\"informacionList\" style=\"line-height: 1.3;\">\n                      <label>#{{i +1}} · <span style=\"color: #008894\">{{item.codigo}}</span> {{item.concepto}}</label>\n                      <label style=\"font-weight: 400\">Fecha de Inpección: <span style=\"text-transform: capitalize\">{{item.fechaInspeccionFormato}}</span> · Inspector: {{item.inspector}}</label>\n                      <h3>Lugar: {{item.destino}} FEE: {{item.feeFormato}} DRE: {{item.dre}} Tipo: {{item.tipo}}</h3>\n                      <label class=\"pedidoInter\">Pedido Interno {{item.cpedido}}</label>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"totales\">\n              <label>{{listaOcUniverso.length}} Piezas</label>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--linea degradada-->\n      <div class=\"borderLine\"></div>\n      <!---->\n      <div style=\"width: 48%;padding-left: 20px\" class=\"seccionListas\">\n        <div class=\"titulos\">\n          <label *ngIf=\"activarOc\" class=\"corteTexto\">#{{indiceOc}} · <span>{{itemOc.codigo}}</span> {{itemOc.concepto}}</label>\n        </div>\n        <div>\n          <div style=\"height: 15%; width: 100%; display: flex;flex-direction: column\">\n            <div style=\"height: 60%; width: 100%;display: flex;flex-direction: row;justify-content: space-between\">\n              <div class=\"infoProveedor\">\n                <span>Producto</span>\n                <div>\n                  <div style=\"padding-right: 5px;\">\n                    <label style=\"font-weight: 400\">Costo:</label>\n                    <label>{{itemOc.costo}}</label>\n                  </div>\n                  <div>\n                    <label style=\"font-weight: 400\">Manejo:</label>\n                    <label>{{itemOc.manejo}}</label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"infoProveedor\">\n                <span>Datos Económicos · Proveedor</span>\n                <div>\n                  <div>\n                    <label style=\"font-weight: 400\">Origen:</label>\n                    <label>{{itemOc.origen}}</label>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"segundaS\">\n              <div class=\"causaProducto\">\n                <label>Marca:</label>\n                <label style=\"font-weight: bold\">{{itemOc.proveedor}}</label>\n              </div>\n              <div class=\"causaProducto\">\n                <span>Causa</span>\n                <label>{{itemOc.causa.trim().slice(this.itemOc.causa.lenght, -1)}}</label>\n              </div>\n            </div>\n          </div>\n          <div class=\"seccionContenido\">\n            <div class=\"texto\">\n              <div style=\"height: calc(100% - 84px)\">\n                <label>Reporte de Rechazo</label>\n              </div>\n              <div class=\"rechazo\">\n                <label style=\"font-weight: 400\">{{itemOc.rechazo}}</label>\n              </div>\n            </div>\n            <div class=\"imagenes\">\n              <div class=\"imagenRechazo\">\n                <div class=\"image\">\n                  <label (click)=\"visualizarImg('frente')\" [style.font-weight]=\"fotoF? 'bold': ''\">Foto Frente</label>\n                  <label (click)=\"visualizarImg('arriba')\" [style.font-weight]=\"fotoAr? 'bold': ''\">Foto Arriba</label>\n                  <label (click)=\"visualizarImg('abajo')\" [style.font-weight]=\"fotoAb? 'bold': ''\">Foto Abajo</label>\n                </div>\n                <div class=\"estilosImagen\">\n                  <img [src]=\"pathImg\">\n                </div>\n              </div>\n            </div>\n            <div class=\"motivos\">\n              <div style=\"flex-direction: row; justify-content: flex-start;align-items: center\">\n                <div class=\"espacios\">\n                  <img src=\"./assets/Images/radio_unselected.svg\" *ngIf=\"!entregarSelect\" (click)=\"activarSelect('entregar')\">\n                  <img src=\"./assets/Images/radio_selected.svg\" *ngIf=\"entregarSelect\" (click)=\"activarSelect('entregar')\">\n                  <label>Entregar Producto a Cliente</label>\n                </div>\n                <div>\n                  <img src=\"./assets/Images/radio_unselected.svg\" *ngIf=\"!reclamarSelect\" (click)=\"activarSelect('reclamar')\">\n                  <img src=\"./assets/Images/radio_selected.svg\" *ngIf=\"reclamarSelect\" (click)=\"activarSelect('reclamar')\">\n                  <label>Reclamar reposición de producto</label>\n                </div>\n              </div>\n              <div  style=\"flex-direction: column;height: 70%\">\n                 <label>Instrucciones</label>\n                <textarea [ngModel]=\"instruccion\" (ngModelChange)=\"recibirInstruccion($event)\"></textarea>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"btn\">\n    <div [style.background-color]=\"activarBtn? '#4BA92B': '#C2C3C9'\" [style.pointer-events]=\"activarBtn? 'auto':'none'\" (click)=\"finalizar()\">\n      <label>ACEPTAR</label>\n    </div>\n  </div>\n</div>\n<pn-pop-up-finalizar-exitoso *ngIf=\"activarPop\" (desactivarPop)=\"cerrarPop($event)\" [label]=\"itemOc.concepto\" [imagen]=\"true\"></pn-pop-up-finalizar-exitoso>\n"

/***/ }),

/***/ "./src/app/components/gestion-cuarentena/vista-trabajar-productos/vista-trabajar-productos.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n.buscar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  height: 50px;\n  width: 100%;\n  border-style: solid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.buscar div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 90%;\n    border-radius: 102px 102px 102px 102px;\n    -moz-border-radius: 102px 102px 102px 102px;\n    -webkit-border-radius: 102px 102px 102px 102px;\n    border: 0.5px solid #BFC0C7;\n    height: 26px; }\n.buscar div div {\n      border: none;\n      border-radius: 0px 0px 0px 0px;\n      -moz-border-radius: 0px 0px 0px 0px;\n      -webkit-border-radius: 0px 0px 0px 0px;\n      border: 0px solid #000000;\n      width: 40px;\n      background: transparent;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n.buscar div .buscar-input {\n      background: transparent;\n      border-radius: 100px;\n      -moz-border-radius: 102px 102px 102px 102px;\n      border: 0px solid #000000;\n      width: 100%;\n      font-family: Helvetica;\n      font-size: 18px;\n      color: #AAA9AF;\n      outline: none;\n      padding-left: 5px; }\n.barraBusqueda {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n/******/\n.menu {\n  position: relative; }\n.menu:HOVER {\n  cursor: pointer; }\n.menu > div {\n  width: 20px;\n  height: 2px;\n  background: #000000;\n  margin: 5px; }\nsection {\n  position: absolute;\n  visibility: hidden;\n  height: 0; }\nsection.visible {\n  visibility: visible;\n  height: 74px;\n  overflow: auto;\n  width: 219px;\n  background: #FFFFFF;\n  z-index: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid #ECEEF0;\n  border-top: 1px solid #ECEEF0;\n  border-left: 1px solid #ECEEF0;\n  border-right: 1px solid #ECEEF0; }\n.listaHamburguesa {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 15px;\n  padding-right: 15px; }\n.listaHamburguesa > li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border-bottom: 0.5px solid #ECEEF0;\n    padding-bottom: 5px;\n    padding-top: 5px; }\n.listaHamburguesa > li:hover {\n    background-color: #ECEEF0; }\n.areaSeccion {\n  min-width: 1175px;\n  min-height: 1000px;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0px 20px 0px 20px; }\n.areaSeccion > div {\n    width: 100%;\n    height: calc(100% - 71px);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n.areaSeccion > div > .datosPersonales {\n      width: 100%;\n      height: 153px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      border-bottom: 1px solid #424242;\n      line-height: 1.5; }\n.areaSeccion > div > .datosPersonales > div {\n        height: 100%;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: start;\n            -ms-flex-align: start;\n                align-items: start;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        padding-right: 10px; }\n.areaSeccion > div > .datosPersonales > div > label {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 18px;\n          color: #424242;\n          text-align: left; }\n.areaSeccion > div > .datosPersonales > div > span {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 17px;\n          color: #848387;\n          text-align: left; }\n.areaSeccion > div > .datosPersonales > div > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n.areaSeccion > div > .datosPersonales > div > div > label {\n            font-family: Roboto;\n            font-weight: 400;\n            font-size: 18px;\n            color: #424242;\n            text-align: left; }\n.areaSeccion > div > .datosPersonales > div > div > h1 {\n            font-family: Novecento;\n            font-weight: bold;\n            font-size: 40px;\n            color: #D8D9DD;\n            line-height: 55px; }\n.areaSeccion > div > div {\n      width: 100%;\n      height: calc(100% - 153px);\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n.areaSeccion > .btn {\n    height: 71px;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-bottom: 5px; }\n.areaSeccion > .btn div {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      width: 170px;\n      height: 31px;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      background: #C2C3C9;\n      cursor: pointer; }\n.areaSeccion > .btn div > label {\n        font-family: Novecento;\n        font-weight: bold;\n        font-size: 20px;\n        color: #FFFFFF;\n        text-align: left;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin-bottom: 4px;\n        cursor: pointer; }\n.seccionListas {\n  width: 20%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n.seccionListas > .titulos {\n    width: 100%;\n    height: 67px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    border-bottom: 1px solid #242424;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.seccionListas > .titulos > label {\n      font-family: Novecento;\n      font-weight: bold;\n      font-size: 24px;\n      color: #424242;\n      text-align: left;\n      overflow: hidden;\n      -webkit-transition: 0.8s font-size;\n      transition: 0.8s font-size; }\n.seccionListas > .titulos > label > span {\n        color: #008894;\n        font-size: 24px;\n        font-weight: bold;\n        font-family: Novecento; }\n.seccionListas > div {\n    width: 100%;\n    height: calc(100% - 67px); }\n@supports (-webkit-line-clamp: 1) {\n  .corteTexto {\n    display: block;\n    display: -webkit-box !important;\n    line-height: 1.2;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    text-overflow: ellipsis; } }\n@supports not (-webkit-line-clamp: 1) {\n  .corteTexto {\n    position: relative;\n    line-height: 1.2;\n    overflow: hidden;\n    width: 100%; }\n    .corteTexto:before {\n      content: \"\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\";\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      background: transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;\n      background: transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%; } }\n.listaSeccionUno {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-height: 668px;\n  height: 96%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: auto; }\n.listaSeccionUno > div {\n    height: calc(100% - 30px);\n    border-bottom: 1px solid;\n    width: 100%;\n    border-top: 1px solid;\n    overflow: auto;\n    position: relative; }\n.listaSeccionUno > .totales {\n    height: 30px;\n    width: 100%;\n    border-bottom: 0;\n    border-top: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    line-height: 1.2; }\n.noSeleccionado {\n  height: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 20px; }\n.informacionList {\n  font-family: Roboto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n.informacionList label {\n    color: #242424;\n    font-weight: bold;\n    font-size: 20px;\n    font-family: Roboto;\n    -webkit-transition: 0.8s font-size;\n    transition: 0.8s font-size; }\n.informacionList p {\n    font-weight: 400;\n    font-family: Roboto;\n    font-size: 19px;\n    color: #008894;\n    text-align: left;\n    -webkit-transition: 0.8s font-size;\n    transition: 0.8s font-size; }\n.informacionList h3 {\n    font-size: 18px;\n    font-family: Roboto;\n    color: #848387;\n    margin-top: 4px;\n    font-weight: 400;\n    -webkit-transition: 0.8s font-size;\n    transition: 0.8s font-size; }\n.pedidoInter {\n  font-weight: 400 !important; }\n.imagenFlecha {\n  position: absolute;\n  right: 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  height: 100%; }\n.organizarLista {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 10px;\n  position: relative;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.primeraSec {\n  width: 30%;\n  background: #FFFFFF;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-left: 20px;\n  margin-right: 20px;\n  min-width: 350px; }\n.primeraSec > .listaSeccionUno {\n    height: 90%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n.primeraSec > .listaSeccionUno > div {\n      height: calc(100% - 30px);\n      border-bottom: 1px solid;\n      width: 100%;\n      border-top: 1px solid;\n      overflow: scroll; }\n.primeraSec > .listaSeccionUno > .totales {\n      height: 30px;\n      width: 100%;\n      border-bottom: 0;\n      border-top: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n.lista {\n  width: 100%;\n  min-height: 80px;\n  font-size: 20px;\n  padding: 15px 19px 14px 13px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  line-height: 1.3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto; }\n.lista > .index {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    height: 52px; }\n.lista > div > .datosLst {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-left: 20px; }\n.lista div:hover {\n    background-color: #ECEEF0; }\n.lista > .divActual {\n    background-color: #ECEEF0;\n    -webkit-box-shadow: 0 2px 4px -3px #008895;\n            box-shadow: 0 2px 4px -3px #008895; }\n.lista > .divActive {\n    background-color: #ECEEF0; }\n.lista > .divActive .dfSelect {\n      background: #008895 !important;\n      width: 5px !important;\n      color: #008895; }\n.lista > .divActive > div > .datosLst {\n      -webkit-box-ordinal-group: 1;\n          -ms-flex-order: 0;\n              order: 0;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n      -ms-flex-item-align: auto;\n          -ms-grid-row-align: auto;\n          align-self: auto;\n      padding-top: 5px;\n      padding-bottom: 5px;\n      padding-left: 20px; }\n.borderLine {\n  width: 1.1px !important;\n  height: 100% !important;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(2%, #FFFFFF), color-stop(70%, #BCBCBC), color-stop(93%, #FFFFFF)) 100%;\n  background: linear-gradient(to top, #FFFFFF 2%, #BCBCBC 70%, #FFFFFF 93%) 100%; }\n.icono {\n  width: 16px;\n  margin-right: 5px; }\n.flechaInicio {\n  width: 100%;\n  -webkit-transform: rotate(-180deg);\n  transform: rotate(-180deg);\n  padding-left: 5px; }\n.numeroIndex {\n  font-size: 28px;\n  font-family: Roboto;\n  font-weight: 400;\n  color: #242424;\n  text-align: left;\n  padding-right: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 4px; }\n.infoProveedor {\n  height: 100%;\n  width: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.2; }\n.infoProveedor > span {\n    font-family: Roboto;\n    font-weight: bold;\n    font-size: 20px;\n    color: #008894;\n    text-align: left;\n    -webkit-transition: 0.8s font-size;\n    transition: 0.8s font-size; }\n.infoProveedor > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.infoProveedor > div > div {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n.infoProveedor > div > div > label {\n        font-family: Roboto;\n        font-weight: bold;\n        font-size: 18px;\n        color: #424242;\n        text-align: left;\n        padding-right: 5px;\n        -webkit-transition: 0.8s font-size;\n        transition: 0.8s font-size; }\n.segundaS {\n  height: 40%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n.segundaS .causaProducto {\n    height: 100%;\n    width: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n.segundaS .causaProducto > span {\n      font-family: Roboto;\n      font-weight: bold;\n      font-size: 20px;\n      color: #008894;\n      text-align: left;\n      -webkit-transition: 0.8s font-size;\n      transition: 0.8s font-size; }\n.segundaS .causaProducto > label {\n      overflow: hidden;\n      font-family: Roboto;\n      font-weight: 400;\n      font-size: 18px;\n      color: #424242;\n      text-align: left;\n      padding-right: 5px;\n      -webkit-transition: 0.8s font-size;\n      transition: 0.8s font-size; }\n@supports (-webkit-line-clamp: 1) {\n        .segundaS .causaProducto > label {\n          display: block;\n          display: -webkit-box !important;\n          line-height: inital;\n          -webkit-line-clamp: 1;\n          -webkit-box-orient: vertical;\n          text-overflow: ellipsis; } }\n@supports not (-webkit-line-clamp: 1) {\n        .segundaS .causaProducto > label {\n          position: relative;\n          line-height: inital;\n          overflow: hidden;\n          width: 100%; }\n          .segundaS .causaProducto > label:before {\n            content: \"\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\";\n            position: absolute;\n            bottom: 0;\n            right: 0;\n            background: transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;\n            background: transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%; } }\n.seccionContenido {\n  height: 85%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n.seccionContenido > .texto {\n    height: 116px;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-bottom: 5px; }\n.seccionContenido > .texto > div > label {\n      font-family: Roboto;\n      font-weight: bold;\n      font-size: 20px;\n      color: #424242;\n      text-align: left; }\n.seccionContenido > .texto > .rechazo {\n      line-height: 84px;\n      width: 100%;\n      background-color: #f9e0e0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding-left: 20px;\n      padding-right: 20px; }\n.seccionContenido > .imagenes {\n    height: calc(100% - 116px);\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-top: 5px; }\n.seccionContenido > .imagenes > .imagenRechazo {\n      height: 100%;\n      width: 100%;\n      background-color: #F3F3F4;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n.seccionContenido > .imagenes > .imagenRechazo > .image {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        padding-top: 10px; }\n.seccionContenido > .imagenes > .imagenRechazo > .image > label {\n          cursor: pointer;\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 20px;\n          color: #008894;\n          text-align: left;\n          height: 23px; }\n.seccionContenido > .imagenes > .imagenRechazo > .image > label:hover {\n          border-bottom: 1px solid; }\n.seccionContenido > .imagenes > .imagenRechazo > .estilosImagen {\n        height: calc(100% - 20px);\n        width: calc(100% - 20px);\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n.seccionContenido > .imagenes > .imagenRechazo > .estilosImagen > img {\n          height: 305px;\n          position: relative; }\n.motivos {\n  height: calc(100% - 407px);\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n.motivos > div {\n    height: 30%;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n.motivos > div > div {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box; }\n.motivos > div > div > label {\n        font-family: Roboto;\n        font-weight: 400;\n        font-size: 18px;\n        color: #424242;\n        text-align: center;\n        -webkit-transition: 0.8s font-size;\n        transition: 0.8s font-size; }\n.motivos > div > div > img {\n        height: 20px;\n        padding-right: 15px; }\n.motivos > div > label {\n      font-family: Roboto;\n      font-weight: 400;\n      font-size: 16px;\n      color: #424242;\n      text-align: left; }\n.motivos > div > textarea {\n      height: 77px;\n      outline: 0 none;\n      border-width: 1px;\n      border-style: solid;\n      border-color: #D8D9DD;\n      font-size: 16px;\n      font-family: Roboto;\n      font-weight: 400;\n      resize: none; }\n.espacios {\n  padding-right: 120px; }\n.subtitulo {\n  font-family: Roboto;\n  font-weight: 400;\n  font-size: 18px;\n  color: #424242;\n  text-align: left; }\n/deep/ .dropListSelect .container-drop .Title > p {\n  font-weight: bold !important;\n  color: #008894; }\n@media all and (min-width: 1300px) and (max-width: 1836px) {\n  .areaSeccion > div > .datosPersonales > div > div > h1 {\n    font-size: 35px; }\n  .seccionListas > .titulos > label {\n    font-size: 22px; }\n  .seccionListas > .titulos > label > span {\n    font-size: 22px; }\n  .infoProveedor > span, .causaProducto > span {\n    font-size: 18px; }\n  .infoProveedor > div > div > label, .causaProducto > label {\n    font-size: 16px; }\n  .informacionList > label {\n    font-size: 18px; }\n  .informacionList > p {\n    font-size: 17px; }\n  .informacionList > h3 {\n    font-size: 16px; }\n  .motivos > div > div > label {\n    font-size: 16px; } }\n@media all and (min-width: 1300px) and (max-width: 1864px) {\n  .espacios {\n    padding-right: 20px; } }\n@media all and (min-height: 770px) and (max-height: 1261px) {\n  .listaSeccionUno {\n    height: 95.5%; } }\n"

/***/ }),

/***/ "./src/app/components/gestion-cuarentena/vista-trabajar-productos/vista-trabajar-productos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistaTrabajarProductosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_arribo_documento_arribo_documento_service__ = __webpack_require__("./src/app/services/arribo-documento/arribo-documento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_gestionar_cuarentena_gestionar_cuarentena_service__ = __webpack_require__("./src/app/services/gestionar-cuarentena/gestionar-cuarentena.service.ts");
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




var VistaTrabajarProductosComponent = /** @class */ (function () {
    function VistaTrabajarProductosComponent(_serviceContac, _seriveCuarentena, comunService) {
        this._serviceContac = _serviceContac;
        this._seriveCuarentena = _seriveCuarentena;
        this.comunService = comunService;
        this.regreVista = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.itemContacto = [];
        this.contacto = 'Seleccionar';
        this.listaOc = [];
        this.listaOcUniverso = [];
        this.folio = '';
        this.searchTerm = '';
        this.searchTermOc = '';
        this.val = 1;
        this.validar = 1;
        this.rutaProd = 'http://proquifa.com.mx:51725/SAP/InspeccionOC/ImagenesRechazo/';
        this.rutaLocal = 'http://localhost:8080/SAP/InspeccionOC/ImagenesRechazo/';
        this.lista = [];
        this.listaUniveso = [];
    }
    VistaTrabajarProductosComponent.prototype.ngOnInit = function () {
        var obj;
        obj = new Object();
        obj.nombre = 'Seleccionar';
        this.selected = obj;
        this.tipoOrden = 'Todos';
        // this.recibirContactos();
        // this.obtenerListas();
    };
    VistaTrabajarProductosComponent.prototype.ngOnChanges = function () {
        if (this.datosProveedor !== null && this.val === 1) {
            this.recibirContactos();
            this.obtenerListas();
            this.val++;
        }
    };
    VistaTrabajarProductosComponent.prototype.recibirContactos = function () {
        var _this = this;
        this._serviceContac.contactoProveedor(this.datosProveedor.idProveedor).subscribe(function (data) {
            var listaContacto = data.current;
            for (var i = 0; i < listaContacto.length; i++) {
                _this.itemContacto.push({ nombre: listaContacto[i].nombre, key: i, departament: listaContacto[i].departamento,
                    puesto: listaContacto[i].puesto, email: listaContacto[i].email, titulo: listaContacto[i].titulo, tel: listaContacto[i].telefono });
            }
            _this.activarCombo = true;
        }, function (error) {
            console.log('Error -->', error);
        });
    };
    VistaTrabajarProductosComponent.prototype.obtenerListas = function () {
        var _this = this;
        this.totalProductos = 0;
        this.lista = [];
        this.listaUniveso = [];
        this._seriveCuarentena.piezasRechazadasPorProveedor(this.datosProveedor.idProveedor).subscribe(function (data) {
            if (data.current && data.current !== undefined && data.current.length > 0) {
                var listaAux = data.current;
                for (var i = 0; i < listaAux.length; i++) {
                    _this.lista.push({
                        proveedor: listaAux[i].proveedor,
                        piezas: listaAux[i].lstRechazos.length,
                        fechaInspeccion: listaAux[i].fechaInspeccionFormato,
                        listaRechazos: listaAux[i].lstRechazos,
                        oc: listaAux[i].compra,
                        inspector: listaAux[i].inspector,
                        fecha: listaAux[i].fechaInspeccion
                    });
                    _this.listaUniveso.push({
                        proveedor: listaAux[i].proveedor,
                        piezas: listaAux[i].lstRechazos.length,
                        fechaInspeccion: listaAux[i].fechaInspeccionFormato,
                        listaRechazos: listaAux[i].lstRechazos,
                        oc: listaAux[i].compra,
                        inspector: listaAux[i].inspector,
                        fecha: listaAux[i].fechaInspeccion
                    });
                    _this.totalProductos++;
                }
                _this.seleccionarItem(0, _this.lista[0]);
            }
            else {
                _this.regreVista.emit(true);
            }
        }, function (error) {
        });
    };
    /*****/
    VistaTrabajarProductosComponent.prototype.abreCombo = function () {
        if (document.getElementById("section").className == "visible") {
            document.getElementById("section").className = "";
        }
        else {
            document.getElementById("section").className = "visible";
        }
    };
    VistaTrabajarProductosComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search === '') {
            this.lista = this.listaUniveso.slice();
        }
        else {
            this.listaUniveso.forEach(function (folio) {
                if (folio.oc.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.lista = searchArrayAux;
        }
        if (this.lista.length > 0) {
            if (this.tipoOrden === 'Más Recientes') {
                this.ordenamientoFechaTramNue();
            }
            else if (this.tipoOrden === 'Más Antiguos') {
                this.ordenamientoFechaTramAnt();
            }
        }
    };
    VistaTrabajarProductosComponent.prototype.buscarOc = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTermOc = search;
        if (search === '') {
            this.listaOc = this.listaOcUniverso.slice();
        }
        else {
            this.listaOcUniverso.forEach(function (folio) {
                if (folio.codigo.toLowerCase().indexOf(_this.searchTermOc.toLowerCase()) !== -1 ||
                    folio.concepto.toLowerCase().indexOf(_this.searchTermOc.toLowerCase()) !== -1 ||
                    folio.tipo.toLowerCase().indexOf(_this.searchTermOc.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.listaOc = searchArrayAux;
        }
    };
    VistaTrabajarProductosComponent.prototype.ordenamientoFechaTramNue = function () {
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
    };
    VistaTrabajarProductosComponent.prototype.ordenamientoFechaTramAnt = function () {
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
    };
    VistaTrabajarProductosComponent.prototype.recibirItem = function (itemContacto) {
        if (itemContacto.nombre === 'Seleccionar' && this.validar === 2) {
            this.selected = this.contacto;
        }
        if (itemContacto.nombre !== 'Seleccionar' && itemContacto.nombre !== undefined) {
            this.validar++;
            this.contacto = itemContacto.nombre;
            this.itemContactoS = itemContacto;
        }
        this.buscar(this.searchTerm);
    };
    VistaTrabajarProductosComponent.prototype.seleccionarItem = function (i, item) {
        this.searchTermOc = '';
        this.selectedOc = true;
        this.indice = i + 1;
        this.folio = item.oc;
        this.listaOc = item.listaRechazos;
        this.listaOcUniverso = item.listaRechazos;
        this.seleccionarItemPieza(0, this.listaOc[0]);
        this.validarBtn();
        this.buscarOc(this.searchTermOc);
    };
    VistaTrabajarProductosComponent.prototype.seleccionarItemPieza = function (i, item) {
        this.imgFrentr = '';
        this.imgArriba = '';
        this.imgAbajo = '';
        this.instruccion = '';
        this.reclamarSelect = false;
        this.entregarSelect = false;
        this.activarOc = true;
        this.folioOc = item.identificador;
        this.itemOc = item;
        this.indiceOc = i + 1;
        if (this.itemOc.imagenRechazo !== null) {
            var imagenes = this.itemOc.imagenRechazo.split('|');
            this.imgFrentr = imagenes[0];
            this.imgArriba = imagenes[1];
            this.imgAbajo = imagenes[2];
        }
        this.visualizarImg('frente');
        this.validarBtn();
    };
    VistaTrabajarProductosComponent.prototype.visualizarImg = function (tipo) {
        var _this = this;
        var img;
        this.fotoAb = false;
        this.fotoAr = false;
        this.fotoF = false;
        var nombreImg;
        if (tipo === 'abajo') {
            img = this.imgAbajo;
            this.fotoAb = true;
        }
        else if (tipo === 'frente') {
            img = this.imgFrentr;
            this.fotoF = true;
        }
        else if (tipo === 'arriba') {
            this.fotoAr = true;
            img = this.imgArriba;
        }
        this.comunService.obtenerRuta(img, 'Imagen', '').then(function (data) {
            _this.pathImg = data;
        });
    };
    VistaTrabajarProductosComponent.prototype.activarSelect = function (tipo) {
        if (tipo === 'entregar') {
            if (!this.entregarSelect) {
                this.accion = 'Entregar';
                this.entregarSelect = true;
                if (this.reclamarSelect) {
                    this.reclamarSelect = false;
                }
            }
        }
        else if (tipo === 'reclamar') {
            if (!this.reclamarSelect) {
                this.accion = 'Reclamar';
                this.reclamarSelect = true;
                if (this.entregarSelect) {
                    this.entregarSelect = false;
                }
            }
        }
        this.validarBtn();
    };
    VistaTrabajarProductosComponent.prototype.recibirInstruccion = function (valor) {
        this.instruccion = valor;
        this.validarBtn();
    };
    VistaTrabajarProductosComponent.prototype.validarBtn = function () {
        if (this.instruccion !== undefined && this.instruccion !== null && this.instruccion !== ''
            && ((this.entregarSelect !== false) || (this.reclamarSelect !== false))) {
            this.activarBtn = true;
        }
        else {
            this.activarBtn = false;
        }
    };
    VistaTrabajarProductosComponent.prototype.finalizar = function () {
        var _this = this;
        var objEnviar = {
            idPieza: this.itemOc.identificador,
            instrucciones: this.instruccion,
            idPCompra: this.itemOc.idPCompra,
            accion: this.accion,
            idProveedor: this.datosProveedor.idProveedor,
            idPPedido: this.itemOc.idPPedido
        };
        this._seriveCuarentena.finalizarCuarentena(objEnviar).subscribe(function (data) {
            if (data.current === true) {
                _this.obtenerListas();
                _this.regreVista.emit(false);
                _this.activarPop = true;
            }
        });
    };
    VistaTrabajarProductosComponent.prototype.cerrarPop = function () {
        this.activarPop = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VistaTrabajarProductosComponent.prototype, "datosProveedor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaTrabajarProductosComponent.prototype, "regreVista", void 0);
    VistaTrabajarProductosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-vista-trabajar-productos',
            template: __webpack_require__("./src/app/components/gestion-cuarentena/vista-trabajar-productos/vista-trabajar-productos.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion-cuarentena/vista-trabajar-productos/vista-trabajar-productos.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_arribo_documento_arribo_documento_service__["a" /* ArriboDocumentoService */], __WEBPACK_IMPORTED_MODULE_2__services_gestionar_cuarentena_gestionar_cuarentena_service__["a" /* GestionarCuarentenaService */], __WEBPACK_IMPORTED_MODULE_3__services_comun_comun_service__["a" /* ComunService */]])
    ], VistaTrabajarProductosComponent);
    return VistaTrabajarProductosComponent;
}());



/***/ })

});
//# sourceMappingURL=gestion-cuarentena.module.chunk.js.map