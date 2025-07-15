import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajarRutasEnvioInformacionComponent } from './trabajar-rutas-envio-informacion.component';

describe('TrabajarRutasEnvioInformacionComponent', () => {
  let component: TrabajarRutasEnvioInformacionComponent;
  let fixture: ComponentFixture<TrabajarRutasEnvioInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajarRutasEnvioInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajarRutasEnvioInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
