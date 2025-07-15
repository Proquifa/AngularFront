import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpTipoPagoComponent } from './pop-up-tipo-pago.component';

describe('PopUpTipoPagoComponent', () => {
  let component: PopUpTipoPagoComponent;
  let fixture: ComponentFixture<PopUpTipoPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpTipoPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpTipoPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
