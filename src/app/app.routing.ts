import {CoreContainerComponent} from './components/core-container/core-container.component';
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';

import {AuthGuard} from './guards/auth.guard';
import {ResponsableaeComponent} from './components/responsableae/responsableae.component';

const APP_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'protected', component: CoreContainerComponent, /*canActivate: [AuthGuard],*/
    children: [
      // { path: '', component: ResponsableaeComponent },
      // { path: '', loadChildren: './components/responsableae/responsableae.module#ResponsableaeModule' },
      //  {path: '', loadChildren: './components/embalar/embalar.module#EmbalarModule' },
      {path: 'asuntosRegulatorios', loadChildren: './components/asuntos-regulatorios/asuntos-regulatorios.module#AsuntosRegulatoriosModule'},
      {path: 'envio', loadChildren: './components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas-envio/trabajar-rutas-envio.module#TrabajarRutasEnvioModule'},
      {path: 'almacen', loadChildren: './components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.module#TrabajarRutasModule'},
      {path: 'trabajarRuta', loadChildren: './components/trabajar-ruta/trabajar-rutas-almacen/trabajar-rutas.module#TrabajarRutasModule'},
      // {path: 'gestorRuta', loadChildren: './components/gestor-ruta/gestor-ruta.module#GestorRutaModule'},
      {path: 'gestorRuta', loadChildren: './components/gestor-ruta/asignar-ruta/asignar-ruta.module#AsignarRutaModule'},
      {path: 'asignar-ruta', loadChildren: './components/gestor-ruta/asignar-ruta/asignar-ruta.module#AsignarRutaModule'},
      {path: 'cerrar-ruta', loadChildren: './components/gestor-ruta/cerrar-ruta/cerrar-ruta.module#CerrarRutaModule'},
      {path: 'interfacturacion', loadChildren: './components/interfacturacion/interfacturacion.module#InterfacturacionModule'},
      {path: 'inspeccion', loadChildren: './components/responsableae/responsableae.module#ResponsableaeModule'},
      {path: 'embalar', loadChildren: './components/embalar/embalar.module#EmbalarModule'},
      {path: 'gestion', loadChildren: './components/gestion/gestion.module#GestionModule'},
      {path: 'gestion/consulta/asistencia', loadChildren: './components/gestion/consultas/asistencia/asistencia.module#AsistenciaModule'},
      {path: 'gestion/consulta/cobros', loadChildren: './components/gestion/consultas/cobros/cobros.module#CobrosModule'},
      {path: 'gestion/consulta/compras', loadChildren: './components/gestion/consultas/compras/compras.module#ComprasModule'},
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
      {path: 'gestion/consulta/entregas', loadChildren: './components/gestion/consultas/entregas/entregas.module#EntregasModule'},
      {
        path: 'gestion/consulta/facturacion',
        loadChildren: './components/gestion/consultas/facturacion/facturacion.module#FacturacionModule'
      },
      {path: 'gestion/consulta/llamadas', loadChildren: './components/gestion/consultas/llamadas/llamadas.module#LlamadasModule'},
      {
        path: 'gestion/consulta/nota-credito',
        loadChildren: './components/gestion/consultas/nota-credito/nota-credito.module#NotaCreditoModule'
      },
      {path: 'catalogo', loadChildren: './components/catalogo/catalogo.module#CatalogoModule'},
      {path: 'catalogo/clientes', loadChildren: './components/catalogo/cliente/cliente.module#ClienteModule'},
      {path: 'catalogo/clientes/carteras', loadChildren: './components/catalogo/cartera/cartera.module#CarteraModule'},
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
      {path: 'receptorMaterial', loadChildren: './components/material-receptor-gdl/material-receptor-gdl.module#MaterialReceptorGdlModule'},
      {path: 'controlarCobro', loadChildren: './components/controlar-cobro/controlar-cobro.module#ControlarCobroModule'},

      {path: 'productosBO', loadChildren: './components/productos-bo/productos-bo.module#ProductosBoModule'},
      { path: 'catalogo/empresas', loadChildren: './components/catalogo/empresas/empresas.module#EmpresasModule' },
      { path: 'catalogo/trabajadores', loadChildren: './components/catalogo/trabajadores/trabajadores.module#TrabajadoresModule' },
      { path: 'contabilidad/contables', loadChildren: './components/contabilidad/cuentas/cuentas.module#CuentasModule' },
      { path: 'contabilidad/polizas', loadChildren: './components/contabilidad/polizas/polizas.module#PolizasModule' },
      {path: 'docFaltante', loadChildren: './components/productos-doc-faltante/productos-doc-faltante.module#ProductosDocFaltanteModule'},
      {path: 'gestorCuarentena', loadChildren: './components/gestion-cuarentena/gestion-cuarentena.module#GestionCuarentenaModule'},
      {path: 'trabajarRutaCliente', loadChildren: './components/trabajar-ruta/ruta-envio-por-cliente/ruta-envio-por-cliente.module#RutaEnvioPorClienteModule'},
      {path: 'productoReclamo', loadChildren: './components/producto-reclamo/producto-reclamo.module#ProductoReclamoModule'},
      {path: 'consolaPrioridades', loadChildren: './components/consola-prioridades/consola-prioridades.module#ConsolaPrioridadesModule'},
      {path: 'consolaEnvio', loadChildren: './components/consola-envios/consola-envios.module#ConsolaEnviosModule'},
      {path: 'saldoFavor/saldo-nota-credito', loadChildren: './components/saldo-favor/saldo-nota-credito/saldo-nota-credito.module#SaldoNotaCreditoModule'},
      {path: 'saldos', loadChildren: './components/saldo-favor/saldos/saldos.module#SaldosModule'},
      {path: 'cartaPorte', loadChildren: './components/carta-porte/carta-porte.module#CartaPorteModule'},
      {path: 'stock', loadChildren: './components/material-stock/material-stock.module#MaterialStockModule'},
      {path: 'consolaDest', loadChildren: './components/consola-productos-destruccion/consola-productos-destruccion.module#ConsolaProductosDestruccionModule'}
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
