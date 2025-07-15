webpackJsonp(["trabajar-rutas.module"],{

/***/ "./src/app/components/shared/buscador-ovalado/buscador-ovalado.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"buscar\">\n    <div>\n        <div class=\"lupa\">\n            <img src=\"assets/Images/catalogo/lupa.png\" width=\"22px\" height=\"22px\" alt=\"buscar\">\n        </div>\n        <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Cliente\" required ng-pattern-restrict=\"^[A-Za-z0-9]*$\">\n\n        <!-- <input ng-model=\"search\" class=\"buscar-input\" placeholder=\"{{placeholder}}\" /> -->\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/shared/buscador-ovalado/buscador-ovalado.component.scss":
/***/ (function(module, exports) {

module.exports = ".input-cont {\n  padding-top: 20px;\n  width: 100%;\n  position: relative; }\n  .input-cont .lupa {\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    top: 5px;\n    left: 5px;\n    padding-top: 20px; }\n  .buscar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  height: 50px;\n  margin-top: 10px;\n  width: 100%;\n  border-style: solid; }\n  .buscar div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 403.1px;\n    border-radius: 102px 102px 102px 102px;\n    -moz-border-radius: 102px 102px 102px 102px;\n    -webkit-border-radius: 102px 102px 102px 102px;\n    border: 0.5px solid #BFC0C7;\n    height: 30px; }\n  .buscar div div {\n      border: none;\n      border-radius: 0px 0px 0px 0px;\n      -moz-border-radius: 0px 0px 0px 0px;\n      -webkit-border-radius: 0px 0px 0px 0px;\n      border: 0px solid #000000;\n      width: 40px;\n      background: transparent;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n  .buscar div .buscar-input {\n      cursor: pointer;\n      background: transparent;\n      border-radius: 102px 102px 102px 102px;\n      -moz-border-radius: 102px 102px 102px 102px;\n      -webkit-border-radius: 102px 102px 102px 102px;\n      border: 0px solid #000000;\n      width: 380px;\n      padding-left: 5px; }\n"

/***/ }),

/***/ "./src/app/components/shared/buscador-ovalado/buscador-ovalado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscadorOvaladoComponent; });
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

var BuscadorOvaladoComponent = /** @class */ (function () {
    function BuscadorOvaladoComponent() {
        this.clientesConsulta = [];
        this.regresaConsulta = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        ///variable para termino
        this.searchTerm = "";
        this.ClientesSearched = [];
        //Metodo para buscar termino
        //  this.ClientesSearched= [...this.clientesConsulta];
    }
    BuscadorOvaladoComponent.prototype.ngOnInit = function () {
        console.log(this.clientesConsulta);
    };
    BuscadorOvaladoComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search == "") {
            // this.ClientesSearched= this.clientesConsulta;
            this.ClientesSearched = this.clientesConsulta.slice();
        }
        else {
            this.clientesConsulta.forEach(function (cliente) {
                if (cliente.nombreCliente
                    .toLowerCase()
                    .indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(cliente);
                }
            });
            this.ClientesSearched = searchArrayAux;
            this.regresaConsulta.emit(searchArrayAux);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BuscadorOvaladoComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], BuscadorOvaladoComponent.prototype, "clientesConsulta", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], BuscadorOvaladoComponent.prototype, "regresaConsulta", void 0);
    BuscadorOvaladoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "pn-buscador-ovalado",
            template: __webpack_require__("./src/app/components/shared/buscador-ovalado/buscador-ovalado.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/buscador-ovalado/buscador-ovalado.component.scss")]
        })
    ], BuscadorOvaladoComponent);
    return BuscadorOvaladoComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-area\">\n  <div class=\"area\" style=\"height: 100%\">\n    <div id=\"bordeDatosC\" class=\"datosC\">\n      <div style=\"display: flex\">\n        <div style=\"cursor: pointer; height: 35px; width: 20px;display: flex\">\n          <img class=\"img\" src='./assets/Images/regresar.svg' style=\"width: 100%; height: 100%;padding-right: 10px\"\n               (click)=\"regresarVistaCli()\"/> <!--Feccha para regresar a los clientes-->\n        </div>\n        <label style=\"  display: flex;\" class=\"encabezadoCliente\">{{Cliente}}</label>\n      </div>\n      <div class=\"contenedorFormulario\">\n        <div class=\"tabla-clientes\" style=\"width: 15%\">\n          <label class=\"encabezadoLista\">PACKING LIST</label>\n          <div id=\"estilo_borde_verde_lista\" class=\"lista\">\n            <div [ngClass]=\"lstResultadoCotizaciones[i]\"\n                 *ngFor=\"let packing_list of encabezadosPasckinList; let i = index \"\n                 class=\"listaItem\" (click)=\"itemSelect(i)\">\n              <div class=\"ltSelect\"></div>\n              <div id=\"listaContent\" style=\"display: flex; flex-direction: column; justify-content: space-between; \">\n                <label style=\" padding-bottom: 12px;\" class=\"numPacking_list \"> #{{i+1}}· <span\n                  style=\" padding-bottom: 15px;\"\n                  class=\"nombrePacking_list \"> {{packing_list.folio}} </span></label>\n                <label style=\" padding-bottom: 12px;\" class=\"piezasPacking_llist \">{{packing_list.piezas}}&nbsp;{{'Piezas'}}</label>\n                <div style=\"display: flex; flex-direction: row \">\n                  <label class=\"p1\"> P1 · {{packing_list.p1}} </label>\n                  <label class=\"p2\"> P2 · {{packing_list.p2}} </label>\n                  <label class=\"p3\"> P3 · {{packing_list.p3}} </label>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- total -->\n        </div>\n        <div class=\"segundaSeccion\">\n          <div class=\"escanearCodigos\" style=\"width: 15%\">\n            <div class=\"tituloColectar\">\n            <span class=\"tituloColectarElementos\"\n                  style=\"padding-bottom: 10px; align-content: center;font-family: Helvetica-Bold; font-weight: bold; color: #008895; width: 100%;\">\n              COLECTAR ELEMENTO\n            </span>\n              <span class=\"estiloNombreSeleccioncliente\"> {{datoPL}}</span>\n            </div>\n            <div class=\"elementosItems\">\n            <textarea type=\"text \" name=\"firstname \" autofocus=\"focus \" (keydown.enter)=\"enterAux()\"\n                      #textarea class=\"textArea\" [(ngModel)]=\"codigosBarraElemento\"\n                      style=\"width: 95%; position: absolute\"></textarea>\n              <div class=\"seccionUno\" [attr.id]=\"'div0'\" *ngIf=\"colectarElemtosAux.length>0\">\n                <div class=\"contenedorTarjeta\">\n                  <div class=\"imagenTarjeta\">\n                    <label class=\"estiloTipoElemento\">DOCUMENTACIÓN</label>\n                    <img class=\"img\" src=\"./assets/Images/bolsa_doc.svg\" style=\" width: 68px; height: 74px;\"/>\n                    <div class=\"divColectarElementos\"\n                         style=\"border:1px solid #D8D8D8; display: flex; flex-direction: column; \">\n                      <label class=\"labelcolectarElementos\">{{datoPL}}</label>\n                      <label class=\"labelcolectarElementos\">Sobre</label>\n                      <label class=\"labelcolectarElementos\"></label>\n                    </div>\n                  </div>\n                  <div class=\"escanear\" style=\"flex-direction: row; display: flex; position: relative; \">\n                    <div class=\"imgEscanear\">\n                      <img src='./assets/Images/Images/codigo_gris.svg' *ngIf=\"!codigosValidos[indexPacking][0]\"/>\n                      <img src='./assets/Images/Images/codigobarras_verde.svg' *ngIf=\"codigosValidos[indexPacking][0]\"/>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div id=\"seccionUno\" class=\"seccionUno\" *ngFor=\"let elemento of colectarElemtosAux; let i = index \"\n                   [attr.id]=\"'div'+i\">\n                <!-- div  -->\n                <div class=\"contenedorTarjeta\">\n                  <div class=\"imagenTarjeta\">\n                    <label class=\"estiloTipoElemento \"> {{elemento.tipo}} </label>\n                    <img class=\"img\" [src]=\"imgTipoValidacionArr[i]\" style=\" width: 68px; height: 74px; \"/>\n                    <div class=\"divColectarElementos\">\n                      <label class=\"labelcolectarElementos \">{{elemento.folio}}</label>\n                      <label class=\"labelcolectarElementos \">{{tipoDeProducto[i]}}</label>\n                      <label class=\"labelcolectarElementos \"> {{elemento.cant}}&nbsp;{{'Piezas'}}</label>\n                    </div>\n                  </div>\n                  <div class=\"escanear \" style=\"flex-direction: row; display:flex; position: relative; \">\n                    <!--<textarea [attr.id]=\"'textId'+i\" type=\"text \" name=\"firstname \" autofocus=\"focus \"\n                              (keydown.enter)=\"enter(i) \"\n                              #textarea [(ngModel)]=\"codigosBarra[indexPacking][i]\" class=\"textArea\"></textarea>-->\n                    <div class=\"imgEscanear\">\n                      <img src='./assets/Images/Images/codigo_gris.svg' *ngIf=\"!codigosValidos[indexPacking][i + 1]\"/>\n                      <img src='./assets/Images/Images/codigobarras_verde.svg'\n                           *ngIf=\"codigosValidos[indexPacking][i + 1]\"/>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- div  -->\n          <div class=\"formularioRutas\" style=\"width: 85%\">\n            <div class=\"\">\n              <label class=\"seleccionLista \"> EJECUTAR RUTA </label>\n              <div class=\"infoFormulario\">\n                <label class=\" subtitulos \"\n                       style=\" border-bottom: 1px solid #008895;padding-bottom: 20px; display: flex; \">\n                  Informacion de la persona que recoge</label>\n                <div *ngIf=\"datosFormulario.length > 0\">\n                  <div>\n                    <label class=\"estiloLabel \">Contacto:</label>\n                    <input class=\"estiloInput \" name=\"contacto \" value=\" \" type=\"text \" required\n                           #contacto (input)=\"validarFormulario() \" id=\"contacto \"\n                           [(ngModel)]=\"datosFormulario[indexPacking].contacto\" autofocus/>\n                  </div>\n                  <div>\n                    <label class=\"estiloLabel \">Tel:</label>\n                    <input class=\"estiloInput \" name=\"telefono \" type=\"number \" required\n                           #telefono (input)=\"validarFormulario() \"\n                           id=\"telefono \" [(ngModel)]=\"datosFormulario[indexPacking].telefono\" autofocus/>\n                  </div>\n                  <div>\n                    <label class=\"estiloLabel \">Puesto:</label>\n                    <input class=\"estiloInput \" name=\"puesto \" type=\"text \" required #puesto\n                           (input)=\"validarFormulario() \"\n                           id=\"puesto \" [(ngModel)]=\"datosFormulario[indexPacking].puesto\" autofocus/>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"estiloLabel\">Email</label>\n                    <input type=\"email \" class=\"estiloInput\"\n                           id=\"email\" [(ngModel)]=\"datosFormulario[indexPacking].email\" name=\"email \"\n                           (input)=\"validarFormulario() \">\n                  </div>\n                  <label class=\"estiloLabel \" class=\"subtitulos\">Comentarios de entrega</label>\n                  <div class=\"comentarios\">\n                <textarea class=\"estiloComentario \" name=\"comentarios \"\n                          pattern=\".{0,200} \" type=\"text \" value=\"notas_comentarios \" *ngIf=\"!labelComentarios\"\n                          readonly> {{colectarElemtosAux[0].comentario}} </textarea>\n                    <div class=\"contenedorComentario \" *ngIf=\"labelComentarios\">\n                      <label>SIN COMENTARIOS</label>\n                    </div>\n                  </div>\n                  <label class=\"estiloLabel \" class=\"subtitulos\">Documento que ampara:</label>\n                  <div class=\"acuseRecibo\" *ngIf=\"refrescar\">\n                    <label>Acuse de Recibo:</label>\n                    <pq-file-upload [disabled]=\"true\" [docR]=\"cargarDocumento\" style=\"min-width: 260px;max-width: 260px;\"\n                                    (enviarDocumento)=\"recibeDocumentacion($event)\"\n                                    [activarOjito]=\"true\"></pq-file-upload>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"totalFinalizar\">\n        <label class=\"totalPacking_llist\">{{'Total :'}}\n          {{encabezadosPasckinList.length}} {{'Packing list'}}</label>\n        <div class=\"botonFinalizar\" (click)=\"onSubmitFinalizar()\"\n             [style.pointerEvents]=\"btnsFinalizar[indexPacking]? 'auto': 'none' \"\n             [style.background]=\"btnsFinalizar[indexPacking]? '#008895': '#C2C3C9' \">\n          FINALIZAR\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"popError\">\n  <pq-alerta [alertaTxt]=\"mensaje\" (confirmacion)=\"cerrarAlert($event)\"></pq-alerta>\n</div>\n<div *ngIf=\"activarAlertExit\">\n  <pn-operacion-exitosa (desactivarPop)=\"cerrarPopExit($event)\" [imagen]=\"true\"\n                        [label]=\"'Operación Exitosa'\"></pn-operacion-exitosa>\n</div>\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.component.scss":
/***/ (function(module, exports) {

module.exports = ".content-area {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 20px;\n  padding-right: 20px;\n  height: 100%;\n  width: 100%; }\n\n.datosC {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  padding-top: 20px;\n  height: calc(100vh - 337px); }\n\n.encabezadoCliente {\n  font-family: 'Novecento';\n  font-weight: bold;\n  font-size: 28px;\n  color: #424242;\n  text-align: left;\n  size: 150px;\n  height: 50px; }\n\n.encabezadoLista {\n  font-family: Helvetica;\n  font-size: 25px;\n  color: #008895;\n  line-height: 22px;\n  font-weight: bold;\n  padding-bottom: 20px;\n  height: 42px; }\n\n.piezasPacking_llist {\n  font-family: Helvetica;\n  font-size: 14px;\n  color: #666666;\n  width: 193px;\n  height: 19px; }\n\n.numPacking_list {\n  font-family: Helvetica;\n  font-size: 20px;\n  color: black;\n  line-height: 22px;\n  font-weight: bold; }\n\n.totalPacking_llist {\n  font-size: 12px;\n  color: #404040;\n  text-align: center;\n  font-family: 'Roboto';\n  width: 167px;\n  height: 16px; }\n\n.p1,\n.p2,\n.p3 {\n  margin-right: 10px; }\n\n.p1 {\n  color: #AF3634;\n  font-weight: bold; }\n\n.p2 {\n  color: #EEB253;\n  font-weight: bold; }\n\n.p3 {\n  color: #63B236;\n  font-weight: bold; }\n\n.img {\n  cursor: pointer; }\n\n.nombrePacking_list {\n  font-family: Helvetica-Bold;\n  font-size: 20px;\n  color: #008895;\n  line-height: 22px; }\n\n.seleccionLista {\n  font-family: Helvetica;\n  font-weight: bold;\n  font-size: 25px;\n  color: #008895;\n  width: 100%; }\n\n.estiloNombreSeleccioncliente {\n  font-family: Novecento;\n  font-size: 25px;\n  color: #008895;\n  text-align: left;\n  line-height: 30px; }\n\n.estiloInput {\n  width: 1055px;\n  height: 30px;\n  float: right;\n  font-family: Roboto;\n  font-size: 15px;\n  color: #4A4A4A;\n  border: 1px solid #D8D8D8;\n  z-index: 3;\n  position: relative; }\n\n.subtitulos {\n  font-family: Roboto;\n  font-size: 18px;\n  color: #4A4A4A;\n  font-weight: bold;\n  padding-top: 20px; }\n\n.divColectarElemntos {\n  font-family: Roboto-Medium;\n  font-size: 14px;\n  color: #008895;\n  text-align: center;\n  padding-bottom: 20px;\n  padding-top: 20px;\n  margin-top: 20px; }\n\n#error {\n  margin-top: 20%; }\n\n#error > ul > li {\n    background: grey;\n    padding: .5rem;\n    color: white;\n    font-weight: 0;\n    font-size: .8em;\n    text-align: center;\n    -webkit-animation: up 1s ease-in-out 1 backwards;\n            animation: up 1s ease-in-out 1 backwards; }\n\n.listaItem {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 249px;\n  border-bottom: solid 1px #ECEEF0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.lista {\n  overflow: scroll;\n  border-bottom: solid 1px #ECEEF0; }\n\n.lista div:hover {\n    background-color: #ECEEF0; }\n\n.lista > .divActual {\n    background-color: #ECEEF0;\n    -webkit-box-shadow: 0 2px 4px -3px #008895;\n            box-shadow: 0 2px 4px -3px #008895; }\n\n.lista > .divActive {\n    height: 101px;\n    background-color: #ECEEF0; }\n\n.lista > .divActive .ltSelect {\n      background: #008895 !important;\n      width: 10px !important; }\n\n#listaContent {\n  padding-top: 15px;\n  padding-bottom: 15.8px;\n  padding-left: 10px; }\n\n.listaSeleccionada {\n  border-bottom: solid 1px #ECEEF0;\n  height: 100%;\n  width: 100%;\n  min-height: 80px;\n  font-size: 20px;\n  padding: 19px 23px 18px 17px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  line-height: 1.3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-left: 6px solid #008895;\n  background-color: #ECEEF0; }\n\n.listaSeleccionada > .index {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    height: 52px;\n    color: #008895; }\n\n.listaSeleccionada > .datosLst {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    color: #008895; }\n\n.listaSeleccionada > .datosLst > p {\n      font-weight: normal;\n      color: #424242; }\n\n.escanearCodigos {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px 20px;\n  min-width: 472px;\n  max-width: 472px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.elementosItems {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: calc(100vh - 581px); }\n\n.formularioRutas {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 10px 0px;\n  min-width: 450px;\n  width: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.formularioRutas > div {\n    padding: 0px 20px;\n    border-left: 1px solid #D8D8D8; }\n\n.infoFormulario {\n  padding-top: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.infoFormulario > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n\n.infoFormulario > div > div {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      margin-top: 28px;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      min-height: 34px; }\n\n.infoFormulario > div > div > label {\n        min-width: 75px; }\n\n.infoFormulario > div > label {\n      margin-top: 80px;\n      padding-bottom: 20px;\n      margin-bottom: 20px;\n      border-bottom: 1px solid #008895; }\n\n.comentarios {\n  margin: 0px !important;\n  min-height: 120px !important; }\n\n#divBoton {\n  width: 100%;\n  height: 60px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding-right: 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.botonFinalizar {\n  width: 170px;\n  height: 30px;\n  background: #C2C3C9;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 21px;\n  cursor: pointer;\n  border: none;\n  color: #FFFFFF;\n  font-weight: bold;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto; }\n\n.area {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 1px solid #D8D8D8;\n  width: 100%;\n  min-width: 220px;\n  border-top: 1px solid #D8D8D8;\n  display: flex;\n  border-bottom: none; }\n\n.vistaColectarElementos {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  height: 100%;\n  width: 100%;\n  font-family: 'Roboto', sans-serif; }\n\n.vistaColectar {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.pAmbiente {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  height: 100%;\n  width: 14%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.flecha1 {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  height: 100%;\n  width: 12%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.pRefrigeracion {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  height: 100%;\n  width: 14%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.flecha2 {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  height: 100%;\n  width: 12%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.pCongelacion {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  height: 100%;\n  width: 14%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.dato {\n  font-size: 40px;\n  color: #404040;\n  text-align: center;\n  margin-top: 10%; }\n\n.tipo {\n  font-size: 35px;\n  color: #338A9C;\n  text-align: center;\n  margin-top: 10%;\n  font-weight: bold; }\n\n.botonIngresar {\n  width: 190px;\n  height: 30px;\n  background: #008894;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 21px;\n  cursor: pointer;\n  border: none;\n  color: #FFFFFF;\n  font-weight: bold;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto; }\n\n.estiloTipoElemento {\n  font-family: Novecento;\n  font-size: 16px;\n  color: #008895;\n  text-align: center;\n  font-weight: bold;\n  padding-top: 10px;\n  padding-bottom: 15px; }\n\n.divColectarElementos {\n  opacity: 0.94;\n  background: #008895;\n  width: 181px;\n  height: 63px;\n  padding: 5px 0px;\n  border: 1px solid #D8D8D8;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n\n.divColectarElementos .labelcolectarElementos {\n    font-family: Roboto;\n    font-size: 14px;\n    color: #FFFFFF;\n    text-align: center;\n    font-weight: medium; }\n\n.footer {\n  height: 150%; }\n\n.escanear {\n  font-family: 'Roboto';\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  height: 30px;\n  width: 100%;\n  margin-top: 22px; }\n\n.textArea {\n  width: 100%;\n  z-index: 1;\n  opacity: 0;\n  /****/\n  bottom: 0px;\n  top: 0px; }\n\n.imgEscanear {\n  position: absolute; }\n\n.etiquetaSinComentarios {\n  opacity: 0.18;\n  font-family: Novecento;\n  font-weight: Bold;\n  font-size: 36px;\n  color: #4A4A4A;\n  text-align: center; }\n\n.contenedorFormulario {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 86.5%;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-top: 20px;\n  border-top: 1px solid #D8D8D8;\n  height: calc(100vh - 480px); }\n\n.tabla-clientes {\n  overflow-y: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 267px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  height: calc(100vh - 480px);\n  overflow-y: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 12px;\n  border-bottom: 1px solid #D8D8D8; }\n\n.tituloColectar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-height: 80px; }\n\n.contenedorComentario {\n  opacity: 0.18;\n  font-family: Novecento;\n  font-size: 36px;\n  color: #4A4A4A;\n  text-align: center;\n  font-weight: bold; }\n\n.estiloComentario {\n  font-family: Roboto;\n  color: #4A4A4A;\n  font-size: 15px;\n  border: none;\n  width: 100%;\n  resize: none;\n  height: 120px; }\n\ntextarea:focus {\n  outline: none !important;\n  border: none;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.totalFinalizar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  margin-top: 15px; }\n\n.seccionUno {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding-bottom: 30px;\n  padding-top: 30px;\n  height: 260px; }\n\n.contenedorTarjeta {\n  height: 100%; }\n\n.imagenTarjeta {\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border: 1px solid #D8D8D8;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  max-width: 181px;\n  max-height: 208px;\n  min-height: 208px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.tituloColectarElementos {\n  font-size: 25px; }\n\n.segundaSeccion {\n  overflow-y: scroll;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid #D8D8D8;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 85%;\n  position: relative;\n  box-sizing: border-box;\n  border-left: 1px solid #D8D8D8; }\n\n.acuseRecibo {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin-top: 0px !important;\n  margin-bottom: 40px !important;\n  -webkit-box-pack: start !important;\n      -ms-flex-pack: start !important;\n          justify-content: flex-start !important; }\n\n.acuseRecibo > label {\n    margin-right: 15px !important; }\n\n@media all and (min-height: 750px) and (max-height: 770px) {\n  .area {\n    height: 100%; }\n  .contenedorFormulario {\n    height: calc(100vh - 442px); }\n  .divColectarElementos {\n    width: 115px;\n    height: 35.5px; }\n  .divColectarElementos > .labelcolectarElementos {\n    font-size: 9px; }\n  .escanearCodigos {\n    height: 100%;\n    min-width: 290px; }\n  .estiloNombreSeleccioncliente {\n    font-size: 12px; }\n  .estiloComentario {\n    font-size: 11px; }\n  .encabezadoCliente {\n    font-size: 14px;\n    height: 32px; }\n  .estiloTipoElemento {\n    font-size: 10px;\n    padding-bottom: 0px; }\n  .tabla-clientes {\n    height: 100%; }\n  .estiloInput {\n    height: 25px;\n    width: 251px; }\n  .estiloLabel {\n    font-size: 11px; }\n  .imagenTarjeta {\n    height: 74px;\n    width: 115px;\n    min-height: 169px; }\n  .encabezadoLista {\n    font-size: 13px;\n    padding-bottom: 0px; }\n  .escanear {\n    margin-top: 0px; }\n  .formularioRutas {\n    height: 100%;\n    min-width: 346px; }\n  .infoFormulario > div > label {\n    margin-top: 26px; }\n  .infoFormulario > div > div {\n    margin-top: 7px; }\n  .tituloColectarElementos {\n    font-size: 13px; }\n  .seccionUno {\n    padding-top: 0px;\n    width: 115px;\n    height: 205px; }\n  .listaItem {\n    height: 90px;\n    width: 200px; }\n  #listaContent {\n    padding-left: 2px; }\n  .nombrePacking_list {\n    font-size: 12px; }\n  .numPacking_list {\n    font-size: 12px; }\n  .p1, .p2, .p3 {\n    font-size: 11px; }\n  .seleccionLista {\n    font-size: 13px;\n    font-family: Novecento;\n    font-weight: bold; }\n  .subtitulos {\n    padding-top: 0px;\n    font-size: 12px; }\n  .tabla-clientes {\n    min-width: 210px; } }\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutasClientesDetalleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trabajar_rutas_clientes_detalle_service__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrabajarRutasClientesDetalleComponent = /** @class */ (function () {
    function TrabajarRutasClientesDetalleComponent(_trabajarRutasClienteDetalleService) {
        this._trabajarRutasClienteDetalleService = _trabajarRutasClienteDetalleService;
        this.auxDataClientCurrent = [];
        this.valoresData = [];
        this.encabezadosPasckinList = [];
        this.elementosPackingList = [];
        this.tipoDeProducto = [];
        this.imgTipoValidacionArr = [];
        this.indexPacking = 0;
        this.active = true;
        this.RegresarVistaClie = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.searchClienthanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.lstResultadoCotizaciones = [];
        this.llenarArregloContacto = [];
        this.packing_list = [];
        this.listaAuxiliar = [];
        this.contacto = "";
        this.telefono = "";
        this.puesto = "";
        this.email = "";
        this.labelComentarios = true;
        this.focus = true;
        this.vistaInicialActiva = true;
        this.contador = 0;
        this.cantidadPL = 0;
        this.texto = "";
        this.colectarElemtos = [];
        this.colectarElemtosAux = [];
        this.elementos = [];
        this.codigosBarra = [];
        this.codigosValidos = [];
        this.datosFormulario = [];
        this.btnsFinalizar = [];
        this.listaColectarElementosAuxiliar = [];
        this.refrescar = true;
    }
    TrabajarRutasClientesDetalleComponent.prototype.ngOnInit = function () {
        this.obtenerPackingListClient();
        console.log(this.elementosPackingList);
        console.log("Creo el objeto");
        this.llenarArregloContacto = [
            { idPendiente: "", contacto: "", tel: "", puesto: "", email: "" }
        ];
        this.textArea.nativeElement.focus();
        console.log(this.elementosPackingList);
    };
    TrabajarRutasClientesDetalleComponent.prototype.itemSelect = function (i) {
        this.recibeDocumentacion(null);
        this.colectarElemtosAux = this.colectarElemtos[i];
        this.datoPL = this.colectarElemtosAux[0].packingList;
        this.indexPacking = i;
        this.lstResultadoCotizaciones = [];
        this.listaAuxiliar = [];
        this.lstResultadoCotizaciones = new Array(this.packing_list.length).fill("");
        this.lstResultadoCotizaciones[i] = "divActive";
        console.log("________Valores Data....");
        console.log(this.valoresData[i]);
        console.log("________Valores Data....");
        console.log(this.colectarElemtos);
        console.log("________Valores Data");
        for (var _i = 0, _a = this.valoresData; _i < _a.length; _i++) {
            var iterator = _a[_i];
            this.colectarElemtos.push(iterator);
        }
        this.obtenerImagenes(i);
    };
    TrabajarRutasClientesDetalleComponent.prototype.obtenerImagenes = function (index) {
        var _this = this;
        this.imgTipoValidacionArr = [];
        this.colectarElemtos[index].forEach(function (element) {
            if (element.tipo === "Hielera Congelacion" || element.tipo === "CONGELACIÓN") {
                element.tipo = "CONGELACIÓN";
                console.log("tipo hielera congelacion");
                _this.tipoDeProducto.push("Hielera");
                _this.contador = element.cant;
                _this.cantidadPL += _this.contador;
                _this.imgTipoValidacionArr.push("./assets/Images/hielera_refri.svg");
            }
            else if (element.tipo === "Bolsa de transito" || element.tipo === "TRANSITO") {
                element.tipo = "TRANSITO";
                console.log("Bolsa de transito");
                _this.tipoDeProducto.push("Bolsa");
                _this.contador = element.cant;
                _this.cantidadPL += _this.contador;
                _this.imgTipoValidacionArr.push("./assets/Images/bolsa_ambiente.svg");
            }
            if (element.tipo === "Hielera Refrigeracion" || element.tipo === "REFRIGERACIÓN") {
                element.tipo = "REFRIGERACIÓN";
                _this.tipoDeProducto.push("Hielera");
                _this.contador = element.cant;
                _this.cantidadPL += _this.contador;
                _this.imgTipoValidacionArr.push("./assets/Images/hielera_refri.svg");
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
    TrabajarRutasClientesDetalleComponent.prototype.onSubmitFinalizar = function () {
        console.log("cod barra");
        console.log(this.codigosBarra.length);
        console.log(this.contacto);
        if (this.btnsFinalizar[this.indexPacking] == true) {
            console.log("llamada al servicio");
            this.finalizarEjecutarRutaAlmacen();
            // this.onRemove();
            console.log(this.llenarArregloContacto);
        }
        else {
            console.log("No se eliminara");
        }
    };
    TrabajarRutasClientesDetalleComponent.prototype.functionDelete = function () {
        var index = this.colectarElemtos.indexOf(this.indexPacking);
        console.log("index" + index);
        console.log("Se eliminara posicion " + this.indexPacking);
        var txt;
        if (confirm("Se eliminara posicion " + this.indexPacking)) {
            txt = "FINALIZAR";
            this.elementosPackingList.splice(this.indexPacking, 1);
            setTimeout(function () {
            }, 2000);
            this.itemSelect(0);
        }
        else {
            txt = "FINALIZAR";
        }
        document.getElementById("botonF").innerHTML = txt;
    };
    TrabajarRutasClientesDetalleComponent.prototype.onRemove = function () {
        this.encabezadosPasckinList.splice(this.indexPacking, 1);
        this.colectarElemtos.splice(this.indexPacking, 1);
        this.codigosValidos.splice(this.indexPacking, 1);
        this.codigosBarra.splice(this.indexPacking, 1);
        this.datosFormulario.splice(this.indexPacking, 1);
        this.btnsFinalizar.splice(this.indexPacking, 1);
        this.colectarElemtosAux = this.colectarElemtos[0];
        if (this.encabezadosPasckinList.length == 0) {
            console.log("Entro cambiar vista");
            this.event.emit(false);
        }
        this.event.emit(true);
        this.indexPacking = 0;
    };
    TrabajarRutasClientesDetalleComponent.prototype.validarFormulario = function () {
        var error = 0;
        if (this.datosFormulario[this.indexPacking].contacto == "") {
            error++;
        }
        if (this.datosFormulario[this.indexPacking].telefono == "") {
            error++;
        }
        if (this.datosFormulario[this.indexPacking].puesto == "") {
            error++;
        }
        if (this.datosFormulario[this.indexPacking].email == "") {
            error++;
        }
        if (this.archivo == undefined || this.archivo == null) {
            error++;
        }
        for (var _i = 0, _a = this.codigosValidos[this.indexPacking]; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!item) {
                error++;
            }
        }
        if (error == 0) {
            this.btnsFinalizar[this.indexPacking] = true;
        }
        else {
            this.btnsFinalizar[this.indexPacking] = false;
        }
    };
    TrabajarRutasClientesDetalleComponent.prototype.ngAfterViewInit = function () {
        //this.elementRef.nativeElement.focus();
    };
    /***************************************************************/
    TrabajarRutasClientesDetalleComponent.prototype.enterAux = function () {
        var contador = 0;
        var aux = this.codigosBarraElemento.trim();
        this.codigosBarraElemento = aux;
        console.log(this.codigosBarraElemento);
        var validarDup = this.validarCodigoDuplicado(this.codigosBarraElemento);
        if (validarDup) {
            if (this.datoPL == this.codigosBarraElemento) {
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
                this.popError = true;
            }
        }
        else {
            // alert('Elemento duplicado');
            this.mensaje = 'Folio duplicado';
            this.popError = true;
        }
        this.codigosBarraElemento = '';
        this.validarFormulario();
    };
    TrabajarRutasClientesDetalleComponent.prototype.validarCodigoDuplicado = function (elemento) {
        var i;
        if (this.listaColectarElementosAuxiliar.length === 0) {
            return true;
        }
        else {
            for (i = 0; i < this.listaColectarElementosAuxiliar.length; i++) {
                if (this.listaColectarElementosAuxiliar[i] === elemento) {
                    return false;
                }
            }
            return true;
        }
    };
    /***************************************************************/
    TrabajarRutasClientesDetalleComponent.prototype.enter = function (i) {
        if (this.colectarElemtosAux[i].folio == this.codigosBarra[this.indexPacking][i].split("\n").join("").trim()) {
            this.codigosValidos[this.indexPacking][i] = true;
        }
        else {
            this.codigosValidos[this.indexPacking][i] = false;
            this.codigosBarra[this.indexPacking][i] = "";
        }
        this.validarFormulario();
    };
    TrabajarRutasClientesDetalleComponent.prototype.obtenerPackingListClient = function () {
        var _this = this;
        this._trabajarRutasClienteDetalleService
            .obtenerPackingListClient(this.idCliente)
            .subscribe(function (data) {
            _this.auxDataClientCurrent = data.current;
            var array = Object.getOwnPropertyNames(_this.auxDataClientCurrent);
            _this.sumaDePackingList = array.length;
            for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                var datos = array_1[_i];
                var objetoAux = {};
                objetoAux["folio"] = datos;
                objetoAux["piezas"] = 0;
                objetoAux["p1"] = 0;
                objetoAux["p2"] = 0;
                objetoAux["p3"] = 0;
                _this.colectarElemtos.push(_this.auxDataClientCurrent[datos]);
                _this.codigosValidos.push(new Array(_this.auxDataClientCurrent[datos].length).fill(false));
                _this.codigosValidos[_this.codigosValidos.length - 1].splice(0, 0, false);
                _this.codigosBarra.push(new Array(_this.auxDataClientCurrent[datos].length).fill(""));
                _this.datosFormulario.push({ contacto: "", telefono: "", puesto: "", email: "" });
                _this.btnsFinalizar.push(false);
                for (var _a = 0, _b = _this.auxDataClientCurrent[datos]; _a < _b.length; _a++) {
                    var datos2 = _b[_a];
                    objetoAux["piezas"] += datos2.cant;
                    objetoAux["p1"] += datos2.p1;
                    objetoAux["p2"] += datos2.p2;
                    objetoAux["p3"] += datos2.p3;
                }
                _this.encabezadosPasckinList.push(objetoAux);
            }
            _this.colectarElemtos[0].forEach(function (element) {
                var elemento = element.tipo.ignoreCase;
                if (element.tipo === "Hielera Congelacion") {
                    element.tipo = "CONGELACIÓN";
                    console.log("tipo hielera congelacion");
                    _this.tipoDeProducto.push("Hielera");
                    _this.contador = element.cant;
                    _this.cantidadPL += _this.contador;
                    _this.imgTipoValidacionArr.push("./assets/Images/hielera_refri.svg");
                }
                else if (element.tipo === "Bolsa de transito") {
                    element.tipo = "TRANSITO";
                    console.log("Bolsa de transito");
                    _this.tipoDeProducto.push("Bolsa");
                    _this.contador = element.cant;
                    _this.cantidadPL += _this.contador;
                    _this.imgTipoValidacionArr.push("./assets/Images/bolsa_ambiente.svg");
                }
                if (element.tipo === "Hielera Refrigeracion" || elemento === 'Refrigeración' || elemento === 'refrigeracion') {
                    element.tipo = "REFRIGERACIÓN";
                    _this.tipoDeProducto.push("Hielera");
                    _this.contador = element.cant;
                    _this.cantidadPL += _this.contador;
                    _this.imgTipoValidacionArr.push("./assets/Images/hielera_refri.svg");
                }
                var comentario = element.comentario;
                if (comentario.length > 0) {
                    _this.labelComentarios = false;
                }
                else {
                    _this.labelComentarios = true;
                }
            });
            _this.itemSelect(0);
            _this.valoresData.forEach(function (element) {
                _this.listaAuxiliar.push(element.folio);
            });
            console.log(_this.listaAuxiliar);
        }, function (error) {
            console.log(error);
        });
    };
    TrabajarRutasClientesDetalleComponent.prototype.finalizarEjecutarRutaAlmacen = function () {
        var _this = this;
        this.idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        var id = parseInt(this.idUsuario);
        var info = {
            idUsuario: id,
            idPendiente: this.colectarElemtosAux[0].idPendiente,
            contacto: this.datosFormulario[this.indexPacking].contacto,
            tel: this.datosFormulario[this.indexPacking].telefono,
            puesto: this.datosFormulario[this.indexPacking].puesto,
            email: this.datosFormulario[this.indexPacking].email,
            packingList: this.colectarElemtosAux[0].packingList
        };
        this._trabajarRutasClienteDetalleService.finalizarEjecutarRutaAlmacen(info).subscribe(function (data) {
            console.log("REspuesta del seervicio");
            _this._trabajarRutasClienteDetalleService.uploadFile(_this.colectarElemtosAux[0].packingList, _this.archivo).subscribe(function (data) {
                _this.recibeDocumentacion(null);
            });
            console.log(data);
            if (data.current === true) {
                _this.activarAlertExit = true;
            }
        }, function (error) {
            console.log(error);
        });
    };
    TrabajarRutasClientesDetalleComponent.prototype.cerrarAlert = function (datos) {
        this.popError = false;
        this.textArea.nativeElement.focus();
    };
    TrabajarRutasClientesDetalleComponent.prototype.cerrarPopExit = function () {
        this.activarAlertExit = false;
        this.onRemove();
    };
    TrabajarRutasClientesDetalleComponent.prototype.regresarVistaCli = function () {
        console.log('Entro al clic');
        this.RegresarVistaClie.emit(true);
    };
    TrabajarRutasClientesDetalleComponent.prototype.recibeDocumentacion = function (archivo) {
        var _this = this;
        console.log(archivo);
        if (archivo != undefined && archivo != null) {
            this.archivo = archivo;
            this.validarFormulario();
        }
        else {
            this.refrescar = false;
            setTimeout(function () {
                _this.refrescar = true;
            }, 50);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("text"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TrabajarRutasClientesDetalleComponent.prototype, "elementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TrabajarRutasClientesDetalleComponent.prototype, "RegresarVistaClie", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TrabajarRutasClientesDetalleComponent.prototype, "event", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TrabajarRutasClientesDetalleComponent.prototype, "searchClienthanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TrabajarRutasClientesDetalleComponent.prototype, "Cliente", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TrabajarRutasClientesDetalleComponent.prototype, "idCliente", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("textarea"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TrabajarRutasClientesDetalleComponent.prototype, "textArea", void 0);
    TrabajarRutasClientesDetalleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "pn-trabajar-rutas-clientes-detalle",
            template: __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__trabajar_rutas_clientes_detalle_service__["a" /* TrabajarRutasClienteDetalleService */]])
    ], TrabajarRutasClientesDetalleComponent);
    return TrabajarRutasClientesDetalleComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutasClientesDetalleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trabajar_rutas_clientes_detalle_component__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_alerta_alerta_module__ = __webpack_require__("./src/app/components/shared/alerta/alerta.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_pop_ups_operacion_exitosa_operacion_exitosa_module__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/componentes/pop-ups/operacion-exitosa/operacion-exitosa.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_file_upload_file_upload_module__ = __webpack_require__("./src/app/components/shared/file-upload/file-upload.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var TrabajarRutasClientesDetalleModule = /** @class */ (function () {
    function TrabajarRutasClientesDetalleModule() {
    }
    TrabajarRutasClientesDetalleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_file_upload_file_upload_module__["a" /* FileUploadModule */],
                __WEBPACK_IMPORTED_MODULE_5__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_alerta_alerta_module__["a" /* AlertaModule */],
                __WEBPACK_IMPORTED_MODULE_7__componentes_pop_ups_operacion_exitosa_operacion_exitosa_module__["a" /* OperacionExitosaModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__trabajar_rutas_clientes_detalle_component__["a" /* TrabajarRutasClientesDetalleComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__trabajar_rutas_clientes_detalle_component__["a" /* TrabajarRutasClientesDetalleComponent */],
            ]
        })
    ], TrabajarRutasClientesDetalleModule);
    return TrabajarRutasClientesDetalleModule;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"cambiaCliente\">\n    <div class=\"content-area\">\n        <div class=\"area\" style=\" display: flex; border-bottom: 1px solid #D8D8D8;  min-width: 800px; border-top: 1px solid #D8D8D8;display: flex;position: relative\">\n            <!--Inicio Div Daos C-->\n            <div id=\"bordeDatosC\" class=\"datosC\" style=\"display: flex; flex-direction:row; height: 80%; justify-content: space-between; width: 100%; \">\n                <label class=\"encabezadoCliente\">CLIENTES</label>\n                <div style=\"padding-right: 10px; \" ng-model=\"searchText\" class=\"form-control\">\n                    <div class=\"buscar\">\n                        <div>\n                            <div class=\"lupa\">\n                                <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\n                            </div>\n                            <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"clientes\" />\n                        </div>\n                    </div>\n                </div>\n                <!--Fin datos C-->\n            </div>\n        </div>\n    </div>\n    <div class=\"catalogoClientes\">\n        <div class=\"container\">\n            <div id=\"datosArreglo\" class=\"tabla-clientes\" *ngIf=\"muestraArregloClientes\">\n                <div class=\"item\" *ngFor=\"let datos of auxDataCurrent let i= index\">\n                    <div style=\"display: flex;\">\n                        <img style=\"height:106px; width: 106px; \" src=\"./assets/Images/clientes/{{datos.idCliente}}.png\" onerror=\"this.src='./assets/Images/clientes/default.png';\">\n                    </div>\n                    <div id=\"datosCliente\">\n                        <label class=\"numCliente \">{{'#'}}{{i+1}} <span class= \"nombreClienteEstilo \" > {{datos.nombreCliente}} </span></label>\n                        <label class=\"datosCllienteEstilo \"> {{datos.cant}} {{'Piezas '}} · {{datos.numPL}}{{' Packing List'}}</label>\n                        <div style=\"display: flex; flex-direction: row;\">\n                            <label class=\"p1 \"> P1. {{datos.p1}} </label>\n                            <label class=\"p2 \"> P2  {{datos.p2}} </label>\n                            <label class=\"p3 \"> P3  {{datos.p3}} </label>\n                        </div>\n                    </div>\n                    <div class=\"imagenMas\" (click)=\"cambiarVistaPorCliente(datos.nombreCliente,datos.idCliente)\">\n                        <img type=image src=\"./assets/Images/Images/entrar.svg\" />\n                    </div>\n                </div>\n            </div>\n            <div id=\"datosArreglo2\" class=\"tabla-clientes\" style=\" padding-left: 55px; min-width: 900px; \" *ngIf=\"!muestraArregloClientes\">\n\n                <div class=\"item\" *ngFor=\"let datos of ClientesSearched; let i = index\" style=\" padding-top: 25px;\">\n                    <div style=\" display: flex; \">\n                        <img style=\"height:106px; width: 106px; \" src=\"./assets/Images/clientes/{{datos.idCliente}}.png\">\n                    </div>\n                    <div id=\"datosClienteSearch\" style=\" width: 64%; display: flex; flex-direction: column; padding-left: 20px; justify-content: space-between; \">\n                        <label class=\"numCliente \">{{'#'}}{{i+1}} <span class= \"nombreClienteEstilo \" > {{datos.nombreCliente}} </span></label>\n                        <label class=\"datosCllienteEstilo \"> {{datos.cant}} {{'Piezas '}} · {{datos.numPL}}{{' Packing List'}}</label>\n                        <div style=\"display: flex; flex-direction: row ;     padding-left: 10px;\">\n                            <label class=\"p1 \"> P1. {{datos.p1}} </label>\n                            <label class=\"p2 \"> P2  {{datos.p2}} </label>\n                            <label class=\"p3 \"> P3  {{datos.p3}} </label>\n                        </div>\n                    </div>\n                    <div style=\"width: 9%; display: flex; padding-bottom: 0px; \">\n                        <img style=\"padding-top: 70px; \" type=image src=\"./assets/Images/Images/entrar.svg \" (click)=\"cambiarVistaPorCliente(datos.nombreCliente,datos.idCliente)\" />\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"detalle-rutas\" *ngIf=\"!cambiaCliente\">\n    <pn-trabajar-rutas-clientes-detalle style=\"width: 100%; height: 100%;  min-width: 2030px;\" [Cliente]=\"enviaNombreCliente\" [idCliente]=\"enviarIdCliente\" (event)=\"cerrarDetalle($event)\" (RegresarVistaClie)=\"regresarVistaClientes($event)\"></pn-trabajar-rutas-clientes-detalle>\n</div>\n\n<footer class=\"footer \" style=\"  border: none; border-top: solid;\">\n    <div class=\"datosFooter \" style=\"width: 100%;height: 100%; \">\n        <div class=\"Prioridad1 \">\n            <label class=\"p1 \">P1</label> Prioridad 1\n        </div>\n        <div class=\"Prioridad2 \">\n            <label class=\"p2 \">P2</label> Prioridad 2\n        </div>\n        <div class=\"Prioridad3 \">\n            <label class=\"p3 \">P3</label> Prioridad 3\n        </div>\n        <div class=\"Ambiente \">\n            <img class=\"img \" src='./assets/Images/ambiente.svg' /> Ambiente\n        </div>\n        <div class=\"Congelación \">\n            <img class=\"img \" src='./assets/Images/congelacion.svg' /> Congelación\n        </div>\n        <div class=\"Refrigeración \">\n            <img class=\"img \" src='./assets/Images/refrigeracion.svg' /> Refrigeración\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.subPadre {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 20px; }\n#divBoton {\n  width: 100%;\n  height: 60px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding-right: 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.botonIngresar {\n  width: 190px;\n  height: 50px;\n  background: #008894;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 21px;\n  cursor: pointer;\n  border: none;\n  color: #FFFFFF;\n  font-weight: bold;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto; }\n.tooltip .tooltiptext::after {\n  content: \" \";\n  position: absolute;\n  bottom: 100%;\n  /* At the top of the tooltip */\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent #4C4C4C transparent; }\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 0%; }\n.tooltip {\n  position: relative;\n  display: inline-block;\n  cursor: pointer; }\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 148px;\n  height: 42px;\n  background-color: #4C4C4C;\n  text-align: left;\n  padding: 5px 10px 0px 0px;\n  padding: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  left: 2%;\n  margin-left: -60px;\n  font-size: 10px;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  /* Position the tooltip */\n  position: absolute;\n  z-index: 1;\n  font-family: ArialMT;\n  font-size: 9px;\n  color: #FFFFFF;\n  text-align: center; }\n.datosFooter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 14px;\n  min-width: 759px;\n  min-height: 56px;\n  max-height: 56px; }\n.Ambiente,\n.Congelación,\n.Prioridad1,\n.Prioridad2,\n.Prioridad3,\n.Refrigeración {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 0.7%;\n  margin-right: 0.7%; }\n.img,\n.p1,\n.p2,\n.p3 {\n  margin-right: 10px; }\n.p1 {\n  color: #AF3634;\n  font-weight: bold; }\n.p2 {\n  color: #EEB253;\n  font-weight: bold; }\n.p3 {\n  color: #63B236;\n  font-weight: bold; }\n.img {\n  cursor: pointer; }\n.placeholder {\n  font-family: 'Helvetica';\n  font-size: 30px;\n  color: #AAA9AF; }\n.nombreClienteEstilo {\n  font-family: Helvetica-Bold;\n  font-size: 18px;\n  color: #008895;\n  line-height: 22px; }\n.datosCllienteEstilo {\n  font-family: Helvetica;\n  font-size: 16px;\n  color: #666666;\n  width: 193px;\n  height: 19px; }\n.numCliente {\n  font-family: Helvetica;\n  font-size: 18px;\n  color: black;\n  line-height: 22px;\n  font-weight: bold; }\n.container {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  height: 100%;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  position: relative; }\n.catalogoClientes {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  width: 100%;\n  height: calc(100vh - 395px);\n  min-width: 800px; }\n.item {\n  width: 420px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 140px;\n  padding: 10px 20px; }\n.imagenMas {\n  width: 9%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  cursor: pointer; }\n.tabla-clientes {\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: calc(100vh - 395px);\n  padding: 20px 10px;\n  min-width: 900px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.encabezadoCliente {\n  font-family: 'Novecento';\n  font-weight: bold;\n  font-size: 28px;\n  color: #424242;\n  text-align: left;\n  padding-left: 30px;\n  width: 187px;\n  size: 150px;\n  height: 50px;\n  padding-top: 20px; }\n.buscar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  height: 50px;\n  margin-top: 10px;\n  width: 100%;\n  border-style: solid; }\n.buscar div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 403.1px;\n    border-radius: 102px 102px 102px 102px;\n    -moz-border-radius: 102px 102px 102px 102px;\n    -webkit-border-radius: 102px 102px 102px 102px;\n    border: 0.5px solid #BFC0C7;\n    height: 30px; }\n.buscar div div {\n      border: none;\n      border-radius: 0px 0px 0px 0px;\n      -moz-border-radius: 0px 0px 0px 0px;\n      -webkit-border-radius: 0px 0px 0px 0px;\n      border: 0px solid #000000;\n      width: 40px;\n      background: transparent;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n.buscar div .buscar-input {\n      cursor: pointer;\n      background: transparent;\n      border-radius: 102px 102px 102px 102px;\n      -moz-border-radius: 102px 102px 102px 102px;\n      -webkit-border-radius: 102px 102px 102px 102px;\n      border: 0px solid #000000;\n      width: 380px;\n      font-family: Helvetica;\n      font-size: 18px;\n      color: #AAA9AF;\n      padding-left: 5px; }\n.content-area {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 20px;\n  padding-right: 20px; }\n#datosCliente {\n  width: 64%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 110px; }\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutasClientesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trabajar_rutas_cliente_services__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-cliente.services.ts");
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



var TrabajarRutasClientesComponent = /** @class */ (function () {
    function TrabajarRutasClientesComponent(_trabajarRutasClienteService, coreComponent) {
        this._trabajarRutasClienteService = _trabajarRutasClienteService;
        this.coreComponent = coreComponent;
        ///Cambiar la pantallla
        this.vistaInicialActiva = true;
        ///Variables para el buscador
        this.arregloClientes = [];
        ///buscador
        this.ClientesSearched = [];
        this.searchTermChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.actualizarV = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitVistaPrincipal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.clientesConsulta = [];
        ///
        this.auxDataCurrent = [];
        this.muestraArregloClientes = true;
        /////variables  para el html
        this.cambiaCliente = true;
        /////////Declaracion de vriables para el footer
        this.vistaInicialI = true; //=false;
        this.cliente = "Cliente";
    }
    TrabajarRutasClientesComponent.prototype.ngOnInit = function () {
        this.infoClientes();
        this.ocultaScroll = false;
    };
    /////Metodo para volve a la vista anterior
    TrabajarRutasClientesComponent.prototype.regresarVista = function () {
        this.vistaInicialActiva = true;
    };
    TrabajarRutasClientesComponent.prototype.recibeBusqueda = function (valor) {
        this.arregloClientes = valor;
        console.log("Valor de valor" + valor.length);
        if (valor.length == 0) {
            this.arregloClientes = valor;
            this.muestraArregloClientes;
        }
        else
            this.arregloClientes = valor;
        this.muestraArregloClientes = false;
    };
    TrabajarRutasClientesComponent.prototype.cambiarPantalla = function () {
        this.vistaInicialActiva = false;
    };
    TrabajarRutasClientesComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search == "") {
            this.ClientesSearched = this.auxDataCurrent.slice();
        }
        else {
            this.auxDataCurrent.forEach(function (cliente) {
                if (cliente.nombreCliente
                    .toLowerCase()
                    .indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(cliente);
                    _this.enviarIdCliente = cliente.idCliente;
                }
            });
            this.ClientesSearched = searchArrayAux;
            this.muestraArregloClientes = false;
        }
    };
    TrabajarRutasClientesComponent.prototype.cambiarVistaPorCliente = function (nombre, idCliente) {
        this.enviaNombreCliente = nombre;
        this.enviarIdCliente = idCliente;
        console.log(nombre);
        this.cambiaCliente = false;
        console.log("llego id" + this.enviarIdCliente);
    };
    TrabajarRutasClientesComponent.prototype.infoClientes = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        this._trabajarRutasClienteService.infoClientes().subscribe(function (data) {
            if (data.current != '') {
                _this.auxDataCurrent = data.current;
                console.log("/**** infoClientes ****/");
                console.log(_this.auxDataCurrent);
                _this.auxDataCurrent.forEach(function (element) {
                    console.log("data");
                    console.log(element);
                });
            }
            else {
                _this.cambiaCliente = false;
                _this.emitVistaPrincipal.emit(true);
            }
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
    };
    TrabajarRutasClientesComponent.prototype.cerrarDetalle = function ($event) {
        console.log("Evento cerrar");
        this.infoClientes();
        this.actualizarV.emit(true);
        if ($event === false) {
            this.cambiaCliente = true;
        }
    };
    TrabajarRutasClientesComponent.prototype.regresarVistaClientes = function ($result) {
        this.cambiaCliente = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TrabajarRutasClientesComponent.prototype, "searchValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TrabajarRutasClientesComponent.prototype, "searchTermChanged", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TrabajarRutasClientesComponent.prototype, "actualizarV", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], TrabajarRutasClientesComponent.prototype, "emitVistaPrincipal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], TrabajarRutasClientesComponent.prototype, "clientesConsulta", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TrabajarRutasClientesComponent.prototype, "placeholder", void 0);
    TrabajarRutasClientesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "pn-trabajar-rutas-clientes",
            template: __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__trabajar_rutas_cliente_services__["a" /* TrabajarRutasClienteService */], __WEBPACK_IMPORTED_MODULE_2__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], TrabajarRutasClientesComponent);
    return TrabajarRutasClientesComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutasClientesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trabajar_rutas_clientes_routing__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trabajar_rutas_clientes_component__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trabajar_rutas_clientes_detalle_trabajar_rutas_clientes_detalle_module__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TrabajarRutasClientesModule = /** @class */ (function () {
    function TrabajarRutasClientesModule() {
    }
    TrabajarRutasClientesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__trabajar_rutas_clientes_routing__["a" /* TrabajarRutasClientesRouting */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__trabajar_rutas_clientes_detalle_trabajar_rutas_clientes_detalle_module__["a" /* TrabajarRutasClientesDetalleModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__trabajar_rutas_clientes_component__["a" /* TrabajarRutasClientesComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__trabajar_rutas_clientes_component__["a" /* TrabajarRutasClientesComponent */],
            ]
        })
    ], TrabajarRutasClientesModule);
    return TrabajarRutasClientesModule;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutasClientesRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trabajar_rutas_clientes_component__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrabajarRutasClientesRouting = /** @class */ (function () {
    function TrabajarRutasClientesRouting() {
    }
    TrabajarRutasClientesRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__trabajar_rutas_clientes_component__["a" /* TrabajarRutasClientesComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], TrabajarRutasClientesRouting);
    return TrabajarRutasClientesRouting;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutasRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trabajar_rutas_component__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TrabajarRutasRouting = /** @class */ (function () {
    function TrabajarRutasRouting() {
    }
    TrabajarRutasRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__trabajar_rutas_component__["a" /* TrabajarRutasComponent */]
                    },
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], TrabajarRutasRouting);
    return TrabajarRutasRouting;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"animationZoom\" style=\"width: 100%; height: 100%; flex-direction: row; display: flex; min-width: 800px; \"> <!--overflow: scroll;-->\n<!--  <div class=\"menuSeccion\">\n    <pn-menu-seccion [pendiente]=\"totalPendientes\" [items]=\"itemsMenu\" [titulo]=\"'GESTOR ENVÍO'\" [vistaInicialActiva]=\"vistaInicialActiva\" style=\"width: 100%\"></pn-menu-seccion>\n  </div>-->\n  <div style=\"position:relative; display: flex; background: #E6E6E6;\" class=\"aux\">\n    <aside [ngClass]=\"classAsideMenu\">\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\n        <pn-menu-seccion-roles [pendiente]=\"totalPendientes\" [items]=\"itemsMenu\" [vistaInicialActiva]=\"vistaInicialActiva\" style=\"width: 100%\"  *ngIf=\"activeMenu\"></pn-menu-seccion-roles>\n      </div>\n    </aside>\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n    </div>\n\n  </div>\n  <div id=\"divPrincipal\" style=\"width: 100%; height: 100%; flex-direction: row ; overflow-x: scroll; min-width: 500px;\">\n    <div class=\"bordeUno\" style=\" min-width: 900px; height: 48px; box-sizing: border-box; display: flex; padding-left: 18px; align-items: center; border-bottom: 2px solid black;\">\n      <div style=\"cursor: pointer; height: 35px; width: 20px; \" *ngIf=\"!vistaInicialActiva\" (click)=\"regresarVista()\">\n        <img class=\"img\" src='./assets/Images/regresar.svg' style=\"width: 100%; height: 100%;\" />\n      </div>\n      <label class=\"encabezadoCliente\" style=\"font-family: 'Novecento'; font-weight: 300; font-size: 25px; color: #5B5B5B; text-align: left; min-width: 800px;\"\n        class=\"etiqueta\">TRABAJAR RUTA. ALMACÉN</label>\n    </div>\n    <div class=\"datosC\" style=\"display: flex ; flex-direction:column; height: 75px; box-sizing: border-box; min-width: 800px; \">\n      <div class=\"subPadre min-width: 900px;\">\n        <div style=\" flex-direction: row; display: flex; box-sizing: border-box; padding-top: 15px; padding-bottom: 15px; width: 100%\">\n          <div style=\"width:165px; height:40px; display: flex; flex-direction: column; font-family: Roboto-Bold; font-size: 16px; color: #9B9B9B; position: 564px; \">\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatosObjetivo\"> TU OBJETIVO </label>\n            <label style=\"height: 50%; width: 100% \" class=\" estiloDatosObjetivo \"> DE PACKING LIST HOY </label>\n          </div>\n          <div style=\"max-width: 85px; min-width: 30px; height:75px; font-family: Roboto; font-size: 46px; font-weight:bold; color: #39B54A; text-align: center;\">\n            <label class=\"estiloNumero\"> {{objetivoDePackingList}}</label>\n          </div>\n          <img class=\"img\" src='./assets/Images/objetivo.svg' style=\"height: 65%;width:22px; padding-bottom: 3px; padding-left: 10px;\" />\n          <div style=\"padding-left: 19px\">\n            <hr style=\" width:2px; height:38px; margin:0px; border-width:0\" color='#979797' />\n          </div>\n          <div style=\"width:145px; height:40px; display: flex; flex-direction:column; font-family: Roboto-Bold; font-size: 16px; color: #9B9B9B; padding-left: 17px; \">\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatosTrabajado \"> PACKING LIST </label>\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatosTrabajado \"> TRABAJADAS HOY </label>\n          </div>\n\n          <div class=\"tooltip\" style=\"max-width:85px; height:50px; font-family: Roboto; font-size: 46px; font-weight:bold; color: #008895; text-align: center;\">\n            <label class=\"estiloNumero\"> {{packing_trabajadas_hoy}}</label>\n          </div>\n          <div style=\"padding-left: 19px\">\n            <hr style=\" width:2px; height:38px; margin:0px; border-width:0\" color='#979797' />\n          </div>\n          <div style=\"width:120px; height:45px; display: flex; flex-direction: column; font-family: Roboto-Bold; font-size: 16px; color: #9B9B9B; padding-left: 17px;\">\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatos \"> PACKING LIST</label>\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatos \"> DESEADAS </label>\n          </div>\n          <div class=\"tooltip\" style=\"flex-direction: row; min-width: 45px; max-width: 100px; height:50px; position: relative; font-family: Roboto; font-size: 46px; font-weight:bold; color: #008895; text-align: center;\">\n            <label class=\"estiloNumero\"> {{packingListDeceada}}</label>\n            <label [style.color]=\"colorIndiceInspeccionDeceada\" style=\"font-size:16px; color:#D0021B; font-weight: bold; left: 40px; position: absolute; top: -7px\">\n              {{inspeccionDeceadaHastaElMomento}}</label>\n            <span class=\"tooltiptext\">{{mensajePackingDeseadas}}</span>\n          </div>\n          <div style=\"padding-left: 35px\"></div>\n          <hr style=\" width:2px; height:38px; margin:0px; border-width:0\" color='#979797' />\n          <div style=\"width:113px; height:40px; display: flex; flex-direction: column;font-family: Roboto-Bold; font-size: 16px; color: #9B9B9B; padding-left: 17px; \">\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatosMinimo\"> MÍNIMO DE</label>\n            <label style=\"height: 50%; width: 100%\" class=\"estiloDatosMinimo\"> PACKING LIST </label>\n          </div>\n          <div class=\"tooltip\" style=\"flex-direction: row; min-width: 45px; max-width: 100px; height:50px; position: relative; font-family: Roboto; font-size: 46px; font-weight:bold; color: #008895; text-align: center;\">\n            <label class=\"estiloNumero\"> {{minimoPackingDeInspeccion}}</label>\n            <label [style.color]=\"colorMinimoInspeccion\" style=\"font-size:16px; color:#D0021B; font-weight: bold; left: 40px; position: absolute; top: -7px\">\n              {{valorSigno}}{{minimaInspeccionHastaElMomento}}</label>\n            <span class=\"tooltiptext\">{{mensajeEmbDeseado}}</span>\n          </div>\n          <div [ngStyle]=\"{'flex-direction':'column', 'display':'flex','padding-left': '2%'}\">\n           <!-- <pq-pop-up-estadisticas></pq-pop-up-estadisticas>-->\n            <pq-pop-up-estadisticas *ngIf=\"activarGraficasPrioEsta\" [tipo]=\"'Paking list'\" [muestraHallazgos]=\"false\" [tipoTotales]=\"'Paking list'\" [totalesPorInspector]= \"totales_estadisticas\" [donaChart] = \"dataPrioridadEstadisticas\" [tipoGrafica]=\"graficasEstadisticas\" [activarGraficas]=\"false\"></pq-pop-up-estadisticas>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- FIN DATOSC -->\n    <div style=\"height: 90%; width: 100%; flex-direction: column; display: flex; min-width: 900px\" class=\"VistaInicial\" *ngIf=\"vistaInicialActiva\">\n      <div id=\"botonera\" style=\"height:50px; width:100%\" class=\"botoneraL\">\n        <pn-botonera-dias style=\"font-size: 21px; color: #4A4A4A; text-align: center; font-family: Roboto-Regular;\"\n          [iniciarBotonera]=\"iniciarBotonera\" [tHoy]=\"valoresTabs[0]\" [tManana]=\"valoresTabs[1]\" [tPasadoM]=\"valoresTabs[2]\" [tTodo]=\"valoresTabs[4]\" [tFuturo]=\"valoresTabs[3]\" (event)=\"cambiarTab($event)\"></pn-botonera-dias>\n      </div>\n      <div  class=\"graficas\">\n        <div class=\"padreCliente_Prioridades\">\n          <div>\n            <div class=\"tituloGrafica\">\n              CLIENTES\n            </div>\n            <div id=\"donaCliente\" style=\"width: 100%; height: 100%; display: flex;\">\n              <pn-donut-chart *ngIf=\"dataCLienteReload\" [idGrafica]=\"'cliente'\" [data]=\"dataCLiente\" [tipoGrafica]=\"tiposGraficas[0]\" [height]=\"'auto'\">\n              </pn-donut-chart>\n            </div>\n          </div>\n          <!--<div>\n            <div class=\"tituloGrafica\">\n              PRIORIDADES\n            </div>\n            <div id=\"donaPrioridades\" style=\"width: 100%; height: 100%; display: flex;\">\n              <pn-donut-chart *ngIf=\"dataPrioridadesReload\" [idGrafica]=\"'prioridades'\" [data]=\"dataPrioridades\" [tipoGrafica]=\"tiposGraficas[1]\" [height]=\"'auto'\">\n              </pn-donut-chart>\n            </div>\n          </div>-->\n        </div>\n        <!-- fin grafica clientes y productos -->\n        <!-- <div [ngStyle]=\"{'width': '8%', 'height':'100%'}\"></div> -->\n      <!--  <div class=\" padrePrioridades\">\n          <div>\n            <div class=\"tituloGPequenio\">\n              PRIORIDAD 1\n            </div>\n            <div id=\"donaPrioridadUno\" style=\"width: 100%; height: 100%; display: flex;\">\n              <pn-donut-chart *ngIf=\"dataPrioridadUnoReload\" [idGrafica]=\"'prioridadUno'\" [data]=\"dataPrioridadUno\" [tipoGrafica]=\"tiposGraficas[2]\"\n                [height]=\"'auto'\"> </pn-donut-chart>\n            </div>\n          </div>\n          <div >\n            <div class=\"tituloGPequenio\">\n              PRIORIDAD 2\n            </div>\n            <div id=\"donaPrioridadDos\" style=\"width: 100%; height: 100%; display: flex;\">\n              <pn-donut-chart *ngIf=\"dataPrioridadDosReload\" [idGrafica]=\"'prioridadDos'\" [data]=\"dataPrioridadDos\" [tipoGrafica]=\"tiposGraficas[3]\"\n                [height]=\"'auto'\"> </pn-donut-chart>\n            </div>\n          </div>\n          <div>\n            <div class=\"tituloGPequenio\">\n              PRIORIDAD 3\n            </div>\n            <div id=\"donaPrioridadTres\" style=\"width: 100%; height: 100%; display: flex;\">\n              <pn-donut-chart *ngIf=\"dataPrioridadTresReload\" [idGrafica]=\"'prioridadTres'\" [data]=\"dataPrioridadTres\" [tipoGrafica]=\"tiposGraficas[4]\"\n                [height]=\"'auto'\"> </pn-donut-chart>\n            </div>\n          </div>\n          &lt;!&ndash; fin GRafica prioridad 1,2,3&ndash;&gt;\n        </div>-->\n        <!-- fin div graficas -->\n      </div>\n      <div id=\"divBoton\" [style.pointerEvents]=\"activarBtnIngresar?'auto':'none'\">\n        <a class=\"botonIngresar\" (click)=\"cambiarPantalla()\" [style.background]=\"activarBtnIngresar?'#008894':'#E6E6E6'\">INGRESAR</a>\n      </div>\n    </div>\n    <div *ngIf=\"!vistaInicialActiva\" style=\"width: 100%;min-width: 900px\" class=\"rutasClientes\">\n      <pn-trabajar-rutas-clientes style=\"width: 100%; height: 100%;\" (actualizarV)=\"actualizarVista($event)\" (emitVistaPrincipal)=\"vistaPrincipal($event)\"></pn-trabajar-rutas-clientes>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n.subPadre {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 20px;\n  padding-right: 20px; }\n.menuSeccion {\n  width: 321px;\n  background-color: #E6E6E6;\n  float: left;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.flexbox-container {\n  display: -ms-flex;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n#divBoton {\n  width: 100%;\n  height: 60px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding-right: 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.botonIngresar {\n  width: 190px;\n  height: 40px;\n  background: #008894;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 21px;\n  cursor: pointer;\n  border: none;\n  color: #FFFFFF;\n  font-weight: bold;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto; }\n.tituloGrafica {\n  width: 100px;\n  font-size: 36px;\n  font-weight: bold;\n  text-align: center; }\n.tituloGMediano {\n  width: 100px;\n  font-size: 24px;\n  font-weight: bold;\n  text-align: center; }\n.tituloGPequenio {\n  width: 100px;\n  font-size: 21px;\n  font-weight: bold;\n  text-align: center; }\n#prioridad1,\n#prioridad2,\n#prioridad3 {\n  width: 55%; }\n#donaProducto {\n  width: 75%; }\n/*\n.tooltip .tooltiptext::after {\n  content: \" \";\n  position: absolute;\n  bottom: 100%;\n  !* At the top of the tooltip *!\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent #4C4C4C transparent;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 0%;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n}\n*/\n.tooltip {\n  /* visibility: hidden;\n  width: 148px;\n  height: 42px;\n  background-color: #4C4C4C;\n  text-align: left;\n  //border-radius: 6px;\n  padding: 5px 10px 0px 0px;\n  padding: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  left: 2%;\n  margin-left: -60px;\n  font-size: 10px;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  !* Position the tooltip *!\n  position: absolute;\n  z-index: 1;\n  font-family: ArialMT;\n  font-size: 9px;\n  color: #FFFFFF;\n  text-align: center;*/\n  position: relative;\n  display: inline-block;\n  cursor: pointer; }\n.tooltip > .tooltiptext::after {\n    content: \" \";\n    position: absolute;\n    bottom: 100%;\n    /* At the top of the tooltip */\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: transparent transparent #4C4C4C transparent; }\n.tooltip:hover > .tooltiptext {\n    visibility: visible;\n    opacity: 1;\n    text-align: center;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n.tooltip > .tooltiptext {\n    visibility: hidden;\n    width: 130px;\n    background-color: #424242;\n    color: #FFFFFF;\n    font-family: 'Roboto';\n    text-align: left;\n    padding: 5px 10px 0px 0px;\n    font-size: 9px;\n    padding: 5px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    left: 50%;\n    margin-top: 0px;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    /* Position the tooltip */\n    position: absolute;\n    z-index: 1; }\n.gr_ch {\n  width: 50%; }\n.gr_ch .alineacion {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 50%;\n    width: 100%; }\n.gr_ch .donut-title {\n    margin-top: 10px;\n    font: 20px Roboto-Bold;\n    text-align: center; }\n.gr_ch .canvas-container {\n    width: 80%;\n    margin-left: 20px; }\n@media all and (max-width: 1405px) {\n  .estiloDatos {\n    min-height: 30px; }\n  .rutasClientes {\n    height: 71%; } }\n/*Estilos nuevos*/\n.graficas {\n  width: 100%;\n  height: calc(100vh - 350px);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n.graficas .padreCliente_Prioridades {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    /*justify-content: space-between;*/\n    width: 90%;\n    /* width: 70%;*/\n    margin: 30px 0px; }\n.graficas .padreCliente_Prioridades > div {\n      min-width: 90%; }\n.graficas .padreCliente_Prioridades > div > div {\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -ms-flex-line-pack: center;\n            align-content: center; }\n.graficas .padrePrioridades {\n    width: 20%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin: 30px 0px; }\n.graficas .padrePrioridades > div {\n      width: 100%;\n      max-height: 25%;\n      margin: 6% 0px; }\n.graficas .padrePrioridades > div > div {\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -ms-flex-line-pack: center;\n            align-content: center; }\n.aux .asideNormalMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  min-width: 181px;\n  width: 321px;\n  height: 100%;\n  overflow-y: scroll; }\n.aux .asideNormalMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n.aux > .asideOcultarMenu {\n  -webkit-animation-name: ocultarMenu;\n          animation-name: ocultarMenu;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-transition: 1s ease-in-out;\n  transition: 1s ease-in-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 0px;\n  width: 0px; }\n.aux > .asideOcultarMenu > .articulo {\n    width: 0px; }\n.aux > .asideMostrarMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  -webkit-animation-name: mostrarMenu;\n          animation-name: mostrarMenu;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-y: scroll; }\n.aux > .asideMostrarMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n@-webkit-keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@-webkit-keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n@keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n.estiloDatosObjetivo, .estiloDatosTrabajado, .estiloDatos, .estiloDatosMinimo {\n  font-size: 16px;\n  font-family: Roboto;\n  font-weight: bold; }\n.botoneraL {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  border-bottom: 1px solid #88868A;\n  border-top: 1px solid #88868A;\n  position: relative; }\n"

/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trabajar_rutas_service__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_embalar_embalar_service__ = __webpack_require__("./src/app/services/embalar/embalar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrabajarRutasComponent = /** @class */ (function () {
    /******************/
    function TrabajarRutasComponent(comunService, _trabajarRutaService, _embalarService) {
        this.comunService = comunService;
        this._trabajarRutaService = _trabajarRutaService;
        this._embalarService = _embalarService;
        //@Input() partidaPrioridad:PartidaInspeccion = new PartidaInspeccion();
        //////variables de los donout
        this.tituloDonaCliente = "";
        this.graficasValores_p = [];
        this.graficaTipos_p = [];
        this.graficas_p = [];
        this.graficaTipos_prioridad = [];
        this.graficas_prioridad = [];
        this.lstConsultaActual = []; //las que tengas donaclientes
        this.lstclientesG = []; //las que tengas
        this.lstGraficaPrioridades = []; ///dona prioridades
        this.lstPrioridadesG = []; //las que tengas
        this.lstGraficaUnoP1 = []; ///dona p1
        this.lstPrioridadUnoG = []; //las que tengas
        this.lstGraficaDosP2 = []; ///dona p2
        this.lstPrioridadDosG = []; //las que tengas
        this.lstGraficaTresP2 = []; ///dona p3
        this.lstPrioridadTresG = []; //las que tengas
        this.valoresTabs = [0, 0, 0, 0, 0];
        this.tiposGraficas = ["Gris", "Gris", "Gris", "Gris", "Gris"];
        this.datosGraficas = [];
        this.graficasValores = [];
        this.dataCLienteReload = true;
        this.dataCLiente = {
            titulo: "Clientes",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadesReload = true;
        this.dataPrioridades = {
            titulo: "Prioridades",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadUnoReload = true;
        this.dataPrioridadUno = {
            titulo: "Prioridad 1",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadDosReload = true;
        this.dataPrioridadDos = {
            titulo: "Prioridad 2",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadTresReload = true;
        this.dataPrioridadTres = {
            titulo: "Prioridad 3",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        ///////
        this.lstAux = [];
        this.lstAuxPrioridades = [];
        this.vistaInicialActiva = true;
        this.classAsideMenu = "asideNormalMenu";
        this.totalPendientes = 0;
        /////variables  para el html
        this.inspeccionDeceadaHastaElMomento = 0;
        this.inspeccionDeceadaHastaElMomentoMen = 0;
        this.minimaInspeccionHastaElMomento = 0;
        this.objetivoDePackingList = 0;
        this.packingListDeceada = 0;
        this.packing_trabajadas_hoy = 0;
        this.minimoPackingDeInspeccion = 0;
        this.colorIndiceInspeccionDeceada = "#D0021B";
        this.colorMinimoInspeccion = "#D0021B";
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
        this.filtroPrioUsuario = [];
        this.nuevaPrioridadEstadisticas = [];
        this.totEmbalar = 0;
        this.totAlmacen = 0;
        this.totEnvio = 0;
        this.totEnvioXCliente = 0;
    }
    TrabajarRutasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'almacen') {
                _this.activeMenu = false;
                _this.obtenerMetodos();
            }
        });
        this.obtenerMetodos();
    };
    TrabajarRutasComponent.prototype.obtenerMetodos = function () {
        this.obtenerTotMenu();
        this.obtenerObjetivos();
        this.obtenerInfoGraficas();
        this.idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        var id = parseInt(this.idUsuario);
        var obj = {
            idUsuarioLogueado: id
        };
        this.ObtenerEstadisticaUsuarioPL(obj);
        // inspeccionDeceadaHastaElMomento
        // minimaInspeccionHastaElMomento
        if (this.inspeccionDeceadaHastaElMomento < 0) {
            this.colorIndiceInspeccionDeceada = "#D0021B";
        }
        else if (this.packingListDeceada > this.inspeccionDeceadaHastaElMomento) {
            this.colorIndiceInspeccionDeceada = "#39B54A"; /////verde
        }
        if (this.minimaInspeccionHastaElMomento < 0) {
            this.colorMinimoInspeccion = "#D0021B"; //rojo
        }
        else if (this.minimoPackingDeInspeccion > this.minimaInspeccionHastaElMomento) {
            this.colorMinimoInspeccion = "#39B54A";
        }
    };
    TrabajarRutasComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = "asideOcultarMenu";
        }
        else {
            this.classAsideMenu = "asideMostrarMenu";
        }
    };
    /*Metodo para llamar al servicio de la graficas prioridades */
    TrabajarRutasComponent.prototype.ObtenerEstadisticaUsuarioPL = function (datosUser) {
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
        this.totales_estadisticas = { total_partidas: totPartidas, total_piezas: totPza, listaQuincena: this.listaQuincena, listaMes: this.listaMes, listaAnio: this.listaYear };
        this._trabajarRutaService.ObtenerEstadisticaUsuarioPL(datosUser).subscribe(function (data) {
            console.log('Soy data prioridades -->', datosUser.idUsuarioLogueado);
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
                    totPartidas += _this.listaAnios[i].totalPL;
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
                _this.limpiarVariablesGraficaEstadisticas();
                _this.calcularDatosGraficaEstadisticas();
            }
        });
    };
    // Metodo para las variables de la graficas estadisticas
    TrabajarRutasComponent.prototype.limpiarVariablesGraficaEstadisticas = function () {
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
    };
    TrabajarRutasComponent.prototype.calcularDatosGraficaEstadisticas = function () {
        for (var _i = 0, _a = this.listaPrioridadUsuarioEstadisticas; _i < _a.length; _i++) {
            var usuario = _a[_i];
            this.llenarTotales(this.dataPrioridadEstadisticas, usuario, 'PRIORIDADESESTADISTICAS');
        }
    };
    TrabajarRutasComponent.prototype.llenarTotales = function (total, elemento, graficaElegida) {
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
                break;
            default:
                break;
        }
    };
    //////////////////////////////////////////////////////////
    TrabajarRutasComponent.prototype.cambiarPantalla = function () {
        this.vistaInicialActiva = false;
    };
    TrabajarRutasComponent.prototype.regresarVista = function () {
        this.vistaInicialActiva = true;
        this.seleccionarHoy();
    };
    TrabajarRutasComponent.prototype.seleccionarHoy = function () {
        setTimeout(function () {
            var idHoy = document.getElementById('dhoy');
            if (idHoy) {
                document.getElementById('dhoy').click();
            }
            else {
                this.seleccionarHoy();
            }
        }, 100);
    };
    TrabajarRutasComponent.prototype.obtenerObjetivos = function () {
        var _this = this;
        this._trabajarRutaService.obtenerObjetivos().subscribe(function (data) {
            if (data.current["Hoy"] != undefined) {
                _this.packing_trabajadas_hoy = data.current["Hoy"];
            }
            if (data.current["Deseadas"] != undefined) {
                _this.packingListDeceada = data.current["Deseadas"];
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
            if (data.current["Minimo"] != undefined) {
                _this.minimoPackingDeInspeccion = data.current["Minimo"];
                /* this.minimaInspeccionHastaElMomento =
                   this.minimoPackingDeInspeccion - this.packing_trabajadas_hoy;*/
                if (_this.packing_trabajadas_hoy > _this.minimoPackingDeInspeccion) {
                    // this.cambiarColor = '#39B54A';
                    _this.minimaInspeccionHastaElMomento = _this.packing_trabajadas_hoy - _this.minimoPackingDeInspeccion;
                    _this.valorSigno = '+';
                    _this.colorMinimoInspeccion = "#39B54A";
                    _this.mensajeEmbDeseado = 'HAZ SUPERADO EL MÍNIMO DE ETREGAS';
                }
                else if (_this.minimoPackingDeInspeccion > _this.packing_trabajadas_hoy) {
                    // this.cambiarColor = '#D0021B';
                    _this.minimaInspeccionHastaElMomento = _this.minimoPackingDeInspeccion - _this.packing_trabajadas_hoy;
                    _this.valorSigno = '-';
                    _this.colorMinimoInspeccion = "#D0021B"; //rojo
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
            if (data.current["Objetivo"] != undefined) {
                _this.objetivoDePackingList = data.current["Objetivo"];
            }
            if (_this.packing_trabajadas_hoy < _this.packingListDeceada) {
                _this.activarBtnIngresar = true;
            }
            else {
                _this.activarBtnIngresar = false;
            }
        }, function (error) {
            console.log(error);
        });
    };
    TrabajarRutasComponent.prototype.obtenerTotMenu = function () {
        var _this = this;
        this._embalarService.totalesGeneral().subscribe(function (data) {
            _this.totEmb = data.current.Embalar;
            _this.totAlmacen = data.current.Almacen;
            _this.totEnvio = data.current.Envio;
            _this.totEnvioXCliente = data.current.EnvioXCliente;
            _this.itemsMenu = [{ rol: 'RESPONSABLE DE SURTIDO', active: true, menu: [
                        { nombre: 'Salidas Almacén', tipo: 'valor', valor: _this.totEmb, url: 'embalar', disable: false },
                        {
                            nombre: 'Trabajar rutas',
                            tipo: '',
                            valor: 0,
                            url: 'poolVisitas',
                            disable: true,
                            subMenu: [
                                { nombre: 'Almacén', tipo: 'valor', valor: _this.totAlmacen, url: 'almacen', select: true },
                                { nombre: 'Envío', tipo: 'valor', valor: _this.totEnvio, url: 'envio' },
                                { nombre: 'Envio Pagado por cliente', tipo: 'valor', valor: _this.totEnvioXCliente, url: 'trabajarRutaCliente' }
                            ],
                            select: false
                        }
                    ] }];
            _this.activeMenu = true;
        });
    };
    TrabajarRutasComponent.prototype.obtenerInfoGraficas = function () {
        var _this = this;
        this._trabajarRutaService.obtenerMontosTab().subscribe(function (data) {
            console.log(data);
            _this.valoresTabs = [
                data.current["Hoy"],
                data.current["Mañana"],
                data.current["Pasado"],
                data.current["Futuro"],
                data.current["Todo"]
            ];
        }, function (error) {
            console.log(error);
        });
        this._trabajarRutaService.obtenerInfoGraficas().subscribe(function (data) {
            _this.datosGraficas = data.current;
            _this.cambiarTab("hoy");
            var idHoy = document.getElementById('dhoy');
            if (idHoy) {
                setTimeout(function () {
                    document.getElementById('dhoy').click();
                }, 100);
            }
        }, function (error) {
            console.log(error);
        });
    };
    TrabajarRutasComponent.prototype.cambiarTab = function ($event) {
        switch ($event) {
            case "hoy":
                this.llenarGraficas("Hoy");
                break;
            case "manana":
                this.llenarGraficas("Mañana");
                break;
            case "pasado":
                this.llenarGraficas("Pasado");
                break;
            case "futuro":
                this.llenarGraficas("futuro");
                break;
            case "todo":
                this.llenarGraficas("Todo");
                break;
        }
    };
    TrabajarRutasComponent.prototype.llenarGraficas = function (dia) {
        var _this = this;
        this.limpiarGraficas();
        if (this.datosGraficas[dia] != undefined) {
            var graficaHoy = this.datosGraficas[dia];
            console.log(graficaHoy);
            if (graficaHoy["Clientes"] != undefined) {
                var clientes = [];
                var monto = [];
                var piezasMonto = [];
                var sumPiezas = 0;
                var sumMonto = 0;
                var formatoMonto = void 0; /// Se agrego para darle formato al monto
                var formatoMontoTotal = void 0; /// Se agrego para darle formato al monto
                for (var _i = 0, _a = graficaHoy["Clientes"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    clientes.push(item.titulo);
                    monto.push(item.monto);
                    formatoMonto = new __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(item.monto);
                    piezasMonto.push([item.piezas, formatoMonto]);
                    sumPiezas += item.piezas;
                    sumMonto += item.monto;
                }
                /*For para ordenar los datos de acuerdo al monto*/
                var montoAuxL = void 0;
                var band = false;
                while (!band) {
                    band = true;
                    for (var i = 0; i < monto.length - 1; i++) {
                        var aux = i + 1;
                        if (monto[i] < monto[aux]) {
                            montoAuxL = monto[i + 1];
                            monto[i + 1] = monto[i];
                            monto[i] = montoAuxL;
                            // band = false;
                            ///////////////////////
                            montoAuxL = piezasMonto[i + 1][1];
                            piezasMonto[i + 1][1] = piezasMonto[i][1];
                            piezasMonto[i][1] = montoAuxL;
                            /////////////////////
                            montoAuxL = piezasMonto[i + 1][0];
                            piezasMonto[i + 1][0] = piezasMonto[i][0];
                            piezasMonto[i][0] = montoAuxL;
                            /////////////////////////////
                            montoAuxL = clientes[i + 1];
                            clientes[i + 1] = clientes[i];
                            clientes[i] = montoAuxL;
                            band = false;
                        }
                    }
                }
                /**********************************************/
                formatoMontoTotal = new __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(sumMonto); /// Se asigna el formato al total del monto
                this.dataCLiente = {
                    titulo: "Clientes",
                    labels: clientes,
                    valores: monto,
                    labelsExtras: [["Piezas"], ["Monto"]],
                    labelsExtrasHover: ["Piezas", "Monto"],
                    valuesExtras: [sumPiezas, formatoMontoTotal],
                    valuesExtrasHover: piezasMonto
                };
                this.tiposGraficas[0] = "General";
                this.dataCLienteReload = false;
                setTimeout(function () {
                    _this.dataCLienteReload = true;
                }, 5);
            }
            else {
                this.tiposGraficas[0] = "Gris";
                this.dataCLienteReload = false;
                setTimeout(function () {
                    _this.dataCLienteReload = true;
                }, 5);
            }
            /***************************************** graficas de prioridadades ***********************************/
            /*if (graficaHoy["Prioridades"] != undefined) {
              let prioridades: any = [];
              let monto: any = [];
              let piezasMonto: any = [];
              let sumPiezas: any = 0;
              let sumMonto: any = 0;
              for (let item of graficaHoy["Prioridades"]) {
                prioridades.push(item.titulo);
                monto.push(item.monto);
                piezasMonto.push([item.piezas, "$" + item.monto]);
                sumPiezas += item.piezas;
                sumMonto += item.monto;
              }
      
              this.dataPrioridades = {
                titulo: "Prioridades",
                labels: prioridades,
                valores: monto,
                labelsExtras: [["Piezas"], ["Monto"]],
                labelsExtrasHover: ["Piezas", "Monto"],
                valuesExtras: [sumPiezas, "$" + sumMonto],
                valuesExtrasHover: piezasMonto
              };
              this.tiposGraficas[1] = "General";
              this.dataPrioridadesReload = false;
              setTimeout(() => {
                this.dataPrioridadesReload = true;
              }, 5);
            } else {
              this.tiposGraficas[1] = "Gris";
              this.dataPrioridadesReload = false;
              setTimeout(() => {
                this.dataPrioridadesReload = true;
              }, 5);
            }*/
            /*if (graficaHoy["P1"] != undefined) {
              let clientes: any = [];
              let monto: any = [];
              let piezasMonto: any = [];
              let sumPiezas: any = 0;
              let sumMonto: any = 0;
              for (let item of graficaHoy["P1"]) {
                clientes.push(item.titulo);
                monto.push(item.monto);
                piezasMonto.push([item.piezas, "$" + item.monto]);
                sumPiezas += item.piezas;
                sumMonto += item.monto;
              }
              this.dataPrioridadUno = {
                titulo: "Prioridad 1",
                labels: clientes,
                valores: monto,
                labelsExtras: [["Piezas"], ["Monto"]],
                labelsExtrasHover: ["Piezas", "Monto"],
                valuesExtras: [sumPiezas, "$" + sumMonto],
                valuesExtrasHover: piezasMonto
              };
              this.tiposGraficas[2] = "PrioridadRoja";
              this.dataPrioridadUnoReload = false;
              setTimeout(() => {
                this.dataPrioridadUnoReload = true;
              }, 5);
            } else {
              this.tiposGraficas[2] = "Gris";
              this.dataPrioridadUnoReload = false;
              setTimeout(() => {
                this.dataPrioridadUnoReload = true;
              }, 5);
            }*/
            /*if (graficaHoy["P2"] != undefined) {
              let clientes: any = [];
              let monto: any = [];
              let piezasMonto: any = [];
              let sumPiezas: any = 0;
              let sumMonto: any = 0;
              for (let item of graficaHoy["P2"]) {
                clientes.push(item.titulo);
                monto.push(item.monto);
                piezasMonto.push([item.piezas, "$" + item.monto]);
                sumPiezas += item.piezas;
                sumMonto += item.monto;
              }
              this.dataPrioridadDos = {
                titulo: "Prioridad 2",
                labels: clientes,
                valores: monto,
                labelsExtras: [["Piezas"], ["Monto"]],
                labelsExtrasHover: ["Piezas", "Monto"],
                valuesExtras: [sumPiezas, "$" + sumMonto],
                valuesExtrasHover: piezasMonto
              };
              this.tiposGraficas[3] = "PrioridadNaranja";
              this.dataPrioridadDosReload = false;
              setTimeout(() => {
                this.dataPrioridadDosReload = true;
              }, 5);
            } else {
              this.tiposGraficas[3] = "Gris";
              this.dataPrioridadDosReload = false;
              setTimeout(() => {
                this.dataPrioridadDosReload = true;
              }, 5);
            }*/
            /*if (graficaHoy["P3"] != undefined) {
              let clientes: any = [];
              let monto: any = [];
              let piezasMonto: any = [];
              let sumPiezas: any = 0;
              let sumMonto: any = 0;
              for (let item of graficaHoy["P3"]) {
                clientes.push(item.titulo);
                monto.push(item.monto);
                piezasMonto.push([item.piezas, "$" + item.monto]);
                sumPiezas += item.piezas;
                sumMonto += item.monto;
              }
              this.dataPrioridadTres = {
                titulo: "Prioridad 3",
                labels: clientes,
                valores: monto,
                labelsExtras: [["Piezas"], ["Monto"]],
                labelsExtrasHover: ["Piezas", "Monto"],
                valuesExtras: [sumPiezas, "$" + sumMonto],
                valuesExtrasHover: piezasMonto
              };
              this.tiposGraficas[4] = "PrioridadVerde";
              this.dataPrioridadTresReload = false;
              setTimeout(() => {
                this.dataPrioridadTresReload = true;
              }, 5);
            } else {
              this.tiposGraficas[4] = "Gris";
              this.dataPrioridadTresReload = false;
              setTimeout(() => {
                this.dataPrioridadTresReload = true;
              }, 5);
            }*/
        }
    };
    TrabajarRutasComponent.prototype.limpiarGraficas = function () {
        var _this = this;
        this.dataCLiente = {
            titulo: "Clientes",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridades = {
            titulo: "Prioridades",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadUno = {
            titulo: "Prioridad 1",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadDos = {
            titulo: "Prioridad 2",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.dataPrioridadTres = {
            titulo: "Prioridad 3",
            labels: [""],
            valores: [1],
            labelsExtras: [["Piezas"], ["Monto"]],
            labelsExtrasHover: ["Piezas", "Monto"],
            valuesExtras: [0, "$0.00"],
            valuesExtrasHover: [[0, "$0.00"]]
        };
        this.tiposGraficas = ["Gris", "Gris", "Gris", "Gris", "Gris"];
        this.dataCLienteReload = false;
        this.dataPrioridadesReload = false;
        this.dataPrioridadUnoReload = false;
        this.dataPrioridadDosReload = false;
        this.dataPrioridadTresReload = false;
        setTimeout(function () {
            _this.dataCLienteReload = true;
            _this.dataPrioridadesReload = true;
            _this.dataPrioridadUnoReload = true;
            _this.dataPrioridadDosReload = true;
            _this.dataPrioridadTresReload = true;
        }, 5);
    };
    TrabajarRutasComponent.prototype.actualizarVista = function ($event) {
        this.obtenerObjetivos(); // Vista superior
        this.obtenerInfoGraficas(); // Grafica de la vista principal
        this.idUsuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        var id = parseInt(this.idUsuario);
        var obj = {
            idUsuarioLogueado: id
        };
        this.ObtenerEstadisticaUsuarioPL(obj);
    };
    TrabajarRutasComponent.prototype.vistaPrincipal = function ($event) {
        this.vistaInicialActiva = true;
        this.seleccionarHoy();
    };
    TrabajarRutasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "pn-trabajar-rutas",
            template: __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.component.html"),
            styles: [__webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_1__trabajar_rutas_service__["a" /* TrabajarRutaService */], __WEBPACK_IMPORTED_MODULE_4__services_embalar_embalar_service__["a" /* EmbalarService */]])
    ], TrabajarRutasComponent);
    return TrabajarRutasComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrabajarRutasModule", function() { return TrabajarRutasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trabajar_rutas_component__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_radio_button_sin_label_radio_button_sin_label_module__ = __webpack_require__("./src/app/components/shared/radio-button-sin-label/radio-button-sin-label.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_combo_flecha_verde_combo_flecha_verde_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-verde/combo-flecha-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts__ = __webpack_require__("./node_modules/ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_radio_button_radio_button_module__ = __webpack_require__("./src/app/components/shared/radio-button/radio-button.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__trabajar_rutas_routing__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_search_bar_search_bar_module__ = __webpack_require__("./src/app/components/shared/search-bar/search-bar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_buscador_ovalado_buscador_ovalado_component__ = __webpack_require__("./src/app/components/shared/buscador-ovalado/buscador-ovalado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__trabajar_rutas_clientes_trabajar_rutas_clientes_module__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_pop_up_estadisticas_pop_up_estadisticas_module__ = __webpack_require__("./src/app/components/shared/pop-up-estadisticas/pop-up-estadisticas.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_grafica_puntos_grafica_puntos_module__ = __webpack_require__("./src/app/components/shared/grafica-puntos/grafica-puntos.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__responsableae_componentes_botonera_dias_botonera_dias_module__ = __webpack_require__("./src/app/components/responsableae/componentes/botonera-dias/botonera-dias.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__trabajar_rutas_clientes_trabajar_rutas_clientes_detalle_trabajar_rutas_clientes_detalle_module__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_alerta_alerta_module__ = __webpack_require__("./src/app/components/shared/alerta/alerta.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var TrabajarRutasModule = /** @class */ (function () {
    function TrabajarRutasModule() {
    }
    TrabajarRutasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_12__trabajar_rutas_routing__["a" /* TrabajarRutasRouting */],
                __WEBPACK_IMPORTED_MODULE_7__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_radio_button_radio_button_module__["a" /* RadioButtonModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_7__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_combo_flecha_verde_combo_flecha_verde_module__["a" /* ComboFlechaVerdeModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_radio_button_sin_label_radio_button_sin_label_module__["a" /* RadioButtonSinLabelModule */],
                __WEBPACK_IMPORTED_MODULE_13__shared_search_bar_search_bar_module__["a" /* SearchBarModule */],
                __WEBPACK_IMPORTED_MODULE_15__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */],
                __WEBPACK_IMPORTED_MODULE_17__shared_pop_up_estadisticas_pop_up_estadisticas_module__["a" /* PopUpEstadisticasModule */],
                __WEBPACK_IMPORTED_MODULE_18__shared_grafica_puntos_grafica_puntos_module__["a" /* GraficaPuntosModule */],
                __WEBPACK_IMPORTED_MODULE_19__responsableae_componentes_botonera_dias_botonera_dias_module__["a" /* BotoneraDiasModule */],
                __WEBPACK_IMPORTED_MODULE_16__trabajar_rutas_clientes_trabajar_rutas_clientes_module__["a" /* TrabajarRutasClientesModule */],
                __WEBPACK_IMPORTED_MODULE_20__trabajar_rutas_clientes_trabajar_rutas_clientes_detalle_trabajar_rutas_clientes_detalle_module__["a" /* TrabajarRutasClientesDetalleModule */],
                __WEBPACK_IMPORTED_MODULE_21__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_22__shared_alerta_alerta_module__["a" /* AlertaModule */],
                __WEBPACK_IMPORTED_MODULE_23__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__trabajar_rutas_component__["a" /* TrabajarRutasComponent */],
                __WEBPACK_IMPORTED_MODULE_14__shared_buscador_ovalado_buscador_ovalado_component__["a" /* BuscadorOvaladoComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_0__trabajar_rutas_component__["a" /* TrabajarRutasComponent */]]
        })
    ], TrabajarRutasModule);
    return TrabajarRutasModule;
}());



/***/ })

});
//# sourceMappingURL=trabajar-rutas.module.chunk.js.map