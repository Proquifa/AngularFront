import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoNotaCreditoComponent } from './saldo-nota-credito.component';

describe('SaldoNotaCreditoComponent', () => {
  let component: SaldoNotaCreditoComponent;
  let fixture: ComponentFixture<SaldoNotaCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaldoNotaCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldoNotaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
