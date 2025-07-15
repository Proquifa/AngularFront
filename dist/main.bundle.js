webpackJsonp(["main"],{

/***/ "./package.json":
/***/ (function(module, exports) {

module.exports = {"name":"ProquifaNet","version":"1.0.43","license":"MIT","main":"main.js","scripts":{"ng":"ng","start":"ng serve --proxy-config proxy.conf.json","start-web":"ng serve --host 0.0.0.0 --base-href /","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e","electron":"electron .","electron-build":"ng build && electron .","electron-mac":"electron-packager . --overwrite --platform=darwin --icon=logo.icns --ignore=\"src\"  --ignore=\"e2e\"","electron-dmg":"electron-installer-dmg ./ProquifaNet-darwin-x64 proquifaLocal.app proquifa"},"private":true,"dependencies":{"@agm/core":"^1.0.0-beta.2","@angular/animations":"^5.2.11","@angular/cdk":"^5.2.5","@angular/common":"^5.2.0","@angular/compiler":"^5.2.0","@angular/core":"^5.2.0","@angular/forms":"^5.2.0","@angular/http":"^5.2.0","@angular/material":"^5.2.5","@angular/material-moment-adapter":"^7.2.1","@angular/platform-browser":"^5.2.0","@angular/platform-browser-dynamic":"^5.2.0","@angular/router":"^5.2.0","@ngui/map":"^0.30.3","@types/googlemaps":"3.20.27-alpha","accounting":"^0.4.1","agm-direction":"^0.7.3","angular-chart.js":"^1.1.1","angularjs-dragula":"^2.0.0","chart.js":"^2.7.2","core-js":"^2.5.5","electron-packager":"^12.2.0","electron-pdf-window":"^1.0.12","i":"^0.3.6","material":"^0.2.6","ng2-charts":"^1.6.0","ng2-dragula":"^2.1.0","ng2-google-charts":"^3.4.0","ngx-electron":"^1.0.4","recordrtc":"^5.4.6","sockjs-client":"^1.3.0","stompjs":"^2.3.3","zone.js":"^0.8.26"},"devDependencies":{"@angular-devkit/core":"^0.6.1","@angular/cli":"~1.7.4","@angular/compiler-cli":"^5.2.0","@angular/language-service":"^5.2.0","@types/jasmine":"~2.8.3","@types/jasminewd2":"~2.0.2","@types/node":"~6.0.60","codelyzer":"^4.0.1","electron":"^1.8.8","electron-installer-dmg":"^2.0.0","jasmine-core":"~2.8.0","jasmine-spec-reporter":"~4.2.1","karma":"~2.0.0","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"^1.2.1","karma-jasmine":"~1.1.0","karma-jasmine-html-reporter":"^0.2.2","protractor":"^5.4.2","ts-node":"~4.1.0","tslint":"~5.9.1","typescript":"~2.5.3"}}

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/asuntos-regulatorios/asuntos-regulatorios.module": [
		"./src/app/components/asuntos-regulatorios/asuntos-regulatorios.module.ts",
		"common",
		"asuntos-regulatorios.module"
	],
	"./components/carta-porte/carta-porte.module": [
		"./src/app/components/carta-porte/carta-porte.module.ts",
		"common",
		"carta-porte.module"
	],
	"./components/catalogo/cartera/cartera.module": [
		"./src/app/components/catalogo/cartera/cartera.module.ts",
		"common",
		"cartera.module"
	],
	"./components/catalogo/catalogo.module": [
		"./src/app/components/catalogo/catalogo.module.ts",
		"common",
		"catalogo.module"
	],
	"./components/catalogo/cliente/cliente.module": [
		"./src/app/components/catalogo/cliente/cliente.module.ts",
		"common",
		"cliente.module"
	],
	"./components/catalogo/crear-cartera/crear-cartera.module": [
		"./src/app/components/catalogo/crear-cartera/crear-cartera.module.ts",
		"common",
		"crear-cartera.module"
	],
	"./components/catalogo/detalles-cartera/detalles-cartera.module": [
		"./src/app/components/catalogo/detalles-cartera/detalles-cartera.module.ts",
		"common",
		"detalles-cartera.module"
	],
	"./components/catalogo/empresas/empresas.module": [
		"./src/app/components/catalogo/empresas/empresas.module.ts",
		"common",
		"empresas.module"
	],
	"./components/catalogo/trabajadores/trabajadores.module": [
		"./src/app/components/catalogo/trabajadores/trabajadores.module.ts",
		"common",
		"trabajadores.module"
	],
	"./components/consola-envios/consola-envios.module": [
		"./src/app/components/consola-envios/consola-envios.module.ts",
		"common",
		"consola-envios.module"
	],
	"./components/consola-prioridades/consola-prioridades.module": [
		"./src/app/components/consola-prioridades/consola-prioridades.module.ts",
		"common",
		"consola-prioridades.module"
	],
	"./components/consola-productos-destruccion/consola-productos-destruccion.module": [
		"./src/app/components/consola-productos-destruccion/consola-productos-destruccion.module.ts",
		"common",
		"consola-productos-destruccion.module"
	],
	"./components/contabilidad/cuentas/cuentas.module": [
		"./src/app/components/contabilidad/cuentas/cuentas.module.ts",
		"common",
		"cuentas.module"
	],
	"./components/contabilidad/polizas/polizas.module": [
		"./src/app/components/contabilidad/polizas/polizas.module.ts",
		"common",
		"polizas.module"
	],
	"./components/controlar-cobro/controlar-cobro.module": [
		"./src/app/components/controlar-cobro/controlar-cobro.module.ts",
		"common",
		"controlar-cobro.module"
	],
	"./components/embalar/embalar.module": [
		"./src/app/components/embalar/embalar.module.ts",
		"common",
		"embalar.module"
	],
	"./components/gestion-cuarentena/gestion-cuarentena.module": [
		"./src/app/components/gestion-cuarentena/gestion-cuarentena.module.ts",
		"common",
		"gestion-cuarentena.module"
	],
	"./components/gestion/consultas/asistencia/asistencia.module": [
		"./src/app/components/gestion/consultas/asistencia/asistencia.module.ts",
		"common",
		"asistencia.module"
	],
	"./components/gestion/consultas/cobros/cobros.module": [
		"./src/app/components/gestion/consultas/cobros/cobros.module.ts",
		"common",
		"cobros.module"
	],
	"./components/gestion/consultas/compras/compras.module": [
		"./src/app/components/gestion/consultas/compras/compras.module.ts",
		"common",
		"compras.module"
	],
	"./components/gestion/consultas/confirmacion/confirmacion.module": [
		"./src/app/components/gestion/consultas/confirmacion/confirmacion.module.ts",
		"common",
		"confirmacion.module"
	],
	"./components/gestion/consultas/cotizaciones/cotizaciones.module": [
		"./src/app/components/gestion/consultas/cotizaciones/cotizaciones.module.ts",
		"common",
		"cotizaciones.module"
	],
	"./components/gestion/consultas/documentos-enviados/documentos-enviados.module": [
		"./src/app/components/gestion/consultas/documentos-enviados/documentos-enviados.module.ts",
		"common",
		"documentos-enviados.module"
	],
	"./components/gestion/consultas/documentos-recibidos/documentos-recibidos.module": [
		"./src/app/components/gestion/consultas/documentos-recibidos/documentos-recibidos.module.ts",
		"common",
		"documentos-recibidos.module"
	],
	"./components/gestion/consultas/entregas/entregas.module": [
		"./src/app/components/gestion/consultas/entregas/entregas.module.ts",
		"common",
		"entregas.module"
	],
	"./components/gestion/consultas/facturacion/facturacion.module": [
		"./src/app/components/gestion/consultas/facturacion/facturacion.module.ts",
		"common",
		"facturacion.module"
	],
	"./components/gestion/consultas/llamadas/llamadas.module": [
		"./src/app/components/gestion/consultas/llamadas/llamadas.module.ts",
		"common",
		"llamadas.module"
	],
	"./components/gestion/consultas/nota-credito/nota-credito.module": [
		"./src/app/components/gestion/consultas/nota-credito/nota-credito.module.ts",
		"common",
		"nota-credito.module"
	],
	"./components/gestion/gestion.module": [
		"./src/app/components/gestion/gestion.module.ts",
		"common",
		"gestion.module"
	],
	"./components/gestion/reportes/reportecobros/reportecobros.module": [
		"./src/app/components/gestion/reportes/reportecobros/reportecobros.module.ts",
		"common",
		"reportecobros.module"
	],
	"./components/gestion/reportes/seguimiento/seguimiento.module": [
		"./src/app/components/gestion/reportes/seguimiento/seguimiento.module.ts",
		"common",
		"seguimiento.module"
	],
	"./components/gestor-ruta/asignar-ruta/asignar-ruta.module": [
		"./src/app/components/gestor-ruta/asignar-ruta/asignar-ruta.module.ts",
		"common",
		"asignar-ruta.module"
	],
	"./components/gestor-ruta/cerrar-ruta/cerrar-ruta.module": [
		"./src/app/components/gestor-ruta/cerrar-ruta/cerrar-ruta.module.ts",
		"common",
		"cerrar-ruta.module"
	],
	"./components/interfacturacion/interfacturacion.module": [
		"./src/app/components/interfacturacion/interfacturacion.module.ts",
		"common",
		"interfacturacion.module"
	],
	"./components/material-receptor-gdl/material-receptor-gdl.module": [
		"./src/app/components/material-receptor-gdl/material-receptor-gdl.module.ts",
		"common",
		"material-receptor-gdl.module"
	],
	"./components/material-stock/material-stock.module": [
		"./src/app/components/material-stock/material-stock.module.ts",
		"common",
		"material-stock.module"
	],
	"./components/producto-reclamo/producto-reclamo.module": [
		"./src/app/components/producto-reclamo/producto-reclamo.module.ts",
		"common",
		"producto-reclamo.module"
	],
	"./components/productos-bo/productos-bo.module": [
		"./src/app/components/productos-bo/productos-bo.module.ts",
		"common",
		"productos-bo.module"
	],
	"./components/productos-doc-faltante/productos-doc-faltante.module": [
		"./src/app/components/productos-doc-faltante/productos-doc-faltante.module.ts",
		"common",
		"productos-doc-faltante.module"
	],
	"./components/responsableae/responsableae.module": [
		"./src/app/components/responsableae/responsableae.module.ts",
		"common",
		"responsableae.module"
	],
	"./components/saldo-favor/saldo-nota-credito/saldo-nota-credito.module": [
		"./src/app/components/saldo-favor/saldo-nota-credito/saldo-nota-credito.module.ts",
		"common",
		"saldo-nota-credito.module"
	],
	"./components/saldo-favor/saldos/saldos.module": [
		"./src/app/components/saldo-favor/saldos/saldos.module.ts",
		"common",
		"saldos.module"
	],
	"./components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.module": [
		"./src/app/components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.module.ts",
		"common",
		"ruta-envio-por-cliente.module"
	],
	"./components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio.module": [
		"./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio.module.ts",
		"common",
		"trabajar-rutas-envio.module"
	],
	"./components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.module": [
		"./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.module.ts",
		"common",
		"trabajar-rutas.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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

var AppComponent = /** @class */ (function () {
    //  title = 'app';
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_core_container_pq_footer_pq_footer_component__ = __webpack_require__("./src/app/components/core-container/pq-footer/pq-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_core_container_pq_header_pq_header_component__ = __webpack_require__("./src/app/components/core-container/pq-header/pq-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_core_container_pq_botonera_pq_botonera_component__ = __webpack_require__("./src/app/components/core-container/pq-botonera/pq-botonera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_login_login_service__ = __webpack_require__("./src/app/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_electron__ = __webpack_require__("./node_modules/ngx-electron/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_configuracion_configuracion_rutas_rutas_component__ = __webpack_require__("./src/app/components/configuracion/configuracion/rutas/rutas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_shared_tarjeta_rutas_tarjeta_rutas_component__ = __webpack_require__("./src/app/components/shared/tarjeta-rutas/tarjeta-rutas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_gestion_gestion_service__ = __webpack_require__("./src/app/services/gestion/gestion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pipes_accounting_accounting_module__ = __webpack_require__("./src/app/pipes/accounting/accounting.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_inspeccion_inspeccion_service__ = __webpack_require__("./src/app/services/inspeccion/inspeccion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_gestion_consulta_facturacion_facturacion_service__ = __webpack_require__("./src/app/services/gestion/consulta/facturacion/facturacion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_gestion_consulta_cobros_cobros_service__ = __webpack_require__("./src/app/services/gestion/consulta/cobros/cobros.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_gestion_consulta_compras_compras_service__ = __webpack_require__("./src/app/services/gestion/consulta/compras/compras.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_gestion_consulta_cotizaciones_cotizacion_service__ = __webpack_require__("./src/app/services/gestion/consulta/cotizaciones/cotizacion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_gestion_consulta_asistencias_asistencias_service__ = __webpack_require__("./src/app/services/gestion/consulta/asistencias/asistencias.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_util_util_service__ = __webpack_require__("./src/app/services/util/util.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_gestion_consulta_documentos_enviados_documentos_enviados_service__ = __webpack_require__("./src/app/services/gestion/consulta/documentos-enviados/documentos-enviados.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_gestion_consulta_documentos_recibidos_documentos_recibidos_service__ = __webpack_require__("./src/app/services/gestion/consulta/documentos-recibidos/documentos-recibidos.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_gestion_consulta_entregas_entregas_service__ = __webpack_require__("./src/app/services/gestion/consulta/entregas/entregas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_gestion_consulta_llamadas_llamadas_service__ = __webpack_require__("./src/app/services/gestion/consulta/llamadas/llamadas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_gestion_consulta_nota_credito_nota_credito_service__ = __webpack_require__("./src/app/services/gestion/consulta/nota-credito/nota-credito.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_gestion_reportes_seguimiento_seguimiento_service__ = __webpack_require__("./src/app/services/gestion/reportes/seguimiento/seguimiento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_gestion_reportes_reportecobros_reportecobros_service__ = __webpack_require__("./src/app/services/gestion/reportes/reportecobros/reportecobros.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_vendedor_vendedor_component__ = __webpack_require__("./src/app/components/vendedor/vendedor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_embalar_embalar_service__ = __webpack_require__("./src/app/services/embalar/embalar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_trabajar_ruta_trabajar_rutas_almacen_trabajar_rutas_service__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_trabajar_ruta_trabajar_rutas_almacen_trabajar_rutas_envio_trabajar_rutas_envio_informacion_trabajar_rutas_envio_services__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio-informacion/trabajar-rutas-envio.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_trabajar_ruta_trabajar_rutas_almacen_trabajar_rutas_clientes_trabajar_rutas_clientes_detalle_trabajar_rutas_clientes_detalle_service__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_trabajar_ruta_trabajar_rutas_almacen_trabajar_rutas_clientes_trabajar_rutas_cliente_services__ = __webpack_require__("./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-cliente.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_despachos_gestorRuta_asignar_mensajero_service__ = __webpack_require__("./src/app/services/despachos/gestorRuta/asignar-mensajero.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_despachos_gestorRuta_cerrar_ruta_service__ = __webpack_require__("./src/app/services/despachos/gestorRuta/cerrar-ruta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_asuntos_regulatorios_asuntos_regulatorios_service__ = __webpack_require__("./src/app/services/asuntos-regulatorios/asuntos-regulatorios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__services_material_receptor_material_receptor_service__ = __webpack_require__("./src/app/services/material-receptor/material-receptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__services_productos_bo_productos_bo_service__ = __webpack_require__("./src/app/services/productos-bo/productos-bo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_arribo_documento_arribo_documento_service__ = __webpack_require__("./src/app/services/arribo-documento/arribo-documento.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__services_gestionar_cuarentena_gestionar_cuarentena_service__ = __webpack_require__("./src/app/services/gestionar-cuarentena/gestionar-cuarentena.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__services_trabajar_ruta_envio_por_cliente_service__ = __webpack_require__("./src/app/services/trabajar-ruta/envio-por-cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__services_gestor_producto_reclamo_producto_reclamo_service__ = __webpack_require__("./src/app/services/gestor-producto-reclamo/producto-reclamo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__services_consola_consola_prioridades_service__ = __webpack_require__("./src/app/services/consola/consola-prioridades.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__services_consola_envio_consola_envio_service__ = __webpack_require__("./src/app/services/consola-envio/consola-envio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__services_saldos_notas_saldos_favor_service__ = __webpack_require__("./src/app/services/saldos-notas/saldos-favor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__services_carta_porte_carta_porte_service__ = __webpack_require__("./src/app/services/carta-porte/carta-porte.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__services_consola_stock_consola_stock_service__ = __webpack_require__("./src/app/services/consola-stock/consola-stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__services_consola_destruccion_material_destruccion_service__ = __webpack_require__("./src/app/services/consola-destruccion/material-destruccion.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_core_container_core_container_component__["a" /* CoreContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_core_container_pq_footer_pq_footer_component__["a" /* PqFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_core_container_pq_header_pq_header_component__["a" /* PqHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_core_container_pq_botonera_pq_botonera_component__["a" /* PqBotoneraComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_configuracion_configuracion_rutas_rutas_component__["a" /* RutasComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_shared_tarjeta_rutas_tarjeta_rutas_component__["a" /* TarjetaRutasComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_vendedor_vendedor_component__["a" /* VendedorComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_electron__["b" /* NgxElectronModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_18__pipes_accounting_accounting_module__["a" /* PipeModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_forms__["k" /* ReactiveFormsModule */],
            ],
            providers: [
                // {provide: HTTP_INTERCEPTORS, useCss: InterceptorsService, multi: true},
                __WEBPACK_IMPORTED_MODULE_9__services_login_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_10__services_session_session_service__["a" /* SessionUser */],
                __WEBPACK_IMPORTED_MODULE_17__services_gestion_gestion_service__["a" /* GestionService */],
                __WEBPACK_IMPORTED_MODULE_19__services_inspeccion_inspeccion_service__["a" /* InspeccionService */],
                __WEBPACK_IMPORTED_MODULE_11__services_comun_comun_service__["a" /* ComunService */],
                __WEBPACK_IMPORTED_MODULE_21__services_gestion_consulta_facturacion_facturacion_service__["a" /* FacturacionService */],
                __WEBPACK_IMPORTED_MODULE_25__services_gestion_consulta_asistencias_asistencias_service__["a" /* AsistenciasService */],
                __WEBPACK_IMPORTED_MODULE_22__services_gestion_consulta_cobros_cobros_service__["a" /* CobrosService */],
                __WEBPACK_IMPORTED_MODULE_23__services_gestion_consulta_compras_compras_service__["a" /* ComprasService */],
                __WEBPACK_IMPORTED_MODULE_26__services_util_util_service__["a" /* UtilService */],
                __WEBPACK_IMPORTED_MODULE_24__services_gestion_consulta_cotizaciones_cotizacion_service__["a" /* CotizacionService */],
                __WEBPACK_IMPORTED_MODULE_27__services_gestion_consulta_documentos_enviados_documentos_enviados_service__["a" /* DocumentosEnviadosService */],
                __WEBPACK_IMPORTED_MODULE_28__services_gestion_consulta_documentos_recibidos_documentos_recibidos_service__["a" /* DocumentosRecibidosService */],
                __WEBPACK_IMPORTED_MODULE_29__services_gestion_consulta_entregas_entregas_service__["a" /* EntregasService */],
                __WEBPACK_IMPORTED_MODULE_30__services_gestion_consulta_llamadas_llamadas_service__["a" /* LlamadasService */],
                __WEBPACK_IMPORTED_MODULE_31__services_gestion_consulta_nota_credito_nota_credito_service__["a" /* NotaCreditoService */],
                __WEBPACK_IMPORTED_MODULE_32__services_gestion_reportes_seguimiento_seguimiento_service__["a" /* SeguimientoService */],
                __WEBPACK_IMPORTED_MODULE_33__services_gestion_reportes_reportecobros_reportecobros_service__["a" /* ReporteCobrosService */],
                __WEBPACK_IMPORTED_MODULE_35__services_embalar_embalar_service__["a" /* EmbalarService */],
                __WEBPACK_IMPORTED_MODULE_36__components_trabajar_ruta_trabajar_rutas_almacen_trabajar_rutas_service__["a" /* TrabajarRutaService */],
                __WEBPACK_IMPORTED_MODULE_37__components_trabajar_ruta_trabajar_rutas_almacen_trabajar_rutas_envio_trabajar_rutas_envio_informacion_trabajar_rutas_envio_services__["a" /* TrabajarRutasEnvioService */],
                __WEBPACK_IMPORTED_MODULE_38__components_trabajar_ruta_trabajar_rutas_almacen_trabajar_rutas_clientes_trabajar_rutas_clientes_detalle_trabajar_rutas_clientes_detalle_service__["a" /* TrabajarRutasClienteDetalleService */],
                __WEBPACK_IMPORTED_MODULE_39__components_trabajar_ruta_trabajar_rutas_almacen_trabajar_rutas_clientes_trabajar_rutas_cliente_services__["a" /* TrabajarRutasClienteService */],
                __WEBPACK_IMPORTED_MODULE_40__services_despachos_gestorRuta_asignar_mensajero_service__["a" /* AsignarMensajeroService */],
                __WEBPACK_IMPORTED_MODULE_41__services_despachos_gestorRuta_cerrar_ruta_service__["a" /* CerrarRutaService */],
                __WEBPACK_IMPORTED_MODULE_42__services_asuntos_regulatorios_asuntos_regulatorios_service__["a" /* AsuntosRegulatoriosService */],
                __WEBPACK_IMPORTED_MODULE_43__services_material_receptor_material_receptor_service__["a" /* MaterialReceptorService */],
                __WEBPACK_IMPORTED_MODULE_44__services_productos_bo_productos_bo_service__["a" /* ProductosBoService */],
                __WEBPACK_IMPORTED_MODULE_45__services_arribo_documento_arribo_documento_service__["a" /* ArriboDocumentoService */],
                __WEBPACK_IMPORTED_MODULE_46__services_gestionar_cuarentena_gestionar_cuarentena_service__["a" /* GestionarCuarentenaService */],
                __WEBPACK_IMPORTED_MODULE_47__services_trabajar_ruta_envio_por_cliente_service__["a" /* EnvioPorClienteService */],
                __WEBPACK_IMPORTED_MODULE_48__services_gestor_producto_reclamo_producto_reclamo_service__["a" /* ProductoReclamoService */],
                __WEBPACK_IMPORTED_MODULE_49__services_consola_consola_prioridades_service__["a" /* ConsolaPrioridadesService */],
                __WEBPACK_IMPORTED_MODULE_50__services_consola_envio_consola_envio_service__["a" /* ConsolaEnvioService */],
                __WEBPACK_IMPORTED_MODULE_51__services_saldos_notas_saldos_favor_service__["a" /* SaldosFavorService */],
                __WEBPACK_IMPORTED_MODULE_52__services_carta_porte_carta_porte_service__["a" /* CartaPorteService */],
                __WEBPACK_IMPORTED_MODULE_53__services_consola_stock_consola_stock_service__["a" /* ConsolaStockService */],
                __WEBPACK_IMPORTED_MODULE_54__services_consola_destruccion_material_destruccion_service__["a" /* MaterialDestruccionService */]
            ], bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_core_container_core_container_component__ = __webpack_require__("./src/app/components/core-container/core-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");



var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_login_login_component__["a" /* LoginComponent */] },
    {
        path: 'protected', component: __WEBPACK_IMPORTED_MODULE_0__components_core_container_core_container_component__["a" /* CoreContainerComponent */],
        children: [
            // { path: '', component: ResponsableaeComponent },
            // { path: '', loadChildren: './components/responsableae/responsableae.module#ResponsableaeModule' },
            //  {path: '', loadChildren: './components/embalar/embalar.module#EmbalarModule' },
            { path: 'asuntosRegulatorios', loadChildren: './components/asuntos-regulatorios/asuntos-regulatorios.module#AsuntosRegulatoriosModule' },
            { path: 'envio', loadChildren: './components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio.module#TrabajarRutasEnvioModule' },
            { path: 'almacen', loadChildren: './components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.module#TrabajarRutasModule' },
            { path: 'trabajarRuta', loadChildren: './components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.module#TrabajarRutasModule' },
            // {path: 'gestorRuta', loadChildren: './components/gestor-ruta/gestor-ruta.module#GestorRutaModule'},
            { path: 'gestorRuta', loadChildren: './components/gestor-ruta/asignar-ruta/asignar-ruta.module#AsignarRutaModule' },
            { path: 'asignar-ruta', loadChildren: './components/gestor-ruta/asignar-ruta/asignar-ruta.module#AsignarRutaModule' },
            { path: 'cerrar-ruta', loadChildren: './components/gestor-ruta/cerrar-ruta/cerrar-ruta.module#CerrarRutaModule' },
            { path: 'interfacturacion', loadChildren: './components/interfacturacion/interfacturacion.module#InterfacturacionModule' },
            { path: 'inspeccion', loadChildren: './components/responsableae/responsableae.module#ResponsableaeModule' },
            { path: 'embalar', loadChildren: './components/embalar/embalar.module#EmbalarModule' },
            { path: 'gestion', loadChildren: './components/gestion/gestion.module#GestionModule' },
            { path: 'gestion/consulta/asistencia', loadChildren: './components/gestion/consultas/asistencia/asistencia.module#AsistenciaModule' },
            { path: 'gestion/consulta/cobros', loadChildren: './components/gestion/consultas/cobros/cobros.module#CobrosModule' },
            { path: 'gestion/consulta/compras', loadChildren: './components/gestion/consultas/compras/compras.module#ComprasModule' },
            {
                path: 'gestion/consulta/confirmacion',
                loadChildren: './components/gestion/consultas/confirmacion/confirmacion.module#ConfirmacionModule'
            },
            {
                path: 'gestion/consulta/cotizaciones',
                loadChildren: './components/gestion/consultas/cotizaciones/cotizaciones.module#CotizacionesModule'
            },
            {
                path: 'gestion/consulta/documentosEnviados',
                loadChildren: './components/gestion/consultas/documentos-enviados/documentos-enviados.module#DocumentosEnviadosModule'
            },
            {
                path: 'gestion/consulta/documentosRecibidos',
                loadChildren: './components/gestion/consultas/documentos-recibidos/documentos-recibidos.module#DocumentosRecibidosModule'
            },
            { path: 'gestion/consulta/entregas', loadChildren: './components/gestion/consultas/entregas/entregas.module#EntregasModule' },
            {
                path: 'gestion/consulta/facturacion',
                loadChildren: './components/gestion/consultas/facturacion/facturacion.module#FacturacionModule'
            },
            { path: 'gestion/consulta/llamadas', loadChildren: './components/gestion/consultas/llamadas/llamadas.module#LlamadasModule' },
            {
                path: 'gestion/consulta/nota-credito',
                loadChildren: './components/gestion/consultas/nota-credito/nota-credito.module#NotaCreditoModule'
            },
            { path: 'catalogo', loadChildren: './components/catalogo/catalogo.module#CatalogoModule' },
            { path: 'catalogo/clientes', loadChildren: './components/catalogo/cliente/cliente.module#ClienteModule' },
            { path: 'catalogo/clientes/carteras', loadChildren: './components/catalogo/cartera/cartera.module#CarteraModule' },
            {
                path: 'catalogo/clientes/carteras/:id',
                loadChildren: './components/catalogo/detalles-cartera/detalles-cartera.module#DetallesCarteraModule'
            },
            {
                path: 'catalogo/clientes/carteras/edit/:id',
                loadChildren: './components/catalogo/crear-cartera/crear-cartera.module#CrearCarteraModule'
            },
            {
                path: 'gestion/reportes/seguimiento',
                loadChildren: './components/gestion/reportes/seguimiento/seguimiento.module#SeguimientoModule'
            },
            {
                path: 'gestion/reportes/reportecobros',
                loadChildren: './components/gestion/reportes/reportecobros/reportecobros.module#ReporteCobrosModule'
            },
            { path: 'receptorMaterial', loadChildren: './components/material-receptor-gdl/material-receptor-gdl.module#MaterialReceptorGdlModule' },
            { path: 'controlarCobro', loadChildren: './components/controlar-cobro/controlar-cobro.module#ControlarCobroModule' },
            { path: 'productosBO', loadChildren: './components/productos-bo/productos-bo.module#ProductosBoModule' },
            { path: 'catalogo/empresas', loadChildren: './components/catalogo/empresas/empresas.module#EmpresasModule' },
            { path: 'catalogo/trabajadores', loadChildren: './components/catalogo/trabajadores/trabajadores.module#TrabajadoresModule' },
            { path: 'contabilidad/contables', loadChildren: './components/contabilidad/cuentas/cuentas.module#CuentasModule' },
            { path: 'contabilidad/polizas', loadChildren: './components/contabilidad/polizas/polizas.module#PolizasModule' },
            { path: 'docFaltante', loadChildren: './components/productos-doc-faltante/productos-doc-faltante.module#ProductosDocFaltanteModule' },
            { path: 'gestorCuarentena', loadChildren: './components/gestion-cuarentena/gestion-cuarentena.module#GestionCuarentenaModule' },
            { path: 'trabajarRutaCliente', loadChildren: './components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.module#RutaEnvioPorClienteModule' },
            { path: 'productoReclamo', loadChildren: './components/producto-reclamo/producto-reclamo.module#ProductoReclamoModule' },
            { path: 'consolaPrioridades', loadChildren: './components/consola-prioridades/consola-prioridades.module#ConsolaPrioridadesModule' },
            { path: 'consolaEnvio', loadChildren: './components/consola-envios/consola-envios.module#ConsolaEnviosModule' },
            { path: 'saldoFavor/saldo-nota-credito', loadChildren: './components/saldo-favor/saldo-nota-credito/saldo-nota-credito.module#SaldoNotaCreditoModule' },
            { path: 'saldos', loadChildren: './components/saldo-favor/saldos/saldos.module#SaldosModule' },
            { path: 'cartaPorte', loadChildren: './components/carta-porte/carta-porte.module#CartaPorteModule' },
            { path: 'stock', loadChildren: './components/material-stock/material-stock.module#MaterialStockModule' },
            { path: 'consolaDest', loadChildren: './components/consola-productos-destruccion/consola-productos-destruccion.module#ConsolaProductosDestruccionModule' }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/class/Empleado.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Empleado; });
var Empleado = /** @class */ (function () {
    function Empleado() {
        this.propiedades = [
            { propiedad: "costoTotalIncidentes", formato: "moneda", tipo: "number", newpropiedad: "costoTotalIncidentesFormato" },
            { propiedad: "porcentajeBono", formato: "porcentaje", tipo: "number", newpropiedad: "porcentajeBonoFormato" },
            { propiedad: "fechaCierre", formato: "fecha", tipo: "Date", newpropiedad: "fechaCierreFormato" },
            { propiedad: "costoHoraHombre", formato: "moneda", tipo: "number", newpropiedad: "costoHoraHombreFormato" },
            { propiedad: "costoCalidad", formato: "moneda", tipo: "number", newpropiedad: "costoCalidadFormato" }
        ];
    }
    Empleado.prototype.getCodigoAsistencia = function () {
        return this.codigoAsistencia;
    };
    Empleado.prototype.setCodigoAsistencia = function (value) {
        this.codigoAsistencia = value;
    };
    Empleado.prototype.getAsistencia = function () {
        return this.asistencia;
    };
    Empleado.prototype.setAsistencia = function (value) {
        this.asistencia = value;
    };
    Empleado.prototype.getLlave = function () {
        this.llave = this.getIdEmpleado();
        return this.llave;
    };
    Empleado.prototype.setLlave = function (value) {
        this.llave = value;
    };
    Empleado.prototype.getValor = function () {
        this.valor = this.getUsuario();
        return this.valor;
    };
    Empleado.prototype.setValor = function (value) {
        this.valor = value;
    };
    Empleado.prototype.getAdministrador = function () {
        return this.administrador;
    };
    Empleado.prototype.setAdministrador = function (value) {
        this.administrador = value;
    };
    Empleado.prototype.getSumaCNC_IncidentesAsociados = function () {
        return this.sumaCNC_IncidentesAsociados;
    };
    Empleado.prototype.setSumaCNC_IncidentesAsociados = function (value) {
        this.sumaCNC_IncidentesAsociados = value;
    };
    Empleado.prototype.getIdSubproceso = function () {
        return this.idSubproceso;
    };
    Empleado.prototype.setIdSubproceso = function (value) {
        this.idSubproceso = value;
    };
    Empleado.prototype.getNumFila = function () {
        return this.numFila;
    };
    Empleado.prototype.setNumFila = function (value) {
        this.numFila = value;
    };
    Empleado.prototype.getSubproceso = function () {
        return this.subproceso;
    };
    Empleado.prototype.setSubproceso = function (value) {
        this.subproceso = value;
    };
    Empleado.prototype.Empleado = function () {
        this.setIdcombo(-1);
        this.setClave(0);
    };
    Empleado.prototype.getNivelGeneral = function () {
        return this.nivelGeneral;
    };
    Empleado.prototype.setNivelGeneral = function (value) {
        this.nivelGeneral = value;
    };
    Empleado.prototype.getModulos = function () {
        return this.modulos;
    };
    Empleado.prototype.setModulos = function (value) {
        this.modulos = value;
    };
    Empleado.prototype.getIncidentes = function () {
        return this.incidentes;
    };
    Empleado.prototype.setIncidentes = function (value) {
        this.incidentes = value;
        if (this.incidentes == null || this.incidentes.length == 0) {
            this.sumaCNC_IncidentesAsociados = 0;
        }
        else {
            if (this.incidentes.length == 1 && this.incidentes[0] == 'NINGUNO') {
                this.sumaCNC_IncidentesAsociados = 0;
            }
            else {
                this.sumaCNC_IncidentesAsociados = this.incidentes.length * 6.2;
            }
        }
    };
    Empleado.prototype.getFolioIncidentes = function () {
        return this.folioIncidentes;
    };
    Empleado.prototype.setFolioIncidentes = function (value) {
        this.folioIncidentes = value;
    };
    Empleado.prototype.getListadoUsuarios = function () {
        return this.listadoUsuarios;
    };
    Empleado.prototype.setListadoUsuarios = function (value) {
        this.listadoUsuarios = value;
    };
    Empleado.prototype.getFechaNacimiento = function () {
        return this.fechaNacimiento;
    };
    Empleado.prototype.setFechaNacimiento = function (value) {
        this.fechaNacimiento = value;
    };
    Empleado.prototype.getFechaContrato = function () {
        return this.fechaContrato;
    };
    Empleado.prototype.setFechaContrato = function (value) {
        this.fechaContrato = value;
    };
    Empleado.prototype.getFechaIngreso = function () {
        return this.fechaIngreso;
    };
    Empleado.prototype.setFechaIngreso = function (value) {
        this.fechaIngreso = value;
    };
    Empleado.prototype.getResponsable = function () {
        return this.responsable;
    };
    Empleado.prototype.setResponsable = function (value) {
        this.responsable = value;
    };
    Empleado.prototype.getNombreSubproceso = function () {
        return this.nombreSubproceso;
    };
    Empleado.prototype.setNombreSubproceso = function (value) {
        this.nombreSubproceso = value;
    };
    Empleado.prototype.getNombreFuncion = function () {
        return this.nombreFuncion;
    };
    Empleado.prototype.setNombreFuncion = function (value) {
        this.nombreFuncion = value;
    };
    Empleado.prototype.getNivelFuncion = function () {
        return this.nivelFuncion;
    };
    Empleado.prototype.setNivelFuncion = function (value) {
        this.nivelFuncion = value;
    };
    Empleado.prototype.getCurp = function () {
        return this.curp;
    };
    Empleado.prototype.setCurp = function (value) {
        this.curp = value;
    };
    Empleado.prototype.getDireccion = function () {
        return this.direccion;
    };
    Empleado.prototype.setDireccion = function (value) {
        this.direccion = value;
    };
    Empleado.prototype.getEmpresa = function () {
        return this.empresa;
    };
    Empleado.prototype.setEmpresa = function (value) {
        this.empresa = value;
    };
    Empleado.prototype.getTelefono2 = function () {
        return this.telefono2;
    };
    Empleado.prototype.setTelefono2 = function (value) {
        this.telefono2 = value;
    };
    Empleado.prototype.getTelefono = function () {
        return this.telefono;
    };
    Empleado.prototype.setTelefono = function (value) {
        this.telefono = value;
    };
    Empleado.prototype.getPuesto = function () {
        return this.puesto;
    };
    Empleado.prototype.setPuesto = function (value) {
        this.puesto = value;
    };
    Empleado.prototype.getDepartamento = function () {
        return this.departamento;
    };
    Empleado.prototype.setDepartamento = function (value) {
        if (value == null || value == "") {
            this.departamento = "Otros";
        }
        else {
            this.departamento = value;
        }
    };
    Empleado.prototype.getNombre = function () {
        return this.nombre;
    };
    Empleado.prototype.setNombre = function (value) {
        this.nombre = value;
    };
    Empleado.prototype.getPassword = function () {
        return this.password;
    };
    Empleado.prototype.setPassword = function (value) {
        this.password = value;
    };
    Empleado.prototype.getUsuario = function () {
        return this.usuario;
    };
    Empleado.prototype.setUsuario = function (value) {
        this.usuario = value;
    };
    Empleado.prototype.getPorcentajeBono = function () {
        return this.porcentajeBono;
    };
    Empleado.prototype.setPorcentajeBono = function (value) {
        this.porcentajeBono = value;
    };
    Empleado.prototype.getMontoAPagar = function () {
        return this.montoAPagar;
    };
    Empleado.prototype.setMontoAPagar = function (value) {
        this.montoAPagar = value;
    };
    Empleado.prototype.getCostoTotalIncidentes = function () {
        return this.costoTotalIncidentes;
    };
    Empleado.prototype.setCostoTotalIncidentes = function (value) {
        this.costoTotalIncidentes = value;
    };
    Empleado.prototype.getCostoHoraHombre = function () {
        return this.costoHoraHombre;
    };
    Empleado.prototype.setCostoHoraHombre = function (value) {
        this.costoHoraHombre = value;
    };
    Empleado.prototype.getIdcombo = function () {
        return this.idcombo;
    };
    Empleado.prototype.setIdcombo = function (value) {
        this.idcombo = value;
    };
    Empleado.prototype.getIdFuncion = function () {
        return this.idFuncion;
    };
    Empleado.prototype.setIdFuncion = function (value) {
        this.idFuncion = value;
    };
    Empleado.prototype.getFase = function () {
        return this.fase;
    };
    Empleado.prototype.setFase = function (value) {
        this.fase = value;
    };
    Empleado.prototype.getNivel = function () {
        return this.nivel;
    };
    Empleado.prototype.setNivel = function (value) {
        this.nivel = value;
    };
    Empleado.prototype.getClave = function () {
        return this.clave;
    };
    Empleado.prototype.setClave = function (value) {
        this.clave = value;
    };
    Empleado.prototype.getIdEmpleado = function () {
        return this.idEmpleado;
    };
    Empleado.prototype.setIdEmpleado = function (value) {
        this.idEmpleado = value;
    };
    Empleado.prototype.setEmpleado = function (objeto) {
        this.setClave(objeto.getClave());
        this.setUsuario(objeto.getUsuario());
        this.setPassword(objeto.getPassword());
        this.setNivel(objeto.getNivel());
        this.setNombre(objeto.getNombre());
        this.setDepartamento(objeto.getDepartamento());
        this.setFase(objeto.getFase());
        this.setPuesto(objeto.getPuesto());
        this.setFechaIngreso(objeto.getFechaIngreso());
        this.setIdFuncion(objeto.getIdFuncion());
        this.setIdEmpleado(objeto.getIdEmpleado());
        this.setNivelGeneral(objeto.getNivelGeneral());
        this.setListadoUsuarios(new Array);
        this.setIdcombo(-1);
    };
    Empleado.prototype.buscarEmpleado = function (Usuarios) {
        this.setListadoUsuarios(Usuarios);
        for (var m = 0; m < this.setListadoUsuarios.length; m++) {
            if (this.getClave == this.getListadoUsuarios[m].getClave) {
                this.setIdcombo(m);
                return;
            }
        }
        this.setIdcombo(-1);
    };
    Empleado.prototype.getEsGerente = function () {
        return this.esGerente;
    };
    Empleado.prototype.setEsGerente = function (value) {
        this.esGerente = value;
    };
    Empleado.prototype.getRoles = function () {
        return this.roles;
    };
    Empleado.prototype.setRoles = function (value) {
        this.roles = value;
    };
    Empleado.prototype.getUsuarioESAC = function () {
        return this.usuarioESAC;
    };
    Empleado.prototype.setUsuarioESAC = function (value) {
        this.usuarioESAC = value;
    };
    Empleado.prototype.getNombreESAC = function () {
        return this.nombreESAC;
    };
    Empleado.prototype.setNombreESAC = function (value) {
        this.nombreESAC = value;
    };
    Empleado.prototype.getArea = function () {
        return this.area;
    };
    Empleado.prototype.setArea = function (value) {
        this.area = value;
    };
    return Empleado;
}());



/***/ }),

/***/ "./src/app/class/Parametros.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parametros; });
var Parametros = /** @class */ (function () {
    function Parametros() {
        this.rutaGeneral = 'http://proquifa.com.mx:51725/SAP/';
    }
    return Parametros;
}());



/***/ }),

/***/ "./src/app/components/configuracion/configuracion/rutas/rutas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"configuracionRutas\">\n  <header class=\"header\">\n    <img id=\"atras\" src=\"./assets/Images/Configuracion/Rutas/Atras.svg\"/>\n    CONFIGURACIÓN DE RUTAS\n  </header>\n  <hr color=\"black\" size=2 width=\"100%\">\n\n<section class=\"section\">\n  <table>\n    <tr class=\"dias\">\n      <th> </th>\n      <th>Lunes</th>\n      <th>Martes</th>\n      <th>Miércoles</th>\n      <th>Jueves</th>\n      <th>Viernes</th>\n    </tr>\n\n    <tr>\n      <td class=\"lugar\">\n        <img id=\"ubicacion\" src=\"./assets/Images/Configuracion/Rutas/ubicacion.svg\"/>\n        <label>Toluca</label>\n      </td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n    </tr>\n\n    <tr>\n      <td class=\"lugar\">\n        <img id=\"ubicacion\" src=\"./assets/Images/Configuracion/Rutas/ubicacion.svg\"/>\n        <label>Cuernavaca</label>\n      </td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n    </tr>\n\n    <tr>\n      <td class=\"lugar\">\n        <img id=\"ubicacion\" src=\"./assets/Images/Configuracion/Rutas/ubicacion.svg\"/>\n        <label> Puebla</label>\n      </td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n    </tr>\n\n    <tr>\n      <td class=\"lugar\">\n        <img id=\"ubicacion\" src=\"./assets/Images/Configuracion/Rutas/ubicacion.svg\"/>\n        <label>Norte</label>\n      </td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n    </tr>\n\n    <tr>\n      <td class=\"lugar\">\n        <img id=\"ubicacion\" src=\"./assets/Images/Configuracion/Rutas/ubicacion.svg\"/>\n        <label>Sur</label>\n      </td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n      <td class=\"contenido\"><pq-tarjeta-rutas></pq-tarjeta-rutas></td>\n    </tr>\n  </table>\n</section>\n\n\n <hr color=\"black\" size=1 width=\"100%\">\n<footer class=\"footer\">\n  <div class=\"EntregaFooter\">\n    <img id=\"EntregaFooter\" src=\"./assets/Images/Configuracion/Rutas/entregaVerde.svg\"/>\n    Entrega\n  </div>\n    <div class=\"CobroFooter\">\n    <img id=\"CobroFooter\" src=\"./assets/Images/Configuracion/Rutas/cobroVerde.svg\"/>\n    Cobro\n  </div>\n    <div class=\"RevisionFooter\">\n    <img id=\"RevisionFooter\" src=\"./assets/Images/Configuracion/Rutas/revisionVerde.svg\"/>\n    Revisión\n  </div>\n  <div class=\"eEspecialFooter\">\n    <img id=\"eEspecialFooter\" src=\"./assets/Images/Configuracion/Rutas/eEspecialVerde.svg\"/>\n    Entrega Especial\n  </div>\n  <div class=\"rMaterialFooter\">\n    <img id=\"rMaterialFooter\" src=\"./assets/Images/Configuracion/Rutas/rMaterialVerde.svg\"/>\n    Recolección de material\n  </div>\n</footer>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/configuracion/configuracion/rutas/rutas.component.scss":
/***/ (function(module, exports) {

module.exports = ".configuracionRutas {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  height: 97%;\n  width: auto;\n  padding: 20px; }\n\n.header {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  font-size: 25px;\n  font-family: 'Roboto', sans-serif;\n  padding-top: 30px;\n  vertical-align: middle; }\n\n.section {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  height: 10%;\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  overflow: scroll; }\n\n.footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  padding-bottom: 5spx;\n  font-size: 20px;\n  font-family: 'Roboto', sans-serif;\n  width: 100%; }\n\n.EntregaFooter, .CobroFooter, .RevisionFooter, .eEspecialFooter, .rMaterialFooter {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  margin-left: 5%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n\n.lugar {\n  min-width: 143px;\n  width: 195px;\n  padding-left: 10px;\n  height: 16%; }\n\n.contenido {\n  min-width: 313px;\n  height: 15%; }\n\ntable {\n  width: 99%;\n  height: 90%; }\n\ntable th {\n  text-align: left;\n  vertical-align: bottom;\n  height: 15%; }\n\ntable td {\n  border: 1px solid #D8D8D8;\n  vertical-align: middle; }\n\n#atras {\n  width: 19.8px;\n  height: 30.3px; }\n\n#EntregaFooter, #CobroFooter, #RevisionFooter, #eEspecialFooter, #rMaterialFooter {\n  height: 20px;\n  width: 25px; }\n\n#ubicacion {\n  height: 18.2px;\n  width: 12.7px; }\n"

/***/ }),

/***/ "./src/app/components/configuracion/configuracion/rutas/rutas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RutasComponent; });
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

var RutasComponent = /** @class */ (function () {
    function RutasComponent() {
    }
    RutasComponent.prototype.ngOnInit = function () {
    };
    RutasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-rutas',
            template: __webpack_require__("./src/app/components/configuracion/configuracion/rutas/rutas.component.html"),
            styles: [__webpack_require__("./src/app/components/configuracion/configuracion/rutas/rutas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RutasComponent);
    return RutasComponent;
}());



/***/ }),

/***/ "./src/app/components/core-container/core-container.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n\t<section class=\"plantilla\">\n\t\t<div class=\"botonesControl\">\n\t    <div class=\"botones\">\n\t      <img class=\"btn\" src='./assets/Images/MaxSize.svg' (click)=\"fullScreen()\"/>\n\t      <img class=\"btn\" src='./assets/Images/Minimizar.svg' (click)=\"minimize()\"/>\n\t      <img class=\"btn\" src='./assets/Images/MinSize.svg' (click)=\"maximizer()\"/>\n\t      <img class=\"btn\" src='./assets/Images/Salir.svg' (click)=\"close()\"/>\n\t    </div>\n\t  </div>\n\n\t<div class=\"padre\">\n\t\t<header class=\"header\">\n\t\t\t<pq-header></pq-header>\n\t  </header>\n\n\t<div class=\"articulo\">\n\t\t<div style=\"position: relative; display: flex; background: #292929;\"  class=\"auxAside\">\n\t\t<aside [ngClass]=\"classAside\">\n\t\t\t<div class=\"botonera\">\n\n\t\t\t\t\t<pq-botonera style=\"width: 100%;\" \n\t\t\t\t\t[iniciarBotonera]=\"iniciarBotonera\" [pendientes]=\"pendientes\" [mejoras]=\"mejoras\" [incidente]=\"incidente\" [solicitud]=\"solicitud\"\n\t\t\t\t\t[gestion]=\"gestion\" [catalogos]=\"catalogos\" [configuracion]=\"configuracion\" >\n\t\t\t\t</pq-botonera>\n\t\t\t</div>\n\t\t</aside>\n\t</div>\n\n\t\t<div class=\"outlet\" style=\"position: relative\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n\n\t<footer class=\"footer\">\n\t  <pq-footer (ocultarMenu)=\"ocultarMenu()\"></pq-footer>\n\t</footer>\n\n\t</div>\n\t</section>\n\n\t<div class=\"container\" *ngIf=\"modalLoading\">\n\t\t<div class=\"loading\">\n\t\t\t<img  height=\"170px\" src='assets/Images/gif_loading.gif'/>\n\t\t</div>\n\t</div>\n\n\t<div class=\"container\" *ngIf=\"blockScreen\">\n\t\t\n\t</div>\n\n</body>\n"

/***/ }),

/***/ "./src/app/components/core-container/core-container.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* You can add global styles to this file, and also import other style files */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n.botonesControl {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -ms-flex-line-pack: end;\n      align-content: flex-end;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  width: calc(100vw - 40px);\n  -webkit-app-region: drag; }\n.botones {\n  z-index: 1;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  margin: 4px 0px 1px 0px; }\n.plantilla {\n  width: 100vw;\n  height: 100vh;\n  padding-left: 20px;\n  padding-bottom: 20px;\n  padding-right: 20px;\n  min-height: 770px;\n  padding-top: 0px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAVCAIAAABKc2DEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRjQ0OUQ2OTVBNjQxMUUxQTcyOUVDMDVBNDNENDU1RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRjQ0OUQ2QTVBNjQxMUUxQTcyOUVDMDVBNDNENDU1RiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJGNDQ5RDY3NUE2NDExRTFBNzI5RUMwNUE0M0Q0NTVGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJGNDQ5RDY4NUE2NDExRTFBNzI5RUMwNUE0M0Q0NTVGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+X13iJAAAAwFJREFUeNp81slS40AQBFAshDEGm/3CgSv//00ciCDYdzB45qEkhEdqTR8c7e5aMrOqy67Pzs7e3t4Wi0VVVWultVwuv76+jo6O/jSrb+BwPB6zeX5+Fmc0GhXjxHdjY4NxzXpvb29ra6toKgSDx8fHm5ub2WxW13U/MbgPDw/yzefzk5MTKNcGljifn58C1vLd3d1x29nZ6TvIAZ2rl5eX+/t7iSHtJPYVy8lksrm5Ke5Q1phhaFOxdiQonX1f/rucIOGKddTupCTG09PT+vr69vY20oyXvcUFRdwYsJfx2y4OnIul5UMTjJmxgWDVzO37+zsxEP34+CjWSGI2Eu3u7gplX4kynU658bEv9kJCK5tbG57tFdEUWwRQEOq755yWUtgHQRX6k2ap7lAjpMkllhI4kjpMOIfRtkiUDXv7/f19+SI4++r19TURHcWi6M9HN5GafZwJrrkQ9bX4Zpwwjk4hGvZV7izNnMoVH6WFJYqEyhuQRjgMbFz1eyJEFQ5QcNXiV/ZcZ1CodkyH6MKka5DzirzgabPSbkV7+uOHqMSrV/XqlzzNq6srm2I/iw51y9jnxcUFuBIPyevJMQO3kFUOUqSbTk9PxS3qnFFFmO8313TQ8fFxO+2G5hpksK7C+iWkSBBl7LXFXl3t8Es5lcMJnduiduxBydNggPRq1p8EUOOqm/SUshenWuqaOQUZF9Kdn5+7ErqvcN6kPmB2e3sr+D9cIRVLJuEyX0allcE5bxZk4MuNceaGonTs20eMidv08I9meYiux82yH3o5bQNnOLcgwIV1SJ5M08PDQ6XJ6wigyjOwOzg4KI60Vi5ZkzJTJf5wUAiI9rCTddEsjhhTNE1QZZpn6BQHU8a3VuTZ+YkNlPTnkEjtUKSKID/T//r6Wj6QO23W+TtBTJwi5qpZXmoS/+dXy+esWVLKWKsz7iHU93HCLr/nkOXnswMOXLf5yRr6GxSp0b28vLT/bkIOq0Oyr4/FLH8++jbOsaG/OJ7v0K9W/paA7vOvAAMAQbv56tyxUkIAAAAASUVORK5CYII=\"); }\n.padre {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  width: calc(100vw - 40px); }\n.header {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  width: auto;\n  width: 100%; }\n.articulo {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  width: calc(100vw - 32px);\n  height: calc(100vh - 120px);\n  background: #292929; }\n.auxAside .asideNormal {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  min-width: 181px;\n  width: 181px;\n  height: 100%;\n  overflow-y: scroll; }\n.auxAside .asideNormal > .botonera {\n    width: 181px;\n    background-color: #292929;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n.auxAside > .asideOcultar {\n  -webkit-animation-name: ocultarBotonera;\n          animation-name: ocultarBotonera;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-transition: 1s ease-in-out;\n  transition: 1s ease-in-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 0px;\n  width: 0px; }\n.auxAside > .asideOcultar > .botonera {\n    width: 0px; }\n.auxAside > .asideMostrar {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  -webkit-animation-name: mostrarBotonera;\n          animation-name: mostrarBotonera;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-y: scroll; }\n.auxAside > .asideMostrar > .botonera {\n    width: 181px;\n    background-color: #292929;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n@-webkit-keyframes ocultarBotonera {\n  from {\n    width: 181px; }\n  to {\n    width: 0px; } }\n@keyframes ocultarBotonera {\n  from {\n    width: 181px; }\n  to {\n    width: 0px; } }\n@-webkit-keyframes mostrarBotonera {\n  from {\n    width: 0px; }\n  to {\n    width: 181px; } }\n@keyframes mostrarBotonera {\n  from {\n    width: 0px; }\n  to {\n    width: 181px; } }\n.fondoBlanco {\n  background-color: #FFFFFF;\n  width: 101%;\n  height: 102%;\n  left: 0px;\n  top: 0px;\n  right: 0px; }\n.btn {\n  height: 21.7px;\n  width: 22px;\n  padding: 3px;\n  cursor: pointer; }\n.outlet {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n  height: 100%;\n  width: calc(86% - 181px);\n  background: #FFFFFF; }\n.footer {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  height: 26px;\n  max-height: 28px;\n  width: 100%;\n  border: 1px linear-gradient(0deg, #C9C9C9 0%, #E5E5E5 40%, #F8F8F8 90%); }\n.pendientes {\n  color: #424242;\n  background-color: #1F6A80;\n  height: 34px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 14px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: bold; }\n.articulo, .izquierda, .footer, .aside {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap; }\n@media all and (min-width: 1368px) and (min-height: 770px) {\n  .aside {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto; } }\n@media all and (min-width: 1368px) and (min-height: 770px) {\n  .articulo {\n    -webkit-box-flex: 3;\n        -ms-flex: 3 0;\n            flex: 3 0; }\n  .asideNormal {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .articulo {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .footer {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; } }\n.header {\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#C9C9C9), color-stop(40%, #E5E5E5), to(#F8F8F8));\n  background-image: linear-gradient(0deg, #C9C9C9 0%, #E5E5E5 40%, #F8F8F8 100%); }\n.articulo {\n  background: #292929;\n  height: calc(100vh - 130px);\n  width: 100%; }\n.asideNormal {\n  background: #292929; }\n.aside {\n  background: #292929;\n  height: calc(100vh - 130px); }\n.footer {\n  background-image: -webkit-gradient(linear, left bottom, left top, from(#C9C9C9), color-stop(40%, #E5E5E5), to(#F8F8F8));\n  background-image: linear-gradient(0deg, #C9C9C9 0%, #E5E5E5 40%, #F8F8F8 100%); }\n.pendientes {\n  background: #1F6A80; }\n.container {\n  position: fixed;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  background: rgba(204, 209, 209, 0.6);\n  z-index: 99999;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n.container .loading {\n    width: 460px;\n    height: 240px;\n    background: rgba(255, 255, 255, 0);\n    padding: 20px;\n    position: fixed;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border-radius: 5px; }\n"

/***/ }),

/***/ "./src/app/components/core-container/core-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_electron__ = __webpack_require__("./node_modules/ngx-electron/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoreContainerComponent = /** @class */ (function () {
    function CoreContainerComponent(_electronService, cdRef) {
        var _this = this;
        this._electronService = _electronService;
        this.cdRef = cdRef;
        this.botonera = true;
        this.classAside = "asideNormal";
        this.modalLoading = false;
        this.blockScreen = false;
        this._maximizer = false;
        this._fullScreen = false;
        this.pendientes = 0;
        this.mejoras = 0;
        this.solicitud = 0;
        this.gestion = 0;
        this.catalogos = 0;
        this.configuracion = 0;
        this.incidente = "";
        this.indice = 0;
        document.addEventListener("keydown", function (event) {
            switch (event.key) {
                case "Escape":
                    _this.exitFullScreen();
                    break;
            }
        });
    }
    CoreContainerComponent.prototype.ngOnInit = function () {
        this.modalLoading = false;
        this.blockScreen = false;
    };
    CoreContainerComponent.prototype.ngAfterViewChecked = function () {
        this.cdRef.detectChanges();
    };
    CoreContainerComponent.prototype.ocultarMenu = function () {
        this.ocultarBotonera = !this.ocultarBotonera;
        console.log(this.ocultarBotonera);
        if (this.ocultarBotonera) {
            this.classAside = "asideOcultar";
        }
        else {
            this.classAside = "asideMostrar";
        }
    };
    CoreContainerComponent.prototype.fullScreen = function () {
        this._electronService.remote.getCurrentWindow().setFullScreen(true);
        this._maximizer = true;
    };
    CoreContainerComponent.prototype.minimize = function () {
        var _this = this;
        if (this._electronService.remote.getCurrentWindow().isFullScreen()) {
            this.exitFullScreen();
            this._electronService.remote.getCurrentWindow().setSize(1368, 770);
        }
        setTimeout(function () {
            _this._electronService.remote.getCurrentWindow().minimize();
        }, 500);
    };
    CoreContainerComponent.prototype.maximizer = function () {
        this.exitFullScreen();
        this._maximizer = !this._maximizer;
        if (this._maximizer) {
            this._electronService.remote.getCurrentWindow().maximize();
        }
        else {
            this._electronService.remote.getCurrentWindow().setSize(1368, 770);
        }
    };
    CoreContainerComponent.prototype.close = function () {
        this._electronService.remote.app.quit();
        this._electronService.remote.getCurrentWindow().close();
    };
    CoreContainerComponent.prototype.exitFullScreen = function () {
        if (this._electronService.remote.getCurrentWindow().isFullScreen()) {
            this._electronService.remote.getCurrentWindow().setFullScreen(false);
            this._maximizer = false;
        }
    };
    CoreContainerComponent.prototype.closeModal = function (opc) {
        switch (opc) {
            case 0:
                if (this.modalLoading) {
                    this.modalLoading = false;
                }
                break;
            case 1:
                this.indice--;
                if (this.indice === 0) {
                    if (this.modalLoading) {
                        this.modalLoading = false;
                    }
                }
                break;
        }
    };
    CoreContainerComponent.prototype.openModal = function (opc) {
        switch (opc) {
            case 0:
                if (!this.modalLoading) {
                    this.modalLoading = true;
                }
                break;
            case 1:
                this.indice++;
                if (this.indice === 1) {
                    if (!this.modalLoading) {
                        this.modalLoading = true;
                    }
                }
                break;
        }
    };
    CoreContainerComponent.prototype.enableBlockScreen = function () {
        this.blockScreen = true;
    };
    CoreContainerComponent.prototype.disableBlockScreen = function () {
        this.blockScreen = false;
    };
    CoreContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "pq-core-container",
            template: __webpack_require__("./src/app/components/core-container/core-container.component.html"),
            styles: [__webpack_require__("./src/app/components/core-container/core-container.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_electron__["a" /* ElectronService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], CoreContainerComponent);
    return CoreContainerComponent;
}());



/***/ }),

/***/ "./src/app/components/core-container/pq-botonera/pq-botonera.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"botonera1\">\n  <a  class=\"listaMenus Usr\" style=\"height:60px;\"> <!--(click)=\"redirect('home')\"-->\n    <div class=\"ImgCat\" >\n      <img alt=\"UsrBlanco\" id=\"UsrBlanco\" [src]=\"url_usrPlantilla\" />\n    </div>\n    <div class=\"txtCat\">\n      <Label>{{username}}</Label>\n    </div>\n    <div class=\"flechaCat\">\n      <img class=\"flechaCatGris\" [src]=\"url_ImagenFlechaCatGris\"/>\n      <img class=\"flechaCatBlanca\" [src]=\"url_ImagenFlechaCatBlanca\" />\n    </div>\n  </a>\n\n  <a  [ngClass]=\"listaMenus[0]\" (click)=\"metodoDeDias('pendientes', 0)\"> <!--(click)=\"redirect('pendientes')\"-->\n    <div class=\"ImgCat\">\n      <img alt=\"pendientes\" id=\"pendientes\" [src]=\"url_pendientesPlantilla\" />\n    </div>\n    <div class=\"txtCat\">\n      <Label>PENDIENTES</Label>\n    </div>\n    <div class=\"flechaCat\">\n      <img class=\"flechaCatGris\" [src]=\"url_ImagenFlechaCatGris\"/>\n      <img class=\"flechaCatBlanca\" [src]=\"url_ImagenFlechaCatBlanca\" />\n    </div>\n  </a>\n\n  <a   class=\"listaMenus\" [ngClass]=\"listaMenus[1]\" (click)=\"metodoDeDias('mejoras', 1)\"> <!--(click)=\"redirect('home')\"-->\n    <div class=\"ImgCat\">\n      <img alt=\"mejoras\" id=\"mejoras\" [src]=\"url_mejorasPlantilla\" />\n    </div>\n    <div class=\"txtCat\">\n      <Label>MEJORAS</Label>\n    </div>\n    <div class=\"flechaCat\">\n      <img class=\"flechaCatGris\" [src]=\"url_ImagenFlechaCatGris\"/>\n      <img class=\"flechaCatBlanca\" [src]=\"url_ImagenFlechaCatBlanca\" />\n    </div>\n  </a>\n\n  <a   class=\"listaMenus\" [ngClass]=\"listaMenus[2]\" (click)=\"metodoDeDias('incidente', 2)\"> <!--(click)=\"redirect('home')\"-->\n    <div class=\"ImgCat\">\n      <img alt=\"incidente\" id=\"incidente\" [src]=\"url_incidentePlantilla\" />\n    </div>\n    <div class=\"txtCat\">\n      <Label>INCIDENTE</Label>\n    </div>\n    <div class=\"flechaCat\">\n      <img class=\"flechaCatGris\" [src]=\"url_ImagenFlechaCatGris\"/>\n      <img class=\"flechaCatBlanca\" [src]=\"url_ImagenFlechaCatBlanca\" />\n    </div>\n  </a>\n\n  <a  class=\"listaMenus\" [ngClass]=\"listaMenus[3]\" (click)=\"metodoDeDias('solicitud', 3)\"> <!--(click)=\"redirect('home')\"-->\n    <div class=\"ImgCat\">\n      <img alt=\"solicitud\" id=\"solicitud\" [src]=\"url_solicitudPlantilla\" />\n    </div>\n    <div class=\"txtCat\">\n      <Label>SOLICITUD</Label>\n    </div>\n    <div class=\"flechaCat\">\n      <img class=\"flechaCatGris\" [src]=\"url_ImagenFlechaCatGris\"/>\n      <img class=\"flechaCatBlanca\" [src]=\"url_ImagenFlechaCatBlanca\" />\n    </div>\n  </a>\n\n  <a  class=\"listaMenus\" [ngClass]=\"listaMenus[4]\" (click)=\"metodoDeDias('gestion', 4)\"> <!--(click)=\"redirect('gestion')\"-->\n    <div class=\"ImgCat\">\n      <img alt=\"grafica\" id=\"grafica\" [src]=\"url_gestionPlantilla\" />\n    </div>\n    <div class=\"txtCat\">\n      <Label>GESTIÓN</Label>\n    </div>\n    <div class=\"flechaCat\">\n      <img class=\"flechaCatGris\" [src]=\"url_ImagenFlechaCatGris\"/>\n      <img class=\"flechaCatBlanca\" [src]=\"url_ImagenFlechaCatBlanca\" />\n    </div>\n  </a>\n\n  <a   class=\"listaMenus\" [ngClass]=\"listaMenus[5]\" (click)=\"metodoDeDias('catalogos', 5)\"> <!--(click)=\"redirect('catalogo')\"-->\n    <div class=\"ImgCat\">\n      <img alt=\"catalogos\" id=\"catalogos\" [src]=\"url_catalogosPlantilla\" />\n    </div>\n    <div class=\"txtCat\">\n      <Label>CATÁLOGOS</Label>\n    </div>\n    <div class=\"flechaCat\">\n      <img class=\"flechaCatGris\" [src]=\"url_ImagenFlechaCatGris\"/>\n      <img class=\"flechaCatBlanca\" [src]=\"url_ImagenFlechaCatBlanca\" />\n    </div>\n  </a>\n\n  <a   class=\"listaMenus\" [ngClass]=\"listaMenus[6]\" (click)=\"metodoDeDias('configuracion', 6)\"> <!--(click)=\"redirect('home')\"-->\n    <div class=\"ImgCat\" >\n      <img alt=\"configuracion\" id=\"configuracion\" [src]=\"url_configuracionPlantilla\" />\n    </div>\n    <div class=\"txtCat\">\n      <Label>CONFIGURACIÓN</Label>\n    </div>\n    <div class=\"flechaCat\">\n      <img class=\"flechaCatGris\" [src]=\"url_ImagenFlechaCatGris\"/>\n      <img class=\"flechaCatBlanca\" [src]=\"url_ImagenFlechaCatBlanca\" />\n    </div>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/core-container/pq-botonera/pq-botonera.component.scss":
/***/ (function(module, exports) {

module.exports = "/*ListaCatalogos*/\n.listaMenus {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#333333), to(#1A1A1A));\n  background-image: linear-gradient(-180deg, #333333 0%, #1A1A1A 100%);\n  border: 1px solid black;\n  width: 181px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 10px;\n  height: 35px;\n  text-decoration: none;\n  cursor: pointer; }\n.listaMenus > .Usr {\n    height: 60px; }\n.listaMenus > .ImgCat {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    text-align: left;\n    padding-left: 11px; }\n.listaMenus > .txtCat {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    text-align: center;\n    padding-left: 15px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #FFFFFF;\n    font-size: 11px;\n    font-family: 'Roboto', sans-serif;\n    cursor: pointer; }\n.listaMenus > .flechaCat {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    text-align: right;\n    width: 11px;\n    height: 17px;\n    position: relative; }\n/*Fin ListaCatalogos normal*/\n.listaMenusSeleccionado {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: start;\n      align-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#333333), to(#1A1A1A));\n  background-image: linear-gradient(-180deg, #333333 0%, #1A1A1A 100%);\n  border: 1px solid black;\n  width: 181px;\n  font-family: 'Roboto', sans-serif;\n  font-size: 10px;\n  height: 35px;\n  text-decoration: none;\n  cursor: pointer; }\n.listaMenusSeleccionado > .Usr {\n    height: 60px; }\n.listaMenusSeleccionado > .ImgCat {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    text-align: left;\n    padding-left: 11px; }\n.listaMenusSeleccionado > .txtCat {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    text-align: center;\n    padding-left: 15px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    color: #008895;\n    font-weight: bolder;\n    font-size: 11px;\n    font-family: 'Roboto', sans-serif;\n    cursor: pointer; }\n.listaMenusSeleccionado > .flechaCat {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    text-align: right;\n    width: 11px;\n    height: 17px;\n    position: relative; }\n.botonera1 {\n  text-align: center;\n  text-align: left;\n  background-color: #292929;\n  height: calc(100vh - 130px);\n  width: 183px; }\n/*.aside{\n    height: calc(100vh - 100px);\n  }*/\n/*Estilo de las imagenes.*/\n#pendientes, #mejoras, #UsrBlanco, #incidente, #solicitud, #catalogos, #configuracion {\n  width: 18px;\n  height: 18px; }\n#grafica {\n  width: 21px;\n  height: 19px; }\n.listaMenus .flechaCatGris {\n  visibility: visible; }\n.listaMenusSeleccionado .flechaCatBlanca {\n  visibility: visible;\n  width: 19px; }\n.flechaCatBlanca {\n  width: 12px;\n  height: 18px;\n  position: absolute;\n  right: 7px;\n  top: center; }\n.flechaCatGris {\n  width: 12px;\n  height: 18px;\n  position: absolute;\n  right: 10px;\n  top: center; }\n.flechaCatBlanca {\n  visibility: hidden; }\n.flechaCatGris {\n  visibility: hidden; }\n/* .listaMenus:hover .flechaCatBlanca{\n   visibility: visible;\n   width:19px;\n   height:19px;\n   padding-left: 3px;\n  }*/\n/*  .listaMenus:hover .flechaCatGris{\n    visibility: hidden;\n  }*/\n.listaMenus:focus .txtCat {\n  color: #008895; }\n.listaMenus:focus .flechaCatBlanca {\n  visibility: visible;\n  width: 19px;\n  height: 19px; }\n.listaMenus:focus .flechaCatGris {\n  visibility: hidden; }\nlabel {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/core-container/pq-botonera/pq-botonera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PqBotoneraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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



var PqBotoneraComponent = /** @class */ (function () {
    function PqBotoneraComponent(router) {
        this.router = router;
        this.url_ImagenFlechaCatGris = "./assets/Images/FlechaDerGris.svg";
        this.url_ImagenFlechaCatBlanca = "./assets/Images/Flecha_hover.png";
        this.url_usrPlantilla = "./assets/Images/Usr.svg";
        this.url_pendientesPlantilla = "./assets/Images/Pendientes.svg";
        this.url_mejorasPlantilla = "./assets/Images/Mejoras.svg";
        this.url_incidentePlantilla = "./assets/Images/Incidente.svg";
        this.url_solicitudPlantilla = "./assets/Images/Solicitud.svg";
        this.url_gestionPlantilla = "./assets/Images/Gestion.svg";
        this.url_catalogosPlantilla = "./assets/Images/Catalogos.svg";
        this.url_configuracionPlantilla = "./assets/Images/Configuracion.svg";
        //Variables
        this.ocultarBotonera = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.oculto = false;
        this.listaMenus = new Array(7).fill('listaMenus');
        this.event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PqBotoneraComponent.prototype.ngOnInit = function () {
        this.username = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario();
        this.metodoDeDias('pendientes', 0);
    };
    PqBotoneraComponent.prototype.pruebaPendientes = function () {
        console.log("entre a pendientes");
        this.router.navigate(['/protected/Pendientes']);
    };
    PqBotoneraComponent.prototype.redirect = function (seccion) {
        switch (seccion) {
            case "gestion":
                this.router.navigate(['/protected/gestion']);
                break;
            case "pendientes":
                var nivel = void 0;
                nivel = __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getNivel();
                console.log('Soy fase de container,', nivel);
                switch (nivel) {
                    case 1:
                        this.router.navigate(['/protected/consolaPrioridades']);
                        break;
                    case 6:
                        this.router.navigate(['/protected/embalar/']);
                        break;
                    case 12:
                        this.router.navigate(['/protected/docFaltante']);
                        break;
                    case 31:
                        this.router.navigate(['/protected/inspeccion']);
                        break;
                    case 38:
                        this.router.navigate(['/protected/gestorCuarentena']);
                        break;
                    case 40:
                        this.router.navigate(['/protected/gestorRuta']);
                        break;
                    default:
                        break;
                    case 45:
                        this.router.navigate(['/protected/interfacturacion/']);
                        break;
                    case 46:
                        this.router.navigate(['/protected/receptorMaterial']);
                        break;
                    case 49:
                        this.router.navigate(['/protected/asuntosRegulatorios']);
                        break;
                    case 53:
                        this.router.navigate(['/protected/productosBO']);
                        break;
                }
                break;
            case "catalogo":
                this.router.navigate(['/protected/catalogo']);
                break;
            default:
                this.router.navigate(['/protected/']);
                break;
        }
    };
    PqBotoneraComponent.prototype.efectoAcordeon = function () {
        this.oculto = !this.oculto;
        this.ocultarBotonera.emit(this.oculto);
    };
    PqBotoneraComponent.prototype.ngOnChanges = function (change) {
        console.log(change);
        if (this.iniciarBotonera) {
            this.metodoDeDias('pendientes', 0);
        }
    };
    PqBotoneraComponent.prototype.metodoDeDias = function (boton, index) {
        /*console.log("boton", boton );
        this.listaMenus.fill('listaMenus');
        this.listaMenus[index]='listaMenusSeleccionado';
        this.event.emit(boton);*/
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PqBotoneraComponent.prototype, "ocultarBotonera", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PqBotoneraComponent.prototype, "event", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], PqBotoneraComponent.prototype, "iniciarBotonera", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PqBotoneraComponent.prototype, "pendientes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PqBotoneraComponent.prototype, "mejoras", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PqBotoneraComponent.prototype, "solicitud", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PqBotoneraComponent.prototype, "gestion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PqBotoneraComponent.prototype, "catalogos", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PqBotoneraComponent.prototype, "configuracion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], PqBotoneraComponent.prototype, "incidente", void 0);
    PqBotoneraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-botonera',
            template: __webpack_require__("./src/app/components/core-container/pq-botonera/pq-botonera.component.html"),
            styles: [__webpack_require__("./src/app/components/core-container/pq-botonera/pq-botonera.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PqBotoneraComponent);
    return PqBotoneraComponent;
}());



/***/ }),

/***/ "./src/app/components/core-container/pq-footer/pq-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"flechaFooter\" (click)=\"eventOcultar($event)\">\n  <img alt=\"flechaDerFooter\" *ngIf=\"!boton\" (click)=\"boton = !boton\" class=\"flechaDerFooter\" src=\"./assets/Images/flechaIzquierdaCatProNormal.png\" />\n  <img alt=\"flechaIzqFooter\" *ngIf=\"boton\" (click)=\"boton = !boton\" class=\"flechaIzqFooter\" src=\"./assets/Images/flechaDerechaCatProNormal.png\" />\n</div>\n<div class=\"logoRyndem\">\n    <img alt=\"logoRyndem\" id=\"logoRyndem\" [src]=\"url_logoRyndem\" />\n</div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/core-container/pq-footer/pq-footer.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*footer*/\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n.footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  border: 1px solid #E0E0E0; }\n.flechaFooter {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  text-align: left;\n  position: relative;\n  padding-left: 11px;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -ms-flex-line-pack: end;\n      align-content: flex-end;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.logoRyndem {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  text-align: left;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 97px;\n  height: 25px; }\n#logoRyndem {\n  width: 97px;\n  height: 25px; }\n.flechaIzqFooter, .flechaDerFooter {\n  width: 15px;\n  height: 18px;\n  position: absolute;\n  left: 11px;\n  top: -10px;\n  z-index: auto;\n  cursor: pointer; }\n.flechaDerFooter {\n  visibility: visible; }\n.flechaIzqFooter {\n  visibility: visible; }\n.flechaDerFooter:focus {\n  visibility: visible;\n  z-index: -1; }\n.flechaIzqFooter:focus {\n  visibility: visible;\n  z-index: -1; }\n"

/***/ }),

/***/ "./src/app/components/core-container/pq-footer/pq-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PqFooterComponent; });
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

var PqFooterComponent = /** @class */ (function () {
    function PqFooterComponent() {
        this.ocultarMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.oculto = false;
        this.url_flechaDerFooter = "./assets/Images/Flecha_hover.png";
        this.url_flechaIzqFooter = "./assets/Images/FlechaIzqBlanca.svg";
        this.url_logoRyndem = "./assets/Images/ryndem.svg";
    }
    PqFooterComponent.prototype.ngOnInit = function () {
    };
    PqFooterComponent.prototype.eventOcultar = function () {
        this.oculto = !this.oculto;
        this.ocultarMenu.emit(this.oculto);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], PqFooterComponent.prototype, "ocultarMenu", void 0);
    PqFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-footer',
            template: __webpack_require__("./src/app/components/core-container/pq-footer/pq-footer.component.html"),
            styles: [__webpack_require__("./src/app/components/core-container/pq-footer/pq-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PqFooterComponent);
    return PqFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/core-container/pq-header/pq-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"logoHeader\">\n    <img alt=\"Proquifa Logo\" id=\"logoProquifa\" src=\"./assets/Images/LogoProquifaNet.png\" (dblclick)=\"cerrarSesion()\">\n    <span *ngIf=\"!sistemaActualizado\">&nbsp;Sistema No Actualizado</span>\n  </div>\n  <div class=\"usuarioHeader\">\n    <label>{{nombreFuncion}}</label>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/components/core-container/pq-header/pq-header.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*Header*/\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 50px;\n  width: 100%; }\n.logoHeader {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  text-align: left;\n  padding-left: 11px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #C53645; }\n.usuarioHeader {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      -ms-grid-row-align: auto;\n      align-self: auto;\n  text-align: right;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-weight: normal;\n  font-stretch: expanded;\n  font-family: 'Roboto', sans-serif;\n  padding-right: 20px;\n  font-size: 20px;\n  text-transform: uppercase; }\n/*Fin header*/\n#logoProquifa {\n  width: 158px;\n  height: 35px; }\n"

/***/ }),

/***/ "./src/app/components/core-container/pq-header/pq-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PqHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PqHeaderComponent = /** @class */ (function () {
    function PqHeaderComponent(router) {
        this.router = router;
        this.sistemaActualizado = __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__["a" /* SessionUser */].getInstance().getSistemaActualizado();
        this.url_configuracionPlantilla = './assets/Images/Configuracion.svg';
    }
    PqHeaderComponent.prototype.ngOnInit = function () {
        this.nombreFuncion = __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__["a" /* SessionUser */].getInstance().getUser() && __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__["a" /* SessionUser */].getInstance().getUser().getNombreFuncion() || 'Admin';
    };
    PqHeaderComponent.prototype.cerrarSesion = function () {
        this.router.navigate(['/']);
    };
    PqHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-header',
            template: __webpack_require__("./src/app/components/core-container/pq-header/pq-header.component.html"),
            styles: [__webpack_require__("./src/app/components/core-container/pq-header/pq-header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PqHeaderComponent);
    return PqHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fondoBlanco\" id=\"fondoBlanco\">\n  <div class=\"botonesControl\">\n    <div class=\"botones\">\n      <img class=\"btn\" src=\"./assets/login/fullscreen_gris.svg\" (click)=\"fullScreen()\"/>\n      <img class=\"btn\" src=\"./assets/login/minimize_gris.svg\" (click)=\"minimize()\"/>\n      <img class=\"btn\" src=\"./assets/login/normal_gris.svg\" (click)=\"maximizer()\"/>\n      <img class=\"btn\" src=\"./assets/login/close_gris.svg\" onclick=\"window.close()\"/>\n    </div>\n  </div>\n\n  <div class=\"content-inicio\">\n    <img src=\"assets/login/ryndem.svg\" class=\"inicio\"/>\n  </div>\n\n  <div class=\"login\" id=\"login\">\n\n    <img src=\"assets/login/logo.svg\" class=\"logo\">\n\n    <div id=\"datos\" class=\"loginForm\">\n      <form id=\"formulario\" [formGroup]=\"loginForm\" (keydown.enter)=\"login()\">\n        <input type=\"text\" class=\"usuario\" name=\"usuario\" placeholder=\" USUARIO\" formControlName=\"usuario\"\n               name=\"usuario\" autofocus required/>\n        <br>\n        <br>\n        <input type=\"password\" class=\"password\" name=\"password\" placeholder=\" CONSTRASEÑA\" formControlName=\"password\"\n               required>\n      </form>\n      <div class=\"content\">\n        <hr color=\"black\" class=\"left\"/>\n        <a class=\"btn-verde\" type=\"submit\" (click)=\"login()\">\n          <img type=\"submit\" src=\"assets/login/boton.png\" class=\"botonVerde\"/>\n          <img type=\"submit\" class=\"flechas\" id=\"flechas\"/>\n\n        </a>\n        <hr color=\"black\" class=\"right\"/>\n      </div>\n    </div>\n    <footer>\n      <img src=\"assets/login/ryndem.svg\" class=\"ryndem\" alt=\"Ryndem Studio Logo\"/>\n    </footer>\n  </div>\n</div>\n\n<!--     ALERTA           -->\n<div class=\"w3-container\">\n  <div id=\"id01\" class=\"modal\">\n    <div class=\"modal-content\">\n      <header class=\"header\">\n        <h1> PROQUIFA NET </h1>\n      </header>\n\n      <div class=\"contenido\">\n        <div class=\"datos\">\n\n          <div class=\"alerta\" style=\"padding-top: 7%;box-sizing: border-box;\">\n            <img src=\"assets/Images/alerta.svg\" alt=\"\" class=\"alert\"/>\n          </div>\n\n          <div class=\"alertaTxt\">\n            <p class=\"dato\">{{alertaTxt}} </p>\n            <p class=\"dato\" *ngIf=\"alertaTxt2 != ''\">{{alertaTxt2}} </p>\n          </div>\n        </div>\n\n      </div>\n\n      <footer class=\"footer2\">\n        <a type=\"submit\" class=\"btnOK\" onclick=\"document.getElementById('id01').style.display='none'\">\n          <h2> OK </h2>\n\n        </a>\n\n      </footer>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\nbody {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center; }\n.fondoBlanco {\n  width: 100%;\n  height: 100%; }\n.botonesControl {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -ms-flex-line-pack: end;\n      align-content: flex-end;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  width: calc(100vw - 20px);\n  margin: 6px 0 -19px;\n  -webkit-app-region: drag; }\n.botones {\n  z-index: 1;\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  cursor: pointer; }\n.content-inicio {\n  min-height: calc(90vh);\n  width: 96%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: absolute;\n  -webkit-animation-name: inicio;\n          animation-name: inicio;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  margin: 30px; }\n@-webkit-keyframes inicio {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n@keyframes inicio {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0;\n    display: none; } }\n@-webkit-keyframes login {\n  from {\n    opacity: 0; }\n  to {\n    display: -webkit-box;\n    display: flex; } }\n@keyframes login {\n  from {\n    opacity: 0; }\n  to {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; } }\n#login {\n  -webkit-animation-name: login;\n          animation-name: login;\n  -webkit-animation-duration: 3s;\n  animation-duration: 10s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: none;\n  min-height: calc(97vh);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n  position: relative;\n  /******************************/\n  /******************************/\n  /******************************/ }\n#login img.logo {\n    text-align: center;\n    width: 350px; }\n#login #datos {\n    padding-top: 5px;\n    text-align: center; }\n#login .usuario {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 16.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 id%3D%22Capa_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2226px%22 height%3D%2226px%22 viewBox%3D%220 0 26 26%22 enable-background%3D%22new 0 0 26 26%22 xml%3Aspace%3D%22preserve%22%3E%3Cg%3E%09%3Cpath fill%3D%22%23AEADB3%22 d%3D%22M12.997%2C0.05c4.019%2C0%2C7.27%2C3.254%2C7.27%2C7.268c0%2C4.012-3.251%2C7.266-7.27%2C7.266%09%09c-4.012%2C0-7.265-3.254-7.265-7.266C5.732%2C3.304%2C8.985%2C0.05%2C12.997%2C0.05%22%2F%3E%09%3Cpath fill%3D%22%23AEADB3%22 d%3D%22M18.659%2C14.43c-1.305%2C1.172-2.979%2C1.945-4.819%2C2.127l-1.647%2C0.004c-1.854-0.178-3.539-0.953-4.851-2.131%09%09c-4.037%2C2.145-6.805%2C6.508-6.837%2C11.553h24.992C25.466%2C20.938%2C22.694%2C16.574%2C18.659%2C14.43z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n    background-repeat: no-repeat;\n    background-position: 1px center;\n    padding: 0 0 0 20px;\n    width: 300px;\n    height: 40px;\n    background-color: #EDEEF0;\n    border: 3px solid #BCBDBF;\n    border-radius: 5px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 15px;\n    text-indent: 12px; }\n#login .password {\n    background-image: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22utf-8%22%3F%3E%3C!-- Generator%3A Adobe Illustrator 16.0.0%2C SVG Export Plug-In . SVG Version%3A 6.00 Build 0)  --%3E%3C!DOCTYPE svg PUBLIC %22-%2F%2FW3C%2F%2FDTD SVG 1.1%2F%2FEN%22 %22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%3Csvg version%3D%221.1%22 id%3D%22Capa_1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22 x%3D%220px%22 y%3D%220px%22%09 width%3D%2226px%22 height%3D%2226px%22 viewBox%3D%220 0 26 26%22 enable-background%3D%22new 0 0 26 26%22 xml%3Aspace%3D%22preserve%22%3E%3Cpath fill%3D%22%23AEADB3%22 d%3D%22M22.53%2C10.515h-0.563V8.149c0-4.376-3.869-8.03-8.704-8.108c-0.13-0.001-0.395-0.001-0.526%2C0%09C7.9%2C0.119%2C4.032%2C3.772%2C4.032%2C8.149v2.366H3.467c-0.865%2C0-1.574%2C0.804-1.574%2C1.795v11.865c0%2C0.991%2C0.709%2C1.803%2C1.574%2C1.803H22.53%09c0.868%2C0%2C1.576-0.812%2C1.576-1.803V12.31C24.106%2C11.319%2C23.398%2C10.515%2C22.53%2C10.515L22.53%2C10.515z M18.255%2C10.515H7.743V8.149%09c0-2.607%2C2.36-4.76%2C5.256-4.76c2.897%2C0%2C5.256%2C2.153%2C5.256%2C4.76V10.515z M18.255%2C10.515%22%2F%3E%3C%2Fsvg%3E\");\n    background-repeat: no-repeat;\n    background-position: 1px center;\n    padding: 0 0 0 20px;\n    width: 300px;\n    height: 40px;\n    background-color: #EDEEF0;\n    border: 3px solid #BCBDBF;\n    border-radius: 5px;\n    font-family: 'Roboto', sans-serif;\n    font-size: 15px;\n    text-indent: 10px; }\n#login a.btn-verde {\n    position: relative;\n    height: 100px;\n    width: 100px;\n    border-radius: 50%;\n    border: 0 solid #fff;\n    display: -webkit-inline-box;\n    padding-top: 20px;\n    text-align: center; }\n#login .content {\n    text-align: center; }\n#login .left {\n    position: relative;\n    height: 3px;\n    width: 95px;\n    top: 80px;\n    left: -114px; }\n#login .right {\n    position: relative;\n    height: 3px;\n    width: 95px;\n    bottom: 61px;\n    left: 112px; }\n#login img.botonVerde {\n    position: absolute;\n    padding: 0;\n    cursor: pointer;\n    z-index: 1; }\n#login img.flechas {\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%2220.78mm%22 height%3D%2216.62mm%22 viewBox%3D%220 0 58.9 47.11%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23fff%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Ctitle%3Esin over%3C%2Ftitle%3E%3Cg id%3D%22Capa_2%22 data-name%3D%22Capa 2%22%3E%3Cg id%3D%22Capa_1-2%22 data-name%3D%22Capa 1%22%3E%3Cpath class%3D%22cls-1%22 d%3D%22M47.3%2C7.66C36.6-3%2C22-2.14%2C11.5%2C8L5.2%2C1.66a1%2C1%2C0%2C0%2C0-1.3-.2c-.5.2-.9.5-.9.9L0%2C27.06a1.28%2C1.28%2C0%2C0%2C0%2C.4%2C1.1%2C1.28%2C1.28%2C0%2C0%2C0%2C1.1.4l24.7-3c.4%2C0%2C.7-.4.9-.9a1.37%2C1.37%2C0%2C0%2C0-.2-1.3l-6.3-6.3c13.7-13.5%2C23.7-9.5%2C26.6-9.2C47.7%2C8%2C47.6%2C8%2C47.3%2C7.66Z%22%2F%3E%3Cpath class%3D%22cls-1%22 d%3D%22M11.7%2C39.46c10.7%2C10.7%2C25.3%2C9.8%2C35.7-.3l6.3%2C6.3a1%2C1%2C0%2C0%2C0%2C1.3.2c.5-.2.9-.5.9-.9l3-24.7a1.38%2C1.38%2C0%2C0%2C0-1.5-1.5l-24.7%2C3c-.4%2C0-.7.4-.9.9a1.37%2C1.37%2C0%2C0%2C0%2C.2%2C1.3l6.3%2C6.3c-13.6%2C13.5-23.5%2C9.6-26.4%2C9.3C11.3%2C39.16%2C11.4%2C39.16%2C11.7%2C39.46Z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E\");\n    background-repeat: no-repeat;\n    background-size: 43px 43px;\n    position: relative;\n    cursor: pointer;\n    padding: 20px 22px;\n    border-radius: 13%;\n    top: 26px;\n    left: 27px;\n    z-index: 1; }\n#login img.flechas:hover {\n    background-image: url('flechitasHover.3893db1898c4f3a0b87b.svg');\n    background-repeat: no-repeat;\n    background-size: 58px 50px;\n    position: relative;\n    top: 22px;\n    left: 20px;\n    padding: 21px 26px; }\n#login .flechas:active {\n    top: 25px;\n    left: 25px;\n    -webkit-animation-name: girando;\n            animation-name: girando;\n    animation-name: girando;\n    -webkit-animation-duration: 0.35s;\n            animation-duration: 0.35s;\n    -webkit-animation-play-state: running;\n            animation-play-state: running;\n    -webkit-transition-timing-function: cubic-bezier();\n            transition-timing-function: cubic-bezier(); }\n@-webkit-keyframes girando {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes girando {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\nfooter {\n  bottom: -5px;\n  position: absolute;\n  text-align: center;\n  width: 100%; }\n@media (min-height: 700px) {\n  img.ryndem {\n    position: relative;\n    text-align: center;\n    width: 100px;\n    height: 25px; } }\n@media (min-height: 1200px) {\n  img.ryndem {\n    position: relative;\n    text-align: center;\n    width: 169px;\n    height: 57px; } }\n.modal {\n  z-index: 3;\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(238, 238, 238, 0.8);\n  font-family: 'Roboto', sans-serif; }\n.modal-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  margin: auto;\n  text-align: center;\n  background-color: white;\n  position: relative;\n  padding: 0;\n  outline: 0;\n  max-width: 630px;\n  width: 630px;\n  height: 385px;\n  max-height: 385px;\n  color: black;\n  border: 1px solid #008894;\n  border-radius: 20px;\n  font-family: 'Roboto', sans-serif; }\n.header {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  background-color: #008894;\n  border: 1px solid #008894;\n  border-radius: 19px 19px 0 0;\n  color: white;\n  font-family: 'Novecento';\n  font-weight: bold;\n  font-size: 27px;\n  height: 55px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 0 15px; }\n.header h1 {\n    color: white;\n    font-size: 25px;\n    font-weight: bold; }\n.contenido {\n  -webkit-box-ordinal-group: 2;\n  -ms-flex-order: 1;\n      order: 1;\n  -webkit-box-flex: 1;\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  width: 100%;\n  height: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n  -ms-flex-align: stretch;\n      align-items: stretch;\n  color: #424242; }\n.footer2 {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  -ms-flex-item-align: stretch;\n      align-self: stretch;\n  height: 20%;\n  padding-left: 0;\n  padding-right: 4%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.footer2 .btnOK {\n    width: 170px;\n    height: 30px;\n    background-color: #008A98;\n    border-color: #008A98;\n    text-align: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n.footer2 h2 {\n    font-family: 'Roboto';\n    font-size: 21px;\n    font-weight: bold;\n    color: white;\n    padding-top: 1.8%;\n    cursor: pointer; }\n.datos {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -ms-flex-line-pack: stretch;\n      align-content: stretch;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  height: 40%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.datos > p {\n    font-family: 'Roboto';\n    font-weight: bold;\n    font-size: 25px;\n    color: #424242;\n    text-align: center;\n    padding: 10px 0; }\n.alertaTxt {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: auto;\n      align-self: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 18px;\n  padding-top: 7%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n.alertaTxt p {\n    font-family: 'Roboto', sans-serif;\n    font-size: 25px; }\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_comun_comun_service__ = __webpack_require__("./src/app/services/comun/comun.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_electron__ = __webpack_require__("./node_modules/ngx-electron/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, _login, _electronService) {
        var _this = this;
        this.router = router;
        this._login = _login;
        this._electronService = _electronService;
        this.appVersion = __webpack_require__("./package.json").version;
        this.usuario = '';
        this.inicio = 0;
        this.alertaTxt2 = '';
        this._maximizer = false;
        this._fullScreen = false;
        document.addEventListener('keydown', function (event) {
            switch (event.key) {
                case 'Escape':
                    _this.exitFullScreen();
                    break;
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormGroup */]({
            'usuario': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */](this.usuario, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* Validators */].minLength(1)]),
            'password': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["l" /* Validators */].minLength(1)])
        });
        this._login.obtenerUltimaVersion().subscribe(function (data) {
            var sistema = data.current;
            if (sistema.version != _this.appVersion) {
                _this.alertaTxt = 'Existe una nueva versión del sistema';
                _this.alertaTxt2 = 'Favor de consultar a soporte';
                document.getElementById('id01').style.display = 'flex';
                __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* SessionUser */].getInstance().setSistemaActualizado(false);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* SessionUser */].getInstance().setSistemaActualizado(true);
            }
        }, function (error) {
            console.log('Error:', error);
        });
        this.fullScreen();
    };
    LoginComponent.prototype.login = function (_login) {
        var _this = this;
        var verificarUsuario = this.loginForm.get('usuario').value;
        var verificarContraseña = this.loginForm.get('password').value;
        if (verificarUsuario != '' && verificarContraseña != '') {
            this._login.login(verificarUsuario, verificarContraseña).subscribe(function (data) {
                document.getElementById('fondoBlanco').style.background = 'url(\'../../assets/Images/fondogris.png\')';
                __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* SessionUser */].getInstance().setUser(data.current);
                console.log();
                console.log('uno ', data);
                var usuarioCorrecto = false;
                if (data.current.usuario == 'Administrador') {
                    usuarioCorrecto = true;
                }
                else {
                    if (data.current.fase > 0) {
                        switch (data.current.nivel) {
                            case 1:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/consolaPrioridades']);
                                // this.router.navigate(['protected/consolaEnvio']);
                                break;
                            case 3:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 4:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 5:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 6:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/embalar/']);
                                break;
                            case 8:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 9:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 10:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 12:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/docFaltante']);
                                break;
                            case 13:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 14:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 15:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 16:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 18:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 19:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 20:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 21:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 22:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 23:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 24:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 31:
                                usuarioCorrecto = true;
                                // this.router.navigate(['/protected/']);
                                _this.router.navigate(['/protected/inspeccion/']);
                                break;
                            case 33:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 34:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 36:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 37:
                                console.log('**** usuario *****', data.current.usuario);
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 38:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/gestorCuarentena']);
                                break;
                            case 39:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 40:
                            case 46:
                                if (data.current.idFuncion == 36) {
                                    usuarioCorrecto = true;
                                    _this.router.navigate(['/protected/gestorRuta/']);
                                }
                                else {
                                    usuarioCorrecto = true;
                                    _this.router.navigate(['/protected/receptorMaterial/']);
                                }
                                break;
                            case 42:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 45:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/interfacturacion/']);
                                break;
                            case 47:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/']);
                                break;
                            case 49:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/asuntosRegulatorios']);
                                break;
                            case 53:
                                usuarioCorrecto = true;
                                _this.router.navigate(['/protected/productosBO']);
                                break;
                        }
                    }
                    else {
                        usuarioCorrecto = false;
                        console.log('No hay datos', data);
                    }
                }
            }, function (error) {
                document.getElementById('id01').style.display = 'flex';
                _this.alertaTxt = 'Usuario o contraseña inválida';
                console.log(error);
            });
        }
        else {
            document.getElementById('id01').style.display = 'flex';
            this.alertaTxt = 'Llenar todos los campos';
        }
    };
    LoginComponent.prototype.fullScreen = function () {
        this._electronService.remote.getCurrentWindow().setFullScreen(true);
        this._maximizer = true;
    };
    LoginComponent.prototype.minimize = function () {
        var _this = this;
        if (this._electronService.remote.getCurrentWindow().isFullScreen()) {
            this.exitFullScreen();
            this._electronService.remote.getCurrentWindow().setSize(1368, 770);
        }
        setTimeout(function () {
            _this._electronService.remote.getCurrentWindow().minimize();
        }, 500);
        ;
    };
    LoginComponent.prototype.maximizer = function () {
        this.exitFullScreen();
        this._maximizer = !this._maximizer;
        if (this._maximizer) {
            this._electronService.remote.getCurrentWindow().maximize();
        }
        else {
            this._electronService.remote.getCurrentWindow().setSize(1368, 770);
        }
    };
    LoginComponent.prototype.close = function () {
        this._electronService.remote.app.quit();
        this._electronService.remote.getCurrentWindow().close();
    };
    LoginComponent.prototype.exitFullScreen = function () {
        if (this._electronService.remote.getCurrentWindow().isFullScreen()) {
            this._electronService.remote.getCurrentWindow().setFullScreen(false);
            this._maximizer = false;
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_comun_comun_service__["a" /* ComunService */], __WEBPACK_IMPORTED_MODULE_5_ngx_electron__["a" /* ElectronService */]])
    ], LoginComponent);
    return LoginComponent;
}()); // fin class



/***/ }),

/***/ "./src/app/components/shared/tarjeta-rutas/tarjeta-rutas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"tarjetaRutas\">\n  <div class=\"listaEventos\" (click)=\"botonEntrega = !botonEntrega\">\n    <div class=\"tipoEvento\">\n      <img id=\"entrega\" *ngIf=\"!botonEntrega\" [src]=\"btnEntrega\"/>\n      <img id=\"entregaGris\" *ngIf=\"botonEntrega\" [src]=\"btnEntregaGris\"/>\n      <label>Entrega</label>\n    </div>\n    <div class=\"accion\" (hover)=\"botonEntrega = !botonEntrega\">\n      <img id=\"eliminar\" *ngIf=\"!botonEntrega\" [src]=\"btnEliminar\"/>\n      <img id=\"agregar\" *ngIf=\"botonEntrega\" [src]=\"btnAgregar\"/>\n    </div>\n</div>\n\n<div class=\"listaEventos\">\n  <div class=\"tipoEvento\" (click)=\"botonCobro = !botonCobro\">\n    <img id=\"cobro\" *ngIf=\"!botonCobro\" [src]=\"btnCobro\"/>\n    <img id=\"cobroGris\" *ngIf=\"botonCobro\" [src]=\"btnCobroGris\"/>\n    <label>Cobro</label>\n  </div>\n  <div class=\"accion\" (hover)=\"botonCobro = !botonCobro\">\n    <img id=\"eliminar\" *ngIf=\"!botonCobro\" [src]=\"btnEliminar\"/>\n    <img id=\"agregar\" *ngIf=\"botonCobro\" [src]=\"btnAgregar\"/>\n  </div>\n</div>\n\n<div class=\"listaEventos\">\n  <div class=\"tipoEvento\" (click)=\"botonRevision = !botonRevision\">\n    <img id=\"revision\" *ngIf=\"!botonRevision\" [src]=\"btnRevision\"/>\n    <img id=\"revisionGris\" *ngIf=\"botonRevision\" [src]=\"btnRevisionGris\"/>\n    <label>Revisión</label>\n  </div>\n  <div class=\"accion\" (hover)=\"botonRevision = !botonRevision\">\n    <img id=\"eliminar\" *ngIf=\"!botonRevision\" [src]=\"btnEliminar\"/>\n    <img id=\"agregar\" *ngIf=\"botonRevision\" [src]=\"btnAgregar\"/>\n  </div>\n</div>\n\n<div class=\"listaEventos\">\n  <div class=\"tipoEvento\" (click)=\"botonEspecial = !botonEspecial\">\n    <img id=\"eEspecial\" *ngIf=\"!botonEspecial\" [src]=\"btnEspecial\"/>\n    <img id=\"eEspecialGris\" *ngIf=\"botonEspecial\" [src]=\"btnEspecialGris\"/>\n    <label>E.Especial</label>\n  </div>\n  <div class=\"accion\" (hover)=\"botonEspecial = !botonEspecial\">\n    <img id=\"eliminar\" *ngIf=\"!botonEspecial\" [src]=\"btnEliminar\"/>\n    <img id=\"agregar\" *ngIf=\"botonEspecial\" [src]=\"btnAgregar\"/>\n  </div>\n</div>\n\n  <div class=\"listaEventos\">\n  <div class=\"tipoEvento\" (click)=\"botonrMaterial = !botonrMaterial\">\n    <img id=\"rMaterial\" *ngIf=\"!botonrMaterial\" [src]=\"btnRmaterial\"/>\n    <img id=\"rMaterialGris\" *ngIf=\"botonrMaterial\" [src]=\"btnRMaterialGris\"/>\n    <label>R.Material</label>\n  </div>\n  <div class=\"accion\" (hover)=\"botonrMaterial = !botonrMaterial\">\n    <img id=\"eliminar\" *ngIf=\"!botonrMaterial\" [src]=\"btnEliminar\"/>\n    <img id=\"agregar\" *ngIf=\"botonrMaterial\" [src]=\"btnAgregar\"/>\n  </div>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/shared/tarjeta-rutas/tarjeta-rutas.component.scss":
/***/ (function(module, exports) {

module.exports = ".tarjetaRutas {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding: 5px; }\n\n.tipoEvento {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: center;\n      align-self: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  font-size: 10px;\n  font-family: 'Roboto', sans-serif;\n  text-align: center;\n  vertical-align: center;\n  height: 13%;\n  width: 100%;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-top: 14px;\n  cursor: pointer; }\n\n.accion {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  margin-top: 3px; }\n\n.tipoEvento:hover {\n  background-color: #DFF0F1;\n  height: 100%;\n  width: 100%;\n  cursor: pointer; }\n\n.listaEventos:hover #eliminar {\n  visibility: visible;\n  padding-left: 3px; }\n\n.listaEventos:hover #agregar {\n  visibility: visible;\n  padding-left: 3px; }\n\n.listaEventos {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: 10px;\n  width: 20%;\n  cursor: pointer; }\n\n#entrega, #entregaGris {\n  height: 27px;\n  width: 32px; }\n\n#cobro, #cobroGris {\n  height: 27px;\n  width: 31px; }\n\n#revision, #revisionGris {\n  height: 29px;\n  width: 23px; }\n\n#eEspecial, #eEspecialGris {\n  height: 27px;\n  width: 29px; }\n\n#rMaterial, #rMaterialGris {\n  height: 27px;\n  width: 31px; }\n\n#eliminar {\n  height: 13px;\n  width: 13px;\n  visibility: hidden; }\n\n#agregar {\n  height: 13px;\n  width: 13px;\n  visibility: hidden; }\n"

/***/ }),

/***/ "./src/app/components/shared/tarjeta-rutas/tarjeta-rutas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarjetaRutasComponent; });
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

var TarjetaRutasComponent = /** @class */ (function () {
    function TarjetaRutasComponent() {
        this.btnEliminar = "./assets/Images/Configuracion/Rutas/Eliminar.svg";
        this.btnAgregar = "./assets/Images/Configuracion/Rutas/seleccionar.svg";
        this.btnEntrega = "./assets/Images/Configuracion/Rutas/entregaVerde.svg";
        this.btnCobro = "./assets/Images/Configuracion/Rutas/cobroVerde.svg";
        this.btnRevision = "./assets/Images/Configuracion/Rutas/revisionVerde.svg";
        this.btnEspecial = "./assets/Images/Configuracion/Rutas/eEspecialVerde.svg";
        this.btnRmaterial = "./assets/Images/Configuracion/Rutas/rMaterialVerde.svg";
        this.btnEntregaGris = "./assets/Images/Configuracion/Rutas/entregaGris.svg";
        this.btnCobroGris = "./assets/Images/Configuracion/Rutas/cobroGris.svg";
        this.btnRevisionGris = "./assets/Images/Configuracion/Rutas/revisionGris.svg";
        this.btnEspecialGris = "./assets/Images/Configuracion/Rutas/especialGris.svg";
        this.btnRMaterialGris = "./assets/Images/Configuracion/Rutas/r.materialGris.svg";
    }
    TarjetaRutasComponent.prototype.ngOnInit = function () {
    };
    TarjetaRutasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pq-tarjeta-rutas',
            template: __webpack_require__("./src/app/components/shared/tarjeta-rutas/tarjeta-rutas.component.html"),
            styles: [__webpack_require__("./src/app/components/shared/tarjeta-rutas/tarjeta-rutas.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TarjetaRutasComponent);
    return TarjetaRutasComponent;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-cliente.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutasClienteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






///Agregue

var TrabajarRutasClienteService = /** @class */ (function () {
    function TrabajarRutasClienteService(http) {
        this.http = http;
        this.apiURLgetinfoClientes = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "trAlmacen/infoClientes";
    }
    TrabajarRutasClienteService.prototype.infoClientes = function () {
        console.log("+++++++Guia++++");
        var body;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLgetinfoClientes + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    TrabajarRutasClienteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], TrabajarRutasClienteService);
    return TrabajarRutasClienteService;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-clientes/trabajar-rutas-clientes-detalle/trabajar-rutas-clientes-detalle.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutasClienteDetalleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






///Agregue

var TrabajarRutasClienteDetalleService = /** @class */ (function () {
    function TrabajarRutasClienteDetalleService(http) {
        this.http = http;
        this.apiURLgetObtenerPackingListClient = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "trAlmacen/obtenerPackingListClient";
        this.apiURLgetFinalizarEjecutarRutaAlmacen = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "trAlmacen/finalizarEjecutarRutaAlmacen";
        this.apiURLuploadFile = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "trAlmacen/uploadFile/";
    }
    TrabajarRutasClienteDetalleService.prototype.obtenerPackingListClient = function (idcliente) {
        console.log("+++++++Guia++++");
        var body = idcliente;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLgetObtenerPackingListClient + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    TrabajarRutasClienteDetalleService.prototype.finalizarEjecutarRutaAlmacen = function (infoContac) {
        var body = JSON.stringify(infoContac);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLgetFinalizarEjecutarRutaAlmacen + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error ");
        });
    };
    TrabajarRutasClienteDetalleService.prototype.uploadFile = function (numPL, obj) {
        var data = new FormData();
        data.append('file', obj[0]);
        // let body = obj;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        // headers.append("Content-Type", 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLuploadFile + '' + numPL, data, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    TrabajarRutasClienteDetalleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], TrabajarRutasClienteDetalleService);
    return TrabajarRutasClienteDetalleService;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio-informacion/trabajar-rutas-envio.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutasEnvioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






///Agregue

var TrabajarRutasEnvioService = /** @class */ (function () {
    function TrabajarRutasEnvioService(http) {
        this.http = http;
        this.apiURLgetRealizarEnvio = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "crearEnvio";
        this.apiURLgetEnviarTrackingNumber = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "enviarTrackingNumber";
        this.apiURLgetEnviarFileGuideShip = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerrArchivo";
        this.apiURLgetRealizarEnvioUps = "https://onlinetools.ups.com/rest/Ship";
        // private apiURLgetRealizarEnvioUps = "https://wwwcie.ups.com/rest/Ship";
        this.apiURLguardarArchivo = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "guardarArchivo";
        this.apiURLgetObtenerArchivoUPS = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerRutaArchivo";
        this.apiURLobtenerObjetivos = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "trEnvio/obtenerObjetivos";
        this.apiURLobtenerMontosTab = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "trEnvio/obtenerMontosTab";
        this.apiURLobtenerInfoGraficas = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "trEnvio/obtenerInfoGraficas";
        this.apiURLobtenerPackingListClient = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "trEnvio/obtenerPackingListClient";
        this.apiURLObtenerEstadisticaUsuarioEnvioPL = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "ObtenerEstadisticaUsuarioEnvioPL"; /*Servicio para consultar las estadisticas de usuario*/
        this.apiURLobtenerTiempoTrabajoEnvio = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerTiempoTrabajoEnvio"; /*Servicio para consultar los datos de la barra de prioridades*/
        this.apiURLRegistrarTrEnvio = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "RegistrarTrEnvio";
        this.apiURLuploadFile = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "/trEnvio/uploadFile/";
    }
    TrabajarRutasEnvioService.prototype.uploadFile = function (numGuia, obj, tipo) {
        var data = new FormData();
        data.append('file', obj[0]);
        // let body = obj;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        // headers.append("Content-Type", 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLuploadFile + '' + numGuia + '/' + tipo, data, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    TrabajarRutasEnvioService.prototype.RegistrarTrEnvio = function (obj) {
        var body = obj;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLRegistrarTrEnvio + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    TrabajarRutasEnvioService.prototype.obtenerTiempoTrabajoEnvio = function () {
        //let body = datosUsuario;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerTiempoTrabajoEnvio + '', options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    TrabajarRutasEnvioService.prototype.ObtenerEstadisticaUsuarioEnvioPL = function (datosUsuario) {
        var body = datosUsuario;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLObtenerEstadisticaUsuarioEnvioPL + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    TrabajarRutasEnvioService.prototype.getRealizarEnvioUps = function (info_envio_ups) {
        var body = info_envio_ups;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLgetRealizarEnvioUps, body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error ");
        });
    };
    TrabajarRutasEnvioService.prototype.getRealizarEnvioFedex = function (contac) {
        var body = JSON.stringify(contac);
        console.log("+++++++getRealizarEnvioFedex++++");
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLgetRealizarEnvio + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error ");
        });
    };
    TrabajarRutasEnvioService.prototype.obtenerTrackingNumber = function () {
        console.log("+++++++++++");
        var body;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLgetEnviarTrackingNumber + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    TrabajarRutasEnvioService.prototype.enviarFileGuideShip = function () {
        console.log("+++++++Guia++++");
        var body;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLgetEnviarFileGuideShip + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    TrabajarRutasEnvioService.prototype.guardaEtiquetaUPS = function (archivo) {
        console.log("***************ARCHIVO**********");
        console.log(archivo);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLguardarArchivo + "", archivo, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    TrabajarRutasEnvioService.prototype.obtenerArchivoUPS = function () {
        console.log("++++Ruta guia ups+++++++");
        var body;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLgetObtenerArchivoUPS + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    TrabajarRutasEnvioService.prototype.obtenerObjetivos = function () {
        console.log("++++obtenerObjetivos+++++++");
        var body;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLobtenerObjetivos + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    TrabajarRutasEnvioService.prototype.obtenerMontosTab = function () {
        console.log("++++obtenerMontosTab+++++++");
        var body;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLobtenerMontosTab + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    TrabajarRutasEnvioService.prototype.obtenerInfoGrafica = function () {
        console.log("++++obtenerInfoGrafica+++++++");
        var body;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLobtenerInfoGraficas + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    TrabajarRutasEnvioService.prototype.obtenerPackingListClient = function () {
        console.log("++++obtenerPackingListClient+++++++");
        var body;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLobtenerPackingListClient + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    TrabajarRutasEnvioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], TrabajarRutasEnvioService);
    return TrabajarRutasEnvioService;
}());



/***/ }),

/***/ "./src/app/components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrabajarRutaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






///Agregue

var TrabajarRutaService = /** @class */ (function () {
    function TrabajarRutaService(http) {
        this.http = http;
        this.apiURLobtenerObjetivos = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "trAlmacen/obtenerObjetivos";
        this.apiURLobtenerInfoGraficas = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "trAlmacen/obtenerInfoGraficas";
        this.apiURLobtenerMontosTab = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "trAlmacen/obtenerMontosTab";
        this.apiURLObtenerEstadisticaUsuarioPL = __WEBPACK_IMPORTED_MODULE_3__app_services_session_session_service__["a" /* SessionUser */].getInstance().getIP() + "ObtenerEstadisticaUsuarioPL"; /*Servicio para consultar las estadisticas de usuario*/
    }
    TrabajarRutaService.prototype.ObtenerEstadisticaUsuarioPL = function (usuario) {
        var body = usuario;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLObtenerEstadisticaUsuarioPL + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    TrabajarRutaService.prototype.obtenerObjetivos = function () {
        console.log("+++++++Guia++++");
        var body;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLobtenerObjetivos + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    TrabajarRutaService.prototype.obtenerMontosTab = function () {
        console.log("++++ObtenerObjetivos+++++++");
        var body;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLobtenerMontosTab + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    TrabajarRutaService.prototype.obtenerInfoGraficas = function () {
        console.log("+++++++Guia++++");
        var body;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLobtenerInfoGraficas + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    TrabajarRutaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], TrabajarRutaService);
    return TrabajarRutaService;
}());



/***/ }),

/***/ "./src/app/components/vendedor/vendedor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"padre\">\n  <div style=\"position: relative; display: flex; background: #E6E6E6;\" class=\"aux\">\n    <aside [ngClass]=\"classAsideMenu\">\n      <div class=\"articulo\" *ngIf=\"!ocultarAcor\">\n       <!-- <pn-menu-seccion (click)=\"regresarVista()\" [pendiente]=\"totalPendientes\" [items]=\"itemsMenu\" [titulo]=\"'VENDEDOR'\" [vistaInicialActiva]=\"vistaInicialActiva\"\n          style=\"width: 100%\" *ngIf=\"vistaInicialActiva\"></pn-menu-seccion>-->\n        <!-- <pn-menu-seccion [pendiente]=\"totalPendientes\" [vistaInicialActiva]=\"vistaInicialActiva\" style=\"width: 100%\" *ngIf=\"!vistaInicialActiva\"></pn-menu-seccion> -->\n      </div>\n    </aside>\n    <div style=\"position: absolute; position: absolute; padding-top: 352px;right: 0\">\n      <img class=\"img\" src='./assets/Images/flecha_cuadro.svg' *ngIf=\"!ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n      <img class=\"img\" src='./assets/Images/flecha_mostrar.svg' *ngIf=\"ocultarAcor\" (click)=\"mostarOcultarAcordeon()\" />\n    </div>\n\n  </div>\n  <div class=\"area\" style=\"width:100%; height:100%;overflow: scroll;\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/vendedor/vendedor.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*Mesa de Trabajo*/\n/* Background*/\n/*Semaforización de Urgencia de Pendientes*/\n/*Proquifa*/\n/*BotónPresionado*/\n/*General*/\n/*\n * Typography\n * ========================================================================== */\n/*\n * Media queries breakpoints\n * ========================================================================== */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/*\n  * Components\n  * ========================================================================== */\n/* - Barra de navegación - */\n/* Variable base global para el tamaño de fuente: 9pt*/\n/* ------------------------------------- */\n/* ------------Mixin de Flex------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----------Mixin de Fonts------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------Mixin Variados----------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -------Mixin de Media Queries-------- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* -----Manejo de tamaño de fuentes----- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* ------------ Componentes ------------ */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Animaciones y Transisciones  --- */\n/* ------------------------------------- */\n/* ------------------------------------- */\n/* --- Tooltip --- */\n/* ------------------------------------- */\n.padre {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n.aux .asideNormalMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  min-width: 181px;\n  width: 321px;\n  height: 100%;\n  overflow-y: scroll; }\n.aux .asideNormalMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n.aux > .asideOcultarMenu {\n  -webkit-animation-name: ocultarMenu;\n          animation-name: ocultarMenu;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s;\n  -webkit-transition: 1s ease-in-out;\n  transition: 1s ease-in-out;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  min-width: 0px;\n  width: 0px; }\n.aux > .asideOcultarMenu > .articulo {\n    width: 0px; }\n.aux > .asideMostrarMenu {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  -ms-flex-item-align: stretch;\n      -ms-grid-row-align: stretch;\n      align-self: stretch;\n  -webkit-animation-name: mostrarMenu;\n          animation-name: mostrarMenu;\n  -webkit-animation-duration: 0.7s;\n          animation-duration: 0.7s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow-y: scroll; }\n.aux > .asideMostrarMenu > .articulo {\n    width: 321px;\n    background-color: #E6E6E6;\n    float: left;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 0 auto;\n            flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n@-webkit-keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@keyframes ocultarMenu {\n  from {\n    min-width: 321px; }\n  to {\n    width: 0px; } }\n@-webkit-keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n@keyframes mostrarMenu {\n  from {\n    width: 0px; }\n  to {\n    width: 321px; } }\n"

/***/ }),

/***/ "./src/app/components/vendedor/vendedor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendedorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ventas_visitas_visita_cliente_service__ = __webpack_require__("./src/app/services/ventas/visitas/visita-cliente.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class_Parametros_class__ = __webpack_require__("./src/app/class/Parametros.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VendedorComponent = /** @class */ (function () {
    function VendedorComponent(_visitaClienteService) {
        this._visitaClienteService = _visitaClienteService;
        this.vistaInicialActiva = true;
        this.classAsideMenu = "asideNormalMenu";
        this.totalPendientes = 0;
        this.parametros = new __WEBPACK_IMPORTED_MODULE_2__class_Parametros_class__["a" /* Parametros */]();
        this.itemsMenu = [
            { nombre: "Requisición Móvil", tipo: "flecha", valor: 0, url: "" },
            { nombre: "Pool de Visitas", tipo: "valor", valor: 0, url: "poolVisitas" },
            { nombre: "Planificar Sprint", tipo: "valor", valor: 0, url: "planificarSprint" },
            { nombre: "Agendar Visita", tipo: "valor", valor: 0, url: "agendarVisita" },
            { nombre: "Reportar Visita", tipo: "valor", valor: 0, url: "reportarVisita" },
            { nombre: "Controlar Pendientes", tipo: "valor", valor: 0, url: "controlarPendientes" },
            { nombre: "Controlar Acciones", tipo: "valor", valor: 0, url: "controlarAcciones" }
        ];
    }
    VendedorComponent.prototype.ngOnInit = function () {
        //console.log(SessionUser.getInstance().getUser().idEmpleado);
        var _this = this;
        this.parametros.idUsuario = 206;
        this._visitaClienteService.pendientesVisitaCliente(this.parametros).subscribe(function (data) {
            console.log("Menu lateral");
            console.log(data.current);
            _this.itemsMenu[1].valor = data.current[0].split("/")[1];
            _this.itemsMenu[2].valor = data.current[1].split("/")[1];
            _this.itemsMenu[3].valor = data.current[3].split("/")[1];
            _this.itemsMenu[4].valor = data.current[5].split("/")[1];
            _this.itemsMenu[5].valor = data.current[7].split("/")[1];
            _this.itemsMenu[6].valor = data.current[8].split("/")[1];
        }, function (error) {
            console.log(error);
        });
    };
    VendedorComponent.prototype.regresarVista = function () {
        this.vistaInicialActiva = true;
        //this.filtrarDias('hoy');
        this.iniciarBotonera = true;
    };
    VendedorComponent.prototype.mostarOcultarAcordeon = function () {
        this.ocultarAcor = !this.ocultarAcor;
        if (this.ocultarAcor) {
            this.classAsideMenu = "asideOcultarMenu";
        }
        else {
            this.classAsideMenu = "asideMostrarMenu";
        }
    };
    VendedorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "pn-vendedor",
            template: __webpack_require__("./src/app/components/vendedor/vendedor.component.html"),
            styles: [__webpack_require__("./src/app/components/vendedor/vendedor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_ventas_visitas_visita_cliente_service__["a" /* VisitaClienteService */]])
    ], VendedorComponent);
    return VendedorComponent;
}());



/***/ }),

/***/ "./src/app/pipes/accounting/accounting.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__ = __webpack_require__("./src/app/pipes/accounting/accounting.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["d" /* AccountingPipe */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["b" /* AccountingFormatNumber */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["a" /* AccountingFormatMoney */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["f" /* DateFormatDot */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["g" /* DateFormatDot2 */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["k" /* dateFormatSlash */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["h" /* DateFormatSlashHour */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["j" /* dateFormatFull */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["e" /* Code */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["i" /* LineBreak */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["c" /* AccountingFormatNumber2Decimal */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["l" /* dateFormatSlashNumber */]
            ],
            providers: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["d" /* AccountingPipe */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["b" /* AccountingFormatNumber */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["a" /* AccountingFormatMoney */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["f" /* DateFormatDot */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["g" /* DateFormatDot2 */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["k" /* dateFormatSlash */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["h" /* DateFormatSlashHour */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["j" /* dateFormatFull */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["e" /* Code */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["i" /* LineBreak */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["c" /* AccountingFormatNumber2Decimal */],
                __WEBPACK_IMPORTED_MODULE_2__accounting_pipe__["l" /* dateFormatSlashNumber */]
            ]
        })
    ], PipeModule);
    return PipeModule;
}());



/***/ }),

/***/ "./src/app/pipes/accounting/accounting.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AccountingPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AccountingFormatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AccountingFormatNumber2Decimal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountingFormatMoney; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DateFormatDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return DateFormatDot2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return dateFormatSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return dateFormatSlashNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DateFormatSlashHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return dateFormatFull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Code; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LineBreak; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_accounting__ = __webpack_require__("./node_modules/accounting/accounting.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_accounting___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_accounting__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AccountingPipe = /** @class */ (function () {
    function AccountingPipe() {
    }
    AccountingPipe.prototype.transform = function (value, args) {
        return null;
    };
    AccountingPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'accounting'
        })
    ], AccountingPipe);
    return AccountingPipe;
}());

var AccountingFormatNumber = /** @class */ (function () {
    function AccountingFormatNumber() {
    }
    AccountingFormatNumber.prototype.transform = function (numberToFormat) {
        return __WEBPACK_IMPORTED_MODULE_1_accounting__["formatNumber"](numberToFormat);
    };
    AccountingFormatNumber = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'acFormatNumber'
        })
    ], AccountingFormatNumber);
    return AccountingFormatNumber;
}());

var AccountingFormatNumber2Decimal = /** @class */ (function () {
    function AccountingFormatNumber2Decimal() {
    }
    AccountingFormatNumber2Decimal.prototype.transform = function (numberToFormat) {
        return __WEBPACK_IMPORTED_MODULE_1_accounting__["formatNumber"](numberToFormat, 2);
    };
    AccountingFormatNumber2Decimal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'acFormatNumber2decimal'
        })
    ], AccountingFormatNumber2Decimal);
    return AccountingFormatNumber2Decimal;
}());

var AccountingFormatMoney = /** @class */ (function () {
    function AccountingFormatMoney() {
    }
    AccountingFormatMoney.prototype.transform = function (numberToFormat) {
        return __WEBPACK_IMPORTED_MODULE_1_accounting__["formatMoney"](numberToFormat);
    };
    AccountingFormatMoney = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'acFormatMoney'
        })
    ], AccountingFormatMoney);
    return AccountingFormatMoney;
}());

var DateFormatDot = /** @class */ (function () {
    function DateFormatDot() {
    }
    DateFormatDot.prototype.transform = function (dateToFormat) {
        var now = new Date(dateToFormat);
        var date;
        var mes = now.getMonth();
        switch (mes) {
            case 0:
                date = now.getDate() + ' · Enero · ' + now.getFullYear();
                break;
            case 1:
                date = now.getDate() + ' · Febrero · ' + now.getFullYear();
                break;
            case 2:
                date = now.getDate() + ' · Marzo · ' + now.getFullYear();
                break;
            case 3:
                date = now.getDate() + ' · Abril · ' + now.getFullYear();
                break;
            case 4:
                date = now.getDate() + ' · Mayo · ' + now.getFullYear();
                break;
            case 5:
                date = now.getDate() + ' · Junio · ' + now.getFullYear();
                break;
            case 6:
                date = now.getDate() + ' · Julio · ' + now.getFullYear();
                break;
            case 7:
                date = now.getDate() + ' · Agosto · ' + now.getFullYear();
                break;
            case 8:
                date = now.getDate() + ' · Septiembre · ' + now.getFullYear();
                break;
            case 9:
                date = now.getDate() + ' · Octubre · ' + now.getFullYear();
                break;
            case 10:
                date = now.getDate() + ' · Noviembre · ' + now.getFullYear();
                break;
            case 11:
                date = now.getDate() + ' · Diciembre · ' + now.getFullYear();
                break;
            default:
                break;
        }
        return date;
    };
    DateFormatDot = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'dateFormatDot'
        })
    ], DateFormatDot);
    return DateFormatDot;
}());

var DateFormatDot2 = /** @class */ (function () {
    function DateFormatDot2() {
    }
    DateFormatDot2.prototype.transform = function (dateToFormat) {
        var now = new Date(dateToFormat);
        var date;
        var mes = now.getMonth();
        switch (mes) {
            case 0:
                date = now.getDate() + '·Ene·' + now.getFullYear();
                break;
            case 1:
                date = now.getDate() + '·Feb·' + now.getFullYear();
                break;
            case 2:
                date = now.getDate() + '·Mar·' + now.getFullYear();
                break;
            case 3:
                date = now.getDate() + '·Abr·' + now.getFullYear();
                break;
            case 4:
                date = now.getDate() + '·May·' + now.getFullYear();
                break;
            case 5:
                date = now.getDate() + '·Jun·' + now.getFullYear();
                break;
            case 6:
                date = now.getDate() + '·Jul·' + now.getFullYear();
                break;
            case 7:
                date = now.getDate() + '·Ago·' + now.getFullYear();
                break;
            case 8:
                date = now.getDate() + '·Sep·' + now.getFullYear();
                break;
            case 9:
                date = now.getDate() + '·Oct·' + now.getFullYear();
                break;
            case 10:
                date = now.getDate() + '·Nov·' + now.getFullYear();
                break;
            case 11:
                date = now.getDate() + '·Dic·' + now.getFullYear();
                break;
            default:
                break;
        }
        return date;
    };
    DateFormatDot2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'dateFormatDot2'
        })
    ], DateFormatDot2);
    return DateFormatDot2;
}());

var dateFormatSlash = /** @class */ (function () {
    function dateFormatSlash() {
    }
    dateFormatSlash.prototype.transform = function (dateToFormat) {
        if (dateToFormat == undefined || dateToFormat == null) {
            return "Pendiente";
        }
        var now = new Date();
        if (dateToFormat.length == 10) {
            now = new Date(dateToFormat + " 00:00:00");
        }
        else {
            now = new Date(dateToFormat);
        }
        var date;
        var mes = now.getMonth();
        switch (mes) {
            case 0:
                date = now.getDate() + '/Ene/' + now.getFullYear();
                break;
            case 1:
                date = now.getDate() + '/Feb/' + now.getFullYear();
                break;
            case 2:
                date = now.getDate() + '/Mar/' + now.getFullYear();
                break;
            case 3:
                date = now.getDate() + '/Abr/' + now.getFullYear();
                break;
            case 4:
                date = now.getDate() + '/May/' + now.getFullYear();
                break;
            case 5:
                date = now.getDate() + '/Jun/' + now.getFullYear();
                break;
            case 6:
                date = now.getDate() + '/Jul/' + now.getFullYear();
                break;
            case 7:
                date = now.getDate() + '/Ago/' + now.getFullYear();
                break;
            case 8:
                date = now.getDate() + '/Sep/' + now.getFullYear();
                break;
            case 9:
                date = now.getDate() + '/Oct/' + now.getFullYear();
                break;
            case 10:
                date = now.getDate() + '/Nov/' + now.getFullYear();
                break;
            case 11:
                date = now.getDate() + '/Dic/' + now.getFullYear();
                break;
            default:
                break;
        }
        return date;
    };
    dateFormatSlash = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'dateFormatSlash'
        })
    ], dateFormatSlash);
    return dateFormatSlash;
}());

var dateFormatSlashNumber = /** @class */ (function () {
    function dateFormatSlashNumber() {
    }
    dateFormatSlashNumber.prototype.transform = function (dateToFormat) {
        if (dateToFormat == undefined || dateToFormat == null) {
            return "Pendiente";
        }
        var now = new Date();
        if (dateToFormat.length == 10) {
            now = new Date(dateToFormat + " 00:00:00");
        }
        else {
            now = new Date(dateToFormat);
        }
        var date;
        var mes = now.getMonth();
        switch (mes) {
            case 0:
                date = now.getDate() + '/01/' + now.getFullYear();
                break;
            case 1:
                date = now.getDate() + '/02/' + now.getFullYear();
                break;
            case 2:
                date = now.getDate() + '/03/' + now.getFullYear();
                break;
            case 3:
                date = now.getDate() + '/04/' + now.getFullYear();
                break;
            case 4:
                date = now.getDate() + '/05/' + now.getFullYear();
                break;
            case 5:
                date = now.getDate() + '/06/' + now.getFullYear();
                break;
            case 6:
                date = now.getDate() + '/07/' + now.getFullYear();
                break;
            case 7:
                date = now.getDate() + '/08/' + now.getFullYear();
                break;
            case 8:
                date = now.getDate() + '/09/' + now.getFullYear();
                break;
            case 9:
                date = now.getDate() + '/10/' + now.getFullYear();
                break;
            case 10:
                date = now.getDate() + '/11/' + now.getFullYear();
                break;
            case 11:
                date = now.getDate() + '/12/' + now.getFullYear();
                break;
            default:
                break;
        }
        return date;
    };
    dateFormatSlashNumber = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'dateFormatSlashNumber'
        })
    ], dateFormatSlashNumber);
    return dateFormatSlashNumber;
}());

var DateFormatSlashHour = /** @class */ (function () {
    function DateFormatSlashHour() {
    }
    DateFormatSlashHour.prototype.transform = function (dateToFormat) {
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
    DateFormatSlashHour = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'dateFormatSlashHour'
        })
    ], DateFormatSlashHour);
    return DateFormatSlashHour;
}());

var dateFormatFull = /** @class */ (function () {
    function dateFormatFull() {
    }
    dateFormatFull.prototype.transform = function (dateToFormat) {
        var now = new Date(dateToFormat);
        var date;
        var mes = now.getMonth();
        var dayOfWeek = now.getDay();
        var dayName = "";
        switch (dayOfWeek) {
            case 0:
                dayName = "Domingo";
                break;
            case 1:
                dayName = "Lunes";
                break;
            case 2:
                dayName = "Martes";
                break;
            case 3:
                dayName = "Miércoles";
                break;
            case 4:
                dayName = "Jueves";
                break;
            case 5:
                dayName = "Viernes";
                break;
            case 6:
                dayName = "Sábado";
                break;
            default:
                break;
        }
        switch (mes) {
            case 0:
                date = dayName + " " + now.getDate() + ' de Enero del ' + now.getFullYear();
                break;
            case 1:
                date = dayName + " " + now.getDate() + ' de Febrero del ' + now.getFullYear();
                break;
            case 2:
                date = dayName + " " + now.getDate() + ' de Marzo del ' + now.getFullYear();
                break;
            case 3:
                date = dayName + " " + now.getDate() + ' de Abril del ' + now.getFullYear();
                break;
            case 4:
                date = dayName + " " + now.getDate() + ' de Mayo del ' + now.getFullYear();
                break;
            case 5:
                date = dayName + " " + now.getDate() + ' de Junio del ' + now.getFullYear();
                break;
            case 6:
                date = dayName + " " + now.getDate() + ' de Julio del ' + now.getFullYear();
                break;
            case 7:
                date = dayName + " " + now.getDate() + ' de Agosto del ' + now.getFullYear();
                break;
            case 8:
                date = dayName + " " + now.getDate() + ' de Septiembre del ' + now.getFullYear();
                break;
            case 9:
                date = dayName + " " + now.getDate() + ' de Octubre del ' + now.getFullYear();
                break;
            case 10:
                date = dayName + " " + now.getDate() + ' de Noviembre del ' + now.getFullYear();
                break;
            case 11:
                date = dayName + " " + now.getDate() + ' de Diciembre del' + now.getFullYear();
                break;
            default:
                break;
        }
        return date;
    };
    dateFormatFull = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'dateFormatFull'
        })
    ], dateFormatFull);
    return dateFormatFull;
}());

var Code = /** @class */ (function () {
    function Code() {
    }
    Code.prototype.transform = function (codigo) {
        var code;
        if (codigo < 10 && codigo > 0) {
            code = '000' + String(codigo);
        }
        if (codigo < 100 && codigo > 9) {
            code = '00' + String(codigo);
        }
        if (codigo < 1000 && codigo > 99) {
            code = '0' + String(codigo);
        }
        return code;
    };
    Code = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'code'
        })
    ], Code);
    return Code;
}());

var LineBreak = /** @class */ (function () {
    function LineBreak() {
    }
    LineBreak.prototype.transform = function (text) {
        var re = /\|/gi;
        if (text != undefined) {
            return text.replace(re, "\n");
        }
        else {
            return text;
        }
    };
    LineBreak = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'lineBreak'
        })
    ], LineBreak);
    return LineBreak;
}());



/***/ }),

/***/ "./src/app/services/arribo-documento/arribo-documento.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArriboDocumentoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArriboDocumentoService = /** @class */ (function () {
    function ArriboDocumentoService(http) {
        this.http = http;
        this.apiURLdocumentacionFaltante = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'gestorCompras/documentacionFaltante';
        this.apiURLcontactoProveedor = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'gestorCompras/contactoProveedor';
        this.apiURLobtenerProductosFaltantesPorProveedor = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'gestorCompras/obtenerProductosFaltantesPorProveedor';
        this.apiURLuploadFile = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'comun/uploadFile/';
        this.apiURLfinalizarDocumentacionFaltante = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'gestorCompras/finalizarDocumentacionFaltante';
        this.apiURLobtenerTotales = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'gestorCompras/obtenerTotales';
    }
    ArriboDocumentoService.prototype.documentacionFaltante = function (usuario) {
        var body = {
            responsable: usuario
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLdocumentacionFaltante + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ArriboDocumentoService.prototype.contactoProveedor = function (idProveedor) {
        var body = idProveedor;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLcontactoProveedor + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ArriboDocumentoService.prototype.obtenerProductosFaltantesPorProveedor = function (datos) {
        var body = datos;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerProductosFaltantesPorProveedor + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ArriboDocumentoService.prototype.uploadFile = function (obj, nameFile, tipo, fPor) {
        var dataFile = new FormData();
        dataFile.append('file', obj[0]);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLuploadFile + '' + nameFile + '/' + tipo + '/' + fPor + '/' + '', dataFile, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ArriboDocumentoService.prototype.finalizarDocumentacionFaltante = function (datos) {
        var body = datos;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.apiURLfinalizarDocumentacionFaltante + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ArriboDocumentoService.prototype.obtenerTotales = function (idUsuario) {
        var body = idUsuario;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerTotales + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ArriboDocumentoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ArriboDocumentoService);
    return ArriboDocumentoService;
}());



/***/ }),

/***/ "./src/app/services/asuntos-regulatorios/asuntos-regulatorios.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsuntosRegulatoriosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AsuntosRegulatoriosService = /** @class */ (function () {
    function AsuntosRegulatoriosService(http) {
        this.http = http;
        this.apiURLgetPendietesPAP = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "pap/getPendietesPAP";
        this.apiURLcerrarPendietesPAP = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "pap/cerrarPendietesPAP";
        this.apiURLuploadFile = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "pap/uploadFile/";
    }
    AsuntosRegulatoriosService.prototype.getPendietesPAP = function (idUsuario) {
        var body = {
            idUsuario: idUsuario
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLgetPendietesPAP + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    AsuntosRegulatoriosService.prototype.cerrarPendietesPAP = function (obj) {
        var body = obj;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLcerrarPendietesPAP + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    AsuntosRegulatoriosService.prototype.uploadFile = function (obj, idProducto, tipo, fpor) {
        var dataFile = new FormData();
        dataFile.append('file', obj[0]);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        // Se necesita un valor por que no recibe vacios, por ello se agrego el 1
        return this.http.post(this.apiURLuploadFile + '' + idProducto + '/' + tipo + '/' + '1', dataFile, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    AsuntosRegulatoriosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AsuntosRegulatoriosService);
    return AsuntosRegulatoriosService;
}());



/***/ }),

/***/ "./src/app/services/carta-porte/carta-porte.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartaPorteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartaPorteService = /** @class */ (function () {
    function CartaPorteService(http) {
        this.http = http;
        this.apiURLObtenerPendientes = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'obtenerPendientesMensajero';
        this.apiURLObtenerCatMensajeros = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'obtenerInfoMensajero';
        this.apiURLObtenerCatVehiculos = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'obtenerVehiculos';
        this.apiURLGetCatClient = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'obtenerClientesPorMensajero';
        this.apiURLGenerateCartaPorte = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'timbrarCartaPorte';
    }
    CartaPorteService.prototype.obtenerPendientes = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLObtenerPendientes + '', options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CartaPorteService.prototype.obtenerCatMensajeros = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLObtenerCatMensajeros + '', options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CartaPorteService.prototype.obtenerCatVehiculos = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLObtenerCatVehiculos + '', options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CartaPorteService.prototype.getCatClient = function (mensajero) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLGetCatClient + '', mensajero, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CartaPorteService.prototype.generateCartaPorte = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLGenerateCartaPorte + '', data, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CartaPorteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CartaPorteService);
    return CartaPorteService;
}());



/***/ }),

/***/ "./src/app/services/comun/comun.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComunService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ComunService = /** @class */ (function () {
    function ComunService(http) {
        this.http = http;
        this.apiURL = __WEBPACK_IMPORTED_MODULE_1__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'validaUsuario';
        this.token = __WEBPACK_IMPORTED_MODULE_1__session_session_service__["a" /* SessionUser */].getInstance().getToken();
        this.valueVideo = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["b" /* Subject */]();
        this.valueTipoInspeccion = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["b" /* Subject */]();
        this.finalizar = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["b" /* Subject */]();
        this.guardaVideo = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["b" /* Subject */]();
        this.folioVideo = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["b" /* Subject */]();
        this.finalizarEmbalado = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["b" /* Subject */]();
        this.recargar = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["b" /* Subject */]();
        this.videoEmbalar = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["b" /* Subject */]();
        this.usuario = '';
        this.dir = 'http://proquifa.com.mx:51725/SAP/';
        this.apiURLobtenerUltimaVersion = __WEBPACK_IMPORTED_MODULE_1__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'versionSistema';
        this.apiURLobtenerFecha = __WEBPACK_IMPORTED_MODULE_1__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'comun/obtenerFecha';
        this.URL_Generate_Code = __WEBPACK_IMPORTED_MODULE_1__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'generateCode/';
    }
    ComunService.prototype.obtenerUltimaVersion = function () {
        var body = 'ProquifaNet_Angular';
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerUltimaVersion + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ComunService.prototype.login = function (username, password) {
        /* let sha1 = require('sha1') */
        /*   let hashedPassword = sha1(password); */
        console.log('entre al metodo login-service == ', username);
        console.log('entre al metodo login-service == ', password);
        /* ∫ */
        var user = {
            'usuario': username,
            'password': password
        };
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURL + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ComunService.prototype.getYears = function (obj) {
        var body = obj;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerFecha + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ComunService.prototype.obtenerRuta = function (folio, tipo, fPor) {
        var _this = this;
        var ruta;
        var year;
        return new Promise(function (resolve, reject) {
            switch (tipo) {
                case 'PackingList':
                    year = _this.getYearFolio(folio);
                    ruta = _this.dir + 'OrdenDespacho/PackingList/' + year + folio + '.pdf';
                    resolve(ruta);
                    break;
                case 'Imagen':
                    year = _this.getYearFolio(folio);
                    ruta = _this.dir + 'InspeccionOC/ImagenesRechazo/' + year + folio + '.png';
                    resolve(ruta);
                    break;
                case 'Pedidos':
                    year = _this.getYearFolio(folio);
                    ruta = _this.dir + 'Pedidos/' + year + folio + '.pdf';
                    resolve(ruta);
                    break;
                case 'Compra':
                    year = _this.getYearFolio(folio);
                    ruta = _this.dir + 'OrdenesDeCompra/' + year + folio + '-P.pdf';
                    resolve(ruta);
                    break;
                case 'Saldo':
                    year = _this.getYearFolio(folio);
                    ruta = _this.dir + 'SaldoAFavor/' + year + folio + '.pdf';
                    resolve(ruta);
                    break;
                case 'Entregas':
                    year = _this.getYearFolio(folio);
                    ruta = _this.dir + 'RegistroEntregaControlados/' + year + folio + '.pdf';
                    resolve(ruta);
                    break;
                default:
                    var obj = {
                        tipo: tipo,
                        folio: folio,
                        carpeta: fPor
                    };
                    _this.getYears(obj).subscribe(function (data) {
                        ruta = data.current;
                        resolve(data.current);
                    });
                    break;
            }
        });
    };
    ComunService.prototype.getYearFolio = function (folio) {
        var pattern = /\D/gi;
        var year = '';
        var dateActual = new Date();
        if (folio) {
            folio = folio.replace(pattern, '');
            if (parseInt(folio.substring(4, 6)) < parseInt(dateActual.getFullYear().toString().substring(2, 4))) {
                year = '20';
                year += folio.substring(4, 6) + '/';
            }
        }
        return year;
    };
    ComunService.prototype.videoZindex = function (value) {
        this.valueVideo.next(value);
    };
    ComunService.prototype.tipoInspeccion = function (value) {
        this.valueTipoInspeccion.next(value);
    };
    ComunService.prototype.finalizarI = function (value) {
        this.finalizar.next(value);
    };
    ComunService.prototype.guardarVideo = function (value) {
        this.guardaVideo.next(value);
    };
    ComunService.prototype.enviaFolio = function (value) {
        this.folioVideo.next(value);
    };
    ComunService.prototype.finalizarEmb = function (valor) {
        this.finalizarEmbalado.next(valor);
    };
    ComunService.prototype.recargarV = function (valor) {
        this.recargar.next(valor);
    };
    ComunService.prototype.nombreVideoEmbalar = function (valor) {
        this.videoEmbalar.next(valor);
    };
    ComunService.prototype.getQRCode = function (parameter) {
        var body = JSON.stringify(parameter);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.URL_Generate_Code + "getQRCode", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ComunService.prototype.getBarcode = function (parameter) {
        var body = JSON.stringify(parameter);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.URL_Generate_Code + "getBarcode", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ComunService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], ComunService);
    return ComunService;
}()); // fin class



/***/ }),

/***/ "./src/app/services/consola-destruccion/material-destruccion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialDestruccionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MaterialDestruccionService = /** @class */ (function () {
    function MaterialDestruccionService(http) {
        this.http = http;
        this.apiURLobtenerListado = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'prioridades/destruccion/obtenerListado';
        this.apiURLuploadFile = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'comun/subirArchivo/';
        this.apiURLenviarDestruccion = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'prioridades/destruccion/cerrarPendientes';
    }
    MaterialDestruccionService.prototype.obtenerListado = function () {
        var hearder = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        hearder.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: hearder });
        return this.http.post(this.apiURLobtenerListado + '', options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    MaterialDestruccionService.prototype.uploadFile = function (obj, nameFile, tipo, fPor) {
        var dataFile = new FormData();
        dataFile.append('file', obj[0]);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLuploadFile + '' + tipo + '/' + fPor + '/' + nameFile, dataFile, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    MaterialDestruccionService.prototype.enviarDestruccion = function (lst) {
        var body = lst;
        var hearder = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */];
        hearder.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: hearder });
        return this.http.post(this.apiURLenviarDestruccion + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    MaterialDestruccionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MaterialDestruccionService);
    return MaterialDestruccionService;
}());



/***/ }),

/***/ "./src/app/services/consola-envio/consola-envio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsolaEnvioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConsolaEnvioService = /** @class */ (function () {
    function ConsolaEnvioService(http) {
        this.http = http;
        this.apiURLobtenerPrioridadesEnvio = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'prioridades/envio/obtenerPrioridades';
        this.apiURLactualizarPausa = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'prioridades/reanudarEnvio';
    }
    ConsolaEnvioService.prototype.obtenerEnvios = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerPrioridadesEnvio + '', options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ConsolaEnvioService.prototype.actualizarUgencia = function (partidas) {
        var body = partidas;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.apiURLactualizarPausa + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json.error || 'Server error'); });
    };
    ConsolaEnvioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ConsolaEnvioService);
    return ConsolaEnvioService;
}());



/***/ }),

/***/ "./src/app/services/consola-stock/consola-stock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsolaStockService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConsolaStockService = /** @class */ (function () {
    function ConsolaStockService(http) {
        this.http = http;
        this.apiRULobtenerLista = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'prioridades/stock/obtenerPrioridades';
        this.apiURLeliminarStock = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'prioridades/stock/updateStock';
    }
    ConsolaStockService.prototype.obtenerListado = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiRULobtenerLista + '', options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json.error || 'Server error'); });
    };
    ConsolaStockService.prototype.eliminarStock = function (pieza) {
        var body = pieza;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.apiURLeliminarStock + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json.error || 'Server error'); });
    };
    ConsolaStockService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ConsolaStockService);
    return ConsolaStockService;
}());



/***/ }),

/***/ "./src/app/services/consola/consola-prioridades.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsolaPrioridadesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConsolaPrioridadesService = /** @class */ (function () {
    function ConsolaPrioridadesService(http) {
        this.http = http;
        this.apiURLobtenerPrioridades = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'prioridades/obtenerPrioridades';
        this.apiURLactualizarUrgencia = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'prioridades/actualizarUrgencia';
        this.apiURLactualizarPausa = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + '/prioridades/actualizarPausado';
        this.apiURLenableDelivery = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'prioridades/habilitarEntrega';
    }
    ConsolaPrioridadesService.prototype.datosBotonera = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerPrioridades + '', options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ConsolaPrioridadesService.prototype.actualizarUgencia = function (partidas) {
        var body = partidas;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.apiURLactualizarUrgencia + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json.error || 'Server error'); });
    };
    ConsolaPrioridadesService.prototype.actualizarPausado = function (datos) {
        var body = datos;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.apiURLactualizarPausa + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json.error || 'Server error'); });
    };
    ConsolaPrioridadesService.prototype.habilitarEntrega = function (pedido) {
        var body = pedido;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.apiURLenableDelivery + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json.error || 'Server error'); });
    };
    ConsolaPrioridadesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ConsolaPrioridadesService);
    return ConsolaPrioridadesService;
}());



/***/ }),

/***/ "./src/app/services/despachos/gestorRuta/asignar-mensajero.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignarMensajeroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AsignarMensajeroService = /** @class */ (function () {
    function AsignarMensajeroService(http) {
        this.http = http;
        this.key = "AIzaSyCjtEyMAWq3wRg6sN2z4bdb7YDBfIvyaLc";
        this.apiURLdatosGrafica = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "asignarMensajero/datosGrafica";
        this.apiURLobtenerDetalle = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "asignarMensajero/detalle";
        this.apiURLactualizarRuta = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "asignarMensajero/guardar";
        this.apiURLpublicarRuta = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "asignarMensajero/publicar";
        this.apiURLobtenerFacturasFolio = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "asignarMensajero/obtenerFacturasFolio";
        this.apiURLobtenerTotales = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'mensajero/obtenerTotales';
        // private calcularTiempor: String = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=";
        // private calcularCoor: String = "https://maps.googleapis.com/maps/api/geocode/json?address=";
        this.calcularTiempor = "/maps/api/distancematrix/json?origins=";
        this.calcularCoor = "/maps/api/geocode/json?address=";
    }
    AsignarMensajeroService.prototype.datosGrafica = function () {
        var body = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getUser().idEmpleado;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLdatosGrafica + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    AsignarMensajeroService.prototype.obtenerDetalle = function () {
        var body = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getUser().idEmpleado;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLobtenerDetalle + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    AsignarMensajeroService.prototype.actualizarRuta = function (lista) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.apiURLactualizarRuta + "", lista, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    AsignarMensajeroService.prototype.publicarRutas = function (lista) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log("Publicando");
        return this.http.put(this.apiURLpublicarRuta + "", lista, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    //Servicios externos :)
    AsignarMensajeroService.prototype.calculoDistancia = function (o, d) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Access-Control-Allow-Origin", "http://localhost:4200");
        headers.append("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
        headers.append("Access-Control-Allow-Headers", "X-Requested-With,content-type");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.calcularTiempor + o + "&destinations=" + d + "&key=" + this.key, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    AsignarMensajeroService.prototype.obtenerCoord = function (calle) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.calcularCoor + calle + "&key=" + this.key, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    AsignarMensajeroService.prototype.obtenerFacturasFolio = function (folios) {
        var body = folios;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLobtenerFacturasFolio + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    AsignarMensajeroService.prototype.obtenerTotales = function () {
        var body = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getUser().idEmpleado;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLobtenerTotales + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
        });
    };
    AsignarMensajeroService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AsignarMensajeroService);
    return AsignarMensajeroService;
}());



/***/ }),

/***/ "./src/app/services/despachos/gestorRuta/cerrar-ruta.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CerrarRutaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CerrarRutaService = /** @class */ (function () {
    function CerrarRutaService(http) {
        this.http = http;
        this.apiURLdatosGrafica = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "cerrarRuta/datosGrafica";
        this.apiURLCompararRuta = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "cerrarRuta/compararRuta";
        this.apiURLcalificarRuta = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "/cerrarRuta/calificarRuta";
        this.key = "AIzaSyD_xQ31kAkk6Sjh3qmpx93q4ce9xJ80TSg";
        this.calcularTiempor = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=";
    }
    CerrarRutaService.prototype.datosGrafica = function () {
        var body = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getUser().idEmpleado;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLdatosGrafica + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    CerrarRutaService.prototype.compararRuta = function (idMensajero) {
        var body = idMensajero;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURLCompararRuta + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    CerrarRutaService.prototype.calculoDistancia = function (o, d) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.calcularTiempor + o + "&destinations=" + d + "&key=" + this.key, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    CerrarRutaService.prototype.calificarRuta = function (evaluacion) {
        var body = evaluacion;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .put(this.apiURLcalificarRuta + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    CerrarRutaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CerrarRutaService);
    return CerrarRutaService;
}());



/***/ }),

/***/ "./src/app/services/embalar/embalar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmbalarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmbalarService = /** @class */ (function () {
    function EmbalarService(http) {
        this.http = http;
        this.apiURLconsultaPartidasEmbalar = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "consultaPartidasEmbalar";
        this.apiURLConsultaTotalEmbalar = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "ConsultaTotalEmbalar";
        this.apiURLConsultaEstadisticaUsuarioEmbalar = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "ConsultaEstadisticaUsuarioEmbalar";
        this.apiURLcolectarPartidas = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "colectarPartidas";
        this.apiURLobtenerFolioPorUsuario = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerFolioPorUsuario";
        this.apiURLconsultarEstado = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "consultarEstado";
        this.apiURLgenerarPackingList = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "generarPackingList";
        this.apiURLregistrarEmbalarPedido = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "registrarEmbalarPedido";
        this.apiURLactualizarEstadoInsertarPendiente = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "actualizarEstadoInsertarPendiente";
        this.apiURLgenerarDocumentos = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "generarDocumentos";
        this.apiURLguardarConsumible = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "guardarConsumible";
        this.apiURLarchivoPedido = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "pathFilePedidos";
        this.apiURLpedidosGDL = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "embalar/pedidosGDL";
        this.apiURLobtenerDatosContacto = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "embalar/obtenerDatosContacto";
        this.apiURLfinalizarGDL = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "embalar/finalizarGDL";
        this.apiURLuploadFile = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "pap/uploadFile/"; /**Se agrego para guardar la evidencia de la factura*/
        this.apiURLfinalizarEvidenciaFac = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "embalar/finalizarEvidenciaFac"; // Finalizar de cfdiFacturas
        this.apiURLenviarCorreo = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "embalar/enviarCorreo";
        this.apiURLtotalesGeneral = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'embalar/totalesGeneral';
        this.apiURLGuardarVideo = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'nombreArchivo';
        this.apiURLValidarStock = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'embalar/prodsDeStock';
        console.log("regreso de service embalaje");
    }
    EmbalarService.prototype.guardarVideo = function (data) {
        var body = data;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLGuardarVideo + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EmbalarService.prototype.totalesGeneral = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLtotalesGeneral + '', options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EmbalarService.prototype.enviarCorreo = function (datosC) {
        var body = datosC;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLenviarCorreo + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json() || 'Server error'); });
    };
    EmbalarService.prototype.finalizarEvidenciaFac = function (idFactura) {
        var body = idFactura;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLfinalizarEvidenciaFac + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EmbalarService.prototype.uploadFile = function (obj, idFactura, fPor) {
        var tipo = 'EvidenciaFactura';
        var dataFile = new FormData();
        dataFile.append('file', obj[0]);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLuploadFile + '' + idFactura + '/' + tipo + '/' + fPor, dataFile, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EmbalarService.prototype.finalizarGDL = function (numGuia) {
        var body = numGuia;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http
            .put(this.apiURLfinalizarGDL + "", body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || "Server error");
        });
    };
    EmbalarService.prototype.obtenerDatosContacto = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerDatosContacto + '', options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EmbalarService.prototype.pedidosGDL = function (paquete) {
        var body = paquete;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLpedidosGDL + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EmbalarService.prototype.consultaPartidasEmbalar = function (estadoPedido) {
        var body = estadoPedido;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLconsultaPartidasEmbalar + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EmbalarService.prototype.ConsultaTotalEmbalar = function (concepto) {
        var body = concepto;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLConsultaTotalEmbalar + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EmbalarService.prototype.ConsultaEstadisticaUsuarioEmbalar = function (idEmpleado) {
        var body = idEmpleado;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLConsultaEstadisticaUsuarioEmbalar + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EmbalarService.prototype.actualizarEstado = function (parametros) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'actualizarEstado', parametros, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EmbalarService.prototype.colectarPartidas = function (objetoColectar) {
        var body = objetoColectar;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLcolectarPartidas + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EmbalarService.prototype.obtenerFolioPorUsuario = function (idEmpleado) {
        var body = idEmpleado;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerFolioPorUsuario + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EmbalarService.prototype.consultarEstado = function (idEmpleado) {
        var body = idEmpleado;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLconsultarEstado + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EmbalarService.prototype.generarPackingList = function (packingList) {
        var body = packingList;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLgenerarPackingList + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EmbalarService.prototype.registrarEmbalarPedido = function (idEmpleado) {
        var body = idEmpleado;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLregistrarEmbalarPedido + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    //////////  Boton finalizar ///
    EmbalarService.prototype.actualizarEstadoInsertarPendiente = function (paquetePend) {
        var body = paquetePend;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLactualizarEstadoInsertarPendiente + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EmbalarService.prototype.generarDocumentos = function (parametros) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLgenerarDocumentos + '', parametros, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EmbalarService.prototype.archivoPedido = function (obj) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLarchivoPedido + '', obj, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    //// Seccion envio de cantidad de bolsas a guardar
    EmbalarService.prototype.guardarConsumible = function (data) {
        var body = data;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLguardarConsumible + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EmbalarService.prototype.validateStock = function (data) {
        var body = data;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLValidarStock + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error) || 'Server error'; });
    };
    EmbalarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], EmbalarService);
    return EmbalarService;
}());



/***/ }),

/***/ "./src/app/services/gestion/consulta/asistencias/asistencias.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsistenciasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AsistenciasService = /** @class */ (function () {
    function AsistenciasService(http) {
        this.http = http;
        this.apiURLgetTrabajadorUnion = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "getTrabajadorUnion";
        this.apiURLgetTipoIncidencia = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "getTipoIncidencia";
        this.apiURLgetConsultaArea = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "getConsultaArea";
        this.apiURLgetConsultaDepartamento = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "getConsultaDepartamento";
        this.apiURLgetConsultaCategoria = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "getConsultaCategoria";
        this.apiURLgetAsistenciaUnion = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "getAsistenciaUnion";
    }
    AsistenciasService.prototype.getTrabajadorUnion = function () {
        var body;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLgetTrabajadorUnion + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    AsistenciasService.prototype.getTipoIncidencia = function () {
        var body;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLgetTipoIncidencia + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    AsistenciasService.prototype.getConsultaArea = function () {
        var body;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLgetConsultaArea + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    AsistenciasService.prototype.getConsultaDepartamento = function () {
        var body;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLgetConsultaDepartamento + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    AsistenciasService.prototype.getConsultaCategoria = function () {
        var body;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLgetConsultaCategoria + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    AsistenciasService.prototype.getAsistenciaUnion = function (parametros) {
        var body = JSON.stringify(parametros);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLgetAsistenciaUnion + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    AsistenciasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], AsistenciasService);
    return AsistenciasService;
}());



/***/ }),

/***/ "./src/app/services/gestion/consulta/cobros/cobros.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CobrosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CobrosService = /** @class */ (function () {
    function CobrosService(http) {
        this.http = http;
        this.apiURLconsultaObtenerCobros = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "consultaObtenerCobros";
        this.apiURLobtenerClientesPorIdUsuarioRol = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerClientesPorIdUsuarioRol";
        this.apiURLobtenerEmpleadosPorTipo = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerEmpleadosPorTipo";
        this.apiURLobtenerBancosClientes = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerBancosClientes";
        this.apiURLobtenerCuentasBancoClientes = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerCuentasBancoClientes";
        this.apiURLobtenerLineaTiempoResumen = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerLineaTiempoResumen";
        this.apiURLobtenerInspectorEntrega = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerInspectorEntrega";
        this.apiURLobtenerInspectorRevision = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerInspectorRevision";
        this.apiURLobtenerInspectorCobro = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerInspectorCobro";
    }
    CobrosService.prototype.obtenerCobros = function (parametros) {
        var body = JSON.stringify(parametros);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLconsultaObtenerCobros + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CobrosService.prototype.obtenerClientesPorIdUsuarioRol = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerClientesPorIdUsuarioRol + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CobrosService.prototype.obtenerEmpleadosPorTipo = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerEmpleadosPorTipo + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CobrosService.prototype.obtenerBancosClientes = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerBancosClientes + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CobrosService.prototype.obtenerCuentasBancoClientes = function (parametros) {
        var body = JSON.stringify(parametros);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerCuentasBancoClientes + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CobrosService.prototype.obtenerLineaTiempoResumen = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerLineaTiempoResumen + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CobrosService.prototype.obtenerInspectorEntrega = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerInspectorEntrega + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CobrosService.prototype.obtenerInspectorRevision = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerInspectorRevision + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CobrosService.prototype.obtenerInspectorCobro = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerInspectorCobro + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CobrosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], CobrosService);
    return CobrosService;
}());



/***/ }),

/***/ "./src/app/services/gestion/consulta/compras/compras.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComprasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ComprasService = /** @class */ (function () {
    function ComprasService(http) {
        this.http = http;
        this.apiURLConsultarCompras = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerCompras";
        this.apiURLConsultarProveedores = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerProveedores";
        this.apiURLConsultaPartidaPorComprasEspecifica = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerPatidasCompraParaCEspecifica";
        this.apiURLConsultaAvanzadaFacturacion = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "consultaAvanzadaFacturacion";
        this.apiURLobtenerGraficaXCompra = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerGraficaXCompra";
        this.apiURLobtenerTiempoProcesoPorPartida = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerTiempoProcesoPorPartida";
    }
    ComprasService.prototype.consultarCompras = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLConsultarCompras + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ComprasService.prototype.consultarProveedores = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLConsultarProveedores + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ComprasService.prototype.consultaPartidasPorCompraEspecifica = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLConsultaPartidaPorComprasEspecifica + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ComprasService.prototype.consultarGraficaXCompra = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerGraficaXCompra + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ComprasService.prototype.obtenerTiempoProcesoPorPartida = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerTiempoProcesoPorPartida + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ComprasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ComprasService);
    return ComprasService;
}());



/***/ }),

/***/ "./src/app/services/gestion/consulta/cotizaciones/cotizacion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CotizacionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CotizacionService = /** @class */ (function () {
    function CotizacionService(http) {
        this.http = http;
        this.apiURLCotizacionesAvanzada = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "buscarCotizacionesParaReporte";
        this.apiURLCotizacionesRapida = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "buscarCotizacionPorFolio";
        this.apiURLObtenerPartidasXFolioCotizacion = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerPartidasPorCotizacionEnSeguimiento";
        this.apiURLObtenerHistorialXPartidaXidPCotiza = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerHistorialSeguimientoXPartida";
        this.apiURLObtenerTiempoProceso = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "tiempoProcesoPCotiza";
    }
    CotizacionService.prototype.listaCotizacionesAvanzada = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLCotizacionesAvanzada + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CotizacionService.prototype.listaCotizacionesRapida = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLCotizacionesRapida + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CotizacionService.prototype.listaPartidasXFolioCotizacion = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLObtenerPartidasXFolioCotizacion + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CotizacionService.prototype.listaHistorialXPartidaXidPcotiza = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLObtenerHistorialXPartidaXidPCotiza + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CotizacionService.prototype.listaTiempoProcesoPartidas = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLObtenerTiempoProceso + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    CotizacionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], CotizacionService);
    return CotizacionService;
}());



/***/ }),

/***/ "./src/app/services/gestion/consulta/documentos-enviados/documentos-enviados.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentosEnviadosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DocumentosEnviadosService = /** @class */ (function () {
    function DocumentosEnviadosService(http) {
        this.http = http;
        this.apiURLObtenerEnvioCorreoDocumentos = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerEnvioCorreoDocumentos";
    }
    DocumentosEnviadosService.prototype.obtenerEnvioCorreoDocumentos = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLObtenerEnvioCorreoDocumentos + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    DocumentosEnviadosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], DocumentosEnviadosService);
    return DocumentosEnviadosService;
}());



/***/ }),

/***/ "./src/app/services/gestion/consulta/documentos-recibidos/documentos-recibidos.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentosRecibidosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DocumentosRecibidosService = /** @class */ (function () {
    function DocumentosRecibidosService(http) {
        this.http = http;
        this.apiURLbuscarDocumentosXBA = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "buscarDocumentosXBA";
        this.apiURLbuscarDocumentoRecibidoPorFolio = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "buscarDocumentoRecibidoPorFolio";
    }
    DocumentosRecibidosService.prototype.buscarDocumentosXBA = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLbuscarDocumentosXBA + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    DocumentosRecibidosService.prototype.buscarDocumentoRecibidoPorFolio = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLbuscarDocumentoRecibidoPorFolio + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    DocumentosRecibidosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], DocumentosRecibidosService);
    return DocumentosRecibidosService;
}());



/***/ }),

/***/ "./src/app/services/gestion/consulta/entregas/entregas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntregasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EntregasService = /** @class */ (function () {
    function EntregasService(http) {
        this.http = http;
        this.apiURLobtenerEntregas = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerEntregas";
        this.apiURLobtenerEntregasSinAviso = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerEntregasSinAviso";
        this.apiURLobtenerTiempoDeProceso = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerTiempoDeProceso";
    }
    EntregasService.prototype.obtenerEntregas = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerEntregas + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EntregasService.prototype.obtenerEntregasSinAviso = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerEntregasSinAviso + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EntregasService.prototype.obtenerTiempoDeProceso = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerTiempoDeProceso + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EntregasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], EntregasService);
    return EntregasService;
}());



/***/ }),

/***/ "./src/app/services/gestion/consulta/facturacion/facturacion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacturacionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FacturacionService = /** @class */ (function () {
    function FacturacionService(http) {
        this.http = http;
        this.apiURLListaFacturasEmitidas = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "listarFacturasEmitidas";
        this.apiURLConsultaAvanzadaFacturacion = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "consultaAvanzadaFacturacion";
        this.apiURLConsultaRapidaFacturacion = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "consultaRapidaFacturacion";
        this.apiURLObtenerResumen = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerResumen";
        this.apiURLObtenerLineaTiempoPrepago = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerLineaTiempoPrepago";
        this.apiURLObtenerResumenMonitoreoCobro = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerResumenMonitoreoCobro";
        this.apiURLObtenerResumenFacturaPrepago = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerResumenFacturaPrepago";
        this.apiURLObtenerResumenEntrega = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerResumenEntrega";
        this.apiURLObtenerResumenRevision = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerResumenRevision";
        this.apiURLObtenerResumenCobro = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerResumenCobro";
        this.apiURLObtenerResumenFactura = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerResumenFactura";
        this.apiURLObtenerResumenFacturacionXAdelantado = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerResumenFacturacionXAdelantado";
        this.apiURLEliminarZip = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "eliminarZip";
        this.urlgenerarZip = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "generarZip";
    }
    FacturacionService.prototype.listarFacturasEmitidas = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLListaFacturasEmitidas + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    FacturacionService.prototype.consultaAvanzadaFacturacion = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLConsultaAvanzadaFacturacion + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    FacturacionService.prototype.consultaRapidaFacturacion = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLConsultaRapidaFacturacion + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    FacturacionService.prototype.obtenerResumen = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLObtenerResumen + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    FacturacionService.prototype.obtenerLineaTiempoPrepago = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLObtenerLineaTiempoPrepago + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    FacturacionService.prototype.obtenerResumenMonitoreoCobro = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLObtenerResumenMonitoreoCobro + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    FacturacionService.prototype.obtenerResumenFacturaPrepago = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLObtenerResumenFacturaPrepago + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    FacturacionService.prototype.obtenerResumenEntrega = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLObtenerResumenEntrega + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    FacturacionService.prototype.obtenerResumenRevision = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLObtenerResumenRevision + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    FacturacionService.prototype.obtenerResumenCobro = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLObtenerResumenCobro + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    FacturacionService.prototype.obtenerResumenFactura = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLObtenerResumenFactura + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    FacturacionService.prototype.obtenerResumenFacturacionXAdelantado = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLObtenerResumenFacturacionXAdelantado + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    FacturacionService.prototype.generarZip = function (parametros) {
        var body = JSON.stringify(parametros);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        //headers.append('Accept', 'application/octet-stream');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers, responseType: __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* ResponseContentType */].Blob });
        return this.http.post(this.urlgenerarZip + '', body, options)
            .map(function (products) { return products; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    FacturacionService.prototype.eliminarZip = function (parametros) {
        var body = JSON.stringify(parametros);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLEliminarZip + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    FacturacionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], FacturacionService);
    return FacturacionService;
}());



/***/ }),

/***/ "./src/app/services/gestion/consulta/llamadas/llamadas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LlamadasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LlamadasService = /** @class */ (function () {
    function LlamadasService(http) {
        this.http = http;
        this.apiURLObtenerLlamadas = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerLlamadas";
    }
    LlamadasService.prototype.obtenerLlamadas = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLObtenerLlamadas + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    LlamadasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], LlamadasService);
    return LlamadasService;
}());



/***/ }),

/***/ "./src/app/services/gestion/consulta/nota-credito/nota-credito.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotaCreditoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NotaCreditoService = /** @class */ (function () {
    function NotaCreditoService(http) {
        this.http = http;
        this.apiURLGetNotaCreditoAvanzada = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'getNotaCreditoAvanzada';
        this.apiURLGetNotaCreditoRapida = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'getNotaCreditoRapida';
    }
    NotaCreditoService.prototype.getNotaCreditoAvanzada = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLGetNotaCreditoAvanzada + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    NotaCreditoService.prototype.getNotaCreditoRapida = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLGetNotaCreditoRapida + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    NotaCreditoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], NotaCreditoService);
    return NotaCreditoService;
}());



/***/ }),

/***/ "./src/app/services/gestion/gestion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GestionService = /** @class */ (function () {
    function GestionService(http) {
        this.http = http;
        this.apiURLDropCliente = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerClientesPorIdUsuarioRol";
        this.apiURLDropCobrador = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerEmpleadosPorTipo";
        this.apiURLdropFabricantes = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerFabricantes";
    }
    GestionService.prototype.dropClientes = function () {
        var user = {
            "idUsuario": 91
        };
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLDropCliente + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    GestionService.prototype.dropCobrador = function () {
        var user = {
            "tipo": "contabilidad"
        };
        var body = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLDropCobrador + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    GestionService.prototype.dropFabricantes = function () {
        var valor = {
            "valorAdicional": ""
        };
        var body = JSON.stringify(valor);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLdropFabricantes + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    GestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], GestionService);
    return GestionService;
}());



/***/ }),

/***/ "./src/app/services/gestion/reportes/reportecobros/reportecobros.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteCobrosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReporteCobrosService = /** @class */ (function () {
    function ReporteCobrosService(http) {
        this.http = http;
        this.apiURLreporteCobros = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "reporteCobros";
        this.apiURLlistarHistorialXFactura = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "listarHistorialXFactura";
    }
    ReporteCobrosService.prototype.reporteCobros = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLreporteCobros + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ReporteCobrosService.prototype.listarHistorialXFactura = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLlistarHistorialXFactura + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ReporteCobrosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ReporteCobrosService);
    return ReporteCobrosService;
}());



/***/ }),

/***/ "./src/app/services/gestion/reportes/seguimiento/seguimiento.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeguimientoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SeguimientoService = /** @class */ (function () {
    function SeguimientoService(http) {
        this.http = http;
        this.apiURLobtenerCotizacionesEnSeguimientoEnPartidas = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerCotizacionesEnSeguimientoEnPartidas";
        this.apiURLobtenerPartidasPorCotizacionEnSeguimiento = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerPartidasPorCotizacionEnSeguimiento";
    }
    SeguimientoService.prototype.obtenerCotizacionesEnSeguimientoEnPartidas = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerCotizacionesEnSeguimientoEnPartidas + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    SeguimientoService.prototype.obtenerPartidasPorCotizacionEnSeguimiento = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerPartidasPorCotizacionEnSeguimiento + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    SeguimientoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], SeguimientoService);
    return SeguimientoService;
}());



/***/ }),

/***/ "./src/app/services/gestionar-cuarentena/gestionar-cuarentena.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestionarCuarentenaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GestionarCuarentenaService = /** @class */ (function () {
    function GestionarCuarentenaService(http) {
        this.http = http;
        this.apiRULpiezasRechazadas = __WEBPACK_IMPORTED_MODULE_1__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'gestorQuarentena/piezasRechazadas';
        this.apiURLpiezasRechazadasPorProveedor = __WEBPACK_IMPORTED_MODULE_1__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'gestorQuarentena/piezasRechazadasPorProveedor';
        this.apiURLfinalizarCuarentena = __WEBPACK_IMPORTED_MODULE_1__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'gestorQuarentena/finalizarCuarentena';
    }
    GestionarCuarentenaService.prototype.piezasRechazadas = function () {
        var body = { concepto: 'cuarentena',
            inspector: __WEBPACK_IMPORTED_MODULE_1__session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario() };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiRULpiezasRechazadas + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    GestionarCuarentenaService.prototype.piezasRechazadasPorProveedor = function (idProveedor) {
        var body = { idProveedor: idProveedor, concepto: 'cuarentena' };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLpiezasRechazadasPorProveedor + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    GestionarCuarentenaService.prototype.finalizarCuarentena = function (datos) {
        var body = datos;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.apiURLfinalizarCuarentena + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    GestionarCuarentenaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], GestionarCuarentenaService);
    return GestionarCuarentenaService;
}());



/***/ }),

/***/ "./src/app/services/gestor-producto-reclamo/producto-reclamo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductoReclamoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductoReclamoService = /** @class */ (function () {
    function ProductoReclamoService(http) {
        this.http = http;
        this.apiRULpiezasRechazadas = __WEBPACK_IMPORTED_MODULE_1__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'gestorQuarentena/piezasRechazadas';
        this.apiURLpiezasReclamoPorProveedor = __WEBPACK_IMPORTED_MODULE_1__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'gestorQuarentena/piezasRechazadasPorProveedor';
        this.apiURLfinalizar = __WEBPACK_IMPORTED_MODULE_1__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'reclamoProducto/finalizarReclamo';
        this.apiURLobtenerTotales = __WEBPACK_IMPORTED_MODULE_1__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'gestorCompras/obtenerTotales';
    }
    ProductoReclamoService.prototype.piezasRechazadas = function () {
        var body = { concepto: 'reclamo',
            inspector: __WEBPACK_IMPORTED_MODULE_1__session_session_service__["a" /* SessionUser */].getInstance().getUser().getUsuario() };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiRULpiezasRechazadas + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ProductoReclamoService.prototype.piezasReclamoPorProveedor = function (idProveedor) {
        var body = { idProveedor: idProveedor, concepto: 'reclamo' };
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLpiezasReclamoPorProveedor + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ProductoReclamoService.prototype.finalizarCuarentena = function (datos) {
        var body = datos;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.apiURLfinalizar + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ProductoReclamoService.prototype.obtenerTotales = function (idUsuario) {
        var body = idUsuario;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerTotales + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ProductoReclamoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ProductoReclamoService);
    return ProductoReclamoService;
}());



/***/ }),

/***/ "./src/app/services/inspeccion/inspeccion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspeccionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InspeccionService = /** @class */ (function () {
    function InspeccionService(http) {
        this.http = http;
        this.apiURL = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "consultaPartidasInspeccion";
        this.apiURLPartidasApiladas = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerPartidasApiladas";
        this.apiURLtotlaesInspeccion = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerTotalesDeinspecionPorUsuario";
        this.apiURLRecibePiezasInspeccionadasHoy = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerPiezasInspeccionadasHoy";
        this.apiURLSumaPiezasInspeccionadasyPoyInspeccionar = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "sumarPiezasInspeccionadasYPorInspeccionar";
        this.apiURLconsultaDeTotalesPorInspector = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "consultaDeTotalesPorInspector";
        this.apiURLordenarPartidasInspeccion = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "ordenarPartidasInspeccion";
        this.apiURLTerminarInspeccion = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "finalizarInspeccionDePartidas";
        this.apiURLContadorPendientes = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerNumPendientesInspeccion";
        this.apiURLContadorPzasXPrioridad = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerPiezasPorPrioridad";
        this.apiURLobtenerConsecutivoDeLoteInspeccion = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerConsecutivoDeLoteInspeccion";
        this.apiURLobtenerModoInspeccion = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerModoInspeccion";
        this.apiURLnombreArchivo = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "nombreArchivo";
        this.apiURLguardarArchivo = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "guardarArchivo";
        this.apiURLobtenerUbicacion = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerUbicacionInspeccion";
        this.apiURLguardarExistenciaUbicaion = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "guardarExistenciaUbicacion";
        this.apiURLguardarConsumible = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "guardarConsumible";
        this.apiURLapartarInspeccion = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "inspeccionar/apartarInspeccion";
        this.apiURLuploadImage = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "inspeccionar/uploadImage";
        this.apiURLobtenerComboUnidad = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "inspeccionar/obtenerComboUnidad";
        this.apiURLverificarApartado = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'inspeccionar/verificarApartado';
        console.log("regreso de service inspeccion");
    }
    InspeccionService.prototype.verificarFinalizar = function (param) {
        var body = param;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLverificarApartado + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    InspeccionService.prototype.obtenerComboUnidad = function (tipo) {
        var body = tipo;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerComboUnidad + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    InspeccionService.prototype.uploadImage = function (obj, tipo) {
        var dataFile = new FormData();
        for (var i = 0; i < obj.length; i++) {
            dataFile.append('file', obj[i].archivo);
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLuploadImage + '/' + tipo, dataFile, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    InspeccionService.prototype.apartarInspeccion = function (idUsuario) {
        var body = idUsuario;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLapartarInspeccion + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    InspeccionService.prototype.recibePartidasInspeccion = function () {
        var body = JSON.stringify("");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURL + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    InspeccionService.prototype.recibePartidasApiladas = function () {
        var body = JSON.stringify("");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURL + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    InspeccionService.prototype.RecibePiezasInspeccionadasHoy = function (inspector) {
        var body = JSON.stringify(inspector);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLRecibePiezasInspeccionadasHoy + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    InspeccionService.prototype.recibeTotalesInspecion = function (usuario) {
        var body = usuario;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLtotlaesInspeccion + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    InspeccionService.prototype.sumaPiezasInspeccionadasyPorInspeccionar = function (inspector) {
        var body = JSON.stringify(inspector);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLSumaPiezasInspeccionadasyPoyInspeccionar + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    InspeccionService.prototype.consultaDeTotalesPorInspector = function (inspector) {
        var body = inspector;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLconsultaDeTotalesPorInspector + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    InspeccionService.prototype.ordenarPartidasInspeccion = function (inspector) {
        var body = JSON.stringify(inspector);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLordenarPartidasInspeccion + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    InspeccionService.prototype.recibeRespuestaFinalizarInspeccion = function (parametros) {
        var body = parametros;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLTerminarInspeccion + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    InspeccionService.prototype.recibeNumPendientes = function () {
        var body = JSON.stringify("");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLContadorPendientes + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    InspeccionService.prototype.obtenerPiezasPorPrioridad = function () {
        var body = JSON.stringify("");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLContadorPzasXPrioridad + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    InspeccionService.prototype.obtenerConsecutivoDeLoteInspeccion = function (concepto) {
        var body = concepto;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerConsecutivoDeLoteInspeccion + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    InspeccionService.prototype.obtenerModoInspeccion = function () {
        var body = JSON.stringify("");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerModoInspeccion + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    InspeccionService.prototype.nombreArchivo = function (data) {
        var body = data;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLnombreArchivo + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    InspeccionService.prototype.guardarArchivo = function (files, tipo, codigo, lote) {
        if (files === undefined) {
            console.log('0 archivos enviados');
        }
        else {
            if (files.length > 0) {
                var file = files[0];
                console.log(file);
                var formData = new FormData();
                // formData.append('file', file, file.name);
                console.log(formData);
                var body = {
                    file: formData.append('', file),
                    tipo: tipo,
                    codigo: codigo,
                    lote: lote
                };
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.append("Content-Type", 'application/json');
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
                return this.http.post(this.apiURLguardarArchivo + "", body, options)
                    .map(function (data) { return data; })
                    .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
            }
        }
    };
    InspeccionService.prototype.guardaDocumentacion = function (listaArchivos, folioDocumento, subcarpeta, tipoArchivo) {
        if (listaArchivos != undefined) {
            //  for ( let i = 0; i<listaArchivos.length; i++){
            var formData = new FormData();
            var file = listaArchivos;
            console.log(file);
            // listaArchivos.forEach( (file, index) => {
            formData.append('file', file, '');
            // });
            return this.http.post(this.apiURLguardarArchivo + "/" + folioDocumento + "/" + subcarpeta + "/" + tipoArchivo, formData)
                .map(function (data) { return data.json(); })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
            //   }
        }
    };
    InspeccionService.prototype.obtenerUbicacionInspeccion = function (data) {
        var body = data;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerUbicacion + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    InspeccionService.prototype.guardarExistenciaUbicacion = function (data) {
        var body = data;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLguardarExistenciaUbicaion + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    InspeccionService.prototype.guardarConsumible = function (data) {
        var body = data;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLguardarConsumible + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    InspeccionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], InspeccionService);
    return InspeccionService;
}());



/***/ }),

/***/ "./src/app/services/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginService = /** @class */ (function () {
    function LoginService() {
    }
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/material-receptor/material-receptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialReceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MaterialReceptorService = /** @class */ (function () {
    function MaterialReceptorService(http) {
        this.http = http;
        this.apiURLdatosGrafica = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'receptorMaterial/datosGrafica';
        this.apiURLgetGuias = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'receptorMaterial/getGuias';
        this.apiURLfinalizar = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'receptorMaterial/finalizar';
    }
    MaterialReceptorService.prototype.datosGrafica = function (idUsuario) {
        var body = idUsuario;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLdatosGrafica + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    MaterialReceptorService.prototype.getGuias = function (idUsuario) {
        var body = idUsuario;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLgetGuias + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    MaterialReceptorService.prototype.finalizar = function (obj) {
        var body = obj;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLfinalizar + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    MaterialReceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MaterialReceptorService);
    return MaterialReceptorService;
}());



/***/ }),

/***/ "./src/app/services/productos-bo/productos-bo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductosBoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductosBoService = /** @class */ (function () {
    function ProductosBoService(http) {
        this.http = http;
        this.apiURLobtenerGraficaProveedor = __WEBPACK_IMPORTED_MODULE_1__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'gestionarBO/obtenerGraficaProveedor';
        this.apiURLobtenerProductosProveedor = __WEBPACK_IMPORTED_MODULE_1__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'gestionarBO/obtenerProductosProveedor';
        this.URLfinalizarProductoBO = __WEBPACK_IMPORTED_MODULE_1__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'gestionarBO/finalizarProductoBO';
    }
    ProductosBoService.prototype.obtenerGraficaProveedor = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerGraficaProveedor + '', options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ProductosBoService.prototype.obtenerProductosProveedor = function (idProveedor) {
        var body = idProveedor;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerProductosProveedor + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ProductosBoService.prototype.finalizarProductoBO = function (datos) {
        var body = datos;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.URLfinalizarProductoBO + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    ProductosBoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ProductosBoService);
    return ProductosBoService;
}());



/***/ }),

/***/ "./src/app/services/saldos-notas/saldos-favor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaldosFavorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SaldosFavorService = /** @class */ (function () {
    function SaldosFavorService(http) {
        this.http = http;
        this.apiURLconsultaEmpresas = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'saldoFavor/obtenerEmpresaProveedor';
        this.apiURLconsultaLista = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'saldoFavor/obtenerListado';
        this.apiURLgenerarSaldo = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'generarSaldo';
        this.apiURLhabilitarSaldo = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'saldoFavor/habilitarSaldo';
        this.apiURLuploadFile = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'comun/subirArchivo/';
    }
    SaldosFavorService.prototype.obtenerEmpresas = function (datos) {
        var body = datos;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLconsultaEmpresas + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    SaldosFavorService.prototype.obtenerLista = function (tipo) {
        var body = tipo;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLconsultaLista + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    SaldosFavorService.prototype.generarSaldo = function (datas) {
        var body = datas;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLgenerarSaldo + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    SaldosFavorService.prototype.eliminarSaldo = function (datas) {
        var body = datas;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLhabilitarSaldo + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    SaldosFavorService.prototype.uploadFile = function (obj, nameFile, tipo, fPor) {
        var dataFile = new FormData();
        dataFile.append('file', obj[0]);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLuploadFile + '' + tipo + '/' + fPor + '/' + nameFile, dataFile, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    SaldosFavorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SaldosFavorService);
    return SaldosFavorService;
}());



/***/ }),

/***/ "./src/app/services/session/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class_Empleado_class__ = __webpack_require__("./src/app/class/Empleado.class.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SessionUser = /** @class */ (function () {
    function SessionUser() {
        /* ------- Token -------- */
        this.userName = 'Usuario Registrado';
        this.token = '';
        /* ----------- Authentication ----------- */
        this.auth = false;
        // private ip: string = "http://192.168.2.126:8081/api/";
        // private ip: string = "http://localhost:8081/api/";
        this.ip81 = 'http://localhost:8081/api/';
        this.miIP = 'http://192.168.2.100:8081/api/';
        this.ipJosi = 'http://192.168.2.156:8081/api/';
        this.ipProduccionB = 'http://www.proquifaconnect.mx:8080/ProquifaNet/';
        this.nuevaDev = 'http://172.24.20.12:8080/ProquifaNet/';
        this.dirDesarrollo = 'http://172.24.32.14:8080/ProquifaNet/';
        this.dirOriginal = 'https://pqnetangular.ryndem.mx/ProquifaNet/';
        this.ipFer = 'http://172.24.42.46:8081/api/';
        this.ipDevLocal = 'http://192.168.2.41:8081/ProquifaNet/';
        this.ipDevUAT = 'http://172.24.32.34:8080/ProquifaNet/';
        //private ipDevLocal:   string = 'http://192.168.2.106:8081/api/';
        this.QA = 'http://172.24.32.34:9090/ProquifaNet/';
        this.ipAle = 'http://192.168.1.53:8081/api/';
        this.ipVRA = 'http://192.168.1.126:8081/api/';
        this.ipJDMar = 'http://192.168.1.80:8081/api/';
        if (SessionUser_1._instance) {
            throw new Error('The Logger is a singleton class and cannot be created!');
        }
        SessionUser_1._instance = this;
    }
    SessionUser_1 = SessionUser;
    SessionUser.getInstance = function () {
        return SessionUser_1._instance;
    };
    SessionUser.prototype.setToken = function (token) {
        this.token = token;
    };
    SessionUser.prototype.getToken = function () {
        return this.token;
    };
    SessionUser.prototype.setAuthenticated = function (auth) {
        this.auth = auth;
    };
    SessionUser.prototype.getAuthenticated = function () {
        return this.auth;
    };
    SessionUser.prototype.getIP = function () {
        // return  this.ipMiguel;
        //  return this.ip;
        //  return this.ip81;
        // return this.ipProduccion;
        //  return this.ipJosi;
        // return this.ipSara;
        //return this.ipProduccionB;
        //return this.nuevaDev;
        return this.dirOriginal;
        //return this.dirDesarrollo;
        //return this.ipDevUAT;
        //return this.ipFer;
        // return this.dirDesarrollo;
        // return this.QA;
        //return this.ipAle;
        //return this.ipVRA;
    };
    SessionUser.prototype.getUser = function () {
        return this.user;
    };
    SessionUser.prototype.setUser = function (user) {
        this.user = Object.assign(new __WEBPACK_IMPORTED_MODULE_1__class_Empleado_class__["a" /* Empleado */], user);
    };
    SessionUser.prototype.setDataPost = function (dataPost) {
        this.dataPost = dataPost;
    };
    SessionUser.prototype.getDataPost = function () {
        return this.dataPost;
    };
    SessionUser.prototype.getSistemaActualizado = function () {
        return this.sistemaActualizado;
    };
    SessionUser.prototype.setSistemaActualizado = function (actualizado) {
        this.sistemaActualizado = actualizado;
    };
    SessionUser._instance = new SessionUser_1();
    SessionUser = SessionUser_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SessionUser);
    return SessionUser;
    var SessionUser_1;
}());



/***/ }),

/***/ "./src/app/services/trabajar-ruta/envio-por-cliente.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnvioPorClienteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnvioPorClienteService = /** @class */ (function () {
    function EnvioPorClienteService(http) {
        this.http = http;
        this.apiURLclientes = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'trEnvioXCliente/clientes';
        this.apiURLobtenerPackingPorCliente = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'trEnvioXCliente/obtenerPackingPorCliente';
        this.apiURLobtenerTotObjetivos = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'trEnvioXCliente/obtenerTotObjetivos';
        this.apiURLTiempo = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'trEnvioXCliente/tiempoPagoXCliente';
        this.apiURLPrioridades = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'trEnvioXCliente/ObtenerEstadisticaUsuarioEnvioPL';
        this.apiURLRegistrarTrEnvioPagoCliente = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + 'RegistrarTrEnvio';
        this.apiURLuploadFile = __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* SessionUser */].getInstance().getIP() + '/trEnvio/uploadFile/';
    }
    EnvioPorClienteService.prototype.obtenerCliente = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLclientes + '', options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EnvioPorClienteService.prototype.obtenerPackingList = function (idCliente) {
        var body = idCliente;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerPackingPorCliente + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EnvioPorClienteService.prototype.obtenerTotObjetivos = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerTotObjetivos + '', options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EnvioPorClienteService.prototype.obtenerTiempo = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLTiempo + '', options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EnvioPorClienteService.prototype.obtenerPrioridades = function (idUsuario) {
        var body = idUsuario;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLPrioridades + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EnvioPorClienteService.prototype.RegistrarTrEnvioPagoCliente = function (obj) {
        var body = obj;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLRegistrarTrEnvioPagoCliente + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EnvioPorClienteService.prototype.uploadFile = function (numGuia, obj, tipo) {
        var data = new FormData();
        data.append('file', obj[0]);
        // let body = obj;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        // headers.append("Content-Type", 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLuploadFile + '' + numGuia + '/' + tipo, data, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    EnvioPorClienteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], EnvioPorClienteService);
    return EnvioPorClienteService;
}());



/***/ }),

/***/ "./src/app/services/util/util.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilService; });
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

var UtilService = /** @class */ (function () {
    function UtilService() {
    }
    UtilService.prototype.getTextMonth = function (monthNumber) {
        switch (monthNumber) {
            case 0:
                return 'Enero';
            case 1:
                return 'Febrero';
            case 2:
                return 'Marzo';
            case 3:
                return 'Abril';
            case 4:
                return 'Mayo';
            case 5:
                return 'Junio';
            case 6:
                return 'Julio';
            case 7:
                return 'Agosto';
            case 8:
                return 'Septiembre';
            case 9:
                return 'Octubre';
            case 10:
                return 'Noviembre';
            case 11:
                return 'Diciembre';
            default:
                console.log('ERROR.- No se encontró el mes, valor recibido -> ' + monthNumber);
                return null;
        }
    };
    UtilService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/app/services/ventas/visitas/visita-cliente.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitaClienteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__session_session_service__ = __webpack_require__("./src/app/services/session/session.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VisitaClienteService = /** @class */ (function () {
    function VisitaClienteService(http) {
        this.http = http;
        this.apiURLpendientesVisitaCliente = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "pendientesVisitaCliente";
        this.apiURLobtenerTodasVisitasPorSprint = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerTodasVisitasPorSprint";
        this.apiURLobtenerReportarVisita = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerReportarVisita";
        this.apiURLConsultarProveedores = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerProveedores";
        this.apiURLObtenerProductosConCampana = __WEBPACK_IMPORTED_MODULE_3__session_session_service__["a" /* SessionUser */].getInstance().getIP() + "obtenerProductosConCampana";
    }
    VisitaClienteService.prototype.pendientesVisitaCliente = function (parametros) {
        var body = JSON.stringify(parametros);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLpendientesVisitaCliente + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    VisitaClienteService.prototype.obtenerTodasVisitasPorSprint = function (parametros) {
        var body = JSON.stringify(parametros);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerTodasVisitasPorSprint + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    VisitaClienteService.prototype.obtenerReportarVisita = function (parametros) {
        var body = JSON.stringify(parametros);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLobtenerReportarVisita + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    VisitaClienteService.prototype.consultarProveedores = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLConsultarProveedores + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    VisitaClienteService.prototype.obtenerProductosConCampana = function (parametros) {
        var body = JSON.stringify(parametros);
        console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiURLObtenerProductosConCampana + '', body, options)
            .map(function (data) { return data.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    VisitaClienteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], VisitaClienteService);
    return VisitaClienteService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map