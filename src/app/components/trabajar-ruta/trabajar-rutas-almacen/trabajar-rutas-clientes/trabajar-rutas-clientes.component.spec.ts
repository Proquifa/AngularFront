import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajarRutasClientesComponent } from './trabajar-rutas-clientes.component';

describe('TrabajarRutasClientesComponent', () => {
  let component: TrabajarRutasClientesComponent;
  let fixture: ComponentFixture<TrabajarRutasClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajarRutasClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajarRutasClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
