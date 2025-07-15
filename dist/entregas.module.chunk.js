webpackJsonp(["entregas.module"],{

/***/ "./src/app/components/gestion/consultas/entregas/entregas-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntregasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entregas_component__ = __webpack_require__("./src/app/components/gestion/consultas/entregas/entregas.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EntregasRoutingModule = /** @class */ (function () {
    function EntregasRoutingModule() {
    }
    EntregasRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__entregas_component__["a" /* EntregasComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], EntregasRoutingModule);
    return EntregasRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/entregas/entregas.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div (click)=\"backMenu()\">\n    <img height=\"22px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_190.svg\" alt=\"\">\n  </div>\n  |\n  <div *ngIf=\"!detalle\">CONSULTA DE ENTREGAS</div>\n  <div *ngIf=\"detalle\" (click)=\"regresarConsulta()\" class=\"regresar\">CONSULTA DE ENTREGAS</div>\n  <div *ngIf=\"detalle\">|</div>\n  <div *ngIf=\"detalle\">DETALLES</div>\n</div>\n<div *ngIf=\"!detalle\" class=\"consultaResultados\">\n  <div [ngClass]=\"classPanel\">\n    <div class=\"filtroHeader\">\n      <div class=\"abrir\" (click)=\"openPanel()\">\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_193.svg\" alt=\"\">\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_188.svg\" alt=\"\">\n      </div>\n      <div *ngIf=\"hiddenClose\">\n        CERRAR\n        <div class=\"cerrar\" (click)=\"closePanel()\">\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"filtros\">\n      <div>\n\n      </div>\n      <div>\n        <div (click)=\"filtroAvanzada()\" [style.background]=\"avanzada?'#008895':'#C2C3C9'\">AVANZADA</div>\n        <div (click)=\"filtroRapida()\" [style.background]=\"!avanzada?'#008895':'#C2C3C9'\">RÁPIDA</div>\n      </div>\n\n      <div *ngIf=\"avanzada\" class=\"divAvanzada\">\n        <!--  Si  ya hay datos dentro del compenente se manda el < Gestion-filter/> con los datos\n              Y la propiedad IsLoader como verdadera\n            -->\n\n        <div *ngIf=\"isThereData;else loader\">\n          <gestion-filter [ElementsDropList]=\"Elements\" (valueFilter)=\"mostrarDatos($event)\" [IsImage]=\"IsImage\" [IsDate]=\"IsDate\"\n            [IsLoader]=\"isThereData\" [Clear]=\"Clear\" [istextbox]=\"istextbox\" style=\"width: 100%\"></gestion-filter>\n\n        </div>\n\n        <!--  Si  no hay datos dentro del compenente se manda el < Gestion-filter/> con solo\n              una propiedad\n              IsLoader como Falsa-->\n        <ng-template #loader>\n          <gestion-filter [IsLoader]=\"isThereData\" [Clear]=\"Clear\"></gestion-filter>\n        </ng-template>\n\n      </div>\n\n      <div *ngIf=\"!avanzada\" class=\"divRapida\">\n        <div>\n          <pq-radio-button [widthTotal]=\"'125px'\" [lstItems]=\"lstRadiosRapida\" [disble]=\"true\" [direction]=\"'row'\" [imgSize]=\"'12px'\"\n            (emitItem)=\"radioRapida($event)\" [width]=\"'15px'\"></pq-radio-button>\n        </div>\n        <div [formGroup]=\"filtroForm\">\n          <span>{{filtroConsultaRapida}}</span>\n          <input type=\"text\" formControlName=\"filtroDato\" name=\"filtroDato\">\n        </div>\n        <div (click)=\"filtroRapido()\">\n          <img height=\"20px\" src=\"assets/Images/visualizar.svg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"resultados\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\">\n    <div>\n      <div>\n        RESULTADOS\n      </div>\n      <div>\n      <img [style.margin-right]=\"'15px'\" height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/cobros/graficaminigris.svg\"\n        alt=\"\" (click)=\"showGraphic()\">\n      <img height=\"20px\" width=\"20px\" src=\"assets/Images/exportar.svg\" alt=\"\" (click)=\"download()\">\n      </div>\n    </div>\n    <div class=\"fechafactura\">\n      <div>\n        <div [style.min-width]=\"'50px'\">#</div>\n        <div [style.min-width]=\"'110px'\">Fecha</div>\n        <div [style.min-width]=\"'160px'\">Cliente</div>\n        <div [style.min-width]=\"'80px'\">Ruta</div>\n        <div [style.min-width]=\"'80px'\">Zona</div>\n        <div [style.min-width]=\"'80px'\">Factura</div>\n        <div [style.min-width]=\"'110px'\">Pedido</div>\n        <div [style.min-width]=\"'110px'\">Mensajero</div>\n        <div [style.min-width]=\"'100px'\">FER</div>\n        <div [style.min-width]=\"'100px'\">FR</div>\n        <div [style.min-width]=\"'110px'\">Estado</div>\n        <div [style.min-width]=\"'110px'\">Conforme</div>\n        <div [style.min-width]=\"'30px'\"></div>\n      </div>\n      <div>\n      <div *ngFor=\"let item of lstEntregas; let i = index\">\n        <div [style.min-width]=\"'50px'\">{{i + 1}}</div>\n        <div [style.min-width]=\"'110px'\">{{item.rutaRelacionada.fecha | dateFormatSlash}}</div>\n        <div [style.min-width]=\"'160px'\" style=\"line-height: 1.2\">{{item.nombre_Cliente}}</div>\n        <div [style.min-width]=\"'80px'\">{{item.rutaRelacionada.rutaMensajeria}}</div>\n        <div [style.min-width]=\"'80px'\">{{item.rutaRelacionada.zonaMensajeria}}</div>\n        <div [style.min-width]=\"'80px'\">{{item.numeroFactura}}</div>\n        <div [style.min-width]=\"'110px'\">{{item.cpedido}}</div>\n        <div [style.min-width]=\"'110px'\">{{item.rutaRelacionada.responsable}}</div>\n        <div [style.min-width]=\"'100px'\">{{item.rutaRelacionada.fer | dateFormatSlash}}</div>\n        <div [style.min-width]=\"'100px'\">{{item.rutaRelacionada.fr | dateFormatSlash}}</div>\n        <div [style.min-width]=\"'110px'\">{{item.rutaRelacionada.estadoRuta}}</div>\n        <div [style.min-width]=\"'110px'\">{{item.rutaRelacionada.conforme}}</div>\n        <div [style.min-width]=\"'30px'\" (click)=\"verDetalle(item)\">\n          <img class=\"detalle\" width=\"14px\" src=\"assets/Images/ir_detalle.svg\" alt=\"\">\n        </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"total\" *ngIf=\"lstEntregas!= null\">\n      <p>Total:\n        <span>{{lstEntregas.length}}</span>\n         <span>Entrega<span *ngIf=\"lstEntregas.length != 1\">s</span>\n          </span>\n      </p>\n    </div>\n  </div>\n</div>\n\n\n<!--Sección Detalles-->\n\n\n<div *ngIf=\"detalle\" class=\"consultaDetalles\">\n  <div [ngClass]=\"classPanel\">\n    <div class=\"filtroHeader\">\n      <div class=\"abrir\" (click)=\"openPanel()\">\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa.svg\" alt=\"\">\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa_verde.svg\" alt=\"\">\n      </div>\n      <div *ngIf=\"hiddenClose\">\n        CERRAR\n        <div class=\"cerrar\" (click)=\"closePanel()\">\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n    <div class=\"filtros\">\n      <div class=\"detalleCliente\"></div>\n      <div class=\"\"></div>\n      <div class=\"detalleTitulo\">Nivel de ingresos:</div>\n      <div class=\"detalleTexto\">{{entregaDetalle.nivelIngresocliente}}</div>\n      <div class=\"detalleTitulo\">Factura:</div>\n      <div class=\"detalleTexto\">{{entregaDetalle.numeroFactura}}</div>\n      <div class=\"detalleTitulo\">Vendió:</div>\n      <div class=\"detalleTexto\">{{entregaDetalle.facturadoPor}}</div>\n      <div class=\"detalleTitulo\">P. Interno:</div>\n      <div class=\"detalleTextoVerde\">\n          <span class=\"link\" style=\" color: #008895;\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pedidos/'+entregaDetalle.cpedido+'.pdf')\">   {{entregaDetalle.cpedido}}</span>\n      </div>\n      <div class=\"detalleTitulo\">Ruta:</div>\n      <div class=\"detalleTexto\">{{entregaDetalle.rutaRelacionada.rutaMensajeria}}</div>\n      <div class=\"detalleTitulo\">Zona:</div>\n      <div class=\"detalleTexto\">{{entregaDetalle.rutaRelacionada.zonaMensajeria}}</div>\n      <div class=\"detalleTitulo\">Monto Pedido:</div>\n      <div class=\"detalleTexto\">$ {{entregaDetalle.montoTotalPedido}} {{entregaDetalle.moneda}}</div>\n      <div class=\"detalleTitulo\">Total de Piezas:</div>\n      <div class=\"detalleTexto\">{{entregaDetalle.numeroPiezasFactura}}</div>\n      \n    </div>\n  </div>\n  <div class=\"contenidoFactura\">\n    <div class=\"detalleFactura\">\n      <div>DETALLE DE ENTREGA</div>\n      <div>\n        <div [ngClass]=\"i==0?'divActual':lstEntregasDetalleActive[i]\" *ngFor=\"let item of lstEntregasDetalle; let i = index\" (click)=\"resumenEntrega(i)\">\n          <div class=\"dfSelect\"></div>\n          <div>\n            <div>\n              <div>\n                  \n                <div ># {{i+1}} · {{item.numeroPiezasFactura}}pzs · ${{item.importe}} USD</div>\n                <div [style.color]=\"'#008895'\">F-<span class=\"link\" style=\" color: #008895;\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/'+item.facturadoPor+'/'+item.numeroFactura+'.pdf')\">{{item.numeroFactura}}</span> · \n                  <span class=\"link\" style=\" color: #008895;\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pedidos/'+item.cpedido+'.pdf')\"> {{item.cpedido}}</span>\n               \n                </div>  \n                \n              </div>\n              <div>\n                <div>FER+: {{item.rutaRelacionada.fer | dateFormatSlash}} </div> \n                <div>FR: {{item.rutaRelacionada.fr | dateFormatSlash}} </div>\n                 \n              </div>\n            </div>\n            <div>\n              <div>{{item.rutaRelacionada.rutaMensajeria}}   {{item.rutaRelacionada.zonaMensajeria}}  </div>\n              <div>\n                \n                <span [style.color]=\"'#981E30'\" *ngIf=\"item.rutaRelacionada.estadoRuta!=null && item.rutaRelacionada.estadoRuta==='Cerrada'\">{{item.rutaRelacionada.estadoRuta}}</span>\n                <span [style.color]=\"'#008895'\" *ngIf=\"item.rutaRelacionada.estadoRuta!=null && item.rutaRelacionada.estadoRuta==='Abierta'\">{{item.rutaRelacionada.estadoRuta}}</span>\n              </div>\n            </div>\n            <div>\n              <div> {{item.rutaRelacionada.responsable}}</div>\n              <div>\n                <span [style.color]=\"'#008895'\" *ngIf=\"item.rutaRelacionada.tiempoRealizacion!=null && item.rutaRelacionada.tiempoRealizacion!='FT'\">{{item.rutaRelacionada.tiempoRealizacion}}</span>\n                <span [style.color]=\"'#952936'\" *ngIf=\"item.rutaRelacionada.tiempoRealizacion!=null && item.rutaRelacionada.tiempoRealizacion==='FT'\">{{item.rutaRelacionada.tiempoRealizacion}}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div>\n        <div> TOTAL: {{lstEntregasDetalle.length}} ENTREGA\n          <span *ngIf=\"\">S</span> ·  USD</div>\n      </div>\n    </div>\n    <div class=\"lineaTiempo\">\n      <div>LÍNEA DE TIEMPO</div>\n      <div>\n        <div [ngClass]=\"lstLineaTiempoActive[i]\" *ngFor=\"let item of lstLineaTiempo; let i = index\" (click)=\"lineaTiempo(i)\">\n          <div class=\"ltSelect\"></div>\n          <div>\n            <div>\n              <div >{{item.proceso}}</div>\n              <div >{{item.responsable}}</div>\n              <div>FI {{item.fechaInicio | dateFormatSlash}}</div>\n              <div>FF {{item.fechaFin  | dateFormatSlash}}</div>\n              <div>TT {{item.tiempoProceso}} día<span *ngIf=\"item.tiempoProceso != 1\">s</span>\n              </div>\n            </div>\n            <div></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"detalleTiempo\">\n      <div>\n        {{estadoItemLineaTiempo}}\n      </div>\n      <div>\n          <!--TRAMITACIÓN-->\n          <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'Tramitación' && itemLineaTiempo != undefined\">\n            <div>\n              <div class=\"titulo\">Generales</div>\n              <div class=\"subTitulo\">Fecha de facturación:</div>\n              <div class=\"normal\">{{itemLineaTiempo.fechaInicio | dateFormatSlash }}</div>\n              <div class=\"subTitulo\">Fecha de tramitación:</div>\n              <div class=\"normal\">{{itemLineaTiempo.fechaInicio | dateFormatSlash }}</div>\n              <div class=\"subTitulo\">Tramitó:</div>\n              <div class=\"normal\">{{itemLineaTiempo.responsable}}</div>\n              <div class=\"subTitulo\">Etiquetas:</div>\n              <div class=\"normalVerde\" >\n                  <span *ngIf=\"itemLineaTiempo.etiquetas != null\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Etiquetas/'+itemLineaTiempo.etiquetas+'.pdf')\">{{itemLineaTiempo.etiquetas}}</span>\n              </div>\n              <div class=\"subTitulo\">Comentarios Gestor de ruta:</div>\n              <div class=\"normal\" *ngIf=\"itemLineaTiempo.comentarios ==''\">No Disponible</div>\n              <div class=\"normal\" *ngIf=\"itemLineaTiempo.comentarios != ''\" >{{itemLineaTiempo.comentarios}}</div>\n            </div>\n          </div>\n          <!--SURTIDO-->\n          <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'Surtido' && itemLineaTiempo != undefined\">\n              <div>\n                <div class=\"titulo\">Generales</div>\n                <div class=\"subTitulo\">Fecha tramitación:</div>\n                <div class=\"normal\">{{itemLineaTiempo.fechaTramitacion | dateFormatSlash }}</div>\n                <div class=\"subTitulo\">Fecha de surtido:</div>\n                <div class=\"normal\">{{itemLineaTiempo.fechaInicio | dateFormatSlash }}</div>\n                <div class=\"subTitulo\">Surtió:</div>\n                <div class=\"normal\">{{itemLineaTiempo.responsable}}</div>\n                <div class=\"subTitulo\">Etiqueta de surtido:</div>\n                <div class=\"normalVerde\" >\n                    <span *ngIf=\"itemLineaTiempo.etiquetas != null\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Etiquetas/'+itemLineaTiempo.etiquetas+'.pdf')\">{{itemLineaTiempo.etiquetas}}</span>\n                </div>\n                <div class=\"subTitulo\">Caja colectora:</div>\n                <div class=\"normalVerde\">\n\n                  <span *ngIf=\"itemLineaTiempo.folio != null\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Etiquetas/'+itemLineaTiempo.folio+'.pdf')\">{{itemLineaTiempo.folio}}</span>\n                </div>\n              </div>\n            </div>\n            <!--EJECUCIÓN-->\n            <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'Ejecución' && itemLineaTiempo != undefined\">\n                <div>\n                  <div class=\"titulo\">Generales</div>\n                  <div class=\"subTitulo\">Fecha surtido:</div>\n                  <div class=\"normal\">{{itemLineaTiempo.fechaSurtido | dateFormatSlash }}</div>\n                  <div class=\"subTitulo\">Fecha de asignación:</div>\n                  <div class=\"normal\">{{itemLineaTiempo.fechaInicio | dateFormatSlash }}</div>\n                  <div class=\"subTitulo\">Mensajero:</div>\n                  <div class=\"normal\">{{itemLineaTiempo.responsable}}</div>\n                  <div class=\"subTitulo\">Ruta:</div>\n                  <div class=\"normal\" >{{itemLineaTiempo.rutaMensajeria}}</div>\n                  <div class=\"subTitulo\">Zona:</div>\n                  <div class=\"normal\" >{{itemLineaTiempo.zonaMensajeria}}</div>\n                  <div class=\"subTitulo\">Conforme:</div>\n                  <div class=\"normal\" >{{itemLineaTiempo.conforme}}</div>\n                  <div class=\"subTitulo\">Entrega:</div>\n                  <div class=\"normal\" *ngIf=\"itemLineaTiempo.entrega!=null\">{{itemLineaTiempo.entrega}}</div>\n                  <div class=\"normal\" *ngIf=\"itemLineaTiempo.entrega===null\">Pendiente</div>\n                </div>\n            </div>\n            <!--CIERRE-->\n            <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'Cierre' && itemLineaTiempo != undefined\">\n                <div>\n                  <div class=\"titulo\">Generales</div>\n                  <div class=\"subTitulo\">Fecha cierre:</div>\n                  <div class=\"normal\">{{itemLineaTiempo.fechaCierre | dateFormatSlash }}</div>\n                  <div class=\"subTitulo\">Cerró:</div>\n                  <div class=\"normal\">{{itemLineaTiempo.responsable}}</div>\n                  <div class=\"subTitulo\">Documentos resultantes:</div>\n                  <div class=\"normalVerde\" *ngIf=\"itemLineaTiempo.documento!=null && itemLineaTiempo.documento!=undefined \" >\n                          <div class=\"normalVerde\" *ngFor=\"let docu of itemLineaTiempo.documento; let i = index\" >\n                            <div class=\"normalVerde\" *ngIf=\"docu.indexOf('AR')!=0\"> \n                              <div class=\"normalVerde\" *ngIf=\"docu.indexOf('DC')===0\">\n                                <span  (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/DC/'+docu+'.pdf')\">{{docu}}</span>\n                              </div>\n                              <div class=\"normalVerde\" *ngIf=\"docu.indexOf('RT')===0\">\n                                  <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/RT/'+docu+'.pdf')\">{{docu}}</span>\n                                </div>\n                              </div>\n                          </div>\n                  </div>\n                  <div class=\"normal\" *ngIf=\"itemLineaTiempo.documento== null\">Pendiente</div>\n                  <div class=\"subTitulo\">¿Entrega y revisión?:</div>\n                  <div class=\"normal\" *ngIf=\"itemLineaTiempo.entregaRevision==true\">\n                      <div class=\"normalVerde\" *ngIf=\"itemLineaTiempo.documento!=null && itemLineaTiempo.documento!=undefined \" >\n                          <div class=\"normalVerde\" *ngFor=\"let docu of itemLineaTiempo.documento; let i = index\" >\n                            <div class=\"normalVerde\" *ngIf=\"docu.indexOf('AR')===0\"> \n                                <span  (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/AR/'+docu+'.pdf')\"> SI</span>\n                              </div>\n                        </div>\n                  </div> \n                  </div>\n                  <div class=\"normal\" *ngIf=\"itemLineaTiempo.entregaRevision==false\">Pendiente</div>\n                  <div class=\"subTitulo\">Refacturación:</div>\n                  <div class=\"normal\">{{itemLineaTiempo.refacturacion}}</div>\n                </div>\n            </div>\n            <!--ENTREGA-->\n            <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'Entrega' && itemLineaTiempo != undefined\">\n              <div>\n                <div class=\"titulo\">Generales</div>\n                <div class=\"subTitulo\">Fecha facturacion:</div>\n                <div class=\"normal\">{{itemLineaTiempo.fechaFacturacion | dateFormatSlash }}</div>\n                <div class=\"subTitulo\">Factura:</div>\n                <div class=\"normalVerde\">\n                  <span style=\" color: #008895;\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/'+itemLineaTiempo.fpor+'/'+itemLineaTiempo.etiquetas+'.pdf')\">{{itemLineaTiempo.etiquetas}}</span>\n              \n                </div>\n                <div class=\"subTitulo\">Fecha tramitación:</div>\n                <div class=\"normal\" >{{itemLineaTiempo.fechaTramitacion | dateFormatSlash }}</div>\n                <div class=\"subTitulo\">Fecha surtido:</div>\n                <div class=\"normal\">{{itemLineaTiempo.fechaSurtido | dateFormatSlash }}</div>\n                <div class=\"subTitulo\">Ejecución:</div>\n                <div class=\"normal\" >{{itemLineaTiempo.fechaEjecucion | dateFormatSlash }}</div>\n                <div class=\"subTitulo\">Cierre:</div>\n                <div class=\"normal\">{{itemLineaTiempo.fechaCierre | dateFormatSlash }}</div>\n                <div class=\"subTitulo\">Conforme:</div>\n                <div class=\"normal\">{{itemLineaTiempo.conforme}}</div>\n                <div class=\"subTitulo\">Entrega:</div>\n                <div class=\"normal\">{{itemLineaTiempo.entrega}}</div>\n                <div class=\"subTitulo\">Notificado de entrega:</div>\n                <div class=\"normalVerde\">\n\n                    <span style=\" color: #008895;\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/ConfirmacionEntrega/'+itemLineaTiempo.referencia+'.pdf')\">{{itemLineaTiempo.referencia}}</span>\n                </div>\n              </div>\n          </div>\n        </div>\n\n    </div>\n   \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/entregas/entregas.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: rgba(0, 137, 149, 0.02); }\n:host > div:nth-of-type(1) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    background: #008895;\n    height: 41px;\n    color: #FFFFFF;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 12px;\n    padding: 0px 20px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n:host > div:nth-of-type(1) > div:nth-of-type(1) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-right: 20px;\n      cursor: pointer; }\n:host > div:nth-of-type(1) > div:nth-of-type(2) {\n      margin-left: 20px; }\n:host > div:nth-of-type(1) > div:nth-of-type(3) {\n      margin-left: 20px; }\n:host > div:nth-of-type(1) > div:nth-of-type(4) {\n      margin-left: 20px; }\n:host > div:nth-of-type(1) > .regresar {\n      cursor: pointer;\n      font-weight: 200; }\n:host > div:nth-of-type(2) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    height: calc(100vh - 170px);\n    width: 100%; }\n:host > div:nth-of-type(2) > .panelNormal {\n      background: #FFFFFF;\n      height: 100%;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      width: 321px;\n      min-width: 321px;\n      overflow-y: scroll;\n      padding-bottom: 60px; }\n:host > div:nth-of-type(2) > .panelOcultar {\n      background: #FFFFFF;\n      -webkit-animation-name: ocultarPanel;\n              animation-name: ocultarPanel;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 15px 15px; }\n:host > div:nth-of-type(2) > .panelOcultar .filtros {\n        display: none; }\n:host > div:nth-of-type(2) > .panelMostrar {\n      background: #FFFFFF;\n      -webkit-animation-name: mostar;\n              animation-name: mostar;\n      -webkit-animation-duration: 0.5s;\n              animation-duration: 0.5s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      overflow-y: scroll; }\n:host > div:nth-of-type(2) .filtroHeader {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #424242;\n      font-size: 10px;\n      margin-bottom: 20px; }\n:host > div:nth-of-type(2) .filtroHeader > .abrir {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        cursor: pointer;\n        min-height: 22px; }\n:host > div:nth-of-type(2) .filtroHeader > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n:host > div:nth-of-type(2) .filtroHeader > div:nth-of-type(2) > .cerrar {\n          margin-left: 9px;\n          cursor: pointer; }\n:host > div:nth-of-type(2) .filtros {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      border-top: 1px solid #424242; }\n:host > div:nth-of-type(2) .filtros > div:nth-of-type(1) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        height: 50px;\n        border-bottom: 1px solid #ECEEF0;\n        padding-top: 15px;\n        padding-bottom: 20px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n:host > div:nth-of-type(2) .filtros > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        color: #FFFFFF;\n        font-size: 14px; }\n:host > div:nth-of-type(2) .filtros > div:nth-of-type(2) > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          cursor: pointer;\n          width: 140px;\n          height: 25px;\n          margin-right: 1px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        margin-top: 15px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            width: 130px;\n            font-size: 16px;\n            color: #424242; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) > div > div {\n              margin-top: 6px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(2) {\n          border-bottom: 1px solid #424242;\n          padding-bottom: 18px;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n            margin-top: 15px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(3) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          margin-top: 18px;\n          background: #424242;\n          width: 100%;\n          height: 35px;\n          cursor: pointer; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(1) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        height: 53px;\n        padding-top: 10px;\n        border-bottom: 1px solid #ECEEF0; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        margin-top: 15px;\n        padding-bottom: 18px;\n        border-bottom: 1px solid #424242; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(2) > input {\n          height: 25px;\n          border: 1px solid #ECEEF0;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          margin-top: 5px; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(3) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin-top: 18px;\n        background: #424242;\n        width: 100%;\n        height: 35px;\n        cursor: pointer; }\n:host > div:nth-of-type(2) > div:nth-of-type(2) {\n      height: 100%;\n      width: 100%;\n      background: rgba(0, 137, 149, 0.02); }\n:host > div:nth-of-type(2) > .resultados {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding: 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) {\n        border-bottom: 3px solid #424242;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        padding-bottom: 10px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(1) {\n          font-size: 22px; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(2) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          flex-direction: row-revesrse;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(2) > img {\n            cursor: pointer;\n            height: 30px;\n            width: 30px; }\n:host > div:nth-of-type(2) > .resultados > .total {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -ms-flex-line-pack: center;\n            align-content: center;\n        min-height: 30px;\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end; }\n:host .fechafactura {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow-x: scroll; }\n:host .fechafactura > div:nth-of-type(1) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      border-bottom: 1px solid #424242;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 1250px;\n      min-height: 57px; }\n:host .fechafactura > div:nth-of-type(1) > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        min-height: 57px;\n        max-width: 160px;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        text-align: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n:host .fechafactura > div:nth-of-type(2) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      overflow: scroll;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 1250px; }\n:host .fechafactura > div:nth-of-type(2) > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        min-height: 70px;\n        border-bottom: 1px solid #C2C3C9; }\n:host .fechafactura > div:nth-of-type(2) > div > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          max-width: 160px;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          font-size: 12px;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          text-align: center; }\n:host .fechacobro {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow-x: scroll; }\n:host .fechacobro > div:nth-of-type(1) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      border-bottom: 1px solid #424242;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 2785px;\n      min-height: 57px; }\n:host .fechacobro > div:nth-of-type(1) > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        min-height: 57px;\n        max-width: 160px;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        text-align: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n:host .fechacobro > div:nth-of-type(2) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      overflow: scroll;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 2788px; }\n:host .fechacobro > div:nth-of-type(2) > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        min-height: 70px;\n        border-bottom: 1px solid #C2C3C9; }\n:host .fechacobro > div:nth-of-type(2) > div > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          max-width: 160px;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          font-size: 12px;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          text-align: center; }\n:host > .fechacobroRapida {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow-x: scroll; }\n:host > .fechacobroRapida > div:nth-of-type(1) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      border-bottom: 1px solid #424242;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 1425px;\n      min-height: 57px; }\n:host > .fechacobroRapida > div:nth-of-type(1) > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        min-height: 57px;\n        max-width: 160px;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        text-align: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n:host > .fechacobroRapida > div:nth-of-type(2) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      overflow: scroll;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 1425px; }\n:host > .fechacobroRapida > div:nth-of-type(2) > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        min-height: 70px;\n        border-bottom: 1px solid #C2C3C9; }\n:host > .fechacobroRapida > div:nth-of-type(2) > div > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          max-width: 160px;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          font-size: 12px;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          text-align: center; }\n:host > .consultaDetalles {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    height: calc(100vh - 170px);\n    width: 100%; }\n:host > .consultaDetalles > .panelNormal {\n      background: #FFFFFF;\n      height: 100%;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      width: 321px;\n      min-width: 321px;\n      overflow-y: scroll;\n      padding-bottom: 70px; }\n:host > .consultaDetalles > .panelOcultar {\n      background: #FFFFFF;\n      -webkit-animation-name: ocultarPanel;\n              animation-name: ocultarPanel;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 15px 15px; }\n:host > .consultaDetalles > .panelOcultar .filtros {\n        display: none; }\n:host > .consultaDetalles > .panelMostrar {\n      background: #FFFFFF;\n      -webkit-animation-name: mostar;\n              animation-name: mostar;\n      -webkit-animation-duration: 0.5s;\n              animation-duration: 0.5s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      overflow-y: scroll; }\n:host > .consultaDetalles .filtroHeader {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #424242;\n      font-size: 10px;\n      margin-bottom: 20px; }\n:host > .consultaDetalles .filtroHeader > .abrir {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        cursor: pointer;\n        min-height: 22px; }\n:host > .consultaDetalles .filtroHeader > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n:host > .consultaDetalles .filtroHeader > div:nth-of-type(2) > .cerrar {\n          margin-left: 9px;\n          cursor: pointer; }\n:host > .consultaDetalles .filtros {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      border-top: 1px solid #424242;\n      border-bottom: 1px solid #424242;\n      padding-bottom: 25px; }\n:host > .consultaDetalles .filtros > .detalleCliente {\n        font-size: 16px;\n        color: #424242;\n        font-weight: bold;\n        margin-top: 15px; }\n:host > .consultaDetalles .filtros > .detalleTitulo {\n        font-size: 16px;\n        color: #424242;\n        font-weight: 400;\n        margin-top: 20px; }\n:host > .consultaDetalles .filtros > .detalleTexto {\n        font-size: 16px;\n        color: #424242;\n        font-weight: 200; }\n:host > .consultaDetalles .filtros > .detalleTextoVerde {\n        font-size: 16px;\n        color: #008895 !important;\n        font-weight: 300; }\n:host > .consultaDetalles > .contenidoFactura {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      height: calc(100vh - 170px);\n      width: 100%;\n      overflow: scroll; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura {\n        min-width: 592px;\n        padding: 15px 20px; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(1) {\n          font-size: 22px;\n          font-weight: bold; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) {\n          margin-top: 20px;\n          border-top: 1px solid #424242;\n          border-bottom: 1px solid #979797; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            border-bottom: 1px solid #FFFFFF; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div > div:nth-of-type(1) {\n              min-width: 8px;\n              background: transparent; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div > div:nth-of-type(2) {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: vertical;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: column;\n                      flex-direction: column;\n              padding: 5px 10px;\n              width: 100%;\n              cursor: pointer; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div > div:nth-of-type(2) > div {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-orient: horizontal;\n                -webkit-box-direction: normal;\n                    -ms-flex-direction: row;\n                        flex-direction: row;\n                -webkit-box-pack: justify;\n                    -ms-flex-pack: justify;\n                        justify-content: space-between;\n                margin: 5px 0px; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div:nth-of-type(2) {\n                  -webkit-box-pack: end;\n                      -ms-flex-pack: end;\n                          justify-content: flex-end; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div:hover {\n            background-color: #FFFFFF; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > .divActual {\n            background-color: #FFFFFF;\n            -webkit-box-shadow: 0 2px 4px -3px #008895;\n                    box-shadow: 0 2px 4px -3px #008895; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > .divActual > div:nth-of-type(1) {\n              min-width: 8px;\n              background: #008895; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > .divActive {\n            background-color: #FFFFFF; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(3) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -ms-flex-line-pack: center;\n              align-content: center;\n          width: 100%;\n          margin-top: 15px;\n          font-size: 14px;\n          color: #424242;\n          font-weight: 300; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo {\n        min-width: 592px;\n        background: #FFFFFF;\n        padding: 15px 20px; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(1) {\n          font-size: 22px;\n          font-weight: bold;\n          color: #008895; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) {\n          margin-top: 20px;\n          border-top: 1px solid #424242;\n          border-bottom: 1px solid #979797; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            cursor: pointer; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(1) {\n              min-width: 8px;\n              background: transparent; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-orient: vertical;\n                -webkit-box-direction: normal;\n                    -ms-flex-direction: column;\n                        flex-direction: column;\n                padding: 10px 10px;\n                width: 100%; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) {\n                  font-size: 18px;\n                  font-weight: bold;\n                  color: #424242;\n                  margin-bottom: 15px; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) {\n                  font-size: 16px;\n                  color: #008895;\n                  margin-bottom: 2px; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) {\n                  font-size: 16px;\n                  color: #F3B23F;\n                  margin-bottom: 2px; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) {\n                  font-size: 16px;\n                  color: #571C7B;\n                  margin-bottom: 2px; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(5) {\n                  font-size: 16px;\n                  color: #981E30;\n                  margin-bottom: 2px; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div:hover {\n            background-color: rgba(0, 137, 149, 0.05); }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > .divActive {\n            background-color: rgba(0, 137, 149, 0.05); }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > .divActive > div:nth-of-type(1) {\n              min-width: 8px;\n              background: #008895; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo {\n        min-width: 592px;\n        padding-top: 15px; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(1) {\n          font-size: 22px;\n          font-weight: bold;\n          padding: 0px 20px; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) {\n          border-top: 1px solid #424242;\n          margin: 20px 20px;\n          overflow: scroll;\n          max-height: calc(100vh - 228px); }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div {\n            border-bottom: 1px solid #D8D8D8; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .titulo {\n              font-size: 18px;\n              color: #008895;\n              margin-top: 20px;\n              margin-bottom: 10px; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .subTitulo {\n              font-size: 16px;\n              font-weight: 400;\n              color: #424242;\n              margin-bottom: 3px; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normal {\n              font-size: 16px;\n              font-weight: 200;\n              color: #424242;\n              margin-bottom: 25px; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde {\n              font-size: 16px;\n              font-weight: 200;\n              margin-bottom: 25px;\n              color: #008895; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde > span {\n                cursor: pointer; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde:hover > span {\n              text-decoration: underline; }\n:host > .fechacobroRapida {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow-x: scroll; }\n:host > .fechacobroRapida > div:nth-of-type(1) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      border-bottom: 1px solid #424242;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 1250px;\n      min-height: 57px; }\n:host > .fechacobroRapida > div:nth-of-type(1) > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        min-height: 57px;\n        max-width: 160px;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        text-align: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n:host > .fechacobroRapida > div:nth-of-type(2) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      overflow: scroll;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 1250px; }\n:host > .fechacobroRapida > div:nth-of-type(2) > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        min-height: 70px;\n        border-bottom: 1px solid #C2C3C9; }\n:host > .fechacobroRapida > div:nth-of-type(2) > div > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          max-width: 160px;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          font-size: 12px;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          text-align: center; }\n@-webkit-keyframes ocultarPanel {\n  from {\n    min-width: 321px; }\n  to {\n    min-width: 50px; } }\n@keyframes ocultarPanel {\n  from {\n    min-width: 321px; }\n  to {\n    min-width: 50px; } }\n@-webkit-keyframes mostar {\n  from {\n    width: 50px; }\n  to {\n    width: 321px; } }\n@keyframes mostar {\n  from {\n    width: 50px; }\n  to {\n    width: 321px; } }\n:host .w3-animate-right {\n    position: relative;\n    -webkit-animation: animateright 0.4s;\n            animation: animateright 0.4s; }\n@-webkit-keyframes animateright {\n  from {\n    right: -900px;\n    opacity: 0; }\n  to {\n    right: 0;\n    opacity: 1; } }\n@keyframes animateright {\n  from {\n    right: -900px;\n    opacity: 0; }\n  to {\n    right: 0;\n    opacity: 1; } }\n:host .w3-animate-left {\n    position: relative;\n    -webkit-animation: animateleft 0.8s;\n            animation: animateleft 0.8s; }\n@-webkit-keyframes animateleft {\n  from {\n    left: -50px;\n    opacity: 0; }\n  to {\n    left: 0;\n    opacity: 1; } }\n@keyframes animateleft {\n  from {\n    left: -50px;\n    opacity: 0; }\n  to {\n    left: 0;\n    opacity: 1; } }\n:host .GlobalContainer-graphic-Component {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n:host .GlobalContainer-graphic-Component .GraphicsContainer-graphic-Component {\n      width: 100%;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      background: #f7fbfb; }\n:host .GlobalContainer-graphic-Component .Filter-Container-graphic-Component {\n      width: 300px;\n      height: 100%;\n      background: #424242; }\n:host .GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Tabgraphic-Component {\n        position: absolute;\n        right: 290px;\n        top: 1%;\n        background: #424242;\n        cursor: pointer;\n        width: 50px;\n        height: 35px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-line-pack: center;\n            align-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n:host .GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component {\n        margin-left: 17px;\n        width: 100%;\n        height: 100%; }\n:host .GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .totals-filter-graphic-Component {\n          width: 100%;\n          background: transparent;\n          height: 10%;\n          color: #fff;\n          border-style: solid;\n          border-bottom: 1px solid #008895;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -ms-flex-line-pack: start;\n              align-content: flex-start;\n          -ms-flex-line-pack: end;\n              align-content: flex-end;\n          -webkit-box-align: end;\n              -ms-flex-align: end;\n                  align-items: flex-end;\n          padding-bottom: 10px; }\n:host .GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .Results-filter-graphic-Component {\n          width: 100%;\n          background: transparent;\n          height: 18%;\n          color: #fff;\n          border-style: solid;\n          border-top: 1px solid #008895;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -ms-flex-line-pack: start;\n              align-content: flex-start;\n          -ms-flex-line-pack: end;\n              align-content: flex-end;\n          -webkit-box-align: end;\n              -ms-flex-align: end;\n                  align-items: flex-end;\n          padding-bottom: 10px;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center; }\n:host .GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .filters-graphic-Component {\n          width: 100%;\n          background: transparent;\n          height: 40%;\n          color: #fff;\n          border-style: solid;\n          border-bottom: 1px solid #008895;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -ms-flex-line-pack: start;\n              align-content: flex-start;\n          -ms-flex-line-pack: end;\n              align-content: flex-end;\n          -webkit-box-align: end;\n              -ms-flex-align: end;\n                  align-items: flex-end;\n          padding-bottom: 10px; }\n:host .circleGreen {\n    height: 15px;\n    width: 15px;\n    background-color: #91BE5F;\n    border-radius: 50%;\n    margin-top: 28px; }\n:host .circleRed {\n    height: 15px;\n    width: 15px;\n    background-color: #952936;\n    border-radius: 50%;\n    margin-top: 28px; }\n:host .circleYellow {\n    height: 15px;\n    width: 15px;\n    background-image: url('cobr_flag.22ddfa47182dffa0b19b.svg');\n    border-radius: 50%;\n    margin-top: 28px; }\n:host .circlePurple {\n    height: 15px;\n    width: 15px;\n    background-color: #A9A9F5;\n    border-radius: 50%;\n    margin-top: 28px; }\n:host .circleDatePurple {\n    height: 12px;\n    width: 12px;\n    background-color: #AA65E7;\n    border-radius: 50%;\n    margin-top: 48px; }\n:host .circleDateGreen {\n    height: 12px;\n    width: 12px;\n    background-color: #439DC1;\n    border-radius: 50%;\n    margin-top: 21px; }\n:host .link {\n    cursor: pointer; }\n:host .link:hover {\n    text-decoration: underline; }\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/entregas/entregas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntregasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__ = __webpack_require__("./src/app/components/shared/filter/element.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_gestion_consulta_entregas_entregas_service__ = __webpack_require__("./src/app/services/gestion/consulta/entregas/entregas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_gestion_gestion_service__ = __webpack_require__("./src/app/services/gestion/gestion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__class_UtilFechas__ = __webpack_require__("./src/app/class/UtilFechas.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EntregasComponent = /** @class */ (function () {
    function EntregasComponent(router, coreComponent, _gestionService, _entregasService) {
        var _this = this;
        this.router = router;
        this.coreComponent = coreComponent;
        this._gestionService = _gestionService;
        this._entregasService = _entregasService;
        this.itemLineaTiempo = [];
        this.lstEntregasDetalleActive = [];
        this.lstEntregasDetalle = [];
        this.estadoItemLineaTiempo = "";
        this.lstLineaTiempoActive = [];
        this.lstLineaTiempo = [];
        this.detalle = false;
        this._utilFechas = new __WEBPACK_IMPORTED_MODULE_9__class_UtilFechas__["a" /* UtilFechas */]();
        this.IsDate = true;
        this.filtroConsultaRapida = "Folio de Factura";
        this.lstRadiosRapida = ['Folio de Factura', 'Pedido Interno'];
        this.classPanel = "panelNormal";
        this.hiddenClose = true;
        this.avanzada = true;
        this.fechaFacturacion = true;
        this.fechaCobros = false;
        this.isTableShow = true;
        this.totalDetalle = 0;
        this.Clear = true;
        this.dropClientes = [{ nombre: '--TODOS--', key: 0 }];
        this.itemsDropList = [{ nombre: '- - Todos - -' }, { nombre: 'nombre1' }, { nombre: 'nombre2' }];
        this.defaultSelected = { nombre: '- - Todos - -' };
        this.Llenar = function () {
            _this.Elements = [new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Clientes", _this.dropClientes, true),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Estado", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Cerrado', key: 1 },
                    { nombre: 'Abierto', key: 2 },
                ], true),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Mensajero", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'ABriseno', key: 1 },
                    { nombre: 'ARojas', key: 2 },
                    { nombre: 'AS', key: 3 },
                    { nombre: 'ERobledo', key: 4 },
                    { nombre: 'IPerez', key: 5 },
                    { nombre: 'JLOlivares', key: 6 },
                    { nombre: 'LMorales', key: 7 },
                    { nombre: 'MAFlores', key: 8 },
                    { nombre: 'MensajeroE1', key: 9 },
                    { nombre: 'MensajeroE2', key: 10 },
                    { nombre: 'VGonzalez', key: 11 }
                ], true),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Ruta", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Centroamérica', key: 1 },
                    { nombre: 'Foraneo', key: 2 },
                    { nombre: 'Guadalajara', key: 3 },
                    { nombre: 'Local', key: 4 },
                    { nombre: 'Resto del mundo', key: 5 },
                    { nombre: 'Sudamérica', key: 6 },
                ], true),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Conforme", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Pendiente', key: 1 },
                    { nombre: 'No aplica', key: 2 },
                    { nombre: 'SI', key: 3 },
                    { nombre: 'NO', key: 4 },
                ], true),
            ];
            //isThereData indica que ya no es necesario mostrar el loader
            _this.isThereData = true;
            _this.Clear = false;
        };
        this.IsImage = true;
    }
    EntregasComponent.prototype.ngOnInit = function () {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_4__class_Parametros_class__["a" /* Parametros */]();
        this.filtroForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            filtroDato: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]()
        });
        this.date = new Date();
        this.date2 = new Date();
        this._gestionService.dropClientes().subscribe(function (data) {
            _this.lstClientes = data.current;
            var lstAux = [];
            for (var _i = 0, _a = _this.lstClientes; _i < _a.length; _i++) {
                var item = _a[_i];
                lstAux.push({ nombre: item.valor, key: item.llave });
            }
            _this.dropClientes = _this.dropClientes.concat(lstAux);
            _this.Llenar();
        }, function (error) {
            console.log("error login");
            console.log(error);
        });
        this.facturaForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]()
        });
        this.avanzada = true;
        var cuerpo = {
            idCliente: 0,
            estado: "--TODOS--",
            mensajero: "--TODOS--",
            ruta: "--TODOS--",
            conforme: "--TODOS--",
            fechaInicio: new Date(),
            fechaFin: new Date(),
            facturaS: null,
            cPedido: null
        };
        this.obtenerEntregas(cuerpo);
    };
    EntregasComponent.prototype.obtenerEntregas = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._entregasService.obtenerEntregas(parametros).subscribe(function (data) {
            _this.lstEntregas = data.current;
            console.log(_this.lstEntregas);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    EntregasComponent.prototype.obtenerEntregasSinAviso = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._entregasService.obtenerEntregas(parametros).subscribe(function (data) {
            _this.lstEntregas = data.current;
            console.log(_this.lstEntregas);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    EntregasComponent.prototype.backMenu = function () {
        this.router.navigate(["protected/gestion/"]);
    };
    EntregasComponent.prototype.closePanel = function () {
        this.classPanel = "panelOcultar";
        this.hiddenClose = false;
    };
    EntregasComponent.prototype.openPanel = function () {
        if (!this.hiddenClose) {
            this.classPanel = "panelMostrar";
            this.hiddenClose = true;
        }
    };
    EntregasComponent.prototype.emitItem = function ($event) {
        console.log($event);
    };
    EntregasComponent.prototype.mostrarDatos = function ($event) {
        var cuerpo = {
            idCliente: $event.Datos[0].key,
            estado: $event.Datos[1].nombre,
            mensajero: $event.Datos[2].nombre,
            ruta: $event.Datos[3].nombre,
            conforme: $event.Datos[4].nombre,
            fechaInicio: $event.Fechas.fechaInicial,
            fechaFin: $event.Fechas.fechaFinal,
            facturaS: null,
            cPedido: null
        };
        this.obtenerEntregas(cuerpo);
    };
    EntregasComponent.prototype.filtroAvanzada = function () {
        this.avanzada = true;
        var cuerpo = {
            idCliente: 0,
            estado: "--TODOS--",
            mensajero: "--TODOS--",
            ruta: "--TODOS--",
            conforme: "--TODOS--",
            fechaInicio: new Date(),
            fechaFin: new Date(),
            facturaS: null,
            cPedido: null
        };
        this.obtenerEntregas(cuerpo);
    };
    EntregasComponent.prototype.radioRapida = function ($event) {
        console.log("Método radioRapida ");
        if ($event == 0) {
            this.filtroConsultaRapida = "Folio de Factura";
        }
        else if ($event == 1) {
            this.filtroConsultaRapida = "Pedido Interno";
        }
    };
    EntregasComponent.prototype.filtroRapido = function () {
        this.avanzada = false;
        if (this.filtroConsultaRapida == "Folio de Factura") {
            var cuerpo = {
                idCliente: 0,
                estado: "--TODOS--",
                mensajero: "--TODOS--",
                ruta: "--TODOS--",
                conforme: "--TODOS--",
                fechaInicio: new Date(),
                fechaFin: new Date(),
                facturaS: (this.filtroConsultaRapida == "Folio de Factura") ? this.filtroForm.get('filtroDato').value : "",
                cPedido: null
            };
            this.obtenerEntregas(cuerpo);
        }
        else {
            var cuerpo = {
                idCliente: 0,
                estado: "--TODOS--",
                mensajero: "--TODOS--",
                ruta: "--TODOS--",
                conforme: "--TODOS--",
                fechaInicio: new Date(),
                fechaFin: new Date(),
                facturaS: null,
                cPedido: (this.filtroConsultaRapida == "Pedido Interno") ? this.filtroForm.get('filtroDato').value : ""
            };
            this.obtenerEntregas(cuerpo);
        }
    };
    EntregasComponent.prototype.filtroRapida = function () {
        this.avanzada = false;
    };
    EntregasComponent.prototype.getFechaImpl = function ($event) {
        //console.log($event);
    };
    EntregasComponent.prototype.dropList = function (index, $event) {
    };
    EntregasComponent.prototype.ConvertToCSV = function (objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = "";
        for (var index in objArray[0]) {
            row += index + ',';
        }
        row = row.slice(0, -1);
        str += row + '\r\n';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '')
                    line += ',';
                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    };
    EntregasComponent.prototype.download = function () {
        var entregas = [];
        this.lstEntregas.forEach(function (entrega, index) {
            var cuerpo = {
                '#': index + 1,
                'Cliente': "\"" + entrega.nombre_Cliente + "\"",
                'Ruta': entrega.rutaRelacionada.rutaMensajeria,
                'Zona': entrega.rutaRelacionada.zonaMensajeria,
                'Factura': entrega.numeroFactura,
                'Pedido': entrega.cpedido,
                'Mensajero': entrega.rutaRelacionada.responsable,
                'FER': new __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(entrega.rutaRelacionada.fer),
                'FR': new __WEBPACK_IMPORTED_MODULE_8__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(entrega.rutaRelacionada.fr),
                'Estado': entrega.rutaRelacionada.estadoRuta,
                'Conforme': entrega.rutaRelacionada.conforme,
            };
            entregas.push(cuerpo);
        });
        var csvData = this.ConvertToCSV(entregas);
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'ConsultaEntregas-' + this._utilFechas.fechaDescarga(new Date()) + '.csv';
        a.click();
    };
    EntregasComponent.prototype.verDetalle = function (item) {
        this.entregaDetalle = item;
        this.detalle = true;
        var lstAux = [];
        this.obtenerLineaTiempoResumen(item.rutaRelacionada.idEvento);
        this.lstLineaTiempoActive = new Array(this.lstLineaTiempo.length).fill("");
        this.lstLineaTiempoActive[0] = "divActive";
        this.totalDetalle = 0;
        this.totalDetalle += item.montoTotalPedido;
        for (var _i = 0, _a = this.lstEntregas; _i < _a.length; _i++) {
            var entrega = _a[_i];
            if (entrega.nombre_Cliente === item.nombre_Cliente) {
                lstAux.push(entrega);
                this.totalDetalle += entrega.montoTotalPedido;
                console.log(entrega);
            }
        }
        this.lstEntregasDetalle = [];
        this.lstEntregasDetalle = this.lstEntregasDetalle.concat(lstAux);
        this.lstEntregasDetalleActive = new Array(this.lstEntregasDetalle.length).fill("");
        this.lstEntregasDetalleActive[0] = "divActual";
    };
    EntregasComponent.prototype.obtenerLineaTiempoResumen = function (idPD) {
        var _this = this;
        var cuerpo = {
            idPD: idPD
        };
        var etiquetas = [];
        this.coreComponent.openModal(0);
        this._entregasService.obtenerTiempoDeProceso(cuerpo).subscribe(function (data) {
            _this.lstLineaTiempo = [];
            if (data.current != undefined && data.current.length > 0) {
                var temp = [];
                for (var i = 0; i < data.current.length; i++) {
                    temp.push(data.current[i]);
                }
                _this.lstLineaTiempo = temp;
                _this.lstLineaTiempo.forEach(function (etiqueta, index) {
                    if (_this.lstLineaTiempo[index].documento != null) {
                        if (_this.lstLineaTiempo[index].documento.split(",")) {
                            _this.lstLineaTiempo[index].documento = _this.lstLineaTiempo[index].documento.split(",");
                            if (_this.lstLineaTiempo[index].documento.indexOf("AR") != 0) {
                                _this.lstLineaTiempo[index].documento = _this.lstLineaTiempo[index].documento;
                            }
                        }
                    }
                });
                _this.documentos = etiquetas;
                _this.lstLineaTiempoActive = new Array(_this.lstLineaTiempo.length).fill("");
                _this.lstLineaTiempoActive[0] = "divActive";
                _this.estadoItemLineaTiempo = _this.lstLineaTiempo[0].proceso;
                _this.itemLineaTiempo = _this.lstLineaTiempo[0];
            }
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    EntregasComponent.prototype.resumenEntrega = function (i) {
        this.lstEntregasDetalleActive = new Array(this.lstEntregasDetalle.length).fill("");
        this.lstEntregasDetalleActive[i] = "divActive";
        this.obtenerLineaTiempoResumen(this.lstEntregasDetalle[i].rutaRelacionada.idEvento);
    };
    EntregasComponent.prototype.lineaTiempo = function (i) {
        this.lstLineaTiempoActive = new Array(this.lstLineaTiempo.length).fill("");
        console.log(this.lstLineaTiempo[i]);
        this.lstLineaTiempoActive[i] = "divActive";
        this.estadoItemLineaTiempo = this.lstLineaTiempo[i].proceso;
        this.itemLineaTiempo = this.lstLineaTiempo[i];
        console.log("ESTADO: " + this.estadoItemLineaTiempo);
        switch (this.estadoItemLineaTiempo) {
            case "Tramitación":
                break;
        }
    };
    EntregasComponent.prototype.regresarConsulta = function () {
        this.detalle = false;
    };
    EntregasComponent.prototype.descargarPDF = function (archivo) {
        console.log(archivo);
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 800, height: 600 });
        PDFWindow.addSupport(newWin);
        newWin.loadURL(archivo);
    };
    EntregasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-entregas',
            template: __webpack_require__("./src/app/components/gestion/consultas/entregas/entregas.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/consultas/entregas/entregas.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_7__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_6__services_gestion_gestion_service__["a" /* GestionService */], __WEBPACK_IMPORTED_MODULE_5__services_gestion_consulta_entregas_entregas_service__["a" /* EntregasService */]])
    ], EntregasComponent);
    return EntregasComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/entregas/entregas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregasModule", function() { return EntregasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entregas_routing_module__ = __webpack_require__("./src/app/components/gestion/consultas/entregas/entregas-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entregas_component__ = __webpack_require__("./src/app/components/gestion/consultas/entregas/entregas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__ = __webpack_require__("./src/app/components/shared/radio-button/radio-button.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_filter_filter_module__ = __webpack_require__("./src/app/components/shared/filter/filter.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var EntregasModule = /** @class */ (function () {
    function EntregasModule() {
    }
    EntregasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__entregas_routing_module__["a" /* EntregasRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__["a" /* RadioButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_filter_filter_module__["a" /* FilterModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__entregas_component__["a" /* EntregasComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__entregas_component__["a" /* EntregasComponent */]
            ]
        })
    ], EntregasModule);
    return EntregasModule;
}());



/***/ })

});
//# sourceMappingURL=entregas.module.chunk.js.map