webpackJsonp(["detalles-cartera.module"],{

/***/ "./src/app/components/catalogo/detalles-cartera/detalles-cartera-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallesCarteraRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalles_cartera_component__ = __webpack_require__("./src/app/components/catalogo/detalles-cartera/detalles-cartera.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetallesCarteraRoutingModule = /** @class */ (function () {
    function DetallesCarteraRoutingModule() {
    }
    DetallesCarteraRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__detalles_cartera_component__["a" /* DetallesCarteraComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], DetallesCarteraRoutingModule);
    return DetallesCarteraRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/catalogo/detalles-cartera/detalles-cartera.component.html":
/***/ (function(module, exports) {

module.exports = "<pn-header-bc [opciones]=\"linksCarteras\" [homePath]=\"homePath\"></pn-header-bc>\n<div class=\"header\">\n  <div class=\"cartera-info-basica\">\n    <p class=\"bold\">{{cartera.nombreCartera}}</p>\n    <p>{{cartera.folio}}</p>\n    <p>{{cartera.categoria}} · {{cartera.nivelIngreso}}</p>\n  </div>\n  <div class=\"vertical-line\"></div>\n  <div class=\"periodo-facturacion\">\n    <div class=\"datos-cont\">\n      <div class=\"superior\">\n        <p class=\"bold title\">FPAc</p>\n        <p class=\"subtitle\">Part</p>\n      </div>\n      <div class=\"inferior\">\n        <p class=\"bold\">${{cartera.facturacionActual | acFormatNumber2decimal }}</p>\n        <p>{{porcentajeComparacionfacturaGlobal(cartera.facturacionActual) | acFormatNumber2decimal }}%</p>\n      </div>\n    </div>\n    <div class=\"datos-cont flecha-cont\">\n      <div>\n        <p></p>\n        <p></p>\n      </div>\n      <div>\n        <img class=\"flecha-periodos\" src=\"assets/Images/catalogo/flecharoja.png\" />\n        <p class=\"flecha-texto\">{{calcularPorcentaje(cartera.facturacionActual, cartera.facturacionAnterior) | acFormatNumber2decimal }}%</p>\n      </div>\n    </div>\n    <div class=\"datos-cont\">\n      <div class=\"superior\">\n        <p class=\"bold title\">FACTURACIÓN</p>\n        <p class=\"subtitle\">Periodo anterior</p>\n      </div>\n      <div class=\"inferior\">\n        <div>\n          <p class=\"bold title\">${{cartera.facturacionAnterior | acFormatNumber2decimal }}</p>\n        </div>\n        <div>\n          <p class=\"subtitle\">{{porcentajeComparacionfacturaGlobal(cartera.facturacionAnterior) | acFormatNumber2decimal }}%</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"datos-cartera\">\n    <div class=\"objetivo-promedio\">\n      <div class=\"datos-cont\">\n        <div class=\"superior\">\n          <p class=\"bold title\">OF</p>\n          <img class=\"objetivo\" src=\"assets/Images/catalogo/objetivo.svg\" />\n        </div>\n        <div class=\"inferior\">\n          <p class=\"bold title\">${{cartera.objetivoFundamental | acFormatNumber2decimal }}</p>\n          <div class=\"objetivo-valor\">\n            <img class=\"objetivo min\" src=\"assets/Images/catalogo/objetivo.svg\" />\n            <p class=\"subtitle\">{{calcularCambioEnProcentaje(cartera.facturacionAnterior, cartera.objetivoFundamental) | acFormatNumber2decimal }}%</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"datos-cont\">\n        <div class=\"superior\">\n          <p class=\"bold title\">OD</p>\n          <img class=\"objetivo\" src=\"assets/Images/catalogo/objetivo.svg\" />\n        </div>\n        <div class=\"inferior\">\n          <p class=\"bold title\">${{cartera.objetivoDeseado | acFormatNumber2decimal }}</p>\n          <div class=\"objetivo-valor\">\n            <img class=\"objetivo min\" src=\"assets/Images/catalogo/objetivo.svg\" />\n            <p class=\"subtitle\">{{calcularCambioEnProcentaje(cartera.facturacionAnterior, cartera.objetivoDeseado) | acFormatNumber2decimal }}%</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"datos-cont\">\n        <div class=\"superior\">\n          <p class=\"bold title\">PROMEDIO</p>\n          <p class=\"subtitle\">Facturado</p>\n        </div>\n        <div class=\"inferior\">\n          <p class=\"bold title\">${{cartera.promedioFacturacion | acFormatNumber2decimal }}</p>\n          <div class=\"objetivo-valor\">\n            <p>&nbsp;</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"proyeccion-venta\">\n      <div class=\"pv-label top\">\n        <p class=\"bold\">PV</p>\n        <img class=\"pv-grafica\" src=\"assets/Images/catalogo/Recurso_209.svg\" />\n      </div>\n      <div class=\"pv-cont bot\">\n        <p class=\"pv-cant bold space\">${{cartera.proyeccionVenta | acFormatNumber2decimal}}</p>\n        <div class=\"pv-arrows-cont\">\n          <div class=\"pv-arrow\">\n            <p class=\"fant-value\">{{calcularCambioEnProcentaje(cartera.facturacionAnterior, cartera.proyeccionVenta) | acFormatNumber2decimal }}%</p>\n            <img class=\"arrow fant-img\" [src]=\"'assets/Images/catalogo/' + (cartera.facturacionAnterior <= cartera.proyeccionVenta ? 'arriba1.png': 'abajo1.png')\" />\n          </div>\n          <div class=\"pv-arrow\">\n            <p class=\"of-value\">{{calcularCambioEnProcentaje(cartera.objetivoFundamental, cartera.proyeccionVenta) | acFormatNumber2decimal }}%</p>\n            <img class=\"arrow of-img\" [src]=\"'assets/Images/catalogo/' + (cartera.objetivoFundamental <= cartera.proyeccionVenta ? 'arriba2.png': 'abajo2.png')\" />\n          </div>\n          <div class=\"pv-arrow\">\n            <p class=\"od-value\">{{calcularCambioEnProcentaje(cartera.objetivoDeseado, cartera.proyeccionVenta) | acFormatNumber2decimal }}%</p>\n            <img class=\"arrow od-img\" [src]=\"'assets/Images/catalogo/' + (cartera.objetivoDeseado <= cartera.proyeccionVenta ? 'arriba3.png': 'abajo3.png')\" />\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"deudas-cont\">\n      <div class=\"datos-cont\">\n        <p class=\"bold superior\">DEBE</p>\n        <p class=\"bold inferior\">${{cartera.debe | acFormatNumber2decimal }}</p>\n      </div>\n      <div class=\"datos-cont\">\n        <p class=\"bold superior\">DEBEMOS</p>\n        <p class=\"bold inferior\">${{cartera.debemos | acFormatNumber2decimal }}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"vertical-line\"></div>\n  <div class=\"cartera-info-detalle\">\n    <div class=\"detalle-column\">\n      <div class=\"detalle\">\n        <img src=\"assets/Images/catalogo/creadorB.svg\" />\n        <p class=\"subtitle\">{{cartera.elaboro || 'ND'}}</p>\n      </div>\n      <div class=\"detalle\">\n        <img src=\"assets/Images/catalogo/Recurso 201.svg\" />\n        <p class=\"subtitle\">{{cartera.industria || 'ND'}}</p>\n      </div>\n    </div>\n    <div class=\"detalle-column\">\n      <div class=\"detalle\">\n        <img src=\"assets/Images/catalogo/Recurso 213.svg\" />\n        <p class=\"subtitle\">{{cartera.esac || 'ND'}}</p>\n      </div>\n      <div class=\"detalle\">\n        <img src=\"assets/Images/catalogo/importancia.svg\" />\n        <p class=\"subtitle\">{{cartera.estrella || 'ND'}}</p>\n      </div>\n    </div>\n    <div class=\"detalle-column\">\n      <div class=\"detalle\">\n        <img src=\"assets/Images/catalogo/EV.svg\" />\n        <p class=\"subtitle\">{{cartera.ev || 'ND'}}</p>\n      </div>\n      <div class=\"detalle\">\n        <img src=\"assets/Images/catalogo/dificultad.png\" />\n        <p class=\"subtitle\">{{cartera.triangulo || 'ND'}}</p>\n      </div>\n    </div>\n    <div class=\"detalle-column\">\n      <div class=\"detalle\">\n        <img src=\"assets/Images/catalogo/cobradorB.svg\" />\n        <p class=\"subtitle\">{{cartera.cobrador || 'ND'}}</p>\n      </div>\n      <div class=\"detalle\">\n        <img src=\"assets/Images/catalogo/todos.svg\" />\n        <p class=\"subtitle\">{{cartera.numeroClientes || 'ND'}}</p>\n      </div>\n    </div>\n    <div class=\"detalle-column\">\n      <div class=\"detalle\">\n        <img src=\"assets/Images/catalogo/Recurso 213.svg\" />\n        <p class=\"subtitle\">{{cartera.evt || 'ND'}}</p>\n      </div>\n      <div class=\"detalle\">\n        <img src=\"assets/Images/catalogo/msjero.svg\" />\n        <p class=\"subtitle\">{{cartera.mensajero || 'ND'}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"clients-content\">\n  <div class=\"client-wrapper\" *ngFor=\"let cliente of cartera.clientes\">\n    <flip-card [cliente]=\"cliente\">\n\n    </flip-card>\n  </div>\n</div>\n<div class=\"nomenclatura-cont\">\n  <div class=\"nomen-bloque\">\n    <div class=\"nomen-row\">\n      <p class=\"bold title\">FPACT</p>\n    </div>\n    <div class=\"nomen-row\">\n      <p class=\"subtitle\">Facturación Periódo Act.</p>\n    </div>\n  </div>\n  <div class=\"nomen-bloque\">\n    <div class=\"nomen-row\">\n      <p class=\"bold title\">PART</p>\n    </div>\n    <div class=\"nomen-row\">\n      <p class=\"subtitle\">Participación</p>\n    </div>\n  </div>\n  <div class=\"nomen-bloque\">\n    <div class=\"nomen-row\">\n      <p class=\"bold title\">OF</p>\n    </div>\n    <div class=\"nomen-row\">\n      <p class=\"subtitle\">Obj. Fundamental</p>\n    </div>\n  </div>\n  <div class=\"nomen-bloque\">\n    <div class=\"nomen-row\">\n      <p class=\"bold title\">OD</p>\n    </div>\n    <div class=\"nomen-row\">\n      <p class=\"subtitle\">Obj. Deseado</p>\n    </div>\n  </div>\n  <div class=\"nomen-bloque\">\n    <div class=\"nomen-row\">\n      <p class=\"bold title\">PV</p>\n    </div>\n    <div class=\"nomen-row\">\n      <p class=\"subtitle\">Proyección Venta</p>\n    </div>\n  </div>\n  <div class=\"nomen-bloque\">\n    <div class=\"nomen-row\">\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/objetivo.svg\" />\n    </div>\n    <div class=\"nomen-row\">\n      <p class=\"subtitle\">Objetivo</p>\n    </div>\n  </div>\n  <div class=\"nomen-bloque\">\n    <div class=\"nomen-row\">\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/Recurso_209.svg\" />\n    </div>\n    <div class=\"nomen-row\">\n      <p class=\"subtitle\">Creador</p>\n    </div>\n  </div>\n  <div class=\"nomen-bloque\">\n    <div class=\"nomen-row\">\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/esac.svg\" />\n    </div>\n    <div class=\"nomen-row\">\n      <p class=\"subtitle\">ESAC</p>\n    </div>\n  </div>\n  <div class=\"nomen-bloque\">\n    <div class=\"nomen-row\">\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/esac.svg\" />\n    </div>\n    <div class=\"nomen-row\">\n      <p class=\"subtitle\">EVT</p>\n    </div>\n  </div>\n  <div class=\"nomen-bloque\">\n    <div class=\"nomen-row\">\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/EV.svg\" />\n    </div>\n    <div class=\"nomen-row\">\n      <p class=\"subtitle\">EV</p>\n    </div>\n  </div>\n  <div class=\"nomen-bloque\">\n    <div class=\"nomen-row\">\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/cobradorB.svg\" />\n    </div>\n    <div class=\"nomen-row\">\n      <p class=\"subtitle\">Cobrador</p>\n    </div>\n  </div>\n  <div class=\"nomen-bloque\">\n    <div class=\"nomen-row\">\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/Recurso 201.svg\" />\n    </div>\n    <div class=\"nomen-row\">\n      <p class=\"subtitle\">Farmaceútica</p>\n    </div>\n  </div>\n  <div class=\"nomen-bloque\">\n    <div class=\"nomen-row\">\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/importancia.svg\" />\n    </div>\n    <div class=\"nomen-row\">\n      <p class=\"subtitle\">Importancia</p>\n    </div>\n  </div>\n  <div class=\"nomen-bloque\">\n    <div class=\"nomen-row\">\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/dificultad.png\" />\n    </div>\n    <div class=\"nomen-row\">\n      <p class=\"subtitle\">Dificultad</p>\n    </div>\n  </div>\n  <div class=\"nomen-bloque\">\n    <div class=\"nomen-row\">\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/msjero.svg\" />\n    </div>\n    <div class=\"nomen-row\">\n      <p class=\"subtitle\">Mensajero</p>\n    </div>\n  </div>\n  <div class=\"nomen-bloque\">\n    <div class=\"nomen-row\">\n      <img class=\"objetivo\" src=\"assets/Images/catalogo/todos.svg\" />\n    </div>\n    <div class=\"nomen-row\">\n      <p class=\"subtitle\">Clientes</p>\n    </div>\n  </div>\n</div>\n<div class=\"footer\">\n  <div class=\"footer-column\">\n    <div (click)=\"clicked()\" class=\"green-button extra-large\" >EXPORTAR</div>\n  </div>\n  <div class=\"footer-column\">\n    <div (click)=\"modal = true\" class=\"green-button extra-large\" >ELIMINAR</div>\n    <div (click)=\"redirectEdit()\" class=\"green-button extra-large\" >EDITAR</div>\n  </div>\n</div>\n<div *ngIf=\"modal\" class=\"modal\">\n  <div (click)=\"modal = false\" class=\"modal-bg\"></div>\n  <div class=\"modal-content\">\n    <div class=\"header\">\n      <p>ProquifaNet</p>\n      <div (click)=\"modal = false\" class=\"close-modal\" >X</div>\n    </div>\n    <div class=\"body\">\n      <div class=\"message\">\n        <p>¿Estás seguro de eliminar la cartera {{cartera.nombreCartera}}?</p>\n      </div>\n      <div class=\"options\">\n        <div (click)=\"modal = false\" class=\"green-button extra-large\" >Cancelar</div>\n        <div (click)=\"deleteWallet()\" class=\"red-button extra-large\" >Eliminar</div>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"modalDelete\" class=\"modal\">\n  <div class=\"modal-bg\"></div>\n  <div class=\"modal-content\">\n    <div class=\"header\">\n      <p>ProquifaNet</p>\n    </div>\n    <div class=\"body\">\n      <div class=\"message\">\n        <p>La cartera fue eliminada correctamente.</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/catalogo/detalles-cartera/detalles-cartera.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%; }\n:host .header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    background-color: #ECEEF0;\n    width: 100%;\n    height: 16%;\n    max-height: 193px;\n    font-size: 13px; }\n:host .header .cartera-info-basica {\n      min-width: 126.16px;\n      width: 11%;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n:host .header .cartera-info-basica p {\n        padding: 3px 0; }\n:host .header .cartera-info-basica p:nth-child(1) {\n        font-family: 'Roboto-bold'; }\n:host .header .cartera-info-basica p:nth-child(2), :host .header .cartera-info-basica p:nth-child(3) {\n        font-family: 'Roboto-regular'; }\n:host .header .vertical-line {\n      position: relative;\n      width: 1px;\n      height: 85%;\n      background-color: #979797;\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center; }\n:host .header .periodo-facturacion {\n      min-width: 172.05px;\n      width: 15%;\n      height: 90%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n:host .header .periodo-facturacion .datos-cont {\n        width: 40%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n:host .header .periodo-facturacion .datos-cont div {\n          width: 100%;\n          text-align: center; }\n:host .header .periodo-facturacion .datos-cont.flecha-cont {\n          width: 20%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -ms-flex-pack: distribute;\n              justify-content: space-around;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n:host .header .periodo-facturacion .datos-cont.flecha-cont div {\n            width: auto; }\n:host .header .periodo-facturacion .datos-cont.flecha-cont div:nth-child(2) {\n            margin-top: 30px; }\n:host .header .periodo-facturacion .datos-cont.flecha-cont div:nth-child(2) .flecha-periodos {\n              max-width: 28px;\n              max-height: 14px; }\n:host .header .periodo-facturacion .datos-cont.flecha-cont div:nth-child(2) .flecha-texto {\n              margin-top: 5px;\n              color: #C1272D;\n              font-weight: 300; }\n:host .header .datos-cartera {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 100%;\n      min-width: 573.5px;\n      width: 50%; }\n:host .header .datos-cartera .objetivo-promedio {\n        height: 90%;\n        width: 40%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row; }\n:host .header .datos-cartera .objetivo-promedio .datos-cont {\n          width: 33%;\n          height: 100%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n:host .header .datos-cartera .objetivo-promedio .datos-cont div {\n            width: 100%;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center; }\n:host .header .datos-cartera .objetivo-promedio .datos-cont .objetivo-valor {\n            width: 100%;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center; }\n:host .header .datos-cartera .objetivo-promedio .datos-cont .objetivo-valor p {\n              margin-left: 5px; }\n:host .header .datos-cartera .proyeccion-venta {\n        height: 100%;\n        width: 35%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n:host .header .datos-cartera .proyeccion-venta .pv-label.top {\n          margin-bottom: 13%; }\n:host .header .datos-cartera .proyeccion-venta .pv-label .pv-grafica {\n          max-width: 24px;\n          max-height: 20px; }\n:host .header .datos-cartera .proyeccion-venta p {\n          text-align: center; }\n:host .header .datos-cartera .proyeccion-venta .pv-cont {\n          width: 100%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          position: relative; }\n:host .header .datos-cartera .proyeccion-venta .pv-cont .pv-arrows-cont {\n            width: 100%;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            position: absolute;\n            bottom: -10px; }\n:host .header .datos-cartera .proyeccion-venta .pv-cont .pv-arrows-cont .pv-arrow {\n              width: 33%;\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row;\n              -webkit-box-pack: center;\n                  -ms-flex-pack: center;\n                      justify-content: center; }\n:host .header .datos-cartera .proyeccion-venta .pv-cont .pv-arrows-cont .pv-arrow .arrow {\n                margin-left: 10px;\n                max-width: 28px;\n                max-height: 14px; }\n:host .header .datos-cartera .proyeccion-venta .fant-value {\n          color: #008895; }\n:host .header .datos-cartera .proyeccion-venta .of-value {\n          color: #279E96; }\n:host .header .datos-cartera .proyeccion-venta .od-value {\n          color: #279E96;\n          opacity: 0.5; }\n:host .header .datos-cartera .deudas-cont {\n        width: 25%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        height: 90%; }\n:host .header .datos-cartera .deudas-cont .datos-cont {\n          width: 50%;\n          height: 100%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n:host .header .datos-cartera .deudas-cont .datos-cont p {\n            width: 100%;\n            text-align: center; }\n:host .header .datos-cartera .deudas-cont .datos-cont .objetivo-valor {\n            width: 100%;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center; }\n:host .header .datos-cartera .deudas-cont .datos-cont .objetivo-valor p {\n              margin-left: 5px; }\n:host .header .datos-cartera > div {\n        width: 100%;\n        height: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n:host .header .cartera-info-detalle {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      width: calc(24% - 2px);\n      height: 100%;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      font-size: 12px; }\n:host .header .cartera-info-detalle .detalle-column {\n        width: 25%;\n        height: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -ms-flex-pack: distribute;\n            justify-content: space-around; }\n:host .header .cartera-info-detalle .detalle-column .detalle {\n          width: 20%;\n          height: 100%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n:host .header .cartera-info-detalle .detalle-column .detalle img {\n            width: 34px;\n            height: 34px; }\n:host .header .cartera-info-detalle .detalle-column .detalle p {\n            font-size: 9px;\n            margin-top: 5px; }\n:host .header .space {\n      margin-bottom: 10px; }\n:host .header .toRight {\n      text-align: right !important; }\n:host .clients-content {\n    width: 100%;\n    height: 70%;\n    padding-top: 20px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    overflow-y: auto; }\n:host .clients-content .client-wrapper {\n      width: 25%;\n      height: 40%;\n      min-height: 280px; }\n:host .objetivo {\n    width: 17px;\n    height: 17px; }\n:host .objetivo.min {\n      width: 10px;\n      height: 10px; }\n:host .nomenclatura-cont {\n    width: 100%;\n    height: 4%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    border-top: 2px solid #ECEEF0;\n    border-bottom: 2px solid #4A4A4A;\n    padding: 10px 0; }\n:host .nomenclatura-cont .nomen-bloque {\n      max-width: 5.5%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      padding: 0 10px; }\n:host .nomenclatura-cont .nomen-bloque .nomen-row {\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        font-size: 10px; }\n:host .nomenclatura-cont .nomen-bloque .nomen-row p {\n          text-align: center; }\n:host .nomenclatura-cont .nomen-bloque .nomen-row:last-child p {\n          margin-top: 10px; }\n:host .footer {\n    height: 5%;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    height: 5%; }\n:host .footer .footer-column:first-child {\n      margin-left: 20px;\n      width: auto;\n      margin-right: 0; }\n:host .footer .footer-column {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end;\n      margin-right: 20px; }\n:host .footer .footer-column div:first-child {\n        margin-right: 20px; }\n:host  \n.bold {\n    font-weight: bold; }\n:host .green-button {\n    background-color: #008895;\n    color: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-family: 'Novecento-Demibold'; }\n:host .green-button:hover {\n      cursor: pointer;\n      background-color: #329faa; }\n:host .red-button {\n    background-color: #950d00;\n    color: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-family: 'Novecento-Demibold'; }\n:host .red-button:hover {\n      cursor: pointer;\n      background-color: #aa3d32; }\n:host .medium {\n    padding: 5px 10px; }\n:host .large {\n    padding: 3px 15px; }\n:host .extra-large {\n    width: 200px;\n    height: 30px; }\n:host .superior {\n    margin-bottom: 16%;\n    margin-top: 14%; }\n:host .inferior {\n    margin-top: 16%; }\n:host .modal .modal-bg {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #ccc;\n    opacity: 0.7;\n    z-index: 5; }\n:host .modal .modal-content {\n    z-index: 6;\n    position: fixed;\n    top: 45%;\n    left: 35%;\n    width: 30%;\n    min-width: 400px; }\n:host .modal .modal-content .header {\n      background-color: #008895;\n      color: #fff;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      position: relative;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      padding: 5px 0;\n      border-top-left-radius: 15px;\n      border-top-right-radius: 15px;\n      font-size: 24px; }\n:host .modal .modal-content .header .close-modal {\n        position: absolute;\n        right: 20px;\n        font-size: 20px; }\n:host .modal .modal-content .header .close-modal:hover {\n          cursor: pointer; }\n:host .modal .modal-content .body {\n      border-bottom-left-radius: 15px;\n      border-bottom-right-radius: 15px;\n      background-color: #fff;\n      padding: 20px 25px; }\n:host .modal .modal-content .body .message {\n        margin-bottom: 15px; }\n:host .modal .modal-content .body .message p {\n          text-align: center; }\n:host .modal .modal-content .body .options {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-pack: distribute;\n            justify-content: space-around; }\n:host .title {\n    font-family: 'Roboto-bold'; }\n:host .subtitle {\n    font-family: 'Roboto-regular'; }\n@media (max-width: 1801px) {\n  :host .header {\n    font-size: 10px; }\n    :host .header .cartera-info-detalle .detalle-column .detalle img {\n      width: 28px;\n      height: 28px; }\n    :host .header .cartera-info-detalle .detalle-column .detalle p {\n      font-size: 7px;\n      margin-top: 5px; }\n  :host .superior {\n    margin-bottom: 12%; }\n  :host .inferior {\n    margin-top: 12%; } }\n@media (max-width: 1990px) {\n  :host .clients-content .client-wrapper {\n    width: 33.3%; } }\n@media (max-height: 1100px) {\n  :host .header .datos-cartera .proyeccion-venta .pv-label.top {\n    margin-bottom: 6% !important; }\n  :host .clients-content {\n    height: 70%;\n    padding-top: 0; }\n  :host .clients-content {\n    height: 70%;\n    padding-top: 0; }\n  :host .extra-large {\n    width: 150px;\n    height: 25px; }\n  :host .objetivo {\n    width: 15px;\n    height: 15px; }\n  :host .superior {\n    margin-bottom: 12%; }\n  :host .inferior {\n    margin-top: 0; }\n  :host .nomenclatura-cont {\n    min-height: 54px;\n    padding: 2px 0;\n    height: 5%; }\n    :host .nomenclatura-cont .nomen-bloque .nomen-row:last-child p {\n      margin-top: 3px;\n      font-size: 8px; }\n  :host .footer {\n    height: 7%; } }\n"

/***/ }),

/***/ "./src/app/components/catalogo/detalles-cartera/detalles-cartera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallesCarteraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_catalogo_cartera_class__ = __webpack_require__("./src/app/class/catalogo/cartera.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_catalogo_cliente_class__ = __webpack_require__("./src/app/class/catalogo/cliente.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DetallesCarteraComponent = /** @class */ (function () {
    function DetallesCarteraComponent(catalogoService, http, router, coreContainer, route) {
        this.catalogoService = catalogoService;
        this.http = http;
        this.router = router;
        this.coreContainer = coreContainer;
        this.route = route;
        this.linksCarteras = [
            { label: 'Clientes', path: '/protected/catalogo/clientes' },
            { label: 'Carteras', path: '/protected/catalogo/clientes/carteras' },
        ];
        this.homePath = '/protected/catalogo';
        this.idCartera = 0;
        this.cartera = new __WEBPACK_IMPORTED_MODULE_4__class_catalogo_cartera_class__["a" /* Cartera */]();
        this.modal = false;
        this.modalDelete = false;
    }
    DetallesCarteraComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coreContainer.openModal(0);
        var idCartera = this.route.snapshot.paramMap.get('id');
        this.catalogoService.obtenerCarterasPorUsuario({ idFuncion: 0, idResponsable: 0, idCartera: Number(idCartera) })
            .subscribe(function (data) {
            data.current.map(function (clienteData, index) {
                var cartera;
                if (index === 0) {
                    cartera = new __WEBPACK_IMPORTED_MODULE_4__class_catalogo_cartera_class__["a" /* Cartera */]();
                    cartera.setIdCartera(clienteData.idCartera);
                    cartera.setNombreCartera(clienteData.cart_nombre);
                    cartera.setArea(clienteData.area);
                    cartera.setRuta(clienteData.ruta);
                    cartera.setIndustria(clienteData.industria);
                    cartera.setEstrella(clienteData.importancia);
                    cartera.setTriangulo(clienteData.dificultad);
                    cartera.setFolio(clienteData.folio);
                    cartera.setEsac(clienteData.cart_nombreEsac);
                    cartera.setEv(clienteData.cart_nombreEv);
                    cartera.setEvt(clienteData.cart_nombreEVT);
                    cartera.setCobrador(clienteData.cart_nombreCobrador);
                    cartera.setElaboro(clienteData.cart_nombreElaboro);
                    cartera.setMensajero(clienteData.cart_nombreMensajero);
                    cartera.setNumeroClientes(1);
                    cartera.setFacturacionGlobal(clienteData.cli_factGlobal);
                    cartera.setFacturacionActual(clienteData.cart_facturacionAct);
                    cartera.setFacturacionAnterior(clienteData.cart_facturacionAnt);
                    cartera.setObjetivoFundamental(clienteData.cart_montoFundamental);
                    cartera.setObjetivoDeseado(clienteData.cart_montoDeseado);
                    cartera.setProyeccionVenta(clienteData.cart_proyeccionVenta);
                    cartera.setPromedioFacturacion(clienteData.cart_promedioFacturacion);
                    cartera.setDebemos(clienteData.cart_debemos);
                    cartera.setDebe(clienteData.cart_deben);
                    cartera.setPublicada(clienteData.cart_publicada);
                    cartera.setNivelIngreso(clienteData.nivelIngreso);
                    cartera.setCategoria(clienteData.cli_categoria);
                    var cliente = new __WEBPACK_IMPORTED_MODULE_5__class_catalogo_cliente_class__["a" /* Cliente */]();
                    cliente.setId(clienteData.idCliente);
                    cliente.setNombre(clienteData.nombre);
                    cliente.setNivelIngreso(clienteData.nivelIngreso);
                    cliente.setFacturaAct(clienteData.cli_facturacionAct);
                    cliente.setFacturaAnt(clienteData.cli_facturacionAnt);
                    cliente.setObjetivoFundamental(clienteData.cli_monto_ObjetivoFundamental);
                    cliente.setObjetivoDeseado(clienteData.cli_monto_ObjetivoDeseado);
                    cliente.setPromedioFacturado(clienteData.cli_promedioFacturacion);
                    cliente.setProyeccionVenta(clienteData.cli_proyeccionVenta);
                    cliente.setImagen(clienteData.imagen);
                    cliente.setCategoria(clienteData.cli_categoria);
                    cartera.setClientes([cliente]);
                    _this.cartera = cartera;
                }
                else {
                    cartera = _this.cartera;
                    cartera.setEstrella(cartera.getEstrella() || clienteData.importancia);
                    cartera.setTriangulo(cartera.getTriangulo() || clienteData.dificultad);
                    var cliente = new __WEBPACK_IMPORTED_MODULE_5__class_catalogo_cliente_class__["a" /* Cliente */]();
                    cliente.setId(clienteData.idCliente);
                    cliente.setNombre(clienteData.nombre);
                    cliente.setNivelIngreso(clienteData.nivelIngreso);
                    cliente.setFacturaAct(clienteData.cli_facturacionAct);
                    cliente.setFacturaAnt(clienteData.cli_facturacionAnt);
                    cliente.setObjetivoFundamental(clienteData.cli_monto_ObjetivoFundamental);
                    cliente.setObjetivoDeseado(clienteData.cli_monto_ObjetivoDeseado);
                    cliente.setPromedioFacturado(clienteData.cli_promedioFacturacion);
                    cliente.setProyeccionVenta(clienteData.cli_proyeccionVenta);
                    cliente.setImagen(clienteData.imagen);
                    cliente.setCategoria(clienteData.cli_categoria);
                    cartera.setClientes(cartera.getClientes().concat([cliente]));
                    cartera.setNumeroClientes(cartera.getNumeroClientes() + 1);
                }
            });
            _this.linksCarteras.push({ label: _this.cartera.nombreCartera, path: '' });
            _this.coreContainer.closeModal(0);
        });
    };
    DetallesCarteraComponent.prototype.calcularFlujoFacturaciones = function () {
        if (this.cartera.facturacionActual >= this.cartera.facturacionAnterior) {
            return '+' + ((this.cartera.facturacionActual / this.cartera.facturacionAnterior * 100) - 100);
        }
        return '-' + (100 - (this.cartera.facturacionActual / this.cartera.facturacionAnterior * 100));
    };
    DetallesCarteraComponent.prototype.calcularPorcentaje = function (primerValor, segundoValor) {
        if (primerValor >= segundoValor) {
            return '+' + ((primerValor / segundoValor * 100) - 100);
        }
        return '-' + (100 - (primerValor / segundoValor * 100));
    };
    DetallesCarteraComponent.prototype.porcentajeComparacionfacturaGlobal = function (primerValor) {
        if (primerValor >= this.cartera.facturacionGlobal) {
            return (primerValor / this.cartera.facturacionGlobal * 100);
        }
        return (primerValor / this.cartera.facturacionGlobal * 100);
    };
    DetallesCarteraComponent.prototype.calcularCambioEnProcentaje = function (valorAntiguo, valorNuevo) {
        return ((valorNuevo - valorAntiguo) / valorAntiguo * 100);
    };
    DetallesCarteraComponent.prototype.deleteWallet = function () {
        var _this = this;
        this.modal = false;
        this.coreContainer.openModal(0);
        this.catalogoService.eliminarCartera({ idUsuario: 0, idCartera: this.cartera.idCartera }).subscribe(function (data) {
            console.log('Cartera eliminada correctamente');
            _this.coreContainer.closeModal(0);
            _this.modal = false;
            _this.modalDelete = true;
            setTimeout(function () {
                _this.modalDelete = false;
                _this.router.navigate(['/protected/catalogo/clientes/carteras']);
            }, 3000);
        });
    };
    DetallesCarteraComponent.prototype.redirectEdit = function () {
        this.router.navigate(['/protected/catalogo/clientes/carteras/edit/', this.cartera.idCartera]);
    };
    DetallesCarteraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'detalles-cartera',
            template: __webpack_require__("./src/app/components/catalogo/detalles-cartera/detalles-cartera.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/detalles-cartera/detalles-cartera.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_catalogo_catalogo_service__["a" /* CatalogoService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], DetallesCarteraComponent);
    return DetallesCarteraComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/detalles-cartera/detalles-cartera.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesCarteraModule", function() { return DetallesCarteraModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detalles_cartera_routing_module__ = __webpack_require__("./src/app/components/catalogo/detalles-cartera/detalles-cartera-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detalles_cartera_component__ = __webpack_require__("./src/app/components/catalogo/detalles-cartera/detalles-cartera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__flip_card_flip_card_component__ = __webpack_require__("./src/app/components/catalogo/detalles-cartera/flip-card/flip-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DetallesCarteraModule = /** @class */ (function () {
    function DetallesCarteraModule() {
    }
    DetallesCarteraModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__detalles_cartera_routing_module__["a" /* DetallesCarteraRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__detalles_cartera_component__["a" /* DetallesCarteraComponent */],
                __WEBPACK_IMPORTED_MODULE_7__flip_card_flip_card_component__["a" /* FlipCardComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_catalogo_catalogo_service__["a" /* CatalogoService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__detalles_cartera_component__["a" /* DetallesCarteraComponent */]
            ]
        })
    ], DetallesCarteraModule);
    return DetallesCarteraModule;
}());



/***/ }),

/***/ "./src/app/components/catalogo/detalles-cartera/flip-card/flip-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"flip-container\" >\n  <div [ngClass]=\"'flipper' + (flipOnEvent ? ' flip': '')\">\n    <div class=\"front-face\" (click)=\"flipCard(true)\">\n      <img class=\"\" [src]=\"cliente.imagen !== null ? 'assets/Images/clientes/' + cliente.id+'.png' : 'assets/Images/clientes/default.png'\" />\n      <p *ngIf=\"!cliente.imagen\" class=\"client-name\">{{cliente.nombre}}</p>\n    </div>\n    <div class=\"back-face\">\n      <div class=\"client-name-cont\">\n        <p class=\"bold title\">{{cliente.nombre}}</p>\n        <img class=\"tache\" src=\"assets/Images/catalogo/tache_Carteras.png\" (click)=\"flipCard(false)\" />\n      </div>\n      <div class=\"info-cont\">\n        <div class=\"info-block\">\n          <div class=\"block-info left\">\n            <div>\n              <div class=\"fac\">\n                <p class=\"bold\">FACT Actual</p>\n                <p class=\"money bold\">${{cliente.facturaAct | acFormatNumber2decimal}}</p>\n              </div>\n              <div class=\"bloque\">\n                <div class=\"label\">\n                  <p class=\"light\">Objetivo Fundamental</p>\n                </div>\n                <div>\n                  <div class=\"money bold right\">${{cliente.objetivoFundamental | acFormatNumber2decimal}}</div>\n                  <div class=\"porcent\">\n                    <img class=\"objetivo\" src=\"assets/Images/catalogo/objetivo.svg\" />\n                    <p>{{calcularCambioEnProcentaje(cliente.facturaAnt, cliente.objetivoFundamental) | acFormatNumber2decimal}}%</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"bloque\">\n                <div class=\"label\">\n                  <p class=\"light\">Promedio facturado</p>\n                </div>\n                <div>\n                  <div class=\"money bold\">${{cliente.promedioFacturado | acFormatNumber2decimal}}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"block-info right\">\n            <div>\n              <div class=\"fac\">\n                <p class=\"bold\">FACT Anterior</p>\n                <p class=\"money bold\">${{cliente.facturaAnt | acFormatNumber2decimal}}</p>\n              </div>\n              <div class=\"bloque\">\n                <div class=\"label\">\n                  <p class=\"light\">Objetivo Deseado</p>\n                </div>\n                <div>\n                  <div class=\"money bold right\">${{cliente.objetivoDeseado | acFormatNumber2decimal}}</div>\n                  <div class=\"porcent\">\n                    <img class=\"objetivo\" src=\"assets/Images/catalogo/objetivo.svg\" />\n                    <p>{{calcularCambioEnProcentaje(cliente.facturaAnt, cliente.objetivoDeseado) | acFormatNumber2decimal}}%</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"bloque\">\n                <div class=\"label\">\n                  <p class=\"light\">Proyección venta</p>\n                </div>\n                <div>\n                  <div class=\"money bold right\">${{cliente.proyeccionVenta | acFormatNumber2decimal}}</div>\n                  <div class=\"porcent\">\n                    <img class=\"objetivo\" src=\"assets/Images/catalogo/objetivo.svg\" />\n                    <p>{{calcularCambioEnProcentaje(cliente.facturaAnt, cliente.proyeccionVenta) | acFormatNumber2decimal}}%</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/catalogo/detalles-cartera/flip-card/flip-card.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n:host {\n  width: 100%;\n  height: 100%; }\n:host .flip-container {\n    width: 100%;\n    height: 100%; }\n:host .flip-container .flipper.flip {\n      -webkit-transform: rotateY(180deg);\n              transform: rotateY(180deg); }\n:host .flip-container:hover .flipper .front-face {\n      -webkit-filter: grayscale(0);\n              filter: grayscale(0);\n      cursor: pointer; }\n:host .flip-container .flipper {\n      width: 100%;\n      height: 100%;\n      -webkit-transition: 800ms cubic-bezier(0.58, 0.06, 0.67, 1.45);\n      transition: 800ms cubic-bezier(0.58, 0.06, 0.67, 1.45);\n      -webkit-transform-style: preserve-3d;\n              transform-style: preserve-3d;\n      position: relative; }\n:host .flip-container .flipper:host /deep/ div.front-face:nth-child(1), :host .flip-container .flipper:host /deep/ div.back-face:nth-child(2) {\n        position: absolute;\n        top: 0;\n        left: 0;\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden; }\n:host .flip-container .flipper:host /deep/ div.front-face:nth-child(1) {\n        z-index: 2;\n        -webkit-transform: rotateY(0);\n                transform: rotateY(0); }\n:host .flip-container .flipper:host /deep/ div.back-face:nth-child(2) {\n        -webkit-transform: rotateY(180deg);\n                transform: rotateY(180deg); }\n:host .flip-container .flipper .front-face {\n        width: 100%;\n        height: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        position: relative;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-filter: grayscale(100);\n                filter: grayscale(100);\n        -webkit-transition: 400ms;\n        transition: 400ms; }\n:host .flip-container .flipper .front-face img {\n          -webkit-transform: scale(1.3);\n                  transform: scale(1.3); }\n:host .flip-container .flipper .front-face .client-name {\n          position: absolute;\n          width: 100%;\n          left: 0;\n          bottom: 10px;\n          text-align: center;\n          font-family: 'Roboto'; }\n:host .flip-container .flipper .back-face {\n        width: calc(100% - 28px);\n        height: calc(100% - 24px);\n        background-color: #E7F4F5;\n        padding: 12px 14px; }\n:host .flip-container .flipper .back-face .client-name-cont {\n          width: 100%;\n          height: 20%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          position: relative;\n          border-bottom: 1px solid #000; }\n:host .flip-container .flipper .back-face .client-name-cont .title {\n            font-size: 22px;\n            width: calc(100% - 20px);\n            text-align: center; }\n:host .flip-container .flipper .back-face .client-name-cont .tache {\n            position: absolute;\n            right: 0;\n            top: 0;\n            width: 20px;\n            height: 20px; }\n:host .flip-container .flipper .back-face .client-name-cont .tache:hover {\n              cursor: pointer; }\n:host .flip-container .flipper .back-face .info-cont {\n          width: 100%;\n          height: 78%;\n          margin-top: 2%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-box-pack: start;\n              -ms-flex-pack: start;\n                  justify-content: flex-start;\n          font-size: 15px; }\n:host .flip-container .flipper .back-face .info-cont .info-block {\n            width: 100%;\n            height: 100%;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row; }\n:host .flip-container .flipper .back-face .info-cont .block-info {\n            height: 100%;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            -ms-flex-pack: distribute;\n                justify-content: space-around;\n            width: 50%; }\n:host .flip-container .flipper .back-face .info-cont .block-info.left {\n              -webkit-box-align: start;\n                  -ms-flex-align: start;\n                      align-items: flex-start; }\n:host .flip-container .flipper .back-face .info-cont .block-info.left > div {\n                width: 90%;\n                height: 100%;\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-orient: vertical;\n                -webkit-box-direction: normal;\n                    -ms-flex-direction: column;\n                        flex-direction: column;\n                -ms-flex-pack: distribute;\n                    justify-content: space-around; }\n:host .flip-container .flipper .back-face .info-cont .block-info.right {\n              -webkit-box-align: end;\n                  -ms-flex-align: end;\n                      align-items: flex-end; }\n:host .flip-container .flipper .back-face .info-cont .block-info.right > div {\n                width: 90%;\n                height: 100%;\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-orient: vertical;\n                -webkit-box-direction: normal;\n                    -ms-flex-direction: column;\n                        flex-direction: column;\n                -ms-flex-pack: distribute;\n                    justify-content: space-around; }\n:host .flip-container .flipper .back-face .info-cont .block-info .fac {\n              width: 100%;\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-pack: justify;\n                  -ms-flex-pack: justify;\n                      justify-content: space-between; }\n:host .flip-container .flipper .back-face .info-cont .block-info .fac .bold {\n                text-align: right;\n                width: 40%; }\n:host .flip-container .flipper .back-face .info-cont .block-info .bloque {\n              width: 100%;\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-pack: justify;\n                  -ms-flex-pack: justify;\n                      justify-content: space-between; }\n:host .flip-container .flipper .back-face .info-cont .block-info .bloque .label {\n                width: 40%;\n                font-weight: 300; }\n:host .flip-container .flipper .back-face .info-cont .block-info .bloque .label .light {\n                  text-align: right; }\n:host .flip-container .flipper .back-face .info-cont .block-info .bloque .porcent {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-pack: end;\n                    -ms-flex-pack: end;\n                        justify-content: flex-end;\n                -webkit-box-align: center;\n                    -ms-flex-align: center;\n                        align-items: center; }\n:host .flip-container .flipper .back-face .info-cont .block-info .bloque .porcent p {\n                  font-size: 12px; }\n:host .flip-container .flipper .back-face .money {\n          color: #008895;\n          font-family: 'Roboto-bold' !important; }\n:host .flip-container .flipper .back-face .bold {\n          font-family: 'Roboto Medium'; }\n:host .flip-container .flipper .back-face .light {\n          font-family: 'Roboto-light'; }\n:host .flip-container .flipper .back-face .right {\n          text-align: right; }\n:host .objetivo {\n    width: 17px;\n    height: 17px; }\n:host .objetivo.min {\n      width: 10px;\n      height: 10px; }\n@media (max-width: 1701px) {\n  :host .label {\n    font-size: 13px; }\n  :host .bold, :host .money, :host .porcent {\n    font-size: 13px; }\n  :host .title {\n    font-size: 20px !important;\n    width: calc(100% - 20px);\n    text-align: center; }\n  :host .porcent p {\n    font-size: 11px; }\n  :host .objetivo {\n    width: 15px;\n    height: 15px; }\n    :host .objetivo.min {\n      width: 10px;\n      height: 10px; } }\n"

/***/ }),

/***/ "./src/app/components/catalogo/detalles-cartera/flip-card/flip-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlipCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_catalogo_cliente_class__ = __webpack_require__("./src/app/class/catalogo/cliente.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlipCardComponent = /** @class */ (function () {
    function FlipCardComponent() {
        this.flipOnEvent = false;
    }
    FlipCardComponent.prototype.ngOnInit = function () {
    };
    FlipCardComponent.prototype.flipCard = function (value) {
        this.flipOnEvent = value;
    };
    FlipCardComponent.prototype.calcularCambioEnProcentaje = function (valorAntiguo, valorNuevo) {
        return ((valorNuevo - valorAntiguo) / valorAntiguo * 100);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__class_catalogo_cliente_class__["a" /* Cliente */])
    ], FlipCardComponent.prototype, "cliente", void 0);
    FlipCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'flip-card',
            template: __webpack_require__("./src/app/components/catalogo/detalles-cartera/flip-card/flip-card.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/detalles-cartera/flip-card/flip-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FlipCardComponent);
    return FlipCardComponent;
}());



/***/ })

});
//# sourceMappingURL=detalles-cartera.module.chunk.js.map