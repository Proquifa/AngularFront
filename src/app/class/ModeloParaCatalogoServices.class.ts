import { Empleado } from './Empleado.class';
import { DatosGlobales } from './DatosGlobales.class';
export class ModeloParaCatalogoServices{

  		 usuario:any = new Array();
  		 clientes:any = new Array();
  		 proveedores:any = new Array();
  		 guardaLlamada:Number;
  		 validaEmpleado:Boolean;
  		 empleadoPorUsuario:Empleado;

  		// ModeloParaCatalogoServices(target:IEventDispatcher=null)
  		// {
  		// 	//TODO: implement function
  		// 	super(target);
  		// }

  		//Metodo para conseguir Usuarios

  		public  getUsuarios():any{
  			return this.usuario;
  		}

  		public  setUsuarios ( datos:any ):void{
  			this.usuario = datos;
  			dispatchEvent( new Event("cambioUsuario") );
  		}

  		//Metodo para conseguir Clientes
  		public  getClientes():any{
  			return this.clientes
  		}

  		public  setClientes ( datos:any ):void{
  			this.clientes = datos;
  			dispatchEvent( new Event("cambioClientes") );
  		}

  		//Metodo para conseguir Proveedores
  		public  getProveedores():any{
  			return this.proveedores;
  		}

  		public  setProveedores ( datos:any ):void{
  			this.proveedores = datos;
  			dispatchEvent( new Event("cambioProveedores") );
  		}

  		//Modelo para regresar el producto guardado
  		public  getGuardaProducto():Number{
  			return this.guardaLlamada;
  		}

  		public  setGuardaProducto( resultado:Number ):void{
  			this.guardaLlamada = resultado;
  			dispatchEvent ( new Event("cambioProductoGuardado") );
  		}

  		//Modelo para regresar el Usuario Valido
  		public  getValidaEmpleado():Boolean{
  			return this.validaEmpleado;
  		}

  		public  setValidaEmpleado( resultado:Boolean ):void{
  			this.validaEmpleado = resultado;
  			dispatchEvent ( new Event("cambioEmpleadoValido") );
  		}

      //Modelo para regresar un Empleado obtenido por Usuario a traves de el Login
  		public  getEmpleadoPorUsuario():Empleado{
  			return this.empleadoPorUsuario;
  		}

  		public  setEmpleadoPorUsuario( resultado:Empleado ):void{
  			this.empleadoPorUsuario = resultado;
  			dispatchEvent ( new Event("obtenEmpleadoPorUsarioLogin") );
  		}
  		//El resultado obtenido de los empleado habilitados sera guardado en la clase Datos Globales y se asigna
  		 public setEmpleadoHabilitados( resultado:any ):void{
        resultado = new DatosGlobales();
        resultado.getInstance().empleadosHabilitados;
  		}

  		// public  error(errorString:Object,funcion:String):void{
  		// 	Alert.show(errorString.toString() + funcion);
  		// }
	}
