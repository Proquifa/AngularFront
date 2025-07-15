import { AnimationKeyframesSequenceMetadata } from "@angular/core";
import { ArrayType } from "@angular/compiler/src/output/output_ast";

export class SeguimientoCotizacionAgrupada {

	_numFila: number;
	_cotizaciones: any = new Array();
	_nombreCliente: String;
	_totalCotizaciones: number;
	_totalPartidas: number;
	_fechaSiguienteContacto: Date;
	_ultimo: String;
	_piezas: number;
	_monto: Number;
	_montoString: String;
	_nombreVendedor: String;
	_nombreESAC: String;
	_numClientes: number;
	_estatusMasCritico: String;

	_monedaCotizacionPartida: String;
	_tipoSeguimiento: String;
	_nivelIngreso: String;
	_partidas: number;
	_tipoProduct: String;
	_marca: String;
	_folioCotizacion: String;
	_montoCotizacion: number;

	public   getMontoCotizacion(): number {
		return this._montoCotizacion;
	}

	
	public   setMontoCotizacion(value: number): void {
		this._montoCotizacion = value;
	}

	public  getFolioCotizacion(): String {
		return this._folioCotizacion;
	}
	public  setFolioCotizacion(value: String): void {
		this._folioCotizacion = value;
	}

	public  getMarca(): String {
		return this._marca;
	}
	public  setMarca(value: String): void {
		this._marca = value;
	}
	public  getTipoProducto(): String {
		return this._tipoProduct;
	}

	public  setTipoProducto(value: String): void {
		this._tipoProduct = value;
	}


	public  getPartidas(): number {
		return this._partidas;
	}

	public  setPartidas(value: number): void {
		this._partidas = value;
	}



	public  getNivelIngreso(): String {
		return this._nivelIngreso;
	}

	public  setNivelIngreso(value: String): void {
		this._nivelIngreso = value;
	}
	public  getTipoSeguimiento(): String {
		return this._tipoSeguimiento;
	}

	public  setTipoSeguimiento(value: String): void {
		this._tipoSeguimiento = value;
	}

	public  SeguimientoCotizacionAgrupada() {
		this.setUltimo("") ;
		//trace("declara objeto");
		this._nombreVendedor = "Sin Asignar";
		this._nombreESAC = "Sin Asignar";
		this._monto = 0;
	}

	public  getMonedaCotizacionPartida(): String {
		return this._monedaCotizacionPartida;
	}

	public  setMonedaCotizacionPartida(value: String): void {
		this._monedaCotizacionPartida = value;
	}

	public  getEstatusMasCritico(): String {
		return this._estatusMasCritico;
	}

	public  setEstatusMasCritico(value: String): void {
		this._estatusMasCritico = value;
	}

	public  getNombreESAC(): String {
		return this._nombreESAC;
	}

	public  setNombreESAC(value: String): void {
		if (value != null && value != "") {
			this._nombreESAC = value;
		}
		else {
			this._nombreESAC = "";
		}
	}

	public   getNumClientes(): number {
		return this._numClientes;
	}

	public   setNumClientes(value: number): void {
		this._numClientes = value;
	}

	public   getTotalPartidas(): number {
		return this._totalPartidas;
	}

	public   setTotalPartidas(value: number): void {
		this._totalPartidas = value;
	}

	public   getNombreVendedor(): String {
		return this._nombreVendedor;
	}

	public   setNombreVendedor(value: String): void {
		if (value != null) {
			this._nombreVendedor = value;
		}
		else {
			if (this._nombreVendedor == "") this._nombreVendedor = "Sin Asignar";
		}

	}
	public   getMontoString(): String {
	//	this._montoString = '$ ' + UtilsFormatosNumericos.precisionADosDecimalesConComas(monto);
		return this._montoString;
	}

	public   setMontoString(value: String): void {
		this._montoString = value;
	}

	public   getMonto(): Number {
		return this._monto;
	}

	public   setMonto(value: Number): void {
		this._monto = value;
	}

	public   getPiezas(): number {
		return this._piezas;
	}

	public   setPiezas(value: number): void {
		this._piezas = value;
	}

	public   getUltimo(): String {
		return this._ultimo;
	}

	public   setUltimo(value: String): void {
		this._ultimo = value;
	}

	public   getFechaSiguienteContacto(): Date {
		return this._fechaSiguienteContacto;
	}

	public   setFechaSiguienteContacto(value: Date): void {
		this._fechaSiguienteContacto = value;
	}

	public   getTotalCotizaciones(): number {
		return this._totalCotizaciones;
	}

	public   setTotalCotizaciones(value: number): void {
		this._totalCotizaciones = value;
	}

	public   getNombreCliente(): String {
		return this._nombreCliente;
	}

	public   setNombreCliente(value: String): void {
		if (value != null) {
			this._nombreCliente = value;
		}
		else {
			this._nombreCliente = "";
		}
	}

	public   getCotizaciones(): Array<any> {
		return this._cotizaciones;
	}

	public   setCotizaciones(value: Array<any>): void {
		this._cotizaciones = value;
		this.setPiezas(0);
		this.setMonto(0);
		this.setTotalPartidas(0);
		this.setNumClientes(0);
		if (value.length > 0) {
			this.setNombreCliente(value[0].nombreCliente);
			this.setNombreVendedor(value[0].nombreEV);
			this.setNombreESAC(value[0].nombreVendedor);
			this.setTotalCotizaciones(value.length);
			var p: number = 0;
			var q: Number = 0;
			for (var m: number = 0; m < value.length; m++) {
				this._totalPartidas = this._totalPartidas + value[m].partidas;
				p = p + value[m].piezas;
				q = q + value[m].montoCotizacion;
			}
			this.setPiezas(p);
			this.setMonto(q);
		}
		console.log("ENTROOOOOOOO");
		
	}

	public   getNumFila() {
		return this._numFila;
	}

	public setNumFila(value: number): void {
		this._numFila = value;
	}



}