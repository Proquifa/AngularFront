import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'pn-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']
})
export class FacturacionComponent implements OnInit {

  constructor() { }
  //// Data estatico para visualizar la grafica.
 @Output() cambiarBarraRegreso: EventEmitter <boolean> = new EventEmitter <boolean>();
dataFacturacion: any = {
    titulo: 'Clientes',
    labels: ['Totales'],
    valores: [6, 3],
    labelsExtras: [['clientes'], ['Ordenes de compra'], ['Piezas'], ['Monto']],
    labelsExtrasHover: ['clientes', 'Ordenes de compra', 'Piezas', 'Monto'],
    valuesExtras: [6, 324, 157, 5000],
    valuesExtrasHover: [[6, 3, 1, 2], [324, 157, 50, 100]]
};
  lista: any[] = [{ 'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 5},
    {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
    {  'referencia':"PHS", "nombre": 'PQF', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 3},
    {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
    { 'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 2},
    { 'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 12},
    {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11},
    {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 21},
    {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 11},
    {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 4},
    {  'referencia':"PHS", "nombre": 'GOL', 'cantidad': 4, 'precio': '$12,765', 'piezas': 21, 'productos': 6}];
  searchTerm: string; /// Almacena la letra o letras que se van a buscar en la lista cuando se usa la barra de busqueda
  clientesSearched: any[];
  clientes: any[] = [];
  validarLista: boolean = true;
  Vistafacturacion: boolean = true; /// VARIABLE PARA VISUALIZAR LA PRIMER VISTA DE FACTURACION
  activarVistaOrdenesComp: boolean;
    ngOnInit() {
      for (let i: number = 0; i < this.lista.length; i++) {
        this.clientes.push(this.lista[i]);
      }
  }
  seleccionarItem($index) {
      this.Vistafacturacion = false;
      this.activarVistaOrdenesComp = true;
      this.cambiarBarraRegreso.emit(false);
    console.log('Soy clic -->', $index);
  }
  /// Funcion de buscar en facturacion
  buscar(search) {

    let searchArrayAux: any[] = [];
    this.searchTerm = search;
    if (search == "") {
      // this.ClientesSearched= this.clientesConsulta;
      this.clientesSearched = [...this.clientes];

    } else {

      this.clientes.forEach(folio => {
        if (
          folio.nombre
            .toLowerCase()
            .indexOf(this.searchTerm.toLowerCase()) !== -1
        ) {
          searchArrayAux.push(folio);
        }
      });
      this.clientesSearched = searchArrayAux;
      this.validarLista = false;

      //  this.regresaConsulta.emit(searchArrayAux);
    }
  }
}
