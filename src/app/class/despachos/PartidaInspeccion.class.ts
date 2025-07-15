import { DocumentoAdjunto } from "../comun/DocumentoAdjunto.class";
import { PartidaCompra } from "../compras/PartidaCompra.class";


export class PartidaInspeccion extends PartidaCompra {

	idProveedor: number;
	idPPedido: number;
	nombreProveedor: string;
	manejo: string;
	paisProveedor: string
	/*  origen :string;*/
	rechazoXDoc: Boolean;
	rechazoXInsp: Boolean;
	fechaInicioInspeccion: Date;
	fechaFinInspeccion: Date;
	disponibilidadPedimento: string;
	guia: string;
	idioma: string;
	mesCaduca: string;
	mesNum:number;
	anoCaduca: string;
	caducidad: string;
	edicion: string;
	parciales: string;
	folioPackingList: string;
	estadoRechazo: string;
	numPartidasProgramadas: number;
	numPartidasRegulares: number;
	numPartidasFEx: number;
	documento: string;
	documentoSDS: string;
	tipoDocumento: string;
	presentacion: string;
	edoPrevioPP: string;
	edoPrevioPC: string;
	inspector: string;
	editoPartida: Boolean;
	revisoNumPiezas: Boolean;
	revisoCaducidad: Boolean;
	revisoLote: Boolean;
	revisoDoc: Boolean;
	insertoPiezas: Boolean;
	pedidoFacturadoPor: string;
	//  rechazoAPartida :string;
	//  editoPiezas:Boolean;

	/////////////////////////////variables para la tabla y graficas
	enTiempo: string;
	fechaEstimadaEntregaString: string;
	fechaInicioInspeccionString: string;
	numPartidas: number = 0;
	numRechazosXDoc: number;
	numRechazosXDocAbiertos: number;
	numRechazosXDocCerrados: number;
	numRechazosXIns: number;
	numRechazosXInsAbiertos: number;
	numRechazosXInsCerrados: number;
	manejoMasCritico: string;
	numManejoMasCritico: number = -2;
	numOrdenesCompra: number;
	FEEMasCercana: Date;
	FEEMasCercanaString: string;
	pedidosInternosAsociados: number;
	situacionMasCritica: string;
	numSituacionMasCritica: number = -2;
	//			variables para el renderer OrdenCompraRenderer
	ET: string;
	numET: number = -1;
	numUR: number = -1;
	numFT: number = -1;
	numST: number = -1;
	numCG: number = -1;
	numRG: number = -1;
	numAB: number = -1;
	numNA: number = -1;
	numFR: number = -1;
	numFE: number = -1;
	numFP: number = -1;
	numAbierto: number = -2;
	numCerrado: number = -2;
	ultimo: string = "";
	rechaString: string = "";
	//			/variables para el renderer OrdenCompraRenderer
	numFechaInicioInspeccionDias: number = 0;


	folioOrdenDespacho: string;
	folioListaArribo: string;
	diasRestantes: number;
	ruta: string;
	zonaMensajeria: string;
	prioridad: string;
	puntos: string;
	criterio: string;

	prioridadFEE: string;
	prioridadRDestino: string;
	prioridadRParciales: string;
	prioridadManejo: string;
	prioridadUDArribo: string;
	prioridadControl: string;
	puntosFEE: number;
	puntosRDestino: number;
	puntosRParciales: number;
	puntosManejo: number;
	puntosUDArribo: number;
	puntosControl: number;
	frecuencia: string;
	aceptaParciales: number;
	folioEtiqueta: string;

	numPartidasContabilizadas: number;
	numPiezasContabilizadas: number;
	numPiezasPriori1: number;
	numPiezasPriori2: number;
	numPiezasPriori3: number;
	montoTotalPriori1: number;
	montoTotalPriori2: number;
	montoTotalPriori3: number;
	prioridadesContenidas: string;
	conceptoAux: string;
	idCliente: number;
	esImportado: Boolean;
	estadoFisico: string;
	fisicamenCon: string;
	ubicacion: string;
	referenciaOC: number;
	referenciaFact: number;
	estado: string;



	/*variables de vista inspeccionar productos*/

	loteDistinto: Boolean;
	catCorrecto: Boolean;
	descripcionCorrecta: Boolean;
	presentacionCorrecta: Boolean;
	loteCorrecto: Boolean;
	caducidadCorrecta: Boolean;
	fisicamenteCorrecto: Boolean;
	documentacionCorrecta: Boolean;
	despachable: Boolean;
	idiomaCorecto: Boolean;
	edicionCorrecta: Boolean;

  fFrente: string;
	fArriba:string;
	fAbajo:string ;
	loteOriginal: string;
	reporte: string;

	fechaFinString: string;
	almacen: string;
	transportacion: string;
	conDocumentacion: Boolean;
	esPublicacion: Boolean = true;
	fechaInsString: string;

	esTitulo: Boolean;
	colectado: Boolean;
	tiempoInspeccion: Date;
	prioridadp: number;
	codigo: any;
	concepto: any;
	pedimento: any;

	/* tienen que ser heradadas */
	cantidadCompra: number;
	fea: Date;
	diasFiltro: string;


	/*Variables para el itemRender "Conceptos" la vista de colectar*/
	num: number;
	prioridadCalculada: string;
	cantPartidas: number;
	fechaFinEmbalaje: Date;
	compra: string; /* borrar */

	/*Variables de inspaccion nivel pieza*/
	acumPiezas:number;
	contIncidencia: number;
	contDespachable: number;
	totalPiezas:number;
	idPieza:number;
	tabla:string;
	descripcion: string;

	videoPartida:string;

	certificado:any;
	hojaSeguridad:any;
	listaArchivos:any = new Array<any> ();
	codigoQrBolsa:string;
	qrBolsaIncidencia:string;
  pasosImprimirEtiqueta:Boolean = true; // Variable para cambiar a qr o etiqueta
  prioridadRuta: string;
  puntosRuta: number;
  cargaDoc: boolean; // Variable para saber si se cargo o no el certificado.
  /****Se agrego el campo para obtener el nombre de las imagenes de rechazo****/
  nombreImagenesRechazo: any = new Array<string> ();
  comentariosImagen: any = new Array<string>();
  unidadCambio: string;
  cantidadCambio: string;
  idPartidaInspeccion: number;
 /* aplicaDocumentacion: boolean;
  public getaplicaDocumentacion(): boolean {
    return this.aplicaDocumentacion;
  }
  public setaplicaDocumentacion(value: boolean): void {
    this.aplicaDocumentacion = value;
  }*/
  public getcantidadCambio(): string {
    return this.cantidadCambio;
  }

  public setcantidadCambio(value: string): void {
    this.cantidadCambio = value;
  }
  public getunidadCambio(): string {
    return this.unidadCambio;
  }

  public setunidadCambio(value: string): void {
    this.unidadCambio = value;
  }
  public getcomentariosImagen(): Array<string> {
    return this.comentariosImagen;
  }

  public setcomentariosImagen(value: Array<string>): void {
    this.comentariosImagen = value;
  }
  public getcargaDoc(): boolean {
    return this.cargaDoc;
  }

  public setcargaDoc(value: boolean): void {
    this.cargaDoc = value;
  }
  public getnombreImagenesRechazo(): Array<any> {
    return this.nombreImagenesRechazo;
  }

  public setnombreImagenesRechazo(value: Array<any>): void {
    this.nombreImagenesRechazo = value;
  }
  public getpuntosRuta(): number {
    return this.puntosRuta;
  }

  public setpuntosRuta(value: number): void {
    this.puntosRuta = value;
  }
  public getprioridadRuta(): string {
    return this.prioridadRuta;
  }

  public setprioridadRuta(value: string): void {
    this.prioridadRuta = value;
  }
	public getfechaFinEmbalaje(): Date {
		return this.fechaFinEmbalaje;
	}

	public setfechaFinEmbalaje(value: Date): void {
		this.fechaFinEmbalaje = value;
	}

	public getcantPartidas(): number {
		return this.cantPartidas;
	}

	public setcantPartidas(value: number): void {
		this.cantPartidas = value;
	}

	public getprioridadCalculada(): string {
		return this.prioridadCalculada;
	}

	public setprioridadCalculada(value: string): void {
		this.prioridadCalculada = value;
	}

	public getprioridadp(): number {
		return this.prioridadp;
	}

	public setprioridadp(value: number): void {
		this.prioridadp = value;
	}

	public gettiempoInspeccion(): Date {
		return this.tiempoInspeccion;
	}

	public settiempoInspeccion(value: Date): void {
		this.tiempoInspeccion = value;
	}

	public getcolectado(): Boolean {
		return this.colectado;
	}

	public setcolectado(value: Boolean): void {
		this.colectado = value;
	}

	public getesTitulo(): Boolean {
		return this.esTitulo;
	}

	public setesTitulo(value: Boolean): void {
		this.esTitulo = value;
	}

	public gettransportacion(): string {
		return this.transportacion;
	}

	public settransportacion(value: string): void {
		this.transportacion = value;
	}

	public getfechaFinString(): string {
		return this.fechaFinString;
	}

	public setfechaFinString(value: string): void {
		this.fechaFinString = value;
	}

	public getalmacen(): string {
		return this.almacen;
	}

	public setalmacen(value: string): void {
		this.almacen = value;
	}

	public getesPublicacion(): Boolean {
		return this.esPublicacion;
	}

	public setesPublicacion(value: Boolean): void {
		this.esPublicacion = value;
	}

	public getpuntosRParciales(): number {
		return this.puntosRParciales;
	}

	public setpuntosRParciales(value: number): void {
		this.puntosRParciales = value;
	}

	public getpuntosRDestino(): number {
		return this.puntosRDestino;
	}

	public setpuntosRDestino(value: number): void {
		this.puntosRDestino = value;
	}

	public getfechaInsString(): string {
		return this.fechaInsString;
	}

	public setfechaInsString(value: string): void {
		this.fechaInsString = value;
	}

	public getloteOriginal(): string {
		return this.loteOriginal;
	}

	public setloteOriginal(value: string): void {
		this.loteOriginal = value;
	}

	public getedicionCorrecta(): Boolean {
		return this.edicionCorrecta;
	}

	public setedicionCorrecta(value: Boolean): void {
		this.edicionCorrecta = value;
	}

	public getidiomaCorecto(): Boolean {
		return this.idiomaCorecto;
	}

	public setidiomaCorecto(value: Boolean): void {
		this.idiomaCorecto = value;
	}

	public getreporte(): string {
		return this.reporte;
	}

	public setreporte(value: string): void {
		this.reporte = value;
	}

	public getpuntosControl(): number {
		return this.puntosControl;
	}

	public setpuntosControl(value: number): void {
		this.puntosControl = value;
	}

	public getpuntosUDArribo(): number {
		return this.puntosUDArribo;
	}

	public setpuntosUDArribo(value: number): void {
		this.puntosUDArribo = value;
	}

	public getpuntosManejo(): number {
		return this.puntosManejo;
	}

	public setpuntosManejo(value: number): void {
		this.puntosManejo = value;
	}

	public getpuntosFEE(): number {
		return this.puntosFEE;
	}

	public setpuntosFEE(value: number): void {
		this.puntosFEE = value;
	}

	public getFFrente(): string {
		return this.fFrente;
	}

	public setFFrente(value: string): void {
		this.fFrente = value;
	}

	public getFArriba(): string {
		return this.fArriba;
	}

	public setFArriba(value: string): void {
		this.fArriba = value;
	}

	public getFAbajo(): string {
		return this.fAbajo;
	}

	public setFAbajo(value: string): void {
		this.fAbajo = value;
	}

	public getdocumentacionCorrecta(): Boolean {
		return this.documentacionCorrecta;
	}

	public setdocumentacionCorrecta(value: Boolean): void {
		this.documentacionCorrecta = value;
	}

	public getloteDistinto(): Boolean {
		return this.loteDistinto;
	}

	public setloteDistinto(value: Boolean): void {
		this.loteDistinto = value;
	}

	public getdespachable(): Boolean {
		return this.despachable;
	}

	public setdespachable(value: Boolean): void {
		this.despachable = value;
	}

	public getdescripcionCorrecta(): Boolean {
		return this.descripcionCorrecta;
	}

	public setdescripcionCorrecta(value: Boolean): void {
		this.descripcionCorrecta = value;
	}

	public getconDocumentacion(): Boolean {
		return this.conDocumentacion;
	}

	public setconDocumentacion(value: Boolean): void {
		this.conDocumentacion = value;
	}

	public getloteCorrecto(): Boolean {
		return this.loteCorrecto;
	}

	public setloteCorrecto(value: Boolean): void {
		this.loteCorrecto = value;
	}

	public getfisicamenteCorrecto(): Boolean {
		return this.fisicamenteCorrecto;
	}

	public setfisicamenteCorrecto(value: Boolean): void {
		this.fisicamenteCorrecto = value;
	}

	public getcaducidadCorrecta(): Boolean {
		return this.caducidadCorrecta;
	}

	public setcaducidadCorrecta(value: Boolean): void {
		this.caducidadCorrecta = value;
	}

	public getpresentacionCorrecta(): Boolean {
		return this.presentacionCorrecta;
	}

	public setpresentacionCorrecta(value: Boolean): void {
		this.presentacionCorrecta = value;
	}

	public getcatCorrecto(): Boolean {
		return this.catCorrecto;
	}

	public setcatCorrecto(value: Boolean): void {
		this.catCorrecto = value;
	}

	public getfisicamenCon(): string {
		return this.fisicamenCon;
	}

	public setfisicamenCon(value: string): void {
		this.fisicamenCon = value;
	}

	public getesImportado(): Boolean {
		return this.esImportado;
	}

	public setesImportado(value: Boolean): void {
		this.esImportado = value;
	}

	public getidCliente(): Number {
		return this.idCliente;
	}

	public setidCliente(value: number): void {
		this.idCliente = value;
	}

	public getconceptoAux(): string {
		return this.conceptoAux;
	}

	public setconceptoAux(value: string): void {
		this.conceptoAux = value;
	}

	public getCodigo(): any {
		return this.codigo;
	}

	public setCodigo(value: any): void {
		this.codigo = value;
	}

	public getConcepto(): any {
		return this.concepto;
	}

	public setconcepto(value: any): void {
		this.concepto = value;
	}

	public getPedimento(): any {
		return this.pedimento;
	}

	public setPedimento(value: any): void {
		this.pedimento = value;
	}

	public getnumPiezasPriori3(): number {
		return this.numPiezasPriori3;
	}

	public setnumPiezasPriori3(value: number): void {
		this.numPiezasPriori3 = value;
	}

	public getnumPiezasContabilizadas(): number {
		return this.numPiezasContabilizadas;
	}

	public setnumPiezasContabilizadas(value: number): void {
		this.numPiezasContabilizadas = value;
	}

	public getnumPartidasContabilizadas(): number {
		return this.numPartidasContabilizadas;
	}

	public setnumPartidasContabilizadas(value: number): void {
		this.numPartidasContabilizadas = value;
	}

	public getnumPiezasPriori2(): number {
		return this.numPiezasPriori2;
	}

	public setnumPiezasPriori2(value: number): void {
		this.numPiezasPriori2 = value;
	}

	public getnumPiezasPriori1(): number {
		return this.numPiezasPriori1;
	}

	public setnumPiezasPriori1(value: number): void {
		this.numPiezasPriori1 = value;
	}

	public getfolioEtiqueta(): string {
		return this.folioEtiqueta;
	}

	public setfolioEtiqueta(value: string): void {
		this.folioEtiqueta = value;
	}

	public getaceptaParciales(): number {
		return this.aceptaParciales;
	}

	public setaceptaParciales(value: number): void {
		this.aceptaParciales = value;
	}

	public getfrecuencia(): string {
		return this.frecuencia;
	}

	public setfrecuencia(value: string): void {
		this.frecuencia = value;
	}


	public getprioridadUDArribo(): string {
		return this.prioridadUDArribo;
	}

	public setprioridadUDArribo(value: string): void {
		this.prioridadUDArribo = value;
	}

	public getprioridadManejo(): string {
		return this.prioridadManejo;
	}

	public setprioridadManejo(value: string): void {
		this.prioridadManejo = value;
	}

	public getprioridadRParciales(): string {
		return this.prioridadRParciales;
	}

	public setprioridadRParciales(value: string): void {
		this.prioridadRParciales = value;
	}

	public getprioridadRDestino(): string {
		return this.prioridadRDestino;
	}

	public setprioridadRDestino(value: string): void {
		this.prioridadRDestino = value;
	}

	public getprioridadFEE(): string {
		return this.prioridadFEE;
	}

	public setprioridadFEE(value: string): void {
		this.prioridadFEE = value;
	}

	public getcriterio(): string {
		return this.criterio;
	}

	public setcriterio(value: string): void {
		this.criterio = value;
	}

	public getpuntos(): string {
		return this.puntos;
	}

	public setpuntos(value: string): void {
		this.puntos = value;
	}

	public getprioridad(): string {
		return this.prioridad;
	}

	public setprioridad(value: string): void {
		this.prioridad = value;
	}

	public getzonaMensajeria(): string {
		return this.zonaMensajeria;
	}

	public setzonaMensajeria(value: string): void {
		this.zonaMensajeria = value;
	}

	public getruta(): string {
		return this.ruta;
	}

	public setruta(value: string): void {
		this.ruta = value;
	}

	public getdiasRestantes(): number {
		return this.diasRestantes;
	}

	public setdiasRestantes(value: number): void {
		this.diasRestantes = value;
	}

	public getfolioListaArribo(): string {
		return this.folioListaArribo;
	}

	public setfolioListaArribo(value: string): void {
		this.folioListaArribo = value;
	}

	public getfolioOrdenDespacho(): string {
		return this.folioOrdenDespacho;
	}

	public setfolioOrdenDespacho(value: string): void {
		this.folioOrdenDespacho = value;
	}

	public getpedidoFacturadoPor(): string {
		return this.pedidoFacturadoPor;
	}

	public setpedidoFacturadoPor(value: string): void {
		this.pedidoFacturadoPor = value;
	}

	public getinsertoPiezas(): Boolean {
		return this.insertoPiezas;
	}

	public setinsertoPiezas(value: Boolean): void {
		this.insertoPiezas = value;
	}

	public getanoCaduca(): string {
		return this.anoCaduca;
	}

	public setanoCaduca(value: string): void {
		this.anoCaduca = value;
	}

	public getmesCaduca(): string {
		return this.mesCaduca;
	}

	public setmesCaduca(value: string): void {
		this.mesCaduca = value;
	}

	public getguia(): string {
		return this.guia;
	}

	public setguia(value: string): void {
		this.guia = value;
	}

	public getdisponibilidadPedimento(): string {
		return this.disponibilidadPedimento;
	}

	public setdisponibilidadPedimento(value: string): void {
		this.disponibilidadPedimento = value;
	}

	public getfechaFinInspeccion(): Date {
		return this.fechaFinInspeccion;
	}

	public setfechaFinInspeccion(value: Date): void {
		this.fechaFinInspeccion = value;
	}

	public geteditoPartida(): Boolean {
		return this.editoPartida;
	}

	public seteditoPartida(value: Boolean): void {
		this.editoPartida = value;
	}

	public getrevisoDoc(): Boolean {
		return this.revisoDoc;
	}

	public setrevisoDoc(value: Boolean): void {
		this.revisoDoc = value;
	}

	public getrevisoLote(): Boolean {
		return this.revisoLote;
	}

	public setrevisoLote(value: Boolean): void {
		this.revisoLote = value;
	}

	public getrevisoCaducidad(): Boolean {
		return this.revisoCaducidad;
	}

	public setrevisoCaducidad(value: Boolean): void {
		this.revisoCaducidad = value;
	}

	public getrevisoNumPiezas(): Boolean {
		return this.revisoNumPiezas;
	}

	public setrevisoNumPiezas(value: Boolean): void {
		this.revisoNumPiezas = value;
	}

	public geinspector(): string {
		return this.inspector;
	}

	public setinspector(value: string): void {
		this.inspector = value;
	}

	public getedoPrevioPC(): string {
		return this.edoPrevioPC;
	}

	public setedoPrevioPC(value: string): void {
		this.edoPrevioPC = value;
	}

	public getedoPrevioPP(): string {
		return this.edoPrevioPP;
	}

	public setedoPrevioPP(value: string): void {
		this.edoPrevioPP = value;
	}

	public getidPPedido(): number {
		return this.idPPedido;
	}

	public setidPPedido(value: number): void {
		this.idPPedido = value;
	}

	public getpresentacion(): string {
		return this.presentacion;
	}

	public setpresentacion(value: string): void {
		this.presentacion = value;
	}

	public getdocumento(): string {
		if (this.documento == null || this.documento == "") this.documento = "No especificado";
		return this.documento;
	}

	public setdocumento(value: string): void {
		this.documento = value;
	}

	public getnumFechaInicioInspeccionDias(): number {
		var hoy: Date = new Date();
		/* 	if(this.fechaInicioInspeccion != null) this.numFechaInicioInspeccionDias = UtilsFecha.regresaDiferenciaEntreFechasEnDias( this.fechaInicioInspeccion, hoy)-1; descomentar */
		return this.numFechaInicioInspeccionDias;
	}

	public setnumFechaInicioInspeccionDias(value: number): void {
		this.numFechaInicioInspeccionDias = value;
	}

	public getfechaInicioInspeccionString(): string {
		/* 	if(fechaInicioInspeccion != null) fechaInicioInspeccionString = UtilsFecha.formatoFechaDDMMMYYYY(fechaInicioInspeccion) + ' '
				+(fechaInicioInspeccion.getHours() < 10 ? '0'+fechaInicioInspeccion.getHours():fechaInicioInspeccion.getHours() )
				+ ':'
				+ (fechaInicioInspeccion.getMinutes() < 10 ? '0'+fechaInicioInspeccion.getMinutes():fechaInicioInspeccion.getMinutes() );
			else fechaInicioInspeccionString = "No definido"; */
		return this.fechaInicioInspeccionString;
	}

	public setfechaInicioInspeccionString(value: string): void {
		this.fechaInicioInspeccionString = value;
	}

	public getnumPartidasFEx(): number {
		return this.numPartidasFEx;
	}

	public setnumPartidasFEx(value: number): void {
		this.numPartidasFEx = value;
	}

	public getnumPartidasRegulares(): number {
		return this.numPartidasRegulares;
	}

	public setnumPartidasRegulares(value: number): void {
		this.numPartidasRegulares = value;
	}

	public getnumPartidasProgramadas(): number {
		return this.numPartidasProgramadas;
	}

	public setnumPartidasProgramadas(value: number): void {
		this.numPartidasProgramadas = value;
	}

	public getnumSituacionMasCritica(): number {
		return this.numSituacionMasCritica;
	}

	public setnumSituacionMasCritica(value: number): void {
		this.numSituacionMasCritica = value;
	}

	public getnumManejoMasCritico(): number {
		return this.numManejoMasCritico;
	}

	public setnumManejoMasCritico(value: number): void {
		this.numManejoMasCritico = value;
	}

	public getrechaString(): string {
		return this.rechaString;
	}

	public setrechaString(value: string): void {
		this.rechaString = value;
	}

	public getultimo(): string {
		return this.ultimo;
	}

	public setultimo(value: string): void {
		this.ultimo = value;
	}

	public getnumCerrado(): number {
		return this.numCerrado;
	}

	public setnumCerrado(value: number): void {
		this.numCerrado = value;
	}

	public getnumAbierto(): number {
		return this.numAbierto;
	}

	public setnumAbierto(value: number): void {
		this.numAbierto = value;
	}

	public getnumFP(): number {
		return this.numFP;
	}

	public setnumFP(value: number): void {
		this.numFP = value;
	}

	public getnumFE(): number {
		return this.numFE;
	}

	public setnumFE(value: number): void {
		this.numFE = value;
	}

	public getnumFR(): number {
		return this.numFR;
	}

	public setnumFR(value: number): void {
		this.numFR = value;
	}

	public getnumNA(): number {
		return this.numNA;
	}

	public setnumNA(value: number): void {
		this.numNA = value;
	}

	public getnumAB(): number {
		return this.numAB;
	}

	public setnumAB(value: number): void {
		this.numAB = value;
	}

	public getnumRG(): number {
		return this.numRG;
	}

	public setnumRG(value: number): void {
		this.numRG = value;
	}

	public getnumCG(): number {
		return this.numCG;
	}

	public setnumCG(value: number): void {
		this.numCG = value;
	}

	public getnumST(): number {
		return this.numST;
	}

	public setnumST(value: number): void {
		this.numST = value;
	}

	public getnumFT(): number {
		return this.numFT;
	}

	public setnumFT(value: number): void {
		this.numFT = value;
	}

	public getnumUR(): number {
		return this.numUR;
	}

	public setnumUR(value: number): void {
		this.numUR = value;
	}

	public getnumET(): number {
		return this.numET;
	}

	public setnumET(value: number): void {
		this.numET = value;
	}

	public getET(): string {
		return this.ET;
	}

	public setET(value: string): void {
		this.ET = value;
	}

	public getnumOrdenesCompra(): number {
		return this.numOrdenesCompra;
	}

	public setnumOrdenesCompra(value: number): void {
		this.numOrdenesCompra = value;
	}

	public getsituacionMasCritica(): string {
		return this.situacionMasCritica;
	}

	public setsituacionMasCritica(value: string): void {
		this.situacionMasCritica = value;
	}

	public getpedidosInternosAsociados(): number {
		return this.pedidosInternosAsociados;
	}

	public setpedidosInternosAsociados(value: number): void {
		this.pedidosInternosAsociados = value;
	}

	public getFEEMasCercanaString(): string {
		return this.FEEMasCercanaString;
	}

	public setFEEMasCercanaString(value: string): void {
		this.FEEMasCercanaString = value;
	}

	public getFEEMasCercana(): Date {
		return this.FEEMasCercana;
	}

	public setFEEMasCercana(value: Date): void {
		this.FEEMasCercana = value;
	}

	public getmanejoMasCritico(): string {
		return this.manejoMasCritico;
	}

	public setmanejoMasCritico(value: string): void {
		this.manejoMasCritico = value;
	}

	public getnumRechazosXInsCerrados(): number {
		return this.numRechazosXInsCerrados;
	}

	public setnumRechazosXInsCerrados(value: number): void {
		this.numRechazosXInsCerrados = value;
	}

	public getnumRechazosXDocCerrados(): number {
		return this.numRechazosXDocCerrados;
	}

	public setnumRechazosXDocCerrados(value: number): void {
		this.numRechazosXDocCerrados = value;
	}

	public getnumRechazosXInsAbiertos(): number {
		return this.numRechazosXInsAbiertos;
	}

	public setnumRechazosXInsAbiertos(value: number): void {
		this.numRechazosXInsAbiertos = value;
	}

	public getnumRechazosXDocAbiertos(): number {
		return this.numRechazosXDocAbiertos;
	}

	public setnumRechazosXDocAbiertos(value: number): void {
		this.numRechazosXDocAbiertos = value;
	}

	public getnumRechazosXIns(): number {
		return this.numRechazosXIns;
	}

	public setnumRechazosXIns(value: number): void {
		this.numRechazosXIns = value;
	}

	public getnumRechazosXDoc(): number {
		return this.numRechazosXDoc;
	}

	public setnumRechazosXDoc(value: number): void {
		this.numRechazosXDoc = value;
	}

	public getnumPartidas(): number {
		return this.numPartidas;
	}

	public setnumPartidas(value: number): void {
		this.numPartidas = value;
	}

	public getfechaEstimadaEntregaString(): string {
		/* this.fechaEstimadaEntregaString = UtilsFecha.formatoFechaDDMMMYYYY(fechaEstimadaEntrega); */
		return this.fechaEstimadaEntregaString;
	}

	public setfechaEstimadaEntregaString(value: string): void {
		this.fechaEstimadaEntregaString = value;
	}

	public getenTiempo(): string {
		var fechaHoy: Date = new Date();
		var diferenciaDias: number = 0;
		this.enTiempo = "unset";
		/* if( getfechaEstimadaEntrega() != null ) diferenciaDias = UtilsFecha.regresaDiferenciaEntreFechasEnDias( fechaEstimadaEntrega, fechaHoy )-1;
		if( diferenciaDias < -5 ){
			this.enTiempo = "En tiempo";
		}
		if( diferenciaDias > -6 && diferenciaDias <= -1 ){
			this.enTiempo = "Urgente";
		}
		if(diferenciaDias > -1){
			this.enTiempo = "Fuera de tiempo";
		} */
		return this.enTiempo;
	}

	public setenTiempo(value: string): void {
		this.enTiempo = value;
	}

	public getestadoRechazo(): string {
		return this.estadoRechazo;
	}

	public setestadoRechazo(value: string): void {
		this.estadoRechazo = value;
	}

	public getfolioPackingList(): string {
		return this.folioPackingList;
	}

	public setfolioPackingList(value: string): void {
		this.folioPackingList = value;
	}

	public getparciales(): string {
		return this.parciales;
	}

	public setparciales(value: string): void {
		this.parciales = value;
	}

	public getcaducidad(): string {
		return this.caducidad;
	}

	public setcaducidad(value: string): void {
		this.caducidad = value;
	}

	public getfechaInicioInspeccion(): Date {
		return this.fechaInicioInspeccion;
	}

	public setfechaInicioInspeccion(value: Date): void {
		this.fechaInicioInspeccion = value;
	}

	public getrechazoXInsp(): Boolean {
		return this.rechazoXInsp;
	}

	public setrechazoXInsp(value: Boolean): void {
		this.rechazoXInsp = value;
	}

	public getrechazoXDoc(): Boolean {
		return this.rechazoXDoc;
	}

	public setrechazoXDoc(value: Boolean): void {
		this.rechazoXDoc = value;
	}


	public getpaisProveedor(): string {
		return this.paisProveedor;
	}

	public setpaisProveedor(value: string): void {
		this.paisProveedor = value;
	}

	public getidProveedor(): number {
		return this.idProveedor;
	}

	public setidProveedor(value: number): void {
		this.idProveedor = value;
	}

	public getmontoTotalPriori1(): number {
		return this.montoTotalPriori1;
	}

	public setmontoTotalPriori1(value: number): void {
		this.montoTotalPriori1 = value;
	}

	public getmontoTotalPriori2(): number {
		return this.montoTotalPriori2;
	}

	public setmontoTotalPriori2(value: number): void {
		this.montoTotalPriori2 = value;
	}

	public getmontoTotalPriori3(): number {
		return this.montoTotalPriori3;
	}

	public setmontoTotalPriori3(value: number): void {
		this.montoTotalPriori3 = value;
	}

	public getprioridadesContenidas(): string {
		return this.prioridadesContenidas;
	}

	public setprioridadesContenidas(value: string): void {
		this.prioridadesContenidas = value;
	}

	public getmanejo(): string {
		return this.manejo;
	}

	public setmanejo(value: string): void {
		this.manejo = value;
	}

	public getubicacion(): string {
		return this.ubicacion;
	}

	public setubicacion(value: string): void {
		this.ubicacion = value;
	}

	public getnum(): number {
		return this.num;
	}

	public setnum(value: number): void {
		this.num = value;
	}

	public geteferenciaOC(): number {
		return this.referenciaOC;
	}

	public setreferenciaOC(value: number): void {
		this.referenciaOC = value;
	}

	public getreferenciaFact(): number {
		return this.referenciaFact;
	}

	public setreferenciaFact(value: number): void {
		this.referenciaFact = value;
	}

	public getCompra(): string {
		return this.compra;
	}

	public setCompra(value: string): void {
		this.compra = value;
	}

	public getCantidadCompra(): number {
		return this.cantidadCompra;
	}

	public setCantidadCompra(value: number): void {
		this.cantidadCompra = value;
	}

	public getNombreProveedor(): string {
		return this.nombreProveedor;
	}

	public setNombreProveedor(value: string): void {
		this.nombreProveedor = value;
	}

	public getFea(): Date {
		return this.fea;
	}

	public setFea(value: Date): void {
		this.fea = value;
	}

	public getDiasFiltro(): string {
		return this.diasFiltro;
	}

	public setDiasFiltro(value: string): void {
		this.diasFiltro = value;
	}

	public getEstado(): string {
		return this.estado;
	}

	public setEstado(value: string): void {
		this.estado = value;
	}

		public setMesNum(value: number): void {
		this.mesNum = value;
	}

	public getMesNum(): number {
		return this.mesNum;
	}

	public getAcumPiezas(): number {
		return this.acumPiezas;
	}

	public setAcumPiezas(value: number): void {
		this.acumPiezas = value;
	}

	public getContIncidencia(): number {
		return this.contIncidencia;
	}

	public setContIncidencia(value: number): void {
		this.contIncidencia = value;
	}
	public getContDespachable(): number {
		return this.contDespachable;
	}

	public setContDespachable(value: number): void {
		this.contDespachable = value;
	}

	public getTotalPiezas(): number {
		return this.totalPiezas;
	}

	public setTotalPiezas(value: number): void {
		this.totalPiezas = value;
	}

	public getIdPieza(): number {
		return this.idPieza;
	}

	public setIdPieza(value: number): void {
		this.idPieza = value;
	}

	public getTabla(): string {
		return this.tabla;
	}

	public setTabla(value: string): void {
		this.tabla = value;
	}

	public getDescripcion(): string {
		return this.descripcion;
	}

	public setDescripcion(value: string): void {
		this.descripcion = value;
	}

	public getVideoPartida(): string {
		return this.videoPartida;
	}

	public setVideoPartida(value: string): void {
		this.videoPartida = value;
	}

	public getCertificado(): DocumentoAdjunto {
		return this.certificado;
	}

	public setCertificado(value: DocumentoAdjunto): void {
		this.certificado = value;
	}

	public getHojaSeguridad(): DocumentoAdjunto {
		return this.hojaSeguridad;
	}

	public setHojaSeguridad(value: DocumentoAdjunto): void {
		this.hojaSeguridad = value;
	}


		public getListaArchivos(): Array<any> {
				return this.listaArchivos;
		}

		public setListaArchivos(value: Array<any>): void {
				this.listaArchivos = value;
		}
		public getCodigoQrBolsa(): string {
			return this.codigoQrBolsa;
		}

		public setCodigoQrBolsa(value: string): void {
			this.codigoQrBolsa = value;
		}

		public getQrBolsaIncicendia(): string {
			return this.qrBolsaIncidencia;
		}

		public setQrBolsaIncidencia(value: string): void {
			this.qrBolsaIncidencia = value;
		}

		public getPasosImprimirEtiqueta(): Boolean {
			return this.pasosImprimirEtiqueta;
		}

		public setPasosImprimirEtiqueta(value: Boolean): void {
			this.pasosImprimirEtiqueta= value;
		}

}
