import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraProgresoDecrementalComponent } from './barra-progreso-decremental.component';

describe('BarraProgresoDecrementalComponent', () => {
  let component: BarraProgresoDecrementalComponent;
  let fixture: ComponentFixture<BarraProgresoDecrementalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraProgresoDecrementalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraProgresoDecrementalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
