import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CerrarRutaComponent } from './cerrar-ruta.component';

describe('CerrarRutaComponent', () => {
  let component: CerrarRutaComponent;
  let fixture: ComponentFixture<CerrarRutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerrarRutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CerrarRutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
