import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarDocumentoComponent } from './cargar-documento.component';

describe('CargarDocumentoComponent', () => {
  let component: CargarDocumentoComponent;
  let fixture: ComponentFixture<CargarDocumentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarDocumentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
