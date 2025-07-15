webpackJsonp(["interfacturacion.module"],{

/***/ "./src/app/components/interfacturacion/componentes/facturacion/facturacion.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%; height:100%\" *ngIf=\"Vistafacturacion\">\n<div style=\"height: 95%; width: 100%; display: -webkit-box\" >\n  <div style=\"width: 30%;background: #FFFFFF;height: 100%\">\n    <div style=\"height: 15%; padding-top: 15px;width: 90%\">\n      <label class=\"titulo\">Facturación</label>\n      <div style=\"display: -webkit-box;padding-top: 15px\">\n      <h3 style=\"padding-left: 30px\">Todos</h3>\n      <div class=\"barraBusqueda\">\n        <div class=\"buscar\" style=\"padding-left: 236px;\">\n          <div>\n            <div class=\"lupa\">\n              <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\n            </div>\n            <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Cliente\" />\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n    <!--Lista total-->\n    <div style=\"height: 70%;padding-left: 31px; display: flex;\">\n      <div style=\"border-bottom: 1px solid; width: 95%;border-top: 1px solid;overflow: scroll\">\n        <div class= \"lista\" style=\"display: unset;flex-direction: column\" *ngIf=\"validarLista\">\n          <div  *ngFor=\"let item of lista; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%; height: 95px;position: relative; border-bottom: 1px solid #ECEEF0\">\n            <div style=\"position: absolute; position: absolute; padding-top: 20px;right: 0\">\n            <img src=\"./assets/Images/FlechaDerVerde.svg\" style=\"width: 60%; height: 60%;\" (click)=\"seleccionarItem(i)\">\n            </div>\n            <div class=\"dfSelect\"></div>\n            <div class=\"datosLst\" style=\"padding-top: 15px;padding-left: 15px\">\n              <label class=\"index\" style=\"font-family: Roboto-Bold\">#{{i +1}}</label>\n              <label style=\"color: #008894\">{{item.referencia}} < <label style=\"text-align: center;color: #424242\">{{item.nombre}}</label></label>\n              <p>{{item.cantidad}} OC· {{item.precio}}</p>\n              <h3 class=\"textoPiezas\">{{item.piezas}} piezas · {{item.productos}} Productos</h3>\n            </div>\n          </div>\n        </div>\n        <!--Lista de busqueda-->\n        <div class= \"lista\" style=\"display: unset;flex-direction: column\" *ngIf=\"!validarLista\">\n          <div  *ngFor=\"let item of  clientesSearched; let i = index\"  (click)=\"seleccionarItem(i)\" style=\"display: flex;flex-direction:row;width: 100%; height: 95px;position: relative; border-bottom: 1px solid #ECEEF0\">\n            <div style=\"position: absolute; position: absolute; padding-top: 20px;right: 0\">\n              <img src=\"./assets/Images/FlechaDerVerde.svg\" style=\"width: 60%; height: 60%;\" (click)=\"seleccionarItem(i)\">\n            </div>\n            <div class=\"dfSelect\"></div>\n            <div class=\"datosLst\" style=\"padding-top: 15px;padding-left: 15px\">\n              <label class=\"index\" style=\"font-family: Roboto-Bold\">#{{i +1}}</label>\n              <label style=\"color: #008894\">{{item.referencia}} < <label style=\"text-align: center;color: #424242\">{{item.nombre}}</label></label>\n              <p>{{item.cantidad}} OC· {{item.precio}}</p>\n              <h3 class=\"textoPiezas\">{{item.piezas}} piezas · {{item.productos}} Productos</h3>\n            </div>\n          </div>\n        </div>\n        <!---->\n      </div>\n    </div>\n  </div>\n  <div class=\"contenidoGrafica\">\n    <div style=\"height: 5%;\">\n      <label class=\"tituloGrafica\">CLIENTES</label>\n    </div>\n    <div class=\"grafica\">\n    <pn-donut-chart [data]=\"dataFacturacion\" [tipoGrafica]=\"'General'\" [height]=\"'auto'\"></pn-donut-chart>\n    </div>\n  </div>\n</div>\n<div style=\"width: 100%;height: 5%\">\n  <footer class=\"footer\">\n    <div class=\"datosFooter\">\n      <div class=\"Prioridad1\">\n        <label class=\"p1\">PHS</label> Pharma Scientific, inc\n      </div>\n\n      <div class=\"Prioridad2\">\n        <label class=\"p2\">GOL</label> Golocaer\n      </div>\n\n      <div class=\"Prioridad3\">\n        <label class=\"p3\">PQF</label> Proquifa S.A de C.V\n      </div>\n\n      <div class=\"Prioridad3\">\n        <label class=\"p3\">MUN</label> Mungen\n      </div>\n\n      <div class=\"Prioridad3\">\n        <label class=\"p3\">RMT</label> RM Trading Inc.\n      </div>\n\n      <div class=\"Prioridad3\">\n        <label class=\"p3\">OC</label> RM Orden de compra\n      </div>\n      <!--<div class=\"Ambiente\">\n        <img class=\"img\" src='./assets/Images/ambiente.svg' /> Ambiente\n      </div>\n\n      <div class=\"Congelación\">\n        <img class=\"img\" src='./assets/Images/congelacion.svg' /> Congelación\n      </div>\n\n      <div class=\"Refrigeración\">\n        <img class=\"img\" src='./assets/Images/refrigeracion.svg' /> Refrigeración\n      </div>\n      <div class=\"Refrigeración\">\n        <img class=\"img\" src='./assets/Images/Images/Configuracion/Rutas/ubicacion.svg' /> Ubicaciòn\n      </div>-->\n    </div>\n  </footer>\n</div>\n</div>\n<pn-oredenes-de-compra *ngIf=\"activarVistaOrdenesComp\"></pn-oredenes-de-compra>\n"

/***/ }),

/***/ "./src/app/components/interfacturacion/componentes/facturacion/facturacion.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.tituloGrafica {\n  font-size: calc((1vh + 1vw) / 2);\n  font-weight: bold;\n  font-family: Novecento; }\n.grafica {\n  height: 80%;\n  width: 70%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.contenidoGrafica {\n  width: 70%;\n  background: #ECEEF0;\n  height: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.lista {\n  border-bottom: solid 1px #ECEEF0;\n  border-bottom: solid 1px #ECEEF0;\n  width: 100%;\n  min-height: 80px;\n  font-size: 20px;\n  padding: 15px 19px 14px 13px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  line-height: 1.3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto; }\n.lista > .index {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    height: 52px; }\n.lista > .datosLst {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto; }\n.lista > .datosLst > p {\n      font-weight: normal; }\n.lista div:hover {\n    background-color: #ECEEF0; }\n.lista > .divActual {\n    background-color: #ECEEF0;\n    -webkit-box-shadow: 0 2px 4px -3px #008895;\n            box-shadow: 0 2px 4px -3px #008895; }\n.lista > .divActive {\n    background-color: #ECEEF0; }\n.lista > .divActive .dfSelect {\n      background: #008895 !important;\n      width: 5px !important;\n      color: #008895; }\n.lista > .divActive .datosLst label {\n      color: #008895;\n      padding-left: -2px;\n      font-family: \"Roboto-Bold\";\n      font-size: 28px; }\n.lista > .divActive .datosLst p {\n      font-family: \"Roboto-Bold\";\n      font-size: 24px;\n      color: #000000;\n      line-height: 26px; }\n.lista > .divActive .datosLst h3 {\n      font-family: \"Roboto-regular\";\n      font-size: 21px; }\n.textoPiezas {\n  font-family: \"Roboto-regular\";\n  font-size: 21px; }\n.titulo {\n  padding-left: 30px;\n  font-family: Novecentowide;\n  font-weight: Bold;\n  font-size: 24px; }\n.buscar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  height: 50px;\n  width: 100%;\n  border-style: solid; }\n.buscar div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 249px;\n    border-radius: 102px 102px 102px 102px;\n    -moz-border-radius: 102px 102px 102px 102px;\n    -webkit-border-radius: 102px 102px 102px 102px;\n    border: 0.5px solid #BFC0C7;\n    height: 26px; }\n.buscar div div {\n      border: none;\n      border-radius: 0px 0px 0px 0px;\n      -moz-border-radius: 0px 0px 0px 0px;\n      -webkit-border-radius: 0px 0px 0px 0px;\n      border: 0px solid #000000;\n      width: 40px;\n      background: transparent;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n.buscar div .buscar-input {\n      cursor: pointer;\n      background: transparent;\n      border-radius: 100px;\n      -moz-border-radius: 102px 102px 102px 102px;\n      border: 0px solid #000000;\n      width: 100%;\n      font-family: Helvetica;\n      font-size: 18px;\n      color: #AAA9AF;\n      outline: none;\n      padding-left: 5px; }\n.barraBusqueda {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n.footer {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n  align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 57px;\n  max-height: 57px;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: row;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -ms-flex-pack: start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n  align-content: stretch;\n  -ms-flex-align: stretch;\n  -webkit-box-align: inherit;\n          align-items: inherit;\n  border-top: 2px solid black;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  font-size: 14px;\n  min-width: 759px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.linea {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  text-align: center; }\n.datosFooter {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 14px;\n  min-width: 759px; }\n.Prioridad1, .Prioridad2, .Prioridad3, .Ambiente, .Congelación, .Refrigeración, .Pedimento {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 0.7%;\n  margin-right: 0.7%; }\n.p1 {\n  color: #424242;\n  font-weight: bold; }\n.p2 {\n  color: #424242;\n  font-weight: bold; }\n.p3 {\n  color: #424242;\n  font-weight: bold; }\n.img, .p1, .p2, .p3 {\n  margin-right: 6px; }\n.datosC {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-width: 1608px;\n  margin-left: 20px;\n  margin-right: 20px;\n  width: 98%; }\n"

/***/ }),

/***/ "./src/app/components/interfacturacion/componentes/facturacion/facturacion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturacionComponent; });
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

var FacturacionComponent = /** @class */ (function () {
    function FacturacionComponent() {
        //// Data estatico para visualizar la grafica.
        this.cambiarBarraRegreso = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dataFacturacion = {
            titulo: 'Clientes',
            labels: ['Totales'],
            valores: [6, 3],
            labelsExtras: [['clientes'], ['Ordenes de compra'], ['Piezas'], ['Monto']],
            labelsExtrasHover: ['clientes', 'Ordenes de compra', 'Piezas', 'Monto'],
            valuesExtras: [6, 324, 157, 5000],
            valuesExtrasHover: [[6, 3, 1, 2], [324, 157, 50, 100]]
        };
        this.lista = [{ 'referencia': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 5 },
            { 'referencia': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12 },
            { 'referencia': "PHS", "nombre": 'PQF', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 3 },
            { 'referencia': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12 },
            { 'referencia': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 2 },
            { 'referencia': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12 },
            { 'referencia': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11 },
            { 'referencia': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 21 },
            { 'referencia': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11 },
            { 'referencia': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 4 },
            { 'referencia': "PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 6 }];
        this.clientes = [];
        this.validarLista = true;
        this.Vistafacturacion = true; /// VARIABLE PARA VISUALIZAR LA PRIMER VISTA DE FACTURACION
    }
    FacturacionComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.lista.length; i++) {
            this.clientes.push(this.lista[i]);
        }
    };
    FacturacionComponent.prototype.seleccionarItem = function ($index) {
        this.Vistafacturacion = false;
        this.activarVistaOrdenesComp = true;
        this.cambiarBarraRegreso.emit(false);
        console.log('Soy clic -->', $index);
    };
    /// Funcion de buscar en facturacion
    FacturacionComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search == "") {
            // this.ClientesSearched= this.clientesConsulta;
            this.clientesSearched = this.clientes.slice();
        }
        else {
            this.clientes.forEach(function (folio) {
                if (folio.nombre
                    .toLowerCase()
                    .indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.clientesSearched = searchArrayAux;
            this.validarLista = false;
            //  this.regresaConsulta.emit(searchArrayAux);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FacturacionComponent.prototype, "cambiarBarraRegreso", void 0);
    FacturacionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-facturacion',
            template: __webpack_require__("./src/app/components/interfacturacion/componentes/facturacion/facturacion.component.html"),
            styles: [__webpack_require__("./src/app/components/interfacturacion/componentes/facturacion/facturacion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FacturacionComponent);
    return FacturacionComponent;
}());



/***/ }),

/***/ "./src/app/components/interfacturacion/interfacturacion-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterfacturacionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfacturacion_component__ = __webpack_require__("./src/app/components/interfacturacion/interfacturacion.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InterfacturacionRoutingModule = /** @class */ (function () {
    function InterfacturacionRoutingModule() {
    }
    InterfacturacionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__interfacturacion_component__["a" /* InterfacturacionComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], InterfacturacionRoutingModule);
    return InterfacturacionRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/interfacturacion/interfacturacion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\n  <!--Seccion de menu-->\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\n    <aside [ngClass]=\"classAsideMenu\">\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\n        <pn-menu-seccion [items]=\"itemsMenu\" [titulo]=\"'FACTURISTA'\"  style=\"width: 100%;\"></pn-menu-seccion>\n      </div>\n    </aside>\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n    </div>\n  </div>\n  <!--Termina seccion de menu-->\n  <!--Empieza el area de trabajo-->\n  <div class=\"area\">\n    <!--Empieza la cabezera-->\n    <div class=\"cabezera\">\n      <div style=\"cursor: pointer;\" *ngIf=\"!vistaInicialActiva\" (click)=\"regresarVistaP()\">\n        <img class=\"img\" src='./assets/Images/regresar.svg'/>\n      </div>\n      <label class=\"etiqueta\">INTERFACTURACIÓN</label>\n    </div>\n    <!--Termina la cabezera-->\n    <!--Empiezan los componentes-->\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 64px)'}\" *ngIf=\"vistaFacturacion\">\n      <pn-facturacion (cambiarBarraRegreso)=\"cambiarDireccionamiento($event)\"></pn-facturacion>\n    </div>\n    <!--Terminan los componentes-->\n  </div>\n  <!--Termina area de trabajo-->\n</div>\n"

/***/ }),

/***/ "./src/app/components/interfacturacion/interfacturacion.component.scss":
/***/ (function(module, exports) {

module.exports = ".padre {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.aux .asideNormalMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  min-width: 181px;\n  width: 321px;\n  height: 100%;\n  overflow-y: scroll; }\n\n.aux .asideNormalMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.aux > .asideOcultarMenu {\n  -webkit-animation-name: ocultarMenu;\n          animation-name: ocultarMenu;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-transition: 1s ease-in-out;\n  transition: 1s ease-in-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 0px;\n  width: 0px; }\n\n.aux > .asideOcultarMenu > .articulo {\n    width: 0px; }\n\n.aux > .asideMostrarMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  -webkit-animation-name: mostrarMenu;\n          animation-name: mostrarMenu;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-y: scroll; }\n\n.aux > .asideMostrarMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n@-webkit-keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n\n@keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n\n@-webkit-keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n\n@keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n\n.area {\n  width: 100%;\n  height: 100%; }\n\n.cabezera {\n  width: 100%;\n  height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 13px;\n  border-bottom: 2px solid black; }\n\n.etiqueta {\n  color: #5B5B5B;\n  font-size: 25px;\n  font-family: Novecentowide; }\n\n.img {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/interfacturacion/interfacturacion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterfacturacionComponent; });
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

var InterfacturacionComponent = /** @class */ (function () {
    function InterfacturacionComponent() {
        this.totInterfac = 3;
        this.vistaInicialActiva = true;
        this.classAsideMenu = 'asideNormalMenu';
        this.itemsMenu = [
            { nombre: 'Interfacturación', tipo: 'valor', valor: this.totInterfac, url: '', disable: true },
        ];
        /* AQUI TERMINA*/
        this.vistaFacturacion = true;
    }
    InterfacturacionComponent.prototype.ngOnInit = function () {
    };
    /*Metodos para el menu de secciones*/
    InterfacturacionComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = "asideOcultarMenu";
        }
        else {
            this.classAsideMenu = "asideMostrarMenu";
        }
    };
    InterfacturacionComponent.prototype.regresarVistaP = function () {
        var _this = this;
        setTimeout(function () {
            _this.vistaFacturacion = false;
        }, 5);
        this.vistaInicialActiva = true;
        setTimeout(function () {
            _this.vistaFacturacion = true;
        }, 5);
    };
    InterfacturacionComponent.prototype.cambiarDireccionamiento = function ($event) {
        // this.vistaFacturacion = false;
        this.vistaInicialActiva = $event;
    };
    InterfacturacionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-interfacturacion',
            template: __webpack_require__("./src/app/components/interfacturacion/interfacturacion.component.html"),
            styles: [__webpack_require__("./src/app/components/interfacturacion/interfacturacion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InterfacturacionComponent);
    return InterfacturacionComponent;
}());



/***/ }),

/***/ "./src/app/components/interfacturacion/interfacturacion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterfacturacionModule", function() { return InterfacturacionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfacturacion_component__ = __webpack_require__("./src/app/components/interfacturacion/interfacturacion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfacturacion_routing_module__ = __webpack_require__("./src/app/components/interfacturacion/interfacturacion-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_menu_seccion_menu_seccion_component__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_facturacion_facturacion_component__ = __webpack_require__("./src/app/components/interfacturacion/componentes/facturacion/facturacion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_component__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_oredenes_de_compra_oredenes_de_compra_component__ = __webpack_require__("./src/app/components/interfacturacion/componentes/oredenes-de-compra/oredenes-de-compra.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var InterfacturacionModule = /** @class */ (function () {
    function InterfacturacionModule() {
    }
    InterfacturacionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__interfacturacion_routing_module__["a" /* InterfacturacionRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["f" /* FormsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__interfacturacion_component__["a" /* InterfacturacionComponent */],
                __WEBPACK_IMPORTED_MODULE_4__shared_menu_seccion_menu_seccion_component__["a" /* MenuSeccionComponent */],
                __WEBPACK_IMPORTED_MODULE_5__componentes_facturacion_facturacion_component__["a" /* FacturacionComponent */],
                __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_component__["a" /* DonutChartComponent */],
                __WEBPACK_IMPORTED_MODULE_8__componentes_oredenes_de_compra_oredenes_de_compra_component__["a" /* OredenesDeCompraComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__interfacturacion_component__["a" /* InterfacturacionComponent */]
            ]
        })
    ], InterfacturacionModule);
    return InterfacturacionModule;
}());



/***/ })

});
//# sourceMappingURL=interfacturacion.module.chunk.js.map