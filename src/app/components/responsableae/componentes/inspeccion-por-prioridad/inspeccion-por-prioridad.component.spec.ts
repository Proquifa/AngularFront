import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspeccionPorPrioridadComponent } from './inspeccion-por-prioridad.component';

describe('InspeccionPorPrioridadComponent', () => {
  let component: InspeccionPorPrioridadComponent;
  let fixture: ComponentFixture<InspeccionPorPrioridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspeccionPorPrioridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspeccionPorPrioridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
