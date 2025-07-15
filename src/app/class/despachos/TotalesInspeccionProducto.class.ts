import { PartidaInspeccion } from "./PartidaInspeccion.class";


export class totalesInspeccionProducto {

  total_A : number;
	total_M: number;
	total_Q: number;
	total_D: number;
	promXpieza: number;
	num_hallazgos: number;
	t_partidas: number;
  public PartidaInspeccion: PartidaInspeccion[];

  public getTotal_M(): number {
		return this.total_M;
	}
	public setTotal_M(total_M : number) : void {
		this.total_M = total_M;
	}

	public getTotal_Q(): number {
		return this.total_Q;
	}
	public setTotal_Q(total_Q : number) : void {
		this.total_Q = total_Q;
	}
	public getTotal_D(): number {
		return this.total_D;
	}
	public setTotal_D(total_D : number) : void {
		this.total_D = total_D;
	}
	public getTotal_A(): number {
		return this.total_A;
	}
	public setTotal_A(total_A: number) : void {
		this.total_A = total_A;
	}
	public getPromXpieza() : number {
		return this.promXpieza;
	}
	public setPromXpieza(promXpieza: number): void {
		this.promXpieza = promXpieza;
	}

  public getPartidaInspeccion(){
    return this.PartidaInspeccion;
  }

  public setPartidaInspeccion(PartidaInspeccion){
    this.PartidaInspeccion =  PartidaInspeccion
  }

	public getNum_hallazgos() : number {
		return this.num_hallazgos;
	}
	public setNum_hallazgos(num_hallazgos : number) : void {
		this.num_hallazgos = num_hallazgos;
	}
	public getT_partidas() : number {
		return this.t_partidas;
	}
	public setT_partidas(t_partidas : number) : void  {
		this.t_partidas = this.t_partidas;
	}


}
