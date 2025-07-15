import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  public getTextMonth(monthNumber){
    switch(monthNumber){
      case 0:
        return 'Enero'
      case 1:
        return 'Febrero'
      case 2:
        return 'Marzo'
      case 3:
        return 'Abril'
      case 4:
        return 'Mayo'
      case 5:
        return 'Junio'
      case 6:
        return 'Julio'
      case 7:
        return 'Agosto'
      case 8:
        return 'Septiembre'
      case 9:
        return 'Octubre'
      case 10:
        return 'Noviembre'
      case 11:
        return 'Diciembre'
      default:
        console.log('ERROR.- No se encontró el mes, valor recibido -> ' + monthNumber);
        return null
    }
  }
}
