import { Pipe, PipeTransform } from '@angular/core';
import * as accounting from 'accounting';

@Pipe({
  name: 'accounting'
})

export class AccountingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}


@Pipe({
  name: 'acFormatNumber'
})
export class AccountingFormatNumber implements PipeTransform {

  transform(numberToFormat: number): any {
    return accounting.formatNumber(numberToFormat);
  }

}

@Pipe({
  name: 'acFormatNumber2decimal'
})
export class AccountingFormatNumber2Decimal implements PipeTransform {

  transform(numberToFormat: number): any {
    return accounting.formatNumber(numberToFormat, 2);
  }

}

@Pipe({
  name: 'acFormatMoney'
})
export class AccountingFormatMoney implements PipeTransform {

  transform(numberToFormat: number): any {
    return accounting.formatMoney(numberToFormat);
  }

}

@Pipe({
  name: 'dateFormatDot'
})
export class DateFormatDot implements PipeTransform {

  transform(dateToFormat: any): any {
    let now: Date = new Date(dateToFormat);
    let date: String;
    let mes: number = now.getMonth();
    switch (mes) {
      case 0:
        date = now.getDate() + ' · Enero · ' + now.getFullYear();
        break;
      case 1:
        date = now.getDate() + ' · Febrero · ' + now.getFullYear();
        break;
      case 2:
        date = now.getDate() + ' · Marzo · ' + now.getFullYear();
        break;
      case 3:
        date = now.getDate() + ' · Abril · ' + now.getFullYear();
        break;
      case 4:
        date = now.getDate() + ' · Mayo · ' + now.getFullYear();
        break;
      case 5:
        date = now.getDate() + ' · Junio · ' + now.getFullYear();
        break;
      case 6:
        date = now.getDate() + ' · Julio · ' + now.getFullYear();
        break;
      case 7:
        date = now.getDate() + ' · Agosto · ' + now.getFullYear();
        break;
      case 8:
        date = now.getDate() + ' · Septiembre · ' + now.getFullYear();
        break;
      case 9:
        date = now.getDate() + ' · Octubre · ' + now.getFullYear();
        break;
      case 10:
        date = now.getDate() + ' · Noviembre · ' + now.getFullYear();
        break;
      case 11:
        date = now.getDate() + ' · Diciembre · ' + now.getFullYear();
        break;
      default:
        break;
    }
    return date;
  }
}

@Pipe({
  name: 'dateFormatDot2'
})
export class DateFormatDot2 implements PipeTransform {

  transform(dateToFormat: any): any {
    let now: Date = new Date(dateToFormat);
    let date: String;
    let mes: number = now.getMonth();
    switch (mes) {
      case 0:
        date = now.getDate() + '·Ene·' + now.getFullYear();
        break;
      case 1:
        date = now.getDate() + '·Feb·' + now.getFullYear();
        break;
      case 2:
        date = now.getDate() + '·Mar·' + now.getFullYear();
        break;
      case 3:
        date = now.getDate() + '·Abr·' + now.getFullYear();
        break;
      case 4:
        date = now.getDate() + '·May·' + now.getFullYear();
        break;
      case 5:
        date = now.getDate() + '·Jun·' + now.getFullYear();
        break;
      case 6:
        date = now.getDate() + '·Jul·' + now.getFullYear();
        break;
      case 7:
        date = now.getDate() + '·Ago·' + now.getFullYear();
        break;
      case 8:
        date = now.getDate() + '·Sep·' + now.getFullYear();
        break;
      case 9:
        date = now.getDate() + '·Oct·' + now.getFullYear();
        break;
      case 10:
        date = now.getDate() + '·Nov·' + now.getFullYear();
        break;
      case 11:
        date = now.getDate() + '·Dic·' + now.getFullYear();
        break;
      default:
        break;
    }
    return date;
  }
}

@Pipe({
  name: 'dateFormatSlash'
})
export class dateFormatSlash implements PipeTransform {

  transform(dateToFormat: any): any {
    if(dateToFormat == undefined || dateToFormat == null){ return "Pendiente"}
    let now: Date = new Date();
    if (dateToFormat.length == 10) {
      now = new Date(dateToFormat + " 00:00:00");
    } else {
      now = new Date(dateToFormat);
    }
    let date: String;
    let mes: number = now.getMonth();
    switch (mes) {
      case 0:
        date = now.getDate() + '/Ene/' + now.getFullYear();
        break;
      case 1:
        date = now.getDate() + '/Feb/' + now.getFullYear();
        break;
      case 2:
        date = now.getDate() + '/Mar/' + now.getFullYear();
        break;
      case 3:
        date = now.getDate() + '/Abr/' + now.getFullYear();
        break;
      case 4:
        date = now.getDate() + '/May/' + now.getFullYear();
        break;
      case 5:
        date = now.getDate() + '/Jun/' + now.getFullYear();
        break;
      case 6:
        date = now.getDate() + '/Jul/' + now.getFullYear();
        break;
      case 7:
        date = now.getDate() + '/Ago/' + now.getFullYear();
        break;
      case 8:
        date = now.getDate() + '/Sep/' + now.getFullYear();
        break;
      case 9:
        date = now.getDate() + '/Oct/' + now.getFullYear();
        break;
      case 10:
        date = now.getDate() + '/Nov/' + now.getFullYear();
        break;
      case 11:
        date = now.getDate() + '/Dic/' + now.getFullYear();
        break;
      default:
        break;
    }
    return date;
  }
}

@Pipe({
  name: 'dateFormatSlashNumber'
})
export class dateFormatSlashNumber implements PipeTransform {

  transform(dateToFormat: any): any {
    if(dateToFormat == undefined || dateToFormat == null){ return "Pendiente"}
    let now: Date = new Date();
    if (dateToFormat.length == 10) {
      now = new Date(dateToFormat + " 00:00:00");
    } else {
      now = new Date(dateToFormat);
    }
    let date: String;
    let mes: number = now.getMonth();
    switch (mes) {
      case 0:
        date = now.getDate() + '/01/' + now.getFullYear();
        break;
      case 1:
        date = now.getDate() + '/02/' + now.getFullYear();
        break;
      case 2:
        date = now.getDate() + '/03/' + now.getFullYear();
        break;
      case 3:
        date = now.getDate() + '/04/' + now.getFullYear();
        break;
      case 4:
        date = now.getDate() + '/05/' + now.getFullYear();
        break;
      case 5:
        date = now.getDate() + '/06/' + now.getFullYear();
        break;
      case 6:
        date = now.getDate() + '/07/' + now.getFullYear();
        break;
      case 7:
        date = now.getDate() + '/08/' + now.getFullYear();
        break;
      case 8:
        date = now.getDate() + '/09/' + now.getFullYear();
        break;
      case 9:
        date = now.getDate() + '/10/' + now.getFullYear();
        break;
      case 10:
        date = now.getDate() + '/11/' + now.getFullYear();
        break;
      case 11:
        date = now.getDate() + '/12/' + now.getFullYear();
        break;
      default:
        break;
    }
    return date;
  }
}

@Pipe({
  name: 'dateFormatSlashHour'
})
export class DateFormatSlashHour implements PipeTransform {

  transform(dateToFormat: any): any {
    if(dateToFormat == undefined || dateToFormat == null){ return "Pendiente"}
    let now: Date = new Date();
    if (dateToFormat.length == 10) {
      now = new Date(dateToFormat);
    } else {
      now = new Date(dateToFormat);
    }
    let date: String;
    let mes: number = now.getMonth();
    let hora: String = now.getHours().toString().length == 1 ? "0" + now.getHours().toString() : now.getHours().toString();
    let minutos: String = now.getMinutes().toString().length == 1 ? "0" + now.getMinutes().toString() : now.getMinutes().toString();
    let hour: String = hora + ":" + minutos ;
    switch (mes) {
      case 0:
        date = now.getDate() + '/Ene/' + now.getFullYear() + " " + hour;
        break;
      case 1:
        date = now.getDate() + '/Feb/' + now.getFullYear() + " " + hour;
        break;
      case 2:
        date = now.getDate() + '/Mar/' + now.getFullYear() + " " + hour;
        break;
      case 3:
        date = now.getDate() + '/Abr/' + now.getFullYear() + " " + hour;
        break;
      case 4:
        date = now.getDate() + '/May/' + now.getFullYear() + " " + hour;
        break;
      case 5:
        date = now.getDate() + '/Jun/' + now.getFullYear() + " " + hour;
        break;
      case 6:
        date = now.getDate() + '/Jul/' + now.getFullYear() + " " + hour;
        break;
      case 7:
        date = now.getDate() + '/Ago/' + now.getFullYear() + " " + hour;
        break;
      case 8:
        date = now.getDate() + '/Sep/' + now.getFullYear() + " " + hour;
        break;
      case 9:
        date = now.getDate() + '/Oct/' + now.getFullYear() + " " + hour;
        break;
      case 10:
        date = now.getDate() + '/Nov/' + now.getFullYear() + " " + hour;
        break;
      case 11:
        date = now.getDate() + '/Dic/' + now.getFullYear() + " " + hour;
        break;
      default:
        break;
    }
    return date;
  }
}

@Pipe({
  name: 'dateFormatFull'
})
export class dateFormatFull implements PipeTransform {

  transform(dateToFormat: any): any {
    let now: Date = new Date(dateToFormat);
    let date: String;
    let mes: number = now.getMonth();
    let dayOfWeek: number = now.getDay();
    let dayName: String = "";

    switch (dayOfWeek) {
      case 0:
        dayName = "Domingo";
        break;
      case 1:
        dayName = "Lunes";
        break;
      case 2:
        dayName = "Martes";
        break;
      case 3:
        dayName = "Miércoles";
        break;
      case 4:
        dayName = "Jueves";
        break;
      case 5:
        dayName = "Viernes";
        break;
      case 6:
        dayName = "Sábado";
        break;
      default:
        break;
    }

    switch (mes) {
      case 0:
        date = dayName + " " + now.getDate() + ' de Enero del ' + now.getFullYear();
        break;
      case 1:
        date = dayName + " " + now.getDate() + ' de Febrero del ' + now.getFullYear();
        break;
      case 2:
        date = dayName + " " + now.getDate() + ' de Marzo del ' + now.getFullYear();
        break;
      case 3:
        date = dayName + " " + now.getDate() + ' de Abril del ' + now.getFullYear();
        break;
      case 4:
        date = dayName + " " + now.getDate() + ' de Mayo del ' + now.getFullYear();
        break;
      case 5:
        date = dayName + " " + now.getDate() + ' de Junio del ' + now.getFullYear();
        break;
      case 6:
        date = dayName + " " + now.getDate() + ' de Julio del ' + now.getFullYear();
        break;
      case 7:
        date = dayName + " " + now.getDate() + ' de Agosto del ' + now.getFullYear();
        break;
      case 8:
        date = dayName + " " + now.getDate() + ' de Septiembre del ' + now.getFullYear();
        break;
      case 9:
        date = dayName + " " + now.getDate() + ' de Octubre del ' + now.getFullYear();
        break;
      case 10:
        date = dayName + " " + now.getDate() + ' de Noviembre del ' + now.getFullYear();
        break;
      case 11:
        date = dayName + " " + now.getDate() + ' de Diciembre del' + now.getFullYear();
        break;
      default:
        break;
    }
    return date;
  }
}

@Pipe({
  name: 'code'
})
export class Code implements PipeTransform {

  transform(codigo: number): any {
    let code: string;
    if (codigo < 10 && codigo > 0) {
      code = '000' + String(codigo);
    }
    if (codigo < 100 && codigo > 9) {
      code = '00' + String(codigo);
    }
    if (codigo < 1000 && codigo > 99) {
      code = '0' + String(codigo);
    }
    return code;

  }

}


@Pipe({
  name: 'lineBreak'
})
export class LineBreak implements PipeTransform {

  transform(text: String): any {
    let re = /\|/gi;
    if (text != undefined) { return text.replace(re, "\n"); }
    else { return text; }


  }

}
