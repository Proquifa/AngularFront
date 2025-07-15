import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaSeccionesInspeccionComponent } from './vista-secciones-inspeccion.component';

describe('VistaSeccionesInspeccionComponent', () => {
  let component: VistaSeccionesInspeccionComponent;
  let fixture: ComponentFixture<VistaSeccionesInspeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaSeccionesInspeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaSeccionesInspeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
