import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaOperacionInspeccionComponent } from './vista-operacion-inspeccion.component';

describe('VistaOperacionInspeccionComponent', () => {
  let component: VistaOperacionInspeccionComponent;
  let fixture: ComponentFixture<VistaOperacionInspeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaOperacionInspeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaOperacionInspeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
