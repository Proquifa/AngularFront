webpackJsonp(["productos-doc-faltante.module"],{

/***/ "./src/app/components/productos-doc-faltante/cargar-documento/cargar-documento.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"areaSeccion\">\n  <div>\n    <div class=\"datos\">\n      <div>\n        <div>\n          <img src=\"./assets/Images/contacto.svg\" class=\"icono\">\n          <pn-combo-flecha-verde *ngIf=\"activarCombo\" [items]=\"listaContacto\" [itemSelect]=\"selectedTipoContac\" [heightLi]=\"'35px'\" [widthBorder] = 'false' (valueDropList)=\"recibirItem($event)\" style=\"width: 250px;\"></pn-combo-flecha-verde>\n        </div>\n        <div>\n          <img src=\"./assets/Images/mail.svg\" class=\"icono\">\n          <label>{{itemContacto.email}}</label>\n        </div>\n        <div>\n          <img src=\"./assets/Images/telefono.svg\" class=\"icono\">\n          <label>{{itemContacto.tel}}</label>\n        </div>\n      </div>\n      <div>\n        <label>{{itemContacto.titulo}}</label>\n        <span>Título de Contacto</span>\n      </div>\n      <div>\n        <label>{{itemContacto.puesto}}</label>\n        <span>Puesto</span>\n      </div>\n      <div>\n        <label>{{itemContacto.departament}}</label>\n        <span>Departamento</span>\n      </div>\n    </div>\n    <div>\n      <div style=\"width: 40%;flex-direction: column;padding-right: 20px\">\n        <div class=\"titulosLista\">\n          <div  class=\"tituloCliente\">\n            <label class=\"tituloLista\">PRODUCTOS</label>\n          </div>\n          <div class=\"organizarLista\">\n            <div class=\"barraBusqueda\" style=\"height: 100%\">\n              <div class=\"buscar\">\n                <div>\n                  <div class=\"lupa\">\n                    <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\n                  </div>\n                  <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"OC, Producto, Inspector, tipo , lote\" />\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--Lista total-->\n        <div class=\"segundaSeccionList\">\n          <div style=\"width: 99%;display: flex;overflow: auto;position: relative;height: 100%;\">\n            <div class= \"lista\" style=\"display: unset;flex-direction: column\">\n              <div [ngClass]=\"item.identificador === folio? 'divActive': ''\" *ngFor=\"let item of lista; let i = index;\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\n                <div class=\"dfSelect\"></div>\n                <div class=\"datosLst\" style=\"padding-top: 5px;padding-left: 15px;display: flex; width: 100%;box-sizing: border-box;padding-bottom: 10px;\" (click)=\"seleccionarItem(item, i)\">\n                  <div class=\"informacionList\">\n                    <label> #{{i +1}} · <span class=\"producto\">{{item.folio}}</span> · {{item.producto}}</label>\n                    <span class=\"tooltip\"> <label class=\"descarga\" (click)=\"visualizarDoc('OC', item.oc)\">OC-{{item.oc}}</label> · <label class=\"descarga\" (click)=\"visualizarDoc('PEDIDO', item.pedidoI)\">Pedido Interno: {{item.pedidoI}}</label> <span class=\"tooltiptext\" *ngIf=\"item.listaRechazos.length > 0\"><label *ngFor=\"let itemR of item.listaRechazos\"><label (click)=\"visualizarDoc('OC', itemR.compra)\" class=\"descargaToltip\">OC-{{itemR.compra}}</label> · <label (click)=\"visualizarDoc('PEDIDO', itemR.cpedido)\" class=\"descargaToltip\">Pedido Internio: {{itemR.cpedido}}</label></label></span></span>\n                    <h1>Fecha de Inspección: {{item.fechaI}}· Inpector: {{item.inspector}}</h1>\n                    <h3> FEE: {{item.FEE}} · DRE: {{item.DRE}} · Tipo:{{item.tipo}} · Lote: {{item.lote}}</h3>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"totales\">\n          <label>#{{listaUniveso.length}}</label>\n          <label>{{datosProveedor.totalOc}} OC</label>\n          <label>{{listaUniveso.length}} Productos</label>\n        </div>\n      </div>\n      <!--linea degradada-->\n      <div class=\"borderLine\"></div>\n      <!---->\n      <div style=\"padding-left: 20px\" class=\"cargaDocument\">\n        <div *ngIf=\"seleccionado\" style=\"height: 94%; width: 100%\">\n          <div class=\"infoProducto\">\n            <div *ngIf=\"seleccionado\" class=\"selectedData\">\n              <label> #{{indice}} · <span class=\"producto\">{{itemSelect.folio}}</span> · {{itemSelect.producto}}</label>\n              <span style=\"font-weight: 400; font-size: 18px;display:flex;height: 22px;\"><label class=\"descarga\" (click)=\"visualizarDoc('OC', itemSelect.oc)\" style=\"font-size: 18px;\">{{itemSelect.oc}} · </label>\n                <label class=\"descarga\" (click)=\"visualizarDoc('PEDIDO', itemSelect.pedidoI)\" style=\"font-size: 18px;\"> Pedido Interno: {{itemSelect.pedidoI}}</label>\n              </span>\n              <h1>  Fecha de Inspección: {{itemSelect.fechaI}}· Inpector: {{itemSelect.inspector}}</h1>\n            </div>\n          </div>\n          <div class=\"documentoCarga\">\n            <div class=\"seccionDocument\">\n              <div class=\"cargaDoc\">\n                <input type=\"file\" class=\"carga\"  (change)=\"fileChange2($event)\" id=\"cargarDocumento\">\n                <label for=\"cargarDocumento\" style=\"display: flex\" *ngIf=\"primerCarga\" class=\"cargarDocumento\"><img src=\"./assets/Images/cargar_permiso.svg\" class=\"imgeArchivo\">\n                  <p class=\"extension\">.pdf</p>\n                  <p class=\"textoImagen\">Certificado (carga obligatoria)</p></label>\n                <div *ngIf=\"!primerCarga\" class=\"vistDoc\">\n                  <div style=\"width: 100%;height: 95%; justify-content: center;display: flex\">\n                    <div class=\"contentRefuse\" id=\"preview\" [innerHtml] = \"htmlToAdd\" [style.height]=\"'100%'\"\n                         [style.overflow]=\"'auto'\">\n                    </div>\n                  </div>\n                  <div *ngIf=\"!primerCarga\" class=\"recargar\">\n                    <label for=\"cargarDocumento\" style=\"display: flex\"><img src=\"./assets/Images/editar-pieza/cargar.svg\"></label>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"hojaSeguridad\">\n              <div>\n                <label>Hoja de Seguridad (carga opcional)</label>\n              </div>\n                <pq-file-upload [disabled]=\"true\" [docR]=\"cargarGuia\" style=\"min-width: 260px;height: 100%;display: flex;justify-content: center;align-items: center;\"\n                                (enviarDocumento)=\"recibeDocumentacion($event)\" [fileName]=\"deshabilitar\" *ngIf=\"hojaS\"></pq-file-upload>\n            </div>\n          </div>\n        </div>\n        <div *ngIf=\"!seleccionado\" class=\"bloqueoCarga\">\n            <label>SELECCIONA UN PRODUCTO PARA VISUALIZAR ESTA SECCIÓN</label>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"btn\">\n      <div [style.background-color]=\"activarBtn? '#4BA92B': '#C2C3C9'\" [style.pointer-events]=\"activarBtn? 'auto':'none'\" (click)=\"finalizar()\">\n        <label>ACEPTAR</label>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/productos-doc-faltante/cargar-documento/cargar-documento.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n.areaSeccion {\n  min-width: 1175px;\n  min-height: 822px;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 20px 20px 20px 20px; }\n.areaSeccion > div {\n    width: 100%;\n    height: calc(100% - 50px);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n.areaSeccion > div > div {\n      width: 100%;\n      height: calc(100% - 124px);\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n.areaSeccion > div > div > div {\n        width: 60%;\n        height: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n.areaSeccion > div > div > .cargaDocument {\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n.areaSeccion > div > div > .cargaDocument > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column; }\n.areaSeccion > div > div > .cargaDocument > div > label {\n            font-family: Novecento;\n            font-weight: bold;\n            font-size: 40px;\n            color: #D8D9DD;\n            text-align: center;\n            line-height: 55px;\n            max-width: 677px; }\n.areaSeccion > div > div > .borderLine {\n        width: 1.1px;\n        height: 100%;\n        background: -webkit-gradient(linear, left bottom, left top, color-stop(2%, #FFFFFF), color-stop(70%, #BCBCBC), color-stop(93%, #FFFFFF)) 100%;\n        background: linear-gradient(to top, #FFFFFF 2%, #BCBCBC 70%, #FFFFFF 93%) 100%; }\n.areaSeccion > div > .datos {\n      height: 153px;\n      max-height: 124px;\n      border-bottom: 1px solid;\n      line-height: 1.2; }\n.areaSeccion > div > .datos > div {\n        height: 100%;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: start;\n            -ms-flex-align: start;\n                align-items: start;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        padding-right: 10px; }\n.areaSeccion > div > .datos > div > label {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 18px;\n          color: #424242;\n          text-align: left; }\n.areaSeccion > div > .datos > div > span {\n          font-family: Roboto;\n          font-weight: 400;\n          font-size: 17px;\n          color: #848387;\n          text-align: left; }\n.areaSeccion > div > .datos > div > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n.areaSeccion > div > .datos > div > div > label {\n            font-family: Roboto;\n            font-weight: 400;\n            font-size: 18px;\n            color: #424242;\n            text-align: left; }\n.areaSeccion > .btn {\n    height: 50px;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding-bottom: 5px; }\n.areaSeccion > .btn div {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      width: 170px;\n      height: 31px;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      background: #C2C3C9;\n      cursor: pointer; }\n.areaSeccion > .btn div > label {\n        font-family: Novecento;\n        font-weight: bold;\n        font-size: 20px;\n        color: #FFFFFF;\n        text-align: left;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin-bottom: 4px;\n        cursor: pointer; }\n.titleData {\n  font-family: Roboto;\n  font-weight: bold;\n  font-size: 24px;\n  color: #008895;\n  text-align: left; }\n.icono {\n  width: 16px;\n  margin-right: 5px; }\n.tituloLista {\n  font-size: 24px;\n  font-family: Novecento;\n  font-weight: bold; }\n.numeroIndex {\n  font-size: 28px;\n  font-family: Roboto-Regular;\n  text-align: left;\n  width: 10%;\n  padding-right: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 4px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.numeroIndex label {\n    font-family: Roboto;\n    font-weight: 400;\n    font-size: 18px;\n    color: #424242;\n    text-align: left; }\n.informacionList {\n  font-family: Roboto;\n  width: 95%;\n  padding-top: 8px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n.informacionList > label {\n    color: #424242;\n    font-weight: bold;\n    font-size: 20px;\n    font-family: Roboto;\n    line-height: 1;\n    overflow: hidden; }\n@supports (-webkit-line-clamp: 3) {\n      .informacionList > label {\n        display: block;\n        display: -webkit-box !important;\n        line-height: 1.1;\n        -webkit-line-clamp: 3;\n        -webkit-box-orient: vertical;\n        text-overflow: ellipsis; } }\n@supports not (-webkit-line-clamp: 3) {\n      .informacionList > label {\n        position: relative;\n        line-height: 1.1;\n        overflow: hidden;\n        width: 100%; }\n        .informacionList > label:before {\n          content: \"\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\";\n          position: absolute;\n          bottom: 0;\n          right: 0;\n          background: transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;\n          background: transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%; } }\n.informacionList h3 {\n    line-height: 1.5;\n    margin-top: 4px;\n    font-weight: 400;\n    font-family: Roboto-Regular;\n    font-size: 17px;\n    color: #848387;\n    text-align: left; }\n.informacionList span {\n    font-family: Roboto;\n    font-weight: bold;\n    font-size: 20px;\n    color: #008894;\n    text-align: left; }\n.informacionList h1 {\n    font-family: Roboto;\n    font-weight: 400;\n    font-size: 18px;\n    color: #424242;\n    text-align: left; }\n.informacionList .tooltip {\n    font-family: Roboto;\n    font-weight: 400;\n    font-size: 18px;\n    position: relative;\n    display: inline-block;\n    cursor: pointer; }\n.informacionList .tooltip > .tooltiptext::after {\n      content: \" \";\n      position: absolute;\n      bottom: 100%;\n      /* At the top of the tooltip */\n      left: 50%;\n      margin-left: -5px;\n      border-width: 5px;\n      border-style: solid;\n      border-color: transparent transparent #4C4C4C transparent; }\n.informacionList .tooltip:hover > .tooltiptext {\n      visibility: visible;\n      opacity: 1;\n      text-align: center;\n      -webkit-transform: translateX(-50%);\n              transform: translateX(-50%); }\n.informacionList .tooltip > .tooltiptext {\n      visibility: hidden;\n      width: initial;\n      background-color: #424242;\n      color: #FFFFFF;\n      font-family: 'Roboto';\n      text-align: left;\n      padding: 5px 10px 0px 0px;\n      font-size: 9px;\n      padding: 5px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      left: 50%;\n      margin-top: 0px;\n      -webkit-box-pack: center;\n      -ms-flex-pack: center;\n      justify-content: center;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center;\n      /* Position the tooltip */\n      position: absolute;\n      z-index: 1; }\n.informacionList .tooltip > label {\n      color: #FFFFFF; }\n.segundaSeccionList {\n  height: 82%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-bottom: 1px solid;\n  width: 100%;\n  border-top: 1px solid;\n  overflow: auto; }\n.tituloCliente {\n  width: 100%;\n  height: 50%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-bottom: 5px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.lista {\n  width: 100%;\n  min-height: 80px;\n  font-size: 20px;\n  padding: 15px 19px 14px 13px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  line-height: 1.3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto; }\n.lista > .index {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    height: 52px; }\n.lista > .datosLst {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto; }\n.lista > .datosLst > p {\n      font-weight: normal; }\n.lista div:hover {\n    background-color: #ECEEF0; }\n.lista > .divActual {\n    background-color: #ECEEF0;\n    -webkit-box-shadow: 0 2px 4px -3px #008895;\n            box-shadow: 0 2px 4px -3px #008895; }\n.lista > .divActive {\n    background-color: #ECEEF0; }\n.lista > .divActive .dfSelect {\n      background: #008895 !important;\n      width: 5px !important;\n      color: #008895; }\n.lista > .divActive .datosLst {\n      -webkit-box-ordinal-group: 1;\n          -ms-flex-order: 0;\n              order: 0;\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n      -ms-flex-item-align: auto;\n          -ms-grid-row-align: auto;\n          align-self: auto; }\n.titulosLista {\n  height: 15%;\n  padding-top: 15px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-bottom: 15px;\n  min-height: 90px; }\n.organizarLista {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 10px;\n  position: relative;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 50%; }\n.buscar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%;\n  border-style: solid; }\n.buscar div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 650px;\n    border-radius: 102px 102px 102px 102px;\n    -moz-border-radius: 102px 102px 102px 102px;\n    -webkit-border-radius: 102px 102px 102px 102px;\n    border: 0.5px solid #BFC0C7;\n    height: 26px; }\n.buscar div div {\n      border: none;\n      border-radius: 0px 0px 0px 0px;\n      -moz-border-radius: 0px 0px 0px 0px;\n      -webkit-border-radius: 0px 0px 0px 0px;\n      border: 0px solid #000000;\n      width: 40px;\n      background: transparent;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n.buscar div .buscar-input {\n      cursor: pointer;\n      background: transparent;\n      border-radius: 100px;\n      -moz-border-radius: 102px 102px 102px 102px;\n      border: 0px solid #000000;\n      width: 100%;\n      font-family: Helvetica;\n      font-size: 18px;\n      color: #AAA9AF;\n      outline: none;\n      padding-left: 5px; }\n.barraBusqueda {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.cargaDoc {\n  width: 100%;\n  height: 100%;\n  background-color: #ECEEF0;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative; }\n.carga {\n  display: none; }\n.carga::-webkit-file-upload-button {\n    opacity: 0; }\n.titulo {\n  width: 100%;\n  height: 5%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid #424242;\n  padding: 5px;\n  min-height: 40px; }\n.titulo label {\n    font-family: novecento;\n    font-weight: bold;\n    font-size: 24px;\n    justify-items: center; }\n.recargar {\n  width: 100%;\n  height: 5%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n.contentRefuse {\n  height: 100%;\n  overflow: auto;\n  width: 69%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative; }\n.vistDoc {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 20px;\n  padding-bottom: 10px;\n  padding-right: 30px;\n  padding-left: 30px; }\n.textoImagen {\n  color: #424242;\n  font-size: 32px;\n  text-align: center;\n  position: relative;\n  font-family: Roboto;\n  font-weight: bold;\n  opacity: 0.5;\n  margin-top: 5px; }\n.imgeArchivo {\n  height: 265px;\n  width: 204px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  text-align: center; }\n.cargarDocumento {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  height: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 100%; }\n.documento {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-bottom: 10px;\n  width: 100%;\n  height: 80%; }\n.documentoCarga {\n  height: 90%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 10px; }\n.seccionDocument {\n  height: calc(100% - 99px);\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-bottom: 20px; }\n.hojaSeguridad {\n  height: 98px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  text-align: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-right: 67px;\n  background: #ECEEF0; }\n.hojaSeguridad > div {\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-line-pack: center;\n        align-content: center; }\n.hojaSeguridad > div > label {\n      font-family: Roboto;\n      font-weight: bold;\n      font-size: 18px;\n      color: #424242;\n      padding-right: 5px; }\n.extension {\n  opacity: 0.3;\n  font-family: Roboto;\n  font-weight: bold;\n  font-size: 24px;\n  color: #424242; }\n.totales {\n  height: 25px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 20px; }\n.totales > label {\n    font-family: Roboto;\n    font-weight: 400;\n    font-size: 14px;\n    color: #424242;\n    text-align: left;\n    padding-right: 60px; }\n.selectedData {\n  line-height: 1.2; }\n.selectedData label {\n    color: #424242;\n    font-weight: bold;\n    font-size: 20px;\n    font-family: Roboto;\n    overflow: hidden; }\n@supports (-webkit-line-clamp: 2) {\n      .selectedData label {\n        display: block;\n        display: -webkit-box !important;\n        line-height: 1.1;\n        -webkit-line-clamp: 2;\n        -webkit-box-orient: vertical;\n        text-overflow: ellipsis; } }\n@supports not (-webkit-line-clamp: 2) {\n      .selectedData label {\n        position: relative;\n        line-height: 1.1;\n        overflow: hidden;\n        width: 100%; }\n        .selectedData label:before {\n          content: \"\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\\00a0\";\n          position: absolute;\n          bottom: 0;\n          right: 0;\n          background: transparent -webkit-gradient(linear, left top, right top, from(rgba(25, 255, 255, 0)), color-stop(50%, white)) repeat scroll 0% 0%;\n          background: transparent linear-gradient(to right, rgba(25, 255, 255, 0), white 50%) repeat scroll 0% 0%; } }\n.selectedData h3 {\n    line-height: 1.5;\n    margin-top: 4px;\n    font-weight: 400;\n    font-family: Roboto-Regular;\n    font-size: 17px;\n    color: #848387;\n    text-align: left; }\n.selectedData span {\n    font-family: Roboto;\n    font-weight: bold;\n    font-size: 20px;\n    color: #008894;\n    text-align: left; }\n.selectedData h1 {\n    font-family: Roboto;\n    font-weight: 400;\n    font-size: 18px;\n    color: #424242;\n    text-align: left; }\n.bloqueoCarga {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n/deep/ .dropListSelect .container-drop .Title > p {\n  font-weight: bold !important;\n  color: #008894; }\n/deep/ .dropList .container-drop .Title > p {\n  font-weight: 400 !important; }\n.infoProducto {\n  height: 10%;\n  width: 100%; }\n.descarga {\n  font-family: Roboto;\n  font-weight: bold;\n  font-size: 20px;\n  color: #008894 !important;\n  text-align: left; }\nlabel.descarga:hover {\n  border-bottom: 1px solid;\n  border-bottom: 1px solid; }\n.descargaToltip {\n  font-size: 12px; }\nlabel.descargaToltip:hover {\n  border-bottom: 1px solid; }\n@media all and (min-height: 770px) and (max-height: 1090px) {\n  .textoImagen {\n    font-size: 28px; }\n  .extension {\n    font-size: 20px; }\n  .imgeArchivo {\n    height: 247px;\n    width: 114px;\n    -webkit-transition: width 0.8s;\n    transition: width 0.8s; }\n  .infoProducto {\n    height: 15%; }\n  .selectedData > label {\n    font-size: 18px; }\n  .selectedData > span {\n    font-size: 18px; } }\n"

/***/ }),

/***/ "./src/app/components/productos-doc-faltante/cargar-documento/cargar-documento.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CargarDocumentoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_arribo_documento_arribo_documento_service__ = __webpack_require__("./src/app/services/arribo-documento/arribo-documento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
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






var CargarDocumentoComponent = /** @class */ (function () {
    function CargarDocumentoComponent(_trabjarArribo, coreContainer, comunService) {
        this._trabjarArribo = _trabjarArribo;
        this.coreContainer = coreContainer;
        this.comunService = comunService;
        this.regreVista = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.val = 1;
        this.listaFD = [];
        /*****PRUEBA DE LISTA*****/
        this.lista = [];
        this.listaUniveso = [];
        this.pdf = '';
        this.htmlToAdd = '';
        this.folio = '';
        this.deshabilitar = '';
        this.pathProd = 'http://proquifa.com.mx:51725/SAP/';
        this.listaContacto = [];
    }
    CargarDocumentoComponent.prototype.ngOnInit = function () {
        var obj;
        obj = new Object;
        obj.nombre = 'Seleccionar';
        this.selectedTipoContac = obj;
        this.activbarCargdaDoc = true;
        this.primerCarga = true;
        this.usuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
        this.obtenerDatosContacto();
        var datos = { responsable: this.usuario, idProveedor: this.datosProveedor.idProveedor };
        this.obtenerProdutos(datos);
        // console.log('=====', this.datosProveedor);
    };
    CargarDocumentoComponent.prototype.obtenerDatosContacto = function () {
        var _this = this;
        this._trabjarArribo.contactoProveedor(this.datosProveedor.idProveedor).subscribe(function (data) {
            var listaContacto = data.current;
            for (var i = 0; i < listaContacto.length; i++) {
                _this.listaContacto.push({ nombre: listaContacto[i].nombre, key: i, departament: listaContacto[i].departamento,
                    puesto: listaContacto[i].puesto, email: listaContacto[i].email, titulo: listaContacto[i].titulo, tel: listaContacto[i].telefono });
            }
            _this.activarCombo = true;
        }, function (error) {
            console.log('Error -->', error);
        });
    };
    CargarDocumentoComponent.prototype.obtenerProdutos = function (datos) {
        var _this = this;
        this.lista = [];
        this.listaUniveso = [];
        this.coreContainer.openModal(0);
        this._trabjarArribo.obtenerProductosFaltantesPorProveedor(datos).subscribe(function (data) {
            // console.log('Soy datos:::', data.current);
            var listaProd = data.current;
            var fechaInsp;
            var feeAux;
            for (var i = 0; i < listaProd.length; i++) {
                feeAux = new __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(listaProd[i].fee);
                if (listaProd[i].fechaInspeccion !== null) {
                    fechaInsp = new __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(listaProd[i].fechaInspeccion);
                }
                else {
                    fechaInsp = 'ND';
                }
                _this.lista.push({ folio: listaProd[i].codigo, inspector: listaProd[i].inspector, pedidoI: listaProd[i].cpedido,
                    tipo: listaProd[i].tipo, lote: listaProd[i].lote, oc: listaProd[i].compra,
                    producto: listaProd[i].concepto, DRE: listaProd[i].dre, fechaI: fechaInsp, FEE: feeAux,
                    listaRechazos: listaProd[i].lstRechazos, idFabrica: listaProd[i].idFabrica, identificador: listaProd[i].identificador });
                _this.listaUniveso.push({ folio: listaProd[i].codigo, inspector: listaProd[i].inspector, pedidoI: listaProd[i].cpedido,
                    tipo: listaProd[i].tipo, lote: listaProd[i].lote, oc: listaProd[i].compra,
                    producto: listaProd[i].concepto, DRE: listaProd[i].dre, fechaI: fechaInsp, FEE: feeAux,
                    listaRechazos: listaProd[i].lstRechazos, idFabrica: listaProd[i].idFabrica, identificador: listaProd[i].identificador });
            }
            _this.seleccionarItem(_this.lista[0], 0);
            _this.coreContainer.closeModal(0);
        }, function (error) {
            _this.coreContainer.closeModal(0);
        });
    };
    CargarDocumentoComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search === '') {
            this.lista = this.listaUniveso.slice();
        }
        else {
            this.listaUniveso.forEach(function (folio) {
                if (folio.oc.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1 || folio.producto.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1 ||
                    folio.inspector.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1 || folio.tipo.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1 ||
                    folio.lote.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
                    searchArrayAux.push(folio);
                }
            });
            this.lista = searchArrayAux;
        }
        this.buscarIndice();
    };
    CargarDocumentoComponent.prototype.buscarIndice = function () {
        for (var i = 0; i < this.lista.length; i++) {
            if (this.folio === this.lista[i].folio) {
                this.indice = i + 1;
            }
        }
        return false;
    };
    CargarDocumentoComponent.prototype.fileChange2 = function ($event) {
        if (this.val === 1) {
            this.primerCarga = false;
            this.val = 2;
        }
        console.log($event);
        this.fileCertificado = $event.target.files;
        this.valitarBtn();
        this.mostrarDocumento(this.fileCertificado);
    };
    CargarDocumentoComponent.prototype.mostrarDocumento = function (fileInput) {
        var doc = document.querySelector('#preview');
        var $img = document.querySelector('#preview');
        var reader = new FileReader();
        /*Validación para eliminar si ya existe un elemento*/
        if (document.querySelector('#preview')) {
            document.querySelector('#preview').children[0].remove();
        }
        /******************/
        reader.onload = function (e) {
            document.querySelector('#preview').insertAdjacentHTML('afterbegin', '<iframe id="pdf" src="' + e.target.result + '" width="100%" height="100%" alt="pdf" pluginspage="http://www.adobe.com/products/acrobat/readstep2.html">');
        };
        reader.readAsDataURL(fileInput[0]);
    };
    CargarDocumentoComponent.prototype.recibeDocumentacion = function (archivo) {
        console.log('archivo:::', archivo);
        this.fileHojaS = archivo;
        this.valitarBtn();
    };
    CargarDocumentoComponent.prototype.recibirItem = function (item) {
        // console.log('Soy item contacto', item);
        if (item.nombre !== 'Seleccionar') {
            this.itemContacto = item;
            this.nombreContacto = item.nombre;
        }
        else {
            this.nombreContacto = 'Seleccionar';
            this.itemContacto = { email: '' };
        }
        this.valitarBtn();
    };
    CargarDocumentoComponent.prototype.seleccionarItem = function (item, i) {
        var _this = this;
        setTimeout(function () {
            _this.hojaS = false;
        }, 200);
        this.deshabilitar = '';
        setTimeout(function () {
            _this.hojaS = true;
        }, 200);
        this.primerCarga = true;
        this.val = 1;
        this.seleccionado = true;
        this.listaFD = [];
        this.fileCertificado = null;
        /*this.listaFD = new Array(this.lista.length).fill('');
        this.listaFD[i] = 'divActive';*/
        this.itemSelect = item;
        this.folio = item.identificador;
        this.indice = i + 1;
        this.valitarBtn();
    };
    CargarDocumentoComponent.prototype.valitarBtn = function () {
        if (this.fileCertificado !== undefined && this.fileCertificado !== null && this.seleccionado === true) {
            this.activarBtn = true;
        }
        else {
            this.activarBtn = false;
        }
    };
    CargarDocumentoComponent.prototype.finalizar = function () {
        var _this = this;
        var conHoja;
        if (this.fileHojaS !== undefined && this.fileHojaS !== null) {
            conHoja = 'S';
        }
        else {
            conHoja = 'N';
        }
        var nameFile;
        var datos = { responsable: this.usuario, idProveedor: this.datosProveedor.idProveedor };
        this.datosEnviar = { codigo: this.itemSelect.folio,
            lote: this.itemSelect.lote,
            hoja: conHoja };
        console.log('Soy datos a enviar ::', this.datosEnviar);
        this._trabjarArribo.finalizarDocumentacionFaltante(this.datosEnviar).subscribe(function (data) {
            if (data.current === true) {
                nameFile = _this.itemSelect.folio + '-' + _this.itemSelect.lote + '.pdf';
                _this.guardarDocumentos(_this.fileCertificado, nameFile, 'certificados');
                if (_this.fileHojaS !== undefined && _this.fileHojaS !== null) {
                    nameFile = _this.itemSelect.folio + '.pdf';
                    _this.guardarDocumentos(_this.fileHojaS, nameFile, 'hojasseguridad');
                }
                if (_this.listaUniveso.length > 1) {
                    _this.regreVista.emit(false);
                    _this.obtenerProdutos(datos);
                }
                else {
                    _this.regreVista.emit(true);
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    CargarDocumentoComponent.prototype.guardarDocumentos = function (archivo, nombre, tipo) {
        this._trabjarArribo.uploadFile(archivo, nombre, tipo, this.itemSelect.idFabrica).subscribe(function (data) {
            console.log('Entre a data archivo :::', data.current);
        }, function (error) {
        });
    };
    CargarDocumentoComponent.prototype.visualizarDoc = function (tipo, dato) {
        var _this = this;
        var tipoArchivo;
        if (tipo === 'PEDIDO') {
            tipoArchivo = 'Pedidos';
        }
        else if (tipo === 'OC') {
            // his.pathVisualizar = this.pathProd + 'Ordenes de compra/' + dato + '-P.pdf';
            tipoArchivo = 'Compra';
        }
        this.comunService.obtenerRuta(dato, tipoArchivo, '').then(function (data) {
            _this.pathVisualizar = data;
            _this.openNewBrowser(_this.pathVisualizar);
        });
    };
    CargarDocumentoComponent.prototype.openNewBrowser = function (path) {
        console.log('Entre ');
        var shell = electron.shell;
        shell.openExternal(path);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CargarDocumentoComponent.prototype, "datosProveedor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CargarDocumentoComponent.prototype, "regreVista", void 0);
    CargarDocumentoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-cargar-documento',
            template: __webpack_require__("./src/app/components/productos-doc-faltante/cargar-documento/cargar-documento.component.html"),
            styles: [__webpack_require__("./src/app/components/productos-doc-faltante/cargar-documento/cargar-documento.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_arribo_documento_arribo_documento_service__["a" /* ArriboDocumentoService */], __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__["a" /* ComunService */]])
    ], CargarDocumentoComponent);
    return CargarDocumentoComponent;
}());



/***/ }),

/***/ "./src/app/components/productos-doc-faltante/productos-doc-faltante-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosDocFaltanteRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productos_doc_faltante_component__ = __webpack_require__("./src/app/components/productos-doc-faltante/productos-doc-faltante.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductosDocFaltanteRoutingModule = /** @class */ (function () {
    function ProductosDocFaltanteRoutingModule() {
    }
    ProductosDocFaltanteRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__productos_doc_faltante_component__["a" /* ProductosDocFaltanteComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ProductosDocFaltanteRoutingModule);
    return ProductosDocFaltanteRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/productos-doc-faltante/productos-doc-faltante.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\n  <!--Seccion de menu-->\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\n    <aside [ngClass]=\"classAsideMenu\">\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\n        <pn-menu-seccion-roles [items]=\"itemsMenu\" style=\"width: 100%;\" *ngIf=\"activeMenu\"></pn-menu-seccion-roles>\n      </div>\n    </aside>\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n    </div>\n  </div>\n  <!--Termina seccion de menu-->\n  <!--Empieza el area de trabajo-->\n  <div class=\"area\">\n    <!--Empieza la cabezera-->\n    <div class=\"cabezera\">\n      <div>\n        <div style=\"cursor: pointer;\" *ngIf=\"!vistaP\" (click)=\"regresarVistaP()\">\n          <img class=\"img\" src='./assets/Images/regresar.svg'/>\n        </div>\n        <label class=\"etiqueta\">PRODUCTOS CON DOCUMENTACIÓN FALTANTE</label>\n      </div>\n      <div *ngIf=\"!vistaP\">\n        <label class=\"title\">{{cliente}}</label>\n      </div>\n    </div>\n    <!--Termina la cabezera-->\n    <!--Empiezan los componentes-->\n    <div [ngStyle]=\"{'overflow':'scroll', 'width':'100%', 'height':'calc(100% - 122px)'}\">\n        <div style=\"height: 100%; width: 100%;display: flex\" *ngIf=\"vistaP\">\n          <div class=\"primeraSec\">\n            <div class=\"titulosLista\">\n              <div  class=\"tituloCliente\">\n                <label class=\"tituloLista\">PROVEEDORES</label>\n              </div>\n              <div class=\"organizarLista\">\n                <div style=\"width: 10%; height: 100%;    display: flex;align-items: center;\">\n                  <div class=\"menu\" (click)=\"abreCombo()\">\n                    <div>\n                    </div>\n                    <div>\n                    </div>\n                    <div>\n                    </div>\n                    <section id=\"section\">\n                      <ul class=\"listaHamburguesa\">\n                        <li (click)=\"ordenamientoFechaTramNue()\">Más Recientes</li>\n                        <li (click)=\"ordenamientoFechaTramAnt()\">Más Antiguos</li>\n                      </ul>\n                    </section>\n                  </div>\n                </div>\n                <div style=\"width: 30%; height: 100%;    display: flex;align-items: center;\">\n                  <h3 class=\"subtitulo\">{{tipoOrden}}</h3>\n                </div>\n                <div class=\"barraBusqueda\" style=\"height: 100%\">\n                  <div class=\"buscar\">\n                    <div>\n                      <div class=\"lupa\">\n                        <img src=\"assets/Images/lupa.svg\" width=\"22px\" height=\"22px\" alt=\"buscar\">\n                      </div>\n                      <input type=\"text\" [ngModel]=\"searchTerm\" (ngModelChange)=\"buscar($event)\" class=\"buscar-input\" placeholder=\"Proveedor\" />\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--Lista total-->\n            <div class=\"listaSeccionUno\">\n              <div>\n                <div class= \"lista\" style=\"display: unset;flex-direction: column\" >\n                  <div  *ngFor=\"let item of lista; let i = index\"   style=\"display: flex;flex-direction:row;width: 100%;position: relative; border-bottom: 1px solid #ECEEF0\">\n                    <div class=\"imagenFlecha\">\n                      <img src=\"./assets/Images/regresarAzul.svg\" class=\"flechaInicio\" (click)=\"seleccionarItem(i, item)\">\n                    </div>\n                    <div class=\"dfSelect\"></div>\n                    <div class=\"datosLst\" style=\"padding-top: 10px;padding-left: 15px; display: flex\">\n                      <div class=\"numeroIndex\">\n                        <label class=\"index\" style=\"font-family: Roboto-Regular\">#{{i +1}}</label>\n                      </div>\n                      <div class=\"informacionList\">\n                        <label style=\"color: #008894\">{{item.nombreProv}} </label>\n                        <p>{{item.cantidad}} {{item.totalOc}} OC · {{item.totalProd}} Productos</p>\n                        <h3 class=\"textoPiezas\">Fecha de Inspección: {{item.fecha}} </h3>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"totales\">\n                <label>#{{lista.length}}</label>\n                <label>{{totalesGrafica.totalProveedores}} Proveedores</label>\n                <label>{{totalesGrafica.totalOC}} OC</label>\n                <label>{{totalesGrafica.totalProducto}} Productos</label>\n              </div>\n            </div>\n          </div>\n          <div class=\"contenidoGrafica\">\n            <div class=\"grafica\">\n              <pn-donut-chart *ngIf=\"activarGrafica\" [data]=\"dataProveedores\" [tipoGrafica]=\"tipoGrafica\" [height]=\"'auto'\"></pn-donut-chart>\n            </div>\n          </div>\n        </div>\n      <pn-cargar-documento *ngIf=\"!vistaP\" [datosProveedor]=\"itemProveedor\" (regreVista)=\"cargarVista($event)\"></pn-cargar-documento>\n    </div>\n    <!--Terminan los componentes-->\n    <div style=\"width: 100%;height: 55px\">\n      <footer class=\"footer\">\n        <div class=\"datosFooter\">\n          <div class=\"Prioridad1\" *ngIf=\"vistaP\">\n            <label class=\"p1\">OC: </label> Orden de Compra\n          </div>\n          <div class=\"Prioridad1\" *ngIf=\"!vistaP\">\n            <label class=\"p1\">FEE: </label> Fecha Estimada de Entrega\n          </div>\n          <div class=\"Prioridad1\" *ngIf=\"!vistaP\">\n            <label class=\"p1\">DRE: </label> Días Restantes de Entrega\n          </div>\n        </div>\n      </footer>\n    </div>\n  </div>\n  <!--Termina area de trabajo-->\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/productos-doc-faltante/productos-doc-faltante.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.padre {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n.aux .asideNormalMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  min-width: 181px;\n  width: 321px;\n  height: 100%;\n  overflow-y: scroll; }\n.aux .asideNormalMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%; }\n.aux > .asideOcultarMenu {\n  -webkit-animation-name: ocultarMenu;\n          animation-name: ocultarMenu;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-transition: 1s ease-in-out;\n  transition: 1s ease-in-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 0px;\n  width: 0px; }\n.aux > .asideOcultarMenu > .articulo {\n    width: 0px; }\n.aux > .asideMostrarMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  -webkit-animation-name: mostrarMenu;\n          animation-name: mostrarMenu;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-y: scroll; }\n.aux > .asideMostrarMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%; }\n@-webkit-keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@-webkit-keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n@keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n.area {\n  width: 100%;\n  height: 100%;\n  overflow: auto; }\n.cabezera {\n  width: 100%;\n  height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-left: 13px;\n  padding-right: 13px;\n  border-bottom: 2px solid black;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n.cabezera > div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.cabezera > div > .title {\n      font-family: Novecento;\n      font-weight: bold;\n      font-size: 24px;\n      color: #008894;\n      text-align: right; }\n.etiqueta {\n  color: #5B5B5B;\n  font-size: 25px;\n  font-family: Novecento;\n  margin-bottom: 5px; }\n.img {\n  cursor: pointer; }\n.lista {\n  border-bottom: solid 1px #ECEEF0;\n  border-bottom: solid 1px #ECEEF0;\n  width: 100%;\n  min-height: 80px;\n  font-size: 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold;\n  line-height: 1.3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto; }\n.lista > .index {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    height: 52px; }\n.lista > .datosLst {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto; }\n.lista > .datosLst > p {\n      font-weight: normal; }\n.lista div:hover {\n    background-color: #ECEEF0; }\n.lista > .divActual {\n    background-color: #ECEEF0;\n    -webkit-box-shadow: 0 2px 4px -3px #008895;\n            box-shadow: 0 2px 4px -3px #008895; }\n.lista > .divActive {\n    background-color: #ECEEF0; }\n.lista > .divActive .dfSelect {\n      background: #008895 !important;\n      width: 5px !important;\n      color: #008895; }\n.lista > .divActive .datosLst label {\n      color: #008895;\n      padding-left: -2px;\n      font-family: \"Roboto-Bold\";\n      font-size: 28px; }\n.lista > .divActive .datosLst p {\n      font-family: \"Roboto-Bold\";\n      font-size: 24px;\n      color: #000000;\n      line-height: 26px; }\n.lista > .divActive .datosLst h3 {\n      font-family: \"Roboto-regular\";\n      font-size: 21px; }\n.textoPiezas {\n  font-family: \"Roboto-regular\";\n  font-size: 21px; }\n.titulo {\n  padding-left: 30px;\n  font-family: Novecentowide;\n  font-weight: Bold;\n  font-size: 24px; }\n.buscar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  height: 50px;\n  width: 100%;\n  border-style: solid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.buscar div {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    width: 100%;\n    border-radius: 102px 102px 102px 102px;\n    -moz-border-radius: 102px 102px 102px 102px;\n    -webkit-border-radius: 102px 102px 102px 102px;\n    border: 0.5px solid #BFC0C7;\n    height: 26px; }\n.buscar div div {\n      border: none;\n      border-radius: 0px 0px 0px 0px;\n      -moz-border-radius: 0px 0px 0px 0px;\n      -webkit-border-radius: 0px 0px 0px 0px;\n      border: 0px solid #000000;\n      width: 40px;\n      background: transparent;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-line-pack: center;\n          align-content: center; }\n.buscar div .buscar-input {\n      cursor: pointer;\n      background: transparent;\n      border-radius: 100px;\n      -moz-border-radius: 102px 102px 102px 102px;\n      border: 0px solid #000000;\n      width: 100%;\n      font-family: Helvetica;\n      font-size: 18px;\n      color: #AAA9AF;\n      outline: none;\n      padding-left: 5px; }\n.barraBusqueda {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.footer {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n  order: 1;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n  flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n  align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 57px;\n  max-height: 57px;\n  width: 100%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: row;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -ms-flex-pack: start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n  align-content: stretch;\n  -ms-flex-align: stretch;\n  -webkit-box-align: inherit;\n          align-items: inherit;\n  border-top: 2px solid black;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -ms-flex-positive: 1;\n      flex-grow: 1;\n  font-size: 14px;\n  min-width: 759px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n.linea {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  text-align: center; }\n.datosFooter {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: distribute;\n      align-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 14px;\n  min-width: 759px; }\n.Prioridad1, .Prioridad2, .Prioridad3, .Ambiente, .Congelación, .Refrigeración, .Pedimento {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-left: 0.7%;\n  margin-right: 0.7%; }\n.p1 {\n  color: #424242;\n  font-weight: bold; }\n.p2 {\n  color: #424242;\n  font-weight: bold; }\n.p3 {\n  color: #424242;\n  font-weight: bold; }\n.p1, .p2, .p3 {\n  margin-right: 6px; }\n.datosC {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-width: 1608px;\n  margin-left: 20px;\n  margin-right: 20px;\n  width: 98%; }\n.tituloGrafica {\n  font-size: calc((1vh + 1vw) / 2);\n  font-weight: bold;\n  font-family: Novecento; }\n.grafica {\n  height: 80%;\n  width: 70%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.contenidoGrafica {\n  width: 70%;\n  background: #ECEEF0;\n  height: 100%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n/******/\n.menu {\n  position: relative; }\n.menu:HOVER {\n  cursor: pointer; }\n.menu > div {\n  width: 20px;\n  height: 2px;\n  background: #000000;\n  margin: 5px; }\nsection {\n  position: absolute;\n  visibility: hidden;\n  height: 0; }\nsection.visible {\n  visibility: visible;\n  height: 74px;\n  overflow: auto;\n  width: 219px;\n  background: #FFFFFF;\n  z-index: 2;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  border-bottom: 1px solid #ECEEF0;\n  border-top: 1px solid #ECEEF0;\n  border-left: 1px solid #ECEEF0;\n  border-right: 1px solid #ECEEF0; }\n.listaHamburguesa {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 15px;\n  padding-right: 15px; }\n.listaHamburguesa > li {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    border-bottom: 0.5px solid #ECEEF0;\n    padding-bottom: 5px;\n    padding-top: 5px; }\n.listaHamburguesa > li:hover {\n    background-color: #ECEEF0; }\n.tituloCliente {\n  width: 50%;\n  height: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.titulosLista {\n  height: 10%;\n  padding-top: 15px;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-bottom: 15px;\n  min-height: 90px; }\n.tituloLista {\n  font-size: 24px;\n  font-family: Novecento;\n  font-weight: bold; }\n.organizarLista {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 10px;\n  position: relative;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 50%; }\n.primeraSec {\n  width: 30%;\n  background: #FFFFFF;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-left: 20px;\n  margin-right: 20px;\n  min-width: 350px; }\n.primeraSec > .listaSeccionUno {\n    height: 90%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n.primeraSec > .listaSeccionUno > div {\n      height: calc(100% - 30px);\n      border-bottom: 1px solid;\n      width: 100%;\n      border-top: 1px solid;\n      overflow: scroll; }\n.primeraSec > .listaSeccionUno > .totales {\n      height: 30px;\n      width: 100%;\n      border-bottom: 0;\n      border-top: 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n.informacionList {\n  font-family: Roboto;\n  width: 85%;\n  padding-top: 8px; }\n.informacionList label {\n    color: #008894;\n    font-weight: bold;\n    font-size: 24px;\n    font-family: Roboto;\n    line-height: 1; }\n.informacionList span {\n    min-height: 23px;\n    max-height: 46px;\n    font-weight: bold;\n    font-size: 20px;\n    color: #424242;\n    font-family: Roboto; }\n.informacionList h3 {\n    font-size: 17px;\n    font-family: Roboto;\n    color: #424242;\n    line-height: 1.5;\n    margin-top: 4px;\n    font-weight: 400; }\n.informacionList p {\n    font-family: Roboto;\n    font-weight: bold;\n    font-size: 24px;\n    color: #424242; }\n.numeroIndex {\n  font-size: 28px;\n  font-family: Roboto;\n  font-weight: 400;\n  color: #242424;\n  text-align: left;\n  padding-right: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding-top: 4px; }\n.subtitulo {\n  font-family: Roboto;\n  font-weight: 400;\n  font-size: 18px;\n  color: #424242;\n  text-align: left; }\n.imagenFlecha {\n  position: absolute;\n  right: 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  height: 100%; }\n.flechaInicio {\n  width: 100%;\n  -webkit-transform: rotate(-180deg);\n  transform: rotate(-180deg); }\n"

/***/ }),

/***/ "./src/app/components/productos-doc-faltante/productos-doc-faltante.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosDocFaltanteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_arribo_documento_arribo_documento_service__ = __webpack_require__("./src/app/services/arribo-documento/arribo-documento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
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






var ProductosDocFaltanteComponent = /** @class */ (function () {
    function ProductosDocFaltanteComponent(comunService, _trabajarArribo, coreContainer) {
        this.comunService = comunService;
        this._trabajarArribo = _trabajarArribo;
        this.coreContainer = coreContainer;
        this.classAsideMenu = 'asideNormalMenu';
        this.lista = [];
        this.listaUniveso = [];
        this.dataFacturacion = {
            titulo: 'Totales',
            labels: ['Totales'],
            valores: [6, 3],
            labelsExtras: [['Proveedores'], ['Productos'], ['OC']],
            labelsExtrasHover: ['Proveedores', 'Productos', 'OC'],
            valuesExtras: [6, 324, 15],
            valuesExtrasHover: [[6, 3, 1, 2], [324, 157, 50], [324, 157, 50]]
        };
        this.filtroProveedores = [];
    }
    ProductosDocFaltanteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs = this.comunService.recargar.subscribe(function (data) {
            if (data === 'docFaltante') {
                _this.activeMenu = false;
                _this.usuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
                _this.obtenerDatos(_this.usuario);
                _this.obtenerValoresMenu(_this.usuario);
            }
        });
        this.tipoOrden = 'Todos';
        this.vistaP = true;
        this.usuario = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
        this.obtenerDatos(this.usuario);
        this.obtenerValoresMenu(this.usuario);
    };
    /*Metodos para el menu de secciones*/
    ProductosDocFaltanteComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = "asideOcultarMenu";
        }
        else {
            this.classAsideMenu = "asideMostrarMenu";
        }
    };
    /*****/
    ProductosDocFaltanteComponent.prototype.abreCombo = function () {
        if (document.getElementById("section").className == "visible") {
            document.getElementById("section").className = "";
        }
        else {
            document.getElementById("section").className = "visible";
        }
    };
    ProductosDocFaltanteComponent.prototype.regresarVistaP = function () {
        this.vistaP = true;
    };
    ProductosDocFaltanteComponent.prototype.obtenerValoresMenu = function (idUsuario) {
        var _this = this;
        this.rolMaster = false;
        var roles = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getRoles();
        this._trabajarArribo.obtenerTotales(idUsuario).subscribe(function (data) {
            for (var i = 0; i < roles.length; i++) {
                if (roles[i] === 'Comprador_Master') {
                    _this.rolMaster = true;
                }
            }
            console.log(data);
            if (_this.usuario === 'LRosas') {
                _this.itemsMenu = [
                    { rol: 'GESTOR DE COMPRAS', active: true, menu: [{ nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', disable: true, tipo: 'valor', valor: data.current.ArriboDocumentos, select: true },
                            { nombre: 'Producto a Reclamo', url: 'productoReclamo', tipo: 'valor', valor: data.current.ProductoReclamo, select: false },
                            {
                                nombre: 'Cargar Saldo a Favor',
                                tipo: '',
                                valor: 0,
                                url: 'poolVisitas',
                                disable: true,
                                subMenu: [
                                    { nombre: 'Nota Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: false },
                                    { nombre: 'Saldo', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: false }
                                ],
                                select: false
                            }] },
                    { rol: 'GESTOR DE OPERACIONES', active: false, menu: [
                            { nombre: 'Consola de Prioridades', url: 'consolaPrioridades', tipo: 'flecha' },
                            { nombre: 'Consola de Envíos', url: 'consolaEnvio', select: false },
                            { nombre: 'Material en Stock', url: 'stock', select: false },
                            { nombre: 'Material en Destrucción', url: 'consolaDest', select: false }
                        ] }
                ];
            }
            else {
                _this.itemsMenu = [
                    { rol: 'GESTOR DE COMPRAS', active: true, menu: [
                            { nombre: 'Trabajar Arribo de Documentos', url: 'docFaltante', disable: true, tipo: 'valor', valor: data.current.ArriboDocumentos, select: true },
                            { nombre: 'Producto a Reclamo', url: 'productoReclamo', tipo: 'valor', valor: data.current.ProductoReclamo, select: false },
                            {
                                nombre: 'Cargar Saldo a Favor',
                                tipo: '',
                                valor: 0,
                                url: 'poolVisitas',
                                disable: true,
                                subMenu: [
                                    { nombre: 'Nota Crédito', tipo: 'valor', valor: data.current.Nota, url: 'saldoFavor/saldo-nota-credito', select: false },
                                    { nombre: 'Saldo', tipo: 'valor', valor: data.current.Saldo, url: 'saldos', select: false }
                                ],
                                select: false
                            }
                        ] }
                ];
            }
            _this.activeMenu = true;
        }, function (error) {
        });
    };
    ProductosDocFaltanteComponent.prototype.obtenerDatos = function (usuario) {
        var _this = this;
        this.lista = [];
        this.listaUniveso = [];
        this.coreContainer.openModal(0);
        this._trabajarArribo.documentacionFaltante(usuario).subscribe(function (data) {
            var listaGnr = data.current.lista;
            if (data.current.grafica && data.current.grafica !== undefined && data.current.grafica !== null) {
                _this.listaProveedores = data.current.grafica;
                _this.totalesGrafica = data.current.totales;
                _this.llenarValoresData();
                _this.calcularDatosParaGraficas();
            }
            else {
                _this.listaProveedores = [];
                _this.llenarValoresData();
            }
            var fechaFormat;
            var fecha;
            /*LLenado de lista*/
            for (var i = 0; i < listaGnr.length; i++) {
                fecha = new __WEBPACK_IMPORTED_MODULE_3__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(listaGnr[i].fechaInspeccion);
                _this.lista.push({ nombreProv: listaGnr[i].proveedor, fecha: fecha,
                    fechaInspeccion: listaGnr[i].fechaInspeccion,
                    totalOc: listaGnr[i].totalOC, totalProd: listaGnr[i].totalProducto,
                    idProveedor: listaGnr[i].idProveedor });
                _this.listaUniveso.push({ nombreProv: listaGnr[i].proveedor, fecha: fecha,
                    fechaInspeccion: listaGnr[i].fechaInspeccion,
                    totalOc: listaGnr[i].totalOC, totalProd: listaGnr[i].totalProducto,
                    idProveedor: listaGnr[i].idProveedor });
            }
            _this.coreContainer.closeModal(0);
        }, function (error) {
            _this.coreContainer.closeModal(0);
        });
    };
    ProductosDocFaltanteComponent.prototype.buscar = function (search) {
        var _this = this;
        var searchArrayAux = [];
        this.searchTerm = search;
        if (search === '') {
            this.lista = this.listaUniveso.slice();
        }
        else {
            this.listaUniveso.forEach(function (folio) {
                if (folio.nombreProv.toLowerCase().indexOf(_this.searchTerm.toLowerCase()) !== -1) {
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
    ProductosDocFaltanteComponent.prototype.ordenamientoFechaTramNue = function () {
        this.tipoOrden = 'Más Recientes';
        this.lista.sort(function (a, b) {
            if (a.fechaInspeccion < b.fechaInspeccion) {
                return 1;
            }
            if (a.fechaInspeccion > b.fechaInspeccion) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    };
    ProductosDocFaltanteComponent.prototype.ordenamientoFechaTramAnt = function () {
        this.tipoOrden = 'Más Antiguos';
        this.lista.sort(function (a, b) {
            if (a.fechaInspeccion > b.fechaInspeccion) {
                return 1;
            }
            if (a.fechaInspeccion < b.fechaInspeccion) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
    };
    ProductosDocFaltanteComponent.prototype.llenarValoresData = function () {
        var _this = this;
        this.filtroProveedores = [];
        for (var _i = 0, _a = this.listaProveedores; _i < _a.length; _i++) {
            var valor = _a[_i];
            this.filtroProveedores.push(valor.proveedor);
        }
        var valoresP = [];
        var valoresProv = [];
        for (var _b = 0, _c = this.listaProveedores; _b < _c.length; _b++) {
            var nombre = _c[_b];
            valoresProv.push([0, 0, 0]);
            valoresP.push(0);
        }
        if (this.listaProveedores.length > 0) {
            this.dataProveedores = {
                titulo: 'Totales',
                labels: this.filtroProveedores,
                valores: valoresP,
                labelsExtras: ['Proveedores', 'Productos', 'OC'],
                labelsExtrasHover: ['Proveedores', 'Productos', 'OC'],
                valuesExtras: [this.totalesGrafica.totalProveedores, this.totalesGrafica.totalProducto, this.totalesGrafica.totalOC],
                valuesExtrasHover: valoresProv
            };
            this.tipoGrafica = 'General';
        }
        else {
            this.dataProveedores = {
                titulo: 'Totales',
                labels: [""],
                valores: [1],
                labelsExtras: ['Proveedores', 'Productos', 'OC'],
                labelsExtrasHover: ['Proveedores', 'Productos', 'OC'],
                valuesExtras: [0, 0, 0],
                valuesExtrasHover: [[0, 0, 0]]
            };
            this.tipoGrafica = 'Gris';
            setTimeout(function () {
                _this.activarGrafica = true;
            }, 5);
        }
    };
    ProductosDocFaltanteComponent.prototype.calcularDatosParaGraficas = function () {
        for (var _i = 0, _a = this.listaProveedores; _i < _a.length; _i++) {
            var productos = _a[_i];
            this.llenarTotalesGraficas(this.dataProveedores, productos, 'PROVEEDORES');
        }
    };
    ProductosDocFaltanteComponent.prototype.llenarTotalesGraficas = function (total, elemento, graficaElegida) {
        var _this = this;
        switch (graficaElegida) {
            case 'PROVEEDORES':
                var valuesExtraAux = total.valuesExtras;
                var posicion1 = this.filtroProveedores.indexOf(elemento.proveedor);
                total.valuesExtrasHover[posicion1][0] += elemento.totalProveedores;
                total.valuesExtrasHover[posicion1][1] += +(elemento.totalProducto);
                total.valuesExtrasHover[posicion1][2] += elemento.totalOC;
                /*total.valuesExtras[1] += elemento.monto; // Aumento en clientes*/
                /*total.valuesExtras[1] = elemento.totalProducto;
                total.valuesExtras[0] += elemento.totalProveedores; // Total de Partidas
                total.valuesExtras[2] += elemento.totalOC;*/
                total.valores[posicion1] += elemento.totalProducto; // +(elemento.monto.toFixed(2)); //Monto total
                setTimeout(function () {
                    _this.activarGrafica = true;
                }, 5);
                break;
            default:
                break;
        }
    };
    ProductosDocFaltanteComponent.prototype.seleccionarItem = function (i, item) {
        this.cliente = item.nombreProv;
        this.itemProveedor = item;
        this.vistaP = false;
    };
    ProductosDocFaltanteComponent.prototype.cargarVista = function (valor) {
        var _this = this;
        this.obtenerDatos(this.usuario);
        this.obtenerValoresMenu(this.usuario);
        if (valor === true) {
            this.regresarVistaP();
        }
        setTimeout(function () {
            _this.activarGrafica = false;
        }, 5);
    };
    ProductosDocFaltanteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-productos-doc-faltante',
            template: __webpack_require__("./src/app/components/productos-doc-faltante/productos-doc-faltante.component.html"),
            styles: [__webpack_require__("./src/app/components/productos-doc-faltante/productos-doc-faltante.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_1__services_arribo_documento_arribo_documento_service__["a" /* ArriboDocumentoService */], __WEBPACK_IMPORTED_MODULE_4__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], ProductosDocFaltanteComponent);
    return ProductosDocFaltanteComponent;
}());



/***/ }),

/***/ "./src/app/components/productos-doc-faltante/productos-doc-faltante.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosDocFaltanteModule", function() { return ProductosDocFaltanteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__productos_doc_faltante_component__ = __webpack_require__("./src/app/components/productos-doc-faltante/productos-doc-faltante.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__productos_doc_faltante_routing_module__ = __webpack_require__("./src/app/components/productos-doc-faltante/productos-doc-faltante-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__ = __webpack_require__("./src/app/components/shared/donut-chart/donut-chart.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_menu_seccion_menu_seccion_module__ = __webpack_require__("./src/app/components/shared/menu-seccion/menu-seccion.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cargar_documento_cargar_documento_component__ = __webpack_require__("./src/app/components/productos-doc-faltante/cargar-documento/cargar-documento.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_file_upload_file_upload_module__ = __webpack_require__("./src/app/components/shared/file-upload/file-upload.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_combo_flecha_verde_combo_flecha_verde_module__ = __webpack_require__("./src/app/components/shared/combo-flecha-verde/combo-flecha-verde.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_combo_sin_border_combo_sin_border_module__ = __webpack_require__("./src/app/components/shared/combo-sin-border/combo-sin-border.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_menu_seccion_roles_menu_seccion_roles_module__ = __webpack_require__("./src/app/components/shared/menu-seccion-roles/menu-seccion-roles.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ProductosDocFaltanteModule = /** @class */ (function () {
    function ProductosDocFaltanteModule() {
    }
    ProductosDocFaltanteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__productos_doc_faltante_routing_module__["a" /* ProductosDocFaltanteRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_donut_chart_donut_chart_module__["a" /* DonutChartModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_menu_seccion_menu_seccion_module__["a" /* MenuSeccionModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_file_upload_file_upload_module__["a" /* FileUploadModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_combo_flecha_verde_combo_flecha_verde_module__["a" /* ComboFlechaVerdeModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_combo_sin_border_combo_sin_border_module__["a" /* ComboSinBorderComponentModule */],
                __WEBPACK_IMPORTED_MODULE_12__shared_menu_seccion_roles_menu_seccion_roles_module__["a" /* MenuSeccionRolesModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__productos_doc_faltante_component__["a" /* ProductosDocFaltanteComponent */],
                __WEBPACK_IMPORTED_MODULE_8__cargar_documento_cargar_documento_component__["a" /* CargarDocumentoComponent */]
            ]
        })
    ], ProductosDocFaltanteModule);
    return ProductosDocFaltanteModule;
}());



/***/ })

});
//# sourceMappingURL=productos-doc-faltante.module.chunk.js.map