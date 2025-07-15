export class UtilFechas {

    regresaDiferenciaEntreFechasEnDias(fechaMasPequenia: Date, fechaMasGrande: Date): Number {
        var diferenciaDias: Number = 0;
        if (fechaMasPequenia == null || fechaMasGrande == null) {
            return diferenciaDias;
        }
        diferenciaDias = (fechaMasPequenia.getTime() - fechaMasGrande.getTime()) / (1000 * 60 * 60 * 24)
        return -diferenciaDias;
    }

    fechaDescarga(fechaE) {
        let now = new Date(fechaE );
        let date: String;
        let mes: number = now.getMonth();
        switch (mes) {
          case 0:
            date = now.getDate() + 'Ene' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
            break;
          case 1:
            date = now.getDate() + 'Feb' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
            break;
          case 2:
            date = now.getDate() + 'Mar' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
            break;
          case 3:
            date = now.getDate() + 'Abr' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
            break;
          case 4:
            date = now.getDate() + 'May' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
            break;
          case 5:
            date = now.getDate() + 'Jun' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
            break;
          case 6:
            date = now.getDate() + 'Jul' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
            break;
          case 7:
            date = now.getDate() + 'Ago' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
            break;
          case 8:
            date = now.getDate() + 'Sep·' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
            break;
          case 9:
            date = now.getDate() + 'Oct' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
            break;
          case 10:
            date = now.getDate() + 'Nov' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
            break;
          case 11:
            date = now.getDate() + 'Dic' + now.getFullYear() + '_' + now.getHours() + '_' + now.getMinutes();
            break;
          default:
            break;
        }
        
        return date;
      }
}