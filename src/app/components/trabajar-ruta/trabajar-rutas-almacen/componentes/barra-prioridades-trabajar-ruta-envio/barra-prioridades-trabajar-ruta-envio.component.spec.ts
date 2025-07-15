import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPrioridadesTrabajarRutaEnvioComponent } from './barra-prioridades-trabajar-ruta-envio.component';

describe('BarraPrioridadesTrabajarRutaEnvioComponent', () => {
  let component: BarraPrioridadesTrabajarRutaEnvioComponent;
  let fixture: ComponentFixture<BarraPrioridadesTrabajarRutaEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraPrioridadesTrabajarRutaEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraPrioridadesTrabajarRutaEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
