import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpGenerarEtiquetaEstadoComponent } from './pop-up-generar-etiqueta-estado.component';

describe('PopUpGenerarEtiquetaEstadoComponent', () => {
  let component: PopUpGenerarEtiquetaEstadoComponent;
  let fixture: ComponentFixture<PopUpGenerarEtiquetaEstadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpGenerarEtiquetaEstadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpGenerarEtiquetaEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
