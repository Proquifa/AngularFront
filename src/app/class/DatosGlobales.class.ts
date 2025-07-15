import {Empleado} from './Empleado.class';

export class DatosGlobales
{

instance: DatosGlobales = null;


usuario: Empleado;


catGerentes: any = new Array();


empleadosHabilitados: any = new Array();


//   sql:Query;


  statusTablero:String;

  getInstance():DatosGlobales{
    if(this.instance==null){
      this.instance=new DatosGlobales() ;
    }
    return this.instance;
  }

  DatosGlobales()
  {
  }
}
