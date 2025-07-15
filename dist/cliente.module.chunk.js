webpackJsonp(["cliente.module"],{

/***/ "./src/app/components/catalogo/active-button/activeButton.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <button class=\"button active\" (click)=\"onClick(1)\">Habilitados</button>\n  <button class=\"button\" (click)=\"onClick(0)\">Deshabilitados</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/catalogo/active-button/activeButton.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: calc(100% - 32px); }\n:host div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    width: 100%; }\n:host div .button {\n      width: 200px; }\n:host div .button.active {\n        background-color: #437B8F;\n        color: #fff;\n        font-weight: bold;\n        border-color: #437B8F; }\n"

/***/ }),

/***/ "./src/app/components/catalogo/active-button/activeButton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveButtonComponent; });
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

var ActiveButtonComponent = /** @class */ (function () {
    function ActiveButtonComponent() {
        this.emitAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ActiveButtonComponent.prototype.ngOnInit = function () {
    };
    ActiveButtonComponent.prototype.onClick = function (active) {
        console.log("Diste click para " + (active ? 'habilitar' : 'deshabilitar'));
        this.emitAction.emit(active);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ActiveButtonComponent.prototype, "emitAction", void 0);
    ActiveButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'active-button',
            template: __webpack_require__("./src/app/components/catalogo/active-button/activeButton.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/active-button/activeButton.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ActiveButtonComponent);
    return ActiveButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/cliente/cliente-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cliente_component__ = __webpack_require__("./src/app/components/catalogo/cliente/cliente.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClienteRoutingModule = /** @class */ (function () {
    function ClienteRoutingModule() {
    }
    ClienteRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__cliente_component__["a" /* ClienteComponent */],
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ClienteRoutingModule);
    return ClienteRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/catalogo/cliente/cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<pn-header-bc [opciones]=\"opcion\"> </pn-header-bc>\n\n<div class=\"header-menu\">\n  <div class=\"white_space\"></div>\n  <div class=\"radiop\">\n\n    <img class=\"animationZoom\" (click)=\"Habilitar(0)\" [src]=\"HabilidatosSelected ? 'assets/Images/radio_selected.svg ' : 'assets/Images/radio_unselected.svg' \"\n      (click)=\"Habilitar(1)\" style=\" cursor:pointer\" width=\"14px\" height=\"14px\" alt=\"radioInactive\">\n    <p style=\"cursor: pointer; margin-left: 10px\" (click)=\"Habilitar(1)\">Habilitados</p>\n\n    <img class=\" animationZoom\" (click)=\"Habilitar(0)\" [src]=\"!HabilidatosSelected ?'assets/Images/radio_selected.svg' : 'assets/Images/radio_unselected.svg' \"\n      (click)=\"Habilitar(2)\" style=\"margin-left: 40px; cursor:pointer\" width=\"14px\" height=\"14px\" alt=\"radioInactive\">\n    <p style=\"cursor: pointer; margin-left: 10px\" (click)=\"Habilitar(0)\">Deshabilitados</p>\n  </div>\n  <div class=\"espacio_bco\"></div>\n  <button (click)=\"clickToExport()\" class=\"exportar\">\n    <img src='assets/Images/exportar.png' width=\"16px \">\n  </button>\n</div>\n\n<div class=\"container\" style=\"height: calc(80vh);\">\n  <div class=\"filter-container\">\n    <filter-menu [filtros]=\"filtros\" [filterSelected]=\"filterSelected\" (sendValue)=\"getOptions($event)\"></filter-menu>\n  </div>\n  <div class=\"buscar\">\n    <div>\n      <div class=\"lupa\">\n        <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\n      </div>\n      <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"clientes\" />\n    </div>\n  </div>\n  <hr>\n  <div *ngIf=\"clientesDisplay.length>0; else cargando\">\n    <div *ngIf=\"isByCorporativo==false; else ByCorp\" class=\"tabla-clientes \">\n      <div style=\"margin-top:5px;width: 100%; display: flex; flex-direction: row; flex-wrap: wrap; margin-left: 2.5%;\">\n        <div *ngFor=\"let cliente of ClientesSearched; let i = index\" style=\"display: flex; flex-wrap: wrap\">\n          <div [ngClass]=\"'cliente' \">\n            <div class=\"flip-container\" onclick=\"this.classList.toggle('hover');\">\n              <div class=\"flipper\">\n                <div class=\"front\">\n                  <!-- front content -->\n                  <div class=\"headerContentFront\">\n                  </div>\n                  <div class=\"centerPagination\">\n                    <img class=\" ima animationZoom\" [src]=\"cliente.imagen !== null ? 'assets/Images/clientes/' + cliente.idCliente+'.png' : 'assets/Images/clientes/default.png'\"\n                    />\n                    <!-- CLIENTES TIENEN IMAGEN PERO CAMPO EN BD SIGUE SIENDO NULO -->\n                    <!-- <img [src]=\"'assets/Images/clientes/' + cliente.idCliente+'.png'\" onerror=\"this.src = 'assets/Images/clientes/default_select.png'\" /> -->\n                  </div>\n                  <div class=\"footContent\">\n                    <span *ngIf=\"cliente.imagen==null \">{{cliente.nombre}}</span>\n\n                  </div>\n                </div>\n                <div class=\"back\">\n                  <!-- back content -->\n                  <div class=\"backContent\">\n                    <div class=\"crossContent\" style=\"width: 100%;display: flex; justify-content: flex-end; align-content: center;align-items: center;\">\n                      <img src=\"assets/Images/tachecito.png \" height=\"20px\" width=\"20px\" alt=\"Cerrar\">\n                    </div>\n                    <div class=\"headerBackCartera CVerde\">\n                      {{cliente.nombre}}\n\n                    </div>\n\n                    <hr>\n                    <div class=\"backCenterContent\">\n\n                      <p style=\"width:100%;font-weight: 100\">\n                        {{cliente.nivelIngreso}}\n                      </p>\n\n                      <p style=\"width:100%;font-weight: 100\">\n                        {{cliente.rol}}&nbsp; {{cliente.sector}}\n                      </p>\n                      <p style=\"width:100%;font-weight: 100\">\n                        {{cliente.industria}}\n                      </p>\n                      <p style=\"width:100%;font-weight: 100\">\n                        {{cliente.ruta}}\n                      </p>\n                    </div>\n                  </div>\n                  <div class=\"footContentBack\">\n                    <div class=\"iconsContent\">\n                    </div>\n                  </div>\n                  <!--(click)=\"Entrar($event)\"-->\n                  <a (click)=\"Entrar($event)\">\n                    <div class=\"buttonCardContent\">\n                      <div class=\"buttonCardBtn\">\n                        <h4>Entrar</h4>\n                      </div>\n                    </div>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div style=\"display: flex; justify-content: center;align-content: center;align-items: center; \">\n            <hr [ngClass]=\"'v' + (i !== 0 && (i+1) % carterasPorFila === 0  ?' final': '')\" />\n          </div>\n          <hr [ngClass]=\"'h'\"/>\n        </div>\n      </div>\n    </div>\n\n    <ng-template #ByCorp>\n      <div class=\"tabla-clientes2 \">\n        <div *ngFor=\"let Grupo of clientesAgrupados; let i = index\">\n          <h3 style=\"margin-bottom: 10px; margin-top: 30px;margin-left: 30px; color:#739ba5; \">\n            {{Grupo.nombreGrupo}}\n          </h3>\n          <div style=\"margin-top:10px;width: 100%; display: flex; flex-direction: row; flex-wrap: wrap;\">\n            <div *ngFor=\"let cliente of Grupo.clientes; let i = index\" [ngClass]=\"'cliente' + (i !== 0 && (i+1) % Grupo.clientes.length == 0  ?' final': '')\">\n              <div>\n                <div class=\"flip-container\" onclick=\"this.classList.toggle('hover');\">\n                  <div class=\"flipper\">\n                    <div class=\"front\">\n                      <!-- front content -->\n                      <div class=\"headerContentFront\">\n                      </div>\n                      <div class=\"centerPagination\">\n\n                        <img class=\" ima animationZoom\" [src]=\"cliente.imagen !== null ? 'assets/Images/clientes/' + cliente.idCliente+'.png' : 'assets/Images/clientes/default_select.png'\"\n                        />\n                        <!-- CLIENTES TIENEN IMAGEN PERO CAMPO EN BD SIGUE SIENDO NULO -->\n                        <!-- <img [src]=\"'assets/Images/clientes/' + cliente.idCliente+'.png'\" onerror=\"this.src = 'assets/Images/clientes/default_select.png'\" /> -->\n                      </div>\n                      <div class=\"footContent\" style=\"border-bottom: 0.5px solid #ccc;\">\n                        <p *ngIf=\"cliente.imagen==null\">{{cliente.nombre}}</p>\n                      </div>\n                    </div>\n                    <div class=\"back\">\n                      <!-- back content -->\n                      <div class=\"backContent\">\n                        <div class=\"crossContent\" style=\"width: 100%;display: flex; justify-content: flex-end; align-content: center;align-items: center; \">\n                          <img src=\"assets/Images/tachecito.png \" height=\"20px\" width=\"20px\" alt=\"Cerrar\">\n                        </div>\n                        <div class=\"headerBackCartera CVerde\">\n                          {{cliente.nombre}}\n                        </div>\n                        <hr>\n                        <div class=\"backCenterContent\">\n                          <p style=\"width:100%;font-weight: 100\">\n                            {{cliente.rol}}&nbsp; {{cliente.sector}}\n                          </p>\n                          <p style=\"width:100%;font-weight: 100\">\n                            {{cliente.industria}}\n                          </p>\n                          <p style=\"width:100%;font-weight: 100\">\n                            {{cliente.ruta}}\n                          </p>\n                        </div>\n                      </div>\n                      <div class=\"footContentBack\">\n                        <div class=\"iconsContent\">\n                        </div>\n                      </div>\n                      <a (click)=\"Entrar($event)\">\n                        <div class=\"buttonCardContent\">\n                          <div class=\"buttonCardBtn\">\n                            <h4>Entrar</h4>\n                          </div>\n                        </div>\n                      </a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n  <ng-template #cargando>\n    <div class=\"tabla-clientes\">\n    </div>\n  </ng-template>\n</div>\n<div class=\"footer\" style=\"margin-top:10px\">\n  <div style=\"width: 100%;height: 90%;display: flex; justify-content: space-between; align-content: center;align-items: center; \">\n    <div style=\"width: 10%; text-align: left;\">\n      <div class=\"engrane-menu\">\n        <div class=\"opciones\">\n          <div class=\"opcion\" (click)=\"redirectTo('/protected/catalogo/clientes')\">\n            <img src=\"assets/Images/catalogo/objetivoscrecimiento.png\" />\n            <p class=\"opcion-label\">Objetivos de crecimiento</p>\n          </div>\n          <div class=\"opcion\" (click)=\"redirectTo('/protected/catalogo/clientes')\">\n            <img src=\"assets/Images/catalogo/nivelingresoblanco20x20px.png\" />\n            <p class=\"opcion-label\">Intervalos Nivel Ingreso</p>\n          </div>\n          <div class=\"opcion\" (click)=\"redirectTo('/protected/catalogo/clientes')\">\n            <img src=\"assets/Images/catalogo/corporativoblanco20x20px.png\" />\n            <p class=\"opcion-label\">Corporativos</p>\n          </div>\n          <div class=\"opcion\" (click)=\"redirectTo('/protected/catalogo/clientes/carteras/')\">\n            <img src=\"assets/Images/catalogo/carteras.png\" />\n            <p class=\"opcion-label\">Carteras</p>\n          </div>\n        </div>\n        <div style=\"width: 100%;height: 90%; display: flex;justify-content: center; align-content: center;align-items: center;\">\n          <img class=\"engrane\" src=\"assets/Images/catalogo/engraneGrisGrande.png\" />\n        </div>\n      </div>\n    </div>\n    <div style=\"width: 20%;\">\n      <div class=\"total\" *ngIf=\"isByCorporativo==false; else ByCorpTot\">\n        <p>Total: {{ClientesSearched.length}} Clientes</p>\n      </div>\n      <ng-template #ByCorpTot>\n        <div class=\"total\">\n          <p>Total: {{clientesAgrupados.length}} Clientes</p>\n        </div>\n      </ng-template>\n    </div>\n    <div style=\"width: 20%;height: 90%; display: flex; justify-content: flex-end; align-content: center;align-items: center; \">\n      <div class=\"btn-agregar-cliente\">Agregar</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/catalogo/cliente/cliente.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  margin: 0px 0;\n  width: 100%; }\n:host .header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    width: 100%;\n    margin-top: 0px; }\n:host .header-menu {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    background: transparent;\n    height: 50px; }\n:host .header-menu .white_space {\n      width: 3%; }\n:host .header-menu .radiop {\n      width: 40%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      background: transparent;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      font-weight: 100; }\n:host .header-menu .espacio_bco {\n      width: 65%; }\n:host .header-menu .exportar {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      width: 32px;\n      height: 34px;\n      background: #1E8893;\n      border: none;\n      margin-right: 25px;\n      cursor: pointer; }\n:host .container {\n    width: 98%;\n    margin-left: 1%;\n    border-top: 1px solid #424242; }\n:host .container .filter-container {\n      width: 100%;\n      border-bottom: 1px solid #C2C3C9; }\n:host .container .buscar {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      height: 50px;\n      margin-top: 10px;\n      width: 100%;\n      border-style: solid; }\n:host .container .buscar div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        width: 403.1px;\n        border-radius: 102px 102px 102px 102px;\n        -moz-border-radius: 102px 102px 102px 102px;\n        -webkit-border-radius: 102px 102px 102px 102px;\n        border: 0.5px solid #BFC0C7;\n        height: 30px; }\n:host .container .buscar div div {\n          border: none;\n          border-radius: 0px 0px 0px 0px;\n          -moz-border-radius: 0px 0px 0px 0px;\n          -webkit-border-radius: 0px 0px 0px 0px;\n          border: 0px solid #000000;\n          width: 40px;\n          background: transparent;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -ms-flex-line-pack: center;\n              align-content: center; }\n:host .container .buscar div .buscar-input {\n          cursor: pointer;\n          background: transparent;\n          border-radius: 102px 102px 102px 102px;\n          -moz-border-radius: 102px 102px 102px 102px;\n          -webkit-border-radius: 102px 102px 102px 102px;\n          border: 0px solid #000000;\n          width: 380px;\n          padding-left: 5px; }\n:host .container .tabla-clientes {\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      overflow-x: hidden;\n      width: 98.7%;\n      margin-left: 1.3%;\n      overflow-y: auto; }\n:host .container .tabla-clientes .cliente {\n        text-align: center;\n        width: 300px;\n        -webkit-filter: grayscale(100%);\n                filter: grayscale(100%);\n        border-right: 0px solid #ccc; }\n:host .container .tabla-clientes .cliente .ima {\n          width: 127px; }\n:host .container .tabla-clientes .cliente:hover {\n          -webkit-filter: grayscale(0);\n                  filter: grayscale(0); }\n:host .container .total {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n:host .tabla-clientes2 {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    width: 97%;\n    overflow-y: auto;\n    margin-left: 3%;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    overflow-y: auto; }\n:host .tabla-clientes2 .cliente {\n      text-align: center;\n      width: 300px;\n      -webkit-filter: grayscale(100%);\n              filter: grayscale(100%); }\n:host .tabla-clientes2 .cliente .ima {\n        width: 127px; }\n:host .tabla-clientes2 .cliente.final {\n        border-bottom: 0px solid #ccc; }\n:host .tabla-clientes2 .cliente:hover {\n        -webkit-filter: grayscale(0);\n                filter: grayscale(0); }\n:host .tabla-clientes2 .total {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n:host .footer {\n    border-top: 2px solid #424242;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    width: 98%;\n    margin-left: 1%;\n    margin-top: 15px;\n    padding-top: 8px;\n    margin-bottom: 5px;\n    height: 4.3vh; }\n:host .footer .engrane-menu {\n      position: relative;\n      overflow: auto;\n      width: 26px;\n      height: 26px; }\n:host .footer .engrane-menu .opciones {\n        background-color: #333;\n        position: absolute;\n        z-index: -1;\n        width: 26px;\n        bottom: 0 !important;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-transition: bottom 500ms;\n        transition: bottom 500ms; }\n:host .footer .engrane-menu .opciones .opcion {\n          position: relative;\n          width: 20px;\n          height: 20px;\n          padding: 6px 0; }\n:host .footer .engrane-menu .opciones .opcion:hover {\n            cursor: pointer; }\n:host .footer .engrane-menu .opciones .opcion:hover > .opcion-label {\n            opacity: 1; }\n:host .footer .engrane-menu .opciones .opcion .opcion-label {\n            display: block;\n            background-color: #333;\n            position: absolute;\n            left: 28px;\n            top: 8px;\n            color: #fff;\n            font-size: 12px;\n            text-align: center;\n            padding: 5px 6px;\n            white-space: nowrap;\n            opacity: 0;\n            -webkit-transition: opacity 200ms;\n            transition: opacity 200ms; }\n:host .footer .engrane-menu .opciones .opcion .opcion-label::after {\n              content: \" \";\n              position: absolute;\n              top: 65%;\n              right: 100%;\n              /* To the left of the tooltip */\n              margin-top: -5px;\n              border-width: 3px;\n              border-style: solid;\n              border-color: transparent black transparent transparent; }\n:host .footer .engrane-menu:hover {\n        background-color: #333;\n        overflow: visible; }\n:host .footer .engrane-menu:hover .opciones {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          bottom: 100% !important;\n          z-index: 1; }\n:host .footer .engrane-menu .engrane {\n        width: 18px;\n        height: 18px;\n        position: relative;\n        z-index: 2; }\n.total {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.animationZoom {\n  -webkit-animation: animatezoom 0.2s;\n          animation: animatezoom 0.2s; }\n@-webkit-keyframes animatezoom {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n@keyframes animatezoom {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n.aniamtionTop {\n  position: absolute;\n  -webkit-animation: animatetop 0.3s;\n          animation: animatetop 0.3s; }\n@-webkit-keyframes animatetop {\n  from {\n    margin-top: 3vh;\n    opacity: 0; }\n  to {\n    margin-top: 7vh;\n    opacity: 1; } }\n@keyframes animatetop {\n  from {\n    margin-top: 3vh;\n    opacity: 0; }\n  to {\n    margin-top: 7vh;\n    opacity: 1; } }\n.aniamtionTopitems {\n  position: relative;\n  -webkit-animation: animatetop2 0.5s;\n          animation: animatetop2 0.5s; }\n@-webkit-keyframes animatetop2 {\n  from {\n    top: -600px;\n    opacity: 0; }\n  to {\n    top: 0px;\n    opacity: 1; } }\n@keyframes animatetop2 {\n  from {\n    top: -600px;\n    opacity: 0; }\n  to {\n    top: 0px;\n    opacity: 1; } }\n/* entire container, keeps perspective */\n.flip-container {\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n  background: white; }\n.front:hover {\n  background: #F3F9FA; }\n.centerPagination {\n  width: 100%;\n  height: 70%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center; }\n.paginationContent {\n  width: 98%;\n  height: 100%; }\n.footContent {\n  margin-top: 1px;\n  width: 101%;\n  height: 14.5%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  line-height: 20px; }\n.footContentBack {\n  width: 100%;\n  height: 12%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  border: 0 none #ccc;\n  border-radius: 0; }\n.iconsContent {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 98%;\n  height: 100%;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  font-size: 10px; }\n.buttonCardContent {\n  width: 100%;\n  height: 12%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  border: 0 none #ccc;\n  border-bottom: 0px solid #ccc;\n  border-radius: 0; }\n.buttonCardBtn {\n  background: #1E8893;\n  color: white;\n  width: 50%;\n  height: 60%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center; }\n.buttonCardBtn:hover {\n  cursor: pointer;\n  background: #26a1af;\n  color: white; }\n.flip-container:hover .flipper,\n.flip-container.hover .flipper {\n  cursor: pointer; }\n/* flip the pane when hovered */\n.flip-container:focus .flipper,\n.flip-container.hover .flipper {\n  cursor: pointer;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n.flip-container,\n.front,\n.back {\n  width: 300px;\n  height: 300px; }\n/* flip speed goes here */\n.flipper {\n  -webkit-transition: 0.6s;\n  transition: 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  position: relative; }\n.front p {\n  line-height: 5px; }\n.headerContentFront {\n  width: 100%;\n  height: 15%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n/* hide back of pane during swap */\n.front,\n.back {\n  border-style: solid;\n  border-color: rgba(110, 110, 110, 0.288);\n  border-width: 0px;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0; }\n/* front pane, placed above back */\n.front {\n  z-index: 2;\n  /* for firefox 31 */\n  -webkit-transform: rotateY(0deg);\n          transform: rotateY(0deg);\n  font-family: 'Roboto', sans-serif; }\n/* back, initially hidden pane */\n.back {\n  font-family: 'Roboto', sans-serif;\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n.backContent {\n  width: 100%;\n  height: 74%; }\n.headerBackCartera {\n  width: 100%;\n  height: 17%;\n  font-weight: 900;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center; }\n.subheaderBackCartera {\n  width: 100%;\n  height: 5%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center; }\n.backCenterContent {\n  width: 100%;\n  height: 80%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center; }\n.FactCarteraContent {\n  width: 48%;\n  height: 100%; }\n.headerFactcarteraContent {\n  font-weight: 900;\n  height: 30%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center; }\n.headerFantcarteraContent {\n  font-weight: 900;\n  height: 30%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n.FantCarteraContent {\n  width: 48%;\n  height: 100%; }\n.infoFactcarteraContent {\n  height: 65%;\n  text-align: left; }\n.infoFantcarteraContent {\n  height: 65%;\n  text-align: right; }\n.rowCarteraContent {\n  width: 100%;\n  height: 33%; }\n.CVerde {\n  color: #1E8893; }\n.animationZoom {\n  -webkit-animation: animatezoom 0.2s;\n          animation: animatezoom 0.2s; }\n@keyframes animatezoom {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n.btn-agregar-cliente {\n  width: 200px;\n  height: 30px;\n  color: white;\n  background: #1E8893;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-transform: uppercase;\n  cursor: pointer; }\n.btn-agregar-cliente:hover {\n  background: #1E8893; }\n@media only screen and (min-width: 600px) {\n  .container .tabla-clientes {\n    height: 33vh; }\n  .container .tabla-clientes2 {\n    height: 40vh; }\n  .engrane-menu .opciones {\n    bottom: 28px; } }\n@media only screen and (min-width: 800px) and (min-height: 700px) {\n  .container .tabla-clientes {\n    height: 35vh; }\n  .container .tabla-clientes2 {\n    height: 35vh; } }\n@media only screen and (min-width: 800px) and (min-height: 800px) {\n  .container .tabla-clientes {\n    height: 45vh; }\n  .container .tabla-clientes2 {\n    height: 45vh; } }\n@media only screen and (min-width: 1100px) and (min-height: 800px) {\n  .container .tabla-clientes {\n    height: 50vh; }\n  .container .tabla-clientes2 {\n    height: 50vh; } }\n@media only screen and (min-width: 1200px) and (min-height: 800px) {\n  .container .tabla-clientes {\n    height: 46vh; }\n  .container .tabla-clientes2 {\n    height: 46vh; } }\n@media only screen and (min-width: 1200px) and (min-height: 899px) {\n  .container .tabla-clientes {\n    height: 50vh; }\n  .container .tabla-clientes2 {\n    height: 50vh; } }\n@media only screen and (min-width: 1200px) and (min-height: 900px) {\n  .container .tabla-clientes {\n    height: 49vh; }\n  .container .tabla-clientes2 {\n    height: 49vh; } }\n@media only screen and (min-width: 1200px) and (min-height: 1000px) {\n  .container .tabla-clientes {\n    height: 57vh; }\n  .container .tabla-clientes2 {\n    height: 57vh; } }\n@media only screen and (min-width: 1200px) and (min-height: 1100px) {\n  .container .tabla-clientes {\n    height: 58vh; }\n  .container .tabla-clientes2 {\n    height: 58vh; } }\n@media only screen and (min-width: 1200px) and (min-height: 1200px) {\n  .container .tabla-clientes {\n    height: 55vh; }\n  .container .tabla-clientes2 {\n    height: 55vh; } }\n@media only screen and (min-width: 1680px) and (min-height: 1000px) {\n  .container .tabla-clientes {\n    height: calc(58vh); }\n  .container .tabla-clientes2 {\n    height: calc(58vh); } }\n@media only screen and (min-width: 1680px) and (min-height: 1150px) {\n  .container .tabla-clientes {\n    height: calc(62vh); }\n  .container .tabla-clientes2 {\n    height: calc(62vh); } }\n@media only screen and (min-width: 2000px) and (min-height: 1150px) {\n  .container .tabla-clientes {\n    height: calc(62vh); }\n  .container .tabla-clientes2 {\n    height: calc(62vh); } }\nhr.v {\n  width: 1px;\n  height: 158px;\n  opacity: .4;\n  background: #ECEEF0;\n  color: #ECEEF0; }\nhr.v.final {\n    display: none; }\nhr.h {\n  width: 100%;\n  height: 1px;\n  opacity: .4;\n  background: #ECEEF0;\n  color: #ECEEF0; }\nhr.h.final {\n    display: none; }\n"

/***/ }),

/***/ "./src/app/components/catalogo/cliente/cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_menu_filterMenu_component__ = __webpack_require__("./src/app/components/catalogo/filter-menu/filterMenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_catalogo_clientes_clientes_service__ = __webpack_require__("./src/app/services/catalogo/clientes/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClienteComponent = /** @class */ (function () {
    function ClienteComponent(clienteService, http, router, coreComponent) {
        this.clienteService = clienteService;
        this.http = http;
        this.router = router;
        this.coreComponent = coreComponent;
        this.clientes = [];
        this.clientesDisplay = [];
        this.clientesConsulta = [];
        this.totalClientes = 0;
        this.isByCorporativo = false;
        this.ClientesFiltrados = [];
        this.clientesAgrupados = [];
        this.ClientesSearched = [];
        this.HabilidatosSelected = true;
        this.searchTerm = "";
        this.filterSelected = { index: 3, value: 'TODOS', name: 'TODOS' };
        this.opcion = [
            {
                label: 'Clientes',
                path: '/protected/catalogo/clientes',
            }
        ];
        this.linksCarteras = [
            { label: 'Cliente', path: '/protected/catalogo/clientes', urlImg: 'assets/Images/catalogo/nivelingresoblanco20x20px.png' },
            { label: 'Carteras', path: '/protected/catalogo/clientes/carteras', urlImg: 'assets/Images/catalogo/corporativoblanco20x20px.png' },
        ];
        this.homePath = '/protected/catalogo';
        this.onResizeReference = this.onResize.bind(this);
        this.filtros = __WEBPACK_IMPORTED_MODULE_3__filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].filtrosClientes;
    }
    ClienteComponent.prototype.ObtenerClientesPorUsuario = function (isHabilitado) {
        var _this = this;
        this.coreComponent.openModal(0);
        this.clienteService.obtenerClientesPorUsuario(isHabilitado)
            .subscribe(function (data) {
            console.log(data);
            _this.clientes = data.current;
            _this.clientesDisplay = _this.clientes.map(function (cliente) { return cliente; });
            _this.clientesConsulta = _this.clientes.map(function (cliente) { return cliente; });
            _this.ClientesFiltrados = _this.clientes.map(function (cliente) { return cliente; });
            _this.totalClientes = data.current.length;
            _this.coreComponent.closeModal(0);
            _this.getOptions({ opcion: "TODOS" });
            _this.filterSelected = { index: 3, value: 'TODOS', name: 'TODOS' };
        }, function (error) { _this.coreComponent.closeModal(0); });
    };
    ClienteComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.onResizeReference);
    };
    ClienteComponent.prototype.ngOnInit = function () {
        window.addEventListener('resize', this.onResizeReference);
        console.log('Llamando a servicio de obtener clientes');
        this.ObtenerClientesPorUsuario(1);
    };
    ClienteComponent.prototype.onResize = function () {
        this.cambiarNumeroCarteras();
    };
    ClienteComponent.prototype.cambiarNumeroCarteras = function () {
        if (document.body.clientWidth < 1480) {
            this.carterasPorFila = 3;
        }
        else if (document.body.clientWidth > 2175) {
            this.carterasPorFila = 7;
        }
        else {
            this.carterasPorFila = 4;
        }
    };
    ClienteComponent.prototype.agregarFiltro = function ($event) {
        console.log("Lleg\u00F3 un valor desde active button, el valor es: " + $event);
    };
    ClienteComponent.prototype.redirectTo = function (url) {
        this.router.navigate([url]);
    };
    ClienteComponent.prototype.getOptions = function (event) {
        var _this = this;
        this.filterSelected = this.selectFilterMenu(event);
        switch (event.opcion) {
            case "NIVEL DE INGRESO":
                var stringToSearch_1 = event.valor;
                if (stringToSearch_1 === "DIST") {
                    stringToSearch_1 = "Distribuidor";
                }
                if (stringToSearch_1 === "AA+") {
                    stringToSearch_1 = "aaplus";
                }
                var arreauxiliar_1 = [];
                this.ClientesFiltrados.forEach(function (cliente) {
                    if (cliente.nivelIngreso.toUpperCase() === stringToSearch_1.toUpperCase()) {
                        arreauxiliar_1.push(cliente);
                    }
                });
                this.isByCorporativo = false;
                ;
                this.clientesConsulta = arreauxiliar_1;
                this.ClientesSearched = this.clientesConsulta;
                break;
            case "RUTA":
                var stringToSearch2_1 = event.valor;
                var arreauxiliar2_1 = [];
                if (stringToSearch2_1 == "GUADALAJÁRA") {
                    stringToSearch2_1 = "GUADALAJARA";
                }
                if (stringToSearch2_1 == "FORÁNEO") {
                    stringToSearch2_1 = "FORANEO";
                }
                if (stringToSearch2_1 == "CENTRO AMÉRICA") {
                    stringToSearch2_1 = "CENTROAMERICA";
                }
                if (stringToSearch2_1 == "SUDAMÉRICA") {
                    stringToSearch2_1 = "SUDAMERICA";
                }
                this.ClientesFiltrados.forEach(function (cliente) {
                    if (cliente.ruta != null) {
                        if (cliente.ruta.toUpperCase() === stringToSearch2_1.toUpperCase()) {
                            arreauxiliar2_1.push(cliente);
                        }
                    }
                });
                this.isByCorporativo = false;
                this.clientesConsulta = arreauxiliar2_1;
                this.ClientesSearched = this.clientesConsulta;
                break;
            case "CORPORATIVO":
                var Grupos_1 = [];
                var isFirstTime = true;
                this.clientesAgrupados = [this.ClientesFiltrados.length];
                this.ClientesFiltrados.forEach(function (cliente, index) {
                    var i = 0;
                    var isExist = false;
                    while (i < Grupos_1.length) {
                        if (cliente.nombreCorporativo != null) {
                            if (Grupos_1[i] != null) {
                                if (Grupos_1[i].toUpperCase() == cliente.nombreCorporativo.toUpperCase()) {
                                    isExist = true;
                                }
                            }
                        }
                        else {
                            isExist = true;
                        }
                        i = i + 1;
                    }
                    if (isExist == false) {
                        Grupos_1.push(cliente.nombreCorporativo);
                    }
                });
                var ClientesAgrupados = [];
                Grupos_1.forEach(function (Grupo, index) {
                    var clienteAgrupado = [];
                    var nombreGrupo;
                    _this.ClientesFiltrados.forEach(function (cliente, index) {
                        if ((Grupo == cliente.nombreCorporativo) && Grupo != null) {
                            clienteAgrupado.push(cliente);
                        }
                    });
                    var objAuxiliar = { nombreGrupo: Grupo, clientes: clienteAgrupado };
                    _this.clientesAgrupados.push(objAuxiliar);
                });
                if (this.clientesAgrupados.length > 2) {
                    this.clientesAgrupados.splice(0, 1);
                }
                this.isByCorporativo = true;
                break;
            case "EV":
                this.isByCorporativo = false;
                ;
                break;
            case "ESSAC":
                this.isByCorporativo = false;
                ;
                break;
            case "CUENTA CLAVE":
                var stringToSearch6 = event.valor;
                var arreauxiliar6_1 = [];
                this.ClientesFiltrados.forEach(function (cliente) {
                    if (cliente.tieneCartera != null) {
                        if (cliente.tieneCartera != false) {
                            arreauxiliar6_1.push(cliente);
                        }
                    }
                });
                this.clientesConsulta = arreauxiliar6_1;
                this.ClientesSearched = this.clientesConsulta;
                this.isByCorporativo = false;
                ;
                break;
            case "TODOS":
                this.isByCorporativo = false;
                ;
                this.clientesConsulta = this.ClientesFiltrados;
                this.ClientesSearched = this.clientesConsulta;
                break;
        }
    };
    ClienteComponent.prototype.selectFilterMenu = function (event) {
        var attributeForFilter = {
            name: 'TODOS',
            value: event.valor,
            index: event.index
        };
        switch (event.opcion) {
            case __WEBPACK_IMPORTED_MODULE_3__filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].TODOS.label:
                break;
            case __WEBPACK_IMPORTED_MODULE_3__filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].CORPORATIVO.label:
                attributeForFilter.name = 'CORPORATIVO';
                break;
            case __WEBPACK_IMPORTED_MODULE_3__filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].RUTA.label:
                attributeForFilter.name = 'RUTA';
                break;
            case __WEBPACK_IMPORTED_MODULE_3__filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].CUENTA_CLAVE.label:
                attributeForFilter.name = 'CUENTA CLAVE';
                break;
            case __WEBPACK_IMPORTED_MODULE_3__filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].ESAC.label:
                attributeForFilter.name = 'ESAC';
                break;
            case __WEBPACK_IMPORTED_MODULE_3__filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].EV.label:
                attributeForFilter.name = 'EV';
                break;
            case __WEBPACK_IMPORTED_MODULE_3__filter_menu_filterMenu_component__["a" /* FilterMenuComponent */].INGRESO.label:
                attributeForFilter.name = 'NIVEL DE INGRESO';
                break;
        }
        return attributeForFilter;
    };
    ClienteComponent.prototype.Entrar = function (event) {
        event.stopPropagation();
        console.log("Entrar");
    };
    ClienteComponent.prototype.clickToExport = function () {
        console.log("Se exporta el catálogo");
    };
    ClienteComponent.prototype.Habilitar = function (opc) {
        this.ClientesFiltrados = [];
        switch (opc) {
            case 1:
                this.ObtenerClientesPorUsuario(1);
                this.HabilidatosSelected = true;
                break;
            case 0:
                this.ObtenerClientesPorUsuario(0);
                this.HabilidatosSelected = false;
                break;
        }
    };
    ClienteComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search == "") {
            this.ClientesSearched = this.clientesConsulta;
        }
        else {
            this.clientesConsulta.forEach(function (cliente) {
                if (cliente.nombre.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(cliente);
                }
            });
            this.ClientesSearched = searchArrayAux;
        }
    };
    ClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-catalogo',
            template: __webpack_require__("./src/app/components/catalogo/cliente/cliente.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/cliente/cliente.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_catalogo_clientes_clientes_service__["a" /* ClienteService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__components_core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], ClienteComponent);
    return ClienteComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/cliente/cliente.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteModule", function() { return ClienteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cliente_routing_module__ = __webpack_require__("./src/app/components/catalogo/cliente/cliente-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cliente_component__ = __webpack_require__("./src/app/components/catalogo/cliente/cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__active_button_activeButton_component__ = __webpack_require__("./src/app/components/catalogo/active-button/activeButton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_catalogo_clientes_clientes_service__ = __webpack_require__("./src/app/services/catalogo/clientes/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ClienteModule = /** @class */ (function () {
    function ClienteModule() {
    }
    ClienteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__cliente_routing_module__["a" /* ClienteRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__cliente_component__["a" /* ClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_7__active_button_activeButton_component__["a" /* ActiveButtonComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_catalogo_clientes_clientes_service__["a" /* ClienteService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__cliente_component__["a" /* ClienteComponent */]
            ]
        })
    ], ClienteModule);
    return ClienteModule;
}());



/***/ }),

/***/ "./src/app/components/catalogo/filter-menu/filterMenu.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"menu\">\n  <div class=\"filter-item \" *ngFor=\"let filtro of listaFiltros\" >\n     <div *ngIf=\"filtro.hasOptions;else nOptions\" (click)=\"ShowDrop(filtro.label,$event,filtro)\" style=\"width: 100%;height: 100%; cursor: pointer;\" class=\"ctn-menu-filter\">\n<div style=\"width: 100%;\">\n    <img    id=\"{{'img'+filtro.label}}\"   class=\"dropbtn\" src=\"{{filtro.imgUrl}}\" alt=\"\">\n    \n</div>\n{{filtro.label}}\n     </div>\n       <ng-template #nOptions>\n\n          <div  (click)=\"sendEvent(filtro.label,2 ,filtro.label)\" id=\"{{'id'+filtro.label}}\" style=\"width: 100%;height: 100%;cursor: pointer;\" class=\"ctn-menu-filter\">\n              <div style=\"width: 100%;\">\n                  <img    id=\"{{'img'+filtro.label}}\"   class=\"dropbtn\" src=\"{{filtro.imgUrl}}\" alt=\"\">\n              </div>\n              {{filtro.label}}\n                </div>\n               </ng-template>\n    <div  *ngIf=\"filtro.hasOptions\"  id=\"{{'myDropdown'+filtro.label}}\" class=\"dropdown-content aniamtionTop\" >\n          <a  *ngFor=\"let option of filtro.options\" (click)=\"sendEvent(option.name,1,filtro.label)\" class=\"aniamtionTopitems\">{{option.name}}</a>\n\n  \n    </div>\n\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/catalogo/filter-menu/filterMenu.component.scss":
/***/ (function(module, exports) {

module.exports = ".menu {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .menu .filter-item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 14%;\n    text-align: center;\n    font-weight: 300; }\n  .dropbtn {\n  padding: 16px;\n  font-size: 16px;\n  width: 32px;\n  font-weight: 300;\n  border: none;\n  cursor: pointer; }\n  .dropbtn:focus {\n  background: rebeccapurple; }\n  .dropdown {\n  position: relative;\n  display: inline-block; }\n  .dropdown-content {\n  display: none;\n  position: absolute;\n  margin-top: 7vh;\n  left: 0px;\n  background-color: #F3F9FA;\n  width: 100%;\n  overflow: auto;\n  -webkit-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  left: 0; }\n  .dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  cursor: pointer; }\n  .dropdown-content a:hover {\n  color: #1E8893;\n  cursor: pointer; }\n  .animationZoom {\n  -webkit-animation: animatezoom 0.2s;\n          animation: animatezoom 0.2s; }\n  @-webkit-keyframes animatezoom {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  @keyframes animatezoom {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n  .aniamtionTop {\n  position: absolute;\n  -webkit-animation: animatetop 0.3s;\n          animation: animatetop 0.3s; }\n  @-webkit-keyframes animatetop {\n  from {\n    margin-top: 3vh;\n    opacity: 0; }\n  to {\n    margin-top: 7vh;\n    opacity: 1; } }\n  @keyframes animatetop {\n  from {\n    margin-top: 3vh;\n    opacity: 0; }\n  to {\n    margin-top: 7vh;\n    opacity: 1; } }\n  .aniamtionTopitems {\n  position: relative;\n  -webkit-animation: animatetop2 0.5s;\n          animation: animatetop2 0.5s; }\n  @-webkit-keyframes animatetop2 {\n  from {\n    top: -600px;\n    opacity: 0; }\n  to {\n    top: 0px;\n    opacity: 1; } }\n  @keyframes animatetop2 {\n  from {\n    top: -600px;\n    opacity: 0; }\n  to {\n    top: 0px;\n    opacity: 1; } }\n  .dropdown a:hover {\n  background-color: #ddd; }\n  .show {\n  display: block; }\n  .ctn-menu-filter {\n  background: white; }\n  .ctn-menu-filter:hover {\n  background: #E7F4F5; }\n  .ctn-menu-filter:focus {\n  background: #E7F4F5; }\n"

/***/ }),

/***/ "./src/app/components/catalogo/filter-menu/filterMenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterMenuComponent; });
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

var FilterMenuComponent = /** @class */ (function () {
    function FilterMenuComponent() {
        this.openned = "";
        this.sendValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.listaFiltros = [];
    }
    FilterMenuComponent_1 = FilterMenuComponent;
    Object.defineProperty(FilterMenuComponent.prototype, "filtros", {
        set: function (filtros) {
            this.listaFiltros = filtros;
        },
        enumerable: true,
        configurable: true
    });
    FilterMenuComponent.prototype.onSelect = function (filtro) {
    };
    FilterMenuComponent.prototype.ngOnInit = function () { };
    FilterMenuComponent.prototype.ShowDrop = function (event, evento, filtro) {
        var fil = filtro;
        console.log(event);
        evento.stopPropagation();
        if (filtro.hasOptions) {
            this.onClick(evento);
            document.getElementById("myDropdown" + event).classList.toggle("show");
            this.openned = "img" + event;
        }
        this.selected = filtro;
    };
    FilterMenuComponent.prototype.sendEvent = function (valor, opc, filtro) {
        var fil = filtro;
        var resp;
        switch (opc) {
            case 1:
                document.getElementById("id" + filtro).style.background = "#E7F4F5";
                resp = { opcion: this.selected.label, valor: valor };
                break;
            case 2:
                document.getElementById("id" + filtro).style.background = "#E7F4F5";
                resp = { opcion: valor, valor: valor };
                break;
            default: break;
        }
        this.sendValue.emit(resp);
    };
    // Close the dropdown if the user clicks outside of it
    FilterMenuComponent.prototype.onClick = function (event) {
        if (!(event.path[0].id == this.openned)) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };
    FilterMenuComponent.INGRESO = {
        label: 'NIVEL DE INGRESO', imgUrl: 'assets/Images/catalogo/nivelIngreso.png', isSelected: false, hasOptions: true, options: [
            { name: "AA+", action: "none" }, { name: "AA", action: "none" },
            { name: "AM", action: "none" }, { name: "AB", action: "none" },
            { name: "MA", action: "none" }, { name: "MM", action: "none" },
            { name: "MB", action: "BAJO" }, { name: "BAJO", action: "none" },
            { name: "DIST", action: "none" }
        ]
    };
    FilterMenuComponent.CORPORATIVO = { label: 'CORPORATIVO', imgUrl: 'assets/Images/catalogo/btnCorporativo.png', isSelected: false, hasOptions: false };
    FilterMenuComponent.RUTA = {
        label: 'RUTA', imgUrl: 'assets/Images/catalogo/ruta.png', isSelected: false, hasOptions: true, options: [{ name: "LOCAL", action: "none" }, { name: "FORÁNEO", action: "none" },
            { name: "GUADALAJÁRA", action: "none" }, { name: "CENTRO AMÉRICA", action: "none" },
            { name: "SUDAMÉRICA", action: "none" }, { name: "RESTO DEL MUNDO", action: "none" }]
    };
    FilterMenuComponent.TODOS = { label: 'TODOS', imgUrl: 'assets/Images/catalogo/btnClientes.png', isSelected: true };
    FilterMenuComponent.CUENTA_CLAVE = { label: 'CUENTA CLAVE', imgUrl: 'assets/Images/catalogo/cuentaClave.png', isSelected: false, hasOptions: false, };
    FilterMenuComponent.ESAC = { label: 'ESAC', imgUrl: 'assets/Images/catalogo/esacNegro.png', isSelected: false, hasOptions: false, };
    FilterMenuComponent.EV = { label: 'EV', imgUrl: 'assets/Images/catalogo/evNegro.png', isSelected: false, hasOptions: false, };
    FilterMenuComponent.filtrosClientes = [
        FilterMenuComponent_1.INGRESO,
        FilterMenuComponent_1.CORPORATIVO,
        FilterMenuComponent_1.RUTA,
        FilterMenuComponent_1.TODOS,
        FilterMenuComponent_1.CUENTA_CLAVE,
        FilterMenuComponent_1.ESAC,
        FilterMenuComponent_1.EV
    ];
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FilterMenuComponent.prototype, "sendValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], FilterMenuComponent.prototype, "filtros", null);
    FilterMenuComponent = FilterMenuComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            host: {
                '(document:click)': 'onClick($event)',
            },
            selector: 'filter-menu',
            template: __webpack_require__("./src/app/components/catalogo/filter-menu/filterMenu.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/filter-menu/filterMenu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterMenuComponent);
    return FilterMenuComponent;
    var FilterMenuComponent_1;
}());



/***/ }),

/***/ "./src/app/services/catalogo/clientes/clientes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClienteService = /** @class */ (function () {
    function ClienteService(http) {
        this.http = http;
        this.apiURL = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'obtenerClientesXUsuario';
        this.datos = [];
    }
    ClienteService.prototype.obtenerClientesPorUsuario = function (isHabilitado) {
        var bodyData = {
            empleado: {
                idFuncion: 72,
                usuario: 'OCardona'
            },
            habilitado: isHabilitado
        };
        var body = JSON.stringify(bodyData);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURL, body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server Error'); });
    };
    ClienteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ClienteService);
    return ClienteService;
}());



/***/ })

});
//# sourceMappingURL=cliente.module.chunk.js.map