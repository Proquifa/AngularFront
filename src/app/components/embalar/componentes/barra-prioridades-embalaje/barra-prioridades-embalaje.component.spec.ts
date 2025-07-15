import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPrioridadesEmbalajeComponent } from './barra-prioridades-embalaje.component';

describe('BarraPrioridadesEmbalajeComponent', () => {
  let component: BarraPrioridadesEmbalajeComponent;
  let fixture: ComponentFixture<BarraPrioridadesEmbalajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraPrioridadesEmbalajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraPrioridadesEmbalajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
