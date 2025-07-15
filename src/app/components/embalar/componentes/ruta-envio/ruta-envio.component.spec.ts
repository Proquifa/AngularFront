import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEnvioComponent } from './ruta-envio.component';

describe('RutaEnvioComponent', () => {
  let component: RutaEnvioComponent;
  let fixture: ComponentFixture<RutaEnvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEnvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
