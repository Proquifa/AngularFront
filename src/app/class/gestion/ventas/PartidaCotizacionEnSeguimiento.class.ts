export class PartidaCotizacionEnSeguimiento {
     PartidaCotizacionEnSeguimiento()
    {
        this.setUltimo("");
        this.setHistorial( new Array <any>());
        this.setFechaSiguienteString("Pendiente");
    }
    
     _numFila:number;
     _cantidad:Number;
     _concepto:String;
     _estado:String;
     _folioCotizacion:String;
     _historial:Array <any>;
     _idPCotiza:number;
     _monto:Number;
     _montoString:String;
     _partida:Number;
     _precio:Number;
     _marca:String;
     _fechaSiguiente:Date;
     _fechaSiguienteString:String;
     _monedaCotiza:String;
     _tipo:String;
     _control:String;
     _situacion:String;
    //////////////////////////////////////////////////////////
     _ultimo:String;
     _enfocado:Boolean = false;
     _precioString:String;
     _ultimoEnEnfoque:Boolean;
    
    public  getUltimoEnEnfoque():Boolean
    {
        return this._ultimoEnEnfoque;
    }
    
    public  setUltimoEnEnfoque(value:Boolean):void
    {
        this._ultimoEnEnfoque = value;
    }
    
    public  getSituacion():String
    {
        return this._situacion;
    }
    
    public  setSituacion(value:String):void
    {
        this._situacion = value;
    }
    
    public getMarca():String
    {
        return this._marca;
    }
    
    public  setMarca(value:String):void
    {
        this._marca = value;
    }
    
    public  getControl():String
    {
        return this._control;
    }
    
    public  setControl(value:String):void
    {
        this._control = value;
    }
    
    public  getTipo():String
    {
        return this._tipo;
    }
    
    public  setTipo(value:String):void
    {
        this._tipo = value;
    }
    
    public  getPrecioString():String
    {
        //this._precioString = '$ '+UtilsFormatosNumericos.precisionADosDecimalesConComas( precio );
        this._precioString = '$ '+ this.getPrecio();
        return this._precioString;
    }
    
    public  setPrecioString(value:String):void
    {
        this._precioString = value;
    }
    
    public  getEnfocado():Boolean
    {
        return this._enfocado;
    }
    
    public  setEnfocado(value:Boolean):void
    {
        this._enfocado = value;
    }
    
    public  getMontoString():String
    {
        //this._montoString = '$ ' + UtilsFormatosNumericos.precisionADosDecimalesConComas( monto );
        this._montoString = '$ ' +  this.getMonto();
        return this._montoString;
    }
    
    public  setMontoString(value:String):void
    {
        this._montoString = value;
    }
    
    public getMonedaCotiza():String
    {
        return this._monedaCotiza;
    }
    
    public  setMonedaCotiza(value:String):void
    {
        this._monedaCotiza = value;
    }
    
    public  getFechaSiguienteString():String
    {
        return this._fechaSiguienteString;
    }
    
    public  setFechaSiguienteString(value:String):void
    {
        this._fechaSiguienteString = value;
    }
    
    public  getFechaSiguiente():Date
    {
        return this._fechaSiguiente;
    }
    
    public  setFechaSiguiente(value:Date):void
    {
        this._fechaSiguiente = value;
        //trace("entro");
        if(value != null){
            //this.setFechaSiguienteString(UtilsFecha.formatoFechaDiaMesAnioConGuion(value));
            //this.setFechaSiguienteString(value);
        }
        else{
            this.setFechaSiguienteString("Pendiente");
        }
    }
    
    public  getUltimo():String
    {
        return this._ultimo;
    }
    
    public  setUltimo(value:String):void
    {
        this._ultimo = value;
    }
    
    public  getNumFila():number
    {
        return this._numFila;
    }
    
    public  setNumFila(value:number):void
    {
        this._numFila = value;
    }
    
    public getPrecio():Number
    {
        return this._precio;
    }
    
    public  setPrecio(value:Number):void
    {
        this._precio = value;
    }
    
    public  getPartida():Number
    {
        return this._partida;
    }
    
    public  setPartida(value:Number):void
    {
        this._partida = value;
    }
    
    public  getMonto():Number
    {
        return this._monto;
    }
    
    public  setMonto(value:Number):void
    {
        this._monto = value;
    }
    
    public  getIdPCotiza():number
    {
        return this._idPCotiza;
    }
    
    public  setIdPCotiza(value:number):void
    {
        this._idPCotiza = value;
    }
    
    public  getHistorial():Array <any>
    {                    
        return this._historial;
    }
    
    public  setHistorial(value:Array <any>):void
    {
        this._historial = value;
        if(value!= null){
            if(value.length > 0){
                for(var m:number = 0; m<this.getHistorial.length;m++){
                    this.setHistorial[m].numFila = this.getHistorial.length - m;
                }
            }
        }
        else{
            this._historial = new Array <any>();
        }
    }
    
    public  getFolioCotizacion():String
    {
        return this._folioCotizacion;
    }
    
    public  setFolioCotizacion(value:String):void
    {
        this._folioCotizacion = value;
    }
    
    public  getEstado():String
    {
        return this._estado;
    }
    
    public  setEstado(value:String):void
    {
        this._estado = value;
    }
    
    public  getConcepto():String
    {
        return this._concepto;
    }
    
    public  setConcepto(value:String):void
    {
        this._concepto = value;
    }
    
    public  getCantidad():Number
    {
        return this._cantidad;
    }
    
    public  setCantidad(value:Number):void
    {
        this._cantidad = value;
    }
}