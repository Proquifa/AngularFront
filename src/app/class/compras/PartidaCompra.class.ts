import { Producto } from "../comun/Producto.class";

export class PartidaCompra extends Producto{

    numFila:number;
    idPartidaCompra:number;
    compra:string;
    partida:number;
    pedido:string;
    partidaPedido:number;
    cantidadCompra:number;
    factura:string;
    porCancelar: Boolean;
    folioNT:string;
    folioRN:string;
    idComplemento:number;
    pagada: Boolean;
    bloqueadaAC:string;
    edoCliente:string;
    ac: Boolean;
    backOrder: Boolean;
    comentarios:string;
    folioInspeccion:string;
    folioInspeccionPHS:string;
    folioInspeccionUE:string;
    cotizacion:string;
    comentariosPHS:string;
    reasignado:string;
    anaquelNumero:number;
    anaquelLetra:string;
    ubicacion:string;
    porEnterarse: Boolean;
    responsable:string;
    destino:string;
    cliente:string; //vendido a..
    nombreCliente:string;
    descripcionProducto:string;
    facturaProveedor:string;
    almacenUE: Boolean;
    almacenUSA: Boolean;
    almacenMatriz: Boolean;
    fechaRealArriboUE: Date;
    fechaRealArriboUSA: Date;
    fechaRealArriboPQF: Date;
    fechaEsperadaArriboUE: Date;
    fechaEsperadaArriboUSA: Date;
    fechaEsperadaArriboPQF: Date;
    fechaEstimadaEntrega: Date;
    fechaCierre: Date;
    fechaEnvio: Date;
    pedimento:string;
    loteVigente:string;
    decision:string;
    tiempoRespuesta:string;
    totalPiezas:number;
    montoTotal:number;
    tipoFlete:string;
    abierto: Boolean;
    fcadPartida:string;
    lotePartida:string;
    aCambio: Boolean;
    inTime:number;

   fechaTramitacion: Date;
   precioUnitario:number;
   precioTotal:number;
   trafico:string;
   confirmacion: Boolean;
   transito: Boolean;
   nombreProveedor:string;
   folioPacking:string;
   estado:string = '';
   etiqueta:string;
   diasFiltro:string;

   cpedido:string;
   medioPago:string;
   condicionesPago:string;
   asignada: Boolean;
   facturasTotal:number;

   origenCompra:string;
    /*contacto: Contacto; */
   entregarEn:string;
   fechaTransito: Date;
   tipoPartida:string;


    //Estas son solo de flex

   asociar: Boolean;
   /* color: uint; */
   object: Object; //Para cualquier fin;
   sortChar:string;
   sortCharProvee:string;

    fechaPharma: Date;
    fechaProquifa: Date;
    fechaPharmaUE: Date;
    FEnvio: Date;
    tiempoProceso: Array<any>;

   habilitaTotalPartidas: Boolean;
   enfoque: Boolean;
   totalPartidas:number;
   diferenciaDias:number;
   ordenCompras:number;
   banderaDia:number
   tipoLote: Boolean;//REVISAR
   rutaPDF:string;//REVISAR
   montoTotalReal:number;

    //sustitucion de la parte dinamica

   fechaPharmaUEFormato:string;
   fechaPharmaFormato:string;
   fechaProquifaFormato:string;
   fechaRealArriboUEFormato:string;
   fechaRealArriboUSAFormato:string;
   fechaRealArriboPQFFormato:string;
   fechaEsperadaArriboUSAFormato:string;
   fechaEsperadaArriboPQFFormato:string;
   fechaEsperadaArriboUEFormato:string;
   fechaEstimadaEntregaFormato:string;
   fechaev:string;
   fechacr:string;
   FEnvioFormato:string;
   fporCliente:string; //La empresa que facturo o Vendio
   controlProducto:string;

   certificadoPdf: any;
   hojaSeguridadPdf:any;
   monedaString:string;
   rutaCertificadoActual:string;
   rutaCertificadoAnterior:string;
   sortDescripcionProducto:string;
   modificado: Boolean;
   indice:string;
   tipoPendiente:string;

   esRegistrada: Boolean;
   tipoDia:string;
   totalProductos:number;

   noFactura:string;
   folioFP:string;
   folioPG:string;
    ///////////// VISTA CR
   piezasRegular:number;
   piezasProgramado:number;
   piezasExpress:number;
   piezasEntregaUnica:number;
   piezasFleteNormal:number;
   partida_Hijo: Boolean;
   idCompra:number;
   totalDePiezasRS:number;
   certificadoNoDisponible: Boolean;
   certificadoModificado: Boolean;
   idPpedido:number;
   totalStock:number;

   cantidadOriginalCompra:number;
   fechaString:string;
   lote:string;

		public getfechaString():string{
			return  this.fechaString;
		}

		public setfechaString(value:string):void{
			 this.fechaString = value;
		}

		public  gettotalStock():number
		{
			return  this.totalStock;
		}

		public settotalStock(value:number):void
		{
			 this.totalStock = value;
		}

		public  getidPpedido():number
		{
			return  this.idPpedido;
		}

		public setidPpedido(value:number):void
		{
			 this.idPpedido = value;
		}

		public  getcertificadoNoDisponible():Boolean
		{
			return  this.certificadoNoDisponible;
		}

		public setcertificadoNoDisponible(value:Boolean):void
		{
			 this.certificadoNoDisponible = value;
		}

		public  getcertificadoModificado():Boolean
		{
			return  this.certificadoModificado;
		}

		public setcertificadoModificado(value:Boolean):void
		{
			 this.certificadoModificado = value;
		}

		public  getcontrolProducto():string
		{
			return  this.controlProducto;
		}

		public setcontrolProducto(value:string):void
		{
			 this.controlProducto = value;
		}

		public  gettotalDePiezasRS():number
		{
			return  this.totalDePiezasRS;
		}

		public settotalDePiezasRS(value:number):void
		{
			 this.totalDePiezasRS = value;
		}

		public  getidCompra():number
		{
			return  this.idCompra;
		}

		public setidCompra(value:number):void
		{
			 this.idCompra = value;
		}

		public  getpartida_Hijo():Boolean
		{
			return  this.partida_Hijo;
		}

		public setpartida_Hijo(value:Boolean):void
		{
			 this.partida_Hijo = value;
		}

		public  getfolioPG():string
		{
			return  this.folioPG;
		}

		public setfolioPG(value:string):void
		{
			 this.folioPG = value;
		}

		public  getfolioFP():string
		{
			return  this.folioFP;
		}

		public setfolioFP(value:string):void
		{
			 this.folioFP = value;
		}

		public  getnoFactura():string
		{
			return  this.noFactura;
		}

		public setnoFactura(value:string):void
		{
			 this.noFactura = value;
		}

		public  getpiezasFleteNormal():number
		{
			return  this.piezasFleteNormal;
		}

		public setpiezasFleteNormal(value:number):void
		{
			 this.piezasFleteNormal = value;
		}

		public  getpiezasEntregaUnica():number
		{
			return  this.piezasEntregaUnica;
		}

		public setpiezasEntregaUnica(value:number):void
		{
			 this.piezasEntregaUnica = value;
		}

		public  getpiezasExpress():number
		{
			return  this.piezasExpress;
		}

		public setpiezasExpress(value:number):void
		{
			 this.piezasExpress = value;
		}

		public  getpiezasProgramado():number
		{
			return  this.piezasProgramado;
		}

		public setpiezasProgramado(value:number):void
		{
			 this.piezasProgramado = value;
		}

		public  getpiezasRegular():number
		{
			return  this.piezasRegular;
		}

		public setpiezasRegular(value:number):void
		{
			 this.piezasRegular = value;
		}

		public  gettotalProductos():number
		{
			return  this.totalProductos;
		}

		public settotalProductos(value:number):void
		{
			 this.totalProductos = value;
		}

		public  gettipoDia():string
		{
			return  this.tipoDia;
		}

		public settipoDia(value:string):void
		{
			 this.tipoDia = value;
		}

		public  getesRegistrada():Boolean
		{
			return  this.esRegistrada;
		}

		public setesRegistrada(value:Boolean):void
		{
			 this.esRegistrada = value;
		}

		public  gettipoPartida():string
		{
			return  this.tipoPartida;
		}

		public settipoPartida(value:string):void
		{
			if(value)
				this.esRegistrada = true;
			else
				this.esRegistrada = false;

			 this.tipoPartida = value;
		}

		public  getfamilia():string
		{
			let stringFamilia:string;
    
			if(this.control == null)
				stringFamilia = this.tipo +"-"+this.subtipo+"-"+this.controlProducto;
			else
				stringFamilia = this.tipo +"-"+this.subtipo+"-"+this.control;

			return stringFamilia;
		}

		public  getfechaTransito():Date
		{
			return  this.fechaTransito;
		}

		public setfechaTransito(value:Date):void
		{
			 this.fechaTransito = value;
		}

		public  getentregarEn():string
		{
			return  this.entregarEn;
		}

		public setentregarEn(value:string):void
		{
			 this.entregarEn = value;
		}

		// public  getcontacto():Contacto
		// {
		// 	return  this.contacto;
		// }
    //
		// public setcontacto(value:Contacto):void
		// {
		// 	 this.contacto = value;
		// }

		public  gettipoPendiente():string
		{
			return  this.tipoPendiente;
		}

		public settipoPendiente(value:string):void
		{
			 this.tipoPendiente = value;
		}

		public  getindice():string
		{
			return  this.indice;
		}

		public setindice(value:string):void
		{
			 this.indice = value;
		}

		public  getmontoTotalReal():number
		{
			 this.montoTotalReal = this.precioUnitario * this.cantidadCompra;
			return  this.montoTotalReal;
		}

		public setmontoTotalReal(value:number):void
		{
			 this.montoTotalReal = value;
		}

		public  getsortDescripcionProducto():string
		{
			return  this.sortDescripcionProducto;
		}

		public setsortDescripcionProducto(value:string):void
		{
			 this.sortDescripcionProducto = value;
		}

		public  getACambio():Boolean
		{
			return  this.aCambio;
		}

		public setACambio(value:Boolean):void
		{
			 this.aCambio = value;
		}

		public  getfcadPartida():string
		{
			return  this.fcadPartida;
		}

		public setfcadPartida(value:string):void
		{
			 this.fcadPartida = value;
		}

		public  getlotePartida():string
		{
			return  this.lotePartida;
		}

		public setlotePartida(value:string):void
		{
			 this.lotePartida = value;
		}

		public  gettotalPartidas():number
		{
			return  this.totalPartidas;
		}

		public settotalPartidas(value:number):void
		{
			 this.totalPartidas = value;
		}

		public  gethabilitaTotalPartidas():Boolean
		{
			return  this.habilitaTotalPartidas;
		}

		public sethabilitaTotalPartidas(value:Boolean):void
		{
			 this.habilitaTotalPartidas = value;
		}

		public  getFEnvioFormato():string
		{
			 //this.FEnvioFormato = UtilsFecha.formatoFechaDDMMMYYYY( FEnvio );
			return  this.FEnvioFormato;
		}

		public setFEnvioFormato(value:string):void
		{
			 this.FEnvioFormato = value;
		}

		public  getfechacr():string
		{
			 //this.fechacr = UtilsFecha.formatoFechaDDMMMYYYY( fechaCierre );
			return  this.fechacr;
		}

		public setfechacr(value:string):void
		{
			 this.fechacr = value;
		}

		public  getfechaev():string
		{
		//	 this.fechaev = UtilsFecha.formatoFechaDDMMMYYYY( fechaEnvio );
			return  this.fechaev;
		}

		public setfechaev(value:string):void
		{
			 this.fechaev = value;
		}

		public  getfechaEstimadaEntregaFormato():string
		{
			// this.fechaEstimadaEntregaFormato = UtilsFecha.formatoFechaDDMMMYYYY( fechaEstimadaEntrega );
			return  this.fechaEstimadaEntregaFormato;
		}

		public setfechaEstimadaEntregaFormato(value:string):void
		{
			 this.fechaEstimadaEntregaFormato = value;
		}

		public  getfechaEsperadaArriboUEFormato():string
		{
			// this.fechaEsperadaArriboUEFormato = UtilsFecha.formatoFechaDDMMMYYYY( fechaEsperadaArriboUE );
			return  this.fechaEsperadaArriboUEFormato;
		}

		public setfechaEsperadaArriboUEFormato(value:string):void
		{
			 this.fechaEsperadaArriboUEFormato = value;
		}


		public  getfechaEsperadaArriboPQFFormato():string
		{
			// this.fechaEsperadaArriboPQFFormato = UtilsFecha.formatoFechaDDMMMYYYY( fechaEsperadaArriboPQF );
			return  this.fechaEsperadaArriboPQFFormato;
		}

		public setfechaEsperadaArriboPQFFormato(value:string):void
		{
			 this.fechaEsperadaArriboPQFFormato = value;
		}

		public  getfechaEsperadaArriboUSAFormato():string
		{
			// this.fechaEsperadaArriboUSAFormato = UtilsFecha.formatoFechaDDMMMYYYY( fechaEsperadaArriboUSA );
			return  this.fechaEsperadaArriboUSAFormato;
		}

		public setfechaEsperadaArriboUSAFormato(value:string):void
		{
			 this.fechaEsperadaArriboUSAFormato = value;
		}

		public  getfechaRealArriboPQFFormato():string
		{
		//	 this.fechaRealArriboPQFFormato = UtilsFecha.formatoFechaDDMMMYYYY( fechaRealArriboPQF );
			return  this.fechaRealArriboPQFFormato;
		}

		public setfechaRealArriboPQFFormato(value:string):void
		{
			 this.fechaRealArriboPQFFormato = value;
		}

		public  getfechaRealArriboUSAFormato():string
		{
		//	 this.fechaRealArriboUSAFormato = UtilsFecha.formatoFechaDDMMMYYYY( fechaRealArriboUSA );
			return  this.fechaRealArriboUSAFormato;
		}

		public setfechaRealArriboUSAFormato(value:string):void
		{
			 this.fechaRealArriboUSAFormato = value;
		}

		public  getfechaRealArriboUEFormato():string
		{
			// this.fechaRealArriboUEFormato = UtilsFecha.formatoFechaDDMMMYYYY( fechaRealArriboUE );
			return  this.fechaRealArriboUEFormato;
		}

		public setfechaRealArriboUEFormato(value:string):void
		{
			 this.fechaRealArriboUEFormato = value;
		}

		public  getfechaProquifaFormato():string
		{
		//	 this.fechaProquifaFormato = UtilsFecha.formatoFechaDDMMMYYYY( fechaProquifa );
			return  this.fechaProquifaFormato;
		}

		public setfechaProquifaFormato(value:string):void
		{
			 this.fechaProquifaFormato = value;
		}

		public  getfechaPharmaUEFormato():string
		{
		 // this.fechaPharmaUEFormato = UtilsFecha.formatoFechaDDMMMYYYY( fechaPharmaUE );
			return  this.fechaPharmaUEFormato;
		}

		public setfechaPharmaUEFormato(value:string):void
		{
			 this.fechaPharmaUEFormato = value;
		}
		public  getfechaPharmaFormato():string
		{
		//	 this.fechaPharmaFormato = UtilsFecha.formatoFechaDDMMMYYYY( fechaPharma );
			return  this.fechaPharmaFormato;
		}

		public setfechaPharmaFormato(value:string):void
		{
			 this.fechaPharmaFormato = value;
		}


		public  getabierto():Boolean
		{
			return  this.abierto;
		}

		public setabierto(value:Boolean):void
		{
			 this.abierto = value;
		}

		public  gettipoFlete():string
		{
			return  this.tipoFlete;
		}

		public settipoFlete(value:string):void
		{
			 this.tipoFlete = value;
		}

		public  getmontoTotal():number
		{
			return  this.montoTotal;
		}

		public setmontoTotal(value:number):void
		{
			 this.montoTotal = value;
		}

		public  gettotalPiezas():number
		{
			return  this.totalPiezas;
		}

		public settotalPiezas(value:number):void
		{
			 this.totalPiezas = value;
		}

		public  getac():Boolean
		{
			return  this.ac;
		}

		public setac(value:Boolean):void
		{
			 this.ac = value;
		}

		public  getedoCliente():string
		{
			return  this.edoCliente;
		}

		public setedoCliente(value:string):void
		{
			 this.edoCliente = value;
		}

		public  getbloqueadaAC():string
		{
			return  this.bloqueadaAC;
		}

		public setbloqueadaAC(value:string):void
		{
			 this.bloqueadaAC = value;
		}

		public  getcantidadCompra():number
		{

			return  this.cantidadCompra;
		}

		public setcantidadCompra(value:number):void
		{
		      this.cantidadCompra = value;
		}

		public  getcompra():string
		{
			return  this.compra;
		}

		public setcompra(value:string):void
		{
			 this.compra = value;
		}

		public  getidPartidaCompra():number
		{
			return  this.idPartidaCompra;
		}

		public setidPartidaCompra(value:number):void
		{
			/*	if(value < 0){
			var variable:string = "";
			}*/
			 this.idPartidaCompra = value;
		}

		public  getpartida():number
		{
			return  this.partida;
		}

		public setpartida(value:number):void
		{
			 this.partida = value;
		}

		public  getpedido():string
		{
			return  this.pedido;
		}

		public setpedido(value:string):void
		{
			if(value == null){
				value = "ND";
				 this.pedido = value;
			}else{
				 this.pedido = value;
			}
		}

		public  getpartidaPedido():number
		{
			return  this.partidaPedido;
		}

		public setpartidaPedido(value:number):void
		{
			 this.partidaPedido = value;
		}

		public  getfactura():string
		{
			return  this.factura;
		}

		public setfactura(value:string):void
		{
			 this.factura = value;
		}

		public  getfechaPharma():Date
		{
			return  this.fechaPharma;
		}

		public setfechaPharma(value:Date):void
		{
			 this.fechaPharma = value;
		}

		public  getfechaProquifa():Date
		{
			return  this.fechaProquifa;
		}

		public setfechaProquifa(value:Date):void
		{
			 this.fechaProquifa = value;
		}

		public  getporCancelar():Boolean
		{
			return  this.porCancelar;
		}

		public setporCancelar(value:Boolean):void
		{
			 this.porCancelar = value;
		}

		public  getfolioNT():string
		{
			return  this.folioNT;
		}

		public setfolioNT(value:string):void
		{
			 this.folioNT = value;
		}

		public  getidComplemento():number
		{
			return  this.idComplemento;
		}

		public setidComplemento(value:number):void
		{
			 this.idComplemento = value;
		}

		public  getpagada():Boolean
		{
			return  this.pagada;
		}

		public setpagada(value:Boolean):void
		{
			 this.pagada = value;
		}

		public  getfechaPharmaUE():Date
		{
			return  this.fechaPharmaUE;
		}

		public setfechaPharmaUE(value:Date):void
		{
			 this.fechaPharmaUE = value;
		}

		public  getfechaEstimadaEntrega():Date
		{
			return  this.fechaEstimadaEntrega;
		}

		public setfechaEstimadaEntrega(value:Date):void
		{
			 this.fechaEstimadaEntrega = value;
		}

		public  getbackOrder():Boolean
		{
			return  this.backOrder;
		}

		public setbackOrder(value:Boolean):void
		{
			 this.backOrder = value;
		}

		public  getcomentarios():string
		{
			return  this.comentarios;
		}

		public setcomentarios(value:string):void
		{
			 this.comentarios = value;
		}

		public  getfolioInspeccion():string
		{
			return  this.folioInspeccion;
		}

		public setfolioInspeccion(value:string):void
		{
			 this.folioInspeccion = value;
		}

		public  getfolioInspeccionPHS():string
		{
			return  this.folioInspeccionPHS;
		}

		public setfolioInspeccionPHS(value:string):void
		{
			 this.folioInspeccionPHS = value;
		}

		public  getfolioInspeccionUE():string
		{
			return  this.folioInspeccionUE;
		}

		public setfolioInspeccionUE(value:string):void
		{
			 this.folioInspeccionUE = value;
		}

		public  getcotizacion():string
		{
			return  this.cotizacion;
		}

		public setcotizacion(value:string):void
		{
			 this.cotizacion = value;
		}

		public  getcomentariosPHS():string
		{
			return  this.comentariosPHS;
		}

		public setcomentariosPHS(value:string):void
		{
			 this.comentariosPHS = value;
		}

		public  getanaquelNumero():number
		{
			return  this.anaquelNumero;
		}

		public setanaquelNumero(value:number):void
		{
			 this.anaquelNumero = value;
		}

		public  getanaquelLetra():string
		{
			return  this.anaquelLetra;
		}

		public setanaquelLetra(value:string):void
		{
			 this.anaquelLetra = value;
		}

		public  getubicacion():string
		{
			return  this.ubicacion;
		}

		public setubicacion(value:string):void
		{
			 this.ubicacion = value;
		}

		public  getporEnterarse():Boolean
		{
			return  this.porEnterarse;
		}

		public setporEnterarse(value:Boolean):void
		{
			 this.porEnterarse = value;
		}

		public  getnombreCliente():string
		{
			return  this.nombreCliente;
		}

		public setnombreCliente(value:string):void
		{
			 this.nombreCliente = value;
		}

		public  gettiempoRespuesta():string
		{
			return  this.tiempoRespuesta;
		}

		public settiempoRespuesta(value:string):void
		{
			 this.tiempoRespuesta = value;
		}

		public  getdescripcionProducto():string
		{
			return  this.descripcionProducto;
		}

		public setdescripcionProducto(value:string):void
		{
			if(value == null){
				value = "ND";
				 this.descripcionProducto = value;
			}else{
				 this.descripcionProducto = value;
			}

			var array:any = value.split(" ");
			for (var i:number = 0; i < array.length; i++)
			{
				if (String(Number(array[i].charAt(0))) != String(array[i].charAt(0)) && array[i].charAt(0) != "")
				{
					 this.sortChar = array[i].charAt(0);
					break;
				}
			}

			if ( array[1].charAt(0) != "")
			{
				 this.sortChar = array[1].charAt(0);
				 this.sortDescripcionProducto = array[1].charAt(0);
			}

		}

		public  getfacturaProveedor():string
		{
			return  this.facturaProveedor;
		}

		public setfacturaProveedor(value:string):void
		{
			if (value == null){
				value = "ND";
				 this.facturaProveedor = value;
			}else{
				 this.facturaProveedor = value;
			}
		}

		public  getalmacenUE():Boolean
		{
			return  this.almacenUE;
		}

		public setalmacenUE(value:Boolean):void
		{
			 this.almacenUE = value;
		}

		public  getalmacenUSA():Boolean
		{
			return  this.almacenUSA;
		}

		public setalmacenUSA(value:Boolean):void
		{
			 this.almacenUSA = value;
		}

		public  getalmacenMatriz():Boolean
		{
			return  this.almacenMatriz;
		}

		public setalmacenMatriz(value:Boolean):void
		{
			 this.almacenMatriz = value;
		}

		public  getfechaRealArriboUE():Date
		{
			return  this.fechaRealArriboUE;
		}

		public setfechaRealArriboUE(value:Date):void
		{
			 this.fechaRealArriboUE = value;
		}

		public  getfechaRealArriboUSA():Date
		{
			return  this.fechaRealArriboUSA;
		}

		public setfechaRealArriboUSA(value:Date):void
		{
			 this.fechaRealArriboUSA = value;
		}

		public  getfechaRealArriboPQF():Date
		{
			return  this.fechaRealArriboPQF;
		}

		public setfechaRealArriboPQF(value:Date):void
		{
			 this.fechaRealArriboPQF = value;
		}

		public  getfechaCierre():Date
		{
			return  this.fechaCierre;
		}

		public setfechaCierre(value:Date):void
		{
			 this.fechaCierre = value;
		}

		public  getpedimento():string
		{
			return  this.pedimento;
		}

		public setpedimento(value:string):void
		{
			 this.pedimento = value;
		}

		public  getfechaEnvio():Date
		{
			return  this.fechaEnvio;
		}

		public setfechaEnvio(value:Date):void
		{
			 this.fechaEnvio = value;
		}

		public  getFEnvio():Date
		{
			return  this.FEnvio;
		}

		public setFEnvio(value:Date):void
		{
			 this.FEnvio = value;
		}

		public  getresponsable():string
		{
			return  this.responsable;
		}

		public setresponsable(value:string):void
		{
			 this.responsable = value;
		}

		public  getdecision():string
		{
			return  this.decision;
		}

		public setdecision(value:string):void
		{
			 this.decision = value;
		}

		public  getdestino():string
		{
			return  this.destino;
		}

		public setdestino(value:string):void
		{
			 this.destino = value;
		}

		public  getcliente():string
		{
			return  this.cliente;
		}

		public setcliente(value:string):void
		{
			if(value == null){
				value = "ND";
				 this.cliente = value;
			}else{
				 this.cliente = value;
			}
		}

		public  getreasignado():string
		{
			return  this.reasignado;
		}

		public setreasignado(value:string):void
		{
			 this.reasignado = value;
		}

		public  gettiempoProceso():any
		{
			return  this.tiempoProceso;
		}

		public settiempoProceso(value: any):void
		{
			 this.tiempoProceso = value;
		}

		public  getnumFila():number
		{
			return  this.numFila;
		}

		public setnumFila(value:number):void
		{
			 this.numFila = value;
		}

		public  getfolioRN():string
		{
			return  this.folioRN;
		}

		public setfolioRN(value:string):void
		{
			 this.folioRN = value;
		}

		public  getfechaEsperadaArriboUE():Date
		{
			return  this.fechaEsperadaArriboUE;
		}

		public setfechaEsperadaArriboUE(value:Date):void
		{
			 this.fechaEsperadaArriboUE = value;
		}

		public  getfechaEsperadaArriboUSA():Date
		{
			return  this.fechaEsperadaArriboUSA;
		}

		public setfechaEsperadaArriboUSA(value:Date):void
		{
			 this.fechaEsperadaArriboUSA = value;
		}

		public  getfechaEsperadaArriboPQF():Date
		{
			return  this.fechaEsperadaArriboPQF;
		}

		public setfechaEsperadaArriboPQF(value:Date):void
		{
			 this.fechaEsperadaArriboPQF = value;
		}

		public  getinTime():number
		{
			return  this.inTime;
		}

		public setinTime(value:number):void
		{
			 this.inTime = value;
		}

		public  getfechaTramitacion():Date
		{
			return  this.fechaTramitacion;
		}

		public setfechaTramitacion(value:Date):void
		{
			 this.fechaTramitacion = value;
		}

		public  getprecioUnitario():number
		{
			return  this.precioUnitario;
		}

		public setprecioUnitario(value:number):void
		{
			 this.precioUnitario = value;
		}

		public  getprecioTotal():number
		{
			return  this.precioTotal;
		}

		public setprecioTotal(value:number):void
		{
			 this.precioTotal = value;
		}

		public  gettrafico():string
		{
			return  this.trafico;
		}

		public settrafico(value:string):void
		{
			 this.trafico = value;
		}

		public  getconfirmacion():Boolean
		{
			return  this.confirmacion;
		}

		public setconfirmacion(value:Boolean):void
		{
			 this.confirmacion = value;
		}

		public  getnombreProveedor():string
		{
			return  this.nombreProveedor;
		}

		public setnombreProveedor(value:string):void
		{
			if(value == null){
				value = "ND";
				 this.nombreProveedor = value;
			}else{
				 this.nombreProveedor = value;
			}

			var array:any = value.split(" ");
			for (var i:number = 0; i < array.length; i++)
			{
				if (String(Number(array[i].charAt(0))) != String(array[i].charAt(0)) && array[i].charAt(0) != "")
				{
					 this.sortCharProvee = array[i].charAt(0);
					break;
				}
			}
		}

		public  getfolioPacking():string
		{
			return  this.folioPacking;
		}

		public setfolioPacking(value:string):void
		{
			 this.folioPacking = value;
		}

		public  getdiferenciaDias():number
		{
			return  this.diferenciaDias;
		}

		public setdiferenciaDias(value:number):void
		{
			if(value == 1)
				this.tipoDia = "dia1";
			if(value == 2)
				this.tipoDia = "dia2";
			if(value == 3)
				this.tipoDia = "dia3";
			if(value > 3)
				this.tipoDia = "dia4";

			 this.diferenciaDias = value;
		}

		public  gettransito():Boolean
		{
			return  this.transito;
		}

		public settransito(value:Boolean):void
		{
			 this.transito = value;
		}

		public  getordenCompras():number
		{
			return  this.ordenCompras;
		}

		public setordenCompras(value:number):void
		{
			 this.ordenCompras = value;
		}

		public  getenfoque():Boolean
		{
			return  this.enfoque;
		}

		public setenfoque(value:Boolean):void
		{
			 this.enfoque = value;
		}

		public  getestado():string
		{
			return  this.estado;
		}

		public setestado(value:string):void
		{
			 this.estado = value;
		}

		public  getbanderaDia():number
		{
			return  this.banderaDia;
		}

		public setbanderaDia(value:number):void
		{
			 this.banderaDia = value;
		}
		public  getetiqueta():string
		{
			return  this.etiqueta;
		}

		public setetiqueta(value:string):void
		{
			 this.etiqueta = value;
		}

		public  getdiasFiltro():string
		{
			return  this.diasFiltro;
		}

		public setdiasFiltro(value:string):void
		{
			 this.diasFiltro = value;
		}

		public  getcpedido():string
		{
			return  this.cpedido;
		}

		public setcpedido(value:string):void
		{
			 this.cpedido = value;
		}

		public  getmedioPago():string
		{
			return  this.medioPago;
		}

		public setmedioPago(value:string):void
		{
			 this.medioPago = value;
		}

		public  getcondicionesPago():string
		{
			return  this.condicionesPago;
		}

		public setcondicionesPago(value:string):void
		{
			 this.condicionesPago = value;
		}

		public  getasignada():Boolean
		{
			return  this.asignada;
		}

		public setasignada(value:Boolean):void
		{
			 this.asignada = value;
		}

		public  getfacturasTotal():number
		{
			return  this.facturasTotal;
		}

		public setfacturasTotal(value:number):void
		{
			 this.facturasTotal = value;
		}

		public  getasociar():Boolean
		{
			return  this.asociar;
		}

		public setasociar(value:Boolean):void
		{
			 this.asociar = value;
		}

		// public  getcolor():uint
		// {
		// 	return  this.color;
		// }
    //
		// public setcolor(value:uint):void
		// {
		// 	 this.color = value;
		// }

		public  getobject():Object
		{
			return  this.object;
		}

		public setobject(value:Object):void
		{
			 this.object = value;
		}

		public  getorigenCompra():string
		{
			return  this.origenCompra;
		}

		public setorigenCompra(value:string):void
		{
			 this.origenCompra = value;
		}

		public  getsortChar():string
		{
			return  this.sortChar;
		}

		public setsortChar(value:string):void
		{
			 this.sortChar = value;
		}

		public settipoLote(value:Boolean):void
		{
			 this.tipoLote = value;
		}

		public  getloteVigente():string
		{
			return  this.loteVigente;
		}

		public setloteVigente(value:string):void
		{
			 this.loteVigente = value;
		}
				public  getfporCliente():string
		{
			return  this.fporCliente;
		}

		public setfporCliente(value:string):void
		{
			 this.fporCliente = value;
		}
			public  gettipoLote():Boolean
			{
				return  this.tipoLote;
			}


		public  getmonedaString():string
		{
			return  this.monedaString;
		}

		public setmonedaString(value:string):void
		{
			 this.monedaString = value;
		}

		public  getsortCharProvee():string
		{
			return  this.sortCharProvee;
		}

		public  getrutaPDF():string
		{
			return  this.rutaPDF;
		}

		public setrutaPDF(value:string):void
		{
			 this.rutaPDF = value;
		}

		public  getcertificadoPdf():any
		{
			return  this.certificadoPdf;
		}

		public setcertificadoPdf(value:any):void
		{
			 this.certificadoPdf = value;
		}

		public  getrutaCertificadoActual():string
		{
			return  this.rutaCertificadoActual;
		}

		public setrutaCertificadoActual(value:string):void
		{
			 this.rutaCertificadoActual = value;
		}

		public  getrutaCertificadoAnterior():string
		{
			return  this.rutaCertificadoAnterior;
		}

		public setrutaCertificadoAnterior(value:string):void
		{
			 this.rutaCertificadoAnterior = value;
		}

		public  getmodificado():Boolean
		{
			return  this.modificado;
		}

		public setmodificado(value:Boolean):void
		{
			 this.modificado = value;
		}

		public  getcantidadOriginalCompra():number
		{
			return  this.cantidadOriginalCompra;
		}

		public setcantidadOriginalCompra(value:number):void
		{
			 this.cantidadOriginalCompra = value;
		}




}
