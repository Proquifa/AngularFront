webpackJsonp(["material-receptor-gdl.module"],{

/***/ "./src/app/components/material-receptor-gdl/material-receptor-gdl-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialReceptorGdlRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_receptor_gdl_component__ = __webpack_require__("./src/app/components/material-receptor-gdl/material-receptor-gdl.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialReceptorGdlRoutingModule = /** @class */ (function () {
    function MaterialReceptorGdlRoutingModule() {
    }
    MaterialReceptorGdlRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__material_receptor_gdl_component__["a" /* MaterialReceptorGdlComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], MaterialReceptorGdlRoutingModule);
    return MaterialReceptorGdlRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/material-receptor-gdl/material-receptor-gdl.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\n  <!--Seccion de menu-->\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\n    <aside [ngClass]=\"classAsideMenu\">\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\n        <pn-menu-seccion-roles [items]=\"itemsMenu\"   style=\"width: 100%;\" *ngIf=\"activeMenu\"></pn-menu-seccion-roles>\n      </div>\n    </aside>\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n    </div>\n  </div>\n  <!--Termina seccion de menu-->\n  <!--Empieza el area de trabajo-->\n  <div class=\"area\">\n    <!--Empieza la cabezera-->\n    <div class=\"cabezera\">\n      <div style=\"cursor: pointer;\" *ngIf=\"!vistaPrincipal\" (click)=\"regresarVistaP()\">\n        <img class=\"img\" src='./assets/Images/regresar.svg'/>\n      </div>\n      <label class=\"etiqueta\">DECLARAR ARRIBO DE GUÍA</label>\n    </div>\n    <!--Termina la cabezera-->\n    <!--Empiezan los componentes-->\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 64px)'}\">\n      <div class=\"vistaPrincipal\" *ngIf=\"vistaPrincipal\">\n        <div class=\"contenidoGrafica\">\n          <div class=\"grafica\" style=\"padding-right: 10px;\">\n            <label class=\"tituloGrafica\">MENSAJERIA</label>\n            <pn-donut-chart *ngIf=\"mensajeroData\" [data]=\"dataMensajero\" [tipoGrafica]=\"tipoGraficaMensajero\" [height]=\"'auto'\"></pn-donut-chart>\n          </div>\n          <div  id=\"donaProducto\" class=\"grafica\" style=\"    padding-left: 10px;\">\n            <label class=\"tituloGrafica\">CLIENTES</label>\n            <pn-donut-chart *ngIf=\"clienteData\" [idGrafica]=\"'producto'\" [data]=\"dataCliente\" [tipoGrafica]=\"tipoGraficaCliente\" [height]=\"'auto'\"> </pn-donut-chart>\n          </div>\n        </div>\n        <div id=\"divBoton\">\n          <div class=\"botonIngresar\" style=\"width: 190px; cursor:pointer\" (click)=\"cambioDeVista()\" [style.pointerEvents] = \"activarBtn ? 'auto' : 'none'\" [style.background]= \"activarBtn ? '#008895' : '#D5DBDB'\" >\n            <label>INGRESAR</label>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"!vistaPrincipal\" style=\"width: 100%; height: 100%\">\n        <pn-vista-escanear-guia (vistaP)=\"recargarVista($event)\"></pn-vista-escanear-guia>\n      </div>\n    </div>\n    <!--Termina area de trabajo-->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/material-receptor-gdl/material-receptor-gdl.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n.padre {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n.aux .asideNormalMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  min-width: 181px;\n  width: 321px;\n  height: 100%;\n  overflow-y: scroll; }\n.aux .asideNormalMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n.aux > .asideOcultarMenu {\n  -webkit-animation-name: ocultarMenu;\n          animation-name: ocultarMenu;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-transition: 1s ease-in-out;\n  transition: 1s ease-in-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 0px;\n  width: 0px; }\n.aux > .asideOcultarMenu > .articulo {\n    width: 0px; }\n.aux > .asideMostrarMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  -webkit-animation-name: mostrarMenu;\n          animation-name: mostrarMenu;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-y: scroll; }\n.aux > .asideMostrarMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n@-webkit-keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@-webkit-keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n@keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n.area {\n  height: 100%;\n  width: 100%;\n  overflow: auto; }\n/********Secion de la cabecera****/\n.cabezera {\n  width: 100%;\n  height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 13px;\n  border-bottom: 2px solid black; }\n.etiqueta {\n  color: #5B5B5B;\n  font-size: 25px;\n  font-family: Novecento;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-bottom: 5px; }\n.img {\n  cursor: pointer; }\n/*******************************/\n/***Footer****/\n.footer {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  /* flex-direction: row; */\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  /* border-top: 1px solid; */ }\n.linea {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  text-align: center; }\n.datosFooter {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 14px;\n  min-width: 759px; }\n.Prioridad1, .Prioridad2 {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 0.7%;\n  margin-right: 0.7%;\n  font-family: Roboto;\n  font-weight: 300; }\n.p1 {\n  color: #424242;\n  font-weight: bold; }\n.p2 {\n  color: #424242;\n  font-weight: bold; }\n.p3 {\n  color: #424242;\n  font-weight: bold; }\n/*******GRAFICAS*****/\n.contenidoGrafica {\n  width: 100%;\n  height: 90%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 20px;\n  padding-right: 20px; }\n.tituloGrafica {\n  font-size: calc((1vh + 1vw) / 2);\n  font-weight: bold;\n  font-family: Novecento; }\n.grafica {\n  height: 80%;\n  width: 70%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.grafica label {\n    text-align: center;\n    padding-bottom: 30px; }\n/*Boton*/\n.botonIngresar {\n  width: 70px;\n  height: 30px;\n  background: #008894;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 21px;\n  cursor: pointer;\n  border: none;\n  color: #FFFFFF;\n  font-weight: bold;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto; }\n#divBoton {\n  width: 100%;\n  height: 10%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding-right: 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n/*****/\n.vistaPrincipal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: #ECEEF0; }\n"

/***/ }),

/***/ "./src/app/components/material-receptor-gdl/material-receptor-gdl.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialReceptorGdlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_material_receptor_material_receptor_service__ = __webpack_require__("./src/app/services/material-receptor/material-receptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MaterialReceptorGdlComponent = /** @class */ (function () {
    function MaterialReceptorGdlComponent(_datosGrafica, coreContainer, comunService) {
        this._datosGrafica = _datosGrafica;
        this.coreContainer = coreContainer;
        this.comunService = comunService;
        this.vistaPrincipal = true;
        this.classAsideMenu = 'asideNormalMenu';
        this.dataCliente = {
            titulo: 'Clientes',
            labels: ['Totales'],
            valores: [6, 3],
            labelsExtras: [['clientes'], ['Ordenes de compra'], ['Piezas'], ['Monto']],
            labelsExtrasHover: ['clientes', 'Ordenes de compra', 'Piezas', 'Monto'],
            valuesExtras: [6, 324, 157, 5000],
            valuesExtrasHover: [[6, 3, 1, 2], [324, 157, 50, 100]]
        };
        this.dataMensajero = {
            titulo: 'Productos',
            labels: ['Totales'],
            valores: [6],
            labelsExtras: [['clientes'], ['Ordenes de compra']],
            labelsExtrasHover: ['clientes', 'Ordenes de compra'],
            valuesExtras: [6, 324],
            valuesExtrasHover: [[6, 3], [324, 157]]
        };
        this.banderaPrueba = true;
        /***VARIABLES GRAFICAS**/
        this.filtroCliente = [];
        this.filtroMensajero = [];
    }
    MaterialReceptorGdlComponent.prototype.ngOnInit = function () {
        var _this = this;
        var idUsuario;
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'receptorMaterial') {
                _this.activeMenu = false;
                idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
                _this.datosGrafica(idUsuario);
            }
        });
        idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        this.datosGrafica(idUsuario);
    };
    MaterialReceptorGdlComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    MaterialReceptorGdlComponent.prototype.regresarVistaP = function () {
        this.vistaPrincipal = true;
    };
    MaterialReceptorGdlComponent.prototype.cambioDeVista = function () {
        this.vistaPrincipal = false;
    };
    MaterialReceptorGdlComponent.prototype.datosGrafica = function (idUsuario) {
        var _this = this;
        this.coreContainer.openModal(0);
        this._datosGrafica.datosGrafica(idUsuario).subscribe(function (data) {
            // console.log(data.current);
            _this.llenarGraficas(data.current);
            _this.coreContainer.closeModal(0);
        });
    };
    MaterialReceptorGdlComponent.prototype.llenarGraficas = function (lista) {
        var _this = this;
        this.activeMenu = false;
        this.limpiarVariables();
        if (lista && lista !== null && lista !== undefined && lista.Cliente) {
            this.activarBtn = true;
            setTimeout(function () {
                _this.mensajeroData = false;
                _this.clienteData = false;
            }, 5);
            this.cliente = lista.Cliente;
            this.mensajeria = lista.Mensajeria;
            this.totales = lista.Totales;
            this.valuesExtras = [this.totales[0].totalMensajeria, this.totales[0].totalGuias, this.totales[0].totalClientes, this.totales[0].totalFacturas];
            this.valuesExtrasClientes = [this.totales[0].totalClientes, this.totales[0].totalGuias, this.totales[0].totalMensajeria, this.totales[0].totalFacturas];
            this.limpiarVariablesGrafica();
            this.calcularDatosParaGraficas();
            this.iniciarMenu(this.totales[0].totalGuias);
        }
        else {
            this.iniciarMenu(0);
            this.activarBtn = false;
            this.cliente = [];
            this.mensajeria = [];
            this.totales = [];
            this.limpiarVariablesGrafica();
        }
    };
    MaterialReceptorGdlComponent.prototype.iniciarMenu = function (totGuia) {
        this.itemsMenu = [
            { rol: 'RECEPTOR DE MATERIAL', active: true, menu: [
                    { nombre: 'Declarar Arribo Guía', url: 'receptorMaterial', tipo: 'valor', valor: totGuia, select: true },
                ] }
        ];
        this.activeMenu = true;
    };
    MaterialReceptorGdlComponent.prototype.limpiarVariables = function () {
        this.filtroMensajero = [];
        this.filtroCliente = [];
        this.mensajeroData = false;
        this.clienteData = false;
    };
    MaterialReceptorGdlComponent.prototype.limpiarVariablesGrafica = function () {
        var _this = this;
        //////// Emìeza grafica productos //////
        var valoresM = [];
        var valoresMen = [];
        if (this.mensajeria && this.mensajeria.length > 0) {
            for (var _i = 0, _a = this.mensajeria; _i < _a.length; _i++) {
                var nombre = _a[_i];
                this.filtroMensajero.push(nombre.concepto);
                valoresMen.push([0, 0, 0, 0]);
                valoresM.push(0);
            }
        }
        if (valoresM.length > 0) {
            this.dataMensajero = {
                titulo: 'Totales',
                labels: this.filtroMensajero,
                valores: valoresM,
                labelsExtras: ['Mensajeria', 'Guías', 'Clientes', 'Facturas'],
                labelsExtrasHover: ['Mensajeria', 'Guías', 'Clientes', 'Facturas'],
                valuesExtras: this.valuesExtras,
                valuesExtrasHover: valoresMen,
            };
            this.tipoGraficaMensajero = 'General';
        }
        else {
            this.dataMensajero = {
                titulo: 'Totales',
                labels: this.filtroMensajero,
                valores: [1],
                labelsExtras: ['Mensajeria', 'Guías', 'Clientes', 'Facturas'],
                labelsExtrasHover: ['Mensajeria', 'Guías', 'Clientes', 'Facturas'],
                valuesExtras: [0, 0, 0, 0],
                valuesExtrasHover: [[0, 0, 0, 0]],
            };
            this.tipoGraficaMensajero = 'Gris';
            setTimeout(function () {
                _this.mensajeroData = true;
            }, 5);
        }
        //////// Emìeza grafica Cliente //////
        var valoresC = [];
        var valoresClientes = [];
        if (this.cliente && this.cliente.length > 0) {
            for (var _b = 0, _c = this.cliente; _b < _c.length; _b++) {
                var nombre = _c[_b];
                this.filtroCliente.push(nombre.concepto);
                valoresClientes.push([0, 0, 0, 0]);
                valoresC.push(0);
            }
        }
        if (valoresC.length > 0) {
            this.dataCliente = {
                titulo: 'Totales',
                labels: this.filtroCliente,
                valores: valoresC,
                labelsExtras: ['Clientes', 'Guías', 'Mensajeria', 'Facturas'],
                labelsExtrasHover: ['Clientes', 'Guías', 'Mensajeria', 'Facturas'],
                valuesExtras: this.valuesExtrasClientes,
                valuesExtrasHover: valoresClientes,
            };
            this.tipoGraficaCliente = 'General';
        }
        else {
            this.dataCliente = {
                titulo: 'Totales',
                labels: this.filtroCliente,
                valores: [1],
                labelsExtras: ['Clientes', 'Guías', 'Mensajeria', 'Facturas'],
                labelsExtrasHover: ['Clientes', 'Guías', 'Mensajeria', 'Facturas'],
                valuesExtras: [0, 0, 0, 0],
                valuesExtrasHover: [[0, 0, 0, 0]],
            };
            setTimeout(function () {
                _this.tipoGraficaCliente = 'Gris';
                _this.clienteData = true;
            }, 5);
        }
    };
    MaterialReceptorGdlComponent.prototype.calcularDatosParaGraficas = function () {
        for (var _i = 0, _a = this.mensajeria; _i < _a.length; _i++) {
            var mensajero = _a[_i];
            this.llenarTotalesGraficas(this.dataMensajero, mensajero, 'MENSAJERIA');
        }
        for (var _b = 0, _c = this.cliente; _b < _c.length; _b++) {
            var cliente = _c[_b];
            this.llenarTotalesGraficas(this.dataCliente, cliente, 'CLIENTES');
        }
    };
    MaterialReceptorGdlComponent.prototype.llenarTotalesGraficas = function (total, elemento, graficaElegida) {
        var _this = this;
        switch (graficaElegida) {
            case 'MENSAJERIA':
                var valuesExtraAux = total.valuesExtras;
                var valuesExtrasHover = total.valuesExtrasHover;
                var posicion1 = this.filtroMensajero.indexOf(elemento.concepto);
                total.valuesExtrasHover[posicion1][0] += elemento.totalMensajeria;
                // total.valuesExtrasHover[posicion1][0] += elemento.totalProductos;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                // totalAux.valuesExtras[2] += elemento.monto;
                // total.valuesExtras[2] = new AccountingFormatMoney().transform( totalAux.valuesExtras[2]);
                // total.valuesExtras[1] += elemento.totalPiezas; // Total de Partidas
                // total.valuesExtras[0] += elemento.totalProductos; // Total de Productos
                total.valores[posicion1] += elemento.totalGuias; // +(elemento.monto.toFixed(2)); //Monto total
                // valuesExtrasHover[posicion1][1] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicion1][1] += elemento.totalGuias;
                total.valuesExtrasHover[posicion1][2] += elemento.totalClientes;
                total.valuesExtrasHover[posicion1][3] += elemento.totalFacturas;
                setTimeout(function () {
                    _this.mensajeroData = true;
                }, 5);
                break;
            case 'CLIENTES':
                valuesExtraAux = total.valuesExtras;
                valuesExtrasHover = total.valuesExtrasHover;
                var posicion2 = this.filtroCliente.indexOf(elemento.concepto);
                total.valores[posicion2] += elemento.totalGuias;
                total.valuesExtrasHover[posicion2][0] += elemento.totalClientes;
                total.valuesExtrasHover[posicion2][1] += elemento.totalGuias;
                total.valuesExtrasHover[posicion2][2] += elemento.totalMensajeria;
                total.valuesExtrasHover[posicion2][3] += elemento.totalFacturas;
                /*---------Termina------*/
                setTimeout(function () {
                    _this.clienteData = true;
                }, 5);
                break;
            default:
                break;
        }
    };
    MaterialReceptorGdlComponent.prototype.recargarVista = function (event) {
        this.vistaPrincipal = true;
        var idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        this.datosGrafica(idUsuario);
    };
    MaterialReceptorGdlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-material-receptor-gdl',
            template: __webpack_require__("./src/app/components/material-receptor-gdl/material-receptor-gdl.component.html"),
            styles: [__webpack_require__("./src/app/components/material-receptor-gdl/material-receptor-gdl.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_material_receptor_material_receptor_service__["a" /* MaterialReceptorService */], __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_4__services_comun_comun_service__["a" /* ComunService */]])
    ], MaterialReceptorGdlComponent);
    return MaterialReceptorGdlComponent;
}());



/***/ }),

/***/ "./src/app/components/material-receptor-gdl/material-receptor-gdl.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialReceptorGdlModule", function() { return MaterialReceptorGdlModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_receptor_gdl_component__ = __webpack_require__("./src/app/components/material-receptor-gdl/material-receptor-gdl.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_receptor_gdl_routing_module__ = __webpack_require__("./src/app/components/material-receptor-gdl/material-receptor-gdl-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__vista_escanear_guia_vista_escanear_guia_component__ = __webpack_require__("./src/app/components/material-receptor-gdl/vista-escanear-guia/vista-escanear-guia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MaterialReceptorGdlModule = /** @class */ (function () {
    function MaterialReceptorGdlModule() {
    }
    MaterialReceptorGdlModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__material_receptor_gdl_routing_module__["a" /* MaterialReceptorGdlRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__material_receptor_gdl_component__["a" /* MaterialReceptorGdlComponent */],
                __WEBPACK_IMPORTED_MODULE_10__vista_escanear_guia_vista_escanear_guia_component__["a" /* VistaEscanearGuiaComponent */]
            ]
        })
    ], MaterialReceptorGdlModule);
    return MaterialReceptorGdlModule;
}());



/***/ }),

/***/ "./src/app/components/material-receptor-gdl/vista-escanear-guia/vista-escanear-guia.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 55px)'}\">\n    <div style=\"height: 100%; width: 100%; display: -webkit-box\" >\n      <div class=\"listaProd\">\n        <div class=\"titulosLista\">\n          <div  class=\"tituloCliente\">\n            <label class=\"tituloLista\">GUÍAS</label>\n          </div>\n          <div class=\"organizarLista\">\n            <div style=\"width: 10%; height: 100%;    display: flex;align-items: center;\">\n              <div class=\"menu\" (click)=\"abreCombo()\">\n                <div>\n                </div>\n                <div>\n                </div>\n                <div>\n                </div>\n                <section id=\"section\">\n                  <ul class=\"listaHamburguesa\">\n                    <li (click)=\"ordenamientoFechaTramNue(0)\">Más Nuevos</li>\n                    <li (click)=\"ordenamientoFechaTramAnt(0)\">Mas Antiguos</li>\n                  </ul>\n                </section>\n              </div>\n            </div>\n            <div style=\"width: 38%; height: 100%;    display: flex;align-items: center;\">\n              <h3 class=\"subtitulo\">{{tipoOrden}}</h3>\n            </div>\n            <div class=\"barraBusqueda\" style=\"height: 100%\">\n              <div class=\"buscar\" style=\"padding-left: 236px;\">\n                <div>\n                  <div class=\"lupa\">\n                    <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\n                  </div>\n                  <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Buscar\"/>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--Lista total-->\n        <div class=\"segundaSeccionList\">\n          <div style=\"width: 97%;\">\n            <div class= \"lista\" style=\"display: unset;flex-direction: column\" *ngIf=\"validarLista\">\n              <div  [ngClass]=\"listaFD[i]\" *ngFor=\"let item of lista; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\n                <div class=\"dfSelect\"></div>\n                <div class=\"datosLst\" style=\"padding-top: 5px;padding-left: 15px;display: flex; width: 100%;box-sizing: border-box;padding-bottom: 10px;\" (click)=\"seleccionarItem(i, item)\">\n                  <div class=\"informacionList\">\n                    <label class=\"numeroIndex\"> #{{i +1}} · <span class=\"tipoMen\"> {{item.mensajeria}}</span></label>\n                    <span class=\"guia\">Guía: {{item.guia}}</span>\n                    <h3 class=\"fechaEnv\"> Fecha de Envio : {{fechas[i].fecha}} · {{fechas[i].hora}} {{fechas[i].tipo}}</h3>\n                    <div style=\"display: flex;justify-content: space-between;\">\n                      <h3 class=\"totalesList\"> <img height=\"17px;\" src=\"./assets/Images/catalogo/btnClientes_azul.png\" style=\"padding-right: 5px;\">{{item.totalClientes}} Clientes</h3>\n                      <h3 class=\"totalesList\"><img height=\"17px;\" src=\"./assets/Images/ventas/visitas/archivos.svg\" style=\"padding-right: 5px;\">{{item.totalFacturas}} Facturas</h3>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--Lista de busqueda-->\n            <div class= \"lista\" style=\"display: unset;flex-direction: column\" *ngIf=\"!validarLista\">\n              <div  [ngClass]=\"listaFD[i]\" *ngFor=\"let item of  clientesSearched; let i = index\"  (click)=\"seleccionarItem(i, item)\" class=\"select\">\n                <div class=\"dfSelect\"></div>\n                <div class=\"datosLst\" style=\"padding-top: 5px;padding-left: 15px;display: flex; width: 100%;box-sizing: border-box;padding-bottom: 10px;\" (click)=\"seleccionarItem(i)\">\n                  <div class=\"informacionList\">\n                    <label class=\"numeroIndex\"> #{{i +1}} · <span class=\"tipoMen\">{{item.mensajeria}}</span></label>\n                    <span class=\"guia\">Guía: {{item.guia}}</span>\n                    <h3 class=\"fechaEnv\"> Fecha de Envio : {{fechas[i].fecha}} · {{fechas[i].hora}} {{fechas[i].tipo}}</h3>\n                    <div style=\"display: flex;justify-content: space-between;\">\n                      <h3 class=\"totalesList\"> <img height=\"17px;\" src=\"./assets/Images/catalogo/btnClientes_azul.png\" style=\"padding-right: 5px;\">{{item.totalClientes}} Clientes</h3>\n                      <h3 class=\"totalesList\"><img height=\"17px;\" src=\"./assets/Images/ventas/visitas/archivos.svg\" style=\"padding-right: 5px;\">{{item.totalFacturas}} Facturas</h3>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!---->\n          </div>\n        </div>\n        <div class=\"totales\">\n          <label># {{total}}</label>\n          <label>{{totCli}} Clientes</label>\n          <label>{{totFac}} Facturas</label>\n          <!--<label>{{totDir}} Direcciones</label>-->\n        </div>\n      </div>\n      <!--linea degradada-->\n      <div class=\"borderLine\"></div>\n      <div class=\"contenidoEsaneo\">\n        <div class=\"tituloEscaneo\" style=\"min-height: 50px;\">\n          <label>LECTURA CÓDIGO DE BARRAS</label>\n        </div>\n        <div class=\"escaneo\">\n          <div class=\"vistaPedimento\">\n\n              <textarea  id=\"pedimento\" type=\"text\" name=\"firstname\" autofocus=\"focus\"  (keydown.enter)=\"enter()\"\n               #textarea  [(ngModel)]=\"textoPedimento\" class=\"texArea\">\n            </textarea>\n\n            <div class=\"contenedorImagen\" >\n              <div style=\"height: 25%;%; display:flex\"></div>\n              <div style=\"height:27%; display:flex; width:50%; \">\n                <img width=\"100%\" height=\"100%\" src='./assets/Images/Codigo_de_barras.svg' *ngIf=\"inicio\">\n                <img width=\"100%\" height=\"100%\" src=\"./assets/Images/Codigo_de_barras_incorrecto.svg\"  *ngIf=\"escaneoIncorrecto\">\n                <img width=\"100%\" height=\"100%\" src=\"./assets/Images/Codigo_de_barras_correcto.svg\"  *ngIf=\"escaneoCorrecto\">\n              </div>\n              <div style=\"height:6%; display:flex\"></div>\n              <div style=\"height:12%; display:flex; align-items:center; \"  *ngIf=\"activarGuia\">\n                <!-- <label class=\"textoPedimento\">[3018 8000249]</label> -->\n                <label class=\"subtituloEscaneo\">Escanea el código de barras</label>\n              </div>\n              <div style=\"height:19%; display:flex; flex-direction:column;\" *ngIf=\"activarGuia\">\n                <label class=\"subtituloEscaneo\" [style.color]=\"escaneoCorrecto? '#008894':'#848387'\">Guía: {{numGuiaEscanear}}</label>\n                <label class=\"subtituloEscaneo\"></label>\n              </div>\n              <div style=\"height:19%; display:flex\"> </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n<div style=\"width: 100%; height: 50px\">\n  <div style=\"width: 100%;height: 100%\">\n    <footer class=\"footer\">\n      <div class=\"abreviaciones\">\n        <div class=\"Prioridad1\">\n          <label class=\"p1\"><img height=\"17px;\" src=\"./assets/Images/catalogo/btnClientes_azul.png\" class=\"imgFooter\"><span class=\"texto\"> Clientes</span></label>\n        </div>\n        <div class=\"Prioridad2\">\n          <label class=\"p2\"><img height=\"17px;\" src=\"./assets/Images/ventas/visitas/archivos.svg\" class=\"imgFooter\"><span class=\"texto\"> Facturas</span></label>\n        </div>\n\n      </div>\n    </footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/material-receptor-gdl/vista-escanear-guia/vista-escanear-guia.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n.lista {\n  width: 100%;\n  min-height: 80px;\n  font-size: 20px;\n  padding: 15px 19px 14px 13px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  line-height: 1.3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto; }\n.lista > .index {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    height: 52px; }\n.lista > .datosLst {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto; }\n.lista > .datosLst > p {\n      font-weight: normal; }\n.lista div:hover {\n    background-color: #ECEEF0; }\n.lista > .divActual {\n    background-color: #ECEEF0;\n    -webkit-box-shadow: 0 2px 4px -3px #008895;\n            box-shadow: 0 2px 4px -3px #008895; }\n.lista > .divActive {\n    background-color: #ECEEF0; }\n.lista > .divActive .dfSelect {\n      background: #008895 !important;\n      width: 5px !important;\n      color: #008895; }\n.lista > .divActive .datosLst {\n      -webkit-box-ordinal-group: 1;\n          -ms-flex-order: 0;\n              order: 0;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n      -ms-flex-item-align: auto;\n          -ms-grid-row-align: auto;\n          align-self: auto; }\n.textoPiezas {\n  font-family: \"Roboto-regular\";\n  font-size: 21px; }\n.titulo {\n  padding-left: 30px;\n  font-family: Novecentowide;\n  font-weight: Bold;\n  font-size: 24px; }\n.buscar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  width: 100%;\n  border-style: solid; }\n.buscar div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 249px;\n    border-radius: 102px 102px 102px 102px;\n    -moz-border-radius: 102px 102px 102px 102px;\n    -webkit-border-radius: 102px 102px 102px 102px;\n    border: 0.5px solid #BFC0C7;\n    height: 26px; }\n.buscar div div {\n      border: none;\n      border-radius: 0px 0px 0px 0px;\n      -moz-border-radius: 0px 0px 0px 0px;\n      -webkit-border-radius: 0px 0px 0px 0px;\n      border: 0px solid #000000;\n      width: 40px;\n      background: transparent;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n.buscar div .buscar-input {\n      cursor: pointer;\n      background: transparent;\n      border-radius: 100px;\n      -moz-border-radius: 102px 102px 102px 102px;\n      border: 0px solid #000000;\n      width: 100%;\n      font-family: Helvetica;\n      font-size: 18px;\n      color: #AAA9AF;\n      outline: none;\n      padding-left: 5px; }\n.barraBusqueda {\n  width: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n.footer {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.linea {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  text-align: center; }\n.datosC {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-width: 1608px;\n  margin-left: 20px;\n  margin-right: 20px;\n  width: 98%; }\n.organizarLista {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 10px;\n  position: relative;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 50%; }\n.subtitulo {\n  font-size: 18px;\n  font-family: Roboto;\n  font-weight: 300; }\n.tituloLista {\n  font-size: 24px;\n  font-family: Novecento;\n  font-weight: bold; }\n.numeroIndex {\n  font-size: 20px;\n  font-family: Roboto;\n  font-weight: bold;\n  text-align: left;\n  padding-right: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 4px; }\n.numeroIndex > .tipoMen {\n    font-family: Roboto;\n    font-weight: bold;\n    font-size: 20px;\n    color: #008894;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-left: 5px; }\n.informacionList {\n  font-family: Roboto;\n  width: 85%;\n  padding-top: 4px; }\n.informacionList > .fechaEnv {\n    font-family: Roboto-Regular;\n    font-size: 18px;\n    color: #008894;\n    font-weight: 300; }\n.imgFlecha {\n  width: 17.9px;\n  height: 27.4px; }\n.listaProd {\n  width: 30%;\n  background: #FFFFFF;\n  height: 100%;\n  min-width: 396px;\n  padding-left: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.infoLista {\n  height: 10%;\n  padding-top: 15px;\n  width: 95%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.totales {\n  height: 7%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  width: 95%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 5px; }\n.titulosLista {\n  height: 10%;\n  padding-top: 15px;\n  width: 95%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-bottom: 15px;\n  min-height: 90px; }\n.abreviaciones {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  border-top: 2px solid #424242;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n/******/\n.menu {\n  position: relative; }\n.menu:HOVER {\n  cursor: pointer; }\n.menu > div {\n  width: 20px;\n  height: 2px;\n  background: #000000;\n  margin: 5px; }\nsection {\n  position: absolute;\n  visibility: hidden;\n  height: 0; }\nsection.visible {\n  visibility: visible;\n  height: 120px;\n  overflow: auto;\n  width: 219px;\n  background: #FFFFFF;\n  z-index: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid #ECEEF0;\n  border-top: 1px solid #ECEEF0;\n  border-left: 1px solid #ECEEF0;\n  border-right: 1px solid #ECEEF0; }\n.listaHamburguesa {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 15px;\n  padding-right: 15px; }\n.listaHamburguesa > li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border-bottom: 0.5px solid #ECEEF0;\n    padding-bottom: 5px;\n    padding-top: 5px; }\n.listaHamburguesa > li:hover {\n    background-color: #ECEEF0; }\n.segundaSeccionList {\n  height: 82%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 1px solid;\n  width: 95%;\n  border-top: 1px solid;\n  overflow: auto; }\n.tituloCliente {\n  width: 50%;\n  height: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.cabeceraCliente {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 55%;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  color: #008894;\n  font-family: Roboto;\n  font-weight: bold;\n  font-size: 28px;\n  padding-right: 19.2px; }\n.select {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width: 100%;\n  position: relative;\n  border-bottom: 1px solid #ECEEF0;\n  border-top: 1px solid #ECEEF0; }\n.texto {\n  font-family: Roboto;\n  font-weight: 300; }\n.contenidoEsaneo {\n  width: 69.9%;\n  height: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 20px;\n  padding-right: 20px; }\n.tituloEscaneo {\n  height: 7%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid black;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 24px;\n  font-family: Novecento;\n  font-weight: bold;\n  color: #424242; }\n.escaneo {\n  height: 93%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.subtituloEscaneo {\n  font-family: Roboto-Regular;\n  font-size: 48px;\n  color: #424242; }\n.vistaPedimento {\n  font-family: 'Roboto';\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  height: 100%;\n  width: 100%;\n  position: relative; }\n.textoPedimento {\n  font-family: 'Roboto';\n  font-size: 50px;\n  color: #424242;\n  font-weight: lighter;\n  font-style: normal; }\n.textoVerde {\n  font-family: 'Novecento';\n  font-size: 50px;\n  color: #008895;\n  font-weight: bold; }\n.texArea {\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  opacity: 0; }\n.contenedorImagen {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center; }\n.guia {\n  font-family: Roboto-Regular;\n  font-size: 18px;\n  color: #424242;\n  font-weight: 300; }\n.totalesList {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  font-family: Roboto;\n  font-size: 18px;\n  color: #848387;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-weight: 400; }\n.Prioridad1, .Prioridad2 {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 1.7%;\n  margin-right: 1.7%;\n  font-family: Roboto;\n  font-weight: 300; }\n.borderLine {\n  width: 0.1%;\n  height: 100%;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(2%, #FFFFFF), color-stop(70%, #BCBCBC), color-stop(93%, #FFFFFF)) 100%;\n  background: linear-gradient(to top, #FFFFFF 2%, #BCBCBC 70%, #FFFFFF 93%) 100%; }\n.imgFooter {\n  padding-right: 3.5px; }\n@media all and (max-width: 1690px) and (min-width: 1300px) {\n  .subtituloEscaneo {\n    font-size: 38px; } }\n"

/***/ }),

/***/ "./src/app/components/material-receptor-gdl/vista-escanear-guia/vista-escanear-guia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistaEscanearGuiaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_material_receptor_material_receptor_service__ = __webpack_require__("./src/app/services/material-receptor/material-receptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VistaEscanearGuiaComponent = /** @class */ (function () {
    function VistaEscanearGuiaComponent(_materialReceptor, coreContainer) {
        this._materialReceptor = _materialReceptor;
        this.coreContainer = coreContainer;
        this.vistaP = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.lista = []; /* [{ 'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 5},
          {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
          {  'cliente':"PHS", "nombre": 'PQF', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 3},
          {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
          { 'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 2},
          { 'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
          {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11},
          {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 21},
          {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11},
          {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 4},
          {  'cliente':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 6}];*/
        this.clientes = [];
        this.validarLista = true;
        this.datosProducto = [];
        this.listaFD = [];
        this.fechas = [];
        /*Variables apra totales**/
        this.total = 0;
        this.totDir = 0;
        this.totFac = 0;
        this.totCli = 0;
    }
    VistaEscanearGuiaComponent.prototype.ngOnInit = function () {
        this.obtenerLista();
        this.focus = true;
        this.inicio = true;
        /*for (let i: number = 0; i < this.lista.length; i++) {
          this.clientes.push(this.lista[i]);
        }*/
        this.tipoOrden = 'Todos';
    };
    VistaEscanearGuiaComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.focus();
    };
    VistaEscanearGuiaComponent.prototype.obtenerLista = function () {
        var _this = this;
        var idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        this._materialReceptor.getGuias(idUsuario).subscribe(function (data) {
            console.log(data.current);
            var listaAux = data.current;
            var fecha;
            var fechaAux;
            var separador;
            var hora;
            var horaAux;
            for (var i = 0; i < listaAux.length; i++) {
                fechaAux = listaAux[i].fechaEnvio;
                separador = fechaAux.split('-');
                fecha = _this.transform(separador[1] + '-' + separador[2] + '-' + separador[0]);
                horaAux = listaAux[i].hora;
                separador = horaAux.split(':');
                if (separador[0] >= 1 && separador[0] < 12) {
                    _this.tipoHora = 'AM';
                }
                else if (separador[0] >= 12 && separador[0] < 24) {
                    _this.tipoHora = 'PM';
                }
                hora = separador[0] + ':' + separador[1];
                _this.fechas.push({ fechaEnvio: listaAux[i].fechaEnvio, fecha: fecha, hora: hora, tipo: _this.tipoHora });
            }
            _this.lista = data.current;
            _this.clientes = data.current;
            _this.total = _this.lista.length;
            if (_this.lista.length === 0) {
                _this.vistaP.emit(true);
            }
            // this.copiaLista(this.lista);
            _this.calcularTotales(_this.lista);
            _this.seleccionarItem(0, _this.lista[0]);
        });
    };
    VistaEscanearGuiaComponent.prototype.copiaLista = function (lista) {
        this.clientes = [];
        for (var i = 0; i < lista.length; i++) {
            this.clientes.push(lista[i]);
        }
    };
    VistaEscanearGuiaComponent.prototype.transform = function (dateToFormat) {
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
    VistaEscanearGuiaComponent.prototype.calcularTotales = function (lista) {
        var facturas = 0;
        var clientes = 0;
        for (var i = 0; i < lista.length; i++) {
            facturas += lista[i].totalFacturas;
            clientes += lista[i].totalClientes;
        }
        this.totCli = clientes;
        this.totFac = facturas;
    };
    /// Funcion de buscar en facturacion
    VistaEscanearGuiaComponent.prototype.buscar = function (search) {
        var _this = this;
        this.activarGuia = false;
        this.listaFD[this.index] = '';
        this.numGuiaEscanear = '';
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search === '') {
            // this.ClientesSearched= this.clientesConsulta;
            this.lista = this.clientes.slice();
            if (this.tipoOrden === 'Más Nuevos') {
                this.ordenamientoFechaTramNue(1);
            }
            else if (this.tipoOrden === 'Más Antiguos') {
                this.ordenamientoFechaTramAnt(1);
            }
        }
        else {
            this.clientes.forEach(function (folio) {
                if (folio.guia.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            if (searchArrayAux.length > 0 || this.searchTerm) {
                this.lista = searchArrayAux;
            }
            if (this.lista.length > 0) {
                if (this.tipoOrden === 'Más Nuevos') {
                    this.ordenamientoFechaTramNue(1);
                }
                else if (this.tipoOrden === 'Más Antiguos') {
                    this.ordenamientoFechaTramAnt(1);
                }
            }
            this.validarLista = true;
            //  this.regresaConsulta.emit(searchArrayAux);
        }
    };
    /****Seleccionar lista*/
    VistaEscanearGuiaComponent.prototype.seleccionarItem = function (i, item) {
        /****Activar Escaneo*/
        this.activarGuia = true;
        this.escaneoCorrecto = false;
        this.inicio = true;
        this.escaneoIncorrecto = false;
        this.elementRef.nativeElement.focus();
        /********/
        this.index = i;
        this.numGuiaEscanear = item.guia;
        this.idPendiente = item.idPendiente;
        this.tipoPedimento = item.guia;
        this.listaFD = [];
        this.listaFD = new Array(this.lista.length).fill('');
        this.listaFD[i] = 'divActive';
        this.datosProducto = this.lista[i];
        console.log('Soy clic -->', i);
    };
    VistaEscanearGuiaComponent.prototype.ordenamientoFechaTramNue = function (val) {
        this.tipoOrden = 'Más Nuevos';
        if (this.lista.length > 0) {
            this.lista.sort(function (a, b) {
                if (a.fechaEnvio < b.fechaEnvio) {
                    return 1;
                }
                if (a.fechaEnvio > b.fechaEnvio) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
            this.configurarFecha(this.lista);
            // this.copiaLista(this.lista);
            if (val !== 1) {
                this.seleccionarItem(0, this.lista[0]);
            }
        }
    };
    VistaEscanearGuiaComponent.prototype.ordenamientoFechaTramAnt = function (val) {
        this.tipoOrden = 'Más Antiguos';
        if (this.lista.length > 0) {
            this.lista.sort(function (a, b) {
                if (a.fechaEnvio > b.fechaEnvio) {
                    return 1;
                }
                if (a.fechaEnvio < b.fechaEnvio) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });
            this.configurarFecha(this.lista);
            // this.copiaLista(this.lista);
            if (val !== 1) {
                this.seleccionarItem(0, this.lista[0]);
            }
        }
    };
    VistaEscanearGuiaComponent.prototype.configurarFecha = function (lista) {
        this.fechas = [];
        var listaAux = lista;
        var fecha;
        var fechaAux;
        var separador;
        var hora;
        var horaAux;
        for (var i = 0; i < listaAux.length; i++) {
            fechaAux = listaAux[i].fechaEnvio;
            separador = fechaAux.split('-');
            fecha = this.transform(separador[1] + '-' + separador[2] + '-' + separador[0]);
            horaAux = listaAux[i].hora;
            separador = horaAux.split(':');
            if (separador[0] >= 1 && separador[0] < 12) {
                this.tipoHora = 'AM';
            }
            else if (separador[0] >= 12 && separador[0] < 24) {
                this.tipoHora = 'PM';
            }
            hora = separador[0] + ':' + separador[1];
            this.fechas.push({ fechaEnvio: listaAux[i].fechaEnvio, fecha: fecha, hora: hora, tipo: this.tipoHora });
        }
    };
    /*****/
    VistaEscanearGuiaComponent.prototype.abreCombo = function () {
        if (document.getElementById("section").className == "visible") {
            document.getElementById("section").className = "";
        }
        else {
            document.getElementById("section").className = "visible";
        }
    };
    VistaEscanearGuiaComponent.prototype.txt = function (texto) {
        var obj;
        obj = new Object;
        obj.nombre = texto;
        this.textoPedimento = obj.nombre;
        console.log(this.textoPedimento);
    };
    VistaEscanearGuiaComponent.prototype.enter = function () {
        var _this = this;
        var pedimento = this.textoPedimento;
        this.textoPedimento = pedimento.trim();
        if (this.textoPedimento.toLowerCase().indexOf(this.tipoPedimento.toLowerCase()) !== -1) {
            this.escaneoCorrecto = true;
            this.inicio = false;
            this.escaneoIncorrecto = false;
            this.finalizar();
        }
        else {
            this.escaneoCorrecto = false;
            this.inicio = false;
            this.escaneoIncorrecto = true;
            setTimeout(function () {
                _this.elementRef.nativeElement.focus();
            }, 5);
        }
        this.textoPedimento = '';
    };
    VistaEscanearGuiaComponent.prototype.finalizar = function () {
        var _this = this;
        var idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        var objEnviar = { guia: this.numGuiaEscanear, idUsuario: idUsuario, idPendiente: this.idPendiente };
        this.coreContainer.openModal(0);
        this._materialReceptor.finalizar(objEnviar).subscribe(function (data) {
            if (data.current === true) {
                /* this.clientes.splice(this.index, 1);
                 this.lista = [...this.clientes];
                 this.fechas.splice(this.index, 1);*/
                _this.obtenerLista();
                // this.copiaLista(this.lista);
            }
            _this.coreContainer.closeModal(0);
        });
        this.seleccionarItem(0, this.lista[0]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaEscanearGuiaComponent.prototype, "vistaP", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('textarea'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], VistaEscanearGuiaComponent.prototype, "elementRef", void 0);
    VistaEscanearGuiaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-vista-escanear-guia',
            template: __webpack_require__("./src/app/components/material-receptor-gdl/vista-escanear-guia/vista-escanear-guia.component.html"),
            styles: [__webpack_require__("./src/app/components/material-receptor-gdl/vista-escanear-guia/vista-escanear-guia.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_material_receptor_material_receptor_service__["a" /* MaterialReceptorService */], __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], VistaEscanearGuiaComponent);
    return VistaEscanearGuiaComponent;
}());



/***/ })

});
//# sourceMappingURL=material-receptor-gdl.module.chunk.js.map