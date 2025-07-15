import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";

@Component({
  selector: "pn-buscador-ovalado",
  templateUrl: "./buscador-ovalado.component.html",
  styleUrls: ["./buscador-ovalado.component.scss"]
})
export class BuscadorOvaladoComponent implements OnInit {
  @Input()
  placeholder: string;
  @Input() clientesConsulta:any[] = [];
  @Output() regresaConsulta:EventEmitter<any> = new EventEmitter<any>();
  ///variable para termino
  public searchTerm: string = "";

  public ClientesSearched: any[] = [];



  ngOnInit() {
    console.log(this.clientesConsulta);
  }

  buscar(search) {
    
    let searchArrayAux: any[] = [];
    this.searchTerm = search;
    if (search == "") {
     // this.ClientesSearched= this.clientesConsulta;
     this.ClientesSearched= [...this.clientesConsulta];

    } else {
    
      this.clientesConsulta.forEach(cliente => {
        if (
          cliente.nombreCliente
            .toLowerCase()
            .indexOf(this.searchTerm.toLowerCase()) !== -1
        ) {
          searchArrayAux.push(cliente);
        }
      });
      this.ClientesSearched = searchArrayAux;
      this.regresaConsulta.emit(searchArrayAux);
    }
  }

  //Metodo para buscar termino

  //  this.ClientesSearched= [...this.clientesConsulta];


}
