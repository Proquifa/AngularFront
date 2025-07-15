webpackJsonp(["cotizaciones.module"],{

/***/ "./src/app/components/gestion/consultas/cotizaciones/cotizaciones-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizacionesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cotizaciones_component__ = __webpack_require__("./src/app/components/gestion/consultas/cotizaciones/cotizaciones.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CotizacionesRoutingModule = /** @class */ (function () {
    function CotizacionesRoutingModule() {
    }
    CotizacionesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__cotizaciones_component__["a" /* CotizacionesComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], CotizacionesRoutingModule);
    return CotizacionesRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/cotizaciones/cotizaciones.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div (click)=\"backMenu()\">\n    <img height=\"22px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_190.svg\" alt=\"\">\n  </div>\n  |\n\n  <div *ngIf=\"!detalle\">CONSULTA DE COTIZACIONES</div>\n  <div *ngIf=\"detalle\" (click)=\"regresarConsulta()\" class=\"regresar\" style=\"  margin-right: 20px; cursor: pointer;\">CONSULTA DE COTIZACIONES </div>\n  <div *ngIf=\"detalle\" style=\"  margin-right: 20px;\">|</div>\n  <div *ngIf=\"detalle\">DETALLES</div>\n</div>\n<div *ngIf=\"!detalle\">\n  <div [ngClass]=\"classPanel\">\n    <div class=\"filtroHeader\">\n      <div class=\"abrir\" (click)=\"openPanel()\">\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_193.svg\" alt=\"\">\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_188.svg\" alt=\"\">\n      </div>\n      <div *ngIf=\"hiddenClose\">\n        cerrar\n        <div class=\"cerrar\" (click)=\"closePanel()\">\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"filtros\">\n      <div style=\"display: none\">\n        <pq-radio-button [widthTotal]=\"'100px'\" [lstItems]=\"lstItems\" [disble]=\"true\" [direction]=\"'row'\" [imgSize]=\"'12px'\" (emitItem)=\"emitItem($event)\"></pq-radio-button>\n      </div>\n      <div>\n        <div (click)=\"filtroAvanzada()\" [style.background]=\"avanzada?'#008895':'#C2C3C9'\">AVANZADA</div>\n        <div (click)=\"filtroRapida()\" [style.background]=\"!avanzada?'#008895':'#C2C3C9'\">RÁPIDA</div>\n      </div>\n\n      <div *ngIf=\"avanzada\" class=\"divAvanzada\">\n        <!--  Si ya hay datos dentro del compenente se manda el < Gestion-filter/> con los datos\n            Y la propiedad IsLoader como verdadera\n          -->\n        <div *ngIf=\"isThereData;else loader\">\n          <gestion-filter [ElementsDropList]=\"Elements\" (valueFilter)=\"mostrarDatos($event)\" [IsImage]=\"IsImage\" [IsDate]=\"IsDate\"\n            [IsLoader]=\"isThereData\" [Clear]=\"Clear\" style=\"width: 100%\"></gestion-filter>\n        </div>\n\n        <!--  Si no hay datos dentro del compenente se manda el < Gestion-filter/> con solo\n              una propiedad\n              IsLoader como Falsa-->\n        <ng-template #loader>\n          <gestion-filter [IsLoader]=\"isThereData\" [Clear]=\"Clear\"></gestion-filter>\n        </ng-template>\n      </div>\n\n      <div *ngIf=\"!avanzada\" class=\"divRapida\">\n        <div style=\"display: none\">\n          <!--<pq-radio-button [widthTotal]=\"'60px'\" [lstItems]=\"lstRadiosRapida\" [disble]=\"true\" [direction]=\"'row'\" [imgSize]=\"'12px'\" (emitItem)=\"emitItem($event)\"></pq-radio-button>-->\n        </div>\n\n        <div>\n          <span>Folio de cotización</span>\n          <input [(ngModel)]=\"txtCotizacion\" type=\"text\">\n        </div>\n\n        <div (click)=\"Rapida()\">\n          <img height=\"20px\" src=\"assets/Images/visualizar.svg\" alt=\"\">\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"resultados\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\">\n    <div>\n      <div>\n        RESULTADOS\n      </div>\n      <div>\n        <img height=\"20px\" width=\"20px\" (click)=\"download()\" src=\"assets/Images/exportar.svg\" alt=\"\">\n        <img [style.margin-right]=\"'15px'\" (click)=\"showGraphic()\" height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/images/graficaminigris.svg\"\n          alt=\"\">\n      </div>\n    </div>\n\n\n    <div *ngIf=\"lstCotizaciones\" class=\"sistema \">\n\n      <div style=\"min-width: 1520px;\">\n        <div [style.min-width]=\"'50px'\">#</div>\n        <div [style.min-width]=\"'160px'\">Fecha</div>\n        <div [style.min-width]=\"'160px'\">Cliente</div>\n        <div [style.min-width]=\"'160px'\">Contacto</div>\n        <div [style.min-width]=\"'160px'\">Medio de envío</div>\n        <div [style.min-width]=\"'160px'\">Cotizó</div>\n        <div [style.min-width]=\"'160px'\">Cotización</div>\n        <div [style.min-width]=\"'160px'\">Requisición</div>\n        <div [style.min-width]=\"'160px'\">Estado</div>\n        <div [style.min-width]=\"'160px'\">Envío</div>\n        <div [style.min-width]=\"'30px'\" [style.background]=\"red\"></div>\n      </div>\n\n\n      <div>\n        <div *ngFor=\"let item of lstCotizaciones; let i = index\">\n          <div [style.min-width]=\"'50px'\">{{i + 1}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.fecha}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.nombreCliente}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.contacto}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.msalida}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.cotizo}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.folioCotizacion}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.requisicion}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.estado}}</div>\n          <div [style.min-width]=\"'160px'\">\n            <div style=\"margin-right: 10px;\">\n              {{item.enTiempoFueraDeTiempo? \"ET \": \"FT \"}}\n            </div>\n            <div *ngIf=\"item.enTiempoFueraDeTiempo\" class=\"circuloverde\">\n\n            </div>\n            <div *ngIf=\"!item.enTiempoFueraDeTiempo\" class=\"circulorojo\">\n\n            </div>\n          </div>\n          <div [style.min-width]=\"'30px'\" (click)=\"verDetalle(item)\">\n            <img class=\"detalle\" width=\"14px\" src=\"assets/Images/ir_detalle.svg\" alt=\"\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"total\" style=\"display: flex; align-content: center; align-items: center; justify-content: center\">\n      <p>Total:\n        <span>{{lstCotizaciones.length}}</span>\n        <span *ngIf=\"lstCotizaciones.length == 1\">Cotización</span>\n        <span *ngIf=\"lstCotizaciones.length != 1\">Cotizaciones</span>\n      </p>\n    </div>\n\n  </div>\n</div>\n\n<!--Sección de detalles-->\n<div *ngIf=\"detalle\" class=\"consultaDetalles\">\n  <div [ngClass]=\"classPanel\">\n    <div class=\"filtroHeader\">\n      <div class=\"abrir\" (click)=\"openPanel()\">\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa.svg\" alt=\"\">\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa_verde.svg\" alt=\"\">\n      </div>\n      <div *ngIf=\"hiddenClose\">\n        CERRAR\n        <div class=\"cerrar\" (click)=\"closePanel()\">\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"Cotizacion_Detalle\" class=\"filtros\">\n      <div class=\"detalleCliente\"> {{Cotizacion_Detalle.nombreCliente}} </div>\n      <div style=\"height: 0.1px; margin: 0.1px;\"></div>\n      <div class=\"detalleTitulo \">Folio:</div>\n      <div class=\"detalleTexto\" style=\"color:#008895; cursor:pointer\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Cotizaciones/'+Cotizacion_Detalle.folioCotizacion+'.pdf')\">\n        {{Cotizacion_Detalle.folioCotizacion}} </div>\n      <div class=\"detalleTitulo\">Referencia:</div>\n      <div class=\"detalleTexto\" style=\"color:#008895; cursor:pointer\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Doctos/'+Cotizacion_Detalle.requisicion+'.pdf')\">{{Cotizacion_Detalle.requisicion}}</div>\n      <div class=\"detalleTitulo\">Fecha de origen:</div>\n      <div class=\"detalleTexto\">{{Cotizacion_Detalle.fechaOrigen | dateFormatSlashHour}} </div>\n      <div class=\"detalleTitulo\">Fecha de registro</div>\n      <div class=\"detalleTexto\">{{Cotizacion_Detalle.fechaRegistro | dateFormatSlashHour}} </div>\n      <div class=\"detalleTitulo\">Pendiente de origen:</div>\n      <div class=\"detalleTexto\">{{Cotizacion_Detalle.pendienteOrigen}}</div>\n      <div class=\"detalleTitulo\">Condiciones de pago:</div>\n      <div class=\"detalleTexto\">{{Cotizacion_Detalle.cpago}}</div>\n      <div class=\"detalleTitulo\">Monto total de la cotización:</div>\n      <div class=\"detalleTexto\">{{Cotizacion_Detalle.montoCotiza | acFormatMoney}} USD</div>\n      <div class=\"detalleTitulo\">Total de piezas:</div>\n      <div class=\"detalleTexto\">{{lstPartidas.length}}</div>\n\n    </div>\n\n    <div *ngIf=\"hiddenClose\" style=\" visibility: hidden;width: 100%; opacity: 1;margin-top: 40px;background: transparent;color:#008895;;display:flex;flex-direction: column; justify-content: center;align-content: center; align-items: center\">\n\n      Pedido\n      <div style=\"width: 70%;height:60%; opacity: 1;;background: transparent;margin-top: 20px;;display:flex; justify-content: center;align-content: center; align-items: center; position: relative\">\n        <div style=\"width:60%;height:10vh;background:transparent;position:absolute;text-align:center; margin-top:10%;font-size:12px;\n          border-radius: 100%;\">Totales\n          <p style=\"font-size: 10px;margin-top: 20px;color: #424242 \">\n            Monto total:#\n          </p>\n\n          <p style=\"font-size: 10px;color: #424242 \">\n            Partidas: #\n          </p>\n\n\n          <p style=\"font-size: 10px;color: #424242 \">\n            Piezas:#\n          </p>\n\n        </div>\n        <div>\n\n          <div style=\"min-width: 300px;min-height: 200px;\">\n            <!--   <canvas id=\"graficoIndividual\"></canvas> -->\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"contenidoFactura\">\n    <div class=\"detalleFactura\" style=\"justify-content: center; background: transparent;overflow-y: auto\">\n      <div style=\"background: transparent; justify-content: center\">C-{{Cotizacion_Detalle.folioCotizacion}} </div>\n      <div>\n        <!--  lista de Compras-->\n        <div [ngClass]=\"i==0?'divActual':''\" *ngFor=\"let item of lstPartidas; let i = index\" (click)=\"obtenerTiempoProceso(item, i,0)\">\n          <div class=\"dfSelect\"></div>\n          <div>\n            <div>\n              <div *ngIf=\"item.cantidad==1\" [style.color]=\"'#008895'\">#{{(i+1)+\" - \"+item.cantidad +\"Pza - \"}}{{item.monto | acFormatMoney}} USD </div>\n\n              <div *ngIf=\"item.cantidad!=1\" [style.color]=\"'#008895'\">#{{(i+1)+\" - \"+item.cantidad +\"Pzas - \"}}{{item.monto | acFormatMoney}} USD </div>\n              <div></div>\n            </div>\n            <div>\n              <div style=\"width: 65%\">{{item.concepto}}</div>\n\n              <div style=\"width: 5%\"></div>\n\n            </div>\n\n\n            <div>\n              <div style=\"width:70%\"> </div>\n              <div *ngIf=\"Cotizacion_Detalle.estado=='Abierto' ;\" style=\"width:19%; color:red; text-align: center\"> Abierto</div>\n              <div *ngIf=\"Cotizacion_Detalle.estado=='Cerrado'\" style=\"width:19%; color:#91BE5F; text-align: center \"> Cerrado </div>\n            </div>\n\n            <div>\n\n              <!--Aqui se muestra otra ventana\n                  http://201.161.12.60:51725/SAP/Pedidos/062218-5141.pdf\n                  -->\n              <div style=\"color:#008895; width:70%\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pedidos/'+item.pedido+'.pdf')\">\n                PU {{item.precio | acFormatMoney}} USD </div>\n\n\n              <div *ngIf=\"item.estado=='Recibido'\" style=\"color:#008895; width:30%\"> {{item.estado+\" \"}}\n                <span style=\"color:#91BE5F \"> ET</span>\n              </div>\n\n              <div *ngIf=\"item.estado=='BackOrder'\" style=\"color:#008895; width:30%\"> {{item.estado+\" \"}}\n                <span style=\"color:#D0021B  \"> FT</span>\n              </div>\n\n              <div *ngIf=\"item.estado!='BackOrder'&&item.estado!='Recibido'\" style=\"color:#008895; width:30%\"> {{item.estado+\" \"}}</div>\n            </div>\n          </div>\n        </div>\n\n        <div style=\"width: 100%; height: 100px;display: flex;flex-wrap: wrap; justify-content: center;align-content: center;align-items: center; background: transparent\">\n          <div style=\"background: transparent\">\n            Total: {{lstPartidas.length==1?lstPartidas.length+\" Partida\" :lstPartidas.length+\" Partidas\" }}\n          </div>\n\n\n        </div>\n\n\n      </div>\n      <div>\n\n      </div>\n    </div>\n    <div class=\"lineaTiempo\" style=\"    overflow-y: scroll;\">\n\n\n      <div *ngIf=\"lstPartidas[PartidaSeleccionada]!=null&&lstPartidas[PartidaSeleccionada].cantidad==1\">\n        # {{(PartidaSeleccionada+1)}}-{{lstPartidas[PartidaSeleccionada].cantidad +\"Pieza\" }}</div>\n      <div *ngIf=\"lstPartidas[PartidaSeleccionada]!=null&&lstPartidas[PartidaSeleccionada].cantidad!=1\">\n        # {{(PartidaSeleccionada+1)}}-{{lstPartidas?lstPartidas[PartidaSeleccionada].cantidad:\"\" }}-Piezas</div>\n\n      <div [ngClass]=\"i==lineaSeleccionada?'cont-timeLine cont-timeLineSelected':'cont-timeLine'\" *ngFor=\"let item of lstTiempoProceso; let i = index\"\n        (click)=\"SeleccionarProceso(item, i)\" style=\"border-bottom: none; cursor: pointer;display: flex;flex-direction: row; min-width: 564px\">\n\n        <div class=\"cuadroActivo\" style=\"min-width: 8px;\n    background: #008895;\n    min-height:150px; display: flex; flex-direction: column\">\n\n        </div>\n\n        <div class=\"cuadroActivo\" style=\"min-width: 8px;\n    background: transparent;\n    min-height:150px; display: flex; flex-direction: column\">\n\n        </div>\n\n        <div *ngIf=\"item.proceso!='Evaluar respuesta' && item.proceso!='Ingresó en catálogo'\" style=\"display: flex;\n                              flex-direction: column;  padding-left: 1rem\">\n\n          <div style=\"font-size: 18px;width: 100%;\n                      font-weight: bold;\n                      color: #424242;\n                      margin-bottom: 15px;display: flex; justify-content: space-between\">\n            <div style=\"width: 90%; min-width: 520px;\">\n              {{item.proceso}}\n            </div>\n\n            <div *ngIf=\"item.fechaFin !=null\" class=\"circuloverde\"></div>\n\n            <div *ngIf=\"item.fechaFin ==null\" class=\"circulorojo\"></div>\n          </div>\n\n          <div style=\"    font-size: 16px;\n                      color: #008895;\n                      margin-bottom: 5px;margin-bottom: 2px\">{{item.responsable}}</div>\n          <div style=\"    font-size: 16px;\n                      color: #F3B23F;\n                      margin-bottom: 5px;\">FI {{item.fechaInicio | dateFormatSlashHour}}</div>\n          <div style=\"    font-size: 16px;\n                      color: #571C7B;\n                      margin-bottom: 5px;\">FF {{item.fechaFin | dateFormatSlashHour}}</div>\n          <div style=\"    font-size: 16px;\n                      color: #981E30;\n                      margin-bottom: 5px;\">TT {{item.totalProceso}} día\n            <span *ngIf=\"item.totalProceso != 1\">s</span>\n          </div>\n        </div>\n\n      </div>\n\n\n\n      <hr>\n\n    </div>\n\n\n    <div class=\"detalleTiempo\">\n      <div style=\"display: flex;\">\n        <div   *ngIf=\"ProcesoSeleccionado!=null\" style=\"width: 90%\">\n          {{ProcesoSeleccionado.proceso}}\n        </div>\n        <div *ngIf=\"ProcesoSeleccionado !=null\" class=\"circuloverde\"></div>\n\n        <div *ngIf=\"ProcesoSeleccionado ==null\" class=\"circulorojo\"></div>\n\n\n      </div>\n      <!--Seccion de Registro -->\n      <div *ngIf=\"ProcesoSeleccionado!=null&&ProcesoSeleccionado.proceso=='Registro'\">\n        <div class=\"encabezadoGestion\">\n          Generales\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Fecha de Recepción\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.fechaInicio | dateFormatSlashHour}}\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Fecha de Registro\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}}\n\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Medio\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.medio ?ProcesoSeleccionado.medio : \"ND\"}}\n\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Contacto\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.contacto ?ProcesoSeleccionado.contacto : \"ND\"}}\n\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Registró\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.responsable ?ProcesoSeleccionado.responsable : \"ND\"}}\n\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Referencia\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.referencia?ProcesoSeleccionado.referencia: \"ND\"}}\n\n        </div>\n\n      </div>\n      <!--Seccion de Clasificación-->\n\n      <div *ngIf=\"ProcesoSeleccionado!=null&&ProcesoSeleccionado.proceso=='Clasificación'\">\n        <div class=\"encabezadoGestion\">\n          Generales\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Clasificación Inicial\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.pcotiza.clasificacion?ProcesoSeleccionado.pcotiza.clasificacion: \"ND\"}}\n\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Clasificación Final\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.pcotiza.clasifFinal?ProcesoSeleccionado.pcotiza.clasifFinal: \"ND\"}}\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Fecha Registro\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.fechaInicio | dateFormatSlashHour}}\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Fecha Clasificación\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}}\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Cotización\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.referencia?ProcesoSeleccionado.referencia: \"ND\"}}\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Clasificó\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.responsable?ProcesoSeleccionado.responsable: \"ND\"}}\n        </div>\n        <div class=\"subencabezadoGestion\">\n          contacto\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.contacto?ProcesoSeleccionado.contacto: \"ND\"}}\n        </div>\n      </div>\n\n\n\n      <!--Seccion de Envio-->\n\n      <div *ngIf=\"ProcesoSeleccionado!=null&&ProcesoSeleccionado.proceso=='Envío'\">\n        <div class=\"encabezadoGestion\">\n          Generales\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Clasificación\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n\n          {{ProcesoSeleccionado.clasificacion?ProcesoSeleccionado.clasificacion: \"ND\"}}\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Fecha de Registro\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{Cotizacion_Detalle.fechaRegistro | dateFormatSlashHour}}\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          fecha Inicio Envío\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}}\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Fecha Envío\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n\n          {{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}}\n        </div>\n      </div>\n\n      <!--Seccion de  ConformacionS-->\n      <div *ngIf=\"ProcesoSeleccionado!=null&&ProcesoSeleccionado.proceso=='Confirmación'\">\n        <div class=\"encabezadoGestion\">\n          Generales\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Fecha Inicio\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n\n          {{ProcesoSeleccionado.fechaInicio | dateFormatSlashHour}}\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Fecha Fin\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}}\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Confirmo\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.responsable?ProcesoSeleccionado.responsable: \"ND\"}}\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Contacto\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n\n          {{ProcesoSeleccionado.contacto?ProcesoSeleccionado.contacto: \"ND\"}}\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Comentarios\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n\n          {{ProcesoSeleccionado.comentarios?ProcesoSeleccionado.comentarios: \"ND\"}}\n        </div>\n\n\n      </div>\n\n      <!--Seccion de  Tramitacion-->\n      <div *ngIf=\"ProcesoSeleccionado!=null&&ProcesoSeleccionado.proceso=='Tramitación'\">\n        <div class=\"encabezadoGestion\">\n          Generales\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Fecha de Registro\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.fechaInicio | dateFormatSlashHour}}\n\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Fecha de tramitación\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}}\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          P. Interno\n        </div>\n        <div class=\"contenidoencabezadoGestion CVerde\" style=\"cursor:pointer; font-weight: 300; color:#008895;\"(click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pedidos/'+ProcesoSeleccionado.comentarios+'.pdf')\">\n\n         \n          <p style=\"cursor: pointer;\">\n              {{ProcesoSeleccionado.comentarios?ProcesoSeleccionado.comentarios: \"ND\"}}\n          </p>\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Tramitó\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.responsable?ProcesoSeleccionado.responsable: \"ND\"}}\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Contacto de Envío\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.contacto?ProcesoSeleccionado.contacto: \"ND\"}}\n        </div>\n\n\n      </div>\n\n\n      <!--Seccion de  Pedido-->\n      <div *ngIf=\"ProcesoSeleccionado!=null&&ProcesoSeleccionado.proceso=='PEDIDO'\">\n        <div class=\"encabezadoGestion\">\n          Generales\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Fecha\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}}\n\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Pedido\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.comentarios?ProcesoSeleccionado.comentarios: \"ND\"}}\n        </div>\n\n\n\n      </div>\n\n\n\n      <!--Seccion de  RECOTIZADA-->\n      <div *ngIf=\"ProcesoSeleccionado!=null&&ProcesoSeleccionado.proceso=='RECOTIZADA'\">\n        <div class=\"encabezadoGestion\">\n          Generales\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Fecha\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}}\n\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Recotizada en\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.referencia?ProcesoSeleccionado.referencia: \"ND\"}}\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Comentarios\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.comentarios?ProcesoSeleccionado.comentarios: \"ND\"}}\n        </div>\n\n\n\n      </div>\n\n      <!--Seccion de  RECOTIZADA-->\n      <div *ngIf=\"ProcesoSeleccionado!=null&&ProcesoSeleccionado.proceso=='RECOTIZADA'\">\n        <div class=\"encabezadoGestion\">\n          Generales\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Fecha\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}}\n\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Recotizada en\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.referencia?ProcesoSeleccionado.referencia: \"ND\"}}\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Comentarios\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.comentarios?ProcesoSeleccionado.comentarios: \"ND\"}}\n        </div>\n\n\n\n      </div>\n\n\n      <!--Seccion de  Investigacion-->\n      <div *ngIf=\"ProcesoSeleccionado!=null&&ProcesoSeleccionado.proceso=='Investigación'\">\n        <div class=\"encabezadoGestion\">\n          Generales\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Fecha Inicio\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}}\n\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Fecha Fin\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.referencia?ProcesoSeleccionado.referencia: \"ND\"}}\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Investigó\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.responsable?ProcesoSeleccionado.responsable: \"ND\"}}\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Clasificación\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.pcotiza.clasifOrigen?ProcesoSeleccionado.pcotiza.clasifOrigen: \"ND\"}}\n        </div>\n\n\n        <div class=\"encabezadoGestion\">\n          Investigación\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          FI: {{ProcesoSeleccionado.fechaInicio | dateFormatSlashHour}} FF:{{ProcesoSeleccionado.fechaFin | dateFormatSlashHour}} TT:\n          {{ProcesoSeleccionado.totalProceso==1?ProcesoSeleccionado.totalProceso+\" dia\": ProcesoSeleccionado.totalProceso+\"\n          dias\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Investigó\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.responsable?ProcesoSeleccionado.responsable: \"ND\"}}\n\n        </div>\n\n        <div class=\"encabezadoGestion\">\n          Datos de Producto Investigado\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Producto\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.tipoProveedor?ProcesoSeleccionado.tipoProveedor: \"ND\"}}-{{ProcesoSeleccionado.proveedor?ProcesoSeleccionado.proveedor:\n          \"ND\"}}\n\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n\n          Tipo\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.pcotiza.producto.tipo?ProcesoSeleccionado.pcotiza.producto.tipo: \"ND\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Catalogo\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.pcotiza.codigo?ProcesoSeleccionado.pcotiza.codigo: \"ND\"}}\n\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          concepto\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.pcotiza.descripcion?ProcesoSeleccionado.pcotiza.descripcion: \"ND\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Presentación\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n\n          {{ProcesoSeleccionado.pcotiza.presentacion?ProcesoSeleccionado.pcotiza.presentacion: \"ND\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Marca\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n\n          {{ProcesoSeleccionado.pcotiza.fabrica?ProcesoSeleccionado.pcotiza.fabrica: \"ND\"}}\n\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Precio de Lista\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.pcotiza.precio | acFormatMoney}}\n\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Dispobilidad y Manejo\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Tiempo de Entrega\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.pcotiza.tiempoEntrega?ProcesoSeleccionado.pcotiza.tiempoEntrega: \"ND\"}}\n\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Disponibilidad\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.pcotiza.producto.disponibilidad?ProcesoSeleccionado.pcotiza.producto.disponibilidad: \"ND\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Cargos por envio y adicionales\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.pcotiza.cargosEnviosAdicionales?ProcesoSeleccionado.pcotiza.cargosEnviosAdicionales: \"ND\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Manejo\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.pcotiza.producto.manejo?ProcesoSeleccionado.pcotiza.producto.manejo: \"ND\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Hielo seco\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.pcotiza.hieloSeco?ProcesoSeleccionado.pcotiza.hieloSeco: \"ND\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Comentarios Adicionales\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ProcesoSeleccionado.pcotiza.comentariosAdicionales?ProcesoSeleccionado.pcotiza.comentariosAdicionales: \"ND\"}}\n\n        </div>\n\n\n\n        <div class=\"encabezadoGestion\">\n          Evaluar Respuesta\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          FI: {{EvaluarPropuesta.fechaInicio | dateFormatSlashHour}} FF:{{EvaluarPropuesta.fechaFin | dateFormatSlashHour}} TT: {{EvaluarPropuesta.totalProceso==1?EvaluarPropuesta.totalProceso+\"\n          dia\": EvaluarPropuesta.totalProceso+\" dias\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Evaluó\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{EvaluarPropuesta.responsable?EvaluarPropuesta.responsable: \"ND\"}}\n\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Clasificación\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{EvaluarPropuesta.pcotiza.clasifOrigen?EvaluarPropuesta.pcotiza.clasifOrigen: \"ND\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion CVerde\">\n          Producto\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{EvaluarPropuesta.tipoProveedor?EvaluarPropuesta.tipoProveedor: \"ND\"}}-{{EvaluarPropuesta.proveedor?EvaluarPropuesta.proveedor:\n          \"ND\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Catálogo\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{EvaluarPropuesta.pcotiza.codigo?EvaluarPropuesta.pcotiza.codigo: \"ND\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Concepto\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{EvaluarPropuesta.pcotiza.descripcion?EvaluarPropuesta.pcotiza.descripcion: \"ND\"}}\n\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Presentación\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{EvaluarPropuesta.pcotiza.presentacion?EvaluarPropuesta.pcotiza.presentacion: \"ND\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Marca\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{EvaluarPropuesta.pcotiza.fabrica?EvaluarPropuesta.pcotiza.fabrica: \"ND\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Precio de Lista\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{EvaluarPropuesta.pcotiza.precio | acFormatMoney}}\n\n        </div>\n\n        <div class=\"subencabezadoGestion CVerde\">\n          Disponibilida y Manejo\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Tiempo de Entrega\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{EvaluarPropuesta.pcotiza.tiempoEntrega?EvaluarPropuesta.pcotiza.tiempoEntrega: \"ND\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Disponibilidad\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{EvaluarPropuesta.pcotiza.producto.disponibilidad?EvaluarPropuesta.pcotiza.producto.disponibilidad: \"ND\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Cargos por Envío y Adicionales\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n\n\n          {{EvaluarPropuesta.pcotiza.cargosEnviosAdicionales?EvaluarPropuesta.pcotiza.cargosEnviosAdicionales: \"ND\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Manejo\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{EvaluarPropuesta.pcotiza.producto.manejo?EvaluarPropuesta.pcotiza.producto.manejo: \"ND\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Hielo Seco\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n\n          {{EvaluarPropuesta.pcotiza.hieloSeco?EvaluarPropuesta.pcotiza.hieloSeco: \"ND\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Comentarios Adicionales\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{EvaluarPropuesta.pcotiza.comentariosAdicionales?EvaluarPropuesta.pcotiza.comentariosAdicionales: \"ND\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Comentarios Adicionales para el Responsable C-Productos\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{EvaluarPropuesta.pcotiza.comentariosAdicionales?EvaluarPropuesta.pcotiza.comentariosAdicionales: \"ND\"}}\n\n        </div>\n        <div class=\"encabezadoGestion\">\n          Ingreso de Catálogo\n        </div>\n\n\n        <div class=\"contenidoencabezadoGestion\">\n          FI: {{IngresoCatalogo.fechaInicio | dateFormatSlashHour}} FF:{{IngresoCatalogo.fechaFin | dateFormatSlashHour}} TT: {{IngresoCatalogo.totalProceso==1?IngresoCatalogo.totalProceso+\"\n          dia\": IngresoCatalogo.totalProceso+\" dias\"}}\n\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Ingresó\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          ND\n\n        </div>\n      </div>\n\n\n      <!--Seccion de  Seguimiento-->\n      <div *ngIf=\"ProcesoSeleccionado!=null&&ProcesoSeleccionado.proceso=='Seguimiento'\">\n        <div class=\"encabezadoGestion\">\n          Historial\n        </div>\n\n        <div *ngFor=\"let historial of lstHistorial; let i = index\">\n\n\n\n          <div class=\"subencabezadoGestion\">\n            #{{(lstHistorial.length)-i}}\n          </div>\n          <div class=\"contenidoencabezadoGestion\">\n\n\n          </div>\n\n          <div class=\"subencabezadoGestion\">\n            Estado\n          </div>\n          <div class=\"contenidoencabezadoGestion\">\n            {{historial.estadoFinal?historial.estadoFinal: \"ND\"}}\n\n          </div>\n\n\n          <div class=\"subencabezadoGestion\">\n            {{historial.vendedor?historial.vendedor: \"ND\"}}\n          </div>\n          <div class=\"contenidoencabezadoGestion\">\n          </div>\n          <div class=\"subencabezadoGestion\">\n            Origen\n          </div>\n          <div class=\"contenidoencabezadoGestion\">\n            {{historial.estado?historial.estado: \"ND\"}}\n          </div>\n\n          <div class=\"subencabezadoGestion\">\n            Contacto\n          </div>\n          <div class=\"contenidoencabezadoGestion\">\n            {{historial.contacto?historial.contacto: \"ND\"}}\n          </div>\n\n          <div class=\"subencabezadoGestion\">\n            FER\n          </div>\n          <div class=\"contenidoencabezadoGestion\">\n            {{historial.fer | dateFormatSlashHour}}\n          </div>\n\n          <div class=\"subencabezadoGestion\">\n            FR\n          </div>\n          <div class=\"contenidoencabezadoGestion\">\n            {{historial.fr | dateFormatSlashHour}}\n          </div>\n\n\n          <div class=\"subencabezadoGestion\">\n            Comentarios\n          </div>\n          <div class=\"contenidoencabezadoGestion\">\n            {{historial.comentarios?historial.contacto: \"ND\"}}\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/cotizaciones/cotizaciones.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n.circuloverde {\n  background: #91BE5F;\n  height: 15px;\n  width: 15px;\n  border-radius: 15px 15px 15px 15px; }\n.cuadroActivo {\n  min-width: 8px;\n  background: #008895;\n  height: 100%; }\n.circulorojo {\n  background: #D0021B;\n  height: 15px;\n  width: 15px;\n  border-radius: 15px 15px 15px 15px; }\n.encabezadoGestion {\n  font-size: 18px;\n  color: #008895;\n  margin-top: 20px;\n  margin-bottom: 10px; }\n.cont-timeLine {\n  min-width: 592px;\n  background: #FFFFFF;\n  padding: 15px 20px; }\n.cont-timeLine:hover {\n  background-color: rgba(0, 137, 149, 0.05); }\n.cont-timeLineSelected {\n  background-color: rgba(0, 137, 149, 0.05); }\n.subencabezadoGestion {\n  font-size: 16px;\n  font-weight: 400;\n  color: #424242;\n  margin-bottom: 3px; }\n.contenidoencabezadoGestion {\n  font-size: 16px;\n  font-weight: 200;\n  color: #424242;\n  margin-bottom: 25px;\n  cursor: default !important; }\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: rgba(0, 137, 149, 0.02); }\n:host > div:nth-of-type(1) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    background: #008895;\n    height: 41px;\n    color: #FFFFFF;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 12px;\n    padding: 0px 20px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n:host > div:nth-of-type(1) > div:nth-of-type(1) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-right: 20px;\n      cursor: pointer; }\n:host > div:nth-of-type(1) > div:nth-of-type(2) {\n      margin-left: 20px; }\n:host > div:nth-of-type(2) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    height: calc(100vh - 170px);\n    width: 100%; }\n:host > div:nth-of-type(2) > .panelNormal {\n      background: #FFFFFF;\n      height: 100%;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      width: 321px;\n      min-width: 321px;\n      overflow-y: scroll; }\n:host > div:nth-of-type(2) > .panelOcultar {\n      background: #FFFFFF;\n      -webkit-animation-name: ocultarPanel;\n              animation-name: ocultarPanel;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 15px 15px; }\n:host > div:nth-of-type(2) > .panelOcultar .filtros {\n        display: none; }\n:host > div:nth-of-type(2) > .panelMostrar {\n      background: #FFFFFF;\n      -webkit-animation-name: mostar;\n              animation-name: mostar;\n      -webkit-animation-duration: 0.5s;\n              animation-duration: 0.5s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      overflow-y: scroll; }\n:host > div:nth-of-type(2) .filtroHeader {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #424242;\n      font-size: 10px;\n      margin-bottom: 20px; }\n:host > div:nth-of-type(2) .filtroHeader > .abrir {\n        cursor: pointer; }\n:host > div:nth-of-type(2) .filtroHeader > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n:host > div:nth-of-type(2) .filtroHeader > div:nth-of-type(2) > .cerrar {\n          margin-left: 9px;\n          cursor: pointer; }\n:host > div:nth-of-type(2) .filtros {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      border-top: 1px solid #424242; }\n:host > div:nth-of-type(2) .filtros > div:nth-of-type(1) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        height: 50px;\n        border-bottom: 1px solid #ECEEF0;\n        padding-top: 15px;\n        padding-bottom: 20px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n:host > div:nth-of-type(2) .filtros > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        height: 60px;\n        border-bottom: 1px solid #ECEEF0;\n        color: #FFFFFF;\n        font-size: 14px; }\n:host > div:nth-of-type(2) .filtros > div:nth-of-type(2) > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          cursor: pointer;\n          width: 140px;\n          height: 25px;\n          margin-right: 1px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        margin-top: 15px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            width: 130px;\n            font-size: 16px;\n            color: #424242; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) > div > div {\n              margin-top: 6px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(2) {\n          border-bottom: 1px solid #424242;\n          padding-bottom: 18px;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n            margin-top: 15px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(3) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          margin-top: 18px;\n          background: #424242;\n          width: 100%;\n          height: 35px;\n          cursor: pointer; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(1) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        height: 53px;\n        padding-top: 10px;\n        border-bottom: 1px solid #ECEEF0; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        margin-top: 15px;\n        padding-bottom: 18px;\n        border-bottom: 1px solid #424242; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(2) > input {\n          height: 25px;\n          border: 1px solid #ECEEF0;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          margin-top: 5px; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(3) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin-top: 18px;\n        background: #424242;\n        width: 100%;\n        height: 35px;\n        cursor: pointer; }\n:host > div:nth-of-type(2) .filtros > .detalleCliente {\n        font-size: 16px;\n        color: #424242;\n        font-weight: bold;\n        margin-top: 15px; }\n:host > div:nth-of-type(2) .filtros > .detalleTitulo {\n        font-size: 16px;\n        color: #424242;\n        font-weight: 400;\n        margin-top: 20px; }\n:host > div:nth-of-type(2) .filtros > .detalleTexto {\n        font-size: 16px;\n        color: #424242;\n        font-weight: 200; }\n:host > div:nth-of-type(2) .filtros > .detalleTextoVerde {\n        font-size: 16px;\n        color: #008895 !important;\n        font-weight: 300;\n        cursor: pointer; }\n:host > div:nth-of-type(2) .filtros > .detalleTextoVerde:hover {\n        text-decoration: underline; }\n:host > div:nth-of-type(2) > .contenidoFactura {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      height: calc(100vh - 170px);\n      width: 100%;\n      overflow: scroll; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleFactura {\n        min-width: 592px;\n        padding: 15px 20px; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleFactura > div:nth-of-type(1) {\n          font-size: 22px;\n          font-weight: bold; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleFactura > div:nth-of-type(2) {\n          margin-top: 20px;\n          border-top: 1px solid #424242;\n          border-bottom: 1px solid #979797; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            border-bottom: 1px solid #FFFFFF; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div > div:nth-of-type(1) {\n              min-width: 8px;\n              background: transparent; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div > div:nth-of-type(2) {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: vertical;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: column;\n                      flex-direction: column;\n              padding: 5px 10px;\n              width: 100%;\n              cursor: pointer; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div > div:nth-of-type(2) > div {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-orient: horizontal;\n                -webkit-box-direction: normal;\n                    -ms-flex-direction: row;\n                        flex-direction: row;\n                -webkit-box-pack: justify;\n                    -ms-flex-pack: justify;\n                        justify-content: space-between;\n                margin: 5px 0px; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div:nth-of-type(2) {\n                  -webkit-box-pack: end;\n                      -ms-flex-pack: end;\n                          justify-content: flex-end; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div:hover {\n            background-color: #FFFFFF; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > .divActual {\n            background-color: #FFFFFF;\n            -webkit-box-shadow: 0 2px 4px -3px #008895;\n                    box-shadow: 0 2px 4px -3px #008895; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > .divActual > div:nth-of-type(1) {\n              min-width: 8px;\n              background: #008895; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > .divActive {\n            background-color: #FFFFFF; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleFactura > div:nth-of-type(3) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          -ms-flex-line-pack: center;\n              align-content: center;\n          width: 100%;\n          margin-top: 15px;\n          font-size: 14px;\n          color: #424242;\n          font-weight: 300; }\n:host > div:nth-of-type(2) > .contenidoFactura > .lineaTiempo {\n        min-width: 592px;\n        background: #FFFFFF;\n        padding: 15px 20px; }\n:host > div:nth-of-type(2) > .contenidoFactura > .lineaTiempo > div:nth-of-type(1) {\n          font-size: 22px;\n          font-weight: bold;\n          color: #008895; }\n:host > div:nth-of-type(2) > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) {\n          margin-top: 20px;\n          border-top: 1px solid #424242;\n          border-bottom: 1px solid #979797; }\n:host > div:nth-of-type(2) > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            cursor: pointer; }\n:host > div:nth-of-type(2) > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(1) {\n              min-width: 8px;\n              background: transparent; }\n:host > div:nth-of-type(2) > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row; }\n:host > div:nth-of-type(2) > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) {\n                display: -webkit-box;\n                display: -ms-flexbox;\n                display: flex;\n                -webkit-box-orient: vertical;\n                -webkit-box-direction: normal;\n                    -ms-flex-direction: column;\n                        flex-direction: column;\n                padding: 10px 10px;\n                width: 100%; }\n:host > div:nth-of-type(2) > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) {\n                  font-size: 18px;\n                  font-weight: bold;\n                  color: #424242;\n                  margin-bottom: 15px; }\n:host > div:nth-of-type(2) > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) {\n                  font-size: 16px;\n                  color: #008895;\n                  margin-bottom: 2px; }\n:host > div:nth-of-type(2) > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) {\n                  font-size: 16px;\n                  color: #F3B23F;\n                  margin-bottom: 2px; }\n:host > div:nth-of-type(2) > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) {\n                  font-size: 16px;\n                  color: #571C7B;\n                  margin-bottom: 2px; }\n:host > div:nth-of-type(2) > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(5) {\n                  font-size: 16px;\n                  color: #981E30;\n                  margin-bottom: 2px; }\n:host > div:nth-of-type(2) > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > .divActive {\n            background-color: rgba(0, 137, 149, 0.05); }\n:host > div:nth-of-type(2) > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > .divActive > div:nth-of-type(1) {\n              min-width: 8px;\n              background: #008895; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleTiempo {\n        min-width: 592px;\n        padding-top: 15px; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleTiempo > div:nth-of-type(1) {\n          font-size: 22px;\n          font-weight: bold;\n          padding: 0px 20px; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) {\n          border-top: 1px solid #424242;\n          margin: 20px 20px;\n          overflow: scroll;\n          max-height: calc(100vh - 248px); }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div {\n            border-bottom: 1px solid #D8D8D8; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .titulo {\n              font-size: 18px;\n              color: #008895;\n              margin-top: 20px;\n              margin-bottom: 10px; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .subTitulo {\n              font-size: 16px;\n              font-weight: 400;\n              color: #424242;\n              margin-bottom: 3px; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normal {\n              font-size: 16px;\n              font-weight: 200;\n              color: #424242;\n              margin-bottom: 25px;\n              cursor: default !important; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde {\n              font-size: 16px;\n              font-weight: 200;\n              margin-bottom: 25px;\n              color: #008895; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde > span {\n                cursor: pointer; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde:hover > span {\n              text-decoration: underline; }\n:host > div:nth-of-type(2) > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde:hover > .normal {\n              text-decoration: none; }\n:host > div:nth-of-type(2) > div:nth-of-type(2) {\n      height: 100%;\n      width: 100%;\n      background: rgba(0, 137, 149, 0.02); }\n:host > div:nth-of-type(2) > .resultados {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding: 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) {\n        border-bottom: 3px solid #424242;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        padding-bottom: 10px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(1) {\n          font-size: 22px; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(2) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          flex-direction: row-reverse;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(2) > img {\n            cursor: pointer;\n            height: 30px;\n            width: 30px; }\n:host > div:nth-of-type(2) > .resultados > .sistema {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        width: 100%;\n        height: 100%;\n        overflow-x: scroll; }\n:host > div:nth-of-type(2) > .resultados > .sistema > div:nth-of-type(1) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          border-bottom: 1px solid #424242;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          min-width: 1240px;\n          min-height: 57px; }\n:host > div:nth-of-type(2) > .resultados > .sistema > div:nth-of-type(1) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            min-height: 57px;\n            max-width: 160px;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            -webkit-box-sizing: border-box;\n                    box-sizing: border-box;\n            text-align: center;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center; }\n:host > div:nth-of-type(2) > .resultados > .sistema > div:nth-of-type(2) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          min-width: 1520px; }\n:host > div:nth-of-type(2) > .resultados > .sistema > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n            min-height: 70px;\n            border-bottom: 1px solid #C2C3C9; }\n:host > div:nth-of-type(2) > .resultados > .sistema > div:nth-of-type(2) > div > div {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row;\n              max-width: 160px;\n              -webkit-box-align: center;\n                  -ms-flex-align: center;\n                      align-items: center;\n              font-size: 12px;\n              -webkit-box-pack: center;\n                  -ms-flex-pack: center;\n                      justify-content: center;\n              text-align: center; }\n@-webkit-keyframes ocultarPanel {\n  from {\n    min-width: 321px; }\n  to {\n    min-width: 50px; } }\n@keyframes ocultarPanel {\n  from {\n    min-width: 321px; }\n  to {\n    min-width: 50px; } }\n@-webkit-keyframes mostar {\n  from {\n    width: 50px; }\n  to {\n    width: 321px; } }\n@keyframes mostar {\n  from {\n    width: 50px; }\n  to {\n    width: 321px; } }\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/cotizaciones/cotizaciones.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizacionesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__ = __webpack_require__("./src/app/components/shared/filter/element.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_gestion_gestion_service__ = __webpack_require__("./src/app/services/gestion/gestion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_gestion_consulta_cotizaciones_cotizacion_service__ = __webpack_require__("./src/app/services/gestion/consulta/cotizaciones/cotizacion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CotizacionesComponent = /** @class */ (function () {
    function CotizacionesComponent(router, _gestionService, _cotizacionService, coreComponent) {
        var _this = this;
        this.router = router;
        this._gestionService = _gestionService;
        this._cotizacionService = _cotizacionService;
        this.coreComponent = coreComponent;
        this.classPanel = "panelNormal";
        this.hiddenClose = true;
        this.avanzada = true;
        this.itemsDropList = [{ nombre: '- - Todos - -' }, { nombre: 'nombre1' }, { nombre: 'nombre2' }];
        this.defaultSelected = { nombre: '- - Todos - -' };
        this.IsImage = true;
        this.Clear = true;
        this.IsDate = true;
        this.isThereData = false;
        this.lstPartidas = [];
        this.lstHistorial = [];
        this.lstTiempoProceso = [];
        this.PartidaSeleccionada = 0;
        this.lineaSeleccionada = 0;
        this.DatosFill1 = {
            Fechas: {
                fechaInicial: new Date(),
                fechaFinal: new Date(),
            }
        };
        this.detalle = false;
        this.txtCotizacion = "";
        this.lstCotizaciones = [];
        this.Clientes = [{ nombre: '--TODOS--', key: 0 }];
        //LLENADO DE COMPONENTE PARA FILTROS
        this.Llenar = function () {
            var newListProveedor = [];
            _this.Elements = [new __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__["a" /* ElementFilter */]("string", "Cliente", _this.Clientes, true),
                new __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__["a" /* ElementFilter */]("string", "Cotizó", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'BArias', key: 1 },
                    { nombre: 'BGuevara', key: 2 },
                    { nombre: 'BLozada', key: 3 },
                    { nombre: 'CEJuarez', key: 4 },
                    { nombre: 'DPeralta', key: 5 },
                    { nombre: 'FCTovar', key: 6 },
                    { nombre: 'GETorres', key: 7 },
                    { nombre: 'JIOlvera', key: 8 },
                    { nombre: 'LHernandez', key: 9 },
                    { nombre: 'LVera', key: 10 },
                    { nombre: 'MNava', key: 11 },
                    { nombre: 'MRMoreno', key: 12 },
                    { nombre: 'MTorres', key: 13 },
                    { nombre: 'NVGomez', key: 14 },
                    { nombre: 'RThome', key: 15 },
                    { nombre: 'SVergara', key: 16 },
                    { nombre: 'YCervantes', key: 17 }
                ], false),
                new __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__["a" /* ElementFilter */]("string", "Medio de Envío", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Correo', key: 1 },
                    { nombre: 'Fax', key: 2 },
                    { nombre: 'Pendiente', key: 3 },
                ], false),
                new __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__["a" /* ElementFilter */]("string", "Estado", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Cerrado', key: 1 },
                    { nombre: 'Abierto', key: 2 },
                ], false),
            ];
            //isThereData indica que ya no es necesario mostrar el loader
            _this.isThereData = true;
            _this.Clear = false;
        };
    }
    //METODOS QUE SE CARGAN AL ENTRAR EL COMPONENTE
    CotizacionesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        this.date = new Date();
        this.date2 = new Date();
        this.date = new Date();
        this.date2 = new Date();
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
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
        this._gestionService.dropClientes().subscribe(function (data) {
            _this.lstClientes = data.current;
            var lstAux = [];
            for (var _i = 0, _a = _this.lstClientes; _i < _a.length; _i++) {
                var item = _a[_i];
                lstAux.push({ nombre: item.valor, key: item.llave });
            }
            _this.Clientes = _this.Clientes.concat(lstAux);
            var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
            parametros.finicio = new Date();
            parametros.ffin = new Date();
            var cotizacion = {
                folioCotizacion: null,
                estado: "--TODOS--",
                nombreCliente: "--TODOS--",
                msalida: "--TODOS--",
                cotizo: "--TODOS--"
            };
            parametros.cotizacion = cotizacion;
            parametros.idEmpleado = 27;
            console.log(_this.txtCotizacion);
            _this._cotizacionService.listaCotizacionesAvanzada(parametros).subscribe(function (data) {
                _this.coreComponent.closeModal(0);
                _this.lstCotizaciones = data.current;
                console.log(_this.lstCotizaciones);
            }, function (error) {
                console.log("error al obtener cotización por folio");
                _this.coreComponent.closeModal(0);
            });
            _this.Llenar();
        }, function (error) {
            console.log("error login");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
    };
    CotizacionesComponent.prototype.regresarConsulta = function () {
        this.detalle = false;
    };
    CotizacionesComponent.prototype.backMenu = function () {
        this.router.navigate(["protected/gestion/"]);
    };
    CotizacionesComponent.prototype.closePanel = function () {
        this.classPanel = "panelOcultar";
        this.hiddenClose = false;
    };
    CotizacionesComponent.prototype.openPanel = function () {
        if (!this.hiddenClose) {
            this.classPanel = "panelMostrar";
            this.hiddenClose = true;
        }
    };
    CotizacionesComponent.prototype.emitItem = function ($event) {
        console.log($event);
    };
    CotizacionesComponent.prototype.filtroAvanzada = function () {
        this.avanzada = true;
    };
    CotizacionesComponent.prototype.filtroRapida = function () {
        this.avanzada = false;
    };
    CotizacionesComponent.prototype.getFechaImpl = function ($event) {
        //console.log($event);
    };
    CotizacionesComponent.prototype.dropList = function (index, $event) {
    };
    CotizacionesComponent.prototype.mostrarDatos = function ($event) {
        console.log($event);
        this.Avanzada($event);
    };
    CotizacionesComponent.prototype.Rapida = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        parametros.finicio = new Date();
        parametros.ffin = new Date();
        parametros.idEmpleado = 0;
        var cotizacion = {
            folioCotizacion: this.txtCotizacion,
            estado: "--TODOS--",
            nombreCliente: "--TODOS--",
            msalida: "--TODOS--",
            cotizo: "--TODOS--"
        };
        parametros.cotizacion = cotizacion;
        parametros.idEmpleado = 27;
        console.log(this.txtCotizacion);
        this._cotizacionService.listaCotizacionesAvanzada(parametros).subscribe(function (data) {
            _this.lstCotizaciones = data.current;
            console.log(_this.lstCotizaciones);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.log("error al obtener cotización por folio");
            _this.coreComponent.closeModal(0);
        });
    };
    CotizacionesComponent.prototype.Avanzada = function (Datos) {
        var _this = this;
        this.coreComponent.openModal(0);
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        parametros.finicio = Datos.Fechas.fechaInicial;
        parametros.ffin = Datos.Fechas.fechaFinal;
        parametros.idEmpleado = 0;
        var cotizacion = {
            folioCotizacion: "",
            estado: Datos.Datos[3].nombre,
            nombreCliente: Datos.Datos[0].nombre,
            msalida: Datos.Datos[2].nombre,
            cotizo: Datos.Datos[1].nombre
        };
        parametros.cotizacion = cotizacion;
        parametros.idEmpleado = 27;
        this._cotizacionService.listaCotizacionesAvanzada(parametros).subscribe(function (data) {
            _this.lstCotizaciones = data.current;
            console.log(_this.lstCotizaciones);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.log("error login");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
    };
    //Función para convertir JSON en formato CSV
    CotizacionesComponent.prototype.ConvertToCSV = function (objArray) {
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
    CotizacionesComponent.prototype.buscarcomas = function (cadena) {
        var cadenaSinComas;
        var coma = ",";
        var espacio = "";
        cadenaSinComas = cadena.replace(coma, espacio);
        return cadenaSinComas;
    };
    // Función de descarga de archivo CSV 
    CotizacionesComponent.prototype.download = function () {
        var _this = this;
        if (this.lstCotizaciones.length > 0) {
            var lstCompras2_1 = [];
            this.lstCotizaciones.forEach(function (cotizacion, index) {
                var ObjAux = {
                    '#': (index + 1),
                    'Fecha': cotizacion.fecha,
                    'Cliente': _this.buscarcomas(cotizacion.nombreCliente),
                    'Contacto': cotizacion.contacto,
                    'Medio de Envío': cotizacion.msalida,
                    'Cotizó': cotizacion.cotizo,
                    'Cotización': cotizacion.folioCotizacion,
                    'Requisición': cotizacion.requisicion,
                    'Estado': cotizacion.estado,
                    'Enviado': (cotizacion.enTiempoFueraDeTiempo == true ? 'ET' : 'FT'),
                };
                lstCompras2_1.push(ObjAux);
            });
            var csvData = this.ConvertToCSV(lstCompras2_1);
            var a = document.createElement("a");
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            var blob = new Blob([csvData], { type: 'text/csv' });
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = 'ConzultaCotizacion-' + this.fechaDescarga(new Date()) + '.csv';
            a.click();
        }
        else {
            console.log("No existen Cotizaciones");
        }
    };
    CotizacionesComponent.prototype.fechaDescarga = function (fechaE) {
        var now = new Date(fechaE);
        var date;
        var mes = now.getMonth();
        switch (mes) {
            case 0:
                date = now.getDate() + 'Ene' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 1:
                date = now.getDate() + 'Feb' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 2:
                date = now.getDate() + 'Mar' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 3:
                date = now.getDate() + 'Abr' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 4:
                date = now.getDate() + 'May' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 5:
                date = now.getDate() + 'Jun' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 6:
                date = now.getDate() + 'Jul' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 7:
                date = now.getDate() + 'Ago' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 8:
                date = now.getDate() + 'Sep·' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 9:
                date = now.getDate() + 'Oct' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 10:
                date = now.getDate() + 'Nov' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            case 11:
                date = now.getDate() + 'Dic' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
                break;
            default:
                break;
        }
        return date;
    };
    //*************Seccion para trabajar con Detalle Cotizacion***************+
    CotizacionesComponent.prototype.verDetalle = function (item) {
        console.log("Cotización seleccionada");
        console.log(item);
        this.Cotizacion_Detalle = item;
        this.ObtenerPartidas(item);
        this.detalle = true;
    };
    CotizacionesComponent.prototype.ObtenerPartidas = function (item) {
        var _this = this;
        this.coreComponent.openModal(0);
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        parametros.folio = item.folioCotizacion;
        this._cotizacionService.listaPartidasXFolioCotizacion(parametros).subscribe(function (data) {
            _this.lstPartidas = data.current;
            console.log(_this.lstPartidas);
            _this.obtenerTiempoProceso(data.current[0], 0, 1);
        }, function (error) {
            console.error("Error al obtener Partidas", error);
            _this.coreComponent.closeModal(0);
        });
    };
    CotizacionesComponent.prototype.obtenerTiempoProceso = function (Partida, index, firstTime) {
        var _this = this;
        if (firstTime != 1) {
            this.coreComponent.openModal(0);
        }
        this.PartidaSeleccionada = 0;
        this.PartidaSeleccionada = index;
        console.log("Tiempo Proceso", Partida);
        var idPcotiza = Partida.idPCotiza;
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        console.log("idpCotiza" + idPcotiza);
        parametros.idpcotiza = idPcotiza;
        var ArreAUX = [];
        this._cotizacionService.listaTiempoProcesoPartidas(parametros).subscribe(function (data) {
            data.current.forEach(function (TiempoProceso) {
                if (TiempoProceso.proceso != "Evaluar respuesta" && TiempoProceso.proceso != "Ingresó en catálogo") {
                    TiempoProceso.responsable = TiempoProceso.responsable.toUpperCase();
                    ArreAUX.push(TiempoProceso);
                }
                else {
                    if (TiempoProceso.proceso == "Evaluar respuesta") {
                        _this.EvaluarPropuesta = TiempoProceso;
                    }
                    else {
                        if (TiempoProceso.proceso == "Ingresó en catálogo") {
                            _this.IngresoCatalogo = TiempoProceso;
                        }
                    }
                }
            });
            console.log("EvaluarProp", _this.EvaluarPropuesta);
            console.log("EvaluarProp", _this.IngresoCatalogo);
            _this.lstTiempoProceso = ArreAUX;
            console.log(_this.lstTiempoProceso);
            console.log("Partidas", _this.lstPartidas[_this.PartidaSeleccionada].idPCotiza);
            _this.ProcesoSeleccionado = _this.lstTiempoProceso[0];
            _this.ObtenerHistorial(_this.lstPartidas[_this.PartidaSeleccionada].idPCotiza);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.error("Error en la consulta del tiempo proceso", error);
            _this.coreComponent.closeModal(0);
        });
    };
    CotizacionesComponent.prototype.ObtenerHistorial = function (index) {
        var _this = this;
        var idPcotiza = index;
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        parametros.idpcotiza = idPcotiza;
        this._cotizacionService.listaHistorialXPartidaXidPcotiza(parametros).subscribe(function (data) {
            _this.lstHistorial = data.current;
            console.log(_this.lstHistorial);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.error("Error en la carga del historial ", error);
            _this.coreComponent.closeModal(0);
        });
    };
    //Abrir PDF 
    CotizacionesComponent.prototype.descargarPDF = function (archivo) {
        console.log(archivo);
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 800, height: 600 });
        PDFWindow.addSupport(newWin);
        newWin.loadURL(archivo);
    };
    CotizacionesComponent.prototype.SeleccionarProceso = function (Proceso, index) {
        this.ProcesoSeleccionado = Proceso;
        this.lineaSeleccionada = index;
        console.log("Proceso Seleccionado", this.ProcesoSeleccionado);
    };
    CotizacionesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-cotizaciones',
            template: __webpack_require__("./src/app/components/gestion/consultas/cotizaciones/cotizaciones.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/consultas/cotizaciones/cotizaciones.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_gestion_gestion_service__["a" /* GestionService */], __WEBPACK_IMPORTED_MODULE_5__services_gestion_consulta_cotizaciones_cotizacion_service__["a" /* CotizacionService */], __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__["a" /* CoreContainerComponent */]])
    ], CotizacionesComponent);
    return CotizacionesComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/cotizaciones/cotizaciones.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CotizacionesModule", function() { return CotizacionesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cotizaciones_routing_module__ = __webpack_require__("./src/app/components/gestion/consultas/cotizaciones/cotizaciones-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cotizaciones_component__ = __webpack_require__("./src/app/components/gestion/consultas/cotizaciones/cotizaciones.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_filter_filter_module__ = __webpack_require__("./src/app/components/shared/filter/filter.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CotizacionesModule = /** @class */ (function () {
    function CotizacionesModule() {
    }
    CotizacionesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__cotizaciones_routing_module__["a" /* CotizacionesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_filter_filter_module__["a" /* FilterModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__cotizaciones_component__["a" /* CotizacionesComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__cotizaciones_component__["a" /* CotizacionesComponent */]
            ]
        })
    ], CotizacionesModule);
    return CotizacionesModule;
}());



/***/ })

});
//# sourceMappingURL=cotizaciones.module.chunk.js.map