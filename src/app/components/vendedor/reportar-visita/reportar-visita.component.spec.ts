import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportarVisitaComponent } from './reportar-visita.component';

describe('ReportarVisitaComponent', () => {
  let component: ReportarVisitaComponent;
  let fixture: ComponentFixture<ReportarVisitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportarVisitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportarVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
