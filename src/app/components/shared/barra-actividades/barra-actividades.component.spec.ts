import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraActividadesComponent } from './barra-actividades.component';

describe('BarraActividadesComponent', () => {
  let component: BarraActividadesComponent;
  let fixture: ComponentFixture<BarraActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
