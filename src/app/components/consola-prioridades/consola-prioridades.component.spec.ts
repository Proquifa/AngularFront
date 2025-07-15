import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolaPrioridadesComponent } from './consola-prioridades.component';

describe('ConsolaPrioridadesComponent', () => {
  let component: ConsolaPrioridadesComponent;
  let fixture: ComponentFixture<ConsolaPrioridadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolaPrioridadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolaPrioridadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
