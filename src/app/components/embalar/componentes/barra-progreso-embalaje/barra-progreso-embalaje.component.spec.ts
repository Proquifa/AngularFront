import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraProgresoEmbalajeComponent } from './barra-progreso-embalaje.component';

describe('BarraProgresoEmbalajeComponent', () => {
  let component: BarraProgresoEmbalajeComponent;
  let fixture: ComponentFixture<BarraProgresoEmbalajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraProgresoEmbalajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraProgresoEmbalajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
