export class Query {

    private  indexCamposFiltro:any[];
      indexObject:any;
      universo:any[];
    /* private  _dummy:ListaProductos_clase; */
    
    
    private  cronometro:Date;
    private  sinCache:Boolean = false;
  
    constructor() { }

    
  
  
  
  Query($universo, $camposAIndexar: any[], $lowerCase:boolean = false, $native:boolean = false ){
    //   console.log($universo);
    let cronometro: Date = new Date()
    let inicioTime:Number = cronometro.getTime();
  
    if(!$native)
      this.universo = Object.assign([], $universo);
  else
    this.universo = $universo;
  
   this.indexCamposFiltro = $camposAIndexar;
  
  if($lowerCase)
    this.indexObject = this.indexarUniversoLowerCase( $universo, this.indexCamposFiltro );
  else
    this.indexObject = this.indexarUniverso( this.universo, this.indexCamposFiltro );
  
  var terminadoTime:Number = new Date().getTime();
  }
  
  
  indexarUniverso( $lista:any[], $campos: any[] ):Object{
    console.log($lista);
    let indexObject:Object = new Object();
    indexObject["cache-query"] = [];
    //indexObject["FILA"] = []
    for( let v:number = 0; v < $lista.length; v++ ){
      let currentFila  = $lista[v];
      for( let s:number = 0; s < $campos.length; s++ ){
        /* compruebo que la fila seleccionada tenga la propiedad que quiero indexar */
        if ($campos[s].indexOf(".") != -1 ){
          let campo: any[] = $campos[s].split(".");
          if (currentFila.hasOwnProperty(campo[0]) && currentFila[campo[0]].hasOwnProperty(campo[1]) ) {
            if( indexObject[ campo[0] ] == null )  
              indexObject[ campo[0] ] = new Object();
            if( indexObject[ campo[0] ][ campo[1] ] == null )  
              indexObject[ campo[0] ][ campo[1] ] = new Object();
            if( indexObject[ campo[0] ][ campo[1] ][ currentFila[ campo[0] ][ campo[1] ]] == null ) 
              indexObject[ campo[0] ][ campo[1] ][ currentFila[ campo[0] ][ campo[1] ]] = [];
            indexObject[ campo[0] ][ campo[1] ][ currentFila[ campo[0] ][ campo[1] ]].push( v );
          }
          else{
            console.log('No se pudo indexar la siguiente propiedad debido a que no existe en la clase: ' + campo[0] + campo[1] );
          }
        }else {
          if( currentFila.hasOwnProperty( $campos[s] ) ){
            /* si no esta seteado el campo lo declaro como nuevo */
            if( indexObject[ $campos[s] ] == null )  indexObject[ $campos[s] ] = new Object();
            /* inicio el array objetoIndex[nombreCampo][valor]*/
            if( indexObject[ $campos[s] ][ currentFila[ $campos[s] ]] == null ) indexObject[ $campos[s] ][ currentFila[ $campos[s] ]]= [];
            /* agrego el indice al objetoIndex[nombreCampo][valor] = current index*/
            indexObject[ $campos[s] ][ currentFila[ $campos[s] ]].push( v );
          }else{
            console.log('No se pudo indexar la siguiente propiedad debido a que no existe en la clase: ' + $campos[s] );
          }
        }
      }
    }
    return indexObject;
  }
  
  
  
  
  indexarUniversoLowerCase( $lista: any[], $campos: any[]):Object{
      console.log($lista)
    var indexObject:Object = new Object();
    indexObject["cache-query"] = [];
    //indexObject["FILA"] = []
    for( let v:number = 0; v < $lista.length; v++ ){
      let currentFila = $lista[v];
      for( let s:number = 0; s < $campos.length; s++ )
      {
        /* compruebo que la fila seleccionada tenga la propiedad que quiero indexar */
        let columna:string = $campos[s];
        if( currentFila.hasOwnProperty( columna ) ){
          /* si no esta seteado el campo lo declaro como nuevo */
          if( indexObject[ columna ] == null )  indexObject[ columna ] = new Object();
          /* inicio el array objetoIndex[nombreCampo][valor]*/
          if(isNaN( Number( currentFila[columna] ) ))
          {
            if( indexObject[ columna ][ currentFila[columna].toString().toLocaleLowerCase() ] == null ) indexObject[ columna ][ currentFila[ columna ].toString().toLocaleLowerCase()]= [];
            /* agrego el indice al objetoIndex[nombreCampo][valor] = current index*/
            indexObject[ columna ][ currentFila[ columna ].toString().toLocaleLowerCase()].push( v );
          }
          else
          {
            if( indexObject[ columna ][ currentFila[columna]] == null ) indexObject[ columna ][ currentFila[ columna ]]= [];
            /* agrego el indice al objetoIndex[nombreCampo][valor] = current index*/
            indexObject[ columna ][ currentFila[ columna]].push( v );
          }
          
        }else{
          console.log('No se pudo indexar la siguiente propiedad debido a que no existe en la clase: ' + $campos[s] );
        }
      }
    }
    return indexObject;
  }
  
  
  
  getPunteros( $campos: any[], $omitirRepetidosEnCampo:string = "", $order:string = "" ): any[]{
    let arrayReturn: any = [];
    let collectionIndex  = [];
    let conteoApariciones:number = 0;
    /*genero la clave para el cache de la consulta*/
    let primaryKey:string = "";
    for( var c:number = 0; c < $campos.length; c++ ){
      if( $campos[c] != null && $campos[c] != this.indexCamposFiltro[c]) primaryKey += $campos[c] + c.toString() + 'x' + '.';
      if( $campos[c] != null ) conteoApariciones++;
    }
    primaryKey = primaryKey + $omitirRepetidosEnCampo;
    if( !this.sinCache && primaryKey != "" && this.indexObject["cache-query"].hasOwnProperty( primaryKey ) ){
      // regresa el cache
      arrayReturn = this.indexObject["cache-query"][primaryKey];
      return arrayReturn;
    }else{
      // no existe cache de la consulta entonces prosigue
      this.indexObject["cache-query"][primaryKey] = [];
      for( let g:number = 0; g < this.indexCamposFiltro.length; g++ ){
        /* si el campo que se quiere consultar es diferente de null se prosigue a validar la existencia de dicha propiedad en el objeto index*/
        if( $campos[g] != null ){
          /* si el valor a buscar es igual al nombre del campo entonces devuelvo todos los valores en el campo*/
          if( $campos[g] == this.indexCamposFiltro[g] ){
            for( let key in this.indexObject[ this.indexCamposFiltro[g] ] ){
              //collectionIndex.addItem( _indexObject[ _indexCamposFiltro[g] ][ key ]  );
              arrayReturn.push( key );
            }
            arrayReturn.sort();
            return arrayReturn;
          }
          /* se valida que el objeto index tenga la propiedad con el nombre del campo a consultar*/
          if( this.indexCamposFiltro[g] != "" && this.indexObject.hasOwnProperty( this.indexCamposFiltro[g] ) ){
            /* se valida que el campo tenga informacion*/
            if( this.indexObject[ this.indexCamposFiltro[g] ] != null ){
              /* se intenta accesar a los punteros de objetoIndex[propiedadClase][valor a buscar] */
              if( this.indexObject[ this.indexCamposFiltro[g] ][ $campos[ g ] ] != null ){
                /* se agregan los indices de ese campo */
                collectionIndex.push( this.indexObject[ this.indexCamposFiltro[g] ][ $campos[ g ] ]  );
              }
            }
          }
        }
      }
      /* se cruzan los indices para buscar coincidencias y eliminar los casos que solo aparecen una vez*/
      if( collectionIndex.length > 0 && collectionIndex.length == conteoApariciones ){
        arrayReturn = this.cruzarIndexs( collectionIndex, conteoApariciones );
        if( $omitirRepetidosEnCampo != "" ) arrayReturn = this.omitirValoresRepetidosEnCampo( arrayReturn, $omitirRepetidosEnCampo );
        this.indexObject["cache-query"][primaryKey] = arrayReturn;
        return arrayReturn;
      }
    }
    return arrayReturn;
  }
  
  
  omitirValoresRepetidosEnCampo( $indices: any[], $omitirRepetidosEnCampo:string ): any[]{
    var arrayReturn: any = [];
    var valoresCampoOmitir: any = [];
    for( var t:number = 0; t < $indices.length; t++ ){
      var currentFila ;
      let currentFila  = this.universo[ $indices[t] ]; 
      if( currentFila.hasOwnProperty( $omitirRepetidosEnCampo ) && valoresCampoOmitir.indexOf( currentFila[ $omitirRepetidosEnCampo] ) == -1 ){
        valoresCampoOmitir.push( currentFila[ $omitirRepetidosEnCampo] );
        arrayReturn.push( $indices[t] );
      }
    }
    return arrayReturn;
  }
  
  
          /**
           * recibe un arrayCollection con arrays que contienen indices luego elimina los indices que no aparecen en todos los arreglos
           */
          cruzarIndexs( $collection: any = null, $conteos:number = 0 ): any{
              var final: any = [];
              if( $collection == null ) return final;
              if( $collection.length == 1) final = $collection[0];
              if( $collection.length > 1 ){
                  /*ordenar arrays por length de menor a mayor*/
                  var longitudMenor: number = $collection[0].length;
                  var collectionReOrder: any = new Array<any>();
                  for( var t:number = 0; t < $collection.length; t++ ){
                      if( $collection[t].length < longitudMenor ){
                          // se agrega al principio y se define la nueva longitud menor
                          collectionReOrder.push( $collection[t], 0 );
                          longitudMenor = $collection[t];
                      }else{
                          // se agrega al final
                          collectionReOrder.push( $collection[t] );
                      }
                  }
                  var firstItem: any = collectionReOrder[0];
                  var conteosRequeridos:number = $conteos > 0 ? $conteos: collectionReOrder.length;
                  for( var f:number = 0; f < firstItem.length; f++ ){
                      var indice:number = firstItem[f]; 
                      var conteoApariciones:number = 0;
                      for( var g:number = 0; g < collectionReOrder.length; g++ ){
                          /* el index debe existir en absolutamente todos los demas arrys para ser agregado al array final, se establece un contador */
                          //if( indice == collectionReOrder[g][indice] )	conteoApariciones++;
                          var pos:number = collectionReOrder[g].toString().indexOf( indice + "");
                          if( collectionReOrder[g].toString().indexOf( indice +"") > -1 ){
                              conteoApariciones++;
                          }
                          if( conteoApariciones == conteosRequeridos ){
                              final.push( indice );					
                          }
                      }
                  }
              }
              return final;
      }
      
  
          getCampoLike( $propiedad:string, $valor:string ): any{
              var arrayReturn: any = [];
              var primaryKey:string = "";
              primaryKey = $propiedad + $valor;
              if( this.indexObject["cache-query"][ primaryKey ] != null ){
                  arrayReturn = this.indexObject["cache-query"][ primaryKey ];
                  return arrayReturn;
              }else{
                  if( this.indexObject.hasOwnProperty( $propiedad ) && this.indexObject[ $propiedad ] != null ){
                      for( var key in this.indexObject[ $propiedad ] ){
                          if( key.indexOf( $valor ) != -1 ){
                              arrayReturn.push( key );	
                          }
                      }
                  }else{
                      console.log( 'No existe la propiedad: ' + $propiedad + ' en ' + primaryKey );
                  }
              }
              this.indexObject["cache-query"][primaryKey] = arrayReturn;
              return arrayReturn;
          } 
          
  
          getCampoLikeLowerCase( $propiedad:string, $valor:string ): any{
              var arrayReturn: any = [];
              var primaryKey:string = "";
              primaryKey = $propiedad + $valor;
              if( this.indexObject["cache-query"][ primaryKey ] != null ){
                  arrayReturn = this.indexObject["cache-query"][ primaryKey ];
                  return arrayReturn;
              }else{
                  if( this.indexObject.hasOwnProperty( $propiedad ) && this.indexObject[ $propiedad ] != null ){
                      for( var key of this.indexObject[ $propiedad ] ){
                          if( key.indexOf( $valor.toLocaleLowerCase() ) != -1 ){
                              arrayReturn.push( key );	
                          }
                      }
                  }else{
                      console.log( 'No existe la propiedad: ' + $propiedad + ' en ' + primaryKey );
                  }
              }
              this.indexObject["cache-query"][primaryKey] = arrayReturn;
              return arrayReturn;
      }
      
  
      getValoresCampo( $propiedad:string, $indices: any ): any{
              var arrayReturn: any = [];
              var primaryKey:string = $propiedad + $indices.toString();
              if( this.indexObject["cache-query"][primaryKey] != null ){
                  arrayReturn = this.indexObject["cache-query"][primaryKey];
                  return arrayReturn;
              }
              for( var t:number = 0; t < $indices.length; t++ ){ 
                  var currentFila;   
                  let currentFila  = this.universo[ $indices[t] ]; 

                  /* valido si la clase tiene la propiedad a agregar y agrego solo una vez el valor al arreglo final*/
                   if( currentFila.hasOwnProperty( $propiedad ) && arrayReturn.indexOf( currentFila[ $propiedad] ) == -1 )	arrayReturn.push( currentFila[ $propiedad] );
              }
              this.indexObject["cache-query"][primaryKey] = arrayReturn;
              return arrayReturn;
      }
      
     
       private  key: Object;
           getValoresCampoOmitiendoRepetidos( $propiedad:string, $indices: any): any{
              var arrayReturn: any = [];
              this.key = new Object();
              var primaryKey:string = $propiedad + $indices.toString();
              
              if( this.indexObject["cache-query"][primaryKey] != null ){
                  arrayReturn = this.indexObject["cache-query"][primaryKey];
                  return arrayReturn;
              }
              
              for( var t:number = 0; t < $indices.length; t++ ){
                var currentFila;   
                let currentFila  = this.universo[ $indices[t] ]; 
                 
                      if($propiedad.indexOf(".") > -1 ){
                      var propiedades: any[] = $propiedad.split(".");
                      var ultimaPropiedad:string = propiedades.pop();
                      
                    
                      var currentParent = currentFila;
                      for (var i:number = 0; i < propiedades.length; i++) 
                      {
                          if(currentParent.hasOwnProperty(propiedades[i]))
                              currentParent = currentParent[propiedades[i]];
                      }
                    
                       if( currentParent.hasOwnProperty( ultimaPropiedad ) && !this.key.hasOwnProperty(currentParent[ ultimaPropiedad] ) && currentParent[ ultimaPropiedad] != null ){
                          this.key[currentParent[ ultimaPropiedad]] = currentParent[ ultimaPropiedad];
                          arrayReturn.push( currentParent[ultimaPropiedad] );
                      }
                      
                  }else{
                      
                     
                      if( currentFila.hasOwnProperty( $propiedad ) && !this.key.hasOwnProperty(currentFila[ $propiedad] ) && currentFila[ $propiedad] != null ){
                          this.key[currentFila[ $propiedad]] = currentFila[ $propiedad];
                          arrayReturn.push( currentFila[$propiedad] );
                      }
                  }
                  
              }
              this.key = null;
              this.indexObject["cache-query"][primaryKey] = arrayReturn;
              return arrayReturn;
          } 
  
  
      getValoresCampoOmitiendoRepetidosDeTodoElUniverso( $propiedad:string): any{
              var arrayReturn: any = [];
              this.key = new Object;
              var primaryKey:string = $propiedad + this.universo.toString();
              if( this.indexObject["cache-query"][primaryKey] != null ){
                  arrayReturn = this.indexObject["cache-query"][primaryKey];
                  return arrayReturn;
              }
              for( var t:number = 0; t < this.universo.length; t++ ){
                var currentFila;   
                let currentFila  = this.universo[t]; 
                
                  /* valido si la clase tiene la propiedad a agregar y agrego solo una vez el valor al arreglo final*/
                  if( currentFila.hasOwnProperty( $propiedad ) && !this.key.hasOwnProperty(currentFila[ $propiedad] ) && currentFila[ $propiedad] != null ){
                      this.key[currentFila[ $propiedad]] = currentFila[ $propiedad];
                      arrayReturn.push( currentFila[$propiedad] );
                  }
              }
              this.key = null;
              this.indexObject["cache-query"][primaryKey] = arrayReturn;
              return arrayReturn;
      }
      
  
      getSumarCampo( $propiedad:string, $indices: any[], $omitirRepetidosEnCampo:string = "", $universo:boolean=false ):number{
              var totalReturn:number = 0;
              var primaryKey:string = $propiedad + $omitirRepetidosEnCampo + $indices.toString();
              var valoresCampoOmitir: any[] = [];
              
              if( !this.sinCache && this.indexObject["cache-query"][primaryKey] != null && !$universo)
              {
                  totalReturn = this.indexObject["cache-query"][primaryKey];
                  return totalReturn;
              }
              
              var cont:number = $universo ? this.universo.length:$indices.length;
              var currentFila: any ;
              for( var t:number = 0; t < cont; t++ ){
                  
                  if($universo)
                  {
                      currentFila = this.universo[t];
                  }
                  else
                  {
                      currentFila = this.universo[$indices[t]];
                  }
                  
                  if($propiedad.indexOf(".") > -1 ){
                      var isPropertyError:Boolean = false;
                      var propiedades: any = $propiedad.split(".");
                      var ultimaPropiedad:string = propiedades.pop(); 
                      
                      //recorrer las propiedades, verificando que existen todas en el objeto o clase y así llegar a la propiedad que nos interesa
                       var currentParent = currentFila;
                      for (var i:number = 0; i < propiedades.length; i++) 
                      {
                          if(currentParent.hasOwnProperty(propiedades[i]))
                              currentParent = currentParent[propiedades[i]];
                          else
                              isPropertyError = true;
                      }
                      
                      if( currentParent.hasOwnProperty(ultimaPropiedad)){
                          if( $omitirRepetidosEnCampo == "" ){
                              if( currentParent[ ultimaPropiedad] || currentParent[ $propiedad] ){
                                  totalReturn += currentParent[ ultimaPropiedad ];
                              }else{
                                  console.log('No se pudo sumar ' + currentParent[ ultimaPropiedad ] + ' debido a que no es number o int. Indices: [' + $indices.toString() + '] ' );
                              }
                          }else if( currentParent.hasOwnProperty( $omitirRepetidosEnCampo ) && valoresCampoOmitir.indexOf( currentParent[ $omitirRepetidosEnCampo] ) == -1 ){
                              valoresCampoOmitir.push( currentParent[ $omitirRepetidosEnCampo] );
                              totalReturn += currentParent[ ultimaPropiedad];
                          }
                      }else{
                          isPropertyError = true;
                      }
                      
                      if(isPropertyError){
                          console.log('No se pudo sumar la propiedad: ' + $propiedad.toString() );
                      }
                      
                  }else{
                      
                      if( currentFila.hasOwnProperty( $propiedad ) ){
                          if( $omitirRepetidosEnCampo == "" ){
                              if( currentFila[ $propiedad]  || currentFila[ $propiedad] ){
                                  totalReturn += currentFila[ $propiedad];
                              }else{
                                  console.log('No se pudo sumar ' + currentFila[ $propiedad] + ' debido a que no es number o int. Indices: [' + $indices.toString() + '] ' );
                              }
                          }else if( currentFila.hasOwnProperty( $omitirRepetidosEnCampo ) && valoresCampoOmitir.indexOf( currentFila[ $omitirRepetidosEnCampo] ) == -1 ){
                              valoresCampoOmitir.push( currentFila[ $omitirRepetidosEnCampo] );
                              totalReturn += currentFila[ $propiedad];
                          }
                      }else{
                          console.log('No se pudo sumar la propiedad: ' + $propiedad.toString() );
                      }
                      
                  }
              }
              this.indexObject["cache-query"][primaryKey] = totalReturn;
              return totalReturn;
          }
   
  
                  /**
           * Obtiene el importe de dos campos dados, por ejemplo Precio Unitario y Numero de Piezas, entonces multiplica los campos, y suma todos los importes para 
           * regresar un total
           * */
           getImporteDeLosCampos( $campoPU:string, $campoCantidad:string,$indices: any, $omitirRepetidosEnCampo:string = "" ):number{
              var totalReturn:number = 0;
              var primaryKey:string = $campoPU + $campoCantidad+ $omitirRepetidosEnCampo + $indices.toString();
              var valoresCampoOmitir:any = [];
              
              if( this.indexObject["cache-query"][primaryKey] != null ){
                  totalReturn = this.indexObject["cache-query"][primaryKey];
                  return totalReturn;
              }
              for( var t:number = 0; t < $indices.length; t++ ){
                var currentFila;   
                let currentFila  = this.universo[ $indices[t] ]; 
                  if( currentFila.hasOwnProperty( $campoPU ) && currentFila.hasOwnProperty($campoCantidad) ){
                      if( $omitirRepetidosEnCampo == "" ){
                          if( (currentFila[ $campoPU] || currentFila[ $campoPU] ) && (currentFila[ $campoCantidad]  || currentFila[$campoCantidad]  )){
                              totalReturn += currentFila[ $campoPU] * currentFila[$campoCantidad];
                          }else{
                              console.log('No se pudo sumar ' + currentFila[ $campoPU] +' o '+ currentFila[ $campoCantidad] + ' debido a que no es number o int. Indices: [' + $indices.toString() + '] ' );
                          }
                      }else if( currentFila.hasOwnProperty( $omitirRepetidosEnCampo ) && valoresCampoOmitir.indexOf( currentFila[ $omitirRepetidosEnCampo] ) == -1 ){
                          valoresCampoOmitir.push( currentFila[ $omitirRepetidosEnCampo] );
                          if( (currentFila[ $campoPU]  || currentFila[ $campoPU] ) && (currentFila[ $campoCantidad] || currentFila[$campoCantidad]  )){
                              totalReturn += currentFila[ $campoPU] * currentFila[$campoCantidad];
                          }else{
                              console.log('No se pudo sumar ' + currentFila[ $campoPU] +' o '+ currentFila[ $campoCantidad] + ' debido a que no es number o int. Indices: [' + $indices.toString() + '] ' );
                          }
                      }
                  }else{
                      console.log('No se pudo sumar la propiedad: ' + $campoPU.toString() + ' o ' + $campoCantidad.toString());
                  }
              }
              this.indexObject["cache-query"][primaryKey] = totalReturn;
              return totalReturn;
          } 
  
  
          armarLista( $punteros: any ): any{
              var arrReturn = new Array<any>();
              for( var h:number = 0; h < $punteros.length; h++ ){
                  arrReturn.push( this.universo[$punteros[h]]);
              }
              return arrReturn;
          } 
  
           ensamblarLista( $campos:any, $omitirRepetidosEnCampo:string = "" ): any{
              this.cronometro = new Date();
              var inicioTime = this.cronometro.getTime();
              var camposConsulta:String = '';
              for( var h:number = 0; h < $campos.length; h++ ){
                  if( $campos[h] != null ){
                      camposConsulta += this.indexCamposFiltro[h] + '='+  $campos[h] + ',';
                  }
              }
              camposConsulta = ' [' + camposConsulta +'] ';
              var punteros:any = this.getPunteros($campos);
              if( $omitirRepetidosEnCampo != "" ) punteros = this.omitirValoresRepetidosEnCampo( punteros, $omitirRepetidosEnCampo );
              var ensamble:any = this.armarLista( punteros );
              let terminadoTime = new Date().getTime();
            //  console.log( 'Tiempo ensamble: ' + (terminadoTime - inicioTime) + ' ms, ' + ensamble.length + '/' + this.universo.length + ' fila(s) universo ' + camposConsulta );
              return ensamble;
          }
   
  
  

}