webpackJsonp(["ruta-envio-por-cliente.module"],{

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-prioridades-por-cliente/barra-prioridades-por-cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inspeccionPorPrioridad\">\n  <h1>PRIORIDAD DE EMBALAJE</h1>\n  <div id=\"myProgress\">\n    <div id=\"Prioridad1\" [style.width]=\"porcentajeP1\" *ngIf=\"mostrarP1\">\n      <h2>Prioridad 1</h2>\n      <p><label>Por trabajar: </label>{{formatoPzaP1 | acFormatNumber}} <label>P· List</label></p>\n      <p><label *ngIf=\"!existo\">Tiempo Estimado de Trabajo: </label>{{TEIPrioridad1}}</p>\n    </div>\n    <div id=\"Prioridad2\" [style.width]=\"porcentajeP2\" *ngIf=\"mostrarP2\">\n\n      <div class=\"descripcionLargaP2\" *ngIf=\"descripcionLargaP2\">\n        <h2>Prioridad 2</h2>\n        <p><label>Por Inspeccionar: </label>{{formatoPzaP2 | acFormatNumber }} </p>\n        <p><label>Tiempo Estimado de Inspección: </label>{{TEIPrioridad2}}</p>\n      </div>\n\n      <div class=\"descripcionCortaP2\" *ngIf=\"descripcionCortaP2\">\n        <h2>P2</h2>\n        <p><label>PI: </label>{{formatoPzaP2 | acFormatNumber }} <label>P· List</label> </p>\n        <p><label>TEI: </label>{{TEIPrioridad2}}</p>\n      </div>\n\n    </div>\n\n    <div id=\"Prioridad3\" [style.width]=\"porcentajeP3\" *ngIf=\"mostrarP3\">\n\n      <div class=\"descripcionLargaP3\" *ngIf=\"descripcionLargaP3\">\n        <h2>Prioridad 3</h2>\n        <p><label>Por Inspeccionar: </label>{{formatoPzaP3}} <label>P· List</label></p>\n        <p><label>Tiempo Estimado de Inspección: </label>{{TEIPrioridad3}}</p>\n      </div>\n\n      <div class=\"descripcionCortaP3\" *ngIf=\"descripcionCortaP3\">\n        <h2>P3</h2>\n        <p><label>PI: </label>{{formatoPzaP3}} </p>\n        <p><label>TEI: </label>{{TEIPrioridad3}}</p>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-prioridades-por-cliente/barra-prioridades-por-cliente.component.scss":
/***/ (function(module, exports) {

module.exports = "#myProgress {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 123px;\n  color: #9B9B9B;\n  font-family: 'Novecento';\n  margin-left: 0%;\n  padding-top: 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n#Prioridad1 {\n  height: 123px;\n  width: 45%;\n  background-color: #AF3634;\n  text-align: left;\n  line-height: 19px;\n  color: white;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  display: inline-block;\n  font-size: 20px;\n  border: 1px solid white;\n  padding-left: 10px;\n  padding-top: 6px; }\n\n#Prioridad2 {\n  height: 123px;\n  width: 30%;\n  background-color: #EEB253;\n  text-align: left;\n  line-height: 19px;\n  color: white;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  display: inline-block;\n  font-size: 20px;\n  border: 1px solid white;\n  padding-left: 10px;\n  padding-top: 6px; }\n\n#Prioridad3 {\n  height: 123px;\n  width: 30%;\n  background-color: #63B257;\n  text-align: left;\n  line-height: 19px;\n  color: white;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  display: inline-block;\n  font-size: 20px;\n  border: 1px solid white;\n  padding-left: 10px;\n  padding-top: 6px; }\n\np {\n  font-size: 12px;\n  color: white;\n  margin-top: 1%; }\n\nh1 {\n  font-size: 22px;\n  color: #008895;\n  font-family: 'Novecento'; }\n\nh2 {\n  font-size: 20px;\n  color: white; }\n\n.tipoInspeccion {\n  margin-top: 2%;\n  margin-bottom: 2%;\n  text-align: left;\n  font-size: 24px;\n  font-weight: bold; }\n\n.pedimento {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  padding: 3%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.imgPedimento {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  padding: 3%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.txtPedimento {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  padding: 3%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.tipoTexto {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  font-size: 30px;\n  font-weight: 500;\n  font-family: 'Novecento'; }\n\n.datoTexto {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  font-size: 30px;\n  font-family: 'Novecento'; }\n\n.ordenDeCompra {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-height: 121px; }\n\n.txtOC {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.tipoTextoOC {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  font-size: 30px;\n  font-weight: 500;\n  font-family: 'Roboto', sans-serif;\n  padding-bottom: 3%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.datoTextoOC {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  font-size: 30px;\n  font-family: 'Novecento';\n  padding-left: 7%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n@media all and (min-height: 770px) and (max-height: 880px) and (min-width: 1300px) and (max-width: 2571px) {\n  h1 {\n    font-size: 13px; }\n  #Prioridad1 {\n    height: 100px; }\n  #Prioridad2 {\n    height: 100px; }\n  #Prioridad3 {\n    height: 100px; }\n  p {\n    font-size: 9px; }\n  h2 {\n    font-size: 11px; }\n  #myProgress {\n    padding-top: 10px; } }\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-prioridades-por-cliente/barra-prioridades-por-cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarraPrioridadesPorClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_trabajar_ruta_envio_por_cliente_service__ = __webpack_require__("./src/app/services/trabajar-ruta/envio-por-cliente.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BarraPrioridadesPorClienteComponent = /** @class */ (function () {
    function BarraPrioridadesPorClienteComponent(router, coreComponent, _datosPrio) {
        this.router = router;
        this.coreComponent = coreComponent;
        this._datosPrio = _datosPrio;
        this.inspector = "aHernandezM";
        this.PackingList = [];
        // Piezas por prioridad
        this.pzasP1 = 0;
        this.pzasP2 = 0;
        this.pzasP3 = 0;
    }
    BarraPrioridadesPorClienteComponent.prototype.ngOnInit = function () {
        this.obtenerTiempoTrabajoEnvio();
    };
    // Método para obtener el promedio por pieza de cada packing list.
    BarraPrioridadesPorClienteComponent.prototype.obtenerTiempoTrabajoEnvio = function () {
        var _this = this;
        this._datosPrio.obtenerTiempo().subscribe(function (data) {
            /*Calcular tiempo POR pieza*/
            var tiempoT;
            tiempoT = data.current.Tiempo[0].tiempo;
            /****************************/
            _this.PackingList = data.current.Piezas;
            _this.PackingList.forEach(function (element) {
                if (element.prioridad === 'P1') {
                    _this.pzasP1 = element.totalPiezas;
                }
                else if (element.prioridad === 'P2') {
                    _this.pzasP2 = element.totalPiezas;
                }
                else if (element.prioridad === 'P3') {
                    _this.pzasP3 = element.totalPiezas;
                }
            });
            _this.tiempo = tiempoT;
            _this.TEIPrioridad1 = _this.obtenerTiempoEstimado(_this.pzasP1, _this.tiempo);
            _this.TEIPrioridad2 = _this.obtenerTiempoEstimado(_this.pzasP2, _this.tiempo);
            _this.TEIPrioridad3 = _this.obtenerTiempoEstimado(_this.pzasP3, _this.tiempo);
            /******/
            _this.mostrarP1 = _this.visualizarP1(_this.pzasP1);
            _this.mostrarP2 = _this.visualizarP2(_this.pzasP2);
            _this.mostrarP3 = _this.visualizarP3(_this.pzasP3);
            /******/
            _this.formatoPzaP1 = (_this.pzasP1 == 1) ? _this.pzasP1 + ' pieza' : _this.pzasP1 + ' piezas';
            _this.formatoPzaP2 = (_this.pzasP2 == 1) ? _this.pzasP2 + ' pieza' : _this.pzasP2 + ' piezas';
            _this.formatoPzaP3 = (_this.pzasP3 == 1) ? _this.pzasP3 + ' pieza' : _this.pzasP3 + ' piezas';
            /******/
            _this.porcentajeP1 = _this.obtenerPorcentajeP1(_this.mostrarP1, _this.mostrarP2, _this.mostrarP3) + "%";
            _this.porcentajeP2 = _this.obtenerPorcentajeP2(_this.mostrarP1, _this.mostrarP2, _this.mostrarP3) + "%";
            _this.porcentajeP3 = _this.obtenerPorcentajeP3(_this.mostrarP1, _this.mostrarP2, _this.mostrarP3) + "%";
        });
    };
    // Funciones para porcentajes
    BarraPrioridadesPorClienteComponent.prototype.obtenerPorcentajeP1 = function (value1, value2, value3) {
        var porcentaje;
        if (value1 == true && value2 == true && value3 == false) {
            porcentaje = 70;
        }
        else if (value1 == true && value2 == true && value3 == true) {
            porcentaje = 50;
        }
        else if (value1 == true && value2 == false && value3 == true) {
            porcentaje = 70;
        }
        return porcentaje;
    };
    BarraPrioridadesPorClienteComponent.prototype.obtenerPorcentajeP2 = function (value1, value2, value3) {
        var porcentaje;
        if (value1 == false && value2 == true && value3 == true) {
            this.descripcionLargaP2 = true;
            this.descripcionCortaP2 = false;
            this.descripcionLargaP3 = false;
            this.descripcionCortaP3 = true;
            porcentaje = 70;
        }
        else if (value1 == true && value2 == true && value3 == true) {
            this.descripcionLargaP2 = false;
            this.descripcionCortaP2 = true;
            this.descripcionLargaP3 = false;
            this.descripcionCortaP3 = true;
            porcentaje = 25;
        }
        else if (value1 == true && value2 == true && value3 == false) {
            this.descripcionCortaP2 = true;
            this.descripcionLargaP2 = false;
            porcentaje = 30;
        }
        return porcentaje;
    };
    BarraPrioridadesPorClienteComponent.prototype.obtenerPorcentajeP3 = function (value1, value2, value3) {
        var porcentaje;
        if (value1 == true && value2 == false && value3 == true) {
            this.descripcionLargaP3 = false;
            this.descripcionCortaP3 = true;
            porcentaje = 30;
        }
        else if (value1 == true && value2 == true && value3 == true) {
            porcentaje = 25;
        }
        else if (value1 == false && value2 == true && value3 == true) {
            porcentaje = 30;
        }
        return porcentaje;
    };
    //Funciones para visualizar los recuadros por prioridad
    BarraPrioridadesPorClienteComponent.prototype.visualizarP1 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            return true;
    };
    BarraPrioridadesPorClienteComponent.prototype.visualizarP2 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            this.descripcionLargaP2 = true;
        return true;
    };
    BarraPrioridadesPorClienteComponent.prototype.visualizarP3 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            this.descripcionLargaP3 = true;
        return true;
    };
    BarraPrioridadesPorClienteComponent.prototype.obtenerTiempoEstimado = function (piezas, tPromedio) {
        var tiempo = piezas * tPromedio;
        var hours;
        var minutes;
        var seconds;
        hours = Math.floor(tiempo / 3600);
        minutes = Math.floor((tiempo % 3600) / 60);
        seconds = tiempo % 60;
        // Anteponiendo un 0 a los minutos si son menos de 10
        minutes = minutes < 10 ? '0' + minutes : minutes;
        // Validacion de pruebas para cuando el tiempo es menor o igual a 1 min.
        if ((hours == 0 || hours == NaN) && minutes == 0) {
            var result = "1 min";
            return result;
            // console.log("1 minuto restante o menos  ");
        }
        else if (hours <= 0) {
            var result = minutes + " min";
            return result;
        }
        else {
            var result = hours + " hr " + minutes + " min";
            return result;
        }
    };
    BarraPrioridadesPorClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-barra-prioridades-por-cliente',
            template: __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-prioridades-por-cliente/barra-prioridades-por-cliente.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-prioridades-por-cliente/barra-prioridades-por-cliente.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__services_trabajar_ruta_envio_por_cliente_service__["a" /* EnvioPorClienteService */]])
    ], BarraPrioridadesPorClienteComponent);
    return BarraPrioridadesPorClienteComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-progreso-por-cliente/barra-progreso-por-cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"barraProgreso\">\n\n  <div class=\"barra\">\n    <h1>PROGRESO DE {{evento| uppercase}}</h1>\n    <div class=\"datos\">\n      <div class=\"mensaje\">\n        <label class=\"mensajeBarra\">{{mensaje}}</label>\n      </div>\n      <div class=\"hora\">\n        <img src='./assets/Images/reloj.svg' style=\"margin-right: 10px;\" class=\"imagenReloj\"/>\n        <label>{{hora}}</label>\n      </div>\n    </div>\n\n\n    <div class=\"padreBarraProgreso\" style=\"position: relative\">\n      <div id=\"myProgress\">\n        <div id=\"myBar\" [style.width]=\"promedio\" [style.background]=\"colorBarra\">\n          <span class=\"tooltiptextleft\" *ngIf=\"tooltiptextLeft\">{{formatoPzasInspeccionadas}}</span>\n          <label class=\"textLeft\" *ngIf=\"textLeft\">{{formatoPzasInspeccionadas}}</label>\n        </div>\n\n        <div id=\"myBar2\" [style.width]=\"restante\">\n          <span class=\"tooltiptextRigth\" *ngIf=\"toolTipRigth\">{{formatoPzasRestantes}}</span>\n          <label class=\"textRigth\" *ngIf=\"textRigth\">{{formatoPzasRestantes}}</label>\n        </div>\n      </div>\n      <div class=\"datosBarra\">\n        <div class=\"PzasIniciales\">\n          0 Packing List\n        </div>\n        <div class=\"pzasTotales\">\n          {{pzasTotales}} Packing List\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-progreso-por-cliente/barra-progreso-por-cliente.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.barraProgreso {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  height: 20%;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-family: 'Roboto', sans-serif; }\n.barra {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  height: 100%;\n  width: 50%;\n  text-align: left;\n  font-family: 'Roboto', sans-serif; }\n#myProgress {\n  width: 100%;\n  background-color: #ddd;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 70px;\n  font-weight: bold;\n  margin-top: 1%;\n  color: #9B9B9B; }\n#myBar {\n  height: 100%;\n  background-color: #9DB83C;\n  text-align: center;\n  line-height: 30px;\n  color: #424242;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n  position: relative;\n  display: inline-block; }\n.datosBarra {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: 1%;\n  font-weight: bold;\n  font-size: 14px; }\n.PzasIniciales {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto; }\n.pzasTotales {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto; }\n.textLeft,\n.textRigth {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\nh1 {\n  font-size: 20px;\n  color: #008894; }\n.datos {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.mensaje {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto; }\n.hora {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  font-size: 30px;\n  font-weight: bold;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.tooltip .tooltiptext::after {\n  content: \" \";\n  position: absolute;\n  bottom: 100%;\n  /* At the top of the tooltip */\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent #4C4C4C transparent; }\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1; }\n.tooltip {\n  position: relative;\n  display: inline-block;\n  cursor: pointer; }\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 130px;\n  background-color: #4C4C4C;\n  color: #FFFFFF;\n  font-family: 'Roboto';\n  text-align: left;\n  border-radius: 6px;\n  padding: 5px 10px 0px 0px;\n  font-size: 9px;\n  padding: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  left: 2%;\n  margin-left: -60px;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1; }\n.mensajeBarra {\n  font-style: italic;\n  padding-top: 5px; }\n.imagenReloj {\n  width: 37px;\n  height: 37px; }\n.textLeft, .textRigth {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-family: 'Roboto'; }\n#myBar2 .tooltiptextRigth {\n  visibility: visibility;\n  width: 119px;\n  height: 17%;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: -10%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  left: 50%;\n  margin-left: -60px;\n  font-size: 10px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n#myBar2 .tooltiptextRigth::after {\n  content: \" \";\n  position: absolute;\n  bottom: 100%;\n  /* At the top of the tooltip */\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent black transparent; }\n#myBar {\n  height: 100%;\n  text-align: center;\n  line-height: 30px;\n  color: #FFFFFF;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n  position: relative;\n  display: inline-block;\n  font-size: 25px; }\n#myBar2 {\n  height: 100%;\n  background-color: #ddd;\n  text-align: center;\n  line-height: 30px;\n  color: white;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  color: #9B9B9B;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  display: inline-block;\n  font-weight: bold;\n  font-size: 25px; }\n#myBar .tooltiptextleft {\n  visibility: visibility;\n  width: 119px;\n  height: 17%;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: -10%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  left: 50%;\n  margin-left: -60px;\n  font-size: 10px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n#myBar .tooltiptextleft::after {\n  content: \" \";\n  position: absolute;\n  color: #424242;\n  bottom: 100%;\n  /* At the top of the tooltip */\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent black transparent; }\n/******************MEDIA PARA EL TAMAÑO PEQUEÑO *************/\n@media all and (min-height: 770px) and (max-height: 880px) and (min-width: 1300px) and (max-width: 2571px) {\n  #myBar2 {\n    font-size: 16px; }\n  #myBar {\n    font-size: 16px; }\n  h1 {\n    font-size: 13px; }\n  .padreBarraProgreso {\n    width: 356px; }\n  #myProgress {\n    width: 356px;\n    height: 47px; }\n  .mensajeBarra {\n    font-size: 11px; }\n  .hora {\n    font-size: 12px; }\n  .imagenReloj {\n    width: 20px; } }\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-progreso-por-cliente/barra-progreso-por-cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarraProgresoPorClienteComponent; });
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

var BarraProgresoPorClienteComponent = /** @class */ (function () {
    function BarraProgresoPorClienteComponent() {
        // inspector:string = "aHernandezM";
        this.evento = "trabajo de ruta";
        this.mensaje = "Con el ritmo de inspección actual, lograrás cumplir el objetivo";
        //Estos son los valores centrales del componente, simplemente al modificar estos datos el comportamiento del componente cambia-
        this.PzasInspeccionadas = 10;
        this.pzasTotales = 150;
        this.PackingList = [];
        ///////////// variables de mensaje para barra de progreso y el color////////////////////////////////
        this.mensajeNaranja = 'Con el ritmo de Trabajo actual, no lograrás cumplir el objetivo.';
        this.mensajeAzul = 'Acelera el ritmo de Tabajo, para que logres el objetivo.';
        this.mensajeVerde = 'Con el ritmo de Trabajo actual, lograrás cumplir el objetivo.';
        this.naranja = '#FF6700';
        this.azul = '#0098DA';
        this.verde = '#94BA13 ';
    }
    BarraProgresoPorClienteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.PzasInspeccionadas = this.totPiezas;
        this.pzasTotales = this.packingTotales;
        this.obtenerPiezasInspeccion(this.inspector);
        this.idHora = setInterval(function () {
            _this.hora = _this.obtenerHoraActual();
        }, 1000);
    };
    BarraProgresoPorClienteComponent.prototype.obtenerPiezasInspeccion = function (inspector) {
        //  this.obtenerRestante(this.pzasTotales);
        this.restante = this.obtenerRestante(this.pzasTotales) + '%';
        this.pzasRestantes = (this.pzasTotales - this.PzasInspeccionadas);
        this.formatoPzasRestantes = (this.pzasRestantes === 1) ? this.pzasRestantes + ' Packing List (restante)' : this.pzasRestantes + ' Packing List (restantes)';
        this.promedio = this.obtenerPorcentaje(this.pzasTotales, this.PzasInspeccionadas) + '%';
        this.formatoPzasInspeccionadas = (this.PzasInspeccionadas === 1) ? this.PzasInspeccionadas + ' Packing List enviado' : this.PzasInspeccionadas + ' Packing List enviados';
    };
    // Funcion para obtener porcentaje restante
    BarraProgresoPorClienteComponent.prototype.obtenerRestante = function (pzasTotales) {
        var restante = 100 - this.obtenerPorcentaje(this.pzasTotales, this.PzasInspeccionadas);
        return restante;
    };
    BarraProgresoPorClienteComponent.prototype.obtenerHoraActual = function () {
        var fecha = new Date();
        var formatoMinutos = fecha.getMinutes();
        var minutes = (formatoMinutos < 10) ? '0' + formatoMinutos : formatoMinutos;
        var formatoHoras = fecha.getHours();
        var hours = (formatoHoras < 10) ? '0' + formatoHoras : formatoHoras;
        return hours + ':' + minutes + ' Hrs.';
    };
    // Funcion para obtener el porcentaje de progreso además de mostrar y ocultar los tooltip y textos
    BarraProgresoPorClienteComponent.prototype.obtenerPorcentaje = function (totales, inspeccionadas) {
        var porcentaje;
        if (totales < inspeccionadas) {
            alert('El numero de piezas inspeccionadas es mayor que las piezas totales');
        }
        else if (totales === inspeccionadas) {
            porcentaje = Math.round((inspeccionadas * 100) / totales);
        }
        else {
            porcentaje = Math.round((inspeccionadas * 100) / totales);
            if (porcentaje <= 25) {
                this.toolTipRigth = false;
                this.textRigth = true;
                this.tooltiptextLeft = true;
                this.textLeft = false;
            }
            else if (porcentaje >= 85 && porcentaje <= 100) {
                this.toolTipRigth = true;
                this.textRigth = false;
                this.tooltiptextLeft = false;
                this.textLeft = true;
            }
            else {
                this.toolTipRigth = false;
                this.textRigth = true;
                this.tooltiptextLeft = false;
                this.textLeft = true;
            }
        }
        return porcentaje;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BarraProgresoPorClienteComponent.prototype, "totPiezas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BarraProgresoPorClienteComponent.prototype, "packingTotales", void 0);
    BarraProgresoPorClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-barra-progreso-por-cliente',
            template: __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-progreso-por-cliente/barra-progreso-por-cliente.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-progreso-por-cliente/barra-progreso-por-cliente.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BarraProgresoPorClienteComponent);
    return BarraProgresoPorClienteComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/finalizar-envio-cliente/finalizar-envio-cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<script src='http://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular-resource.js'></script>\n<script src='../../../../../../app/services/session/consume-rest.js'></script>\n<div style=\"width: 100%;height: calc(100% - 59px);overflow: auto;\">\n  <div class=\"content-area\">\n    <div id=\"principal\">\n      <div style=\" width: 100%; height: 100%; justify-content: space-between; display: flex;\">\n        <div id=\"encabezados\" style=\" height: 100%;\">\n          <div class=\"infoPL\" *ngIf=\"datosCliente.length > 0\">\n            <label class=\"label_estilo_encabezado \">INFORMACIÓN PACKING LIST</label>\n            <label class=\"label_nombre_lugar \">{{datosCliente[0].cliente}}</label>\n            <label class=\"label_cliente \"> {{contactoInfo}} </label>\n            <div style=\"\" class=\"ubicacion\">\n              <img id=\"ubicacion\" src=\"./assets/Images/Configuracion/Rutas/ubicacion.svg\" style=\"width: 14px\"/>\n              <span class=\"label_ubicacion\" style=\"padding-left: 10px;\"> {{datosCliente[0].ruta}} · {{datosCliente[0].mensajeria}}</span>\n\n            </div>\n          </div>\n          <div class=\"progresoTrabajo\">\n            <pn-barra-progreso-por-cliente *ngIf=\"activarBarraProgreso\" [totPiezas]=\"recibePiezasTot\"\n                                              [packingTotales]=\"totalesPacking\"></pn-barra-progreso-por-cliente>\n          </div>\n          <div class=\"prioridadEmbalaje\">\n            <pn-barra-prioridades-por-cliente *ngIf=\"activarBarraPrioridades\"></pn-barra-prioridades-por-cliente>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"contenedorFormulario\">\n      <div class=\"infoEnvio\">\n        <div>\n          <div>\n            <div class=\" subtituloPeque \"\n                 style=\" padding-top: 10px; display: flex;\">Destino\n            </div>\n            <div class=\"rowFormulario\">\n              <div class=\"datosForm\">\n                <div class=\"estiloLabelData\">País:</div>\n                <div class=\"estiloLabelsContacto\">{{datosCliente[0].pais}}</div>\n              </div>\n              <div class=\"datosForm\">\n                <div class=\"estiloLabelData\">Estado:</div>\n                <div class=\"estiloLabelsContacto\">{{datosCliente[0].estado}}</div>\n              </div>\n              <div class=\"datosForm\">\n                <div class=\"estiloLabelData\">Calle / Nº / Colonia:</div>\n                <div class=\"estiloLabelsContacto\">{{datosCliente[0].calle}}</div>\n              </div>\n            </div>\n            <div class=\"rowFormulario\">\n              <div class=\"datosForm\">\n                <div class=\"estiloLabelData\">Delegación / Municipio:</div>\n                <div class=\"estiloLabelsContacto\">{{datosCliente[0].delegacion}}</div>\n              </div>\n              <div class=\"datosForm\">\n                <div class=\"estiloLabelData\">C.P:</div>\n                <div class=\"estiloLabelsContacto\">{{datosCliente[0].cp}}</div>\n              </div>\n              <div class=\"datosForm\">\n                <div class=\"estiloLabelData\">Ruta:</div>\n                <div class=\"estiloLabelsContacto\">{{datosCliente[0].ruta}}</div>\n              </div>\n              <div class=\"datosForm\" style=\"z-index: 3;\">\n                <div class=\"estiloLabelData\">Mensajeria:</div>\n                <div class=\"estiloLabelsContacto\" style=\"min-width: 136px\" *ngIf=\"this.datosCliente[0].envio.tipo !== 'Guia'\"><!--{{colectarElemtosAux[0].mensajeria}}-->\n                  <pn-combo-flecha-verde [title]=\"'Seleccionar'\"  [itemSelect]=\"selectedEnvio\" id=\"cmbEnvio\"  (valueDropList)=\"recibeValosCombo($event,'envio')\" [items]=\"tiposEnvios\" [heightLi]=\"'35px'\"></pn-combo-flecha-verde>\n                </div>\n                <div class=\"estiloLabelsContacto\" *ngIf=\"this.datosCliente[0].envio.tipo === 'Guia'\">\n                  {{this.mensajeria}}\n                </div>\n              </div>\n              <div class=\"datosForm\" *ngIf=\"activeCuenta\">\n                <div class=\"estiloLabelData\"># Cuenta: </div>\n                <div class=\"estiloLabelsContacto\">{{datosCliente[0].numero}}</div>\n              </div>\n            </div>\n          </div>\n          <div class=\"comentarioEnvio\">\n            <div>\n              <label class=\"subtituloPeque\" style=\" padding-bottom: 10px; display: flex;\">Comentario\n                de envío</label>\n              <div>\n                <div class=\"estiloLabelData\" *ngIf=\"comentarios !== null\">\n                  <textarea class=\"comentariosText\" readonly>{{comentarios}}</textarea>\n                </div>\n              </div>\n              <div>\n                <div *ngIf=\"comentarios == null\">\n                  <div class=\"contenedorComentario\" *ngIf=\"!etiquetaComentarios\">\n                    <label>SIN COMENTARIOS</label>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div>\n              <label class=\" subtituloPeque \" style=\"display: flex;\">Datos del paquete</label>\n              <div class=\"datosPaq\">\n                <div style=\"padding-bottom: 5px;\">\n                  <label class=\"estiloLabelData\">Peso:</label>\n                  <input class=\"inputPaquete\" name=\"peso\" id=\"peso\"\n                         (input)=\"recibeContacto($event.target.value,'peso')\" [value]=\"valorInicial\"\n                          style=\"z-index: 3\" [(ngModel)]=\"peso\" *ngIf=\"this.datosCliente[0].envio.tipo !== 'Guia'\">\n                  <label class=\"estiloLabelData\" *ngIf=\"this.datosCliente[0].envio.tipo !== 'Guia'\">kg</label>\n                  <label class=\"estiloLabelData\" *ngIf=\"this.datosCliente[0].envio.tipo === 'Guia'\">{{dataMeter.peso}} kg</label>\n                </div>\n                <div style=\"padding-bottom: 5px;\">\n                  <label class=\"estiloLabelData\">Longitud:</label>\n                  <input class=\"inputPaquete\" name=\"longitud\" id=\"longitud\"\n                         (input)=\"recibeContacto($event.target.value,'longitud')\" value=\" \"\n                         style=\"z-index: 3\" [(ngModel)]=\"longitud\" *ngIf=\"this.datosCliente[0].envio.tipo !== 'Guia'\">\n                  <label class=\"estiloLabelData\" *ngIf=\"this.datosCliente[0].envio.tipo !== 'Guia'\">cm</label>\n                  <label class=\"estiloLabelData\" *ngIf=\"this.datosCliente[0].envio.tipo === 'Guia'\">{{dataMeter.length}} cm</label>\n                </div>\n\n                <div style=\"padding-bottom: 5px;\">\n                  <label class=\"estiloLabelData\">Altura:</label>\n                  <input class=\"inputPaquete\" name=\"altura\" id=\"altura\"\n                         (input)=\"recibeContacto($event.target.value,'altura')\" value=\" \"\n                         style=\"z-index: 3\" [(ngModel)]=\"altura\" *ngIf=\"this.datosCliente[0].envio.tipo !== 'Guia'\">\n                  <label class=\"estiloLabelData\" *ngIf=\"this.datosCliente[0].envio.tipo !== 'Guia'\">cm</label>\n                  <label class=\"estiloLabelData\" *ngIf=\"this.datosCliente[0].envio.tipo === 'Guia'\">{{dataMeter.height}}cm</label>\n                </div>\n\n                <div style=\"padding-bottom: 5px;position: relative;z-index: 1;\">\n                  <label class=\"estiloLabelData\">Ancho:</label>\n                  <input class=\"inputPaquete\" name=\"ancho\" id=\"ancho\"\n                         (input)=\"recibeContacto($event.target.value, 'ancho')\" value=\" \"\n                         style=\"z-index: 3\" [(ngModel)]=\"ancho\" *ngIf=\"this.datosCliente[0].envio.tipo !== 'Guia'\">\n                  <label class=\"estiloLabelData\" *ngIf=\"this.datosCliente[0].envio.tipo !== 'Guia'\">cm</label>\n                  <label class=\"estiloLabelData\" *ngIf=\"this.datosCliente[0].envio.tipo === 'Guia'\">{{dataMeter.width}} cm</label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div style=\"width: 50%;box-sizing: border-box;padding-left: 10px;display: flex\">\n          <div class=\"contacto\">\n            <div>\n              <label class=\" subtituloPeque \" style=\" padding-top: 10px; display: flex;\"> Contacto</label>\n              <div class=\"rowFormulario\">\n                <div class=\"datosForm\">\n                  <div class=\"estiloLabelData\">Nombre:</div>\n                  <div class=\"estiloLabelsContacto\">{{datosCliente[0].contacto}}</div>\n                </div>\n                <div class=\"datosForm\">\n                  <div class=\"estiloLabelData\">Puesto:</div>\n                  <div class=\"estiloLabelsContacto\">{{datosCliente[0].puesto}}</div>\n                </div>\n              </div>\n              <div class=\"rowFormulario\">\n                <div class=\"datosForm\" style=\"position: relative;z-index: 1;\">\n                  <div class=\"estiloLabelData\">Departamento:</div>\n                  <div class=\"estiloLabelsContacto\">{{datosCliente[0].departamento}}</div>\n                </div>\n                <div class=\"datosForm\">\n                  <label class=\"estiloLabelData\">Tel:</label>\n                  <div class=\"estiloLabelsContacto\">{{datosCliente[0].tel}}</div>\n                </div>\n                <div class=\"datosForm\" style=\"position: relative;z-index: 1;\">\n                  <label class=\"estiloLabelData\">Email:</label>\n                  <div class=\"estiloLabelsContacto\">{{datosCliente[0].mail}}</div>\n                </div>\n              </div>\n            </div>\n            <div style=\"padding-top: 15px;\">\n              <label class=\"subtituloPeque\">Registro de envío</label>\n              <div id=\"archivo\" class=\"archivo\">\n                <div class=\"datosForm\" style=\"align-items: center;\">\n                  <label class=\"estiloLabelData\" class=\"estiloLabelsContacto\"> Guía de envío:</label>\n                  <div>\n                    <input id=\"ingresoNumTracking\" class=\"estiloInputMensajero\" name=\"mensajero \" value=\" \" type=\"text \"\n                           maxlength=\"10\" [ngModel]=\"ingresoTracking\" (ngModelChange)=\"incluirTrackingArreglo($event)\"\n                           style=\"z-index: 3; position: relative\" *ngIf=\"this.datosCliente[0].envio.tipo !== 'Guia'\">\n                    <label style=\"z-index: 3; position: relative\" *ngIf=\"this.datosCliente[0].envio.tipo === 'Guia'\">{{datosCliente[0].numero}}</label>\n                  </div>\n                  <label id=\"localizacion\"></label>\n                </div>\n                <div class=\"datosForm\" style=\"align-items: center;\">\n                  <label class=\"estiloLabelData\"> Guía de envío escaneada:</label>\n                  <div id=\"EstiloCargarArchivo\">\n\n                    <div>\n                      <pq-file-upload  [disabled]=\"true\" [docR]=\"guiaDoc\" style=\"min-width: 260px;display: flex;\"\n                                      (enviarDocumento)=\"recibeDocumentacion($event)\"\n                                      [activarOjito]=\"tipoEnvio\"></pq-file-upload>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"secondSeccion\">\n        <div class=\"listaNueva\">\n          <label class=\"encabezadoLista\">PACKING LIST</label>\n          <div id=\"estilo_borde_verde_lista\" class=\"lista\">\n            <div [ngClass]=\"lstResultadoCotizaciones[i]\" *ngFor=\"let packing_list of encabezadosPasckinList; let i = index\" class=\"listaItem\" (click)=\"itemSelect(i)\">\n              <div class=\"ltSelect\"></div>\n              <div id=\"listaContent\" style=\"display: flex; flex-direction: column; justify-content: space-between; \">\n                <label class=\"numPacking_list \"> #{{i+1}}· <span\n                  style=\" padding-bottom: 15px;\"\n                  class=\"nombrePacking_list \"> {{packing_list.folio}}  </span></label>\n                <label class=\"piezasPacking_llist \"> {{packing_list.piezas}}&nbsp;{{'Piezas'}}</label>\n                <div style=\"display: flex; flex-direction: row \">\n                  <label class=\"p1\"> P1 · {{packing_list.p1}} </label>\n                  <label class=\"p2\"> P2 · {{packing_list.p2}} </label>\n                  <label class=\"p3\"> P3 · {{packing_list.p3}} </label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div style=\"overflow-y: scroll\" class=\"segundaSeccion\">\n          <div class=\"escanearCodigos\">\n            <div class=\"tituloColectar\">\n          <span class=\"tituloColectarElem\">\n          COLECTAR ELEMENTO </span>\n              <span class=\"estiloNombreSeleccioncliente\"> {{datoPL}}</span>\n            </div>\n            <!-- div de tipos de elementos -->\n            <div class=\"elementosItems\">\n          <textarea type=\"text\" name=\"firstname\" autofocus=\"focus\" (keydown.enter)=\"enterAux()\" #textarea\n                    [(ngModel)]=\"codigosBarraElemento\" class=\"textArea\"\n                    style=\"width: 95%; position: absolute\"></textarea>\n              <div class=\"seccionUno\" [attr.id]=\"'div0'\" *ngIf=\"colectarElemtosAux.length>0\">\n                <div class=\"contenedorTarjeta\">\n                  <div class=\"imagenTarjeta\">\n                    <label class=\"estiloTipoElemento\">DOCUMENTACIÓN</label>\n                    <img class=\"img\" src=\"./assets/Images/bolsa_doc.svg\" style=\" width: 68px; height: 74px;\"/>\n                    <div class=\"divColectarElementos\"\n                         style=\"border:1px solid #D8D8D8; display: flex; flex-direction: column; \">\n                      <label class=\"labelcolectarElementos\">{{datoPL}}</label>\n                      <label class=\"labelcolectarElementos\">Sobre</label>\n                      <label class=\"labelcolectarElementos\"></label>\n                    </div>\n                  </div>\n                  <div class=\"escanear\" style=\"flex-direction: row; display: flex; position: relative; \">\n                    <div class=\"imgEscanear\">\n                      <img src='./assets/Images/Images/codigo_gris.svg' *ngIf=\"!codigosValidos[indexPacking][0]\"/>\n                      <img src='./assets/Images/Images/codigobarras_verde.svg' *ngIf=\"codigosValidos[indexPacking][0]\"/>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div id=\"seccionUno\" class=\"seccionUno\" *ngFor=\"let elemento of colectarElemtosAux; let i = index \"\n                   [attr.id]=\"'div'+i\">\n                <div class=\"contenedorTarjeta\">\n                  <div class=\"imagenTarjeta\">\n                    <label class=\"estiloTipoElemento\"> {{elemento.tipo}} </label>\n                    <img class=\"img\" [src]=\"imgTipoValidacionArr[i]\" style=\" width: 68px; height: 74px;\"/>\n                    <div class=\"divColectarElementos\"\n                         style=\"border:1px solid #D8D8D8; display: flex; flex-direction: column; \">\n                      <label class=\"labelcolectarElementos\">{{elemento.folio}}</label>\n                      <label class=\"labelcolectarElementos\">{{tipoDeProducto[i]}}</label>\n                      <label class=\"labelcolectarElementos\">{{elemento.cant}}&nbsp;{{'Piezas'}}</label>\n                    </div>\n                  </div>\n                  <div class=\"escanear\" style=\"flex-direction: row; display: flex; position: relative; \">\n                    <div class=\"imgEscanear\">\n                      <img src='./assets/Images/Images/codigo_gris.svg' *ngIf=\"!codigosValidos[indexPacking][i+1]\"/>\n                      <img src='./assets/Images/Images/codigobarras_verde.svg' *ngIf=\"codigosValidos[indexPacking][i+1]\"/>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!-- prueba-->\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"totalPacking\">\n      <div>\n        <label class=\"totalPacking_llist \" style=\"align-content:center; padding-left: 70px;\">{{'Total :'}}\n          {{totalPacking}} {{'Packing list'}}</label>\n      </div>\n    </div>\n  </div>\n  <div class=\"totalFinalizar\">\n    <div class=\"botonFinalizar\" (click)=\"finalizar()\" [style.pointerEvents]=\"btnAceptar ? 'auto':'none'\"\n         [style.background]=\"btnAceptar ? '#008895':'#C2C3C9'\"> FINALIZAR\n    </div>\n  </div>\n</div>\n<footer class=\"footer \" style=\" border: none; border-top: solid;\">\n  <div class=\"datosFooter \" style=\"width: 100%;height: 100%;\">\n    <div class=\"Prioridad1 \">\n      <label class=\"p1 \">P1 <span>Prioridad 1</span></label>\n    </div>\n    <div class=\"Prioridad2 \">\n      <label class=\"p2 \">P2 <span>Prioridad 2</span></label>\n    </div>\n    <div class=\"Prioridad3 \">\n      <label class=\"p3 \">P3 <span>Prioridad 3</span></label>\n    </div>\n    <div class=\"Ambiente \">\n      <img class=\"img \" src='./assets/Images/ambiente.svg'/> Ambiente\n    </div>\n    <div class=\"Congelación \">\n      <img class=\"img \" src='./assets/Images/congelacion.svg'/> Congelación\n    </div>\n    <div class=\"Refrigeración \">\n      <img class=\"img \" src='./assets/Images/refrigeracion.svg'/> Refrigeración\n    </div>\n  </div>\n</footer>\n<div *ngIf=\"activarAlerta\">\n  <pq-alerta [alertaTxt]=\"mensaje\" (confirmacion)=\"cerrarAlert($event)\"></pq-alerta>\n</div>\n<div *ngIf=\"activarAlertExit\">\n<pn-pop-up-finalizar (desactivarPop)=\"cerrarPop($event)\" [label]=\"'Operación exitosa'\"\n                     [imagen]=\"true\"></pn-pop-up-finalizar>\n</div>\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/finalizar-envio-cliente/finalizar-envio-cliente.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.content-area {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 20px;\n  padding-right: 20px;\n  width: 100%;\n  min-height: 860px;\n  height: calc(100% - 50px); }\n.encabezadoCliente {\n  font-family: 'Novecento';\n  font-weight: bold;\n  font-size: 28px;\n  color: #424242;\n  text-align: left;\n  padding-left: 30px;\n  size: 150px;\n  height: 50px;\n  padding-top: 20px; }\n.area {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 1px solid #D8D8D8;\n  width: 100%;\n  min-width: 220px;\n  border-top: 1px solid #D8D8D8; }\n.bordeDatosC {\n  width: 100%; }\n.contenedor {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-right: 20px; }\n.label_estilo_encabezado {\n  font-family: 'Novecento';\n  font-weight: bold;\n  font-size: 22px;\n  color: #008895;\n  height: 28px;\n  padding-bottom: 5px; }\n.label_nombre_lugar {\n  font-family: 'Roboto';\n  font-weight: medium;\n  font-size: 18px;\n  color: #424242;\n  width: 369px;\n  height: 52px; }\n.label_cliente {\n  font-family: 'Roboto';\n  font-weight: 'Regular';\n  font-size: 16px;\n  color: #424242;\n  width: 369px;\n  height: 22px; }\n.label_ubicacion {\n  font-family: 'Roboto';\n  font-size: 16px;\n  color: #424242;\n  width: 369px; }\n.encabezadoLista {\n  font-family: Helvetica;\n  font-size: 25px;\n  color: #008895;\n  line-height: 22px;\n  font-weight: bold;\n  padding-bottom: 20px;\n  height: 42px; }\n.numPacking_list {\n  font-family: Helvetica;\n  font-size: 20px;\n  color: black;\n  line-height: 22px;\n  font-weight: bold;\n  padding-bottom: 12px; }\n.totalPacking_llist {\n  font-size: 12px;\n  color: #404040;\n  text-align: center;\n  font-family: 'Roboto';\n  width: 167px;\n  height: 16px; }\n.datosFooter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 14px;\n  min-width: 759px;\n  min-height: 56px;\n  max-height: 56px; }\n.Ambiente,\n.Congelación,\n.Prioridad1,\n.Prioridad2,\n.Prioridad3,\n.Refrigeración {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 0.7%;\n  margin-right: 0.7%; }\n.p1, .p2, .p3 {\n  margin-right: 10px; }\n.p1 {\n  color: #AF3634;\n  font-weight: bold; }\n.p1 > span {\n    color: #242424;\n    font-weight: 400; }\n.p2 {\n  color: #EEB253;\n  font-weight: bold; }\n.p2 > span {\n    color: #242424;\n    font-weight: 400; }\n.p3 {\n  color: #63B236;\n  font-weight: bold; }\n.p3 > span {\n    color: #242424;\n    font-weight: 400; }\n.img {\n  padding-right: 6px;\n  cursor: pointer; }\n.nombrePacking_list {\n  font-family: Helvetica-Bold;\n  font-size: 20px;\n  color: #008895;\n  line-height: 22px; }\n.seleccionLista {\n  font-family: Helvetica;\n  font-weight: bold;\n  font-size: 25px;\n  color: #008895;\n  width: 100%; }\n.contenedorComentario {\n  opacity: 0.18;\n  font-family: Novecento;\n  font-size: 20px;\n  color: #4A4A4A;\n  text-align: center;\n  font-weight: bold; }\n.estiloComentario {\n  font-family: Roboto;\n  color: #4A4A4A;\n  font-size: 15px; }\n.estiloNombreSeleccioncliente {\n  font-family: 'Novecento';\n  font-size: 25px;\n  color: #008895;\n  text-align: left;\n  line-height: 30px;\n  padding-left: 20px; }\n.subtitulos {\n  font-family: Roboto;\n  font-size: 18px;\n  color: #4A4A4A;\n  font-weight: bold;\n  padding-top: 20px;\n  padding-bottom: 20px; }\n.subtituloPeque {\n  font-family: Roboto;\n  font-size: 18px;\n  color: #4A4A4A;\n  font-weight: bold; }\n.divColectarElemntos {\n  font-family: Roboto-Medium;\n  font-size: 14px;\n  color: #008895;\n  text-align: center;\n  padding-bottom: 20px;\n  padding-top: 20px;\n  margin-top: 20px; }\n#encabezados {\n  width: 99%;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  min-width: 800px; }\n.infoPL {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 429px;\n  max-width: 429px; }\n.progresoTrabajo {\n  min-width: 908px;\n  max-width: 908px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-left: 1px solid #D8D8D8;\n  border-right: 1px solid #D8D8D8;\n  padding-left: 25px;\n  padding-right: 25px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.prioridadEmbalaje {\n  min-width: 396px;\n  max-width: 396px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-left: 25px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n#principal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  min-height: 230px;\n  max-height: 230px !important;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-top: 1px solid #D8D8D8;\n  border-bottom: 1px solid #D8D8D8;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.mensajero {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: 0px 0px;\n  border: 1px solid #D8D9DD; }\n.estiloInputMensajero {\n  background-size: 30px;\n  height: 25px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  outline: none;\n  cursor: pointer;\n  width: 100%;\n  margin: -29px 0px;\n  min-width: 255px; }\n.contacto {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-right: 15px; }\n#error {\n  margin-top: 20%; }\n#error > ul > li {\n    background: grey;\n    padding: .5rem;\n    color: white;\n    font-weight: 0;\n    font-size: .8em;\n    text-align: center;\n    -webkit-animation: up 1s ease-in-out 1 backwards;\n            animation: up 1s ease-in-out 1 backwards; }\n.comentarioEnvio {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-top: 10px; }\n.comentariosText {\n  outline: none;\n  border: 1px solid #ECEEF0;\n  width: 220px;\n  height: 54px;\n  resize: none; }\n.lista {\n  height: 100%;\n  overflow: scroll; }\n.lista div:hover {\n    background-color: #ECEEF0; }\n.lista > .divActual {\n    background-color: #ECEEF0;\n    -webkit-box-shadow: 0 2px 4px -3px #008895;\n            box-shadow: 0 2px 4px -3px #008895; }\n.lista > .divActive {\n    height: 101px;\n    background-color: #ECEEF0; }\n.lista > .divActive .ltSelect {\n      background: #008895 !important;\n      width: 10px !important; }\n.lista > .divFinalizar {\n    height: 101px;\n    background-color: #ECEEF0;\n    pointer-events: none;\n    opacity: 0.6; }\n#listaContent {\n  padding-top: 15px;\n  padding-bottom: 15.8px;\n  padding-left: 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.listaItem {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: solid 1px #ECEEF0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.listaSeleccionada {\n  border-bottom: solid 1px #ECEEF0;\n  height: 100%;\n  width: 100%;\n  min-height: 80px;\n  font-size: 20px;\n  padding: 19px 23px 18px 17px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  line-height: 1.3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-left: 6px solid #008895;\n  background-color: #ECEEF0; }\n.listaSeleccionada > .index {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    height: 52px;\n    color: #008895; }\n.listaSeleccionada > .datosLst {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    color: #008895; }\n.listaSeleccionada > .datosLst > p {\n      font-weight: normal;\n      color: #424242; }\n.contenedorFormulario {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-top: 20px;\n  border-top: 1px solid #D8D8D8;\n  height: calc(100vh - 672px);\n  overflow-y: scroll;\n  min-height: 500px; }\n.contenedorFormulario > .secondSeccion {\n    height: 70%;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    margin-top: 5px; }\n.formularioRutas {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 10px 20px;\n  padding-right: 0px;\n  min-width: 450px;\n  width: calc(100% - 514px);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.tabla-clientes {\n  overflow-y: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 267px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  height: 100%;\n  min-height: 270px;\n  overflow-y: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 12px;\n  border-bottom: 1px solid #D8D8D8;\n  width: 15%; }\n.estiloTipoElemento {\n  font-family: Novecento;\n  font-size: 16px;\n  color: #008895;\n  text-align: center;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 15px; }\n.textArea {\n  width: 100%;\n  z-index: 1;\n  opacity: 0;\n  bottom: 0px;\n  top: 0px; }\n.imgEscanear {\n  position: absolute; }\n.divColectarElementos {\n  opacity: 0.94;\n  background: #008895;\n  width: 181px;\n  height: 63px;\n  padding: 5px 0px;\n  border: 1px solid #D8D8D8;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n.divColectarElementos .labelcolectarElementos {\n    font-family: Roboto;\n    font-size: 14px;\n    color: #FFFFFF;\n    text-align: center;\n    font-weight: medium; }\n.escanear {\n  font-family: 'Roboto';\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  height: 30px;\n  width: 100%;\n  margin-top: 22px; }\n.elementosItems {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: calc(100vh - 581px); }\n.infoEnvio {\n  height: 30%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid #D8D8D8;\n  min-height: 200px; }\n.infoEnvio > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 50%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-right: 10px; }\n.escanearCodigos {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px 20px 10px 10px;\n  min-width: 472px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative; }\n.tituloColectar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 80px; }\n.seccionUno {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-bottom: 30px;\n  padding-top: 30px;\n  margin-left: 10px;\n  height: 260px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.contenedorTarjeta {\n  height: 100%; }\n.imagenTarjeta {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border: 1px solid #D8D8D8;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  max-width: 181px;\n  max-height: 208px;\n  min-height: 208px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.datosForm {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.rowFormulario {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding-top: 10px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.estiloLabelsContacto {\n  font-family: Roboto-Light;\n  font-size: 15px;\n  color: #4A4A4A;\n  margin-right: 10px; }\n.estiloTxtAreaContacto {\n  font-family: Roboto-Light;\n  font-size: 15px;\n  color: #4A4A4A; }\n.estiloLabelData {\n  font-family: Roboto-Regular;\n  font-size: 15px;\n  color: #4A4A4A;\n  margin-right: 10px; }\n.botonFinalizar {\n  width: 170px;\n  height: 30px;\n  background: #C2C3C9;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 21px;\n  cursor: pointer;\n  border: none;\n  color: #FFFFFF;\n  font-weight: bold; }\n#EstiloCargarArchivo {\n  font-family: 'Roboto';\n  font-weight: lighter;\n  font-size: 14px;\n  color: #ABAAB0;\n  padding-left: 0px;\n  max-width: 350px; }\n.totalFinalizar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  margin: 15px 0;\n  padding-right: 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.totalPacking {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  margin: 15px 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 42px;\n  min-height: 40px; }\n.totalPacking > div {\n    border-bottom: 1px solid #D8D8D8;\n    border-top: 1px solid #D8D8D8;\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.archivo {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-top: 10px;\n  padding-bottom: 20px; }\n.tituloColectarElem {\n  padding-bottom: 10px;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  font-family: Helvetica-Bold;\n  font-weight: bold;\n  font-size: 25px;\n  color: #008895;\n  width: 100%;\n  padding-left: 20px; }\n.segundaSeccion {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-left: 1px solid #D8D8D8;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  width: 85%;\n  height: 100%; }\n.ubicacion {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding-top: 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.piezasPacking_llist {\n  padding-bottom: 12px; }\n.listaNueva {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 20px;\n  padding-right: 20px;\n  min-width: 267px;\n  width: 15%; }\n.datosPaq {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding-top: 10px;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n  z-index: 1; }\n/deep/ .dropList > .container-drop > .Title {\n  height: 20px !important; }\n/deep/ .dropList > .container-drop > .Title > p {\n    font-size: 16px !important; }\n/deep/ .dropList > .container-drop > .Title > img {\n    top: 4px !important;\n    height: 10px !important; }\n/deep/ .dropListSelect > .container-drop > .Title {\n  height: 20px !important; }\n/deep/ .dropListSelect > .container-drop > .Title > p {\n    font-size: 16px !important; }\n/deep/ .dropListSelect > .container-drop > .Title > img {\n    top: 4px !important;\n    height: 10px !important; }\n@media all and (min-height: 770px) and (max-height: 1130px) and (min-width: 1300px) and (max-width: 2572px) {\n  .label_estilo_encabezado {\n    font-size: 13px; }\n  .label_nombre_lugar, label_cliente {\n    font-size: 12px; }\n  #principal {\n    min-width: 189px;\n    min-height: 180px; }\n  .escanearCodigos, .formularioRutas {\n    height: 100%; }\n  .progresoTrabajo {\n    min-width: 480px; }\n  .infoPL {\n    min-width: 334px; }\n  /*.escanearCodigos{min-width: 0px;max-width: 0px;};\n  .formularioRutas{width: 0px;};*/\n  .encabezadoLista {\n    font-size: 13px;\n    padding-bottom: 0px; }\n  .estiloNombreSeleccioncliente {\n    font-size: 12px; }\n  .tituloColectarElem {\n    font-size: 13px; }\n  .seleccionLista {\n    font-size: 13px; }\n  .subtitulos {\n    font-size: 12px;\n    padding-bottom: 15px;\n    padding-top: 15px; }\n  .subtituloPeque {\n    font-size: 11px;\n    padding-top: 11px; }\n  .estiloLabelData {\n    font-size: 11px; }\n  .estiloLabelsContacto {\n    font-size: 11px;\n    /*min-width: 70px*/ }\n  .rowFormulario {\n    padding-top: 16px; }\n  .numPacking_list {\n    font-size: 12px;\n    padding-bottom: 6px; }\n  .nombrePacking_list {\n    font-size: 12px; }\n  .piezasPacking_llist {\n    font-size: 11px;\n    padding-bottom: 6px; }\n  .p1, .p2, .p3 {\n    font-size: 11px; }\n  .lista > .divActive {\n    height: 88px; }\n  .tabla-clientes {\n    min-width: 230px;\n    border-bottom: 1px solid #D8D8D8; }\n  .seccionUno {\n    padding-top: 0px; }\n  .estiloTipoElemento {\n    padding-bottom: 0px;\n    font-size: 11px; }\n  .imagenTarjeta {\n    max-width: 114.5px;\n    max-height: 159px; }\n  .divColectarElementos {\n    width: 116px;\n    height: 50px; }\n  .tituloColectar {\n    min-height: 60px; }\n  .divColectarElementos > .labelcolectarElementos {\n    font-size: 9px; }\n  .contenedorTarjeta {\n    max-width: 114.5px;\n    max-height: 159px; }\n  .ubicacion {\n    padding-top: 9px; }\n  .escanearCodigos {\n    min-width: 345px; }\n  .comentarioEnvio {\n    padding-top: initial; }\n  .formularioRutas {\n    width: calc(100% - 349px); } }\n@media all and (min-height: 1131px) and (max-height: 1330px) {\n  .content-area {\n    min-height: 820px; } }\n@media all and (min-height: 770px) and (max-height: 1130px) {\n  .content-area {\n    min-height: 760px; } }\n@media all and (min-height: 1335px) and (max-height: 1440px) {\n  .content-area {\n    height: calc(100% - 60px); } }\n.inputPaquete {\n  position: relative;\n  width: 50px; }\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/finalizar-envio-cliente/finalizar-envio-cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalizarEnvioClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trabajar_ruta_envio_por_cliente_service__ = __webpack_require__("./src/app/services/trabajar-ruta/envio-por-cliente.service.ts");
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




var FinalizarEnvioClienteComponent = /** @class */ (function () {
    function FinalizarEnvioClienteComponent(_serviceEnvio, coreComponent) {
        this._serviceEnvio = _serviceEnvio;
        this.coreComponent = coreComponent;
        this.validarPaquteria = false;
        this.finalizarEnvio = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.regresarVistaP = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.focus = true;
        this.activar = false;
        this.pintarCodigo = false;
        this.activarBotonEnvio = false;
        this.popUp = false;
        this.numeroTracking = '';
        this.arreglo_numeros_tracking = [];
        this.arreglo_numeros_trackingCopia = [];
        this.lstResultadoCotizaciones = [];
        this.vistaInicialActiva = true;
        this.contadorM = 0;
        this.tiposEnvios = [
            /* { nombre: '--NINGUNO--', key: 0 }, */
            { nombre: 'DHL', key: 0 },
            { nombre: 'ESTAFETA', key: 1 },
            { nombre: 'FEDEX', key: 2 },
            { nombre: 'UPS', key: 3 }
        ];
        this.indexPacking = 0;
        this.colectarElemtos = [];
        this.colectarElemtosAux = [];
        this.codigosValidos = [];
        this.datosFormulario = [];
        this.btnsFinalizar = [];
        this.encabezadosPasckinList = [];
        this.codigosBarra = [];
        this.imgTipoValidacionArr = [];
        this.labelComentarios = true;
        this.cantidadPL = 0;
        this.tipoDeProducto = [];
        this.valoresData = [];
        this.lstDesactivadas = [];
        this.datosCliente = [];
        this.valoresDataEnvio = [];
        this.validarnumerosEnvio = /^([0-9])*$/;
        this.popUpLocalizar = false;
        this.listaColectarElementosAuxiliar = [];
        this.tipoEnvio = false;
        this.val = 0;
        this.mensajeria = 'Seleccionar';
        this.lstPendientes = [];
        this.lstPacking = [];
        this.auxDataClientCurrent = [];
        this.packing_list = [];
        this.listaAuxiliar = [];
        this.contador = 0;
        this.rutaPath = 'http://proquifa.com.mx:51725/SAP/';
        //rutaPath = 'http://187.189.39.50:51725/SAP/';
        this.usuario = __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__["a" /* SessionUser */].getInstance().getUser();
        this.guiaDoc = [];
    }
    FinalizarEnvioClienteComponent.prototype.ngOnInit = function () {
        this.activarInputs = true;
        this.activeCuenta = true;
        this.activarBarraPrioridades = true;
        this.obtenerPackingListClient();
    };
    FinalizarEnvioClienteComponent.prototype.ngOnChanges = function () {
        if (this.totalesBarra !== undefined && this.totalesBarra !== null && this.totalesBarra.length > 0) {
            if (this.recibePiezasTot !== this.totalesBarra[0].hechas || this.totalesPacking !== this.totalesBarra[0].totales) {
                this.recibePiezasTot = this.totalesBarra[0].hechas;
                this.totalesPacking = this.totalesBarra[0].totales;
                this.activarBarraProgreso = true;
            }
        }
    };
    FinalizarEnvioClienteComponent.prototype.obtenerPackingListClient = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        this._serviceEnvio.obtenerPackingList(this.idCliente).subscribe(function (data) {
            // const arrayAux = Object.getOwnPropertyNames(data.current['PackingList']);
            if (data.current && data.current !== null && data.current !== '') {
                _this.comentarios = data.current['Comentarios'];
                console.log('valor de la lista :) ' + data.current);
                _this.colectarElemtosAux = [];
                _this.encabezadosPasckinList = [];
                _this.colectarElemtos = [];
                _this.codigosValidos = [];
                _this.lstPendientes = [];
                _this.lstPacking = [];
                _this.lstDesactivadas = [];
                _this.auxDataClientCurrent = data.current.PackingList;
                _this.infoCliente = data.current.Cliente;
                console.log('info 1' + _this.auxDataClientCurrent);
                console.log('info 2' + _this.infoCliente);
                console.log('info 3' + data);
                console.log(data.current);
                console.log(_this.infoCliente);
                var array = Object.getOwnPropertyNames(_this.auxDataClientCurrent);
                _this.datosCliente = _this.auxDataClientCurrent[array[0]];
                //// Validar campos vacios
                _this.dataMeter = _this.datosCliente[0].envio;
                var path = _this.rutaPath + 'Guias/' + _this.datosCliente[0].guia + '.pdf';
                console.log('Guia: ', path);
                if (_this.datosCliente[0].envio.tipo === 'Guia') {
                    _this.activeCuenta = false;
                    _this.tipoEnvio = false;
                    _this.activar = true;
                    _this.numGuia = _this.datosCliente[0].numero;
                    _this.guiaDoc = [{ path: path, name: _this.datosCliente[0].guia + '.pdf' }];
                }
                else {
                    _this.activeCuenta = true;
                    _this.tipoEnvio = true;
                    _this.guiaDoc = null;
                }
                if (_this.datosCliente[0].tel === undefined || _this.datosCliente[0].tel === null || _this.datosCliente[0].tel === '') {
                    _this.datosCliente[0].tel = 'ND';
                }
                if (_this.datosCliente[0].puesto === undefined || _this.datosCliente[0].puesto === null || _this.datosCliente[0].puesto === '') {
                    _this.datosCliente[0].puesto = 'ND';
                    var separador = _this.datosCliente[0].contacto.split('-');
                    if (separador.lenght > 0) {
                        _this.contactoInfo = separador[2];
                    }
                    else {
                        _this.contactoInfo = separador[0];
                    }
                }
                else {
                    _this.contactoInfo = _this.datosCliente[0].contacto + '/' + _this.datosCliente[0].puesto;
                }
                if (_this.datosCliente[0].departamento === undefined || _this.datosCliente[0].departamento === null || _this.datosCliente[0].departamento === '') {
                    _this.datosCliente[0].departamento = 'ND';
                }
                /////
                _this.totalPacking = array.length;
                _this.sumaDePackingList = array.length;
                for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                    var datos = array_1[_i];
                    var objetoAux = {};
                    objetoAux['folio'] = datos;
                    objetoAux['piezas'] = 0;
                    objetoAux['p1'] = 0;
                    objetoAux['p2'] = 0;
                    objetoAux['p3'] = 0;
                    _this.colectarElemtos.push(_this.auxDataClientCurrent[datos]);
                    _this.codigosValidos.push(new Array(_this.auxDataClientCurrent[datos].length).fill(false));
                    _this.codigosValidos[_this.codigosValidos.length - 1].splice(0, 0, false);
                    console.log(_this.codigosValidos);
                    _this.codigosBarra.push(new Array(_this.auxDataClientCurrent[datos].length).fill(''));
                    _this.datosFormulario.push({ contacto: '', telefono: '', puesto: '', email: '' });
                    _this.btnsFinalizar.push(false);
                    for (var _a = 0, _b = _this.auxDataClientCurrent[datos]; _a < _b.length; _a++) {
                        var datos2 = _b[_a];
                        objetoAux['piezas'] += datos2.cant;
                        objetoAux['p1'] += datos2.p1;
                        objetoAux['p2'] += datos2.p2;
                        objetoAux['p3'] += datos2.p3;
                    }
                    _this.encabezadosPasckinList.push(objetoAux);
                }
                _this.mostrarListaImagenes(0);
                _this.itemSelect(0);
                _this.valoresData.forEach(function (element) {
                    _this.listaAuxiliar.push(element.folio);
                });
                _this.coreComponent.closeModal(0);
            }
            else {
                _this.coreComponent.closeModal(0);
                _this.regresarVistaP.emit(true);
            }
        }, function (error) {
            console.log(error);
            // terminar loading false
            _this.coreComponent.closeModal(0);
        });
    };
    ////////////// Este metodo es para cambiar de packingList
    FinalizarEnvioClienteComponent.prototype.itemSelect = function (i) {
        var _this = this;
        this.indiceLts = i;
        this.indexAux = i;
        this.textArea.nativeElement.focus();
        this.mostrarListaImagenes(i); //// Se llama al metodo que muestra lo que trae la lista
        this.colectarElemtosAux = this.colectarElemtos[i];
        /// Agregar campo de inicio para la lista de mensajerias
        if (this.contadorM === 0) {
            var obj = void 0;
            obj = new Object;
            obj.nombre = this.colectarElemtosAux[0].mensajeria;
            this.selectedEnvio = obj;
            this.mensajeria = this.colectarElemtosAux[0].mensajeria;
        }
        /////
        this.idPendiente = 'Guia-' + this.colectarElemtosAux[0].idPendiente;
        console.log(this.idPendiente);
        /****************************************************/
        this.datoPL = this.colectarElemtosAux[0].packingList;
        this.indexPacking = i;
        this.lstResultadoCotizaciones = [];
        this.listaAuxiliar = [];
        this.numeroTracking = '';
        this.valor_tracking = '';
        this.fileName = '';
        this.activarBtn = true;
        this.btnAceptar = false;
        this.datoRemove = 0;
        /***************************/
        this.activar = false;
        this.valorInicial = '';
        /***************************/
        this.arreglo_numeros_tracking.forEach(function (element) {
            if (i === element.indexObjeto) {
                _this.pruebaIndex = i;
                _this.datoRemove = element.indexObjeto;
                _this.btnAceptar = true;
                _this.numeroTracking = element.numeroTracking;
                _this.valor_tracking = _this.numeroTracking + '.pdf';
                _this.activar = false;
                _this.activarBtn = element.valor;
                _this.pintarCodigo = true;
            }
        });
        this.folio_packing_list = this.folio_packing_list;
        this.activarBotonEnvio = false;
        this.contador = 0;
        if (this.lstResultadoCotizaciones[i] !== 'divFinalizar') {
            this.lstResultadoCotizaciones = [];
            this.lstResultadoCotizaciones = new Array(this.packing_list.length).fill('');
            for (var j = 0; j < this.lstDesactivadas.length; j++) {
                this.lstResultadoCotizaciones[this.lstDesactivadas[j]] = 'divFinalizar';
            }
            if (this.lstResultadoCotizaciones[i] !== 'divFinalizar') {
                this.lstResultadoCotizaciones[i] = 'divActive';
            }
        }
        this.listaAuxiliar = [];
        this.codigoValido = [];
        this.imgRealizaEnvio = [];
        this.contadorM++;
    };
    /////////// este metodo se encarga de mostrar los datos de acuerdo a la lista que se selecciona
    FinalizarEnvioClienteComponent.prototype.mostrarListaImagenes = function (index) {
        var _this = this;
        this.colectarElemtos[index].forEach(function (element) {
            if (element.tipo === 'Hielera Congelacion' || element.tipo === 'Hielera Congelación' || element.tipo === 'CONGELACIÓN') {
                element.tipo = 'CONGELACIÓN';
                _this.tipoDeProducto.push('Hielera');
                _this.contador = element.cant;
                _this.cantidadPL += _this.contador;
                _this.imgTipoValidacionArr.push('./assets/Images/hielera_refri.svg');
            }
            else if (element.tipo === 'Hielera Refrigeracion' || element.tipo === 'Hielera Refrigeración' || element.tipo === 'REFRIGERACIÓN') {
                element.tipo = 'REFRIGERACIÓN';
                _this.tipoDeProducto.push('Hielera');
                _this.contador = element.cant;
                _this.cantidadPL += _this.contador;
                _this.imgTipoValidacionArr.push('./assets/Images/hielera_refri.svg');
            }
            else if (element.tipo === 'Bolsa de transito' || element.tipo === 'TRANSITO') {
                element.tipo = 'TRANSITO';
                _this.tipoDeProducto.push('Bolsa');
                _this.contador = element.cant;
                _this.cantidadPL += _this.contador;
                _this.imgTipoValidacionArr.push('./assets/Images/bolsa_ambiente.svg');
            }
            var comentario = element.comentario;
            if (comentario.length > 0) {
                _this.labelComentarios = false;
            }
            else {
                _this.labelComentarios = true;
            }
        });
    };
    FinalizarEnvioClienteComponent.prototype.incluirTrackingArreglo = function (tracking) {
        this.ingresoTracking = tracking.trim();
        this.ingresoTrackingAux = this.ingresoTracking.trim();
        var guiaStrin = this.ingresoTrackingAux.toString();
        this.numGuia = guiaStrin;
        console.log('input');
        console.log('filename' + this.ingresoTracking);
        var objetoInput = {
            numeroTracking: this.ingresoTracking,
            indexObjeto: this.numeroPosicion,
            valor: false
        };
        console.log('tt' + this.ingresoTracking);
        if (this.ingresoTracking.length === 10) {
            this.fileName = this.ingresoTracking;
        }
        this.validarBotonEnvio();
    };
    /*Recibir tipo de envio*/
    FinalizarEnvioClienteComponent.prototype.recibeValosCombo = function (datos, tipo) {
        this.mensajeria = datos.nombre;
        ///// Activar la funcion de envio
        this.validarBotonEnvio();
    };
    FinalizarEnvioClienteComponent.prototype.validarBotonEnvio = function () {
        if ((this.lstPacking.length === this.colectarElemtos.length)) {
            this.activar = true;
        }
        else {
            this.activar = false;
            // this.archivo = undefined;
        }
        if (this.activar && (this.guiaDoc !== null || (this.archivo !== undefined && this.archivo.length > 0 && this.peso !== undefined && this.peso !== null && this.longitud !== null))) {
            this.btnAceptar = true;
        }
        else {
            this.btnAceptar = false;
        }
    };
    FinalizarEnvioClienteComponent.prototype.recibeDocumentacion = function (archivo) {
        console.log(archivo);
        // this.paqDistinta = true;
        this.cargarDocumento = archivo;
        this.archivo = archivo;
        this.validarBotonEnvio();
    };
    FinalizarEnvioClienteComponent.prototype.recibeContacto = function (texto, tipoInput) {
        var obj;
        obj = new Object();
        obj.tipo = tipoInput;
        if (tipoInput === 'peso') {
            this.peso = texto.trim();
        }
        else if (tipoInput === 'longitud') {
            this.longitud = texto.trim();
        }
        else if (tipoInput === 'altura') {
            this.altura = texto.trim();
        }
        else if (tipoInput === 'ancho') {
            this.ancho = texto.trim();
        }
        this.validarBotonEnvio();
    };
    FinalizarEnvioClienteComponent.prototype.enterAux = function () {
        var contador = 0;
        var aux = this.codigosBarraElemento.trim();
        this.codigosBarraElemento = aux;
        console.log(this.codigosBarraElemento, this.colectarElemtosAux);
        var validarDup = this.validarCodigoDuplicado(this.codigosBarraElemento);
        if (validarDup) {
            if (this.datoPL === this.codigosBarraElemento) {
                this.codigosValidos[this.indexPacking][0] = true;
                this.listaColectarElementosAuxiliar[this.listaColectarElementosAuxiliar.length] = this.codigosBarraElemento;
            }
            else {
                for (var i = 0; i < this.colectarElemtosAux.length; i++) {
                    if (this.colectarElemtosAux[i].folio === this.codigosBarraElemento) {
                        this.codigosValidos[this.indexPacking][i + 1] = true;
                        this.listaColectarElementosAuxiliar[this.listaColectarElementosAuxiliar.length] = this.codigosBarraElemento; // Agregar a la lista auxiliar
                    }
                    else {
                        contador++;
                    }
                }
            }
            if (contador === this.colectarElemtosAux.length) {
                this.mensaje = 'Folio incorrecto';
                this.activarAlerta = true;
            }
        }
        else {
            // alert('Elemento duplicado');
            this.mensaje = 'Folio duplicado';
            this.activarAlerta = true;
        }
        this.codigosBarraElemento = '';
        this.validarBotonEnvio();
        this.validarEscaneo();
    };
    FinalizarEnvioClienteComponent.prototype.validarCodigoDuplicado = function (elemento) {
        var i;
        if (this.listaColectarElementosAuxiliar.length === 0) {
            return true;
        }
        else {
            for (i = 0; i < this.listaColectarElementosAuxiliar.length; i++) {
                console.log(this.listaColectarElementosAuxiliar[i], elemento);
                if (this.listaColectarElementosAuxiliar[i] === elemento) {
                    return false;
                }
            }
            return true;
        }
    };
    FinalizarEnvioClienteComponent.prototype.validarEscaneo = function () {
        var contador = 0;
        for (var _i = 0, _a = this.codigosValidos[this.indexPacking]; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item) {
                contador++;
            }
        }
        if (contador === this.codigosValidos[this.indexPacking].length) {
            if (this.lstResultadoCotizaciones[this.indiceLts] !== 'divFinalizar') {
                this.lstPendientes.push(this.colectarElemtosAux[0].idPendiente);
                this.lstDesactivadas.push(this.indiceLts);
                this.lstPacking.push(this.colectarElemtosAux[0].packingList);
            }
            this.lstResultadoCotizaciones[this.indiceLts] = 'divFinalizar';
        }
        this.validarBotonEnvio();
    };
    FinalizarEnvioClienteComponent.prototype.finalizar = function () {
        var _this = this;
        this.idUsuario = __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        var obj = {
            idPendiente: this.colectarElemtosAux[0].idPendiente,
            idUsuario: this.idUsuario,
            numGuia: this.numGuia,
            packingList: this.colectarElemtosAux[0].packingList,
            mensajeria: this.mensajeria,
            lstPackingList: this.lstPacking,
            pendientes: this.lstPendientes
        };
        console.log('Soy lo que se va a enviar a finalizar-->', obj);
        this._serviceEnvio.RegistrarTrEnvioPagoCliente(obj).subscribe(function (data) {
            _this.tipoGuardar = 'Paqueteria';
            var numGuia = _this.idPendiente;
            console.log('Soy numero de guia', numGuia);
            for (var i = 0; i < _this.lstPendientes.length; i++) {
                numGuia = 'Guia-' + _this.lstPendientes[i];
                if (_this.datosCliente[0].envio.tipo !== 'Guia' && _this.cargarDocumento !== null) {
                    _this._serviceEnvio.uploadFile(numGuia, _this.cargarDocumento, _this.tipoGuardar).subscribe(function (dataFile) {
                    });
                }
            }
            if (data.current === true) {
                /**ACTIVAR ALERTA DE OPERACION EXITOSA**/
                _this.activarAlertExit = true;
            }
        });
    };
    FinalizarEnvioClienteComponent.prototype.cerrarAlert = function ($event) {
        this.activarAlerta = false;
        this.textArea.nativeElement.focus();
    };
    FinalizarEnvioClienteComponent.prototype.cerrarPop = function ($event) {
        var _this = this;
        this.val = 2;
        this.activarInputs = false;
        // this.limpiarVariables();
        this.finalizarEnvio.emit(true);
        setTimeout(function () {
            _this.activarBarraPrioridades = false;
            _this.activarBarraProgreso = false;
        }, 100);
        setTimeout(function () {
            _this.activarBarraPrioridades = true;
            _this.activarBarraProgreso = true;
        }, 100);
        this.obtenerPackingListClient();
        this.activarAlertExit = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Boolean)
    ], FinalizarEnvioClienteComponent.prototype, "validarPaquteria", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FinalizarEnvioClienteComponent.prototype, "finalizarEnvio", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FinalizarEnvioClienteComponent.prototype, "regresarVistaP", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Boolean)
    ], FinalizarEnvioClienteComponent.prototype, "paqDistinta", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], FinalizarEnvioClienteComponent.prototype, "idCliente", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FinalizarEnvioClienteComponent.prototype, "totalesBarra", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('textarea'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FinalizarEnvioClienteComponent.prototype, "textArea", void 0);
    FinalizarEnvioClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-finalizar-envio-cliente',
            template: __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/finalizar-envio-cliente/finalizar-envio-cliente.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/finalizar-envio-cliente/finalizar-envio-cliente.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_trabajar_ruta_envio_por_cliente_service__["a" /* EnvioPorClienteService */], __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], FinalizarEnvioClienteComponent);
    return FinalizarEnvioClienteComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/lista-clientes/lista-clientes.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"listaClientes\" style=\"height: calc(100% - 60px);\">\n  <div class=\"content-area\">\n    <div class=\"area\" style=\" display: flex; border-bottom: 1px solid #D8D8D8;  min-width: 800px; border-top: 1px solid #D8D8D8;display: flex;position: relative\">\n      <!--Inicio Div Daos C-->\n      <div id=\"bordeDatosC\" class=\"datosC\" style=\"display: flex; flex-direction:row; height: 80%; justify-content: space-between; width: 100%; \">\n        <label class=\"encabezadoCliente\">CLIENTES</label>\n        <div style=\"padding-right: 10px; \" ng-model=\"searchText\" class=\"form-control\">\n          <div class=\"buscar\">\n            <div>\n              <div class=\"lupa\">\n                <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\n              </div>\n              <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"clientes\" />\n            </div>\n          </div>\n        </div>\n        <!--Fin datos C-->\n      </div>\n    </div>\n  </div>\n  <div class=\"catalogoClientes\">\n    <div class=\"container\">\n      <div id=\"datosArreglo\" class=\"tabla-clientes\" *ngIf=\"listaUniverso.length > 0\">\n        <div class=\"item\" *ngFor=\"let datos of listaCli let i= index\">\n          <div style=\"display: flex;\">\n            <img style=\"height:106px; width: 106px; \" src=\"./assets/Images/clientes/{{datos.idCliente}}.png\" onerror=\"this.src='./assets/Images/clientes/default.png';\">\n          </div>\n          <div id=\"datosCliente\">\n            <label class=\"numCliente \">{{'#'}}{{i+1}} <span class= \"nombreClienteEstilo \" > {{datos.nombreCliente}} </span></label>\n            <label class=\"datosCllienteEstilo \"> {{datos.cant}} {{'Piezas '}} · {{datos.numPL}}{{' Packing List'}}</label>\n            <div style=\"display: flex; flex-direction: row;\">\n              <label class=\"p1 \"> P1. {{datos.p1}} </label>\n              <label class=\"p2 \"> P2  {{datos.p2}} </label>\n              <label class=\"p3 \"> P3  {{datos.p3}} </label>\n            </div>\n          </div>\n          <div class=\"imagenMas\" (click)=\"cambiarVistaPorCliente(datos)\">\n            <img type=image src=\"./assets/Images/Images/entrar.svg\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"mensajeSinDatos\" *ngIf=\"listaUniverso.length === 0\">\n        <label>NO HAY ENVIOS PAGADOS POR CLIENTE</label>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"!listaClientes\" style=\"width: 100%;height: 100%\">\n<pn-finalizar-envio-cliente [idCliente]=\"idCliente\" [totalesBarra]=\"totalesBarra\" (regresarVistaP)=\"regresarVista($event)\" (finalizarEnvio)=\"actualizarDatos($event)\"></pn-finalizar-envio-cliente>\n</div>\n<footer class=\"footer \" style=\"  border: none; border-top: solid;\" *ngIf=\"listaClientes\">\n  <div class=\"datosFooter \" style=\"width: 100%;height: 100%; \">\n    <div class=\"Prioridad1 \">\n      <label class=\"p1 \">P1</label> Prioridad 1\n    </div>\n    <div class=\"Prioridad2 \">\n      <label class=\"p2 \">P2</label> Prioridad 2\n    </div>\n    <div class=\"Prioridad3 \">\n      <label class=\"p3 \">P3</label> Prioridad 3\n    </div>\n    <div class=\"Ambiente \">\n      <img class=\"img \" src='./assets/Images/ambiente.svg' /> Ambiente\n    </div>\n    <div class=\"Congelación \">\n      <img class=\"img \" src='./assets/Images/congelacion.svg' /> Congelación\n    </div>\n    <div class=\"Refrigeración \">\n      <img class=\"img \" src='./assets/Images/refrigeracion.svg' /> Refrigeración\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/lista-clientes/lista-clientes.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n.vPrincipalCli {\n  width: 100%;\n  height: 100%; }\n.vPrincipalCli > div {\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n#divBoton {\n  width: 100%;\n  height: 60px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding-right: 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.botonIngresar {\n  width: 190px;\n  height: 50px;\n  background: #008894;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 21px;\n  cursor: pointer;\n  border: none;\n  color: #FFFFFF;\n  font-weight: bold;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto; }\n.tooltip .tooltiptext::after {\n  content: \" \";\n  position: absolute;\n  bottom: 100%;\n  /* At the top of the tooltip */\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent #4C4C4C transparent; }\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 0%; }\n.tooltip {\n  position: relative;\n  display: inline-block;\n  cursor: pointer; }\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 148px;\n  height: 42px;\n  background-color: #4C4C4C;\n  text-align: left;\n  padding: 5px 10px 0px 0px;\n  padding: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  left: 2%;\n  margin-left: -60px;\n  font-size: 10px;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n  font-family: ArialMT;\n  font-size: 9px;\n  color: #FFFFFF;\n  text-align: center; }\n.datosFooter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 14px;\n  min-width: 759px;\n  min-height: 56px;\n  max-height: 56px; }\n.Ambiente,\n.Congelación,\n.Prioridad1,\n.Prioridad2,\n.Prioridad3,\n.Refrigeración {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 0.7%;\n  margin-right: 0.7%; }\n.img,\n.p1,\n.p2,\n.p3 {\n  margin-right: 10px; }\n.p1 {\n  color: #AF3634;\n  font-weight: bold; }\n.p2 {\n  color: #EEB253;\n  font-weight: bold; }\n.p3 {\n  color: #63B236;\n  font-weight: bold; }\n.img {\n  cursor: pointer; }\n.placeholder {\n  font-family: 'Helvetica';\n  font-size: 30px;\n  color: #AAA9AF; }\n.nombreClienteEstilo {\n  font-family: Helvetica-Bold;\n  font-size: 18px;\n  color: #008895;\n  line-height: 22px; }\n.datosCllienteEstilo {\n  font-family: Helvetica;\n  font-size: 16px;\n  color: #666666;\n  width: 193px;\n  height: 19px; }\n.numCliente {\n  font-family: Helvetica;\n  font-size: 18px;\n  color: black;\n  line-height: 22px;\n  font-weight: bold;\n  max-height: 65px;\n  overflow: hidden; }\n@supports (-webkit-line-clamp: 3) {\n    .numCliente {\n      display: block;\n      display: -webkit-box !important;\n      line-height: 1.1;\n      -webkit-line-clamp: 3;\n      -webkit-box-orient: vertical;\n      text-overflow: ellipsis; } }\n@supports not (-webkit-line-clamp: 3) {\n    .numCliente {\n      position: relative;\n      line-height: 1.1;\n      overflow: hidden;\n      width: 100%; }\n      .numCliente:before {\n        content: \"\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\";\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        background: transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;\n        background: transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%; } }\n.container {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  height: 100%;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  position: relative; }\n.catalogoClientes {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 395px);\n  min-width: 800px; }\n.item {\n  width: 420px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 140px;\n  margin: 10px 10px; }\n.imagenMas {\n  width: 9%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  cursor: pointer; }\n.tabla-clientes {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: calc(100vh - 395px);\n  padding: 20px 10px;\n  min-width: 900px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.mensajeSinDatos {\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: calc(100vh - 395px);\n  padding: 20px 10px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.mensajeSinDatos > label {\n    font-size: calc((100% + 6vw) / 2);\n    width: 70%;\n    text-align: center;\n    font-family: Roboto;\n    font-weight: bold;\n    color: #ECEEF0; }\n.encabezadoCliente {\n  font-family: 'Novecento';\n  font-weight: bold;\n  font-size: 28px;\n  color: #424242;\n  text-align: left;\n  padding-left: 30px;\n  width: 187px;\n  size: 150px;\n  height: 50px;\n  padding-top: 20px; }\n.buscar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  height: 50px;\n  margin-top: 10px;\n  width: 100%;\n  border-style: solid; }\n.buscar div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 403.1px;\n    border-radius: 102px 102px 102px 102px;\n    -moz-border-radius: 102px 102px 102px 102px;\n    -webkit-border-radius: 102px 102px 102px 102px;\n    border: 0.5px solid #BFC0C7;\n    height: 30px; }\n.buscar div div {\n      border: none;\n      border-radius: 0px 0px 0px 0px;\n      -moz-border-radius: 0px 0px 0px 0px;\n      -webkit-border-radius: 0px 0px 0px 0px;\n      border: 0px solid #000000;\n      width: 40px;\n      background: transparent;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n.buscar div .buscar-input {\n      background: transparent;\n      border-radius: 102px 102px 102px 102px;\n      -moz-border-radius: 102px 102px 102px 102px;\n      -webkit-border-radius: 102px 102px 102px 102px;\n      border: 0px solid #000000;\n      width: 380px;\n      font-family: Helvetica;\n      font-size: 18px;\n      color: #AAA9AF;\n      outline: none;\n      padding-left: 5px; }\n.content-area {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 20px;\n  padding-right: 20px; }\n#datosCliente {\n  width: 64%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 20px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 110px;\n  overflow: auto;\n  line-height: 1.5; }\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/lista-clientes/lista-clientes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaClientesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_trabajar_ruta_envio_por_cliente_service__ = __webpack_require__("./src/app/services/trabajar-ruta/envio-por-cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListaClientesComponent = /** @class */ (function () {
    function ListaClientesComponent(_serviceEnvio, coreContainer) {
        this._serviceEnvio = _serviceEnvio;
        this.coreContainer = coreContainer;
        this.updateDates = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cambiarResolucion = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cambioVarPrincipal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.listaCli = [];
        this.listaUniverso = [];
        this.auxDataCurrent = [];
    }
    ListaClientesComponent.prototype.ngOnInit = function () {
        this.listaClientes = true;
        this.auxDataCurrent.push({ idCliente: 21, nombreCliente: 'Proquifa', numPL: 2, cant: 5 }, { idCliente: 21, nombreCliente: 'Proquifa', numPL: 2, cant: 5 }, { idCliente: 21, nombreCliente: 'Proquifa', numPL: 2, cant: 5 }, { idCliente: 21, nombreCliente: 'Proquifa', numPL: 2, cant: 5 }, { idCliente: 21, nombreCliente: 'Proquifa', numPL: 2, cant: 5 });
    };
    ListaClientesComponent.prototype.ngOnChanges = function () {
        this.obtenerCliente();
        if (this.cambioVista === true) {
            this.listaClientes = true;
        }
    };
    ListaClientesComponent.prototype.obtenerCliente = function () {
        var _this = this;
        this.listaCli = [];
        this.listaUniverso = [];
        this.coreContainer.openModal(0);
        this._serviceEnvio.obtenerCliente().subscribe(function (data) {
            if (data.current !== null && data.current && data.current.length > 0) {
                _this.listaCli = data.current;
                _this.listaUniverso = data.current;
            }
            _this.coreContainer.closeModal(0);
        }, function (error) {
            console.log(error);
            _this.coreContainer.closeModal(0);
        });
    };
    ListaClientesComponent.prototype.cambiarVistaPorCliente = function (datos) {
        this.buscar('');
        this.cambiarResolucion.emit(true);
        this.listaClientes = false;
        this.idCliente = datos.idCliente;
    };
    ListaClientesComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search === '') {
            this.listaCli = this.listaUniverso.slice();
        }
        else {
            this.listaUniverso.forEach(function (folio) {
                if (folio.nombreCliente.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.listaCli = searchArrayAux;
        }
    };
    ListaClientesComponent.prototype.regresarVista = function (valor) {
        this.updateDates.emit(false);
        this.listaClientes = true;
        this.buscar('');
        this.obtenerCliente();
        this.cambioVarPrincipal.emit(true);
    };
    ListaClientesComponent.prototype.actualizarDatos = function () {
        this.buscar('');
        this.obtenerCliente();
        this.updateDates.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ListaClientesComponent.prototype, "cambioVista", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ListaClientesComponent.prototype, "totalesBarra", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ListaClientesComponent.prototype, "updateDates", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ListaClientesComponent.prototype, "cambiarResolucion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ListaClientesComponent.prototype, "cambioVarPrincipal", void 0);
    ListaClientesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-lista-clientes',
            template: __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/lista-clientes/lista-clientes.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/lista-clientes/lista-clientes.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_trabajar_ruta_envio_por_cliente_service__["a" /* EnvioPorClienteService */], __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], ListaClientesComponent);
    return ListaClientesComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/pop-up-finalizar/pop-up-finalizar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"popUp\" class=\"popUp\" *ngIf=\"popUpCerrar\">\n  <div class=\"fondo\"></div>\n  <div class=\"popContenido\">\n    <div class=\"popHeader\">\n      <span>PROQUIFA NET</span>\n    </div>\n    <div class=\"popContenido\">\n      <div class=\"alerta\" *ngIf=\"imagen\">\n        <img src=\"assets/Images/flecha_blanca_encirculoverde.svg\" alt=\"\" class=\"alert\" />\n      </div>\n      <label [style.padding-top]=\"imagen?'15px':'80px'\">\n        {{label}}\n      </label>\n    </div>\n    <div class=\"dvBotones\">\n      <div class=\"dvBoton\" (click)=\"cerrar()\">\n        <label>Aceptar</label>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/pop-up-finalizar/pop-up-finalizar.component.scss":
/***/ (function(module, exports) {

module.exports = "#popUp {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  #popUp > div.fondo {\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    left: 0;\n    top: 0;\n    overflow-y: hidden;\n    background: rgba(204, 209, 209, 0.6);\n    z-index: 4; }\n  #popUp > div.popContenido {\n    max-width: 630px;\n    width: 630px;\n    height: 385px;\n    max-height: 385px;\n    position: relative;\n    z-index: 9;\n    background: #FFFFFF;\n    border-radius: 20px;\n    border: 1px solid #008894; }\n  #popUp > div.popContenido > .popHeader {\n      background-color: #008894;\n      border: 1px solid #008894;\n      border-radius: 19px 19px 0 0;\n      color: white;\n      font-family: Roboto;\n      font-size: 25px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 0 15px;\n      height: 55px; }\n  #popUp > div.popContenido > .popContenido {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      margin-top: 10px;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      font-size: 30px;\n      padding-top: 30px; }\n  #popUp > div.popContenido > .popContenido > i {\n        padding: 35px;\n        font-size: 60px;\n        color: #008A98; }\n  #popUp > div.popContenido > .popContenido > span {\n        font-family: Roboto, sans-serif;\n        font-size: 25px;\n        font-weight: bold; }\n  #popUp > div.popContenido > .popContenido > label {\n        font-family: Roboto;\n        font-weight: bold;\n        font-size: 30px; }\n  #popUp > div.popContenido > .dvBotones {\n      position: absolute;\n      bottom: 25px;\n      left: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      width: 100%; }\n  #popUp > div.popContenido > .dvBotones > .dvBoton {\n        width: 170px;\n        height: 30px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        background: #008894;\n        color: #FFFFFF;\n        font-weight: bold; }\n  #popUp > div.popContenido > .dvBotones > .dvBoton > label {\n          font-family: 'Novecento';\n          font-size: 21px;\n          font-weight: bold;\n          color: white;\n          /*height: 100%;\n            padding-top: 1.8%;*/\n          cursor: pointer;\n          margin-top: -2px; }\n  #popUp > div.popContenido > .dvBotones > .dvBoton:HOVER {\n          opacity: 0.9;\n          cursor: pointer; }\n  #popUp > div.popContenido > .dvBotones > .dvBoton:ACTIVE {\n          background: #005f67; }\n  .alerta {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  padding-top: 20px; }\n  .alerta img.alert {\n    width: 100%;\n    height: 100%; }\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/pop-up-finalizar/pop-up-finalizar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpFinalizarComponent; });
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

var PopUpFinalizarComponent = /** @class */ (function () {
    function PopUpFinalizarComponent() {
        this.desactivarPop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PopUpFinalizarComponent.prototype.ngOnInit = function () {
        this.popUpCerrar = true;
    };
    PopUpFinalizarComponent.prototype.cerrar = function () {
        this.popUpCerrar = false;
        this.desactivarPop.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PopUpFinalizarComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopUpFinalizarComponent.prototype, "imagen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpFinalizarComponent.prototype, "desactivarPop", void 0);
    PopUpFinalizarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-up-finalizar',
            template: __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/pop-up-finalizar/pop-up-finalizar.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/pop-up-finalizar/pop-up-finalizar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpFinalizarComponent);
    return PopUpFinalizarComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutaEnvioPorClienteRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ruta_envio_por_cliente_component__ = __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RutaEnvioPorClienteRouting = /** @class */ (function () {
    function RutaEnvioPorClienteRouting() {
    }
    RutaEnvioPorClienteRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__ruta_envio_por_cliente_component__["a" /* RutaEnvioPorClienteComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], RutaEnvioPorClienteRouting);
    return RutaEnvioPorClienteRouting;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animationZoom\" style=\"width: 100%; height: 100%; flex-direction: row; display: flex; min-width: 800px; \">\n  <div  class=\"aux\">\n    <aside [ngClass]=\"classAsideMenu\">\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\n        <pn-menu-seccion-roles  [items]=\"itemsMenu\"  style=\"width: 100%\"  *ngIf=\"activeMenu\"></pn-menu-seccion-roles>\n      </div>\n    </aside>\n    <div class=\"acordeon\">\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n    </div>\n  </div>\n  <div id=\"divPrincipal\" class=\"vPrincipal\">\n    <div class=\"bordeUno\" [style.min-width]=\"resolucion\" *ngIf=\"vistaPrin\">\n      <div style=\"cursor: pointer; height: 35px; width: 20px; \" *ngIf=\"!vistaPrincipal\" (click)=\"regresarVista()\">\n        <img class=\"img\" src='./assets/Images/regresar.svg' style=\"width: 100%; height: 100%;\"/>\n      </div>\n      <label class=\"etiqueta\">TRABAJAR RUTAS · ENVIO PAGADO POR CLIENTE</label>\n    </div>\n    <div class=\"bordeUnoEnvio\"  *ngIf=\"!vistaPrin\">\n      <div style=\"cursor: pointer; height: 35px; width: 20px; \" *ngIf=\"!vistaPrincipal\" (click)=\"regresarVista()\">\n        <img class=\"img\" src='./assets/Images/regresar.svg' style=\"width: 100%; height: 100%;\" />\n      </div>\n      <label class=\"etiqueta\">TRABAJAR RUTAS · ENVIO PAGADO POR CLIENTE</label>\n    </div>\n    <div class=\"datosG\">\n      <div class=\"subPadre min-width: 900px;\">\n        <div>\n          <div style=\"width:165px; height:40px; display: flex; flex-direction: column; font-family: Roboto-Bold; font-size: 16px; color: #9B9B9B; \">\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatosObjetivo\"> TU OBJETIVO </label>\n            <label style=\"height: 50%; width: 100% \" class=\" estiloDatosObjetivo \"> DE PACKING LIST HOY </label>\n          </div>\n          <div style=\"max-width: 85px; min-width: 30px; height:75px; font-family: Roboto; font-size: 46px; font-weight:bold; color: #39B54A; text-align: center;\">\n            <label class=\"estiloNumero\"> {{objetivoDePackingList}}</label>\n          </div>\n          <img class=\"img\" src='./assets/Images/objetivo.svg' style=\"height: 65%;width:22px; padding-bottom: 3px; padding-left: 10px;\" />\n          <div style=\"padding-left: 19px\">\n            <hr style=\" width:2px; height:38px; margin:0px; border-width:0\" color='#979797' />\n          </div>\n          <div style=\"width:145px; height:40px; display: flex; flex-direction:column; font-family: Roboto-Bold; font-size: 16px; color: #9B9B9B; padding-left: 17px; \">\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatosTrabajado \"> PACKING LIST </label>\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatosTrabajado \"> TRABAJADAS HOY </label>\n          </div>\n\n          <div class=\"tooltip\" style=\"max-width:85px; height:50px; font-family: Roboto; font-size: 46px; font-weight:bold; color: #008895; text-align: center;\">\n            <label class=\"estiloNumero\"> {{packing_trabajadas_hoy}}</label>\n          </div>\n          <div style=\"padding-left: 19px\">\n            <hr style=\" width:2px; height:38px; margin:0px; border-width:0\" color='#979797' />\n          </div>\n          <div style=\"width:120px; height:45px; display: flex; flex-direction: column; font-family: Roboto-Bold; font-size: 16px; color: #9B9B9B; padding-left: 17px;\">\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatos \"> PACKING LIST</label>\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatos \"> DESEADAS </label>\n          </div>\n          <div class=\"tooltip\" style=\"flex-direction: row; min-width: 45px; max-width: 100px; height:50px; position: relative; font-family: Roboto; font-size: 46px; font-weight:bold; color: #008895; text-align: center;\">\n            <label class=\"estiloNumero\"> {{packingListDeceada}}</label>\n            <label [style.color]=\"colorIndiceInspeccionDeceada\" style=\"font-size:16px; color:#D0021B; font-weight: bold; left: 40px; position: absolute; top: -7px\">\n              {{inspeccionDeceadaHastaElMomento}}</label>\n            <span class=\"tooltiptext\">{{mensajePackingDeseadas}}</span>\n          </div>\n          <div style=\"padding-left: 35px\"></div>\n          <hr style=\" width:2px; height:38px; margin:0px; border-width:0\" color='#979797' />\n          <div style=\"width:113px; height:40px; display: flex; flex-direction: column;font-family: Roboto-Bold; font-size: 16px; color: #9B9B9B; padding-left: 17px; \">\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatosMinimo\"> MÍNIMO DE</label>\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatosMinimo\"> PACKING LIST </label>\n          </div>\n          <div class=\"tooltip\" style=\"flex-direction: row; min-width: 45px; max-width: 100px; height:50px; position: relative; font-family: Roboto; font-size: 46px; font-weight:bold; color: #008895; text-align: center;\">\n            <label class=\"estiloNumero\"> {{minimoPackingDeInspeccion}}</label>\n            <label [style.color]=\"colorMinimoInspeccion\" style=\"font-size:16px; color:#D0021B; font-weight: bold; left: 40px; position: absolute; top: -7px\">\n              {{valorSigno}}{{minimaInspeccionHastaElMomento}}</label>\n            <span class=\"tooltiptext\">{{mensajeEmbDeseado}}</span>\n          </div>\n          <div [ngStyle]=\"{'flex-direction':'column', 'display':'flex','padding-left': '2%'}\">\n            <!-- <pq-pop-up-estadisticas></pq-pop-up-estadisticas>-->\n            <pq-pop-up-estadisticas *ngIf=\"activarGraficasPrioEsta\" [tipo]=\"'Paking list'\" [muestraHallazgos]=\"false\" [tipoTotales]=\"'Paking list'\" [totalesPorInspector]= \"totales_estadisticas\" [donaChart] = \"dataPrioridadEstadisticas\" [tipoGrafica]=\"graficasEstadisticas\" [activarGraficas]=\"false\"></pq-pop-up-estadisticas>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- FIN DATOSC -->\n    <div [ngClass]=\"vistaPrin? 'rutasClientes': 'rutasEnvio'\">\n      <pn-lista-clientes (cambioVarPrincipal)=\"regresarVista()\" (cambiarResolucion)=\"cambiarResolucione($event)\" [cambioVista]=\"vistaPrincipal\" [totalesBarra]=\"totalesBarra\" (updateDates)=\"actualizarDatos($event)\"></pn-lista-clientes>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n.subPadre {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 20px;\n  padding-right: 20px; }\n.subPadre > div {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-top: 15px;\n    padding-bottom: 15px;\n    width: 100%; }\n.aux {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background: #E6E6E6; }\n.aux .asideNormalMenu {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    -ms-flex-item-align: stretch;\n        -ms-grid-row-align: stretch;\n        align-self: stretch;\n    min-width: 181px;\n    width: 321px;\n    height: 100%;\n    overflow-y: scroll; }\n.aux .asideNormalMenu > .articulo {\n      width: 321px;\n      background-color: #E6E6E6;\n      float: left;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 auto;\n              flex: 1 0 auto;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n.aux > .asideOcultarMenu {\n    -webkit-animation-name: ocultarMenu;\n            animation-name: ocultarMenu;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-transition: 1s ease-in-out;\n    transition: 1s ease-in-out;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    min-width: 0px;\n    width: 0px; }\n.aux > .asideOcultarMenu > .articulo {\n      width: 0px; }\n.aux > .asideMostrarMenu {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    -ms-flex-item-align: stretch;\n        -ms-grid-row-align: stretch;\n        align-self: stretch;\n    -webkit-animation-name: mostrarMenu;\n            animation-name: mostrarMenu;\n    -webkit-animation-duration: 0.7s;\n            animation-duration: 0.7s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    overflow-y: scroll; }\n.aux > .asideMostrarMenu > .articulo {\n      width: 321px;\n      background-color: #E6E6E6;\n      float: left;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 0 auto;\n              flex: 1 0 auto;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n@-webkit-keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@-webkit-keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n@keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n.acordeon {\n  position: absolute;\n  padding-top: 352px;\n  right: 0; }\n.vPrincipal {\n  width: 100%;\n  height: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  min-width: 500px;\n  overflow-x: scroll; }\n.etiqueta {\n  font-family: 'Novecento';\n  font-weight: 300;\n  font-size: 25px;\n  color: #5B5B5B;\n  text-align: left;\n  min-width: 800px; }\n.rutasClientes {\n  min-width: 900px;\n  width: 100%;\n  overflow: auto;\n  height: calc(100% - 123px); }\n.rutasEnvio {\n  width: 100%;\n  min-width: 1760px;\n  overflow: auto;\n  height: calc(100% - 123px); }\n.datosG {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 75px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 800px; }\n.bordeUno {\n  height: 48px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 18px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 2px solid black; }\n.bordeUnoEnvio {\n  min-width: 1760px;\n  height: 48px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 18px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 2px solid black; }\n.estiloDatosObjetivo, .estiloDatosTrabajado, .estiloDatos, .estiloDatosMinimo {\n  font-size: 16px;\n  font-family: Roboto;\n  font-weight: bold; }\n.tooltip {\n  position: relative;\n  display: inline-block;\n  cursor: pointer; }\n.tooltip > .tooltiptext::after {\n    content: \" \";\n    position: absolute;\n    bottom: 100%;\n    /* At the top of the tooltip */\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: transparent transparent #4C4C4C transparent; }\n.tooltip:hover > .tooltiptext {\n    visibility: visible;\n    opacity: 1;\n    text-align: center;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n.tooltip > .tooltiptext {\n    visibility: hidden;\n    width: 130px;\n    background-color: #424242;\n    color: #FFFFFF;\n    font-family: 'Roboto';\n    text-align: left;\n    padding: 5px 10px 0px 0px;\n    font-size: 9px;\n    padding: 5px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    left: 25%;\n    margin-top: 0px;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    /* Position the tooltip */\n    position: absolute;\n    z-index: 1; }\n@media all and (max-width: 1405px) {\n  .estiloDatos {\n    min-height: 30px; } }\n@media all and (min-height: 770px) and (max-height: 1130px) and (min-width: 1300px) and (max-width: 2572px) {\n  .bordeUnoEnvio, .rutasEnvio {\n    min-width: 1304px; } }\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutaEnvioPorClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_trabajar_ruta_envio_por_cliente_service__ = __webpack_require__("./src/app/services/trabajar-ruta/envio-por-cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_embalar_embalar_service__ = __webpack_require__("./src/app/services/embalar/embalar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RutaEnvioPorClienteComponent = /** @class */ (function () {
    function RutaEnvioPorClienteComponent(comunService, _serviceTrabajarRuta, _embalarService, core) {
        this.comunService = comunService;
        this._serviceTrabajarRuta = _serviceTrabajarRuta;
        this._embalarService = _embalarService;
        this.core = core;
        this.classAsideMenu = 'asideNormalMenu';
        this.objetivoDePackingList = 0;
        this.packing_trabajadas_hoy = 0;
        this.packingListDeceada = 0;
        this.inspeccionDeceadaHastaElMomento = 0;
        this.minimoPackingDeInspeccion = 0;
        this.minimaInspeccionHastaElMomento = 0;
        this.totalesBarra = [];
        this.inspeccionDeceadaHastaElMomentoMen = 0;
        this.listaPorAnio = [];
        this.listaPorQuincena = [];
        this.listaPorMes = [];
        this.arrayDatosYear = [];
        this.arrayLabelYear = [];
        this.listaQuincena = [];
        this.listaMes = [];
        this.listaYear = [];
        this.arrayLabelQuincena = [];
        this.arrayDatosQuincena = [];
        this.arrayDatosMes = [];
        this.arrayLabelMes = [];
        this.totEmb = 0;
        this.totAlmacen = 0;
        this.totEnvio = 0;
        this.totEnvioXClient = 0;
        this.filtroPrioUsuario = [];
        this.nuevaPrioridadEstadisticas = [];
        this.colorIndiceInspeccionDeceada = "#D0021B";
        this.idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
    }
    RutaEnvioPorClienteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'trabajarRutaCliente') {
                _this.activeMenu = false;
                _this.obtenerMenu();
                _this.obtenerObjetivos();
                _this.ObtenerEstadisticaUsuarioEnvioPL(_this.idUsuario);
            }
        });
        console.log('Soy usuario --> ', this.idUsuario);
        this.vistaPrincipal = true;
        this.vistaPrin = true;
        if (this.vistaPrin === true) {
            this.resolucion = '900px';
        }
        this.obtenerMenu();
        this.obtenerObjetivos();
        this.ObtenerEstadisticaUsuarioEnvioPL(this.idUsuario);
    };
    RutaEnvioPorClienteComponent.prototype.obtenerMenu = function () {
        var _this = this;
        this.core.openModal(1);
        this.activeMenu = false;
        this._embalarService.totalesGeneral().subscribe(function (data) {
            _this.totEmb = data.current.Embalar;
            _this.totAlmacen = data.current.Almacen;
            _this.totEnvio = data.current.Envio;
            _this.totEnvioXClient = data.current.EnvioXCliente;
            _this.itemsMenu = [
                { rol: 'RESPONSABLE DE ALMACEN ', active: true, menu: [
                        { nombre: 'Salidas Almacén', tipo: 'valor', valor: _this.totEmb, url: 'embalar', disable: false },
                        {
                            nombre: 'Trabajar rutas',
                            tipo: '',
                            valor: 0,
                            url: 'poolVisitas',
                            disable: true,
                            subMenu: [
                                { nombre: 'Almacén', tipo: 'valor', valor: _this.totAlmacen, url: 'almacen', select: false },
                                { nombre: 'Envío', tipo: 'valor', valor: _this.totEnvio, url: 'envio', select: false },
                                { nombre: 'Envio Pagado por cliente', tipo: 'valor', valor: _this.totEnvioXClient, url: 'trabajarRutaCliente', select: true }
                            ],
                            select: false
                        }
                    ] }
            ];
            _this.activeMenu = true;
            _this.core.closeModal(1);
        });
    };
    RutaEnvioPorClienteComponent.prototype.obtenerObjetivos = function () {
        var _this = this;
        this.totalesBarra = [];
        this.core.openModal(1);
        this._serviceTrabajarRuta.obtenerTotObjetivos().subscribe(function (data) {
            if (data.current['Hoy'] !== undefined) {
                _this.packing_trabajadas_hoy = data.current['Hoy'];
            }
            if (data.current['Deseadas'] !== undefined) {
                _this.packingListDeceada = data.current['Deseadas'];
                _this.inspeccionDeceadaHastaElMomento =
                    _this.packing_trabajadas_hoy - _this.packingListDeceada;
                _this.inspeccionDeceadaHastaElMomentoMen = -1 * _this.inspeccionDeceadaHastaElMomento;
                if (_this.inspeccionDeceadaHastaElMomentoMen === 0) {
                    _this.mensajePackingDeseadas = 'HAZ ALCANZADO LOS PAKING LIST DESEADOS';
                }
                else {
                    _this.mensajePackingDeseadas = 'ESTAS A' + ' ' + _this.inspeccionDeceadaHastaElMomentoMen + ' ' + 'PACKING LIST DESEADAS';
                }
            }
            if (data.current['Minimo'] !== undefined) {
                _this.minimoPackingDeInspeccion = data.current['Minimo'];
                /* this.minimaInspeccionHastaElMomento =
                   this.minimoPackingDeInspeccion - this.packing_trabajadas_hoy;*/
                if (_this.packing_trabajadas_hoy > _this.minimoPackingDeInspeccion) {
                    // this.cambiarColor = '#39B54A';
                    _this.minimaInspeccionHastaElMomento = _this.packing_trabajadas_hoy - _this.minimoPackingDeInspeccion;
                    _this.valorSigno = '+';
                    _this.colorMinimoInspeccion = '#39B54A';
                    _this.mensajeEmbDeseado = 'HAZ SUPERADO EL MÍNIMO DE ETREGAS';
                }
                else if (_this.minimoPackingDeInspeccion > _this.packing_trabajadas_hoy) {
                    // this.cambiarColor = '#D0021B';
                    _this.minimaInspeccionHastaElMomento = _this.minimoPackingDeInspeccion - _this.packing_trabajadas_hoy;
                    _this.valorSigno = '-';
                    _this.colorMinimoInspeccion = '#D0021B'; //rojo
                    if (_this.minimaInspeccionHastaElMomento > 1) {
                        _this.mensajeEmbDeseado = 'ESTAS A' + ' ' + _this.minimaInspeccionHastaElMomento + ' ' + 'PIEZAS DE SUPERAR EL MÍNIMO DE ENTREGAS';
                    }
                    else {
                        _this.mensajeEmbDeseado = 'ESTAS A' + ' ' + _this.minimaInspeccionHastaElMomento + ' ' + 'PIEZA DE SUPERAR EL MÍNIMO DE ENTREGA';
                    }
                }
                else if (_this.packing_trabajadas_hoy === _this.minimoPackingDeInspeccion) {
                    // this.cambiarColor = '#FBB03B';
                    _this.minimaInspeccionHastaElMomento = _this.packing_trabajadas_hoy - _this.minimoPackingDeInspeccion;
                    _this.valorSigno = ' ';
                    _this.mensajeEmbDeseado = 'HAZ ALCANZADO EL MÍNIMO DE ENTREGAS';
                }
            }
            if (data.current['Objetivo'] !== undefined) {
                _this.objetivoDePackingList = data.current['Objetivo'];
            }
            _this.totalesBarra.push({ totales: _this.packingListDeceada, hechas: _this.packing_trabajadas_hoy });
            _this.core.closeModal(1);
        }, function (error) {
            _this.core.closeModal(1);
            console.log(error);
        });
    };
    RutaEnvioPorClienteComponent.prototype.ObtenerEstadisticaUsuarioEnvioPL = function (idUsuario) {
        var _this = this;
        this.activarGraficasPrioEsta = false;
        var totPza = 0;
        var totPartidas = 0;
        var totPzaPrio = 0;
        var totPzaPrio1 = 0;
        var totPzaPrio2 = 0;
        var totPzaPrio3 = 0;
        this.listaQuincena = { listaLabel: [''], listaDatos: [0] };
        this.listaMes = { listaLabel: [''], listaDatos: [0] };
        this.listaYear = { listaLabel: [''], listaDatos: [0] };
        this.listaPrioridadUsuarioEstadisticas = [];
        this.core.openModal(1);
        this._serviceTrabajarRuta.obtenerPrioridades(idUsuario).subscribe(function (data) {
            console.log('Soy data prioridades -->', data.current);
            /////////////////////////////////////////////////////////////////////
            if (data.current.Prioridad !== undefined) {
                if (data.current.AllYears) {
                    _this.listaAnios = data.current.AllYears;
                }
                if (data.current.Prioridad) {
                    _this.listaPrioridadEstadisticas = data.current.Prioridad;
                }
                if (data.current.Year) {
                    _this.listaPorAnio = data.current.Year;
                    _this.listaPorAnio.forEach(function (inde) {
                        _this.arrayLabelYear.push(inde.tiempo);
                        _this.arrayDatosYear.push(inde.totalPiezas);
                    });
                }
                if (data.current.Mes) {
                    _this.listaPorMes = data.current.Mes;
                    _this.listaPorMes.forEach(function (inde) {
                        _this.arrayLabelMes.push(inde.tiempo);
                        _this.arrayDatosMes.push(inde.totalPiezas);
                    });
                }
                if (data.current.Quincena) {
                    _this.listaPorQuincena = data.current.Quincena;
                    _this.listaPorQuincena.forEach(function (inde) {
                        _this.arrayLabelQuincena.push(inde.tiempo);
                        _this.arrayDatosQuincena.push(inde.totalPiezas);
                    });
                }
                _this.listaPrioridadEstadisticasDatos = data.current.Prioridad;
                ///// Se asignan a las listas los datos para la grafica de puntos
                _this.listaQuincena = { listaLabel: _this.arrayLabelQuincena, listaDatos: _this.arrayDatosQuincena };
                _this.listaMes = { listaLabel: _this.arrayLabelMes, listaDatos: _this.arrayDatosMes };
                _this.listaYear = { listaLabel: _this.arrayLabelYear, listaDatos: _this.arrayDatosYear };
                ////// Aqui termina
                for (var i = 0; i < _this.listaAnios.length; i++) {
                    totPza += _this.listaAnios[i].totalPiezas;
                    totPartidas += _this.listaAnios[i].totalPl;
                }
                for (var i = 0; i < _this.listaPrioridadEstadisticasDatos.length; i++) {
                    if (_this.listaPrioridadEstadisticasDatos[i].prioridad === 'P1') {
                        totPzaPrio1 += _this.listaPrioridadEstadisticasDatos[i].totalPiezas;
                    }
                    else if (_this.listaPrioridadEstadisticasDatos[i].prioridad === 'P2') {
                        totPzaPrio2 += _this.listaPrioridadEstadisticasDatos[i].totalPiezas;
                    }
                    else if (_this.listaPrioridadEstadisticasDatos[i].prioridad === 'P3') {
                        totPzaPrio3 += _this.listaPrioridadEstadisticasDatos[i].totalPiezas;
                    }
                }
                //////////////////////////////////////// GRAFICAS DONUT CHARTS //////////////////7///////////////
                _this.listaPrioridadUsuarioEstadisticas = [{ 'prioridad': 'Prioridad 1', 'pieza': totPzaPrio1 },
                    { 'prioridad': 'Prioridad 2', 'pieza': totPzaPrio2 },
                    { 'prioridad': 'Prioridad 3', 'pieza': totPzaPrio3 }];
                _this.limpiarVariablesGraficaEstadisticas();
                _this.calcularDatosGraficaEstadisticas();
                _this.totales_estadisticas = { total_partidas: totPartidas, total_piezas: totPza, listaQuincena: _this.listaQuincena, listaMes: _this.listaMes, listaAnio: _this.listaYear };
            }
            else {
                //////////////////////////////////////// GRAFICAS DONUT CHARTS /////////////////////////////////
                _this.listaPrioridadUsuarioEstadisticas = [{ 'prioridad': 'Ninguna', 'pieza': 0 }];
                _this.totales_estadisticas = { total_partidas: totPartidas, total_piezas: totPza, listaQuincena: _this.listaQuincena, listaMes: _this.listaMes, listaAnio: _this.listaYear };
                _this.limpiarVariablesGraficaEstadisticas();
                _this.calcularDatosGraficaEstadisticas();
            }
            _this.core.closeModal(1);
        });
    };
    // Metodo para las variables de la graficas estadisticas
    RutaEnvioPorClienteComponent.prototype.limpiarVariablesGraficaEstadisticas = function () {
        this.core.openModal(1);
        this.filtroPrioUsuario = [];
        for (var _i = 0, _a = this.listaPrioridadUsuarioEstadisticas; _i < _a.length; _i++) {
            var valor = _a[_i];
            this.filtroPrioUsuario.push(valor.prioridad);
        }
        var valoresC = [];
        var valoresPrioEst = [];
        for (var _b = 0, _c = this.listaPrioridadUsuarioEstadisticas; _b < _c.length; _b++) {
            var nombre = _c[_b];
            valoresPrioEst.push([0]);
            valoresC.push(0);
        }
        if (this.listaPrioridadUsuarioEstadisticas.length > 1) {
            this.dataPrioridadEstadisticas = {
                titulo: 'Totales',
                labels: this.filtroPrioUsuario,
                valores: valoresC,
                labelsExtras: ['Piezas'],
                labelsExtrasHover: ['Piezas'],
                valuesExtras: [0],
                valuesExtrasHover: valoresPrioEst
            };
            this.graficasEstadisticas = 'Prioridades';
        }
        else {
            this.dataPrioridadEstadisticas = {
                titulo: 'Totales',
                labels: [""],
                valores: [1],
                labelsExtras: ['Piezas'],
                labelsExtrasHover: ['Piezas'],
                valuesExtras: [0],
                valuesExtrasHover: [[0], [0]]
            };
            this.graficasEstadisticas = 'Gris';
        }
        this.core.closeModal(1);
    };
    RutaEnvioPorClienteComponent.prototype.calcularDatosGraficaEstadisticas = function () {
        for (var _i = 0, _a = this.listaPrioridadUsuarioEstadisticas; _i < _a.length; _i++) {
            var usuario = _a[_i];
            this.llenarTotales(this.dataPrioridadEstadisticas, usuario, 'PRIORIDADESESTADISTICAS');
        }
    };
    RutaEnvioPorClienteComponent.prototype.llenarTotales = function (total, elemento, graficaElegida) {
        this.core.openModal(1);
        switch (graficaElegida) {
            case 'PRIORIDADESESTADISTICAS':
                var posicionP4 = this.filtroPrioUsuario.indexOf(elemento.prioridad);
                if (this.nuevaPrioridadEstadisticas.indexOf(elemento.prioridad) === -1) {
                    this.nuevaPrioridadEstadisticas.push(elemento.prioridad);
                }
                total.valuesExtrasHover[posicionP4][0] += elemento.pieza;
                total.valuesExtras[0] += elemento.pieza; // Total de Partidas
                total.valores[posicionP4] += elemento.pieza; // +(elemento.monto.toFixed(2)); //Monto total
                this.activarGraficasPrioEsta = true; // ACTIVAR EL COMPONENTE PARA LA GRAFICA DE DONA PRIORIDADES USUARIO
                this.core.closeModal(1);
                break;
            default:
                this.core.closeModal(1);
                break;
        }
    };
    RutaEnvioPorClienteComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    RutaEnvioPorClienteComponent.prototype.regresarVista = function () {
        this.vistaPrincipal = true;
        this.obtenerMenu();
    };
    RutaEnvioPorClienteComponent.prototype.cambiarResolucione = function (valor) {
        this.vistaPrincipal = false;
        this.vistaPrin = false;
        if (this.vistaPrin === false) {
            this.resolucion = '1700px';
        }
    };
    RutaEnvioPorClienteComponent.prototype.actualizarDatos = function (valor) {
        if (valor === false) {
            this.activeMenu = false;
            this.vistaPrincipal = true;
            this.obtenerMenu();
        }
        this.obtenerObjetivos();
        this.ObtenerEstadisticaUsuarioEnvioPL(this.idUsuario);
    };
    RutaEnvioPorClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-ruta-envio-por-cliente',
            template: __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_1__services_trabajar_ruta_envio_por_cliente_service__["a" /* EnvioPorClienteService */], __WEBPACK_IMPORTED_MODULE_3__services_embalar_embalar_service__["a" /* EmbalarService */], __WEBPACK_IMPORTED_MODULE_5__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], RutaEnvioPorClienteComponent);
    return RutaEnvioPorClienteComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RutaEnvioPorClienteModule", function() { return RutaEnvioPorClienteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ruta_envio_por_cliente_routing__ = __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ruta_envio_por_cliente_component__ = __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_pop_up_estadisticas_pop_up_estadisticas_module__ = __webpack_require__("./src/app/components/shared/pop-up-estadisticas/pop-up-estadisticas.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lista_clientes_lista_clientes_component__ = __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/lista-clientes/lista-clientes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__finalizar_envio_cliente_finalizar_envio_cliente_component__ = __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/finalizar-envio-cliente/finalizar-envio-cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__barra_prioridades_por_cliente_barra_prioridades_por_cliente_component__ = __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-prioridades-por-cliente/barra-prioridades-por-cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__barra_progreso_por_cliente_barra_progreso_por_cliente_component__ = __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/barra-progreso-por-cliente/barra-progreso-por-cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_file_upload_file_upload_module__ = __webpack_require__("./src/app/components/shared/file-upload/file-upload.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_combo_flecha_verde_combo_flecha_verde_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-verde/combo-flecha-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_alerta_alerta_module__ = __webpack_require__("./src/app/components/shared/alerta/alerta.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pop_up_finalizar_pop_up_finalizar_component__ = __webpack_require__("./src/app/components/trabajar-ruta/ruta-envio-por-cliente/pop-up-finalizar/pop-up-finalizar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var RutaEnvioPorClienteModule = /** @class */ (function () {
    function RutaEnvioPorClienteModule() {
    }
    RutaEnvioPorClienteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__ruta_envio_por_cliente_routing__["a" /* RutaEnvioPorClienteRouting */],
                __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_pop_up_estadisticas_pop_up_estadisticas_module__["a" /* PopUpEstadisticasModule */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__shared_file_upload_file_upload_module__["a" /* FileUploadModule */],
                __WEBPACK_IMPORTED_MODULE_13__shared_combo_flecha_verde_combo_flecha_verde_module__["a" /* ComboFlechaVerdeModule */],
                __WEBPACK_IMPORTED_MODULE_14__shared_alerta_alerta_module__["a" /* AlertaModule */],
                __WEBPACK_IMPORTED_MODULE_16__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__ruta_envio_por_cliente_component__["a" /* RutaEnvioPorClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_7__lista_clientes_lista_clientes_component__["a" /* ListaClientesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__finalizar_envio_cliente_finalizar_envio_cliente_component__["a" /* FinalizarEnvioClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_9__barra_prioridades_por_cliente_barra_prioridades_por_cliente_component__["a" /* BarraPrioridadesPorClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_11__barra_progreso_por_cliente_barra_progreso_por_cliente_component__["a" /* BarraProgresoPorClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pop_up_finalizar_pop_up_finalizar_component__["a" /* PopUpFinalizarComponent */]
            ]
        })
    ], RutaEnvioPorClienteModule);
    return RutaEnvioPorClienteModule;
}());



/***/ })

});
//# sourceMappingURL=ruta-envio-por-cliente.module.chunk.js.map