webpackJsonp(["responsableae.module"],{

/***/ "./src/app/class/comun/DocumentoAdjunto.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentoAdjunto; });
var DocumentoAdjunto = /** @class */ (function () {
    function DocumentoAdjunto() {
    }
    DocumentoAdjunto.prototype.getNombre = function () {
        return this.nombre;
    };
    DocumentoAdjunto.prototype.setTitulo = function (value) {
        this.titulo = value;
    };
    DocumentoAdjunto.prototype.getTitulo = function () {
        return this.titulo;
    };
    DocumentoAdjunto.prototype.setTitutlo = function (value) {
        this.titulo = value;
    };
    DocumentoAdjunto.prototype.getRuta = function () {
        return this.ruta;
    };
    DocumentoAdjunto.prototype.setRuta = function (value) {
        this.ruta = value;
    };
    DocumentoAdjunto.prototype.getArchivo = function () {
        return this.archivo;
    };
    DocumentoAdjunto.prototype.setArchivo = function (value) {
        this.archivo = value;
    };
    DocumentoAdjunto.prototype.getIdArchivoAdjunto = function () {
        return this.idArchivoAdjunto;
    };
    DocumentoAdjunto.prototype.setIdArchivoAdjunto = function (value) {
        this.idArchivoAdjunto = value;
    };
    DocumentoAdjunto.prototype.getIdServicio = function () {
        return this.idServicio;
    };
    DocumentoAdjunto.prototype.setIdServicio = function (value) {
        this.idServicio = value;
    };
    DocumentoAdjunto.prototype.getExtencion = function () {
        return this.extension;
    };
    DocumentoAdjunto.prototype.setExtencion = function (value) {
        this.extension = value;
    };
    DocumentoAdjunto.prototype.getAsunto = function () {
        return this.asunto;
    };
    DocumentoAdjunto.prototype.setAsunto = function (value) {
        this.asunto = value;
    };
    DocumentoAdjunto.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    DocumentoAdjunto.prototype.setDescripcion = function (value) {
        this.descripcion = value;
    };
    DocumentoAdjunto.prototype.getCargadoPorSistema = function () {
        return this.cargadoPorSistema;
    };
    DocumentoAdjunto.prototype.setCargadoPorSistema = function (value) {
        this.cargadoPorSistema = value;
    };
    return DocumentoAdjunto;
}());



/***/ }),

/***/ "./src/app/components/responsableae/componentes/barra-progreso/barra-progreso.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"principal\">\n  <div class=\"barraProgreso\" style=\"width:70%; border-right: 1px solid #ECEEF0; \">\n    <div class=\"barra\">\n      <h1>PROGRESO DE {{evento| uppercase}}</h1>\n      <div class=\"datos\">\n        <div class=\"mensaje\">\n          <label style=\"font-style: italic; padding-top: 5px;\">{{mensajeBarra}}</label>\n        </div>\n        <div class=\"hora\">\n          <img src='./assets/Images/reloj.svg' style=\"width: 37px;height: 37px;margin-right: 10px;\" />\n          <label>{{hora}}</label>\n        </div>\n      </div>\n\n\n\n      <div class=\"padreBarraProgreso\">\n        <div id=\"myProgress\">\n          <div id=\"myBar\" [style.width]=\"promedio\" [style.background-color]=\"colorBarra\">\n            <!-- <span class=\"tooltiptextleft\" *ngIf=\"tooltiptextLeft\">{{PzasInspeccionadas + \" piezas\"}}</span> -->\n            <span class=\"tooltiptextleft\" *ngIf=\"tooltiptextLeft\">{{formatoPzasInspeccionadas}}</span>\n            <label class=\"textLeft\" *ngIf=\"textLeft\">{{formatoPzasInspeccionadas}}</label>\n          </div>\n\n          <div id=\"myBar2\" [style.width]=\"restante\">\n            <span class=\"tooltiptextRigth\" *ngIf=\"toolTipRigth\">{{formatoPzasRestantes}}</span>\n            <label  class=\"textRigth\" *ngIf=\"textRigth\">{{formatoPzasRestantes}}</label>\n          </div>\n\n        </div>\n        <div class=\"datosBarra\">\n          <div class=\"PzasIniciales\">\n            0 piezas\n          </div>\n          <div class=\"pzasTotales\">\n            {{pzasTotales}} piezas\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div> <!-- FIN BARRA PROGRESO -->\n\n\n  <div class= \"tiposInspeccion\" style=\"width: 30%; heigth: 100%;\">\n\n    <div class=\"inspeccionPorPrioridad\" style=\"padding-left: 20px;height: 100%;\">\n      <h1 *ngIf=\"mostrarPedimento || mostrarPrioridad \"> TIPO DE INSPECCIÓN</h1>\n      <h1 *ngIf=\"mostrarOrdenDeCompra\" style=\"display: flex; box-sizing: border-box; padding-left: 40px;\"> TIPO DE INSPECCIÓN</h1>\n\n      <!--Inspeccion por prioridad  -->\n      <div class=\"tipoInspeccion\" *ngIf=\"mostrarPrioridad\">\n        <label style=\"font-family: 'Roboto'; color: #424242; font-size: 25px; font-weight: 500;\"> Por Prioridad</label>\n      </div>\n      <div id=\"myProgressPrioridad\" *ngIf=\"mostrarPrioridad\">\n        <div id=\"Prioridad1\" [style.width]=\"porcentajeP1\" *ngIf=\"mostrarP1\">\n          <h2>Prioridad 1</h2>\n          <p><label>Por Inspeccionar: </label>{{pzasRestantes | acFormatNumber}}</p>\n          <p><label *ngIf=\"!existo\">Tiempo Estimado de Inspección: </label>{{TEIPrioridad1}}</p>\n        </div>\n        <div id=\"Prioridad2\" [style.width]=\"porcentajeP2\" *ngIf=\"mostrarP2\">\n\n          <div class=\"descripcionLargaP2\" *ngIf=\"descripcionLargaP2\">\n            <h2>Prioridad 2</h2>\n            <p><label>Por Inspeccionar: </label>{{PzasInspeccionadas | acFormatNumber }} </p>\n            <p><label>Tiempo Estimado de Inspección: </label>{{TEIPrioridad2}}</p>\n          </div>\n\n          <div class=\"descripcionCortaP2\" *ngIf=\"descripcionCortaP2\">\n            <h2>P2</h2>\n            <p><label>PI: </label>{{formatoPzaP2 | acFormatNumber }} </p>\n            <p><label>TEI: </label>{{TEIPrioridad2}}</p>\n          </div>\n\n        </div>\n\n        <div id=\"Prioridad3\" [style.width]=\"porcentajeP3\" *ngIf=\"mostrarP3\">\n\n          <div class=\"descripcionLargaP3\" *ngIf=\"descripcionLargaP3\">\n            <h2>Prioridad 3</h2>\n            <p><label>Por Inspeccionar: </label>{{formatoPzaP3}}</p>\n            <p><label>Tiempo Estimado de Inspección: </label>{{TEIPrioridad3}}</p>\n          </div>\n\n          <div class=\"descripcionCortaP3\" *ngIf=\"descripcionCortaP3\">\n            <h2>P3</h2>\n            <p><label>PI: </label>{{formatoPzaP3}} </p>\n            <p><label>TEI: </label>{{TEIPrioridad3}}</p>\n          </div>\n\n        </div>\n      </div>\n\n      <!-- Inspeccion por orden de compra -->\n      <div class=\"inspeccionPorFolio\">\n        <div class=\"ordenDeCompra\" *ngIf=\"mostrarOrdenDeCompra\" style=\"display: flex; box-sizing: border-box; padding-left: 40px;\">\n          <div class=\"txtOC\">\n            <div class=\"tipoTextoOC\">Por Orden de Compra </div>\n            <div class=\"datoTextoOC\">OC-{{ordenDeCompra}}</div>\n          </div>\n        </div>\n\n        <!--Inspeccion por pedimento  -->\n        <div class=\"pedimento\" *ngIf=\"mostrarPedimento\">\n          <div class=\"imgPedimento\">\n            <img class=\"img\" src='./assets/Images/pedimento.svg' style=\"width: 68px;height: 72px;\" />\n          </div>\n          <div class=\"txtPedimento\">\n            <div class=\"tipoTexto\">Por Pedimento </div>\n            <div class=\"datoTexto\">{{pedimento}}</div>\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/barra-progreso/barra-progreso.component.scss":
/***/ (function(module, exports) {

module.exports = ".principal {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 100%;\n  width: 100%; }\n\n.barraProgreso {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  height: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n  font-family: 'Roboto', sans-serif;\n  min-height: 180px; }\n\n.barra {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  height: 100%;\n  width: 50%;\n  text-align: left;\n  font-family: 'Roboto', sans-serif; }\n\n#myProgress {\n  width: 100%;\n  background-color: #ddd;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 70px;\n  font-weight: bold;\n  margin-top: 1%;\n  color: #9B9B9B; }\n\n#myBar {\n  height: 100%;\n  text-align: center;\n  line-height: 30px;\n  color: #FFFFFF;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n  position: relative;\n  display: inline-block;\n  font-size: 25px; }\n\n#myBar2 {\n  height: 100%;\n  background-color: #ddd;\n  text-align: center;\n  line-height: 30px;\n  color: white;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  color: #9B9B9B;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  display: inline-block;\n  font-weight: bold;\n  font-size: 25px; }\n\n.datosBarra {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: 1%;\n  font-weight: bold;\n  font-size: 14px; }\n\n.PzasIniciales {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto; }\n\n.pzasTotales {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto; }\n\n#myBar .tooltiptextleft {\n  visibility: visibility;\n  width: 119px;\n  height: 17%;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: -10%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  left: 50%;\n  margin-left: -60px;\n  font-size: 10px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n#myBar .tooltiptextleft::after {\n  content: \" \";\n  position: absolute;\n  color: #424242;\n  bottom: 100%;\n  /* At the top of the tooltip */\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent black transparent; }\n\n#myBar2 .tooltiptextRigth {\n  visibility: visibility;\n  width: 119px;\n  height: 17%;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  padding: 5px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: -10%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  left: 50%;\n  margin-left: -60px;\n  font-size: 10px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n#myBar2 .tooltiptextRigth::after {\n  content: \" \";\n  position: absolute;\n  bottom: 100%;\n  /* At the top of the tooltip */\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent black transparent; }\n\n.textLeft, .textRigth {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-family: 'Roboto'; }\n\nh1 {\n  font-size: 20px;\n  color: #008894; }\n\n.datos {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.mensaje {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto; }\n\n.hora {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  font-size: 30px;\n  font-weight: bold;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n/******************** tipos inspeccion **********************/\n\n#myProgressPrioridad {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 110px;\n  color: #9B9B9B;\n  font-family: 'Roboto', sans-serif;\n  margin-left: 0%; }\n\n#Prioridad1 {\n  height: 100%;\n  background-color: #AF3634;\n  text-align: left;\n  color: white;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  display: inline-block;\n  font-size: 20px;\n  border: 1px solid white;\n  padding-left: 10px;\n  padding-top: 6px;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%; }\n\n#Prioridad2 {\n  height: 100%;\n  background-color: #EEB253;\n  text-align: left;\n  color: white;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  display: inline-block;\n  font-size: 20px;\n  border: 1px solid white;\n  padding-left: 10px;\n  padding-top: 6px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n#Prioridad3 {\n  height: 100%;\n  background-color: #63B257;\n  text-align: left;\n  color: white;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  display: inline-block;\n  font-size: 20px;\n  border: 1px solid white;\n  padding-left: 10px;\n  padding-top: 6px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\np {\n  font-size: 12px;\n  color: white;\n  margin-top: 1%;\n  padding: 5px;\n  font-family: Roboto; }\n\nh1 {\n  font-size: 20px;\n  color: #008894; }\n\nh2 {\n  color: white;\n  font-family: 'Novecento';\n  font-weight: bold;\n  font-size: 18px; }\n\n.tipoInspeccion {\n  text-align: left;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 2%;\n  padding-bottom: 2%; }\n\n.pedimento {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  padding: 3%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.imgPedimento {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  padding: 3%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.txtPedimento {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  padding: 3%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.tipoTexto {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  font-size: 30px;\n  font-weight: 500;\n  font-family: 'Roboto', sans-serif; }\n\n.datoTexto {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  font-size: 30px;\n  font-family: 'Roboto', sans-serif; }\n\n.ordenDeCompra {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 121px;\n  width: 330px; }\n\n.txtOC {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.tipoTextoOC {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  font-size: 30px;\n  font-weight: 500;\n  font-family: 'Roboto';\n  padding-bottom: 3%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #424242;\n  font-weight: 400; }\n\n.datoTextoOC {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  font-size: 30px;\n  font-family: 'Roboto';\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #404040;\n  font-weight: 300; }\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/barra-progreso/barra-progreso.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarraProgresoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_inspeccion_inspeccion_service__ = __webpack_require__("./src/app/services/inspeccion/inspeccion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__class_despachos_PartidaInspeccion_class__ = __webpack_require__("./src/app/class/despachos/PartidaInspeccion.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BarraProgresoComponent = /** @class */ (function () {
    function BarraProgresoComponent(router, _totalpzasInsp, coreComponent, comunService) {
        this.router = router;
        this._totalpzasInsp = _totalpzasInsp;
        this.coreComponent = coreComponent;
        this.comunService = comunService;
        this.partidaPrioridad = new __WEBPACK_IMPORTED_MODULE_6__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */]();
        this.pedimentoVistaEscanear = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.evento = "inspección";
        this.mensajeVerde = "Con el ritmo de Inspección actual, lograrás cumplir el objetivo";
        this.verde = "#94BA13";
        this.mensajeAzul = "Acelera el ritmo de Inspección, para que logres el objetivo.";
        this.azul = "#0098DA";
        this.mensajeNaranja = "Con el ritmo de Inspección actual, no lograrás cumplir el objetivo.";
        this.naranja = "#FF6700 ";
        this.PzasInspeccionadas = 0;
        this.pzasTotales = 7;
        // @Input() copiaUniversoPartidasInspeccion = new Array<PartidaInspeccion>();
        //Piezas por prioridad
        this.pzasP1 = 0;
        this.pzasP2 = 0;
        this.pzasP3 = 0;
    }
    BarraProgresoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.obtenerDatosInspector();
        this.obtenerTotalesPorInspector(this.inspector);
        this.mostrarPartidasInspeccion();
        this.obtenerModoInspeccion();
        //  this.obtenerPiezasInspeccionadasHoy(this.inspector);
        this.obtenerPiezasInspeccion(this.inspector);
        this.idHora = setInterval(function () {
            _this.hora = _this.obtenerHoraActual();
            _this.cambiarColorBarra(_this.TEIPrioridad1, _this.hora, _this.pzasTotales);
        }, 1000);
        this.subs = this.comunService.finalizar.subscribe(function (data) {
            _this.reinicio = data;
            //console.log(data, this.ocultaVideo);
            if (_this.reinicio == true) {
                _this.obtenerDatosInspector(); //Descomentar la linea para conectar con el usuario de la sesion.
                //  this.obtenerPiezasInspeccionadasHoy(this.inspector);
                _this.obtenerPiezasInspeccion(_this.inspector);
                _this.idHora = setInterval(function () {
                    _this.hora = _this.obtenerHoraActual();
                    _this.cambiarColorBarra(_this.TEIPrioridad1, _this.hora, _this.pzasTotales);
                }, 1000);
            }
        });
    };
    BarraProgresoComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.idHora);
    };
    BarraProgresoComponent.prototype.obtenerPiezasInspeccion = function (inspector) {
        var _this = this;
        this._totalpzasInsp.recibeTotalesInspecion(this.inspector).subscribe(function (data) {
            _this.pzasTotales = data.current.pzaAInspeccion;
            _this.PzasInspeccionadas = data.current.total_piezasInspeccionadas;
            _this.obtenerRestante(_this.pzasTotales);
            _this.pzasRestantes = (_this.pzasTotales - _this.PzasInspeccionadas);
            _this.formatoPzasRestantes = (_this.pzasRestantes == 1) ? _this.pzasRestantes + ' pieza (restante)' : _this.pzasRestantes + ' piezas (restantes)';
            _this.promedio = _this.obtenerPorcentaje(_this.pzasTotales, _this.PzasInspeccionadas) + "%";
            _this.restante = _this.obtenerRestante(_this.pzasTotales) + "%";
            _this.formatoPzasInspeccionadas = (_this.PzasInspeccionadas == 1) ? _this.PzasInspeccionadas + ' pieza inspeccionada' : _this.PzasInspeccionadas + ' piezas inspeccionadas';
        }, function (error) {
            // console.log("error al obtener las piezas en inspeccion..." + error);
        });
    };
    BarraProgresoComponent.prototype.obtenerHoraActual = function () {
        var fecha = new Date();
        var formatoMinutos = fecha.getMinutes();
        var minutes = (formatoMinutos < 10) ? '0' + formatoMinutos : formatoMinutos;
        var formatoHoras = fecha.getHours();
        var hours = (formatoHoras < 10) ? '0' + formatoHoras : formatoHoras;
        // let FormatoSegundos = fecha.getSeconds();
        // let seconds = (FormatoSegundos < 10) ? '0' + FormatoSegundos : FormatoSegundos;
        return hours + ":" + minutes + " Hrs.";
    };
    //Funcion para obtener el porcentaje de progreso además de mostrar y ocultar los tooltip y textos
    BarraProgresoComponent.prototype.obtenerPorcentaje = function (totales, inspeccionadas) {
        var porcentaje;
        if (totales < inspeccionadas) {
        }
        else if (totales == inspeccionadas) {
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
            else if (porcentaje >= 90 && porcentaje <= 100) {
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
    //Funcion para obtener porcentaje restante
    BarraProgresoComponent.prototype.obtenerRestante = function (pzasTotales) {
        var restante = 100 - this.obtenerPorcentaje(this.pzasTotales, this.PzasInspeccionadas);
        return restante;
    };
    BarraProgresoComponent.prototype.obtenerDatosInspector = function () {
        this.inspector = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
        // console.log(this.inspector);
    };
    /* METODOS TIPO INSPECCION */
    //Método para obtener el promedio por pieza de cada inspector.
    BarraProgresoComponent.prototype.obtenerTotalesPorInspector = function (inspector) {
        var _this = this;
        this.inspector = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
        // var arregloTotalInspector : any = new Array<totalesInspeccionProducto>();
        this._totalpzasInsp.consultaDeTotalesPorInspector(this.inspector).subscribe(function (data) {
            // console.log(data); //Pruebas
            _this.totalesInspeccionProducto1 = data.current;
            // let tiempoT = 1;
            _this.tiempo = _this.totalesInspeccionProducto1.promXpieza;
            _this.TEIPrioridad1 = _this.obtenerTiempoEstimado(_this.pzasP1, _this.tiempo);
            _this.TEIPrioridad2 = _this.obtenerTiempoEstimado(_this.pzasP2, _this.tiempo);
            _this.TEIPrioridad3 = _this.obtenerTiempoEstimado(_this.pzasP3, _this.tiempo);
        }, function (error) {
        });
    };
    //Mostrar listado de partidas para inspeccion.
    BarraProgresoComponent.prototype.mostrarPartidasInspeccion = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        //Método para obtener el promedio por pieza de cada inspector.
        this._totalpzasInsp.obtenerPiezasPorPrioridad().subscribe(function (data) {
            // console.log(data); //Pruebas
            _this.ContadorPiezasXPrioridad1 = data.current;
            // console.log("piezasPrioridad: " + this.ContadorPiezasXPrioridad1);
            _this.pzasP1 = _this.ContadorPiezasXPrioridad1.p1;
            _this.pzasP2 = _this.ContadorPiezasXPrioridad1.p2;
            _this.pzasP3 = _this.ContadorPiezasXPrioridad1.p3;
            //Test
            _this.mostrarP1 = _this.visualizarP1(_this.pzasP1);
            _this.mostrarP2 = _this.visualizarP2(_this.pzasP2);
            _this.mostrarP3 = _this.visualizarP2(_this.pzasP3);
            _this.formatoPzaP1 = (_this.pzasP1 == 1) ? _this.pzasP1 + ' pieza' : _this.pzasP1 + ' piezas';
            _this.formatoPzaP2 = (_this.pzasP2 == 1) ? _this.pzasP2 + ' pieza' : _this.pzasP2 + ' piezas';
            _this.formatoPzaP3 = (_this.pzasP3 == 1) ? _this.pzasP3 + ' pieza' : _this.pzasP3 + ' piezas';
            _this.porcentajeP1 = _this.obtenerPorcentajeP1(_this.mostrarP1, _this.mostrarP2, _this.mostrarP3) + "%";
            _this.porcentajeP2 = _this.obtenerPorcentajeP2(_this.mostrarP1, _this.mostrarP2, _this.mostrarP3) + "%";
            _this.porcentajeP3 = _this.obtenerPorcentajeP3(_this.mostrarP1, _this.mostrarP2, _this.mostrarP3) + "%";
            console.log("filtra prioridad");
            // console.log("P1: " + this.pzasP1 + " P2: " + this.pzasP2 + " P3: " + this.pzasP3);
            /* this.partidaPrioridad = new PartidaInspeccion(); */
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    // Funciones para porcentajes
    BarraProgresoComponent.prototype.obtenerPorcentajeP1 = function (value1, value2, value3) {
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
    BarraProgresoComponent.prototype.obtenerPorcentajeP2 = function (value1, value2, value3) {
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
    BarraProgresoComponent.prototype.obtenerPorcentajeP3 = function (value1, value2, value3) {
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
    BarraProgresoComponent.prototype.visualizarP1 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            return true;
    };
    BarraProgresoComponent.prototype.visualizarP2 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            this.descripcionLargaP2 = true;
        return true;
    };
    BarraProgresoComponent.prototype.visualizarP3 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            this.descripcionLargaP3 = true;
        return true;
    };
    BarraProgresoComponent.prototype.obtenerTiempoEstimado = function (piezas, tPromedio) {
        var tiempo = piezas * tPromedio;
        var hours;
        var minutes;
        var seconds;
        hours = Math.floor(tiempo / 3600);
        minutes = Math.floor((tiempo % 3600) / 60);
        seconds = tiempo % 60;
        //Anteponiendo un 0 a los minutos si son menos de 10
        minutes = minutes < 10 ? '0' + minutes : minutes;
        //Validacion de pruebas para cuando el tiempo es menor o igual a 1 min.
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
    BarraProgresoComponent.prototype.obtenerModoInspeccion = function () {
        var _this = this;
        this._totalpzasInsp.obtenerModoInspeccion().subscribe(function (data) {
            _this.tipoInspeccion = data.current;
            //  this.tipoInspeccion = "Por prioridad";
            console.log("tipo inspeccion: " + _this.tipoInspeccion);
            _this.mostrarTipoInspeccion(_this.tipoInspeccion);
        }, function (error) {
            console.log(error);
        });
    };
    BarraProgresoComponent.prototype.mostrarTipoInspeccion = function (tipo) {
        tipo = this.tipoInspeccion;
        // this.pedimento = null;
        // this.ordenDeCompra = '1234567'
        this.pedimento = this.partidaPrioridad.pedimento;
        this.pedimentoVistaEscanear.emit(this.pedimento); /// Output que se utiliza para enviar el pedimento a vista escanear.
        this.ordenDeCompra = this.partidaPrioridad.compra;
        if (tipo == "Por prioridad") {
            this.mostrarPrioridad = true;
            if (this.pedimento != null) {
                this.comunService.tipoInspeccion(false);
            }
            else if (this.ordenDeCompra != null) {
                this.comunService.tipoInspeccion(true);
            }
        }
        else if (tipo == "Por pedimento") {
            if (this.pedimento != null) {
                this.mostrarPedimento = true;
                this.comunService.tipoInspeccion(false);
            }
            else if (this.ordenDeCompra != null) {
                this.mostrarOrdenDeCompra = true;
                this.comunService.tipoInspeccion(true);
            }
        }
        if (this.partidaPrioridad.paisProveedor.toLowerCase() === 'Mexico'.toLowerCase() || this.partidaPrioridad.paisProveedor.toLowerCase() === 'México'.toLowerCase()) {
            this.comunService.tipoInspeccion(true);
        }
    };
    BarraProgresoComponent.prototype.cambiarColorBarra = function (tiempoE, horaActual, piezasXInspeccionar) {
        //let tiempoEstimado:any = tiempoE;
        var tiempoRestante;
        var hrSalida = '18:00 Hrs.';
        //let hrSalida = '10:00 Hrs.'
        var partsSalida = hrSalida.split(":");
        var hrActualSalida = Number(partsSalida[0]);
        var auxSalida = partsSalida[1];
        var minSalida = auxSalida.split(" ");
        var minActualSalida = Number(minSalida[0]);
        var horaSalidaAComparar = Number(hrActualSalida + "." + minActualSalida);
        //17:49 Hrs.
        var arrayTE = tiempoE.split(" ");
        var auxTiempoE = Number(arrayTE[0]);
        var time = (piezasXInspeccionar * auxTiempoE) * 60; // 150 * 60 = 9000
        var hr = Math.floor(time / 3600); //2
        var min = Math.floor((time % 3600) / 60); //30
        var parts = horaActual.split(":");
        var hrActual = Number(parts[0]);
        var aux = parts[1];
        var partsmin = aux.split(" ");
        var minActual = Number(partsmin[0]);
        var sumaHoras = hrActual + hr;
        var sumaMin = minActual + min;
        if (sumaMin >= 60) {
            var hrAux = (Math.floor((sumaMin * 60) / 3600)) + sumaHoras;
            var minAux = Math.floor(((sumaMin * 60) % 3600) / 60);
            tiempoRestante = Number(hrAux + '.' + minAux);
        }
        else {
            tiempoRestante = Number(sumaHoras + '.' + sumaMin); // 18:30 Hrs
        }
        if (tiempoRestante > horaSalidaAComparar) {
            this.mensajeBarra = this.mensajeNaranja;
            this.colorBarra = this.naranja;
        }
        else if (tiempoRestante >= 17.0 && tiempoRestante <= horaSalidaAComparar) {
            this.mensajeBarra = this.mensajeAzul;
            this.colorBarra = this.azul;
        }
        else if (tiempoRestante < horaSalidaAComparar) {
            this.mensajeBarra = this.mensajeVerde;
            this.colorBarra = this.verde;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */])
    ], BarraProgresoComponent.prototype, "partidaPrioridad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], BarraProgresoComponent.prototype, "pedimentoVistaEscanear", void 0);
    BarraProgresoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-barra-progreso',
            template: __webpack_require__("./src/app/components/responsableae/componentes/barra-progreso/barra-progreso.component.html"),
            styles: [__webpack_require__("./src/app/components/responsableae/componentes/barra-progreso/barra-progreso.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_inspeccion_inspeccion_service__["a" /* InspeccionService */], __WEBPACK_IMPORTED_MODULE_5__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_4__services_comun_comun_service__["a" /* ComunService */]])
    ], BarraProgresoComponent);
    return BarraProgresoComponent;
}());



/***/ }),

/***/ "./src/app/components/responsableae/componentes/informacion-partida/informacion-partida.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"informacionPartida\" style=\"max-width: 523px;overflow: hidden;\">\n  <h1> INFORMACIÓN DE LA PARTIDA</h1>\n    <div class=\"info\">\n    <div class=\"descripcion\">\n    {{idPartida}} · {{descripcion}} - {{marca}} {{presentacion}}\n    </div>\n\n    <div class=\"oc\">\n      <label  *ngIf=\"!banderaTxt\"> {{oc}}</label>\n      <label *ngIf=\"banderaTxt\"> {{pedimento}}</label>\n    </div>\n\n    <div class=\"pzas\">\n      <div class=\"cantidad\">\n        <img class=\"img\" *ngIf=\"iconoAmbiente\" src='./assets/Images/ambiente.svg'/>\n        <img class=\"img\" *ngIf=\"iconoCongelacion\" src='./assets/Images/congelacion.svg'/>\n        <img class=\"img\" *ngIf=\"iconoRefrigeracion\"  src='./assets/Images/refrigeracion.svg'/>\n        <label class=\"pzas\">· {{formatoPzas}} </label>\n      </div>\n      <div [ngClass]=\"classPrioridad\">\n        <div class=\"tooltip\"> {{prioridad}}  · {{puntaje}}\n          <span class=\"tooltiptext\">\n            <table style=\"width:100%\">\n              <tr style=\"color:#FFF;\" *ngIf=\"mostrarFEE\">\n                <td>FEE: {{fechaFEE | dateFormatSlash}}· {{diasRestantes}} </td>\n                <td style=\"text-align: Right;\">+{{pFEE}}</td>\n              </tr>\n              <tr *ngIf=\"mostrarManejo\">\n                <td>Manejo: </td>\n                <td style=\"text-align: Right;\">+{{pManejo}}</td>\n              </tr>\n              <tr *ngIf=\"mostrarRuta\">\n                <td>Ruta: </td>\n                <td style=\"text-align: Right;\" >+{{pRuta}}</td>\n              </tr>\n              <tr *ngIf=\"mostrarParciales\">\n                <td>Parciales: </td>\n                <td style=\"text-align: Right;\">+{{pParciales}}</td>\n              </tr>\n              <tr *ngIf=\"mostrarArribo\">\n                <td>Días arribo: </td>\n                <td style=\"text-align: Right;\">+{{pArribo}}</td>\n              </tr>\n              <tr *ngIf=\"mostrarControl\">\n                <td>Control: </td>\n                <td style=\"text-align: Right;\">+{{pControl}}</td>\n              </tr>\n            </table>\n            </span>\n        </div>\n\n      </div>\n    </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/informacion-partida/informacion-partida.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n.informacionPartida {\n  font-family: 'Roboto', sans-serif;\n  height: auto; }\n.info {\n  height: 100%;\n  margin-top: 20px; }\nh1 {\n  font-size: 20px;\n  color: #008894; }\n.oc {\n  font-size: 25px;\n  font-weight: bold;\n  margin-top: 11px;\n  margin-bottom: 25px; }\n.pzas {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch; }\n.cantidad {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  max-width: 125px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.P1 {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  color: #AF3634;\n  font-size: 16px; }\n.P2 {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  color: #EEB253;\n  font-size: 16px; }\n.P3 {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  color: #63B257;\n  font-size: 16px; }\n.img {\n  margin-right: 3%;\n  width: 20px;\n  height: 20px; }\n.tooltip .tooltiptext::after {\n  content: \" \";\n  position: absolute;\n  bottom: 100%;\n  /* At the top of the tooltip */\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent #4C4C4C transparent;\n  top: 8px; }\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n  opacity: 1; }\n.tooltip {\n  position: relative;\n  display: inline-block;\n  cursor: pointer; }\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 130px;\n  background-color: #4C4C4C;\n  color: #6EB248;\n  text-align: left;\n  border-radius: 6px;\n  padding: 5px 10px 0px 0px;\n  font-size: 10px;\n  padding: 5px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  left: 2%;\n  margin-left: -60px;\n  font-size: 10px;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  /* Position the tooltip */\n  z-index: 1; }\n@supports (-webkit-line-clamp: 3) {\n  .descripcion {\n    display: block;\n    display: -webkit-box !important;\n    line-height: 1;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    height: 45px; } }\n@supports not (-webkit-line-clamp: 3) {\n  .descripcion {\n    position: relative;\n    height: 45px !important;\n    line-height: 1;\n    overflow: hidden;\n    width: 100%; }\n    .descripcion:before {\n      content: \"\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\";\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      background: transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;\n      background: transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%; } }\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/informacion-partida/informacion-partida.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformacionPartidaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__ = __webpack_require__("./src/app/class/despachos/PartidaInspeccion.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InformacionPartidaComponent = /** @class */ (function () {
    function InformacionPartidaComponent() {
        this.partidaPrioridad = new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */]();
        this.classPrioridad = "P1";
    }
    InformacionPartidaComponent.prototype.ngOnInit = function () {
        this.MostrarDatosInspeccion();
    };
    InformacionPartidaComponent.prototype.ngOnChanges = function (change) {
        // console.log(change);
        this.partidaPrioridadAux = this.partidaPrioridad;
        this.MostrarDatosInspeccion();
    };
    InformacionPartidaComponent.prototype.MostrarDatosInspeccion = function () {
        var piezas = this.partidaPrioridad.cantidadCompra;
        this.formatoPzas = (piezas == 1) ? piezas + ' pieza.' : piezas + ' piezas.';
        this.puntaje = "+ " + this.partidaPrioridad.puntos;
        this.descripcion = this.partidaPrioridad.concepto;
        this.marca = this.partidaPrioridad.nombreProveedor;
        this.idPartida = this.partidaPrioridad.codigo;
        this.prioridad = this.partidaPrioridad.prioridad;
        this.oc = this.partidaPrioridad.compra;
        this.pedimento = this.partidaPrioridad.pedimento;
        if (this.marca.toLowerCase() !== 'usp' && (this.partidaPrioridad.cantidad !== undefined && this.partidaPrioridad.cantidad !== null) && (this.partidaPrioridad.unidad !== undefined && this.partidaPrioridad.unidad !== null)) {
            this.presentacion = '(' + this.partidaPrioridad.cantidad + ' ' + this.partidaPrioridad.unidad + ')';
        }
        else {
            this.presentacion = '';
        }
        this.tipoManejo(this.partidaPrioridad.manejo);
        this.mostrarPrioridad(this.partidaPrioridad.prioridad);
        this.mostrarFolio(this.pedimento, this.oc);
        // Datos del tooltip
        this.fechaFEE = this.partidaPrioridad.fechaEstimadaEntrega;
        this.diasRestantes = this.partidaPrioridad.diasRestantes;
        this.pFEE = this.partidaPrioridad.puntosFEE;
        this.pManejo = this.partidaPrioridad.puntosManejo;
        this.pRuta = this.partidaPrioridad.puntosRuta;
        this.pParciales = this.partidaPrioridad.puntosRParciales;
        this.pArribo = this.partidaPrioridad.puntosUDArribo;
        this.pControl = this.partidaPrioridad.puntosControl;
        // Datos de pruebas
        // this.pParciales= 0;
        // Booleanos para mostrar datos.
        this.mostrarFEE = this.ocultarDatos(this.pFEE);
        this.mostrarManejo = this.ocultarDatos(this.pManejo);
        this.mostrarRuta = this.ocultarDatos(this.pRuta);
        this.mostrarParciales = this.ocultarDatos(this.pParciales);
        this.mostrarArribo = this.ocultarDatos(this.pArribo);
        this.mostrarControl = this.ocultarDatos(this.pControl);
        if (this.pedimento != null || this.pedimento !== undefined) {
            this.banderaTxt = true;
        }
        else {
            this.banderaTxt = false;
        }
    };
    InformacionPartidaComponent.prototype.tipoManejo = function (manejo) {
        this.iconoCongelacion = false;
        this.iconoRefrigeracion = false;
        this.iconoAmbiente = false;
        if (this.partidaPrioridad.tipo.toLowerCase() !== 'publicaciones') {
            if (manejo === 'Congelacion' || manejo === 'Congelación') {
                this.iconoCongelacion = true;
            }
            else if (manejo === 'Refrigeracion' || manejo === 'Refrigeración') {
                this.iconoRefrigeracion = true;
            }
            else if (manejo === 'Ambiente') {
                this.iconoAmbiente = true;
            }
            else {
                console.log('No se ha encontrado un tipo de manejo para esta partida.');
            }
        }
        else {
            this.iconoAmbiente = true;
        }
    };
    InformacionPartidaComponent.prototype.mostrarPrioridad = function (prioridad) {
        if (prioridad == "P1") {
            this.classPrioridad = "P1";
        }
        else if (prioridad == "P2") {
            this.classPrioridad = "P2";
        }
        else if (prioridad == "P3") {
            this.classPrioridad = "P3";
        }
        else {
            console.log("Algo ha salido mal...");
        }
    };
    InformacionPartidaComponent.prototype.mostrarFolio = function (pedimento, oc) {
        if (pedimento === null && oc !== null) {
            this.oc = 'OC-' + oc;
        }
        else if (pedimento !== null && oc == null) {
            this.pedimento = "PD-" + pedimento;
        }
        else {
            console.log("no hay orden de compra ni pedimento, FAVOR DE VERIFICAR!");
        }
    };
    InformacionPartidaComponent.prototype.ocultarDatos = function (dato) {
        if (dato > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */])
    ], InformacionPartidaComponent.prototype, "partidaPrioridad", void 0);
    InformacionPartidaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-informacion-partida',
            template: __webpack_require__("./src/app/components/responsableae/componentes/informacion-partida/informacion-partida.component.html"),
            styles: [__webpack_require__("./src/app/components/responsableae/componentes/informacion-partida/informacion-partida.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InformacionPartidaComponent);
    return InformacionPartidaComponent;
}());



/***/ }),

/***/ "./src/app/components/responsableae/componentes/iniciar-inspeccion/iniciar-inspeccion.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height:100%; display: flex; flex-direction: column;\" class=\"iniciarInspeccion\" *ngIf=\"vistaInicialActiva\">\n  <div style=\"height:28%; display: flex;\"> </div>\n  <div class=\"\" style=\"display: flex; height:9.5% \">\n    <div class=\"titulo\">\n      <h1>INICIAR INSPECCIÓN</h1>\n    </div>\n  </div>\n  <div style=\"height:18.5%; display: flex;\"> </div>\n  <div (click)=\"iniciaInspeccion()\" class=\"btnGrabar\">\n    <div style=\"display: flex;padding-right: 15px\">\n      <label style=\"font-family: 'Novecento'; color: #FEFEFE;text-align: left;font-weight: bold;\">GRABAR </label>\n    </div>\n    <div>\n      <label class=\"up\"> </label>\n    </div>\n  </div>\n\n  <div style=\"height:37%; display: flex; \"></div>\n</div>\n<pn-vista-secciones-inspeccion *ngIf=\"!vistaInicialActiva\" style=\"min-width: 1608px; width: 100%; padding-right: 20px; height:100%\" [partidaPrioridad]=\"partidaPrioridad\" (reiniciarVista)=\"reinicioDeVista($event)\">\n</pn-vista-secciones-inspeccion>\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/iniciar-inspeccion/iniciar-inspeccion.component.scss":
/***/ (function(module, exports) {

module.exports = ".iniciarInspeccion {\n  color: #9B9B9B;\n  font-family: 'Roboto';\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 100%; }\n\n.titulo {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.btnGrabar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #C1292E;\n  color: white;\n  border: none;\n  width: 248px;\n  height: 51px;\n  font-size: 30px;\n  cursor: pointer;\n  outline: none;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\nh1 {\n  font-size: 50px;\n  font-weight: bold;\n  color: #008895; }\n\n.up {\n  border-left: 25px solid #FFFFFF;\n  border-top: 12.5px solid transparent;\n  border-bottom: 12.5px solid transparent;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/iniciar-inspeccion/iniciar-inspeccion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IniciarInspeccionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__ = __webpack_require__("./src/app/class/despachos/PartidaInspeccion.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IniciarInspeccionComponent = /** @class */ (function () {
    function IniciarInspeccionComponent(comunService) {
        this.comunService = comunService;
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.partidaPrioridad = new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */]();
        this.reiniciarVista = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.reiniciarInicialGra = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.actualizarValores = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.vistaInicialActiva = true;
    }
    IniciarInspeccionComponent.prototype.ngOnInit = function () {
    };
    IniciarInspeccionComponent.prototype.iniciaInspeccion = function () {
        this.vistaInicialActiva = false;
        this.event.emit(true);
    };
    IniciarInspeccionComponent.prototype.reinicioDeVista = function ($event) {
        if ($event) {
            this.actualizarValores.emit(true);
            this.vistaInicialActiva = true;
        }
        else if (!$event) {
            this.reiniciarVista.emit('inc');
        }
        // this.vistaInicialActiva = true;
        // this.reiniciarInicialGra.emit(true);
        console.log("enviar reinicio iniciarInspeccion");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], IniciarInspeccionComponent.prototype, "event", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */])
    ], IniciarInspeccionComponent.prototype, "partidaPrioridad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], IniciarInspeccionComponent.prototype, "reiniciarVista", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], IniciarInspeccionComponent.prototype, "reiniciarInicialGra", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], IniciarInspeccionComponent.prototype, "actualizarValores", void 0);
    IniciarInspeccionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-iniciar-inspeccion',
            template: __webpack_require__("./src/app/components/responsableae/componentes/iniciar-inspeccion/iniciar-inspeccion.component.html"),
            styles: [__webpack_require__("./src/app/components/responsableae/componentes/iniciar-inspeccion/iniciar-inspeccion.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_comun_comun_service__["a" /* ComunService */]])
    ], IniciarInspeccionComponent);
    return IniciarInspeccionComponent;
}());



/***/ }),

/***/ "./src/app/components/responsableae/componentes/inspeccion-nivel-pieza/inspeccion-nivel-pieza.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%; height:100%; position:relative; z-index: 0\">\n<textarea #input (keydown)=\"uniKeyCode($event)\"  autofocus=\"focus\"  class=\"textArea\" > </textarea>\n  <form>\n    <p class=\"titulo\">INSPECCIÓN A NIVEL PIEZA</p>\n\n    <div class=\"direccionRow\" *ngIf=\"!esPublicacion\">\n\n      <div style=\"width: 50%; display: flex; box-sizing: border-box; flex-direction: column;\">\n        <label class=\"subtitulo\">Descripción</label>\n\n        <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'90%'}\">\n          <label class=\"etiqueta\"> Presentación</label>\n          <div>\n             <p class=\"infoDato\">{{presentacion}}</p>\n          </div>\n        </div>\n\n        <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'90%', 'padding-top':'46px'}\">\n          <label class=\"etiqueta\"> Lote</label>\n          <div>\n             <p class=\"infoDato\">{{nolote}}</p>\n          </div>\n        </div>\n\n        <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'90%', 'padding-top':'43px'}\">\n          <label class=\"etiqueta\"> Caducidad</label>\n          <div>\n               <p class=\"infoDato\">{{caducidad}}</p>\n          </div>\n        </div>\n      </div>\n\n      <div style=\"width: 50%; display: flex; box-sizing: border-box; flex-direction: column\">\n        <label class=\"subtitulo\">Manejos</label>\n\n        <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'90%'}\">\n          <label class=\"etiqueta\">Almacenaje </label>\n          <div>\n            <p class=\"infoDato\">{{almacenaje}}</p>\n          </div>\n        </div>\n\n        <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'90%', 'padding-top':'43px'}\">\n          <label class=\"etiqueta\">Transportación </label>\n          <div>\n             <p class=\"infoDato\">{{transportacion}}</p>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"publicacion\" *ngIf=\"esPublicacion\" style=\"width: 100%; display: flex; box-sizing: border-box; flex-direction: column;\">\n      <label style=\"width: 97.5%\" class=\"subtitulo\">Descripción</label>\n      <div [ngStyle]=\"{'display':'flex', 'flex-direction':'row', 'width':'97.5%'}\">\n        <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'50%'}\">\n          <label class=\"etiqueta\" >Edición </label>\n          <p class=\"infoDato\">{{edicion}}</p>\n        </div>\n        <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'50%'}\">\n          <label class=\"etiqueta\">Idioma </label>\n          <p class=\"infoDato\">{{idioma}}</p>\n        </div>\n      </div>\n    </div>\n\n\n    <div style=\"width: 96.8%; padding-top: 50px\" *ngIf= \"conDocumentacion\" >\n       <p class=\"subtituloCentro\">Documentación</p>\n    </div>\n\n    <div class=\"direccionRow\" style=\"width: 100%\"  *ngIf= \"conDocumentacion\" >\n      <div class=\"doctos\">\n        <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'90%', 'padding-top':'24px'}\" >\n          <label class=\"etiqueta\"> Certificado:</label>\n          <div>\n            <img class=\"docto-img\" src=\"assets/Images/editar-pieza/docto.svg\" alt=\"docto\">\n             <p class=\"infoDato\" style=\"margin: -23px 30px;\">{{archCertificado !== undefined ? 'Certificado.pdf' : ''}}\n          </div>\n        </div>\n      </div>\n\n      <div class=\"doctos\">\n        <div [ngStyle]=\"{'flex-direction':'column', 'width':'90%', 'padding-top':'24px'}\" [style.display] = \"mostrarHoja ? 'flex':'none'\">\n          <label class=\"etiqueta\"> Hoja de Seguridad:</label>\n          <div >\n            <img class=\"docto-img\" src=\"assets/Images/editar-pieza/docto.svg\" alt=\"docto\">\n             <p class=\"infoDato\" style=\"margin: -23px 30px;\">{{archSeguridad !== undefined ? archSeguridad.nombre : ''}}</p>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </form>\n    <div class=\"pop-up\" *ngIf =\"mostrar\" style=\"display:block;\" >\n      <pq-pop-up-editar-lote  style=\"position: absolute; z-index: 1;\" [partidaPrioridad]=\"partidaPrioridad\" [pza]= \"pzaAux\"\n                              [conDocumentacion]=\"conDocumentacion\"\n                             [publicacion]= \"esPublicacion\" [vistaPieza] = \"vistaPieza\" (activo)=\"cierraEditarlote($event)\" (actualizarPieza)=\"actualizarPieza($event)\"\n                              (enviarUbicacionNoDesp)=\"recibirUbicacionNoDesp($event)\">\n                             </pq-pop-up-editar-lote>\n                             <!-- [archCertificado]=\"archCertificado\" [archSeguridad]=\"archSeguridad\"  -->\n    </div>\n    <div class=\"pop-inf\" #popInf   *ngIf =\"cambioI\">\n        <pq-pop-informativo *ngIf=\"partidaPrioridad.pasosImprimirEtiqueta\" (cambioIndex)=\"cerrarPopInf($event)\" > </pq-pop-informativo>\n        <pq-pop-escanear-qr *ngIf=\"!partidaPrioridad.pasosImprimirEtiqueta\"   (cambioIndex)=\"cerrarPopInf($event)\" [bolsa] = \"tipoBolsa\" > </pq-pop-escanear-qr>\n    </div>\n\n    <div class=\"pop-inf\" #popInf   *ngIf =\"cambioAlmacenar\">\n        <pq-pop-informativo (cambioIndex)=\"cerrarPopInf($event)\" > </pq-pop-informativo>\n    </div>\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/inspeccion-nivel-pieza/inspeccion-nivel-pieza.component.scss":
/***/ (function(module, exports) {

module.exports = ".inspeccionPartida {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.direccionRow {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.direccionColum {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.titulo {\n  font-family: \"Novecento\";\n  font-size: 21px;\n  color: #008895;\n  font-weight: bold;\n  padding-bottom: 21px; }\n\n.subtitulo {\n  font-family: \"Roboto\";\n  color: #424242;\n  font-size: 21px;\n  font-weight: bold;\n  width: 93.5%;\n  height: 30px;\n  border-bottom: 1px solid #424242; }\n\n.subtituloCentro {\n  font-family: \"Roboto\";\n  color: #424242;\n  font-size: 21px;\n  font-weight: bold;\n  width: 100%;\n  height: 30px;\n  border-bottom: 1px solid #424242; }\n\n.etiqueta {\n  font-family: \"Roboto\";\n  color: #242424;\n  font-size: 18px;\n  height: 24px;\n  padding-top: 14px; }\n\n.etiquetasGris {\n  font-family: \"Roboto\";\n  color: #9B9B9B;\n  font-size: 18px;\n  height: 24px;\n  padding-top: 14px; }\n\n.infoDato {\n  font-family: 'Roboto';\n  font-weight: 200;\n  font-size: 18px;\n  color: #242424;\n  text-align: left; }\n\n.etiqueta {\n  font-family: 'Roboto';\n  font-size: 18px;\n  color: #242424;\n  text-align: left; }\n\n.doctos {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 50%; }\n\n.docto-img {\n  width: 21px;\n  height: 27px;\n  margin-top: 5px; }\n\n.incidencia {\n  margin: 25px; }\n\n.textArea {\n  width: 105%;\n  height: 100%;\n  border: 1px solid red;\n  z-index: 1;\n  opacity: 0;\n  position: absolute; }\n\nbody.modal-open {\n  overflow: hidden;\n  position: fixed;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/inspeccion-nivel-pieza/inspeccion-nivel-pieza.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspeccionNivelPiezaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__ = __webpack_require__("./src/app/class/despachos/PartidaInspeccion.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_comun_DocumentoAdjunto_class__ = __webpack_require__("./src/app/class/comun/DocumentoAdjunto.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InspeccionNivelPiezaComponent = /** @class */ (function () {
    function InspeccionNivelPiezaComponent(comunService) {
        this.comunService = comunService;
        this.enviarUbiNoDes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.enviaPiezas = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.contador = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventCambioIndex = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.eventlistaPiezas = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.enviarConDocumentacion = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.partidaPrioridad = new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */]();
        this.archCertificado = new __WEBPACK_IMPORTED_MODULE_2__class_comun_DocumentoAdjunto_class__["a" /* DocumentoAdjunto */]();
        this.archSeguridad = new __WEBPACK_IMPORTED_MODULE_2__class_comun_DocumentoAdjunto_class__["a" /* DocumentoAdjunto */]();
        this.count = 0;
        this.totalPiezas = 5;
        this.cambioIndex = 1;
        this.acumPiezas = 1;
        this.pza = new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */]();
        this.list = new Array();
        this.pzaAux = new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */]();
        //partidaPrioridad: PartidaInspeccion;
        this.esPublicacion = false;
        this.edicion = '2017';
        this.idioma = 'Español';
        this.vistaPieza = false;
    }
    InspeccionNivelPiezaComponent.prototype.ngOnInit = function () {
        //  this.copiaPartidaPrioridad = Object.assign(new PartidaInspeccion, this.copiaPartidaPrioridad);
        var _this = this;
        // this.partidaPrioridad = Object.assign(new PartidaInspeccion, this.partidaPrioridad2);
        console.log(this.archCertificado);
        console.log(this.archSeguridad);
        if (this.archSeguridad.nombre == undefined) {
            this.mostrarHoja = false;
        }
        else {
            this.mostrarHoja = true;
        }
        //
        // if(this.archCertificado.nombre == undefined || this.archCertificado.nombre == ""){
        //     this.pza.documento = "";
        //     this.pzaAux.documento = "";
        // } else{
        //    this.pza.documento = this.partidaPrioridad.codigo + "-" + this.partidaPrioridad.lote;
        //    this.pzaAux.documento = this.partidaPrioridad.codigo + "-" + this.partidaPrioridad.lote
        // }
        this.count = 0;
        this.seconds = setTimeout(function () {
            _this.elementRef.nativeElement.focus();
        }, 500);
        this.enviaInfo();
        this.iniciarVista();
        this.listaPiezas();
        this.setPzaAux();
        this.enviarConDocumentacion.emit(this.conDocumentacion);
        console.log(this.conDocumentacion);
        //  this.cambioI = true;
    };
    InspeccionNivelPiezaComponent.prototype.ngDoCheck = function () {
        //console.log(this.pzaAux);
    };
    InspeccionNivelPiezaComponent.prototype.iniciarVista = function () {
        this.presentacion = this.partidaPrioridad.tipoPresentacion;
        this.almacenaje = this.partidaPrioridad.manejo;
        this.transportacion = this.partidaPrioridad.manejoTransporte;
        this.caducidad = this.partidaPrioridad.caducidad;
        this.nolote = this.partidaPrioridad.lote;
        if (this.partidaPrioridad.acumPiezas === undefined || this.partidaPrioridad.acumPiezas === NaN) {
            this.acumPiezas = this.partidaPrioridad.acumPiezas = 1;
        }
        else {
            this.acumPiezas = this.partidaPrioridad.acumPiezas;
        }
        this.contIncidencia = this.partidaPrioridad.contIncidencia = 0;
        this.contDespachable = this.partidaPrioridad.contDespachable = 0;
        this.totalPiezas = this.partidaPrioridad.cantidadCompra;
        if (this.partidaPrioridad.tipo === 'Publicaciones') {
            this.idioma = this.partidaPrioridad.idioma;
            this.edicion = this.partidaPrioridad.edicion;
        }
        if (this.totalPiezas == 1) {
            this.vistaPieza = true;
        }
    };
    InspeccionNivelPiezaComponent.prototype.uniKeyCode = function ($event) {
        var _this = this;
        if ($event.keyCode == 32) {
            this.count = this.count + 1;
            this.seconds = setTimeout(function () {
                if (_this.count == 1) {
                    _this.count = 0;
                    _this.partidaPrioridad.acumPiezas = _this.partidaPrioridad.acumPiezas + 1;
                    _this.partidaPrioridad.contDespachable = _this.partidaPrioridad.contDespachable + 1;
                    //  console.log("TOTAL DESPACHABLE:",   this.partidaPrioridad.contDespachable);
                    _this.enviaInfo();
                    if (_this.partidaPrioridad.acumPiezas > _this.totalPiezas) {
                        _this.partidaPrioridad.acumPiezas = _this.partidaPrioridad.acumPiezas - 1;
                        _this.tipoBolsa = "";
                        _this.cambioI = true;
                        _this.comunService.videoZindex(true);
                        _this.count = 0;
                        _this.elementRef.nativeElement.style.display = 'none';
                        _this.enviaInfo();
                    }
                }
            }, 500);
            this.seconds = setTimeout(function () {
                if (_this.count == 2) {
                    _this.comunService.videoZindex(true);
                    _this.partidaPrioridad.acumPiezas = _this.partidaPrioridad.acumPiezas;
                    _this.mostrar = true;
                    _this.count = 0;
                    _this.elementRef.nativeElement.style.display = 'none';
                    _this.enviaInfo();
                }
            }, 500);
        }
    }; //cierre metodo
    InspeccionNivelPiezaComponent.prototype.cerrarPopInf = function (dato) {
        console.log(dato);
        this.partidaPrioridad.codigoQrBolsa = dato.codigo;
        this.pop.nativeElement.style.display = 'none';
        this.comunService.videoZindex(false);
        if (dato.cambio == true)
            this.eventCambioIndex.emit(this.cambioIndex);
    };
    InspeccionNivelPiezaComponent.prototype.recibeInformacion = function (info) {
        console.log(info);
        this.presentacion = info.presentacion;
        this.almacenaje = info.almacen;
        this.caducidad = info.caducidad;
        this.transportacion = info.transportacion;
        this.nolote = info.lote;
        this.acumPiezas = info.acumPiezas;
    };
    InspeccionNivelPiezaComponent.prototype.cierraEditarlote = function (cancelar) {
        var obj;
        obj = new Object;
        this.mostrar = cancelar;
        this.comunService.videoZindex(false);
        this.count = 0;
        if (this.mostrar == false) {
            this.partidaPrioridad.acumPiezas = this.partidaPrioridad.acumPiezas;
            if (this.partidaPrioridad.acumPiezas > this.totalPiezas) {
                this.partidaPrioridad.acumPiezas = this.partidaPrioridad.acumPiezas - 1;
                this.tipoBolsa = "";
                this.cambioI = true;
                this.comunService.videoZindex(true);
                this.count = 0;
                this.elementRef.nativeElement.style.display = 'none';
            }
            else {
                this.elementRef.nativeElement.style.display = 'block';
                this.elementRef.nativeElement.focus();
            }
        }
        else {
            this.elementRef.nativeElement.style.display = 'block';
            this.elementRef.nativeElement.focus();
            this.mostrar = false;
            this.partidaPrioridad.acumPiezas = this.partidaPrioridad.acumPiezas + 1;
            if (this.list[this.partidaPrioridad.acumPiezas - 2].estadoFisico == 'No Despachable') {
                this.partidaPrioridad.contIncidencia = this.partidaPrioridad.contIncidencia + 1;
            }
            else {
                this.partidaPrioridad.contDespachable = this.partidaPrioridad.contDespachable + 1;
            }
            if (this.partidaPrioridad.acumPiezas > this.totalPiezas) {
                this.partidaPrioridad.acumPiezas = this.partidaPrioridad.acumPiezas - 1;
                if (this.partidaPrioridad.pasosImprimirEtiqueta == true) {
                    this.cambioI = true;
                }
                else {
                    if (this.partidaPrioridad.contIncidencia == this.partidaPrioridad.cantidadCompra) {
                        this.cambioAlmacenar = true;
                    }
                    else {
                        this.tipoBolsa = "";
                        this.cambioI = true;
                    }
                }
                this.comunService.videoZindex(true);
                this.count = 0;
                this.elementRef.nativeElement.style.display = 'none';
            }
            else {
                this.elementRef.nativeElement.style.display = 'block';
                this.elementRef.nativeElement.focus();
            }
        }
        this.enviaInfo();
    };
    InspeccionNivelPiezaComponent.prototype.enviaInfo = function () {
        var obj;
        obj = new Object;
        obj.tipo = 'datosNivelPieza';
        if (this.partidaPrioridad.acumPiezas === undefined || this.partidaPrioridad.acumPiezas === NaN) {
            this.partidaPrioridad.acumPiezas = this.partidaPrioridad.acumPiezas = 1;
            obj.acumPiezas = this.partidaPrioridad.acumPiezas;
        }
        else {
            this.partidaPrioridad.acumPiezas = this.partidaPrioridad.acumPiezas;
        }
        // if(this.partidaPrioridad.contDespachable == 0){
        //   this.partidaPrioridad.contDespachable = this.partidaPrioridad.contDespachable = 1;
        obj.contDespachable = this.partidaPrioridad.contDespachable;
        // } else {   this.partidaPrioridad.contDespachable = this.partidaPrioridad.contDespachable; }
        obj.contIncidencia = this.partidaPrioridad.contIncidencia;
        obj.contDespachable = this.partidaPrioridad.contDespachable;
        obj.acumPiezas = this.partidaPrioridad.acumPiezas;
        this.totalPiezas = this.partidaPrioridad.cantidadCompra;
        obj.totalPiezas = this.partidaPrioridad.cantidadCompra;
        this.enviaPiezas.emit(obj);
        console.log("objeto enviaInfo", obj);
    };
    InspeccionNivelPiezaComponent.prototype.listaPiezas = function () {
        for (var i = 0; i < this.totalPiezas; i++) {
            this.pza.codigo = this.partidaPrioridad.codigo;
            this.pza.tipoPresentacion = this.partidaPrioridad.tipoPresentacion;
            this.pza.lote = this.partidaPrioridad.lote;
            this.pza.loteOriginal = this.partidaPrioridad.lote; // lote ???
            this.pza.caducidad = this.partidaPrioridad.caducidad;
            if (this.partidaPrioridad.tipo !== 'Publicaciones') {
                var arreglo = new Array();
                arreglo = (this.partidaPrioridad.caducidad).split(' ');
                this.pza.mesCaduca = arreglo[0];
                this.pza.anoCaduca = arreglo[1];
            }
            this.pza.concepto = this.partidaPrioridad.concepto;
            this.pza.fisicamenCon = 'Si';
            this.pza.estadoFisico = 'Despachable';
            this.pza.idioma = this.partidaPrioridad.idioma; // idiomaV
            this.pza.edicion = this.partidaPrioridad.edicion; //edicionV
            this.pza.conDocumentacion = true;
            this.pza.fisicamenteCorrecto = true;
            this.pza.loteCorrecto = true;
            this.pza.descripcionCorrecta = true;
            this.pza.loteDistinto = false;
            this.pza.catCorrecto = true;
            this.pza.caducidadCorrecta = true;
            this.pza.presentacionCorrecta = true;
            this.pza.documentacionCorrecta = true;
            this.pza.despachable = true;
            this.pza.edicionCorrecta = true;
            this.pza.idiomaCorecto = true;
            this.pza.tipo = this.partidaPrioridad.tipo;
            this.pza.fabrica = this.partidaPrioridad.fabrica;
            this.pza.manejoTransporte = this.partidaPrioridad.manejoTransporte;
            this.pza.compra = this.partidaPrioridad.compra;
            this.pza.mesNum = this.partidaPrioridad.mesNum;
            this.pza.idCompra = this.partidaPrioridad.idPartidaCompra; //
            this.pza.idPPedido = this.partidaPrioridad.idPPedido;
            this.pza.fFrente = "";
            this.pza.fArriba = "";
            this.pza.fAbajo = "";
            this.pza.certificado = this.archCertificado.archivo;
            this.pza.hojaSeguridad = this.archSeguridad.archivo;
            // this.pza.control = this.partidaPrioridad.control; //
            // this.pza.cliente = this.partidaPrioridad.idCliente; //cliente  Publicaciones
            if (this.partidaPrioridad.tipo === 'Publicaciones') {
                this.pza.esPublicacion = true;
                this.esPublicacion = true;
            }
            else {
                this.pza.esPublicacion = false;
                this.esPublicacion = false;
            }
            /********************/
            /*  if (this.partidaPrioridad.tipo == 'Publicación') {
                this.pza.esPublicacion = true;
              }
              else {
                this.pza.esPublicacion = false;
              }*/
            if (this.archCertificado.nombre == undefined || this.archCertificado.nombre == "") {
                this.pza.documento = "";
            }
            else {
                this.pza.documento = this.partidaPrioridad.codigo + "-" + this.partidaPrioridad.lote;
            }
            this.list.push(Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], this.pza));
        }
        //console.log(this.list);
        this.eventlistaPiezas.emit(this.list);
    };
    InspeccionNivelPiezaComponent.prototype.actualizarPieza = function (pza) {
        //console.log(pza);
        this.list[this.partidaPrioridad.acumPiezas - 1] = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], pza);
        console.log(this.list);
        this.eventlistaPiezas.emit(this.list);
        this.setPzaAux();
    };
    InspeccionNivelPiezaComponent.prototype.setPzaAux = function () {
        if (this.partidaPrioridad !== undefined) {
            this.pzaAux.codigo = this.partidaPrioridad.codigo;
            this.pzaAux.tipoPresentacion = this.partidaPrioridad.tipoPresentacion;
            this.pzaAux.lote = this.partidaPrioridad.lote;
            this.pzaAux.loteOriginal = this.partidaPrioridad.lote; // lote ???
            this.pzaAux.caducidad = this.partidaPrioridad.caducidad;
            if (this.partidaPrioridad.tipo !== 'Publicaciones') {
                var arreglo = new Array();
                arreglo = (this.partidaPrioridad.caducidad).split(' ');
                this.pzaAux.mesCaduca = arreglo[0];
                this.pzaAux.anoCaduca = arreglo[1];
            }
            this.pzaAux.concepto = this.partidaPrioridad.concepto;
            this.pzaAux.fisicamenCon = 'Si';
            this.pzaAux.estadoFisico = "Despachable";
            this.pzaAux.idioma = this.partidaPrioridad.idioma; // idiomaV
            this.pzaAux.edicion = this.partidaPrioridad.edicion; //edicionV
            this.pzaAux.conDocumentacion = true;
            this.pzaAux.fisicamenteCorrecto = true;
            this.pzaAux.loteCorrecto = true;
            this.pzaAux.descripcionCorrecta = true;
            this.pzaAux.loteDistinto = false;
            this.pzaAux.catCorrecto = true;
            this.pzaAux.caducidadCorrecta = true;
            this.pzaAux.presentacionCorrecta = true;
            this.pzaAux.documentacionCorrecta = true;
            this.pzaAux.despachable = true;
            this.pzaAux.edicionCorrecta = true;
            this.pzaAux.idiomaCorecto = true;
            this.pzaAux.tipo = this.partidaPrioridad.tipo;
            this.pzaAux.fabrica = this.partidaPrioridad.fabrica;
            this.pzaAux.manejoTransporte = this.partidaPrioridad.manejoTransporte;
            this.pzaAux.compra = this.partidaPrioridad.compra;
            this.pzaAux.mesNum = this.partidaPrioridad.mesNum;
            this.pzaAux.idCompra = this.partidaPrioridad.idPartidaCompra; //
            this.pzaAux.idPPedido = this.partidaPrioridad.idPPedido;
            this.pzaAux.fFrente = "";
            this.pzaAux.fArriba = "";
            this.pzaAux.fAbajo = "";
            this.pzaAux.certificado = this.archCertificado;
            this.pzaAux.hojaSeguridad = this.archSeguridad;
            this.pzaAux.reporte = "";
            this.pzaAux.rechazoXInsp = null;
            this.pzaAux.rechazoXDoc = null;
            //this.pza.control = this.partidaPrioridad.control; //
            //this.pza.cliente = this.partidaPrioridad.idCliente; //cliente
            if (this.partidaPrioridad.tipo === 'Publicaciones') {
                this.pza.esPublicacion = true;
            }
            else {
                this.pza.esPublicacion = false;
            }
            if (this.archCertificado.nombre == undefined || this.archCertificado.nombre == "") {
                this.pzaAux.documento = "";
            }
            else {
                this.pzaAux.documento = this.partidaPrioridad.codigo + "-" + this.partidaPrioridad.lote;
            }
        }
    };
    InspeccionNivelPiezaComponent.prototype.recibirUbicacionNoDesp = function ($ubicacion) {
        console.log($ubicacion);
        this.enviarUbiNoDes.emit($ubicacion);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], InspeccionNivelPiezaComponent.prototype, "enviarUbiNoDes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], InspeccionNivelPiezaComponent.prototype, "enviaPiezas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], InspeccionNivelPiezaComponent.prototype, "contador", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], InspeccionNivelPiezaComponent.prototype, "eventCambioIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], InspeccionNivelPiezaComponent.prototype, "eventlistaPiezas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], InspeccionNivelPiezaComponent.prototype, "enviarConDocumentacion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */])
    ], InspeccionNivelPiezaComponent.prototype, "partidaPrioridad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__class_comun_DocumentoAdjunto_class__["a" /* DocumentoAdjunto */])
    ], InspeccionNivelPiezaComponent.prototype, "archCertificado", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__class_comun_DocumentoAdjunto_class__["a" /* DocumentoAdjunto */])
    ], InspeccionNivelPiezaComponent.prototype, "archSeguridad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], InspeccionNivelPiezaComponent.prototype, "conDocumentacion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], InspeccionNivelPiezaComponent.prototype, "elementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('popInf'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], InspeccionNivelPiezaComponent.prototype, "pop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('qr'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], InspeccionNivelPiezaComponent.prototype, "textArea", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("codigo"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], InspeccionNivelPiezaComponent.prototype, "codigo", void 0);
    InspeccionNivelPiezaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-inspeccion-nivel-pieza',
            template: __webpack_require__("./src/app/components/responsableae/componentes/inspeccion-nivel-pieza/inspeccion-nivel-pieza.component.html"),
            styles: [__webpack_require__("./src/app/components/responsableae/componentes/inspeccion-nivel-pieza/inspeccion-nivel-pieza.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_comun_comun_service__["a" /* ComunService */]])
    ], InspeccionNivelPiezaComponent);
    return InspeccionNivelPiezaComponent;
}());



/***/ }),

/***/ "./src/app/components/responsableae/componentes/inspeccion-por-prioridad/inspeccion-por-prioridad.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inspeccionPorPrioridad\">\n  <h1  *ngIf=\"mostrarPedimento || mostrarPrioridad \"> TIPO DE INSPECCIÓN</h1>\n  <h1  *ngIf=\"mostrarOrdenDeCompra\" style=\"display: flex; box-sizing: border-box; padding-left: 40px;\"> TIPO DE INSPECCIÓN</h1>\n\n  <!--Inspeccion por prioridad  -->\n  <div class=\"tipoInspeccion\" *ngIf=\"mostrarPrioridad\">\n    <label> Por Prioridad</label>\n  </div>\n  <div id=\"myProgressPrioridad\" *ngIf=\"mostrarPrioridad\">\n    <div id=\"Prioridad1\" [style.width]=\"porcentajeP1\" *ngIf=\"mostrarP1\">\n      <h2>Prioridad 1</h2>\n      <p><label>Por Inspeccionar: </label>{{formatoPzaP1 | acFormatNumber}}</p>\n      <p><label *ngIf=\"!existo\">Tiempo Estimado de Inspección: </label>{{TEIPrioridad1}}</p>\n    </div>\n    <div id=\"Prioridad2\" [style.width]=\"porcentajeP2\" *ngIf=\"mostrarP2\">\n\n      <div class=\"descripcionLargaP2\" *ngIf=\"descripcionLargaP2\">\n        <h2>Prioridad 2</h2>\n        <p><label>Por Inspeccionar: </label>{{formatoPzaP2 | acFormatNumber }} </p>\n        <p><label >Tiempo Estimado de Inspección: </label>{{TEIPrioridad2}}</p>\n      </div>\n\n      <div class=\"descripcionCortaP2\" *ngIf=\"descripcionCortaP2\">\n        <h2>P2</h2>\n        <p><label>PI: </label>{{formatoPzaP2 | acFormatNumber }} </p>\n        <p><label >TEI: </label>{{TEIPrioridad2}}</p>\n      </div>\n\n    </div>\n\n    <div id=\"Prioridad3\" [style.width]=\"porcentajeP3\" *ngIf=\"mostrarP3\">\n\n      <div class=\"descripcionLargaP3\" *ngIf=\"descripcionLargaP3\">\n        <h2>Prioridad 3</h2>\n        <p><label>Por Inspeccionar: </label>{{formatoPzaP3}}</p>\n        <p><label >Tiempo Estimado de Inspección: </label>{{TEIPrioridad3}}</p>\n      </div>\n\n      <div class=\"descripcionCortaP3\" *ngIf=\"descripcionCortaP3\">\n        <h2>P3</h2>\n        <p><label>PI: </label>{{formatoPzaP3}} </p>\n        <p><label >TEI: </label>{{TEIPrioridad3}}</p>\n      </div>\n\n    </div>\n  </div>\n\n<!-- Inspeccion por orden de compra -->\n <div class=\"inspeccionPorFolio\" >\n  <div class=\"ordenDeCompra\" *ngIf=\"mostrarOrdenDeCompra\" style=\"display: flex; box-sizing: border-box; padding-left: 40px;\">\n    <div class=\"txtOC\">\n    <div class=\"tipoTextoOC\">Por Orden de Compra </div>\n    <div class=\"datoTextoOC\">OC-{{ordenDeCompra}}</div>\n  </div>\n  </div>\n\n<!--Inspeccion por pedimento  -->\n  <div class=\"pedimento\" *ngIf=\"mostrarPedimento\" >\n  <div class=\"imgPedimento\">\n    <img class=\"img\" src='./assets/Images/pedimento.svg' style=\"width: 68px;height: 72px;\"/>\n  </div>\n  <div class=\"txtPedimento\">\n    <div class=\"tipoTexto\">Por Pedimento </div>\n    <div class=\"datoTexto\">{{pedimento}}</div>\n  </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/inspeccion-por-prioridad/inspeccion-por-prioridad.component.scss":
/***/ (function(module, exports) {

module.exports = "#myProgressPrioridad {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 110px;\n  color: #9B9B9B;\n  font-family: 'Roboto', sans-serif;\n  margin-left: 0%; }\n\n#Prioridad1 {\n  height: 100%;\n  background-color: #AF3634;\n  text-align: left;\n  line-height: 19px;\n  color: white;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  display: inline-block;\n  font-size: 20px;\n  border: 1px solid white;\n  padding-left: 10px;\n  padding-top: 6px; }\n\n#Prioridad2 {\n  height: 100%;\n  background-color: #EEB253;\n  text-align: left;\n  line-height: 19px;\n  color: white;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  display: inline-block;\n  font-size: 20px;\n  border: 1px solid white;\n  padding-left: 10px;\n  padding-top: 6px; }\n\n#Prioridad3 {\n  height: 100%;\n  background-color: #63B257;\n  text-align: left;\n  line-height: 19px;\n  color: white;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  color: white;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  display: inline-block;\n  font-size: 20px;\n  border: 1px solid white;\n  padding-left: 10px;\n  padding-top: 6px; }\n\np {\n  font-size: 11px;\n  color: white;\n  margin-top: 1%; }\n\nh1 {\n  font-size: 20px;\n  color: #008894;\n  margin-top: 2%; }\n\nh2 {\n  font-size: 22px;\n  color: white; }\n\n.tipoInspeccion {\n  margin-top: 2%;\n  margin-bottom: 2%;\n  text-align: left;\n  font-size: 24px;\n  font-weight: bold; }\n\n.pedimento {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  padding: 3%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.imgPedimento {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  padding: 3%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.txtPedimento {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  padding: 3%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.tipoTexto {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  font-size: 30px;\n  font-weight: 500;\n  font-family: 'Roboto', sans-serif; }\n\n.datoTexto {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  font-size: 30px;\n  font-family: 'Roboto', sans-serif; }\n\n.ordenDeCompra {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 121px;\n  width: 330px; }\n\n.txtOC {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.tipoTextoOC {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  font-size: 30px;\n  font-weight: 500;\n  font-family: 'Roboto';\n  padding-bottom: 3%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #424242;\n  font-weight: 400; }\n\n.datoTextoOC {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  font-size: 30px;\n  font-family: 'Roboto';\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #404040;\n  font-weight: 300; }\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/inspeccion-por-prioridad/inspeccion-por-prioridad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspeccionPorPrioridadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_despachos_PartidaInspeccion_class__ = __webpack_require__("./src/app/class/despachos/PartidaInspeccion.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_inspeccion_inspeccion_service__ = __webpack_require__("./src/app/services/inspeccion/inspeccion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InspeccionPorPrioridadComponent = /** @class */ (function () {
    function InspeccionPorPrioridadComponent(router, _pzasAInspeccionar, coreComponent, comunService) {
        this.router = router;
        this._pzasAInspeccionar = _pzasAInspeccionar;
        this.coreComponent = coreComponent;
        this.comunService = comunService;
        // inspector:string = "aHernandezM";
        this.partidaPrioridad = new __WEBPACK_IMPORTED_MODULE_2__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */]();
        // @Input() copiaUniversoPartidasInspeccion = new Array<PartidaInspeccion>();
        //Piezas por prioridad
        this.pzasP1 = 0;
        this.pzasP2 = 0;
        this.pzasP3 = 0;
    }
    InspeccionPorPrioridadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.obtenerTotalesPorInspector(this.inspector);
        //this.obtenerDatosInspector(); //Descomentar la linea para conectar con el usuario de la sesion.
        this.mostrarPartidasInspeccion();
        setTimeout(function () {
            _this.obtenerModoInspeccion();
        }, 1000);
        //this.mostrarTipoInspeccion(this.tipoInspeccion);
    };
    InspeccionPorPrioridadComponent.prototype.ngOnChanges = function (change) {
        //   console.log(change);
    };
    //Método para obtener el promedio por pieza de cada inspector.
    InspeccionPorPrioridadComponent.prototype.obtenerTotalesPorInspector = function (inspector) {
        var _this = this;
        this.inspector = __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
        // var arregloTotalInspector : any = new Array<totalesInspeccionProducto>();
        this._pzasAInspeccionar.consultaDeTotalesPorInspector(this.inspector).subscribe(function (data) {
            // console.log(data); //Pruebas
            _this.totalesInspeccionProducto1 = data.current;
            // let tiempoT = 1;
            var tiempoT = 0;
            tiempoT = _this.totalesInspeccionProducto1.promXpieza;
            _this.tiempo = tiempoT;
            _this.TEIPrioridad1 = _this.obtenerTiempoEstimado(_this.pzasP1, _this.tiempo);
            _this.TEIPrioridad2 = _this.obtenerTiempoEstimado(_this.pzasP2, _this.tiempo);
            _this.TEIPrioridad3 = _this.obtenerTiempoEstimado(_this.pzasP3, _this.tiempo);
        }, function (error) {
        });
    };
    //Mostrar listado de partidas para inspeccion.
    InspeccionPorPrioridadComponent.prototype.mostrarPartidasInspeccion = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        //Método para obtener el promedio por pieza de cada inspector.
        this._pzasAInspeccionar.obtenerPiezasPorPrioridad().subscribe(function (data) {
            // console.log(data); //Pruebas
            _this.ContadorPiezasXPrioridad1 = data.current;
            // console.log("piezasPrioridad: " + this.ContadorPiezasXPrioridad1);
            _this.pzasP1 = _this.ContadorPiezasXPrioridad1.p1;
            _this.pzasP2 = _this.ContadorPiezasXPrioridad1.p2;
            _this.pzasP3 = _this.ContadorPiezasXPrioridad1.p3;
            //Test
            _this.mostrarP1 = _this.visualizarP1(_this.pzasP1);
            _this.mostrarP2 = _this.visualizarP2(_this.pzasP2);
            _this.mostrarP3 = _this.visualizarP2(_this.pzasP3);
            _this.formatoPzaP1 = (_this.pzasP1 == 1) ? _this.pzasP1 + ' pieza' : _this.pzasP1 + ' piezas';
            _this.formatoPzaP2 = (_this.pzasP2 == 1) ? _this.pzasP2 + ' pieza' : _this.pzasP2 + ' piezas';
            _this.formatoPzaP3 = (_this.pzasP3 == 1) ? _this.pzasP3 + ' pieza' : _this.pzasP3 + ' piezas';
            _this.porcentajeP1 = _this.obtenerPorcentajeP1(_this.mostrarP1, _this.mostrarP2, _this.mostrarP3) + "%";
            _this.porcentajeP2 = _this.obtenerPorcentajeP2(_this.mostrarP1, _this.mostrarP2, _this.mostrarP3) + "%";
            _this.porcentajeP3 = _this.obtenerPorcentajeP3(_this.mostrarP1, _this.mostrarP2, _this.mostrarP3) + "%";
            console.log("filtra prioridad");
            // console.log("P1: " + this.pzasP1 + " P2: " + this.pzasP2 + " P3: " + this.pzasP3);
            /* this.partidaPrioridad = new PartidaInspeccion(); */
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    // Funciones para porcentajes
    InspeccionPorPrioridadComponent.prototype.obtenerPorcentajeP1 = function (value1, value2, value3) {
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
    InspeccionPorPrioridadComponent.prototype.obtenerPorcentajeP2 = function (value1, value2, value3) {
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
    InspeccionPorPrioridadComponent.prototype.obtenerPorcentajeP3 = function (value1, value2, value3) {
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
    InspeccionPorPrioridadComponent.prototype.visualizarP1 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            return true;
    };
    InspeccionPorPrioridadComponent.prototype.visualizarP2 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            this.descripcionLargaP2 = true;
        return true;
    };
    InspeccionPorPrioridadComponent.prototype.visualizarP3 = function (piezasPI) {
        if (piezasPI < 1) {
            return false;
        }
        else
            this.descripcionLargaP3 = true;
        return true;
    };
    InspeccionPorPrioridadComponent.prototype.obtenerTiempoEstimado = function (piezas, tPromedio) {
        var tiempo = piezas * tPromedio;
        var hours;
        var minutes;
        var seconds;
        hours = Math.floor(tiempo / 3600);
        minutes = Math.floor((tiempo % 3600) / 60);
        seconds = tiempo % 60;
        //Anteponiendo un 0 a los minutos si son menos de 10
        minutes = minutes < 10 ? '0' + minutes : minutes;
        //Validacion de pruebas para cuando el tiempo es menor o igual a 1 min.
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
    InspeccionPorPrioridadComponent.prototype.obtenerModoInspeccion = function () {
        var _this = this;
        this._pzasAInspeccionar.obtenerModoInspeccion().subscribe(function (data) {
            //this.tipoInspeccion= data.current;
            _this.tipoInspeccion = "Por prioridad";
            console.log("tipo inspeccion: " + _this.tipoInspeccion);
            _this.mostrarTipoInspeccion(_this.tipoInspeccion);
        }, function (error) {
            console.log(error);
        });
    };
    InspeccionPorPrioridadComponent.prototype.mostrarTipoInspeccion = function (tipo) {
        tipo = this.tipoInspeccion;
        this.pedimento = this.partidaPrioridad.pedimento;
        this.ordenDeCompra = this.partidaPrioridad.compra;
        //    console.log("pedimento: " + this.pedimento + " compra: " + this.ordenDeCompra);
        if (tipo == "Por prioridad") {
            this.mostrarPrioridad = true;
            if (this.pedimento != null) {
                this.mostrarPedimento = true;
                this.comunService.tipoInspeccion(false);
                //      console.log("mostrar pedimento");
            }
            else if (this.ordenDeCompra != null) {
                this.mostrarOrdenDeCompra = true;
                this.comunService.tipoInspeccion(true);
                //      console.log("mostrar Orden de compra");
            }
            //    console.log("mostrar prioridad");
        }
        else if (tipo == "Por pedimento") {
            if (this.pedimento != null) {
                this.mostrarPedimento = true;
                this.comunService.tipoInspeccion(false);
                //      console.log("mostrar pedimento");
            }
            else if (this.ordenDeCompra != null) {
                this.mostrarOrdenDeCompra = true;
                this.comunService.tipoInspeccion(true);
                //      console.log("mostrar Orden de compra");
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */])
    ], InspeccionPorPrioridadComponent.prototype, "partidaPrioridad", void 0);
    InspeccionPorPrioridadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-inspeccion-por-prioridad',
            template: __webpack_require__("./src/app/components/responsableae/componentes/inspeccion-por-prioridad/inspeccion-por-prioridad.component.html"),
            styles: [__webpack_require__("./src/app/components/responsableae/componentes/inspeccion-por-prioridad/inspeccion-por-prioridad.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_inspeccion_inspeccion_service__["a" /* InspeccionService */], __WEBPACK_IMPORTED_MODULE_5__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_6__services_comun_comun_service__["a" /* ComunService */]])
    ], InspeccionPorPrioridadComponent);
    return InspeccionPorPrioridadComponent;
}());



/***/ }),

/***/ "./src/app/components/responsableae/componentes/pop-ups/pop-confirmacion/pop-confirmacion.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <button type=\"button\" class=\"btnControlPrincipal\" onclick=\"document.getElementById('id01').style.display='block'\">btn</button> -->\n\n<!-- <img src=\"./assets/Images/editar-pieza/caja_vacia.svg\" alt=\"\" style=\"width:30px; height:30px; cursor:pointer;\" onclick=\"document.getElementById('pop-confirmacion').style.display='block'\" > -->\n<div class=\"w3-container\">\n<!--DIV INICIAL-->\n<div id=\"pop-confirmacion\" class=\"modal\" #pop>\n<div class=\"modal-content\">\n  <header class=\"header\" style=\"flex-direction:row\">\n  PROQUIFA NET\n  <!-- <img src=\"./assets/Images/Images/cerrar_blanco.svg\" alt=\"cerrar\" (click)=\"cerrar()\"> -->\n  </header>\n\n  <div class=\"contenido\">\n     <div class=\"datos\">\n\n      <label>¿Estas seguro de que faltan {{pzasE - (pzasI -1)}} piezas? </label>\n      <p>Piezas Esperadas: {{pzasE}}</p>\n      <p style=\"color:#DF0101;\">Piezas Inspeccionadas:{{pzasI -1}}</p>\n    </div>\n\n  </div>\n\n  <div class=\"footer\">\n      <div type=\"submit\" class=\"btnCancelar\" (click)=\"cerrar()\" > <label>CANCELAR</label> </div>\n      <div type=\"submit\" class=\"btnAceptar\" (click)=\"cambioIndex()\" > <label>ACEPTAR</label> </div>\n  </div>\n</div>\n</div>\n<!--FIN DIV INICIO-->\n</div>\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/pop-ups/pop-confirmacion/pop-confirmacion.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal {\n  z-index: 3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(255, 255, 255, 0.7);\n  font-family: 'Roboto', sans-serif; }\n\n.modal-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  margin: auto;\n  text-align: center;\n  background-color: white;\n  position: relative;\n  padding: 0;\n  outline: 0;\n  max-width: 630px;\n  width: 630px;\n  height: 385px;\n  max-height: 385px;\n  color: #424242;\n  border: 1px solid #008894;\n  border-radius: 20px;\n  font-family: 'Roboto', sans-serif; }\n\n.header {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  background-color: #008894;\n  border: 1px solid #008894;\n  border-radius: 19px 19px 0 0;\n  color: white;\n  font-family: 'Novecento';\n  font-weight: bold;\n  font-size: 27px;\n  height: 55px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 15px; }\n\n.contenido {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n      order: 1;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  width: 100%;\n  height: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n  color: #424242; }\n\n.footer {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n      order: 1;\n  -webkit-box-flex: 0;\n  -ms-flex: 0 1 auto;\n      flex: 0 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  height: 14%;\n  padding-left: 3%;\n  padding-right: 3%;\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.datos {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n      order: 1;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n  width: 100%; }\n\n.datos > label {\n    font-family: 'Roboto';\n    font-weight: bold;\n    font-size: 25px;\n    color: #666666;\n    text-align: center;\n    padding: 48px 0; }\n\n.datos > p {\n    font-family: 'Roboto';\n    font-weight: bold;\n    font-size: 25px;\n    color: #39B54A;\n    text-align: center;\n    padding-top: 2%; }\n\n.btnCancelar {\n  width: 220px;\n  height: 30px;\n  background: #338A9C;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer; }\n\n.btnCancelar > label {\n    font-family: 'Novecento';\n    font-size: 21px;\n    font-weight: bold;\n    color: white;\n    height: 100%;\n    padding-top: 1.8%;\n    cursor: pointer; }\n\n.btnAceptar {\n  width: 220px;\n  height: 30px;\n  background: #338A9C;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer; }\n\n.btnAceptar > label {\n    font-family: 'Novecento';\n    font-size: 21px;\n    font-weight: bold;\n    color: white;\n    height: 100%;\n    padding-top: 1.8%;\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/pop-ups/pop-confirmacion/pop-confirmacion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopConfirmacionComponent; });
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

var PopConfirmacionComponent = /** @class */ (function () {
    function PopConfirmacionComponent() {
        this.confirmacion = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PopConfirmacionComponent.prototype.ngOnInit = function () {
    };
    PopConfirmacionComponent.prototype.cerrar = function () {
        this.pop.nativeElement.style.display = 'none';
        this.conf = false;
        this.confirmacion.emit(this.conf);
        console.log("cerrar");
    };
    PopConfirmacionComponent.prototype.abrir = function () {
        this.pop.nativeElement.style.display = 'block';
        console.log("abrir");
    };
    PopConfirmacionComponent.prototype.cambioIndex = function () {
        this.conf = true;
        this.confirmacion.emit(this.conf);
        console.log("llegue a confirmacion pop- inf", this.conf);
        this.pop.nativeElement.style.display = 'none';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("pop"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PopConfirmacionComponent.prototype, "pop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopConfirmacionComponent.prototype, "confirmacion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PopConfirmacionComponent.prototype, "pzasE", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PopConfirmacionComponent.prototype, "pzasI", void 0);
    PopConfirmacionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-pop-confirmacion',
            template: __webpack_require__("./src/app/components/responsableae/componentes/pop-ups/pop-confirmacion/pop-confirmacion.component.html"),
            styles: [__webpack_require__("./src/app/components/responsableae/componentes/pop-ups/pop-confirmacion/pop-confirmacion.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopConfirmacionComponent);
    return PopConfirmacionComponent;
}());



/***/ }),

/***/ "./src/app/components/responsableae/componentes/pop-ups/pop-escanear-qr/pop-escanear-qr.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pop-escanear\">\n\n  <div id=\"id01\" class=\"modal\" #pop>\n    <div class=\"modal-content\">\n\n\n      <header class=\"header\">\n        <h1> PROQUIFA NET </h1>\n      </header>\n      <textarea *ngIf=\"!infoCodigoQr\" #textarea id=\"codigo\" (keydown.enter)=\"enter()\" [(ngModel)]=\"codigoQr\"\n      style=\"position: absolute; height: 400px; width: 615px; opacity: 0;  resize:none;\" autofocus>\n               </textarea>\n      <div class=\"contenido\">\n        <div class=\"datos\">\n\n          <div class=\"alerta\">\n            <img src=\"assets/Images/flecha_blanca_encirculoverde.svg\" alt=\"\" class=\"alert\" />\n          </div>\n\n          <div class=\"alertaTxt\">\n            <p class=\"dato\" *ngIf=\"!infoCodigoQr\">\n              Escanea el código de la Bolsa {{bolsa}} que se utilizara para almacenar este producto.\n            </p>\n            <p class=\"dato\" *ngIf=\"infoCodigoQr\" style = \" width: 75%;\">\n              Bolsa {{tipoBolsa}}\n              Código QR : {{codigoQr}}\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <footer class=\"footer2\">\n        <a type=\"submit\" class=\"btnOk\" (click)=\"cerrar()\"  *ngIf=\"infoCodigoQr\">\n          <label> OK </label>\n        </a>\n\n      </footer>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/pop-ups/pop-escanear-qr/pop-escanear-qr.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal {\n  z-index: 3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(238, 238, 238, 0.8);\n  font-family: 'Roboto', sans-serif; }\n\n.modal-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  margin: auto;\n  text-align: center;\n  background-color: white;\n  position: relative;\n  padding: 0;\n  outline: 0;\n  width: 620px;\n  height: 512px;\n  color: #424242;\n  border-radius: 25px;\n  font-family: 'Roboto';\n  font-size: 20px;\n  border: 1px solid #008A98; }\n\n.header {\n  -webkit-box-ordinal-group: 1;\n  -ms-flex-order: 0;\n      order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  height: 52px;\n  background-color: #008894;\n  border: 1px solid #0ac3d3;\n  border-radius: 25px 25px 0px 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center; }\n\n.header h1 {\n    top: 20px;\n    color: white;\n    font-size: 25px;\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    font-weight: bold; }\n\n.contenido {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  width: 100%;\n  height: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #424242; }\n\n.footer2 {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  height: 15%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.btnOk {\n  width: 170px;\n  height: 30px;\n  background-color: #008A98;\n  border-color: #008A98;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer; }\n\n.btnOk > label {\n    font-family: 'Roboto';\n    font-size: 21px;\n    font-weight: bold;\n    color: white;\n    padding-top: 1.8%;\n    cursor: pointer; }\n\n.datos {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n      order: 1;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n      align-items: center;\n  width: 82%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.alerta {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto; }\n\n.alerta img.alert {\n    width: 100%;\n    height: 100%; }\n\n.alertaTxt {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  align-self: auto;\n  width: 80%;\n  padding-top: 10%;\n  line-height: normal;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.alertaTxt p {\n    width: 100%;\n    font-family: Roboto-Regular;\n    font-size: 30px;\n    color: #666666;\n    text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/pop-ups/pop-escanear-qr/pop-escanear-qr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopEscanearQrComponent; });
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

var PopEscanearQrComponent = /** @class */ (function () {
    function PopEscanearQrComponent() {
        this.cambioIndex = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.tipoBolsa = 'Inspección';
    }
    PopEscanearQrComponent.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.focus();
    };
    PopEscanearQrComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.focus();
    };
    PopEscanearQrComponent.prototype.txt = function (texto) {
        var obj;
        obj = new Object;
        obj.nombre = texto;
        this.codigoQr = obj.nombre;
        console.log(this.codigoQr);
    };
    PopEscanearQrComponent.prototype.enter = function () {
        console.log("llega enter" + this.codigoQr);
        if (this.codigoQr.length > 1) {
            this.infoCodigoQr = true;
        }
        if (this.bolsa != "")
            this.tipoBolsa = "No despachable";
    };
    PopEscanearQrComponent.prototype.cerrar = function () {
        var data = {
            cambio: true,
            codigo: this.codigoQr
        };
        this.pop.nativeElement.style.display = 'none';
        this.cambio = true;
        this.cambioIndex.emit(data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopEscanearQrComponent.prototype, "cambioIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopEscanearQrComponent.prototype, "event", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("pop"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PopEscanearQrComponent.prototype, "pop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('textarea'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PopEscanearQrComponent.prototype, "elementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PopEscanearQrComponent.prototype, "bolsa", void 0);
    PopEscanearQrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-pop-escanear-qr',
            template: __webpack_require__("./src/app/components/responsableae/componentes/pop-ups/pop-escanear-qr/pop-escanear-qr.component.html"),
            styles: [__webpack_require__("./src/app/components/responsableae/componentes/pop-ups/pop-escanear-qr/pop-escanear-qr.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopEscanearQrComponent);
    return PopEscanearQrComponent;
}());



/***/ }),

/***/ "./src/app/components/responsableae/componentes/pop-ups/pop-finalizar/pop-finalizar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"w3-container\">\n\n  <div id=\"pop-confirmacion\" class=\"modal\" #pop>\n    <div class=\"modal-content\">\n      <header class=\"header\" style=\"flex-direction:row\">\n        PROQUIFA NET\n\n      </header>\n\n      <div class=\"contenido\">\n        <div class=\"datos\">\n          <img class=\"img\" src='./assets/Images/flecha_blanca_encirculoverde.svg' style=\"padding-top: 35px\" />\n          <label class=\"mensaje\">Has terminado el proceso de inspección</label>\n          <div style=\"display:flex; justify-content:center;; \">\n            <p class=\"etiquetas\" style=\"color: #39B54A \">\n              <label class=\"mensajeEtiqueta\" [style.color]=\"tipoColor? '#39B54A':'#AF3634'\">{{mensajeEtiqueta}} :</label>\n              <label class=\"datoEtiqueta\" [style.color]=\"tipoColor? '#39B54A':'#AF3634'\"> {{pzasE}}</label>\n            </p>\n          </div>\n\n        </div>\n\n      </div>\n\n      <div class=\"footer\">\n        <div type=\"submit\" class=\"btnAceptar\" (click)=\"btnImprimir()\">\n          <label>REIMPRIMIR</label>\n        </div>\n\n        <div type=\"submit\" class=\"btnAceptar\" (click)=\"btnFinalizar()\">\n          <label>FINALIZAR</label>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/pop-ups/pop-finalizar/pop-finalizar.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal {\n  z-index: 3;\n  display: block;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgba(255, 255, 255, 0.7);\n  font-family: 'Roboto', sans-serif; }\n\n.modal-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  top: 25%;\n  margin: auto;\n  text-align: center;\n  background-color: white;\n  position: relative;\n  padding: 0;\n  outline: 0;\n  max-width: 630px;\n  width: 630px;\n  height: 385px;\n  max-height: 385px;\n  color: #424242;\n  font-size: 20px;\n  border: 1px solid #008894;\n  border-radius: 20px;\n  font-family: 'Roboto', sans-serif; }\n\n.header {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  background-color: #008894;\n  border: 1px solid #008894;\n  border-radius: 19px 19px 0 0;\n  color: white;\n  font-family: 'Novecento';\n  font-weight: bold;\n  font-size: 27px;\n  height: 55px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 15px; }\n\n.contenido {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  -ms-flex-item-align: stretch;\n  align-self: stretch;\n  width: 100%;\n  height: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n  color: #424242; }\n\n.footer {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  height: 13%;\n  padding-left: 3%;\n  padding-right: 3%;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.datos {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n      order: 1;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n  height: 40%;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box; }\n\n.datos > label {\n    font-family: 'Roboto-Regular';\n    font-size: 29px;\n    color: #323433;\n    text-align: left;\n    padding-top: 27px;\n    height: 68px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n\n.datos > div > p {\n    font-family: 'Roboto';\n    font-weight: bold;\n    font-size: 29px;\n    color: #39B54A;\n    text-align: center;\n    height: 34px; }\n\n.btnCancelar {\n  width: 220px;\n  height: 30px;\n  background: #338A9C;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer; }\n\n.btnCancelar > label {\n    font-family: 'Novecento';\n    font-size: 21px;\n    font-weight: bold;\n    color: white;\n    height: 100%;\n    padding-top: 1.8%;\n    cursor: pointer; }\n\n.btnAceptar {\n  width: 220px;\n  height: 30px;\n  background: #338A9C;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer; }\n\n.btnAceptar > label {\n    font-family: 'Novecento';\n    font-size: 21px;\n    font-weight: bold;\n    color: white;\n    height: 100%;\n    padding-top: 1.8%;\n    cursor: pointer; }\n\n.etiquetas {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 82%; }\n\n.mensajeEtiqueta {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.datoEtiqueta {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto; }\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/pop-ups/pop-finalizar/pop-finalizar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopFinalizarComponent; });
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

var PopFinalizarComponent = /** @class */ (function () {
    function PopFinalizarComponent() {
        this.finalizar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.imprimir = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.mensajeEtiqueta = 'Etiquetas despachables';
        this.tipoColor = true;
    }
    PopFinalizarComponent.prototype.ngOnInit = function () {
        this.despachable = this.pzasE;
    };
    PopFinalizarComponent.prototype.btnFinalizar = function () {
        this.pop.nativeElement.style.display = 'none';
        this.finalizar.emit();
    };
    PopFinalizarComponent.prototype.btnImprimir = function () {
        /*  this.pop.nativeElement.style.display = 'none'; */
        this.imprimir.emit();
    };
    PopFinalizarComponent.prototype.abrir = function () {
        this.pop.nativeElement.style.display = 'block';
        console.log("abrir");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("pop"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PopFinalizarComponent.prototype, "pop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopFinalizarComponent.prototype, "finalizar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopFinalizarComponent.prototype, "imprimir", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PopFinalizarComponent.prototype, "pzasE", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PopFinalizarComponent.prototype, "pzasI", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], PopFinalizarComponent.prototype, "mensajeEtiqueta", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopFinalizarComponent.prototype, "tipoColor", void 0);
    PopFinalizarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-pop-finalizar',
            template: __webpack_require__("./src/app/components/responsableae/componentes/pop-ups/pop-finalizar/pop-finalizar.component.html"),
            styles: [__webpack_require__("./src/app/components/responsableae/componentes/pop-ups/pop-finalizar/pop-finalizar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopFinalizarComponent);
    return PopFinalizarComponent;
}());



/***/ }),

/***/ "./src/app/components/responsableae/componentes/pop-ups/pop-informativo/pop-informativo.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <button type=\"button\" class=\"btnControlPrincipal\" onclick=\"document.getElementById('id01').style.display='block'\">btn</button> -->\n\n<!-- <img src=\"./assets/Images/editar-pieza/cargar.svg\" alt=\"\" style=\"width:30px; height:30px; cursor:pointer;\" onclick=\"document.getElementById('pop-inf').style.display='block'\" > -->\n<div class=\"w3-container\">\n<!--DIV INICIAL-->\n<div id=\"pop-inf\" class=\"modal\" #pop>\n<div class=\"modal-content\">\n  <header class=\"header\">\n  PROQUIFA NET\n  <!-- <img src=\"./assets/Images/Images/cerrar_blanco.svg\" alt=\"cerrar\" (click)=\"cerrar()\"> -->\n\n  </header>\n\n  <div class=\"contenido\">\n     <div class=\"datos\">\n\n      <p><label>Se han concluido las piezas por Inspeccionar,</label></p>\n      <p><label>continuá con la etapa de Almacenar.</label></p>\n        </div>\n\n  </div>\n\n  <div class=\"footer\">\n      <div type=\"submit\" class=\"btnOk\" (click)=\"cerrar()\" ><label>OK</label></div>\n  </div>\n</div>\n</div>\n<!--FIN DIV INICIO-->\n</div>\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/pop-ups/pop-informativo/pop-informativo.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal {\n  z-index: 3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgba(255, 255, 255, 0.7);\n  font-family: 'Roboto', sans-serif; }\n\n.modal-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  margin: auto;\n  text-align: center;\n  background-color: white;\n  position: relative;\n  padding: 0;\n  outline: 0;\n  max-width: 630px;\n  width: 630px;\n  height: 385px;\n  max-height: 385px;\n  color: black;\n  border: 1px solid #008894;\n  border-radius: 20px;\n  font-family: 'Roboto', sans-serif; }\n\n.header {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  background-color: #008894;\n  border: 1px solid #008894;\n  border-radius: 19px 19px 0px 0px;\n  color: white;\n  font-family: 'Novecento';\n  font-weight: bold;\n  font-size: 27px;\n  height: 55px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0px 15px; }\n\n.contenido {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n      order: 1;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  width: 100%;\n  height: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n  color: #424242; }\n\n.footer {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  height: 15%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.datos {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  height: 40%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.datos > p {\n    font-family: 'Roboto';\n    font-weight: bold;\n    font-size: 25px;\n    color: #424242;\n    text-align: center;\n    padding: 10px 0px; }\n\n.btnOk {\n  width: 220px;\n  height: 30px;\n  background: #338A9C;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer; }\n\n.btnOk > label {\n    font-family: 'Novecento';\n    font-size: 21px;\n    font-weight: bold;\n    color: white;\n    height: 100%;\n    padding-top: 1.8%; }\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/pop-ups/pop-informativo/pop-informativo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopInformativoComponent; });
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

var PopInformativoComponent = /** @class */ (function () {
    function PopInformativoComponent() {
        this.cambioIndex = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PopInformativoComponent.prototype.ngOnInit = function () {
    };
    PopInformativoComponent.prototype.cerrar = function () {
        var data = {
            cambio: true,
        };
        this.pop.nativeElement.style.display = 'none';
        this.cambioIndex.emit(data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopInformativoComponent.prototype, "cambioIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("pop"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PopInformativoComponent.prototype, "pop", void 0);
    PopInformativoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-pop-informativo',
            template: __webpack_require__("./src/app/components/responsableae/componentes/pop-ups/pop-informativo/pop-informativo.component.html"),
            styles: [__webpack_require__("./src/app/components/responsableae/componentes/pop-ups/pop-informativo/pop-informativo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopInformativoComponent);
    return PopInformativoComponent;
}());



/***/ }),

/***/ "./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-almacenar-productos/vista-almacenar-productos.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <form>\n\n        <div class=\"direccionRow\">\n\n            <div style=\"width: 20%\">\n\n            </div>\n\n            <div style=\"width:406px; display: flex; flex-direction: column; padding-right: 211px\">\n                <label class=\"subtitulo\"> ALMACENAJE</label>\n                <label class=\"etiquetasFont21\">Etiqueta</label>\n                <label style=\"height: 33px; padding-top: 12px; padding-bottom: 96px;font-size: 25px; color: #242424\">{{etiqueta}}</label>\n\n\n\n                <label class=\"etiquetasFont21\" *ngIf= \"!diferenteDeAmbiente\"> Ubicación</label>\n                <div style=\"display: flex; flex-direction: row; padding-top: 10px; padding-bottom: 96px;\" *ngIf= \"!diferenteDeAmbiente\" >\n                    <div style=\"width: 50%; display: flex; flex-direction: row;\"  >\n                        <div style=\"width: 25px;\" (click)=\"seleccionUbicacionAmbienteAux('anaquel')\">\n                            <!--<pn-radio-button-sin-label [width]=\"'25px'\" [select]=\"selectedAnaquel\" [select]=\"seleccionaAnaquel\" (click)=\"seleccionUbicacionAmbiente('anaquel')\" (emitItem)=\"onRadioChange($event)\"></pn-radio-button-sin-label>-->\n                          <div *ngIf=\"seleccionaAnaquel\">\n                            <img src=\"./assets/Images/radio_unselected.svg\" style=\"width: 25px\">\n                          </div>\n                          <div *ngIf=\"!seleccionaAnaquel\">\n                            <img src=\"./assets/Images/radio_selected.svg\" style=\"width: 25px\">\n                          </div>\n                        </div>\n                        <label class=\"labelRadios\" [style.color]=\"colorETanaquel\">Anaquel</label>\n                    </div>\n\n                    <div style=\"width: 50%; display: flex; flex-direction: row;\" >\n                        <div style=\"width: 25px; \" (click)=\"seleccionUbicacionAmbienteAux('tarima')\">\n                           <!-- <pn-radio-button-sin-label [width]=\"'25px'\" [select]=\"selectedTarima\" [select]=\"seleccionaTarima\" (emitItem)=\"onRadioChange($event)\"></pn-radio-button-sin-label>-->\n                          <div *ngIf=\"seleccionaTarima\">\n                            <img src=\"./assets/Images/radio_unselected.svg\" style=\"width: 25px\">\n                          </div>\n                          <div *ngIf=\"!seleccionaTarima\">\n                            <img src=\"./assets/Images/radio_selected.svg\" style=\"width: 25px\">\n                          </div>\n                        </div>\n                        <label class=\"labelRadios\" [style.color]=\"colorETtarima\">Tarima</label>\n                    </div>\n\n                </div>\n\n                <label class=\"etiquetasFont21\"> Manejo</label>\n                <div style=\"display: flex; flex-direction: row; align-items: center; padding-top: 17px\">\n                    <img [src]=\"imagenTipoManejo\" width=\"25px\" height=\"25px\" />\n                    <label class=\"etiquetaTipoManejo\">{{tipoManejo}}</label>\n                </div>\n\n            </div>\n\n\n            <div style=\"width: 406px; display: flex; flex-direction: column; padding-top: 46px\">\n                <label *ngIf= \"mostrarSeccionDespachable\" class=\"etiquetasFont21SinColor\" style=\"color: #39B54A \">Despachables</label>\n                <label *ngIf= \"mostrarSeccionDespachable\" style=\"height: 24px; padding-top: 17px; font-size: 18px; font-family: 'Roboto'; color: #242424\">Total de Piezas</label>\n                <label *ngIf= \"mostrarSeccionDespachable\" style=\"height: 33px; padding-top: 17px; font-size: 25px; font-family: 'Roboto'; color: #242424\">{{cantidadDespachable}}</label>\n                <label *ngIf= \"mostrarSeccionDespachable\" style=\"height: 24px; padding-top: 36px; font-size: 18px; font-family: 'Roboto'; color: #242424\">{{textoUbicacion}}</label>\n                <div style=\"width: 100%; display: flex; flex-direction: row; padding-bottom: 48px\" *ngIf= \"mostrarSeccionDespachable\" >\n\n                    <!-- <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'50%'}\" *ngIf=\"comboNumero\">\n\n                        <div style=\"width: 90%\">\n                            <pn-combo-flecha-verde [items]=\"numeros\" [title]=\"'Seleccionar'\" (valueDropList)=\"recibeValosCombo($event,'numero')\"></pn-combo-flecha-verde>\n                        </div>\n                    </div>\n\n                    <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'50%'}\">\n                        <label></label>\n                        <div style=\"width: 90%\">\n                            <pn-combo-flecha-verde [items]=\"letras\" [title]=\"'Seleccionar'\" (valueDropList)=\"recibeValosCombo($event,'letra')\" *ngIf=\"comboLetra\"></pn-combo-flecha-verde>\n                        </div>\n                    </div> -->\n                    <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'50%'}\">\n                        <label *ngIf = '!tarima' style=\"height: 33px; padding-top: 7px; font-size: 25px; font-family: 'Roboto'; color: #242424\">{{ubicacionAux}}</label>\n                        <label  *ngIf = 'tarima' style=\"height: 33px; padding-top: 7px; font-size: 25px; font-family: 'Roboto'; color: #242424\">{{ubicacionTarima}}</label>\n\n                    </div>\n\n\n                </div>\n\n\n                <label *ngIf= \"mostrarSeccionNoDespachable\" class=\"etiquetasFont21SinColor\" style=\"color: #C1272D  \">No Despachables</label>\n\n                <div style=\"width: 100%; display: flex; flex-direction: row;\" *ngIf= \"mostrarSeccionNoDespachable\">\n\n                    <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'50%'}\">\n                        <label style=\"height: 24px; padding-top: 17px; font-size: 18px; font-family: 'Roboto'; color: #242424\">Total de Piezas</label>\n                        <label style=\"height: 33px; padding-top: 7px; font-size: 25px; font-family: 'Roboto'; color: #242424\">{{cantidadNoDespachable}}</label>\n\n                    </div>\n\n                    <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'50%'}\">\n                        <label style=\"height: 24px; padding-top: 17px; font-size: 18px; font-family: 'Roboto'; color: #242424\">Ubicación</label>\n                        <label style=\"height: 33px; padding-top: 7px; font-size: 25px; font-family: 'Roboto'; color: #242424\">{{ubicacionNoDes}}</label><!-- {{ubicacionIncidencia}}-->\n                    </div>\n\n                </div>\n\n            </div>\n\n\n        </div>\n\n\n\n    </form>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-almacenar-productos/vista-almacenar-productos.component.scss":
/***/ (function(module, exports) {

module.exports = ".direccionRow {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width: 100%;\n  height: 100%; }\n\n.subtitulo {\n  font-family: \"Novecento\";\n  font-size: 21px;\n  color: #008895;\n  font-weight: bold;\n  height: 25px;\n  padding-bottom: 21px; }\n\n.etiquetasFont21 {\n  font-family: \"Roboto\";\n  font-weight: bold;\n  font-size: 21px;\n  color: #424242;\n  height: 36px;\n  width: 402px;\n  border-bottom: 1px solid #424242; }\n\n.labelRadios {\n  font-family: \"Roboto\";\n  font-size: 25px;\n  color: #008895;\n  height: 33px;\n  padding-left: 11px; }\n\n.etiquetasFont21SinColor {\n  font-family: \"Roboto\";\n  font-weight: bold;\n  font-size: 21px;\n  height: 36px;\n  width: 402px;\n  border-bottom: 1px solid #424242; }\n\n.etiquetaTipoManejo {\n  color: #008895;\n  font-size: 25px;\n  height: 27px;\n  padding-left: 15px; }\n\npn-combo-flecha-verde {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-almacenar-productos/vista-almacenar-productos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistaAlmacenarProductosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__ = __webpack_require__("./src/app/class/despachos/PartidaInspeccion.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_inspeccion_inspeccion_service__ = __webpack_require__("./src/app/services/inspeccion/inspeccion.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VistaAlmacenarProductosComponent = /** @class */ (function () {
    function VistaAlmacenarProductosComponent(comunService, _insp) {
        this.comunService = comunService;
        this._insp = _insp;
        this.selectedTarima = false;
        this.selectedAnaquel = false;
        this.partidaPrioridad = new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */]();
        this.finalizarPartida = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ubicacionImprimir = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //  @Output() guardarDocumentacion:EventEmitter<any> = new EventEmitter<any>();
        this.seleccionaAnaquel = false;
        this.seleccionaTarima = true;
        this.colorETanaquel = '#008895';
        this.colorETtarima = '#008895';
        this.imagenTipoManejo = "./assets/Images/ambiente.svg";
        this.comboLetra = true;
        this.comboNumero = true;
        this.mostrarPopFinalizar = false;
        this.mostrarSeccionDespachable = false;
        this.mostrarSeccionNoDespachable = false;
        this.diferenteDeAmbiente = false;
        this.cantidadDespachable = "";
        this.cantidadNoDespachable = "";
        this.letraAnaquel = "";
        this.numeroAnaquel = 0;
        this.ubicacion = "";
        this.textoUbicacion = "";
        this.textoManejo = "";
        this.ruta = 'http://localhost:8081/SAP/Etiqueta/FD-022416-3916-2.pdf';
        this.numeros = [
            { nombre: '1', key: 0 },
            { nombre: '2', key: 1 },
            { nombre: '3', key: 2 },
            { nombre: '4', key: 3 },
            { nombre: '5', key: 4 },
            { nombre: '6', key: 5 },
            { nombre: '7', key: 6 }
        ];
        this.letras1 = [{ nombre: "A", key: 0 }, { nombre: "B", key: 1 }, { nombre: "C", key: 2 }, { nombre: "D", key: 3 }, { nombre: "E", key: 4 }, { nombre: "F", key: 5 },
            { nombre: "G", key: 6 }, { nombre: "H", key: 7 }, { nombre: "I", key: 8 }, { nombre: "J", key: 9 }, { nombre: "K", key: 10 }, { nombre: "L", key: 11 }, { nombre: "M", key: 12 }, { nombre: "N", key: 13 },
            { nombre: "O", key: 14 }, { nombre: "P", key: 15 }, { nombre: "Q", key: 16 }, { nombre: "R", key: 17 }, { nombre: "S", key: 18 }, { nombre: "U", key: 19 }, { nombre: "V", key: 20 }, { nombre: "W", key: 21 }, { nombre: "X", key: 22 },
            { nombre: "Y", key: 23 }, { nombre: "Z", key: 24 }];
        this.letras2 = [
            { nombre: 'A', key: 0 },
            { nombre: 'B', key: 1 },
            { nombre: 'C', key: 2 },
            { nombre: 'D', key: 3 }
        ];
        this.letras3 = [
            { nombre: 'A', key: 0 },
            { nombre: 'B', key: 1 }
        ];
        this.letras = [{ nombre: '--', key: 0 },];
    }
    VistaAlmacenarProductosComponent.prototype.ngOnInit = function () {
        //  this.guardarDocumentacion.emit(true);
        this.comunService.guardarVideo(true);
        this.iniciarVista();
    };
    VistaAlmacenarProductosComponent.prototype.iniciarVista = function () {
        this.letras = new Array();
        this.cPedido = this.partidaPrioridad.cpedido;
        this.pPedido = this.partidaPrioridad.partidaPedido;
        if (this.partidaPrioridad.pasosImprimirEtiqueta == true) {
            this.etiqueta = "FD-" + this.cPedido + "-" + this.pPedido;
            if (this.partidaPrioridad.contDespachable > 0) {
                this.obtenerUbicacion(false);
            }
        }
        else {
            if (this.partidaPrioridad.contIncidencia == this.partidaPrioridad.cantidadCompra)
                this.etiqueta = "QR - " + this.partidaPrioridad.qrBolsaIncidencia;
            else {
                this.etiqueta = "QR - " + this.partidaPrioridad.codigoQrBolsa;
                this.obtenerUbicacion(false);
            }
        }
        this.recibeTipo();
        /*this.seleccionUbicacionAmbiente('anaquel');*/
        /*  this.volverAimprimir(); */
        if (this.partidaPrioridad.contDespachable > 0) {
            this.mostrarSeccionDespachable = true;
            if (this.partidaPrioridad.contDespachable == 1) {
                this.cantidadDespachable = this.partidaPrioridad.contDespachable + " " + "Pieza";
            }
            else {
                this.cantidadDespachable = this.partidaPrioridad.contDespachable + " " + "Piezas";
            }
            if (this.partidaPrioridad.manejo == "Congelación" || this.partidaPrioridad.manejo == "Congelacion") {
                this.letras = new Array();
                Array.prototype.push.apply(this.letras, this.letras3);
                this.textoUbicacion = "Ubicación";
                this.textoManejo = "Congelación";
                this.diferenteDeAmbiente = true;
            }
            else if (this.partidaPrioridad.manejo == "Refrigeración" || this.partidaPrioridad.manejo == "Refrigeracion") {
                this.letras = new Array();
                Array.prototype.push.apply(this.letras, this.letras2);
                this.textoUbicacion = "Ubicación";
                this.textoManejo = "Refrigeración";
                this.diferenteDeAmbiente = true;
            }
            else {
                if (this.partidaPrioridad.contDespachable < 1) {
                    this.diferenteDeAmbiente = true;
                }
                else {
                    this.letras = new Array();
                    Array.prototype.push.apply(this.letras, this.letras1);
                    this.textoUbicacion = "Ubicación ";
                    this.textoManejo = "Ambiente";
                    this.diferenteDeAmbiente = false;
                }
            }
            var obj;
            obj = new Object;
            obj.nombre = 'Seleccionar';
        }
        else {
            this.diferenteDeAmbiente = true;
        }
        if (this.partidaPrioridad.contIncidencia > 0) {
            this.mostrarSeccionNoDespachable = true;
            if (this.partidaPrioridad.contIncidencia == 1)
                this.cantidadNoDespachable = this.partidaPrioridad.contIncidencia + " " + "Pieza";
            else {
                this.cantidadNoDespachable = this.partidaPrioridad.contIncidencia + " " + "Piezas";
            }
            if (this.partidaPrioridad.manejo == 'Ambiente') {
                this.ubicacionIncidencia = 'Anaquel  8A';
            }
            else if (this.partidaPrioridad.manejo == "Refrigeración" || this.partidaPrioridad.manejo == "Refrigeracion") {
                this.ubicacionIncidencia = 'Refrigerador G ';
            }
            else if (this.partidaPrioridad.manejo == "Congelación" || this.partidaPrioridad.manejo == "Congelacion") {
                this.ubicacionIncidencia = 'Congelador C';
            }
        }
    };
    VistaAlmacenarProductosComponent.prototype.seleccionUbicacionAmbiente = function (vieneDe) {
        this.letras = new Array();
        if (vieneDe == 'anaquel') {
            this.tarima = false;
            this.obtenerUbicacion(true);
            // this.seleccionaAnaquel = true;
            if (this.seleccionaTarima) {
                // this.seleccionaTarima = false;
            }
        }
        if (vieneDe == 'tarima') {
            this.tarima = true;
            if (this.seleccionaAnaquel) {
                // this.seleccionaAnaquel = false;
            }
            // this.seleccionaTarima = true;
            if (this.ubicacionTarima == undefined) {
                this.obtenerUbicacion(true);
            }
        }
    };
    /// Metodo a utilizar
    VistaAlmacenarProductosComponent.prototype.seleccionUbicacionAmbienteAux = function (vieneDe) {
        this.letras = new Array();
        if (vieneDe == 'anaquel') {
            this.tarima = false;
            this.obtenerUbicacion(true);
            this.seleccionaAnaquel = false;
            if (!this.seleccionaTarima) {
                this.seleccionaTarima = true;
            }
        }
        if (vieneDe == 'tarima') {
            this.tarima = true;
            this.seleccionaTarima = false;
            if (!this.seleccionaAnaquel) {
                this.seleccionaAnaquel = true;
            }
            if (this.ubicacionTarima == undefined) {
                this.obtenerUbicacion(true);
            }
        }
    };
    VistaAlmacenarProductosComponent.prototype.ngOnChanges = function (change) {
        if (this.obtenerDatos) {
            this.mandarInformacionDevista();
        }
        else if (!this.obtenerDatos) {
            console.log("false");
        }
    };
    VistaAlmacenarProductosComponent.prototype.recibeValosCombo = function (index, tipo) {
        if (tipo == "letra") {
            this.letraAnaquel = index.nombre;
        }
        else if (tipo == "numero") {
            this.numeroAnaquel = index.nombre;
        }
    };
    VistaAlmacenarProductosComponent.prototype.mandarInformacionDevista = function () {
        if (this.tarima)
            this.ubicacion = this.idUbicacionTarima;
        else
            this.ubicacion = this.idUbicacion;
        var cantidadCompra = this.partidaPrioridad.cantidadCompra;
        var despachables = this.partidaPrioridad.contDespachable;
        var incidencia = this.partidaPrioridad.contIncidencia;
        var obj;
        obj = new Object;
        if (cantidadCompra > incidencia && cantidadCompra > despachables) {
            if (incidencia > 0) {
                if (this.partidaPrioridad.manejo == 'Ambiente')
                    obj.ubicacionIncidencia = 'Anaquel_8A';
                else if (this.partidaPrioridad.manejo == "Refrigeración" || this.partidaPrioridad.manejo == "Refrigeracion")
                    obj.ubicacionIncidencia = 'Refrigerador_1G';
                else if (this.partidaPrioridad.manejo == "Congelación" || this.partidaPrioridad.manejo == "Congelacion")
                    obj.ubicacionIncidencia = 'Congelador_C';
            }
            if (despachables > 0) {
                obj.ubicacion = this.ubicacion;
                obj.estado = "Despachable";
            }
        }
        else if (despachables == cantidadCompra) {
            obj.letraAnaquel = this.letraAnaquel;
            // obj.numAnaquel =  this.numeroAnaquel;
            obj.ubicacion = this.ubicacion;
            obj.estado = "Despachable";
            // this.finalizarPartida.emit(obj2);
        }
        else if (incidencia == cantidadCompra) {
            if (this.partidaPrioridad.manejo == 'Ambiente') {
                obj.ubicacionIncidencia = 'Anaquel_8A';
                this.ubicacionImprimir.emit('Anaquel 8A');
            }
            else if (this.partidaPrioridad.manejo == "Refrigeración" || this.partidaPrioridad.manejo == "Refrigeracion") {
                obj.ubicacionIncidencia = 'Refrigerador_1G';
                this.obtenerUbicacion(false);
            }
            else if (this.partidaPrioridad.manejo == "Congelación" || this.partidaPrioridad.manejo == "Congelacion") {
                obj.ubicacionIncidencia = 'Congelador_C';
                this.obtenerUbicacion(false);
            }
            obj.estado = "No Despachable";
            // this.finalizarPartida.emit(obj3);
        }
        this.finalizarPartida.emit(obj);
    };
    VistaAlmacenarProductosComponent.prototype.recibeTipo = function () {
        if (this.partidaPrioridad.manejo == 'Congelacion' || this.partidaPrioridad.manejo == 'Congelación') {
            this.imagenTipoManejo = "./assets/Images/congelacion.svg";
            this.tipoManejo = "Congelación";
        }
        else if (this.partidaPrioridad.manejo == 'Refrigeracion' || this.partidaPrioridad.manejo == 'Refrigeración') {
            this.imagenTipoManejo = "./assets/Images/refrigeracion.svg";
            this.tipoManejo = "Refrigeración";
        }
        else {
            this.imagenTipoManejo = "./assets/Images/ambiente.svg";
            this.tipoManejo = "Ambiente";
        }
    };
    VistaAlmacenarProductosComponent.prototype.finalizar = function () {
    };
    VistaAlmacenarProductosComponent.prototype.obtenerUbicacion = function (tipo) {
        var _this = this;
        var data;
        var ubic;
        data = new Object;
        data = {
            tarima: tipo,
            manejo: this.partidaPrioridad.manejo,
            idPPedido: this.partidaPrioridad.idPPedido,
            tipoProducto: this.partidaPrioridad.tipo,
            piezas: this.partidaPrioridad.contDespachable,
            idProducto: this.partidaPrioridad.idProducto,
            proveedor: this.partidaPrioridad.fabrica
        };
        this._insp.obtenerUbicacionInspeccion(data).subscribe(function (data) {
            console.log("Ubicacion ", data.current);
            var string = data.current;
            var parts = string.split("_");
            var respuesta = parts[0];
            var letra = parts[1];
            if (respuesta !== 'Tarima') {
                _this.ubicacionAux = respuesta + " " + letra;
                _this.idUbicacion = data.current;
            }
            else {
                _this.ubicacionTarima = respuesta + " " + letra;
                _this.idUbicacionTarima = data.current;
            }
            /* if (respuesta === 'Anaquel') {
               ubic = 'A_' + letra;
             } else if (respuesta === 'Congelador') {
               ubic = 'CN_' + letra;
             } else if (respuesta === 'Tarima') {
               ubic = 'T_' + letra;
             }*/
            if (respuesta === 'Anaquel') {
                ubic = 'A' + letra;
            }
            else if (respuesta === 'Congelador') {
                ubic = 'EC' + letra;
            }
            else if (respuesta === 'Refrigerador') {
                ubic = 'ER' + letra;
            }
            else if (respuesta === 'Tarima') {
                ubic = 'T' + letra;
            }
            _this.ubicacionImprimir.emit(ubic);
        }, function (error) {
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], VistaAlmacenarProductosComponent.prototype, "selectedTarima", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], VistaAlmacenarProductosComponent.prototype, "selectedAnaquel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VistaAlmacenarProductosComponent.prototype, "ubicacionNoDes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], VistaAlmacenarProductosComponent.prototype, "obtenerDatos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */])
    ], VistaAlmacenarProductosComponent.prototype, "partidaPrioridad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaAlmacenarProductosComponent.prototype, "finalizarPartida", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaAlmacenarProductosComponent.prototype, "ubicacionImprimir", void 0);
    VistaAlmacenarProductosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-vista-almacenar-productos',
            template: __webpack_require__("./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-almacenar-productos/vista-almacenar-productos.component.html"),
            styles: [__webpack_require__("./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-almacenar-productos/vista-almacenar-productos.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_3__services_inspeccion_inspeccion_service__["a" /* InspeccionService */]])
    ], VistaAlmacenarProductosComponent);
    return VistaAlmacenarProductosComponent;
}());



/***/ }),

/***/ "./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-escanear-pedimento/vista-escanear-pedimento.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vistaPedimento\">\n\n    <textarea  id=\"pedimento\" type=\"text\" name=\"firstname\" autofocus=\"focus\"  (keydown.enter)=\"enter()\"\n               #textarea  [(ngModel)]=\"textoPedimento\" class=\"texArea\">\n      </textarea>\n\n    <div class=\"contenedorImagen\" >\n  <div style=\"height:17%; display:flex\"></div>\n        <div style=\"height:27%; display:flex; width:50%; \">\n            <img width=\"100%\" height=\"100%\" src='./assets/Images/codigo_pedimento.svg' />\n        </div>\n\n        <div style=\"height:12%; display:flex; align-items:center; \">\n            <!-- <label class=\"textoPedimento\">[3018 8000249]</label> -->\n            <label class=\"textoPedimento\">{{pedimento}}</label>\n        </div>\n      <div style=\"height:6%; display:flex\"></div>\n      <div style=\"height:19%; display:flex; flex-direction:column;\">\n            <label class=\"textoVerde\">ESCANEAR CÓDIGO DE</label>\n                <label class=\"textoVerde\">PEDIMENTO</label>\n      </div>\n      <div style=\"height:19%; display:flex\"> </div>\n    </div>\n  <div *ngIf=\"activarPopError\">\n    <pq-alerta [alertaTxt]=\"mensaje\" (confirmacion)=\"cerrarAlert($event)\" ></pq-alerta>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-escanear-pedimento/vista-escanear-pedimento.component.scss":
/***/ (function(module, exports) {

module.exports = ".vistaPedimento {\n  font-family: 'Roboto';\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  height: 100%;\n  width: 100%;\n  position: relative; }\n\n.textoPedimento {\n  font-family: 'Roboto';\n  font-size: 50px;\n  color: #424242;\n  font-weight: lighter;\n  font-style: normal; }\n\n.textoVerde {\n  font-family: 'Novecento';\n  font-size: 50px;\n  color: #008895;\n  font-weight: bold; }\n\n.texArea {\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  opacity: 0; }\n\n.contenedorImagen {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-escanear-pedimento/vista-escanear-pedimento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistaEscanearPedimentoComponent; });
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

var VistaEscanearPedimentoComponent = /** @class */ (function () {
    function VistaEscanearPedimentoComponent() {
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.focus = true;
    }
    VistaEscanearPedimentoComponent.prototype.ngOnInit = function () {
        this.focus = true;
    };
    VistaEscanearPedimentoComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.focus();
    };
    VistaEscanearPedimentoComponent.prototype.txt = function (texto) {
        var obj;
        obj = new Object;
        obj.nombre = texto;
        this.textoPedimento = "[" + obj.nombre + "]";
        console.log(this.textoPedimento);
    };
    /*  enter() {
        console.log("llega enter" + this.textoPedimento);
        if (this.textoPedimento.length > 1) {
           this.vistaInicioInspeccionActiva = true;
         }
        this.event.emit(this.vistaInicioInspeccionActiva);
      }*/
    /*NUEVA OPCIÓN DE ENTER */
    VistaEscanearPedimentoComponent.prototype.enter = function () {
        this.pedimentoValidar = this.pedimento;
        // let pedimentoAux: [];
        // let pedimentoVer: string;
        // pedimentoAux = this.textoPedimento.trim();
        var pedimentoVer = this.textoPedimento.split(/\D/);
        if (pedimentoVer[0].length > 11) {
            this.textoPedimento = pedimentoVer[0].trim().substring(0, 11);
        }
        else {
            this.textoPedimento = pedimentoVer[0].trim();
        }
        // this.textoPedimento = pedimentoAux;
        // console.log("llega enter" + this.textoPedimento);
        var pedimentoAux = this.pedimentoValidar.split(' ');
        this.pedimentoValidar = pedimentoAux[0] + pedimentoAux[1];
        console.log("llega enter" + this.textoPedimento);
        if (this.textoPedimento.length > 1) {
            if (this.textoPedimento === this.pedimentoValidar) {
                this.vistaInicioInspeccionActiva = true;
            }
            else {
                this.mensaje = 'Pedimento incorrecto';
                this.activarPopError = true;
            }
        }
        this.textoPedimento = "";
        this.event.emit(this.vistaInicioInspeccionActiva);
    };
    VistaEscanearPedimentoComponent.prototype.cerrarAlert = function ($event) {
        this.activarPopError = false;
        this.elementRef.nativeElement.focus();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('textarea'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], VistaEscanearPedimentoComponent.prototype, "elementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaEscanearPedimentoComponent.prototype, "event", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VistaEscanearPedimentoComponent.prototype, "pedimento", void 0);
    VistaEscanearPedimentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-vista-escanear-pedimento',
            template: __webpack_require__("./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-escanear-pedimento/vista-escanear-pedimento.component.html"),
            styles: [__webpack_require__("./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-escanear-pedimento/vista-escanear-pedimento.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VistaEscanearPedimentoComponent);
    return VistaEscanearPedimentoComponent;
}());



/***/ }),

/***/ "./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-inspccionar-partida/vista-inspccionar-partida.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"border-right: 1px solid #ECEEF0; height: 100%;\">\n  <form>\n    <p class=\"subtitulo\">INSPECCIÓN A NIVEL PÁRTIDA</p>\n\n    <div class=\"direccionRow\">\n\n      <div style=\"width: 50%; min-width: 402px; display: flex; box-sizing: border-box; flex-direction: column;\" *ngIf=\"!esPublicacion\">\n        <label class=\"letraMediana\">Descripción</label>\n\n        <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'90%'}\">\n          <label class=\"etiquetas\"> Presentación</label>\n          <div>\n            <pn-combo-flecha-verde [title]=\"'Seleccionar'\" [itemSelect]=\"selectedPresentacion\" id=\"cmbPresentacion\" (valueDropList)=\"recibeValosCombo($event,'presentacion')\" [items]=\"presentacion\" [heightLi]=\"'35px'\" ></pn-combo-flecha-verde>\n          </div>\n        </div>\n\n        <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'90%', 'padding-top':'46px'}\">\n          <label class=\"etiquetas\"> Lote</label>\n          <div>\n            <pn-combo-flecha-verde [title]=\"'Seleccionar'\" (valueDropList)=\"recibeValosCombo($event,'lote')\"  id=\"cmbLote\" *ngIf= \"esUsp\" ></pn-combo-flecha-verde>\n            <input #textLote (blur)=\"cambioLote(textLote.value)\" value=\"{{loteTex}}\" class=\"cuadroTex\" id=\"textLote\"  *ngIf= \"!esUsp\" type=\"text\">\n          </div>\n        </div>\n\n        <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'90%', 'padding-top':'43px'}\">\n          <label class=\"etiquetas\"> Caducidad</label>\n          <div [ngStyle]=\"{'display':'flex', 'flex-direction':'row'}\">\n              <div style=\"width: 50%\">\n                  <pn-combo-flecha-verde [title]=\"'Seleccionar'\"  [itemSelect]=\"selectedMes\" id=\"cmbMeses\"  (valueDropList)=\"recibeValosCombo($event,'mes')\"[items]=\"meses\" [heightLi]=\"'35px'\" ></pn-combo-flecha-verde>\n                </div>\n                 <div style=\"width: 5%\"></div>\n                <div style=\"width: 45%\">\n                    <pn-combo-flecha-verde [title]=\"'Seleccionar'\" [itemSelect]=\"selectedAnio\" id=\"cmbAnios\" (valueDropList)=\"recibeValosCombo($event,'anio')\" [items]=\"anios\" [heightLi]=\"'35px'\" ></pn-combo-flecha-verde>\n                </div>\n\n          </div>\n\n        </div>\n      </div>\n\n      <div style=\"width: 50%; min-width: 402px; display: flex; box-sizing: border-box; flex-direction: column\" *ngIf=\"!esPublicacion\">\n        <label class=\"letraMediana\">Manejos</label>\n\n        <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'90%'}\">\n          <label class=\"etiquetas\">Almacenaje </label>\n          <div>\n            <pn-combo-flecha-verde [title]=\"'Seleccionar'\" [itemSelect]=\"selectedAlmacen\" (valueDropList)=\"recibeValosCombo($event,'almacenaje')\"  id=\"cmbAlmacen\" [items]=\"almacenaje\" [heightLi]=\"'35px'\"></pn-combo-flecha-verde>\n          </div>\n        </div>\n\n        <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'90%', 'padding-top':'46px'}\">\n          <label class=\"etiquetas\">Transportación </label>\n          <div>\n            <pn-combo-flecha-verde [title]=\"'Seleccionar'\"  [itemSelect]=\"selectedTransporte\" (valueDropList)=\"recibeValosCombo($event,'transportacion')\"  id=\"cmbTransportacion\" [items]=\"almacenaje\" [heightLi]=\"'35px'\" ></pn-combo-flecha-verde>\n          </div>\n        </div>\n        <!--NUEVO PARA CANTIDAD Y UNIDAD -->\n        <div [ngStyle]=\"{'display':'flex', 'flex-direction':'row', 'width':'90%', 'padding-top':'42px'}\">\n          <div style=\"width: 45%;\">\n             <label class=\"etiquetas\" style=\"display: flex\"> Cantidad</label>\n             <input #textCantidad (blur)=\"cambioCantidad(textCantidad.value)\" value=\"{{cantidadText}}\" class=\"cuadroTex\" id=\"textCantidad\"  *ngIf= \"!esUsp\" type=\"text\">\n          </div>\n          <div style=\"width: 10%\"></div>\n          <div style=\"width: 45%;display: flex; flex-direction: column;\">\n              <label class=\"etiquetas\">Unidad </label>\n              <div>\n                <pn-combo-flecha-verde *ngIf=\"activarCombo\" [title]=\"'Seleccionar'\"  [itemSelect]=\"selectedUnidad\" (valueDropList)=\"recibeValosCombo($event,'unidad')\"  id=\"cmbUnidad\" [items]=\"listaUnidadAux\" [heightLi]=\"'35px'\" ></pn-combo-flecha-verde>\n              </div>\n            <!--<label class=\"etiquetas\" style=\"display: flex\"> Unidad</label>\n            <input #textUnidad (blur)=\"cambioUnidad(textUnidad.value)\" value=\"{{unidadText}}\" class=\"cuadroTex\" id=\"textUnidad\"  *ngIf= \"!esUsp\" type=\"text\">-->\n          </div>\n        </div>\n      </div>\n      <div style=\"width: 100%; min-width: 804px; display: flex; box-sizing: border-box; flex-direction: row\" *ngIf=\"esPublicacion\">\n        <div style=\"width: 50%;\">\n          <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'90%'}\">\n            <label class=\"etiquetas\" style=\"display: flex\"> Edición</label>\n            <input #textEdicion (blur)=\"cambioEdicion(textEdicion.value)\" value=\"{{EdicionText}}\" class=\"cuadroTex\" id=\"textEdicion\"  *ngIf= \"!esUsp\" type=\"text\">\n          </div>\n        </div>\n        <div style=\"width: 50%;\">\n          <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'90%'}\">\n            <label class=\"etiquetas\">Idioma </label>\n            <div>\n              <pn-combo-flecha-verde [title]=\"'Seleccionar'\" [itemSelect]=\"selectedIdioma\" (valueDropList)=\"recibeValosCombo($event,'idioma')\"  id=\"cmbIdioma\" [items]=\"idioma\" [heightLi]=\"'35px'\"></pn-combo-flecha-verde>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div style=\"width: 95%; min-width: 780px; padding-top: 50px; display: flex;flex-direction:row; border-bottom: 1px solid #424242; \" *ngIf=\"!esPublicacion\">\n      <pq-check-gris-palomita-verde [check]=\"conDocumentacion\"   (event)=\"cambioDocumentacion($event)\" style=\"padding-right: 12px\"></pq-check-gris-palomita-verde>\n      <p class=\"letraMedianaal100SinBorde\">Aplica documentación</p>\n    </div>\n\n\n    <div class=\"direccionRow\" style=\"width: 100%; min-width: 824px;  opacity: 0.5;\" #grDocumento *ngIf=\"!esPublicacion\">\n      <div style=\"width: 50%; display: flex; box-sizing: border-box; flex-direction: column;\">\n        <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'90%', 'padding-top':'24px'}\">\n          <label class=\"etiquetasGris\"> *Certificado:</label>\n          <div style=\"padding-left: 1px;\">\n              <pq-file-upload [disabled]=\"conDocumentacion\" [formato]=\"'.pdf'\"  [docR]=\"pathCertificado\"  (enviarDocumento)=\"enviarDocumentacion($event,'Certificado')\" [partidaPrioridad]=\"partidaPrioridad\" ></pq-file-upload>\n          </div>\n          <label class=\"fontSize14Roja\">Carga obligatoria</label>\n        </div>\n      </div>\n\n      <div style=\"width: 50%; display: flex; box-sizing: border-box; flex-direction: column;\">\n        <div [ngStyle]=\"{'display':'flex', 'flex-direction':'column', 'width':'90%', 'padding-top':'24px'}\">\n          <label class=\"etiquetasGris\"> Hoja de Seguridad:</label>\n          <div style=\"padding-left: 1px;\">\n            <pq-file-upload  [disabled]=\"conDocumentacion\" [docR]=\"pathHojaSeg\"  (enviarDocumento)=\"enviarDocumentacion($event,'HojaSeguridad')\" [partidaPrioridad]=\"partidaPrioridad\" ></pq-file-upload>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-inspccionar-partida/vista-inspccionar-partida.component.scss":
/***/ (function(module, exports) {

module.exports = ".inspeccionPartida {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border: 2px solid blue; }\n\n.subtitulo {\n  font-family: \"Novecento\";\n  font-size: 21px;\n  color: #008895;\n  font-weight: bold;\n  padding-bottom: 21px; }\n\n.direccionRow {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.direccionColum {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.letraMediana {\n  font-family: \"Roboto\";\n  color: #424242;\n  font-size: 21px;\n  font-weight: bold;\n  width: 90%;\n  height: 30px;\n  border-bottom: 1px solid #424242; }\n\n.letraMedianaal100 {\n  font-family: \"Roboto\";\n  color: #424242;\n  font-size: 21px;\n  font-weight: bold;\n  width: 100%;\n  height: 30px;\n  border-bottom: 1px solid #424242; }\n\n.letraMedianaal100SinBorde {\n  font-family: \"Roboto\";\n  color: #424242;\n  font-size: 21px;\n  font-weight: bold;\n  width: 100%;\n  height: 30px; }\n\n.etiquetas {\n  font-family: \"Roboto\";\n  color: #242424;\n  font-size: 18px;\n  height: 24px;\n  padding-top: 14px; }\n\n.etiquetasGris {\n  font-family: \"Roboto\";\n  color: #9B9B9B;\n  font-size: 18px;\n  height: 24px;\n  padding-top: 14px; }\n\n.fontSize14Roja {\n  font-family: \"Roboto\";\n  color: #C1272D;\n  font-size: 14px;\n  padding-top: 8px; }\n\n.formulario .checkbox {\n  /* position: absolute; */\n  top: 50%;\n  font-family: 'Roboto';\n  font-weight: bold;\n  font-size: 21px;\n  color: #424242;\n  text-align: left;\n  left: 0;\n  width: 100%; }\n\n.formulario .checkbox label {\n  display: inline-block;\n  cursor: pointer;\n  position: relative;\n  padding: 2px 1px 3px 40px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  left: 0; }\n\n.formulario .checkbox label:before {\n  content: \"\";\n  display: inline-block;\n  width: 24px;\n  height: 23px;\n  position: absolute;\n  left: 15px;\n  border-radius: 50%;\n  background: none;\n  border: 1px solid #AFAEB4;\n  top: -1px; }\n\n.formulario .checkbox label:before {\n  border-radius: 0;\n  left: 0; }\n\n.formulario .checkbox input[type=\"checkbox\"] {\n  display: none;\n  position: absolute;\n  -webkit-transform: scale(2);\n  transform: scale(2.3);\n  z-index: 1;\n  opacity: 0;\n  cursor: pointer;\n  top: 3px;\n  left: 5px; }\n\n.cuadroTex {\n  width: 100%;\n  height: 30px;\n  font-family: 'Roboto';\n  font-weight: lighter;\n  font-size: 18px;\n  text-align: left;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border: 1px solid #ECEEF0;\n  outline-style: none; }\n\n.formulario .checkbox input[type=\"checkbox\"]:checked + label:before {\n  display: block;\n  background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 16.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22 %5B%09%3C!ENTITY ns_extend %22http%3A%2F%2Fns.adobe.com%2FExtensibility%2F1.0%2F%22%3E%09%3C!ENTITY ns_ai %22http%3A%2F%2Fns.adobe.com%2FAdobeIllustrator%2F10.0%2F%22%3E%09%3C!ENTITY ns_graphs %22http%3A%2F%2Fns.adobe.com%2FGraphs%2F1.0%2F%22%3E%09%3C!ENTITY ns_vars %22http%3A%2F%2Fns.adobe.com%2FVariables%2F1.0%2F%22%3E%09%3C!ENTITY ns_imrep %22http%3A%2F%2Fns.adobe.com%2FImageReplacement%2F1.0%2F%22%3E%09%3C!ENTITY ns_sfw %22http%3A%2F%2Fns.adobe.com%2FSaveForWeb%2F1.0%2F%22%3E%09%3C!ENTITY ns_custom %22http%3A%2F%2Fns.adobe.com%2FGenericCustomNamespace%2F1.0%2F%22%3E%09%3C!ENTITY ns_adobe_xpath %22http%3A%2F%2Fns.adobe.com%2FXPath%2F1.0%2F%22%3E%5D%3E%3Csvg version%3D%221.1%22 id%3D%22Capa_1%22 xmlns%3Ax%3D%22%26ns_extend%3B%22 xmlns%3Ai%3D%22%26ns_ai%3B%22 xmlns%3Agraph%3D%22%26ns_graphs%3B%22%09 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22 width%3D%2225px%22 height%3D%2224px%22%09 viewBox%3D%220 0 25 24%22 enable-background%3D%22new 0 0 25 24%22 xml%3Aspace%3D%22preserve%22%3E%3Cmetadata%3E%09%3Csfw  xmlns%3D%22%26ns_sfw%3B%22%3E%09%09%3Cslices%3E%3C%2Fslices%3E%09%09%3CsliceSourceBounds  width%3D%2225%22 height%3D%2223.966%22 bottomLeftOrigin%3D%22true%22 y%3D%22-23.959%22 x%3D%220%22%3E%3C%2FsliceSourceBounds%3E%09%3C%2Fsfw%3E%3C%2Fmetadata%3E%3Cpath fill-rule%3D%22evenodd%22 clip-rule%3D%22evenodd%22 fill%3D%22%23008894%22 d%3D%22M24.369%2C0.559c-0.307-0.248-1.827-0.997-3.021-0.225%09c0%2C0-0.953%2C0.89-2.358%2C2.283l-0.606%2C0.611c-1.174%2C1.169-2.572%2C2.6-3.999%2C4.143c-2.369%2C2.547-4.77%2C5.699-6.508%2C8.104l-3.289-4.688%09C3.812%2C9.291%2C2.813%2C8.559%2C1.33%2C9.117c-1.488%2C0.559-1.57%2C2.312-1.009%2C3.791l4.355%2C9.006c0%2C0%2C0.004%2C0.019%2C0.007%2C0.025%09c0.197%2C0.485%2C0.396%2C0.906%2C0.785%2C1.265c1.167%2C1.068%2C2.983%2C0.993%2C4.061-0.161c0%2C0%2C4.277-7.249%2C8.848-12.172%09c3.356-3.627%2C6.29-7.429%2C6.29-7.429C25.418%2C2.175%2C24.715%2C0.846%2C24.369%2C0.559L24.369%2C0.559z%22%2F%3E%3C%2Fsvg%3E\"); }\n\n.formulario .checkbox input[type=\"checkbox\"]:checked + label {\n  color: #000; }\n\npn-combo-flecha-verde {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-inspccionar-partida/vista-inspccionar-partida.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistaInspccionarPartidaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__ = __webpack_require__("./src/app/class/despachos/PartidaInspeccion.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_comun_DocumentoAdjunto_class__ = __webpack_require__("./src/app/class/comun/DocumentoAdjunto.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_inspeccion_inspeccion_service__ = __webpack_require__("./src/app/services/inspeccion/inspeccion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VistaInspccionarPartidaComponent = /** @class */ (function () {
    function VistaInspccionarPartidaComponent(comunService, _inspService) {
        this.comunService = comunService;
        this._inspService = _inspService;
        this.actualizarPartida = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.enviarDocumento = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.enviarConDocumentacion = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.iniciaVideo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.partidaPrioridad = new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */]();
        this.archCertificado = new __WEBPACK_IMPORTED_MODULE_2__class_comun_DocumentoAdjunto_class__["a" /* DocumentoAdjunto */]();
        this.archSeguridad = new __WEBPACK_IMPORTED_MODULE_2__class_comun_DocumentoAdjunto_class__["a" /* DocumentoAdjunto */]();
        this.esUsp = false;
        this.esPublicacion = false;
        this.pathHojaSeg = [];
        this.pathCertificado = [];
        this.rutaGeneral = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        this.path = this.rutaGeneral.rutaGeneral;
        this.idioma = [
            /*  { nombre: '--NINGUNO--', key: 0 }, */
            { nombre: 'Español', key: 0 },
            { nombre: 'Ingles', key: 1 }
        ];
        this.presentacion = [
            /*  { nombre: '--NINGUNO--', key: 0 }, */
            { nombre: 'Bolsa de aluminio', key: 0 },
            { nombre: 'Vial', key: 1 },
            { nombre: 'Blister', key: 2 },
            { nombre: 'Frasco', key: 3 },
            { nombre: 'Ampolleta', key: 4 },
            { nombre: 'Caja', key: 5 }
        ];
        this.almacenaje = [
            /* { nombre: '--NINGUNO--', key: 0 }, */
            { nombre: 'Congelación', key: 0 },
            { nombre: 'Ambiente', key: 1 },
            { nombre: 'Refrigeración', key: 2 }
        ];
        this.meses = [
            /*  { nombre: '--NINGUNO--', key: 0 }, */
            { nombre: '--ND--', key: 0 },
            { nombre: 'Enero', key: 1 },
            { nombre: 'Febrero', key: 2 },
            { nombre: 'Marzo', key: 3 },
            { nombre: 'Abril', key: 4 },
            { nombre: 'Mayo', key: 5 },
            { nombre: 'Junio', key: 6 },
            { nombre: 'Julio', key: 7 },
            { nombre: 'Agosto', key: 8 },
            { nombre: 'Septiembre', key: 9 },
            { nombre: 'Octubre', key: 10 },
            { nombre: 'Noviembre', key: 11 },
            { nombre: 'Diciembre', key: 12 }
        ];
        this.anios = new Array();
        this.anios2 = new Array();
        this.listaUnidadAux = [];
        this.archivoAdjunto = new __WEBPACK_IMPORTED_MODULE_2__class_comun_DocumentoAdjunto_class__["a" /* DocumentoAdjunto */]();
    }
    VistaInspccionarPartidaComponent.prototype.ngOnInit = function () {
        this.obtenerComboUnidad();
        this.grabar = true;
        //   this.comunService.guardarVideo(false);
        this.iniciaVideo.emit(this.grabar);
        //console.log("")
        this.creacionListaCmbAno();
        this.iniciarVista();
        this.cambioDocumentacion(this.conDocumentacion);
        console.log(this.conDocumentacion);
    };
    VistaInspccionarPartidaComponent.prototype.obtenerComboUnidad = function () {
        var _this = this;
        var tipo = 'Unidad';
        this._inspService.obtenerComboUnidad(tipo).subscribe(function (data) {
            _this.listaUnidad = data.current;
            for (var i = 0; i < _this.listaUnidad.length; i++) {
                _this.listaUnidadAux.push({ nombre: _this.listaUnidad[i].valor, key: i });
            }
            _this.activarCombo = true;
            console.log('Soy unidad -->', _this.listaUnidadAux);
        });
    };
    VistaInspccionarPartidaComponent.prototype.iniciarVista = function () {
        if (this.partidaPrioridad.tipo === 'Publicaciones') {
            this.esPublicacion = true;
            var obj;
            obj = new Object;
            obj.nombre = 'Seleccionar';
            this.selectedIdioma = obj;
        }
        else {
            this.esPublicacion = false;
        }
        var fechaHoy = new Date();
        var obj;
        obj = new Object;
        if (this.partidaPrioridad.tipoPresentacion !== null) {
            obj.nombre = this.partidaPrioridad.tipoPresentacion;
        }
        else {
            obj.nombre = 'Seleccionar';
        }
        this.selectedPresentacion = obj;
        var obj;
        obj = new Object;
        if (this.partidaPrioridad.manejo !== null) {
            if (this.partidaPrioridad.manejo === 'Congelacion')
                obj.nombre = 'Congelación';
            else
                obj.nombre = this.partidaPrioridad.manejo;
        }
        else {
            obj.nombre = 'Seleccionar';
        }
        this.selectedAlmacen = obj;
        var obj;
        obj = new Object;
        if (this.partidaPrioridad.manejoTransporte !== null) {
            if (this.partidaPrioridad.manejoTransporte === 'Congelacion')
                obj.nombre = 'Congelación';
            else
                obj.nombre = this.partidaPrioridad.manejoTransporte;
        }
        else {
            obj.nombre = 'Seleccionar';
        }
        this.selectedTransporte = obj;
        if (this.partidaPrioridad.caducidad == null) {
            var obj;
            obj = new Object;
            obj.nombre = "Seleccionar";
            this.selectedAnio = obj;
        }
        else {
            var obj;
            obj = new Object;
            obj.nombre = this.partidaPrioridad.mesCaduca;
            this.selectedMes = obj;
            var obj;
            obj = new Object;
            obj.nombre = this.partidaPrioridad.anoCaduca;
            this.selectedAnio = obj;
        }
        if (this.partidaPrioridad.unidad !== null) {
            var obj;
            obj = new Object;
            obj.nombre = this.partidaPrioridad.unidad;
            this.selectedUnidad = obj;
        }
        else {
            var obj;
            obj = new Object;
            obj.nombre = "Seleccionar";
            this.selectedUnidad = obj;
        }
        if (this.partidaPrioridad.idProveedor !== 44) {
            this.loteTex = this.partidaPrioridad.lote;
        }
        else {
            this.loteTex = this.partidaPrioridad.lote;
        }
        if (this.partidaPrioridad.fabrica === 'USP') {
        }
        /********SE agrego unidad y cantidad****/
        this.cantidadText = this.partidaPrioridad.cantidad;
        this.unidadText = this.partidaPrioridad.unidad;
        /**************************************/
        var fabricante = this.partidaPrioridad.idFabricante;
        var nombreCertificado = this.partidaPrioridad.documentacion;
        var nombreHoja = this.partidaPrioridad.sds;
        if (nombreCertificado) {
            this.conDocumentacion = true;
            var nombreCertificado_1 = this.partidaPrioridad.documentacion + '.pdf';
            this.activarCargadaCerti = false;
            var pathCertificado = this.path + 'Certificados/' + fabricante + '/' + this.partidaPrioridad.documentacion + '.pdf';
            this.pathCertificado = [{ path: pathCertificado, name: nombreCertificado_1 }];
            this.archivoAdjunto.nombre = "Certificado.pdf";
            // this.archivoAdjunto.cargadoPorSistema = true;
            var obj;
            obj = new Object;
            obj.doc = this.archivoAdjunto;
            obj.tipo = 'Certificado';
            this.enviarDocumento.emit(obj); // Se agrego por que si no, no deja pasar
            this.cambioDocumentacion(true); /****Cambi*******/
        }
        else {
            this.activarCargadaCerti = true;
            this.pathCertificado = [{ path: ' ', name: '' }];
        }
        if (nombreHoja) {
            var nombreHoja_1 = this.partidaPrioridad.sds + '.pdf';
            this.activarCargaDoc = false;
            var pathHoja = this.path + 'HojasSeguridad/' + fabricante + '/' + this.partidaPrioridad.sds + '.pdf';
            this.pathHojaSeg = [{ path: pathHoja, name: nombreHoja_1 }];
            this.archivoAdjunto.nombre = "HojaSeguridad.pdf";
            // this.archivoAdjunto.cargadoPorSistema = true;
            var obj;
            obj = new Object;
            obj.doc = this.archivoAdjunto;
            obj.tipo = 'HojaSeguridad';
            this.enviarDocumento.emit(obj); // Se agrego por que si no, no deja pasar
        }
        else {
            this.activarCargaDoc = true;
        }
        this.documentacion = true;
        // this.enviarConDocumentacion.emit(false);
        // let url = this.pahtDoc + 'GestorEnvio/Fedex/' + data.current.File;
    };
    VistaInspccionarPartidaComponent.prototype.creacionListaCmbAno = function () {
        var list = new Array();
        var obj;
        var fecha = new Date();
        var anoAct;
        var limiteAnos = 0;
        var contLlave = 0;
        anoAct = fecha.getFullYear();
        limiteAnos = anoAct + 10;
        console.log("año" + anoAct);
        obj = new Object;
        obj.nombre = "--ND--";
        obj.key = 0;
        list.push(obj);
        contLlave = 1;
        for (var i = anoAct; i < limiteAnos; i++) {
            obj = new Object;
            obj.nombre = i + "";
            obj.key = contLlave;
            list.push(obj);
            contLlave = contLlave + 1;
        }
        this.anios = list;
    };
    VistaInspccionarPartidaComponent.prototype.recibeValosCombo = function (index, tipo) {
        var obj;
        obj = new Object;
        obj.tipo = tipo;
        obj.item = index;
        this.actualizarPartida.emit(obj);
    };
    VistaInspccionarPartidaComponent.prototype.cambioLote = function (texto) {
        var obj;
        obj = new Object;
        obj.tipo = 'lote';
        obj.nombre = texto.trim();
        obj.item = obj;
        if (this.partidaPrioridad.lote === null || this.partidaPrioridad.lote === undefined) {
            this.partidaPrioridad.lote = '';
        }
        if (this.partidaPrioridad.lote.trim() !== texto.trim()) {
            this.archivoAdjunto.nombre = '';
            this.pathCertificado = [{ path: null, name: '' }];
            this.partidaPrioridad.documentacion = null;
            this.cambioDocumentacion(true);
            this.actualizarPartida.emit(obj);
        }
    };
    VistaInspccionarPartidaComponent.prototype.cambioCantidad = function (texto) {
        var obj;
        obj = new Object;
        obj.tipo = 'cantidad';
        obj.nombre = texto.trim();
        obj.item = obj;
        this.actualizarPartida.emit(obj);
    };
    VistaInspccionarPartidaComponent.prototype.cambioUnidad = function (texto) {
        var obj;
        obj = new Object;
        obj.tipo = 'unidad';
        obj.nombre = texto;
        obj.item = obj;
        this.actualizarPartida.emit(obj);
    };
    VistaInspccionarPartidaComponent.prototype.cambioEdicion = function (texto) {
        var obj;
        obj = new Object;
        obj.tipo = 'edicion';
        obj.nombre = texto.trim();
        obj.item = obj;
        this.actualizarPartida.emit(obj);
    };
    VistaInspccionarPartidaComponent.prototype.enviarDocumentacion = function (archivo, tipo) {
        this.archivoAdjunto = new __WEBPACK_IMPORTED_MODULE_2__class_comun_DocumentoAdjunto_class__["a" /* DocumentoAdjunto */]();
        this.archivoAdjunto.archivo = archivo;
        if (tipo === 'Certificado') {
            this.archivoAdjunto.nombre = "Certificado.pdf";
        }
        else {
            this.archivoAdjunto.nombre = "HojaSeguridad.pdf";
        }
        var obj;
        obj = new Object;
        obj.doc = this.archivoAdjunto;
        obj.tipo = tipo;
        this.enviarDocumento.emit(obj);
    };
    VistaInspccionarPartidaComponent.prototype.cambioDocumentacion = function (checkSelect) {
        var _this = this;
        this.conDocumentacion = checkSelect;
        console.log(checkSelect);
        if (this.grDocumento === undefined) {
            setTimeout(function () {
                _this.cambioDocumentacion(_this.conDocumentacion);
            }, 500);
        }
        this.enviarConDocumentacion.emit(checkSelect);
        if (this.grDocumento !== undefined) {
            if (checkSelect) {
                this.grDocumento.nativeElement.style.opacity = 1;
            }
            else {
                this.grDocumento.nativeElement.style.opacity = 0.5;
            }
        }
    };
    VistaInspccionarPartidaComponent.prototype.ngOnChanges = function (change) {
        console.log(change);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaInspccionarPartidaComponent.prototype, "actualizarPartida", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaInspccionarPartidaComponent.prototype, "enviarDocumento", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaInspccionarPartidaComponent.prototype, "enviarConDocumentacion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaInspccionarPartidaComponent.prototype, "iniciaVideo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */])
    ], VistaInspccionarPartidaComponent.prototype, "partidaPrioridad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__class_comun_DocumentoAdjunto_class__["a" /* DocumentoAdjunto */])
    ], VistaInspccionarPartidaComponent.prototype, "archCertificado", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__class_comun_DocumentoAdjunto_class__["a" /* DocumentoAdjunto */])
    ], VistaInspccionarPartidaComponent.prototype, "archSeguridad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], VistaInspccionarPartidaComponent.prototype, "conDocumentacion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("grDocumento"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], VistaInspccionarPartidaComponent.prototype, "grDocumento", void 0);
    VistaInspccionarPartidaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-vista-inspccionar-partida',
            template: __webpack_require__("./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-inspccionar-partida/vista-inspccionar-partida.component.html"),
            styles: [__webpack_require__("./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-inspccionar-partida/vista-inspccionar-partida.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_4__services_inspeccion_inspeccion_service__["a" /* InspeccionService */]])
    ], VistaInspccionarPartidaComponent);
    return VistaInspccionarPartidaComponent;
}());



/***/ }),

/***/ "./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-operacion-inspeccion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"VistaOperacion\">\n\n  <div class=\"scroll\">\n    <div class=\"datosC\" style=\"display: flex; flex-direction: column; height: 75px; box-sizing: border-box; padding: 15px 15px;\">\n      <div class=\"subPadre\">\n        <div style=\"width:202px;  height:40px; display: flex; flex-direction: column\">\n          <label style=\"height: 50%; padding-left: 0px; width: 100%\" class=\"estiloDatos\"> TU OBJETIVO </label>\n          <label style=\"height: 50%; padding-left: 0px; width: 100%\" class=\"estiloDatos\"> DE INSPECCIÓN DE HOY </label>\n        </div>\n\n        <div style=\"max-width: 85px; min-width: 30px; height:50px\">\n          <label class=\"estiloNumero\"> {{inspeccionDeceada}}</label>\n        </div>\n\n        <img class=\"img\" src='./assets/Images/objetivo.svg' style=\"width:22px; padding-bottom: 3px\" />\n        <div style=\"padding-left: 19px\">\n          <hr style=\" width:1px; height:38px; margin:0px; border-width:0\" color='#979797' />\n        </div>\n        <div style=\"width:165px; height:40px; display: flex; flex-direction: column\">\n          <label style=\"height: 50%; width: 100%\" class=\"estiloDatos\"> PIEZAS HOY </label>\n          <label style=\"height: 50%; width: 100%\" class=\"estiloDatos\"> INSPECCIONADAS </label>\n        </div>\n\n        <div style=\"max-width:85px; height:50px\">\n          <label class=\"estiloNumero\"> {{piezasInspeccionadas}}</label>\n        </div>\n\n        <div style=\"padding-left: 19px\">\n          <hr style=\" width:1px; height:38px; margin:0px; border-width:0\" color='#979797' />\n        </div>\n\n        <div style=\"padding-left: 1px; width:112px; height:40px; display: flex; flex-direction: column\">\n          <label style=\"height: 50%; width: 100%\" class=\"estiloDatos\"> INSPECCIÓN</label>\n          <label style=\"height: 50%; width: 100%\" class=\"estiloDatos\"> DESEADA </label>\n        </div>\n\n        <div style=\"flex-direction: row; width:91px; height:50px; position: relative\">\n          <label class=\"estiloNumero\"> {{objetivoDeinspeccionAux}}</label>\n          <label [style.color]=\"colorIndiceInspeccionDeceada\" style=\"font-size:16px; color:#D0021B; font-weight: bold; position: absolute; top: -1px\"> {{inspeccionDeceadaHastaElMomento}}</label>\n        </div>\n\n        <div style=\"padding-left: 19px\">\n          <hr style=\" width:1px; height:38px; margin:0px; border-width:0\" color='#979797' />\n        </div>\n\n        <div style=\"width:110px; height: 40px; display: flex; flex-direction: column\">\n          <label style=\"height: 50%; width: 100%\" class=\"estiloDatos\"> MÍNIMO DE</label>\n          <label style=\"height: 50%; width: 100%\" class=\"estiloDatos\"> INSPECCIÓN </label>\n        </div>\n\n        <div style=\"flex-direction: row; width:91px; height:50px; position: relative\">\n          <label class=\"estiloNumero\"> {{minimoDeInspeccion}}</label>\n          <label [style.color]=\"colorMinimoInspeccion\" style=\"font-size:16px; font-weight: bold; position: absolute; top: -1px\"> {{minimaInspeccionHastaElMomento}}</label>\n        </div>\n\n        <div style=\"padding-left: 18px\">\n          <pq-pop-up-estadisticas [totalesPorInspector]= \"totales_estadisticas\" [donaChart] = \"donaPEstadisticas\" [tipoGrafica] =\"tipoGraficaEstadisticas\" ></pq-pop-up-estadisticas>\n          <!-- <pq-pop-up-estadisticas [totalesPorInspector]= \"totales_estadisticas\" [donita] = \"donaPEstadisticas\"  ></pq-pop-up-estadisticas> -->\n        </div>\n        <!-- <pq-pop-up-editar-lote  style=\"position: absolute; z-index: 1;\" >\n                               </pq-pop-up-editar-lote> -->\n      </div>\n\n      <div style=\"width: 100%; padding-top: 3px;\" *ngIf=\"!vistaInicialActiva\">\n      </div>\n\n    </div>\n\n    <div class=\"Informacion\">\n      <div class=\"info\">\n        <pq-informacion-partida [partidaPrioridad]=\"partidaPrioridad\" class=\"InformacionPartida\"></pq-informacion-partida>\n        <pq-barra-progreso   class=\"BarraProgreso\" [partidaPrioridad]=\"partidaPrioridad\" (pedimentoVistaEscanear)=\"recibirPedimento($event)\"></pq-barra-progreso>\n        <!-- <pq-inspeccion-por-prioridad [partidaPrioridad]=\"partidaPrioridad\" class=\"TipoInspeccion\"></pq-inspeccion-por-prioridad> -->\n      </div>\n    </div>\n\n    <div class=\"AreaTrabajo\" *ngIf=\"vistaIniciaInspeccion \">\n      <!-- <pn-vista-secciones-inspeccion style=\"min-width: 1608px; width: 100%; padding-right: 20px; height:100%\" (reiniciarVista)=\"reinicioDeVista($event)\" [partidaPrioridad]=\"partidaPrioridad\" style=\"width: 100%;\">\n      </pn-vista-secciones-inspeccion> -->\n      <pq-iniciar-inspeccion  style=\" width: 100%;  height:100%\" (reiniciarVista)=\"reinicioDeVista($event)\" [partidaPrioridad]=\"partidaPrioridad\" (actualizarValores)=\"actualizarD($event)\"></pq-iniciar-inspeccion>\n    </div>\n\n    <div class=\"AreaTrabajo\" *ngIf=\"!vistaIniciaInspeccion \">\n      <pn-vista-escanear-pedimento style=\"min-width: 1608px; width: 100%; padding-right: 20px; height:100%\" (event)=\"cambioDeVista($event)\" [pedimento]=\"pedimentoVistaEscanear\"></pn-vista-escanear-pedimento>\n    </div>\n\n  </div>\n\n\n  <footer class=\"footer\">\n\n    <div class=\"datosFooter\">\n\n      <div class=\"Prioridad1\">\n        <label class=\"p1\">P1</label> Prioridad 1\n      </div>\n\n      <div class=\"Prioridad2\">\n        <label class=\"p2\">P2</label> Prioridad 2\n      </div>\n\n      <div class=\"Prioridad3\">\n        <label class=\"p3\">P3</label> Prioridad 3\n      </div>\n\n      <div class=\"Ambiente\">\n        <img class=\"img\" src='./assets/Images/ambiente.svg' /> Ambiente\n      </div>\n\n      <div class=\"Congelación\">\n        <img class=\"img\" src='./assets/Images/congelacion.svg' /> Congelación\n      </div>\n\n      <div class=\"Refrigeración\">\n        <img class=\"img\" src='./assets/Images/refrigeracion.svg' /> Refrigeración\n      </div>\n\n      <div class=\"Pedimento\">\n        <img class=\"img\" src='./assets/Images/pedimento.svg' /> Pedimento\n      </div>\n\n    </div>\n  </footer>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-operacion-inspeccion.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.Informacion {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  min-height: 185px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  max-height: 250px; }\n.InformacionPartida {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  width: 25%;\n  height: 100%;\n  min-width: 290px;\n  padding-top: 0.4%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.BarraProgreso {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  width: 100%;\n  height: 100%;\n  font-family: 'Roboto', sans-serif;\n  min-width: 990px;\n  border-left: 1px solid #ECEEF0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-height: 180px;\n  z-index: 0;\n  box-sizing: border-box;\n  margin-top: 0.5%; }\n.TipoInspeccion {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  width: 21.89%;\n  height: 100%;\n  padding-left: 20px;\n  min-width: 290px;\n  border-left: 2; }\n.flex-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n.info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 1px solid #D8D8D8;\n  border-top: 1px solid #D8D8D8;\n  min-width: 1625px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: 100%; }\n.VistaOperacion {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  width: 100%;\n  height: 93%;\n  min-height: 437px; }\n.AreaTrabajo {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  min-height: 459px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0px 20px 0px 20px;\n  height: 78%;\n  min-width: 1648px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  box-sizing: border-box; }\n.footer {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n  align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 57px;\n  max-height: 57px;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: row;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -ms-flex-pack: start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n  align-content: stretch;\n  -ms-flex-align: stretch;\n  -webkit-box-align: inherit;\n          align-items: inherit;\n  border-top: 2px solid black;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  font-size: 14px;\n  min-width: 759px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.linea {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  text-align: center; }\n.datosFooter {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 14px;\n  min-width: 759px; }\n.scroll {\n  width: 100%;\n  height: 100%; }\n.Prioridad1, .Prioridad2, .Prioridad3, .Ambiente, .Congelación, .Refrigeración, .Pedimento {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 0.7%;\n  margin-right: 0.7%; }\n.p1 {\n  color: #AF3634;\n  font-weight: bold; }\n.p2 {\n  color: #EEB253;\n  font-weight: bold; }\n.p3 {\n  color: #63B236;\n  font-weight: bold; }\n.img, .p1, .p2, .p3 {\n  margin-right: 6px; }\n.datosC {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-width: 1608px;\n  margin-left: 20px;\n  margin-right: 20px;\n  width: 98%; }\n.subPadre {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  width: 100%;\n  height: 54px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 0px;\n  padding-top: 11px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.estiloDatos {\n  color: #9B9B9B;\n  font-weight: bold;\n  font-family: Roboto;\n  padding-left: 10px;\n  font-size: 16px; }\n.estiloNumero {\n  color: #008895;\n  font-weight: bold;\n  font-size: 46px;\n  font-family: Roboto; }\n@media all and (width: 1368px) and (height: 770px) {\n  .scroll {\n    width: 100%;\n    overflow: scroll; }\n  .VistaOperacion {\n    height: 102%;\n    width: 100%;\n    overflow: hidden; }\n  .footer {\n    font-size: 14px; }\n  .AreaTrabajo {\n    height: 61%; }\n  .Prioridad1, .Prioridad2, .Prioridad3, .Ambiente, .Congelación, .Refrigeración, .Pedimento {\n    margin-left: 0.7%;\n    margin-right: 0.7%; } }\n@media screen and (width: 2560px) and (height: 1440px) {\n  .VistaOperacion {\n    height: 100%; }\n  .AreaTrabajo {\n    height: 76%; } }\n@media all and (min-width: 1369px) and (max-width: 1482px) {\n  .scroll {\n    width: 100%;\n    overflow: scroll; } }\n@media all and (min-width: 1483px) and (max-width: 1582px) {\n  .scroll {\n    width: 100%;\n    overflow: scroll; } }\n@media all and (min-width: 1583px) and (max-width: 1840px) {\n  .scroll {\n    width: 100%;\n    overflow: scroll; } }\n@media all and (min-width: 1841px) and (max-width: 2400px) {\n  .scroll {\n    width: 100%;\n    overflow: hidden; } }\n@media all and (min-width: 2555px) {\n  .scroll {\n    width: 100%;\n    overflow: hidden; } }\n@media all and (max-height: 1301px) and (min-height: 1050px) {\n  .VistaOperacion {\n    height: 100%; }\n  .scroll {\n    overflow: scroll; }\n  .footer {\n    font-size: 14px;\n    width: 100%; } }\n@media all and (max-height: 1049px) and (min-height: 950px) {\n  .VistaOperacion {\n    height: 100%; }\n  .scroll {\n    overflow: scroll; }\n  .footer {\n    font-size: 14px;\n    width: 100%; } }\n@media all and (max-height: 949px) and (min-height: 820px) {\n  .VistaOperacion {\n    height: 100%; }\n  .scroll {\n    overflow: scroll;\n    height: 91%; }\n  .footer {\n    font-size: 14px;\n    width: 100%; } }\n@media all and (max-height: 819px) and (min-height: 771px) {\n  .VistaOperacion {\n    height: 100%;\n    font-size: 14px; }\n  .scroll {\n    overflow: scroll; }\n  .footer {\n    font-size: 14px; } }\n@media all and (height: 770px) {\n  .scroll {\n    overflow: scroll; }\n  .footer {\n    font-size: 13px; }\n  .VistaOperacion {\n    height: 100%; } }\n@media all and (min-height: 1439px) and (min-height: 1400px) {\n  .AreaTrabajo {\n    height: 71%; }\n  .scroll {\n    overflow: hidden; } }\n@media all and (min-height: 1365px) and (max-height: 1400px) {\n  .AreaTrabajo {\n    height: 70%; }\n  .scroll {\n    overflow: hidden; } }\n@media all and (min-height: 1302px) and (max-height: 1361px) {\n  .AreaTrabajo {\n    height: 60%; }\n  .scroll {\n    overflow: scroll; } }\n@media all and (min-height: 771px) and (max-height: 1301px) {\n  .AreaTrabajo {\n    height: 64%; }\n  .scroll {\n    overflow: scroll; } }\n@media all and (min-height: 1302px) and (max-height: 1440px) {\n  .VistaOperacion {\n    height: 100%; }\n  .scroll {\n    overflow: hidden; }\n  .footer {\n    font-size: 14px; }\n  .AreaTrabajo {\n    height: 64%; } }\n@media all and (min-width: 2200px) and (max-height: 2400px) {\n  .footer {\n    width: 100%; } }\n@media screen and (width: 1920px) and (height: 1080px) {\n  .footer {\n    width: 100%;\n    overflow: hidden; }\n  .VistaOperacion {\n    height: 100%;\n    width: 100%; }\n  .AreaTrabajo {\n    height: 82%;\n    width: 99%; } }\n@media screen and (width: 2560px) and (height: 1337px) {\n  .AreaTrabajo {\n    height: 70%; }\n  .footer {\n    width: 100%;\n    overflow: scroll; }\n  .VistaOperacion {\n    height: 100%;\n    width: 100%; } }\n@media screen and (max-width: 2160px) {\n  .scroll {\n    overflow-x: scroll; } }\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-operacion-inspeccion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistaOperacionInspeccionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_inspeccion_inspeccion_service__ = __webpack_require__("./src/app/services/inspeccion/inspeccion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_despachos_PartidaInspeccion_class__ = __webpack_require__("./src/app/class/despachos/PartidaInspeccion.class.ts");
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





var VistaOperacionInspeccionComponent = /** @class */ (function () {
    function VistaOperacionInspeccionComponent(router, comunService, _insp) {
        this.router = router;
        this.comunService = comunService;
        this._insp = _insp;
        this.vistaInicio = true;
        this.partidaPrioridad = new __WEBPACK_IMPORTED_MODULE_3__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */]();
        this.iRVista = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.actualizarDatos = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.reiniciarVistaPrincipal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.colorIndiceInspeccionDeceada = "#D0021B";
        this.colorMinimoInspeccion = "#D0021B";
        //  totales_estadisticas:any ;
        this.graficas = [];
        this.filtroPE = [];
        this.nuevoPE = [];
    }
    VistaOperacionInspeccionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vistaIniciaInspeccion = true;
        //  Array.prototype.push.apply(this.copiaUniversoPartidasInspeccion, this.copiaUniversoPartidas);
        // console.log("la partida de inspección es: " + this.copiaUniversoPartidas);
        this.recibeTotalesInspeccion();
        this.obtenerContadorPendientes();
        this.subs = this.comunService.valueVideo
            .subscribe(function (data) {
            _this.ocultaScroll = data;
        });
        this.subs = this.comunService.valueTipoInspeccion
            .subscribe(function (data) {
            if (data) {
                _this.vistaIniciaInspeccion = true;
            }
        });
        // this.subs = this.comunService.finalizar.subscribe(
        //   (data) =>{
        //      this.vistasInspeccionFin = data;
        //     if(this.vistasInspeccionFin == true && this.objetivoDeinspeccion ==0){
        //       this.recibeTotalesInspeccion();
        //     }
        //
        //  });
    };
    VistaOperacionInspeccionComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    VistaOperacionInspeccionComponent.prototype.ngOnChanges = function () {
        console.log('Soy la partida que llega --- >', this.partidaPrioridad);
    };
    // ngOnChanges(change: SimpleChanges){
    //    // Array.prototype.push.apply(this.copiaUniversoPartidas, this.copiaUniversoPartidasInspeccion);
    // }
    VistaOperacionInspeccionComponent.prototype.cambioDeVista = function (valor) {
        this.vistaActivaPedimento = valor;
        if (this.vistaActivaPedimento == true) {
            this.vistaIniciaInspeccion = true;
            this.vistaInicio = false;
        }
        else {
            /*this.vistaIniciaInspeccion = false;*/
            this.vistaIniciaInspeccion = true;
            this.vistaInicio = false;
        }
    };
    VistaOperacionInspeccionComponent.prototype.iniciaInspeccion = function (valor) {
        if (this.vistaActivaPedimento == true) {
            this.vistaIniciaInspeccion = true;
            this.vistaInicio = false;
        }
    };
    //
    // recibePartidasApiladas(){
    //   this._insp.recibePartidasApiladas().subscribe(
    //     data => {
    //       console.log(data);
    //     },
    //     error => {
    //       console.log("error al recibir las partidas");
    //       console.log(error);
    //     }
    //   );
    // }
    VistaOperacionInspeccionComponent.prototype.reinicioDeVista = function () {
        this.iRVista.emit('hola');
        this.recibeTotalesInspeccion();
        this.obtenerContadorPendientes();
        console.log("enviar reinicio");
    };
    VistaOperacionInspeccionComponent.prototype.recibeTotalesInspeccion = function () {
        var _this = this;
        this._insp.recibeTotalesInspecion(this.inspector).subscribe(function (data) {
            _this.objetivoDeinspeccionAux = data.current.pzaAInspeccion;
            _this.piezasInspeccionadas = data.current.total_piezasInspeccionadas;
            _this.inspeccionDeceada = data.current.maxPiezasInsp;
            _this.minimoDeInspeccion = data.current.piezasProm;
            if (_this.piezasInspeccionadas == 0) {
                _this.inspeccionDeceadaHastaElMomento = -1 * _this.objetivoDeinspeccionAux;
                _this.minimaInspeccionHastaElMomento = -1 * _this.minimoDeInspeccion;
                _this.colorIndiceInspeccionDeceada = "#D0021B";
                _this.colorMinimoInspeccion = "#D0021B";
            }
            else {
                var aux = 0;
                var aux2 = 0;
                aux = -1 * _this.objetivoDeinspeccionAux;
                aux2 = -1 * _this.minimoDeInspeccion;
                _this.inspeccionDeceadaHastaElMomento = aux + _this.piezasInspeccionadas;
                _this.minimaInspeccionHastaElMomento = aux2 + _this.piezasInspeccionadas;
                if (_this.inspeccionDeceadaHastaElMomento == 0) {
                    _this.colorIndiceInspeccionDeceada = "#FBB03B";
                }
                else if (_this.objetivoDeinspeccionAux < _this.inspeccionDeceadaHastaElMomento) {
                    _this.colorIndiceInspeccionDeceada = "#39B54A";
                }
                else {
                    _this.colorIndiceInspeccionDeceada = "#D0021B";
                }
                if (_this.minimaInspeccionHastaElMomento == 0) {
                    _this.colorMinimoInspeccion = "#FBB03B";
                }
                else if (_this.objetivoDeinspeccion == 0) {
                    _this.colorMinimoInspeccion = "#39B54A";
                }
                else {
                    _this.colorMinimoInspeccion = "#D0021B";
                }
            }
            /*  minimaInspeccionHastaElMomento: number = 0; */
            console.log(data);
        });
    };
    VistaOperacionInspeccionComponent.prototype.obtenerContadorPendientes = function () {
        var _this = this;
        this._insp.recibeNumPendientes().subscribe(function (data) {
            _this.objetivoDeinspeccion = data.current;
            // if(this.objetivoDeinspeccion ==0 && this.objetivoDeinspeccion !==undefined)
            // {
            // this.reinicioDeVista();
            //  }
            console.log(_this.objetivoDeinspeccion);
        }, function (error) {
        });
    };
    // reiniciarVistaInpecc(val){
    //   this.reiniciarVistaPrincipal.emit(val);
    // }
    // Metodo que recibe y envia el pedimento
    VistaOperacionInspeccionComponent.prototype.recibirPedimento = function (pedimento) {
        this.pedimentoVistaEscanear = pedimento;
    };
    /*****Actualizar los datos cuando se queda en la vista grabar******/
    VistaOperacionInspeccionComponent.prototype.actualizarD = function ($event) {
        this.actualizarDatos.emit('val');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */])
    ], VistaOperacionInspeccionComponent.prototype, "partidaPrioridad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaOperacionInspeccionComponent.prototype, "iRVista", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaOperacionInspeccionComponent.prototype, "actualizarDatos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaOperacionInspeccionComponent.prototype, "reiniciarVistaPrincipal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], VistaOperacionInspeccionComponent.prototype, "objetivoDeinspeccion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], VistaOperacionInspeccionComponent.prototype, "piezasInspeccionadas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], VistaOperacionInspeccionComponent.prototype, "inspeccionDeceada", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], VistaOperacionInspeccionComponent.prototype, "inspeccionDeceadaHastaElMomento", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], VistaOperacionInspeccionComponent.prototype, "minimoDeInspeccion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], VistaOperacionInspeccionComponent.prototype, "minimaInspeccionHastaElMomento", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VistaOperacionInspeccionComponent.prototype, "inspector", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VistaOperacionInspeccionComponent.prototype, "totales_estadisticas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], VistaOperacionInspeccionComponent.prototype, "donaPEstadisticas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], VistaOperacionInspeccionComponent.prototype, "tipoGraficaEstadisticas", void 0);
    VistaOperacionInspeccionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-vista-operacion-inspeccion',
            template: __webpack_require__("./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-operacion-inspeccion.component.html"),
            styles: [__webpack_require__("./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-operacion-inspeccion.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_comun_comun_service__["a" /* ComunService */],
            __WEBPACK_IMPORTED_MODULE_2__services_inspeccion_inspeccion_service__["a" /* InspeccionService */]])
    ], VistaOperacionInspeccionComponent);
    return VistaOperacionInspeccionComponent;
}());



/***/ }),

/***/ "./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-secciones-inspeccion/vista-secciones-inspeccion.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 100%; width: 100%;\">\n\n<div style=\"width:100%;\">\n  <Pq-barra-actividades (eventCambio)=\"recibeIndex($event)\"   [reiniciaBarra]=\"reiniciaBarra\"\n                        (verificarSiAvanza)=\"verificarAvance($event)\"\n                        [maxItemList]=\"maxItemList\"\n                        [clickArrows]=\"clickArrows\" [clickArrows2]=\"clickArrows2\"\n                        [pieza]= \"permiteRegresar\"\n                        [actividades]=\"actividades\">\n                      </Pq-barra-actividades>\n</div>\n <!--  <pn-vista-inspccionar-partida></pn-vista-inspccionar-partida> -->\n  <div class=\"inspeccion\">\n    <div class=\"pasosInspeccion\" *ngIf= \"indexBarraActividades !=2\" >\n\n      <div style=\"width: 100%; height: 100%;\" *ngIf= \"indexBarraActividades == 0\">\n          <pn-vista-inspccionar-partida (actualizarPartida)=\"actualizarPartida($event)\" (enviarDocumento)=\"cargarDocumentos($event)\" (iniciaVideo)=\"recibeIniciarVideo($event)\"\n          [archCertificado]=\"documentoCertificado\" [archSeguridad]=\"documentoHoja\"  (enviarConDocumentacion)=\"recibeConDocumentacion($event)\" [conDocumentacion] = \"conDocumentacion\"\n          [partidaPrioridad]=\"partidaPrioridad\" #vistaInspeccionPartida id=\"vistaInspeccionPartida\"  ></pn-vista-inspccionar-partida>\n      </div>\n\n      <div style=\"width: 100%; height: 100%; padding-bottom: 10%;\" *ngIf= \"indexBarraActividades == 1\">\n          <pq-inspeccion-nivel-pieza [partidaPrioridad]=\"partidaPrioridad\" #vistaInspeccionPiezas id=\"vistaInspeccionPiezas\"\n                                     [archCertificado]=\"documentoCertificado\" [archSeguridad]=\"documentoHoja\" [conDocumentacion] = \"conDocumentacion\"\n                                     (eventCambioIndex)=\"cambioIndex($event)\"  (enviaPiezas)=\"actualizarPartida($event)\" (eventlistaPiezas)=\"recibeListaPiezas($event)\"\n                                     (enviarUbiNoDes)=\"recibirUbicacionNoD($event)\"></pq-inspeccion-nivel-pieza>\n      </div>\n    </div>\n\n    <div style=\"width: 100%; height: 100%;\" *ngIf= \"indexBarraActividades == 2\">\n        <pn-vista-almacenar-productos [partidaPrioridad]=\"partidaPrioridad\" [obtenerDatos]=\"finalizarActivo\"   (finalizarPartida)=\"finalizar($event)\"\n                                      (ubicacionImprimir)=\"asignarUbicacion($event)\" [ubicacionNoDes]=\"ubicacionNoDes\"></pn-vista-almacenar-productos>\n   </div>\n    <div class=\"video\" *ngIf= \"indexBarraActividades !=2\" >\n      <div class=\"videoInterior\">\n    <div class=\"textoSuperior\" *ngIf= \"indexBarraActividades == 1\" >\n        <p class=\"textoSuperiorP\"> Inspeccionando {{recibePzas}}/{{recibeTotalPzas}} piezas</p>\n\n          <div class=\"textoSuperiorImg\">\n            <img style=\"width:30px;height: 30px;\" src=\"./assets/Images/editar-pieza/caja_vacia.svg\" alt=\"\" (click)=\"abrirPop()\" [style.display] = \"cajaVerde ? 'block' : 'none' \">\n            <img style=\"width:30px;height: 30px;\" src=\"./assets/Images/editar-pieza/caja_vaciagris.svg\" alt=\"\" [style.display] = \"cajaVerde ? 'none' : 'block'\" [style.cursor]= \"cajaVerde ? 'pointer' : 'auto'\">\n            <!-- <pq-pop-confirmacion *ngIf=\"abrirPopConfirmacion\"  [pzasE]='recibeTotalPzas' [pzasI]= 'recibePzas' (confirmacion)=\"popConfirmacion($event)\" > </pq-pop-confirmacion> -->\n          </div>\n    </div>\n\n    <div class=\"video123\">\n      <div class=\"enfoqueSuperior\" style=\"width:100%; flex-direction:row; justify-content:space-between\">\n        <img src=\"./assets/Images/Images/Sup_Izq.svg\" alt=\"\" class=\"imgEnfoque\">\n        <img src=\"./assets/Images/Images/Sup_Der.svg\" alt=\"\" class=\"imgEnfoque\">\n\n      </div>\n      <!-- <pq-grabacion-video  class=\"videoInspeccion\" [style.z-index]=\"ocultaVideo?'-1':'0'\" [iniciaVideo]= \"iniciaVideo\" ></pq-grabacion-video> -->\n      <!-- <video  #video class=\"videoInspeccion\" [style.z-index]=\"ocultaVideo?'-1':'0'\"  autoplay ></video> -->\n      <video id =\"video\" #video class=\"videoInspeccion\" [style.z-index]=\"ocultaVideo?'-1':'0'\"  autoplay ></video>\n\n\n      <div class=\"enfoqueInferior\" style=\"width:100%;flex-direction:row; justify-content:space-between; align-items: flex-end;\">\n        <img src=\"./assets/Images/Images/Inf_Izq.svg\" alt=\"\" class=\"imgEnfoque\">\n        <img src=\"./assets/Images/Images/Inf_Der.svg\" alt=\"\" class=\"imgEnfoque\">\n      </div>\n    </div>\n\n    <div class=\"textoInferior\">\n          <a clas=\"textoInferiorA\" *ngIf= \"indexBarraActividades == 1\" > <span style=\" color:#39B54A; \">* Despachables: </span>Teclea barra espaciadora solo una vez, para pasar a la siguiente  </a>\n          <a clas=\"textoInferiorA\" *ngIf= \"indexBarraActividades == 1\"> <span style=\" color:#DF0101; \">** Incidencia: </span>Teclea barra espaciadora dos veces, para registrar la incidencia. </a>\n    </div>\n    </div>\n  </div>\n\n  <pq-pop-confirmacion *ngIf=\"abrirPopConfirmacion\" [pzasE]='recibeTotalPzas' [pzasI]= 'recibePzas' (confirmacion)=\"popConfirmacion($event)\" > </pq-pop-confirmacion>\n  <!-- <pq-pop-informativo *ngIf=\"abrirPopInformativo\" (cambioIndex)=\"cambioIndex($event)\" > </pq-pop-informativo> -->\n  <pn-pop-finalizar *ngIf=\"mostrarPopFinalizar\" (imprimir)=\"imprimir($event)\" (finalizar)=\"finalizarInspeccion($event)\" [pzasE]= \"contDespachable\" [mensajeEtiqueta]=\"mensajeEtiqueta\" [tipoColor]=\"true\"></pn-pop-finalizar>\n    <pn-pop-finalizar *ngIf=\"mostrarPopFinalizarNoDesp\" (imprimir)=\"imprimir($event)\" (finalizar)=\"finalizarInspeccion($event)\" [pzasE]= \"contIncidencia\" [mensajeEtiqueta]=\"mensajeEtiqueta\" [tipoColor]=\"false\"></pn-pop-finalizar>\n    <pq-alerta *ngIf=\"mostrarAlerta\" [alertaTxt]=\"textoAlerta\" (confirmacion)=\"cerrarAlerta($event)\" ></pq-alerta>\n\n\n</div>\n\n<footer class=\"direccionRow\">\n       <div class=\"simulaBoton\" *ngIf= \"indexBarraActividades == 0\"> </div>\n       <div type=\"submit\" class=\"botones\" (click)=\"regresar()\" *ngIf= \"indexBarraActividades == 1 || indexBarraActividades == 2 \"\n             [style.background]= \"btnVolver ? '#008895': '#D5DBDB'\"\n             [style.pointerEvents] = \"btnVolver ? 'auto' : 'none'\">\n             <label [style.pointerEvents] = \"btnVolver ? 'auto' : 'none'\" >VOLVER</label></div>\n       <div type=\"submit\" class=\"botones\" (click)=\"avanzar()\" *ngIf= \"indexBarraActividades == 0 \"><label >SIGUIENTE</label></div>\n       <div type=\"submit\" class=\"botones\" (click)=\"avanzar()\" *ngIf= \"indexBarraActividades == 1 \" [style.background]= \"cajaVerde ? '#008895' : '#D5DBDB'\" [style.cursor]= \"cajaVerde ? 'pointer' : 'auto'\" ><label [style.cursor]= \"cajaVerde ? 'pointer' : 'default'\">SIGUIENTE</label></div>\n       <div type=\"submit\" style=\"background: #39B54A\" class=\"botones\" (click)=\"etiquetar()\" *ngIf= \"indexBarraActividades == 2 && contDespachable > 0 && partidaPrioridad.pasosImprimirEtiqueta \" #finalizar ><label>ETIQUETAR</label></div>\n       <div type=\"submit\" style=\"background: #39B54A\" class=\"botones\" (click)=\"etiquetar()\" *ngIf= \"indexBarraActividades == 2 && contDespachable > 0 && !partidaPrioridad.pasosImprimirEtiqueta  \" #finalizar ><label>SIGUIENTE</label></div>\n       <div type=\"submit\" style=\"background: #39B54A\" class=\"botones\" (click)=\"etiquetar()\" *ngIf= \"indexBarraActividades == 2 && contDespachable <= 0 \" #finalizar ><label>FINALIZAR</label></div>\n\n</footer>\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-secciones-inspeccion/vista-secciones-inspeccion.component.scss":
/***/ (function(module, exports) {

module.exports = ".inspeccion {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  height: 93.3%;\n  width: 100%;\n  min-height: 570px; }\n\n.pasosInspeccion {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  width: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  min-width: 804px;\n  min-height: 545px; }\n\n.video {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  width: 50%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-item-align: center;\n      align-self: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-left: 1px solid #ECEEF0; }\n\n.teclaEspacio {\n  font-family: 'Roboto';\n  font-style: italic;\n  font-weight: 200;\n  font-size: 18px;\n  color: #000000;\n  text-align: left;\n  line-height: 24px; }\n\n.espacioActividades {\n  height: 100%;\n  width: 100%; }\n\n.areaTrabajoActividades {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.imgen1 {\n  -webkit-transform: rotateZ(-90deg);\n          transform: rotateZ(-90deg);\n  position: absolute; }\n\n.botones {\n  width: 190px;\n  height: 30px;\n  background: #008895;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-item-align: center;\n      align-self: center;\n  cursor: pointer; }\n\n.botones > label {\n    font-family: 'Novecento';\n    font-size: 21px;\n    font-weight: bold;\n    cursor: pointer;\n    color: white;\n    height: 100%;\n    padding-top: 2.7%; }\n\n.simulaBoton {\n  width: 190px;\n  height: 30px; }\n\n.direccionRow {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n@media all and (width: 1368px) and (height: 770px) {\n  .scroll {\n    overflow: scroll; }\n  .inspeccion {\n    height: 120.3%; } }\n\n@media all and (max-width: 2560px) and (min-height: 1365px) and (max-height: 1400px) {\n  .scroll {\n    overflow: hidden; }\n  .enfoqueInferior {\n    padding-bottom: 2%; } }\n\n@media all and (min-height: 1426px) and (max-height: 1439px) {\n  .inspeccion {\n    height: 92.7%; } }\n\n@media all and (min-height: 1413px) and (max-height: 1425px) {\n  .inspeccion {\n    height: 93.2%; } }\n\n@media all and (min-height: 1393px) and (max-height: 1412px) {\n  .inspeccion {\n    height: 91.6%; } }\n\n@media all and (min-height: 1369px) and (max-height: 1392px) {\n  .inspeccion {\n    height: 91.7%; } }\n\n@media all and (min-height: 1345px) and (max-height: 1368px) {\n  .inspeccion {\n    height: 89.7%; } }\n\n@media all and (min-height: 1320px) and (max-height: 1344px) {\n  .inspeccion {\n    height: 89%; } }\n\n@media all and (min-height: 1302px) and (max-height: 1319px) {\n  .inspeccion {\n    height: 86.9%; } }\n\n@media all and (width: 2560px) and (height: 1440px) {\n  .inspeccion {\n    height: 94.3%; } }\n\n.videoInspeccion {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  padding: 10px 10px 10px 16px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.enfoqueSuperior {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto; }\n\n.imgEnfoque {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto; }\n\n.enfoqueInferior {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto; }\n\n.videoInterior {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n\n.textoSuperior {\n  height: 7%;\n  width: 100%;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-bottom: 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.textoSuperiorP, .textoSuperiorImg {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  font-family: 'Novecento';\n  font-weight: bold;\n  font-size: 21px;\n  color: #008895;\n  text-align: left; }\n\n.video123 {\n  height: 85%;\n  width: 100%;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch; }\n\n.textoInferior {\n  height: 7%;\n  width: 100%;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline; }\n\n.textoInferior > a {\n    font-family: 'Roboto';\n    font-style: italic;\n    font-weight: lighter;\n    font-size: 15px;\n    color: #000000;\n    text-align: left;\n    line-height: 24px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-top: 1%;\n    -ms-flex-item-align: baseline;\n        align-self: baseline; }\n\n.textoInferiorA {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto; }\n\n.textoSuperiorImg {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-secciones-inspeccion/vista-secciones-inspeccion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VistaSeccionesInspeccionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inspeccion_nivel_pieza_inspeccion_nivel_pieza_component__ = __webpack_require__("./src/app/components/responsableae/componentes/inspeccion-nivel-pieza/inspeccion-nivel-pieza.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_despachos_PartidaInspeccion_class__ = __webpack_require__("./src/app/class/despachos/PartidaInspeccion.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_comun_DocumentoAdjunto_class__ = __webpack_require__("./src/app/class/comun/DocumentoAdjunto.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_despachos_parametrosInspeccion_class__ = __webpack_require__("./src/app/class/despachos/parametrosInspeccion.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_inspeccion_inspeccion_service__ = __webpack_require__("./src/app/services/inspeccion/inspeccion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











//declare const navigator: any;
var VistaSeccionesInspeccionComponent = /** @class */ (function () {
    //pasosImprimirEtiqueta:boolean = true;
    function VistaSeccionesInspeccionComponent(router, inspeccionT, comunService, coreComponent, _commonService) {
        this.router = router;
        this.inspeccionT = inspeccionT;
        this.comunService = comunService;
        this.coreComponent = coreComponent;
        this._commonService = _commonService;
        this.partidaPrioridad = new __WEBPACK_IMPORTED_MODULE_2__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */]();
        this.reiniciarVista = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.indexBarraActividades = 0;
        this.info = new __WEBPACK_IMPORTED_MODULE_2__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */]();
        this.confirmacion = false;
        this.documentoCertificado = new __WEBPACK_IMPORTED_MODULE_3__class_comun_DocumentoAdjunto_class__["a" /* DocumentoAdjunto */]();
        this.documentoHoja = new __WEBPACK_IMPORTED_MODULE_3__class_comun_DocumentoAdjunto_class__["a" /* DocumentoAdjunto */]();
        this.maxItemList = 1;
        this.finalizarActivo = false;
        this.reiniciaBarra = false;
        this.param = new __WEBPACK_IMPORTED_MODULE_4__class_despachos_parametrosInspeccion_class__["a" /* parametrosInspeccion */]();
        this.actividades = ["INSPECCIONAR PARTIDA", "INSPECCIONAR PIEZAS", "ALMACENAR PRODUCTOS"];
        this.recordedChunks = [];
        this.partidaPrioridadNueva = new __WEBPACK_IMPORTED_MODULE_2__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */]();
        this.mostrarDoc = false;
        this.cantEtiquetas = 0;
        this.rutaImg = 'http://ryndem.mx/DESARROLLO/Imagenes/imagenesEtiqueta/';
        this.ubicacionEtiqueta = '';
    }
    VistaSeccionesInspeccionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        console.log(this.documentoCertificado, this.documentoHoja);
        console.log('Soy prioridad a enviar final <--->', this.partidaPrioridad.prioridad); /// Enviar al servicio.
        this.prioridad = this.partidaPrioridad.prioridad;
        this.documentoCertificado.nombre = "";
        this.transform(new Date());
        this.subs = this.comunService.valueVideo
            .subscribe(function (data) {
            _this.ocultaVideo = data;
            // console.log(data, this.ocultaVideo);
        });
        this.subs = this.comunService.folioVideo
            .subscribe(function (data) {
            console.log(data, "entre subs folio");
            _this.folioVideo = data;
        });
        this.subs = this.comunService.guardaVideo.subscribe(function (data) {
            console.log(data);
            if (data == true) {
                _this.save();
            }
        }, function (error) {
            console.log(error);
        });
        //    this.startFunction();
        // this.gotMedia(stream);
    };
    VistaSeccionesInspeccionComponent.prototype.ngOnDestroy = function () {
        this.subs.unsubscribe();
    };
    VistaSeccionesInspeccionComponent.prototype.ngOnChanges = function (change) {
        console.log(change);
    };
    VistaSeccionesInspeccionComponent.prototype.ngAfterViewInit = function () {
        // set the initial state of the video
        var video = this.video.nativeElement;
        video.muted = false;
        video.controls = false;
        video.autoplay = true;
        this.startFunction();
    };
    VistaSeccionesInspeccionComponent.prototype.cambioIndex = function (cambioIndex) {
        this.cambioIndexBarra = cambioIndex;
        this.abrirPopInformativo = false;
        this.comunService.videoZindex(false);
        if (this.cambioIndexBarra == 1) {
            this.recibePzas = this.recibePzas + 1;
            this.avanzarSimple();
            this.confirmacion = false;
            this.permiteRegresar = undefined;
        }
    };
    VistaSeccionesInspeccionComponent.prototype.recibeIndex = function (indexActual) {
        this.indexBarraActividades = indexActual;
        if (indexActual == 0) {
            this.maxItemList = 1;
        }
        /*if(indexActual === 1 && this.partidaPrioridad.fabrica === 'USP')
        {
          this.indexBarraActividades = 2;
        }*/
        if (this.indexBarraActividades < 2) {
            this.confirmacion = false;
        }
        else {
            if (this.cambiarNoDesp) {
                this.actualizarNoDespachables();
            }
            if ((this.contDespachable == undefined || this.contDespachable == 0) && (this.contIncidencia == undefined || this.contIncidencia == 0)) {
                this.regresar();
            }
            else {
                if (this.indexBarraActividades == 2 && this.confirmacion == false) {
                    if (this.recibePzas > this.recibeTotalPzas) {
                        this.avanzarSimple();
                        this.confirmacion = true;
                    }
                    else {
                        this.abrirPop();
                        this.regresar();
                    }
                }
            }
        }
    };
    VistaSeccionesInspeccionComponent.prototype.actualizarNoDespachables = function () {
        var tipo;
        this.contIncidencia = this.partidaPrioridad.cantidadCompra;
        this.recibeTotalPzas = 0;
        this.recibePzas = this.partidaPrioridad.cantidadCompra;
        this.partidaPrioridad.contIncidencia = this.contIncidencia;
        this.contDespachable = 1;
        this.partidaPrioridad.pasosImprimirEtiqueta = true;
        if (this.partidaPrioridad.manejo.toLowerCase() === 'refrigeracion' || this.partidaPrioridad.manejo.toLowerCase() === 'refrigeración') {
            tipo = false;
        }
        else if (this.partidaPrioridad.manejo.toLowerCase() === 'congelacion' || this.partidaPrioridad.manejo.toLowerCase() === 'congelación') {
            tipo = false;
        }
        else if (this.partidaPrioridad.manejo.toLowerCase() === 'ambiente') {
            tipo = false;
        }
        this.btnVolver = false;
        this.obtenerUbicacionNoDesp(tipo);
    };
    VistaSeccionesInspeccionComponent.prototype.obtenerUbicacionNoDesp = function (tipo) {
        var _this = this;
        var data;
        data = new Object;
        data = {
            tarima: tipo,
            manejo: this.partidaPrioridad.manejo,
            idPPedido: this.partidaPrioridad.idPPedido,
            tipoProducto: this.partidaPrioridad.tipo,
            piezas: this.partidaPrioridad.contDespachable,
            idProducto: this.partidaPrioridad.idProducto,
            proveedor: this.partidaPrioridad.fabrica
        };
        this.inspeccionT.obtenerUbicacionInspeccion(data).subscribe(function (data) {
            console.log("Ubicacion ", data.current);
            var string = data.current;
            var parts = string.split("_");
            var respuesta = parts[0];
            var letra = parts[1];
            var ubicacionAux;
            var idUbicacion;
            ubicacionAux = respuesta + " " + "Cuarentena (" + letra + ')';
            _this.ubicacionNoDes = ubicacionAux;
            _this.ubicacionImp = string;
            // this.ubicacionImprimirNoDesp =  ubicacionAux ;
            // this.imprimirEtiqueta(this.param);
            // this.finalizarTerminarPop(); // SE LLAMA AL METODO QUE SE CREO NUEVO
        }, function (error) {
        });
    };
    VistaSeccionesInspeccionComponent.prototype.regresar = function () {
        console.log('regresar');
        this.clickArrows = !this.clickArrows;
    };
    VistaSeccionesInspeccionComponent.prototype.avanzar = function () {
        var _this = this;
        console.log('avanzar');
        if (this.indexBarraActividades == 0) {
            if (this.verificarInformacionCompleta() == "") {
                this.avanzarSimple();
            }
            else if (this.verificarInformacionCompleta() == 'noDespachable') {
                this.contIncidencia = this.partidaPrioridad.cantidadCompra;
                // this.cambiarNoDesp = true;
                setTimeout(function () {
                    _this.avanzarSimple();
                }, 2);
                setTimeout(function () {
                    _this.avanzarSimple();
                }, 3);
            }
            else {
                this.mostrarAlerta = true;
            }
        }
        else {
            this.abrirPop();
        }
    };
    VistaSeccionesInspeccionComponent.prototype.avanzarSimple = function () {
        console.log('avanzar');
        this.clickArrows2 = !this.clickArrows2;
    };
    VistaSeccionesInspeccionComponent.prototype.asignarUbicacion = function (valor) {
        this.ubicacionImp = valor;
    };
    VistaSeccionesInspeccionComponent.prototype.etiquetar = function () {
        var codigo = this.partidaPrioridad.codigo;
        var lote = this.partidaPrioridad.lote;
        var folioDocumento = codigo + "-" + lote;
        var idProducto = this.partidaPrioridad.idProducto;
        if (!this.cambiarNoDesp) {
            if (this.documentoCertificado.nombre !== "" && this.documentoCertificado.nombre !== undefined) {
                if (this.documentoCertificado.archivo !== undefined) {
                    var atributos = new Array();
                    var tipoArchivo = 'Certificado';
                    this.documentoCertificado.nombre = 'Certificado.pdf';
                    atributos.push(this.documentoCertificado.archivo[0], folioDocumento, idProducto, tipoArchivo);
                    this.partidaPrioridad.listaArchivos.push(atributos);
                }
            }
            if (this.documentoHoja.nombre !== undefined && this.documentoHoja.nombre !== "") {
                if (this.documentoHoja.archivo !== undefined) {
                    var tipoArchivo = 'HojaSeguridad';
                    var data = new Object;
                    var atributos = new Array();
                    atributos.push(this.documentoHoja.archivo[0], codigo, idProducto, tipoArchivo);
                    this.partidaPrioridad.listaArchivos.push(atributos);
                }
            }
            this.guardaDocumentacion(this.partidaPrioridad.listaArchivos);
            // this.finalizarActivo = true;
            if (this.partidaPrioridad.pasosImprimirEtiqueta == true && this.partidaPrioridad.contDespachable > 0) {
                this.imprimir();
                this.mensajeEtiqueta = 'Etiquetas despachables';
                this.mostrarPopFinalizar = true;
                //   this.finalizarActivo = true;
            }
            else {
                this.finalizarActivo = true;
            }
        }
        else if (this.cambiarNoDesp) {
            if (this.partidaPrioridad.pasosImprimirEtiqueta == true && this.partidaPrioridad.contIncidencia > 0) {
                this.imprimir();
                this.mensajeEtiqueta = 'Etiquetas no despachables';
                this.mostrarPopFinalizarNoDesp = true;
                //   this.finalizarActivo = true;
            }
        }
    };
    VistaSeccionesInspeccionComponent.prototype.actualizarPartida = function (valores) {
        if (this.partidaPrioridad.tipo === 'Publicaciones') {
            if (valores.tipo == 'edicion') {
                this.partidaPrioridad.edicion = valores.item.nombre;
            }
            else if (valores.tipo == 'idioma') {
                this.partidaPrioridad.idioma = valores.item.nombre;
            }
        }
        else {
            if (valores.tipo == 'presentacion') {
                this.partidaPrioridad.tipoPresentacion = valores.item.nombre;
            }
            else if (valores.tipo == 'almacenaje') {
                this.partidaPrioridad.manejo = valores.item.nombre;
            }
            else if (valores.tipo == 'transportacion') {
                this.partidaPrioridad.manejoTransporte = valores.item.nombre;
            }
            else if (valores.tipo == 'lote') {
                this.partidaPrioridad.lote = valores.item.nombre;
                this.partidaPrioridad.loteOriginal = valores.item.nombre;
            }
            else if (valores.tipo == 'mes') {
                this.partidaPrioridad.mesCaduca = valores.item.nombre;
                this.partidaPrioridad.mesNum = valores.item.key - 2;
                this.partidaPrioridad.caducidad = this.partidaPrioridad.mesCaduca + " " + this.partidaPrioridad.anoCaduca;
            }
            else if (valores.tipo == 'anio') {
                this.partidaPrioridad.anoCaduca = valores.item.nombre;
                this.partidaPrioridad.caducidad = this.partidaPrioridad.mesCaduca + " " + this.partidaPrioridad.anoCaduca;
            }
            else if (valores.tipo === 'cantidad') {
                this.partidaPrioridad.cantidadCambio = valores.nombre;
                console.log('SOY LA NUEVA CANTIDAD -->', this.partidaPrioridad.cantidad);
            }
            else if (valores.tipo === 'unidad' && valores.item.nombre !== 'Seleccionar') {
                this.partidaPrioridad.unidadCambio = valores.item.nombre;
                console.log('SOY LA NUEVA UNIDAD -->', this.partidaPrioridad.unidad);
            }
        }
        if (valores.tipo == 'datosNivelPieza') {
            this.partidaPrioridad.acumPiezas = valores.acumPiezas;
            this.partidaPrioridad.totalPiezas = valores.totalPiezas;
            this.partidaPrioridad.contIncidencia = valores.contIncidencia;
            this.partidaPrioridad.contDespachable = valores.contDespachable;
            this.recibePzas = valores.acumPiezas;
            this.recibeTotalPzas = valores.totalPiezas;
            this.contDespachable = valores.contDespachable;
            this.contIncidencia = valores.contIncidencia;
            console.log("pzas:", valores.acumPiezas, "totalp:", valores.totalPiezas, " pzasInci:", valores.contIncidencia, " pzasDes:", valores.contDespachable);
            if ((this.contDespachable == 0 || this.contDespachable == undefined) && (this.contIncidencia == 0 || this.contIncidencia == undefined)) {
                this.permiteRegresar = true;
                this.cajaVerde = undefined;
                this.btnVolver = true;
                console.log("this.permiteRegresar", this.permiteRegresar);
            }
            else {
                if (this.recibeTotalPzas > 1) {
                    this.cajaVerde = true;
                }
                else {
                    this.cajaVerde;
                }
                this.btnVolver = false;
                this.permiteRegresar = false;
            }
        }
    };
    VistaSeccionesInspeccionComponent.prototype.abrirPop = function () {
        if ((this.contDespachable != undefined && this.contDespachable > 0) || (this.contIncidencia != undefined && this.contIncidencia > 0)) {
            if (this.recibePzas > this.recibeTotalPzas) {
                this.abrirPopInformativo = true;
                this.comunService.videoZindex(true);
            }
            else {
                this.abrirPopConfirmacion = true;
                this.comunService.videoZindex(true);
            }
        }
    };
    VistaSeccionesInspeccionComponent.prototype.popConfirmacion = function (conf) {
        this.recibeConf = conf;
        if (this.recibeConf == true) {
            this.permiteRegresar = undefined;
            this.avanzarSimple();
            this.abrirPopConfirmacion = false;
            this.comunService.videoZindex(false);
            this.confirmacion = true;
        }
        else {
            this.abrirPopConfirmacion = false;
            this.comunService.videoZindex(false);
        }
    };
    VistaSeccionesInspeccionComponent.prototype.verificarInformacionCompleta = function () {
        var tipoError = "";
        var tipoErrorAux = '';
        var fechaActual = new Date();
        if (this.partidaPrioridad.tipo !== 'Publicaciones') {
            if (this.partidaPrioridad.anoCaduca != 'Seleccionar') {
                if (this.partidaPrioridad.mesCaduca !== null && this.partidaPrioridad.mesCaduca !== undefined && this.partidaPrioridad.mesCaduca !== '--NINGUNO--' && tipoError === "") {
                    if (parseInt(this.partidaPrioridad.anoCaduca) == fechaActual.getFullYear()) {
                        var mes = this.partidaPrioridad.mesNum;
                        if (mes < fechaActual.getMonth()) {
                            tipoError = this.textoAlerta = "La caducidad es incorrecta";
                        }
                    }
                }
                else {
                    tipoError = this.textoAlerta = "La caducidad es incorrecta";
                }
            }
            else {
                tipoError = this.textoAlerta = "La caducidad es incorrecta";
            }
            if (this.partidaPrioridad.tipoPresentacion === null || this.partidaPrioridad.tipoPresentacion === undefined || this.partidaPrioridad.tipoPresentacion === '--NINGUNO--' || this.partidaPrioridad.tipoPresentacion === 'Seleccionar' && tipoError == "") {
                tipoError = this.textoAlerta = "El dato presentación es incorrecto";
            }
            else if (this.partidaPrioridad.manejo === null || this.partidaPrioridad.manejo === undefined || this.partidaPrioridad.manejo === '--NINGUNO--' || this.partidaPrioridad.manejo === 'Seleccionar' && tipoError == "") {
                tipoError = this.textoAlerta = "El dato de almacenaje es incorrecto";
            }
            else if (this.partidaPrioridad.fabrica !== null && this.partidaPrioridad.fabrica != 'USP' && tipoError == "") {
                if (this.partidaPrioridad.lote === null || this.partidaPrioridad.lote === undefined || this.partidaPrioridad.lote === "") {
                    tipoError = this.textoAlerta = "El dato de lote es incorrecto";
                }
            }
            else if (this.partidaPrioridad.fabrica !== null && this.partidaPrioridad.fabrica == 'USP' && tipoError == "") {
                if (this.partidaPrioridad.lote === undefined || this.partidaPrioridad.lote === '--NINGUNO--' || this.partidaPrioridad.lote === 'Seleccionar') {
                    tipoError = this.textoAlerta = "El dato de lote es incorrecto";
                }
            }
            if ((this.partidaPrioridad.cantidad === null || this.partidaPrioridad.cantidad === "") && (this.partidaPrioridad.cantidadCambio === null || this.partidaPrioridad.cantidadCambio === "")) {
                tipoError = this.textoAlerta = "Cantidad incorrecta";
            }
            else if ((this.partidaPrioridad.unidad === null || this.partidaPrioridad.unidad === "" || this.partidaPrioridad.unidad === 'Seleccionar') && (this.partidaPrioridad.unidadCambio === null || this.partidaPrioridad.unidadCambio === "" || this.partidaPrioridad.unidadCambio === 'Seleccionar')) {
                tipoError = this.textoAlerta = "Unidad incorrecta";
            }
            if (this.partidaPrioridad.manejoTransporte === null || this.partidaPrioridad.manejoTransporte === undefined || this.partidaPrioridad.manejoTransporte === '--NINGUNO--' || this.partidaPrioridad.manejoTransporte === 'Seleccionar' && tipoError == "") {
                tipoError = this.textoAlerta = "El dato de transportación es incorrecto";
            }
            if (this.conDocumentacion) {
                this.conDocumentacion = true;
                if (this.documentoCertificado.nombre == "") {
                    // tipoError = this.textoAlerta = "Falta cargar documentación";
                    this.cambiarNoDesp = true;
                    tipoError = 'noDespachable';
                }
                else {
                    this.cambiarNoDesp = false;
                }
            }
            else {
                this.conDocumentacion = false;
            }
        }
        else {
            if (this.partidaPrioridad.idioma === undefined || this.partidaPrioridad.idioma === '--NINGUNO--' || this.partidaPrioridad.idioma === 'Seleccionar') {
                tipoError = this.textoAlerta = "El idioma es incorrecto";
            }
            else if (this.partidaPrioridad.edicion === "" && tipoError == "") {
                tipoError = this.textoAlerta = "La edición es incorrecta";
            }
        }
        return tipoError;
    };
    VistaSeccionesInspeccionComponent.prototype.cerrarAlerta = function () {
        var _this = this;
        var idUsuario = __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        if (this.vieneDe == "guardar") {
            this.comunService.finalizarI(true);
            /******Se llama al servicio qeu a parta una partida para verificar el pedimento******/
            this.coreComponent.openModal(1);
            this.inspeccionT.apartarInspeccion(idUsuario).subscribe(function (data) {
                if (data.current) {
                    _this.partidaPrioridadNueva = data.current;
                    /*********VALIDACIÓN PARA REGRESAR A LA VISTA DE GRABAR ********/
                    if (_this.partidaPrioridadNueva.pedimento === _this.partidaPrioridad.pedimento) {
                        _this.reiniciarVista.emit(true); /***Se hace la llamada a la vista de grabar***/
                    }
                    else {
                        // Se comento para que en cualquier caso regrese a la vista Grabar ya que se quito la sección de pedimento
                        /*this.reiniciarVista.emit(false); /!***Se hace la llamada para recargar la vista principal***!/*/
                        _this.reiniciarVista.emit(true); /***Se hace la llamada a la vista de grabar***/
                    }
                    _this.coreComponent.closeModal(1);
                }
                else {
                    _this.reiniciarVista.emit(false); /***Se hace la llamada para recargar la vista principal***/
                    _this.coreComponent.closeModal(1);
                }
            }, function (error) {
                _this.coreComponent.closeModal(1);
            });
            ///////// this.reiniciarVista.emit(); /***Se hace la llamada para recargar la vista principal***/
        }
        else if (this.vieneDe === 'duplicado') {
            this.mostrarAlerta = false;
            this.vieneDe = "";
            this.reiniciaBarra = false;
            this.reiniciarVista.emit(false);
        }
        this.mostrarAlerta = false;
        this.vieneDe = "";
        this.reiniciaBarra = false;
    };
    VistaSeccionesInspeccionComponent.prototype.verificarAvance = function () {
        var _this = this;
        if (this.verificarInformacionCompleta() == "") {
            this.maxItemList = undefined; // Se pasa a la 2 vista
            this.avanzarSimple();
        }
        else if (this.verificarInformacionCompleta() == 'noDespachable') {
            this.maxItemList = undefined; //  Se agrego para pasar a la tercer vista directamente
            setTimeout(function () {
                _this.avanzarSimple();
            }, 2);
        }
        else {
            this.mostrarAlerta = true; // No avanza a ninfuna vista
        }
    };
    VistaSeccionesInspeccionComponent.prototype.cargarDocumentos = function (archivo) {
        if (archivo.tipo == 'Certificado') {
            this.documentoCertificado = archivo.doc;
        }
        else {
            this.documentoHoja = archivo.doc;
        }
    };
    VistaSeccionesInspeccionComponent.prototype.recibeConDocumentacion = function (conDoc) {
        this.conDocumentacion = conDoc;
        console.log(this.conDocumentacion);
    };
    // verificaRegreso() {
    //   if (this.contDespachable < 1 || this.contIncidencia <1) {
    //     this.permiteRegresar;
    //     //  this.regresar();
    //   } else this.permiteRegresar = false;
    // }
    VistaSeccionesInspeccionComponent.prototype.recibeListaPiezas = function (list) {
        this.listaPiezas = list;
        console.log("---listaPzas", this.listaPiezas);
    };
    VistaSeccionesInspeccionComponent.prototype.finalizar = function (obj) {
        this.infoCompleta = true;
        if (obj.ubicacion == "") {
            this.infoCompleta = false;
        }
        // if (this.partidaPrioridad.manejo == "Ambiente" && obj.numAnaquel == 0) {
        //   this.infoCompleta = false;
        // }
        if (this.infoCompleta) {
            this.param.listaPzas = Object.assign([], this.listaPiezas);
            this.param.idCompra = this.partidaPrioridad.idPartidaCompra;
            this.param.idPPedido = this.partidaPrioridad.idPPedido;
            this.param.usuario = __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
            if (this.partidaPrioridad.cantidadCompra === this.contIncidencia) {
                this.param.ubicacionAsignada = obj.ubicacionIncidencia;
            }
            else {
                this.param.ubicacionAsignada = obj.ubicacion;
            }
            this.param.ubicacion = this.partidaPrioridad.manejo;
            this.param.fechaInspeccion = "12Jul2018";
            this.param.numRechazos = this.partidaPrioridad.contIncidencia;
            this.param.finalizarPendiente = true;
            this.param.fechaInicio = new Date();
            this.param.videoPartida = this.folioVideo;
            this.param.codigoQrBolsa = "QR-" + this.partidaPrioridad.codigoQrBolsa;
            this.param.qrBolsaIncidencia = "QR-" + this.partidaPrioridad.qrBolsaIncidencia;
            this.param.prioridad = this.partidaPrioridad.prioridad; /// Se agrego esta linea para enviar la prioridad
            this.param.aplicaDocumentacion = this.conDocumentacion; /// Se agrego esta linea para enviar si hay o no documentos
            this.param.cantidadProducto = this.partidaPrioridad.cantidad; //
            this.param.unidadProducto = this.partidaPrioridad.unidad; //
            this.param.idProducto = this.partidaPrioridad.idProducto;
            this.param.manejo = this.partidaPrioridad.manejo;
            this.param.manejoTransporte = this.partidaPrioridad.manejoTransporte;
            this.param.lote = this.partidaPrioridad.lote;
            this.param.tipoPresentacion = this.partidaPrioridad.tipoPresentacion;
            this.param.nombreImagenesRechazo = this.partidaPrioridad.nombreImagenesRechazo;
            this.param.idioma = this.partidaPrioridad.idioma;
            this.param.edicion = this.partidaPrioridad.edicion;
            this.param.cantDespachables = this.partidaPrioridad.contDespachable;
            this.param.idProveedor = this.partidaPrioridad.idProveedor;
            this.param.documentosSDS = this.partidaPrioridad.sds;
            this.param.documentos = this.partidaPrioridad.documentacion;
            this.param.cargaDoc = this.partidaPrioridad.cargaDoc;
            this.param.comentarios = this.partidaPrioridad.comentariosImagen;
            this.param.tipo = this.partidaPrioridad.tipo;
            if (this.partidaPrioridad.unidadCambio !== undefined && this.partidaPrioridad.unidadCambio !== null) {
                this.param.unidadCambio = this.partidaPrioridad.unidadCambio;
            }
            else if (this.partidaPrioridad.unidad !== null) {
                this.param.unidadCambio = this.partidaPrioridad.unidad.toString();
            }
            if (this.partidaPrioridad.cantidadCambio !== undefined && this.partidaPrioridad.cantidadCambio !== null) {
                this.param.cantidadCambio = this.partidaPrioridad.cantidadCambio;
            }
            else {
                this.param.cantidadCambio = this.partidaPrioridad.cantidad;
            }
            this.param.codigoProd = this.partidaPrioridad.codigo;
            this.param.presentacionProd = this.partidaPrioridad.concepto;
            this.param.marca = this.partidaPrioridad.nombreProveedor;
            this.param.idInspeccionOC = this.partidaPrioridad.idPartidaInspeccion;
            this.param.idUsuario = __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        }
        else {
            this.textoAlerta = "Faltan datos para finalizar las inspección";
            this.mostrarAlerta = true;
            this.finalizarActivo = false;
        }
        if (this.partidaPrioridad.pasosImprimirEtiqueta == true)
            this.finalizarInspeccion();
        else {
            this.guardarConsumible();
            //  this.finalizarInspeccion(this.param);
        }
        this.guardarExistenciasUbicacion(obj.ubicacion, this.partidaPrioridad.contDespachable, obj.ubicacionIncidencia, this.partidaPrioridad.contIncidencia);
        return this.param;
    };
    VistaSeccionesInspeccionComponent.prototype.finalizarInspeccion = function () {
        var _this = this;
        var folio;
        if (this.param.idCompra === undefined) {
            this.finalizarActivo = true;
        }
        else {
            this.coreComponent.openModal(1);
            this.inspeccionT.recibeRespuestaFinalizarInspeccion(this.param).subscribe(function (data) {
                console.log(data);
                _this.partidaPrioridad.cargaDoc = false;
                if (data.current == true) {
                    _this.textoAlerta = "Operación exitosa";
                    _this.mostrarAlerta = true;
                    _this.vieneDe = "guardar";
                    //  this.reiniciaBarra = true;
                }
                else if (data.current !== '' && data.current !== undefined && data.current !== null && data.current !== false) {
                    _this.etiquetaStock = true;
                    _this.cantEtiquetas = data.current.length;
                    _this.cambiarNoDesp = false;
                    for (var i = 0; i < data.current.length; i++) {
                        folio = data.current[i];
                        _this.imprimirEtiqueta(_this.param, folio);
                    }
                }
                _this.coreComponent.closeModal(1);
            }, function (error) {
                console.log(error);
            });
            // }
            // this.vieneDe = "guardar";
            // this.reiniciaBarra = true;
            // his.finalizarActivo = false;
            //  this.mostrarPopFinalizar = false;
            // this.textoAlerta = "Operación exitosa";
            // this.mostrarAlerta = true;
        }
    };
    VistaSeccionesInspeccionComponent.prototype.activarPopFinalizar = function () {
        this.textoAlerta = "Operación exitosa";
        this.mostrarAlerta = true;
        this.vieneDe = "guardar";
    };
    VistaSeccionesInspeccionComponent.prototype.imprimir = function () {
        var _this = this;
        if (this.partidaPrioridad.manejo === 'Ambiente') {
            this.rutaManejo = this.rutaImg + 'ambiente.svg';
        }
        else if (this.partidaPrioridad.manejo === 'Refrigeracion' || this.partidaPrioridad.manejo === 'Refrigeración') {
            this.rutaManejo = this.rutaImg + 'refrigeracion.svg';
        }
        else if (this.partidaPrioridad.manejo === 'Congelacion' || this.partidaPrioridad.manejo === 'Congelación') {
            this.rutaManejo = this.rutaImg + 'congelacion.svg';
        }
        this.param.idCompra = this.partidaPrioridad.idPartidaCompra;
        this.param.idInspeccionOC = this.partidaPrioridad.idPartidaInspeccion;
        this.param.idUsuario = __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        this.inspeccionT.verificarFinalizar(this.param).subscribe(function (data) {
            if (data.current === true) {
                _this.param.idCompra = undefined;
                _this.imprimirEtiqueta(_this.param, _this.partidaPrioridad.folioEtiqueta);
                console.log('Soy ubicacion a imprimir<<<----->>>', _this.ubicacionImp);
            }
            else if (data.current !== undefined && data.current !== null && data.current.inspector !== null) {
                console.log('Llego el usuario ==>', data.current.inspector);
                _this.vieneDe = 'duplicado';
                _this.textoAlerta = 'Las piezas ya fueron inspeccionadas por el usuario: ' + data.current.inspector;
                _this.mostrarAlerta = true;
            }
        });
    };
    VistaSeccionesInspeccionComponent.prototype.imprimirEtiqueta = function (datos, folioEtiqueta) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var fee, cliente, tipoPartida, fechaSec, estado, usuario, BrowserWindow, newWin, fecha, barcode, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tipoPartida = '';
                        if (this.partidaPrioridad.fechaEstimadaEntrega !== null && this.partidaPrioridad.fechaEstimadaEntrega !== undefined) {
                            fechaSec = this.partidaPrioridad.fechaEstimadaEntrega.toString().split('-');
                            fee = fechaSec[1] + fechaSec[2] + fechaSec[0].substring(2, 4);
                        }
                        else {
                            fee = '';
                        }
                        if (this.partidaPrioridad.aceptaParciales === 1) {
                            tipoPartida = '(Pa';
                        }
                        else {
                            tipoPartida = '(NPa';
                        }
                        if (this.partidaPrioridad.tipoPartida === 'Programado') {
                            tipoPartida += '/Pr)';
                        }
                        else {
                            tipoPartida += ')';
                        }
                        console.log(datos, 'Soy datos de imprimir');
                        if (!this.cambiarNoDesp) {
                            estado = 'Despachables';
                        }
                        else if (this.cambiarNoDesp) {
                            estado = 'No Despachables';
                        }
                        if (this.partidaPrioridad.nombreCliente !== null && this.partidaPrioridad.nombreCliente !== this.ubicacionNoDes) {
                            cliente = this.partidaPrioridad.nombreCliente;
                        }
                        else {
                            tipoPartida = '(NA)';
                            cliente = 'STOCK';
                        }
                        usuario = __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
                        BrowserWindow = electron.remote.BrowserWindow;
                        newWin = new BrowserWindow({ width: 288, height: 216 });
                        fecha = this.transform(new Date());
                        return [4 /*yield*/, this.getBarcode(folioEtiqueta)];
                    case 1:
                        barcode = _a.sent();
                        html = [
                            "<html><head>",
                            "<style>",
                            "@media print { @page {size: 11cm 10cm;padding:0;page-break-inside: avoid;page-break-before: avoid;page-break-after: avoid;}}",
                            ".contenido {position: absolute;max-width: 9.5cm; page-break-inside: avoid; page-break-before: avoid;page-break-after: avoid;} .bcode{font-family:'Code 128'; font-size:12px;} img{page-break-inside: avoid; page-break-before: avoid;page-break-after: avoid;}",
                            "</style></head>",
                            "<body> <div class='contenido'>",
                            "<img style='width: 9.5cm; height:1.5cm; margin-top:-20px;' ",
                            "src='" + barcode + "'>",
                            "</div>",
                            "<div style='padding-top: 37px' >",
                            "<div style='font-size: 18px; min-height: 23px; align-self: center; text-align: center;'>" + folioEtiqueta + "</div>",
                            "<div style='flex-direction: row; display: flex; padding-top: 15px;' >",
                            "<div  style='font-size: 14px; min-height:23px; width:160px; min-width:150px;text-align:right;padding-right: 5px'> Cliente:</div>",
                            "<div  style='font-size: 14px; min-height:23px;'> " + cliente + "</div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex;' >",
                            "<div  style='font-size: 14px; height:23px;width: 432px;  font-weight: bold; text-align: center;'> " + tipoPartida + ' ' + fee + "</div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex;' >",
                            "<div  style='font-size: 14px; height:23px; width:160px; text-align:right; padding-right: 5px'> Estatus:</div>",
                            "<div  style='font-size: 14px; height:23px; font-weight: bold; '> " + estado + "</div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex;' >",
                            "<div  style='font-size: 14px; height:23px; width:160px; text-align:right; padding-right: 5px'> Inspecciono: </div>",
                            "<div  style='font-size: 14px; height:23px;'> " + usuario + "</div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex;' >",
                            "<div  style='font-size: 14px; height:23px; width:160px; text-align:right; padding-right: 5px'> Tipo:</div>",
                            "<div  style='font-size: 14px; height:23px;'> " + this.partidaPrioridad.tipo + "</div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex;' >",
                            "<div  style='font-size: 14px; height:23px; width:160px; text-align:right; padding-right: 5px'> Control: </div>",
                            "<div  style='font-size: 14px; height:23px;'>" + this.partidaPrioridad.control + "</div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex;' >",
                            "<div  style='font-size: 14px; height:23px; width:160px; text-align:right; padding-right: 5px'> Ubicación:</div>",
                            "<div  style='font-size: 14px; height:23px;'> " + this.ubicacionImp + "</div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex;' >",
                            "<div  style='font-size: 14px;height:20px; width:160px; text-align:right; padding-right: 5px'> Inspeccionado:</div>",
                            "<div  style='font-size: 14px;'> " + fecha + "</div>",
                            "</div>",
                            "</div>",
                            "</body></html>"
                        ].join("");
                        newWin.loadURL("data:text/html;charset=utf-8," + encodeURI(html));
                        newWin.hide();
                        // newWin.webContents.openDevTools()
                        newWin.webContents.on('did-finish-load', function () {
                            console.log(newWin.webContents.getPrinters());
                            var prints = newWin.webContents.getPrinters();
                            var impresora = "";
                            for (var _i = 0, prints_1 = prints; _i < prints_1.length; _i++) {
                                var print_1 = prints_1[_i];
                                if (print_1.description == "ZebraTicket") {
                                    impresora = print_1.name;
                                }
                            }
                            newWin.webContents.print({ silent: false, printBackground: false, deviceName: impresora }, function (success) {
                                newWin.close();
                            });
                            _this.cantEtiquetas--;
                            if (_this.etiquetaStock && _this.cantEtiquetas === 0) {
                                _this.activarPopFinalizar();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    VistaSeccionesInspeccionComponent.prototype.transform = function (dateToFormat) {
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
        var hour = hora + ':' + minutos;
        switch (mes) {
            case 0:
                date = now.getDate() + '/Ene/' + now.getFullYear() + " " + hour;
                break;
            case 1:
                date = now.getDate() + '/Feb/' + now.getFullYear() + " " + hour;
                break;
            case 2:
                date = now.getDate() + '/Mar/' + now.getFullYear() + " " + hour;
                break;
            case 3:
                date = now.getDate() + '/Abr/' + now.getFullYear() + " " + hour;
                break;
            case 4:
                date = now.getDate() + '/May/' + now.getFullYear() + " " + hour;
                break;
            case 5:
                date = now.getDate() + '/Jun/' + now.getFullYear() + " " + hour;
                break;
            case 6:
                date = now.getDate() + '/Jul/' + now.getFullYear() + " " + hour;
                break;
            case 7:
                date = now.getDate() + '/Ago/' + now.getFullYear() + " " + hour;
                break;
            case 8:
                date = now.getDate() + '/Sep/' + now.getFullYear() + " " + hour;
                break;
            case 9:
                date = now.getDate() + '/Oct/' + now.getFullYear() + " " + hour;
                break;
            case 10:
                date = now.getDate() + '/Nov/' + now.getFullYear() + " " + hour;
                break;
            case 11:
                date = now.getDate() + '/Dic/' + now.getFullYear() + " " + hour;
                break;
            default:
                break;
        }
        return date;
    };
    VistaSeccionesInspeccionComponent.prototype.recibeRespuestaFinalizarInspeccion = function (parametros) {
        this.inspeccionT.obtenerModoInspeccion().subscribe(function (data) {
            // this.tipoInspeccion= data.current;
        }, function (error) {
            console.log(error);
        });
    };
    VistaSeccionesInspeccionComponent.prototype.recibeIniciarVideo = function (valor) {
        this.iniciaVideo = valor;
        console.log("bandera para iniciar video", valor, this.iniciaVideo);
    };
    VistaSeccionesInspeccionComponent.prototype.guardaDocumentacion = function (lista) {
        var _this = this;
        var aux;
        for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
            aux = lista_1[_i];
            var file = aux[0];
            var folioDocumento = aux[1];
            var subcarpeta = aux[2];
            var tipoArchivo = aux[3];
            if (tipoArchivo === 'Certificado') {
                this.partidaPrioridad.documentacion = folioDocumento;
            }
            else {
                this.partidaPrioridad.sds = folioDocumento;
            }
            this.inspeccionT.guardaDocumentacion(file, folioDocumento, subcarpeta, tipoArchivo).subscribe(function (data) {
                _this.partidaPrioridad.cargaDoc = true;
                console.log(data);
            }, function (error) {
                console.log(error);
            });
        }
    };
    VistaSeccionesInspeccionComponent.prototype.guardarExistenciasUbicacion = function (ubicacionDesp, pzasDesp, ubicacionNoDesp, pzasND) {
        var data;
        data = new Object;
        if (ubicacionDesp == undefined)
            ubicacionDesp = "";
        if (ubicacionNoDesp == undefined)
            ubicacionNoDesp = "";
        data = {
            idUbicacion: ubicacionDesp,
            idUbicacionIncidencia: ubicacionNoDesp,
            pzasDespachables: this.partidaPrioridad.contDespachable,
            pzasIncidencias: this.partidaPrioridad.contIncidencia
        };
        this.inspeccionT.guardarExistenciaUbicacion(data).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    VistaSeccionesInspeccionComponent.prototype.startFunction = function () {
        var video = document.getElementsByTagName('video')[0];
        if (video) {
            this.mediaConstraints = {
                video: { mandatory: { minWidth: 1480, minHeight: 1024 } }, audio: false
            };
            var that = this;
            navigator.getUserMedia({ video: true, audio: false }, function (stream) {
                that.theStream = stream;
                var video = document.getElementsByTagName('video')[0];
                video.src = window.URL.createObjectURL(stream);
                video.muted = true;
                try {
                    that.mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });
                }
                catch (e) {
                    console.error('Exception while creating MediaRecorder: ' + e);
                    return;
                }
                that.theRecorder = that.mediaRecorder;
                console.log(that.recordedChunks);
                that.mediaRecorder.ondataavailable =
                    function (event) { that.recordedChunks.push(event.data); };
                that.mediaRecorder.start(100);
            }, function (error) {
                console.log(error);
            });
        }
    };
    VistaSeccionesInspeccionComponent.prototype.gotMedia = function (stream) {
        var _this = this;
        this.theStream = stream;
        var video = document.querySelector('video');
        video.src = window.URL.createObjectURL(stream);
        video.onloadedmetadata = function (e) { return video.play(); };
        try {
            this.mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });
        }
        catch (e) {
            console.error('Exception while creating MediaRecorder: ' + e);
            return;
        }
        this.theRecorder = this.mediaRecorder;
        this.mediaRecorder.ondataavailable =
            function (event) { _this.recordedChunks.push(event.data); };
        this.mediaRecorder.start(100);
    };
    VistaSeccionesInspeccionComponent.prototype.save = function () {
        var _this = this;
        this.theRecorder.stop();
        this.theStream.getTracks().forEach(function (track) { track.stop(); });
        var blob = new Blob(this.recordedChunks, { type: "video/webm" });
        var url = URL.createObjectURL(blob);
        this.base64(blob).then(function (data) {
            var base = data.split(",");
            //  console.log(base);
            var b64 = base[1];
            //  console.log(b64);
            _this.guardarVideo(b64);
        });
        setTimeout(function () { URL.revokeObjectURL(url); }, 100);
    };
    VistaSeccionesInspeccionComponent.prototype.base64 = function (blob) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = function () {
                resolve(reader.result);
            };
        });
    };
    VistaSeccionesInspeccionComponent.prototype.guardarVideo = function (obj) {
        var _this = this;
        var data;
        data = new Object;
        data = {
            video: obj,
            concepto: "Grabacion Lote Inspeccion"
        };
        this.inspeccionT.nombreArchivo(data).subscribe(function (data) {
            console.log(data);
            _this.nombreArchivo = data.current;
            _this.comunService.enviaFolio(_this.nombreArchivo);
        }, function (error) {
            console.log(error);
        });
    };
    VistaSeccionesInspeccionComponent.prototype.guardarConsumible = function () {
        var _this = this;
        var cantidad = 0;
        var data;
        data = new Object;
        if (this.partidaPrioridad.codigoQrBolsa !== undefined) {
            cantidad = cantidad + 1;
        }
        if (this.partidaPrioridad.qrBolsaIncidencia !== undefined) {
            cantidad = cantidad + 1;
        }
        data = { cantidad: cantidad, tipoBolsa: 'BolsaInspeccion' };
        this.inspeccionT.guardarConsumible(data).subscribe(function (data) {
            console.log(data);
            if (data.current == true) {
                _this.finalizarInspeccion();
            }
            else {
                _this.finalizarActivo = false;
                _this.textoAlerta = "Error en la tabla Consumibles ";
                _this.mostrarAlerta = true;
            }
        }, function (error) {
            console.log(error);
        });
    };
    VistaSeccionesInspeccionComponent.prototype.recibirUbicacionNoD = function (ubicacion) {
        this.ubicacionNoDes = ubicacion;
    };
    VistaSeccionesInspeccionComponent.prototype.getBarcode = function (code) {
        var _this = this;
        return new Promise(function (resolve) {
            var parameter = new __WEBPACK_IMPORTED_MODULE_10__class_Parametros_class__["a" /* Parametros */]();
            parameter.code = code;
            _this._commonService.getBarcode(parameter)
                .subscribe(function (data) {
                resolve(data.current);
            }, function (error) {
                resolve("https://barcode.tec-it.com/barcode.ashx?data=" + code + "&code=Code128&multiplebarcodes=false&translate-esc=false&unit=Fit&dpi=96&imagetype=Gif&rotation=0&color=%23000000&bgcolor=%23ffffff&qunit=Mm&quiet=0");
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('vistaInspeccionPartida'),
        __metadata("design:type", Object)
    ], VistaSeccionesInspeccionComponent.prototype, "vistaInspeccion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('vistaInspeccionPiezas'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__inspeccion_nivel_pieza_inspeccion_nivel_pieza_component__["a" /* InspeccionNivelPiezaComponent */])
    ], VistaSeccionesInspeccionComponent.prototype, "vistaPiezas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('popConf'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], VistaSeccionesInspeccionComponent.prototype, "popC", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('video'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], VistaSeccionesInspeccionComponent.prototype, "video", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */])
    ], VistaSeccionesInspeccionComponent.prototype, "partidaPrioridad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], VistaSeccionesInspeccionComponent.prototype, "conDocumentacion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VistaSeccionesInspeccionComponent.prototype, "reiniciarVista", void 0);
    VistaSeccionesInspeccionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-vista-secciones-inspeccion',
            template: __webpack_require__("./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-secciones-inspeccion/vista-secciones-inspeccion.component.html"),
            styles: [__webpack_require__("./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-secciones-inspeccion/vista-secciones-inspeccion.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_8__services_inspeccion_inspeccion_service__["a" /* InspeccionService */],
            __WEBPACK_IMPORTED_MODULE_7__services_comun_comun_service__["a" /* ComunService */],
            __WEBPACK_IMPORTED_MODULE_9__core_container_core_container_component__["a" /* CoreContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__services_comun_comun_service__["a" /* ComunService */]])
    ], VistaSeccionesInspeccionComponent);
    return VistaSeccionesInspeccionComponent;
}());



/***/ }),

/***/ "./src/app/components/responsableae/menu-roles/menu-roles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\n    <div style=\"display: flex;  flex-direction: column\">\n        <div class=\"texto\">\n            <label class=\"menu\"> INSPECTOR </label>\n        </div>\n        <div class=\"barraEntreMenus\" ></div>\n        <a class=\"fondoSubmenu\" *ngIf=\"!vistaInicialActiva\" >\n            <label class=\"subMenu\"  >\n               Inspeccionar Productos\n            </label>\n            <div class=\"contenedor\">\n                <div class=\"rectangulo\"></div>\n                <div class=\"centrado\">{{pendiente}}\n                </div>\n            </div>\n        </a>\n        <a class=\"fondoSubmenu\" *ngIf=\"vistaInicialActiva\" (click)=recargaGraficas() style=\"cursor:pointer\">  <!--(click)=recargaGraficas()-->\n            <label class=\"subMenu\" style=\"cursor:pointer\"> <!--style=\"cursor:pointer\"-->\n               Inspeccionar Productos\n            </label>\n            <div class=\"contenedor\" style=\"cursor:pointer\"> <!-- style=\"cursor:pointer\"-->\n              <div class=\"rectangulo\"></div>\n                    <div class=\"centrado\">{{pendiente}}\n                </div>\n            </div>\n\n        </a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/responsableae/menu-roles/menu-roles.component.scss":
/***/ (function(module, exports) {

module.exports = ".padre {\n  height: 100%;\n  width: 100%;\n  background: #E6E6E6; }\n\n.texto {\n  background-color: #008895;\n  color: #FFFFFF;\n  height: 40px;\n  width: 100%;\n  font-size: 14px;\n  font-family: Roboto;\n  font-weight: bold; }\n\n.menu {\n  top: 10px;\n  position: relative;\n  padding-left: 10px; }\n\n.fondoSubmenu {\n  background-color: #CCCCCC;\n  height: 36px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.subMenu {\n  position: relative;\n  padding-left: 24px;\n  color: #000000;\n  font-size: 14px;\n  font-family: Roboto;\n  font-weight: bold;\n  padding-right: 39px; }\n\n.barraEntreMenus {\n  background-color: #E6E6E6;\n  height: 6px;\n  width: 100%; }\n\n.contenedor {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n  padding-right: 14px; }\n\n.texto-encima {\n  position: absolute;\n  top: 1px;\n  left: 12px;\n  size: 12px; }\n\n.centrado {\n  position: absolute;\n  top: 50%;\n  left: 38%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  font-size: 12px;\n  font-weight: bold; }\n\n.ovalo {\n  width: 50px;\n  height: 20px;\n  background: #FFFFFF;\n  border-radius: 100px / 50px; }\n\n.rectangulo {\n  width: 50px;\n  height: 20px;\n  background: #FFF;\n  border-radius: 9px; }\n\n.flex-item:nth-child(1) {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center; }\n\n.flex-item:nth-child(2) {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto; }\n"

/***/ }),

/***/ "./src/app/components/responsableae/menu-roles/menu-roles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuRolesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuRolesComponent = /** @class */ (function () {
    function MenuRolesComponent(router) {
        this.router = router;
        this.ocualtarAcordeon = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.recargaVistaInicial = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.vistaInicialActiva = true;
        this.oculto = false;
    }
    MenuRolesComponent.prototype.ngOnInit = function () {
    };
    MenuRolesComponent.prototype.efectoAcordeon = function () {
        this.oculto = !this.oculto;
        this.ocualtarAcordeon.emit(this.oculto);
    };
    MenuRolesComponent.prototype.ngOnChanges = function (change) {
        // console.log(change);
        // console.log("Menu roles:" + this.vistaInicialActiva);
    };
    MenuRolesComponent.prototype.recargaGraficas = function () {
        console.log('Entre a recargar vista :)');
        this.recargaVistaInicial.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], MenuRolesComponent.prototype, "ocualtarAcordeon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], MenuRolesComponent.prototype, "recargaVistaInicial", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MenuRolesComponent.prototype, "pendiente", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MenuRolesComponent.prototype, "vistaInicialActiva", void 0);
    MenuRolesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-menu-roles',
            template: __webpack_require__("./src/app/components/responsableae/menu-roles/menu-roles.component.html"),
            styles: [__webpack_require__("./src/app/components/responsableae/menu-roles/menu-roles.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], MenuRolesComponent);
    return MenuRolesComponent;
}());



/***/ }),

/***/ "./src/app/components/responsableae/responsableae-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponsableaeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__responsableae_component__ = __webpack_require__("./src/app/components/responsableae/responsableae.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResponsableaeRoutingModule = /** @class */ (function () {
    function ResponsableaeRoutingModule() {
    }
    ResponsableaeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__responsableae_component__["a" /* ResponsableaeComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ResponsableaeRoutingModule);
    return ResponsableaeRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/responsableae/responsableae.component.html":
/***/ (function(module, exports) {

module.exports = "<input type=\"number\" *ngIf=\"impresionActiva\" [ngModel]=\"cantidadImprimir\" (ngModelChange)=\"recibirDatos($event)\">\n<a (click)=\"imprimir()\" *ngIf=\"impresionActiva\">Clik me</a>\n<div class=\"padre\">\n\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\n    <aside [ngClass]=\"classAsideMenu\">\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\n<!--<pn-menu-roles [pendiente]=\"totalPendientes\" [vistaInicialActiva]=\"vistaInicialActiva\" (recargaVistaInicial)=\"recargarVista($event)\" style=\"width: 100%\" ></pn-menu-roles>-->\n        <pn-menu-seccion-roles [items]=\"itemsMenu\" [titulo]=\"'RESPONSABLE DE SURTIDO'\"  style=\"width: 100%;\" *ngIf=\"activarMenu\"></pn-menu-seccion-roles>\n      </div>\n    </aside>\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n    </div>\n\n  </div>\n\n\n\n  <div class=\"area\" style=\"width:100%; height:100%; \" [style.overflow]= \"ocultaScroll ? 'hidden' : 'scroll'\">\n\n    <div class=\"cabezera\">\n      <div style=\"cursor: pointer;\" *ngIf=\"!vistaInicialActiva\" (click)=\"regresarVista()\">\n        <img class=\"img\" src='./assets/Images/regresar.svg' />\n      </div>\n\n      <label class=\"etiqueta\">INSPECCIONAR PRODUCTOS</label>\n\n    </div>\n\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 64px)'}\" *ngIf=\"vistaInicialActiva\">\n\n      <div style=\"display: flex; width: 100%; height: 100%; flex-direction: column; min-width: 1052px\"><!-- <div style=\"display: flex; width: 100%; height: 100%; flex-direction: column; min-width: 950px\">-->\n\n\n        <div class=\"datosC\" style=\" height:75px; display: flex; flex-direction: column;padding: 15px 15px; box-sizing:border-box \">\n          <div class=\"subPadre\">\n            <div style=\"width:200px;  height:40px; min-width: 200px; display: flex; flex-direction: column\">\n              <label style=\"height: 50%; padding-left: 0px; width: 100%\" class=\"estiloDatos\"> TU OBJETIVO </label>\n              <label style=\"height: 50%; padding-left: 0px; width: 100%\" class=\"estiloDatos\"> DE INSPECCIÓN DE HOY </label>\n            </div>\n\n            <div style=\"max-width: 100px; min-width: 70px; height:50px; justify-content: center; display:flex;\">\n              <label class=\"estiloNumero\"> {{inspeccionDeceada}}</label>\n            </div>\n\n            <img class=\"img\" src='./assets/Images/objetivo.svg' style=\"width:22px; padding-bottom: 3px; padding-left: 5px;\" />\n            <div style=\"padding-left: 19px\">\n              <hr style=\" width:1px; height:38px; margin:0px; border-width:0\" color='#979797' />\n            </div>\n            <div style=\"width:165px; height:40px; display: flex; flex-direction: column\">\n              <label style=\"width: 100%\" class=\"estiloDatos\"> PIEZAS HOY </label>\n              <label style=\"width: 100%\" class=\"estiloDatos\"> INSPECCIONADAS </label>\n            </div>\n\n            <div style=\"max-width:85px; height:50px; padding-left: 5px;\">\n              <label class=\"estiloNumero\"> {{piezasInspeccionadas}}</label>\n            </div>\n\n            <div style=\"padding-left: 19px\">\n              <hr style=\" width:1px; height:38px; margin:0px; border-width:0\" color='#979797' />\n            </div>\n\n            <div style=\"padding-left: 1px; width:112px; height:40px; display: flex; flex-direction: column\">\n              <label style=\" width: 100%\" class=\"estiloDatos\"> INSPECCIÓN</label>\n              <label style=\" width: 100%\" class=\"estiloDatos\"> DESEADA </label>\n            </div>\n\n            <div style=\"flex-direction: row; width:115px; height:50px; position: relative;  padding-left: 5px;\">\n              <label class=\"estiloNumero\"> {{objetivoDeinspeccionAux}}</label>\n              <label [style.color]=\"colorIndiceInspeccionDeceada\" style=\"font-size:16px; color:#D0021B; font-weight: bold; position: absolute; top: -1px\"> {{inspeccionDeceadaHastaElMomento}}</label>\n            </div>\n\n            <div style=\"padding-left: 19px\">\n              <hr style=\" width:2px; height:38px; margin:0px; border-width:0\" color='#979797' />\n            </div>\n\n            <div style=\"width:110px; height: 40px; display: flex; flex-direction: column\">\n              <label style=\" width: 100%\" class=\"estiloDatos\"> MÍNIMO DE</label>\n              <label style=\" width: 100%\" class=\"estiloDatos\"> INSPECCIÓN </label>\n            </div>\n\n            <div style=\"flex-direction: row; width:120px; height:50px; position: relative; padding: 0px 10px 0px 10px;\">\n              <label class=\"estiloNumero\"> {{minimoDeInspeccion}}</label>\n              <label [style.color]=\"colorMinimoInspeccion\" style=\"font-size:16px; font-weight: bold; position: absolute; top: -1px\"> {{minimaInspeccionHastaElMomento}}</label>\n            </div>\n\n            <div>\n              <pq-pop-up-estadisticas *ngIf= \"cargarEstadisticas\" [totalesPorInspector]= \"totales_estadisticas\" [donaChart] = \"donaPEstadisticas\" [tipoGrafica] = \"tipoGraficaEstadisticas\"></pq-pop-up-estadisticas>\n              <!-- <pq-pop-up-estadisticas [totalesPorInspector]= \"totales_estadisticas\" [donita] = \"donaPEstadisticas\"  ></pq-pop-up-estadisticas> -->\n\n            </div>\n\n          </div>\n\n          <div style=\"width: 100%; padding-top: 3px;\" *ngIf=\"!vistaInicialActiva\">\n            <hr style=\" width:100%; height:1px; margin:0px; border-width:0\" color='#D8D8D8' />\n          </div>\n\n        </div>\n\n        <!-- <br height=24px/> -->\n        <div style=\"width:100%; border: solid 1px #88868A;\" *ngIf=\"vistaInicialActiva\">\n          <pn-botonera-dias (event)=\"filtrarDias($event)\" [iniciarBotonera]=\"'true'\" [tHoy]=\"tHoy\" [tTodo]=\"tTodo\" [tPasadoM]=\"tPasadoM\" [tManana]=\"tManana\" [tFuturo]=\"tFuturo\"></pn-botonera-dias>\n\n        </div>\n\n        <!-- <div>\n          <hr style=\" width:100px; height:2px; margin:0px; border-width:0\" color='#FFFFFF' />\n        </div> -->\n\n        <div [ngStyle]=\"{'width': '100%', 'height':'100%', 'flex-direction':'column', 'display':'flex',  'background': '#ECEEF0'}\" *ngIf=\"vistaInicialActiva\">\n\n          <div style=\"width: 100%; height: 100%; flex-direction:row; display:flex; box-sizing: border-box; padding-top: 3%;\">\n            <div [ngStyle]=\"{'width': '40%','height':'100%','display':'flex','align-items':'center', 'justify-content':'center', 'position':'relative', 'flex-direction':'column'}\">\n              <div [ngStyle]=\"{'width': '100%','height':'100%','display':'flex','align-items':'center',  'flex-direction':'column'}\">\n                <div style=\" width:100%; height: 10%; display:flex; align-items : center; justify-content: center;\">\n                  <label class=\"tituloGrafica\">PRODUCTOS</label>\n                </div>\n                <div style=\"height:  4%\"></div>\n                <div id=\"donaProducto\" style=\" height: 90%; \" >\n                <pn-donut-chart  *ngIf=\"activarProd\" [idGrafica]=\"'producto'\" [data]=\"dataProducto\" [tipoGrafica]=\"tipoGraficaProd\"> </pn-donut-chart> \n                <!-- <pn-dona [doughnutChartLabels]=\"arrayProductos\" [doughnutChartData]=\"array2\" [tipoGrafica]=\"tipoGrafica\"></pn-dona> -->\n               </div>\n              </div>\n\n            </div>\n\n            <div [ngStyle]=\"{'width': '8%', 'height':'100%'}\"></div>\n\n            <div [ngStyle]=\"{'width':'25%', 'height':'100%', 'flex-direction':'column', 'display':'flex', 'align-items': 'center','justify-content': 'center'}\">\n\n                  <!-- <pn-donut-chart [idGrafica]=\"'proveedor'\" [data]=\"data\" [tipoGrafica]=\"tipoGraficaPro\"  [height]= \"'25%'\"> </pn-donut-chart> -->\n\n\n              <div [ngStyle]=\"{'width':'100%', 'height':'50%', 'flex-direction':'column', 'display':'flex', 'align-items': 'center','justify-content': 'center'}\">\n                <div style= \"height: 10%; display: flex; justify-content: center; width: 100%; align-items: center;\">\n                  <label class=\"tituloGMediano\">PROVEEDORES</label>\n                </div>\n                <!-- <div style=\"height:2%\"></div> -->\n                <div id=\"donaProveedores\" style=\"height: 75%;\" >\n                  <pn-donut-chart *ngIf=\"activarGrProveedor\" [idGrafica]=\"'prioridades'\" [data]=\"dataProveedores\" [tipoGrafica]=\"tipoGraficaProveedores\" [height]= \"'25%'\" > </pn-donut-chart>\n                  <!-- <pn-dona [doughnutChartLabels]=\"arrayLabelPro\" [doughnutChartData]=\"arrayValoresPro\" [tipoGrafica]=\"tipoGraficaPro\"></pn-dona> -->\n\n                </div>\n\n              </div>\n\n\n\n              <div [ngStyle]=\"{'width':'100%', 'height':'50%', 'flex-direction':'column', 'display':'flex', 'align-items': 'center','justify-content': 'center'}\">\n                <div style= \"height: 10%; display: flex; justify-content: center; width: 100%; align-items: center;\">\n                  <label class=\"tituloGMediano\">PRIORIDADES</label>\n                </div>\n                <!-- <div style=\"height:2%\"></div> -->\n                <div id=\"donaPrioridades\" style=\"height: 75%;\" >\n                   <pn-donut-chart *ngIf=\"activarGrPrioridades\" [idGrafica]=\"'prioridades'\" [data]=\"dataPrioridades\" [tipoGrafica]=\"tipoGraficaPrioridadesGra\" [height]= \"'25%'\" > </pn-donut-chart> \n                  <!-- <pn-dona [doughnutChartLabels]=\"arrayLabelPrioridad\" [doughnutChartData]=\"arrayValoresPrioridad\" [tipoGrafica]=\"tipoGraficaPrioridades\"></pn-dona> -->\n\n                </div>\n\n              </div>\n\n            </div>\n\n            <div [ngStyle]=\"{'width': '5%', 'height':'100%'}\"></div>\n\n            <!--    grupo de las graficas pequeñas -->\n\n            <div [ngStyle]=\"{'width':'15%', 'height':'100%', 'flex-direction':'column', 'display':'flex', 'align-items': 'center','justify-content': 'center'}\">\n              <div [ngStyle]=\"{'width':'100%', 'height':'33%', 'flex-direction':'column', 'display':'flex', 'align-items': 'center','justify-content': 'center'}\">\n                <div style= \"height: 10%; display: flex; justify-content: center; width: 100%; align-items: center;\">\n                  <label class=\"tituloGMediano\">PRIORIDAD 1</label>\n                </div>\n                <div id=\"prioridad3\" style=\"height: 75%;\" >\n                  <pn-donut-chart *ngIf=\"activarGrPrioridades1\" [idGrafica]=\"'prioridades'\" [data]=\"dataPrioridades1\" [tipoGrafica]=\"tipoGraficaPrioridadesGra1\" [height]= \"'25%'\"> </pn-donut-chart> \n                  <!-- <pn-dona [doughnutChartLabels]=\"arraylabelP1\" [doughnutChartData]=\"arrayValoresP1\" [tipoGrafica]=\"tipoGraficaP1\"></pn-dona> -->\n                </div>\n\n              </div>\n\n\n              <div [ngStyle]=\"{'width':'100%', 'height':'33%', 'flex-direction':'column', 'display':'flex', 'align-items': 'center','justify-content': 'center'}\">\n                <div style= \"height: 10%; display: flex; justify-content: center; width: 100%; align-items: center;\">\n                  <label class=\"tituloGMediano\">PRIORIDAD 2</label>\n                </div>\n                <div id=\"prioridad2\" style=\"height: 75%;\" >\n                  <pn-donut-chart *ngIf=\"activarGrPrioridades2\" [idGrafica]=\"'prioridades'\" [data]=\"dataPrioridades2\" [tipoGrafica]=\"tipoGraficaPrioridadesGra2\" [height]= \"'25%'\"> </pn-donut-chart>\n                  <!-- <pn-dona [doughnutChartLabels]=\"arraylabelP2\" [doughnutChartData]=\"arrayValoresP2\" [tipoGrafica]=\"tipoGraficaP2\"></pn-dona> -->\n                </div>\n\n              </div>\n\n              <div [ngStyle]=\"{'width':'100%', 'height':'33%', 'flex-direction':'column', 'display':'flex', 'align-items': 'center','justify-content': 'center'}\">\n                <div style= \"height: 10%; display: flex; justify-content: center; width: 100%; align-items: center;\">\n                  <label class=\"tituloGMediano\">PRIORIDAD 3</label>\n                </div>\n                <div id=\"prioridad3\" style=\"height: 75%;\" >\n                  <pn-donut-chart *ngIf=\"activarGrPrioridades3\" [idGrafica]=\"'prioridades'\" [data]=\"dataPrioridades3\" [tipoGrafica]=\"tipoGraficaPrioridadesGra3\" [height]= \"'25%'\"> </pn-donut-chart>\n                  <!-- <pn-dona [doughnutChartLabels]=\"arraylabelP3\" [doughnutChartData]=\"arrayValoresP3\" [tipoGrafica]=\"tipoGraficaP3\"></pn-dona> -->\n                </div>\n\n              </div>\n\n\n            </div>\n\n          </div>\n\n          <div id=\"divBoton\"  >\n            <div class=\"botonIngresar\" style=\"width: 190px; cursor:pointer\" (click)=\"cambioDeVista()\" [style.pointerEvents] = \"banderaPrueba ? 'auto' : 'none'\">\n              <label [style.background]= \"banderaPrueba ? '#008895' : '#D5DBDB'\" class=\"botonIngresar \">INGRESAR</label>\n            </div>\n            </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"vistaInicial\" *ngIf=\"!vistaInicialActiva\">\n      <pq-vista-operacion-inspeccion  (iRVista)=\"reiniciarVistaA($event)\" [partidaPrioridad]=\"partidaPrioridad\" [inspector]=\"inspector\" [totales_estadisticas]= \" totales_estadisticas\" [donaPEstadisticas] = \"donaPEstadisticas\" [tipoGraficaEstadisticas] = \"tipoGraficaEstadisticas\" (actualizarDatos)=\"recargarDatos($event)\"></pq-vista-operacion-inspeccion>\n    </div>\n    <pq-alerta *ngIf=\"activarAlert\" [alertaTxt]=\"'Se han terminado partidas por inspeccionar'\" (confirmacion)=\"cerrarAler($event)\"></pq-alerta>\n    <pq-alerta *ngIf=\"activarAlerta\" [alertaTxt]=\"mensajePrio\" (confirmacion)=\"cerrarAlertaPrio($event)\"></pq-alerta>\n  </div>\n\n  <!--\n    <p style=\"font-size: 10px;font-style: 'Novecento'\"></p> -->\n\n\n  <!-- termina aqui la vista menu -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/responsableae/responsableae.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n/*\n * Typography\n * ========================================================================== */\n/*\n * Media queries breakpoints\n * ========================================================================== */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/*\n  * Components\n  * ========================================================================== */\n/* - Barra de navegación - */\n/* Variable base global para el tamaño de fuente: 9pt*/\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\np {\n  color: #000000; }\nh2 {\n  color: #ff0002; }\n.padre {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n.menu {\n  width: 160px;\n  background-color: #999999;\n  float: left; }\n.cabezera {\n  width: 100%;\n  height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 13px;\n  border-bottom: 2px solid black; }\n.etiqueta {\n  color: #424242;\n  font-size: 30px;\n  font-family: Novecento; }\n.estiloDatos {\n  color: #9B9B9B;\n  font-weight: bold;\n  font-family: Roboto;\n  padding-left: 10px;\n  font-size: 16px; }\n.estiloNumero {\n  color: #008895;\n  font-weight: bold;\n  font-size: 46px;\n  font-family: Roboto; }\n/* .menu{\n    width: 13%;\n    height: 100%;\n} */\n.area {\n  width: 100%;\n  height: 100%; }\n#doughnut1Div {\n  z-index: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative; }\n#doughnut1Div2 {\n  z-index: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative; }\n#totalDoughnut1 {\n  height: 70px;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n#totalDoughnut1 > label {\n    font-size: 14px;\n    text-align: center;\n    font-weight: 300; }\n#totalDoughnut1 > label:nth-of-type(2) {\n    font-size: 40px;\n    text-align: center;\n    font-weight: 700; }\n.total {\n  position: absolute;\n  width: 140px;\n  height: 70px;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n.total > label {\n    font-size: 14px;\n    text-align: center;\n    font-weight: 300; }\n.total > label:nth-of-type(2) {\n    font-size: 40px;\n    text-align: center;\n    font-weight: 700; }\n#totalDoughnut12 {\n  height: 70px;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n#totalDoughnut12 > label {\n    font-size: 14px;\n    text-align: center;\n    font-weight: 300; }\n#totalDoughnut12 > label:nth-of-type(2) {\n    font-size: 40px;\n    text-align: center;\n    font-weight: 700; }\n.total2 {\n  position: absolute;\n  width: 140px;\n  height: 70px;\n  margin: auto;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n.total2 > label {\n    font-size: 14px;\n    text-align: center;\n    font-weight: 300; }\n.total2 > label:nth-of-type(2) {\n    font-size: 40px;\n    text-align: center;\n    font-weight: 700; }\n.boto\n.datosC {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.subPadre {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  width: 100%;\n  height: 54px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 0px;\n  padding-top: 11px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.botonGrabar {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  top: 150px;\n  position: absolute;\n  right: 30px; }\n#papaGrafica {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n#graficaGrande {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 42%;\n  height: 100%; }\n.tituloGrafica {\n  font-size: 36px;\n  font-weight: bold; }\n.tituloGMediano {\n  font-size: calc((1vh + 1vw) / 2);\n  font-weight: bold; }\n.tituloGPequenio {\n  font-size: calc((1vh + 1vw) / 2);\n  font-weight: bold; }\n.botonIngresar {\n  width: 190px;\n  height: 50px;\n  background: #008894;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 21px;\n  cursor: pointer;\n  border: none;\n  color: #FFFFFF;\n  font-weight: bold;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto; }\n#divBoton {\n  width: 100%;\n  height: 60px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding-right: 10px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n#prioridad1, #prioridad2, #prioridad3 {\n  width: 55%; }\n#donaProducto {\n  width: 75%; }\n@media (min-width: 80em) {\n  #donaProveedores, #donaPrioridades {\n    width: 85%;\n    max-width: 150px;\n    max-height: 187px; }\n  #prioridad1, #prioridad2, #prioridad3 {\n    width: 90%;\n    max-width: 132px;\n    max-height: 134px; }\n  #donaProducto {\n    width: 72%;\n    padding-top: 10px;\n    max-height: 310px; } }\n@media (min-width: 92em) {\n  #donaProveedores, #donaPrioridades {\n    width: 70%;\n    max-width: 370px;\n    max-height: initial; }\n  #prioridad1, #prioridad2, #prioridad3 {\n    width: 86%;\n    max-width: 370px;\n    max-height: initial; }\n  #donaProducto {\n    width: 80%;\n    max-width: 800px;\n    max-height: initial; } }\n.aux .asideNormalMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  min-width: 181px;\n  width: 321px;\n  height: 100%;\n  overflow-y: scroll; }\n.aux .asideNormalMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n.aux > .asideOcultarMenu {\n  -webkit-animation-name: ocultarMenu;\n          animation-name: ocultarMenu;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-transition: 1s ease-in-out;\n  transition: 1s ease-in-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 0px;\n  width: 0px; }\n.aux > .asideOcultarMenu > .articulo {\n    width: 0px; }\n.aux > .asideMostrarMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  -webkit-animation-name: mostrarMenu;\n          animation-name: mostrarMenu;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-y: scroll; }\n.aux > .asideMostrarMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n@-webkit-keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@-webkit-keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n@keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n.vistaInicial {\n  width: 100%; }\n@media screen and (height: 770px) {\n  .cabezera {\n    width: 100%; }\n  .area {\n    overflow: scroll; }\n  .cabezera {\n    overflow: scroll; }\n  .vistaInicial {\n    height: 90%; } }\n@media all and (height: 770px) and (width: 1368px) {\n  .cabezera {\n    width: 100%; }\n  .area {\n    overflow: scroll; }\n  .cabezera {\n    overflow: scroll; }\n  .vistaInicial {\n    height: 90%; } }\n@media screen and (width: 2560px) and (height: 1440px) {\n  .vistaInicial {\n    height: 95%; } }\n@media screen and (min-height: 1360px) and (max-height: 1439px) {\n  .vistaInicial {\n    height: 96%; } }\n@media all and (max-height: 819px) and (min-height: 771px) {\n  .vistaInicial {\n    height: 90%; } }\n@media all and (max-height: 860px) and (min-height: 820px) {\n  .vistaInicial {\n    height: 91%; } }\n@media all and (max-height: 925px) and (min-height: 860px) {\n  .vistaInicial {\n    height: 92%; } }\n@media all and (max-height: 1070px) and (min-height: 926px) {\n  .vistaInicial {\n    height: 93%; } }\n@media all and (max-height: 1250px) and (min-height: 1070px) {\n  .vistaInicial {\n    height: 94%; } }\n@media all and (max-height: 1400px) and (min-height: 1250px) {\n  .vistaInicial {\n    height: 95%; } }\n@media all and (max-height: 1440px) and (min-height: 1400px) {\n  .vistaInicial {\n    height: 95%; } }\n@media screen and (width: 1920px) and (height: 1080px) {\n  .vistaInicial {\n    height: 93%; } }\n.img {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/responsableae/responsableae.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponsableaeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__ = __webpack_require__("./src/app/class/despachos/PartidaInspeccion.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__ = __webpack_require__("./src/app/class/compras/utils/query.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_inspeccion_inspeccion_service__ = __webpack_require__("./src/app/services/inspeccion/inspeccion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__class_despachos_parametrosInspeccion_class__ = __webpack_require__("./src/app/class/despachos/parametrosInspeccion.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ResponsableaeComponent = /** @class */ (function () {
    /**/
    function ResponsableaeComponent(router, _insp, coreComponent, comunService) {
        this.router = router;
        this._insp = _insp;
        this.coreComponent = coreComponent;
        this.comunService = comunService;
        this.vistaInicialActiva = true;
        this.squery = new __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__["a" /* Query */]();
        this.punterosProvee = new Array();
        this.universoPartidas = new Array();
        this.universoDias = new Array();
        this.universoActual = new Array();
        // Se crea esta copia del universo para mostrar la información de las partidas en la vista.
        this.copiaUniversoPartidas = new Array();
        this.classAsideMenu = "asideNormalMenu";
        this.tHoy = 0;
        this.tTodo = 0;
        this.tManana = 0;
        this.tPasadoM = 0;
        this.tFuturo = 0;
        this.totalPendientes = 0;
        this.objetivoDeinspeccion = 0;
        this.piezasInspeccionadas = 0;
        this.inspeccionDeceada = 0;
        this.inspeccionDeceadaHastaElMomento = 0;
        this.minimoDeInspeccion = 0;
        this.minimaInspeccionHastaElMomento = 0;
        this.colorIndiceInspeccionDeceada = "#D0021B";
        this.colorMinimoInspeccion = "#D0021B";
        this.mostrarMenuRoles = true;
        this.data = {
            titulo: "Totales",
            labels: ["ASISTENCIA", "INASISTENCIA"],
            valores: [39, 26],
            labelsExtras: ["Asistieron", "Faltaron"],
            labelsExtrasHover: ["Colaboradores"],
            valuesExtras: [39, 26],
            valuesExtrasHover: [[39], [26]]
        };
        /*******GRAFICAS*******/
        this.filtroProductos = [];
        this.nuevoProductos = [];
        this.listaClientes = [];
        this.graficasValores = [];
        this.nuevoClientes = [];
        this.nuevaPrioridad = [];
        this.filtroPE = [];
        this.nuevoPE = [];
        this.cargarEstadisticas = false;
        this.filtroProveedor = [];
        this.nuevoProducto = [];
        this.itemsMenu = [];
        this.mensajePrio = 'Se han terminado las partidas de Prioridad 1, ' +
            'deberia proceder a Embalar';
        this.cantidadImprimir = 0;
        this.impresionActiva = false;
    }
    ResponsableaeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recibePartidas();
        this.obtenerDatosInspector();
        this.obtenerContadorPendientes();
        this.recibeTotalesInspeccion();
        setTimeout(function () {
            //  this.obtenerPartidaInspeccion(this.inspector);
            _this.obtenerTotalesPorInspector(_this.inspector);
        }, 1000);
        this.subs = this.comunService.valueVideo
            .subscribe(function (data) {
            _this.ocultaScroll = data;
        });
        this.subs = this.comunService.finalizar.subscribe(function (data) {
            _this.vistasInspeccionFin = data;
            console.log(_this.vistasInspeccionFin, _this.objetivoDeinspeccion);
            if (_this.vistasInspeccionFin == true) {
                _this.tHoy = 0;
                _this.tManana = 0;
                _this.tPasadoM = 0;
                _this.tFuturo = 0;
                _this.tTodo = 0;
            }
        });
        //  this.filtrarDias("hoy");
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'inspeccion') {
                _this.recargarVista();
            }
        });
    };
    // reiniciarVistaP(valor){
    //   if (valor === true){
    //     this.vistaInicialActiva = true;
    //   }
    // }
    ResponsableaeComponent.prototype.recibePartidas = function () {
        var _this = this;
        this.activarAlerta = false;
        this.coreComponent.openModal(0);
        this._insp.recibePartidasInspeccion().subscribe(function (data) {
            var partidasAux = new Array();
            var arrayValores = new Array();
            var arrPart = new Array();
            var partTemp;
            arrayValores = data.current.listPart;
            for (var z = 0; z < arrayValores.length; z++) {
                if (data.current.listPart[z].estado == 'En inspección') {
                    partidasAux.push(data.current.listPart[z]);
                }
            }
            if (data != null) {
                _this.partidaPrioridad = new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */]();
                _this.partidaPrioridad = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], partidasAux[0]);
                _this.partidaPoriginal = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], partidasAux[0]);
            }
            if (data.current.listPart.length !== 0) {
                arrPart = data.current.listPart;
                _this.squery.Query(arrPart, ['idProducto'], true);
                _this.punterosProvee = _this.squery.getPunteros(['idProducto'], "idProducto");
                _this.tTodo = data.current.listPart.length;
                _this.punterosProvee.forEach(function (element) {
                    var totalCantidad = 0;
                    var punterosTemp = new Array();
                    punterosTemp = _this.squery.getPunteros([element]);
                    /*   console.log("valor de los punteros:" + element); */
                    for (var i = 0; i < punterosTemp.length; i++) {
                        partTemp = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], _this.squery.universo[punterosTemp[i]]);
                        if (i == 0) {
                            partTemp.setDiasFiltro("hoy");
                            _this.tHoy = _this.tHoy + 1;
                            //    if(this.tHoy > this.tTodo ){this.tHoy = this.tTodo - this.tHoy;}
                            //  this.tHoy=0;
                        }
                        else if (i == 1) {
                            //  this.tManana = 0;
                            partTemp.setDiasFiltro("manana");
                            _this.tManana = _this.tManana + 1;
                            //  if(this.tManana > this.tTodo ){this.tManana = this.tTodo - this.tManana;}
                        }
                        else {
                            //  this.tPasadoM = 0;
                            partTemp.setDiasFiltro("pasado");
                            _this.tPasadoM = _this.tPasadoM + 1;
                            //  if(this.tPasadoM > this.tTodo ){this.tPasadoM = this.tTodo - this.tPasadoM;}
                        }
                        _this.universoPartidas.push(partTemp);
                    }
                });
                _this.iniciarBotonera = true;
                _this.arraylabelP3 = new Array();
                _this.arrayValoresP3 = new Array();
                _this.arraylabelP3 = [""];
                _this.arrayValoresP3 = [1];
                var test = new Array();
                // console.log(this.universoPartidas);
                test = Object.assign([], _this.universoPartidas);
                //Array.prototype.push.apply(this.copiaUniversoPartidas, this.universoPartidas);
                // this.copiaUniversoPartidas = Object.assign([], this.universoPartidas);
                if (_this.activarLlamadaGraficas) {
                    _this.filtrarDias('hoy');
                }
            }
            _this.coreComponent.closeModal(0);
            if (data.current.totP1 === 0) {
                _this.activarAlerta = true;
            }
        }, function (error) {
            console.log("error inspeccion");
            console.log(error);
            //terminar loading false
            _this.coreComponent.closeModal(0);
        });
    };
    ResponsableaeComponent.prototype.filtrarDias = function (dia) {
        var _this = this;
        this.limpiarVarGraficas();
        setTimeout(function () {
            _this.activarGrProveedor = false;
            _this.activarGrPrioridades = false;
            _this.activarGrPrioridades1 = false;
            _this.activarGrPrioridades2 = false;
            _this.activarGrPrioridades3 = false;
            _this.activarProd = false;
        }, 5);
        // console.log("llego:" + dia);
        var sq = new __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__["a" /* Query */]();
        var punterosDias = new Array();
        var arrayLabel = new Array();
        var arrayValores = new Array();
        this.universoActual = new Array();
        if (dia != "todo") {
            // for(let aux of this.universoPartidas[0]){
            //   var partTemp = new Array<PartidaInspeccion>();
            //   partTemp aux;
            sq.Query(this.universoPartidas, ['diasFiltro'], true);
            //  sq.Query(this.universoActual[0], ['diasFiltro'], true);
            punterosDias = sq.getPunteros([dia]);
            if (punterosDias.length > 0 && dia != "todo") {
                punterosDias.forEach(function (element) {
                    // /* for (var i: number = 0; i < posicion.length; i++) {  */
                    var partTemp;
                    partTemp = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], sq.universo[element]);
                    _this.universoActual.push(partTemp);
                    /* } */
                });
                this.tipoGrafica = 'verdeVSazul';
                this.tipoGraficaP1 = 'prioridadRoja';
                this.tipoGraficaP2 = 'prioridadNaranja';
                this.tipoGraficaP3 = 'prioridadVerde';
                this.filtradoDeProductos();
                this.filtradoProveedores();
                this.filtrarPrioridades();
                this.operacionesPrioridades();
            }
            else {
                this.tipoGraficaPrioridades = "gris";
                this.tipoGrafica = "gris";
                this.tipoGraficaP1 = 'gris';
                this.tipoGraficaP2 = "gris";
                this.tipoGraficaP3 = 'gris';
                this.filtradoDeProductos();
                this.filtradoProveedores();
                this.filtrarPrioridades();
                this.operacionesPrioridades();
            }
        }
        else {
            if (this.objetivoDeinspeccion >= 0) {
                this.tipoGrafica = 'verdeVSazul';
                this.tipoGraficaP1 = 'prioridadRoja';
                this.tipoGraficaP2 = 'prioridadNaranja';
                this.tipoGraficaP3 = 'prioridadVerde';
                this.tipoGraficaPro = "general";
                this.universoActual = new Array();
                this.universoActual = Object.assign([], this.universoPartidas);
                this.filtradoDeProductos();
                this.filtradoProveedores();
                this.filtrarPrioridades();
                this.operacionesPrioridades();
            }
            else {
                this.tipoGrafica = 'gris';
            }
        }
        this.iniciarBotonera = false;
        this.limpiarVariablesGraficasD();
        this.calcularDatosParaGraficasD();
        this.activarLlamadaGraficas = false;
    };
    ResponsableaeComponent.prototype.filtradoDeProductos = function () {
        var sq = new __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__["a" /* Query */]();
        var puntem = new Array();
        var punterosProd = new Array();
        var arrayLabel = new Array();
        var arrayValores = new Array();
        var arrayNoArribados = new Array();
        var contArribados = 0;
        var contNoArribados = 0;
        var acumMontoTotal = 0;
        var acumCantidadCompra = 0;
        var acumMontoTotalNA = 0;
        var acumCantidadCompraNA = 0;
        var arrayMontos = new Array();
        var arrayCant = new Array();
        this.arrayProductos = new Array();
        this.array2 = new Array();
        if (this.universoActual.length > 0) {
            this.resetColores();
            sq.Query(this.universoActual, ['estado'], true);
            punterosProd = sq.getPunteros(['estado'], "estado");
            this.arrayProductos = new Array();
            this.array2 = new Array();
            punterosProd.forEach(function (element) {
                var cantidad = 0;
                puntem = sq.getPunteros([element]);
                for (var i = 0; i < puntem.length; i++) {
                    var partTemp;
                    partTemp = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], sq.universo[puntem[i]]);
                    if (partTemp.getEstado() == 'En inspección' && partTemp.getidProducto() !== null && partTemp.getidProducto() != 0) {
                        contArribados = contArribados + 1;
                        acumMontoTotal += partTemp.getmontoTotal();
                        acumCantidadCompra += partTemp.getCantidadCompra();
                    }
                    else {
                        contNoArribados = contNoArribados + 1;
                        acumMontoTotalNA += partTemp.getmontoTotal();
                        acumCantidadCompraNA += partTemp.getCantidadCompra();
                    }
                }
            });
            this.tipoGrafica = "verdeVSazul";
            console.log(this.tipoGrafica);
            // arrayValores.push(contArribados);
            // arrayValores.push(contNoArribados);
            arrayValores.push(acumCantidadCompra);
            arrayValores.push(acumCantidadCompraNA);
            this.listaProductosG.push({ estado: 'Arribados', piezas: acumCantidadCompra, monto: acumMontoTotal });
            this.listaProductosG.push({ estado: 'No Arribados', piezas: acumCantidadCompraNA, monto: acumMontoTotalNA });
            arrayLabel.push("Arribados");
            arrayLabel.push("No Arribados");
            /*For para ordenar los datos de acuerdo al monto*/
            var montoAuxL = void 0;
            for (var i = 1; i < this.listaProductosG.length; i++) {
                for (var j = 0; j < (this.listaProductosG.length - i); j++) {
                    if (this.listaProductosG[j].monto < this.listaProductosG[i].monto) {
                        montoAuxL = this.listaProductosG[j + 1];
                        this.listaProductosG[j + 1] = this.listaProductosG[j];
                        this.listaProductosG[j] = montoAuxL;
                    }
                }
            }
            /**********************************************/
            Array.prototype.push.apply(this.arrayProductos, arrayLabel);
            Array.prototype.push.apply(this.array2, arrayValores);
        }
        else {
            this.tipoGrafica = "gris";
            arrayValores.push(1);
            arrayLabel.push("");
            Array.prototype.push.apply(this.arrayProductos, arrayLabel);
            Array.prototype.push.apply(this.array2, arrayValores);
        }
    };
    ResponsableaeComponent.prototype.filtradoProveedores = function () {
        var _this = this;
        var sq = new __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__["a" /* Query */]();
        var puntem = new Array();
        var punterosProd = new Array();
        var arrayLabel = new Array();
        var arrayValores = new Array();
        var listaaUX = new Array();
        this.arrayLabelPro = new Array();
        this.arrayValoresPro = new Array();
        if (this.universoActual.length > 0) {
            this.tipoGraficaPro = "general";
            sq.Query(this.universoActual, ['fabrica'], true);
            punterosProd = sq.getPunteros(['fabrica'], "fabrica");
            /*  this.arrayLabelPro = new Array<string>();
             this.arrayValoresPro = new Array<number>(); */
            punterosProd.forEach(function (element) {
                var cantidad = 0;
                var monto = 0;
                puntem = sq.getPunteros([element]);
                for (var i = 0; i < puntem.length; i++) {
                    var partTemp;
                    partTemp = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], sq.universo[puntem[i]]);
                    //cantidad = cantidad + 1;
                    cantidad += partTemp.getCantidadCompra();
                    monto += partTemp.getmontoTotal();
                }
                arrayValores.push(cantidad);
                arrayLabel.push(element);
                /* PROVEEDORES */
                _this.listaProveedores.push({ nombreProveedor: element, piezas: cantidad, monto: monto });
                listaaUX.push({ nombreProveedor: element, piezas: cantidad, monto: monto });
            });
            // console.log('Soy lista proveedores-->', listaaUX);
            /*For para ordenar los datos de acuerdo al monto*/
            var montoAuxL = void 0;
            var band = false;
            while (!band) {
                band = true;
                for (var i = 0; i < this.listaProveedores.length - 1; i++) {
                    var aux = i + 1;
                    if (this.listaProveedores[i].monto < this.listaProveedores[aux].monto) {
                        montoAuxL = this.listaProveedores[i + 1];
                        this.listaProveedores[i + 1] = this.listaProveedores[i];
                        this.listaProveedores[i] = montoAuxL;
                        band = false;
                    }
                }
            }
            // console.log('Soy lista proveedores ordenada -->', this.listaProveedores);
            /**********************************************/
            Array.prototype.push.apply(this.arrayLabelPro, arrayLabel);
            Array.prototype.push.apply(this.arrayValoresPro, arrayValores);
        }
        else {
            this.tipoGraficaPro = "gris";
            arrayValores.push(1);
            arrayLabel.push("");
            Array.prototype.push.apply(this.arrayLabelPro, arrayLabel);
            Array.prototype.push.apply(this.arrayValoresPro, arrayValores);
        }
    };
    ResponsableaeComponent.prototype.filtrarPrioridades = function () {
        var sq = new __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__["a" /* Query */]();
        var puntem = new Array();
        var punterosPrio = new Array();
        var arrayLabel = new Array();
        var arrayMonto = new Array();
        var arrayValores = new Array();
        var arrayValoresAux = new Array();
        var prioridadNom;
        this.arrayLabelPrioridad = new Array();
        this.arrayValoresPrioridad = new Array();
        if (this.universoActual.length > 0) {
            this.tipoGraficaPrioridades = "prioridades";
            sq.Query(this.universoActual, ['prioridad'], true);
            punterosPrio = sq.getPunteros(['prioridad'], "prioridad");
            punterosPrio.forEach(function (element) {
                var cantidad = 0;
                var monto = 0;
                puntem = sq.getPunteros([element]);
                for (var i = 0; i < puntem.length; i++) {
                    // cantidad = cantidad + 1;
                    var partTemp;
                    partTemp = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], sq.universo[puntem[i]]);
                    cantidad += partTemp.getCantidadCompra();
                    monto += partTemp.getmontoTotal();
                }
                if ((element !== 'null') && (cantidad > 0)) {
                    arrayValores.push(cantidad);
                    arrayLabel.push(element);
                    arrayMonto.push(monto);
                    // if (element === 'p1') {
                    //   prioridadNom = 'Prioridad 1';
                    // } else if (element === 'p2') {
                    //   prioridadNom = 'Prioridad 2';
                    // } else if (element === 'p3') {
                    //   prioridadNom = 'Prioridad 3';
                    // }
                }
                // this.listaPrioridadesG.push({nombrePrio:prioridadNom, piezas:cantidad, monto:monto});
            });
            if (arrayLabel.length > 0) {
                this.tipoGraficaPrioridades = 'prioridades';
                var arrayPrio = ['p1', 'p2', 'p3'];
                var arrayLabelAux = ['Prioridad 1', 'Prioridad 2', 'Prioridad 3'];
                for (var i = 0; i < arrayLabel.length; i++) {
                    for (var j = 0; j < arrayPrio.length; j++) {
                        if (arrayLabel[i] === arrayPrio[j]) {
                            arrayValoresAux[j] = arrayValores[i];
                            this.listaPrioridadesG[j] = ({ nombrePrio: arrayLabelAux[j], piezas: arrayValores[i], monto: arrayMonto[i] });
                        }
                        else if (arrayValoresAux[j] === undefined) {
                            arrayValoresAux[j] = 0;
                            this.listaPrioridadesG[j] = ({ nombrePrio: arrayLabelAux[j], piezas: 0, monto: 0 });
                        }
                    }
                }
                /*For para ordenar los datos de acuerdo al monto*/
                var montoAuxL = void 0;
                var band = false;
                while (!band) {
                    band = true;
                    for (var i = 0; i < this.listaPrioridadesG.length - 1; i++) {
                        var aux = i + 1;
                        if (this.listaPrioridadesG[i].monto < this.listaPrioridadesG[aux].monto) {
                            montoAuxL = this.listaPrioridadesG[i + 1];
                            this.listaPrioridadesG[i + 1] = this.listaPrioridadesG[i];
                            this.listaPrioridadesG[i] = montoAuxL;
                            band = false;
                        }
                    }
                }
                // console.log('Soy lista proveedores ordenada -->', this.listaProveedores);
                /**********************************************/
                Array.prototype.push.apply(this.arrayLabelPrioridad, arrayLabelAux);
                Array.prototype.push.apply(this.arrayValoresPrioridad, arrayValoresAux);
            }
            else {
                this.tipoGraficaPrioridades = "gris";
                arrayValores.push(1);
                arrayLabel.push("");
                Array.prototype.push.apply(this.arrayLabelPrioridad, arrayLabel);
                Array.prototype.push.apply(this.arrayValoresPrioridad, arrayValores);
            }
            // Array.prototype.push.apply(this.arrayLabelPrioridad, arrayLabel);
            // Array.prototype.push.apply(this.arrayValoresPrioridad, arrayValores);
        }
        else {
            this.tipoGraficaPrioridades = "gris";
            arrayValores.push(1);
            arrayLabel.push("");
            Array.prototype.push.apply(this.arrayLabelPrioridad, arrayLabel);
            Array.prototype.push.apply(this.arrayValoresPrioridad, arrayValores);
        }
        // this.donaPEstadisticas = {
        //   arrayLabel: this.arrayLabelPrioridad,
        //   arrayValores : this.arrayValoresPrioridad,
        //   tipoGrafica : this.tipoGraficaPrioridades
        // }
    };
    ResponsableaeComponent.prototype.operacionesPrioridades = function () {
        var _this = this;
        console.log("obterner graficas de diferente prioridad");
        var sq = new __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__["a" /* Query */]();
        var puntem = new Array();
        var punterosPrio = new Array();
        var punteroP1 = new Array();
        var punteroP2 = new Array();
        var punteroP3 = new Array();
        var arrayLabel = new Array();
        var arrayValores = new Array();
        var listaAux = new Array();
        var listaAux2 = new Array();
        var listaAux3 = new Array();
        var punterosAux = new Array();
        var sqAux = new __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__["a" /* Query */]();
        var sqAux2 = new __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__["a" /* Query */]();
        var sqAux3 = new __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__["a" /* Query */]();
        this.arraylabelP1 = new Array();
        this.arrayValoresP1 = new Array();
        this.arraylabelP2 = new Array();
        this.arrayValoresP2 = new Array();
        this.arraylabelP3 = new Array();
        this.arrayValoresP3 = new Array();
        if (this.universoActual.length > 0) {
            sq.Query(this.universoActual, ['prioridad'], true);
            punterosPrio = sq.getPunteros(['prioridad'], "prioridad");
            punteroP1 = sq.getPunteros(['p1']);
            if (punteroP1.length > 0) {
                for (var i = 0; i < punteroP1.length; i++) {
                    var partTemp;
                    partTemp = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], sq.universo[punteroP1[i]]);
                    listaAux.push(partTemp);
                }
                sqAux.Query(listaAux, ['fabrica'], true);
                punterosAux = sqAux.getPunteros(['fabrica'], "fabrica");
                if (punterosAux.length > 0) {
                    //  for (var i: number = 0; i < punterosAux.length; i++) {
                    punterosAux.forEach(function (element) {
                        puntem = sqAux.getPunteros([element]);
                        var cantidad = 0;
                        var monto = 0;
                        for (var i = 0; i < puntem.length; i++) {
                            var partTemp;
                            partTemp = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], sqAux.universo[puntem[i]]);
                            cantidad += partTemp.getCantidadCompra();
                            monto += partTemp.getmontoTotal();
                        }
                        arrayValores.push(cantidad);
                        arrayLabel.push(element);
                        _this.listaPrioridad1G.push({ nombrePrio1: element, piezas: cantidad, monto: monto });
                    });
                    //  }
                    /*For para ordenar los datos de acuerdo al monto*/
                    var montoAuxL = void 0;
                    var band = false;
                    while (!band) {
                        band = true;
                        for (var i = 0; i < this.listaPrioridad1G.length - 1; i++) {
                            var aux = i + 1;
                            if (this.listaPrioridad1G[i].monto < this.listaPrioridad1G[aux].monto) {
                                montoAuxL = this.listaPrioridad1G[i + 1];
                                this.listaPrioridad1G[i + 1] = this.listaPrioridad1G[i];
                                this.listaPrioridad1G[i] = montoAuxL;
                                band = false;
                            }
                        }
                    }
                    // console.log('Soy lista proveedores ordenada -->', this.listaProveedores);
                    /**********************************************/
                    Array.prototype.push.apply(this.arraylabelP1, arrayLabel);
                    Array.prototype.push.apply(this.arrayValoresP1, arrayValores);
                }
            }
            else {
                this.tipoGraficaP1 = "gris";
            }
            punteroP2 = sq.getPunteros(['p2']);
            if (punteroP2.length > 0) {
                for (var i = 0; i < punteroP2.length; i++) {
                    var partTemp;
                    partTemp = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], sq.universo[punteroP2[i]]);
                    listaAux2.push(partTemp);
                }
                sqAux2.Query(listaAux2, ['fabrica'], true);
                punterosAux = sqAux2.getPunteros(['fabrica'], "fabrica");
                if (punterosAux.length > 0) {
                    //  for (var i: number = 0; i < punterosAux.length; i++) {
                    punterosAux.forEach(function (element) {
                        puntem = sqAux2.getPunteros([element]);
                        var cantidad = 0;
                        var monto = 0;
                        for (var i = 0; i < puntem.length; i++) {
                            //cantidad = cantidad + 1;
                            var partTemp;
                            partTemp = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], sqAux2.universo[puntem[i]]);
                            cantidad += partTemp.getCantidadCompra();
                            monto += partTemp.getmontoTotal();
                        }
                        arrayValores.push(cantidad);
                        arrayLabel.push(element);
                        _this.listaPrioridad2G.push({ nombrePrio2: element, piezas: cantidad, monto: monto });
                    });
                    //  }
                    /*For para ordenar los datos de acuerdo al monto*/
                    var montoAuxL = void 0;
                    var band = false;
                    while (!band) {
                        band = true;
                        for (var i = 0; i < this.listaPrioridad2G.length - 1; i++) {
                            var aux = i + 1;
                            if (this.listaPrioridad2G[i].monto < this.listaPrioridad2G[aux].monto) {
                                montoAuxL = this.listaPrioridad2G[i + 1];
                                this.listaPrioridad2G[i + 1] = this.listaPrioridad2G[i];
                                this.listaPrioridad2G[i] = montoAuxL;
                                band = false;
                            }
                        }
                    }
                    // console.log('Soy lista proveedores ordenada -->', this.listaProveedores);
                    /**********************************************/
                    Array.prototype.push.apply(this.arraylabelP2, arrayLabel);
                    Array.prototype.push.apply(this.arrayValoresP2, arrayValores);
                }
            }
            else {
                var arrayLabel = new Array();
                var arrayValores = new Array();
                arrayLabel.push("");
                arrayValores.push(1);
                Array.prototype.push.apply(this.arraylabelP2, arrayLabel);
                Array.prototype.push.apply(this.arrayValoresP2, arrayValores);
                this.tipoGraficaP2 = "gris";
            }
            punteroP3 = sq.getPunteros(['p3']);
            if (punteroP3.length > 0) {
                for (var i = 0; i < punteroP3.length; i++) {
                    var partTemp;
                    partTemp = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], sq.universo[punteroP3[i]]);
                    listaAux3.push(partTemp);
                }
                sqAux3.Query(listaAux3, ['fabrica'], true);
                punterosAux = sqAux3.getPunteros(['fabrica'], "fabrica");
                //  if (punterosAux.length > 0) {
                //for (var i: number = 0; i < punterosAux.length; i++) {
                punterosAux.forEach(function (element) {
                    puntem = sqAux3.getPunteros([element]);
                    var cantidad = 0;
                    var monto = 0;
                    for (var i = 0; i < puntem.length; i++) {
                        //cantidad = cantidad + 1;
                        var partTemp;
                        partTemp = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], sqAux3.universo[puntem[i]]);
                        cantidad += partTemp.getCantidadCompra();
                        monto += partTemp.getmontoTotal();
                    }
                    arrayValores.push(cantidad);
                    arrayLabel.push(element);
                    _this.listaPrioridad3G.push({ nombrePrio3: element, piezas: cantidad, monto: monto });
                });
                //}
                /*For para ordenar los datos de acuerdo al monto*/
                var montoAuxL = void 0;
                var band = false;
                while (!band) {
                    band = true;
                    for (var i = 0; i < this.listaPrioridad3G.length - 1; i++) {
                        var aux = i + 1;
                        if (this.listaPrioridad3G[i].monto < this.listaPrioridad3G[aux].monto) {
                            montoAuxL = this.listaPrioridad3G[i + 1];
                            this.listaPrioridad3G[i + 1] = this.listaPrioridad3G[i];
                            this.listaPrioridad3G[i] = montoAuxL;
                            band = false;
                        }
                    }
                }
                // console.log('Soy lista proveedores ordenada -->', this.listaProveedores);
                /**********************************************/
                Array.prototype.push.apply(this.arraylabelP3, arrayLabel);
                Array.prototype.push.apply(this.arrayValoresP3, arrayValores);
                //  }
            }
            else {
                var arrayLabel = new Array();
                var arrayValores = new Array();
                arrayLabel.push("");
                arrayValores.push(1);
                Array.prototype.push.apply(this.arraylabelP3, arrayLabel);
                Array.prototype.push.apply(this.arrayValoresP3, arrayValores);
                this.tipoGraficaP3 = 'gris';
            }
        }
        else {
            this.tipoGraficaP1 = "gris";
            this.tipoGraficaP2 = "gris";
            this.tipoGraficaP3 = 'gris';
            arrayValores.push(1);
            arrayLabel.push("");
            Array.prototype.push.apply(this.arraylabelP1, arrayLabel);
            Array.prototype.push.apply(this.arrayValoresP1, arrayValores);
            Array.prototype.push.apply(this.arraylabelP2, arrayLabel);
            Array.prototype.push.apply(this.arrayValoresP2, arrayValores);
            Array.prototype.push.apply(this.arraylabelP3, arrayLabel);
            Array.prototype.push.apply(this.arrayValoresP3, arrayValores);
        }
    };
    ResponsableaeComponent.prototype.limpiarVarGraficas = function () {
        this.listaProveedores = new Array();
        this.nuevoClientes = [];
        this.filtroProveedor = [];
        this.listaPrioridadesG = new Array();
        this.filtroPrioridadesGra = [];
        this.nuevaPrioridad = [];
        this.nuevaPrioridad1 = [];
        this.listaPrioridad1G = new Array();
        this.filtroPrioridades1Gra = [];
        this.nuevaPrioridad2 = [];
        this.listaPrioridad2G = new Array();
        this.filtroPrioridades2Gra = [];
        this.nuevaPrioridad3 = [];
        this.listaPrioridad3G = new Array();
        this.filtroPrioridades3Gra = [];
        this.listaProductosG = new Array();
        this.filtroProducto = [];
    };
    ResponsableaeComponent.prototype.limpiarVariablesGraficasD = function () {
        var _this = this;
        /////////////// Empieza PRODUCTOS ////////
        if (this.listaProductosG.length > 0) {
            for (var _i = 0, _a = this.listaProductosG; _i < _a.length; _i++) {
                var valor = _a[_i];
                this.filtroProducto.push(valor.estado);
                this.tipoGraficaProd = 'VerdevsAzul';
            }
        }
        else {
            this.tipoGraficaProd = 'Gris';
            this.filtroProducto.push("");
        }
        var valoresProd = [];
        var valoresProdcuto = [];
        for (var _b = 0, _c = this.listaProductosG; _b < _c.length; _b++) {
            var nombre = _c[_b];
            valoresProdcuto.push([0, 0]);
            valoresProd.push(0);
        }
        if (valoresProd.length > 0) {
            this.dataProducto = {
                titulo: 'Totales',
                labels: this.filtroProducto,
                valores: valoresProd,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresProdcuto,
            };
            this.dataProductosAux = {
                titulo: 'Totales',
                labels: this.filtroProducto,
                valores: valoresProd,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresProdcuto,
            }; // Variable auxiliar para poner la divisa
            this.tipoGraficaProd = 'VerdevsAzul';
        }
        else {
            this.dataProducto = {
                titulo: 'Totales',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: [[0, 0]],
            };
            this.tipoGraficaProd = 'Gris';
            setTimeout(function () {
                _this.activarProd = true;
            }, 5);
        }
        //////// Empìeza grafica proveedores //////
        if (this.listaProveedores.length > 0) {
            for (var _d = 0, _e = this.listaProveedores; _d < _e.length; _d++) {
                var valor = _e[_d];
                this.filtroProveedor.push(valor.nombreProveedor);
                this.tipoGraficaProveedores = 'General';
            }
        }
        else {
            this.tipoGraficaProveedores = 'Gris';
            this.filtroProveedor.push("");
        }
        var valoresP = [];
        var valoresProveedor = [];
        for (var _f = 0, _g = this.listaProveedores; _f < _g.length; _f++) {
            var nombre = _g[_f];
            valoresProveedor.push([0, 0]);
            valoresP.push(0);
        }
        if (valoresP.length > 0) {
            this.dataProveedores = {
                titulo: 'Totales',
                labels: this.filtroProveedor,
                valores: valoresP,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresProveedor,
            };
            this.dataProveedoresAux = {
                titulo: 'Totales',
                labels: this.filtroProveedor,
                valores: valoresP,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresProveedor,
            };
            this.tipoGraficaProveedores = 'General';
        }
        else {
            this.dataProveedores = {
                titulo: 'Totales',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: [[0, 0]],
            };
            this.tipoGraficaProveedores = 'Gris';
            setTimeout(function () {
                _this.activarGrProveedor = true;
            }, 5);
        }
        //////// Empìeza grafica prioridades //////
        if (this.listaPrioridadesG.length > 0) {
            for (var _h = 0, _j = this.listaPrioridadesG; _h < _j.length; _h++) {
                var valor = _j[_h];
                this.filtroPrioridadesGra.push(valor.nombrePrio);
            }
            this.tipoGraficaPrioridadesGra = 'Prioridades';
        }
        else {
            this.tipoGraficaPrioridadesGra = 'Gris';
            this.filtroPrioridadesGra.push("");
        }
        var valoresPrio = [];
        var valoresPrioridades = [];
        for (var _k = 0, _l = this.listaPrioridadesG; _k < _l.length; _k++) {
            var nombre = _l[_k];
            valoresPrioridades.push([0, 0]);
            valoresPrio.push(0);
        }
        if (valoresPrio.length > 0) {
            this.dataPrioridades = {
                titulo: 'Totales',
                labels: this.filtroPrioridadesGra,
                valores: valoresPrio,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresPrioridades,
            };
            this.dataPrioridadesAux = {
                titulo: 'Totales',
                labels: this.filtroPrioridadesGra,
                valores: valoresPrio,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresPrioridades,
            };
            this.tipoGraficaPrioridadesGra = 'Prioridades';
        }
        else {
            this.dataPrioridades = {
                titulo: 'Totales',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: [[0, 0]],
            };
            this.tipoGraficaPrioridadesGra = 'Gris';
            setTimeout(function () {
                _this.activarGrPrioridades = true;
            }, 5);
        }
        //////// Empìeza grafica prioridad 1 //////
        if (this.listaPrioridad1G.length > 0) {
            for (var _m = 0, _o = this.listaPrioridad1G; _m < _o.length; _m++) {
                var valor = _o[_m];
                this.filtroPrioridades1Gra.push(valor.nombrePrio1);
            }
            this.tipoGraficaPrioridadesGra1 = 'PrioridadRoja';
        }
        else {
            this.tipoGraficaPrioridadesGra1 = 'Gris';
            this.filtroPrioridades1Gra.push("");
        }
        var valoresPrio1 = [];
        var valoresPrioridades1 = [];
        for (var _p = 0, _q = this.listaPrioridad1G; _p < _q.length; _p++) {
            var nombre = _q[_p];
            valoresPrioridades1.push([0, 0]);
            valoresPrio1.push(0);
        }
        if (valoresPrio1.length > 0) {
            this.dataPrioridades1 = {
                titulo: 'Totales',
                labels: this.filtroPrioridades1Gra,
                valores: valoresPrio1,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresPrioridades1,
            };
            this.dataPrioridades1Aux = {
                titulo: 'Totales',
                labels: this.filtroPrioridades1Gra,
                valores: valoresPrio1,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresPrioridades1,
            };
            this.tipoGraficaPrioridadesGra1 = 'PrioridadRoja';
        }
        else {
            this.dataPrioridades1 = {
                titulo: 'Totales',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: [[0, 0]],
            };
            this.tipoGraficaPrioridadesGra1 = 'Gris';
            setTimeout(function () {
                _this.activarGrPrioridades1 = true;
            }, 5);
        }
        //////// Empìeza grafica prioridad 2 //////
        if (this.listaPrioridad2G.length > 0) {
            for (var _r = 0, _s = this.listaPrioridad2G; _r < _s.length; _r++) {
                var valor = _s[_r];
                this.filtroPrioridades2Gra.push(valor.nombrePrio2);
            }
            this.tipoGraficaPrioridadesGra2 = 'PrioridadNaranja';
        }
        else {
            this.tipoGraficaPrioridadesGra2 = 'Gris';
            this.filtroPrioridades2Gra.push("");
        }
        var valoresPrio2 = [];
        var valoresPrioridades2 = [];
        for (var _t = 0, _u = this.listaPrioridad2G; _t < _u.length; _t++) {
            var nombre = _u[_t];
            valoresPrioridades2.push([0, 0]);
            valoresPrio2.push(0);
        }
        if (valoresPrio2.length > 0) {
            this.dataPrioridades2 = {
                titulo: 'Totales',
                labels: this.filtroPrioridades2Gra,
                valores: valoresPrio2,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresPrioridades2,
            };
            this.dataPrioridades2Aux = {
                titulo: 'Totales',
                labels: this.filtroPrioridades2Gra,
                valores: valoresPrio2,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresPrioridades2,
            };
            this.tipoGraficaPrioridadesGra2 = 'PrioridadNaranja';
        }
        else {
            this.dataPrioridades2 = {
                titulo: 'Totales',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: [[0, 0]],
            };
            this.tipoGraficaPrioridadesGra2 = 'Gris';
            setTimeout(function () {
                _this.activarGrPrioridades2 = true;
            }, 5);
        }
        //////// Empìeza grafica prioridad 3 //////
        if (this.listaPrioridad3G.length > 0) {
            for (var _v = 0, _w = this.listaPrioridad3G; _v < _w.length; _v++) {
                var valor = _w[_v];
                this.filtroPrioridades3Gra.push(valor.nombrePrio3);
            }
            this.tipoGraficaPrioridadesGra3 = 'PrioridadVerde';
        }
        else {
            this.tipoGraficaPrioridadesGra3 = 'Gris';
            this.filtroPrioridades3Gra.push("");
        }
        var valoresPrio3 = [];
        var valoresPrioridades3 = [];
        for (var _x = 0, _y = this.listaPrioridad3G; _x < _y.length; _x++) {
            var nombre = _y[_x];
            valoresPrioridades3.push([0, 0]);
            valoresPrio3.push(0);
        }
        if (valoresPrio3.length > 0) {
            this.dataPrioridades3 = {
                titulo: 'Totales',
                labels: this.filtroPrioridades3Gra,
                valores: valoresPrio3,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresPrioridades3,
            };
            this.dataPrioridades3Aux = {
                titulo: 'Totales',
                labels: this.filtroPrioridades3Gra,
                valores: valoresPrio3,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresPrioridades3,
            };
            this.tipoGraficaPrioridadesGra3 = 'PrioridadVerde';
        }
        else {
            this.dataPrioridades3 = {
                titulo: 'Totales',
                labels: ['Sin datos'],
                valores: [1],
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: [[0, 0]],
            };
            this.tipoGraficaPrioridadesGra3 = 'Gris';
            setTimeout(function () {
                _this.activarGrPrioridades3 = true;
            }, 5);
        }
    };
    /* CALCULAR DATOS PARA GRAFICAS , ES EL FOR QUE MANDA A LLMAR AL METODO QUE ASIGNADO LOS VALORES DEL CENTRO*/
    ResponsableaeComponent.prototype.calcularDatosParaGraficasD = function () {
        for (var _i = 0, _a = this.listaProductosG; _i < _a.length; _i++) {
            var productos = _a[_i];
            this.llenarTotalesGraficasD(this.dataProducto, productos, 'PRODUCTOS', this.dataProductosAux);
        }
        for (var _b = 0, _c = this.listaProveedores; _b < _c.length; _b++) {
            var productos = _c[_b];
            this.llenarTotalesGraficasD(this.dataProveedores, productos, 'CLIENTES', this.dataProveedoresAux);
        }
        for (var _d = 0, _e = this.listaPrioridadesG; _d < _e.length; _d++) {
            var prrioridades = _e[_d];
            this.llenarTotalesGraficasD(this.dataPrioridades, prrioridades, 'PRIORIDADES', this.dataPrioridadesAux);
        }
        for (var _f = 0, _g = this.listaPrioridad1G; _f < _g.length; _f++) {
            var prrioridades1 = _g[_f];
            this.llenarTotalesGraficasD(this.dataPrioridades1, prrioridades1, 'PRIORIDAD1', this.dataPrioridades1Aux);
        }
        for (var _h = 0, _j = this.listaPrioridad2G; _h < _j.length; _h++) {
            var prioridades2 = _j[_h];
            this.llenarTotalesGraficasD(this.dataPrioridades2, prioridades2, 'PRIORIDAD2', this.dataPrioridades2Aux);
        }
        for (var _k = 0, _l = this.listaPrioridad3G; _k < _l.length; _k++) {
            var prioridades3 = _l[_k];
            this.llenarTotalesGraficasD(this.dataPrioridades3, prioridades3, 'PRIORIDAD3', this.dataPrioridades3Aux);
        }
    };
    ResponsableaeComponent.prototype.llenarTotalesGraficasD = function (total, elemento, graficaElegida, totalAux) {
        var _this = this;
        switch (graficaElegida) {
            case 'PRODUCTOS':
                var montoAux = void 0;
                // let valuesExtraAux = totalAux.valuesExtras;
                var valuesExtrasHover = total.valuesExtrasHover;
                var posicion1 = this.filtroProducto.indexOf(elemento.estado);
                if (this.nuevoProducto.indexOf(elemento.estado) === -1) {
                    this.nuevoProducto.push(elemento.estado);
                }
                total.valuesExtrasHover[posicion1][0] += elemento.piezas;
                // total.valuesExtras[1] += elemento.monto; // Aumento en clientes
                /*Se agrego esto para convertir el valor en divisa*/
                totalAux.valuesExtras[1] += elemento.monto;
                montoAux = totalAux.valuesExtras[1];
                total.valuesExtras[1] = new __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(montoAux);
                /*Termino..*/
                total.valuesExtras[0] += elemento.piezas; // Total de Partidas
                total.valores[posicion1] += elemento.piezas; // +(elemento.monto.toFixed(2)); //Monto total
                /*total.valuesExtrasHover[posicion1][1] += +(elemento.monto.toFixed(2));*/
                /**Se agrego esto para ponerle al monto tipo divisa*/
                valuesExtrasHover[posicion1][1] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicion1][1] = new __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicion1][1]);
                /*---------Termina------*/
                setTimeout(function () {
                    _this.activarProd = true;
                }, 5);
                break;
            case 'CLIENTES':
                // let valuesExtraAux = total.valuesExtras;
                valuesExtrasHover = total.valuesExtrasHover;
                var posicion2 = this.filtroProveedor.indexOf(elemento.nombreProveedor);
                if (this.nuevoClientes.indexOf(elemento.nombreProveedor) === -1) {
                    this.nuevoClientes.push(elemento.nombreProveedor);
                }
                total.valuesExtrasHover[posicion2][0] += elemento.piezas;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                /*Se agrego esto para convertir el valor en divisa, el total*/
                totalAux.valuesExtras[1] += elemento.monto;
                total.valuesExtras[1] = new __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[1]);
                /*Termino..*/
                total.valuesExtras[0] += elemento.piezas; // Total de Partidas
                total.valores[posicion2] += elemento.piezas; // +(elemento.monto.toFixed(2)); //Monto total
                // total.valuesExtrasHover[posicion2][1] += +(elemento.monto.toFixed(2));
                /**Se agrego esto para ponerle al monto tipo divisa*/
                valuesExtrasHover[posicion2][1] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicion2][1] = new __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicion2][1]);
                /*---------Termina------*/
                setTimeout(function () {
                    _this.activarGrProveedor = true;
                }, 5);
                break;
            case 'PRIORIDADES':
                // let valuesExtraAux = total.valuesExtras;
                valuesExtrasHover = total.valuesExtrasHover;
                var posicionP = this.filtroPrioridadesGra.indexOf(elemento.nombrePrio);
                if (this.nuevaPrioridad.indexOf(elemento.nombrePrio) === -1) {
                    this.nuevaPrioridad.push(elemento.nombrePrio);
                }
                total.valuesExtrasHover[posicionP][0] += elemento.piezas;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                /*Se agrego esto para convertir el valor en divisa*/
                totalAux.valuesExtras[1] += elemento.monto;
                total.valuesExtras[1] = new __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[1]);
                /*Termino..*/
                total.valuesExtras[0] += elemento.piezas; // Total de Partidas
                total.valores[posicionP] += elemento.piezas; // +(elemento.monto.toFixed(2)); //Monto total
                // total.valuesExtrasHover[posicionP][1] += +(elemento.monto.toFixed(2));
                /**Se agrego esto para ponerle al monto tipo divisa*/
                valuesExtrasHover[posicionP][1] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicionP][1] = new __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicionP][1]);
                /*---------Termina------*/
                setTimeout(function () {
                    _this.activarGrPrioridades = true;
                }, 5);
                break;
            case 'PRIORIDAD1':
                // let valuesExtraAux = total.valuesExtras;
                valuesExtrasHover = total.valuesExtrasHover;
                var posicionP1 = this.filtroPrioridades1Gra.indexOf(elemento.nombrePrio1);
                if (this.nuevaPrioridad1.indexOf(elemento.nombrePrio1) === -1) {
                    this.nuevaPrioridad1.push(elemento.nombrePrio1);
                }
                total.valuesExtrasHover[posicionP1][0] += elemento.piezas;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                /*Se agrego esto para convertir el valor en divisa*/
                totalAux.valuesExtras[1] += elemento.monto;
                total.valuesExtras[1] = new __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[1]);
                /*Termino..*/
                total.valuesExtras[0] += elemento.piezas; // Total de Partidas
                total.valores[posicionP1] += elemento.piezas; // +(elemento.monto.toFixed(2)); //Monto total
                // total.valuesExtrasHover[posicionP1][1] += +(elemento.monto.toFixed(2));
                /*Se agrego esto para ponerle al monto tipo divisa*/
                valuesExtrasHover[posicionP1][1] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicionP1][1] = new __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicionP1][1]);
                /*---------Termina------*/
                setTimeout(function () {
                    _this.activarGrPrioridades1 = true;
                }, 5);
                break;
            case 'PRIORIDAD2':
                // let valuesExtraAux = total.valuesExtras;
                valuesExtrasHover = total.valuesExtrasHover;
                var posicionP2 = this.filtroPrioridades2Gra.indexOf(elemento.nombrePrio2);
                if (this.nuevaPrioridad2.indexOf(elemento.nombrePrio2) === -1) {
                    this.nuevaPrioridad2.push(elemento.nombrePrio2);
                }
                total.valuesExtrasHover[posicionP2][0] += elemento.piezas;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                /*Se agrego esto para convertir el valor en divisa*/
                totalAux.valuesExtras[1] += elemento.monto;
                total.valuesExtras[1] = new __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[1]);
                /*Termino..*/
                total.valuesExtras[0] += elemento.piezas; // Total de Partidas
                total.valores[posicionP2] += elemento.piezas; // +(elemento.monto.toFixed(2)); //Monto total
                /*total.valuesExtrasHover[posicionP2][1] += +(elemento.monto.toFixed(2));*/
                /**Se agrego esto para ponerle al monto tipo divisa*/
                valuesExtrasHover[posicionP2][1] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicionP2][1] = new __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicionP2][1]);
                /*---------Termina------*/
                setTimeout(function () {
                    _this.activarGrPrioridades2 = true;
                }, 5);
                break;
            case 'PRIORIDAD3':
                // let valuesExtraAux = total.valuesExtras;
                valuesExtrasHover = total.valuesExtrasHover;
                var posicionP3 = this.filtroPrioridades3Gra.indexOf(elemento.nombrePrio3);
                if (this.nuevaPrioridad3.indexOf(elemento.nombrePrio3) === -1) {
                    this.nuevaPrioridad3.push(elemento.nombrePrio3);
                }
                total.valuesExtrasHover[posicionP3][0] += elemento.piezas;
                /* total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                /*Se agrego esto para convertir el valor en divisa*/
                totalAux.valuesExtras[1] += elemento.monto;
                total.valuesExtras[1] = new __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(totalAux.valuesExtras[1]);
                /*Termino..*/
                total.valuesExtras[0] += elemento.piezas; // Total de Partidas
                total.valores[posicionP3] += elemento.piezas; // +(elemento.monto.toFixed(2)); //Monto total
                /*total.valuesExtrasHover[posicionP3][1] += +(elemento.monto.toFixed(2));*/
                /**Se agrego esto para ponerle al monto tipo divisa*/
                valuesExtrasHover[posicionP3][1] += +(elemento.monto.toFixed(2));
                total.valuesExtrasHover[posicionP3][1] = new __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(valuesExtrasHover[posicionP3][1]);
                /*---------Termina------*/
                setTimeout(function () {
                    _this.activarGrPrioridades3 = true;
                }, 5);
                break;
            default:
                break;
        }
    };
    ResponsableaeComponent.prototype.cambioDeVista = function () {
        var idUsuario = __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        this.apartarInspeccion(idUsuario);
        // this.partidaPrioridad = Object.assign(new PartidaInspeccion, this.partidaPoriginal);
        console.log("cambio de vista " + this.vistaInicialActiva);
        Array.prototype.push.apply(this.copiaUniversoPartidas, this.universoPartidas);
    };
    ResponsableaeComponent.prototype.apartarInspeccion = function (idUsuario) {
        var _this = this;
        this.coreComponent.openModal(1);
        this._insp.apartarInspeccion(idUsuario).subscribe(function (data) {
            if (data.current) {
                _this.partidaPrioridad = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], data.current);
                console.log('Soy la partida asignada -- >', _this.partidaPrioridad);
                _this.vistaInicialActiva = false; // Se cambio
                _this.coreComponent.closeModal(1);
                _this.partidaPrioridad.esPublicacion = true;
            }
            else {
                _this.activarAlert = true;
            }
            _this.coreComponent.closeModal(1);
        });
    };
    ResponsableaeComponent.prototype.regresarVista = function () {
        this.vistaInicialActiva = true;
        if (this.objetivoDeinspeccion == 0) {
            this.iniciarBotonera = false;
            this.filtrarDias('');
            this.recibeTotalesInspeccion();
        }
        else {
            this.iniciarBotonera = true;
            //  this.filtrarDias('hoy');
        }
    };
    ResponsableaeComponent.prototype.recibeTotalesInspeccion = function () {
        var _this = this;
        // let objetivoDeinspeccionAux;
        this._insp.recibeTotalesInspecion(this.inspector).subscribe(function (data) {
            if (data.current == null) {
                _this.objetivoDeinspeccionAux = 0;
                _this.piezasInspeccionadas = 0;
                _this.inspeccionDeceada = 0;
                _this.minimoDeInspeccion = 0;
            }
            else {
                _this.objetivoDeinspeccionAux = data.current.pzaAInspeccion;
                _this.piezasInspeccionadas = data.current.total_piezasInspeccionadas;
                _this.inspeccionDeceada = data.current.maxPiezasInsp;
                if (data.current.piezasProm > _this.objetivoDeinspeccionAux) {
                    _this.minimoDeInspeccion = _this.objetivoDeinspeccionAux;
                }
                else {
                    _this.minimoDeInspeccion = data.current.piezasProm;
                }
            }
            if (_this.piezasInspeccionadas == 0) {
                _this.inspeccionDeceadaHastaElMomento = -1 * _this.objetivoDeinspeccionAux;
                _this.minimaInspeccionHastaElMomento = -1 * _this.minimoDeInspeccion;
                _this.colorIndiceInspeccionDeceada = "#D0021B";
                _this.colorMinimoInspeccion = "#D0021B";
            }
            else {
                var aux = 0;
                var aux2 = 0;
                aux = -1 * _this.objetivoDeinspeccionAux;
                aux2 = -1 * _this.minimoDeInspeccion;
                _this.inspeccionDeceadaHastaElMomento = aux + _this.piezasInspeccionadas;
                _this.minimaInspeccionHastaElMomento = aux2 + _this.piezasInspeccionadas;
                if (_this.inspeccionDeceadaHastaElMomento == 0) {
                    _this.colorIndiceInspeccionDeceada = "#FBB03B";
                }
                else if (_this.objetivoDeinspeccionAux < _this.inspeccionDeceadaHastaElMomento) {
                    _this.colorIndiceInspeccionDeceada = "#39B54A";
                }
                else {
                    _this.colorIndiceInspeccionDeceada = "#D0021B";
                }
                if (_this.minimaInspeccionHastaElMomento == 0) {
                    _this.colorMinimoInspeccion = "#FBB03B";
                }
                else if (_this.objetivoDeinspeccionAux == 0) {
                    _this.colorMinimoInspeccion = "#39B54A";
                }
                else {
                    _this.colorMinimoInspeccion = "#D0021B";
                }
            }
            /*  minimaInspeccionHastaElMomento: number = 0; */
            // console.log(data);
        }, function (error) {
            // let banderaPrueba:boolean;
            // banderaPrueba= false;
        });
    };
    ResponsableaeComponent.prototype.reiniciarVistaA = function ($event) {
        this.activarLlamadaGraficas = true;
        console.log($event);
        console.log('-->', this.vistaInicialActiva);
        this.iniciarBotonera = true;
        this.recibeTotalesInspeccion();
        this.obtenerContadorPendientes();
        this.recibePartidas();
        /*this.filtrarDias('hoy');*/
        this.partidaPrioridad = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], this.partidaPoriginal);
        this.vistaInicialActiva = true;
        console.log("reinicia vista despues de guardar-->", this.vistaInicialActiva);
    };
    ResponsableaeComponent.prototype.obtenerContadorPendientes = function () {
        var _this = this;
        this.activarMenu = false;
        this._insp.recibeNumPendientes().subscribe(function (data) {
            _this.totalPendientes = data.current;
            _this.objetivoDeinspeccion = data.current;
            if (_this.objetivoDeinspeccion == 0 && _this.objetivoDeinspeccion !== undefined) {
                _this.regresarVista();
            }
            //else {  this.vistaInicialActiva = false;
            // }
            //  this.totalPendientes = 0;
            console.log(_this.totalPendientes);
            if (_this.totalPendientes == 0) {
                _this.banderaPrueba = false;
            }
            else
                _this.banderaPrueba = true;
            _this.itemsMenu = [
                { rol: 'INSPECTOR', active: true, menu: [
                        { nombre: 'Inspeccionar Productos', tipo: 'valor', valor: _this.totalPendientes, url: 'inspeccion', disable: false, select: true }
                    ] }
            ];
            _this.activarMenu = true;
        }, function (error) {
            console.log("error obtener contador pendientes");
            console.log(error);
            _this.banderaPrueba = false;
        });
        return this.objetivoDeinspeccion;
    };
    // obtenerPartidaInspeccion(inspector: any) {
    //
    //   this._insp.ordenarPartidasInspeccion(inspector).subscribe(
    //     data => {
    //       console.log(data); //Pruebas
    //       this.partidaPrioridad = data.current;
    //     }, error => {
    //     }
    //   );
    // }
    ResponsableaeComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = "asideOcultarMenu";
        }
        else {
            this.classAsideMenu = "asideMostrarMenu";
        }
    };
    ResponsableaeComponent.prototype.obtenerDatosInspector = function () {
        this.inspector = __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
    };
    /*************** metodos de para pintar las graficas *************/
    ResponsableaeComponent.prototype.limpiarVariablesGrafica = function () {
        this.filtroProductos = [];
        this.filtroPE = [];
        this.productos = {};
        //    this.listaProductos = [];
        //  this.graficasValores = [];
        /// Empieza lo de grafica por productos
        for (var _i = 0, _a = this.listaProductos; _i < _a.length; _i++) {
            var valor = _a[_i];
            this.filtroProductos.push(valor.tipo);
        }
        var valSecciones = [];
        var valoresOver = [];
        for (var _b = 0, _c = this.listaProductos; _b < _c.length; _b++) {
            var producto = _c[_b];
            valoresOver.push([0, 0]);
            valSecciones.push(0);
        }
        /// Asignacion a los datos de la grafica
        if (this.listaProductos.length > 1) {
            this.productos = {
                titulo: 'Totales',
                labels: this.filtroProductos,
                valores: valSecciones,
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: valoresOver
            };
        }
        else {
            this.productos = {
                titulo: 'Totales',
                labels: [""],
                valores: [1],
                labelsExtras: ['Piezas', 'Monto'],
                labelsExtrasHover: ['Piezas', 'Monto'],
                valuesExtras: [0, 0],
                valuesExtrasHover: [[0], [0]]
            };
        }
    };
    ResponsableaeComponent.prototype.limpiDonaEstadisticas = function () {
        /* grafica PrioridadesEstadisticas */
        for (var _i = 0, _a = this.lstPrioridadesEstadisticas; _i < _a.length; _i++) {
            var valor = _a[_i];
            this.filtroPE.push(valor.tipo);
        }
        var valSeccionesPE = [];
        var valoresOverPE = [];
        for (var _b = 0, _c = this.lstPrioridadesEstadisticas; _b < _c.length; _b++) {
            var prioridad = _c[_b];
            valoresOverPE.push([0]);
            valSeccionesPE.push(0);
        }
        if (this.lstPrioridadesEstadisticas.length > 1) {
            this.donaPEstadisticas = {
                titulo: 'Totales',
                labels: this.filtroPE,
                valores: valSeccionesPE,
                labelsExtras: ['Piezas'],
                labelsExtrasHover: ['Piezas'],
                valuesExtras: [0],
                valuesExtrasHover: valoresOverPE
            };
            this.tipoGraficaEstadisticas = 'Prioridades';
        }
        else {
            this.donaPEstadisticas = {
                titulo: 'Totales',
                labels: [""],
                valores: [1],
                labelsExtras: ['Piezas'],
                labelsExtrasHover: ['Piezas'],
                valuesExtras: [0],
                valuesExtrasHover: [[0], [0]]
            };
            this.tipoGraficaEstadisticas = 'Gris';
        }
    };
    ResponsableaeComponent.prototype.calcularDatosParaGraficas = function () {
        for (var _i = 0, _a = this.lstPrioridadesEstadisticas; _i < _a.length; _i++) {
            var prioridad = _a[_i];
            this.llenarTotales(this.donaPEstadisticas, prioridad, 'PrioridadesEstadisticas');
        }
    };
    ResponsableaeComponent.prototype.llenarTotales = function (total, elemento, graficaElegida) {
        switch (graficaElegida) {
            // case 'PRIORIDADES':
            //  let posicionP = this.filtroPrioridades.indexOf(elemento.nombrePrioridad);
            //  if (this.nuevaPrioridad.indexOf(elemento.nombrePrioridad) === -1) {
            //   this.nuevaPrioridad.push(elemento.nombrePrioridad);
            //  }
            //  total.valuesExtrasHover[posicionP][0] += elemento.pieza;
            //  total.valuesExtras[1] += elemento.monto; // Aumento en clientes
            //  total.valuesExtras[0] += elemento.pieza; // Total de Partidas
            //  total.valores[posicionP] += elemento.pieza; // +(elemento.monto.toFixed(2)); //Monto total
            //  total.valuesExtrasHover[posicionP][1] += +(elemento.monto.toFixed(2));
            //  break;
            case 'PrioridadesEstadisticas':
                var posicionP = this.filtroPE.indexOf(elemento.tipo);
                if (this.nuevoPE.indexOf(elemento.tipo) === -1) {
                    this.nuevoPE.push(elemento.tipo);
                }
                total.valuesExtrasHover[posicionP][0] += elemento.piezas;
                total.valuesExtras[0] += elemento.piezas; // Total de Partidas
                total.valores[posicionP] += elemento.piezas;
                // total.valuesExtrasHover[posicionP][1] = '';
                break;
            default:
                break;
        }
    };
    ResponsableaeComponent.prototype.resetColores = function () {
        this.filtroProductos = [];
        this.nuevoProductos = [];
        this.listaClientes = [];
        this.graficasValores = [];
        this.graficasCargadas = false;
        this.graficas = [];
        this.nuevoClientes = [];
        this.nuevaPrioridad = [];
        this.listaPrioridades = []; /// Se utiliza para guardar todos los datos de la lista de acuerdo a prioridades..
        this.listaPrioridad1 = []; /// Se utiliza para guardar todos los datos de la lista que contenga solo los que pertenecen a la prioridad 1..
        this.listaProductos = [];
        this.productos = {
            titulo: 'Totales',
            labels: [0],
            valores: [0],
            labelsExtras: [],
            labelsExtrasHover: [],
            valuesExtras: [0, 0],
            valuesExtrasHover: [0]
        };
        //  this.comunService.reiniciarGrafica(true);
    };
    ResponsableaeComponent.prototype.obtenerTotalesPorInspector = function (inspector) {
        var _this = this;
        var arregloTotalInspector = new Array();
        var datosEstadisticas;
        var lista_totales_inspeccion;
        var arrayMesesPorAño = [];
        var arrayDatosPorAño = [];
        var arrayDiaMes = [];
        var arrayDatosDiasMes = [];
        var arrayDiasQuincena = [];
        var arrayDatosQuincena = [];
        var listaQuincena;
        var listaMes;
        var listaAnio;
        var cantPiezas = 0;
        var cantPiezasP1 = 0;
        var cantPiezasP2 = 0;
        var cantPiezasP3 = 0;
        var arrayCant = [];
        this.coreComponent.openModal(0);
        // this.totales_estadisticas = {total_partidas: totPartidas, total_piezas: totPza, listaQuincena: this.listaQuincena, listaMes: this.listaMes, listaAnio: this.listaYear};
        this._insp.consultaDeTotalesPorInspector(inspector).subscribe(function (data) {
            datosEstadisticas = data.current;
            lista_totales_inspeccion = datosEstadisticas.list_Inspeccion;
            for (var i = 0; i < lista_totales_inspeccion.length; i++) {
                // let arrayAux = lista_totales_inspeccion[i].fechaFinInspeccion;
                // let parts: any[] = arrayAux.split("-");
                // let mes = Number(parts[1]);
                // let dia = Number(parts[2]);
                if (lista_totales_inspeccion[i].tipo === "ano") {
                    arrayMesesPorAño.push(lista_totales_inspeccion[i].fechaEstadisticas);
                    arrayDatosPorAño.push(lista_totales_inspeccion[i].totalPiezas);
                    cantPiezas += lista_totales_inspeccion[i].totalPiezas;
                }
                else if (lista_totales_inspeccion[i].tipo === "mes") {
                    arrayDiaMes.push(lista_totales_inspeccion[i].fechaEstadisticas);
                    arrayDatosDiasMes.push(lista_totales_inspeccion[i].totalPiezas);
                    cantPiezas += lista_totales_inspeccion[i].totalPiezas;
                }
                else if (lista_totales_inspeccion[i].tipo == "quincena") {
                    arrayDiasQuincena.push(lista_totales_inspeccion[i].fechaEstadisticas);
                    arrayDatosQuincena.push(lista_totales_inspeccion[i].totalPiezas);
                    cantPiezas += lista_totales_inspeccion[i].totalPiezas;
                }
                else if (lista_totales_inspeccion[i].tipo === "prioridades") {
                    if (lista_totales_inspeccion[i].prioridad_p == 1) {
                        cantPiezasP1 += lista_totales_inspeccion[i].totalPiezas;
                    }
                    else if (lista_totales_inspeccion[i].prioridad_p == 2) {
                        cantPiezasP2 += lista_totales_inspeccion[i].totalPiezas;
                    }
                    else if (lista_totales_inspeccion[i].prioridad_p == 3) {
                        cantPiezasP3 += lista_totales_inspeccion[i].totalPiezas;
                    }
                }
            }
            listaQuincena = { listaLabel: arrayDiasQuincena, listaDatos: arrayDatosQuincena };
            listaMes = { listaLabel: arrayDiaMes, listaDatos: arrayDatosDiasMes };
            listaAnio = { listaLabel: arrayMesesPorAño, listaDatos: arrayDatosPorAño };
            _this.totales_estadisticas = {
                total_partidas: datosEstadisticas.t_partidas,
                total_piezas: datosEstadisticas.total_A,
                total_hallazgos: datosEstadisticas.num_hallazgos,
                listaQuincena: listaQuincena,
                listaMes: listaMes,
                listaAnio: listaAnio
            };
            arrayCant.push(cantPiezasP1);
            arrayCant.push(cantPiezasP2);
            arrayCant.push(cantPiezasP3);
            if ((cantPiezasP1 == 0 || cantPiezasP1 == null) && (cantPiezasP2 == 0 || cantPiezasP2 == null) && (cantPiezasP3 == 0 || cantPiezasP3 == null)) {
                _this.lstPrioridadesEstadisticas = [];
            }
            else {
                _this.lstPrioridadesEstadisticas = [
                    { "tipo": 'Prioridad 1', "piezas": cantPiezasP1, "montos": 0 },
                    { "tipo": 'Prioridad 2', "piezas": cantPiezasP2, "montos": 0 },
                    { "tipo": 'Prioridad 3', "piezas": cantPiezasP3, "montos": 0 }
                ];
            }
            _this.graficas = [];
            // Titulos de Gráficas
            _this.graficasValores[_this.donaPEstadisticas];
            _this.graficas = [
                'PRODUCTOS',
                'PrioridadesEstadisticas'
            ];
            _this.limpiDonaEstadisticas();
            _this.calcularDatosParaGraficas();
            _this.cargarEstadisticas = true;
            _this.coreComponent.closeModal(0);
        }, function (error) {
        });
    };
    /************ RECARGAR DATOS CUANDO SE QUEDA EN LA VISTA GRABAR*****/
    ResponsableaeComponent.prototype.recargarDatos = function ($event) {
        var idUsuario = __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getIdEmpleado();
        this.apartarInspeccion(idUsuario);
    };
    ResponsableaeComponent.prototype.cerrarAler = function (cerrar) {
        this.activarAlert = false;
    };
    ResponsableaeComponent.prototype.recargarVista = function () {
        var _this = this;
        this.recibePartidas();
        this.obtenerDatosInspector();
        this.obtenerContadorPendientes();
        this.recibeTotalesInspeccion();
        setTimeout(function () {
            //  this.obtenerPartidaInspeccion(this.inspector);
            _this.obtenerTotalesPorInspector(_this.inspector);
        }, 1000);
    };
    ResponsableaeComponent.prototype.cerrarAlertaPrio = function (valor) {
        this.activarAlerta = false;
    };
    ResponsableaeComponent.prototype.recibirDatos = function (valor) {
        this.cantidadImprimir = valor;
    };
    ResponsableaeComponent.prototype.imprimir = function () {
        /*   if (respuesta === 'Anaquel') {
             ubic = 'A' + letra;
           } else if (respuesta === 'Congelador') {
             ubic = 'EC' + letra;
           } else if (respuesta === 'Refrigerador') {
             ubic = 'ER' + letra;
           } else if (respuesta === 'Tarima') {
             ubic = 'T' + letra;
           }*/
        var dato = new __WEBPACK_IMPORTED_MODULE_9__class_despachos_parametrosInspeccion_class__["a" /* parametrosInspeccion */]();
        dato.estado = 'Despachable';
        dato.nombreImagenesRechazo = 'OFENBACH MEXICANA S.A. DE C.V.'; // Nombre cliente
        dato.tipoPresentacion = ''; // tipo Partida
        dato.tipo = 'Estandares'; // tipo
        dato.usuario = 'Inspector2'; // Usuario
        dato.manejo = 'ECA'; // Ubicacion;
        dato.presentacionProd = 'Normal'; // control
        dato.fechaInspeccion = '2020-02-11'; // fecha estimada de entrega
        dato.idProducto = 1; // aceptaParciales
        dato.unidadCambio = 'FD-011020-0291-1';
        this.imprimirEtiqueta(dato);
        var cant = this.cantidadImprimir;
        /* for (let i = 0; i < cant; i ++) {
           dato.unidadCambio = 'FD-121619-9908';
           dato.unidadCambio += '-' + (i + 1);
           this.imprimirEtiqueta(dato);
         }*/
    };
    ResponsableaeComponent.prototype.imprimirEtiqueta = function (datos) {
        var fee;
        var tipoPartida = '';
        if (datos.fechaInspeccion !== null && datos.fechaInspeccion !== undefined) {
            var fechaSec = datos.fechaInspeccion.toString().split('-');
            fee = fechaSec[1] + fechaSec[2] + fechaSec[0].substring(2, 4);
        }
        else {
            fee = '';
        }
        if (datos.idProducto === 1) {
            tipoPartida = '(Pa';
        }
        else if (datos.idProducto === 2) {
            tipoPartida = '(NA';
        }
        else {
            tipoPartida = '(NPa';
        }
        if (datos.tipoPresentacion === 'Programado') {
            tipoPartida += '/Pr)';
        }
        else {
            tipoPartida += ')';
        }
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 288, height: 216 });
        var fecha = new __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__["h" /* DateFormatSlashHour */]().transform(new Date());
        var html = [
            "<html><head>",
            "<style>",
            "@media print { @page {size: 10cm 9cm;padding:0;page-break-inside: avoid;page-break-before: avoid;page-break-after: avoid;}}",
            ".contenido {position: absolute;max-width: 9.5cm; page-break-inside: avoid; page-break-before: avoid;page-break-after: avoid;} .bcode{font-family:'Novecentowide'; font-size:12px;} img{page-break-inside: avoid; page-break-before: avoid;page-break-after: avoid;}",
            "</style></head>",
            "<body> <div class='contenido'>",
            "<img style='width: 8cm; height:2cm; margin-top:-20px;' ",
            "src='https://barcode.tec-it.com/barcode.ashx?data=" + datos.unidadCambio + "&code=Code128&multiplebarcodes=false&translate-esc=false&unit=Fit&dpi=96&imagetype=Gif&rotation=0&color=%23000000&bgcolor=%23ffffff&qunit=Mm&quiet=0'>",
            "</div>",
            "<div style='padding-top: 65px; ' >",
            "<div style='flex-direction: row; display: flex;' >",
            "<div  style='font-size: 14px; min-height:23px; width:160px;width:160px; text-align:right; padding-right: 5px '> Cliente:</div>",
            "<div  style='font-size: 14px; min-height:23px;'> " + datos.nombreImagenesRechazo + "</div>",
            "</div>",
            "<div style='flex-direction: row; display: flex;' >",
            "<div  style='font-size: 14px; height:23px;width: 432px;  font-weight: bold; text-align: center;'> " + tipoPartida + ' ' + fee + "</div>",
            "</div>",
            "<div style='flex-direction: row; display: flex;' >",
            "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Estatus:</div>",
            "<div  style='font-size: 14px; height:23px;  font-weight: bold; '> " + datos.estado + "</div>",
            "</div>",
            "<div style='flex-direction: row; display: flex;' >",
            "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Inspecciono: </div>",
            "<div  style='font-size: 14px; height:23px; '> " + datos.usuario + "</div>",
            "</div>",
            "<div style='flex-direction: row; display: flex;' >",
            "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Tipo:</div>",
            "<div  style='font-size: 14px; height:23px; '> " + datos.tipo + "</div>",
            "</div>",
            "<div style='flex-direction: row; display: flex;' >",
            "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Control: </div>",
            "<div  style='font-size: 14px; height:23px; '>" + datos.presentacionProd + "</div>",
            "</div>",
            "<div style='flex-direction: row; display: flex;' >",
            "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Ubicación:</div>",
            "<div  style='font-size: 14px; min-height:23px;'> " + datos.manejo + "</div>",
            "</div>",
            "<div style='flex-direction: row; display: flex;' >",
            "<div  style='font-size: 14px; width:140px; text-align:right; padding-right: 5px'> Inspeccionado:</div>",
            "<div  style='font-size: 14px; '> " + fecha + "</div>",
            "</div>",
            "</div>",
            "</body></html>"
        ].join("");
        newWin.loadURL("data:text/html;charset=utf-8," + encodeURI(html));
        newWin.hide();
        // newWin.webContents.openDevTools()
        newWin.webContents.on('did-finish-load', function () {
            console.log(newWin.webContents.getPrinters());
            var prints = newWin.webContents.getPrinters();
            var impresora = "";
            for (var _i = 0, prints_1 = prints; _i < prints_1.length; _i++) {
                var print_1 = prints_1[_i];
                if (print_1.description == "ZebraTicket") {
                    impresora = print_1.name;
                }
            }
            newWin.webContents.print({ silent: false, printBackground: false, deviceName: impresora }, function (success) {
                newWin.close();
            });
        });
    };
    ResponsableaeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-responsableae',
            template: __webpack_require__("./src/app/components/responsableae/responsableae.component.html"),
            styles: [__webpack_require__("./src/app/components/responsableae/responsableae.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_inspeccion_inspeccion_service__["a" /* InspeccionService */], __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_7__services_comun_comun_service__["a" /* ComunService */]])
    ], ResponsableaeComponent);
    return ResponsableaeComponent;
}());



/***/ }),

/***/ "./src/app/components/responsableae/responsableae.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsableaeModule", function() { return ResponsableaeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_radio_button_radio_button_module__ = __webpack_require__("./src/app/components/shared/radio-button/radio-button.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__responsableae_component__ = __webpack_require__("./src/app/components/responsableae/responsableae.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__responsableae_routing_module__ = __webpack_require__("./src/app/components/responsableae/responsableae-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__menu_roles_menu_roles_component__ = __webpack_require__("./src/app/components/responsableae/menu-roles/menu-roles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_barra_actividades_barra_actividades_component__ = __webpack_require__("./src/app/components/shared/barra-actividades/barra-actividades.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_pop_up_grabacion_video_pop_up_grabacion_video_component__ = __webpack_require__("./src/app/components/shared/pop-up-grabacion-video/pop-up-grabacion-video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_botonera_dias_botonera_dias_component__ = __webpack_require__("./src/app/components/responsableae/componentes/botonera-dias/botonera-dias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_barra_progreso_barra_progreso_component__ = __webpack_require__("./src/app/components/responsableae/componentes/barra-progreso/barra-progreso.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_inspeccion_por_prioridad_inspeccion_por_prioridad_component__ = __webpack_require__("./src/app/components/responsableae/componentes/inspeccion-por-prioridad/inspeccion-por-prioridad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_vista_operacion_inspeccion_vista_operacion_inspeccion_component__ = __webpack_require__("./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-operacion-inspeccion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__componentes_informacion_partida_informacion_partida_component__ = __webpack_require__("./src/app/components/responsableae/componentes/informacion-partida/informacion-partida.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__componentes_iniciar_inspeccion_iniciar_inspeccion_component__ = __webpack_require__("./src/app/components/responsableae/componentes/iniciar-inspeccion/iniciar-inspeccion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__componentes_vista_operacion_inspeccion_vista_escanear_pedimento_vista_escanear_pedimento_component__ = __webpack_require__("./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-escanear-pedimento/vista-escanear-pedimento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__componentes_vista_operacion_inspeccion_vista_secciones_inspeccion_vista_secciones_inspeccion_component__ = __webpack_require__("./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-secciones-inspeccion/vista-secciones-inspeccion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__componentes_vista_operacion_inspeccion_vista_inspccionar_partida_vista_inspccionar_partida_component__ = __webpack_require__("./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-inspccionar-partida/vista-inspccionar-partida.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__componentes_inspeccion_nivel_pieza_inspeccion_nivel_pieza_component__ = __webpack_require__("./src/app/components/responsableae/componentes/inspeccion-nivel-pieza/inspeccion-nivel-pieza.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_pop_up_editar_lote_pop_up_editar_lote_component__ = __webpack_require__("./src/app/components/shared/pop-up-editar-lote/pop-up-editar-lote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_charts__ = __webpack_require__("./node_modules/ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_combo_flecha_verde_combo_flecha_verde_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-verde/combo-flecha-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__componentes_vista_operacion_inspeccion_vista_almacenar_productos_vista_almacenar_productos_component__ = __webpack_require__("./src/app/components/responsableae/componentes/vista-operacion-inspeccion/vista-almacenar-productos/vista-almacenar-productos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_radio_button_sin_label_radio_button_sin_label_module__ = __webpack_require__("./src/app/components/shared/radio-button-sin-label/radio-button-sin-label.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__componentes_pop_ups_pop_confirmacion_pop_confirmacion_component__ = __webpack_require__("./src/app/components/responsableae/componentes/pop-ups/pop-confirmacion/pop-confirmacion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__componentes_pop_ups_pop_informativo_pop_informativo_component__ = __webpack_require__("./src/app/components/responsableae/componentes/pop-ups/pop-informativo/pop-informativo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__componentes_pop_ups_pop_finalizar_pop_finalizar_component__ = __webpack_require__("./src/app/components/responsableae/componentes/pop-ups/pop-finalizar/pop-finalizar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_combo_sin_border_combo_sin_border_module__ = __webpack_require__("./src/app/components/shared/combo-sin-border/combo-sin-border.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__componentes_pop_ups_pop_escanear_qr_pop_escanear_qr_component__ = __webpack_require__("./src/app/components/responsableae/componentes/pop-ups/pop-escanear-qr/pop-escanear-qr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__shared_grafica_puntos_grafica_puntos_module__ = __webpack_require__("./src/app/components/shared/grafica-puntos/grafica-puntos.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__shared_pop_up_estadisticas_pop_up_estadisticas_module__ = __webpack_require__("./src/app/components/shared/pop-up-estadisticas/pop-up-estadisticas.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__shared_file_upload_file_upload_module__ = __webpack_require__("./src/app/components/shared/file-upload/file-upload.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__shared_alerta_alerta_module__ = __webpack_require__("./src/app/components/shared/alerta/alerta.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__shared_check_gris_palomita_verde_check_gris_palomita_verde_module__ = __webpack_require__("./src/app/components/shared/check-gris-palomita-verde/check-gris-palomita-verde.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var ResponsableaeModule = /** @class */ (function () {
    function ResponsableaeModule() {
    }
    ResponsableaeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__responsableae_routing_module__["a" /* ResponsableaeRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_radio_button_radio_button_module__["a" /* RadioButtonModule */],
                __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_24_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_5__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_25__shared_combo_flecha_verde_combo_flecha_verde_module__["a" /* ComboFlechaVerdeModule */],
                __WEBPACK_IMPORTED_MODULE_27__shared_radio_button_sin_label_radio_button_sin_label_module__["a" /* RadioButtonSinLabelModule */],
                __WEBPACK_IMPORTED_MODULE_31__shared_combo_sin_border_combo_sin_border_module__["a" /* ComboSinBorderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_33__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */],
                __WEBPACK_IMPORTED_MODULE_34__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */],
                __WEBPACK_IMPORTED_MODULE_35__shared_grafica_puntos_grafica_puntos_module__["a" /* GraficaPuntosModule */],
                __WEBPACK_IMPORTED_MODULE_36__shared_pop_up_estadisticas_pop_up_estadisticas_module__["a" /* PopUpEstadisticasModule */],
                __WEBPACK_IMPORTED_MODULE_37__shared_file_upload_file_upload_module__["a" /* FileUploadModule */],
                __WEBPACK_IMPORTED_MODULE_38__shared_alerta_alerta_module__["a" /* AlertaModule */],
                __WEBPACK_IMPORTED_MODULE_39__shared_check_gris_palomita_verde_check_gris_palomita_verde_module__["a" /* CheckGrisPalomitaVerdeModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__responsableae_component__["a" /* ResponsableaeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__menu_roles_menu_roles_component__["a" /* MenuRolesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__shared_barra_actividades_barra_actividades_component__["a" /* BarraActividadesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__shared_pop_up_grabacion_video_pop_up_grabacion_video_component__["a" /* PopUpGrabacionVideoComponent */],
                // PopUpEstadisticasComponent,
                // GraficaPuntosComponent,
                __WEBPACK_IMPORTED_MODULE_13__componentes_botonera_dias_botonera_dias_component__["a" /* BotoneraDiasComponent */],
                __WEBPACK_IMPORTED_MODULE_14__componentes_barra_progreso_barra_progreso_component__["a" /* BarraProgresoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__componentes_inspeccion_por_prioridad_inspeccion_por_prioridad_component__["a" /* InspeccionPorPrioridadComponent */],
                __WEBPACK_IMPORTED_MODULE_16__componentes_vista_operacion_inspeccion_vista_operacion_inspeccion_component__["a" /* VistaOperacionInspeccionComponent */],
                __WEBPACK_IMPORTED_MODULE_17__componentes_informacion_partida_informacion_partida_component__["a" /* InformacionPartidaComponent */],
                // DonaComponent,
                __WEBPACK_IMPORTED_MODULE_18__componentes_iniciar_inspeccion_iniciar_inspeccion_component__["a" /* IniciarInspeccionComponent */],
                __WEBPACK_IMPORTED_MODULE_19__componentes_vista_operacion_inspeccion_vista_escanear_pedimento_vista_escanear_pedimento_component__["a" /* VistaEscanearPedimentoComponent */],
                __WEBPACK_IMPORTED_MODULE_20__componentes_vista_operacion_inspeccion_vista_secciones_inspeccion_vista_secciones_inspeccion_component__["a" /* VistaSeccionesInspeccionComponent */],
                __WEBPACK_IMPORTED_MODULE_21__componentes_vista_operacion_inspeccion_vista_inspccionar_partida_vista_inspccionar_partida_component__["a" /* VistaInspccionarPartidaComponent */],
                __WEBPACK_IMPORTED_MODULE_22__componentes_inspeccion_nivel_pieza_inspeccion_nivel_pieza_component__["a" /* InspeccionNivelPiezaComponent */],
                __WEBPACK_IMPORTED_MODULE_23__shared_pop_up_editar_lote_pop_up_editar_lote_component__["a" /* PopUpEditarLoteComponent */],
                // FileUploadComponent,
                __WEBPACK_IMPORTED_MODULE_26__componentes_vista_operacion_inspeccion_vista_almacenar_productos_vista_almacenar_productos_component__["a" /* VistaAlmacenarProductosComponent */],
                // CheckGrisPalomitaVerdeComponent,
                __WEBPACK_IMPORTED_MODULE_28__componentes_pop_ups_pop_confirmacion_pop_confirmacion_component__["a" /* PopConfirmacionComponent */],
                __WEBPACK_IMPORTED_MODULE_29__componentes_pop_ups_pop_informativo_pop_informativo_component__["a" /* PopInformativoComponent */],
                // AlertaComponent,
                __WEBPACK_IMPORTED_MODULE_30__componentes_pop_ups_pop_finalizar_pop_finalizar_component__["a" /* PopFinalizarComponent */],
                // DonutChartComponent,
                __WEBPACK_IMPORTED_MODULE_32__componentes_pop_ups_pop_escanear_qr_pop_escanear_qr_component__["a" /* PopEscanearQrComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_8__responsableae_component__["a" /* ResponsableaeComponent */]
            ]
        })
    ], ResponsableaeModule);
    return ResponsableaeModule;
}());



/***/ }),

/***/ "./src/app/components/shared/barra-actividades/barra-actividades.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"barraActividades\">\n\n  <div class=\"flechaIzq\">\n    <img id=\"FlechaIzqVerde\" [src]=\"classflechaizq\" (click)=\"desplazamientoIzq()\" />\n  </div>\n\n\n  <div class=\"contenido\">\n    <a href=\"javascript:;\" class=\"elemento\" (click)=\"inicio(i)\" *ngFor=\"let actividad of actividades; let i = index\" >\n      <div [ngClass]=\"classText[i]\" > {{i + 1 }}.- {{ actividad}}</div>\n      <hr [ngClass]=\"classHr[i]\" >\n    </a>\n  </div>\n\n  <div class=\"flechaDer\">\n    <img id=\"FlechaDerVerde\" [src]=\"classflechader\" (click)=\"desplazamientoDer()\" />\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/shared/barra-actividades/barra-actividades.component.scss":
/***/ (function(module, exports) {

module.exports = ".barraActividades {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  max-height: 70px; }\n\n.flechaIzq {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  cursor: pointer; }\n\n.contenido {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  text-align: center;\n  padding: 15px; }\n\n.elemento {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 50%;\n  margin: 3px;\n  font-size: 12px;\n  font-family: 'Roboto', sans-serif;\n  text-decoration: none;\n  color: grey;\n  padding-bottom: 15px; }\n\n.flechaDer {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  cursor: pointer; }\n\n.texto {\n  font-size: 12px;\n  font-family: 'Roboto', sans-serif;\n  text-decoration: none;\n  color: grey; }\n\n.hr {\n  height: 8px;\n  background-color: #D8D9DD;\n  width: 100%;\n  border: 1px solid #D8D9DD; }\n\n#FlechaIzqVerde, #FlechaDerVerde {\n  width: 19.5px;\n  height: 29.5px; }\n\n.hrFocus {\n  height: 8px;\n  width: 100%;\n  border: 1px solid #008895;\n  background-color: #008895; }\n\n.textFocus {\n  font-size: 12px;\n  font-family: 'Roboto', sans-serif;\n  text-decoration: none;\n  color: black;\n  font-weight: 600; }\n"

/***/ }),

/***/ "./src/app/components/shared/barra-actividades/barra-actividades.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarraActividadesComponent; });
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

var BarraActividadesComponent = /** @class */ (function () {
    function BarraActividadesComponent() {
        //@Input() actividad: String;
        this.eventCambio = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.verificarSiAvanza = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //Minimo debe tener dos elementos el arreglo.
        // actividadesInspeccion: any[] = ["INSPECCIONAR PARTIDA", "INSPECCIONAR PIEZAS", "ALMACENAR PRODUCTOS"];
        // actividades: any[] = ["COLECTAR ELEMENTOS", "EMBALAR PRODUCTOS", "GENERAR PACKING LIST"];
        this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
        this.classflechader = "./assets/Images/FlechaDerVerde.svg";
        this.focus = true;
        this.indexselected = 0;
    }
    BarraActividadesComponent.prototype.ngOnChanges = function (change) {
        console.log(change);
        if (change.clickArrows !== undefined && !change.clickArrows.firstChange) {
            this.desplazamientoIzq();
        }
        else if (change.clickArrows2 !== undefined && !change.clickArrows2.firstChange) {
            this.desplazamientoDer();
        }
        if (this.reiniciaBarra) {
            this.reinicioDeBarra();
        }
    };
    BarraActividadesComponent.prototype.inicio = function (i) {
        if (this.maxItemList == undefined) {
            if (i == 0 && this.pieza == true) {
                this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
                this.classflechader = "./assets/Images/FlechaDerVerde.svg";
                this.indexselected = i;
                this.classHr.fill('hr');
                this.classText.fill('text');
                this.classHr[i] = 'hrFocus';
                this.classText[i] = 'textFocus';
            }
            else if (i == (this.actividades.length - 1)) {
                this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
                this.classflechader = "./assets/Images/flechaDerechaCatProNormal.svg";
                this.indexselected = i;
                this.classHr.fill('hr');
                this.classText.fill('text');
                this.classHr[i] = 'hrFocus';
                this.classText[i] = 'textFocus';
            }
            else {
                if (this.pieza == true && i != 0) {
                    //  this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
                    this.classflechader = "./assets/Images/FlechaDerVerde.svg";
                    this.indexselected = i;
                    this.classHr.fill('hr');
                    this.classText.fill('text');
                    this.classHr[i] = 'hrFocus';
                    this.classText[i] = 'textFocus';
                }
            }
            this.eventCambio.emit(this.indexselected);
        }
        else if (i == this.maxItemList) {
            this.verificarSiAvanza.emit();
        }
    };
    BarraActividadesComponent.prototype.selccionarPrimero = function () {
        this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
        this.classflechader = "./assets/Images/FlechaDerVerde.svg";
        this.indexselected = 0;
    };
    BarraActividadesComponent.prototype.reinicioDeBarra = function () {
        this.classflechaizq = "./assets/Images/flechaIzquierdaCatProNormal.svg";
        this.classflechader = "./assets/Images/FlechaDerVerde.svg";
        this.indexselected = 0;
        this.classHr.fill('hr');
        this.classText.fill('text');
        this.classHr[0] = 'hrFocus';
        this.classText[0] = 'textFocus';
        this.indexselected = 0;
        this.eventCambio.emit(this.indexselected);
    };
    BarraActividadesComponent.prototype.desplazamientoIzq = function () {
        if (this.indexselected > 0 && this.pieza == true) {
            this.indexselected = this.indexselected - 1;
            this.classHr.fill('hr');
            this.classText.fill('text');
            this.classHr[this.indexselected] = 'hrFocus';
            this.classText[this.indexselected] = 'textFocus';
            console.log("regresa");
            this.eventCambio.emit(this.indexselected);
            this.classflechader = "./assets/Images/FlechaDerVerde.svg";
        }
        if (this.indexselected == 2 && this.pieza !== undefined) {
            //&& this.pieza == undefined
            // if(this.pieza == false ){
            this.indexselected = this.indexselected - 1;
            this.classHr.fill('hr');
            this.classText.fill('text');
            this.classHr[this.indexselected] = 'hrFocus';
            this.classText[this.indexselected] = 'textFocus';
            console.log("regresa");
            this.eventCambio.emit(this.indexselected);
            this.classflechader = "./assets/Images/FlechaDerVerde.svg";
        }
    };
    BarraActividadesComponent.prototype.desplazamientoDer = function () {
        if (this.maxItemList == undefined) {
            if (this.indexselected < this.actividades.length - 1) {
                this.indexselected = this.indexselected + 1;
                this.classHr.fill('hr');
                this.classText.fill('text');
                this.classHr[this.indexselected] = 'hrFocus';
                this.classText[this.indexselected] = 'textFocus';
                console.log("avanza");
                this.eventCambio.emit(this.indexselected);
                if (this.indexselected == this.actividades.length - 1) {
                    this.classflechader = "./assets/Images/flechaDerechaCatProNormal.svg";
                }
                else {
                    this.classflechader = "./assets/Images/FlechaDerVerde.svg";
                }
            }
        }
        else if (this.indexselected + 1 == this.maxItemList) {
            this.verificarSiAvanza.emit();
        }
    };
    BarraActividadesComponent.prototype.ngOnInit = function () {
        this.selccionarPrimero();
        this.classText = new Array(this.actividades.length).fill('text');
        this.classHr = new Array(this.actividades.length).fill('hr');
        this.classHr[0] = 'hrFocus';
        this.classText[0] = 'textFocus';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], BarraActividadesComponent.prototype, "eventCambio", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], BarraActividadesComponent.prototype, "verificarSiAvanza", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BarraActividadesComponent.prototype, "maxItemList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BarraActividadesComponent.prototype, "clickArrows", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BarraActividadesComponent.prototype, "clickArrows2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BarraActividadesComponent.prototype, "pieza", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], BarraActividadesComponent.prototype, "reiniciaBarra", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BarraActividadesComponent.prototype, "actividades", void 0);
    BarraActividadesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'Pq-barra-actividades',
            template: __webpack_require__("./src/app/components/shared/barra-actividades/barra-actividades.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/barra-actividades/barra-actividades.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BarraActividadesComponent);
    return BarraActividadesComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/pop-up-editar-lote/pop-up-editar-lote.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <a type=\"submit\" class=\"btnLOTE\"\n      onclick=\"document.getElementById('pop-up-lote').style.display='block'\">\n      INCIENCIA </a> -->\n\n<div class=\"content\">\n  <div id=\"pop-up-facturacion\" class=\"modal\" #pop>\n    <div class=\"modal-content\">\n      <header class=\"header\" >\n        PROQUIFA NET\n      </header>\n\n      <!-- botonera -->\n\n\n      <div class=\"contenido\" *ngIf=\"!publicacion \">\n        <!-- botonera -->\n        <div class=\"botonera\" *ngIf=\"!publicacion && !vistaPieza\">\n\n          <div  class=\"botones\" (click)=\"lotes()\" style=\"border-right: 1px solid white; \" [style.background]=\"vistaLote?'#008895':'#ECEEF0'\"\n                [style.color] = \"vistaLote?'#FFFFFF':'#424242'\" >\n            EDITAR LOTE\n          </div>\n\n          <div  class=\"botones\" (click)=\"piezas()\" [style.background]=\"!vistaLote?'#008895':'#ECEEF0'\" [style.color]=\"!vistaLote?'#FFFFFF':'#424242'\">\n            PIEZA NO DESPACHABLE\n          </div>\n\n        </div>\n        <div class=\"botonera\" style=\"background:#008895\" *ngIf=\"publicacion || vistaPieza\">\n\n          <div style=\" width:100%\" [style.cursor] = \"vistaPieza ?'default': 'default' \">\n            PIEZA NO DESPACHABLE\n          </div>\n\n        </div>\n\n        <!-- botonera -->\n        <div *ngIf=\"vistaLote && !vistaPieza\" class=\"divLote\">\n          <div style=\"width:100%; border-bottom: 1px solid #424242; height: 25px;\">\n            <label class=\"titulo\"> Información de Lote </label>\n          </div>\n\n          <div class=\"arriba\">\n            <div class=\"\" style=\" flex-direction:column; width: 35%; display:flex;\">\n              <label style=\"padding-bottom: 5px;\" class=\"tituloDato\">Lote: </label>\n              <input type=\"text\" #textLote (blur)=\"cambioLote(textLote.value)\" class=\"inf\"   style=\"left:0px; \" [(ngModel)]=\"pza.lote\"  autofocus   />\n\n            </div>\n            <div class=\"\" style=\" flex-direction:column; width: 65%;\">\n              <label class=\"tituloDato\" style=\"left: 34.6%;\">Caducidad: </label>\n              <div class=\"months\" style=\" flex-direction: row; width:100%; display: flex; padding-top: 5px;\">\n                <pn-combo-flecha-verde style=\"width:50%; padding-right:10px;\" [itemSelect]=\"selectedMes\" id=\"cmbMeses\" (valueDropList)=\"infoCombo($event,'mes')\" [items]=\"meses\" [heightLi]=\"'35px'\"></pn-combo-flecha-verde>\n\n                <pn-combo-flecha-verde style=\"width:50%;  padding-left:10px;\" [itemSelect]=\"selectedAnio\" id=\"cmbAnios\" (valueDropList)=\"infoCombo($event,'anio')\" [items]=\"anio\" [heightLi]=\"'35px'\"></pn-combo-flecha-verde>\n              </div>\n            </div>\n          </div>\n          <div class=\"\" style=\"height:60%; width:100%; display:flex; flex-direction: column; padding-top: 65px;\"\n               [style.opacity]= \" copiaPartidaPrioridad.lote != pza.lote && checkedCat ? '1' : '0.5'\"\n               [style.pointerEvents]= \"copiaPartidaPrioridad.lote  != pza.lote   && checkedCat ? 'auto':'none'\" >\n\n            <div style=\"width:100%; heigth: 30px; display:flex; flex-direction: row; border-bottom: 1px solid #424242; \" class=\"checkbox\" >\n              <pq-check-gris-palomita-verde (event)=\"cambiaCheck($event, 'noAplica')\" [check]=\"checkDocto\"></pq-check-gris-palomita-verde>\n              <span class=\"titulo\" style=\"padding: 2px 8px;\"> No aplica documentación </span>\n            </div>\n\n\n            <div class=\"abajo\" *ngIf=\"checkDocto2\">\n              <div class=\"certificado\">\n                <label class=\"tituloDato\">Certificado: </label>\n                <br>\n                <div class=\"docto\" style=\"left:0px; width:430px;\">\n                  <pq-file-upload [doc]=\"'Certificado'\"  [docR]=\"archCertificado\" (enviarDocumento)=\"enviarDocumentacion($event,'Certificado')\"></pq-file-upload>\n                </div>\n              </div>\n              <!-- <div class=\"Seguridad\">\n                <label #label class=\"tituloDato\">Hoja de Seguridad: </label>\n                <br>\n                <div class=\"docto\" style=\"width:100%\">\n                  <pq-file-upload [doc]=\"'Hoja_seguridad'\"  [docR]=\"archSeguridad\" (enviarDocumento)=\"enviarDocumentacion($event,'HojaSeguridad')\"></pq-file-upload>\n                </div>\n              </div> -->\n            </div>\n          </div>\n          <div class=\"footer\">\n            <div class=\"btnCancelar\" (click)=\"cerrar()\"><label>CANCELAR </label></div>\n            <div class=\"btnAceptar\" (click)=\"aceptar()\" [style.pointerEvents]= \"aux == true && btnAceptar || copiaPartidaPrioridad.lote != pza.lote && aux == true  ? 'auto':'none'\" [style.background]= \"aux == true && btnAceptar || copiaPartidaPrioridad.lote != pza.lote && aux == true ? '#008895':'#D5DBDB'\">\n              <label  [style.pointerEvents]= \"aux == true && btnAceptar || copiaPartidaPrioridad.lote != pza.lote && aux == true ? 'auto':'none'\" >ACEPTAR </label></div>\n          </div>\n\n        </div>\n        <!-- fin vistalote -->\n        <div *ngIf=\"!vistaLote || vistaPieza\" class=\"divLote\" style=\"left:-19px;\">\n          <div class=\"checks\" style=\" height:93%; flex-direction:row; display:flex;\">\n            <div style=\"width:50%; height:95%;  border-right:1px solid #D8D9DD;\">\n              <div class=\"\" style=\"width:100%; height:52.3%; padding-bottom: 25px;\">\n                <div style=\"display:flex;  height: 14.5%; flex-direction: row; align-items: center;\">\n                  <pq-check-gris-palomita-verde style=\"padding-right: 10px;\" (event)=\"cambiaCheck($event, 'catalogo')\" [check]=\"checkedCat\" id=\"checkbox1\"> </pq-check-gris-palomita-verde>\n                  <label [style.color]=\"label1\" class=\"labelCheck\">Catálogo: <span [style.color]= \"label1\"  class=\"info\">{{catalogo}}</span></label>\n                </div>\n                <div style=\"display:flex;  height: 14.5%;   flex-direction: row;     align-items: center;\">\n                  <pq-check-gris-palomita-verde (event)=\"cambiaCheck($event, 'lote')\" [check]=\"checkLote\" id=\"checkbox5\" style=\"padding-right: 10px;\" ></pq-check-gris-palomita-verde>\n                  <label [style.color]=\"label5\" class=\"labelCheck\">Lote: <span [style.color]= \"label5\" class=\"info\">{{noLote}}</span></label>\n                </div>\n\n                <div style=\"display:flex;     flex-direction: row;     align-items: center;\">\n                  <pq-check-gris-palomita-verde style=\"padding-right: 10px;\" (event)=\"cambiaCheck($event, 'descripcion')\" [check]=\"checkDesc\" id=\"checkbox2\"> </pq-check-gris-palomita-verde>\n                  <label [style.color]=\"label2\" class=\"labelCheck\" style=\"line-height: 20px;\">Descripción: <span [style.color]= \"label2\" style=\"font-size:calc((1vh + 1vw) / 2 );\" class=\"info\">{{desc}}</span></label>\n                </div>\n                <div style=\"display:flex;  height: 14.5%;   flex-direction: row;     align-items: center;\">\n                  <pq-check-gris-palomita-verde (event)=\"cambiaCheck($event, 'caducidad')\" [check]=\"checkCad\" id=\"checkbox6\" style=\"padding-right: 10px;\" ></pq-check-gris-palomita-verde>\n                  <label [style.color]=\"label6\" class=\"labelCheck\">Caducidad: <span [style.color]= \"label6\" class=\"info\">{{caducidad}}</span></label>\n                </div>\n\n\n                <div style=\"display:flex; height: 14.5%;    flex-direction: row;     align-items: center;\">\n                  <pq-check-gris-palomita-verde (event)=\"cambiaCheck($event, 'presentacion')\" [check]=\"checkPre\" id=\"checkbox3\" style=\"padding-right: 10px;\" ></pq-check-gris-palomita-verde>\n                  <label [style.color]=\"label3\" class=\"labelCheck\">Presentación: <span [style.color]= \"label3\" class=\"info\">{{presentacion}}</span></label>\n                </div>\n\n                <div style=\"display:flex; height: 14.5%;    flex-direction: row;     align-items: center;\">\n                  <pq-check-gris-palomita-verde (event)=\"cambiaCheck($event, 'fisicamente')\" [check]=\"checkFis\" id=\"checkbox7\" style=\"padding-right: 10px;\" ></pq-check-gris-palomita-verde>\n                  <label [style.color]=\"label7\" class=\"labelCheck\">Físicamente conforme: <span [style.color]= \"label7\"  class=\"info\">{{fisico}}</span></label>\n                </div>\n\n\n                <div *ngIf=\"checkDocto2\" style=\"display:flex; height: 14.5%;   flex-direction: row;  align-items: center;\">\n                  <pq-check-gris-palomita-verde (event)=\"cambiaCheck($event, 'documentacion')\" [check]=\"checkDocumentacion\" style=\"padding-right: 10px;\" ></pq-check-gris-palomita-verde>\n                  <label [style.color]=\"label4\" class=\"labelCheck\">Documentación: <span  [style.color]= \"label4\" class=\"info\">{{documentacion}}</span></label>\n                </div>\n                <div *ngIf=\"!checkDocto2\" style=\"display:flex; height: 14.5%;  flex-direction: row; align-items: center;\">\n                  <pq-check-gris-palomita-verde [disabled]=\"!checkDocto2\" [check]=\"checkDocto2\" style=\"padding-right: 10px;\"></pq-check-gris-palomita-verde>\n                  <label [style.color]=\"label4\" class=\"labelCheck\">Documentación: <span  [style.color]= \"label4\" class=\"info\">{{documentacion}}</span></label>\n                </div>\n\n              </div>\n              <div  [style.opacity] =\"activarText ? '1' : '0.5' \" style=\"width:100%; padding-right: 20px; display: flex; flex-direction: column; box-sizing: border-box;\">\n                <label style=\"width: 100%; height:30px; display: flex;border-bottom: 1px solid #424242; box-sizing: border-box; \" class=\"titulo\">Reporte de rechazo</label>\n                <div style=\"top: 20px; position: relative; width: 100%; border: 1px solid #D8D9DD; height: 136px; padding: 10px 15px; display: flex; box-sizing: border-box;\" >\n                  <textarea type=\"text\" class=\"textArea\"  #textArea (blur)=\"rechazoTxt(textArea.value)\" [(ngModel)]=\"reporteTxt\" [disabled]=\"!activarText\" [style.display]= \"activarText ? 'block' :'none'\"> {{reporteTxt}}</textarea>\n                </div>\n              </div>\n            </div>\n\n\n            <div style=\"right:0px; width:50%; height:95%; \">\n\n              <div [style.opacity] =\"prueba ? '1' : '0.5' \"style=\"width:100%; height:100%; padding-left: 20px; display:flex; flex-direction: column; box-sizing: border-box;\">\n                <label style=\"width: 100%;display: flex; border-bottom: 1px solid #424242; box-sizing: border-box; padding: 10px 0px 10px 0px;\" class=\"titulo\">\n                  Cargar fotos <span style=\"color:#B40404; font-weight:300; padding-left: 5px;\"> (Obligatoria)</span></label>\n\n                <div class=\"enfocarProducto\" >\n                  <img src=\"./assets/Images/Images/Sup_Izq.svg\" alt=\"\" class=\"imgEnfoque\"  style=\"top: 8px; left:0px; position: absolute;\">\n                  <img src=\"./assets/Images/Images/Sup_Der.svg\" alt=\"\" class=\"imgEnfoque\" style=\"top: 8px; right:0px; position: absolute;\" >\n                  <label > ENFOCA EL PRODUCTO</label>\n                  <video  id=\"player\" #player [style.display]= \"prueba? 'block': 'none'\"></video>\n\n                  <img src=\"./assets/Images/Images/Inf_Izq.svg\" alt=\"\" class=\"imgEnfoque\" style=\"bottom:0px; left: 0px; position: absolute;\">\n                  <img src=\"./assets/Images/Images/Inf_Der.svg\" alt=\"\"   class=\"imgEnfoque\" style=\"bottom:0px; right:0px; position: absolute;\">\n                </div>\n\n                <div class=\"tiposEnfoque\" >\n                  <div style=\"padding-right:30px;\">\n                    <label>Frente</label>\n                    <div >\n                      <img id=\"output\" style=\"display:none\"/>\n                      <p > Coloca la pieza en la orientación correcta, para tomar la foto.</p>\n                      <canvas id=\"canvasFrente\" [style.display]='displayImg'  ></canvas>\n                      <!-- <canvas id=\"canvasFrente\" [style.display]='displayImg' src = \"data:image/png;base64,imageDataURL\" [style.display] = \"imageDataURL != undefined ? 'flex' : 'none' \"></canvas> -->\n                    </div>\n                    <img src=\"./assets/Images/Images/boton_camara.svg\" alt=\"\" (click)= \"takeSnapshot('Frente')\"\n                         [style.pointerEvents]= \"prueba? 'auto': 'none'\" >\n\n                  </div>\n                  <div style=\"padding: 0px 30px 0px 30px;\">\n                    <label>Arriba</label>\n                    <div >\n                      <p > Coloca la pieza en la orientación correcta, para tomar la foto.</p>\n                      <img id=\"output2\" style=\"display:none\"  />\n                      <canvas id=\"canvasArriba\" [style.display]='displayImg' ></canvas>\n                    </div>\n                    <img src=\"./assets/Images/Images/boton_camara.svg\" alt=\"\" (click)= \"takeSnapshot('Arriba')\"    [style.pointerEvents]= \"prueba? 'auto': 'none'\">\n                  </div>\n                  <div style=\"padding-left: 30px;\">\n                    <label>Abajo</label>\n                    <div >\n                      <p > Coloca la pieza en la orientación correcta, para tomar la foto.</p>\n                      <img id=\"output3\" style=\"display:none\" />\n                      <canvas id=\"canvasAbajo\" [style.display]='displayImg' ></canvas>\n                    </div>\n                    <img src=\"./assets/Images/Images/boton_camara.svg\" alt=\"\" (click)= \"takeSnapshot('Abajo')\"    [style.pointerEvents]= \"prueba? 'auto': 'none'\">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"footer\">\n            <div class=\"btnCancelar\" style=\"left:0px;\" (click)=\"cerrar()\"><label>CANCELAR</label></div>\n            <div  *ngIf= \"!copiaPartidaPrioridad.pasosImprimirEtiqueta\" class=\"btnAceptar\" style=\"right:0px;\" (click)=\"aceptar()\" [style.pointerEvents]= \"btnEtiquetar && reporteTxt !== '' && prueba  ? 'auto':'none'\" [style.background-color]= \"btnEtiquetar && reporteTxt !== '' && prueba  ? '#008895':'#D5DBDB'\" >\n              <label  [style.pointerEvents]= \"btnEtiquetar && reporteTxt !== '' && prueba  ? 'auto':'none'\">ACEPTAR</label>\n            </div>\n            <div  *ngIf= \"!documentActivo\" class=\"btnAceptar\" style=\"right:0px;\" (click)=\"aceptar()\" [style.pointerEvents]= \"btnEtiquetar && reporteTxt !== '' && prueba  ? 'auto':'none'\" [style.background-color]= \"btnEtiquetar && reporteTxt !== '' && prueba  ? '#008895':'#D5DBDB'\" >\n              <label  [style.pointerEvents]= \"btnEtiquetar && reporteTxt !== '' && prueba  ? 'auto':'none'\">ETIQUETAR</label>\n            </div>\n            <div  *ngIf= \"documentActivo\" class=\"btnAceptar\" style=\"right:0px;\" (click)=\"aceptar()\" [style.pointerEvents]= \"btnEtiquetar && reporteTxt !== '' && documentActivo  ? 'auto':'none'\" [style.background-color]= \"btnEtiquetar && reporteTxt !== '' && documentActivo  ? '#008895':'#D5DBDB'\" >\n              <label  [style.pointerEvents]= \"btnEtiquetar && reporteTxt !== '' && documentActivo  ? 'auto':'none'\">ETIQUETAR</label>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n      <!-- fin contenido -->\n      <div class=\"contenido\" *ngIf=\"publicacion\">\n        <div class=\"divLote\" style=\"left:-19px;\">\n          <div class=\"checks\" style=\" height:40%; border-bottom:1px solid #D8D9DD; flex-direction:row; display:flex;\">\n            <div style=\"left:0px; width:50%; height:100%\">\n\n              <div style=\"display:flex;  height: 33%; flex-direction: row;\">\n                <pq-check-gris-palomita-verde  [check]=\"checkedCat\" id=\"checkbox1\"  style=\"padding-right: 10px;\" (event)=\"cambiaCheckPublicacion($event,'catalogo')\" > </pq-check-gris-palomita-verde>\n                <label [style.color]=\"label1\" class=\"labelCheck\">Catálogo: <span [style.color]= \"label1\"  class=\"info\">{{catalogo}}</span></label>\n              </div>\n\n              <div style=\"display:flex;   height: 33%;  flex-direction: row;\">\n                <pq-check-gris-palomita-verde  [check]=\"checkDesc\" id=\"checkbox2\"  style=\"padding-right: 10px;\" (event)=\"cambiaCheckPublicacion($event,'descripcion')\" > </pq-check-gris-palomita-verde>\n                <label [style.color]=\"label2\" class=\"labelCheck\">Descripción: <span [style.color]= \"label2\" class=\"info\">{{desc}}</span></label>\n              </div>\n\n              <div style=\"display:flex; height: 33%;    flex-direction: row;\">\n                <pq-check-gris-palomita-verde [check]=\"checkEdic\" id=\"checkbox3\" style=\"padding-right: 10px;\" (event)=\"cambiaCheckPublicacion($event,'edicion')\"></pq-check-gris-palomita-verde>\n                <label [style.color]=\"label3\" class=\"labelCheck\">Edición: <span [style.color]= \"label3\" class=\"info\">{{edicion}}</span></label>\n              </div>\n\n            </div>\n            <div style=\"right:0px; width:50%; height:100%\">\n              <div style=\"display:flex;  height: 33%;   flex-direction: row;\">\n                <pq-check-gris-palomita-verde [check]=\"checkIdi\" id=\"checkbox5\" style=\"padding-right: 10px;\" (event)=\"cambiaCheckPublicacion($event,'idioma')\"></pq-check-gris-palomita-verde>\n                <label [style.color]=\"label5\" class=\"labelCheck\">Idioma: <span [style.color]= \"label5\" class=\"info\">{{idioma}}</span></label>\n              </div>\n\n              <div style=\"display:flex; height: 33%;    flex-direction: row;\">\n                <pq-check-gris-palomita-verde  [check]=\"checkFis\" id=\"checkbox7\" style=\"padding-right: 10px;\" (event)=\"cambiaCheckPublicacion($event,'fisicamente')\"></pq-check-gris-palomita-verde>\n                <label [style.color]=\"label7\" class=\"labelCheck\">Físicamente conforme: <span [style.color]= \"label7\"  class=\"info\">{{fisico}}</span></label>\n              </div>\n\n            </div>\n\n\n          </div>\n          <div class=\"documentacion\" style=\" height:52.7%;\">\n            <div style=\"width:100%; height:100%; flex-direction:row; display:flex;\" #opacidad>\n              <div style=\"left:0px; width:50%; height:100%;\">\n                <label style=\"width: 95%;display: flex;border-bottom: 1px solid #424242; box-sizing: border-box; padding: 10px 0px 10px 0px;\" class=\"titulo\">Reporte de rechazo</label>\n                <!--<textarea type=\"text\" class=\"textArea\" [disabled]=\"publicacion\"> </textarea>-->\n                <div style=\"top: 20px; position: relative; width: 95%; height: 136px; display: flex; box-sizing: border-box;\" >\n                  <textarea type=\"text\" class=\"textAreaPub\"  #textAreaPub (blur)=\"rechazoTxtPub(textAreaPub.value)\" [(ngModel)]=\"reporteTxtPub\" [disabled]=\"!publicacion\" [style.display]= \"publicacion ? 'block' :'none'\" style=\"width: 100%;height: 100%\"> {{reporteTxtPub}}</textarea>\n                </div>\n              </div>\n              <div style=\"left:0px; width:50%; height:95%;\">\n                <label style=\"width: 100%;display: flex;border-bottom: 1px solid #424242; box-sizing: border-box; padding: 10px 0px 10px 0px;\" class=\"titulo\">\n                  Cargar fotos <span style=\"color:#B40404; font-weight:300; padding-left: 5px;\"> (Obligatoria)</span></label>\n                <div style=\" width:100%; box-sizing:border-box; padding-top:19px;\">\n                  <pq-file-upload [disabled]=\"publicacion\" [formato]=\"'.png'\" [doc]=\"'Arriba'\" (enviarDocumento)=\"recibeImg($event, 'Arriba')\"  class=\"fileInput\"></pq-file-upload>\n                </div>\n                <div style=\" width:100%; box-sizing:border-box; padding-top:32px;\" class=\"fileInput\">\n                  <pq-file-upload [disabled]=\"publicacion\" [formato]=\"'.png'\" [doc]=\"'Frente'\" (enviarDocumento)=\"recibeImg($event, 'Frente')\"></pq-file-upload>\n                </div>\n                <div style=\" width:100%; box-sizing:border-box; padding-top:35px\" class=\"fileInput\">\n                  <pq-file-upload [disabled]=\"publicacion\" [formato]=\"'.png'\" [doc]=\"'Abajo'\" (enviarDocumento)=\"recibeImg($event, 'Abajo')\"></pq-file-upload>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"footer\">\n            <div class=\"btnCancelar\" style=\"left:0px;\" (click)=\"cerrar()\"><label>CANCELAR</label></div>\n            <div class=\"btnAceptar\" style=\"right:0px;\" (click)=\"aceptarPublicacion()\" #etiquetar *ngIf =\"publicacion\"\n                 [style.pointerEvents]= \"btnEtiquetar && reporteTxtPub !== '' ? 'auto':'none'\" [style.background-color]= \"btnEtiquetar && reporteTxtPub !== ''? '#008895':'#D5DBDB'\">\n              <label>ETIQUETAR</label></div>\n            <div class=\"btnAceptar\" style=\"right:0px;\" (click)=\"aceptar()\" #etiquetar  *ngIf =\"!copiaPartidaPrioridad.pasosImprimirEtiqueta\"><label>ACEPTAR</label></div>\n\n          </div>\n        </div>\n\n\n      </div>\n      <pq-alerta *ngIf=\"mostrarAlerta\" [alertaTxt]=\"textoAlerta\" (confirmacion)=\"cerrarAlerta($event)\"></pq-alerta>\n    </div>\n    <!-- fin modal-content -->\n  </div>\n  <!-- fin modal -->\n</div>\n<div class=\"pop-inf\" #popInf   *ngIf =\"cambioI\" style= \"z-index:5; position:absolute\">\n  <!-- <pq-pop-informativo (cambioIndex)=\"cerrarPopInf($event)\" > </pq-pop-informativo> -->\n  <pq-pop-escanear-qr (cambioIndex)=\"cerrarPopInf($event)\" [bolsa]= \"tipoBolsa\" > </pq-pop-escanear-qr>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/shared/pop-up-editar-lote/pop-up-editar-lote.component.scss":
/***/ (function(module, exports) {

module.exports = ".btnLOTE {\n  width: 190px;\n  height: 35px;\n  font-family: 'Novecento';\n  font-weight: bold;\n  font-size: 21px;\n  color: #008894;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border: 1px solid #008894; }\n  .btnLOTE img {\n    width: 30px;\n    height: 30px; }\n  .modal {\n  z-index: 3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.7);\n  font-family: 'Roboto', sans-serif; }\n  .modal-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  margin: auto;\n  top: 0%;\n  background-color: white;\n  position: relative;\n  padding: 0;\n  outline: 0;\n  width: 1210px;\n  height: 680px;\n  color: black;\n  border: 1px solid #008894;\n  font-family: 'Roboto', sans-serif;\n  border-radius: 11px 11px 11px 11px; }\n  .header {\n  width: 100%;\n  height: 55px;\n  color: white;\n  font-family: 'Novecento';\n  font-weight: bold;\n  font-size: 26px;\n  background: #008895;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: 10px 10px 0px 0px; }\n  .contenido {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 30px;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .footer {\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .btnCancelar {\n  width: 329px;\n  height: 40px;\n  background: #008895;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer; }\n  .btnCancelar > label {\n    font-family: 'Novecento';\n    font-size: 21px;\n    font-weight: bold;\n    color: white;\n    height: 100%;\n    padding-top: 4.7%;\n    cursor: pointer; }\n  .btnAceptar {\n  width: 329px;\n  height: 40px;\n  background: #008895;\n  text-align: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: pointer; }\n  .btnAceptar > label {\n    font-family: 'Novecento';\n    font-size: 21px;\n    font-weight: bold;\n    color: white;\n    height: 100%;\n    padding-top: 4.7%;\n    cursor: pointer; }\n  .divLote {\n  width: 100%;\n  height: calc(100% - 70px);\n  padding-top: 30px; }\n  .titulo {\n  font-family: 'Roboto';\n  font-weight: bold;\n  font-size: 18px;\n  color: #424242;\n  text-align: left;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n  .datos {\n  width: 100%;\n  height: 250px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  top: 60px; }\n  .tituloDato {\n  font-family: 'Roboto';\n  font-weight: normal;\n  font-size: 18px;\n  color: #242424;\n  text-align: left; }\n  .inf {\n  font-family: 'Roboto';\n  font-weight: lighter;\n  font-size: 16px;\n  color: #424242;\n  text-align: left;\n  outline-style: none;\n  height: 27px;\n  width: 370px;\n  border-radius: 1px;\n  border: 1px solid #ECEEF0;\n  /*  -webkit-appearance: none; */\n  padding: 1px 5px; }\n  .arriba {\n  width: 100%;\n  padding-top: 15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n  .abajo {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding-top: 61px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .Seguridad {\n  width: 50%;\n  padding-left: 20%; }\n  .certificado {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .docto {\n  font-family: 'Roboto';\n  font-size: 14px;\n  font-weight: bold;\n  color: #424242;\n  padding-left: 10px; }\n  .formulario .checkbox {\n  position: absolute;\n  top: 50%;\n  font-family: 'Roboto';\n  font-weight: bold;\n  font-size: 21px;\n  color: #424242;\n  text-align: left;\n  left: 0;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n  /************PIAZA DESPACHABLE *****/\n  .textArea {\n  width: 100%;\n  height: 115px;\n  /*  -webkit-appearance: none; */\n  outline-style: none;\n  border: none;\n  font-family: 'Roboto';\n  font-weight: lighter;\n  font-size: 18px;\n  color: #424242;\n  font-style: italic;\n  resize: none; }\n  /****** CARGAR FOTO*****/\n  .cargar {\n  display: block; }\n  .archivos {\n  position: absolute;\n  top: 10px;\n  width: 500px; }\n  .cargarMas {\n  border: 1px solid #DFDEE1;\n  width: 543px;\n  position: absolute;\n  height: 30px;\n  top: 58px; }\n  .cargarMas label {\n  cursor: pointer;\n  margin: 0;\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  right: 0;\n  background: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2210.74361mm%22 height%3D%2210.58507mm%22 viewBox%3D%220 0 30.45433 30.00493%22%3E%3Ctitle%3ERecurso 139%3C%2Ftitle%3E%3Cg id%3D%22Capa_2%22 data-name%3D%22Capa 2%22%3E%3Cg id%3D%22Capa_1-2%22 data-name%3D%22Capa 1%22%3E%3Crect width%3D%2230.45433%22 height%3D%2230.00493%22 style%3D%22fill%3A%23068a95%22%2F%3E%3Cpath d%3D%22M22.21542%2C17.28994H17.495v4.96475H12.98719V17.28994H8.2389V13.058h4.72042V8.09039h4.504V13.058h4.75215Z%22 style%3D%22fill%3A%23fff%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\") no-repeat center; }\n  .labelCheck {\n  font-family: 'Roboto';\n  font-weight: bold;\n  font-size: 16px;\n  color: #008A98;\n  text-align: left; }\n  .labelCheck > span {\n    font-family: 'Roboto';\n    font-weight: 300;\n    font-size: 16px;\n    color: #008A98;\n    text-align: left; }\n  .enfocarProducto {\n  position: relative;\n  height: 51%; }\n  .enfocarProducto > video {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 15px 1px 8px;\n    width: 100%;\n    height: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 15px 0px 8px;\n    position: absolute; }\n  .enfocarProducto > label {\n    opacity: 0.3;\n    font-family: 'Novecento';\n    font-weight: bold;\n    font-size: 20px;\n    color: #008895;\n    text-align: center;\n    top: 50%;\n    position: absolute;\n    left: 29%; }\n  .tiposEnfoque {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding-top: 10px; }\n  .tiposEnfoque > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 33%;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .tiposEnfoque > div > label {\n      font-family: 'Roboto';\n      font-weight: 300;\n      font-size: 12px;\n      color: #424242;\n      text-align: center;\n      padding-bottom: 5px; }\n  .tiposEnfoque > div > div {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      position: relative;\n      width: 100%;\n      height: 127px;\n      border: 1px solid #D8D9DD;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box; }\n  .tiposEnfoque > div > div > canvas {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        width: 100%;\n        height: 100%;\n        position: absolute; }\n  .tiposEnfoque > div > div > p {\n        opacity: 0.5;\n        font-family: 'Roboto';\n        font-weight: bold;\n        font-size: 9px;\n        color: #008894;\n        text-align: center;\n        top: 40%;\n        position: absolute; }\n  .tiposEnfoque > div > img {\n      height: 29px;\n      width: 29px;\n      padding-top: 8px;\n      cursor: pointer; }\n  pn-combo-flecha-verde {\n  cursor: pointer; }\n  .botonera {\n  width: 100%;\n  height: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  font-family: 'Novecento';\n  font-weight: bold;\n  font-size: 21px;\n  color: #424242;\n  text-align: center;\n  border: #88868A; }\n  .botonera > div {\n    width: 50%;\n    height: 100%;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    cursor: pointer;\n    color: #FFFFFF; }\n  /deep/ .fileInput .content > img {\n  display: none; }\n  /************/\n"

/***/ }),

/***/ "./src/app/components/shared/pop-up-editar-lote/pop-up-editar-lote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpEditarLoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__ = __webpack_require__("./src/app/class/despachos/PartidaInspeccion.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_comun_DocumentoAdjunto_class__ = __webpack_require__("./src/app/class/comun/DocumentoAdjunto.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_inspeccion_inspeccion_service__ = __webpack_require__("./src/app/services/inspeccion/inspeccion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_despachos_parametrosInspeccion_class__ = __webpack_require__("./src/app/class/despachos/parametrosInspeccion.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_electron__ = __webpack_require__("./node_modules/ngx-electron/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var PopUpEditarLoteComponent = /** @class */ (function () {
    function PopUpEditarLoteComponent(_insp, _electronService, coreComponent, _commonService) {
        this._insp = _insp;
        this._electronService = _electronService;
        this.coreComponent = coreComponent;
        this._commonService = _commonService;
        this.enviarUbicacionNoDesp = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](); /// SE AGREGO PARA ENVIAR LA UBICACION DE NO DESPACHABLES
        this.activo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.actualizarPieza = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.enviarDocumento = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.partidaPrioridad = new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */]();
        this.archCertificado = new __WEBPACK_IMPORTED_MODULE_2__class_comun_DocumentoAdjunto_class__["a" /* DocumentoAdjunto */]();
        this.archSeguridad = new __WEBPACK_IMPORTED_MODULE_2__class_comun_DocumentoAdjunto_class__["a" /* DocumentoAdjunto */]();
        //  pza: PartidaInspeccion;
        this.mostrar = true;
        this.editar = false;
        this.vistaLote = true;
        this.noLote = "";
        this.foto = ["Frente", "Arriba", "Abajo"];
        this.presentacion = "100 mg";
        this.catalogo = "1612534";
        this.desc = "Sertraline Hydrochloride (100mg) USP";
        this.documentacion = "Hoja y/o Certificado";
        this.caducidad = "No Disponible";
        this.fisico = "Etiqueta legible, Sellada, No roto";
        this.checkDocto = true;
        this.checked = true;
        this.checkFis = true;
        this.checkedCat = true;
        this.checkLote = true;
        this.checkDesc = true;
        this.checkCad = true;
        this.checkPre = true;
        this.checkIdi = true;
        this.checkEdic = true;
        this.checkDocumentacion = true;
        this.prueba = false;
        this.checked2 = true;
        this.label1 = '#008A98';
        this.label2 = '#008A98';
        this.label3 = '#008A98';
        this.label4 = '#999999';
        this.label5 = '#008A98';
        this.label6 = '#008A98';
        this.label7 = '#008A98';
        this.contentDoc = true;
        this.displayImg = 'block';
        this.meses = [
            { nombre: 'Enero', key: 1 },
            { nombre: 'Febrero', key: 2 },
            { nombre: 'Marzo', key: 3 },
            { nombre: 'Abril', key: 4 },
            { nombre: 'Mayo', key: 5 },
            { nombre: 'Junio', key: 6 },
            { nombre: 'Julio', key: 7 },
            { nombre: 'Agosto', key: 8 },
            { nombre: 'Septiembre', key: 9 },
            { nombre: 'Octubre', key: 10 },
            { nombre: 'Noviembre', key: 11 },
            { nombre: 'Diciembre', key: 12 }
        ];
        this.anio = new Array();
        this.edicion = '2017';
        this.idioma = 'Español';
        this.btnEtiquetar = false;
        this.reporteTxt = "";
        this.paramPrueba = new __WEBPACK_IMPORTED_MODULE_2__class_comun_DocumentoAdjunto_class__["a" /* DocumentoAdjunto */]();
        this.aux = true;
        this.nuevoLote = "";
        this.copiaPartidaPrioridad = new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */]();
        this.files = [];
        this._maximizer = false;
        this._fullScreen = false;
    }
    PopUpEditarLoteComponent.prototype.ngOnInit = function () {
        //this.partidaPrioridad = Object.assign(new PartidaInspeccion, this.copiaPartidaPrioridad);
        this.copiaPartidaPrioridad = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */], this.partidaPrioridad);
        console.log("COPIA PP " + this.copiaPartidaPrioridad);
        this.pza.documento = this.copiaPartidaPrioridad.documento;
        this.idioma = this.partidaPrioridad.idioma;
        this.edicion = this.partidaPrioridad.edicion;
        //this.fotos();
        this.creacionListaCmbAno();
        this.lotes();
        if (this.conDocumentacion == true) {
            this.checkDocto = false;
            this.aux = false;
            this.checkDocto2 = true;
            this.label4 = '#008A98';
        }
        else {
            this.checkDocto = true;
            this.aux = true;
            this.checkDocto2 = false;
            this.label4 = '#999999';
        }
        console.log(this.noLote);
    };
    PopUpEditarLoteComponent.prototype.ngOnChanges = function (change) {
        console.log(change);
    };
    PopUpEditarLoteComponent.prototype.lotes = function () {
        if (this.nuevoCertificado !== undefined) {
            this.archCertificado = this.nuevoCertificado;
            this.btnAceptar = true;
        }
        else {
            this.archCertificado = this.pza.certificado;
            this.btnAceptar = false;
        }
        if (this.nuevoHojaSeguridad != undefined) {
            this.archSeguridad = this.nuevoHojaSeguridad;
        }
        else {
            this.archSeguridad = this.pza.hojaSeguridad;
        }
        if (!this.vistaPieza) {
            this.vistaLote = true;
            //this.pza = this.partidaPrioridad;
            var fechaHoy = new Date();
            var obj;
            obj = new Object;
            this.selectedMes = obj;
            obj.nombre = this.pza.mesCaduca;
            var obj;
            obj = new Object;
            this.selectedAnio = obj;
            obj.nombre = this.pza.anoCaduca;
            this.caducidad = this.pza.caducidad;
            if (this.pza.loteDistinto == false) {
                this.noLote = this.copiaPartidaPrioridad.lote;
            }
            // else {
            //   this.noLote = this.pza.lote;
            //
            // }
            if (this.checkDocto2 == true) {
                this.checkDocto = false;
                // if(this.nuevoCertificado != undefined){
                //   this.btnAceptar= true;
                // }
                // else
                // this.btnAceptar = false;
            }
            else
                this.checkDocto = true;
        }
        else if (this.vistaPieza == true) {
            this.piezas();
        }
    };
    PopUpEditarLoteComponent.prototype.piezas = function () {
        this.fotos();
        if (this.partidaPrioridad.tipo !== 'Publicaciones') {
            if (this.validaCaducidad() !== "") {
                this.mostrarAlerta = true;
            }
            else
                this.vistaLote = false;
        }
        this.presentacion = this.copiaPartidaPrioridad.tipoPresentacion;
        this.catalogo = this.pza.codigo;
        this.desc = this.pza.concepto;
        this.caducidad = this.pza.mesCaduca + ' ' + this.pza.anoCaduca;
        this.noLote = this.pza.lote;
        /*this.idioma = this.partidaPrioridad.idioma;
        this.edicion = this.partidaPrioridad.edicion;*/
        // if (this.caducidad != this.pza.caducidad) {
        //   this.pza.caducidad = this.caducidad;
        //   this.btnAceptar = true;
        // } else { this.btnAceptar = false; }
        // this.cambiaCheck(this.checkLote,'lote');
        // this.cambiaCheck(this.checkedCat,'catalogo');
        // this.cambiaCheck(this.checkCad,'caducidad');
        // this.cambiaCheck(this.checkPre,'presentacion');
        // this.cambiaCheck(this.checkDesc, 'descripcion');
        // this.cambiaCheck(this.checkFis, 'fisicamente');
        // this.cambiaCheck(this.checkDocumentacion,'documentacion');
        this.imageDataURL = undefined;
        this.imageDataURL2 = undefined;
        this.imageDataURL3 = undefined;
        this.btnEtiquetar = false;
        if (this.pza.catCorrecto == false || this.pza.descripcionCorrecta == false || this.pza.presentacionCorrecta == false
            || this.pza.loteCorrecto == false || this.pza.caducidadCorrecta == false
            || this.pza.fisicamenteCorrecto == false) {
            this.fotos();
            this.prueba = true;
            this.activarText = true;
        }
    };
    PopUpEditarLoteComponent.prototype.cerrar = function () {
        this.pop.nativeElement.style.display = 'none';
        this.mostrar = false;
        this.activo.emit(this.mostrar);
        this.pza = this.copiaPartidaPrioridad;
    };
    PopUpEditarLoteComponent.prototype.aceptar = function () {
        var codigo = this.pza.codigo;
        var lote = this.pza.lote;
        var idProducto = this.copiaPartidaPrioridad.idProducto;
        if (this.validaCaducidad() !== "") {
            this.mostrarAlerta = true;
        }
        else {
            if (this.pza.certificado.archivo != undefined && this.pza.catCorrecto != false) {
                if (this.pza.certificado.archivo[0].name != this.archCertificado.archivo[0].name) {
                    var atributos = new Array();
                    atributos.push(this.archCertificado[0], codigo + "-" + lote, idProducto, 'Certificado');
                    this.partidaPrioridad.listaArchivos.push(atributos);
                    this.pza.documento = codigo + "-" + lote;
                }
            }
            else {
                if (this.nuevoCertificado != undefined && this.pza.catCorrecto != false) {
                    var atributos = new Array();
                    atributos.push(this.archCertificado[0], codigo + "-" + lote, idProducto, 'Certificado');
                    this.partidaPrioridad.listaArchivos.push(atributos);
                    this.pza.documento = codigo + "-" + lote;
                }
            }
        }
        this.pza.esPublicacion = false;
        if (this.btnEtiquetar == true) {
            this.enviarImg();
            /* this.finalizar();*/ // Se comento para colocarlo dentro del servicio de las imagenes ya que si no , no se obtienen los nombres para las piezas
            /*this.tipoBolsa  = "No Despachable";
            if(this.copiaPartidaPrioridad.pasosImprimirEtiqueta === false)
              this.cambioI = true;
            else{
              this.mostrar = true;
              this.actualizarPieza.emit(this.pza);
              this.activo.emit(this.mostrar);
              this.pop.nativeElement.style.display = 'none';
            }*/
        }
        else {
            this.mostrar = true;
            this.actualizarPieza.emit(this.pza);
            this.activo.emit(this.mostrar);
            this.pop.nativeElement.style.display = 'none';
        }
    };
    //// METODO CREADO PARA QUE PERMITA ENVIAR LA UBICACION
    PopUpEditarLoteComponent.prototype.finalizarTerminarPop = function () {
        this.tipoBolsa = "No Despachable";
        if (this.copiaPartidaPrioridad.pasosImprimirEtiqueta === false) {
            this.cambioI = true;
        }
        else {
            this.mostrar = true;
            this.actualizarPieza.emit(this.pza);
            this.activo.emit(this.mostrar);
            this.pop.nativeElement.style.display = 'none';
        }
    };
    PopUpEditarLoteComponent.prototype.cambiaCheck = function (check, tipoCheck) {
        this.documentActivo = false;
        //this.checked2 = check;
        if (tipoCheck == 'noAplica') {
            this.checked2 = check;
            if (this.checked2 == false) {
                this.checkDocto2 = true;
                if (this.nuevoCertificado != undefined) {
                    this.btnAceptar = true;
                    console.log("btnAceptar " + this.btnAceptar);
                }
                else {
                    this.checkDocto = false;
                    this.aux = false;
                    this.btnAceptar = false;
                }
            }
            else {
                this.checkDocto2 = false;
                this.btnAceptar = true;
                this.aux = true;
            }
        }
        if (tipoCheck == 'catalogo') {
            this.checked2 = check;
            if (this.checked2 == false) {
                if (this.pza.catCorrecto == false && this.checked2 != false) {
                    this.label1 = '#008A98';
                    this.checkedCat = false;
                    this.pza.catCorrecto = true;
                }
                else {
                    this.checkedCat = false;
                    this.label1 = '#999999';
                    this.pza.catCorrecto = false;
                }
            }
            else {
                this.checkedCat = true;
                this.label1 = '#008A98';
                this.pza.catCorrecto = true;
            }
        }
        if (tipoCheck == 'descripcion') {
            this.checked2 = check;
            if (this.checked2 == false) {
                if (this.pza.descripcionCorrecta == false && this.checked2 != false) {
                    this.label2 = '#008A98';
                    this.checkDesc = false;
                    this.pza.descripcionCorrecta = true;
                }
                else {
                    this.checkDesc = false;
                    this.label2 = '#999999';
                    this.pza.descripcionCorrecta = false;
                }
            }
            else {
                this.checkDesc = true;
                this.label2 = '#008A98';
                this.pza.descripcionCorrecta = true;
            }
            // if (this.checked2 == false) {
            //   this.label2 = '#999999';
            //   this.pza.descripcionCorrecta = false;
            // } else {
            //   this.label2 = '#008A98';
            //   this.pza.descripcionCorrecta = true;
            // }
        }
        if (tipoCheck == 'presentacion') {
            this.checked2 = check;
            if (this.checked2 == false) {
                if (this.pza.presentacionCorrecta == false && this.checked2 != false) {
                    this.label3 = '#008A98';
                    this.checkPre = false;
                    this.pza.presentacionCorrecta = true;
                }
                else {
                    this.checkPre = false;
                    this.label3 = '#999999';
                    this.pza.presentacionCorrecta = false;
                }
            }
            else {
                this.checkPre = true;
                this.label3 = '#008A98';
                this.pza.presentacionCorrecta = true;
            }
            // if (this.checked2 == false) {
            //   this.label3 = '#999999';
            //   this.pza.presentacionCorrecta = false;
            // } else {
            //   this.label3 = '#008A98';
            //   this.pza.presentacionCorrecta = true;
            // }
        }
        if (tipoCheck == 'documentacion') {
            this.checked2 = check;
            if (this.checked2 == false) {
                if (this.pza.documentacionCorrecta == false && this.checked2 != false) {
                    this.label4 = '#008A98';
                    this.checkDocumentacion = false;
                    this.pza.documentacionCorrecta = true;
                }
                else {
                    this.checkDocumentacion = false;
                    this.label4 = '#999999';
                    this.pza.documentacionCorrecta = false;
                }
            }
            else {
                this.checkDocumentacion = true;
                this.label4 = '#008A98';
                this.pza.documentacionCorrecta = true;
            }
            // if (this.checked2 == true) {
            //   this.label4 = '#008A98';
            //   this.pza.documentacionCorrecta = true;
            //
            // } else {
            //   //this.checkDocto = true;
            //   this.label4 = '#999999';
            //   this.pza.documentacionCorrecta = false;
            //
            // }
        }
        if (tipoCheck == 'lote') {
            this.checked2 = check;
            if (this.checked2 == false) {
                if (this.pza.loteCorrecto == false && this.checked2 != false) {
                    this.label5 = '#008A98';
                    this.checkLote = false;
                    this.pza.loteCorrecto = true;
                }
                else {
                    this.checkLote = false;
                    this.label5 = '#999999';
                    this.pza.loteCorrecto = false;
                }
            }
            else {
                this.checkLote = true;
                this.label5 = '#008A98';
                this.pza.loteCorrecto = true;
            }
            // if (this.checked2 == false) {
            //   this.label5 = '#999999';
            //   this.pza.loteCorrecto = false;
            // } else {
            //   this.label5 = '#008A98';
            //   this.pza.loteCorrecto = true;
            // }
        }
        if (tipoCheck == 'caducidad') {
            this.checked2 = check;
            if (this.checked2 == false) {
                if (this.pza.caducidadCorrecta == false && this.checked2 != false) {
                    this.label6 = '#008A98';
                    this.checkCad = false;
                    this.pza.caducidadCorrecta = true;
                }
                else {
                    this.checkCad = false;
                    this.label6 = '#999999';
                    this.pza.caducidadCorrecta = false;
                }
            }
            else {
                this.checkCad = true;
                this.label6 = '#008A98';
                this.pza.caducidadCorrecta = true;
            }
            // if (this.checked2 == false) {
            //   this.label6 = '#999999';
            //   this.pza.caducidadCorrecta = false;
            // } else {
            //   this.label6 = '#008A98';
            //   this.pza.caducidadCorrecta = true;
            // }
        }
        if (tipoCheck == 'fisicamente') {
            this.checked2 = check;
            if (this.checked2 == false) {
                if (this.pza.fisicamenteCorrecto == false && this.checked2 != false) {
                    this.label7 = '#008A98';
                    this.checkFis = false;
                    this.pza.fisicamenteCorrecto = true;
                }
                else {
                    this.checkFis = false;
                    this.label7 = '#999999';
                    this.pza.fisicamenteCorrecto = false;
                }
            }
            else {
                this.checkFis = true;
                this.label7 = '#008A98';
                this.pza.fisicamenteCorrecto = true;
            }
            // if (this.checked2 == false) {
            //   this.label7 = '#999999';
            //   this.pza.fisicamenteCorrecto = false;
            //   this.pza.fisicamenCon = 'No';
            // } else {
            //   this.label7 = '#008A98';
            //   this.pza.fisicamenteCorrecto = true;
            // }
        }
        this.pza.esPublicacion = false;
        this.pza.despachable = false;
        this.pza.idCompra = this.copiaPartidaPrioridad.idPartidaCompra;
        this.pza.idPPedido = this.copiaPartidaPrioridad.idPPedido;
        if (this.pza.catCorrecto == false || this.pza.descripcionCorrecta == false || this.pza.presentacionCorrecta == false
            || this.pza.loteCorrecto == false || this.pza.caducidadCorrecta == false
            || this.pza.fisicamenteCorrecto == false) {
            this.fotos();
            this.pza.estadoFisico = "No Despachable";
            this.pza.rechazoXInsp = true;
            this.prueba = true;
            this.activarText = true;
            this.displayImg = 'block';
            if (this.copiaPartidaPrioridad.pasosImprimirEtiqueta == true)
                this.maximizer();
            console.log("estadoFisico", this.pza.estadoFisico);
            if (this.imageDataURL != undefined && this.imageDataURL2 != undefined && this.imageDataURL3 != undefined) {
                this.btnEtiquetar = true;
            }
            else
                this.btnEtiquetar = false;
            if (this.pza.documentacionCorrecta == false) {
                this.pza.rechazoXDoc = false;
            }
        }
        else if (this.pza.documentacionCorrecta == false) {
            this.documentActivo = true;
            this.btnEtiquetar = true;
            this.pza.estadoFisico = "No Despachable";
            this.pza.rechazoXInsp = true;
            // this.prueba = true;
            this.activarText = true;
            this.displayImg = 'block';
            if (this.copiaPartidaPrioridad.pasosImprimirEtiqueta == true)
                this.maximizer();
            console.log("estadoFisico", this.pza.estadoFisico);
            this.pza.rechazoXDoc = false;
        }
        else {
            this.pza.estadoFisico = "Despachable";
            this.prueba = false;
            this.activarText = false;
            this.displayImg = 'none';
            //  this.btnEtiquetar = false;
            console.log("estadoFisico", this.pza.estadoFisico);
        }
    };
    PopUpEditarLoteComponent.prototype.cambiaCheckPublicacion = function (check, tipoCheck) {
        var ckec = check;
        console.log('Check', check);
        if (tipoCheck == 'catalogo') {
            this.checked2 = check;
            if (this.checked2 == false) {
                if (this.pza.catCorrecto == false && this.checked2 != false) {
                    this.label1 = '#008A98';
                    this.checkedCat = false;
                    this.pza.catCorrecto = true;
                }
                else {
                    this.checkedCat = false;
                    this.label1 = '#999999';
                    this.pza.catCorrecto = false;
                }
            }
            else {
                this.checkedCat = true;
                this.label1 = '#008A98';
                this.pza.catCorrecto = true;
            }
        }
        if (tipoCheck == 'descripcion') {
            this.checked2 = check;
            if (this.checked2 == false) {
                if (this.pza.descripcionCorrecta == false && this.checked2 !== false) {
                    this.label2 = '#008A98';
                    this.checkDesc = false;
                    this.pza.descripcionCorrecta = true;
                }
                else {
                    this.checkDesc = false;
                    this.label2 = '#999999';
                    this.pza.descripcionCorrecta = false;
                }
            }
            else {
                this.checkDesc = true;
                this.label2 = '#008A98';
                this.pza.descripcionCorrecta = true;
            }
        }
        if (tipoCheck == 'fisicamente') {
            this.checked2 = check;
            if (this.checked2 == false) {
                if (this.pza.fisicamenteCorrecto == false && this.checked2 != false) {
                    this.label7 = '#008A98';
                    this.checkFis = false;
                    this.pza.fisicamenteCorrecto = true;
                }
                else {
                    this.checkFis = false;
                    this.label7 = '#999999';
                    this.pza.fisicamenteCorrecto = false;
                }
            }
            else {
                this.checkFis = true;
                this.label7 = '#008A98';
                this.pza.fisicamenteCorrecto = true;
            }
        }
        if (tipoCheck == 'edicion') {
            this.checked2 = check;
            if (this.checked2 == false) {
                if (this.pza.edicionCorrecta == false && this.checked2 != false) {
                    this.label3 = '#008A98';
                    this.checkEdic = false;
                    this.pza.edicionCorrecta = true;
                }
                else {
                    this.checkEdic = false;
                    this.label3 = '#999999';
                    this.pza.edicionCorrecta = false;
                }
            }
            else {
                this.checkEdic = true;
                this.label3 = '#008A98';
                this.pza.edicionCorrecta = true;
            }
        }
        if (tipoCheck == 'idioma') {
            this.checked2 = check;
            if (this.checked2 == false) {
                if (this.pza.idiomaCorecto == false && this.checked2 != false) {
                    this.label5 = '#008A98';
                    this.checkIdi = false;
                    this.pza.idiomaCorecto = true;
                }
                else {
                    this.checkIdi = false;
                    this.label5 = '#999999';
                    this.pza.idiomaCorecto = false;
                }
            }
            else {
                this.checkIdi = true;
                this.label5 = '#008A98';
                this.pza.idiomaCorecto = true;
            }
        }
        this.pza.esPublicacion = true;
        this.pza.despachable = false;
        this.pza.idCompra = this.copiaPartidaPrioridad.idPartidaCompra;
        this.pza.idPPedido = this.copiaPartidaPrioridad.idPPedido;
        if (this.pza.catCorrecto == false || this.pza.descripcionCorrecta == false
            || this.pza.fisicamenteCorrecto == false || this.pza.edicionCorrecta == false || this.pza.idiomaCorecto == false) {
            this.pza.estadoFisico = "No Despachable";
            this.pza.rechazoXInsp = true;
            // this.prueba = true;
            this.activarText = true;
            this.displayImg = 'block';
            if (this.reporteTxtPub !== undefined && this.reporteTxtPub !== '' && this.files[0].archivo !== undefined &&
                this.files[1].archivo !== undefined && this.files[2].archivo !== undefined) {
                this.btnEtiquetar = true;
            }
            else
                this.btnEtiquetar = false;
            if (this.pza.documentacionCorrecta == false) {
                this.pza.rechazoXDoc = false;
            }
        }
        else {
            this.btnEtiquetar = false;
        }
    };
    PopUpEditarLoteComponent.prototype.infoCombo = function (index, tipo) {
        if (tipo == 'mes') {
            this.pza.mesNum = index.key;
            this.pza.mesCaduca = index.nombre;
        }
        else if (tipo == 'anio') {
            this.pza.anoCaduca = index.nombre;
        }
        if ((this.pza.mesCaduca != this.copiaPartidaPrioridad.mesCaduca) || (this.pza.anoCaduca != this.copiaPartidaPrioridad.anoCaduca)) {
            if (this.validaCaducidad() !== "") {
                this.mostrarAlerta = true;
            }
            else {
                if (this.pza.lote === this.copiaPartidaPrioridad.lote && (this.conDocumentacion == undefined || this.conDocumentacion == false)) {
                    this.btnAceptar = true;
                }
                else
                    this.btnAceptar = false;
            }
        }
        else {
            this.btnAceptar = false;
        }
    };
    PopUpEditarLoteComponent.prototype.cambioLote = function (texto) {
        var obj;
        obj = new Object;
        obj.tipo = 'lote';
        obj.nombre = texto;
        this.nuevoLote = obj.nombre;
        //this.noLote = obj.nombre;
        this.pza.lote = obj.nombre;
        //this.checkDocto = false;
        this.btnAceptar = false;
        if (this.nuevoLote !== this.copiaPartidaPrioridad.lote)
            this.pza.loteDistinto = true;
        else
            this.pza.loteDistinto = false;
    };
    PopUpEditarLoteComponent.prototype.creacionListaCmbAno = function () {
        var list = new Array();
        var obj;
        var fecha = new Date();
        var anoAct;
        var limiteAnos = 0;
        var contLlave = 0;
        anoAct = fecha.getFullYear();
        limiteAnos = anoAct + 10;
        obj = new Object;
        obj.nombre = "Año";
        obj.key = 0;
        list.push(obj);
        contLlave = 1;
        for (var i = anoAct; i < limiteAnos; i++) {
            obj = new Object;
            obj.nombre = i + "";
            obj.key = contLlave;
            list.push(obj);
            contLlave = contLlave + 1;
        }
        this.anio = list;
    };
    PopUpEditarLoteComponent.prototype.cerrarAlerta = function () {
        this.mostrarAlerta = false;
    };
    PopUpEditarLoteComponent.prototype.validaCaducidad = function () {
        var alertaTxt = "";
        var fechaActual = new Date();
        if (this.pza.mesCaduca !== null && this.pza.mesCaduca !== undefined && this.pza.mesCaduca !== 'Mes' && this.pza.anoCaduca !== 'Año') {
            if (parseInt(this.pza.anoCaduca) == fechaActual.getFullYear()) {
                if (this.pza.mesNum == undefined) {
                    var mes = this.copiaPartidaPrioridad.mesNum;
                    if (mes < fechaActual.getMonth()) {
                        alertaTxt = this.textoAlerta = "La caducidad es incorrecta ";
                    }
                }
                else {
                    var mes = this.pza.mesNum - 1;
                    if (mes < fechaActual.getMonth()) {
                        alertaTxt = this.textoAlerta = "La caducidad es incorrecta";
                    }
                }
            }
        }
        else {
            alertaTxt = this.textoAlerta = "La caducidad es incorrecta";
        }
        return alertaTxt;
    };
    PopUpEditarLoteComponent.prototype.rechazoTxt = function (texto) {
        var obj;
        obj = new Object;
        obj.tipo = 'reporte';
        obj.nombre = texto;
        this.reporteTxt = obj.nombre;
        this.pza.reporte = this.reporteTxt;
        var index = this.partidaPrioridad.nombreImagenesRechazo.length;
        this.partidaPrioridad.comentariosImagen[index] = texto;
        console.log(this.reporteTxt);
    };
    PopUpEditarLoteComponent.prototype.rechazoTxtPub = function (texto) {
        var obj;
        obj = new Object;
        obj.tipo = 'reporte';
        obj.nombre = texto;
        this.reporteTxtPub = obj.nombre;
        this.pza.reporte = this.reporteTxt;
        console.log(this.reporteTxt);
        this.verificarBtn();
    };
    PopUpEditarLoteComponent.prototype.verificarBtn = function () {
        if (this.pza.catCorrecto == false || this.pza.descripcionCorrecta == false
            || this.pza.fisicamenteCorrecto == false || this.pza.edicionCorrecta == false || this.pza.idiomaCorecto == false) {
            if (this.reporteTxtPub !== undefined && this.reporteTxtPub !== '' && this.files[0].archivo !== undefined &&
                this.files[1].archivo !== undefined && this.files[2].archivo != undefined) {
                this.btnEtiquetar = true;
            }
            else {
                this.btnEtiquetar = false;
            }
        }
        else {
            this.btnEtiquetar = false;
        }
    };
    PopUpEditarLoteComponent.prototype.enviarDocumentacion = function (archivo, tipo) {
        var base64;
        base64 = new Object;
        //  this.archivoAdjunto.archivo = archivo;
        if (tipo === 'Certificado') {
            this.nuevoCertificado = new __WEBPACK_IMPORTED_MODULE_2__class_comun_DocumentoAdjunto_class__["a" /* DocumentoAdjunto */]();
            if (this.pza.certificado.archivo != undefined) {
                if (archivo[0].name != this.pza.certificado.archivo[0].name)
                    this.nuevoCertificado = archivo;
                this.archCertificado = this.nuevoCertificado;
                //this.archCertificado.nombre = "Certificado.pdf";
                this.btnAceptar = true;
                this.aux = true;
            }
            else {
                this.aux = true;
                this.btnAceptar = true;
                this.nuevoCertificado = archivo;
                this.archCertificado = this.nuevoCertificado;
            }
        }
        else {
            //  this.btnAceptar = false;
            if (tipo === 'HojaSeguridad') {
                this.nuevoHojaSeguridad = new __WEBPACK_IMPORTED_MODULE_2__class_comun_DocumentoAdjunto_class__["a" /* DocumentoAdjunto */]();
                if (this.pza.hojaSeguridad.archivo != undefined) {
                    if (archivo[0].name != this.pza.hojaSeguridad.archivo[0].name) {
                        this.nuevoHojaSeguridad = archivo;
                        this.archSeguridad = this.nuevoHojaSeguridad;
                        //this.nuevoHojaSeguridad.nombre = "HojaSeguridad.pdf";
                    }
                    else {
                        this.archSeguridad = this.pza.hojaSeguridad;
                    }
                }
                else {
                    this.nuevoHojaSeguridad = archivo;
                    this.archSeguridad = this.nuevoHojaSeguridad;
                }
            }
            //else
            //  this.btnAceptar = false;
        }
        // var obj: any;
        // obj = new Object;
        // obj.doc = this.archivoAdjunto;
        // obj.tipo = tipo;
        //  this.enviarDocumento.emit(obj);
    };
    PopUpEditarLoteComponent.prototype.fotos = function () {
        // navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);
        navigator.getUserMedia(
        //constraints
        { video: true, audio: false }, function (stream) {
            var video = document.getElementsByTagName('video')[0];
            video.src = window.URL.createObjectURL(stream);
            video.muted = true;
            video.play();
        }, function (error) {
            console.log(error);
        });
    };
    PopUpEditarLoteComponent.prototype.takeSnapshot = function (tipo) {
        var video = document.getElementById("player");
        if (tipo == 'Frente') {
            var canvasFrente = document.getElementById("canvasFrente");
            var image = document.getElementById("output");
            var width = video.videoWidth;
            var height = video.videoHeight;
            var context = canvasFrente.getContext('2d');
            canvasFrente.width = width;
            canvasFrente.height = height;
            context.drawImage(video, 0, 0, width, height);
            this.imageDataURL = canvasFrente.toDataURL('image/png');
            image.setAttribute('src', this.imageDataURL);
            this.folioImgFrente = "frente";
            //  this.pza.imagenFrente = this.imageDataURL;
            var array = this.imageDataURL.split(",");
            this.imageDataURL = array[1];
            //  console.log(this.imageDataURL);
            //  resolve(this.imageDataURL);
        }
        else if (tipo == 'Arriba') {
            var canvasArriba = document.getElementById("canvasArriba");
            var image2 = document.getElementById("output2");
            var width = video.videoWidth;
            var height = video.videoHeight;
            var context = canvasArriba.getContext('2d');
            canvasArriba.width = width;
            canvasArriba.height = height;
            context.drawImage(video, 0, 0, width, height);
            this.imageDataURL2 = canvasArriba.toDataURL('image/png');
            image2.setAttribute('src', this.imageDataURL2);
            this.folioImgArriba = "arriba";
            //  this.pza.imagenArriba = this.imageDataURL2;
            var array = this.imageDataURL2.split(",");
            this.imageDataURL2 = array[1];
        }
        else if (tipo == 'Abajo') {
            var canvas = document.getElementById("canvasAbajo");
            var image3 = document.getElementById("output3");
            var width = video.videoWidth;
            var height = video.videoHeight;
            var context = canvas.getContext('2d');
            canvas.width = width;
            canvas.height = height;
            context.drawImage(video, 0, 0, width, height);
            this.imageDataURL3 = canvas.toDataURL('image/png;base64,+data._body');
            image3.setAttribute('src', this.imageDataURL3);
            this.folioImgAbajo = "abajo";
            //  this.pza.imagenAbajo = this.imageDataURL3;
            var array = this.imageDataURL3.split(",");
            this.imageDataURL3 = array[1];
        }
        if (this.imageDataURL != undefined && this.imageDataURL2 != undefined && this.imageDataURL3 != undefined) {
            this.btnEtiquetar = true;
        }
        else
            this.btnEtiquetar = false;
    };
    PopUpEditarLoteComponent.prototype.finalizar = function () {
        this.param = new __WEBPACK_IMPORTED_MODULE_4__class_despachos_parametrosInspeccion_class__["a" /* parametrosInspeccion */]();
        //  this.param.listaPzas = Object.assign([], this.pza);
        this.param.idCompra = this.partidaPrioridad.idPartidaCompra;
        this.param.idPPedido = this.partidaPrioridad.idPPedido;
        this.param.usuario = __WEBPACK_IMPORTED_MODULE_5__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
        this.param.estado = "No Despachable";
        if (this.partidaPrioridad.tipo.toLowerCase() !== 'publicaciones') {
            if (this.partidaPrioridad.manejo == "Ambiente") {
                this.param.numAnaquel = 8;
                this.param.letraAnaquel = 'A';
                this.param.ubicacion = 'Cuarentena (Anaquel ' + this.param.numAnaquel + "-" + this.param.letraAnaquel + ")";
                this.ubicacionImprimir = 'Cuarentena (Anaquel 8A)'; // Se agrego para obtener la ubicacion
                this.pza.ubicacion = 'Anaquel_8A';
                this.imprimirEtiqueta(this.param); /// Se agrego para obtener la ubicacion
                this.finalizarTerminarPop(); // SE LLAMA AL METODO QUE SE CREO NUEVO
            }
            else if (this.partidaPrioridad.manejo == "Congelación" || this.partidaPrioridad.manejo == "Congelacion") {
                this.param.numAnaquel = 0;
                this.param.letraAnaquel = "C";
                this.param.ubicacion = "Cuarentena (Congelador " + this.param.letraAnaquel + ")";
                this.obtenerUbicacion(false); // Se agrego para obtener la ubicacion
            }
            else if (this.partidaPrioridad.manejo == "Refrigeración" || this.partidaPrioridad.manejo == "Refrigeracion") {
                this.param.numAnaquel = 0;
                this.param.letraAnaquel = "G";
                this.param.ubicacion = "Cuarentena (Refrigerador " + this.param.letraAnaquel + ")";
                this.obtenerUbicacion(false); // Se agrego para obtener la ubicacion
            }
        }
        else {
            this.partidaPrioridad.manejo = 'Ambiente';
            this.obtenerUbicacion(false); // Se agrego para obtener la ubicacion
        }
        // else if (this.esPublicacion) {
        //   this.param.ubicacion = "Ambiente";
        //   this.param.numAnaquel = obj.numAnaquel;
        //   this.param.letraAnaquel = obj.letraAnaquel;
        // }
        //
        // this.param.fechaInspeccion = "12Jul2018";
        // this.param.numRechazos = this.partidaPrioridad.contIncidencia;
        // this.param.finalizarPendiente = true;
        // this.param.fechaInicio = new Date();
        //
        /*  if(this.copiaPartidaPrioridad.pasosImprimirEtiqueta === true)
            this.imprimirEtiqueta(this.param);*/
    };
    //////////////// Se obtiene la ubicación para imprimir/////////
    PopUpEditarLoteComponent.prototype.obtenerUbicacion = function (tipo) {
        var _this = this;
        var data;
        data = new Object;
        data = {
            tarima: tipo,
            manejo: this.partidaPrioridad.manejo,
            idPPedido: this.partidaPrioridad.idPPedido,
            tipoProducto: this.partidaPrioridad.tipo,
            piezas: this.partidaPrioridad.contDespachable,
            idProducto: this.partidaPrioridad.idProducto,
            proveedor: this.partidaPrioridad.fabrica
        };
        this._insp.obtenerUbicacionInspeccion(data).subscribe(function (data) {
            console.log("Ubicacion ", data.current);
            var string = data.current;
            if (_this.partidaPrioridad.cantidadCompra === 1) {
                _this.partidaPrioridad.ubicacion = data.current;
            }
            _this.pza.ubicacion = data.current; /// Se agrego para obtener la ubicacion de cada etiqueta
            // this.actualizarPieza.emit(this.pza);
            var parts = string.split("_");
            var respuesta = parts[0];
            var letra = parts[1];
            var ubicacionAux;
            var idUbicacion;
            ubicacionAux = respuesta + " " + "Cuarentena (" + letra + ')';
            _this.ubicacionImprimir = ubicacionAux;
            if (_this.partidaPrioridad.tipo.toLowerCase() !== 'publicaciones') {
                _this.imprimirEtiqueta(_this.param);
            }
            else {
                _this.ubicacionImprimir = respuesta + '(' + letra + ')';
                _this.imprimirEtiquetaPubli(_this.param);
            }
            _this.finalizarTerminarPop(); // SE LLAMA AL METODO QUE SE CREO NUEVO
        }, function (error) {
        });
    };
    ///////////////////////////////////////////////////////////////////
    PopUpEditarLoteComponent.prototype.transform = function (dateToFormat) {
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
                date = now.getDate() + '/Ene/' + now.getFullYear() + " " + hour;
                break;
            case 1:
                date = now.getDate() + '/Feb/' + now.getFullYear() + " " + hour;
                break;
            case 2:
                date = now.getDate() + '/Mar/' + now.getFullYear() + " " + hour;
                break;
            case 3:
                date = now.getDate() + '/Abr/' + now.getFullYear() + " " + hour;
                break;
            case 4:
                date = now.getDate() + '/May/' + now.getFullYear() + " " + hour;
                break;
            case 5:
                date = now.getDate() + '/Jun/' + now.getFullYear() + " " + hour;
                break;
            case 6:
                date = now.getDate() + '/Jul/' + now.getFullYear() + " " + hour;
                break;
            case 7:
                date = now.getDate() + '/Ago/' + now.getFullYear() + " " + hour;
                break;
            case 8:
                date = now.getDate() + '/Sep/' + now.getFullYear() + " " + hour;
                break;
            case 9:
                date = now.getDate() + '/Oct/' + now.getFullYear() + " " + hour;
                break;
            case 10:
                date = now.getDate() + '/Nov/' + now.getFullYear() + " " + hour;
                break;
            case 11:
                date = now.getDate() + '/Dic/' + now.getFullYear() + " " + hour;
                break;
            default:
                break;
        }
        return date;
    };
    PopUpEditarLoteComponent.prototype.enviarImg = function () {
        var _this = this;
        var data;
        data = new Object;
        data = {
            frente: this.imageDataURL,
            arriba: this.imageDataURL2,
            abajo: this.imageDataURL3,
            concepto: "Folio rechazo"
        };
        this.coreComponent.openModal(0);
        this._insp.nombreArchivo(data).subscribe(function (data) {
            console.log(data);
            var string = data.current;
            var folios = string.split("|");
            var frente = folios[0]; // 123
            var arriba = folios[1]; // 654321
            var abajo = folios[2];
            console.log(folios + "***f1:" + frente + " " + "f2: " + arriba + " " + "f3: " + abajo);
            _this.pza.fFrente = frente;
            _this.pza.fArriba = arriba;
            _this.pza.fAbajo = abajo;
            console.log(_this.pza);
            var index = _this.partidaPrioridad.nombreImagenesRechazo.length;
            _this.partidaPrioridad.nombreImagenesRechazo[index] = data.current;
            //  this.actualizarPieza.emit(this.pza);
            _this.finalizar();
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
            console.log(error);
        });
        // let string: any = "FR-081618-0811|FR-081618-0812|FR-081618-0813";
        // let parts: any[] = string.split("|");
        // let part1 = parts[0];
        // let part2 = parts[1];
        // let part3 = parts[2];
        // console.log(parts + "f1: " + part1 + "f2: " + part2 + "f3: " + part3);
        // this.pza.fFrente = "FR-081618-0811";
        // this.pza.fArriba = "FR-081618-0812";
        // this.pza.fAbajo = "FR-081618-0813";
        // console.log(this.pza);
    };
    PopUpEditarLoteComponent.prototype.cerrarPopInf = function (dato) {
        console.log(dato);
        this.partidaPrioridad.qrBolsaIncidencia = dato.codigo;
        this.popInf.nativeElement.style.display = 'none';
        //  this.comunService.videoZindex(false);
        if (dato.cambio == true) {
            console.log(this.pza);
            this.actualizarPieza.emit(this.pza);
            this.activo.emit(this.mostrar);
            this.pop.nativeElement.style.display = 'none';
        }
    };
    PopUpEditarLoteComponent.prototype.imprimirEtiqueta = function (datos) {
        return __awaiter(this, void 0, void 0, function () {
            var fee, tipoPartida, fechaSec, BrowserWindow, newWin, fecha, barcode, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tipoPartida = '';
                        if (this.partidaPrioridad.fechaEstimadaEntrega !== null && this.partidaPrioridad.fechaEstimadaEntrega !== undefined) {
                            fechaSec = this.partidaPrioridad.fechaEstimadaEntrega.toString().split('-');
                            fee = fechaSec[1] + fechaSec[2] + fechaSec[0].substring(2, 4);
                        }
                        else {
                            fee = '';
                        }
                        if (this.partidaPrioridad.aceptaParciales === 1) {
                            tipoPartida = '(Pa';
                        }
                        else {
                            tipoPartida = '(NPa';
                        }
                        if (this.partidaPrioridad.tipoPartida === 'Programado') {
                            tipoPartida += '/Pr)';
                        }
                        else {
                            tipoPartida += ')';
                        }
                        this.rutaManejo = 'http://ryndem.mx/DESARROLLO/Imagenes/imagenesEtiqueta/ambiente.svg';
                        this.enviarUbicacionNoDesp.emit(this.ubicacionImprimir); /// SE AGREGO PARA ENVIAR LA UBICACION DE LAS NO DESPACHABLES
                        BrowserWindow = electron.remote.BrowserWindow;
                        newWin = new BrowserWindow({ width: 288, height: 216 });
                        fecha = this.transform(new Date());
                        return [4 /*yield*/, this.getBarcode(this.partidaPrioridad.folioEtiqueta)];
                    case 1:
                        barcode = _a.sent();
                        html = [
                            "<html><head>",
                            "<style>",
                            "@media print { @page {size: 10cm 9cm;padding:0;page-break-inside: avoid;page-break-before: avoid;page-break-after: avoid;}}",
                            ".contenido {position: absolute;max-width: 9.5cm; page-break-inside: avoid; page-break-before: avoid;page-break-after: avoid;} .bcode{font-family:'Novecentowide'; font-size:12px;} img{page-break-inside: avoid; page-break-before: avoid;page-break-after: avoid;}",
                            "</style></head>",
                            "<body> <div class='contenido'>",
                            "<img style='width: 8cm; height:1.5cm; margin-top:-20px;' ",
                            "src='" + barcode + "'>",
                            "</div>",
                            "<div style='padding-top: 37px;' >",
                            "<div style='font-size: 18px; min-height: 23px; align-self: center; text-align: center;'>" + this.partidaPrioridad.folioEtiqueta + "</div>",
                            "<div style='flex-direction: row; display: flex; padding-top: 15px;' >",
                            "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px '> Cliente:</div>",
                            "<div  style='font-size: 14px; height:23px;'> " + this.partidaPrioridad.nombreCliente + "</div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex;' >",
                            "<div  style='font-size: 14px; height:23px;width: 432px;  font-weight: bold; text-align: center;'> " + tipoPartida + ' ' + fee + "</div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex;' >",
                            "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Estatus:</div>",
                            "<div  style='font-size: 14px; height:23px;  font-weight: bold; '> " + datos.estado + "</div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex;' >",
                            "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Inspecciono: </div>",
                            "<div  style='font-size: 14px; height:23px; '> " + datos.usuario + "</div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex;' >",
                            "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Tipo:</div>",
                            "<div  style='font-size: 14px; height:23px; '> " + this.partidaPrioridad.tipo + "</div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex;' >",
                            "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Control: </div>",
                            "<div  style='font-size: 14px; height:23px; '>" + this.partidaPrioridad.control + "</div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex;' >",
                            "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Ubicación:</div>",
                            "<div  style='font-size: 14px; min-height:23px; width:185px;'> " + this.ubicacionImprimir + "</div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex;' >",
                            "<div  style='font-size: 14px; width:140px; text-align:right; padding-right: 5px'> Inspeccionado:</div>",
                            "<div  style='font-size: 14px; '> " + fecha + "</div>",
                            "</div>",
                            "</div>",
                            "</body></html>"
                        ].join("");
                        newWin.loadURL("data:text/html;charset=utf-8," + encodeURI(html));
                        newWin.hide();
                        // newWin.webContents.openDevTools()
                        newWin.webContents.on('did-finish-load', function () {
                            console.log(newWin.webContents.getPrinters());
                            var prints = newWin.webContents.getPrinters();
                            var impresora = "";
                            for (var _i = 0, prints_1 = prints; _i < prints_1.length; _i++) {
                                var print_1 = prints_1[_i];
                                if (print_1.description == "ZebraTicket") {
                                    impresora = print_1.name;
                                }
                            }
                            newWin.webContents.print({ silent: false, printBackground: false, deviceName: impresora }, function (success) {
                                newWin.close();
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PopUpEditarLoteComponent.prototype.maximizer = function () {
        this.exitFullScreen();
        this._maximizer = !this._maximizer;
        if (this._maximizer) {
            this._electronService.remote.getCurrentWindow().maximize();
        }
        else {
            this._electronService.remote.getCurrentWindow().setSize(1368, 770);
        }
    };
    PopUpEditarLoteComponent.prototype.exitFullScreen = function () {
        if (this._electronService.remote.getCurrentWindow().isFullScreen()) {
            this._electronService.remote.getCurrentWindow().setFullScreen(false);
            this._maximizer = false;
        }
    };
    PopUpEditarLoteComponent.prototype.recibeImg = function (archivo, tipo) {
        if (tipo === 'Frente') {
            this.files[0] = { tipo: 'Frente', archivo: archivo[0] };
        }
        else if (tipo === 'Arriba') {
            this.files[1] = { tipo: 'Arriba', archivo: archivo[0] };
        }
        else if (tipo === 'Abajo') {
            this.files[2] = { tipo: 'Abajo', archivo: archivo[0] };
        }
        console.log('File--->', this.files);
        this.verificarBtn();
    };
    PopUpEditarLoteComponent.prototype.aceptarPublicacion = function () {
        this.pza.esPublicacion = true;
        if (this.btnEtiquetar == true) {
            this.guardarImg();
            this.finalizar();
        }
        else {
            this.mostrar = true;
            this.actualizarPieza.emit(this.pza);
            this.activo.emit(this.mostrar);
            this.pop.nativeElement.style.display = 'none';
        }
    };
    PopUpEditarLoteComponent.prototype.guardarImg = function () {
        var _this = this;
        this._insp.uploadImage(this.files, 'Folio rechazo').subscribe(function (data) {
            _this.resultado = data.current;
            var index = _this.partidaPrioridad.nombreImagenesRechazo.length;
            _this.partidaPrioridad.nombreImagenesRechazo[index] = _this.resultado; // Se guardan el nombre de las imagenes de rechazo
        });
    };
    PopUpEditarLoteComponent.prototype.imprimirEtiquetaPubli = function (datos) {
        return __awaiter(this, void 0, void 0, function () {
            var BrowserWindow, newWin, fecha, barcode, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.enviarUbicacionNoDesp.emit(this.ubicacionImprimir); /// SE AGREGO PARA ENVIAR LA UBICACION DE LAS NO DESPACHABLES
                        BrowserWindow = electron.remote.BrowserWindow;
                        newWin = new BrowserWindow({ width: 288, height: 216 });
                        fecha = this.transform(new Date());
                        return [4 /*yield*/, this.getBarcode(this.partidaPrioridad.folioEtiqueta)];
                    case 1:
                        barcode = _a.sent();
                        html = [
                            "<html><head>",
                            "<style>",
                            "@media print { @page {size: 10cm 9cm;padding:0;page-break-inside: avoid;page-break-before: avoid;page-break-after: avoid;}}",
                            ".contenido {position: absolute;max-width: 9.5cm; page-break-inside: avoid; page-break-before: avoid;page-break-after: avoid;} .bcode{font-family:'Novecentowide'; font-size:12px;} img{page-break-inside: avoid; page-break-before: avoid;page-break-after: avoid;}",
                            "</style></head>",
                            "<body> <div class='contenido'>",
                            "<img style='width: 8cm; height:1.5cm; margin-top:-20px;' ",
                            "src='" + barcode + "'>",
                            "</div>",
                            "<div style='padding-top: 37px;' >",
                            "<div style='font-size: 18px; min-height: 23px; align-self: center; text-align: center;'>" + this.partidaPrioridad.folioEtiqueta + "</div>",
                            "<div style='flex-direction: row; display: flex; padding-top: 15px;' >",
                            "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px '> Cliente:</div>",
                            "<div  style='font-size: 14px; height:23px;'> " + this.partidaPrioridad.nombreCliente + "</div>",
                            // "<div  style='font-size: 12px; height:30px;'> " + " PROCTER AND " + "</div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex;' >",
                            "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Estatus:</div>",
                            "<div  style='font-size: 14px; height:23px;  font-weight: bold; '> " + datos.estado + "</div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex; ' >",
                            "<div  style='font-size: 14px; height:23px;width:140px; text-align:right; padding-right: 5px'> Manejo:</div>",
                            "<div  style='font-size: 14px; height:23px;' font-weight: bold; >  NA </div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex;' >",
                            "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Inspecciono: </div>",
                            "<div  style='font-size: 14px; height:23px; '> " + datos.usuario + "</div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex;' >",
                            "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Tipo:</div>",
                            "<div  style='font-size: 14px; height:23px; '> " + this.partidaPrioridad.tipo + "</div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex;' >",
                            "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Control: </div>",
                            "<div  style='font-size: 14px; height:23px; '>" + this.partidaPrioridad.control + "</div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex;' >",
                            "<div  style='font-size: 14px; height:23px; width:140px; text-align:right; padding-right: 5px'> Ubicación:</div>",
                            "<div  style='font-size: 14px; min-height:23px; width:185px;'> " + this.ubicacionImprimir + "</div>",
                            "</div>",
                            "<div style='flex-direction: row; display: flex;' >",
                            "<div  style='font-size: 14px; width:140px; text-align:right; padding-right: 5px'> Inspeccionado:</div>",
                            "<div  style='font-size: 14px; '> " + fecha + "</div>",
                            "</div>",
                            "</div>",
                            "</body></html>"
                        ].join("");
                        newWin.loadURL("data:text/html;charset=utf-8," + encodeURI(html));
                        newWin.hide();
                        // newWin.webContents.openDevTools()
                        newWin.webContents.on('did-finish-load', function () {
                            console.log(newWin.webContents.getPrinters());
                            var prints = newWin.webContents.getPrinters();
                            var impresora = "";
                            for (var _i = 0, prints_2 = prints; _i < prints_2.length; _i++) {
                                var print_2 = prints_2[_i];
                                if (print_2.description == "ZebraTicket") {
                                    impresora = print_2.name;
                                }
                            }
                            newWin.webContents.print({ silent: false, printBackground: false, deviceName: impresora }, function (success) {
                                newWin.close();
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PopUpEditarLoteComponent.prototype.getBarcode = function (code) {
        var _this = this;
        return new Promise(function (resolve) {
            var parameter = new __WEBPACK_IMPORTED_MODULE_9__class_Parametros_class__["a" /* Parametros */]();
            parameter.code = code;
            _this._commonService.getBarcode(parameter)
                .subscribe(function (data) {
                resolve(data.current);
            }, function (error) {
                resolve("https://barcode.tec-it.com/barcode.ashx?data=" + code + "&code=Code128&multiplebarcodes=false&translate-esc=false&unit=Fit&dpi=96&imagetype=Gif&rotation=0&color=%23000000&bgcolor=%23ffffff&qunit=Mm&quiet=0");
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpEditarLoteComponent.prototype, "enviarUbicacionNoDesp", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpEditarLoteComponent.prototype, "activo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpEditarLoteComponent.prototype, "actualizarPieza", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PopUpEditarLoteComponent.prototype, "enviarDocumento", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */])
    ], PopUpEditarLoteComponent.prototype, "partidaPrioridad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__class_comun_DocumentoAdjunto_class__["a" /* DocumentoAdjunto */])
    ], PopUpEditarLoteComponent.prototype, "archCertificado", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__class_comun_DocumentoAdjunto_class__["a" /* DocumentoAdjunto */])
    ], PopUpEditarLoteComponent.prototype, "archSeguridad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__class_despachos_PartidaInspeccion_class__["a" /* PartidaInspeccion */])
    ], PopUpEditarLoteComponent.prototype, "pza", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopUpEditarLoteComponent.prototype, "publicacion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopUpEditarLoteComponent.prototype, "conDocumentacion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PopUpEditarLoteComponent.prototype, "vistaPieza", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("pop"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PopUpEditarLoteComponent.prototype, "pop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('popInf'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], PopUpEditarLoteComponent.prototype, "popInf", void 0);
    PopUpEditarLoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-pop-up-editar-lote',
            template: __webpack_require__("./src/app/components/shared/pop-up-editar-lote/pop-up-editar-lote.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/pop-up-editar-lote/pop-up-editar-lote.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_inspeccion_inspeccion_service__["a" /* InspeccionService */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_electron__["a" /* ElectronService */],
            __WEBPACK_IMPORTED_MODULE_8__core_container_core_container_component__["a" /* CoreContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__services_comun_comun_service__["a" /* ComunService */]])
    ], PopUpEditarLoteComponent);
    return PopUpEditarLoteComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/pop-up-grabacion-video/pop-up-grabacion-video.component.html":
/***/ (function(module, exports) {

module.exports = " <button type=\"button\" class=\"btnControlPrincipal\" onclick=\"document.getElementById('modalInicarGrabacion').style.display='block'\">GRABAR</button>\n <!-- <button type=\"button\" class=\"btnControlPrincipalVerde\" onclick=\"document.getElementById('id02').style.display='block'\">(||)</button>\n <button type=\"button\" class=\"btnControlPrincipal\" onclick=\"document.getElementById('id03').style.display='block'\">[-]</button> -->\n\n<div class=\"w3-container\">\n<!--DIV INICIAL-->\n <div id=\"modalInicarGrabacion\" class=\"modal\">\n  <div class=\"modal-content\">\n    <header class=\"header\">\n      <img class=\"barra\" src='./assets/Images/barra_lightbox.svg'/>\n    </header>\n\n    <div class=\"contenido\">\n      <div class=\"titulo\">\n        <label >Nuevo lote de {{tipo}}</label>\n      </div>\n      <hr>\n      <div class=\"datos\">\n        <div class=\"Inspector\">\n          <p class=\"campo\">{{tipoUsr}}:</p>\n          <p class=\"dato\">{{usuario}}</p>\n        </div>\n        <div class=\"Fecha\">\n          <p class=\"campo\">Fecha/Hora: </p>\n          <p class=\"dato\">{{fechaHora}}</p>\n        </div>\n      </div>\n      <hr>\n    </div>\n\n    <footer class=\"footer\">\n      <button type=\"button\" class=\"btnVolver\"\n        onclick=\"document.getElementById('modalInicarGrabacion').style.display='none'\">VOLVER</button>\n      <button type=\"button\" class=\"btnGrabar\">INICIAR {{tipo | uppercase }}</button>\n    </footer>\n  </div>\n</div>\n<!--FIN DIV INICIO-->\n\n<!--div detener video-->\n<div id=\"id02\" class=\"modal\">\n  <div class=\"modal-content\">\n    <header class=\"header\">\n      <img class=\"barra\" src='./assets/Images/barra_lightbox.svg'/>\n    </header>\n\n    <div class=\"contenido\">\n      <div class=\"datos\">\n        <div class=\"Inspector\">\n          <p class=\"campo\">{{tipoUsr}}:</p>\n          <p class=\"dato\">{{usuario}}</p>\n        </div>\n        <div class=\"Fecha\">\n          <p class=\"campo\">Fecha/Hora: </p>\n          <p class=\"dato\">{{fechaHora}}</p>\n        </div>\n      </div>\n      <hr>\n      <div class=\"txtControlVideo\">\n        <label>¿Estás seguro que deseas terminar tu Lote de {{tipo}} No.{{folio}}?</label>\n      </div>\n    </div>\n\n    <footer class=\"footer\">\n      <button type=\"button\" class=\"btnSeguir\"\n        onclick=\"document.getElementById('id02').style.display='none'\">SEGUIR {{tipo | uppercase}}</button>\n      <button type=\"button\" class=\"btnGrabar\">DETENER {{tipo | uppercase }}</button>\n    </footer>\n  </div>\n</div>\n  <!--fin div detener video-->\n\n  <!-- div pausar video  -->\n  <div id=\"id03\" class=\"modal\">\n    <div class=\"modal-content\">\n      <header class=\"header\">\n        <img class=\"barra\" src='./assets/Images/barra_lightbox.svg'/>\n      </header>\n\n      <div class=\"contenido\">\n        <div class=\"datos\">\n          <div class=\"Inspector\">\n            <p class=\"campo\">{{tipoUsr}}:</p>\n            <p class=\"dato\">{{usuario}}</p>\n          </div>\n          <div class=\"Fecha\">\n            <p class=\"campo\">Fecha/Hora: </p>\n            <p class=\"dato\">{{fechaHora}}</p>\n          </div>\n        </div>\n        <hr>\n        <div class=\"txtControlVideo\">\n            <label>Lote de {{tipo}} No.{{folio}} en Pausa</label>\n        </div>\n      </div>\n\n      <footer class=\"footer\">\n        <button type=\"button\" class=\"btnSeguir\"\n          onclick=\"document.getElementById('id03').style.display='none'\">SEGUIR {{tipo | uppercase}}</button>\n        <button type=\"button\" class=\"btnGrabar\">DETENER {{tipo | uppercase}}</button>\n      </footer>\n    </div>\n  </div>\n<!-- fin div pausar video -->\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/shared/pop-up-grabacion-video/pop-up-grabacion-video.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal {\n  z-index: 3;\n  display: none;\n  padding-top: 100px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(255, 255, 255, 0.7);\n  font-family: 'Roboto', sans-serif; }\n\n.modal-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  margin: auto;\n  background-color: black;\n  position: relative;\n  padding: 0;\n  outline: 0;\n  width: 1155px;\n  height: 650px;\n  color: white; }\n\n.header {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  padding-top: 2%; }\n\n.contenido {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  width: 90%;\n  height: 50%;\n  padding-left: 4%;\n  padding-right: 4%;\n  padding-top: 7%; }\n\n.footer {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  height: 16%;\n  padding-left: 4%;\n  padding-right: 4%;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.datos {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin: 3%; }\n\n.Inspector {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto; }\n\n.Fecha {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto; }\n\n.txtControlVideo {\n  font-size: 46px;\n  text-align: center;\n  margin: 5%; }\n\n.barra {\n  height: 90%;\n  width: 98%; }\n\n.titulo {\n  font-size: 69px;\n  font-weight: bold;\n  margin-bottom: 5%; }\n\n.campo {\n  font-size: 22px; }\n\n.dato {\n  font-size: 36px;\n  font-weight: bold; }\n\n.footer {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  height: 16%;\n  padding-left: 4%;\n  padding-right: 4%;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.btnControlPrincipal {\n  width: 130px;\n  height: 37px;\n  font-size: 20px;\n  background-color: #C1272D;\n  color: white;\n  font-family: 'Roboto', sans-serif; }\n\n.btnControlPrincipalVerde {\n  width: 181px;\n  height: 37px;\n  font-size: 20px;\n  background-color: #39B54A;\n  color: white;\n  font-family: 'Roboto', sans-serif; }\n\n.btnGrabar {\n  width: 300px;\n  height: 70px;\n  font-size: 20px;\n  background-color: #C1272D;\n  color: white;\n  font-family: 'Roboto', sans-serif; }\n\n.btnVolver {\n  width: 300px;\n  height: 70px;\n  font-size: 20px;\n  background-color: #008A98;\n  color: white;\n  font-family: 'Roboto', sans-serif; }\n\n.btnSeguir {\n  width: 300px;\n  height: 70px;\n  font-size: 20px;\n  background-color: #39B54A;\n  color: white;\n  font-family: 'Roboto', sans-serif; }\n"

/***/ }),

/***/ "./src/app/components/shared/pop-up-grabacion-video/pop-up-grabacion-video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopUpGrabacionVideoComponent; });
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

var PopUpGrabacionVideoComponent = /** @class */ (function () {
    function PopUpGrabacionVideoComponent() {
        this.usuario = "Cesar Fernandez";
        this.fechaHora = "Oct 12-2017, 9:06am";
        this.folio = 19098805;
        this.tipo = "inspección";
        this.tipoUsr = "Inspector";
    }
    PopUpGrabacionVideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-popup-grabacionVideo',
            template: __webpack_require__("./src/app/components/shared/pop-up-grabacion-video/pop-up-grabacion-video.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/pop-up-grabacion-video/pop-up-grabacion-video.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PopUpGrabacionVideoComponent);
    return PopUpGrabacionVideoComponent;
}());



/***/ })

});
//# sourceMappingURL=responsableae.module.chunk.js.map