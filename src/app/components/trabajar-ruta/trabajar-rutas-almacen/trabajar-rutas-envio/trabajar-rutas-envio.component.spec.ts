import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajarRutasEnvioComponent } from './trabajar-rutas-envio.component';

describe('TrabajarRutasEnvioComponent', () => {
  let component: TrabajarRutasEnvioComponent;
  let fixture: ComponentFixture<TrabajarRutasEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrabajarRutasEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajarRutasEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
