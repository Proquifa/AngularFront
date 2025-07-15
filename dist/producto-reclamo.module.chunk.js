webpackJsonp(["producto-reclamo.module"],{

/***/ "./src/app/components/producto-reclamo/envio-correo/envio-correo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" *ngIf=\"correo\">\n  <!-- Inicio modal -->\n  <div id=\"pop-up-lote\" class=\"modal\" #pop>\n    <!-- Inicio modal-content -->\n    <div class=\"modal-content\">\n      <header class=\"header\" >\n        ENVIAR EVIDENCIA DE FACTURACIÓN\n      </header>\n      <div class=\"contenido\">\n        <div style=\"width: 100%;height: 90%\">\n          <div class=\"remitentes\">\n            <label>Contacto: <span class=\"destinatarios\">{{correoContacto}} </span></label>\n          </div>\n          <div class=\"remitentes\" style=\"padding-left: 63px;\">\n            <label>CC : <input #textCopia (blur)=\"cambioCopia(textCopia.value, 'CC')\" value=\"{{cc}}\"  type=\"text\" class=\"copiaCorreo\"></label>\n          </div>\n          <div class=\"remitentes\" style=\"padding-left: 50px;\">\n            <label>CCO : <input #textCopiaO (blur)=\"cambioCopia(textCopiaO.value, 'CCO')\" value=\"{{destinatarioCopia}}\"  type=\"text\" class=\"copiaCorreo\"></label>\n          </div>\n          <div  class=\"remitentes\" style=\"padding-left: 20px;\">\n            <label>ASUNTO : <span style=\"font-weight: 300\"> PRODUCTO RECLAMO </span></label>\n          </div>\n          <div class=\"comentarios\">\n            <textarea placeholder=\" Escribe Comentarios Adicionales\" [(ngModel)]=\"comentario\"></textarea>\n          </div>\n        </div>\n        <div style=\"width: 100%;height: 10%\" class=\"btnDireccionPL\">\n          <div>\n            <a class=\"btnImprimir\" (click)=\"finalizar()\">ACEPTAR</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--Fin modal-content-->\n  </div>\n  <!--Fin modal-->\n</div>\n"

/***/ }),

/***/ "./src/app/components/producto-reclamo/envio-correo/envio-correo.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal {\n  z-index: 10;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.7);\n  font-family: 'Roboto', sans-serif; }\n\n.modal-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  margin: auto;\n  top: 0%;\n  background-color: white;\n  position: relative;\n  padding: 0;\n  outline: 0;\n  width: 795px;\n  height: 520px;\n  color: black;\n  border: 1px solid #008894;\n  font-family: 'Roboto', sans-serif;\n  border-radius: 11px 11px 11px 11px; }\n\n.header {\n  width: 100%;\n  height: 55px;\n  color: white;\n  font-family: 'Novecento';\n  font-weight: bold;\n  font-size: 26px;\n  background: #008895;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 10px 10px 0px 0px; }\n\n/*Termina modal*/\n\n/*Contenido del modal*/\n\n.contenido {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 20px;\n  padding-right: 20px; }\n\n/*Termina*/\n\n/*****BOTONES*/\n\n.btnDireccionPL {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  height: 5%;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  justify-items: center; }\n\n.btnImprimir {\n  width: 170px;\n  height: 30px;\n  background-color: #008894;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 21px;\n  cursor: pointer;\n  border: none;\n  color: #FFFFFF;\n  font-weight: bold;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto; }\n\n/*Termina*/\n\n.titulo {\n  font-family: Novecento;\n  font-weight: bold;\n  font-size: 16px; }\n\n.remitentes {\n  height: 15%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-bottom: 1px solid #424242; }\n\n.remitentes > label {\n    font-family: Novecento;\n    font-weight: bold;\n    font-size: 16px; }\n\n.comentarios {\n  width: 100%;\n  height: 35%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-top: 10px; }\n\n.comentarios > textarea {\n    width: 100%;\n    height: 100%;\n    border-color: transparent; }\n\n.destinatarios {\n  font-family: Roboto;\n  font-weight: 300;\n  color: #008894;\n  font-size: 16px;\n  padding-left: 5px; }\n\n.copiaCorreo {\n  height: 27px;\n  width: 500px;\n  border-color: transparent;\n  outline: 0 none; }\n"

/***/ }),

/***/ "./src/app/components/producto-reclamo/envio-correo/envio-correo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvioCorreoComponent; });
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

var EnvioCorreoComponent = /** @class */ (function () {
    function EnvioCorreoComponent() {
        this.cerrarPop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.comentario = '';
        this.destinatarioCopia = '';
        this.cc = '';
    }
    EnvioCorreoComponent.prototype.ngOnInit = function () {
        this.correo = true;
        console.log('sOY NUEVO CORREO -->');
    };
    EnvioCorreoComponent.prototype.cambioCopia = function (texto, tipo) {
        if (tipo === 'CCO') {
            this.destinatarioCopia = texto;
        }
        else if (tipo = 'CC') {
            this.cc = texto;
        }
    };
    EnvioCorreoComponent.prototype.finalizar = function () {
        var obj = {
            correo: this.correoContacto,
            ccorreo: this.cc,
            cocorreo: this.destinatarioCopia,
            cuerpoCorreo: this.comentario,
        };
        console.log(this.destinatarioCopia);
        console.log(this.cc);
        this.cerrarPop.emit(obj);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], EnvioCorreoComponent.prototype, "cerrarPop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EnvioCorreoComponent.prototype, "correoContacto", void 0);
    EnvioCorreoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-envio-correo',
            template: __webpack_require__("./src/app/components/producto-reclamo/envio-correo/envio-correo.component.html"),
            styles: [__webpack_require__("./src/app/components/producto-reclamo/envio-correo/envio-correo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EnvioCorreoComponent);
    return EnvioCorreoComponent;
}());



/***/ }),

/***/ "./src/app/components/producto-reclamo/gestion-producto-reclamo/gestion-producto-reclamo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"areaSeccion\">\n  <div>\n    <div class=\"datosPersonales\" *ngIf=\"contacto !== 'Seleccionar'\">\n      <div>\n        <div>\n          <img src=\"./assets/Images/contacto.svg\" class=\"icono\">\n          <pn-combo-flecha-verde [validar]=\"true\"  [items]=\"itemContacto\" [itemSelect]=\"selected\" [heightLi]=\"'35px'\" [widthBorder] = 'false' (valueDropList)=\"recibirItem($event)\" style=\"width: 250px;\" *ngIf=\"activarCombo\"></pn-combo-flecha-verde>\n        </div>\n        <div>\n          <img src=\"./assets/Images/mail.svg\" class=\"icono\">\n          <label>{{itemContactoS.email}}</label>\n        </div>\n        <div>\n          <img src=\"./assets/Images/telefono.svg\" class=\"icono\">\n          <label>{{itemContactoS.tel}}</label>\n        </div>\n      </div>\n      <div>\n        <label>{{itemContactoS.titulo}}</label>\n        <span>Título de Contacto</span>\n      </div>\n      <div>\n        <label>{{itemContactoS.puesto}}</label>\n        <span>Puesto</span>\n      </div>\n      <div>\n        <label>{{itemContactoS.departament}}</label>\n        <span>Departamento</span>\n      </div>\n    </div>\n    <div class=\"datosPersonales\" *ngIf=\"contacto == 'Seleccionar'\">\n      <div style=\"width: 100%\">\n        <div class=\"noSeleccionado\">\n          <img src=\"./assets/Images/contacto.svg\" class=\"icono\">\n          <pn-combo-flecha-verde  [items]=\"itemContacto\" [itemSelect]=\"selected\" [heightLi]=\"'35px'\" [widthBorder] = 'false' (valueDropList)=\"recibirItem($event)\" style=\"width: 250px;display: flex;align-items: center\" *ngIf=\"activarCombo\"></pn-combo-flecha-verde>\n        </div>\n        <div style=\"height: 50%;width: 100%\">\n          <h1>SELECCIONA UN CONTACTO PARA VISUALIZAR ESTA SECCIÓN</h1>\n        </div>\n      </div>\n    </div>\n    <div>\n      <div style=\"padding-right: 20px;\" class=\"seccionListas\">\n        <div class=\"titulos\" style=\"border-bottom: initial\">\n          <label>PRODUCTOS RECHAZADOS</label>\n        </div>\n        <div>\n          <div class=\"titulosLista\">\n            <div class=\"organizarLista\" style=\"padding-bottom: 10px; padding-top: initial\">\n              <div style=\"height: 100%;    display: flex;align-items: center;\">\n                <div class=\"menu\" (click)=\"abreCombo()\">\n                  <div>\n                  </div>\n                  <div>\n                  </div>\n                  <div>\n                  </div>\n                  <section id=\"section\">\n                    <ul class=\"listaHamburguesa\">\n                      <li (click)=\"ordenamientoFechaTramNue()\">Más Recientes</li>\n                      <li (click)=\"ordenamientoFechaTramAnt()\">Más Antiguos</li>\n                    </ul>\n                  </section>\n                </div>\n              </div>\n              <div style=\"height: 100%;    display: flex;align-items: center;\">\n                <h3 class=\"subtitulo\">{{tipoOrden}}</h3>\n              </div>\n              <div class=\"barraBusqueda\" style=\"height: 100%\">\n                <div class=\"buscar\">\n                  <div>\n                    <div class=\"lupa\">\n                      <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\n                    </div>\n                    <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Buscar\" />\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--Lista total-->\n          <div class=\"listaSeccionUno\">\n            <div>\n              <div class= \"lista\" style=\"display: unset;flex-direction: column\" >\n                <div [ngClass]=\"item.identificador === folio? 'divActive': ''\"  *ngFor=\"let item of lista; let i = index\"\n                     style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\" (click)=\"seleccionarItem(i, item)\">\n                  <div class=\"dfSelect\"></div>\n                  <div class=\"datosLst\">\n                    <div class=\"informacionList\">\n                      <label>#{{i +1}} · <span style=\"color:#008894\">{{item.codigo}} </span>{{item.concepto}}</label>\n                      <p>Fecha de Inspección: <span style=\"text-transform: capitalize;\">{{item.fechaInspeccionFormato}}</span> · Inspector: {{item.inspector}}</p>\n                      <h3 class=\"textoPiezas\">Lugar: {{item.destino}} · FEE: <span style=\"text-transform: capitalize;\">{{item.feeFormato}}</span> · DRE: {{item.dre}} · Tipo: {{item.tipo}}</h3>\n                      <p>OC: {{item.compra}} · Pedido Interno {{item.cpedido}}</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"totales\">\n              <label>#{{lista.length}}</label>\n              <label>{{lista.length}} Piezas</label>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--linea degradada-->\n      <div class=\"borderLine\"></div>\n      <!---->\n      <div style=\"width: 65%;padding-left: 20px\" class=\"seccionListas\">\n        <div class=\"titulos\">\n          <label *ngIf=\"activarOc\" class=\"corteTexto\">#{{indiceOc}} · <span>{{itemOc.codigo}}</span> {{itemOc.concepto}}</label>\n        </div>\n        <div>\n          <div style=\"height: 10%; width: 100%; display: flex;flex-direction: column\">\n            <div style=\"height: 60%; width: 100%;display: flex;flex-direction: row;justify-content: space-between\">\n              <div class=\"infoProveedor\">\n                <span>Producto Rechazado</span>\n                <div>\n                  <div style=\"padding-right: 5px;\">\n                    <label style=\"font-weight: 400\">Tipo:</label>\n                    <label>{{itemOc.tipo}}</label>\n                  </div>\n                  <div>\n                    <label style=\"font-weight: 400\">Manejo:</label>\n                    <label>{{itemOc.manejo}}</label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"infoProveedor\">\n                <div style=\"padding-top: 20px\">\n                  <div>\n                    <label style=\"font-weight: 400;color: #008894;\">Causa:</label>\n                    <label>{{itemOc.origen}}</label>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"seccionContenido\">\n            <div class=\"texto\">\n              <div style=\"height: calc(100% - 54px)\">\n                <label>Reporte de Rechazo</label>\n              </div>\n              <div class=\"rechazo\">\n                <label class=\"rechazoMotivo\">{{itemOc.rechazo}}</label>\n              </div>\n            </div>\n            <div class=\"imagenes\">\n              <div class=\"imagenRechazo\">\n                <div class=\"image\">\n                  <label (click)=\"visualizarImg('frente')\" [style.font-weight]=\"fotoF? 'bold': ''\">Foto Frente</label>\n                  <label (click)=\"visualizarImg('arriba')\" [style.font-weight]=\"fotoAr? 'bold': ''\">Foto Arriba</label>\n                  <label (click)=\"visualizarImg('abajo')\" [style.font-weight]=\"fotoAb? 'bold': ''\">Foto Abajo</label>\n                </div>\n                <div class=\"estilosImagen\">\n                  <img [src]=\"pathImg\">\n                </div>\n              </div>\n            </div>\n            <div class=\"motivos\">\n              <div style=\"justify-content: flex-start;align-items: center;padding-top: 5px;\">\n                <div class=\"etiquetaInstruc\">\n                  <label class=\"instruc\">Instrucciones</label>\n                </div>\n                <div class=\"tipoInstruc\">\n                  <label style=\"padding-left: 13px;\">Reclamar la reposición del producto</label>\n                </div>\n              </div>\n              <div  style=\"flex-direction: row;height: 55%;padding-top: 5px;\">\n                <div style=\"flex-direction: column;width: 70%\">\n                  <label>Solicitud de Reclamo</label>\n                  <textarea [ngModel]=\"instruccion\" (ngModelChange)=\"recibirInstruccion($event)\" placeholder=\"Escribe Aquí\"></textarea>\n                </div>\n                <div class=\"tipoEnvio\">\n                  <label>Medio de Reclamo</label>\n                  <div style=\"padding-right: 47px;\">\n                    <img src=\"./assets/Images/radio_unselected.svg\" *ngIf=\"!entregarSelect\" (click)=\"activarSelect('tel')\">\n                    <img src=\"./assets/Images/radio_selected.svg\" *ngIf=\"entregarSelect\" (click)=\"activarSelect('tel')\">\n                    <label>Tel</label>\n                  </div>\n                  <div>\n                    <img src=\"./assets/Images/radio_unselected.svg\" *ngIf=\"!reclamarSelect\" (click)=\"activarSelect('mail')\">\n                    <img src=\"./assets/Images/radio_selected.svg\" *ngIf=\"reclamarSelect\" (click)=\"activarSelect('mail')\">\n                    <label>Mail/Fax</label>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"btn\">\n    <div [style.background-color]=\"activarBtn? '#4BA92B': '#C2C3C9'\" [style.pointer-events]=\"activarBtn? 'auto':'none'\" (click)=\"finalizar()\">\n      <label>ACEPTAR</label>\n    </div>\n  </div>\n</div>\n<pn-envio-correo *ngIf=\"activarPop\" (cerrarPop)=\"finalizarEnvio($event)\" [correoContacto]=\"this.itemContactoS.email\"></pn-envio-correo>\n"

/***/ }),

/***/ "./src/app/components/producto-reclamo/gestion-producto-reclamo/gestion-producto-reclamo.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n.areaSeccion {\n  min-width: 1175px;\n  min-height: 1000px;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0px 20px 0px 20px; }\n.areaSeccion > div {\n    width: 100%;\n    height: calc(100% - 71px);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n.areaSeccion > div > .datosPersonales {\n      width: 100%;\n      height: 153px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      border-bottom: 1px solid #424242;\n      line-height: 1.5; }\n.areaSeccion > div > .datosPersonales > div {\n        height: 100%;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: start;\n            -ms-flex-align: start;\n                align-items: start;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        padding-right: 10px; }\n.areaSeccion > div > .datosPersonales > div > label {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 18px;\n          color: #424242;\n          text-align: left; }\n.areaSeccion > div > .datosPersonales > div > span {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 17px;\n          color: #848387;\n          text-align: left; }\n.areaSeccion > div > .datosPersonales > div > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n.areaSeccion > div > .datosPersonales > div > div > label {\n            font-family: Roboto;\n            font-weight: 400;\n            font-size: 18px;\n            color: #424242;\n            text-align: left; }\n.areaSeccion > div > .datosPersonales > div > div > h1 {\n            font-family: Novecento;\n            font-weight: bold;\n            font-size: 40px;\n            color: #D8D9DD;\n            line-height: 55px; }\n.areaSeccion > div > div {\n      width: 100%;\n      height: calc(100% - 153px);\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n.areaSeccion > .btn {\n    height: 71px;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-bottom: 20px; }\n.areaSeccion > .btn div {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      width: 170px;\n      height: 31px;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      background: #C2C3C9;\n      cursor: pointer; }\n.areaSeccion > .btn div > label {\n        font-family: Novecento;\n        font-weight: bold;\n        font-size: 20px;\n        color: #FFFFFF;\n        text-align: left;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin-bottom: 4px;\n        cursor: pointer; }\n.primeraSec {\n  width: 30%;\n  background: #FFFFFF;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-left: 20px;\n  margin-right: 20px;\n  min-width: 350px; }\n.primeraSec > .listaSeccionUno {\n    height: 90%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n.primeraSec > .listaSeccionUno > div {\n      height: calc(100% - 30px);\n      border-bottom: 1px solid;\n      width: 100%;\n      border-top: 1px solid;\n      overflow: scroll; }\n.primeraSec > .listaSeccionUno > .totales {\n      height: 30px;\n      width: 100%;\n      border-bottom: 0;\n      border-top: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n.lista {\n  width: 100%;\n  min-height: 80px;\n  font-size: 20px;\n  padding: 15px 19px 14px 13px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  line-height: 1.3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto; }\n.lista > .index {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    height: 52px; }\n.lista > div > .datosLst {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-left: 20px; }\n.lista div:hover {\n    background-color: #ECEEF0; }\n.lista > .divActual {\n    background-color: #ECEEF0;\n    -webkit-box-shadow: 0 2px 4px -3px #008895;\n            box-shadow: 0 2px 4px -3px #008895; }\n.lista > .divActive {\n    background-color: #ECEEF0; }\n.lista > .divActive .dfSelect {\n      background: #008895 !important;\n      width: 5px !important;\n      color: #008895; }\n.lista > .divActive > div > .datosLst {\n      -webkit-box-ordinal-group: 1;\n          -ms-flex-order: 0;\n              order: 0;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n      -ms-flex-item-align: auto;\n          -ms-grid-row-align: auto;\n          align-self: auto;\n      padding-top: 5px;\n      padding-bottom: 5px;\n      padding-left: 20px; }\n.listaSeccionUno {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-height: 668px;\n  height: 96%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: auto; }\n.listaSeccionUno > div {\n    height: calc(100% - 30px);\n    border-bottom: 1px solid;\n    width: 100%;\n    border-top: 1px solid;\n    overflow: auto;\n    position: relative; }\n.listaSeccionUno > .totales {\n    height: 30px;\n    width: 100%;\n    border-bottom: 0;\n    border-top: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    line-height: 1.2; }\n.borderLine {\n  width: 1.1px;\n  height: 100%;\n  background: -webkit-gradient(linear, left bottom, left top, color-stop(2%, #FFFFFF), color-stop(70%, #BCBCBC), color-stop(93%, #FFFFFF)) 100%;\n  background: linear-gradient(to top, #FFFFFF 2%, #BCBCBC 70%, #FFFFFF 93%) 100%; }\n.icono {\n  width: 16px;\n  margin-right: 5px; }\n.buscar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  height: 50px;\n  width: 100%;\n  border-style: solid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.buscar div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 90%;\n    border-radius: 102px 102px 102px 102px;\n    -moz-border-radius: 102px 102px 102px 102px;\n    -webkit-border-radius: 102px 102px 102px 102px;\n    border: 0.5px solid #BFC0C7;\n    height: 26px; }\n.buscar div div {\n      border: none;\n      border-radius: 0px 0px 0px 0px;\n      -moz-border-radius: 0px 0px 0px 0px;\n      -webkit-border-radius: 0px 0px 0px 0px;\n      border: 0px solid #000000;\n      width: 40px;\n      background: transparent;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n.buscar div .buscar-input {\n      background: transparent;\n      border-radius: 100px;\n      -moz-border-radius: 102px 102px 102px 102px;\n      border: 0px solid #000000;\n      width: 100%;\n      font-family: Helvetica;\n      font-size: 18px;\n      color: #AAA9AF;\n      outline: none;\n      padding-left: 5px; }\n.barraBusqueda {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n/******/\n.menu {\n  position: relative; }\n.menu:HOVER {\n  cursor: pointer; }\n.menu > div {\n  width: 20px;\n  height: 2px;\n  background: #000000;\n  margin: 5px; }\nsection {\n  position: absolute;\n  visibility: hidden;\n  height: 0; }\nsection.visible {\n  visibility: visible;\n  height: 74px;\n  overflow: auto;\n  width: 219px;\n  background: #FFFFFF;\n  z-index: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid #ECEEF0;\n  border-top: 1px solid #ECEEF0;\n  border-left: 1px solid #ECEEF0;\n  border-right: 1px solid #ECEEF0; }\n.listaHamburguesa {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 15px;\n  padding-right: 15px; }\n.listaHamburguesa > li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border-bottom: 0.5px solid #ECEEF0;\n    padding-bottom: 5px;\n    padding-top: 5px; }\n.listaHamburguesa > li:hover {\n    background-color: #ECEEF0; }\n.espacios {\n  padding-right: 120px; }\n.subtitulo {\n  font-family: Roboto;\n  font-weight: 400;\n  font-size: 18px;\n  color: #424242;\n  text-align: left; }\n.noSeleccionado {\n  height: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 20px; }\n.informacionList {\n  font-family: Roboto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n.informacionList label {\n    color: #242424;\n    font-weight: bold;\n    font-size: 20px;\n    font-family: Roboto;\n    -webkit-transition: 0.8s font-size;\n    transition: 0.8s font-size;\n    overflow: hidden; }\n@supports (-webkit-line-clamp: 2) {\n      .informacionList label {\n        display: block;\n        display: -webkit-box !important;\n        line-height: 1.2;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        text-overflow: ellipsis; } }\n@supports not (-webkit-line-clamp: 2) {\n      .informacionList label {\n        position: relative;\n        line-height: 1.2;\n        overflow: hidden;\n        width: 100%; }\n        .informacionList label:before {\n          content: \"\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\";\n          position: absolute;\n          bottom: 0;\n          right: 0;\n          background: transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;\n          background: transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%; } }\n.informacionList p {\n    font-weight: 400;\n    font-family: Roboto;\n    font-size: 17px;\n    color: #242424;\n    text-align: left;\n    -webkit-transition: 0.8s font-size;\n    transition: 0.8s font-size; }\n.informacionList h3 {\n    font-size: 17px;\n    font-family: Roboto;\n    color: #848387;\n    font-weight: 400;\n    -webkit-transition: 0.8s font-size;\n    transition: 0.8s font-size; }\n.pedidoInter {\n  font-weight: 400 !important; }\n.imagenFlecha {\n  position: absolute;\n  right: 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  height: 100%; }\n.organizarLista {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 10px;\n  position: relative;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.seccionListas {\n  width: 35%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n.seccionListas > .titulos {\n    width: 100%;\n    height: 67px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    border-bottom: 1px solid #242424;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.seccionListas > .titulos > label {\n      font-family: Novecento;\n      font-weight: bold;\n      font-size: 24px;\n      color: #424242;\n      text-align: left;\n      overflow: hidden;\n      -webkit-transition: 0.8s font-size;\n      transition: 0.8s font-size; }\n.seccionListas > .titulos > label > span {\n        color: #008894;\n        font-size: 24px;\n        font-weight: bold;\n        font-family: Novecento; }\n.seccionListas > div {\n    width: 100%;\n    height: calc(100% - 67px); }\n.numeroIndex {\n  font-size: 28px;\n  font-family: Roboto;\n  font-weight: 400;\n  color: #242424;\n  text-align: left;\n  padding-right: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 4px; }\n.infoProveedor {\n  height: 100%;\n  width: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  line-height: 1.2; }\n.infoProveedor > span {\n    font-family: Roboto;\n    font-weight: bold;\n    font-size: 20px;\n    color: #008894;\n    text-align: left;\n    -webkit-transition: 0.8s font-size;\n    transition: 0.8s font-size; }\n.infoProveedor > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n.infoProveedor > div > div {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n.infoProveedor > div > div > label {\n        font-family: Roboto;\n        font-weight: bold;\n        font-size: 16px;\n        color: #424242;\n        text-align: left;\n        padding-right: 5px;\n        -webkit-transition: 0.8s font-size;\n        transition: 0.8s font-size; }\n.segundaS {\n  height: 40%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n.segundaS .causaProducto {\n    height: 100%;\n    width: 50%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n.segundaS .causaProducto > span {\n      font-family: Roboto;\n      font-weight: bold;\n      font-size: 20px;\n      color: #008894;\n      text-align: left;\n      -webkit-transition: 0.8s font-size;\n      transition: 0.8s font-size; }\n.segundaS .causaProducto > label {\n      overflow: hidden;\n      font-family: Roboto;\n      font-weight: 400;\n      font-size: 18px;\n      color: #424242;\n      text-align: left;\n      padding-right: 5px;\n      -webkit-transition: 0.8s font-size;\n      transition: 0.8s font-size; }\n@supports (-webkit-line-clamp: 1) {\n        .segundaS .causaProducto > label {\n          display: block;\n          display: -webkit-box !important;\n          line-height: inital;\n          -webkit-line-clamp: 1;\n          -webkit-box-orient: vertical;\n          text-overflow: ellipsis; } }\n@supports not (-webkit-line-clamp: 1) {\n        .segundaS .causaProducto > label {\n          position: relative;\n          line-height: inital;\n          overflow: hidden;\n          width: 100%; }\n          .segundaS .causaProducto > label:before {\n            content: \"\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\";\n            position: absolute;\n            bottom: 0;\n            right: 0;\n            background: transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;\n            background: transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%; } }\n.seccionContenido {\n  height: 90%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n.seccionContenido > .texto {\n    height: 116px;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-bottom: 5px; }\n.seccionContenido > .texto > div > label {\n      font-family: Roboto;\n      font-weight: bold;\n      font-size: 20px;\n      color: #424242;\n      text-align: left; }\n.seccionContenido > .texto > .rechazo {\n      height: 54px;\n      width: 100%;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      background-color: #f9e0e0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding-left: 20px;\n      padding-right: 20px; }\n.seccionContenido > .imagenes {\n    height: calc(100% - 116px);\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding-top: 5px; }\n.seccionContenido > .imagenes > .imagenRechazo {\n      height: 100%;\n      width: 100%;\n      background-color: #F3F3F4;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n.seccionContenido > .imagenes > .imagenRechazo > .image {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        padding-top: 10px; }\n.seccionContenido > .imagenes > .imagenRechazo > .image > label {\n          cursor: pointer;\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 20px;\n          color: #008894;\n          text-align: left;\n          height: 23px; }\n.seccionContenido > .imagenes > .imagenRechazo > .image > label:hover {\n          border-bottom: 1px solid; }\n.seccionContenido > .imagenes > .imagenRechazo > .estilosImagen {\n        height: calc(100% - 20px);\n        width: calc(100% - 20px);\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n.seccionContenido > .imagenes > .imagenRechazo > .estilosImagen > img {\n          height: 305px;\n          position: relative; }\n.rechazoMotivo {\n  font-weight: 400 !important;\n  font-size: 17px !important;\n  color: #424242;\n  overflow: hidden; }\n@supports (-webkit-line-clamp: 2) {\n    .rechazoMotivo {\n      display: block;\n      display: -webkit-box !important;\n      line-height: 1.2;\n      -webkit-line-clamp: 2;\n      -webkit-box-orient: vertical;\n      text-overflow: ellipsis; } }\n@supports not (-webkit-line-clamp: 2) {\n    .rechazoMotivo {\n      position: relative;\n      line-height: 1.2;\n      overflow: hidden;\n      width: 100%; }\n      .rechazoMotivo:before {\n        content: \"\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\";\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        background: transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;\n        background: transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%; } }\n.motivos {\n  height: calc(100% - 407px);\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n.motivos > div {\n    height: 45%;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n.motivos > div > div {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      width: 100%;\n      height: 100%;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n.motivos > div > div > label {\n        font-family: Roboto;\n        font-weight: 400;\n        font-size: 17px;\n        color: #424242;\n        -webkit-transition: 0.8s font-size;\n        transition: 0.8s font-size; }\n.motivos > div > div > img {\n        height: 20px;\n        padding-right: 15px; }\n.motivos > div > div > textarea {\n        height: 71px;\n        outline: 0 none;\n        border-width: 1px;\n        border-style: solid;\n        border-color: #D8D9DD;\n        font-size: 16px;\n        font-family: Roboto;\n        font-weight: 400;\n        width: 99%; }\n.motivos > div > label {\n      font-family: Roboto;\n      font-weight: 400;\n      font-size: 16px;\n      color: #424242;\n      text-align: left; }\n.tipoEnvio {\n  width: 30% !important;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.tipoEnvio > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-top: 5px; }\n.tipoEnvio > div > img {\n      width: 20px;\n      padding-right: 6px; }\n.tipoEnvio > div > label {\n      font-family: Roboto;\n      font-size: 18px;\n      color: #424242; }\n.instruc {\n  font-weight: bold !important;\n  font-size: 18px !important;\n  color: #008894 !important;\n  text-align: left; }\n.tipoInstruc {\n  background: rgba(0, 136, 149, 0.12);\n  height: 70% !important;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start !important;\n      -ms-flex-pack: start !important;\n          justify-content: flex-start !important;\n  padding-top: 5px; }\n.etiquetaInstruc {\n  -webkit-box-pack: start !important;\n      -ms-flex-pack: start !important;\n          justify-content: flex-start !important;\n  height: 30% !important; }\n@supports (-webkit-line-clamp: 1) {\n    .etiquetaInstruc {\n      display: block;\n      display: -webkit-box !important;\n      line-height: 1.2;\n      -webkit-line-clamp: 1;\n      -webkit-box-orient: vertical;\n      text-overflow: ellipsis; } }\n@supports not (-webkit-line-clamp: 1) {\n    .etiquetaInstruc {\n      position: relative;\n      line-height: 1.2;\n      overflow: hidden;\n      width: 100%; }\n      .etiquetaInstruc:before {\n        content: \"\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\";\n        position: absolute;\n        bottom: 0;\n        right: 0;\n        background: transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;\n        background: transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%; } }\n@supports (-webkit-line-clamp: 1) {\n  .corteTexto {\n    display: block;\n    display: -webkit-box !important;\n    line-height: 1.2;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    text-overflow: ellipsis; } }\n@supports not (-webkit-line-clamp: 1) {\n  .corteTexto {\n    position: relative;\n    line-height: 1.2;\n    overflow: hidden;\n    width: 100%; }\n    .corteTexto:before {\n      content: \"\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\";\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      background: transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;\n      background: transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%; } }\n/deep/ .dropListSelect .container-drop .Title > p {\n  font-weight: bold !important;\n  color: #008894; }\n@media all and (min-width: 1300px) and (max-width: 1836px) {\n  .areaSeccion > div > .datosPersonales > div > div > h1 {\n    font-size: 35px; }\n  .seccionListas > .titulos > label {\n    font-size: 22px; }\n  .seccionListas > .titulos > label > span {\n    font-size: 22px; }\n  .infoProveedor > span, .causaProducto > span {\n    font-size: 18px; }\n  .infoProveedor > div > div > label, .causaProducto > label {\n    font-size: 16px; }\n  .informacionList > label {\n    font-size: 18px; }\n  .informacionList > p {\n    font-size: 17px; }\n  .informacionList > h3 {\n    font-size: 16px; }\n  .motivos > div > div > label {\n    font-size: 16px; } }\n@media all and (min-width: 1300px) and (max-width: 1864px) {\n  .espacios {\n    padding-right: 20px; } }\n@media all and (min-height: 770px) and (max-height: 1261px) {\n  .listaSeccionUno {\n    height: 95.5%; }\n  .tipoInstruc {\n    height: 70% !important; }\n  .etiquetaInstruc {\n    height: 30% !important; } }\n"

/***/ }),

/***/ "./src/app/components/producto-reclamo/gestion-producto-reclamo/gestion-producto-reclamo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestionProductoReclamoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_arribo_documento_arribo_documento_service__ = __webpack_require__("./src/app/services/arribo-documento/arribo-documento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_gestor_producto_reclamo_producto_reclamo_service__ = __webpack_require__("./src/app/services/gestor-producto-reclamo/producto-reclamo.service.ts");
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





var GestionProductoReclamoComponent = /** @class */ (function () {
    function GestionProductoReclamoComponent(_serviceContac, _serviveReclamo, coreContainer, comunService) {
        this._serviceContac = _serviceContac;
        this._serviveReclamo = _serviveReclamo;
        this.coreContainer = coreContainer;
        this.comunService = comunService;
        this.regreVista = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.contacto = 'Seleccionar';
        this.validar = 1;
        this.folio = '';
        this.val = 1;
        this.itemContacto = []; /*= [
          {nombre: 'Uno', key: 0}
          ];*/
        this.rutaProd = 'http://proquifa.com.mx:51725/SAP/InspeccionOC/ImagenesRechazo/';
        this.rutaLocal = 'http://localhost:8080/SAP/InspeccionOC/ImagenesRechazo/';
        this.lista = [];
        this.listaUniveso = [];
    }
    GestionProductoReclamoComponent.prototype.ngOnInit = function () {
        var obj;
        obj = new Object();
        obj.nombre = 'Seleccionar';
        this.selected = obj;
        this.obtenerLista();
    };
    GestionProductoReclamoComponent.prototype.ngOnChanges = function () {
        if (this.datosProveedor !== null && this.val === 1) {
            this.recibirContactos();
            this.val++;
        }
    };
    GestionProductoReclamoComponent.prototype.obtenerLista = function () {
        var _this = this;
        this.lista = [];
        this.listaUniveso = [];
        this.totalProductos = 0;
        this._serviveReclamo.piezasReclamoPorProveedor(this.datosProveedor.idProveedor).subscribe(function (data) {
            if (data.current && data.current !== undefined && data.current.length > 0) {
                var listaAux = data.current;
                for (var i = 0; i < listaAux.length; i++) {
                    _this.lista.push(listaAux[i]);
                    _this.listaUniveso.push(listaAux[i]);
                    _this.totalProductos++;
                }
                _this.seleccionarItem(0, _this.lista[0]);
            }
            else {
                _this.regreVista.emit(true);
            }
        }, function (error) {
            console.log(error);
        });
    };
    /*****/
    GestionProductoReclamoComponent.prototype.abreCombo = function () {
        if (document.getElementById('section').className == 'visible') {
            document.getElementById('section').className = "";
        }
        else {
            document.getElementById('section').className = 'visible';
        }
    };
    GestionProductoReclamoComponent.prototype.buscar = function (search) {
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
    GestionProductoReclamoComponent.prototype.recibirContactos = function () {
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
    GestionProductoReclamoComponent.prototype.ordenamientoFechaTramNue = function () {
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
    GestionProductoReclamoComponent.prototype.ordenamientoFechaTramAnt = function () {
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
    GestionProductoReclamoComponent.prototype.recibirItem = function (itemContacto) {
        if (itemContacto.nombre === 'Seleccionar' && this.validar === 2) {
            this.selected = this.contacto;
        }
        if (itemContacto.nombre !== 'Seleccionar' && itemContacto.nombre !== undefined) {
            this.validar++;
            this.contacto = itemContacto.nombre;
            this.itemContactoS = itemContacto;
        }
        this.validarBtn();
    };
    GestionProductoReclamoComponent.prototype.seleccionarItem = function (i, item) {
        this.imgFrentr = '';
        this.imgArriba = '';
        this.imgAbajo = '';
        this.instruccion = '';
        this.reclamarSelect = false;
        this.entregarSelect = false;
        this.activarOc = true;
        this.folio = item.identificador;
        this.itemOc = item;
        this.indiceOc = i + 1;
        if (item.imagenRechazo !== null && item.imagenRechazo !== '') {
            var imagenes = this.itemOc.imagenRechazo.split('|');
            this.imgFrentr = imagenes[0];
            this.imgArriba = imagenes[1];
            this.imgAbajo = imagenes[2];
        }
        this.visualizarImg('frente');
        this.validarBtn();
    };
    GestionProductoReclamoComponent.prototype.visualizarImg = function (tipo) {
        var _this = this;
        var img;
        this.fotoAb = false;
        this.fotoAr = false;
        this.fotoF = false;
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
    GestionProductoReclamoComponent.prototype.activarSelect = function (tipo) {
        if (tipo === 'tel') {
            if (!this.entregarSelect) {
                this.accion = 'Telefono';
                this.entregarSelect = true;
                if (this.reclamarSelect) {
                    this.reclamarSelect = false;
                }
            }
        }
        else if (tipo === 'mail') {
            if (!this.reclamarSelect) {
                this.accion = 'Mail/Fax';
                this.reclamarSelect = true;
                if (this.entregarSelect) {
                    this.entregarSelect = false;
                }
            }
        }
        this.validarBtn();
    };
    GestionProductoReclamoComponent.prototype.recibirInstruccion = function (valor) {
        this.instruccion = valor;
        this.validarBtn();
    };
    GestionProductoReclamoComponent.prototype.validarBtn = function () {
        if (this.instruccion !== undefined && this.instruccion !== null && this.instruccion !== ''
            && ((this.entregarSelect !== false) || (this.reclamarSelect !== false)) && this.contacto !== null &&
            this.contacto !== null && this.contacto !== 'Seleccionar') {
            this.activarBtn = true;
        }
        else {
            this.activarBtn = false;
        }
    };
    GestionProductoReclamoComponent.prototype.finalizar = function () {
        if (this.accion === 'Mail/Fax') {
            this.activarPop = true;
        }
        else if (this.accion === 'Telefono') {
            var datosFinalizar = {
                idPieza: this.itemOc.identificador,
                MEnvio: this.accion,
                Notas: this.instruccion,
                Contacto: this.contacto,
                idPCompra: this.itemOc.idPCompra,
                idProveedor: this.datosProveedor.idProveedor
            };
            this.cerrarFinalizar(datosFinalizar);
        }
    };
    GestionProductoReclamoComponent.prototype.cerrarFinalizar = function (datosFinalizar) {
        var _this = this;
        this.coreContainer.openModal(0);
        this._serviveReclamo.finalizarCuarentena(datosFinalizar).subscribe(function (data) {
            console.log(data);
            if (data.current === true) {
                _this.obtenerLista();
            }
            _this.coreContainer.closeModal(0);
        }, function (error) {
            console.log('Error =>', error);
            _this.coreContainer.closeModal(0);
        });
    };
    GestionProductoReclamoComponent.prototype.finalizarEnvio = function (datosCorreo) {
        this.activarPop = false;
        var datosFinalizar = {
            idPieza: this.itemOc.identificador,
            MEnvio: this.accion,
            Notas: this.instruccion,
            Contacto: this.contacto,
            idPCompra: this.itemOc.idPCompra,
            idProveedor: this.datosProveedor.idProveedor,
            datosCorreo: datosCorreo
        };
        this.cerrarFinalizar(datosFinalizar);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GestionProductoReclamoComponent.prototype, "datosProveedor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], GestionProductoReclamoComponent.prototype, "regreVista", void 0);
    GestionProductoReclamoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-gestion-producto-reclamo',
            template: __webpack_require__("./src/app/components/producto-reclamo/gestion-producto-reclamo/gestion-producto-reclamo.component.html"),
            styles: [__webpack_require__("./src/app/components/producto-reclamo/gestion-producto-reclamo/gestion-producto-reclamo.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_arribo_documento_arribo_documento_service__["a" /* ArriboDocumentoService */], __WEBPACK_IMPORTED_MODULE_2__services_gestor_producto_reclamo_producto_reclamo_service__["a" /* ProductoReclamoService */], __WEBPACK_IMPORTED_MODULE_3__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_4__services_comun_comun_service__["a" /* ComunService */]])
    ], GestionProductoReclamoComponent);
    return GestionProductoReclamoComponent;
}());



/***/ }),

/***/ "./src/app/components/producto-reclamo/producto-reclamo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoReclamoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__producto_reclamo_component__ = __webpack_require__("./src/app/components/producto-reclamo/producto-reclamo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductoReclamoRoutingModule = /** @class */ (function () {
    function ProductoReclamoRoutingModule() {
    }
    ProductoReclamoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__producto_reclamo_component__["a" /* ProductoReclamoComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ProductoReclamoRoutingModule);
    return ProductoReclamoRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/producto-reclamo/producto-reclamo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\n  <!--Seccion de menu-->\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\n    <aside [ngClass]=\"classAsideMenu\">\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\n        <pn-menu-seccion-roles [items]=\"itemsMenu\"  style=\"width: 100%;\" *ngIf=\"activeMenuReclamo\"></pn-menu-seccion-roles>\n      </div>\n    </aside>\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n    </div>\n  </div>\n  <div class=\"area\">\n    <!--Empieza la cabezera-->\n    <div class=\"cabezera\">\n      <div>\n        <div style=\"cursor: pointer;\" *ngIf=\"!vistaP\" (click)=\"regresarVistaP()\">\n          <img class=\"img\" src='./assets/Images/regresar.svg'/>\n        </div>\n        <label class=\"etiqueta\">PRODUCTO A RECLAMO</label>\n      </div>\n      <div *ngIf=\"!vistaP\">\n        <label class=\"title\">{{cliente}}</label>\n      </div>\n    </div>\n    <!--Termina la cabezera-->\n    <!--Empiezan los componentes-->\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 122px)'}\">\n      <div class=\"content\" *ngIf=\"vistaP\">\n        <div class=\"primeraSec\">\n          <div class=\"titulosLista\">\n            <div  class=\"tituloCliente\">\n              <label class=\"tituloLista\">PROVEEDORES</label>\n            </div>\n            <div class=\"organizarLista\">\n              <div style=\"height: 100%;    display: flex;align-items: center;\">\n                <div class=\"menu\" (click)=\"abreCombo()\">\n                  <div>\n                  </div>\n                  <div>\n                  </div>\n                  <div>\n                  </div>\n                  <section id=\"section\">\n                    <ul class=\"listaHamburguesa\">\n                      <li (click)=\"ordenamientoFechaTramNue()\">Más Recientes</li>\n                      <li (click)=\"ordenamientoFechaTramAnt()\">Más Antiguos</li>\n                    </ul>\n                  </section>\n                </div>\n              </div>\n              <div style=\"height: 100%; display: flex;align-items: center;\">\n                <h3 class=\"subtitulo\">{{tipoOrden}}</h3>\n              </div>\n              <div class=\"barraBusqueda\" style=\"height: 100%\">\n                <div class=\"buscar\">\n                  <div>\n                    <div class=\"lupa\">\n                      <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\n                    </div>\n                    <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Proveedor\" />\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!--Lista total-->\n          <div class=\"listaSeccionUno\">\n            <div>\n              <div class= \"lista\" style=\"display: unset;flex-direction: column\" >\n                <div  *ngFor=\"let item of lista; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\n                  <div class=\"imagenFlecha\">\n                    <img src=\"./assets/Images/regresarAzul.svg\" class=\"flechaInicio\" (click)=\"seleccionarItem(i, item)\">\n                  </div>\n                  <div class=\"dfSelect\"></div>\n                  <div class=\"datosLst\">\n                    <div class=\"numeroIndex\">\n                      <label class=\"index\" style=\"font-family: Roboto-Regular\">#{{i +1}}</label>\n                    </div>\n                    <div class=\"informacionList\">\n                      <label style=\"color: #008894\">{{item.proveedor}} </label>\n                      <p>{{item.totalOC}} OC · {{item.totalProducto}} Productos</p>\n                      <h3 class=\"textoPiezas\">Fecha de Inspección: {{item.fechaFormato}} </h3>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"totales\">\n              <label>#{{lista.length}}</label>\n              <label>{{lista.length}} Proveedores</label>\n              <label>{{totalOc}} OC</label>\n              <label>{{totalProductos}} Productos</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"contenidoGrafica\">\n          <div class=\"grafica\">\n            <label style=\"padding-bottom: 10px\">PROVEEDORES</label>\n            <pn-donut-chart  [idGrafica]=\"'proveedores'\" [data]=\"dataProveedores\" [tipoGrafica]=\"tipoGraficaProveedores\" [height]=\"'auto'\" style=\"height: 90%;\" *ngIf=\"activarProveedores\"></pn-donut-chart>\n          </div>\n          <div class=\"grafica\">\n            <label>TIPOS DE PRODUCTOS</label>\n            <pn-grafica-barras  [data]=\"dataBarra\" [idGrafica]=\"'barra'\" style=\"width:50%;height: 90%;\" *ngIf=\"activarBarra\"></pn-grafica-barras>\n          </div>\n        </div>\n      </div>\n      <pn-gestion-producto-reclamo  *ngIf=\"!vistaP\" [datosProveedor]=\"datosProveedor\" (regreVista)=\"vistaInicial()\"></pn-gestion-producto-reclamo>\n    </div>\n    <div class=\"foo\">\n      <footer>\n        <div>\n          <div class=\"Prioridad1\">\n            <label class=\"p1\">OC: </label> Orden de Compra\n          </div>\n          <div class=\"Prioridad1\" *ngIf=\"!vistaP\">\n            <label class=\"p1\">FEE: </label> Fecha Estimada de Entrega\n          </div>\n          <div class=\"Prioridad1\" *ngIf=\"!vistaP\">\n            <label class=\"p1\">DRE: </label> Días Restantes de Entrega\n          </div>\n        </div>\n      </footer>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/producto-reclamo/producto-reclamo.component.scss":
/***/ (function(module, exports) {

module.exports = ".padre {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.aux .asideNormalMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  min-width: 181px;\n  width: 321px;\n  height: 100%;\n  overflow-y: scroll; }\n\n.aux .asideNormalMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%; }\n\n.aux > .asideOcultarMenu {\n  -webkit-animation-name: ocultarMenu;\n          animation-name: ocultarMenu;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-transition: 1s ease-in-out;\n  transition: 1s ease-in-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 0px;\n  width: 0px; }\n\n.aux > .asideOcultarMenu > .articulo {\n    width: 0px; }\n\n.aux > .asideMostrarMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  -webkit-animation-name: mostrarMenu;\n          animation-name: mostrarMenu;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-y: scroll; }\n\n.aux > .asideMostrarMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%; }\n\n@-webkit-keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n\n@keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n\n@-webkit-keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n\n@keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n\n.area {\n  width: 100%;\n  height: 100%;\n  overflow: auto; }\n\n.cabezera {\n  width: 100%;\n  height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 13px;\n  padding-right: 13px;\n  border-bottom: 2px solid black;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.cabezera > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\n.cabezera > div > .title {\n      font-family: Novecento;\n      font-weight: bold;\n      font-size: 24px;\n      color: #008894;\n      text-align: right; }\n\n.etiqueta {\n  color: #5B5B5B;\n  font-size: 25px;\n  font-family: Novecento;\n  margin-bottom: 5px; }\n\n.foo {\n  width: 100%;\n  height: 55px; }\n\n.foo > footer {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    -ms-flex-item-align: auto;\n    align-self: auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 57px;\n    max-height: 57px;\n    width: 100%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: row;\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n    -ms-flex-pack: start;\n    -webkit-box-pack: start;\n            justify-content: flex-start;\n    -ms-flex-line-pack: stretch;\n        align-content: stretch;\n    -ms-flex-align: stretch;\n    -webkit-box-align: inherit;\n            align-items: inherit;\n    border-top: 2px solid black;\n    -ms-flex-preferred-size: 100%;\n        flex-basis: 100%;\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    font-size: 14px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n\n.foo > footer > div {\n      -webkit-box-ordinal-group: 1;\n          -ms-flex-order: 0;\n              order: 0;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n      -ms-flex-item-align: auto;\n          align-self: auto;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -ms-flex-line-pack: distribute;\n          align-content: space-around;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      font-size: 14px; }\n\n.content {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.primeraSec {\n  width: 30%;\n  background: #FFFFFF;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-left: 20px;\n  margin-right: 20px;\n  min-width: 350px; }\n\n.primeraSec > .listaSeccionUno {\n    height: 90%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n\n.primeraSec > .listaSeccionUno > div {\n      height: calc(100% - 30px);\n      border-bottom: 1px solid;\n      width: 100%;\n      border-top: 1px solid;\n      overflow: scroll; }\n\n.primeraSec > .listaSeccionUno > .totales {\n      height: 30px;\n      width: 100%;\n      border-bottom: 0;\n      border-top: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n\n.contenidoGrafica {\n  width: 70%;\n  background: #ECEEF0;\n  height: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.grafica {\n  height: 50%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 20px 20px 20px 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.grafica > label {\n    height: 10%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    text-align: center;\n    font-size: calc((1vh + 1vw) / 2);\n    font-weight: bold;\n    font-family: Novecento; }\n\n.tituloCliente {\n  width: 50%;\n  height: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.titulosLista {\n  height: 10%;\n  padding-top: 15px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-bottom: 15px;\n  min-height: 90px; }\n\n.tituloLista {\n  font-size: 24px;\n  font-family: Novecento;\n  font-weight: bold; }\n\n.organizarLista {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 10px;\n  position: relative;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 50%; }\n\n/******/\n\n.menu {\n  position: relative; }\n\n.menu:HOVER {\n  cursor: pointer; }\n\n.menu > div {\n  width: 20px;\n  height: 2px;\n  background: #000000;\n  margin: 5px; }\n\nsection {\n  position: absolute;\n  visibility: hidden;\n  height: 0; }\n\nsection.visible {\n  visibility: visible;\n  height: 74px;\n  overflow: auto;\n  width: 219px;\n  background: #FFFFFF;\n  z-index: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid #ECEEF0;\n  border-top: 1px solid #ECEEF0;\n  border-left: 1px solid #ECEEF0;\n  border-right: 1px solid #ECEEF0; }\n\n.listaHamburguesa {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.listaHamburguesa > li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border-bottom: 0.5px solid #ECEEF0;\n    padding-bottom: 5px;\n    padding-top: 5px; }\n\n.listaHamburguesa > li:hover {\n    background-color: #ECEEF0; }\n\n.buscar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  height: 50px;\n  width: 100%;\n  border-style: solid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.buscar div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 90%;\n    border-radius: 102px 102px 102px 102px;\n    -moz-border-radius: 102px 102px 102px 102px;\n    -webkit-border-radius: 102px 102px 102px 102px;\n    border: 0.5px solid #BFC0C7;\n    height: 26px; }\n\n.buscar div div {\n      border: none;\n      border-radius: 0px 0px 0px 0px;\n      -moz-border-radius: 0px 0px 0px 0px;\n      -webkit-border-radius: 0px 0px 0px 0px;\n      border: 0px solid #000000;\n      width: 40px;\n      background: transparent;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n\n.buscar div .buscar-input {\n      cursor: pointer;\n      background: transparent;\n      border-radius: 100px;\n      -moz-border-radius: 102px 102px 102px 102px;\n      border: 0px solid #000000;\n      width: 100%;\n      font-family: Helvetica;\n      font-size: 18px;\n      color: #AAA9AF;\n      outline: none;\n      padding-left: 5px; }\n\n.barraBusqueda {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.subtitulo {\n  font-family: Roboto;\n  font-weight: 400;\n  font-size: 18px;\n  color: #424242;\n  text-align: left; }\n\n.imagenFlecha {\n  position: absolute;\n  right: 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  height: 100%;\n  padding-right: 5px; }\n\n.flechaInicio {\n  width: 100%;\n  -webkit-transform: rotate(-180deg);\n  transform: rotate(-180deg); }\n\n.lista {\n  border-bottom: solid 1px #ECEEF0;\n  border-bottom: solid 1px #ECEEF0;\n  width: 100%;\n  min-height: 80px;\n  font-size: 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  line-height: 1.3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto; }\n\n.lista > .index {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    height: 52px; }\n\n.lista > div > .datosLst {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -ms-flex-item-align: auto;\n        align-self: auto;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-left: 15px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n\n.lista div:hover {\n    background-color: #ECEEF0; }\n\n.lista > .divActual {\n    background-color: #ECEEF0;\n    -webkit-box-shadow: 0 2px 4px -3px #008895;\n            box-shadow: 0 2px 4px -3px #008895; }\n\n.lista > .divActive {\n    background-color: #ECEEF0; }\n\n.lista > .divActive .dfSelect {\n      background: #008895 !important;\n      width: 5px !important;\n      color: #008895; }\n\n.lista > .divActive .datosLst label {\n      color: #008895;\n      padding-left: -2px;\n      font-family: \"Roboto-Bold\";\n      font-size: 28px; }\n\n.lista > .divActive .datosLst p {\n      font-family: \"Roboto-Bold\";\n      font-size: 24px;\n      color: #000000;\n      line-height: 26px; }\n\n.lista > .divActive .datosLst h3 {\n      font-family: \"Roboto-regular\";\n      font-size: 21px; }\n\n.textoPiezas {\n  font-family: \"Roboto-regular\";\n  font-size: 21px; }\n\n.informacionList {\n  font-family: Roboto;\n  padding-top: 4px; }\n\n.informacionList label {\n    color: #008894;\n    font-weight: bold;\n    font-size: 24px;\n    font-family: Roboto;\n    line-height: 1; }\n\n.informacionList span {\n    min-height: 23px;\n    max-height: 46px;\n    font-weight: bold;\n    font-size: 20px;\n    color: #424242;\n    font-family: Roboto; }\n\n.informacionList h3 {\n    font-size: 17px;\n    font-family: Roboto;\n    color: #424242;\n    line-height: 1.5;\n    margin-top: 4px;\n    font-weight: 400; }\n\n.numeroIndex {\n  font-size: 26px;\n  font-family: Roboto;\n  font-weight: 400;\n  text-align: left;\n  padding-right: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.Prioridad1, .Prioridad2, .Prioridad3 {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 0.7%;\n  margin-right: 0.7%; }\n\n.Prioridad1 > label, .Prioridad2 > label, .Prioridad3 > label {\n    font-weight: bold;\n    padding: 6px; }\n\n@media all and (min-width: 1300px) and (max-width: 1500px) {\n  .numeroIndex {\n    font-size: 25px; } }\n"

/***/ }),

/***/ "./src/app/components/producto-reclamo/producto-reclamo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoReclamoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_gestor_producto_reclamo_producto_reclamo_service__ = __webpack_require__("./src/app/services/gestor-producto-reclamo/producto-reclamo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductoReclamoComponent = /** @class */ (function () {
    function ProductoReclamoComponent(coreContainer, _serviceReclamo) {
        this.coreContainer = coreContainer;
        this._serviceReclamo = _serviceReclamo;
        this.classAsideMenu = 'asideNormalMenu';
        this.lista = [];
        this.listaUniverso = [];
        this.totalProductos = 0;
        this.totalOc = 0;
        this.listaGrafica = [];
        this.listaUniveso = [];
        this.listaBarra = [];
        this.filtroProveedores = [];
        this.colores = ['#D2B422', '#DE0209', '#F09600', '#4BA92B'];
    }
    ProductoReclamoComponent.prototype.ngOnInit = function () {
        this.vistaP = true;
        this.tipoOrden = 'Todos';
        this.usuario = __WEBPACK_IMPORTED_MODULE_4__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
        this.obtenerDatos();
        this.obtenerValoresMenu(this.usuario);
    };
    ProductoReclamoComponent.prototype.obtenerValoresMenu = function (idUsuario) {
        var _this = this;
        this.activeMenuReclamo = false;
        this.rolMaster = false;
        this.coreContainer.openModal(1);
        var roles = __WEBPACK_IMPORTED_MODULE_4__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getRoles();
        this._serviceReclamo.obtenerTotales(idUsuario).subscribe(function (data) {
            for (var i = 0; i < roles.length; i++) {
                if (roles[i] === 'Comprador_Master') {
                    _this.rolMaster = true;
                }
            }
            console.log(data);
            if (_this.rolMaster) {
                _this.itemsMenu = [{ rol: 'GESTOR DE COMPRAS', active: true, menu: [
                            { nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', select: false, tipo: 'valor', valor: data.current.ArriboDocumentos },
                            { nombre: 'Producto a Reclamo', url: 'productoReclamo', tipo: 'valor', valor: data.current.ProductoReclamo, select: true },
                            {
                                nombre: 'Cargar Saldo a Favor',
                                tipo: '',
                                valor: 0,
                                url: 'poolVisitas',
                                disable: true,
                                subMenu: [
                                    { nombre: 'Nota Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: false },
                                    { nombre: 'Saldo a Favor', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: false }
                                ],
                                select: false
                            }
                        ] },
                    { rol: 'GESTOR DE OPERACIONES', active: false, menu: [
                            { nombre: 'Consola de Prioridades', url: 'consolaPrioridades', tipo: 'flecha' },
                            { nombre: 'Consola de Envíos', url: 'consolaEnvio', select: false },
                            { nombre: 'Material en Stock', url: 'stock', select: false },
                            { nombre: 'Material en Destrucción', url: 'consolaDest', select: false }
                        ] }];
            }
            else {
                _this.itemsMenu = [
                    { rol: 'GESTOR DE COMPRAS', active: true, menu: [
                            { nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', select: false, tipo: 'valor', valor: data.current.ArriboDocumentos },
                            { nombre: 'Producto a Reclamo', url: 'productoReclamo', tipo: 'valor', valor: data.current.ProductoReclamo, select: true },
                            {
                                nombre: 'Cargar Saldo a Favor',
                                tipo: '',
                                valor: 0,
                                url: 'poolVisitas',
                                disable: true,
                                subMenu: [
                                    { nombre: 'Nota Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: false },
                                    { nombre: 'Saldo a Favor', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: false }
                                ],
                                select: false
                            }
                        ] }
                ];
            }
            _this.activeMenuReclamo = true;
            _this.coreContainer.closeModal(1);
        }, function (error) {
            _this.coreContainer.closeModal(1);
        });
    };
    ProductoReclamoComponent.prototype.obtenerDatos = function () {
        var _this = this;
        this.activarProveedores = false;
        this.listaGrafica = [];
        this.activarBarra = false;
        this.totalOc = 0;
        this.totalProductos = 0;
        this.lista = [];
        this.listaUniveso = [];
        this._serviceReclamo.piezasRechazadas().subscribe(function (data) {
            _this.listaBarra = data.current.barra;
            if (data.current.grafica && data.current.grafica !== undefined) {
                _this.listaGrafica = data.current.grafica;
                _this.totalesGrafica = data.current.totales;
            }
            if (data.current.lista && data.current.lista !== undefined) {
                var listaAux = data.current.lista;
                var fechaAux = void 0;
                for (var i = 0; i < listaAux.length; i++) {
                    fechaAux = new __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(listaAux[i].fechaInspeccion);
                    _this.listaUniveso.push({ idProveedor: listaAux[i].idProveedor, proveedor: listaAux[i].proveedor, totalOC: listaAux[i].totalOC,
                        fecha: listaAux[i].fechaInspeccionFormato, fechaFormato: fechaAux, totalProducto: listaAux[i].totalProducto });
                    _this.lista.push({ idProveedor: listaAux[i].idProveedor, proveedor: listaAux[i].proveedor, totalOC: listaAux[i].totalOC,
                        fecha: listaAux[i].fechaInspeccionFormato, fechaFormato: fechaAux, totalProducto: listaAux[i].totalProducto });
                    _this.totalOc += listaAux[i].totalOC;
                    _this.totalProductos += listaAux[i].totalProducto;
                }
            }
            _this.llenarGraficaBarra();
            _this.limpiarDataG();
        }, function (error) {
            console.log(error);
        });
    };
    ProductoReclamoComponent.prototype.llenarGraficaBarra = function () {
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
    ProductoReclamoComponent.prototype.limpiarDataG = function () {
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
    ProductoReclamoComponent.prototype.calcularDatosParaGraficas = function () {
        if (this.listaGrafica.length > 0) {
            for (var _i = 0, _a = this.listaGrafica; _i < _a.length; _i++) {
                var productos = _a[_i];
                this.llenarTotalesGraficas(this.dataProveedores, productos, 'PROVEEDORES');
            }
        }
    };
    ProductoReclamoComponent.prototype.llenarTotalesGraficas = function (total, elemento, graficaElegida) {
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
    ProductoReclamoComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (this.listaUniverso.length > 0) {
            if (search === '') {
                this.lista = this.listaUniverso.slice();
            }
            else {
                this.listaUniverso.forEach(function (folio) {
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
        }
    };
    /*****/
    ProductoReclamoComponent.prototype.abreCombo = function () {
        if (document.getElementById('section').className === 'visible') {
            document.getElementById('section').className = '';
        }
        else {
            document.getElementById('section').className = 'visible';
        }
    };
    ProductoReclamoComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = 'asideOcultarMenu';
        }
        else {
            this.classAsideMenu = 'asideMostrarMenu';
        }
    };
    ProductoReclamoComponent.prototype.ordenamientoFechaTramNue = function () {
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
    ProductoReclamoComponent.prototype.ordenamientoFechaTramAnt = function () {
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
    ProductoReclamoComponent.prototype.regresarVistaP = function () {
        this.vistaP = true;
    };
    ProductoReclamoComponent.prototype.seleccionarItem = function (i, item) {
        this.datosProveedor = item;
        this.vistaP = false;
    };
    ProductoReclamoComponent.prototype.vistaInicial = function () {
        this.vistaP = true;
        this.tipoOrden = 'Todos';
        this.obtenerValoresMenu(this.usuario);
        this.obtenerDatos();
    };
    ProductoReclamoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-producto-reclamo',
            template: __webpack_require__("./src/app/components/producto-reclamo/producto-reclamo.component.html"),
            styles: [__webpack_require__("./src/app/components/producto-reclamo/producto-reclamo.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_2__services_gestor_producto_reclamo_producto_reclamo_service__["a" /* ProductoReclamoService */]])
    ], ProductoReclamoComponent);
    return ProductoReclamoComponent;
}());



/***/ }),

/***/ "./src/app/components/producto-reclamo/producto-reclamo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoReclamoModule", function() { return ProductoReclamoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__producto_reclamo_routing_module__ = __webpack_require__("./src/app/components/producto-reclamo/producto-reclamo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__producto_reclamo_component__ = __webpack_require__("./src/app/components/producto-reclamo/producto-reclamo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_grafica_barras_grafica_barras_module__ = __webpack_require__("./src/app/components/shared/grafica-barras/grafica-barras.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__gestion_producto_reclamo_gestion_producto_reclamo_component__ = __webpack_require__("./src/app/components/producto-reclamo/gestion-producto-reclamo/gestion-producto-reclamo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_combo_flecha_verde_combo_flecha_verde_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-verde/combo-flecha-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__envio_correo_envio_correo_component__ = __webpack_require__("./src/app/components/producto-reclamo/envio-correo/envio-correo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ProductoReclamoModule = /** @class */ (function () {
    function ProductoReclamoModule() {
    }
    ProductoReclamoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__producto_reclamo_routing_module__["a" /* ProductoReclamoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_grafica_barras_grafica_barras_module__["a" /* GraficaBarrasModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_combo_flecha_verde_combo_flecha_verde_module__["a" /* ComboFlechaVerdeModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__producto_reclamo_component__["a" /* ProductoReclamoComponent */],
                __WEBPACK_IMPORTED_MODULE_8__gestion_producto_reclamo_gestion_producto_reclamo_component__["a" /* GestionProductoReclamoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__envio_correo_envio_correo_component__["a" /* EnvioCorreoComponent */]
            ]
        })
    ], ProductoReclamoModule);
    return ProductoReclamoModule;
}());



/***/ })

});
//# sourceMappingURL=producto-reclamo.module.chunk.js.map