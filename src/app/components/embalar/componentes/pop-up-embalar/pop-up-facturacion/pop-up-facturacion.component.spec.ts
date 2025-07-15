import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpFacturacionComponent } from './pop-up-facturacion.component';

describe('PopUpFacturacionComponent', () => {
  let component: PopUpFacturacionComponent;
  let fixture: ComponentFixture<PopUpFacturacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpFacturacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
