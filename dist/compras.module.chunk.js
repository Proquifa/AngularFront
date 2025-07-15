webpackJsonp(["compras.module"],{

/***/ "./src/app/components/gestion/consultas/compras/compras-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compras_component__ = __webpack_require__("./src/app/components/gestion/consultas/compras/compras.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComprasRoutingModule = /** @class */ (function () {
    function ComprasRoutingModule() {
    }
    ComprasRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__compras_component__["a" /* ComprasComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ComprasRoutingModule);
    return ComprasRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/compras/compras.component.html":
/***/ (function(module, exports) {

module.exports = "<!--060418-2501-->\n<div>\n  <div (click)=\"backMenu()\">\n    <img height=\"22px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_190.svg\" alt=\"\">\n  </div>\n  |\n  <div *ngIf=\"!detalle\">CONSULTA DE COMPRAS </div>\n  <div *ngIf=\"detalle\" (click)=\"regresarConsulta()\" class=\"regresar\" style=\"  margin-right: 20px;\">CONSULTA DE COMPRAS </div>\n  <div *ngIf=\"detalle\" style=\"  margin-right: 20px;\">|</div>\n  <div *ngIf=\"detalle\">DETALLES</div>\n</div>\n<div *ngIf=\"!detalle\">\n  <div [ngClass]=\"classPanel\">\n    <div class=\"filtroHeader\">\n      <div class=\"abrir\" (click)=\"openPanel()\">\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_193.svg\" alt=\"\">\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_188.svg\" alt=\"\">\n      </div>\n      <div *ngIf=\"hiddenClose\">\n        CERRAR\n        <div class=\"cerrar\" (click)=\"closePanel()\">\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"filtros\">\n      <div style=\"display: none;\">\n        <!--  <pq-radio-button [widthTotal]=\"'100px'\" [lstItems]=\"lstItems\" [disble]=\"true\" [direction]=\"'row'\" [imgSize]=\"'12px'\" (emitItem)=\"emitItem($event)\"></pq-radio-button>\n      -->\n      </div>\n      <div>\n        <div (click)=\"filtroAvanzada()\" [style.background]=\"avanzada?'#008895':'#C2C3C9'\">AVANZADA</div>\n        <div (click)=\"filtroRapida()\" [style.background]=\"!avanzada?'#008895':'#C2C3C9'\">RÁPIDA</div>\n      </div>\n\n      <div *ngIf=\"avanzada\" class=\"divAvanzada\">\n        <!--  Si  ya hay datos dentro del compenente se manda el < Gestion-filter/> con los datos\n            Y la propiedad IsLoader como verdadera\n          -->\n        <div *ngIf=\"isThereData;else loader\">\n          <gestion-filter [ElementsDropList]=\"Elements\" (valueFilter)=\"mostrarDatos($event)\" [IsImage]=\"IsImage\" [IsDate]=\"IsDate\"\n            [IsLoader]=\"isThereData\" [Clear]=\"Clear\" style=\"width: 100%\"></gestion-filter>\n        </div>\n\n        <!--  Si  no hay datos dentro del compenente se manda el < Gestion-filter/> con solo\n            una propiedad\n            IsLoader como Falsa-->\n        <ng-template #loader>\n          <gestion-filter [IsLoader]=\"isThereData\" [Clear]=\"Clear\"></gestion-filter>\n        </ng-template>\n      </div>\n\n      <div *ngIf=\"!avanzada\" class=\"divRapida\">\n        <div style=\"display: none\">\n\n        </div>\n\n        <div>\n          <span>Orden de compra</span>\n          <input [(ngModel)]=\"txtFactura\" type=\"text\">\n        </div>\n\n        <div (click)=\"ConsultaEspecifica(txtFactura)\">\n          <img height=\"20px\" (click)=\"ConsultaEspecifica(txtFactura)\" src=\"assets/Images/visualizar.svg\" alt=\"\">\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"resultados w3-animate-left \" *ngIf=\"isTableShow;else ShowGraphic\" [style.width]=\"hiddenClose ? 'calc(100% - 321px)': 'calc(100% - 50px)'\">\n    <div>\n      <div>\n        RESULTADOS\n      </div>\n      <div>\n        <img height=\"20px\" width=\"20px\" (click)=\"download()\" src=\"assets/Images/exportar.svg\" alt=\"\">\n        <img [style.margin-right]=\"'15px'\" (click)=\"showGraphic()\" height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/images/graficaminigris.svg\"\n          alt=\"\">\n      </div>\n    </div>\n\n\n\n    <div *ngIf=\"lstCompras\" class=\"sistema \">\n      <div>\n        <div [style.min-width]=\"'50px'\">#</div>\n        <div [style.min-width]=\"'160px'\">OC</div>\n        <div [style.min-width]=\"'160px'\">Proveedor</div>\n        <div [style.min-width]=\"'160px'\">Compró</div>\n        <div [style.min-width]=\"'160px'\">Colocó</div>\n        <div [style.min-width]=\"'160px'\">Comprador</div>\n        <div [style.min-width]=\"'160px'\">Estado</div>\n        <div [style.min-width]=\"'30px'\"></div>\n      </div>\n      <div>\n        <div *ngFor=\"let item of lstCompras; let i = index\">\n          <div [style.min-width]=\"'50px'\">{{i + 1}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.clave}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.nombreProveedor}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.empresa}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.colocarDesde}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.comprador}}</div>\n          <div [style.min-width]=\"'160px'\">{{item.abierto_cerrado}}</div>\n          <div [style.min-width]=\"'30px'\" (click)=\"verDetalle(item)\">\n            <img class=\"detalle\" width=\"14px\" src=\"assets/Images/ir_detalle.svg\" alt=\"\">\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n    <div class=\"total\">\n      <p>Total:\n        <span>{{lstCompras.length}}</span>\n        <span>Compra\n          <span *ngIf=\"lstCompras.length != 1\">s</span>\n        </span>\n      </p>\n    </div>\n\n  </div>\n\n  <!--Elemento Que muestra la vista Grafica-->\n  <ng-template #ShowGraphic>\n    <div class=\"w3-animate-right GlobalContainer-graphic-Component\" style=\"overflow:hidden;\">\n\n      <!--Elemento Que muestra los gráficos-->\n      <div class=\"GraphicsContainer-graphic-Component\" style=\"overflow-y: scroll\">\n\n        <div class=\"OnceGraphic-graphic-Component\" style=\"overflow: auto\">\n          <pq-graficas-dona [id]=\"id1\" [Refresh]=\"refresh\" [grafica1]=\"Grafico1\" [opcion]=\"0\"></pq-graficas-dona>\n        </div>\n      </div>\n      <div class=\"Filter-Container-graphic-Component\">\n        <div class=\"Tabgraphic-Component\" (click)=\"showTable()\">\n          <img height=\"16.2px\" width=\"20.4px\" src=\"assets/Images/gestion/images/tablaminibca.svg\" alt=“”>\n        </div>\n        <!--contenedor principal para los filtros de los graficos-->\n        <div class=\"Main-Container-filter-graphic-Component\">\n          <!--Encabezado Totales-->\n          <div class=\"totals-filter-graphic-Component\">\n            TOTALES\n\n\n\n\n\n            <br>\n          </div>\n          <!--Resultados de los filtros-->\n          <div class=\"Results-filter-graphic-Component\">\n\n\n            <div class=\"Contenedor-Paneles\">\n              <div class=\"Panel-Izq\">\n                <img width=\"21.4px\" src=\"assets/Images/gestion/images/verdeflecha.png\" alt=\"\">\n              </div>\n\n              <div class=\"Panel-Derecho\">\n                Monto USD:\n                <br>\n                <p class=\"total\"> $470,194.28</p>\n                <p class=\"azul\">$470,194.28</p>\n                <p class=\"morado\">$470,194.28</p>\n              </div>\n            </div>\n\n            <div class=\"Contenedor-Paneles\">\n              <div class=\"Panel-Izq\">\n                <img width=\"21.4px\" src=\"assets/Images/gestion/images/rojoflecha.png\" alt=\"\">\n              </div>\n\n              <div class=\"Panel-Derecho\">\n                No. Compra:\n                <br>\n                <p class=\"total\"> $470,194.28</p>\n                <p class=\"azul\">$470,194.28</p>\n                <p class=\"morado\">$470,194.28</p>\n              </div>\n            </div>\n            <div class=\"Contenedor-Paneles\">\n              <div class=\"Panel-Izq\">\n                <img width=\"21.4px\" src=\"assets/Images/gestion/images/verdeflecha.png\" alt=\"\">\n              </div>\n\n              <div class=\"Panel-Derecho\">\n                Total Piezas:\n                <br>\n                <p class=\"total\"> $470,194.28</p>\n                <p class=\"azul\">$470,194.28</p>\n                <p class=\"morado\">$470,194.28</p>\n              </div>\n            </div>\n\n\n            <br>\n          </div>\n          <!--Dobles filtros-->\n          <div class=\"filters-graphic-Component\">\n\n\n            <div class=\"content2dates\" style=\" width:100%;height: 25%; display: flex; flex-wrap: wrap\">\n\n\n              <div style=\"width: 10%;height: 100%; display: flex;  justify-content: center;  align-items: center; align-content: center;\">\n                <div class=\"dotAzul\"></div>\n              </div>\n              <div style=\"display: flex;flex-wrap: wrap; width: 80%; justify-content: space-between;;; height: 100%; align-content: center; align-items: center;\">\n                <div>\n                  Del\n                  <div>\n                    <pq-date-picker [style.width]=\"'125px'\" [(date)]=\"date3\" dateFormat=\"YYYYMMDD\"></pq-date-picker>\n\n                  </div>\n                </div>\n\n                <div>\n                  Al\n                  <div>\n                    <pq-date-picker [style.width]=\"'125px'\" [(date)]=\"date4\" dateFormat=\"YYYYMMDD\"></pq-date-picker>\n\n                  </div>\n                </div>\n\n              </div>\n              <br>\n            </div>\n\n\n\n            <div class=\"content2dates\" style=\" width:100%;height: 25%; display: flex; flex-wrap: wrap\">\n\n\n              <div style=\"width: 10%;height: 100%; display: flex; justify-content: center; align-items: center; align-content: center;\">\n                <div class=\"dotMorado\"></div>\n              </div>\n              <div style=\"display: flex;flex-wrap: wrap; width: 80%; justify-content: space-between;;; height: 100%; align-content: center; align-items: center;\">\n                <div>\n                  Del\n                  <div>\n                    <pq-date-picker [style.width]=\"'125px'\" [(date)]=\"date3\" dateFormat=\"YYYYMMDD\"></pq-date-picker>\n\n                  </div>\n                </div>\n\n                <div>\n                  Al\n                  <div>\n                    <pq-date-picker [style.width]=\"'125px'\" [(date)]=\"date4\" dateFormat=\"YYYYMMDD\"></pq-date-picker>\n\n                  </div>\n                </div>\n\n              </div>\n              <br>\n            </div>\n\n            <div style=\"width:90%;display: flex; justify-content:center;\">\n              <div style=\"width: 235px;; height: 35px;background: white; display: flex; justify-content: center; align-content: center; align-items: center;cursor: pointer;\">\n\n\n                <img class=\"img-filter2\" height=\"24px\" src=\"assets/Images/gestion/images/reloadAzul.svg\" alt=\"\">\n              </div>\n\n            </div>\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n\n<!--Sección de detalles-->\n<div *ngIf=\"detalle\" class=\"consultaDetalles\">\n  <div [ngClass]=\"classPanel\">\n    <div class=\"filtroHeader\">\n      <div class=\"abrir\" (click)=\"openPanel()\">\n        <img *ngIf=\"hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa.svg\" alt=\"\">\n        <img *ngIf=\"!hiddenClose\" width=\"15px\" src=\"assets/Images/hamburguesa_verde.svg\" alt=\"\">\n      </div>\n      <div *ngIf=\"hiddenClose\">\n        CERRAR\n        <div class=\"cerrar\" (click)=\"closePanel()\">\n          <img height=\"20px\" width=\"20px\" src=\"assets/Images/gestion/consultas/facturacion/recurso_189.svg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n    <div class=\"filtros\">\n      <div class=\"detalleCliente\"> {{CompraDetalle.nombreProveedor}} </div>\n      <div style=\"height: 0.1px; margin: 0.1px;\"></div>\n      <div class=\"detalleTitulo\">OC:</div>\n      <div class=\"detalleTexto\" style=\"color:#008895; cursor:pointer\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Ordenes de compra/'+CompraDetalle.clave+'-P.pdf')\">\n      {{CompraDetalle.clave}} </div>\n      <div class=\"detalleTitulo\">Colocó:</div>\n      <div class=\"detalleTexto\">{{CompraDetalle.colocarDesde}}</div>\n      <div class=\"detalleTitulo\">Comprò:</div>\n      <div class=\"detalleTexto\">{{CompraDetalle.empresa}}</div>\n      <div class=\"detalleTitulo\">Fecha de Comfirmación</div>\n      <div class=\"detalleTexto\">{{CompraDetalle.fechaConfirmacion | dateFormatSlashHour}}</div>\n      <div class=\"detalleTitulo\">Fecha de colocación:</div>\n      <div class=\"detalleTexto\">{{CompraDetalle.fecha | dateFormatSlashHour}}</div>\n      <div class=\"detalleTitulo\">Comprobador:</div>\n      <div class=\"detalleTexto\">{{CompraDetalle.comprador}}</div>\n      <div class=\"detalleTitulo\">Monto total de compra:</div>\n      <div class=\"detalleTexto\">{{CompraDetalle.montoTotalDolares | acFormatMoney}} USD</div>\n      <div class=\"detalleTitulo\">Total de piezas:</div>\n      <div class=\"detalleTexto\">{{CompraDetalle.totalPiezas}}</div>\n\n    </div>\n\n    <div *ngIf=\"hiddenClose\" style=\"width: 100%; opacity: 1;margin-top: 40px;background: transparent;color:#008895;;display:flex;flex-direction: column; justify-content: center;align-content: center; align-items: center\">\n\n      Recibido ET vs FT\n      <div style=\"width: 70%;height:60%; opacity: 1;;background: transparent;margin-top: 20px;;display:flex; justify-content: center;align-content: center; align-items: center; position: relative\">\n        <div style=\"width:60%;height:10vh;background:transparent;position:absolute;text-align:center; margin-top:10%;font-size:12px;\n          border-radius: 100%;\">Totales\n          <p style=\"font-size: 10px;margin-top: 20px;color: #424242 \">\n            Monto total: {{montototalGraficaDetalle | acFormatMoney}} USD\n          </p>\n\n          <p style=\"font-size: 10px;color: #424242 \">\n            Partidas: {{nPartidas}}\n          </p>\n\n\n          <p style=\"font-size: 10px;color: #424242 \">\n            Piezas:{{TotalPiezasPartidasDetalle}}\n          </p>\n\n        </div>\n        <div>\n\n          <div style=\"min-width: 300px;min-height: 200px;\">\n            <canvas id=\"graficoIndividual\"></canvas>\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n  <div class=\"contenidoFactura\">\n    <div class=\"detalleFactura\" style=\"justify-content: center; background: transparent;overflow-y: auto\">\n      <div style=\"background: transparent; justify-content: center\">OC {{CompraDetalle.clave}} </div>\n      <div>\n        <!--  lista de Compras-->\n        <div [ngClass]=\"i==0?'divActual':''\" *ngFor=\"let item of lstPartidas; let i = index\" (click)=\"resumenFactura(i)\">\n          <div class=\"dfSelect\"></div>\n          <div>\n            <div>\n              <div *ngIf=\"item.totalPiezas==1\" [style.color]=\"'#008895'\">#{{(i+1)+\" - \"+item.totalPiezas +\"Pza - \"}}{{item.montoTotal | acFormatMoney}} USD </div>\n\n              <div *ngIf=\"item.totalPiezas!=1\" [style.color]=\"'#008895'\">#{{(i+1)+\" - \"+item.totalPiezas +\"Pzas - \"}}{{item.montoTotal | acFormatMoney}} USD </div>\n              <div></div>\n            </div>\n            <div>\n              <div style=\"width: 65%\">{{item.descripcionProducto}}</div>\n\n              <div style=\"width: 5%\"></div>\n              <div style=\"width:30%\">FEE: {{item.fechaEstimadaEntrega| dateFormatSlash}}\n              </div>\n\n            </div>\n            <div>\n              <div style=\"opacity: 0.5;\">PU {{item.costo| acFormatMoney}} USD </div>\n              <div></div>\n            </div>\n\n            <div>\n              <div style=\"width:70%\"> {{item.destino}} </div>\n              <div *ngIf=\"item.abierto;else cerrado\" style=\"width:19%; color:red; text-align: center\"> Abierto</div>\n              <ng-template #cerrado>\n                <div style=\"width:19%; color:#91BE5F; text-align: center\"> Cerrado</div>\n              </ng-template>\n            </div>\n\n            <div>\n\n              <!--Aqui se muestra otra ventana\n              http://201.161.12.60:51725/SAP/Pedidos/062218-5141.pdf\n              -->\n              <div style=\"color:#008895; width:70%\" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/Pedidos/'+item.pedido+'.pdf')\">\n              {{item.pedido}} </div>\n\n\n              <div *ngIf=\"item.estado=='Recibido'\" style=\"color:#008895; width:30%\"> {{item.estado+\" \"}}\n                <span style=\"color:#91BE5F \"> ET</span>\n              </div>\n\n              <div *ngIf=\"item.estado=='BackOrder'\" style=\"color:#008895; width:30%\"> {{item.estado+\" \"}}\n                <span style=\"color:#D0021B  \"> FT</span>\n              </div>\n\n              <div *ngIf=\"item.estado!='BackOrder'&&item.estado!='Recibido'\" style=\"color:#008895; width:30%\"> {{item.estado+\" \"}}</div>\n            </div>\n          </div>\n        </div>\n\n        <div style=\"width: 100%; height: 100px;display: flex;flex-wrap: wrap; justify-content: center;align-content: center;align-items: center; background: transparent\">\n          <div style=\"background: transparent\">\n            {{lstPartidas.length==1?lstPartidas.length+\" Partida\" :lstPartidas.length+\" Partidas\" }}\n          </div>\n\n\n        </div>\n\n\n      </div>\n      <div>\n\n      </div>\n    </div>\n    <div class=\"lineaTiempo\">\n\n\n      <div *ngIf=\"lstPartidas[PartidaSeleccionada].totalPiezas==1\">\n        # {{(PartidaSeleccionada+1)}}-{{lstPartidas[PartidaSeleccionada].totalPiezas +\"Pieza\" }}</div>\n      <div *ngIf=\"lstPartidas[PartidaSeleccionada].totalPiezas!=1\">\n        # {{(PartidaSeleccionada+1)}}-{{lstPartidas?lstPartidas[PartidaSeleccionada].totalPiezas:\"\" }}-Piezas</div>\n\n      <div [ngClass]=\"i==lineaSeleccionada?'cont-timeLine cont-timeLineSelected':'cont-timeLine'\" *ngFor=\"let item of lstTiempoProceso; let i = index\"\n        (click)=\"SeleccionarLinea(i)\" style=\"border-bottom: none; cursor: pointer;display: flex;flex-direction: row; min-width: 564px\">\n        <br>\n\n\n        <div *ngIf=\"lineaSeleccionada==i\" class=\"cuadroActivo\" style=\"min-width: 8px;\nbackground: #008895;\nmin-height:150px; display: flex; flex-direction: column\">\n\n        </div>\n\n        <div *ngIf=\"lineaSeleccionada!=i\" class=\"cuadroActivo\" style=\"min-width: 8px;\nbackground: transparent;\nmin-height:150px; display: flex; flex-direction: column\">\n\n        </div>\n\n        <div style=\"display: flex;\n                          flex-direction: column;  padding-left: 1rem\">\n\n          <div style=\"font-size: 18px;width: 100%;\n                  font-weight: bold;\n                  color: #424242;\n                  margin-bottom: 15px;display: flex; justify-content: space-between\">\n            <div style=\"width: 90%; min-width: 520px;\">\n              {{item.etapa}}\n            </div>\n\n            <div *ngIf=\"item.fechaFin !=null\" class=\"circuloverde\"></div>\n\n            <div *ngIf=\"item.fechaFin ==null\" class=\"circulorojo\"></div>\n          </div>\n\n          <div style=\"    font-size: 16px;\n                  color: #008895;\n                  margin-bottom: 5px;margin-bottom: 2px\">{{item.responsable}}</div>\n          <div style=\"    font-size: 16px;\n                  color: #F3B23F;\n                  margin-bottom: 5px;\">FI {{item.fechaInicio | dateFormatSlash}}</div>\n          <div style=\"    font-size: 16px;\n                  color: #571C7B;\n                  margin-bottom: 5px;\">FF {{item.fechaFin | dateFormatSlash}}</div>\n          <div style=\"    font-size: 16px;\n                  color: #981E30;\n                  margin-bottom: 5px;\">TT {{item.totalProceso}} día\n            <span *ngIf=\"item.totalProceso != 1\">s</span>\n          </div>\n        </div>\n\n      </div>\n\n\n\n      <hr>\n\n    </div>\n\n\n    <div class=\"detalleTiempo\">\n      <div style=\"display: flex;\">\n        <div style=\"width: 90%\">\n          {{lstTiempoProceso[lineaSeleccionada].etapa}}\n        </div>\n        <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].fechaFin !=null\" class=\"circuloverde\"></div>\n\n        <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].fechaFin ==null\" class=\"circulorojo\"></div>\n\n\n      </div>\n      <!--Seccion de Tramitacion -->\n      <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].etapa=='TRAMITACIÓN'\">\n        <div class=\"encabezadoGestion\">\n          Generales\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Fecha de Tramitación\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].fechaTramitacion | dateFormatSlashHour}}\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          OC\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ lstTiempoProceso[lineaSeleccionada].referencia?lstTiempoProceso[lineaSeleccionada].referencia: \"ND\"}}\n\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Proveedor\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ lstTiempoProceso[lineaSeleccionada].proveedor?lstTiempoProceso[lineaSeleccionada].proveedor: \"ND\"}}\n\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Compró\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ lstTiempoProceso[lineaSeleccionada].fpor?lstTiempoProceso[lineaSeleccionada].fpor: \"ND\"}}\n\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Contacto\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ lstTiempoProceso[lineaSeleccionada].contacto?lstTiempoProceso[lineaSeleccionada].contacto: \"ND\"}}\n\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Comprador\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ lstTiempoProceso[lineaSeleccionada].responsable?lstTiempoProceso[lineaSeleccionada].responsable: \"ND\"}}\n\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Tráfico\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ lstTiempoProceso[lineaSeleccionada].trafico?lstTiempoProceso[lineaSeleccionada].trafico: \"ND\"}}\n\n        </div>\n\n      </div>\n      <!--Seccion de confirmacion-->\n\n      <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].etapa=='CONFIRMACIÓN'\">\n        <div class=\"encabezadoGestion\">\n          Generales\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Fecha de colocación\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].fechaInicio | dateFormatSlashHour}}\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Fecha de confirmación\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].fechaFin | dateFormatSlashHour}}\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Colocó\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ lstTiempoProceso[lineaSeleccionada].responsable?lstTiempoProceso[lineaSeleccionada].responsable: \"ND\"}}\n\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Comentarios de la confirmación\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{ lstTiempoProceso[lineaSeleccionada].comentariios?lstTiempoProceso[lineaSeleccionada].comentariios: \"ND\"}}\n        </div>\n      </div>\n\n\n\n      <!--Seccion de importacioón-->\n\n      <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].etapa=='IMPORTACIÓN'\">\n        <div class=\"encabezadoGestion\">\n          Generales\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Fecha de Arribo Tránsito\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].fechaInicio | dateFormatSlashHour}}\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Fecha de Arribo Matriz\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].fechaFin | dateFormatSlashHour}}\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          No. Pedimento\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].pedimento ?lstTiempoProceso[lineaSeleccionada].pedimento :\"ND\" }}\n\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Orden de despacho\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].ordenDespacho ?lstTiempoProceso[lineaSeleccionada].ordenDespacho :\"ND\" }}\n\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Aduana\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].aduna?lstTiempoProceso[lineaSeleccionada].aduna:\"ND\" }}\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Agente aduanal\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].agenteAduanal?lstTiempoProceso[lineaSeleccionada].agenteAduanal:\"ND\" }}\n\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Fletera\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].feltera?lstTiempoProceso[lineaSeleccionada].fletera:\"ND\" }}\n        </div>\n\n        <hr style=\"opacity: .5\">\n\n        <div class=\"encabezadoGestion\">\n          DECLARAR ARRIBO TRÁNSITO\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Fecha de Arribo Tránsito\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].fechaInicio | dateFormatSlashHour}}\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Lista de Arribo</div>\n\n        <!--Aqui se abre una nueva ventana con url\n          http://201.161.12.60:51725/SAP/ListaArribo/LA-062018-3560.pdf\n          -->\n        <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].folio!=null\" class=\"contenidoencabezadoGestion \" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/ListaArribo/'+lstTiempoProceso[lineaSeleccionada].folio+'.pdf')\"\n          style=\"color: #008895;cursor:pointer;\">\n          {{lstTiempoProceso[lineaSeleccionada].folio }}\n\n        </div>\n\n        <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].folio==null\" class=\"contenidoencabezadoGestion \">\n          ND\n\n        </div>\n\n        <hr style=\"opacity: .5\">\n        <div class=\"encabezadoGestion\">\n          DESPACHO\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Fecha de Planificación\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].fechaPlanificacion | dateFormatSlashHour}}\n\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Fecha de registro de despacho</div>\n        <div class=\"contenidoencabezadoGestion\">\n          Pendiente\n        </div>\n        <!--\n            Aqui se abre una nueva ventana por url \n            http://201.161.12.60:51725/SAP/OrdenDespacho/OD-061918-0906/1618%208000523.pdf\n          -->\n        <div class=\"subencabezadoGestion\">\n          No. pedimento</div>\n        <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].pedimento!=null\" class=\"contenidoencabezadoGestion \" (click)=\"descargarPDF('http://201.161.12.60:51725/SAP/OrdenDespacho/'+lstTiempoProceso[lineaSeleccionada].ordenDespacho+'/'+lstTiempoProceso[lineaSeleccionada].pedimento+'.pdf')\"\n          style=\"color: #008895;cursor:pointer;\">\n\n          {{lstTiempoProceso[lineaSeleccionada].pedimento ?lstTiempoProceso[lineaSeleccionada].pedimento :\"ND\" }}\n        </div>\n        <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].pedimento==null\" class=\"contenidoencabezadoGestion\">\n          ND\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Fecha de Pedimento</div>\n        <div class=\"contenidoencabezadoGestion\">\n\n          {{lstTiempoProceso[lineaSeleccionada].fechaPedimento | dateFormatSlash}}\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Referencia</div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].referencia ?lstTiempoProceso[lineaSeleccionada].referencia :\"ND\" }}\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Guia de Embarque</div>\n        <div class=\"contenidoencabezadoGestion\">\n\n          {{lstTiempoProceso[lineaSeleccionada].guiaEmbarque ?lstTiempoProceso[lineaSeleccionada].guiaEmbarque :\"ND\" }}\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Fecha de Salida de Aduana</div>\n        <div class=\"contenidoencabezadoGestion\">\n\n          {{lstTiempoProceso[lineaSeleccionada].fechaSalidaAduana | dateFormatSlashHour}}\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Fecha Estimada de Arribo</div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].fechaEstimadaArribo | dateFormatSlashHour}}\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Comprador que recibe</div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].responsable ?lstTiempoProceso[lineaSeleccionada].responsable :\"ND\" }}\n        </div>\n\n        <hr style=\"opacity: .5\">\n\n        <div class=\"encabezadoGestion\">\n          REGISTRO ARRIBO\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Fecha de Registro\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].fechaFin | dateFormatSlashHour}}\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          Recibió\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].responsable ?lstTiempoProceso[lineaSeleccionada].responsable :\"ND\" }}\n        </div>\n\n      </div>\n\n\n      <!--Seccion de  TRÁNSITO PHS-->\n\n      <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].etapa=='TRÁNSITO PHS'\">\n        <div class=\"encabezadoGestion\">\n          TRÁNSITO PHS\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          FI {{lstTiempoProceso[lineaSeleccionada].fechaInicio | dateFormatSlashHour}} : FF {{lstTiempoProceso[lineaSeleccionada].fechaFin\n          | dateFormatSlashHour}} : TT {{lstTiempoProceso[lineaSeleccionada].id==1?lstTiempoProceso[lineaSeleccionada].id\n          +\" dia\":lstTiempoProceso[lineaSeleccionada].id +\" dias\"}}\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n\n          FEA PHS\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].fechaEsperadaArribo | dateFormatSlash}}\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          FRA PHS\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          Pendiente\n        </div>\n      </div>\n\n\n\n\n      <!--Seccion de RECIBIDO-->\n\n      <div *ngIf=\"lstTiempoProceso[lineaSeleccionada].etapa=='RECIBIDO'\">\n        <div class=\"encabezadoGestion\">\n          GENERALES\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          Fecha de Tramitación\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].fechaInicio | dateFormatSlashHour}}\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          FRA PHS\n        </div>\n        <div class=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].fechaFin | dateFormatSlashHour}}\n        </div>\n\n        <div class=\"subencabezadoGestion\">\n          FEE\n        </div>\n        <div clasS=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].fechaEsperadaArribo | dateFormatSlashHour}}\n        </div>\n        <div class=\"subencabezadoGestion\">\n          Inspección Matriz\n        </div>\n        <div class=\"contenidoencabezadoGestion\" *ngIf=\"lstPartidas[PartidaSeleccionada].totalPiezas==1\">\n\n          {{lstPartidas[PartidaSeleccionada].totalPiezas +\" Pieza Despachable\" }}\n        </div>\n\n        <div class=\"contenidoencabezadoGestion\" *ngIf=\"lstPartidas[PartidaSeleccionada].totalPiezas!=1\">\n          {{lstPartidas?lstPartidas[PartidaSeleccionada].totalPiezas+ \" Piezas Despachable\" :\"\" }}\n        </div>\n\n\n        <div class=\"subencabezadoGestion\">\n          # de Monitoreos\n        </div>\n        <div clasS=\"contenidoencabezadoGestion\">\n          {{lstTiempoProceso[lineaSeleccionada].pedimento ?lstTiempoProceso[lineaSeleccionada].pedimento :\"ND\" }}\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/compras/compras.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n.circuloverde {\n  background: #91BE5F;\n  height: 15px;\n  width: 15px;\n  border-radius: 15px 15px 15px 15px; }\n.cuadroActivo {\n  min-width: 8px;\n  background: #008895;\n  height: 100%; }\n.circulorojo {\n  background: #D0021B;\n  height: 15px;\n  width: 15px;\n  border-radius: 15px 15px 15px 15px; }\n.encabezadoGestion {\n  font-size: 18px;\n  color: #008895;\n  margin-top: 20px;\n  margin-bottom: 10px; }\n.cont-timeLine {\n  min-width: 592px;\n  background: #FFFFFF;\n  padding: 15px 20px; }\n.cont-timeLine:hover {\n  background-color: rgba(0, 137, 149, 0.05); }\n.cont-timeLineSelected {\n  background-color: rgba(0, 137, 149, 0.05); }\n.subencabezadoGestion {\n  font-size: 16px;\n  font-weight: 400;\n  color: #424242;\n  margin-bottom: 3px; }\n.contenidoencabezadoGestion {\n  font-size: 16px;\n  font-weight: 200;\n  color: #424242;\n  margin-bottom: 25px;\n  cursor: default !important; }\n:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: rgba(0, 137, 149, 0.02); }\n:host > div:nth-of-type(1) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    background: #008895;\n    height: 41px;\n    color: #FFFFFF;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-size: 12px;\n    padding: 0px 20px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n:host > div:nth-of-type(1) > div:nth-of-type(1) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-right: 20px;\n      cursor: pointer; }\n:host > div:nth-of-type(1) > div:nth-of-type(2) {\n      margin-left: 20px; }\n:host > div:nth-of-type(2) {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    height: calc(100vh - 170px);\n    width: 100%; }\n:host > div:nth-of-type(2) > .panelNormal {\n      background: #FFFFFF;\n      height: 100%;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      width: 321px;\n      min-width: 321px;\n      overflow-y: scroll; }\n:host > div:nth-of-type(2) > .panelOcultar {\n      background: #FFFFFF;\n      -webkit-animation-name: ocultarPanel;\n              animation-name: ocultarPanel;\n      -webkit-animation-duration: 1s;\n              animation-duration: 1s;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      padding: 15px 15px; }\n:host > div:nth-of-type(2) > .panelOcultar .filtros {\n        display: none; }\n:host > div:nth-of-type(2) > .panelMostrar {\n      background: #FFFFFF;\n      -webkit-animation-name: mostar;\n              animation-name: mostar;\n      -webkit-animation-duration: 0.5s;\n              animation-duration: 0.5s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards;\n      padding: 15px 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      overflow-y: scroll; }\n:host > div:nth-of-type(2) .filtroHeader {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      color: #424242;\n      font-size: 10px;\n      margin-bottom: 20px; }\n:host > div:nth-of-type(2) .filtroHeader > .abrir {\n        cursor: pointer; }\n:host > div:nth-of-type(2) .filtroHeader > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n:host > div:nth-of-type(2) .filtroHeader > div:nth-of-type(2) > .cerrar {\n          margin-left: 9px;\n          cursor: pointer; }\n:host > div:nth-of-type(2) .filtros {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      border-top: 1px solid #424242; }\n:host > div:nth-of-type(2) .filtros > div:nth-of-type(1) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        height: 50px;\n        border-bottom: 1px solid #ECEEF0;\n        padding-top: 15px;\n        padding-bottom: 20px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n:host > div:nth-of-type(2) .filtros > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        height: 60px;\n        border-bottom: 1px solid #ECEEF0;\n        color: #FFFFFF;\n        font-size: 14px; }\n:host > div:nth-of-type(2) .filtros > div:nth-of-type(2) > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          cursor: pointer;\n          width: 140px;\n          height: 25px;\n          margin-right: 1px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        margin-top: 15px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            width: 130px;\n            font-size: 16px;\n            color: #424242; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(1) > div > div {\n              margin-top: 6px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(2) {\n          border-bottom: 1px solid #424242;\n          padding-bottom: 18px;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n            margin-top: 15px; }\n:host > div:nth-of-type(2) .filtros > .divAvanzada > div:nth-of-type(3) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          margin-top: 18px;\n          background: #424242;\n          width: 100%;\n          height: 35px;\n          cursor: pointer; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(1) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box;\n        height: 1px;\n        padding-top: 1px;\n        border-bottom: 1px solid #ECEEF0; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(2) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        margin-top: 15px;\n        padding-bottom: 18px;\n        border-bottom: 1px solid #424242; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(2) > input {\n          height: 25px;\n          border: 1px solid #ECEEF0;\n          -webkit-box-sizing: border-box;\n                  box-sizing: border-box;\n          margin-top: 5px; }\n:host > div:nth-of-type(2) .filtros > .divRapida > div:nth-of-type(3) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        margin-top: 18px;\n        background: #424242;\n        width: 100%;\n        height: 35px;\n        cursor: pointer; }\n:host > div:nth-of-type(2) > div:nth-of-type(2) {\n      height: 100%;\n      width: 100%;\n      background: rgba(0, 137, 149, 0.02); }\n:host > div:nth-of-type(2) > .resultados {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      padding: 20px;\n      -webkit-box-sizing: border-box;\n              box-sizing: border-box;\n      -webkit-transition: 1s ease-in-out;\n      transition: 1s ease-in-out; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) {\n        border-bottom: 3px solid #424242;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        padding-bottom: 10px;\n        -webkit-box-sizing: border-box;\n                box-sizing: border-box; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(1) {\n          font-size: 22px; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(2) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          flex-direction: row-reverse;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n:host > div:nth-of-type(2) > .resultados > div:nth-of-type(1) > div:nth-of-type(2) > img {\n            cursor: pointer;\n            height: 30px;\n            width: 30px; }\n:host > div:nth-of-type(2) > .resultados > .sistema {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        width: 100%;\n        height: 100%;\n        overflow-x: scroll; }\n:host > div:nth-of-type(2) > .resultados > .sistema > div:nth-of-type(1) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          border-bottom: 1px solid #424242;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          min-width: 1240px;\n          min-height: 57px; }\n:host > div:nth-of-type(2) > .resultados > .sistema > div:nth-of-type(1) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            min-height: 57px;\n            max-width: 160px;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            -webkit-box-sizing: border-box;\n                    box-sizing: border-box;\n            text-align: center;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center; }\n:host > div:nth-of-type(2) > .resultados > .sistema > div:nth-of-type(2) {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: column;\n                  flex-direction: column;\n          overflow: scroll;\n          -webkit-box-pack: justify;\n              -ms-flex-pack: justify;\n                  justify-content: space-between;\n          min-width: 1240px; }\n:host > div:nth-of-type(2) > .resultados > .sistema > div:nth-of-type(2) > div {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row;\n            -webkit-box-pack: justify;\n                -ms-flex-pack: justify;\n                    justify-content: space-between;\n            min-height: 70px;\n            border-bottom: 1px solid #C2C3C9; }\n:host > div:nth-of-type(2) > .resultados > .sistema > div:nth-of-type(2) > div > div {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row;\n              max-width: 160px;\n              -webkit-box-align: center;\n                  -ms-flex-align: center;\n                      align-items: center;\n              font-size: 12px;\n              -webkit-box-pack: center;\n                  -ms-flex-pack: center;\n                      justify-content: center;\n              text-align: center; }\n:host > div:nth-of-type(2) > .resultados > .total {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -ms-flex-line-pack: center;\n            align-content: center;\n        min-height: 30px;\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end; }\n@-webkit-keyframes ocultarPanel {\n  from {\n    min-width: 321px; }\n  to {\n    min-width: 50px; } }\n@keyframes ocultarPanel {\n  from {\n    min-width: 321px; }\n  to {\n    min-width: 50px; } }\n@-webkit-keyframes mostar {\n  from {\n    width: 50px; }\n  to {\n    width: 321px; } }\n@keyframes mostar {\n  from {\n    width: 50px; }\n  to {\n    width: 321px; } }\n.w3-animate-right {\n  position: relative;\n  -webkit-animation: animateright 0.4s;\n          animation: animateright 0.4s; }\n@-webkit-keyframes animateright {\n  from {\n    right: -900px;\n    opacity: 0; }\n  to {\n    right: 0;\n    opacity: 1; } }\n@keyframes animateright {\n  from {\n    right: -900px;\n    opacity: 0; }\n  to {\n    right: 0;\n    opacity: 1; } }\n.w3-animate-left {\n  position: relative;\n  -webkit-animation: animateleft 0.8s;\n          animation: animateleft 0.8s; }\n@-webkit-keyframes animateleft {\n  from {\n    left: -50px;\n    opacity: 0; }\n  to {\n    left: 0;\n    opacity: 1; } }\n@keyframes animateleft {\n  from {\n    left: -50px;\n    opacity: 0; }\n  to {\n    left: 0;\n    opacity: 1; } }\n.GlobalContainer-graphic-Component {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n.GlobalContainer-graphic-Component .GraphicsContainer-graphic-Component {\n    width: 85%;\n    height: auto;\n    background: rgba(0, 137, 149, 0.02); }\n.GlobalContainer-graphic-Component .Filter-Container-graphic-Component {\n    width: 15%;\n    min-width: 321px;\n    max-width: 321px;\n    height: 100%;\n    background: #424242; }\n.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Tabgraphic-Component {\n      position: absolute;\n      right: 321px;\n      top: 1%;\n      background: #424242;\n      cursor: pointer;\n      width: 50px;\n      height: 35px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -ms-flex-line-pack: center;\n          align-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component {\n      margin-left: 17px;\n      width: 100%;\n      height: 100%; }\n.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .totals-filter-graphic-Component {\n        width: 100%;\n        background: transparent;\n        height: 10%;\n        color: #fff;\n        border-style: solid;\n        border-bottom: 1px solid #008895;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-line-pack: start;\n            align-content: flex-start;\n        -ms-flex-line-pack: end;\n            align-content: flex-end;\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end;\n        padding-bottom: 10px; }\n.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .Results-filter-graphic-Component {\n        width: 100%;\n        background: transparent;\n        height: 35%;\n        color: #fff;\n        border-style: solid;\n        border-bottom: 1px solid #008895;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-line-pack: start;\n            align-content: flex-start;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        padding-bottom: 10px; }\n.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .Results-filter-graphic-Component .Contenedor-Paneles {\n          margin-top: 10px;\n          width: 100%;\n          height: 33%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -ms-flex-wrap: wrap;\n              flex-wrap: wrap; }\n.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .Results-filter-graphic-Component .Contenedor-Paneles .Panel-Izq {\n            width: 20%;\n            height: 100%;\n            background: transparent;\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-pack: center;\n                -ms-flex-pack: center;\n                    justify-content: center;\n            -webkit-box-align: start;\n                -ms-flex-align: start;\n                    align-items: flex-start;\n            -ms-flex-line-pack: start;\n                align-content: flex-start;\n            margin-top: 2px; }\n.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .Results-filter-graphic-Component .Contenedor-Paneles .Panel-Derecho {\n            width: 80%;\n            height: 100%;\n            background: transparent; }\n.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .Results-filter-graphic-Component .Contenedor-Paneles .Panel-Derecho .total {\n              margin-top: 2px;\n              color: #fff; }\n.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .Results-filter-graphic-Component .Contenedor-Paneles .Panel-Derecho .azul {\n              margin-top: 3px;\n              color: #439DC1; }\n.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .Results-filter-graphic-Component .Contenedor-Paneles .Panel-Derecho .morado {\n              margin-top: 3px;\n              color: #AA65E7; }\n.GlobalContainer-graphic-Component .Filter-Container-graphic-Component .Main-Container-filter-graphic-Component .filters-graphic-Component {\n        width: 100%;\n        background: transparent;\n        height: 40%;\n        color: #fff;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n        -ms-flex-line-pack: start;\n            align-content: flex-start;\n        align-content: flex-start;\n        -webkit-box-align: start;\n            -ms-flex-align: start;\n                align-items: flex-start;\n        padding-bottom: 10px; }\n.dotAzul {\n  height: 12px;\n  width: 12px;\n  border-radius: 50%;\n  background-color: #439DC1; }\n.dotMorado {\n  height: 12px;\n  width: 12px;\n  border-radius: 50%;\n  background-color: #AA65E7; }\n.consultaDetalles {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  height: calc(100vh - 170px);\n  width: 100%; }\n.consultaDetalles > .panelNormal {\n    background: #FFFFFF;\n    height: 100%;\n    padding: 15px 20px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    width: 321px;\n    min-width: 321px;\n    overflow-y: scroll; }\n.consultaDetalles > .panelOcultar {\n    background: #FFFFFF;\n    -webkit-animation-name: ocultarPanel;\n            animation-name: ocultarPanel;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-transition: 1s ease-in-out;\n    transition: 1s ease-in-out;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 15px 15px; }\n.consultaDetalles > .panelOcultar .filtros {\n      display: none; }\n.consultaDetalles > .panelMostrar {\n    background: #FFFFFF;\n    -webkit-animation-name: mostar;\n            animation-name: mostar;\n    -webkit-animation-duration: 0.5s;\n            animation-duration: 0.5s;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    padding: 15px 20px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    overflow-y: scroll; }\n.consultaDetalles .filtroHeader {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #424242;\n    font-size: 10px;\n    margin-bottom: 20px; }\n.consultaDetalles .filtroHeader > .abrir {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      cursor: pointer;\n      min-height: 22px; }\n.consultaDetalles .filtroHeader > div:nth-of-type(2) {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center; }\n.consultaDetalles .filtroHeader > div:nth-of-type(2) > .cerrar {\n        margin-left: 9px;\n        cursor: pointer; }\n.consultaDetalles .filtros {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    border-top: 1px solid #424242;\n    border-bottom: 1px solid #424242;\n    padding-bottom: 25px; }\n.consultaDetalles .filtros > .detalleCliente {\n      font-size: 16px;\n      color: #424242;\n      font-weight: bold;\n      margin-top: 15px; }\n.consultaDetalles .filtros > .detalleTitulo {\n      font-size: 16px;\n      color: #424242;\n      font-weight: 400;\n      margin-top: 20px; }\n.consultaDetalles .filtros > .detalleTexto {\n      font-size: 16px;\n      color: #424242;\n      font-weight: 200; }\n.consultaDetalles .filtros > .detalleTextoVerde {\n      font-size: 16px;\n      color: #008895 !important;\n      font-weight: 300;\n      cursor: pointer; }\n.consultaDetalles .filtros > .detalleTextoVerde:hover {\n      text-decoration: underline; }\n.consultaDetalles > .contenidoFactura {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    height: calc(100vh - 170px);\n    width: 100%;\n    overflow: scroll; }\n.consultaDetalles > .contenidoFactura > .detalleFactura {\n      min-width: 592px;\n      padding: 15px 20px; }\n.consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(1) {\n        font-size: 22px;\n        font-weight: bold; }\n.consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) {\n        margin-top: 20px;\n        border-top: 1px solid #424242;\n        border-bottom: 1px solid #979797; }\n.consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          border-bottom: 1px solid #FFFFFF; }\n.consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div > div:nth-of-type(1) {\n            min-width: 8px;\n            background: transparent; }\n.consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div > div:nth-of-type(2) {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: column;\n                    flex-direction: column;\n            padding: 5px 10px;\n            width: 100%;\n            cursor: pointer; }\n.consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div > div:nth-of-type(2) > div {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: horizontal;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: row;\n                      flex-direction: row;\n              -webkit-box-pack: justify;\n                  -ms-flex-pack: justify;\n                      justify-content: space-between;\n              margin: 5px 0px; }\n.consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div > div:nth-of-type(2) > div > div:nth-of-type(2) {\n                -webkit-box-pack: end;\n                    -ms-flex-pack: end;\n                        justify-content: flex-end; }\n.consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > div:hover {\n          background-color: #FFFFFF; }\n.consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > .divActual {\n          background-color: #FFFFFF;\n          -webkit-box-shadow: 0 2px 4px -3px #008895;\n                  box-shadow: 0 2px 4px -3px #008895; }\n.consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > .divActual > div:nth-of-type(1) {\n            min-width: 8px;\n            background: #008895; }\n.consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(2) > .divActive {\n          background-color: #FFFFFF; }\n.consultaDetalles > .contenidoFactura > .detalleFactura > div:nth-of-type(3) {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        -ms-flex-line-pack: center;\n            align-content: center;\n        width: 100%;\n        margin-top: 15px;\n        font-size: 14px;\n        color: #424242;\n        font-weight: 300; }\n.consultaDetalles > .contenidoFactura > .lineaTiempo {\n      min-width: 592px;\n      background: #FFFFFF;\n      padding: 15px 20px; }\n.consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(1) {\n        font-size: 22px;\n        font-weight: bold;\n        color: #008895; }\n.consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) {\n        margin-top: 20px;\n        border-top: 1px solid #424242;\n        border-bottom: 1px solid #979797; }\n.consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n              -ms-flex-direction: row;\n                  flex-direction: row;\n          cursor: pointer; }\n.consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(1) {\n            min-width: 8px;\n            background: transparent; }\n.consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-orient: horizontal;\n            -webkit-box-direction: normal;\n                -ms-flex-direction: row;\n                    flex-direction: row; }\n.consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n              -webkit-box-orient: vertical;\n              -webkit-box-direction: normal;\n                  -ms-flex-direction: column;\n                      flex-direction: column;\n              padding: 10px 10px;\n              width: 100%; }\n.consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) {\n                font-size: 18px;\n                font-weight: bold;\n                color: #424242;\n                margin-bottom: 15px; }\n.consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) {\n                font-size: 16px;\n                color: #008895;\n                margin-bottom: 2px; }\n.consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3) {\n                font-size: 16px;\n                color: #F3B23F;\n                margin-bottom: 2px; }\n.consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(4) {\n                font-size: 16px;\n                color: #571C7B;\n                margin-bottom: 2px; }\n.consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > div > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(5) {\n                font-size: 16px;\n                color: #981E30;\n                margin-bottom: 2px; }\n.consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > .divActive {\n          background-color: rgba(0, 137, 149, 0.05); }\n.consultaDetalles > .contenidoFactura > .lineaTiempo > div:nth-of-type(2) > .divActive > div:nth-of-type(1) {\n            min-width: 8px;\n            background: #008895; }\n.consultaDetalles > .contenidoFactura > .detalleTiempo {\n      min-width: 592px;\n      padding-top: 15px; }\n.consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(1) {\n        font-size: 22px;\n        font-weight: bold;\n        padding: 0px 20px; }\n.consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) {\n        border-top: 1px solid #424242;\n        margin: 20px 20px;\n        overflow: scroll;\n        max-height: calc(100vh - 248px); }\n.consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div {\n          border-bottom: 1px solid #D8D8D8; }\n.consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .titulo {\n            font-size: 18px;\n            color: #008895;\n            margin-top: 20px;\n            margin-bottom: 10px; }\n.consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .subTitulo {\n            font-size: 16px;\n            font-weight: 400;\n            color: #424242;\n            margin-bottom: 3px; }\n.consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normal {\n            font-size: 16px;\n            font-weight: 200;\n            color: #424242;\n            margin-bottom: 25px;\n            cursor: default !important; }\n.consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde {\n            font-size: 16px;\n            font-weight: 200;\n            margin-bottom: 25px;\n            color: #008895; }\n.consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde > span {\n              cursor: pointer; }\n.consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde:hover > span {\n            text-decoration: underline; }\n.consultaDetalles > .contenidoFactura > .detalleTiempo > div:nth-of-type(2) .monitoreo_Cobro_SC > div .normalVerde:hover > .normal {\n            text-decoration: none; }\na {\n  color: #008895;\n  text-decoration: none; }\na:visited {\n  color: #008895;\n  text-decoration: none; }\na:hover {\n  text-decoration: underline; }\n@keyframes ocultarPanel {\n  from {\n    min-width: 321px; }\n  to {\n    min-width: 50px; } }\n@keyframes mostar {\n  from {\n    width: 50px; }\n  to {\n    width: 321px; } }\n.detalle {\n  cursor: pointer; }\n.regresar {\n  cursor: pointer;\n  font-weight: 200; }\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/compras/compras.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__ = __webpack_require__("./src/app/components/shared/filter/element.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_gestion_gestion_service__ = __webpack_require__("./src/app/services/gestion/gestion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_gestion_consulta_compras_compras_service__ = __webpack_require__("./src/app/services/gestion/consulta/compras/compras.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chart_js__ = __webpack_require__("./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ComprasComponent = /** @class */ (function () {
    function ComprasComponent(router, _gestionService, coreComponent, _comprasService) {
        var _this = this;
        this.router = router;
        this._gestionService = _gestionService;
        this.coreComponent = coreComponent;
        this._comprasService = _comprasService;
        this.montototalGraficaDetalle = 0;
        this.CompraDetalle = {
            nombreProveedor: "",
            clave: "123",
        };
        this.nPartidas = 0;
        this.detalle = false;
        this.classPanel = "panelNormal";
        this.hiddenClose = true;
        this.TotalPiezasPartidasDetalle = 0;
        this.hiddenClose2 = true;
        this.lstRadiosRapida = ['Factura', 'Pedido', 'UUID'];
        this.avanzada = true;
        this.lineaSeleccionada = 0;
        this.PartidaSeleccionada = 0;
        this.isTableShow = true;
        this.itemsDropList = [{ nombre: '- - Todos - -' }, { nombre: 'nombre1' }, { nombre: 'nombre2' }];
        this.defaultSelected = { nombre: '- - Todos - -' };
        this.isThereData = false;
        this.ruta = "assets/Images/gestion/images/reload2.svg";
        this.lstCompras = [];
        this.Clear = true;
        this.IsDate = true;
        this.lstClientes = [];
        this.lstComprasXGrafica = [];
        this.lstPartidas = [];
        this.lstCompraEsp = [];
        this.date3 = new Date();
        this.date4 = new Date();
        this.lstTiempoProceso = [];
        this.DatosFill1 = {
            Fechas: {
                fechaInicial: new Date(),
                fechaFinal: new Date(),
            }
        };
        this.graficoCargado = false;
        this.refresh = false;
        this.id1 = "g1";
        this.id2 = "g1234";
        this.IsImage = true;
        this.dropClientes = [{ nombre: '--TODOS--', key: 0 }];
        this.dropCobrador = [{ nombre: '--TODOS--', key: 0 }];
        this.Estadisticos = { totalpartidas: 0, totalpiezas: 0, totalcompras: 0 };
        this.Llenar = function () {
            var newListProveedor = [];
            for (var _i = 0, _a = _this.Proveedores; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.nombre != null) {
                    newListProveedor.push(item);
                }
            }
            _this.Proveedores = newListProveedor;
            _this.Elements = [new __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__["a" /* ElementFilter */]("string", "Proveedor", _this.Proveedores, true),
                new __WEBPACK_IMPORTED_MODULE_2__shared_filter_element_model__["a" /* ElementFilter */]("string", "Compró", [
                    { nombre: '--TODOS--', key: 0 },
                    { nombre: 'Golocaer', key: 1 },
                    { nombre: 'Mungen', key: 2 },
                    { nombre: 'Pharma', key: 3 },
                    { nombre: 'Proquifa', key: 4 },
                    { nombre: 'Proveedora', key: 5 },
                    { nombre: 'RM trading', key: 6 }
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
    ;
    ;
    ComprasComponent.prototype.Avanzada = function (Datos) {
        var _this = this;
        console.log(Datos);
        this.coreComponent.openModal(0);
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        parametros.finicio = Datos.Fechas.fechaInicial;
        parametros.ffin = Datos.Fechas.fechaFinal;
        parametros.idUsuario = 0;
        parametros.coloco = 0;
        if (Datos.Datos[0].nombre == "--TODOS--") {
            parametros.proveedor = 0;
        }
        else {
            parametros.proveedor = Datos.Datos[0].key;
        }
        if (Datos.Datos[1].nombre == "--TODOS--") {
            parametros.empresaCompra = "";
        }
        else {
            parametros.empresaCompra = Datos.Datos[1].nombre;
        }
        if (Datos.Datos[2].nombre == "--TODOS--") {
            parametros.estadoInt = 0;
        }
        else {
            parametros.estadoInt = Datos.Datos[2].key;
        }
        parametros.ordenCompra = "";
        parametros.usuario = 91;
        this._comprasService.consultarCompras(parametros).subscribe(function (data) {
            _this.lstCompras = data.current;
            console.log(data.current);
            _this.lstCompras = _this.eliminarObjetosDuplicados(data.current, 'clave');
            _this.lstSinSeparar = data.current;
            console.log(_this.lstCompras);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.log("error compras");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
        this._comprasService.consultarGraficaXCompra(parametros).subscribe(function (data) {
            var ComprasXGrafica = data.current;
            console.log(ComprasXGrafica);
            _this.SepararProveedores(ComprasXGrafica);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.log("error compras");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
        this.refresh = true;
    };
    ComprasComponent.prototype.eliminarObjetosDuplicados = function (arr, prop) {
        var nuevoArray = [];
        var lookup = {};
        for (var i in arr) {
            lookup[arr[i][prop]] = arr[i];
        }
        for (i in lookup) {
            nuevoArray.push(lookup[i]);
        }
        this.Estadisticos.totalcompras = nuevoArray.length;
        return nuevoArray;
    };
    ComprasComponent.prototype.obtenerTotales = function () {
        var total_partidas = 0;
        var total_compras = 0;
        this.lstSinSeparar.forEach(function (element) {
            total_partidas = total_partidas + element.totalPartidas;
        });
        this.Estadisticos.totalpartidas = total_partidas;
        console.log(this.Estadisticos);
    };
    ComprasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.coreComponent.openModal(0);
        this.filtroForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormGroup */]({
            filtroDato: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]()
        });
        this.date = new Date();
        this.date2 = new Date();
        this.coreComponent.openModal(0);
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        parametros.finicio = new Date();
        parametros.ffin = new Date();
        parametros.proveedor = 0;
        parametros.estadoInt = 0;
        parametros.ordenCompra = "";
        parametros.usuario = 0;
        parametros.empresaCompra = "";
        parametros.coloco = 0;
        parametros.idUsuarioLogueado = 91;
        parametros.cobrador = 0;
        parametros.idUsuario = 0;
        var param = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */];
        param.valorAdicional = "";
        // this.consultaAvanzadaFacturacion(parametros);
        this.coreComponent.openModal(0);
        this._comprasService.consultarProveedores(param).subscribe(function (data) {
            _this.Proveedores = data.current;
            var lstAux = [];
            lstAux.push({ nombre: '--TODOS--', key: 0 });
            for (var _i = 0, _a = data.current; _i < _a.length; _i++) {
                var item = _a[_i];
                lstAux.push({ nombre: item.valor, key: item.llave });
            }
            _this.Proveedores = _this.Proveedores.concat(lstAux);
            _this.Llenar();
        }, function (error) {
            console.log("error login");
            console.log(error);
        });
        this._comprasService.consultarCompras(parametros).subscribe(function (data) {
            _this.lstCompras = _this.eliminarObjetosDuplicados(data.current, 'clave');
            _this.lstSinSeparar = data.current;
            _this.obtenerTotales();
            console.log(data.current);
            console.log(_this.Estadisticos);
        }, function (error) {
            console.log("error compras");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
        this._comprasService.consultarGraficaXCompra(parametros).subscribe(function (data) {
            var ComprasXGrafica = data.current;
            console.log(ComprasXGrafica);
            _this.SepararProveedores(ComprasXGrafica);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.log("error compras");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
    };
    ComprasComponent.prototype.ContarRepetidos = function (ComprasXGrafica, proveedor) {
        var compras = 0;
        ComprasXGrafica.forEach(function (element) {
            if (proveedor.nombreProveedor == element.nombreProveedor) {
                compras = compras + 1;
            }
        });
        return compras;
    };
    ComprasComponent.prototype.SepararProveedores = function (ComprasXGrafica) {
        var _this = this;
        console.log("ComprasXGrafica");
        console.log(ComprasXGrafica);
        var PorProveedor = this.eliminarObjetosDuplicados(ComprasXGrafica, 'nombreProveedor');
        var Estad = [];
        var PorClave = this.eliminarObjetosDuplicados(ComprasXGrafica, 'clave');
        var Arre = [PorProveedor.length];
        console.log("Proveedor" + " ========================================loremp");
        console.log(PorProveedor);
        PorProveedor.sort(function (a, b) {
            return (b.montoTotalDolares - a.montoTotalDolares);
        });
        if (PorProveedor.length > 11) {
            console.log("Entro");
            var ArreAuxiliar = PorProveedor.slice(0, 10);
            PorProveedor = ArreAuxiliar;
        }
        console.log("Proveedor Mochados" + " ========================================loremp");
        console.log(PorProveedor);
        PorProveedor.forEach(function (Proveedor) {
            var datos = {
                partidas: 0,
                Proveedor: '',
                NCompras: 0,
                totalpiezas: 0,
                montoTotalDolares: 0,
            };
            ComprasXGrafica.forEach(function (element) {
                if (Proveedor.nombreProveedor == element.nombreProveedor) {
                    datos.partidas = datos.partidas + element.totalPartidas;
                    datos.Proveedor = element.nombreProveedor;
                    datos.NCompras = _this.ContarRepetidos(ComprasXGrafica, element);
                }
            });
            var totalpiezas = 0;
            var totalDolares = 0;
            PorClave.forEach(function (element) {
                if (Proveedor.nombreProveedor == element.nombreProveedor) {
                    totalpiezas = totalpiezas + element.totalPiezas;
                    totalDolares = totalDolares + element.montoTotalDolares;
                }
            });
            datos.totalpiezas = totalpiezas;
            datos.montoTotalDolares = totalDolares;
            Estad.push(datos);
        });
        console.log(PorProveedor);
        console.log(Estad);
        console.log(Estad.length);
        this.Estad = Estad;
        Estad.sort(function (a, b) {
            return (b.montoTotalDolares - a.montoTotalDolares);
        });
        if (Estad.length > 10) {
            console.log("Entro");
            var ArreAuxiliar = Estad.slice(0, 10);
            Estad = ArreAuxiliar;
        }
        console.log(Estad);
        var Valores = [];
        var Etiquetas = [];
        var partidas = 0;
        var totalpiezas = 0;
        var totalmonto = 0;
        var compras = 0;
        Estad.forEach(function (element) {
            Valores.push(element.montoTotalDolares);
            Etiquetas.push("" + element.Proveedor);
            partidas = partidas + element.partidas;
            totalpiezas = totalpiezas + element.totalpiezas;
            totalmonto = totalmonto + element.montoTotalDolares;
        });
        var TotalesG1 = {
            partidas: partidas,
            totalpiezas: totalpiezas,
            totalmonto: totalmonto.toFixed(2),
            compras: compras = PorClave.length,
        };
        this.Grafico1 = {
            valores: Valores, etiquetas: Etiquetas, totales: TotalesG1
        };
        console.log(this.Grafico1);
    };
    ComprasComponent.prototype.backMenu = function () {
        this.router.navigate(["protected/gestion/"]);
    };
    ComprasComponent.prototype.closePanel = function () {
        this.classPanel = "panelOcultar";
        this.hiddenClose = false;
    };
    ComprasComponent.prototype.openPanel = function () {
        var _this = this;
        if (!this.hiddenClose) {
            this.classPanel = "panelMostrar";
            this.hiddenClose = true;
            if (this.graficoCargado) {
                console.log(this.graficoCargado);
                setTimeout(function (datos) {
                    if (datos === void 0) { datos = { valores: [] }; }
                    _this.donita2(datos);
                }, 1000);
            }
        }
    };
    ComprasComponent.prototype.emitItem = function ($event) {
        console.log($event);
    };
    ComprasComponent.prototype.filtroAvanzada = function () {
        this.avanzada = true;
    };
    ComprasComponent.prototype.filtroRapida = function () {
        this.avanzada = false;
    };
    ComprasComponent.prototype.getFechaImpl = function ($event) {
        //console.log($event);
    };
    ComprasComponent.prototype.dropList = function (index, $event) {
    };
    ComprasComponent.prototype.ConsultaEspecifica = function (txtFactura) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        parametros.finicio = null;
        parametros.ffin = null;
        parametros.proveedor = 0;
        parametros.estadoInt = 0;
        parametros.ordenCompra = txtFactura;
        parametros.usuario = 0;
        parametros.empresaCompra = "";
        parametros.idUsuarioLogueado = 91;
        parametros.cobrador = 0;
        this.coreComponent.openModal(0);
        this._comprasService.consultarCompras(parametros).subscribe(function (data) {
            _this.lstCompras = _this.eliminarObjetosDuplicados(data.current, 'clave');
            _this.lstSinSeparar = data.current;
            console.log(data.current);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.log("error compras");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
        console.log(txtFactura);
    };
    ComprasComponent.prototype.mostrarDatos = function ($event) {
        this.DatosFill1 = $event;
        this.Avanzada($event);
    };
    //Función para convertir JSON en formato CSV
    ComprasComponent.prototype.ConvertToCSV = function (objArray) {
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
    // Función de descarga de archivo CSV 
    ComprasComponent.prototype.download = function () {
        var lstCompras2 = [];
        this.lstCompras.forEach(function (compra, index) {
            var ObjAux = {
                '#': (index + 1),
                OC: compra.clave,
                Proveedor: compra.empresa,
                Colocó: compra.colocarDesde,
                Comprador: compra.comprador,
                Estado: compra.estado
            };
            lstCompras2.push(ObjAux);
        });
        var csvData = this.ConvertToCSV(lstCompras2);
        var a = document.createElement("a");
        a.setAttribute('style', 'display:none;');
        document.body.appendChild(a);
        var blob = new Blob([csvData], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = 'ConsultaCompras-' + this.fechaDescarga(new Date()) + '.csv';
        a.click();
    };
    ComprasComponent.prototype.fechaDescarga = function (fechaE) {
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
    ComprasComponent.prototype.regresarConsulta = function () {
        this.detalle = false;
    };
    //=========/Apartado para graficos===============/////
    ComprasComponent.prototype.showGraphic = function () {
        this.isTableShow = false;
    };
    ComprasComponent.prototype.showTable = function () {
        this.isTableShow = true;
    };
    ComprasComponent.prototype.verDetalle = function (item) {
        this.CompraDetalle = item;
        this.detalle = true;
        this.obtenerPartidasEsp(this.CompraDetalle.clave);
        //this.obtenerComprasPClave(this.CompraDetalle.clave);
        console.log("COmpra detale ->>>>>");
        console.log(this.CompraDetalle);
    };
    ComprasComponent.prototype.obtenerComprasPClave = function (clave) {
        var _this = this;
        console.log(clave);
        this.coreComponent.openModal(0);
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        parametros.finicio = this.DatosFill1.Fechas.fechaInicial;
        parametros.ffin = this.DatosFill1.Fechas.fechaFinal;
        parametros.idUsuario = 0;
        parametros.coloco = 0;
        parametros.proveedor = 0;
        parametros.empresaCompra = "";
        parametros.estadoInt = 0;
        parametros.ordenCompra = clave;
        parametros.usuario = 91;
        this._comprasService.consultarCompras(parametros).subscribe(function (data) {
            _this.lstCompraEsp = data.current;
            console.log(data.current);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.log("error comprasEsp");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
        this.refresh = true;
    };
    ComprasComponent.prototype.obtenerPartidasEsp = function (clave) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        this.coreComponent.openModal(0);
        parametros.ordenCompra = clave;
        this._comprasService.consultaPartidasPorCompraEspecifica(parametros).subscribe(function (data) {
            _this.lstPartidas = data.current;
            _this.obtenerTiempoProceso(_this.lstPartidas[0].compra, _this.lstPartidas[0].idPartidaCompra);
            _this.obtenerTotales();
            console.log(data.current);
            setTimeout(function () { _this.ObtenerDatosGraficaDetalle(); }, 1000);
        }, function (error) {
            console.log("error compras");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
    };
    ComprasComponent.prototype.ObtenerDatosGraficaDetalle = function () {
        var datos = {
            valores: []
        };
        var pzas = 0;
        var et = 0;
        var ft = 0;
        var total = 0;
        this.lstPartidas.forEach(function (element) {
            console.log(element.estado);
            if (element.estado == "Recibido") {
                et = et + element.montoTotal;
            }
            else {
                if (element.estado == "BackOrder") {
                    ft = ft + element.montoTotal;
                }
            }
            pzas = pzas + element.totalPiezas;
            total = total + element.montoTotal;
        });
        console.log("se muestran los datos ET VS FT");
        console.log(datos);
        this.montototalGraficaDetalle = total;
        this.TotalPiezasPartidasDetalle = pzas;
        this.nPartidas = this.lstPartidas.length;
        if (et == 0 && ft == 0) {
            et = total;
        }
        datos.valores.push(et);
        datos.valores.push(ft);
        this.donita2(datos);
    };
    ComprasComponent.prototype.resumenFactura = function (pos) {
        this.PartidaSeleccionada = pos;
        this.obtenerTiempoProceso(this.lstPartidas[pos].compra, this.lstPartidas[pos].idPartidaCompra);
    };
    ComprasComponent.prototype.obtenerTiempoProceso = function (ordenCompra, idPCompra) {
        var _this = this;
        var parametros = new __WEBPACK_IMPORTED_MODULE_3__class_Parametros_class__["a" /* Parametros */]();
        parametros.ordenCompra = ordenCompra;
        parametros.idPCompra = idPCompra;
        this.coreComponent.openModal(0);
        this._comprasService.obtenerTiempoProcesoPorPartida(parametros).subscribe(function (data) {
            var arrayaux = [];
            data.current.forEach(function (element) {
                if (element.nivel == 1) {
                    arrayaux.push(element);
                }
            });
            _this.lstTiempoProceso = arrayaux;
            console.log(data.current);
            console.log(_this.lstTiempoProceso);
            _this.coreComponent.closeModal(0);
        }, function (error) {
            console.log("error compras");
            console.log(error);
            _this.coreComponent.closeModal(0);
        });
    };
    ComprasComponent.prototype.SeleccionarLinea = function (i) {
        this.lineaSeleccionada = i;
        console.log(this.lstTiempoProceso[i]);
    };
    ComprasComponent.prototype.descargarPDF = function (archivo) {
        console.log(archivo);
        var BrowserWindow = electron.remote.BrowserWindow;
        var newWin = new BrowserWindow({ width: 800, height: 600 });
        PDFWindow.addSupport(newWin);
        newWin.loadURL(archivo);
    };
    ComprasComponent.prototype.donita2 = function (datos) {
        this.graficoCargado = true;
        console.log("Dentro de Donita");
        var colores = ["#94BA13 ", "#0098DA "];
        var etiquetas = ["Total"];
        var coloresP = ["#439DC1", "#C5792E ", "#2C9484 ", "#E34B43 ", "#CC3185", "#A9CA4E", "#524B96", "#EFCD50", "#a33532", "5d90dc"];
        etiquetas = ["ET", "FT"];
        var valores = datos.valores;
        var colorVerdeGrafica = ["#008895", "#D0021B"];
        this.createDoughnut("graficoIndividual", etiquetas, valores, colorVerdeGrafica);
    };
    ComprasComponent.prototype.createDoughnut = function (element, etiquetas, valores, colores) {
        console.log("Dentro del createDona");
        var oilCanvas = document.getElementById(element);
        __WEBPACK_IMPORTED_MODULE_8_chart_js__["Chart"].defaults.global.defaultFontFamily = "Roboto";
        __WEBPACK_IMPORTED_MODULE_8_chart_js__["Chart"].defaults.global.defaultFontSize = 12;
        __WEBPACK_IMPORTED_MODULE_8_chart_js__["Chart"].defaults.global.animation.duration = 1200;
        __WEBPACK_IMPORTED_MODULE_8_chart_js__["Chart"].defaults.global.animation.easing = 'easeInCirc';
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
            cutoutPercentage: 65,
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
        var pieChart = new __WEBPACK_IMPORTED_MODULE_8_chart_js__["Chart"](oilCanvas, {
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
    ComprasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pn-compras',
            template: __webpack_require__("./src/app/components/gestion/consultas/compras/compras.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/consultas/compras/compras.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__services_gestion_gestion_service__["a" /* GestionService */], __WEBPACK_IMPORTED_MODULE_6__core_container_core_container_component__["a" /* CoreContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__services_gestion_consulta_compras_compras_service__["a" /* ComprasService */]])
    ], ComprasComponent);
    return ComprasComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/compras/compras.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComprasModule", function() { return ComprasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__compras_routing_module__ = __webpack_require__("./src/app/components/gestion/consultas/compras/compras-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__compras_component__ = __webpack_require__("./src/app/components/gestion/consultas/compras/compras.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__ = __webpack_require__("./src/app/components/shared/date-picker/date-picker.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__ = __webpack_require__("./src/app/components/shared/drop-list/drop-list.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_filter_filter_module__ = __webpack_require__("./src/app/components/shared/filter/filter.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("./src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__graphicas_compras_graficas_module__ = __webpack_require__("./src/app/components/gestion/consultas/compras/graphicas-compras/graficas.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ComprasModule = /** @class */ (function () {
    function ComprasModule() {
    }
    ComprasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__compras_routing_module__["a" /* ComprasRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_filter_filter_module__["a" /* FilterModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__graphicas_compras_graficas_module__["a" /* GraficasCobrosModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__compras_component__["a" /* ComprasComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__compras_component__["a" /* ComprasComponent */]
            ]
        })
    ], ComprasModule);
    return ComprasModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/compras/graphicas-compras/graficas-cobros-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficasCobrosRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graficas_cobros_component__ = __webpack_require__("./src/app/components/gestion/consultas/compras/graphicas-compras/graficas-cobros.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GraficasCobrosRoutingModule = /** @class */ (function () {
    function GraficasCobrosRoutingModule() {
    }
    GraficasCobrosRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_2__graficas_cobros_component__["a" /* GraficasComponent */]
                    }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], GraficasCobrosRoutingModule);
    return GraficasCobrosRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/compras/graphicas-compras/graficas-cobros.component.html":
/***/ (function(module, exports) {

module.exports = "<div   *ngIf=\"opcion==0\" class=\"divContenedor\">\n  <!--Gráfica 1-->\n\n\n\n\n  <div class=\"divGraficaTituloCtn\" style=\"position: relative;\">\n    <div style=\"width:100%;height: 15%;display:flex; justify-content: center;align-content: center;align-items: center;\">{{Titulo1}}</div>\n    <div class=\"Grafico flexCenter\">\n      <div style=\"color:#424242; position:absolute; width: 40%; background: transparent;opacity: 1; min-width: 82px;  min-height: 81.5px; font-size: 12px;height: 43%;border-radius: 50px;\"\n        class=\"flexCenter \">\n        <div class=\"flexCenter\" style=\"width: 100%\">\n          Total\n        </div>\n        <div class=\"flexCenter\" style=\"width: 100%\">\n          Monto: ${{grafica1.totales.totalmonto}}\n        </div>\n        <div class=\"flexCenter\" style=\"width: 100%\">\n          Compras: {{grafica1.totales.compras}}\n        </div>\n        <div class=\"flexCenter\" style=\"width: 100%\">\n          Partidas:{{grafica1.totales.partidas}}\n        </div>\n        <div class=\"flexCenter\" style=\"width: 100%\">\n          Piezas:{{grafica1.totales.totalpiezas}}\n        </div>\n      </div>\n      <canvas id=\"g1\"></canvas>\n    </div>\n  </div>\n\n  <!--Gráfica 2-->\n  <div class=\"divGraficaTituloCtn\">\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center;align-items: center;\">{{Titulo2}}</div>\n    <div class=\"Grafico\">\n\n      <canvas id=\"g2\"></canvas>\n    </div>\n  </div>\n  <!--Gráfica 3-->\n  <div class=\"divGraficaTituloCtn\">\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center;align-items: center;\">{{Titulo3}}</div>\n    <div class=\"Grafico\">\n      <canvas id=\"g3\"></canvas>\n    </div>\n\n  </div>\n  <!--Gráfica 4-->\n  <div class=\"divGraficaTituloCtn\">\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center;align-items: center;\">{{Titulo4}}</div>\n    <div class=\"Grafico\">\n      <canvas id=\"g4\"></canvas>\n    </div>\n  </div>\n  <!--Gráfica 5-->\n  <div class=\"divGraficaTituloCtn\">\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center;align-items: center;\">{{Titulo5}}</div>\n    <div class=\"Grafico\">\n      <canvas id=\"g5\"></canvas>\n    </div>\n  </div>\n  <!--Gráfica 6-->\n  <div class=\"divGraficaTituloCtn\">\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center;align-items: center;\">{{Titulo6}}</div>\n    <div class=\"Grafico\">\n      <canvas id=\"g6\"></canvas>\n    </div>\n  </div>\n  <!--Gráfica 7-->\n\n  <div class=\"divGraficaTituloCtn\">\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center;align-items: center;\">{{Titulo7}}</div>\n    <div class=\"Grafico\">\n      <canvas id=\"g7\"></canvas>\n    </div>\n  </div>\n  <!--Gráfica 8-->\n  <div class=\"divGraficaTituloCtn\">\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center;align-items: center;\">{{Titulo8}}</div>\n    <div class=\"Grafico\">\n      <canvas id=\"g8\"></canvas>\n    </div>\n  </div>\n  <!--Gráfica 9-->\n  <div class=\"divGraficaTituloCtn\">\n    <div style=\"width:100%;height: 15%;display: flex;justify-content: center;align-content: center;align-items: center;\">{{Titulo9}}</div>\n    <div class=\"Grafico\">\n      <canvas id=\"g9\"></canvas>\n    </div>\n  </div>\n</div>\n\n\n<div   *ngIf=\"opcion==1\" class=\"divContenedor\">\n    <!--Gráfica 1-->\n  \n  \n  \n    <div class=\"divGraficaTituloCtn\">\n        <div style=\"width:100%;display: flex;justify-content: center;align-content: center;align-items: center;\">Gráfico de componente </div>\n        <div class=\"Grafico\">\n          <canvas id=\"g21\"></canvas>\n        </div>\n      </div>\n    \n    </div>"

/***/ }),

/***/ "./src/app/components/gestion/consultas/compras/graphicas-compras/graficas-cobros.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n.padreG {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 137, 149, 0.02); }\n.tituloGrafica {\n  position: absolute;\n  top: -45px;\n  right: 133px;\n  left: 0px;\n  margin: auto;\n  width: 100px;\n  font-size: 36px;\n  font-weight: bold; }\n.tituloGraficaMediana {\n  position: absolute;\n  top: 7px;\n  right: 71px;\n  left: 0px;\n  margin: auto;\n  width: 100px;\n  font-size: 24px;\n  font-weight: bold; }\n.tituloGraficaChica {\n  position: absolute;\n  text-align: center;\n  margin: auto;\n  width: 200px;\n  font-size: 15px;\n  font-family: \"Roboto\";\n  font-style: Medium; }\n#doughnut1Div {\n  position: relative; }\n#doughnut1Div2 {\n  position: relative; }\n#doughnut1Div3 {\n  position: relative; }\n#doughnut1Div4 {\n  position: relative; }\n#doughnut1Div5 {\n  position: relative; }\n#doughnut1Div6 {\n  position: relative; }\n.divContenedor {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  overflow: auto; }\n.divContenedor .divGraficaTituloCtn {\n    min-width: 159px;\n    min-height: 165px;\n    width: 25%;\n    height: 25vh;\n    background: transparent;\n    margin-left: 1px;\n    margin-right: 0px;\n    margin-bottom: 5px;\n    margin-top: 5px; }\n.divContenedor .divGraficaTituloCtn .Grafico {\n      width: 100%;\n      height: 80%; }\n.tituloGrafica {\n  width: 100%;\n  height: 15%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.flexCenter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.borderRadious {\n  border: 2px solid red;\n  padding: 10px;\n  border-radius: 25px; }\n.animationZoom {\n  -webkit-animation: animatezoom 0.2s;\n          animation: animatezoom 0.2s; }\n@-webkit-keyframes animatezoom {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n@keyframes animatezoom {\n  from {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  to {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n"

/***/ }),

/***/ "./src/app/components/gestion/consultas/compras/graphicas-compras/graficas-cobros.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficasComponent; });
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



var GraficasComponent = /** @class */ (function () {
    function GraficasComponent() {
        this.TotalesVacios = {
            partidas: 0,
            totalpiezas: 0,
            totalmonto: (0.0000).toFixed(2),
            compras: 0,
        };
        this.etiquetasVacias = [0];
        this.opcion = 0;
        this.Titulo1 = "TOP 10 PROVEEDORES";
        this.Titulo2 = "AVISOS DE CAMBIO";
        this.Titulo3 = "COMPRADORES";
        this.Titulo4 = "ABIERTO VS CERRADO";
        this.Titulo5 = "TOP 10 PRODUCTOS";
        this.Titulo6 = "TIPO";
        this.Titulo7 = "MARCA";
        this.Titulo8 = "ESTADO";
        this.Titulo9 = "ET vs FT";
        this.grafica1 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
        this.grafica2 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
        this.grafica3 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
        this.grafica4 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
        this.grafica5 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
        this.grafica6 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
        this.grafica7 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
        this.grafica8 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
        this.grafica9 = { valores: [], etiquetas: this.etiquetasVacias, totales: this.TotalesVacios };
        this.Elements = [{ titulo: 'g1' }, { titulo: 'g2' }, { titulo: 'g3' }];
        this.squery = new __WEBPACK_IMPORTED_MODULE_2__class_compras_utils_query_class__["a" /* Query */]();
        this.punterosProvee = new Array();
    }
    /* constructor(private router: Router,
      private _insp: InspeccionService) { } */
    GraficasComponent.prototype.ngOnChanges = function (changes) {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        console.log(changes);
    };
    GraficasComponent.prototype.ngOnInit = function () {
        if (this.opcion == 0) {
            this.donita();
            // this.dona2();
            /*  this.recibePartidas(); */
            var pieChart_1 = this.pieChart;
            var total = this.grafica1.totales;
            document.getElementById("g1").onclick = function (evt) {
                var activePoints = pieChart_1.getElementsAtEvent(evt);
                var firstPoint = activePoints[0];
                var label = pieChart_1.data.labels[firstPoint._index];
                var value = pieChart_1.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];
            };
        }
        else {
            if (this.opcion == 1) {
                this.donita2();
            }
        }
    };
    GraficasComponent.prototype.donita2 = function () {
        var colores = ["#94BA13 ", "#0098DA "];
        var etiquetas = ["Total"];
        var valores = [];
        var coloresP = ["#439DC1", "#C5792E ", "#2C9484 ", "#E34B43 ", "#CC3185", "#A9CA4E", "#524B96", "#EFCD50", "#a33532", "5d90dc"];
        etiquetas = ["Sin contenido",];
        valores = [1];
        var colorVacio = ["#a0a0a0"];
        this.createDoughnut("g21", etiquetas, valores, colorVacio);
    };
    GraficasComponent.prototype.donita = function () {
        var colores = ["#94BA13 ", "#0098DA "];
        var etiquetas = ["Total"];
        var valores = [];
        var coloresP = ["#439DC1", "#C5792E ", "#2C9484 ", "#E34B43 ", "#CC3185", "#A9CA4E", "#524B96", "#EFCD50", "#a33532", "5d90dc"];
        etiquetas = ["Sin contenido",];
        valores = [1];
        var colorVacio = ["#a0a0a0"];
        var cadena = "" + this.id;
        console.log(this.grafica1);
        this.createDoughnut("g1", this.grafica1.etiquetas, this.grafica1.valores, coloresP);
        this.createDoughnut("g2", etiquetas, valores, colorVacio);
        this.createDoughnut("g3", etiquetas, valores, colorVacio);
        this.createDoughnut("g4", etiquetas, valores, colorVacio);
        this.createDoughnut("g5", etiquetas, valores, colorVacio);
        this.createDoughnut("g6", etiquetas, valores, colorVacio);
        this.createDoughnut("g7", etiquetas, valores, colorVacio);
        this.createDoughnut("g8", etiquetas, valores, colorVacio);
        this.createDoughnut("g9", etiquetas, valores, colorVacio);
    };
    GraficasComponent.prototype.createDoughnut = function (element, etiquetas, valores, colores) {
        var oilCanvas = document.getElementById(element);
        __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"].defaults.global.defaultFontFamily = "Roboto";
        __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"].defaults.global.defaultFontSize = 12;
        __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"].defaults.global.animation.duration = 3000;
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
            cutoutPercentage: 60,
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
        this.pieChart = new __WEBPACK_IMPORTED_MODULE_0_chart_js__["Chart"](oilCanvas, {
            type: 'doughnut',
            data: oilData,
            options: chartOptions,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], GraficasComponent.prototype, "opcion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GraficasComponent.prototype, "Titulo1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GraficasComponent.prototype, "Titulo2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GraficasComponent.prototype, "Titulo3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GraficasComponent.prototype, "Titulo4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GraficasComponent.prototype, "Titulo5", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GraficasComponent.prototype, "Titulo6", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GraficasComponent.prototype, "Titulo7", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GraficasComponent.prototype, "Titulo8", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GraficasComponent.prototype, "Titulo9", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], GraficasComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraficasComponent.prototype, "grafica1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraficasComponent.prototype, "grafica2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraficasComponent.prototype, "grafica3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraficasComponent.prototype, "grafica4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraficasComponent.prototype, "grafica5", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraficasComponent.prototype, "grafica6", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraficasComponent.prototype, "grafica7", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraficasComponent.prototype, "grafica8", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GraficasComponent.prototype, "grafica9", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], GraficasComponent.prototype, "Refresh", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], GraficasComponent.prototype, "Elements", void 0);
    GraficasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'pq-graficas-dona',
            template: __webpack_require__("./src/app/components/gestion/consultas/compras/graphicas-compras/graficas-cobros.component.html"),
            styles: [__webpack_require__("./src/app/components/gestion/consultas/compras/graphicas-compras/graficas-cobros.component.scss")]
        })
    ], GraficasComponent);
    return GraficasComponent;
}());



/***/ }),

/***/ "./src/app/components/gestion/consultas/compras/graphicas-compras/graficas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficasCobrosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__graficas_cobros_routing_module__ = __webpack_require__("./src/app/components/gestion/consultas/compras/graphicas-compras/graficas-cobros-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__graficas_cobros_component__ = __webpack_require__("./src/app/components/gestion/consultas/compras/graphicas-compras/graficas-cobros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
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












var GraficasCobrosModule = /** @class */ (function () {
    function GraficasCobrosModule() {
    }
    GraficasCobrosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__graficas_cobros_routing_module__["a" /* GraficasCobrosRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_date_picker_date_picker_module__["a" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__shared_drop_list_drop_list_module__["a" /* DropListModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_radio_button_radio_button_module__["a" /* RadioButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_filter_filter_module__["a" /* FilterModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__graficas_cobros_component__["a" /* GraficasComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__graficas_cobros_component__["a" /* GraficasComponent */]
            ],
        })
    ], GraficasCobrosModule);
    return GraficasCobrosModule;
}());



/***/ })

});
//# sourceMappingURL=compras.module.chunk.js.map