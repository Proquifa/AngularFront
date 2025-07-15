webpackJsonp(["crear-cartera.module"],{

/***/ "./src/app/components/catalogo/crear-cartera/crear-cartera-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearCarteraRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crear_cartera_component__ = __webpack_require__("./src/app/components/catalogo/crear-cartera/crear-cartera.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CrearCarteraRoutingModule = /** @class */ (function () {
    function CrearCarteraRoutingModule() {
    }
    CrearCarteraRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__crear_cartera_component__["a" /* CrearCarteraComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], CrearCarteraRoutingModule);
    return CrearCarteraRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/catalogo/crear-cartera/crear-cartera.component.html":
/***/ (function(module, exports) {

module.exports = "<pn-header-bc [opciones]=\"linksCarteras\" [homePath]=\"homePath\"></pn-header-bc>\n<div class=\"paneles\">\n  <div class=\"panel-lista-clientes\">\n    <div class=\"search-container\">\n      <div class=\"input-cont\">\n        <img class=\"lupa\" src=\"assets/Images/catalogo/lupa.png\" />\n        <input class=\"buscar-input\" placeholder=\"Buscar Cliente\" (input)=\"changeClientsFilter($event.target.value)\" />\n      </div>\n    </div>\n    <div class=\"filtros-container\">\n      <filter-menu [filtros]=\"filtros\" (sendValue)=\"getOptions($event)\" [filterSelected]=\"filterSelected\" [totalObjetos]=\"\" [totalObjetosLabel]=\"''\"></filter-menu>\n    </div>\n    <div id=\"clientes\" class='container clientes-sin-cartera' [dragula]='\"bag-one\"' [dragulaModel]='clientesSinCarteraDisplay' [dragulaOptions]=\"options\">\n      <div id=\"{{cliente.id}}\" class=\"cliente\" *ngFor=\"let cliente of clientesSinCarteraDisplay\">\n        <client-card [idCliente]=\"cliente.id\" [tieneImagen]=\"cliente.imagen\" [nombre]=\"cliente.imagen ? '': cliente.nombre\"></client-card>\n      </div>\n    </div>\n    <div *ngIf=\"coverListaClientes\" class=\"container clientes-sin-cartera cover\" >\n    </div>\n  </div>\n  <div class=\"panel-cartera\">\n    <div id=\"clientes-cartera\" class='container clientes-cartera' [dragula]='\"bag-one\"' [dragulaModel]='cartera.clientes' [dragulaOptions]=\"options\">\n      <div id=\"{{cliente.id}}\" [ngClass]=\"'cliente' + (cliente.esOriginal ? ' original':'') + ' en-cartera'\" *ngFor=\"let cliente of cartera.clientes\">\n        <client-card [idCliente]=\"cliente.id\" [tieneImagen]=\"cliente.imagen\" [conFiltro]=\"false\" [containerClass]=\"'cliente-container'\" [nombre]=\"cliente.imagen ? '': cliente.nombre\" ></client-card>\n      </div>\n      <p *ngIf=\"cartera.clientes.length === 0\" class=\"label-sin-clientes\">ARRASTRA CLIENTE AQUÍ</p>\n    </div>\n    <div class=\"panel-cartera-info\">\n      <div class=\"title\">\n        <p>DATOS GENERALES</p>\n      </div>\n      <div class=\"wallet-form\">\n        <input placeholder=\"Nombre de cartera\" (input)=\"changeName($event)\" [value]=\"cartera.nombreCartera\" />\n        <div class=\"cmb-row\">\n          <div class=\"cmb-container\">\n            <p class=\"cmb-label\">ESAC</p>\n            <div class=\"cmb\">\n              <pq-drop-list [items]=\"esacList\" [itemSelect]=\"esacSelected\" (valueDropList)=\"getComboValue($event,'esac')\" [isSearch]=\"false\" ></pq-drop-list>\n              <div *ngIf=\"this.rolUsuario !== 'ESAC' && this.rolUsuario !== 'Direccion'\" class=\"cmb-cover\"></div>\n            </div>\n          </div>\n          <div class=\"cmb-container\">\n            <p class=\"cmb-label\">EV Telemarketing</p>\n            <div class=\"cmb\">\n              <pq-drop-list [items]=\"evtList\" [itemSelect]=\"evtSelected\" (valueDropList)=\"getComboValue($event,'evt')\" [isSearch]=\"false\"></pq-drop-list>\n              <div *ngIf=\"this.rolUsuario !== 'ESAC' && this.rolUsuario !== 'Direccion'\" class=\"cmb-cover\"></div>\n            </div>\n          </div>\n          <div class=\"cmb-container\">\n            <p class=\"cmb-label\">EV Campo</p>\n            <div class=\"cmb\">\n              <pq-drop-list [items]=\"evList\" [itemSelect]=\"evSelected\" (valueDropList)=\"getComboValue($event,'ev')\" [isSearch]=\"false\" ></pq-drop-list>\n              <div *ngIf=\"this.rolUsuario !== 'Ventas' && this.rolUsuario !== 'Direccion'\" class=\"cmb-cover\"></div>\n            </div>\n          </div>\n          <div class=\"cmb-container\">\n            <p class=\"cmb-label\">Cobrador</p>\n            <div class=\"cmb\">\n              <pq-drop-list [items]=\"cobradorList\" [itemSelect]=\"cobradorSelected\" (valueDropList)=\"getComboValue($event,'cobrador')\" [isSearch]=\"false\" ></pq-drop-list>\n              <div *ngIf=\"this.rolUsuario !== 'Finanzas' && this.rolUsuario !== 'Direccion'\" class=\"cmb-cover\"></div>\n            </div>\n          </div>\n          <div class=\"cmb-container\">\n            <p class=\"cmb-label\">Mensajero</p>\n            <div class=\"cmb\">\n              <pq-drop-list [items]=\"mensajeroList\" [itemSelect]=\"mensajeroSelected\" (valueDropList)=\"getComboValue($event,'mensajero')\" [isSearch]=\"false\" ></pq-drop-list>\n              <div *ngIf=\"this.rolUsuario !== 'Direccion'\" class=\"cmb-cover\"></div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"wallet-info\">\n        <div class=\"info-row\">\n          <div class=\"info\">\n            <p class=\"label\">Facturación Anterior</p>\n            <p class=\"money fant-value\">${{cartera.facturacionAnterior | acFormatNumber2decimal }}</p>\n          </div>\n          <div class=\"info\">\n            <p class=\"label\">Objetivo Fundamental</p>\n            <p class=\"money of-value\">${{cartera.objetivoFundamental | acFormatNumber2decimal }}</p>\n            <p class=\"porcent\">{{calcularCambioEnProcentaje(cartera.facturacionAnterior,cartera.objetivoFundamental) | acFormatNumber2decimal }}%</p>\n          </div>\n          <div class=\"info\">\n            <p class=\"label\">Objetivo Deseado</p>\n            <p class=\"money od-value\">${{cartera.objetivoDeseado | acFormatNumber2decimal }}</p>\n            <p class=\"porcent\">{{calcularCambioEnProcentaje(cartera.facturacionAnterior,cartera.objetivoDeseado) | acFormatNumber2decimal }}%</p>\n          </div>\n          <div class=\"info\">\n            <p class=\"label\">Proyección Venta</p>\n            <p class=\"money\">${{cartera.proyeccionVenta | acFormatNumber2decimal }}</p>\n            <div class=\"pv-arrows-cont\">\n              <div class=\"pv-arrow\">\n                <p class=\"fant-value\">{{calcularCambioEnProcentaje(cartera.facturacionAnterior, cartera.proyeccionVenta) | acFormatNumber2decimal }}%</p>\n                <img class=\"arrow fant-img\" [src]=\"'assets/Images/catalogo/' + (cartera.facturacionAnterior <= cartera.proyeccionVenta ? 'arriba1.png': 'abajo1.png')\" />\n              </div>\n              <div class=\"pv-arrow\">\n                <p class=\"of-value\">{{calcularCambioEnProcentaje(cartera.objetivoFundamental, cartera.proyeccionVenta) | acFormatNumber2decimal }}%</p>\n                <img class=\"arrow of-img\" [src]=\"'assets/Images/catalogo/' + (cartera.objetivoFundamental <= cartera.proyeccionVenta ? 'arriba2.png': 'abajo2.png')\" />\n              </div>\n              <div class=\"pv-arrow\">\n                <p class=\"od-value\">{{calcularCambioEnProcentaje(cartera.objetivoDeseado, cartera.proyeccionVenta) | acFormatNumber2decimal }}%</p>\n                <img class=\"arrow od-img\" [src]=\"'assets/Images/catalogo/' + (cartera.objetivoDeseado <= cartera.proyeccionVenta ? 'arriba3.png': 'abajo3.png')\" />\n              </div>\n            </div>\n            <div>\n            </div>\n          </div>\n          <div class=\"info\">\n            <p class=\"label\">Facturación Actual</p>\n            <p class=\"money fact\">${{cartera.facturacionActual | acFormatNumber2decimal }}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"wallet-buttons\">\n        <div (click)=\"true\" class=\"green-button extra-large\" >Exportar</div>\n        <div class=\"wallet-div\">\n          <div *ngIf=\"cartera.idCartera !== 0 && !cartera.publicada\" (click)=\"guardarCambios(true)\" class=\"green-button extra-large\">PUBLICAR</div>\n          <div *ngIf=\"cartera.idCartera === 0 || cartera.publicada\" class=\"green-button extra-large disabled\">PUBLICAR</div>\n          <div (click)=\"guardarCambios()\" class=\"green-button extra-large\">GUARDAR</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"modalMoverCliente\" class=\"modal\">\n  <div (click)=\"modalMoverCliente = false\" class=\"modal-bg\"></div>\n  <div class=\"modal-content\">\n    <div class=\"header\">\n      <p>ASIGNAR CARTERA</p>\n    </div>\n    <div class=\"body\">\n      <div class=\"body-wrapper\">\n        <div class=\"message\">\n          <p>El cliente debe ser asignado a una nueva cartera, favor de seleccionar la cartera destino</p>\n          <p class=\"last-client-msg\">*La cartera se borrará automaticamente al quedarse sin clientes.</p>\n        </div>\n        <div class=\"wallets-container\">\n          <div *ngIf=\"listaCarteras.length === 0\" class=\"loader\">\n\n          </div>\n          <div class=\"wallet-item\" *ngFor=\"let cartera of listaCarteras; let i = index\">\n            <div class=\"row\">\n              <div class=\"wallet-info\">\n                <span>#{{i + 1}}</span>\n                <span>·</span>\n                <span>{{cartera.nombreCartera}}</span>\n              </div>\n              <img *ngIf=\"i === modalWalletSelected\" (click)=\"selectNewWalletForCliente(-1)\" class=\"radio\" src=\"assets/Images/radio_selected.svg\" />\n              <img *ngIf=\"i !== modalWalletSelected\" (click)=\"selectNewWalletForCliente(i)\" class=\"radio\" src=\"assets/Images/radio_unselected.svg\" />\n            </div>\n            <div class=\"row\">\n              <div class=\"wallet-role\">\n                <img src=\"assets/Images/catalogo/verde_esac.svg\" />\n                <p>{{cartera.esac || 'Sin asignación'}}</p>\n              </div>\n              <div class=\"wallet-role\">\n                <img src=\"assets/Images/catalogo/verde_ev.svg\" />\n                <p>{{cartera.ev || 'Sin asignación'}}</p>\n              </div>\n              <div class=\"wallet-role\">\n                <img src=\"assets/Images/catalogo/verde_cobrador.svg\" />\n                <p>{{cartera.cobrador || 'Sin asignación'}}</p>\n              </div>\n              <div class=\"wallet-role\">\n                <img src=\"assets/Images/catalogo/verde_clientes.svg\" />\n                <p>{{cartera.numeroClientes}} Clientes</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"options\">\n        <div (click)=\"modalMoverCliente = false\" class=\"green-button extra-large\" >Cancelar</div>\n        <div *ngIf=\"modalWalletSelected !== -1\" (click)=\"moverClienteACartera()\" class=\"green-button extra-large\" >Aceptar</div>\n        <div *ngIf=\"modalWalletSelected === -1\" class=\"green-button extra-large disabled\" >Aceptar</div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"modalSuccess\" class=\"modal\">\n  <div (click)=\"modalSuccess = false\" class=\"modal-bg\"></div>\n  <div class=\"modal-content success\">\n    <div class=\"header\">\n      <img class=\"gif-exito\" src=\"assets/Images/gif_exitosa.gif\" />\n    </div>\n    <div class=\"body\">\n      <div class=\"message\">\n        <p class=\"mensaje-centrado\">{{mensaje}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/catalogo/crear-cartera/crear-cartera.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%; }\n:host .loader {\n    position: absolute;\n    top: calc(48% - 30px);\n    left: calc(48% - 30px);\n    border: 8px solid #f3f3f3;\n    /* Light grey */\n    border-top: 8px solid #008895;\n    /* Blue */\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    -webkit-animation: spin .9s linear infinite;\n            animation: spin .9s linear infinite; }\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n:host .paneles {\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n:host .paneles .panel-lista-clientes {\n      width: calc(50% - 38px);\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding: 0 19px;\n      position: relative; }\n:host .paneles .panel-lista-clientes .search-container {\n        height: 5%;\n        max-height: 30px;\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        padding: 19px 0;\n        border-bottom: 1px solid #424242; }\n:host .paneles .panel-lista-clientes .search-container .input-cont {\n          position: relative; }\n:host .paneles .panel-lista-clientes .search-container .input-cont .lupa {\n            position: absolute;\n            width: 20px;\n            height: 20px;\n            top: 5px;\n            left: 5px; }\n:host .paneles .panel-lista-clientes .search-container .input-cont .buscar-input {\n            border-radius: 25px;\n            width: 403px;\n            height: 25px;\n            border: 1px solid #BFC0C7;\n            padding-left: 25px;\n            outline: none; }\n:host .paneles .panel-lista-clientes .search-container .input-cont .buscar-input:focus {\n              border: 1px solid #333; }\n:host .paneles .panel-lista-clientes .search-container .input-cont .buscar-input::-webkit-input-placeholder {\n              font-family: 'Roboto-regular'; }\n:host .paneles .panel-lista-clientes .search-container .input-cont .buscar-input::-moz-placeholder {\n              font-family: 'Roboto-regular'; }\n:host .paneles .panel-lista-clientes .search-container .input-cont .buscar-input::-ms-input-placeholder {\n              font-family: 'Roboto-regular'; }\n:host .paneles .panel-lista-clientes .search-container .input-cont .buscar-input::placeholder {\n              font-family: 'Roboto-regular'; }\n:host .paneles .panel-lista-clientes .filtros-container {\n        height: 7%;\n        min-height: 84px; }\n:host .paneles .panel-lista-clientes .clientes-sin-cartera {\n        width: 100%;\n        max-height: 88%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start;\n        -webkit-box-align: start;\n            -ms-flex-align: start;\n                align-items: flex-start;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        overflow-y: auto; }\n:host .paneles .panel-lista-clientes .cover {\n        position: absolute;\n        top: 12%;\n        left: 0;\n        z-index: 3; }\n:host .paneles .panel-cartera {\n      width: calc(50% - 38px);\n      height: 100%;\n      background-color: #ECEEF0;\n      padding: 0 19px; }\n:host .paneles .panel-cartera .clientes-cartera {\n        width: 100%;\n        height: 69%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: start;\n            -ms-flex-pack: start;\n                justify-content: flex-start;\n        -ms-flex-line-pack: start;\n            align-content: flex-start;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        position: relative;\n        border-bottom: 1px solid #979797;\n        overflow-y: auto; }\n:host .paneles .panel-cartera .clientes-cartera .label-sin-clientes {\n          position: absolute;\n          font-family: 'Novecento-Demibold';\n          width: 100%;\n          top: 48%;\n          left: 0;\n          text-align: center;\n          color: #279E96;\n          opacity: 0.5;\n          font-size: 30px; }\n:host .paneles .panel-cartera .panel-cartera-info {\n        height: 31%; }\n:host .paneles .panel-cartera .title {\n        height: calc(15% - 36px);\n        width: 100%;\n        padding: 16px 0 20px 0; }\n:host .paneles .panel-cartera .title p {\n          width: 100%;\n          text-align: center;\n          font-family: 'Novecento-Demibold'; }\n:host .paneles .panel-cartera .wallet-form {\n        width: 100%;\n        height: 33%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column; }\n:host .paneles .panel-cartera .wallet-form input {\n          width: 100%;\n          border: 1px solid #ECEEF0;\n          height: 20px;\n          font-size: 12px; }\n:host .paneles .panel-cartera .wallet-form input::-webkit-input-placeholder {\n            font-family: 'Novecento';\n            color: #C2C3C9;\n            font-size: 12px; }\n:host .paneles .panel-cartera .wallet-form input::-moz-placeholder {\n            font-family: 'Novecento';\n            color: #C2C3C9;\n            font-size: 12px; }\n:host .paneles .panel-cartera .wallet-form input::-ms-input-placeholder {\n            font-family: 'Novecento';\n            color: #C2C3C9;\n            font-size: 12px; }\n:host .paneles .panel-cartera .wallet-form input::placeholder {\n            font-family: 'Novecento';\n            color: #C2C3C9;\n            font-size: 12px; }\n:host .paneles .panel-cartera .wallet-form .cmb-row {\n          width: 100%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          margin-top: 19px;\n          margin-bottom: 25px; }\n:host .paneles .panel-cartera .wallet-form .cmb-row .cmb-container {\n            min-width: 100px;\n            width: 16%;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column; }\n:host .paneles .panel-cartera .wallet-form .cmb-row .cmb-container p:first-child {\n              font-family: 'Roboto-regular';\n              font-size: 14px;\n              color: #424242; }\n:host .paneles .panel-cartera .wallet-form .cmb-row .cmb-container .cmb {\n              height: 61%;\n              width: 100%;\n              position: relative;\n              background-color: #fff; }\n:host .paneles .panel-cartera .wallet-form .cmb-row .cmb-container .cmb .cmb-cover {\n                position: absolute;\n                left: 0;\n                top: 0;\n                width: 100%;\n                height: 100%;\n                background-color: #ccc;\n                opacity: 0.5;\n                z-index: 5; }\n:host .paneles .panel-cartera .wallet-info {\n        width: 100%;\n        height: 100%;\n        height: calc(30% - 52px);\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        border-top: 1px solid #979797;\n        border-bottom: 1px solid #979797;\n        padding-top: 25px;\n        padding-bottom: 25px; }\n:host .paneles .panel-cartera .wallet-info .info-row {\n          width: 100%;\n          height: 100%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between; }\n:host .paneles .panel-cartera .wallet-info .info-row .info {\n            width: 20%;\n            height: 100%;\n            position: relative;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center; }\n:host .paneles .panel-cartera .wallet-info .info-row .info .label {\n              font-family: 'Roboto-regular';\n              color: #424242;\n              font-size: 13px;\n              text-align: center; }\n:host .paneles .panel-cartera .wallet-info .info-row .info .porcent {\n              font-family: 'Roboto-regular';\n              color: #000;\n              font-size: 12px;\n              margin-top: 5px; }\n:host .paneles .panel-cartera .wallet-info .info-row .info .money {\n              margin-top: 5px;\n              text-align: center;\n              color: #008895;\n              font-size: 13px;\n              font-family: 'Roboto-bold'; }\n:host .paneles .panel-cartera .wallet-info .info-row .info .money.fact {\n                color: #900280;\n                font-size: 13px; }\n:host .paneles .panel-cartera .wallet-info .info-row .info .pv-arrows-cont {\n              width: 100%;\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row;\n              position: absolute;\n              bottom: -12%; }\n:host .paneles .panel-cartera .wallet-info .info-row .info .pv-arrows-cont .pv-arrow {\n                width: 33%;\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-orient: horizontal;\n                -webkit-box-direction: normal;\n                    -ms-flex-direction: row;\n                        flex-direction: row;\n                -webkit-box-pack: center;\n                    -ms-flex-pack: center;\n                        justify-content: center;\n                padding: 0 3px; }\n:host .paneles .panel-cartera .wallet-info .info-row .info .pv-arrows-cont .pv-arrow p {\n                  font-family: 'Roboto-regular';\n                  color: #000;\n                  font-size: 8px; }\n:host .paneles .panel-cartera .wallet-info .info-row .info .pv-arrows-cont .pv-arrow .arrow {\n                  margin-left: 3px;\n                  max-width: 21px;\n                  max-height: 9px; }\n:host .paneles .panel-cartera .wallet-buttons {\n        width: 100%;\n        height: calc(22% - 40px);\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        padding: 20px 0; }\n:host .paneles .panel-cartera .wallet-buttons .wallet-div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          width: 60%; }\n:host .green-button {\n    background-color: #008A98;\n    color: #fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-family: 'Novecento-Demibold'; }\n:host .green-button:hover {\n      cursor: pointer;\n      background-color: #329faa; }\n:host .disabled {\n    background-color: #767676; }\n:host .disabled:hover {\n      cursor: not-allowed !important;\n      background-color: #767676 !important; }\n:host .extra-large {\n    width: 200px;\n    height: 30px; }\n:host .modal .modal-bg {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #ccc;\n    opacity: 0.7;\n    z-index: 5; }\n:host .modal .modal-content {\n    z-index: 6;\n    position: fixed;\n    top: calc(50% - 324px);\n    left: calc(50% - 361px);\n    width: 30%;\n    min-width: 722px;\n    max-width: 722px; }\n:host .modal .modal-content.success {\n      top: calc(50% - 80px); }\n:host .modal .modal-content .header {\n      width: 100%;\n      background-color: #008895;\n      border-color: #008895;\n      color: #fff;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      position: relative;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 5px 0;\n      border-top-left-radius: 15px;\n      border-top-right-radius: 15px;\n      min-height: 41px;\n      max-height: 45px;\n      font-size: 24px; }\n:host .modal .modal-content .header p {\n        font-family: 'Novecento-Demibold'; }\n:host .modal .modal-content .header .close-modal {\n        position: absolute;\n        right: 20px;\n        font-size: 20px; }\n:host .modal .modal-content .header .close-modal:hover {\n          cursor: pointer; }\n:host .modal .modal-content .header .gif-exito {\n        height: 50px; }\n:host .modal .modal-content .body {\n      border-color: #008895;\n      border-bottom-left-radius: 15px;\n      border-bottom-right-radius: 15px;\n      background-color: #fff;\n      padding: 20px 25px;\n      width: calc(100% - 50px);\n      height: calc(100% - 40px);\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n:host .modal .modal-content .body .body-wrapper {\n        height: 100%;\n        width: 100%; }\n:host .modal .modal-content .body .message {\n        height: 10%;\n        margin-bottom: 15px; }\n:host .modal .modal-content .body .message p {\n          font-size: 20px;\n          text-align: left;\n          font-family: 'Roboto Medium'; }\n:host .modal .modal-content .body .message .last-client-msg {\n          margin-top: 5px;\n          font-size: 10px;\n          color: #C12730;\n          text-align: right; }\n:host .modal .modal-content .body .message .mensaje-centrado {\n          text-align: center; }\n:host .modal .modal-content .body .wallets-container {\n        position: relative;\n        width: 100%;\n        height: 90%;\n        min-height: 450px;\n        max-height: 450px;\n        border-top: 1px solid #BFC0C7;\n        border-bottom: 1px solid #BFC0C7;\n        overflow-y: auto; }\n:host .modal .modal-content .body .wallets-container .wallet-item {\n          width: 100%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          border-bottom: 2px solid #BFC0C7; }\n:host .modal .modal-content .body .wallets-container .wallet-item .row {\n            width: 100%;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center; }\n:host .modal .modal-content .body .wallets-container .wallet-item .row .wallet-info {\n              color: #008895; }\n:host .modal .modal-content .body .wallets-container .wallet-item .row .wallet-info span {\n                font-family: 'Roboto-regular'; }\n:host .modal .modal-content .body .wallets-container .wallet-item .row .radio {\n              width: 20px;\n              height: 20px;\n              margin-right: 10px; }\n:host .modal .modal-content .body .wallets-container .wallet-item .row .radio:hover {\n                cursor: pointer; }\n:host .modal .modal-content .body .wallets-container .wallet-item .row:first-child {\n              padding-top: 10px; }\n:host .modal .modal-content .body .wallets-container .wallet-item .row:nth-child(2) {\n              padding: 8px 0;\n              -webkit-box-pack: start;\n                  -ms-flex-pack: start;\n                      justify-content: flex-start; }\n:host .modal .modal-content .body .wallets-container .wallet-item .row:nth-child(2) .wallet-role {\n                width: 15%;\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-orient: vertical;\n                -webkit-box-direction: normal;\n                    -ms-flex-direction: column;\n                        flex-direction: column;\n                -webkit-box-pack: center;\n                    -ms-flex-pack: center;\n                        justify-content: center;\n                -webkit-box-align: center;\n                    -ms-flex-align: center;\n                        align-items: center; }\n:host .modal .modal-content .body .wallets-container .wallet-item .row:nth-child(2) .wallet-role img {\n                  width: 28px;\n                  height: 32px; }\n:host .modal .modal-content .body .wallets-container .wallet-item .row:nth-child(2) .wallet-role p {\n                  margin-top: 12px;\n                  font-size: 10px;\n                  font-family: 'Roboto-regular'; }\n:host .modal .modal-content .body .options {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        margin-top: 20px; }\n:host .fant-value {\n    color: #008895 !important; }\n:host .of-value {\n    color: #279E96 !important; }\n:host .od-value {\n    color: #008895 !important;\n    opacity: 0.8; }\n:host .cliente {\n    width: 20%;\n    height: 200px; }\n:host .cliente:hover {\n      cursor: -webkit-grab;\n      cursor: grab; }\n.cliente:active {\n  cursor: -webkit-grabbing;\n  cursor: grabbing; }\n@media (max-width: 1850px) and (max-height: 1170px) {\n  :host .panel-lista-clientes {\n    width: calc(40% - 38px); }\n  :host .panel-cartera {\n    width: calc(60% - 38px);\n    height: 100%;\n    background-color: #ECEEF0;\n    padding: 0 19px; }\n    :host .panel-cartera .clientes-cartera {\n      width: 100%;\n      height: 50%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      position: relative;\n      border-bottom: 1px solid #979797; }\n  :host .cliente {\n    width: 25%; }\n    :host .cliente.en-cartera {\n      width: 25%; }\n  :host .extra-large {\n    width: 150px !important; } }\n@media (max-height: 1170px) {\n  :host .panel-cartera .clientes-cartera {\n    height: 60% !important; }\n  :host .panel-cartera .panel-cartera-info {\n    height: 40% !important; }\n  :host .modal .modal-content {\n    top: 22% !important; } }\n@media (max-height: 870px) {\n  :host .panel-cartera {\n    overflow-y: auto; }\n    :host .panel-cartera .clientes-cartera {\n      height: calc(50% - 1px) !important; }\n    :host .panel-cartera .panel-cartera-info {\n      height: 50% !important; }\n      :host .panel-cartera .panel-cartera-info .wallet-info {\n        padding: 5px 0 !important;\n        height: calc(30% - 10px); }\n        :host .panel-cartera .panel-cartera-info .wallet-info .info-row .info .pv-arrows-cont {\n          -webkit-box-orient: vertical !important;\n          -webkit-box-direction: normal !important;\n              -ms-flex-direction: column !important;\n                  flex-direction: column !important;\n          -webkit-box-align: center !important;\n              -ms-flex-align: center !important;\n                  align-items: center !important;\n          position: relative !important;\n          bottom: -10% !important; }\n          :host .panel-cartera .panel-cartera-info .wallet-info .info-row .info .pv-arrows-cont .pv-arrow {\n            width: 100% !important; }\n            :host .panel-cartera .panel-cartera-info .wallet-info .info-row .info .pv-arrows-cont .pv-arrow p {\n              font-family: 'Roboto-regular';\n              color: #000;\n              font-size: 10px !important;\n              height: 12px; }\n            :host .panel-cartera .panel-cartera-info .wallet-info .info-row .info .pv-arrows-cont .pv-arrow .arrow {\n              margin-left: 3px;\n              max-width: 21px;\n              max-height: 9px; }\n  :host .wallet-buttons {\n    padding: 19px 0 !important; }\n  :host .extra-large {\n    width: 150px !important; }\n  :host .cliente {\n    width: 33%; }\n    :host .cliente.en-cartera {\n      width: 25% !important;\n      height: 150px !important; }\n  :host .modal .modal-content {\n    top: 8% !important; }\n    :host .modal .modal-content.success {\n      top: calc(50% - 40px) !important; } }\n@media (max-width: 1657px) {\n  :host .panel-cartera .panel-cartera-info .wallet-form .cmb-row .cmb-container .cmb-label {\n    font-size: 12px !important; } }\n"

/***/ }),

/***/ "./src/app/components/catalogo/crear-cartera/crear-cartera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearCarteraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_filter_menu_filterMenu_component__ = __webpack_require__("./src/app/components/shared/filter-menu/filterMenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__class_catalogo_cartera_class__ = __webpack_require__("./src/app/class/catalogo/cartera.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__class_catalogo_cliente_class__ = __webpack_require__("./src/app/class/catalogo/cliente.class.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CrearCarteraComponent = /** @class */ (function () {
    function CrearCarteraComponent(catalogoService, http, router, coreContainer, route, dragulaService) {
        this.catalogoService = catalogoService;
        this.http = http;
        this.router = router;
        this.coreContainer = coreContainer;
        this.route = route;
        this.dragulaService = dragulaService;
        this.linksCarteras = [
            { label: 'Clientes', path: '/protected/catalogo/clientes' },
            { label: 'Carteras', path: '/protected/catalogo/clientes/carteras' },
        ];
        this.filtros = __WEBPACK_IMPORTED_MODULE_5__shared_filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].filtrosNuevaCartera;
        this.labelButton = 'GUARDAR';
        this.homePath = '/protected/catalogo';
        this.filterSelected = { index: 0, value: 'TODOS', name: 'TODOS' };
        this.filterInstance = { label: 'TODOS', value: 'TODOS' };
        this.totalCarteras = 0;
        this.filterClientName = '';
        this.clientesSinCartera = [];
        this.clientesSinCarteraDisplay = [];
        this.clientescartera = [];
        this.cartera = { idCartera: 0, nombreCartera: '', clientes: [], publicada: false };
        this.nuevosClientesEnCartera = [];
        this.options = {
            revertOnSpill: true
        };
        this.coverListaClientes = false;
        this.esacList = [{ nombre: '--NINGUNO--', key: 0 }];
        this.esacSelected = { nombre: '--NINGUNO--', key: 0 };
        this.evtList = [{ nombre: '--NINGUNO--', key: 0 }];
        this.evtSelected = { nombre: '--NINGUNO--', key: 0 };
        this.evList = [{ nombre: '--NINGUNO--', key: 0 }];
        this.evSelected = { nombre: '--NINGUNO--', key: 0 };
        this.cobradorList = [{ nombre: '--NINGUNO--', key: 0 }];
        this.cobradorSelected = { nombre: '--NINGUNO--', key: 0 };
        this.mensajeroList = [{ nombre: '--NINGUNO--', key: 0 }];
        this.mensajeroSelected = { nombre: '--NINGUNO--', key: 0 };
        this.modalMoverCliente = false;
        this.modalSuccess = false;
        this.modalWalletSelected = -1;
        this.listaCarteras = [];
        this.idCarteraAMover = 0;
        this.mensaje = '';
        // Se obtiene el id de la función para despues definir el área con la que se guardará la cartera.
        this.idFuncion = __WEBPACK_IMPORTED_MODULE_7__services_session_session_service__["a" /* SessionUser */].getInstance().getUser() ? __WEBPACK_IMPORTED_MODULE_7__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().idFuncion : 22;
        this.rolUsuario = this.obtenerFuncionUsuario();
        this.setDragulaDropModelSubscriber();
    }
    CrearCarteraComponent.prototype.setDragulaDropModelSubscriber = function () {
        /* this.dragulaService.dropModel.subscribe((value) => {
           // la condición pregunta si el cliente siendo arrastrade priviene de la lista de clientes sin cartera y se soltó en los clientes de la cartera. Si es así entonces agrega el nuevo cliente al arreglo de nuevosClientesEnCartera
           if(value[1].id && value[2].id === 'clientes-cartera' && value[3].id === 'clientes'){
             let cliente = this.cartera.clientes.find(cliente => {
               return cliente.getId() === Number(value[1].id)
             });
             this.nuevosClientesEnCartera = [...this.nuevosClientesEnCartera, cliente];
           } else if(value[1].id && value[2].id === 'clientes' && value[3].id === 'clientes-cartera') {
           // la condición pregunta si el cliente siendo arrastrado proviene de la lista de los clientes de la cartera y está siendo soltado en la lista de clientes sin cartera. de ser así obtiene al cliente desde su nueva posición en el
           // arreglo de clientesSinCarteraDisplay.
             let cliente = this.clientesSinCarteraDisplay.find((cliente:Cliente) => cliente.getId() === Number(value[1].id));
             //la condición pregunta si el cliente es encontrado, si es un cliente original(inició en la lista de clientes de la cartera) y si la cartera no ha sido publicada, de ser así niega el drop y muestra el modal de mover cliente.
             if(cliente && cliente.esOriginal  && this.cartera.publicada){
               setTimeout(() => {
                 this.cartera = {
                   ...this.cartera,
                   clientes: [...this.cartera.clientes, cliente]
                 }
                 this.clientesSinCarteraDisplay = this.clientesSinCarteraDisplay.filter((cliente:Cliente) => cliente.getId() !== Number(value[1].id));
                 this.modalMoverCliente = true;
                 // Si la lista de carteras del modal mover cliente se encuentra vacía entonces llama a servicio para obtener el listado de carteras
                 if(this.listaCarteras.length === 0){
                   this.catalogoService.obtenerCarteras().subscribe(
                     data => {
                       let carteras = []
                       data.current.map ( cartera => {
                         carteras.push(Cartera.builder(cartera))
                       })
                       this.listaCarteras = carteras
                       this.idCarteraAMover = Number(value[1].id)
                     }
                   );
                 }
               }, 100)
             } else {
               this.nuevosClientesEnCartera = this.nuevosClientesEnCartera.filter((cliente:Cliente) => cliente.getId() !== Number(value[1].id));
             }
           }
     
           //Al moverse un cliente de listado hace que se tenga que recalcular los valores mostrados en la interfaz, por lo que aquí se vuelve a recalcular dichos valores.
           let datos = this.cartera.clientes.reduce( (acum,cliente) => ({
             objetivoDeseado: acum.objetivoDeseado + cliente.objetivoDeseado,
             objetivoFundamental: acum.objetivoFundamental + cliente.objetivoFundamental,
             facturaAnt: acum.facturaAnt + cliente.facturaAnt,
             facturaAct: acum.facturaAct + cliente.facturaAct,
             proyeccionVenta: acum.proyeccionVenta + cliente.proyeccionVenta
           }), {objetivoDeseado: 0, objetivoFundamental: 0, facturaAnt: 0, facturaAct: 0, proyeccionVenta: 0});
     
           let fechaHoy = new Date(Date.now());
           this.cartera.objetivoDeseado = datos.objetivoDeseado
           this.cartera.objetivoFundamental = datos.objetivoFundamental
           this.cartera.facturacionActual = datos.facturaAct
           this.cartera.facturacionAnterior = datos.facturaAnt
           this.cartera.proyeccionVenta = datos.facturaAct / (fechaHoy.getMonth()+1) * 12
         });*/
    };
    CrearCarteraComponent.prototype.ngOnInit = function () {
        this.cartera.idCartera = Number(this.route.snapshot.paramMap.get('id'));
        this.coreContainer.openModal(0);
        this.obtenerClientesSinCartera();
        this.obtenerCombosDeCartera();
        if (this.cartera.idCartera !== 0) {
            this.obtenerCartera();
        }
        if (this.cartera.idCartera === 0) {
            this.linksCarteras.push({ label: 'Nueva Cartera', path: '' });
            var area = this.obtenerFuncionUsuario();
            this.cartera.area = area;
        }
    };
    CrearCarteraComponent.prototype.obtenerFuncionUsuario = function () {
        return this.idFuncion === 39 ? 'Finanzas' : this.idFuncion === 3 ? 'Ventas' : this.idFuncion === 37 ? 'ESAC' : (this.idFuncion === 1 || this.idFuncion === 21 || this.idFuncion === 22) ? 'Direccion' : '';
    };
    CrearCarteraComponent.prototype.obtenerClientesSinCartera = function () {
        var _this = this;
        this.catalogoService.obtenerClientesSinCartera().subscribe(function (data) {
            var arr = [];
            for (var _i = 0, _a = data.current; _i < _a.length; _i++) {
                var clienteData = _a[_i];
                var cliente = new __WEBPACK_IMPORTED_MODULE_9__class_catalogo_cliente_class__["a" /* Cliente */]();
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
                cliente.esOriginal = false;
                cliente.idIndustria = cliente.idIndustria;
                arr = arr.concat([cliente]);
            }
            _this.clientesSinCartera = arr;
            _this.clientesSinCarteraDisplay = arr;
            _this.totalCarteras = _this.clientesSinCarteraDisplay.length;
            if (_this.cartera.clientes.length > 0) {
                _this.clientesSinCartera = _this.clientesSinCartera.filter(function (cliente) {
                    return !_this.cartera.clientes.find(function (clienteCartera) { return clienteCartera.id === cliente.id; });
                });
                _this.clientesSinCarteraDisplay = _this.clientesSinCartera.slice(0);
                _this.totalCarteras = _this.clientesSinCarteraDisplay.length;
            }
            if (_this.cartera.idCartera === 0) {
                _this.coreContainer.closeModal(0);
            }
        });
    };
    CrearCarteraComponent.prototype.obtenerCombosDeCartera = function () {
        var _this = this;
        this.catalogoService.obtenerCombosNuevaCartera().subscribe(function (data) {
            for (var _i = 0, _a = data.current; _i < _a.length; _i++) {
                var valorCombo = _a[_i];
                _this.setCombosData(valorCombo);
                _this.esacSelected = { nombre: '--NINGUNO--', key: 0 };
                _this.evSelected = { nombre: '--NINGUNO--', key: 0 };
                _this.evtSelected = { nombre: '--NINGUNO--', key: 0 };
                _this.cobradorSelected = { nombre: '--NINGUNO--', key: 0 };
                _this.mensajeroSelected = { nombre: '--NINGUNO--', key: 0 };
            }
        });
    };
    CrearCarteraComponent.prototype.obtenerCartera = function () {
        var _this = this;
        this.catalogoService.obtenerCarterasPorUsuario({ idFuncion: 0, idResponsable: 0, idCartera: Number(this.cartera.idCartera) })
            .subscribe(function (data) {
            data.current.map(function (clienteData, index) {
                var cartera;
                if (index === 0) {
                    cartera = new __WEBPACK_IMPORTED_MODULE_8__class_catalogo_cartera_class__["a" /* Cartera */]();
                    cartera.setIdCartera(clienteData.idCartera);
                    cartera.setNombreCartera(clienteData.cart_nombre);
                    cartera.setRuta(clienteData.ruta);
                    cartera.setIndustria(clienteData.industria);
                    cartera.idIndustria = clienteData.idIndustria;
                    cartera.setEstrella(clienteData.importancia);
                    cartera.setTriangulo(clienteData.dificultad);
                    cartera.setFolio(clienteData.folio);
                    cartera.idEsac = clienteData.cart_idEsac;
                    cartera.setEsac(clienteData.cart_nombreEsac);
                    cartera.idEv = clienteData.cart_idEv;
                    cartera.setEv(clienteData.cart_nombreEv);
                    cartera.idEvt = clienteData.cart_idEVT;
                    cartera.setEvt(clienteData.cart_nombreEVT);
                    cartera.idCobrador = clienteData.cart_idCobrador;
                    cartera.setCobrador(clienteData.cart_nombreCobrador);
                    cartera.idMensajero = clienteData.cart_idMensajero;
                    cartera.setMensajero(clienteData.cart_nombreMensajero);
                    cartera.setElaboro(clienteData.cart_nombreElaboro);
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
                    var cliente = new __WEBPACK_IMPORTED_MODULE_9__class_catalogo_cliente_class__["a" /* Cliente */]();
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
                    cliente.esOriginal = true;
                    cartera.setClientes([cliente]);
                    _this.cartera = cartera;
                }
                else {
                    cartera = _this.cartera;
                    cartera.setEstrella(cartera.getEstrella() || clienteData.importancia);
                    cartera.setTriangulo(cartera.getTriangulo() || clienteData.dificultad);
                    var cliente = new __WEBPACK_IMPORTED_MODULE_9__class_catalogo_cliente_class__["a" /* Cliente */]();
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
                    cliente.esOriginal = true;
                    cartera.setClientes(cartera.getClientes().concat([cliente]));
                    cartera.setNumeroClientes(cartera.getNumeroClientes() + 1);
                    cartera.idIndustria = clienteData.idIndustria;
                }
            });
            _this.esacSelected = _this.cartera.idEsac !== 0 ? { nombre: _this.cartera.esac, key: _this.cartera.idEsac } : { nombre: '--NINGUNO--', key: 0 };
            _this.evSelected = _this.cartera.idEv !== 0 ? { nombre: _this.cartera.ev, key: _this.cartera.idEv } : { nombre: '--NINGUNO--', key: 0 };
            _this.evtSelected = _this.cartera.idEvt !== 0 ? { nombre: _this.cartera.evt, key: _this.cartera.idEvt } : { nombre: '--NINGUNO--', key: 0 };
            _this.cobradorSelected = _this.cartera.idCobrador !== 0 ? { nombre: _this.cartera.cobrador, key: _this.cartera.idCobrador } : { nombre: '--NINGUNO--', key: 0 };
            _this.mensajeroSelected = _this.cartera.idMensajero !== 0 ? { nombre: _this.cartera.mensajero, key: _this.cartera.idMensajero } : { nombre: '--NINGUNO--', key: 0 };
            _this.linksCarteras.push({ label: _this.cartera.nombreCartera, path: '/protected/catalogo/clientes/carteras/' + _this.cartera.idCartera });
            _this.linksCarteras.push({ label: 'Editar', path: '' });
            var datos = _this.cartera.clientes.reduce(function (acum, cliente) { return ({
                objetivoDeseado: acum.objetivoDeseado + cliente.objetivoDeseado,
                objetivoFundamental: acum.objetivoFundamental + cliente.objetivoFundamental,
                facturaAnt: acum.facturaAnt + cliente.facturaAnt,
                facturaAct: acum.facturaAct + cliente.facturaAct,
                proyeccionVenta: acum.proyeccionVenta + cliente.proyeccionVenta
            }); }, { objetivoDeseado: 0, objetivoFundamental: 0, facturaAnt: 0, facturaAct: 0, proyeccionVenta: 0 });
            var fechaHoy = new Date(Date.now());
            _this.cartera.objetivoDeseado = datos.objetivoDeseado;
            _this.cartera.objetivoFundamental = datos.objetivoFundamental;
            _this.cartera.facturacionActual = datos.facturaAct;
            _this.cartera.facturacionAnterior = datos.facturaAnt;
            setTimeout(function () {
                _this.cartera = __assign({}, _this.cartera, { cart_updateESAC: false, cart_updateEV: false, cart_updateCOBRADOR: false, cart_updateEVT: false });
                _this.coreContainer.closeModal(0);
            }, 1500);
            _this.clientesSinCartera = _this.clientesSinCartera.filter(function (cliente) {
                return !_this.cartera.clientes.find(function (clienteCartera) { return clienteCartera.id === cliente.id; });
            });
            _this.clientesSinCarteraDisplay = _this.clientesSinCartera.slice(0);
            _this.totalCarteras = _this.clientesSinCarteraDisplay.length;
        });
    };
    CrearCarteraComponent.prototype.getOptions = function ($event) {
        console.log($event);
        this.filterInstance = { label: $event.valor, value: $event.valor === 'AA+' ? 'AAplus' : $event.valor === 'DISTRIBUIDORES' ? 'DISTRIBUIDOR' : $event.valor === 'BAJOS' ? 'BAJO' : $event.valor };
        this.filterSelected = __assign({}, $event, { value: $event.valor });
        this.setFilter();
    };
    CrearCarteraComponent.prototype.setCombosData = function (vc) {
        switch (vc.tipo) {
            case 'Esac':
                this.esacList = this.esacList.concat([{ nombre: vc.valor, key: vc.idValorCombo }]);
                break;
            case 'evt':
                this.evtList = this.evtList.concat([{ nombre: vc.concepto, key: vc.valor }]);
                break;
            case 'ev':
                this.evList = this.evList.concat([{ nombre: vc.concepto, key: vc.valor }]);
                break;
            case 'cobrador':
                this.cobradorList = this.cobradorList.concat([{ nombre: vc.concepto, key: vc.valor }]);
                break;
            case 'msj':
                this.mensajeroList = this.cobradorList.concat([{ nombre: vc.concepto, key: vc.valor }]);
                break;
        }
    };
    CrearCarteraComponent.prototype.changeClientsFilter = function ($event) {
        this.filterClientName = $event;
        this.filterSelected = $event;
        this.setFilter();
    };
    CrearCarteraComponent.prototype.setFilter = function () {
        var _this = this;
        var newArr = this.clientesSinCartera.filter(function (cliente) {
            if (_this.filterInstance.label !== 'TODOS') {
                if (_this.filterClientName && _this.filterClientName !== '') {
                    return cliente.nivelIngreso === _this.filterInstance.value && (cliente.nombre.toLowerCase().startsWith(_this.filterClientName.toLowerCase()) || cliente.nombre.toLowerCase().endsWith(_this.filterClientName.toLowerCase()) || cliente.nombre.toLowerCase() === _this.filterClientName.toLowerCase());
                }
                return cliente.nivelIngreso === _this.filterInstance.value;
            }
            if (_this.filterClientName && _this.filterClientName !== '') {
                return (cliente.nombre.toLowerCase().startsWith(_this.filterClientName.toLowerCase()) || cliente.nombre.toLowerCase().endsWith(_this.filterClientName.toLowerCase()) || cliente.nombre.toLowerCase().nombre === _this.filterClientName.toLowerCase());
            }
            return true;
        });
        this.clientesSinCarteraDisplay = newArr;
        this.totalCarteras = this.clientesSinCarteraDisplay.length;
    };
    CrearCarteraComponent.prototype.changeName = function ($event) {
        this.cartera.nombreCartera = $event.target.value;
    };
    CrearCarteraComponent.prototype.calcularCambioEnProcentaje = function (valorAntiguo, valorNuevo) {
        return ((valorNuevo - valorAntiguo) / valorAntiguo * 100);
    };
    CrearCarteraComponent.prototype.guardarCambios = function (publicar) {
        var _this = this;
        if (publicar === void 0) { publicar = false; }
        this.coreContainer.openModal(0);
        this.cartera.clientes = this.cartera.clientes.map(function (cliente) { return (__assign({}, cliente, { idCliente: cliente.id })); });
        console.log(this.cartera);
        var dataBody = {
            idUsuario: 0,
            cartera: __assign({}, this.cartera, { area: this.obtenerFuncionUsuario(), idcartera: this.cartera.idCartera, nombre: this.cartera.nombreCartera, industria: !this.cartera.idIndustria ? 112 : this.cartera.idIndustria, usuario: 27, publicada: publicar || this.cartera.publicada ? true : false, cart_updatePublicada: this.cartera.publicada && publicar ? publicar : this.cartera.publicada, cart_updateESAC: this.cartera.cart_updateESAC ? this.cartera.cart_updateESAC : false, cart_updateEV: this.cartera.cart_updateEV ? this.cartera.cart_updateEV : false, cart_updateCOBRADOR: this.cartera.cart_updateCOBRADOR ? this.cartera.cart_updateCOBRADOR : false, cart_updateEVT: this.cartera.cart_updateEVT ? this.cartera.cart_updateEVT : false, cart_updateMENSAJERO: this.cartera.cart_updateMENSAJERO ? this.cartera.cart_updateMENSAJERO : false })
        };
        this.catalogoService.actualizarCartera(dataBody).subscribe(function (data) {
            if (Number(_this.route.snapshot.paramMap.get('id')) === 0 && data.current !== -1) {
                _this.cartera.idCartera = data.current;
                _this.linksCarteras[_this.linksCarteras.length - 1] = { label: _this.cartera.nombreCartera, path: '/protected/catalogo/clientes/carteras/' + _this.cartera.idCartera };
                _this.linksCarteras.push({ label: 'Editar', path: '' });
                _this.mensaje = 'La cartera ha sido creada exitosamente';
                _this.modalSuccess = true;
                setTimeout(function () {
                    _this.modalSuccess = false;
                }, 2000);
            }
            else {
                _this.linksCarteras[_this.linksCarteras.length - 2] = { label: _this.cartera.nombreCartera, path: '/protected/catalogo/clientes/carteras/' + _this.cartera.idCartera };
                _this.mensaje = 'El cartera ha sido actualizada exitosamente';
                _this.modalSuccess = true;
                if (publicar) {
                    alert('actualiza cartera a ser publicada');
                    _this.cartera.publicada = true;
                }
                setTimeout(function () {
                    _this.modalSuccess = false;
                }, 2000);
            }
            _this.coreContainer.closeModal(0);
        });
    };
    CrearCarteraComponent.prototype.getComboValue = function ($event, property) {
        this.cartera[property] = Number($event.key);
        this.cartera['cart_update' + property.toUpperCase()] = true;
    };
    CrearCarteraComponent.prototype.selectNewWalletForCliente = function (index) {
        this.modalWalletSelected = index;
    };
    CrearCarteraComponent.prototype.moverClienteACartera = function () {
        var _this = this;
        this.coreContainer.openModal(0);
        var dataBody = {
            idCliente: this.idCarteraAMover,
            idCartera: this.listaCarteras[this.modalWalletSelected].idCartera,
            idCarteraAnt: this.cartera.idCartera
        };
        this.catalogoService.moverClienteACartera(dataBody).subscribe(function (data) {
            if (data.current.moverCliente) {
                _this.cartera = __assign({}, _this.cartera, { clientes: _this.cartera.clientes.filter(function (cliente) { return cliente.id !== _this.idCarteraAMover; }).slice() });
                _this.mensaje = 'El cliente se cambió de cartera correctamente';
                _this.modalSuccess = true;
                setTimeout(function () {
                    _this.modalSuccess = false;
                    if (data.current.carteraBorrada) {
                        _this.router.navigate(['/protected/catalogo/clientes/carteras']);
                    }
                }, 3000);
            }
            _this.modalMoverCliente = false;
            _this.coreContainer.closeModal(0);
        });
    };
    CrearCarteraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-crear-cartera',
            template: __webpack_require__("./src/app/components/catalogo/crear-cartera/crear-cartera.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/crear-cartera/crear-cartera.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_catalogo_catalogo_service__["a" /* CatalogoService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_dragula__["b" /* DragulaService */]])
    ], CrearCarteraComponent);
    return CrearCarteraComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/crear-cartera/crear-cartera.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearCarteraModule", function() { return CrearCarteraModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__crear_cartera_routing_module__ = __webpack_require__("./src/app/components/catalogo/crear-cartera/crear-cartera-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__crear_cartera_component__ = __webpack_require__("./src/app/components/catalogo/crear-cartera/crear-cartera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_catalogo_catalogo_service__ = __webpack_require__("./src/app/services/catalogo/catalogo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CrearCarteraModule = /** @class */ (function () {
    function CrearCarteraModule() {
    }
    CrearCarteraModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__crear_cartera_routing_module__["a" /* CrearCarteraRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_dragula__["a" /* DragulaModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_drop_list_drop_list_module__["a" /* DropListModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__crear_cartera_component__["a" /* CrearCarteraComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_catalogo_catalogo_service__["a" /* CatalogoService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__crear_cartera_component__["a" /* CrearCarteraComponent */]
            ]
        })
    ], CrearCarteraModule);
    return CrearCarteraModule;
}());



/***/ })

});
//# sourceMappingURL=crear-cartera.module.chunk.js.map