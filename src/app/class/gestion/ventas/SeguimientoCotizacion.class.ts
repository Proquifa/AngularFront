import {UtilFechas} from './../../../../app/class/UtilFechas';
export class SeguimientoCotizacion {

       _numFila:Number;
       _diasAtraso:Number;
       _estadoSeguimiento:String;
       _enTiempo:String;
       _fechaCotizacion:Date;
       _fechaCotizacionString:String;
       _fechaSiguienteContacto:Date;
       _folioCotizacion:String;
       _montoCotizacion:Number;
       _montoCotizacionString:String;
       _montoPartida:Number;
       _nombreCliente:String;
       _nombreContacto:String;
       _nombreVendedor:String;
       _piezas:Number;
       _tipoSeguimiento:String;
       _usuarioVendedor:String;
       _idPCotiza:Number;
       _nombreProducto:String;
       _razon:String;
       _fechaCancelacion:Date;
       _mes:Number;
       _fechaCierre:Date;
       _fabrica:String;
       _monedaCotiza:String;
       _nivelIngreso:String;// AA, AB
       _folio:String;
       _master:String;
       _repetido:Boolean;
    //////////////////////////////////////////Renderers///////////////////////////////////////////////////////////////////////////////////
       _montoPartidaString:String;
       _fechaSiguienteContactoString:String;
       _fechaCancelacionString:String;
       _fechaCierreString:String;
       _ultimo:String;
       _partidas:number;
       _nombreEV:String;
       UtilFechas: UtilFechas = new UtilFechas();
       _marca:String;
       _tipoProduct:String;
       _control:String;
       _diasFiltro:String;
    
       _situacion:String // FIXME remover
    
    public SeguimientoCotizacion()
    {
        this.setUltimo("");
        this._enTiempo = "Pendiente";
        this._nombreVendedor = "Sin asignar";
        this._nombreEV = "Sin asignar";
        this._montoPartida = 0;
        this._montoPartidaString  = "$ 0.00";
    }

    public  getMaster():String
    {
        return this._master;
    }

    public  setMaster(value:String):void
    {
        this._master = value;
    }

    public  getSituacion():String
    {
        return this._situacion;
    }

    public setSituacion(value:String):void
    {
        this._situacion = value;
    }

    public  getFolio():String
    {
        return this._folio;
    }

    public setFolio(value:String):void
    {
        this._folio = value;
    }

    public getDiasFiltro():String
    {
        /*redeclaro las fechas con horas, minutos y segundos en 0 para una comparación en bruto*/
        let fechaLejana:Date = this.getFechaSiguienteContacto();
        //trace( 'FechaCOTIZACION: ' + fechaCotizacion.toString() );
        let actual:Date = new Date();
        if( fechaLejana != null )	fechaLejana = new Date(fechaLejana.getFullYear(), fechaLejana.getMonth(), fechaLejana.getDate(), 0, 0, 0);
        actual = new Date(actual.getFullYear(), actual.getMonth(), actual.getDate(), 0, 0, 0);
        var valor:Number =this.UtilFechas.regresaDiferenciaEntreFechasEnDias( actual, fechaLejana);
        if( valor  > 3 ){
                this._diasFiltro = "FUTURO";
        }else if( valor  < -3 ){
                this._diasFiltro = "PASADO";
        }else{
            this._diasFiltro = 'DIA' + valor.toString();
        }
        return this._diasFiltro;
    }

    public setDiasFiltro(value:String):void
    {
        this._diasFiltro = value;
    }

    public getControl():String
    {
        return this._control;
    }

    public setControl(value:String):void
    {
        this._control = value;
    }

    public getTipoProduct():String
    {
        return this._tipoProduct;
    }

    public setTipoProduct(value:String):void
    {
        this._tipoProduct = value;
    }

    public getMarca():String
    {
        return this._marca;
    }

    public setMarca(value:String):void
    {
        this._marca = value;
    }

    public  getMontoCotizacionString():String
    {
       // this._montoCotizacionString = '$ '+ UtilsFormatosNumericos.precisionADosDecimalesConComas( this.getMontoCotizacion() );
        return this._montoCotizacionString;
    }

    public setMontoCotizacionString(value:String):void
    {
        this._montoCotizacionString = value;
    }

    public getNivelIngreso():String
    {
        return this._nivelIngreso;
    }

    public setNivelIngreso(value:String):void
    {
        this._nivelIngreso = value;
    }

    public getNombreEV():String
    {
        return this._nombreEV;
    }
    
    public setNombreEV(value:String):void
    {
        if(value == null || value == ""){
            this._nombreEV == "Sin asignar";
        }
        else{
            this._nombreEV = value;
        }
    }
    
    public getPartidas():number
    {
        return this._partidas;
    }
    
    public  setPartidas(value:number):void
    {
        this._partidas = value;
    }
    
    public getMonedaCotiza():String
    {
        return this._monedaCotiza;
    }
    
    public setMonedaCotiza(value:String):void
    {
        this._monedaCotiza = value;
        /*if(value != "Pesos" && value != "Dolares"){
            //trace("hecho");
        }*/
    }
    
    public getUltimo():String
    {
        return this._ultimo;
    }
    
    public setUltimo(value:String):void
    {
        this._ultimo = value;
    }
    
    public getFechaCotizacionString():String
    {
        return this._fechaCotizacionString;
    }
    
    public setFechaCotizacionString(value:String):void
    {
        this._fechaCotizacionString = value;
    }
    
    public getFabrica():String
    {
        return this._fabrica;
    }
    
    public setFabrica(value:String):void
    {
        this._fabrica = value;
    }
    
    public getFechaCierreString():String
    {
      //  this._fechaCierreString = UtilsFecha.formatoFechaDDMMMYYYY( this.getFechaCierre() );
        return this._fechaCierreString;
    }
    
    public setFechaCierreString(value:String):void
    {
        this._fechaCierreString = value;
    }
    
    public  getFechaCierre():Date
    {
        return this._fechaCierre;
    }
    
    public setFechaCierre(value:Date):void
    {
        this._fechaCierre = value;
    }
    
    public getFechaCancelacionString():String
    {
        //this._fechaCancelacionString = UtilsFecha.formatoFechaDDMMMYYYY( this.getFechaCancelacion() );
        return this._fechaCancelacionString;
    }
    
    public setFechaCancelacionString(value:String):void
    {
        this._fechaCancelacionString = value;
    }
    
    public getFechaSiguienteContactoString():String
    {
       // this._fechaSiguienteContactoString = UtilsFecha.formatoFechaDDMMMYYYY( this.getFechaSiguienteContacto() );
        return this._fechaSiguienteContactoString;
    }
    
    public setFechaSiguienteContactoString(value:String):void
    {
        this._fechaSiguienteContactoString = value;
    }
    
    public getMes():Number
    {
        return this._mes;
    }
    
    public setMes(value:Number):void
    {
        this._mes = value;
    }
    
    public getMontoPartidaString():String
    {
       // this._montoPartidaString = '$ '+UtilsFormatosNumericos.precisionADosDecimalesConComas( this.getMontoPartida() );
        return this._montoPartidaString;
    }
    
    public setMontoPartidaString(value:String):void
    {
        this._montoPartidaString = value;
    }
    
    public  getFechaCancelacion():Date
    {
        return this._fechaCancelacion;
    }
    
    public setFechaCancelacion(value:Date):void
    {
        this._fechaCancelacion = value;
    }
    
    public getRazon():String
    {
        return this._razon;
    }
    
    public setRazon(value:String):void
    {
        this._razon = value;
    }
    
    public getNombreProducto():String
    {
        return this._nombreProducto;
    }
    
    public setNombreProducto(value:String):void
    {
        this._nombreProducto = value;
    }
    
    public getIdPCotiza():Number
    {
        return this._idPCotiza;
    }
    
    public setIdPCotiza(value:Number):void
    {
        this._idPCotiza = value;
    }
    
    public getUsuarioVendedor():String
    {
        return this._usuarioVendedor;
    }
    
    public setUsuarioVendedor(value:String):void
    {
        this._usuarioVendedor = value;
    }
    
    public getTipoSeguimiento():String
    {
        return this._tipoSeguimiento;
    }
    
    public setTipoSeguimiento(value:String):void
    {
        this._tipoSeguimiento = value;
    }
    
    public getPiezas():Number
    {
        return this._piezas;
    }
    
    public setPiezas(value:Number):void
    {
       this._piezas = value;
    }
    
    public getNombreVendedor():String
    {
        return this._nombreVendedor;
    }
    
    public setNombreVendedor(value:String):void
    {
        if(value == null || value == ""){
            this._nombreVendedor = "Sin asignar";
        }
        else{
            this._nombreVendedor = value;
        }
    }
    
    public getNombreContacto():String
    {
        return this._nombreContacto;
    }
    
    public setNombreContacto(value:String):void
    {
        this._nombreContacto = value;
    }
    
    public  getNombreCliente():String
    {
        return this._nombreCliente;
    }
    
    public setNombreCliente(value:String):void
    {
        this._nombreCliente = value;
    }
    
    public  getMontoPartida():Number
    {
        return this._montoPartida;
    }
    
    public setMontoPartida(value:Number):void
    {
        this._montoPartida = value;
    }
    
    public getMontoCotizacion():Number
    {
        return this._montoCotizacion;
    }
    
    public  setMontoCotizacion(value:Number):void
    {
        this._montoCotizacion = value;
    }
    
    public  getFolioCotizacion():String
    {
        return this._folioCotizacion;
    }
    
    public setFolioCotizacion(value:String):void
    {
        this._folioCotizacion = value;
    }
    
    public getFechaSiguienteContacto():Date
    {
        return this._fechaSiguienteContacto;
    }
    
    public setFechaSiguienteContacto(value:Date):void
    {
       this._fechaSiguienteContacto = value;
    }
    
    public  getFechaCotizacion():Date
    {
        return this._fechaCotizacion;
    }
    
    public setFechaCotizacion(value:Date):void
    {
        this._fechaCotizacion = value;
    }
    
    public  getEnTiempo():String
    {
        return this._enTiempo;
    }
    
    public setEnTiempo(value:String):void
    {
        this._enTiempo = value;
        if(value == null || value == ""){
            this._enTiempo = "Pendiente";
        }
    }
    
    public getEstadoSeguimiento():String
    {
        return this._estadoSeguimiento;
    }
    
    public setEstadoSeguimiento(value:String):void
    {
        this._estadoSeguimiento = value;
    }
    
    public  getDiasAtraso():Number
    {
        return this._diasAtraso;
    }
    
    public setDiasAtraso(value:Number):void
    {
        this._diasAtraso = value;
    }
    
    public getNumFila():Number
    {
        return this._numFila;
    }
    
    public setNumFila(value:number):void
    {
        this._numFila = value;
    }

    public getRepetido():Boolean
    {
        return this._repetido;
    }

    public setRepetido(value:Boolean):void
    {
        this._repetido = value;
    }

    
}

