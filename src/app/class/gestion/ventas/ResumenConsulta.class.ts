export class ResumenConsulta {
    totalEntregaProgramada: number;
    totalEntregaUnica: number;
    tipoEntrega: number;
    totalFleteExpress: number;
    totalFleteNormal: number;
    tipoFletera: number;
    totalAdicional: number;
    totalfactura: number;
    totalNafta: number;
    totalCertificado: number;
    totalCartaUso: number;
    totalPacking: number;
    avisoCambios: number;
    confirmaciones: number;
    inspeccion: number;
    requisicion: number;
    facturacion: number;
    entregasTabOp: number;
    numFila: number;
    clientes: number;
    cierreRuta: number;
    revision: number;
    cargarFactura: number;
    pago: number;
    cobro: number;
    totalValorAduanalString: any;
    totalValorAduanal(arg0: any): any {
        throw new Error("Method not implemented.");
    }
    
    total: String;
     _clientes: number;
     _clientes_proveedores: number;
     _conceptoResultado:String;
     _cotizacionesTotal:Number;// pie PieChartPqGris
     _etiqueta:String;//  PieChartPqGris
     _etiquetaEncabezado:String; //  titulo interior PieChartPqGris
     _factura:Number;
     _fechaFinal:Date;
     _fechaInicio:Date;
     _mes:Number;
     _nivelI:String;
     _nivelIVista:String;
     _numFila: number;
     _ocompras: number;
     _periodo:Number;
     _partidas: number;// PieChartPqGris 
     _productos: number;// PieChartPqGris 
     _piezasTotal:Number = 0; // PieChartPqGris
     _total:Number;// monto PieChartPqGris
     _totalString:String;// PieChartPqGris
     _totalFolios: number;// PieChartPqGris
     _totalPedidos:Number;// PieChartPqGris
     _totalClientes: number;// PieChartPqGris
     _totalProveedores: number;// PieChartPqGris
     _totalCompras: number;// PieChartPqGris
     _totalCobros: number;// PieChartPqGris
     _totalPagos: number;// PieChartPqGris
     _totalDocumentos: number;// PieChartPqGris
     _totalLlamadas: number;// PieChartPqGris
     _totalTiempoRealizacion: number;// PieChartPqGris
     _totalET: number;// PieChartPqGris
     _totalFT: number;// PieChartPqGris
     _urgenciaAlta: number;// PieChartPqGris
     _urgenciaMedia: number;// PieChartPqGris
     _urgenciaBaja: number;// PieChartPqGris
     _registro: number;// PieChartPqGris
     _totalEntregas: number;
     _entregas: number;
     _flete:Number;
     _totalPermisos:Number;
     _noProductos:Number;
     _totalColaboradores: number;//PieChartPqGris
     _totalChecadas: number;//PieChartPqGris
     _notaDeCredito: number;//PieChartPqGris
     _provedorIndividual: number;
     _totalInasistencia: number;
     _totalAsistencia: number;
     _totalIncidentes: number; //PieChartPqGris
     _totalMarcas: number; //PieChartPqGris
     _clienteIndividual: number;
     _rankingCliente:Number;
     _rankingProveedor:Number;
     _rankingTableroCliente:Number;
     _etiquetaETyFT:String;
    
     _activarRankingTableroProductos:Number;
     _rankingTableroProductos:Number;
    
    
     _porcentaje:Number = 0;
     _monto:Number = 0;
     _usuario:String;
     _objetivoFundamental:Number
    
     _visMes: number;
     _facMes: number;
    
    
     _totalTiempoProceso: number;
    
     _totalCancelaciones: number;
    
     _totalIngresosPorcentaje:Number = 0;
     _totalComprasPorcentaje:Number = 0;
     _totalClientesPorcentaje:Number = 0;
     _totalProveedoresPorcentaje:Number = 0;
     _porcentajeDistribucion:Number = 0;
    //  _eventoTabClientes:EventoTableroClientes;
     _porcentaje2:Number;
     _monto2:Number;
     _montoAnterior:Number;
    
     _ev:String;
     _cobrador:String;
     _porcentajeString:String;
     _idCartera:Number;
     _nombreCartera:String;
     _folioCartera:String;
    
     _avisoCambios:Number;
     _confirmaciones:Number;
     _monitoreo:Number;
     _inspeccion:Number;
     _requisicion:Number;
     _facturacion:Number;
     _entregasTabOp:Number;
     _cobro:Number;
     _pago:Number;
     _revision:Number;
     _cargarFactura:Number;
     _cierreRuta:Number;
     _tipoProveedor:String;
     _pagador:String;
     _ruta:String;
     _industria:String;
     _anio: number;
     _nombreProveedor:String;
     _totalPiezas: number;
     _totalVisitas: number;
    
     _tipo:String;
     _realizada:Boolean;
    
    //VARIABLES EN VISTA
    /* totalGridMonto:Number;
     totalGridObjetivoPercent:Number;
     totalGrid*/
     _montoString:String;
     _usuarioVista:String;
     _porcentajeDistribucionString:String;
    //  _eventoTabProducto:EventoTableroProductos;
      _posicion:String;
     _noTipoTransito: number;
    
    /* VALORES DE FOOTER "TOTALES" */
     _footer_TotalClientes: number;
     _footer_TotalCompra:Number;
     _footer_TotalCompraFormato:String; // Formato en String
     _footer_TotalMontoAnterior:Number;
     _footer_TotalMontoAnteriorFormato:String; // Formato en String
    
     _totalPacking:Number;
     _totalCartaUso:Number;
     _totalCertificado:Number;
     _totalNafta:Number;
     _totalfactura:Number;
     _totalAdicional:Number;
    
    
     _totalAgentesAduanales: number; //PieChartPqGris
     _totalOrdenesDespacho: number; //PieChartPqGris
     _totalAcuseRecibo: number; //PieChartPqGris
     _totalSolicitudes: number; //PieChartPqGris
     _cantFamilia: number; //PieChartPqGris
     _totalValorAduanal:Number;//PieChartPqGris
     _totalValorAduanalString:String;//PieChartPqGris
     _totalPedimentos: number;
    
     _total_fletera: number;
     _total_guias: number;
     _total_bultos: number;
     _total_arribadas: number;
     _total_porArribar: number;

     _totalContactos: number;
     _tipoFletera: number;
     _totalFleteNormal: number;
     _totalFleteExpress: number;
     _tipoEntrega: number;
     _totalEntregaUnica: number;
     _totalEntregaProgramada: number;
     _totalVisita: number;
     _totalCRM: number;
     _numEjecutivoVentas: number;
     _totalCreditos: number;
     _totalValores: number;
    
    //	VARIABLES PARA LLENADO DE TABLA DE VENTAS VS VISITAS
     _idVisitaCliente: number;
     _calificacion: number;
     _reqRealizados;
     _totalReq: number;
     _noPendientes: number;
     _noHallazgos: number;
     _noRequisiciones: number;
     _noCotizaciones: number;
     _piezasCotizadas: number;
     _precioDolares:Number;
     _nombreUsuario:String;
     _nombreCliente:String;
     _contacto:String;
     _fechaVisita:Date;
     _idCliente: number;
     _email:String;
     _tel1:String;
     _tel2:String;
     _ext1:String;
     _ext2:String;
    
    //	VARIABLES PARA LLENADO DE TABLA DE VISITAS TIPO
     _vtmes: number;
     _vtTipoVisita:String;
     _vtVisitaRealizada:Boolean;
     _vtNombre:String;
     _vtUsuario:String;
     _vtContacto:String;
     _vtPuesto:String;
     _vtFecha:Date;
     _vtFechaCheckIn:Date;
     _vtAsunto:String;
     _vtEstado:String;
    
    
    //
     _visitasDetalle:Array<any>;
     _detallesAbierto:Boolean;
    
    /**
     * IMPORTANTE
     * al modificar/agregar alguna propiedad revisar PieChartPqGris para mantener compatibilidad con el modo resumen
     */
    
    resumenConsulta()
    {
        this._total = this._piezasTotal = this._factura = this._partidas = this.clientes = this.numFila = 0;
        this.cobro = this.pago = this.cargarFactura = this.revision = this.cierreRuta = this.entregasTabOp = 0;
        this.facturacion = this.requisicion = this.inspeccion = this.confirmaciones = this.avisoCambios = 0;
        this.totalPacking = this.totalCartaUso = this.totalCertificado = this.totalNafta = this.totalfactura = this.totalAdicional = 0;
        this.tipoFletera = this.totalFleteNormal = this.totalFleteExpress = this.tipoEntrega = this.totalEntregaUnica = this.totalEntregaProgramada = 0;
        this._ruta = "ND";
        this._industria = "ND";
    }

    public getRealizada():Boolean
    {
        return this._realizada;
    }

    public setRealizada(value:Boolean):void
    {
        this._realizada = value;
    }

    public getTipo():String
    {
        return this._tipo;
    }

    public  setTipo(value:String):void
    {
        this._tipo = value;
    }

    public  getTotalVisitas(): number
    {
        return this._totalVisitas;
    }

    public setTotalVisitas(value: number):void
    {
        this._totalVisitas = value;
    }

    public getTotalValores(): number
    {
        return this._totalValores;
    }

    public  setTotalValores(value: number):void
    {
        this._totalValores = value;
    }

    public getTotalCreditos(): number
    {
        return this._totalCreditos;
    }

    public setTotalCreditos(value: number):void
    {
        this._totalCreditos = value;
    }

    public getNumEjecutivoVentas(): number
    {
        return this._numEjecutivoVentas;
    }

    public  setNumEjecutivoVentas(value: number):void
    {
        this._numEjecutivoVentas = value;
    }

    public  getTotalCRM(): number
    {
        return this._totalCRM;
    }

    public  setTotalCRM(value: number):void
    {
        this._totalCRM = value;
    }

    public getTotalVisita(): number
    {
        return this._totalVisita;
    }

    public  setTotalVisita(value: number):void
    {
        this._totalVisita = value;
    }

    public  getTotalEntregaProgramada(): number
    {
        return this._totalEntregaProgramada;
    }

    public  setTotalEntregaProgramada(value: number):void
    {
        this._totalEntregaProgramada = value;
    }

    public  getTotalEntregaUnica(): number
    {
        return this._totalEntregaUnica;
    }

    public setTotalEntregaUnica(value: number):void
    {
        this._totalEntregaUnica = value;
    }

    public getTipoEntrega(): number
    {
        return this._tipoEntrega;
    }

    public  setTipoEntrega(value: number):void
    {
        this._tipoEntrega = value;
    }

    public  getTotalFleteExpress(): number
    {
        return this._totalFleteExpress;
    }

    public  setTotalFleteExpress(value: number):void
    {
        this._totalFleteExpress = value;
    }

    public  getTotalFleteNormal(): number
    {
        return this._totalFleteNormal;
    }

    public   setTotalFleteNormal(value: number):void
    {
        this._totalFleteNormal = value;
    }

    public   getTipoFletera(): number
    {
        return this._tipoFletera;
    }

    public   setTipoFletera(value: number):void
    {
        this._tipoFletera = value;
    }

    public   getRankingTableroProductos():Number
    {
        return this._rankingTableroProductos;
    }

    public   setRankingTableroProductos(value:Number):void
    {
        this._rankingTableroProductos = value;
    }

    public   getActivarRankingTableroProductos():Number
    {
        return this._activarRankingTableroProductos;
    }

    public   setActivarRankingTableroProductos(value:Number):void
    {
        this._activarRankingTableroProductos = value;
    }

    public   getTotalValorAduanalString():String
    {
        return this._totalValorAduanalString;
    }

    public   setTotalValorAduanalString(value:String):void
    {
        this._totalValorAduanalString = value;
    }

    public   getTotalPiezas(): number
    {
        return this._totalPiezas;
    }

    public   setTotalPiezas(value: number):void
    {
        this._totalPiezas = value;
    }

    public   getNombreProveedor():String
    {
        return this._nombreProveedor;
    }

    public   setNombreProveedor(value:String):void
    {
        this._nombreProveedor = value;
    }

    public   getTotalValorAduanal():Number
    {
        return this._totalValorAduanal;
    }

    public   setTotalValorAduanal(value:Number):void
    {
        this._totalValorAduanal = value;
       // this.totalValorAduanalString =  "$ " + UtilsFormatosNumericos.precisionADosDecimalesConComas(this.totalValorAduanal);
        this.totalValorAduanalString = this.totalValorAduanal;
    }
    
    public   getTotalPedimentos(): number
    {
        return this._totalPedimentos;
    }

    public   setTotalPedimentos(value: number):void
    {
        this._totalPedimentos = value;
    }

    public   getCantFamilia(): number
    {
        return this._cantFamilia;
    }
    
    public   setCantFamilia(value: number):void
    {
        this._cantFamilia = value;
    }

    public   getNoTipoTransito(): number
    {
        return this._noTipoTransito;
    }

    public   setNoTipoTransito(value: number):void
    {
        this._noTipoTransito = value;
    }

    public   getEtiquetaETyFT():String
    {
        return this._etiquetaETyFT;
    }

    public   setEtiquetaETyFT(value:String):void
    {
        this._etiquetaETyFT = value;
    }

    public   getPagador():String
    {
        return this._pagador;
    }

    public   setPagador(value:String):void
    {
        this._pagador = value;
    }

    public   getTipoProveedor():String
    {
        return this._tipoProveedor;
    }

    public   setTipoProveedor(value:String):void
    {
        this._tipoProveedor = value;
    }

    public   getCargarFactura():Number
    {
        return this._cargarFactura;
    }

    public   setCargarFactura(value:Number):void
    {
        this._cargarFactura = value;
    }

    public   getCierreRuta():Number
    {
        return this._cierreRuta;
    }

    public   setCierreRuta(value:Number):void
    {
        this._cierreRuta = value;
    }

    public   getRevision():Number
    {
        return this._revision;
    }

    public   setRevision(value:Number):void
    {
        this._revision = value;
    }

    public   getPago():Number
    {
        return this._pago;
    }

    public   setPago(value:Number):void
    {
        this._pago = value;
    }

    public   getCobro():Number
    {
        return this._cobro;
    }

    public   setCobro(value:Number):void
    {
        this._cobro = value;
    }

    public   getEntregasTabOp():Number
    {
        return this._entregasTabOp;
    }

    public   setEntregasTabOp(value:Number):void
    {
        this. _entregasTabOp = value;
    }

    public   getFacturacion():Number
    {
        return this._facturacion;
    }

    public   setFacturacion(value:Number):void
    {
        this._facturacion = value;
    }

    public   getTotalAsistencia(): number
    {
        return this._totalAsistencia;
    }
    
    public   setTotalAsistencia(value: number):void
    {
        this._totalAsistencia = value;
    }
    
    public   getTotalInasistencia(): number
    {
        return this._totalInasistencia;
    }
    
    public   setTotalInasistencia(value: number):void
    {
        this._totalInasistencia = value;
    }
    
    public   getNotaDeCredito(): number
    {
        return this._notaDeCredito;
    }
    
    public   setNotaDeCredito(value: number):void
    {
        this._notaDeCredito = value;
    }
    
    public   getTotalChecadas(): number
    {
        return this._totalChecadas;
    }
    
    public   setTotalChecadas(value: number):void
    {
        this._totalChecadas = value;
    }
    
    public   getTotalColaboradores(): number
    {
        return this._totalColaboradores;
    }
    
    public   setTotalColaboradores(value: number):void
    {
        this._totalColaboradores = value;
    }
    
    public   getTotalPermisos():Number
    {
        return this._totalPermisos;
    }
    
    public   setTotalPermisos(value:Number):void
    {
        this._totalPermisos = value;
    }
    
    public   getNoProductos():Number
    {
        return this._noProductos;
    }
    
    public   setNoProductos(value:Number):void
    {
        this._noProductos = value;
    }
    
    public   getFlete():Number
    {
        return this._flete;
    }
    
    public   setFlete(value:Number):void
    {
        this._flete = value;
    }
    
    public   getTotalEntregas(): number
    {
        return this._totalEntregas;
    }
    
    public   setTotalEntregas(value: number):void
    {
        this._totalEntregas = value;
    }
    
    public   getEntregas(): number
    {
        return this._entregas;
    }
    
    public   setEntregas(value: number):void
    {
        this._entregas = value;
    }
    
    public   getTotalClientes(): number
    {
        return this._totalClientes;
    }
    
    public   setTotalClientes(value: number):void
    {
        this._totalClientes = value;
    }
    
    public   getTotalPedidos():Number
    {
        return this._totalPedidos;
    }
    
    public   setTotalPedidos(value:Number):void
    {
        this._totalPedidos = value;
    }
    
    public   getTotalString():String
    {
        this._totalString = this.total;
        //this._totalString = '$ '+UtilsFormatosNumericos.precisionADosDecimalesConComas( this.total );
        return this._totalString;
    }
    
    public   setTotalString(value:String):void
    {
        this._totalString = value;
    }
    
    public   getClientes(): number
    {
        return this._clientes;
    }
    
    public   setClientes(value: number):void
    {
        this. _clientes = value;
    }

    
    public   getCotizacionesTotal():Number
    {
        return this._cotizacionesTotal;
    }
    
    public   setCotizacionesTotal(value:Number):void
    {
        this._cotizacionesTotal = value;
    }
    
    public   getEtiquetaEncabezado():String
    {
        return this._etiquetaEncabezado;
    }
    
    public   setEtiquetaEncabezado(value:String):void
    {
        this._etiquetaEncabezado = value;
    }
    
    public   getMes():Number
    {
        return this._mes;
    }
    
    public   setMes(value:Number):void
    {
        this._mes = value;
    }
    
    public   getPiezasTotal():Number
    {
        return this._piezasTotal;
    }
    
    public   setPiezasTotal(value:Number):void
    {
        this._piezasTotal = value;
    }
    
    public   getNivelI():String
    {
        return this._nivelI;
    }
    
    public   setNivelI(value:String):void
    {
        this._nivelI = value;
        
        if(this._nivelI == "AAplus")
        this._nivelIVista = "AA+";
        else
        this._nivelIVista = this._nivelI;
    }
    
    public   getEtiqueta():String
    {
        return this._etiqueta;
    }
    
    public   setEtiqueta(value:String):void
    {
        this._etiqueta = value;
    }
    
    public   getConceptoResultado():String
    {
        return this._conceptoResultado;
    }
    
    public   setConceptoResultado(value:String):void
    {
        this._conceptoResultado = value;
    }
    
    public   getTotal():Number
    {
        return this._total;
    }
    
    public   setTotal(value:Number):void
    {
        this._total = value;
    }
    
    public   getNumFila(): number
    {
        return this._numFila;
    }
    
    public   setNumFila(value: number):void
    {
        this._numFila = value;
    }
    
    public   getFactura():Number
    {
        return this._factura;
    }
    
    public   setFactura(value:Number):void
    {
        this._factura = value;
    }
    
    public   getPartidas(): number
    {
        return this._partidas;
    }
    
    public   setPartidas(value: number):void
    {
        this._partidas = value;
    }
    
    public   getClientes_proveedores(): number
    {
        return this._clientes_proveedores;
    }
    
    public   setClientes_proveedores(value: number):void
    {
        this._clientes_proveedores = value;
    }
    
    public   getTotalFolios(): number
    {
        return this._totalFolios;
    }
    
    public   setTotalFolios(value: number):void
    {
        this._totalFolios = value;
    }
    
    public   getOcompras(): number
    {
        return this._ocompras;
    }
    
    public   setOcompras(value: number):void
    {
        this._ocompras = value;
    }
    
    public   getFechaInicio():Date
    {
        return this._fechaInicio;
    }
    
    public   setFechaInicio(value:Date):void
    {
        this._fechaInicio = value;
    }
    
    public   getFechaFinal():Date
    {
        return this._fechaFinal;
    }
    
    public   setFechaFinal(value:Date):void
    {
        this._fechaFinal = value;
    }
    
    public   getTotalCompras(): number
    {
        return this._totalCompras;
    }
    
    public   setTotalCompras(value: number):void
    {
        this._totalCompras = value;
    }
    
    public   getPeriodo():Number
    {
        return this._periodo;
    }
    
    public   setPeriodo(value:Number):void
    {
        this._periodo = value;
    }
    
    public   getTotalCobros(): number
    {
        return this._totalCobros;
    }
    
    public   setTotalCobros(value: number):void
    {
        this._totalCobros = value;
    }
    
    public   getTotalPagos(): number
    {
        return this._totalPagos;
    }
    
    public   setTotalPagos(value: number):void
    {
        this._totalPagos = value;
    }
    
    public   getTotalDocumentos(): number
    {
        return this._totalDocumentos;
    }
    
    public   setTotalDocumentos(value: number):void
    {
        this._totalDocumentos = value;
    }
    
    public   getTotalLlamadas(): number
    {
        return this._totalLlamadas;
    }
    
    public   setTotalLlamadas(value: number):void
    {
        this._totalLlamadas = value;
    }
    
    public   getTotalTiempoRealizacion(): number
    {
        return this._totalTiempoRealizacion;
    }
    
    public   setTotalTiempoRealizacion(value: number):void
    {
        this._totalTiempoRealizacion = value;
    }
    
    public   getTotalET(): number
    {
        return this._totalET;
    }
    
    public   setTotalET(value: number):void
    {
        this._totalET = value;
    }
    
    public   getTotalFT(): number
    {
        return this._totalFT;
    }
    
    public   setTotalFT(value: number):void
    {
        this._totalFT = value;
    }
    
    public   getUrgenciaAlta(): number
    {
        return this._urgenciaAlta;
    }
    
    public   setUrgenciaAlta(value: number):void
    {
        this._urgenciaAlta = value;
    }
    
    public   getUrgenciaMedia(): number
    {
        return this._urgenciaMedia;
    }
    
    public   setUrgenciaMedia(value: number):void
    {
        this._urgenciaMedia = value;
    }
    
    public   getUrgenciaBaja(): number
    {
        return this._urgenciaBaja;
    }
    
    public   setUrgenciaBaja(value: number):void
    {
        this._urgenciaBaja = value;
    }
    
    public   getRegistro(): number
    {
        return this._registro;
    }
    
    public   setRegistro(value: number):void
    {
        this._registro = value;
    }
    
    public   getProvedorIndividual(): number
    {
        return this._provedorIndividual;
    }
    
    public   setProvedorIndividual(value: number):void
    {
        this._provedorIndividual = value;
    }
    
    public   getTotalCancelaciones(): number
    {
        return this._totalCancelaciones;
    }
    
    public   setTotalCancelaciones(value: number):void
    {
        this._totalCancelaciones = value;
    }
    
    public   getTotalTiempoProceso(): number
    {
        return this._totalTiempoProceso;
    }
    
    public   setTotalTiempoProceso(value: number):void
    {
        this._totalTiempoProceso = value;
    }
    public   getTotalIncidentes(): number
    {
        return this._totalIncidentes;
    }
    
    public   setTotalIncidentes(value: number):void
    {
        this._totalIncidentes = value;
    }
    
    public   getTotalIngresosPorcentaje():Number
    {
        return this._totalIngresosPorcentaje;
    }
    
    public   setTotalIngresosPorcentaje(value:Number):void
    {
        this._totalIngresosPorcentaje = value;
    }
    
    public   getTotalClientesPorcentaje():Number
    {
        return this._totalClientesPorcentaje;
    }
    
    public   setTotalClientesPorcentaje(value:Number):void
    {
        this._totalClientesPorcentaje = value;
    }
    
    public   getPorcentaje():Number
    {
        return this._porcentaje;
    }
    
    public   setPorcentaje(value:Number):void
    {
        this._porcentaje = value;
    }
    
    public   getMonto():Number
    {
        return this._monto;
    }
    
    public   setMonto(value:Number):void
    {
        this._monto = value;
        
      //  this.montoString =  "$ " + UtilsFormatosNumericos.precisionADosDecimalesConComas(this._monto);
    }
    
    public   getUsuario():String
    {
        return this._usuario;
    }
    
    public   setUsuario(value:String):void
    {
        this._usuario = value;
        if(value)
        this._usuarioVista = this._usuario.toUpperCase(); 
    }
    
    public   getPorcentajeDistribucion():Number
    {
        return this._porcentajeDistribucion;
    }
    
    public   setPorcentajeDistribucion(value:Number):void
    {
     //   this._porcentajeDistribucion = UtilsFormatosNumericos.truncarDecimalesCeil(value,2);
     //   this._porcentajeDistribucionString = UtilsFormatosNumericos.truncarDecimalesCeil(value,2) + " %";
    }
    
    public   getMontoString():String
    {
        return this._montoString;
    }
    
    public   setMontoString(value:String):void
    {
        this._montoString = value;
    }

    public   getNivelIVista():String
    {
        return this._nivelIVista;
    }

    public   setNivelIVista(value:String):void
    {
        this._nivelIVista = value;
    }

    public   getUsuarioVista():String
    {
        return this._usuarioVista;
    }

    public   setUsuarioVista(value:String):void
    {
        this._usuarioVista = value;
    }

        public   getClienteIndividual(): number
    {
        return this._clienteIndividual;
    }
    
    public   setClienteIndividual(value: number):void
    {
        this._clienteIndividual = value;
    }

    public   getRankingCliente():Number
    {
        return this._rankingCliente;
    }

    public   setRankingCliente(value:Number):void
    {
        this._rankingCliente = value;
    }

    public   getRankingTableroCliente():Number
    {
        return this._rankingTableroCliente;
    }

    public   setRankingTableroCliente(value:Number):void
    {
        this._rankingTableroCliente = value;
    }

    public   getTotalMarcas(): number
    {
        return this._totalMarcas;
    }

    public   setTotalMarcas(value: number):void
    {
        this._totalMarcas = value;
    }

    public   getObjetivoFundamental():Number
    {
        return this._objetivoFundamental;
    }

    public   setObjetivoFundamental(value:Number):void
    {
        this._objetivoFundamental = value;
    }

    // public   getEventoTabClientes():EventoTableroClientes
    // {
    //     return this._eventoTabClientes;
    // }

    // public   setEventoTabClientes(value:EventoTableroClientes):void
    // {
    //     this._eventoTabClientes = value;
    // }

    public   getMonto2():Number
    {
        return this._monto2;
    }

    public   setMonto2(value:Number):void
    {
        this._monto2 = value;
    }

    public   getMontoAnterior():Number
    {
        return this._montoAnterior;
    }

    public   setMontoAnterior(value:Number):void
    {
        this._montoAnterior = value;
    }

    public   getPorcentaje2():Number
    {
        return this._porcentaje2;
    }

    public   setPorcentaje2(value:Number):void
    {
        this._porcentaje2 = value;
    }

    public   getEv():String
    {
        return this._ev;
    }

    public   setEv(value:String):void
    {
        this._ev = value;
    }

    public   getCobrador():String
    {
        return this._cobrador;
    }

    public   setCobrador(value:String):void
    {
        this._cobrador = value;
    }

    public   getPorcentajeString():String
    {
        return this._porcentajeString;
    }

    public   setPorcentajeString(value:String):void
    {
        this._porcentajeString = value;
    }

    public   getIdCartera():Number
    {
        return this._idCartera;
    }

    public   setIdCartera(value:Number):void
    {
        this._idCartera = value;
    }

    public   getNombreCartera():String
    {
        return this._nombreCartera;
    }

    public   setNombreCartera(value:String):void
    {
        this._nombreCartera = value;
    }

    public   getFolioCartera():String
    {
        return this._folioCartera;
    }

    public   setFolioCartera(value:String):void
    {
        this._folioCartera = value;
    }

    public   getAvisoCambios():Number
    {
        return this._avisoCambios;
    }

    public   setAvisoCambios(value:Number):void
    {
        this._avisoCambios = value;
    }

    public   getConfirmaciones():Number
    {
        return this._confirmaciones;
    }

    public   setConfirmaciones(value:Number):void
    {
        this._confirmaciones = value;
    }

    public   getMonitoreo():Number
    {
        return this._monitoreo;
    }

    public   setMonitoreo(value:Number):void
    {
        this._monitoreo = value;
    }

    public   getRequisicion():Number
    {
        return this._requisicion;
    }

    public   setRequisicion(value:Number):void
    {
        this._requisicion = value;
    }

    public   getInspeccion():Number
    {
        return this._inspeccion;
    }

    public   setInspeccion(value:Number):void
    {
        this._inspeccion = value;
    }

    public   getTotalProveedoresPorcentaje():Number
    {
        return this._totalProveedoresPorcentaje;
    }

    public   setTotalProveedoresPorcentaje(value:Number):void
    {
        this._totalProveedoresPorcentaje = value;
    }

    public   getTotalComprasPorcentaje():Number
    {
        return this._totalComprasPorcentaje;
    }

    public   setTotalComprasPorcentaje(value:Number):void
    {
        this._totalComprasPorcentaje = value;
    }

    public   getRankingProveedor():Number
    {
        return this._rankingProveedor;
    }

    public   setRankingProveedor(value:Number):void
    {
        this._rankingProveedor = value;
    }

    public   getTotalProveedores(): number
    {
        return this._totalProveedores;
    }

    public   setTotalProveedores(value: number):void
    {
        this._totalProveedores = value;
    }

    public   getPorcentajeDistribucionString():String
    {
        return this._porcentajeDistribucionString;
    }

    public   setPorcentajeDistribucionString(value:String):void
    {
        this._porcentajeDistribucionString = value;
    }

    // public   getEventoTabProducto():EventoTableroProductos
    // {
    //     return this._eventoTabProducto;
    // }

    // public   setEventoTabProducto(value:EventoTableroProductos):void
    // {
    //     this._eventoTabProducto = value;
    // }

    public   getPosicion():String
    {
        return this._posicion;
    }

    public   setPosicion(value:String):void
    {
        this._posicion = value;
    }

    public   getFooter_TotalClientes(): number
    {
        return this._footer_TotalClientes;
    }

    public   setFooter_TotalClientes(value: number):void
    {
        this._footer_TotalClientes = value;
    }

    public   getFooter_TotalCompra():Number
    {
        return this._footer_TotalCompra;
    }

    public   setFooter_TotalCompra(value:Number):void
    {
        this._footer_TotalCompra = value;
        //this._footer_TotalCompraFormato =  "$ " + UtilsFormatosNumericos.precisionADosDecimalesConComas( value );
    }

    public   getFooter_TotalCompraFormato():String
    {
        return this._footer_TotalCompraFormato;
    }

    public   setFooter_TotalCompraFormato(value:String):void
    {
        this._footer_TotalCompraFormato = value;
    }

    public   getFooter_TotalMontoAnterior():Number
    {
        return this._footer_TotalMontoAnterior;
    }

    public   setFooter_TotalMontoAnterior(value:Number):void
    {
        this._footer_TotalMontoAnterior = value;
       // this. _footer_TotalMontoAnteriorFormato = "$ " + UtilsFormatosNumericos.precisionADosDecimalesConComas( value );
    }

    public   getFooter_TotalMontoAnteriorFormato():String
    {
        return this._footer_TotalMontoAnteriorFormato;
    }

    public   setFooter_TotalMontoAnteriorFormato(value:String):void
    {
        this._footer_TotalMontoAnteriorFormato = value;
    }

    public   getAnio(): number
    {
        return this._anio;
    }

    public   setAnio(value: number):void
    {
        this._anio = value;
    }

    public   getRuta():String
    {
        return this._ruta;
    }

    public   setRuta(value:String):void
    {
        this._ruta = value;
    }

    public   getIndustria():String
    {
        return this._industria;
    }

    public   setIndustria(value:String):void
    {
        this._industria = value;
    }

    public   getTotalPacking():Number
    {
        return this._totalPacking;
    }

    public   setTotalPacking(value:Number):void
    {
        this._totalPacking = value;
    }

    public   getTotalCartaUso():Number
    {
        return this._totalCartaUso;
    }

    public   setTotalCartaUso(value:Number):void
    {
        this._totalCartaUso = value;
    }

    public   getTotalCertificado():Number
    {
        return this._totalCertificado;
    }

    public   setTotalCertificado(value:Number):void
    {
        this._totalCertificado = value;
    }

    public   getTotalNafta():Number
    {
        return this._totalNafta;
    }

    public   setTotalNafta(value:Number):void
    {
        this._totalNafta = value;
    }

    public   getTotalfactura():Number
    {
        return this._totalfactura;
    }

    public   setTotalfactura(value:Number):void
    {
        this._totalfactura = value;
    }

    public   getTotalAdicional():Number
    {
        return this._totalAdicional;
    }

    public   setTotalAdicional(value:Number):void
    {
        this._totalAdicional = value;
    }

    public   getTotalAgentesAduanales(): number
    {
        return this._totalAgentesAduanales;
    }

    public   setTotalAgentesAduanales(value: number):void
    {
        this._totalAgentesAduanales = value;
    }

    public   getTotalOrdenesDespacho(): number
    {
        return this._totalOrdenesDespacho;
    }

    public   setTotalOrdenesDespacho(value: number):void
    {
        this._totalOrdenesDespacho = value;
    }

    public   getTotalAcuseRecibo(): number
    {
        return this._totalAcuseRecibo;
    }

    public   setTotalAcuseRecibo(value: number):void
    {
        this._totalAcuseRecibo = value;
    }

    public   getTotalSolicitudes(): number
    {
        return this._totalSolicitudes;
    }

    public   setTotalSolicitudes(value: number):void
    {
        this._totalSolicitudes = value;
    }

    public   getTotal_fletera(): number
    {
        return this._total_fletera;
    }

    public   setTotal_fletera(value: number):void
    {
        this._total_fletera = value;
    }

    public   getTotal_guias(): number
    {
        return this._total_guias;
    }

    public   setTotal_guias(value: number):void
    {
        this._total_guias = value;
    }

    public   getTotal_bultos(): number
    {
        return this._total_bultos;
    }

    public   setTotal_bultos(value: number):void
    {
        this._total_bultos = value;
    }

    public   getTotal_arribadas(): number
    {
        return this._total_arribadas;
    }

    public   setTotal_arribadas(value: number):void
    {
        this._total_arribadas = value;
    }

    public   getTotal_porArribar(): number
    {
        return this._total_porArribar;
    }

    public   setTotal_porArribar(value: number):void
    {
        this._total_porArribar = value;
    }

    public   getTotalContactos(): number
    {
        return this._totalContactos;
    }

    public   setTotalContactos(value: number):void
    {
        this._totalContactos = value;
    }

    public   getIdVisitaCliente(): number
    {
        return this._idVisitaCliente;
    }

    public   setIdVisitaCliente(value: number):void
    {
        this._idVisitaCliente = value;
    }

    public   getCalificacion(): number
    {
        return this._calificacion;
    }

    public   setCalificacion(value: number):void
    {
        this._calificacion = value;
    }

    public   getReqRealizados()
    {
        return this._reqRealizados;
    }

    public   setReqRealizados(value):void
    {
        this._reqRealizados = value;
    }

    public   getTotalReq(): number
    {
        return  this._totalReq;
    }

    public   setTotalReq(value: number):void
    {
        this._totalReq = value;
    }

    public   getNoPendientes(): number
    {
        return  this._noPendientes;
    }

    public   setNoPendientes(value: number):void
    {
        this._noPendientes = value;
    }

    public   getNoHallazgos(): number
    {
        return  this._noHallazgos;
    }

    public   setNoHallazgos(value: number):void
    {
        this._noHallazgos = value;
    }

    public   getNoRequisiciones(): number
    {
        return  this._noRequisiciones;
    }

    public   setNoRequisiciones(value: number):void
    {
        this._noRequisiciones = value;
    }

    public   getNombreUsuario():String
    {
        return this._nombreUsuario;
    }

    public   setNombreUsuario(value:String):void
    {
        this._nombreUsuario = value;
    }

    public   getNombreCliente():String
    {
        return this._nombreCliente;
    }

    public   setNombreCliente(value:String):void
    {
        this._nombreCliente = value;
    }

    public   getNontacto():String
    {
        return this._contacto;
    }

    public   setNontacto(value:String):void
    {
        this._contacto = value;
    }

    public   getFechaVisita():Date
    {
        return this._fechaVisita;
    }

    public   setFechaVisita(value:Date):void
    {
        this._fechaVisita = value;
    }

    public   getVisitasDetalle():Array<any>
    {
        return  this._visitasDetalle;
    }

    public   setVisitasDetalle(value:Array<any>):void
    {
        this._visitasDetalle = value;
    }

    public   getDetallesAbierto():Boolean
    {
        return  this._detallesAbierto;
    }

    public   setDetallesAbierto(value:Boolean):void
    {
        this._detallesAbierto = value;
    }

    public   getExt2():String
    {
        return  this._ext2;
    }

    public   setExt2(value:String):void
    {
        this._ext2 = value;
    }

    public   getExt1():String
    {
        return  this._ext1;
    }

    public   setExt1(value:String):void
    {
        this._ext1 = value;
    }

    public   getTel2():String
    {
        return  this._tel2;
    }

    public   setTel2(value:String):void
    {
        this._tel2 = value;
    }

    public   getTel1():String
    {
        return  this._tel1;
    }

    public   setTel1(value:String):void
    {
        this._tel1 = value;
    }

    public   getEmail():String
    {
        return  this._email;
    }

    public   setEmail(value:String):void
    {
        this._email = value;
    }

    public   getIdCliente(): number
    {
        return  this._idCliente;
    }

    public   setIdCliente(value: number):void
    {
        this._idCliente = value;
    }

    public   getPrecioDolares():Number
    {
        return  this._precioDolares;
    }

    public   setPrecioDolares(value:Number):void
    {
        this._precioDolares = value;
    }

    public   getPiezasCotizadas(): number
    {
        return  this._piezasCotizadas;
    }

    public   setPiezasCotizadas(value: number):void
    {
        this._piezasCotizadas = value;
    }

    public   getNoCotizaciones(): number
    {
        return  this._noCotizaciones;
    }

    public   setNoCotizaciones(value: number):void
    {
        this._noCotizaciones = value;
    }

    public   getVtmes(): number
    {
        return  this._vtmes;
    }

    public   setVtmes(value: number):void
    {
        this._vtmes = value;
    }

    public   getVtTipoVisita():String
    {
        return  this._vtTipoVisita;
    }

    public   setVtTipoVisita(value:String):void
    {
        this._vtTipoVisita = value;
    }

    public   getVtVisitaRealizada():Boolean
    {
        return  this._vtVisitaRealizada;
    }

    public   setVtVisitaRealizada(value:Boolean):void
    {
        this._vtVisitaRealizada = value;
    }

    public   getVtNombre():String
    {
        return  this._vtNombre;
    }

    public   setVtNombre(value:String):void
    {
        this._vtNombre = value;
    }

    public   getVtUsuario():String
    {
        return  this._vtUsuario;
    }

    public   setVtUsuario(value:String):void
    {
        this._vtUsuario = value;
    }

    public   getVtContacto():String
    {
        return  this._vtContacto;
    }

    public   setVtContacto(value:String):void
    {
        this._vtContacto = value;
    }

    public   getVtPuesto():String
    {
        return  this._vtPuesto;
    }

    public   setVtPuesto(value:String):void
    {
        this._vtPuesto = value;
    }

    public   getVtFecha():Date
    {
        return  this._vtFecha;
    }

    public   setVtFecha(value:Date):void
    {
        this._vtFecha = value;
    }

    public   getVtFechaCheckIn():Date
    {
        return  this._vtFechaCheckIn;
    }

    public   setVtFechaCheckIn(value:Date):void
    {
        this._vtFechaCheckIn = value;
    }

    public   getVtAsunto():String
    {
        return  this._vtAsunto;
    }

    public   setVtAsunto(value:String):void
    {
        this._vtAsunto = value;
    }

    public   getVtEstado():String
    {
        return  this._vtEstado;
    }

    public   setVtEstado(value:String):void
    {
        this._vtEstado = value;
    }

    public   getVisMes(): number
    {
        return this._visMes;
    }

    public   setVisMes(value: number):void
    {
        this._visMes = value;
    }

    public   getFacMes(): number
    {
        return this._facMes;
    }

    public   setFacMes(value: number):void
    {
        this._facMes = value;
    }

    public   getProductos(): number
    {
        return this._productos;
    }

    public   setProductos(value: number):void
    {
        this._productos = value;
    }


}

