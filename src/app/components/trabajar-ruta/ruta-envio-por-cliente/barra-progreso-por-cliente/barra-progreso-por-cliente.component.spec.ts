import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraProgresoPorClienteComponent } from './barra-progreso-por-cliente.component';

describe('BarraProgresoPorClienteComponent', () => {
  let component: BarraProgresoPorClienteComponent;
  let fixture: ComponentFixture<BarraProgresoPorClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraProgresoPorClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraProgresoPorClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
