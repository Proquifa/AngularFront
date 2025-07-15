webpackJsonp(["catalogo.module"],{

/***/ "./src/app/components/catalogo/catalogo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catalogo_component__ = __webpack_require__("./src/app/components/catalogo/catalogo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CatalogoRoutingModule = /** @class */ (function () {
    function CatalogoRoutingModule() {
    }
    CatalogoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__catalogo_component__["a" /* CatalogoComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], CatalogoRoutingModule);
    return CatalogoRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/catalogo/catalogo.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"header\">\n <!--  <p>Heeeere comes the Menu!!!</p> -->\n  <pq-tarjeta-menu *ngFor=\"let item of catalogos; let i = index\" [nombre]=\"item.nombre\" [imagen]=\"pathImg + item.img\" [redirect]=\"item.redirect\"></pq-tarjeta-menu>\n</div>\n"

/***/ }),

/***/ "./src/app/components/catalogo/catalogo.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: calc(100vh - 231px);\n  margin: 20px 0;\n  width: 100%; }\n:host .header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    width: calc(100% - 90%);\n    margin: 0 25px 10px 25px; }\n:host .header-menu {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 100%;\n    margin-bottom: 15px; }\n:host .header-menu .exportar {\n      width: 32px;\n      height: 32px;\n      margin-right: 25px; }\n:host .container {\n    width: 100%;\n    border-top: 3px solid #000;\n    border-bottom: 3px solid #000; }\n:host .container .buscar {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      width: 100%; }\n:host .container .buscar div {\n        width: 200px; }\n:host .container .buscar div .buscar-input {\n          border-radius: 25px;\n          min-width: 200px;\n          height: 16px; }\n:host .container .buscar div .buscar-input::-webkit-input-placeholder {\n            padding-left: 20px; }\n:host .container .buscar div .buscar-input::-moz-placeholder {\n            padding-left: 20px; }\n:host .container .buscar div .buscar-input::-ms-input-placeholder {\n            padding-left: 20px; }\n:host .container .buscar div .buscar-input::placeholder {\n            padding-left: 20px; }\n:host .container .tabla-clientes {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n      height: 66vh;\n      width: 100%;\n      overflow-y: auto; }\n:host .container .tabla-clientes .cliente {\n        text-align: center;\n        width: 14%;\n        -webkit-filter: grayscale(100%);\n                filter: grayscale(100%);\n        border-right: 1px solid #ccc;\n        border-bottom: 1px solid #ccc; }\n:host .container .tabla-clientes .cliente img {\n          width: 60%; }\n:host .container .tabla-clientes .cliente.final {\n          border-right: none; }\n:host .container .tabla-clientes .cliente:hover {\n          -webkit-filter: grayscale(0);\n                  filter: grayscale(0); }\n:host .container .total {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n:host .footer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    margin: 0 25px; }\n"

/***/ }),

/***/ "./src/app/components/catalogo/catalogo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CatalogoComponent = /** @class */ (function () {
    function CatalogoComponent() {
        this.pathImg = "assets/Images/gestion/tarjetasMenu/";
        this.catalogos = [{ "nombre": "AGENTE ADUANAL", "img": "Recurso179.svg", "redirect": "" },
            { "nombre": "CLIENTES", "img": "Recurso178.svg", "redirect": "/protected/catalogo/clientes" },
            { "nombre": "NO DEFINIDO", "img": "Recurso174.svg", "redirect": "" },
            { "nombre": "INDICADORES", "img": "Recurso_151.svg", "redirect": "" },
            { "nombre": "PROVEEDORES", "img": "Recurso177.svg", "redirect": "" },
            { 'nombre': 'PATRÓN', 'img': 'Recurso177.svg', 'redirect': '/protected/catalogo/empresas' },
            { 'nombre': 'CUENTAS CONTABLES', 'img': 'icono_cuentas_contables.svg', 'redirect': '/protected/contabilidad/contables' },
            { 'nombre': 'POLIZAS', 'img': 'icono_cuentas_contables.svg', 'redirect': '/protected/contabilidad/polizas' }
        ];
    }
    CatalogoComponent.prototype.ngOnInit = function () {
        console.log('Llamando a servicio de obtener clientes');
    };
    CatalogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-catalogo',
            template: __webpack_require__("./src/app/components/catalogo/catalogo.component.html"),
            styles: [__webpack_require__("./src/app/components/catalogo/catalogo.component.scss")]
        })
    ], CatalogoComponent);
    return CatalogoComponent;
}());



/***/ }),

/***/ "./src/app/components/catalogo/catalogo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoModule", function() { return CatalogoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__catalogo_routing_module__ = __webpack_require__("./src/app/components/catalogo/catalogo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__catalogo_component__ = __webpack_require__("./src/app/components/catalogo/catalogo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CatalogoModule = /** @class */ (function () {
    function CatalogoModule() {
    }
    CatalogoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__catalogo_routing_module__["a" /* CatalogoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__catalogo_component__["a" /* CatalogoComponent */],
            ]
        })
    ], CatalogoModule);
    return CatalogoModule;
}());



/***/ })

});
//# sourceMappingURL=catalogo.module.chunk.js.map