import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pn-oredenes-de-compra',
  templateUrl: './oredenes-de-compra.component.html',
  styleUrls: ['./oredenes-de-compra.component.scss']
})
export class OredenesDeCompraComponent implements OnInit {
  lista: any[] = [{ 'folio':"067236-0987",'precio': '$12,765', 'piezas': 21, 'productos': 5},
    {  'folio':"067236-0988", 'precio': '$12,765', 'piezas': 21, 'productos': 12},
    {  'folio':"067236-0989", 'precio': '$12,765', 'piezas': 21, 'productos': 3},
    {  'folio':"067236-09810",'precio': '$12,765', 'piezas': 21, 'productos': 12},
    { 'folio':"067236-09811", 'precio': '$12,765', 'piezas': 21, 'productos': 2},
    { 'folio':"067236-09812", 'precio': '$12,765', 'piezas': 21, 'productos': 12},
    {  'folio':"067236-09813", 'precio': '$12,765', 'piezas': 21, 'productos': 11},
    {  'folio':"067236-09814", 'precio': '$12,765', 'piezas': 21, 'productos': 21},
    {  'folio':"067236-0991",  'precio': '$12,765', 'piezas': 21, 'productos': 11},
    {  'folio':"067236-0992", 'precio': '$12,765', 'piezas': 21, 'productos': 4},
    {  'folio':"067236-0993", 'precio': '$12,765', 'piezas': 21, 'productos': 6}];
  searchTerm: string;
  clientesSearched: any[];
  ordenes: any[] = [];
  validarLista: boolean = true;
  listaFD: any[];
  constructor() { }

  ngOnInit() {
    for (let i: number = 0; i < this.lista.length; i++) {
      this.ordenes.push(this.lista[i]);
    }
    this.seleccionarOrden(-1);
  }
  /// METODO PARA CMABIAR EL COLOR CUANDO SE SELECCIONA UNO DE LA LISTA
  seleccionarOrden(index) {
    this.listaFD = [];
    this.listaFD = new Array(this.lista.length).fill('');
    this.listaFD[index] = 'divActive';
    console.log('Soy la posicion seleccionada <-->', index);
    // this.ordenes[index] = 'divActive';
    // this.listaFD[i]= 'divCambioColor';
  }
  //// METODO PARA MOSTRAR LOS SIMILARES A LAS LETRAS DEL BUSCADOR
  buscarOrden(search) {

    let searchArrayAux: any[] = [];
    this.searchTerm = search;
    if (search == "") {
      // this.ClientesSearched= this.clientesConsulta;
      this.clientesSearched = [...this.ordenes];

    } else {

      this.ordenes.forEach(folio => {
        if (
          folio.folio
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
