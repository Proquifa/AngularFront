import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReportarVisitaComponent } from './formulario-reportar-visita.component';

describe('FormularioReportarVisitaComponent', () => {
  let component: FormularioReportarVisitaComponent;
  let fixture: ComponentFixture<FormularioReportarVisitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioReportarVisitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioReportarVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
