webpackJsonp(["consola-productos-destruccion.module"],{

/***/ "./src/app/components/consola-productos-destruccion/consola-productos-destruccion-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsolaProductosDestruccionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consola_productos_destruccion_component__ = __webpack_require__("./src/app/components/consola-productos-destruccion/consola-productos-destruccion.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConsolaProductosDestruccionRoutingModule = /** @class */ (function () {
    function ConsolaProductosDestruccionRoutingModule() {
    }
    ConsolaProductosDestruccionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__consola_productos_destruccion_component__["a" /* ConsolaProductosDestruccionComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ConsolaProductosDestruccionRoutingModule);
    return ConsolaProductosDestruccionRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/consola-productos-destruccion/consola-productos-destruccion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\n  <!--Seccion de menu-->\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\n    <aside [ngClass]=\"classAsideMenu\">\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\n        <pn-menu-seccion-roles [items]=\"itemsMenu\"   [titulo]=\"'RESPONSABLE DE SURTIDO'\" style=\"width: 100%;\" *ngIf=\"activar\"></pn-menu-seccion-roles>\n      </div>\n    </aside>\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n    </div>\n  </div>\n  <div class=\"area\">\n    <!--Empieza la cabezera-->\n    <div class=\"cabezera\">\n      <div>\n        <label class=\"etiqueta\">MATERIAL EN DESTRUCCIÓN</label>\n      </div>\n    </div>\n    <!--Empiezan los componentes-->\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 122px)'}\">\n      <div class=\"areaPrincipal\" *ngIf=\"dispobliesParts\">\n        <div class=\"areaInformativa\">\n          <label>MATERIALES</label>\n        </div>\n        <div class=\"informacionLista\">\n          <div class=\"filtros\">\n            <div class=\"filtering\">\n              <div>\n                <label>Marcas</label>\n                <pn-drop-list-search [title]=\"'Seleccionar'\" [valImg]=\"'flechaRellena'\" [items]=\"marcas\" *ngIf=\"activeMarca\" [subtitleActive]=\"false\" (valueDropList)=\"filtrar($event, 'Marca')\" style=\"display: flex;align-items: center\"></pn-drop-list-search>\n              </div>\n              <div>\n                <label>Control</label>\n                <pn-combo-flecha-rellena [title]=\"'Seleccionar'\" [valImg]=\"'flechaRellena'\" [items]=\"control\" [subtitleActive]=\"false\" (valueDropList)=\"filtrar($event, 'Control')\"></pn-combo-flecha-rellena>\n              </div>\n              <div>\n                <label>Manejo</label>\n                <pn-combo-flecha-rellena [title]=\"'Seleccionar'\" [valImg]=\"'flechaRellena'\" [items]=\"tipoManejo\" [subtitleActive]=\"false\"  (valueDropList)=\"filtrar($event, 'Manejo')\"></pn-combo-flecha-rellena>\n              </div>\n            </div>\n            <div class=\"barraBusqueda\">\n              <div class=\"buscar\">\n                <div>\n                  <div class=\"lupa\">\n                    <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\n                  </div>\n                  <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Descripción, Catálogo\" />\n                  <div class=\"lupa\" (click)=\"buscar('')\" style=\"cursor: pointer;\">\n                    <img src=\"assets/Images/cerrar.svg\"  height=\"12px\" alt=\"buscar\">\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"contentList\">\n            <div class=\"vistaLista\">\n              <header>\n                <div class=\"imagenesDiv\">\n                  <pq-check-gris-palomita-verde style=\"width:25px;height:25px;\" [check]=\"activeCheck\" (event)=\"completeSelected($event)\"></pq-check-gris-palomita-verde>\n                </div>\n                <div class=\"imagenesDiv\" style=\"min-width: 29px;max-width: 29px\">\n                </div>\n                <div  class=\"imagenesDiv\" style=\"max-width: 27px\">\n                  <label>#</label>\n                </div>\n                <div>\n                  <label>Marca</label>\n                </div>\n                <div>\n                  <label>Catálogo</label>\n                </div>\n                <div style=\"width: 18%\">\n                  <label>Descripción</label>\n                </div>\n                <div>\n                  <label>Justificacion</label>\n                </div>\n                <div>\n                  <label>Control</label>\n                </div>\n                <div style=\"width: 8%\">\n                  <label>Tipo</label>\n                </div>\n                <div>\n                  <label style=\"text-align: center;\">Etiqueta</label>\n                </div>\n                <div>\n                  <label style=\"text-align: center;\">Lote</label>\n                </div>\n                <div>\n                  <label style=\"text-align: center;\">P.U</label>\n                </div>\n              </header>\n              <div style=\"height: 91%;width: 100%;overflow: auto;\">\n                <div class= \"lista\" style=\"display: unset;flex-direction: column\">\n                  <div  *ngFor=\"let item of lista; let i = index\" style=\"display: flex;flex-direction:column;width: 100%;position: relative;\">\n                    <div [ngClass]=\"item.activePart? 'divActive': 'div'\">\n                      <div class=\"dfSelect\"></div>\n                      <div class=\"datosLst\">\n                        <div class=\"imagenesDiv\">\n                          <pq-check-gris-palomita-verde style=\"width:25px;height:25px;\" [check]=\"item.active\" (event)=\"selectedItem($event, item)\"></pq-check-gris-palomita-verde>\n                        </div>\n                        <div class=\"imagenesDiv\" style=\"max-width: 29px;min-width: 29px\">\n                          <img class=\"imgEstado\" src=\"./assets/Images/congelacion.svg\" *ngIf=\"item.manejoTransporte.toLowerCase() === 'congelación'\">\n                          <img class=\"imgEstado\" src=\"./assets/Images/refrigeracion.svg\" *ngIf=\"item.manejoTransporte.toLowerCase() === 'refrigeración'\">\n                          <img clas=\"imgEstado\" src=\"./assets/Images/ambiente.svg\" *ngIf=\"item.manejoTransporte.toLowerCase() === 'ambiente'\">\n                        </div>\n                        <div class=\"imagenesDiv\" style=\"max-width: 27px\">\n                          <span>{{i + 1}}</span>\n                        </div>\n                        <div>\n                          <label>{{item.fabrica}}</label>\n                        </div>\n                        <div>\n                          <span>{{item.codigo}}</span>\n                        </div>\n                        <div style=\"width: 18%\">\n                          <label>{{item.descripcion}}</label>\n                        </div>\n                        <div>\n                          <span>{{item.contacto}}</span>\n                        </div>\n                        <div>\n                          <label>{{item.control}}</label>\n                        </div>\n                        <div style=\"width: 8%\">\n                          <span>{{item.tipo}}</span>\n                        </div>\n                        <div>\n                          <label>{{item.etiqueta}}</label>\n                        </div>\n                        <div>\n                          <span>{{item.puesto}}</span>\n                        </div>\n                        <div>\n                          <span *ngIf=\"item.ruta === 'Dolares'\">{{item.monto | currency: 'USD'}} USD</span>\n                          <span *ngIf=\"item.ruta === 'Pesos'\">{{item.monto | acFormatMoney}} MXN</span>\n                          <span *ngIf=\"item.ruta === 'Libras'\">{{item.monto | acFormatMoney}} lbs</span>\n                          <span *ngIf=\"item.ruta === 'Euros'\">{{item.monto | currency: '€'}} EUR</span>\n                          <span *ngIf=\"item.ruta === 'DlCan'\">{{item.monto | acFormatMoney}} CAD</span>\n                        </div>\n                      </div>\n                    </div>\n                    <!--Termina Lista partidas-->\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"scoredPieces\">\n              <div>\n                <label># {{lista.length}} Piezas</label>\n              </div>\n              <div>\n                <div class=\"dvBoton\" (click)=\"enviarDestruccion()\" [style.background]=\"listaEnviar.length > 0 ? '#008894':'#C2C3C9'\" [style.pointerEvents]=\"listaEnviar.length > 0?'auto':'none'\">\n                  <label>ENVIAR A DESTRUCCIÓN</label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"sinDatos\" *ngIf=\"!dispobliesParts\">\n        <label>SIN PARTIDAS DISPONIBLES</label>\n      </div>\n    </div>\n    <!--Terminan los componentes-->\n    <footer class=\"footer\">\n      <div class=\"datosFooter\">\n        <div class=\"Prioridad1\">\n          <img class=\"img\" src='./assets/Images/congelacion.svg' />\n          <span>Congelación</span>\n        </div>\n        <div class=\"Prioridad1\">\n          <img class=\"img\" src='./assets/Images/refrigeracion.svg' />\n          <span>Refrigeración</span>\n        </div>\n        <div class=\"Prioridad1\">\n          <img class=\"img\" src='./assets/Images/ambiente.svg' />\n          <span>Ambiente</span>\n        </div>\n        <div class=\"Prioridad1\">\n          <label class=\"p1\">PU: </label> Precio Unitario\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n<pn-pop-up-destruccioon (emitDatas)=\"cerrarPop($event)\" *ngIf=\"activePop\" [lista]=\"listaEnviar\"></pn-pop-up-destruccioon>\n"

/***/ }),

/***/ "./src/app/components/consola-productos-destruccion/consola-productos-destruccion.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n.padre {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n.alertProgramados {\n  width: 13% !important;\n  -webkit-box-pack: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important;\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: row !important;\n          flex-direction: row !important;\n  -webkit-box-align: initial !important;\n      -ms-flex-align: initial !important;\n          align-items: initial !important; }\n.imgAlert {\n  padding-right: 5px; }\n.aux .asideNormalMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  min-width: 181px;\n  width: 321px;\n  height: 100%;\n  overflow-y: scroll; }\n.aux .asideNormalMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%; }\n.aux > .asideOcultarMenu {\n  -webkit-animation-name: ocultarMenu;\n          animation-name: ocultarMenu;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-transition: 1s ease-in-out;\n  transition: 1s ease-in-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 0px;\n  width: 0px; }\n.aux > .asideOcultarMenu > .articulo {\n    width: 0px; }\n.aux > .asideMostrarMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  -webkit-animation-name: mostrarMenu;\n          animation-name: mostrarMenu;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-y: scroll; }\n.aux > .asideMostrarMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%; }\n@-webkit-keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@-webkit-keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n@keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n.area {\n  width: 100%;\n  height: 100%;\n  overflow: auto; }\n.vistaLista {\n  height: calc(100% - 70px);\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 10px; }\n.cabezera {\n  width: 100%;\n  height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 13px;\n  padding-right: 13px;\n  border-bottom: 2px solid black;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n.cabezera > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.cabezera > div > .etiqueta {\n      color: #5B5B5B;\n      font-size: 25px;\n      font-family: Novecento;\n      margin-bottom: 5px;\n      font-weight: normal; }\n.areaPrincipal {\n  min-width: 1175px;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 20px 20px 0px 20px; }\n.informacionLista {\n  width: 100%;\n  height: calc(100% - 60px); }\n.informacionLista > .filtros {\n    height: 10%;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n.informacionLista > .filtros > div {\n      width: 50%;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n.areaInformativa {\n  height: 60px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n.areaInformativa > label {\n    font-family: Novecento;\n    font-weight: bold;\n    font-size: 24px;\n    color: #424242; }\n.footer {\n  overflow: auto;\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 57px;\n  max-height: 57px;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: inherit;\n      -ms-flex-align: inherit;\n          align-items: inherit;\n  border-top: 2px solid black;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  font-size: 14px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.footer > .datosFooter {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -ms-flex-item-align: auto;\n        align-self: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -ms-flex-line-pack: distribute;\n        align-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 14px; }\n.footer > .datosFooter > .Prioridad1 {\n      -webkit-box-ordinal-group: 1;\n          -ms-flex-order: 0;\n              order: 0;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 1 auto;\n              flex: 0 1 auto;\n      -ms-flex-item-align: center;\n          align-self: center;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-left: 0.7%;\n      margin-right: 0.7%; }\n.footer > .datosFooter > .Prioridad1 > .p1 {\n        color: #424242;\n        font-weight: bold;\n        margin-right: 6px;\n        font-size: 14px; }\n.footer > .datosFooter > .Prioridad1 > .img {\n        margin-right: 6px; }\n.buscar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  height: 50px;\n  width: 100%;\n  border-style: solid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.buscar div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 70%;\n    border-radius: 102px 102px 102px 102px;\n    -moz-border-radius: 102px 102px 102px 102px;\n    -webkit-border-radius: 102px 102px 102px 102px;\n    border: 0.5px solid #BFC0C7;\n    height: 26px; }\n.buscar div div {\n      border: none;\n      border-radius: 0px 0px 0px 0px;\n      -moz-border-radius: 0px 0px 0px 0px;\n      -webkit-border-radius: 0px 0px 0px 0px;\n      border: 0px solid #000000;\n      width: 40px;\n      background: transparent;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n.buscar div .buscar-input {\n      background: transparent;\n      border-radius: 100px;\n      -moz-border-radius: 102px 102px 102px 102px;\n      border: 0px solid #000000;\n      width: 100%;\n      font-family: Helvetica;\n      font-size: 18px;\n      color: #AAA9AF;\n      outline: none;\n      padding-left: 5px; }\n.barraBusqueda {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 40% !important; }\n.imagenesDiv {\n  min-width: 25px;\n  max-width: 25px;\n  width: initial !important; }\nheader {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 9%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid #242424;\n  padding-right: 10px;\n  padding-left: 10px; }\nheader > div {\n    width: 10%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 100%; }\nheader > div > label {\n      font-family: Roboto;\n      font-weight: bold;\n      font-size: 15px;\n      color: #424242;\n      text-align: left; }\n.lista {\n  width: 100%;\n  font-size: 20px;\n  padding: 15px 19px 14px 13px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  line-height: 1.3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto; }\n.lista div > .div {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    border-bottom: 1px solid #ECEEF0; }\n.lista div > .div .datosLst:hover {\n      background-color: #ECEEF0; }\n.lista div > .div .datosLst {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n      -ms-flex-item-align: auto;\n          align-self: auto;\n      padding: 5px 10px 5px 10px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n.lista div > .div .datosLst > div {\n        width: 10%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        padding-right: 5px;\n        padding-left: 5px; }\n.lista div > .div .datosLst > div > label {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 16px;\n          color: #424242;\n          text-align: center; }\n.lista div > .div .datosLst > div > span {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 16px;\n          color: #008894;\n          text-align: center; }\n.lista div > .divActual {\n    background-color: #ECEEF0;\n    -webkit-box-shadow: 0 2px 4px -3px #008895;\n            box-shadow: 0 2px 4px -3px #008895; }\n.lista div > .divActive {\n    border-bottom: 1px solid #ECEEF0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background-color: #ECEEF0;\n    width: 100%; }\n.lista div > .divActive .dfSelect {\n      background: #008895 !important;\n      width: 5px !important;\n      color: #008895; }\n.lista div > .divActive > .datosLst {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n      -ms-flex-item-align: auto;\n          align-self: auto;\n      padding: 5px 10px 5px 5px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n.lista div > .divActive > .datosLst > div {\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        padding-right: 5px;\n        padding-left: 5px;\n        width: 10%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n.lista div > .divActive > .datosLst > div > label {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 16px;\n          color: #424242;\n          text-align: center; }\n.lista div > .divActive > .datosLst > div > span {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 16px;\n          color: #008894;\n          text-align: center; }\n.scoredPieces {\n  width: 100%;\n  height: 69px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-top: 1px solid;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n.scoredPieces > div {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n.scoredPieces > div > label {\n      font-family: Roboto;\n      font-weight: 400;\n      font-size: 14px;\n      color: #424242; }\n.scoredPieces > div > .dvBoton {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      width: 305px;\n      height: 31px;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      background: #008894;\n      cursor: pointer; }\n.scoredPieces > div > .dvBoton > label {\n        font-family: Novecento;\n        font-weight: bold;\n        font-size: 20px;\n        color: #FFFFFF;\n        text-align: left;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin-bottom: 4px;\n        cursor: pointer; }\n.filtering {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-right: 30px; }\n.filtering > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-right: 10px;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.filtering > div > label {\n      font-family: Roboto;\n      font-weight: 400;\n      font-size: 16px;\n      color: #424242;\n      padding-right: 5px; }\n.sinDatos {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.sinDatos > label {\n    color: #D8D9DD;\n    font-family: Novecento;\n    font-weight: bold;\n    font-size: 50px;\n    text-align: center;\n    width: 100%; }\n.contentList {\n  width: 100%;\n  height: 90%; }\n/deep/ .list {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n@media all and (min-width: 1300px) and (max-width: 1861px) {\n  .buscar > div {\n    width: 50%; } }\n"

/***/ }),

/***/ "./src/app/components/consola-productos-destruccion/consola-productos-destruccion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsolaProductosDestruccionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_consola_destruccion_material_destruccion_service__ = __webpack_require__("./src/app/services/consola-destruccion/material-destruccion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_inspeccion_inspeccion_service__ = __webpack_require__("./src/app/services/inspeccion/inspeccion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_gestor_producto_reclamo_producto_reclamo_service__ = __webpack_require__("./src/app/services/gestor-producto-reclamo/producto-reclamo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConsolaProductosDestruccionComponent = /** @class */ (function () {
    function ConsolaProductosDestruccionComponent(_serviceConsole, core, _insp, comunService, _serviceReclamo) {
        this._serviceConsole = _serviceConsole;
        this.core = core;
        this._insp = _insp;
        this.comunService = comunService;
        this._serviceReclamo = _serviceReclamo;
        this.listaEnviar = [];
        this.control = [{ nombre: 'Todos', key: 0 },
            { nombre: 'Normal', key: 1 },
            { nombre: 'Origen', key: 2 },
            { nombre: 'Mundiales', key: 3 },
            { nombre: 'Nacionales', key: 4 }];
        this.tipoManejo = [{ nombre: 'Todos', key: 0 },
            { nombre: 'Ambiente', key: 1 },
            { nombre: 'Refrigeración', key: 2 },
            { nombre: 'Congelación', key: 3 }];
    }
    ConsolaProductosDestruccionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classAsideMenu = 'asideNormalMenu';
        this.roles = __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getRoles();
        this.usuario = __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'consolaDest') {
                _this.obtenerDatos();
            }
        });
        this.obtenerDatos();
    };
    ConsolaProductosDestruccionComponent.prototype.obtenerValoresMenu = function (idUsuario) {
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
                        { nombre: 'Material en Stock', url: 'stock', select: false },
                        { nombre: 'Material en Destrucción', url: 'consolaDest', select: true }] }
            ];
            _this.activar = true;
            _this.core.closeModal(1);
        }, function (error) {
            _this.core.closeModal(1);
        });
    };
    ConsolaProductosDestruccionComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    ConsolaProductosDestruccionComponent.prototype.obtenerDatos = function () {
        var _this = this;
        this.activeCheck = false;
        this.marcas = [];
        this.filtroMarca = '';
        this.filtroManejo = '';
        this.filtroControl = '';
        this.activeMarca = false;
        this.activar = false;
        this.obtenerTotales();
        this.core.openModal(1);
        this._serviceConsole.obtenerListado().subscribe(function (data) {
            if (data.current.Todas !== null && data.current.Todas.length > 0) {
                _this.lista = data.current.Todas;
                _this.listaUniverso = data.current.Todas;
                _this.dispobliesParts = true;
                var marcas = data.current.Marcas;
                _this.marcas.push({ nombre: 'Todos', key: 0 });
                for (var i = 0; i < marcas.length; i++) {
                    _this.marcas.push({ nombre: marcas[i].fabrica, key: i + 1 });
                }
                _this.activeMarca = true;
            }
            else {
                _this.dispobliesParts = false;
            }
            _this.core.closeModal(1);
        }, function (error) {
            _this.core.closeModal(1);
        });
    };
    ConsolaProductosDestruccionComponent.prototype.obtenerTotales = function () {
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
                        { nombre: 'Material en Stock', url: 'stock', select: false },
                        { nombre: 'Material en Destrucción', url: 'consolaDest', select: true }
                    ] }];
            this.activar = true;
        }
    };
    ConsolaProductosDestruccionComponent.prototype.buscar = function (search) {
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
    ConsolaProductosDestruccionComponent.prototype.filtrar = function (valores, tipo) {
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
    ConsolaProductosDestruccionComponent.prototype.enviarDestruccion = function () {
        this.activePop = true;
    };
    ConsolaProductosDestruccionComponent.prototype.cerrarPop = function (datas) {
        this.activePop = false;
        if (datas.valor) {
            this.cerrarPendiente(datas.archivo);
        }
    };
    ConsolaProductosDestruccionComponent.prototype.selectedItem = function (event, items) {
        items.active = event;
        this.validateCheck();
    };
    ConsolaProductosDestruccionComponent.prototype.validateCheck = function () {
        var lista = [];
        lista = this.lista.filter(function (item) { return item.active === true; });
        this.listaEnviar = lista.slice();
    };
    ConsolaProductosDestruccionComponent.prototype.cerrarPendiente = function (archivo) {
        var _this = this;
        this.core.openModal(1);
        this._serviceConsole.enviarDestruccion(this.listaEnviar).subscribe(function (data) {
            if (data.current !== null) {
                _this.enviarArchivo(archivo, data.current + '.pdf');
            }
            _this.core.closeModal(1);
        }, function (error) {
            _this.core.closeModal(1);
        });
    };
    ConsolaProductosDestruccionComponent.prototype.enviarArchivo = function (archivo, nameFile) {
        var _this = this;
        this.core.openModal(1);
        this._serviceConsole.uploadFile(archivo, nameFile, 'Productos_Destruccion', '1').subscribe(function (data) {
            _this.core.closeModal(1);
            _this.obtenerDatos();
        }, function (error) {
            _this.core.closeModal(1);
        });
    };
    ConsolaProductosDestruccionComponent.prototype.completeSelected = function (valor) {
        for (var i = 0; i < this.lista.length; i++) {
            this.lista[i].active = valor;
        }
        this.activeCheck = valor;
        this.validateCheck();
    };
    ConsolaProductosDestruccionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-consola-productos-destruccion',
            template: __webpack_require__("./src/app/components/consola-productos-destruccion/consola-productos-destruccion.component.html"),
            styles: [__webpack_require__("./src/app/components/consola-productos-destruccion/consola-productos-destruccion.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_consola_destruccion_material_destruccion_service__["a" /* MaterialDestruccionService */], __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__services_inspeccion_inspeccion_service__["a" /* InspeccionService */], __WEBPACK_IMPORTED_MODULE_4__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_6__services_gestor_producto_reclamo_producto_reclamo_service__["a" /* ProductoReclamoService */]])
    ], ConsolaProductosDestruccionComponent);
    return ConsolaProductosDestruccionComponent;
}());



/***/ }),

/***/ "./src/app/components/consola-productos-destruccion/consola-productos-destruccion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolaProductosDestruccionModule", function() { return ConsolaProductosDestruccionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__consola_productos_destruccion_component__ = __webpack_require__("./src/app/components/consola-productos-destruccion/consola-productos-destruccion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__consola_productos_destruccion_routing_module__ = __webpack_require__("./src/app/components/consola-productos-destruccion/consola-productos-destruccion-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_drop_list_search_drop_list_search_module__ = __webpack_require__("./src/app/components/shared/drop-list-search/drop-list-search.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_combo_flecha_rellena_combo_flecha_rellena_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-rellena/combo-flecha-rellena.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_check_gris_palomita_verde_check_gris_palomita_verde_module__ = __webpack_require__("./src/app/components/shared/check-gris-palomita-verde/check-gris-palomita-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pop_up_destruccioon_pop_up_destruccioon_component__ = __webpack_require__("./src/app/components/consola-productos-destruccion/pop-up-destruccioon/pop-up-destruccioon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_file_upload_file_upload_module__ = __webpack_require__("./src/app/components/shared/file-upload/file-upload.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ConsolaProductosDestruccionModule = /** @class */ (function () {
    function ConsolaProductosDestruccionModule() {
    }
    ConsolaProductosDestruccionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__consola_productos_destruccion_routing_module__["a" /* ConsolaProductosDestruccionRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_drop_list_search_drop_list_search_module__["a" /* DropListSearchModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_combo_flecha_rellena_combo_flecha_rellena_module__["a" /* ComboFlechaRellenaModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_check_gris_palomita_verde_check_gris_palomita_verde_module__["a" /* CheckGrisPalomitaVerdeModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_file_upload_file_upload_module__["a" /* FileUploadModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__consola_productos_destruccion_component__["a" /* ConsolaProductosDestruccionComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__consola_productos_destruccion_component__["a" /* ConsolaProductosDestruccionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pop_up_destruccioon_pop_up_destruccioon_component__["a" /* PopUpDestruccioonComponent */]
            ]
        })
    ], ConsolaProductosDestruccionModule);
    return ConsolaProductosDestruccionModule;
}());



/***/ }),

/***/ "./src/app/components/consola-productos-destruccion/pop-up-destruccioon/pop-up-destruccioon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-container\">\n\n  <div id=\"id01\" class=\"modal\" #pop>\n    <div class=\"modal-content\">\n      <header class=\"header\">\n        <h1> ENVIAR A DESTRUCCIÓN  </h1>\n      </header>\n      <div class=\"contenido\">\n        <div class=\"total\">\n          <div class=\"material\">\n            <label># MATERIALES</label>\n          </div>\n          <div class=\"piezas\">\n            <div style=\"height: 95%;width: 100%;overflow: auto;\">\n              <div class= \"lista\">\n                <div  *ngFor=\"let item of lista; let i = index\" style=\"display: flex;flex-direction:column;width: 100%;position: relative;\">\n                  <div [ngClass]=\"item.activePart? 'divActive': 'div'\">\n                    <div class=\"dfSelect\"></div>\n                    <div class=\"datosLst\">\n                      <label>#{{i +1}} {{item.fabrica}} · {{item.codigo}}\n                      <span style=\"font-weight: bold\"> · {{item.contacto}} ·\n                        <span style=\"font-weight: 400\"> {{item.descripcion}}</span>\n                      </span>\n                      </label>\n                    </div>\n                  </div>\n                  <!--Termina Lista partidas-->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"uploadDoc\">\n          <div>\n            <pq-file-upload class=\"centerFile\" (enviarDocumento)=\"recibirDoc($event)\"></pq-file-upload>\n          </div>\n        </div>\n      </div>\n      <footer class=\"footer2\" *ngIf=\"activarBoton\">\n        <a type=\"submit\" class=\"btnOk\" (click)=\"cerrar(false)\" >\n          <label> CANCELAR </label>\n        </a>\n        <a type=\"submit\" class=\"btnOk\" (click)=\"cerrar(true)\" [style.background]=\"activeBtn? '#008894': '#C2C3C9'\">\n          <label> ACEPTAR </label>\n        </a>\n      </footer>\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/consola-productos-destruccion/pop-up-destruccioon/pop-up-destruccioon.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal {\n  z-index: 11;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(238, 238, 238, 0.8);\n  font-family: 'Roboto', sans-serif; }\n\n.modal-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  margin: auto;\n  text-align: center;\n  background-color: white;\n  position: relative;\n  padding: 0;\n  outline: 0;\n  width: 795px;\n  height: 675px;\n  color: #424242;\n  border-radius: 25px;\n  font-family: 'Roboto';\n  font-size: 20px;\n  border: 1px solid #008A98; }\n\n.header {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  height: 52px;\n  background-color: #008894;\n  border-radius: 24px 24px 0px 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap; }\n\n.header h1 {\n    top: 20px;\n    color: white;\n    font-size: 25px;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    font-weight: bold; }\n\n.contenido {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  width: 100%;\n  height: 534px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  color: #424242; }\n\n.footer2 {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  height: 85px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-right: 20px;\n  padding-left: 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.btnOk {\n  width: 170px;\n  height: 30px;\n  background-color: #008A98;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer; }\n\n.btnOk > label {\n    font-family: 'Roboto';\n    font-size: 21px;\n    font-weight: bold;\n    color: white;\n    padding-top: 1.8%;\n    cursor: pointer; }\n\n.datos {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n      order: 1;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n      align-items: center;\n  height: 40%;\n  padding-bottom: 10%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.alerta {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto; }\n\n.alerta img.alert {\n    width: 100%;\n    height: 100%; }\n\n.alertaTxt {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 18px;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  align-self: auto; }\n\n.alertaTxt p {\n    font-family: 'Roboto';\n    font-size: 25px;\n    color: #424242;\n    padding-top: 25px; }\n\n.total {\n  height: 444px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-right: 20px;\n  padding-left: 20px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.total > .material {\n    width: 100%;\n    height: 65px;\n    border-bottom: 1px solid #242424;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.total > .material > label {\n      font-family: Novecento;\n      font-weight: bold;\n      font-size: 22px;\n      color: #008894; }\n\n.total > .piezas {\n    width: 100%;\n    height: 378px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-top: 10px;\n    padding-bottom: 10px; }\n\n.uploadDoc {\n  width: 100%;\n  height: 90px;\n  background-color: rgba(0, 136, 148, 0.05);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.uploadDoc > div {\n    width: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.lista {\n  width: 100%;\n  font-size: 20px;\n  padding: 15px 19px 14px 13px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  line-height: 1.3;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  display: unset;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.lista div > .div {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    border-bottom: 1px solid #ECEEF0; }\n\n.lista div > .div .datosLst {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n      -ms-flex-item-align: auto;\n          align-self: auto;\n      padding: 5px 10px 5px 10px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      width: 10%;\n      display: flex; }\n\n.lista div > .div .datosLst > label {\n        font-family: Roboto;\n        font-weight: bold;\n        font-size: 16px;\n        color: #008894; }\n\n.lista div > .div .datosLst > label > span {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 16px;\n          color: #424242; }\n\n.lista div > .divActual {\n    background-color: #ECEEF0;\n    -webkit-box-shadow: 0 2px 4px -3px #008895;\n            box-shadow: 0 2px 4px -3px #008895; }\n\n.lista div > .divActive {\n    border-bottom: 1px solid #ECEEF0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    background-color: #ECEEF0;\n    width: 100%; }\n\n.lista div > .divActive .dfSelect {\n      background: #008895 !important;\n      width: 5px !important;\n      color: #008895; }\n\n.lista div > .divActive > .datosLst {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n      -ms-flex-item-align: auto;\n          align-self: auto;\n      padding: 5px 10px 5px 5px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n\n.lista div > .divActive > .datosLst > div {\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        padding-right: 5px;\n        padding-left: 5px;\n        width: 10%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n\n.lista div > .divActive > .datosLst > div > label {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 16px;\n          color: #424242;\n          text-align: center; }\n\n.lista div > .divActive > .datosLst > div > span {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 16px;\n          color: #008894;\n          text-align: center; }\n\n.centerFile {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.sinDatos {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.sinDatos > label {\n    color: #D8D9DD;\n    font-family: Novecento;\n    font-weight: bold;\n    font-size: 50px;\n    text-align: center;\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/consola-productos-destruccion/pop-up-destruccioon/pop-up-destruccioon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpDestruccioonComponent; });
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

var PopUpDestruccioonComponent = /** @class */ (function () {
    function PopUpDestruccioonComponent() {
        this.emitDatas = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PopUpDestruccioonComponent.prototype.ngOnInit = function () {
        this.activarBoton = true;
    };
    PopUpDestruccioonComponent.prototype.cerrar = function (val) {
        var obj = {
            valor: val,
            archivo: this.archivo
        };
        this.emitDatas.emit(obj);
    };
    PopUpDestruccioonComponent.prototype.recibirDoc = function (archivo) {
        if (archivo !== undefined && archivo != null) {
            this.archivo = archivo;
            this.activeBtn = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpDestruccioonComponent.prototype, "emitDatas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], PopUpDestruccioonComponent.prototype, "lista", void 0);
    PopUpDestruccioonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-destruccioon',
            template: __webpack_require__("./src/app/components/consola-productos-destruccion/pop-up-destruccioon/pop-up-destruccioon.component.html"),
            styles: [__webpack_require__("./src/app/components/consola-productos-destruccion/pop-up-destruccioon/pop-up-destruccioon.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpDestruccioonComponent);
    return PopUpDestruccioonComponent;
}());



/***/ })

});
//# sourceMappingURL=consola-productos-destruccion.module.chunk.js.map