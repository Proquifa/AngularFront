import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajarRutasClientesDetalleComponent } from './trabajar-rutas-clientes-detalle.component';

describe('TrabajarRutasClientesDetalleComponent', () => {
  let component: TrabajarRutasClientesDetalleComponent;
  let fixture: ComponentFixture<TrabajarRutasClientesDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajarRutasClientesDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajarRutasClientesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
