export class Utilities {
  constructor(){}

  public static getListValuesNoRepeat(data: any, field: string){//, exclude:any){
    let array = [];
    for(let obj of data){
      if(obj[field] && !array.includes(obj[field])){// && !exclude.includes(obj[field])){
        array.push(obj[field])
      }
    }
    return array;
  }

  public static getMultipleListsValuesNoRepeat(data: any, fields: any, exclude:any){
    let returnObj = {};
    for(let f of fields){
      returnObj[f+'_arr'] = []
    }
    let array = [];
    for(let obj of data){
      let excludeIndex = 0;
      for(let field of fields){
        if(obj[field] && !returnObj[field+'_arr'].includes(obj[field]) && (exclude[excludeIndex] && !exclude[excludeIndex].includes(obj[field]) || !exclude[excludeIndex])){
          returnObj[field+'_arr'].push(obj[field])
        }
        excludeIndex++;
      }
    }
    return returnObj;
  }

  public static calcularCambioEnProcentaje(valorAntiguo, valorNuevo){
    return ((valorNuevo - valorAntiguo) / valorAntiguo * 100)
  }
}
