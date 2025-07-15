import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaRutasComponent } from './tarjeta-rutas.component';

describe('TarjetaRutasComponent', () => {
  let component: TarjetaRutasComponent;
  let fixture: ComponentFixture<TarjetaRutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaRutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
