export class Cliente {
  public id: number;
  public nombre:string;
  public nivelIngreso:string;
  public facturaAct: number;
  public facturaAnt: number;
  public objetivoFundamental: number;
  public objetivoDeseado: number;
  public promedioFacturado: number;
  public proyeccionVenta: number;
  public imagen: string;
  public categoria: string;
  public esOriginal: boolean = false;
  public idIndustria: number;

  public setId(id){
    this.id = id
  }
  public setNombre(nombre){
    this.nombre = nombre
  }

  public setNivelIngreso(nivel){
    this.nivelIngreso = nivel
  }

  public setFacturaAct(facturaAct){
    this.facturaAct = facturaAct
  }

  public setFacturaAnt(facturaAnt){
    this.facturaAnt = facturaAnt
  }

  public setImagen(imagen){
    this.imagen = imagen
  }

  public setCategoria(categoria){
    this.categoria = categoria
  }

  public setObjetivoFundamental(of){
    this.objetivoFundamental = of
  }

  public setObjetivoDeseado(od){
    this.objetivoDeseado = od
  }

  public setPromedioFacturado(pf){
    this.promedioFacturado = pf
  }

  public setProyeccionVenta(pv){
    this.proyeccionVenta = pv
  }

  public getId(){
    return this.id
  }

  public getNombre(){
    return this.nombre
  }

  public getNivelIngreso(){
    return this.nivelIngreso
  }

  public getFacturaAct(){
    return this.facturaAct
  }

  public getFacturaAnt(){
    return this.facturaAnt
  }

  public getImagen(){
    return this.imagen
  }

  public getCategoria(){
    return this.categoria
  }

  public getObjetivoFundamental(){
    return this.objetivoFundamental
  }

  public getObjetivoDeseado(){
    return this.objetivoDeseado
  }

  public getPromedioFacturado(){
    return this.promedioFacturado
  }

  public getProyeccionVenta(){
    return this.proyeccionVenta
  }
}
