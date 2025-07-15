import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarInspeccionComponent } from './iniciar-inspeccion.component';

describe('IniciarInspeccionComponent', () => {
  let component: IniciarInspeccionComponent;
  let fixture: ComponentFixture<IniciarInspeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciarInspeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarInspeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
