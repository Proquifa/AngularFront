import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraProgresoTrabajarRutaEnvioComponent } from './barra-progreso-trabajar-ruta-envio.component';

describe('BarraProgresoTrabajarRutaEnvioComponent', () => {
  let component: BarraProgresoTrabajarRutaEnvioComponent;
  let fixture: ComponentFixture<BarraProgresoTrabajarRutaEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraProgresoTrabajarRutaEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraProgresoTrabajarRutaEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
