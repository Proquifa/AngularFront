import { DocumentoAdjunto } from "../comun/DocumentoAdjunto.class";

export class parametrosInspeccion {

    listaPzas: Array<any>;
    idCompra: number;
    idPPedido: number;
    numAnaquel: number;
    letraAnaquel: string;
    ubicacion: string;
    numRechazos: number;
    usuario: string;
    fechaInspeccion: string;
    fechaInicio: Date;
    fechaFin: Date;
    finalizarPendiente: Boolean;
    estado:string;
    videoPartida:string;
    documento:string;
    documentoSDS:string;
    ubicacionAsignada: string;
    codigoQrBolsa:string;
    qrBolsaIncidencia:string;
    prioridad: string; // Se agrego este parametro para mandar la prioridad
    aplicaDocumentacion: boolean; // Se agrego este parametro para mandar la prioridad
    cantidadProducto: string; // Se agrego para enviar la cantidad
    unidadProducto: String; // Se agrego para enviar la unidad
    idProducto: Number;
    manejo: String;
    lote: string;
    manejoTransporte: string;
    tipoPresentacion: string;
    nombreImagenesRechazo: any = new Array<string> ();
    edicion: string;
    idioma: string;
  cantDespachables: number;
  idProveedor: number;
  documentosSDS: String;
  documentos: String;
  cargaDoc: boolean;
  comentarios: any = new Array<string>();
  unidadCambio: string;
  cantidadCambio: string;
  codigoProd: string;
  presentacionProd: string;
  marca: string;
  tipo: string;
  idInspeccionOC: number;
  idUsuario: number;


  public gettipo(): string {
    return this.marca;
  }
  public settipo(value: string): void {
    this.marca = value;
  }
  public getmarca(): string {
    return this.marca;
  }
  public setmarca(value: string): void {
    this.marca = value;
  }
  public getpresentacionProd(): string {
    return this.presentacionProd;
  }
  public setpresentacionProd(value: string): void {
    this.presentacionProd = value;
  }
  public getcodigoProd(): string {
    return this.codigoProd;
  }
  public setcodigoProd(value: string): void {
    this.codigoProd = value;
  }
  public getunidadCambio(): string {
    return this.unidadCambio;
  }
  public setunidadCambio(value: string): void {
    this.unidadCambio = value;
  }
  public getcantidadCambio(): string {
    return this.cantidadCambio;
  }
  public setcantidadCambio(value: string): void {
    this.cantidadCambio = value;
  }
  public getcomentarios(): Array<any> {
    return this.comentarios;
  }

  public setcomentarios(value: Array<any>): void {
    this.comentarios = value;
  }
  public getcargaDoc(): boolean {
    return this.cargaDoc;
  }
  public setcargaDoc(value: boolean): void {
    this.cargaDoc = value;
  }
  public getdocumentos(): String {
    return this.documentos;
  }
  public setdocumentos(value: String): void {
    this.documentos = value;
  }

  public getdocumentosSDS(): String {
    return this.documentosSDS;
  }
  public setdocumentosSDS(value: String): void {
    this.documentosSDS = value;
  }
  public getidProveedor(): number {
    return this.idProveedor;
  }
  public setidProveedor(value: number): void {
    this.idProveedor = value;
  }
  public getcantDespachables(): number {
    return this.cantDespachables;
  }

  public setcantDespachables(value: number): void {
    this.cantDespachables = value;
  }
  public getIdioma(): string {
    return this.idioma;
  }
  public setIdioma(value: string): void {
    this.idioma = value;
  }
  public getEdicion(): string {
    return this.edicion;
  }
  public setEdicion(value: string): void {
    this.edicion = value;
  }
  public getnombreImagenesRechazo(): Array<any> {
    return this.nombreImagenesRechazo;
  }

  public setnombreImagenesRechazo(value: Array<any>): void {
    this.nombreImagenesRechazo = value;
  }
  public gettipoPresentacion(): string {
    return this.tipoPresentacion;
  }
  public settipoPresentacion(value: string): void {
    this.tipoPresentacion = value;
  }
    public getmanejoTransporte(): string {
    return this.manejoTransporte;
  }
  public setmanejoTransporte(value: string): void {
    this.manejoTransporte = value;
  }
  public getlote(): string {
    return this.lote;
  }
  public setlote(value: string): void {
    this.lote = value;
  }
  public getmanejo(): String {
    return this.manejo;
  }
  public setmanejo(value: String): void {
    this.manejo = value;
  }
  public getidProducto(): Number {
    return this.idProducto;
  }
  public setidProducto(value: Number): void {
    this.idProducto = value;
  }
  public getunidadProducto(): String {
    return this.unidadProducto;
  }
  public setunidadProducto(value: String): void {
    this.unidadProducto = value;
  }
  public getcantidadProducto(): string {
    return this.cantidadProducto;
  }
  public setcantidadProducto(value: string): void {
    this.cantidadProducto = value;
  }
  public getaplicaDocumentacion(): boolean {
    return this.aplicaDocumentacion;
  }
  public setaplicaDocumentacion(value: boolean): void {
    this.aplicaDocumentacion = value;
  }
  public getprioridad(): string {
    return this.prioridad;
  }

  public setprioridad(value: string): void {
    this.prioridad = value;
  }
    public getListaPzas(): Array<any> {
        return this.listaPzas;
    }

    public setListaPzas(value: Array<any>): void {
        this.listaPzas = value;
    }

    public getidCompra(): number {
		return this.idCompra;
	}

	public setidCompra(value: number): void {
		this.idCompra = value;
    }

    public getidpPedido(): number {
		return this.idPPedido;
	}

	public setidpPedido(value: number): void {
		this.idPPedido = value;
	}


    public getnumAnaquel(): number {
		return this.numAnaquel;
	}

	public setnumAnaquel(value: number): void {
		this.numAnaquel = value;
	}


    public getubicacion(): string {
		return this.ubicacion;
	}

	public setubicacion(value: string): void {
		this.ubicacion = value;
    }

    public getnumRechazos(): number {
		return this.numRechazos;
	}

	public setnumRechazos(value: number): void {
		this.numRechazos = value;
    }

    public getusuario(): string {
		return this.usuario;
	}

	public setusuario(value: string): void {
		this.usuario = value;
    }

    public getfechaInicio(): Date {
		return this.fechaInicio;
	}

	public getfechaInspeccion(): string {
		return this.fechaInspeccion;
	}

	public setfechaInspeccion(value: string): void {
		this.fechaInspeccion = value;
    }

	public setfechaInicio(value: Date): void {
		this.fechaInicio = value;
    }

    public getfechaFin(): Date {
		return this.fechaFin;
	}

	public setfechaFinEmbalaje(value: Date): void {
		this.fechaFin = value;
	}


    public getfinalizarPendiente(): Boolean {
		return this.finalizarPendiente;
	}

	public setfinalizarPendiente(value: Boolean): void {
		this.finalizarPendiente = value;
	}

	public getEstado(): string {
		return this.estado;
	}

	public setEstado(value: string): void {
		this.estado = value;
    }
  public getVideoPartida(): string {
		return this.videoPartida;
	}

	public setVideoPartida(value: string): void {
		this.videoPartida = value;
    }

  public getdocumento(): string {
    if (this.documento == null || this.documentoSDS == "") this.documento = "No especificado";
    return this.documento;
  }

  public setdocumento(value: string): void {
    this.documento = value;
  }
  public getdocumentoSDS(): string {
    if (this.documentoSDS == null || this.documentoSDS == "") this.documentoSDS = "No especificado";
    return this.documentoSDS;
  }

  public setdocumentoSDS(value: string): void {
    this.documentoSDS = value;
  }
  public getUbicacionAsignada(): string {
		return this.ubicacionAsignada;
	}

	public setUbicacionAsignada(value: string): void {
		this.ubicacionAsignada = value;
    }

  public getCodigoQrBolsa(): string {
    return this.codigoQrBolsa;
  }

  public setCodigoQrBolsa(value: string): void {
    this.codigoQrBolsa = value;
  }


  public getQrBolsaIncidencia(): string {
    return this.qrBolsaIncidencia;
  }

  public setQrBolsaIncidencia(value: string): void {
    this.qrBolsaIncidencia = value;
  }

  public getIdInspeccionOC(): number {
    return this.idInspeccionOC;
  }

  public setIdInspeccionOC(value: number): void {
    this.idInspeccionOC = value;
  }
}
