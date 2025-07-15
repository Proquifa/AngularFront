webpackJsonp(["material-stock.module"],{

/***/ "./src/app/components/material-stock/material-stock-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialStockRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_stock_component__ = __webpack_require__("./src/app/components/material-stock/material-stock.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialStockRoutingModule = /** @class */ (function () {
    function MaterialStockRoutingModule() {
    }
    MaterialStockRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__material_stock_component__["a" /* MaterialStockComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], MaterialStockRoutingModule);
    return MaterialStockRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/material-stock/material-stock.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\n  <!--Seccion de menu-->\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\n    <aside [ngClass]=\"classAsideMenu\">\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\n        <pn-menu-seccion-roles [items]=\"itemsMenu\"   [titulo]=\"'RESPONSABLE DE SURTIDO'\" style=\"width: 100%;\" *ngIf=\"activar\"></pn-menu-seccion-roles>\n      </div>\n    </aside>\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n    </div>\n  </div>\n  <!--Empieza el area de trabajo-->\n  <div class=\"area\">\n    <!--Empieza la cabezera-->\n    <div class=\"cabezera\">\n      <div>\n        <label class=\"etiqueta\">MATERIAL EN STOCK</label>\n      </div>\n    </div>\n    <!--Empiezan los componentes-->\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 122px)'}\">\n      <div class=\"areaPrincipal\" *ngIf=\"partHabilidatas\">\n        <div class=\"vistaGeneral\">\n          <div class=\"botonera\">\n            <pn-botonera [lista]=\"listaTipos\" *ngIf=\"activeBotonera\" style=\"width: 100%;height: 100%\" (event)=\"seleccionarLista($event)\" [selectedPos]=\"selectItem\"></pn-botonera>\n          </div>\n        </div>\n        <div class=\"informacionLista\">\n          <div class=\"filtros\">\n            <div class=\"filtering\">\n              <div>\n                <label>Marcas</label>\n                <pn-drop-list-search [title]=\"'Seleccionar'\" [valImg]=\"'flechaRellena'\" [items]=\"marcas\" *ngIf=\"activeMarca\" [subtitleActive]=\"false\" (valueDropList)=\"filtrar($event, 'Marca')\" style=\"display: flex;align-items: center\"></pn-drop-list-search>\n              </div>\n              <div>\n                <label>Control</label>\n                <pn-combo-flecha-rellena [title]=\"'Seleccionar'\" [valImg]=\"'flechaRellena'\" [items]=\"control\" [subtitleActive]=\"false\" (valueDropList)=\"filtrar($event, 'Control')\"></pn-combo-flecha-rellena>\n              </div>\n              <div>\n                <label>Manejo</label>\n                <pn-combo-flecha-rellena [title]=\"'Seleccionar'\" [valImg]=\"'flechaRellena'\" [items]=\"tipoManejo\" [subtitleActive]=\"false\"  (valueDropList)=\"filtrar($event, 'Manejo')\"></pn-combo-flecha-rellena>\n              </div>\n            </div>\n            <div class=\"barraBusqueda\">\n              <div class=\"buscar\">\n                <div>\n                  <div class=\"lupa\">\n                    <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\n                  </div>\n                  <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Descripción, Catálogo\" />\n                  <div class=\"lupa\" (click)=\"buscar('')\" style=\"cursor: pointer;\">\n                    <img src=\"assets/Images/cerrar.svg\"  height=\"12px\" alt=\"buscar\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"vistaLista\">\n            <header>\n              <div class=\"imagenesDiv\" style=\"min-width: 29px;max-width: 29px\"></div>\n              <div  class=\"imagenesDiv\" style=\"max-width: 27px\">\n                <label>#</label>\n              </div>\n              <div style=\"width: 9%\">\n                <label>Marca</label>\n              </div>\n              <div style=\"width: 8%\">\n                <label>Catálogo</label>\n              </div>\n              <div style=\"width: 15%\">\n                <label>Descripción</label>\n              </div>\n              <div>\n                <label>Control</label>\n              </div>\n              <div style=\"width: 8%\">\n                <label>Tipo</label>\n              </div>\n              <div style=\"width: 8%\">\n                <label>Etiqueta</label>\n              </div>\n              <div style=\"width: 8%\">\n                <label style=\"text-align: center;\">Lote</label>\n              </div>\n              <div>\n                <label style=\"text-align: center;\">Tipo de Lote</label>\n              </div>\n              <div>\n                <label style=\"text-align: center;\">Vigencia</label>\n              </div>\n              <div style=\"width: 7%\">\n                <label style=\"text-align: center;\">P.U</label>\n              </div>\n              <div class=\"imagenesDiv\"></div>\n            </header>\n            <div style=\"height: 95%;width: 100%;overflow: auto;\">\n              <div class= \"lista\" style=\"display: unset;flex-direction: column\">\n                <div  *ngFor=\"let item of lista; let i = index\" style=\"display: flex;flex-direction:column;width: 100%;position: relative;\">\n                  <div [ngClass]=\"item.activePart? 'divActive': 'div'\">\n                    <div class=\"dfSelect\"></div>\n                    <div class=\"datosLst\">\n                      <div class=\"imagenesDiv\" style=\"max-width: 29px;min-width: 29px\">\n                        <img class=\"imgEstado\" src=\"./assets/Images/congelacion.svg\" *ngIf=\"item.manejoTransporte.toLowerCase() === 'congelación'\">\n                        <img class=\"imgEstado\" src=\"./assets/Images/refrigeracion.svg\" *ngIf=\"item.manejoTransporte.toLowerCase() === 'refrigeración'\">\n                        <img clas=\"imgEstado\" src=\"./assets/Images/ambiente.svg\" *ngIf=\"item.manejoTransporte.toLowerCase() === 'ambiente'\">\n                      </div>\n                      <div class=\"imagenesDiv\" style=\"max-width: 27px\">\n                        <span>{{i + 1}}</span>\n                      </div>\n                      <div style=\"width: 11%\">\n                        <label>{{item.fabrica}}</label>\n                      </div>\n                      <div  style=\"width: 8%\">\n                        <span>{{item.codigo}}</span>\n                      </div>\n                      <div style=\"width: 15%\">\n                        <label>{{item.descripcion}}</label>\n                      </div>\n                      <div>\n                        <span>{{item.control}}</span>\n                      </div>\n                      <div style=\"width: 8%\">\n                        <label>{{item.cpedido}}</label>\n                      </div>\n                      <div style=\"width: 8%\">\n                        <span>{{item.tipo}}</span>\n                      </div>\n                      <div style=\"width: 8%\">\n                        <label>{{item.cliente}}</label>\n                      </div>\n                      <div>\n                        <span>{{item.etiqueta}}</span>\n                      </div>\n                      <div>\n                        <label style=\"text-transform: capitalize\">{{item.fee}}</label>\n                      </div>\n                      <div style=\"width: 7%\">\n                        <span *ngIf=\"item.ruta === 'Dolares'\">{{item.monto | currency: 'USD'}} USD</span>\n                        <span *ngIf=\"item.ruta === 'Pesos'\">{{item.monto | acFormatMoney}} MXN</span>\n                        <span *ngIf=\"item.ruta === 'Libras'\">{{item.monto | acFormatMoney}} lbs</span>\n                        <span *ngIf=\"item.ruta === 'Euros'\">{{item.monto | currency: '€'}} EUR</span>\n                        <span *ngIf=\"item.ruta === 'DlCan'\">{{item.monto | acFormatMoney}} CAD</span>\n                      </div>\n                      <div class=\"imagenesDiv\">\n                        <div class=\"tooltip\">\n                          <img src=\"./assets/Images/destruir.svg\" (click)=\"eliminarStock(item)\">\n                          <span class=\"tooltiptext\">Destruir</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <!--Termina Lista partidas-->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"sinDatos\" *ngIf=\"!partHabilidatas\">\n        <label>SIN PARTIDAS DISPONIBLES</label>\n      </div>\n    </div>\n    <!--Terminan los componentes-->\n    <footer class=\"footer\">\n      <div class=\"datosFooter\">\n        <div class=\"Prioridad1\">\n          <img class=\"img\" src='./assets/Images/ambiente.svg' /> Ambiente\n        </div>\n        <div class=\"Prioridad1\">\n          <img class=\"img\" src='./assets/Images/congelacion.svg' /> Congelación\n        </div>\n        <div class=\"Prioridad1\">\n          <img class=\"img\" src='./assets/Images/refrigeracion.svg' /> Refrigeración\n        </div>\n        <div class=\"Prioridad1\">\n          <img class=\"img\" src='./assets/Images/destruir.svg' /> Destruir Producto\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n<pn-pop-up-notificado-desvincular *ngIf=\"notificado\" (event)=\"cerrarPop($event)\" [itemStock]=\"itemStock\"></pn-pop-up-notificado-desvincular>\n"

/***/ }),

/***/ "./src/app/components/material-stock/material-stock.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n.padre {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n.aux .asideNormalMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  min-width: 181px;\n  width: 321px;\n  height: 100%;\n  overflow-y: scroll; }\n.aux .asideNormalMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%; }\n.aux > .asideOcultarMenu {\n  -webkit-animation-name: ocultarMenu;\n          animation-name: ocultarMenu;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-transition: 1s ease-in-out;\n  transition: 1s ease-in-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 0px;\n  width: 0px; }\n.aux > .asideOcultarMenu > .articulo {\n    width: 0px; }\n.aux > .asideMostrarMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  -webkit-animation-name: mostrarMenu;\n          animation-name: mostrarMenu;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-y: scroll; }\n.aux > .asideMostrarMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%; }\n@-webkit-keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@-webkit-keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n@keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n.area {\n  width: 100%;\n  height: 100%;\n  overflow: auto; }\n.sinDatos {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.sinDatos > label {\n    color: #D8D9DD;\n    font-family: Novecento;\n    font-weight: bold;\n    font-size: 50px;\n    text-align: center;\n    width: 100%; }\n.lista {\n  width: 100%;\n  font-size: 20px;\n  padding: 15px 19px 14px 13px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  line-height: 1.3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto; }\n.lista div > .div {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    border-bottom: 1px solid #ECEEF0; }\n.lista div > .div .datosLst:hover {\n      background-color: #ECEEF0; }\n.lista div > .div .datosLst {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n      -ms-flex-item-align: auto;\n          align-self: auto;\n      padding: 5px 10px 5px 10px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n.lista div > .div .datosLst > div {\n        width: 10%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        padding-right: 5px;\n        padding-left: 5px; }\n.lista div > .div .datosLst > div > label {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 16px;\n          color: #424242;\n          text-align: center; }\n.lista div > .div .datosLst > div > span {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 16px;\n          color: #008894;\n          text-align: center; }\n.lista div > .divActual {\n    background-color: #ECEEF0;\n    -webkit-box-shadow: 0 2px 4px -3px #008895;\n            box-shadow: 0 2px 4px -3px #008895; }\n.lista div > .divActive {\n    border-bottom: 1px solid #ECEEF0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background-color: #ECEEF0;\n    width: 100%; }\n.lista div > .divActive .dfSelect {\n      background: #008895 !important;\n      width: 5px !important;\n      color: #008895; }\n.lista div > .divActive > .datosLst {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n      -ms-flex-item-align: auto;\n          align-self: auto;\n      padding: 5px 10px 5px 5px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n.lista div > .divActive > .datosLst > div {\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        padding-right: 5px;\n        padding-left: 5px;\n        width: 10%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n.lista div > .divActive > .datosLst > div > label {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 16px;\n          color: #424242;\n          text-align: center; }\n.lista div > .divActive > .datosLst > div > span {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 16px;\n          color: #008894;\n          text-align: center; }\n.imagenesDiv {\n  min-width: 25px;\n  max-width: 25px;\n  width: initial !important;\n  cursor: pointer; }\n.filtros {\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  margin-right: 80px; }\n.vistaLista {\n  height: 90%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 10px; }\n.cabezera {\n  width: 100%;\n  height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 13px;\n  padding-right: 13px;\n  border-bottom: 2px solid black;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n.cabezera > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.cabezera > div > .etiqueta {\n      color: #5B5B5B;\n      font-size: 25px;\n      font-family: Novecento;\n      margin-bottom: 5px;\n      font-weight: normal; }\n.areaPrincipal {\n  min-width: 1212px;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 20px 20px 20px 20px; }\n.filtrosOrden {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\nsection {\n  position: absolute;\n  visibility: hidden;\n  height: 0; }\nsection.visible {\n  visibility: visible;\n  height: 74px;\n  overflow: auto;\n  width: 137px;\n  background: #FFFFFF;\n  z-index: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid #ECEEF0;\n  border-top: 1px solid #ECEEF0;\n  border-left: 1px solid #ECEEF0;\n  border-right: 1px solid #ECEEF0; }\n.listaHamburguesa {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 15px;\n  padding-right: 15px; }\n.listaHamburguesa > li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border-bottom: 0.5px solid #ECEEF0;\n    padding-bottom: 5px;\n    padding-top: 5px; }\n.listaHamburguesa > li:hover {\n    background-color: #ECEEF0; }\nheader {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 5%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid #242424;\n  padding-right: 10px;\n  padding-left: 10px; }\nheader > div {\n    width: 10%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-left: 5px;\n    padding-right: 5px; }\nheader > div > label {\n      font-family: Roboto;\n      font-weight: bold;\n      font-size: 15px;\n      color: #424242;\n      text-align: left; }\n.headerPart {\n  border-bottom: initial !important;\n  padding-left: 40px !important;\n  padding-right: 40px !important; }\n.headerPart > div {\n    -webkit-box-pack: initial !important;\n        -ms-flex-pack: initial !important;\n            justify-content: initial !important; }\n.headerPart > div > label {\n      color: #848387 !important;\n      font-weight: normal !important; }\n.informacionLista {\n  width: 100%;\n  height: calc(100% - 115px); }\n.informacionLista > .filtros {\n    height: 10%;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n.informacionLista > .filtros > div {\n      width: 50%;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n.buscar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  height: 50px;\n  width: 100%;\n  border-style: solid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.buscar div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 70%;\n    border-radius: 102px 102px 102px 102px;\n    border: 0.5px solid #BFC0C7;\n    height: 26px; }\n.buscar div div {\n      border: none;\n      border-radius: 0px 0px 0px 0px;\n      border: 0px solid #000000;\n      width: 40px;\n      background: transparent;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n.buscar div .buscar-input {\n      background: transparent;\n      border-radius: 100px;\n      border: 0px solid #000000;\n      width: 100%;\n      font-family: Helvetica;\n      font-size: 18px;\n      color: #AAA9AF;\n      outline: none;\n      padding-left: 5px; }\n.barraBusqueda {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 40% !important; }\n.filtering {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-right: 30px; }\n.filtering > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-right: 10px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.filtering > div > label {\n      font-family: Roboto;\n      font-weight: 400;\n      font-size: 16px;\n      color: #424242;\n      padding-right: 5px; }\n.footer {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 57px;\n  max-height: 57px;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: inherit;\n      -ms-flex-align: inherit;\n          align-items: inherit;\n  border-top: 2px solid black;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  font-size: 14px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.footer > .datosFooter {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -ms-flex-item-align: auto;\n        align-self: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-line-pack: distribute;\n        align-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 14px; }\n.footer > .datosFooter > .Prioridad1 {\n      -webkit-box-ordinal-group: 1;\n          -ms-flex-order: 0;\n              order: 0;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 auto;\n              flex: 0 1 auto;\n      -ms-flex-item-align: center;\n          align-self: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-left: 0.7%;\n      margin-right: 0.7%; }\n.footer > .datosFooter > .Prioridad1 > .p1 {\n        color: #424242;\n        font-weight: bold;\n        margin-right: 6px;\n        font-size: 14px; }\n.footer > .datosFooter > .Prioridad1 > .img {\n        margin-right: 6px; }\n.tooltip {\n  position: relative;\n  cursor: pointer; }\n.tooltip > .tooltiptext:before {\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    border-top: 6px solid #424242;\n    bottom: -6px;\n    content: \"\";\n    height: 0;\n    left: 50%;\n    margin-left: -6px;\n    position: absolute;\n    width: 0; }\n.tooltip > .tooltiptext {\n    width: 75px;\n    background-color: #424242;\n    color: #FFFFFF;\n    display: none;\n    position: absolute;\n    top: -31px;\n    right: -31px;\n    font-size: 12px;\n    font-family: Roboto;\n    padding: 5px;\n    z-index: 1;\n    text-align: center; }\n.tooltip:hover > .tooltiptext {\n    display: block;\n    opacity: 1; }\n.imgEstado {\n  height: 17px; }\n/deep/ .list {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n@media all and (min-width: 1300px) and (max-width: 1861px) {\n  .buscar > div {\n    width: 50%; } }\n"

/***/ }),

/***/ "./src/app/components/material-stock/material-stock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialStockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_consola_stock_consola_stock_service__ = __webpack_require__("./src/app/services/consola-stock/consola-stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_gestor_producto_reclamo_producto_reclamo_service__ = __webpack_require__("./src/app/services/gestor-producto-reclamo/producto-reclamo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MaterialStockComponent = /** @class */ (function () {
    function MaterialStockComponent(serviceStock, core, comunService, _serviceReclamo) {
        this.serviceStock = serviceStock;
        this.core = core;
        this.comunService = comunService;
        this._serviceReclamo = _serviceReclamo;
        this.listaTipos = [];
        this.selectItem = 0;
        this.lista = [];
        this.listas = [];
        this.listaUniverso = [];
        this.marcas = [];
        this.control = [{ nombre: 'Todos', key: 0 },
            { nombre: 'Normal', key: 1 },
            { nombre: 'Origen', key: 2 },
            { nombre: 'Mundiales', key: 3 },
            { nombre: 'Nacionales', key: 4 }];
        this.tipoManejo = [{ nombre: 'Todos', key: 0 },
            { nombre: 'Ambiente', key: 1 },
            { nombre: 'Refrigeración', key: 2 },
            { nombre: 'Congelación', key: 3 }];
        this.listaFiltros = [];
    }
    MaterialStockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roles = __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getRoles();
        this.usuario = __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'stock') {
                _this.llenarDatos();
            }
        });
        this.llenarDatos();
    };
    MaterialStockComponent.prototype.llenarDatos = function () {
        this.filtroMarca = '';
        this.filtroControl = '';
        this.filtroManejo = '';
        this.marcas = [];
        this.listaTipos = [];
        this.activeMarca = false;
        this.notificado = false;
        this.classAsideMenu = 'asideNormalMenu';
        this.partHabilidatas = true;
        this.obtenerListado();
    };
    MaterialStockComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    MaterialStockComponent.prototype.obtenerListado = function () {
        var _this = this;
        this.activar = false;
        this.obtenerTotales();
        this.activeBotonera = false;
        this.core.openModal(1);
        this.serviceStock.obtenerListado().subscribe(function (data) {
            _this.listas = data.current;
            _this.listaUniverso = data.current.TODAS;
            _this.lista = data.current.TODAS;
            var array = Object.getOwnPropertyNames(data.current);
            var title;
            _this.listaTipos.push({ nombre: 'TODAS', total: data.current.TODAS.length, etiquetaTotal: 'PIEZAS', pos: 0 });
            for (var i = 0; i < array.length; i++) {
                if (_this.listas[array[i]].length > 1) {
                    title = 'PIEZAS';
                }
                else {
                    title = 'PIEZA';
                }
                if (array[i] !== 'TODAS' && array[i] !== 'MARCAS') {
                    _this.listaTipos.push({ nombre: array[i], total: _this.listas[array[i]].length, etiquetaTotal: title, pos: i + 1 });
                }
            }
            _this.activeBotonera = true;
            var marca = data.current.MARCAS;
            _this.marcas.push({ nombre: 'Todos', key: 0 });
            for (var i = 0; i < marca.length; i++) {
                _this.marcas.push({ nombre: marca[i].fabrica, key: i + 1 });
            }
            _this.activeMarca = true;
            _this.core.closeModal(1);
        }, function (error) {
            _this.core.closeModal(1);
        });
    };
    MaterialStockComponent.prototype.obtenerTotales = function () {
        for (var i = 0; i < this.roles.length; i++) {
            if (this.roles[i] === 'Comprador_Master') {
                this.rolMaster = true;
            }
        }
        if (this.rolMaster) {
            this.obtenerValoresMenu(this.usuario);
        }
        else {
            this.itemsMenu = [{ rol: 'GESTOR DE OPERACIONES', active: true,
                    menu: [{ nombre: 'Consola de Prioridades', url: 'consolaPrioridades', select: false },
                        { nombre: 'Consola de Envíos', url: 'consolaEnvio', select: false },
                        { nombre: 'Material en Stock', url: 'stock', select: true },
                        { nombre: 'Material en Destrucción', url: 'consolaDest', select: false }
                    ] }];
            this.activar = true;
        }
    };
    MaterialStockComponent.prototype.obtenerValoresMenu = function (idUsuario) {
        var _this = this;
        this.core.openModal(1);
        this._serviceReclamo.obtenerTotales(idUsuario).subscribe(function (data) {
            console.log(data);
            _this.itemsMenu = [
                { rol: 'GESTOR DE COMPRAS', active: false, menu: [
                        { nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', select: false, tipo: 'valor', valor: data.current.ArriboDocumentos },
                        { nombre: 'Producto a Reclamo', url: 'productoReclamo', tipo: 'valor', valor: data.current.ProductoReclamo, select: false },
                        {
                            nombre: 'Cargar Saldo a Favor',
                            tipo: '',
                            valor: 0,
                            url: 'poolVisitas',
                            disable: true,
                            subMenu: [
                                { nombre: 'Nota de Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: false },
                                { nombre: 'Saldo a Favor', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: false }
                            ],
                            select: false
                        }
                    ] },
                { rol: 'GESTOR DE OPERACIONES', active: true,
                    menu: [{ nombre: 'Consola de Prioridades', url: 'consolaPrioridades', select: false, tipo: 'flecha' },
                        { nombre: 'Consola de Envíos', url: 'consolaEnvio', select: false },
                        { nombre: 'Material en Stock', url: 'stock', select: true },
                        { nombre: 'Material en Destrucción', url: 'consolaDest', select: false }] }
            ];
            _this.activar = true;
            _this.core.closeModal(1);
        }, function (error) {
            _this.core.closeModal(1);
        });
    };
    MaterialStockComponent.prototype.seleccionarLista = function (tipo) {
        this.selectItem = tipo.pos;
        this.estadoBotonera = tipo.nombre;
        this.lista = this.listas[tipo.nombre];
        this.listaUniverso = this.listas[tipo.nombre];
        var obj;
        if (this.filtroControl !== '') {
            obj = { nombre: this.filtroControl };
            this.filtrar(obj, 'Control');
        }
        else if (this.filtroMarca !== '') {
            obj = { nombre: this.filtroMarca };
            this.filtrar(obj, 'Marca');
        }
        else if (this.filtroManejo !== '') {
            obj = { nombre: this.filtroManejo };
            this.filtrar(obj, 'Manejo');
        }
        this.searchTerm = '';
    };
    MaterialStockComponent.prototype.buscar = function (search) {
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search === '') {
            if (this.filtroManejo !== '' || this.filtroMarca !== '' || this.filtroControl !== '') {
                this.lista = this.listaFiltros.slice();
            }
            else {
                this.lista = this.listaUniverso.slice();
            }
        }
        else {
            if (this.filtroManejo !== '' || this.filtroMarca !== '' || this.filtroControl !== '') {
                if (this.listaFiltros.length > 0) {
                    for (var i = 0; i < this.listaFiltros.length; i++) {
                        if (this.listaFiltros[i].codigo.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || this.listaFiltros[i].descripcion.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                            searchArrayAux.push(this.listaFiltros[i]);
                        }
                    }
                }
            }
            else {
                for (var i = 0; i < this.listaUniverso.length; i++) {
                    if (this.listaUniverso[i].codigo.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1 || this.listaUniverso[i].descripcion.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
                        searchArrayAux.push(this.listaUniverso[i]);
                    }
                }
            }
            this.lista = searchArrayAux;
        }
    };
    MaterialStockComponent.prototype.filtrar = function (valores, tipo) {
        var _this = this;
        var lista;
        var listaAux;
        if (valores.nombre !== 'Todos') {
            if (tipo === 'Marca') {
                lista = this.listaUniverso.filter(function (item) { return item.fabrica.toLowerCase() === valores.nombre.toLowerCase(); });
                if (this.filtroControl !== '' && lista.length > 0) {
                    listaAux = lista.slice();
                    lista = listaAux.filter(function (item) { return item.control.toLowerCase() === _this.filtroControl.toLowerCase(); });
                }
                if (this.filtroManejo !== '' && lista.length > 0) {
                    listaAux = lista.slice();
                    lista = listaAux.filter(function (item) { return item.manejoTransporte.toLowerCase() === _this.filtroManejo.toLowerCase(); });
                }
                this.filtroMarca = valores.nombre;
            }
            else if (tipo === 'Control') {
                lista = this.listaUniverso.filter(function (item) { return item.control.toLowerCase() === valores.nombre.toLowerCase(); });
                if (this.filtroMarca !== '' && lista.length > 0) {
                    listaAux = lista.slice();
                    lista = listaAux.filter(function (item) { return item.fabrica.toLowerCase() === _this.filtroMarca.toLowerCase(); });
                }
                if (this.filtroManejo !== '' && lista.length > 0) {
                    listaAux = lista.slice();
                    console.log(listaAux.filter(function (item) { return item.manejoTransporte.toLowerCase() === _this.filtroManejo.toLowerCase(); }));
                    lista = listaAux.filter(function (item) { return item.manejoTransporte.toLowerCase() === _this.filtroManejo.toLowerCase(); });
                }
                this.filtroControl = valores.nombre;
            }
            else if (tipo === 'Manejo') {
                lista = this.listaUniverso.filter(function (item) { return item.manejoTransporte.toLowerCase() === valores.nombre.toLowerCase(); });
                this.filtroManejo = valores.nombre;
                if (this.filtroMarca !== '' && lista.length > 0) {
                    listaAux = lista.slice();
                    lista = listaAux.filter(function (item) { return item.fabrica.toLowerCase() === _this.filtroMarca.toLowerCase(); });
                }
                if (this.filtroControl !== '' && lista.length > 0) {
                    listaAux = lista.slice();
                    lista = listaAux.filter(function (item) { return item.control.toLowerCase() === _this.filtroControl.toLowerCase(); });
                }
            }
        }
        else {
            if (tipo === 'Marca') {
                this.filtroMarca = '';
            }
            else if (tipo === 'Manejo') {
                this.filtroManejo = '';
            }
            else if (tipo === 'Control') {
                this.filtroControl = '';
            }
            lista = this.listaUniverso.slice();
            if (this.filtroControl !== '') {
                listaAux = lista.slice();
                lista = listaAux.filter(function (item) { return item.control.toLowerCase() === _this.filtroControl.toLowerCase(); });
            }
            if (this.filtroManejo !== '' && lista.length > 0) {
                listaAux = lista.slice();
                lista = listaAux.filter(function (item) { return item.manejoTransporte.toLowerCase() === _this.filtroManejo.toLowerCase(); });
            }
            if (this.filtroMarca !== '' && lista.length > 0) {
                listaAux = lista.slice();
                lista = listaAux.filter(function (item) { return item.fabrica.toLowerCase() === _this.filtroMarca.toLowerCase(); });
            }
        }
        this.lista = lista;
        this.searchTerm = '';
        this.listaFiltros = lista.slice();
    };
    MaterialStockComponent.prototype.eliminarStock = function (item) {
        this.itemStock = item;
        this.notificado = true;
    };
    MaterialStockComponent.prototype.cerrarPop = function (datas) {
        var _this = this;
        if (datas.valor) {
            var obj = {
                descripcion: datas.reason,
                idProducto: datas.item.idProducto,
                piezas: datas.item.piezas,
                idPCompra: datas.item.idPCompra
            };
            this.core.openModal(1);
            this.serviceStock.eliminarStock(obj).subscribe(function (data) {
                if (data.current) {
                    _this.searchTerm = '';
                    _this.llenarDatos();
                }
                _this.core.closeModal(1);
            }, function (error) {
                _this.core.closeModal(1);
            });
        }
        this.notificado = false;
    };
    MaterialStockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-material-stock',
            template: __webpack_require__("./src/app/components/material-stock/material-stock.component.html"),
            styles: [__webpack_require__("./src/app/components/material-stock/material-stock.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_consola_stock_consola_stock_service__["a" /* ConsolaStockService */], __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_4__services_gestor_producto_reclamo_producto_reclamo_service__["a" /* ProductoReclamoService */]])
    ], MaterialStockComponent);
    return MaterialStockComponent;
}());



/***/ }),

/***/ "./src/app/components/material-stock/material-stock.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialStockModule", function() { return MaterialStockModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_stock_component__ = __webpack_require__("./src/app/components/material-stock/material-stock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_stock_routing_module__ = __webpack_require__("./src/app/components/material-stock/material-stock-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_botonera_botonera_module__ = __webpack_require__("./src/app/components/shared/botonera/botonera.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_drop_list_search_drop_list_search_module__ = __webpack_require__("./src/app/components/shared/drop-list-search/drop-list-search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_combo_flecha_rellena_combo_flecha_rellena_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-rellena/combo-flecha-rellena.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pop_up_notificado_desvincular_pop_up_notificado_desvincular_component__ = __webpack_require__("./src/app/components/material-stock/pop-up-notificado-desvincular/pop-up-notificado-desvincular.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var MaterialStockModule = /** @class */ (function () {
    function MaterialStockModule() {
    }
    MaterialStockModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__material_stock_routing_module__["a" /* MaterialStockRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_botonera_botonera_module__["a" /* BotoneraModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_drop_list_search_drop_list_search_module__["a" /* DropListSearchModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_combo_flecha_rellena_combo_flecha_rellena_module__["a" /* ComboFlechaRellenaModule */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_accounting_accounting_module__["a" /* PipeModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__material_stock_component__["a" /* MaterialStockComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__material_stock_component__["a" /* MaterialStockComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pop_up_notificado_desvincular_pop_up_notificado_desvincular_component__["a" /* PopUpNotificadoDesvincularComponent */]
            ]
        })
    ], MaterialStockModule);
    return MaterialStockModule;
}());



/***/ }),

/***/ "./src/app/components/material-stock/pop-up-notificado-desvincular/pop-up-notificado-desvincular.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container\">\n\n  <div id=\"id01\" class=\"modal\" #pop>\n    <div class=\"modal-content\">\n      <header class=\"header\">\n        <h1> PROQUIFA NET  </h1>\n      </header>\n\n      <div class=\"contenido\">\n        <div class=\"datos\">\n          <div class=\"alertaTxt\">\n            <span>¿Deseas desvincular del stock</span>\n            <label> el producto con # de Cat. {{itemStock.codigo}}?</label>\n          </div>\n          <div class=\"combos\">\n            <label>Justificación</label>\n            <pn-combo-flecha-rellena class=\"combo\" [title]=\"'Seleccionar'\" [valImg]=\"'flechaRellena'\" [items]=\"justificacion\" [subtitleActive]=\"false\" (valueDropList)=\"receiveJust($event)\"></pn-combo-flecha-rellena>\n          </div>\n        </div>\n\n      </div>\n\n      <footer class=\"footer2\" *ngIf=\"activarBoton\">\n        <a type=\"submit\" class=\"btnOk\" (click)=\"cerrar(false)\" >\n          <label> CANCELAR </label>\n        </a>\n        <a type=\"submit\" class=\"btnOk\" (click)=\"cerrar(true)\" [style.background]=\"active? '#008894': '#C2C3C9'\" [style.pointerEvents]=\"active?'auto':'none'\">\n          <label> ACEPTAR </label>\n        </a>\n      </footer>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/material-stock/pop-up-notificado-desvincular/pop-up-notificado-desvincular.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal {\n  z-index: 11;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(238, 238, 238, 0.8);\n  font-family: 'Roboto', sans-serif; }\n\n.modal-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  margin: auto;\n  text-align: center;\n  background-color: white;\n  position: relative;\n  padding: 0;\n  outline: 0;\n  width: 618px;\n  height: 357px;\n  color: #424242;\n  border-radius: 25px;\n  font-family: 'Roboto';\n  font-size: 20px;\n  border: 1px solid #008A98; }\n\n.header {\n  -webkit-box-ordinal-group: 1;\n  -ms-flex-order: 0;\n      order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  height: 52px;\n  background-color: #008894;\n  border-radius: 24px 24px 0px 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap; }\n\n.header h1 {\n    top: 20px;\n    color: white;\n    font-size: 25px;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    font-weight: bold; }\n\n.contenido {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  width: 100%;\n  height: 50%;\n  padding-left: 4%;\n  padding-right: 3%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: #424242;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 40px; }\n\n.footer2 {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  height: 20%;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px 20px 0 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.btnOk {\n  width: 170px;\n  height: 30px;\n  background-color: #008A98;\n  border-color: #008A98;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer; }\n\n.btnOk > label {\n    font-family: 'Roboto';\n    font-size: 21px;\n    font-weight: bold;\n    color: white;\n    padding-top: 1.8%;\n    cursor: pointer; }\n\n.datos {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.alerta {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto; }\n\n.alerta img.alert {\n    width: 100%;\n    height: 100%; }\n\n.alertaTxt {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  line-height: 1.5;\n  height: 131px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%; }\n\n.alertaTxt > span {\n    font-family: Roboto;\n    font-weight: bold;\n    font-size: 29px;\n    color: #008894;\n    text-align: center; }\n\n.alertaTxt > label {\n    font-family: Roboto;\n    font-weight: 400;\n    font-size: 29px;\n    color: #424242; }\n\n.combos {\n  height: 67px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n\n.combos > label {\n    font-family: Roboto;\n    font-weight: 400;\n    font-size: 16px;\n    color: #424242;\n    padding-top: 6px; }\n\n.combo {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding-left: 10px;\n  width: 450px; }\n"

/***/ }),

/***/ "./src/app/components/material-stock/pop-up-notificado-desvincular/pop-up-notificado-desvincular.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpNotificadoDesvincularComponent; });
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

var PopUpNotificadoDesvincularComponent = /** @class */ (function () {
    function PopUpNotificadoDesvincularComponent() {
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.justificacion = [{ nombre: 'Actualización por inventario físico', key: 0 },
            { nombre: 'Caducidad', key: 1 },
            { nombre: 'Merma', key: 2 },
            { nombre: 'Rechazo', key: 3 }];
    }
    PopUpNotificadoDesvincularComponent.prototype.ngOnInit = function () {
        this.activarBoton = true;
    };
    PopUpNotificadoDesvincularComponent.prototype.cerrar = function ($event) {
        var obj = {
            valor: $event,
            item: this.itemStock,
            reason: this.reason
        };
        this.event.emit(obj);
    };
    PopUpNotificadoDesvincularComponent.prototype.receiveJust = function (event) {
        if (event !== null && event !== 'Seleccionar') {
            this.reason = event.nombre;
            this.active = true;
        }
        else {
            this.active = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PopUpNotificadoDesvincularComponent.prototype, "itemStock", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpNotificadoDesvincularComponent.prototype, "event", void 0);
    PopUpNotificadoDesvincularComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-notificado-desvincular',
            template: __webpack_require__("./src/app/components/material-stock/pop-up-notificado-desvincular/pop-up-notificado-desvincular.component.html"),
            styles: [__webpack_require__("./src/app/components/material-stock/pop-up-notificado-desvincular/pop-up-notificado-desvincular.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpNotificadoDesvincularComponent);
    return PopUpNotificadoDesvincularComponent;
}());



/***/ })

});
//# sourceMappingURL=material-stock.module.chunk.js.map