import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPrioridadesPorClienteComponent } from './barra-prioridades-por-cliente.component';

describe('BarraPrioridadesPorClienteComponent', () => {
  let component: BarraPrioridadesPorClienteComponent;
  let fixture: ComponentFixture<BarraPrioridadesPorClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraPrioridadesPorClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraPrioridadesPorClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
