export class Empleado {
 usuario: string;
 password: string;
 nombre: string;
 departamento: string;
 puesto: string;
// listadoUsuarios:any;


 idEmpleado: number;
 clave: number;
 nivel: number;
 fase: number;
 idFuncion: number;
 idcombo: number;
 costoHoraHombre: number;
 costoTotalIncidentes: number;
 montoAPagar: number;
 porcentajeBono: number;
 numFila: number;
 idSubproceso: number;
 telefono: string;
 telefono2: string;
 empresa: string;
 direccion: string;
 curp: string;
 nivelFuncion: string;
 nombreFuncion: string;
 nombreSubproceso: string;
 responsable: string;

 fechaIngreso: Date;
 fechaContrato: Date;
 fechaNacimiento: Date;

 listadoUsuarios: any;
 folioIncidentes: any;
 incidentes: any;
 modulos: any;
 roles: any;

 nivelGeneral: string;
 subproceso: string;

 esGerente: Boolean;
 administrador: Boolean;
//letiable exclusiva de flex(vista) hecha por Osva
 sumaCNC_IncidentesAsociados: number;
 asistencia: Boolean;

 valor: string;
 llave: number;
 codigoAsistencia: string;

 usuarioESAC: string;
 nombreESAC: string;
 area: string;

propiedades: any[] = [
			{propiedad:"costoTotalIncidentes",formato:"moneda",tipo:"number",newpropiedad:"costoTotalIncidentesFormato"},
			{propiedad:"porcentajeBono",formato:"porcentaje",tipo:"number",newpropiedad:"porcentajeBonoFormato"},
			{propiedad:"fechaCierre",formato:"fecha",tipo:"Date",newpropiedad:"fechaCierreFormato"},
			{propiedad:"costoHoraHombre",formato:"moneda",tipo:"number",newpropiedad:"costoHoraHombreFormato"},
			{propiedad:"costoCalidad",formato:"moneda",tipo:"number",newpropiedad:"costoCalidadFormato"}];

public getCodigoAsistencia():string{
  return this. codigoAsistencia;
}
public setCodigoAsistencia (value:string):void{
  	this. codigoAsistencia = value;
}
public getAsistencia():Boolean
		{
			return this.asistencia;
		}

public setAsistencia(value:Boolean):void
		{
			this.asistencia = value;
		}

 public getLlave():number
		{
		   this.llave = this.getIdEmpleado();
			return this. llave;
		}

public setLlave(value:number):void
		{
			this.llave = value;
		}

 public getValor():string
		{
			this. valor = this.getUsuario();
			return this.valor;
		}

 public setValor(value:string):void
		{
			this.valor = value;
		}

public getAdministrador():Boolean
		{
			return this.administrador;
		}

 public setAdministrador(value:Boolean):void
		{
			this.administrador = value;
		}

public getSumaCNC_IncidentesAsociados():number
		{
			return this.sumaCNC_IncidentesAsociados;
		}

public setSumaCNC_IncidentesAsociados(value:number):void
		{

			this.sumaCNC_IncidentesAsociados = value;
		}

public getIdSubproceso():number
		{
			return this.idSubproceso;
		}

public setIdSubproceso(value:number):void
		{
			this.idSubproceso = value;
		}

public getNumFila():number
		{
			return this.numFila;
		}

public setNumFila(value:number):void
		{
			this.numFila = value;
		}

public getSubproceso():string
		{
			return this.subproceso;
		}

public setSubproceso(value:string):void
		{
			this.subproceso = value;
		}
public  Empleado()
  		{
  			this.setIdcombo(-1);
  			this.setClave(0);
  		}

  public getNivelGeneral():string
		{
			return this.nivelGeneral;
		}

  public setNivelGeneral(value:string):void
		{
			this.nivelGeneral = value;
		}

   public getModulos():any
		{
			return this. modulos;
		}

		public setModulos(value:any):void
		{
			this.modulos = value;
		}

		public getIncidentes():any
		{
			return this.incidentes;
		}

		public setIncidentes(value:any):void
		{
			this.incidentes = value;
			if(this.incidentes == null || this.incidentes.length == 0){
				this.sumaCNC_IncidentesAsociados = 0;
			}else{
				if(this. incidentes.length == 1 && this. incidentes[0] == 'NINGUNO'){
					this. sumaCNC_IncidentesAsociados = 0;
				}else{
					this. sumaCNC_IncidentesAsociados = this. incidentes.length * 6.2;
				}
			}
		}

	public getFolioIncidentes():any
		{
			return this.folioIncidentes;
		}

	 public setFolioIncidentes(value:any):void
		{
			this.folioIncidentes = value;
		}

	public getListadoUsuarios():any
		{
			return this.listadoUsuarios;
		}

	public setListadoUsuarios(value: any):void
		{
			this.listadoUsuarios = value;
		}

	 public getFechaNacimiento():Date
		{
			return this.fechaNacimiento;
		}

    public setFechaNacimiento(value:Date):void
		{
			this.fechaNacimiento = value;
		}

	 public getFechaContrato():Date
		{
			return this.fechaContrato;
		}

	 public setFechaContrato(value:Date):void
		{
			this.fechaContrato = value;
		}

	 public getFechaIngreso():Date
		{
			return this.fechaIngreso;
		}

	 public setFechaIngreso(value:Date):void
		{
			this.fechaIngreso = value;
		}

   public	getResponsable():string
		{
			return this.responsable;
		}

	 public	setResponsable(value:string):void
		{
			this.responsable = value;
		}

	public getNombreSubproceso():string
		{
			return this.nombreSubproceso;
		}

	public setNombreSubproceso(value:string):void
		{
			this.nombreSubproceso = value;
		}

	public	getNombreFuncion():string
		{
			return this.nombreFuncion;
		}

	 public setNombreFuncion(value:string):void
		{
			this.nombreFuncion = value;
		}

		 public getNivelFuncion():string
		{
			return this.nivelFuncion;
		}

	public setNivelFuncion(value:string):void
		{
			this.nivelFuncion = value;
		}

  public getCurp():string
		{
			return this.curp;
		}

	public	setCurp(value:string):void
		{
			this.curp = value;
		}

	public	getDireccion():string
		{
			return this.direccion;
		}

	public	setDireccion(value:string):void
		{
			this.direccion = value;
		}

public getEmpresa():string
		{
			return this.empresa;
		}

	public	setEmpresa(value:string):void
		{
			this.empresa = value;
		}

	public	getTelefono2():string
		{
			return this.telefono2;
		}

	public	setTelefono2(value:string):void
		{
			this.telefono2 = value;
		}

	public	getTelefono():string
		{
			return this.telefono;
		}

	public	setTelefono(value:string):void
		{
			this.telefono = value;
		}

  public getPuesto():string
		{
			return this.puesto;
		}

	public setPuesto(value:string):void
		{
			this.puesto = value;
		}

	public	getDepartamento():string
		{
			return this.departamento;
		}

	public	setDepartamento(value:string):void
		{
			if(value == null || value == ""){
				this.departamento = "Otros";
			}
			else{
				this.departamento = value;
			}
		}

	public	getNombre():string
		{
			return this.nombre;
		}

	public	setNombre(value:string):void
		{
			this.nombre = value;
		}

	public	getPassword():string
		{
			return this.password;
		}

	public	setPassword(value:string):void
		{
			this.password = value;
		}

	public	getUsuario():string
		{
			return this.usuario;
		}

	public setUsuario(value:string):void
		{
			this.usuario = value;
		}

	public	getPorcentajeBono():number
		{
			return this.porcentajeBono;
		}

	public	setPorcentajeBono(value:number):void
		{
			this.porcentajeBono = value;
		}

	public	getMontoAPagar():number
		{
			return this.montoAPagar;
		}

	public setMontoAPagar(value:number):void
		{
			this.montoAPagar = value;
		}

	public	getCostoTotalIncidentes():number
		{
			return this.costoTotalIncidentes;
		}

	public	setCostoTotalIncidentes(value:number):void
		{
			this.costoTotalIncidentes = value;
		}

	public	getCostoHoraHombre():number
		{
			return this.costoHoraHombre;
		}

	public	setCostoHoraHombre(value:number):void
		{
			this.costoHoraHombre = value;
		}

	 public getIdcombo():number
		{
			return this.idcombo;
		}

	public	setIdcombo(value:number):void
		{
			this.idcombo = value;
		}

	public	getIdFuncion():number
		{
			return this.idFuncion;
		}

	public	setIdFuncion(value:number):void
		{
			this.idFuncion = value;
		}

	public	getFase():number
		{
			return this.fase;
		}

	public	setFase(value:number):void
		{
			this.fase = value;
		}

	public	getNivel():number
		{
			return this.nivel;
		}

	public	setNivel(value:number):void
		{
			this.nivel = value;
		}

	public	getClave():number
		{
			return this.clave;
		}

	public	setClave(value:number):void
		{
			this.clave = value;
		}

	public	getIdEmpleado():number
		{
			return this.idEmpleado;
		}

	public	setIdEmpleado(value:number):void
		{
			this.idEmpleado = value;
		}

		public  setEmpleado(objeto:Empleado):void{
			this.setClave(objeto.getClave());
			this.setUsuario (objeto.getUsuario());
			this.setPassword(objeto.getPassword());
			this.setNivel (objeto.getNivel());
			this.setNombre (objeto.getNombre());
			this.setDepartamento (objeto.getDepartamento());
			this.setFase (objeto.getFase());
			this.setPuesto (objeto.getPuesto());
			this.setFechaIngreso (objeto.getFechaIngreso());
			this.setIdFuncion (objeto.getIdFuncion());
			this.setIdEmpleado (objeto.getIdEmpleado());
			this.setNivelGeneral (objeto.getNivelGeneral());
			this.setListadoUsuarios (new Array );
			this.setIdcombo(-1);
		}

		public  buscarEmpleado(Usuarios:any):void{
			this.setListadoUsuarios(Usuarios);
			for(let m:number = 0;
        m<this.setListadoUsuarios.length; m ++){
				if(this.getClave == this.getListadoUsuarios[m].getClave){
					this.setIdcombo(m);
					return;
				}
			}
			this.setIdcombo (-1);
		}

	public	getEsGerente():Boolean
		{
			return this.esGerente;
		}

	public setEsGerente(value:Boolean):void
		{
			this.esGerente = value;
		}

	 public getRoles():any
		{
			return this.roles;
		}

	public	setRoles(value:any):void
		{
			this.roles = value;
		}

	public	getUsuarioESAC():string
		{
			return this.usuarioESAC;
		}

	public	setUsuarioESAC(value:string):void
		{
			this.usuarioESAC = value;
		}

	public	getNombreESAC():string
		{
			return this.nombreESAC;
		}

	public	setNombreESAC(value:string):void
		{
			this.nombreESAC = value;
		}

		public getArea():string
		{
			return this.area;
		}

	public	setArea(value:string):void
		{
			this.area = value;
		}



}

