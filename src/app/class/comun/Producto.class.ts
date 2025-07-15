export class Producto {

    tipoPresentacion: string;
    manejoTransporte: string;
    lote: string;
    tipo: string;
    fabrica: string;
    idioma:string;
    edicion:string;
    control:string;

    costo:Number;
		descuento:Number;
		costoMinimo:Number;
		iva:Number;
		precioFijo:Number;
		pureza:Number;
		totalVentas:Number;

		idProducto:Number;
		cant:Number;

		fecha:Date;
		caduca:Date;

		vigente:Boolean;

		industria:String;
		subtipo:String;
		codigo:String;

		moneda:String;


		concepto:String;
		proveedor:Number;
		cantidad: string;
		unidad:String;
		tiempoEntrega:String;
		documentacion:String;
		manejo:String;
		disponibilidad:String;
		estado:String = '';
		descripcion:String;
		total:String;

		tipoDocumento:String;

		configuracion_Precio:Number;
		categoriaPrecioLista:Number;

		licencia:String;

		cas:String;
		depositarioInter:String;
		estadoFisico:String;
		fraccionArancelaria:String;
		DTA:Number;
		IGI:Number;
		requierePermisoImp:String;
		tipoPermiso:String;
		linea:String;
		clasificacion:String;
		estatus:String;
		origen:String;
		catalogo:String;
		loteAnterior:String;
		idFabricante:number;
		transitoMandatorioMexico:Boolean;

		familiaString:String;
		indicePrecio:Number;


		// Variables para vista

		monedaAbreviatura:String;
		monedaSimbolo:String;
		tipoString:String;
		isCheck:Boolean;
		unico:Boolean;
		subtipoString:String;

		/* variables servicio reportarVisita*/
		tiempoEntregaRuta:any;
		rutaCli:String;
		numStock:Number;
		precioMX:Number;
		precioEuro:Number;
		precioDolar:Number;
		costoMinimoMX:Number;
		costoMinimoEuro:Number;
		pdolar:Number;
		edolar:Number;

	/* variables para la vista reportarVisita*/

		cantPiezas:Number;
		totalCostoPiezas:Number;
		asignado:Boolean;
		costoAux:Number;
    sds: string;

  public getSDS(): string {
    return this.sds;
  }

  public setSDS(value: string): void {
    this.sds = value;
  }
    public getTipoPresentacion(): string {
        return this.tipoPresentacion;
    }

    public setTipoPresentacion(value: string): void {
        this.tipoPresentacion = value;
    }

    public getManejoTransporte(): string {
        return this.manejoTransporte;
    }

    public setManejoTransporte(value: string): void {
        this.manejoTransporte = value;
    }

    public getLote(): string {
        return this.lote;
    }

    public setLote(value: string): void {
        this.lote = value;
    }

    public getFabrica(): string {
        return this.tipo;
    }

    public setFabrica(value: string): void {
        this.tipo = value;
    }


    public getIdioma(): string {
        return this.idioma;
    }

    public setIdioma(value: string): void {
        this.tipo = value;
    }

    public getEdicion(): string {
        return this.edicion;
    }

    public setEdicion(value: string): void {
        this.tipo = this.edicion;
    }

    public getControl(): string {
        return this.control;
    }

    public setControl(value: string): void {
        this.control = value;
    }


    		public getindicePrecio():Number
    		{
    			return this.indicePrecio;
    		}

    		public setindicePrecio(value:Number):void
    		{
    			this.indicePrecio = value;
    		}

    		public getedolar():Number
    		{
    			return this.edolar;
    		}

    		public setedolar(value:Number):void
    		{
    			this.edolar = value;
    		}

    		public getpdolar():Number
    		{
    			return this.pdolar;
    		}

    		public setpdolar(value:Number):void
    		{
    			this.pdolar = value;
    		}

    		public getcostoMinimoEuro():Number
    		{
    			return this.costoMinimoEuro;
    		}

    		public setcostoMinimoEuro(value:Number):void
    		{
    			this.costoMinimoEuro = value;
    		}

    		public getcostoMinimoMX():Number
    		{
    			return this.costoMinimoMX;
    		}

    		public setcostoMinimoMX(value:Number):void
    		{
    			this.costoMinimoMX = value;
    		}

    		public getprecioDolar():Number
    		{
    			return this.precioDolar;
    		}

    		public setprecioDolar(value:Number):void
    		{
    			this.precioDolar = value;
    		}

    		public getprecioEuro():Number
    		{
    			return this.precioEuro;
    		}

    		public setprecioEuro(value:Number):void
    		{
    			this.precioEuro = value;
    		}

    		public getprecioMX():Number
    		{
    			return this.precioMX;
    		}

    		public setprecioMX(value:Number):void
    		{
    			this.precioMX = value;
    		}

    		public getcostoAux():Number
    		{
    			return this.costoAux;
    		}

    		public setcostoAux(value:Number):void
    		{
    			this.costoAux = value;
    		}

    		public getnumStock():Number
    		{
    			return this.numStock;
    		}

    		public setnumStock(value:Number):void
    		{
    			this.numStock = value;
    		}

    		public getrutaCli():String
    		{
    			return this.rutaCli;
    		}

    		public setrutaCli(value:String):void
    		{
    			this.rutaCli = value;
    		}

    		public gettiempoEntregaRuta():any
    		{
    			return this.tiempoEntregaRuta;
    		}

    		public settiempoEntregaRuta(value:any):void
    		{
    			this.tiempoEntregaRuta = value;
    		}

    		public getasignado():Boolean
    		{
    			return this.asignado;
    		}

    		public setasignado(value:Boolean):void
    		{
    			this.asignado = value;
    		}

    		public gettotalCostoPiezas():Number
    		{
    			return this.totalCostoPiezas;
    		}

    		public settotalCostoPiezas(value:Number):void
    		{
    			this.totalCostoPiezas = value;
    		}

    		public getcantPiezas():Number
    		{
    			return this.cantPiezas;
    		}

    		public setcantPiezas(value:Number):void
    		{
    			this.cantPiezas = value;
    		}

    		public getfamiliaString():String
    		{
    			return this.familiaString;
    		}

    		public setfamiliaString(value:String):void
    		{
    			this.familiaString = value;
    		}

    		public gettransitoMandatorioMexico():Boolean
    		{
    			return this.transitoMandatorioMexico;
    		}

    		public settransitoMandatorioMexico(value:Boolean):void
    		{
    			this.transitoMandatorioMexico = value;
    		}

    		public getidFabricante():number
    		{
    			return this.idFabricante;
    		}

    		public setidFabricante(value:number):void
    		{
    			this.idFabricante = value;
    		}

    		public getloteAnterior():String
    		{
    			return this.loteAnterior;
    		}

    		public setloteAnterior(value:String):void
    		{
    			this.loteAnterior = value;
    		}

    		public getcatalogo():String
    		{
    			return this.catalogo;
    		}

    		public setcatalogo(value:String):void
    		{
    			this.catalogo = value;
    		}

    		public getorigen():String
    		{
    			return this.origen;
    		}

    		public setorigen(value:String):void
    		{
    			this.origen = value;
    		}

    		public getunico():Boolean
    		{
    			return this.unico;
    		}

    		public setunico(value:Boolean):void
    		{
    			this.unico = value;
    		}

    		public getindustria():String
    		{
    			return this.industria;
    		}

    		public setindustria(value:String):void
    		{
    			this.industria = value;
    		}

    		public getcategoriaPrecioLista():Number
    		{
    			return this.categoriaPrecioLista;
    		}

    		public setcategoriaPrecioLista(value:Number):void
    		{
    			this.categoriaPrecioLista = value;
    		}

    		public getconfiguracion_Precio():Number
    		{
    			return this.configuracion_Precio;
    		}

    		public setconfiguracion_Precio(value:Number):void
    		{
    			this.configuracion_Precio = value;
    		}

    		public getsubtipo():String
    		{
    			return this.subtipo;
    		}

    		public setsubtipo(value:String):void
    		{
    			this.subtipo = value;
    		}

    		public getidProducto():Number
    		{
    			return this.idProducto;
    		}

    		public setidProducto(value:Number):void
    		{
    			this.idProducto = value;
    		}

    		public gettipo():String
    		{
    			return this.tipo;
    		}

    		public settipo(value:string):void
    		{
    			this.tipo = value;

    			if(this.tipo.toLocaleLowerCase() =="estandares")
    			{
    				this.tipoString = "Estándares";
    			}
    			else
    			{
    				this.tipoString = this.tipo;
    			}
    		}

    		public getcodigo():String
    		{
    			return this.codigo;
    		}

    		public setcodigo(value:String):void
    		{
    			this.codigo = value;
    		}

    		public getcosto():Number
    		{
    			return this.costo;
    		}

    		public setcosto(value:Number):void
    		{
    			this.costo = value;
    		}

    		public getmoneda():String
    		{
    			return this.moneda;
    		}

    		public setmoneda(value:String):void
    		{
    			this.moneda = value;


    		//	this.monedaAbreviatura = UtilsFormatoMoneda.monedaGenerica(value,"Dls");
    		//	this.monedaSimbolo = UtilsFormatoMoneda.determinaMoneda(value,"$");

    		}

    		public getdescuento():Number
    		{
    			return this.descuento;
    		}

    		public setdescuento(value:Number):void
    		{
    			this.descuento = value;
    		}

    		public getconcepto():String
    		{
    			return this.concepto;
    		}

    		public setconcepto(value:String):void
    		{
    			this.concepto = value;
    		}

    		public getproveedor():Number
    		{
    			return this.proveedor;
    		}

    		public setproveedor(value:Number):void
    		{
    			this.proveedor = value;
    		}

    		public getcostoMinimo():Number
    		{
    			return this.costoMinimo;
    		}

    		public setcostoMinimo(value:Number):void
    		{
    			this.costoMinimo = value;
    		}

    		public getiva():Number
    		{
    			return this.iva;
    		}

    		public setiva(value:Number):void
    		{
    			this.iva = value;
    		}

    		public getcantidad():string
    		{
    			return this.cantidad;
    		}

    		public setcantidad(value: string):void
    		{
    			this.cantidad = value;
    		}

    		public getunidad():String
    		{
    			return this.unidad;
    		}

    		public setunidad(value:String):void
    		{
    			this.unidad = value;
    		}


    		public getfecha():Date
    		{
    			return this.fecha;
    		}

    		public setfecha(value:Date):void
    		{
    			this.fecha = value;
    		}

    		public getprecioFijo():Number
    		{
    			return this.precioFijo;
    		}

    		public setprecioFijo(value:Number):void
    		{
    			this.precioFijo = value;
    		}

    		public getvigente():Boolean
    		{
    			return this.vigente;
    		}

    		public setvigente(value:Boolean):void
    		{
    			this.vigente = value;
    		}

    		public getcaduca():Date
    		{
    			return this.caduca;
    		}

    		public setcaduca(value:Date):void
    		{
    			this.caduca = value;
    		}

    		public gettiempoEntrega():String
    		{
    			return this.tiempoEntrega;
    		}

    		public settiempoEntrega(value:String):void
    		{
    			this.tiempoEntrega = value;
    		}

    		public getdocumentacion():String
    		{
    			return this.documentacion;
    		}

    		public setdocumentacion(value:String):void
    		{
    			this.documentacion = value;
    		}

    		public getmanejo():String
    		{
    			if(this.manejo == null) this.manejo = "ND";
    			return this.manejo;
    		}

    		public setmanejo(value:String):void
    		{
    			this.manejo = value;
    		}

    		public getdisponibilidad():String
    		{
    			return this.disponibilidad;
    		}

    		public setdisponibilidad(value:String):void
    		{
    			this.disponibilidad = value;
    		}

    		/*	public getestado():String
    		{
    		return this.estado;
    		}

    		public setestado(value:String):void
    		{
    		this.estado = value;
    		}*/

    		public getpureza():Number
    		{
    			return this.pureza;
    		}

    		public setpureza(value:Number):void
    		{
    			this.pureza = value;
    		}

    		public getdescripcion():String
    		{
    			return this.descripcion;
    		}

    		public setdescripcion(value:String):void
    		{
    			this.descripcion = value;
    		}

    		public getcant():Number
    		{
    			return this.cant;
    		}

    		public setcant(value:Number):void
    		{
    			this.cant = value;
    		}

    		public gettotal():String
    		{
    			return this.total;
    		}

    		public settotal(value:String):void
    		{
    			this.total = value;
    		}

    		public gettotalVentas():Number
    		{
    			return this.totalVentas;
    		}

    		public settotalVentas(value:Number):void
    		{
    			this.totalVentas = value;
    		}

    		public gettipoDocumento():String
    		{
    			return this.tipoDocumento;
    		}

    		public settipoDocumento(value:String):void
    		{
    			this.tipoDocumento = value;
    		}

    		public getidioma():String
    		{
    			return this.idioma;
    		}

    		public getmonedaAbreviatura():String
    		{
    			return this.monedaAbreviatura;
    		}

    		public setmonedaAbreviatura(value:String):void
    		{
    			this.monedaAbreviatura = value;
    		}

    		public getmonedaSimbolo():String
    		{
    			return this.monedaSimbolo;
    		}

    		public setmonedaSimbolo(value:String):void
    		{
    			this.monedaSimbolo = value;
    		}

    		public gettipoString():String
    		{
    			return this.tipoString;
    		}

    		public settipoString(value:String):void
    		{
    			this.tipoString = value;
    		}

    		public getlicencia():String
    		{
    			return this.licencia;
    		}

    		public setlicencia(value:String):void
    		{
    			this.licencia = value;
    		}

    		public getcas():String
    		{
    			return this.cas;
    		}

    		public setcas(value:String):void
    		{
    			this.cas = value;
    		}

    		public getdepositarioInter():String
    		{
    			return this.depositarioInter;
    		}

    		public setdepositarioInter(value:String):void
    		{
    			this.depositarioInter = value;
    		}

    		public getestadoFisico():String
    		{
    			return this.estadoFisico;
    		}

    		public setestadoFisico(value:String):void
    		{
    			this.estadoFisico = value;
    		}

    		public getfraccionArancelaria():String
    		{
    			return this.fraccionArancelaria;
    		}

    		public setfraccionArancelaria(value:String):void
    		{
    			this.fraccionArancelaria = value;
    		}

    		public getDTA():Number
    		{
    			return this.DTA;
    		}

    		public setDTA(value:Number):void
    		{
    			this.DTA = value;
    		}

    		public getIGI():Number
    		{
    			return this.IGI;
    		}

    		public setIGI(value:Number):void
    		{
    			this.IGI = value;
    		}

    		public getrequierePermisoImp():String
    		{
    			return this.requierePermisoImp;
    		}

    		public setrequierePermisoImp(value:String):void
    		{
    			this.requierePermisoImp = value;
    		}

    		public gettipoPermiso():String
    		{
    			return this.tipoPermiso;
    		}

    		public settipoPermiso(value:String):void
    		{
    			this.tipoPermiso = value;
    		}

    		public getlinea():String
    		{
    			return this.linea;
    		}

    		public setlinea(value:String):void
    		{
    			this.linea = value;
    		}

    		public getclasificacion():String
    		{
    			return this.clasificacion;
    		}

    		public setclasificacion(value:String):void
    		{
    			this.clasificacion = value;
    		}

    		public getisCheck():Boolean
    		{
    			return this.isCheck;
    		}

    		public setisCheck(value:Boolean):void
    		{
    			this.isCheck = value;
    		}

    		public getestatus():String
    		{
    			return this.estatus;
    		}

    		public setestatus(value:String):void
    		{
    			this.estatus = value;
    		}

    		public getsubtipoString():String
    		{
    			return this.subtipoString;
    		}

    		public setsubtipoString(value:String):void
    		{
    			this.subtipoString = value;
    		}


}
