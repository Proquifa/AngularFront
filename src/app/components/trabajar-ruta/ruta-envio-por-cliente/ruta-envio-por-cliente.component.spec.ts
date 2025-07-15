import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEnvioPorClienteComponent } from './ruta-envio-por-cliente.component';

describe('RutaEnvioPorClienteComponent', () => {
  let component: RutaEnvioPorClienteComponent;
  let fixture: ComponentFixture<RutaEnvioPorClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEnvioPorClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEnvioPorClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
