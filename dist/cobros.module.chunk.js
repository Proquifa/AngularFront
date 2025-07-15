webpackJsonp(["cobros.module"],{

/***/ "./src/app/components/gestion/consultas/cobros/cobros-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CobrosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cobros_component__ = __webpack_require__("./src/app/components/gestion/consultas/cobros/cobros.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CobrosRoutingModule = /** @class */ (function () {
    function CobrosRoutingModule() {
    }
    CobrosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__cobros_component__["a" /* CobrosComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], CobrosRoutingModule);
    return CobrosRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/cobros/cobros.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div (click)=\"backMenu()\">\n    <img height=\"22px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_190.svg\" alt=\"\">\n  </div>\n  |\n  <div *ngIf=\"!detalle\">CONSULTA DE COBROS</div>\n  <div *ngIf=\"detalle\" (click)=\"regresarConsulta()\" class=\"regresar\">CONSULTA DE COBROS</div>\n  <div *ngIf=\"detalle\">|</div>\n  <div *ngIf=\"detalle\">DETALLES</div>\n</div>\n<div *ngIf=\"!detalle\" class=\"consultaResultados\">\n  <div [ngClass]=\"classPanel\">\n    <div class=\"filtroHeader\">\n      <div class=\"abrir\" (click)=\"openPanel()\">\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa.svg\" alt=\"\">\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa_verde.svg\" alt=\"\">\n      </div>\n      <div *ngIf=\"hiddenClose\">\n        CERRAR\n        <div class=\"cerrar\" (click)=\"closePanel()\">\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n    <div class=\"filtros\">\n      <div>\n        <pq-radio-button [widthTotal]=\"'120px'\" [lstItems]=\"lstItems\" [disble]=\"true\" [direction]=\"'row'\" [imgSize]=\"'12px'\" (emitItem)=\"radioFechaFacturacion($event)\"\n          [width]=\"'15px'\"></pq-radio-button>\n      </div>\n      <div>\n        <div (click)=\"filtroAvanzada()\" [style.background]=\"avanzada?'#008895':'#C2C3C9'\">AVANZADA</div>\n        <div (click)=\"filtroRapida()\" [style.background]=\"!avanzada?'#008895':'#C2C3C9'\">RÁPIDA</div>\n      </div>\n      <div *ngIf=\"avanzada\" class=\"divAvanzada\">\n        <!--  Si  ya hay datos dentro del compenente se manda el < Gestion-filter/> con los datos\n            Y la propiedad IsLoader como verdadera\n          -->\n        <div *ngIf=\"isThereData;else loader\">\n          <gestion-filter [ElementsDropList]=\"Elements\" (valueFilter)=\"mostrarDatos($event)\" [IsImage]=\"IsImage\" [IsDate]=\"IsDate\"\n            [IsLoader]=\"isThereData\" [Clear]=\"Clear\" style=\"width: 100%\"></gestion-filter>\n        </div>\n        <!--  Si  no hay datos dentro del compenente se manda el < Gestion-filter/> con solo\n            una propiedad\n            IsLoader como Falsa-->\n        <ng-template #loader>\n          <gestion-filter [IsLoader]=\"isThereData\" [Clear]=\"Clear\"></gestion-filter>\n        </ng-template>\n      </div>\n      <div *ngIf=\"!avanzada\" class=\"divRapida\">\n        <div>\n          <pq-radio-button [widthTotal]=\"'60px'\" [lstItems]=\"lstRadiosRapida\" [disble]=\"true\" [direction]=\"'row'\" [imgSize]=\"'12px'\"\n            (emitItem)=\"radioRapida($event)\" [width]=\"'15px'\"></pq-radio-button>\n        </div>\n        <div [formGroup]=\"filtroForm\">\n          <span>{{filtroConsultaRapida}}</span>\n          <input type=\"text\" formControlName=\"filtroDato\" name=\"filtroDato\">\n        </div>\n        <div (click)=\"filtroRapido()\">\n          <img height=\"20px\" src=\"assets/Images/visualizar.svg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--w3-animate-left-->\n  <div class=\"resultados\" *ngIf=\"isTableShow;else ShowGraphic\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\">\n    <div>\n      <div>\n        RESULTADOS\n      </div>\n      <div>\n        <img [style.margin-right]=\"'15px'\" height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/cobros/graficaminigris.svg\"\n          alt=\"\" (click)=\"showGraphic()\">\n        <img height=\"20px\" width=\"20px\" src=\"assets/Images/exportar.svg\" alt=\"\" (click)=\"download()\">\n      </div>\n    </div>\n    <div class=\"fechafactura\" *ngIf=\"fechaFacturacion && !fechacobros\">\n      <div>\n        <div [style.min-width]=\"'50px'\">#</div>\n        <div [style.min-width]=\"'160px'\">Cliente</div>\n        <div [style.min-width]=\"'140px'\">Cobrador</div>\n        <div [style.min-width]=\"'140px'\">P. Interno</div>\n        <div [style.min-width]=\"'140px'\">Referencia</div>\n        <div [style.min-width]=\"'140px'\">Factura</div>\n        <div [style.min-width]=\"'292px'\">UUID</div>\n        <div [style.min-width]=\"'140px'\">Vendió</div>\n        <div [style.min-width]=\"'140px'\">MEC</div>\n        <div [style.min-width]=\"'140px'\">C. Pago</div>\n        <div [style.min-width]=\"'140px'\">F. Facturación</div>\n        <div [style.min-width]=\"'140px'\">FEP</div>\n        <div [style.min-width]=\"'140px'\">DRC</div>\n        <div [style.min-width]=\"'15px'\"></div>\n        <div [style.min-width]=\"'140px'\">Estado</div>\n        <div [style.min-width]=\"'30px'\"></div>\n      </div>\n      <div>\n        <div *ngFor=\"let item of lstCobros; let i = index\">\n          <div [style.min-width]=\"'50px'\">{{i + 1}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.nombreCliente}}</div>\n          <div [style.min-width]=\"'140px'\">{{item.cobrador}}</div>\n          <div [style.min-width]=\"'140px'\">{{item.cpedido}}</div>\n          <div [style.min-width]=\"'140px'\">{{item.referencia}}</div>\n          <div [style.min-width]=\"'140px'\">{{item.factura}}</div>\n          <div [style.min-width]=\"'292px'\">{{item.uuid}}</div>\n          <div [style.min-width]=\"'140px'\">{{item.fpor}}</div>\n          <div [style.min-width]=\"'140px'\">$ {{item.subTotalDlls}} USD</div>\n          <div [style.min-width]=\"'140px'\">{{item.cpago}}</div>\n          <div [style.min-width]=\"'140px'\">{{item.fechaFacturacion | dateFormatSlash}}</div>\n          <div [style.min-width]=\"'140px'\">\n            <span [style.color]=\"'#417505'\" *ngIf=\"(((item.fechaEsperadaPago!=null && item.fechaPago!=null)&&(item.fechaEsperadaPago > item.fechaPago)))\">{{item.fechaEsperadaPago| dateFormatSlash}} </span>\n            <span [style.color]=\"'#F5A623'\" *ngIf=\"item.fechaPago > item.fechaEsperadaPago\">{{item.fechaEsperadaPago| dateFormatSlash}} </span>\n            <span *ngIf=\"item.fechaPago===null\">{{item.fechaEsperadaPago| dateFormatSlash}} </span>\n          </div>\n          <div [style.min-width]=\"'140px'\">\n            <span *ngIf=\"item.diasRestantesCobro===0\">Pendiente </span>\n            <span *ngIf=\"item.diasRestantesCobro > 0\">Cobrado</span>\n            <span *ngIf=\"item.diasRestantesCobro < 0\">Cobrado</span>\n          </div>\n          <div [style.min-width]=\"'15px'\" [ngClass]=\"item.diasRestantesCobro >0 ?'circleGreen':item.diasRestantesCobro ===0?'circleRed':'circleYellow'\"></div>\n          <div [style.min-width]=\"'140px'\">\n            <span *ngIf=\"item.estado==='Por Cobrar'\">Abierto</span>\n            <span *ngIf=\"item.estado==='Cobrada'\">Cerrado</span>\n          </div>\n          <div [style.min-width]=\"'30px'\" (click)=\"verDetalle(item)\">\n            <img class=\"detalle\" width=\"14px\" src=\"assets/Images/ir_detalle.svg\" alt=\"\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"fechacobro\" *ngIf=\"!fechaFacturacion && !fechacobros\">\n      <div>\n        <div [style.min-width]=\"'50px'\">#</div>\n        <div [style.min-width]=\"'160px'\">Cliente</div>\n        <div [style.min-width]=\"'160px'\">Cobrador</div>\n        <div [style.min-width]=\"'160px'\">P. Interno</div>\n        <div [style.min-width]=\"'160px'\">Referencia</div>\n        <div [style.min-width]=\"'160px'\">Factura</div>\n        <div [style.min-width]=\"'292px'\">UUID</div>\n        <div [style.min-width]=\"'160px'\">Vendió</div>\n        <div [style.min-width]=\"'160px'\">MEC</div>\n        <div [style.min-width]=\"'160px'\">Banco</div>\n        <div [style.min-width]=\"'160px'\">Cuenta</div>\n        <div [style.min-width]=\"'160px'\">Fecha Real</div>\n        <div [style.min-width]=\"'160px'\">C. Pago</div>\n        <div [style.min-width]=\"'160px'\">F. Facturación</div>\n        <div [style.min-width]=\"'160px'\">FEP</div>\n        <div [style.min-width]=\"'160px'\">DRC</div>\n        <div [style.min-width]=\"'15px'\"></div>\n        <div [style.min-width]=\"'160px'\">Estado</div>\n        <div [style.min-width]=\"'30px'\"></div>\n      </div>\n      <div>\n        <div *ngFor=\"let item of lstCobros; let i = index\">\n          <div [style.min-width]=\"'50px'\">{{i + 1}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.nombreCliente}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.cobrador}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.cpedido}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.referencia}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.factura}}</div>\n          <div [style.min-width]=\"'292px'\">{{item.uuid}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.fpor}}</div>\n          <div [style.min-width]=\"'160px'\">$ {{item.subTotalDlls}} USD</div>\n          <div [style.min-width]=\"'160px'\">{{item.banco}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.noCuenta}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.fechaPago }}</div>\n          <div [style.min-width]=\"'160px'\">{{item.cpago}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.fechaFacturacion | dateFormatSlash}}</div>\n          <div [style.min-width]=\"'160px'\">\n            <span [style.color]=\"'#417505'\" *ngIf=\"(((item.fechaEsperadaPago!=null && item.fechaPago!=null)&&(item.fechaEsperadaPago > item.fechaPago)))\">{{item.fechaEsperadaPago| dateFormatSlash}} </span>\n            <span [style.color]=\"'#F5A623'\" *ngIf=\"item.fechaPago > item.fechaEsperadaPago\">{{item.fechaEsperadaPago| dateFormatSlash}} </span>\n            <span *ngIf=\"item.fechaPago===null\">{{item.fechaEsperadaPago| dateFormatSlash}} </span>\n          </div>\n          <div [style.min-width]=\"'140px'\">\n            <span *ngIf=\"item.diasRestantesCobro===0\">Pendiente </span>\n            <span *ngIf=\"item.diasRestantesCobro > 0\">Cobrado</span>\n            <span *ngIf=\"item.diasRestantesCobro < 0\">Cobrado</span>\n          </div>\n          <div [style.min-width]=\"'15px'\" [ngClass]=\"item.diasRestantesCobro >0 ?'circleGreen':item.diasRestantesCobro ===0?'circleRed':'circleYellow'\"></div>\n          <div [style.min-width]=\"'160px'\">\n            <span *ngIf=\"item.estado==='Por Cobrar'\">Abierto</span>\n            <span *ngIf=\"item.estado==='Cobrada'\">Cerrado</span>\n          </div>\n          <div [style.min-width]=\"'30px'\" (click)=\"verDetalle(item)\">\n            <img class=\"detalle\" width=\"14px\" src=\"assets/Images/ir_detalle.svg\" alt=\"\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"fechacobroRapida\" *ngIf=\"fechacobros\">\n      <div>\n        <div [style.min-width]=\"'50px'\">#</div>\n        <div [style.min-width]=\"'160px'\">Cliente</div>\n        <div [style.min-width]=\"'160px'\">Cobrador</div>\n        <div [style.min-width]=\"'160px'\">P. Interno</div>\n        <div [style.min-width]=\"'160px'\">Referencia</div>\n        <div [style.min-width]=\"'160px'\">Factura</div>\n        <div [style.min-width]=\"'292px'\">UUID</div>\n        <div [style.min-width]=\"'160px'\">Vendió</div>\n        <div [style.min-width]=\"'160px'\">MEC</div>\n        <div [style.min-width]=\"'160px'\">Banco</div>\n        <div [style.min-width]=\"'160px'\">Cuenta</div>\n        <div [style.min-width]=\"'160px'\">Fecha Real</div>\n        <div [style.min-width]=\"'160px'\">C. Pago</div>\n        <div [style.min-width]=\"'160px'\">F. Facturación</div>\n        <div [style.min-width]=\"'160px'\">FEP</div>\n        <div [style.min-width]=\"'15px'\"></div>\n        <div [style.min-width]=\"'160px'\">DRC</div>\n        <div [style.min-width]=\"'160px'\">Estado</div>\n      </div>\n      <div>\n        <div *ngFor=\"let item of lstCobros; let i = index\">\n          <div [style.min-width]=\"'50px'\">{{i + 1}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.nombreCliente}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.cobrador}}</div>\n          <div [style.min-width]=\"'180px'\">{{item.interno}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.referencia}}</div>\n          <div [style.min-width]=\"'100px'\">{{item.factura}}</div>\n          <div [style.min-width]=\"'292px'\">{{item.uuid}}</div>\n          <div [style.min-width]=\"'120px'\">{{item.vendio}}</div>\n          <div [style.min-width]=\"'120px'\">{{item.mec}}</div>\n          <div [style.min-width]=\"'120px'\">{{item.banco}}</div>\n          <div [style.min-width]=\"'120px'\">{{item.cuenta}}</div>\n          <div [style.min-width]=\"'120px'\">{{item.freal}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.cpago}}</div>\n          <div [style.min-width]=\"'120px'\">{{item.fechaFacturacion | dateFormatSlash}}</div>\n          <div [style.min-width]=\"'160px'\">\n            <span [style.color]=\"'#417505'\" *ngIf=\"(((item.fechaEsperadaPago!=null && item.fechaPago!=null)&&(item.fechaEsperadaPago > item.fechaPago)))\">{{item.fechaEsperadaPago| dateFormatSlash}} </span>\n            <span [style.color]=\"'#F5A623'\" *ngIf=\"item.fechaPago > item.fechaEsperadaPago\">{{item.fechaEsperadaPago| dateFormatSlash}} </span>\n            <span *ngIf=\"item.fechaPago===null\">{{item.fechaEsperadaPago| dateFormatSlash}} </span>\n          </div>\n          <div [style.min-width]=\"'140px'\">\n            <span *ngIf=\"item.diasRestantesCobro===0\">Pendiente </span>\n            <span *ngIf=\"item.diasRestantesCobro > 0\">Cobrado</span>\n            <span *ngIf=\"item.diasRestantesCobro < 0\">Cobrado</span>\n          </div>\n          <div [style.min-width]=\"'15px'\" [ngClass]=\"item.diasRestantesCobro >0 ?'circleGreen':item.diasRestantesCobro ===0?'circleRed':'circleYellow'\"></div>\n          <div [style.min-width]=\"'100px'\">\n            <span *ngIf=\"item.estado==='Por Cobrar'\">Abierto</span>\n            <span *ngIf=\"item.estado==='Cobrada'\">Cerrado</span>\n          </div>\n          <div [style.min-width]=\"'30px'\" (click)=\"verDetalle(item)\">\n            <img class=\"detalle\" width=\"14px\" src=\"assets/Images/ir_detalle.svg\" alt=\"\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"total\" *ngIf=\"lstCobros!= null\">\n      <p>Total:\n        <span>{{lstCobros.length}}</span>\n        <span>Cobro\n          <span *ngIf=\"lstCobros.length != 1\">s</span>\n        </span>\n      </p>\n    </div>\n  </div>\n</div>\n<!--Elemento Que muestra la vista Grafica-->\n<ng-template #ShowGraphic>\n  <div class=\"w3-animate-right GlobalContainer-graphic-Component\" style=\"overflow: hidden;\">\n    <!--Elemento Que muestra los gráficos style=\"overflow: scroll\"-->\n    <div class=\"GraphicsContainer-graphic-Component\" style=\"overflow: scroll\">\n      <pq-graficas-cobros [valores1]=\"nivel\" [valores2]=\"cpago\" [valores3]=\"estado\" [valores4]=\"programado\" [valores7]=\"dias\" [valores8]=\"medio\"\n        [valores9]=\"tiempo\"></pq-graficas-cobros>\n    </div>\n    <div class=\"Filter-Container-graphic-Component\">\n      <div class=\"Tabgraphic-Component\" (click)=\"showTable()\">\n        <img height=\"16.2px\" width=\"20.4px\" src=\"assets/Images/gestion/images/tablaminibca.svg\" alt=\"\">\n      </div>\n      <!--contenedor principal para los filtros de los graficos-->\n      <div class=\"Main-Container-filter-graphic-Component\">\n        <!--Encabezado Totales-->\n        <div class=\"totals-filter-graphic-Component\">\n          TOTALES\n          <br>\n        </div>\n        <div [ngStyle]=\"{'margin-top': '30px', 'color': '#fff', 'font-size': '14px', 'margin-top': '10px'}\">\n\n          <div [ngStyle]=\"{'height': '82px','flex-wrap': 'wrap','display': 'flex'}\">\n            <div [ngStyle]=\"{'margin-right': '11px'}\">\n              <img class=\"detalle\" width=\"21.14px\" height=\"14px\" src=\"assets/Images/rojoflecha.png\" alt=\"\">\n            </div>\n            <div>\n              Monto USD:\n              <div>$ {{totalMontoDolares1 }}</div>\n              <div [ngStyle]=\"{'color': '#439DC1'}\">$ {{totalMontoDolares }}</div>\n              <div [ngStyle]=\"{'color': '#AA65E7 '}\">$ {{totalMontoDolares2 }}</div>\n            </div>\n          </div>\n          <div [ngStyle]=\"{'height': '82px','flex-wrap': 'wrap','display': 'flex'}\">\n            <div [ngStyle]=\"{'margin-right': '11px'}\">\n              <img class=\"detalle\" width=\"21.14px\" height=\"14px\" src=\"assets/Images/rojoflecha.png\" alt=\"\">\n            </div>\n            <div>\n              No. Cobros:\n              <div>{{totalCobros1}}</div>\n              <div [ngStyle]=\"{'color': '#439DC1'}\">{{totalCobros}}</div>\n              <div [ngStyle]=\"{'color': '#AA65E7 '}\">{{totalCobros2}}</div>\n            </div>\n          </div>\n          <div [ngStyle]=\"{'height': '82px','flex-wrap': 'wrap','display': 'flex'}\">\n            <div [ngStyle]=\"{'margin-right': '11px'}\">\n              <img class=\"detalle\" width=\"21.14px\" height=\"14px\" src=\"assets/Images/rojoflecha.png\" alt=\"\">\n            </div>\n            <div>\n              Total piezas:\n              <div>{{totalPiezas1}}</div>\n              <div [ngStyle]=\"{'color': '#439DC1'}\">{{totalPiezas}}</div>\n              <div [ngStyle]=\"{'color': '#AA65E7 '}\">{{totalPiezas2}}</div>\n            </div>\n          </div>\n        </div>\n        <!--Resultados de los filtros-->\n        <div class=\"Results-filter-graphic-Component\">\n          <div [ngStyle]=\"{'display': 'flex', 'margin-right': '40px'}\">\n            <div>\n              <div class=\"circleDateGreen\"></div>\n              <div class=\"circleDatePurple\">\n              </div>\n            </div>\n            <div [ngStyle]=\"{'margin-top': '20px', 'color': '#fff', 'margin-right': '20px'}\">\n              <div [ngStyle]=\"{}\">Del\n                <pq-date-picker [style.width]=\"'125px'\" [(date)]=\"date1\" dateFormat=\"YYYYMMDD\" (fecha)=\"getFechaImpl($event)\">\n                </pq-date-picker>\n              </div>\n              <div [ngStyle]=\"{'margin-top': '20px'}\">Del\n                <pq-date-picker [style.width]=\"'125px'\" [(date)]=\"date22\" dateFormat=\"YYYYMMDD\" (fecha)=\"getFechaImpl($event)\">\n                </pq-date-picker>\n              </div>\n            </div>\n            <div [ngStyle]=\"{'margin-top': '20px', 'color': '#fff'}\">\n              <div [ngStyle]=\"{}\">Al\n                <pq-date-picker [style.width]=\"'125px'\" [(date)]=\"date3\" dateFormat=\"YYYYMMDD\" (fecha)=\"getFechaImpl2($event)\">\n                </pq-date-picker>\n              </div>\n              <div [ngStyle]=\"{'margin-top': '20px'}\">Al\n                <pq-date-picker [style.width]=\"'125px'\" [(date)]=\"date4\" dateFormat=\"YYYYMMDD\" (fecha)=\"getFechaImpl2($event)\">\n                </pq-date-picker>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div [ngStyle]=\"{'margin-top': '20px', 'background-color':'red','justify-content': 'center','align-items': 'center', 'display': 'flex', 'margin-right': '33px','cursor': 'pointer'}\"\n          (click)=\"filtroTotalBlanco()\" (click)=\"filtroTotalMorado()\" (click)=\"filtroTotalAzul()\">\n          <img height=\"31px\" src=\"assets/Images/reload.svg\" alt=\"\">\n        </div>\n        <!--Dobles filtros\n        <div class=\"filters-graphic-Component\">\n          Dobles filtros\n          <br>\n        </div>-->\n      </div>\n    </div>\n  </div>\n</ng-template>\n<div *ngIf=\"detalle\" class=\"consultaDetalles\">\n  <div [ngClass]=\"classPanel\">\n    <div class=\"filtroHeader\">\n      <div class=\"abrir\" (click)=\"openPanel()\">\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa.svg\" alt=\"\">\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa_verde.svg\" alt=\"\">\n      </div>\n      <div *ngIf=\"hiddenClose\">\n        CERRAR\n        <div class=\"cerrar\" (click)=\"closePanel()\">\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n    <div class=\"filtros\">\n      <div class=\"detalleCliente\">{{cobroDetalle.nombreCliente}}</div>\n      <div class=\"\"></div>\n      <div class=\"detalleTitulo\">Nivel de ingresos:</div>\n      <div class=\"detalleTextoVerde\">{{cobroDetalle.nivelIngreso}}</div>\n      <div class=\"detalleTitulo\">Factura:</div>\n      <div class=\"detalleTextoVerde\">{{cobroDetalle.factura}}</div>\n      <div class=\"detalleTitulo\">Vendió:</div>\n      <div class=\"detalleTexto\">{{cobroDetalle.fpor}}</div>\n      <div class=\"detalleTitulo\">P. Interno:</div>\n      <div class=\"detalleTextoVerde\">{{cobroDetalle.cpedido}}</div>\n      <div class=\"detalleTitulo\">Monto estimado de cobro:</div>\n      <div class=\"detalleTextoVerde\">$ {{cobroDetalle.montoEsperadoCobro}} Pesos</div>\n      <div class=\"detalleTitulo\">Condiciones de pago:</div>\n      <div class=\"detalleTexto\">{{cobroDetalle.cpago}}</div>\n      <div class=\"detalleTitulo\">Medio de pago:</div>\n      <div class=\"detalleTexto\">{{cobroDetalle.medioPago}}</div>\n      <div class=\"detalleTitulo\">Fecha facturación:</div>\n      <div class=\"detalleTexto\">{{cobroDetalle.fechaFacturacion | dateFormatSlash}}</div>\n      <div class=\"detalleTitulo\">Fecha revisión:</div>\n      <div class=\"detalleTexto\">{{cobroDetalle.fechaRevision | dateFormatSlash}}</div>\n      <div class=\"detalleTitulo\">Contrarecibo:</div>\n      <div class=\"detalleTexto\">{{cobroDetalle.contrarecibo}}</div>\n    </div>\n  </div>\n  <div class=\"contenidoFactura\">\n    <div class=\"detalleFactura\">\n      <div>DETALLE DE COBRO</div>\n      <div>\n        <div [ngClass]=\"i==0?'divActual':lstCobrosDetalleActive[i]\" *ngFor=\"let item of lstCobrosDetalle; let i = index\" (click)=\"resumenCobro(i)\">\n          <div class=\"dfSelect\"></div>\n          <div>\n            <div>\n              <div>\n                <div [style.color]=\"'#008895'\">F- {{item.factura}} </div>\n                <div>MEC: $ {{item.montoEsperadoCobro}} Dolares</div>\n              </div>\n              <div>FEP:\n                <span *ngIf=\"item.fechaEsperadaPago != null\">{{item.fechaEsperadaPago | dateFormatSlash}} </span>\n                <span *ngIf=\"item.fechaEsperadaPago == null\">N/D</span>\n              </div>\n            </div>\n            <div>\n              <div>Total de Piezas: {{item.piezas}} </div>\n              <div [style.color]=\"item.estado != 'Cobrada'?'#C1272D':'#39B54A'\"></div>\n              <div>CDR: Pendiente</div>\n            </div>\n            <div>\n              <div></div>\n              <div>\n                <span [style.color]=\"'#981E30'\" *ngIf=\"item.estado==='Por Cobrar'\">Abierto</span>\n                <span [style.color]=\"'#008895'\" *ngIf=\"item.estado!='Por Cobrar'\">Cerrado</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div>\n        <div> TOTAL: {{lstCobrosDetalle.length}} COBRO\n          <span *ngIf=\"lstCobrosDetalle.length != 1\">S</span> · {{totalDetalle | acFormatMoney}} USD</div>\n      </div>\n    </div>\n    <div class=\"lineaTiempo\">\n      <div>LÍNEA DE TIEMPO</div>\n      <div>\n        <div [ngClass]=\"lstLineaTiempoActive[i]\" *ngFor=\"let item of lstLineaTiempo; let i = index\" (click)=\"lineaTiempo(i)\">\n          <div class=\"ltSelect\"></div>\n          <div>\n            <div>\n              <div *ngIf=\"item.etapa !='COOBRADA'\">{{item.etapa}}</div>\n              <div *ngIf=\"item.etapa == 'COOBRADA'\">COBRADA</div>\n              <div *ngIf=\"item.responsable !=null\">{{item.responsable}}</div>\n              <div *ngIf=\"item.responsable == null\">PENDIENTE</div>\n              <div>FI {{item.fechaInicio | dateFormatSlash}}</div>\n              <div>FF {{item.fechaFin | dateFormatSlash}}</div>\n              <div>TT {{item.totalProceso}} día\n                <span *ngIf=\"item.totalProceso != 1\">s</span>\n              </div>\n            </div>\n            <div></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"detalleTiempo\">\n      <div *ngIf=\"estadoItemLineaTiempo !='COOBRADA'\">\n        {{estadoItemLineaTiempo}}\n      </div>\n      <div *ngIf=\"estadoItemLineaTiempo == 'COOBRADA'\">\n        COBRADA\n      </div>\n      <div>\n        <!-- Credito -->\n        <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'FACTURACION'|| estadoItemLineaTiempo == 'INTERFACTURACION' && itemLineaTiempo != undefined\">\n          <div>\n            <div class=\"titulo\">Generales</div>\n            <div class=\"subTitulo\">Fecha de facturación:</div>\n            <div class=\"normal\">{{itemLineaTiempo.fechaInicio | dateFormatSlash }}</div>\n            <div class=\"subTitulo\">Factura:</div>\n            <div class=\"normalVerde\" style=\" color: #008895;\">\n              <span style=\" color: #008895;\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/'+cobroDetalle.fpor+'/'+cobroDetalle.factura+'.pdf')\">{{itemLineaTiempo.referencia}}</span>\n            </div>\n            <div class=\"subTitulo\">Facturó:</div>\n            <div class=\"normal\">{{itemLineaTiempo.responsable}}</div>\n            <div class=\"subTitulo\">Tipo:</div>\n            <div class=\"normal\" *ngIf=\"itemLineaTiempo.tipo!= null\">{{itemLineaTiempo.tipo}}</div>\n            <div class=\"normal\" *ngIf=\"itemLineaTiempo.tipo== null\">Pendiente</div>\n            <div class=\"subTitulo\">Medio:</div>\n            <div class=\"normal\">{{itemLineaTiempo.medio}}</div>\n          </div>\n        </div>\n        <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'COOBRADA' && itemLineaTiempo != undefined\">\n          <div>\n            <div class=\"titulo\">Generales</div>\n            <div class=\"subTitulo\">Fecha de pago:</div>\n            <div class=\"normal\">{{itemLineaTiempo.fechaInicio | dateFormatSlash}}</div>\n            <div class=\"subTitulo\">Condiciones de pago:</div>\n            <div class=\"normal\">{{itemLineaTiempo.tipo}}</div>\n            <div class=\"subTitulo\">Fecha estimada de pago:</div>\n            <div class=\"normal\">{{itemLineaTiempo.fechaProgramacion | dateFormatSlash}}</div>\n            <div class=\"subTitulo\">Fecha pago:</div>\n            <div class=\"normal\">{{itemLineaTiempo.fechaCobro | dateFormatSlash}}</div>\n            <div class=\"subTitulo\">Fecha registro de pago:</div>\n            <div class=\"normal\">{{itemLineaTiempo.fechaDispobible | dateFormatSlash}}</div>\n            <div class=\"subTitulo\">Factura:</div>\n            <div class=\"normalVerde\">\n              <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Facturas/Golocaer/'+itemLineaTiempo.referencia+'.pdf')\">{{itemLineaTiempo.referencia}}</span>\n            </div>\n            <div class=\"subTitulo\">Monto:</div>\n            <div class=\"normal\" *ngIf=\"itemLineaTiempo.monto !=0 \">{{itemLineaTiempo.monto | acFormatMoney}}</div>\n            <div class=\"normal\" *ngIf=\"itemLineaTiempo.monto ==0 \">ND</div>\n            <div class=\"subTitulo\">Comprobante de pago:</div>\n            <div class=\"normalVerde\">\n              <span *ngIf=\"itemLineaTiempo.comentarios != null\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pagos%20cliente/'+itemLineaTiempo.documento+'.pdf')\">{{itemLineaTiempo.documento}}</span>\n            </div>\n            <div class=\"normal\" *ngIf=\"itemLineaTiempo.comentarios == null \">ND</div>\n            <div class=\"subTitulo\">Pago:</div>\n            <div class=\"normal\" [style.color]=\"'#C1272D'\" *ngIf=\"itemLineaTiempo.comentarios == 'FT' \">{{itemLineaTiempo.comentarios}}</div>\n            <div class=\"normal\" [style.color]=\"'#39B54A'\" *ngIf=\"itemLineaTiempo.comentarios == 'ET' \">{{itemLineaTiempo.comentarios}}</div>\n          </div>\n\n        </div>\n\n        <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'ENVIO'\">\n          <div>\n            <div class=\"titulo\">Generales</div>\n            <div class=\"subTitulo\">Fecha tramitación:</div>\n            <div class=\"normal\">{{itemLineaTiempo.fechaInicio | dateFormatSlash}}</div>\n            <div class=\"subTitulo\">Fecha entrega:</div>\n            <div class=\"normal\">{{itemLineaTiempo.fechaFin | dateFormatSlash}}</div>\n          </div>\n        </div>\n        <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'ENTREGA'\">\n          <div>\n            <div class=\"titulo\">Generales</div>\n            <div class=\"subTitulo\">Fecha tramitación:</div>\n            <div class=\"normal\">{{itemLineaTiempo.fechaInicio | dateFormatSlash}}</div>\n            <div class=\"subTitulo\">Fecha entrega:</div>\n            <div class=\"normal\">{{itemLineaTiempo.fechaFin | dateFormatSlash}}</div>\n            <div class=\"subTitulo\">Conforme:</div>\n            <div class=\"normal\" [style.color]=\"'#39B54A'\"  *ngIf=\"itemLineaTiempo.conforme == 'SI' \" >{{itemLineaTiempo.conforme}}</div>\n            <div class=\"normal\"   *ngIf=\"itemLineaTiempo.conforme == 'NO' \" >{{itemLineaTiempo.conforme}}</div>\n          \n          </div>\n        </div>\n        <div *ngFor=\"let itemEtapas of lstEtapas; let i = index\">\n          <div class=\"monitoreo_Cobro_SC\" *ngIf=\"itemEtapas.etapa == 'TRAMITAR RUTA' && estadoItemLineaTiempo != 'FACTURACION' \">\n            <div>\n              <div class=\"titulo\">Tramitar ruta</div>\n              <div class=\"normal\">FI {{itemEtapas.fechaInicio | dateFormatSlash }} : FF {{itemEtapas.fechaInicio | dateFormatSlash }} </div>\n              <div class=\"subTitulo\">Tramitó:</div>\n              <div class=\"normal\">{{itemEtapas.responsable }}</div>\n              <div class=\"subTitulo\">Comentarios gestor ruta:</div>\n              <div class=\"normal\" *ngIf=\"itemEtapas.comentarios == '' \">ND</div>\n              <div class=\"normal\" *ngIf=\"itemEtapas.comentarios != '' \">{{itemEtapas.comentarios }}</div>\n            </div>\n          </div>\n          <div class=\"monitoreo_Cobro_SC\" *ngIf=\"itemEtapas.etapa == 'SURTIR RUTA' && estadoItemLineaTiempo != 'FACTURACION' \">\n            <div>\n              <div class=\"titulo\">Surtir ruta</div>\n              <div class=\"normal\">FI {{itemEtapas.fechaInicio | dateFormatSlash }} : FF {{itemEtapas.fechaInicio | dateFormatSlash }} </div>\n              <div class=\"subTitulo\">Surtió:</div>\n              <div class=\"normal\">{{itemEtapas.responsable }}</div>\n              <div class=\"subTitulo\">Surtido:</div>\n              <div class=\"normal\" *ngIf=\"itemEtapas.referencia ==''  \">Pendiente</div>\n              <div class=\"normalVerde\" *ngIf=\"itemEtapas.referencia !=''  \">\n                <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Etiquetas/'+itemEtapas.referencia+'.pdf')\">{{itemEtapas.referencia}}</span>\n                <!--     <a href=\"http://201.161.12.60:51725/SAP/Etiquetas/{{itemEtapas.referencia}}.pdf\" download>{{itemEtapas.referencia}}</a>-->\n              </div>\n              <div class=\"subTitulo\">Caja colectora:</div>\n              <div class=\"normal\" *ngIf=\"itemEtapas.documento==null\">Pendiente</div>\n              <div class=\"normalVerde\" *ngIf=\"itemEtapas.documento!=null\">\n                <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Etiquetas/'+itemEtapas.documento+'.pdf')\">{{itemEtapas.documento}}</span>\n                <!--   <a href=\"http://201.161.12.60:51725/SAP/Etiquetas/{{itemEtapas.documento }}.pdf\" download> {{itemEtapas.documento }}</a>-->\n              </div>\n            </div>\n          </div>\n          <div class=\"monitoreo_Cobro_SC\" *ngIf=\"itemEtapas.etapa == 'ASIGNAR MENSAJERO' && estadoItemLineaTiempo != 'FACTURACION' \">\n            <div>\n              <div class=\"titulo\">Asignar mensajero</div>\n              <div class=\"normal\">FI {{itemEtapas.fechaInicio | dateFormatSlash }} : FF {{itemEtapas.fechaFin | dateFormatSlash }} </div>\n              <div class=\"subTitulo\">Asignó:</div>\n              <div class=\"normal\">{{itemEtapas.contacto }}</div>\n              <div class=\"subTitulo\">Mensajero asignado:</div>\n              <div class=\"normal\">{{itemEtapas.responsable }}</div>\n              <div class=\"subTitulo\">Ruta:</div>\n              <div class=\"normal\">{{itemEtapas.medio }} {{itemEtapas.referencia }}</div>\n            </div>\n          </div>\n          <div class=\"monitoreo_Cobro_SC\" *ngIf=\"itemEtapas.etapa == 'EJECUTAR RUTA' && estadoItemLineaTiempo != 'FACTURACION' \">\n            <div>\n              <div class=\"titulo\">Ejecutar ruta</div>\n              <div class=\"normal\">FI {{itemEtapas.fechaInicio | dateFormatSlash }} : FF {{itemEtapas.fechaFin | dateFormatSlash }} </div>\n              <div class=\"subTitulo\">Entrega:</div>\n              <div class=\"normal\">{{itemEtapas.referencia }}</div>\n            </div>\n          </div>\n          <div class=\"monitoreo_Cobro_SC\" *ngIf=\"itemEtapas.etapa == 'CERRAR RUTA' && estadoItemLineaTiempo != 'FACTURACION' \">\n            <div>\n              <div class=\"titulo\">Cerrar ruta</div>\n              <div class=\"normal\">FI {{itemEtapas.fechaInicio | dateFormatSlash }} : FF {{itemEtapas.fechaInicio | dateFormatSlash }} </div>\n              <div class=\"subTitulo\">Cerró:</div>\n              <div class=\"normal\">{{itemEtapas.responsable }}</div>\n              <div class=\"subTitulo\">Documentos resultantes:</div>\n              <div class=\"normalVerde\">\n                <span>\n                  <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos%20Cierre/RT/'+itemEtapas.pedimento+'.pdf')\">{{itemEtapas.pedimento}}</span>\n                </span>&nbsp;&nbsp;&nbsp;&nbsp;\n                <span>\n                  <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Etiquetas/'+itemEtapas.referencia+'.pdf')\">{{itemEtapas.referencia}}</span>\n                </span>\n\n                <!-- <a href=\"http://201.161.12.60:51725/SAP/Etiquetas/ {{itemEtapas.pedimento }} .pdf\" download> {{itemEtapas.pedimento }} </a>\n                <a href=\"http://201.161.12.60:51725/SAP/Etiquetas/  {{itemEtapas.referencia}} .pdf\" download> {{itemEtapas.referencia}} </a>-->\n              </div>\n              <div class=\"subTitulo\">¿Entrega y revisión?</div>\n              <div class=\"normal\" *ngIf=\"itemEtapas.revision!=null\">{{itemEtapas.revision }}</div>\n              <div class=\"normal\" *ngIf=\"itemEtapas.revision==null\">SI</div>\n              <div class=\"normal\">{{itemEtapas.revision }}</div>\n              <div class=\"subTitulo\">Refacturación:</div>\n              <div class=\"normal\" *ngIf=\"itemEtapas.refacturacion!=null\">{{itemEtapas.refacturacion }}</div>\n              <div class=\"normal\" *ngIf=\"itemEtapas.refacturacion==null\">NO</div>\n            </div>\n          </div>\n          <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'COBRO' && itemLineaTiempo != undefined\">\n            <div class=\"monitoreo_Cobro_SC\" *ngIf=\"itemEtapas.etapa == 'GENERALES' \">\n              <div>\n                <div class=\"titulo\">Generales</div>\n\n                <div class=\"subTitulo\">Fecha registro:</div>\n                <div class=\"normal\">{{itemEtapas.fechaProgramacion | dateFormatSlash}}</div>\n                <div class=\"subTitulo\">Fecha facturación:</div>\n                <div class=\"normal\">{{itemEtapas.fechaRevision | dateFormatSlash}}</div>\n                <div class=\"subTitulo\">Fecha cobro:</div>\n                <div class=\"normal\">{{itemEtapas.fechaCobro | dateFormatSlash }}</div>\n              </div>\n            </div>\n            <div class=\"monitoreo_Cobro_SC\" *ngIf=\"itemEtapas.etapa == 'GESTION_PSC' && estadoItemLineaTiempo != 'FACTURACION' && estadoItemLineaTiempo != 'INTERFACTURACION'\">\n              <div>\n                <div class=\"titulo\">Gestión PSC</div>\n                <div class=\"normal\">FI {{itemEtapas.fechaProgramacion | dateFormatSlash }} : FF {{itemEtapas.fechaRevision | dateFormatSlash\n                  }} </div>\n                <div class=\"subTitulo\">MEC:</div>\n                <div class=\"normal\"> {{itemEtapas.monto | acFormatMoney }} {{itemEtapas.docsCierre }}</div>\n                <div class=\"subTitulo\">TC:</div>\n                <div class=\"normal\"> {{itemEtapas.cobro | acFormatMoney}} {{itemEtapas.docsCierre }}</div>\n                <div class=\"subTitulo\">Medio:</div>\n                <div class=\"normal\">{{itemEtapas.doscResult1 }}</div>\n                <div class=\"subTitulo\">FEP:</div>\n                <div class=\"normal\">{{itemEtapas.fechaEntrega | dateFormatSlash}}</div>\n              </div>\n            </div>\n            <div class=\"monitoreo_Cobro_SC\" *ngIf=\"itemEtapas.etapa == 'MONITOREO_CO_SC' && estadoItemLineaTiempo != 'FACTURACION' && estadoItemLineaTiempo != 'INTERFACTURACION' \">\n              <div>\n                <div class=\"titulo\">Monitoreo cobro SC</div>\n                <div class=\"normal\">FI {{itemEtapas.fechaRevision | dateFormatSlash }} : FF {{itemEtapas.fechaProgramacion | dateFormatSlash}}\n                </div>\n                <div class=\"subTitulo\">Pago asociado:</div>\n                <div class=\"normalVerde\">\n                  <span (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos/'+itemEtapas.revision+'.pdf')\">{{itemEtapas.revision}}</span>\n                  <!-- <a href=\"http://201.161.12.60:51725/SAP/Doctos/{{itemEtapas.revision }}.pdf\" download>{{itemEtapas.revision }}</a>-->\n                </div>\n                <div class=\"subTitulo\">Comprobante de pago:</div>\n                <div class=\"normalVerde\">\n                  <span *ngIf=\"itemEtapas.docsCierre!=null\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pagos%20cliente/'+itemEtapas.docsCierre+'.pdf')\">{{itemEtapas.docsCierre}}</span>\n                  <!--<a href=\"http://201.161.12.60:51725/SAP/Pagos%20cliente/{{itemEtapas.docsCierre}}.pdf\" download>{{itemEtapas.docsCierre}}</a>-->\n                </div>\n                <div class=\"normal\" *ngIf=\"itemEtapas.docsCierre==null\">ND</div>\n                <div class=\"subTitulo\">Monto cobrado:</div>\n                <div class=\"normal\" *ngIf=\"itemEtapas.monto!=0\"> {{itemEtapas.monto | acFormatMoney}} {{itemEtapas.doscResult1}}</div>\n                <div class=\"normal\" *ngIf=\" itemEtapas.monto==0\">ND</div>\n                <div class=\"subTitulo\">TC:</div>\n                <div class=\"normal\" *ngIf=\"itemEtapas.cobro!=null\"> {{itemEtapas.cobro | acFormatMoney}} {{itemEtapas.doscResult1}}</div>\n                <div class=\"normal\" *ngIf=\"itemEtapas.cobro==mull\">ND</div>\n                <div class=\"subTitulo\">FEP:</div>\n                <div class=\"normal\">{{itemEtapas.fechaEntrega | dateFormatSlash}}</div>\n                <div class=\"subTitulo\">Fecha de pago:</div>\n                <div class=\"normal\">{{itemEtapas.fechaCobro | dateFormatSlash}}</div>\n                <div class=\"subTitulo\">Moroso:</div>\n                <div class=\"normal\" [style.color]=\"'#39B54A'\" *ngIf=\"itemEtapas.doscResult2 == 'NO' \">{{itemEtapas.doscResult2}}</div>\n                <div class=\"normal\" [style.color]=\"'#C1272D'\" *ngIf=\"itemEtapas.doscResult2 == 'SI' \">{{itemEtapas.doscResult2}}</div>\n                <!--<div class=\"normal\" *ngIf=\"itemEtapas.moroso == false \">NO</div>\n                <div class=\"normal\" *ngIf=\"itemEtapas.moroso != false \">SI</div>-->\n              </div>\n            </div>\n          </div>\n\n         <!-- <div class=\"monitoreo_Cobro_SC\" *ngIf=\"estadoItemLineaTiempo == 'COBRO' && itemEtapas.etapaPadre==0 && itemLineaTiempo != undefined\">\n            <div class=\"monitoreo_Cobro_SC\" *ngIf=\"itemEtapas.etapaPadre==0\">-->\n              <div class=\"monitoreo_Cobro_SC\" *ngIf=\"itemEtapas.etapa == 'COBRO_GRAL' && estadoItemLineaTiempo != 'FACTURACION' && estadoItemLineaTiempo != 'INTERFACTURACION' \">\n                <div>\n                  <div class=\"titulo\">Generales</div>\n                  <div class=\"subTitulo\">Fecha revisión:</div>\n                  <div class=\"normal\"> {{itemEtapas.fechaRevision | dateFormatSlash }} </div>\n                  <div class=\"subTitulo\">Fecha programación:</div>\n                  <div class=\"normal\"> {{itemEtapas.fechaProgramacion | dateFormatSlash }} </div>\n                  <div class=\"subTitulo\">Fecha cobro:</div>\n                  <div class=\"normal\"> {{itemEtapas.fechaCobro | dateFormatSlash }} </div>\n                </div>\n              </div>\n              <div class=\"monitoreo_Cobro_SC\" *ngIf=\"itemEtapas.etapa == 'COBRO_PROGR' && estadoItemLineaTiempo != 'FACTURACION' && estadoItemLineaTiempo != 'INTERFACTURACION' \">\n                <div>\n                  <div class=\"titulo\">Programación</div>\n                  <div class=\"normal\">FI {{itemEtapas.fechaRevision | dateFormatSlash }} : FF {{itemEtapas.fechaProgramacion | dateFormatSlash}}\n                    </div>\n                  <div class=\"subTitulo\">MEC:</div>\n                  <div class=\"normal\"> {{itemEtapas.monto | acFormatMoney }} {{itemEtapas.cobro }}</div>\n                  \n                  <div class=\"subTitulo\">Medio:</div>\n                  <div class=\"normal\">{{itemEtapas.docsCierre }}</div>\n                  <div class=\"subTitulo\">FEP:</div>\n                  <div class=\"normal\">{{itemEtapas.fechaEntrega | dateFormatSlash}}</div>\n                </div>\n              </div>\n              <div class=\"monitoreo_Cobro_SC\" *ngIf=\"itemEtapas.etapa == 'COBRO_MONITOREO' && estadoItemLineaTiempo != 'FACTURACION' && estadoItemLineaTiempo != 'INTERFACTURACION' \">\n                <div>\n                  <div class=\"titulo\">Monitoreo</div>\n                  <div class=\"normal\" *ngIf=\"itemEtapas.fechaRevision!=null && itemEtapas.fechaProgramacion!=null\">FI {{itemEtapas.fechaRevision | dateFormatSlash }} : FF {{itemEtapas.fechaProgramacion | dateFormatSlash}}\n                    </div>\n                  <div class=\"normal\" *ngIf=\"itemEtapas.fechaRevision==null\">FI Pendiente : FF {{itemEtapas.fechaProgramacion | dateFormatSlash}} </div>\n                  <div class=\"normal\" *ngIf=\"itemEtapas.fechaProgramacion==null\">FI {{itemEtapas.fechaRevision | dateFormatSlash }} : FF Pendiente </div>\n                  <div class=\"subTitulo\">Comprobante pago:</div>\n                \n                  <div class=\"normalVerde\">\n                      <span *ngIf=\"itemEtapas.docsCierre!=null\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pagos%20cliente/'+itemEtapas.docsCierre+'.pdf')\">{{itemEtapas.docsCierre}}</span>\n                      <div class=\"normal\">\n                          <span *ngIf=\"itemEtapas.docsCierre==null\" >Pendiente</span>\n                        </div>\n                    </div>\n                   \n                  <div class=\"subTitulo\">Monto cobrado:</div>\n                  <div class=\"normal\" *ngIf=\"itemEtapas.cobro != null \"> {{itemEtapas.cobro | acFormatMoney}} {{itemEtapas.docsCierre }}</div>\n                  <div class=\"normal\" *ngIf=\"itemEtapas.cobro == null \">Pendiente</div>\n                  <div class=\"subTitulo\">Moroso:</div>\n                  <div class=\"normal\" [style.color]=\"'#39B54A'\" *ngIf=\"itemEtapas.doscResult2 == 'NO' \">{{itemEtapas.doscResult2}}</div>\n                  <div class=\"normal\" [style.color]=\"'#C1272D'\" *ngIf=\"itemEtapas.doscResult2 == 'SI' \">{{itemEtapas.doscResult2}}</div>\n                  <div class=\"normal\"  *ngIf=\"itemEtapas.doscResult2 == null \">Pendiente</div>\n                </div>\n              </div>\n          <!--  </div>\n\n\n\n\n          </div>-->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/cobros/cobros.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: rgba(0, 137, 149, 0.02); }\n:host > div:nth-of-type(1) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    background: #008895;\n    height: 41px;\n    color: #FFFFFF;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 12px;\n    padding: 0px 20px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n:host > div:nth-of-type(1) > div:nth-of-type(1) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-right: 20px;\n      cursor: pointer; }\n:host > div:nth-of-type(1) > div:nth-of-type(2) {\n      margin-left: 20px; }\n:host > div:nth-of-type(1) > div:nth-of-type(3) {\n      margin-left: 20px; }\n:host > div:nth-of-type(1) > div:nth-of-type(4) {\n      margin-left: 20px; }\n:host > div:nth-of-type(1) > .regresar {\n      cursor: pointer;\n      font-weight: 200; }\n:host > div:nth-of-type(2) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    height: calc(100vh - 170px);\n    width: 100%; }\n:host > div:nth-of-type(2) > .panelNormal {\n      background: #FFFFFF;\n      height: 100%;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      width: 321px;\n      min-width: 321px;\n      overflow-y: scroll;\n      padding-bottom: 60px; }\n:host > div:nth-of-type(2) > .panelOcultar {\n      background: #FFFFFF;\n      -webkit-animation-name: ocultarPanel;\n              animation-name: ocultarPanel;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 15px 15px; }\n:host > div:nth-of-type(2) > .panelOcultar .filtros {\n        display: none; }\n:host > div:nth-of-type(2) > .panelMostrar {\n      background: #FFFFFF;\n      -webkit-animation-name: mostar;\n              animation-name: mostar;\n      -webkit-animation-duration: 0.5s;\n              animation-duration: 0.5s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      overflow-y: scroll; }\n:host > div:nth-of-type(2) .filtroHeader {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #424242;\n      font-size: 10px;\n      margin-bottom: 20px; }\n:host > div:nth-of-type(2) .filtroHeader > .abrir {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        cursor: pointer;\n        min-height: 22px; }\n:host > div:nth-of-type(2) .filtroHeader > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n:host > div:nth-of-type(2) .filtroHeader > div:nth-of-type(2) > .cerrar {\n          margin-left: 9px;\n          cursor: pointer; }\n:host > div:nth-of-type(2) .filtros {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      border-top: 1px solid #424242; }\n:host > div:nth-of-type(2) .filtros > div:nth-of-type(1) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        height: 50px;\n        border-bottom: 1px solid #ECEEF0;\n        padding-top: 15px;\n        padding-bottom: 20px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n:host > div:nth-of-type(2) .filtros > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        color: #FFFFFF;\n        font-size: 14px; }\n:host > div:nth-of-type(2) .filtros > div:nth-of-type(2) > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          cursor: pointer;\n          width: 140px;\n          height: 25px;\n          margin-right: 1px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        margin-top: 15px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            width: 130px;\n            font-size: 16px;\n            color: #424242; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) > div > div {\n              margin-top: 6px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(2) {\n          border-bottom: 1px solid #424242;\n          padding-bottom: 18px;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n            margin-top: 15px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(3) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          margin-top: 18px;\n          background: #424242;\n          width: 100%;\n          height: 35px;\n          cursor: pointer; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(1) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        height: 53px;\n        padding-top: 10px;\n        border-bottom: 1px solid #ECEEF0; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        margin-top: 15px;\n        padding-bottom: 18px;\n        border-bottom: 1px solid #424242; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(2) > input {\n          height: 25px;\n          border: 1px solid #ECEEF0;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          margin-top: 5px; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(3) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin-top: 18px;\n        background: #424242;\n        width: 100%;\n        height: 35px;\n        cursor: pointer; }\n:host > div:nth-of-type(2) > div:nth-of-type(2) {\n      height: 100%;\n      width: 100%;\n      background: rgba(0, 137, 149, 0.02); }\n:host > div:nth-of-type(2) > .resultados {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding: 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) {\n        border-bottom: 3px solid #424242;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        padding-bottom: 10px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(1) {\n          font-size: 22px; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(2) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          flex-direction: row-revesrse;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(2) > img {\n            cursor: pointer;\n            height: 30px;\n            width: 30px; }\n:host > div:nth-of-type(2) > .resultados > .total {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -ms-flex-line-pack: center;\n            align-content: center;\n        min-height: 30px;\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end; }\n:host .fechafactura {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow-x: scroll; }\n:host .fechafactura > div:nth-of-type(1) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      border-bottom: 1px solid #424242;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 2087px;\n      min-height: 57px; }\n:host .fechafactura > div:nth-of-type(1) > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        min-height: 57px;\n        max-width: 160px;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        text-align: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n:host .fechafactura > div:nth-of-type(2) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      overflow: scroll;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 2087px; }\n:host .fechafactura > div:nth-of-type(2) > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        min-height: 70px;\n        border-bottom: 1px solid #C2C3C9; }\n:host .fechafactura > div:nth-of-type(2) > div > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          max-width: 160px;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          font-size: 12px;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          text-align: center; }\n:host .fechacobro {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow-x: scroll; }\n:host .fechacobro > div:nth-of-type(1) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      border-bottom: 1px solid #424242;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 2785px;\n      min-height: 57px; }\n:host .fechacobro > div:nth-of-type(1) > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        min-height: 57px;\n        max-width: 160px;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        text-align: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n:host .fechacobro > div:nth-of-type(2) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      overflow: scroll;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 2788px; }\n:host .fechacobro > div:nth-of-type(2) > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        min-height: 70px;\n        border-bottom: 1px solid #C2C3C9; }\n:host .fechacobro > div:nth-of-type(2) > div > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          max-width: 160px;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          font-size: 12px;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          text-align: center; }\n:host > .fechacobroRapida {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow-x: scroll; }\n:host > .fechacobroRapida > div:nth-of-type(1) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      border-bottom: 1px solid #424242;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 1425px;\n      min-height: 57px; }\n:host > .fechacobroRapida > div:nth-of-type(1) > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        min-height: 57px;\n        max-width: 160px;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        text-align: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n:host > .fechacobroRapida > div:nth-of-type(2) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      overflow: scroll;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 1425px; }\n:host > .fechacobroRapida > div:nth-of-type(2) > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        min-height: 70px;\n        border-bottom: 1px solid #C2C3C9; }\n:host > .fechacobroRapida > div:nth-of-type(2) > div > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          max-width: 160px;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          font-size: 12px;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          text-align: center; }\n:host > .consultaDetalles {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    height: calc(100vh - 170px);\n    width: 100%; }\n:host > .consultaDetalles > .panelNormal {\n      background: #FFFFFF;\n      height: 100%;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      width: 321px;\n      min-width: 321px;\n      overflow-y: scroll;\n      padding-bottom: 70px; }\n:host > .consultaDetalles > .panelOcultar {\n      background: #FFFFFF;\n      -webkit-animation-name: ocultarPanel;\n              animation-name: ocultarPanel;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 15px 15px; }\n:host > .consultaDetalles > .panelOcultar .filtros {\n        display: none; }\n:host > .consultaDetalles > .panelMostrar {\n      background: #FFFFFF;\n      -webkit-animation-name: mostar;\n              animation-name: mostar;\n      -webkit-animation-duration: 0.5s;\n              animation-duration: 0.5s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      overflow-y: scroll; }\n:host > .consultaDetalles .filtroHeader {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #424242;\n      font-size: 10px;\n      margin-bottom: 20px; }\n:host > .consultaDetalles .filtroHeader > .abrir {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        cursor: pointer;\n        min-height: 22px; }\n:host > .consultaDetalles .filtroHeader > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n:host > .consultaDetalles .filtroHeader > div:nth-of-type(2) > .cerrar {\n          margin-left: 9px;\n          cursor: pointer; }\n:host > .consultaDetalles .filtros {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      border-top: 1px solid #424242;\n      border-bottom: 1px solid #424242;\n      padding-bottom: 25px; }\n:host > .consultaDetalles .filtros > .detalleCliente {\n        font-size: 16px;\n        color: #424242;\n        font-weight: bold;\n        margin-top: 15px; }\n:host > .consultaDetalles .filtros > .detalleTitulo {\n        font-size: 16px;\n        color: #424242;\n        font-weight: 400;\n        margin-top: 20px; }\n:host > .consultaDetalles .filtros > .detalleTexto {\n        font-size: 16px;\n        color: #424242;\n        font-weight: 200; }\n:host > .consultaDetalles .filtros > .detalleTextoVerde {\n        font-size: 16px;\n        color: #008895 !important;\n        font-weight: 300; }\n:host > .consultaDetalles > .contenidoFactura {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      height: calc(100vh - 170px);\n      width: 100%;\n      overflow: scroll; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura {\n        min-width: 592px;\n        padding: 15px 20px; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(1) {\n          font-size: 22px;\n          font-weight: bold; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) {\n          margin-top: 20px;\n          border-top: 1px solid #424242;\n          border-bottom: 1px solid #979797; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            border-bottom: 1px solid #FFFFFF; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div > div:nth-of-type(1) {\n              min-width: 8px;\n              background: transparent; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div > div:nth-of-type(2) {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: vertical;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: column;\n                      flex-direction: column;\n              padding: 5px 10px;\n              width: 100%;\n              cursor: pointer; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div > div:nth-of-type(2) > div {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-orient: horizontal;\n                -webkit-box-direction: normal;\n                    -ms-flex-direction: row;\n                        flex-direction: row;\n                -webkit-box-pack: justify;\n                    -ms-flex-pack: justify;\n                        justify-content: space-between;\n                margin: 5px 0px; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div:nth-of-type(2) {\n                  -webkit-box-pack: end;\n                      -ms-flex-pack: end;\n                          justify-content: flex-end; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div:hover {\n            background-color: #FFFFFF; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > .divActual {\n            background-color: #FFFFFF;\n            -webkit-box-shadow: 0 2px 4px -3px #008895;\n                    box-shadow: 0 2px 4px -3px #008895; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > .divActual > div:nth-of-type(1) {\n              min-width: 8px;\n              background: #008895; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > .divActive {\n            background-color: #FFFFFF; }\n:host > .consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(3) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -ms-flex-line-pack: center;\n              align-content: center;\n          width: 100%;\n          margin-top: 15px;\n          font-size: 14px;\n          color: #424242;\n          font-weight: 300; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo {\n        min-width: 592px;\n        background: #FFFFFF;\n        padding: 15px 20px; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(1) {\n          font-size: 22px;\n          font-weight: bold;\n          color: #008895; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) {\n          margin-top: 20px;\n          border-top: 1px solid #424242;\n          border-bottom: 1px solid #979797; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            cursor: pointer; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(1) {\n              min-width: 8px;\n              background: transparent; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-orient: vertical;\n                -webkit-box-direction: normal;\n                    -ms-flex-direction: column;\n                        flex-direction: column;\n                padding: 10px 10px;\n                width: 100%; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) {\n                  font-size: 18px;\n                  font-weight: bold;\n                  color: #424242;\n                  margin-bottom: 15px; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) {\n                  font-size: 16px;\n                  color: #008895;\n                  margin-bottom: 2px; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) {\n                  font-size: 16px;\n                  color: #F3B23F;\n                  margin-bottom: 2px; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) {\n                  font-size: 16px;\n                  color: #571C7B;\n                  margin-bottom: 2px; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(5) {\n                  font-size: 16px;\n                  color: #981E30;\n                  margin-bottom: 2px; }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div:hover {\n            background-color: rgba(0, 137, 149, 0.05); }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > .divActive {\n            background-color: rgba(0, 137, 149, 0.05); }\n:host > .consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > .divActive > div:nth-of-type(1) {\n              min-width: 8px;\n              background: #008895; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo {\n        min-width: 592px;\n        padding-top: 15px; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(1) {\n          font-size: 22px;\n          font-weight: bold;\n          padding: 0px 20px; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) {\n          border-top: 1px solid #424242;\n          margin: 20px 20px;\n          overflow: scroll;\n          max-height: calc(100vh - 228px); }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div {\n            border-bottom: 1px solid #D8D8D8; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .titulo {\n              font-size: 18px;\n              color: #008895;\n              margin-top: 20px;\n              margin-bottom: 10px; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .subTitulo {\n              font-size: 16px;\n              font-weight: 400;\n              color: #424242;\n              margin-bottom: 3px; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normal {\n              font-size: 16px;\n              font-weight: 200;\n              color: #424242;\n              margin-bottom: 25px; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde {\n              font-size: 16px;\n              font-weight: 200;\n              margin-bottom: 25px;\n              color: #008895; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde > span {\n                cursor: pointer; }\n:host > .consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde:hover > span {\n              text-decoration: underline; }\n:host > .fechacobroRapida {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: 100%;\n    height: 100%;\n    overflow-x: scroll; }\n:host > .fechacobroRapida > div:nth-of-type(1) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      border-bottom: 1px solid #424242;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 2742px;\n      min-height: 57px; }\n:host > .fechacobroRapida > div:nth-of-type(1) > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        min-height: 57px;\n        max-width: 160px;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        text-align: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n:host > .fechacobroRapida > div:nth-of-type(2) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      overflow: scroll;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      min-width: 2742px; }\n:host > .fechacobroRapida > div:nth-of-type(2) > div {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        min-height: 70px;\n        border-bottom: 1px solid #C2C3C9; }\n:host > .fechacobroRapida > div:nth-of-type(2) > div > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          max-width: 160px;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          font-size: 12px;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          text-align: center; }\n@-webkit-keyframes ocultarPanel {\n  from {\n    min-width: 321px; }\n  to {\n    min-width: 50px; } }\n@keyframes ocultarPanel {\n  from {\n    min-width: 321px; }\n  to {\n    min-width: 50px; } }\n@-webkit-keyframes mostar {\n  from {\n    width: 50px; }\n  to {\n    width: 321px; } }\n@keyframes mostar {\n  from {\n    width: 50px; }\n  to {\n    width: 321px; } }\n:host .w3-animate-right {\n    position: relative;\n    -webkit-animation: animateright 0.4s;\n            animation: animateright 0.4s; }\n@-webkit-keyframes animateright {\n  from {\n    right: -900px;\n    opacity: 0; }\n  to {\n    right: 0;\n    opacity: 1; } }\n@keyframes animateright {\n  from {\n    right: -900px;\n    opacity: 0; }\n  to {\n    right: 0;\n    opacity: 1; } }\n:host .w3-animate-left {\n    position: relative;\n    -webkit-animation: animateleft 0.8s;\n            animation: animateleft 0.8s; }\n@-webkit-keyframes animateleft {\n  from {\n    left: -50px;\n    opacity: 0; }\n  to {\n    left: 0;\n    opacity: 1; } }\n@keyframes animateleft {\n  from {\n    left: -50px;\n    opacity: 0; }\n  to {\n    left: 0;\n    opacity: 1; } }\n:host .GlobalContainer-graphic-Component {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n:host .GlobalContainer-graphic-Component .GraphicsContainer-graphic-Component {\n      width: 100%;\n      height: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      background: #f7fbfb; }\n:host .GlobalContainer-graphic-Component .Filter-Container-graphic-Component {\n      width: 300px;\n      height: 100%;\n      background: #424242; }\n:host .GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Tabgraphic-Component {\n        position: absolute;\n        right: 290px;\n        top: 1%;\n        background: #424242;\n        cursor: pointer;\n        width: 50px;\n        height: 35px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-line-pack: center;\n            align-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center; }\n:host .GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component {\n        margin-left: 17px;\n        width: 100%;\n        height: 100%; }\n:host .GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .totals-filter-graphic-Component {\n          width: 100%;\n          background: transparent;\n          height: 10%;\n          color: #fff;\n          border-style: solid;\n          border-bottom: 1px solid #008895;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -ms-flex-line-pack: start;\n              align-content: flex-start;\n          -ms-flex-line-pack: end;\n              align-content: flex-end;\n          -webkit-box-align: end;\n              -ms-flex-align: end;\n                  align-items: flex-end;\n          padding-bottom: 10px; }\n:host .GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .Results-filter-graphic-Component {\n          width: 100%;\n          background: transparent;\n          height: 18%;\n          color: #fff;\n          border-style: solid;\n          border-top: 1px solid #008895;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -ms-flex-line-pack: start;\n              align-content: flex-start;\n          -ms-flex-line-pack: end;\n              align-content: flex-end;\n          -webkit-box-align: end;\n              -ms-flex-align: end;\n                  align-items: flex-end;\n          padding-bottom: 10px;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center; }\n:host .GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .filters-graphic-Component {\n          width: 100%;\n          background: transparent;\n          height: 40%;\n          color: #fff;\n          border-style: solid;\n          border-bottom: 1px solid #008895;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -ms-flex-line-pack: start;\n              align-content: flex-start;\n          -ms-flex-line-pack: end;\n              align-content: flex-end;\n          -webkit-box-align: end;\n              -ms-flex-align: end;\n                  align-items: flex-end;\n          padding-bottom: 10px; }\n:host .circleGreen {\n    height: 15px;\n    width: 15px;\n    background-color: #91BE5F;\n    border-radius: 50%;\n    margin-top: 28px; }\n:host .circleRed {\n    height: 15px;\n    width: 15px;\n    background-color: #952936;\n    border-radius: 50%;\n    margin-top: 28px; }\n:host .circleYellow {\n    height: 15px;\n    width: 15px;\n    background-image: url('cobr_flag.22ddfa47182dffa0b19b.svg');\n    border-radius: 50%;\n    margin-top: 28px; }\n:host .circlePurple {\n    height: 15px;\n    width: 15px;\n    background-color: #A9A9F5;\n    border-radius: 50%;\n    margin-top: 28px; }\n:host .circleDatePurple {\n    height: 12px;\n    width: 12px;\n    background-color: #AA65E7;\n    border-radius: 50%;\n    margin-top: 48px; }\n:host .circleDateGreen {\n    height: 12px;\n    width: 12px;\n    background-color: #439DC1;\n    border-radius: 50%;\n    margin-top: 21px; }\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/cobros/cobros.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CobrosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__ = __webpack_require__("./src/app/components/shared/filter/element.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_gestion_gestion_service__ = __webpack_require__("./src/app/services/gestion/gestion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_gestion_consulta_cobros_cobros_service__ = __webpack_require__("./src/app/services/gestion/consulta/cobros/cobros.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__class_UtilFechas__ = __webpack_require__("./src/app/class/UtilFechas.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CobrosComponent = /** @class */ (function () {
    function CobrosComponent(router, _gestionService, coreComponent, _cobrosService) {
        var _this = this;
        this.router = router;
        this._gestionService = _gestionService;
        this.coreComponent = coreComponent;
        this._cobrosService = _cobrosService;
        this.valueFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ListaSC = [];
        this.DatosCobros = [];
        this.tiempo = [];
        this.programado = [];
        this.nivel = [];
        this.conFecha = [];
        this.sinFecha = [];
        this.cpago = [];
        this.estado = [];
        this.medio = [];
        this.dias = [];
        this.arreglo = [];
        this.classPanel = "panelNormal";
        this.hiddenClose = true;
        this.lstItems = ['Fecha Facturación ', 'Fecha cobro'];
        this.lstRadiosRapida = ['Factura', 'UUID'];
        this.filtroConsultaRapida = "Factura";
        this.avanzada = true;
        this.detalle = false;
        this.fechaFacturacion = true;
        this.fechaCobros = false;
        this.isTableShow = true;
        this.Clear = true;
        this.totalDetalle = 0;
        this.itemsDropList = [{ nombre: '--TODOS--', key: 0 }, { nombre: 'nombre1', key: 1 }, { nombre: 'nombre2', key: 2 }];
        this.lstFacturas = [];
        this.IsDate = true;
        this.lstCobrosDetalle = [];
        this.lstCobrosDetalleActive = [];
        this.defaultSelected = { nombre: '--TODOS--' };
        this.dropClientes = [{ nombre: '--TODOS--', key: 0 }];
        this.dropCobrador = [{ nombre: '--TODOS--', key: 0 }];
        this.lstLineaTiempo = [];
        this.lstLineaTiempoActive = [];
        this.estadoItemLineaTiempo = "";
        this.itemLineaTiempo = [];
        this.lstCobros2 = [];
        this.totalMontoDolares = 0;
        this.totalMontoDolares1 = 0;
        this.totalMontoDolares2 = 0;
        this.totalCobros = 0;
        this.totalCobros1 = 0;
        this.totalCobros2 = 0;
        this.totalPiezas = 0;
        this.totalPiezas1 = 0;
        this.totalPiezas2 = 0;
        this.Fechas = {
            fechaInicial: new Date(),
            fechaFinal: new Date(),
            fechaInicial1: new Date(),
            fechaFinal1: new Date(),
        };
        this.date = new Date();
        this.date1 = new Date(this.date.getTime() - 24 * 60 * 60 * 1000);
        this.date22 = new Date(this.date.getTime() - (24 * 60 * 60 * 1000) * 2);
        this.date3 = new Date(this.date.getTime() - 24 * 60 * 60 * 1000);
        this.date4 = new Date(this.date.getTime() - (24 * 60 * 60 * 1000) * 2);
        this._utilFechas = new __WEBPACK_IMPORTED_MODULE_10__class_UtilFechas__["a" /* UtilFechas */]();
        this.totalGraficas = {
            niPorCobrar: { totalMonto: 0, totalClientes: 0, totalCobros: 0, totalPartidas: 0, totalPiezas: 0 },
            cpagoPorcobrar: { totalMonto: 0, totalClientes: 0, totalCobros: 0, totalPartidas: 0, totalPiezas: 0 },
            abiertoCerrado: { totalMonto: 0, totalClientes: 0, totalCobros: 0, totalPartidas: 0, totalPiezas: 0 },
            programadoPorProgramar: { totalMonto: 0, totalClientes: 0, totalCobros: 0, totalPartidas: 0, totalPiezas: 0 },
            nicobrado: { totalMonto: 0, totalClientes: 0, totalCobros: 0, totalPartidas: 0, totalPiezas: 0 },
            cPagocobrado: { totalMonto: 0, totalClientes: 0, totalCobros: 0, totalPartidas: 0, totalPiezas: 0 },
            diasRestanCredito: { totalMonto: 0, totalClientes: 0, totalCobros: 0, totalPartidas: 0, totalPiezas: 0 },
            medioPagoProgramado: { totalMonto: 0, totalClientes: 0, totalCobros: 0, totalPartidas: 0, totalPiezas: 0 },
            ETFT: { totalMonto: 0, totalClientes: 0, totalCobros: 0, totalPartidas: 0, totalPiezas: 0 }
        };
        this.datosGraficas = {
            niPorCobrar: {
                AAplus: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                AA: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                AM: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                MB: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                AB: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                MM: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                MA: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 }
            },
            cPagoPorcobrar: {
                contraEntrega: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                dias30: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                dias45: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                dias60: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                dias90: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                dias15: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                prepago: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
            },
            abiertoCerrado: {
                abierto: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                cerrado: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 }
            },
            programadoPorProgramar: {
                programado: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                porProgramar: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 }
            },
            nicobrado: {
                AAplus: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                AA: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                AM: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                MB: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
            },
            cPagocobrado: {
                contraEntrega: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                dias30: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                dias45: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                dias60: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 }
            },
            diasRestanCredito: {
                pendiente: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                cobrado: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 }
            },
            medioPagoProgramado: {
                otros: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                transferencia: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                cheques: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 }
            },
            ETFT: {
                entiempo: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 },
                fueradeTiempo: { monto: 0, clientes: 0, cobros: 0, partidas: 0, piezas: 0 }
            }
        };
        this.Llenar = function () {
            _this.Elements = [new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Clientes", _this.dropClientes, true),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Cobrador", _this.dropCobrador, false),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Vendió", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Proveedora', key: 1 },
                    { nombre: 'Proquifa', key: 2 },
                    { nombre: 'Pharma', key: 3 },
                    { nombre: 'Golocaer', key: 4 },
                    { nombre: 'Mungen', key: 5 }
                ], false),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Condiciones de pago", [
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
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Días restantes de crédito", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'En Tiempo', key: 1 },
                    { nombre: 'A tres días de vencimiento', key: 2 },
                    { nombre: 'Vencimiento', key: 3 },
                    { nombre: 'Tres días después de vencimiento', key: 4 },
                    { nombre: 'Vencido', key: 5 }
                ], false),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Estado", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Cerrado', key: 1 },
                    { nombre: 'Abierto', key: 2 }
                ], false),
            ];
            //isThereData indica que ya no es necesario mostrar el loader
            _this.isThereData = true;
            _this.Clear = false;
        };
        this.Llenar2 = function () {
            _this.Elements = [new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Clientes", _this.dropClientes, true),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Cobrador", _this.dropCobrador, false),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Vendió", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Proveedora', key: 1 },
                    { nombre: 'Proquifa', key: 2 },
                    { nombre: 'Pharma', key: 3 },
                    { nombre: 'Golocaer', key: 4 },
                    { nombre: 'Mungen', key: 5 },
                ], false),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Condiciones de pago", [
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
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Días restantes de crédito", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'En Tiempo', key: 1 },
                    { nombre: 'A tres días de vencimiento', key: 2 },
                    { nombre: 'Vencimiento', key: 3 },
                    { nombre: 'Tres días después de vencimiento', key: 4 },
                    { nombre: 'Vencido', key: 5 },
                ], false),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Estado", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Cerrado', key: 1 },
                    { nombre: 'Abierto', key: 2 },
                ], false),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Banco", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Banamex', key: 1 },
                    { nombre: 'BBVA BANCOMER', key: 2 },
                    { nombre: 'I.B.C.', key: 3 },
                    { nombre: 'Ixe', key: 4 },
                ], false),
                new __WEBPACK_IMPORTED_MODULE_3__shared_filter_element_model__["a" /* ElementFilter */]("string", "Cuenta", [
                    { nombre: '--TODOS--', key: 0 },
                ], false),
            ];
            //isThereData indica que ya no es necesario mostrar el loader
            _this.isThereData = true;
            _this.Clear = true;
        };
        this.isThereData = false;
        this.IsImage = true;
    }
    CobrosComponent.prototype.getFechaImpl = function ($event) {
        this.Fechas.fechaInicial = this.date1;
        this.Fechas.fechaFinal = this.date3;
        if (this.Fechas.fechaInicial.getDay() === 6) {
            this.fechaValidaInicial = new Date(this.Fechas.fechaInicial.getTime() - (24 * 60 * 60 * 1000));
            this.fechaValidaFinal = new Date(this.Fechas.fechaInicial.getTime() - (24 * 60 * 60 * 1000));
        }
        else {
            if (this.Fechas.fechaInicial.getDay() === 0) {
                this.fechaValidaInicial = new Date(this.Fechas.fechaInicial.getTime() - (24 * 60 * 60 * 1000) * 2);
                this.fechaValidaFinal = new Date(this.Fechas.fechaFinal.getTime() - (24 * 60 * 60 * 1000) * 2);
            }
            else {
                this.fechaValidaInicial = this.Fechas.fechaInicial;
                this.fechaValidaFinal = this.Fechas.fechaFinal;
            }
        }
        this.date1 = this.fechaValidaInicial;
        this.date3 = this.fechaValidaFinal;
    };
    CobrosComponent.prototype.getFechaImpl2 = function ($event) {
        this.Fechas.fechaInicial1 = this.date22;
        this.Fechas.fechaFinal1 = this.date4;
        if (this.Fechas.fechaInicial1.getDay() === 6) {
            this.fechaValidaInicial1 = new Date(this.Fechas.fechaInicial1.getTime() - (24 * 60 * 60 * 1000) * 2);
            this.fechaValidaFinal1 = new Date(this.Fechas.fechaFinal1.getTime() - (24 * 60 * 60 * 1000) * 2);
        }
        else {
            if (this.Fechas.fechaInicial1.getDay() === 0) {
                this.fechaValidaInicial1 = new Date(this.Fechas.fechaInicial1.getTime() - (24 * 60 * 60 * 1000) * 4);
                this.fechaValidaFinal1 = new Date(this.Fechas.fechaFinal1.getTime() - (24 * 60 * 60 * 1000) * 4);
            }
            else {
                this.fechaValidaInicial1 = this.Fechas.fechaInicial1;
                this.fechaValidaFinal1 = this.Fechas.fechaFinal1;
            }
        }
        this.date22 = this.fechaValidaInicial1;
        this.date4 = this.fechaValidaFinal1;
    };
    CobrosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filtroForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            filtroDato: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
        });
        //this.date = new Date();
        //this.date2 = new Date();
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        var cuerpo = {
            fechaInicio: new Date(),
            fechaFin: new Date(),
            idCliente: 0,
            medioPago: "",
            fpor: "",
            estado: "",
            cpago: "",
            busquedaCR: false,
            factura: '',
            uuid: "",
            drc: 5,
            idUsuarioLogueado: 91,
            cobrador: 0,
            cuenta: "",
            banco: "",
        };
        this.obtenerCobros(cuerpo);
        this.facturaForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
        });
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
        /*this.filtroTotalAzul();
        this.filtroTotalMorado();
        this.filtroTotalBlanco();*/
    };
    CobrosComponent.prototype.filtroTotalAzul = function () {
        var _this = this;
        //Obtener monto en color Azul
        this.totalCobros = 0;
        this.totalMontoDolares = 0;
        this.totalPiezas = 0;
        var cuerpo = {
            fechaInicio: this.fechaValidaInicial,
            fechaFin: this.fechaValidaFinal,
            idCliente: 0,
            medioPago: "",
            fpor: "",
            estado: "",
            cpago: "",
            busquedaCR: false,
            factura: '',
            uuid: "",
            drc: 5,
            idUsuarioLogueado: 91,
            cobrador: 0,
            cuenta: "",
            banco: "",
        };
        this._cobrosService.obtenerCobros(cuerpo).subscribe(function (data) {
            data.current.forEach(function (cobro, index) {
                _this.totalMontoDolares = _this.totalMontoDolares + cobro.montoDolares;
                _this.totalCobros = _this.totalCobros + 1;
                _this.totalPiezas = _this.totalPiezas + cobro.piezas;
            });
            _this.coreComponent.closeModal(0);
            console.log("****Monto Dolares Azul" + _this.totalMontoDolares);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    CobrosComponent.prototype.filtroTotalMorado = function () {
        var _this = this;
        this.totalCobros2 = 0;
        this.totalMontoDolares2 = 0;
        this.totalPiezas2 = 0;
        //Obtener monto en color morado
        var cuerpo2 = {
            fechaInicio: this.fechaValidaInicial1,
            fechaFin: this.fechaValidaInicial1,
            idCliente: 0,
            medioPago: "",
            fpor: "",
            estado: "",
            cpago: "",
            busquedaCR: false,
            factura: '',
            uuid: "",
            drc: 5,
            idUsuarioLogueado: 91,
            cobrador: 0,
            cuenta: "",
            banco: "",
        };
        this._cobrosService.obtenerCobros(cuerpo2).subscribe(function (data) {
            data.current.forEach(function (cobro, index) {
                _this.totalMontoDolares2 = _this.totalMontoDolares2 + cobro.montoDolares;
                _this.totalCobros2 = _this.totalCobros2 + 1;
                _this.totalPiezas2 = _this.totalPiezas2 + cobro.piezas;
            });
            _this.coreComponent.closeModal(0);
            console.log("****Monto Dolares Morado" + _this.totalMontoDolares2);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    CobrosComponent.prototype.filtroTotalBlanco = function () {
        var _this = this;
        this.totalMontoDolares1 = 0;
        this.totalCobros1 = 0;
        this.totalPiezas1 = 0;
        this.coreComponent.openModal(0);
        //Obtener monto en colo Blanco
        var cuerpo1 = {
            fechaInicio: new Date(),
            fechaFin: new Date(),
            idCliente: 0,
            medioPago: "",
            fpor: "",
            estado: "",
            cpago: "",
            busquedaCR: false,
            factura: '',
            uuid: "",
            drc: 5,
            idUsuarioLogueado: 91,
            cobrador: 0,
            cuenta: "",
            banco: "",
        };
        this._cobrosService.obtenerCobros(cuerpo1).subscribe(function (data) {
            data.current.forEach(function (cobro, index) {
                _this.totalMontoDolares1 = _this.totalMontoDolares1 + cobro.montoDolares;
                _this.totalCobros1 = _this.totalCobros1 + 1;
                _this.totalPiezas1 = _this.totalPiezas1 + cobro.piezas;
            });
            _this.coreComponent.closeModal(0);
            console.log("****Monto Dolares Blanco" + _this.totalMontoDolares1);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    CobrosComponent.prototype.eliminarObjetosDuplicados = function (arr, prop) {
        var nuevoArray = [];
        var lookup = {};
        for (var i in arr) {
            lookup[arr[i][prop]] = arr[i];
        }
        for (i in lookup) {
            nuevoArray.push(lookup[i]);
        }
        //console.log(nuevoArray);
        //this.Estadisticos.totalcompras= nuevoArray.length;
        return nuevoArray;
    };
    CobrosComponent.prototype.backMenu = function () {
        this.router.navigate(["protected/gestion/"]);
    };
    CobrosComponent.prototype.closePanel = function () {
        this.classPanel = "panelOcultar";
        this.hiddenClose = false;
    };
    CobrosComponent.prototype.openPanel = function () {
        if (!this.hiddenClose) {
            this.classPanel = "panelMostrar";
            this.hiddenClose = true;
        }
    };
    CobrosComponent.prototype.radioFechaFacturacion = function ($event) {
        if ($event == 0 && !this.fechaFacturacion) {
            this.fechaFacturacion = true;
            this.IsDate = false;
            this.IsDate = true;
            this.Llenar();
            this.lstRadiosRapida = ['Factura', 'UUID'];
            this.fechaCobros = false;
            if (this.avanzada) {
                var cuerpo = {
                    fechaInicio: new Date(),
                    fechaFin: new Date(),
                    idCliente: 0,
                    medioPago: "",
                    fpor: "",
                    estado: "",
                    cpago: "",
                    busquedaCR: false,
                    factura: '',
                    uuid: "",
                    drc: 5,
                    idUsuarioLogueado: 91,
                    cobrador: 0,
                    cuenta: "",
                    banco: "",
                };
                console.log("Método radioFechaFacturacion");
                this.obtenerCobros(cuerpo);
            }
            else {
                this.filtroForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
                    filtroDato: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
                });
            }
        }
        else if ($event == 1 && this.fechaFacturacion) {
            this.fechaFacturacion = false;
            this.IsDate = false;
            this.IsDate = true;
            this.Llenar2();
            this.lstRadiosRapida = ['Factura', 'UUID'];
            this.filtroConsultaRapida = "Factura";
            if (!this.fechaFacturacion && !this.avanzada) {
                this.fechaCobros = true;
            }
            if (this.avanzada) {
                var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
                var cuerpo = {
                    fechaInicio: new Date(),
                    fechaFin: new Date(),
                    idCliente: 0,
                    medioPago: "",
                    fpor: "",
                    estado: "",
                    cpago: "",
                    busquedaCR: true,
                    factura: '',
                    uuid: "",
                    drc: 5,
                    idUsuarioLogueado: 91,
                    cobrador: 0,
                    cuenta: "",
                    banco: "",
                };
                this.obtenerCobros(cuerpo);
            }
            else {
                this.filtroForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
                    filtroDato: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
                });
                var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
                var cuerpo = {
                    fechaInicio: new Date(),
                    fechaFin: new Date(),
                    idCliente: 0,
                    medioPago: "",
                    fpor: "",
                    estado: "",
                    cpago: "",
                    busquedaCR: false,
                    factura: '',
                    uuid: "",
                    drc: 5,
                    idUsuarioLogueado: 91,
                    cobrador: 0,
                    cuenta: "",
                    banco: "",
                };
                this.obtenerCobros(cuerpo);
            }
        }
    };
    CobrosComponent.prototype.radioRapida = function ($event) {
        console.log("Método radioRapida ");
        if ($event == 0) {
            this.filtroConsultaRapida = "Factura";
        }
        else if ($event == 1) {
            this.filtroConsultaRapida = "UUID";
        }
    };
    CobrosComponent.prototype.filtroAvanzada = function () {
        if (!this.avanzada) {
            this.avanzada = true;
            this.fechaCobros = false;
            this.filtroConsultaRapida = "Factura";
            this.filtroForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
                filtroDato: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]()
            });
            if (this.fechaFacturacion) {
                var cuerpo = {
                    fechaInicio: new Date(),
                    fechaFin: new Date(),
                    idCliente: 0,
                    medioPago: "",
                    fpor: "",
                    estado: "",
                    cpago: "",
                    busquedaCR: false,
                    factura: '',
                    uuid: "",
                    drc: 5,
                    idUsuarioLogueado: 91,
                    cobrador: 0,
                    cuenta: "",
                    banco: "",
                };
                this.obtenerCobros(cuerpo);
            }
            else {
                var cuerpo = {
                    fechaInicio: new Date(),
                    fechaFin: new Date(),
                    idCliente: 0,
                    medioPago: "",
                    fpor: "",
                    estado: "",
                    cpago: "",
                    busquedaCR: true,
                    factura: '',
                    uuid: "",
                    drc: 5,
                    idUsuarioLogueado: 91,
                    cobrador: 0,
                    cuenta: "",
                    banco: "",
                };
                this.obtenerCobros(cuerpo);
            }
        }
    };
    CobrosComponent.prototype.filtroRapida = function () {
        if (this.avanzada) {
            this.avanzada = false;
            if (!this.fechaFacturacion) {
                this.fechaCobros = true;
                var cuerpo = {
                    fechaInicio: new Date(),
                    fechaFin: new Date(),
                    idCliente: 0,
                    medioPago: "",
                    fpor: "",
                    estado: "",
                    cpago: "",
                    busquedaCR: false,
                    factura: '',
                    uuid: "",
                    drc: 5,
                    idUsuarioLogueado: 91,
                    cobrador: 0,
                    cuenta: "",
                    banco: "",
                };
                this.obtenerCobros(cuerpo);
                console.log("IF Método filtroRapida ");
            }
            else {
                var cuerpo = {
                    fechaInicio: new Date(),
                    fechaFin: new Date(),
                    idCliente: 0,
                    medioPago: "",
                    fpor: "",
                    estado: "",
                    cpago: "",
                    busquedaCR: true,
                    factura: (this.filtroConsultaRapida == "Factura") ? this.filtroForm.get('filtroDato').value : "",
                    uuid: (this.filtroConsultaRapida == "UUID") ? this.filtroForm.get('filtroDato').value : "",
                    drc: 5,
                    idUsuarioLogueado: 91,
                    cobrador: 0,
                    cuenta: "",
                    banco: "",
                };
                this.obtenerCobros(cuerpo);
                console.log("ELSE Método filtroRapida ");
            }
        }
    };
    CobrosComponent.prototype.filtroRapido = function () {
        console.log(this.filtroForm.get('filtroDato').value);
        if (this.fechaFacturacion) {
            console.log(("If filtroRapido"));
            if (this.filtroConsultaRapida == "Factura") {
                var cuerpo = {
                    fechaInicio: new Date(),
                    fechaFin: new Date(),
                    idCliente: 0,
                    medioPago: "",
                    fpor: "",
                    estado: "",
                    cpago: "",
                    busquedaCR: false,
                    factura: (this.filtroConsultaRapida == "Factura") ? this.filtroForm.get('filtroDato').value : "",
                    uuid: (this.filtroConsultaRapida == "UUID") ? this.filtroForm.get('filtroDato').value : "",
                    drc: 5,
                    idUsuarioLogueado: 91,
                    cobrador: 0,
                    cuenta: "",
                    banco: "",
                };
                this.obtenerCobros(cuerpo);
            }
            else {
                var cuerpo = {
                    fechaInicio: new Date(),
                    fechaFin: new Date(),
                    idCliente: 0,
                    medioPago: "",
                    fpor: "",
                    estado: "",
                    cpago: "",
                    busquedaCR: true,
                    factura: (this.filtroConsultaRapida == "Factura") ? this.filtroForm.get('filtroDato').value : "",
                    uuid: (this.filtroConsultaRapida == "UUID") ? this.filtroForm.get('filtroDato').value : "",
                    drc: 5,
                    idUsuarioLogueado: 91,
                    cobrador: 0,
                    cuenta: "",
                    banco: "",
                };
                this.obtenerCobros(cuerpo);
            }
        }
        else {
            if (this.filtroConsultaRapida == "Factura") {
                var cuerpo = {
                    fechaInicio: new Date(),
                    fechaFin: new Date(),
                    idCliente: 0,
                    medioPago: "",
                    fpor: "",
                    estado: "",
                    cpago: "",
                    busquedaCR: false,
                    factura: (this.filtroConsultaRapida == "Factura") ? this.filtroForm.get('filtroDato').value : "",
                    uuid: (this.filtroConsultaRapida == "UUID") ? this.filtroForm.get('filtroDato').value : "",
                    drc: 5,
                    idUsuarioLogueado: 91,
                    cobrador: 0,
                    cuenta: "",
                    banco: "",
                };
                console.log(("Else filtroRapido"));
                this.obtenerCobros(cuerpo);
            }
            else {
                var cuerpo = {
                    fechaInicio: new Date(),
                    fechaFin: new Date(),
                    idCliente: 0,
                    medioPago: "",
                    fpor: "",
                    estado: "",
                    cpago: "",
                    busquedaCR: true,
                    factura: (this.filtroConsultaRapida == "Factura") ? this.filtroForm.get('filtroDato').value : "",
                    uuid: (this.filtroConsultaRapida == "UUID") ? this.filtroForm.get('filtroDato').value : "",
                    drc: 5,
                    idUsuarioLogueado: 91,
                    cobrador: 0,
                    cuenta: "",
                    banco: "",
                };
                console.log(("Else filtroRapido"));
                this.obtenerCobros(cuerpo);
            }
        }
    };
    CobrosComponent.prototype.emitItem = function ($event) {
        console.log($event);
    };
    CobrosComponent.prototype.dropList = function (index, $event) {
    };
    CobrosComponent.prototype.mostrarDatos = function ($event) {
        this.nivel = [];
        this.cpago = [];
        this.estado = [];
        this.medio = [];
        if (this.fechaFacturacion) {
            console.log("Entro con fecha facturación " + this.fechaFacturacion);
            var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
            if ($event.Datos[0].nombre === "--TODOS--") {
                $event.Datos[0].key = 0;
            }
            if ($event.Datos[2].nombre === "--TODOS--") {
                $event.Datos[2].nombre = "";
            }
            if ($event.Datos[4].nombre === "--TODOS--") {
                $event.Datos[4].nombre = "";
            }
            if ($event.Datos[3].nombre === "--TODOS--") {
                $event.Datos[3].nombre = "";
            }
            if ($event.Datos[1].nombre === "--TODOS--") {
                $event.Datos[1].key = 0;
            }
            var cuerpo = {
                fechaInicio: $event.Fechas.fechaInicial,
                fechaFin: $event.Fechas.fechaFinal,
                idCliente: $event.Datos[0].key,
                medioPago: "",
                cobrador: $event.Datos[1].key,
                fpor: $event.Datos[2].nombre,
                cpago: $event.Datos[3].nombre,
                estado: $event.Datos[4].nombre,
                busquedaCR: false,
                factura: '',
                uuid: "",
                drc: 5,
                idUsuarioLogueado: 91,
            };
            parametros.drc = $event.Datos[4].nombre;
            this.obtenerCobros(cuerpo);
            if ($event.Datos[0].key === 0) {
                $event.Datos[0].nombre = "--TODOS--";
            }
            if ($event.Datos[2].nombre === "--TODOS--") {
                $event.Datos[2].nombre = "";
            }
            if ($event.Datos[5].nombre === "") {
                $event.Datos[5].nombre = "--TODOS--";
            }
            if ($event.Datos[3].nombre === "") {
                $event.Datos[3].nombre = "--TODOS--";
            }
            if ($event.Datos[1].key === 0) {
                $event.Datos[1].nombre = "--TODOS--";
            }
            console.log("Método mostrarDatos");
        }
        else {
            console.log("NO Entro con fecha facturación" + this.fechaFacturacion);
            if ($event.Datos[0].nombre === "--TODOS--") {
                $event.Datos[0].key = 0;
            }
            if ($event.Datos[2].nombre === "--TODOS--") {
                $event.Datos[2].nombre = "";
            }
            if ($event.Datos[5].nombre === "--TODOS--") {
                $event.Datos[5].nombre = "";
            }
            if ($event.Datos[3].nombre === "--TODOS--") {
                $event.Datos[3].nombre = "";
            }
            if ($event.Datos[1].nombre === "--TODOS--") {
                $event.Datos[1].key = 0;
            }
            var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
            var cuerpo = {
                fechaInicio: $event.Fechas.fechaInicial,
                fechaFin: $event.Fechas.fechaFinal,
                idCliente: $event.Datos[0].key,
                medioPago: "",
                cobrador: $event.Datos[1].key,
                fpor: $event.Datos[2].nombre,
                cpago: $event.Datos[3].nombre,
                estado: $event.Datos[5].nombre,
                busquedaCR: true,
                factura: '',
                uuid: "",
                drc: 5,
                idUsuarioLogueado: 91,
            };
            console.log(cuerpo);
            this.obtenerCobros(cuerpo);
            if ($event.Datos[0].key === 0) {
                $event.Datos[0].nombre = "--TODOS--";
            }
            if ($event.Datos[2].nombre === "--TODOS--") {
                $event.Datos[2].nombre = "";
            }
            if ($event.Datos[5].nombre === "") {
                $event.Datos[5].nombre = "--TODOS--";
            }
            if ($event.Datos[3].nombre === "") {
                $event.Datos[3].nombre = "--TODOS--";
            }
            if ($event.Datos[1].key === 0) {
                $event.Datos[1].nombre = "--TODOS--";
            }
            console.log("Método mostrarDatos");
        }
        console.log($event);
    };
    CobrosComponent.prototype.obtenerCobros = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._cobrosService.obtenerCobros(parametros).subscribe(function (data) {
            _this.lstCobros = data.current;
            var listaClientes = _this.eliminarObjetosDuplicados(_this.lstCobros, 'nombreCliente');
            var listaNiveles = _this.eliminarObjetosDuplicados(_this.lstCobros, 'nivelIngreso');
            _this.niPorCobrar(listaNiveles, listaClientes);
            var listaCpago = _this.eliminarObjetosDuplicados(_this.lstCobros, 'cpago');
            _this.cpagoPorcobrar(listaCpago, listaClientes);
            var listaAbierto = _this.eliminarObjetosDuplicados(_this.lstCobros, 'estado');
            _this.abiertoVScerrado(listaAbierto, listaClientes);
            var listamedio = _this.eliminarObjetosDuplicados(_this.lstCobros, 'medioPago');
            _this.medioPagoprogramado(listamedio, listaClientes);
            var listaprogramar = _this.eliminarObjetosDuplicados(_this.lstCobros, 'fechaEsperadaPago');
            _this.programadoVSporprogramar(listaprogramar, listaClientes);
            var listaDias = _this.eliminarObjetosDuplicados(_this.lstCobros, 'diasRestantesCobro');
            _this.diasRestantesCredito(listaDias, listaClientes);
            var listatiempo = _this.eliminarObjetosDuplicados(_this.lstCobros, 'fechaEsperadaPago');
            _this.enTiempo(listamedio);
            console.log(_this.lstCobros);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    //Función para la grafica "NI POR COBRAR"
    CobrosComponent.prototype.niPorCobrar = function (listaNiveles, listaClientes) {
        var _this = this;
        this.datosGraficas.niPorCobrar.AAplus.clientes = listaClientes.filter(function (nivel) { return nivel.nivelIngreso === 'AAplus'; }).length;
        this.datosGraficas.niPorCobrar.AM.clientes = listaClientes.filter(function (nivel) { return nivel.nivelIngreso === 'AM'; }).length;
        this.datosGraficas.niPorCobrar.AA.clientes = listaClientes.filter(function (nivel) { return nivel.nivelIngreso === 'AA'; }).length;
        this.datosGraficas.niPorCobrar.AB.clientes = listaClientes.filter(function (nivel) { return nivel.nivelIngreso === 'AB'; }).length;
        this.datosGraficas.niPorCobrar.MA.clientes = listaClientes.filter(function (nivel) { return nivel.nivelIngreso === 'MA'; }).length;
        this.datosGraficas.niPorCobrar.MM.clientes = listaClientes.filter(function (nivel) { return nivel.nivelIngreso === 'MM'; }).length;
        this.datosGraficas.niPorCobrar.MB.clientes = listaClientes.filter(function (nivel) { return nivel.nivelIngreso === 'MB'; }).length;
        var porcentaje = 0;
        listaNiveles.forEach(function (nivel, index1) {
            var aux = 0;
            var total = 0;
            _this.lstCobros.forEach(function (cobro, index) {
                if (nivel.nivelIngreso === cobro.nivelIngreso) {
                    aux = aux + cobro.montoDolares;
                    if (nivel.nivelIngreso === 'AAplus') {
                        _this.datosGraficas.niPorCobrar.AAplus.monto = _this.datosGraficas.niPorCobrar.AAplus.monto + cobro.montoDolares;
                        _this.datosGraficas.niPorCobrar.AAplus.cobros++;
                        _this.datosGraficas.niPorCobrar.AAplus.partidas = _this.datosGraficas.niPorCobrar.AAplus.partidas + cobro.partidas;
                        _this.datosGraficas.niPorCobrar.AAplus.piezas = _this.datosGraficas.niPorCobrar.AAplus.piezas + cobro.piezas;
                    }
                    if (nivel.nivelIngreso === 'AM') {
                        _this.datosGraficas.niPorCobrar.AM.monto = _this.datosGraficas.niPorCobrar.AM.monto + cobro.montoDolares;
                        _this.datosGraficas.niPorCobrar.AM.cobros++;
                        _this.datosGraficas.niPorCobrar.AM.partidas = _this.datosGraficas.niPorCobrar.AM.partidas + cobro.partidas;
                        _this.datosGraficas.niPorCobrar.AM.piezas = _this.datosGraficas.niPorCobrar.AM.piezas + cobro.piezas;
                    }
                    if (nivel.nivelIngreso === 'AA') {
                        _this.datosGraficas.niPorCobrar.AA.monto = _this.datosGraficas.niPorCobrar.AA.monto + cobro.montoDolares;
                        _this.datosGraficas.niPorCobrar.AA.cobros++;
                        _this.datosGraficas.niPorCobrar.AA.partidas = _this.datosGraficas.niPorCobrar.AA.partidas + cobro.partidas;
                        _this.datosGraficas.niPorCobrar.AA.piezas = _this.datosGraficas.niPorCobrar.AA.piezas + cobro.piezas;
                    }
                    if (nivel.nivelIngreso === 'AB') {
                        _this.datosGraficas.niPorCobrar.AB.monto = _this.datosGraficas.niPorCobrar.AB.monto + cobro.montoDolares;
                        _this.datosGraficas.niPorCobrar.AB.cobros++;
                        _this.datosGraficas.niPorCobrar.AB.partidas = _this.datosGraficas.niPorCobrar.AB.partidas + cobro.partidas;
                        _this.datosGraficas.niPorCobrar.AB.piezas = _this.datosGraficas.niPorCobrar.AB.piezas + cobro.piezas;
                    }
                    if (nivel.nivelIngreso === 'MA') {
                        _this.datosGraficas.niPorCobrar.MA.monto = _this.datosGraficas.niPorCobrar.MA.monto + cobro.montoDolares;
                        _this.datosGraficas.niPorCobrar.MA.cobros++;
                        _this.datosGraficas.niPorCobrar.MA.partidas = _this.datosGraficas.niPorCobrar.MA.partidas + cobro.partidas;
                        _this.datosGraficas.niPorCobrar.MA.piezas = _this.datosGraficas.niPorCobrar.MA.piezas + cobro.piezas;
                    }
                    if (nivel.nivelIngreso === 'MM') {
                        _this.datosGraficas.niPorCobrar.MM.monto = _this.datosGraficas.niPorCobrar.MM.monto + cobro.montoDolares;
                        _this.datosGraficas.niPorCobrar.MM.cobros++;
                        _this.datosGraficas.niPorCobrar.MM.partidas = _this.datosGraficas.niPorCobrar.MM.partidas + cobro.partidas;
                        _this.datosGraficas.niPorCobrar.MM.piezas = _this.datosGraficas.niPorCobrar.MM.piezas + cobro.piezas;
                    }
                    if (nivel.nivelIngreso === 'MB') {
                        _this.datosGraficas.niPorCobrar.MB.monto = _this.datosGraficas.niPorCobrar.MB.monto + cobro.montoDolares;
                        _this.datosGraficas.niPorCobrar.MB.cobros++;
                        _this.datosGraficas.niPorCobrar.MB.partidas = _this.datosGraficas.niPorCobrar.MB.partidas + cobro.partidas;
                        _this.datosGraficas.niPorCobrar.MB.piezas = _this.datosGraficas.niPorCobrar.MB.piezas + cobro.piezas;
                    }
                }
                total = total + cobro.montoDolares;
            });
            porcentaje = (aux / total) * 100;
            var obj = {
                label: nivel.nivelIngreso.toUpperCase(),
                value: porcentaje.toFixed(2),
            };
            //console.log(total);
            _this.nivel.push(obj);
        });
        /* console.log(this.datosGraficas.niPorCobrar.AAplus);
         console.log(this.datosGraficas.niPorCobrar.AM);
         console.log(this.datosGraficas.niPorCobrar.AA);
         console.log(this.datosGraficas.niPorCobrar.AB);
         console.log(this.datosGraficas.niPorCobrar.MA);
         console.log(this.datosGraficas.niPorCobrar.MM);
         console.log(this.datosGraficas.niPorCobrar.MB);*/
    };
    //Función para la gráfica "C. PAGO POR COBRAR"
    CobrosComponent.prototype.cpagoPorcobrar = function (listaCpago, listaClientes) {
        var _this = this;
        this.datosGraficas.cPagoPorcobrar.dias60.clientes = listaClientes.filter(function (pago) { return pago.cpago === '60 DIAS'; }).length;
        this.datosGraficas.cPagoPorcobrar.contraEntrega.clientes = listaClientes.filter(function (pago) { return pago.cpago === 'CONTRA ENTREGA'; }).length;
        this.datosGraficas.cPagoPorcobrar.dias30.clientes = listaClientes.filter(function (pago) { return pago.cpago === '30 DIAS'; }).length;
        this.datosGraficas.cPagoPorcobrar.dias45.clientes = listaClientes.filter(function (pago) { return pago.cpago === '45 DIAS'; }).length;
        this.datosGraficas.cPagoPorcobrar.dias45.clientes = listaClientes.filter(function (pago) { return pago.cpago === '90 DIAS'; }).length;
        this.datosGraficas.cPagoPorcobrar.dias15.clientes = listaClientes.filter(function (pago) { return pago.cpago === '15 DIAS'; }).length;
        this.datosGraficas.cPagoPorcobrar.prepago.clientes = listaClientes.filter(function (pago) { return pago.cpago === 'PREPAGO 100%'; }).length;
        var porcentaje = 0;
        listaCpago.forEach(function (pago, index) {
            var aux = 0;
            var total = 0;
            _this.lstCobros.forEach(function (cobro, index) {
                if (pago.cpago === cobro.cpago) {
                    aux = aux + 1;
                    if (pago.cpago === '60 DIAS') {
                        _this.datosGraficas.cPagoPorcobrar.dias60.monto = _this.datosGraficas.cPagoPorcobrar.dias60.monto + cobro.montoDolares;
                        _this.datosGraficas.cPagoPorcobrar.dias60.cobros++;
                        _this.datosGraficas.cPagoPorcobrar.dias60.partidas = _this.datosGraficas.cPagoPorcobrar.dias60.partidas + cobro.partidas;
                        _this.datosGraficas.cPagoPorcobrar.dias60.piezas = _this.datosGraficas.cPagoPorcobrar.dias60.piezas + cobro.partidas;
                    }
                    if (pago.cpago === 'CONTRA ENTREGA') {
                        _this.datosGraficas.cPagoPorcobrar.contraEntrega.monto = _this.datosGraficas.cPagoPorcobrar.contraEntrega.monto + cobro.montoDolares;
                        _this.datosGraficas.cPagoPorcobrar.contraEntrega.cobros++;
                        _this.datosGraficas.cPagoPorcobrar.contraEntrega.partidas = _this.datosGraficas.cPagoPorcobrar.contraEntrega.partidas + cobro.partidas;
                        _this.datosGraficas.cPagoPorcobrar.contraEntrega.piezas = _this.datosGraficas.cPagoPorcobrar.contraEntrega.piezas + cobro.partidas;
                    }
                    if (pago.cpago === '30 DIAS') {
                        _this.datosGraficas.cPagoPorcobrar.dias30.monto = _this.datosGraficas.cPagoPorcobrar.dias30.monto + cobro.montoDolares;
                        _this.datosGraficas.cPagoPorcobrar.dias30.cobros++;
                        _this.datosGraficas.cPagoPorcobrar.dias30.partidas = _this.datosGraficas.cPagoPorcobrar.dias30.partidas + cobro.partidas;
                        _this.datosGraficas.cPagoPorcobrar.dias30.piezas = _this.datosGraficas.cPagoPorcobrar.dias30.piezas + cobro.partidas;
                    }
                    if (pago.cpago === '45 DIAS') {
                        _this.datosGraficas.cPagoPorcobrar.dias45.monto = _this.datosGraficas.cPagoPorcobrar.dias45.monto + cobro.montoDolares;
                        _this.datosGraficas.cPagoPorcobrar.dias45.cobros++;
                        _this.datosGraficas.cPagoPorcobrar.dias45.partidas = _this.datosGraficas.cPagoPorcobrar.dias45.partidas + cobro.partidas;
                        _this.datosGraficas.cPagoPorcobrar.dias45.piezas = _this.datosGraficas.cPagoPorcobrar.dias45.piezas + cobro.partidas;
                    }
                    if (pago.cpago === '90 DIAS') {
                        _this.datosGraficas.cPagoPorcobrar.dias90.monto = _this.datosGraficas.cPagoPorcobrar.dias90.monto + cobro.montoDolares;
                        _this.datosGraficas.cPagoPorcobrar.dias90.cobros++;
                        _this.datosGraficas.cPagoPorcobrar.dias90.partidas = _this.datosGraficas.cPagoPorcobrar.dias90.partidas + cobro.partidas;
                        _this.datosGraficas.cPagoPorcobrar.dias90.piezas = _this.datosGraficas.cPagoPorcobrar.dias90.piezas + cobro.partidas;
                    }
                    if (pago.cpago === '15 DIAS') {
                        _this.datosGraficas.cPagoPorcobrar.dias15.monto = _this.datosGraficas.cPagoPorcobrar.dias15.monto + cobro.montoDolares;
                        _this.datosGraficas.cPagoPorcobrar.dias15.cobros++;
                        _this.datosGraficas.cPagoPorcobrar.dias15.partidas = _this.datosGraficas.cPagoPorcobrar.dias15.partidas + cobro.partidas;
                        _this.datosGraficas.cPagoPorcobrar.dias15.piezas = _this.datosGraficas.cPagoPorcobrar.dias15.piezas + cobro.partidas;
                    }
                    if (pago.cpago === 'PREPAGO 100%') {
                        _this.datosGraficas.cPagoPorcobrar.prepago.monto = _this.datosGraficas.cPagoPorcobrar.prepago.monto + cobro.montoDolares;
                        _this.datosGraficas.cPagoPorcobrar.prepago.cobros++;
                        _this.datosGraficas.cPagoPorcobrar.prepago.partidas = _this.datosGraficas.cPagoPorcobrar.prepago.partidas + cobro.partidas;
                        _this.datosGraficas.cPagoPorcobrar.prepago.piezas = _this.datosGraficas.cPagoPorcobrar.prepago.piezas + cobro.partidas;
                    }
                }
                total = total + 1;
            });
            porcentaje = (aux / total) * 100;
            var obj = {
                label: pago.cpago,
                value: porcentaje.toFixed(2),
            };
            _this.cpago.push(obj);
        });
        /* console.log(this.datosGraficas.cPagoPorcobrar.contraEntrega);
         console.log(this.datosGraficas.cPagoPorcobrar.dias30);
         console.log(this.datosGraficas.cPagoPorcobrar.dias45);
         console.log(this.datosGraficas.cPagoPorcobrar.dias15);
         console.log(this.datosGraficas.cPagoPorcobrar.dias60);
         console.log(this.datosGraficas.cPagoPorcobrar.dias90);
         console.log(this.datosGraficas.cPagoPorcobrar.prepago);*/
    };
    //Función para la gráfica "Abierto vs Cerrado"
    CobrosComponent.prototype.abiertoVScerrado = function (listaAbierto, listaClientes) {
        var _this = this;
        this.datosGraficas.abiertoCerrado.abierto.clientes = listaClientes.filter(function (estado) { return estado.estado === 'Por Cobrar'; }).length;
        this.datosGraficas.abiertoCerrado.cerrado.clientes = listaClientes.filter(function (estado) { return estado.estado === 'Cobrada'; }).length;
        var auxEstado;
        var porcentaje = 0;
        listaAbierto.forEach(function (estado, index) {
            var aux = 0;
            var total = 0;
            _this.lstCobros.forEach(function (cobro, index) {
                if (estado.estado === cobro.estado) {
                    aux = aux + 1;
                    if (estado.estado === 'Por Cobrar') {
                        _this.datosGraficas.abiertoCerrado.abierto.monto = _this.datosGraficas.abiertoCerrado.abierto.monto + cobro.montoDolares;
                        _this.datosGraficas.abiertoCerrado.abierto.cobros++;
                        _this.datosGraficas.abiertoCerrado.abierto.partidas = _this.datosGraficas.abiertoCerrado.abierto.partidas + cobro.partidas;
                        _this.datosGraficas.abiertoCerrado.abierto.piezas = _this.datosGraficas.abiertoCerrado.abierto.piezas + cobro.piezas;
                    }
                    else {
                        _this.datosGraficas.abiertoCerrado.cerrado.monto = _this.datosGraficas.abiertoCerrado.cerrado.monto + cobro.montoDolares;
                        _this.datosGraficas.abiertoCerrado.cerrado.cobros++;
                        _this.datosGraficas.abiertoCerrado.cerrado.partidas = _this.datosGraficas.abiertoCerrado.cerrado.partidas + cobro.partidas;
                        _this.datosGraficas.abiertoCerrado.cerrado.piezas = _this.datosGraficas.abiertoCerrado.cerrado.piezas + cobro.piezas;
                    }
                }
                total = total + 1;
            });
            if (estado.estado === "Cobrada") {
                auxEstado = "CERRADO";
            }
            else {
                auxEstado = "ABIERTO";
            }
            porcentaje = (aux / total) * 100;
            var obj = {
                label: auxEstado,
                value: porcentaje.toFixed(2),
            };
            _this.estado.push(obj);
        });
        /* console.log(this.datosGraficas.abiertoCerrado.abierto);
         console.log(this.datosGraficas.abiertoCerrado.cerrado);*/
    };
    //Función para gráfica "PROGRAMADO VS POR PROGRAMAR"
    CobrosComponent.prototype.programadoVSporprogramar = function (listaprogramar, listaClientes) {
        this.datosGraficas.programadoPorProgramar.programado.clientes = listaClientes.filter(function (programado) { return programado.fechaEsperadaPago != null; }).length;
        this.datosGraficas.programadoPorProgramar.porProgramar.clientes = listaClientes.filter(function (programado) { return programado.fechaEsperadaPago === null; }).length;
        var auxEtiqueta;
        var porcentaje = 0;
        var porcentajeTotal = 0;
        var total = 0;
        var aux = 0;
        /* this.lstCobros.forEach((cobro, index) => {
           if (cobro.fechaEsperadaPago != null) {
             this.conFecha.push(this.lstCobros[index]);
             this.datosGraficas.programadoPorProgramar.programado.monto = this.datosGraficas.programadoPorProgramar.programado.monto + cobro.montoDolares;
             this.datosGraficas.programadoPorProgramar.programado.cobros++;
             this.datosGraficas.programadoPorProgramar.programado.partidas = this.datosGraficas.programadoPorProgramar.programado.partidas + cobro.partidas;
             this.datosGraficas.programadoPorProgramar.programado.piezas = this.datosGraficas.programadoPorProgramar.programado.piezas + cobro.piezas;
           } else {
             this.sinFecha.push(this.lstCobros[index]);
             this.datosGraficas.programadoPorProgramar.porProgramar.monto = this.datosGraficas.programadoPorProgramar.porProgramar.monto + cobro.montoDolares;
             this.datosGraficas.programadoPorProgramar.porProgramar.cobros++;
             this.datosGraficas.programadoPorProgramar.porProgramar.partidas = this.datosGraficas.programadoPorProgramar.porProgramar.partidas + cobro.partidas;
             this.datosGraficas.programadoPorProgramar.porProgramar.piezas = this.datosGraficas.programadoPorProgramar.porProgramar.piezas + cobro.piezas;
           }
           total = total + 1;
         });*/
        this.sinFecha.forEach(function () {
            aux = aux + 1;
        });
        porcentaje = (aux / total) * 100;
        var obj1 = {
            label: 'POR PROGRAMAR',
            value: porcentaje.toFixed(2),
        };
        this.programado.push(obj1);
        aux = 0;
        porcentaje = 0;
        this.conFecha.forEach(function () {
            aux = aux + 1;
        });
        porcentaje = (aux / total) * 100;
        var obj = {
            label: 'PROGRAMADO',
            value: porcentaje.toFixed(2),
        };
        this.programado.push(obj);
        /*console.log(this.datosGraficas.programadoPorProgramar.porProgramar);
        console.log(this.datosGraficas.programadoPorProgramar.programado);*/
    };
    //Función para gráfica "MEDIO DE PAGO PROGRAMADO"
    CobrosComponent.prototype.medioPagoprogramado = function (listamedio, listaClientes) {
        var _this = this;
        this.datosGraficas.medioPagoProgramado.otros.clientes = listaClientes.filter(function (medio) { return medio.fechaEsperadaPago === 'Otros'; }).length;
        this.datosGraficas.medioPagoProgramado.transferencia.clientes = listaClientes.filter(function (medio) { return medio.fechaEsperadaPago === 'Transferencia'; }).length;
        this.datosGraficas.medioPagoProgramado.cheques.clientes = listaClientes.filter(function (medio) { return medio.fechaEsperadaPago === 'Cheque'; }).length;
        var porcentaje = 0;
        listamedio.forEach(function (medio, index1) {
            var aux = 0;
            var total = 0;
            _this.lstCobros.forEach(function (cobro, index) {
                if (medio.medioPago === cobro.medioPago) {
                    aux = aux + 1;
                    if (medio.medioPago === 'Otros') {
                        _this.datosGraficas.medioPagoProgramado.otros.monto = _this.datosGraficas.medioPagoProgramado.otros.monto + cobro.montoDolares;
                        _this.datosGraficas.medioPagoProgramado.otros.cobros++;
                        _this.datosGraficas.medioPagoProgramado.otros.partidas = _this.datosGraficas.medioPagoProgramado.otros.partidas + cobro.partidas;
                        _this.datosGraficas.medioPagoProgramado.otros.piezas = _this.datosGraficas.medioPagoProgramado.otros.piezas + cobro.piezas;
                    }
                    if (medio.medioPago === 'Transferencia') {
                        _this.datosGraficas.medioPagoProgramado.transferencia.monto = _this.datosGraficas.medioPagoProgramado.transferencia.monto + cobro.montoDolares;
                        _this.datosGraficas.medioPagoProgramado.transferencia.cobros++;
                        _this.datosGraficas.medioPagoProgramado.transferencia.partidas = _this.datosGraficas.medioPagoProgramado.transferencia.partidas + cobro.partidas;
                        _this.datosGraficas.medioPagoProgramado.transferencia.piezas = _this.datosGraficas.medioPagoProgramado.transferencia.piezas + cobro.piezas;
                    }
                    if (medio.medioPago === 'Cheque') {
                        _this.datosGraficas.medioPagoProgramado.cheques.monto = _this.datosGraficas.medioPagoProgramado.cheques.monto + cobro.montoDolares;
                        _this.datosGraficas.medioPagoProgramado.cheques.cobros++;
                        _this.datosGraficas.medioPagoProgramado.cheques.partidas = _this.datosGraficas.medioPagoProgramado.cheques.partidas + cobro.partidas;
                        _this.datosGraficas.medioPagoProgramado.cheques.piezas = _this.datosGraficas.medioPagoProgramado.cheques.piezas + cobro.piezas;
                    }
                }
                total = total + 1;
            });
            porcentaje = (aux / total) * 100;
            var obj = {
                label: medio.medioPago.toUpperCase(),
                value: porcentaje.toFixed(2),
            };
            _this.medio.push(obj);
        });
        /* console.log(this.datosGraficas.medioPagoProgramado.cheques);
         console.log(this.datosGraficas.medioPagoProgramado.otros);
         console.log(this.datosGraficas.medioPagoProgramado.transferencia);*/
    };
    //Función para gráfica "DÍAS RESTANTES DE CRÉDITO"
    CobrosComponent.prototype.diasRestantesCredito = function (listaDias, listaClientes) {
        this.datosGraficas.diasRestanCredito.cobrado.clientes = listaClientes.filter(function (medio) { return medio.diasRestantesCobro === 0; }).length;
        this.datosGraficas.diasRestanCredito.cobrado.clientes = listaClientes.filter(function (medio) { return medio.diasRestantesCobro != 0; }).length;
        var auxEtiqueta;
        var porcentaje = 0;
        var aux = 0;
        var total = 0;
        //listaDias.forEach((dias, index) => {
        /* this.lstCobros.forEach((cobro, index) => {
           if (cobro.diasRestantesCobro === 0) {
             aux = aux + 1;
             this.datosGraficas.diasRestanCredito.cobrado.monto = this.datosGraficas.diasRestanCredito.cobrado.monto + cobro.montoDolares;
             this.datosGraficas.diasRestanCredito.cobrado.cobros++;
             this.datosGraficas.diasRestanCredito.cobrado.partidas = this.datosGraficas.diasRestanCredito.cobrado.partidas + cobro.partidas;
             this.datosGraficas.diasRestanCredito.cobrado.piezas = this.datosGraficas.diasRestanCredito.cobrado.piezas + cobro.piezas;
           }
           total = total + 1;
     
         });*/
        porcentaje = (aux / total) * 100;
        var obj1 = {
            label: 'COBRADO',
            value: porcentaje.toFixed(2),
        };
        this.dias.push(obj1);
        aux = 0;
        porcentaje = 0;
        total = 0;
        /*  this.lstCobros.forEach((cobro, index) => {
            if (cobro.diasRestantesCobro != 0) {
              aux = aux + 1;
              this.datosGraficas.diasRestanCredito.pendiente.monto = this.datosGraficas.diasRestanCredito.pendiente.monto + cobro.montoDolares;
              this.datosGraficas.diasRestanCredito.pendiente.cobros++;
              this.datosGraficas.diasRestanCredito.pendiente.partidas = this.datosGraficas.diasRestanCredito.pendiente.partidas + cobro.partidas;
              this.datosGraficas.diasRestanCredito.pendiente.piezas = this.datosGraficas.diasRestanCredito.pendiente.piezas + cobro.piezas;
            }
            total = total + 1;
      
          });*/
        porcentaje = (aux / total) * 100;
        var obj = {
            label: 'PENDIENTE',
            value: porcentaje.toFixed(2),
        };
        this.dias.push(obj);
        //});
        console.log(this.datosGraficas.diasRestanCredito.cobrado);
        console.log(this.datosGraficas.diasRestanCredito.pendiente);
    };
    //Función para gráfica "ET"
    CobrosComponent.prototype.enTiempo = function (listatiempo) {
        var _this = this;
        var auxEtiqueta;
        var porcentaje = 0;
        listatiempo.forEach(function (tiempo, index) {
            var aux = 0;
            var total = 0;
            _this.lstCobros.forEach(function (cobro, index) {
                if (tiempo.fechaEsperadaPago === null) {
                    aux = aux + 1;
                    auxEtiqueta = "ET";
                }
                total = total + 1;
            });
            porcentaje = (aux / total) * 100;
            var obj = {
                label: auxEtiqueta,
                value: porcentaje.toFixed(2),
            };
            _this.tiempo.push(obj);
        });
    };
    CobrosComponent.prototype.obtenerClientesPorIdUsuarioRol = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._cobrosService.obtenerClientesPorIdUsuarioRol(parametros).subscribe(function (data) {
            _this.ltsClientesPorId = data.current;
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    CobrosComponent.prototype.obtenerEmpleadosPorTipo = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._cobrosService.obtenerEmpleadosPorTipo(parametros).subscribe(function (data) {
            _this.ltsEmpleadosPorTipo = data.current;
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    CobrosComponent.prototype.obtenerBancosClientes = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._cobrosService.obtenerBancosClientes(parametros).subscribe(function (data) {
            _this.ltsBancosCliente = data.current;
            _this.coreComponent.openModal(0);
        }, function (error) {
            _this.coreComponent.openModal(0);
        });
    };
    CobrosComponent.prototype.obtenerCuentasBancoClientes = function (parametros) {
        var _this = this;
        this.coreComponent.openModal(0);
        this._cobrosService.obtenerCuentasBancoClientes(parametros).subscribe(function (data) {
            _this.ltsCuentasBanco = data.current;
            _this.coreComponent.openModal(0);
        }, function (error) {
            _this.coreComponent.openModal(0);
        });
    };
    CobrosComponent.prototype.regresarConsulta = function () {
        this.detalle = false;
    };
    CobrosComponent.prototype.verDetalle = function (item) {
        console.log(item);
        this.cobroDetalle = item;
        this.detalle = true;
        var lstAux = [];
        lstAux.push(item);
        if (item.estado == "Cobrada") {
            if (item.cpago.indexOf("DIAS") < 0 || this._utilFechas.regresaDiferenciaEntreFechasEnDias(new Date(item.fechaPago + " 00:00:00"), new Date(item.fep + " 00:00:00")) >= 0) {
                lstAux[0]["moroso"] = "No";
            }
            else {
                lstAux[0]["moroso"] = "Si";
            }
        }
        console.log("obtenerLineaTiempoResumen");
        this.obtenerLineaTiempoResumen(item.factura, item.fpor, item.sc);
        this.lstLineaTiempoActive = new Array(this.lstLineaTiempo.length).fill("");
        this.lstLineaTiempoActive[0] = "divActive";
        this.totalDetalle = 0;
        this.totalDetalle += item.montoEsperadoCobro;
        for (var _i = 0, _a = this.lstCobros; _i < _a.length; _i++) {
            var cobro = _a[_i];
            if (cobro.factura != item.factura && cobro.nombreCliente == item.nombreCliente) {
                lstAux.push(cobro);
                this.totalDetalle += cobro.montoEsperadoCobro;
            }
        }
        this.lstCobrosDetalle = [];
        this.lstCobrosDetalle = this.lstCobrosDetalle.concat(lstAux);
        this.lstCobrosDetalleActive = new Array(this.lstCobrosDetalle.length).fill("");
        this.lstCobrosDetalleActive[0] = "divActual";
    };
    CobrosComponent.prototype.resumenCobro = function (i) {
        this.lstCobrosDetalleActive = new Array(this.lstCobrosDetalle.length).fill("");
        this.lstCobrosDetalleActive[i] = "divActive";
        this.obtenerLineaTiempoResumen(this.lstCobrosDetalle[i].factura, this.lstCobrosDetalle[i].fpor, this.lstCobrosDetalle[i].sc);
    };
    CobrosComponent.prototype.obtenerLineaTiempoResumen = function (facturaS, fpor, sc) {
        var _this = this;
        this.facturaS = facturaS;
        this.fpor = fpor;
        this.sc = 0;
        console.log("Recibe" + facturaS, fpor);
        var parametros = new __WEBPACK_IMPORTED_MODULE_5__class_Parametros_class__["a" /* Parametros */]();
        var cuerpo = {
            factura: facturaS,
            cpedido: fpor
        };
        parametros.facturaS = facturaS;
        parametros.cpedido = fpor;
        console.log("Parametros enviados: ");
        console.log(parametros);
        this.coreComponent.openModal(0);
        this._cobrosService.obtenerLineaTiempoResumen(cuerpo).subscribe(function (data) {
            console.log("DATA");
            console.log(data);
            _this.lstLineaTiempo = [];
            if (data.current != undefined && data.current.length > 0) {
                var temp = [];
                var _facc = [];
                for (var i = 0; i < data.current.length; i++) {
                    temp.push(data.current[i]);
                }
                _this.lstLineaTiempo = temp;
                console.log("obtenerResumen");
                console.log(temp);
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
    CobrosComponent.prototype.obtenerInspectorEntrega = function (facturaS, cpedido) {
        var _this = this;
        console.log("Método obtenerInspectorEntrega ");
        var cuerpo = {
            factura: facturaS,
            cpedido: cpedido
        };
        this.coreComponent.openModal(0);
        this._cobrosService.obtenerInspectorEntrega(cuerpo).subscribe(function (data) {
            if (data.current != undefined && data.current.length > 0) {
                var temp = [];
                var lista = [];
                var lista2 = [];
                for (var i = 0; i < data.current.length; i++) {
                    if (data.current[i] != undefined) {
                        temp.push(data.current[i]);
                        lista.push(data.current[i].etapa);
                        if (data.current[i].referencia != null && data.current[i].referencia.indexOf(",") != 0 && data.current[i].etapa === 'SURTIR RUTA' && data.current[i].referencia != '') {
                            //    lista2.push(data.current[i].referencia.replace(",",""));
                            temp[i].referencia = data.current[i].referencia.replace(",", "");
                        }
                    }
                }
                _this.lstEtapas = temp;
                _this.estapaItemLineaTiempo = lista;
                _this.ListaSC = lista2;
                console.log("Etapas");
                console.log(_this.lstEtapas);
                console.log("Lista Etapas");
                console.log(_this.estapaItemLineaTiempo);
                console.log("Sin comas");
                console.log(_this.ListaSC);
            }
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    CobrosComponent.prototype.obtenerInspectorCobro = function (facturaS, cpedido, sc) {
        var _this = this;
        console.log("SIN CRÉDITO------" + sc);
        var cuerpo = {
            factura: facturaS,
            cpedido: cpedido,
            sc: sc
        };
        this.lstEtapas = null;
        this.estapaItemLineaTiempo = null;
        this.coreComponent.openModal(0);
        this._cobrosService.obtenerInspectorCobro(cuerpo).subscribe(function (data) {
            if (data.current != undefined && data.current.length > 0) {
                var temp = [];
                var lista = [];
                for (var i = 0; i < data.current.length; i++) {
                    temp.push(data.current[i]);
                    lista.push(data.current[i].etapa);
                }
                _this.lstEtapas = temp;
                _this.estapaItemLineaTiempo = lista;
                console.log("Etapas");
                console.log(_this.lstEtapas);
                console.log("Lista Etapas");
                console.log(_this.estapaItemLineaTiempo);
            }
            _this.coreComponent.closeModal(0);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    CobrosComponent.prototype.obtenerInspectorRevision = function (facturaS, cpedido) {
        var _this = this;
        console.log("Método obtenerInspectorRevision ");
        var cuerpo = {
            factura: facturaS,
            cpedido: cpedido
        };
        console.log("Parametros enviados: ");
        console.log(cuerpo);
        this.itemLineaTiempo = undefined;
        this._cobrosService.obtenerInspectorRevision(cuerpo).subscribe(function (data) {
            _this.itemLineaTiempo = data.current;
            _this.coreComponent.closeModal(0);
            console.log("****---Lista de tiempo");
            console.log(_this.itemLineaTiempo);
        }, function (error) {
            _this.coreComponent.closeModal(0);
        });
    };
    CobrosComponent.prototype.lineaTiempo = function (i) {
        console.log("Método lineaTiempo ");
        this.lstLineaTiempoActive = new Array(this.lstLineaTiempo.length).fill("");
        this.lstLineaTiempoActive[i] = "divActive";
        this.estadoItemLineaTiempo = this.lstLineaTiempo[i].etapa;
        this.itemLineaTiempo = this.lstLineaTiempo[i];
        console.log("ESTADO: " + this.estadoItemLineaTiempo);
        switch (this.estadoItemLineaTiempo) {
            case "COBRO":
                this.obtenerInspectorCobro(this.facturaS, this.fpor, this.lstLineaTiempo[i].etapaPadre);
                console.log("/**************Cobro");
                break;
            case "Factura":
                this.obtenerInspectorRevision(this.facturaS, this.fpor);
                console.log("/**************Factura");
                break;
            case "ENTREGA":
                console.log("/**************ENTREGA");
                this.obtenerInspectorEntrega(this.facturaS, this.fpor);
                break;
            case "COBRADO":
                this.obtenerInspectorCobro(this.facturaS, this.fpor, this.lstLineaTiempo[i].etapaPadre);
                console.log("/**************COBRADO");
                break;
            case "COOBRADA":
                this.obtenerInspectorCobro(this.facturaS, this.fpor, this.lstLineaTiempo[i].etapaPadre);
                console.log("/**************COOBRADA");
                break;
            case "ENVIO":
                this.obtenerInspectorEntrega(this.facturaS, this.fpor);
                console.log("/**************ENVIO");
                break;
        }
    };
    // Función de descarga de archivo CSV 
    CobrosComponent.prototype.download = function () {
        var _this = this;
        var lstCobros2 = [];
        this.lstCobros.forEach(function (cobro, index) {
            _this.fecha = cobro.fechaFacturacion;
            _this.client = cobro.nombreCliente;
            if (cobro.diasRestantesCobro === 0) {
                _this.drc = "Pendiente";
            }
            else {
                if (cobro.diasRestantesCobro < 0) {
                    _this.drc = "Cobrado";
                }
                else {
                    _this.drc = cobro.diasRestantesCobro;
                }
            }
            if (cobro.noCuenta === undefined) {
                _this.cuenta = "ND";
            }
            else {
                _this.cuenta = cobro.noCuenta;
            }
            if (cobro.banco === undefined) {
                _this.banco = "ND";
            }
            else {
                _this.banco = cobro.banco;
            }
            if (cobro.fechaUEntrega === null) {
                _this.fue = "Pendiente";
            }
            else {
                _this.fue = new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(cobro.fechaUEntrega);
            }
            if (cobro.resultadoEntrega === null) {
                _this.resultado = "Pendiente";
            }
            else {
                _this.resultado = cobro.resultadoEntrega;
            }
            if (cobro.fechaPEntrega === null) {
                _this.fee = "Pendiente";
            }
            else {
                _this.fee = new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(cobro.fechaPEntrega);
            }
            if (cobro.fechaEsperadaPago != null || cobro.fechaEsperadaPago != undefined) {
                _this.fep = new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(cobro.fechaEsperadaPago);
            }
            else {
                _this.fep = "Pendiente";
            }
            if (cobro.fechaFacturacion != null || cobro.fechaFacturacion != undefined) {
                _this.ff = new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(cobro.fechaFacturacion);
            }
            else {
                _this.ff = "Pendiente";
            }
            if (cobro.fechaPago != null || cobro.fechaPago != undefined) {
                _this.frc = new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]().transform(cobro.fechaPago);
            }
            else {
                _this.frc = "Pendiente";
            }
            var Cobro2 = {
                '#': index + 1,
                'Cliente': "\"" + cobro.nombreCliente + "\"",
                'P. Interno': cobro.cpedido,
                'Referencia': cobro.referencia,
                'Factura': cobro.factura,
                'UUID': cobro.uuid,
                'Vendió': cobro.fpor,
                'MEC': '$' + cobro.montoDolares,
                'Moneda': 'USD',
                'TC': cobro.tipoCambio,
                'C.Pago': cobro.cpago,
                'F. Facturación': _this.ff,
                'FEP': _this.fep,
                'DRC': _this.drc,
                'FRC': _this.frc,
                'Estado': cobro.estado,
                'Sub Total USD': cobro.subTotalDlls,
                'IVA USD': cobro.ivaDlls,
                'Total USD': cobro.totalDlls,
                'Sub Total M.N.': cobro.subtotalPesos,
                'IVA M.N.': cobro.ivaPesos,
                'Total M.N.': cobro.totalPesos,
                'Cuenta bancaria': _this.cuenta,
                'Banco': _this.banco,
                'FUE': _this.fue,
                'ResultadoEntrega': _this.resultado,
                'FEE': _this.fee
            };
            lstCobros2.push(Cobro2);
        });
        var csvData = this.ConvertToCSV(lstCobros2);
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'ConsultaCobros-' + new __WEBPACK_IMPORTED_MODULE_9__pipes_accounting_accounting_pipe__["k" /* dateFormatSlash */]() + '.csv';
        a.click();
    };
    //Función para convertir JSON en formato CSV
    CobrosComponent.prototype.ConvertToCSV = function (objArray) {
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
    //Función para mostrar la tabla de datos de cobros
    CobrosComponent.prototype.showTable = function () {
        this.isTableShow = true;
    };
    //Función para mostrar la sección de gráficas
    CobrosComponent.prototype.showGraphic = function () {
        this.isTableShow = false;
    };
    CobrosComponent.prototype.descargarPDF = function (archivo) {
        console.log(archivo);
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 800, height: 600 });
        PDFWindow.addSupport(newWin);
        newWin.loadURL(archivo);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CobrosComponent.prototype, "valueFilter", void 0);
    CobrosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-cobros',
            template: __webpack_require__("./src/app/components/gestion/consultas/cobros/cobros.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/consultas/cobros/cobros.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_gestion_gestion_service__["a" /* GestionService */], __WEBPACK_IMPORTED_MODULE_7__core_container_core_container_component__["a" /* CoreContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_6__services_gestion_consulta_cobros_cobros_service__["a" /* CobrosService */]])
    ], CobrosComponent);
    return CobrosComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/cobros/cobros.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CobrosModule", function() { return CobrosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cobros_routing_module__ = __webpack_require__("./src/app/components/gestion/consultas/cobros/cobros-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cobros_component__ = __webpack_require__("./src/app/components/gestion/consultas/cobros/cobros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__ = __webpack_require__("./src/app/components/shared/radio-button/radio-button.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_filter_filter_module__ = __webpack_require__("./src/app/components/shared/filter/filter.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__graficas_cobros_graficas_cobros_component__ = __webpack_require__("./src/app/components/gestion/consultas/cobros/graficas-cobros/graficas-cobros.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var CobrosModule = /** @class */ (function () {
    function CobrosModule() {
    }
    CobrosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__cobros_routing_module__["a" /* CobrosRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__["a" /* RadioButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_filter_filter_module__["a" /* FilterModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__cobros_component__["a" /* CobrosComponent */],
                __WEBPACK_IMPORTED_MODULE_12__graficas_cobros_graficas_cobros_component__["a" /* GraficasCobrosComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__cobros_component__["a" /* CobrosComponent */]
            ]
        })
    ], CobrosModule);
    return CobrosModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/cobros/graficas-cobros/graficas-cobros.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"display:flex;flex-wrap: wrap;  height: 100%; margin-top: 20px;justify-content: center;\">\n\n  <div style=\"width:30%;height:30%;  min-width: 82px; min-height: 15vh \">\n      <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center; \">NI POR COBRAR</div>\n      <div class=\"datosGrafica1\">\n          <div>Total: </div>\n          <div>Monto: </div>\n          <div>Clientes: </div>\n          <div>Cobros: </div>\n          <div>Partidas: </div>\n          <div>Piezas: </div>\n        </div>\n       <!--  <div style=\"display:none;color:#424242; position:absolute; width: 23%; background: transparent;opacity: 1; min-width: 82px;  min-height: 81.5px; font-size: 12px;height: 26%;border-radius: 50px\" class=\"flexCenter \">\n       <div class=\"flexCenter\" style=\"width: 100%\">\n             Total\n          </div> \n          <div class=\"flexCenter\" style=\"width: 100%\">\n         Monto: $\n             </div>\n             <div class=\"flexCenter\" style=\"width: 100%\">\n                    Compras: \n                 </div>\n                 <div class=\"flexCenter\" style=\"width: 100%\">\n                         Partidas:\n                     </div>\n                     <div class=\"flexCenter\" style=\"width: 100%\">\n                         Piezas:\n                         </div>\n         </div>-->\n    <div class=\"grafica\">\n      <canvas id=\"doughnut1\"></canvas>\n    </div>\n  </div>\n  <div style=\"width:30%;height:30%;   min-width: 82px;  min-height: 15vh \">\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center; \">C. PAGO POR COBRAR</div>\n\n    <div class=\"grafica\">\n     \n      <canvas id=\"doughnut2\">\n         \n      </canvas>\n    </div>\n  </div>\n\n  <div style=\"width:30%;height:30%;   min-width: 82px;  min-height: 15vh \">\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center;\">ABIERTO VS CERRADO</div>\n\n    <div class=\"grafica\">\n      <canvas id=\"doughnut3\"></canvas>\n    </div>\n  </div>\n\n\n  <div style=\"width:30%;height:30%;  min-width: 82px;  min-height: 15vh \">\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center;\">PROGRAMADO VS POR PROGRAMAR</div>\n \n    <div class=\"grafica\">\n      <canvas id=\"doughnut4\"></canvas>\n    </div>\n  </div>\n\n\n  <div style=\"width:30%;height:30%;  min-width: 82px;  min-height: 15vh \">\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center; \">NI COBRADO</div>\n \n    <div class=\"grafica\">\n      <canvas id=\"doughnut5\"></canvas>\n    </div>\n  </div>\n\n  <div style=\"width:30%;height:30%;  min-width: 82px;  min-height: 15vh \">\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center;\">C. PAGO COBRADO</div>\n  \n    <div class=\"grafica\">\n      <canvas id=\"doughnut6\"></canvas>\n    </div>\n  </div>\n\n\n  <div style=\"width:30%;height:30%;  min-width: 82px;  min-height: 15vh \">\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center; \">DÍAS RESTANTES DE CRÉDITO</div>\n \n    <div class=\"grafica\">\n      <canvas id=\"doughnut7\"></canvas>\n    </div>\n  </div>\n  <div style=\"width:30%;height:30%;  min-width: 82px;  min-height: 15vh \">\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center;\">MEDIO DE PAGO PROGRAMADO</div>\n\n    <div class=\"grafica\">\n      <canvas id=\"doughnut8\"></canvas>\n    </div>\n  </div>\n\n  <div style=\"width:30%;height:30%;  min-width: 82px;  min-height: 15vh \">\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center; \">ET</div>\n\n    <div class=\"grafica\">\n      <canvas id=\"doughnut9\"></canvas>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/cobros/graficas-cobros/graficas-cobros.component.scss":
/***/ (function(module, exports) {

module.exports = ".padreG {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  overflow: scroll; }\n\n.tituloGrafica {\n  position: absolute;\n  top: -45px;\n  right: 133px;\n  left: 0px;\n  margin: auto;\n  width: 100px;\n  font-size: 36px;\n  font-weight: bold; }\n\n.tituloGraficaMediana {\n  position: absolute;\n  top: 7px;\n  right: 71px;\n  left: 0px;\n  margin: auto;\n  width: 100px;\n  font-size: 24px;\n  font-weight: bold; }\n\n.tituloGraficaChica {\n  position: absolute;\n  text-align: center;\n  margin: auto;\n  width: 200px;\n  font-size: 10px;\n  font-family: \"Roboto\";\n  color: #424242; }\n\n.grafica {\n  width: 100%;\n  height: 85%; }\n\n.flexCenter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.borderRadious {\n  border: 2px solid red;\n  padding: 10px;\n  border-radius: 25px; }\n\n.datosGrafica1 {\n  font-size: 12px;\n  position: absolute;\n  z-index: 1;\n  left: 15%;\n  top: 15%; }\n\n.datosGrafica2 {\n  position: absolute;\n  z-index: 1;\n  left: 40%;\n  top: 15%;\n  font-size: 12px; }\n\n.datosGrafica3 {\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n  left: 65%;\n  top: 15%; }\n\n.datosGrafica4 {\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n  left: 15%;\n  top: 48%; }\n\n.datosGrafica5 {\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n  left: 40%;\n  top: 48%; }\n\n.datosGrafica6 {\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n  left: 65%;\n  top: 48%; }\n\n.datosGrafica7 {\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n  left: 15%;\n  top: 81%; }\n\n.datosGrafica8 {\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n  left: 40%;\n  top: 81%; }\n\n.datosGrafica9 {\n  position: absolute;\n  z-index: 1;\n  font-size: 12px;\n  left: 65%;\n  top: 81%; }\n\n@media only screen and (max-width: 2221px) {\n  .datosGrafica1 {\n    font-size: 12px;\n    position: absolute;\n    z-index: 1;\n    left: 13%;\n    top: 15%; }\n  .datosGrafica2 {\n    position: absolute;\n    z-index: 1;\n    left: 37%;\n    top: 15%;\n    font-size: 12px; } }\n\n@media only screen and (max-width: 1957px) {\n  .datosGrafica1 {\n    font-size: 12px;\n    position: absolute;\n    z-index: 1;\n    left: 12%;\n    top: 15%; }\n  .datosGrafica2 {\n    position: absolute;\n    z-index: 1;\n    left: 35%;\n    top: 15%;\n    font-size: 12px; } }\n\n@media only screen and (max-width: 1777px) {\n  .datosGrafica1 {\n    font-size: 10px;\n    position: absolute;\n    z-index: 1;\n    left: 11%;\n    top: 16%; }\n  .datosGrafica2 {\n    position: absolute;\n    z-index: 1;\n    left: 33%;\n    top: 16%;\n    font-size: 10px; } }\n\n@media only screen and (max-width: 1368px) {\n  .datosGrafica1 {\n    font-size: 8px;\n    position: absolute;\n    z-index: 1;\n    left: 8%;\n    top: 17%; }\n  .datosGrafica2 {\n    position: absolute;\n    z-index: 1;\n    left: 26%;\n    top: 17%;\n    font-size: 8px; } }\n\n@media only screen and (max-width: 1505px) {\n  .datosGrafica1 {\n    font-size: 10px;\n    position: absolute;\n    z-index: 1;\n    left: 9%;\n    top: 16%; }\n  .datosGrafica2 {\n    position: absolute;\n    z-index: 1;\n    left: 29%;\n    top: 16%;\n    font-size: 10px; } }\n\n#doughnut1Div {\n  position: relative; }\n\n#doughnut1Div2 {\n  position: relative; }\n\n#doughnut1Div3 {\n  position: relative; }\n\n#doughnut1Div4 {\n  position: relative; }\n\n#doughnut1Div5 {\n  position: relative; }\n\n#doughnut1Div6 {\n  position: relative; }\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/cobros/graficas-cobros/graficas-cobros.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficasCobrosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js__ = __webpack_require__("./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__ = __webpack_require__("./src/app/class/compras/utils/query.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GraficasCobrosComponent = /** @class */ (function () {
    function GraficasCobrosComponent() {
        this.valores1 = [{ label: ["Nivel"], value: [1] }];
        this.valores2 = [{ label: ["C.Pago"], value: [1] }];
        this.valores3 = [{ label: ["Estado"], value: [1] }];
        this.valores4 = [{ label: ["Programado"], value: [1] }];
        this.valores7 = [{ label: ["Dias"], value: [1] }];
        this.valores9 = [{ label: ["Tiempo"], value: [1] }];
        this.squery = new __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__["a" /* Query */]();
        this.punterosProvee = new Array();
    }
    /* constructor(private router: Router,
      private _insp: InspeccionService) { } */
    GraficasCobrosComponent.prototype.ngOnInit = function () {
        //this.donita();
        this.dona2();
        this.recibeCobros();
    };
    GraficasCobrosComponent.prototype.recibeCobros = function () {
    };
    GraficasCobrosComponent.prototype.dona2 = function () {
        var valoresdona1 = [];
        var etiquetadona1 = [];
        var valoresdona2 = [];
        var etiquetadona2 = [];
        var valoresdona3 = [];
        var etiquetadona3 = [];
        var valoresdona4 = [];
        var etiquetadona4 = [];
        var valoresdona7 = [];
        var etiquetadona7 = [];
        var valoresdona8 = [];
        var etiquetadona8 = [];
        var valoresdona9 = [];
        var etiquetadona9 = [];
        var colores = ["#DD4444", "#FEC42D", "#5792F3"];
        var colores1 = ["#439DC1", "#DC931C", "#91BE5F", "#279E96", "#D93079", "#F3B23F", "#2ECCFA", "#DF74010", "#088A68", "#FF0040", "#FFFF00"];
        var coloresP = ["#952936", "#91BE5F", "#439DC1", "#279E96", "#D93079", "#F3B23F", "#2ECCFA", "#DF74010", "#088A68", "#FF0040", "#FFFF00"];
        var colores4 = ["#91BE5F", "#952936"];
        var coloresDias = ["#0098DA", "#94BA13"];
        var etiquetas = [];
        var valores = [];
        var valores2 = [];
        var valores3 = [];
        var valores4 = [];
        var valores7 = [];
        var valores8 = [];
        var valores9 = [];
        etiquetas = ["x", "y", "z"];
        // valores = [1, 2, 3];
        this.valores1.forEach(function (element) {
            valoresdona1.push(element.value);
            etiquetadona1.push(element.label);
        });
        this.valores2.forEach(function (element) {
            valoresdona2.push(element.value);
            etiquetadona2.push(element.label);
        });
        this.valores3.forEach(function (element) {
            valoresdona3.push(element.value);
            etiquetadona3.push(element.label);
        });
        this.valores4.forEach(function (element) {
            valoresdona4.push(element.value);
            etiquetadona4.push(element.label);
        });
        this.valores7.forEach(function (element) {
            valoresdona7.push(element.value);
            etiquetadona7.push(element.label);
        });
        this.valores8.forEach(function (element) {
            valoresdona8.push(element.value);
            etiquetadona8.push(element.label);
        });
        this.valores9.forEach(function (element) {
            valoresdona9.push(element.value);
            etiquetadona9.push(element.label);
        });
        try {
            var canvasDiv1 = document.querySelector('#doughnut1Div1');
            canvasDiv1.removeChild(document.querySelector('#doughnut1'));
            document.querySelector('#doughnut1Div1').insertAdjacentHTML('afterbegin', '<canvas id="doughnut1"></canvas>');
            var canvasDiv2 = document.querySelector('#doughnut1Div2');
            canvasDiv2.removeChild(document.querySelector('#doughnut2'));
            document.querySelector('#doughnut1Div2').insertAdjacentHTML('afterbegin', '<canvas id="doughnut2"></canvas>');
            var canvasDiv3 = document.querySelector('#doughnut1Div3');
            canvasDiv3.removeChild(document.querySelector('#doughnut3'));
            document.querySelector('#doughnut1Div3').insertAdjacentHTML('afterbegin', '<canvas id="doughnut3"></canvas>');
            var canvasDiv4 = document.querySelector('#doughnut1Div4');
            canvasDiv2.removeChild(document.querySelector('#doughnut4'));
            document.querySelector('#doughnut1Div4').insertAdjacentHTML('afterbegin', '<canvas id="doughnut4"></canvas>');
            var canvasDiv5 = document.querySelector('#doughnut1Div5');
            canvasDiv5.removeChild(document.querySelector('#doughnut5'));
            document.querySelector('#doughnut1Div2').insertAdjacentHTML('afterbegin', '<canvas id="doughnut5"></canvas>');
            var canvasDiv6 = document.querySelector('#doughnut1Div6');
            canvasDiv6.removeChild(document.querySelector('#doughnut6'));
            document.querySelector('#doughnut1Div6').insertAdjacentHTML('afterbegin', '<canvas id="doughnut6"></canvas>');
            var canvasDiv7 = document.querySelector('#doughnut1Div7');
            canvasDiv6.removeChild(document.querySelector('#doughnut7'));
            document.querySelector('#doughnut1Div7').insertAdjacentHTML('afterbegin', '<canvas id="doughnut7"></canvas>');
            var canvasDiv8 = document.querySelector('#doughnut1Div8');
            canvasDiv6.removeChild(document.querySelector('#doughnut8'));
            document.querySelector('#doughnut1Div8').insertAdjacentHTML('afterbegin', '<canvas id="doughnut7"></canvas>');
            var canvasDiv9 = document.querySelector('#doughnut1Div9');
            canvasDiv6.removeChild(document.querySelector('#doughnut9'));
            document.querySelector('#doughnut1Div9').insertAdjacentHTML('afterbegin', '<canvas id="doughnut9"></canvas>');
        }
        catch (error) {
            console.log('No hay elementos hijos, error: ' + error);
        }
        this.createDoughnut('doughnut1', etiquetadona1, valoresdona1, colores1);
        this.createDoughnut('doughnut2', etiquetadona2, valoresdona2, colores1);
        this.createDoughnut('doughnut3', etiquetadona3, valoresdona3, coloresP);
        this.createDoughnut('doughnut4', etiquetadona4, valoresdona4, coloresP);
        this.createDoughnut('doughnut5', etiquetadona1, valoresdona1, colores1);
        this.createDoughnut('doughnut6', etiquetadona2, valoresdona2, colores1);
        this.createDoughnut('doughnut7', etiquetadona7, valoresdona7, colores1);
        this.createDoughnut('doughnut8', etiquetadona8, valoresdona8, colores1);
        this.createDoughnut('doughnut9', etiquetadona9, valoresdona9, colores4);
    };
    GraficasCobrosComponent.prototype.createDoughnut = function (element, etiquetas, valores, colores) {
        var oilCanvas = document.getElementById(element);
        __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"].defaults.global.defaultFontFamily = "Roboto";
        __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"].defaults.global.defaultFontSize = 12;
        __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"].defaults.global.animation.duration = 2100;
        __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"].defaults.global.animation.easing = 'easeOutBounce';
        var oilData = {
            labels: etiquetas,
            datasets: [
                {
                    data: valores,
                    backgroundColor: colores,
                    borderColor: "black",
                    borderWidth: 0
                }
            ]
        };
        var chartOptions = {
            maintainAspectRatio: false,
            cutoutPercentage: 55,
            circumference: 2 * Math.PI,
            legend: {
                display: false,
                position: 'right',
                fontFamily: 'Roboto',
                fontSize: '12px',
                padding: 20
            },
            tooltips: {
                display: true,
                backgroundColor: '#000',
            }
        };
        var pieChart = new __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"](oilCanvas, {
            type: 'doughnut',
            data: oilData,
            options: chartOptions,
            plugins: [{
                    id: 'my-plugin',
                    afterDraw: function (chart, option) {
                        chart.ctx.fillStyle = 'black';
                        chart.ctx.textBaseline = 'middle';
                        chart.ctx.font = '10px Roboto';
                        //   chart.ctx.fillText('Totales', chart.width / 2 - 20, chart.width / 3.5, 200);
                        // chart.ctx.fillText('Monto:', chart.width / 2 - 20, chart.width / 2.9, 200);
                        //chart.ctx.fillText('Clientes:', chart.width / 2 - 20, chart.width / 2.5, 200);
                        //chart.ctx.fillText('Cobros:', chart.width / 2 - 20, chart.width /2.2, 200);
                        //chart.ctx.fillText('Partidas:', chart.width / 2 - 20, chart.width / 1.9, 200);
                        //chart.ctx.fillText('Piezas:', chart.width / 2 - 20, chart.width / 1.7, 200);
                    }
                }]
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], GraficasCobrosComponent.prototype, "valores1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], GraficasCobrosComponent.prototype, "valores2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], GraficasCobrosComponent.prototype, "valores3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], GraficasCobrosComponent.prototype, "valores4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], GraficasCobrosComponent.prototype, "valores5", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], GraficasCobrosComponent.prototype, "valores6", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], GraficasCobrosComponent.prototype, "valores7", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], GraficasCobrosComponent.prototype, "valores8", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], GraficasCobrosComponent.prototype, "valores9", void 0);
    GraficasCobrosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'pq-graficas-cobros',
            template: __webpack_require__("./src/app/components/gestion/consultas/cobros/graficas-cobros/graficas-cobros.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/consultas/cobros/graficas-cobros/graficas-cobros.component.scss")]
        })
    ], GraficasCobrosComponent);
    return GraficasCobrosComponent;
}());



/***/ })

});
//# sourceMappingURL=cobros.module.chunk.js.map