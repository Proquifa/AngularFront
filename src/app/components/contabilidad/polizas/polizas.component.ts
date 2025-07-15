import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../../services/catalogo/catalogo.service';
import { CoreContainerComponent } from '../../core-container/core-container.component';
import { OptionClass } from '../../../class/option.class';
import { Router } from '@angular/router';
import { Poliza } from '../../../class/catalogo/poliza.class';

@Component({
  selector: 'pn-polizas',
  templateUrl: './polizas.component.html',
  styleUrls: ['./polizas.component.scss']
})
export class PolizasComponent implements OnInit {

  /*Variables para Contenedor Tabla*/
  public lstPolizas: Array<Poliza> = new Array<Poliza>();
  public lstPolizasAux: Array<Poliza> = new Array<Poliza>();
  /*Variables para Contenedor Filtros*/
  public fechaInicio = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  public fechaFin = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);
  public cantSelects = 4;
  public lstEmpresaEmite = [];
  public lstEmpresaRecibe = [];
  public lstEmpresaEmiteAux = [];
  public lstEmpresaRecibeAux = [];
  public lstItems: Array<Array<OptionClass>> = new Array<Array<OptionClass>>(this.cantSelects).fill(null);
  public defaultItem: Array<OptionClass> = new Array<OptionClass>(this.cantSelects).fill({ id: 0, texto: 'Seleccionar' });
  public lstTipo: Array<OptionClass> = [
    { id: 0, texto: 'Todos' },
    { id: 1, texto: 'Ingreso' },
    { id: 2, texto: 'Engreso' },
    { id: 3, texto: 'Diario' },
  ];
  public empresaEmite: OptionClass = null;
  public empresaRecibe: OptionClass = null;
  public tipo: OptionClass = null;

  public classBar = 'containerLateralBar';
  public classBtn = 'containerBtnImg';

  public idEmpresa = 0;

  constructor(
    private router: Router,
    private catalogoService: CatalogoService,
    private coreContainer: CoreContainerComponent
  ) { }

  ngOnInit() {
    this.coreContainer.openModal(2);
    // this.fnObtenerLstPolizas();
    this.catalogoService.obtenerEmpresasContabilidad().subscribe(resp => {
      console.log('obtenerEmpresasContabilidad', resp);
      this.lstItems[3] = new Array<OptionClass>();
      if (resp.current !== undefined && resp.current !== null && resp.current.length > 0) {
        for (let item of resp.current) {
          let opt = new OptionClass();
          opt.id = item.llave;
          opt.texto = item.valor;
          this.lstItems[3].push(Object.assign(new OptionClass(), opt));
        }
        if (this.lstItems[3].length > 0) {
          this.defaultItem[3] = Object.assign(new OptionClass(), this.lstItems[3][0]);
        }
      }
    }, error => {
      console.log('Error obtenerEmpresasContabilidad', error);
    });
  }
  fnHideBar() {
    if (this.classBar.indexOf('closed') !== -1) {
      this.classBar = 'containerLateralBar';
      this.classBtn = 'containerBtnImg';
    } else {
      this.classBar = 'containerLateralBar closed';
      this.classBtn = 'containerBtnImg rotated';
    }
  }

  fnFiltar() {
    this.coreContainer.openModal(2);
    let lstAux = [];
    let lstAux1 = [];
    console.log(this.tipo, this.empresaEmite, this.empresaRecibe);
    for (let item of this.lstPolizasAux) {
      if (item.fechaDate.getTime() >= this.fechaInicio.getTime() && item.fechaDate.getTime() <= this.fechaFin.getTime()) {
        console.log('Encontró coincidencia entre fechas', item);
        lstAux.push(Object.assign({}, item));
      }
    }
    if (this.tipo !== null && this.tipo.texto !== 'Seleccionar') {
      if (this.tipo.id > 0) {
        for (let item of lstAux) {
          if (item.tipo === this.tipo.id) {
            console.log('Encontró coincidencia tipo', item);
            lstAux1.push(Object.assign({}, item));
          }
        }
        lstAux = Object.assign([], lstAux1);
        lstAux1 = [];
      }
    }
    if (this.empresaEmite !== null && this.empresaEmite.texto !== 'Seleccionar') {
      for (let item of lstAux) {
        if (this.empresaEmite.texto === item.empresa) {
          console.log('Encontró coincidencia empresa emite', item);
          lstAux1.push(Object.assign({}, item));
        }
      }
      lstAux = Object.assign([], lstAux1);
      lstAux1 = [];
    }

    if (this.empresaRecibe !== null && this.empresaRecibe.texto !== 'Seleccionar') {
      for (let item of lstAux) {
        if (this.empresaRecibe.texto === item.empresaRecibe) {
          console.log('Encontró coincidencia empresa recibe', item);
          lstAux1.push(Object.assign({}, item));
        }
      }
      lstAux = Object.assign([], lstAux1);
      lstAux1 = [];
    }

    this.lstPolizas = Object.assign([], lstAux);
    setTimeout(() => {
      this.coreContainer.closeModal(2);
    }, 1500);
  }

  fnAgregarPoliza() {
    console.log('fnAgregarPoliza');
    this.router.navigate(['/protected/contabilidad/polizas/agregar']);
  }
  fnEditarPoliza(id: number) {
    console.log('fnEditarPoliza', id);
    this.router.navigate(['/protected/contabilidad/polizas/editar', id]);
  }

  fnOutPutItem($event: OptionClass, opc: number) {
    console.log('fnOutPutItem', $event, opc);
    switch (opc) {
      case 0:
        this.lstItems[1] = new Array<OptionClass>();
        this.lstItems[2] = new Array<OptionClass>();
        this.empresaEmite = null;
        this.empresaRecibe = null;
        this.tipo = ($event.texto !== '' && $event.texto !== 'Selecionar') ? Object.assign(new OptionClass(), $event) : null;
        switch ($event.id) {
          case 0: break;
          case 1:
            this.lstItems[1] = Object.assign(this.lstEmpresaEmite);
            this.lstItems[2] = Object.assign(this.lstEmpresaRecibe);
            break;
          case 2:
            this.lstItems[1] = Object.assign(this.lstEmpresaRecibe);
            this.lstItems[2] = Object.assign(this.lstEmpresaEmite);
            break;
          case 3:
            this.lstItems[1] = Object.assign(this.lstEmpresaEmite);
            this.lstItems[2] = Object.assign(this.lstEmpresaRecibe);
            break;
        }
        break;
      case 1:
        this.empresaEmite = ($event.texto !== '' && $event.texto !== 'Selecionar') ? Object.assign(new OptionClass(), $event) : null;
        break;
      case 2:
        this.empresaRecibe = ($event.texto !== '' && $event.texto !== 'Selecionar') ? Object.assign(new OptionClass(), $event) : null;
        break;
      case 3:
        this.idEmpresa = $event.id;
        this.fnObtenerLstPolizasEmpresa();
        break;
    }
  }

  fnGetFechaImpl($event: string, opc: number) {
    // console.log('fnGetFechaImpl', $event, typeof $event, opc);
  }

  fnObtenerLstPolizasEmpresa() {
    this.lstItems[0] = Object.assign(new Array<OptionClass>(), this.lstTipo);
    this.lstPolizas.length = 0;
    this.lstPolizasAux.length = 0;
    this.lstEmpresaEmite = [];
    this.lstEmpresaRecibe = [];
    this.lstEmpresaEmiteAux = [];
    this.lstEmpresaRecibeAux = [];
    this.catalogoService.obtenerLstPolizasEmpresa(this.idEmpresa).subscribe(resLst => {
      console.log('obtenerLstPolizas', resLst.current);
      if (resLst.current !== undefined && resLst.current !== null && resLst.current.length > 0) {
        let x = 0;
        let lstAuxE = [];
        let lstAuxR = [];
        for (let item of resLst.current) {
          let fechaAux = item.fecha.split('-');
          item.fechaDate = new Date(Number(fechaAux[0]), Number(fechaAux[1]) - 1, Number(fechaAux[2]));
          item.fechaView = fechaAux[0] + '/' + fechaAux[1] + '/' + fechaAux[2];
          item.imgSrc = (item.aplicada) ? './assets/Images/IngresosEgresosEditar.svg' : './assets/Images/IngresosEgresosEditar.svg';
          item.imgClass = (item.aplicada) ? 'containerBodyTableBodyRowColImg imgDisabled' : 'containerBodyTableBodyRowColImg';
          item.tipoTexto = (item.tipo === 1) ? 'Ingreso' : (item.tipo === 2) ? 'Egreso' : 'Diario';
          item.empresa = (item.tipo === 1) ? item.empresa.alias : (item.tipo === 2) ? item.proveedor.nombre : 'N/A';
          item.empresaRecibe = (item.tipo === 1) ? item.cliente.nombre : (item.tipo === 2) ? item.empresa.alias : 'N/A';
          lstAuxE.push(item.empresa);
          lstAuxR.push(item.empresaRecibe);
          this.lstPolizas.push(Object.assign({}, item));
          this.lstPolizasAux.push(Object.assign({}, item));
          x++;
        }
        this.lstEmpresaEmiteAux = lstAuxE.filter(function (elem, index, self) {
          return index === self.indexOf(elem);
        });
        this.lstEmpresaRecibeAux = lstAuxR.filter(function (elem, index, self) {
          return index === self.indexOf(elem);
        });
        x = 0;
        for (let ee of this.lstEmpresaEmiteAux) {
          let opt: OptionClass = {
            id: 0,
            texto: ee
          };
          this.lstEmpresaEmite.push(Object.assign(new OptionClass(), opt));
          x++;
        }
        x = 0;
        for (let ee of this.lstEmpresaRecibeAux) {
          let opt: OptionClass = {
            id: 0,
            texto: ee
          };
          this.lstEmpresaRecibe.push(Object.assign(new OptionClass(), opt));
          x++;
        }
      }
      setTimeout(() => {
        this.coreContainer.closeModal(2);
      }, 1500);
    }, error => {
      console.log('Error obtenerLstPolizas', error);
      setTimeout(() => {
        this.coreContainer.closeModal(2);
      }, 1500);
    });
  }

}
