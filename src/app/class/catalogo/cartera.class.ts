import { Cliente } from './cliente.class'

export class Cartera {
  public idCartera: number;
  public nombreCartera: string;
  public nombreCorporativo: string;
  public area: string;
  public nivelIngreso: string ;
  public folio: string;
  public idEsac: number;
  public esac: string;
  public idEvt: number;
  public evt: string;
  public idEv: number;
  public ev: string;
  public idCobrador: number;
  public cobrador: string;
  public elaboro: string;
  public idMensajero: number;
  public mensajero: string;
  public numeroClientes: number;
  public facturacionActual: number;
  public facturacionAnterior: number;
  public facturacionGlobal: number;
  public objetivoFundamental: number;
  public objetivoDeseado: number;
  public promedioFacturacion: number;
  public proyeccionVenta: number;
  public debe: number;
  public debemos: number;
  public ruta: string;
  public industria: string;
  public idIndustria: number;
  public estrella: number;
  public triangulo: number;
  public clientes: Cliente[] = [];
  public publicada: boolean;
  public categoria: string;

  constructor(){
    this.clientes = [];
  }

  public static builder(wallet){
    let cartera = new Cartera()
    cartera.idCartera = wallet.idCartera
    cartera.nombreCartera = wallet.nombreCartera
    cartera.esac = wallet.esac
    cartera.ev = wallet.ev
    cartera.cobrador = wallet.cobrador
    cartera.numeroClientes = wallet.numeroClientes
    return cartera;
  }

  public getIdCartera(){
    return this.idCartera
  }
  public getNombreCartera(){
    return this.nombreCartera
  }
  public getNombreCorporativo(){
    return this.nombreCorporativo
  }
  public getArea(){
    return this.area;
  }
  public getNivelIngreso(){
    return this.nivelIngreso
  }
  public getFolio(){
    return this.folio
  }
  public getEsac(){
    return this.esac
  }
  public getEvt(){
    return this.evt
  }
  public getEv(){
    return this.ev
  }
  public getCobrador(){
    return this.cobrador
  }
  public getElaboro(){
    return this.elaboro
  }
  public getNumeroClientes(){
    return this.numeroClientes
  }
  public getFacturacionActual(){
    return this.facturacionActual
  }
  public getFacturacionAnterior(){
    return this.facturacionAnterior
  }
  public getObjetivoFundamental(){
    return this.objetivoFundamental
  }
  public getObjetivoDeseado(){
    return this.objetivoDeseado
  }
  public getPromedioFacturacion(){
    return this.promedioFacturacion
  }
  public getProyeccionVenta(){
    return this.proyeccionVenta
  }
  public getDebe(){
    return this.debe
  }
  public getDebemos(){
    return this.debemos
  }
  public getRuta(){
    return this.ruta
  }
  public getIndustria(){
    return this.industria
  }
  public getEstrella(){
    return this.estrella
  }
  public getTriangulo(){
    return this.triangulo
  }
  public getClientes(){
    return this.clientes
  }

  public getCategoria(){
    return this.categoria
  }
  public getFacturacionGlobal(){
    return this.facturacionGlobal
  }

  public esPublicada(){
    return this.publicada
  }

  public setIdCartera(id){
    this.idCartera = id
  }
  public setNombreCartera(nombre){
    this.nombreCartera = nombre
  }
  public setNombreCorporativo(nombre){
    this.nombreCorporativo = nombre
  }
  public setArea(area){
    this.area = area
  }
  public setNivelIngreso(nivel){
    this.nivelIngreso = nivel
  }
  public setFolio(folio){
    this.folio = folio
  }
  public setEsac(esac){
    this.esac = esac
  }
  public setEvt(evt){
    this.evt = evt
  }
  public setEv(ev){
    this.ev = ev
  }
  public setCobrador(cobrador){
    return this.cobrador = cobrador
  }
  public setElaboro(elaboro){
    this.elaboro = elaboro
  }
  public setNumeroClientes(numero){
    this.numeroClientes = numero
  }
  public setFacturacionActual(fact){
    this.facturacionActual = fact
  }
  public setFacturacionAnterior(fant){
    this.facturacionAnterior = fant
  }
  public setObjetivoFundamental(objFun){
    this.objetivoFundamental = objFun
  }
  public setObjetivoDeseado(objetivoDeseado){
    this.objetivoDeseado = objetivoDeseado
  }
  public setPromedioFacturacion(pFact){
    this.promedioFacturacion = pFact
  }
  public setProyeccionVenta(pv){
    this.proyeccionVenta = pv
  }
  public setDebe(debe){
    this.debe = debe
  }
  public setDebemos(debemos){
    this.debemos = debemos
  }
  public setRuta(ruta){
    this.ruta = ruta
  }
  public setIndustria(industria){
    this.industria = industria
  }
  public setEstrella(estrella){
    this.estrella = estrella
  }
  public setTriangulo(triangulo){
    this.triangulo = triangulo
  }
  public setClientes(clientes){
    this.clientes =  clientes
  }

  public setPublicada(publicada){
    this.publicada = publicada
  }

  public setCategoria(categoria){
    this.categoria = categoria
  }

  public setFacturacionGlobal(global){
    this.facturacionGlobal = global
  }

  public setMensajero(mensajero){
    this.mensajero = mensajero
  }
}
