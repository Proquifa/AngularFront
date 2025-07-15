webpackJsonp(["facturacion.module"],{

/***/ "./src/app/components/gestion/consultas/facturacion/facturacion-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturacionRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facturacion_component__ = __webpack_require__("./src/app/components/gestion/consultas/facturacion/facturacion.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FacturacionRoutingModule = /** @class */ (function () {
    function FacturacionRoutingModule() {
    }
    FacturacionRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__facturacion_component__["a" /* FacturacionComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], FacturacionRoutingModule);
    return FacturacionRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/facturacion/facturacion.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div (click)=\"backMenu()\">\n    <img height=\"22px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_190.svg\" alt=\"\">\n  </div>\n  |\n  <div *ngIf=\"!detalle\">CONSULTA DE FACTURACIÓN</div>\n  <div *ngIf=\"detalle\" (click)=\"regresarConsulta()\" class=\"regresar\">CONSULTA DE FACTURACIÓN</div>\n  <div *ngIf=\"detalle\">|</div>\n  <div *ngIf=\"detalle\">DETALLES</div>\n</div>\n<div *ngIf=\"!detalle\" class=\"consultaResultados\">\n  <div [ngClass]=\"classPanel\">\n    <div class=\"filtroHeader\">\n      <div class=\"abrir\" (click)=\"openPanel()\">\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa.svg\" alt=\"\">\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa_verde.svg\" alt=\"\">\n      </div>\n      <div *ngIf=\"hiddenClose\">\n        CERRAR\n        <div class=\"cerrar\" (click)=\"closePanel()\">\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"filtros\">\n      <div>\n        <pq-radio-button [widthTotal]=\"'100px'\" [lstItems]=\"lstItems\" [disble]=\"true\" [direction]=\"'row'\" [imgSize]=\"'12px'\" (emitItem)=\"radioSistema($event)\"\n          [width]=\"'15px'\"></pq-radio-button>\n      </div>\n      <div>\n        <div (click)=\"filtroAvanzada()\" [style.background]=\"avanzada?'#008895':'#C2C3C9'\">AVANZADA</div>\n        <div (click)=\"filtroRapida()\" [style.background]=\"!avanzada?'#008895':'#C2C3C9'\">RÁPIDA</div>\n      </div>\n\n      <div *ngIf=\"avanzada\" class=\"divAvanzada\">\n        <!--  Si  ya hay datos dentro del compenente se manda el < Gestion-filter/> con los datos\n            Y la propiedad IsLoader como verdadera\n        -->\n        <div *ngIf=\"isThereData;else loader\">\n          <gestion-filter [ElementsDropList]=\"Elements\" (valueFilter)=\"mostrarDatos($event)\" [IsImage]=\"IsImage\" [IsDate]=\"IsDate\"\n            [IsLoader]=\"isThereData\" [Clear]=\"Clear\" style=\"width: 100%\"></gestion-filter>\n        </div>\n\n        <!--  Si  no hay datos dentro del compenente se manda el < Gestion-filter/> con solo\n            una propiedad\n            IsLoader como Falsa-->\n        <ng-template #loader>\n          <gestion-filter [IsLoader]=\"isThereData\" [Clear]=\"Clear\"></gestion-filter>\n        </ng-template>\n      </div>\n\n      <div *ngIf=\"!avanzada\" class=\"divRapida\">\n        <div>\n          <pq-radio-button [widthTotal]=\"'60px'\" [lstItems]=\"lstRadiosRapida\" [disble]=\"true\" [direction]=\"'row'\" [imgSize]=\"'12px'\"\n            (emitItem)=\"radioRapida($event)\" [width]=\"'15px'\"></pq-radio-button>\n        </div>\n\n        <div [formGroup]=\"filtroForm\">\n          <span>{{filtroConsultaRapida}}</span>\n          <input type=\"text\" formControlName=\"filtroDato\" name=\"filtroDato\">\n        </div>\n\n        <div (click)=\"filtroRapido()\">\n          <img height=\"20px\" src=\"assets/Images/visualizar.svg\" alt=\"\">\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"resultados\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\">\n    <div>\n      <div>\n        RESULTADOS\n      </div>\n      <div>\n        <img height=\"20px\" width=\"20px\" src=\"assets/Images/exportar.svg\" alt=\"\" (click)=\"download()\">\n        <img [style.margin-right]=\"'15px'\" height=\"20px\" width=\"20px\" src=\"assets/Images/descargar.svg\" alt=\"\" (click)=\"compressed_files()\">\n      </div>\n    </div>\n    <div class=\"sistema\" *ngIf=\"sistema && !fueraSistema\">\n      <div>\n        <div [style.min-width]=\"'50px'\">#</div>\n        <div [style.min-width]=\"'160px'\">Cliente</div>\n        <div [style.min-width]=\"'160px'\">Cobrador</div>\n        <div [style.min-width]=\"'180px'\">Razón social</div>\n        <div [style.min-width]=\"'160px'\">RFC</div>\n        <div [style.min-width]=\"'100px'\">Factura</div>\n        <div [style.min-width]=\"'160px'\">UUID</div>\n        <div [style.min-width]=\"'120px'\">Vendió</div>\n        <div [style.min-width]=\"'80px'\">Monto</div>\n        <div [style.min-width]=\"'160px'\">C. Pago</div>\n        <div [style.min-width]=\"'120px'\">F. Facturación</div>\n        <div [style.min-width]=\"'160px'\">Tipo</div>\n        <div [style.min-width]=\"'100px'\">Refacturada</div>\n        <div [style.min-width]=\"'100px'\">Estado</div>\n        <div [style.min-width]=\"'30px'\"></div>\n      </div>\n      <div>\n        <div *ngFor=\"let item of lstFacturas; let i = index\">\n          <div [style.min-width]=\"'50px'\">{{i + 1}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.nombre_cliente}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.cobrador}}</div>\n          <div [style.min-width]=\"'180px'\">{{item.rsocial}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.rfc}}</div>\n          <div [style.min-width]=\"'100px'\">{{item.factura}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.uuid}}</div>\n          <div [style.min-width]=\"'120px'\">{{item.fpor}}</div>\n          <div [style.min-width]=\"'80px'\" [style.justify-content]=\"'flex-end'\">{{item.importe | acFormatMoney}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.cpago}}</div>\n          <div [style.min-width]=\"'120px'\">{{item.fecha | dateFormatSlash}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.tipo}}</div>\n          <div [style.min-width]=\"'100px'\">{{item.refacturada}}</div>\n          <div [style.min-width]=\"'100px'\">{{item.estado}}</div>\n          <div [style.min-width]=\"'30px'\" (click)=\"verDetalle(item)\">\n            <img class=\"detalle\" width=\"14px\" src=\"assets/Images/ir_detalle.svg\" alt=\"\">\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"fueraSistema\" *ngIf=\"!sistema && !fueraSistema\">\n      <div>\n        <div [style.min-width]=\"'50px'\">#</div>\n        <div [style.min-width]=\"'160px'\">Folio</div>\n        <div [style.min-width]=\"'160px'\">UUID</div>\n        <div [style.min-width]=\"'160px'\">RFC</div>\n        <div [style.min-width]=\"'160px'\">Cliente</div>\n        <div [style.min-width]=\"'160px'\">Cobrador</div>\n        <div [style.min-width]=\"'160px'\">Vendió</div>\n        <div [style.min-width]=\"'160px'\">Fecha</div>\n        <div [style.min-width]=\"'100px'\">Monto</div>\n        <div [style.min-width]=\"'160px'\">Estado</div>\n      </div>\n      <div>\n        <div *ngFor=\"let item of lstFacturas; let i = index\">\n          <div [style.min-width]=\"'50px'\">{{i + 1}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.numeroFactura}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.uuid}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.rfc_Cliente}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.nombre_Cliente}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.cobrador}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.facturadoPor}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.fecha | dateFormatSlash}}</div>\n          <div [style.min-width]=\"'100px'\" [style.justify-content]=\"'flex-end'\">{{item.montoFacturaDLS | acFormatMoney}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.estado}}</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"fueraSistemaRapida\" *ngIf=\"fueraSistema\">\n      <div>\n        <div [style.min-width]=\"'50px'\">#</div>\n        <div [style.min-width]=\"'160px'\">Folio</div>\n        <div [style.min-width]=\"'160px'\">UUID</div>\n        <div [style.min-width]=\"'160px'\">Folio PC</div>\n        <div [style.min-width]=\"'160px'\">RFC</div>\n        <div [style.min-width]=\"'160px'\">Cliente</div>\n        <div [style.min-width]=\"'160px'\">Cobrador</div>\n        <div [style.min-width]=\"'160px'\">Vendió</div>\n        <div [style.min-width]=\"'160px'\">Fecha</div>\n        <div [style.min-width]=\"'100px'\">Monto</div>\n        <div [style.min-width]=\"'160px'\">Estado</div>\n      </div>\n      <div>\n        <div *ngFor=\"let item of lstFacturas; let i = index\">\n          <div [style.min-width]=\"'50px'\">{{i + 1}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.numeroFactura}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.uuid}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.folioPC}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.rfc_Cliente}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.nombre_Cliente}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.cobrador}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.facturadoPor}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.fecha | dateFormatSlash}}</div>\n          <div [style.min-width]=\"'100px'\" [style.justify-content]=\"'flex-end'\">{{item.montoFacturaDLS | acFormatMoney}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.estado}}</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"total\">\n      <p>Total:\n        <span>{{lstFacturas.length}}</span>\n        <span>Factura<span *ngIf=\"lstFacturas.length != 1\">s</span>\n        </span>\n      </p>\n    </div>\n\n  </div>\n</div>\n\n<div *ngIf=\"detalle\" class=\"consultaDetalles\">\n  <div [ngClass]=\"classPanel\">\n    <div class=\"filtroHeader\">\n      <div class=\"abrir\" (click)=\"openPanel()\">\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa.svg\" alt=\"\">\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa_verde.svg\" alt=\"\">\n      </div>\n      <div *ngIf=\"hiddenClose\">\n        CERRAR\n        <div class=\"cerrar\" (click)=\"closePanel()\">\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n    <div class=\"filtros\">\n      <div class=\"detalleCliente\">{{facturaDetalle.nombre_cliente}}</div>\n      <div class=\"detalleTitulo\">Factura:</div>\n      <div class=\"detalleTextoVerde\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/'+facturaDetalle.fpor+'/'+facturaDetalle.factura+'.pdf')\"> {{facturaDetalle.factura}}</div>\n      <div class=\"detalleTitulo\">Vendió:</div>\n      <div class=\"detalleTexto\">{{facturaDetalle.fpor}}</div>\n      <div class=\"detalleTitulo\">P. Interno:</div>\n      <div class=\"detalleTextoVerde\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pedidos/'+facturaDetalle.cpedido+'.pdf')\">{{facturaDetalle.cpedido}}</div>\n      <div class=\"detalleTitulo\">Referencia de Cliente:</div>\n      <div class=\"detalleTextoVerde\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos/'+facturaDetalle.doctoR+'.pdf')\">{{facturaDetalle.referencia}}</div>\n      <div class=\"detalleTitulo\">Monto:</div>\n      <div class=\"detalleTexto\">{{facturaDetalle.importe | acFormatMoney}} USD</div>\n      <div class=\"detalleTitulo\">Condiciones de Pago:</div>\n      <div class=\"detalleTexto\">{{facturaDetalle.cPago}}</div>\n      <div class=\"detalleTitulo\">Medio de Pago:</div>\n      <div class=\"detalleTexto\">{{facturaDetalle.medioPago}}</div>\n      <div class=\"detalleTitulo\">Fecha de Facturación:</div>\n      <div class=\"detalleTexto\">{{facturaDetalle.fecha | dateFormatSlash}}</div>\n      <div class=\"detalleTitulo\">FEP:</div>\n      <div class=\"detalleTexto\">\n        <span *ngIf=\"facturaDetalle.fep != null\">{{facturaDetalle.fep | dateFormatSlash}}</span>\n        <span *ngIf=\"facturaDetalle.fep == null\">Pendiente</span>\n      </div>\n      <div class=\"detalleTitulo\">Tipo:</div>\n      <div class=\"detalleTexto\">{{facturaDetalle.tipo}}</div>\n      <div class=\"detalleTitulo\">Medio:</div>\n      <div class=\"detalleTexto\">{{facturaDetalle.medio}}</div>\n    </div>\n  </div>\n  <div class=\"contenidoFactura\">\n    <div class=\"detalleFactura\">\n      <div>DETALLE DE FACTURA</div>\n      <div>\n        <div [ngClass]=\"i==0?'divActual':lstFacturasDetalleActive[i]\" *ngFor=\"let item of lstFacturasDetalle; let i = index\" (click)=\"resumenFactura(i)\">\n          <div class=\"dfSelect\"></div>\n          <div>\n            <div>\n              <div [style.color]=\"'#008895'\">F-{{item.factura}}</div>\n              <div>Fecha de Facturación: {{item.fecha | dateFormatSlash}}</div>\n            </div>\n            <div>\n              <div>{{item.importe | acFormatMoney}} USD</div>\n              <div *ngIf=\"item.estado == 'Por Cobrar'\">DRC:\n                <span *ngIf=\"item.drc != null\">{{item.drc}}</span>\n                <span *ngIf=\"item.drc == null\">Pendiente</span>\n              </div>\n              <div *ngIf=\"item.estado == 'Cobrada'\">Moroso:\n                <span [style.color]=\"item.moroso != 'No'?'#C1272D':'#39B54A'\">{{item.moroso}}</span>\n              </div>\n            </div>\n            <div>\n              <div>Total de Pzas: {{item.numPiezas}}</div>\n              <div [style.color]=\"item.estado != 'Cobrada'?'#C1272D':'#39B54A'\">{{item.estado}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div>\n        <div> TOTAL: {{lstFacturasDetalle.length}} FACTURA<span *ngIf=\"lstFacturasDetalle.length != 1\">S</span> · {{totalDetalle | acFormatMoney}} USD</div>\n      </div>\n    </div>\n    <div class=\"lineaTiempo\">\n      <div>LÍNEA DE TIEMPO</div>\n      <div *ngIf=\"lstLineaTiempo != undefined\">\n        <div [ngClass]=\"lstLineaTiempoActive[i]\" *ngFor=\"let item of lstLineaTiempo; let i = index\" (click)=\"lineaTiempo(i)\">\n          <div class=\"ltSelect\"></div>\n          <div>\n            <div>\n              <div>{{item.etapa}}</div>\n              <div>{{item.responsable}}</div>\n              <div>FI {{item.fechaInicio | dateFormatSlashHour}}</div>\n              <div>FF {{item.fechaFin | dateFormatSlashHour}}</div>\n              <div>TT {{item.totalProceso}} día<span *ngIf=\"item.totalProceso != 1\">s</span>\n              </div>\n            </div>\n            <div></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"detalleTiempo\">\n      <div style=\"text-transform: uppercase\">\n        {{estadoItemLineaTiempo}}\n      </div>\n      <div>\n        <!-- Credito -->\n        <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'FACTURACION' && itemLineaTiempo != undefined\">\n          <div>\n            <div class=\"titulo\">Generales</div>\n            <div class=\"subTitulo\">Fecha de facturación:</div>\n            <div class=\"normal\">{{itemLineaTiempo.fechaInicio | dateFormatSlashHour}}</div>\n            <div class=\"subTitulo\">Factura:</div>\n            <div class=\"normalVerde\">\n              <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/'+facturaDetalle.fpor+'/'+facturaDetalle.factura+'.pdf')\">{{itemLineaTiempo.referencia}}</span>\n            </div>\n            <div class=\"subTitulo\">Archivo XML:</div>\n            <div class=\"normalVerde\">\n              <span><a href=\"http://201.161.12.60:51725/SAP/Facturas/{{facturaDetalle.fpor}}/{{facturaDetalle.factura}}.xml\" download>{{itemLineaTiempo.referencia}}.xml</a></span>\n            </div>\n            <div class=\"subTitulo\">Facturó:</div>\n            <div class=\"normal\">{{itemLineaTiempo.responsable}}</div>\n            <div class=\"subTitulo\">Tipo de cambio:</div>\n            <div class=\"normal\">{{itemLineaTiempo.tcambio | acFormatMoney}}</div>\n            <div class=\"subTitulo\">Tipo:</div>\n            <div class=\"normal\">{{itemLineaTiempo.tipo}}</div>\n            <div class=\"subTitulo\">Medio:</div>\n            <div class=\"normal\">{{itemLineaTiempo.medio}}</div>\n          </div>\n          <div style=\"border-bottom: 0px\">\n            <div class=\"titulo\">Cargar factura a portal</div>\n            <div class=\"normal\">FI {{itemLineaTiempo.fechaInicioPortal | dateFormatSlashHour}} : FF {{itemLineaTiempo.fechaFinPortal | dateFormatSlashHour}}</div>\n            <div class=\"subTitulo\">Realizó:</div>\n            <div class=\"normal\">\n              <span *ngIf=\"itemLineaTiempo.fechaFinPortal != null\">{{itemLineaTiempo.contacto}}</span>\n              <span *ngIf=\"itemLineaTiempo.fechaFinPortal == null\">Pendiente</span>\n            </div>\n            <div class=\"subTitulo\">Comprobante portal:</div>\n            <div class=\"normalVerde\">\n              <span *ngIf=\"itemLineaTiempo.fechaFinPortal != null\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/ComprobantePortal/'+itemLineaTiempo.pedimento+'.pdf')\">Ver</span>\n              <span class=\"normal\" *ngIf=\"itemLineaTiempo.fechaFinPortal == null\">Pendiente</span>\n            </div>\n          </div>\n        </div>\n\n        <!-- Entrega -->\n        <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'ENTREGA' && itemLineaTiempo != undefined\">\n          <div>\n            <div class=\"titulo\">Generales</div>\n            <div class=\"subTitulo\">Fecha tramitación:</div>\n            <div class=\"normal\">{{lineaIiempoSelect.fechaInicio | dateFormatSlashHour}}</div>\n            <div class=\"subTitulo\">Fecha entrega:</div>\n            <div class=\"normal\">{{lineaIiempoSelect.fechaFin | dateFormatSlashHour}}</div>\n            <div class=\"subTitulo\">Conforme:</div>\n            <div class=\"normalVerde\"><span *ngIf=\"lineaIiempoSelect.conforme != ''\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/DC/'+lineaIiempoSelect.documento+'.pdf')\">{{lineaIiempoSelect.conforme}}</span><span class=\"normal\" *ngIf=\"lineaIiempoSelect.conforme == ''\">Pendiente</span></div>\n          </div>\n          <div>\n            <div class=\"titulo\">Tramitar ruta</div>\n            <div class=\"normal\">FI {{itemLineaTiempo[0].fechaInicio | dateFormatSlashHour}} : FF {{itemLineaTiempo[0].fechaFin | dateFormatSlashHour}}</div>\n            <div class=\"subTitulo\">Tramitó:</div>\n            <div class=\"normal\">\n              <span *ngIf=\"itemLineaTiempo[0].fechaFin != null\">{{itemLineaTiempo[0].responsable}}</span>\n              <span *ngIf=\"itemLineaTiempo[0].fechaFin == null\">Pendiente</span>\n            </div>\n            <div class=\"subTitulo\">Etiqueta:</div>\n            <div class=\"normalVerde\">\n              <span *ngIf=\"itemLineaTiempo[0].fechaFin != null\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Etiquetas/'+itemLineaTiempo[0].referencia+'.pdf')\">{{itemLineaTiempo[0].referencia}}</span>\n              <span class=\"normal\" *ngIf=\"itemLineaTiempo[0].fechaFin == null\">Pendiente</span>\n            </div>\n            <div class=\"subTitulo\">Comentarios gestor ruta:</div>\n            <div class=\"normalVerde\">\n              <span class=\"normal\" *ngIf=\"itemLineaTiempo[0].fechaFin != null && itemLineaTiempo[0].comentarios == ''\">ND</span>\n              <span *ngIf=\"itemLineaTiempo[0].fechaFin != null\">{{itemLineaTiempo[0].comentarios}}</span>\n              <span class=\"normal\" *ngIf=\"itemLineaTiempo[0].fechaFin == null\">Pendiente</span>\n            </div>\n          </div>\n          <div>\n            <div class=\"titulo\">Surtir ruta</div>\n            <div class=\"normal\">FI {{itemLineaTiempo[1].fechaInicio | dateFormatSlashHour}} : FF {{itemLineaTiempo[1].fechaFin | dateFormatSlashHour}}</div>\n            <div class=\"subTitulo\">Surtió:</div>\n            <div class=\"normal\">\n              <span *ngIf=\"itemLineaTiempo[1].fechaFin != null\">{{itemLineaTiempo[1].responsable}}</span>\n              <span *ngIf=\"itemLineaTiempo[1].fechaFin == null\">Pendiente</span>\n            </div>\n            <div class=\"subTitulo\">Surtido:</div>\n            <div style=\"margin-bottom: 25px\">\n              <span *ngIf=\"itemLineaTiempo[1].fechaFin != null\">\n                <span *ngFor=\"let item of itemLineaTiempo[1].referencia\">\n                  <span class=\"normalVerde\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Etiquetas/'+item+'.pdf')\"><span>{{item}}</span></span>&nbsp;&nbsp;\n                </span>\n              </span>\n              <span class=\"normal\" *ngIf=\"itemLineaTiempo[1].fechaFin == null\">Pendiente</span>\n            </div>\n            <div class=\"subTitulo\">Caja colectora:</div>\n            <div class=\"normalVerde\">\n              <span *ngIf=\"itemLineaTiempo[1].fechaFin != null\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Etiquetas/'+itemLineaTiempo[1].pedimento+'.pdf')\">{{itemLineaTiempo[1].pedimento}}</span>\n              <span class=\"normal\" *ngIf=\"itemLineaTiempo[1].fechaFin == null\">Pendiente</span>\n            </div>\n          </div>\n          <div  style=\"border-bottom: 0px;\">\n            <div class=\"titulo\">Asignar mensajero</div>\n            <div class=\"normal\">FI {{itemLineaTiempo[2].fechaInicio | dateFormatSlashHour}} : FF {{itemLineaTiempo[2].fechaFin | dateFormatSlashHour}}</div>\n            <div class=\"subTitulo\">Asignó:</div>\n            <div class=\"normal\">\n              <span *ngIf=\"itemLineaTiempo[2].fechaFin != null\">{{itemLineaTiempo[2].contacto}}</span>\n              <span *ngIf=\"itemLineaTiempo[2].fechaFin == null\">Pendiente</span>\n            </div>\n            <div class=\"subTitulo\">Mensajero asignado:</div>\n            <div class=\"normal\">\n              <span *ngIf=\"itemLineaTiempo[2].fechaFin != null\">{{itemLineaTiempo[2].responsable}}</span>\n              <span *ngIf=\"itemLineaTiempo[2].fechaFin == null\">Pendiente</span>\n            </div>\n            <div class=\"subTitulo\">Ruta:</div>\n            <div class=\"normal\">\n              <span *ngIf=\"itemLineaTiempo[2].fechaFin != null\">{{itemLineaTiempo[2].medio}} ‧ {{itemLineaTiempo[2].referencia}}</span>\n              <span *ngIf=\"itemLineaTiempo[2].fechaFin == null\">Pendiente</span>\n            </div>\n          </div>\n          <div *ngIf=\"itemLineaTiempo[3] != undefined\" style=\"border-bottom: 0px; border-top: 1px solid #D8D8D8\">\n            <div class=\"titulo\">Ejecutar ruta</div>\n            <div class=\"normal\">FI {{itemLineaTiempo[3].fechaInicio | dateFormatSlashHour}} : FF {{itemLineaTiempo[3].fechaFin | dateFormatSlashHour}}</div>\n            <div class=\"subTitulo\">Entrega:</div>\n            <div class=\"normal\">\n              <span *ngIf=\"itemLineaTiempo[3].fechaFin != null\">{{itemLineaTiempo[3].referencia}}</span>\n              <span *ngIf=\"itemLineaTiempo[3].fechaFin == null\">Pendiente</span>\n            </div>\n          </div>\n          <div *ngIf=\"itemLineaTiempo[4] != undefined\" style=\"border-bottom: 0px; border-top: 1px solid #D8D8D8\">\n            <div class=\"titulo\">Cerrar ruta</div>\n            <div class=\"normal\">FI {{itemLineaTiempo[4].fechaInicio | dateFormatSlashHour}} : FF {{itemLineaTiempo[4].fechaFin | dateFormatSlashHour}}</div>\n            <div class=\"subTitulo\">Cerró:</div>\n            <div class=\"normal\">\n              <span *ngIf=\"itemLineaTiempo[4].fechaFin != null\">{{itemLineaTiempo[4].responsable}}</span>\n              <span *ngIf=\"itemLineaTiempo[4].fechaFin == null\">Pendiente</span>\n            </div>\n            <div class=\"subTitulo\">Documentos resultantes:</div>\n            <div class=\"normal\">\n              <span *ngIf=\"itemLineaTiempo[4].fechaFin != null\">\n                <span class=\"normalVerde\">\n                  <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/RT/'+itemLineaTiempo[4].pedimento+'.pdf')\">{{itemLineaTiempo[4].pedimento}}</span>\n                </span>&nbsp;\n                <span class=\"normalVerde\">\n                  <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/AR/'+itemLineaTiempo[4].referencia+'.pdf')\">{{itemLineaTiempo[4].referencia}}</span>\n                </span>\n              </span>\n              <span class=\"normal\" *ngIf=\"itemLineaTiempo[4].fechaFin == null\">Pendiente</span>\n            </div>\n            <div class=\"subTitulo\">¿Entrega y revisión?</div>\n            <div class=\"normal\">\n              <span *ngIf=\"itemLineaTiempo[4].fechaFin != null\">{{itemLineaTiempo[4].medio}}</span>\n              <span *ngIf=\"itemLineaTiempo[4].fechaFin == null\">Pendiente</span>\n            </div>\n            <div class=\"subTitulo\">Refacturación</div>\n            <div class=\"normal\">\n              <span *ngIf=\"itemLineaTiempo[4].refacturacion != null\">{{itemLineaTiempo[4].refacturacion}}</span>\n              <span *ngIf=\"itemLineaTiempo[4].refacturacion == null\">ND</span>\n            </div>\n          </div>\n        </div>\n\n         <!-- Revision -->\n         <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'REVISION' && itemLineaTiempo != undefined\">\n            <div style=\"border-bottom: 0px\">\n                <div class=\"titulo\">Generales</div>\n                <div class=\"subTitulo\">Fecha entrega:</div>\n                <div class=\"normal\">{{itemLineaTiempo[0].fechaEntrega | dateFormatSlashHour}}</div>\n                <div class=\"subTitulo\">Fecha programación:</div>\n                <div class=\"normal\">{{itemLineaTiempo[0].fechaProgramacion | dateFormatSlashHour}}</div>\n                <div class=\"subTitulo\">Fecha revisión:</div>\n                <div class=\"normal\">{{itemLineaTiempo[0].fechaRevision | dateFormatSlashHour}}</div>\n                <div class=\"subTitulo\">Programó:</div>\n                <div class=\"normal\">{{itemLineaTiempo[0].responsable}}</div>\n                <div class=\"subTitulo\">Comentarios para la revisión:</div>\n                <div class=\"normal\">{{itemLineaTiempo[0].comentarios}}</div>\n                <div class=\"subTitulo\">Mensajero asignado:</div>\n                <div class=\"normal\">{{itemLineaTiempo[0].mensajero}}</div>\n                <div class=\"subTitulo\">Revisión:</div>\n                <div class=\"normal\">{{itemLineaTiempo[0].revision}}</div>\n                <div class=\"subTitulo\">Documentación de cierre:</div>\n                <div class=\"normal\">{{itemLineaTiempo[0].docsCierre}}</div>\n                <div class=\"subTitulo\">Documentos resultantes:</div>\n                <div class=\"normal\">\n                    <span class=\"normalVerde\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/AR/'+itemLineaTiempo[1].doscResult1+'.pdf')\">\n                      <span>{{itemLineaTiempo[0].doscResult1}}</span>\n                    </span>\n                    <span class=\"normalVerde\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/RT/'+itemLineaTiempo[1].doscResult2+'.pdf')\">\n                      <span >{{itemLineaTiempo[0].doscResult2}}</span>\n                    </span>\n                  </div>\n              </div>\n         </div>\n\n         <!-- Cobro -->\n         <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'COBRO' && itemLineaTiempo != undefined\">\n          <div>\n            <div class=\"titulo\">Generales</div>\n            <div class=\"subTitulo\">Fecha revisión:</div>\n            <div class=\"normal\">{{itemLineaTiempo[0].fechaRevision | dateFormatSlashHour}}</div>\n            <div class=\"subTitulo\">Fecha programación:</div>\n            <div class=\"normal\">{{itemLineaTiempo[0].fechaProgramacion | dateFormatSlashHour}}</div>\n            <div class=\"subTitulo\">Fecha cobro:</div>\n            <div class=\"normal\">{{itemLineaTiempo[0].fechaCobro | dateFormatSlashHour}}</div>\n          </div>\n          <div>\n            <div class=\"titulo\">Programación</div>\n            <div class=\"normal\">FI {{itemLineaTiempo[1].fechaRevision | dateFormatSlashHour}} : FF {{itemLineaTiempo[1].fechaProgramacion | dateFormatSlashHour}}</div>\n            <div class=\"subTitulo\">Programó:</div>\n            <div class=\"normal\">{{itemLineaTiempo[1].responsable}}</div>\n            <div class=\"subTitulo\">Monto:</div>\n            <div class=\"normal\">{{itemLineaTiempo[1].monto | acFormatMoney}}</div>\n            <div class=\"subTitulo\">Moneda:</div>\n            <div class=\"normal\">{{itemLineaTiempo[1].cobro}}</div>\n            <div class=\"subTitulo\">Tipo de cambio:</div>\n            <div class=\"normal\">{{itemLineaTiempo[1].doscResult1 | acFormatMoney}}</div>\n            <div class=\"subTitulo\">FEP:</div>\n            <div class=\"normal\">{{itemLineaTiempo[1].fechaEntrega | dateFormatSlash}}</div>\n          </div>\n          <div style=\"border-bottom: 0px\">\n            <div class=\"titulo\">Monitoreo</div>\n            <div class=\"normal\">FI {{itemLineaTiempo[4].fechaRevision | dateFormatSlashHour}} : FF {{itemLineaTiempo[4].fechaProgramacion | dateFormatSlashHour}}</div>\n            <div class=\"subTitulo\">Comprobante pago:</div>\n            <div class=\"normalVerde\">\n              <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pagos%20cliente/'+itemLineaTiempo[4].doscResult1+'.pdf')\">{{itemLineaTiempo[4].doscResult1}}</span>\n            </div>\n            <div class=\"subTitulo\" *ngIf=\"itemLineaTiempo[4].fechaProgramacion != null\">Complemento de pago:</div>\n            <div class=\"normal\" *ngIf=\"itemLineaTiempo[4].fechaProgramacion != null\">\n              <span>\n                <span class=\"normalVerde\">\n                  <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/ComplementoPago/'+facturaDetalle.fpor+'/'+itemLineaTiempo[4].documento+'.pdf')\">PDF</span>\n                </span>&nbsp;&nbsp;&nbsp;&nbsp;\n                <span class=\"normalVerde\">\n                  <span><a href=\"http://201.161.12.60:51725/SAP/ComplementoPago/{{facturaDetalle.fpor}}/{{itemLineaTiempo[4].documento}}.xml\" download>XML</a></span>\n                </span>\n              </span>\n            </div>\n            <div class=\"subTitulo\">Monto cobrado:</div>\n            <div class=\"normal\">{{itemLineaTiempo[4].monto | acFormatMoney}}</div>\n            <div class=\"subTitulo\">Fecha cobro:</div>\n            <div class=\"normal\">{{itemLineaTiempo[4].fechaCobro | dateFormatSlash}}</div>\n            <div class=\"subTitulo\">Moroso:</div>\n            <div class=\"normal\">\n              <span [style.color]=\"'#39B54A'\" *ngIf=\"itemLineaTiempo[4].cobro == 0\">NO</span>\n              <span [style.color]=\"'#C1272D'\" *ngIf=\"itemLineaTiempo[4].cobro == 1\">SI</span>\n            </div>\n          </div>\n\n         </div>\n\n        <!-- Factura -->\n        <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'FACTURA' && itemLineaTiempo != undefined\">\n          <div>\n              <div class=\"titulo\">Generales</div>\n              <div class=\"subTitulo\">Fecha de facturación:</div>\n              <div class=\"normal\">{{itemLineaTiempo[0].fechaFacturacion | dateFormatSlashHour}}</div>\n              <div class=\"subTitulo\">Factura:</div>\n              <div class=\"normalVerde\">\n                  <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/'+facturaDetalle.fpor+'/'+facturaDetalle.factura+'.pdf')\">{{itemLineaTiempo[0].factura}}</span>\n              </div>\n              <div class=\"subTitulo\">Archivo XML:</div>\n              <div class=\"normalVerde\">\n                  <span><a href=\"http://201.161.12.60:51725/SAP/Facturas/{{facturaDetalle.fpor}}/{{facturaDetalle.factura}}.xml\" download>{{itemLineaTiempo[0].factura}}.xml</a></span>\n              </div>\n              <div class=\"subTitulo\">Facturó:</div>\n              <div class=\"normal\">{{itemLineaTiempo[0].responsable}}</div>\n              <div class=\"subTitulo\">Tipo de cambio:</div>\n              <div class=\"normal\">{{itemLineaTiempo[0].tcambio | acFormatMoney}}</div>\n              <div class=\"subTitulo\">Tipo:</div>\n              <div class=\"normal\">{{itemLineaTiempo[0].tipo}}</div>\n              <div class=\"subTitulo\">Medio:</div>\n              <div class=\"normal\">{{itemLineaTiempo[0].medio}}</div>\n          </div>\n          <div>\n              <div class=\"titulo\">Entrega</div>\n              <div class=\"subTitulo\">Fecha entrega:</div>\n              <div class=\"normal\">{{itemLineaTiempo[1].fechaEntrega | dateFormatSlashHour}}</div>\n              <div class=\"subTitulo\">Conforme:</div>\n              <div class=\"normalVerde\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/DC/'+itemLineaTiempo[1].docsCierre+'.pdf')\">\n                  <span *ngIf=\"itemLineaTiempo[1].conforme == 1\">SI</span>\n                  <span *ngIf=\"itemLineaTiempo[1].conforme == 0\">NO</span>\n              </div>\n              <div class=\"subTitulo\">Mensajero asignado:</div>\n              <div class=\"normal\">\n                <span *ngIf=\"itemLineaTiempo[1].mensajero != null\">{{itemLineaTiempo[1].mensajero}}</span>\n                <span *ngIf=\"itemLineaTiempo[1].mensajero == null\">Pendiente</span>\n              </div>\n              <div class=\"subTitulo\">Ruta:</div>\n              <div class=\"normal\">{{itemLineaTiempo[1].rutaMensajeria}}·{{itemLineaTiempo[1].zonaMensajeria}}</div>\n              <div class=\"subTitulo\">Documentos resultantes:</div>\n              <div class=\"normal\">\n                <span class=\"normalVerde\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/AR/'+itemLineaTiempo[1].doscResult1+'.pdf')\">\n                  <span>{{itemLineaTiempo[1].doscResult1}}</span>\n                </span>\n                <span class=\"normalVerde\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/RT/'+itemLineaTiempo[1].doscResult2+'.pdf')\">\n                  <span >{{itemLineaTiempo[1].doscResult2}}</span>\n                </span>\n              </div>\n              <div class=\"subTitulo\">¿Entrega y revisión?</div>\n              <div class=\"normal\">\n                <span *ngIf=\"itemLineaTiempo[1].entregaRevision\">SI</span>\n                <span *ngIf=\"!itemLineaTiempo[1].entregaRevision\">NO</span>\n              </div>\n              <div class=\"subTitulo\">Refacturación:</div>\n              <div class=\"normal\">\n                  {{itemLineaTiempo[1].refacturacion}}\n              </div>\n          </div>\n          <div style=\"border-bottom: 0px\">\n              <div class=\"titulo\">Cobro</div>\n              <div class=\"subTitulo\">Fecha cobro:</div>\n              <div class=\"normal\">{{itemLineaTiempo[2].fechaCobro | dateFormatSlashHour}}</div>\n              <div class=\"subTitulo\">Monto cobrado:</div>\n              <div class=\"normal\">{{itemLineaTiempo[2].monto | acFormatMoney}} {{itemLineaTiempo[2].moneda}}</div>\n              <div class=\"subTitulo\">Comprobante pago:</div>\n              <div class=\"normalVerde\">\n                <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pagos%20cliente/'+itemLineaTiempo[2].doscResult1+'.pdf')\">\n                  {{itemLineaTiempo[2].doscResult1}}\n                </span>\n              </div>\n              <div class=\"subTitulo\">Complemento de pago:</div>\n              <div class=\"normal\">\n                <span>\n                  <span class=\"normalVerde\">\n                    <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/ComplementoPago/'+facturaDetalle.fpor+'/'+itemLineaTiempo[2].documento+'.pdf')\">PDF</span>\n                  </span>&nbsp;&nbsp;&nbsp;&nbsp;\n                  <span class=\"normalVerde\">\n                    <span><a href=\"http://201.161.12.60:51725/SAP/ComplementoPago/{{facturaDetalle.fpor}}/{{itemLineaTiempo[2].documento}}.xml\" download>XML</a></span>\n                  </span>\n                </span>\n              </div>\n              <div class=\"subTitulo\">Moroso:</div>\n              <div class=\"normal\">\n                <span [style.color]=\"'#39B54A'\" *ngIf=\"!itemLineaTiempo[2].moroso\">NO</span>\n                <span [style.color]=\"'#C1272D'\" *ngIf=\"itemLineaTiempo[2].moroso\">SI</span>\n              </div>\n          </div>\n        </div>\n\n        <!-- PREPAGO 100% -->\n        <!-- Facturación por Adelantado -->\n        <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'Facturación por Adelantado' && itemLineaTiempo != undefined\">\n            <div>\n                <div class=\"titulo\">Generales</div>\n                <div class=\"subTitulo\">Fecha tramitación PSC:</div>\n                <div class=\"normal\">{{itemLineaTiempo.fechaTramitacion | dateFormatSlashHour}}</div>\n                <div class=\"subTitulo\">Fecha facturación por adelantado:</div>\n                <div class=\"normal\">{{itemLineaTiempo.fechaFacturacion | dateFormatSlashHour}}</div>\n                <div class=\"subTitulo\">Pedido:</div>\n                <div class=\"normalVerde\">\n                    <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos/'+itemLineaTiempo.documento+'.pdf')\">{{itemLineaTiempo.pedido}}</span>\n                  </div>\n                <div class=\"subTitulo\">Factura:</div>\n                <div class=\"normalVerde\">\n                  <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/'+facturaDetalle.fpor+'/'+facturaDetalle.factura+'.pdf')\">{{itemLineaTiempo.factura}}</span>\n                </div>\n                <div class=\"subTitulo\">Archivo XML:</div>\n                <div class=\"normalVerde\">\n                    <span><a href=\"http://201.161.12.60:51725/SAP/Facturas/{{facturaDetalle.fpor}}/{{facturaDetalle.factura}}.xml\" download>{{itemLineaTiempo.factura}}.xml</a></span>\n                </div>\n                <div class=\"subTitulo\">Facturó:</div>\n                <div class=\"normal\">{{itemLineaTiempo.responsable}}</div>\n                <div class=\"subTitulo\">Tipo de cambio:</div>\n                <div class=\"normal\">{{itemLineaTiempo.tcambio | acFormatMoney}}</div>\n                <div class=\"subTitulo\">Tipo:</div>\n                <div class=\"normal\">{{itemLineaTiempo.tipo}}</div>\n                <div class=\"subTitulo\">Medio:</div>\n                <div class=\"normal\">{{itemLineaTiempo.medio}}</div>\n            </div>\n          </div>\n\n        <!-- Monitoreo cobro SC -->\n        <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'Monitoreo de Cobro SC' && itemLineaTiempo != undefined\">\n          <div>\n            <div class=\"titulo\">Generales</div>\n            <div class=\"subTitulo\">Fecha tramitación PSC:</div>\n            <div class=\"normal\">{{itemLineaTiempo.fechaTramitacion | dateFormatSlashHour}}</div>\n            <div class=\"subTitulo\">Fecha asociación de pago:</div>\n            <div class=\"normal\">{{itemLineaTiempo.fechaAsosiacion | dateFormatSlashHour}}</div>\n            <div class=\"subTitulo\">Fecha validación de cobro:</div>\n            <div class=\"normal\">{{itemLineaTiempo.fechaCobro | dateFormatSlashHour}}</div>\n            <div class=\"subTitulo\">Factura:</div>\n            <div class=\"normalVerde\">\n              <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/'+facturaDetalle.fpor+'/'+facturaDetalle.factura+'.pdf')\">{{itemLineaTiempo.factura}}</span>\n            </div>\n            <div *ngIf=\"itemLineaTiempo.clave != null\" class=\"subTitulo\">Proforma:</div>\n            <div *ngIf=\"itemLineaTiempo.clave != null\" class=\"normalVerde\">\n              <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Proforma/'+facturaDetalle.fpor+'/'+itemLineaTiempo.clave+'.pdf')\">{{itemLineaTiempo.clave}}</span>\n            </div>\n          </div>\n          <div>\n            <div class=\"titulo\">Asociación de pago</div>\n            <div class=\"subTitulo\">Monto:</div>\n            <div class=\"normal\">\n              <span *ngIf=\"itemLineaTiempo.total > 0\">{{itemLineaTiempo.total | acFormatMoney}} {{itemLineaTiempo.moneda}}</span>\n              <span *ngIf=\"itemLineaTiempo.total == 0\">Pendiente</span>\n            </div>\n            <div class=\"subTitulo\">Medio de pago:</div>\n            <div class=\"normal\">\n              <span *ngIf=\"itemLineaTiempo.medioPago != null\">{{itemLineaTiempo.medioPago}}</span>\n              <span *ngIf=\"itemLineaTiempo.medioPago == null\">Pendiente</span>\n            </div>\n            <div class=\"subTitulo\">FEP:</div>\n            <div class=\"normal\">{{itemLineaTiempo.fep | dateFormatSlash}}</div>\n            <div class=\"subTitulo\">Comentarios para la validación:</div>\n            <div class=\"normal\">\n              <span *ngIf=\"itemLineaTiempo.comentarios != null\">{{itemLineaTiempo.comentarios}}</span>\n              <span *ngIf=\"itemLineaTiempo.comentarios == null\">Pendiente</span>\n            </div>\n          </div>\n          <div style=\"border-bottom:0px;\">\n            <div class=\"titulo\">Validación de cobro SC</div>\n            <div class=\"subTitulo\">Monto cobrado:</div>\n            <div class=\"normal\">\n              <span *ngIf=\"itemLineaTiempo.importe > 0\">{{itemLineaTiempo.importe | acFormatMoney}} {{itemLineaTiempo.monedaPago}}</span>\n              <span *ngIf=\"itemLineaTiempo.importe == 0\">Pendiente</span>\n            </div>\n            <div class=\"subTitulo\">Tipo de cambio:</div>\n            <div class=\"normal\">\n              <span *ngIf=\"itemLineaTiempo.tcambio > 0\">{{itemLineaTiempo.tcambio}}</span>\n              <span *ngIf=\"itemLineaTiempo.tcambio == 0\">Pendiente</span>\n            </div>\n            <div class=\"subTitulo\">Fecha de pago:</div>\n            <div class=\"normal\">{{itemLineaTiempo.fechaPago | dateFormatSlash}}</div>\n            <div class=\"subTitulo\">Documento que ampara:</div>\n            <div class=\"normalVerde\">\n              <span *ngIf=\"itemLineaTiempo.fechaCobro != null\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pagos%20cliente/'+itemLineaTiempo.documento+'.pdf')\">Ver</span>\n              <span class=\"normal\" *ngIf=\"itemLineaTiempo.fechaCobro == null\">Pendiente</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'Factura' && itemLineaTiempo != undefined\">\n          <div>\n            <div class=\"titulo\">Generales</div>\n            <div class=\"subTitulo\">Fecha facturación:</div>\n            <div class=\"normal\">{{itemLineaTiempo.fechaFacturacion | dateFormatSlash}}</div>\n            <div class=\"subTitulo\">Factura:</div>\n            <div class=\"normalVerde\">\n              <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/'+facturaDetalle.fpor+'/'+facturaDetalle.factura+'.pdf')\">{{itemLineaTiempo.factura}}</span>\n            </div>\n            <div class=\"subTitulo\">Archivo XML:</div>\n            <div class=\"normalVerde\">\n              <span><a href=\"http://201.161.12.60:51725/SAP/Facturas/{{facturaDetalle.fpor}}/{{itemLineaTiempo.factura}}.xml\" download>{{itemLineaTiempo.factura}}.xml</a></span>\n            </div>\n            <div class=\"subTitulo\">Facturó:</div>\n            <div class=\"normal\">{{itemLineaTiempo.responsable}}</div>\n            <div class=\"subTitulo\">Tipo de cambio:</div>\n            <div class=\"normal\">{{itemLineaTiempo.tcambio | acFormatMoney}}</div>\n            <div class=\"subTitulo\">Tipo:</div>\n            <div class=\"normal\">{{itemLineaTiempo.tipo}}</div>\n            <div class=\"subTitulo\">Medio:</div>\n            <div class=\"normal\">{{itemLineaTiempo.medio}}</div>\n          </div>\n          <div>\n            <div class=\"titulo\">Envío de factura</div>\n            <div class=\"subTitulo\">Fecha envío:</div>\n            <div class=\"normal\">{{itemLineaTiempo.fechaEnvio | dateFormatSlashHour}}</div>\n            <div class=\"subTitulo\">Contacto:</div>\n            <div class=\"normal\">{{itemLineaTiempo.contacto}}</div>\n            <div class=\"subTitulo\">Fecha envío ProquifaNet:</div>\n            <div class=\"normal\">\n              <span *ngIf=\"itemLineaTiempo.fechaProquifa != null\">{{itemLineaTiempo.fechaProquifa | dateFormatSlash}}</span>\n              <span *ngIf=\"itemLineaTiempo.fechaProquifa == null\">Pendiente</span>\n            </div>\n            <div class=\"subTitulo\">Cuerpo del correo:</div>\n            <div class=\"normal\">{{itemLineaTiempo.comentarios}}</div>\n          </div>\n          <div style=\"border-bottom:0px;\">\n            <div class=\"titulo\">Validación de cobro SC</div>\n            <div class=\"subTitulo\">Monto cobrado:</div>\n            <div class=\"normal\">{{itemLineaTiempo.importe | acFormatMoney}} {{itemLineaTiempo.monedaPago}}</div>\n            <div class=\"subTitulo\">Tipo de cambio:</div>\n            <div class=\"normal\">{{itemLineaTiempo.tcambio}}</div>\n            <div class=\"subTitulo\">Fecha de pago:</div>\n            <div class=\"normal\">\n              <span *ngIf=\"itemLineaTiempo.fechaPago != null\">{{itemLineaTiempo.fechaPago | dateFormatSlash}}</span>\n              <span *ngIf=\"itemLineaTiempo.fechaPago == null\">Pendiente</span>\n            </div>\n            <div class=\"subTitulo\">Documento que ampara:</div>\n            <div class=\"normalVerde\">\n              <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pagos%20cliente/'+itemLineaTiempo.documento+'.pdf')\">Ver</span>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/gestion/consultas/facturacion/facturacion.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: rgba(0, 137, 149, 0.02); }\n:host > div:nth-of-type(1) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    background: #008895;\n    height: 41px;\n    color: #FFFFFF;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 12px;\n    padding: 0px 20px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n:host > div:nth-of-type(1) > div:nth-of-type(1) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-right: 20px;\n      cursor: pointer; }\n:host > div:nth-of-type(1) > div:nth-of-type(2) {\n      margin-left: 20px; }\n:host > div:nth-of-type(1) > div:nth-of-type(3) {\n      margin-left: 20px; }\n:host > div:nth-of-type(1) > div:nth-of-type(4) {\n      margin-left: 20px; }\n:host > div:nth-of-type(1) > .regresar {\n      cursor: pointer;\n      font-weight: 200; }\n:host > .consultaResultados {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    height: calc(100vh - 170px);\n    width: 100%; }\n:host > .consultaResultados > .panelNormal {\n      background: #FFFFFF;\n      height: 99%;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      width: 321px;\n      min-width: 321px;\n      overflow-y: scroll; }\n:host > .consultaResultados > .panelOcultar {\n      background: #FFFFFF;\n      -webkit-animation-name: ocultarPanel;\n              animation-name: ocultarPanel;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 15px 15px; }\n:host > .consultaResultados > .panelOcultar .filtros {\n        display: none; }\n:host > .consultaResultados > .panelMostrar {\n      background: #FFFFFF;\n      -webkit-animation-name: mostar;\n              animation-name: mostar;\n      -webkit-animation-duration: 0.5s;\n              animation-duration: 0.5s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      overflow-y: scroll; }\n:host > .consultaResultados .filtroHeader {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #424242;\n      font-size: 10px;\n      margin-bottom: 20px; }\n:host > .consultaResultados .filtroHeader > .abrir {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        cursor: pointer;\n        min-height: 22px; }\n:host > .consultaResultados .filtroHeader > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n:host > .consultaResultados .filtroHeader > div:nth-of-type(2) > .cerrar {\n          margin-left: 9px;\n          cursor: pointer; }\n:host > .consultaResultados .filtros {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      border-top: 1px solid #424242; }\n:host > .consultaResultados .filtros > div:nth-of-type(1) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        height: 50px;\n        border-bottom: 1px solid #ECEEF0;\n        padding-top: 15px;\n        padding-bottom: 20px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n:host > .consultaResultados .filtros > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        height: 60px;\n        border-bottom: 1px solid #ECEEF0;\n        color: #FFFFFF;\n        font-size: 14px; }\n:host > .consultaResultados .filtros > div:nth-of-type(2) > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          cursor: pointer;\n          width: 140px;\n          height: 25px;\n          margin-right: 1px; }\n:host > .consultaResultados .filtros > .divAvanzada {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        margin-top: 15px;\n        padding-bottom: 50px; }\n:host > .consultaResultados .filtros > .divAvanzada > div:nth-of-type(1) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between; }\n:host > .consultaResultados .filtros > .divAvanzada > div:nth-of-type(1) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            width: 130px;\n            font-size: 16px;\n            color: #424242; }\n:host > .consultaResultados .filtros > .divAvanzada > div:nth-of-type(1) > div > div {\n              margin-top: 6px; }\n:host > .consultaResultados .filtros > .divAvanzada > div:nth-of-type(2) {\n          border-bottom: 1px solid #424242;\n          padding-bottom: 18px;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box; }\n:host > .consultaResultados .filtros > .divAvanzada > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n            margin-top: 15px; }\n:host > .consultaResultados .filtros > .divAvanzada > div:nth-of-type(3) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          margin-top: 18px;\n          margin-bottom: 50px;\n          background: #424242;\n          width: 100%;\n          height: 35px;\n          cursor: pointer; }\n:host > .consultaResultados .filtros > .divRapida > div:nth-of-type(1) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        height: 53px;\n        padding-top: 10px;\n        border-bottom: 1px solid #ECEEF0; }\n:host > .consultaResultados .filtros > .divRapida > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        margin-top: 15px;\n        padding-bottom: 18px;\n        border-bottom: 1px solid #424242; }\n:host > .consultaResultados .filtros > .divRapida > div:nth-of-type(2) > input {\n          height: 25px;\n          border: 1px solid #ECEEF0;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          margin-top: 5px; }\n:host > .consultaResultados .filtros > .divRapida > div:nth-of-type(3) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin-top: 18px;\n        background: #424242;\n        width: 100%;\n        height: 35px;\n        cursor: pointer; }\n:host > .consultaResultados > div:nth-of-type(2) {\n      height: 100%;\n      width: 100%;\n      background: rgba(0, 137, 149, 0.02); }\n:host > .consultaResultados > .resultados {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding: 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out; }\n:host > .consultaResultados > .resultados > div:nth-of-type(1) {\n        border-bottom: 3px solid #424242;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        padding-bottom: 10px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n:host > .consultaResultados > .resultados > div:nth-of-type(1) > div:nth-of-type(1) {\n          font-size: 22px; }\n:host > .consultaResultados > .resultados > div:nth-of-type(1) > div:nth-of-type(2) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          flex-direction: row-reverse;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n:host > .consultaResultados > .resultados > div:nth-of-type(1) > div:nth-of-type(2) > img {\n            cursor: pointer;\n            height: 30px;\n            width: 30px; }\n:host > .consultaResultados > .resultados > .sistema {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        width: 100%;\n        height: 100%;\n        overflow-x: scroll; }\n:host > .consultaResultados > .resultados > .sistema > div:nth-of-type(1) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          border-bottom: 1px solid #424242;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          min-width: 1840px;\n          min-height: 57px; }\n:host > .consultaResultados > .resultados > .sistema > div:nth-of-type(1) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            min-height: 57px;\n            max-width: 160px;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            -webkit-box-sizing: border-box;\n                    box-sizing: border-box;\n            text-align: center;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center; }\n:host > .consultaResultados > .resultados > .sistema > div:nth-of-type(2) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          overflow: scroll;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          min-width: 1840px; }\n:host > .consultaResultados > .resultados > .sistema > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n            min-height: 70px;\n            border-bottom: 1px solid #C2C3C9; }\n:host > .consultaResultados > .resultados > .sistema > div:nth-of-type(2) > div > div {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row;\n              max-width: 160px;\n              -webkit-box-align: center;\n                  -ms-flex-align: center;\n                      align-items: center;\n              font-size: 12px;\n              -webkit-box-pack: center;\n                  -ms-flex-pack: center;\n                      justify-content: center;\n              text-align: center; }\n:host > .consultaResultados > .resultados > .fueraSistema {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        width: 100%;\n        height: 100%;\n        overflow-x: scroll; }\n:host > .consultaResultados > .resultados > .fueraSistema > div:nth-of-type(1) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          border-bottom: 1px solid #424242;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          min-width: 1430px;\n          min-height: 57px; }\n:host > .consultaResultados > .resultados > .fueraSistema > div:nth-of-type(1) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            min-height: 57px;\n            max-width: 160px;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            -webkit-box-sizing: border-box;\n                    box-sizing: border-box;\n            text-align: center;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center; }\n:host > .consultaResultados > .resultados > .fueraSistema > div:nth-of-type(2) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          overflow: scroll;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          min-width: 1430px; }\n:host > .consultaResultados > .resultados > .fueraSistema > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n            min-height: 70px;\n            border-bottom: 1px solid #C2C3C9; }\n:host > .consultaResultados > .resultados > .fueraSistema > div:nth-of-type(2) > div > div {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row;\n              max-width: 160px;\n              -webkit-box-align: center;\n                  -ms-flex-align: center;\n                      align-items: center;\n              font-size: 12px;\n              -webkit-box-pack: center;\n                  -ms-flex-pack: center;\n                      justify-content: center;\n              text-align: center; }\n:host > .consultaResultados > .resultados > .fueraSistemaRapida {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        width: 100%;\n        height: 100%;\n        overflow-x: scroll; }\n:host > .consultaResultados > .resultados > .fueraSistemaRapida > div:nth-of-type(1) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          border-bottom: 1px solid #424242;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          min-width: 1590px;\n          min-height: 57px; }\n:host > .consultaResultados > .resultados > .fueraSistemaRapida > div:nth-of-type(1) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            min-height: 57px;\n            max-width: 160px;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            -webkit-box-sizing: border-box;\n                    box-sizing: border-box;\n            text-align: center;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center; }\n:host > .consultaResultados > .resultados > .fueraSistemaRapida > div:nth-of-type(2) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          overflow: scroll;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          min-width: 1590px; }\n:host > .consultaResultados > .resultados > .fueraSistemaRapida > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n            min-height: 70px;\n            border-bottom: 1px solid #C2C3C9; }\n:host > .consultaResultados > .resultados > .fueraSistemaRapida > div:nth-of-type(2) > div > div {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row;\n              max-width: 160px;\n              -webkit-box-align: center;\n                  -ms-flex-align: center;\n                      align-items: center;\n              font-size: 12px;\n              -webkit-box-pack: center;\n                  -ms-flex-pack: center;\n                      justify-content: center;\n              text-align: center; }\n:host > .consultaResultados > .resultados > .total {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -ms-flex-line-pack: center;\n            align-content: center;\n        min-height: 30px;\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end; }\n:host > .consultaDetalles {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    height: calc(100vh - 170px);\n    width: 100%; }\n:host > .consultaDetalles > .panelNormal {\n      background: #FFFFFF;\n      height: 99%;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      width: 321px;\n      min-width: 321px;\n      overflow-y: scroll; }\n:host > .consultaDetalles > .panelOcultar {\n      background: #FFFFFF;\n      -webkit-animation-name: ocultarPanel;\n              animation-name: ocultarPanel;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 15px 15px; }\n:host > .consultaDetalles > .panelOcultar .filtros {\n        display: none; }\n:host > .consultaDetalles > .panelMostrar {\n      background: #FFFFFF;\n      -webkit-animation-name: mostar;\n              animation-name: mostar;\n      -webkit-animation-duration: 0.5s;\n              animation-duration: 0.5s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      overflow-y: scroll; }\n:host > .consultaDetalles .filtroHeader {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #424242;\n      font-size: 10px;\n      margin-bottom: 20px; }\n:host > .consultaDetalles .filtroHeader > .abrir {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        cursor: pointer;\n        min-height: 22px; }\n:host > .consultaDetalles .filtroHeader > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n:host > .consultaDetalles .filtroHeader > div:nth-of-type(2) > .cerrar {\n          margin-left: 9px;\n          cursor: pointer; }\n:host > .consultaDetalles .filtros {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      border-top: 1px solid #424242;\n      border-bottom: 1px solid #424242;\n      padding-bottom: 25px; }\n:host > .consultaDetalles .filtros > .detalleCliente {\n        font-size: 16px;\n        color: #424242;\n        font-weight: bold;\n        margin-top: 15px; }\n:host > .consultaDetalles .filtros > .detalleTitulo {\n        font-size: 16px;\n        color: #424242;\n        font-weight: 400;\n        margin-top: 20px; }\n:host > .consultaDetalles .filtros > .detalleTexto {\n        font-size: 16px;\n        color: #424242;\n        font-weight: 200; }\n:host > .consultaDetalles .filtros > .detalleTextoVerde {\n        font-size: 16px;\n        color: #008895 !important;\n        font-weight: 300;\n        cursor: pointer; }\n:host > .consultaDetalles .filtros > .detalleTextoVerde:hover {\n        text-decoration: underline; }\n:host > .consultaDetalles > .contenidoFactura {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      height: calc(100vh - 171px);\n      width: 100%;\n      overflow: scroll; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura {\n        min-width: 592px;\n        padding: 15px 20px; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(1) {\n          font-size: 22px;\n          font-weight: bold; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) {\n          margin-top: 20px;\n          border-top: 1px solid #424242;\n          border-bottom: 1px solid #979797; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            border-bottom: 1px solid #FFFFFF; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div > div:nth-of-type(1) {\n              min-width: 8px;\n              background: transparent; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div > div:nth-of-type(2) {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: vertical;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: column;\n                      flex-direction: column;\n              padding: 5px 10px;\n              width: 100%;\n              cursor: pointer; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div > div:nth-of-type(2) > div {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-orient: horizontal;\n                -webkit-box-direction: normal;\n                    -ms-flex-direction: row;\n                        flex-direction: row;\n                -webkit-box-pack: justify;\n                    -ms-flex-pack: justify;\n                        justify-content: space-between;\n                margin: 5px 0px; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div:nth-of-type(2) {\n                  -webkit-box-pack: end;\n                      -ms-flex-pack: end;\n                          justify-content: flex-end; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div:hover {\n            background-color: #FFFFFF; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > .divActual {\n            background-color: #FFFFFF;\n            -webkit-box-shadow: 0 2px 4px -3px #008895;\n                    box-shadow: 0 2px 4px -3px #008895; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > .divActual > div:nth-of-type(1) {\n              min-width: 8px;\n              background: #008895; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > .divActive {\n            background-color: #FFFFFF; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(3) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -ms-flex-line-pack: center;\n              align-content: center;\n          width: 100%;\n          margin-top: 15px;\n          font-size: 14px;\n          color: #424242;\n          font-weight: 300; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo {\n        min-width: 592px;\n        background: #FFFFFF;\n        padding: 15px 20px; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(1) {\n          font-size: 22px;\n          font-weight: bold;\n          color: #008895; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) {\n          margin-top: 20px;\n          overflow: scroll;\n          max-height: calc(100vh - 248px);\n          border-top: 1px solid #424242;\n          border-bottom: 1px solid #979797; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            cursor: pointer; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(1) {\n              min-width: 8px;\n              background: transparent; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-orient: vertical;\n                -webkit-box-direction: normal;\n                    -ms-flex-direction: column;\n                        flex-direction: column;\n                padding: 10px 10px;\n                width: 100%; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) {\n                  font-size: 18px;\n                  font-weight: bold;\n                  color: #424242;\n                  margin-bottom: 15px; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) {\n                  font-size: 16px;\n                  color: #008895;\n                  margin-bottom: 2px; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) {\n                  font-size: 16px;\n                  color: #F3B23F;\n                  margin-bottom: 2px; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) {\n                  font-size: 16px;\n                  color: #571C7B;\n                  margin-bottom: 2px; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(5) {\n                  font-size: 16px;\n                  color: #981E30;\n                  margin-bottom: 2px; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div:hover {\n            background-color: rgba(0, 137, 149, 0.05); }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > .divActive {\n            background-color: rgba(0, 137, 149, 0.05); }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > .divActive > div:nth-of-type(1) {\n              min-width: 8px;\n              background: #008895; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo {\n        min-width: 592px;\n        padding-top: 15px; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(1) {\n          font-size: 22px;\n          font-weight: bold;\n          padding: 0px 20px; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) {\n          border-top: 1px solid #424242;\n          margin: 20px 20px;\n          overflow: scroll;\n          max-height: calc(100vh - 248px); }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div {\n            border-bottom: 1px solid #D8D8D8; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .titulo {\n              font-size: 18px;\n              color: #008895;\n              margin-top: 20px;\n              margin-bottom: 10px; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .subTitulo {\n              font-size: 16px;\n              font-weight: 400;\n              color: #424242;\n              margin-bottom: 3px; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normal {\n              font-size: 16px;\n              font-weight: 200;\n              color: #424242;\n              margin-bottom: 25px;\n              cursor: default !important; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde {\n              font-size: 16px;\n              font-weight: 200;\n              margin-bottom: 25px;\n              color: #008895; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde > span {\n                cursor: pointer; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde:hover > span {\n              text-decoration: underline; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde:hover > .normal {\n              text-decoration: none; }\n:host a {\n    color: #008895;\n    text-decoration: none; }\n:host a:visited {\n    color: #008895;\n    text-decoration: none; }\n:host a:hover {\n    text-decoration: underline; }\n@-webkit-keyframes ocultarPanel {\n  from {\n    min-width: 321px; }\n  to {\n    min-width: 50px; } }\n@keyframes ocultarPanel {\n  from {\n    min-width: 321px; }\n  to {\n    min-width: 50px; } }\n@-webkit-keyframes mostar {\n  from {\n    width: 50px; }\n  to {\n    width: 321px; } }\n@keyframes mostar {\n  from {\n    width: 50px; }\n  to {\n    width: 321px; } }\n:host .detalle {\n    cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/facturacion/facturacion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturacionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_gestion_gestion_service__ = __webpack_require__("./src/app/services/gestion/gestion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_gestion_consulta_facturacion_facturacion_service__ = __webpack_require__("./src/app/services/gestion/consulta/facturacion/facturacion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__ = __webpack_require__("./src/app/components/shared/filter/element.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__class_UtilFechas__ = __webpack_require__("./src/app/class/UtilFechas.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_util_util_service__ = __webpack_require__("./src/app/services/util/util.service.ts");
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
    function FacturacionComponent(router, _fb, _gestionService, _facturaService, coreComponent, utilService) {
        var _this = this;
        this.router = router;
        this._fb = _fb;
        this._gestionService = _gestionService;
        this._facturaService = _facturaService;
        this.coreComponent = coreComponent;
        this.utilService = utilService;
        this.GENERAL_RUTA = 'http://201.161.12.60:51725/SAP/';
        this.FACTURAS_RUTA = "Facturas/";
        this._utilFechas = new __WEBPACK_IMPORTED_MODULE_8__class_UtilFechas__["a" /* UtilFechas */]();
        this.classPanel = "panelNormal";
        this.hiddenClose = true;
        this.lstItems = ['De sistema', 'Fuera sistema'];
        this.lstRadiosRapida = ['Factura', 'Pedido', 'UUID'];
        this.avanzada = true;
        this.detalle = false;
        this.sistema = true;
        this.fueraSistema = false;
        this.filtroConsultaRapida = "Factura";
        this.Clear = true;
        this.totalDetalle = 0;
        //isThereData indica se inicia en false para mostrar el loader
        this.isThereData = false;
        this.lstFacturas = [];
        this.defaultSelected = { nombre: '--TODOS--' };
        this.dropClientes = [{ nombre: '--TODOS--', key: 0 }];
        this.dropCobrador = [{ nombre: '--TODOS--', key: 0 }];
        this.lstFacturasDetalle = [];
        this.lstFacturasDetalleActive = [];
        this.lstLineaTiempo = [];
        this.lstLineaTiempoActive = [];
        this.estadoItemLineaTiempo = "";
        this.itemLineaTiempo = undefined;
        //Esta funcion se llama una vez que se rrealzia un servicio
        this.Llenar = function () {
            _this.Elements = [new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Clientes", _this.dropClientes, true),
                new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Cobrador", _this.dropCobrador, false),
                new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Facturó", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Proveedora', key: 1 },
                    { nombre: 'Proquifa', key: 2 },
                    { nombre: 'Pharma', key: 3 },
                    { nombre: 'Golocaer', key: 4 },
                    { nombre: 'Mungen', key: 5 },
                    { nombre: 'Ryndem', key: 6 }
                ], false),
                new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Condiciones de pago", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: '15 Dias', key: 1 },
                    { nombre: '21 Dias', key: 2 },
                    { nombre: '30 Dias', key: 3 },
                    { nombre: '45 Dias', key: 4 },
                    { nombre: '60 Dias', key: 5 },
                    { nombre: 'Anticipo 50%', key: 6 },
                    { nombre: 'Pago Contra Entrega', key: 7 },
                    { nombre: 'Prepago 100%', key: 8 }
                ], false),
                new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Tipo", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Por Adelantado', key: 1 },
                    { nombre: 'Normal', key: 2 }
                ], false),
                new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Estado", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Cobrada', key: 1 },
                    { nombre: 'Cancelada', key: 2 },
                    { nombre: 'Por Cobrar', key: 3 },
                    { nombre: 'Por Cancelar', key: 4 },
                    { nombre: 'A Refacturación', key: 5 }
                ], false),
                new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Refacturado", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Si', key: 1 },
                    { nombre: 'No', key: 2 }
                ], false),
            ];
            //isThereData indica que ya no es necesario mostrar el loader
            _this.isThereData = true;
            _this.Clear = false;
        };
        this.Llenar2 = function () {
            _this.Elements = [new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Clientes", _this.dropClientes, true),
                new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Cobrador", _this.dropCobrador, false),
                new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Facturó", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Proveedora', key: 1 },
                    { nombre: 'Proquifa', key: 2 },
                    { nombre: 'Pharma', key: 3 },
                    { nombre: 'Golocaer', key: 4 },
                    { nombre: 'Mungen', key: 5 },
                    { nombre: 'Ryndem', key: 6 }
                ], false),
                new __WEBPACK_IMPORTED_MODULE_6__shared_filter_element_model__["a" /* ElementFilter */]("string", "Estado", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Cobrada', key: 1 },
                    { nombre: 'Cancelada', key: 2 },
                    { nombre: 'Por Cobrar', key: 3 },
                    { nombre: 'Por Cancelar', key: 4 },
                    { nombre: 'A Refacturación', key: 5 }
                ], false),
            ];
            _this.isThereData = true;
            _this.Clear = true;
        };
        this.IsDate = true;
        this.IsImage = true;
    }
    FacturacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filtroForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            filtroDato: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
        });
        this.date = new Date();
        this.date2 = new Date();
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        parametros.finicio = new Date();
        parametros.ffin = new Date();
        parametros.cliente = "--TODOS--";
        parametros.estado = "--TODOS--";
        parametros.refacturada = "--TODOS--";
        parametros.facturo = "--TODOS--";
        parametros.tipo = "--TODOS--";
        parametros.medio = "--TODOS--";
        parametros.cPago = "--TODOS--";
        parametros.idUsuarioLogueado = 91;
        parametros.cobrador = 0;
        this.consultaAvanzadaFacturacion(parametros);
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
        this._gestionService.dropCobrador().subscribe(function (data) {
            _this.lstCobradores = data.current;
            var lstAux = [];
            for (var _i = 0, _a = _this.lstCobradores; _i < _a.length; _i++) {
                var item = _a[_i];
                lstAux.push({ nombre: item.usuario, key: item.idEmpleado });
            }
            _this.dropCobrador = _this.dropCobrador.concat(lstAux);
            _this.Llenar();
        }, function (error) {
            console.log("error login");
            console.log(error);
        });
    };
    FacturacionComponent.prototype.compressed_files = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        var fechaFactura = new Date();
        console.log(this.utilService);
        var nombreArchivo = 'Factura ' + (this.utilService.getTextMonth(fechaFactura.getMonth())) + '-' + fechaFactura.getDate() + ' ' + fechaFactura.getHours() + '_' + fechaFactura.getMinutes() + '_' + fechaFactura.getSeconds();
        parametros.archivos = [];
        parametros.nombres = [];
        parametros.archivosClientes = [];
        for (var _i = 0, _a = this.lstFacturas; _i < _a.length; _i++) {
            var data = _a[_i];
            if (data.uuid) {
                parametros.archivosClientes.push({
                    nombreCliente: data.fpor,
                    rutasArchivos: [
                        this.GENERAL_RUTA + '' + this.FACTURAS_RUTA + data.fpor + '/' + data.factura + '.pdf',
                        this.GENERAL_RUTA + '' + this.FACTURAS_RUTA + data.fpor + '/' + data.factura + '.xml'
                    ],
                    nombresArchivos: [
                        data.factura + ".pdf",
                        data.factura + ".xml"
                    ]
                });
            }
        }
        parametros.nombreArchivo = nombreArchivo;
        console.log(parametros);
        this._facturaService.generarZip(parametros).subscribe(function (data) {
            console.log(data);
            var blob = window.URL.createObjectURL(new Blob([data._body], { type: 'application/octet-stream' }));
            var element = document.createElement('a');
            element.setAttribute('href', blob);
            element.setAttribute('download', nombreArchivo + ".zip");
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
            _this.coreComponent.closeModal(0);
            parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
            parametros.nombreArchivo = nombreArchivo;
            _this._facturaService.eliminarZip(parametros).subscribe(function (data) {
                if (data.status_code === 200) {
                    console.log(data.message);
                }
            });
        }, function (error) {
            console.log("error");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.str2bytes = function (str) {
        var bytes = new Uint8Array(str.length);
        for (var i = 0; i < str.length; i++) {
            bytes[i] = str.charCodeAt(i);
        }
        return bytes;
    };
    FacturacionComponent.prototype.download = function () {
        if (this.sistema) {
            var lstFacturas2_1 = [];
            console.log(this.lstFacturas);
            this.lstFacturas.forEach(function (factura, index) {
                var facturaAux = {
                    '#': index + 1,
                    'Cliente': "\"" + factura.nombre_cliente + "\"",
                    'Razón Social': "\"" + factura.rsocial + "\"",
                    'RFC': factura.rfc,
                    'Factura': factura.factura,
                    'UUID': factura.uuid,
                    'Vendió': factura.fpor,
                    'Sub Total M.N.': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.importeMN) + "\"",
                    'IVA M.N.': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.totalivaMN) + "\"",
                    'Total M.N.': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.totalMN) + "\"",
                    'Sub Total USD': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.importe) + "\"",
                    'IVA USD': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.totaliva) + "\"",
                    'Total USD': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.total) + "\"",
                    'Moneda': factura.moneda,
                    'T.Cambio': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.pdolar) + "\"",
                    'C.Pago': factura.cpago,
                    'F. Facturación': new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(factura.fecha),
                    'Tipo': factura.tipo,
                    'Refacturada': factura.refacturada,
                    'Estado': factura.estado,
                    'Fecha Cancelación': new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(factura.fechaCancelacion) == "Pendiente" ? "NA" : new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(factura.fechaCancelacion),
                    'No. Cuenta': factura.cuentaBanco,
                };
                lstFacturas2_1.push(facturaAux);
            });
            var csvData = this.ConvertToCSV(lstFacturas2_1);
            var a = document.createElement("a");
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            var blob = new Blob([csvData], { type: 'text/csv' });
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'ConsultaFacturacion-' + this._utilFechas.fechaDescarga(new Date()) + '.csv';
            a.click();
        }
        else {
            var lstFacturas2_2 = [];
            console.log(this.lstFacturas);
            this.lstFacturas.forEach(function (factura, index) {
                var facturaAux = {
                    '#': index + 1,
                    'Folio': "\"" + factura.numeroFactura + "\"",
                    'UUID': "\"" + factura.uuid + "\"",
                    'RFC': factura.rfc_Cliente,
                    'Cliente': factura.nombre_Cliente,
                    'Vendió': factura.facturadoPor,
                    'Fecha': new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(factura.fecha),
                    'Sub Total M.N.': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.importe) + "\"",
                    'IVA M.N.': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.iva) + "\"",
                    'Total M.N.': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(((factura.importe + factura.iva))) + "\"",
                    'Sub Total USD': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.montoFacturaDLS) + "\"",
                    'IVA USD': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.ivaDLS) + "\"",
                    'Total USD': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform((factura.montoFacturaDLS + factura.ivaDLS)) + "\"",
                    'Moneda': factura.moneda,
                    'T.Cambio': "\"" + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["a" /* AccountingFormatMoney */]().transform(factura.tipoCambio) + "\"",
                    'Estado': factura.estado,
                    'No. Cuenta': factura.cuentaBanco,
                };
                lstFacturas2_2.push(facturaAux);
            });
            var csvData = this.ConvertToCSV(lstFacturas2_2);
            var a = document.createElement("a");
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            var blob = new Blob([csvData], { type: 'text/csv' });
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'ConsultaFacturacion-' + this._utilFechas.fechaDescarga(new Date()) + '.csv';
            a.click();
        }
    };
    //Función para convertir JSON en formato CSV
    FacturacionComponent.prototype.ConvertToCSV = function (objArray) {
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
    FacturacionComponent.prototype.backMenu = function () {
        this.router.navigate(["protected/gestion/"]);
    };
    FacturacionComponent.prototype.closePanel = function () {
        this.classPanel = "panelOcultar";
        this.hiddenClose = false;
    };
    FacturacionComponent.prototype.openPanel = function () {
        if (!this.hiddenClose) {
            this.classPanel = "panelMostrar";
            this.hiddenClose = true;
        }
    };
    FacturacionComponent.prototype.radioSistema = function ($event) {
        if ($event == 0 && !this.sistema) {
            this.sistema = true;
            this.IsDate = false;
            this.IsDate = true;
            this.Llenar();
            this.lstRadiosRapida = ['Factura', 'Pedido', 'UUID'];
            this.fueraSistema = false;
            if (this.avanzada) {
                var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
                parametros.finicio = new Date();
                parametros.ffin = new Date();
                parametros.cliente = "--TODOS--";
                parametros.estado = "--TODOS--";
                parametros.refacturada = "--TODOS--";
                parametros.facturo = "--TODOS--";
                parametros.tipo = "--TODOS--";
                parametros.medio = "--TODOS--";
                parametros.cPago = "--TODOS--";
                parametros.idUsuarioLogueado = 91;
                parametros.cobrador = 0;
                this.consultaAvanzadaFacturacion(parametros);
            }
            else {
                this.filtroForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
                    filtroDato: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
                });
            }
        }
        else if ($event == 1 && this.sistema) {
            this.sistema = false;
            this.IsDate = false;
            this.IsDate = true;
            this.Llenar2();
            this.lstRadiosRapida = ['Factura', 'UUID'];
            this.filtroConsultaRapida = "Factura";
            if (!this.sistema && !this.avanzada) {
                this.fueraSistema = true;
            }
            if (this.avanzada) {
                var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
                parametros.finicio = new Date();
                parametros.ffin = new Date();
                parametros.dentroSistema = false;
                parametros.idCliente = 0;
                parametros.factura = 0;
                parametros.uuid = "";
                parametros.fpor = "";
                parametros.estado = "";
                parametros.idUsuarioLogueado = 91;
                parametros.cobrador = 0;
                this.listarFacturasEmitidas(parametros);
            }
            else {
                this.filtroForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
                    filtroDato: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
                });
                var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
                parametros.finicio = new Date();
                parametros.ffin = new Date();
                parametros.dentroSistema = false;
                parametros.idCliente = 0;
                parametros.factura = 0;
                parametros.uuid = "";
                parametros.fpor = "";
                parametros.estado = "";
                parametros.idUsuarioLogueado = 91;
                parametros.cobrador = 0;
                this.listarFacturasEmitidas(parametros);
            }
        }
    };
    FacturacionComponent.prototype.radioRapida = function ($event) {
        if ($event == 0) {
            this.filtroConsultaRapida = "Factura";
        }
        else if ($event == 1 && this.sistema) {
            this.filtroConsultaRapida = "Pedido";
        }
        else if ($event == 1 && !this.sistema) {
            this.filtroConsultaRapida = "UUID";
        }
        else if ($event == 2) {
            this.filtroConsultaRapida = "UUID";
        }
    };
    FacturacionComponent.prototype.filtroAvanzada = function () {
        if (!this.avanzada) {
            this.avanzada = true;
            this.fueraSistema = false;
            this.filtroConsultaRapida = "Factura";
            this.filtroForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
                filtroDato: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
            });
            if (this.sistema) {
                var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
                parametros.finicio = new Date();
                parametros.ffin = new Date();
                parametros.cliente = "--TODOS--";
                parametros.estado = "--TODOS--";
                parametros.refacturada = "--TODOS--";
                parametros.facturo = "--TODOS--";
                parametros.tipo = "--TODOS--";
                parametros.medio = "--TODOS--";
                parametros.cPago = "--TODOS--";
                parametros.idUsuarioLogueado = 91;
                parametros.cobrador = 0;
                parametros.idUsuarioLogueado = 91;
                this.consultaAvanzadaFacturacion(parametros);
            }
            else {
                var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
                parametros.finicio = new Date();
                parametros.ffin = new Date();
                parametros.dentroSistema = false;
                parametros.idCliente = 0;
                parametros.factura = 0;
                parametros.uuid = "";
                parametros.fpor = "";
                parametros.estado = "";
                parametros.idUsuarioLogueado = 91;
                parametros.cobrador = 0;
                this.listarFacturasEmitidas(parametros);
            }
        }
    };
    FacturacionComponent.prototype.filtroRapida = function () {
        if (this.avanzada) {
            this.avanzada = false;
            if (!this.sistema) {
                this.fueraSistema = true;
                var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
                parametros.finicio = new Date();
                parametros.ffin = new Date();
                parametros.dentroSistema = false;
                parametros.idCliente = 0;
                parametros.factura = 0;
                parametros.uuid = "";
                parametros.fpor = "";
                parametros.estado = "";
                parametros.idUsuarioLogueado = 91;
                parametros.cobrador = 0;
                this.listarFacturasEmitidas(parametros);
            }
            else {
                var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
                parametros.facturaS = (this.filtroConsultaRapida == "Factura") ? this.filtroForm.get('filtroDato').value : "";
                parametros.cPedido = (this.filtroConsultaRapida == "Pedido") ? this.filtroForm.get('filtroDato').value : "";
                parametros.uuid = (this.filtroConsultaRapida == "UUID") ? this.filtroForm.get('filtroDato').value : "";
                parametros.fpor = "";
                parametros.idUsuarioLogueado = 91;
                this.consultaRapidaFacturacion(parametros);
            }
        }
    };
    FacturacionComponent.prototype.filtroRapido = function () {
        console.log(this.filtroForm.get('filtroDato').value);
        if (this.sistema) {
            var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
            parametros.facturaS = (this.filtroConsultaRapida == "Factura") ? this.filtroForm.get('filtroDato').value : "";
            parametros.cPedido = (this.filtroConsultaRapida == "Pedido") ? this.filtroForm.get('filtroDato').value : "";
            parametros.uuid = (this.filtroConsultaRapida == "UUID") ? this.filtroForm.get('filtroDato').value : "";
            parametros.fpor = "--TODOS--";
            parametros.idUsuarioLogueado = 91;
            this.consultaRapidaFacturacion(parametros);
        }
        else {
            var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
            parametros.finicio = null;
            parametros.ffin = null;
            parametros.dentroSistema = false;
            parametros.idCliente = 0;
            parametros.factura = (this.filtroConsultaRapida == "Factura") ? this.filtroForm.get('filtroDato').value : 0;
            parametros.uuid = (this.filtroConsultaRapida == "UUID") ? this.filtroForm.get('filtroDato').value : "";
            parametros.fpor = "";
            parametros.estado = "";
            parametros.idUsuarioLogueado = 91;
            parametros.cobrador = 0;
            this.listarFacturasEmitidas(parametros);
        }
    };
    FacturacionComponent.prototype.getFechaImpl = function ($event) {
        //console.log($event);
    };
    FacturacionComponent.prototype.dropList = function (index, $event) {
    };
    FacturacionComponent.prototype.mostrarDatos = function ($event) {
        if (this.sistema) {
            var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
            parametros.finicio = $event.Fechas.fechaInicial;
            parametros.ffin = $event.Fechas.fechaFinal;
            parametros.cliente = ($event.Datos[0].key != 0) ? $event.Datos[0].key : $event.Datos[0].nombre;
            parametros.cobrador = $event.Datos[1].key;
            parametros.facturo = $event.Datos[2].nombre;
            parametros.cPago = $event.Datos[3].nombre;
            parametros.tipo = $event.Datos[4].nombre;
            parametros.estado = $event.Datos[5].nombre;
            parametros.refacturada = $event.Datos[6].nombre;
            parametros.medio = "--TODOS--";
            parametros.idUsuarioLogueado = 91;
            this.consultaAvanzadaFacturacion(parametros);
        }
        else {
            var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
            parametros.finicio = $event.Fechas.fechaInicial;
            parametros.ffin = $event.Fechas.fechaFinal;
            parametros.dentroSistema = false;
            parametros.idCliente = $event.Datos[0].key;
            parametros.factura = 0;
            parametros.uuid = "";
            parametros.fpor = $event.Datos[2].nombre != "--TODOS--" ? $event.Datos[2].nombre : "";
            parametros.estado = $event.Datos[3].nombre != "--TODOS--" ? $event.Datos[3].nombre : "";
            parametros.idUsuarioLogueado = 91;
            parametros.cobrador = $event.Datos[1].key;
            this.listarFacturasEmitidas(parametros);
        }
    };
    FacturacionComponent.prototype.consultaAvanzadaFacturacion = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._facturaService.consultaAvanzadaFacturacion(parametros).subscribe(function (data) {
            _this.lstFacturas = data.current;
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.consultaRapidaFacturacion = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._facturaService.consultaRapidaFacturacion(parametros).subscribe(function (data) {
            _this.lstFacturas = data.current;
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.listarFacturasEmitidas = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._facturaService.listarFacturasEmitidas(parametros).subscribe(function (data) {
            console.log(data.current);
            _this.lstFacturas = data.current;
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.regresarConsulta = function () {
        this.detalle = false;
    };
    FacturacionComponent.prototype.verDetalle = function (item) {
        console.log(item);
        this.facturaDetalle = item;
        this.detalle = true;
        var lstAux = [];
        lstAux.push(item);
        if (item.estado == "Cobrada") {
            if (item.cPago.indexOf("DIAS") < 0 || this._utilFechas.regresaDiferenciaEntreFechasEnDias(new Date(item.fechaPago + " 00:00:00"), new Date(item.fep + " 00:00:00")) >= 0) {
                lstAux[0]["moroso"] = "No";
            }
            else {
                lstAux[0]["moroso"] = "Si";
            }
        }
        if (item.cPago.indexOf("DIAS") < 0 && item.cPago.indexOf("ENTREGA") < 0) {
            console.log("obtenerLineaTiempoPrepago");
            this.obtenerLineaTiempoPrepago(item.factura, item.fpor);
        }
        else if (item.cPago.indexOf("DIAS") >= 0 || item.cPago.indexOf("ENTREGA") >= 0) {
            console.log("obtenerResumen");
            this.obtenerResumen(item.factura, item.fpor);
        }
        else {
            this.lstLineaTiempo = undefined;
            this.itemLineaTiempo = undefined;
            this.estadoItemLineaTiempo = "";
        }
        if (this.lstLineaTiempo != undefined) {
            this.lstLineaTiempoActive = new Array(this.lstLineaTiempo.length).fill("");
            this.lstLineaTiempoActive[0] = "divActive";
        }
        this.totalDetalle = 0;
        this.totalDetalle += item.importe;
        for (var _i = 0, _a = this.lstFacturas; _i < _a.length; _i++) {
            var factura = _a[_i];
            if (factura.factura != item.factura && factura.nombre_cliente == item.nombre_cliente && factura.estado != "Cobrada") {
                lstAux.push(factura);
                this.totalDetalle += factura.importe;
            }
        }
        this.lstFacturasDetalle = [];
        this.lstFacturasDetalle = this.lstFacturasDetalle.concat(lstAux);
        this.lstFacturasDetalleActive = new Array(this.lstFacturasDetalle.length).fill("");
        this.lstFacturasDetalleActive[0] = "divActual";
        console.log(this.lstFacturasDetalle);
    };
    FacturacionComponent.prototype.resumenFactura = function (i) {
        this.lstFacturasDetalleActive = new Array(this.lstFacturasDetalle.length).fill("");
        this.lstFacturasDetalleActive[i] = "divActive";
        if (this.lstFacturasDetalle[i].cPago.indexOf("DIAS") < 0 && this.lstFacturasDetalle[i].cPago.indexOf("ENTREGA") < 0) {
            this.obtenerLineaTiempoPrepago(this.lstFacturasDetalle[i].factura, this.lstFacturasDetalle[i].fpor);
        }
        else if (this.lstFacturasDetalle[i].cPago.indexOf("DIAS") >= 0 || this.lstFacturasDetalle[i].cPago.indexOf("ENTREGA") >= 0) {
            this.obtenerResumen(this.lstFacturasDetalle[i].factura, this.lstFacturasDetalle[i].fpor);
        }
    };
    FacturacionComponent.prototype.obtenerResumen = function (facturaS, fpor) {
        var _this = this;
        this.facturaS = facturaS;
        this.fpor = fpor;
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        parametros.facturaS = facturaS;
        parametros.fpor = fpor;
        this.coreComponent.openModal(0);
        this._facturaService.obtenerResumen(parametros).subscribe(function (data) {
            _this.lstLineaTiempo = [];
            if (data.current != undefined && data.current.length > 0) {
                _this.lstLineaTiempo = data.current;
                console.log(_this.lstLineaTiempo);
                var _temp = [];
                var _facc = [];
                for (var i = 0; i < data.current.length; i++) {
                    if (data.current[i].etapa == 'FACTURACION' || data.current[i].etapa == 'ENTREGA' ||
                        data.current[i].etapa == 'REVISION' || data.current[i].etapa == 'COBRO' ||
                        data.current[i].etapa == 'FACTURA REMISION' || data.current[i].etapa == 'REFACTURACION' ||
                        data.current[i].etapa == 'CANCELACION' || data.current[i].etapa == 'FACTURA') {
                        _temp.push(data.current[i]);
                    }
                }
                _facc = _temp;
                var _arrTemp = [];
                var currenItem = void 0;
                for (var j = 0; j < _facc.length; j++) {
                    currenItem = _facc[j];
                    if (currenItem.etapa == 'COBRO' && currenItem.etapaPadre == '1') {
                        _arrTemp.push(currenItem);
                    }
                    else if (currenItem.etapa == 'ENTREGA') {
                        if (currenItem.fechaFin == null) {
                            if (currenItem.conforme == "NO DISPONIBLE")
                                currenItem.conforme = "Pendiente";
                        }
                        else {
                            if (currenItem.conforme == "NO DISPONIBLE")
                                currenItem.conforme = "ND";
                        }
                    }
                }
                for (var k = 0; k < _facc.length; k++) {
                    if (_facc[k].etapaPadre != '1') {
                        _arrTemp.push(_facc[k]);
                    }
                }
                if (_arrTemp.length > 0)
                    _arrTemp[_arrTemp.length - 1].finLista = true;
                _this.lstLineaTiempo = _arrTemp;
                console.log("obtenerResumen");
                console.log(_this.lstLineaTiempo);
                _this.lstLineaTiempoActive = new Array(_this.lstLineaTiempo.length).fill("");
                _this.lstLineaTiempoActive[0] = "divActive";
                _this.estadoItemLineaTiempo = _this.lstLineaTiempo[0].etapa;
                _this.itemLineaTiempo = _this.lstLineaTiempo[0];
            }
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.obtenerLineaTiempoPrepago = function (facturaS, fpor) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        parametros.facturaS = facturaS;
        parametros.fpor = fpor;
        this.facturaS = facturaS;
        this.fpor = fpor;
        this.coreComponent.openModal(0);
        this._facturaService.obtenerLineaTiempoPrepago(parametros).subscribe(function (data) {
            console.log(data.current);
            _this.lstLineaTiempo = data.current;
            _this.lstLineaTiempoActive = new Array(_this.lstLineaTiempo.length).fill("");
            _this.lstLineaTiempoActive[0] = "divActive";
            console.log("obtenerLineaTiempoPrepago");
            if (_this.lstLineaTiempo[0].etapa == "Facturación por Adelantado") {
                _this.obtenerResumenFacturacionXAdelantado(parametros.facturaS, parametros.fpor);
            }
            else {
                _this.obtenerResumenMonitoreoCobro(parametros.facturaS, parametros.fpor);
            }
            _this.estadoItemLineaTiempo = _this.lstLineaTiempo[0].etapa;
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.obtenerResumenMonitoreoCobro = function (facturaS, fpor) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        parametros.facturaS = facturaS;
        parametros.fpor = fpor;
        this.itemLineaTiempo = undefined;
        this.coreComponent.openModal(0);
        this._facturaService.obtenerResumenMonitoreoCobro(parametros).subscribe(function (data) {
            console.log(data.current);
            _this.itemLineaTiempo = data.current[0];
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.obtenerResumenFacturaPrepago = function (facturaS, fpor) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        parametros.facturaS = facturaS;
        parametros.fpor = fpor;
        this.itemLineaTiempo = undefined;
        this.coreComponent.openModal(0);
        this._facturaService.obtenerResumenFacturaPrepago(parametros).subscribe(function (data) {
            console.log(data.current);
            _this.itemLineaTiempo = data.current[0];
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.obtenerResumenEntrega = function (facturaS, fpor) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        parametros.facturaS = facturaS;
        parametros.fpor = fpor;
        this.itemLineaTiempo = undefined;
        this.estadoItemLineaTiempo = "ENTREGA";
        this.coreComponent.openModal(0);
        this._facturaService.obtenerResumenEntrega(parametros).subscribe(function (data) {
            _this.itemLineaTiempo = new Array(undefined, undefined, undefined, undefined, undefined);
            for (var i = 0; i < data.current.length; i++) {
                var currentItem = data.current[i];
                if (currentItem.etapa == 'TRAMITAR RUTA') {
                    _this.itemLineaTiempo[0] = currentItem;
                }
                else if (currentItem.etapa == 'SURTIR RUTA') {
                    _this.itemLineaTiempo[1] = currentItem;
                    if (_this.itemLineaTiempo[1].fechaFin != null) {
                        _this.itemLineaTiempo[1].referencia = _this.itemLineaTiempo[1].referencia.split(",");
                    }
                }
                else if (currentItem.etapa == 'ASIGNAR MENSAJERO') {
                    _this.itemLineaTiempo[2] = currentItem;
                }
                else if (currentItem.etapa == 'EJECUTAR RUTA') {
                    _this.itemLineaTiempo[3] = currentItem;
                }
                else if (currentItem.etapa == 'CERRAR RUTA') {
                    _this.itemLineaTiempo[4] = currentItem;
                }
            }
            console.log(_this.itemLineaTiempo);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.obtenerResumenRevision = function (facturaS, fpor) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        parametros.facturaS = facturaS;
        parametros.fpor = fpor;
        this.coreComponent.openModal(0);
        this.itemLineaTiempo = undefined;
        this._facturaService.obtenerResumenRevision(parametros).subscribe(function (data) {
            _this.itemLineaTiempo = data.current;
            _this.coreComponent.closeModal(0);
            console.log(_this.itemLineaTiempo);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.obtenerResumenCobro = function (facturaS, fpor, sc) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        parametros.facturaS = facturaS;
        parametros.fpor = fpor;
        parametros.sc = sc;
        this.coreComponent.openModal(0);
        this.itemLineaTiempo = undefined;
        this._facturaService.obtenerResumenCobro(parametros).subscribe(function (data) {
            _this.itemLineaTiempo = data.current;
            _this.coreComponent.closeModal(0);
            console.log(_this.itemLineaTiempo);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.obtenerResumenFactura = function (facturaS, fpor) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        parametros.facturaS = facturaS;
        parametros.fpor = fpor;
        this.coreComponent.openModal(0);
        this.itemLineaTiempo = undefined;
        this._facturaService.obtenerResumenFactura(parametros).subscribe(function (data) {
            _this.itemLineaTiempo = data.current;
            _this.coreComponent.closeModal(0);
            console.log(_this.itemLineaTiempo);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.obtenerResumenFacturacionXAdelantado = function (facturaS, fpor) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        parametros.facturaS = facturaS;
        parametros.fpor = fpor;
        this.coreComponent.openModal(0);
        this.itemLineaTiempo = undefined;
        this._facturaService.obtenerResumenFacturacionXAdelantado(parametros).subscribe(function (data) {
            _this.itemLineaTiempo = data.current[0];
            _this.coreComponent.closeModal(0);
            console.log(_this.itemLineaTiempo);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    FacturacionComponent.prototype.lineaTiempo = function (i) {
        this.lstLineaTiempoActive = new Array(this.lstLineaTiempo.length).fill("");
        this.lstLineaTiempoActive[i] = "divActive";
        this.estadoItemLineaTiempo = this.lstLineaTiempo[i].etapa;
        this.lineaIiempoSelect = this.lstLineaTiempo[i];
        //this.itemLineaTiempo = this.lstLineaTiempo[i];
        this.itemLineaTiempo = undefined;
        switch (this.estadoItemLineaTiempo) {
            case "Monitoreo de Cobro SC":
                console.log("Credito Monitoreo Cobro SC");
                this.obtenerResumenMonitoreoCobro(this.facturaS, this.fpor);
                break;
            case "Factura":
                console.log("Credito Factura Prepago");
                this.obtenerResumenFacturaPrepago(this.facturaS, this.fpor);
                break;
            case "FACTURACION":
                console.log("Facturacion");
                this.itemLineaTiempo = this.lstLineaTiempo[0];
                break;
            case "ENTREGA":
                console.log("Credito Entrega");
                this.obtenerResumenEntrega(this.facturaS, this.fpor);
                break;
            case "REVISION":
                console.log("Credito Revision");
                this.obtenerResumenRevision(this.facturaS, this.fpor);
                break;
            case "COBRO":
                console.log("Credito Cobro");
                this.obtenerResumenCobro(this.facturaS, this.fpor, 0);
                break;
            case "FACTURA":
                console.log("Credito Factura");
                this.obtenerResumenFactura(this.facturaS, this.fpor);
                break;
            case "Facturación por Adelantado":
                console.log("Facturación por Adelantado");
                this.obtenerResumenFacturacionXAdelantado(this.facturaS, this.fpor);
                break;
        }
    };
    FacturacionComponent.prototype.descargarPDF = function (archivo) {
        console.log(archivo);
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 800, height: 600 });
        PDFWindow.addSupport(newWin);
        newWin.loadURL(archivo);
    };
    FacturacionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-facturacion',
            template: __webpack_require__("./src/app/components/gestion/consultas/facturacion/facturacion.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/consultas/facturacion/facturacion.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__services_gestion_gestion_service__["a" /* GestionService */],
            __WEBPACK_IMPORTED_MODULE_4__services_gestion_consulta_facturacion_facturacion_service__["a" /* FacturacionService */], __WEBPACK_IMPORTED_MODULE_7__core_container_core_container_component__["a" /* CoreContainerComponent */], __WEBPACK_IMPORTED_MODULE_10__services_util_util_service__["a" /* UtilService */]])
    ], FacturacionComponent);
    return FacturacionComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/facturacion/facturacion.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacturacionModule", function() { return FacturacionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__facturacion_routing_module__ = __webpack_require__("./src/app/components/gestion/consultas/facturacion/facturacion-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__facturacion_component__ = __webpack_require__("./src/app/components/gestion/consultas/facturacion/facturacion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__ = __webpack_require__("./src/app/components/shared/radio-button/radio-button.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_filter_filter_module__ = __webpack_require__("./src/app/components/shared/filter/filter.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var FacturacionModule = /** @class */ (function () {
    function FacturacionModule() {
    }
    FacturacionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__facturacion_routing_module__["a" /* FacturacionRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__["a" /* RadioButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_filter_filter_module__["a" /* FilterModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__facturacion_component__["a" /* FacturacionComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__facturacion_component__["a" /* FacturacionComponent */]
            ]
        })
    ], FacturacionModule);
    return FacturacionModule;
}());



/***/ })

});
//# sourceMappingURL=facturacion.module.chunk.js.map