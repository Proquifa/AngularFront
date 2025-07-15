import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizarEnvioClienteComponent } from './finalizar-envio-cliente.component';

describe('FinalizarEnvioClienteComponent', () => {
  let component: FinalizarEnvioClienteComponent;
  let fixture: ComponentFixture<FinalizarEnvioClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizarEnvioClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizarEnvioClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
